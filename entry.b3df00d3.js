parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PsEZ":[function(require,module,exports) {
"use strict";function e(e){return e instanceof URL||"string"==typeof e||e instanceof Request}function n(e){return e instanceof WebAssembly.Instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=o;const t="function"==typeof WebAssembly.instantiateStreaming,s=["`WebAssembly.instantiateStreaming` failed. Assuming this is because your","server does not serve wasm with `application/wasm` MIME type. Falling back","to `WebAssembly.instantiate` which is slower. Original error:\n"].join(" ");function i(e){return e.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,imports))}function a(e,n){return t?WebAssembly.instantiateStreaming(e,n).catch(n=>(console.warn(s,n),i(e))):i(e)}async function r(e,t){const s=await WebAssembly.instantiate(e,t);return n(s)?{instance:s,module:e}:s}async function o(n,t){const{instance:s,module:i}=await(e(n)?a(fetch(n),t):r(n,t));return o.__wbindgen_wasm_module=i,s.exports}
},{}],"tpZS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.run=t,exports.default=A,exports.__wbindgen_throw=exports.__widl_f_log_1_=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_object_drop_ref=exports.__wbindgen_string_new=void 0;var e=require("./wasm-loader.js");let n;function t(){return n.run()}let r=new TextDecoder("utf-8"),_=null;function o(){return null!==_&&_.buffer===n.memory.buffer||(_=new Uint8Array(n.memory.buffer)),_}function c(e,n){return r.decode(o().subarray(e,e+n))}const l=new Array(32);l.fill(void 0),l.push(void 0,null,!0,!1);let i=l.length;function s(e){i===l.length&&l.push(l.length+1);const n=i;return i=l[n],l[n]=e,n}function u(e){return l[e]}function b(e){e<36||(l[e]=i,i=e)}function f(e){const n=u(e);return b(e),n}let d,w=0,g=new TextEncoder("utf-8");d="function"==typeof g.encodeInto?function(e){let t=e.length,r=n.__wbindgen_malloc(t),_=0;{const n=o();for(;_<e.length;_++){const t=e.charCodeAt(_);if(t>127)break;n[r+_]=t}}if(_!==e.length){e=e.slice(_),r=n.__wbindgen_realloc(r,t,t=_+3*e.length);const c=o().subarray(r+_,r+t);_+=g.encodeInto(e,c).written}return w=_,r}:function(e){let t=e.length,r=n.__wbindgen_malloc(t),_=0;{const n=o();for(;_<e.length;_++){const t=e.charCodeAt(_);if(t>127)break;n[r+_]=t}}if(_!==e.length){const c=g.encode(e.slice(_));r=n.__wbindgen_realloc(r,t,t=_+c.length),o().set(c,r+_),_+=c.length}return w=_,r};let a=null;function p(){return null!==a&&a.buffer===n.memory.buffer||(a=new Uint32Array(n.memory.buffer)),a}const h=function(e,n){return s(c(e,n))};exports.__wbindgen_string_new=h;const x=function(e){f(e)};exports.__wbindgen_object_drop_ref=x;const m=function(){return s(new Error)};exports.__wbg_new_59cb74e423758ede=m;const y=function(e,n){const t=d(u(n).stack),r=w,_=p();_[e/4]=t,_[e/4+1]=r};exports.__wbg_stack_558ba5917b466edd=y;const j=function(e,t){let r=c(e,t);r=r.slice(),n.__wbindgen_free(e,1*t),console.error(r)};exports.__wbg_error_4bb6c2a97407129a=j;const k=function(e){console.log(u(e))};exports.__widl_f_log_1_=k;const v=function(e,n){let t=c(e,n);throw new Error(t)};function A(r){return(0,e.load)(r,{"./ferric.js":{__wbindgen_string_new:h,__wbindgen_object_drop_ref:x,__wbg_new_59cb74e423758ede:m,__wbg_stack_558ba5917b466edd:y,__wbg_error_4bb6c2a97407129a:j,__widl_f_log_1_:k,__wbindgen_throw:v}}).then(e=>(n=e,{run:t}))}exports.__wbindgen_throw=v;
},{"./wasm-loader.js":"PsEZ"}],"ga2y":[function(require,module,exports) {
module.exports="ferric_bg.bb19984b.wasm";
},{}],"jBO1":[function(require,module,exports) {
"use strict";var e=r(require("../pkg/ferric.js"));function r(e){return e&&e.__esModule?e:{default:e}}module.exports=(0,e.default)(require("../pkg/ferric_bg.wasm"));
},{"../pkg/wasm-loader.js":"PsEZ","../pkg/ferric.js":"tpZS","../pkg/ferric_bg.wasm":"ga2y"}],"2iMt":[function(require,module,exports) {

},{}],"QAnz":[function(require,module,exports) {
"use strict";var r=require("./lib.rs");require("./style.css"),(0,r.run)();
},{"./lib.rs":"jBO1","./style.css":"2iMt"}],0:[function(require,module,exports) {
function cacheReplace(id, mod) {
  // replace the entry in the cache with the loaded wasm module
  module.bundle.cache[id] = null;
  module.bundle.register(id, mod);
}

Promise.all([
  require("./lib.rs").then(wasm => cacheReplace("jBO1", wasm))
]).then(() => {
  require("./entry.ts");
});

},{"./lib.rs":"jBO1","./entry.ts":"QAnz"}]},{},[0], null)
//# sourceMappingURL=entry.b3df00d3.js.map