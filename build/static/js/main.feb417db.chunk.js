(this["webpackJsonpdesafio-front"]=this["webpackJsonpdesafio-front"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),s=n.n(a),o=n(8),i=n.n(o),l=(n(74),n(44)),j=n(12),u="/play",x="/questions",b="/report",d=n(16),h=n(10),p=n(134),O=n(130),f=n(135),m=n(11),g=m.a.div(c||(c=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),v=n(2),w=Object(a.createContext)();function y(e){var t=e.children,n=Object(a.useState)(0),c=Object(d.a)(n,2),r=c[0],s=c[1];return Object(v.jsx)(w.Provider,{value:{amount:r,setAmount:s},children:t})}function A(){var e=Object(j.f)();return{toHome:function(){return e.push("/")},toPlay:function(){return e.push(u)},toQuestions:function(){return e.replace(x)},toReport:function(){return e.replace(b)}}}var C,M=Object(O.a)((function(e){return{root:{"& > *":{margin:"5px",minWidth:"320px"}}}})),k=m.a.form(r||(r=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"])));function L(){var e=Object(a.useContext)(w),t=e.amount,n=e.setAmount,c=A(),r=c.toPlay,s=c.toReport,o=Object(a.useState)(!1),i=Object(d.a)(o,2),l=i[0],j=i[1],u=M();return Object(a.useEffect)((function(){window.localStorage.getItem("QAs")&&j(!0)}),[]),Object(v.jsxs)(g,{children:[Object(v.jsxs)(k,{className:u.root,autoComplete:"off",children:[Object(v.jsx)("label",{children:"Type the number of questions to be answered"}),Object(v.jsx)(p.a,{required:!0,type:"number",value:t,name:"amount",onChange:function(e){var t=e.target.value;t>0&&n(t)},variant:"filled",label:"Amount"}),Object(v.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),t<=0?alert("Please, you need to answer at least one question"):r()},children:"OK"})]}),l?Object(v.jsx)(f.a,{variant:"contained",onClick:s,children:"Show report"}):Object(v.jsx)(v.Fragment,{})]})}var N=m.a.div(C||(C=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  min-width: 300px;\n  >p{\n    width: 100%;\n    margin-bottom: 20px;\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n  }\n"])));function S(){var e=A(),t=e.toHome,n=e.toQuestions;return Object(v.jsx)(g,{children:Object(v.jsxs)(N,{children:[Object(v.jsx)("p",{children:"Are you ready to get started?"}),Object(v.jsx)(f.a,{variant:"contained",color:"primary",onClick:n,children:"START"}),Object(v.jsx)(f.a,{variant:"contained",color:"secondary",onClick:t,children:"CANCEL"})]})})}var Z,q,E,H,Q,z=n(32),I=n.n(z),B=n(40),_=n(63),F=n(64),P=n.n(F).a.create({baseURL:"https://opentdb.com/api.php"}),J=m.a.article(Z||(Z=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 800px;\n  max-width: 800px;\n  min-width: 500px;\n  min-height: 300px;\n  max-height: 350px;\n"]))),R=m.a.p(q||(q=Object(h.a)(["\n  width: 100%;\n  text-align: justify;\n  padding: 50px 20px;\n  border: 1px solid #eee;\n"]))),T=m.a.div(E||(E=Object(h.a)(["\n  width: 100%;\n  height: 40px;\n  background-color: #F8F9FA;\n  border: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 500ms;\n  :hover {\n    background-color: #e8e8e8;\n  }\n"]))),Y=m.a.p(H||(H=Object(h.a)(["\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10px;\n  border: 1px solid #eee;\n  background-color: #e8e8e8;\n  \n"])));function G(e){var t=e.question,n=e.next,c=Object(a.useState)(),r=Object(d.a)(c,2),s=r[0],o=r[1],i=t.incorrect_answers.length,l=function(){var e,n,c={},r=(e=0,n=i,e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e);(r>i||r<0)&&(r=0);for(var a=0;a<i+1;a++)r>0?c[a]=t.incorrect_answers[r-1]:(c[a]=t.correct_answer,c.correct=a),r===i?r=0:r+=1;o(c)},j=function(e){var c=JSON.parse(window.localStorage.getItem("QAs"));Array.isArray(c)||(c=[]);for(var r=[],a=0;a<i+1;a++)r.push(s[a]);var o={question:t.question,answersQA:r,correct:s.correct,user:e};c.push(o),window.localStorage.setItem("QAs",JSON.stringify(c)),n()};return Object(a.useEffect)((function(){l()}),[t]),Object(v.jsxs)(J,{children:[Object(v.jsx)(R,{children:t.question}),function(){if(!s)return Object(v.jsx)(v.Fragment,{});for(var e=[],t=function(t){e.push(Object(v.jsxs)(T,{onClick:function(){return j(t)},children:[Object(v.jsx)(Y,{children:t+1}),Object(v.jsx)("p",{children:s[t]})]},t+1))},n=0;n<i+1;n++)t(n);return e}()]})}var V,W,D=m.a.div(Q||(Q=Object(h.a)(["\n  width: 80px;\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  >p{\n    color: ",";\n    margin-top: 10px;\n  }\n  margin: 0 20px;\n"])),(function(e){return"#000"===e.color?"#000":"#00c2ff"})),K={celebrities:function(e){return e.toLowerCase().includes("celebrities")},entertainment:function(e){return e.toLowerCase().includes("entertainment")},geography:function(e){return e.toLowerCase().includes("geography")},science:function(e){return e.toLowerCase().includes("science")},sports:function(e){return e.toLowerCase().includes("sports")}};function U(e){var t=e.name,n=e.category,c=function(){if(K.hasOwnProperty(t))return K[t](n)?"#00c2ff":"#000";for(var e in K)if(K[e](n))return"#000";return"#00c2ff"};switch(t){case"celebrities":return Object(v.jsxs)(D,{color:c(),children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:c(),children:Object(v.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),Object(v.jsx)("p",{children:"Celebrities"})]});case"entertainment":return Object(v.jsxs)(D,{color:c(),children:[Object(v.jsxs)("svg",{version:"1.1",id:"Icons",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32",fill:c(),children:[Object(v.jsx)("circle",{className:"st0",cx:"9",cy:"7",r:"5"}),Object(v.jsx)("circle",{className:"st0",cx:"19",cy:"7",r:"5"}),Object(v.jsx)("path",{className:"st0",d:"M21,25H7c-1.1,0-2-0.9-2-2v-6c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v6C23,24.1,22.1,25,21,25z"}),Object(v.jsx)("polygon",{className:"st0",points:"29,25 23,22 23,18 29,15 "}),Object(v.jsx)("polyline",{className:"st0",points:"10,31 14,25 18,31 "}),Object(v.jsx)("circle",{className:"st0",cx:"9",cy:"7",r:"1"}),Object(v.jsx)("circle",{className:"st0",cx:"19",cy:"7",r:"1"})]}),Object(v.jsx)("p",{children:"Entertainment"})]});case"geography":return Object(v.jsxs)(D,{color:c(),children:[Object(v.jsxs)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",fill:c(),children:[Object(v.jsx)("path",{className:"cls-1",d:"M108.78629,85.60643a3.14576,3.14576,0,0,0-4.70716-4.17442,45.39348,45.39348,0,1,1-60.648-66.83561l.01533-.01021.01612-.013A45.21613,45.21613,0,0,1,51.35,9.97706a3.14577,3.14577,0,1,0-2.6026-5.728A51.77332,51.77332,0,0,0,42.349,7.71784l-3.4614-4.76989a3.14577,3.14577,0,1,0-5.09207,3.69518l3.4629,4.772a51.67084,51.67084,0,0,0-18.837,39.91155,51.68854,51.68854,0,0,0,47.73331,51.53528v7.46469H50.40374a2.60361,2.60361,0,0,0-2.5185,1.9433l-2.836,10.81676a2.60362,2.60362,0,0,0,2.51849,3.26393H92.64341a2.60362,2.60362,0,0,0,2.5185-3.26393l-2.836-10.81676a2.60361,2.60361,0,0,0-2.51849-1.9433H74.05636v-7.46953a51.73421,51.73421,0,0,0,23.79627-7.93644l3.63149,5.005a3.14581,3.14581,0,1,0,5.09244-3.69482l-3.62889-5.0014A51.6723,51.6723,0,0,0,108.78629,85.60643Z"}),Object(v.jsx)("path",{className:"cls-2",d:"M47.06513,20.60463a38.36224,38.36224,0,0,0-14.20731,39.724c.1686.69731.3631,1.40731.57787,2.11047A38.39026,38.39026,0,0,0,48.7556,83.107c.61912.415,1.24215.80633,1.85231,1.16332a38.34714,38.34714,0,0,0,42.12264-2.03242l.45656-.3386A38.35929,38.35929,0,0,0,107.39279,42.1766c-.16734-.69342-.36158-1.40306-.57733-2.10956A38.38739,38.38739,0,0,0,91.49617,19.39992l-.00018-.00018c-.61532-.41229-1.2388-.80489-1.85346-1.16711a38.349,38.349,0,0,0-42.12083,2.0335ZM37.3425,55.457a32.96354,32.96354,0,0,1,3.10968-18.77327l1.01034-2.05634.21577,2.281c.06951.73441.16826,1.49822.29366,2.2703a47.73353,47.73353,0,0,0,3.27282,11.003l.19943.46966-7.96146,5.90209ZM50.279,77.6927a33.11959,33.11959,0,0,1-11.2206-15.13588l-.16457-.45371,8.91392-6.60823.35877.64533a71.4551,71.4551,0,0,0,10.89968,14.703l.51316.53079-8.914,6.60814ZM73.88356,60.77l-9.9892,7.4052-.395-.39519A64.6909,64.6909,0,0,1,52.38613,52.78894l-.26328-.49278,9.989-7.40521ZM66.36868,41.73553l9.988-7.40467.39506.39519A64.70427,64.70427,0,0,1,87.865,49.71723l.26319.49278L78.14,57.6145Zm9.068,42.14585A32.96585,32.96585,0,0,1,56.573,81.39757l-1.00831-.45274L63.526,75.04275l.39135.32732A47.846,47.846,0,0,0,73.49382,81.702c.704.34464,1.40562.66126,2.08544.94117l2.11355.87054Zm10.94673-4.66572a10.836,10.836,0,0,1-1.784.13952c-4.50295-.0059-10.21667-2.50014-16.01208-7.04494l-.6683-.52412,9.11922-6.76039L87.4296,79.04265Zm5.77209-4.279-.46965.95038-10.391-14.01683,9.11851-6.75966.30725.79173C93.75089,63.712,94.274,70.64981,92.15551,74.93666ZM102.90983,47.047A32.98965,32.98965,0,0,1,99.8,65.82l-1.0069,2.051L98.574,65.5967c-.07078-.73523-.16954-1.49841-.29358-2.26832a47.67154,47.67154,0,0,0-3.27454-11.00462l-.19979-.46975,7.96354-5.90352ZM89.9731,24.81293a33.1458,33.1458,0,0,1,11.22041,15.13525l.16493.454-8.91519,6.609-.35877-.64542A71.36833,71.36833,0,0,0,81.18573,31.66221l-.51307-.53079,8.9141-6.60822ZM64.811,18.62595a32.97742,32.97742,0,0,1,18.86824,2.48039l1.00849.45283L76.7244,27.4626l-.39135-.3275a47.62757,47.62757,0,0,0-9.57555-6.3293c-.70233-.3439-1.4047-.66053-2.08841-.94162l-2.1159-.86982ZM53.868,23.28888c4.71739-.7791,11.20407,1.73748,17.79507,6.90614l.6683.52412-9.11832,6.75977L52.82182,23.46181Zm-5.30209,3.32943,10.39052,14.016L49.83712,47.3948,49.53,46.60289c-3.02925-7.80852-3.55172-14.74617-1.43359-19.034Z"})]}),Object(v.jsx)("p",{children:"Geography"})]});case"science":return Object(v.jsxs)(D,{color:c(),children:[Object(v.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512 512",children:Object(v.jsxs)("g",{children:[Object(v.jsx)("path",{fill:c(),d:"M447.859,427.096c-12.386-14.759-112.847-134.465-124.517-148.373V73.564 c19.748-0.621,35.627-16.87,35.627-36.767C358.967,16.507,342.46,0,322.172,0H189.833c-20.289,0-36.797,16.507-36.797,36.795 c0,19.899,15.877,36.147,35.627,36.767v205.159C168.395,302.871,77.218,411.518,64.145,427.094 C35.908,460.746,59.864,512,103.735,512h304.537C452.2,512,476.06,460.703,447.859,427.096z M178.226,36.795 c0-6.401,5.207-11.607,11.609-11.607h132.339c6.401,0,11.607,5.207,11.607,11.607s-5.207,11.609-11.607,11.609 c-12.685,0-119.369,0-132.339,0C183.433,48.404,178.226,43.197,178.226,36.795z M210.905,291.403 c1.903-2.269,2.947-5.135,2.947-8.096v-33.387h29.061c6.955,0,12.594-5.637,12.594-12.594s-5.639-12.594-12.594-12.594h-29.061 v-20.238h29.061c6.955,0,12.594-5.637,12.594-12.594c0-6.957-5.639-12.594-12.594-12.594h-29.061v-20.237h29.061 c6.955,0,12.594-5.637,12.594-12.594c0-6.957-5.639-12.594-12.594-12.594h-29.061V73.593h84.299v209.715 c0,2.962,1.043,5.829,2.947,8.096l44.109,52.557H166.8L210.905,291.403z M408.271,486.811H103.735 c-22.557,0-34.804-26.233-20.294-43.524l62.219-74.138h220.686l62.219,74.138C443.065,460.567,430.844,486.811,408.271,486.811z"}),Object(v.jsx)("path",{fill:c(),d:"M317.221,389.978c-20.955,0-38.003,17.046-38.003,38.001c0,20.955,17.048,38.003,38.003,38.003 c20.955,0,38.001-17.048,38.001-38.003C355.222,407.026,338.176,389.978,317.221,389.978z M317.221,440.794 c-7.066,0-12.814-5.748-12.814-12.814c0-7.065,5.748-12.813,12.814-12.813c7.065,0,12.813,5.748,12.813,12.813 C330.034,435.046,324.286,440.794,317.221,440.794z"})]})}),Object(v.jsx)("p",{children:"Science"})]});case"sports":return Object(v.jsxs)(D,{color:c(),children:[Object(v.jsxs)("svg",{version:"1.1",id:"Icons",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 32 32",fill:"none",stroke:c(),strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",children:[Object(v.jsx)("circle",{className:"st0",cx:"17",cy:"21",r:"10"}),Object(v.jsx)("polyline",{className:"st0",points:"10.4,13.5 8,1 26,1 23.6,13.5 "}),Object(v.jsx)("line",{className:"st0",x1:"14.6",y1:"11.3",x2:"14",y2:"1"}),Object(v.jsx)("line",{className:"st0",x1:"20",y1:"1",x2:"19.4",y2:"11.3"}),Object(v.jsx)("path",{className:"st0",d:"M17,17c0,1,0,8,0,8"}),Object(v.jsx)("line",{className:"st0",x1:"15",y1:"25",x2:"19",y2:"25"}),Object(v.jsx)("line",{className:"st0",x1:"15",y1:"19",x2:"17",y2:"19"})]}),Object(v.jsx)("p",{children:"Sports"})]});default:return Object(v.jsxs)(D,{color:c(),children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fill:c(),children:Object(v.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(v.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(v.jsx)("path",{className:"cls-1",d:"M32,64A32,32,0,1,1,64,32,32,32,0,0,1,32,64ZM32,5.33A26.67,26.67,0,1,0,58.67,32,26.71,26.71,0,0,0,32,5.33Z"}),Object(v.jsx)("path",{className:"cls-1",d:"M32,45.33a2.67,2.67,0,0,1-2.67-2.66,14.1,14.1,0,0,1,6.9-11.88,8,8,0,0,0,3.55-8.71A8,8,0,0,0,24,24a2.67,2.67,0,1,1-5.33,0,13.29,13.29,0,0,1,5-10.43A13.43,13.43,0,0,1,35.11,11a13.34,13.34,0,0,1,4,24.3,8.78,8.78,0,0,0-4.39,7.35A2.67,2.67,0,0,1,32,45.33Z"}),Object(v.jsx)("circle",{className:"cls-1",cx:"32",cy:"50.67",r:"2.67"})]})})}),Object(v.jsx)("p",{children:"General"})]})}}var X=m.a.section(V||(V=Object(h.a)(["\n  article{\n    display: flex;\n  }\n"]))),$=m.a.div(W||(W=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n"])));function ee(e){var t=e.questions,n=Object(a.useState)(0),c=Object(d.a)(n,2),r=c[0],s=c[1],o=A().toReport;return Object(a.useEffect)((function(){window.localStorage.removeItem("QAs")}),[]),Object(v.jsx)(g,{children:Object(v.jsxs)($,{children:[Object(v.jsx)(X,{children:Object(v.jsxs)("article",{children:[Object(v.jsx)(U,{category:t[r].category,name:"celebrities"}),Object(v.jsx)(U,{category:t[r].category,name:"entertainment"}),Object(v.jsx)(U,{category:t[r].category,name:"geography"}),Object(v.jsx)(U,{category:t[r].category,name:"science"}),Object(v.jsx)(U,{category:t[r].category,name:"sports"}),Object(v.jsx)(U,{category:t[r].category,name:"default"})]})}),Object(v.jsx)(G,{question:t[r],next:function(){var e=r+1;e>=t.length&&o(),s(e)}})]})})}var te,ne,ce=new function e(){Object(_.a)(this,e),this.get=function(){var e=Object(B.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<1)){e.next=2;break}throw new Error("Amount must be greater than 0");case 2:return e.prev=2,e.next=5,P.get("?amount=".concat(t));case 5:return n=e.sent,e.abrupt("return",n.data.results);case 9:throw e.prev=9,e.t0=e.catch(2),new Error(e.t0.message||"Estamos com problemas internos, por favor tente novamente mais tarde.");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()};function re(){var e=Object(a.useContext)(w).amount,t=A().toHome,n=Object(a.useState)(),c=Object(d.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(0),i=Object(d.a)(o,2);i[0],i[1];Object(a.useEffect)((function(){e<1&&t(),l()}),[]);var l=function(){var n=Object(B.a)(I.a.mark((function n(){var c;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ce.get(e);case 3:if(!((c=n.sent).length<1)){n.next=6;break}throw new Error("Amount must be greater than 0");case 6:s(c),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),alert(n.t0.message),t();case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return Object(v.jsx)(g,{children:r&&Object(v.jsx)(ee,{questions:r})})}var ae,se,oe,ie=Object(m.a)(T)(te||(te=Object(h.a)(["\n  background-color: ",";\n  background-color: ",";\n  :hover{\n    background-color: ",";\n    background-color: ",";\n  }\n  cursor: default;\n"])),(function(e){return e.user?"#f00":""}),(function(e){return e.correct?"#0f0":""}),(function(e){return e.user?"#f00":""}),(function(e){return e.correct?"#0f0":""})),le=m.a.p(ne||(ne=Object(h.a)(["\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(e){return e.correct?"#0f0":"#f00"}));function je(e){var t=e.qa;return Object(v.jsxs)(J,{children:[Object(v.jsx)(R,{children:t.question}),t.answersQA.map((function(e,n){return Object(v.jsxs)(ie,{user:t.user===n,correct:t.correct===n,children:[Object(v.jsx)(Y,{children:n+1}),Object(v.jsx)("p",{children:e})]},n+1)})),t.user===t.correct?Object(v.jsx)(le,{correct:!0,children:"You're right"}):Object(v.jsx)(le,{correct:!1,children:"You got the answer wrong"})]})}var ue=m.a.div(ae||(ae=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),xe=m.a.h1(se||(se=Object(h.a)(["\n  width: 100%;\n  height: 100px;\n  text-align: center;\n  padding: 20px 0;\n"]))),be=Object(m.a)(f.a)(oe||(oe=Object(h.a)(["\n  margin-bottom: 20px;\n  font-weight: bold;\n"])));function de(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=A().toHome;Object(a.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("QAs"));e||(alert("There is no report to show."),r()),c(e)}),[]);return Object(v.jsxs)(ue,{children:[function(){if(0===n.length)return Object(v.jsx)(v.Fragment,{});var e=0;return n.forEach((function(t){t.user===t.correct&&(e+=1)})),Object(v.jsxs)(xe,{children:["You got ",e," questions right"]})}(),Object(v.jsx)(be,{variant:"contained",onClick:r,children:"Start again"}),n.map((function(e,t){return Object(v.jsx)(je,{qa:e},t)}))]})}function he(){return Object(v.jsx)(l.a,{children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{exact:!0,path:"/",children:Object(v.jsx)(L,{})}),Object(v.jsx)(j.a,{exact:!0,path:u,children:Object(v.jsx)(S,{})}),Object(v.jsx)(j.a,{exact:!0,path:x,children:Object(v.jsx)(re,{})}),Object(v.jsx)(j.a,{exact:!0,path:b,children:Object(v.jsx)(de,{})}),Object(v.jsx)(j.a,{children:Object(v.jsx)("div",{children:"P\xe1gina n\xe3o encontrada"})})]})})}var pe=function(){return Object(v.jsx)(y,{children:Object(v.jsx)(he,{})})};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(pe,{})}),document.getElementById("root"))},74:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.feb417db.chunk.js.map