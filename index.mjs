// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function l(e,r){return o(r)?(d(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(i("0Jw2h",r))}function m(o,d,p,u){var f,a,h,j,v,c,b,g,x;for(j=2,a=[0,0],f=[],h=[],x=0;x<j;x++)if(f.push(arguments[x]),t(arguments[x]))h.push(1);else{if(!s(arguments[x]))throw new TypeError(i("0Jw4c",x,arguments[x]));h.push(0)}if(!r(p))throw new TypeError(i("0Jw3Z",p));if(c={invalid:NaN},arguments.length>3&&(g=l(c,u)))throw g;if(e(v={},"next",w),e(v,"return",y),n){for(x=0;x<j;x++)if(h[x]&&!r(f[x][n])){b=!0;break}b||e(v,n,E)}return b=!1,v;function w(){var e,r,t;if(b)return{done:!0};for(t=0;t<j;t++)if(h[t]){if((r=f[t].next()).done)return b=!0,r;"number"==typeof r.value?a[t]=r.value:e=!0}else a[t]=f[t];return e?{value:c.invalid,done:!1}:{value:p(a[0],a[1]),done:!1}}function y(e){return b=!0,arguments.length?{value:e,done:!0}:{done:!0}}function E(){var e,r;for(e=[],r=0;r<j;r++)h[r]?e.push(f[r][n]()):e.push(f[r]);return e.push(p,c),m.apply(null,e)}}export{m as default};
//# sourceMappingURL=index.mjs.map
