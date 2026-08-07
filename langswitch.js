/* 通用中英切换（运行时按文本语言分类，不改页面结构）
   用法：页面末尾 <script src="/aigora-citizen-works/langswitch.js"></script>
   原理：遍历文本节点，按字符构成判为中文/英文，各自包一层容器；
   已带 en 类名的原有英文层直接接管。切换只切显示，不动 DOM 顺序。

   矢量图（SVG）里的文字要用 <tspan> 包，不能用 <span>（2026-08-07 改）。
   矢量图只渲染它自己那套元素，塞一个普通网页的 <span> 进 <text> 里，浏览器不画它，
   图上的中文就整片消失；那幅图又大（Sigma 三流循环图 3376×3939），两百多处文字
   逐个替换逼着它反复重排重画，渲染线程被占满，浏览器报「页面无响应」。
   实测：把 20 处文字按旧做法替换后，这些 <text> 的绘制宽度全部变成 0；
   删掉本脚本引用的对照页立刻打开，带脚本的原页五分钟无响应。
   受影响的四页：sigma/three-flow-1899（191 处）、pharma/judgment（43）、
   leimma/asabiyya（40）、nullroute/monitor（3）。 */
(function(){
  // 自带切换的页面不启动本脚本（2026-08-07 加）。
  // 页面若已经自己管中英（像立宪史卷一的 .zh/.en 两套内容、《这次》的开场选择屏），
  // 再叠一层按字符隐藏，两套规则会互相吃掉对方该显示的那一边。立宪史英文态因此
  // 整页几乎空白，《这次》的选择屏只剩一个选项。这类页面在自己的 head 里写一行
  // <meta name="aigora-lang" content="self">，本脚本读到就退出，改由该页写状态桥接。
  if(document.querySelector('meta[name="aigora-lang"][content="self"]')) return;

  var ZH = /[一-鿿]/, EN = /[A-Za-z]{2,}/;
  var SKIP = {SCRIPT:1, STYLE:1, TEXTAREA:1, PRE:1, CODE:1};  // CODE 内是作品原名等专名，不分语言、两态都留
  var EN_CLASS = /(^|\s)(en|en-t|en-line|enrel|seden|hn-en|tp-en|t-en|dek-en)(\s|$)/;
  var SVGNS = 'http://www.w3.org/2000/svg';

  /* 这段文字该包进什么容器：普通网页用 <span>，矢量图的文字里用 <tspan>。
     返回 null 表示这个位置不能包（矢量图的 <title>/<desc> 之类），原样留着。 */
  function wrapperFor(node){
    var p = node.parentElement;
    if(!p || p.namespaceURI !== SVGNS) return 'span';   // 含 foreignObject 里的 HTML
    var tag = (p.tagName || '').toLowerCase();
    if(tag === 'text' || tag === 'tspan' || tag === 'textpath') return 'tspan';
    return null;
  }
  function mkWrap(kind){
    return kind === 'tspan' ? document.createElementNS(SVGNS, 'tspan')
                            : document.createElement('span');
  }
  /* SVG 元素上 dataset 的支持不如 HTML 稳，统一走 getAttribute/setAttribute */
  function lgOf(el){ return el.getAttribute ? el.getAttribute('data-lg') : null; }

  function lang(t){
    var s = t.replace(/\s/g,''); if(!s) return null;
    var zh = (s.match(/[一-鿿]/g)||[]).length;
    var en = (s.match(/[A-Za-z]/g)||[]).length;
    if(zh >= 2 && zh >= en*0.3) return 'zh';
    // 判英文要求成句（三个以上单词）。单个拉丁词多半是术语或专名
    // （ʿaṣabiyya、factio、Stack Atlas），两种语言下都该留着。
    var words = (t.match(/[A-Za-zÀ-ɏʰ-ˤ]{2,}/g)||[]).length;
    if(words >= 3 && zh === 0 && en >= 10) return 'en';
    return null;
  }

  // 同一段文字里「中文 / English」用斜杠或竖线并置：先按分隔符拆成两半
  function splitMixed(t){
    var seps = [' / ', ' | ', '／', ' · '];
    for(var i=0;i<seps.length;i++){
      var k = t.indexOf(seps[i]);
      if(k <= 0) continue;
      var a = t.slice(0, k), b = t.slice(k + seps[i].length);
      var la = lang(a), lb = lang(b);
      if(la && lb && la !== lb) return [[a, la], [b, lb]];
    }
    return null;
  }

  function walk(node){
    if(node.nodeType === 3){
      var t = node.nodeValue;
      var kind = wrapperFor(node);
      if(!kind) return;                 // 矢量图里不该包文字的位置
      var mixed = splitMixed(t);
      if(mixed){
        for(var p0 = node.parentElement; p0; p0 = p0.parentElement){
          if(lgOf(p0)) { mixed = null; break; }
        }
      }
      if(mixed){
        var frag = document.createDocumentFragment();
        mixed.forEach(function(pair){
          var sp = mkWrap(kind);
          sp.setAttribute('data-lg', pair[1]); sp.textContent = pair[0];
          frag.appendChild(sp);
        });
        node.parentNode.replaceChild(frag, node);
        return;
      }
      var L = lang(t);
      if(!L) return;
      // 已在某个语言层里就不再包
      for(var p = node.parentElement; p; p = p.parentElement){
        if(lgOf(p)) return;
        if(p.className && typeof p.className === 'string' && EN_CLASS.test(p.className)) return;
      }
      var sp = mkWrap(kind);
      sp.setAttribute('data-lg', L); sp.textContent = t;
      node.parentNode.replaceChild(sp, node);
      return;
    }
    // 矢量图里的 <style>/<script> 标签名是小写，大写化后才拦得住
    if(node.nodeType !== 1 || SKIP[(node.tagName || '').toUpperCase()]) return;
    if(node.id === 'langsw') return;
    // 原有英文层：直接标成 en
    if(node.className && typeof node.className === 'string' && EN_CLASS.test(node.className)){
      if(!lgOf(node)) node.setAttribute('data-lg', 'en');
      return;
    }
    var kids = [].slice.call(node.childNodes);
    for(var i=0;i<kids.length;i++) walk(kids[i]);
  }

  function init(){
    var css = document.createElement('style');
    css.textContent = 'html[data-site-lang="zh"] [data-lg="en"]{display:none!important}'
      + 'html[data-site-lang="en"] [data-lg="zh"]{display:none!important}'
      + '#langsw{position:fixed;top:14px;right:16px;z-index:99999;font:13px Georgia,serif;letter-spacing:.15em;'
      + 'padding:6px 14px;cursor:pointer;background:rgba(20,18,15,.75);color:#d8cdb8;border:1px solid #6b6152;border-radius:2px}'
      + '#langsw:hover{color:#fff;border-color:#d8cdb8}';
    document.head.appendChild(css);
    walk(document.body);
    var b = document.createElement('button'); b.id = 'langsw';
    document.body.appendChild(b);
    var L = 'zh'; try{ L = localStorage.getItem('aigora-site-lang') || 'zh'; }catch(e){}
    if(L!=='zh' && L!=='en') L='zh';

    // 单语页面保护：一件作品若只有中文（或只有英文），切到另一种语言时页面会整个空掉。
    // 这类页面不隐藏原文，改在顶端挂一行说明，告诉读者这件作品目前只有哪一种语言。
    var nZh = document.querySelectorAll('[data-lg="zh"]').length;
    var nEn = document.querySelectorAll('[data-lg="en"]').length;
    var only = (nZh > 12 && nEn < nZh * 0.15) ? 'zh' : (nEn > 12 && nZh < nEn * 0.15) ? 'en' : null;
    var note = null;
    if(only){
      note = document.createElement('div');
      note.id = 'langnote';
      note.textContent = (only === 'zh')
        ? 'This work is currently available in Chinese only.'
        : '这件作品目前只有英文版本。';
      note.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99998;padding:8px 16px;'
        + 'background:rgba(20,18,15,.88);color:#d8cdb8;font:13px Georgia,serif;letter-spacing:.08em;'
        + 'text-align:center;display:none';
      document.body.appendChild(note);
    }

    function apply(){
      var eff = (only && L !== only) ? only : L;   // 单语页面永远显示它拥有的那种语言
      document.documentElement.setAttribute('data-site-lang', eff);
      // 值没变就不要写（2026-08-07 改）。textContent 每赋值一次都会拆掉旧文本节点、
      // 建一个新的，这本身是一次 DOM 变动；而下面那个观察器一收到变动就回头调 apply，
      // 于是「变动 → apply → 又一次变动」自己转起来，停不下来，页面被占死。
      // 页面上只要发生过任何一次内容变动就会启动：三流循环图鼠标划过带子时会改
      // 悬停提示的内容，那就是一次变动——馆主报的「打开正常、过一会儿卡住」正是这样来的。
      var want = (L==='zh')?'English':'中文';
      if(b.textContent !== want) b.textContent = want;
      if(note){
        var disp = (L !== only) ? 'block' : 'none';
        if(note.style.display !== disp) note.style.display = disp;
      }
    }
    b.addEventListener('click', function(){ L = (L==='zh')?'en':'zh'; try{ localStorage.setItem('aigora-site-lang', L); }catch(e){} apply(); });
    apply();
    // 作品页后续动态插入的内容（如手痕词云的云团）也纳入。
    // 按钮和说明条是本脚本自己造的，它们身上的变动一律不理，免得自己触发自己。
    var mo = new MutationObserver(function(ms){
      var touched = false;
      ms.forEach(function(m){
        var host = m.target;
        if(host === b || host === note || (b.contains && b.contains(host))) return;
        [].slice.call(m.addedNodes).forEach(function(n){ walk(n); touched = true; });
      });
      if(touched) apply();
    });
    mo.observe(document.body, {childList:true, subtree:true});
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
