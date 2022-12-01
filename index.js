// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterMap2=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=j(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var g=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return y(t)||w(t)}function S(){return new Function("return this;")()}a(O,"isPrimitive",y),a(O,"isObject",w);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,T="object"==typeof global?global:null;var A=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),x=A.document&&A.document.childNodes,B=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(N,"REGEXP",k);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function F(t){return null!==t&&"object"==typeof t}function V(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=k.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F));var G="function"==typeof p||"object"==typeof B||"function"==typeof x?function(t){return V(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?V(t).toLowerCase():r};function J(t){return"function"===G(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&J(t.next)}function M(t){return"number"==typeof t}var I=Number,R=I.prototype.toString;var U=b();function X(t){return"object"==typeof t&&(t instanceof I||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function Z(t){return M(t)||X(t)}a(Z,"isPrimitive",M),a(Z,"isObject",X);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&j(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function z(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var D,H=Object.getPrototypeOf;D=J(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var K=D;var Q=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),K(t))}(t),!r||!j(t,"constructor")&&j(r,"constructor")&&J(r.constructor)&&"[object Function]"===h(r.constructor)&&j(r,"isPrototypeOf")&&J(r.isPrototypeOf)&&(r===Q||function(t){var r;for(r in t)if(!j(t,r))return!1;return!0}(t)))}function Y(t,r){return W(r)?(j(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError(z("0Jw2h",r))}return function t(r,e,n,o){var u,i,c,f,l,p,y,s,b;for(f=2,i=[0,0],u=[],c=[],b=0;b<f;b++)if(u.push(arguments[b]),L(arguments[b]))c.push(1);else{if(!M(arguments[b]))throw new TypeError(z("0Jw4c",b,arguments[b]));c.push(0)}if(!J(n))throw new TypeError(z("0Jw3Z",n));if(p={invalid:NaN},arguments.length>3&&(s=Y(p,o)))throw s;if(a(l={},"next",v),a(l,"return",d),q){for(b=0;b<f;b++)if(c[b]&&!J(u[b][q])){y=!0;break}y||a(l,q,j)}return y=!1,l;function v(){var t,r,e;if(y)return{done:!0};for(e=0;e<f;e++)if(c[e]){if((r=u[e].next()).done)return y=!0,r;"number"==typeof r.value?i[e]=r.value:t=!0}else i[e]=u[e];return t?{value:p.invalid,done:!1}:{value:n(i[0],i[1]),done:!1}}function d(t){return y=!0,arguments.length?{value:t,done:!0}:{done:!0}}function j(){var r,e;for(r=[],e=0;e<f;e++)c[e]?r.push(u[e][q]()):r.push(u[e]);return r.push(n,p),t.apply(null,r)}}}));
//# sourceMappingURL=index.js.map
