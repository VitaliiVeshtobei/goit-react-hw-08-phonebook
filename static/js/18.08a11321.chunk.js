"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[18],{8018:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return Y},default:function(){return nn}});var r=t(9434),o="NOT_FOUND";var i=function(n,e){return n===e};function a(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?i:r,u=t.maxSize,c=void 0===u?1:u,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(a),f=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return o}return{get:r,put:function(e,i){r(e)===o&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function p(){var e=f.get(arguments);if(e===o){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function u(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function c(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(c=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,f=l.memoizeOptions,p=void 0===f?t:f,d=Array.isArray(p)?p:[p],x=u(r),m=n.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=x.length,t=0;t<e;t++)n.push(x[t].apply(null,arguments));return i=m.apply(null,n)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:m,dependencies:x,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),h};return o}var s,l,f,p,d=c(a),x=function(n){return n.contacts.items},m=function(n){return n.filter},h=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},g=d([x,m],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),b=t(3634),y=t(168),j=t(6444),k=(j.default.form(s||(s=(0,y.Z)(["\n  align-items: center;\n"]))),j.default.input(l||(l=(0,y.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border-color: transparent;\n"])))),w=j.default.button(f||(f=(0,y.Z)(["\n  color: #fff;\n  background-color: ",";\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.4;\n  /* letter-spacing: 0.06em; */\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border-color: transparent;\n  transition-property: red;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.activeLink}),(function(n){return n.theme.colors.title})),Z=j.default.label(p||(p=(0,y.Z)(["\n  font-size: 22px;\n"]))),z=t(3329);function C(){var n=(0,r.I0)();return(0,z.jsx)("div",{children:(0,z.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=e.target,r=e.target.elements.name.value,o=e.target.elements.number.value;n((0,b.uK)({name:r,number:o})),t.reset()},children:[(0,z.jsxs)(Z,{htmlFor:"name",children:["Name",(0,z.jsx)(k,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(Z,{htmlFor:"number",children:["Number",(0,z.jsx)(k,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(w,{type:"submit",children:"Add contact"})]})})}var A,F,E,L,q=t(2791),O=t(7845),N=j.default.button(A||(A=(0,y.Z)(["\n  margin-left: 10px;\n  color: #fff;\n  background-color: ",";\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border-color: transparent;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.activeLink}),(function(n){return n.theme.colors.title})),_=j.default.ul(F||(F=(0,y.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),I=j.default.li(E||(E=(0,y.Z)(["\n  animation: 0.5s ",";\n  font-size: 22px;\n  margin-top: 10px;\n"])),(0,j.keyframes)(L||(L=(0,y.Z)(["",""])),O.O2));function R(){var n=(0,r.I0)(),e=(0,r.v9)(x),t=e.isLoading,o=e.error;(0,q.useEffect)((function(){n((0,b.yF)())}),[n]);var i=(0,r.v9)(g);return(0,z.jsxs)(_,{children:[t&&(0,z.jsx)("p",{children:"Loading tasks..."}),o&&(0,z.jsx)("p",{children:o}),i.map((function(e){return(0,z.jsxs)(I,{children:[e.name,": ",e.number,(0,z.jsx)(N,{type:"button",onClick:function(){return n((0,b.GK)(e.id))},children:"Delete"})]},e.id)}))]})}var S,D,T,J,K,P,B,G,M=t(7959),U=j.default.input(S||(S=(0,y.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border-color: transparent;\n"]))),$=j.default.label(D||(D=(0,y.Z)(["\n  margin-top: 70px;\n  font-size: 22px;\n"])));function H(){var n=(0,r.v9)(m),e=(0,r.I0)();return(0,z.jsxs)($,{children:["Find contacts by name",(0,z.jsx)(U,{type:"text",value:n,onChange:function(n){e((0,M.T)(n.currentTarget.value))}})]})}var Q=j.default.div(T||(T=(0,y.Z)(["\n  animation: 5s ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 100px;\n"])),(0,j.keyframes)(J||(J=(0,y.Z)(["",""])),O.Ji)),V=j.default.h2(K||(K=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: 3s ",";\n  font-size: 70px;\n  color: ",";\n  text-shadow: 3px 5px 2px #474747;\n"])),(0,j.keyframes)(P||(P=(0,y.Z)(["",""])),O.fu),(function(n){return n.theme.colors.title})),W=j.default.div(B||(B=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),X=j.default.h2(G||(G=(0,y.Z)(["\n  font-size: 42px;\n  text-shadow: 3px 5px 2px #474747;\n  color: ",";\n"])),(function(n){return n.theme.colors.title})),Y=function(){var n=(0,r.v9)(h),e=(0,r.v9)(v);return(0,z.jsxs)("div",{children:[(0,z.jsx)(V,{children:"Phonebook"}),(0,z.jsxs)(Q,{children:[(0,z.jsxs)(W,{children:[(0,z.jsx)(C,{}),(0,z.jsx)(H,{})]}),(0,z.jsxs)("div",{children:[(0,z.jsx)(X,{children:"Contacts"}),n&&!e&&(0,z.jsx)("b",{children:"Request in progress..."}),(0,z.jsx)(R,{})]})]})]})},nn=Y}}]);
//# sourceMappingURL=18.08a11321.chunk.js.map