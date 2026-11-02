/* Adds COOP/COEP headers from a service worker so GitHub Pages can use SharedArrayBuffer (threads). */
if(typeof window==='undefined'){
  self.addEventListener('install',()=>self.skipWaiting());
  self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
  self.addEventListener('fetch',e=>{
    const r=e.request;
    if(r.cache==='only-if-cached'&&r.mode!=='same-origin')return;
    e.respondWith(fetch(r).then(res=>{
      if(res.status===0)return res;
      const h=new Headers(res.headers);
      h.set('Cross-Origin-Embedder-Policy','require-corp');
      h.set('Cross-Origin-Opener-Policy','same-origin');
      h.set('Cross-Origin-Resource-Policy','cross-origin');
      return new Response(res.body,{status:res.status,statusText:res.statusText,headers:h});
    }).catch(err=>console.error(err)));
  });
}else{
  (()=>{
    if(window.crossOriginIsolated)return;
    if(!window.isSecureContext||!navigator.serviceWorker)return;
    const src=window.document.currentScript.src;
    navigator.serviceWorker.register(src).then(reg=>{
      reg.addEventListener('updatefound',()=>location.reload());
      if(reg.active&&!navigator.serviceWorker.controller)location.reload();
    });
  })();
}
