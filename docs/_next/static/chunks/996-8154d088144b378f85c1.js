(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[996],{16071:function(e,t,n){"use strict";var r=n(53848),o=n(69448);t.default=void 0;var a=o(n(67294)),u=n(11689),i=n(72441),c=n(75749),f={};function s(e,t,n,r){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),M=g&&"object"===typeof g&&g.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),w=r(O,2),_=w[0],C=w[1],x=a.default.useCallback((function(e){_(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[M,_]);(0,a.useEffect)((function(){var e=C&&t&&(0,u.isLocalURL)(p),r="undefined"!==typeof b?b:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,C,b,t,n]);var j={ref:x,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,n,p,d,h,y,m,b)},onMouseEnter:function(e){(0,u.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&(0,u.getDomainLocale)(d,k,n&&n.locales,n&&n.domainLocales);j.href=E||(0,u.addBasePath)((0,u.addLocale)(d,k,n&&n.defaultLocale))}return a.default.cloneElement(g,j)};t.default=l},75749:function(e,t,n){"use strict";var r=n(53848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=(0,o.useRef)(),f=(0,o.useState)(!1),s=r(f,2),l=s[0],p=s[1],d=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!u&&!l){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=n(67294),a=n(98391),u="undefined"!==typeof IntersectionObserver;var i=new Map},93367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(93367);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,u=void 0!==a&&a;return n||o&&u}},74287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},57947:function(e,t,n){"use strict";var r=n(61682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(67294)),i=(a=n(60617))&&a.__esModule?a:{default:a},c=n(93367),f=n(74287),s=n(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var v=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=u.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,u=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){u=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,f=v.length;c<f;c++){var s=v[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;"name"===s&&u||!p.has(l)?(p.add(l),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,u.default.cloneElement(e,i)}return u.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(f.HeadManagerContext);return u.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}y.rewind=function(){};var m=y;t.default=m},60617:function(e,t,n){"use strict";var r=n(83115),o=n(2553),a=n(62012),u=(n(50450),n(9807)),i=n(27690),c=n(99828);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(67294),l=function(e){u(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},9008:function(e,t,n){n(57947)},41664:function(e,t,n){e.exports=n(16071)},38164:function(e,t,n){var r=n(54360);e.exports=function(e){if(Array.isArray(e))return r(e)}},50450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},61682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},99828:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},9807:function(e,t,n){var r=n(21914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},27690:function(e,t,n){var r=n(87917),o=n(50450);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},83115:function(e,t,n){var r=n(38164),o=n(27381),a=n(73585),u=n(95725);e.exports=function(e){return r(e)||o(e)||a(e)||u()}}}]);