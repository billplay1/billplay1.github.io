/* The Case page: rendered inside the LexiVault layout at /TheCase */
(function(){
var S={
 NC:["Complaint, Thorne v. Union Pacific Corp., District Court of Douglas County, Nebraska (Nov. 9, 2026)"],
 EXA:["Emails of Ronald L. Bair, Aug. 3 and Aug. 8, 2011 (Neb. Compl. Ex. A)"],
 EXB:["Emails of Timothy S. Dunning to Ronald L. Bair, Aug. 3, 2011 (UP_003859, UP_003860) (Neb. Compl. Ex. B)"],
 EXC:["Commonwealth ex rel. Elkin v. California and Texas Railway Construction Co., 5 Dauphin County Reports 181 (Pa. 1902) (Neb. Compl. Ex. C)"],
 EXD:["Union Pacific's file: statement of stock outstanding, Mar. 21, 1872 (UP_003884); memorandum of July 1929 (UP_004182) (Neb. Compl. Ex. D)"],
 EXF:["Order granting special appearance, No. 2026-63692, 295th District Court, Harris County (Oct. 19, 2026) (Neb. Compl. Ex. F)"],
 STEV:["Stevenson v. Texas Railway Co., 105 U.S. 703 (1882)","https://www.loc.gov/item/usrep105703/"],
 D118:["Order, No. 1:15-CV-561-RP (W.D. Tex. Nov. 21, 2017), Dkt. 118","https://law.justia.com/cases/federal/district-courts/texas/txwdce/1:2015cv00561/759698/118"],
 D123:["Hearing transcript, Nov. 17, 2017, No. 1:15-CV-561-RP, Dkt. 123"],
 EXP:["Reports of Maury Klein (Dkt. 76-1) and Stephen J. Lubben (Dkt. 76-3), and their depositions, No. 1:15-CV-561-RP"],
 CA5:["Thorne v. Union Pacific Corp., No. 18-50019 (5th Cir. Nov. 20, 2018)","https://www.ca5.uscourts.gov/Opinions/unpub/18/18-50019.0.pdf"],
 SCT:["Supreme Court of the United States, No. 18-1169, certiorari denied Apr. 15, 2019"],
 CERT:["Certificate No. 1656, Southern Pacific Railroad Company, June 10, 1859, front and back"],
 T2:["Thorne v. Union Pacific Corp., No. 1:21-CV-311-RP (W.D. Tex.): Dkt. 56; Doc. 60 (Sept. 6, 2022); final judgment (Sept. 29, 2022)"]
};
var C=[
{id:"answer",yr:"2011",title:"Union Pacific's Written Answer",court:"August 3, 2011",out:"The answer at issue",
 lead:"An attorney asked Union Pacific about Certificate No. 1656. The answer it gave that day is what the fraud claim is about.",
 pts:[
 ["Union Pacific's Senior General Attorney told the attorney by telephone that an 1868 bankruptcy in Harrison County discharged the holder's rights, and that he had <q>a file of about 25 certificates just like yours.</q>",["EXA","NC"]],
 ["His written answer that evening cited <q>older correspondence in our files that dates to 1907,</q> recited sales in 1860 and 1861 and the 1868 sales to R. B. Hall's group, and ended: <q>In 1872, Texas and Pacific acquired SPRC.</q> It pointed to Harrison County records to confirm it.",["EXB","NC"]],
 ["The answer does not mention what the record shows next. In June 1873 the California and Texas Railway Construction Company reported $1,068,947.57 of <q>Southern Pacific Railway stock converted</q> into its capital.",["EXC","NC"]],
 ["Union Pacific's own file lists $1,250,000 of Southern Pacific stock still outstanding on March 21, 1872, with Thomas A. Scott holding $625,600 of it.",["EXD","NC"]]
 ],rel:["first","nebraska"]},
{id:"first",yr:"2015",title:"The First Lawsuit",court:"U.S. District Court, W.D. Texas · No. 1:15-CV-561-RP",out:"Decided on laches",
 lead:"A suit on the certificate itself: the number, class and value of its 300 shares, and the interest promised on its back.",
 pts:[
 ["The back of the certificate carries a printed promise of interest <q>at the rate of seven per cent per annum</q>, payable <q>in money or five per cent stock</q> to the holder, and a handwritten line signed by the company secretary: <q>Interest suspended until one hundred miles of road are in operation.</q>",["CERT"]],
 ["The suit asked the court to declare the shares' value and <q>the cumulative dollar amounts of the dividends and interest earned</q> on them. A motion in the case concerned <q>the import of text found on the back of the Certificate.</q>",["D118"]],
 ["Union Pacific's historian expert said the shares ended with the 1868 sales. His report never mentions the construction company. Its law expert testified he had <q>not really relied upon any of that transaction with the construction company.</q>",["EXP","NC"]],
 ["At the hearing of November 17, 2017, the judge asked twice about the Southern Pacific stock reported in 1873. Union Pacific answered first with the 1872 sale and then with the 1868 sales.",["D123","NC"]],
 ["The court ruled on laches alone, found it <q>unnecessary to consider the other arguments,</q> and held it could not conclude the claims were time-barred. Laches is a defense that can bar a claim brought too long after the events. No court has decided what the shares or the promise on the back are worth.",["D118","NC"]],
 ["Thorne's position: the first suit was a suit on the certificate's own terms, the shares and the interest promised on its back. No claim about the 2011 answer was pleaded or decided in it.",["NC"]]
 ],rel:["answer","appeal"]},
{id:"appeal",yr:"2018",title:"The Appeal",court:"U.S. Court of Appeals, Fifth Circuit · No. 18-50019",out:"Affirmed on laches",
 lead:"The Fifth Circuit reviewed the laches ruling.",
 pts:[
 ["The court affirmed on laches and did not address limitations.",["CA5","NC"]],
 ["Union Pacific's brief told the court that <q>in 1872, Southern Pacific ceased to exist as a separate company</q> and turned next to a merger in 1976.",["NC"]]
 ],rel:["first","supreme"]},
{id:"supreme",yr:"2019",title:"The Supreme Court",court:"Supreme Court of the United States · No. 18-1169",out:"Review denied",
 lead:"A petition asking the Supreme Court to hear the first lawsuit.",
 pts:[["The Supreme Court denied certiorari, its discretionary review of the case, on April 15, 2019, ending the first lawsuit.",["SCT","NC"]]],rel:["appeal","second"]},
{id:"second",yr:"2020",title:"The Second Lawsuit",court:"U.S. District Court, S.D. Texas, then W.D. Texas · No. 4:20-cv-03381, later No. 1:21-CV-311-RP",out:"Judgment on counterclaim",
 lead:"A different instrument on a different company's books: ten of twenty Texas and Pacific shares recorded on the Texas and Pacific's own books in the name of L. S. Thorne. It was not a suit on Certificate No. 1656.",
 pts:[
 ["Union Pacific brought a counterclaim, a claim of its own against the plaintiff, over Southern Pacific stock certificates.",["T2","NC"]],
 ["On September 6, 2022, the plaintiff first alleged that directors of the construction company took part in a deception reaching <q>far deeper than Hall's 1868 foreclosure sales.</q> The filing did not mention the 2011 answer.",["T2","NC"]],
 ["Judgment was entered for Union Pacific on September 29, 2022. Neither lawsuit pleaded or decided any claim about the 2011 answer.",["T2","NC"]]
 ],rel:["supreme","texas"]},
{id:"texas",yr:"2026",title:"The Texas Fraud Claim",court:"Harris County District Court · No. 2026-63692",out:"Dismissed for jurisdiction",
 lead:"The first filing of the fraud claim over the 2011 answer.",
 pts:[
 ["Filed September 1, 2026, in Houston, where the 2011 answer was sent.",["NC"]],
 ["Dismissed October 19, 2026, for want of personal jurisdiction over Union Pacific. The court did not reach the merits.",["EXF","NC"]]
 ],rel:["answer","nebraska"]},
{id:"nebraska",yr:"2026",title:"The Nebraska Complaint",court:"District Court of Douglas County, Nebraska",out:"Brought November 2026",
 lead:"The same fraud claim, in a complaint dated November 9, 2026, in the District Court of Douglas County, Nebraska, where Union Pacific has its headquarters.",
 pts:[
 ["The claim is for fraud in the August 3, 2011 answer and nothing else. It rests on what the answer left out, the 1873 conversion, not on the 1868 sales.",["NC"]],
 ["It does not claim any land, does not ask the court to value any stock, and does not reopen the earlier lawsuits. The damages sought are $1,875.",["NC"]],
 ["It pleads Union Pacific's file of answers to holders: more than one hundred inquiries from more than eighty holders and families, 1907 to 1980, and a 1929 memo recommending that one counsel-approved form be used for all inquiries about this stock.",["EXD","NC"]],
 ["It asks the jury to find in writing whether the 2011 answer was materially misleading and whether the conversion was withheld on purpose.",["NC"]]
 ],rel:["answer","texas"]}
];
var CSS='.lvc{max-width:880px;margin:0 auto;padding:28px 16px 60px;font-family:Lora,Georgia,serif;color:#3b2a17}'+
'.lvc h1{font-family:"Playfair Display",serif;font-weight:900;color:#704214;font-size:46px;line-height:1.05;text-align:center;margin:8px 0 10px}'+
'.lvc .sub{text-align:center;color:#704214;font-size:18px;max-width:620px;margin:0 auto 30px}'+
'.lvc .rail{position:relative;padding-left:0}'+'.lvc .three{background:#3e2723;color:#f3e6c8;border:1px solid #D4AF37;border-radius:12px;padding:16px 18px;margin:0 auto 28px;max-width:720px;font-size:16px;line-height:1.55}'+'.lvc .three-h{font-family:"Playfair Display",serif;color:#D4AF37;font-weight:700;font-size:19px;margin-bottom:8px}'+'.lvc .three p{margin:6px 0}'+'.lvc .three b{color:#D4AF37}'+
'.lvc .item{scroll-margin-top:80px;position:relative;display:grid;grid-template-columns:64px 1fr;gap:0 14px;margin-bottom:14px}'+
'.lvc .item:before{content:"";position:absolute;left:31px;top:64px;bottom:-14px;width:2px;background:linear-gradient(#D4AF37,#b89a5a)}'+
'.lvc .item:last-child:before{display:none}'+
'.lvc .yr{width:64px;height:64px;border-radius:50%;background:#3e2723;border:2px solid #D4AF37;color:#D4AF37;font:700 17px "Playfair Display",serif;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(62,39,35,.35)}'+
'.lvc .card{background:#fdf8ef;border:1px solid #d8c39a;border-radius:12px;box-shadow:0 2px 10px rgba(112,66,20,.10);overflow:hidden}'+
'.lvc .head{width:100%;text-align:left;background:none;border:0;padding:14px 16px;cursor:pointer;display:block;font:inherit;color:inherit}'+
'.lvc .t{font-family:"Playfair Display",serif;font-weight:700;font-size:21px;color:#3e2723;line-height:1.2}'+
'.lvc .c{font-size:14px;color:#7a5a32;margin-top:3px}'+
'.lvc .o{display:inline-block;margin-top:8px;font-size:13.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#fdf8ef;background:#704214;border-radius:999px;padding:3px 11px}'+
'.lvc .item.open .card{border-color:#D4AF37;box-shadow:0 4px 18px rgba(112,66,20,.18)}'+
'.lvc .body{display:none;padding:0 16px 16px}'+
'.lvc .item.open .body{display:block}'+
'.lvc .lead{font-style:italic;color:#5a4426;border-left:3px solid #D4AF37;padding-left:12px;margin:2px 0 12px}'+
'.lvc ul.p{margin:0;padding:0;list-style:none}'+
'.lvc ul.p li{position:relative;padding:8px 0 8px 18px;line-height:1.6}'+
'.lvc ul.p li:before{content:"";position:absolute;left:2px;top:17px;width:7px;height:7px;background:#D4AF37;transform:rotate(45deg)}'+
'.lvc q{font-style:italic;color:#4a2f12}'+
'.lvc sup a{font-size:11px;color:#8b1e1e;text-decoration:none;font-weight:700;padding:0 1px}'+
'.lvc .src{margin-top:12px;border-top:1px solid #e6d6b6;padding-top:10px}'+
'.lvc .src h4,.lvc .rel h4{font:700 13px Lora,serif;letter-spacing:.12em;text-transform:uppercase;color:#704214;margin:0 0 6px}'+
'.lvc .src ol{list-style:decimal;margin:0;padding-left:22px;font-size:14px;color:#5a4426}'+
'.lvc .src li{padding:3px 0}'+
'.lvc .src a{color:#704214}'+
'.lvc .rel{margin-top:12px}'+
'.lvc .rel button{font:600 13.5px Lora,serif;background:#3e2723;color:#D4AF37;border:0;border-radius:999px;padding:8px 14px;margin:0 8px 8px 0;cursor:pointer;min-height:40px}'+
'.lvc .lvc-tl a{display:inline-flex;align-items:center;font:600 14px Lora,serif;background:#fdf8ef;color:#704214;border:1px solid #D4AF37;border-radius:10px;padding:8px 12px;margin:0 8px 8px 0;min-height:40px;text-decoration:none;line-height:1.3}'+'.lvc .lvc-tl a b{color:#8b4513;margin-right:6px;white-space:nowrap}'+'.lvc .lvc-tl a:hover{background:#f5e6c4}'+
'.lvc .close{font:600 14px Lora,serif;background:none;border:1px solid #704214;color:#704214;border-radius:999px;padding:7px 14px;cursor:pointer;margin-top:4px;min-height:40px}'+
'.lvc .hl{animation:lvhl 1.2s ease}@keyframes lvhl{0%{background:#fff3c4}100%{background:transparent}}'+
'@media(max-width:560px){.lvc h1{font-size:36px}.lvc .item{grid-template-columns:48px 1fr;gap:0 10px}.lvc .yr{width:48px;height:48px;font-size:14px}.lvc .item:before{left:23px;top:48px}.lvc .t{font-size:19px}}';
var TL={answer:[/Formal Demand to Union Pacific/i,/Union Pacific.s Written Answer/i],first:[/Thorne I Filed/i,/Experts for Both Sides/i,/Produces Its File of Answers/i,/Thorne I Decided on Laches/i],appeal:[/Fifth Circuit Affirms/i],supreme:[/Supreme Court Denies Review/i],second:[/Thorne II Filed/i,/Thorne II Moves to Austin/i,/Document 60 Filed/i,/Final Judgment in Thorne II/i],texas:[/Fraud Claim Filed in Harris County/i,/Harris County Dismisses/i],nebraska:[/Fraud Complaint Brought in Nebraska/i]};
function tlEvents(id){var T=((window.__LV&&window.__LV.TimelineEvent)||[]).filter(function(e){return !e.hidden;}),out=[];(TL[id]||[]).forEach(function(rx){for(var i=0;i<T.length;i++){if(rx.test(T[i].title||"")){if(out.indexOf(T[i])<0)out.push(T[i]);break;}}});return out.sort(function(a,b){return a.year-b.year;});}
function escH(x){return String(x==null?"":x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
window.__LVCASE={sources:S,cards:C,timeline:tlEvents};
function nameOf(id){for(var i=0;i<C.length;i++)if(C[i].id===id)return C[i].title;return id;}
window.__lvCase=function(el){
 if(!el)return;
 var h='<style>'+CSS+'</style><div class="lvc"><h1>The Case</h1><p class="sub">Every court filing on Certificate No. 1656, in order, with the record behind each statement.</p><div class="three"><div class="three-h">Three suits, three different questions</div><p><b>2015, the certificate itself.</b> The value of its 300 shares and the interest promised on its back. Decided on laches alone (a defense that can bar a claim brought too long after the events); the merits were never reached.</p><p><b>2020, another company\'s books.</b> Ten of twenty Texas and Pacific shares recorded in L. S. Thorne\'s name. Not Certificate No. 1656.</p><p><b>2026, the 2011 answer.</b> Whether Union Pacific\'s written answer about the certificate was materially misleading.</p></div><div class="rail">';
 C.forEach(function(c){
  c.pts.forEach(function(p){if(p[1].length>1)p[1]=p[1].filter(function(k){return k!=="NC";});});
  var order=[];c.pts.forEach(function(p){p[1].forEach(function(k){if(order.indexOf(k)<0)order.push(k);});});
  h+='<div class="item" id="case-'+c.id+'"><div class="yr">'+c.yr+'</div><div class="card"><button class="head" data-id="'+c.id+'" aria-expanded="false"><div class="t">'+c.title+'</div><div class="c">'+c.court+'</div><span class="o">'+c.out+'</span></button><div class="body"><p class="lead">'+c.lead+'</p><ul class="p">';
  c.pts.forEach(function(p){h+='<li>'+p[0]+'<sup>'+p[1].map(function(k){var n=order.indexOf(k)+1;return '<a href="#" data-src="'+c.id+'-'+n+'">'+n+'</a>';}).join(",")+'</sup></li>';});
  h+='</ul><div class="src"><h4>Sources</h4><ol>'+order.map(function(k,i){var s=S[k];return '<li id="src-'+c.id+'-'+(i+1)+'">'+(s[1]?'<a href="'+s[1]+'" target="_blank" rel="noopener">'+s[0]+'</a>':s[0])+'</li>';}).join("")+'</ol></div>';
  var tle=tlEvents(c.id);if(tle.length)h+='<div class="rel lvc-tl"><h4>On the Evidence Timeline</h4>'+tle.map(function(e){var d=window.__lvTlFmt?window.__lvTlFmt(e):String(Math.floor(e.year));return '<a href="/FraudTimeline/#ev-'+escH(e.id)+'" data-lvgo="1"><b>'+escH(d)+'</b>'+escH(window.__lvTlDash?window.__lvTlDash(e.title):e.title)+'</a>';}).join("")+'</div>';
  h+='<div class="rel"><h4>Related</h4>'+c.rel.map(function(r){return '<button data-go="'+r+'">'+nameOf(r)+'</button>';}).join("")+'</div><button class="close" data-close="'+c.id+'">Close</button></div></div></div>';
 });
 h+='</div></div>';
 el.innerHTML=h;
 function open(id,scroll){el.querySelectorAll(".item").forEach(function(it){var on=it.id==="case-"+id;it.classList.toggle("open",on);it.querySelector(".head").setAttribute("aria-expanded",on?"true":"false");});
  if(scroll){var t=el.querySelector("#case-"+id);if(t)setTimeout(function(){t.scrollIntoView({behavior:"smooth",block:"start"});},20);}}
 if(location.hash.indexOf("#case-")===0)open(location.hash.slice(6),true);
 el.addEventListener("click",function(e){
  var hd=e.target.closest(".head");if(hd){var it=hd.parentNode.parentNode;if(it.classList.contains("open")){it.classList.remove("open");hd.setAttribute("aria-expanded","false");}else open(hd.getAttribute("data-id"),true);return;}
  var go=e.target.closest("[data-go]");if(go){open(go.getAttribute("data-go"),true);return;}
  var cl=e.target.closest("[data-close]");if(cl){var id=cl.getAttribute("data-close");el.querySelector("#case-"+id).classList.remove("open");el.querySelector("#case-"+id+" .head").setAttribute("aria-expanded","false");el.querySelector("#case-"+id).scrollIntoView({behavior:"smooth",block:"center"});return;}
  var s=e.target.closest("[data-src]");if(s){e.preventDefault();var li=el.querySelector("#src-"+s.getAttribute("data-src"));if(li){li.scrollIntoView({behavior:"smooth",block:"center"});li.classList.remove("hl");void li.offsetWidth;li.classList.add("hl");}}
 });
};
})();
