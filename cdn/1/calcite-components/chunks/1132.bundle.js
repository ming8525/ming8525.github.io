/*! For license information please see 1132.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[1132],{1132:(e,t,i)=>{i.r(t),i.d(t,{calcite_filter:()=>d});var n=i(1903),a=i(4695),r=i(1129),o=i(4495),s=i(9442),l=i(5081),c=i(7634);i(8),i(4016);const d=class{constructor(e){(0,n.r)(this,e),this.calciteFilterChange=(0,n.c)(this,"calciteFilterChange",6),this.filterDebounced=(0,c.d)(((e,t=!1,i)=>this.updateFiltered((0,a.f)(this.items,e),t,i)),250),this.inputHandler=e=>{const t=e.target;this.value=t.value,this.filterDebounced(t.value,!0)},this.keyDownHandler=e=>{"Escape"===e.key&&(this.clear(),e.preventDefault()),"Enter"===e.key&&e.preventDefault()},this.clear=()=>{this.value="",this.filterDebounced("",!0),this.setFocus()},this.items=[],this.disabled=!1,this.filteredItems=[],this.placeholder=void 0,this.scale="m",this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}watchItemsHandler(){this.filterDebounced(this.value)}onMessagesChange(){}valueHandler(e){this.filterDebounced(e)}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,o.s)(this),this.updateFiltered((0,a.f)(this.items,this.value)),await(0,l.s)(this)}connectedCallback(){(0,r.c)(this),(0,s.c)(this),(0,l.c)(this)}componentDidRender(){(0,r.u)(this)}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),(0,l.d)(this),this.filterDebounced.cancel()}componentDidLoad(){(0,o.a)(this)}async filter(e=this.value){return new Promise((t=>{this.value=e,this.filterDebounced(e,!1,t)}))}async setFocus(){await(0,o.c)(this),this.el?.focus()}updateFiltered(e,t=!1,i){this.filteredItems=e,t&&this.calciteFilterChange.emit(),i?.()}render(){const{disabled:e,scale:t}=this;return(0,n.h)(n.F,null,(0,n.h)("div",{class:"container"},(0,n.h)("label",null,(0,n.h)("calcite-input",{clearable:!0,disabled:e,icon:"search",label:this.messages.label,messageOverrides:{clear:this.messages.clear},onCalciteInputInput:this.inputHandler,onKeyDown:this.keyDownHandler,placeholder:this.placeholder,scale:t,type:"text",value:this.value,ref:e=>{this.textInput=e}}))))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{items:["watchItemsHandler"],messageOverrides:["onMessagesChange"],value:["valueHandler"],effectiveLocale:["effectiveLocaleChange"]}}};d.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}"},7634:(e,t,i)=>{i.d(t,{S:()=>o,a:()=>m,b:()=>p,c:()=>b,d:()=>L,f:()=>n,i:()=>w,r:()=>r});var n="object"==typeof global&&global&&global.Object===Object&&global,a="object"==typeof self&&self&&self.Object===Object&&self,r=n||a||Function("return this")(),o=r.Symbol,s=Object.prototype,l=s.hasOwnProperty,c=s.toString,d=o?o.toStringTag:void 0,u=Object.prototype.toString,h="[object Null]",f="[object Undefined]",v=o?o.toStringTag:void 0;function p(e){return null==e?void 0===e?f:h:v&&v in Object(e)?function(e){var t=l.call(e,d),i=e[d];try{e[d]=void 0;var n=!0}catch(e){}var a=c.call(e);return n&&(t?e[d]=i:delete e[d]),a}(e):function(e){return u.call(e)}(e)}function b(e){return null!=e&&"object"==typeof e}var g="[object Symbol]";function m(e){return"symbol"==typeof e||b(e)&&p(e)==g}var y=/\s/,x=/^\s+/;function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var k=NaN,D=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,O=/^0o[0-7]+$/i,C=parseInt;function z(e){if("number"==typeof e)return e;if(m(e))return k;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(i)+1).replace(x,""):i;var n=j.test(e);return n||O.test(e)?C(e.slice(2),n?2:8):D.test(e)?k:+e}var F=function(){return r.Date.now()},T="Expected a function",H=Math.max,I=Math.min;function L(e,t,i){var n,a,r,o,s,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError(T);function f(t){var i=n,r=a;return n=a=void 0,c=t,o=e.apply(r,i)}function v(e){var i=e-l;return void 0===l||i>=t||i<0||u&&e-c>=r}function p(){var e=F();if(v(e))return b(e);s=setTimeout(p,function(e){var i=t-(e-l);return u?I(i,r-(e-c)):i}(e))}function b(e){return s=void 0,h&&n?f(e):(n=a=void 0,o)}function g(){var e=F(),i=v(e);if(n=arguments,a=this,l=e,i){if(void 0===s)return function(e){return c=e,s=setTimeout(p,t),d?f(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(p,t),f(l)}return void 0===s&&(s=setTimeout(p,t)),o}return t=z(t)||0,w(i)&&(d=!!i.leading,r=(u="maxWait"in i)?H(z(i.maxWait)||0,t):r,h="trailing"in i?!!i.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},g.flush=function(){return void 0===s?o:b(F())},g}}}]);