/*! For license information please see 501.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[501],{3224:(e,t,n)=>{n.d(t,{H:()=>o,c:()=>i});var a=n(1903);function i(e){return Math.min(Math.max(Math.ceil(e),1),6)}const o=(e,t)=>{const n=e.level?`h${e.level}`:"div";return delete e.level,(0,a.h)(n,{...e},t)}},2936:(e,t,n)=>{function a(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>a})},501:(e,t,n)=>{n.r(t),n.d(t,{calcite_panel:()=>g});var a=n(1903),i=n(8),o=n(1129),s=n(4495),r=n(3054),c=n(6127),l=n(3224),d=n(4303),h=n(9442),u=n(5081);n(4016);const g=class{constructor(e){(0,a.r)(this,e),this.calcitePanelClose=(0,a.c)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,a.c)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,a.c)(this,"calcitePanelScroll",6),this.resizeObserver=(0,r.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,i.b)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,i.b)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,i.b)(e)},this.handleActionBarSlotChange=e=>{const t=(0,i.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,i.b)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,i.b)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,i.b)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,i.b)(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,h.c)(this),(0,u.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,u.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,h.d)(this),(0,u.d)(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){(0,u.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),(0,i.f)(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:n,hasHeaderContent:i}=this,o=e?(0,a.h)(l.H,{class:d.C.heading,level:t},e):null,s=n?(0,a.h)("span",{class:d.C.description},n):null;return i||!o&&!s?null:(0,a.h)("div",{class:d.C.headerContent,key:"header-content"},o,s)}renderActionBar(){return(0,a.h)("div",{class:d.C.actionBarContainer,hidden:!this.hasActionBar},(0,a.h)("slot",{name:d.S.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:d.C.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:d.S.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{[d.C.headerActionsStart]:!0,[d.C.headerActions]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:d.S.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:n,collapsed:o,collapseDirection:s,collapsible:r,hasMenuItems:c}=this,{collapse:l,expand:h,close:u}=t,g=[d.I.expand,d.I.collapse];"up"===s&&g.reverse();const f=r?(0,a.h)("calcite-action",{"aria-expanded":(0,i.t)(!o),"aria-label":l,"data-test":"collapse",icon:o?g[0]:g[1],onClick:this.collapse,text:l,title:o?h:l}):null,p=n?(0,a.h)("calcite-action",{"aria-label":u,"data-test":"close",icon:d.I.close,onClick:this.close,text:u,title:u}):null,b=(0,a.h)("slot",{name:d.S.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),m=e||f||p||c;return(0,a.h)("div",{class:{[d.C.headerActionsEnd]:!0,[d.C.headerActions]:!0},hidden:!m,key:"header-actions-end"},b,this.renderMenu(),f,p)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:n}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,placement:"bottom-end"},(0,a.h)("calcite-action",{icon:d.I.menu,slot:c.S.trigger,text:t.options}),(0,a.h)("slot",{name:d.S.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:n,closable:i,collapsible:o,hasMenuItems:s,hasActionBar:r}=this,c=this.renderHeaderContent(),l=e||!!c||t||n||o||i||s;return this.showHeaderContent=l,(0,a.h)("header",{class:d.C.header,hidden:!(l||r)},(0,a.h)("div",{class:{[d.C.headerContainer]:!0,[d.C.headerContainerBorderEnd]:r},hidden:!l},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,n=e||t;return(0,a.h)("footer",{class:d.C.footer,hidden:!n},(0,a.h)("slot",{key:"footer-slot",name:d.S.footer,onSlotchange:this.handleFooterSlotChange}),(0,a.h)("slot",{key:"footer-actions-slot",name:d.S.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return(0,a.h)("div",{class:d.C.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,a.h)("slot",null),this.renderFab())}renderFab(){return(0,a.h)("div",{class:d.C.fabContainer,hidden:!this.hasFab},(0,a.h)("slot",{name:d.S.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:n,closable:o}=this,s=(0,a.h)("article",{"aria-busy":(0,i.t)(e),class:d.C.container,hidden:n,onKeyDown:t,tabIndex:o?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,a.h)(a.F,null,e?(0,a.h)("calcite-scrim",{loading:e}):null,s)}static get assetsDirs(){return["assets"]}get el(){return(0,a.g)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};g.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"},1129:(e,t,n)=>{n.d(t,{c:()=>p,d:()=>b,u:()=>h});var a=n(2936);const i=/firefox/i.test((0,a.g)()),o=i?new WeakMap:null;function s(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const t=e.target;if(i&&!o.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const c=["mousedown","mouseup","click"];function l(e){if(i&&!o.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);f(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=s,(t=i?g(e):e.el)&&(t.addEventListener("pointerdown",r,d),c.forEach((e=>t.addEventListener(e,l,d))))}function g(e){return o.get(e.el)}function f(e){var t;delete e.el.click,(t=i?g(e):e.el)&&(t.removeEventListener("pointerdown",r,d),c.forEach((e=>t.removeEventListener(e,l,d))))}function p(e){if(!e.disabled||!i)return;const t=e.el.parentElement||e.el;o.set(e.el,t),u(e)}function b(e){i&&(o.delete(e.el),f(e))}},4495:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>c,c:()=>l,s:()=>s});var a=n(1903);const i=new WeakMap,o=new WeakMap;function s(e){o.set(e,new Promise((t=>i.set(e,t))))}function r(e){i.get(e)()}function c(e){return o.get(e)}async function l(e){return await c(e),(0,a.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},6127:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>o,S:()=>i,a:()=>s});const a={menu:"menu",defaultTrigger:"default-trigger"},i={tooltip:"tooltip",trigger:"trigger"},o={menu:"ellipsis"},s="data-active"},4303:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>i,S:()=>o});const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},i={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},o={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"}},5081:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>u,s:()=>c,u:()=>d});var a=n(1903),i=n(9442);const o={};function s(){throw new Error("could not fetch component message bundle")}function r(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await l(e,e.effectiveLocale),r(e)}async function l(e,t){const{el:n}=e,r=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return o[n]||(o[n]=fetch((0,a.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),o[n]}((0,i.g)(t,"t9n"),r)}async function d(e,t){e.defaultMessages=await l(e,t),r(e)}function h(e){e.onMessagesChange=g}function u(e){e.onMessagesChange=void 0}function g(){r(this)}}}]);