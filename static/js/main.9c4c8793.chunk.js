(this["webpackJsonpcomics-book"]=this["webpackJsonpcomics-book"]||[]).push([[0],{197:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){},201:function(e,t,c){},203:function(e,t,c){},328:function(e,t,c){},329:function(e,t,c){},330:function(e,t,c){},331:function(e,t,c){},332:function(e,t,c){},333:function(e,t,c){},334:function(e,t,c){},335:function(e,t,c){},336:function(e,t,c){},343:function(e,t,c){},344:function(e,t,c){"use strict";c.r(t);var n,r,a=c(0),i=c.n(a),s=c(18),o=c.n(s),l=c(22),u=c(176),f=c(384),d=c(24),j=c.p+"static/media/send-icon.d7969ca4.svg",b=(c(197),c(4)),m=Object(a.forwardRef)((function(e,t){var c=e.inputHandler,n=Object(a.useState)(!0),r=Object(d.a)(n,2),i=r[0],s=r[1];return Object(b.jsxs)("div",{className:"ChatInput",ref:t,children:[Object(b.jsx)("p",{className:"ChatInput__text-field",contentEditable:!0,onBlur:function(e){0===e.target.innerText.trim().length&&s(!0)},onFocus:function(){return s(!1)},onInput:c,suppressContentEditableWarning:!0}),i&&Object(b.jsx)("span",{className:"ChatInput__placeholder",children:"Message #Meetings:"}),Object(b.jsx)("img",{alt:"send-icon",className:"ChatInput__send-icon",src:j})]})})),O=(c(199),Object(a.forwardRef)((function(e,t){return Object(b.jsx)("div",{className:"ChatMessages",ref:t})})));!function(e){e.profileId="profileId",e.marginOffset="MARGIN_OFFSET"}(n||(n={})),function(e){e.profiles="PROFILES"}(r||(r={}));var p,v=Object(a.createContext)({margin:0,setMargin:function(){}}),h=function(e){var t=e.children,c=Object(a.useState)(parseInt(localStorage.getItem(n.marginOffset)||0)),r=Object(d.a)(c,2),i=r[0],s=r[1];return Object(b.jsx)(v.Provider,{value:{margin:i,setMargin:function(e){var t=i+e;(i>0||-1!==e)&&(s(t),localStorage.setItem(n.marginOffset,t))}},children:t})},g=(c(200),function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),c=Object(a.useContext)(v).margin;return Object(b.jsxs)("section",{className:"Chat",style:{height:"calc(100vh - ".concat(80+c,"px)")},children:[Object(b.jsx)(O,{ref:e}),Object(b.jsx)(m,{inputHandler:function(){var c=t.current.clientHeight;e.current.style.height="calc(100% - ".concat(c,"px)")},ref:t})]})}),P=c(386),x=c(382),_=c(345),N=c(385),k=c(381),y=(c(201),function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("form",{className:"NavMenuCreateChannelForm",children:[Object(b.jsx)("h2",{children:"Create channel:"}),Object(b.jsx)(N.a,{className:"NavMenuCreateChannelForm__input",onChange:function(e){return n(e.target.value)},label:"Channel name:",value:c}),Object(b.jsx)(k.a,{className:"ProfileForm__submit-button",color:"primary",size:"large",type:"submit",variant:"contained",children:"Create Channel"})]})}),C=c.p+"static/media/plus-white-icon.f41cd2c2.svg",M=(c(203),function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("div",{className:"NavMenuChannels",children:[Object(b.jsxs)("div",{className:"NavMenuChannels__nav",children:[Object(b.jsx)("p",{className:"NavMenuChannels__title",children:"Channels"}),Object(b.jsx)("img",{alt:"plus-white-icon",className:"NavMenuChannels__button",onClick:function(){return n(!0)},src:C})]}),Object(b.jsx)(P.a,{className:"NavMenuChannels__modal",closeAfterTransition:!0,open:c,onClose:function(){return n(!1)},BackdropComponent:x.a,BackdropProps:{timeout:500},children:Object(b.jsx)(_.a,{in:c,children:Object(b.jsx)("div",{className:"NavMenuChannels__card",children:Object(b.jsx)(y,{})})})})]})}),S=c.p+"static/media/close-white-icon.c6df9cb2.svg",I=c(121),w=c.n(I),E=c(171),F=c.n(E),H=c(36),L=c.n(H),D=c(172),R=c.n(D),T=c(34),A="profiles";!function(e){e[e.createProfile="".concat(A,"/createProfile")]="createProfile",e[e.createProfileSuccess="".concat(A,"/createProfileSuccess")]="createProfileSuccess",e[e.createProfileError="".concat(A,"/createProfileError")]="createProfileError",e[e.fetchProfilesSuccess="".concat(A,"/fetchProfilesSuccess")]="fetchProfilesSuccess",e[e.fetchProfilesError="".concat(A,"/fetchProfilesError")]="fetchProfilesError",e[e.uploadImageFinished="".concat(A,"/uploadImageFinished")]="uploadImageFinished",e[e.setProfileId="".concat(A,"/setProfileId")]="setProfileId"}(p||(p={}));var B,z=L()(A),W=Object(T.a)(z,L()("isPending")),U=Object(T.a)(z,w()(R.a,L()("data"))),V=function(e){return Object(T.a)(z,L()(e))},G=(c(328),function(e){var t=e.visible,c=e.setVisible,n=function(){return c(!1)},r=Object(l.c)(V("seletedProfileId")),a=Object(l.c)(function(e){return Object(T.a)(z,w()(F()((function(t){return t.profileId===e})),L()("data")))}(r)),i=a.name,s=a.src;return Object(b.jsxs)("div",{className:"NavMenu ".concat(t&&"NavMenu--visible"),onClick:n,children:[Object(b.jsx)("div",{className:"NavMenu__background ".concat(t&&"NavMenu__background--visible")}),Object(b.jsxs)("div",{className:"NavMenu__container ".concat(t&&"NavMenu__container--visible"),onClick:function(e){return e.stopPropagation()},children:[Object(b.jsxs)("div",{className:"NavMenu__header",children:[Object(b.jsxs)("div",{className:"NavMenu__profile-data",children:[Object(b.jsx)("img",{alt:"profile-avatar",className:"NavMenu__profile-avatar",src:s}),Object(b.jsx)("p",{className:"NavMenu__profile-name",children:i})]}),Object(b.jsx)("img",{alt:"close-white-icon",className:"NavMenu__button-close",onClick:n,src:S})]}),Object(b.jsx)("div",{className:"NavMenu__content",children:Object(b.jsx)(M,{})})]})]})}),J=c(177),Y=c(387),K=c.p+"static/media/close-icon.092c61d5.svg",Q=c.p+"static/media/gear-icon.e5deb93c.svg",X=c.p+"static/media/modify-size-icon.7b8f31f6.svg",q=(c(329),function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useContext)(v).setMargin,i=function(){n(null)};return Object(b.jsxs)("div",{className:"PageHeaderSettingsMenu",children:[Object(b.jsx)("img",{alt:"gear-icon",onClick:function(e){n(e.currentTarget)},src:Q}),Object(b.jsxs)(J.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:i,children:[Object(b.jsxs)(Y.a,{className:"PageHeaderSettingsMenu__item",onClick:function(){return r(1)},children:["Up",Object(b.jsx)("img",{alt:"gear-icon",src:X})]}),Object(b.jsxs)(Y.a,{className:"PageHeaderSettingsMenu__item",onClick:function(){return r(-1)},children:["Down",Object(b.jsx)("img",{alt:"reverted-gear-icon",className:"PageHeaderSettingsMenu__icon-rotate",src:X})]}),Object(b.jsxs)(Y.a,{className:"PageHeaderSettingsMenu__item",onClick:i,children:["Close",Object(b.jsx)("img",{alt:"close-icon",src:K})]})]})]})}),Z=c.p+"static/media/hamburger-menu.85ddbb0d.svg",$=(c(330),function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("header",{className:"PageHeader",children:[Object(b.jsxs)("div",{className:"PageHeader__left-column",children:[Object(b.jsx)("div",{className:"PageHeader__channel-picker",children:"ME"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"PageHeader__title",children:"#Meetings"}),Object(b.jsx)("p",{className:"PageHeader__users",children:"2 Brothers online"})]})]}),Object(b.jsxs)("div",{className:"PageHeader__right-column",children:[Object(b.jsx)(q,{}),Object(b.jsx)("img",{alt:"hamburger-menu",className:"PageHeader__hamburger-menu",onClick:function(){return n(!0)},src:Z})]}),Object(b.jsx)(G,{visible:c,setVisible:n})]})}),ee=c(19),te=c(383),ce=c.p+"static/media/back.d5208217.svg",ne=c.p+"static/media/button-picture.9659aaae.svg",re=c.p+"static/media/empty-image.acb60281.svg",ae=function(e,t){var c=new FileReader,n=e.target.files;c.onload=function(e){t({file:n[0],src:e.target.result})},c.readAsDataURL(n[0])},ie=(c(331),function(e){var t=e.clickHandler,c=e.name,n=void 0===c?"":c,r=e.imageData,i=void 0===r?null:r,s=e.submitHandler,o=e.title,u=Object(l.c)(W),f=Object(a.useRef)(null),j=Object(a.useState)(i),m=Object(d.a)(j,2),O=m[0],p=m[1],v=Object(a.useState)(n),h=Object(d.a)(v,2),g=h[0],P=h[1];return Object(b.jsxs)("div",{className:"ProfileForm__form-wrapper",children:[Object(b.jsxs)("h2",{className:"ProfileForm__title",children:[Object(b.jsx)("img",{alt:"back-icon",className:"ProfileForm__icon",onClick:t,src:ce}),o]}),Object(b.jsxs)("form",{className:"ProfileForm",onSubmit:function(e){e.preventDefault(),O&&g&&s({backToProfileList:t,imageData:O,name:g})},children:[Object(b.jsxs)("div",{className:"ProfileForm__avatar ".concat(O?"ProfileForm__avatar--selected":""),children:[O?Object(b.jsx)("img",{alt:"avatar",className:"ProfileForm__image",src:O.src}):Object(b.jsx)("img",{alt:"empty",className:"ProfileForm__empty-picture",src:re}),Object(b.jsx)("img",{alt:"button-icon",className:"ProfileForm__button-picture",onClick:function(){return f.current.click()},src:ne}),Object(b.jsx)("input",{className:"ProfileForm__input-file",onChange:function(e){return ae(e,p)},ref:f,type:"file"})]}),Object(b.jsx)(N.a,{className:"ProfileForm__input-name",onChange:function(e){return P(e.target.value)},label:"Profile name:",value:g}),Object(b.jsxs)(k.a,{className:"ProfileForm__submit-button",color:"primary",disabled:u,size:"large",type:"submit",variant:"contained",children:["Create Profile",u&&Object(b.jsx)(te.a,{className:"ProfileForm__spinner",color:"primary",size:20})]})]})]})}),se=function(e){return{type:p.createProfileError,payload:e}},oe=function(e){return{type:p.uploadImageFinished,payload:e}},le=function(e){var t=Object.assign({},e),c=Object(l.b)();return Object(b.jsx)(ie,Object(ee.a)({submitHandler:function(e){return c((t=e,{type:p.createProfile,payload:t}));var t},title:"Create Profile:"},t))},ue=function(e){(function(e){return"touches"in e})(e)&&e.touches.length<2&&e.preventDefault&&e.preventDefault()},fe=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c.shouldPreventDefault,r=void 0===n||n,i=c.delay,s=void 0===i?1e3:i,o=Object(a.useState)(!1),l=Object(d.a)(o,2),u=l[0],f=l[1],j=Object(a.useRef)(),b=Object(a.useRef)(),m=Object(a.useCallback)((function(t){r&&t.target&&(t.target.addEventListener("touchend",ue,{passive:!1}),b.current=t.target),j.current=setTimeout((function(){e(t),f(!0)}),s)}),[e,s,r]),O=Object(a.useCallback)((function(e){var c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];j.current&&clearTimeout(j.current),c&&!u&&t(),f(!1),r&&b.current&&b.current.removeEventListener("touchend",ue)}),[r,t,u]);return{onMouseDown:function(e){return m(e)},onTouchStart:function(e){return m(e)},onMouseUp:function(e){return O(e)},onMouseLeave:function(e){return O(e,!1)},onTouchEnd:function(e){return O(e)}}},de=c.p+"static/media/plus.c453ef1e.svg",je=(c(332),function(e){var t=e.clickHandler,c=e.mode,n=void 0===c?"add":c,r=e.name,i=e.src,s=Object(a.useState)(!1),o=Object(d.a)(s,2),l=o[0],u=o[1],f="select"===n&&l,j=fe((function(){u(!0)}),(function(){t()}));return Object(b.jsxs)("section",{className:"ProfilePicker ".concat(f?"ProfilePicker--blur":""),children:[Object(b.jsxs)("div",Object(ee.a)(Object(ee.a)({className:"ProfilePicker__card ProfilePicker--".concat(n,"__card ").concat(f?"ProfilePicker__card--blur":"")},j),{},{children:[Object(b.jsx)("p",{className:"ProfilePicker__title ProfilePicker--".concat(n,"__title"),children:r||"Create:"}),Object(b.jsx)("div",{className:"ProfilePicker__button ProfilePicker--".concat(n,"__button"),children:Object(b.jsx)("img",{alt:r?"".concat(r,"-avatar"):"icon",className:"ProfilePicker__image ProfilePicker--".concat(n,"__image"),src:i||de})})]})),f&&Object(b.jsx)("div",{className:"ProfilePicker__overlay"})]})});!function(e){e.createProfile="createProfile",e.listProfiles="listProfiles"}(B||(B={}));c(333);var be,me=function(e){var t=e.clickHandler,c=Object(l.b)(),n=Object(l.c)(V("data"));return Object(b.jsxs)("section",{className:"ProfilePickerList",children:[Object(b.jsx)("h1",{className:"ProfilePickerList__title",children:"Choose a brother-in-law:"}),Object(b.jsx)("p",{className:"ProfilePickerList__description",children:"Select a profile to start a conversation with your brother-in-law."}),Object(b.jsxs)("div",{className:"ProfilePickerList__pickers",children:[Object(b.jsx)(je,{clickHandler:function(){return t(B.createProfile)}}),n.map((function(e){var t=e.name,n=e.profileId,r=e.src;return Object(b.jsx)(je,{clickHandler:function(){return c((e=n,{type:p.setProfileId,payload:e}));var e},mode:"select",name:t,src:r},n)}))]})]})},Oe=(c(334),function(){var e=Object(a.useState)(B.listProfiles),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(b.jsx)("section",{className:"ProfilePickerSection",children:c===B.listProfiles?Object(b.jsx)(me,{clickHandler:function(e){return n(e)}}):Object(b.jsx)(le,{clickHandler:function(){return n(B.listProfiles)}})})}),pe=c.p+"static/media/gentleman.ff3326dc.svg",ve=(c(335),function(e){e.appDataLoaded;return Object(b.jsxs)("div",{className:"PageLoader",children:[Object(b.jsx)("h2",{className:"PageLoader__title",children:"WELCOME GENTLEMAN"}),Object(b.jsx)("img",{alt:"gentleman-logo",src:pe}),Object(b.jsx)("div",{className:"PageLoader__spinner",children:Array.from(Array(12)).map((function(e,t){return Object(b.jsx)("div",{className:"PageLoader__circle PageLoader__circle--".concat(t+1)},t)}))})]})}),he="auth";!function(e){e[e.login="".concat(he,"/login")]="login",e[e.loginSuccess="".concat(he,"/loginSuccess")]="loginSuccess",e[e.loginError="".concat(he,"/loginError")]="loginError"}(be||(be={}));var ge,Pe=L()(he),xe=Object(T.a)(Pe,L()("error")),_e=Object(T.a)(Pe,L()("isPending")),Ne=Object(T.a)(_e,xe,(function(e,t){return!e&&!t})),ke=Object(T.a)(U,(function(e){return e})),ye=(c(336),function(){var e=Object(l.c)(V("seletedProfileId")),t=Object(l.c)(ke);return t?e?Object(b.jsxs)("div",{className:"Page",children:[Object(b.jsx)($,{}),Object(b.jsx)(g,{})]}):Object(b.jsx)(Oe,{}):Object(b.jsx)(ve,{appDataLoaded:t})}),Ce=function(){Object(l.c)(_e),Object(l.b)(),Object(l.c)(xe);var e=Object(a.useMemo)((function(){return Object(u.a)({palette:{type:"dark"}})}),[]);return Object(b.jsx)(f.a,{theme:e,children:Object(b.jsx)(h,{children:Object(b.jsx)(ye,{})})})},Me=c(37),Se={apiKey:"AIzaSyBYQ05TbRrP2wVEX7NDn5CWodoAnnkpcOY",authDomain:"comics-book.firebaseapp.com",projectId:"comics-book",storageBucket:"comics-book.appspot.com",messagingSenderId:"426496482303",appId:"1:426496482303:web:ebf257ff0a64a90f6ae5ca"};!function(e){e.profiles="profiles",e.channels="channels"}(ge||(ge={}));var Ie=function(e){console.error(e)},we=function(e){for(var t=Object.keys(e),c=[],n=0;n<t.length;n++)c.push(e[t[n]]);return c},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,c=e.val();t(we(c||{}))},Fe=function(e,t,c){e.database().ref(c).on("value",(function(e){return Ee(e,t)}),Ie)},He=function(){var e=Object(l.c)(Ne),t=Object(l.b)();return Object(a.useEffect)((function(){Me.a.initializeApp(Se)}),[]),Object(a.useEffect)((function(){var c=function(e){t(function(e){return{type:p.fetchProfilesSuccess,payload:e}}(e))};e||setTimeout((function(){Fe(Me.a,c,ge.profiles)}),1)}),[e]),null},Le=c(42),De=c(173),Re=c(86),Te=c(174),Ae={error:"",isPending:!0,profileId:""},Be=function(e,t){var c=t.payload;return Object(ee.a)(Object(ee.a)({},e),{},{isPending:!1,profileId:c})},ze=function(e,t){var c=t.payload;return Object(ee.a)(Object(ee.a)({},e),{},{error:c,isPending:!1})},We={data:null,error:"",isPending:!0,seletedProfileId:""},Ue=function(e){return Object(ee.a)(Object(ee.a)({},e),{},{isPending:!0})},Ve=function(e){return Object(ee.a)(Object(ee.a)({},e),{},{isPending:!1})},Ge=function(e,t){var c=t.payload;return Object(ee.a)(Object(ee.a)({},e),{},{error:c,isPending:!1})},Je=function(e,t){var c=t.payload;return Object(ee.a)(Object(ee.a)({},e),{},{isPending:!1,data:c})},Ye=function(e){return Object(ee.a)(Object(ee.a)({},e),{},{isPending:!1})},Ke=function(e,t){var c=t.payload;return Object(ee.a)(Object(ee.a)({},e),{},{seletedProfileId:c})},Qe={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.loginSuccess:return Be(e,t);case be.loginError:return ze(e,t);default:return e}},profiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.createProfile:return Ue(e);case p.createProfileSuccess:return Ve(e);case p.createProfileError:return Ge(e,t);case p.fetchProfilesSuccess:return Je(e,t);case p.fetchProfilesError:return Ye(e);case p.setProfileId:return Ke(e,t);default:return e}}},Xe=function(){return Object(Le.combineReducers)(Object(ee.a)({},Qe))},qe=c(175),Ze=c(25),$e=c.n(Ze),et=c(23),tt=function(e){return{type:be.loginError,payload:e}},ct=$e.a.mark(nt);function nt(e){var t,c,r;return $e.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,c=localStorage.getItem(n.profileId)||"",a.prev=2,a.next=5,Me.a.auth().signInWithEmailAndPassword("eryk.sandecki@gmail.com",t);case 5:return a.next=7,Object(et.b)((i=c,{type:be.loginSuccess,payload:i}));case 7:a.next=14;break;case 9:return a.prev=9,a.t0=a.catch(2),r=a.t0.code,a.next=14,Object(et.b)(tt(r));case 14:case"end":return a.stop()}var i}),ct,null,[[2,9]])}var rt=$e.a.mark(at);function at(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.e)(be.login,nt)]);case 2:case"end":return e.stop()}}),rt)}var it=$e.a.mark(st);function st(e){var t,c,n,r,a,i,s;return $e.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,c=t.action,n=t.file,r=t.path,o.prev=2,a=Me.a.storage().ref(r).put(n),i=Object(Re.b)((function(e){return a.on("state_changed",e)})),s="",o.next=8,Object(et.e)(i,(function(){}));case 8:return o.next=10,a;case 10:return o.next=12,a.snapshot.ref.getDownloadURL().then((function(e){return s=e}));case 12:return o.next=14,Object(et.b)(c({result:"success",src:s}));case 14:o.next=20;break;case 16:return o.prev=16,o.t0=o.catch(2),o.next=20,Object(et.b)(c({error:o.t0,result:"error"}));case 20:case"end":return o.stop()}}),it,null,[[2,16]])}var ot;!function(e){e[e.uploadFile="".concat("common","/uploadFile")]="uploadFile"}(ot||(ot={}));var lt=$e.a.mark(ut);function ut(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.e)(ot.uploadFile,st)]);case 2:case"end":return e.stop()}}),lt)}var ft=c(178),dt=function(e){var t=e.error,c=e.result,n=e.src;if("error"===c)throw t;return n},jt=function(e){var t=[],c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";do{t.splice(0,t.length);for(var n=0;n<9;n++)t.push(c.charAt(Math.floor(Math.random()*c.length)))}while(e.find((function(e){return e.profileId===t.join("")})));return t.join("")},bt=function(e){for(var t=Me.a.database().ref(e[0]),c=1;c<e.length;c++)t=t.child(e[c]);return t},mt=function(e){return{type:ot.uploadFile,payload:e}},Ot=$e.a.mark(pt);function pt(e){var t,c,n,a,i,s,o,l,u,f;return $e.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.payload,c=t.backToProfileList,n=t.name,a=t.imageData.file,i="".concat(r.profiles,"/").concat(n),d.next=5,Object(et.c)(V("data"));case 5:return s=d.sent,o=jt(s),d.prev=7,d.next=10,Object(et.b)(mt({action:oe,path:i,file:a}));case 10:return d.next=12,Object(et.d)(p.uploadImageFinished);case 12:return l=d.sent,u=l.payload,f=dt(u),d.next=17,bt([ge.profiles]).set([].concat(Object(ft.a)(s),[{name:n,online:!1,profileId:o,src:f}]));case 17:return d.next=19,Object(et.b)({type:p.createProfileSuccess});case 19:return d.next=21,c();case 21:d.next=27;break;case 23:return d.prev=23,d.t0=d.catch(7),d.next=27,Object(et.b)(se(d.t0));case 27:case"end":return d.stop()}}),Ot,null,[[7,23]])}var vt=$e.a.mark(ht);function ht(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.e)(p.createProfile,pt)]);case 2:case"end":return e.stop()}}),vt)}var gt=[at,ut,ht],Pt=function(e){var t,c=Object(qe.a)(gt);try{for(c.s();!(t=c.n()).done;){var n=t.value;e.run(n)}}catch(r){c.e(r)}finally{c.f()}},xt=Object(Re.a)(),_t=function(){var e=Object(Le.createStore)(Xe(),{},Object(De.composeWithDevTools)(Le.applyMiddleware.apply(void 0,[Te.a].concat([xt]))));return Pt(xt),e};c(343);o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsxs)(l.a,{store:_t(),children:[Object(b.jsx)(He,{}),Object(b.jsx)(Ce,{})]})}),document.getElementById("root"))}},[[344,1,2]]]);
//# sourceMappingURL=main.9c4c8793.chunk.js.map