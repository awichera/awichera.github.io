(this.webpackJsonpsppg=this.webpackJsonpsppg||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(32),i=n.n(r);n(42),n(33),n(43);var c=n(13),l=n(14),s=n(16),u=n(15),d=n(17),h=n(129),m=n(130),f=n(131),p=n(132),v=n(133),g=n(134),w=n(135),E=n(136),b=n(137),k=n(35),j=n(138),y=n(139),x=n(140),O=n(141),S=n(34),C=n.n(S),I=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{fluid:!0},o.a.createElement(C.a,{source:this.props.mdtext}))}}]),t}(a.Component),T=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={mdtext:"",formInput:""},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleTextInput",value:function(e){this.setState({formInput:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;fetch("/markdowns/"+this.state.formInput+".md").then((function(e){return e.text()})).then((function(e){"<!DOCTYPE html>"==e.slice(0,15)&&(e='## Nenalezen\nZ\xe1znam "'.concat(t.state.formInput,'" pr\u016fvodce nezn\xe1')),t.setState({mdtext:e})}))}},{key:"render",value:function(){return o.a.createElement(h.a,{fluid:!0},o.a.createElement(m.a,{className:"justify-content-center"},o.a.createElement(f.a,{md:"8"},o.a.createElement(p.a,null,o.a.createElement(v.a,null,o.a.createElement("b",null,"Stopa\u0159\u016fv pr\u016fvodce po galaxii")),o.a.createElement(g.a,null,o.a.createElement(w.a,null,o.a.createElement("p",{className:"text-muted"},"Stopuj"),o.a.createElement(E.a,{className:"mb-3"},o.a.createElement(b.a,{addonType:"prepend"},o.a.createElement(k.a,null,"?")),o.a.createElement(j.a,{type:"text",placeholder:"vogonsk\xe1 poezie",autoComplete:"vogonsk\xe1 poezie",onChange:this.handleTextInput.bind(this),required:!0}),o.a.createElement(y.a,{valid:!0},"This email looks great!"),o.a.createElement(y.a,{invalid:"true"},"This doesn't look like an email")),o.a.createElement(E.a,null,o.a.createElement(x.a,{color:"success",onClick:this.handleSubmit.bind(this),block:!0},"Naj\xedt")))),o.a.createElement(O.a,null,o.a.createElement(I,{mdtext:this.state.mdtext}))))))}}]),t}(a.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(127);i.a.render(o.a.createElement(T,null),document.getElementById("root")),function(e){if(console.log("REGISTERING SW"),"serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}));var t=["/","/markdowns/kapr.md"];window.addEventListener("install",(function(e){e.waitUntil(caches.open("my-pwa-cache-v1").then((function(e){return e.addAll(t)})))})),window.addEventListener("fetch",(function(e){console.log(e.request.url),e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}))}}()},33:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},37:function(e,t,n){e.exports=n(128)},42:function(e,t,n){},43:function(e,t,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.7ead79bb.chunk.js.map