"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=v(function(w,n){
var o=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,f=require('@stdlib/array-ctors/dist'),g=require('@stdlib/array-base-filled/dist'),l=require('@stdlib/blas-ext-base-gfill/dist'),m=require('@stdlib/array-defaults/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist'),d=m.get("dtypes.default");function c(e,r){var i,t,a;if(!o(e))throw new TypeError(u('00t2d',e));if(arguments.length>2?i=arguments[2]:i=d,i==="generic")return g(r,e);if(t=f(i),t===null)throw new TypeError(u('00t2e',i));return a=new t(e),l(e,r,a,1),a}n.exports=c
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
