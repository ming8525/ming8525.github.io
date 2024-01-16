/*! For license information please see 8276.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8276],{2936:(e,t,a)=>{function n(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}a.d(t,{g:()=>n})},8276:(e,t,a)=>{a.r(t),a.d(t,{calcite_handle:()=>r});var n=a(1903),i=a(8),s=a(4495),l=a(9442),o=a(5081),c=a(1129);a(4016);const r=class{constructor(e){(0,n.r)(this,e),this.calciteHandleNudge=(0,n.c)(this,"calciteHandleNudge",6),this.calciteInternalHandleChange=(0,n.c)(this,"calciteInternalHandleChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.activated=!this.activated,e.preventDefault();break;case"ArrowUp":if(!this.activated)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.activated)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"})}},this.handleBlur=()=>{this.disabled||(this.activated=!1)},this.activated=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalHandleChange.emit({message:e})}onMessagesChange(){}connectedCallback(){(0,c.c)(this),(0,o.c)(this),(0,l.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,o.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,c.u)(this)}disconnectedCallback(){(0,c.d)(this),(0,o.d)(this),(0,l.d)(this)}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),this.handleButton?.focus()}getAriaText(e){const{setPosition:t,setSize:a,label:n,messages:i,activated:s}=this;return i&&n&&"number"==typeof a&&"number"==typeof t?("label"===e?s?i.dragHandleChange:i.dragHandleIdle:s?i.dragHandleActive:i.dragHandleCommit).replace("{position}",t.toString()).replace("{itemLabel}",n).replace("{total}",a.toString()):null}render(){return(0,n.h)("span",{"aria-disabled":this.disabled?(0,i.t)(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),"aria-pressed":this.disabled?null:(0,i.t)(this.activated),class:{handle:!0,"handle--activated":!this.disabled&&this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabIndex:this.disabled?null:0,title:this.messages?.dragHandle,ref:e=>{this.handleButton=e}},(0,n.h)("calcite-icon",{icon:"drag",scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],activated:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};r.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:not([disabled])) .handle--activated{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"},1129:(e,t,a)=>{a.d(t,{c:()=>b,d:()=>v,u:()=>h});var n=a(2936);const i=/firefox/i.test((0,n.g)()),s=i?new WeakMap:null;function l(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function o(e){const t=e.target;if(i&&!s.get(t))return;const{disabled:a}=t;a&&e.preventDefault()}const c=["mousedown","mouseup","click"];function r(e){if(i&&!s.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);f(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=l,(t=i?g(e):e.el)&&(t.addEventListener("pointerdown",o,d),c.forEach((e=>t.addEventListener(e,r,d))))}function g(e){return s.get(e.el)}function f(e){var t;delete e.el.click,(t=i?g(e):e.el)&&(t.removeEventListener("pointerdown",o,d),c.forEach((e=>t.removeEventListener(e,r,d))))}function b(e){if(!e.disabled||!i)return;const t=e.el.parentElement||e.el;s.set(e.el,t),u(e)}function v(e){i&&(s.delete(e.el),f(e))}},4495:(e,t,a)=>{a.d(t,{a:()=>o,b:()=>c,c:()=>r,s:()=>l});var n=a(1903);const i=new WeakMap,s=new WeakMap;function l(e){s.set(e,new Promise((t=>i.set(e,t))))}function o(e){i.get(e)()}function c(e){return s.get(e)}async function r(e){return await c(e),(0,n.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},5081:(e,t,a)=>{a.d(t,{c:()=>h,d:()=>u,s:()=>c,u:()=>d});var n=a(1903),i=a(9442);const s={};function l(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await r(e,e.effectiveLocale),o(e)}async function r(e,t){const{el:a}=e,o=a.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const a=`${t}_${e}`;return s[a]||(s[a]=fetch((0,n.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),s[a]}((0,i.g)(t,"t9n"),o)}async function d(e,t){e.defaultMessages=await r(e,t),o(e)}function h(e){e.onMessagesChange=g}function u(e){e.onMessagesChange=void 0}function g(){o(this)}}}]);