(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"A2+M":function(e,t,n){var a=n("X8hv");e.exports={MDXRenderer:a}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DjIZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),c=n("va/L"),o=n("z1Tq"),s=n.n(o);function i(){var e=Object(a.useState)(!0),t=e[0],n=e[1];return r.a.createElement("div",null,r.a.createElement(c.Navbar,null,r.a.createElement("div",{className:"bp3-navbar-group bp3-align-left"},r.a.createElement(c.NavbarHeading,null,"WinterWildfire"),r.a.createElement("div",null,r.a.createElement("span",{className:"bp3-navbar-divider"}),r.a.createElement(l.Link,{to:"/"},r.a.createElement("button",{className:"bp3-button bp3-minimal bp3-icon-home"},"Home")),r.a.createElement("button",{className:"bp3-button bp3-minimal bp3-icon-document"},"Tutorials"),r.a.createElement("button",{className:"bp3-button bp3-minimal bp3-icon-build"},"Tools"),r.a.createElement("a",{href:"https://gitlab.com/winterwildfire"},r.a.createElement("button",{className:"bp3-button bp3-minimal bp3-icon-git-branch"},"Repositories")))),r.a.createElement("div",null,r.a.createElement("button",{className:"p-2 bp3-navbar-group bp3-align-right bp3-button bp3-minimal",onClick:function(){n(!t)}},r.a.createElement("img",{className:"h-6 content-center",src:s.a})))),r.a.createElement("div",null,r.a.createElement("div",{className:t?"hidden":"viisble"},r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/"},r.a.createElement("button",{className:"bp3-fill bp3-button bp3-icon-home"},"Home"))),r.a.createElement("div",null,r.a.createElement("button",{className:"bp3-button bp3-icon-document bp3-fill"},"Tutorials")),r.a.createElement("div",null,r.a.createElement("button",{className:"bp3-button bp3-icon-build bp3-fill"},"Tools")))))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),l=n("ZhPi"),c=n("Bnag");e.exports=function(e){return a(e)||r(e)||l(e)||c()}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},"TN9+":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a);function l(e){var t=Object(a.useState)(e.isCollapsed),n=t[0],l=t[1],c=Object(a.useState)(""),o=c[0],s=c[1];return Object(a.useEffect)((function(){s("bp3-icon-standard "+(n?"bp3-icon-chevron-right":"bp3-icon-chevron-down")+" bp3-intent-success content-center mt-1")}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container_submodule",onClick:function(){l(!n)}},r.a.createElement("span",{className:o}),r.a.createElement("div",{className:"ml-2"},e.label)),r.a.createElement("div",{className:n?"hidden":"shown"},e.children))}function c(e){var t=Object(a.useState)(e.isCollapsed),n=t[0],l=t[1];return r.a.createElement("div",{className:"border"},r.a.createElement("div",{className:"container_module"},r.a.createElement("div",{className:"text_area",onClick:function(){l(!n)}},r.a.createElement("div",{className:"border-l-4 border-teal-500 -ml-3 absolute"}),r.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z"})),r.a.createElement("div",{className:"pl-2 font-semibold select-none"},e.label)),r.a.createElement("div",{className:n?"hidden":"shown"},e.children)))}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},X8hv:function(e,t,n){var a=n("sXyB"),r=n("RIqP"),l=n("lSNA"),c=n("8OQS");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n("q1tI"),u=n("7ljp"),m=u.useMDXComponents,d=u.mdx,b=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,l=e.children,o=c(e,["scope","components","children"]),u=m(n),p=b(t),f=i.useMemo((function(){if(!l)return null;var e=s({React:i,mdx:d},p),t=Object.keys(e),n=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(r(t),[""+l])).apply(void 0,[{}].concat(r(n)))}),[l,t]);return i.createElement(f,s({components:u},o))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},sXyB:function(e,t,n){var a=n("SksO"),r=n("b48C");function l(t,n,c){return r()?e.exports=l=Reflect.construct:e.exports=l=function(e,t,n){var r=[null];r.push.apply(r,t);var l=new(Function.bind.apply(e,r));return n&&a(l,n.prototype),l},l.apply(null,arguments)}e.exports=l},wb6g:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E})),n.d(t,"query",(function(){return g}));var a=n("q1tI"),r=n.n(a),l=n("A2+M"),c=n("zhx5"),o=n("DjIZ"),s=n("Wbzz"),i=n("TN9+"),u=n("LvDl"),m=n.n(u);function d(e){var t=e.FrontMatter.submoduleID,n=Object(s.useStaticQuery)("442036783").allDaedalusApiJson;return r.a.createElement("div",{className:"container_sidebar"},n.nodes.map((function(n){var a,l=m.a.findIndex(null===(a=e.GatsbyState)||void 0===a?void 0:a.submoduleList,t),c=!0;return n.submoduleID!==t&&-1==l||(c=!1),r.a.createElement(i.a,{label:n.label,isCollapsed:c},n.modules.map((function(e){var t=e.children.map((function(e){return r.a.createElement("div",null,r.a.createElement(s.Link,{to:e.link,className:"ml-3"},r.a.createElement("span",{className:"bp3-icon-large bp3-icon-small-plus bp3-intent-success content-center mr-1"}),e.title))}));return r.a.createElement(i.b,{label:e.label,isCollapsed:!0},t)})))})))}var b=n("va/L");function p(e){var t=Object(a.useState)([]),n=t[0],l=t[1],c=Object(a.useState)(""),o=c[0],i=c[1],u=Object(s.useStaticQuery)("2310079419");return Object(a.useEffect)((function(){var t=u.allDaedalusApiJson.nodes,n=[];return t.forEach((function(t){t.submoduleID===e.FrontMatter.submoduleID&&t.modules.forEach((function(t){t.seriesID===e.FrontMatter.seriesID&&(i(t.label),t.children.forEach((function(e){n.push(r.a.createElement("li",null,r.a.createElement(s.Link,{to:e.link},e.title)))})))}))})),l(n),function(){}}),[]),r.a.createElement("div",{className:"section_statuscard"},r.a.createElement("h5",{className:"title_statuscard"},o),r.a.createElement("div",{className:"border-orange-700 border-b-2 mb-2"}),r.a.createElement("ol",{className:"statuscard_list"},n),r.a.createElement("div",{className:"flex mt-3"},r.a.createElement("button",{className:"w-6/12 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold px-2 py-1 rounded inline-flex items-center mr-1 -ml-1"},r.a.createElement("svg",{className:"fill-current w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),r.a.createElement("span",null,"Download")),r.a.createElement("button",{className:"w-6/12 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold px-2 py-1 rounded inline-flex items-center"},r.a.createElement("span",{className:"bp3-icon-large bp3-icon-git-repo content-center mr-2 mt-1"}),r.a.createElement("span",null,"Reference"))))}function f(e){return Object(a.useEffect)((function(){return function(){}}),[]),void 0===e.internal?r.a.createElement("a",{href:e.link,className:e.className?e.className:""},e.label):r.a.createElement(s.Link,{to:e.link,className:e.className?e.className:"",state:e.state?e.state:null},e.label)}var v=n("+7A0"),h=Object(a.createContext)({submoduleList:[],seriesList:[]});function E(e){var t=Object(a.useState)(!0),n=t[0],s=t[1],i=Object(a.useState)("theme--dark"),u=i[0],m=i[1],E=Object(a.useState)(!0),g=E[0],y=(E[1],Object(a.useState)({isDarkMode:n,submoduleList:[0,1,2],seriesList:[]})),w=y[0],N=(y[1],Object(a.useState)([])),O=(N[0],N[1]),j=Object(a.useState)([]),x=(j[0],j[1]);return Object(a.useEffect)((function(){return g&&null!=e.location.state?(m("theme--dark"),s(!0),O(e.location.state.submoduleList),x(e.location.state.seriesList)):n?(m("theme--dark"),s(!0)):(m("theme--light"),s(!1)),console.log(n),function(){}}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Provider,{value:w},r.a.createElement(v.GatsbySeo,{title:"Sleeping Forest Documentation",description:"Sleeping forest is a VSCode extension for Unreal Engine 4 developers and asset management enthusiasts.",canonical:"https://suvam0451.netlify.app/docs/sleeping-forest/getting-started/",openGraph:{description:"Sleeping forest is a VSCode extension for Unreal Engine 4 developers and asset management enthusiasts.",images:[{alt:"Sleeping Forest logo",height:600,width:800,url:"https://i.pinimg.com/originals/b0/d6/92/b0d692662cb25c1d245d8c94671fe93d.jpg"}],site_name:"WinterWildfire",title:"Sleeping Forest Documentation",url:"https://suvam0451.netlify.app/docs/sleeping-forest/getting-started/"},twitter:{handle:"@suvam0451",site:"@suvam0451",cardType:"summary_large_image"}}),r.a.createElement("div",{className:u},r.a.createElement("div",{className:"mt-10 overflow-hidden"},r.a.createElement("div",{className:"fixed w-full -mt-10 z-40"},r.a.createElement(o.a,null)),r.a.createElement("div",{className:"container_mdtemplate"},r.a.createElement("div",{className:"sidebar_left"},r.a.createElement(d,{FrontMatter:e.data.mdx.frontmatter,GatsbyState:w}),r.a.createElement(f,{label:"Example",link:"/docs/sleeping-forest/background/",state:w}),r.a.createElement(b.Switch,{checked:n,onChange:function(){console.log("Initially",n),s(!n),console.log("Finally",n)},label:"Toggle darkmode"}),r.a.createElement(p,{FrontMatter:e.data.mdx.frontmatter})),r.a.createElement("div",{className:"layout_mainpage"},r.a.createElement("div",{className:"py-2 border rounded-lg shadow-md list-disc overflow-auto object-contain"},r.a.createElement("div",{className:"reading_area"},r.a.createElement("p",{className:"markdown_title"},e.data.mdx.frontmatter.title),r.a.createElement("h3",null,"Announcement"),r.a.createElement("blockquote",null,"Hey guys ! Just wanted to let you know that I need to run some maintenance on the website because of the recent domain name changes from netlify. So, some pages will appear like this for a few days... but guess what's coming new to the pages ?"," ",r.a.createElement("b",null,"A Dark theme switch")," !!!"),r.a.createElement(l.MDXRenderer,null,e.data.mdx.body),r.a.createElement(c.c,null)))),r.a.createElement("div",{className:"sidebar_right"},r.a.createElement("div",null,r.a.createElement("div",{className:"related_contents"},r.a.createElement("h4",null,"Related Contents"),r.a.createElement("p",null,"User created content used in WW APIs completely free. If you develop something cool using the tools, you can send us to be showcased here."),r.a.createElement(b.Button,null,"Visit Archives")),r.a.createElement(c.f,null))))))))}var g="815445608"},z1Tq:function(e,t,n){e.exports=n.p+"static/hamburger-menu-90f395835954bc6e3ad41a208fce60f6.png"}}]);
//# sourceMappingURL=component---src-templates-trailblazer-tsx-5ec01a49dc50eff0ceac.js.map