(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),s=n.n(o),i=n(3),r=n.n(i),a=(n(10),n(4));n(11);var u=function(){var t=Object(o.useState)([]),e=Object(a.a)(t,2),n=e[0],s=e[1];return Object(o.useEffect)((function(){fetch("/api/videos").then((function(t){return t.json()})).then((function(t){console.log(t),s(t)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Assista os v\xeddeos abaixo"}),Object(c.jsx)("header",{className:"App-header",children:n.map((function(t,e){return Object(c.jsx)("a",{href:"https://www.youtube.com.br/watch?v=".concat(t),children:Object(c.jsx)("img",{src:"https://img.youtube.com/vi/".concat(t,"/0.jpg"),alt:""})},e)}))})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),s(t),i(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),h()}},[[12,1,2]]]);
//# sourceMappingURL=main.286f1ee1.chunk.js.map