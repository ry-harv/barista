(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(6),c=(r(0),r(113)),i={id:"architecture",title:"System Architecture",sidebar_label:"architecture"},o={id:"architecture",title:"System Architecture",description:"## Summary",source:"@site/docs/system-architecture.md",permalink:"/barista/docs/architecture",sidebar_label:"architecture",sidebar:"someSidebar",previous:{title:"Development Environment Setup",permalink:"/barista/docs/local-dev-environment"},next:{title:"License Scanners",permalink:"/barista/docs/license-scanners"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Pictograph",id:"pictograph",children:[]}],p={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"summary"},"Summary"),Object(c.b)("p",null,"Barista is a nodeJS application written using the angular framework with some extensions for persistence and scheduling (nest)."),Object(c.b)("h2",{id:"pictograph"},"Pictograph"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/Optum/barista/raw/master/doc/images/Barista-Infrastructure-small.png",alt:"Infrastructure"}))))}s.isMDXComponent=!0},113:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},l=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,f=l["".concat(i,".").concat(b)]||l[b]||m[b]||c;return r?a.a.createElement(f,o({ref:t},p,{components:r})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);