(this["webpackJsonptp1-react"]=this["webpackJsonptp1-react"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(29),c=n.n(s),o=(n(66),n(6)),r=n(7),l=n(9),d=n(8),u=(n(67),n(31)),h=n(0),j=a.a.createContext("light");function b(e){return function(t){return Object(h.jsx)(j.Consumer,{children:function(n){return Object(h.jsx)(e,Object(u.a)(Object(u.a)({},t),{},{theme:n}))}})}}var m=n(10),O=(n(69),b(function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={theme:"dark",switchDark:!0},i.handleSwitch=i.handleSwitch.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"handleSwitch",value:function(e){var t=this.state.switchDark?"light":"dark";this.setState({switchDark:!this.state.switchDark,theme:t})}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"container-switcher",children:[Object(h.jsx)("span",{className:"label-switcher",children:" Modo nocturno: "}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{type:"checkbox",checked:this.state.switchDark,onChange:this.handleSwitch}),Object(h.jsx)("span",{className:"slider round"})]})]}),Object(h.jsx)(j.Provider,{value:this.state.theme,children:this.props.children})]})}}]),n}(i.Component))),v=n(13),p=n(11),x=(n(70),n(49)),f=n.n(x),g=n(50),C=n.n(g),N=(n(71),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={value:0,showNotifications:!1,notificationData:[{text:"Nuevas ofertas en nuestros planes",index:0,destiny:"/register"},{text:"A Ger\xf3nimo Casanova le gust\xf3 tu comentario",index:1,destiny:"/home"},{text:"Pepe Rodriguez te envi\xf3 una solicitud",index:2,destiny:"/home"},{text:"Mar\xeda Fernandez comparti\xf3 una foto",index:3,destiny:"/home"},{text:"Es cumplea\xf1os de Pilar De La Canal",index:4,destiny:"/home"}]},i.handleClickNotification=i.handleClickNotification.bind(Object(m.a)(i)),i.handleClickDelete=i.handleClickDelete.bind(Object(m.a)(i)),i.handleClickViewNotification=i.handleClickViewNotification.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({value:this.state.notificationData.length})}},{key:"handleClickNotification",value:function(){this.setState({showNotifications:!this.state.showNotifications})}},{key:"handleClickViewNotification",value:function(e){this.handleClickDelete(e),this.handleClickNotification()}},{key:"handleClickDelete",value:function(e){var t=this.state.notificationData,n=t.indexOf(e);t.splice(n,1),this.setState({notificationData:t,value:t.length})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,i=t.showNotifications,a=t.notificationData;return Object(h.jsxs)("div",{className:"notification-relative",children:[0===n?Object(h.jsx)("div",{className:"notification-container",children:Object(h.jsx)(f.a,{})}):Object(h.jsxs)("div",{className:"notification-container notification-not-empty",onClick:this.handleClickNotification,children:[Object(h.jsx)(C.a,{className:i&&"active"}),Object(h.jsx)("span",{className:"notification-badge-value",children:n})]}),i&&n>0&&Object(h.jsx)("div",{id:"myDropdown",className:"dropdown-content",children:Object(h.jsxs)("div",{className:"user_ctrl_box center",children:[Object(h.jsxs)("h2",{className:"dropdown-title",children:[a.length," Notificaciones"]}),a.map((function(t,n){return Object(h.jsxs)("div",{className:"notification_user_dropdown_menu",children:[Object(h.jsx)(v.b,{to:t.destiny,onClick:function(){return e.handleClickViewNotification(t)},children:Object(h.jsx)("span",{children:t.text})}),Object(h.jsx)("span",{className:"notification-delete",onClick:function(){return e.handleClickDelete(t)},children:"X"})]},n)}))]})})]})}}]),n}(i.Component)),w=b(Object(p.f)(N)),k=n(52),y=n.n(k),S=n(51),q=n.n(S),_=n(53),A=n.n(_),E=(n(81),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).handleChange=function(e,t){i.setState({value:e.target.value})},i.handleClickUp=function(e){i.setState({value:i.state.value+1})},i.handleClickDown=function(e){i.setState({value:i.state.value-1})},i.handleClickShow=function(e){i.setState({showVolumeBar:!i.state.showVolumeBar})},i.state={value:30,showVolumeBar:!0},i.handleChange=i.handleChange.bind(Object(m.a)(i)),i.handleClickDown=i.handleClickDown.bind(Object(m.a)(i)),i.handleClickUp=i.handleClickUp.bind(Object(m.a)(i)),i.handleClickShow=i.handleClickShow.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.showVolumeBar;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"volume-flex-inline-size",children:[t>50?Object(h.jsx)(q.a,{onClick:this.handleClickShow}):t>5?Object(h.jsx)(y.a,{onClick:this.handleClickShow}):Object(h.jsx)(A.a,{onClick:this.handleClickShow}),n&&Object(h.jsx)("div",{className:"volume-bar-container-style-short",onClick:this.handleChangeCurrent,children:Object(h.jsx)("input",{className:"volume-input-value",type:"range",min:"0",max:"100",value:t,onChange:this.handleChange})})]})})}}]),n}(i.Component)),P=n(54),F=n.n(P),U=(n(82),b(function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={value:10,showSettings:!1,showNotifications:!0},i.handleClickSettings=i.handleClickSettings.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"handleClickSettings",value:function(){this.setState({showSettings:!this.state.showSettings})}},{key:"render",value:function(){var e=this.state.showSettings;return Object(h.jsxs)("div",{className:"settings-relative",children:[Object(h.jsx)("div",{className:"settings-container settings-not-empty",onClick:this.handleClickSettings,children:Object(h.jsx)(F.a,{className:e&&"active"})}),e&&Object(h.jsx)("div",{id:"mySettings",className:"dropdown-content",children:Object(h.jsxs)("div",{className:"user_ctrl_box center",children:[Object(h.jsx)("div",{className:"settings_user_dropdown_menu",children:Object(h.jsx)("span",{children:Object(h.jsxs)("div",{className:"container-switcher",children:[Object(h.jsx)("span",{className:"label-switcher",children:"Mostrar notificaciones: "}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{type:"checkbox",checked:this.props.notificationsEnabled,onChange:this.props.handleSwitchNotifications}),Object(h.jsx)("span",{className:"slider round"})]})]})})}),Object(h.jsx)("div",{className:"settings_user_dropdown_menu",onClick:this.handleClickSettings,children:Object(h.jsx)("span",{children:Object(h.jsxs)("div",{className:"container-switcher",children:[Object(h.jsx)("div",{children:"Notificar mi actividad a: "}),Object(h.jsx)("div",{children:"Amigos "})]})})}),Object(h.jsx)("div",{className:"settings_user_dropdown_menu",onClick:this.handleClickSettings,children:Object(h.jsx)("span",{children:"Mi Cuenta"})}),Object(h.jsx)("div",{className:"settings_user_dropdown_menu",onClick:this.handleClickSettings,children:Object(h.jsx)(E,{})})]})})]})}}]),n}(i.Component))),D=n(55),I=n.n(D),L=n(24),M=n.n(L),V=b(function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={notificationsEnabled:!0},i.handleSwitchNotifications=i.handleSwitchNotifications.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"handleSwitchNotifications",value:function(){this.setState({notificationsEnabled:!this.state.notificationsEnabled})}},{key:"render",value:function(){var e=this.state.notificationsEnabled;return Object(h.jsxs)("ul",{className:"nav",children:[Object(h.jsx)("li",{children:Object(h.jsx)(v.b,{exact:!0,to:"/",activeClassName:"active",children:" Home "})}),Object(h.jsx)("li",{children:Object(h.jsxs)(v.b,{to:"/FAQ",activeClassName:"active",children:[" ",Object(h.jsx)(I.a,{})," "]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(v.b,{to:"/login",activeClassName:"active",children:[" ",Object(h.jsx)(M.a,{})," "]})}),e&&Object(h.jsx)("li",{children:Object(h.jsx)(w,{})}),Object(h.jsx)("li",{children:Object(h.jsx)(U,{notificationsEnabled:e,handleSwitchNotifications:this.handleSwitchNotifications})})]})}}]),n}(i.Component)),T=n(56),R=n.n(T),B=(n(83),b(function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={},i}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"button-with-icon",children:[Object(h.jsx)(R.a,{className:"img short-img img-button inline"}),"GUARDAR"]})})}}]),n}(i.Component))),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:["HOME",Object(h.jsx)(B,{}),Object(h.jsx)(E,{})]})}}]),n}(i.Component),G=(n(84),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={},i.limpiarAcordion=i.limpiarAcordion.bind(Object(m.a)(i)),i.desplegarAcordion=i.desplegarAcordion.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(){return e.limpiarAcordion()}))}},{key:"limpiarAcordion",value:function(){for(var e=document.querySelectorAll(".animaAccordion"),t=0;t<e.length;t++)e[t].classList.remove("animaAccordion")}},{key:"desplegarAcordion",value:function(e){var t=document.querySelectorAll(".accordion-content");setTimeout((function(){e>=0&&t[e].classList.add("animaAccordion")}),1e3)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Preguntanos"}),Object(h.jsx)("p",{children:"Puedes contactarnos al 0800-sp.five, en caso que la siguiente lista no resuelva tu consulta."}),Object(h.jsxs)("div",{className:"questions-form",children:[Object(h.jsx)("div",{className:"questions-titles",children:Object(h.jsx)("ul",{className:"accordion-list",children:Object(h.jsx)("li",{className:"accordion-title",children:"Uso"})})}),Object(h.jsxs)("ul",{className:"accordion-list",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"accordion",onClick:function(){return e.desplegarAcordion(0)},children:[Object(h.jsx)("div",{className:"accordion-title",children:" Como doy de alta el servicio?"}),Object(h.jsx)("div",{className:"accordion-content",children:Object(h.jsx)("p",{children:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed."})})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"accordion",onClick:function(){return e.desplegarAcordion(1)},children:[Object(h.jsx)("div",{className:"accordion-title",children:" Cuanto cuesta?"}),Object(h.jsx)("div",{className:"accordion-content",children:Object(h.jsx)("p",{children:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error."})})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"accordion",onClick:function(){return e.desplegarAcordion(2)},children:[Object(h.jsx)("div",{className:"accordion-title",children:" Donde veo mis playlist?"}),Object(h.jsx)("div",{className:"accordion-content",children:Object(h.jsx)("p",{children:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quis. Dignissimos veniam alias similique sint quisquam mollitia praesentium adipisci fugiat atque vitae doloremque consequuntur dolorum, quibusdam sequi, enim doloribus quidem?"})})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"accordion",onClick:function(){return e.desplegarAcordion(3)},children:[Object(h.jsx)("div",{className:"accordion-title",children:" Como subo un audio"}),Object(h.jsx)("div",{className:"accordion-content",children:Object(h.jsx)("p",{children:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet amet tenetur error ullam ea voluptatum enim ut porro quae, minima accusantium sunt assumenda perferendis ad quas beatae aperiam obcaecati?"})})]})})]})]}),Object(h.jsxs)("div",{className:"questions-form",children:[Object(h.jsx)("div",{className:"questions-titles",children:Object(h.jsx)("ul",{className:"accordion-list",children:Object(h.jsx)("li",{className:"accordion-title",children:"Pagos"})})}),Object(h.jsxs)("ul",{className:"accordion-list",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"accordion",onClick:function(){return e.desplegarAcordion(4)},children:[Object(h.jsx)("div",{className:"accordion-title",children:" Como realizo los pagos?"}),Object(h.jsx)("div",{className:"accordion-content",children:Object(h.jsx)("p",{children:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed."})})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"accordion",onClick:function(){return e.desplegarAcordion(5)},children:[Object(h.jsx)("div",{className:"accordion-title",children:" Cuando se habilita mi plan?"}),Object(h.jsx)("div",{className:"accordion-content",children:Object(h.jsx)("p",{children:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error."})})]})})]})]})]})}}]),n}(i.Component)),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(G,{})}}]),n}(i.Component),z=n(32),Q=n.n(z),X=n(34),J=n.n(X),Y=n(33),$=n.n(Y),K=(n(38),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={visibilityPassword:!1,inputWithFocus:"",valueUsuario:"","valueContrase\xf1a":"",error:{}},i.handleChangeVisibilityPassword=i.handleChangeVisibilityPassword.bind(Object(m.a)(i)),i.handleFocusInput=i.handleFocusInput.bind(Object(m.a)(i)),i.validateInput=i.validateInput.bind(Object(m.a)(i)),i.handleChangeUsuario=i.handleChangeUsuario.bind(Object(m.a)(i)),i.handleChangeContrase\u00f1a=i.handleChangeContrase\u00f1a.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword}),this.handleFocusInput("contrase\xf1a")}},{key:"handleChangeUsuario",value:function(e){this.setState({valueUsuario:e.target.value})}},{key:"handleChangeContrase\xf1a",value:function(e){this.setState({"valueContrase\xf1a":e.target.value})}},{key:"handleFocusInput",value:function(e){var t=this;console.log("acaca");var n=this.state.inputWithFocus;this.setState({inputWithFocus:e}),n===e?console.log("mismo elem"):(""!==e&&(console.log("nuevo elem"),window.setTimeout((function(){var n=document.querySelector("#".concat(e));n&&(n.focus(),t.setState({error:{}}))}),100)),""!==n&&(console.log("viejo elem"),window.setTimeout((function(){var e=document.querySelector("#".concat(n));e&&t.validateInput(e,n)}),100)))}},{key:"validateInput",value:function(e,t){if(e.value.length<e.minLength||e.value.length>e.maxLength){e.className="".concat(e.className," error");var n={name:t,message:"Debes ingresar tu ".concat(t,".")};this.setState({error:n})}else e.className="".concat(e.className," valid"),this.setState({error:{}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.visibilityPassword,i=t.inputWithFocus,a=t.error;return Object(h.jsxs)("div",{className:"login-page-global-container",children:[Object(h.jsx)("h1",{children:"Acceder a mi cuenta"}),Object(h.jsxs)("form",{action:"",method:"post",className:"form-container",children:[Object(h.jsx)("input",{type:"search",results:!0}),Object(h.jsxs)("div",{className:"input-icons",onFocus:function(){return e.handleFocusInput("usuario")},onBlur:function(){return e.handleFocusInput("")},children:[Object(h.jsx)(M.a,{className:"icon-color ".concat("usuario"===i&&"with-focus"," ").concat("usuario"===a.name&&"with-error")}),"usuario"===i?Object(h.jsxs)("fieldset",{"aria-hidden":"true",className:"jss5 MuiOutlinedInput-notchedOutline",children:[Object(h.jsx)("legend",{className:"jss7",children:Object(h.jsx)("span",{children:"Email Address \xa0*"})}),Object(h.jsx)("input",{id:"usuario",name:"usuario",className:"input-with-padding",type:"text",placeholder:"Usuario*",required:!0,value:this.state.valueUsuario,onChange:this.handleChangeUsuario})]}):Object(h.jsx)("input",{id:"usuario",name:"usuario",className:"input-with-padding",type:"text",placeholder:"Usuario*",required:!0,value:this.state.valueUsuario,onChange:this.handleChangeUsuario}),"usuario"===a.name&&Object(h.jsx)("span",{className:"error-text",children:a.message})]}),Object(h.jsxs)("div",{className:"input-icons",onFocus:function(){return e.handleFocusInput("contrase\xf1a")},onBlur:function(){return e.handleFocusInput("")},children:[Object(h.jsx)(Q.a,{className:"icon-color ".concat("contrase\xf1a"===i&&"with-focus"," ").concat("contrase\xf1a"===a.name&&"with-error")}),"contrase\xf1a"===i?Object(h.jsxs)("fieldset",{"aria-hidden":"true",className:"jss5 MuiOutlinedInput-notchedOutline",children:[Object(h.jsx)("legend",{className:"jss7",children:Object(h.jsx)("span",{children:"Password Address \xa0*"})}),Object(h.jsx)("input",{id:"contrase\xf1a",name:"contrase\xf1a",className:"input-with-padding",type:n?"text":"password",placeholder:"Contrase\xf1a*",required:!0,minLength:"8",maxLength:"20",value:this.state.valueContrase\u00f1a,onChange:this.handleChangeContrase\u00f1a})]}):Object(h.jsx)("input",{id:"contrase\xf1a",name:"contrase\xf1a",className:"input-with-padding",type:n?"text":"password",placeholder:"Contrase\xf1a*",required:!0,minLength:"8",maxLength:"20",value:this.state.valueContrase\u00f1a,onChange:this.handleChangeContrase\u00f1a}),n?Object(h.jsx)($.a,{className:"icon-color ".concat("contrase\xf1a"===i&&"with-focus-after"," ").concat("contrase\xf1a"===a.name&&"with-error"),onClick:this.handleChangeVisibilityPassword}):Object(h.jsx)(J.a,{className:"icon-color ".concat("contrase\xf1a"===i&&"with-focus-after"," ").concat("contrase\xf1a"===a.name&&"with-error"),onClick:this.handleChangeVisibilityPassword}),"contrase\xf1a"===a.name&&Object(h.jsx)("span",{className:"error-text",children:a.message})]}),Object(h.jsx)("input",{type:"checkbox",id:"recordar",name:"recordar",className:"espaciado",value:!1}),Object(h.jsx)("label",{for:"recordar",children:" Remember me"}),Object(h.jsx)("div",{className:"espaciado",children:Object(h.jsx)(v.b,{to:"/",activeClassName:"",children:Object(h.jsx)("button",{className:"principal",children:"Acceder"})})}),Object(h.jsxs)("div",{className:"login-links-container espaciado",children:[Object(h.jsx)(v.b,{to:"/recoveryPassword",activeClassName:"",children:Object(h.jsx)("span",{children:"Olvid\xe9 mi clave"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"No ten\xe9s cuenta? "}),Object(h.jsx)(v.b,{to:"/register",activeClassName:"",children:Object(h.jsx)("span",{children:"Registrate"})})]})]})]})]})}}]),n}(i.Component)),Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(K,{})}}]),n}(i.Component),ee=n(35),te=n.n(ee),ne=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={visibilityPassword:!1},i.handleGoToLogin=i.handleGoToLogin.bind(Object(m.a)(i)),i.handleChangeVisibilityPassword=i.handleChangeVisibilityPassword.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"handleGoToLogin",value:function(){}},{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"render",value:function(){console.log("llega a register");var e=this.state.visibilityPassword;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Unirme a la comunidad"}),Object(h.jsxs)("form",{action:"",method:"post",children:[Object(h.jsx)("input",{type:"search",results:!0}),Object(h.jsxs)("div",{className:"input-icons",children:[Object(h.jsx)(M.a,{className:"icon-color"}),Object(h.jsx)("input",{className:"input-with-padding",type:"text",placeholder:"Usuario"})]}),Object(h.jsxs)("div",{className:"input-icons",children:[Object(h.jsx)(te.a,{className:"icon-color"}),Object(h.jsx)("input",{className:"input-with-padding",type:"email",placeholder:"Mail"})]}),Object(h.jsxs)("div",{className:"input-icons",children:[Object(h.jsx)(Q.a,{className:"icon-color"}),Object(h.jsx)("input",{className:"input-with-padding",type:e?"text":"password",placeholder:"Contrase\xf1a"}),e?Object(h.jsx)($.a,{className:"icon-color",onClick:this.handleChangeVisibilityPassword}):Object(h.jsx)(J.a,{className:"icon-color",onClick:this.handleChangeVisibilityPassword})]}),Object(h.jsx)(v.b,{to:"/",activeClassName:"",children:Object(h.jsx)("button",{children:"Registrarme"})}),Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/login",activeClassName:"",children:Object(h.jsx)("span",{children:"Ya tengo cuenta"})})})]})]})}}]),n}(i.Component),ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(ne,{})}}]),n}(i.Component),ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={visibilityPassword:!1},i.handleChangeVisibilityPassword=i.handleChangeVisibilityPassword.bind(Object(m.a)(i)),i}return Object(r.a)(n,[{key:"handleChangeVisibilityPassword",value:function(){this.setState({visibilityPassword:!this.state.visibilityPassword})}},{key:"render",value:function(){this.state.visibilityPassword;return Object(h.jsx)("form",{className:"jss3",novalidate:"",children:Object(h.jsx)("div",{className:"MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth",children:Object(h.jsx)("div",{className:"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl",children:Object(h.jsxs)("fieldset",{"aria-hidden":"true",className:"jss5 MuiOutlinedInput-notchedOutline",children:[Object(h.jsx)("legend",{className:"jss7",children:Object(h.jsx)("span",{children:"Email Address \xa0*"})}),Object(h.jsx)("input",{type:"text","aria-invalid":"false",autocomplete:"email",autofocus:"",id:"email",name:"email",required:"",className:"MuiInputBase-input MuiOutlinedInput-input",value:""})]})})})})}}]),n}(i.Component),se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(ae,{})}}]),n}(i.Component),ce=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(v.a,{children:[Object(h.jsx)(V,{}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",component:W}),Object(h.jsx)(p.a,{path:"/FAQ",component:H}),Object(h.jsx)(p.a,{path:"/login",component:Z}),Object(h.jsx)(p.a,{path:"/register",component:ie}),Object(h.jsx)(p.a,{path:"/recoveryPassword",component:se})]})]})})}}]),n}(i.Component),oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(O,{children:Object(h.jsx)(j.Consumer,{children:function(e){return Object(h.jsx)("div",{className:"app ".concat(e),children:Object(h.jsx)(ce,{})})}})})})}}]),n}(i.Component),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var de=n(30),ue=n(60),he=n(59),je={LOGIN:"LOGIN",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAIL:"FETCH_USERS_FAIL"},be=function(){return{type:je.FETCH_USERS_FAIL}},me={user:"",loading:!1,error:"",notificationsEnabled:!0,notificationData:[{text:"user1",index:0,destiny:"/home"},{text:"user2",index:1,destiny:"/FAQ"},{text:"Pepe te envi\xf3 una solicitud",index:2,destiny:"/home"},{text:"Mar\xeda comparti\xf3 una foto",index:3,destiny:"/home"},{text:"A Ger\xf3nimo le gust\xf3 tu comentario",index:4,destiny:"/home"}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je.LOGIN:return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});default:return e}},ve=n(27),pe=n.n(ve),xe=n(28),fe=n(58),ge=n.n(fe),Ce=pe.a.mark(ke),Ne=pe.a.mark(ye),we=pe.a.mark(Se);function ke(){var e;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(xe.b)(ge.a.get,"https://jsonplaceholder.typicode.com/users");case 3:if(200!==(e=t.sent).status){t.next=9;break}return t.next=7,Object(xe.c)((n=e.data,{type:je.FETCH_USERS_SUCCESS,payload:n}));case 7:t.next=11;break;case 9:return t.next=11,Object(xe.c)(be());case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(xe.c)(be(t.t0));case 17:case"end":return t.stop()}var n}),Ce,null,[[0,13]])}function ye(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.d)(je.FETCH_USERS_START,ke);case 2:case"end":return e.stop()}}),Ne)}function Se(){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.a)([ye()]);case 2:case"end":return e.stop()}}),we)}var qe=Object(ue.a)(),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.b,Ae=Object(de.c)(Oe,_e(Object(de.a)(qe)));qe.run(Se),c.a.render(Object(h.jsx)(he.a,{store:Ae,children:Object(h.jsx)(oe,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/materialComponents",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/materialComponents","/service-worker.js");re?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):le(e)}))}}()},38:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.617f6c58.chunk.js.map