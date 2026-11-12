/* LexiVault offline data layer: serves the app's API calls from the bundled record. */
(function(){
  var D = window.__LV || {};
  function parseUrl(u){ var a=document.createElement('a'); a.href=u; return a; }
  function qs(search){ var o={}; (search||'').replace(/^\?/,'').split('&').forEach(function(p){ if(!p) return; var i=p.indexOf('='); var k=decodeURIComponent(i<0?p:p.slice(0,i)); var v=i<0?'':decodeURIComponent(p.slice(i+1).replace(/\+/g,' ')); o[k]=v; }); return o; }
  function match(item,q){ for(var k in q){ var v=q[k]; if(v&&typeof v==='object'&&!Array.isArray(v)){ if('$in' in v){ if(v.$in.indexOf(item[k])<0) return false; continue; } if('$ne' in v){ if(item[k]===v.$ne) return false; continue; } continue; } if(Array.isArray(item[k])){ if(item[k].indexOf(v)<0) return false; } else if(item[k]!==v) return false; } return true; }
  function sortBy(arr,s){ if(!s) return arr; var desc=s[0]==='-'; var f=desc?s.slice(1):s; return arr.slice().sort(function(a,b){ var x=a[f],y=b[f]; if(x==null&&y==null) return 0; if(x==null) return 1; if(y==null) return -1; return (x<y?-1:x>y?1:0)*(desc?-1:1); }); }
  function route(method,url,body){
    var u=parseUrl(url), p=u.pathname, q=qs(u.search);
    if(p.indexOf('/api/')<0) return null;
    if(/public-settings/.test(p)) return [200,{id:'69799fbfc6ab10695acad31e',public_settings:'public_without_login'}];
    if(/entities\/User\/me/.test(p)) return [401,{message:'Not logged in'}];
    var m=p.match(/entities\/([A-Za-z0-9_]+)(?:\/([^\/]+))?$/);
    if(m){
      var list=D[m[1]]||[];
      if(method!=='GET') return [200,{}];
      if(m[2]){ var it=list.filter(function(x){return x.id===m[2]})[0]; return it?[200,it]:[404,{message:'Not found'}]; }
      var out=list;
      if(q.q){ try{ var f=JSON.parse(q.q); out=out.filter(function(x){return match(x,f)}); }catch(e){} }
      out=sortBy(out,q.sort);
      var skip=+q.skip||0, lim=+q.limit||out.length; out=out.slice(skip,skip+lim);
      return [200,out];
    }
    var fn=p.match(/functions\/([A-Za-z0-9_]+)/);
    if(fn){ var r=D['fn_'+fn[1]]; return [200, r!==undefined?r:{}]; }
    return [200,{}];
  }
  window.__lvRoute=route;
  var RX=window.XMLHttpRequest;
  function FX(){ this._h={}; this.readyState=0; this.status=0; this.responseText=''; this.response=null; this.responseType=''; this.timeout=0; this.withCredentials=false; this.upload={addEventListener:function(){}}; this._l={}; }
  FX.prototype.open=function(m,u){ this._m=(m||'GET').toUpperCase(); this._u=u; this.readyState=1; var r=route(this._m,u); if(!r){ this._real=new RX(); var s=this; this._real.open.apply(this._real,arguments); ['onreadystatechange','onload','onloadend','onerror','ontimeout','onabort'].forEach(function(ev){ s._real[ev]=function(e){ ['readyState','status','statusText','responseText','response','responseURL'].forEach(function(k){try{s[k]=s._real[k]}catch(x){}}); if(s[ev]) s[ev](e); }; }); } };
  FX.prototype.setRequestHeader=function(k,v){ if(this._real) return this._real.setRequestHeader(k,v); this._h[k]=v; };
  FX.prototype.getAllResponseHeaders=function(){ return this._real?this._real.getAllResponseHeaders():'content-type: application/json\r\n'; };
  FX.prototype.getResponseHeader=function(k){ return this._real?this._real.getResponseHeader(k):(/content-type/i.test(k)?'application/json':null); };
  FX.prototype.addEventListener=function(t,f){ if(this._real) return this._real.addEventListener(t,f); (this._l[t]=this._l[t]||[]).push(f); };
  FX.prototype.removeEventListener=function(){};
  FX.prototype.abort=function(){ if(this._real) this._real.abort(); };
  FX.prototype.send=function(b){ if(this._real){ if(this.responseType) this._real.responseType=this.responseType; this._real.timeout=this.timeout; return this._real.send(b); }
    var s=this, r=route(this._m,this._u,b);
    setTimeout(function(){ s.readyState=4; s.status=r[0]; s.statusText=r[0]===200?'OK':'Error'; s.responseText=JSON.stringify(r[1]); s.response=s.responseType==='json'?r[1]:s.responseText; s.responseURL=s._u;
      if(s.onreadystatechange) s.onreadystatechange(); ['load','loadend'].forEach(function(t){ if(s['on'+t]) s['on'+t]({type:t}); (s._l[t]||[]).forEach(function(f){f({type:t})}); }); },0); };
  window.XMLHttpRequest=FX;
  var rf=window.fetch.bind(window);
  window.fetch=function(input,init){ var url=typeof input==='string'?input:(input&&input.url); var m=(init&&init.method)||'GET'; var r=url&&route(m.toUpperCase(),url); if(r) return Promise.resolve(new Response(JSON.stringify(r[1]),{status:r[0],headers:{'Content-Type':'application/json'}})); return rf(input,init); };
  try{ if(!/^\/[A-Z]/.test(location.pathname)) history.replaceState(null,'','/Dashboard'+location.hash); }catch(e){}
})();
