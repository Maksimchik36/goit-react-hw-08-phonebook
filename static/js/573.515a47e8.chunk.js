"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[573],{4573:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,o,s,i,d=t(885),c=t(168),l=t(6674),u=l.Z.form(r||(r=(0,c.Z)(["\npadding: 20px;\ndisplay: flex; \nflex-direction: column; \nalign-items: center;\nborder: 2px solid grey;\nborder-radius: 8px;\nmax-width: 300px;\n// background-color: #6bccd8;\nbackground-image: linear-gradient(to right, #DECBA4, #3E5151);\n"]))),p=l.Z.label(a||(a=(0,c.Z)(["\nmargin-bottom: 20px;\nfont-weight: 700;\n"]))),m=l.Z.input(o||(o=(0,c.Z)(["\nmargin-left: 10px;\nborder-radius: 6px;\n"]))),h=l.Z.button(s||(s=(0,c.Z)(["\npadding: 5px;\nborder-radius: 4px;\nborder-color: #747274;\nfont-weight: 600;\ncursor: pointer;\n&:hover {\nbackground-color: #87ff37b3;\n}\n"]))),x=t(3329),b=function(e){var n=e.onSubmit;return(0,x.jsxs)(u,{onSubmit:n,children:[(0,x.jsxs)(p,{children:["Name",(0,x.jsx)(m,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)(p,{children:["Phone",(0,x.jsx)(m,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(h,{type:"submit",children:"Add contact"})]})},f=t(5358),g=t(695),Z=l.Z.div(i||(i=(0,c.Z)(["\ndisplay: flex;\njustify-content: center;\npadding-top: 20%;\n"]))),y=t(5397),j=function(){var e=(0,f.mz)().data,n=(0,f.PY)(),t=(0,d.Z)(n,2),r=t[0],a=t[1].isLoading;return(0,x.jsxs)(Z,{children:[a&&(0,x.jsx)(g.Z,{}),(0,x.jsx)(b,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.name.value,a=n.target.elements.phone.value;n.currentTarget.reset(),e.some((function(e){return e.name===t}))?(0,y.x2)("".concat(t," is already in contacts list.")):(r({name:t,number:a}),(0,y.s$)("Contact successfully created."))}})]})}}}]);
//# sourceMappingURL=573.515a47e8.chunk.js.map