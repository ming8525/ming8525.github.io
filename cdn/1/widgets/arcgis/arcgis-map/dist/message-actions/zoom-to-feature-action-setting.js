System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-theme","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/zoom-to-feature-action-setting.tsx ***!
  \*****************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");
/** @jsx jsx */







const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
class _ZoomToFeatureActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.NoLockTriggerLayerWidgets = ['Map'];
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
        this.handleTriggerLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleTriggerLayerSelected(useDataSources);
            }
            else {
                this.handleRemoveLayerForTriggerLayer();
            }
        };
        this.handleTriggerLayerSelected = (currentSelectedDs) => {
            // messageWidgetUseDataSources is widgets.widget_2.useDataSources.
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            let finalSelectedDs = null;
            const appConfig = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getAppConfig)();
            const widgetsInfo = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets;
            const messageWidgetInfo = widgetsInfo && widgetsInfo[this.props.messageWidgetId];
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange && messageWidgetInfo && messageWidgetInfo.uri && messageWidgetInfo.uri.includes('arcgis-map')) {
                // Map widget supports publishing 'EXTENT_CHANGE' and 'DATA_RECORDS_SELECTION_CHANGE' messages and Map widget only stores WebMap or WebScene data sources in useDataSources.
                // So if the message widget is Map widget, we can't filter messageWidgetUseDataSources (WebMap or WebScene ds) by currentSelectedDs(layer ds).
                finalSelectedDs = currentSelectedDs;
            }
            else {
                // The following code logic will filter messageWidgetUseDataSources by currentSelectedDs.
                // supports data view
                // finalSelectedDs is used to update appConfig.messageConfigs.messageConfig_1.actions[0].config.useDataSources and we must make sure finalSelectedDs is the subset of messageWidgetUseDataSources.
                // When the user selects a new data source from the DataSourceSelector, the DataSourceSelector.onChange(currentSelectedDs) event will be triggered.
                // currentSelectedDs contains the newly selected data source, but the newly selected data source must be the default view.
                // But the useDataSources configured in the widget may not be default view, so we can't use currentSelectedDs as finalSelectedDs directly.
                // To make sure finalSelectedDs is the subset of messageWidgetUseDataSources, it is necessary to filter messageWidgetUseDataSources by currentSelectedDs.
                finalSelectedDs = messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                    const dataSource = currentSelectedDs.find(ds => {
                        var _a;
                        if ((!ds.dataViewId || ds.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.OUTPUT_DATA_VIEW_ID) && !((_a = this.props.config.useDataSources) === null || _a === void 0 ? void 0 : _a.find(preDs => ds.mainDataSourceId === preDs.mainDataSourceId))) {
                            // select ds from ds list
                            return ds.mainDataSourceId === messageWidgetUseDataSource.mainDataSourceId;
                        }
                        else {
                            // select ds from data view check box
                            return ds.dataSourceId === messageWidgetUseDataSource.dataSourceId;
                        }
                    });
                    if (dataSource) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            }
            let config = this.props.config.set('useDataSource', finalSelectedDs[0]);
            // supports multiple trigger
            config = config.set('useDataSources', finalSelectedDs);
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: config
            });
        };
        this.handleRemoveLayerForTriggerLayer = () => {
            let config = this.props.config.set('useDataSource', null);
            // supports multiple trigger
            config = config.set('useDataSources', []);
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: config
            });
        };
        this.handleIsUseCustomZoomToOption = (isUseCustomZoomToOption) => {
            if (isUseCustomZoomToOption) {
                if (!this.props.config.zoomToOption || !this.props.config.zoomToOption.scale) {
                    this.props.onSettingChange({
                        actionId: this.props.actionId,
                        config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption).setIn(['zoomToOption', 'scale'], 5000)
                    });
                    return;
                }
            }
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption)
            });
        };
        this.handleSetCustomZoomScale = (value) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.setIn(['zoomToOption', 'scale'], value)
            });
        };
        this.getTriggerLayerContent = () => {
            //const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources)
            const triggerDsSelectorSourceData = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getUseDataSourceInfo)(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources, this.props.messageType);
            let useDataSources;
            if (this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId) || triggerDsSelectorSourceData.useDataSources) {
                useDataSources = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(triggerDsSelectorSourceData.useDataSources);
            }
            else {
                useDataSources = triggerDsSelectorSourceData.useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([triggerDsSelectorSourceData.useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            }
            const isDisableDataView = this.checkIsDisableDataView(this.props.messageWidgetId);
            const isDisableDataSourceList = triggerDsSelectorSourceData.isReadOnly && isDisableDataView;
            // if DataSourceSelector.props.disableDataSourceList is true, means DataSourceSelector's 'Select data' button is disabled.
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: useDataSources, fromRootDsIds: triggerDsSelectorSourceData.fromRootDsIds, fromDsIds: triggerDsSelectorSourceData.fromDsIds, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, disableRemove: () => triggerDsSelectorSourceData.isReadOnly, disableDataSourceList: isDisableDataSourceList, onChange: this.handleTriggerLayerChange, widgetId: this.props.messageWidgetId, disableDataView: false, hideDataView: ((dataViewJson, mainDataSourceId) => {
                    const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
                    const filteredMessageWidgetUseDataSources = messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                        return messageWidgetUseDataSource.mainDataSourceId === mainDataSourceId;
                    });
                    const targetDsView = filteredMessageWidgetUseDataSources.find(messageWidgetUseDataSource => {
                        let messageWidgetUseDataSourceDataViewId;
                        if (messageWidgetUseDataSource.dataViewId) {
                            messageWidgetUseDataSourceDataViewId = messageWidgetUseDataSource.dataViewId;
                        }
                        else {
                            messageWidgetUseDataSourceDataViewId = jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DATA_VIEW_ID;
                        }
                        return messageWidgetUseDataSourceDataViewId === dataViewJson.id;
                    });
                    return !targetDsView;
                }), isMultiple: this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId), isMultipleDataView: true, hideCreateViewButton: true, enableToSelectOutputDsFromSelf: true }));
        };
        this.checkIsSupportMultipleTriggerDataSources = (widgetId) => {
            var _a, _b, _c, _d;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            const widgetLabel = (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _d === void 0 ? void 0 : _d.label;
            if (widgetLabel === 'Map') {
                return true;
            }
            else {
                if (messageWidgetUseDataSources.length > 1) {
                    return this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange || this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
                }
                else {
                    return false;
                }
            }
        };
        this.checkIsDisableDataView = (widgetId) => {
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange) {
                return true;
            }
            //const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
            //const widgetJson = appConfig?.widgets?.[widgetId]
            //if (widgetJson) {
            //  const widgetLabel = widgetJson?.manifest?.label
            //  if (widgetLabel === 'Map') {
            //    return true
            //  } else {
            //    return false
            //  }
            //} else {
            //  return false
            //}
        };
        this.modalStyle.borderRight = '1px solid black';
        this.modalStyle.borderBottom = '1px solid black';
        this.state = {
            isShowLayerList: false,
            disableDataTrigger: props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange
        };
    }
    componentDidMount() {
        //const initConfig = this.getInitConfig()
        const initConfig = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.checkOutActionConfig)(this.props.config, this.props.messageWidgetId, this.props.messageType);
        let config = this.props.config.set('useDataSource', initConfig.useDataSource);
        config = config.set('useDataSources', initConfig.useDataSources);
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: config
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
    `;
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            !this.state.disableDataTrigger && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_TriggerLayer }) }, this.getTriggerLayerContent()),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapZoomToAction_ZoomScale', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_ZoomScale }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomZoomToOption, onChange: () => { this.handleIsUseCustomZoomToOption(false); } }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Automatic', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Automatic }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomZoomToOption, onChange: () => { this.handleIsUseCustomZoomToOption(true); } }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Custom', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Custom }))))),
                this.props.config.isUseCustomZoomToOption && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { className: 'w-100', placeholder: this.props.intl.formatMessage({ id: 'mapZoomToAction_TypeScale', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_TypeScale }), value: this.props.config.zoomToOption && this.props.config.zoomToOption.scale, onChange: this.handleSetCustomZoomScale })))));
    }
}
_ZoomToFeatureActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        useDataSource: null
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_ZoomToFeatureActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkw7QUFDeEk7QUFFNUMsU0FBUyxzQkFBc0IsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7SUFDM0UsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQ3hFLE9BQU8sZ0JBQWdCLEtBQUssdURBQWdCLENBQUMsZ0JBQWdCO0FBQy9ELENBQUM7QUFFTSxTQUFTLDZCQUE2QixDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDbEYsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLGVBQWUsR0FBRyxnQkFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsZUFBZTtJQUM3RCxJQUFJLGdCQUFnQixHQUFHLHVEQUFnQixDQUFDLGFBQWE7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFLENBQUM7WUFDcEcsZ0JBQWdCLEdBQUcsc0JBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCO1FBQzdELENBQUM7SUFDSCxDQUFDLENB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SUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FDNUQ7NEJBQ0YsMERBQU8sU0FBUyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQ2xILENBQ0osQ0FDRixDQUNLO2dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHVCQUF1QixJQUFJLCtDQUFDLDJFQUFVO29CQUN2RCwrQ0FBQyxpREFBWSxJQUNYLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLEVBQzVKLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFDN0UsUUFBUSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsR0FDdkMsQ0FDUyxDQUNFLENBQ2IsQ0FDUDtJQUNILENBQUM7O0FBL1BNLHdDQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLG9EQUFTLENBQUM7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDcEIsQ0FBQztDQUNIO0FBOFBILGlFQUFlLHFEQUFTLENBQUMsMkJBQTJCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlVHlwZSwgTWVzc2FnZUNhcnJ5RGF0YSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJTVdpZGdldEpzb24gfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlT3V0cHV0RGF0YVNvdXJjZXMgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhID09PSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogTWVzc2FnZUNhcnJ5RGF0YSB7XG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXG4gIGNvbnN0IHB1Ymxpc2hNZXNzYWdlcyA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5wdWJsaXNoTWVzc2FnZXNcbiAgbGV0IG1lc3NhZ2VDYXJyeURhdGEgPSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2VcbiAgcHVibGlzaE1lc3NhZ2VzPy5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCBwdWJsaXNoTWVzc2FnZVByb3BlcnR5ID0gZWwgYXMgYW55XG4gICAgaWYgKHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGEgJiYgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XG4gICAgICBtZXNzYWdlQ2FycnlEYXRhID0gcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGFcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db25maWcge1xuICB1c2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXG4gIHVzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja091dEFjdGlvbkNvbmZpZyAoYWN0aW9uQ29uZmlnOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PEFjdGlvbkNvbmZpZz4sIG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgLy9jb25zdCBtZXNzYWdlV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cblxuICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxuICBjb25zdCB1c2VEYXRhU291cmNlczogSU1Vc2VEYXRhU291cmNlW10gPSBbXVxuICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlKSB7XG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gICAgLy9pZiAobWVzc2FnZVdpZGdldEpzb24gJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZvckVhY2goKHVzZURTLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbdXNlRFMuZGF0YVNvdXJjZUlkXVxuICAgICAgICBsZXQgdGVtcFVzZURhdGFTb3VyY2VcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEUy5kYXRhU291cmNlSWQsXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEUy5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRFMucm9vdERhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURTLmRhdGFWaWV3SWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmICghdXNlRGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZSA9IHRlbXBVc2VEYXRhU291cmNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSwgbWVzc2FnZVR5cGUpXG4gICAgaWYgKGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcykge1xuICAgICAgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLmZvckVhY2godXNlRFMgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wVXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIHVzZURTLCBtZXNzYWdlVHlwZSlcbiAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3V0VXNlRGF0YVNvdXJjZSAobWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxuICAvL2NvbnN0IHdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxuICBsZXQgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXG4gIGxldCBpc01hcERzID0gZmFsc2VcblxuICBjb25zdCBkc0lkID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXG4gIGlmICghZHNJZCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cbiAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XG4gICAgaXNNYXBEcyA9IHRydWVcbiAgfVxuXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XG5cbiAgaWYgKGlzTWFwRHMpIHtcbiAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1VzZU9sZERzKSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGZlYXR1cmVsYXllciBkc1xuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvbGRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gb2xkVXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA6IG9sZFVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxuICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8ubWFpbkRhdGFTb3VyY2VJZCA6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXG4gICAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XG4gICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNVc2VPbGREcykge1xuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XG4gICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxuICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5yb290RGF0YVNvdXJjZUlkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZURhdGFTb3VyY2VJbmZvICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxuICBsZXQgaXNSZWFkT25seSA9IGZhbHNlXG4gIGNvbnN0IGRzUm9vdElkcyA9IGdldERzUm9vdElkc0J5V2lkZ2V0SWQod2lkZ2V0SWQpXG4gIC8vaWYgKGRzUm9vdElkcyAmJiBkc1Jvb3RJZHMubGVuZ3RoID09PSAwICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxuICAvL31cblxuICAvL2lmICghZHNSb290SWRzICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxuICAvL31cblxuICBpZiAoIWRzUm9vdElkcyB8fCBkc1Jvb3RJZHM/Lmxlbmd0aCA9PT0gMCkge1xuICAgIGlzUmVhZE9ubHkgPSBjaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIG1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHMpXG4gIH1cblxuICBjb25zdCBmcm9tRHNJZHMgPSBkc1Jvb3RJZHMgPyB1bmRlZmluZWQgOiBnZXREc0lkc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xuICAgIGlzUmVhZE9ubHk6IGlzUmVhZE9ubHksXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW10sXG4gICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxuICAgIGZyb21Ec0lkczogZnJvbURzSWRzXG4gIH1cblxuICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBJbW11dGFibGUoW10pXG4gIGNvbnN0IG91dHB1dERhdGFTb3VyY2VzID0gaW5pdE91dHB1dERhdGFTb3VyY2VzKHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzKSB8fCBJbW11dGFibGUoW10pXG4gIGNvbnN0IGJvdGhEYXRhc291cmNlID0gdXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkuY29uY2F0KG91dHB1dERhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKVxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiBvdXRwdXREYXRhU291cmNlc1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxuICAgICAgcmV0dXJuIHVzZURhdGFTb3VyY2VzXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxuICAgICAgcmV0dXJuIEltbXV0YWJsZShib3RoRGF0YXNvdXJjZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE91dHB1dERhdGFTb3VyY2VzIChvdXRwdXREYXRhU291cmNlcyk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcbiAgY29uc3QgZHMgPSBvdXRwdXREYXRhU291cmNlcz8ubWFwKGRzSWQgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICBtYWluRGF0YVNvdXJjZUlkOiBkc0lkLFxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxuICAgIH1cbiAgfSkgPz8gW11cbiAgcmV0dXJuIEltbXV0YWJsZShkcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNPbmx5T25lRHMgKHdpZGdldEpzb246IElNV2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdpZGdldEpzb24/LmlkLCBtZXNzYWdlVHlwZSlcbiAgY29uc3Qgb3V0cHV0RHMgPSB3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcyB8fCBbXVxuICBjb25zdCB1c2VEcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IFtdXG4gIGlmIChkc1Jvb3RJZHMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiBvdXRwdXREcz8ubGVuZ3RoID09PSAxXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gdXNlRHM/Lmxlbmd0aCA9PT0gMVxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcbiAgICAgIGNvbnN0IGRzTGVuZ3RoID0gb3V0cHV0RHMubGVuZ3RoICsgdXNlRHMubGVuZ3RoXG4gICAgICByZXR1cm4gZHNMZW5ndGggPT09IDFcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29uZmlnICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXG59XG5cbmZ1bmN0aW9uIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nKSB7XG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXG4gIGNvbnN0IHJvb3RJZHMgPSBbXVxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxuICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcbiAgICAgIHJvb3RJZHMucHVzaCh1c2VEUy5kYXRhU291cmNlSWQpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcm9vdElkcy5sZW5ndGggPiAwID8gSW1tdXRhYmxlKHJvb3RJZHMpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdldERzSWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcbiAgcmV0dXJuIEltbXV0YWJsZShtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubWFwKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xuICAgIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICBsZXQgcmVzdWx0RHNcbiAgICBpZiAoZHMgJiYgZHMuaXNEYXRhVmlldykge1xuICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcbiAgICAgIHJlc3VsdERzID0gZHM/LmdldE1haW5EYXRhU291cmNlKClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0RHMgPSBkc1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0RHM/LmlkXG4gIH0pID8/IFtdKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXG4gIHNvdXJjZURlc2NyaXB0OiAnQSB3ZWIgbWFwIG9yIHdlYiBzY2VuZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSB0d28uJyxcbiAgc2VsZWN0VGhpcmRNYXBIaW50OiAnUGxlYXNlIHVuc2VsZWN0IGEgbWFwIG9yIHNjZW5lIGJlZm9yZSB5b3UgY2hvb3NlIGFub3RoZXIgb25lLiBVcCB0byB0d28gYXJlIHN1cHBvcnRlZC4nLFxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxuICBpbml0aWFsTWFwVmlldzogJ0luaXRpYWwgdmlldycsXG4gIHNlbGVjdE1hcDogJ1NlbGVjdCBtYXAnLFxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXG4gIGRlZmF1bHRWaWV3OiAnRGVmYXVsdCcsXG4gIGRlZmF1bHRWaWV3VGlwOiAnSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgbWFwIGluaGVyaXRlZCBmcm9tIHRoZSB3ZWIgbWFwIG9yIHdlYiBzY2VuZScsXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxuICBjdXN0b21WaWV3VGlwOiAnQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIG9mIHRoZSBtYXAnLFxuICBjdXN0b21WaWV3U2V0OiAnTW9kaWZ5JyxcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxuICBvcHRpb25zOiAnT3B0aW9ucycsXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXG4gIGZlYXR1cmVTZWxlY3Rpb25Db2xvcjogJ0ZlYXR1cmUgc2VsZWN0aW9uIGNvbG9ycycsXG4gIGZlYXR1cmVIaWdobGlnaHRGaWxsOiAnSGlnaGxpZ2h0IGZpbGwnLFxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcbiAgZGlzYWJsZVNjcm9sbFpvb206ICdEaXNhYmxlIHNjcm9sbCB6b29taW5nJyxcbiAgZW5hYmxlU2Nyb2xsWm9vbTogJ0VuYWJsZSBzY3JvbGwgem9vbWluZycsXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcbiAgZW5hYmxlUG9wVXA6ICdFbmFibGUgcG9wLXVwJyxcbiAgc2hvd1BvcHVwVXBvblNlbGVjdGlvbjogJ1Nob3cgcG9wLXVwIHVwb24gZmVhdHVyZSBzZWxlY3Rpb24nLFxuICBzaG93UG9wdXBVcG9uU2VsZWN0aW9uVG9vbHRpcDogJ1NlbGVjdGlvbiBtYWRlIGludGVyYWN0aXZlbHkgZnJvbSB0aGUgbWFwIGlzIGV4Y2x1ZGVkLicsXG4gIGRvY2tQb3B1cDogJ0RvY2sgdGhlIHBvcC11cCcsXG4gIHNjZW5lUXVhbGl0eU1vZGU6ICdTY2VuZSBxdWFsaXR5IG1vZGUnLFxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXG4gIGRhdGFSZWxhdGlvblNoaXA6ICdEYXRhIHJlbGF0aW9uc2hpcCcsXG4gIG1hcE5vbmU6ICdub25lJyxcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXG4gIG1hcExheW91dDogJ1Rvb2xzIGxheW91dCcsXG4gIG1hcExheW91dF9MYXJnZUFuZE1lZGl1bTogJ0xhcmdlIGFuZCBtZWRpdW0gc2l6ZScsXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxuICBlbmFibGVDbGllbnRTaWRlUXVlcnk6ICdFbmFibGUgY2xpZW50LXNpZGUgcXVlcnknLFxuICBjbGllbnRRdWVyeUhlbHBUaXAxOiAnSWYgZW5hYmxlZCwgd2lkZ2V0cyB1c2luZyB0aGUgd2ViIG1hcCBkYXRhIHdpbGwgYXBwbHkgY2xpZW50LXNpZGUgcXVlcmllcy4gUGxlYXNlIGJlIGF3YXJlIHRoYXQgaXQgbWlnaHQgdGFrZSBhIGxvbmdlciB0aW1lIGJlZm9yZSB5b3UgY2FuIHNlZSB0aGUgZmVhdHVyZXMgc2luY2UgdGhlIG1hcCB3aWxsIHF1ZXJ5IG1vcmUgZmllbGRzIGJlZm9yZSBpdCBmdWxseSByZW5kZXJzLicsXG4gIGNsaWVudFF1ZXJ5SGVscFRpcDI6ICdPbmUgd2ViIG1hcCBjYW4gYmUgZW5hYmxlZCBvbmx5IG9uY2UgaW4gYW55IG1hcCB3aWRnZXQuIFdlYiBzY2VuZXMgZG8gbm90IHN1cHBvcnQgY2xpZW50LXNpZGUgcXVlcmllcy4nLFxuICBjbGllbnRRdWVyeURpc2FibGVkVGlwOiAnVGhpcyB3ZWIgbWFwIGhhcyB0aGUgY2xpZW50LXNpZGUgcXVlcnkgZW5hYmxlZCBpbiBhbm90aGVyIG1hcCB3aWRnZXQuJyxcblxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcbiAgbWFwQWN0aW9uX0NvbmRpdGlvbnM6ICdDb25kaXRpb25zJyxcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQ6ICdTZWxlY3QgYSB0cmlnZ2VyIGZpZWxkJyxcbiAgbWFwQWN0aW9uX05vbmU6ICdub25lJyxcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkOiAnU2VsZWN0IGFuIGFjdGlvbiBmaWVsZCcsXG4gIG1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9uczogJ01vcmUgY29uZGl0aW9ucycsXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcbiAgbWFwQWN0aW9uX0Nob29zZUxheWVyOiAnU2VsZWN0IGRhdGEnLFxuICBtYXBBY3Rpb25fQXV0b0JpbmQ6ICdBdXRvIGJvdW5kLicsXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxuICBtYXBBY3Rpb25fUG9pbnQ6ICdQb2ludCcsXG4gIG1hcEFjdGlvbl9Qb2x5bGluZTogJ1BvbHlsaW5lJyxcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcbiAgbWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHM6ICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyxcbiAgbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHM6ICdVc2UgY3VzdG9tIHN5bWJvbHMnLFxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXG4gIG1hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWM6ICdBdXRvbWF0aWMnLFxuICBtYXBab29tVG9BY3Rpb25fQ3VzdG9tOiAnQ3VzdG9tJyxcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsIGNzcywganN4LCB0eXBlIEFjdGlvblNldHRpbmdQcm9wcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCxcbiAgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBwb2xpc2hlZCwgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZSwgdHlwZSBVc2VEYXRhU291cmNlLCBNZXNzYWdlVHlwZSwgQ09OU1RBTlRTLCBBbGxEYXRhU291cmNlVHlwZXNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgUmFkaW8sIE51bWVyaWNJbnB1dCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yLCBERUZBVUxUX0RBVEFfVklFV19JRCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgdHlwZSBBY3Rpb25Db25maWcsIGNoZWNrT3V0QWN0aW9uQ29uZmlnLCBnZXRVc2VEYXRhU291cmNlSW5mbywgZ2V0RHNCeVdpZGdldElkLCBnZXRBcHBDb25maWcgfSBmcm9tICcuL2FjdGlvbi11dGlscydcblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcbn1cblxuaW50ZXJmYWNlIFN0YXRlcyB7XG4gIGlzU2hvd0xheWVyTGlzdDogYm9vbGVhblxuICBkaXNhYmxlRGF0YVRyaWdnZXI6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIENvbmZpZyBleHRlbmRzIEFjdGlvbkNvbmZpZyB7XG4gIC8vdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxuICAvL3VzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdXG4gIGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uPzogYm9vbGVhblxuICB6b29tVG9PcHRpb24/OiB7XG4gICAgc2NhbGU6IG51bWJlclxuICB9XG59XG5cbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cblxuY29uc3QgRFNTZWxlY3RvclR5cGVzID0gSW1tdXRhYmxlKFtBbGxEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyLCBBbGxEYXRhU291cmNlVHlwZXMuU2NlbmVMYXllcl0pXG5cbmNsYXNzIF9ab29tVG9GZWF0dXJlQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xuICBOb0xvY2tUcmlnZ2VyTGF5ZXJXaWRnZXRzID0gWydNYXAnXVxuXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBib3R0b206ICcwJyxcbiAgICB3aWR0aDogJzI1OXB4JyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBib3JkZXJSaWdodDogJycsXG4gICAgYm9yZGVyQm90dG9tOiAnJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMXB4J1xuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm1vZGFsU3R5bGUuYm9yZGVyUmlnaHQgPSAnMXB4IHNvbGlkIGJsYWNrJ1xuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXG4gICAgICBkaXNhYmxlRGF0YVRyaWdnZXI6IHByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb25maWc6IEltbXV0YWJsZSh7XG4gICAgICB1c2VEYXRhU291cmNlOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvL2NvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxuICAgIGNvbnN0IGluaXRDb25maWcgPSBjaGVja091dEFjdGlvbkNvbmZpZyh0aGlzLnByb3BzLmNvbmZpZywgdGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXG5cbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgaW5pdENvbmZpZy51c2VEYXRhU291cmNlKVxuICAgIGNvbmZpZyA9IGNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2VzJywgaW5pdENvbmZpZy51c2VEYXRhU291cmNlcylcblxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiBjb25maWdcbiAgICB9KVxuICB9XG5cbiAgZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5zZXR0aW5nLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDEwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfSAke3BvbGlzaGVkLnJlbSgwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfVxuICAgICAgfVxuXG4gICAgICAuZGVsZXRlSWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICB9XG5cbiAgICAgIC5kZWxldGVJY29uOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgXG4gIH1cblxuICBoYW5kbGVUcmlnZ2VyTGF5ZXJDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkKHVzZURhdGFTb3VyY2VzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCA9IChjdXJyZW50U2VsZWN0ZWREczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XG4gICAgLy8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzIGlzIHdpZGdldHMud2lkZ2V0XzIudXNlRGF0YVNvdXJjZXMuXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxuXG4gICAgbGV0IGZpbmFsU2VsZWN0ZWREcyA9IG51bGxcblxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gICAgY29uc3Qgd2lkZ2V0c0luZm8gPSBhcHBDb25maWc/LndpZGdldHNcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0SW5mbyA9IHdpZGdldHNJbmZvICYmIHdpZGdldHNJbmZvW3RoaXMucHJvcHMubWVzc2FnZVdpZGdldElkXVxuICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSAmJiBtZXNzYWdlV2lkZ2V0SW5mbyAmJiBtZXNzYWdlV2lkZ2V0SW5mby51cmkgJiYgbWVzc2FnZVdpZGdldEluZm8udXJpLmluY2x1ZGVzKCdhcmNnaXMtbWFwJykpIHtcbiAgICAgIC8vIE1hcCB3aWRnZXQgc3VwcG9ydHMgcHVibGlzaGluZyAnRVhURU5UX0NIQU5HRScgYW5kICdEQVRBX1JFQ09SRFNfU0VMRUNUSU9OX0NIQU5HRScgbWVzc2FnZXMgYW5kIE1hcCB3aWRnZXQgb25seSBzdG9yZXMgV2ViTWFwIG9yIFdlYlNjZW5lIGRhdGEgc291cmNlcyBpbiB1c2VEYXRhU291cmNlcy5cbiAgICAgIC8vIFNvIGlmIHRoZSBtZXNzYWdlIHdpZGdldCBpcyBNYXAgd2lkZ2V0LCB3ZSBjYW4ndCBmaWx0ZXIgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzIChXZWJNYXAgb3IgV2ViU2NlbmUgZHMpIGJ5IGN1cnJlbnRTZWxlY3RlZERzKGxheWVyIGRzKS5cbiAgICAgIGZpbmFsU2VsZWN0ZWREcyA9IGN1cnJlbnRTZWxlY3RlZERzXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBsb2dpYyB3aWxsIGZpbHRlciBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgYnkgY3VycmVudFNlbGVjdGVkRHMuXG4gICAgICAvLyBzdXBwb3J0cyBkYXRhIHZpZXdcbiAgICAgIC8vIGZpbmFsU2VsZWN0ZWREcyBpcyB1c2VkIHRvIHVwZGF0ZSBhcHBDb25maWcubWVzc2FnZUNvbmZpZ3MubWVzc2FnZUNvbmZpZ18xLmFjdGlvbnNbMF0uY29uZmlnLnVzZURhdGFTb3VyY2VzIGFuZCB3ZSBtdXN0IG1ha2Ugc3VyZSBmaW5hbFNlbGVjdGVkRHMgaXMgdGhlIHN1YnNldCBvZiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuXG4gICAgICAvLyBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgYSBuZXcgZGF0YSBzb3VyY2UgZnJvbSB0aGUgRGF0YVNvdXJjZVNlbGVjdG9yLCB0aGUgRGF0YVNvdXJjZVNlbGVjdG9yLm9uQ2hhbmdlKGN1cnJlbnRTZWxlY3RlZERzKSBldmVudCB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICAgIC8vIGN1cnJlbnRTZWxlY3RlZERzIGNvbnRhaW5zIHRoZSBuZXdseSBzZWxlY3RlZCBkYXRhIHNvdXJjZSwgYnV0IHRoZSBuZXdseSBzZWxlY3RlZCBkYXRhIHNvdXJjZSBtdXN0IGJlIHRoZSBkZWZhdWx0IHZpZXcuXG4gICAgICAvLyBCdXQgdGhlIHVzZURhdGFTb3VyY2VzIGNvbmZpZ3VyZWQgaW4gdGhlIHdpZGdldCBtYXkgbm90IGJlIGRlZmF1bHQgdmlldywgc28gd2UgY2FuJ3QgdXNlIGN1cnJlbnRTZWxlY3RlZERzIGFzIGZpbmFsU2VsZWN0ZWREcyBkaXJlY3RseS5cbiAgICAgIC8vIFRvIG1ha2Ugc3VyZSBmaW5hbFNlbGVjdGVkRHMgaXMgdGhlIHN1YnNldCBvZiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMsIGl0IGlzIG5lY2Vzc2FyeSB0byBmaWx0ZXIgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzIGJ5IGN1cnJlbnRTZWxlY3RlZERzLlxuICAgICAgZmluYWxTZWxlY3RlZERzID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZpbHRlcihtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBjdXJyZW50U2VsZWN0ZWREcy5maW5kKGRzID0+IHtcbiAgICAgICAgICBpZiAoKCFkcy5kYXRhVmlld0lkIHx8IGRzLmRhdGFWaWV3SWQgPT09IENPTlNUQU5UUy5PVVRQVVRfREFUQV9WSUVXX0lEKSAmJiAhdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZXM/LmZpbmQocHJlRHMgPT4gZHMubWFpbkRhdGFTb3VyY2VJZCA9PT0gcHJlRHMubWFpbkRhdGFTb3VyY2VJZCkpIHtcbiAgICAgICAgICAgIC8vIHNlbGVjdCBkcyBmcm9tIGRzIGxpc3RcbiAgICAgICAgICAgIHJldHVybiBkcy5tYWluRGF0YVNvdXJjZUlkID09PSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNlbGVjdCBkcyBmcm9tIGRhdGEgdmlldyBjaGVjayBib3hcbiAgICAgICAgICAgIHJldHVybiBkcy5kYXRhU291cmNlSWQgPT09IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoZGF0YVNvdXJjZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZScsIGZpbmFsU2VsZWN0ZWREc1swXSlcbiAgICAvLyBzdXBwb3J0cyBtdWx0aXBsZSB0cmlnZ2VyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBmaW5hbFNlbGVjdGVkRHMpXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IGNvbmZpZ1xuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllciA9ICgpID0+IHtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgbnVsbClcbiAgICAvLyBzdXBwb3J0cyBtdWx0aXBsZSB0cmlnZ2VyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBbXSlcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uID0gKGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbiB8fCAhdGhpcy5wcm9wcy5jb25maWcuem9vbVRvT3B0aW9uLnNjYWxlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcbiAgICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21ab29tVG9PcHRpb24nLCBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbikuc2V0SW4oWyd6b29tVG9PcHRpb24nLCAnc2NhbGUnXSwgNTAwMClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21ab29tVG9PcHRpb24nLCBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbilcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2V0Q3VzdG9tWm9vbVNjYWxlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnem9vbVRvT3B0aW9uJywgJ3NjYWxlJ10sIHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICBnZXRUcmlnZ2VyTGF5ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIC8vY29uc3QgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhID0gdGhpcy5nZXREc1NlbGVjdG9yU291cmNlRGF0YSh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZSwgdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZXMpXG4gICAgY29uc3QgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhID0gZ2V0VXNlRGF0YVNvdXJjZUluZm8odGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2UsIHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2VzLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxuXG4gICAgbGV0IHVzZURhdGFTb3VyY2VzXG4gICAgaWYgKHRoaXMuY2hlY2tJc1N1cHBvcnRNdWx0aXBsZVRyaWdnZXJEYXRhU291cmNlcyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCkgfHwgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICB1c2VEYXRhU291cmNlcyA9IEltbXV0YWJsZSh0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZURhdGFTb3VyY2VzID0gdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2UgPyBJbW11dGFibGUoW3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlXSkgOiBJbW11dGFibGUoW10pXG4gICAgfVxuICAgIGNvbnN0IGlzRGlzYWJsZURhdGFWaWV3ID0gdGhpcy5jaGVja0lzRGlzYWJsZURhdGFWaWV3KHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkKVxuICAgIGNvbnN0IGlzRGlzYWJsZURhdGFTb3VyY2VMaXN0ID0gdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHkgJiYgaXNEaXNhYmxlRGF0YVZpZXdcbiAgICAvLyBpZiBEYXRhU291cmNlU2VsZWN0b3IucHJvcHMuZGlzYWJsZURhdGFTb3VyY2VMaXN0IGlzIHRydWUsIG1lYW5zIERhdGFTb3VyY2VTZWxlY3RvcidzICdTZWxlY3QgZGF0YScgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgIHJldHVybiAoXG4gICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XG4gICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cbiAgICAgICAgZnJvbVJvb3REc0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Sb290RHNJZHN9XG4gICAgICAgIGZyb21Ec0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Ec0lkc31cbiAgICAgICAgaGlkZUFkZERhdGFCdXR0b25cbiAgICAgICAgaGlkZVR5cGVEcm9wZG93blxuICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICBkaXNhYmxlUmVtb3ZlPXsoKSA9PiB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cbiAgICAgICAgZGlzYWJsZURhdGFTb3VyY2VMaXN0PXtpc0Rpc2FibGVEYXRhU291cmNlTGlzdH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxuICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWR9XG4gICAgICAgIGRpc2FibGVEYXRhVmlldz17ZmFsc2V9XG4gICAgICAgIGhpZGVEYXRhVmlldz17KChkYXRhVmlld0pzb24sIG1haW5EYXRhU291cmNlSWQpID0+IHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRNZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZmlsdGVyKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSBtYWluRGF0YVNvdXJjZUlkXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCB0YXJnZXREc1ZpZXcgPSBmaWx0ZXJlZE1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5maW5kKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlID0+IHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWRcbiAgICAgICAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5kYXRhVmlld0lkKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlRGF0YVZpZXdJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFWaWV3SWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlRGF0YVZpZXdJZCA9IERFRkFVTFRfREFUQV9WSUVXX0lEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VEYXRhVmlld0lkID09PSBkYXRhVmlld0pzb24uaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiAhdGFyZ2V0RHNWaWV3XG4gICAgICAgIH0pfVxuICAgICAgICBpc011bHRpcGxlPXt0aGlzLmNoZWNrSXNTdXBwb3J0TXVsdGlwbGVUcmlnZ2VyRGF0YVNvdXJjZXModGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQpfVxuICAgICAgICBpc011bHRpcGxlRGF0YVZpZXc9e3RydWV9XG4gICAgICAgIGhpZGVDcmVhdGVWaWV3QnV0dG9uXG4gICAgICAgIGVuYWJsZVRvU2VsZWN0T3V0cHV0RHNGcm9tU2VsZj17dHJ1ZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgY2hlY2tJc1N1cHBvcnRNdWx0aXBsZVRyaWdnZXJEYXRhU291cmNlcyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcbiAgICBjb25zdCB3aWRnZXRMYWJlbCA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5sYWJlbFxuICAgIGlmICh3aWRnZXRMYWJlbCA9PT0gJ01hcCcpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZSB8fCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJc0Rpc2FibGVEYXRhVmlldyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvL2NvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xuICAgIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxuICAgIC8vaWYgKHdpZGdldEpzb24pIHtcbiAgICAvLyAgY29uc3Qgd2lkZ2V0TGFiZWwgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ubGFiZWxcbiAgICAvLyAgaWYgKHdpZGdldExhYmVsID09PSAnTWFwJykge1xuICAgIC8vICAgIHJldHVybiB0cnVlXG4gICAgLy8gIH0gZWxzZSB7XG4gICAgLy8gICAgcmV0dXJuIGZhbHNlXG4gICAgLy8gIH1cbiAgICAvL30gZWxzZSB7XG4gICAgLy8gIHJldHVybiBmYWxzZVxuICAgIC8vfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjc3M9e3RoaXMuZ2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxuICAgICAgICB7IXRoaXMuc3RhdGUuZGlzYWJsZURhdGFUcmlnZ2VyICYmIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXIgfSl9PlxuICAgICAgICAgIHt0aGlzLmdldFRyaWdnZXJMYXllckNvbnRlbnQoKX1cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGUnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGUgfSl9PlxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XG4gICAgICAgICAgICAgICAgPFJhZGlvXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjaGVja2VkPXshdGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21ab29tVG9PcHRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKGZhbHNlKSB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBab29tVG9BY3Rpb25fQXV0b21hdGljJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBab29tVG9BY3Rpb25fQXV0b21hdGljIH0pfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XG4gICAgICAgICAgICAgICAgPFJhZGlvXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21ab29tVG9PcHRpb24odHJ1ZSkgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwWm9vbVRvQWN0aW9uX0N1c3RvbScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwWm9vbVRvQWN0aW9uX0N1c3RvbSB9KX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21ab29tVG9PcHRpb24gJiYgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZSB9KX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbiAmJiB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9PcHRpb24uc2NhbGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNldEN1c3RvbVpvb21TY2FsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TZXR0aW5nUm93Pn1cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoX1pvb21Ub0ZlYXR1cmVBY3Rpb25TZXR0aW5nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9