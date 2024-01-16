"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(w,n){
var o=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/array-ctors/dist'),g=require('@stdlib/array-base-filled/dist'),l=require('@stdlib/blas-ext-base-gfill/dist'),m=require('@stdlib/array-defaults/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist'),d=m.get("dtypes.default");function c(r,e){var i,t,a;if(!o(r))throw new TypeError(u('00t2d',r));if(arguments.length>2?i=arguments[2]:i=d,i==="generic")return g(e,r);if(t=f(i),t===null)throw new TypeError(u('00t2e',i));return a=new t(r),l(r,e,a,1),a}n.exports=c
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
