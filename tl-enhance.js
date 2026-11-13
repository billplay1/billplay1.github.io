/* Evidence Timeline enhancements for /FraudTimeline: plain layer labels and colors, Start here, glossary,
   phone list view with eras, search and filters, and a detail view tied to the address bar (#ev-<id>). */
(function(){
var LAYERS=[
 ["reality_layer","The record","#6FBF73"],
 ["fake_trail_layer","What holders were told","#E3913B"],
 ["erasure_layer","Gaps in the record","#A9B1BC"],
 ["confession_layer","The railroad's own papers","#B98FE3"],
 ["litigation_layer","In court","#6FA8DC"]];
var LMAP={};LAYERS.forEach(function(l){LMAP[l[0]]=l;});
function layer(e){var c=(e&&e.category)||"";if(c==="confession")c="confession_layer";return LMAP[c]?c:"reality_layer";}
window.__lvTlLayer=layer;
window.__lvTlLabel=function(e){return LMAP[layer(e)][1];};
window.__lvTlColor=function(e){return LMAP[layer(e)][2];};

var GROUPS=[["all","All"],["rail","The railroad and the land"],["family","The family and the certificate"],["courts","The courts"]];
var RX_COURT=/\b(court|courts|lawsuit|suit|judge|judgment|appeal|appeals|complaint|petition|dismiss\w*|laches|deposition|discovery|certiorari|hearing|trial|filed|filing|v\.)\b/i;
var RX_FAM=/\b(certificate|thorne|key|laird|grandson|grandfather|family|holder|holders|answers?)\b/i;
var T_COURT=["laches","thornei","thorneii","thorne i","thorne ii","pittman","stevenson case"];
var T_FAM=["certificate","thorne","thorne family","key","chain of custody","certificate 1656","certificate holders","answers file","denial letter","2011 answer"];
function tags(e){return (e.tags||[]).map(function(t){return String(t).toLowerCase();});}
function isCourt(e){var t=tags(e);return layer(e)==="litigation_layer"||RX_COURT.test(e.title||"")||t.some(function(x){return T_COURT.indexOf(x)>-1;});}
function isFam(e){var t=tags(e);return RX_FAM.test(e.title||"")||t.some(function(x){return T_FAM.indexOf(x)>-1;});}
function group(e,k){if(!k||k==="all")return true;var c=isCourt(e),f=isFam(e);
 if(k==="courts")return c;if(k==="family")return f;if(k==="rail")return !c&&!f||(!c&&/\b(railroad|railway|rail|land|lands|acres?|trust|mortgage|bonds?|foreclos\w*|charter\w*|construction|C&TRCC|T&P|SPRR|TPL|TPLT)\b/i.test(e.title||""));return true;}
window.__lvTlGroup=group;

var ERAS=[[0,1865,"1845 to 1865","Building the Road"],[1866,1873,"1866 to 1873","Foreclosure and Consolidation"],[1874,1889,"1874 to 1889","Marshall and the T&P"],[1890,1933,"1890 to 1933","The Land Trust and the Answers"],[1934,2010,"1934 to 2010","The Family Keeps the Certificate"],[2011,99999,"2011 to today","The Courts"]];
function eraOf(y){y=Math.floor(y);for(var i=0;i<ERAS.length;i++)if(y>=ERAS[i][0]&&y<=ERAS[i][1])return i;return ERAS.length-1;}

function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function dash(s){return String(s==null?"":s).replace(/(\d)\s*[\u2013\u2014]\s*(\d)/g,"$1 to $2").replace(/\s*[\u2013\u2014]\s*/g,": ").replace(/:\s*:/g,":");}
window.__lvTlDash=dash;
function fmtE(e){return e&&e.display_date?String(e.display_date):fmt(e&&e.year);}
window.__lvTlFmt=fmtE;
function fmt(W){var P=Math.floor(W),D=W-P;if(D<.001)return String(P);var le=P%4===0&&P%100!==0||P%400===0?366:365,ce=Math.round(D*le),ae=new Date(P,0,1);ae.setDate(ae.getDate()+ce-1);return ae.toLocaleString("en-US",{month:"short"})+" "+ae.getDate()+", "+P;}
function events(){var T=(window.__LV&&window.__LV.TimelineEvent)||[];return T.filter(function(e){return !e.hidden;}).slice().sort(function(a,b){return a.year-b.year;});}
function byId(id){var E=events();for(var i=0;i<E.length;i++)if(E[i].id===id)return E[i];return null;}
function isTl(){return /^\/FraudTimeline\/?$/i.test(location.pathname);}
function phone(){return window.matchMedia("(max-width: 699px)").matches;}

var CSS=
'.lv-tl-top{margin:0 0 22px;font-family:Lora,Georgia,serif}'+
'.lvx-box{background:linear-gradient(135deg,#3e2723 0%,#2c1810 100%);border:2px solid #D4AF37;border-radius:12px;color:#f5ead8;margin:0 0 16px;box-shadow:0 8px 24px rgba(0,0,0,.18)}'+
'.lvx-box>summary{list-style:none;cursor:pointer;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px}'+
'.lvx-box>summary::-webkit-details-marker{display:none}'+
'.lvx-box>summary h2{font-family:"Playfair Display",serif;color:#D4AF37;font-size:22px;font-weight:700;margin:0;letter-spacing:.02em}'+
'.lvx-box>summary .tg{color:#D4AF37;font-size:14px;white-space:nowrap}'+
'.lvx-box[open]>summary .tg .o{display:none}.lvx-box:not([open])>summary .tg .c{display:none}'+
'.lvx-in{padding:0 18px 16px;font-size:17px;line-height:1.7}'+
'.lvx-in p{margin:0 0 10px}.lvx-in a{color:#ffd700;text-decoration:underline}'+
'.lvx-gl{display:grid;grid-template-columns:max-content 1fr;gap:8px 14px;margin:6px 0 0}'+
'.lvx-gl dt{font-weight:700;color:#D4AF37}.lvx-gl dd{margin:0}'+
'@media (max-width:520px){.lvx-gl{grid-template-columns:1fr}.lvx-gl dd{margin:0 0 6px}}'+
'.lvx-legend{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:center;margin:4px 0 14px;font-size:15px;color:#704214}'+
'.lvx-legend b{font-family:"Playfair Display",serif;color:#704214;margin-right:4px}'+
'.lvx-legend span{display:inline-flex;align-items:center;gap:6px}'+
'.lv-sw{display:inline-block;width:14px;height:14px;border-radius:3px;border:1px solid rgba(0,0,0,.35);flex:none}'+
'.lv-lay{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:2px;line-height:1.2}'+
'.lv-tl-intro{font-size:17px!important;line-height:1.6}'+
'.lv-clamp3{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}'+
/* breadcrumb clears the fixed menu button (all pages) */
'main>nav.sticky{padding-left:72px!important;min-height:48px;font-size:14px}'+
'main:has(.lv-tl-top)>nav.sticky{background:#b9ab9c}'+
'@media (max-width:699px){.lv-rail,.lv-tl-controls{display:none!important}}'+
'@media (min-width:700px){.lvx-phone{display:none!important}}'+
/* phone list */
'.lvx-phone{background:linear-gradient(135deg,#3e2723 0%,#2c1810 50%,#1a0f0a 100%);border:3px solid #D4AF37;border-radius:12px;padding:12px 10px 16px;color:#f5ead8}'+
'.lvx-ctl input{width:100%;box-sizing:border-box;font-size:17px;padding:12px 14px;border-radius:10px;border:1.5px solid #D4AF37;background:#1a0f0a;color:#f5ead8;font-family:Lora,Georgia,serif}'+
'.lvx-ctl input::placeholder{color:#b9a27a}'+
'.lvx-row{display:flex;gap:8px;overflow-x:auto;padding:10px 2px 2px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.lvx-row::-webkit-scrollbar{display:none}'+
'.lvx-groups,.lvx-layers{flex-wrap:wrap;overflow:visible}'+
'.lvx-chip{flex:none;display:inline-flex;align-items:center;gap:6px;min-height:40px;padding:8px 14px;border-radius:999px;border:1px solid #8b6f47;background:transparent;color:#e8dcc4;font-size:15px;font-family:Lora,Georgia,serif;cursor:pointer;white-space:nowrap}'+
'.lvx-chip.on{background:#D4AF37;color:#1a1410;border-color:#D4AF37;font-weight:700}'+
'.lvx-lbl{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#D4AF37;margin:12px 2px 0}'+
'.lvx-count{font-size:15px;color:#e8dcc4;margin:10px 2px 0}'+
'.lvx-eras{position:sticky;top:var(--lvx-top,0px);z-index:60;background:#2c1810;margin:12px -10px 0;padding:8px 10px;border-top:1px solid rgba(212,175,55,.35);border-bottom:1px solid rgba(212,175,55,.35)}'+
'.lvx-eras .lvx-row{padding:0}'+
'.lvx-era{font-family:"Playfair Display",serif;color:#D4AF37;font-size:21px;font-weight:700;margin:22px 2px 8px;scroll-margin-top:calc(var(--lvx-top,0px) + 70px)}'+
'.lvx-era small{display:block;font-family:Lora,Georgia,serif;font-size:14px;color:#c9b48a;font-weight:400;letter-spacing:.08em}'+
'.lvx-card{display:block;width:100%;text-align:left;margin:0 0 10px;padding:12px 14px;border-radius:10px;background:linear-gradient(135deg,#5a4a3a 0%,#4a3f2f 100%);border:1.5px solid #D4AF37;border-left-width:7px;box-shadow:0 4px 12px rgba(0,0,0,.45);color:#faf7f0;cursor:pointer;font-family:Lora,Georgia,serif}'+
'.lvx-card .top{display:flex;justify-content:space-between;gap:10px;align-items:baseline}'+
'.lvx-card .lay{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}'+
'.lvx-card .dt{font-size:14px;color:#D4AF37;font-weight:700;white-space:nowrap}'+
'.lvx-card .tt{font-size:17px;font-weight:600;line-height:1.4;margin-top:4px}'+
'.lvx-empty{padding:30px 10px;text-align:center;color:#e8dcc4;font-size:17px}'+
/* detail */
'.lvx-ov{position:fixed;inset:0;z-index:300;background:rgba(10,6,3,.72);display:flex;align-items:center;justify-content:center;padding:24px}'+
'.lvx-dv{position:relative;width:100%;max-width:780px;max-height:100%;display:flex;flex-direction:column;background:linear-gradient(135deg,#3e2723 0%,#2c1810 100%);border:2px solid #D4AF37;border-left-width:10px;border-radius:12px;color:#f5ead8;font-family:Lora,Georgia,serif;box-shadow:0 20px 60px rgba(0,0,0,.7)}'+
'.lvx-bar{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid rgba(212,175,55,.35);flex:none}'+
'.lvx-bar .sp{flex:1;font-size:13px;color:#c9b48a;letter-spacing:.08em;text-align:center}'+
'.lvx-btn{min-height:44px;min-width:44px;padding:8px 14px;border-radius:8px;border:1px solid #D4AF37;background:transparent;color:#D4AF37;font-size:16px;font-family:Lora,Georgia,serif;cursor:pointer}'+
'.lvx-btn[disabled]{opacity:.35;cursor:default}'+
'.lvx-body{overflow-y:auto;padding:18px 22px 26px;-webkit-overflow-scrolling:touch}'+
'.lvx-pill{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:999px;background:rgba(0,0,0,.25)}'+
'.lvx-date{font-size:16px;color:#D4AF37;font-weight:700;margin:12px 0 4px}'+
'.lvx-body h2{font-family:"Playfair Display",serif;font-size:26px;line-height:1.25;color:#faf7f0;margin:0 0 16px;font-weight:700}'+
'.lvx-desc{font-size:17px;line-height:1.75;color:#efe3c8;white-space:pre-line}'+
'.lvx-pos{margin:20px 0 0;padding:14px 16px;border:1.5px solid #D4AF37;border-radius:10px;background:rgba(212,175,55,.09)}'+
'.lvx-pos h3,.lvx-src h3{font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#D4AF37;margin:0 0 8px;font-weight:700;font-family:Lora,Georgia,serif}'+
'.lvx-pos div{font-size:17px;line-height:1.7;color:#f5ead8;white-space:pre-line}'+
'.lvx-src{margin:22px 0 0}'+
'.lvx-src ul{margin:0;padding-left:22px;list-style:disc}.lvx-src li{font-size:16px;line-height:1.6;margin:0 0 6px;color:#e8dcc4}'+
'.lvx-src a,.lvx-share a{color:#ffd700;text-decoration:underline;word-break:break-word}'+
'.lvx-share{margin:24px 0 0;font-size:15px;color:#c9b48a;display:flex;flex-wrap:wrap;gap:10px;align-items:center}'+
'@media (max-width:699px){.lvx-ov{padding:0;align-items:stretch}.lvx-dv{max-width:none;height:100%;border-radius:0;border-width:0 0 0 8px}.lvx-body{padding:16px 16px 40px}.lvx-body h2{font-size:23px}}';

function ensureCss(){if(document.getElementById("lvx-css"))return;var st=document.createElement("style");st.id="lvx-css";st.textContent=CSS;document.head.appendChild(st);}
ensureCss();

var START=[
 "In 1859 the Southern Pacific Railroad Company of Texas, a railroad company based in Marshall, issued Certificate No. 1656 for 300 shares to Mary Key.",
 "In 1868 the railroad's property was sold at foreclosure sales, and in 1872 the company was consolidated into the Texas and Pacific Railway.",
 "In 1888 a large part of the Texas and Pacific's land was placed in a new trust, the Texas Pacific Land Trust.",
 "From 1907 on, holders of the old Southern Pacific shares wrote to the railroad, and the railroad kept a file of its answers to them that runs from 1907 to 1980.",
 "The certificate stayed in the Thorne family and passed to John Stephen Thorne, whose lawsuits over it are set out step by step on <a href=\"/TheCase\" data-lvx-go=\"/TheCase\">The Case</a>; the most recent, a fraud claim over the railroad's 2011 answer, was brought in a complaint dated November 9, 2026, in the District Court of Douglas County, Nebraska."];
var GLOSS=[
 ["SPRR","Southern Pacific Railroad Company of Texas, the Marshall railroad company that issued Certificate No. 1656 in 1859. It is not the later California Southern Pacific."],
 ["T&P","The Texas and Pacific Railway Company, chartered by Congress in 1871. The SPRR was consolidated into it in 1872."],
 ["C&TRCC","The California and Texas Railway Construction Company, a Pennsylvania company chartered in 1871 as the Domain Land Company and renamed in 1872 to build the Texas and Pacific line."],
 ["TPLT / TPL","Texas Pacific Land Trust, created in 1888 to hold Texas and Pacific lands. Today it is Texas Pacific Land Corporation."],
 ["UP","Union Pacific Railroad. It acquired the Missouri Pacific in 1982, and with it the Texas and Pacific."],
 ["Laches","A defense that can bar a claim brought too long after the events."],
 ["Thorne I / Thorne II","Thorne's 2015 and 2020 federal lawsuits against Union Pacific, set out on The Case."],
 ["UP_ numbers","Union Pacific's page numbers on the documents it produced in Thorne I, such as UP_003884."]];

function topHtml(){
 var seen=false;try{seen=localStorage.getItem("lvTlStartSeen")==="1";}catch(e){}
 var h='<details class="lvx-box lvx-start"'+(seen?'':' open')+'><summary><h2>Start here</h2><span class="tg"><span class="o">Show</span><span class="c">Hide</span></span></summary><div class="lvx-in">'+START.map(function(s){return '<p>'+s+'</p>';}).join("")+'</div></details>';
 h+='<details class="lvx-box lvx-gloss"><summary><h2>Words used on this page</h2><span class="tg"><span class="o">Show</span><span class="c">Hide</span></span></summary><div class="lvx-in"><dl class="lvx-gl">'+GLOSS.map(function(g){return '<dt>'+esc(g[0])+'</dt><dd>'+esc(g[1])+'</dd>';}).join("")+'</dl></div></details>';
 h+='<div class="lvx-legend" role="note"><b>Card colors:</b>'+LAYERS.map(function(l){return '<span><i class="lv-sw" style="background:'+l[2]+'"></i>'+esc(l[1])+'</span>';}).join("")+'</div>';
 h+='<div class="lvx-phone"><div class="lvx-ctl"><input type="search" placeholder="Search the timeline" aria-label="Search the timeline">'+
  '<div class="lvx-lbl">Show</div><div class="lvx-row lvx-groups">'+GROUPS.map(function(g,i){return '<button type="button" class="lvx-chip'+(i?'':' on')+'" data-g="'+g[0]+'">'+esc(g[1])+'</button>';}).join("")+'</div>'+
  '<div class="lvx-lbl">Kind of record</div><div class="lvx-row lvx-layers"><button type="button" class="lvx-chip on" data-l="">All kinds</button>'+LAYERS.map(function(l){return '<button type="button" class="lvx-chip" data-l="'+l[0]+'"><i class="lv-sw" style="background:'+l[2]+'"></i>'+esc(l[1])+'</button>';}).join("")+'</div>'+
  '<div class="lvx-count" aria-live="polite"></div></div>'+
  '<div class="lvx-eras"><div class="lvx-row">'+ERAS.map(function(e,i){return '<button type="button" class="lvx-chip" data-era="'+i+'">'+esc(e[2])+': '+esc(e[3])+'</button>';}).join("")+'</div></div>'+
  '<div class="lvx-list"></div></div>';
 return h;}

var root=null,st={g:"all",l:"",q:""},ctxIds=[];
function matchP(e){if(!group(e,st.g))return false;if(st.l&&layer(e)!==st.l)return false;
 if(st.q){var q=st.q.toLowerCase();if(((e.title||"")+" "+(e.description||"")+" "+(e.significance||"")+" "+(e.legal_basis||"")+" "+fmtE(e)).toLowerCase().indexOf(q)<0)return false;}return true;}
function renderList(){if(!root)return;var E=events(),list=root.querySelector(".lvx-list"),h="",last=-1,n=0;ctxIds=[];
 E.forEach(function(e){if(!matchP(e))return;n++;ctxIds.push(e.id);var er=eraOf(e.year);
  if(er!==last){h+='<h3 class="lvx-era" id="lvx-era-'+er+'">'+esc(ERAS[er][3])+'<small>'+esc(ERAS[er][2])+'</small></h3>';last=er;}
  var L=LMAP[layer(e)];
  h+='<button type="button" class="lvx-card" data-ev="'+esc(e.id)+'" style="border-left-color:'+L[2]+'"><div class="top"><span class="lay" style="color:'+L[2]+'">'+esc(L[1])+'</span><span class="dt">'+esc(fmtE(e))+'</span></div><div class="tt">'+esc(dash(e.title))+'</div></button>';});
 list.innerHTML=h||'<div class="lvx-empty">No events match. Try another word or tap All.</div>';
 root.querySelector(".lvx-count").textContent="Showing "+n+" of "+E.length+" events";
 root.querySelectorAll("[data-era]").forEach(function(b){b.style.display=list.querySelector("#lvx-era-"+b.getAttribute("data-era"))?"":"none";});}
function setTop(){if(!root)return;var nav=document.querySelector("main > nav");root.style.setProperty("--lvx-top",(nav?nav.offsetHeight:0)+"px");}

/* detail view */
var ov=null,savedY=0,pushed=false,curId=null;
function srcHtml(s){s=dash(s||"").trim();if(!s)return "";var parts=s.split(/;\s+(?![^()]*\))/).map(function(x){return x.trim();}).filter(Boolean);
 return '<ul>'+parts.map(function(p){var out="",i=0,re=/https?:\/\/[^\s<>"]+[^\s<>".,;:)\]]/g,m;while((m=re.exec(p))){out+=esc(p.slice(i,m.index))+'<a href="'+esc(m[0])+'" target="_blank" rel="noopener">'+esc(m[0])+'</a>';i=m.index+m[0].length;}out+=esc(p.slice(i));return '<li>'+out+'</li>';}).join("")+'</ul>';}
function list4nav(){return (phone()&&ctxIds.length)?ctxIds:events().map(function(e){return e.id;});}
function draw(id){var e=byId(id);if(!e)return false;curId=id;var L=LMAP[layer(e)],ids=list4nav(),ix=ids.indexOf(id);
 var pos=String(e.significance||"").replace(/^\s*Thorne[’']s position:\s*/i,"").trim();
 var url=location.origin+"/FraudTimeline#ev-"+id;
 var h='<div class="lvx-dv" role="dialog" aria-modal="true" aria-labelledby="lvx-h" style="border-left-color:'+L[2]+'">'+
  '<div class="lvx-bar"><button type="button" class="lvx-btn" data-nav="-1" aria-label="Earlier event"'+(ix>0?'':' disabled')+'>&larr; Earlier</button><span class="sp">'+(ix>-1?(ix+1)+' of '+ids.length:'')+'</span><button type="button" class="lvx-btn" data-nav="1" aria-label="Later event"'+(ix>-1&&ix<ids.length-1?'':' disabled')+'>Later &rarr;</button><button type="button" class="lvx-btn lvx-x" aria-label="Close">Close</button></div>'+
  '<div class="lvx-body"><span class="lvx-pill" style="color:'+L[2]+';border:1px solid '+L[2]+'"><i class="lv-sw" style="background:'+L[2]+'"></i>'+esc(L[1])+'</span>'+
  '<div class="lvx-date">'+esc(fmtE(e))+'</div><h2 id="lvx-h">'+esc(dash(e.title))+'</h2>'+
  (e.description&&String(e.description).trim()?'<div class="lvx-desc">'+esc(dash(e.description))+'</div>':'')+
  (pos?'<section class="lvx-pos"><h3>Thorne\'s position</h3><div>'+esc(dash(pos))+'</div></section>':'')+
  (e.legal_basis&&String(e.legal_basis).trim()?'<section class="lvx-src"><h3>Sources</h3>'+srcHtml(e.legal_basis)+'</section>':'')+
  '<div class="lvx-share">Link to this event: <a href="'+esc(url)+'">'+esc(url.replace(/^https?:\/\//,""))+'</a><button type="button" class="lvx-btn lvx-copy">Copy link</button></div>'+
  '</div></div>';
 ov.innerHTML=h;var b=ov.querySelector(".lvx-body");if(b)b.scrollTop=0;var x=ov.querySelector(".lvx-x");if(x)x.focus({preventScroll:true});return true;}
function openEv(id,how){if(!byId(id))return;ensureCss();
 if(!ov){savedY=window.scrollY;ov=document.createElement("div");ov.className="lvx-ov";document.body.appendChild(ov);document.documentElement.style.overflow="hidden";
  ov.addEventListener("click",onOv);document.addEventListener("keydown",onKey);}
 draw(id);
 var h="#ev-"+id;
 if(how==="push"){if(location.hash!==h){history.pushState({lvEv:id},"",location.pathname+location.search+h);pushed=true;}}
 else if(how==="replace"){history.replaceState(pushed?{lvEv:id}:history.state,"",location.pathname+location.search+h);}}
function teardown(){if(!ov)return;ov.remove();ov=null;curId=null;document.documentElement.style.overflow="";document.removeEventListener("keydown",onKey);window.scrollTo(0,savedY);
 if(root){var c=root.querySelector('[data-ev="'+(window.__lvLastEv||"")+'"]');if(c&&phone()){var r=c.getBoundingClientRect();if(r.top<0||r.bottom>innerHeight)c.scrollIntoView({block:"center"});}}}
function closeEv(){if(!ov)return;if(pushed&&/^#ev-/.test(location.hash)){history.back();return;}
 pushed=false;if(/^#ev-/.test(location.hash))history.replaceState(history.state,"",location.pathname+location.search);teardown();}
function onKey(ev){if(ev.key==="Escape")closeEv();else if(ev.key==="ArrowRight")nav(1);else if(ev.key==="ArrowLeft")nav(-1);}
function nav(d){var ids=list4nav(),ix=ids.indexOf(curId),n=ids[ix+d];if(n){window.__lvLastEv=n;draw(n);history.replaceState(history.state,"",location.pathname+location.search+"#ev-"+n);}}
function onOv(ev){if(ev.target===ov){closeEv();return;}var t=ev.target;
 if(t.closest(".lvx-x")){closeEv();return;}
 var nb=t.closest("[data-nav]");if(nb&&!nb.disabled){nav(+nb.getAttribute("data-nav"));return;}
 if(t.closest(".lvx-copy")){var u=location.origin+"/FraudTimeline#ev-"+curId,btn=t.closest(".lvx-copy");
  var ok=function(){btn.textContent="Copied";setTimeout(function(){btn.textContent="Copy link";},1500);};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(u).then(ok,function(){window.prompt("Copy this link",u);});else window.prompt("Copy this link",u);return;}
 var a=t.closest("a[href^='/FraudTimeline#ev-']");if(a){ev.preventDefault();}}
window.__lvTlOpen=function(id){window.__lvLastEv=id;openEv(id,"push");};
addEventListener("popstate",function(){
 if(!isTl()){pushed=false;teardown();return;}
 var m=location.hash.match(/^#ev-(.+)$/);
 if(m&&byId(m[1])){if(curId!==m[1])openEv(m[1],"none");}else{pushed=false;teardown();}});
addEventListener("hashchange",function(){if(!isTl())return;var m=location.hash.match(/^#ev-(.+)$/);if(m&&byId(m[1])&&curId!==m[1])openEv(m[1],"none");});

window.__lvTlTop=function(el){if(!el)return;ensureCss();root=el;st={g:"all",l:"",q:""};el.innerHTML=topHtml();
 try{localStorage.setItem("lvTlStartSeen","1");}catch(e){}
 renderList();setTop();setTimeout(setTop,300);
 el.addEventListener("click",function(ev){var t=ev.target;
  var go=t.closest("[data-lvx-go]");if(go){ev.preventDefault();history.pushState({},"",go.getAttribute("data-lvx-go"));dispatchEvent(new PopStateEvent("popstate"));scrollTo(0,0);return;}
  var g=t.closest("[data-g]");if(g){st.g=g.getAttribute("data-g");el.querySelectorAll("[data-g]").forEach(function(b){b.classList.toggle("on",b===g);});renderList();return;}
  var l=t.closest("[data-l]");if(l){st.l=l.getAttribute("data-l");el.querySelectorAll("[data-l]").forEach(function(b){b.classList.toggle("on",b===l);});renderList();return;}
  var er=t.closest("[data-era]");if(er){var h=el.querySelector("#lvx-era-"+er.getAttribute("data-era"));if(h)h.scrollIntoView({behavior:"smooth",block:"start"});el.querySelectorAll("[data-era]").forEach(function(b){b.classList.toggle("on",b===er);});return;}
  var c=t.closest("[data-ev]");if(c){window.__lvTlOpen(c.getAttribute("data-ev"));}});
 var inp=el.querySelector(".lvx-ctl input"),tm;inp.addEventListener("input",function(){clearTimeout(tm);tm=setTimeout(function(){st.q=inp.value.trim();renderList();},150);});
 if(ov){pushed=false;teardown();}
 var m=location.hash.match(/^#ev-(.+)$/);if(m&&byId(m[1])){pushed=false;openEv(m[1],"none");}};
addEventListener("resize",setTop);
})();
