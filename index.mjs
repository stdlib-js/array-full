// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-ctors@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function n(n,d){var o,m,l;if(!e(n))throw new TypeError(i("00R2p",n));if("generic"===(o=arguments.length>2?arguments[2]:"float64"))return t(d,n);if(null===(m=r(o)))throw new TypeError(i("00R2q",o));return l=new m(n),s(n,d,l,1),l}export{n as default};
//# sourceMappingURL=index.mjs.map
