(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){},40:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(16),a=t.n(c),i=(t(37),t(10)),s=t(11),u=t(13),l=t(12),f=(t(38),t(15)),d=t(4),p=o.a.createContext("light");function h(e){return function(n){return Object(d.jsx)(p.Consumer,{children:function(t){return Object(d.jsx)(e,Object(f.a)(Object(f.a)({},n),{},{theme:t}))}})}}var b=t(18),v=(t(40),r.Component,h(function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=n.call(this,e)).state={},r}return Object(s.a)(t,[{key:"render",value:function(){return Object(d.jsx)("button",{children:"contenido"})}}]),t}(r.Component))),j=h(function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"app ".concat(this.props.theme),children:Object(d.jsx)(v,{})})})}}]),t}(r.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=t(14),S=t(32),E=t(31),m={LOGIN:"LOGIN",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAIL:"FETCH_USERS_FAIL"},C=function(){return{type:m.FETCH_USERS_FAIL}},x={user:"",loading:!1,error:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.LOGIN:return Object(f.a)(Object(f.a)({},e),{},{user:n.payload});default:return e}},k=t(8),y=t.n(k),T=t(9),U=t(30),F=t.n(U),R=y.a.mark(I),L=y.a.mark(H),N=y.a.mark(A);function I(){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(T.b)(F.a.get,"https://jsonplaceholder.typicode.com/users");case 3:if(200!==(e=n.sent).status){n.next=9;break}return n.next=7,Object(T.c)((t=e.data,{type:m.FETCH_USERS_SUCCESS,payload:t}));case 7:n.next=11;break;case 9:return n.next=11,Object(T.c)(C());case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(T.c)(C(n.t0));case 17:case"end":return n.stop()}var t}),R,null,[[0,13]])}function H(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(m.FETCH_USERS_START,I);case 2:case"end":return e.stop()}}),L)}function A(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([H()]);case 2:case"end":return e.stop()}}),N)}var W=Object(S.a)(),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.b,B=Object(g.c)(_,G(Object(g.a)(W)));W.run(A),a.a.render(Object(d.jsx)(E.a,{store:B,children:Object(d.jsx)(j,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/materialComponents",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/materialComponents","/service-worker.js");O?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.325e2a52.chunk.js.map