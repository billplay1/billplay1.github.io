/* Site-wide search, question tiles, and cross-links between pages. No network: reads window.__LV,
   window.__LVCASE (case.js) and the Financial Record list below at the moment of each search. */
(function(){
var FIN=[[0, "1859", "Certificate No. 1656", "Issued to Mrs. Mary Key for 300 shares at $100 par, signed by D. D. Wilder, Secretary.", "Certificate No. 1656 (original); Thorne v. Union Pacific Corp., Complaint, District Court of Douglas County, Nebraska (Nov. 9, 2026), para. 10", "", "$30,000", "Certificate No\\. 1656 Issued"], [0, "1860", "Two mortgages to Richardson and Stevenson", "The reorganized company mortgaged its road, property and land grant to R. V. Richardson and Vernon K. Stevenson as trustees for a proposed bond issue. A second mortgage covered one million acres of the land grant.", "Stevenson v. Texas Railway Co., 105 U.S. 703, 705 (1882)", "https://www.govinfo.gov/content/pkg/USREPORTS-105/pdf/USREPORTS-105-703.pdf", "$25,000,000", "Company Mortgages Its Road"], [0, "1861", "Sheriff's sale to H. S. Fulkerson", "The Harrison County sheriff sold the road and franchises to satisfy four judgments. In 1882 the Supreme Court traced the Texas and Pacific's title through this sale.", "Stevenson v. Texas Railway Co., 105 U.S. 703, 706, 708 (1882); Harrison County Deed Book T, p. 174", "https://www.govinfo.gov/content/pkg/USREPORTS-105/pdf/USREPORTS-105-703.pdf", "$7,500", "Sheriff.s Sale to H\\. S\\. Fulkerson"], [0, "1866", "Loan from the Hall group", "According to the record in the Stevenson case, R. B. Hall and associates lent the railroad between $100,000 and $150,000, secured by a mortgage.", "Appellants' Transcript of Evidence, Stevenson v. Texas & Pacific Railway Co., Record pp. 281, 302", "", "$100,000 to $150,000", "Hall Group Lends"], [0, "1867", "Interest due to the State", "The State of Texas wrote to the company's president, John M. Waskom, that $43,625 in interest and $15,000 for the sinking fund were due.", "Governor James W. Throckmorton Papers, Briscoe Center for American History, University of Texas at Austin", "", "$58,625", "Texas Demands Interest"], [0, "1868", "First Hall sale, May 5", "At a sheriff's sale in Harrison County, R. B. Hall bought the road, track and equipment.", "Harrison County Deed Records, Book V, p. 379", "", "$2,150", "First Hall Sale"], [0, "1868", "Judgment against the railroad, July 23", "A Harrison County judgment was entered against the Southern Pacific in favor of R. B. Hall, William Garvin, Joseph Monks, Charles Cobb and Thomas Coleman.", "Harrison County District Court records (July 23, 1868); James Harper Starr land abstracts", "", "$126,400", "Judgment of \\$126,400"], [0, "1868", "Second Hall sale, October 6", "Under that judgment, Hall and more than 25 other buyers, including the City of Shreveport, bought the company's charter, franchises and privileges at a sheriff's sale in Caddo Parish, Louisiana.", "Harrison County Deed Records, Book V, p. 497", "", "$10,000", "Second Hall Sale"], [0, "1870", "New stock bought by Marshall O. Roberts", "According to the record in the Stevenson case, the New York financier Marshall O. Roberts bought new Southern Pacific stock.", "Appellants' Transcript of Evidence, Stevenson v. Texas & Pacific Railway Co.", "", "$550,000", "Marshall O\\. Roberts Buys"], [0, "1872", "Sale to the Texas Pacific, March 21", "The Southern Pacific conveyed its franchises, property, bonds and stocks to the Texas Pacific Railroad Company for seven percent land grant bonds. Thomas A. Scott signed as president of both companies.", "Deed of Mar. 21, 1872, Harrison County Deed Book Z, pp. 121 to 122 (UP_003876 to UP_003880)", "", "$3,000,000", "Texas Pacific Buys the Southern Pacific"], [0, "1872", "Southern Pacific stock outstanding, March 21", "A statement in Union Pacific's own records lists the Southern Pacific stock outstanding that day, $625,600 of it in Scott's name and $74,502 for the estate of R. B. Hall.", "Statement UP_003884; Thorne v. Union Pacific Corp., Complaint, District Court of Douglas County, Nebraska (Nov. 9, 2026), para. 26", "", "$1,250,000", "Texas Pacific Buys the Southern Pacific"], [0, "1872", "Marshall's agreement with Scott", "Harrison County donated bonds, and the city bought 66 acres for $60,000 and deeded them to the railway, so that the Texas and Pacific would establish its eastern terminus, Texas office and main shops at Marshall.", "Texas & Pacific Ry. Co. v. City of Marshall, 136 U.S. 393, 394 to 396 (1890)", "https://www.govinfo.gov/content/pkg/USREPORTS-136/pdf/USREPORTS-136-393.pdf", "$300,000", "Marshall.s Agreement with Thomas A\\. Scott"], [0, "1872", "Construction company capital raised, August 5", "The stockholders of the California and Texas Railway Construction Company, a Pennsylvania corporation, raised its capital from $100,000. The next day it contracted with the Texas and Pacific to build the road, to be paid in the railway's bonds and stock.", "Commonwealth ex rel. Elkin v. California and Texas Railway Construction Co., 5 Dauphin County Reports 181 (Pa. 1902), at 191 to 192", "", "$10,000,000", "Construction Company Signs the Texas and Pacific Contract"], [0, "1873", "“Southern Pacific Railway stock converted,” June 4", "The construction company's treasurer reported this part of its capital as “Southern Pacific Railway stock converted,” listed separately from $97,650 of Texas and Pacific stock converted. A report to its directors on March 21, 1873, had listed “Full paid stock (S. P.)” of $1,249,152.", "Commonwealth ex rel. Elkin v. California and Texas Railway Construction Co., 5 Dauphin County Reports 181 (Pa. 1902), at 194 and 196", "", "$1,068,947.57", "Southern Pacific Railway Stock Converted"], [0, "1875", "Income and Land Grant bonds", "Texas and Pacific stockholders authorized 8,908 bonds of $1,000 each, secured by a first mortgage on the company's Texas lands, including lands earned under the charter of the Southern Pacific.", "Texas & Pacific Ry. Co. v. Marlor, 123 U.S. 687, 692 to 695 (1887)", "https://tile.loc.gov/storage-services/service/ll/usrep/usrep123/usrep123687/usrep123687.pdf", "$8,908,000", "Income and Land Grant Mortgage"], [0, "1887", "Foreclosure sale at Marshall, November 8", "Gen. Isaac J. Wistar, for the bondholders' committee, bought the Texas and Pacific's Eastern and Transcontinental divisions for $6,000,000 and its Rio Grande division for $4,000,000.", "Fort Worth Daily Gazette, Nov. 9, 1887, p. 4", "https://www.loc.gov/resource/sn86064205/1887-11-09/ed-1/?sp=4", "$10,000,000", "Texas Lines of the T&P Sold at Marshall"], [0, "1888", "Texas Pacific Land Trust, February 1", "Trustees Charles J. Canda, Simeon J. Drake and William Strauss signed the Declaration of Trust, holding the conveyed lands for the holders of certificates of proprietary interest, up to this amount.", "Texas Pacific Land Trust, Declaration of Trust, Feb. 1, 1888 (SEC EDGAR, Exhibit 3.1)", "https://www.sec.gov/Archives/edgar/data/97517/000093244003000112/texaspacificdecl_oftrust.txt", "$10,370,000", "Texas Pacific Land Trust Created"], [0, "1891 to 1902", "Construction company stock on the Texas and Pacific's books", "The Texas and Pacific's annual reports to the Railroad Commission of Texas list stock of the construction company among the stocks the railroad owned, starting with $68,000 in the report for 1891 and continuing through the report for 1902.", "Thorne v. Union Pacific Corp., Complaint, District Court of Douglas County, Nebraska (Nov. 9, 2026), para. 42; T&P annual reports to the Railroad Commission of Texas, Texas State Library and Archives", "", "$68,000 (1891)", "T&P Reports List Construction Company Stock"], [0, "2026", "The Nebraska complaint", "The damages sought in Thorne v. Union Pacific, together with written jury findings on Union Pacific's August 3, 2011 answer.", "Thorne v. Union Pacific Corp., Complaint, District Court of Douglas County, Nebraska (Nov. 9, 2026)", "", "$1,875", "Fraud Complaint Brought in Nebraska"], [1, "1854", "Land offered for each mile of road", "A general law offered railroads sixteen sections of public land for each mile built. It stayed in effect until the Constitution of 1869.", "Handbook of Texas Online, “Railroads”", "https://www.tshaonline.org/handbook/entries/railroads", "10,240 acres a mile", "Texas Offers 16 Sections"], [1, "1859", "Land earned by the Southern Pacific", "The Supreme Court wrote that before September 1859 the company had completed twenty-five miles of road and had earned, “it is claimed,” this much land.", "Stevenson v. Texas Railway Co., 105 U.S. 703, 704 (1882)", "https://www.govinfo.gov/content/pkg/USREPORTS-105/pdf/USREPORTS-105-703.pdf", "256,000 acres", null], [1, "1875", "Texas lands under the Income and Land Grant Mortgage", "The estimate of the Texas lands pledged to the 1875 bonds, including lands earned under the Southern Pacific's charter.", "Texas & Pacific Ry. Co. v. Marlor, 123 U.S. 687, 692 to 695 (1887)", "https://tile.loc.gov/storage-services/service/ll/usrep/usrep123/usrep123687/usrep123687.pdf", "7,600,000 acres", "Income and Land Grant Mortgage"], [1, "1881", "Land received for lines east of Fort Worth", "From 1873 to 1881 the Texas and Pacific built 972 miles of track but received land only for its lines east of Fort Worth.", "Handbook of Texas Online, “Texas and Pacific Railway”", "https://www.tshaonline.org/handbook/entries/texas-and-pacific-railway", "5,173,120 acres", null], [1, "1882", "Unsold land, September 30", "The Texas and Pacific reported 921,534 acres sold and this much unsold, with capital stock of $34,161,700 and no dividends paid.", "Texas and Pacific annual report to the Texas Comptroller, Sept. 30, 1882, Texas State Library and Archives", "", "4,434,818 acres", "Texas and Pacific Land Reports"], [1, "1886", "Unsold land, September 30", "The annual report to the Texas Comptroller, signed by L. S. Thorne as acting general superintendent, put the unsold land at this figure, with 183,946 acres sold, as listed in the 1886 report.", "Texas and Pacific annual report to the Texas Comptroller, Sept. 30, 1886, Texas State Library and Archives", "", "3,038,960 acres", "Thorne Signs the T&P Report"], [1, "1887", "The El Paso County deed", "One of thirty-nine land deeds dated August 4, 1887, to Canda, Drake and Strauss. When it was recorded in July 1888, the El Paso Times reported it had been held in escrow since its signing.", "El Paso Times, July 14, 1888, p. 1; Declaration of Trust, Feb. 1, 1888", "https://www.sec.gov/Archives/edgar/data/97517/000093244003000112/texaspacificdecl_oftrust.txt", "1,302,009 acres", "Thirty-Nine Land Deeds"], [1, "1888", "The Texas Pacific Land Trust", "The land the trust held, as Texas Pacific Land describes it today.", "Texas Pacific Land, “About”; Declaration of Trust, Feb. 1, 1888", "https://www.sec.gov/Archives/edgar/data/97517/000093244003000112/texaspacificdecl_oftrust.txt", "3,500,000 acres", "Texas Pacific Land Trust Created"], [1, "1891", "The State's suit over land grant acreage", "Attorney General Charles A. Culberson sued to recover 301,893 acres from the Texas and Pacific. The State recovered this much.", "Handbook of Texas Online, “Texas and Pacific Railway”", "https://www.tshaonline.org/handbook/entries/texas-and-pacific-railway", "256,046 acres", "State Sues T&P Over Land Grant"]];
/* FIN rows: [part (0 dollars, 1 acres), year, title, what the record shows, source, source link, amount, timeline title pattern] */

function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function dash(s){return window.__lvTlDash?window.__lvTlDash(s):String(s==null?"":s);}
function seg(){return location.pathname.replace(/^\/+/,"").split("/")[0].toLowerCase();}
function LV(){return window.__LV||{};}
function evs(){return (LV().TimelineEvent||[]).filter(function(e){return e&&!e.hidden&&e.title;}).slice().sort(function(a,b){return a.year-b.year;});}
function ppl(){return (LV().Person||[]).filter(function(p){return p&&!p.hidden&&p.name;});}
function docs(){return (LV().Document||[]).filter(function(d){return d&&!d.hidden&&d.title;});}
function fmtE(e){return window.__lvTlFmt?window.__lvTlFmt(e):String(Math.floor(e.year));}
function strip(h){return String(h==null?"":h).replace(/<[^>]+>/g,"");}

/* ---------- SPA navigation for links marked data-lvgo ---------- */
function go(url){
 var a=document.createElement("a");a.href=url;
 if(a.origin!==location.origin){location.href=url;return;}
 var same=a.pathname.replace(/\/+$/,"").toLowerCase()===location.pathname.replace(/\/+$/,"").toLowerCase();
 history.pushState({},"",a.pathname+a.search+a.hash);
 dispatchEvent(new PopStateEvent("popstate",{state:{}}));
 if(!a.hash&&!same)window.scrollTo(0,0);}
window.__lvGo=go;
document.addEventListener("click",function(ev){
 if(ev.defaultPrevented||ev.button||ev.metaKey||ev.ctrlKey||ev.shiftKey||ev.altKey)return;
 var t=ev.target;if(!t.closest)return;
 var hb=t.closest(".lv-hdr-search");
 if(hb&&seg()==="search"){ev.preventDefault();var inp=document.querySelector(".lvs-q");if(inp){inp.focus();inp.select();window.scrollTo({top:0,behavior:"smooth"});}return;}
 var a=t.closest("a[data-lvgo]");if(!a)return;
 if(a.target==="_blank")return;
 ev.preventDefault();
 if(seg()==="search")try{sessionStorage.setItem("lvsY:"+location.search,String(window.scrollY));}catch(e){}
 go(a.getAttribute("href"));},true);

/* ---------- text normalization ---------- */
var STOP={the:1,a:1,an:1,of:1,and:1,"in":1,on:1,to:1,"for":1,is:1,was:1,what:1,who:1,did:1,does:1,how:1,why:1,where:1,when:1,about:1,with:1,by:1,at:1};
var ALIAS=[ /* canonical token, text patterns (case-aware), highlight patterns */
 ["tpland",[/\bTexas Pacific Land\b/i,/\bTPLT?\b/],[/\bTexas Pacific Land(?: Trust| Corporation)?/gi,/\bTPLT?\b/g]],
 ["unionpacific",[/\bUnion Pacific\b/i,/\bUP\b(?!_)/],[/\bUnion Pacific\b/gi,/\bUP\b(?!_)/g]],
 ["tandp",[/\bT\s?&\s?P\b/,/\bT and P\b/,/\bTexas (?:and |& )?Pacific\b(?! Land)/i],[/\bT\s?&\s?P\b/g,/\bT and P\b/g,/\bTexas (?:and |& )?Pacific\b(?! Land)/gi]],
 ["sprr",[/\bSouthern Pacific\b/i,/\bSPR[RC]\b/],[/\bSouthern Pacific\b/gi,/\bSPR[RC]\b/g]],
 ["ctrcc",[/\bC\s?&\s?T\s?R\s?C\s?C\b/i,/\bCalifornia and Texas Railway Construction\b/i,/\bconstruction company\b/i],[/\bC\s?&\s?TRCC\b/gi,/\bCTRCC\b/gi,/\bCalifornia and Texas Railway Construction Company\b/gi,/\bconstruction company\b/gi]]];
var QALIAS=[ /* applied to the lowercased query, longest first */
 [/\btexas pacific land(?: trust| corporation)?\b|\btplt?\b/g,"tpland"],
 [/\bunion pacific\b|\bup\b/g,"unionpacific"],
 [/\bcalifornia and texas railway construction(?: company| co)?\b|\bc and trcc\b|\bc and t r c c\b|\bctrcc\b|\bconstruction company\b|\bconstruction co\b/g,"ctrcc"],
 [/\btexas and pacific\b|\btexas pacific\b|\bt and p\b|\btp\b/g,"tandp"],
 [/\bsouthern pacific\b|\bsprr\b|\bsprc\b/g,"sprr"]];
function fold(s){s=String(s==null?"":s);try{s=s.normalize("NFD").replace(/[\u0300-\u036f]/g,"");}catch(e){}return s;}
function baseClean(s){return fold(s).replace(/[\u2019'`]/g,"").replace(/(\d),(?=\d{3}(?!\d))/g,"$1").replace(/(\d)\.(?=\d)/g,"$1p").replace(/&/g," and ");}
/* split into tokens; runs of single letters (initials) join: F. B. -> fb */
function tokens(s,isQuery){var parts=baseClean(s).split(/[^A-Za-z0-9]+/).filter(Boolean),out=[],run="";
 function flush(){if(run){out.push(run.toLowerCase());run="";}}
 for(var i=0;i<parts.length;i++){var p=parts[i];
  if(p.length===1&&/[A-Za-z]/.test(p)&&(isQuery||/[A-Z]/.test(p))){run+=p;continue;}
  flush();out.push(p.toLowerCase().replace(/pittman/g,"pitman"));}
 flush();return out;}
function indexText(raw){var t=tokens(raw,false);ALIAS.forEach(function(a){for(var i=0;i<a[1].length;i++)if(a[1][i].test(raw)){t.push(a[0]);break;}});return t;}

function parseQuery(q){var s=baseClean(q).toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 if(!s)return [];
 /* join initials typed with spaces before alias matching (f b sexton -> fb sexton) */
 var tk=tokens(q,true).join(" ");
 QALIAS.forEach(function(a){tk=tk.replace(a[0],a[1]);});
 var list=tk.split(" ").filter(Boolean).map(function(w){return w.replace(/pittman/g,"pitman");});
 var keep=list.filter(function(w){return !STOP[w];});if(!keep.length)keep=list;
 var seen={},out=[];keep.forEach(function(w){if(!seen[w]){seen[w]=1;out.push(w);}});return out;}

function hlRegs(term){var A=null;ALIAS.forEach(function(a){if(a[0]===term)A=a[2];});if(A)return A;
 if(term==="pitman")return [/\bPitt?man\w*/gi];
 if(/^\d/.test(term)){var d=term.replace(/p/g,".");var pat=d.split("").map(function(c){return c==="."?"\\.":c+",?";}).join("");return [new RegExp("\\$?"+pat.replace(/,\?$/,""),"g")];}
 var r=[new RegExp("\\b"+term.split("").map(function(c){return c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}).join("['\u2019]?")+"\\w*","gi")];
 if(/^[a-z]{2,4}$/.test(term))r.push(new RegExp("\\b"+term.split("").join("\\.?\\s?")+"\\b\\.?","gi"));
 return r;}
function ranges(raw,regs){var out=[];regs.forEach(function(rg){rg.lastIndex=0;var m;while((m=rg.exec(raw))){if(!m[0].length){rg.lastIndex++;continue;}out.push([m.index,m.index+m[0].length]);}});
 out.sort(function(a,b){return a[0]-b[0];});var mg=[];out.forEach(function(r){var l=mg[mg.length-1];if(l&&r[0]<=l[1])l[1]=Math.max(l[1],r[1]);else mg.push(r.slice());});return mg;}
function hl(raw,regs){raw=String(raw==null?"":raw);var rs=ranges(raw,regs),h="",i=0;rs.forEach(function(r){h+=esc(raw.slice(i,r[0]))+"<mark>"+esc(raw.slice(r[0],r[1]))+"</mark>";i=r[1];});return h+esc(raw.slice(i));}
function snippet(raw,regs,len){raw=dash(String(raw||"").replace(/\s+/g," ").trim());len=len||230;var rs=ranges(raw,regs);
 if(raw.length<=len)return hl(raw,regs);
 var st=rs.length?Math.max(0,rs[0][0]-80):0;if(st>0){var sp=raw.indexOf(" ",st);if(sp>-1&&sp<rs[0][0])st=sp+1;}
 var en=Math.min(raw.length,st+len);if(en<raw.length){var sp2=raw.lastIndexOf(" ",en);if(sp2>st+40)en=sp2;}
 return (st>0?"\u2026 ":"")+hl(raw.slice(st,en),regs)+(en<raw.length?" \u2026":"");}

/* ---------- the index ---------- */
var KINDS=[["person","People"],["case","The Case"],["event","Evidence Timeline"],["fin","Financial Record"],["doc","Documents"],["page","Pages and words explained"]];
var KLABEL={person:"Key figure",case:"The Case",event:"Timeline event",fin:"Financial Record",doc:"Document",page:"Page"};
function F(label,text,w){return {label:label,text:String(text==null?"":text),w:w};}
function evYearMatch(e,yr){var ys=String(yr).match(/\d{4}/g);if(!ys)return false;var a=+ys[0],b=+ys[ys.length-1],y=Math.floor(e.year);return y>=a&&y<=b;}
function finEvent(row){if(!row[7])return null;var rx=new RegExp(row[7],"i"),E=evs();for(var i=0;i<E.length;i++)if(rx.test(E[i].title)&&evYearMatch(E[i],row[1]))return E[i];return null;}
window.__lvFinEvent=function(n){return FIN[n]?finEvent(FIN[n]):null;};
function docEvents(d){var E=evs(),out=[];E.forEach(function(e){var L=e.linked_documents||[];if(L.indexOf(d.id)>-1||(d.bates_number&&L.indexOf(d.bates_number)>-1)||(d.related_event_ids||[]).indexOf(e.id)>-1)out.push(e);});return out;}
function personNameMap(){var m={};ppl().forEach(function(p){m[p.id]=p.name;m[p.name]=p.name;});return m;}
var IDX=null,IDXKEY="";
function build(){var D=LV(),key=[(D.TimelineEvent||[]).length,(D.Person||[]).length,(D.Document||[]).length,window.__LVCASE?1:0].join(":");
 if(IDX&&IDXKEY===key)return IDX;IDXKEY=key;var I=[],pm=personNameMap();
 evs().forEach(function(e){var pos=String(e.significance||"").replace(/^\s*Thorne[\u2019']s position:\s*/i,"");
  var names=(e.persons||[]).map(function(x){return pm[x]||x;}).join(", ");
  I.push({k:"event",id:e.id,title:dash(e.title),date:fmtE(e),href:"/FraudTimeline/#ev-"+e.id,
   f:[F("",e.title,10),F("Date",fmtE(e)+" "+Math.floor(e.year),11),F("",e.description,3),F("Thorne's position",pos,2),F("People",names,4),F("Sources",e.legal_basis,2)]});});
 ppl().forEach(function(p){var yrs=p.years_active_start?(p.years_active_start+(p.years_active_end&&p.years_active_end!==p.years_active_start?" to "+p.years_active_end:"")):"";
  I.push({k:"person",id:p.id,title:p.name,date:yrs,sub:p.role_title,href:"/Persons/#p-"+p.id,
   f:[F("",p.name,12),F("Role",p.role_title,6),F("",p.biography,3),F("Role in the story",p.role_in_fraud,3),F("Active",yrs,2)]});});
 var CS=window.__LVCASE;if(CS&&CS.cards){CS.cards.forEach(function(c){var src=[];
   c.pts.forEach(function(p){(p[1]||[]).forEach(function(k){var s=CS.sources[k];if(s&&src.indexOf(s[0])<0)src.push(s[0]);});});
   I.push({k:"case",id:c.id,title:c.title,date:c.yr,sub:c.court+" \u00b7 "+c.out,href:"/TheCase/#case-"+c.id,
    f:[F("",c.title,10),F("Court",c.court+" "+c.out,5),F("Date",c.yr,9),F("",strip(c.lead),4),F("",c.pts.map(function(p){return strip(p[0]);}).join(" "),3),F("Sources",src.join("; "),2)]});});}
 I.push({k:"fin",id:"cert",title:"Certificate No. 1656",date:"1859",sub:"The certificate: shares, par value and face value",href:"/MoneyTrail/#fin-cert",
  f:[F("","Certificate No. 1656",10),F("Date","June 10, 1859 1859",6),F("","Southern Pacific Railroad Company of Texas, chartered in 1852 as the Texas Western and renamed in 1856. 300 shares, par value $100 a share, face value $30,000. Issued June 10, 1859, to Mrs. Mary Key. Signed D. D. Wilder, Secretary. The back promises interest at seven percent a year to the holder, with the handwritten line \"Interest suspended until one hundred miles of road are in operation.\"",4)]});
 FIN.forEach(function(r,n){I.push({k:"fin",id:String(n),title:r[2],date:r[1],sub:r[6],href:"/MoneyTrail/#fin-"+n,
  f:[F("",r[2],10),F("Date",r[1],9),F("Amount",r[6],6),F("",r[3],3),F("Source",r[4],2)]});});
 docs().forEach(function(d){var u=String(d.file_url||"").trim();
  I.push({k:"doc",id:d.id,title:d.title,date:d.date_of_document||"",href:u,doc:d,
   f:[F("",d.title,10),F("Date",d.date_of_document,5),F("",d.description,3),F("Excerpt",d.key_excerpt,2)]});});
 (window.__lvTlGloss||[]).forEach(function(g){I.push({k:"page",id:"gl-"+g[0],title:g[0],sub:"Words used on the Evidence Timeline",href:"/FraudTimeline/#glossary",f:[F("",g[0],10),F("",g[1],4)]});});
 I.push({k:"page",id:"story",title:"The Story",sub:"Ten video chapters",href:"/TheStory/",f:[F("","The Story",10),F("","Certificate No. 1656: the railroad, the land and the family, in ten chapters. Video chapters from its issue at Marshall in 1859 to the research and the court cases of today, presenting John Stephen Thorne's account.",3)]});
 I.push({k:"page",id:"position",title:"Thorne's position",sub:"Home page",href:"/Dashboard/#position",f:[F("","Thorne's position",10),F("","John Stephen Thorne's position is that Union Pacific's 2011 answer left out what came next in the record: in 1873 the construction company that built the Texas and Pacific reported Southern Pacific stock converted into its capital. Whether that answer was materially misleading is the question his Nebraska complaint puts to a jury.",3)]});
 I.forEach(function(it){it.f.forEach(function(f){f.tk=indexText(f.text);});it.n=fold(it.title).toLowerCase().replace(/[^a-z0-9]+/g," ").trim();});
 IDX=I;return I;}

function termIn(tk,term){var sh=term.length<=2;for(var i=0;i<tk.length;i++){var t=tk[i];if(sh?t===term:t.lastIndexOf(term,0)===0)return true;}return false;}
function run(q){var terms=parseQuery(q);if(!terms.length)return null;var I=build(),regs=[];terms.forEach(function(t){regs=regs.concat(hlRegs(t));});
 var nq=fold(q).toLowerCase().replace(/[^a-z0-9]+/g," ").trim(),res=[];
 I.forEach(function(it){var sc=0,ok=true;
  for(var j=0;j<terms.length;j++){var best=0;it.f.forEach(function(f){if(f.w>best&&termIn(f.tk,terms[j]))best=f.w;});if(!best){ok=false;break;}sc+=best;}
  if(!ok)return;if(nq&&(" "+it.n+" ").indexOf(" "+nq+" ")>-1)sc+=8;if(nq&&it.n===nq)sc+=10;
  res.push({it:it,sc:sc});});
 res.forEach(function(x,i){x.o=i;});res.sort(function(a,b){return b.sc-a.sc||a.o-b.o;});
 return {terms:terms,regs:regs,res:res};}
window.__lvSearchRun=function(q){var r=run(q);return r?r.res.map(function(x){return {kind:x.it.k,id:x.it.id,title:x.it.title,href:x.it.href,score:x.sc};}):[];};

/* ---------- question tiles ---------- */
function findEv(rx){var E=evs();for(var i=0;i<E.length;i++)if(rx.test(E[i].title))return E[i];return null;}
function findP(rx){var P=ppl();for(var i=0;i<P.length;i++)if(rx.test(P[i].name))return P[i];return null;}
var ASK=[
 {q:"What is Certificate No. 1656?",a:"The certificate, its 300 shares and its face value",href:"/MoneyTrail/#fin-cert"},
 {q:"Where should I start?",a:"The story in ten short video chapters",href:"/TheStory/"},
 {q:"What happened to the railroad in 1868?",ev:/^First Hall Sale/i,a:"The 1868 sheriff's sales, one step at a time on the timeline"},
 {q:"Who was F. B. Sexton?",p:/^F\.?\s?B\.?\s?Sexton$/i},
 {q:"Who are the people in this story?",a:"Every key figure, with a profile for each",href:"/Persons/"},
 {q:"What were the lawsuits about?",a:"Three suits, three different questions",href:"/TheCase/"},
 {q:"What did Union Pacific write in 2011?",a:"The written answer of August 3, 2011",href:"/TheCase/#case-answer"},
 {q:"What became of the railroad's land?",ev:/Texas Pacific Land Trust Created/i,a:"The Texas Pacific Land Trust of 1888"},
 {q:"What is the construction company?",ev:/Domain Land Company Becomes the Construction Company/i,a:"The California and Texas Railway Construction Company"},
 {q:"What do the dollar figures show?",a:"The record in dollars and acres, 1859 to today",href:"/MoneyTrail/#fin-ledger"},
 {q:"Where are the original documents?",a:"Every document listed on the site",href:"/Search/?show=documents"},
 {q:"What is Thorne's position?",a:"John Stephen Thorne's position, in brief",href:"/Dashboard/#position"}];
function askTiles(){var h="";ASK.forEach(function(t){var href=t.href,a=t.a||"";
  if(t.ev){var e=findEv(t.ev);if(!e)return;href="/FraudTimeline/#ev-"+e.id;}
  if(t.p){var p=findP(t.p);if(!p)return;href="/Persons/#p-"+p.id;a=p.role_title||"Profile";}
  h+='<a class="lvq-t" href="'+esc(href)+'" data-lvgo="1"><span class="q">'+esc(t.q)+'</span><span class="a">'+esc(dash(a))+'</span></a>';});
 return h;}
function askHtml(withSearch){return '<section class="lvq" aria-labelledby="lvq-h"><h2 id="lvq-h">What do you want to know?</h2>'+
 (withSearch?'<form class="lvq-f" role="search" action="/Search/"><input type="search" name="q" class="lvq-in" placeholder="Search the whole site" aria-label="Search the whole site" autocomplete="off"><button type="submit">Search</button></form>':'')+
 '<p class="lvq-sub">Tap a question to go straight to the answer.</p><div class="lvq-g">'+askTiles()+'</div></section>';}
window.__lvAsk=function(el){if(!el)return;css();el.innerHTML=askHtml(true);
 var f=el.querySelector(".lvq-f");f.addEventListener("submit",function(ev){ev.preventDefault();var v=f.querySelector("input").value.trim();go("/Search/"+(v?"?q="+encodeURIComponent(v):""));});};

/* ---------- the Search page ---------- */
var sRoot=null,sTimer=null,LIMIT=6,expanded={};
function readQ(){var p=new URLSearchParams(location.search);return {q:(p.get("q")||"").trim(),show:p.get("show")||""};}
function itemHtml(x,regs){var it=x.it,best=null,bw=0,fb=null;
 it.f.forEach(function(f,i){if(i===0||!f.text.trim()||f.label==="Date")return;if(!fb&&!f.label)fb=f;if(!regs.length)return;var n=ranges(dash(f.text),regs).length;if(n&&n*10+f.w>bw){bw=n*10+f.w;best=f;}});
 var hit=!!best;best=best||fb;
 var sn=best?((hit&&best.label?'<b class="lab">'+esc(best.label)+':</b> ':'')+snippet(best.text,regs)):"";
 var meta='<span class="kind">'+esc(KLABEL[it.k])+'</span>'+(it.date?'<span class="dt">'+esc(dash(it.date))+'</span>':'');
 var sub=it.sub?'<div class="lvs-sub">'+hl(dash(it.sub),regs)+'</div>':'';
 if(it.k==="doc"){var d=it.doc,E=docEvents(d),u=it.href;
  return '<div class="lvs-r lvs-doc"><div class="lvs-meta">'+meta+'</div>'+
   (u?'<a class="lvs-t" href="'+esc(u)+'" target="_blank" rel="noopener">'+hl(dash(it.title),regs)+' <span class="ext">(opens the file)</span></a>':'<div class="lvs-t">'+hl(dash(it.title),regs)+'</div>')+
   (sn?'<div class="lvs-s">'+sn+'</div>':'')+
   (E.length?'<div class="lvs-links"><span>'+(u?'Also on the Evidence Timeline:':'Shown on the Evidence Timeline in:')+'</span>'+E.map(function(e){return '<a href="/FraudTimeline/#ev-'+esc(e.id)+'" data-lvgo="1">'+esc(fmtE(e))+': '+esc(dash(e.title))+'</a>';}).join("")+'</div>':'')+'</div>';}
 return '<a class="lvs-r" href="'+esc(it.href)+'" data-lvgo="1"><div class="lvs-meta">'+meta+'</div><div class="lvs-t">'+hl(dash(it.title),regs)+'</div>'+sub+(sn?'<div class="lvs-s">'+sn+'</div>':'')+'</a>';}
function groupsHtml(res,regs,head){var by={};res.forEach(function(x){(by[x.it.k]=by[x.it.k]||[]).push(x);});
 var order=KINDS.filter(function(k){return by[k[0]];}).sort(function(a,b){return by[b[0]][0].sc-by[a[0]][0].sc||KINDS.indexOf(a)-KINDS.indexOf(b);});
 var h=head+'<nav class="lvs-chips" aria-label="Jump to a group">'+order.map(function(k){return '<a href="#lvs-g-'+k[0]+'" data-jump="'+k[0]+'">'+esc(k[1])+' <b>'+by[k[0]].length+'</b></a>';}).join("")+'</nav>';
 order.forEach(function(k){var L=by[k[0]],all=expanded[k[0]],show=all?L:L.slice(0,LIMIT);
  h+='<section class="lvs-g" id="lvs-g-'+k[0]+'"><h2>'+esc(k[1])+' <span>'+L.length+'</span></h2>'+show.map(function(x){return itemHtml(x,regs);}).join("")+
   (L.length>LIMIT?'<button type="button" class="lvs-more" data-more="'+k[0]+'">'+(all?'Show fewer':'Show all '+L.length+' '+esc(k[1].toLowerCase()))+'</button>':'')+'</section>';});
 return h;}
function renderOut(){if(!sRoot)return;var out=sRoot.querySelector(".lvs-out"),st=readQ(),inp=sRoot.querySelector(".lvs-q");
 if(inp&&document.activeElement!==inp&&inp.value!==st.q)inp.value=st.q;
 if(st.show==="documents"&&!st.q){var D=docs().slice().sort(function(a,b){return String(a.title).localeCompare(String(b.title));});
  var bi={};build().forEach(function(x){if(x.k==="doc")bi[x.id]=x;});var res=D.map(function(d){return {it:bi[d.id],sc:1};}).filter(function(x){return x.it;});
  expanded.doc=true;out.innerHTML=groupsHtml(res,[],'<p class="lvs-sum">All '+res.length+' documents listed on the site. A document with a file opens it; the others show the timeline entries where the document is cited. <a href="/Search/" data-lvgo="1">Back to the questions</a></p>');return;}
 if(!st.q){out.innerHTML=askHtml(false);return;}
 var r=run(st.q);
 if(!r||!r.res.length){out.innerHTML='<div class="lvs-empty"><p><b>Nothing on the site matches \u201c'+esc(st.q)+'\u201d.</b></p><p>Try fewer words, a last name, or a year, such as <a href="/Search/?q=Sexton" data-lvgo="1">Sexton</a>, <a href="/Search/?q=1868" data-lvgo="1">1868</a> or <a href="/Search/?q=land%20trust" data-lvgo="1">land trust</a>. Or pick a question below.</p></div>'+askHtml(false);return;}
 out.innerHTML=groupsHtml(r.res,r.regs,'<p class="lvs-sum" role="status">'+r.res.length+' result'+(r.res.length===1?'':'s')+' for \u201c'+esc(st.q)+'\u201d</p>');}
function setUrlQ(v,push){var u=location.pathname+(v?"?q="+encodeURIComponent(v):"");if(u===location.pathname+location.search)return;history[push?"pushState":"replaceState"](history.state,"",u);}
window.__lvSearch=function(el){if(!el)return;css();sRoot=el;expanded={};
 el.innerHTML='<div class="lvs"><h1>Search</h1><p class="lvs-intro">Search every part of the site at once: the Evidence Timeline, the Key Figures, The Case, the Financial Record and the documents.</p>'+
  '<form class="lvs-f" role="search"><label for="lvs-q" class="lvs-lbl">Search for a name, a year, a phrase or a dollar figure</label><div class="lvs-row"><input id="lvs-q" class="lvs-q" type="search" name="q" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" placeholder="Try: Sexton, 1868, land trust"><button type="submit">Search</button></div></form>'+
  '<div class="lvs-out" aria-live="polite"></div></div>';
 var inp=el.querySelector(".lvs-q"),f=el.querySelector(".lvs-f");inp.value=readQ().q;
 inp.addEventListener("input",function(){clearTimeout(sTimer);sTimer=setTimeout(function(){expanded={};setUrlQ(inp.value.trim(),false);renderOut();},180);});
 f.addEventListener("submit",function(ev){ev.preventDefault();clearTimeout(sTimer);expanded={};setUrlQ(inp.value.trim(),false);renderOut();if(window.matchMedia("(max-width: 699px)").matches)inp.blur();});
 el.addEventListener("click",function(ev){var m=ev.target.closest("[data-more]");if(m){var k=m.getAttribute("data-more");expanded[k]=!expanded[k];renderOut();var g=el.querySelector("#lvs-g-"+k);if(g&&!expanded[k])g.scrollIntoView({block:"start"});return;}
  var j=ev.target.closest("[data-jump]");if(j){ev.preventDefault();var g2=el.querySelector("#lvs-g-"+j.getAttribute("data-jump"));if(g2){var nav=document.querySelector("main > nav");window.scrollTo({top:window.scrollY+g2.getBoundingClientRect().top-(nav?nav.offsetHeight:0)-8,behavior:"smooth"});}}});
 renderOut();
 var key="lvsY:"+location.search,y=null;try{y=sessionStorage.getItem(key);sessionStorage.removeItem(key);}catch(e){}
 if(y&&readQ().q)setTimeout(function(){window.scrollTo(0,+y);},60);
 if(window.__lvFocusSearch||(!readQ().q&&!readQ().show&&window.matchMedia("(min-width: 700px)").matches)){window.__lvFocusSearch=0;setTimeout(function(){inp.focus({preventScroll:true});},30);}};

/* ---------- arriving at a target on another page ---------- */
function navH(){var n=document.querySelector("main > nav");return n?n.offsetHeight:0;}
function flash(el){el.classList.remove("lvx-flash");void el.offsetWidth;el.classList.add("lvx-flash");}
function scrollToEl(el){window.scrollTo({top:Math.max(0,window.scrollY+el.getBoundingClientRect().top-navH()-12),behavior:"auto"});flash(el);}
function waitFor(fn,cb,ms){var t0=Date.now();(function tick(){var r=fn();if(r){cb(r);return;}if(Date.now()-t0<(ms||6000))setTimeout(tick,80);})();}
function normName(s){return fold(s).toLowerCase().replace(/[^a-z0-9]+/g,"");}
function tagMoney(){if(seg()!=="moneytrail")return;
 var hero=document.querySelector("section.ftm-cert-hero");if(hero&&!hero.id)hero.id="fin-cert";
 var part=document.querySelector(".ftm-part");if(part&&!part.id)part.id="fin-ledger";
 var rows=document.querySelectorAll("table.ftm-ledger tbody tr");if(!rows.length)return;
 var used={};
 rows.forEach(function(tr){if(tr.getAttribute("data-lvfin"))return;var td=tr.querySelectorAll("td");if(td.length<3)return;var sp=td[1].querySelector("span");if(!sp)return;
  var t=(sp.textContent||"").trim(),yr=(td[0].textContent||"").trim(),n=-1;
  for(var i=0;i<FIN.length;i++)if(!used[i]&&FIN[i][2]===t&&FIN[i][1]===yr){n=i;break;}
  tr.setAttribute("data-lvfin","1");if(n<0)return;used[n]=1;tr.id="fin-"+n;
  var e=finEvent(FIN[n]);if(e){var a=document.createElement("a");a.className="lvx-fin-tl";a.href="/FraudTimeline/#ev-"+e.id;a.setAttribute("data-lvgo","1");a.textContent="On the Evidence Timeline: "+dash(e.title);td[1].appendChild(a);}});}
var lastHandled="";
function onRoute(){var key=location.pathname+location.search+location.hash+"|"+history.length;var s=seg(),h=location.hash;
 if(s==="search"&&sRoot&&document.body.contains(sRoot))renderOut();
 if(s==="moneytrail"){waitFor(function(){tagMoney();return document.querySelector("table.ftm-ledger tbody tr[data-lvfin]");},function(){
   if(/^#fin-/.test(h)&&lastHandled!==key){lastHandled=key;var el=document.getElementById(h.slice(1));if(el)setTimeout(function(){scrollToEl(el);},50);}});}
 if(s==="persons"&&/^#p-/.test(h)){var pid=decodeURIComponent(h.slice(3)),P=null;ppl().forEach(function(p){if(p.id===pid)P=p;});if(!P)return;
  waitFor(function(){var bs=document.querySelectorAll("main button");for(var i=0;i<bs.length;i++){var h3=bs[i].querySelector("h3");if(h3&&normName(h3.textContent)===normName(P.name))return bs[i];}return null;},
   function(b){if(location.hash!==h)return;history.replaceState(history.state,"",location.pathname+location.search);b.scrollIntoView({block:"center"});b.click();});}
 if(s==="dashboard"&&h==="#position"&&lastHandled!==key){lastHandled=key;
  waitFor(function(){var ps=document.querySelectorAll("main p");for(var i=0;i<ps.length;i++)if(/^Thorne.s position$/i.test((ps[i].textContent||"").trim()))return ps[i].parentElement;return null;},function(el){setTimeout(function(){scrollToEl(el);},50);});}}
addEventListener("popstate",function(){setTimeout(onRoute,0);});
addEventListener("hashchange",function(){setTimeout(onRoute,0);});
var moT=null;function startObs(){new MutationObserver(function(){if(moT)return;moT=setTimeout(function(){moT=null;tagMoney();},120);}).observe(document.body,{childList:true,subtree:true});onRoute();}
if(document.body)startObs();else document.addEventListener("DOMContentLoaded",startObs);

/* ---------- styles ---------- */
var CSS=
'.lv-hdr-search{display:flex;align-items:center;justify-content:center}'+
'.lvs{max-width:880px;margin:0 auto;padding:26px 16px 60px;font-family:Lora,Georgia,serif;color:#3b2a17}'+
'.lvs h1{font-family:"Playfair Display",serif;font-weight:900;color:#704214;font-size:46px;line-height:1.05;text-align:center;margin:8px 0 10px}'+
'.lvs-intro{text-align:center;color:#704214;font-size:18px;line-height:1.55;max-width:640px;margin:0 auto 22px}'+
'.lvs-f{background:linear-gradient(135deg,#3e2723 0%,#2c1810 100%);border:2px solid #D4AF37;border-radius:14px;padding:14px;margin:0 0 18px;box-shadow:0 8px 24px rgba(0,0,0,.18)}'+
'.lvs-lbl{display:block;color:#D4AF37;font-size:15px;margin:0 2px 8px}'+
'.lvs-row,.lvq-f{display:flex;gap:8px}'+
'.lvs-q,.lvq-in{flex:1;min-width:0;font-size:18px;padding:13px 14px;min-height:52px;box-sizing:border-box;border-radius:10px;border:1.5px solid #D4AF37;background:#fdf8ef;color:#2c1810;font-family:Lora,Georgia,serif}'+
'.lvs-q:focus,.lvq-in:focus{outline:3px solid #ffd700;outline-offset:1px}'+
'.lvs-f button,.lvq-f button{min-height:52px;padding:0 18px;border-radius:10px;border:0;background:#D4AF37;color:#2c1810;font:700 17px Lora,Georgia,serif;cursor:pointer}'+
'.lvs-sum{font-size:17px;color:#704214;margin:4px 2px 10px}.lvs-sum a{color:#704214;text-decoration:underline}'+
'.lvs-chips{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 8px}'+
'.lvs-chips a{display:inline-flex;align-items:center;gap:6px;min-height:42px;padding:6px 14px;border-radius:999px;background:#3e2723;color:#f5ead8;text-decoration:none;font-size:16px;border:1px solid #D4AF37}'+
'.lvs-chips a b{color:#D4AF37}'+
'.lvs-g{margin:22px 0 0}'+
'.lvs-g h2{font-family:"Playfair Display",serif;color:#3e2723;font-size:25px;font-weight:700;margin:0 0 10px;border-bottom:2px solid #D4AF37;padding-bottom:6px}'+
'.lvs-g h2 span{font-family:Lora,serif;font-size:16px;color:#8b6f47;font-weight:600}'+
'.lvs-r{display:block;background:#fdf8ef;border:1px solid #d8c39a;border-left:5px solid #D4AF37;border-radius:10px;padding:12px 14px;margin:0 0 10px;color:#3b2a17;text-decoration:none;box-shadow:0 2px 8px rgba(112,66,20,.08)}'+
'a.lvs-r:hover,a.lvs-r:focus{border-color:#b8860b;background:#fff9ec}'+
'.lvs-meta{display:flex;justify-content:space-between;gap:10px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#8b4513;font-weight:700;margin:0 0 3px}'+
'.lvs-meta .dt{color:#704214;white-space:nowrap;text-transform:none;letter-spacing:0}'+
'.lvs-t{display:block;font-family:"Playfair Display",serif;font-size:20px;font-weight:700;color:#2c1810;line-height:1.3}'+
'a.lvs-t{color:#2c1810;text-decoration:underline;text-decoration-color:#D4AF37;min-height:40px}'+
'.lvs-t .ext{font-family:Lora,serif;font-size:14px;font-weight:400;color:#704214}'+
'.lvs-sub{font-size:15px;color:#7a5a32;margin-top:2px}'+
'.lvs-s{font-size:16px;line-height:1.6;color:#4a3826;margin-top:6px}'+
'.lvs-s .lab{color:#704214}'+
'.lvs mark,.lvq mark{background:#f7dd7a;color:#2c1810;border-radius:2px;padding:0 1px}'+
'.lvs-links{margin-top:8px;display:flex;flex-direction:column;gap:2px;font-size:15px}.lvs-links span{color:#704214;font-weight:600}'+
'.lvs-links a{color:#704214;text-decoration:underline;min-height:40px;display:flex;align-items:center}'+
'.lvs-more{min-height:44px;padding:8px 16px;border-radius:999px;border:1px solid #704214;background:transparent;color:#704214;font:600 16px Lora,serif;cursor:pointer;margin:2px 0 0}'+
'.lvs-empty{background:#fdf8ef;border:1px solid #d8c39a;border-radius:12px;padding:14px 16px;font-size:17px;line-height:1.6;margin:0 0 18px}.lvs-empty a{color:#704214;text-decoration:underline}'+
'.lvq{margin:0 0 4px;font-family:Lora,Georgia,serif;text-align:left}'+
'.lvq h2{font-family:"Playfair Display",serif;color:#704214;font-weight:800;font-size:30px;margin:0 0 8px;text-align:center}'+
'.lvq-sub{font-size:16px;color:#7a5a32;text-align:center;margin:10px 0 12px}'+
'.lvq-f{margin:0 auto;max-width:620px}'+
'.lvq-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px}'+
'.lvq-t{display:flex;flex-direction:column;justify-content:center;gap:4px;min-height:64px;padding:12px 14px;border-radius:12px;background:linear-gradient(135deg,#5a4a3a 0%,#4a3f2f 100%);border:2px solid #D4AF37;color:#faf7f0;text-decoration:none;box-shadow:0 4px 12px rgba(0,0,0,.18)}'+
'.lvq-t:hover,.lvq-t:focus{background:linear-gradient(135deg,#6a5848 0%,#5a4a3a 100%)}'+
'.lvq-t .q{font-family:"Playfair Display",serif;font-weight:700;font-size:18px;color:#D4AF37;line-height:1.3}'+
'.lvq-t .a{font-size:15px;color:#efe3c8;line-height:1.4}'+
'.lvx-fin-tl{display:flex;align-items:center;min-height:40px;margin-top:4px;color:#D4AF37;text-decoration:underline;font-size:14px;font-style:normal}'+
'.lvx-flash{animation:lvxfl 2.6s ease}@keyframes lvxfl{0%,50%{background-color:rgba(212,175,55,.30);box-shadow:0 0 0 3px #D4AF37}100%{}}'+
'@media (max-width:560px){.lvs h1{font-size:38px}.lvs-f button,.lvq-f button{padding:0 14px}.lvs-t{font-size:19px}.lvq h2{font-size:26px}.lvq-g{grid-template-columns:1fr}}';
function css(){if(document.getElementById("lvs-css"))return;var st=document.createElement("style");st.id="lvs-css";st.textContent=CSS;document.head.appendChild(st);}
css();
})();
