/*! For license information please see 9352.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9352],{2936:(e,t,n)=>{function i(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>i})},9352:(e,t,n)=>{n.r(t),n.d(t,{calcite_option:()=>u,calcite_option_group:()=>h,calcite_select:()=>m});var i=n(1903),l=n(3054),o=n(8),a=n(9603),s=n(1129),r=n(5807),c=n(4495),d=n(3288);n(4016);const u=class{constructor(e){(0,i.r)(this,e),this.calciteInternalOptionChange=(0,i.c)(this,"calciteInternalOptionChange",6),this.mutationObserver=(0,l.c)("mutation",(()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()})),this.disabled=!1,this.label=void 0,this.selected=void 0,this.value=void 0}handlePropChange(e,t,n){"label"!==n&&"value"!==n||this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:t,internallySetValue:n,label:i,value:l}=this;i&&i!==t||(this.label=e,this.internallySetLabel=e),null!=l&&l!==n||(this.value=e,this.internallySetValue=e)}connectedCallback(){this.ensureTextContentDependentProps(),this.mutationObserver?.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){return(0,i.h)("slot",null,this.label)}get el(){return(0,i.g)(this)}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}};u.style=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";const h=class{constructor(e){(0,i.r)(this,e),this.calciteInternalOptionGroupChange=(0,i.c)(this,"calciteInternalOptionGroupChange",6),this.disabled=!1,this.label=void 0}handlePropChange(){this.calciteInternalOptionGroupChange.emit()}render(){return(0,i.h)(i.F,null,(0,i.h)("div",null,this.label),(0,i.h)("slot",null))}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"]}}};h.style=":host{display:block}:host([hidden]){display:none}[hidden]{display:none}";function p(e){return"CALCITE-OPTION"===e.tagName}const m=class{constructor(e){(0,i.r)(this,e),this.calciteSelectChange=(0,i.c)(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=(0,l.c)("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e),requestAnimationFrame((()=>this.emitChangeEvent()))},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>"CALCITE-OPTION"===e.tagName||"CALCITE-OPTION-GROUP"===e.tagName));this.clearInternalSelect(),e.forEach((e=>this.selectEl?.append(this.toNativeElement(e))))},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.status="idle",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.el.querySelectorAll("calcite-option").forEach((t=>t.selected=t.value===e))}selectedOptionHandler(e){this.value=e?.value}connectedCallback(){const{el:e}=this;this.mutationObserver?.observe(e,{subtree:!0,childList:!0}),(0,s.c)(this),(0,r.c)(this),(0,a.c)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),(0,s.d)(this),(0,r.d)(this),(0,a.d)(this)}componentWillLoad(){(0,c.s)(this)}componentDidLoad(){(0,c.a)(this),(0,a.a)(this,this.selectedOption?.value??"")}componentDidRender(){(0,s.u)(this)}async setFocus(){await(0,c.c)(this),(0,o.d)(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,n=this.componentToNativeEl.get(t);n&&(this.updateNativeElement(t,n),p(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,p(e)){const n=t;n.selected=e.selected,n.value=e.value,n.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach(((n,i)=>{p(i)&&n===e&&(i.selected=!0,t=i,this.deselectAllExcept(i))})),t&&(this.selectedOption=t)}toNativeElement(e){if(p(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(function(e){return"CALCITE-OPTION-GROUP"===e.tagName}(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach((n=>{const i=this.toNativeElement(n);t.append(i),this.componentToNativeEl.set(e,i)})),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{t!==e&&(t.selected=!1)}))}renderChevron(){return(0,i.h)("div",{class:"icon-container"},(0,i.h)("calcite-icon",{class:"icon",icon:"chevron-down",scale:(0,d.g)(this.scale)}))}render(){return(0,i.h)(i.F,null,(0,i.h)("select",{"aria-label":(0,r.g)(this),class:"select",disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},(0,i.h)("slot",null)),this.renderChevron(),(0,i.h)(a.H,{component:this}))}get el(){return(0,i.g)(this)}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}};m.style=":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:inherit;color:var(--calcite-color-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-color-brand);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.select:hover{background-color:var(--calcite-color-foreground-2)}select:disabled{border-color:var(--calcite-color-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:transparent;color:var(--calcite-color-text-2);inset-inline-end:0px;border-inline-width:0px 1px}:host([status=invalid]) select,:host([status=invalid]) .icon-container{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) select:focus,:host([status=invalid]) .icon-container:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"},3288:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function l(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>l,g:()=>i})},9603:(e,t,n)=>{n.d(t,{H:()=>E,a:()=>f,c:()=>u,d:()=>m,f:()=>h,r:()=>d,s:()=>c});var i=n(8),l=n(1903);const o="hidden-form-input";function a(e){return"checked"in e}const s=new WeakMap,r=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function d(e){e.formEl?.reset()}function u(e){const{el:t,value:n}=e,l=h(e);if(!l||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let l=!1;return e.addEventListener(n,(e=>{l=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),l}(l,t))return;e.formEl=l,e.defaultValue=n,a(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||p).bind(e);l.addEventListener("reset",o),s.set(e.el,o),r.add(t)}function h(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function p(){a(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:n}=e;if(!n)return;const i=s.get(t);n.removeEventListener("reset",i),s.delete(t),e.formEl=null,r.delete(t)}function f(e,t){e.defaultValue=t}const b=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=e=>e.removeEventListener("change",b);function g(e,t,n){const{defaultValue:i,disabled:l,form:o,name:s,required:r}=e;t.defaultValue=i,t.disabled=l,t.name=s,t.required=r,t.tabIndex=-1,o?t.setAttribute("form",o):t.removeAttribute("form"),a(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const E=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:l}=e,{ownerDocument:a}=t,s=t.querySelectorAll(`input[slot="${o}"]`);if(!n||!i)return void s.forEach((e=>{v(e),e.remove()}));const r=Array.isArray(l)?l:[l],c=[],d=new Set;let u;s.forEach((t=>{const n=r.find((e=>e==t.value));null!=n?(d.add(n),g(e,t,n)):c.push(t)})),r.forEach((t=>{if(d.has(t))return;let n=c.pop();n||(n=a.createElement("input"),n.slot=o),u||(u=a.createDocumentFragment()),u.append(n),n.addEventListener("change",b),g(e,n,t)})),u&&t.append(u),c.forEach((e=>{v(e),e.remove()}))}(e),(0,l.h)("slot",{name:o}))},1129:(e,t,n)=>{n.d(t,{c:()=>f,d:()=>b,u:()=>u});var i=n(2936);const l=/firefox/i.test((0,i.g)()),o=l?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function s(e){const t=e.target;if(l&&!o.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const r=["mousedown","mouseup","click"];function c(e){if(l&&!o.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function u(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void h(e);m(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function h(e){var t;e.el.click=a,(t=l?p(e):e.el)&&(t.addEventListener("pointerdown",s,d),r.forEach((e=>t.addEventListener(e,c,d))))}function p(e){return o.get(e.el)}function m(e){var t;delete e.el.click,(t=l?p(e):e.el)&&(t.removeEventListener("pointerdown",s,d),r.forEach((e=>t.removeEventListener(e,c,d))))}function f(e){if(!e.disabled||!l)return;const t=e.el.parentElement||e.el;o.set(e.el,t),h(e)}function b(e){l&&(o.delete(e.el),m(e))}},5807:(e,t,n)=>{n.d(t,{a:()=>k,b:()=>s,c:()=>f,d:()=>b,g:()=>g,l:()=>a});var i=n(8),l=n(3288);const o="calciteInternalLabelClick",a="calciteInternalLabelConnected",s="calciteInternalLabelDisconnected",r="calcite-label",c=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakMap,p=new Set,m=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${r}[for="${t}"]`});if(n)return n;const l=(0,i.c)(e,r);return!l||function(e,t){let n;const i="custom-element-ancestor-check",l=i=>{i.stopImmediatePropagation();const l=i.composedPath();n=l.slice(l.indexOf(t),l.indexOf(e))};e.addEventListener(i,l,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,l);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(l,e)?null:l};function f(e){if(!e)return;const t=m(e.el);if(d.has(t)&&t===e.labelEl||!t&&p.has(e))return;const n=C.bind(e);if(t){e.labelEl=t;const i=c.get(t)||[];i.push(e),c.set(t,i.sort(v)),d.has(e.labelEl)||(d.set(e.labelEl,E),e.labelEl.addEventListener(o,E)),p.delete(e),document.removeEventListener(a,u.get(e)),h.set(e,n),document.addEventListener(s,n)}else p.has(e)||(n(),document.removeEventListener(s,h.get(e)))}function b(e){if(!e)return;if(p.delete(e),document.removeEventListener(a,u.get(e)),document.removeEventListener(s,h.get(e)),u.delete(e),h.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(o,d.get(e.labelEl)),d.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(v)),e.labelEl=null}function v(e,t){return(0,i.k)(e.el,t.el)?-1:1}function g(e){return e.label||e.labelEl?.textContent?.trim()||""}function E(e){const t=e.detail.sourceEvent.target,n=c.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const l=n[0];l.disabled||l.onLabelClick(e)}function w(){p.has(this)&&f(this)}function C(){p.add(this);const e=u.get(this)||w.bind(this);u.set(this,e),document.addEventListener(a,e)}async function k(e){if(await(0,l.c)(e),c.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of p)if(e.el===t){f(e);break}}))}},4495:(e,t,n)=>{n.d(t,{a:()=>s,b:()=>r,c:()=>c,s:()=>a});var i=n(1903);const l=new WeakMap,o=new WeakMap;function a(e){o.set(e,new Promise((t=>l.set(e,t))))}function s(e){l.get(e)()}function r(e){return o.get(e)}async function c(e){return await r(e),(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},3054:(e,t,n)=>{function i(e,t,n){const i=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new i(t,n)}n.d(t,{c:()=>i})}}]);