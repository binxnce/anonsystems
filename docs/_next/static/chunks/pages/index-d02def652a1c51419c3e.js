(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{97752:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var a=t(85893),i=t(41664),r=t(67294);function c(n){var e=n.children,t=n.page;function c(n){return n===t?"is-active":""}return(0,r.useEffect)((function(){!function(){var n=Math.ceil(4*Math.random());document.getElementById("main").style.backgroundImage='url("/bg/'+n+'.jpeg")'}();var n=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);n.length>0&&n.forEach((function(n){n.addEventListener("click",(function(){var e=n.dataset.target,t=document.getElementById(e);n.classList.toggle("is-active"),t.classList.toggle("is-active")}))}))})),(0,a.jsxs)("section",{className:"hero is-fullheight is-info background-image",id:"main",children:[(0,a.jsx)("div",{className:"hero-head",children:(0,a.jsx)("header",{className:"navbar",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"navbar-brand",children:[(0,a.jsx)("a",{className:"navbar-item",children:(0,a.jsx)("img",{src:"/img/logo.png",alt:"Logo",width:"400px",height:"400px"})}),(0,a.jsxs)("span",{className:"navbar-burger","data-target":"navbarMenuHeroC",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]})]}),(0,a.jsx)("div",{id:"navbarMenuHeroC",className:"navbar-menu",children:(0,a.jsxs)("div",{className:"navbar-end",children:[(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{className:"navbar-item "+c("home"),children:"Home"})}),(0,a.jsx)(i.default,{href:"/app/board/",children:(0,a.jsx)("a",{className:"navbar-item "+c("board"),children:"Board"})}),(0,a.jsx)("a",{className:"navbar-item",href:"https://github.com/anon-systems/",children:"Github"}),(0,a.jsx)("a",{className:"navbar-item",href:"https://twitter.com/SCMAGLEV1",children:"Twitter"}),(0,a.jsx)("span",{className:"navbar-item"})]})})]})})}),(0,a.jsx)("main",{children:e}),(0,a.jsx)("div",{className:"hero-foot",children:(0,a.jsx)("nav",{className:"tabs",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("ul",{children:(0,a.jsx)("li",{className:"is-active",children:(0,a.jsx)("a",{href:"https://twitter.com/akinecoco987/status/1379738294204780547",children:"Background by @akinecoco987"})})})})})})]})}},26255:function(n,e,t){"use strict";var a=t(53848),i=t(83115),r=t(62426);var c=r(t(26169)),s=r(t(9566)),o=r(t(67294)),u=r(t(57947)),l=t(47239),d=t(5655),f=t(75749);var h=new Map([["imgix",function(n){var e=n.root,t=n.src,a=n.width,i=n.quality,r=["auto=format","fit=max","w="+a],c="";i&&r.push("q="+i);r.length&&(c="?"+r.join("&"));return"".concat(e).concat(N(t)).concat(c)}],["cloudinary",function(n){var e=n.root,t=n.src,a=n.width,i=n.quality,r=["f_auto","c_limit","w_"+a,"q_"+(i||"auto")].join(",")+"/";return"".concat(e).concat(r).concat(N(t))}],["akamai",function(n){var e=n.root,t=n.src,a=n.width;return"".concat(e).concat(N(t),"?imwidth=").concat(a)}],["default",function(n){var e=n.root,t=n.src,a=n.width,i=n.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(t),"&w=").concat(a,"&q=").concat(i||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,v=m.deviceSizes,g=m.imageSizes,p=m.loader,x=m.path,w=(m.domains,[].concat(i(v),i(g)));function j(n){var e=n.src,t=n.unoptimized,a=n.layout,r=n.width,c=n.quality,s=n.sizes,o=n.loader;if(t)return{src:e,srcSet:void 0,sizes:void 0};var u=function(n,e,t){if(t&&("fill"===e||"responsive"===e)){var a=i(t.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(n){return parseInt(n[2])}));if(a.length){var r=.01*Math.min.apply(Math,i(a));return{widths:w.filter((function(n){return n>=v[0]*r})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof n||"fill"===e||"responsive"===e?{widths:v,kind:"w"}:{widths:i(new Set([n,2*n].map((function(n){return w.find((function(e){return e>=n}))||w[w.length-1]})))),kind:"x"}}(r,a,s),l=u.widths,d=u.kind,f=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((function(n,t){return"".concat(o({src:e,quality:c,width:n})," ").concat("w"===d?n:t+1).concat(d)})).join(", "),src:o({src:e,quality:c,width:l[f]})}}function b(n){return"number"===typeof n?n:"string"===typeof n?parseInt(n,10):void 0}function y(n){var e=h.get(p);if(e)return e((0,s.default)({root:x},n));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(p))}function N(n){return"/"===n[0]?n.slice(1):n}v.sort((function(n,e){return n-e})),w.sort((function(n,e){return n-e}))},47239:function(n,e){"use strict";e.__esModule=!0,e.toBase64=function(n){return window.btoa(n)}},28474:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var a=t(85893),i=(t(9008),t(25675),t(41664),t(97752));function r(){return(0,a.jsx)(i.Z,{page:"home",children:(0,a.jsx)("div",{className:"hero-body",children:(0,a.jsx)("div",{className:"container has-text-centered",children:(0,a.jsx)("p",{className:"title main",children:"anon.systems"})})})})}},78581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(28474)}])},5655:function(n,e){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},25675:function(n,e,t){t(26255)},9566:function(n){function e(){return n.exports=e=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},e.apply(this,arguments)}n.exports=e},26169:function(n){n.exports=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}},14453:function(){}},function(n){n.O(0,[774,351,433,996],(function(){return e=78581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);