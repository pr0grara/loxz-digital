(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(10),o=n.n(i),u=(n(33),n(7)),a=n(8),s=n(11),d=n(12),l=n(18),j=n(17),f=n(14),h=n(2),b=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(s.a)(this,n),r=t.call(this,e),console.log(r.props),r}return Object(d.a)(n,[{key:"display",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return f.createPopup("xF6ZyWUR",{width:100}).open(),Object(h.jsx)(h.Fragment,{})}}]),n}(c.a.Component),v=(Object(u.b)((function(e){return{content:e.entities.article}}),(function(e){return{}}))(b),n(13)),O=n(46),p=n(47),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).reference=function(){},r.launchSurvey=r.launchSurvey.bind(Object(v.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=document.querySelectorAll(".fade-in"),n=document.querySelector("#take-survey"),r=function(e){setTimeout((function(){return t[e].classList.add("appear")}),35*e),setTimeout((function(){return t[e].classList.remove("appear")}),35*e+3e3)},c=0;c<t.length;c++)r(c);setTimeout((function(){n.style.boxShadow="#0d6efd 0px 0px 1000px 1000px"}),2e3),setTimeout((function(){return e.launchSurvey()}),3e3)}},{key:"launchSurvey",value:function(){f.createSlider("xF6ZyWUR",{mode:"drawer_left"}).open()}},{key:"render",value:function(){return Object(h.jsxs)(O.a,{className:"frame",children:[Object(h.jsx)(p.a,{children:Object(h.jsx)("div",{id:"div-sentence",children:Object(h.jsx)("div",{className:"fade-in",children:"Prepare to harness the Power of Machine Learning in less than 7 minutes?"})})}),Object(h.jsx)(p.a,{children:Object(h.jsx)("div",{id:"take-survey"})})]})}}]),n}(c.a.Component),m=Object(u.b)((function(e){return{content:e.entities}}),(function(e){return{}}))(y),x=function(){return Object(h.jsx)(m,{})},w=function(e){var t=e.store;return Object(h.jsx)(u.a,{store:t,children:Object(h.jsx)(a.a,{children:Object(h.jsx)(x,{})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))},S=n(5),k=n(27),C=n(28),F=n.n(C),L="RECEIVE_SURVEY",E=Object.freeze({survey:null}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case L:return{};default:return e}},M=Object(S.c)({surveys:T}),P=Object(S.c)({entities:M}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(S.d)(P,e,Object(S.a)(k.a,F.a))};document.addEventListener("DOMContentLoaded",(function(){var e,t={session:{windowSize:{height:window.innerHeight,width:window.innerWidth}}};e=D(t),window.store=e;var n=document.getElementById("root");o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{store:e})}),n),g()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.cebb8fbb.chunk.js.map