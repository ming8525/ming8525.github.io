/*! For license information please see arcgis-charts-scatter-plot2-e849a47e.js.LICENSE.txt */
define(["exports","./interfaces-f9fc01bd","./config-update-0eaf1dc6"],(function(e,t,i){"use strict";const s=t.proxyCustomElement(class extends t.H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.arcgisChartsDataProcessError=t.createEvent(this,"arcgisChartsDataProcessError",7),this.arcgisChartsDataProcessComplete=t.createEvent(this,"arcgisChartsDataProcessComplete",7),this.arcgisChartsLegendItemVisibilityChange=t.createEvent(this,"arcgisChartsLegendItemVisibilityChange",7),this.arcgisChartsUpdateComplete=t.createEvent(this,"arcgisChartsUpdateComplete",7),this.arcgisChartsAxesMinMaxChange=t.createEvent(this,"arcgisChartsAxesMinMaxChange",7),this.arcgisChartsSelectionComplete=t.createEvent(this,"arcgisChartsSelectionComplete",7),this.skipNextUpdate=!1,this.noRenderProps=["disableInteractions","legendPosition","legendVisibility","view"],this.dataUpdateNeededProps=["forceDataUpdate","runtimeDataFilters","inlineData"],this.updatedProps=new Set,this.config=void 0,this.inlineData=void 0,this.actionMode=void 0,this.cursorRange=void 0,this.legendPosition=void 0,this.legendVisibility=void 0,this.view=void 0,this.layer=void 0,this.selectionData=void 0,this.returnSelectionOIDs=void 0,this.returnSelectionIndexes=void 0,this.filterBySelection=void 0,this.disableInteractions=void 0,this.disableTogglingLegendItems=void 0,this.queueChartCreation=void 0,this.useAnimatedCharts=void 0,this.hideLicenceWatermark=void 0,this.enableResponsiveFeatures=void 0,this.autoDisposeChart=void 0,this.placeholder=void 0,this.selectionTheme=void 0,this.ignoreSmoothRenderingLimit=void 0,this.tooltipFormatter=void 0,this.dataLabelFormatter=void 0,this.guideTooltipFormatter=void 0,this.xAxisLabelFormatter=void 0,this.yAxisLabelFormatter=void 0,this.noDataOptions=void 0,this.displayErrorAlert=!0,this.hideLoaderAnimation=void 0,this.runtimeDataFilters=void 0,this.usePopupTemplateFieldsInfo=void 0,this.refreshOnLayerFilterChange=!0,this.showNotifyPanel=!1}handleChartOutputDataChange(e){this.arcgisChartsDataProcessComplete.emit(e.detail)}handleLegendItemVisibilityChanged(e){this.arcgisChartsLegendItemVisibilityChange.emit(e.detail)}handleUpdateCompleted(e){this.arcgisChartsUpdateComplete.emit(e.detail)}handleAxesMinMaxChange(e){this.arcgisChartsAxesMinMaxChange.emit(e.detail)}handleSelection(e){this.arcgisChartsSelectionComplete.emit(e.detail)}handleTooManySelectedElements(){!1!==this.displayErrorAlert&&(this.notifyHeading=this.strings.tooManySelectedElements.title,this.notifyMessage=this.strings.tooManySelectedElements.message,this.notifyOptions={kind:"warning",autoClose:!0,duration:"fast",active:!0},this.showNotifyPanel=!0)}handleAlertClosed(e){e.target===this.el&&(this.skipNextUpdate=!0,this.showNotifyPanel=!1)}async viewChange(e,t){await this.addExtentChangeListener(),void 0!==t&&void 0===e&&await this.refresh()}async layerChange(){await this.addLayerListeners()}async inlineDataChange(){this.updatedProps.add("inlineData")}async runtimeDataFiltersChange(){this.updatedProps.add("runtimeDataFilters")}async disableInteractionsChange(e){-1!==navigator.userAgent.search("Firefox")&&(!0===e?this.chartRef?.classList.add(i.HTMLClasses.DisableInteractions):this.chartRef?.classList.remove(i.HTMLClasses.DisableInteractions))}legendPositionChange(e){this.config=i.updateLegendPosition(e,this.config)}legendVisibilityChange(e){this.config=i.updateLegendVisibility(e,this.config)}filterBySelectionChanged(){this.config=i.resetAxesBounds(this.config)}async notify(e,t,i){return void 0!==this.chart&&this.chart.notify(e,t,i),Promise.resolve(void 0)}async errorAlert(e){!1!==this.displayErrorAlert&&(this.notifyHeading=this.strings.errorHeading,this.notifyMessage=e,this.notifyOptions={kind:"danger",autoClose:!0,active:!0},this.showNotifyPanel=!0)}async resetZoom(){return void 0!==this.chart&&this.chart.resetZoom(),Promise.resolve(void 0)}async switchSelection(){void 0!==this.chart&&!0!==this.filterBySelection&&await this.chart.switchSelection()}async clearSelection(){void 0!==this.chart&&(this.chart.clearSelection(),!0===this.filterBySelection&&await this.refresh())}async refresh(e){const{updateData:t=!0,resetAxesBounds:i=!1,updateExtent:s=!1}=e??{};this.viewExtentUpdated=s,!0===t&&this.dataUpdateIsNeeded(),!0===i&&(delete this.config?.axes?.[0]?.minimum,delete this.config?.axes?.[0]?.maximum,delete this.config?.axes?.[1]?.minimum,delete this.config?.axes?.[1]?.maximum),await this.componentDidUpdate(),this.viewExtentUpdated=!1}componentShouldUpdate(...e){const[,,t]=e;this.updatedProps.add(t);const i=!1===this.skipNextUpdate&&!1===this.noRenderProps.includes(t);return this.skipNextUpdate=!1,i}async componentWillLoad(){({strings:this.strings}=await t.fetchComponentLocaleStrings(this.el,t.getAssetPath("."))),this.debouncedChartUpdate=i.promise((async()=>{if(void 0!==this.chart){const e=Array.from(this.updatedProps);if(e.length>0){const t=e.some((e=>this.dataUpdateNeededProps.includes(e)));return this.updatedProps.clear(),await this.chart.update({newChartConfig:this.config,updateOptions:i.gatherComponentOptions({component:this,dataUpdated:t,viewExtentUpdated:this.viewExtentUpdated}),updateGlobalOptions:i.gatherComponentGlobalOptions(this)})}return Promise.resolve(void 0)}}),i.maximumNumberOfSimultaneousUpdates)}async componentDidLoad(){void 0!==this.chartRef&&await this.createChartInstance()}async componentDidUpdate(){if(void 0===this.chart&&void 0!==this.chartCreationProcessing&&(await this.chartCreationProcessing,this.chartCreationProcessing=void 0),await t.validateSeriesType([i.WebChartTypes$4.ScatterSeries],this.config),void 0!==this.config&&void 0!==this.chart&&!1===this.showNotifyPanel)try{const e=this.config?.dataSource;i.isValidDataSource(this.inlineData,e)&&void 0!==this.debouncedChartUpdate&&await this.debouncedChartUpdate.push()}catch(e){void 0!==this.chartRef&&void 0!==this.config&&(e.name===t.ErrorKeywords.ChartDisposed?(this.chart.dispose(),this.chart=void 0,this.chartRef.innerHTML="",await this.createChartInstance(!1)):(this.errorAlert(e?.message),e.name===t.ErrorKeywords.QueryFeaturesError&&this.arcgisChartsDataProcessError.emit(e.details)))}else void 0===this.chart&&void 0===this.chartCreationProcessing&&!1===this.showNotifyPanel?await this.createChartInstance():void 0!==this.placeholder&&this.notify(this.placeholder)}async disconnectedCallback(){void 0!==this.chart&&(this.removeLayerListeners(),this.removeExtentChangeListeners(),this.chart.dispose())}render(){const e=!0===this.showNotifyPanel?t.h(i.ArcgisChartsNotifyPanel,{heading:this.notifyHeading,message:this.notifyMessage,options:this.notifyOptions}):null,s=!0===this.showNotifyPanel&&"danger"===this.notifyOptions?.kind?i.HTMLClasses.Hide:`${i.WebChartTypes$4.ScatterSeries} ${i.HTMLClasses.Show}`,a=!0===this.showNotifyPanel?`${i.HTMLClasses.Show} ${i.HTMLClasses.NotifyPanel}`:i.HTMLClasses.Hide;return t.h(t.Host,null,t.h("slot",{name:t.Slot.actionBar}),t.h("div",{class:s,ref:e=>{this.chartRef=e}}),t.h("div",{class:a},e))}dataUpdateIsNeeded(){this.updatedProps.add("forceDataUpdate")}async addLayerListeners(){this.removeLayerListeners(),this.layerFilterListener=await i.addLayerFilterListener({layer:this.layer,component:this}),this.layerRendererListener=await i.addLayerRendererListener({layer:this.layer,component:this})}async addExtentChangeListener(){this.removeExtentChangeListeners(),this.extentChangeListeners=await i.addExtentChangeListener({view:this.view,layer:this.layer,component:this})}removeLayerListeners(){void 0!==this.layerFilterListener&&this.layerFilterListener.remove(),void 0!==this.layerRendererListener&&this.layerRendererListener.remove()}removeExtentChangeListeners(){void 0!==this.extentChangeListeners&&(this.extentChangeListeners.forEach((e=>e.remove())),this.extentChangeListeners=[])}checkForIncompatibleChartVersion(){const e=this.config?.version;!1!==this.displayErrorAlert&&t.getChartVersionInfo(e).versionStatus===i.WebChartVersionStatus$1.Newer&&(this.notifyHeading=this.strings.incompatibleChartVersion.title,this.notifyMessage=t.formatMessage(this.strings.incompatibleChartVersion.message,{chartVersion:e??""}),this.notifyOptions={kind:"warning",autoClose:!0,active:!0},this.showNotifyPanel=!0)}async createChartInstance(e=!0){await t.validateSeriesType([i.WebChartTypes$4.ScatterSeries],this.config),this.checkForIncompatibleChartVersion(),this.updatedProps.clear();try{const t=this.config?.dataSource;i.isValidDataSource(this.inlineData,t)&&(this.chartCreationProcessing=i.createChart({chartContainer:this.chartRef,chartConfig:this.config,options:i.gatherComponentOptions({component:this}),globalOptions:i.gatherComponentGlobalOptions(this)})),this.chart=await this.chartCreationProcessing,this.chartCreationProcessing=void 0,!0===e&&(await this.addLayerListeners(),await this.addExtentChangeListener())}catch(e){e.name===t.ErrorKeywords.QueryFeaturesError&&this.arcgisChartsDataProcessError.emit(e.details),this.errorAlert(e?.message),this.chart?.dispose(),this.chartCreationProcessing=void 0,this.chart=void 0}}static get assetsDirs(){return["t9n"]}get el(){return this}static get watchers(){return{view:["viewChange"],layer:["layerChange"],inlineData:["inlineDataChange"],runtimeDataFilters:["runtimeDataFiltersChange"],disableInteractions:["disableInteractionsChange"],legendPosition:["legendPositionChange"],legendVisibility:["legendVisibilityChange"],filterBySelection:["filterBySelectionChanged"]}}static get style(){return'.hide{display:none}.show{display:block}.notifyPanel{flex:0 1 auto}.disable-interactions{pointer-events:none}.scatterSeries{flex-grow:1;overflow-y:hidden}.scatterSeries>div{justify-content:center;align-items:center}.scatterSeries .arcgis-charts-modal-inside{padding:1em;padding-left:0}.scatterSeries .arcgis-charts-modal-inside ol{padding-left:2em}.scatterSeries .arcgis-charts-modal-curtain{width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:2001;background-color:white;opacity:0.5;opacity:1}.scatterSeries .arcgis-charts-modal-content{background:rgba(255, 255, 255, 0.8);color:black;display:inline-block;position:absolute;top:0px;left:0px;max-width:90%;max-height:90%;overflow:auto;z-index:2002;position:absolute;max-width:90%;max-height:90%;width:auto !important;height:auto !important;margin:auto !important;inset:auto !important;left:auto !important;top:auto !important}.scatterSeries .arcgis-charts-modal-header{display:block;width:100%;min-height:1.8em;background:rgba(0, 0, 0, 0.05)}.scatterSeries .arcgis-charts-modal-close{display:block;position:absolute;top:0.3em;right:0.3em;background:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ0NS4yIDEwOS4ybC00Mi40LTQyLjRMMjU2IDIxMy42IDEwOS4yIDY2LjhsLTQyLjQgNDIuNEwyMTMuNiAyNTYgNjYuOCA0MDIuOGw0Mi40IDQyLjRMMjU2IDI5OC40bDE0Ni44IDE0Ni44IDQyLjQtNDIuNEwyOTguNCAyNTYiLz48L3N2Zz4=") center center/80% no-repeat rgba(100, 100, 100, 0.1);width:1.2em;height:1.2em;cursor:pointer}.scatterSeries .arcgis-charts-modal-title{font-weight:bold;font-size:110%;padding:0.5em 1.2em 0.5em 1em}:host{width:var(--arcgis-charts-scatter-plot-width, var(--arcgis-charts-default-width));height:var(--arcgis-charts-scatter-plot-height, var(--arcgis-charts-default-height));display:flex;flex-direction:row}'}},[1,"arcgis-charts-scatter-plot",{config:[1040],inlineData:[16],actionMode:[1,"action-mode"],cursorRange:[1,"cursor-range"],legendPosition:[1,"legend-position"],legendVisibility:[4,"legend-visibility"],view:[16],layer:[16],selectionData:[16],returnSelectionOIDs:[4,"return-selection-o-i-ds"],returnSelectionIndexes:[4,"return-selection-indexes"],filterBySelection:[4,"filter-by-selection"],disableInteractions:[516,"disable-interactions"],disableTogglingLegendItems:[4,"disable-toggling-legend-items"],queueChartCreation:[516,"queue-chart-creation"],useAnimatedCharts:[516,"use-animated-charts"],hideLicenceWatermark:[516,"hide-licence-watermark"],enableResponsiveFeatures:[516,"enable-responsive-features"],autoDisposeChart:[516,"auto-dispose-chart"],placeholder:[1],selectionTheme:[16],ignoreSmoothRenderingLimit:[4,"ignore-smooth-rendering-limit"],tooltipFormatter:[16],dataLabelFormatter:[16],guideTooltipFormatter:[16],xAxisLabelFormatter:[16],yAxisLabelFormatter:[16],noDataOptions:[16],displayErrorAlert:[4,"display-error-alert"],hideLoaderAnimation:[4,"hide-loader-animation"],runtimeDataFilters:[16],usePopupTemplateFieldsInfo:[4,"use-popup-template-fields-info"],refreshOnLayerFilterChange:[4,"refresh-on-layer-filter-change"],showNotifyPanel:[32],notify:[64],errorAlert:[64],resetZoom:[64],switchSelection:[64],clearSelection:[64],refresh:[64]},[[0,"arcgisChartsJSDataProcessComplete","handleChartOutputDataChange"],[0,"arcgisChartsJSLegendItemVisibilityChange","handleLegendItemVisibilityChanged"],[0,"arcgisChartsJSUpdateComplete","handleUpdateCompleted"],[0,"arcgisChartsJSAxesMinMaxChange","handleAxesMinMaxChange"],[0,"arcgisChartsJSSelectionComplete","handleSelection"],[0,"arcgisChartsJSTooManySelectedElements","handleTooManySelectedElements"],[0,"calciteAlertClose","handleAlertClosed"]],{view:["viewChange"],layer:["layerChange"],inlineData:["inlineDataChange"],runtimeDataFilters:["runtimeDataFiltersChange"],disableInteractions:["disableInteractionsChange"],legendPosition:["legendPositionChange"],legendVisibility:["legendVisibilityChange"],filterBySelection:["filterBySelectionChanged"]}]);function a(){"undefined"!=typeof customElements&&["arcgis-charts-scatter-plot"].forEach((e=>{"arcgis-charts-scatter-plot"===e&&(customElements.get(e)||customElements.define(e,s))}))}a(),e.ArcGISChartsScatterPlot=s,e.defineCustomElement=a}));