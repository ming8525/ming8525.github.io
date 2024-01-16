define(["exports","./index-ef555910","./index2-588b02d9","./set-91d835d2","./primitiveFactory-d8ce40e4","./utils-793221d4","./analysis-attribute-expression2-a90d2a8c","./analysis-boolean-input2-096997f6","./analysis-chip-group2-097fb4b1","./analysis-data-file-input2-34f8bb3a","./analysis-dataset-input2-9534a23f","./analysis-dataset-input-popover2-b6dcb32a","./analysis-date-input2-1f634ecb","./analysis-expression-group2-ce4cdcfd","./analysis-field-input2-e1115e33","./analysis-field-select2-eb77dd22","./analysis-folder-input2-5bb22688","./analysis-geoenrichment-databrowser2-6a737015","./analysis-geoenrichment-input2-4eb9195c","./analysis-item-browser2-508c9cf3","./analysis-item-input2-3709ada5","./analysis-label2-f17c360a","./analysis-layer-input2-f52c4db0","./analysis-layer-input-popover2-13f7974d","./analysis-linear-unit-input2-62802ce9","./analysis-multiple-input2-31e7ea23","./analysis-number-input2-ee81e720","./analysis-query-builder2-59ad1897","./analysis-query-entry2-a97f8d18","./analysis-query-input2-4bacfecd","./analysis-query-modal2-5e925cce","./analysis-query-target-select2-1308b9a9","./analysis-spatial-expression2-5e7137a9","./analysis-spatial-reference-input2-68aa634b","./analysis-spatial-reference-selector2-197bdd55","./analysis-string-input2-61f7c630","./analysis-summary-fields2-732adae8","./analysis-summary-fields-popover2-3708aecb","./analysis-traffic-time-input2-944df8cc","./analysis-tree2-21de4d9f","./analysis-unsupported-input2-606583a1","./analysis-workflow-select2-60915450","./analysis-workflow-select-popover2-a6a5c39c"],(function(e,t,a,s,i,n,l,r,o,u,c,m,d,p,y,h,f,g,v,b,E,k,C,I,V,P,w,S,L,q,x,T,A,_,D,M,U,R,W,K,H,B,N){"use strict";const z="esriGPParameterTypeRequired";function $(e){const t=e.indexOf(".");let a=e,s="";return t>0&&(a=e.substring(0,t),s=e.substring(t+1)),[a,s]}function O(e){const t=new Map;for(const a of e){const e=Array.isArray(a.destination)?a.destination:[a.destination];for(const s of e){const[e]=$(s);t.has(e)?t.get(e).push(a):t.set(e,[a])}}return t}function j(e,t,i){let n={...e};for(const e of i)for(const[i,l]of Object.entries(t)){const t=""===e?i:`${e}.${i}`;t.includes("UIparameterInfos")?n=a.setImmutableValue(n,t,l):s.set(n,t,l)}return n}function G(e){const{param:t,data:s,rules:i,renderedParameters:n,currentTool:l}=e,r=t.name;if(void 0===r)return[t,s];let o={...t};for(const e of i){const t=a.processRule({rule:e,data:s,renderedParams:n??{},currentTool:l});if(void 0===t)continue;const i=(Array.isArray(e.destination)?e.destination:[e.destination]).map($).filter((([e])=>e===r));"value"in t&&(s[r]=t.value),o=j(o,t,i.map((([,e])=>e))),o.value=s[r]}return[o,s]}function J(e){let t;return e.impedanceAttributeName===e.timeAttributeName?t="time":e.impedanceAttributeName===e.distanceAttributeName&&(t="distance"),t}function F(e){const{param:t,data:s,travelModeInfo:i,straightLineLabel:n}=e,l=t.name;if(void 0===l)return[t,s];const r=s[l],o="defaultValue"in t?t.defaultValue:void 0,u=[],c={},m={};let d;if(void 0!==i){const e=i?.travelModes?.filter((e=>void 0===t.filterTravelModeType||J(e)===t.filterTravelModeType));d=i?.defaultTravelMode??void 0,void 0!==t.filterTravelModeType&&J(d)!==t.filterTravelModeType&&(d=e?.[0]??void 0),(a.isEmptyDataItem(r)||r===o&&r!==a.StraightLineParameterValue)&&(s[l]=d),e?.forEach((e=>{const t=J(e);u.push(e.id),c[e.id]=e.name,m[e.id]=function(e,t){let a;switch(e.type.toLowerCase()){case"automobile":const e={time:"driving-time",distance:"driving-distance",other:"car"};a=e[t??"other"]??e.other;break;case"walk":const s={time:"walking-time",distance:"walking-distance",other:"walk"};a=s[t??"other"]??s.other;break;case"truck":const i={time:"trucking-time",distance:"trucking-distance",other:"dashboard"};a=i[t??"other "]??i.other;break;default:const n={time:"edit-attributes",distance:"edit-attributes",other:"dashboard"};a=n[t??"other "]??n.other}return a}(e,t)}))}o!==a.StraightLineParameterValue&&!0!==t.includeStraightLine||!1!==u.includes(a.StraightLineParameterValue)||(u.push(a.StraightLineParameterValue),c[a.StraightLineParameterValue]=n??a.StraightLineParameterValue,m[a.StraightLineParameterValue]="line-straight");let p=o===a.StraightLineParameterValue?a.StraightLineParameterValue:d?.id??"";return a.isEmptyDataItem(r)||(p=r===a.StraightLineParameterValue?a.StraightLineParameterValue:r?.id??""),[{...t,choiceListLabels:c,choiceList:u,choiceListIcons:m,value:p},s]}function Q(e){const{param:t,data:a,renderedParameters:s}=e,i=t.name;if(void 0===i)return[t,a];const n=s?.[i],l=void 0===n&&!0===t.visible,r=void 0!==n&&!1===t.visible;return l?(a[i]??(a[i]=t.defaultValue),t.value=a[i]):r&&(a[i]=void 0,t.value=a[i]),[t,a]}const X=e=>void 0===e.visible||!0===e.visible,Y="value-table",Z={groupContainer:`${Y}__group-container`,groupAction:`${Y}__group-action`,groupAction1:`${Y}__group-action-1`,label:`${Y}__label`,groupHorizontal:`${Y}__horizontal-layout`,groupHorizontalRtl:`${Y}__horizontal-layout-rtl`},ee=({direction:e,entryIndex:a,values:s,parameterInfos:l,valueWithoutKey:r,removeLabel:o,onEntryDeleted:u,onValueChange:c,onSetRef:m,props:d})=>{const p=l[0],y=p?.label;return r?t.h("div",{class:`${Z.groupHorizontal} ${"rtl"===e?Z.groupHorizontal:""}`,key:a},Boolean(y)&&t.h("analysis-label",{label:y,hideHelp:!0,required:!0===p.required||p.parameterType===z}),t.h(i.AnalysisPrimitiveParameter,{...p,label:"",onValueChange:e=>c(a,l[0].name,e),onSetRef:e=>m(a,l[0].name,e),value:s[l[0].name]}),t.h("calcite-button",{kind:"neutral","icon-start":"x",appearance:"transparent",scale:"s",class:Z.groupAction1,onClick:()=>u(a),label:o})):t.h("div",{class:Z.groupContainer,key:a},t.h("calcite-button",{"icon-end":"trash",appearance:"transparent",kind:"neutral",scale:"s",class:Z.groupAction,onClick:()=>u(a),label:o}),l.filter((e=>!("visible"in e&&!1===e.visible))).map((e=>{const l="required"in e&&!0===e.required||e.parameterType===z;return t.h("calcite-label",{scale:n.UIDefaults.Scale},t.h("analysis-label",{required:l,label:e.label??e.displayName,hideHelp:!0}),t.h(i.AnalysisPrimitiveParameter,{...e,...d,label:"",onValueChange:t=>c(a,e.name,t),onSetRef:t=>m(a,e.name,t),value:s?.[e.name]}))})))};function te(e){return void 0!==e.name}const ae=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.analysisValueTableChange=t.createEvent(this,"analysisValueTableChange",7),this.analysisHelpClick=t.createEvent(this,"analysisHelpClick",7),this.direction="ltr",this.entryInputElements=new Map,this.onAddButtonClick=()=>{this.value=this.valueWithoutKey?[...this.value,void 0]:[...this.value,this.getDefaultEntry()],this.analysisValueTableChange.emit()},this.onEntryDeleted=e=>{this.value.splice(e,1),this.removeAndUpdateEntryInputElements(e),this.value=[...this.value],this.analysisValueTableChange.emit()},this.onValueChange=(e,t,a)=>{const s=a.target.value;this.valueWithoutKey?this.value[e]=s:this.value[e][t]=s;const[,i]=this.applyRulesToEntry(e);this.value[e]=i,this.analysisValueTableChange.emit()},this.onSetRef=(e,t,a)=>{const s=this.entryInputElements.get(e);if(a)if(this.valueWithoutKey)this.entryInputElements.set(e,a);else{const i={[t]:a};this.entryInputElements.set(e,{...s??{},...i})}else if(this.valueWithoutKey)this.entryInputElements.delete(e),this.value.splice(e,1);else{delete s?.[t];const a=this.value[e];a&&delete a[t]}},this.validateSelection=async()=>{let e=!0;if(this.errorMessage=void 0,this.value.length<1)e=!0!==this.required,this.errorMessage=e?void 0:this.strings.requiredMessage;else{const t=Array.from(this.entryInputElements.keys()).map((e=>{let t=[];const s=this.entryInputElements.get(e);if(this.valueWithoutKey){const e=s;!1===a.isEmptyDataItem(e)&&"checkValidity"in e&&"function"==typeof e.checkValidity?t.push(e.checkValidity()):t.push(Promise.resolve(!0))}else{const e=s;t=Object.keys(e).map((t=>{const a=e[t];return void 0!==a&&"checkValidity"in a&&"function"==typeof a.checkValidity?a.checkValidity():Promise.resolve(!0)}))}return t})),s=await Promise.all(t.flat());e=void 0!==s&&void 0===s.find((e=>!1===e))}return e&&void 0===this.errorMessage},this.getDefaultEntry=()=>{const e=this.combinedParameterInfos.filter((e=>void 0!==e.defaultValue)).map((e=>[e.name,e.defaultValue]));return Object.fromEntries(e)},this.required=!1,this.value=[],this.label=void 0,this.parameterInfos=void 0,this.UIparameterInfos=void 0,this.UIparameterInfosRules=void 0,this.valueWithoutKey=!1,this.user=void 0,this.portal=void 0,this.mapLayers=void 0,this.mapView=void 0,this.errorMessage=void 0}async checkValidity(){return Promise.resolve(this.validateSelection())}get combinedParameterInfos(){let e=this.parameterInfos??[];return void 0!==this.UIparameterInfos&&(e=this.UIparameterInfos.filter(te).map((e=>{const t=this.parameterInfos?.find((t=>t.name===e.name));return{...t,...e}}))),e}get rulesByDestination(){return O(this.UIparameterInfosRules??[])}async componentWillLoad(){if(({strings:this.strings,dir:this.direction}=await a.fetchComponentLocaleStrings(this.hostElement,t.getAssetPath("."))),void 0===this.value||0===this.value.length){const e=this.valueWithoutKey?void 0:this.getDefaultEntry();this.value=[e],!1===a.isEmptyDataItem(e)&&this.analysisValueTableChange.emit()}}render(){const e=this.value.map(((e,a)=>{const[s,i]=this.applyRulesToEntry(a);let n={};return this.valueWithoutKey?n[s[0].name]=i:n=i,t.h(ee,{direction:this.direction,entryIndex:a,values:n,valueWithoutKey:this.valueWithoutKey,parameterInfos:s,removeLabel:this.strings.removeEntryButtonLabel,onEntryDeleted:this.onEntryDeleted,onValueChange:this.onValueChange,onSetRef:this.onSetRef,props:{user:this.user,portal:this.portal,mapLayers:this.mapLayers,mapView:this.mapView}})}));return t.h(t.Host,null,t.h("analysis-label",{label:this.label,required:!!this.valueWithoutKey&&this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}),e,t.h("calcite-button",{style:this.valueWithoutKey?{marginTop:"var(--analysis-half-spacing)"}:{},appearance:"outline",kind:"neutral","icon-start":"plus",width:"full",scale:n.UIDefaults.Scale,onClick:this.onAddButtonClick},this.strings.addEntryButtonLabel),t.h("calcite-input-message",{icon:"exclamationMarkTriangle",status:a.UIInputStatus.INVALID,scale:n.UIDefaults.Scale,hidden:!0===a.isEmptyDataItem(this.errorMessage)},this.strings.requiredMessage))}removeAndUpdateEntryInputElements(e){const t=this.entryInputElements.size;if(e>=0&&e<t){const t=new Map;for(const[a,s]of this.entryInputElements){const i=a>e?a-1:a;a!==e&&t.set(i,s)}this.entryInputElements=t}}applyRulesToEntry(e){if(this.valueWithoutKey)return[this.combinedParameterInfos,this.value[e]];const t=this.rulesByDestination,a=this.value[e],s=this.entryInputElements.get(e);let i;i=void 0===s?{}:s;const n=Object.entries(i).reduce(((e,[t,a])=>(void 0!==a&&(e[t]=a),e)),{});return[this.combinedParameterInfos.map((e=>{let[s]=G({param:e,data:a,rules:t.get(e.name)??[],renderedParameters:n});return[s]=Q({param:s,data:a,renderedParameters:n}),s})),a]}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:#d4d4d4;--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height-s:7.5rem;--analysis-popover-content-min-height-m:8.75rem;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}:host{display:block;margin-bottom:var(--analysis-half-spacing)}.value-table__group-container{display:flex;flex-direction:column;border:1px var(--calcite-color-border-1) solid;border-radius:var(--calcite-border-radius);padding:var(--analysis-half-spacing) var(--analysis-half-spacing) 0 var(--analysis-half-spacing);margin-bottom:var(--analysis-half-spacing)}.value-table__group-action{align-self:flex-end}.value-table__group-action-1{align-self:flex-start}.value-table__label{margin:var(--analysis-half-spacing) 0}.value-table__horizontal-layout{display:flex;border:1px var(--calcite-color-border-1) solid;width:calc(100% - var(--analysis-half-spacing) - 1px);margin-top:-1px;padding-top:var(--analysis-half-spacing);padding-left:var(--analysis-half-spacing)}.value-table__horizontal-layout-rtl{padding-left:unset;padding-right:var(--analysis-half-spacing)}"}},[1,"analysis-value-table",{required:[516],value:[1040],label:[513],parameterInfos:[16],UIparameterInfos:[16],UIparameterInfosRules:[16],valueWithoutKey:[516,"value-without-key"],user:[16],portal:[16],mapLayers:[16],mapView:[16],errorMessage:[32],checkValidity:[64]}]);function se(){"undefined"!=typeof customElements&&["analysis-value-table","analysis-attribute-expression","analysis-boolean-input","analysis-chip-group","analysis-data-file-input","analysis-dataset-input","analysis-dataset-input-popover","analysis-date-input","analysis-expression-group","analysis-field-input","analysis-field-select","analysis-folder-input","analysis-geoenrichment-databrowser","analysis-geoenrichment-input","analysis-item-browser","analysis-item-input","analysis-label","analysis-layer-input","analysis-layer-input-popover","analysis-linear-unit-input","analysis-multiple-input","analysis-number-input","analysis-query-builder","analysis-query-entry","analysis-query-input","analysis-query-modal","analysis-query-target-select","analysis-spatial-expression","analysis-spatial-reference-input","analysis-spatial-reference-selector","analysis-string-input","analysis-summary-fields","analysis-summary-fields-popover","analysis-traffic-time-input","analysis-tree","analysis-unsupported-input","analysis-workflow-select","analysis-workflow-select-popover"].forEach((e=>{switch(e){case"analysis-value-table":customElements.get(e)||customElements.define(e,ae);break;case"analysis-attribute-expression":customElements.get(e)||l.defineCustomElement();break;case"analysis-boolean-input":customElements.get(e)||r.defineCustomElement();break;case"analysis-chip-group":customElements.get(e)||o.defineCustomElement();break;case"analysis-data-file-input":customElements.get(e)||u.defineCustomElement();break;case"analysis-dataset-input":customElements.get(e)||c.defineCustomElement();break;case"analysis-dataset-input-popover":customElements.get(e)||m.defineCustomElement();break;case"analysis-date-input":customElements.get(e)||d.defineCustomElement();break;case"analysis-expression-group":customElements.get(e)||p.defineCustomElement();break;case"analysis-field-input":customElements.get(e)||y.defineCustomElement();break;case"analysis-field-select":customElements.get(e)||h.defineCustomElement();break;case"analysis-folder-input":customElements.get(e)||f.defineCustomElement();break;case"analysis-geoenrichment-databrowser":customElements.get(e)||g.defineCustomElement();break;case"analysis-geoenrichment-input":customElements.get(e)||v.defineCustomElement();break;case"analysis-item-browser":customElements.get(e)||b.defineCustomElement();break;case"analysis-item-input":customElements.get(e)||E.defineCustomElement();break;case"analysis-label":customElements.get(e)||k.defineCustomElement();break;case"analysis-layer-input":customElements.get(e)||C.defineCustomElement();break;case"analysis-layer-input-popover":customElements.get(e)||I.defineCustomElement();break;case"analysis-linear-unit-input":customElements.get(e)||V.defineCustomElement();break;case"analysis-multiple-input":customElements.get(e)||P.defineCustomElement();break;case"analysis-number-input":customElements.get(e)||w.defineCustomElement();break;case"analysis-query-builder":customElements.get(e)||S.defineCustomElement();break;case"analysis-query-entry":customElements.get(e)||L.defineCustomElement();break;case"analysis-query-input":customElements.get(e)||q.defineCustomElement();break;case"analysis-query-modal":customElements.get(e)||x.defineCustomElement();break;case"analysis-query-target-select":customElements.get(e)||T.defineCustomElement();break;case"analysis-spatial-expression":customElements.get(e)||A.defineCustomElement();break;case"analysis-spatial-reference-input":customElements.get(e)||_.defineCustomElement();break;case"analysis-spatial-reference-selector":customElements.get(e)||D.defineCustomElement();break;case"analysis-string-input":customElements.get(e)||M.defineCustomElement();break;case"analysis-summary-fields":customElements.get(e)||U.defineCustomElement();break;case"analysis-summary-fields-popover":customElements.get(e)||R.defineCustomElement();break;case"analysis-traffic-time-input":customElements.get(e)||W.defineCustomElement();break;case"analysis-tree":customElements.get(e)||K.defineCustomElement();break;case"analysis-unsupported-input":customElements.get(e)||H.defineCustomElement();break;case"analysis-workflow-select":customElements.get(e)||B.defineCustomElement();break;case"analysis-workflow-select-popover":customElements.get(e)||N.defineCustomElement()}}))}se(),e.AnalysisValueTable=ae,e.adaptForTravelModes=F,e.applyRules=G,e.applyToolParameterDefaults=function(e){const{defaultValues:t,toolJsonParameters:a,toolUIJsonParametersByName:s}=e;return a?.forEach((e=>{const a=s?.[e.name];"esriGPParameterDirectionOutput"===e.direction||void 0!==t[e.name]||void 0!==a?.visible&&!0!==a?.visible||(t[e.name]=e.defaultValue)})),t},e.applyToolUIJsonParameterDefaults=function(e){let{defaultValues:t}=e;const{toolName:s,toolUIJsonParametersByName:i,travelModeInfo:n}=e;return Object.keys(i??{}).forEach((e=>{const l=i?.[e];void 0!==l?.name&&!0===X(l)?void 0!==n&&void 0!==s&&!0===a.isTravelModeParameter(l.name,s)?(t[l.name]=l.defaultValue,[,t]=F({param:l,data:t,travelModeInfo:n})):t[l.name]=l.defaultValue:void 0!==l?.name&&!1===l.visible&&(t[l.name]=void 0)})),t},e.applyUserSettings=function(e){const{defaultValues:t,user:s,hasAdvancedLicense:i}=e;return t.userSettings={unitSystem:s?.units,hasNAPrivilege:a.hasNAPrivilege(s),hasGEPrivilege:a.hasGeoEnrichmentPrivilege(s),hasAdvancedLicense:i},t},e.applyUserSettingsRules=function(e){const{defaultValues:t,toolUIJsonParametersByName:a,rules:s}=e,i=O(function(e){const t=e?.filter((e=>(e=>{switch(e.ruleType){case"expression":return e.expression?.includes("userSettings");case"equals":return!0===e.valueA?.toString().includes("userSettings")||!0===e.valueB?.toString().includes("userSettings");default:return!1}})(e)&&(e=>"effectParams"in e&&"defaultValue"in e.effectParams)(e)));return t??[]}(s));return Object.keys(a??{}).forEach((e=>{const s=a?.[e];if(void 0!==s?.name&&!0===X(s)){const a=i.get(e);if(void 0!==a){const[e]=G({param:s,data:t,rules:a,renderedParameters:{}});t[s.name]=e.defaultValue}}})),t},e.applyVisibilityRules=Q,e.defineCustomElement=se,e.getRulesByDestination=O,e.joinParams=function(e,t){return e.filter((e=>"esriGPParameterDirectionOutput"!==e.direction))?.map((e=>({...t.find((t=>t.name===e.name)),...e})))}}));