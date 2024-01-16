System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
/*!****************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action.ts ***!
  \****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOnMapAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");



class ShowOnMapAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange) {
            const dataSourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_2__.getDsByWidgetId)(messageDescription.widgetId, messageDescription.messageType);
            return messageWidgetUseDataSources.some(useDataSource => {
                const ds = dataSourceManager.getDataSource(useDataSource.dataSourceId);
                // widget1 send message to map widget, ds comes from widget1.useDataSources.
                if (ds) {
                    // #16835, ds maybe not ready when the ExB app is opened and add the message action immediately in widget action setting
                    const dsJson = ds.getDataSourceJson();
                    return !!(dsJson && dsJson.geometryType);
                }
                return false;
            });
        }
        else {
            return false;
        }
    }
    filterMessage(message) {
        return true;
    }
    onRemoveListen(messageType, messageWidgetId) {
        var _a;
        const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
        const newShowOnMapDatas = {};
        Object.entries(showOnMapDatas).forEach(entry => {
            var _a;
            if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) !== messageWidgetId) {
                newShowOnMapDatas[entry[0]] = entry[1];
            }
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', newShowOnMapDatas);
    }
    //getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    //  return 'message-actions/show-on-map-action-setting'
    //}
    onExecute(message, actionConfig) {
        var _a;
        const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const defaultViewId = this._getDefaultViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const jimuMapViewId = activeViewId || defaultViewId;
        let showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
        if (message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.CreateUpdate) {
            message.dataRecordSets.forEach(dataRecordSet => {
                const idBase = this._getIdBase(dataRecordSet.name);
                const idTemporary = `${idBase}???`;
                // id is used as layerId
                const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary;
                if (defaultViewId && defaultViewId === activeViewId) {
                    // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId
                    // handle situation:
                    //   if the map widget has not been loaded in another page and the map widget has two views (view1 and view2),
                    //   the view id is unknown at this time, so ues a temporary view id to add data first, until the page is
                    //   loaded and add data again, delete the data corresponding to this temporary view id and use crrrent
                    //   active view id to add data.
                    delete showOnMapDatas[idTemporary];
                }
                showOnMapDatas[id] = {
                    mapWidgetId: this.widgetId,
                    messageWidgetId: message.widgetId,
                    // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget
                    jimuMapViewId: jimuMapViewId, // activeViewId,
                    dataSet: dataRecordSet,
                    type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.MessageAction,
                    // use code to maintain compatibility here
                    // for 'symbolOption', the difference between the values 'undefined' and 'null':
                    //   undefined: app was created before online10.1 (inlcude 10.1), use default symbol;
                    //   null: app was created or saved after online10.1, use default renderer of layer.
                    // eslint-disable-next-line
                    symbolOption: (actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.isUseCustomSymbol) ? actionConfig.symbolOption : ((actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.isUseCustomSymbol) === false ? null : undefined),
                    title: id // 'Show on map message ...'
                };
            });
        }
        else if (message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Remove) {
            message.dataRecordSetNames.forEach(dataRecordSetName => {
                const idBase = this._getIdBase(dataRecordSetName);
                // delete showOnMapDatas[id]
                const newShowOnMapDatas = {};
                Object.entries(showOnMapDatas).forEach(entry => {
                    if (entry[0].indexOf(idBase) !== 0) {
                        newShowOnMapDatas[entry[0]] = entry[1];
                    }
                });
                showOnMapDatas = newShowOnMapDatas;
            });
        }
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);
        return Promise.resolve(true);
    }
    _getIdBase(dataRecordSetName) {
        return `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${dataRecordSetName}_`;
    }
    _getActiveViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
    }
    _getDefaultViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx1REFBZ0IsQ0FBQyxnQkFBZ0I7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcsdURBQWdCLENBQUMsYUFBYTtJQUNyRCxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sc0JBQXNCLEdBQUcsRUFBUztRQUN4QyxJQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQixLQUFJLHVCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLFdBQVcsTUFBSyxXQUFXLEVBQUUsQ0FBQztZQUNwRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7UUFDN0QsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFPTSxTQUFT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QyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVPLFVBQVUsQ0FBRSxpQkFBeUI7UUFDM0MsT0FBTyxHQUFHLG1FQUEwQixpQkFBaUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxpQkFBaUIsR0FBRztJQUM1RixDQUFDO0lBRU8sZ0JBQWdCLENBQUUsV0FBbUIsRUFBRSxLQUFvRTtRQUNqSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDckgsQ0FBQztJQUVPLGlCQUFpQixDQUFFLFdBQW1CLEVBQUUsS0FBb0U7UUFDbEgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztJQUMzRixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvc2hvdy1vbi1tYXAtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VUeXBlLCBNZXNzYWdlQ2FycnlEYXRhLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIElNV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VPdXRwdXREYXRhU291cmNlcyAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xuICBsZXQgbWVzc2FnZUNhcnJ5RGF0YSA9IE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZVxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcbiAgICBpZiAocHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YSAmJiBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXG4gICAgfVxuICB9KVxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcbiAgdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3V0QWN0aW9uQ29uZmlnIChhY3Rpb25Db25maWc6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8QWN0aW9uQ29uZmlnPiwgbWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxuXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXG4gIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXG4gICAgICAgIGxldCB0ZW1wVXNlRGF0YVNvdXJjZVxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURTLm1haW5EYXRhU291cmNlSWQsXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLCBtZXNzYWdlVHlwZSlcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBVc2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgdXNlRFMsIG1lc3NhZ2VUeXBlKVxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tPdXRVc2VEYXRhU291cmNlIChtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgb2xkVXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxuXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcbiAgaWYgKCFkc0lkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1tkc0lkXVxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICBpc01hcERzID0gdHJ1ZVxuICB9XG5cbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcblxuICBpZiAoaXNNYXBEcykge1xuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxuICAgIH0gZWxzZSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1VzZU9sZERzKSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcbiAgLy9pZiAoZHNSb290SWRzICYmIGRzUm9vdElkcy5sZW5ndGggPT09IDAgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXG4gIC8vfVxuXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXG4gIC8vfVxuXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XG4gICAgaXNSZWFkT25seSA9IGNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGUsIGRzUm9vdElkcylcbiAgfVxuXG4gIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IGdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXG4gICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcbiAgfVxuXG4gIHJldHVybiBkc1NlbGVjdG9yU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcbiAgY29uc3QgYm90aERhdGFzb3VyY2UgPSB1c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KS5jb25jYXQob3V0cHV0RGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxuICAgICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2VzXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xuICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXG4gICAgfVxuICB9KSA/PyBbXVxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBvdXRwdXREcyA9IHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzIHx8IFtdXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cbiAgaWYgKGRzUm9vdElkcykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiB1c2VEcz8ubGVuZ3RoID09PSAxXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcbiAgICAgIHJldHVybiBkc0xlbmd0aCA9PT0gMVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xuICByZXR1cm4gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWdcbn1cblxuZnVuY3Rpb24gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcpIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3Qgcm9vdElkcyA9IFtdXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICB9XG4gIH0pXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxuICAgIGxldCByZXN1bHREc1xuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XG4gICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHREcyA9IGRzXG4gICAgfVxuICAgIHJldHVybiByZXN1bHREcz8uaWRcbiAgfSkgPz8gW10pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCB0eXBlIE1lc3NhZ2UsIHR5cGUgRGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UsIFJlY29yZFNldENoYW5nZVR5cGUsIE11dGFibGVTdG9yZU1hbmFnZXIsXG4gIGdldEFwcFN0b3JlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBKaW11TWFwVmlld0luZm8sIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uLCBEYXRhU291cmNlTWFuYWdlclxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWCwgQWN0aW9uVHlwZSwgdHlwZSBTaG93T25NYXBEYXRhcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4vc2hvdy1vbi1tYXAtYWN0aW9uLXNldHRpbmcnXG5pbXBvcnQgeyBnZXREc0J5V2lkZ2V0SWQgfSBmcm9tICcuL2FjdGlvbi11dGlscydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd09uTWFwQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRTZXRDaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VEZXNjcmlwdGlvbi53aWRnZXRJZCwgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlKVxuICAgICAgcmV0dXJuIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4ge1xuICAgICAgICBjb25zdCBkcyA9IGRhdGFTb3VyY2VNYW5hZ2VyLmdldERhdGFTb3VyY2UodXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpXG5cbiAgICAgICAgLy8gd2lkZ2V0MSBzZW5kIG1lc3NhZ2UgdG8gbWFwIHdpZGdldCwgZHMgY29tZXMgZnJvbSB3aWRnZXQxLnVzZURhdGFTb3VyY2VzLlxuXG4gICAgICAgIGlmIChkcykge1xuICAgICAgICAgIC8vICMxNjgzNSwgZHMgbWF5YmUgbm90IHJlYWR5IHdoZW4gdGhlIEV4QiBhcHAgaXMgb3BlbmVkIGFuZCBhZGQgdGhlIG1lc3NhZ2UgYWN0aW9uIGltbWVkaWF0ZWx5IGluIHdpZGdldCBhY3Rpb24gc2V0dGluZ1xuICAgICAgICAgIGNvbnN0IGRzSnNvbiA9IGRzLmdldERhdGFTb3VyY2VKc29uKClcbiAgICAgICAgICByZXR1cm4gISEoZHNKc29uICYmIGRzSnNvbi5nZW9tZXRyeVR5cGUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgb25SZW1vdmVMaXN0ZW4gKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2hvd09uTWFwRGF0YXM6IFNob3dPbk1hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uc2hvd09uTWFwRGF0YXMgfHwge31cbiAgICBjb25zdCBuZXdTaG93T25NYXBEYXRhcyA9IHt9XG4gICAgT2JqZWN0LmVudHJpZXMoc2hvd09uTWFwRGF0YXMpLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKGVudHJ5WzFdPy5tZXNzYWdlV2lkZ2V0SWQgIT09IG1lc3NhZ2VXaWRnZXRJZCkge1xuICAgICAgICBuZXdTaG93T25NYXBEYXRhc1tlbnRyeVswXV0gPSBlbnRyeVsxXVxuICAgICAgfVxuICAgIH0pXG4gICAgLy8gc2F2ZSBhY3Rpb24gZGF0YVxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdzaG93T25NYXBEYXRhcycsIG5ld1Nob3dPbk1hcERhdGFzKVxuICB9XG5cbiAgLy9nZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vICByZXR1cm4gJ21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZydcbiAgLy99XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgY29uc3QgYWN0aXZlVmlld0lkID0gdGhpcy5fZ2V0QWN0aXZlVmlld0lkKHRoaXMud2lkZ2V0SWQsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5qaW11TWFwVmlld3NJbmZvKVxuICAgIGNvbnN0IGRlZmF1bHRWaWV3SWQgPSB0aGlzLl9nZXREZWZhdWx0Vmlld0lkKHRoaXMud2lkZ2V0SWQsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5qaW11TWFwVmlld3NJbmZvKVxuICAgIGNvbnN0IGppbXVNYXBWaWV3SWQgPSBhY3RpdmVWaWV3SWQgfHwgZGVmYXVsdFZpZXdJZFxuICAgIGxldCBzaG93T25NYXBEYXRhcyA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LnNob3dPbk1hcERhdGFzIHx8IHt9XG5cbiAgICBpZiAobWVzc2FnZS5jaGFuZ2VUeXBlID09PSBSZWNvcmRTZXRDaGFuZ2VUeXBlLkNyZWF0ZVVwZGF0ZSkge1xuICAgICAgbWVzc2FnZS5kYXRhUmVjb3JkU2V0cy5mb3JFYWNoKGRhdGFSZWNvcmRTZXQgPT4ge1xuICAgICAgICBjb25zdCBpZEJhc2UgPSB0aGlzLl9nZXRJZEJhc2UoZGF0YVJlY29yZFNldC5uYW1lKVxuICAgICAgICBjb25zdCBpZFRlbXBvcmFyeSA9IGAke2lkQmFzZX0/Pz9gXG4gICAgICAgIC8vIGlkIGlzIHVzZWQgYXMgbGF5ZXJJZFxuICAgICAgICBjb25zdCBpZCA9IGFjdGl2ZVZpZXdJZCA/IGAke2lkQmFzZX0ke2FjdGl2ZVZpZXdJZH1gIDogaWRUZW1wb3JhcnlcblxuICAgICAgICBpZiAoZGVmYXVsdFZpZXdJZCAmJiBkZWZhdWx0Vmlld0lkID09PSBhY3RpdmVWaWV3SWQpIHtcbiAgICAgICAgICAvLyBhbGxvdyB0byBhZGQgZGF0YSB1c2luZyBhIHRlbXBvcmFyeSBpZCwgdGVtcG9yYXJ5IGlkIGRhdGEgd2lsbCBiZSBkZWxldGVkIGlmIGNhbiBnZXQgYWN0aXZlVmlld0lkXG4gICAgICAgICAgLy8gaGFuZGxlIHNpdHVhdGlvbjpcbiAgICAgICAgICAvLyAgIGlmIHRoZSBtYXAgd2lkZ2V0IGhhcyBub3QgYmVlbiBsb2FkZWQgaW4gYW5vdGhlciBwYWdlIGFuZCB0aGUgbWFwIHdpZGdldCBoYXMgdHdvIHZpZXdzICh2aWV3MSBhbmQgdmlldzIpLFxuICAgICAgICAgIC8vICAgdGhlIHZpZXcgaWQgaXMgdW5rbm93biBhdCB0aGlzIHRpbWUsIHNvIHVlcyBhIHRlbXBvcmFyeSB2aWV3IGlkIHRvIGFkZCBkYXRhIGZpcnN0LCB1bnRpbCB0aGUgcGFnZSBpc1xuICAgICAgICAgIC8vICAgbG9hZGVkIGFuZCBhZGQgZGF0YSBhZ2FpbiwgZGVsZXRlIHRoZSBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB0ZW1wb3JhcnkgdmlldyBpZCBhbmQgdXNlIGNycnJlbnRcbiAgICAgICAgICAvLyAgIGFjdGl2ZSB2aWV3IGlkIHRvIGFkZCBkYXRhLlxuICAgICAgICAgIGRlbGV0ZSBzaG93T25NYXBEYXRhc1tpZFRlbXBvcmFyeV1cbiAgICAgICAgfVxuXG4gICAgICAgIHNob3dPbk1hcERhdGFzW2lkXSA9IHtcbiAgICAgICAgICBtYXBXaWRnZXRJZDogdGhpcy53aWRnZXRJZCxcbiAgICAgICAgICBtZXNzYWdlV2lkZ2V0SWQ6IG1lc3NhZ2Uud2lkZ2V0SWQsXG4gICAgICAgICAgLy8gU2V0IGppbXVNYXBWaWV3SWQgdG8gbnVsbCBtZWFucyB0aGUgZGF0YSB3aWxsIGJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBqaW11TWFwVmlld3Mgb2Ygb25lIG1hcFdpZGdldFxuICAgICAgICAgIGppbXVNYXBWaWV3SWQ6IGppbXVNYXBWaWV3SWQsIC8vIGFjdGl2ZVZpZXdJZCxcbiAgICAgICAgICBkYXRhU2V0OiBkYXRhUmVjb3JkU2V0LFxuICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuTWVzc2FnZUFjdGlvbixcbiAgICAgICAgICAvLyB1c2UgY29kZSB0byBtYWludGFpbiBjb21wYXRpYmlsaXR5IGhlcmVcbiAgICAgICAgICAvLyBmb3IgJ3N5bWJvbE9wdGlvbicsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHZhbHVlcyAndW5kZWZpbmVkJyBhbmQgJ251bGwnOlxuICAgICAgICAgIC8vICAgdW5kZWZpbmVkOiBhcHAgd2FzIGNyZWF0ZWQgYmVmb3JlIG9ubGluZTEwLjEgKGlubGN1ZGUgMTAuMSksIHVzZSBkZWZhdWx0IHN5bWJvbDtcbiAgICAgICAgICAvLyAgIG51bGw6IGFwcCB3YXMgY3JlYXRlZCBvciBzYXZlZCBhZnRlciBvbmxpbmUxMC4xLCB1c2UgZGVmYXVsdCByZW5kZXJlciBvZiBsYXllci5cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBzeW1ib2xPcHRpb246IGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPyBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uIDogKGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPT09IGZhbHNlID8gbnVsbCA6IHVuZGVmaW5lZCksXG4gICAgICAgICAgdGl0bGU6IGlkIC8vICdTaG93IG9uIG1hcCBtZXNzYWdlIC4uLidcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gUmVjb3JkU2V0Q2hhbmdlVHlwZS5SZW1vdmUpIHtcbiAgICAgIG1lc3NhZ2UuZGF0YVJlY29yZFNldE5hbWVzLmZvckVhY2goZGF0YVJlY29yZFNldE5hbWUgPT4ge1xuICAgICAgICBjb25zdCBpZEJhc2UgPSB0aGlzLl9nZXRJZEJhc2UoZGF0YVJlY29yZFNldE5hbWUpXG5cbiAgICAgICAgLy8gZGVsZXRlIHNob3dPbk1hcERhdGFzW2lkXVxuICAgICAgICBjb25zdCBuZXdTaG93T25NYXBEYXRhcyA9IHt9XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHNob3dPbk1hcERhdGFzKS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnlbMF0uaW5kZXhPZihpZEJhc2UpICE9PSAwKSB7XG4gICAgICAgICAgICBuZXdTaG93T25NYXBEYXRhc1tlbnRyeVswXV0gPSBlbnRyeVsxXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc2hvd09uTWFwRGF0YXMgPSBuZXdTaG93T25NYXBEYXRhc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3Nob3dPbk1hcERhdGFzJywgc2hvd09uTWFwRGF0YXMpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SWRCYXNlIChkYXRhUmVjb3JkU2V0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7U0hPV19PTl9NQVBfREFUQV9JRF9QUkVGSVh9bWVzc2FnZUFjdGlvbl8ke3RoaXMud2lkZ2V0SWR9XyR7ZGF0YVJlY29yZFNldE5hbWV9X2BcbiAgfVxuXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlZmF1bHRWaWV3SWQgKG1hcFdpZGdldElkOiBzdHJpbmcsIGluZm9zOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvIH0+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=