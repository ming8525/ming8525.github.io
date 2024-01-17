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
/*!*************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/pan-to.ts ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanTo)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class PanTo extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    /**
     * PanTo data action supports both DataSource data level and Records data level.
     * supported cases:
     * case1: dataSets.length === 1 and dataLevel is DATA_SOURCE
     * case2: dataSets.length === 1 and dataLevel is RECORDS
     * case3: dataSets.length >= 2 and dataLevel is RECORDS
     */
    isSupported(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            const supportedDataSets = this.getSupportedDataSets(dataSets, dataLevel);
            if (supportedDataSets.length === 1) {
                // case1, case2
                return true;
            }
            else if (supportedDataSets.length >= 2) {
                // case3
                return dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records;
            }
            return false;
        });
    }
    getSupportedDataSets(dataSets, dataLevel) {
        const supportedDataSets = dataSets.filter(dataSet => {
            const dataSource = dataSet.dataSource;
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            // records maybe come from a table, so we need to check if the dataSource has geometry or not
            const supportSpatialInfo = (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo) && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo());
            if (!supportSpatialInfo) {
                return false;
            }
            if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records) {
                // pan to graphics
                const records = this.getRecords(dataSet, dataLevel);
                return records.length > 0;
            }
            else if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
                // pan to layer
                return !!(dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource);
            }
            return false;
        });
        return supportedDataSets;
    }
    getRecords(dataSet, dataLevel) {
        var _a;
        let result = [];
        if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
            result = [];
        }
        else if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records && ((_a = dataSet.records) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            result = dataSet.records.filter((record) => { var _a; return !!((_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry); });
        }
        return result;
    }
    getClonedGeometries(dataSet, dataLevel, Graphic) {
        const clonedGeometries = [];
        const records = this.getRecords(dataSet, dataLevel);
        records.forEach(record => {
            const feature = (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(record.feature, Graphic);
            if (feature && feature.geometry) {
                clonedGeometries.push(feature.geometry);
            }
        });
        return clonedGeometries;
    }
    onExecute(dataSets, dataLevel) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']);
            const [Graphic] = modules;
            const supportedDataSets = this.getSupportedDataSets(dataSets, dataLevel);
            if (supportedDataSets.length === 1) {
                // case1, case2
                const dataSet = dataSets[0];
                let panToActionValue = null;
                const geometries = this.getClonedGeometries(dataSet, dataLevel, Graphic);
                if (geometries.length > 0) {
                    // case2
                    panToActionValue = {
                        type: 'pan-to-geometries',
                        geometries
                    };
                }
                else {
                    // case1
                    panToActionValue = {
                        type: 'pan-to-layer',
                        dataSourceId: ((_a = dataSet.dataSource) === null || _a === void 0 ? void 0 : _a.id) || null
                    };
                }
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToActionValue);
            }
            else if (supportedDataSets.length >= 2) {
                // case3
                const allGeometries = [];
                supportedDataSets.forEach(dataSet => {
                    const geometries = this.getClonedGeometries(dataSet, dataLevel, Graphic);
                    allGeometries.push(...geometries);
                });
                if (allGeometries.length > 0) {
                    const panToActionValue = {
                        type: 'pan-to-geometries',
                        geometries: allGeometries
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToActionValue);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9wYW4tdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFJZjtBQUl3STtBQUVuSixTQUFlLHFCQUFxQixDQUFFLFdBQThDLEVBQUUsa0JBQTZEOztRQUN4SixNQUFNLGdCQUFnQixHQUFHLEVBQUU7UUFDM0Isa0JBQWtCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0RSxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQztZQUN4RSxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUM7Z0JBQ3BELE9BQU07WUFDUixDQUFDO1lBQ0QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RixDQUFDLENBQUM7UUFFRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxPQUFPLElBQUk7UUFDYixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSxrQkFBa0IsQ0FBRSxXQUE4QyxFQUFFLHNCQUFpRTs7UUFDekosTUFBTSxjQUFjLEdBQUcsRUFBRTtRQUN6QixzQkFBc0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFD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WUFDSCxDQUFDO1lBRUQsT0FBTyxJQUFJOztLQUNaO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9kYXRhLWFjdGlvbnMvcGFuLXRvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuaW1wb3J0IHtcbiAgQXBwTW9kZSwgZGF0YVNvdXJjZVV0aWxzLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBKU0FQSUxheWVyTWl4aW4sIGdlb21ldHJ5VXRpbHMsXG4gIGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VzSnNvbiwgdHlwZSBJbW11dGFibGVPYmplY3QsIE1lc3NhZ2VUeXBlLCBVcmxNYW5hZ2VyXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSGlnaExpZ2h0SGFuZGxlLCB0eXBlIE1hcGJhc2VSZXN0b3JlRGF0YSwgdHlwZSBNYXBiYXNlVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9tYXBiYXNlJ1xuaW1wb3J0IHR5cGUgTWFwQmFzZSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcbmltcG9ydCB7IHR5cGUgSUZlYXR1cmUgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIHR5cGUgSmltdU1hcFZpZXcsIExheWVyVHlwZXMsIHR5cGUgSmltdUZlYXR1cmVMYXllclZpZXcsIHR5cGUgSmltdVNjZW5lTGF5ZXJWaWV3LCB0eXBlIEppbXVMYXllclZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5ld0ZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbmV3RmVhdHVyZVNldFZhbHVlPzogeyBbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXQgfSk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IG5ld0xheWVyUHJvbWlzZXMgPSBbXVxuICBuZXdGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMobmV3RmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxuICAgIGlmIChsYXllcikge1xuICAgICAgY29uc29sZS53YXJuKCd0aGUgZmVhdHVyZSBsYXllciBpcyBhbHJlYWR5IGNyZWF0ZWQnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIG5ld0xheWVyUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXG4gIH0pXG5cbiAgaWYgKG5ld0xheWVyUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3TGF5ZXJQcm9taXNlcylcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlPzogeyBbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXQgfSk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHVwZGF0ZVByb21pc2VzID0gW11cbiAgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhjaGFuZ2VkRmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxuICAgIGlmIChsYXllcikge1xuICAgICAgbWFwQmFzZVZpZXcubWFwLnJlbW92ZShsYXllcilcbiAgICAgIHVwZGF0ZVByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlW2xheWVySWRdLCBsYXllcklkKSlcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHVwZGF0ZVByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVwZGF0ZVByb21pc2VzKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZEZlYXR1cmVTZXRUb01hcCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZVNldDogX19lc3JpLkZlYXR1cmVTZXQsIGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgaWYgKGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXNvbHZlKG51bGwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBsZXQgRmVhdHVyZVNldDogdHlwZW9mICBfX2VzcmkuRmVhdHVyZVNldDtcbiAgICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBbRmVhdHVyZUxheWVyXSA9IG1vZHVsZXM7XG5cbiAgICAgICAgY29uc3QgbGF5ZXJGcm9tRmVhdHVyZVNldCA9IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0ubGF5ZXIgYXMgYW55XG4gICAgICAgIGNvbnN0IGZpZWxkc0luRmVhdHVyZWxheWVyID0gW11cbiAgICAgICAgY29uc3QgZmllbGRNYXAgPSB7fVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0gZ2V0UmVhc29uYWJsZUZpZWxkKGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldKVxuICAgICAgICAgIGZpZWxkTWFwW2xheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldLm5hbWVdID0gZmllbGRzSXRlbS5uYW1lXG4gICAgICAgICAgZmllbGRzSW5GZWF0dXJlbGF5ZXIucHVzaChmaWVsZHNJdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGRzSW5Qb3B1cFRlbXBsYXRlID0gW11cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGZpZWxkTWFwW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc0l0ZW0gPSB7XG4gICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGRNYXBba2V5XSxcbiAgICAgICAgICAgICAgbGFiZWw6IGtleVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGRzSW5Qb3B1cFRlbXBsYXRlLnB1c2goZmllbGRzSXRlbSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3VyY2VGZWF0dXJlcyA9IFtdXG4gICAgICAgIGZlYXR1cmVTZXQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZW1wRmVhdHVyZSA9IGZlYXR1cmVcbiAgICAgICAgICBpZiAodGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkTWFwW2tleV1dID0gdGVtcEZlYXR1cmUuYXR0cmlidXRlc1trZXldXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMuZXhiZmlkID0gaW5kZXhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgICAgZXhiZmlkOiBpbmRleFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzb3VyY2VGZWF0dXJlcy5wdXNoKHRlbXBGZWF0dXJlKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgICAgaWQ6IGxheWVySWQsXG4gICAgICAgICAgdGl0bGU6IGxheWVyRnJvbUZlYXR1cmVTZXQudGl0bGUsXG4gICAgICAgICAgc291cmNlOiBzb3VyY2VGZWF0dXJlcyxcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkc0luRmVhdHVyZWxheWVyLFxuICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ2V4YmZpZCcsXG4gICAgICAgICAgcmVuZGVyZXI6IGxheWVyRnJvbUZlYXR1cmVTZXQucmVuZGVyZXIsXG4gICAgICAgICAgcG9wdXBFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnaW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgY29udGVudDogW3tcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpZWxkcycsXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3M6IGZpZWxkc0luUG9wdXBUZW1wbGF0ZVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbWFwQmFzZVZpZXcubWFwLmFkZChsYXllcilcblxuICAgICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICByZXNvbHZlKG51bGwpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0UmVhc29uYWJsZUZpZWxkIChmaWVsZDogX19lc3JpLkZpZWxkKTogX19lc3JpLkZpZWxkIHtcbiAgLy8gdGhlIGZ1bmN0aW9uIGlzIHN1cHBvcnRlZCB0byBub3JtYWxpemUgdGhlIGZpZWxkLm5hbWVcbiAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZVxuICByZXR1cm4ge1xuICAgIG5hbWU6IGZpZWxkTmFtZS5yZXBsYWNlKC9cXC4vZywgJ18nKS5yZXBsYWNlKC9cXCgvZywgJ18nKS5yZXBsYWNlKC9cXCkvZywgJ18nKSxcbiAgICBhbGlhczogZmllbGQuYWxpYXMsXG4gICAgdHlwZTogZmllbGQudHlwZVxuICB9IGFzIGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RmVhdHVyZSAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBJRmVhdHVyZSB8IElGZWF0dXJlW10sIGxheWVySWQ/OiBzdHJpbmcpOiBIaWdoTGlnaHRIYW5kbGUge1xuICAvLyBJbiB0aGlzIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBmZWF0dXJlcyBjb21lIGZyb20gdGhlIHNhbWUgbGF5ZXJcbiAgbGV0IGZlYXR1cmVMYXllcklkID0gbGF5ZXJJZFxuICBsZXQgZmVhdHVyZUxheWVyVmlldyA9IG51bGxcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxuXG4gIC8vIGlmIGxheWVySWQgZG9lc24ndCBleGlzdCwgd2UgZ2V0IGxheWVySWQgYnkgZmVhdHVyZVxuICBpZiAoIWZlYXR1cmVMYXllcklkKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldFswXSBhcyBfX2VzcmkuR3JhcGhpY1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldCBhcyBfX2VzcmkuR3JhcGhpY1xuICAgIH1cblxuICAgIGlmICh0ZW1wRmVhdHVyZSkge1xuICAgICAgZmVhdHVyZUxheWVySWQgPSB0ZW1wRmVhdHVyZS5sYXllciAmJiB0ZW1wRmVhdHVyZS5sYXllci5pZFxuICAgIH1cbiAgfVxuXG4gIGlmIChmZWF0dXJlTGF5ZXJJZCkge1xuICAgIGNvbnN0IGxheWVyVmlld3MgPSBtYXBCYXNlVmlldy5hbGxMYXllclZpZXdzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSkubGF5ZXIuaWQgPT09IGZlYXR1cmVMYXllcklkKSB7XG4gICAgICAgIGZlYXR1cmVMYXllclZpZXcgPSBsYXllclZpZXdzLmdldEl0ZW1BdChpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmZWF0dXJlTGF5ZXJWaWV3KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXllcklkOiBmZWF0dXJlTGF5ZXJJZCxcbiAgICAgICAgaGFuZGxlOiBmZWF0dXJlTGF5ZXJWaWV3LmhpZ2hsaWdodCh0YXJnZXQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb1RvVGFyZ2V0SW1tZWRpYXRlbHkgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgX3RhcmdldDogX19lc3JpLkdlb21ldHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHZpZXdTUiA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICBjb25zdCBnZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXMoW190YXJnZXRdLCB2aWV3U1IpXG5cbiAgaWYgKGdlb21ldHJpZXMgJiYgZ2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2VvbWV0cmllc1swXVxuICAgIHZpZXcuZ29Ubyh0YXJnZXQsIHsgYW5pbWF0ZTogZmFsc2UgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ29Ub1ZpZXdwb2ludEltbWVkaWF0ZWx5ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXG4gIGNvbnN0IHZpZXdwb2ludCA9IGF3YWl0IHByb2plY3RWaWV3cG9pbnQoX3ZpZXdwb2ludCwgdmlld1NSKVxuICAvLyB2aWV3LmdvVG8odmlld3BvaW50LCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gIHZpZXcudmlld3BvaW50ID0gdmlld3BvaW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0Vmlld3BvaW50ICh2aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcbiAgY29uc3Qgc3IxID0gdmlld3BvaW50LnRhcmdldEdlb21ldHJ5Py5zcGF0aWFsUmVmZXJlbmNlXG5cbiAgaWYgKHNyMSAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjEsIHZpZXdTUikpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3Qgc3IyID0gdmlld3BvaW50LmNhbWVyYT8ucG9zaXRpb24/LnNwYXRpYWxSZWZlcmVuY2VcblxuICBpZiAoc3IyICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHNyMiwgdmlld1NSKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlIChzcjE6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlLCBzcjI6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XG4gIGNvbnN0IGlzU2FtZSA9IHNyMS53a2lkID09PSBzcjIud2tpZCB8fCBzcjEuZXF1YWxzKHNyMilcbiAgLy8gIEluIEpTIEFQSSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xuICBjb25zdCBpc0xpa2UgPSAoc3IxLmlzV2ViTWVyY2F0b3IgfHwgc3IxLmlzV0dTODQpICYmIChzcjIuaXNXZWJNZXJjYXRvciB8fCBzcjIuaXNXR1M4NClcbiAgcmV0dXJuICFpc1NhbWUgJiYgIWlzTGlrZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdFZpZXdwb2ludCAoX3ZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCwgdmlld1NSOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IFByb21pc2U8X19lc3JpLlZpZXdwb2ludD4ge1xuICBjb25zdCB2aWV3cG9pbnQgPSBfdmlld3BvaW50LmNsb25lKClcbiAgY29uc3QgdGFyZ2V0R2VvbWV0cnkgPSB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnlcbiAgY29uc3QgY2FtZXJhUG9zaXRvbiA9IHZpZXdwb2ludC5jYW1lcmE/LnBvc2l0aW9uXG5cbiAgY29uc3QgdG9Qcm9qZWN0R2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxuICBsZXQgaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnk6IGJvb2xlYW4gPSBmYWxzZVxuICBsZXQgaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZVxuXG4gIGlmICh0YXJnZXRHZW9tZXRyeSAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZSh0YXJnZXRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlLCB2aWV3U1IpKSB7XG4gICAgaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkgPSB0cnVlXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKHRhcmdldEdlb21ldHJ5KVxuICB9XG5cbiAgaWYgKGNhbWVyYVBvc2l0b24gJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UoY2FtZXJhUG9zaXRvbi5zcGF0aWFsUmVmZXJlbmNlLCB2aWV3U1IpKSB7XG4gICAgaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb24gPSB0cnVlXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKGNhbWVyYVBvc2l0b24pXG4gIH1cblxuICBpZiAodG9Qcm9qZWN0R2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcHJvamVjdGVkR2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKHRvUHJvamVjdEdlb21ldHJpZXMsIHZpZXdTUilcblxuICAgIGlmIChpc1Byb2plY3RUYXJnZXRHZW9tZXRyeSkge1xuICAgICAgdmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gcHJvamVjdGVkR2VvbWV0cmllc1swXVxuICAgIH1cblxuICAgIGlmIChpc1Byb2plY3RDYW1lcmFQb3NpdGlvbikge1xuICAgICAgdmlld3BvaW50LmNhbWVyYS5wb3NpdGlvbiA9IHByb2plY3RlZEdlb21ldHJpZXNbcHJvamVjdGVkR2VvbWV0cmllcy5sZW5ndGggLSAxXSBhcyBfX2VzcmkuUG9pbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmlld3BvaW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXBQYW50byAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkgfCBfX2VzcmkuR2VvbWV0cnlbXSB8XG5fX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBfX2VzcmkuRXh0ZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgcGFuVG9UYXJnZXQgPSB0YXJnZXQgYXMgYW55XG4gIGNvbnN0IHRlbXBCYXNlTWFwVmlldyA9IG1hcEJhc2VWaWV3IGFzIGFueVxuICBpZiAocGFuVG9UYXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGlmIChwYW5Ub1RhcmdldC5sZW5ndGggPT09IDApIHsgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKCk7IHJldHVybiB9XG5cbiAgICBpZiAocGFuVG9UYXJnZXRbMF0uZ2VvbWV0cnkpIHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5QXJyOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhblRvVGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdlb21ldHJ5QXJyLnB1c2gocGFuVG9UYXJnZXRbaV0uZ2VvbWV0cnkpXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGdldEdlb21ldHJpZXNFeHRlbnQoZ2VvbWV0cnlBcnIpLnRoZW4oKGV4dGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGV4dGVudC5jZW50ZXIpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0R2VvbWV0cmllc0V4dGVudChwYW5Ub1RhcmdldCkudGhlbigoZXh0ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZXh0ZW50LmNlbnRlcilcbiAgICAgIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChwYW5Ub1RhcmdldC5nZW9tZXRyeSkge1xuICAgICAgY29uc3QgZ2V0bWV0cnkgPSBwYW5Ub1RhcmdldC5nZW9tZXRyeSBhcyBfX2VzcmkuR2VvbWV0cnlcbiAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZ2V0Q2VudGVyUG9pbnQoZ2V0bWV0cnkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGdldENlbnRlclBvaW50KHBhblRvVGFyZ2V0KSlcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ29UbyAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIGRlbGF5IGJlZm9yZSB1cGRhdGluZyBvZiB2aWV3IHR1cm5zIHRydWUsIDQwMG1zIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8vLyB0aGVyZSBpcyBhIGNvbmZsaWN0IGZvciBwYW5pbmcgd2hlbiB0aGUgbGF5ZXIgdmlldyBpcyB1cGRhdGluZywgc3VjaCBhcyAncGFuIHRvJyBhbmQgJ2ZpbHRlcicuXG4gICAgICAvLy8vIHRoaXMgaXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24sIGl0IGNhbiByZWR1Y2UgdGhlIGZyZXF1ZW5jeSBvZiB0aGUgcHJvYmxlbSByYXRoZXIgdGhhbiBzb2x2ZSBpdCBjb21wbGV0ZWx5LlxuICAgICAgLy9pZiAodmlldy51cGRhdGluZykge1xuICAgICAgLy8gIGNvbnN0IGhhbmRsZXIgPSB2aWV3LndhdGNoKCd1cGRhdGluZycsIHZhbHVlID0+IHtcbiAgICAgIC8vICAgIGlmICghdmFsdWUpIHtcbiAgICAgIC8vICAgICAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxuICAgICAgLy8gICAgICBoYW5kbGVyLnJlbW92ZSgpXG4gICAgICAvLyAgICB9XG4gICAgICAvLyAgfSlcbiAgICAgIC8vfSBlbHNlIHtcbiAgICAgIC8vICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXG4gICAgICAvL31cbiAgICAgIHZpZXcuZ29Ubyh0YXJnZXQpLnRoZW4oKCkgPT4geyByZXNvbHZlKCkgfSkuY2F0Y2goKCkgPT4geyByZWplY3QoKSB9KVxuICAgIH0sIDQwMClcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvbWV0cmllc0V4dGVudCAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10pOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcbiAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbiAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBsZXQgRXh0ZW50OiB0eXBlb2YgX19lc3JpLkV4dGVudDtcbiAgICBbRXh0ZW50XSA9IG1vZHVsZXNcblxuICAgIGlmICghZ2VvbWV0cmllcyB8fCAhZ2VvbWV0cmllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcbiAgICB9XG5cbiAgICBsZXQgZnVsbEV4dGVudDogX19lc3JpLkV4dGVudCA9IG51bGxcbiAgICBsZXQgaW5kZXhcbiAgICBjb25zdCBudW1HZW9tZXRyaWVzID0gZ2VvbWV0cmllcy5sZW5ndGhcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG51bUdlb21ldHJpZXM7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpbmRleF1cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgbGV0IGV4dGVudCA9IGdlb21ldHJ5LmV4dGVudFxuXG4gICAgICBpZiAoIWV4dGVudCAmJiBnZW9tZXRyeS50eXBlID09PSAncG9pbnQnKSB7XG4gICAgICAgIGNvbnN0IHBvaW50R2VvbWV0cnkgPSBnZW9tZXRyeSBhcyBhbnlcblxuICAgICAgICBpZiAocG9pbnRHZW9tZXRyeS54ICYmIHBvaW50R2VvbWV0cnkueSkge1xuICAgICAgICAgIGV4dGVudCA9IG5ldyBFeHRlbnQoe1xuICAgICAgICAgICAgeG1heDogcG9pbnRHZW9tZXRyeS54LFxuICAgICAgICAgICAgeG1pbjogcG9pbnRHZW9tZXRyeS54LFxuICAgICAgICAgICAgeW1heDogcG9pbnRHZW9tZXRyeS55LFxuICAgICAgICAgICAgeW1pbjogcG9pbnRHZW9tZXRyeS55LFxuICAgICAgICAgICAgem1heDogcG9pbnRHZW9tZXRyeS56LFxuICAgICAgICAgICAgem1pbjogcG9pbnRHZW9tZXRyeS56LFxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWV4dGVudCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnVsbEV4dGVudCkge1xuICAgICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudC51bmlvbihleHRlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdWxsRXh0ZW50ID0gZXh0ZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZ1bGxFeHRlbnQud2lkdGggPCAwICYmIGZ1bGxFeHRlbnQuaGVpZ2h0IDwgMCkge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZnVsbEV4dGVudClcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbHRlckZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBhY3Rpb25MYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQpXG5cbiAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgamltdUxheWVyVmlldzogSmltdUxheWVyVmlldyA9IG51bGxcblxuICB0cnkge1xuICAgIGppbXVMYXllclZpZXcgPSBhd2FpdCBqaW11TWFwVmlldy53aGVuSmltdUxheWVyVmlld0xvYWRlZEJ5RGF0YVNvdXJjZShkYXRhU291cmNlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxuICAgIGNvbnNvbGUuZXJyb3IoJ2NhblxcJ3QgZ2V0IGppbXVMYXllclZpZXcgYnkgZGF0YVNvdXJjZScsIGRhdGFTb3VyY2UsIGVycilcbiAgfVxuXG4gIGlmIChqaW11TGF5ZXJWaWV3ICYmIGppbXVMYXllclZpZXcubGF5ZXIgJiYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIgfHwgamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpKSB7XG4gICAgKGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLnNldERlZmluaXRpb25FeHByZXNzaW9uKHF1ZXJ5U1FMKVxuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RmVhdHVyZXMgKGxheWVyT2JqZWN0LCBxdWVyeVNRTCkge1xuICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgIGxldCBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeTtcbiAgICBbUXVlcnldID0gbW9kdWxlc1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcbiAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5U1FMXG4gICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cbiAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICByZXR1cm4gbGF5ZXJPYmplY3QucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihmZWF0dXJlU2V0ID0+IHtcbiAgICAgIHJldHVybiBmZWF0dXJlU2V0XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmxhc2hPbkZlYXR1cmVMYXllciAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBxdWVyeVNRTDogc3RyaW5nLCB0ZW1wSmltdUxheWVyVmlldzogSmltdUZlYXR1cmVMYXllclZpZXcpIHtcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xuICAgIGxldCBmZWF0dXJlTGF5ZXJWaWV3OiBfX2VzcmkuRmVhdHVyZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xuICAgIGlmIChmZWF0dXJlTGF5ZXJWaWV3KSB7XG4gICAgICBxdWVyeUZlYXR1cmVzKGZlYXR1cmVMYXllclZpZXcubGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xuICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVMYXllclZpZXcubGF5ZXIuZ2VvbWV0cnlUeXBlKVxuICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcbiAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzXG5cbiAgICAgIGxldCB0ZW1wRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgIHVybDogZGF0YVNvdXJjZVV0aWxzLmdldFVybEJ5TGF5ZXIoKHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5sYXllcilcbiAgICAgIH0pXG4gICAgICB0ZW1wRmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcXVlcnlGZWF0dXJlcyh0ZW1wRmVhdHVyZUxheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcbiAgICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZVNldC5mZWF0dXJlc1swXS5nZW9tZXRyeS50eXBlKVxuICAgICAgICAgICAgc3RhcnRGbGFzaChqaW11TWFwVmlldy52aWV3LCBmZWF0dXJlU2V0LmZlYXR1cmVzLCBzeW1ib2wpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cbmxldCBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBudWxsXG5mdW5jdGlvbiBmbGFzaE9uU2NlbmVMYXllciAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBxdWVyeVNRTDogc3RyaW5nLCB0ZW1wSmltdUxheWVyVmlldzogSmltdVNjZW5lTGF5ZXJWaWV3KSB7XG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcbiAgICBsZXQgc2NlbmVMYXllclZpZXc6IF9fZXNyaS5TY2VuZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBxdWVyeUZlYXR1cmVzKHNjZW5lTGF5ZXJWaWV3Py5sYXllcj8uYXNzb2NpYXRlZExheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcbiAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdElkRmllbGQgPSBzY2VuZUxheWVyVmlldy5sYXllci5vYmplY3RJZEZpZWxkXG4gICAgICAgIGNvbnN0IG9iamVjdElkcyA9IGZlYXR1cmVTZXQuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW29iamVjdElkRmllbGRdKVxuXG4gICAgICAgIGxldCBpID0gMFxuICAgICAgICBjb25zdCBtYXhGbGFzaENvdW50ID0gNlxuICAgICAgICBsZXQgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zID0gamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zXG5cbiAgICAgICAgY29uc3QgZmxhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGkgPCBtYXhGbGFzaENvdW50KSB7XG4gICAgICAgICAgICBpKytcbiAgICAgICAgICAgIGlmIChoaWdobGlnaHRDb2xvcikge1xuICAgICAgICAgICAgICBoaWdobGlnaHRDb2xvciA9IG51bGxcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBbMCwgMCwgMCwgMF0gfVxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IGhpZ2hsaWdodENvbG9yIH1cbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dChmbGFzaCwgNTAwKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnNcbiAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dChmbGFzaCwgNTAwKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZsYXNoRmVhdHVyZXNCeVF1ZXJ5IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFsYXllckRhdGFTb3VyY2VJZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShsYXllckRhdGFTb3VyY2VJZClcblxuICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3ID0gbnVsbFxuXG4gIHRyeSB7XG4gICAgamltdUxheWVyVmlldyA9IGF3YWl0IGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkQnlEYXRhU291cmNlKGRhdGFTb3VyY2UpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGppbXVMYXllclZpZXcgPSBudWxsXG4gICAgY29uc29sZS5lcnJvcignY2FuXFwndCBnZXQgamltdUxheWVyVmlldyBieSBkYXRhU291cmNlJywgZGF0YVNvdXJjZSwgZXJyKVxuICB9XG5cbiAgaWYgKGppbXVMYXllclZpZXcgJiYgamltdUxheWVyVmlldy5sYXllcikge1xuICAgIGlmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyKSB7XG4gICAgICBmbGFzaE9uRmVhdHVyZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgamltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldylcbiAgICB9IGVsc2UgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSB7XG4gICAgICBmbGFzaE9uU2NlbmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIGppbXVMYXllclZpZXcgYXMgSmltdVNjZW5lTGF5ZXJWaWV3KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydEZsYXNoIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgc3ltYm9sKSB7XG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL0dyYXBoaWMnXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYztcbiAgICBbR3JhcGhpY10gPSBtb2R1bGVzXG5cbiAgICBjb25zdCBmbGFzaEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBtYXhGbGFzaENvdW50OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IGdyYXBoaWNzID0gW11cbiAgICAgIGxldCBmbGFzaENvdW50ID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZW1wR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcbiAgICAgICAgICBnZW9tZXRyeTogZmVhdHVyZXNbaV0uZ2VvbWV0cnksXG4gICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgICAgYXR0cmlidXRlczogZmVhdHVyZXNbaV0uYXR0cmlidXRlc1xuICAgICAgICB9KVxuICAgICAgICBncmFwaGljcy5wdXNoKHRlbXBHcmFwaGljKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaW5nbGVGbGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MuYWRkTWFueShncmFwaGljcylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MucmVtb3ZlTWFueShncmFwaGljcylcbiAgICAgICAgICBmbGFzaENvdW50ID0gZmxhc2hDb3VudCArIDFcbiAgICAgICAgICBpZiAoZmxhc2hDb3VudCA8IG1heEZsYXNoQ291bnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzaW5nbGVGbGFzaCgpXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApXG4gICAgICB9XG5cbiAgICAgIHNpbmdsZUZsYXNoKClcbiAgICB9XG5cbiAgICBmbGFzaEZlYXR1cmVzKGZlYXR1cmVzLCAzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRGbGFzaFN5bWJvbCAoZ2VvbWV0cnlUeXBlOiBzdHJpbmcpIHtcbiAgaWYgKFsncG9pbnQnLCAnbXVsdGlwb2ludCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxuICAgICAgc3R5bGU6ICdjaXJjbGUnLFxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcbiAgICAgIHNpemU6ICcxNnB4JyxcbiAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcbiAgICAgICAgd2lkdGg6IDNcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoWydwb2x5bGluZSddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXG4gICAgICB3aWR0aDogMyxcbiAgICAgIHN0eWxlOiAnc29saWQnXG4gICAgfVxuICB9IGVsc2UgaWYgKFsncG9seWdvbicsICdleHRlbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLFxuICAgICAgc3R5bGU6ICdzb2xpZCcsXG4gICAgICBvdXRsaW5lOiB7IC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlTGluZVN5bWJvbCgpXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXG4gICAgICAgIHdpZHRoOiAzXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFsnbWVzaCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ21lc2gtM2QnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IE1lc2hTeW1ib2wzRCgpXG4gICAgICBzeW1ib2xMYXllcnM6IFt7XG4gICAgICAgIHR5cGU6ICdmaWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBGaWxsU3ltYm9sM0RMYXllcigpXG4gICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0gfVxuICAgICAgfV1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDZW50ZXJQb2ludCAoZ2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSk6IF9fZXNyaS5Qb2ludCB7XG4gIC8vIHBvaW50IHwgbXVsdGlwb2ludCB8IHBvbHlsaW5lIHwgcG9seWdvbiB8IGV4dGVudCB8IG1lc2hcbiAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XG4gICAgY2FzZSAncG9pbnQnOlxuICAgICAgcmV0dXJuIGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxuICAgIGNhc2UgJ2V4dGVudCc6XG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5FeHRlbnQpLmNlbnRlclxuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWRcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSkuZXh0ZW50LmNlbnRlclxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZ2VvbWV0cnkgJiYgZ2VvbWV0cnkuZXh0ZW50ID8gZ2VvbWV0cnkuZXh0ZW50LmNlbnRlciA6IHVuZGVmaW5lZFxuICAgIC8vIHRvZG9cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVGZWF0dXJlIChmZWF0dXJlOiBJRmVhdHVyZSB8IF9fZXNyaS5HcmFwaGljLCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWMpOiBfX2VzcmkuR3JhcGhpYyB7XG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcbiAgaWYgKChmZWF0dXJlIGFzIGFueSkuY2xvbmUpIHtcbiAgICB0ZW1wRmVhdHVyZSA9IChmZWF0dXJlIGFzIGFueSkuY2xvbmUoKVxuICB9IGVsc2Uge1xuICAgIHRlbXBGZWF0dXJlID0gR3JhcGhpYy5mcm9tSlNPTihPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlKSlcbiAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZS5hdHRyaWJ1dGVzKVxuICB9XG4gIHJldHVybiB0ZW1wRmVhdHVyZVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdEdlb21ldHJpZXMgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdLCBzcGF0aWFsUmVmZXJlbmNlOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IFByb21pc2U8X19lc3JpLkdlb21ldHJ5W10+IHtcbiAgaWYgKCFnZW9tZXRyaWVzIHx8IGdlb21ldHJpZXMubGVuZ3RoID09PSAwIHx8ICFnZW9tZXRyaWVzWzBdIHx8XG4gICAgc3BhdGlhbFJlZmVyZW5jZS53a2lkID09PSBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2Uud2tpZCB8fCAoc3BhdGlhbFJlZmVyZW5jZS5lcXVhbHMoZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlKSkpIHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXG4gIH0gZWxzZSBpZiAoc3BhdGlhbFJlZmVyZW5jZS5pc1dlYk1lcmNhdG9yICYmIGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0KSB7XG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvcikge1xuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXdhaXQgZ2VvbWV0cnlVdGlscy5wcm9qZWN0VG9TcGF0aWFsUmVmZXJlbmNlKGdlb21ldHJpZXMsIHNwYXRpYWxSZWZlcmVuY2UpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nab29tVG9GZWF0dXJlcyAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbGF5ZXI6IGFueSwgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10pOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcbiAgaWYgKG1hcEJhc2VWaWV3ICYmIG1hcEJhc2VWaWV3LnR5cGUgPT09ICczZCcgJiYgbGF5ZXIgJiYgbGF5ZXIucXVlcnlGZWF0dXJlcyAmJiBmZWF0dXJlcykge1xuICAgIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICBjb25zdCBbUXVlcnldID0gbW9kdWxlc1xuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXVxuICAgICAgcXVlcnkub2JqZWN0SWRzID0gZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW2xheWVyLm9iamVjdElkRmllbGRdKVxuICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWF0dXJlcyAmJiByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSBmZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdC5mZWF0dXJlcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxuICAgICAgICB9XG4gICAgICB9LCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXG4gICAgICB9KVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0xpdmUgKGFwcE1vZGU6IEFwcE1vZGUpOiBib29sZWFuIHtcbiAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSB7XG4gICAgaWYgKGFwcE1vZGUgPT09IEFwcE1vZGUuRGVzaWduKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF5ZXJzRnJvbURhdGFTb3VyY2VJZHMgKGRhdGFTb3VyY2VJZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgbGF5ZXJQcm9taXNlcyA9IFtdXG4gIGRhdGFTb3VyY2VJZHMuZm9yRWFjaChkYXRhU291cmNlSWQgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZUlkKSBhcyB1bmtub3duIGFzIEpTQVBJTGF5ZXJNaXhpblxuICAgIGxldCBsYXllclByb21pc2VcbiAgICBpZiAoZGF0YVNvdXJjZT8ubGF5ZXIpIHtcbiAgICAgIGxheWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShkYXRhU291cmNlLmxheWVyKVxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZT8uY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSkge1xuICAgICAgbGF5ZXJQcm9taXNlID0gZGF0YVNvdXJjZS5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlKClcbiAgICB9IGVsc2Uge1xuICAgICAgbGF5ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfVxuICAgIGxheWVyUHJvbWlzZXMucHVzaChsYXllclByb21pc2UpXG4gIH0pXG4gIHJldHVybiBQcm9taXNlLmFsbChsYXllclByb21pc2VzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SmltdU1hcFZpZXdJZCAod2lkZ2V0SWQ6IHN0cmluZywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBJZiBkYXRhU291cmNlSWQgaXMgbnVsbCwgbWFrZSBzdXJlIGl0IGNvbnZlcnRzIHRvIGVtcHR5IHN0cmluZy5cbiAgY29uc3QgZHNJZCA9IGRhdGFTb3VyY2VJZCB8fCAnJ1xuICByZXR1cm4gYCR7d2lkZ2V0SWR9LSR7ZHNJZH1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBCYXNlUmVzdG9yZURhdGEgKG1hcEluc3RhbmNlOiBNYXBCYXNlKTogTWFwYmFzZVJlc3RvcmVEYXRhIHtcbiAgY29uc3Qge1xuICAgIG1hcENvbnRhaW5lcixcbiAgICBzdGF0ZSxcbiAgICBHZW9tZXRyeSxcbiAgICBJbml0aWFsVmlld1Byb3BlcnRpZXMsXG4gICAgVGlsZUxheWVyLFxuICAgIEJhc2VtYXAsXG4gICAgTWFwVmlldyxcbiAgICBTY2VuZVZpZXcsXG4gICAgRXh0ZW50LFxuICAgIFZpZXdwb2ludCxcbiAgICBQb3J0YWxJdGVtLFxuICAgIFBvcnRhbCxcbiAgICBXZWJNYXAsXG4gICAgV2ViU2NlbmUsXG4gICAgQ29sb3IsXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcbiAgICBtYXBDcmVhdGluZ0luZm8sXG4gICAgdmlldyxcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcbiAgICBtYXBEcyxcbiAgICBkc01hbmFnZXIsXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXG4gIH0gPSBtYXBJbnN0YW5jZVxuXG4gIHJldHVybiB7XG4gICAgbWFwQ29udGFpbmVyLFxuICAgIHN0YXRlLFxuXG4gICAgR2VvbWV0cnksXG4gICAgSW5pdGlhbFZpZXdQcm9wZXJ0aWVzLFxuICAgIFRpbGVMYXllcixcbiAgICBCYXNlbWFwLFxuICAgIE1hcFZpZXcsXG4gICAgU2NlbmVWaWV3LFxuICAgIEV4dGVudCxcbiAgICBWaWV3cG9pbnQsXG4gICAgUG9ydGFsSXRlbSxcbiAgICBQb3J0YWwsXG4gICAgV2ViTWFwLFxuICAgIFdlYlNjZW5lLFxuICAgIENvbG9yLFxuXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcbiAgICBtYXBDcmVhdGluZ0luZm8sXG4gICAgdmlldyxcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcbiAgICBtYXBEcyxcblxuICAgIGRzTWFuYWdlcixcbiAgICBpc0ZpcnN0UmVjZWl2ZU1lc3NhZ2VcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZU1hcEJhc2UgKG1hcEluc3RhbmNlOiBNYXBCYXNlLCByZXN0b3JlRGF0YTogTWFwYmFzZVJlc3RvcmVEYXRhKTogdm9pZCB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN0b3JlRGF0YSlcblxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgbWFwSW5zdGFuY2Vba2V5XSA9IHJlc3RvcmVEYXRhW2tleV1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUd29XaWRnZXRzTXV0dWFsbHlFeHRlbnRDaGFuZ2UgKHdpZGdldElkMTogc3RyaW5nLCB3aWRnZXRJZDI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAod2lkZ2V0SWQxICYmIHdpZGdldElkMikge1xuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xuXG4gICAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3BhblRvJywgJ3pvb21Ub0ZlYXR1cmUnXVxuICAgICAgY29uc3QgbWVzc2FnZVR5cGUgPSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2VcblxuICAgICAgaWYgKGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQxLCB3aWRnZXRJZDIsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpICYmXG4gICAgICAgICBpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMiwgd2lkZ2V0SWQxLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyIChzZW5kTWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIGFjdGlvbldpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xuICBpZiAoc2VuZE1lc3NhZ2VXaWRnZXRJZCAmJiBhY3Rpb25XaWRnZXRJZCkge1xuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xuXG4gICAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3pvb21Ub0ZlYXR1cmUnXVxuXG4gICAgICByZXR1cm4gaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlcihzZW5kTWVzc2FnZVdpZGdldElkLCBhY3Rpb25XaWRnZXRJZCwgbWVzc2FnZUNvbmZpZ3MsIG1lc3NhZ2VUeXBlLCBhY3Rpb25OYW1lcylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlciAoXG4gIHNlbmRNZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZyxcbiAgYWN0aW9uV2lkZ2V0SWQ6IHN0cmluZyxcbiAgbWVzc2FnZUNvbmZpZ3M6IEltbXV0YWJsZU9iamVjdDxNZXNzYWdlc0pzb24+LFxuICBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsXG4gIGFjdGlvbk5hbWVzOiBzdHJpbmdbXVxuKTogYm9vbGVhbiB7XG4gIGlmIChtZXNzYWdlQ29uZmlncykge1xuICAgIGNvbnN0IG1lc3NhZ2VKc29uQXJyYXkgPSBPYmplY3QudmFsdWVzKG1lc3NhZ2VDb25maWdzKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlSnNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtZXNzYWdlSnNvbiA9IG1lc3NhZ2VKc29uQXJyYXlbaV1cblxuICAgICAgaWYgKG1lc3NhZ2VKc29uLndpZGdldElkID09PSBzZW5kTWVzc2FnZVdpZGdldElkICYmIG1lc3NhZ2VKc29uLm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gbWVzc2FnZUpzb24uYWN0aW9uc1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnNbal1cblxuICAgICAgICAgIGlmIChhY3Rpb24ud2lkZ2V0SWQgPT09IGFjdGlvbldpZGdldElkKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uTmFtZXMuaW5jbHVkZXMoYWN0aW9uLmFjdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVsaWtlVmlld3BvaW50cyAodmlldzogTWFwYmFzZVZpZXcsIHZwMTogX19lc3JpLlZpZXdwb2ludCwgdnAyOiBfX2VzcmkuVmlld3BvaW50KTogYm9vbGVhbiB7XG4gIGlmICghdnAxKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoIXZwMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gV2UgbmVlZCB0byBjaGVjayBib3RoIHRhcmdldEdlb21ldHJ5IGFuZCBjYW1lcmEuXG4gIGlmICh2cDEudGFyZ2V0R2VvbWV0cnkgJiYgdnAxLnRhcmdldEdlb21ldHJ5LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLmdlb21ldHJ5LlBvaW50JyAmJiB2cDIudGFyZ2V0R2VvbWV0cnkgJiYgdnAyLnRhcmdldEdlb21ldHJ5LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLmdlb21ldHJ5LlBvaW50Jykge1xuICAgIGNvbnN0IHNjcmVlblBvaW50MSA9IHZpZXcudG9TY3JlZW4odnAxLnRhcmdldEdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludClcbiAgICBjb25zdCBzY3JlZW5Qb2ludDIgPSB2aWV3LnRvU2NyZWVuKHZwMi50YXJnZXRHZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnQpXG4gICAgY29uc3QgZGVsdGFYID0gc2NyZWVuUG9pbnQxLnggLSBzY3JlZW5Qb2ludDIueFxuICAgIGNvbnN0IGRlbHRhWSA9IHNjcmVlblBvaW50MS55IC0gc2NyZWVuUG9pbnQyLnlcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSlcblxuICAgIGlmIChkaXN0ID49IDUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNhbWVyYTEgPSB2cDEuY2FtZXJhXG4gIGNvbnN0IGNhbWVyYTIgPSB2cDIuY2FtZXJhXG5cbiAgaWYgKGNhbWVyYTEgJiYgY2FtZXJhMikge1xuICAgIC8vIGNvbXBhcmUgdmlld3BvaW50IGZvciBTY2VuZVZpZXdcbiAgICBjb25zdCBoZWFkaW5nMSA9IHBhcnNlRmxvYXQoY2FtZXJhMS5oZWFkaW5nLnRvRml4ZWQoMikpXG4gICAgY29uc3QgaGVhZGluZzIgPSBwYXJzZUZsb2F0KGNhbWVyYTIuaGVhZGluZy50b0ZpeGVkKDIpKVxuXG4gICAgaWYgKGhlYWRpbmcxICE9PSBoZWFkaW5nMikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgdGlsdDEgPSBwYXJzZUZsb2F0KGNhbWVyYTEudGlsdC50b0ZpeGVkKDIpKVxuICAgIGNvbnN0IHRpbHQyID0gcGFyc2VGbG9hdChjYW1lcmEyLnRpbHQudG9GaXhlZCgyKSlcblxuICAgIGlmICh0aWx0MSAhPT0gdGlsdDIpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uRGlzdCA9IGNhbWVyYTEucG9zaXRpb24uZGlzdGFuY2UoY2FtZXJhMi5wb3NpdGlvbilcblxuICAgIGlmIChwb3NpdGlvbkRpc3QgPj0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGNvbXBhcmUgdmlld3BvaW50IGZvciBNYXBWaWV3XG4gICAgY29uc3Qgcm90YXRpb24xID0gcGFyc2VGbG9hdCh2cDEucm90YXRpb24udG9GaXhlZCgyKSlcbiAgICBjb25zdCByb3RhdGlvbjIgPSBwYXJzZUZsb2F0KHZwMi5yb3RhdGlvbi50b0ZpeGVkKDIpKVxuXG4gICAgaWYgKHJvdGF0aW9uMSAhPT0gcm90YXRpb24yKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YVNjYWxlID0gdnAxLnNjYWxlIC0gdnAyLnNjYWxlXG5cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFTY2FsZSkgPj0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdwb2ludEluc3RhbmNlRnJvbUhpc3RvcnkgKHZpZXc6IE1hcGJhc2VWaWV3LCB2aWV3cG9pbnRJbmRleDogbnVtYmVyKTogX19lc3JpLlZpZXdwb2ludCB7XG4gIGlmICh2aWV3LnZpZXdwb2ludEhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHZpZXcudmlld3BvaW50SGlzdG9yeS5sZW5ndGggLSAxXG5cbiAgICBpZiAodmlld3BvaW50SW5kZXggPj0gMCAmJiB2aWV3cG9pbnRJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgIGNvbnN0IHZpZXdwb2ludCA9IHZpZXcudmlld3BvaW50SGlzdG9yeVt2aWV3cG9pbnRJbmRleF1cbiAgICAgIHJldHVybiB2aWV3cG9pbnQuY2xvbmUoKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwVXJsSGFzaFBhcmFtcyB7XG4gIGFjdGl2ZV9kYXRhc291cmNlX2lkPzogc3RyaW5nXG4gIG1hcF9zdGF0ZT86IHN0cmluZ1xuICBsYXllcl92aXNpYmlsaXR5Pzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVcmxIYXNoUGFyYW1zRm9yQWN0aXZlSmltdU1hcFZpZXcgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykge1xuICBpZiAoamltdU1hcFZpZXcgJiYgamltdU1hcFZpZXcuaXNBY3RpdmUgJiYgamltdU1hcFZpZXcudmlldyAmJiAhamltdU1hcFZpZXcudmlldy5kZXN0cm95ZWQpIHtcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldyBhcyBNYXBiYXNlVmlld1xuICAgIGNvbnN0IHVybE1hbmFnZXIgPSBVcmxNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBjb25zdCB2aWV3cG9pbnRKc29uID0gdmlldy52aWV3cG9pbnQgPyB2aWV3LnZpZXdwb2ludC50b0pTT04oKSA6IG51bGxcbiAgICBjb25zdCBleHRlbnRKc29uID0gdmlldy5leHRlbnQgPyB2aWV3LmV4dGVudC50b0pTT04oKSA6IG51bGxcblxuICAgIGxldCBtYXBTdGF0ZVN0ciA9IG51bGxcblxuICAgIGlmICh2aWV3cG9pbnRKc29uICYmIGV4dGVudEpzb24pIHtcbiAgICAgIGNvbnN0IG1hcFN0YXRlID0ge1xuICAgICAgICB2aWV3cG9pbnQ6IHZpZXdwb2ludEpzb24sXG4gICAgICAgIGV4dGVudDogZXh0ZW50SnNvblxuICAgICAgfVxuXG4gICAgICBtYXBTdGF0ZVN0ciA9IEpTT04uc3RyaW5naWZ5KG1hcFN0YXRlKVxuICAgIH1cblxuICAgIHZpZXcubGFzdFZpZXdwb2ludFVwZGF0ZVVybFBhcmFtcyA9IHZpZXcudmlld3BvaW50ID8gdmlldy52aWV3cG9pbnQuY2xvbmUoKSA6IG51bGxcblxuICAgIGNvbnN0IGFjdGl2ZURhdGFzb3VyY2VJZCA9IGppbXVNYXBWaWV3LmRhdGFTb3VyY2VJZCB8fCBudWxsXG5cbiAgICBjb25zdCBtYXBVcmxIYXNoUGFyYW1zOiBNYXBVcmxIYXNoUGFyYW1zID0ge1xuICAgICAgYWN0aXZlX2RhdGFzb3VyY2VfaWQ6IGFjdGl2ZURhdGFzb3VyY2VJZCxcbiAgICAgIC8vIGlmIG1hcF9zdGF0ZSBpcyBudWxsLCBVcmxNYW5hZ2VyIHdpbGwgcmVtb3ZlIGl0IGZyb20gdXJsXG4gICAgICBtYXBfc3RhdGU6IG1hcFN0YXRlU3RyXG4gICAgfVxuXG4gICAgdXJsTWFuYWdlci5zZXRXaWRnZXRVcmxQYXJhbXMoamltdU1hcFZpZXcubWFwV2lkZ2V0SWQsIG1hcFVybEhhc2hQYXJhbXMpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIHR5cGUgRGF0YVJlY29yZFNldCxcbiAgdHlwZSBGZWF0dXJlRGF0YVJlY29yZCxcbiAgdHlwZSBKU0FQSUxheWVyTWl4aW4sXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBEYXRhUmVjb3JkLFxuICBBYnN0cmFjdERhdGFBY3Rpb24sXG4gIERhdGFTb3VyY2VTdGF0dXMsXG4gIE11dGFibGVTdG9yZU1hbmFnZXIsXG4gIERhdGFMZXZlbFxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBjbG9uZUZlYXR1cmUgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xuaW1wb3J0IHsgdHlwZSBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlLCB0eXBlIFBhblRvTGF5ZXJJbnRlcm5hbFZhbHVlIH0gZnJvbSAnLi4vbWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhblRvIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcbiAgLyoqXG4gICAqIFBhblRvIGRhdGEgYWN0aW9uIHN1cHBvcnRzIGJvdGggRGF0YVNvdXJjZSBkYXRhIGxldmVsIGFuZCBSZWNvcmRzIGRhdGEgbGV2ZWwuXG4gICAqIHN1cHBvcnRlZCBjYXNlczpcbiAgICogY2FzZTE6IGRhdGFTZXRzLmxlbmd0aCA9PT0gMSBhbmQgZGF0YUxldmVsIGlzIERBVEFfU09VUkNFXG4gICAqIGNhc2UyOiBkYXRhU2V0cy5sZW5ndGggPT09IDEgYW5kIGRhdGFMZXZlbCBpcyBSRUNPUkRTXG4gICAqIGNhc2UzOiBkYXRhU2V0cy5sZW5ndGggPj0gMiBhbmQgZGF0YUxldmVsIGlzIFJFQ09SRFNcbiAgICovXG4gIGFzeW5jIGlzU3VwcG9ydGVkIChkYXRhU2V0czogRGF0YVJlY29yZFNldFtdLCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHN1cHBvcnRlZERhdGFTZXRzID0gdGhpcy5nZXRTdXBwb3J0ZWREYXRhU2V0cyhkYXRhU2V0cywgZGF0YUxldmVsKVxuXG4gICAgaWYgKHN1cHBvcnRlZERhdGFTZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gY2FzZTEsIGNhc2UyXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkRGF0YVNldHMubGVuZ3RoID49IDIpIHtcbiAgICAgIC8vIGNhc2UzXG4gICAgICByZXR1cm4gZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuUmVjb3Jkc1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdXBwb3J0ZWREYXRhU2V0cyAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBEYXRhUmVjb3JkU2V0W10ge1xuICAgIGNvbnN0IHN1cHBvcnRlZERhdGFTZXRzID0gZGF0YVNldHMuZmlsdGVyKGRhdGFTZXQgPT4ge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRhdGFTZXQuZGF0YVNvdXJjZSBhcyBEYXRhU291cmNlICYgSlNBUElMYXllck1peGluXG5cbiAgICAgIGlmICghZGF0YVNvdXJjZSB8fCBkYXRhU291cmNlLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyByZWNvcmRzIG1heWJlIGNvbWUgZnJvbSBhIHRhYmxlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBkYXRhU291cmNlIGhhcyBnZW9tZXRyeSBvciBub3RcbiAgICAgIGNvbnN0IHN1cHBvcnRTcGF0aWFsSW5mbyA9IGRhdGFTb3VyY2U/LnN1cHBvcnRTcGF0aWFsSW5mbyAmJiBkYXRhU291cmNlPy5zdXBwb3J0U3BhdGlhbEluZm8oKVxuXG4gICAgICBpZiAoIXN1cHBvcnRTcGF0aWFsSW5mbykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHMpIHtcbiAgICAgICAgLy8gcGFuIHRvIGdyYXBoaWNzXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSB0aGlzLmdldFJlY29yZHMoZGF0YVNldCwgZGF0YUxldmVsKVxuICAgICAgICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwXG4gICAgICB9IGVsc2UgaWYgKGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLkRhdGFTb3VyY2UpIHtcbiAgICAgICAgLy8gcGFuIHRvIGxheWVyXG4gICAgICAgIHJldHVybiAhIWRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2VcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIHJldHVybiBzdXBwb3J0ZWREYXRhU2V0c1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZWNvcmRzIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IERhdGFSZWNvcmRbXSB7XG4gICAgbGV0IHJlc3VsdDogRGF0YVJlY29yZFtdID0gW11cblxuICAgIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5EYXRhU291cmNlKSB7XG4gICAgICByZXN1bHQgPSBbXVxuICAgIH0gZWxzZSBpZiAoZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuUmVjb3JkcyAmJiBkYXRhU2V0LnJlY29yZHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdCA9IGRhdGFTZXQucmVjb3Jkcy5maWx0ZXIoKHJlY29yZDogRmVhdHVyZURhdGFSZWNvcmQpID0+ICEhcmVjb3JkLmZlYXR1cmU/Lmdlb21ldHJ5KVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xvbmVkR2VvbWV0cmllcyAoZGF0YVNldDogRGF0YVJlY29yZFNldCwgZGF0YUxldmVsOiBEYXRhTGV2ZWwsIEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYyk6IF9fZXNyaS5HZW9tZXRyeVtdIHtcbiAgICBjb25zdCBjbG9uZWRHZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuZ2V0UmVjb3JkcyhkYXRhU2V0LCBkYXRhTGV2ZWwpXG5cbiAgICByZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGNvbnN0IGZlYXR1cmUgPSBjbG9uZUZlYXR1cmUoKHJlY29yZCBhcyBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSwgR3JhcGhpYylcblxuICAgICAgaWYgKGZlYXR1cmUgJiYgZmVhdHVyZS5nZW9tZXRyeSkge1xuICAgICAgICBjbG9uZWRHZW9tZXRyaWVzLnB1c2goZmVhdHVyZS5nZW9tZXRyeSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGNsb25lZEdlb21ldHJpZXNcbiAgfVxuXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKVxuICAgIGNvbnN0IFtHcmFwaGljXSA9IG1vZHVsZXMgYXMgW3R5cGVvZiBfX2VzcmkuR3JhcGhpY11cbiAgICBjb25zdCBzdXBwb3J0ZWREYXRhU2V0cyA9IHRoaXMuZ2V0U3VwcG9ydGVkRGF0YVNldHMoZGF0YVNldHMsIGRhdGFMZXZlbClcblxuICAgIGlmIChzdXBwb3J0ZWREYXRhU2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIGNhc2UxLCBjYXNlMlxuICAgICAgY29uc3QgZGF0YVNldCA9IGRhdGFTZXRzWzBdXG4gICAgICBsZXQgcGFuVG9BY3Rpb25WYWx1ZTogUGFuVG9HZW9tZXRyaWVzSW50ZXJuYWxWYWx1ZSB8IFBhblRvTGF5ZXJJbnRlcm5hbFZhbHVlID0gbnVsbFxuICAgICAgY29uc3QgZ2VvbWV0cmllcyA9IHRoaXMuZ2V0Q2xvbmVkR2VvbWV0cmllcyhkYXRhU2V0LCBkYXRhTGV2ZWwsIEdyYXBoaWMpXG5cbiAgICAgIGlmIChnZW9tZXRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gY2FzZTJcbiAgICAgICAgcGFuVG9BY3Rpb25WYWx1ZSA9IHtcbiAgICAgICAgICB0eXBlOiAncGFuLXRvLWdlb21ldHJpZXMnLFxuICAgICAgICAgIGdlb21ldHJpZXNcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FzZTFcbiAgICAgICAgcGFuVG9BY3Rpb25WYWx1ZSA9IHtcbiAgICAgICAgICB0eXBlOiAncGFuLXRvLWxheWVyJyxcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IGRhdGFTZXQuZGF0YVNvdXJjZT8uaWQgfHwgbnVsbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlLnZhbHVlJywgcGFuVG9BY3Rpb25WYWx1ZSlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnRlZERhdGFTZXRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAvLyBjYXNlM1xuICAgICAgY29uc3QgYWxsR2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxuXG4gICAgICBzdXBwb3J0ZWREYXRhU2V0cy5mb3JFYWNoKGRhdGFTZXQgPT4ge1xuICAgICAgICBjb25zdCBnZW9tZXRyaWVzID0gdGhpcy5nZXRDbG9uZWRHZW9tZXRyaWVzKGRhdGFTZXQsIGRhdGFMZXZlbCwgR3JhcGhpYylcbiAgICAgICAgYWxsR2VvbWV0cmllcy5wdXNoKC4uLmdlb21ldHJpZXMpXG4gICAgICB9KVxuXG4gICAgICBpZiAoYWxsR2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHBhblRvQWN0aW9uVmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgPSB7XG4gICAgICAgICAgdHlwZTogJ3Bhbi10by1nZW9tZXRyaWVzJyxcbiAgICAgICAgICBnZW9tZXRyaWVzOiBhbGxHZW9tZXRyaWVzXG4gICAgICAgIH1cblxuICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAncGFuVG9BY3Rpb25WYWx1ZS52YWx1ZScsIHBhblRvQWN0aW9uVmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9