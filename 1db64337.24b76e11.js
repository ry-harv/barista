(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=r,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?n.a.createElement(d,c({ref:t},s,{components:a})):n.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(6),i=(a(0),a(113)),o={id:"overview",title:"Barista Overview",sidebar_label:"Overview"},c={id:"overview",title:"Barista Overview",description:"Project Barista is a developer focused, cloud native, pure open source solution for open source license and vulnerability management.  ",source:"@site/docs/overview.md",permalink:"/barista/docs/overview",sidebar_label:"Overview",sidebar:"someSidebar",next:{title:"How to Setup Admin Tables",permalink:"/barista/docs/setup-admin-tables"}},l=[{value:"Join our growing community!",id:"join-our-growing-community",children:[]},{value:"Project Credits",id:"project-credits",children:[]},{value:"Sample Screen Shots",id:"sample-screen-shots",children:[{value:"Login Page",id:"login-page",children:[]},{value:"Dashboard",id:"dashboard",children:[]},{value:"Project Summary Licenses",id:"project-summary-licenses",children:[]},{value:"Project Summary Vulnerabilities",id:"project-summary-vulnerabilities",children:[]},{value:"Project Obligations",id:"project-obligations",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Project Barista is a developer focused, cloud native, pure open source solution for open source license and vulnerability management.  "),Object(i.b)("p",null,"Project goals include but are not limited to:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"maintain a license inventory system of record per project/service/product for OSS consumption within an organization"),Object(i.b)("li",{parentName:"ol"},"automate license impact analysis related to OSS consumption"),Object(i.b)("li",{parentName:"ol"},"automate publisher attribution analysis related to OSS consumption"),Object(i.b)("li",{parentName:"ol"},"automate OSS vulnerability scanning")),Object(i.b)("p",null,"Barista allows a developer to set up their project for scanning from any Git compatible repo.  Once a scan is initiated, the project is processed as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The repo is cloned into a temporary directory.  All contents will be destroyed once processing is finished."),Object(i.b)("li",{parentName:"ol"},"License scanning is initiated.  Barista currently supports the following technology stacks:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Java using the Maven package manager"),Object(i.b)("li",{parentName:"ol"},".Net using the NuGet package manager"),Object(i.b)("li",{parentName:"ol"},"Node using the NPM package manager"),Object(i.b)("li",{parentName:"ol"},"Python using the PIP package manager"),Object(i.b)("li",{parentName:"ol"},"Go using the Go package manager")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Support for additional package managers are on the roadmap as the community evolves e.g. Gradle\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Each technology stack uses native tools to gather project dependencies with as much meta data as can be harvested e.g. license, publisher information and or the project's published URL")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unsupported technology stacks can be scanned using the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nexB/scancode-toolkit"}),"nexB/scancode-tool")," but results are not as comprehensive and performance is degraded.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"All project and dependency code is then run through the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jeremylong/DependencyCheck"}),"OWASP Dependency Check tool")," to gather published vulnerability information.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Both license and vulnerability findings are then run through a set of  user defined business rules which allow categorization of findings into 1 of 3 categories:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Approved: ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-green-check.png",alt:"alt text"}))),Object(i.b)("li",{parentName:"ul"},"Warning:  ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-yellow-warning.png",alt:"alt text"}))),Object(i.b)("li",{parentName:"ul"},"Disapproved:  ",Object(i.b)("img",Object(r.a)({parentName:"li"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-red-stop.png",alt:"alt text"})))))),Object(i.b)("h2",{id:"join-our-growing-community"},"Join our growing community!"),Object(i.b)("p",null,"  Start with our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"local-dev-environment"}),"developer documentation"),"."),Object(i.b)("h2",{id:"project-credits"},"Project Credits"),Object(i.b)("p",null,"  Please see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"barista-project-credits"}),"our original project team"),"."),Object(i.b)("h2",{id:"sample-screen-shots"},"Sample Screen Shots"),Object(i.b)("h3",{id:"login-page"},"Login Page"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-login.png",alt:"alt text"}))),Object(i.b)("h3",{id:"dashboard"},"Dashboard"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-dashboard.png",alt:"alt text"}))),Object(i.b)("h3",{id:"project-summary-licenses"},"Project Summary Licenses"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-project-summary-license.png",alt:"alt text"}))),Object(i.b)("h3",{id:"project-summary-vulnerabilities"},"Project Summary Vulnerabilities"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-project-summary-vulnerability.png",alt:"alt text"}))),Object(i.b)("h3",{id:"project-obligations"},"Project Obligations"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://github.com/Optum/barista/raw/master/doc/images/barista-project-obligations.png",alt:"alt text"}))))}b.isMDXComponent=!0}}]);