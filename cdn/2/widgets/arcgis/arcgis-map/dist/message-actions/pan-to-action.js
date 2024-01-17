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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts":
/*!*******************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsLive: () => (/* binding */ checkIsLive),
/* harmony export */   cloneFeature: () => (/* binding */ cloneFeature),
/* harmony export */   createNewFeaturelayer: () => (/* binding */ createNewFeaturelayer),
/* harmony export */   filterFeaturesByQuery: () => (/* binding */ filterFeaturesByQuery),
/* harmony export */   flashFeaturesByQuery: () => (/* binding */ flashFeaturesByQuery),
/* harmony export */   getJimuMapViewId: () => (/* binding */ getJimuMapViewId),
/* harmony export */   getLayersFromDataSourceIds: () => (/* binding */ getLayersFromDataSourceIds),
/* harmony export */   getMapBaseRestoreData: () => (/* binding */ getMapBaseRestoreData),
/* harmony export */   getViewpointInstanceFromHistory: () => (/* binding */ getViewpointInstanceFromHistory),
/* harmony export */   goToTargetImmediately: () => (/* binding */ goToTargetImmediately),
/* harmony export */   goToViewpointImmediately: () => (/* binding */ goToViewpointImmediately),
/* harmony export */   isNeedProjectSpatialReference: () => (/* binding */ isNeedProjectSpatialReference),
/* harmony export */   isNeedProjectViewpoint: () => (/* binding */ isNeedProjectViewpoint),
/* harmony export */   isSamelikeViewpoints: () => (/* binding */ isSamelikeViewpoints),
/* harmony export */   isTwoWidgetsMutuallyExtentChange: () => (/* binding */ isTwoWidgetsMutuallyExtentChange),
/* harmony export */   isWidgetSendZoomToActionToAnother: () => (/* binding */ isWidgetSendZoomToActionToAnother),
/* harmony export */   mapPanto: () => (/* binding */ mapPanto),
/* harmony export */   processZoomToFeatures: () => (/* binding */ processZoomToFeatures),
/* harmony export */   projectGeometries: () => (/* binding */ projectGeometries),
/* harmony export */   projectViewpoint: () => (/* binding */ projectViewpoint),
/* harmony export */   restoreMapBase: () => (/* binding */ restoreMapBase),
/* harmony export */   selectFeature: () => (/* binding */ selectFeature),
/* harmony export */   updateFeaturelayer: () => (/* binding */ updateFeaturelayer),
/* harmony export */   updateUrlHashParamsForActiveJimuMapView: () => (/* binding */ updateUrlHashParamsForActiveJimuMapView)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable prefer-const */


function createNewFeaturelayer(mapBaseView, newFeatureSetValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const newLayerPromises = [];
        newFeatureSetValue && Object.keys(newFeatureSetValue).forEach(layerId => {
            const layer = mapBaseView.map.layers.find(layer => layer.id === layerId);
            if (layer) {
                console.warn('the feature layer is already created');
                return;
            }
            newLayerPromises.push(addFeatureSetToMap(mapBaseView, newFeatureSetValue[layerId], layerId));
        });
        if (newLayerPromises.length === 0) {
            return null;
        }
        else {
            return Promise.all(newLayerPromises);
        }
    });
}
function updateFeaturelayer(mapBaseView, changedFeatureSetValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatePromises = [];
        changedFeatureSetValue && Object.keys(changedFeatureSetValue).forEach(layerId => {
            const layer = mapBaseView.map.layers.find(layer => layer.id === layerId);
            if (layer) {
                mapBaseView.map.remove(layer);
                updatePromises.push(addFeatureSetToMap(mapBaseView, changedFeatureSetValue[layerId], layerId));
            }
        });
        if (updatePromises.length === 0) {
            return null;
        }
        else {
            return Promise.all(updatePromises);
        }
    });
}
function addFeatureSetToMap(mapBaseView, featureSet, layerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer'
            ]).then(modules => {
                if (featureSet.features.length < 1) {
                    resolve(null);
                }
                else {
                    // let FeatureSet: typeof  __esri.FeatureSet;
                    let FeatureLayer;
                    // eslint-disable-next-line
                    [FeatureLayer] = modules;
                    const layerFromFeatureSet = featureSet.features[0].layer;
                    const fieldsInFeaturelayer = [];
                    const fieldMap = {};
                    for (let i = 0; i < layerFromFeatureSet.fields.length; i++) {
                        const fieldsItem = getReasonableField(layerFromFeatureSet.fields[i]);
                        fieldMap[layerFromFeatureSet.fields[i].name] = fieldsItem.name;
                        fieldsInFeaturelayer.push(fieldsItem);
                    }
                    const fieldsInPopupTemplate = [];
                    for (const key in featureSet.features[0].attributes) {
                        if (fieldMap[key]) {
                            const fieldsItem = {
                                fieldName: fieldMap[key],
                                label: key
                            };
                            fieldsInPopupTemplate.push(fieldsItem);
                        }
                    }
                    const sourceFeatures = [];
                    featureSet.features.forEach((feature, index) => {
                        const tempFeature = feature;
                        if (tempFeature.attributes) {
                            for (const key in tempFeature.attributes) {
                                tempFeature.attributes[fieldMap[key]] = tempFeature.attributes[key];
                            }
                            tempFeature.attributes.exbfid = index;
                        }
                        else {
                            tempFeature.attributes = {
                                exbfid: index
                            };
                        }
                        sourceFeatures.push(tempFeature);
                    });
                    const layer = new FeatureLayer({
                        id: layerId,
                        title: layerFromFeatureSet.title,
                        source: sourceFeatures,
                        fields: fieldsInFeaturelayer,
                        outFields: ['*'],
                        objectIdField: 'exbfid',
                        renderer: layerFromFeatureSet.renderer,
                        popupEnabled: true,
                        popupTemplate: {
                            title: 'information',
                            content: [{
                                    type: 'fields',
                                    fieldInfos: fieldsInPopupTemplate
                                }]
                        }
                    });
                    mapBaseView.map.add(layer);
                    layer.on('layerview-create', event => {
                        resolve(null);
                    });
                }
            });
        });
    });
}
function getReasonableField(field) {
    // the function is supported to normalize the field.name
    const fieldName = field.name;
    return {
        name: fieldName.replace(/\./g, '_').replace(/\(/g, '_').replace(/\)/g, '_'),
        alias: field.alias,
        type: field.type
    };
}
function selectFeature(mapBaseView, target, layerId) {
    // In this function, we assume that features come from the same layer
    let featureLayerId = layerId;
    let featureLayerView = null;
    let tempFeature = null;
    // if layerId doesn't exist, we get layerId by feature
    if (!featureLayerId) {
        if (target instanceof Array) {
            tempFeature = target[0];
        }
        else {
            tempFeature = target;
        }
        if (tempFeature) {
            featureLayerId = tempFeature.layer && tempFeature.layer.id;
        }
    }
    if (featureLayerId) {
        const layerViews = mapBaseView.allLayerViews;
        for (let i = 0; i < layerViews.length; i++) {
            if (layerViews.getItemAt(i).layer.id === featureLayerId) {
                featureLayerView = layerViews.getItemAt(i);
            }
        }
        if (featureLayerView) {
            return {
                layerId: featureLayerId,
                handle: featureLayerView.highlight(target)
            };
        }
        else {
            return null;
        }
    }
}
function goToTargetImmediately(view, _target) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewSR = view.spatialReference;
        const geometries = yield projectGeometries([_target], viewSR);
        if (geometries && geometries.length > 0) {
            const target = geometries[0];
            view.goTo(target, { animate: false });
        }
    });
}
function goToViewpointImmediately(view, _viewpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewSR = view.spatialReference;
        const viewpoint = yield projectViewpoint(_viewpoint, viewSR);
        // view.goTo(viewpoint, { animate: false })
        view.viewpoint = viewpoint;
    });
}
function isNeedProjectViewpoint(viewpoint, viewSR) {
    var _a, _b, _c;
    const sr1 = (_a = viewpoint.targetGeometry) === null || _a === void 0 ? void 0 : _a.spatialReference;
    if (sr1 && isNeedProjectSpatialReference(sr1, viewSR)) {
        return true;
    }
    const sr2 = (_c = (_b = viewpoint.camera) === null || _b === void 0 ? void 0 : _b.position) === null || _c === void 0 ? void 0 : _c.spatialReference;
    if (sr2 && isNeedProjectSpatialReference(sr2, viewSR)) {
        return true;
    }
    return false;
}
function isNeedProjectSpatialReference(sr1, sr2) {
    const isSame = sr1.wkid === sr2.wkid || sr1.equals(sr2);
    //  In JS API 4.x, the view can handle WebMercator and WGS84 spatialReference auto
    const isLike = (sr1.isWebMercator || sr1.isWGS84) && (sr2.isWebMercator || sr2.isWGS84);
    return !isSame && !isLike;
}
function projectViewpoint(_viewpoint, viewSR) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const viewpoint = _viewpoint.clone();
        const targetGeometry = viewpoint.targetGeometry;
        const cameraPositon = (_a = viewpoint.camera) === null || _a === void 0 ? void 0 : _a.position;
        const toProjectGeometries = [];
        let isProjectTargetGeometry = false;
        let isProjectCameraPosition = false;
        if (targetGeometry && isNeedProjectSpatialReference(targetGeometry.spatialReference, viewSR)) {
            isProjectTargetGeometry = true;
            toProjectGeometries.push(targetGeometry);
        }
        if (cameraPositon && isNeedProjectSpatialReference(cameraPositon.spatialReference, viewSR)) {
            isProjectCameraPosition = true;
            toProjectGeometries.push(cameraPositon);
        }
        if (toProjectGeometries.length > 0) {
            const projectedGeometries = yield projectGeometries(toProjectGeometries, viewSR);
            if (isProjectTargetGeometry) {
                viewpoint.targetGeometry = projectedGeometries[0];
            }
            if (isProjectCameraPosition) {
                viewpoint.camera.position = projectedGeometries[projectedGeometries.length - 1];
            }
        }
        return viewpoint;
    });
}
function mapPanto(mapBaseView, target) {
    return __awaiter(this, void 0, void 0, function* () {
        const panToTarget = target;
        const tempBaseMapView = mapBaseView;
        if (panToTarget instanceof Array) {
            if (panToTarget.length === 0) {
                yield Promise.resolve();
                return;
            }
            if (panToTarget[0].geometry) {
                const geometryArr = [];
                for (let i = 0; i < panToTarget.length; i++) {
                    geometryArr.push(panToTarget[i].geometry);
                }
                yield getGeometriesExtent(geometryArr).then((extent) => {
                    return goTo(tempBaseMapView, extent.center);
                });
            }
            else {
                return getGeometriesExtent(panToTarget).then((extent) => {
                    return goTo(tempBaseMapView, extent.center);
                });
            }
        }
        else {
            if (panToTarget.geometry) {
                const getmetry = panToTarget.geometry;
                return goTo(tempBaseMapView, getCenterPoint(getmetry));
            }
            else {
                return goTo(tempBaseMapView, getCenterPoint(panToTarget));
            }
        }
    });
}
function goTo(view, target) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // delay before updating of view turns true, 400ms is a temporary solution.
            setTimeout(() => {
                //// there is a conflict for paning when the layer view is updating, such as 'pan to' and 'filter'.
                //// this is a temporary solution, it can reduce the frequency of the problem rather than solve it completely.
                //if (view.updating) {
                //  const handler = view.watch('updating', value => {
                //    if (!value) {
                //      view.goTo(target).then(() => resolve()).catch(() => reject())
                //      handler.remove()
                //    }
                //  })
                //} else {
                //  view.goTo(target).then(() => resolve()).catch(() => reject())
                //}
                view.goTo(target).then(() => { resolve(); }).catch(() => { reject(); });
            }, 400);
        });
    });
}
function getGeometriesExtent(geometries) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/geometry/Extent'
        ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line
            let Extent;
            [Extent] = modules;
            if (!geometries || !geometries.length) {
                return yield Promise.resolve(null);
            }
            let fullExtent = null;
            let index;
            const numGeometries = geometries.length;
            for (index = 0; index < numGeometries; index++) {
                const geometry = geometries[index];
                if (!geometry) {
                    continue;
                }
                let extent = geometry.extent;
                if (!extent && geometry.type === 'point') {
                    const pointGeometry = geometry;
                    if (pointGeometry.x && pointGeometry.y) {
                        extent = new Extent({
                            xmax: pointGeometry.x,
                            xmin: pointGeometry.x,
                            ymax: pointGeometry.y,
                            ymin: pointGeometry.y,
                            zmax: pointGeometry.z,
                            zmin: pointGeometry.z,
                            spatialReference: pointGeometry.spatialReference
                        });
                    }
                }
                if (!extent) {
                    continue;
                }
                if (fullExtent) {
                    fullExtent = fullExtent.union(extent);
                }
                else {
                    fullExtent = extent;
                }
            }
            if (fullExtent.width < 0 && fullExtent.height < 0) {
                return yield Promise.resolve(null);
            }
            return yield Promise.resolve(fullExtent);
        }));
    });
}
function filterFeaturesByQuery(jimuMapView, actionLayerDataSourceId, querySQL) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!actionLayerDataSourceId) {
            return;
        }
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionLayerDataSourceId);
        if (!dataSource) {
            return;
        }
        let jimuLayerView = null;
        try {
            jimuLayerView = yield jimuMapView.whenJimuLayerViewLoadedByDataSource(dataSource);
        }
        catch (err) {
            jimuLayerView = null;
            console.error('can\'t get jimuLayerView by dataSource', dataSource, err);
        }
        if (jimuLayerView && jimuLayerView.layer && (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer || jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer)) {
            jimuLayerView.setDefinitionExpression(querySQL);
        }
    });
}
function queryFeatures(layerObject, querySQL) {
    return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/rest/support/Query'
    ]).then(modules => {
        let Query;
        [Query] = modules;
        const query = new Query();
        query.where = querySQL;
        query.outFields = ['*'];
        query.returnGeometry = true;
        return layerObject.queryFeatures(query).then(featureSet => {
            return featureSet;
        });
    });
}
function flashOnFeatureLayer(jimuMapView, querySQL, tempJimuLayerView) {
    if ((tempJimuLayerView).view) {
        let featureLayerView = (tempJimuLayerView).view;
        if (featureLayerView) {
            queryFeatures(featureLayerView.layer, querySQL).then(featureSet => {
                if (featureSet && featureSet.features && featureSet.features.length > 0) {
                    const symbol = getFlashSymbol(featureLayerView.layer.geometryType);
                    startFlash(jimuMapView.view, featureSet.features, symbol);
                }
            });
        }
        else {
            return null;
        }
    }
    else {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/layers/FeatureLayer'
        ]).then(modules => {
            let FeatureLayer;
            [FeatureLayer] = modules;
            let tempFeatureLayer = new FeatureLayer({
                url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(tempJimuLayerView.layer)
            });
            tempFeatureLayer.load().then(() => {
                queryFeatures(tempFeatureLayer, querySQL).then(featureSet => {
                    if (featureSet && featureSet.features && featureSet.features.length > 0) {
                        const symbol = getFlashSymbol(featureSet.features[0].geometry.type);
                        startFlash(jimuMapView.view, featureSet.features, symbol);
                    }
                });
            });
        });
    }
}
let sceneHightlightHandle = null;
function flashOnSceneLayer(jimuMapView, querySQL, tempJimuLayerView) {
    var _a;
    if ((tempJimuLayerView).view) {
        let sceneLayerView = (tempJimuLayerView).view;
        // @ts-expect-error
        queryFeatures((_a = sceneLayerView === null || sceneLayerView === void 0 ? void 0 : sceneLayerView.layer) === null || _a === void 0 ? void 0 : _a.associatedLayer, querySQL).then(featureSet => {
            if (featureSet && featureSet.features && featureSet.features.length > 0) {
                const objectIdField = sceneLayerView.layer.objectIdField;
                const objectIds = featureSet.features.map(feature => feature.attributes[objectIdField]);
                let i = 0;
                const maxFlashCount = 6;
                let highlightColor = [255, 255, 0, 0.8];
                const originalHighlightOptions = jimuMapView.view.highlightOptions;
                const flash = function () {
                    if (i < maxFlashCount) {
                        i++;
                        if (highlightColor) {
                            highlightColor = null;
                            // @ts-expect-error
                            jimuMapView.view.highlightOptions = { color: [0, 0, 0, 0] };
                            sceneHightlightHandle && sceneHightlightHandle.remove();
                            sceneHightlightHandle = sceneLayerView.highlight(objectIds);
                        }
                        else {
                            highlightColor = [255, 255, 0, 0.8];
                            // @ts-expect-error
                            jimuMapView.view.highlightOptions = { color: highlightColor };
                            sceneHightlightHandle && sceneHightlightHandle.remove();
                            sceneHightlightHandle = sceneLayerView.highlight(objectIds);
                        }
                        setTimeout(flash, 500);
                    }
                    else {
                        jimuMapView.view.highlightOptions = originalHighlightOptions;
                        sceneHightlightHandle && sceneHightlightHandle.remove();
                    }
                };
                setTimeout(flash, 500);
            }
        });
    }
}
function flashFeaturesByQuery(jimuMapView, layerDataSourceId, querySQL) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!layerDataSourceId) {
            return;
        }
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(layerDataSourceId);
        if (!dataSource) {
            return;
        }
        let jimuLayerView = null;
        try {
            jimuLayerView = yield jimuMapView.whenJimuLayerViewLoadedByDataSource(dataSource);
        }
        catch (err) {
            jimuLayerView = null;
            console.error('can\'t get jimuLayerView by dataSource', dataSource, err);
        }
        if (jimuLayerView && jimuLayerView.layer) {
            if (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer) {
                flashOnFeatureLayer(jimuMapView, querySQL, jimuLayerView);
            }
            else if (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer) {
                flashOnSceneLayer(jimuMapView, querySQL, jimuLayerView);
            }
        }
    });
}
function startFlash(mapBaseView, features, symbol) {
    (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/Graphic'
    ]).then(modules => {
        // eslint-disable-next-line
        let Graphic;
        [Graphic] = modules;
        const flashFeatures = function (features, maxFlashCount) {
            const graphics = [];
            let flashCount = 0;
            for (let i = 0; i < features.length; i++) {
                const tempGraphic = new Graphic({
                    geometry: features[i].geometry,
                    symbol: symbol,
                    attributes: features[i].attributes
                });
                graphics.push(tempGraphic);
            }
            const singleFlash = function () {
                mapBaseView.graphics.addMany(graphics);
                setTimeout(() => {
                    mapBaseView.graphics.removeMany(graphics);
                    flashCount = flashCount + 1;
                    if (flashCount < maxFlashCount) {
                        setTimeout(() => {
                            singleFlash();
                        }, 500);
                    }
                }, 500);
            };
            singleFlash();
        };
        flashFeatures(features, 3);
    });
}
function getFlashSymbol(geometryType) {
    if (['point', 'multipoint'].includes(geometryType)) {
        return {
            type: 'simple-marker',
            style: 'circle',
            color: [255, 255, 0, 0.8],
            size: '16px',
            outline: {
                color: [255, 255, 0, 0.8],
                width: 3
            }
        };
    }
    else if (['polyline'].includes(geometryType)) {
        return {
            type: 'simple-line',
            color: [255, 255, 0, 0.8],
            width: 3,
            style: 'solid'
        };
    }
    else if (['polygon', 'extent'].includes(geometryType)) {
        return {
            type: 'simple-fill', // autocasts as new SimpleFillSymbol()
            color: [255, 255, 0, 0.5],
            style: 'solid',
            outline: {
                color: [255, 255, 0, 0.8],
                width: 3
            }
        };
    }
    else if (['mesh'].includes(geometryType)) {
        return {
            type: 'mesh-3d', // autocasts as new MeshSymbol3D()
            symbolLayers: [{
                    type: 'fill', // autocasts as new FillSymbol3DLayer()
                    material: { color: [255, 255, 0, 0.8] }
                }]
        };
    }
    else {
        return null;
    }
}
function getCenterPoint(geometry) {
    // point | multipoint | polyline | polygon | extent | mesh
    switch (geometry.type) {
        case 'point':
            return geometry;
        case 'extent':
            return geometry.center;
        case 'polygon':
            return geometry.centroid;
        case 'polyline':
            return geometry.extent.center;
        default:
            return geometry && geometry.extent ? geometry.extent.center : undefined;
        // todo
    }
}
function cloneFeature(feature, Graphic) {
    let tempFeature = null;
    if (feature.clone) {
        tempFeature = feature.clone();
    }
    else {
        tempFeature = Graphic.fromJSON(Object.assign({}, feature));
        tempFeature.attributes = Object.assign({}, feature.attributes);
    }
    return tempFeature;
}
function projectGeometries(geometries, spatialReference) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!geometries || geometries.length === 0 || !geometries[0] ||
            spatialReference.wkid === geometries[0].spatialReference.wkid || (spatialReference.equals(geometries[0].spatialReference))) {
            return yield Promise.resolve(geometries);
        }
        else if (spatialReference.isWebMercator && geometries[0].spatialReference.isWGS84) {
            // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
            return yield Promise.resolve(geometries);
        }
        else if (spatialReference.isWGS84 && geometries[0].spatialReference.isWebMercator) {
            // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
            return yield Promise.resolve(geometries);
        }
        else {
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.geometryUtils.projectToSpatialReference(geometries, spatialReference);
        }
    });
}
function processZoomToFeatures(mapBaseView, layer, features) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mapBaseView && mapBaseView.type === '3d' && layer && layer.queryFeatures && features) {
            return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/rest/support/Query'
            ]).then((modules) => {
                const [Query] = modules;
                const query = new Query();
                query.returnGeometry = true;
                query.outFields = ['*'];
                query.objectIds = features.map(feature => feature.attributes[layer.objectIdField]);
                return layer.queryFeatures(query).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (result && result.features && result.features.length === features.length) {
                        return yield Promise.resolve(result.features);
                    }
                    else {
                        return yield Promise.resolve(features);
                    }
                }), () => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(features);
                }));
            });
        }
        else {
            return yield Promise.resolve(features);
        }
    });
}
function checkIsLive(appMode) {
    if (window.jimuConfig.isInBuilder) {
        if (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
function getLayersFromDataSourceIds(dataSourceIds) {
    const layerPromises = [];
    dataSourceIds.forEach(dataSourceId => {
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
        let layerPromise;
        if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.layer) {
            layerPromise = Promise.resolve(dataSource.layer);
        }
        else if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource) {
            layerPromise = dataSource.createJSAPILayerByDataSource();
        }
        else {
            layerPromise = Promise.resolve(null);
        }
        layerPromises.push(layerPromise);
    });
    return Promise.all(layerPromises);
}
function getJimuMapViewId(widgetId, dataSourceId) {
    // If dataSourceId is null, make sure it converts to empty string.
    const dsId = dataSourceId || '';
    return `${widgetId}-${dsId}`;
}
function getMapBaseRestoreData(mapInstance) {
    const { mapContainer, state, Geometry, InitialViewProperties, TileLayer, Basemap, MapView, SceneView, Extent, Viewpoint, PortalItem, Portal, WebMap, WebScene, Color, expectedDataSourceInfo, mapCreatingInfo, view, lastUpdateViewConfig, mapDs, dsManager, isFirstReceiveMessage } = mapInstance;
    return {
        mapContainer,
        state,
        Geometry,
        InitialViewProperties,
        TileLayer,
        Basemap,
        MapView,
        SceneView,
        Extent,
        Viewpoint,
        PortalItem,
        Portal,
        WebMap,
        WebScene,
        Color,
        expectedDataSourceInfo,
        mapCreatingInfo,
        view,
        lastUpdateViewConfig,
        mapDs,
        dsManager,
        isFirstReceiveMessage
    };
}
function restoreMapBase(mapInstance, restoreData) {
    const keys = Object.keys(restoreData);
    for (const key of keys) {
        mapInstance[key] = restoreData[key];
    }
}
function isTwoWidgetsMutuallyExtentChange(widgetId1, widgetId2) {
    if (widgetId1 && widgetId2) {
        const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
        if (messageConfigs) {
            const actionNames = ['panTo', 'zoomToFeature'];
            const messageType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
            if (isWidgetSendActionsToAnother(widgetId1, widgetId2, messageConfigs, messageType, actionNames) &&
                isWidgetSendActionsToAnother(widgetId2, widgetId1, messageConfigs, messageType, actionNames)) {
                return true;
            }
        }
    }
    return false;
}
function isWidgetSendZoomToActionToAnother(sendMessageWidgetId, actionWidgetId, messageType) {
    if (sendMessageWidgetId && actionWidgetId) {
        const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
        if (messageConfigs) {
            const actionNames = ['zoomToFeature'];
            return isWidgetSendActionsToAnother(sendMessageWidgetId, actionWidgetId, messageConfigs, messageType, actionNames);
        }
    }
    return false;
}
function isWidgetSendActionsToAnother(sendMessageWidgetId, actionWidgetId, messageConfigs, messageType, actionNames) {
    if (messageConfigs) {
        const messageJsonArray = Object.values(messageConfigs);
        for (let i = 0; i < messageJsonArray.length; i++) {
            const messageJson = messageJsonArray[i];
            if (messageJson.widgetId === sendMessageWidgetId && messageJson.messageType === messageType) {
                const actions = messageJson.actions;
                for (let j = 0; j < actions.length; j++) {
                    const action = actions[j];
                    if (action.widgetId === actionWidgetId) {
                        if (actionNames.includes(action.actionName)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function isSamelikeViewpoints(view, vp1, vp2) {
    if (!vp1) {
        return false;
    }
    if (!vp2) {
        return false;
    }
    // We need to check both targetGeometry and camera.
    if (vp1.targetGeometry && vp1.targetGeometry.declaredClass === 'esri.geometry.Point' && vp2.targetGeometry && vp2.targetGeometry.declaredClass === 'esri.geometry.Point') {
        const screenPoint1 = view.toScreen(vp1.targetGeometry);
        const screenPoint2 = view.toScreen(vp2.targetGeometry);
        const deltaX = screenPoint1.x - screenPoint2.x;
        const deltaY = screenPoint1.y - screenPoint2.y;
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (dist >= 5) {
            return false;
        }
    }
    const camera1 = vp1.camera;
    const camera2 = vp2.camera;
    if (camera1 && camera2) {
        // compare viewpoint for SceneView
        const heading1 = parseFloat(camera1.heading.toFixed(2));
        const heading2 = parseFloat(camera2.heading.toFixed(2));
        if (heading1 !== heading2) {
            return false;
        }
        const tilt1 = parseFloat(camera1.tilt.toFixed(2));
        const tilt2 = parseFloat(camera2.tilt.toFixed(2));
        if (tilt1 !== tilt2) {
            return false;
        }
        const positionDist = camera1.position.distance(camera2.position);
        if (positionDist >= 1) {
            return false;
        }
    }
    else {
        // compare viewpoint for MapView
        const rotation1 = parseFloat(vp1.rotation.toFixed(2));
        const rotation2 = parseFloat(vp2.rotation.toFixed(2));
        if (rotation1 !== rotation2) {
            return false;
        }
        const deltaScale = vp1.scale - vp2.scale;
        if (Math.abs(deltaScale) >= 1) {
            return false;
        }
    }
    return true;
}
function getViewpointInstanceFromHistory(view, viewpointIndex) {
    if (view.viewpointHistory.length > 0) {
        const lastIndex = view.viewpointHistory.length - 1;
        if (viewpointIndex >= 0 && viewpointIndex <= lastIndex) {
            const viewpoint = view.viewpointHistory[viewpointIndex];
            return viewpoint.clone();
        }
    }
    return null;
}
function updateUrlHashParamsForActiveJimuMapView(jimuMapView) {
    if (jimuMapView && jimuMapView.isActive && jimuMapView.view && !jimuMapView.view.destroyed) {
        const view = jimuMapView.view;
        const urlManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance();
        const viewpointJson = view.viewpoint ? view.viewpoint.toJSON() : null;
        const extentJson = view.extent ? view.extent.toJSON() : null;
        let mapStateStr = null;
        if (viewpointJson && extentJson) {
            const mapState = {
                viewpoint: viewpointJson,
                extent: extentJson
            };
            mapStateStr = JSON.stringify(mapState);
        }
        view.lastViewpointUpdateUrlParams = view.viewpoint ? view.viewpoint.clone() : null;
        const activeDatasourceId = jimuMapView.dataSourceId || null;
        const mapUrlHashParams = {
            active_datasource_id: activeDatasourceId,
            // if map_state is null, UrlManager will remove it from url
            map_state: mapStateStr
        };
        urlManager.setWidgetUrlParams(jimuMapView.mapWidgetId, mapUrlHashParams);
    }
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
/*!***********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/pan-to-action.ts ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanToAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");




class PanToAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    constructor() {
        super(...arguments);
        this.NoLockTriggerLayerWidgets = ['Map'];
    }
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange) {
            return true;
        }
        else if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange) {
            return true;
        }
        else if (messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange &&
            messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange &&
            messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return false;
        }
        else {
            const dataSourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_3__.getDsByWidgetId)(messageDescription.widgetId, messageDescription.messageType);
            return messageWidgetUseDataSources.some(useDataSource => {
                const ds = dataSourceManager.getDataSource(useDataSource.dataSourceId);
                // widget1 send message to map widget, ds comes from widget1.useDataSources.
                if (ds) {
                    // #16835, ds maybe not ready when the ExB app is opened and add the message action immediately in widget action setting
                    if (ds.type === 'WEB_MAP' || ds.type === 'WEB_SCENE') {
                        // If ds.type is WEB_MAP or WEB_SCENE, means widget1 is also a map widget.
                        return true;
                    }
                    else {
                        // widget1 is not map widget, like list widget uses a layer ds.
                        const dsJson = ds.getDataSourceJson();
                        return !!(dsJson && dsJson.geometryType);
                    }
                }
                return false;
            });
        }
    }
    filterMessage(message) {
        return true;
    }
    getSettingComponentUri(messageType, messageWidgetId) {
        //const config = getAppStore().getState().appStateInBuilder ? getAppStore().getState().appStateInBuilder.appConfig : getAppStore().getState().appConfig
        //const messageWidgetJson = config.widgets[messageWidgetId]
        if (messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange ||
            messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return 'message-actions/pan-to-action-setting';
        }
        else {
            return null;
        }
    }
    onExecute(message, actionConfig) {
        // message.widgetId is message sender, this.widgetId is message receiver
        return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
            var _a;
            let Graphic = null;
            [Graphic] = modules;
            switch (message.type) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const dataRecordSetChangeMessage = message;
                    if (dataRecordSetChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.CreateUpdate) {
                        const geometries = [];
                        dataRecordSetChangeMessage.dataRecordSets.forEach(dataRecordSet => {
                            if (dataRecordSet && dataRecordSet.records) {
                                for (let i = 0; i < dataRecordSet.records.length; i++) {
                                    const dataRecordFeature = dataRecordSet.records[i].feature;
                                    if (dataRecordFeature) {
                                        geometries.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(dataRecordFeature, Graphic).geometry);
                                    }
                                }
                            }
                        });
                        const panToValue = {
                            type: 'pan-to-geometries',
                            geometries: geometries
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue);
                    }
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
                    const messageWidgetJson = config.widgets[message.widgetId];
                    const messageWidgetLabel = messageWidgetJson.manifest.label;
                    const dataRecordsSelectionChangeMessage = message;
                    const geometries = [];
                    if (dataRecordsSelectionChangeMessage.records) {
                        if (dataRecordsSelectionChangeMessage.records[0]) {
                            //if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
                            //  break
                            //}
                            if (this.NoLockTriggerLayerWidgets.includes(messageWidgetLabel)) {
                                const mainDataSourceOfSelection = dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource();
                                if (!((_a = actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.useDataSources) === null || _a === void 0 ? void 0 : _a.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.mainDataSourceId) === mainDataSourceOfSelection.id))) {
                                    break;
                                }
                            }
                            else {
                                const selectionChangeDS = dataRecordsSelectionChangeMessage.records[0].dataSource;
                                const selectionChangeMainDS = selectionChangeDS === null || selectionChangeDS === void 0 ? void 0 : selectionChangeDS.getMainDataSource();
                                // check dsId of mainDS currently, will support view in the future.
                                if (!actionConfig.useDataSources.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.mainDataSourceId) === selectionChangeMainDS.id)) {
                                    break;
                                }
                            }
                        }
                        for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                            const dataRecordFeature = dataRecordsSelectionChangeMessage.records[i].feature;
                            if (dataRecordFeature) {
                                geometries.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(dataRecordFeature, Graphic).geometry);
                            }
                        }
                    }
                    const panToValue = {
                        type: 'pan-to-geometries',
                        geometries: geometries
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        // isWidgetSendZoomToActionToAnother() can only handle simple panTo and zoomTo conflict.
                        // To avoid more complicated panTo and zoomTo conflict cases, we do it in handleActionForPanToActionValue of mapbase.
                        break;
                    }
                    const extentChangeMessage = message;
                    const relatedWidgetIds = extentChangeMessage.getRelatedWidgetIds();
                    if (relatedWidgetIds.includes(this.widgetId)) {
                        break;
                    }
                    const extentValue = {
                        type: 'pan-to-extent',
                        geometries: [extentChangeMessage.extent],
                        stationary: extentChangeMessage.stationary,
                        publishTime: extentChangeMessage.publishTime,
                        publishWidgetId: extentChangeMessage.widgetId
                    };
                    const panToFeatureActionValue = {
                        value: extentValue,
                        relatedWidgets: relatedWidgetIds
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue', panToFeatureActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const filterChangeMessage = message;
                    // support view.
                    if (!actionConfig.useDataSources.some(useDataSource => filterChangeMessage.dataSourceIds.some(dataSourceId => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId) === dataSourceId))) {
                        break;
                    }
                    const filterChangeActionValue = {
                        type: 'pan-to-query-params',
                        dataSourceIds: filterChangeMessage.dataSourceIds,
                        useDataSources: actionConfig.useDataSources || []
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', filterChangeActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const dataSourcesChangeMessage = message;
                    if (dataSourcesChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Create) {
                        const dataSourceIds = [];
                        dataSourcesChangeMessage.dataSources.forEach(dataSource => {
                            dataSourceIds.push(dataSource.id);
                        });
                        const panToFeatureActionValueForLayers = {
                            type: 'pan-to-layers',
                            dataSourceIds: dataSourceIds
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToFeatureActionValueForLayers);
                    }
                    break;
            }
            return true;
        });
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9wYW4tdG8tYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkw7QUFDeEk7QUFFNUMsU0FBUyxzQkFBc0IsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7SUFDM0UsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQ3hFLE9BQU8sZ0JBQWdCLEtBQUssdURBQWdCLENBQUMsZ0JBQWdCO0FBQy9ELENBQUM7QUFFTSxTQUFTLDZCQUE2QixDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDbEYsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLGVBQWUsR0FBRyxnQkFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsZUFBZTtJQUM3RCxJQUFJLGdCQUFnQixHQUFHLHVEQUFnQixDQUFDLGFBQWE7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFLENBQUM7WUFDcEcsZ0JBQWdCLEdBQUcsc0JBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCO1FBQzdELENBQUM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6QixDQUFDO0FBT00sU0FBUyxvQkFB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QyxDQUFDO3dCQUNGLE1BQU0sZ0NBQWdDLEdBQTZCOzRCQUNqRSxJQUFJLEVBQUUsZUFBZTs0QkFDckIsYUFBYSxFQUFFLGFBQWE7eUJBQzdCO3dCQUNELDBEQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsZ0NBQWdDLENBQUM7b0JBQy9ILENBQUM7b0JBQ0QsTUFBSztZQUNULENBQUM7WUFDRCxPQUFPLElBQUk7UUFDYixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL21lc3NhZ2UtYWN0aW9ucy9wYW4tdG8tYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VUeXBlLCBNZXNzYWdlQ2FycnlEYXRhLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIElNV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VPdXRwdXREYXRhU291cmNlcyAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xuICBsZXQgbWVzc2FnZUNhcnJ5RGF0YSA9IE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZVxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcbiAgICBpZiAocHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YSAmJiBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXG4gICAgfVxuICB9KVxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcbiAgdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3V0QWN0aW9uQ29uZmlnIChhY3Rpb25Db25maWc6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8QWN0aW9uQ29uZmlnPiwgbWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxuXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXG4gIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXG4gICAgICAgIGxldCB0ZW1wVXNlRGF0YVNvdXJjZVxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURTLm1haW5EYXRhU291cmNlSWQsXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLCBtZXNzYWdlVHlwZSlcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBVc2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgdXNlRFMsIG1lc3NhZ2VUeXBlKVxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tPdXRVc2VEYXRhU291cmNlIChtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgb2xkVXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxuXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcbiAgaWYgKCFkc0lkKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1tkc0lkXVxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcbiAgICBpc01hcERzID0gdHJ1ZVxuICB9XG5cbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcblxuICBpZiAoaXNNYXBEcykge1xuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxuICAgIH0gZWxzZSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1VzZU9sZERzKSB7XG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcbiAgLy9pZiAoZHNSb290SWRzICYmIGRzUm9vdElkcy5sZW5ndGggPT09IDAgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXG4gIC8vfVxuXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXG4gIC8vfVxuXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XG4gICAgaXNSZWFkT25seSA9IGNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGUsIGRzUm9vdElkcylcbiAgfVxuXG4gIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IGdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZCwgbWVzc2FnZVR5cGUpXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXG4gICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcbiAgfVxuXG4gIHJldHVybiBkc1NlbGVjdG9yU291cmNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcbiAgY29uc3QgYm90aERhdGFzb3VyY2UgPSB1c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KS5jb25jYXQob3V0cHV0RGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxuICAgICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2VzXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xuICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXG4gICAgfVxuICB9KSA/PyBbXVxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxuICBjb25zdCBvdXRwdXREcyA9IHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzIHx8IFtdXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cbiAgaWYgKGRzUm9vdElkcykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcbiAgICAgIHJldHVybiB1c2VEcz8ubGVuZ3RoID09PSAxXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcbiAgICAgIHJldHVybiBkc0xlbmd0aCA9PT0gMVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xuICByZXR1cm4gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWdcbn1cblxuZnVuY3Rpb24gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcpIHtcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cbiAgY29uc3Qgcm9vdElkcyA9IFtdXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcbiAgICB9XG4gIH0pXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxuICAgIGxldCByZXN1bHREc1xuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XG4gICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHREcyA9IGRzXG4gICAgfVxuICAgIHJldHVybiByZXN1bHREcz8uaWRcbiAgfSkgPz8gW10pXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmltcG9ydCB7XG4gIEFwcE1vZGUsIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSlNBUElMYXllck1peGluLCBnZW9tZXRyeVV0aWxzLFxuICBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlc0pzb24sIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBNZXNzYWdlVHlwZSwgVXJsTWFuYWdlclxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEhpZ2hMaWdodEhhbmRsZSwgdHlwZSBNYXBiYXNlUmVzdG9yZURhdGEsIHR5cGUgTWFwYmFzZVZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcbmltcG9ydCB0eXBlIE1hcEJhc2UgZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXG5pbXBvcnQgeyB0eXBlIElGZWF0dXJlIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIEppbXVNYXBWaWV3LCBMYXllclR5cGVzLCB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3LCB0eXBlIEppbXVTY2VuZUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZT86IHsgW2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0IH0pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBuZXdMYXllclByb21pc2VzID0gW11cbiAgbmV3RmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKG5ld0ZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybigndGhlIGZlYXR1cmUgbGF5ZXIgaXMgYWxyZWFkeSBjcmVhdGVkJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBuZXdMYXllclByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxuICB9KVxuXG4gIGlmIChuZXdMYXllclByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld0xheWVyUHJvbWlzZXMpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZT86IHsgW2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0IH0pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IFtdXG4gIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMoY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgIG1hcEJhc2VWaWV3Lm1hcC5yZW1vdmUobGF5ZXIpXG4gICAgICB1cGRhdGVQcm9taXNlcy5wdXNoKGFkZEZlYXR1cmVTZXRUb01hcChtYXBCYXNlVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXG4gICAgfVxuICB9KVxuXG4gIGlmICh1cGRhdGVQcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRGZWF0dXJlU2V0VG9NYXAgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVTZXQ6IF9fZXNyaS5GZWF0dXJlU2V0LCBsYXllcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcbiAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbGV0IEZlYXR1cmVTZXQ6IHR5cGVvZiAgX19lc3JpLkZlYXR1cmVTZXQ7XG4gICAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzO1xuXG4gICAgICAgIGNvbnN0IGxheWVyRnJvbUZlYXR1cmVTZXQgPSBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmxheWVyIGFzIGFueVxuICAgICAgICBjb25zdCBmaWVsZHNJbkZlYXR1cmVsYXllciA9IFtdXG4gICAgICAgIGNvbnN0IGZpZWxkTWFwID0ge31cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IGdldFJlYXNvbmFibGVGaWVsZChsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXSlcbiAgICAgICAgICBmaWVsZE1hcFtsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXS5uYW1lXSA9IGZpZWxkc0l0ZW0ubmFtZVxuICAgICAgICAgIGZpZWxkc0luRmVhdHVyZWxheWVyLnB1c2goZmllbGRzSXRlbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkc0luUG9wdXBUZW1wbGF0ZSA9IFtdXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChmaWVsZE1hcFtrZXldKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0ge1xuICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTWFwW2tleV0sXG4gICAgICAgICAgICAgIGxhYmVsOiBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkc0luUG9wdXBUZW1wbGF0ZS5wdXNoKGZpZWxkc0l0ZW0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRmVhdHVyZXMgPSBbXVxuICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVtcEZlYXR1cmUgPSBmZWF0dXJlXG4gICAgICAgICAgaWYgKHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZE1hcFtrZXldXSA9IHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNba2V5XVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzLmV4YmZpZCA9IGluZGV4XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgICAgIGV4YmZpZDogaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc291cmNlRmVhdHVyZXMucHVzaCh0ZW1wRmVhdHVyZSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgIGlkOiBsYXllcklkLFxuICAgICAgICAgIHRpdGxlOiBsYXllckZyb21GZWF0dXJlU2V0LnRpdGxlLFxuICAgICAgICAgIHNvdXJjZTogc291cmNlRmVhdHVyZXMsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZHNJbkZlYXR1cmVsYXllcixcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdleGJmaWQnLFxuICAgICAgICAgIHJlbmRlcmVyOiBsYXllckZyb21GZWF0dXJlU2V0LnJlbmRlcmVyLFxuICAgICAgICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0aXRsZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgICAgICAgICBmaWVsZEluZm9zOiBmaWVsZHNJblBvcHVwVGVtcGxhdGVcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG1hcEJhc2VWaWV3Lm1hcC5hZGQobGF5ZXIpXG5cbiAgICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFJlYXNvbmFibGVGaWVsZCAoZmllbGQ6IF9fZXNyaS5GaWVsZCk6IF9fZXNyaS5GaWVsZCB7XG4gIC8vIHRoZSBmdW5jdGlvbiBpcyBzdXBwb3J0ZWQgdG8gbm9ybWFsaXplIHRoZSBmaWVsZC5uYW1lXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkLm5hbWVcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWVsZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwoL2csICdfJykucmVwbGFjZSgvXFwpL2csICdfJyksXG4gICAgYWxpYXM6IGZpZWxkLmFsaWFzLFxuICAgIHR5cGU6IGZpZWxkLnR5cGVcbiAgfSBhcyBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgSUZlYXR1cmUgfCBJRmVhdHVyZVtdLCBsYXllcklkPzogc3RyaW5nKTogSGlnaExpZ2h0SGFuZGxlIHtcbiAgLy8gSW4gdGhpcyBmdW5jdGlvbiwgd2UgYXNzdW1lIHRoYXQgZmVhdHVyZXMgY29tZSBmcm9tIHRoZSBzYW1lIGxheWVyXG4gIGxldCBmZWF0dXJlTGF5ZXJJZCA9IGxheWVySWRcbiAgbGV0IGZlYXR1cmVMYXllclZpZXcgPSBudWxsXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcblxuICAvLyBpZiBsYXllcklkIGRvZXNuJ3QgZXhpc3QsIHdlIGdldCBsYXllcklkIGJ5IGZlYXR1cmVcbiAgaWYgKCFmZWF0dXJlTGF5ZXJJZCkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXRbMF0gYXMgX19lc3JpLkdyYXBoaWNcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXQgYXMgX19lc3JpLkdyYXBoaWNcbiAgICB9XG5cbiAgICBpZiAodGVtcEZlYXR1cmUpIHtcbiAgICAgIGZlYXR1cmVMYXllcklkID0gdGVtcEZlYXR1cmUubGF5ZXIgJiYgdGVtcEZlYXR1cmUubGF5ZXIuaWRcbiAgICB9XG4gIH1cblxuICBpZiAoZmVhdHVyZUxheWVySWQpIHtcbiAgICBjb25zdCBsYXllclZpZXdzID0gbWFwQmFzZVZpZXcuYWxsTGF5ZXJWaWV3c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJWaWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpLmxheWVyLmlkID09PSBmZWF0dXJlTGF5ZXJJZCkge1xuICAgICAgICBmZWF0dXJlTGF5ZXJWaWV3ID0gbGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF5ZXJJZDogZmVhdHVyZUxheWVySWQsXG4gICAgICAgIGhhbmRsZTogZmVhdHVyZUxheWVyVmlldy5oaWdobGlnaHQodGFyZ2V0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ29Ub1RhcmdldEltbWVkaWF0ZWx5ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIF90YXJnZXQ6IF9fZXNyaS5HZW9tZXRyeSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB2aWV3U1IgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgY29uc3QgZ2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKFtfdGFyZ2V0XSwgdmlld1NSKVxuXG4gIGlmIChnZW9tZXRyaWVzICYmIGdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdlb21ldHJpZXNbMF1cbiAgICB2aWV3LmdvVG8odGFyZ2V0LCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9WaWV3cG9pbnRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHZpZXdTUiA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICBjb25zdCB2aWV3cG9pbnQgPSBhd2FpdCBwcm9qZWN0Vmlld3BvaW50KF92aWV3cG9pbnQsIHZpZXdTUilcbiAgLy8gdmlldy5nb1RvKHZpZXdwb2ludCwgeyBhbmltYXRlOiBmYWxzZSB9KVxuICB2aWV3LnZpZXdwb2ludCA9IHZpZXdwb2ludFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFZpZXdwb2ludCAodmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50LCB2aWV3U1I6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHNyMSA9IHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeT8uc3BhdGlhbFJlZmVyZW5jZVxuXG4gIGlmIChzcjEgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2Uoc3IxLCB2aWV3U1IpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHNyMiA9IHZpZXdwb2ludC5jYW1lcmE/LnBvc2l0aW9uPy5zcGF0aWFsUmVmZXJlbmNlXG5cbiAgaWYgKHNyMiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjIsIHZpZXdTUikpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZSAoc3IxOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSwgc3IyOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IGJvb2xlYW4ge1xuICBjb25zdCBpc1NhbWUgPSBzcjEud2tpZCA9PT0gc3IyLndraWQgfHwgc3IxLmVxdWFscyhzcjIpXG4gIC8vICBJbiBKUyBBUEkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cbiAgY29uc3QgaXNMaWtlID0gKHNyMS5pc1dlYk1lcmNhdG9yIHx8IHNyMS5pc1dHUzg0KSAmJiAoc3IyLmlzV2ViTWVyY2F0b3IgfHwgc3IyLmlzV0dTODQpXG4gIHJldHVybiAhaXNTYW1lICYmICFpc0xpa2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RWaWV3cG9pbnQgKF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5WaWV3cG9pbnQ+IHtcbiAgY29uc3Qgdmlld3BvaW50ID0gX3ZpZXdwb2ludC5jbG9uZSgpXG4gIGNvbnN0IHRhcmdldEdlb21ldHJ5ID0gdmlld3BvaW50LnRhcmdldEdlb21ldHJ5XG4gIGNvbnN0IGNhbWVyYVBvc2l0b24gPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvblxuXG4gIGNvbnN0IHRvUHJvamVjdEdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cbiAgbGV0IGlzUHJvamVjdFRhcmdldEdlb21ldHJ5OiBib29sZWFuID0gZmFsc2VcbiAgbGV0IGlzUHJvamVjdENhbWVyYVBvc2l0aW9uOiBib29sZWFuID0gZmFsc2VcblxuICBpZiAodGFyZ2V0R2VvbWV0cnkgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UodGFyZ2V0R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xuICAgIGlzUHJvamVjdFRhcmdldEdlb21ldHJ5ID0gdHJ1ZVxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaCh0YXJnZXRHZW9tZXRyeSlcbiAgfVxuXG4gIGlmIChjYW1lcmFQb3NpdG9uICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKGNhbWVyYVBvc2l0b24uc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xuICAgIGlzUHJvamVjdENhbWVyYVBvc2l0aW9uID0gdHJ1ZVxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaChjYW1lcmFQb3NpdG9uKVxuICB9XG5cbiAgaWYgKHRvUHJvamVjdEdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHByb2plY3RlZEdlb21ldHJpZXMgPSBhd2FpdCBwcm9qZWN0R2VvbWV0cmllcyh0b1Byb2plY3RHZW9tZXRyaWVzLCB2aWV3U1IpXG5cbiAgICBpZiAoaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkpIHtcbiAgICAgIHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHByb2plY3RlZEdlb21ldHJpZXNbMF1cbiAgICB9XG5cbiAgICBpZiAoaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb24pIHtcbiAgICAgIHZpZXdwb2ludC5jYW1lcmEucG9zaXRpb24gPSBwcm9qZWN0ZWRHZW9tZXRyaWVzW3Byb2plY3RlZEdlb21ldHJpZXMubGVuZ3RoIC0gMV0gYXMgX19lc3JpLlBvaW50XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZpZXdwb2ludFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFwUGFudG8gKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdlb21ldHJ5IHwgX19lc3JpLkdlb21ldHJ5W10gfFxuX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgX19lc3JpLkV4dGVudCk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhblRvVGFyZ2V0ID0gdGFyZ2V0IGFzIGFueVxuICBjb25zdCB0ZW1wQmFzZU1hcFZpZXcgPSBtYXBCYXNlVmlldyBhcyBhbnlcbiAgaWYgKHBhblRvVGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBpZiAocGFuVG9UYXJnZXQubGVuZ3RoID09PSAwKSB7IGF3YWl0IFByb21pc2UucmVzb2x2ZSgpOyByZXR1cm4gfVxuXG4gICAgaWYgKHBhblRvVGFyZ2V0WzBdLmdlb21ldHJ5KSB7XG4gICAgICBjb25zdCBnZW9tZXRyeUFycjogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5Ub1RhcmdldC5sZW5ndGg7IGkrKykge1xuICAgICAgICBnZW9tZXRyeUFyci5wdXNoKHBhblRvVGFyZ2V0W2ldLmdlb21ldHJ5KVxuICAgICAgfVxuXG4gICAgICBhd2FpdCBnZXRHZW9tZXRyaWVzRXh0ZW50KGdlb21ldHJ5QXJyKS50aGVuKChleHRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBleHRlbnQuY2VudGVyKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldEdlb21ldHJpZXNFeHRlbnQocGFuVG9UYXJnZXQpLnRoZW4oKGV4dGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGV4dGVudC5jZW50ZXIpXG4gICAgICB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocGFuVG9UYXJnZXQuZ2VvbWV0cnkpIHtcbiAgICAgIGNvbnN0IGdldG1ldHJ5ID0gcGFuVG9UYXJnZXQuZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XG4gICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGdldENlbnRlclBvaW50KGdldG1ldHJ5KSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBnZXRDZW50ZXJQb2ludChwYW5Ub1RhcmdldCkpXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdvVG8gKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBkZWxheSBiZWZvcmUgdXBkYXRpbmcgb2YgdmlldyB0dXJucyB0cnVlLCA0MDBtcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vLy8gdGhlcmUgaXMgYSBjb25mbGljdCBmb3IgcGFuaW5nIHdoZW4gdGhlIGxheWVyIHZpZXcgaXMgdXBkYXRpbmcsIHN1Y2ggYXMgJ3BhbiB0bycgYW5kICdmaWx0ZXInLlxuICAgICAgLy8vLyB0aGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLCBpdCBjYW4gcmVkdWNlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIHByb2JsZW0gcmF0aGVyIHRoYW4gc29sdmUgaXQgY29tcGxldGVseS5cbiAgICAgIC8vaWYgKHZpZXcudXBkYXRpbmcpIHtcbiAgICAgIC8vICBjb25zdCBoYW5kbGVyID0gdmlldy53YXRjaCgndXBkYXRpbmcnLCB2YWx1ZSA9PiB7XG4gICAgICAvLyAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAvLyAgICAgIHZpZXcuZ29Ubyh0YXJnZXQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiByZWplY3QoKSlcbiAgICAgIC8vICAgICAgaGFuZGxlci5yZW1vdmUoKVxuICAgICAgLy8gICAgfVxuICAgICAgLy8gIH0pXG4gICAgICAvL30gZWxzZSB7XG4gICAgICAvLyAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxuICAgICAgLy99XG4gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHsgcmVzb2x2ZSgpIH0pLmNhdGNoKCgpID0+IHsgcmVqZWN0KCkgfSlcbiAgICB9LCA0MDApXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEdlb21ldHJpZXNFeHRlbnQgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdKTogUHJvbWlzZTxfX2VzcmkuRXh0ZW50PiB7XG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG4gIF0pLnRoZW4oYXN5bmMgbW9kdWxlcyA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgbGV0IEV4dGVudDogdHlwZW9mIF9fZXNyaS5FeHRlbnQ7XG4gICAgW0V4dGVudF0gPSBtb2R1bGVzXG5cbiAgICBpZiAoIWdlb21ldHJpZXMgfHwgIWdlb21ldHJpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfVxuXG4gICAgbGV0IGZ1bGxFeHRlbnQ6IF9fZXNyaS5FeHRlbnQgPSBudWxsXG4gICAgbGV0IGluZGV4XG4gICAgY29uc3QgbnVtR2VvbWV0cmllcyA9IGdlb21ldHJpZXMubGVuZ3RoXG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HZW9tZXRyaWVzOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbaW5kZXhdXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcblxuICAgICAgaWYgKCFleHRlbnQgJiYgZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gZ2VvbWV0cnkgYXMgYW55XG5cbiAgICAgICAgaWYgKHBvaW50R2VvbWV0cnkueCAmJiBwb2ludEdlb21ldHJ5LnkpIHtcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KHtcbiAgICAgICAgICAgIHhtYXg6IHBvaW50R2VvbWV0cnkueCxcbiAgICAgICAgICAgIHhtaW46IHBvaW50R2VvbWV0cnkueCxcbiAgICAgICAgICAgIHltYXg6IHBvaW50R2VvbWV0cnkueSxcbiAgICAgICAgICAgIHltaW46IHBvaW50R2VvbWV0cnkueSxcbiAgICAgICAgICAgIHptYXg6IHBvaW50R2VvbWV0cnkueixcbiAgICAgICAgICAgIHptaW46IHBvaW50R2VvbWV0cnkueixcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvaW50R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFleHRlbnQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bGxFeHRlbnQpIHtcbiAgICAgICAgZnVsbEV4dGVudCA9IGZ1bGxFeHRlbnQudW5pb24oZXh0ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsbEV4dGVudCA9IGV4dGVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmdWxsRXh0ZW50LndpZHRoIDwgMCAmJiBmdWxsRXh0ZW50LmhlaWdodCA8IDApIHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZ1bGxFeHRlbnQpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWx0ZXJGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoIWFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKVxuXG4gIGlmICghZGF0YVNvdXJjZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXG5cbiAgdHJ5IHtcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgamltdUxheWVyVmlldyA9IG51bGxcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXG4gIH1cblxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyICYmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSkge1xuICAgIChqaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5zZXREZWZpbml0aW9uRXhwcmVzc2lvbihxdWVyeVNRTClcbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUZlYXR1cmVzIChsYXllck9iamVjdCwgcXVlcnlTUUwpIHtcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcbiAgICBsZXQgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XG4gICAgW1F1ZXJ5XSA9IG1vZHVsZXNcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXG4gICAgcXVlcnkud2hlcmUgPSBxdWVyeVNRTFxuICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFsnKiddXG4gICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgcmV0dXJuIGxheWVyT2JqZWN0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oZmVhdHVyZVNldCA9PiB7XG4gICAgICByZXR1cm4gZmVhdHVyZVNldFxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZsYXNoT25GZWF0dXJlTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3KSB7XG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcbiAgICBsZXQgZmVhdHVyZUxheWVyVmlldzogX19lc3JpLkZlYXR1cmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xuICAgICAgcXVlcnlGZWF0dXJlcyhmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcbiAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLmdlb21ldHJ5VHlwZSlcbiAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XG4gICAgICBsZXQgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlc1xuXG4gICAgICBsZXQgdGVtcEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICB1cmw6IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKCh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykubGF5ZXIpXG4gICAgICB9KVxuICAgICAgdGVtcEZlYXR1cmVMYXllci5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHF1ZXJ5RmVhdHVyZXModGVtcEZlYXR1cmVMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XG4gICAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uZ2VvbWV0cnkudHlwZSlcbiAgICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gbnVsbFxuZnVuY3Rpb24gZmxhc2hPblNjZW5lTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVTY2VuZUxheWVyVmlldykge1xuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XG4gICAgbGV0IHNjZW5lTGF5ZXJWaWV3OiBfX2VzcmkuU2NlbmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcXVlcnlGZWF0dXJlcyhzY2VuZUxheWVyVmlldz8ubGF5ZXI/LmFzc29jaWF0ZWRMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XG4gICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gc2NlbmVMYXllclZpZXcubGF5ZXIub2JqZWN0SWRGaWVsZFxuICAgICAgICBjb25zdCBvYmplY3RJZHMgPSBmZWF0dXJlU2V0LmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tvYmplY3RJZEZpZWxkXSlcblxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgY29uc3QgbWF4Rmxhc2hDb3VudCA9IDZcbiAgICAgICAgbGV0IGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9ucyA9IGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9uc1xuXG4gICAgICAgIGNvbnN0IGZsYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpIDwgbWF4Rmxhc2hDb3VudCkge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0Q29sb3IpIHtcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBudWxsXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogWzAsIDAsIDAsIDBdIH1cbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBoaWdobGlnaHRDb2xvciB9XG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0gb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zXG4gICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbGFzaEZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghbGF5ZXJEYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UobGF5ZXJEYXRhU291cmNlSWQpXG5cbiAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgamltdUxheWVyVmlldzogSmltdUxheWVyVmlldyA9IG51bGxcblxuICB0cnkge1xuICAgIGppbXVMYXllclZpZXcgPSBhd2FpdCBqaW11TWFwVmlldy53aGVuSmltdUxheWVyVmlld0xvYWRlZEJ5RGF0YVNvdXJjZShkYXRhU291cmNlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxuICAgIGNvbnNvbGUuZXJyb3IoJ2NhblxcJ3QgZ2V0IGppbXVMYXllclZpZXcgYnkgZGF0YVNvdXJjZScsIGRhdGFTb3VyY2UsIGVycilcbiAgfVxuXG4gIGlmIChqaW11TGF5ZXJWaWV3ICYmIGppbXVMYXllclZpZXcubGF5ZXIpIHtcbiAgICBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllcikge1xuICAgICAgZmxhc2hPbkZlYXR1cmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcpXG4gICAgfSBlbHNlIGlmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikge1xuICAgICAgZmxhc2hPblNjZW5lTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCBqaW11TGF5ZXJWaWV3IGFzIEppbXVTY2VuZUxheWVyVmlldylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRGbGFzaCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sIHN5bWJvbCkge1xuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9HcmFwaGljJ1xuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGxldCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWM7XG4gICAgW0dyYXBoaWNdID0gbW9kdWxlc1xuXG4gICAgY29uc3QgZmxhc2hGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgbWF4Rmxhc2hDb3VudDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBncmFwaGljcyA9IFtdXG4gICAgICBsZXQgZmxhc2hDb3VudCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcEdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGZlYXR1cmVzW2ldLmdlb21ldHJ5LFxuICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGZlYXR1cmVzW2ldLmF0dHJpYnV0ZXNcbiAgICAgICAgfSlcbiAgICAgICAgZ3JhcGhpY3MucHVzaCh0ZW1wR3JhcGhpYylcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2luZ2xlRmxhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLmFkZE1hbnkoZ3JhcGhpY3MpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLnJlbW92ZU1hbnkoZ3JhcGhpY3MpXG4gICAgICAgICAgZmxhc2hDb3VudCA9IGZsYXNoQ291bnQgKyAxXG4gICAgICAgICAgaWYgKGZsYXNoQ291bnQgPCBtYXhGbGFzaENvdW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc2luZ2xlRmxhc2goKVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKVxuICAgICAgfVxuXG4gICAgICBzaW5nbGVGbGFzaCgpXG4gICAgfVxuXG4gICAgZmxhc2hGZWF0dXJlcyhmZWF0dXJlcywgMylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Rmxhc2hTeW1ib2wgKGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XG4gIGlmIChbJ3BvaW50JywgJ211bHRpcG9pbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcbiAgICAgIHN0eWxlOiAnY2lyY2xlJyxcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXG4gICAgICBzaXplOiAnMTZweCcsXG4gICAgICBvdXRsaW5lOiB7XG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXG4gICAgICAgIHdpZHRoOiAzXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFsncG9seWxpbmUnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxuICAgICAgd2lkdGg6IDMsXG4gICAgICBzdHlsZTogJ3NvbGlkJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChbJ3BvbHlnb24nLCAnZXh0ZW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUZpbGxTeW1ib2woKVxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC41XSxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgb3V0bGluZTogeyAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUxpbmVTeW1ib2woKVxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxuICAgICAgICB3aWR0aDogM1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChbJ21lc2gnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdtZXNoLTNkJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBNZXNoU3ltYm9sM0QoKVxuICAgICAgc3ltYm9sTGF5ZXJzOiBbe1xuICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxuICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdIH1cbiAgICAgIH1dXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xuICAvLyBwb2ludCB8IG11bHRpcG9pbnQgfCBwb2x5bGluZSB8IHBvbHlnb24gfCBleHRlbnQgfCBtZXNoXG4gIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgIGNhc2UgJ3BvaW50JzpcbiAgICAgIHJldHVybiBnZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcbiAgICBjYXNlICdleHRlbnQnOlxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkXG4gICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUpLmV4dGVudC5jZW50ZXJcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcbiAgICAvLyB0b2RvXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRmVhdHVyZSAoZmVhdHVyZTogSUZlYXR1cmUgfCBfX2VzcmkuR3JhcGhpYywgR3JhcGhpYzogdHlwZW9mIF9fZXNyaS5HcmFwaGljKTogX19lc3JpLkdyYXBoaWMge1xuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXG4gIGlmICgoZmVhdHVyZSBhcyBhbnkpLmNsb25lKSB7XG4gICAgdGVtcEZlYXR1cmUgPSAoZmVhdHVyZSBhcyBhbnkpLmNsb25lKClcbiAgfSBlbHNlIHtcbiAgICB0ZW1wRmVhdHVyZSA9IEdyYXBoaWMuZnJvbUpTT04oT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZSkpXG4gICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuICByZXR1cm4gdGVtcEZlYXR1cmVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RHZW9tZXRyaWVzIChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSwgc3BhdGlhbFJlZmVyZW5jZTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5HZW9tZXRyeVtdPiB7XG4gIGlmICghZ2VvbWV0cmllcyB8fCBnZW9tZXRyaWVzLmxlbmd0aCA9PT0gMCB8fCAhZ2VvbWV0cmllc1swXSB8fFxuICAgIHNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLndraWQgfHwgKHNwYXRpYWxSZWZlcmVuY2UuZXF1YWxzKGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZSkpKSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvciAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCkge1xuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IGdlb21ldHJ5VXRpbHMucHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShnZW9tZXRyaWVzLCBzcGF0aWFsUmVmZXJlbmNlKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzWm9vbVRvRmVhdHVyZXMgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGxheWVyOiBhbnksIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XG4gIGlmIChtYXBCYXNlVmlldyAmJiBtYXBCYXNlVmlldy50eXBlID09PSAnM2QnICYmIGxheWVyICYmIGxheWVyLnF1ZXJ5RmVhdHVyZXMgJiYgZmVhdHVyZXMpIHtcbiAgICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgY29uc3QgW1F1ZXJ5XSA9IG1vZHVsZXNcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICAgICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cbiAgICAgIHF1ZXJ5Lm9iamVjdElkcyA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tsYXllci5vYmplY3RJZEZpZWxkXSlcbiAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZmVhdHVyZXMgJiYgcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQuZmVhdHVyZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcbiAgICAgICAgfVxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxuICAgICAgfSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNMaXZlIChhcHBNb2RlOiBBcHBNb2RlKTogYm9vbGVhbiB7XG4gIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xuICAgIGlmIChhcHBNb2RlID09PSBBcHBNb2RlLkRlc2lnbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyc0Zyb21EYXRhU291cmNlSWRzIChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IGxheWVyUHJvbWlzZXMgPSBbXVxuICBkYXRhU291cmNlSWRzLmZvckVhY2goZGF0YVNvdXJjZUlkID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW5cbiAgICBsZXQgbGF5ZXJQcm9taXNlXG4gICAgaWYgKGRhdGFTb3VyY2U/LmxheWVyKSB7XG4gICAgICBsYXllclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGF0YVNvdXJjZS5sYXllcilcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UpIHtcbiAgICAgIGxheWVyUHJvbWlzZSA9IGRhdGFTb3VyY2UuY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKVxuICAgIH1cbiAgICBsYXllclByb21pc2VzLnB1c2gobGF5ZXJQcm9taXNlKVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5hbGwobGF5ZXJQcm9taXNlcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEppbXVNYXBWaWV3SWQgKHdpZGdldElkOiBzdHJpbmcsIGRhdGFTb3VyY2VJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gSWYgZGF0YVNvdXJjZUlkIGlzIG51bGwsIG1ha2Ugc3VyZSBpdCBjb252ZXJ0cyB0byBlbXB0eSBzdHJpbmcuXG4gIGNvbnN0IGRzSWQgPSBkYXRhU291cmNlSWQgfHwgJydcbiAgcmV0dXJuIGAke3dpZGdldElkfS0ke2RzSWR9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwQmFzZVJlc3RvcmVEYXRhIChtYXBJbnN0YW5jZTogTWFwQmFzZSk6IE1hcGJhc2VSZXN0b3JlRGF0YSB7XG4gIGNvbnN0IHtcbiAgICBtYXBDb250YWluZXIsXG4gICAgc3RhdGUsXG4gICAgR2VvbWV0cnksXG4gICAgSW5pdGlhbFZpZXdQcm9wZXJ0aWVzLFxuICAgIFRpbGVMYXllcixcbiAgICBCYXNlbWFwLFxuICAgIE1hcFZpZXcsXG4gICAgU2NlbmVWaWV3LFxuICAgIEV4dGVudCxcbiAgICBWaWV3cG9pbnQsXG4gICAgUG9ydGFsSXRlbSxcbiAgICBQb3J0YWwsXG4gICAgV2ViTWFwLFxuICAgIFdlYlNjZW5lLFxuICAgIENvbG9yLFxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXG4gICAgbWFwQ3JlYXRpbmdJbmZvLFxuICAgIHZpZXcsXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXG4gICAgbWFwRHMsXG4gICAgZHNNYW5hZ2VyLFxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxuICB9ID0gbWFwSW5zdGFuY2VcblxuICByZXR1cm4ge1xuICAgIG1hcENvbnRhaW5lcixcbiAgICBzdGF0ZSxcblxuICAgIEdlb21ldHJ5LFxuICAgIEluaXRpYWxWaWV3UHJvcGVydGllcyxcbiAgICBUaWxlTGF5ZXIsXG4gICAgQmFzZW1hcCxcbiAgICBNYXBWaWV3LFxuICAgIFNjZW5lVmlldyxcbiAgICBFeHRlbnQsXG4gICAgVmlld3BvaW50LFxuICAgIFBvcnRhbEl0ZW0sXG4gICAgUG9ydGFsLFxuICAgIFdlYk1hcCxcbiAgICBXZWJTY2VuZSxcbiAgICBDb2xvcixcblxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXG4gICAgbWFwQ3JlYXRpbmdJbmZvLFxuICAgIHZpZXcsXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXG4gICAgbWFwRHMsXG5cbiAgICBkc01hbmFnZXIsXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVNYXBCYXNlIChtYXBJbnN0YW5jZTogTWFwQmFzZSwgcmVzdG9yZURhdGE6IE1hcGJhc2VSZXN0b3JlRGF0YSk6IHZvaWQge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdG9yZURhdGEpXG5cbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIG1hcEluc3RhbmNlW2tleV0gPSByZXN0b3JlRGF0YVtrZXldXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHdvV2lkZ2V0c011dHVhbGx5RXh0ZW50Q2hhbmdlICh3aWRnZXRJZDE6IHN0cmluZywgd2lkZ2V0SWQyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHdpZGdldElkMSAmJiB3aWRnZXRJZDIpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcblxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWydwYW5UbycsICd6b29tVG9GZWF0dXJlJ11cbiAgICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlXG5cbiAgICAgIGlmIChpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMSwgd2lkZ2V0SWQyLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSAmJlxuICAgICAgICAgaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlcih3aWRnZXRJZDIsIHdpZGdldElkMSwgbWVzc2FnZUNvbmZpZ3MsIG1lc3NhZ2VUeXBlLCBhY3Rpb25OYW1lcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlciAoc2VuZE1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBhY3Rpb25XaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcbiAgaWYgKHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgYWN0aW9uV2lkZ2V0SWQpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcblxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWyd6b29tVG9GZWF0dXJlJ11cblxuICAgICAgcmV0dXJuIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIoc2VuZE1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uV2lkZ2V0SWQsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIgKFxuICBzZW5kTWVzc2FnZVdpZGdldElkOiBzdHJpbmcsXG4gIGFjdGlvbldpZGdldElkOiBzdHJpbmcsXG4gIG1lc3NhZ2VDb25maWdzOiBJbW11dGFibGVPYmplY3Q8TWVzc2FnZXNKc29uPixcbiAgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLFxuICBhY3Rpb25OYW1lczogc3RyaW5nW11cbik6IGJvb2xlYW4ge1xuICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcbiAgICBjb25zdCBtZXNzYWdlSnNvbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhtZXNzYWdlQ29uZmlncylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZUpzb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbWVzc2FnZUpzb24gPSBtZXNzYWdlSnNvbkFycmF5W2ldXG5cbiAgICAgIGlmIChtZXNzYWdlSnNvbi53aWRnZXRJZCA9PT0gc2VuZE1lc3NhZ2VXaWRnZXRJZCAmJiBtZXNzYWdlSnNvbi5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IG1lc3NhZ2VKc29uLmFjdGlvbnNcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2pdXG5cbiAgICAgICAgICBpZiAoYWN0aW9uLndpZGdldElkID09PSBhY3Rpb25XaWRnZXRJZCkge1xuICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWVzLmluY2x1ZGVzKGFjdGlvbi5hY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lbGlrZVZpZXdwb2ludHMgKHZpZXc6IE1hcGJhc2VWaWV3LCB2cDE6IF9fZXNyaS5WaWV3cG9pbnQsIHZwMjogX19lc3JpLlZpZXdwb2ludCk6IGJvb2xlYW4ge1xuICBpZiAoIXZwMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKCF2cDIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gY2hlY2sgYm90aCB0YXJnZXRHZW9tZXRyeSBhbmQgY2FtZXJhLlxuICBpZiAodnAxLnRhcmdldEdlb21ldHJ5ICYmIHZwMS50YXJnZXRHZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcgJiYgdnAyLnRhcmdldEdlb21ldHJ5ICYmIHZwMi50YXJnZXRHZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcpIHtcbiAgICBjb25zdCBzY3JlZW5Qb2ludDEgPSB2aWV3LnRvU2NyZWVuKHZwMS50YXJnZXRHZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnQpXG4gICAgY29uc3Qgc2NyZWVuUG9pbnQyID0gdmlldy50b1NjcmVlbih2cDIudGFyZ2V0R2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KVxuICAgIGNvbnN0IGRlbHRhWCA9IHNjcmVlblBvaW50MS54IC0gc2NyZWVuUG9pbnQyLnhcbiAgICBjb25zdCBkZWx0YVkgPSBzY3JlZW5Qb2ludDEueSAtIHNjcmVlblBvaW50Mi55XG4gICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpXG5cbiAgICBpZiAoZGlzdCA+PSA1KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYW1lcmExID0gdnAxLmNhbWVyYVxuICBjb25zdCBjYW1lcmEyID0gdnAyLmNhbWVyYVxuXG4gIGlmIChjYW1lcmExICYmIGNhbWVyYTIpIHtcbiAgICAvLyBjb21wYXJlIHZpZXdwb2ludCBmb3IgU2NlbmVWaWV3XG4gICAgY29uc3QgaGVhZGluZzEgPSBwYXJzZUZsb2F0KGNhbWVyYTEuaGVhZGluZy50b0ZpeGVkKDIpKVxuICAgIGNvbnN0IGhlYWRpbmcyID0gcGFyc2VGbG9hdChjYW1lcmEyLmhlYWRpbmcudG9GaXhlZCgyKSlcblxuICAgIGlmIChoZWFkaW5nMSAhPT0gaGVhZGluZzIpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHRpbHQxID0gcGFyc2VGbG9hdChjYW1lcmExLnRpbHQudG9GaXhlZCgyKSlcbiAgICBjb25zdCB0aWx0MiA9IHBhcnNlRmxvYXQoY2FtZXJhMi50aWx0LnRvRml4ZWQoMikpXG5cbiAgICBpZiAodGlsdDEgIT09IHRpbHQyKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbkRpc3QgPSBjYW1lcmExLnBvc2l0aW9uLmRpc3RhbmNlKGNhbWVyYTIucG9zaXRpb24pXG5cbiAgICBpZiAocG9zaXRpb25EaXN0ID49IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBjb21wYXJlIHZpZXdwb2ludCBmb3IgTWFwVmlld1xuICAgIGNvbnN0IHJvdGF0aW9uMSA9IHBhcnNlRmxvYXQodnAxLnJvdGF0aW9uLnRvRml4ZWQoMikpXG4gICAgY29uc3Qgcm90YXRpb24yID0gcGFyc2VGbG9hdCh2cDIucm90YXRpb24udG9GaXhlZCgyKSlcblxuICAgIGlmIChyb3RhdGlvbjEgIT09IHJvdGF0aW9uMikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGFTY2FsZSA9IHZwMS5zY2FsZSAtIHZwMi5zY2FsZVxuXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhU2NhbGUpID49IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9pbnRJbnN0YW5jZUZyb21IaXN0b3J5ICh2aWV3OiBNYXBiYXNlVmlldywgdmlld3BvaW50SW5kZXg6IG51bWJlcik6IF9fZXNyaS5WaWV3cG9pbnQge1xuICBpZiAodmlldy52aWV3cG9pbnRIaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2aWV3LnZpZXdwb2ludEhpc3RvcnkubGVuZ3RoIC0gMVxuXG4gICAgaWYgKHZpZXdwb2ludEluZGV4ID49IDAgJiYgdmlld3BvaW50SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB2aWV3cG9pbnQgPSB2aWV3LnZpZXdwb2ludEhpc3Rvcnlbdmlld3BvaW50SW5kZXhdXG4gICAgICByZXR1cm4gdmlld3BvaW50LmNsb25lKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcFVybEhhc2hQYXJhbXMge1xuICBhY3RpdmVfZGF0YXNvdXJjZV9pZD86IHN0cmluZ1xuICBtYXBfc3RhdGU/OiBzdHJpbmdcbiAgbGF5ZXJfdmlzaWJpbGl0eT86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXJsSGFzaFBhcmFtc0ZvckFjdGl2ZUppbXVNYXBWaWV3IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcbiAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LmlzQWN0aXZlICYmIGppbXVNYXBWaWV3LnZpZXcgJiYgIWppbXVNYXBWaWV3LnZpZXcuZGVzdHJveWVkKSB7XG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXcgYXMgTWFwYmFzZVZpZXdcbiAgICBjb25zdCB1cmxNYW5hZ2VyID0gVXJsTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3Qgdmlld3BvaW50SnNvbiA9IHZpZXcudmlld3BvaW50ID8gdmlldy52aWV3cG9pbnQudG9KU09OKCkgOiBudWxsXG4gICAgY29uc3QgZXh0ZW50SnNvbiA9IHZpZXcuZXh0ZW50ID8gdmlldy5leHRlbnQudG9KU09OKCkgOiBudWxsXG5cbiAgICBsZXQgbWFwU3RhdGVTdHIgPSBudWxsXG5cbiAgICBpZiAodmlld3BvaW50SnNvbiAmJiBleHRlbnRKc29uKSB7XG4gICAgICBjb25zdCBtYXBTdGF0ZSA9IHtcbiAgICAgICAgdmlld3BvaW50OiB2aWV3cG9pbnRKc29uLFxuICAgICAgICBleHRlbnQ6IGV4dGVudEpzb25cbiAgICAgIH1cblxuICAgICAgbWFwU3RhdGVTdHIgPSBKU09OLnN0cmluZ2lmeShtYXBTdGF0ZSlcbiAgICB9XG5cbiAgICB2aWV3Lmxhc3RWaWV3cG9pbnRVcGRhdGVVcmxQYXJhbXMgPSB2aWV3LnZpZXdwb2ludCA/IHZpZXcudmlld3BvaW50LmNsb25lKCkgOiBudWxsXG5cbiAgICBjb25zdCBhY3RpdmVEYXRhc291cmNlSWQgPSBqaW11TWFwVmlldy5kYXRhU291cmNlSWQgfHwgbnVsbFxuXG4gICAgY29uc3QgbWFwVXJsSGFzaFBhcmFtczogTWFwVXJsSGFzaFBhcmFtcyA9IHtcbiAgICAgIGFjdGl2ZV9kYXRhc291cmNlX2lkOiBhY3RpdmVEYXRhc291cmNlSWQsXG4gICAgICAvLyBpZiBtYXBfc3RhdGUgaXMgbnVsbCwgVXJsTWFuYWdlciB3aWxsIHJlbW92ZSBpdCBmcm9tIHVybFxuICAgICAgbWFwX3N0YXRlOiBtYXBTdGF0ZVN0clxuICAgIH1cblxuICAgIHVybE1hbmFnZXIuc2V0V2lkZ2V0VXJsUGFyYW1zKGppbXVNYXBWaWV3Lm1hcFdpZGdldElkLCBtYXBVcmxIYXNoUGFyYW1zKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCB0eXBlIE1lc3NhZ2UsIGdldEFwcFN0b3JlLCB0eXBlIERhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLCBSZWNvcmRTZXRDaGFuZ2VUeXBlLCB0eXBlIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlLFxuICB0eXBlIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgdHlwZSBFeHRlbnRDaGFuZ2VNZXNzYWdlLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkIGFzIEZlYXR1cmVRdWVyeURhdGFSZWNvcmQsIE11dGFibGVTdG9yZU1hbmFnZXIsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvbixcbiAgdHlwZSBEYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UsIERhdGFTb3VyY2VzQ2hhbmdlVHlwZSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZUFycmF5XG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgRmVhdHVyZURhdGFSZWNvcmQgYXMgRmVhdHVyZUxheWVyRGF0YVJlY29yZCwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IHsgY2xvbmVGZWF0dXJlLCBpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4vcGFuLXRvLWFjdGlvbi1zZXR0aW5nJ1xuaW1wb3J0IHsgZ2V0RHNCeVdpZGdldElkIH0gZnJvbSAnLi9hY3Rpb24tdXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuVG9HZW9tZXRyaWVzSW50ZXJuYWxWYWx1ZSB7XG4gIHR5cGU6ICdwYW4tdG8tZ2VvbWV0cmllcydcbiAgZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0V4dGVudEludGVybmFsVmFsdWUge1xuICB0eXBlOiAncGFuLXRvLWV4dGVudCdcbiAgZ2VvbWV0cmllczogW19fZXNyaS5FeHRlbnRdXG4gIHN0YXRpb25hcnk6IGJvb2xlYW5cbiAgcHVibGlzaFRpbWU6IG51bWJlclxuICBwdWJsaXNoV2lkZ2V0SWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvUXVlcnlQYXJhbXNJbnRlcm5hbFZhbHVlIHtcbiAgdHlwZTogJ3Bhbi10by1xdWVyeS1wYXJhbXMnXG4gIGRhdGFTb3VyY2VJZHM6IHN0cmluZ1tdXG4gIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvTGF5ZXJJbnRlcm5hbFZhbHVlIHtcbiAgdHlwZTogJ3Bhbi10by1sYXllcidcbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0xheWVyc0ludGVybmFsVmFsdWUge1xuICB0eXBlOiAncGFuLXRvLWxheWVycydcbiAgZGF0YVNvdXJjZUlkczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0FjdGlvblZhbHVlIHtcbiAgdmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgfCBQYW5Ub0V4dGVudEludGVybmFsVmFsdWUgfCBQYW5Ub1F1ZXJ5UGFyYW1zSW50ZXJuYWxWYWx1ZSB8IFBhblRvTGF5ZXJJbnRlcm5hbFZhbHVlIHwgUGFuVG9MYXllcnNJbnRlcm5hbFZhbHVlXG4gIHJlbGF0ZWRXaWRnZXRzOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5Ub0FjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIE5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMgPSBbJ01hcCddXG5cbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZXNDaGFuZ2UpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRTZXRDaGFuZ2UgJiZcbiAgICAgICAgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlICE9PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSAmJlxuICAgICAgICBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRhU291cmNlTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlRGVzY3JpcHRpb24ud2lkZ2V0SWQsIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSlcbiAgICAgIHJldHVybiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuc29tZSh1c2VEYXRhU291cmNlID0+IHtcbiAgICAgICAgY29uc3QgZHMgPSBkYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxuXG4gICAgICAgIC8vIHdpZGdldDEgc2VuZCBtZXNzYWdlIHRvIG1hcCB3aWRnZXQsIGRzIGNvbWVzIGZyb20gd2lkZ2V0MS51c2VEYXRhU291cmNlcy5cblxuICAgICAgICBpZiAoZHMpIHtcbiAgICAgICAgICAvLyAjMTY4MzUsIGRzIG1heWJlIG5vdCByZWFkeSB3aGVuIHRoZSBFeEIgYXBwIGlzIG9wZW5lZCBhbmQgYWRkIHRoZSBtZXNzYWdlIGFjdGlvbiBpbW1lZGlhdGVseSBpbiB3aWRnZXQgYWN0aW9uIHNldHRpbmdcbiAgICAgICAgICBpZiAoZHMudHlwZSA9PT0gJ1dFQl9NQVAnIHx8IGRzLnR5cGUgPT09ICdXRUJfU0NFTkUnKSB7XG4gICAgICAgICAgICAvLyBJZiBkcy50eXBlIGlzIFdFQl9NQVAgb3IgV0VCX1NDRU5FLCBtZWFucyB3aWRnZXQxIGlzIGFsc28gYSBtYXAgd2lkZ2V0LlxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2lkZ2V0MSBpcyBub3QgbWFwIHdpZGdldCwgbGlrZSBsaXN0IHdpZGdldCB1c2VzIGEgbGF5ZXIgZHMuXG4gICAgICAgICAgICBjb25zdCBkc0pzb24gPSBkcy5nZXREYXRhU291cmNlSnNvbigpXG4gICAgICAgICAgICByZXR1cm4gISEoZHNKc29uICYmIGRzSnNvbi5nZW9tZXRyeVR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZ2V0U2V0dGluZ0NvbXBvbmVudFVyaSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyLmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWdcbiAgICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxuICAgIGlmIChtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UgfHxcbiAgICAgICAgICBtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZSkge1xuICAgICAgcmV0dXJuICdtZXNzYWdlLWFjdGlvbnMvcGFuLXRvLWFjdGlvbi1zZXR0aW5nJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgLy8gbWVzc2FnZS53aWRnZXRJZCBpcyBtZXNzYWdlIHNlbmRlciwgdGhpcy53aWRnZXRJZCBpcyBtZXNzYWdlIHJlY2VpdmVyXG5cbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYyA9IG51bGw7XG4gICAgICBbR3JhcGhpY10gPSBtb2R1bGVzXG5cbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZTpcbiAgICAgICAgICBpZiAoaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyKG1lc3NhZ2Uud2lkZ2V0SWQsIHRoaXMud2lkZ2V0SWQsIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRTZXRDaGFuZ2UpKSB7XG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2VcbiAgICAgICAgICBpZiAoZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gUmVjb3JkU2V0Q2hhbmdlVHlwZS5DcmVhdGVVcGRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cbiAgICAgICAgICAgIGRhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLmRhdGFSZWNvcmRTZXRzLmZvckVhY2goZGF0YVJlY29yZFNldCA9PiB7XG4gICAgICAgICAgICAgIGlmIChkYXRhUmVjb3JkU2V0ICYmIGRhdGFSZWNvcmRTZXQucmVjb3Jkcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVJlY29yZFNldC5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhUmVjb3JkRmVhdHVyZSA9IChkYXRhUmVjb3JkU2V0LnJlY29yZHNbaV0gYXNcbiAgICAgICAgICAgICAgICAgICAgKEZlYXR1cmVRdWVyeURhdGFSZWNvcmQgfCBGZWF0dXJlTGF5ZXJEYXRhUmVjb3JkKSkuZmVhdHVyZVxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXMucHVzaChjbG9uZUZlYXR1cmUoZGF0YVJlY29yZEZlYXR1cmUsIEdyYXBoaWMpLmdlb21ldHJ5KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHBhblRvVmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdwYW4tdG8tZ2VvbWV0cmllcycsXG4gICAgICAgICAgICAgIGdlb21ldHJpZXM6IGdlb21ldHJpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlLnZhbHVlJywgcGFuVG9WYWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcbiAgICAgICAgICBpZiAoaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyKG1lc3NhZ2Uud2lkZ2V0SWQsIHRoaXMud2lkZ2V0SWQsIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlKSkge1xuICAgICAgICAgICAgLy8gbWVzc2FnZS53aWRnZXRJZCBzZW5kcyBib3RoIHBhblRvIGFuZCB6b29tVG8gYWN0aW9ucyB0byB0aGlzLndpZGdldElkLCB3ZSBzaG91bGQgbm90IGV4ZWN1dGUgcGFuVG8gYWN0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggem9vbVRvIGFjdGlvbi5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZ1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZS53aWRnZXRJZF1cbiAgICAgICAgICBjb25zdCBtZXNzYWdlV2lkZ2V0TGFiZWwgPSBtZXNzYWdlV2lkZ2V0SnNvbi5tYW5pZmVzdC5sYWJlbFxuICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXG5cbiAgICAgICAgICBjb25zdCBnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXG4gICAgICAgICAgaWYgKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0pIHtcbiAgICAgICAgICAgICAgLy9pZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlIHx8IChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1swXS5kYXRhU291cmNlLmdldE1haW5EYXRhU291cmNlKCkuaWQgIT09IGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpKSB7XG4gICAgICAgICAgICAgIC8vICBicmVha1xuICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgaWYgKHRoaXMuTm9Mb2NrVHJpZ2dlckxheWVyV2lkZ2V0cy5pbmNsdWRlcyhtZXNzYWdlV2lkZ2V0TGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbkRhdGFTb3VyY2VPZlNlbGVjdGlvbiA9IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2UuZ2V0TWFpbkRhdGFTb3VyY2UoKVxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uQ29uZmlnPy51c2VEYXRhU291cmNlcz8uc29tZSh1c2VEYXRhU291cmNlID0+IHVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgPT09IG1haW5EYXRhU291cmNlT2ZTZWxlY3Rpb24uaWQpKSB7XG4gICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25DaGFuZ2VEUyA9IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2VcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25DaGFuZ2VNYWluRFMgPSBzZWxlY3Rpb25DaGFuZ2VEUz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGRzSWQgb2YgbWFpbkRTIGN1cnJlbnRseSwgd2lsbCBzdXBwb3J0IHZpZXcgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4gdXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA9PT0gc2VsZWN0aW9uQ2hhbmdlTWFpbkRTLmlkKSkge1xuICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhUmVjb3JkRmVhdHVyZSA9IChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1tpXSBhc1xuICAgICAgICAgICAgICAgIChGZWF0dXJlUXVlcnlEYXRhUmVjb3JkIHwgRmVhdHVyZUxheWVyRGF0YVJlY29yZCkpLmZlYXR1cmVcbiAgICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGNsb25lRmVhdHVyZShkYXRhUmVjb3JkRmVhdHVyZSwgR3JhcGhpYykuZ2VvbWV0cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYW5Ub1ZhbHVlOiBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlID0ge1xuICAgICAgICAgICAgdHlwZTogJ3Bhbi10by1nZW9tZXRyaWVzJyxcbiAgICAgICAgICAgIGdlb21ldHJpZXM6IGdlb21ldHJpZXNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAncGFuVG9BY3Rpb25WYWx1ZS52YWx1ZScsIHBhblRvVmFsdWUpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2U6XG4gICAgICAgICAgaWYgKGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcihtZXNzYWdlLndpZGdldElkLCB0aGlzLndpZGdldElkLCBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2UpKSB7XG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxuICAgICAgICAgICAgLy8gaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyKCkgY2FuIG9ubHkgaGFuZGxlIHNpbXBsZSBwYW5UbyBhbmQgem9vbVRvIGNvbmZsaWN0LlxuICAgICAgICAgICAgLy8gVG8gYXZvaWQgbW9yZSBjb21wbGljYXRlZCBwYW5UbyBhbmQgem9vbVRvIGNvbmZsaWN0IGNhc2VzLCB3ZSBkbyBpdCBpbiBoYW5kbGVBY3Rpb25Gb3JQYW5Ub0FjdGlvblZhbHVlIG9mIG1hcGJhc2UuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcbiAgICAgICAgICBjb25zdCByZWxhdGVkV2lkZ2V0SWRzID0gZXh0ZW50Q2hhbmdlTWVzc2FnZS5nZXRSZWxhdGVkV2lkZ2V0SWRzKClcblxuICAgICAgICAgIGlmIChyZWxhdGVkV2lkZ2V0SWRzLmluY2x1ZGVzKHRoaXMud2lkZ2V0SWQpKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGV4dGVudFZhbHVlOiBQYW5Ub0V4dGVudEludGVybmFsVmFsdWUgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGFuLXRvLWV4dGVudCcsXG4gICAgICAgICAgICBnZW9tZXRyaWVzOiBbZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnRdLFxuICAgICAgICAgICAgc3RhdGlvbmFyeTogZXh0ZW50Q2hhbmdlTWVzc2FnZS5zdGF0aW9uYXJ5LFxuICAgICAgICAgICAgcHVibGlzaFRpbWU6IGV4dGVudENoYW5nZU1lc3NhZ2UucHVibGlzaFRpbWUsXG4gICAgICAgICAgICBwdWJsaXNoV2lkZ2V0SWQ6IGV4dGVudENoYW5nZU1lc3NhZ2Uud2lkZ2V0SWRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwYW5Ub0ZlYXR1cmVBY3Rpb25WYWx1ZTogUGFuVG9BY3Rpb25WYWx1ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBleHRlbnRWYWx1ZSxcbiAgICAgICAgICAgIHJlbGF0ZWRXaWRnZXRzOiByZWxhdGVkV2lkZ2V0SWRzXG4gICAgICAgICAgfVxuICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlJywgcGFuVG9GZWF0dXJlQWN0aW9uVmFsdWUpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlOlxuICAgICAgICAgIGlmIChpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIobWVzc2FnZS53aWRnZXRJZCwgdGhpcy53aWRnZXRJZCwgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZUZpbHRlckNoYW5nZSkpIHtcbiAgICAgICAgICAgIC8vIG1lc3NhZ2Uud2lkZ2V0SWQgc2VuZHMgYm90aCBwYW5UbyBhbmQgem9vbVRvIGFjdGlvbnMgdG8gdGhpcy53aWRnZXRJZCwgd2Ugc2hvdWxkIG5vdCBleGVjdXRlIHBhblRvIGFjdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIHpvb21UbyBhY3Rpb24uXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpbHRlckNoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlXG4gICAgICAgICAgLy8gc3VwcG9ydCB2aWV3LlxuICAgICAgICAgIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiBmaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHMuc29tZShkYXRhU291cmNlSWQgPT4gdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkID09PSBkYXRhU291cmNlSWQpKSkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmaWx0ZXJDaGFuZ2VBY3Rpb25WYWx1ZTogUGFuVG9RdWVyeVBhcmFtc0ludGVybmFsVmFsdWUgPSB7XG4gICAgICAgICAgICB0eXBlOiAncGFuLXRvLXF1ZXJ5LXBhcmFtcycsXG4gICAgICAgICAgICBkYXRhU291cmNlSWRzOiBmaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHMsXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlczogYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzIHx8IChbXSBhcyB1bmtub3duIGFzIEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlLnZhbHVlJywgZmlsdGVyQ2hhbmdlQWN0aW9uVmFsdWUpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlc0NoYW5nZTpcbiAgICAgICAgICBpZiAoaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyKG1lc3NhZ2Uud2lkZ2V0SWQsIHRoaXMud2lkZ2V0SWQsIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VzQ2hhbmdlKSkge1xuICAgICAgICAgICAgLy8gbWVzc2FnZS53aWRnZXRJZCBzZW5kcyBib3RoIHBhblRvIGFuZCB6b29tVG8gYWN0aW9ucyB0byB0aGlzLndpZGdldElkLCB3ZSBzaG91bGQgbm90IGV4ZWN1dGUgcGFuVG8gYWN0aW9uIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggem9vbVRvIGFjdGlvbi5cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhU291cmNlc0NoYW5nZU1lc3NhZ2VcbiAgICAgICAgICBpZiAoZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLmNoYW5nZVR5cGUgPT09IERhdGFTb3VyY2VzQ2hhbmdlVHlwZS5DcmVhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2VJZHMgPSBbXVxuICAgICAgICAgICAgZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VzLmZvckVhY2goZGF0YVNvdXJjZSA9PiB7XG4gICAgICAgICAgICAgIGRhdGFTb3VyY2VJZHMucHVzaChkYXRhU291cmNlLmlkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IHBhblRvRmVhdHVyZUFjdGlvblZhbHVlRm9yTGF5ZXJzOiBQYW5Ub0xheWVyc0ludGVybmFsVmFsdWUgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdwYW4tdG8tbGF5ZXJzJyxcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZUlkczogZGF0YVNvdXJjZUlkc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBwYW5Ub0ZlYXR1cmVBY3Rpb25WYWx1ZUZvckxheWVycylcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9