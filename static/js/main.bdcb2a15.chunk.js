(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},77:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(25),r=n.n(i),s=(n(67),n(16)),o=n(17),l=n(20),h=n(19),u=(n(68),n(28)),d=n(4),j=c.a.createContext("light");function b(e){return function(t){return Object(d.jsx)(j.Consumer,{children:function(n){return Object(d.jsx)(e,Object(u.a)(Object(u.a)({},t),{},{theme:n}))}})}}var v=n(15),O=(n(70),b(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={theme:"dark",switchDark:!0},a.handleSwitch=a.handleSwitch.bind(Object(v.a)(a)),a}return Object(o.a)(n,[{key:"handleSwitch",value:function(e){var t=this.state.switchDark?"light":"dark";this.setState({switchDark:!this.state.switchDark,theme:t})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"container-switcher",children:[Object(d.jsx)("span",{className:"label-switcher",children:" Modo nocturno: "}),Object(d.jsxs)("label",{class:"switch",children:[Object(d.jsx)("input",{type:"checkbox",checked:this.state.switchDark,onChange:this.handleSwitch}),Object(d.jsx)("span",{class:"slider round"})]})]}),Object(d.jsx)(j.Provider,{value:this.state.theme,children:this.props.children})]})}}]),n}(a.Component))),f=n(54),p=n.n(f),m=(n(71),b(function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("button",{className:"button-with-icon",children:[Object(d.jsx)(p.a,{className:"img short-img img-button inline"}),"GUARDAR"]})})}}]),n}(a.Component))),C=n(116),w=n(117),x=n(43),k=n.n(x),g=n(44),S=n.n(g),E=n(55),y=n.n(E),N=(n(77),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e,t){a.setState({value:e.target.value})},a.handleClickUp=function(e){a.setState({value:++a.state.value})},a.handleClickDown=function(e){a.setState({value:--a.state.value})},a.handleClickShow=function(e){a.setState({showVolumeBar:!a.state.showVolumeBar})},a.state={value:30,showVolumeBar:!0},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleClickDown=a.handleClickDown.bind(Object(v.a)(a)),a.handleClickUp=a.handleClickUp.bind(Object(v.a)(a)),a.handleClickShow=a.handleClickShow.bind(Object(v.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.showVolumeBar;return Object(d.jsxs)("div",{children:[Object(d.jsx)(C.a,{children:"Volume"}),Object(d.jsxs)("div",{className:"volume-flex-inline-size",children:[Object(d.jsx)(k.a,{}),Object(d.jsx)("span",{className:"volume-bar-container-style",children:Object(d.jsx)(w.a,{value:t,onChange:this.handleChange,"aria-labelledby":"continuous-slider"})}),Object(d.jsx)(S.a,{})]}),Object(d.jsxs)("div",{className:"volume-flex-inline-size",children:[Object(d.jsx)(k.a,{onClick:this.handleClickDown}),Object(d.jsx)("div",{className:"volume-bar-container-style",onClick:this.handleChangeCurrent,children:Object(d.jsx)("input",{className:"volume-input-value",type:"range",min:"0",max:"100",value:t,onChange:this.handleChange})}),Object(d.jsx)(S.a,{onClick:this.handleClickUp})]}),Object(d.jsxs)("div",{className:"volume-flex-inline-size",children:[t>50?Object(d.jsx)(S.a,{onClick:this.handleClickShow}):t>5?Object(d.jsx)(k.a,{onClick:this.handleClickShow}):Object(d.jsx)(y.a,{onClick:this.handleClickShow}),n&&Object(d.jsx)("div",{className:"volume-bar-container-style-short",onClick:this.handleChangeCurrent,children:Object(d.jsx)("input",{className:"volume-input-value",type:"range",min:"0",max:"100",value:t,onChange:this.handleChange})})]})]})}}]),n}(a.Component)),_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(O,{children:Object(d.jsx)(j.Consumer,{children:function(e){return Object(d.jsxs)("div",{className:"app ".concat(e),children:[Object(d.jsx)(m,{}),Object(d.jsx)(N,{})]})}})})})}}]),n}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=n(27),R=n(59),F=n(58),L={LOGIN:"LOGIN",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAIL:"FETCH_USERS_FAIL"},I=function(){return{type:L.FETCH_USERS_FAIL}},A={user:"",loading:!1,error:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.LOGIN:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});default:return e}},B=n(23),V=n.n(B),W=n(24),G=n(57),z=n.n(G),J=V.a.mark(X),M=V.a.mark(Q),P=V.a.mark($);function X(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(W.b)(z.a.get,"https://jsonplaceholder.typicode.com/users");case 3:if(200!==(e=t.sent).status){t.next=9;break}return t.next=7,Object(W.c)((n=e.data,{type:L.FETCH_USERS_SUCCESS,payload:n}));case 7:t.next=11;break;case 9:return t.next=11,Object(W.c)(I());case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(W.c)(I(t.t0));case 17:case"end":return t.stop()}var n}),J,null,[[0,13]])}function Q(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.d)(L.FETCH_USERS_START,X);case 2:case"end":return e.stop()}}),M)}function $(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.a)([Q()]);case 2:case"end":return e.stop()}}),P)}var q=Object(R.a)(),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.b,Y=Object(D.c)(H,K(Object(D.a)(q)));q.run($),r.a.render(Object(d.jsx)(F.a,{store:Y,children:Object(d.jsx)(_,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/materialComponents",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/materialComponents","/service-worker.js");U?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):T(e)}))}}()}},[[99,1,2]]]);
//# sourceMappingURL=main.bdcb2a15.chunk.js.map