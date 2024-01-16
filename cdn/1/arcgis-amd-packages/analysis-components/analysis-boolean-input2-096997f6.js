define(["exports","./index-ef555910","./index2-588b02d9","./utils-793221d4","./analysis-label2-f17c360a"],(function(a,e,t,s,l){"use strict";const i="control-margin",n=e.proxyCustomElement(class extends e.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisBooleanInputChange=e.createEvent(this,"analysisBooleanInputChange",7),this.analysisHelpClick=e.createEvent(this,"analysisHelpClick",7),this.handleCheckChange=()=>{this.value=!this.value,this.analysisBooleanInputChange.emit()},this.value=void 0,this.label=void 0,this.labelLayout=void 0,this.displayStyle="checkbox",this.validationParams=void 0}render(){const a=t.formatValidationParamsMessage(this.validationParams),l=!1===t.isEmptyDataItem(a),n=t.getUIInputStatusFromMessageType(this.validationParams?.type);return e.h(e.Host,null,e.h("calcite-label",{class:"label",layout:this.labelLayout??"inline"},"switch"===this.displayStyle?e.h("calcite-switch",{class:i,scale:s.UIDefaults.Scale,checked:this.value??!1,onCalciteSwitchChange:this.handleCheckChange}):e.h("calcite-checkbox",{class:i,scale:s.UIDefaults.Scale,checked:this.value??!1,onCalciteCheckboxChange:this.handleCheckChange}),!1===t.isEmptyDataItem(this.label)&&e.h("analysis-label",{label:this.label,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()})),e.h("calcite-input-message",{status:n,hidden:!l,scale:s.UIDefaults.Scale,icon:"exclamationMarkTriangle"},a))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{--calcite-label-margin-bottom:0rem}.control-margin{margin-bottom:var(--analysis-quarter-spacing)}.label{width:100%}"}},[1,"analysis-boolean-input",{value:[1540],label:[513],labelLayout:[513,"label-layout"],displayStyle:[513,"display-style"],validationParams:[16]}]);function o(){"undefined"!=typeof customElements&&["analysis-boolean-input","analysis-label"].forEach((a=>{switch(a){case"analysis-boolean-input":customElements.get(a)||customElements.define(a,n);break;case"analysis-label":customElements.get(a)||l.defineCustomElement()}}))}o(),a.AnalysisBooleanInput=n,a.defineCustomElement=o}));