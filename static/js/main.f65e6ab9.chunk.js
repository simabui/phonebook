(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,n){t.exports=n(365)},364:function(t,e,n){},365:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(116),u=n.n(c),o=n(52),i=n(25),l=n(26),s=n(29),b=n(27),f=n(30),d=n(28),m=n(117),p=n(7),h=n(367),v=n(3),O=n(119),j=function(t){var e=t.label;return r.a.createElement("span",{style:{color:"#ff0000",display:"inline-block"}},e)};j.defaultProps={label:""};var g=j;function y(){var t=Object(p.a)(["\n  margin-left: 5px;\n"]);return y=function(){return t},t}function x(){var t=Object(p.a)(["\n  margin-bottom: 10px;\n"]);return x=function(){return t},t}var C=Object(v.a)(x()),S=Object(v.a)(y()),k=function(t){var e=t.id,n=t.text,a=t.type,r=t.value,c=t.onChange,u=t.name;return Object(v.b)("label",{htmlFor:e,css:C},n,Object(v.b)("input",{type:a,value:r,name:u,onChange:c,id:e,css:S}))};function w(){var t=Object(p.a)(["\n  width: 150px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 3px;\n"]);return w=function(){return t},t}function E(){var t=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return E=function(){return t},t}var I=Object(v.a)(E()),q=Object(v.a)(w()),F={name:"required|string",number:"required|string"},N={"name.required":"Please enter a unique name for your account","number.required":"Enter a phone number."},D=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(r)))).state={name:"",number:"",errors:null},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number,c=n.props,u=c.handleContacts;if((0,c.onUnique)(a))alert("".concat(a," is already in contacts"));else{var o=Object(h.a)(),i={name:a,number:r};Object(O.validateAll)(i,F,N).then(function(t){u(Object(m.a)({},t,{id:o})),n.reset()}).catch(function(t){var e={};t.forEach(function(t){e[t.field]=t.message}),n.setState({errors:e})})}},n.handleInput=function(t){var e=t.target,a=e.value,r=e.name;n.setState(Object(d.a)({},r,a))},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"reset",value:function(){this.setState({name:"",number:"",errors:null})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.errors,r=Object(h.a)(),c=Object(h.a)();return Object(v.b)("form",{onSubmit:this.handleSubmit,css:I},Object(v.b)(k,{id:r,text:"Name",type:"text",name:"name",value:e,onChange:this.handleInput}),a&&Object(v.b)(g,{label:a.name}),Object(v.b)(k,{id:c,text:"Number",type:"number",name:"number",value:n,onChange:this.handleInput}),a&&Object(v.b)(g,{label:a.number}),Object(v.b)("button",{type:"submit",css:q},"Add contact"))}}]),e}(a.Component);function P(){var t=Object(p.a)(["\n  margin-top: 10px;\n"]);return P=function(){return t},t}function U(){var t=Object(p.a)(["\n  margin-left: 15px;\n  padding: 4px 10px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 5px;\n"]);return U=function(){return t},t}function A(){var t=Object(p.a)(["\n  display: flex;\n  align-items: center;\n"]);return A=function(){return t},t}var J=Object(v.a)(A()),V=Object(v.a)(U()),z=Object(v.a)(P()),L=function(t){var e=t.data,n=t.onDeleteContact;return Object(v.b)("ul",null,e.map(function(t){return Object(v.b)("li",{key:t.id,css:z},Object(v.b)("div",{css:J},t.name,": ",t.number,Object(v.b)("button",{type:"button",onClick:function(){return n(t.id)},css:V},"delete contact")))}))};L.defaultProps={data:null};var B=L;function M(){var t=Object(p.a)(["\n  width: 200px;\n  padding: 3px;\n"]);return M=function(){return t},t}var G=Object(v.a)(M()),H=function(t){var e=t.getFIlterValue,n=t.value;return Object(v.b)("div",null,Object(v.b)("p",null,"Find contacts by name"),Object(v.b)("input",{type:"text",onChange:e,css:G,value:n}))},K=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(r)))).state={contacts:[],filter:""},n.getFIlterValue=function(t){var e=t.target.value;n.setState({filter:e})},n.handleFilter=function(t,e){return t.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())})},n.handleContacts=function(t){n.setState(function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[t])}})},n.deleteContact=function(t){n.setState(function(e){return{contacts:e.contacts.filter(function(e){return e.id!==t})}})},n.handleUniqueName=function(t){return n.state.contacts.some(function(e){return e.name===t})},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:Object(o.a)(JSON.parse(t))})}},{key:"componentDidUpdate",value:function(t,e){if(e!==this.state){var n=this.state.contacts,a=JSON.stringify(n);localStorage.setItem("contacts",a)}}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,c=this.handleFilter(e,n);return r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(D,{handleContacts:this.handleContacts,onUnique:this.handleUniqueName}),r.a.createElement("h2",null,"Contacts"),e.length>0&&r.a.createElement(H,{getFIlterValue:this.getFIlterValue,value:n}),r.a.createElement(B,{data:c,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);K.defaultProps={};var Q=K;n(364);u.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.f65e6ab9.chunk.js.map