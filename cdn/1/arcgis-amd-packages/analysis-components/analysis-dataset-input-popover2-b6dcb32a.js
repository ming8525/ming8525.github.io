define(["exports","./index-ef555910","./index2-588b02d9"],(function(e,t,s){"use strict";const i=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisDatasetInputPopoverClose=t.createEvent(this,"analysisDatasetInputPopoverClose",7),this.analysisDatasetInputPopoverSelectionChange=t.createEvent(this,"analysisDatasetInputPopoverSelectionChange",7),this.buildPickListItem=e=>t.h("calcite-pick-list-item",{key:e.id,value:e.id,label:e.name,description:e.description,selected:void 0!==this.selectedDatasetIds&&this.selectedDatasetIds.includes(e.id),onClick:this.onPickListChange}),this.onPickListChange=async()=>{const e=await(this.picklist?.getSelectedItems()),t=Array.from(e?.keys()??[]);this.analysisDatasetInputPopoverSelectionChange.emit({selectedDatasetIds:t}),"multi"!==this.selectionMode&&(this.open=!1)},this.analysisDatasets=void 0,this.selectionMode=void 0,this.referenceElement=void 0,this.placement="auto",this.open=void 0,this.selectedDatasetIds=void 0,this.popoverWidth=void 0}async componentWillLoad(){({strings:this.strings}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath(".")))}componentDidLoad(){setTimeout((()=>requestAnimationFrame((()=>this.popoverElement?.setFocus()))),1),setTimeout((()=>{this.popoverElement?.reposition?.()}),s.UIDefaults.PopoverTimer)}async reposition(){await(this.popoverElement?.reposition?.())}render(){const e=this.popoverWidth??this.referenceElement?.getBoundingClientRect().width;return t.h(t.Host,{class:"analysis-popover js-app-flyout"},t.h("calcite-popover",{ref:e=>{this.popoverElement=e},autoClose:!0,referenceElement:this.referenceElement??"analysis-dataset-input",placement:this.placement,open:this.open,closable:!0,heading:this.strings.heading,label:this.strings.heading,focusTrapDisabled:!0,onCalcitePopoverClose:()=>this.analysisDatasetInputPopoverClose.emit()},t.h("calcite-panel",{style:{width:void 0!==e?`${e}px`:void 0}},t.h("calcite-pick-list",{class:"popover-content",multiple:"multi"===this.selectionMode,filterEnabled:!0,ref:e=>{this.picklist=e}},this.analysisDatasets?.map(this.buildPickListItem)))))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex}.popover-content{height:var(--analysis-popover-content-height)}"}},[1,"analysis-dataset-input-popover",{analysisDatasets:[16],selectionMode:[513,"selection-mode"],referenceElement:[16],placement:[513],open:[1540],selectedDatasetIds:[16],popoverWidth:[514,"popover-width"],reposition:[64]}]);function n(){"undefined"!=typeof customElements&&["analysis-dataset-input-popover"].forEach((e=>{"analysis-dataset-input-popover"===e&&(customElements.get(e)||customElements.define(e,i))}))}n(),e.AnalysisDatasetInputPopover=i,e.defineCustomElement=n}));