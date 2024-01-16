define(["exports","./index-ef555910","./index2-588b02d9","./analysis-field-select2-eb77dd22","./analysis-label2-f17c360a"],(function(e,i,s,t,l){"use strict";const a=i.proxyCustomElement(class extends i.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisFieldInputChange=i.createEvent(this,"analysisFieldInputChange",7),this.analysisHelpClick=i.createEvent(this,"analysisHelpClick",7),this.filterOutGeometryFields=e=>{let i=e;return void 0!==this.mapLayer&&(i=e.filter((e=>!1===[this.mapLayer?.geometryFieldsInfo?.shapeAreaField,this.mapLayer?.geometryFieldsInfo?.shapeLengthField].includes(e.name)))),i},this.setupPopover=()=>{this.fieldPickListElement=document.createElement("arcgis-field-pick-list"),this.fieldPickListElement.className="analysis-popover",this.fieldPickListElement.layer=this.mapLayer,this.fieldPickListElement.mapView=this.mapView,this.fieldPickListElement.showDescription=!0,this.fieldPickListElement.showFieldName=!this.hideFieldNames,this.fieldPickListElement.dir=this.dir,this.fieldPickListElement.showFieldInfo=void 0===this.analysisDataset&&this.showFieldInfo,this.fieldPickListElement.fields=this.filteredPickListFields,this.isMultiSelect||(this.fieldPickListElement.heading=this.strings.selectFieldPicklistHeading,this.fieldPickListElement.okBtnText=this.strings.selectOkBtnText),this.fieldPickListElement.showSort=this.showSort,this.fieldPickListElement.heading=this.heading??this.fieldPickListElement.heading,this.fieldPickListElement.filterPlaceholderText=this.filterPlaceholderText,void 0!==this.value?this.fieldPickListElement.selectedFields=this.isMultiSelect?this.value:[this.value]:this.isMultiSelect&&(this.fieldPickListElement.selectedFields=[]),this.fieldPickListElement.multiple=this.isMultiSelect,this.fieldPickListElement.showSelectionAll=!0,this.fieldPickListElement.addEventListener("arcgisFieldPickListDismissed",this.arcgisFieldPickListDismissed),this.fieldPickListElement.popoverProps={refElement:this.fieldSelectElement,autoClose:!0,popoverWidth:300}},this.arcgisFieldPickListDismissed=e=>{null!==e.detail&&(this.value=this.isMultiSelect?e.detail.selectedFields:e.detail.selectedFields[0],this.analysisFieldInputChange.emit()),this.closeFieldPickList()},this.onAnalysisFieldRemoved=e=>{this.value instanceof Array?this.value=this.value.filter((i=>i!==e.detail.value)):this.value=void 0,this.validate(),this.analysisFieldInputChange.emit()},this.addPopover=()=>{void 0!==this.fieldPickListElement&&document.body.appendChild(this.fieldPickListElement)},this.closePopover=()=>{this.fieldPickListElement?.remove(),this.fieldPickListElement=void 0},this.openFieldPickList=()=>{this.closeFieldPickList(),this.setupPopover(),this.addPopover()},this.closeFieldPickList=()=>{void 0!==this.fieldPickListElement&&(this.closePopover(),this.validate())},this.validate=()=>{let e;this.required&&(e=!0===s.isEmptyDataItem(this.value)?s.formatMessage(this.strings.requiredErrorMessage,{label:this.label??this.strings.requiredErrorLabelDefault}):e),this.errorMessage=e},this.errorMessage=void 0,this.pickListFields=[],this.loading=!1,this.label=void 0,this.required=!1,this.readOnly=!1,this.mapLayer=void 0,this.analysisDataset=void 0,this.fieldTypes=void 0,this.mapView=void 0,this.showFieldInfo=!0,this.selectionMode=void 0,this.usePopupTemplatesInfo=!0,this.useValueLabel=!1,this.value=void 0,this.selectedFields=void 0,this.placeholderText=void 0,this.showSort=!0,this.heading=void 0,this.filterPlaceholderText=void 0,this.hideFieldNames=!1,this.useDefaultValue=!1,this.allowGeometryFields=!1}onReadOnlyChange(){this.readOnly??(this.readOnly=!1)}syncSelectedFieldsWithPickListFields(){this.syncSelectedFieldsWithValue(),this.analysisFieldInputChange.emit()}syncSelectedFieldsWithValue(){const e=this.value;if(Array.isArray(e)){const i=new Set(e);this.selectedFields=this.pickListFields.filter((e=>i.has(e.name)))}else void 0!==e&&(this.selectedFields=this.pickListFields.find((i=>i.name===e)))}async updatePickListFieldsFromLayer(){await this.loadPickListFieldsFromLayer(),this.maybeResetValue()}async updatePickListFieldsFromDataset(){await this.loadPickListFieldsFromDataset(),this.maybeResetValue()}get filteredPickListFields(){const e=new Set(this.fieldTypes),i=!1===this.allowGeometryFields?this.filterOutGeometryFields(this.pickListFields):this.pickListFields;return 0===e.size?i:i.filter((i=>e.has(i.type)))}async componentWillLoad(){({strings:this.strings,dir:this.dir}=await s.fetchComponentLocaleStrings(this.hostElement,i.getAssetPath("."))),void 0!==this.mapLayer?this.loadPickListFieldsFromLayer():void 0!==this.analysisDataset&&this.loadPickListFieldsFromDataset().then((()=>{void 0!==this.errorMessage&&""!==this.errorMessage||!0===this.abortController?.signal.aborted||this.maybeResetValue()}))}disconnectedCallback(){this.fieldPickListElement?.remove()}async checkValidity(){this.validate();const e=void 0===this.errorMessage||""===this.errorMessage;return Promise.resolve(e)}maybeResetValue(){const e=this.filteredPickListFields??[],i=new Set(e.map((e=>e.name)));this.errorMessage=void 0;let s=!0;if(this.isMultiSelect&&Array.isArray(this.value)){const e=this.value.filter((e=>i.has(e)));0!==e.length&&(this.value=e,this.validate(),this.analysisFieldInputChange.emit(),s=!1)}else s=!i.has(this.value);!0===s&&!1===this.readOnly&&(this.useDefaultValue&&e.length>0?(this.value=this.isMultiSelect?[e[0].name]:e[0].name,this.validate(),this.analysisFieldInputChange.emit()):void 0!==this.value&&(this.value=void 0,this.validate(),this.analysisFieldInputChange.emit()))}get isMultiSelect(){return"multi"===this.selectionMode}async loadPickListFieldsFromDataset(){if(void 0!==this.abortController&&this.abortController.abort(),void 0!==this.analysisDataset){this.loading=!0;try{this.abortController=new AbortController,this.pickListFields=await this.analysisDataset.getFields({signal:this.abortController.signal})}catch(e){!1===s.wasAborted(e)&&(this.errorMessage=this.strings.fieldLoadingErrorText)}this.loading=!1}else this.pickListFields=[]}async loadPickListFieldsFromLayer(){if(void 0!==this.mapLayer)try{this.pickListFields=await s.fetchLayerFieldsInfo(this.mapLayer,this.usePopupTemplatesInfo)}catch(e){this.errorMessage=this.strings.fieldLoadingErrorText}else this.pickListFields=[]}render(){return i.h(i.Host,null,i.h("analysis-field-select",{errorMessage:this.errorMessage,value:!0===s.isEmptyDataItem(this.value)?void 0:this.value,label:this.label,ref:e=>{this.fieldSelectElement=e},fields:this.pickListFields,useValueLabel:this.useValueLabel,selectionMode:this.selectionMode,onAnalysisSelectFieldClick:this.openFieldPickList,onAnalysisFieldRemove:this.onAnalysisFieldRemoved,placeholderText:this.placeholderText,required:this.required,readOnly:this.readOnly,loading:this.loading}))}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{readOnly:["onReadOnlyChange"],pickListFields:["syncSelectedFieldsWithPickListFields"],value:["syncSelectedFieldsWithValue"],mapLayer:["updatePickListFieldsFromLayer"],usePopupTemplatesInfo:["updatePickListFieldsFromLayer"],analysisDataset:["updatePickListFieldsFromDataset"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:flex;width:var(--analysis-component-default-width);margin-bottom:var(--analysis-half-spacing)}"}},[1,"analysis-field-input",{label:[513],required:[516],readOnly:[516,"read-only"],mapLayer:[16],analysisDataset:[16],fieldTypes:[16],mapView:[16],showFieldInfo:[4,"show-field-info"],selectionMode:[513,"selection-mode"],usePopupTemplatesInfo:[516,"use-popup-templates-info"],useValueLabel:[516,"use-value-label"],value:[1025],selectedFields:[1040],placeholderText:[513,"placeholder-text"],showSort:[516,"show-sort"],heading:[513],filterPlaceholderText:[513,"filter-placeholder-text"],hideFieldNames:[516,"hide-field-names"],useDefaultValue:[516,"use-default-value"],allowGeometryFields:[516,"allow-geometry-fields"],errorMessage:[32],pickListFields:[32],loading:[32],checkValidity:[64]},void 0,{readOnly:["onReadOnlyChange"],pickListFields:["syncSelectedFieldsWithPickListFields"],value:["syncSelectedFieldsWithValue"],mapLayer:["updatePickListFieldsFromLayer"],usePopupTemplatesInfo:["updatePickListFieldsFromLayer"],analysisDataset:["updatePickListFieldsFromDataset"]}]);function d(){"undefined"!=typeof customElements&&["analysis-field-input","analysis-field-select","analysis-label"].forEach((e=>{switch(e){case"analysis-field-input":customElements.get(e)||customElements.define(e,a);break;case"analysis-field-select":customElements.get(e)||t.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement()}}))}d(),e.AnalysisFieldInput=a,e.defineCustomElement=d}));