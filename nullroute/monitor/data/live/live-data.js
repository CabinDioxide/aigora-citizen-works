window.MONITORING_LIVE_DATA = {
  "generatedAt": "2026-08-05T05:11:13.891Z",
  "feeds": {
    "cisaKev": {
      "status": "verified",
      "source": "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
      "title": "CISA Catalog of Known Exploited Vulnerabilities",
      "catalogVersion": "2026.08.04",
      "dateReleased": "2026-08-04T16:45:52.0783Z",
      "count": 1660,
      "newest": [
        {
          "cveID": "CVE-2026-18556",
          "vendorProject": "N-able",
          "product": "N-central",
          "vulnerabilityName": "N-able N-central Authentication Bypass Using an Alternate Path or Channel Vulnerability",
          "dateAdded": "2026-08-04",
          "dueDate": "2026-08-07",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-34486",
          "vendorProject": "Apache",
          "product": "Tomcat",
          "vulnerabilityName": "Apache Tomcat Missing Encryption of Sensitive Data Vulnerability",
          "dateAdded": "2026-08-04",
          "dueDate": "2026-08-07",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-9198",
          "vendorProject": "IBM",
          "product": "Langflow",
          "vulnerabilityName": "IBM Langflow Code Injection Vulnerability",
          "dateAdded": "2026-08-04",
          "dueDate": "2026-08-07",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-18577",
          "vendorProject": "N-able",
          "product": "N-central",
          "vulnerabilityName": "N-able N-central Authentication Bypass Using an Alternate Path or Channel Vulnerability",
          "dateAdded": "2026-08-03",
          "dueDate": "2026-08-06",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-20316",
          "vendorProject": "Cisco",
          "product": "Secure Firewall Management Center (FMC)",
          "vulnerabilityName": "Cisco Secure Firewall Management Center Use of Hard-coded Password Vulnerability",
          "dateAdded": "2026-07-29",
          "dueDate": "2026-08-01",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2025-68686",
          "vendorProject": "Fortinet",
          "product": "FortiOS",
          "vulnerabilityName": "Fortinet FortiOS Exposure of Sensitive Information to an Unauthorized Actor Vulnerability",
          "dateAdded": "2026-07-27",
          "dueDate": "2026-08-10",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-16812",
          "vendorProject": "Arista",
          "product": "VeloCloud Orchestrator",
          "vulnerabilityName": "Arista VeloCloud Orchestrator On-Prem OS Command Injection Vulnerability",
          "dateAdded": "2026-07-27",
          "dueDate": "2026-07-30",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-16232",
          "vendorProject": "Check Point",
          "product": "SmartConsole",
          "vulnerabilityName": "Check Point SmartConsole Improper Authentication Vulnerability",
          "dateAdded": "2026-07-22",
          "dueDate": "2026-07-25",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-50522",
          "vendorProject": "Microsoft",
          "product": "SharePoint",
          "vulnerabilityName": "Microsoft SharePoint Deserialization of Untrusted Data Vulnerability ",
          "dateAdded": "2026-07-22",
          "dueDate": "2026-07-25",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-60137",
          "vendorProject": "WordPress",
          "product": "Core",
          "vulnerabilityName": "WordPress Core SQL Injection Vulnerability",
          "dateAdded": "2026-07-21",
          "dueDate": "2026-08-04",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-63030",
          "vendorProject": "WordPress",
          "product": "Core",
          "vulnerabilityName": "WordPress Core Interpretation Conflict Vulnerability",
          "dateAdded": "2026-07-21",
          "dueDate": "2026-07-24",
          "knownRansomwareCampaignUse": "Unknown"
        },
        {
          "cveID": "CVE-2026-0770",
          "vendorProject": "Langflow",
          "product": "Langflow",
          "vulnerabilityName": "Langflow Inclusion of Functionality from Untrusted Control Sphere Vulnerability",
          "dateAdded": "2026-07-21",
          "dueDate": "2026-07-24",
          "knownRansomwareCampaignUse": "Unknown"
        }
      ],
      "vendorCounts": [
        {
          "name": "Microsoft",
          "count": 382
        },
        {
          "name": "Cisco",
          "count": 95
        },
        {
          "name": "Apple",
          "count": 93
        },
        {
          "name": "Adobe",
          "count": 80
        },
        {
          "name": "Google",
          "count": 72
        },
        {
          "name": "Oracle",
          "count": 45
        },
        {
          "name": "Apache",
          "count": 40
        },
        {
          "name": "Ivanti",
          "count": 35
        },
        {
          "name": "Fortinet",
          "count": 29
        },
        {
          "name": "D-Link",
          "count": 26
        }
      ],
      "ransomwareKnown": 335,
      "error": null
    },
    "consolidatedScreeningList": {
      "status": "needs-api-key",
      "source": "https://developer.trade.gov/api-details#api=consolidated-screening-list&operation=search",
      "note": "The ITA/Commerce API is listed as official, but the gateway requires developer access or a valid API key before this sensor can run."
    },
    "ofacSdn": {
      "status": "verified",
      "source": "https://sanctionslistservice.ofac.treas.gov/api/download/sdn.xml",
      "title": "OFAC SDN List",
      "publishDate": "06/11/2026",
      "count": 19065,
      "sample": [
        {
          "uid": "36",
          "name": "AEROCARIBBEAN AIRLINES",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "173",
          "name": "ANGLO-CARIBBEAN CO., LTD.",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "306",
          "name": "BANCO NACIONAL DE CUBA",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "424",
          "name": "BOUTIQUE LA MAISON",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "475",
          "name": "CASA DE CUBA",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "480",
          "name": "CECOEX, S.A.",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "535",
          "name": "CIMEX",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "536",
          "name": "CIMEX IBERICA",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "537",
          "name": "CIMEX, S.A.",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "540",
          "name": "COMERCIAL IBEROAMERICANA, S.A.",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "551",
          "name": "COMERCIAL CIMEX, S.A.",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        },
        {
          "uid": "552",
          "name": "COMERCIAL DE RODAJES Y MAQUINARIA, S.A.",
          "sdnType": "Entity",
          "programs": [
            "CUBA"
          ]
        }
      ],
      "typeCounts": [
        {
          "name": "Entity",
          "count": 9741
        },
        {
          "name": "Individual",
          "count": 7481
        },
        {
          "name": "Vessel",
          "count": 1499
        },
        {
          "name": "Aircraft",
          "count": 344
        }
      ],
      "programCounts": [
        {
          "name": "RUSSIA-EO14024",
          "count": 6378
        },
        {
          "name": "SDGT",
          "count": 3148
        },
        {
          "name": "IFSR",
          "count": 1532
        },
        {
          "name": "SDNTK",
          "count": 1400
        },
        {
          "name": "NPWMD",
          "count": 1167
        },
        {
          "name": "IRAN-EO13902",
          "count": 805
        },
        {
          "name": "GLOMAG",
          "count": 740
        },
        {
          "name": "IRAN",
          "count": 674
        },
        {
          "name": "ILLICIT-DRUGS-EO14059",
          "count": 632
        },
        {
          "name": "UKRAINE-EO13662",
          "count": 533
        }
      ],
      "error": null
    },
    "nvdCves": {
      "status": "verified",
      "source": "https://services.nvd.nist.gov/rest/json/cves/2.0",
      "title": "NVD CVE API 2.0",
      "timestamp": "2026-08-05T05:10:54.189",
      "totalResults": 7157,
      "resultsPerPage": 20,
      "window": {
        "lastModStartDate": "2026-07-29T05:10:53.000Z",
        "lastModEndDate": "2026-08-05T05:10:53.000Z"
      },
      "sample": [
        {
          "id": "CVE-2009-3960",
          "published": "2010-02-15T18:30:00.407",
          "lastModified": "2026-08-01T05:16:52.957",
          "vulnStatus": "Analyzed",
          "score": 6.5,
          "severity": "MEDIUM",
          "description": "Unspecified vulnerability in BlazeDS 3.2 and earlier, as used in LiveCycle 8.0.1, 8.2.1, and 9.0, LiveCycle Data Services 2.5.1, 2.6.1, and 3.0, Flex Data Services 2.0.1, and ColdFusion 7.0.2, 8.0, 8.0.1, and 9.0, allows"
        },
        {
          "id": "CVE-2012-1710",
          "published": "2012-05-03T22:55:02.967",
          "lastModified": "2026-08-04T05:16:24.223",
          "vulnStatus": "Analyzed",
          "score": 9.8,
          "severity": "CRITICAL",
          "description": "Unspecified vulnerability in the Oracle WebCenter Forms Recognition component in Oracle Fusion Middleware 10.1.3.5 allows remote attackers to affect confidentiality, integrity, and availability via unknown vectors relate"
        },
        {
          "id": "CVE-2012-1723",
          "published": "2012-06-16T21:55:03.500",
          "lastModified": "2026-08-04T05:16:25.683",
          "vulnStatus": "Analyzed",
          "score": 9.8,
          "severity": "CRITICAL",
          "description": "Unspecified vulnerability in the Java Runtime Environment (JRE) component in Oracle Java SE 7 update 4 and earlier, 6 update 32 and earlier, 5 update 35 and earlier, and 1.4.2_37 and earlier allows remote attackers to af"
        },
        {
          "id": "CVE-2012-4681",
          "published": "2012-08-28T00:55:01.860",
          "lastModified": "2026-08-04T05:16:26.010",
          "vulnStatus": "Analyzed",
          "score": 9.8,
          "severity": "CRITICAL",
          "description": "Multiple vulnerabilities in the Java Runtime Environment (JRE) component in Oracle Java SE 7 Update 6 and earlier allow remote attackers to execute arbitrary code via a crafted applet that bypasses SecurityManager restri"
        },
        {
          "id": "CVE-2013-0335",
          "published": "2013-03-22T21:55:00.880",
          "lastModified": "2026-07-31T15:16:24.803",
          "vulnStatus": "Modified",
          "score": 7.6,
          "severity": "HIGH",
          "description": "OpenStack Compute (Nova) Grizzly, Folsom (2012.2), and Essex (2012.1) allows remote authenticated users to gain access to a VM in opportunistic circumstances by using the VNC token for a deleted VM that was bound to the "
        },
        {
          "id": "CVE-2013-0270",
          "published": "2013-04-12T22:55:01.070",
          "lastModified": "2026-07-30T14:16:42.353",
          "vulnStatus": "Modified",
          "score": 6.5,
          "severity": "MEDIUM",
          "description": "A flaw was found in OpenStack Keystone. A remote attacker could exploit this vulnerability by sending a large HTTP request, specifically by providing a long tenant name when requesting a token. This could lead to a denia"
        },
        {
          "id": "CVE-2017-6884",
          "published": "2017-04-06T17:59:00.163",
          "lastModified": "2026-08-04T05:16:26.610",
          "vulnStatus": "Analyzed",
          "score": 8.8,
          "severity": "HIGH",
          "description": "A command injection vulnerability was discovered on the Zyxel EMG2926 home router with firmware V1.00(AAQT.4)b8. The vulnerability is located in the diagnostic tools, specifically the nslookup function. A malicious user "
        },
        {
          "id": "CVE-2017-3577",
          "published": "2017-04-24T19:59:05.287",
          "lastModified": "2026-07-31T19:17:42.927",
          "vulnStatus": "Modified",
          "score": 6.5,
          "severity": "MEDIUM",
          "description": "Vulnerability in the PeopleSoft Enterprise CS Campus Community component of Oracle PeopleSoft Products (subcomponent: Frameworks). The supported version that is affected is 9.2. Easily \"exploitable\" vulnerability allows "
        },
        {
          "id": "CVE-2015-2291",
          "published": "2017-08-09T18:29:00.933",
          "lastModified": "2026-08-04T05:16:26.340",
          "vulnStatus": "Analyzed",
          "score": 7.8,
          "severity": "HIGH",
          "description": "(1) IQVW32.sys before 1.3.1.0 and (2) IQVW64.sys before 1.3.1.0 in the Intel Ethernet diagnostics driver for Windows allows local users to cause a denial of service or possibly execute arbitrary code with kernel privileg"
        },
        {
          "id": "CVE-2017-12615",
          "published": "2017-09-19T13:29:00.190",
          "lastModified": "2026-08-01T05:16:53.823",
          "vulnStatus": "Analyzed",
          "score": 8.1,
          "severity": "HIGH",
          "description": "When running Apache Tomcat 7.0.0 to 7.0.79 on Windows with HTTP PUTs enabled (e.g. via setting the readonly initialisation parameter of the Default to false) it was possible to upload a JSP file to the server via a speci"
        },
        {
          "id": "CVE-2019-15107",
          "published": "2019-08-16T03:15:11.387",
          "lastModified": "2026-08-04T05:16:26.863",
          "vulnStatus": "Analyzed",
          "score": 9.8,
          "severity": "CRITICAL",
          "description": "An issue was discovered in Webmin <=1.920. The parameter old in password_change.cgi contains a command injection vulnerability."
        },
        {
          "id": "CVE-2019-6693",
          "published": "2019-11-21T16:15:13.173",
          "lastModified": "2026-08-04T05:16:27.110",
          "vulnStatus": "Analyzed",
          "score": 6.5,
          "severity": "MEDIUM",
          "description": "Use of a hard-coded cryptographic key to cipher sensitive data in FortiOS configuration backup file may allow an attacker with access to the backup file to decipher the sensitive data, via knowledge of the hard-coded key"
        },
        {
          "id": "CVE-2020-2912",
          "published": "2020-04-15T14:15:35.310",
          "lastModified": "2026-07-31T19:17:42.927",
          "vulnStatus": "Modified",
          "score": 5,
          "severity": "MEDIUM",
          "description": "Vulnerability in the PeopleSoft Enterprise CS Campus Community product of Oracle PeopleSoft (component: Self-Service). The supported version that is affected is 9.2. Easily exploitable vulnerability allows low privileged"
        },
        {
          "id": "CVE-2021-27364",
          "published": "2021-03-07T05:15:13.437",
          "lastModified": "2026-07-30T19:25:04.537",
          "vulnStatus": "Analyzed",
          "score": 7.1,
          "severity": "HIGH",
          "description": "An issue was discovered in the Linux kernel through 5.11.3. drivers/scsi/scsi_transport_iscsi.c is adversely affected by the ability of an unprivileged user to craft Netlink messages."
        },
        {
          "id": "CVE-2021-27365",
          "published": "2021-03-07T05:15:13.623",
          "lastModified": "2026-07-30T19:20:10.397",
          "vulnStatus": "Analyzed",
          "score": 7.8,
          "severity": "HIGH",
          "description": "An issue was discovered in the Linux kernel through 5.11.3. Certain iSCSI data structures do not have appropriate length constraints or checks, and can exceed the PAGE_SIZE value. An unprivileged user can send a Netlink "
        },
        {
          "id": "CVE-2021-23133",
          "published": "2021-04-22T18:15:08.123",
          "lastModified": "2026-07-30T19:31:32.070",
          "vulnStatus": "Analyzed",
          "score": 6.7,
          "severity": "MEDIUM",
          "description": "A race condition in Linux kernel SCTP sockets (net/sctp/socket.c) before 5.12-rc8 can lead to kernel privilege escalation from the context of a network service or an unprivileged process. If sctp_destroy_sock is called w"
        },
        {
          "id": "CVE-2021-22205",
          "published": "2021-04-23T18:15:08.167",
          "lastModified": "2026-08-01T05:16:54.287",
          "vulnStatus": "Analyzed",
          "score": 10,
          "severity": "CRITICAL",
          "description": "An issue has been discovered in GitLab CE/EE affecting all versions starting from 11.9. GitLab was not properly validating image files that were passed to a file parser which resulted in a remote command execution."
        },
        {
          "id": "CVE-2021-29022",
          "published": "2021-05-10T19:15:08.117",
          "lastModified": "2026-07-29T17:16:47.807",
          "vulnStatus": "Modified",
          "score": 5.3,
          "severity": "MEDIUM",
          "description": "In InvoicePlane 1.5.11, the upload feature discloses the full path of the file upload directory."
        },
        {
          "id": "CVE-2021-23134",
          "published": "2021-05-12T23:15:07.707",
          "lastModified": "2026-07-30T19:36:37.547",
          "vulnStatus": "Analyzed",
          "score": 7.8,
          "severity": "HIGH",
          "description": "Use After Free vulnerability in nfc sockets in the Linux Kernel before 5.12.4 allows local attackers to elevate their privileges. In typical configurations, the issue can only be triggered by a privileged local user with"
        },
        {
          "id": "CVE-2021-29023",
          "published": "2021-05-17T19:15:07.757",
          "lastModified": "2026-07-29T17:16:48.817",
          "vulnStatus": "Modified",
          "score": 5.3,
          "severity": "MEDIUM",
          "description": "InvoicePlane 1.5.11 doesn't have any rate-limiting for password reset and the reset token is generated using a weak mechanism that is predictable."
        }
      ],
      "error": null
    },
    "openSanctions": {
      "status": "verified",
      "source": "https://data.opensanctions.org/datasets/latest/index.json",
      "title": "OpenSanctions Dataset Index",
      "datasetCount": 462,
      "officialDatasetCount": 402,
      "sanctionsDatasets": [
        {
          "name": "us_ofac_sdn",
          "title": "US OFAC Specially Designated Nationals (SDN) List",
          "entityCount": 71476,
          "updatedAt": "2026-08-05T04:10:01",
          "publisher": "Office of Foreign Assets Control",
          "official": true,
          "tags": [
            "list.sanction",
            "juris.us",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "ua_nsdc_sanctions",
          "title": "Ukraine NSDC State Register of Sanctions",
          "entityCount": 62205,
          "updatedAt": "2026-08-05T03:00:27",
          "publisher": "National Security and Defense Council",
          "official": true,
          "tags": [
            "list.sanction",
            "target.ru"
          ]
        },
        {
          "name": "us_trade_csl",
          "title": "US Trade Consolidated Screening List (CSL)",
          "entityCount": 30346,
          "updatedAt": "2026-08-05T03:53:01",
          "publisher": "Department of the Commerce - International Trade Administration",
          "official": true,
          "tags": [
            "list.sanction",
            "list.export",
            "juris.us",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "gb_fcdo_sanctions",
          "title": "UK FCDO Sanctions List",
          "entityCount": 18480,
          "updatedAt": "2026-08-05T04:40:01",
          "publisher": "Foreign, Commonwealth & Development Office",
          "official": true,
          "tags": [
            "list.sanction",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "ch_seco_sanctions",
          "title": "Swiss SECO Sanctions/Embargoes",
          "entityCount": 17173,
          "updatedAt": "2026-08-05T04:09:01",
          "publisher": "State Secretariat for Economic Affairs",
          "official": true,
          "tags": [
            "list.sanction",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "eu_fsf",
          "title": "EU Financial Sanctions Files (FSF)",
          "entityCount": 15952,
          "updatedAt": "2026-08-05T04:59:48",
          "publisher": "Directorate‑General for Financial Stability, Financial Services and Capital Markets Union",
          "official": true,
          "tags": [
            "list.sanction",
            "juris.eu",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "fr_tresor_gels_avoir",
          "title": "French National Asset Freezing System",
          "entityCount": 13231,
          "updatedAt": "2026-08-05T03:58:01",
          "publisher": "Direction Générale du Trésor",
          "official": true,
          "tags": [
            "list.sanction",
            "juris.eu",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "mc_fund_freezes",
          "title": "Monaco National Fund Freezing List",
          "entityCount": 12929,
          "updatedAt": "2026-08-05T02:02:01",
          "publisher": "La Principauté de Monaco",
          "official": true,
          "tags": [
            "list.sanction",
            "sector.financial",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "be_fod_sanctions",
          "title": "Belgian Financial Sanctions",
          "entityCount": 12649,
          "updatedAt": "2026-08-05T03:17:02",
          "publisher": "Federal Public Service Finance",
          "official": true,
          "tags": [
            "list.sanction",
            "juris.eu",
            "issuer.west",
            "sector.maritime"
          ]
        },
        {
          "name": "iq_aml_list",
          "title": "Iraq Terrorist Fund Freezing Lists",
          "entityCount": 11339,
          "updatedAt": "2026-08-05T04:52:01",
          "publisher": "Republic of Iraq Anti-Money Laundering and Countering Financing of Terrorism Office",
          "official": true,
          "tags": [
            "list.sanction"
          ]
        }
      ],
      "pepDatasets": [
        {
          "name": "wd_peps",
          "title": "Wikidata Politically Exposed Persons",
          "entityCount": 802362,
          "updatedAt": "2026-08-04T00:48:01",
          "publisher": "Wikidata",
          "official": false,
          "tags": [
            "list.pep"
          ]
        },
        {
          "name": "wd_categories",
          "title": "Wikidata Persons in Relevant Categories",
          "entityCount": 340706,
          "updatedAt": "2026-08-05T00:12:01",
          "publisher": "Wikidata",
          "official": false,
          "tags": [
            "list.pep"
          ]
        },
        {
          "name": "br_pep",
          "title": "Brazil Politically Exposed Persons",
          "entityCount": 253860,
          "updatedAt": "2026-08-04T02:02:02",
          "publisher": "General Control Office of the Union",
          "official": true,
          "tags": [
            "list.pep",
            "list.pep.bulk"
          ]
        },
        {
          "name": "es_mayors_councillors",
          "title": "Spain Mayors and Councillors",
          "entityCount": 169731,
          "updatedAt": "2026-08-05T02:26:01",
          "publisher": "Ministerio de Política Territorial y Memoria Democrática",
          "official": true,
          "tags": [
            "list.pep",
            "list.pep.bulk"
          ]
        },
        {
          "name": "lt_pep_declarations",
          "title": "Lithuania PEPs from the register of private interests",
          "entityCount": 138286,
          "updatedAt": "2026-07-03T10:34:43",
          "publisher": "Lithuanian Chief Official Ethics Commission",
          "official": true,
          "tags": [
            "list.pep"
          ]
        },
        {
          "name": "fr_maires",
          "title": "French Mayors",
          "entityCount": 102990,
          "updatedAt": "2026-08-01T16:04:01",
          "publisher": "Ministère de l'Intérieur et des Outre-Mer",
          "official": true,
          "tags": [
            "list.pep",
            "list.pep.bulk"
          ]
        },
        {
          "name": "everypolitician",
          "title": "MySociety's EveryPolitician Legislators",
          "entityCount": 92364,
          "updatedAt": "2026-07-23T15:23:33",
          "publisher": "UK Citizens Online Democracy",
          "official": false,
          "tags": [
            "list.pep"
          ]
        },
        {
          "name": "ng_chipper_peps",
          "title": "Nigerian Politically Exposed Persons data by Chipper",
          "entityCount": 60753,
          "updatedAt": "2026-08-04T19:19:01",
          "publisher": "Chipper",
          "official": false,
          "tags": [
            "list.pep",
            "list.pep.bulk"
          ]
        },
        {
          "name": "co_funcion_publica",
          "title": "Colombian PEP Declarations",
          "entityCount": 45331,
          "updatedAt": "2026-08-04T21:45:01",
          "publisher": "Deparatamento Administrativo del la Funcion Publica",
          "official": true,
          "tags": [
            "list.pep",
            "list.pep.bulk"
          ]
        },
        {
          "name": "us_plum_book",
          "title": "US Periodically Listing Updates to Management (PLUM) Reporting",
          "entityCount": 32150,
          "updatedAt": "2026-08-05T00:12:02",
          "publisher": "U.S. Office of Personnel Management",
          "official": true,
          "tags": [
            "list.pep",
            "list.pep.bulk"
          ]
        }
      ],
      "updatedAt": "2026-08-05T05:10:56.346Z",
      "error": null
    },
    "ooni": {
      "status": "verified",
      "source": "https://api.ooni.io/",
      "title": "OONI API",
      "countryCount": 237,
      "totalMeasurements": 3559950765,
      "window": {
        "since": "2026-07-29",
        "until": "2026-08-05"
      },
      "topCountries": [
        {
          "code": "US",
          "name": "United States",
          "count": 650942246
        },
        {
          "code": "RU",
          "name": "Russia",
          "count": 386121052
        },
        {
          "code": "BR",
          "name": "Brazil",
          "count": 296406608
        },
        {
          "code": "DE",
          "name": "Germany",
          "count": 221260274
        },
        {
          "code": "VE",
          "name": "Venezuela",
          "count": 145914774
        },
        {
          "code": "FR",
          "name": "France",
          "count": 120863133
        },
        {
          "code": "GB",
          "name": "United Kingdom",
          "count": 117326509
        },
        {
          "code": "ES",
          "name": "Spain",
          "count": 103117255
        },
        {
          "code": "CA",
          "name": "Canada",
          "count": 96832696
        },
        {
          "code": "TW",
          "name": "Taiwan",
          "count": 73229461
        },
        {
          "code": "NL",
          "name": "Netherlands",
          "count": 62751405
        },
        {
          "code": "IN",
          "name": "India",
          "count": 59965890
        }
      ],
      "recentCircumventionStats": [
        {
          "code": "RU",
          "name": "Russia",
          "count": 4797786
        },
        {
          "code": "US",
          "name": "United States",
          "count": 3130264
        },
        {
          "code": "ES",
          "name": "Spain",
          "count": 2147127
        },
        {
          "code": "DE",
          "name": "Germany",
          "count": 1294841
        },
        {
          "code": "BR",
          "name": "Brazil",
          "count": 972018
        },
        {
          "code": "NL",
          "name": "Netherlands",
          "count": 806315
        },
        {
          "code": "CA",
          "name": "Canada",
          "count": 753431
        },
        {
          "code": "GB",
          "name": "United Kingdom",
          "count": 703077
        },
        {
          "code": "CM",
          "name": "Cameroon",
          "count": 644209
        },
        {
          "code": "FR",
          "name": "France",
          "count": 613437
        },
        {
          "code": "BE",
          "name": "Belgium",
          "count": 453712
        },
        {
          "code": "IN",
          "name": "India",
          "count": 282199
        }
      ],
      "watchedCountries": [
        {
          "cc": "IR",
          "label": "Iran",
          "measurementCount": 126700,
          "anomalyCount": 21409,
          "confirmedCount": 32313,
          "error": null
        },
        {
          "cc": "RU",
          "label": "Russia",
          "measurementCount": 1886924,
          "anomalyCount": 518330,
          "confirmedCount": 59959,
          "error": null
        },
        {
          "cc": "CN",
          "label": "China",
          "measurementCount": 276127,
          "anomalyCount": 159957,
          "confirmedCount": 283,
          "error": null
        },
        {
          "cc": "TW",
          "label": "Taiwan",
          "measurementCount": 175707,
          "anomalyCount": 5460,
          "confirmedCount": 2,
          "error": null
        },
        {
          "cc": "UA",
          "label": "Ukraine",
          "measurementCount": 117475,
          "anomalyCount": 5905,
          "confirmedCount": 1,
          "error": null
        },
        {
          "cc": "VE",
          "label": "Venezuela",
          "measurementCount": 543331,
          "anomalyCount": 74969,
          "confirmedCount": 1,
          "error": null
        }
      ],
      "error": null
    },
    "worldBankEnergy": {
      "status": "verified",
      "source": "https://api.worldbank.org/v2/",
      "title": "World Bank Energy Indicators",
      "lastUpdated": "2026-07-13",
      "indicators": [
        {
          "code": "EG.USE.ELEC.KH.PC",
          "name": "Electric power consumption (kWh per capita)",
          "source": "https://api.worldbank.org/v2/country/all/indicator/EG.USE.ELEC.KH.PC?format=json&per_page=20000&date=2023%3A2023"
        },
        {
          "code": "EG.ELC.ACCS.ZS",
          "name": "Access to electricity (% of population)",
          "source": "https://api.worldbank.org/v2/country/all/indicator/EG.ELC.ACCS.ZS?format=json&per_page=20000&date=2023%3A2023"
        }
      ],
      "powerConsumptionYear": "2023",
      "electricityAccessYear": "2023",
      "topPowerConsumption": [
        {
          "country": "Iceland",
          "iso3": "ISL",
          "date": "2023",
          "value": 50951.2190694985
        },
        {
          "country": "Norway",
          "iso3": "NOR",
          "date": "2023",
          "value": 23520.1783607185
        },
        {
          "country": "Bahrain",
          "iso3": "BHR",
          "date": "2023",
          "value": 23120.2510495803
        },
        {
          "country": "Qatar",
          "iso3": "QAT",
          "date": "2023",
          "value": 19963.2383947181
        },
        {
          "country": "Kuwait",
          "iso3": "KWT",
          "date": "2023",
          "value": 16496.2026776994
        },
        {
          "country": "United Arab Emirates",
          "iso3": "ARE",
          "date": "2023",
          "value": 15284.7010578561
        },
        {
          "country": "Canada",
          "iso3": "CAN",
          "date": "2023",
          "value": 14472.3145755529
        },
        {
          "country": "Finland",
          "iso3": "FIN",
          "date": "2023",
          "value": 14392.7795410779
        },
        {
          "country": "United States",
          "iso3": "USA",
          "date": "2023",
          "value": 12553.1331301304
        },
        {
          "country": "Sweden",
          "iso3": "SWE",
          "date": "2023",
          "value": 12149.5179863926
        },
        {
          "country": "Saudi Arabia",
          "iso3": "SAU",
          "date": "2023",
          "value": 11910.5778104451
        },
        {
          "country": "Luxembourg",
          "iso3": "LUX",
          "date": "2023",
          "value": 11447.5638851792
        }
      ],
      "lowestElectricityAccess": [
        {
          "country": "South Sudan",
          "iso3": "SSD",
          "date": "2023",
          "value": 5.4
        },
        {
          "country": "Burundi",
          "iso3": "BDI",
          "date": "2023",
          "value": 11.6
        },
        {
          "country": "Chad",
          "iso3": "TCD",
          "date": "2023",
          "value": 12
        },
        {
          "country": "Malawi",
          "iso3": "MWI",
          "date": "2023",
          "value": 15.6
        },
        {
          "country": "Central African Republic",
          "iso3": "CAF",
          "date": "2023",
          "value": 17.6
        },
        {
          "country": "Niger",
          "iso3": "NER",
          "date": "2023",
          "value": 20.1
        },
        {
          "country": "Papua New Guinea",
          "iso3": "PNG",
          "date": "2023",
          "value": 20.5
        },
        {
          "country": "Burkina Faso",
          "iso3": "BFA",
          "date": "2023",
          "value": 21.7
        },
        {
          "country": "Congo, Dem. Rep.",
          "iso3": "COD",
          "date": "2023",
          "value": 22.1
        },
        {
          "country": "Liberia",
          "iso3": "LBR",
          "date": "2023",
          "value": 32.5
        },
        {
          "country": "Sierra Leone",
          "iso3": "SLE",
          "date": "2023",
          "value": 35.5
        },
        {
          "country": "Mozambique",
          "iso3": "MOZ",
          "date": "2023",
          "value": 36
        }
      ],
      "error": null
    },
    "ripeStat": {
      "status": "verified",
      "source": "https://stat.ripe.net/docs/data_api/",
      "title": "RIPEstat Data API",
      "watchedAsnCount": 5,
      "totalAnnouncedPrefixes": 32086,
      "asns": [
        {
          "asn": "AS13335",
          "label": "Cloudflare",
          "holder": "CLOUDFLARENET - Cloudflare, Inc.",
          "announced": true,
          "queryTime": "2026-07-03T08:25:59.456235",
          "prefixCount": 5322,
          "samplePrefixes": [
            "104.17.144.0/20",
            "172.64.186.0/24",
            "104.29.142.0/24",
            "2400:cb00:465::/48",
            "2606:54c0::/34",
            "104.29.148.0/24",
            "141.101.96.0/24",
            "162.158.152.0/24"
          ]
        },
        {
          "asn": "AS15169",
          "label": "Google",
          "holder": "GOOGLE - Google LLC",
          "announced": true,
          "queryTime": "2026-07-03T08:26:00.767303",
          "prefixCount": 1410,
          "samplePrefixes": [
            "172.253.122.0/24",
            "108.177.99.0/24",
            "152.65.252.0/24",
            "34.190.136.0/21",
            "142.251.102.0/24",
            "66.102.8.0/23",
            "142.251.149.0/24",
            "152.65.229.0/24"
          ]
        },
        {
          "asn": "AS16509",
          "label": "AWS",
          "holder": "AMAZON-02 - Amazon.com, Inc.",
          "announced": true,
          "queryTime": "2026-07-03T08:26:07.100257",
          "prefixCount": 21337,
          "samplePrefixes": [
            "16.15.38.0/24",
            "109.95.191.0/24",
            "2a13:2e01:4::/48",
            "2600:9000:28f7::/48",
            "2a05:d05b:8000::/40",
            "65.9.96.0/22",
            "2607:f380:101::/48",
            "2a05:d030:5040::/48"
          ]
        },
        {
          "asn": "AS8075",
          "label": "Microsoft",
          "holder": "MICROSOFT-CORP-MSN-AS-BLOCK - Microsoft Corporation",
          "announced": true,
          "queryTime": "2026-07-03T08:26:12.741401",
          "prefixCount": 1248,
          "samplePrefixes": [
            "40.34.0.0/16",
            "206.203.93.0/24",
            "52.152.0.0/13",
            "2607:9240:49::/48",
            "20.74.128.0/17",
            "74.7.0.0/16",
            "74.160.0.0/14",
            "51.116.0.0/16"
          ]
        },
        {
          "asn": "AS14593",
          "label": "SpaceX / Starlink",
          "holder": "SPACEX-STARLINK - Space Exploration Technologies Corporation",
          "announced": true,
          "queryTime": "2026-07-03T08:26:13.679878",
          "prefixCount": 2769,
          "samplePrefixes": [
            "66.9.160.0/23",
            "145.224.122.0/23",
            "2803:9810:4600::/40",
            "153.66.142.0/23",
            "153.67.178.0/23",
            "150.228.174.0/23",
            "2605:59ca:5e00::/40",
            "2605:59c1:4800::/38"
          ]
        }
      ],
      "countries": [
        {
          "cc": "IR",
          "label": "Iran",
          "v4Prefixes": 8384,
          "v6Prefixes": 34,
          "asns": 538,
          "statsDate": "2026-07-03T00:00:00",
          "error": null
        },
        {
          "cc": "RU",
          "label": "Russia",
          "v4Prefixes": 39570,
          "v6Prefixes": 3302.5,
          "asns": 4414,
          "statsDate": "2026-07-03T00:00:00",
          "error": null
        },
        {
          "cc": "CN",
          "label": "China",
          "v4Prefixes": 65670,
          "v6Prefixes": 35149,
          "asns": 4985,
          "statsDate": "2026-07-03T00:00:00",
          "error": null
        },
        {
          "cc": "TW",
          "label": "Taiwan",
          "v4Prefixes": 9419.5,
          "v6Prefixes": 1198,
          "asns": 245,
          "statsDate": "2026-07-03T00:00:00",
          "error": null
        },
        {
          "cc": "UA",
          "label": "Ukraine",
          "v4Prefixes": 11120.5,
          "v6Prefixes": 955,
          "asns": 1417.5,
          "statsDate": "2026-07-03T00:00:00",
          "error": null
        },
        {
          "cc": "VE",
          "label": "Venezuela",
          "v4Prefixes": 2364,
          "v6Prefixes": 549,
          "asns": 162,
          "statsDate": "2026-07-03T00:00:00",
          "error": null
        }
      ],
      "note": "Uses as-overview and announced-prefixes. routing-status was excluded from the stable runner because it was slow in local probing. countries uses country-resource-stats (latest entry in a 14-day window) for the divergence rule.",
      "error": null
    },
    "secFilings": {
      "status": "verified",
      "source": "https://data.sec.gov/submissions/",
      "title": "SEC EDGAR Submissions API",
      "watchedCompanyCount": 6,
      "filingCount": 48,
      "companies": [
        {
          "label": "NVIDIA",
          "cik": "0001045810",
          "ticker": "NVDA",
          "stack": "AI GPU / semiconductor",
          "name": "NVIDIA CORP",
          "sic": "3674",
          "sicDescription": "Semiconductors & Related Devices",
          "category": "Large accelerated filer",
          "fiscalYearEnd": "0131",
          "recentImportantFilings": [
            {
              "form": "10-Q",
              "filingDate": "2026-05-20",
              "reportDate": "2026-04-26",
              "accessionNumber": "0001045810-26-000052",
              "primaryDocument": "nvda-20260426.htm",
              "description": "10-Q",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000052/nvda-20260426.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-05-20",
              "reportDate": "2026-05-20",
              "accessionNumber": "0001045810-26-000051",
              "primaryDocument": "nvda-20260520.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000051/nvda-20260520.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-05-08",
              "reportDate": "2026-05-07",
              "accessionNumber": "0001045810-26-000028",
              "primaryDocument": "nvda-20260507.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000028/nvda-20260507.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-04-27",
              "reportDate": "2026-04-24",
              "accessionNumber": "0001045810-26-000026",
              "primaryDocument": "nvda-20260424.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000026/nvda-20260424.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-03-06",
              "reportDate": "2026-03-02",
              "accessionNumber": "0001045810-26-000024",
              "primaryDocument": "nvda-20260302.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000024/nvda-20260302.htm"
            },
            {
              "form": "10-K",
              "filingDate": "2026-02-25",
              "reportDate": "2026-01-25",
              "accessionNumber": "0001045810-26-000021",
              "primaryDocument": "nvda-20260125.htm",
              "description": "10-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-02-25",
              "reportDate": "2026-02-25",
              "accessionNumber": "0001045810-26-000019",
              "primaryDocument": "nvda-20260225.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000019/nvda-20260225.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-01-23",
              "reportDate": "2026-01-20",
              "accessionNumber": "0001045810-26-000003",
              "primaryDocument": "nvda-20260120.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000003/nvda-20260120.htm"
            }
          ]
        },
        {
          "label": "Microsoft",
          "cik": "0000789019",
          "ticker": "MSFT",
          "stack": "Cloud / AI infrastructure",
          "name": "MICROSOFT CORP",
          "sic": "7372",
          "sicDescription": "Services-Prepackaged Software",
          "category": "Large accelerated filer",
          "fiscalYearEnd": "0630",
          "recentImportantFilings": [
            {
              "form": "8-K",
              "filingDate": "2026-06-05",
              "reportDate": "2026-06-02",
              "accessionNumber": "0001193125-26-258667",
              "primaryDocument": "d26760d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526258667/d26760d8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-05-14",
              "reportDate": "2026-05-13",
              "accessionNumber": "0001193125-26-224155",
              "primaryDocument": "d125909d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526224155/d125909d8k.htm"
            },
            {
              "form": "10-Q",
              "filingDate": "2026-04-29",
              "reportDate": "2026-03-31",
              "accessionNumber": "0001193125-26-191507",
              "primaryDocument": "msft-20260331.htm",
              "description": "10-Q",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526191507/msft-20260331.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-04-29",
              "reportDate": "2026-04-29",
              "accessionNumber": "0001193125-26-191457",
              "primaryDocument": "msft-20260429.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526191457/msft-20260429.htm"
            },
            {
              "form": "10-Q",
              "filingDate": "2026-01-28",
              "reportDate": "2025-12-31",
              "accessionNumber": "0001193125-26-027207",
              "primaryDocument": "msft-20251231.htm",
              "description": "10-Q",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526027207/msft-20251231.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-01-28",
              "reportDate": "2026-01-28",
              "accessionNumber": "0001193125-26-027198",
              "primaryDocument": "msft-20260128.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312526027198/msft-20260128.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2025-12-08",
              "reportDate": "2025-12-05",
              "accessionNumber": "0001193125-25-311196",
              "primaryDocument": "d34077d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312525311196/d34077d8k.htm"
            },
            {
              "form": "10-Q",
              "filingDate": "2025-10-29",
              "reportDate": "2025-09-30",
              "accessionNumber": "0001193125-25-256321",
              "primaryDocument": "msft-20250930.htm",
              "description": "10-Q",
              "url": "https://www.sec.gov/Archives/edgar/data/789019/000119312525256321/msft-20250930.htm"
            }
          ]
        },
        {
          "label": "Amazon",
          "cik": "0001018724",
          "ticker": "AMZN",
          "stack": "Cloud / logistics / AI infrastructure",
          "name": "AMAZON COM INC",
          "sic": "5961",
          "sicDescription": "Retail-Catalog & Mail-Order Houses",
          "category": "Large accelerated filer",
          "fiscalYearEnd": "1231",
          "recentImportantFilings": [
            {
              "form": "8-K",
              "filingDate": "2026-06-12",
              "reportDate": "2026-06-12",
              "accessionNumber": "0001104659-26-073562",
              "primaryDocument": "tm2613616d5_8k.htm",
              "description": "FORM 8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926073562/tm2613616d5_8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-06-10",
              "reportDate": "2026-06-08",
              "accessionNumber": "0001104659-26-072140",
              "primaryDocument": "tm2613616d4_8k.htm",
              "description": "FORM 8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926072140/tm2613616d4_8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-05-22",
              "reportDate": "2026-05-20",
              "accessionNumber": "0001104659-26-065717",
              "primaryDocument": "tm2614288d1_8k.htm",
              "description": "FORM 8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926065717/tm2614288d1_8k.htm"
            },
            {
              "form": "10-Q",
              "filingDate": "2026-04-30",
              "reportDate": "2026-03-31",
              "accessionNumber": "0001018724-26-000014",
              "primaryDocument": "amzn-20260331.htm",
              "description": "10-Q",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000014/amzn-20260331.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-04-29",
              "reportDate": "2026-04-29",
              "accessionNumber": "0001018724-26-000012",
              "primaryDocument": "amzn-20260429.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000012/amzn-20260429.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-04-14",
              "reportDate": "2026-04-14",
              "accessionNumber": "0001104659-26-042880",
              "primaryDocument": "tm2611746d1_8k.htm",
              "description": "FORM 8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926042880/tm2611746d1_8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-04-09",
              "reportDate": "2026-04-09",
              "accessionNumber": "0001104659-26-041034",
              "primaryDocument": "tm263815d2_8k.htm",
              "description": "FORM 8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926041034/tm263815d2_8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-03-16",
              "reportDate": "2026-03-16",
              "accessionNumber": "0001104659-26-028556",
              "primaryDocument": "tm266670d9_8k.htm",
              "description": "FORM 8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1018724/000110465926028556/tm266670d9_8k.htm"
            }
          ]
        },
        {
          "label": "Alphabet",
          "cik": "0001652044",
          "ticker": "GOOGL",
          "stack": "Cloud / AI infrastructure",
          "name": "Alphabet Inc.",
          "sic": "7370",
          "sicDescription": "Services-Computer Programming, Data Processing, Etc.",
          "category": "Large accelerated filer",
          "fiscalYearEnd": "1231",
          "recentImportantFilings": [
            {
              "form": "8-K",
              "filingDate": "2026-06-11",
              "reportDate": "2026-06-05",
              "accessionNumber": "0001193125-26-267578",
              "primaryDocument": "d57679d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526267578/d57679d8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-06-05",
              "reportDate": "2026-06-05",
              "accessionNumber": "0001193125-26-259830",
              "primaryDocument": "d36818d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526259830/d36818d8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-06-05",
              "reportDate": "2026-06-02",
              "accessionNumber": "0001652044-26-000059",
              "primaryDocument": "goog-20260602.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000059/goog-20260602.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-06-04",
              "reportDate": "2026-06-04",
              "accessionNumber": "0001193125-26-257724",
              "primaryDocument": "d83560d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526257724/d83560d8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-05-21",
              "reportDate": "2026-05-21",
              "accessionNumber": "0001193125-26-234488",
              "primaryDocument": "d144566d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526234488/d144566d8k.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-05-11",
              "reportDate": "2026-05-11",
              "accessionNumber": "0001193125-26-216986",
              "primaryDocument": "d109021d8k.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000119312526216986/d109021d8k.htm"
            },
            {
              "form": "10-Q",
              "filingDate": "2026-04-30",
              "reportDate": "2026-03-31",
              "accessionNumber": "0001652044-26-000048",
              "primaryDocument": "goog-20260331.htm",
              "description": "10-Q",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000048/goog-20260331.htm"
            },
            {
              "form": "8-K",
              "filingDate": "2026-04-29",
              "reportDate": "2026-04-29",
              "accessionNumber": "0001652044-26-000043",
              "primaryDocument": "goog-20260429.htm",
              "description": "8-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000043/goog-20260429.htm"
            }
          ]
        },
        {
          "label": "ASML",
          "cik": "0000937966",
          "ticker": "ASML",
          "stack": "Semiconductor equipment",
          "name": "ASML HOLDING NV",
          "sic": "3559",
          "sicDescription": "Special Industry Machinery, NEC",
          "category": "Large accelerated filer",
          "fiscalYearEnd": "1231",
          "recentImportantFilings": [
            {
              "form": "6-K",
              "filingDate": "2026-04-23",
              "reportDate": "2026-04-23",
              "accessionNumber": "0001628280-26-026703",
              "primaryDocument": "form6-kagmdisclosureofagmr.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828026026703/form6-kagmdisclosureofagmr.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-04-15",
              "reportDate": "2026-03-29",
              "accessionNumber": "0001628280-26-025147",
              "primaryDocument": "form6-kquarterlyfilings.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828026025147/form6-kquarterlyfilings.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-03-11",
              "reportDate": "2026-03-09",
              "accessionNumber": "0001628280-26-016671",
              "primaryDocument": "form6-kagm.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828026016671/form6-kagm.htm"
            },
            {
              "form": "20-F",
              "filingDate": "2026-02-25",
              "reportDate": "2025-12-31",
              "accessionNumber": "0001628280-26-011378",
              "primaryDocument": "asml-20251231.htm",
              "description": "20-F",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-02-25",
              "reportDate": "2025-12-31",
              "accessionNumber": "0001628280-26-011377",
              "primaryDocument": "form6-kannualreportbasedon.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828026011377/form6-kannualreportbasedon.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-01-28",
              "reportDate": "2025-12-31",
              "accessionNumber": "0001628280-26-003701",
              "primaryDocument": "form6-kquarterlyfilings.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828026003701/form6-kquarterlyfilings.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2025-10-15",
              "reportDate": "2025-09-28",
              "accessionNumber": "0001628280-25-045043",
              "primaryDocument": "form6-kquarterlyfilings.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828025045043/form6-kquarterlyfilings.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2025-07-16",
              "reportDate": "2025-06-29",
              "accessionNumber": "0001628280-25-034992",
              "primaryDocument": "form6-kquarterlyfilings.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/937966/000162828025034992/form6-kquarterlyfilings.htm"
            }
          ]
        },
        {
          "label": "TSMC",
          "cik": "0001046179",
          "ticker": "TSM",
          "stack": "Semiconductor foundry",
          "name": "TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD",
          "sic": "3674",
          "sicDescription": "Semiconductors & Related Devices",
          "category": "Large accelerated filer",
          "fiscalYearEnd": "1231",
          "recentImportantFilings": [
            {
              "form": "6-K",
              "filingDate": "2026-06-10",
              "reportDate": "2026-05-31",
              "accessionNumber": "0001046179-26-000367",
              "primaryDocument": "tsm-revenue20260610.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000367/tsm-revenue20260610.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-06-04",
              "reportDate": "2026-06-04",
              "accessionNumber": "0001046179-26-000302",
              "primaryDocument": "tsm-agmx20260604x6k.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000302/tsm-agmx20260604x6k.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-05-27",
              "reportDate": "2026-05-27",
              "accessionNumber": "0001046179-26-000294",
              "primaryDocument": "tsm-dividendadjustmentx202.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000294/tsm-dividendadjustmentx202.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-05-26",
              "reportDate": "2026-04-30",
              "accessionNumber": "0001046179-26-000292",
              "primaryDocument": "tsm-monthend6kx20260526.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000292/tsm-monthend6kx20260526.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-05-15",
              "reportDate": "2026-05-15",
              "accessionNumber": "0001046179-26-000280",
              "primaryDocument": "tsmctosell81ofvanguardinte.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000280/tsmctosell81ofvanguardinte.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-05-15",
              "reportDate": "2026-03-31",
              "accessionNumber": "0001046179-26-000278",
              "primaryDocument": "tsm-fsx20260515x6k.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000278/tsm-fsx20260515x6k.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-05-12",
              "reportDate": "2026-05-12",
              "accessionNumber": "0001046179-26-000275",
              "primaryDocument": "a20260512boardofdirectorsr.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000275/a20260512boardofdirectorsr.htm"
            },
            {
              "form": "6-K",
              "filingDate": "2026-05-12",
              "reportDate": "2026-05-12",
              "accessionNumber": "0001046179-26-000274",
              "primaryDocument": "tsm-boardx20260512.htm",
              "description": "6-K",
              "url": "https://www.sec.gov/Archives/edgar/data/1046179/000104617926000274/tsm-boardx20260512.htm"
            }
          ]
        }
      ],
      "note": "Company submissions are official SEC data. Filing content still needs document-level reading before claims about risk disclosures.",
      "error": null
    },
    "unSanctions": {
      "status": "verified",
      "source": "https://scsanctions.un.org/resources/xml/en/consolidated.xml",
      "title": "UN Security Council Consolidated Sanctions List",
      "dateGenerated": "2026-08-03T06:59:53.080Z",
      "individualCount": 736,
      "entityCount": 275,
      "totalCount": 1011,
      "listTypeCounts": [
        {
          "name": "Al-Qaida",
          "count": 336
        },
        {
          "name": "DPRK",
          "count": 155
        },
        {
          "name": "Taliban",
          "count": 140
        },
        {
          "name": "Iran",
          "count": 121
        },
        {
          "name": "Iraq",
          "count": 75
        },
        {
          "name": "DRC",
          "count": 61
        },
        {
          "name": "Libya",
          "count": 31
        },
        {
          "name": "Somalia",
          "count": 24
        },
        {
          "name": "CAR",
          "count": 15
        },
        {
          "name": "Sudan",
          "count": 13
        },
        {
          "name": "Haiti",
          "count": 11
        },
        {
          "name": "Yemen",
          "count": 11
        }
      ],
      "sampleIndividuals": [
        {
          "dataId": "6907993",
          "name": "ERIC BADEGE",
          "listType": "DRC",
          "referenceNumber": "CDi.001",
          "listedOn": "2012-12-31"
        },
        {
          "dataId": "6907994",
          "name": "FRANK KAKOLELE BWAMBALE",
          "listType": "DRC",
          "referenceNumber": "CDi.002",
          "listedOn": "2005-11-01"
        },
        {
          "dataId": "6907995",
          "name": "GASTON IYAMUREMYE",
          "listType": "DRC",
          "referenceNumber": "CDi.003",
          "listedOn": "2010-12-01"
        },
        {
          "dataId": "6907996",
          "name": "INNOCENT KAINA",
          "listType": "DRC",
          "referenceNumber": "CDi.004",
          "listedOn": "2012-11-30"
        },
        {
          "dataId": "6907997",
          "name": "JÉRÔME KAKWAVU BUKANDE",
          "listType": "DRC",
          "referenceNumber": "CDi.005",
          "listedOn": "2005-11-01"
        },
        {
          "dataId": "6907998",
          "name": "GERMAIN KATANGA",
          "listType": "DRC",
          "referenceNumber": "CDi.006",
          "listedOn": "2005-11-01"
        },
        {
          "dataId": "6908023",
          "name": "THOMAS LUBANGA",
          "listType": "DRC",
          "referenceNumber": "CDi.007",
          "listedOn": "2005-11-01"
        },
        {
          "dataId": "6907999",
          "name": "SULTANI MAKENGA",
          "listType": "DRC",
          "referenceNumber": "CDi.008",
          "listedOn": "2012-11-12"
        }
      ],
      "sampleEntities": [
        {
          "dataId": "6908402",
          "name": "ADF",
          "listType": "DRC",
          "referenceNumber": "CDe.001",
          "listedOn": "2014-06-30"
        },
        {
          "dataId": "6908024",
          "name": "BUTEMBO AIRLINES (BAL)",
          "listType": "DRC",
          "referenceNumber": "CDe.002",
          "listedOn": "2007-03-29"
        },
        {
          "dataId": "6908026",
          "name": "COMPAGNIE AERIENNE DES GRANDS LACS (CAGL) ; GREAT LAKES BUSINESS COMPANY (GLBC)",
          "listType": "DRC",
          "referenceNumber": "CDe.003",
          "listedOn": "2007-03-29"
        },
        {
          "dataId": "6908025",
          "name": "CONGOMET TRADING HOUSE",
          "listType": "DRC",
          "referenceNumber": "CDe.004",
          "listedOn": "2007-03-29"
        },
        {
          "dataId": "6908027",
          "name": "FORCES DEMOCRATIQUES DE LIBERATION DU RWANDA (FDLR)",
          "listType": "DRC",
          "referenceNumber": "CDe.005",
          "listedOn": "2012-12-31"
        },
        {
          "dataId": "6908028",
          "name": "M23",
          "listType": "DRC",
          "referenceNumber": "CDe.006",
          "listedOn": "2012-12-31"
        },
        {
          "dataId": "6908029",
          "name": "MACHANGA LTD",
          "listType": "DRC",
          "referenceNumber": "CDe.007",
          "listedOn": "2007-03-29"
        },
        {
          "dataId": "6908030",
          "name": "TOUS POUR LA PAIX ET LE DEVELOPPEMENT (NGO)",
          "listType": "DRC",
          "referenceNumber": "CDe.008",
          "listedOn": "2005-11-01"
        }
      ],
      "error": null
    },
    "witsTradeStats": {
      "status": "verified",
      "source": "https://wits.worldbank.org/witsapiintro.aspx?lang=en",
      "apiSource": "https://wits.worldbank.org/API/V1/SDMX/V21/datasource/tradestats-trade/reporter/USA;CHN;JPN;DEU;KOR;MYS;VNM;SGP/year/2023/indicator/HH-MKT-CNCNTRTN-NDX;NMBR-MPRT-PRTNR;NMBR-PRDCT-MPRTD?format=JSON",
      "title": "World Bank WITS Trade Stats Dependency Panel",
      "year": "2023",
      "reporterCount": 8,
      "indicatorCount": 3,
      "recordCount": 24,
      "indicators": [
        {
          "code": "HH-MKT-CNCNTRTN-NDX",
          "label": "Import HHI",
          "field": "importMarketConcentration"
        },
        {
          "code": "NMBR-MPRT-PRTNR",
          "label": "Import partners",
          "field": "importPartnerCount"
        },
        {
          "code": "NMBR-PRDCT-MPRTD",
          "label": "Products imported",
          "field": "importedProductCount"
        }
      ],
      "countryRows": [
        {
          "code": "USA",
          "name": "United States",
          "stack": "AI/cloud demand and semiconductor equipment market",
          "importMarketConcentration": 0.0531859216795074,
          "importPartnerCount": 222,
          "importedProductCount": 4515
        },
        {
          "code": "CHN",
          "name": "China",
          "stack": "Manufacturing base and AI hardware demand",
          "importMarketConcentration": 0.038244706723481,
          "importPartnerCount": 213,
          "importedProductCount": 4341
        },
        {
          "code": "JPN",
          "name": "Japan",
          "stack": "Semiconductor materials and equipment",
          "importMarketConcentration": 0.0837607762572182,
          "importPartnerCount": 217,
          "importedProductCount": 4190
        },
        {
          "code": "DEU",
          "name": "Germany",
          "stack": "Industrial machinery and chemicals",
          "importMarketConcentration": 0.0388905989746466,
          "importPartnerCount": 231,
          "importedProductCount": 4488
        },
        {
          "code": "KOR",
          "name": "Korea, Rep.",
          "stack": "Memory, displays, and advanced manufacturing",
          "importMarketConcentration": 0.0918614856387547,
          "importPartnerCount": 228,
          "importedProductCount": 4453
        },
        {
          "code": "MYS",
          "name": "Malaysia",
          "stack": "Semiconductor assembly and electronics",
          "importMarketConcentration": 0.0987557998445545,
          "importPartnerCount": 211,
          "importedProductCount": 4452
        },
        {
          "code": "VNM",
          "name": "Vietnam",
          "stack": "Electronics manufacturing and assembly",
          "importMarketConcentration": 0.113351081529245,
          "importPartnerCount": 97,
          "importedProductCount": 4295
        },
        {
          "code": "SGP",
          "name": "Singapore",
          "stack": "Trading hub and data center / chip logistics",
          "importMarketConcentration": 0.0688114642175431,
          "importPartnerCount": 226,
          "importedProductCount": 4325
        }
      ],
      "highestImportConcentration": [
        {
          "code": "VNM",
          "name": "Vietnam",
          "stack": "Electronics manufacturing and assembly",
          "importMarketConcentration": 0.113351081529245,
          "importPartnerCount": 97,
          "importedProductCount": 4295
        },
        {
          "code": "MYS",
          "name": "Malaysia",
          "stack": "Semiconductor assembly and electronics",
          "importMarketConcentration": 0.0987557998445545,
          "importPartnerCount": 211,
          "importedProductCount": 4452
        },
        {
          "code": "KOR",
          "name": "Korea, Rep.",
          "stack": "Memory, displays, and advanced manufacturing",
          "importMarketConcentration": 0.0918614856387547,
          "importPartnerCount": 228,
          "importedProductCount": 4453
        },
        {
          "code": "JPN",
          "name": "Japan",
          "stack": "Semiconductor materials and equipment",
          "importMarketConcentration": 0.0837607762572182,
          "importPartnerCount": 217,
          "importedProductCount": 4190
        },
        {
          "code": "SGP",
          "name": "Singapore",
          "stack": "Trading hub and data center / chip logistics",
          "importMarketConcentration": 0.0688114642175431,
          "importPartnerCount": 226,
          "importedProductCount": 4325
        },
        {
          "code": "USA",
          "name": "United States",
          "stack": "AI/cloud demand and semiconductor equipment market",
          "importMarketConcentration": 0.0531859216795074,
          "importPartnerCount": 222,
          "importedProductCount": 4515
        },
        {
          "code": "DEU",
          "name": "Germany",
          "stack": "Industrial machinery and chemicals",
          "importMarketConcentration": 0.0388905989746466,
          "importPartnerCount": 231,
          "importedProductCount": 4488
        },
        {
          "code": "CHN",
          "name": "China",
          "stack": "Manufacturing base and AI hardware demand",
          "importMarketConcentration": 0.038244706723481,
          "importPartnerCount": 213,
          "importedProductCount": 4341
        }
      ],
      "fewestImportPartners": [
        {
          "code": "VNM",
          "name": "Vietnam",
          "stack": "Electronics manufacturing and assembly",
          "importMarketConcentration": 0.113351081529245,
          "importPartnerCount": 97,
          "importedProductCount": 4295
        },
        {
          "code": "MYS",
          "name": "Malaysia",
          "stack": "Semiconductor assembly and electronics",
          "importMarketConcentration": 0.0987557998445545,
          "importPartnerCount": 211,
          "importedProductCount": 4452
        },
        {
          "code": "CHN",
          "name": "China",
          "stack": "Manufacturing base and AI hardware demand",
          "importMarketConcentration": 0.038244706723481,
          "importPartnerCount": 213,
          "importedProductCount": 4341
        },
        {
          "code": "JPN",
          "name": "Japan",
          "stack": "Semiconductor materials and equipment",
          "importMarketConcentration": 0.0837607762572182,
          "importPartnerCount": 217,
          "importedProductCount": 4190
        },
        {
          "code": "USA",
          "name": "United States",
          "stack": "AI/cloud demand and semiconductor equipment market",
          "importMarketConcentration": 0.0531859216795074,
          "importPartnerCount": 222,
          "importedProductCount": 4515
        },
        {
          "code": "SGP",
          "name": "Singapore",
          "stack": "Trading hub and data center / chip logistics",
          "importMarketConcentration": 0.0688114642175431,
          "importPartnerCount": 226,
          "importedProductCount": 4325
        },
        {
          "code": "KOR",
          "name": "Korea, Rep.",
          "stack": "Memory, displays, and advanced manufacturing",
          "importMarketConcentration": 0.0918614856387547,
          "importPartnerCount": 228,
          "importedProductCount": 4453
        },
        {
          "code": "DEU",
          "name": "Germany",
          "stack": "Industrial machinery and chemicals",
          "importMarketConcentration": 0.0388905989746466,
          "importPartnerCount": 231,
          "importedProductCount": 4488
        }
      ],
      "attempts": [
        {
          "year": "2023",
          "url": "https://wits.worldbank.org/API/V1/SDMX/V21/datasource/tradestats-trade/reporter/USA;CHN;JPN;DEU;KOR;MYS;VNM;SGP/year/2023/indicator/HH-MKT-CNCNTRTN-NDX;NMBR-MPRT-PRTNR;NMBR-PRDCT-MPRTD?format=JSON",
          "status": "ok",
          "rowCount": 24
        }
      ],
      "note": "Starter dependency panel from WITS Trade Stats. It is country-level concentration context, not an HS-code commodity-flow watchlist.",
      "error": null
    },
    "commodityFlowWatchlist": {
      "status": "query-designed",
      "title": "Commodity Flow Watchlist",
      "sourceFamilies": [
        {
          "name": "UN Comtrade",
          "status": "source-linked",
          "use": "HS-code commodity-flow imports and exports",
          "note": "Best candidate for product-level trade values and partner flows after HS-code validation."
        },
        {
          "name": "World Bank WITS Trade Stats",
          "status": "verified",
          "use": "Country-level import concentration and product-group context",
          "note": "Connected as a starter panel. Useful for broad dependency context, not a full HS-code flow monitor."
        }
      ],
      "watchlist": [
        {
          "id": "semiconductor-equipment",
          "label": "Semiconductor equipment",
          "stack": "chips / EDA / semiconductor equipment",
          "monitoringMode": "candidate-hs",
          "validationStatus": "hs4-plausible-needs-hs6",
          "broadProxy": "84-85_MachElec",
          "candidateHs": [
            "8486",
            "9030",
            "9010"
          ],
          "priority": "high",
          "rationale": "Fab capacity and advanced packaging bottlenecks depend on specialized equipment with narrow supplier geography."
        },
        {
          "id": "advanced-compute-memory",
          "label": "HBM / GPU / advanced compute hardware",
          "stack": "AI infrastructure / GPU",
          "monitoringMode": "candidate-hs",
          "validationStatus": "needs-hs6-disaggregation",
          "broadProxy": "84-85_MachElec",
          "candidateHs": [
            "8471",
            "8473",
            "8542"
          ],
          "priority": "high",
          "rationale": "Frontier model training and inference capacity depends on accelerators, advanced memory, servers, and related parts."
        },
        {
          "id": "lng-crude-refined-oil",
          "label": "LNG / crude / refined oil",
          "stack": "energy / shipping / East Asian industrial dependency",
          "monitoringMode": "candidate-hs",
          "validationStatus": "hs4-plausible",
          "broadProxy": "27-27_Fuels",
          "candidateHs": [
            "2709",
            "2710",
            "2711"
          ],
          "priority": "high",
          "rationale": "Energy flows connect maritime chokepoints to industrial uptime, data centers, and regional security."
        },
        {
          "id": "critical-minerals",
          "label": "Gallium / germanium / rare earths",
          "stack": "critical minerals / semiconductor materials",
          "monitoringMode": "candidate-hs",
          "validationStatus": "needs-hs6-disaggregation",
          "broadProxy": "28-38_Chemicals",
          "candidateHs": [
            "2805",
            "2846",
            "8112"
          ],
          "priority": "high",
          "rationale": "Critical mineral controls can interrupt semiconductors, magnets, optics, sensors, and defense electronics."
        },
        {
          "id": "photoresist-chemicals",
          "label": "Photoresist and lithography chemicals",
          "stack": "semiconductor materials",
          "monitoringMode": "candidate-hs",
          "validationStatus": "needs-hs6-disaggregation",
          "broadProxy": "28-38_Chemicals",
          "candidateHs": [
            "3707",
            "3824"
          ],
          "priority": "medium",
          "rationale": "Chemical inputs are easy to underweight but can create practical fab constraints."
        },
        {
          "id": "submarine-cable-equipment",
          "label": "Submarine cable and telecom equipment",
          "stack": "internet infrastructure / submarine cables",
          "monitoringMode": "candidate-hs",
          "validationStatus": "needs-hs6-disaggregation",
          "broadProxy": "84-85_MachElec",
          "candidateHs": [
            "8517",
            "8544"
          ],
          "priority": "medium",
          "rationale": "Connectivity resilience depends on cable, optical, switching, landing, and repair ecosystems."
        },
        {
          "id": "data-center-power-equipment",
          "label": "Data-center power equipment",
          "stack": "AI infrastructure / power",
          "monitoringMode": "candidate-hs",
          "validationStatus": "hs4-plausible-needs-hs6",
          "broadProxy": "84-85_MachElec",
          "candidateHs": [
            "8502",
            "8504",
            "8535",
            "8536",
            "8537"
          ],
          "priority": "medium",
          "rationale": "AI infrastructure scaling is constrained by transformers, converters, switchgear, generation, and grid interconnection."
        }
      ],
      "groupCount": 7,
      "candidateHsCount": 21,
      "highPriorityCount": 4,
      "broadProxyCount": 3,
      "note": "All requested commodity families are now tracked as query-designed watch items. HS codes are candidate ranges until validated against official nomenclature and source behavior. WITS broad proxies are context layers, not precise HS-code evidence.",
      "error": null
    },
    "commodityBroadFlows": {
      "status": "verified",
      "source": "https://wits.worldbank.org/witsapiintro.aspx?lang=en",
      "title": "WITS Broad Commodity Flow Proxies",
      "groupCount": 2,
      "recordCount": 1244,
      "years": [
        "2023"
      ],
      "groups": [
        {
          "id": "energy-fuels",
          "label": "LNG / crude / refined oil broad proxy",
          "productCode": "27-27_Fuels",
          "productLabel": "Fuels",
          "mapsTo": "lng-crude-refined-oil",
          "precision": "broad-wits-product-group",
          "caveat": "WITS product group covers all HS chapter 27 fuels, not separate LNG, crude, and refined oil HS flows.",
          "year": "2023",
          "apiSource": "https://wits.worldbank.org/API/V1/SDMX/V21/datasource/tradestats-trade/reporter/CHN;JPN;KOR;USA/year/2023/partner/ALL/product/27-27_Fuels/indicator/MPRT-TRD-VL?format=JSON",
          "rowCount": 425,
          "countryPartnerRowCount": 393,
          "reporterTotals": [
            {
              "reporter": "CHN",
              "reporterName": "China",
              "valueThousandUsd": 515849676.4259997,
              "partnerCount": 106
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "valueThousandUsd": 266592032.2200001,
              "partnerCount": 99
            },
            {
              "reporter": "JPN",
              "reporterName": "Japan",
              "valueThousandUsd": 194666525.34226507,
              "partnerCount": 78
            },
            {
              "reporter": "KOR",
              "reporterName": "Korea, Rep.",
              "valueThousandUsd": 171354533.64199996,
              "partnerCount": 110
            }
          ],
          "topPartnerRows": [
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "CAN",
              "partnerName": "Canada",
              "valueThousandUsd": 131909734.446
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "RUS",
              "partnerName": "Russian Federation",
              "valueThousandUsd": 94772790.267
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "SAU",
              "partnerName": "Saudi Arabia",
              "valueThousandUsd": 55045163.801
            },
            {
              "reporter": "JPN",
              "reporterName": "Japan",
              "partner": "AUS",
              "partnerName": "Australia",
              "valueThousandUsd": 48442117.94211
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "MYS",
              "partnerName": "Malaysia",
              "valueThousandUsd": 45882254.994
            },
            {
              "reporter": "JPN",
              "reporterName": "Japan",
              "partner": "ARE",
              "partnerName": "United Arab Emirates",
              "valueThousandUsd": 35747550.346425
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "IRQ",
              "partnerName": "Iraq",
              "valueThousandUsd": 35464039.944
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "ARE",
              "partnerName": "United Arab Emirates",
              "valueThousandUsd": 34021022.783
            },
            {
              "reporter": "JPN",
              "reporterName": "Japan",
              "partner": "SAU",
              "partnerName": "Saudi Arabia",
              "valueThousandUsd": 33928293.952544
            },
            {
              "reporter": "KOR",
              "reporterName": "Korea, Rep.",
              "partner": "SAU",
              "partnerName": "Saudi Arabia",
              "valueThousandUsd": 31521398.35
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "OMN",
              "partnerName": "Oman",
              "valueThousandUsd": 28495891.871
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "MEX",
              "partnerName": "Mexico",
              "valueThousandUsd": 25012214.825
            }
          ],
          "attempts": [
            {
              "year": "2023",
              "url": "https://wits.worldbank.org/API/V1/SDMX/V21/datasource/tradestats-trade/reporter/CHN;JPN;KOR;USA/year/2023/partner/ALL/product/27-27_Fuels/indicator/MPRT-TRD-VL?format=JSON",
              "status": "ok",
              "rowCount": 425
            }
          ]
        },
        {
          "id": "machinery-electrical",
          "label": "Semiconductor equipment broad proxy",
          "productCode": "84-85_MachElec",
          "productLabel": "Mach and Elec",
          "mapsTo": "semiconductor-equipment",
          "precision": "broad-wits-product-group",
          "caveat": "WITS product group covers HS chapters 84-85 machinery/electrical goods. It is a broad context proxy, not semiconductor equipment itself.",
          "year": "2023",
          "apiSource": "https://wits.worldbank.org/API/V1/SDMX/V21/datasource/tradestats-trade/reporter/CHN;JPN;KOR;USA/year/2023/partner/ALL/product/84-85_MachElec/indicator/MPRT-TRD-VL?format=JSON",
          "rowCount": 819,
          "countryPartnerRowCount": 787,
          "reporterTotals": [
            {
              "reporter": "USA",
              "reporterName": "United States",
              "valueThousandUsd": 922651642.8409994,
              "partnerCount": 214
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "valueThousandUsd": 653563997.4199998,
              "partnerCount": 201
            },
            {
              "reporter": "JPN",
              "reporterName": "Japan",
              "valueThousandUsd": 184420283.56292605,
              "partnerCount": 164
            },
            {
              "reporter": "KOR",
              "reporterName": "Korea, Rep.",
              "valueThousandUsd": 182132851.42500013,
              "partnerCount": 208
            }
          ],
          "topPartnerRows": [
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "CHN",
              "partnerName": "China",
              "valueThousandUsd": 212732640.269
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "OAS",
              "partnerName": "Other Asia, nes",
              "valueThousandUsd": 173237298.207
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "MEX",
              "partnerName": "Mexico",
              "valueThousandUsd": 166988936.42
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "KOR",
              "partnerName": "Korea, Rep.",
              "valueThousandUsd": 103168420.56
            },
            {
              "reporter": "JPN",
              "reporterName": "Japan",
              "partner": "CHN",
              "partnerName": "China",
              "valueThousandUsd": 81369384.506065
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "JPN",
              "partnerName": "Japan",
              "valueThousandUsd": 77839313.537
            },
            {
              "reporter": "KOR",
              "reporterName": "Korea, Rep.",
              "partner": "CHN",
              "partnerName": "China",
              "valueThousandUsd": 66471936.832
            },
            {
              "reporter": "CHN",
              "reporterName": "China",
              "partner": "VNM",
              "partnerName": "Vietnam",
              "valueThousandUsd": 62430385.036
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "OAS",
              "partnerName": "Other Asia, nes",
              "valueThousandUsd": 61471082.666
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "VNM",
              "partnerName": "Vietnam",
              "valueThousandUsd": 59240275.955
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "JPN",
              "partnerName": "Japan",
              "valueThousandUsd": 55601893.499
            },
            {
              "reporter": "USA",
              "reporterName": "United States",
              "partner": "DEU",
              "partnerName": "Germany",
              "valueThousandUsd": 47016059.467
            }
          ],
          "attempts": [
            {
              "year": "2023",
              "url": "https://wits.worldbank.org/API/V1/SDMX/V21/datasource/tradestats-trade/reporter/CHN;JPN;KOR;USA/year/2023/partner/ALL/product/84-85_MachElec/indicator/MPRT-TRD-VL?format=JSON",
              "status": "ok",
              "rowCount": 819
            }
          ]
        }
      ],
      "note": "Verified WITS product-group imports. These are broad proxies only; precise HS-code commodity flows still require UN Comtrade/API-key or bulk-source validation.",
      "error": null
    },
    "commodityHsValidation": {
      "status": "verified",
      "source": "https://www.usitc.gov/harmonized_tariff_information",
      "apiSource": "https://hts.usitc.gov/reststop/exportList",
      "title": "Commodity HS Candidate Validation",
      "candidateCount": 21,
      "verifiedCount": 21,
      "needsHs6Count": 16,
      "sourceNote": "USITC HTS is an official U.S. HTS source based on the international HS structure. It validates headings for monitoring design, not a binding classification ruling for every jurisdiction.",
      "records": [
        {
          "family": "semiconductor-equipment",
          "code": "8486",
          "role": "primary",
          "target": "semiconductor manufacturing machinery",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8486",
          "description": "Machines and apparatus of a kind used solely or principally for the manufacture of semiconductor boules or wafers, semiconductor devices, electronic integrated circuits or flat panel displays; machines and apparatus specified in note 11(C) to this chapter; parts and accessories:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8486&to=8486&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "code": "9030",
          "role": "supporting",
          "target": "electrical measurement and test instruments",
          "status": "verified",
          "assessment": "verified-supporting-heading-needs-scope",
          "htsno": "9030",
          "description": "Oscilloscopes, spectrum analyzers and other instruments and apparatus for measuring or checking electrical quantities, excluding meters of heading 9028; instruments and apparatus for measuring or detecting alpha, beta, gamma, X-ray, cosmic or other ionizing radiations; parts and accessories thereof:​",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=9030&to=9030&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "code": "9010",
          "role": "supporting",
          "target": "photographic / lithography-adjacent apparatus",
          "status": "verified",
          "assessment": "verified-supporting-heading-needs-scope",
          "htsno": "9010",
          "description": "Apparatus and equipment for photographic (including cinematographic) laboratories, not specified or included elsewhere in this chapter; negatoscopes; projection screens; parts and accessories thereof:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=9010&to=9010&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "code": "8471",
          "role": "broad",
          "target": "computing machines and units",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "8471",
          "description": "Automatic data processing machines and units thereof; magnetic or optical readers, machines for transcribing data onto data media in coded form and machines for processing such data, not elsewhere specified or included:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8471&to=8471&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "code": "8473",
          "role": "broad",
          "target": "parts and accessories for computing machines",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "8473",
          "description": "Parts and accessories (other than covers, carrying cases and the like) suitable for use solely or principally with machines of headings 8470 to 8472:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8473&to=8473&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "code": "8542",
          "role": "primary",
          "target": "integrated circuits",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8542",
          "description": "Electronic integrated circuits; parts thereof:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8542&to=8542&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "code": "2709",
          "role": "primary",
          "target": "crude petroleum oils",
          "status": "verified",
          "assessment": "verified-heading-broad-usable",
          "htsno": "2709.00",
          "description": "Petroleum oils and oils obtained from bituminous minerals, crude:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=2709&to=2709&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 0
            },
            {
              "method": "search",
              "url": "https://hts.usitc.gov/reststop/search?keyword=2709",
              "status": "ok",
              "rowCount": 5
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "code": "2710",
          "role": "primary",
          "target": "refined petroleum oils and preparations",
          "status": "verified",
          "assessment": "verified-heading-broad-usable",
          "htsno": "2710",
          "description": "Petroleum oils and oils obtained from bituminous minerals, other than crude; preparations not elsewhere specified or included, containing by weight 70 percent or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations; waste oils:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=2710&to=2710&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "code": "2711",
          "role": "primary",
          "target": "petroleum gases and other gaseous hydrocarbons",
          "status": "verified",
          "assessment": "verified-heading-broad-usable",
          "htsno": "2711",
          "description": "Petroleum gases and other gaseous hydrocarbons:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=2711&to=2711&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "critical-minerals",
          "code": "2805",
          "role": "broad",
          "target": "rare-earth metals and related metals",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "2805",
          "description": "Alkali or alkaline-earth metals; rare-earth metals, scandium and yttrium, whether or not intermixed or interalloyed; mercury:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=2805&to=2805&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "critical-minerals",
          "code": "2846",
          "role": "broad",
          "target": "rare-earth compounds",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "2846",
          "description": "Compounds, inorganic or organic, of rare-earth metals, of yttrium or of scandium, or of mixtures of these metals:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=2846&to=2846&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "critical-minerals",
          "code": "8112",
          "role": "broad",
          "target": "germanium, gallium, indium and related metals",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "8112",
          "description": "Beryllium, chromium, hafnium, rhenium, thallium, cadmium, germanium, vanadium, gallium, indium and niobium (columbium), and articles of these metals, including waste and scrap:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8112&to=8112&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "code": "3707",
          "role": "broad",
          "target": "photographic chemical preparations",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "3707",
          "description": "Chemical preparations for photographic uses (other than varnishes, glues, adhesives and similar preparations); unmixed products for photographic uses, put up in measured portions or put up for retail sale in a form ready for use:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=3707&to=3707&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "code": "3824",
          "role": "broad",
          "target": "chemical products and preparations not elsewhere specified",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "3824",
          "description": "Prepared binders for foundry molds or cores; chemical products and preparations of the chemical or allied industries (including those consisting of mixtures of natural products), not elsewhere specified or included:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=3824&to=3824&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "submarine-cable-equipment",
          "code": "8517",
          "role": "broad",
          "target": "telecommunications apparatus",
          "status": "verified",
          "assessment": "verified-broad-heading-needs-hs6",
          "htsno": "8517",
          "description": "Telephone sets, including smartphones and other telephones for cellular networks or for other wireless networks; other apparatus for the transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network), other than transmission or reception apparatus of heading 8443, 8525, 8527 or 8528; parts thereof:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8517&to=8517&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "submarine-cable-equipment",
          "code": "8544",
          "role": "primary",
          "target": "insulated wire, cable, and optical fiber cables",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8544",
          "description": "Insulated (including enameled or anodized) wire, cable (including coaxial cable) and other insulated electric conductors, whether or not fitted with connectors; optical fiber cables, made up of individually sheathed fibers, whether or not assembled with electric conductors or fitted with connectors:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8544&to=8544&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "code": "8502",
          "role": "primary",
          "target": "electric generating sets and converters",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8502",
          "description": "Electric generating sets and rotary converters:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8502&to=8502&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "code": "8504",
          "role": "primary",
          "target": "transformers, static converters, inductors",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8504",
          "description": "Electrical transformers, static converters (for example, rectifiers) and inductors; parts thereof:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8504&to=8504&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "code": "8535",
          "role": "primary",
          "target": "high-voltage switching/protection apparatus",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8535",
          "description": "Electrical apparatus for switching or protecting electrical circuits, or for making connections to or in electrical circuits (for example, switches, fuses, lightning arresters, voltage limiters, surge suppressors, plugs and other connectors, junction boxes), for a voltage exceeding 1,000 V:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8535&to=8535&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "code": "8536",
          "role": "primary",
          "target": "low-voltage switching/protection apparatus",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8536",
          "description": "Electrical apparatus for switching or protecting electrical circuits, or for making connections to or in electrical circuits (for example, switches, relays, fuses, surge suppressors, plugs, sockets, lamp-holders and other connectors, junction boxes), for a voltage not exceeding 1,000 V; connectors for optical fibers, optical fiber bundles or cables:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8536&to=8536&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "code": "8537",
          "role": "primary",
          "target": "control panels and cabinets",
          "status": "verified",
          "assessment": "verified-heading-needs-hs6",
          "htsno": "8537",
          "description": "Boards, panels, consoles, desks, cabinets and other bases, equipped with two or more apparatus of heading 8535 or 8536, for electric control or the distribution of electricity, including those incorporating instruments or apparatus of chapter 90, and numerical control apparatus, other than switching apparatus of heading 8517:",
          "source": "USITC HTS REST API",
          "attempts": [
            {
              "method": "exportList",
              "url": "https://hts.usitc.gov/reststop/exportList?from=8537&to=8537&format=JSON&styles=false",
              "status": "ok",
              "rowCount": 1
            }
          ]
        }
      ],
      "byFamily": [
        {
          "family": "semiconductor-equipment",
          "candidateCount": 3,
          "verifiedCount": 3,
          "primaryCount": 1,
          "needsHs6Count": 1,
          "assessments": {
            "verified-heading-needs-hs6": 1,
            "verified-supporting-heading-needs-scope": 2
          }
        },
        {
          "family": "advanced-compute-memory",
          "candidateCount": 3,
          "verifiedCount": 3,
          "primaryCount": 1,
          "needsHs6Count": 3,
          "assessments": {
            "verified-broad-heading-needs-hs6": 2,
            "verified-heading-needs-hs6": 1
          }
        },
        {
          "family": "lng-crude-refined-oil",
          "candidateCount": 3,
          "verifiedCount": 3,
          "primaryCount": 3,
          "needsHs6Count": 0,
          "assessments": {
            "verified-heading-broad-usable": 3
          }
        },
        {
          "family": "critical-minerals",
          "candidateCount": 3,
          "verifiedCount": 3,
          "primaryCount": 0,
          "needsHs6Count": 3,
          "assessments": {
            "verified-broad-heading-needs-hs6": 3
          }
        },
        {
          "family": "photoresist-chemicals",
          "candidateCount": 2,
          "verifiedCount": 2,
          "primaryCount": 0,
          "needsHs6Count": 2,
          "assessments": {
            "verified-broad-heading-needs-hs6": 2
          }
        },
        {
          "family": "submarine-cable-equipment",
          "candidateCount": 2,
          "verifiedCount": 2,
          "primaryCount": 1,
          "needsHs6Count": 2,
          "assessments": {
            "verified-broad-heading-needs-hs6": 1,
            "verified-heading-needs-hs6": 1
          }
        },
        {
          "family": "data-center-power-equipment",
          "candidateCount": 5,
          "verifiedCount": 5,
          "primaryCount": 5,
          "needsHs6Count": 5,
          "assessments": {
            "verified-heading-needs-hs6": 5
          }
        }
      ],
      "error": null
    },
    "commodityHsSubheadings": {
      "status": "verified",
      "source": "https://www.usitc.gov/harmonized_tariff_information",
      "apiSource": "https://hts.usitc.gov/reststop/exportList",
      "title": "Commodity HS6 Subheading Candidates",
      "headingCount": 21,
      "hts6Count": 147,
      "tariffRowCount": 608,
      "headings": [
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8486&to=8487&format=JSON&styles=false",
          "rowCount": 9,
          "hts6Count": 5,
          "hts6": [
            {
              "family": "semiconductor-equipment",
              "heading": "8486",
              "hts6": "848610",
              "firstHtsno": "8486.10.00.00",
              "description": "Machines and apparatus for the manufacture of boules or wafers",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8486.10.00.00",
                  "indent": "1",
                  "description": "Machines and apparatus for the manufacture of boules or wafers"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "8486",
              "hts6": "848620",
              "firstHtsno": "8486.20.00.00",
              "description": "Machines and apparatus for the manufacture of semiconductor devices or of electronic integrated circuits",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8486.20.00.00",
                  "indent": "1",
                  "description": "Machines and apparatus for the manufacture of semiconductor devices or of electronic integrated circuits"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "8486",
              "hts6": "848630",
              "firstHtsno": "8486.30.00.00",
              "description": "Machines and apparatus for the manufacture of flat panel displays",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8486.30.00.00",
                  "indent": "1",
                  "description": "Machines and apparatus for the manufacture of flat panel displays"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "8486",
              "hts6": "848640",
              "firstHtsno": "8486.40.00",
              "description": "Machines and apparatus specified in note 11(C) to this chapter",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8486.40.00",
                  "indent": "1",
                  "description": "Machines and apparatus specified in note 11(C) to this chapter"
                },
                {
                  "htsno": "8486.40.00.10",
                  "indent": "2",
                  "description": "For the manufacture or repair of masks and reticles"
                },
                {
                  "htsno": "8486.40.00.20",
                  "indent": "2",
                  "description": "For assembling semiconductor devices or electronic integrated circuits"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "8486",
              "hts6": "848690",
              "firstHtsno": "8486.90.00.00",
              "description": "Parts and accessories",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8486.90.00.00",
                  "indent": "1",
                  "description": "Parts and accessories"
                }
              ]
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=9030&to=9031&format=JSON&styles=false",
          "rowCount": 30,
          "hts6Count": 11,
          "hts6": [
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903010",
              "firstHtsno": "9030.10.00.00",
              "description": "Instruments and apparatus for measuring or detecting ionizing radiations",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.10.00.00",
                  "indent": "1",
                  "description": "Instruments and apparatus for measuring or detecting ionizing radiations"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903020",
              "firstHtsno": "9030.20",
              "description": "Oscilloscopes and oscillographs:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "9030.20",
                  "indent": "1",
                  "description": "Oscilloscopes and oscillographs:"
                },
                {
                  "htsno": "9030.20.05.00",
                  "indent": "2",
                  "description": "Specially designed for telecommunications"
                },
                {
                  "htsno": "9030.20.10.00",
                  "indent": "2",
                  "description": "Other oscilloscopes and oscillographs"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903031",
              "firstHtsno": "9030.31.00.00",
              "description": "Multimeters, without a recording device",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.31.00.00",
                  "indent": "2",
                  "description": "Multimeters, without a recording device"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903032",
              "firstHtsno": "9030.32.00.00",
              "description": "Multimeters, with a recording device",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.32.00.00",
                  "indent": "2",
                  "description": "Multimeters, with a recording device"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903033",
              "firstHtsno": "9030.33",
              "description": "Other, without a recording device:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "9030.33",
                  "indent": "2",
                  "description": "Other, without a recording device:"
                },
                {
                  "htsno": "9030.33.34.00",
                  "indent": "3",
                  "description": "Resistance measuring instruments"
                },
                {
                  "htsno": "9030.33.38.00",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903039",
              "firstHtsno": "9030.39.01.00",
              "description": "Other, with a recording device",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.39.01.00",
                  "indent": "2",
                  "description": "Other, with a recording device"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903040",
              "firstHtsno": "9030.40.00.00",
              "description": "Other instruments and apparatus, specially designed for telecommunications (for example, cross-talk meters, gain measuring instruments, distortion factor meters, psophometers)",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.40.00.00",
                  "indent": "1",
                  "description": "Other instruments and apparatus, specially designed for telecommunications (for example, cross-talk meters, gain measuring instruments, distortion factor meters, psophometers)"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903082",
              "firstHtsno": "9030.82.00.00",
              "description": "For measuring or checking semiconductor wafers or devices (including integrated circuits)",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.82.00.00",
                  "indent": "2",
                  "description": "For measuring or checking semiconductor wafers or devices (including integrated circuits)"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903084",
              "firstHtsno": "9030.84.00.00",
              "description": "Other, with a recording device",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.84.00.00",
                  "indent": "2",
                  "description": "Other, with a recording device"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903089",
              "firstHtsno": "9030.89.01.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9030.89.01.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9030",
              "hts6": "903090",
              "firstHtsno": "9030.90",
              "description": "Parts and accessories:",
              "rowCount": 15,
              "sampleRows": [
                {
                  "htsno": "9030.90",
                  "indent": "1",
                  "description": "Parts and accessories:"
                },
                {
                  "htsno": "9030.90.25.00",
                  "indent": "3",
                  "description": "Printed circuit assemblies"
                },
                {
                  "htsno": "9030.90.46.00",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=9010&to=9011&format=JSON&styles=false",
          "rowCount": 13,
          "hts6Count": 4,
          "hts6": [
            {
              "family": "semiconductor-equipment",
              "heading": "9010",
              "hts6": "901010",
              "firstHtsno": "9010.10.00.00",
              "description": "Apparatus and equipment for automatically developing photographic (including cinematographic) film or paper in rolls or for automatically exposing developed film to rolls of photographic paper",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9010.10.00.00",
                  "indent": "1",
                  "description": "Apparatus and equipment for automatically developing photographic (including cinematographic) film or paper in rolls or for automatically exposing developed film to rolls of photographic paper"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9010",
              "hts6": "901050",
              "firstHtsno": "9010.50",
              "description": "Other apparatus and equipment for photographic (including cinematographic) laboratories; negatoscopes:",
              "rowCount": 7,
              "sampleRows": [
                {
                  "htsno": "9010.50",
                  "indent": "1",
                  "description": "Other apparatus and equipment for photographic (including cinematographic) laboratories; negatoscopes:"
                },
                {
                  "htsno": "9010.50.10.00",
                  "indent": "2",
                  "description": "Contact printers"
                },
                {
                  "htsno": "9010.50.20.00",
                  "indent": "2",
                  "description": "Developing tanks"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9010",
              "hts6": "901060",
              "firstHtsno": "9010.60.00.00",
              "description": "Projection screens",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "9010.60.00.00",
                  "indent": "1",
                  "description": "Projection screens"
                }
              ]
            },
            {
              "family": "semiconductor-equipment",
              "heading": "9010",
              "hts6": "901090",
              "firstHtsno": "9010.90",
              "description": "Parts and accessories:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "9010.90",
                  "indent": "1",
                  "description": "Parts and accessories:"
                },
                {
                  "htsno": "9010.90.85.00",
                  "indent": "2",
                  "description": "Parts and accessories of articles of subheadings 9010.50 and 9010.60"
                },
                {
                  "htsno": "9010.90.95.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8471&to=8472&format=JSON&styles=false",
          "rowCount": 38,
          "hts6Count": 8,
          "hts6": [
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847130",
              "firstHtsno": "8471.30.01.00",
              "description": "Portable automatic data processing machines, weighing not more than 10 kg, consisting of at least a central processing unit, a keyboard and a display",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8471.30.01.00",
                  "indent": "1",
                  "description": "Portable automatic data processing machines, weighing not more than 10 kg, consisting of at least a central processing unit, a keyboard and a display"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847141",
              "firstHtsno": "8471.41.01",
              "description": "Comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8471.41.01",
                  "indent": "2",
                  "description": "Comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined"
                },
                {
                  "htsno": "8471.41.01.10",
                  "indent": "3",
                  "description": "With cathode-ray tube (CRT)"
                },
                {
                  "htsno": "8471.41.01.50",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847149",
              "firstHtsno": "8471.49.00.00",
              "description": "Other, entered in the form of systems",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8471.49.00.00",
                  "indent": "2",
                  "description": "Other, entered in the form of systems"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847150",
              "firstHtsno": "8471.50.01",
              "description": "Processing units other than those of subheading 8471.41 or 8471.49, whether or not containing in the same housing one or two of the following types of unit: storage units, input units, output units",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8471.50.01",
                  "indent": "1",
                  "description": "Processing units other than those of subheading 8471.41 or 8471.49, whether or not containing in the same housing one or two of the following types of unit: storage units, input units, output units"
                },
                {
                  "htsno": "8471.50.01.10",
                  "indent": "2",
                  "description": "With cathode-ray tube (CRT)"
                },
                {
                  "htsno": "8471.50.01.50",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847160",
              "firstHtsno": "8471.60",
              "description": "Input or output units, whether or not containing storage units in the same housing:",
              "rowCount": 10,
              "sampleRows": [
                {
                  "htsno": "8471.60",
                  "indent": "1",
                  "description": "Input or output units, whether or not containing storage units in the same housing:"
                },
                {
                  "htsno": "8471.60.10",
                  "indent": "2",
                  "description": "Combined input/output units"
                },
                {
                  "htsno": "8471.60.10.10",
                  "indent": "3",
                  "description": "With cathode-ray tube (CRT)"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847170",
              "firstHtsno": "8471.70",
              "description": "Storage units:",
              "rowCount": 14,
              "sampleRows": [
                {
                  "htsno": "8471.70",
                  "indent": "1",
                  "description": "Storage units:"
                },
                {
                  "htsno": "8471.70.10.00",
                  "indent": "4",
                  "description": "Without read-write unit assembled therein; read-write units entered separately"
                },
                {
                  "htsno": "8471.70.20.00",
                  "indent": "4",
                  "description": "Units for physical incorporation into automatic data processing machines or units thereof"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847180",
              "firstHtsno": "8471.80",
              "description": "Other units of automatic data processing machines:",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8471.80",
                  "indent": "1",
                  "description": "Other units of automatic data processing machines:"
                },
                {
                  "htsno": "8471.80.10.00",
                  "indent": "2",
                  "description": "Control or adapter units"
                },
                {
                  "htsno": "8471.80.40.00",
                  "indent": "3",
                  "description": "Units suitable for physical incorporation into automatic data processing machines"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8471",
              "hts6": "847190",
              "firstHtsno": "8471.90.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8471.90.00.00",
                  "indent": "1",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8473",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8473&to=8474&format=JSON&styles=false",
          "rowCount": 19,
          "hts6Count": 5,
          "hts6": [
            {
              "family": "advanced-compute-memory",
              "heading": "8473",
              "hts6": "847321",
              "firstHtsno": "8473.21.00.00",
              "description": "Of the electronic calculating machines of subheading 8470.10, 8470.21 or 8470.29",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8473.21.00.00",
                  "indent": "2",
                  "description": "Of the electronic calculating machines of subheading 8470.10, 8470.21 or 8470.29"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8473",
              "hts6": "847329",
              "firstHtsno": "8473.29.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8473.29.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8473",
              "hts6": "847330",
              "firstHtsno": "8473.30",
              "description": "Parts and accessories of the machines of heading 8471:",
              "rowCount": 7,
              "sampleRows": [
                {
                  "htsno": "8473.30",
                  "indent": "1",
                  "description": "Parts and accessories of the machines of heading 8471:"
                },
                {
                  "htsno": "8473.30.11",
                  "indent": "3",
                  "description": "Printed circuit assemblies"
                },
                {
                  "htsno": "8473.30.11.40",
                  "indent": "4",
                  "description": "Memory modules suitable for use solely or principally with machines of heading 8471"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8473",
              "hts6": "847340",
              "firstHtsno": "8473.40",
              "description": "Parts and accessories of the machines of heading 8472:",
              "rowCount": 5,
              "sampleRows": [
                {
                  "htsno": "8473.40",
                  "indent": "1",
                  "description": "Parts and accessories of the machines of heading 8472:"
                },
                {
                  "htsno": "8473.40.10.00",
                  "indent": "2",
                  "description": "Printed circuit assemblies for automatic teller machines of subheading 8472.90.10"
                },
                {
                  "htsno": "8473.40.21.00",
                  "indent": "2",
                  "description": "Printed circuit assemblies of word processing machines of 8472.90.50"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8473",
              "hts6": "847350",
              "firstHtsno": "8473.50",
              "description": "Parts and accessories equally suitable for use with machines of two or more of the headings 8470 to 8472:",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8473.50",
                  "indent": "1",
                  "description": "Parts and accessories equally suitable for use with machines of two or more of the headings 8470 to 8472:"
                },
                {
                  "htsno": "8473.50.30.00",
                  "indent": "2",
                  "description": "Printed circuit assemblies"
                },
                {
                  "htsno": "8473.50.60.00",
                  "indent": "2",
                  "description": "Parts and accessories, including face plates and lock latches, of printed circuit assemblies"
                }
              ]
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8542",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8542&to=8543&format=JSON&styles=false",
          "rowCount": 35,
          "hts6Count": 5,
          "hts6": [
            {
              "family": "advanced-compute-memory",
              "heading": "8542",
              "hts6": "854231",
              "firstHtsno": "8542.31.00",
              "description": "Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits",
              "rowCount": 14,
              "sampleRows": [
                {
                  "htsno": "8542.31.00",
                  "indent": "2",
                  "description": "Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits"
                },
                {
                  "htsno": "8542.31.00.15",
                  "indent": "4",
                  "description": "8-bit"
                },
                {
                  "htsno": "8542.31.00.20",
                  "indent": "4",
                  "description": "16-bit"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8542",
              "hts6": "854232",
              "firstHtsno": "8542.32.00",
              "description": "Memories",
              "rowCount": 10,
              "sampleRows": [
                {
                  "htsno": "8542.32.00",
                  "indent": "2",
                  "description": "Memories"
                },
                {
                  "htsno": "8542.32.00.02",
                  "indent": "4",
                  "description": "Not over 128 megabits"
                },
                {
                  "htsno": "8542.32.00.24",
                  "indent": "4",
                  "description": "Over 128 megabits but not over 256 megabits"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8542",
              "hts6": "854233",
              "firstHtsno": "8542.33.00.01",
              "description": "Amplifiers",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8542.33.00.01",
                  "indent": "2",
                  "description": "Amplifiers"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8542",
              "hts6": "854239",
              "firstHtsno": "8542.39.00",
              "description": "Other",
              "rowCount": 8,
              "sampleRows": [
                {
                  "htsno": "8542.39.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "8542.39.00.10",
                  "indent": "3",
                  "description": "RF transceivers"
                },
                {
                  "htsno": "8542.39.00.20",
                  "indent": "3",
                  "description": "Active filters"
                }
              ]
            },
            {
              "family": "advanced-compute-memory",
              "heading": "8542",
              "hts6": "854290",
              "firstHtsno": "8542.90.00.00",
              "description": "Parts",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8542.90.00.00",
                  "indent": "1",
                  "description": "Parts"
                }
              ]
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2709",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=2709&to=2710&format=JSON&styles=false",
          "rowCount": 5,
          "hts6Count": 1,
          "hts6": [
            {
              "family": "lng-crude-refined-oil",
              "heading": "2709",
              "hts6": "270900",
              "firstHtsno": "2709.00",
              "description": "Petroleum oils and oils obtained from bituminous minerals, crude:",
              "rowCount": 5,
              "sampleRows": [
                {
                  "htsno": "2709.00",
                  "indent": "0",
                  "description": "Petroleum oils and oils obtained from bituminous minerals, crude:"
                },
                {
                  "htsno": "2709.00.10.00",
                  "indent": "1",
                  "description": "Testing under 25 degrees A.P.I."
                },
                {
                  "htsno": "2709.00.20",
                  "indent": "1",
                  "description": "Testing 25 degrees A.P.I. or more"
                }
              ]
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=2710&to=2711&format=JSON&styles=false",
          "rowCount": 91,
          "hts6Count": 5,
          "hts6": [
            {
              "family": "lng-crude-refined-oil",
              "heading": "2710",
              "hts6": "271012",
              "firstHtsno": "2710.12",
              "description": "Light oils and preparations:",
              "rowCount": 16,
              "sampleRows": [
                {
                  "htsno": "2710.12",
                  "indent": "2",
                  "description": "Light oils and preparations:"
                },
                {
                  "htsno": "2710.12.15",
                  "indent": "3",
                  "description": "Motor fuel"
                },
                {
                  "htsno": "2710.12.15.10",
                  "indent": "5",
                  "description": "Leaded"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2710",
              "hts6": "271019",
              "firstHtsno": "2710.19",
              "description": "Other:",
              "rowCount": 41,
              "sampleRows": [
                {
                  "htsno": "2710.19",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "2710.19.06",
                  "indent": "4",
                  "description": "Testing under 25 degrees A.P.I."
                },
                {
                  "htsno": "2710.19.06.05",
                  "indent": "6",
                  "description": "Containing not more than 500 ppm of sulfur"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2710",
              "hts6": "271020",
              "firstHtsno": "2710.20",
              "description": "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included containing by weight 70 percent or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, containing biodiesel, other than waste oils:",
              "rowCount": 20,
              "sampleRows": [
                {
                  "htsno": "2710.20",
                  "indent": "1",
                  "description": "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included containing by weight 70 percent or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, containing biodiesel, other than waste oils:"
                },
                {
                  "htsno": "2710.20.05",
                  "indent": "3",
                  "description": "Testing under 25 degrees A.P.I."
                },
                {
                  "htsno": "2710.20.05.10",
                  "indent": "4",
                  "description": "Having a Saybolt Universal viscosity at 37.8˚C of 45 seconds or more but not more than 125 seconds (No. 4-type fuel oils)"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2710",
              "hts6": "271091",
              "firstHtsno": "2710.91.00",
              "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs)",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "2710.91.00",
                  "indent": "2",
                  "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs)"
                },
                {
                  "htsno": "2710.91.00.10",
                  "indent": "3",
                  "description": "Containing polychlorinated biphenyls (PCBs) at a concentration level of 50 mg/kg or more"
                },
                {
                  "htsno": "2710.91.00.50",
                  "indent": "3",
                  "description": "Other, containing polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs), whether or not also containing polychlorinated biphenyls (PCBs) at a concentration level of less than 50 mg/kg"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2710",
              "hts6": "271099",
              "firstHtsno": "2710.99",
              "description": "Other:",
              "rowCount": 10,
              "sampleRows": [
                {
                  "htsno": "2710.99",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "2710.99.05.00",
                  "indent": "4",
                  "description": "Testing under 25 degrees A.P.I."
                },
                {
                  "htsno": "2710.99.10.00",
                  "indent": "4",
                  "description": "Testing 25 degrees A.P.I. or more"
                }
              ]
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=2711&to=2712&format=JSON&styles=false",
          "rowCount": 23,
          "hts6Count": 7,
          "hts6": [
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271111",
              "firstHtsno": "2711.11.00.00",
              "description": "Natural gas",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "2711.11.00.00",
                  "indent": "2",
                  "description": "Natural gas"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271112",
              "firstHtsno": "2711.12.00",
              "description": "Propane",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "2711.12.00",
                  "indent": "2",
                  "description": "Propane"
                },
                {
                  "htsno": "2711.12.00.10",
                  "indent": "3",
                  "description": "Propane with a minimum purity of 90 liquid volume percent"
                },
                {
                  "htsno": "2711.12.00.20",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271113",
              "firstHtsno": "2711.13.00",
              "description": "Butanes",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "2711.13.00",
                  "indent": "2",
                  "description": "Butanes"
                },
                {
                  "htsno": "2711.13.00.10",
                  "indent": "3",
                  "description": "Butanes with a purity of 90 liquid volume percent or more, but less than 95 liquid volume percent"
                },
                {
                  "htsno": "2711.13.00.20",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271114",
              "firstHtsno": "2711.14.00",
              "description": "Ethylene, propylene, butylene and butadiene",
              "rowCount": 5,
              "sampleRows": [
                {
                  "htsno": "2711.14.00",
                  "indent": "2",
                  "description": "Ethylene, propylene, butylene and butadiene"
                },
                {
                  "htsno": "2711.14.00.10",
                  "indent": "3",
                  "description": "Ethylene"
                },
                {
                  "htsno": "2711.14.00.20",
                  "indent": "3",
                  "description": "Propylene"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271119",
              "firstHtsno": "2711.19.00",
              "description": "Other",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "2711.19.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "2711.19.00.10",
                  "indent": "3",
                  "description": "Ethane"
                },
                {
                  "htsno": "2711.19.00.20",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271121",
              "firstHtsno": "2711.21.00.00",
              "description": "Natural gas",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "2711.21.00.00",
                  "indent": "2",
                  "description": "Natural gas"
                }
              ]
            },
            {
              "family": "lng-crude-refined-oil",
              "heading": "2711",
              "hts6": "271129",
              "firstHtsno": "2711.29.00",
              "description": "Other",
              "rowCount": 6,
              "sampleRows": [
                {
                  "htsno": "2711.29.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "2711.29.00.10",
                  "indent": "4",
                  "description": "Propane with a minimum purity of 90 liquid volume percent"
                },
                {
                  "htsno": "2711.29.00.15",
                  "indent": "4",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2805",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=2805&to=2806&format=JSON&styles=false",
          "rowCount": 17,
          "hts6Count": 5,
          "hts6": [
            {
              "family": "critical-minerals",
              "heading": "2805",
              "hts6": "280511",
              "firstHtsno": "2805.11.00.00",
              "description": "Sodium",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "2805.11.00.00",
                  "indent": "2",
                  "description": "Sodium"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "2805",
              "hts6": "280512",
              "firstHtsno": "2805.12.00.00",
              "description": "Calcium",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "2805.12.00.00",
                  "indent": "2",
                  "description": "Calcium"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "2805",
              "hts6": "280519",
              "firstHtsno": "2805.19",
              "description": "Other:",
              "rowCount": 6,
              "sampleRows": [
                {
                  "htsno": "2805.19",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "2805.19.10.00",
                  "indent": "3",
                  "description": "Strontium"
                },
                {
                  "htsno": "2805.19.20.00",
                  "indent": "3",
                  "description": "Barium"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "2805",
              "hts6": "280530",
              "firstHtsno": "2805.30.00",
              "description": "Rare-earth metals, scandium and yttrium, whether or not intermixed or interalloyed",
              "rowCount": 7,
              "sampleRows": [
                {
                  "htsno": "2805.30.00",
                  "indent": "1",
                  "description": "Rare-earth metals, scandium and yttrium, whether or not intermixed or interalloyed"
                },
                {
                  "htsno": "2805.30.00.05",
                  "indent": "3",
                  "description": "Lanthanum"
                },
                {
                  "htsno": "2805.30.00.10",
                  "indent": "3",
                  "description": "Cerium"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "2805",
              "hts6": "280540",
              "firstHtsno": "2805.40.00.00",
              "description": "Mercury",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "2805.40.00.00",
                  "indent": "1",
                  "description": "Mercury"
                }
              ]
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2846",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=2846&to=2847&format=JSON&styles=false",
          "rowCount": 16,
          "hts6Count": 2,
          "hts6": [
            {
              "family": "critical-minerals",
              "heading": "2846",
              "hts6": "284610",
              "firstHtsno": "2846.10.00",
              "description": "Cerium compounds",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "2846.10.00",
                  "indent": "1",
                  "description": "Cerium compounds"
                },
                {
                  "htsno": "2846.10.00.10",
                  "indent": "2",
                  "description": "Cerium oxides"
                },
                {
                  "htsno": "2846.10.00.50",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "2846",
              "hts6": "284690",
              "firstHtsno": "2846.90",
              "description": "Other:",
              "rowCount": 12,
              "sampleRows": [
                {
                  "htsno": "2846.90",
                  "indent": "1",
                  "description": "Other:"
                },
                {
                  "htsno": "2846.90.20",
                  "indent": "2",
                  "description": "Mixtures of rare-earth oxides or of rare-earth chlorides"
                },
                {
                  "htsno": "2846.90.20.05",
                  "indent": "4",
                  "description": "Containing lanthanum as the predominant metal"
                }
              ]
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8112&to=8113&format=JSON&styles=false",
          "rowCount": 32,
          "hts6Count": 17,
          "hts6": [
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811212",
              "firstHtsno": "8112.12.00.00",
              "description": "Unwrought; powders",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.12.00.00",
                  "indent": "2",
                  "description": "Unwrought; powders"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811213",
              "firstHtsno": "8112.13.00.00",
              "description": "Waste and scrap",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.13.00.00",
                  "indent": "2",
                  "description": "Waste and scrap"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811219",
              "firstHtsno": "8112.19.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.19.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811221",
              "firstHtsno": "8112.21.00.00",
              "description": "Unwrought; powders",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.21.00.00",
                  "indent": "2",
                  "description": "Unwrought; powders"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811222",
              "firstHtsno": "8112.22.00.00",
              "description": "Waste and scrap",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.22.00.00",
                  "indent": "2",
                  "description": "Waste and scrap"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811229",
              "firstHtsno": "8112.29.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.29.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811231",
              "firstHtsno": "8112.31.00.00",
              "description": "Unwrought; waste and scrap; powders",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.31.00.00",
                  "indent": "2",
                  "description": "Unwrought; waste and scrap; powders"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811239",
              "firstHtsno": "8112.39.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.39.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811241",
              "firstHtsno": "8112.41",
              "description": "Unwrought; waste and scrap; powders:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8112.41",
                  "indent": "2",
                  "description": "Unwrought; waste and scrap; powders:"
                },
                {
                  "htsno": "8112.41.10.00",
                  "indent": "3",
                  "description": "Waste and scrap"
                },
                {
                  "htsno": "8112.41.50.00",
                  "indent": "3",
                  "description": "Unwrought; powders"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811249",
              "firstHtsno": "8112.49.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.49.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811251",
              "firstHtsno": "8112.51.00.00",
              "description": "Unwrought; powders",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.51.00.00",
                  "indent": "2",
                  "description": "Unwrought; powders"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811252",
              "firstHtsno": "8112.52.00.00",
              "description": "Waste and scrap",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.52.00.00",
                  "indent": "2",
                  "description": "Waste and scrap"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811259",
              "firstHtsno": "8112.59.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.59.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811261",
              "firstHtsno": "8112.61.00.00",
              "description": "Waste and scrap",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8112.61.00.00",
                  "indent": "2",
                  "description": "Waste and scrap"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811269",
              "firstHtsno": "8112.69",
              "description": "Other:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8112.69",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "8112.69.10.00",
                  "indent": "3",
                  "description": "Unwrought cadmium; powders"
                },
                {
                  "htsno": "8112.69.90.00",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811292",
              "firstHtsno": "8112.92",
              "description": "Unwrought; waste and scrap; powders:",
              "rowCount": 8,
              "sampleRows": [
                {
                  "htsno": "8112.92",
                  "indent": "2",
                  "description": "Unwrought; waste and scrap; powders:"
                },
                {
                  "htsno": "8112.92.07.00",
                  "indent": "3",
                  "description": "Waste and scrap"
                },
                {
                  "htsno": "8112.92.10.00",
                  "indent": "4",
                  "description": "Gallium"
                }
              ]
            },
            {
              "family": "critical-minerals",
              "heading": "8112",
              "hts6": "811299",
              "firstHtsno": "8112.99",
              "description": "Other:",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8112.99",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "8112.99.10.00",
                  "indent": "3",
                  "description": "Germanium"
                },
                {
                  "htsno": "8112.99.20.00",
                  "indent": "3",
                  "description": "Vanadium"
                }
              ]
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3707",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=3707&to=3708&format=JSON&styles=false",
          "rowCount": 12,
          "hts6Count": 2,
          "hts6": [
            {
              "family": "photoresist-chemicals",
              "heading": "3707",
              "hts6": "370710",
              "firstHtsno": "3707.10.00",
              "description": "Sensitizing emulsions",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "3707.10.00",
                  "indent": "1",
                  "description": "Sensitizing emulsions"
                },
                {
                  "htsno": "3707.10.00.05",
                  "indent": "2",
                  "description": "For use in color negative photographic paper"
                },
                {
                  "htsno": "3707.10.00.90",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3707",
              "hts6": "370790",
              "firstHtsno": "3707.90",
              "description": "Other:",
              "rowCount": 8,
              "sampleRows": [
                {
                  "htsno": "3707.90",
                  "indent": "1",
                  "description": "Other:"
                },
                {
                  "htsno": "3707.90.31.00",
                  "indent": "3",
                  "description": "Acid violet 19"
                },
                {
                  "htsno": "3707.90.32",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3824",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=3824&to=3825&format=JSON&styles=false",
          "rowCount": 57,
          "hts6Count": 17,
          "hts6": [
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382410",
              "firstHtsno": "3824.10.00.00",
              "description": "Prepared binders for foundry molds or cores",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.10.00.00",
                  "indent": "1",
                  "description": "Prepared binders for foundry molds or cores"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382430",
              "firstHtsno": "3824.30.00.00",
              "description": "Nonagglomerated metal carbides mixed together or with metallic binders",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.30.00.00",
                  "indent": "1",
                  "description": "Nonagglomerated metal carbides mixed together or with metallic binders"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382440",
              "firstHtsno": "3824.40",
              "description": "Prepared additives for cements, mortars or concretes:",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "3824.40",
                  "indent": "1",
                  "description": "Prepared additives for cements, mortars or concretes:"
                },
                {
                  "htsno": "3824.40.10.00",
                  "indent": "2",
                  "description": "Containing 5 percent or more by weight of one or more aromatic or modified aromatic substances"
                },
                {
                  "htsno": "3824.40.20.00",
                  "indent": "2",
                  "description": "Consisting wholly of inorganic substances"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382450",
              "firstHtsno": "3824.50.00",
              "description": "Nonrefractory mortars and concretes",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "3824.50.00",
                  "indent": "1",
                  "description": "Nonrefractory mortars and concretes"
                },
                {
                  "htsno": "3824.50.00.10",
                  "indent": "2",
                  "description": "Wet"
                },
                {
                  "htsno": "3824.50.00.50",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382460",
              "firstHtsno": "3824.60.00.00",
              "description": "Sorbitol other than that of subheading 2905.44",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.60.00.00",
                  "indent": "1",
                  "description": "Sorbitol other than that of subheading 2905.44"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382481",
              "firstHtsno": "3824.81.00.00",
              "description": "Containing oxirane (ethylene oxide)",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.81.00.00",
                  "indent": "2",
                  "description": "Containing oxirane (ethylene oxide)"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382482",
              "firstHtsno": "3824.82",
              "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls ({PCTs) or polybrominated biphenyls (PBBs):",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "3824.82",
                  "indent": "2",
                  "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls ({PCTs) or polybrominated biphenyls (PBBs):"
                },
                {
                  "htsno": "3824.82.10.00",
                  "indent": "3",
                  "description": "Chlorinated but not otherwise halogenated"
                },
                {
                  "htsno": "3824.82.90.00",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382483",
              "firstHtsno": "3824.83.00.00",
              "description": "Containing tris(2,3-dibromopropyl) phospate",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.83.00.00",
                  "indent": "2",
                  "description": "Containing tris(2,3-dibromopropyl) phospate"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382484",
              "firstHtsno": "3824.84.00.00",
              "description": "Containing aldrin (ISO), camphechlor (ISO) (toxaphene), chlordane (ISO), chlordecone (ISO), DDT (ISO) (clofenatone (INN)), 1,1,1-trichloro-2,2-bis(p-chlorophenyl)ethane), dieldrin (ISO INN), endosulfan (ISO), endrin (ISO), heptachlor (ISO) or mirex (ISO)",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.84.00.00",
                  "indent": "2",
                  "description": "Containing aldrin (ISO), camphechlor (ISO) (toxaphene), chlordane (ISO), chlordecone (ISO), DDT (ISO) (clofenatone (INN)), 1,1,1-trichloro-2,2-bis(p-chlorophenyl)ethane), dieldrin (ISO INN), endosulfan (ISO), endrin (ISO), heptachlor (ISO) or mirex (ISO)"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382485",
              "firstHtsno": "3824.85.00.00",
              "description": "Containing 1,2,3,4,5,6-hexachlorocyclohexane (HCH (ISO)), including lindane (ISO,INN)",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.85.00.00",
                  "indent": "2",
                  "description": "Containing 1,2,3,4,5,6-hexachlorocyclohexane (HCH (ISO)), including lindane (ISO,INN)"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382486",
              "firstHtsno": "3824.86.00.00",
              "description": "Containing pentachlorobenzene (ISO) or hexachlorobenzene (ISO)",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.86.00.00",
                  "indent": "2",
                  "description": "Containing pentachlorobenzene (ISO) or hexachlorobenzene (ISO)"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382487",
              "firstHtsno": "3824.87.00.00",
              "description": "Containing perfluorooctane sulfonic acid, its salts, perfluorooctane sulfonamides, or perfluorooctane sulfonyl fluoride",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.87.00.00",
                  "indent": "2",
                  "description": "Containing perfluorooctane sulfonic acid, its salts, perfluorooctane sulfonamides, or perfluorooctane sulfonyl fluoride"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382488",
              "firstHtsno": "3824.88.00.00",
              "description": "Containing tetra-, penta-, hexa-, hepta-, or octabromodiphenyl ethers",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.88.00.00",
                  "indent": "2",
                  "description": "Containing tetra-, penta-, hexa-, hepta-, or octabromodiphenyl ethers"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382489",
              "firstHtsno": "3824.89.00.00",
              "description": "Containing short-chain chlorinated paraffins",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.89.00.00",
                  "indent": "2",
                  "description": "Containing short-chain chlorinated paraffins"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382491",
              "firstHtsno": "3824.91.00.00",
              "description": "Mixtures and preparations consisting mainly of (5-ethyl-2-methyl-2-oxido3,2-dioxaphosphinan-5-yl)methyl methylphosphonate and bis(5-ethyl-2-methyl-2-oxido-1,3,2-dioxaphosphinan-5-yl)methyl methylphosphonate",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.91.00.00",
                  "indent": "2",
                  "description": "Mixtures and preparations consisting mainly of (5-ethyl-2-methyl-2-oxido3,2-dioxaphosphinan-5-yl)methyl methylphosphonate and bis(5-ethyl-2-methyl-2-oxido-1,3,2-dioxaphosphinan-5-yl)methyl methylphosphonate"
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382492",
              "firstHtsno": "3824.92.00.00",
              "description": "Polyglycol esters of methylphosphonic acid.",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "3824.92.00.00",
                  "indent": "2",
                  "description": "Polyglycol esters of methylphosphonic acid."
                }
              ]
            },
            {
              "family": "photoresist-chemicals",
              "heading": "3824",
              "hts6": "382499",
              "firstHtsno": "3824.99",
              "description": "Other:",
              "rowCount": 33,
              "sampleRows": [
                {
                  "htsno": "3824.99",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "3824.99.11.00",
                  "indent": "4",
                  "description": "In the form of ingots"
                },
                {
                  "htsno": "3824.99.19.00",
                  "indent": "4",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "submarine-cable-equipment",
          "heading": "8517",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8517&to=8518&format=JSON&styles=false",
          "rowCount": 19,
          "hts6Count": 9,
          "hts6": [
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851711",
              "firstHtsno": "8517.11.00.00",
              "description": "Line telephone sets with cordless handsets",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8517.11.00.00",
                  "indent": "2",
                  "description": "Line telephone sets with cordless handsets"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851713",
              "firstHtsno": "8517.13.00.00",
              "description": "Smartphones",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8517.13.00.00",
                  "indent": "2",
                  "description": "Smartphones"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851714",
              "firstHtsno": "8517.14.00",
              "description": "Other telephones for cellular networks or for other wireless networks",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8517.14.00",
                  "indent": "2",
                  "description": "Other telephones for cellular networks or for other wireless networks"
                },
                {
                  "htsno": "8517.14.00.20",
                  "indent": "3",
                  "description": "Radio telephones designed for installation in motor vehicles for the Public Cellular Radiotelecommunication Service"
                },
                {
                  "htsno": "8517.14.00.50",
                  "indent": "3",
                  "description": "Other radio telephones designed for the Public Cellular Radiotelecommunication Service"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851718",
              "firstHtsno": "8517.18.00",
              "description": "Other",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8517.18.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "8517.18.00.10",
                  "indent": "3",
                  "description": "Videophones"
                },
                {
                  "htsno": "8517.18.00.20",
                  "indent": "3",
                  "description": "Multiline telephones (including key, call director and consoles)"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851761",
              "firstHtsno": "8517.61.00.00",
              "description": "Base stations",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8517.61.00.00",
                  "indent": "2",
                  "description": "Base stations"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851762",
              "firstHtsno": "8517.62.00",
              "description": "Machines for the reception, conversion and transmission or regeneration of voice, images or other data, including switching and routing apparatus",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8517.62.00",
                  "indent": "2",
                  "description": "Machines for the reception, conversion and transmission or regeneration of voice, images or other data, including switching and routing apparatus"
                },
                {
                  "htsno": "8517.62.00.10",
                  "indent": "3",
                  "description": "Modems, of a kind used with data processing machines of heading 8471"
                },
                {
                  "htsno": "8517.62.00.20",
                  "indent": "3",
                  "description": "Switching and routing apparatus"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851769",
              "firstHtsno": "8517.69.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8517.69.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851771",
              "firstHtsno": "8517.71.00.00",
              "description": "Aerials and aerial reflectors of all kinds; parts suitable for use therewith",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8517.71.00.00",
                  "indent": "2",
                  "description": "Aerials and aerial reflectors of all kinds; parts suitable for use therewith"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8517",
              "hts6": "851779",
              "firstHtsno": "8517.79.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8517.79.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "submarine-cable-equipment",
          "heading": "8544",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8544&to=8545&format=JSON&styles=false",
          "rowCount": 26,
          "hts6Count": 8,
          "hts6": [
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854411",
              "firstHtsno": "8544.11.00",
              "description": "Of copper",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8544.11.00",
                  "indent": "2",
                  "description": "Of copper"
                },
                {
                  "htsno": "8544.11.00.20",
                  "indent": "3",
                  "description": "33 AWG (0.18 mm in diameter) and finer"
                },
                {
                  "htsno": "8544.11.00.30",
                  "indent": "3",
                  "description": "22 AWG (0.643 mm in diameter) and finer but larger than 33 AWG (0.18 mm in diameter)"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854419",
              "firstHtsno": "8544.19.00.00",
              "description": "Other",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8544.19.00.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854420",
              "firstHtsno": "8544.20.00.00",
              "description": "Coaxial cable and other coaxial electric conductors",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8544.20.00.00",
                  "indent": "1",
                  "description": "Coaxial cable and other coaxial electric conductors"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854430",
              "firstHtsno": "8544.30.00.00",
              "description": "Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8544.30.00.00",
                  "indent": "1",
                  "description": "Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854442",
              "firstHtsno": "8544.42",
              "description": "Fitted with connectors:",
              "rowCount": 6,
              "sampleRows": [
                {
                  "htsno": "8544.42",
                  "indent": "2",
                  "description": "Fitted with connectors:"
                },
                {
                  "htsno": "8544.42.10.00",
                  "indent": "3",
                  "description": "Fitted with modular telephone connectors"
                },
                {
                  "htsno": "8544.42.20.00",
                  "indent": "4",
                  "description": "Of a kind used for telecommunications"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854449",
              "firstHtsno": "8544.49",
              "description": "Other:",
              "rowCount": 7,
              "sampleRows": [
                {
                  "htsno": "8544.49",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "8544.49.10.00",
                  "indent": "4",
                  "description": "Of a kind used for telecommunications"
                },
                {
                  "htsno": "8544.49.20.00",
                  "indent": "4",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854460",
              "firstHtsno": "8544.60",
              "description": "Other electric conductors, for a voltage exceeding 1,000 V:",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8544.60",
                  "indent": "1",
                  "description": "Other electric conductors, for a voltage exceeding 1,000 V:"
                },
                {
                  "htsno": "8544.60.20.00",
                  "indent": "2",
                  "description": "Fitted with connectors"
                },
                {
                  "htsno": "8544.60.40.00",
                  "indent": "3",
                  "description": "Of copper"
                }
              ]
            },
            {
              "family": "submarine-cable-equipment",
              "heading": "8544",
              "hts6": "854470",
              "firstHtsno": "8544.70.00.00",
              "description": "Optical fiber cables",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8544.70.00.00",
                  "indent": "1",
                  "description": "Optical fiber cables"
                }
              ]
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "heading": "8502",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8502&to=8503&format=JSON&styles=false",
          "rowCount": 16,
          "hts6Count": 7,
          "hts6": [
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850211",
              "firstHtsno": "8502.11.00.00",
              "description": "Of an output not exceeding 75 kVA",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8502.11.00.00",
                  "indent": "2",
                  "description": "Of an output not exceeding 75 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850212",
              "firstHtsno": "8502.12.00.00",
              "description": "Of an output exceeding 75 kVA but not exceeding 375 kVA",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8502.12.00.00",
                  "indent": "2",
                  "description": "Of an output exceeding 75 kVA but not exceeding 375 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850213",
              "firstHtsno": "8502.13.00",
              "description": "Of an output exceeding 375 kVA",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8502.13.00",
                  "indent": "2",
                  "description": "Of an output exceeding 375 kVA"
                },
                {
                  "htsno": "8502.13.00.20",
                  "indent": "3",
                  "description": "Exceeding 375 kVA but not exceeding 1,000 kVA"
                },
                {
                  "htsno": "8502.13.00.40",
                  "indent": "3",
                  "description": "Exceeding 1,000 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850220",
              "firstHtsno": "8502.20.00",
              "description": "Generating sets with spark-ignition internal combustion piston engines",
              "rowCount": 5,
              "sampleRows": [
                {
                  "htsno": "8502.20.00",
                  "indent": "1",
                  "description": "Generating sets with spark-ignition internal combustion piston engines"
                },
                {
                  "htsno": "8502.20.00.30",
                  "indent": "2",
                  "description": "Of an output not exceeding 1.875 kVA"
                },
                {
                  "htsno": "8502.20.00.60",
                  "indent": "2",
                  "description": "Of an output exceeding 1.875 kVA but not exceeding 6.25 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850231",
              "firstHtsno": "8502.31.00.00",
              "description": "Wind-powered",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8502.31.00.00",
                  "indent": "2",
                  "description": "Wind-powered"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850239",
              "firstHtsno": "8502.39.00",
              "description": "Other",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8502.39.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "8502.39.00.40",
                  "indent": "3",
                  "description": "Powered by steam turbine"
                },
                {
                  "htsno": "8502.39.00.80",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8502",
              "hts6": "850240",
              "firstHtsno": "8502.40.00.00",
              "description": "Electric rotary converters",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8502.40.00.00",
                  "indent": "1",
                  "description": "Electric rotary converters"
                }
              ]
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "heading": "8504",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8504&to=8505&format=JSON&styles=false",
          "rowCount": 63,
          "hts6Count": 11,
          "hts6": [
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850410",
              "firstHtsno": "8504.10.00.00",
              "description": "Ballasts for discharge lamps or tubes",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8504.10.00.00",
                  "indent": "1",
                  "description": "Ballasts for discharge lamps or tubes"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850421",
              "firstHtsno": "8504.21.00",
              "description": "Having a power handling capacity not exceeding 650 kVA",
              "rowCount": 5,
              "sampleRows": [
                {
                  "htsno": "8504.21.00",
                  "indent": "2",
                  "description": "Having a power handling capacity not exceeding 650 kVA"
                },
                {
                  "htsno": "8504.21.00.20",
                  "indent": "3",
                  "description": "Having a power handling capacity not exceeding 50 kVA"
                },
                {
                  "htsno": "8504.21.00.40",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 50 kVA but not exceeding 100 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850422",
              "firstHtsno": "8504.22.00",
              "description": "Having a power handling capacity exceeding 650 kVA but not exceeding 10,000 kVA",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8504.22.00",
                  "indent": "2",
                  "description": "Having a power handling capacity exceeding 650 kVA but not exceeding 10,000 kVA"
                },
                {
                  "htsno": "8504.22.00.40",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 650 kVA but not exceeding 2,500 kVA"
                },
                {
                  "htsno": "8504.22.00.80",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 2,500 kVA but not exceeding 10,000 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850423",
              "firstHtsno": "8504.23.00",
              "description": "Having a power handling capacity exceeding 10,000 kVA",
              "rowCount": 4,
              "sampleRows": [
                {
                  "htsno": "8504.23.00",
                  "indent": "2",
                  "description": "Having a power handling capacity exceeding 10,000 kVA"
                },
                {
                  "htsno": "8504.23.00.41",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 10,000 kVA but not exceeding 59,999 kVA"
                },
                {
                  "htsno": "8504.23.00.45",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 59,999 kVA but not exceeding 100,000 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850431",
              "firstHtsno": "8504.31",
              "description": "Having a power handling capacity not exceeding 1 kVA:",
              "rowCount": 6,
              "sampleRows": [
                {
                  "htsno": "8504.31",
                  "indent": "2",
                  "description": "Having a power handling capacity not exceeding 1 kVA:"
                },
                {
                  "htsno": "8504.31.20.00",
                  "indent": "3",
                  "description": "Unrated"
                },
                {
                  "htsno": "8504.31.40",
                  "indent": "4",
                  "description": "Having a power handling capacity less than 1 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850432",
              "firstHtsno": "8504.32.00.00",
              "description": "Having a power handling capacity exceeding 1 kVA but not exceeding 16 kVA",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8504.32.00.00",
                  "indent": "2",
                  "description": "Having a power handling capacity exceeding 1 kVA but not exceeding 16 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850433",
              "firstHtsno": "8504.33.00",
              "description": "Having a power handling capacity exceeding 16 kVA but not exceeding 500 kVA",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8504.33.00",
                  "indent": "2",
                  "description": "Having a power handling capacity exceeding 16 kVA but not exceeding 500 kVA"
                },
                {
                  "htsno": "8504.33.00.20",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 16 kVA but not exceeding 50 kVA"
                },
                {
                  "htsno": "8504.33.00.40",
                  "indent": "3",
                  "description": "Having a power handling capacity exceeding 50 kVA but not exceeding 500 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850434",
              "firstHtsno": "8504.34.00.00",
              "description": "Having a power handling capacity exceeding 500 kVA",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8504.34.00.00",
                  "indent": "2",
                  "description": "Having a power handling capacity exceeding 500 kVA"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850440",
              "firstHtsno": "8504.40",
              "description": "Static converters:",
              "rowCount": 21,
              "sampleRows": [
                {
                  "htsno": "8504.40",
                  "indent": "1",
                  "description": "Static converters:"
                },
                {
                  "htsno": "8504.40.40.00",
                  "indent": "2",
                  "description": "Speed drive controllers for electric motors"
                },
                {
                  "htsno": "8504.40.60",
                  "indent": "3",
                  "description": "Suitable for physical incorporation into automatic data processing machines or units thereof of heading 8471"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850450",
              "firstHtsno": "8504.50",
              "description": "Other inductors:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8504.50",
                  "indent": "1",
                  "description": "Other inductors:"
                },
                {
                  "htsno": "8504.50.40.00",
                  "indent": "2",
                  "description": "For power supplies for automatic data processing machines or units thereof of heading 8471; power supplies for goods of subheading 8443.31 or 8443.32; power supplies for monitors of subheading 8528.42 or 8528.52 or projectors of subheading 8528.62; for telecommunication apparatus"
                },
                {
                  "htsno": "8504.50.80.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8504",
              "hts6": "850490",
              "firstHtsno": "8504.90",
              "description": "Parts:",
              "rowCount": 14,
              "sampleRows": [
                {
                  "htsno": "8504.90",
                  "indent": "1",
                  "description": "Parts:"
                },
                {
                  "htsno": "8504.90.20.00",
                  "indent": "3",
                  "description": "Printed circuit assemblies"
                },
                {
                  "htsno": "8504.90.41.00",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "heading": "8535",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8535&to=8536&format=JSON&styles=false",
          "rowCount": 18,
          "hts6Count": 6,
          "hts6": [
            {
              "family": "data-center-power-equipment",
              "heading": "8535",
              "hts6": "853510",
              "firstHtsno": "8535.10.00",
              "description": "Fuses",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8535.10.00",
                  "indent": "1",
                  "description": "Fuses"
                },
                {
                  "htsno": "8535.10.00.20",
                  "indent": "2",
                  "description": "In circuits of 2,300 V or more"
                },
                {
                  "htsno": "8535.10.00.40",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8535",
              "hts6": "853521",
              "firstHtsno": "8535.21.00.00",
              "description": "For a voltage of less than 72.5 kV",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8535.21.00.00",
                  "indent": "2",
                  "description": "For a voltage of less than 72.5 kV"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8535",
              "hts6": "853529",
              "firstHtsno": "8535.29.00",
              "description": "Other",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8535.29.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "8535.29.00.20",
                  "indent": "3",
                  "description": "In circuits of 345 kV or more"
                },
                {
                  "htsno": "8535.29.00.40",
                  "indent": "3",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8535",
              "hts6": "853530",
              "firstHtsno": "8535.30.00",
              "description": "Isolating switches and make-and-break switches",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8535.30.00",
                  "indent": "1",
                  "description": "Isolating switches and make-and-break switches"
                },
                {
                  "htsno": "8535.30.00.40",
                  "indent": "2",
                  "description": "Knife"
                },
                {
                  "htsno": "8535.30.00.80",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8535",
              "hts6": "853540",
              "firstHtsno": "8535.40.00.00",
              "description": "Lightning arresters, voltage limiters and surge suppressors",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8535.40.00.00",
                  "indent": "1",
                  "description": "Lightning arresters, voltage limiters and surge suppressors"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8535",
              "hts6": "853590",
              "firstHtsno": "8535.90",
              "description": "Other:",
              "rowCount": 6,
              "sampleRows": [
                {
                  "htsno": "8535.90",
                  "indent": "1",
                  "description": "Other:"
                },
                {
                  "htsno": "8535.90.40.00",
                  "indent": "2",
                  "description": "Motor starters and motor overload protectors"
                },
                {
                  "htsno": "8535.90.80",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "heading": "8536",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8536&to=8537&format=JSON&styles=false",
          "rowCount": 55,
          "hts6Count": 10,
          "hts6": [
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853610",
              "firstHtsno": "8536.10.00",
              "description": "Fuses",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8536.10.00",
                  "indent": "1",
                  "description": "Fuses"
                },
                {
                  "htsno": "8536.10.00.20",
                  "indent": "2",
                  "description": "Glass cartridge"
                },
                {
                  "htsno": "8536.10.00.40",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853620",
              "firstHtsno": "8536.20.00",
              "description": "Automatic circuit breakers",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8536.20.00",
                  "indent": "1",
                  "description": "Automatic circuit breakers"
                },
                {
                  "htsno": "8536.20.00.20",
                  "indent": "2",
                  "description": "Molded case"
                },
                {
                  "htsno": "8536.20.00.40",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853630",
              "firstHtsno": "8536.30",
              "description": "Other apparatus for protecting electrical circuits:",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8536.30",
                  "indent": "1",
                  "description": "Other apparatus for protecting electrical circuits:"
                },
                {
                  "htsno": "8536.30.40.00",
                  "indent": "2",
                  "description": "Motor overload protectors"
                },
                {
                  "htsno": "8536.30.80.00",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853641",
              "firstHtsno": "8536.41.00",
              "description": "For a voltage not exceeding 60 V",
              "rowCount": 7,
              "sampleRows": [
                {
                  "htsno": "8536.41.00",
                  "indent": "2",
                  "description": "For a voltage not exceeding 60 V"
                },
                {
                  "htsno": "8536.41.00.05",
                  "indent": "3",
                  "description": "Automotive signaling flashers"
                },
                {
                  "htsno": "8536.41.00.20",
                  "indent": "5",
                  "description": "Electromechanical"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853649",
              "firstHtsno": "8536.49.00",
              "description": "Other",
              "rowCount": 6,
              "sampleRows": [
                {
                  "htsno": "8536.49.00",
                  "indent": "2",
                  "description": "Other"
                },
                {
                  "htsno": "8536.49.00.50",
                  "indent": "4",
                  "description": "Electromechanical"
                },
                {
                  "htsno": "8536.49.00.55",
                  "indent": "4",
                  "description": "Other"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853650",
              "firstHtsno": "8536.50",
              "description": "Other switches:",
              "rowCount": 15,
              "sampleRows": [
                {
                  "htsno": "8536.50",
                  "indent": "1",
                  "description": "Other switches:"
                },
                {
                  "htsno": "8536.50.40.00",
                  "indent": "2",
                  "description": "Motor starters"
                },
                {
                  "htsno": "8536.50.70.00",
                  "indent": "3",
                  "description": "Electronic AC switches consisting of optically coupled input and output circuits (insulated thyristor AC switches); electronic switches, including temperature protected switches, consisting of a transistor and a logic chip (chip-on-chip technology); electromechanical snap-action switches for a current not exceeding 11 amps"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853661",
              "firstHtsno": "8536.61.00.00",
              "description": "Lamp-holders",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8536.61.00.00",
                  "indent": "2",
                  "description": "Lamp-holders"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853669",
              "firstHtsno": "8536.69",
              "description": "Other:",
              "rowCount": 8,
              "sampleRows": [
                {
                  "htsno": "8536.69",
                  "indent": "2",
                  "description": "Other:"
                },
                {
                  "htsno": "8536.69.40",
                  "indent": "3",
                  "description": "Coaxial connectors; cylindrical multicontact connectors; rack and panel connectors; printed circuit connectors; ribbon or flat cable connectors"
                },
                {
                  "htsno": "8536.69.40.10",
                  "indent": "4",
                  "description": "Coaxial connectors"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853670",
              "firstHtsno": "8536.70.00.00",
              "description": "Connectors for optical fibers, optical fiber bundles or cables",
              "rowCount": 1,
              "sampleRows": [
                {
                  "htsno": "8536.70.00.00",
                  "indent": "1",
                  "description": "Connectors for optical fibers, optical fiber bundles or cables"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8536",
              "hts6": "853690",
              "firstHtsno": "8536.90",
              "description": "Other apparatus:",
              "rowCount": 7,
              "sampleRows": [
                {
                  "htsno": "8536.90",
                  "indent": "1",
                  "description": "Other apparatus:"
                },
                {
                  "htsno": "8536.90.40.00",
                  "indent": "2",
                  "description": "Terminals, electrical splices and electrical couplings; wafer probers"
                },
                {
                  "htsno": "8536.90.60.00",
                  "indent": "2",
                  "description": "Battery clamps of a kind used in motor vehicles of heading 8702, 8703, 8704 or 8711"
                }
              ]
            }
          ]
        },
        {
          "family": "data-center-power-equipment",
          "heading": "8537",
          "apiSource": "https://hts.usitc.gov/reststop/exportList?from=8537&to=8538&format=JSON&styles=false",
          "rowCount": 14,
          "hts6Count": 2,
          "hts6": [
            {
              "family": "data-center-power-equipment",
              "heading": "8537",
              "hts6": "853710",
              "firstHtsno": "8537.10",
              "description": "For a voltage not exceeding 1,000 V:",
              "rowCount": 10,
              "sampleRows": [
                {
                  "htsno": "8537.10",
                  "indent": "1",
                  "description": "For a voltage not exceeding 1,000 V:"
                },
                {
                  "htsno": "8537.10.30.00",
                  "indent": "2",
                  "description": "Assembled with outer housing or supports, for the goods of headings 8421, 8422, 8450 or 8516"
                },
                {
                  "htsno": "8537.10.60.00",
                  "indent": "2",
                  "description": "Motor control centers"
                }
              ]
            },
            {
              "family": "data-center-power-equipment",
              "heading": "8537",
              "hts6": "853720",
              "firstHtsno": "8537.20.00",
              "description": "For a voltage exceeding 1,000 V",
              "rowCount": 3,
              "sampleRows": [
                {
                  "htsno": "8537.20.00",
                  "indent": "1",
                  "description": "For a voltage exceeding 1,000 V"
                },
                {
                  "htsno": "8537.20.00.20",
                  "indent": "2",
                  "description": "Switchgear assemblies and switchboards"
                },
                {
                  "htsno": "8537.20.00.40",
                  "indent": "2",
                  "description": "Other"
                }
              ]
            }
          ]
        }
      ],
      "byFamily": [
        {
          "family": "semiconductor-equipment",
          "headingCount": 3,
          "hts6Count": 20,
          "rowCount": 52
        },
        {
          "family": "advanced-compute-memory",
          "headingCount": 3,
          "hts6Count": 18,
          "rowCount": 92
        },
        {
          "family": "lng-crude-refined-oil",
          "headingCount": 3,
          "hts6Count": 13,
          "rowCount": 119
        },
        {
          "family": "critical-minerals",
          "headingCount": 3,
          "hts6Count": 24,
          "rowCount": 65
        },
        {
          "family": "photoresist-chemicals",
          "headingCount": 2,
          "hts6Count": 19,
          "rowCount": 69
        },
        {
          "family": "submarine-cable-equipment",
          "headingCount": 2,
          "hts6Count": 17,
          "rowCount": 45
        },
        {
          "family": "data-center-power-equipment",
          "headingCount": 5,
          "hts6Count": 36,
          "rowCount": 166
        }
      ],
      "tableRows": [
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848610",
          "firstHtsno": "8486.10.00.00",
          "description": "Machines and apparatus for the manufacture of boules or wafers",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8486.10.00.00",
              "indent": "1",
              "description": "Machines and apparatus for the manufacture of boules or wafers"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848620",
          "firstHtsno": "8486.20.00.00",
          "description": "Machines and apparatus for the manufacture of semiconductor devices or of electronic integrated circuits",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8486.20.00.00",
              "indent": "1",
              "description": "Machines and apparatus for the manufacture of semiconductor devices or of electronic integrated circuits"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848630",
          "firstHtsno": "8486.30.00.00",
          "description": "Machines and apparatus for the manufacture of flat panel displays",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8486.30.00.00",
              "indent": "1",
              "description": "Machines and apparatus for the manufacture of flat panel displays"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848640",
          "firstHtsno": "8486.40.00",
          "description": "Machines and apparatus specified in note 11(C) to this chapter",
          "rowCount": 4,
          "sampleRows": [
            {
              "htsno": "8486.40.00",
              "indent": "1",
              "description": "Machines and apparatus specified in note 11(C) to this chapter"
            },
            {
              "htsno": "8486.40.00.10",
              "indent": "2",
              "description": "For the manufacture or repair of masks and reticles"
            },
            {
              "htsno": "8486.40.00.20",
              "indent": "2",
              "description": "For assembling semiconductor devices or electronic integrated circuits"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848690",
          "firstHtsno": "8486.90.00.00",
          "description": "Parts and accessories",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8486.90.00.00",
              "indent": "1",
              "description": "Parts and accessories"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903010",
          "firstHtsno": "9030.10.00.00",
          "description": "Instruments and apparatus for measuring or detecting ionizing radiations",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.10.00.00",
              "indent": "1",
              "description": "Instruments and apparatus for measuring or detecting ionizing radiations"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903020",
          "firstHtsno": "9030.20",
          "description": "Oscilloscopes and oscillographs:",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "9030.20",
              "indent": "1",
              "description": "Oscilloscopes and oscillographs:"
            },
            {
              "htsno": "9030.20.05.00",
              "indent": "2",
              "description": "Specially designed for telecommunications"
            },
            {
              "htsno": "9030.20.10.00",
              "indent": "2",
              "description": "Other oscilloscopes and oscillographs"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903031",
          "firstHtsno": "9030.31.00.00",
          "description": "Multimeters, without a recording device",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.31.00.00",
              "indent": "2",
              "description": "Multimeters, without a recording device"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903032",
          "firstHtsno": "9030.32.00.00",
          "description": "Multimeters, with a recording device",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.32.00.00",
              "indent": "2",
              "description": "Multimeters, with a recording device"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903033",
          "firstHtsno": "9030.33",
          "description": "Other, without a recording device:",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "9030.33",
              "indent": "2",
              "description": "Other, without a recording device:"
            },
            {
              "htsno": "9030.33.34.00",
              "indent": "3",
              "description": "Resistance measuring instruments"
            },
            {
              "htsno": "9030.33.38.00",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903039",
          "firstHtsno": "9030.39.01.00",
          "description": "Other, with a recording device",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.39.01.00",
              "indent": "2",
              "description": "Other, with a recording device"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903040",
          "firstHtsno": "9030.40.00.00",
          "description": "Other instruments and apparatus, specially designed for telecommunications (for example, cross-talk meters, gain measuring instruments, distortion factor meters, psophometers)",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.40.00.00",
              "indent": "1",
              "description": "Other instruments and apparatus, specially designed for telecommunications (for example, cross-talk meters, gain measuring instruments, distortion factor meters, psophometers)"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903082",
          "firstHtsno": "9030.82.00.00",
          "description": "For measuring or checking semiconductor wafers or devices (including integrated circuits)",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.82.00.00",
              "indent": "2",
              "description": "For measuring or checking semiconductor wafers or devices (including integrated circuits)"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903084",
          "firstHtsno": "9030.84.00.00",
          "description": "Other, with a recording device",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.84.00.00",
              "indent": "2",
              "description": "Other, with a recording device"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903089",
          "firstHtsno": "9030.89.01.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9030.89.01.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903090",
          "firstHtsno": "9030.90",
          "description": "Parts and accessories:",
          "rowCount": 15,
          "sampleRows": [
            {
              "htsno": "9030.90",
              "indent": "1",
              "description": "Parts and accessories:"
            },
            {
              "htsno": "9030.90.25.00",
              "indent": "3",
              "description": "Printed circuit assemblies"
            },
            {
              "htsno": "9030.90.46.00",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901010",
          "firstHtsno": "9010.10.00.00",
          "description": "Apparatus and equipment for automatically developing photographic (including cinematographic) film or paper in rolls or for automatically exposing developed film to rolls of photographic paper",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9010.10.00.00",
              "indent": "1",
              "description": "Apparatus and equipment for automatically developing photographic (including cinematographic) film or paper in rolls or for automatically exposing developed film to rolls of photographic paper"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901050",
          "firstHtsno": "9010.50",
          "description": "Other apparatus and equipment for photographic (including cinematographic) laboratories; negatoscopes:",
          "rowCount": 7,
          "sampleRows": [
            {
              "htsno": "9010.50",
              "indent": "1",
              "description": "Other apparatus and equipment for photographic (including cinematographic) laboratories; negatoscopes:"
            },
            {
              "htsno": "9010.50.10.00",
              "indent": "2",
              "description": "Contact printers"
            },
            {
              "htsno": "9010.50.20.00",
              "indent": "2",
              "description": "Developing tanks"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901060",
          "firstHtsno": "9010.60.00.00",
          "description": "Projection screens",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "9010.60.00.00",
              "indent": "1",
              "description": "Projection screens"
            }
          ]
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901090",
          "firstHtsno": "9010.90",
          "description": "Parts and accessories:",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "9010.90",
              "indent": "1",
              "description": "Parts and accessories:"
            },
            {
              "htsno": "9010.90.85.00",
              "indent": "2",
              "description": "Parts and accessories of articles of subheadings 9010.50 and 9010.60"
            },
            {
              "htsno": "9010.90.95.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847130",
          "firstHtsno": "8471.30.01.00",
          "description": "Portable automatic data processing machines, weighing not more than 10 kg, consisting of at least a central processing unit, a keyboard and a display",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8471.30.01.00",
              "indent": "1",
              "description": "Portable automatic data processing machines, weighing not more than 10 kg, consisting of at least a central processing unit, a keyboard and a display"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847141",
          "firstHtsno": "8471.41.01",
          "description": "Comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "8471.41.01",
              "indent": "2",
              "description": "Comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined"
            },
            {
              "htsno": "8471.41.01.10",
              "indent": "3",
              "description": "With cathode-ray tube (CRT)"
            },
            {
              "htsno": "8471.41.01.50",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847149",
          "firstHtsno": "8471.49.00.00",
          "description": "Other, entered in the form of systems",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8471.49.00.00",
              "indent": "2",
              "description": "Other, entered in the form of systems"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847150",
          "firstHtsno": "8471.50.01",
          "description": "Processing units other than those of subheading 8471.41 or 8471.49, whether or not containing in the same housing one or two of the following types of unit: storage units, input units, output units",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "8471.50.01",
              "indent": "1",
              "description": "Processing units other than those of subheading 8471.41 or 8471.49, whether or not containing in the same housing one or two of the following types of unit: storage units, input units, output units"
            },
            {
              "htsno": "8471.50.01.10",
              "indent": "2",
              "description": "With cathode-ray tube (CRT)"
            },
            {
              "htsno": "8471.50.01.50",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847160",
          "firstHtsno": "8471.60",
          "description": "Input or output units, whether or not containing storage units in the same housing:",
          "rowCount": 10,
          "sampleRows": [
            {
              "htsno": "8471.60",
              "indent": "1",
              "description": "Input or output units, whether or not containing storage units in the same housing:"
            },
            {
              "htsno": "8471.60.10",
              "indent": "2",
              "description": "Combined input/output units"
            },
            {
              "htsno": "8471.60.10.10",
              "indent": "3",
              "description": "With cathode-ray tube (CRT)"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847170",
          "firstHtsno": "8471.70",
          "description": "Storage units:",
          "rowCount": 14,
          "sampleRows": [
            {
              "htsno": "8471.70",
              "indent": "1",
              "description": "Storage units:"
            },
            {
              "htsno": "8471.70.10.00",
              "indent": "4",
              "description": "Without read-write unit assembled therein; read-write units entered separately"
            },
            {
              "htsno": "8471.70.20.00",
              "indent": "4",
              "description": "Units for physical incorporation into automatic data processing machines or units thereof"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847180",
          "firstHtsno": "8471.80",
          "description": "Other units of automatic data processing machines:",
          "rowCount": 4,
          "sampleRows": [
            {
              "htsno": "8471.80",
              "indent": "1",
              "description": "Other units of automatic data processing machines:"
            },
            {
              "htsno": "8471.80.10.00",
              "indent": "2",
              "description": "Control or adapter units"
            },
            {
              "htsno": "8471.80.40.00",
              "indent": "3",
              "description": "Units suitable for physical incorporation into automatic data processing machines"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8471",
          "hts6": "847190",
          "firstHtsno": "8471.90.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8471.90.00.00",
              "indent": "1",
              "description": "Other"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8473",
          "hts6": "847321",
          "firstHtsno": "8473.21.00.00",
          "description": "Of the electronic calculating machines of subheading 8470.10, 8470.21 or 8470.29",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8473.21.00.00",
              "indent": "2",
              "description": "Of the electronic calculating machines of subheading 8470.10, 8470.21 or 8470.29"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8473",
          "hts6": "847329",
          "firstHtsno": "8473.29.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8473.29.00.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8473",
          "hts6": "847330",
          "firstHtsno": "8473.30",
          "description": "Parts and accessories of the machines of heading 8471:",
          "rowCount": 7,
          "sampleRows": [
            {
              "htsno": "8473.30",
              "indent": "1",
              "description": "Parts and accessories of the machines of heading 8471:"
            },
            {
              "htsno": "8473.30.11",
              "indent": "3",
              "description": "Printed circuit assemblies"
            },
            {
              "htsno": "8473.30.11.40",
              "indent": "4",
              "description": "Memory modules suitable for use solely or principally with machines of heading 8471"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8473",
          "hts6": "847340",
          "firstHtsno": "8473.40",
          "description": "Parts and accessories of the machines of heading 8472:",
          "rowCount": 5,
          "sampleRows": [
            {
              "htsno": "8473.40",
              "indent": "1",
              "description": "Parts and accessories of the machines of heading 8472:"
            },
            {
              "htsno": "8473.40.10.00",
              "indent": "2",
              "description": "Printed circuit assemblies for automatic teller machines of subheading 8472.90.10"
            },
            {
              "htsno": "8473.40.21.00",
              "indent": "2",
              "description": "Printed circuit assemblies of word processing machines of 8472.90.50"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8473",
          "hts6": "847350",
          "firstHtsno": "8473.50",
          "description": "Parts and accessories equally suitable for use with machines of two or more of the headings 8470 to 8472:",
          "rowCount": 4,
          "sampleRows": [
            {
              "htsno": "8473.50",
              "indent": "1",
              "description": "Parts and accessories equally suitable for use with machines of two or more of the headings 8470 to 8472:"
            },
            {
              "htsno": "8473.50.30.00",
              "indent": "2",
              "description": "Printed circuit assemblies"
            },
            {
              "htsno": "8473.50.60.00",
              "indent": "2",
              "description": "Parts and accessories, including face plates and lock latches, of printed circuit assemblies"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8542",
          "hts6": "854231",
          "firstHtsno": "8542.31.00",
          "description": "Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits",
          "rowCount": 14,
          "sampleRows": [
            {
              "htsno": "8542.31.00",
              "indent": "2",
              "description": "Processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits"
            },
            {
              "htsno": "8542.31.00.15",
              "indent": "4",
              "description": "8-bit"
            },
            {
              "htsno": "8542.31.00.20",
              "indent": "4",
              "description": "16-bit"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8542",
          "hts6": "854232",
          "firstHtsno": "8542.32.00",
          "description": "Memories",
          "rowCount": 10,
          "sampleRows": [
            {
              "htsno": "8542.32.00",
              "indent": "2",
              "description": "Memories"
            },
            {
              "htsno": "8542.32.00.02",
              "indent": "4",
              "description": "Not over 128 megabits"
            },
            {
              "htsno": "8542.32.00.24",
              "indent": "4",
              "description": "Over 128 megabits but not over 256 megabits"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8542",
          "hts6": "854233",
          "firstHtsno": "8542.33.00.01",
          "description": "Amplifiers",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8542.33.00.01",
              "indent": "2",
              "description": "Amplifiers"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8542",
          "hts6": "854239",
          "firstHtsno": "8542.39.00",
          "description": "Other",
          "rowCount": 8,
          "sampleRows": [
            {
              "htsno": "8542.39.00",
              "indent": "2",
              "description": "Other"
            },
            {
              "htsno": "8542.39.00.10",
              "indent": "3",
              "description": "RF transceivers"
            },
            {
              "htsno": "8542.39.00.20",
              "indent": "3",
              "description": "Active filters"
            }
          ]
        },
        {
          "family": "advanced-compute-memory",
          "heading": "8542",
          "hts6": "854290",
          "firstHtsno": "8542.90.00.00",
          "description": "Parts",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8542.90.00.00",
              "indent": "1",
              "description": "Parts"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2709",
          "hts6": "270900",
          "firstHtsno": "2709.00",
          "description": "Petroleum oils and oils obtained from bituminous minerals, crude:",
          "rowCount": 5,
          "sampleRows": [
            {
              "htsno": "2709.00",
              "indent": "0",
              "description": "Petroleum oils and oils obtained from bituminous minerals, crude:"
            },
            {
              "htsno": "2709.00.10.00",
              "indent": "1",
              "description": "Testing under 25 degrees A.P.I."
            },
            {
              "htsno": "2709.00.20",
              "indent": "1",
              "description": "Testing 25 degrees A.P.I. or more"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271012",
          "firstHtsno": "2710.12",
          "description": "Light oils and preparations:",
          "rowCount": 16,
          "sampleRows": [
            {
              "htsno": "2710.12",
              "indent": "2",
              "description": "Light oils and preparations:"
            },
            {
              "htsno": "2710.12.15",
              "indent": "3",
              "description": "Motor fuel"
            },
            {
              "htsno": "2710.12.15.10",
              "indent": "5",
              "description": "Leaded"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271019",
          "firstHtsno": "2710.19",
          "description": "Other:",
          "rowCount": 41,
          "sampleRows": [
            {
              "htsno": "2710.19",
              "indent": "2",
              "description": "Other:"
            },
            {
              "htsno": "2710.19.06",
              "indent": "4",
              "description": "Testing under 25 degrees A.P.I."
            },
            {
              "htsno": "2710.19.06.05",
              "indent": "6",
              "description": "Containing not more than 500 ppm of sulfur"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271020",
          "firstHtsno": "2710.20",
          "description": "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included containing by weight 70 percent or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, containing biodiesel, other than waste oils:",
          "rowCount": 20,
          "sampleRows": [
            {
              "htsno": "2710.20",
              "indent": "1",
              "description": "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included containing by weight 70 percent or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, containing biodiesel, other than waste oils:"
            },
            {
              "htsno": "2710.20.05",
              "indent": "3",
              "description": "Testing under 25 degrees A.P.I."
            },
            {
              "htsno": "2710.20.05.10",
              "indent": "4",
              "description": "Having a Saybolt Universal viscosity at 37.8˚C of 45 seconds or more but not more than 125 seconds (No. 4-type fuel oils)"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271091",
          "firstHtsno": "2710.91.00",
          "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs)",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "2710.91.00",
              "indent": "2",
              "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs)"
            },
            {
              "htsno": "2710.91.00.10",
              "indent": "3",
              "description": "Containing polychlorinated biphenyls (PCBs) at a concentration level of 50 mg/kg or more"
            },
            {
              "htsno": "2710.91.00.50",
              "indent": "3",
              "description": "Other, containing polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs), whether or not also containing polychlorinated biphenyls (PCBs) at a concentration level of less than 50 mg/kg"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271099",
          "firstHtsno": "2710.99",
          "description": "Other:",
          "rowCount": 10,
          "sampleRows": [
            {
              "htsno": "2710.99",
              "indent": "2",
              "description": "Other:"
            },
            {
              "htsno": "2710.99.05.00",
              "indent": "4",
              "description": "Testing under 25 degrees A.P.I."
            },
            {
              "htsno": "2710.99.10.00",
              "indent": "4",
              "description": "Testing 25 degrees A.P.I. or more"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271111",
          "firstHtsno": "2711.11.00.00",
          "description": "Natural gas",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "2711.11.00.00",
              "indent": "2",
              "description": "Natural gas"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271112",
          "firstHtsno": "2711.12.00",
          "description": "Propane",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "2711.12.00",
              "indent": "2",
              "description": "Propane"
            },
            {
              "htsno": "2711.12.00.10",
              "indent": "3",
              "description": "Propane with a minimum purity of 90 liquid volume percent"
            },
            {
              "htsno": "2711.12.00.20",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271113",
          "firstHtsno": "2711.13.00",
          "description": "Butanes",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "2711.13.00",
              "indent": "2",
              "description": "Butanes"
            },
            {
              "htsno": "2711.13.00.10",
              "indent": "3",
              "description": "Butanes with a purity of 90 liquid volume percent or more, but less than 95 liquid volume percent"
            },
            {
              "htsno": "2711.13.00.20",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271114",
          "firstHtsno": "2711.14.00",
          "description": "Ethylene, propylene, butylene and butadiene",
          "rowCount": 5,
          "sampleRows": [
            {
              "htsno": "2711.14.00",
              "indent": "2",
              "description": "Ethylene, propylene, butylene and butadiene"
            },
            {
              "htsno": "2711.14.00.10",
              "indent": "3",
              "description": "Ethylene"
            },
            {
              "htsno": "2711.14.00.20",
              "indent": "3",
              "description": "Propylene"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271119",
          "firstHtsno": "2711.19.00",
          "description": "Other",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "2711.19.00",
              "indent": "2",
              "description": "Other"
            },
            {
              "htsno": "2711.19.00.10",
              "indent": "3",
              "description": "Ethane"
            },
            {
              "htsno": "2711.19.00.20",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271121",
          "firstHtsno": "2711.21.00.00",
          "description": "Natural gas",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "2711.21.00.00",
              "indent": "2",
              "description": "Natural gas"
            }
          ]
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271129",
          "firstHtsno": "2711.29.00",
          "description": "Other",
          "rowCount": 6,
          "sampleRows": [
            {
              "htsno": "2711.29.00",
              "indent": "2",
              "description": "Other"
            },
            {
              "htsno": "2711.29.00.10",
              "indent": "4",
              "description": "Propane with a minimum purity of 90 liquid volume percent"
            },
            {
              "htsno": "2711.29.00.15",
              "indent": "4",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2805",
          "hts6": "280511",
          "firstHtsno": "2805.11.00.00",
          "description": "Sodium",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "2805.11.00.00",
              "indent": "2",
              "description": "Sodium"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2805",
          "hts6": "280512",
          "firstHtsno": "2805.12.00.00",
          "description": "Calcium",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "2805.12.00.00",
              "indent": "2",
              "description": "Calcium"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2805",
          "hts6": "280519",
          "firstHtsno": "2805.19",
          "description": "Other:",
          "rowCount": 6,
          "sampleRows": [
            {
              "htsno": "2805.19",
              "indent": "2",
              "description": "Other:"
            },
            {
              "htsno": "2805.19.10.00",
              "indent": "3",
              "description": "Strontium"
            },
            {
              "htsno": "2805.19.20.00",
              "indent": "3",
              "description": "Barium"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2805",
          "hts6": "280530",
          "firstHtsno": "2805.30.00",
          "description": "Rare-earth metals, scandium and yttrium, whether or not intermixed or interalloyed",
          "rowCount": 7,
          "sampleRows": [
            {
              "htsno": "2805.30.00",
              "indent": "1",
              "description": "Rare-earth metals, scandium and yttrium, whether or not intermixed or interalloyed"
            },
            {
              "htsno": "2805.30.00.05",
              "indent": "3",
              "description": "Lanthanum"
            },
            {
              "htsno": "2805.30.00.10",
              "indent": "3",
              "description": "Cerium"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2805",
          "hts6": "280540",
          "firstHtsno": "2805.40.00.00",
          "description": "Mercury",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "2805.40.00.00",
              "indent": "1",
              "description": "Mercury"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2846",
          "hts6": "284610",
          "firstHtsno": "2846.10.00",
          "description": "Cerium compounds",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "2846.10.00",
              "indent": "1",
              "description": "Cerium compounds"
            },
            {
              "htsno": "2846.10.00.10",
              "indent": "2",
              "description": "Cerium oxides"
            },
            {
              "htsno": "2846.10.00.50",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "2846",
          "hts6": "284690",
          "firstHtsno": "2846.90",
          "description": "Other:",
          "rowCount": 12,
          "sampleRows": [
            {
              "htsno": "2846.90",
              "indent": "1",
              "description": "Other:"
            },
            {
              "htsno": "2846.90.20",
              "indent": "2",
              "description": "Mixtures of rare-earth oxides or of rare-earth chlorides"
            },
            {
              "htsno": "2846.90.20.05",
              "indent": "4",
              "description": "Containing lanthanum as the predominant metal"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811212",
          "firstHtsno": "8112.12.00.00",
          "description": "Unwrought; powders",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.12.00.00",
              "indent": "2",
              "description": "Unwrought; powders"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811213",
          "firstHtsno": "8112.13.00.00",
          "description": "Waste and scrap",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.13.00.00",
              "indent": "2",
              "description": "Waste and scrap"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811219",
          "firstHtsno": "8112.19.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.19.00.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811221",
          "firstHtsno": "8112.21.00.00",
          "description": "Unwrought; powders",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.21.00.00",
              "indent": "2",
              "description": "Unwrought; powders"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811222",
          "firstHtsno": "8112.22.00.00",
          "description": "Waste and scrap",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.22.00.00",
              "indent": "2",
              "description": "Waste and scrap"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811229",
          "firstHtsno": "8112.29.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.29.00.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811231",
          "firstHtsno": "8112.31.00.00",
          "description": "Unwrought; waste and scrap; powders",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.31.00.00",
              "indent": "2",
              "description": "Unwrought; waste and scrap; powders"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811239",
          "firstHtsno": "8112.39.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.39.00.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811241",
          "firstHtsno": "8112.41",
          "description": "Unwrought; waste and scrap; powders:",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "8112.41",
              "indent": "2",
              "description": "Unwrought; waste and scrap; powders:"
            },
            {
              "htsno": "8112.41.10.00",
              "indent": "3",
              "description": "Waste and scrap"
            },
            {
              "htsno": "8112.41.50.00",
              "indent": "3",
              "description": "Unwrought; powders"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811249",
          "firstHtsno": "8112.49.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.49.00.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811251",
          "firstHtsno": "8112.51.00.00",
          "description": "Unwrought; powders",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.51.00.00",
              "indent": "2",
              "description": "Unwrought; powders"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811252",
          "firstHtsno": "8112.52.00.00",
          "description": "Waste and scrap",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.52.00.00",
              "indent": "2",
              "description": "Waste and scrap"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811259",
          "firstHtsno": "8112.59.00.00",
          "description": "Other",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.59.00.00",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811261",
          "firstHtsno": "8112.61.00.00",
          "description": "Waste and scrap",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "8112.61.00.00",
              "indent": "2",
              "description": "Waste and scrap"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811269",
          "firstHtsno": "8112.69",
          "description": "Other:",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "8112.69",
              "indent": "2",
              "description": "Other:"
            },
            {
              "htsno": "8112.69.10.00",
              "indent": "3",
              "description": "Unwrought cadmium; powders"
            },
            {
              "htsno": "8112.69.90.00",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811292",
          "firstHtsno": "8112.92",
          "description": "Unwrought; waste and scrap; powders:",
          "rowCount": 8,
          "sampleRows": [
            {
              "htsno": "8112.92",
              "indent": "2",
              "description": "Unwrought; waste and scrap; powders:"
            },
            {
              "htsno": "8112.92.07.00",
              "indent": "3",
              "description": "Waste and scrap"
            },
            {
              "htsno": "8112.92.10.00",
              "indent": "4",
              "description": "Gallium"
            }
          ]
        },
        {
          "family": "critical-minerals",
          "heading": "8112",
          "hts6": "811299",
          "firstHtsno": "8112.99",
          "description": "Other:",
          "rowCount": 4,
          "sampleRows": [
            {
              "htsno": "8112.99",
              "indent": "2",
              "description": "Other:"
            },
            {
              "htsno": "8112.99.10.00",
              "indent": "3",
              "description": "Germanium"
            },
            {
              "htsno": "8112.99.20.00",
              "indent": "3",
              "description": "Vanadium"
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3707",
          "hts6": "370710",
          "firstHtsno": "3707.10.00",
          "description": "Sensitizing emulsions",
          "rowCount": 3,
          "sampleRows": [
            {
              "htsno": "3707.10.00",
              "indent": "1",
              "description": "Sensitizing emulsions"
            },
            {
              "htsno": "3707.10.00.05",
              "indent": "2",
              "description": "For use in color negative photographic paper"
            },
            {
              "htsno": "3707.10.00.90",
              "indent": "2",
              "description": "Other"
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3707",
          "hts6": "370790",
          "firstHtsno": "3707.90",
          "description": "Other:",
          "rowCount": 8,
          "sampleRows": [
            {
              "htsno": "3707.90",
              "indent": "1",
              "description": "Other:"
            },
            {
              "htsno": "3707.90.31.00",
              "indent": "3",
              "description": "Acid violet 19"
            },
            {
              "htsno": "3707.90.32",
              "indent": "3",
              "description": "Other"
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3824",
          "hts6": "382410",
          "firstHtsno": "3824.10.00.00",
          "description": "Prepared binders for foundry molds or cores",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "3824.10.00.00",
              "indent": "1",
              "description": "Prepared binders for foundry molds or cores"
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3824",
          "hts6": "382430",
          "firstHtsno": "3824.30.00.00",
          "description": "Nonagglomerated metal carbides mixed together or with metallic binders",
          "rowCount": 1,
          "sampleRows": [
            {
              "htsno": "3824.30.00.00",
              "indent": "1",
              "description": "Nonagglomerated metal carbides mixed together or with metallic binders"
            }
          ]
        },
        {
          "family": "photoresist-chemicals",
          "heading": "3824",
          "hts6": "382440",
          "firstHtsno": "3824.40",
          "description": "Prepared additives for cements, mortars or concretes:",
          "rowCount": 4,
          "sampleRows": [
            {
              "htsno": "3824.40",
              "indent": "1",
              "description": "Prepared additives for cements, mortars or concretes:"
            },
            {
              "htsno": "3824.40.10.00",
              "indent": "2",
              "description": "Containing 5 percent or more by weight of one or more aromatic or modified aromatic substances"
            },
            {
              "htsno": "3824.40.20.00",
              "indent": "2",
              "description": "Consisting wholly of inorganic substances"
            }
          ]
        }
      ],
      "note": "USITC HTS-derived HS6 candidates for next-step Comtrade query design. Keep jurisdiction caveat: HTS validates U.S. tariff headings and subheadings, not final global classification rulings.",
      "error": null
    },
    "commodityHsPrunedWatchlist": {
      "status": "query-designed",
      "title": "Pruned HS6 Commodity Watchlist",
      "source": "https://www.usitc.gov/harmonized_tariff_information",
      "familyCount": 2,
      "candidateCount": 33,
      "coreCount": 9,
      "supportingCount": 10,
      "tooBroadCount": 10,
      "excludeCount": 4,
      "byFamily": [
        {
          "family": "semiconductor-equipment",
          "total": 20,
          "core": 4,
          "supporting": 3,
          "tooBroad": 10,
          "exclude": 3,
          "unclassified": 0
        },
        {
          "family": "lng-crude-refined-oil",
          "total": 13,
          "core": 5,
          "supporting": 7,
          "tooBroad": 0,
          "exclude": 1,
          "unclassified": 0
        }
      ],
      "rows": [
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848610",
          "description": "Machines and apparatus for the manufacture of boules or wafers",
          "tier": "core",
          "reason": "Machines for manufacture of boules or wafers; direct semiconductor production equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848620",
          "description": "Machines and apparatus for the manufacture of semiconductor devices or of electronic integrated circuits",
          "tier": "core",
          "reason": "Machines for semiconductor devices or integrated circuits; direct fab equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848630",
          "description": "Machines and apparatus for the manufacture of flat panel displays",
          "tier": "supporting",
          "reason": "Flat panel display equipment; adjacent electronics manufacturing, not core chip fabrication.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848640",
          "description": "Machines and apparatus specified in note 11(C) to this chapter",
          "tier": "core",
          "reason": "Note 11(C) semiconductor/IC apparatus category; includes mask/reticle and assembly-related machinery.",
          "sourceRowCount": 4
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848690",
          "description": "Parts and accessories",
          "tier": "core",
          "reason": "Parts and accessories for 8486 equipment; direct maintenance and production dependency.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903010",
          "description": "Instruments and apparatus for measuring or detecting ionizing radiations",
          "tier": "too-broad",
          "reason": "Ionizing radiation measurement; not semiconductor-specific in this watchlist.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903020",
          "description": "Oscilloscopes and oscillographs:",
          "tier": "too-broad",
          "reason": "Oscilloscopes; broad electronics test equipment.",
          "sourceRowCount": 3
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903031",
          "description": "Multimeters, without a recording device",
          "tier": "too-broad",
          "reason": "Multimeters without recording; broad instrument category.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903032",
          "description": "Multimeters, with a recording device",
          "tier": "too-broad",
          "reason": "Multimeters with recording; broad instrument category.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903033",
          "description": "Other, without a recording device:",
          "tier": "too-broad",
          "reason": "Other non-recording electrical measuring instruments; broad category.",
          "sourceRowCount": 3
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903039",
          "description": "Other, with a recording device",
          "tier": "too-broad",
          "reason": "Other recording electrical measuring instruments; broad category.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903040",
          "description": "Other instruments and apparatus, specially designed for telecommunications (for example, cross-talk meters, gain measuring instruments, distortion factor meters, psophometers)",
          "tier": "exclude",
          "reason": "Telecommunications-specific measuring apparatus; belongs to telecom/network stack, not semiconductor equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903082",
          "description": "For measuring or checking semiconductor wafers or devices (including integrated circuits)",
          "tier": "supporting",
          "reason": "Measuring/checking semiconductor wafers or devices; strong semiconductor test signal.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903084",
          "description": "Other, with a recording device",
          "tier": "too-broad",
          "reason": "Other recording measurement apparatus; not semiconductor-specific.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903089",
          "description": "Other",
          "tier": "too-broad",
          "reason": "Other measurement apparatus; residual broad category.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9030",
          "hts6": "903090",
          "description": "Parts and accessories:",
          "tier": "supporting",
          "reason": "Parts and accessories for measurement apparatus; relevant only with 903082 context.",
          "sourceRowCount": 15
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901010",
          "description": "Apparatus and equipment for automatically developing photographic (including cinematographic) film or paper in rolls or for automatically exposing developed film to rolls of photographic paper",
          "tier": "exclude",
          "reason": "Photographic film/paper lab equipment; not semiconductor equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901050",
          "description": "Other apparatus and equipment for photographic (including cinematographic) laboratories; negatoscopes:",
          "tier": "too-broad",
          "reason": "Other photographic laboratory apparatus; possible lithography adjacency but too broad.",
          "sourceRowCount": 7
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901060",
          "description": "Projection screens",
          "tier": "exclude",
          "reason": "Projection screens; unrelated to semiconductor equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "9010",
          "hts6": "901090",
          "description": "Parts and accessories:",
          "tier": "too-broad",
          "reason": "Parts/accessories for broad photographic lab equipment; too imprecise for core watchlist.",
          "sourceRowCount": 3
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2709",
          "hts6": "270900",
          "description": "Petroleum oils and oils obtained from bituminous minerals, crude:",
          "tier": "core",
          "reason": "Crude petroleum oils; direct energy chokepoint signal.",
          "sourceRowCount": 5
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271012",
          "description": "Light oils and preparations:",
          "tier": "core",
          "reason": "Light oils and preparations; refined fuel import signal.",
          "sourceRowCount": 16
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271019",
          "description": "Other:",
          "tier": "core",
          "reason": "Other petroleum oils and preparations; broad refined fuel signal.",
          "sourceRowCount": 41
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271020",
          "description": "Petroleum oils and oils obtained from bituminous minerals (other than crude) and preparations not elsewhere specified or included containing by weight 70 percent or more of petroleum oils or of oils obtained from bituminous minerals, these oils being the basic constituents of the preparations, containing biodiesel, other than waste oils:",
          "tier": "supporting",
          "reason": "Petroleum oils with biodiesel; relevant but mixed energy/fuel category.",
          "sourceRowCount": 20
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271091",
          "description": "Containing polychlorinated biphenyls (PCBs), polychlorinated terphenyls (PCTs) or polybrominated biphenyls (PBBs)",
          "tier": "exclude",
          "reason": "PCB/PCT/PBB-containing waste-like category; not a normal energy chokepoint flow.",
          "sourceRowCount": 3
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271099",
          "description": "Other:",
          "tier": "supporting",
          "reason": "Other petroleum oils/preparations; useful context but too residual for core alerting.",
          "sourceRowCount": 10
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271111",
          "description": "Natural gas",
          "tier": "core",
          "reason": "Natural gas, liquefied; direct LNG flow signal.",
          "sourceRowCount": 1
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271112",
          "description": "Propane",
          "tier": "supporting",
          "reason": "Propane; relevant gas/liquids context, not the main LNG/crude axis.",
          "sourceRowCount": 3
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271113",
          "description": "Butanes",
          "tier": "supporting",
          "reason": "Butanes; relevant gas/liquids context, not the main LNG/crude axis.",
          "sourceRowCount": 3
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271114",
          "description": "Ethylene, propylene, butylene and butadiene",
          "tier": "supporting",
          "reason": "Ethylene/propylene/butylene/butadiene; petrochemical feedstock context.",
          "sourceRowCount": 5
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271119",
          "description": "Other",
          "tier": "supporting",
          "reason": "Other liquefied petroleum gases; useful context but residual.",
          "sourceRowCount": 3
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271121",
          "description": "Natural gas",
          "tier": "core",
          "reason": "Natural gas, gaseous; direct gas dependency signal.",
          "sourceRowCount": 1
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271129",
          "description": "Other",
          "tier": "supporting",
          "reason": "Other gaseous hydrocarbons; useful context but residual.",
          "sourceRowCount": 6
        }
      ],
      "coreRows": [
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848610",
          "description": "Machines and apparatus for the manufacture of boules or wafers",
          "tier": "core",
          "reason": "Machines for manufacture of boules or wafers; direct semiconductor production equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848620",
          "description": "Machines and apparatus for the manufacture of semiconductor devices or of electronic integrated circuits",
          "tier": "core",
          "reason": "Machines for semiconductor devices or integrated circuits; direct fab equipment.",
          "sourceRowCount": 1
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848640",
          "description": "Machines and apparatus specified in note 11(C) to this chapter",
          "tier": "core",
          "reason": "Note 11(C) semiconductor/IC apparatus category; includes mask/reticle and assembly-related machinery.",
          "sourceRowCount": 4
        },
        {
          "family": "semiconductor-equipment",
          "heading": "8486",
          "hts6": "848690",
          "description": "Parts and accessories",
          "tier": "core",
          "reason": "Parts and accessories for 8486 equipment; direct maintenance and production dependency.",
          "sourceRowCount": 1
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2709",
          "hts6": "270900",
          "description": "Petroleum oils and oils obtained from bituminous minerals, crude:",
          "tier": "core",
          "reason": "Crude petroleum oils; direct energy chokepoint signal.",
          "sourceRowCount": 5
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271012",
          "description": "Light oils and preparations:",
          "tier": "core",
          "reason": "Light oils and preparations; refined fuel import signal.",
          "sourceRowCount": 16
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2710",
          "hts6": "271019",
          "description": "Other:",
          "tier": "core",
          "reason": "Other petroleum oils and preparations; broad refined fuel signal.",
          "sourceRowCount": 41
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271111",
          "description": "Natural gas",
          "tier": "core",
          "reason": "Natural gas, liquefied; direct LNG flow signal.",
          "sourceRowCount": 1
        },
        {
          "family": "lng-crude-refined-oil",
          "heading": "2711",
          "hts6": "271121",
          "description": "Natural gas",
          "tier": "core",
          "reason": "Natural gas, gaseous; direct gas dependency signal.",
          "sourceRowCount": 1
        }
      ],
      "note": "First-pass HS6 pruning for energy and semiconductor equipment. Query-designed by Nullroute; use as Comtrade query design, not final customs classification.",
      "error": null
    }
  },
  "run": {
    "status": "ok",
    "profile": "fast",
    "profileLabel": "Credential-free quick sensors",
    "startedAt": "2026-08-03T09:10:14.744Z",
    "finishedAt": "2026-08-03T09:10:55.856Z",
    "durationMs": 41112,
    "scriptCount": 11,
    "okCount": 11,
    "errorCount": 0,
    "strategy": {
      "profiles": {
        "full": "All stable sensors",
        "fast": "Credential-free quick sensors",
        "slow": "Long-running or rate-sensitive sensors"
      },
      "buckets": {
        "fast": [
          "CISA KEV + CSL gate",
          "NVD CVE",
          "OpenSanctions Index",
          "OONI",
          "World Bank Energy",
          "WITS Trade Stats",
          "Commodity Flow Watchlist",
          "Commodity HS Validation",
          "Pruned HS6 Watchlist",
          "Commodity Broad Flows",
          "UN Sanctions"
        ],
        "slow": [
          "Commodity HS6 Subheadings",
          "OFAC SDN",
          "SEC EDGAR",
          "RIPEstat"
        ]
      }
    },
    "records": [
      {
        "script": "fetch-cisa-kev.mjs",
        "label": "CISA KEV + CSL gate",
        "feeds": [
          "cisaKev",
          "consolidatedScreeningList"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:14.752Z",
        "finishedAt": "2026-08-03T09:10:15.184Z",
        "durationMs": 432,
        "error": null
      },
      {
        "script": "fetch-nvd-cves.mjs",
        "label": "NVD CVE",
        "feeds": [
          "nvdCves"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:15.184Z",
        "finishedAt": "2026-08-03T09:10:18.919Z",
        "durationMs": 3736,
        "error": null
      },
      {
        "script": "fetch-opensanctions-index.mjs",
        "label": "OpenSanctions Index",
        "feeds": [
          "openSanctions"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:18.920Z",
        "finishedAt": "2026-08-03T09:10:19.739Z",
        "durationMs": 819,
        "error": null
      },
      {
        "script": "fetch-ooni.mjs",
        "label": "OONI",
        "feeds": [
          "ooni"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:19.739Z",
        "finishedAt": "2026-08-03T09:10:24.743Z",
        "durationMs": 5005,
        "error": null
      },
      {
        "script": "fetch-worldbank-energy.mjs",
        "label": "World Bank Energy",
        "feeds": [
          "worldBankEnergy"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:24.744Z",
        "finishedAt": "2026-08-03T09:10:25.526Z",
        "durationMs": 782,
        "error": null
      },
      {
        "script": "fetch-wits-trade-stats.mjs",
        "label": "WITS Trade Stats",
        "feeds": [
          "witsTradeStats"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:25.526Z",
        "finishedAt": "2026-08-03T09:10:29.924Z",
        "durationMs": 4398,
        "error": null
      },
      {
        "script": "fetch-commodity-flow-watchlist.mjs",
        "label": "Commodity Flow Watchlist",
        "feeds": [
          "commodityFlowWatchlist"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:29.924Z",
        "finishedAt": "2026-08-03T09:10:30.205Z",
        "durationMs": 281,
        "error": null
      },
      {
        "script": "fetch-hs-validation.mjs",
        "label": "Commodity HS Validation",
        "feeds": [
          "commodityHsValidation"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:30.205Z",
        "finishedAt": "2026-08-03T09:10:38.267Z",
        "durationMs": 8062,
        "error": null
      },
      {
        "script": "fetch-hs-pruned-watchlist.mjs",
        "label": "Pruned HS6 Watchlist",
        "feeds": [
          "commodityHsPrunedWatchlist"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:38.267Z",
        "finishedAt": "2026-08-03T09:10:38.533Z",
        "durationMs": 266,
        "error": null
      },
      {
        "script": "fetch-commodity-broad-flows.mjs",
        "label": "Commodity Broad Flows",
        "feeds": [
          "commodityBroadFlows"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:38.533Z",
        "finishedAt": "2026-08-03T09:10:51.032Z",
        "durationMs": 12499,
        "error": null
      },
      {
        "script": "fetch-un-sanctions.mjs",
        "label": "UN Sanctions",
        "feeds": [
          "unSanctions"
        ],
        "bucket": "fast",
        "status": "ok",
        "startedAt": "2026-08-03T09:10:51.032Z",
        "finishedAt": "2026-08-03T09:10:55.855Z",
        "durationMs": 4824,
        "error": null
      }
    ]
  },
  "diff": {
    "status": "ready",
    "previousGeneratedAt": "2026-08-02T21:10:34.073Z",
    "currentGeneratedAt": "2026-08-03T09:10:51.226Z",
    "changedCount": 2,
    "metrics": [
      {
        "key": "cisaKev.count",
        "label": "CISA KEV entries",
        "feed": "cisaKev",
        "previousValue": 1656,
        "currentValue": 1656,
        "delta": 0
      },
      {
        "key": "ofacSdn.count",
        "label": "OFAC SDN entries",
        "feed": "ofacSdn",
        "previousValue": 19065,
        "currentValue": 19065,
        "delta": 0
      },
      {
        "key": "nvdCves.totalResults",
        "label": "NVD 7d modified",
        "feed": "nvdCves",
        "previousValue": 5325,
        "currentValue": 5349,
        "delta": 24
      },
      {
        "key": "openSanctions.datasetCount",
        "label": "OpenSanctions datasets",
        "feed": "openSanctions",
        "previousValue": 462,
        "currentValue": 462,
        "delta": 0
      },
      {
        "key": "ooni.countryCount",
        "label": "OONI countries",
        "feed": "ooni",
        "previousValue": 237,
        "currentValue": 237,
        "delta": 0
      },
      {
        "key": "ooni.totalMeasurements",
        "label": "OONI measurements",
        "feed": "ooni",
        "previousValue": 3554116269,
        "currentValue": 3556085422,
        "delta": 1969153
      },
      {
        "key": "witsTradeStats.recordCount",
        "label": "WITS trade records",
        "feed": "witsTradeStats",
        "previousValue": 24,
        "currentValue": 24,
        "delta": 0
      },
      {
        "key": "commodityFlowWatchlist.groupCount",
        "label": "Commodity watch groups",
        "feed": "commodityFlowWatchlist",
        "previousValue": 7,
        "currentValue": 7,
        "delta": 0
      },
      {
        "key": "commodityHsValidation.verifiedCount",
        "label": "Verified HS candidates",
        "feed": "commodityHsValidation",
        "previousValue": 21,
        "currentValue": 21,
        "delta": 0
      },
      {
        "key": "commodityHsSubheadings.hts6Count",
        "label": "HS6 subheading candidates",
        "feed": "commodityHsSubheadings",
        "previousValue": 147,
        "currentValue": 147,
        "delta": 0
      },
      {
        "key": "commodityHsPrunedWatchlist.coreCount",
        "label": "Core HS6 watch items",
        "feed": "commodityHsPrunedWatchlist",
        "previousValue": 9,
        "currentValue": 9,
        "delta": 0
      },
      {
        "key": "commodityBroadFlows.recordCount",
        "label": "Commodity broad-flow records",
        "feed": "commodityBroadFlows",
        "previousValue": 1244,
        "currentValue": 1244,
        "delta": 0
      },
      {
        "key": "ripeStat.totalAnnouncedPrefixes",
        "label": "RIPEstat announced prefixes",
        "feed": "ripeStat",
        "previousValue": 32086,
        "currentValue": 32086,
        "delta": 0
      },
      {
        "key": "secFilings.filingCount",
        "label": "SEC important filings",
        "feed": "secFilings",
        "previousValue": 48,
        "currentValue": 48,
        "delta": 0
      },
      {
        "key": "unSanctions.totalCount",
        "label": "UN sanctions entries",
        "feed": "unSanctions",
        "previousValue": 1011,
        "currentValue": 1011,
        "delta": 0
      }
    ],
    "countryPlanes": [
      {
        "cc": "IR",
        "label": "Iran",
        "previous": {
          "measurements": 116355,
          "v4Prefixes": 8384
        },
        "current": {
          "measurements": 117849,
          "v4Prefixes": 8384
        }
      },
      {
        "cc": "RU",
        "label": "Russia",
        "previous": {
          "measurements": 1934844,
          "v4Prefixes": 39570
        },
        "current": {
          "measurements": 1921451,
          "v4Prefixes": 39570
        }
      },
      {
        "cc": "CN",
        "label": "China",
        "previous": {
          "measurements": 268145,
          "v4Prefixes": 65670
        },
        "current": {
          "measurements": 299243,
          "v4Prefixes": 65670
        }
      },
      {
        "cc": "TW",
        "label": "Taiwan",
        "previous": {
          "measurements": 170175,
          "v4Prefixes": 9419.5
        },
        "current": {
          "measurements": 174382,
          "v4Prefixes": 9419.5
        }
      },
      {
        "cc": "UA",
        "label": "Ukraine",
        "previous": {
          "measurements": 138544,
          "v4Prefixes": 11120.5
        },
        "current": {
          "measurements": 126776,
          "v4Prefixes": 11120.5
        }
      },
      {
        "cc": "VE",
        "label": "Venezuela",
        "previous": {
          "measurements": 583987,
          "v4Prefixes": 2364
        },
        "current": {
          "measurements": 565072,
          "v4Prefixes": 2364
        }
      }
    ]
  },
  "alertCandidates": {
    "generatedFrom": "2026-08-03T09:10:51.226Z",
    "runStatus": "ok",
    "candidateCount": 2,
    "highCount": 0,
    "mediumCount": 2,
    "ruleCoverage": [
      {
        "ruleId": "kev-exploited-watched-infra",
        "priority": "high",
        "evaluated": true,
        "candidateCount": 0
      },
      {
        "ruleId": "sanction-hits-watched-entity",
        "priority": "high",
        "evaluated": true,
        "candidateCount": 0
      },
      {
        "ruleId": "sanction-list-grew",
        "priority": "high",
        "evaluated": true,
        "candidateCount": 0
      },
      {
        "ruleId": "routing-visibility-loss",
        "priority": "high",
        "evaluated": true,
        "candidateCount": 0
      },
      {
        "ruleId": "control-data-plane-divergence",
        "priority": "high",
        "evaluated": true,
        "candidateCount": 0
      },
      {
        "ruleId": "watched-company-material-filing",
        "priority": "medium",
        "evaluated": true,
        "candidateCount": 0
      },
      {
        "ruleId": "source-movement",
        "priority": "medium",
        "evaluated": true,
        "candidateCount": 2
      }
    ],
    "skipped": [],
    "note": "Candidates are leads for Root to verify against original sources. None is a confirmed judgment; none is written to claims-ledger.md.",
    "candidates": [
      {
        "id": "movement:nvdCves.totalResults",
        "priority": "medium",
        "ruleId": "source-movement",
        "rule": "A source adds new data relevant to an existing dependency.",
        "source": "nvdCves",
        "sourceEvidence": "verified",
        "signal": "NVD 7d modified changed by +24 since last snapshot",
        "watchedEntity": null,
        "status": "candidate / needs review"
      },
      {
        "id": "movement:ooni.totalMeasurements",
        "priority": "medium",
        "ruleId": "source-movement",
        "rule": "A source adds new data relevant to an existing dependency.",
        "source": "ooni",
        "sourceEvidence": "verified",
        "signal": "OONI measurements changed by +1969153 since last snapshot",
        "watchedEntity": null,
        "status": "candidate / needs review"
      }
    ]
  }
};
