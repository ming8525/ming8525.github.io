System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-arcgis","jimu-theme","jimu-ui/advanced/sql-expression-builder"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-ui/lib/icons/link-combined.svg":
/*!*********************************************!*\
  !*** ./jimu-ui/lib/icons/link-combined.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 40\"><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M6 30v10H0v-1h5v-9zM3.162 18.582a.5.5 0 0 1 0 .71l-1.416 1.421a2.497 2.497 0 0 0-.003 3.545c.983.983 2.56.98 3.544-.003l1.42-1.42a.504.504 0 0 1 .712.713L6 24.968a3.502 3.502 0 0 1-4.967 0 3.501 3.501 0 0 1 0-4.967l1.416-1.422a.504.504 0 0 1 .713.003m4.967-.71a.5.5 0 0 1 0 .71L4.58 22.129a.504.504 0 0 1-.713-.712l3.548-3.548a.504.504 0 0 1 .713.003m2.838-2.838a3.501 3.501 0 0 1 0 4.967l-1.42 1.419a.504.504 0 0 1-.713-.712l1.423-1.417a2.5 2.5 0 0 0 0-3.547 2.502 2.502 0 0 0-3.547 0l-1.42 1.419a.504.504 0 0 1-.713-.712l1.42-1.42a3.506 3.506 0 0 1 4.97.003M6 0v10H5V1H0V0z\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsOnlyOneDs: () => (/* binding */ checkIsOnlyOneDs),
/* harmony export */   checkOutActionConfig: () => (/* binding */ checkOutActionConfig),
/* harmony export */   getAppConfig: () => (/* binding */ getAppConfig),
/* harmony export */   getDsByWidgetId: () => (/* binding */ getDsByWidgetId),
/* harmony export */   getMessageCarryDataByWidgetId: () => (/* binding */ getMessageCarryDataByWidgetId),
/* harmony export */   getUseDataSourceInfo: () => (/* binding */ getUseDataSourceInfo),
/* harmony export */   initOutputDataSources: () => (/* binding */ initOutputDataSources),
/* harmony export */   isUseOutputDataSources: () => (/* binding */ isUseOutputDataSources)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


function isUseOutputDataSources(wId, messageType) {
    const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType);
    return messageCarryData === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource;
}
function getMessageCarryDataByWidgetId(wId, messageType) {
    var _a, _b;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const publishMessages = (_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _b === void 0 ? void 0 : _b.publishMessages;
    let messageCarryData = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource;
    publishMessages === null || publishMessages === void 0 ? void 0 : publishMessages.forEach(el => {
        const publishMessageProperty = el;
        if ((publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageCarryData) && (publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageType) === messageType) {
            messageCarryData = publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageCarryData;
        }
    });
    return messageCarryData;
}
function checkOutActionConfig(actionConfig, messageWidgetId, messageType) {
    const config = getAppConfig();
    //const messageWidgetJson = config.widgets[messageWidgetId]
    let useDataSource = null;
    const useDataSources = [];
    if (!actionConfig.useDataSource) {
        const messageWidgetUseDataSources = getDsByWidgetId(messageWidgetId, messageType);
        //if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources.length > 0) {
        if (messageWidgetUseDataSources.length > 0) {
            messageWidgetUseDataSources.forEach((useDS, index) => {
                const dsJson = config.dataSources[useDS.dataSourceId];
                let tempUseDataSource;
                if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene))) {
                    tempUseDataSource = null;
                }
                else {
                    tempUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                        dataSourceId: useDS.dataSourceId,
                        mainDataSourceId: useDS.mainDataSourceId,
                        rootDataSourceId: useDS.rootDataSourceId,
                        dataViewId: useDS.dataViewId
                    });
                    if (!useDataSource) {
                        useDataSource = tempUseDataSource;
                    }
                    useDataSources.push(tempUseDataSource);
                }
            });
        }
    }
    else {
        useDataSource = checkOutUseDataSource(messageWidgetId, actionConfig.useDataSource, messageType);
        if (actionConfig.useDataSources) {
            actionConfig.useDataSources.forEach(useDS => {
                const tempUseDataSource = checkOutUseDataSource(messageWidgetId, useDS, messageType);
                tempUseDataSource && useDataSources.push(tempUseDataSource);
            });
        }
    }
    return {
        useDataSource: useDataSource,
        useDataSources: useDataSources
    };
}
function checkOutUseDataSource(messageWidgetId, oldUseDataSource, messageType) {
    var _a, _b, _c, _d;
    const config = getAppConfig();
    //const widgetJson = config.widgets[messageWidgetId]
    const messageWidgetUseDataSources = getDsByWidgetId(messageWidgetId, messageType);
    let initUseDataSource = null;
    let isMapDs = false;
    const dsId = messageWidgetUseDataSources && messageWidgetUseDataSources[0] && messageWidgetUseDataSources[0].dataSourceId;
    if (!dsId) {
        return null;
    }
    const dsJson = config.dataSources[dsId];
    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene))) {
        isMapDs = true;
    }
    const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    const isoldUseDataSourceIsOutputDs = (_b = (_a = dsM.getDataSource(oldUseDataSource.dataSourceId)) === null || _a === void 0 ? void 0 : _a.getDataSourceJson()) === null || _b === void 0 ? void 0 : _b.isOutputFromWidget;
    if (isMapDs) {
        // webmap or webscene ds
        let isUseOldDs = false;
        if (messageWidgetUseDataSources) {
            for (let i = 0; i < messageWidgetUseDataSources.length; i++) {
                if (messageWidgetUseDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
                    isUseOldDs = true;
                    break;
                }
            }
        }
        if (isUseOldDs) {
            initUseDataSource = oldUseDataSource;
        }
        else {
            initUseDataSource = null;
        }
    }
    else {
        // featurelayer ds
        let isUseOldDs = false;
        if (messageWidgetUseDataSources) {
            for (let i = 0; i < messageWidgetUseDataSources.length; i++) {
                const oldUseDataSourceId = isoldUseDataSourceIsOutputDs ? oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.mainDataSourceId : oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.dataSourceId;
                const currentUseDataSourceId = isoldUseDataSourceIsOutputDs ? (_c = messageWidgetUseDataSources[i]) === null || _c === void 0 ? void 0 : _c.mainDataSourceId : (_d = messageWidgetUseDataSources[i]) === null || _d === void 0 ? void 0 : _d.dataSourceId;
                // support data view
                if (currentUseDataSourceId === oldUseDataSourceId) {
                    isUseOldDs = true;
                    break;
                }
            }
        }
        if (isUseOldDs) {
            initUseDataSource = oldUseDataSource;
        }
        else {
            if (messageWidgetUseDataSources && messageWidgetUseDataSources.length === 1) {
                initUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    dataSourceId: messageWidgetUseDataSources[0].dataSourceId,
                    mainDataSourceId: messageWidgetUseDataSources[0].mainDataSourceId,
                    rootDataSourceId: messageWidgetUseDataSources[0].rootDataSourceId
                });
            }
            else {
                initUseDataSource = null;
            }
        }
    }
    return initUseDataSource;
}
function getUseDataSourceInfo(widgetId, useDataSource, useDataSources, messageType) {
    var _a;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[widgetId];
    let isReadOnly = false;
    const dsRootIds = getDsRootIdsByWidgetId(widgetId);
    //if (dsRootIds && dsRootIds.length === 0 && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
    //  isReadOnly = true
    //}
    //if (!dsRootIds && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
    //  isReadOnly = true
    //}
    if (!dsRootIds || (dsRootIds === null || dsRootIds === void 0 ? void 0 : dsRootIds.length) === 0) {
        isReadOnly = checkIsOnlyOneDs(widgetJson, messageType, dsRootIds);
    }
    const fromDsIds = dsRootIds ? undefined : getDsIdsByWidgetId(widgetId, messageType);
    const dsSelectorSource = {
        isReadOnly: isReadOnly,
        useDataSource: useDataSource,
        useDataSources: useDataSources || [],
        fromRootDsIds: dsRootIds,
        fromDsIds: fromDsIds
    };
    return dsSelectorSource;
}
function getDsByWidgetId(wId, messageType) {
    var _a;
    const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType);
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const useDataSources = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const outputDataSources = initOutputDataSources(widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const bothDatasource = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.asMutable({ deep: true }).concat(outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.asMutable({ deep: true }));
    switch (messageCarryData) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource:
            return outputDataSources;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource:
            return useDataSources;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.BothDataSource:
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(bothDatasource);
    }
}
function initOutputDataSources(outputDataSources) {
    var _a;
    const ds = (_a = outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.map(dsId => {
        return {
            dataSourceId: dsId,
            mainDataSourceId: dsId,
            rootDataSourceId: null
        };
    })) !== null && _a !== void 0 ? _a : [];
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(ds);
}
function checkIsOnlyOneDs(widgetJson, messageType, dsRootIds) {
    const messageCarryData = getMessageCarryDataByWidgetId(widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.id, messageType);
    const outputDs = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) || [];
    const useDs = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) || [];
    if (dsRootIds) {
        return false;
    }
    switch (messageCarryData) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource:
            return (outputDs === null || outputDs === void 0 ? void 0 : outputDs.length) === 1;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource:
            return (useDs === null || useDs === void 0 ? void 0 : useDs.length) === 1;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.BothDataSource:
            const dsLength = outputDs.length + useDs.length;
            return dsLength === 1;
    }
}
function getAppConfig() {
    var _a, _b, _c;
    return window.jimuConfig.isBuilder ? (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig : (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appConfig;
}
function getDsRootIdsByWidgetId(wId) {
    var _a, _b;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const rootIds = [];
    const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    (_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) === null || _b === void 0 ? void 0 : _b.forEach((useDS) => {
        const ds = dsM.getDataSource(useDS.dataSourceId);
        if ((ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap || (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene) { // is root ds
            rootIds.push(useDS.dataSourceId);
        }
    });
    return rootIds.length > 0 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(rootIds) : undefined;
}
function getDsIdsByWidgetId(wId, messageType) {
    var _a;
    const messageWidgetUseDataSources = getDsByWidgetId(wId, messageType);
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_a = messageWidgetUseDataSources.map((useDS) => {
        const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        const ds = dsM.getDataSource(useDS.dataSourceId);
        let resultDs;
        if (ds && ds.isDataView) {
            // support data view
            resultDs = ds === null || ds === void 0 ? void 0 : ds.getMainDataSource();
        }
        else {
            resultDs = ds;
        }
        return resultDs === null || resultDs === void 0 ? void 0 : resultDs.id;
    })) !== null && _a !== void 0 ? _a : []);
}


/***/ }),

/***/ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceLabel: 'Source',
    sourceDescript: 'A web map or web scene, or any combination of the two.',
    selectThirdMapHint: 'Please unselect a map or scene before you choose another one. Up to two are supported.',
    initialMap: 'Initial map',
    initialMapView: 'Initial view',
    selectMap: 'Select map',
    setMapView: 'Modify initial view',
    defaultView: 'Default',
    defaultViewTip: 'Initial position of the map inherited from the web map or web scene',
    customView: 'Custom',
    customViewTip: 'Create a new position of the map',
    customViewSet: 'Modify',
    toolLabel: 'Tools',
    options: 'Options',
    selectionHighlightColor: 'Selection highlight',
    featureSelectionColor: 'Feature selection colors',
    featureHighlightFill: 'Highlight fill',
    featureHighlightOutline: 'Highlight outline',
    disableScrollZoom: 'Disable scroll zooming',
    enableScrollZoom: 'Enable scroll zooming',
    disablePopUp: 'Disable pop-up',
    enablePopUp: 'Enable pop-up',
    showPopupUponSelection: 'Show pop-up upon feature selection',
    showPopupUponSelectionTooltip: 'Selection made interactively from the map is excluded.',
    dockPopup: 'Dock the pop-up',
    sceneQualityMode: 'Scene quality mode',
    chooseALayer: 'Select a layer',
    dataRelationShip: 'Data relationship',
    mapNone: 'none',
    messageField: 'Message field',
    mapLayout: 'Tools layout',
    mapLayout_LargeAndMedium: 'Large and medium size',
    mapLayout_Small: 'Small size',
    enableClientSideQuery: 'Enable client-side query',
    clientQueryHelpTip1: 'If enabled, widgets using the web map data will apply client-side queries. Please be aware that it might take a longer time before you can see the features since the map will query more fields before it fully renders.',
    clientQueryHelpTip2: 'One web map can be enabled only once in any map widget. Web scenes do not support client-side queries.',
    clientQueryDisabledTip: 'This web map has the client-side query enabled in another map widget.',
    mapAction_TriggerLayer: 'Trigger data',
    mapAction_SetData: 'Select data',
    mapAction_ActionLayer: 'Action data',
    mapAction_Conditions: 'Conditions',
    mapAction_RelateMessage: 'Trigger / action connection',
    mapAction_TriggerLayerField: 'Select a trigger field',
    mapAction_None: 'none',
    mapAction_Equals: 'equals',
    mapAction_ActionLayerField: 'Select an action field',
    mapAction_MoreConditions: 'More conditions',
    mapAction_SetExpression: 'Please set your expression first.',
    mapAction_ChooseLayer: 'Select data',
    mapAction_AutoBind: 'Auto bound.',
    mapAction_NoLayer: 'No data.',
    mapAction_Point: 'Point',
    mapAction_Polyline: 'Polyline',
    mapAction_Polygon: 'Polygon',
    mapAction_UseLayerDefinedSymbols: 'Use layer-defined symbols',
    mapAction_UseCustomSymbols: 'Use custom symbols',
    mapZoomToAction_ZoomScale: 'Zoom scale',
    mapZoomToAction_Automatic: 'Automatic',
    mapZoomToAction_Custom: 'Custom',
    mapZoomToAction_TypeScale: 'Type a scale'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/advanced/sql-expression-builder":
/*!**********************************************************!*\
  !*** external "jimu-ui/advanced/sql-expression-builder" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/filter-action-setting.tsx ***!
  \********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui/advanced/sql-expression-builder */ "jimu-ui/advanced/sql-expression-builder");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");
/** @jsx jsx */









const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
class _FilterActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.modalStyle = {
            position: 'absolute',
            top: '0',
            bottom: '0',
            width: '259px',
            height: 'auto',
            borderRight: '',
            borderBottom: '',
            paddingBottom: '1px'
        };
        this.initOutputDataSources = (outputDataSources) => {
            var _a;
            const ds = (_a = outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.map(dsId => {
                return {
                    dataSourceId: dsId,
                    mainDataSourceId: dsId,
                    rootDataSourceId: null
                };
            })) !== null && _a !== void 0 ? _a : [];
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(ds);
        };
        this.getInitConfig = () => {
            const messageWidgetId = this.props.messageWidgetId;
            const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
            let messageUseDataSource = null;
            let actionUseDataSource = null;
            if (!this.props.config.messageUseDataSource) {
                const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(messageWidgetId, this.props.messageType);
                if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0]) && (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 1) {
                    const dsJson = config.dataSources[useDataSources[0].dataSourceId];
                    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                        messageUseDataSource = null;
                    }
                    else {
                        messageUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: useDataSources[0].dataSourceId,
                            mainDataSourceId: useDataSources[0].mainDataSourceId,
                            dataViewId: useDataSources[0].dataViewId,
                            rootDataSourceId: useDataSources[0].rootDataSourceId
                        });
                    }
                }
            }
            else {
                messageUseDataSource = this.checkAndGetInitUseDataSource(this.props.messageWidgetId, this.props.config.messageUseDataSource);
            }
            const actionWidgetId = this.props.widgetId;
            const actionWidgetJson = config.widgets[actionWidgetId];
            if (!this.props.config.actionUseDataSource) {
                if (actionWidgetJson && actionWidgetJson.useDataSources && actionWidgetJson.useDataSources[0] && actionWidgetJson.useDataSources.length === 1) {
                    const dsJson = config.dataSources[actionWidgetJson.useDataSources[0].dataSourceId];
                    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                        actionUseDataSource = null;
                    }
                    else {
                        actionUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: actionWidgetJson.useDataSources[0].dataSourceId,
                            mainDataSourceId: actionWidgetJson.useDataSources[0].mainDataSourceId,
                            dataViewId: actionWidgetJson.useDataSources[0].dataViewId,
                            rootDataSourceId: actionWidgetJson.useDataSources[0].rootDataSourceId
                        });
                    }
                }
            }
            else {
                actionUseDataSource = this.checkAndGetInitUseDataSource(this.props.widgetId, this.props.config.actionUseDataSource);
            }
            const oldActionUseDataSourceId = this.props.config.actionUseDataSource && this.props.config.actionUseDataSource.dataSourceId;
            const newActionUseDataSourceId = actionUseDataSource && actionUseDataSource.dataSourceId;
            if (newActionUseDataSourceId !== oldActionUseDataSourceId) {
                return {
                    messageUseDataSource: messageUseDataSource,
                    actionUseDataSource: actionUseDataSource,
                    sqlExprObj: null
                };
            }
            else {
                return {
                    messageUseDataSource: messageUseDataSource,
                    actionUseDataSource: actionUseDataSource,
                    sqlExprObj: this.props.config.sqlExprObj
                };
            }
        };
        this.checkAndGetInitUseDataSource = (widgetId, oldUseDataSource) => {
            var _a, _b, _c, _d;
            const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
            let initUseDataSource = null;
            let isMapDs = false;
            const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const isoldUseDataSourceIsOutputDs = (_b = (_a = dsM.getDataSource(oldUseDataSource.dataSourceId)) === null || _a === void 0 ? void 0 : _a.getDataSourceJson()) === null || _b === void 0 ? void 0 : _b.isOutputFromWidget;
            const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(widgetId, this.props.messageType);
            const dsId = useDataSources && useDataSources[0] && useDataSources[0].dataSourceId;
            if (!dsId) {
                return null;
            }
            const dsJson = config.dataSources[dsId];
            if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                isMapDs = true;
            }
            if (isMapDs) {
                // webmap or webscene ds
                let isUseOldDs = false;
                if (useDataSources) {
                    for (let i = 0; i < useDataSources.length; i++) {
                        if (useDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
                            isUseOldDs = true;
                            break;
                        }
                    }
                }
                if (isUseOldDs) {
                    initUseDataSource = oldUseDataSource;
                }
                else {
                    initUseDataSource = null;
                }
            }
            else {
                // featurelayer ds
                let isUseOldDs = false;
                if (useDataSources) {
                    for (let i = 0; i < useDataSources.length; i++) {
                        const oldUseDataSourceId = isoldUseDataSourceIsOutputDs ? oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.mainDataSourceId : oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.dataSourceId;
                        const currentUseDataSourceId = isoldUseDataSourceIsOutputDs ? (_c = useDataSources[i]) === null || _c === void 0 ? void 0 : _c.mainDataSourceId : (_d = useDataSources[i]) === null || _d === void 0 ? void 0 : _d.dataSourceId;
                        if (currentUseDataSourceId === oldUseDataSourceId) {
                            isUseOldDs = true;
                            break;
                        }
                    }
                }
                if (isUseOldDs) {
                    initUseDataSource = oldUseDataSource;
                }
                else {
                    if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 1) {
                        initUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataSourceId,
                            mainDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].mainDataSourceId,
                            dataViewId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataViewId,
                            rootDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].rootDataSourceId
                        });
                    }
                    else {
                        initUseDataSource = null;
                    }
                }
            }
            return initUseDataSource;
        };
        this.handleTriggerLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleTriggerLayerSelected(useDataSources[0]);
            }
            else {
                this.handleRemoveLayerForTriggerLayer();
            }
        };
        this.handleActionLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleActionLayerSelected(useDataSources[0]);
            }
            else {
                this.handleRemoveLayerForActionLayer();
            }
        };
        this.handleTriggerLayerSelected = (currentSelectedDs) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('messageUseDataSource', currentSelectedDs)
            });
        };
        this.handleActionLayerSelected = (currentSelectedDs) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('actionUseDataSource', currentSelectedDs).set('sqlExprObj', null)
            });
        };
        this.handleRemoveLayerForTriggerLayer = () => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('messageUseDataSource', null)
            });
        };
        this.handleRemoveLayerForActionLayer = () => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('actionUseDataSource', null).set('sqlExprObj', null)
            });
        };
        this.showSqlExprPopup = () => {
            this.setState({ isSqlExprShow: true });
        };
        this.toggleSqlExprPopup = () => {
            this.setState({ isSqlExprShow: !this.state.isSqlExprShow });
        };
        this.onSqlExprBuilderChange = (sqlExprObj) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('sqlExprObj', sqlExprObj)
            });
        };
        this.onMessageFieldSelected = (allSelectedFields, ds) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('messageUseDataSource', {
                    dataSourceId: this.props.config.messageUseDataSource.dataSourceId,
                    mainDataSourceId: this.props.config.messageUseDataSource.mainDataSourceId,
                    dataViewId: this.props.config.messageUseDataSource.dataViewId,
                    rootDataSourceId: this.props.config.messageUseDataSource.rootDataSourceId,
                    fields: allSelectedFields.map(f => f.jimuName)
                })
            });
        };
        this.onActionFieldSelected = (allSelectedFields, ds) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('actionUseDataSource', {
                    dataSourceId: this.props.config.actionUseDataSource.dataSourceId,
                    mainDataSourceId: this.props.config.actionUseDataSource.mainDataSourceId,
                    dataViewId: this.props.config.actionUseDataSource.dataViewId,
                    rootDataSourceId: this.props.config.actionUseDataSource.rootDataSourceId,
                    fields: allSelectedFields.map(f => f.jimuName)
                })
            });
        };
        this.swicthEnabledDataRelationShip = (checked) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('enabledDataRelationShip', checked)
            });
        };
        this.checkTrigerLayerIsSameToActionLayer = () => {
            if (this.props.config.messageUseDataSource && this.props.config.actionUseDataSource) {
                if (this.props.config.messageUseDataSource.mainDataSourceId === this.props.config.actionUseDataSource.mainDataSourceId &&
                    this.props.config.messageUseDataSource.rootDataSourceId === this.props.config.actionUseDataSource.rootDataSourceId) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        this.getDsRootIdsByWidgetId = (wId) => {
            var _a, _b, _c, _d;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[wId];
            const rootIds = [];
            const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) === null || _d === void 0 ? void 0 : _d.forEach((useDS) => {
                const ds = dsM.getDataSource(useDS.dataSourceId);
                if ((ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap || (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene) { // is root ds
                    rootIds.push(useDS.dataSourceId);
                }
            });
            return rootIds.length > 0 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(rootIds) : undefined;
        };
        this.getDsIdsByWidgetId = (wId) => {
            var _a;
            const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(wId, this.props.messageType);
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_a = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.map((useDS) => useDS === null || useDS === void 0 ? void 0 : useDS.mainDataSourceId)) !== null && _a !== void 0 ? _a : []);
        };
        this.getDsSelectorSourceData = (widgetId, useDataSource) => {
            var _a, _b, _c;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const dsRootIds = this.getDsRootIdsByWidgetId(widgetId);
            const isReadOnly = _action_utils__WEBPACK_IMPORTED_MODULE_8__.checkIsOnlyOneDs(widgetJson, this.props.messageType, dsRootIds);
            const useDataSources = (useDataSource && useDataSource.dataSourceId)
                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([useDataSource])
                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            const fromDsIds = dsRootIds ? undefined : this.getDsIdsByWidgetId(widgetId);
            const dsSelectorSource = {
                isReadOnly: isReadOnly,
                useDataSources: useDataSources,
                fromRootDsIds: dsRootIds,
                fromDsIds: fromDsIds
            };
            return dsSelectorSource;
        };
        this.checkIsDisableDataView = (widgetId) => {
            var _a, _b, _c, _d;
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange) {
                return true;
            }
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            if (widgetJson) {
                const widgetLabel = (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _d === void 0 ? void 0 : _d.label;
                if (widgetLabel === 'Map') {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        this.modalStyle.borderRight = '1px solid black';
        this.modalStyle.borderBottom = '1px solid black';
        this.state = {
            isShowLayerList: false,
            currentLayerType: null,
            isSqlExprShow: false
        };
    }
    componentDidMount() {
        const initConfig = this.getInitConfig();
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: this.props.config.set('messageUseDataSource', initConfig.messageUseDataSource)
                .set('actionUseDataSource', initConfig.actionUseDataSource).set('sqlExprObj', initConfig.sqlExprObj)
        });
    }
    getStyle(theme) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .setting-header {
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(0)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }

      .sql-expr-display {
        width: 100%;
        height: auto;
        min-height: 60px;
        line-height: 25px;
        padding: 3px 5px;
        color: ${theme.colors.palette.dark[300]};
        border: 1px solid ${theme.colors.palette.light[500]};
      }

      .relate-panel-left {
        flex: auto;
        .action-select-chooser {
          margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
        }
      }
    `;
    }
    render() {
        var _a, _b;
        const actionUseDataSourceInstance = this.props.config.actionUseDataSource &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.props.config.actionUseDataSource.dataSourceId);
        const { theme } = this.props;
        const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.messageUseDataSource);
        const actionDsSelectorSourceData = this.getDsSelectorSourceData(this.props.widgetId, this.props.config.actionUseDataSource);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_TriggerLayer }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: triggerDsSelectorSourceData.useDataSources, fromRootDsIds: triggerDsSelectorSourceData.fromRootDsIds, fromDsIds: triggerDsSelectorSourceData.fromDsIds, closeDataSourceListOnChange: true, disableRemove: () => triggerDsSelectorSourceData.isReadOnly, disableDataSourceList: triggerDsSelectorSourceData.isReadOnly, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, onChange: this.handleTriggerLayerChange, widgetId: this.props.messageWidgetId, disableDataView: true, hideDataView: this.checkIsDisableDataView(this.props.messageWidgetId), enableToSelectOutputDsFromSelf: true })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_ActionLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_ActionLayer }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: actionDsSelectorSourceData.useDataSources, fromRootDsIds: actionDsSelectorSourceData.fromRootDsIds, fromDsIds: actionDsSelectorSourceData.fromDsIds, closeDataSourceListOnChange: true, disableRemove: () => actionDsSelectorSourceData.isReadOnly, disableDataSourceList: actionDsSelectorSourceData.isReadOnly, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, onChange: this.handleActionLayerChange, widgetId: this.props.widgetId, hideDataView: true, enableToSelectOutputDsFromSelf: true })),
            this.props.config && this.props.config.messageUseDataSource && this.props.config.actionUseDataSource &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_Conditions', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_Conditions }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_RelateMessage', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_RelateMessage }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: this.props.config.enabledDataRelationShip, onChange: evt => { this.swicthEnabledDataRelationShip(evt.target.checked); } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Collapse, { isOpen: this.props.config.enabledDataRelationShip, className: 'w-100' },
                            this.checkTrigerLayerIsSameToActionLayer() &&
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 border p-1 mr-2' }, this.props.intl.formatMessage({ id: 'mapAction_AutoBind', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_AutoBind })),
                            !this.checkTrigerLayerIsSameToActionLayer() && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 d-flex align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column relate-panel-left' },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.FieldSelector, { className: 'w-100', useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([(_a = this.props.config.messageUseDataSource) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })]), isDataSourceDropDownHidden: true, placeholder: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayerField', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_TriggerLayerField }), onChange: this.onMessageFieldSelected, useDropdown: true, isSearchInputHidden: true, selectedFields: this.props.config.messageUseDataSource && this.props.config.messageUseDataSource.fields
                                            ? this.props.config.messageUseDataSource.fields
                                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]) }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.FieldSelector, { className: 'w-100 action-select-chooser', placeholder: this.props.intl.formatMessage({ id: 'mapAction_ActionLayerField', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_ActionLayerField }), useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([(_b = this.props.config.actionUseDataSource) === null || _b === void 0 ? void 0 : _b.asMutable({ deep: true })]), isDataSourceDropDownHidden: true, onChange: this.onActionFieldSelected, useDropdown: true, isSearchInputHidden: true, selectedFields: this.props.config.actionUseDataSource && this.props.config.actionUseDataSource.fields
                                            ? this.props.config.actionUseDataSource.fields
                                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]) })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: 'flex-none', width: 12, height: 40, color: theme.colors.dark[400], icon: __webpack_require__(/*! jimu-ui/lib/icons/link-combined.svg */ "./jimu-ui/lib/icons/link-combined.svg") })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'link', disabled: !this.props.config.actionUseDataSource, className: 'w-100 d-flex justify-content-start', onClick: this.showSqlExprPopup },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 text-truncate', style: { textAlign: 'start' } }, this.props.intl.formatMessage({ id: 'mapAction_MoreConditions', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_MoreConditions }))),
                        this.props.config.actionUseDataSource && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.config.actionUseDataSource }, (ds) => {
                            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_6__.SqlExpressionBuilderPopup, { dataSource: ds, mode: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SqlExpressionMode.Simple, isOpen: this.state.isSqlExprShow, toggle: this.toggleSqlExprPopup, expression: this.props.config.sqlExprObj, onChange: (sqlExprObj) => { this.onSqlExprBuilderChange(sqlExprObj); } }));
                        })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'sql-expr-display' }, this.props.config.sqlExprObj && actionUseDataSourceInstance
                            ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(this.props.config.sqlExprObj, actionUseDataSourceInstance).displaySQL
                            : this.props.intl.formatMessage({ id: 'mapAction_SetExpression', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_SetExpression }))))));
    }
}
_FilterActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        messageUseDataSource: null,
        actionUseDataSource: null,
        sqlExprObj: null,
        enabledDataRelationShip: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_FilterActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkw7QUFDeEk7QUFFNUMsU0FBUyxzQkFBc0IsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7SUFDM0UsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQ3hFLE9BQU8sZ0JBQWdCLEtBQUssdURBQWdCLENBQUMsZ0JBQWdCO0FBQy9ELENBQUM7QUFFTSxTQUFTLDZCQUE2QixDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDbEYsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLGVBQWUsR0FBRyxnQkFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsZUFBZTtJQUM3RCxJQUFJLGdCQUFnQixHQUFHLHVEQUFnQixDQUFDLGFBQWE7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFLENBQUM7WUFDcEcsZ0JBQWdCLEdBQUcsc0JBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCO1FBQzdELENBQUM7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VUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsR0FDL0csQ0FDSDt3QkFDSCxDQUFDLENBQ3FCLENBQ1g7b0JBQ2IsK0NBQUMsMkVBQVU7d0JBQ1Qsd0RBQUssU0FBUyxFQUFDLGtCQUFrQixJQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksMkJBQTJCOzRCQUMxRCxDQUFDLENBQUMsc0RBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLDJCQUEyQixDQUFDLENBQUMsVUFBVTs0QkFDcEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSx5QkFBeUIsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQ3pILENBQ0ssQ0FDRSxDQUNmLENBQ1A7SUFDSCxDQUFDOztBQXJkTSxpQ0FBWSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxvREFBUyxDQUFDO1FBQ2hCLG9CQUFvQixFQUFFLElBQUk7UUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixVQUFVLEVBQUUsSUFBSTtRQUNoQix1QkFBdUIsRUFBRSxJQUFJO0tBQzlCLENBQUM7Q0FDSDtBQWlkSCxpRUFBZSxxREFBUyxDQUFDLG9CQUFvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL2xpbmstY29tYmluZWQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL21lc3NhZ2UtYWN0aW9ucy9hY3Rpb24tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZpbHRlci1hY3Rpb24tc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIgNDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTYgMzB2MTBIMHYtMWg1di05ek0zLjE2MiAxOC41ODJhLjUuNSAwIDAgMSAwIC43MWwtMS40MTYgMS40MjFhMi40OTcgMi40OTcgMCAwIDAtLjAwMyAzLjU0NWMuOTgzLjk4MyAyLjU2Ljk4IDMuNTQ0LS4wMDNsMS40Mi0xLjQyYS41MDQuNTA0IDAgMCAxIC43MTIuNzEzTDYgMjQuOTY4YTMuNTAyIDMuNTAyIDAgMCAxLTQuOTY3IDAgMy41MDEgMy41MDEgMCAwIDEgMC00Ljk2N2wxLjQxNi0xLjQyMmEuNTA0LjUwNCAwIDAgMSAuNzEzLjAwM200Ljk2Ny0uNzFhLjUuNSAwIDAgMSAwIC43MUw0LjU4IDIyLjEyOWEuNTA0LjUwNCAwIDAgMS0uNzEzLS43MTJsMy41NDgtMy41NDhhLjUwNC41MDQgMCAwIDEgLjcxMy4wMDNtMi44MzgtMi44MzhhMy41MDEgMy41MDEgMCAwIDEgMCA0Ljk2N2wtMS40MiAxLjQxOWEuNTA0LjUwNCAwIDAgMS0uNzEzLS43MTJsMS40MjMtMS40MTdhMi41IDIuNSAwIDAgMCAwLTMuNTQ3IDIuNTAyIDIuNTAyIDAgMCAwLTMuNTQ3IDBsLTEuNDIgMS40MTlhLjUwNC41MDQgMCAwIDEtLjcxMy0uNzEybDEuNDItMS40MmEzLjUwNiAzLjUwNiAwIDAgMSA0Ljk3LjAwM002IDB2MTBINVYxSDBWMHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VUeXBlLCBNZXNzYWdlQ2FycnlEYXRhLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIElNV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VPdXRwdXREYXRhU291cmNlcyAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xuICBsZXQgbWVzc2FnZUNhcnJ5RGF0YSA9IE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZVxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcbiAgICBpZiAocHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YSAmJiBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXG4gICAgfVxuICB9KVxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcbiAgdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3V0QWN0aW9uQ29uZmlnIChhY3Rpb25Db25maWc6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8QWN0aW9uQ29uZmlnPiwgbWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxuXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXG4gIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXG4gICAgICAgIGxldCB0ZW1wVXNlRGF0YVNvdXJjZVxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURTLm1haW5EYXRhU291cmNlSWQsXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLCBtZXNzYWdlVHlwZSlcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBVc2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgdXNlRFMsIG1lc3NhZ2VUeXBlKVxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tPdXRVc2VEYXRhU291cmNlIChtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgb2xkVXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxuXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcbiAgaWYgKCFkc0lkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1tkc0lkXVxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICBpc01hcERzID0gdHJ1ZVxuICB9XG5cbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcblxuICBpZiAoaXNNYXBEcykge1xuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxuICAgIH0gZWxzZSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1VzZU9sZERzKSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcbiAgLy9pZiAoZHNSb290SWRzICYmIGRzUm9vdElkcy5sZW5ndGggPT09IDAgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXG4gIC8vfVxuXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXG4gIC8vfVxuXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XG4gICAgaXNSZWFkT25seSA9IGNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGUsIGRzUm9vdElkcylcbiAgfVxuXG4gIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IGdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXG4gICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcbiAgfVxuXG4gIHJldHVybiBkc1NlbGVjdG9yU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcbiAgY29uc3QgYm90aERhdGFzb3VyY2UgPSB1c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KS5jb25jYXQob3V0cHV0RGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxuICAgICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2VzXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xuICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXG4gICAgfVxuICB9KSA/PyBbXVxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBvdXRwdXREcyA9IHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzIHx8IFtdXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cbiAgaWYgKGRzUm9vdElkcykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiB1c2VEcz8ubGVuZ3RoID09PSAxXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcbiAgICAgIHJldHVybiBkc0xlbmd0aCA9PT0gMVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xuICByZXR1cm4gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWdcbn1cblxuZnVuY3Rpb24gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcpIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3Qgcm9vdElkcyA9IFtdXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICB9XG4gIH0pXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxuICAgIGxldCByZXN1bHREc1xuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XG4gICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHREcyA9IGRzXG4gICAgfVxuICAgIHJldHVybiByZXN1bHREcz8uaWRcbiAgfSkgPz8gW10pXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNvdXJjZUxhYmVsOiAnU291cmNlJyxcbiAgc291cmNlRGVzY3JpcHQ6ICdBIHdlYiBtYXAgb3Igd2ViIHNjZW5lLCBvciBhbnkgY29tYmluYXRpb24gb2YgdGhlIHR3by4nLFxuICBzZWxlY3RUaGlyZE1hcEhpbnQ6ICdQbGVhc2UgdW5zZWxlY3QgYSBtYXAgb3Igc2NlbmUgYmVmb3JlIHlvdSBjaG9vc2UgYW5vdGhlciBvbmUuIFVwIHRvIHR3byBhcmUgc3VwcG9ydGVkLicsXG4gIGluaXRpYWxNYXA6ICdJbml0aWFsIG1hcCcsXG4gIGluaXRpYWxNYXBWaWV3OiAnSW5pdGlhbCB2aWV3JyxcbiAgc2VsZWN0TWFwOiAnU2VsZWN0IG1hcCcsXG4gIHNldE1hcFZpZXc6ICdNb2RpZnkgaW5pdGlhbCB2aWV3JyxcbiAgZGVmYXVsdFZpZXc6ICdEZWZhdWx0JyxcbiAgZGVmYXVsdFZpZXdUaXA6ICdJbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBtYXAgaW5oZXJpdGVkIGZyb20gdGhlIHdlYiBtYXAgb3Igd2ViIHNjZW5lJyxcbiAgY3VzdG9tVmlldzogJ0N1c3RvbScsXG4gIGN1c3RvbVZpZXdUaXA6ICdDcmVhdGUgYSBuZXcgcG9zaXRpb24gb2YgdGhlIG1hcCcsXG4gIGN1c3RvbVZpZXdTZXQ6ICdNb2RpZnknLFxuICB0b29sTGFiZWw6ICdUb29scycsXG4gIG9wdGlvbnM6ICdPcHRpb25zJyxcbiAgc2VsZWN0aW9uSGlnaGxpZ2h0Q29sb3I6ICdTZWxlY3Rpb24gaGlnaGxpZ2h0JyxcbiAgZmVhdHVyZVNlbGVjdGlvbkNvbG9yOiAnRmVhdHVyZSBzZWxlY3Rpb24gY29sb3JzJyxcbiAgZmVhdHVyZUhpZ2hsaWdodEZpbGw6ICdIaWdobGlnaHQgZmlsbCcsXG4gIGZlYXR1cmVIaWdobGlnaHRPdXRsaW5lOiAnSGlnaGxpZ2h0IG91dGxpbmUnLFxuICBkaXNhYmxlU2Nyb2xsWm9vbTogJ0Rpc2FibGUgc2Nyb2xsIHpvb21pbmcnLFxuICBlbmFibGVTY3JvbGxab29tOiAnRW5hYmxlIHNjcm9sbCB6b29taW5nJyxcbiAgZGlzYWJsZVBvcFVwOiAnRGlzYWJsZSBwb3AtdXAnLFxuICBlbmFibGVQb3BVcDogJ0VuYWJsZSBwb3AtdXAnLFxuICBzaG93UG9wdXBVcG9uU2VsZWN0aW9uOiAnU2hvdyBwb3AtdXAgdXBvbiBmZWF0dXJlIHNlbGVjdGlvbicsXG4gIHNob3dQb3B1cFVwb25TZWxlY3Rpb25Ub29sdGlwOiAnU2VsZWN0aW9uIG1hZGUgaW50ZXJhY3RpdmVseSBmcm9tIHRoZSBtYXAgaXMgZXhjbHVkZWQuJyxcbiAgZG9ja1BvcHVwOiAnRG9jayB0aGUgcG9wLXVwJyxcbiAgc2NlbmVRdWFsaXR5TW9kZTogJ1NjZW5lIHF1YWxpdHkgbW9kZScsXG4gIGNob29zZUFMYXllcjogJ1NlbGVjdCBhIGxheWVyJyxcbiAgZGF0YVJlbGF0aW9uU2hpcDogJ0RhdGEgcmVsYXRpb25zaGlwJyxcbiAgbWFwTm9uZTogJ25vbmUnLFxuICBtZXNzYWdlRmllbGQ6ICdNZXNzYWdlIGZpZWxkJyxcbiAgbWFwTGF5b3V0OiAnVG9vbHMgbGF5b3V0JyxcbiAgbWFwTGF5b3V0X0xhcmdlQW5kTWVkaXVtOiAnTGFyZ2UgYW5kIG1lZGl1bSBzaXplJyxcbiAgbWFwTGF5b3V0X1NtYWxsOiAnU21hbGwgc2l6ZScsXG4gIGVuYWJsZUNsaWVudFNpZGVRdWVyeTogJ0VuYWJsZSBjbGllbnQtc2lkZSBxdWVyeScsXG4gIGNsaWVudFF1ZXJ5SGVscFRpcDE6ICdJZiBlbmFibGVkLCB3aWRnZXRzIHVzaW5nIHRoZSB3ZWIgbWFwIGRhdGEgd2lsbCBhcHBseSBjbGllbnQtc2lkZSBxdWVyaWVzLiBQbGVhc2UgYmUgYXdhcmUgdGhhdCBpdCBtaWdodCB0YWtlIGEgbG9uZ2VyIHRpbWUgYmVmb3JlIHlvdSBjYW4gc2VlIHRoZSBmZWF0dXJlcyBzaW5jZSB0aGUgbWFwIHdpbGwgcXVlcnkgbW9yZSBmaWVsZHMgYmVmb3JlIGl0IGZ1bGx5IHJlbmRlcnMuJyxcbiAgY2xpZW50UXVlcnlIZWxwVGlwMjogJ09uZSB3ZWIgbWFwIGNhbiBiZSBlbmFibGVkIG9ubHkgb25jZSBpbiBhbnkgbWFwIHdpZGdldC4gV2ViIHNjZW5lcyBkbyBub3Qgc3VwcG9ydCBjbGllbnQtc2lkZSBxdWVyaWVzLicsXG4gIGNsaWVudFF1ZXJ5RGlzYWJsZWRUaXA6ICdUaGlzIHdlYiBtYXAgaGFzIHRoZSBjbGllbnQtc2lkZSBxdWVyeSBlbmFibGVkIGluIGFub3RoZXIgbWFwIHdpZGdldC4nLFxuXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXI6ICdUcmlnZ2VyIGRhdGEnLFxuICBtYXBBY3Rpb25fU2V0RGF0YTogJ1NlbGVjdCBkYXRhJyxcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyOiAnQWN0aW9uIGRhdGEnLFxuICBtYXBBY3Rpb25fQ29uZGl0aW9uczogJ0NvbmRpdGlvbnMnLFxuICBtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZTogJ1RyaWdnZXIgLyBhY3Rpb24gY29ubmVjdGlvbicsXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxuICBtYXBBY3Rpb25fTm9uZTogJ25vbmUnLFxuICBtYXBBY3Rpb25fRXF1YWxzOiAnZXF1YWxzJyxcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQ6ICdTZWxlY3QgYW4gYWN0aW9uIGZpZWxkJyxcbiAgbWFwQWN0aW9uX01vcmVDb25kaXRpb25zOiAnTW9yZSBjb25kaXRpb25zJyxcbiAgbWFwQWN0aW9uX1NldEV4cHJlc3Npb246ICdQbGVhc2Ugc2V0IHlvdXIgZXhwcmVzc2lvbiBmaXJzdC4nLFxuICBtYXBBY3Rpb25fQ2hvb3NlTGF5ZXI6ICdTZWxlY3QgZGF0YScsXG4gIG1hcEFjdGlvbl9BdXRvQmluZDogJ0F1dG8gYm91bmQuJyxcbiAgbWFwQWN0aW9uX05vTGF5ZXI6ICdObyBkYXRhLicsXG4gIG1hcEFjdGlvbl9Qb2ludDogJ1BvaW50JyxcbiAgbWFwQWN0aW9uX1BvbHlsaW5lOiAnUG9seWxpbmUnLFxuICBtYXBBY3Rpb25fUG9seWdvbjogJ1BvbHlnb24nLFxuICBtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9sczogJ1VzZSBsYXllci1kZWZpbmVkIHN5bWJvbHMnLFxuICBtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9sczogJ1VzZSBjdXN0b20gc3ltYm9scycsXG4gIG1hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGU6ICdab29tIHNjYWxlJyxcbiAgbWFwWm9vbVRvQWN0aW9uX0F1dG9tYXRpYzogJ0F1dG9tYXRpYycsXG4gIG1hcFpvb21Ub0FjdGlvbl9DdXN0b206ICdDdXN0b20nLFxuICBtYXBab29tVG9BY3Rpb25fVHlwZVNjYWxlOiAnVHlwZSBhIHNjYWxlJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NxbF9leHByZXNzaW9uX2J1aWxkZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsIGNzcywganN4LCB0eXBlIEFjdGlvblNldHRpbmdQcm9wcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIHBvbGlzaGVkLCBnZXRBcHBTdG9yZSwgSW1tdXRhYmxlLFxuICB0eXBlIFVzZURhdGFTb3VyY2UsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCB0eXBlIElNRmllbGRTY2hlbWEsIHR5cGUgSU1TcWxFeHByZXNzaW9uLFxuICBkYXRhU291cmNlVXRpbHMsIERhdGFTb3VyY2VNYW5hZ2VyLCBNZXNzYWdlVHlwZSwgU3FsRXhwcmVzc2lvbk1vZGUsIHR5cGUgSW1tdXRhYmxlQXJyYXksIEFsbERhdGFTb3VyY2VUeXBlc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIFN3aXRjaCwgQ29sbGFwc2UgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7IEZpZWxkU2VsZWN0b3IsIERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbmltcG9ydCB7IFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXAgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXInXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5pbXBvcnQgKiBhcyBhY3Rpb25VdGlscyBmcm9tICcuL2FjdGlvbi11dGlscydcblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcbn1cblxuaW50ZXJmYWNlIFN0YXRlcyB7XG4gIGlzU2hvd0xheWVyTGlzdDogYm9vbGVhblxuICBjdXJyZW50TGF5ZXJUeXBlOiAndHJpZ2dlcicgfCAnYWN0aW9uJ1xuICBpc1NxbEV4cHJTaG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBDb25maWcge1xuICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxuICBhY3Rpb25Vc2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXG4gIHNxbEV4cHJPYmo/OiBJTVNxbEV4cHJlc3Npb25cblxuICBlbmFibGVkRGF0YVJlbGF0aW9uU2hpcD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxuXG5jb25zdCBEU1NlbGVjdG9yVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcblxuY2xhc3MgX0ZpbHRlckFjdGlvblNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFjdGlvblNldHRpbmdQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLCBTdGF0ZXM+IHtcbiAgbW9kYWxTdHlsZTogYW55ID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzAnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIHdpZHRoOiAnMjU5cHgnLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGJvcmRlclJpZ2h0OiAnJyxcbiAgICBib3JkZXJCb3R0b206ICcnLFxuICAgIHBhZGRpbmdCb3R0b206ICcxcHgnXG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJSaWdodCA9ICcxcHggc29saWQgYmxhY2snXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgYmxhY2snXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNTaG93TGF5ZXJMaXN0OiBmYWxzZSxcbiAgICAgIGN1cnJlbnRMYXllclR5cGU6IG51bGwsXG4gICAgICBpc1NxbEV4cHJTaG93OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xuICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2U6IG51bGwsXG4gICAgICBhY3Rpb25Vc2VEYXRhU291cmNlOiBudWxsLFxuICAgICAgc3FsRXhwck9iajogbnVsbCxcbiAgICAgIGVuYWJsZWREYXRhUmVsYXRpb25TaGlwOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGluaXRPdXRwdXREYXRhU291cmNlcyA9IChvdXRwdXREYXRhU291cmNlcyk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+ID0+IHtcbiAgICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICAgIHJvb3REYXRhU291cmNlSWQ6IG51bGxcbiAgICAgIH1cbiAgICB9KSA/PyBbXVxuICAgIHJldHVybiBJbW11dGFibGUoZHMpXG4gIH1cblxuICBnZXRJbml0Q29uZmlnID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRJZCA9IHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkXG4gICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyLmFwcENvbmZpZ1xuXG4gICAgbGV0IG1lc3NhZ2VVc2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgbGV0IGFjdGlvblVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcblxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcz8uWzBdICYmIHVzZURhdGFTb3VyY2VzPy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZF1cbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XG4gICAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRGF0YVNvdXJjZXNbMF0uZGF0YVZpZXdJZCxcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VVc2VEYXRhU291cmNlID0gdGhpcy5jaGVja0FuZEdldEluaXRVc2VEYXRhU291cmNlKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25XaWRnZXRJZCA9IHRoaXMucHJvcHMud2lkZ2V0SWRcbiAgICBjb25zdCBhY3Rpb25XaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbYWN0aW9uV2lkZ2V0SWRdXG5cbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpIHtcbiAgICAgIGlmIChhY3Rpb25XaWRnZXRKc29uICYmIGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXSAmJiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRdXG4gICAgICAgIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xuICAgICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgZGF0YVZpZXdJZDogYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhVmlld0lkLFxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5yb290RGF0YVNvdXJjZUlkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gdGhpcy5jaGVja0FuZEdldEluaXRVc2VEYXRhU291cmNlKHRoaXMucHJvcHMud2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpXG4gICAgfVxuXG4gICAgY29uc3Qgb2xkQWN0aW9uVXNlRGF0YVNvdXJjZUlkID0gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZFxuICAgIGNvbnN0IG5ld0FjdGlvblVzZURhdGFTb3VyY2VJZCA9IGFjdGlvblVzZURhdGFTb3VyY2UgJiYgYWN0aW9uVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWRcbiAgICBpZiAobmV3QWN0aW9uVXNlRGF0YVNvdXJjZUlkICE9PSBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2VVc2VEYXRhU291cmNlOiBtZXNzYWdlVXNlRGF0YVNvdXJjZSxcbiAgICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogYWN0aW9uVXNlRGF0YVNvdXJjZSxcbiAgICAgICAgc3FsRXhwck9iajogbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbWVzc2FnZVVzZURhdGFTb3VyY2UsXG4gICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2U6IGFjdGlvblVzZURhdGFTb3VyY2UsXG4gICAgICAgIHNxbEV4cHJPYmo6IHRoaXMucHJvcHMuY29uZmlnLnNxbEV4cHJPYmpcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0FuZEdldEluaXRVc2VEYXRhU291cmNlID0gKHdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXIuYXBwQ29uZmlnXG4gICAgbGV0IGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgIGxldCBpc01hcERzID0gZmFsc2VcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSBhY3Rpb25VdGlscy5nZXREc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXG4gICAgY29uc3QgZHNJZCA9IHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzWzBdICYmIHVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxuICAgIGlmICghZHNJZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cbiAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgIGlzTWFwRHMgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGlzTWFwRHMpIHtcbiAgICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xuICAgICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxuICAgICAgaWYgKHVzZURhdGFTb3VyY2VzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcbiAgICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNVc2VPbGREcykge1xuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcbiAgICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IHVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogdXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxuICAgICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcbiAgICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNVc2VPbGREcykge1xuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1c2VEYXRhU291cmNlcz8ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0ubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVZpZXdJZCxcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0ucm9vdERhdGFTb3VyY2VJZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBpbml0Q29uZmlnID0gdGhpcy5nZXRJbml0Q29uZmlnKClcblxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywgaW5pdENvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcbiAgICAgICAgLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkuc2V0KCdzcWxFeHByT2JqJywgaW5pdENvbmZpZy5zcWxFeHByT2JqKVxuICAgIH0pXG4gIH1cblxuICBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogJHtwb2xpc2hlZC5yZW0oMTApfSAke3BvbGlzaGVkLnJlbSgxNil9ICR7cG9saXNoZWQucmVtKDApfSAke3BvbGlzaGVkLnJlbSgxNil9XG4gICAgICB9XG5cbiAgICAgIC5kZWxldGVJY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgIH1cblxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAuc3FsLWV4cHItZGlzcGxheSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzMwMF19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzUwMF19O1xuICAgICAgfVxuXG4gICAgICAucmVsYXRlLXBhbmVsLWxlZnQge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAuYWN0aW9uLXNlbGVjdC1jaG9vc2VyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3BvbGlzaGVkLnJlbSgxMil9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9XG5cbiAgaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCh1c2VEYXRhU291cmNlc1swXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllcigpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWN0aW9uTGF5ZXJDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmhhbmRsZUFjdGlvbkxheWVyU2VsZWN0ZWQodXNlRGF0YVNvdXJjZXNbMF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTGF5ZXJGb3JBY3Rpb25MYXllcigpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVHJpZ2dlckxheWVyU2VsZWN0ZWQgPSAoY3VycmVudFNlbGVjdGVkRHM6IFVzZURhdGFTb3VyY2UpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIGN1cnJlbnRTZWxlY3RlZERzKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkID0gKGN1cnJlbnRTZWxlY3RlZERzOiBVc2VEYXRhU291cmNlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGN1cnJlbnRTZWxlY3RlZERzKS5zZXQoJ3NxbEV4cHJPYmonLCBudWxsKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllciA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIG51bGwpLnNldCgnc3FsRXhwck9iaicsIG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dTcWxFeHByUG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3FsRXhwclNob3c6IHRydWUgfSlcbiAgfVxuXG4gIHRvZ2dsZVNxbEV4cHJQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTcWxFeHByU2hvdzogIXRoaXMuc3RhdGUuaXNTcWxFeHByU2hvdyB9KVxuICB9XG5cbiAgb25TcWxFeHByQnVpbGRlckNoYW5nZSA9IChzcWxFeHByT2JqOiBJTVNxbEV4cHJlc3Npb24pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzcWxFeHByT2JqJywgc3FsRXhwck9iailcbiAgICB9KVxuICB9XG5cbiAgb25NZXNzYWdlRmllbGRTZWxlY3RlZCA9IChhbGxTZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywge1xuICAgICAgICBkYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgZGF0YVZpZXdJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZGF0YVZpZXdJZCxcbiAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCxcbiAgICAgICAgZmllbGRzOiBhbGxTZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25BY3Rpb25GaWVsZFNlbGVjdGVkID0gKGFsbFNlbGVjdGVkRmllbGRzOiBJTUZpZWxkU2NoZW1hW10sIGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIHtcbiAgICAgICAgZGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICBkYXRhVmlld0lkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFWaWV3SWQsXG4gICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCxcbiAgICAgICAgZmllbGRzOiBhbGxTZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3dpY3RoRW5hYmxlZERhdGFSZWxhdGlvblNoaXAgPSAoY2hlY2tlZCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2VuYWJsZWREYXRhUmVsYXRpb25TaGlwJywgY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tUcmlnZXJMYXllcklzU2FtZVRvQWN0aW9uTGF5ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgJiZcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCA9PT0gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2V0RHNSb290SWRzQnlXaWRnZXRJZCA9ICh3SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXG4gICAgY29uc3Qgcm9vdElkcyA9IFtdXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcbiAgICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGdldERzSWRzQnlXaWRnZXRJZCA9ICh3SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKHdJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcbiAgICByZXR1cm4gSW1tdXRhYmxlKHVzZURhdGFTb3VyY2VzPy5tYXAoKHVzZURTOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHVzZURTPy5tYWluRGF0YVNvdXJjZUlkKSA/PyBbXSlcbiAgfVxuXG4gIGdldERzU2VsZWN0b3JTb3VyY2VEYXRhID0gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXG4gICAgY29uc3QgZHNSb290SWRzID0gdGhpcy5nZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxuICAgIGNvbnN0IGlzUmVhZE9ubHkgPSBhY3Rpb25VdGlscy5jaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIHRoaXMucHJvcHMubWVzc2FnZVR5cGUsIGRzUm9vdElkcylcblxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gKHVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpXG4gICAgICA/IEltbXV0YWJsZShbdXNlRGF0YVNvdXJjZV0pXG4gICAgICA6IEltbXV0YWJsZShbXSlcblxuICAgIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkKVxuICAgIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XG4gICAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzLFxuICAgICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxuICAgICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcbiAgICB9XG5cbiAgICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxuICB9XG5cbiAgY2hlY2tJc0Rpc2FibGVEYXRhVmlldyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cbiAgICBpZiAod2lkZ2V0SnNvbikge1xuICAgICAgY29uc3Qgd2lkZ2V0TGFiZWwgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ubGFiZWxcbiAgICAgIGlmICh3aWRnZXRMYWJlbCA9PT0gJ01hcCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGFjdGlvblVzZURhdGFTb3VyY2VJbnN0YW5jZSA9IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiZcbiAgICAgIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZClcblxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEgPSB0aGlzLmdldERzU2VsZWN0b3JTb3VyY2VEYXRhKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcbiAgICBjb25zdCBhY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YSA9IHRoaXMuZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17dGhpcy5nZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lKX0+XG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXIgfSl9PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgZnJvbVJvb3REc0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Sb290RHNJZHN9XG4gICAgICAgICAgICBmcm9tRHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XG4gICAgICAgICAgICBjbG9zZURhdGFTb3VyY2VMaXN0T25DaGFuZ2VcbiAgICAgICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxuICAgICAgICAgICAgZGlzYWJsZURhdGFTb3VyY2VMaXN0PXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cbiAgICAgICAgICAgIGhpZGVBZGREYXRhQnV0dG9uXG4gICAgICAgICAgICBoaWRlVHlwZURyb3Bkb3duXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMubWVzc2FnZVdpZGdldElkfVxuICAgICAgICAgICAgZGlzYWJsZURhdGFWaWV3XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RoaXMuY2hlY2tJc0Rpc2FibGVEYXRhVmlldyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCl9XG4gICAgICAgICAgICBlbmFibGVUb1NlbGVjdE91dHB1dERzRnJvbVNlbGY9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0FjdGlvbkxheWVyJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQWN0aW9uTGF5ZXIgfSl9PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17YWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICBmcm9tUm9vdERzSWRzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxuICAgICAgICAgICAgZnJvbURzSWRzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XG4gICAgICAgICAgICBjbG9zZURhdGFTb3VyY2VMaXN0T25DaGFuZ2VcbiAgICAgICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IGFjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XG4gICAgICAgICAgICBkaXNhYmxlRGF0YVNvdXJjZUxpc3Q9e2FjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XG4gICAgICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxuICAgICAgICAgICAgaGlkZVR5cGVEcm9wZG93blxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFjdGlvbkxheWVyQ2hhbmdlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMud2lkZ2V0SWR9XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXdcbiAgICAgICAgICAgIGVuYWJsZVRvU2VsZWN0T3V0cHV0RHNGcm9tU2VsZj17dHJ1ZX1cbiAgICAgICAgICAvLyBvblNlbGVjdD17dGhpcy5oYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkfVxuICAgICAgICAgIC8vIG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgICAge3RoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiZcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fQ29uZGl0aW9ucycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX0NvbmRpdGlvbnMgfSl9PlxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2UgfSl9PlxuICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmVuYWJsZWREYXRhUmVsYXRpb25TaGlwfSBvbkNoYW5nZT17ZXZ0ID0+IHsgdGhpcy5zd2ljdGhFbmFibGVkRGF0YVJlbGF0aW9uU2hpcChldnQudGFyZ2V0LmNoZWNrZWQpIH19IC8+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5wcm9wcy5jb25maWcuZW5hYmxlZERhdGFSZWxhdGlvblNoaXB9IGNsYXNzTmFtZT0ndy0xMDAnPlxuICAgICAgICAgICAgICAgIHt0aGlzLmNoZWNrVHJpZ2VyTGF5ZXJJc1NhbWVUb0FjdGlvbkxheWVyKCkgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBib3JkZXIgcC0xIG1yLTInPnt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0F1dG9CaW5kJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQXV0b0JpbmQgfSl9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHshdGhpcy5jaGVja1RyaWdlckxheWVySXNTYW1lVG9BY3Rpb25MYXllcigpICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gcmVsYXRlLXBhbmVsLWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXG4gICAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e0ltbXV0YWJsZShbdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2U/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSldKX0gaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVzc2FnZUZpZWxkU2VsZWN0ZWR9IHVzZURyb3Bkb3duIGlzU2VhcmNoSW5wdXRIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBJbW11dGFibGUoW10pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAgYWN0aW9uLXNlbGVjdC1jaG9vc2VyJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoW3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2U/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSldKX0gaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjdGlvbkZpZWxkU2VsZWN0ZWR9IHVzZURyb3Bkb3duIGlzU2VhcmNoSW5wdXRIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBJbW11dGFibGUoW10pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J2ZsZXgtbm9uZScgd2lkdGg9ezEyfSBoZWlnaHQ9ezQwfSBjb2xvcj17dGhlbWUuY29sb3JzLmRhcmtbNDAwXX0gaWNvbj17cmVxdWlyZSgnamltdS11aS9saWIvaWNvbnMvbGluay1jb21iaW5lZC5zdmcnKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdsaW5rJyBkaXNhYmxlZD17IXRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2V9IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCcgb25DbGljaz17dGhpcy5zaG93U3FsRXhwclBvcHVwfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgdGV4dC10cnVuY2F0ZScgc3R5bGU9e3sgdGV4dEFsaWduOiAnc3RhcnQnIH19PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9ucyB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2V9PnsoZHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZHN9IG1vZGU9e1NxbEV4cHJlc3Npb25Nb2RlLlNpbXBsZX1cbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzU3FsRXhwclNob3d9IHRvZ2dsZT17dGhpcy50b2dnbGVTcWxFeHByUG9wdXB9XG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb249e3RoaXMucHJvcHMuY29uZmlnLnNxbEV4cHJPYmp9IG9uQ2hhbmdlPXsoc3FsRXhwck9iaikgPT4geyB0aGlzLm9uU3FsRXhwckJ1aWxkZXJDaGFuZ2Uoc3FsRXhwck9iaikgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+fVxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcWwtZXhwci1kaXNwbGF5Jz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9iaiAmJiBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTCh0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2UpLmRpc3BsYXlTUUxcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9TZXRFeHByZXNzaW9uJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fU2V0RXhwcmVzc2lvbiB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKF9GaWx0ZXJBY3Rpb25TZXR0aW5nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9