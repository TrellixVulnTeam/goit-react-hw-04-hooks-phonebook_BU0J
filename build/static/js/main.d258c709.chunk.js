(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={list:"ContactList_list__2jrBn",listItem:"ContactList_listItem__3o589",span:"ContactList_span__2-pva",button:"ContactList_button__3-GQ3"}},function(e,t,n){e.exports={form:"ContactForm_form__1I3UO",label:"ContactForm_label__3Wkcr",input:"ContactForm_input__2Olhp",button:"ContactForm_button__3zRgs"}},,,,,function(e,t,n){e.exports={div:"Filter_div__13hpt",label:"Filter_label__24tfF"}},,function(e,t,n){e.exports={section:"Section_section__37kXa"}},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(18),n(19),n(12)),i=n(2),l=(n(20),n(11)),u=n.n(l),b=n(0);function j(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:u.a.section,children:[Object(b.jsx)("h2",{children:t}),n]})}var m=n(3),d=n.n(m);function O(e){var t=e.name,n=e.number,a=e.id,c=e.onDeleteContact;return Object(b.jsxs)("li",{className:d.a.listItem,children:[Object(b.jsxs)("span",{className:d.a.span,children:[t,":"]}),Object(b.jsxs)("span",{className:d.a.span,children:[n,":"]}),Object(b.jsx)("button",{className:d.a.button,type:"button",id:a,onClick:function(){return c(a)},children:"Delete"})]})}function h(e){var t=e.list,n=e.onDeleteContact;return Object(b.jsx)("ul",{className:d.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(b.jsx)(O,{id:t,name:a,number:c,onDeleteContact:n},t)}))})}var f=n(7),p=n(23),x=n(4),_=n.n(x);function v(e){var t,n=e.onSubmit,c=Object(a.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),j=u[0],m=u[1],d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:return}},O=Object(p.a)(),h=Object(p.a)();return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({name:o,number:j,id:Object(p.a)()}),s(""),m("")},className:_.a.form,children:[Object(b.jsx)("label",{htmlFor:O,className:_.a.label,children:"Name"}),Object(b.jsx)("input",(t={className:_.a.input,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},Object(f.a)(t,"value",o),Object(f.a)(t,"onChange",d),Object(f.a)(t,"id",O),t)),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:h,className:_.a.label,children:"Number"}),Object(b.jsx)("input",{className:_.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,id:h,onChange:d}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:_.a.button,children:"Add contact"})]})}var C=n(9),N=n.n(C);function g(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("div",{className:N.a.div,children:[Object(b.jsx)("label",{htmlFor:Object(p.a)(),className:N.a.label,children:"Find contacts by name:"}),Object(b.jsx)("input",{type:"text",value:t,id:Object(p.a)(),onChange:n})]})}function S(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]}("contacts",[{id:"id-1",name:"Rosie Simpson",number:4591256},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1],m=function(e){c([].concat(Object(s.a)(n),[e]))},d=Object(a.useCallback)((function(e){u(e.target.value)}),[]),O=Object(a.useMemo)((function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}),[l,n]);return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j,{title:"Phonebook",children:[Object(b.jsx)(v,{onSubmit:function(e){var t=e.name.toLowerCase();n.find((function(e){return e.name.toLowerCase()===t}))?alert("".concat(e.name," is already in contacts")):m(e)}}),Object(b.jsx)("h1",{children:"Contacts"}),Object(b.jsx)(g,{value:l,onChange:d}),Object(b.jsx)(h,{list:O,onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})})}o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.d258c709.chunk.js.map