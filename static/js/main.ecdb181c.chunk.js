(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1),l=(c(10),c(2)),s=c.n(l),o=c(0),j=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=new Array(i).fill(0).map((function(e,a){return a+1}));return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{onClick:function(){n(1===t?1:t-1)},"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,children:"\xab"})}),r.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:t===e}),children:Object(o.jsx)("a",{onClick:function(){n(e)},"data-cy":"pageLink",className:"page-link",href:"#".concat(e),children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===i}),children:Object(o.jsx)("a",{onClick:function(){n(t===i?i:t+1)},"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,children:"\xbb"})})]})};var d=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42).map((function(e){return"Item ".concat(e)})),u=["3","5","10","20"],m=d.length,h=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],h=l[1],p=Math.min(s*c,m),b=(s-1)*c+1,g=d.slice((s-1)*c,s*c);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b," - ").concat(p," of ").concat(m,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{onChange:function(e){t(+e.target.value),h(1)},value:c,"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",children:u.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:m,perPage:c,currentPage:s,onPageChange:h}),Object(o.jsx)("ul",{children:g.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ecdb181c.chunk.js.map