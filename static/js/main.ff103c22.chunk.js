(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(4),r=t.n(s),n=(t(10),t(11),t(5)),i=t(3),l=(t(12),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),d=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],o=t(0),j=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=d.find((function(a){return a.id===e.categoryId})),t=l.find((function(e){return e.id===a.ownerId}));return Object(i.a)(Object(i.a)({},e),{},{categoryName:a.title,userName:t.name})})),h=function(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),t=a[0],s=a[1];var r=j.filter((function(e){return function(e,a){var t=e.toLowerCase(),c=a.toLowerCase().trim();return t.includes(c)}(e.target.value,t)}));return Object(o.jsx)("div",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"title",children:"Product Categories"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(o.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),l.map((function(e){return Object(o.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:e.name},Math.random())}))]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(o.jsx)("span",{className:"icon is-right",children:Object(o.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(o.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(o.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(o.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(o.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(o.jsx)("tbody",{children:r&&j.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"Product",children:[Object(o.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(o.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(o.jsx)("td",{"data-cy":"ProductCategory",children:e.categoryName}),Object(o.jsx)("td",{"data-cy":"ProductUser",children:e.userName},Math.random())]},Math.random())}))})]})]})]})})};r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ff103c22.chunk.js.map