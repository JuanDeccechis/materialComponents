(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{106:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(29),s=i.n(a),o=(i(66),i(6)),r=i(7),l=i(9),d=i(8),u=(i(67),i(31)),j=i(0),h=c.a.createContext("light");function b(e){return function(t){return Object(j.jsx)(h.Consumer,{children:function(i){return Object(j.jsx)(e,Object(u.a)(Object(u.a)({},t),{},{theme:i}))}})}}var O=i(10),m=(i(69),b(function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={theme:"dark",switchDark:!0},n.handleSwitch=n.handleSwitch.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"handleSwitch",value:function(e){var t=this.state.switchDark?"light":"dark";this.setState({switchDark:!this.state.switchDark,theme:t})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"container-switcher",children:[Object(j.jsx)("span",{className:"label-switcher",children:" Modo nocturno: "}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",checked:this.state.switchDark,onChange:this.handleSwitch}),Object(j.jsx)("span",{className:"slider round"})]})]}),Object(j.jsx)(h.Provider,{value:this.state.theme,children:this.props.children})]})}}]),i}(n.Component))),v=i(13),x=i(11),p=(i(70),i(49)),f=i.n(p),C=i(50),g=i.n(C),w=(i(71),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={value:0,showNotifications:!1,notificationData:[{text:"Nuevas ofertas en nuestros planes",index:0,destiny:"/register"},{text:"A Ger\xf3nimo Casanova le gust\xf3 tu comentario",index:1,destiny:"/home"},{text:"Pepe Rodriguez te envi\xf3 una solicitud",index:2,destiny:"/home"},{text:"Mar\xeda Fernandez comparti\xf3 una foto",index:3,destiny:"/home"},{text:"Es cumplea\xf1os de Pilar De La Canal",index:4,destiny:"/home"}]},n.handleClickNotification=n.handleClickNotification.bind(Object(O.a)(n)),n.handleClickDelete=n.handleClickDelete.bind(Object(O.a)(n)),n.handleClickViewNotification=n.handleClickViewNotification.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.setState({value:this.state.notificationData.length})}},{key:"handleClickNotification",value:function(){this.setState({showNotifications:!this.state.showNotifications})}},{key:"handleClickViewNotification",value:function(e){this.handleClickDelete(e),this.handleClickNotification()}},{key:"handleClickDelete",value:function(e){var t=this.state.notificationData,i=t.indexOf(e);t.splice(i,1),this.setState({notificationData:t,value:t.length})}},{key:"render",value:function(){var e=this,t=this.state,i=t.value,n=t.showNotifications,c=t.notificationData;return Object(j.jsxs)("div",{className:"notification-relative",children:[0===i?Object(j.jsx)("div",{className:"notification-container",children:Object(j.jsx)(f.a,{})}):Object(j.jsxs)("div",{className:"notification-container notification-not-empty",onClick:this.handleClickNotification,children:[Object(j.jsx)(g.a,{className:n&&"active"}),Object(j.jsx)("span",{className:"notification-badge-value",children:i})]}),n&&i>0&&Object(j.jsx)("div",{id:"myDropdown",className:"dropdown-content",children:Object(j.jsxs)("div",{className:"user_ctrl_box center",children:[Object(j.jsxs)("h2",{className:"dropdown-title",children:[c.length," Notificaciones"]}),c.map((function(t,i){return Object(j.jsxs)("div",{className:"notification_user_dropdown_menu",children:[Object(j.jsx)(v.b,{to:t.destiny,onClick:function(){return e.handleClickViewNotification(t)},children:Object(j.jsx)("span",{children:t.text})}),Object(j.jsx)("span",{className:"notification-delete",onClick:function(){return e.handleClickDelete(t)},children:"X"})]},i)}))]})})]})}}]),i}(n.Component)),k=b(Object(x.f)(w)),N=i(52),y=i.n(N),S=i(51),_=i.n(S),A=i(53),P=i.n(A),E=(i(81),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).handleChange=function(e,t){n.setState({value:e.target.value})},n.handleClickUp=function(e){n.setState({value:n.state.value+1})},n.handleClickDown=function(e){n.setState({value:n.state.value-1})},n.handleClickShow=function(e){n.setState({showVolumeBar:!n.state.showVolumeBar})},n.state={value:30,showVolumeBar:!0},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleClickDown=n.handleClickDown.bind(Object(O.a)(n)),n.handleClickUp=n.handleClickUp.bind(Object(O.a)(n)),n.handleClickShow=n.handleClickShow.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state,t=e.value,i=e.showVolumeBar;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"volume-flex-inline-size",children:[t>50?Object(j.jsx)(_.a,{onClick:this.handleClickShow}):t>5?Object(j.jsx)(y.a,{onClick:this.handleClickShow}):Object(j.jsx)(P.a,{onClick:this.handleClickShow}),i&&Object(j.jsx)("div",{className:"volume-bar-container-style-short",onClick:this.handleChangeCurrent,children:Object(j.jsx)("input",{className:"volume-input-value",type:"range",min:"0",max:"100",value:t,onChange:this.handleChange})})]})})}}]),i}(n.Component)),q=i(54),D=i.n(q),L=(i(82),b(function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={value:10,showSettings:!1,showNotifications:!0},n.handleClickSettings=n.handleClickSettings.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"handleClickSettings",value:function(){this.setState({showSettings:!this.state.showSettings})}},{key:"render",value:function(){var e=this.state.showSettings;return Object(j.jsxs)("div",{className:"settings-relative",children:[Object(j.jsx)("div",{className:"settings-container settings-not-empty",onClick:this.handleClickSettings,children:Object(j.jsx)(D.a,{className:e&&"active"})}),e&&Object(j.jsx)("div",{id:"mySettings",className:"dropdown-content",children:Object(j.jsxs)("div",{className:"user_ctrl_box center",children:[Object(j.jsx)("div",{className:"settings_user_dropdown_menu",children:Object(j.jsx)("span",{children:Object(j.jsxs)("div",{className:"container-switcher",children:[Object(j.jsx)("span",{className:"label-switcher",children:"Mostrar notificaciones: "}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",checked:this.props.notificationsEnabled,onChange:this.props.handleSwitchNotifications}),Object(j.jsx)("span",{className:"slider round"})]})]})})}),Object(j.jsx)("div",{className:"settings_user_dropdown_menu",onClick:this.handleClickSettings,children:Object(j.jsx)("span",{children:Object(j.jsxs)("div",{className:"container-switcher",children:[Object(j.jsx)("div",{children:"Notificar mi actividad a: "}),Object(j.jsx)("div",{children:"Amigos "})]})})}),Object(j.jsx)("div",{className:"settings_user_dropdown_menu",onClick:this.handleClickSettings,children:Object(j.jsx)("span",{children:"Mi Cuenta"})}),Object(j.jsx)("div",{className:"settings_user_dropdown_menu",onClick:this.handleClickSettings,children:Object(j.jsx)(E,{})})]})})]})}}]),i}(n.Component))),V=i(55),U=i.n(V),T=i(24),R=i.n(T),F=b(function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={notificationsEnabled:!0},n.handleSwitchNotifications=n.handleSwitchNotifications.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"handleSwitchNotifications",value:function(){this.setState({notificationsEnabled:!this.state.notificationsEnabled})}},{key:"render",value:function(){var e=this.state.notificationsEnabled;return Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)(v.b,{exact:!0,to:"/",activeClassName:"active",children:" Home "})}),Object(j.jsx)("li",{children:Object(j.jsxs)(v.b,{to:"/FAQ",activeClassName:"active",children:[" ",Object(j.jsx)(U.a,{})," "]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(v.b,{to:"/login",activeClassName:"active",children:[" ",Object(j.jsx)(R.a,{})," "]})}),e&&Object(j.jsx)("li",{children:Object(j.jsx)(k,{})}),Object(j.jsx)("li",{children:Object(j.jsx)(L,{notificationsEnabled:e,handleSwitchNotifications:this.handleSwitchNotifications})})]})}}]),i}(n.Component)),M=i(56),G=i.n(M),H=(i(83),b(function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={},n}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("button",{className:"button-with-icon",children:[Object(j.jsx)(G.a,{className:"img short-img img-button inline"}),"GUARDAR"]})})}}]),i}(n.Component))),I=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:["HOME",Object(j.jsx)(H,{}),Object(j.jsx)(E,{})]})}}]),i}(n.Component),B=(i(84),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={},n.limpiarAcordion=n.limpiarAcordion.bind(Object(O.a)(n)),n.desplegarAcordion=n.desplegarAcordion.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(){return e.limpiarAcordion()}))}},{key:"limpiarAcordion",value:function(){for(var e=document.querySelectorAll(".animaAccordion"),t=0;t<e.length;t++)e[t].classList.remove("animaAccordion")}},{key:"desplegarAcordion",value:function(e){var t=document.querySelectorAll(".accordion-content");setTimeout((function(){e>=0&&t[e].classList.add("animaAccordion")}),1e3)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Preguntanos"}),Object(j.jsx)("p",{children:"Puedes contactarnos al 0800-sp.five, en caso que la siguiente lista no resuelva tu consulta."}),Object(j.jsxs)("div",{className:"questions-form",children:[Object(j.jsx)("div",{className:"questions-titles",children:Object(j.jsx)("ul",{className:"accordion-list",children:Object(j.jsx)("li",{className:"accordion-title",children:"Uso"})})}),Object(j.jsxs)("ul",{className:"accordion-list",children:[Object(j.jsx)("li",{children:Object(j.jsxs)("div",{class:"accordion",onClick:function(){return e.desplegarAcordion(0)},children:[Object(j.jsx)("div",{class:"accordion-title",children:" Como doy de alta el servicio?"}),Object(j.jsx)("div",{class:"accordion-content",children:Object(j.jsx)("p",{children:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed."})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{class:"accordion",onClick:function(){return e.desplegarAcordion(1)},children:[Object(j.jsx)("div",{class:"accordion-title",children:" Cuanto cuesta?"}),Object(j.jsx)("div",{class:"accordion-content",children:Object(j.jsx)("p",{children:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error."})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{class:"accordion",onClick:function(){return e.desplegarAcordion(2)},children:[Object(j.jsx)("div",{class:"accordion-title",children:" Donde veo mis playlist?"}),Object(j.jsx)("div",{class:"accordion-content",children:Object(j.jsx)("p",{children:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quis. Dignissimos veniam alias similique sint quisquam mollitia praesentium adipisci fugiat atque vitae doloremque consequuntur dolorum, quibusdam sequi, enim doloribus quidem?"})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{class:"accordion",onClick:function(){return e.desplegarAcordion(3)},children:[Object(j.jsx)("div",{class:"accordion-title",children:" Como subo un audio"}),Object(j.jsx)("div",{class:"accordion-content",children:Object(j.jsx)("p",{children:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet amet tenetur error ullam ea voluptatum enim ut porro quae, minima accusantium sunt assumenda perferendis ad quas beatae aperiam obcaecati?"})})]})})]})]}),Object(j.jsxs)("div",{className:"questions-form",children:[Object(j.jsx)("div",{className:"questions-titles",children:Object(j.jsx)("ul",{className:"accordion-list",children:Object(j.jsx)("li",{className:"accordion-title",children:"Pagos"})})}),Object(j.jsxs)("ul",{className:"accordion-list",children:[Object(j.jsx)("li",{children:Object(j.jsxs)("div",{class:"accordion",onClick:function(){return e.desplegarAcordion(4)},children:[Object(j.jsx)("div",{class:"accordion-title",children:" Como realizo los pagos?"}),Object(j.jsx)("div",{class:"accordion-content",children:Object(j.jsx)("p",{children:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed."})})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{class:"accordion",onClick:function(){return e.desplegarAcordion(5)},children:[Object(j.jsx)("div",{class:"accordion-title",children:" Cuando se habilita mi plan?"}),Object(j.jsx)("div",{class:"accordion-content",children:Object(j.jsx)("p",{children:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error."})})]})})]})]})]})}}]),i}(n.Component)),z=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)(B,{})}}]),i}(n.Component),W=i(32),Q=i.n(W),X=i(34),J=i.n(X),Y=i(33),$=i.n(Y),K=(i(38),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={visibilityPassword:!1},n.handleChangeVisibilityPassword=n.handleChangeVisibilityPassword.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"render",value:function(){var e=this.state.visibilityPassword;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Acceder a mi cuenta"}),Object(j.jsxs)("form",{action:"",method:"post",children:[Object(j.jsx)("input",{type:"search",results:!0}),Object(j.jsxs)("div",{className:"input-icons",children:[Object(j.jsx)(R.a,{className:"icon-color"}),Object(j.jsx)("input",{className:"input-with-padding",type:"text",placeholder:"Usuario"})]}),Object(j.jsxs)("div",{className:"input-icons",children:[Object(j.jsx)(Q.a,{className:"icon-color"}),Object(j.jsx)("input",{className:"input-with-padding",type:e?"text":"password",placeholder:"Contrase\xf1a"}),e?Object(j.jsx)($.a,{className:"icon-color",onClick:this.handleChangeVisibilityPassword}):Object(j.jsx)(J.a,{className:"icon-color",onClick:this.handleChangeVisibilityPassword})]}),Object(j.jsx)(v.b,{to:"/recoveryPassword",activeClassName:"",children:Object(j.jsx)("span",{children:"Olvid\xe9 mi clave"})}),Object(j.jsx)(v.b,{to:"/",activeClassName:"",children:Object(j.jsx)("button",{children:"Acceder"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"No ten\xe9s cuenta? "}),Object(j.jsx)(v.b,{to:"/register",activeClassName:"",children:Object(j.jsx)("span",{children:"Registrate"})})]})]})]})}}]),i}(n.Component)),Z=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)(K,{})}}]),i}(n.Component),ee=i(35),te=i.n(ee),ie=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={visibilityPassword:!1},n.handleGoToLogin=n.handleGoToLogin.bind(Object(O.a)(n)),n.handleChangeVisibilityPassword=n.handleChangeVisibilityPassword.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"handleGoToLogin",value:function(){}},{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"render",value:function(){console.log("llega a register");var e=this.state.visibilityPassword;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Unirme a la comunidad"}),Object(j.jsxs)("form",{action:"",method:"post",children:[Object(j.jsx)("input",{type:"search",results:!0}),Object(j.jsxs)("div",{className:"input-icons",children:[Object(j.jsx)(R.a,{className:"icon-color"}),Object(j.jsx)("input",{className:"input-with-padding",type:"text",placeholder:"Usuario"})]}),Object(j.jsxs)("div",{className:"input-icons",children:[Object(j.jsx)(te.a,{className:"icon-color"}),Object(j.jsx)("input",{className:"input-with-padding",type:"mail",placeholder:"Mail"})]}),Object(j.jsxs)("div",{className:"input-icons",children:[Object(j.jsx)(Q.a,{className:"icon-color"}),Object(j.jsx)("input",{className:"input-with-padding",type:e?"text":"password",placeholder:"Contrase\xf1a"}),e?Object(j.jsx)($.a,{className:"icon-color",onClick:this.handleChangeVisibilityPassword}):Object(j.jsx)(J.a,{className:"icon-color",onClick:this.handleChangeVisibilityPassword})]}),Object(j.jsx)(v.b,{to:"/",activeClassName:"",children:Object(j.jsx)("button",{children:"Registrarme"})}),Object(j.jsx)("div",{children:Object(j.jsx)(v.b,{to:"/login",activeClassName:"",children:Object(j.jsx)("span",{children:"Ya tengo cuenta"})})})]})]})}}]),i}(n.Component),ne=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)(ie,{})}}]),i}(n.Component),ce=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){var n;return Object(o.a)(this,i),(n=t.call(this,e)).state={visibilityPassword:!1},n.handleChangeVisibilityPassword=n.handleChangeVisibilityPassword.bind(Object(O.a)(n)),n}return Object(r.a)(i,[{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"render",value:function(){this.state.visibilityPassword;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Recuperar clave"}),Object(j.jsx)("p",{children:"Te enviamos un mail con un c\xf3digo de 6 d\xedgitos y una clave temporal. Puedes utilizarlo en los pr\xf3ximos 5 minutos para ingresar y cambiar tu clave. "}),Object(j.jsxs)("form",{action:"",method:"post",children:[Object(j.jsx)("input",{className:"input-with-padding",type:"text"}),Object(j.jsx)("input",{className:"input-with-padding",type:"text"}),Object(j.jsx)(v.b,{to:"/",activeClassName:"",children:Object(j.jsx)("button",{children:"Acceder"})}),Object(j.jsx)(v.b,{to:"/",activeClassName:"",children:Object(j.jsx)("span",{children:"Cancelar"})})]})]})}}]),i}(n.Component),ae=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)(ce,{})}}]),i}(n.Component),se=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(v.a,{children:[Object(j.jsx)(F,{}),Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{exact:!0,path:"/",component:I}),Object(j.jsx)(x.a,{path:"/FAQ",component:z}),Object(j.jsx)(x.a,{path:"/login",component:Z}),Object(j.jsx)(x.a,{path:"/register",component:ne}),Object(j.jsx)(x.a,{path:"/recoveryPassword",component:ae})]})]})})}}]),i}(n.Component),oe=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(m,{children:Object(j.jsx)(h.Consumer,{children:function(e){return Object(j.jsx)("div",{className:"app ".concat(e),children:Object(j.jsx)(se,{})})}})})})}}]),i}(n.Component),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var de=i(30),ue=i(60),je=i(59),he={LOGIN:"LOGIN",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAIL:"FETCH_USERS_FAIL"},be=function(){return{type:he.FETCH_USERS_FAIL}},Oe={user:"",loading:!1,error:"",notificationsEnabled:!0,notificationData:[{text:"user1",index:0,destiny:"/home"},{text:"user2",index:1,destiny:"/FAQ"},{text:"Pepe te envi\xf3 una solicitud",index:2,destiny:"/home"},{text:"Mar\xeda comparti\xf3 una foto",index:3,destiny:"/home"},{text:"A Ger\xf3nimo le gust\xf3 tu comentario",index:4,destiny:"/home"}]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he.LOGIN:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});default:return e}},ve=i(27),xe=i.n(ve),pe=i(28),fe=i(58),Ce=i.n(fe),ge=xe.a.mark(Ne),we=xe.a.mark(ye),ke=xe.a.mark(Se);function Ne(){var e;return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(pe.b)(Ce.a.get,"https://jsonplaceholder.typicode.com/users");case 3:if(200!==(e=t.sent).status){t.next=9;break}return t.next=7,Object(pe.c)((i=e.data,{type:he.FETCH_USERS_SUCCESS,payload:i}));case 7:t.next=11;break;case 9:return t.next=11,Object(pe.c)(be());case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(pe.c)(be(t.t0));case 17:case"end":return t.stop()}var i}),ge,null,[[0,13]])}function ye(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.d)(he.FETCH_USERS_START,Ne);case 2:case"end":return e.stop()}}),we)}function Se(){return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.a)([ye()]);case 2:case"end":return e.stop()}}),ke)}var _e=Object(ue.a)(),Ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.b,Pe=Object(de.c)(me,Ae(Object(de.a)(_e)));_e.run(Se),s.a.render(Object(j.jsx)(je.a,{store:Pe,children:Object(j.jsx)(oe,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/materialComponents",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/materialComponents","/service-worker.js");re?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):le(e)}))}}()},38:function(e,t,i){},66:function(e,t,i){},67:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){}},[[106,1,2]]]);
//# sourceMappingURL=main.b3e97321.chunk.js.map