"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{703:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,o,a,l,c,d,s=t(5048),u=t(1413),x=t(885),g=t(5358),p=t(168),f=t(6674),m=f.Z.li(r||(r=(0,p.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-bottom: 10px;\nfont-size: 20px;\n"]))),b=f.Z.button(i||(i=(0,p.Z)(["\nmargin-left: 10px;\npadding: 5px;\nborder-radius: 4px;\nborder-color: #747274;\nfont-weight: 600;\ncursor: pointer;\n&:hover {\nbackground-color: #f32b2b;\n"]))),h=t(3329),Z=function(n){var e=n.id,t=n.name,r=n.number,i=(0,g.Nt)(),o=(0,x.Z)(i,2),a=o[0],l=o[1].isLoading,c=(0,g.i)();return console.log("edit",c),(0,h.jsxs)(m,{children:[t,": ",r,(0,h.jsx)(b,{onClick:function(){return a(e)},disabled:l,children:l?"Deleting...":"Delete"})]})},v=f.Z.ul(o||(o=(0,p.Z)(["\nmargin-bottom: 10px;\n"]))),j=function(n){var e=n.contacts;return(0,h.jsx)(v,{children:e.map((function(n){return(0,h.jsx)(Z,(0,u.Z)({},n),n.id)}))})},k=t(695),w=t(6895),C=f.Z.div(a||(a=(0,p.Z)(["\npadding: 10px;\ntext-align: center;\nborder: 2px solid grey;\nborder-radius: 8px;\nmax-width: 400px;\nbackground-image: linear-gradient(to right, #DECBA4, #3E5151);\n"]))),y=f.Z.label(l||(l=(0,p.Z)(["\nmargin-bottom: 20px;\nfont-weight: 700;\n"]))),_=f.Z.input(c||(c=(0,p.Z)(["\nmargin-left: 10px;\nborder-radius: 6px;\n"]))),z=function(){var n=(0,s.I0)();return(0,h.jsx)(C,{children:(0,h.jsxs)(y,{children:["Find contact by Name",(0,h.jsx)(_,{type:"text",onChange:function(e){n((0,w.Tv)(e.target.value))}})]})})},D=f.Z.div(d||(d=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\npadding-top: 10%;\n"]))),A=function(){var n,e=(0,g.mz)(),t=e.data,r=e.isFetching;console.log("data",t),console.log("useAllContactsQuery()",(0,g.mz)());var i=(0,s.v9)((function(n){return n.filter.value})),o=null!==(n=null===t||void 0===t?void 0:t.filter((function(n){return n.name.toLowerCase().includes(i)})))&&void 0!==n?n:[];return console.log("filteredContacts",o),(0,h.jsxs)(D,{children:[r&&(0,h.jsx)(k.Z,{}),(0,h.jsx)(z,{}),t&&(0,h.jsx)(j,{contacts:o})]})}}}]);
//# sourceMappingURL=703.b2c885af.chunk.js.map