// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterMap2=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),p="get"in e,y="set"in e,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),y&&i&&i.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function j(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=j(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},h=Boolean.prototype.toString;var _=b();function g(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function O(t){return y(t)||g(t)}function S(){return new Function("return this;")()}a(O,"isPrimitive",y),a(O,"isObject",g);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var x=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),B=x.document&&x.document.childNodes,N=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(k,"REGEXP",C);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function V(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!F(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var J="function"==typeof p||"object"==typeof N||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===J(t)}function M(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function I(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var X=b();function Z(t){return"object"==typeof t&&(t instanceof R||(X?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function q(t){return I(t)||Z(t)}a(q,"isPrimitive",I),a(q,"isObject",Z);var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&j(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function D(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var H,K=Object.getPrototypeOf;H=L(Object.getPrototypeOf)?K:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Q=H;var W=Object.prototype;function Y(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!F(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Q(t))}(t),!r||!j(t,"constructor")&&j(r,"constructor")&&L(r.constructor)&&"[object Function]"===w(r.constructor)&&j(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===W||function(t){var r;for(r in t)if(!j(t,r))return!1;return!0}(t)))}function $(t,r){return Y(r)?(j(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError(D("0Jw2h",r))}return function t(r,e,n,o){var u,i,f,c,l,p,y,s,b;for(c=2,i=[0,0],u=[],f=[],b=0;b<c;b++)if(u.push(arguments[b]),M(arguments[b]))f.push(1);else{if(!I(arguments[b]))throw new TypeError(D("0Jw4c",b,arguments[b]));f.push(0)}if(!L(n))throw new TypeError(D("0Jw3Z",n));if(p={invalid:NaN},arguments.length>3&&(s=$(p,o)))throw s;if(a(l={},"next",v),a(l,"return",d),z){for(b=0;b<c;b++)if(f[b]&&!L(u[b][z])){y=!0;break}y||a(l,z,j)}return y=!1,l;function v(){var t,r,e;if(y)return{done:!0};for(e=0;e<c;e++)if(f[e]){if((r=u[e].next()).done)return y=!0,r;"number"==typeof r.value?i[e]=r.value:t=!0}else i[e]=u[e];return t?{value:p.invalid,done:!1}:{value:n(i[0],i[1]),done:!1}}function d(t){return y=!0,arguments.length?{value:t,done:!0}:{done:!0}}function j(){var r,e;for(r=[],e=0;e<c;e++)f[e]?r.push(u[e][z]()):r.push(u[e]);return r.push(n,p),t.apply(null,r)}}}));
//# sourceMappingURL=index.js.map
