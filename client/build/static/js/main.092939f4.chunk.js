(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,n,c){},44:function(e,n,c){"use strict";c.r(n);var i=c(0),t=c.n(i),a=c(10),s=c.n(a),d=(c(33),c(7)),r=c(8),l=c(11),j=c(12),o=c(18),u=c(17),f=c(14),b=c(1),v=function(e){Object(o.a)(c,e);var n=Object(u.a)(c);function c(e){var i;return Object(l.a)(this,c),i=n.call(this,e),console.log(i.props),i}return Object(j.a)(c,[{key:"display",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return f.createPopup("xF6ZyWUR",{width:100}).open(),Object(b.jsx)(b.Fragment,{})}}]),c}(t.a.Component),h=(Object(d.b)((function(e){return{content:e.entities.article}}),(function(e){return{}}))(v),c(13)),O=c(46),x=c(47),m=function(e){Object(o.a)(c,e);var n=Object(u.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=n.call(this,e)).reference=function(){},i.launchSurvey=i.launchSurvey.bind(Object(h.a)(i)),i}return Object(j.a)(c,[{key:"componentDidMount",value:function(){for(var e=this,n=document.querySelectorAll(".fade-in"),c=document.querySelector("#take-survey"),i=function(e){setTimeout((function(){return n[e].classList.add("appear")}),60*e),setTimeout((function(){return n[e].classList.remove("appear")}),60*e+4e3)},t=0;t<n.length;t++)i(t);setTimeout((function(){c.style.boxShadow="#0d6efd 0px 0px 1000px 1000px"}),4e3),setTimeout((function(){return e.launchSurvey()}),7e3)}},{key:"launchSurvey",value:function(){f.createSlider("xF6ZyWUR",{mode:"drawer_left"}).open()}},{key:"render",value:function(){return Object(b.jsxs)(O.a,{className:"frame",children:[Object(b.jsx)(x.a,{children:Object(b.jsxs)("div",{id:"div-sentence",children:[Object(b.jsx)("div",{className:"fade-in",children:"P"}),Object(b.jsx)("div",{className:"fade-in",children:"r"}),Object(b.jsx)("div",{className:"fade-in",children:"e"}),Object(b.jsx)("div",{className:"fade-in",children:"p"}),Object(b.jsx)("div",{className:"fade-in",children:"a"}),Object(b.jsx)("div",{className:"fade-in",children:"r"}),Object(b.jsx)("div",{className:"fade-in",children:"e"}),Object(b.jsx)("div",{className:"fade-in",children:"\xa0"}),Object(b.jsx)("div",{className:"fade-in",children:"t"}),Object(b.jsx)("div",{className:"fade-in",children:"o"}),Object(b.jsx)("div",{className:"fade-in",children:"\xa0"}),Object(b.jsx)("div",{className:"fade-in",children:"("}),Object(b.jsx)("div",{className:"fade-in",children:"r"}),Object(b.jsx)("div",{className:"fade-in",children:"e"}),Object(b.jsx)("div",{className:"fade-in",children:")"}),Object(b.jsx)("div",{className:"fade-in",children:"d"}),Object(b.jsx)("div",{className:"fade-in",children:"i"}),Object(b.jsx)("div",{className:"fade-in",children:"s"}),Object(b.jsx)("div",{className:"fade-in",children:"c"}),Object(b.jsx)("div",{className:"fade-in",children:"o"}),Object(b.jsx)("div",{className:"fade-in",children:"v"}),Object(b.jsx)("div",{className:"fade-in",children:"e"}),Object(b.jsx)("div",{className:"fade-in",children:"r"}),Object(b.jsx)("div",{className:"fade-in",children:"\xa0"}),Object(b.jsx)("div",{className:"fade-in",children:"M"}),Object(b.jsx)("div",{className:"fade-in",children:"a"}),Object(b.jsx)("div",{className:"fade-in",children:"c"}),Object(b.jsx)("div",{className:"fade-in",children:"h"}),Object(b.jsx)("div",{className:"fade-in",children:"i"}),Object(b.jsx)("div",{className:"fade-in",children:"n"}),Object(b.jsx)("div",{className:"fade-in",children:"e"}),Object(b.jsx)("div",{className:"fade-in",children:"\xa0"}),Object(b.jsx)("div",{className:"fade-in",children:"L"}),Object(b.jsx)("div",{className:"fade-in",children:"e"}),Object(b.jsx)("div",{className:"fade-in",children:"a"}),Object(b.jsx)("div",{className:"fade-in",children:"r"}),Object(b.jsx)("div",{className:"fade-in",children:"n"}),Object(b.jsx)("div",{className:"fade-in",children:"i"}),Object(b.jsx)("div",{className:"fade-in",children:"n"}),Object(b.jsx)("div",{className:"fade-in",children:"g"}),Object(b.jsx)("div",{className:"fade-in",children:"."}),Object(b.jsx)("div",{className:"fade-in",children:"."}),Object(b.jsx)("div",{className:"fade-in",children:"."})]})}),Object(b.jsx)(x.a,{children:Object(b.jsx)("div",{id:"take-survey"})})]})}}]),c}(t.a.Component),N=Object(d.b)((function(e){return{content:e.entities}}),(function(e){return{}}))(m),p=function(){return Object(b.jsx)(N,{})},y=function(e){var n=e.store;return Object(b.jsx)(d.a,{store:n,children:Object(b.jsx)(r.a,{children:Object(b.jsx)(p,{})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(n){var c=n.getCLS,i=n.getFID,t=n.getFCP,a=n.getLCP,s=n.getTTFB;c(e),i(e),t(e),a(e),s(e)}))},w=c(5),S=c(27),k=c(28),C=c.n(k),F="RECEIVE_SURVEY",L=Object.freeze({survey:null}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),n.type){case F:return{};default:return e}},T=Object(w.c)({surveys:E}),M=Object(w.c)({entities:T}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(w.d)(M,e,Object(w.a)(S.a,C.a))};document.addEventListener("DOMContentLoaded",(function(){var e,n={session:{windowSize:{height:window.innerHeight,width:window.innerWidth}}};e=D(n),window.store=e;var c=document.getElementById("root");s.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(y,{store:e})}),c),g()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.092939f4.chunk.js.map