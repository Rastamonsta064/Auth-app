(this["webpackJsonpauth-app"]=this["webpackJsonpauth-app"]||[]).push([[0],{163:function(e,t){},165:function(e,t){},180:function(e,t){},182:function(e,t){},210:function(e,t){},212:function(e,t){},213:function(e,t){},218:function(e,t){},220:function(e,t){},226:function(e,t){},228:function(e,t){},247:function(e,t){},259:function(e,t){},262:function(e,t){},281:function(e,t,c){"use strict";c.r(t);var a=c(1),n=(c(280),c(147),c(48)),s=c.n(n),r=c(10),o=c(0),i=function(e){var t=e.user;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid bg-secondary bg-opacity-50",children:[Object(o.jsxs)(r.b,{className:"navbar-brand ".concat(t?"bg-success":"bg-secondary"," rounded p-2 m-2 text-light"),to:"/",children:[Object(o.jsx)("i",{className:"bi bi-door-open"}),"Auth-app"]}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarText",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link active",to:"/free",children:"Free Page"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link ".concat(t?"active":"disabled"),"aria-current":"page",to:"/protected",children:"Protected Page"})}),t?Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link active",to:"/logout",children:"Log Out"})}):Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link active",to:"/login",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link active",to:"/registration",children:"Registration"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link ".concat(t?"active":"disabled"),to:"/admin",children:"Admin Panel"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link ".concat(t?"active":"disabled"),to:"/account",children:"Your Account"})})]})})]})})})},l=c(7),j=c.p+"static/media/undraw_Profile_re_4a55.4e1e88da.svg",u=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col bg-secondary text-center m-1 p-1 rounded text-light",children:[Object(o.jsx)("h2",{children:"This is Home Page!"}),Object(o.jsx)("h2",{children:"All interesting is on Protected Page!!!"}),Object(o.jsx)("img",{src:j,alt:"home",className:"rounded"})]})})})},d=c(79),b=c.n(d),h=c(142),O=c(8),m=c(24),p=c.n(m),x=c(2),f=c(9),v="SET_USER",g="SET_TOKEN",N="LOGOUT",y="SET_ERROR",w="https://auth-app-server.herokuapp.com",E=function(e){return{type:v,payload:e}},S=function(e){return{type:g,payload:e}},T=function(){return{type:N}},k=function(e){return{type:y,payload:e}},C=function(e){return function(t){fetch(w+"/account/login",{method:"GET",headers:{Authorization:e}}).then((function(e){if(e.ok)return e.json();throw new Error(e.status.toString())})).then((function(e){e?(t(k(!1)),t(E(e)),t(S(e.secret))):t(k(!0))})).catch((function(e){t(k(!0)),console.log(e.message)}))}};var P=function(e){var t=e.text;return Object(o.jsx)("div",{className:"row g-3 justify-content-center",children:Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("h2",{children:t})})})},_=Object({NODE_ENV:"production",PUBLIC_URL:"/Auth-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SECRET_KEY||"auth-app",A=function(){var e=Object(a.useState)(Object(x.a)({},{first:"",last:"",email:"",phone:"",password:"",password2:""})),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("Please fill form to register a new user. All fields are required."),r=Object(O.a)(s,2),i=r[0],j=r[1],u=Object(f.b)(),d=Object(l.f)();return Object(o.jsxs)("div",{className:"container",children:[i?Object(o.jsx)(P,{text:i}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"row g-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Your First Name",value:c.first,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{first:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Your Last Name",value:c.last,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{last:e.target.value}))}})})]}),Object(o.jsxs)("div",{className:"row g-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Email - this'll be login",value:c.email,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{email:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Your Phone Number",value:c.phone,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{phone:e.target.value}))}})})]}),Object(o.jsxs)("div",{className:"row g-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:c.password,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{password:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Again Password",value:c.password2,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{password2:e.target.value}))}})})]}),Object(o.jsx)("div",{className:"row g-3 justify-content-center",children:Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",onClick:function(){if(c.first&&c.last&&c.email&&c.phone&&c.password&&c.password2)if(c.password===c.password2){var e={first:c.first,last:c.last,email:c.email,phone:c.phone},t=c.email,a=c.password;e.secret=p.a.sign({email:t,password:a},_),u(function(e){return function(t){fetch(w+"/account/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return console.log("user registered"),e.json();throw new Error(e.status.toString())})).then((function(e){t(E(e)),t(S(e.secret))})).catch((function(e){return console.log(e.message)}))}}(e)),j("Loading..."),d.push("/")}else j("Type same password 2 times.");else j("All fields are required.")},children:"Registration"})})})]})},L=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(O.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)("Please fill your email and password to Log in."),d=Object(O.a)(u,2),m=d[0],x=d[1],v=Object(f.b)(),g=Object(l.f)(),N=Object(f.c)((function(e){return e.isError})),y=Object(f.c)((function(e){return e.user})),w=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x("Loading..."),!c||!i){e.next=14;break}return t=p.a.sign({email:c,password:i},_),e.t0=v,e.next=6,C(t);case 6:e.t1=e.sent,(0,e.t0)(e.t1),n(""),j(""),console.log("login"),N&&!y?x("Wrong login/password."):g.push("/"),e.next=15;break;case 14:x("All fields are required!");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"container",children:[m?Object(o.jsx)(P,{text:m}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"row g-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:c,onChange:function(e){return n(e.target.value)}})}),Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:i,onChange:function(e){return j(e.target.value)}})}),Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",onClick:w,children:"Log in"})})]})]})},F=c.p+"static/media/undraw_feeling_proud_qne1.fca7d373.svg",R=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col bg-secondary text-center m-1 p-1 rounded text-light",children:[Object(o.jsx)("h2",{children:"This is free page! Anyone can visit this route!!!"}),Object(o.jsx)("img",{src:F,alt:"free",className:"rounded"})]})})})},Y=c.p+"static/media/undraw_security_o890.0e00543e.svg",D=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col bg-secondary text-center m-1 p-1 rounded text-light",children:[Object(o.jsx)("h2",{children:"This is Protected page! Only authorised users can visit this route!!!"}),Object(o.jsx)("img",{src:Y,alt:"protected",className:"rounded"})]})})})},K=function(e){var t=e.user,c=e.index,a=e.you;return Object(o.jsxs)("tr",{className:a?"table-success":"",children:[Object(o.jsx)("th",{scope:"row",children:c}),Object(o.jsx)("td",{children:t.first}),Object(o.jsx)("td",{children:t.last}),Object(o.jsx)("td",{children:t.phone}),Object(o.jsx)("td",{children:t.email})]})},U=function(){var e=Object(a.useState)(void 0),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("Loading..."),r=Object(O.a)(s,2),i=r[0],l=r[1],j=Object(f.c)((function(e){return e.user}));return Object(a.useEffect)((function(){c||fetch(w+"/account",{method:"GET"}).then((function(e){if(e.ok)return e.json();throw new Error(e.status.toString())})).then((function(e){l("Here we got list of all users."),n(e)})).catch((function(e){return console.log(e.message)}))}),[]),Object(o.jsxs)("div",{className:"container",children:[i?Object(o.jsx)(P,{text:i}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"First Name"}),Object(o.jsx)("th",{scope:"col",children:"Last Name"}),Object(o.jsx)("th",{scope:"col",children:"Phone"}),Object(o.jsx)("th",{scope:"col",children:"Email"})]})}),Object(o.jsx)("tbody",{children:c&&j?c.map((function(e,t){return Object(o.jsx)(K,{you:j.email===e.email,user:e,index:t+1},t)})):Object(o.jsx)(o.Fragment,{})})]})]})},H=function(){var e=Object(a.useState)({login:"",password:""}),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(O.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(),u=Object(O.a)(j,2),d=u[0],b=u[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsxs)("h3",{children:["TOKEN: ",i||"No TOKEN"]})})}),Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){p.a.verify(i,"secret",(function(e,t){if(e)throw new Error(e.message);b(Object(x.a)({},t))}))},children:"Verify TOKEN"}),Object(o.jsxs)("h3",{children:["Decoded TOKEN: ",d?d.test.login+" "+d.test.password:"No res"]})]})}),Object(o.jsxs)("div",{className:"row g-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"login",value:c.login,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{login:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Password",value:c.password,onChange:function(e){return n(Object(x.a)(Object(x.a)({},c),{},{password:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("button",{className:"btn btn-primary mb-3",onClick:function(){var e=p.a.sign({test:c},"secret");l(e)},children:"Create TOKEN"})})]})]})},I=function(){var e=Object(f.b)(),t=Object(l.f)();return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row g-3 justify-content-center",children:Object(o.jsxs)("div",{className:"col-auto text-center",children:[Object(o.jsx)("h3",{children:'Be carefull, after log out you will lose access to "Protected" Page!'}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-3",onClick:function(){e(T()),t.push("/")},children:"Log Out"})]})})})},W=function(){var e=Object(a.useState)("Loading..."),t=Object(O.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),r=Object(O.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)({first:"",last:"",phone:""}),d=Object(O.a)(u,2),b=d[0],h=d[1],m=Object(f.c)((function(e){return e.user}));Object(a.useEffect)((function(){m&&(h(m),n("Your email - ".concat(m.email," is your login and it can not be changed. ")))}),[m]);var p=Object(f.b)(),v=Object(l.f)();return Object(o.jsxs)("div",{className:"container",children:[c?Object(o.jsx)(P,{text:c}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"row g-3 justify-content-center",children:[Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{disabled:i,type:"text",className:"form-control",placeholder:"Your First Name",value:b.first,onChange:function(e){return h(Object(x.a)(Object(x.a)({},b),{},{first:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{disabled:i,type:"text",className:"form-control",placeholder:"Your Last Name",value:b.last,onChange:function(e){return h(Object(x.a)(Object(x.a)({},b),{},{last:e.target.value}))}})}),Object(o.jsx)("div",{className:"col-auto m-3",children:Object(o.jsx)("input",{disabled:i,type:"text",className:"form-control",placeholder:"Your Phone Number",value:b.phone,onChange:function(e){return h(Object(x.a)(Object(x.a)({},b),{},{phone:e.target.value}))}})})]}),Object(o.jsx)("div",{className:"row g-3 justify-content-center",children:Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsx)("button",{className:"btn btn-primary m-1",onClick:i?function(){j(!1),n("Click save to apply changes.")}:function(){j(!0),h(m),n("Your email - ".concat(m.email," is your login and it can not be changed. "))},children:i?"Edit":"Cancel"}),Object(o.jsx)("button",{className:"btn btn-primary m-1 ".concat(i?"invisible":""),onClick:function(){var e,t;b.first&&b.last&&b.phone&&(j(!0),p((e=b,t=m.secret,function(c){fetch(w+"/account/update",{method:"POST",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify(e)}).then((function(e){if(e.ok)return console.log("user updated"),e.json();throw new Error(e.status.toString())})).then((function(e){c(E(e))})).catch((function(e){console.log(e.message)}))})))},children:"Save"})]})}),Object(o.jsx)("div",{className:"row g-3 justify-content-center",children:Object(o.jsx)("div",{className:"col-auto",children:Object(o.jsx)("button",{className:"btn btn-danger m-1",onClick:function(){var e,t;window.confirm("Are you sure? Delete Your account and all your data?")&&(p((e=m._id,t=m.secret,function(c){fetch(w+"/account/"+e,{method:"DELETE",headers:{Authorization:t}}).then((function(t){if(!t.ok)throw new Error(t.status.toString());c(k(!0)),c(T()),console.log("User with id: ".concat(e," deleted"))}))})),v.push("/"))},children:"Delete Account"})})})]})};var q=function(){var e=Object(f.b)();Object(a.useEffect)((function(){var t=localStorage.getItem("token");t&&e(C(t))}),[]);var t=Object(f.c)((function(e){return e.user}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{user:t}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(l.a,{exact:!0,path:"/login",component:t?u:L}),Object(o.jsx)(l.a,{exact:!0,path:"/registration",component:A}),Object(o.jsx)(l.a,{exact:!0,path:"/admin",component:U}),Object(o.jsx)(l.a,{exact:!0,path:"/protected",component:t?D:u}),Object(o.jsx)(l.a,{exact:!0,path:"/free",component:R}),Object(o.jsx)(l.a,{exact:!0,path:"/test",compomemt:H}),Object(o.jsx)(l.a,{exact:!0,path:"/logout",component:I}),Object(o.jsx)(l.a,{exact:!0,path:"/account",component:W}),Object(o.jsx)(l.a,{path:"*",component:function(){return Object(o.jsx)("h2",{className:"text-center",children:"404 NOT FOUND"})}})]}),Object(o.jsx)("p",{className:"m-1 text-center",children:" Auth-app site. Made by Mikhail Lapshin. \xa9All rights reserved 2021"})]})},J=c(50),z={isError:!0},B=c(144),G=c(145),M=Object(J.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(x.a)(Object(x.a)({},e),{},{user:t.payload});case y:return Object(x.a)(Object(x.a)({},e),{},{isError:t.payload});case N:return{isError:!0};default:return e}}),Object(B.composeWithDevTools)(Object(J.applyMiddleware)(G.a,(function(e){e.dispatch,e.getState;return function(e){return function(t){switch(t.type){case N:localStorage.removeItem("token");break;case g:localStorage.setItem("token",t.payload)}return e(t)}}}))));s.a.render(Object(o.jsx)(f.a,{store:M,children:Object(o.jsx)(r.a,{children:Object(o.jsx)(q,{})})}),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.7c1dfd43.chunk.js.map