// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).full=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return"number"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return s&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var w=h()?function(r){var e,t,n;if(null==r)return m.call(r);t=r[b],e=g(r,b);try{r[b]=void 0}catch(e){return m.call(r)}return n=m.call(r),e?r[b]=t:delete r[b],n}:function(r){return m.call(r)},v=Number,d=v.prototype.toString;var E=h();function _(r){return"object"==typeof r&&(r instanceof v||(E?function(r){try{return d.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function T(r){return y(r)||_(r)}c(T,"isPrimitive",y),c(T,"isObject",_);var A=Number.POSITIVE_INFINITY,j=v.NEGATIVE_INFINITY,x=Math.floor;function B(r){return x(r)===r}function L(r){return r<A&&r>j&&B(r)}function R(r){return y(r)&&L(r)}function S(r){return _(r)&&L(r.valueOf())}function V(r){return R(r)||S(r)}function k(r){return R(r)&&r>=0}function I(r){return S(r)&&r.valueOf()>=0}function O(r){return k(r)||I(r)}c(V,"isPrimitive",R),c(V,"isObject",S),c(O,"isPrimitive",k),c(O,"isObject",I);var M="function"==typeof Float64Array;var C="function"==typeof Float64Array?Float64Array:null;var N="function"==typeof Float64Array?Float64Array:void 0;var U=function(){var r,e,t;if("function"!=typeof C)return!1;try{e=new C([1,3.14,-3.14,NaN]),t=e,r=(M&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")},P="function"==typeof Float32Array;var F="function"==typeof Float32Array?Float32Array:null;var Y="function"==typeof Float32Array?Float32Array:void 0;var W=function(){var r,e,t;if("function"!=typeof F)return!1;try{e=new F([1,3.14,-3.14,5e40]),t=e,r=(P&&t instanceof Float32Array||"[object Float32Array]"===w(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===A}catch(e){r=!1}return r}()?Y:function(){throw new Error("not implemented")},G="function"==typeof Int16Array;var J="function"==typeof Int16Array?Int16Array:null;var q="function"==typeof Int16Array?Int16Array:void 0;var X=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J([1,3.14,-3.14,32768]),t=e,r=(G&&t instanceof Int16Array||"[object Int16Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")},z="function"==typeof Int32Array;var D="function"==typeof Int32Array?Int32Array:null;var H="function"==typeof Int32Array?Int32Array:void 0;var K=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D([1,3.14,-3.14,2147483648]),t=e,r=(z&&t instanceof Int32Array||"[object Int32Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")},Q="function"==typeof Int8Array;var Z="function"==typeof Int8Array?Int8Array:null;var $="function"==typeof Int8Array?Int8Array:void 0;var rr=function(){var r,e,t;if("function"!=typeof Z)return!1;try{e=new Z([1,3.14,-3.14,128]),t=e,r=(Q&&t instanceof Int8Array||"[object Int8Array]"===w(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?$:function(){throw new Error("not implemented")},er="function"==typeof Uint16Array;var tr="function"==typeof Uint16Array?Uint16Array:null;var nr="function"==typeof Uint16Array?Uint16Array:void 0;var or=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(er&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")},ir="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var ur="function"==typeof Uint32Array?Uint32Array:void 0;var fr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")},lr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var yr="function"==typeof Uint8Array?Uint8Array:void 0;var sr=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),t=e,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")},hr="function"==typeof Uint8ClampedArray;var mr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var pr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var gr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr([-1,0,1,3.14,4.99,255,256]),t=e,r=(hr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===w(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};function br(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&B(r.length)&&r.length>=0&&r.length<=4294967295}function wr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&B(r.length)&&r.length>=0&&r.length<=9007199254740991}var vr="function"==typeof ArrayBuffer;function dr(r){return vr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===w(r)}var Er=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};function _r(r){return"object"==typeof r&&null!==r&&!Er(r)}var Tr=/./;function Ar(r){return"boolean"==typeof r}var jr=Boolean.prototype.toString;var xr=h();function Br(r){return"object"==typeof r&&(r instanceof Boolean||(xr?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function Lr(r){return Ar(r)||Br(r)}function Rr(){return new Function("return this;")()}c(Lr,"isPrimitive",Ar),c(Lr,"isObject",Br);var Sr="object"==typeof self?self:null,Vr="object"==typeof window?window:null,kr="object"==typeof global?global:null;var Ir=function(r){if(arguments.length){if(!Ar(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Rr()}if(Sr)return Sr;if(Vr)return Vr;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Or=Ir.document&&Ir.document.childNodes,Mr=Int8Array;function Cr(){return/^\s*function\s*([^(]*)/i}var Nr=/^\s*function\s*([^(]*)/i;function Ur(r){return null!==r&&"object"==typeof r}function Pr(r){var e,t,n,o;if(("Object"===(t=w(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Nr.exec(n.toString()))return e[1]}return Ur(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(Cr,"REGEXP",Nr),c(Ur,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ur));var Fr="function"==typeof Tr||"object"==typeof Mr||"function"==typeof Or?function(r){return Pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Pr(r).toLowerCase():e};function Yr(r){return"function"===Fr(r)}function Wr(r,e){if(!(this instanceof Wr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!y(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(Wr,"BYTES_PER_ELEMENT",8),c(Wr.prototype,"BYTES_PER_ELEMENT",8),c(Wr.prototype,"byteLength",16),c(Wr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Wr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Gr="function"==typeof Math.fround?Math.fround:null,Jr=new W(1);var qr="function"==typeof Gr?Gr:function(r){return Jr[0]=r,Jr[0]};function Xr(r,e){if(!(this instanceof Xr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!y(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!y(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:qr(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:qr(e)}),this}function zr(r){return r instanceof Wr||r instanceof Xr||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Dr(r){return B(r/2)}function Hr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Xr,"BYTES_PER_ELEMENT",4),c(Xr.prototype,"BYTES_PER_ELEMENT",4),c(Xr.prototype,"byteLength",8),c(Xr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Xr.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Kr=Hr()?Symbol.iterator:null;function Qr(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function Zr(r){return r.re}function $r(r){return r.im}function re(r,e){return new W(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ee(r,e){return new U(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function te(r,e){return r[e]}function ne(r,e){return r.get(e)}function oe(r,e,t){r[e]=t}function ie(r,e,t){r.set(t,e)}function ae(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?ne:te,setter:e?ie:oe}}function ue(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(br(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!zr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Zr(n),$r(n))}return e}function fe(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,br(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!zr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Zr(i),$r(i))}return n}function le(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!zr(n=e[o]))return null;r[i]=Zr(n),r[i+1]=$r(n),i+=2}return r}var ce=2*W.BYTES_PER_ELEMENT,ye=Hr();function se(r){return r instanceof ge||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function he(r){return r===ge||"Complex128Array"===r.name}function me(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ce}function pe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*ce}function ge(){var r,e,t,n;if(e=arguments.length,!(this instanceof ge))return 0===e?new ge:1===e?new ge(arguments[0]):2===e?new ge(arguments[0],arguments[1]):new ge(arguments[0],arguments[1],arguments[2]);if(0===e)t=new W(0);else if(1===e)if(k(arguments[0]))t=new W(2*arguments[0]);else if(wr(arguments[0]))if((n=(t=arguments[0]).length)&&Er(t)&&zr(t[0])){if(null===(t=le(new W(2*n),t))){if(!Dr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new W(arguments[0])}}else{if(me(t))t=re(t,0);else if(pe(t))t=ee(t,0);else if(!Dr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new W(t)}else if(dr(arguments[0])){if(!B((t=arguments[0]).byteLength/ce))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+ce+". Byte length: `"+t.byteLength+"`.");t=new W(t)}else{if(!_r(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===ye)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Yr(t[Kr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Yr((t=t[Kr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ue(t))instanceof Error)throw t;t=new W(t)}else{if(!dr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!k(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!B(r/ce))throw new RangeError("invalid argument. Byte offset must be a multiple of "+ce+". Value: `"+r+"`.");if(2===e){if(!B((n=t.byteLength-r)/ce))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+ce+". View byte length: `"+n+"`.");t=new W(t,r)}else{if(!k(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*ce>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*ce+"`.");t=new W(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function be(r){return r.re}function we(r){return r.im}function ve(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(br(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!zr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(be(n),we(n))}return e}function de(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,br(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!zr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(be(i),we(i))}return n}function Ee(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!zr(n=e[o]))return null;r[i]=be(n),r[i+1]=we(n),i+=2}return r}c(ge,"BYTES_PER_ELEMENT",ce),c(ge,"name","Complex64Array"),c(ge,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!he(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Yr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(se(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(zr(l=n.call(e,r.get(c),c)))i[y]=Zr(l),i[y+1]=$r(l);else{if(!(br(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(wr(r)){if(n){for(u=r.length,a=ae(r),c=0;c<u;c++)if(!zr(a.getter(r,c))){f=!0;break}if(f){if(!Dr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(zr(l=n.call(e,a.getter(r,c),c)))i[y]=Zr(l),i[y+1]=$r(l);else{if(!(br(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(_r(r)&&ye&&Yr(r[Kr])){if(!Yr((i=r[Kr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?fe(i,n,e):ue(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(ge,"of",(function(){var r,e;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!he(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Qr(ge.prototype,"buffer",(function(){return this._buffer.buffer})),Qr(ge.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qr(ge.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(ge.prototype,"BYTES_PER_ELEMENT",ge.BYTES_PER_ELEMENT),c(ge.prototype,"copyWithin",(function(r,e){if(!se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(ge.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Xr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Kr&&c(t,Kr,(function(){return e.entries()})),t})),c(ge.prototype,"get",(function(r){var e;if(!se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!k(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Xr((e=this._buffer)[r*=2],e[r+1])})),Qr(ge.prototype,"length",(function(){return this._length})),c(ge.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!se(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!k(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(zr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Zr(r),void(n[t+1]=$r(r))}if(se(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ce,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new W(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!wr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!zr(r[f])){i=!0;break}if(i){if(!Dr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ce,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new W(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Zr(u),n[t+1]=$r(u),t+=2}}));var _e=2*U.BYTES_PER_ELEMENT,Te=Hr();function Ae(r){return r instanceof Le||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function je(r){return r===Le||"Complex64Array"===r.name}function xe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===_e/2}function Be(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===_e}function Le(){var r,e,t,n;if(e=arguments.length,!(this instanceof Le))return 0===e?new Le:1===e?new Le(arguments[0]):2===e?new Le(arguments[0],arguments[1]):new Le(arguments[0],arguments[1],arguments[2]);if(0===e)t=new U(0);else if(1===e)if(k(arguments[0]))t=new U(2*arguments[0]);else if(wr(arguments[0]))if((n=(t=arguments[0]).length)&&Er(t)&&zr(t[0])){if(null===(t=Ee(new U(2*n),t))){if(!Dr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(arguments[0])}}else{if(xe(t))t=re(t,0);else if(Be(t))t=ee(t,0);else if(!Dr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(t)}else if(dr(arguments[0])){if(!B((t=arguments[0]).byteLength/_e))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+_e+". Byte length: `"+t.byteLength+"`.");t=new U(t)}else{if(!_r(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Te)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Yr(t[Kr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Yr((t=t[Kr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ve(t))instanceof Error)throw t;t=new U(t)}else{if(!dr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!k(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!B(r/_e))throw new RangeError("invalid argument. Byte offset must be a multiple of "+_e+". Value: `"+r+"`.");if(2===e){if(!B((n=t.byteLength-r)/_e))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+_e+". View byte length: `"+n+"`.");t=new U(t,r)}else{if(!k(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*_e>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*_e+"`.");t=new U(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Le,"BYTES_PER_ELEMENT",_e),c(Le,"name","Complex128Array"),c(Le,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Yr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Ae(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(zr(l=n.call(e,r.get(c),c)))i[y]=be(l),i[y+1]=we(l);else{if(!(br(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(wr(r)){if(n){for(u=r.length,a=ae(r),c=0;c<u;c++)if(!zr(a.getter(r,c))){f=!0;break}if(f){if(!Dr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(zr(l=n.call(e,a.getter(r,c),c)))i[y]=be(l),i[y+1]=we(l);else{if(!(br(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(_r(r)&&Te&&Yr(r[Kr])){if(!Yr((i=r[Kr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?de(i,n,e):ve(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Le,"of",(function(){var r,e;if(!Yr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Qr(Le.prototype,"buffer",(function(){return this._buffer.buffer})),Qr(Le.prototype,"byteLength",(function(){return this._buffer.byteLength})),Qr(Le.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Le.prototype,"BYTES_PER_ELEMENT",Le.BYTES_PER_ELEMENT),c(Le.prototype,"copyWithin",(function(r,e){if(!Ae(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Le.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Ae(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Wr(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Kr&&c(t,Kr,(function(){return e.entries()})),t})),c(Le.prototype,"get",(function(r){var e;if(!Ae(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!k(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Wr((e=this._buffer)[r*=2],e[r+1])})),Qr(Le.prototype,"length",(function(){return this._length})),c(Le.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Ae(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!k(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(zr(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=be(r),void(n[t+1]=we(r))}if(Ae(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*_e,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new U(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!wr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!zr(r[f])){i=!0;break}if(i){if(!Dr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*_e,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new U(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=be(u),n[t+1]=we(u),t+=2}}));var Re={float64:U,float32:W,generic:Array,int16:X,int32:K,int8:rr,uint16:or,uint32:fr,uint8:sr,uint8c:gr,complex64:ge,complex128:Le};function Se(r){return Re[r]||null}function Ve(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}function ke(r,e,t,n,o){var i,a,u,f;for(i=t.data,a=t.setter,u=o,f=0;f<r;f++)a(i,u,e),u+=n;return t}function Ie(r,e,t,n){var o,i,a,u;if(r<=0)return t;if((u=ae(t)).accessors)return ke(r,e,u,n,o=n<0?(1-r)*n:0),u.data;if(1===n){if((a=r%8)>0)for(i=0;i<a;i++)t[i]=e;if(r<8)return t;for(i=a;i<r;i+=8)t[i]=e,t[i+1]=e,t[i+2]=e,t[i+3]=e,t[i+4]=e,t[i+5]=e,t[i+6]=e,t[i+7]=e;return t}for(o=n<0?(1-r)*n:0,i=0;i<r;i++)t[o]=e,o+=n;return t}function Oe(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return c(Ie,"ndarray",(function(r,e,t,n,o){var i,a,u,f;if(r<=0)return t;if((u=ae(t)).accessors)return ke(r,e,u,n,o),u.data;if(i=o,1===n){if((a=r%8)>0)for(f=0;f<a;f++)t[i]=e,i+=n;if(r<8)return t;for(f=a;f<r;f+=8)t[i]=e,t[i+1]=e,t[i+2]=e,t[i+3]=e,t[i+4]=e,t[i+5]=e,t[i+6]=e,t[i+7]=e,i+=8;return t}for(f=0;f<r;f++)t[i]=e,i+=n;return t})),function(r,e){var t,n,o;if(!k(r))throw new TypeError(Oe("00R2p",r));if("generic"===(t=arguments.length>2?arguments[2]:"float64"))return Ve(e,r);if(null===(n=Se(t)))throw new TypeError(Oe("00R2q",t));return Ie(r,e,o=new n(r),1),o}}));
//# sourceMappingURL=index.js.map
