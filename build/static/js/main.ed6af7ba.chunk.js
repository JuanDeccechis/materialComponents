(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(34),s=n.n(i),r=(n(78),n(9)),o=n(10),l=n(12),j=n(11),u=(n(79),n(37)),h=n(3),d=a.a.createContext("light");function b(e){return function(t){return Object(h.jsx)(d.Consumer,{children:function(n){return Object(h.jsx)(e,Object(u.a)(Object(u.a)({},t),{},{theme:n}))}})}}var O=n(22),v=(n(81),b(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={theme:"dark",switchDark:!0},c.handleSwitch=c.handleSwitch.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"handleSwitch",value:function(e){var t=this.state.switchDark?"light":"dark";this.setState({switchDark:!this.state.switchDark,theme:t})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"container-switcher",children:[Object(h.jsx)("span",{className:"label-switcher",children:" Modo nocturno: "}),Object(h.jsxs)("label",{class:"switch",children:[Object(h.jsx)("input",{type:"checkbox",checked:this.state.switchDark,onChange:this.handleSwitch}),Object(h.jsx)("span",{class:"slider round"})]})]}),Object(h.jsx)(d.Provider,{value:this.state.theme,children:this.props.children})]})}}]),n}(c.Component))),f=n(62),x=n.n(f),m=(n(82),b(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"button-with-icon",children:[Object(h.jsx)(x.a,{className:"img short-img img-button inline"}),"GUARDAR"]})})}}]),n}(c.Component))),p=n(136),C=n(137),w=n(49),k=n.n(w),g=n(50),N=n.n(g),S=n(63),y=n.n(S),_=(n(88),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).handleChange=function(e,t){c.setState({value:e.target.value})},c.handleClickUp=function(e){c.setState({value:++c.state.value})},c.handleClickDown=function(e){c.setState({value:--c.state.value})},c.handleClickShow=function(e){c.setState({showVolumeBar:!c.state.showVolumeBar})},c.state={value:30,showVolumeBar:!0},c.handleChange=c.handleChange.bind(Object(O.a)(c)),c.handleClickDown=c.handleClickDown.bind(Object(O.a)(c)),c.handleClickUp=c.handleClickUp.bind(Object(O.a)(c)),c.handleClickShow=c.handleClickShow.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.showVolumeBar;return Object(h.jsxs)("div",{children:[Object(h.jsx)(p.a,{children:"Volume"}),Object(h.jsxs)("div",{className:"volume-flex-inline-size",children:[Object(h.jsx)(k.a,{}),Object(h.jsx)("span",{className:"volume-bar-container-style",children:Object(h.jsx)(C.a,{value:t,onChange:this.handleChange,"aria-labelledby":"continuous-slider"})}),Object(h.jsx)(N.a,{})]}),Object(h.jsxs)("div",{className:"volume-flex-inline-size",children:[Object(h.jsx)(k.a,{onClick:this.handleClickDown}),Object(h.jsx)("div",{className:"volume-bar-container-style",onClick:this.handleChangeCurrent,children:Object(h.jsx)("input",{className:"volume-input-value",type:"range",min:"0",max:"100",value:t,onChange:this.handleChange})}),Object(h.jsx)(N.a,{onClick:this.handleClickUp})]}),Object(h.jsxs)("div",{className:"volume-flex-inline-size",children:[t>50?Object(h.jsx)(N.a,{onClick:this.handleClickShow}):t>5?Object(h.jsx)(k.a,{onClick:this.handleClickShow}):Object(h.jsx)(y.a,{onClick:this.handleClickShow}),n&&Object(h.jsx)("div",{className:"volume-bar-container-style-short",onClick:this.handleChangeCurrent,children:Object(h.jsx)("input",{className:"volume-input-value",type:"range",min:"0",max:"100",value:t,onChange:this.handleChange})})]})]})}}]),n}(c.Component)),E=n(64),U=n.n(E),D=n(65),F=n.n(D),T=(n(89),b(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={value:10,showNotifications:!1},c.handleClickNotification=c.handleClickNotification.bind(Object(O.a)(c)),c}return Object(o.a)(n,[{key:"handleClickNotification",value:function(){this.setState({showNotifications:!this.state.showNotifications})}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.showNotifications;return Object(h.jsxs)("div",{className:"notification-relative",children:[0===t?Object(h.jsx)("div",{className:"notification-container",children:Object(h.jsx)(U.a,{})}):Object(h.jsxs)("div",{className:"notification-container notification-not-empty",onClick:this.handleClickNotification,children:[Object(h.jsx)(F.a,{}),Object(h.jsx)("span",{className:"notification-badge-value",children:t})]}),n&&Object(h.jsx)("div",{id:"myDropdown",className:"dropdown-content",children:Object(h.jsxs)("div",{className:"user_ctrl_box center",children:[Object(h.jsx)("div",{className:"user_dropdown_menu",children:Object(h.jsx)("span",{children:"User1"})}),Object(h.jsx)("div",{className:"user_dropdown_menu",children:Object(h.jsx)("span",{children:"User2"})}),Object(h.jsx)("div",{className:"dropdown-divider "}),Object(h.jsx)("div",{className:"user_dropdown_menu",children:Object(h.jsx)("span",{children:"Mi Cuenta"})}),Object(h.jsx)("div",{className:"user_dropdown_menu",children:Object(h.jsx)("span",{children:"Centro de ayuda"})}),Object(h.jsx)("div",{className:"dropdown-divider "}),Object(h.jsx)("div",{className:"user_dropdown_menu",children:Object(h.jsx)("span",{children:"Cerrar sesion"})})]})})]})}}]),n}(c.Component))),R=n(42),A=n(7),H=(n(90),n(66)),L=n.n(H),I=b(function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("ul",{className:"nav",children:[Object(h.jsx)("li",{children:Object(h.jsx)(R.b,{exact:!0,to:"/",activeClassName:"active",children:" Home "})}),Object(h.jsx)("li",{children:Object(h.jsxs)(R.b,{to:"/FAQ",activeClassName:"active",children:[" ",Object(h.jsx)(L.a,{})," "]})})]})}}]),n}(c.Component)),B=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"HOME"})}}]),n}(c.Component),V=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"FAQ"})}}]),n}(c.Component),W=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(R.a,{children:[Object(h.jsx)(I,{}),Object(h.jsxs)(A.c,{children:[Object(h.jsx)(A.a,{exact:!0,path:"/",component:B}),Object(h.jsx)(A.a,{path:"/FAQ",component:V})]})]})})}}]),n}(c.Component),G=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(v,{children:Object(h.jsx)(d.Consumer,{children:function(e){return Object(h.jsxs)("div",{className:"app ".concat(e),children:[Object(h.jsx)(m,{}),Object(h.jsx)(_,{}),Object(h.jsx)(T,{}),Object(h.jsx)(W,{})]})}})})})}}]),n}(c.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(36),J=n(70),P=n(69),X={LOGIN:"LOGIN",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAIL:"FETCH_USERS_FAIL"},$=function(){return{type:X.FETCH_USERS_FAIL}},q={user:"",loading:!1,error:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.LOGIN:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});default:return e}},Y=n(32),Z=n.n(Y),ee=n(33),te=n(68),ne=n.n(te),ce=Z.a.mark(se),ae=Z.a.mark(re),ie=Z.a.mark(oe);function se(){var e;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ee.b)(ne.a.get,"https://jsonplaceholder.typicode.com/users");case 3:if(200!==(e=t.sent).status){t.next=9;break}return t.next=7,Object(ee.c)((n=e.data,{type:X.FETCH_USERS_SUCCESS,payload:n}));case 7:t.next=11;break;case 9:return t.next=11,Object(ee.c)($());case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(ee.c)($(t.t0));case 17:case"end":return t.stop()}var n}),ce,null,[[0,13]])}function re(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.d)(X.FETCH_USERS_START,se);case 2:case"end":return e.stop()}}),ae)}function oe(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([re()]);case 2:case"end":return e.stop()}}),ie)}var le=Object(J.a)(),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.b,ue=Object(z.c)(K,je(Object(z.a)(le)));le.run(oe),s.a.render(Object(h.jsx)(P.a,{store:ue,children:Object(h.jsx)(G,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/materialComponents",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/materialComponents","/service-worker.js");M?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Q(e)}))}}()},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.ed6af7ba.chunk.js.map