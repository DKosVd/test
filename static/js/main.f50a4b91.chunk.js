(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(3),c=s.n(n),r=(s(13),s(2)),l=(s(14),{login:function(e){console.log(e)},register:function(e){console.log(e)}}),o=s(4),m=s(6),d=s(0),j=Object(i.createContext)({}),b=function(e){var t=e.children,s=e.buttonTitle,a=e.initialState,n=e.sendData,c=Object(i.useState)(a),l=Object(r.a)(c,2),b=l[0],u=l[1],h=Object(i.useCallback)((function(e){var t=e.currentTarget,s=t.value,i=t.id;u(Object(m.a)(Object(m.a)({},b),{},Object(o.a)({},i,s)))}),[b]);return Object(d.jsxs)("div",{className:"main-form",children:[Object(d.jsx)(j.Provider,{value:{form:b,handleFormChange:h},children:t}),Object(d.jsx)("div",{className:"main-form__forgotps",children:Object(d.jsx)("a",{href:"#",children:"Forgot password?"})}),Object(d.jsx)("div",{className:"main-form__send",children:Object(d.jsx)("button",{type:"button",onClick:function(){b.password&&b.username&&b.email&&n(b)},className:"btn btn-active btn-large",children:s})})]})},u=a.a.memo(b),h=function(e){var t=e.type,s=e.label,a=e.id,n=e.placeholder,c=e.isRequired,l=Object(i.useState)(!1),o=Object(r.a)(l,2),m=o[0],b=o[1],u="password"===t,h=Object(i.useContext)(j),p=h.form,O=h.handleFormChange;return Object(d.jsxs)("div",{className:"main-form__elem",children:[Object(d.jsx)("label",{htmlFor:a,children:s}),Object(d.jsx)("input",{className:"custom-input",onChange:O,id:a,value:p[a],type:u&&m?"text":t,placeholder:n,required:c}),"password"===t?Object(d.jsx)("i",{className:"btn-eye",children:Object(d.jsx)("span",{onClick:function(){b(!m)},className:"material-icons",children:m?"visibility":"visibility_off"})}):null]})},p=function(){return Object(d.jsxs)(u,{sendData:function(e){l.login(e)},buttonTitle:"Login",initialState:{username:"",password:""},children:[Object(d.jsx)(h,{label:"User name",id:"username",placeholder:"Enter your User name",isRequired:!0,type:"text"}),Object(d.jsx)(h,{label:"Password",id:"password",placeholder:"Enter your Password",isRequired:!0,type:"password"})]})},O=function(){return Object(d.jsxs)(u,{sendData:function(e){l.register(e)},buttonTitle:"Register",initialState:{username:"",password:"",email:""},children:[Object(d.jsx)(h,{label:"User name",id:"username",placeholder:"Enter your User name",isRequired:!0,type:"text"}),Object(d.jsx)(h,{label:"Email",id:"email",placeholder:"Enter your Email",isRequired:!0,type:"email"}),Object(d.jsx)(h,{label:"Password",id:"password",placeholder:"Enter your Password",isRequired:!0,type:"password"})]})},x=s(20);var _=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("div",{className:"main__picture main__elem",children:Object(d.jsxs)("div",{className:"main__picture__description",children:[Object(d.jsx)("h2",{className:"main-title",children:"Lorem ipsum is simply"}),Object(d.jsx)("p",{className:"main-text",children:"Lorem ipsum dolor simply"})]})}),Object(d.jsxs)("div",{className:"main__manipulation main__elem",children:[Object(d.jsxs)("div",{className:"main__switch",children:[Object(d.jsx)("h3",{className:"main__switch_title",children:"Welcome to lorem..!"}),Object(d.jsxs)("div",{className:"main-switch",children:[Object(d.jsx)("button",{onClick:function(){a(!0)},className:"btn ".concat(s?"btn-active":""),children:"Login"}),Object(d.jsx)("button",{onClick:function(){a(!1)},className:"btn ".concat(s?"":"btn-active"),children:"Register"})]})]}),Object(d.jsxs)("div",{className:"main__form",children:[Object(d.jsx)("div",{className:"main__form__text_block",children:Object(d.jsx)("p",{className:"main__form__text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),Object(d.jsx)(x.a,{in:s,timeout:500,classNames:"item",children:s?Object(d.jsx)(p,{}):Object(d.jsx)(O,{})})]})]})]})})};c.a.render(Object(d.jsx)(_,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f50a4b91.chunk.js.map