(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(41)},30:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),s=n.n(r),c=n(12),l=n(14),i=n(5),u=n(6),h=n(8),f=n(7),m=n(9),b=n(10),k=n(13),d="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:p},g=function(){return fetch("".concat(d,"/books"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(k.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},y=function(e){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(k.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},O=(n(30),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).change=function(e){var t=e.target.value;n.props.onBookChanged(n.props.book,t)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.book,t=e.title,n=e.authors,a=e.shelf,r=e.imageLinks,s=r?r.thumbnail:"";return o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("img",{className:"book-cover",src:s,alt:t}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:this.change,value:a},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t),o.a.createElement("div",{className:"book-authors"},n))}}]),t}(a.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.books,a=e.onBookChanged;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},n.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(O,{book:n[t],onBookChanged:a}))}))))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={search:!1},n.search=function(){n.setState({search:!0})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.shelves,n=e.onBookChanged;return this.state.search?o.a.createElement(b.a,{push:!0,to:"/search"}):o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement(j,{key:t,title:e.title,books:e.books,onBookChanged:n})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement("button",{onClick:this.search},"Add a book")))}}]),t}(a.Component),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={mustClose:!1,query:"",resultBooks:[]},n.close=function(){n.setState({mustClose:!0})},n.updateQuery=function(e){var t=n.props.getShelfBookIsOn,a=e.trim();n.setState({query:e}),a?y(a).then(function(e){var a;"error"in e?a=[]:(a=e.filter(function(e){return e.title&&e.authors&&e.imageLinks}).sort(function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})).forEach(function(e){var n=t(e);e.shelf=n}),n.setState({resultBooks:a})}):n.setState({resultBooks:[]})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"getBooksInShelf",value:function(e){var t=this.state.shelves.filter(function(t){return t.shelf===e}).map(function(e){return e.id});return this.state.books.filter(function(e){return t.includes(e.id)}).map(function(t){return Object(k.a)({},t,{shelf:e})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.mustClose,a=t.query,r=t.resultBooks,s=this.props.onBookChanged;return n?o.a.createElement(b.a,{push:!0,to:"/"}):o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement("button",{className:"close-search",onClick:this.close},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:a,onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},r.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(O,{book:r[t],onBookChanged:s}))}))))}}]),t}(a.Component),S=n(15),N=n.n(S),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n.componentDidMount=function(){g().then(function(e){n.setState({books:e})})},n.onBookChanged=function(e,t){var a,o=n.state.books.findIndex(function(t){return t.id===e.id});if(o>=0)a=N()(n.state.books,Object(l.a)({},o,{shelf:{$set:t}}));else{var r=N()(e,{shelf:{$set:t}});a=N()(n.state.books,{$push:[r]})}E(e,t).then(function(){n.setState({books:a})})},n.getBooksInShelf=function(e){return n.state.books.filter(function(t){return t.shelf===e}).sort(function(e,t){return e.title<t.title?-1:e.title>t.title?1:0})},n.getShelfBookIsOn=function(e){var t=n.state.books.find(function(t){return t.id===e.id});return t?t.shelf:"none"},n.getShelves=function(){return[{title:"Currently Reading",books:n.getBooksInShelf("currentlyReading")},{title:"Want to Read",books:n.getBooksInShelf("wantToRead")},{title:"Read",books:n.getBooksInShelf("read")}]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.getShelves();return o.a.createElement("div",{className:"app"},o.a.createElement(b.b,{exact:!0,path:"/",render:function(){return o.a.createElement(C,{shelves:t,onBookChanged:e.onBookChanged})}}),o.a.createElement(b.b,{path:"/search",render:function(){return o.a.createElement(B,{shelves:t,onBookChanged:e.onBookChanged,getShelfBookIsOn:e.getShelfBookIsOn})}}))}}]),t}(o.a.Component);n(40);s.a.render(o.a.createElement(c.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5fd1a873.chunk.js.map