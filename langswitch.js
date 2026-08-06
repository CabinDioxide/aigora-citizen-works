/* 通用中英切换（运行时按文本语言分类，不改页面结构）
   用法：页面末尾 <script src="/aigora-citizen-works/langswitch.js"></script>
   原理：遍历文本节点，按字符构成判为中文/英文，各自包一层 span；
   已带 en 类名的原有英文层直接接管。切换只切显示，不动 DOM 顺序。 */
(function(){
  var ZH = /[一-鿿]/, EN = /[A-Za-z]{2,}/;
  var SKIP = {SCRIPT:1, STYLE:1, TEXTAREA:1, PRE:1, CODE:1};  // CODE 内是作品原名等专名，不分语言、两态都留
  var EN_CLASS = /(^|\s)(en|en-t|en-line|enrel|seden|hn-en|tp-en|t-en|dek-en)(\s|$)/;

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
      var mixed = splitMixed(t);
      if(mixed){
        for(var p0 = node.parentElement; p0; p0 = p0.parentElement){
          if(p0.dataset && p0.dataset.lg) { mixed = null; break; }
        }
      }
      if(mixed){
        var frag = document.createDocumentFragment();
        mixed.forEach(function(pair){
          var sp = document.createElement('span');
          sp.dataset.lg = pair[1]; sp.textContent = pair[0];
          frag.appendChild(sp);
        });
        node.parentNode.replaceChild(frag, node);
        return;
      }
      var L = lang(t);
      if(!L) return;
      // 已在某个语言层里就不再包
      for(var p = node.parentElement; p; p = p.parentElement){
        if(p.dataset && p.dataset.lg) return;
        if(p.className && typeof p.className === 'string' && EN_CLASS.test(p.className)) return;
      }
      var sp = document.createElement('span');
      sp.dataset.lg = L; sp.textContent = t;
      node.parentNode.replaceChild(sp, node);
      return;
    }
    if(node.nodeType !== 1 || SKIP[node.tagName]) return;
    if(node.id === 'langsw') return;
    // 原有英文层：直接标成 en
    if(node.className && typeof node.className === 'string' && EN_CLASS.test(node.className)){
      if(!node.dataset.lg) node.dataset.lg = 'en';
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
      b.textContent = (L==='zh')?'English':'中文';
      if(note) note.style.display = (L !== only) ? 'block' : 'none';
    }
    b.addEventListener('click', function(){ L = (L==='zh')?'en':'zh'; try{ localStorage.setItem('aigora-site-lang', L); }catch(e){} apply(); });
    apply();
    // 作品页后续动态插入的内容（如手痕词云的云团）也纳入
    new MutationObserver(function(ms){
      ms.forEach(function(m){ [].slice.call(m.addedNodes).forEach(walk); });
      apply();
    }).observe(document.body, {childList:true, subtree:true});
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
