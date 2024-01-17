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
/*!*******************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/flash-action-setting.tsx ***!
  \*******************************************************************************************/
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
class _FlashActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
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
                //if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1) {
                const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(messageWidgetId, this.props.messageType);
                if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0]) && (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 1) {
                    const dsJson = config.dataSources[useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataSourceId];
                    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                        messageUseDataSource = null;
                    }
                    else {
                        messageUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataSourceId,
                            mainDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].mainDataSourceId,
                            dataViewId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataViewId,
                            rootDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].rootDataSourceId
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
                            dataViewId: actionWidgetJson.useDataSources[0].dataViewId,
                            mainDataSourceId: actionWidgetJson.useDataSources[0].mainDataSourceId,
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
_FlashActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        messageUseDataSource: null,
        actionUseDataSource: null,
        sqlExprObj: null,
        enabledDataRelationShip: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_FlashActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx1REFBZ0IsQ0FBQyxnQkFBZ0I7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcsdURBQWdCLENBQUMsYUFBYTtJQUNyRCxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sc0JBQXNCLEdBQUcsRUFBUztRQUN4QyxJQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQixLQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLFdBQVcsTUFBSyxXQUFXLEVBQUUsQ0FBQztZQUNwRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7UUFDN0QsQ0FBQztJ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S0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUNqRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxFQUFDLENBQUMsR0FDL0csQ0FDSDt3QkFDSCxDQUFDLENBQ3FCLENBQ1g7b0JBQ2IsK0NBQUMsMkVBQVU7d0JBQ1Qsd0RBQUssU0FBUyxFQUFDLGtCQUFrQixJQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksMkJBQTJCOzRCQUMxRCxDQUFDLENBQUMsc0RBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLDJCQUEyQixDQUFDLENBQUMsVUFBVTs0QkFDcEcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSx5QkFBeUIsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQ3pILENBQ0ssQ0FDRSxDQUNmLENBQ1A7SUFDSCxDQUFDOztBQXZkTSxnQ0FBWSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxvREFBUyxDQUFDO1FBQ2hCLG9CQUFvQixFQUFFLElBQUk7UUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixVQUFVLEVBQUUsSUFBSTtRQUNoQix1QkFBdUIsRUFBRSxJQUFJO0tBQzlCLENBQUM7Q0FDSDtBQW1kSCxpRUFBZSxxREFBUyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL2xpbmstY29tYmluZWQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL21lc3NhZ2UtYWN0aW9ucy9hY3Rpb24tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZsYXNoLWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMiA0MFxcXCI+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNiAzMHYxMEgwdi0xaDV2LTl6TTMuMTYyIDE4LjU4MmEuNS41IDAgMCAxIDAgLjcxbC0xLjQxNiAxLjQyMWEyLjQ5NyAyLjQ5NyAwIDAgMC0uMDAzIDMuNTQ1Yy45ODMuOTgzIDIuNTYuOTggMy41NDQtLjAwM2wxLjQyLTEuNDJhLjUwNC41MDQgMCAwIDEgLjcxMi43MTNMNiAyNC45NjhhMy41MDIgMy41MDIgMCAwIDEtNC45NjcgMCAzLjUwMSAzLjUwMSAwIDAgMSAwLTQuOTY3bDEuNDE2LTEuNDIyYS41MDQuNTA0IDAgMCAxIC43MTMuMDAzbTQuOTY3LS43MWEuNS41IDAgMCAxIDAgLjcxTDQuNTggMjIuMTI5YS41MDQuNTA0IDAgMCAxLS43MTMtLjcxMmwzLjU0OC0zLjU0OGEuNTA0LjUwNCAwIDAgMSAuNzEzLjAwM20yLjgzOC0yLjgzOGEzLjUwMSAzLjUwMSAwIDAgMSAwIDQuOTY3bC0xLjQyIDEuNDE5YS41MDQuNTA0IDAgMCAxLS43MTMtLjcxMmwxLjQyMy0xLjQxN2EyLjUgMi41IDAgMCAwIDAtMy41NDcgMi41MDIgMi41MDIgMCAwIDAtMy41NDcgMGwtMS40MiAxLjQxOWEuNTA0LjUwNCAwIDAgMS0uNzEzLS43MTJsMS40Mi0xLjQyYTMuNTA2IDMuNTA2IDAgMCAxIDQuOTcuMDAzTTYgMHYxMEg1VjFIMFYwelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIHR5cGUgTWVzc2FnZVR5cGUsIE1lc3NhZ2VDYXJyeURhdGEsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIEltbXV0YWJsZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1XaWRnZXRKc29uIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VzZU91dHB1dERhdGFTb3VyY2VzICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YSA9PT0gTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IE1lc3NhZ2VDYXJyeURhdGEge1xuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxuICBjb25zdCBwdWJsaXNoTWVzc2FnZXMgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ucHVibGlzaE1lc3NhZ2VzXG4gIGxldCBtZXNzYWdlQ2FycnlEYXRhID0gTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlXG4gIHB1Ymxpc2hNZXNzYWdlcz8uZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eSA9IGVsIGFzIGFueVxuICAgIGlmIChwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhICYmIHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xuICAgICAgbWVzc2FnZUNhcnJ5RGF0YSA9IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGFcbiAgICB9XG4gIH0pXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29uZmlnIHtcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxuICB1c2VEYXRhU291cmNlcz86IFVzZURhdGFTb3VyY2VbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdXRBY3Rpb25Db25maWcgKGFjdGlvbkNvbmZpZzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+LCBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIC8vY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXG5cbiAgbGV0IHVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXM6IElNVXNlRGF0YVNvdXJjZVtdID0gW11cbiAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSkge1xuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxuICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5mb3JFYWNoKCh1c2VEUywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURTLmRhdGFTb3VyY2VJZF1cbiAgICAgICAgbGV0IHRlbXBVc2VEYXRhU291cmNlXG4gICAgICAgIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRFMuZGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRFMubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURTLnJvb3REYXRhU291cmNlSWQsXG4gICAgICAgICAgICBkYXRhVmlld0lkOiB1c2VEUy5kYXRhVmlld0lkXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIXVzZURhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2UgPSB0ZW1wVXNlRGF0YVNvdXJjZVxuICAgICAgICAgIH1cbiAgICAgICAgICB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1c2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UsIG1lc3NhZ2VUeXBlKVxuICAgIGlmIChhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5mb3JFYWNoKHVzZURTID0+IHtcbiAgICAgICAgY29uc3QgdGVtcFVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCB1c2VEUywgbWVzc2FnZVR5cGUpXG4gICAgICAgIHRlbXBVc2VEYXRhU291cmNlICYmIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja091dFVzZURhdGFTb3VyY2UgKG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgLy9jb25zdCB3aWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcbiAgbGV0IGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICBsZXQgaXNNYXBEcyA9IGZhbHNlXG5cbiAgY29uc3QgZHNJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0gJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxuICBpZiAoIWRzSWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXG4gIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xuICAgIGlzTWFwRHMgPSB0cnVlXG4gIH1cblxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxuXG4gIGlmIChpc01hcERzKSB7XG4gICAgLy8gd2VibWFwIG9yIHdlYnNjZW5lIGRzXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNVc2VPbGREcykge1xuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcbiAgICAgICAgY29uc3QgY3VycmVudFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/Lm1haW5EYXRhU291cmNlSWQgOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxuICAgICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xuICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xuICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluaXRVc2VEYXRhU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VEYXRhU291cmNlSW5mbyAod2lkZ2V0SWQ6IHN0cmluZywgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZS5JbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cbiAgbGV0IGlzUmVhZE9ubHkgPSBmYWxzZVxuICBjb25zdCBkc1Jvb3RJZHMgPSBnZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxuICAvL2lmIChkc1Jvb3RJZHMgJiYgZHNSb290SWRzLmxlbmd0aCA9PT0gMCAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xuICAvLyAgaXNSZWFkT25seSA9IHRydWVcbiAgLy99XG5cbiAgLy9pZiAoIWRzUm9vdElkcyAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xuICAvLyAgaXNSZWFkT25seSA9IHRydWVcbiAgLy99XG5cbiAgaWYgKCFkc1Jvb3RJZHMgfHwgZHNSb290SWRzPy5sZW5ndGggPT09IDApIHtcbiAgICBpc1JlYWRPbmx5ID0gY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCBtZXNzYWdlVHlwZSwgZHNSb290SWRzKVxuICB9XG5cbiAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkLCBtZXNzYWdlVHlwZSlcbiAgY29uc3QgZHNTZWxlY3RvclNvdXJjZSA9IHtcbiAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzIHx8IFtdLFxuICAgIGZyb21Sb290RHNJZHM6IGRzUm9vdElkcyxcbiAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xuICB9XG5cbiAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgSW1tdXRhYmxlKFtdKVxuICBjb25zdCBvdXRwdXREYXRhU291cmNlcyA9IGluaXRPdXRwdXREYXRhU291cmNlcyh3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcykgfHwgSW1tdXRhYmxlKFtdKVxuICBjb25zdCBib3RoRGF0YXNvdXJjZSA9IHVzZURhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmNvbmNhdChvdXRwdXREYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZXNcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiB1c2VEYXRhU291cmNlc1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiBJbW11dGFibGUoYm90aERhdGFzb3VyY2UpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPdXRwdXREYXRhU291cmNlcyAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XG4gIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcbiAgICAgIHJvb3REYXRhU291cmNlSWQ6IG51bGxcbiAgICB9XG4gIH0pID8/IFtdXG4gIHJldHVybiBJbW11dGFibGUoZHMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzT25seU9uZURzICh3aWRnZXRKc29uOiBJTVdpZGdldEpzb24sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgZHNSb290SWRzOiBJbW11dGFibGVBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3aWRnZXRKc29uPy5pZCwgbWVzc2FnZVR5cGUpXG4gIGNvbnN0IG91dHB1dERzID0gd2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMgfHwgW11cbiAgY29uc3QgdXNlRHMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBbXVxuICBpZiAoZHNSb290SWRzKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gb3V0cHV0RHM/Lmxlbmd0aCA9PT0gMVxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxuICAgICAgcmV0dXJuIHVzZURzPy5sZW5ndGggPT09IDFcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XG4gICAgICBjb25zdCBkc0xlbmd0aCA9IG91dHB1dERzLmxlbmd0aCArIHVzZURzLmxlbmd0aFxuICAgICAgcmV0dXJuIGRzTGVuZ3RoID09PSAxXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvbmZpZyAoKSB7XG4gIHJldHVybiB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbmZpZ1xufVxuXG5mdW5jdGlvbiBnZXREc1Jvb3RJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZykge1xuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxuICBjb25zdCByb290SWRzID0gW11cbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICBpZiAoZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXAgfHwgZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkgeyAvLyBpcyByb290IGRzXG4gICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZXREc0lkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXG4gIHJldHVybiBJbW11dGFibGUobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLm1hcCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXG4gICAgbGV0IHJlc3VsdERzXG4gICAgaWYgKGRzICYmIGRzLmlzRGF0YVZpZXcpIHtcbiAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XG4gICAgICByZXN1bHREcyA9IGRzPy5nZXRNYWluRGF0YVNvdXJjZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdERzID0gZHNcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdERzPy5pZFxuICB9KSA/PyBbXSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlTGFiZWw6ICdTb3VyY2UnLFxuICBzb3VyY2VEZXNjcmlwdDogJ0Egd2ViIG1hcCBvciB3ZWIgc2NlbmUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLicsXG4gIHNlbGVjdFRoaXJkTWFwSGludDogJ1BsZWFzZSB1bnNlbGVjdCBhIG1hcCBvciBzY2VuZSBiZWZvcmUgeW91IGNob29zZSBhbm90aGVyIG9uZS4gVXAgdG8gdHdvIGFyZSBzdXBwb3J0ZWQuJyxcbiAgaW5pdGlhbE1hcDogJ0luaXRpYWwgbWFwJyxcbiAgaW5pdGlhbE1hcFZpZXc6ICdJbml0aWFsIHZpZXcnLFxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcbiAgc2V0TWFwVmlldzogJ01vZGlmeSBpbml0aWFsIHZpZXcnLFxuICBkZWZhdWx0VmlldzogJ0RlZmF1bHQnLFxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxuICBjdXN0b21WaWV3OiAnQ3VzdG9tJyxcbiAgY3VzdG9tVmlld1RpcDogJ0NyZWF0ZSBhIG5ldyBwb3NpdGlvbiBvZiB0aGUgbWFwJyxcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXG4gIHRvb2xMYWJlbDogJ1Rvb2xzJyxcbiAgb3B0aW9uczogJ09wdGlvbnMnLFxuICBzZWxlY3Rpb25IaWdobGlnaHRDb2xvcjogJ1NlbGVjdGlvbiBoaWdobGlnaHQnLFxuICBmZWF0dXJlU2VsZWN0aW9uQ29sb3I6ICdGZWF0dXJlIHNlbGVjdGlvbiBjb2xvcnMnLFxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcbiAgZmVhdHVyZUhpZ2hsaWdodE91dGxpbmU6ICdIaWdobGlnaHQgb3V0bGluZScsXG4gIGRpc2FibGVTY3JvbGxab29tOiAnRGlzYWJsZSBzY3JvbGwgem9vbWluZycsXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxuICBkaXNhYmxlUG9wVXA6ICdEaXNhYmxlIHBvcC11cCcsXG4gIGVuYWJsZVBvcFVwOiAnRW5hYmxlIHBvcC11cCcsXG4gIHNob3dQb3B1cFVwb25TZWxlY3Rpb246ICdTaG93IHBvcC11cCB1cG9uIGZlYXR1cmUgc2VsZWN0aW9uJyxcbiAgc2hvd1BvcHVwVXBvblNlbGVjdGlvblRvb2x0aXA6ICdTZWxlY3Rpb24gbWFkZSBpbnRlcmFjdGl2ZWx5IGZyb20gdGhlIG1hcCBpcyBleGNsdWRlZC4nLFxuICBkb2NrUG9wdXA6ICdEb2NrIHRoZSBwb3AtdXAnLFxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcbiAgY2hvb3NlQUxheWVyOiAnU2VsZWN0IGEgbGF5ZXInLFxuICBkYXRhUmVsYXRpb25TaGlwOiAnRGF0YSByZWxhdGlvbnNoaXAnLFxuICBtYXBOb25lOiAnbm9uZScsXG4gIG1lc3NhZ2VGaWVsZDogJ01lc3NhZ2UgZmllbGQnLFxuICBtYXBMYXlvdXQ6ICdUb29scyBsYXlvdXQnLFxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxuICBtYXBMYXlvdXRfU21hbGw6ICdTbWFsbCBzaXplJyxcbiAgZW5hYmxlQ2xpZW50U2lkZVF1ZXJ5OiAnRW5hYmxlIGNsaWVudC1zaWRlIHF1ZXJ5JyxcbiAgY2xpZW50UXVlcnlIZWxwVGlwMTogJ0lmIGVuYWJsZWQsIHdpZGdldHMgdXNpbmcgdGhlIHdlYiBtYXAgZGF0YSB3aWxsIGFwcGx5IGNsaWVudC1zaWRlIHF1ZXJpZXMuIFBsZWFzZSBiZSBhd2FyZSB0aGF0IGl0IG1pZ2h0IHRha2UgYSBsb25nZXIgdGltZSBiZWZvcmUgeW91IGNhbiBzZWUgdGhlIGZlYXR1cmVzIHNpbmNlIHRoZSBtYXAgd2lsbCBxdWVyeSBtb3JlIGZpZWxkcyBiZWZvcmUgaXQgZnVsbHkgcmVuZGVycy4nLFxuICBjbGllbnRRdWVyeUhlbHBUaXAyOiAnT25lIHdlYiBtYXAgY2FuIGJlIGVuYWJsZWQgb25seSBvbmNlIGluIGFueSBtYXAgd2lkZ2V0LiBXZWIgc2NlbmVzIGRvIG5vdCBzdXBwb3J0IGNsaWVudC1zaWRlIHF1ZXJpZXMuJyxcbiAgY2xpZW50UXVlcnlEaXNhYmxlZFRpcDogJ1RoaXMgd2ViIG1hcCBoYXMgdGhlIGNsaWVudC1zaWRlIHF1ZXJ5IGVuYWJsZWQgaW4gYW5vdGhlciBtYXAgd2lkZ2V0LicsXG5cbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXG4gIG1hcEFjdGlvbl9TZXREYXRhOiAnU2VsZWN0IGRhdGEnLFxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXI6ICdBY3Rpb24gZGF0YScsXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXG4gIG1hcEFjdGlvbl9SZWxhdGVNZXNzYWdlOiAnVHJpZ2dlciAvIGFjdGlvbiBjb25uZWN0aW9uJyxcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkOiAnU2VsZWN0IGEgdHJpZ2dlciBmaWVsZCcsXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXG4gIG1hcEFjdGlvbl9FcXVhbHM6ICdlcXVhbHMnLFxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZDogJ1NlbGVjdCBhbiBhY3Rpb24gZmllbGQnLFxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxuICBtYXBBY3Rpb25fU2V0RXhwcmVzc2lvbjogJ1BsZWFzZSBzZXQgeW91ciBleHByZXNzaW9uIGZpcnN0LicsXG4gIG1hcEFjdGlvbl9DaG9vc2VMYXllcjogJ1NlbGVjdCBkYXRhJyxcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxuICBtYXBBY3Rpb25fTm9MYXllcjogJ05vIGRhdGEuJyxcbiAgbWFwQWN0aW9uX1BvaW50OiAnUG9pbnQnLFxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXG4gIG1hcEFjdGlvbl9Qb2x5Z29uOiAnUG9seWdvbicsXG4gIG1hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzOiAnVXNlIGxheWVyLWRlZmluZWQgc3ltYm9scycsXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcbiAgbWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZTogJ1pvb20gc2NhbGUnLFxuICBtYXBab29tVG9BY3Rpb25fQXV0b21hdGljOiAnQXV0b21hdGljJyxcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXG4gIG1hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGU6ICdUeXBlIGEgc2NhbGUnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc3FsX2V4cHJlc3Npb25fYnVpbGRlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBSZWFjdCwgY3NzLCBqc3gsIHR5cGUgQWN0aW9uU2V0dGluZ1Byb3BzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1UaGVtZVZhcmlhYmxlcywgcG9saXNoZWQsIGdldEFwcFN0b3JlLCBJbW11dGFibGUsXG4gIHR5cGUgVXNlRGF0YVNvdXJjZSwgRGF0YVNvdXJjZUNvbXBvbmVudCwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIHR5cGUgSU1GaWVsZFNjaGVtYSwgdHlwZSBJTVNxbEV4cHJlc3Npb24sXG4gIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIE1lc3NhZ2VUeXBlLCBTcWxFeHByZXNzaW9uTW9kZSwgdHlwZSBJbW11dGFibGVBcnJheSwgQWxsRGF0YVNvdXJjZVR5cGVzXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgU3dpdGNoLCBDb2xsYXBzZSB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRmllbGRTZWxlY3RvciwgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcblxuaW1wb3J0IHsgU3FsRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3FsLWV4cHJlc3Npb24tYnVpbGRlcidcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCAqIGFzIGFjdGlvblV0aWxzIGZyb20gJy4vYWN0aW9uLXV0aWxzJ1xuXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XG4gIHRoZW1lPzogSU1UaGVtZVZhcmlhYmxlc1xufVxuXG5pbnRlcmZhY2UgU3RhdGVzIHtcbiAgaXNTaG93TGF5ZXJMaXN0OiBib29sZWFuXG4gIGN1cnJlbnRMYXllclR5cGU6ICd0cmlnZ2VyJyB8ICdhY3Rpb24nXG4gIGlzU3FsRXhwclNob3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIENvbmZpZyB7XG4gIG1lc3NhZ2VVc2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXG4gIGFjdGlvblVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcbiAgc3FsRXhwck9iaj86IElNU3FsRXhwcmVzc2lvblxuXG4gIGVuYWJsZWREYXRhUmVsYXRpb25TaGlwPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XG5cbmNvbnN0IERTU2VsZWN0b3JUeXBlcyA9IEltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllciwgQWxsRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXJdKVxuXG5jbGFzcyBfRmxhc2hBY3Rpb25TZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBY3Rpb25TZXR0aW5nUHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgU3RhdGVzPiB7XG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBib3R0b206ICcwJyxcbiAgICB3aWR0aDogJzI1OXB4JyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBib3JkZXJSaWdodDogJycsXG4gICAgYm9yZGVyQm90dG9tOiAnJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMXB4J1xuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm1vZGFsU3R5bGUuYm9yZGVyUmlnaHQgPSAnMXB4IHNvbGlkIGJsYWNrJ1xuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXG4gICAgICBjdXJyZW50TGF5ZXJUeXBlOiBudWxsLFxuICAgICAgaXNTcWxFeHByU2hvdzogZmFsc2VcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbmZpZzogSW1tdXRhYmxlKHtcbiAgICAgIG1lc3NhZ2VVc2VEYXRhU291cmNlOiBudWxsLFxuICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogbnVsbCxcbiAgICAgIHNxbEV4cHJPYmo6IG51bGwsXG4gICAgICBlbmFibGVkRGF0YVJlbGF0aW9uU2hpcDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBpbml0T3V0cHV0RGF0YVNvdXJjZXMgPSAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiA9PiB7XG4gICAgY29uc3QgZHMgPSBvdXRwdXREYXRhU291cmNlcz8ubWFwKGRzSWQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxuICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBkc0lkLFxuICAgICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXG4gICAgICB9XG4gICAgfSkgPz8gW11cbiAgICByZXR1cm4gSW1tdXRhYmxlKGRzKVxuICB9XG5cbiAgZ2V0SW5pdENvbmZpZyA9ICgpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0SWQgPSB0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZFxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWdcblxuICAgIGxldCBtZXNzYWdlVXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxuICAgIGxldCBhY3Rpb25Vc2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXG5cbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKSB7XG4gICAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcz8uWzBdICYmIHVzZURhdGFTb3VyY2VzPy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVNvdXJjZUlkXVxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5kYXRhVmlld0lkLFxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5yb290RGF0YVNvdXJjZUlkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZSA9IHRoaXMuY2hlY2tBbmRHZXRJbml0VXNlRGF0YVNvdXJjZSh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UpXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uV2lkZ2V0SWQgPSB0aGlzLnByb3BzLndpZGdldElkXG4gICAgY29uc3QgYWN0aW9uV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW2FjdGlvbldpZGdldElkXVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKSB7XG4gICAgICBpZiAoYWN0aW9uV2lkZ2V0SnNvbiAmJiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0gJiYgYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2FjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXVxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0uZGF0YVZpZXdJZCxcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0ubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZSA9IHRoaXMuY2hlY2tBbmRHZXRJbml0VXNlRGF0YVNvdXJjZSh0aGlzLnByb3BzLndpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKVxuICAgIH1cblxuICAgIGNvbnN0IG9sZEFjdGlvblVzZURhdGFTb3VyY2VJZCA9IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWRcbiAgICBjb25zdCBuZXdBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSBhY3Rpb25Vc2VEYXRhU291cmNlICYmIGFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXG4gICAgaWYgKG5ld0FjdGlvblVzZURhdGFTb3VyY2VJZCAhPT0gb2xkQWN0aW9uVXNlRGF0YVNvdXJjZUlkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbWVzc2FnZVVzZURhdGFTb3VyY2UsXG4gICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2U6IGFjdGlvblVzZURhdGFTb3VyY2UsXG4gICAgICAgIHNxbEV4cHJPYmo6IG51bGxcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2U6IG1lc3NhZ2VVc2VEYXRhU291cmNlLFxuICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlOiBhY3Rpb25Vc2VEYXRhU291cmNlLFxuICAgICAgICBzcWxFeHByT2JqOiB0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByT2JqXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tBbmRHZXRJbml0VXNlRGF0YVNvdXJjZSA9ICh3aWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyLmFwcENvbmZpZ1xuICAgIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICBsZXQgaXNNYXBEcyA9IGZhbHNlXG5cbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSBhY3Rpb25VdGlscy5nZXREc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXG4gICAgY29uc3QgZHNJZCA9IHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzWzBdICYmIHVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxuICAgIGlmICghZHNJZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cbiAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgIGlzTWFwRHMgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGlzTWFwRHMpIHtcbiAgICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xuICAgICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxuICAgICAgaWYgKHVzZURhdGFTb3VyY2VzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcbiAgICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNVc2VPbGREcykge1xuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcbiAgICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IHVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogdXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxuICAgICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcbiAgICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNVc2VPbGREcykge1xuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh1c2VEYXRhU291cmNlcz8ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0ubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVZpZXdJZCxcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0ucm9vdERhdGFTb3VyY2VJZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBpbml0Q29uZmlnID0gdGhpcy5nZXRJbml0Q29uZmlnKClcblxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywgaW5pdENvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcbiAgICAgICAgLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkuc2V0KCdzcWxFeHByT2JqJywgaW5pdENvbmZpZy5zcWxFeHByT2JqKVxuICAgIH0pXG4gIH1cblxuICBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogJHtwb2xpc2hlZC5yZW0oMTApfSAke3BvbGlzaGVkLnJlbSgxNil9ICR7cG9saXNoZWQucmVtKDApfSAke3BvbGlzaGVkLnJlbSgxNil9XG4gICAgICB9XG5cbiAgICAgIC5kZWxldGVJY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgIH1cblxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAuc3FsLWV4cHItZGlzcGxheSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzMwMF19O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzUwMF19O1xuICAgICAgfVxuXG4gICAgICAucmVsYXRlLXBhbmVsLWxlZnQge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAuYWN0aW9uLXNlbGVjdC1jaG9vc2VyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3BvbGlzaGVkLnJlbSgxMil9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9XG5cbiAgaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCh1c2VEYXRhU291cmNlc1swXSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllcigpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWN0aW9uTGF5ZXJDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmhhbmRsZUFjdGlvbkxheWVyU2VsZWN0ZWQodXNlRGF0YVNvdXJjZXNbMF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTGF5ZXJGb3JBY3Rpb25MYXllcigpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVHJpZ2dlckxheWVyU2VsZWN0ZWQgPSAoY3VycmVudFNlbGVjdGVkRHM6IFVzZURhdGFTb3VyY2UpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIGN1cnJlbnRTZWxlY3RlZERzKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkID0gKGN1cnJlbnRTZWxlY3RlZERzOiBVc2VEYXRhU291cmNlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGN1cnJlbnRTZWxlY3RlZERzKS5zZXQoJ3NxbEV4cHJPYmonLCBudWxsKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllciA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIG51bGwpLnNldCgnc3FsRXhwck9iaicsIG51bGwpXG4gICAgfSlcbiAgfVxuXG4gIHNob3dTcWxFeHByUG9wdXAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3FsRXhwclNob3c6IHRydWUgfSlcbiAgfVxuXG4gIHRvZ2dsZVNxbEV4cHJQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTcWxFeHByU2hvdzogIXRoaXMuc3RhdGUuaXNTcWxFeHByU2hvdyB9KVxuICB9XG5cbiAgb25TcWxFeHByQnVpbGRlckNoYW5nZSA9IChzcWxFeHByT2JqOiBJTVNxbEV4cHJlc3Npb24pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzcWxFeHByT2JqJywgc3FsRXhwck9iailcbiAgICB9KVxuICB9XG5cbiAgb25NZXNzYWdlRmllbGRTZWxlY3RlZCA9IChhbGxTZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywge1xuICAgICAgICBkYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCxcbiAgICAgICAgZGF0YVZpZXdJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZGF0YVZpZXdJZCxcbiAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCxcbiAgICAgICAgZmllbGRzOiBhbGxTZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25BY3Rpb25GaWVsZFNlbGVjdGVkID0gKGFsbFNlbGVjdGVkRmllbGRzOiBJTUZpZWxkU2NoZW1hW10sIGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIHtcbiAgICAgICAgZGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICBkYXRhVmlld0lkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFWaWV3SWQsXG4gICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCxcbiAgICAgICAgZmllbGRzOiBhbGxTZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3dpY3RoRW5hYmxlZERhdGFSZWxhdGlvblNoaXAgPSAoY2hlY2tlZCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2VuYWJsZWREYXRhUmVsYXRpb25TaGlwJywgY2hlY2tlZClcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tUcmlnZXJMYXllcklzU2FtZVRvQWN0aW9uTGF5ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgJiZcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCA9PT0gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2V0RHNSb290SWRzQnlXaWRnZXRJZCA9ICh3SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXG4gICAgY29uc3Qgcm9vdElkcyA9IFtdXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcbiAgICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGdldERzSWRzQnlXaWRnZXRJZCA9ICh3SWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKHdJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcbiAgICByZXR1cm4gSW1tdXRhYmxlKHVzZURhdGFTb3VyY2VzPy5tYXAoKHVzZURTOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHVzZURTPy5tYWluRGF0YVNvdXJjZUlkKSA/PyBbXSlcbiAgfVxuXG4gIGdldERzU2VsZWN0b3JTb3VyY2VEYXRhID0gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXG4gICAgY29uc3QgZHNSb290SWRzID0gdGhpcy5nZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxuICAgIGNvbnN0IGlzUmVhZE9ubHkgPSBhY3Rpb25VdGlscy5jaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIHRoaXMucHJvcHMubWVzc2FnZVR5cGUsIGRzUm9vdElkcylcblxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gKHVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpXG4gICAgICA/IEltbXV0YWJsZShbdXNlRGF0YVNvdXJjZV0pXG4gICAgICA6IEltbXV0YWJsZShbXSlcblxuICAgIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkKVxuICAgIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XG4gICAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzLFxuICAgICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxuICAgICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcbiAgICB9XG5cbiAgICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxuICB9XG5cbiAgY2hlY2tJc0Rpc2FibGVEYXRhVmlldyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cbiAgICBpZiAod2lkZ2V0SnNvbikge1xuICAgICAgY29uc3Qgd2lkZ2V0TGFiZWwgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ubGFiZWxcbiAgICAgIGlmICh3aWRnZXRMYWJlbCA9PT0gJ01hcCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGFjdGlvblVzZURhdGFTb3VyY2VJbnN0YW5jZSA9IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiZcbiAgICAgIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZClcblxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEgPSB0aGlzLmdldERzU2VsZWN0b3JTb3VyY2VEYXRhKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcbiAgICBjb25zdCBhY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YSA9IHRoaXMuZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17dGhpcy5nZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lKX0+XG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXIgfSl9PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgZnJvbVJvb3REc0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Sb290RHNJZHN9XG4gICAgICAgICAgICBmcm9tRHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XG4gICAgICAgICAgICBjbG9zZURhdGFTb3VyY2VMaXN0T25DaGFuZ2VcbiAgICAgICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxuICAgICAgICAgICAgZGlzYWJsZURhdGFTb3VyY2VMaXN0PXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cbiAgICAgICAgICAgIGhpZGVBZGREYXRhQnV0dG9uXG4gICAgICAgICAgICBoaWRlVHlwZURyb3Bkb3duXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMubWVzc2FnZVdpZGdldElkfVxuICAgICAgICAgICAgZGlzYWJsZURhdGFWaWV3XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RoaXMuY2hlY2tJc0Rpc2FibGVEYXRhVmlldyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCl9XG4gICAgICAgICAgICBlbmFibGVUb1NlbGVjdE91dHB1dERzRnJvbVNlbGY9e3RydWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0FjdGlvbkxheWVyJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQWN0aW9uTGF5ZXIgfSl9PlxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17YWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICBmcm9tUm9vdERzSWRzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxuICAgICAgICAgICAgZnJvbURzSWRzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XG4gICAgICAgICAgICBjbG9zZURhdGFTb3VyY2VMaXN0T25DaGFuZ2VcbiAgICAgICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IGFjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XG4gICAgICAgICAgICBkaXNhYmxlRGF0YVNvdXJjZUxpc3Q9e2FjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XG4gICAgICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxuICAgICAgICAgICAgaGlkZVR5cGVEcm9wZG93blxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFjdGlvbkxheWVyQ2hhbmdlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMud2lkZ2V0SWR9XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXdcbiAgICAgICAgICAgIGVuYWJsZVRvU2VsZWN0T3V0cHV0RHNGcm9tU2VsZj17dHJ1ZX1cbiAgICAgICAgICAvLyBvblNlbGVjdD17dGhpcy5oYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkfVxuICAgICAgICAgIC8vIG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgICAge3RoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiZcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fQ29uZGl0aW9ucycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX0NvbmRpdGlvbnMgfSl9PlxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2UgfSl9PlxuICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmVuYWJsZWREYXRhUmVsYXRpb25TaGlwfSBvbkNoYW5nZT17ZXZ0ID0+IHsgdGhpcy5zd2ljdGhFbmFibGVkRGF0YVJlbGF0aW9uU2hpcChldnQudGFyZ2V0LmNoZWNrZWQpIH19IC8+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5wcm9wcy5jb25maWcuZW5hYmxlZERhdGFSZWxhdGlvblNoaXB9IGNsYXNzTmFtZT0ndy0xMDAnPlxuICAgICAgICAgICAgICAgIHt0aGlzLmNoZWNrVHJpZ2VyTGF5ZXJJc1NhbWVUb0FjdGlvbkxheWVyKCkgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBib3JkZXIgcC0xIG1yLTInPnt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0F1dG9CaW5kJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQXV0b0JpbmQgfSl9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHshdGhpcy5jaGVja1RyaWdlckxheWVySXNTYW1lVG9BY3Rpb25MYXllcigpICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gcmVsYXRlLXBhbmVsLWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXG4gICAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e0ltbXV0YWJsZShbdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2U/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSldKX0gaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVzc2FnZUZpZWxkU2VsZWN0ZWR9IHVzZURyb3Bkb3duIGlzU2VhcmNoSW5wdXRIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBJbW11dGFibGUoW10pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAgYWN0aW9uLXNlbGVjdC1jaG9vc2VyJ1xuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoW3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2U/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSldKX0gaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjdGlvbkZpZWxkU2VsZWN0ZWR9IHVzZURyb3Bkb3duIGlzU2VhcmNoSW5wdXRIaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBJbW11dGFibGUoW10pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J2ZsZXgtbm9uZScgd2lkdGg9ezEyfSBoZWlnaHQ9ezQwfSBjb2xvcj17dGhlbWUuY29sb3JzLmRhcmtbNDAwXX0gaWNvbj17cmVxdWlyZSgnamltdS11aS9saWIvaWNvbnMvbGluay1jb21iaW5lZC5zdmcnKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdsaW5rJyBkaXNhYmxlZD17IXRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2V9IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCcgb25DbGljaz17dGhpcy5zaG93U3FsRXhwclBvcHVwfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgdGV4dC10cnVuY2F0ZScgc3R5bGU9e3sgdGV4dEFsaWduOiAnc3RhcnQnIH19PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9ucyB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2V9PnsoZHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZHN9IG1vZGU9e1NxbEV4cHJlc3Npb25Nb2RlLlNpbXBsZX1cbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzU3FsRXhwclNob3d9IHRvZ2dsZT17dGhpcy50b2dnbGVTcWxFeHByUG9wdXB9XG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb249e3RoaXMucHJvcHMuY29uZmlnLnNxbEV4cHJPYmp9IG9uQ2hhbmdlPXsoc3FsRXhwck9iaikgPT4geyB0aGlzLm9uU3FsRXhwckJ1aWxkZXJDaGFuZ2Uoc3FsRXhwck9iaikgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+fVxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcWwtZXhwci1kaXNwbGF5Jz5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9iaiAmJiBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTCh0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2UpLmRpc3BsYXlTUUxcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9TZXRFeHByZXNzaW9uJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fU2V0RXhwcmVzc2lvbiB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKF9GbGFzaEFjdGlvblNldHRpbmcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=