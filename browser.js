// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":f(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,x=isNaN,S=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,i,a,f,l,s,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",l=1,s=0;s<e.length;s++)if(u(n=e[s]))f+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,o;for(t=[],o=0,n=T.exec(e);n;)(r=e.slice(o,T.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),o=T.lastIndex,n=T.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function V(e){return"string"==typeof e}function F(e){var r,t,n;if(!V(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var C,I=Object.prototype,$=I.toString,N=I.__defineGetter__,R=I.__defineSetter__,B=I.__lookupGetter__,G=I.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var L=C;function Z(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function U(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&D.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[J],r=q(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[J]=t:delete e[J],n}:function(e){return z.call(e)},Q=Boolean,Y=Boolean.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return U(e)||re(e)}function ne(){return new Function("return this;")()}Z(te,"isPrimitive",U),Z(te,"isObject",re);var oe="object"==typeof self?self:null,ie="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!U(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(oe)return oe;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ce.document&&ce.document.childNodes,fe=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;Z(le,"REGEXP",se);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function de(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return de(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var ye="function"==typeof M||"object"==typeof fe||"function"==typeof ue?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function be(e){return"function"===ye(e)}function he(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&be(e.next)}function ve(e){return"number"==typeof e}var we=Number,me=we.prototype.toString,je=X();function _e(e){return"object"==typeof e&&(e instanceof we||(je?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Ee(e){return ve(e)||_e(e)}Z(Ee,"isPrimitive",ve),Z(Ee,"isObject",_e);var xe="function"==typeof H&&"symbol"==typeof H("foo")&&q(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;function Se(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var Oe,ke=Object,Te=Object.getPrototypeOf;Oe=be(Object.getPrototypeOf)?Te:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===K(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ae=Oe,Pe=Object.prototype;function Ve(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!pe(e)}(e)&&(r=function(e){return null==e?null:(e=ke(e),Ae(e))}(e),!r||!q(e,"constructor")&&q(r,"constructor")&&be(r.constructor)&&"[object Function]"===K(r.constructor)&&q(r,"isPrototypeOf")&&be(r.isPrototypeOf)&&(r===Pe||function(e){var r;for(r in e)if(!q(e,r))return!1;return!0}(e)))}function Fe(e,r){return Ve(r)?(q(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(Se("0e32V,FD",r))}return function e(r,t,n,o){var i,a,c,u,f,l,s,p,d;for(u=2,a=[0,0],i=[],c=[],d=0;d<u;d++)if(i.push(arguments[d]),he(arguments[d]))c.push(1);else{if(!ve(arguments[d]))throw new TypeError(Se("0e34P,G3",d,arguments[d]));c.push(0)}if(!be(n))throw new TypeError(Se("0e33N,G4",n));if(l={invalid:NaN},arguments.length>3&&(p=Fe(l,o)))throw p;if(Z(f={},"next",g),Z(f,"return",y),xe){for(d=0;d<u;d++)if(c[d]&&!be(i[d][xe])){s=!0;break}s||Z(f,xe,b)}return s=!1,f;function g(){var e,r,t;if(s)return{done:!0};for(t=0;t<u;t++)if(c[t]){if((r=i[t].next()).done)return s=!0,r;"number"==typeof r.value?a[t]=r.value:e=!0}else a[t]=i[t];return e?{value:l.invalid,done:!1}:{value:n(a[0],a[1]),done:!1}}function y(e){return s=!0,arguments.length?{value:e,done:!0}:{done:!0}}function b(){var r,t;for(r=[],t=0;t<u;t++)c[t]?r.push(i[t][xe]()):r.push(i[t]);return r.push(n,l),e.apply(null,r)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterMap2=r();
//# sourceMappingURL=browser.js.map