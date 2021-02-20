(this["webpackJsonpball-sort-game"]=this["webpackJsonpball-sort-game"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},31:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t(0),l=t.n(o),a=t(23),s=t.n(a),r=(t(31),t(19)),i=(t(20),t(21),t(8)),u=t(7),d=t(43),b=Object(o.createContext)(),j=function(e){var n=Object(o.useState)(),t=Object(u.a)(n,2),l=t[0],a=t[1],s=Object(o.useState)(),r=Object(u.a)(s,2),j=r[0],h=r[1],O=Object(o.useState)(null),f=Object(u.a)(O,2),m=f[0],x=f[1],g=Object(o.useState)(5),v=Object(u.a)(g,2),p=v[0],y=v[1],w=Object(o.useState)([]),C=Object(u.a)(w,2),N=C[0],k=C[1],S=Object(o.useState)(!1),B=Object(u.a)(S,2),H=B[0],I=B[1],T=function(e){for(var n=new Array([],[]),t=[],c=e.length-1;c>0;c--){var o=Math.floor(Math.random()*(c+1)),l=[e[o],e[c]];e[c]=l[0],e[o]=l[1]}for(;e.length;)t.push(e.splice(0,4));var a=t.concat(n);h(a),F(a)},F=function(e){a(JSON.parse(JSON.stringify(e))),console.log("first init",l)},J=function(e){var n=Object(i.a)(j);x(Object.assign(n[e][n[e].length-1],{index:e})),Object.assign(n[e][n[e].length-1],{class:"chosen"}),h(n),console.log("added")},M=function(e){var n=Object(i.a)(j);delete n[e][n[e].length-1].class,h(n),x(null),console.log("removed")},R=function(e){var n=Object(i.a)(j);delete n[m.index][n[m.index].length-1].class,n[e].push(n[m.index][n[m.index].length-1]),n[m.index].splice(n[m.index].length-1,1),h(n),x(null),console.log("moved"),A(m.index,e),L()},A=function(e,n){var t=Object(i.a)(N);t.push({oldIndex:e,newIndex:n}),t.length>p&&t.splice(0,t.length-p),k(t),console.log(N)},L=function(){for(var e,n=0;n<j.length;n++){if(!1===e){console.log("didWin is false");break}if(0!==j[n].length&&j[n].length<4&&(console.log("less than 4",j,n),e=!1),j[n].length>0&&4===j[n].length)for(var t=1;t<j[n].length;t++){if(j[n][t].num!==j[n][t-1].num){e=!1,console.log("not equal to previous"),console.log("break");break}e=!0,console.log("equal to previous")}console.log(j)}return I(e)};return Object(c.jsx)(b.Provider,{value:{shuffleBalls:function(e){for(var n=[],t=1;t<=e;t++)for(var c=0;c<4;c++)n.push({num:t,id:Object(d.a)()});T(n)},randomBalls:j,setRandomBalls:h,moveBallHandler:function(e){console.log(m),j[e].length<1&&null===m||(null===m&&J(e),null!==m&&(e===m.index?M(e):4===j[e].length?(M(m.index),J(e)):j[e].length<1||m.num===j[e][j[e].length-1].num&&4!==j[e].length?R(e):m.num!==j[e][j[e].length-1].num&&(M(m.index),J(e))))},completed:H,undoHandler:function(){if(0!==N.length&&null===m&&0!==p){y(p-1);var e=Object(i.a)(j);console.log("undoMoves",N);var n=e[N[N.length-1].newIndex].pop();console.log("undoItem",n),e[N[N.length-1].oldIndex].push(n),h(e);var t=Object(i.a)(N);t.pop(),k(t),console.log(p)}},undoCount:p,initialRandomBalls:l,setInitialRandomBalls:a,restartHandler:function(){var e=Object(i.a)(l);F(e),h(e),y(5),k([]),console.log("init",l,"rand",j)}},children:e.children})},h=t(16),O=function(e){var n=Object(o.useContext)(b).shuffleBalls;return Object(c.jsxs)("div",{className:"selection-container",children:[Object(c.jsx)("p",{children:" Try to sort the colored balls in the tubes until all balls with the same color stay in the same tube."}),Object(c.jsx)("h3",{children:"How many colors would you like to sort?"}),Object(c.jsx)("div",{className:"selections",children:e.colors.map((function(e){return e.num>2?Object(c.jsx)(h.a,{to:{pathname:"/board",tubesClass:e.num},onClick:function(){return n(e.num)},children:Object(c.jsx)("div",{className:"selection-ball color".concat(e.num),children:e.num})},e.id):null}))})]})},f=(t(37),function(e){return Object(c.jsx)("div",{className:"ball color".concat(e.content.num," ").concat(e.content.class)},e.content.id)}),m=(t(38),function(e){var n=Object(o.useContext)(b).moveBallHandler;return Object(c.jsx)("div",{className:"tube",onClick:function(){return n(e.index)},children:e.balls.map((function(n){return void 0!==n?Object(c.jsx)(f,{content:n,tubeArray:e.balls,tubeIndex:e.index},Object(d.a)()):null}))})}),x=(t(39),t(25)),g=t.n(x),v=(t(41),function(e){return Object(c.jsxs)("div",{className:"instructions-container",children:[Object(c.jsx)("button",{className:"close-instructions",onClick:function(){return e.display("hide")},children:"X"}),Object(c.jsx)("h1",{children:"How to play?"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Tap any tube to move the ball lie on top in the tube to another tube."}),Object(c.jsx)("li",{children:"The rule is that you can only move a ball on top of another ball if both of them have the same color."}),Object(c.jsx)("li",{children:"You can always move a ball to an empty tube."}),Object(c.jsx)("li",{children:"Try not to get stuck - but don\u2019t worry, you can always restart the level at any time."})]})]})}),p=function(e){var n=Object(o.useContext)(b),t=n.randomBalls,l=n.completed,a=n.undoHandler,s=n.undoCount,r=n.restartHandler,i=Object(o.useState)("hide"),j=Object(u.a)(i,2),h=j[0],O=j[1];return Object(c.jsxs)("div",{className:"board-container",children:["show"===h?Object(c.jsx)(v,{display:O}):null,Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(g.a,{active:l,config:{angle:90,spread:360,startVelocity:40,elementCount:70,dragFriction:.12,duration:3e3,stagger:3,width:"10px",height:"10px",perspective:"500px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]}}),Object(c.jsx)("button",{className:"header-controls",onClick:function(){return O("show")},children:"How to play"}),Object(c.jsx)("button",{className:"header-controls",onClick:function(){return window.location.reload()},children:"New game"}),Object(c.jsx)("button",{className:"header-controls",onClick:function(){return r()},children:"Reset"}),Object(c.jsxs)("button",{className:"header-controls",onClick:function(){return a()},children:["Undo ",s]})]}),Object(c.jsx)("div",{className:"tubes-container",children:void 0!==t?t.map((function(e,n){return void 0!==e?Object(c.jsx)(m,{balls:e,index:n},Object(d.a)()):Object(c.jsx)("div",{className:"tube"})})):null})]})},y=t(2);var w=function(){var e=[{num:1,id:Object(d.a)()},{num:2,id:Object(d.a)()},{num:3,id:Object(d.a)()},{num:4,id:Object(d.a)()},{num:5,id:Object(d.a)()},{num:6,id:Object(d.a)()},{num:7,id:Object(d.a)()},{num:8,id:Object(d.a)()}];return Object(c.jsx)(j,{children:Object(c.jsx)(y.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(y.d,{children:[Object(c.jsx)(y.b,{exact:!0,path:"/",render:function(n){return Object(c.jsx)(O,Object(r.a)({colors:e},n))}}),Object(c.jsx)(y.b,{exact:!0,path:"/board",render:function(n){return Object(c.jsx)(p,Object(r.a)({colors:e},n))}})]}),Object(c.jsx)("footer",{children:"\xa9 2021 Created by Lital Shalom"})]})})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,l=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),l(e),a(e)}))};s.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),C()}},[[42,1,2]]]);
//# sourceMappingURL=main.7e51d7aa.chunk.js.map