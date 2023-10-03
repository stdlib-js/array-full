"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(p,n){
var v=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,m=require('@stdlib/array-ctors/dist'),f=require('@stdlib/array-base-filled/dist'),g=require('@stdlib/blas-ext-base-gfill/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r,e){var i,t,a;if(!v(r))throw new TypeError(u('00t2d',r));if(arguments.length>2?i=arguments[2]:i="float64",i==="generic")return f(e,r);if(t=m(i),t===null)throw new TypeError(u('00t2e',i));return a=new t(r),g(r,e,a,1),a}n.exports=l
});var c=s();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
