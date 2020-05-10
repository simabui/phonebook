(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){e.exports={enter:"errorSlide_enter__1tStT",enterActive:"errorSlide_enterActive__9fKk5",exit:"errorSlide_exit__15p7V",exitActive:"errorSlide_exitActive__3y3Ou"}},135:function(e,t,n){e.exports={enter:"pop_enter__3BREO",enterActive:"pop_enterActive__3lC-x",exit:"pop_exit__o-9_0",exitActive:"pop_exitActive__1-hj-"}},141:function(e,t,n){e.exports=n(392)},36:function(e,t,n){e.exports={enter:"slide_enter__1x6UN",enterActive:"slide_enterActive__1PoIU",exit:"slide_exit__NwBHi",exitActive:"slide_exitActive__35ND0"}},389:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),i=n.n(c),o=n(14),u=n(127),l=n(137),b=n(394),s=n(13),p=Object(s.b)("COLLECTION_UPDATE"),f=Object(s.b)("FILTER_COLLECTION"),d=Object(s.b)("DELETE_USER"),m=function(e){return e.phonebook.collection},O=function(e){return e.phonebook.filter},j=function(e){var t=m(e),n=O(e);return t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())})},x=n(15),v=n(128),h=n(129),g=n(130),_=n(138),E=n(131),y=n(139),w=n(6),k=n(396),A=n(3),C=n(133),S=function(e){var t=e.label;return a.a.createElement("span",{style:{color:"#ff0000",display:"inline-block"}},t)};S.defaultProps={label:""};var N=S;function D(){var e=Object(w.a)(["\n  text-align: center;\n"]);return D=function(){return e},e}function I(){var e=Object(w.a)(["\n  width: 300px;\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  padding: 15px 20px;\n  background-color: red;\n  color: #fff;\n  border-radius: 5px;\n  font-weight: 700;\n"]);return I=function(){return e},e}var L=Object(A.a)(I()),F=Object(A.a)(D()),T=function(){return Object(A.b)("div",{css:L},Object(A.b)("p",{css:F},"Name is already in the list!"))};function P(){var e=Object(w.a)(["\n  width: 100%;\n  padding: 10px 0 10px 5px;\n  border-radius: 5px;\n  border: 1px solid #dedede;\n  margin-top: 5px;\n  font-size: 16px;\n"]);return P=function(){return e},e}function U(){var e=Object(w.a)(["\n  margin-bottom: 10px;\n  padding: 5px;\n"]);return U=function(){return e},e}var q=Object(A.a)(U()),z=Object(A.a)(P()),B=function(e){var t=e.id,n=e.text,r=e.type,a=e.value,c=e.onChange,i=e.name;return Object(A.b)("label",{htmlFor:t,css:q},n,Object(A.b)("input",{type:r,value:a,name:i,onChange:c,id:t,css:z}))},R=n(134),J=n.n(R);function H(){var e=Object(w.a)(["\n  width: 150px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 3px;\n  width: 100%;\n  background-color: #3944a8;\n  color: #fff;\n  padding: 10px 0;\n  font-weight: 700;\n"]);return H=function(){return e},e}function K(){var e=Object(w.a)(["\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n"]);return K=function(){return e},e}var V=Object(A.a)(K()),G=Object(A.a)(H()),M={name:"required|string",number:"required|string"},Q={"name.required":"Please enter a unique name for your account","number.required":"Enter a phone number."},W=function(e){function t(){var e,n;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(_.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(a)))).state={name:"",number:"",errors:null,isDuplicate:!1},n.handleDupName=function(e){return n.props.contacts.some(function(t){return t.name===e})},n.handleSubmit=function(e){e.preventDefault();var t=n.state,r=t.name,a=t.number,c=n.props.updateCollection;if(n.handleDupName(r))return n.setState({isDuplicate:!0}),void setTimeout(n.exitAnimation,3e3);var i=Object(k.a)(),o={name:r,number:a};Object(C.validateAll)(o,M,Q).then(function(e){c([Object(v.a)({},e,{id:i})]),n.reset()}).catch(function(e){var t={};e.forEach(function(e){t[e.field]=e.message}),n.setState({errors:t})})},n.exitAnimation=function(){n.setState({isDuplicate:!1})},n.handleInput=function(e){var t=e.target,r=t.value,a=t.name;n.setState(Object(x.a)({},a,r))},n}return Object(y.a)(t,e),Object(g.a)(t,[{key:"reset",value:function(){this.setState({name:"",number:"",errors:null,isDuplicate:!1})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,r=e.errors,a=e.isDuplicate,c=Object(k.a)(),i=Object(k.a)();return Object(A.b)("form",{onSubmit:this.handleSubmit,css:V},Object(A.b)(B,{id:c,text:"Name",type:"text",name:"name",value:t,onChange:this.handleInput}),r&&Object(A.b)(N,{label:r.name}),Object(A.b)(B,{id:i,text:"Number",type:"number",name:"number",value:n,onChange:this.handleInput}),r&&Object(A.b)(N,{label:r.number}),Object(A.b)("button",{type:"submit",css:G},"Add contact"),Object(A.b)(b.a,{in:a,timeout:300,classNames:J.a,unmountOnExit:!0},Object(A.b)(T,null)))}}]),t}(r.Component),X=Object(o.b)(function(e){return{contacts:m(e)}},function(e){return{updateCollection:function(t){return e(p(t))}}})(W),Y=n(395),Z=n(36),$=n.n(Z);function ee(){var e=Object(w.a)(["\n  list-style-type: none;\n  padding: 0;\n"]);return ee=function(){return e},e}function te(){var e=Object(w.a)(["\n  margin-top: 10px;\n  border: 1px solid #dedede;\n  border-radius: 5px;\n  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.75);\n"]);return te=function(){return e},e}function ne(){var e=Object(w.a)(["\n  padding: 4px;\n  max-width: 40px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n  flex-grow: 1;\n  background-color: #ff0000;\n  color: #fff;\n  font-weight: 700;\n"]);return ne=function(){return e},e}function re(){var e=Object(w.a)(["\n  flex-grow: 1;\n"]);return re=function(){return e},e}function ae(){var e=Object(w.a)(["\n  flex-grow: 2;\n"]);return ae=function(){return e},e}function ce(){var e=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 8px;\n"]);return ce=function(){return e},e}var ie=Object(A.a)(ce()),oe=Object(A.a)(ae()),ue=Object(A.a)(re()),le=Object(A.a)(ne()),be=Object(A.a)(te()),se=Object(A.a)(ee()),pe=function(e){var t=e.contacts,n=e.deleteUser;return Object(A.b)(Y.a,{component:"ul",css:se},t.map(function(e){return Object(A.b)(b.a,{key:e.id,timeout:500,classNames:$.a},Object(A.b)("li",{css:be},Object(A.b)("div",{css:ie},Object(A.b)("p",{css:oe},e.name),Object(A.b)("p",{css:ue},e.number),Object(A.b)("button",{type:"button",onClick:function(){return n(e.id)},css:le},"\u2715"))))}))};pe.defaultProps={data:null};var fe,de=pe,me=Object(o.b)(function(e){return{contacts:j(e)}},function(e){return{deleteUser:function(t){return e(d(t))}}})(de),Oe=n(135),je=n.n(Oe),xe=function(e){var t=e.inputFilter,n=e.filter,r=e.contacts;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Y.a,null,r.length>1&&a.a.createElement(b.a,{timeout:300,classNames:je.a,unmountOnExit:!0},a.a.createElement("div",null,a.a.createElement(B,{onChange:function(e){var n=e.target.value;t(n)},value:n,type:"text",text:"Find contacts by name",id:"filter",name:"filter"})))))},ve=Object(o.b)(function(e){return{contacts:m(e),filter:O(e)}},function(e){return{inputFilter:function(t){return e(f(t))}}})(xe),he=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)(function(){c(!n)},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{in:n,timeout:500,classNames:$.a},a.a.createElement("h1",null,"Phonebook")),a.a.createElement(X,null),a.a.createElement("h2",null,"Contacts"),a.a.createElement(ve,null),a.a.createElement(me,null))},ge=(n(389),n(5)),_e=n(62),Ee=n(136),ye=n.n(Ee),we=n(37),ke=Object(s.c)([],(fe={},Object(x.a)(fe,p,function(e,t){return[].concat(Object(we.a)(e),Object(we.a)(t.payload))}),Object(x.a)(fe,d,function(e,t){return Object(we.a)(e.filter(function(e){return e.id!==t.payload}))}),fe)),Ae=Object(s.c)("",Object(x.a)({},f,function(e,t){return t.payload})),Ce={key:"contacts",storage:ye.a,whitelist:["collection"]},Se=Object(ge.c)({collection:ke,filter:Ae}),Ne=Object(ge.c)({phonebook:Object(_e.a)(Ce,Se)}),De=Object(s.a)({reducer:Ne,middleware:Object(s.d)({serializableCheck:!1})}),Ie=Object(_e.b)(De);i.a.render(a.a.createElement(o.a,{store:De},a.a.createElement(u.a,{loading:null,persistor:Ie},a.a.createElement(he,null))),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.b92e347a.chunk.js.map