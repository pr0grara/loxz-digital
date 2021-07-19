(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),s=a(18),c=a.n(s),o=(a(37),a(14)),n=a(24),l=a(4),d=a(9),h=a(10),u=a(13),m=a(12),j=a(11),p=a(28),b=a(49),v=a(50),y=a(0),x=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).reference=function(){},i.launchSurvey=i.launchSurvey.bind(Object(u.a)(i)),i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){for(var e=document.querySelectorAll(".fade-in"),t=(document.querySelector("#take-survey"),0),a=function(a){t+=parseInt(e[a].dataset.delay),setTimeout((function(){return e[a].classList.add("appear")}),t)},i=0;i<e.length;i++)a(i)}},{key:"launchSurvey",value:function(){p.createSlider("xF6ZyWUR",{mode:"drawer_left"}).open()}},{key:"render",value:function(){return Object(y.jsxs)(b.a,{className:"frame",children:[Object(y.jsxs)("div",{className:"paragraph-container",children:[Object(y.jsxs)("div",{className:"paragraph",children:[Object(y.jsx)("div",{className:"fade-in","data-delay":"500",children:"These days it's all about the data... but it only really helps us if we can properly analyze it to extract meaningfull insights..."}),Object(y.jsx)("div",{className:"fade-in","data-delay":"4000",children:"So how can we determine if we are ready to leverage our data with technologies like Machine Learning?"}),Object(y.jsx)("div",{className:"fade-in","data-delay":"3000",children:"At Loxz, we are building a suite of tools not only to deploy ML models but also to understand if you are ready to use these powerful tools."}),Object(y.jsx)("div",{className:"fade-in","data-delay":"4500",children:"We have developed an assesment which helps us understand your companies level of readiness and will soon provide you with reccomendations!"}),Object(y.jsx)("div",{className:"fade-in","data-delay":"4500",children:"Please take 5 min and use our free ML readiness assesment!"}),Object(y.jsx)("div",{className:"fade-in button-container","data-delay":"1000",children:Object(y.jsx)("div",{className:"button",onClick:this.launchSurvey,children:"Lets Go!"})})]}),Object(y.jsx)("div",{id:"div-sentence"})]}),Object(y.jsx)(v.a,{children:Object(y.jsx)("div",{id:"take-survey"})})]})}}]),a}(r.a.Component),f=Object(o.b)((function(e){return{content:e.entities}}),(function(e){return{}}))(x),g=a.p+"static/media/21Q2Report.b0a80712.pdf",O=a.p+"static/media/RiskPerspective.ee20ff62.pdf",N=a.p+"static/media/Q2-2021.bbad2ba7.png",w=a.p+"static/media/riskImg.9cd549c6.png",k=a.p+"static/media/yumi-arrow.aba22607.png",L=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).clicked=!1,i.onclick=i.onclick.bind(Object(u.a)(i)),i.handlekeypress=i.handlekeypress.bind(Object(u.a)(i)),i.mouseEnter=i.mouseEnter.bind(Object(u.a)(i)),i.mouseLeave=i.mouseLeave.bind(Object(u.a)(i)),i.details=!1,i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handlekeypress",value:function(e){console.log(e.key),e.key}},{key:"onclick",value:function(){var e=this;this.clicked=!this.clicked,this.setState((function(){return e.clicked}))}},{key:"mouseEnter",value:function(){document.querySelector(".report-details-container").style.transform="translateY(0px)"}},{key:"mouseLeave",value:function(){document.querySelector(".report-details-container").style.transform="translateY(-30px)"}},{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"footer-container",children:[Object(y.jsx)("div",{className:"privacy-cta-container",children:Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsx)("a",{href:"https://survey.loxz.com/#/privacy-policy",className:"link cta report-link",children:Object(y.jsx)("div",{className:"cta-text",children:"privacy policy"})})})}),Object(y.jsx)("div",{className:"launching-soon",children:"Launching Soon"}),Object(y.jsx)("div",{className:"ctas-container",children:Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:"https://survey.loxz.com",className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"take the survey"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})})]}),Object(y.jsxs)("div",{className:"reports-container",children:[Object(y.jsx)("div",{className:"blocker-component",children:"\xa0"}),Object(y.jsx)("div",{className:"reports-header",children:"Welcome to Loxz. Each quarter we release our findings from our ML Readiness Survey. You can find all reports here."}),Object(y.jsxs)("div",{className:"report-container",children:[Object(y.jsx)("a",{href:g,className:"report-link",children:Object(y.jsx)("img",{src:N,alt:"Q2 2021",className:"report-cover"})}),Object(y.jsxs)("div",{className:"reports-header-container",children:[Object(y.jsx)("div",{className:"report-header",children:"This report released on July 7, 2021, focuses on whether a company is ready for the implementation of machine learning in their organization and is structured to help you define four major barriers to assist in your efforts."}),Object(y.jsx)("div",{className:"report-signature",children:"-Chen Song, Lead Contributor, Data Scientist"}),Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:g,className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"Go to Report"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})]})]}),Object(y.jsxs)("div",{className:"report-container",children:[Object(y.jsx)("a",{href:O,className:"report-link",children:Object(y.jsx)("img",{src:w,alt:"Q2 2021",className:"report-cover"})}),Object(y.jsxs)("div",{className:"reports-header-container",children:[Object(y.jsx)("div",{className:"report-header",children:"In this 2-page report discover whether your company segment takes enough risk when building models. Leaders tend to be more conservative while start ups take more risk."}),Object(y.jsx)("div",{className:"report-signature",children:"-Chen Song, Data Scientist"}),Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:O,className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"Go to Report"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})]})]})]})]})}}]),a}(r.a.Component),z=Object(o.b)((function(e){return{content:e.entities.article}}),(function(e){return{}}))(L),D=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).pageNumber=1,i}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"privacy-container-container",children:Object(y.jsxs)("div",{className:"privacy-container",children:[Object(y.jsx)("div",{className:"main-header",children:"Privacy Policy"}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Privacy Policy"}),Object(y.jsx)("div",{className:"paragraph",children:"Protecting your private information is our priority. This Statement of Privacy applies to 6938 Buckingham Blvd, and Loxz Digital Group and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Loxz Digital Group include 6938 Buckingham Blvd. The Loxz Digital Group website is a Machine Learning Services and Reporting site. By using the Loxz Digital Group website, you consent to the data practices described in this statement."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Collection of your Information"}),Object(y.jsx)("div",{className:"paragraph",children:"In order to better provide you with products and services offered, Loxz Digital Group may collect personally identifiable information, such as your:"}),Object(y.jsxs)("ul",{className:"list",children:[Object(y.jsx)("li",{className:"item",children:"First and Last Name"}),Object(y.jsx)("li",{className:"item",children:"Mailing Address"}),Object(y.jsx)("li",{className:"item",children:"E-mail Address"}),Object(y.jsx)("li",{className:"item",children:"Phone Number"}),Object(y.jsx)("li",{className:"item",children:"Job Title"})]}),Object(y.jsx)("div",{className:"paragraph",children:"If you purchase Loxz Digital Group's products and services, we collect billing and credit card information. This information is used to complete the purchase transaction."}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group may also collect anonymous demographic information, which is not unique to you, such as your:"}),Object(y.jsxs)("ul",{className:"list",children:[Object(y.jsx)("li",{className:"item",children:"Age"}),Object(y.jsx)("li",{className:"item",children:"Gender"}),Object(y.jsx)("li",{className:"item",children:"Race"}),Object(y.jsx)("li",{className:"item",children:"Household Income"})]}),Object(y.jsx)("div",{className:"paragraph",children:"We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Use of your personal information"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group collects and uses your personal information to operate and deliver the services you have requested."}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group may also use your personally identifiable information to inform you of other products or services available from Loxz Digital Group and its affiliates."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Sharing Information with Third Parties"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group does not sell, rent or lease its customer lists to third parties."}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Loxz Digital Group, and they are required to maintain the confidentiality of your information."}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Loxz Digital Group or the site; (b) protect and defend the rights or property of Loxz Digital Group; and/or (c) act under exigent circumstances to protect the personal safety of users of Loxz Digital Group, or the public."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Tracking User Behavior"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group may keep track of the websites and pages our users visit within Loxz Digital Group, in order to determine what Loxz Digital Group services are the most popular. This data is used to deliver customized content and advertising within Loxz Digital Group to customers whose behavior indicates that they are interested in a particular subject area."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Automatically Collected Information"}),Object(y.jsx)("div",{className:"paragraph",children:"Information about your computer hardware and software may be automatically collected by Loxz Digital Group. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Loxz Digital Group website."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Use of Cookies"}),Object(y.jsx)("div",{className:"paragraph",children:'The Loxz Digital Group website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.'}),Object(y.jsx)("div",{className:"paragraph",children:"One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Loxz Digital Group pages, or register with Loxz Digital Group site or services, a cookie helps Loxz Digital Group to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Loxz Digital Group website, the information you previously provided can be retrieved, so you can easily use the Loxz Digital Group features that you customized."}),Object(y.jsx)("div",{className:"paragraph",children:"You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Loxz Digital Group services or websites you visit."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Links"}),Object(y.jsx)("div",{className:"paragraph",children:"This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Security of Your Personal Information"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group secures your personal information from unauthorized access, use, or disclosure. Loxz Digital Group uses the following methods for this purpose:"})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"SSL Protocol"}),Object(y.jsx)("div",{className:"paragraph",children:"When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol."}),Object(y.jsx)("div",{className:"paragraph",children:"We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Right to Deletion"}),Object(y.jsx)("div",{className:"paragraph",children:"Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:"}),Object(y.jsxs)("ul",{className:"list",children:[Object(y.jsx)("li",{className:"item",children:"Delete your personal information from our records; and"}),Object(y.jsx)("li",{className:"item",children:"Direct any service providers to delete your personal information from their records."})]}),Object(y.jsx)("div",{className:"paragraph",children:"Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:"}),Object(y.jsxs)("ul",{className:"list",children:[Object(y.jsx)("li",{className:"item",children:"Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;"}),Object(y.jsx)("li",{className:"item",children:"Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;"}),Object(y.jsx)("li",{className:"item",children:"Debug to identify and repair errors that impair existing intended functionality;"}),Object(y.jsx)("li",{className:"item",children:"Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;"}),Object(y.jsx)("li",{className:"item",children:"Comply with the California Electronic Communications Privacy Act;"}),Object(y.jsx)("li",{className:"item",children:"Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;"}),Object(y.jsx)("li",{className:"item",children:"Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;"}),Object(y.jsx)("li",{className:"item",children:"Comply with an existing legal obligation; or"}),Object(y.jsx)("li",{className:"item",children:"Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information."})]})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Children Under Thirteen"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"E-Mail Communications"}),Object(y.jsx)("div",{className:"paragraph",children:"From time to time, Loxz Digital Group may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Loxz Digital Group or click on a link therein."}),Object(y.jsx)("div",{className:"paragraph",children:"If you would like to stop receiving marketing or promotional communications via email from Loxz Digital Group, you may opt out of such communications by Clicking on the unsubscribe button or sending an email directly to privacy@loxz.com."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Changes to this Statement"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy."})]}),Object(y.jsxs)("div",{className:"section-container",children:[Object(y.jsx)("div",{className:"section-header",children:"Contact information"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group welcomes your questions or comments regarding this Statement of Privacy. If you believe that Loxz Digital Group has not adhered to this Statement, please contact Loxz Digital Group at:"}),Object(y.jsx)("div",{className:"paragraph",children:"Loxz Digital Group"}),Object(y.jsx)("div",{className:"paragraph",children:"6938 Buckingham Blvd"}),Object(y.jsx)("div",{className:"paragraph",children:"Berkeley, CA 94705"}),Object(y.jsx)("div",{className:"paragraph",children:"Email Address: privacy@loxz.com"}),Object(y.jsx)("div",{className:"paragraph",children:"Telephone: 5103675832"}),Object(y.jsx)("div",{className:"paragraph",children:"Effective as of July 07, 2021"})]})]})})}}]),a}(r.a.Component),G=Object(o.b)((function(e){return{content:e.entities.article}}),(function(e){return{}}))(D),S=a(21),C=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(S.a,{children:[Object(y.jsx)("title",{children:"ML Readiness Report for Q2 2021"}),Object(y.jsx)("meta",{property:"og:image",content:"%PUBLIC_URL%/Q2-2021.png"})]}),Object(y.jsxs)("div",{className:"footer-container",children:[Object(y.jsx)("div",{className:"privacy-cta-container",children:Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsx)("a",{href:"https://survey.loxz.com/#/privacy-policy",className:"link cta report-link",children:Object(y.jsx)("div",{className:"cta-text",children:"privacy policy"})})})}),Object(y.jsx)("div",{className:"ctas-container",children:Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:"https://survey.loxz.com",className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"take the survey"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})})]}),Object(y.jsx)("div",{className:"reports-container solo-report",children:Object(y.jsxs)("div",{className:"report-container",children:[Object(y.jsxs)("div",{className:"reports-header-container",children:[Object(y.jsx)("div",{className:"report-header",children:"Welcome to Loxz. Each quarter we release our findings from our ML Readiness Survey. This report released on July 7, 2021, focuses on whether a company is ready for the implementation of machine learning in their organization and is structured to help you define four major barriers to assist in your efforts."}),Object(y.jsx)("div",{className:"report-signature",children:"-Chen Song, Lead Contributor,  Data Scientist"}),Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:g,className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"Go to Report"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})]}),Object(y.jsx)("a",{href:g,className:"report-link",children:Object(y.jsx)("img",{src:N,alt:"Q2 2021",className:"report-cover"})})]})})]})}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(S.a,{children:[Object(y.jsx)("title",{children:"Risk Perspective for Machine Learning"}),Object(y.jsx)("meta",{property:"og:image",content:"%PUBLIC_URL%/riskImg.png"})]}),Object(y.jsxs)("div",{className:"footer-container",children:[Object(y.jsx)("div",{className:"privacy-cta-container",children:Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsx)("a",{href:"https://survey.loxz.com/#/privacy-policy",className:"link cta report-link",children:Object(y.jsx)("div",{className:"cta-text",children:"privacy policy"})})})}),Object(y.jsx)("div",{className:"ctas-container",children:Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:"https://survey.loxz.com",className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"take the survey"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})})]}),Object(y.jsx)("div",{className:"reports-container solo-report",children:Object(y.jsxs)("div",{className:"report-container",children:[Object(y.jsxs)("div",{className:"reports-header-container",children:[Object(y.jsx)("div",{className:"report-header",children:"In this 2-page report discover whether your company segment takes enough risk when building models. Leaders tend to be more conservative while start ups take more risk."}),Object(y.jsx)("div",{className:"report-signature",children:"-Chen Song, Data Scientist"}),Object(y.jsx)("div",{className:"cta-container",children:Object(y.jsxs)("a",{href:O,className:"link cta",children:[Object(y.jsx)("div",{className:"cta-text",children:"Go to Report"}),Object(y.jsx)("img",{src:k,alt:"",className:"cta-img"})]})})]}),Object(y.jsx)("a",{href:O,className:"report-link",children:Object(y.jsx)("img",{src:w,alt:"Q2 2021",className:"report-cover"})})]})})]})}}]),a}(r.a.Component),I=function(){return Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(f,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/reports",children:Object(y.jsx)(z,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/reports/2021-Q2",children:Object(y.jsx)(C,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/reports/risk-perspective",children:Object(y.jsx)(P,{})}),Object(y.jsx)(l.a,{exact:!0,path:"/privacy-policy",children:Object(y.jsx)(G,{})})]})},T=function(e){var t=e.store;return Object(y.jsx)(o.a,{store:t,children:Object(y.jsx)(n.a,{children:Object(y.jsx)(I,{})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),r(e),s(e),c(e)}))},E=a(15),R=a(31),M=a(32),W=a.n(M),B="RECEIVE_SURVEY",A=Object.freeze({survey:null}),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case B:return{};default:return e}},U=Object(E.b)({surveys:F}),Q=Object(E.b)({entities:U}),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(E.c)(Q,e,Object(E.a)(R.a,W.a))};document.addEventListener("DOMContentLoaded",(function(){var e,t={session:{windowSize:{height:window.innerHeight,width:window.innerWidth}}};e=Y(t),window.store=e;var a=document.getElementById("root");c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(T,{store:e})}),a),q()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.1b721310.chunk.js.map