(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{KuuD:function(e,t,a){},OQUR:function(e,t,a){e.exports={container:"container-module--container--3C57J",boxbody:"container-module--boxbody--2Ju6s",RowHolder:"container-module--RowHolder--1f5ox",ShowCode:"container-module--ShowCode--28sMM",ShowCodeButton:"container-module--ShowCodeButton--3-O0J",BrownAlert:"container-module--BrownAlert--25GWe",BasePage:"container-module--BasePage--3LMPJ",DarkCard:"container-module--DarkCard--2TRwy",DarkCardBody:"container-module--DarkCardBody--2YOZO",DarkCardTable:"container-module--DarkCardTable--1Qkln",DarkCardHead:"container-module--DarkCardHead--2Q7_F",AlertCustom:"container-module--AlertCustom--wUodD",BreadCrumbCustom:"container-module--BreadCrumbCustom--388Xj",NavBarCustom:"container-module--NavBarCustom--2c7_-",box:"container-module--box--3RxS-",boximage:"container-module--boximage--3hEnF",boximageinside:"container-module--boximageinside--60tTG",smolparagraph:"container-module--smolparagraph--1X_71",boxdescription:"container-module--boxdescription--3jdKa",username:"container-module--username--3egzr",excerpt:"container-module--excerpt--3-WaZ",CustomHorizontalRule:"container-module--CustomHorizontalRule--2xZTi",SpecialImage:"container-module--SpecialImage--PNDKl",SpecialLogo:"container-module--SpecialLogo--1qV4m",HomeScreenEnter:"container-module--HomeScreen-enter--1p5Xj",HomeScreenEnterActive:"container-module--HomeScreen-enter-active--22HQm",HomeScreenExit:"container-module--HomeScreen-exit--2hmkK",HomeScreenExitActive:"container-module--HomeScreen-exit-active--3CkZT",ml11:"container-module--ml11--1aBEB",ml11textwrapper:"container-module--ml11textwrapper--1MPb9",line:"container-module--line--fQvPt",ml11line1:"container-module--ml11line1--1MQaK",ml11letter:"container-module--ml11letter--386nL"}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"indexPageQuery",(function(){return je}));a("o0o1"),a("ls82");var n,r=a("zLVn"),l=(a("HaE+"),a("q1tI")),i=a.n(l),o=a("qhky"),s=a("zhx5"),c=a("OQUR"),m=a.n(c),u=a("TSYQ"),d=a.n(u),p=a("wx14"),f=a("17x9"),h=a.n(f);function b(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function v(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var g="object"==typeof window&&window.Element||function(){};h.a.oneOfType([h.a.string,h.a.func,function(e,t,a){if(!(e[t]instanceof g))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},h.a.shape({current:h.a.any})]);var E=h.a.oneOfType([h.a.func,h.a.string,h.a.shape({$$typeof:h.a.symbol,render:h.a.func}),h.a.arrayOf(h.a.oneOfType([h.a.func,h.a.string,h.a.shape({$$typeof:h.a.symbol,render:h.a.func})]))]),w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};"undefined"==typeof window||!window.document||window.document.createElement;function x(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}var N=function(e){var t,a=e.className,n=e.listClassName,l=e.cssModule,o=e.size,s=e.tag,c=e.listTag,m=e["aria-label"],u=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),f=b(d()(a),l),h=b(d()(n,"pagination",((t={})["pagination-"+o]=!!o,t)),l);return i.a.createElement(s,{className:f,"aria-label":m},i.a.createElement(c,Object(p.a)({},u,{className:h})))};N.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"};var y=N,C=function(e){var t=e.active,a=e.className,n=e.cssModule,l=e.disabled,o=e.tag,s=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),c=b(d()(a,"page-item",{active:t,disabled:l}),n);return i.a.createElement(o,Object(p.a)({},s,{className:c}))};C.defaultProps={tag:"li"};var O=C,k=function(e){var t,a=e.className,n=e.cssModule,l=e.next,o=e.previous,s=e.first,c=e.last,m=e.tag,u=Object(r.a)(e,["className","cssModule","next","previous","first","last","tag"]),f=b(d()(a,"page-link"),n);o?t="Previous":l?t="Next":s?t="First":c&&(t="Last");var h,v=e["aria-label"]||t;o?h="‹":l?h="›":s?h="«":c&&(h="»");var g=e.children;return g&&Array.isArray(g)&&0===g.length&&(g=null),u.href||"a"!==m||(m="button"),(o||l||s||c)&&(g=[i.a.createElement("span",{"aria-hidden":"true",key:"caret"},g||h),i.a.createElement("span",{className:"sr-only",key:"sr"},v)]),i.a.createElement(m,Object(p.a)({},u,{className:f,"aria-label":v}),g)};k.defaultProps={tag:"a"};var j=k,S=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},T=function(e){var t=e.className,a=e.cssModule,n=e.widths,l=e.tag,o=Object(r.a)(e,["className","cssModule","widths","tag"]),s=[];n.forEach((function(t,n){var r=e[t];if(delete o[t],r||""===r){var l=!n;if(x(r)){var i,c=l?"-":"-"+t+"-",m=S(l,t,r.size);s.push(b(d()(((i={})[m]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i)),a))}else{var u=S(l,t,r);s.push(u)}}})),s.length||s.push("col");var c=b(d()(t,s),a);return i.a.createElement(l,Object(p.a)({},o,{className:c}))};T.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var M=T,D=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,o=e.form,s=e.widths,c=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];s.forEach((function(t,a){var n=e[t];if(delete c[t],n){var r=!a;m.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var u=b(d()(t,n?"no-gutters":null,o?"form-row":"row",m),a);return i.a.createElement(l,Object(p.a)({},c,{className:u}))};D.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]};var P=D,I=a("Wbzz"),A=(a("q4sD"),a("KuuD"),a("bSAv")),R=a.n(A),B=a("9eSz"),F=a.n(B);function H(e){return i.a.createElement("div",{className:"border-gray-600 border-2 border-solid rounded-lg my-2"},i.a.createElement("div",{className:"bg-gray-500 hover:bg-gray-600 flex-1 p-2 rounded-lg overflow-hidden border flex h-40 mx-1 my-1 shadow-md"},i.a.createElement("div",{className:"flex-1 pl-2 pr-3 pt-2"},i.a.createElement("h5",{className:"font-bold mb-3"},e.title),i.a.createElement("div",{className:"bg-teal-600 h-1 rounded-lg mb-1"}),i.a.createElement("p",{className:"text-sm font-semibold leading-snug"},e.desc),i.a.createElement("div",{className:"flex align-bottom mt-6"},i.a.createElement("img",{src:R.a,alt:"",className:"h-6 w-6 mr-2 object-cover"}),i.a.createElement("h4",{className:"text-sm font-light text-teal-600 mt-1"},"• Tutorial"))),i.a.createElement("div",{className:"flex-initial"},i.a.createElement("div",{className:"relative pb-3/5 w-56"},i.a.createElement(F.a,{className:"shadow-lg",fluid:e.image,alt:"GifGallery"})))))}function L(){var e=Object(l.useState)(12),t=e[0],a=(e[1],Object(I.useStaticQuery)("1309602851").allTutorialCardsJson);return i.a.createElement("div",null,i.a.createElement(s.a,{head:"You are in tutorial section",body:"This page showcases popular/new content. For complete list go here."}),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("div",{className:"mx-1"},i.a.createElement(P,null,function(){for(var e=[],n=t,r=0;r<a.totalCount;r++){var l=a.edges[r];if(e.push(i.a.createElement(M,{xs:"12",sm:"12",md:"6",lg:"6",xl:"4"},i.a.createElement(I.Link,{to:l.node.RelativeLink},i.a.createElement(H,{title:l.node.label,desc:l.node.desc,date:"",software:"",image:l.node.frontimg.img1.childImageSharp.fluid})))),0==--n)break}return e}())),i.a.createElement(y,{"aria-label":"Page navigation example"},i.a.createElement(O,{disabled:!0},i.a.createElement(j,{first:!0,href:"#"})),i.a.createElement(O,{disabled:!0},i.a.createElement(j,{previous:!0,href:"#"})),i.a.createElement(O,{active:!0},i.a.createElement(j,{href:"#"},"1")),i.a.createElement(O,null,i.a.createElement(j,{next:!0,href:"#"})),i.a.createElement(O,null,i.a.createElement(j,{last:!0,href:"#"}))))}a("vDqi");var z=a("sRGl"),U=a("bZ29"),K=a.n(U);function G(){return i.a.createElement("div",{className:"container_software"},i.a.createElement("div",{className:"mx-10"},i.a.createElement("div",{className:"mitems-center"},i.a.createElement("div",{className:"flex justify-center"},i.a.createElement("div",{className:"w-1/2"},i.a.createElement("p",null,"SLEEPING FOREST"),i.a.createElement("p",null,"Gamedev multitool for UE4"),i.a.createElement("p",null,"Faciliate and automate your game development pipelines for Unreal Engine 4."),i.a.createElement(s.b,{icon:"box",label:"Downloads",link:""}),i.a.createElement(s.b,{icon:"git-repo",label:"Documentation",link:"/docs/sleeping-forest/getting-started/"})),i.a.createElement("img",{src:K.a,alt:"boys",className:"w-1/2 shadow-2xl"}))),i.a.createElement("div",{className:"mjustify-center mt-8"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"flex-1 text-center mx-2"},i.a.createElement("div",{className:"bp3-icon-large bp3-icon-clipboard bp3-intent-success mr-2 mb-4 icon_bp"}),i.a.createElement("p",{className:"inline"},"UTILITY FIRST"),i.a.createElement("p",{className:"text-left"},"Comes with features like File/asset management, function injection, code/shader compilation, hand-crafted auto-completion, better intellisense and many more.")),i.a.createElement("div",{className:"flex-1 text-center mx-2"},i.a.createElement("span",{className:"bp3-icon-large bp3-icon-heart bp3-intent-warning inline mr-2 mb-4"}),i.a.createElement("p",{className:"inline"},"BUILT WITH YOU"),i.a.createElement("p",{className:"text-left"},"The community matters the most to me. The plug-in will always be free for everyone. Don't like a feature ? Have a better implementation ? Drop by and say hello and it will be updated.")),i.a.createElement("div",{className:"flex-1 text-center mx-2"},i.a.createElement("span",{className:"bp3-icon-large bp3-icon-automatic-updates bp3-intent-success inline mr-2 mb-4"}),i.a.createElement("p",{className:"inline"},"CUSTOMIZABLE"),i.a.createElement("p",{className:"text-left"},"Most features are exposed to be modifiable by the end-user, you can also drop by our Discord and suggest additions. You also have the option to request for custom functionalities.")))),i.a.createElement("hr",null),i.a.createElement("div",{className:"flex mt-16"},i.a.createElement("img",{src:K.a,alt:"boys",className:"w-1/2 shadow-md"}),i.a.createElement("div",{className:"w-1/2 text-center ml-4 pt-2"},i.a.createElement("h4",{className:"text-left"},"Snippet Library"),i.a.createElement("p",{className:"text-left font-normal"},"Hand-crafted intellisense suggestions based on personal dev experience, community feedback and ue4 macro relevance :"),i.a.createElement("div",{className:"text-left"},i.a.createElement("ul",null,i.a.createElement("li",null,"Ever-expanding library of snippets"),i.a.createElement("li",null,"Automatic header management"),i.a.createElement("li",null,"Extendible build templates for engine classes"),i.a.createElement("li",null,"Add common functions with single click"),i.a.createElement("li",null,i.a.createElement("a",{href:"/tutorials"},"And more...")))))),i.a.createElement("div",{className:"flex mt-10"},i.a.createElement("div",{className:"w-1/2 text-center ml-2 pt-2"},i.a.createElement("h4",{className:"text-left"},"Custom Command Palette"),i.a.createElement("p",{className:"text-left font-normal"},"Provides special code actions for an ever-expanding list of workflows with detailed documentation. Some examples :"),i.a.createElement("div",{className:"text-left"},i.a.createElement("ul",null,i.a.createElement("li",null,"Setup asset streams"),i.a.createElement("li",null,"Compile code/shaders/game"),i.a.createElement("li",null,"One-click improved Intellisense"),i.a.createElement("li",null,"Class/Plugin creation without editor"),i.a.createElement("li",null,i.a.createElement("a",{href:"/tutorials"},"And more..."))))),i.a.createElement("img",{src:K.a,alt:"boys",className:"w-1/2 shadow-md"})),i.a.createElement("div",{className:"flex mt-8 mb-16"},i.a.createElement("img",{src:K.a,alt:"boys",className:"w-1/2 shadow-md"}),i.a.createElement("div",{className:"w-1/2 text-center ml-4 pt-2"},i.a.createElement("h4",{className:"text-left"},"Asset streams"),i.a.createElement("p",{className:"text-left font-normal"},"A unique take on automatic asset management between your source files and engine(.uasset) files"),i.a.createElement("ul",{className:"text-left"},i.a.createElement("li",null,"Configure your import settings per folder"),i.a.createElement("li",null,"Uses ue4 vanilla Python API"),i.a.createElement("li",null,"Full control, right from the IDE"),i.a.createElement("li",null,"Asset indexing reports and extensibility ",i.a.createElement("i",null,"[WIP]")),i.a.createElement("li",null,i.a.createElement("a",{href:"/tutorials"},"Suggest features...")))))))}var _=a("+7A0"),W=function(e){var t=e.className,a=e.cssModule,n=e.tabs,l=e.pills,o=e.vertical,s=e.horizontal,c=e.justified,m=e.fill,u=e.navbar,f=e.card,h=e.tag,v=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=b(d()(t,u?"navbar-nav":"nav",!!s&&"justify-content-"+s,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":n,"card-header-tabs":f&&n,"nav-pills":l,"card-header-pills":f&&l,"nav-justified":c,"nav-fill":m}),a);return i.a.createElement(h,Object(p.a)({},v,{className:g}))};W.defaultProps={tag:"ul",vertical:!1};var Q=W,q=function(e){var t=e.className,a=e.cssModule,n=e.active,l=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),s=b(d()(t,"nav-item",!!n&&"active"),a);return i.a.createElement(l,Object(p.a)({},o,{className:s}))};q.defaultProps={tag:"li"};var J=q;function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var $=a("dI71"),V=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Z(a)),a}Object($.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.active,l=e.tag,o=e.innerRef,s=Object(r.a)(e,["className","cssModule","active","tag","innerRef"]),c=b(d()(t,"nav-link",{disabled:s.disabled,active:n}),a);return i.a.createElement(l,Object(p.a)({},s,{ref:o,onClick:this.onClick,className:c}))},t}(i.a.Component);V.defaultProps={tag:"a"};var Y=V,X=a("KFoM"),ee=i.a.createContext({}),te=[w.space,w.enter,w.up,w.down,w.end,w.home],ae=function(e){function t(t){var a;return(a=e.call(this,t)||this).addEvents=a.addEvents.bind(Z(a)),a.handleDocumentClick=a.handleDocumentClick.bind(Z(a)),a.handleKeyDown=a.handleKeyDown.bind(Z(a)),a.removeEvents=a.removeEvents.bind(Z(a)),a.toggle=a.toggle.bind(Z(a)),a.containerRef=i.a.createRef(),a}Object($.a)(t,e);var a=t.prototype;return a.getContextValue=function(){return{toggle:this.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar,disabled:this.props.disabled}},a.componentDidMount=function(){this.handleProps()},a.componentDidUpdate=function(e){this.props.isOpen!==e.isOpen&&this.handleProps()},a.componentWillUnmount=function(){this.removeEvents()},a.getContainer=function(){return this.containerRef.current},a.getMenuCtrl=function(){return this._$menuCtrl||(this._$menuCtrl=this.getContainer().querySelector("[aria-expanded]")),this._$menuCtrl},a.getMenuItems=function(){return[].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'))},a.addEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))},a.removeEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))},a.handleDocumentClick=function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===w.tab)){var t=this.getContainer();(!t.contains(e.target)||t===e.target||"keyup"===e.type&&e.which!==w.tab)&&this.toggle(e)}},a.handleKeyDown=function(e){var t=this;if(!/input|textarea/i.test(e.target.tagName)&&(w.tab!==e.which||"menuitem"===e.target.getAttribute("role")&&this.props.a11y)&&((-1!==te.indexOf(e.which)||e.which>=48&&e.which<=90)&&e.preventDefault(),!this.props.disabled&&(this.getMenuCtrl()===e.target&&(!this.props.isOpen&&[w.space,w.enter,w.up,w.down].indexOf(e.which)>-1?(this.toggle(e),setTimeout((function(){return t.getMenuItems()[0].focus()}))):this.props.isOpen&&e.which===w.esc&&this.toggle(e)),this.props.isOpen&&"menuitem"===e.target.getAttribute("role"))))if([w.tab,w.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([w.space,w.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([w.down,w.up].indexOf(e.which)>-1||[w.n,w.p].indexOf(e.which)>-1&&e.ctrlKey){var a=this.getMenuItems(),n=a.indexOf(e.target);w.up===e.which||w.p===e.which&&e.ctrlKey?n=0!==n?n-1:a.length-1:(w.down===e.which||w.n===e.which&&e.ctrlKey)&&(n=n===a.length-1?0:n+1),a[n].focus()}else if(w.end===e.which){var r=this.getMenuItems();r[r.length-1].focus()}else if(w.home===e.which){this.getMenuItems()[0].focus()}else if(e.which>=48&&e.which<=90)for(var l=this.getMenuItems(),i=String.fromCharCode(e.which).toLowerCase(),o=0;o<l.length;o+=1){if((l[o].textContent&&l[o].textContent[0].toLowerCase())===i){l[o].focus();break}}},a.handleProps=function(){this.props.isOpen?this.addEvents():this.removeEvents()},a.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},a.render=function(){var e,t,a=v(this.props,["toggle","disabled","inNavbar","a11y"]),n=a.className,l=a.cssModule,o=a.direction,s=a.isOpen,c=a.group,m=a.size,u=a.nav,f=a.setActiveFromChild,h=a.active,g=a.addonType,E=a.tag,w=Object(r.a)(a,["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","addonType","tag"]),x=E||(u?"li":"div"),N=!1;f&&i.a.Children.map(this.props.children[1].props.children,(function(e){e&&e.props.active&&(N=!0)}));var y=b(d()(n,"down"!==o&&"drop"+o,!(!u||!h)&&"active",!(!f||!N)&&"active",((e={})["input-group-"+g]=g,e["btn-group"]=c,e["btn-group-"+m]=!!m,e.dropdown=!c&&!g,e.show=s,e["nav-item"]=u,e)),l);return i.a.createElement(ee.Provider,{value:this.getContextValue()},i.a.createElement(X.c,null,i.a.createElement(x,Object(p.a)({},w,((t={})["string"==typeof x?"ref":"innerRef"]=this.containerRef,t),{onKeyDown:this.handleKeyDown,className:y}))))},t}(i.a.Component);ae.defaultProps={a11y:!0,isOpen:!1,direction:"down",nav:!1,active:!1,addonType:!1,inNavbar:!1,setActiveFromChild:!1};var ne=ae,re=a("rJga"),le=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Z(a)),a}Object($.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,l=e.className,o=e.close,s=e.cssModule,c=e.color,m=e.outline,u=e.size,f=e.tag,h=e.innerRef,v=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&void 0===v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(m?"-outline":"")+"-"+c,E=b(d()(l,{close:o},o||"btn",o||g,!!u&&"btn-"+u,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),s);v.href&&"button"===f&&(f="a");var w=o?"Close":null;return i.a.createElement(f,Object(p.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:E,ref:h,onClick:this.onClick,"aria-label":a||w}))},t}(i.a.Component);le.defaultProps={color:"secondary",tag:"button"};var ie=le,oe=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Z(a)),a}Object($.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,n=a.className,l=a.color,o=a.cssModule,s=a.caret,c=a.split,m=a.nav,u=a.tag,f=a.innerRef,h=Object(r.a)(a,["className","color","cssModule","caret","split","nav","tag","innerRef"]),v=h["aria-label"]||"Toggle Dropdown",g=b(d()(n,{"dropdown-toggle":s||c,"dropdown-toggle-split":c,"nav-link":m}),o),E=void 0!==h.children?h.children:i.a.createElement("span",{className:"sr-only"},v);return m&&!u?(e="a",h.href="#"):u?e=u:(e=ie,h.color=l,h.cssModule=o),this.context.inNavbar?i.a.createElement(e,Object(p.a)({},h,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:E})):i.a.createElement(re.a,{innerRef:f},(function(a){var n,r=a.ref;return i.a.createElement(e,Object(p.a)({},h,((n={})["string"==typeof e?"ref":"innerRef"]=r,n),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:E}))}))},t}(i.a.Component);oe.defaultProps={"aria-haspopup":!0,color:"secondary"},oe.contextType=ee;var se=oe,ce=a("rePB");var me=a("9P9J"),ue={flip:{enabled:!1}},de={up:"top",left:"left",right:"right",down:"bottom"},pe=function(e){function t(){return e.apply(this,arguments)||this}return Object($.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,n=t.cssModule,l=t.right,o=t.tag,s=t.flip,c=t.modifiers,m=t.persist,u=t.positionFixed,f=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),h=b(d()(a,"dropdown-menu",{"dropdown-menu-right":l,show:this.context.isOpen}),n),v=o;if(m||this.context.isOpen&&!this.context.inNavbar){var g=(de[this.context.direction]||"bottom")+"-"+(l?"end":"start"),E=s?c:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Object(ce.a)(e,t,a[t])}))}return e}({},c,{},ue),w=!!u;return i.a.createElement(me.a,{placement:g,modifiers:E,positionFixed:w},(function(t){var a=t.ref,n=t.style,r=t.placement;return i.a.createElement(v,Object(p.a)({tabIndex:"-1",role:"menu",ref:a,style:n},f,{"aria-hidden":!e.context.isOpen,className:h,"x-placement":r}))}))}return i.a.createElement(v,Object(p.a)({tabIndex:"-1",role:"menu"},f,{"aria-hidden":!this.context.isOpen,className:h,"x-placement":f.placement}))},t}(i.a.Component);pe.defaultProps={tag:"div",flip:!0},pe.contextType=ee;var fe=pe,he=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Z(a)),a.getTabIndex=a.getTabIndex.bind(Z(a)),a}Object($.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=v(this.props,["toggle"]),n=a.className,l=a.cssModule,o=a.divider,s=a.tag,c=a.header,m=a.active,u=Object(r.a)(a,["className","cssModule","divider","tag","header","active"]),f=b(d()(n,{disabled:u.disabled,"dropdown-item":!o&&!c,active:m,"dropdown-header":c,"dropdown-divider":o}),l);return"button"===s&&(c?s="h6":o?s="div":u.href&&(s="a")),i.a.createElement(s,Object(p.a)({type:"button"===s&&(u.onClick||this.props.toggle)?"button":void 0},u,{tabIndex:e,role:t,className:f,onClick:this.onClick}))},t}(i.a.Component);he.defaultProps={tag:"button",toggle:!0},he.contextType=ee;var be=he,ve=i.a.createContext({}),ge={tag:E,activeTab:h.a.any,className:h.a.string,cssModule:h.a.object},Ee=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object($.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.tag,r=v(this.props,Object.keys(ge)),l=b(d()("tab-content",t),a);return i.a.createElement(ve.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(n,Object(p.a)({},r,{className:l})))},t}(l.Component),we=Ee;Ee.defaultProps={tag:"div"};function xe(e){var t=e.className,a=e.cssModule,n=e.tabId,l=e.tag,o=Object(r.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return b(d()("tab-pane",t,{active:n===e}),a)};return i.a.createElement(ve.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(l,Object(p.a)({},o,{className:s(t)}))}))}xe.defaultProps={tag:"div"};var Ne=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=e.fluid,o=Object(r.a)(e,["className","cssModule","tag","fluid"]),s=b(d()(t,"jumbotron",!!l&&"jumbotron-fluid"),a);return i.a.createElement(n,Object(p.a)({},o,{className:s}))};Ne.defaultProps={tag:"div"};var ye,Ce=Ne,Oe=a("va/L"),ke=a("DjIZ"),je="2360393145";!function(e){e[e.Featured=0]="Featured",e[e.Tutorials=1]="Tutorials",e[e.Softwares=2]="Softwares",e[e.About=3]="About",e[e.Suggestions=4]="Suggestions"}(ye||(ye={}));t.default=function(e){var t=Object(l.useState)("arigato"),a=(t[0],t[1]),n=Object(l.useState)(!1),r=(n[0],n[1],Object(l.useState)(1)),c=(r[0],r[1],Object(l.useState)(ye.Featured)),u=c[0],p=c[1],f=Object(l.useState)(!1),h=f[0],b=f[1],v=Object(l.useState)(0),g=v[0],E=v[1],w=Object(l.useState)(0),x=w[0],N=w[1],y=Object(l.useState)(0),C=y[0],O=y[1],k=Object(l.useState)(Object),j=k[0],S=k[1],T=function(e){p(e)},M=e.data.site.siteMetadata;return M.title,M.author,i.a.createElement("div",null,i.a.createElement(_.GatsbySeo,{twitter:{handle:"@suvam0451",site:"@suvam0451",cardType:"summary_large_image"},metaTags:[],canonical:"https://suvam0451.netlify.app",title:"WinterWildfire - Advanced gamedev tutorials and toolkits",description:"Learn Unreal Engine 4 programming with free tutorials and sample projects."}),i.a.createElement(o.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"robots",content:"index, follow"}),i.a.createElement("meta",{property:"twitter:image",content:"https://i.pinimg.com/originals/b0/d6/92/b0d692662cb25c1d245d8c94671fe93d.jpg"}),i.a.createElement("meta",{property:"og:image",content:"https://i.pinimg.com/originals/b0/d6/92/b0d692662cb25c1d245d8c94671fe93d.jpg"}),i.a.createElement("meta",{property:"og:image:alt",content:"Faulty URL"})),i.a.createElement("div",null,i.a.createElement("div",{className:"shadow-md"},i.a.createElement(ke.a,null),i.a.createElement(Q,{tabs:!0},i.a.createElement(J,null,i.a.createElement(Y,{className:d()({active:u===ye.Featured}),onClick:function(){T(ye.Featured)}},"Main Hub")),i.a.createElement(J,null,i.a.createElement(Y,{className:d()({active:u===ye.Tutorials}),onClick:function(){T(ye.Tutorials)}},"Tutorials")),i.a.createElement(J,null,i.a.createElement(Y,{className:d()({active:u===ye.Softwares}),onClick:function(){T(ye.Softwares)}},"Sleeping Forest")),i.a.createElement(J,null,i.a.createElement(Y,{className:d()({active:u===ye.About}),onClick:function(){T(ye.About)}},"About")),i.a.createElement(J,null,i.a.createElement(Y,{className:d()({active:u===ye.Suggestions}),onClick:function(){T(ye.Suggestions)}},"Suggestion")),i.a.createElement(ne,{nav:!0,isOpen:h,toggle:function(){a("reimuuuu"),b(!h)}},i.a.createElement(se,{nav:!0,caret:!0},"Resources"),i.a.createElement(fe,null,i.a.createElement(be,{disabled:!0},"Advanced sitemap"),i.a.createElement(be,{divider:!0}),i.a.createElement(be,{disabled:!0},"UE4 Projects"),i.a.createElement(be,{disabled:!0},"Blender Scripts"))))),i.a.createElement(we,{activeTab:u},i.a.createElement(xe,{tabId:ye.Featured},i.a.createElement(Ce,null,i.a.createElement("h1",{className:"display-5"},"Welcome to WinterWildfire"),i.a.createElement("p",null,i.a.createElement("b",null,"App"),"(C++/VBA) | ",i.a.createElement("b",null,"Game"),"(UE4/CryEngine) | ",i.a.createElement("b",null,"Web"),"(React) |"," ",i.a.createElement("b",null,"DevOps")),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("p",{className:"lead"},"Home to gamedev ",i.a.createElement("b",null,"tutorials, APIs and plugins.")),i.a.createElement("p",{className:"lead"},i.a.createElement(Oe.Button,{icon:"refresh",color:"dark"},i.a.createElement("a",{href:"https://gitlab.com/suvam0451"},"Gitlab")),i.a.createElement(Oe.Button,{className:m.a.ShowCodeButton,color:"dark"},i.a.createElement("a",{href:"https://gitlab.com/suvam0451"},"Gitlab")),i.a.createElement(Oe.Button,{className:m.a.ShowCodeButton,color:"dark"},i.a.createElement("a",{href:"https://gitlab.com/suvam0451"},"Discord"))))),i.a.createElement(xe,{tabId:ye.Tutorials},i.a.createElement(L,null)),i.a.createElement(xe,{tabId:ye.Softwares},i.a.createElement(G,null)),i.a.createElement(xe,{tabId:ye.About},i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),z.a.readAll().then((function(e){S(e);j.map((function(e,t){z.a.getTodoId(e);alert("sell "+e.data.id+" at "+e.data.sell_at)}))}))}},i.a.createElement("label",null,"Item ID",i.a.createElement("input",{type:"number",name:"id",value:g,onChange:function(e){var t=e.target.value;console.log("value found to be: "+t),E(t),N(t),O(t)}})),i.a.createElement("label",null,"Buying at",i.a.createElement("input",{type:"number",name:"buy_at",value:x})),i.a.createElement("label",null,"Selling at",i.a.createElement("input",{type:"number",name:"sell_at",value:C})),i.a.createElement("button",{type:"submit"},"Submit")))),i.a.createElement(s.c,null)))}},bSAv:function(e,t,a){e.exports=a.p+"static/ue4-icon-b01c7f54c9b9b4481375682829e3f9e2.png"},bZ29:function(e,t,a){e.exports=a.p+"static/Promo01-86de7a070e846ee3d49d3758c1def77b.gif"},q4sD:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-172203a9b5b029e6bd6d.js.map