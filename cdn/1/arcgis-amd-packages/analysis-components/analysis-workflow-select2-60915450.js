define(["exports","./index-ef555910","./index2-588b02d9","./utils-793221d4","./analysis-label2-f17c360a","./analysis-workflow-select-popover2-a6a5c39c","./isEqual-7dac7fee"],(function(e,t,s,o,i,a,l){"use strict";const r=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisWorkflowSelectChange=t.createEvent(this,"analysisWorkflowSelectChange",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.workflowOptions={},this.hideElements=()=>{this.toolSettingsElement=this.parentAppContainer?.shadowRoot?.querySelector("analysis-tool-settings"),this.toolFooterElement=this.parentAppContainer?.shadowRoot?.querySelector("div[slot=footer]"),this.toolSettingsElement&&(this.toolSettingsElement.hidden=!0),this.toolFooterElement&&(this.toolFooterElement.hidden=!0)},this.showElements=()=>{!0===this.toolSettingsElement?.hidden&&(this.toolSettingsElement.hidden=!1),!0===this.toolFooterElement?.hidden&&(this.toolFooterElement.hidden=!1)},this.onSelectionChange=e=>{e!==this.value&&(this.value=e,this.updateSelectedUIParameters(),this.validate()),this.showElements()},this.replaceWorkflow=e=>{this.removeWorkflowReplacePopover(),this.workflowSelectPopover=this.createWorkflowSelectPopoverElement(e.target),o.addOpenableDomElement(document,this.workflowSelectPopover)},this.removeWorkflowReplacePopover=()=>{o.removeOpenableDomElement(this.workflowSelectPopover)},this.createWorkflowSelectPopoverElement=e=>{const t=document.createElement("analysis-workflow-select-popover"),s={autoClose:!0,closable:!0,focusTrapDisabled:!0,heading:this.strings.popoverHeader,label:this.strings.popoverHeader,placement:"auto",referenceElement:e};return t.popoverOptions=s,t.renderPopoverContent=()=>this.renderWorkflowOptions(!0),t.addEventListener("calcitePopoverClose",(()=>{this.removeWorkflowReplacePopover()})),t},this.isValid=!0,this.label=void 0,this.value=void 0,this.choiceListLabels=void 0,this.required=void 0,this.validationParams=void 0,this.UIparameterInfos=void 0,this.selectUIparameterInfos=void 0}onUIparameterInfosChange(e){this.processUIparameterInfos(e)}async componentWillLoad(){({strings:this.strings,dir:this.dir}=await s.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),void 0===this.value&&(this.parentAppContainer=s.getClosestElement("analysis-tool-app-container",this.hostElement)),void 0!==this.UIparameterInfos&&this.processUIparameterInfos(this.UIparameterInfos),this.updateSelectedUIParameters()}componentDidLoad(){void 0===this.value&&this.hideElements()}disconnectedCallback(){this.removeWorkflowReplacePopover(),this.showElements()}async checkValidity(){return this.validate()}validate(){let e=!0;return!0===this.required&&void 0===this.value&&(e=!1),this.isValid=e,Promise.resolve(this.isValid)}processUIparameterInfos(e){const t={},s={};for(const o of e??[]){const e=o?.name;if(void 0===e)throw new Error("UIparameterInfo goal must have a name property");t[e]=o,s[e]=o.label??e}this.workflowOptions=t,this.choiceListLabels=s,this.resetValueIfInvalid()}updateSelectedUIParameters(){const e=void 0===this.value?void 0:[this.workflowOptions[this.value]];!1===l.isEqual(e,this.selectUIparameterInfos)&&(this.selectUIparameterInfos=e,this.analysisWorkflowSelectChange.emit())}resetValueIfInvalid(){void 0!==this.value&&void 0===this.workflowOptions[this.value]&&this.onSelectionChange(void 0)}renderReplaceTooltip(){const{replaceWorkflow:e}=this.strings;return t.h("calcite-tooltip",{closeOnClick:!0,dir:this.dir,label:e,placement:"bottom",onClick:e=>e.stopPropagation(),ref:e=>this.selectedWorkflowTooltip=e},e)}renderWorkflowOptions(e=!1){const s=e||void 0===this.value,o=s?this.removeWorkflowReplacePopover:this.replaceWorkflow,i=s?Object.keys(this.workflowOptions).map((e=>this.renderListItem(this.workflowOptions[e],!1))):this.renderListItem(this.workflowOptions[this.value],!0);return t.h("calcite-list",{dir:this.dir,onClick:o,class:"border",selectionMode:e?"single-persist":"none",selectionAppearance:"icon"},this.renderReplaceTooltip(),i)}renderWorkflowHelpAction(e){const{workflowHelp:s}=this.strings;return t.h("calcite-action",{label:s,text:s,onClick:t=>{t.stopPropagation();const s=t.target,o=s.parentElement,i=e.label??e.name;this.analysisHelpClick.emit({paramName:e.name,paramLabel:i,refElement:o??s})},icon:"information",slot:"actions-end"})}renderListItem(e,s){const{name:o,label:i}=e,a=s?()=>{}:()=>this.onSelectionChange(e.name);return t.h("calcite-list-item",{key:o,id:o,value:o,label:i??o,selected:o===this.value,onClick:a,ref:e=>{!0===s&&void 0!==this.selectedWorkflowTooltip&&void 0!==this.value&&null!==e&&(this.selectedWorkflowTooltip.referenceElement=e)}},this.renderWorkflowHelpAction(e))}renderLabel(){return void 0!==this.label&&""!==this.label?t.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):void 0}renderErrorMessage(){const e=this.validationParams?.requiredMessage??s.formatMessage(this.strings.isRequired,{label:this.label});return!1===this.isValid&&""!==e?t.h("calcite-input-message",{status:s.UIInputStatus.INVALID,scale:s.UIDefaults.Scale,icon:"exclamationMarkTriangle",hidden:this.isValid},e):void 0}render(){return t.h(t.Host,null,t.h("calcite-section",{class:"container"},t.h("calcite-label",{scale:s.UIDefaults.Scale},this.renderLabel(),this.renderWorkflowOptions(),this.renderErrorMessage())))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{UIparameterInfos:["onUIparameterInfosChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{width:var(--analysis-component-default-width)}.container{margin-bottom:var(--analysis-half-spacing)}.border{border:1px solid var(--calcite-color-border-input)}"}},[1,"analysis-workflow-select",{label:[513],value:[1025],choiceListLabels:[1040],required:[516],validationParams:[16],UIparameterInfos:[1040],selectUIparameterInfos:[1040],isValid:[32],checkValidity:[64]},void 0,{UIparameterInfos:["onUIparameterInfosChange"]}]);function n(){"undefined"!=typeof customElements&&["analysis-workflow-select","analysis-label","analysis-workflow-select-popover"].forEach((e=>{switch(e){case"analysis-workflow-select":customElements.get(e)||customElements.define(e,r);break;case"analysis-label":customElements.get(e)||i.defineCustomElement();break;case"analysis-workflow-select-popover":customElements.get(e)||a.defineCustomElement()}}))}n(),e.AnalysisWorkflowSelect=r,e.defineCustomElement=n}));