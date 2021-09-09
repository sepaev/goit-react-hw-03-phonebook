(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={inputNumber:"Form_inputNumber__3REHb"}},31:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s,l,u,d,b,h,p=n(1),m=n.n(p),f=n(10),j=n.n(f),x=n(14),O=n(5),g=n(6),y=n(8),v=n(7),C=n(33),k=n(2),N=n(3),S=N.a.form(a||(a=Object(k.a)(["\n  display: block;\n  border: solid 1px black;\n  padding: 10px;\n"]))),w=N.a.label(r||(r=Object(k.a)(["\n  display: block;\n  font-size: 26px;\n  margin-bottom: 20px;\n  font-weight: 600;\n"]))),F=N.a.button(c||(c=Object(k.a)(["\n  display: block;\n  font-size: 22px;\n"]))),A=n(11),z=n.n(A),D=n(12),E=n.n(D),L=n(0),Q=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props.onSubmit;return Object(L.jsxs)(S,{onSubmit:e,children:[Object(L.jsxs)(w,{children:[Object(L.jsx)("span",{children:"Name"}),Object(L.jsx)(z.a,{className:E.a.inputNumber,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Arnold Schwarzenegger",maxLength:"20",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0},"nameKey")]}),Object(L.jsxs)(w,{children:[Object(L.jsx)("span",{children:"Number"}),Object(L.jsx)(z.a,{className:E.a.inputNumber,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"+38 (099) 999-99-99",mask:"+38 (099) 999-99-99",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0},"numberKey")]}),Object(L.jsx)(F,{type:"submit",children:"Add contact"})]})}}]),n}(p.Component),T=N.a.h2(o||(o=Object(k.a)(["\n  font-weight: 400;\n  color: teal;\n"]))),B=function(e){var t=e.message;return Object(L.jsx)("div",{children:Object(L.jsx)(T,{children:t})})},I=N.a.ul(i||(i=Object(k.a)(["\n  display: block;\n  padding-left: 10px;\n"]))),J=N.a.input(s||(s=Object(k.a)(["\n  display: block;\n  margin-bottom: 20px;\n  font-size: 22px;\n  outline: unset;\n  &:focus,\n  &:hover {\n    filter: drop-shadow(0px 0px 5px lightblue);\n    border: 1px solid lightblue;\n  }\n"]))),M=N.a.li(l||(l=Object(k.a)(["\n  display: block;\n  font-family: monospace;\n  list-style-type: disc;\n  font-size: 18px;\n  margin-bottom: 2px;\n"]))),K=N.a.span(u||(u=Object(k.a)(["\n  position: fixed;\n  right: 45px;\n  display: inline-flex;\n"]))),P=N.a.button(d||(d=Object(k.a)(["\n  margin-left: 5px;\n  padding: 2px;\n  font-size: 10px;\n  width: 20px;\n  height: 20px;\n"]))),R=function(e){var t=e.contacts,n=e.searchFunc,a=e.deleteFunc,r=e.message;return Object(L.jsxs)(p.Fragment,{children:[Object(L.jsxs)(I,{children:[Object(L.jsx)(J,{type:"text",name:"search",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",placeholder:"Search contact",onInput:n}),t.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(L.jsxs)(M,{children:["\u2022 "+n+": ",Object(L.jsxs)(K,{children:[r,Object(L.jsx)(P,{id:t,onClick:function(){return a(t)},children:"X"})]})]},t)}))]}),!t.length&&Object(L.jsx)(B,{message:r})]})},Z=N.a.section(b||(b=Object(k.a)(["\n  text-align: left;\n  max-width: 450px;\n  width: 100%;\n  margin: auto;\n  border: solid 1px black;\n  background-color: white;\n  filter: drop-shadow(2px 4px 6px black);\n  padding: 25px;\n  border-radius: 10px;\n  margin: 50px auto;\n"]))),_=N.a.h1(h||(h=Object(k.a)(["\n  font-size: 28px;\n  margin: 0 0 20px;\n  font-weight: 700;\n"]))),q=n(4);q.Notify.init({position:"center-top"});var H=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){t.preventDefault();var n=t.target.children[0].children[1].value.trim(),a=t.target.children[1].children[1].value;e.checkNumber(a)?e.checkName(n)?e.props.doAddContact(n,a):q.Notify.warning("Sorry. This NAME already exists."):a&&q.Notify.warning("Sorry. This NUMBER already exists.")},e.doClearNumber=function(e){return e.split(" ").join("").split("(").join("").split(")").join("").split("-").join("").split("+").join("")},e.getContacts=function(){var t=e.props.data,n=t.filter,a=t.contacts,r=e.parseSearchQuery(n.toString()),c=r.searchQueryText,o=r.searchQueryNumber;if(c.length>0||o.length>0){var i=[];if(o.length>0){if(i=a.filter((function(t){var n=t.number;return e.doClearNumber(n).includes(o)})),c.length>0){var s=a.filter((function(e){return e.name.toLowerCase().includes(c)}));return i.length>0?i.concat(s):s}return i}return i=a.filter((function(e){return e.name.toLowerCase().includes(c)}))}return a},e.render=function(){var t=e.props,n=t.title,a=t.component,r=t.searchFunc,c=t.deleteFunc,o=t.data,i=e.checkForDoubleID(e.getContacts());return Object(L.jsxs)(Z,{children:[Object(L.jsx)(_,{children:n}),"Form"===a&&Object(L.jsx)(Q,{onSubmit:e.onSubmit}),"Contacts"===a&&Object(L.jsx)(R,{contacts:i,searchFunc:r,deleteFunc:c,message:o.length?"Sorrry, no contacts found.":"Sorrry, you have no contacts yet."})]})},e}return Object(g.a)(n,[{key:"checkNumber",value:function(e){var t=this,n=this.doClearNumber(e),a=!0;return""===e&&(a=!1),this.props.data.contacts.forEach((function(e){var r=e.number;n===t.doClearNumber(r)&&(a=!1)})),a}},{key:"checkName",value:function(e){var t=this,n=!0,a=this.doClearName(e);return""===a&&(n=!1),this.props.data.contacts.forEach((function(e){var r=e.name;a===t.doClearName(r)&&(n=!1)})),n}},{key:"doClearName",value:function(e){return e.split(" ").join("").toLowerCase().trim()}},{key:"checkForDoubleID",value:function(e){var t=[],n=[];return e.forEach((function(e){t.indexOf(e.id)<0&&(t.push(e.id),n.push(e))})),n}},{key:"parseSearchQuery",value:function(e){var t="",n="";if(e)if(e.match(/\d+/)){n=e.match(/\d+/).toString();var a=e.split(n),r=a[0]||a[1];t=r||""}else t=e;return{searchQueryText:t,searchQueryNumber:n}}}]),n}(p.Component);q.Notify.init({position:"center-top"});var U=function(e){Object(y.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:Object(C.a)(),name:"Rosie Simpson",number:"+38 (050) 459-12-56"},{id:Object(C.a)(),name:"Hermione Kline",number:"+38 (095) 443-89-12"},{id:Object(C.a)(),name:"Eden Clements",number:"+38 (073) 645-17-79"},{id:Object(C.a)(),name:"Annie Copeland",number:"+38 (068) 227-91-26"},{id:Object(C.a)(),name:"Bellie Cuper",number:"+38 (063) 207-00-99"},{id:Object(C.a)(),name:"Joan Stratfild",number:"+38 (099) 428-21-66"}],filter:""},e.doAddContact=function(t,n){q.Notify.success("Well Done! Added "+t),e.setState((function(e){var a=e.contacts,r=e.filter;return{contacts:[].concat(Object(x.a)(a),[{id:Object(C.a)(),name:t,number:n}]),filter:r}}))},e.makeSearch=function(t){var n=t.target.value.toLocaleLowerCase();e.setState({filter:n})},e.doDeleteContact=function(t){var n,a=e.state,r=a.contacts,c=a.filter,o=[];t&&(r.forEach((function(e){e.id!==t?o.push(e):n=e.name})),o.length!==r.length?(e.setState((function(){return{contacts:o,filter:c}})),q.Notify.success("Contact ".concat(n," was errased successfully"))):q.Notify.failure("Oh, no!"))},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(L.jsxs)(p.Fragment,{children:[Object(L.jsx)(H,{title:"Phonebook",component:"Form",data:this.state,doAddContact:this.doAddContact}),Object(L.jsx)("hr",{}),Object(L.jsx)(H,{title:"Contacts",component:"Contacts",data:this.state,searchFunc:this.makeSearch,deleteFunc:this.doDeleteContact})]})}}]),n}(p.Component),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};j.a.render(Object(L.jsx)(m.a.StrictMode,{children:Object(L.jsx)(U,{})}),document.getElementById("root")),W()}},[[31,1,2]]]);
//# sourceMappingURL=main.1bf125ec.chunk.js.map