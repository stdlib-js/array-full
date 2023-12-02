// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).full=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,M=C.__defineGetter__,O=C.__defineSetter__,P=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||U.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&O&&O.call(r,e,t.set),r};var N=I;function Y(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"number"==typeof r}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof z?z.toStringTag:"";var q=G()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[H],e=J(r,H);try{r[H]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[H]=t:delete r[H],n}:function(r){return Z.call(r)},D=Number,K=D.prototype.toString;var Q=G();function rr(r){return"object"==typeof r&&(r instanceof D||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function er(r){return W(r)||rr(r)}Y(er,"isPrimitive",W),Y(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=D.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ar(r){return r<tr&&r>nr&&or(r)}function ur(r){return W(r)&&ar(r)}function fr(r){return rr(r)&&ar(r.valueOf())}function lr(r){return ur(r)||fr(r)}function cr(r){return ur(r)&&r>=0}function sr(r){return fr(r)&&r.valueOf()>=0}function yr(r){return cr(r)||sr(r)}Y(lr,"isPrimitive",ur),Y(lr,"isObject",fr),Y(yr,"isPrimitive",cr),Y(yr,"isObject",sr);var pr="function"==typeof Float64Array;var hr="function"==typeof Float64Array?Float64Array:null;var gr="function"==typeof Float64Array?Float64Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr([1,3.14,-3.14,NaN]),t=e,r=(pr&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Float32Array;var br="function"==typeof Float32Array?Float32Array:null;var vr="function"==typeof Float32Array?Float32Array:void 0;var dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,5e40]),t=e,r=(wr&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===tr}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Int16Array;var Ar="function"==typeof Int16Array?Int16Array:null;var Tr="function"==typeof Int16Array?Int16Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,32768]),t=e,r=(Er&&t instanceof Int16Array||"[object Int16Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Int32Array;var jr="function"==typeof Int32Array?Int32Array:null;var kr="function"==typeof Int32Array?Int32Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr([1,3.14,-3.14,2147483648]),t=e,r=(xr&&t instanceof Int32Array||"[object Int32Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Lr="function"==typeof Int8Array;var Rr="function"==typeof Int8Array?Int8Array:null;var Sr="function"==typeof Int8Array?Int8Array:void 0;var Br=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr([1,3.14,-3.14,128]),t=e,r=(Lr&&t instanceof Int8Array||"[object Int8Array]"===q(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Ir="function"==typeof Uint16Array;var Cr="function"==typeof Uint16Array?Uint16Array:null;var Fr="function"==typeof Uint16Array?Uint16Array:void 0;var Mr=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Ir&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Or="function"==typeof Uint32Array;var Pr="function"==typeof Uint32Array?Uint32Array:null;var Ur="function"==typeof Uint32Array?Uint32Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Or&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},Yr="function"==typeof Uint8Array;var Wr="function"==typeof Uint8Array?Uint8Array:null;var $r="function"==typeof Uint8Array?Uint8Array:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr(e=[1,3.14,-3.14,256,257]),t=e,r=(Yr&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")},Zr="function"==typeof Uint8ClampedArray;var Xr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Jr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var zr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Zr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===q(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};function Hr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=4294967295}function qr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=9007199254740991}var Dr="function"==typeof ArrayBuffer;function Kr(r){return Dr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===q(r)}var Qr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function re(r){return"object"==typeof r&&null!==r&&!Qr(r)}var ee=/./;function te(r){return"boolean"==typeof r}var ne=Boolean,ie=Boolean.prototype.toString;var oe=G();function ae(r){return"object"==typeof r&&(r instanceof ne||(oe?function(r){try{return ie.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function ue(r){return te(r)||ae(r)}function fe(){return new Function("return this;")()}Y(ue,"isPrimitive",te),Y(ue,"isObject",ae);var le="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="object"==typeof global?global:null,ye="object"==typeof globalThis?globalThis:null;var pe=function(r){if(arguments.length){if(!te(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fe()}if(ye)return ye;if(le)return le;if(ce)return ce;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),he=pe.document&&pe.document.childNodes,ge=Int8Array;function me(){return/^\s*function\s*([^(]*)/i}var we=/^\s*function\s*([^(]*)/i;function be(r){return null!==r&&"object"==typeof r}function ve(r){return be(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function de(r){var e,t,n;if(("Object"===(t=q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=we.exec(n.toString()))return e[1]}return ve(r)?"Buffer":t}Y(me,"REGEXP",we),Y(be,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Qr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(be));var Ee="function"==typeof ee||"object"==typeof ge||"function"==typeof he?function(r){return de(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?de(r).toLowerCase():e};function Ae(r){return"function"===Ee(r)}function Te(r,e){if(!(this instanceof Te))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Te,"BYTES_PER_ELEMENT",8),Y(Te.prototype,"BYTES_PER_ELEMENT",8),Y(Te.prototype,"byteLength",16),Y(Te.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Te.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var _e="function"==typeof Math.fround?Math.fround:null,xe=new dr(1);var je="function"==typeof _e?_e:function(r){return xe[0]=r,xe[0]};function ke(r,e){if(!(this instanceof ke))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!W(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!W(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:je(r)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:je(e)}),this}function Ve(r){return r instanceof Te||r instanceof ke||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Le(r){return or(r/2)}function Re(){return"function"==typeof z&&"symbol"==typeof z("foo")&&J(z,"iterator")&&"symbol"==typeof z.iterator}Y(ke,"BYTES_PER_ELEMENT",4),Y(ke.prototype,"BYTES_PER_ELEMENT",4),Y(ke.prototype,"byteLength",8),Y(ke.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(ke.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Se=Re()?Symbol.iterator:null;function Be(r,e,t){N(r,e,{configurable:!1,enumerable:!1,get:t})}function Ie(r){return r.re}function Ce(r){return r.im}function Fe(r,e){return new dr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Me(r,e){return new mr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var Oe={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Pe(r){var e=Oe[r];return"function"==typeof e?e:Oe.default}var Ue={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Ne(r){var e=Ue[r];return"function"==typeof e?e:Ue.default}function Ye(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Hr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ve(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ie(n),Ce(n))}return e}function We(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Hr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ve(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ie(o),Ce(o))}return n}function $e(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ve(n=e[i]))return null;r[o]=Ie(n),r[o+1]=Ce(n),o+=2}return r}var Ge=2*dr.BYTES_PER_ELEMENT,Ze=Re();function Xe(r){return r instanceof qe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Je(r){return r===qe||"Complex128Array"===r.name}function ze(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ge}function He(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Ge}function qe(){var r,e,t,n;if(e=arguments.length,!(this instanceof qe))return 0===e?new qe:1===e?new qe(arguments[0]):2===e?new qe(arguments[0],arguments[1]):new qe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new dr(0);else if(1===e)if(cr(arguments[0]))t=new dr(2*arguments[0]);else if(qr(arguments[0]))if((n=(t=arguments[0]).length)&&Qr(t)&&Ve(t[0])){if(null===(t=$e(new dr(2*n),t))){if(!Le(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new dr(arguments[0])}}else{if(ze(t))t=Fe(t,0);else if(He(t))t=Me(t,0);else if(!Le(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new dr(t)}else if(Kr(arguments[0])){if(!or((t=arguments[0]).byteLength/Ge))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Ge,t.byteLength));t=new dr(t)}else{if(!re(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Ze)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ae(t[Se]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ae((t=t[Se]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Ye(t))instanceof Error)throw t;t=new dr(t)}else{if(!Kr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!cr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!or(r/Ge))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Ge,r));if(2===e){if(!or((n=t.byteLength-r)/Ge))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Ge,n));t=new dr(t,r)}else{if(!cr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Ge>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Ge));t=new dr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function De(r){return r.re}function Ke(r){return r.im}function Qe(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Hr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ve(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(De(n),Ke(n))}return e}function rt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Hr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ve(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(De(o),Ke(o))}return n}function et(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ve(n=e[i]))return null;r[o]=De(n),r[o+1]=Ke(n),o+=2}return r}Y(qe,"BYTES_PER_ELEMENT",Ge),Y(qe,"name","Complex64Array"),Y(qe,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ae(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(Xe(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ve(c=n.call(e,r.get(s),s)))o[y]=Ie(c),o[y+1]=Ce(c);else{if(!(Hr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(qr(r)){if(n){for(f=r.length,u=r.get&&r.set?Ne("default"):Pe("default"),s=0;s<f;s++)if(!Ve(u(r,s))){l=!0;break}if(l){if(!Le(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ve(c=n.call(e,u(r,s),s)))o[y]=Ie(c),o[y+1]=Ce(c);else{if(!(Hr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(re(r)&&Ze&&Ae(r[Se])){if(!Ae((o=r[Se]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?We(o,n,e):Ye(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(qe,"of",(function(){var r,e;if(!Ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Be(qe.prototype,"buffer",(function(){return this._buffer.buffer})),Be(qe.prototype,"byteLength",(function(){return this._buffer.byteLength})),Be(qe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(qe.prototype,"BYTES_PER_ELEMENT",qe.BYTES_PER_ELEMENT),Y(qe.prototype,"copyWithin",(function(r,e){if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(qe.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new ke(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Se&&Y(t,Se,(function(){return e.entries()})),t})),Y(qe.prototype,"get",(function(r){var e;if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!cr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new ke((e=this._buffer)[r*=2],e[r+1])})),Be(qe.prototype,"length",(function(){return this._length})),Y(qe.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Xe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!cr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ve(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ie(r),void(n[t+1]=Ce(r))}if(Xe(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new dr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!qr(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ve(r[f])){o=!0;break}if(o){if(!Le(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ge,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new dr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ie(u),n[t+1]=Ce(u),t+=2}}));var tt=2*mr.BYTES_PER_ELEMENT,nt=Re();function it(r){return r instanceof ft||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ot(r){return r===ft||"Complex64Array"===r.name}function at(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===tt/2}function ut(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===tt}function ft(){var r,e,t,n;if(e=arguments.length,!(this instanceof ft))return 0===e?new ft:1===e?new ft(arguments[0]):2===e?new ft(arguments[0],arguments[1]):new ft(arguments[0],arguments[1],arguments[2]);if(0===e)t=new mr(0);else if(1===e)if(cr(arguments[0]))t=new mr(2*arguments[0]);else if(qr(arguments[0]))if((n=(t=arguments[0]).length)&&Qr(t)&&Ve(t[0])){if(null===(t=et(new mr(2*n),t))){if(!Le(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(arguments[0])}}else{if(at(t))t=Fe(t,0);else if(ut(t))t=Me(t,0);else if(!Le(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(t)}else if(Kr(arguments[0])){if(!or((t=arguments[0]).byteLength/tt))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",tt,t.byteLength));t=new mr(t)}else{if(!re(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===nt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ae(t[Se]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ae((t=t[Se]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Qe(t))instanceof Error)throw t;t=new mr(t)}else{if(!Kr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!cr(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!or(r/tt))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",tt,r));if(2===e){if(!or((n=t.byteLength-r)/tt))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",tt,n));t=new mr(t,r)}else{if(!cr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*tt>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*tt));t=new mr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ft,"BYTES_PER_ELEMENT",tt),Y(ft,"name","Complex128Array"),Y(ft,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ae(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(it(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ve(c=n.call(e,r.get(s),s)))o[y]=De(c),o[y+1]=Ke(c);else{if(!(Hr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(qr(r)){if(n){for(f=r.length,u=r.get&&r.set?Ne("default"):Pe("default"),s=0;s<f;s++)if(!Ve(u(r,s))){l=!0;break}if(l){if(!Le(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ve(c=n.call(e,u(r,s),s)))o[y]=De(c),o[y+1]=Ke(c);else{if(!(Hr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(re(r)&&nt&&Ae(r[Se])){if(!Ae((o=r[Se]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?rt(o,n,e):Qe(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(ft,"of",(function(){var r,e;if(!Ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ot(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Be(ft.prototype,"buffer",(function(){return this._buffer.buffer})),Be(ft.prototype,"byteLength",(function(){return this._buffer.byteLength})),Be(ft.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ft.prototype,"BYTES_PER_ELEMENT",ft.BYTES_PER_ELEMENT),Y(ft.prototype,"copyWithin",(function(r,e){if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(ft.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Te(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Se&&Y(t,Se,(function(){return e.entries()})),t})),Y(ft.prototype,"get",(function(r){var e;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!cr(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Te((e=this._buffer)[r*=2],e[r+1])})),Be(ft.prototype,"length",(function(){return this._length})),Y(ft.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!it(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!cr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ve(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=De(r),void(n[t+1]=Ke(r))}if(it(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*tt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!qr(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ve(r[f])){o=!0;break}if(o){if(!Le(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*tt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=De(u),n[t+1]=Ke(u),t+=2}}));var lt={float64:mr,float32:dr,generic:Array,int16:_r,int32:Vr,int8:Br,uint16:Mr,uint32:Nr,uint8:Gr,uint8c:zr,complex64:qe,complex128:ft};function ct(r){return lt[r]||null}function st(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}var yt="function";var pt={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function ht(r){var e=pt[r];return"function"==typeof e?e:pt.default}var gt={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function mt(r){var e=gt[r];return"function"==typeof e?e:gt.default}var wt={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},bt=[mr,dr,Vr,Nr,_r,Mr,Br,Gr,zr,qe,ft],vt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dt=vt.length;function Et(r){var e,t=function(r){var e;if(Qr(r))return"generic";if(ve(r))return null;for(e=0;e<dt;e++)if(r instanceof bt[e])return vt[e];return wt[de(r)]||null}(r);return typeof(e=r).get===yt&&typeof e.set===yt?{accessorProtocol:!0,accessors:[Ne(t),mt(t)]}:{accessorProtocol:!1,accessors:[Pe(t),ht(t)]}}function At(r){var e=Et(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function Tt(r,e,t,n,i){var o,a,u,f;for(o=t.data,a=t.accessors[1],u=i,f=0;f<r;f++)a(o,u,e),u+=n;return t}function _t(r,e,t,n){var i,o,a,u;if(r<=0)return t;if((u=At(t)).accessorProtocol)return Tt(r,e,u,n,i=n<0?(1-r)*n:0),u.data;if(1===n){if((a=r%8)>0)for(o=0;o<a;o++)t[o]=e;if(r<8)return t;for(o=a;o<r;o+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e;return t}for(i=n<0?(1-r)*n:0,o=0;o<r;o++)t[i]=e,i+=n;return t}function xt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return Y(_t,"ndarray",(function(r,e,t,n,i){var o,a,u,f;if(r<=0)return t;if((u=At(t)).accessorProtocol)return Tt(r,e,u,n,i),u.data;if(o=i,1===n){if((a=r%8)>0)for(f=0;f<a;f++)t[o]=e,o+=n;if(r<8)return t;for(f=a;f<r;f+=8)t[o]=e,t[o+1]=e,t[o+2]=e,t[o+3]=e,t[o+4]=e,t[o+5]=e,t[o+6]=e,t[o+7]=e,o+=8;return t}for(f=0;f<r;f++)t[o]=e,o+=n;return t})),function(r,e){var t,n,i;if(!cr(r))throw new TypeError(xt("00t2d,MG",r));if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return st(e,r);if(null===(n=ct(t)))throw new TypeError(xt("00t2e,MH",t));return _t(r,e,i=new n(r),1),i}}));
//# sourceMappingURL=index.js.map
