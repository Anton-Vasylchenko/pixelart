(this.webpackJsonppixelart=this.webpackJsonppixelart||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(45),r=n.n(s),o=(n(82),n(5)),i=(n(83),n(3));var l=function(e){var t=e.color,n=e.clickIsHolding,a=e.bgColor,s=Object(c.useState)(a),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(c.useState)(l),b=Object(o.a)(j,2),d=b[0],f=b[1],O=function(){u(t),f(t)};return Object(i.jsx)("div",{className:"pixel",onDragStart:function(e){e.preventDefault()},onClick:O,onMouseEnter:function(){u(t),n||f(l)},onMouseLeave:function(){n||u(d)},onMouseUp:O,style:{backgroundColor:l}})};n(85);var u=function(e){for(var t=e.width,n=e.selectedColor,c=e.clickIsHolding,a=e.bgColor,s=[],r=0;r<t;r++)s.push(Object(i.jsx)(l,{clickIsHolding:c,bgColor:a,color:n},r));return Object(i.jsx)("div",{className:"row",children:s})},j=n(73),b=n(25);n(196);var d=function(e){var t=e.children,n=e.className,c=n?"card ".concat(n):"card";return Object(i.jsx)("div",{className:c,children:t})};n(197);var f=function(e){var t=e.buttonText,n=e.onClickHandler;return Object(i.jsxs)("button",{className:"button",onClick:n,children:[" ",t," "]})};n(198);var O=function(e){for(var t=e.width,n=e.height,s=e.bgColor,r=a.a.useState(!1),l=Object(o.a)(r,2),O=l[0],x=l[1],h=Object(c.useState)("#f44336"),m=Object(o.a)(h,2),v=m[0],p=m[1],g=Object(c.useState)("#f44336"),C=Object(o.a)(g,2),N=C[0],k=C[1],w=Object(c.useState)("draw"),S=Object(o.a)(w,2),H=S[0],_=S[1],E=Object(c.useRef)(),D=[],I=0;I<n;I++)D.push(Object(i.jsx)(u,{width:t,selectedColor:v,bgColor:s,clickIsHolding:O},I));var V=function(){x(!1)},y=function(e){var t=e.target.id;if(_(t),"eraser"===t)return k(v),void p(s);p(N)};return Object(i.jsxs)(d,{className:"drawning-panel",children:[Object(i.jsx)("div",{className:"bg-circle",children:Object(i.jsx)(b.a,{color:v,onChangeComplete:function(e){p(e.hex)}})}),Object(i.jsxs)("div",{className:"toolbar",children:[Object(i.jsx)("div",{id:"draw",className:"draw"===H?"toolbar__item draw-button tool-active":"toolbar__item draw-button",onClick:y}),Object(i.jsx)("div",{id:"eraser",className:"eraser"===H?"toolbar__item eraser-button tool-active":"toolbar__item eraser-button",onClick:y})]}),Object(i.jsx)("div",{ref:E,className:"pixels ".concat(H,"-cursor"),onMouseLeave:V,onMouseDown:function(){x(!0)},onMouseUp:V,children:D}),Object(i.jsx)(f,{onClickHandler:function(){Object(j.exportComponentAsPNG)(E,{fileName:"pixelart"})},buttonText:"export as PNG"})]})};n(199);var x=function(e){var t=e.defaultValue,n=e.onChangeHandler,c=e.type,a=e.label,s=e.className,r=s?"input ".concat(s):"input";return Object(i.jsxs)("div",{className:"input-wrapper",children:[Object(i.jsx)("input",{type:c,className:r,defaultValue:t,onChange:n}),Object(i.jsx)("div",{children:a})]})};n(200),n(201);var h=function(e){var t=e.text;return Object(i.jsx)(d,{className:"alert",children:t})};var m=function(){var e=Object(c.useState)(16),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(16),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(c.useState)(!1),m=Object(o.a)(j,2),v=m[0],p=m[1],g=Object(c.useState)("start"),C=Object(o.a)(g,2),N=C[0],k=C[1],w=Object(c.useState)("#ffffff"),S=Object(o.a)(w,2),H=S[0],_=S[1],E=Object(c.useState)(!1),D=Object(o.a)(E,2),I=D[0],V=D[1],y=function(e){var t=Object(c.useState)(e),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useRef)(null),i=function(e){r.current&&!r.current.contains(e.target)&&s(!1)};return Object(c.useEffect)((function(){return document.addEventListener("click",i,!0),function(){document.removeEventListener("click",i,!0)}})),{ref:r,isComponentVisible:a,setIsComponentVisible:s}}(!1),B=y.ref,M=y.isComponentVisible,L=y.setIsComponentVisible,F=function(){L((function(e){return!e}))};return Object(i.jsxs)(i.Fragment,{children:[I&&Object(i.jsx)(h,{text:I}),Object(i.jsxs)(d,{children:[!v&&Object(i.jsxs)("div",{className:"editor",children:[Object(i.jsx)("div",{className:"editor-title",children:"Dimensions:"}),Object(i.jsxs)("div",{className:"options",children:[Object(i.jsx)(x,{defaultValue:l,onChangeHandler:function(e){V(!1),u(e.target.value)},type:"number",label:"Height"}),Object(i.jsx)("span",{className:"size-divider",children:"x"}),Object(i.jsx)(x,{defaultValue:n,onChangeHandler:function(e){V(!1),a(e.target.value)},type:"number",label:"Width"})]}),Object(i.jsxs)("div",{className:"background-color",onClick:F,children:["Background color: ",Object(i.jsx)("span",{style:{background:H}})]}),M&&Object(i.jsx)("div",{className:"background-modal",ref:B,children:Object(i.jsx)(b.b,{color:H,onChangeComplete:function(e){_(e.hex),F()},colors:["#ffffff","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB"]})})]}),!I&&Object(i.jsx)(f,{onClickHandler:function(){n>50||n<2?V("Width must be less than 50 and more than 2"):l>50||l<2?V("Height must be less than 50 and more than 2"):I||(p((function(e){return!e})),k(v?"start":"reset dimensions"))},buttonText:N})]}),v&&Object(i.jsx)(O,{bgColor:H,width:n,height:l})]})},v=(n(202),n.p+"static/media/logo.b4296df8.png");var p=function(){return Object(i.jsxs)(d,{className:"header",children:[Object(i.jsx)("div",{className:"header__logo",children:Object(i.jsx)("img",{src:v,alt:"logo"})}),Object(i.jsx)("div",{className:"header__title",children:"PIXEL ART"})]})};n(203);var g=function(){var e=(new Date).getFullYear();return Object(i.jsx)(d,{className:"footer",children:e})};var C=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(p,{}),Object(i.jsx)(m,{}),Object(i.jsx)(g,{})]})};r.a.render(Object(i.jsx)(C,{}),document.getElementById("root"))},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){}},[[204,1,2]]]);
//# sourceMappingURL=main.c5cc4e13.chunk.js.map