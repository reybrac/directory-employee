(this["webpackJsonpdirectory-employee"]=this["webpackJsonpdirectory-employee"]||[]).push([[0],{43:function(e,t,s){"use strict";s.r(t);var r=s(2),a=s(13),c=s.n(a),n=s(14),o=s(15),l=s(16),i=s(18),u=s(17),h=s(0);var d=function(e){return Object(h.jsx)("form",{children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(h.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search by name, email, state, or country",id:"search"}),Object(h.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",style:{margin:"10px"},children:"Search"})," ",Object(h.jsx)("button",{onClick:e.clear,className:"btn btn-secondary btn-dark mt-3",style:{margin:"10px"},children:"Clear"})]})})};var j=function(e){return Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("caption",{children:"List of employees"}),Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Profile picture"}),Object(h.jsx)("th",{children:"First Name"}),Object(h.jsx)("th",{children:"Last Name"}),Object(h.jsx)("th",{children:"Age"}),Object(h.jsx)("th",{children:"email"}),Object(h.jsx)("th",{children:"State"}),Object(h.jsxs)("th",{children:["Country",Object(h.jsx)("button",{className:"btn btn-dark",onClick:e.sortByCountry,children:Object(h.jsx)("i",{className:"fas fa-sort"})})]})]})}),Object(h.jsx)("tbody",{children:e.results.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{alt:e.name.first,src:e.picture.medium})}),Object(h.jsx)("td",{children:e.name.first}),Object(h.jsx)("td",{children:e.name.last}),Object(h.jsx)("td",{children:e.dob.age}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.location.state}),Object(h.jsx)("td",{children:e.location.country})]},e.login.uuid)}))})]})},b=s(4),m=s.n(b),f="https://randomuser.me/api/?results=100&gender=",O=function(e){return m.a.get(f+e)};console.log("API call",m.a.get(f));var p=function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={search:"",results:[],filtered:[],sortAsc:!1},e.searchEmployee=function(t){O(t).then((function(t){e.setState({results:t.data.results}),console.log("searchresults res",t.data.results)})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.name,r=t.target.value;e.setState(Object(n.a)({},s,r))},e.handleFormSubmit=function(t){t.preventDefault();var s=e.state.results.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())||t.name.last.toLowerCase().includes(e.state.search.toLowerCase())||"".concat(t.name.first," ").concat(t.name.last).toLowerCase().includes(e.state.search.toLowerCase())||t.email.toLowerCase().includes(e.state.search.toLowerCase())||t.location.state.toLowerCase().includes(e.state.search.toLowerCase())||t.location.country.toLowerCase().includes(e.state.search.toLowerCase())||"".concat(t.location.state,","," ").concat(t.location.country).toLowerCase().includes(e.state.search.toLowerCase())||"".concat(t.location.state," ").concat(t.location.country).toLowerCase().includes(e.state.search.toLowerCase())}));e.setState({filtered:s})},e.sortByCountry=function(t){t.preventDefault();var s=e.state.results;e.state.sortAsc?s.sort(e.compareDsc):s.sort(e.compareAsc),e.setState({results:s})},e.compareAsc=function(t,s){var r=t.location.country.toLowerCase(),a=s.location.country.toLowerCase(),c=0;return r>a?c=1:r<a&&(c=-1),e.setState({sortAsc:!0}),c},e.compareDsc=function(t,s){var r=t.location.country.toLowerCase(),a=s.location.country.toLowerCase(),c=0;return r<a?c=1:r>a&&(c=-1),e.setState({sortAsc:!1}),c},e.clear=function(t){t.preventDefault(),e.setState({filtered:[],search:""})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.searchEmployee("")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,clear:this.clear}),Object(h.jsx)(j,{results:this.state.filtered.length>0?this.state.filtered:this.state.results,sortByCountry:this.sortByCountry})]})}}]),s}(r.Component);var x=function(){return Object(h.jsx)(p,{})};s(42);c.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a6f05085.chunk.js.map