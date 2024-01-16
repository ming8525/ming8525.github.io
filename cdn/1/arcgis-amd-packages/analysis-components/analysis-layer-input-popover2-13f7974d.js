define(["exports","./index-ef555910","./index2-588b02d9","./analysis-item-browser2-508c9cf3","./_Uint8Array-190b1a5d","./_baseIsEqual-422e05a5","./isObject-072a0200","./get-4ace6219","./_baseGet-9bd467fe","./_MapCache-84d65af1","./identity-47e9f05a"],(function(e,t,s,i,r,n,a,o,l,h,c){"use strict";var p=1,m=2;function d(e){return e==e&&!a.isObject(e)}function u(e,t){return function(s){return null!=s&&s[e]===t&&(void 0!==t||e in Object(s))}}function y(e,t){return null!=e&&t in Object(e)}function v(e,t){return null!=e&&function(e,t,s){for(var i=-1,n=(t=l.castPath(t,e)).length,a=!1;++i<n;){var o=l.toKey(t[i]);if(!(a=null!=e&&s(e,o)))break;e=e[o]}return a||++i!=n?a:!!(n=null==e?0:e.length)&&r.isLength(n)&&r.isIndex(o,n)&&(h.isArray(e)||r.isArguments(e))}(e,t,y)}function f(e){return"function"==typeof e?e:null==e?c.identity:"object"==typeof e?h.isArray(e)?(i=e[0],a=e[1],l.isKey(i)&&d(a)?u(l.toKey(i),a):function(e){var t=o.get(e,i);return void 0===t&&t===a?v(e,i):n.baseIsEqual(a,t,3)}):(s=function(e){for(var t=r.keys(e),s=t.length;s--;){var i=t[s],n=e[i];t[s]=[i,n,d(n)]}return t}(t=e),1==s.length&&s[0][2]?u(s[0][0],s[0][1]):function(e){return e===t||function(e,t,s,i){var a=s.length,o=a;if(null==e)return!o;for(e=Object(e);a--;){var l=s[a];if(l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<o;){var h=(l=s[a])[0],c=e[h],d=l[1];if(l[2]){if(void 0===c&&!(h in e))return!1}else{var u,y=new r.Stack;if(!(void 0===u?n.baseIsEqual(d,c,p|m,i,y):u))return!1}}return!0}(e,0,s)}):function(e){return l.isKey(e)?(t=l.toKey(e),function(e){return null==e?void 0:e[t]}):function(e){return function(t){return l.baseGet(t,e)}}(e);var t}(e);var t,s,i,a}function g(e,t,s,i){for(var r=-1,n=null==e?0:e.length;++r<n;){var a=e[r];t(i,a,s(a),e)}return i}var w=function(e,t,s){for(var i=-1,r=Object(e),n=s(e),a=n.length;a--;){var o=n[++i];if(!1===t(r[o],o,r))break}return e},L=function(e,t){if(null==e)return e;if(!r.isArrayLike(e))return function(e,t){return e&&w(e,t,r.keys)}(e,t);for(var s=e.length,i=-1,n=Object(e);++i<s&&!1!==t(n[i],i,n););return e};function E(e,t,s,i){return L(e,(function(e,r,n){t(i,e,s(e),n)})),i}var B,b,I=(B=function(e,t,s){e[s?0:1].push(t)},b=function(){return[[],[]]},function(e,t){var s=h.isArray(e)?g:E,i=b?[[],[]]:{};return s(e,B,f(t),i)});const M="pick-list-message",k=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisLayerInputPopoverClose=t.createEvent(this,"analysisLayerInputPopoverClose",7),this.analysisLayerInputPopoverSelectionChange=t.createEvent(this,"analysisLayerInputPopoverSelectionChange",7),this.analysisLayerInputPopoverLayerBrowsed=t.createEvent(this,"analysisLayerInputPopoverLayerBrowsed",7),this.checkForMatchingLayer=()=>{this.calciteFilterSearchTerm=this.picklist?.filterText,this.noSearchedLayersMessageActive=0===this.picklist?.filteredItems?.length&&0!==this.picklist?.filterText.length},this.buildPickListItem=e=>t.h("calcite-pick-list-item",{key:e.id,value:e.id,label:s.getLayerLabel(e),description:s.isFeatureLayer(e)?s.isTableLayer(e)?this.strings.table:this.strings[e.geometryType]:"",selected:void 0!==this.selectedLayerIds&&this.selectedLayerIds.includes(e.id),onClick:this.onPickListChange}),this.openItemBrowser=()=>{this.itemBrowserElement?.remove(),this.itemBrowserElement=document.createElement("analysis-item-browser"),this.itemBrowserElement.header=this.strings.heading,this.itemBrowserElement.filter=this.itemBrowserFilter,this.itemBrowserElement.q=this.itemBrowserQ,this.itemBrowserElement.allowedGeometries=this.itemBrowserAllowedGeometries,this.itemBrowserElement.layerFilterType=this.layerFilterType,this.itemBrowserElement.portal=this.portal,this.itemBrowserElement.bucketOptions=this.bucketOptions,this.itemBrowserElement.user=this.user,this.itemBrowserElement.selectionMode="multi"!==this.selectionMode?"single-sublayer":"multiple-sublayer",this.itemBrowserElement.addEventListener("analysisItemBrowserClose",this.closeModals),this.itemBrowserElement.addEventListener("analysisItemBrowserAddToMap",this.handleItemBrowserAddToMap),this.itemBrowserElement.addEventListener("analysisItemBrowserSelection",this.handleItemBrowserSelection),this.popoverElement.autoClose=!1,this.popoverElement.hidden=!0,document.body.appendChild(this.itemBrowserElement)},this.closeModals=()=>{this.popoverElement.autoClose=!0,this.popoverElement.hidden=!1,void 0!==this.itemBrowserElement&&(this.itemBrowserElement.removeEventListener("analysisItemBrowserClose",this.closeModals),this.itemBrowserElement.removeEventListener("analysisItemBrowserAddToMap",this.handleItemBrowserAddToMap),this.itemBrowserElement.removeEventListener("analysisItemBrowserSelection",this.handleItemBrowserSelection),this.itemBrowserElement.remove(),this.itemBrowserElement=void 0)},this.addLayersToMap=(e,t)=>{const i=I(t,(e=>s.isTableLayer(e)));e.addMany(i[1]),e.tables.addMany(i[0])},this.handleItemBrowserAddToMap=e=>{this.addLayersToMap(this.mapView.map,e.detail),this.analysisLayerInputPopoverLayerBrowsed.emit(e.detail),this.open=!1},this.handleItemBrowserSelection=e=>{this.analysisLayerInputPopoverLayerBrowsed.emit(e.detail),this.open=!1},this.onPickListChange=async()=>{const e=await(this.picklist?.getSelectedItems());this.analysisLayerInputPopoverSelectionChange.emit({selectedLayers:e}),"multi"!==this.selectionMode&&(this.open=!1)},this.mapLayers=void 0,this.analysisSessionLayers=[],this.hideBrowseButton=!1,this.showNoticeMessage=!1,this.noticeMessage=void 0,this.selectionMode=void 0,this.referenceElement=void 0,this.placement="auto",this.open=void 0,this.selectedLayerIds=void 0,this.popoverWidth=void 0,this.user=void 0,this.portal=void 0,this.mapView=void 0,this.itemBrowserAllowedGeometries=void 0,this.itemBrowserFilter="",this.itemBrowserQ="",this.layerFilterType=void 0,this.noSearchedLayersMessageActive=!1,this.calciteFilterSearchTerm=void 0}get bucketOptions(){const e=["my","favorites","group","org","all"];return!0===this.portal.isPortal&&this.portal.sourceJSON.portalDeploymentType===s.PortalDeploymentType.Kubernetes||e.splice(4,0,"living atlas analysis"),e}async componentWillLoad(){({strings:this.strings,dir:this.dir}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath(".")))}componentDidLoad(){this.focusTimeoutId=setTimeout((async()=>{await(this.picklist?.setFocus?.("filter"))}),s.UIDefaults.PopoverTimer),setTimeout((()=>{this.popoverElement?.reposition?.()}),s.UIDefaults.PopoverTimer)}disconnectedCallback(){void 0!==this.focusTimeoutId&&clearTimeout(this.focusTimeoutId),this.closeModals()}async reposition(){await(this.popoverElement?.reposition?.())}render(){const e=this.popoverWidth??this.referenceElement?.getBoundingClientRect().width,i=s.formatMessage(this.strings.noMatchesFound,{searchTerm:this.calciteFilterSearchTerm??""}),r=0===this.analysisSessionLayers?.length&&0===this.mapLayers?.length,n=!0===this.hideBrowseButton;return t.h(t.Host,{dir:this.dir,class:"analysis-popover js-app-flyout"},t.h("calcite-popover",{ref:e=>{this.popoverElement=e},style:{width:void 0!==e?`${e}px`:void 0},autoClose:!0,closable:!0,heading:this.strings.heading,referenceElement:this.referenceElement??"analysis-layer-input",placement:this.placement,open:this.open,label:"",focusTrapDisabled:!0,onCalcitePopoverClose:()=>this.analysisLayerInputPopoverClose.emit()},t.h("calcite-panel",null,t.h("calcite-pick-list",{class:"popover-content",multiple:"multi"===this.selectionMode,filterEnabled:!0,ref:e=>{this.picklist=e},onCalciteListFilter:this.checkForMatchingLayer},t.h("calcite-notice",{open:this.showNoticeMessage,class:"half-margin",kind:"warning",scale:s.UIDefaults.Scale},t.h("div",{slot:"message"},Array.from(new Set(this.noticeMessage))?.map((e=>t.h("p",{innerHTML:e}))))),this.noSearchedLayersMessageActive&&t.h("p",{class:M},i),r&&!1===this.noSearchedLayersMessageActive?t.h("p",{class:M},this.strings.noCompatibleLayers):t.h("div",null,t.h("calcite-pick-list-group",{"group-title":this.strings.analysisSessionLayers,hidden:0===this.analysisSessionLayers?.length},(this.analysisSessionLayers??[]).map((e=>this.buildPickListItem(e)))),t.h("calcite-pick-list-group",{"group-title":this.strings.mapLayers,hidden:0===this.mapLayers?.length},(this.mapLayers??[]).map((e=>this.buildPickListItem(e)))))),!n&&t.h("calcite-button",{slot:"footer-actions",appearance:"transparent",width:"full",onClick:this.openItemBrowser},this.strings.browseAnalysisLayers))))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex}.popover-content{height:var(--analysis-popover-content-height)}.fab{justify-content:center;padding:var(--analysis-half-spacing)}.half-margin{margin:var(--analysis-half-spacing)}.pick-list-message{margin:var(--analysis-half-spacing);font-size:var(--calcite-font-size--2)}"}},[1,"analysis-layer-input-popover",{mapLayers:[16],analysisSessionLayers:[16],hideBrowseButton:[516,"hide-browse-button"],showNoticeMessage:[4,"show-notice-message"],noticeMessage:[16],selectionMode:[513,"selection-mode"],referenceElement:[16],placement:[513],open:[1540],selectedLayerIds:[16],popoverWidth:[514,"popover-width"],user:[16],portal:[16],mapView:[16],itemBrowserAllowedGeometries:[16],itemBrowserFilter:[513,"item-browser-filter"],itemBrowserQ:[513,"item-browser-q"],layerFilterType:[1,"layer-filter-type"],noSearchedLayersMessageActive:[32],calciteFilterSearchTerm:[32],reposition:[64]}]);function T(){"undefined"!=typeof customElements&&["analysis-layer-input-popover","analysis-item-browser"].forEach((e=>{switch(e){case"analysis-layer-input-popover":customElements.get(e)||customElements.define(e,k);break;case"analysis-item-browser":customElements.get(e)||i.defineCustomElement()}}))}T(),e.AnalysisLayerInputPopover=k,e.defineCustomElement=T,e.hasIn=v}));