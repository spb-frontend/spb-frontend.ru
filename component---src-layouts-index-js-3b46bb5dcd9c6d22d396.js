webpackJsonp([0x67ef26645b2ab800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/akurganow/Projects/spb-frontend.ru/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/akurganow/Projects/spb-frontend.ru/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/akurganow/Projects/spb-frontend.ru/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/akurganow/Projects/spb-frontend.ru/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/akurganow/Projects/spb-frontend.ru/node_modules/babel-preset-stage-0/lib/index.js","/Users/akurganow/Projects/spb-frontend.ru/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=n("./node_modules/react/react.js"),a=o(s),i=n("./src/layouts/index.js"),c=o(i),l=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),d=o(l);t.default=function(e){return a.default.createElement(c.default,r({},e,d.default))},e.exports=t.default},"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"./node_modules/style-loader/addStyles.js":function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(l(o.parts[s],t))}else{for(var a=[],s=0;s<o.parts.length;s++)a.push(l(o.parts[s],t));f[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],i=r[2],c=r[3],l={css:a,media:i,sourceMap:c};n[s]?n[s].parts.push(l):t.push(n[s]={id:s,parts:[l]})}return t}function s(e,t){var n=g(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function l(e,t){var n,o,r;if(t.singleton){var s=y++;n=h||(h=i(t)),o=d.bind(null,n,s,!1),r=d.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=m.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(t),o=u.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function d(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var s=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function m(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=p(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,y=0,x=[];e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var s=[],a=0;a<n.length;a++){var i=n[a],c=f[i.id];c.refs--,s.push(c)}if(e){var l=r(e);o(l,t)}for(var a=0;a<s.length;a++){var c=s[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete f[c.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},"./src/components/nav-header/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.SiteHeader=void 0;var i=n("./node_modules/react/react.js"),c=o(i),l=n("./node_modules/gatsby-link/index.js"),d=o(l),u=n("./src/components/nav-header/style.module.css"),m=o(u),f=n("./node_modules/svg-react-loader/lib/loader.js?name=Icon!./src/components/nav-header/mustache.svg"),p=o(f),b=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:m.default.header},c.default.createElement("div",{className:m.default.wrapper},c.default.createElement(d.default,{className:m.default.logo,to:"/"},c.default.createElement(p.default,{className:m.default.icon})),c.default.createElement(d.default,{className:m.default.menuItem,activeClassName:m.default.active,to:"/podcast"},"Drinkcast")))},t}(i.Component);t.SiteHeader=b},"./node_modules/svg-react-loader/lib/loader.js?name=Icon!./src/components/nav-header/mustache.svg":function(e,t,n){function o(e){return r.createElement("svg",e,[r.createElement("metadata",{key:0},"\n    Created by potrace 1.11, written by Peter Selinger 2001-2013\n  "),r.createElement("g",{transform:"translate(0.000000,665.000000) scale(0.100000,-0.100000)",fill:"#ffffff",stroke:"none",key:1},r.createElement("path",{d:"M7350 5779 c-345 -38 -722 -138 -1073 -286 -425 -178 -832 -414\n-1532 -888 -176 -120 -412 -278 -525 -353 -701 -464 -1195 -689 -1635 -747\n-229 -30 -338 -16 -485 61 -184 96 -315 265 -365 468 -36 149 -36 376 0 517\n55 214 201 398 394 498 115 59 199 82 327 88 227 11 411 -63 573 -231 52 -54\n69 -66 95 -66 49 0 80 38 73 88 -12 91 -112 256 -231 380 -133 139 -285 226\n-476 275 -114 29 -372 31 -500 4 -487 -102 -857 -351 -1130 -760 -404 -605\n-447 -1368 -114 -2036 255 -513 616 -857 1206 -1151 581 -289 1285 -480 2068\n-559 1196 -122 2432 45 3580 484 741 284 1505 723 2124 1222 l78 63 37 -30\nc179 -149 580 -435 816 -582 1688 -1051 3732 -1434 5625 -1053 1041 210 1862\n621 2283 1145 337 419 517 901 517 1387 0 524 -202 1023 -560 1383 -227 229\n-445 360 -741 445 -464 134 -846 58 -1130 -224 -114 -114 -248 -333 -249 -409\n0 -33 43 -72 79 -72 25 0 46 15 109 78 140 141 293 210 482 220 420 20 764\n-275 821 -703 15 -113 6 -282 -21 -395 -63 -264 -262 -468 -521 -535 -197 -51\n-612 30 -994 194 -349 150 -675 349 -1540 936 -786 533 -1254 788 -1770 965\n-395 134 -717 190 -1111 190 -528 0 -1029 -96 -1436 -275 -218 -96 -433 -239\n-611 -405 l-87 -82 -93 88 c-364 349 -848 552 -1530 645 -174 23 -678 35 -827\n18z"}))])}var r=n("./node_modules/react/react.js");o.displayName="Icon",o.defaultProps={version:"1.0",width:"2006.000000pt",height:"665.000000pt",viewBox:"0 0 2006.000000 665.000000",preserveAspectRatio:"xMidYMid meet"},e.exports=o,o.default=o},"./src/components/nav-header/style.module.css":function(e,t,n){var o=n("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/nav-header/style.module.css");"string"==typeof o&&(o=[[e.id,o,""]]);n("./node_modules/style-loader/addStyles.js")(o,{});o.locals&&(e.exports=o.locals)},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/nav-header/style.module.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,'._9cLKMoiU6q1XTnLNuryg-{position:fixed;left:0;top:0;display:flex;align-items:center;background:#222;color:#fafafa;height:50px;box-shadow:0 0 5px rgba(0,0,0,.5);width:100%;z-index:100}._3FYqaBkL2ZMko96Ok-EFJ7{display:flex;flex-grow:1;align-items:center;max-width:900px;height:100%;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px}._39y5_ZQXzM9xcePR-PC-B2{display:flex}._1DdL6kQZU4FNtA8_v_Fkog,._1XAzy7eui_b4S-WW2Ly_bp{display:flex;align-items:center;font-weight:600;color:#ddd;border:none;margin:0 10px}._1DdL6kQZU4FNtA8_v_Fkog{height:100%;padding:0 10px}._5Ni-NFRPvKc69Fd4bRVV3{color:#fafafa;background:#333}._1DdL6kQZU4FNtA8_v_Fkog:hover,._1XAzy7eui_b4S-WW2Ly_bp:hover{color:#fff}._1XAzy7eui_b4S-WW2Ly_bp{position:relative;margin-left:0;font-size:30px}._1XAzy7eui_b4S-WW2Ly_bp:after,._1XAzy7eui_b4S-WW2Ly_bp:before{color:#df4b26;font-size:30px;position:absolute;top:50%;transform:translateY(-63%)}._1XAzy7eui_b4S-WW2Ly_bp:before{content:"}";right:-10px}._1XAzy7eui_b4S-WW2Ly_bp:after{content:"{";left:-10px}.S2Yv-RBBMc1FH2Dw2nnO9{width:50px;height:100%;margin:0 5px}',""]),t.locals={header:"_9cLKMoiU6q1XTnLNuryg-",wrapper:"_3FYqaBkL2ZMko96Ok-EFJ7",menu:"_39y5_ZQXzM9xcePR-PC-B2",logo:"_1XAzy7eui_b4S-WW2Ly_bp",menuItem:"_1DdL6kQZU4FNtA8_v_Fkog",active:"_5Ni-NFRPvKc69Fd4bRVV3",icon:"S2Yv-RBBMc1FH2Dw2nnO9"}},"./src/components/subscription-form/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.SubscriptionForm=void 0;var i=n("./node_modules/react/react.js"),c=o(i),l=n("./src/components/utils.js"),d=n("./src/components/subscription-form/style.module.css"),u=o(d),m=function(e){function t(n){r(this,t);var o=s(this,e.call(this,n));return o.invited=function(e){"success"===e.result?o.showSuccess(e):o.showError(e)},o.sendForm=function(e){e.preventDefault();var t=e.currentTarget,n=(0,l.serialize)(t),o="//vk.us13.list-manage.com/subscribe/post-json?"+n+"&id=8651e5fe3f&u=e16bb3d05ec796d0d4d06c13d&c=formLoginRequestSuccess",r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=o,document.getElementsByTagName("head")[0].appendChild(r),document.getElementsByTagName("head")[0].removeChild(r)},o.showError=function(e){o.setState({errors:[e]})},o.showSuccess=function(e){o.setState({status:"success"})},o.state={errors:[],status:"form"},o}return a(t,e),t.prototype.componentDidMount=function(){window.formLoginRequestSuccess=this.invited},t.prototype.render=function(){return c.default.createElement("div",{id:"mc_embed_signup",className:u.default.subscription},"success"===this.state.status&&c.default.createElement("span",{className:u.default.success},"Спасибо, проверьте вашу почту и подтвердите подписку"),"form"===this.state.status&&c.default.createElement("form",{onSubmit:this.sendForm,action:"",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:u.default.form,target:"_blank"},c.default.createElement("input",{type:"email",name:"EMAIL",className:u.default.input,id:"mce-EMAIL",placeholder:"email address",required:!0}),c.default.createElement("div",{style:{position:"absolute",left:"-9999vw"},"aria-hidden":"true"},c.default.createElement("input",{type:"text",name:"b_e16bb3d05ec796d0d4d06c13d_8651e5fe3f",tabIndex:"-1"})),c.default.createElement("div",{className:u.default.errors},this.state.errors.map(function(e){return c.default.createElement("div",{key:e,className:u.default.error,dangerouslySetInnerHTML:{__html:e.msg}})})),c.default.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:u.default.button})))},t}(i.Component);t.SubscriptionForm=m},"./src/components/subscription-form/style.module.css":function(e,t,n){var o=n("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/subscription-form/style.module.css");"string"==typeof o&&(o=[[e.id,o,""]]);n("./node_modules/style-loader/addStyles.js")(o,{});o.locals&&(e.exports=o.locals)},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/components/subscription-form/style.module.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.i(n("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/css/config.css"),""),t.push([e.id,"._1s0NebIgnUCqTdHFyf70u0{margin-top:20px}._106HlJ8L-EXWnWmcGFiCy{width:100%;display:block;box-sizing:border-box;font-size:var(--base-size);font-family:var(--base-font)}._3saZXTiaksMVLnIEkHc1I7,._34__rfoqQeT0lLqFdixpOn{width:100%;display:block;box-sizing:border-box;font-family:inherit;font-size:inherit;border:1px solid var(--color-grey);padding:calc(var(--base-size) / 2) var(--base-size)}._3saZXTiaksMVLnIEkHc1I7{margin-top:calc(var(--base-size) / 2);background-color:var(--color-light);transition:background-color .15s ease;cursor:pointer;&:hover{background-color:var(--color-grey)}}.nkY2RgzVcUSUlrTRZPvdC{margin:calc(var(--base-size) / 2) 0}._1RYZNvTEB5OT7ePe_P2ntq,.nkY2RgzVcUSUlrTRZPvdC{font-size:calc(var(--base-size) / 1.5)}",""]),t.locals={subscription:"_1s0NebIgnUCqTdHFyf70u0",form:"_106HlJ8L-EXWnWmcGFiCy",input:"_34__rfoqQeT0lLqFdixpOn",button:"_3saZXTiaksMVLnIEkHc1I7",errors:"nkY2RgzVcUSUlrTRZPvdC",error:"_1RYZNvTEB5OT7ePe_P2ntq"}},"./src/components/utils.js":function(e,t){"use strict";function n(e){var t=e.toLowerCase(),n=t.replace(/\s/g,"_");return n}function o(e){if(e&&"FORM"===e.nodeName){var t=void 0,n=void 0,o=[];for(t=e.elements.length-1;t>=0;t-=1)if(""!==e.elements[t].name)switch(e.elements[t].nodeName){case"INPUT":switch(e.elements[t].type){case"text":case"email":case"hidden":case"password":case"button":case"reset":case"submit":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"checkbox":case"radio":e.elements[t].checked&&o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"file":}break;case"TEXTAREA":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"SELECT":switch(e.elements[t].type){case"select-one":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value));break;case"select-multiple":for(n=e.elements[t].options.length-1;n>=0;n-=1)e.elements[t].options[n].selected&&o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].options[n].value))}break;case"BUTTON":switch(e.elements[t].type){case"reset":case"submit":case"button":o.push(e.elements[t].name+"="+encodeURIComponent(e.elements[t].value))}}return o.join("&")}}function r(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=function(){n.status>=200&&n.status<400?t(JSON.parse(n.responseText)):console.error("Server error: ",n)},n.onerror=function(){console.error("Connection error: ",n)},n.send()}function s(e){function t(){var e="now"in window.performance?performance.now():(new Date).getTime(),c=Math.min(1,(e-i)/n),l=s[o](c);return window.scroll(0,Math.ceil(l*(u-a)+a)),window.pageYOffset===u?void(r&&r()):void requestAnimationFrame(t)}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",r=arguments[3],s={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},a=window.pageYOffset,i="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),l=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,d="number"==typeof e?e:e.offsetTop,u=Math.round(c-d<l?c-l:d);return"requestAnimationFrame"in window==!1?(window.scroll(0,u),void(r&&r())):void t()}t.__esModule=!0,t.toSnakeCase=n,t.serialize=o,t.getJSON=r,t.scrollIt=s},"./node_modules/css-loader/index.js!./src/css/config.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,":root{--base-font:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;--base-size:16px;--color-red:#df4b26;--color-grey:#f7f7f7;--color-dark:#000;--color-light:#fff}",""])},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/postcss-loader/index.js!./src/css/config.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,":root{--base-font:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;--base-size:16px;--color-red:#df4b26;--color-grey:#f7f7f7;--color-dark:#000;--color-light:#fff}",""])},"./src/css/index.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.i(n("./node_modules/css-loader/index.js!./src/css/config.css"),""),t.push([e.id,"body,html{margin:0;padding:0;width:100%;min-height:100%;display:flex}body{font-family:var(--base-font);font-size:var(--base-size);background:var(--color-light);color:var(--color-dark)}a{color:var(--color-red);text-decoration:none;border-bottom-width:1px;border-bottom-style:solid}a.no-border{border-bottom:none}a:focus,a:hover{cursor:pointer;border:none}dl,p{margin:0;padding:.5em 0}.app{min-width:100%;min-height:100%}.app,.page{display:flex}.page{flex-direction:column;padding:70px 0 1em;width:100%}.page,.page--header{box-sizing:border-box}.page--header{padding:0 1em}.page--heading{margin:0;padding:0 0 .5em}.page--aside{box-sizing:border-box;padding:0 1em;order:1;margin-top:1em;border-top:1px solid #eee}.page--container{display:flex;flex-direction:column;flex-grow:1}.page--logo{float:right;padding:1em 0}.page--content{box-sizing:border-box;padding:0 1em}.page--footer{box-sizing:border-box;padding:40px 1em;font-size:.9em}.contacts--desc{margin-left:0;-webkit-margin-start:0;&+.contacts--term{margin-top:calc(var(--base-size) / 2)}}@media screen and (min-width:700px){.page{flex-direction:column;flex-wrap:wrap;align-content:flex-start}.page--aside{flex-basis:250px;order:1;margin-top:0;border-top:none}.page--logo{float:none}.page--container{flex-direction:row}.page--content{flex-basis:calc(100% - 250px)}}@media screen and (min-width:950px){.page{width:900px;margin-left:auto;margin-right:auto}}",""])},"./src/css/typography.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:scroll}*,:after,:before{box-sizing:inherit}body{color:rgba(0,0,0,.8);font-family:georgia,serif;font-weight:400;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:"kern","liga","clig","calt";-ms-font-feature-settings:"kern","liga","clig","calt";-webkit-font-feature-settings:"kern","liga","clig","calt";font-feature-settings:"kern","liga","clig","calt"}img{max-width:100%;margin:0 0 .85rem;padding:0}h1{margin:0 0 .85rem;font-size:2.25rem;line-height:2.9rem}h1,h2{padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility}h2{margin-bottom:0 0 .85rem;font-size:1.62671rem;line-height:2.175rem}h3{font-size:1.38316rem;line-height:2.175rem}h3,h4{margin:0 0 .85rem;padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility}h4{font-size:1rem;line-height:.85rem}h5{margin:0 0 .85rem;font-size:.85028rem}h5,h6{padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:.85rem}h6{font-size:.78405rem}h6,hgroup{margin-bottom:0 0 .85rem}hgroup{padding:0}ul{margin:0 0 .85rem .85rem}ol,ul{padding:0;list-style-position:outside;list-style-image:none}ol{margin-bottom:0 0 .85rem .85rem}dl{padding:0;margin-bottom:0 0 .85rem}dd,figure,p{padding:0}dd,figure,p,pre{margin:0 0 .85rem}pre{font-size:.85rem;line-height:1.42;background:rgba(0,0,0,.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:.85rem}table{font-size:1rem;line-height:.85rem;border-collapse:collapse;width:100%}fieldset,table{margin:0 0 .85rem;padding:0}blockquote{margin-bottom:0 .85rem .85rem;padding:0}form,iframe,noscript{margin:0 0 .85rem;padding:0}hr{margin:0 0 calc(.85rem - 1px);padding:0;background:rgba(0,0,0,.2);border:none;height:1px}address{margin:0 0 .85rem;padding:0}b,strong,th{font-weight:700}li{margin-bottom:0.425rem}ol li,ul li{padding-left:0}li>ol,li>ul{margin-left:.85rem;margin-bottom:0.425rem;margin-top:0.425rem}blockquote :last-child,li :last-child,p :last-child{margin-bottom:0}li>p{margin-bottom:0.425rem}code,kbd,samp{font-size:.85rem;line-height:.85rem}abbr,abbr[title],acronym{border-bottom:1px dotted rgba(0,0,0,.5);cursor:help}abbr[title]{text-decoration:none}td,th,thead{text-align:left}td,th{border-bottom:1px solid rgba(0,0,0,.12);font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";-ms-font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";padding-top:.725rem .96667rem calc(.725rem - 1px)}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}code,tt{background-color:rgba(0,0,0,.04);border-radius:3px;font-family:SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;padding:0;padding-top:.2em;padding-bottom:.2em}pre code{background:none;line-height:1.42}code:after,code:before,tt:after,tt:before{letter-spacing:-.2em;content:" "}pre code:after,pre code:before,pre tt:after,pre tt:before{content:""}@media only screen and (max-width:480px){html{font-size:100%}}',""])},"./src/layouts/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.defaultHelmetMeta=void 0;var r=n("./node_modules/react/react.js"),s=o(r),a=n("./src/components/subscription-form/index.js"),i=n("./src/components/nav-header/index.js");n("./src/css/typography.css"),n("./src/css/index.css");var c=function(e){return s.default.createElement("div",{className:"page"},s.default.createElement(i.SiteHeader,null),s.default.createElement("div",{className:"page--container"},s.default.createElement("aside",{className:"page--aside"},s.default.createElement("a",{className:"no-border",href:"/"},s.default.createElement("picture",{className:"logo page--logo"},s.default.createElement("source",{type:"image/webp",srcSet:" https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/200x/-/format/webp/spb_frontend_logo.webp 1x, https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/400x/-/format/webp/-/quality/lightest/spb_frontend_logo@2x.webp 2x"}),s.default.createElement("img",{src:"https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/200x/spb_frontend_logo.png",srcSet:"https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/400x/-/quality/lightest/spb_frontend_logo@2x.png 2x",alt:"SPB Frontend. Frontend artisans"}))),s.default.createElement("dl",{className:"contacts"},s.default.createElement("dt",{className:"contacts--term"},"ВКонтакте"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"https://vk.com/spb_frontend"},"spb_frontend")),s.default.createElement("dt",{className:"contacts--term"},"Твитер"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"https://twitter.com/spb_frontend"},"@spb_frontend")),s.default.createElement("dt",{className:"contacts--term"},"Канал в Телеграме"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"https://t.me/spb_frontend"},"@spb_frontend")),s.default.createElement("dt",{className:"contacts--term"},"Канал на ютубе"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"https://www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA"},"SPB Frontend")),s.default.createElement("dt",{className:"contacts--term"},"Слак-чат"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"https://spb-frontend.slack.com/"},"spb-frontend.slack.com")),s.default.createElement("dt",{className:"contacts--term"},"Регистрация в Слак"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"http://slack.spb-frontend.ru/"},"slack.spb-frontend.ru")),s.default.createElement("dt",{className:"contacts--term"},"Гитхаб"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"https://github.com/spb-frontend"},"spb-frontend")),s.default.createElement("dt",{className:"contacts--term"},"Почта"),s.default.createElement("dd",{className:"contacts--desc"},s.default.createElement("a",{href:"mailto:hi@spb-frontend.ru"},"hi@spb-frontend.ru"))),s.default.createElement(a.SubscriptionForm,null)),s.default.createElement("main",{className:"page--content"},e.children())),s.default.createElement("footer",{className:"page--footer"},s.default.createElement("div",null,s.default.createElement("a",{href:"https://github.com/spb-frontend/spb-frontend.ru"},"Сайт на гитхабе"))))};t.default=c;t.defaultHelmetMeta=[{name:"theme-color",content:"#ffffff"},{property:"og:title",content:"SPB Frontend"},{property:"og:description",content:"Петербургское сообщество фронтенд-разработчиков"},{property:"og:image",content:"https://ucarecdn.com/bcedcf3c-77c7-4693-8888-7e5645185882/-/preview/-/resize/1200x/-/crop/1200x630/0,300/spb_frontend_social.png"},{property:"og:url",content:"http://spb-frontend.ru/"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@spb_frontend"},{name:"twitter:image:alt",content:"SPB Frontend. Frontend artisans"},{name:"description",content:"Петербургское сообщество фронтенд-разработчиков"},{name:"keywords",content:"frontend, spb-frontend"}]}});
//# sourceMappingURL=component---src-layouts-index-js-3b46bb5dcd9c6d22d396.js.map