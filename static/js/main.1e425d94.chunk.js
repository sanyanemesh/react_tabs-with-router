(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),u=a(6),m=a(1),i=(a(21),function(e){var t=e.tabs,a=e.currentTabId;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Tabs"),l.a.createElement("ul",null,t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(u.b,{to:"/tabs/".concat(e.id),id:e.id},e.title))}))),l.a.createElement("p",null,t.map((function(e){return e.id===a?e.content:""}))))}),o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Tabs with router"),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/tabs"},"Tabs")))),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0},l.a.createElement("h2",null,"Home")),l.a.createElement(m.a,{path:"/tabs/:id?",render:function(e){var t=e.match;return l.a.createElement(i,{tabs:o,currentTabId:t.params.id})}})))};c.a.render(l.a.createElement(u.a,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1e425d94.chunk.js.map