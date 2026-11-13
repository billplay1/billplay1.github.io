/* The Timeline page: rendered inside the LexiVault layout at /Timeline. Data: window.__TL (timeline-data.js) */
(function(){
var CATS=[["all","All"],["key","Key Events"],["railroad","The Railroad"],["certificate","Certificate and Family"],["construction-co","Construction Company"],["land","The Land"],["marshall","Marshall and East Texas"],["answers","Answers to Holders"],["courts","Courts and Law"],["national","The Nation"]];
var CASE=function(e){var y=+e.date.slice(0,4),t=(e.title+" "+e.text).toLowerCase();
 if(e.date.indexOf("2011-08-03")===0||/written answer/.test(t)&&y===2011)return["answer","The 2011 answer"];
 if(y>=2015&&y<=2017&&/(lawsuit|laches|hearing|thorne i\b|1:15)/.test(t))return["first","The first lawsuit"];
 if(y===2018&&/(appeal|fifth circuit)/.test(t))return["appeal","The appeal"];
 if(y===2019&&/(supreme court|certiorari)/.test(t))return["supreme","The Supreme Court"];
 if(y>=2020&&y<=2022&&/(lawsuit|thorne ii|counterclaim|document 60|1:21|transfer)/.test(t))return["second","The second lawsuit"];
 if(y===2026&&/harris/.test(t))return["texas","The Texas fraud claim"];
 if(y===2026&&/nebraska|douglas county/.test(t))return["nebraska","The Nebraska complaint"];
 return null;};
var CSS='.lvt{max-width:900px;margin:0 auto;padding:28px 14px 70px;font-family:Lora,Georgia,serif;color:#3b2a17}'+
'.lvt h1{font-family:"Playfair Display",serif;font-weight:900;color:#704214;font-size:46px;line-height:1.05;text-align:center;margin:8px 0 8px}'+
'.lvt .sub{text-align:center;color:#704214;font-size:18px;max-width:640px;margin:0 auto 18px}'+
'.lvt .bar{position:sticky;top:30px;z-index:4;background:#f5ead8;padding:10px 0 8px;border-bottom:1px solid #e0cfae}'+
'.lvt .chips{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 8px;scrollbar-width:none}.lvt .chips::-webkit-scrollbar{display:none}'+
'.lvt .chip{flex:0 0 auto;font:600 13.5px Lora,serif;border:1px solid #704214;color:#704214;background:#fdf8ef;border-radius:999px;padding:8px 14px;min-height:38px;cursor:pointer;white-space:nowrap}'+
'.lvt .chip.on{background:#3e2723;color:#D4AF37;border-color:#3e2723}'+
'.lvt .row2{display:flex;gap:8px;align-items:center}'+
'.lvt input{flex:1;min-width:0;font:15px Lora,serif;border:1px solid #d8c39a;border-radius:10px;padding:10px 12px;background:#fffdf8;color:#3b2a17}'+
'.lvt .count{font-size:13px;color:#7a5a32;white-space:nowrap}'+
'.lvt .decades{display:flex;gap:6px;overflow-x:auto;padding-top:8px;scrollbar-width:none}.lvt .decades::-webkit-scrollbar{display:none}'+
'.lvt .decades button{flex:0 0 auto;font:600 12.5px "Playfair Display",serif;background:none;border:0;color:#8b6914;padding:6px 8px;cursor:pointer;min-height:32px}'+
'.lvt .dec{font:900 26px "Playfair Display",serif;color:#704214;margin:26px 0 8px 64px;scroll-margin-top:190px}'+
'.lvt .ev{position:relative;display:grid;grid-template-columns:52px 1fr;gap:0 12px;scroll-margin-top:190px}'+
'.lvt .ev:before{content:"";position:absolute;left:25px;top:0;bottom:0;width:2px;background:#d9be7a}'+
'.lvt .dot{position:relative;z-index:1;width:16px;height:16px;border-radius:50%;background:#fdf8ef;border:3px solid #b8935a;margin:18px 0 0 18px}'+
'.lvt .ev.key .dot{width:22px;height:22px;margin:15px 0 0 15px;background:#D4AF37;border-color:#3e2723}'+
'.lvt .card{background:#fdf8ef;border:1px solid #e0cfae;border-radius:10px;margin:6px 0;overflow:hidden}'+
'.lvt .ev.key .card{border-color:#D4AF37;box-shadow:0 2px 10px rgba(112,66,20,.12)}'+
'.lvt .hd{display:block;width:100%;text-align:left;background:none;border:0;padding:11px 14px;cursor:pointer;font:inherit;color:inherit}'+
'.lvt .d{font-size:12.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#8b1e1e}'+
'.lvt .t{font:700 17.5px "Playfair Display",serif;color:#3e2723;line-height:1.3;margin-top:2px}'+
'.lvt .bd{display:none;padding:0 14px 14px}.lvt .ev.open .bd{display:block}'+
'.lvt .bd p{margin:0 0 10px;line-height:1.65}'+
'.lvt .src{font-size:13px;color:#6b5434;border-top:1px solid #eadcc2;padding-top:8px}'+
'.lvt .src b{color:#704214;letter-spacing:.08em;font-size:11.5px;text-transform:uppercase}'+
'.lvt .src a{color:#704214}'+
'.lvt .tags{margin-top:8px;display:flex;flex-wrap:wrap;gap:6px}'+
'.lvt .tags span{font-size:11.5px;color:#7a5a32;background:#f3e6cc;border-radius:999px;padding:2px 9px}'+
'.lvt .go{display:inline-block;margin-top:10px;font:600 13px Lora,serif;background:#3e2723;color:#D4AF37;border-radius:999px;padding:7px 13px;text-decoration:none}'+
'.lvt .empty{text-align:center;color:#7a5a32;padding:40px 0}'+
'@media(max-width:560px){.lvt h1{font-size:36px}.lvt .ev{grid-template-columns:40px 1fr;gap:0 8px}.lvt .ev:before{left:19px}.lvt .dot{margin-left:12px}.lvt .ev.key .dot{margin-left:9px}.lvt .dec{margin-left:48px}}';
function esc(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;");}
var NAMES={};CATS.forEach(function(c){NAMES[c[0]]=c[1];});
window.__lvTimeline=function(el){
 if(!el)return;var D=(window.__TL||[]).slice().sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:0;});
 var st={cat:"all",q:""};
 el.innerHTML='<style>'+CSS+'</style><div class="lvt"><h1>The Timeline</h1><p class="sub">Certificate No. 1656 and the railroad it belongs to, from 1845 to today. Every entry shows its source.</p><div class="bar"><div class="chips">'+CATS.map(function(c){return '<button class="chip'+(c[0]==="all"?" on":"")+'" data-cat="'+c[0]+'">'+c[1]+'</button>';}).join("")+'</div><div class="row2"><input type="search" placeholder="Search the timeline" aria-label="Search the timeline"><span class="count"></span></div><div class="decades"></div></div><div class="list"></div></div>';
 var list=el.querySelector(".list"),cnt=el.querySelector(".count"),decs=el.querySelector(".decades");
 function match(e){if(st.cat==="key"&&!e.key)return false;if(st.cat!=="all"&&st.cat!=="key"&&e.cats.indexOf(st.cat)<0)return false;
  if(st.q){var q=st.q.toLowerCase();if((e.title+" "+e.text+" "+e.source+" "+e.display_date).toLowerCase().indexOf(q)<0)return false;}return true;}
 function render(){var h="",last="",shown=0,dl=[];
  D.forEach(function(e,i){if(!match(e))return;shown++;var dec=e.date.slice(0,3)+"0s";
   if(dec!==last){h+='<div class="dec" id="dec-'+dec+'">'+dec+'</div>';dl.push(dec);last=dec;}
   var cs=CASE(e);
   h+='<div class="ev'+(e.key?" key":"")+'" id="e-'+i+'"><div class="dot"></div><div class="card"><button class="hd" data-i="'+i+'"><div class="d">'+esc(e.display_date)+'</div><div class="t">'+esc(e.title)+'</div></button><div class="bd"><p>'+esc(e.text)+'</p><div class="src"><b>Source</b><br>'+(e.url?'<a href="'+e.url+'" target="_blank" rel="noopener">'+esc(e.source)+'</a>':esc(e.source))+'</div><div class="tags">'+e.cats.map(function(c){return '<span>'+(NAMES[c]||c)+'</span>';}).join("")+'</div>'+(cs?'<a class="go" href="/TheCase#case-'+cs[0]+'">'+cs[1]+' in The Case</a>':'')+'</div></div></div>';});
  list.innerHTML=h||'<div class="empty">No entries match.</div>';cnt.textContent=shown+" of "+D.length;
  decs.innerHTML=dl.map(function(d){return '<button data-dec="'+d+'">'+d+'</button>';}).join("");}
 render();
 el.addEventListener("click",function(e){
  var c=e.target.closest("[data-cat]");if(c){st.cat=c.getAttribute("data-cat");el.querySelectorAll(".chip").forEach(function(b){b.classList.toggle("on",b===c);});render();return;}
  var d=e.target.closest("[data-dec]");if(d){var t=el.querySelector("#dec-"+d.getAttribute("data-dec"));if(t)t.scrollIntoView({behavior:"smooth",block:"start"});return;}
  var hd=e.target.closest(".hd");if(hd){hd.closest(".ev").classList.toggle("open");return;}
  var go=e.target.closest(".go");if(go){e.preventDefault();history.pushState({},"",go.getAttribute("href"));dispatchEvent(new PopStateEvent("popstate"));}
 });
 var inp=el.querySelector("input"),tm;inp.addEventListener("input",function(){clearTimeout(tm);tm=setTimeout(function(){st.q=inp.value.trim();render();},150);});
};
})();
