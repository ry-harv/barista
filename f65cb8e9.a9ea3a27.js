(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),i=(a(0),a(110)),o={id:"local-dev-environment",title:"Development Environment Setup",sidebar_label:"local-dev-environment"},l={id:"local-dev-environment",title:"Development Environment Setup",description:"Follow these steps on your Macintosh to load a development instance of the system:",source:"@site/docs/local-dev-environment.md",permalink:"/barista/docs/local-dev-environment",sidebar_label:"local-dev-environment",sidebar:"someSidebar",previous:{title:"Barista Overview",permalink:"/barista/docs/overview"},next:{title:"System Architecture",permalink:"/barista/docs/architecture"}},c=[{value:"Notes",id:"notes",children:[{value:"Dependencies",id:"dependencies",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Follow these steps on your Macintosh to load a development instance of the system:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop")),Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://brew.sh/"}),"Brew")),Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"NVM")," using ",Object(i.b)("inlineCode",{parentName:"li"},"brew install nvm")," and don't forget to update your ",Object(i.b)("inlineCode",{parentName:"li"},".bash_profile")),Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org"}),"Node 10.x LTS")," using NVM: ",Object(i.b)("inlineCode",{parentName:"li"},"nvm install v10.16.0")," and ensure that it is the version in use by checking ith the ",Object(i.b)("inlineCode",{parentName:"li"},"node -v")," command."),Object(i.b)("li",{parentName:"ol"},"Install the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://yarnpkg.com/"}),"Yarn")," dependency manager using the ",Object(i.b)("inlineCode",{parentName:"li"},"npm i -g yarn")," command."),Object(i.b)("li",{parentName:"ol"},"Clone the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Optum/barista.git"}),"repository")),Object(i.b)("li",{parentName:"ol"},"From within each application subdirectory (",Object(i.b)("inlineCode",{parentName:"li"},"barista-api"),", ",Object(i.b)("inlineCode",{parentName:"li"},"barista-scan"),", ",Object(i.b)("inlineCode",{parentName:"li"},"barista-web"),") load dependencies using the ",Object(i.b)("inlineCode",{parentName:"li"},"yarn install")," command."),Object(i.b)("li",{parentName:"ol"},"In a console window from the root of the ",Object(i.b)("inlineCode",{parentName:"li"},"barista-api/")," folder type ",Object(i.b)("inlineCode",{parentName:"li"},"yarn compose:dev up")," (Make sure that the Docker daemon is started)"),Object(i.b)("li",{parentName:"ol"},"From within the ",Object(i.b)("inlineCode",{parentName:"li"},"barista-api")," directory issue the ",Object(i.b)("inlineCode",{parentName:"li"},"yarn db:reset")," command to configure the database."),Object(i.b)("li",{parentName:"ol"},"From within each application subdirectory (",Object(i.b)("inlineCode",{parentName:"li"},"barista-api"),", ",Object(i.b)("inlineCode",{parentName:"li"},"barista-scan"),", ",Object(i.b)("inlineCode",{parentName:"li"},"barista-web"),") in separate console windows start each application tier using the ",Object(i.b)("inlineCode",{parentName:"li"},"yarn start:dev")," command."),Object(i.b)("li",{parentName:"ol"},"Once the application is started the following instances should be available from your localhost:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:4200"}),"Barista Web"),": The system's main web user UI."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:3000/api/v1/api-docs"}),"Barista Api"),": The REST interface Swagger documentation."),Object(i.b)("li",{parentName:"ul"},"Barista Scan (No interface), pulls it's work from the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fwoelffel/nest-bull"}),"Bull"),"/",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://redis.io/"}),"Redis")," work queue."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/"}),"PostgreSQL")," Development database running at: ",Object(i.b)("inlineCode",{parentName:"li"},"postgresql://postgres:password@db:5432/barista-dev")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.postgresql.org/"}),"PostgreSQL")," Test database running at: ",Object(i.b)("inlineCode",{parentName:"li"},"postgresql://postgres:password@db:5433/barista-test"),". The test database is used by the end-to-end (e2e) tests."),Object(i.b)("li",{parentName:"ul"},"The following tools are provided as a convenience for development and are not required to run the system:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8081/"}),"PostgresAdmin"),": A web based administrative tool for the Postgres database ","[postgres@admin.com:password]","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:3000/arena"}),"Arena Queue UI"),": An interactive dashboard for the Bull queue product. See: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/bee-queue/arena"}),"https://github.com/bee-queue/arena")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8082/"}),"Redis Commander"),": A GUI Redis interface."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8080/"}),"Dozzle"),": A GUI to examine the log output from the various services. See: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://dozzle.dev/"}),"https://dozzle.dev/"))))))),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"barista-api/docker/*.yml")," ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/overview/"}),"Docker Compose")," configuration files provide useful information about the configuration of the dev environment including login credentials for configured services."),Object(i.b)("li",{parentName:"ul"},"To stop the back end services you can issues the command: ",Object(i.b)("inlineCode",{parentName:"li"},"yarn compose:dev down"))),Object(i.b)("h3",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"In order to execute project scans, the following software packages must be installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"OpenJDK 8 (OWASP Dependency Check)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"brew tap adoptopenjdk/openjdk")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"brew cask install adoptopenjdk8")))),Object(i.b)("li",{parentName:"ul"},"Maven (Java project dependencies and licenses)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"brew install maven")))),Object(i.b)("li",{parentName:"ul"},"Nuget (.NET project dependencies and licenses)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"brew install nuget"))))))}s.isMDXComponent=!0},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,l({ref:t},b,{components:a})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);