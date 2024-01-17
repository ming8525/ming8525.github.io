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
/*!**************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/zoom-to.ts ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomTo)
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



class ZoomTo extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    /**
     * ZoomTo data action supports both DataSource data level and Records data level.
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
                // zoom to graphics
                const records = this.getRecords(dataSet, dataLevel);
                return records.length > 0;
            }
            else if (dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
                // zoom to layer
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
            result = dataSet.records;
        }
        return result;
    }
    getClonedFeatures(dataSet, dataLevel, Graphic) {
        const records = this.getRecords(dataSet, dataLevel);
        const clonedFeatures = records.map(record => (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.cloneFeature)(record.feature, Graphic));
        return clonedFeatures;
    }
    onExecute(dataSets, dataLevel) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']);
            const [Graphic] = modules;
            const supportedDataSets = this.getSupportedDataSets(dataSets, dataLevel);
            const zoomToOption = {
                padding: {
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                }
            };
            if (supportedDataSets.length === 1) {
                // case1, case2
                const dataSet = supportedDataSets[0];
                const clonedFeatures = this.getClonedFeatures(dataSet, dataLevel, Graphic);
                const featureActionValue = {
                    type: 'zoom-to-graphics',
                    features: clonedFeatures,
                    dataSourceId: ((_a = dataSet.dataSource) === null || _a === void 0 ? void 0 : _a.id) || null,
                    zoomToOption
                };
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureActionValue);
            }
            else if (supportedDataSets.length >= 2) {
                // case3
                const arrayFeatures = [];
                supportedDataSets.forEach(dataSet => {
                    const clonedFeatures = this.getClonedFeatures(dataSet, dataLevel, Graphic);
                    arrayFeatures.push(clonedFeatures);
                });
                const featureActionValue = {
                    type: 'zoom-to-array-graphics',
                    arrayFeatures,
                    zoomToOption
                };
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureActionValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy96b29tLXRvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBSWY7QUFJd0k7QUFFbkosU0FBZSxxQkFBcUIsQ0FBRSxXQUE4QyxFQUFFLGtCQUE2RDs7UUFDeEosTUFBTSxnQkFBZ0IsR0FBRyxFQUFFO1FBQzNCLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUM7WUFDeEUsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNwRCxPQUFNO1lBQ1IsQ0FBQztZQUNELGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsQ0FBQyxDQUFDO1FBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEMsT0FBTyxJQUFJO1FBQ2IsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUsa0JBQWtCLENBQUUsV0FBOEMsRUFBRSxzQkFBaUU7O1FBQ3pKLE1BQU0sY0FBYyxHQUFHLEVBQUU7UUFDekIsc0JBQXNCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FB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b0JBQ3hCLFlBQVksRUFBRSxjQUFPLENBQUMsVUFBVSwwQ0FBRSxFQUFFLEtBQUksSUFBSTtvQkFDNUMsWUFBWTtpQkFDYjtnQkFFRCwwREFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLGtCQUFrQixDQUFDO1lBQ3pILENBQUM7aUJBQU0sSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLFFBQVE7Z0JBQ1IsTUFBTSxhQUFhLEdBQXVCLEVBQUU7Z0JBRTVDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDbEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO29CQUMxRSxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDO2dCQUVGLE1BQU0sa0JBQWtCLEdBQXFDO29CQUMzRCxJQUFJLEVBQUUsd0JBQXdCO29CQUM5QixhQUFhO29CQUNiLFlBQVk7aUJBQ2I7Z0JBRUQsMERBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxrQkFBa0IsQ0FBQztZQUN6SCxDQUFDO1lBRUQsT0FBTyxJQUFJOztLQUNaO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9ydW50aW1lL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9kYXRhLWFjdGlvbnMvem9vbS10by50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmltcG9ydCB7XG4gIEFwcE1vZGUsIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSlNBUElMYXllck1peGluLCBnZW9tZXRyeVV0aWxzLFxuICBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlc0pzb24sIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBNZXNzYWdlVHlwZSwgVXJsTWFuYWdlclxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEhpZ2hMaWdodEhhbmRsZSwgdHlwZSBNYXBiYXNlUmVzdG9yZURhdGEsIHR5cGUgTWFwYmFzZVZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcbmltcG9ydCB0eXBlIE1hcEJhc2UgZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXG5pbXBvcnQgeyB0eXBlIElGZWF0dXJlIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIEppbXVNYXBWaWV3LCBMYXllclR5cGVzLCB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3LCB0eXBlIEppbXVTY2VuZUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZT86IHsgW2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0IH0pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBuZXdMYXllclByb21pc2VzID0gW11cbiAgbmV3RmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKG5ld0ZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUud2FybigndGhlIGZlYXR1cmUgbGF5ZXIgaXMgYWxyZWFkeSBjcmVhdGVkJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBuZXdMYXllclByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxuICB9KVxuXG4gIGlmIChuZXdMYXllclByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld0xheWVyUHJvbWlzZXMpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZT86IHsgW2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0IH0pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IFtdXG4gIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMoY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgIG1hcEJhc2VWaWV3Lm1hcC5yZW1vdmUobGF5ZXIpXG4gICAgICB1cGRhdGVQcm9taXNlcy5wdXNoKGFkZEZlYXR1cmVTZXRUb01hcChtYXBCYXNlVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXG4gICAgfVxuICB9KVxuXG4gIGlmICh1cGRhdGVQcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcylcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRGZWF0dXJlU2V0VG9NYXAgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVTZXQ6IF9fZXNyaS5GZWF0dXJlU2V0LCBsYXllcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcbiAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbGV0IEZlYXR1cmVTZXQ6IHR5cGVvZiAgX19lc3JpLkZlYXR1cmVTZXQ7XG4gICAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzO1xuXG4gICAgICAgIGNvbnN0IGxheWVyRnJvbUZlYXR1cmVTZXQgPSBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmxheWVyIGFzIGFueVxuICAgICAgICBjb25zdCBmaWVsZHNJbkZlYXR1cmVsYXllciA9IFtdXG4gICAgICAgIGNvbnN0IGZpZWxkTWFwID0ge31cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IGdldFJlYXNvbmFibGVGaWVsZChsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXSlcbiAgICAgICAgICBmaWVsZE1hcFtsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXS5uYW1lXSA9IGZpZWxkc0l0ZW0ubmFtZVxuICAgICAgICAgIGZpZWxkc0luRmVhdHVyZWxheWVyLnB1c2goZmllbGRzSXRlbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkc0luUG9wdXBUZW1wbGF0ZSA9IFtdXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcykge1xuICAgICAgICAgIGlmIChmaWVsZE1hcFtrZXldKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0ge1xuICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTWFwW2tleV0sXG4gICAgICAgICAgICAgIGxhYmVsOiBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkc0luUG9wdXBUZW1wbGF0ZS5wdXNoKGZpZWxkc0l0ZW0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRmVhdHVyZXMgPSBbXVxuICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVtcEZlYXR1cmUgPSBmZWF0dXJlXG4gICAgICAgICAgaWYgKHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZE1hcFtrZXldXSA9IHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNba2V5XVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzLmV4YmZpZCA9IGluZGV4XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSB7XG4gICAgICAgICAgICAgIGV4YmZpZDogaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc291cmNlRmVhdHVyZXMucHVzaCh0ZW1wRmVhdHVyZSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICAgIGlkOiBsYXllcklkLFxuICAgICAgICAgIHRpdGxlOiBsYXllckZyb21GZWF0dXJlU2V0LnRpdGxlLFxuICAgICAgICAgIHNvdXJjZTogc291cmNlRmVhdHVyZXMsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZHNJbkZlYXR1cmVsYXllcixcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdleGJmaWQnLFxuICAgICAgICAgIHJlbmRlcmVyOiBsYXllckZyb21GZWF0dXJlU2V0LnJlbmRlcmVyLFxuICAgICAgICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0aXRsZTogJ2luZm9ybWF0aW9uJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XG4gICAgICAgICAgICAgIHR5cGU6ICdmaWVsZHMnLFxuICAgICAgICAgICAgICBmaWVsZEluZm9zOiBmaWVsZHNJblBvcHVwVGVtcGxhdGVcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIG1hcEJhc2VWaWV3Lm1hcC5hZGQobGF5ZXIpXG5cbiAgICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCBldmVudCA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFJlYXNvbmFibGVGaWVsZCAoZmllbGQ6IF9fZXNyaS5GaWVsZCk6IF9fZXNyaS5GaWVsZCB7XG4gIC8vIHRoZSBmdW5jdGlvbiBpcyBzdXBwb3J0ZWQgdG8gbm9ybWFsaXplIHRoZSBmaWVsZC5uYW1lXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkLm5hbWVcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWVsZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwoL2csICdfJykucmVwbGFjZSgvXFwpL2csICdfJyksXG4gICAgYWxpYXM6IGZpZWxkLmFsaWFzLFxuICAgIHR5cGU6IGZpZWxkLnR5cGVcbiAgfSBhcyBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgSUZlYXR1cmUgfCBJRmVhdHVyZVtdLCBsYXllcklkPzogc3RyaW5nKTogSGlnaExpZ2h0SGFuZGxlIHtcbiAgLy8gSW4gdGhpcyBmdW5jdGlvbiwgd2UgYXNzdW1lIHRoYXQgZmVhdHVyZXMgY29tZSBmcm9tIHRoZSBzYW1lIGxheWVyXG4gIGxldCBmZWF0dXJlTGF5ZXJJZCA9IGxheWVySWRcbiAgbGV0IGZlYXR1cmVMYXllclZpZXcgPSBudWxsXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcblxuICAvLyBpZiBsYXllcklkIGRvZXNuJ3QgZXhpc3QsIHdlIGdldCBsYXllcklkIGJ5IGZlYXR1cmVcbiAgaWYgKCFmZWF0dXJlTGF5ZXJJZCkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXRbMF0gYXMgX19lc3JpLkdyYXBoaWNcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXQgYXMgX19lc3JpLkdyYXBoaWNcbiAgICB9XG5cbiAgICBpZiAodGVtcEZlYXR1cmUpIHtcbiAgICAgIGZlYXR1cmVMYXllcklkID0gdGVtcEZlYXR1cmUubGF5ZXIgJiYgdGVtcEZlYXR1cmUubGF5ZXIuaWRcbiAgICB9XG4gIH1cblxuICBpZiAoZmVhdHVyZUxheWVySWQpIHtcbiAgICBjb25zdCBsYXllclZpZXdzID0gbWFwQmFzZVZpZXcuYWxsTGF5ZXJWaWV3c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJWaWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpLmxheWVyLmlkID09PSBmZWF0dXJlTGF5ZXJJZCkge1xuICAgICAgICBmZWF0dXJlTGF5ZXJWaWV3ID0gbGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGF5ZXJJZDogZmVhdHVyZUxheWVySWQsXG4gICAgICAgIGhhbmRsZTogZmVhdHVyZUxheWVyVmlldy5oaWdobGlnaHQodGFyZ2V0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ29Ub1RhcmdldEltbWVkaWF0ZWx5ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIF90YXJnZXQ6IF9fZXNyaS5HZW9tZXRyeSk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB2aWV3U1IgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgY29uc3QgZ2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKFtfdGFyZ2V0XSwgdmlld1NSKVxuXG4gIGlmIChnZW9tZXRyaWVzICYmIGdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdlb21ldHJpZXNbMF1cbiAgICB2aWV3LmdvVG8odGFyZ2V0LCB7IGFuaW1hdGU6IGZhbHNlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9WaWV3cG9pbnRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHZpZXdTUiA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICBjb25zdCB2aWV3cG9pbnQgPSBhd2FpdCBwcm9qZWN0Vmlld3BvaW50KF92aWV3cG9pbnQsIHZpZXdTUilcbiAgLy8gdmlldy5nb1RvKHZpZXdwb2ludCwgeyBhbmltYXRlOiBmYWxzZSB9KVxuICB2aWV3LnZpZXdwb2ludCA9IHZpZXdwb2ludFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFZpZXdwb2ludCAodmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50LCB2aWV3U1I6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHNyMSA9IHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeT8uc3BhdGlhbFJlZmVyZW5jZVxuXG4gIGlmIChzcjEgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2Uoc3IxLCB2aWV3U1IpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHNyMiA9IHZpZXdwb2ludC5jYW1lcmE/LnBvc2l0aW9uPy5zcGF0aWFsUmVmZXJlbmNlXG5cbiAgaWYgKHNyMiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjIsIHZpZXdTUikpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZSAoc3IxOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSwgc3IyOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IGJvb2xlYW4ge1xuICBjb25zdCBpc1NhbWUgPSBzcjEud2tpZCA9PT0gc3IyLndraWQgfHwgc3IxLmVxdWFscyhzcjIpXG4gIC8vICBJbiBKUyBBUEkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cbiAgY29uc3QgaXNMaWtlID0gKHNyMS5pc1dlYk1lcmNhdG9yIHx8IHNyMS5pc1dHUzg0KSAmJiAoc3IyLmlzV2ViTWVyY2F0b3IgfHwgc3IyLmlzV0dTODQpXG4gIHJldHVybiAhaXNTYW1lICYmICFpc0xpa2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RWaWV3cG9pbnQgKF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5WaWV3cG9pbnQ+IHtcbiAgY29uc3Qgdmlld3BvaW50ID0gX3ZpZXdwb2ludC5jbG9uZSgpXG4gIGNvbnN0IHRhcmdldEdlb21ldHJ5ID0gdmlld3BvaW50LnRhcmdldEdlb21ldHJ5XG4gIGNvbnN0IGNhbWVyYVBvc2l0b24gPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvblxuXG4gIGNvbnN0IHRvUHJvamVjdEdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cbiAgbGV0IGlzUHJvamVjdFRhcmdldEdlb21ldHJ5OiBib29sZWFuID0gZmFsc2VcbiAgbGV0IGlzUHJvamVjdENhbWVyYVBvc2l0aW9uOiBib29sZWFuID0gZmFsc2VcblxuICBpZiAodGFyZ2V0R2VvbWV0cnkgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UodGFyZ2V0R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xuICAgIGlzUHJvamVjdFRhcmdldEdlb21ldHJ5ID0gdHJ1ZVxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaCh0YXJnZXRHZW9tZXRyeSlcbiAgfVxuXG4gIGlmIChjYW1lcmFQb3NpdG9uICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKGNhbWVyYVBvc2l0b24uc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xuICAgIGlzUHJvamVjdENhbWVyYVBvc2l0aW9uID0gdHJ1ZVxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaChjYW1lcmFQb3NpdG9uKVxuICB9XG5cbiAgaWYgKHRvUHJvamVjdEdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHByb2plY3RlZEdlb21ldHJpZXMgPSBhd2FpdCBwcm9qZWN0R2VvbWV0cmllcyh0b1Byb2plY3RHZW9tZXRyaWVzLCB2aWV3U1IpXG5cbiAgICBpZiAoaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkpIHtcbiAgICAgIHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeSA9IHByb2plY3RlZEdlb21ldHJpZXNbMF1cbiAgICB9XG5cbiAgICBpZiAoaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb24pIHtcbiAgICAgIHZpZXdwb2ludC5jYW1lcmEucG9zaXRpb24gPSBwcm9qZWN0ZWRHZW9tZXRyaWVzW3Byb2plY3RlZEdlb21ldHJpZXMubGVuZ3RoIC0gMV0gYXMgX19lc3JpLlBvaW50XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZpZXdwb2ludFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFwUGFudG8gKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdlb21ldHJ5IHwgX19lc3JpLkdlb21ldHJ5W10gfFxuX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgX19lc3JpLkV4dGVudCk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHBhblRvVGFyZ2V0ID0gdGFyZ2V0IGFzIGFueVxuICBjb25zdCB0ZW1wQmFzZU1hcFZpZXcgPSBtYXBCYXNlVmlldyBhcyBhbnlcbiAgaWYgKHBhblRvVGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBpZiAocGFuVG9UYXJnZXQubGVuZ3RoID09PSAwKSB7IGF3YWl0IFByb21pc2UucmVzb2x2ZSgpOyByZXR1cm4gfVxuXG4gICAgaWYgKHBhblRvVGFyZ2V0WzBdLmdlb21ldHJ5KSB7XG4gICAgICBjb25zdCBnZW9tZXRyeUFycjogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5Ub1RhcmdldC5sZW5ndGg7IGkrKykge1xuICAgICAgICBnZW9tZXRyeUFyci5wdXNoKHBhblRvVGFyZ2V0W2ldLmdlb21ldHJ5KVxuICAgICAgfVxuXG4gICAgICBhd2FpdCBnZXRHZW9tZXRyaWVzRXh0ZW50KGdlb21ldHJ5QXJyKS50aGVuKChleHRlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBleHRlbnQuY2VudGVyKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldEdlb21ldHJpZXNFeHRlbnQocGFuVG9UYXJnZXQpLnRoZW4oKGV4dGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGV4dGVudC5jZW50ZXIpXG4gICAgICB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocGFuVG9UYXJnZXQuZ2VvbWV0cnkpIHtcbiAgICAgIGNvbnN0IGdldG1ldHJ5ID0gcGFuVG9UYXJnZXQuZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XG4gICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGdldENlbnRlclBvaW50KGdldG1ldHJ5KSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBnZXRDZW50ZXJQb2ludChwYW5Ub1RhcmdldCkpXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdvVG8gKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyBkZWxheSBiZWZvcmUgdXBkYXRpbmcgb2YgdmlldyB0dXJucyB0cnVlLCA0MDBtcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvbi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vLy8gdGhlcmUgaXMgYSBjb25mbGljdCBmb3IgcGFuaW5nIHdoZW4gdGhlIGxheWVyIHZpZXcgaXMgdXBkYXRpbmcsIHN1Y2ggYXMgJ3BhbiB0bycgYW5kICdmaWx0ZXInLlxuICAgICAgLy8vLyB0aGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLCBpdCBjYW4gcmVkdWNlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIHByb2JsZW0gcmF0aGVyIHRoYW4gc29sdmUgaXQgY29tcGxldGVseS5cbiAgICAgIC8vaWYgKHZpZXcudXBkYXRpbmcpIHtcbiAgICAgIC8vICBjb25zdCBoYW5kbGVyID0gdmlldy53YXRjaCgndXBkYXRpbmcnLCB2YWx1ZSA9PiB7XG4gICAgICAvLyAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAvLyAgICAgIHZpZXcuZ29Ubyh0YXJnZXQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiByZWplY3QoKSlcbiAgICAgIC8vICAgICAgaGFuZGxlci5yZW1vdmUoKVxuICAgICAgLy8gICAgfVxuICAgICAgLy8gIH0pXG4gICAgICAvL30gZWxzZSB7XG4gICAgICAvLyAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxuICAgICAgLy99XG4gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHsgcmVzb2x2ZSgpIH0pLmNhdGNoKCgpID0+IHsgcmVqZWN0KCkgfSlcbiAgICB9LCA0MDApXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEdlb21ldHJpZXNFeHRlbnQgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdKTogUHJvbWlzZTxfX2VzcmkuRXh0ZW50PiB7XG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXG4gIF0pLnRoZW4oYXN5bmMgbW9kdWxlcyA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgbGV0IEV4dGVudDogdHlwZW9mIF9fZXNyaS5FeHRlbnQ7XG4gICAgW0V4dGVudF0gPSBtb2R1bGVzXG5cbiAgICBpZiAoIWdlb21ldHJpZXMgfHwgIWdlb21ldHJpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfVxuXG4gICAgbGV0IGZ1bGxFeHRlbnQ6IF9fZXNyaS5FeHRlbnQgPSBudWxsXG4gICAgbGV0IGluZGV4XG4gICAgY29uc3QgbnVtR2VvbWV0cmllcyA9IGdlb21ldHJpZXMubGVuZ3RoXG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HZW9tZXRyaWVzOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbaW5kZXhdXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcblxuICAgICAgaWYgKCFleHRlbnQgJiYgZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gZ2VvbWV0cnkgYXMgYW55XG5cbiAgICAgICAgaWYgKHBvaW50R2VvbWV0cnkueCAmJiBwb2ludEdlb21ldHJ5LnkpIHtcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KHtcbiAgICAgICAgICAgIHhtYXg6IHBvaW50R2VvbWV0cnkueCxcbiAgICAgICAgICAgIHhtaW46IHBvaW50R2VvbWV0cnkueCxcbiAgICAgICAgICAgIHltYXg6IHBvaW50R2VvbWV0cnkueSxcbiAgICAgICAgICAgIHltaW46IHBvaW50R2VvbWV0cnkueSxcbiAgICAgICAgICAgIHptYXg6IHBvaW50R2VvbWV0cnkueixcbiAgICAgICAgICAgIHptaW46IHBvaW50R2VvbWV0cnkueixcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvaW50R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFleHRlbnQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGZ1bGxFeHRlbnQpIHtcbiAgICAgICAgZnVsbEV4dGVudCA9IGZ1bGxFeHRlbnQudW5pb24oZXh0ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsbEV4dGVudCA9IGV4dGVudFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmdWxsRXh0ZW50LndpZHRoIDwgMCAmJiBmdWxsRXh0ZW50LmhlaWdodCA8IDApIHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZ1bGxFeHRlbnQpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWx0ZXJGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoIWFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKVxuXG4gIGlmICghZGF0YVNvdXJjZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXG5cbiAgdHJ5IHtcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgamltdUxheWVyVmlldyA9IG51bGxcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXG4gIH1cblxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyICYmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSkge1xuICAgIChqaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5zZXREZWZpbml0aW9uRXhwcmVzc2lvbihxdWVyeVNRTClcbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUZlYXR1cmVzIChsYXllck9iamVjdCwgcXVlcnlTUUwpIHtcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcbiAgICBsZXQgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XG4gICAgW1F1ZXJ5XSA9IG1vZHVsZXNcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXG4gICAgcXVlcnkud2hlcmUgPSBxdWVyeVNRTFxuICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFsnKiddXG4gICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgcmV0dXJuIGxheWVyT2JqZWN0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oZmVhdHVyZVNldCA9PiB7XG4gICAgICByZXR1cm4gZmVhdHVyZVNldFxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZsYXNoT25GZWF0dXJlTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3KSB7XG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcbiAgICBsZXQgZmVhdHVyZUxheWVyVmlldzogX19lc3JpLkZlYXR1cmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xuICAgICAgcXVlcnlGZWF0dXJlcyhmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcbiAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLmdlb21ldHJ5VHlwZSlcbiAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XG4gICAgICBsZXQgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlc1xuXG4gICAgICBsZXQgdGVtcEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xuICAgICAgICB1cmw6IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKCh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykubGF5ZXIpXG4gICAgICB9KVxuICAgICAgdGVtcEZlYXR1cmVMYXllci5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHF1ZXJ5RmVhdHVyZXModGVtcEZlYXR1cmVMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XG4gICAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uZ2VvbWV0cnkudHlwZSlcbiAgICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5sZXQgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gbnVsbFxuZnVuY3Rpb24gZmxhc2hPblNjZW5lTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVTY2VuZUxheWVyVmlldykge1xuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XG4gICAgbGV0IHNjZW5lTGF5ZXJWaWV3OiBfX2VzcmkuU2NlbmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcXVlcnlGZWF0dXJlcyhzY2VuZUxheWVyVmlldz8ubGF5ZXI/LmFzc29jaWF0ZWRMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XG4gICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gc2NlbmVMYXllclZpZXcubGF5ZXIub2JqZWN0SWRGaWVsZFxuICAgICAgICBjb25zdCBvYmplY3RJZHMgPSBmZWF0dXJlU2V0LmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tvYmplY3RJZEZpZWxkXSlcblxuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgY29uc3QgbWF4Rmxhc2hDb3VudCA9IDZcbiAgICAgICAgbGV0IGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9ucyA9IGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9uc1xuXG4gICAgICAgIGNvbnN0IGZsYXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpIDwgbWF4Rmxhc2hDb3VudCkge1xuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0Q29sb3IpIHtcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBudWxsXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogWzAsIDAsIDAsIDBdIH1cbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBoaWdobGlnaHRDb2xvciB9XG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0gb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zXG4gICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbGFzaEZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghbGF5ZXJEYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UobGF5ZXJEYXRhU291cmNlSWQpXG5cbiAgaWYgKCFkYXRhU291cmNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgamltdUxheWVyVmlldzogSmltdUxheWVyVmlldyA9IG51bGxcblxuICB0cnkge1xuICAgIGppbXVMYXllclZpZXcgPSBhd2FpdCBqaW11TWFwVmlldy53aGVuSmltdUxheWVyVmlld0xvYWRlZEJ5RGF0YVNvdXJjZShkYXRhU291cmNlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxuICAgIGNvbnNvbGUuZXJyb3IoJ2NhblxcJ3QgZ2V0IGppbXVMYXllclZpZXcgYnkgZGF0YVNvdXJjZScsIGRhdGFTb3VyY2UsIGVycilcbiAgfVxuXG4gIGlmIChqaW11TGF5ZXJWaWV3ICYmIGppbXVMYXllclZpZXcubGF5ZXIpIHtcbiAgICBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllcikge1xuICAgICAgZmxhc2hPbkZlYXR1cmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcpXG4gICAgfSBlbHNlIGlmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikge1xuICAgICAgZmxhc2hPblNjZW5lTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCBqaW11TGF5ZXJWaWV3IGFzIEppbXVTY2VuZUxheWVyVmlldylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRGbGFzaCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sIHN5bWJvbCkge1xuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9HcmFwaGljJ1xuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGxldCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWM7XG4gICAgW0dyYXBoaWNdID0gbW9kdWxlc1xuXG4gICAgY29uc3QgZmxhc2hGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgbWF4Rmxhc2hDb3VudDogbnVtYmVyKSB7XG4gICAgICBjb25zdCBncmFwaGljcyA9IFtdXG4gICAgICBsZXQgZmxhc2hDb3VudCA9IDBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVtcEdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgZ2VvbWV0cnk6IGZlYXR1cmVzW2ldLmdlb21ldHJ5LFxuICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGZlYXR1cmVzW2ldLmF0dHJpYnV0ZXNcbiAgICAgICAgfSlcbiAgICAgICAgZ3JhcGhpY3MucHVzaCh0ZW1wR3JhcGhpYylcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2luZ2xlRmxhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLmFkZE1hbnkoZ3JhcGhpY3MpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLnJlbW92ZU1hbnkoZ3JhcGhpY3MpXG4gICAgICAgICAgZmxhc2hDb3VudCA9IGZsYXNoQ291bnQgKyAxXG4gICAgICAgICAgaWYgKGZsYXNoQ291bnQgPCBtYXhGbGFzaENvdW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc2luZ2xlRmxhc2goKVxuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKVxuICAgICAgfVxuXG4gICAgICBzaW5nbGVGbGFzaCgpXG4gICAgfVxuXG4gICAgZmxhc2hGZWF0dXJlcyhmZWF0dXJlcywgMylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Rmxhc2hTeW1ib2wgKGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XG4gIGlmIChbJ3BvaW50JywgJ211bHRpcG9pbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcbiAgICAgIHN0eWxlOiAnY2lyY2xlJyxcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXG4gICAgICBzaXplOiAnMTZweCcsXG4gICAgICBvdXRsaW5lOiB7XG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXG4gICAgICAgIHdpZHRoOiAzXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFsncG9seWxpbmUnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxuICAgICAgd2lkdGg6IDMsXG4gICAgICBzdHlsZTogJ3NvbGlkJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChbJ3BvbHlnb24nLCAnZXh0ZW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUZpbGxTeW1ib2woKVxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC41XSxcbiAgICAgIHN0eWxlOiAnc29saWQnLFxuICAgICAgb3V0bGluZTogeyAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUxpbmVTeW1ib2woKVxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxuICAgICAgICB3aWR0aDogM1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChbJ21lc2gnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdtZXNoLTNkJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBNZXNoU3ltYm9sM0QoKVxuICAgICAgc3ltYm9sTGF5ZXJzOiBbe1xuICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxuICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdIH1cbiAgICAgIH1dXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xuICAvLyBwb2ludCB8IG11bHRpcG9pbnQgfCBwb2x5bGluZSB8IHBvbHlnb24gfCBleHRlbnQgfCBtZXNoXG4gIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgIGNhc2UgJ3BvaW50JzpcbiAgICAgIHJldHVybiBnZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcbiAgICBjYXNlICdleHRlbnQnOlxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkXG4gICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUpLmV4dGVudC5jZW50ZXJcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcbiAgICAvLyB0b2RvXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRmVhdHVyZSAoZmVhdHVyZTogSUZlYXR1cmUgfCBfX2VzcmkuR3JhcGhpYywgR3JhcGhpYzogdHlwZW9mIF9fZXNyaS5HcmFwaGljKTogX19lc3JpLkdyYXBoaWMge1xuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXG4gIGlmICgoZmVhdHVyZSBhcyBhbnkpLmNsb25lKSB7XG4gICAgdGVtcEZlYXR1cmUgPSAoZmVhdHVyZSBhcyBhbnkpLmNsb25lKClcbiAgfSBlbHNlIHtcbiAgICB0ZW1wRmVhdHVyZSA9IEdyYXBoaWMuZnJvbUpTT04oT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZSkpXG4gICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUuYXR0cmlidXRlcylcbiAgfVxuICByZXR1cm4gdGVtcEZlYXR1cmVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RHZW9tZXRyaWVzIChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSwgc3BhdGlhbFJlZmVyZW5jZTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5HZW9tZXRyeVtdPiB7XG4gIGlmICghZ2VvbWV0cmllcyB8fCBnZW9tZXRyaWVzLmxlbmd0aCA9PT0gMCB8fCAhZ2VvbWV0cmllc1swXSB8fFxuICAgIHNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLndraWQgfHwgKHNwYXRpYWxSZWZlcmVuY2UuZXF1YWxzKGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZSkpKSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvciAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCkge1xuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IGdlb21ldHJ5VXRpbHMucHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShnZW9tZXRyaWVzLCBzcGF0aWFsUmVmZXJlbmNlKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzWm9vbVRvRmVhdHVyZXMgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGxheWVyOiBhbnksIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XG4gIGlmIChtYXBCYXNlVmlldyAmJiBtYXBCYXNlVmlldy50eXBlID09PSAnM2QnICYmIGxheWVyICYmIGxheWVyLnF1ZXJ5RmVhdHVyZXMgJiYgZmVhdHVyZXMpIHtcbiAgICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgY29uc3QgW1F1ZXJ5XSA9IG1vZHVsZXNcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICAgICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cbiAgICAgIHF1ZXJ5Lm9iamVjdElkcyA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tsYXllci5vYmplY3RJZEZpZWxkXSlcbiAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZmVhdHVyZXMgJiYgcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQuZmVhdHVyZXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcbiAgICAgICAgfVxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxuICAgICAgfSlcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNMaXZlIChhcHBNb2RlOiBBcHBNb2RlKTogYm9vbGVhbiB7XG4gIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xuICAgIGlmIChhcHBNb2RlID09PSBBcHBNb2RlLkRlc2lnbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyc0Zyb21EYXRhU291cmNlSWRzIChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IGxheWVyUHJvbWlzZXMgPSBbXVxuICBkYXRhU291cmNlSWRzLmZvckVhY2goZGF0YVNvdXJjZUlkID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW5cbiAgICBsZXQgbGF5ZXJQcm9taXNlXG4gICAgaWYgKGRhdGFTb3VyY2U/LmxheWVyKSB7XG4gICAgICBsYXllclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGF0YVNvdXJjZS5sYXllcilcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UpIHtcbiAgICAgIGxheWVyUHJvbWlzZSA9IGRhdGFTb3VyY2UuY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKVxuICAgIH1cbiAgICBsYXllclByb21pc2VzLnB1c2gobGF5ZXJQcm9taXNlKVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5hbGwobGF5ZXJQcm9taXNlcylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEppbXVNYXBWaWV3SWQgKHdpZGdldElkOiBzdHJpbmcsIGRhdGFTb3VyY2VJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gSWYgZGF0YVNvdXJjZUlkIGlzIG51bGwsIG1ha2Ugc3VyZSBpdCBjb252ZXJ0cyB0byBlbXB0eSBzdHJpbmcuXG4gIGNvbnN0IGRzSWQgPSBkYXRhU291cmNlSWQgfHwgJydcbiAgcmV0dXJuIGAke3dpZGdldElkfS0ke2RzSWR9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwQmFzZVJlc3RvcmVEYXRhIChtYXBJbnN0YW5jZTogTWFwQmFzZSk6IE1hcGJhc2VSZXN0b3JlRGF0YSB7XG4gIGNvbnN0IHtcbiAgICBtYXBDb250YWluZXIsXG4gICAgc3RhdGUsXG4gICAgR2VvbWV0cnksXG4gICAgSW5pdGlhbFZpZXdQcm9wZXJ0aWVzLFxuICAgIFRpbGVMYXllcixcbiAgICBCYXNlbWFwLFxuICAgIE1hcFZpZXcsXG4gICAgU2NlbmVWaWV3LFxuICAgIEV4dGVudCxcbiAgICBWaWV3cG9pbnQsXG4gICAgUG9ydGFsSXRlbSxcbiAgICBQb3J0YWwsXG4gICAgV2ViTWFwLFxuICAgIFdlYlNjZW5lLFxuICAgIENvbG9yLFxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXG4gICAgbWFwQ3JlYXRpbmdJbmZvLFxuICAgIHZpZXcsXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXG4gICAgbWFwRHMsXG4gICAgZHNNYW5hZ2VyLFxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxuICB9ID0gbWFwSW5zdGFuY2VcblxuICByZXR1cm4ge1xuICAgIG1hcENvbnRhaW5lcixcbiAgICBzdGF0ZSxcblxuICAgIEdlb21ldHJ5LFxuICAgIEluaXRpYWxWaWV3UHJvcGVydGllcyxcbiAgICBUaWxlTGF5ZXIsXG4gICAgQmFzZW1hcCxcbiAgICBNYXBWaWV3LFxuICAgIFNjZW5lVmlldyxcbiAgICBFeHRlbnQsXG4gICAgVmlld3BvaW50LFxuICAgIFBvcnRhbEl0ZW0sXG4gICAgUG9ydGFsLFxuICAgIFdlYk1hcCxcbiAgICBXZWJTY2VuZSxcbiAgICBDb2xvcixcblxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXG4gICAgbWFwQ3JlYXRpbmdJbmZvLFxuICAgIHZpZXcsXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXG4gICAgbWFwRHMsXG5cbiAgICBkc01hbmFnZXIsXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVNYXBCYXNlIChtYXBJbnN0YW5jZTogTWFwQmFzZSwgcmVzdG9yZURhdGE6IE1hcGJhc2VSZXN0b3JlRGF0YSk6IHZvaWQge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdG9yZURhdGEpXG5cbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIG1hcEluc3RhbmNlW2tleV0gPSByZXN0b3JlRGF0YVtrZXldXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHdvV2lkZ2V0c011dHVhbGx5RXh0ZW50Q2hhbmdlICh3aWRnZXRJZDE6IHN0cmluZywgd2lkZ2V0SWQyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHdpZGdldElkMSAmJiB3aWRnZXRJZDIpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcblxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWydwYW5UbycsICd6b29tVG9GZWF0dXJlJ11cbiAgICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlXG5cbiAgICAgIGlmIChpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMSwgd2lkZ2V0SWQyLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSAmJlxuICAgICAgICAgaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlcih3aWRnZXRJZDIsIHdpZGdldElkMSwgbWVzc2FnZUNvbmZpZ3MsIG1lc3NhZ2VUeXBlLCBhY3Rpb25OYW1lcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlciAoc2VuZE1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBhY3Rpb25XaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcbiAgaWYgKHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgYWN0aW9uV2lkZ2V0SWQpIHtcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcblxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWyd6b29tVG9GZWF0dXJlJ11cblxuICAgICAgcmV0dXJuIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIoc2VuZE1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uV2lkZ2V0SWQsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIgKFxuICBzZW5kTWVzc2FnZVdpZGdldElkOiBzdHJpbmcsXG4gIGFjdGlvbldpZGdldElkOiBzdHJpbmcsXG4gIG1lc3NhZ2VDb25maWdzOiBJbW11dGFibGVPYmplY3Q8TWVzc2FnZXNKc29uPixcbiAgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLFxuICBhY3Rpb25OYW1lczogc3RyaW5nW11cbik6IGJvb2xlYW4ge1xuICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcbiAgICBjb25zdCBtZXNzYWdlSnNvbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhtZXNzYWdlQ29uZmlncylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZUpzb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbWVzc2FnZUpzb24gPSBtZXNzYWdlSnNvbkFycmF5W2ldXG5cbiAgICAgIGlmIChtZXNzYWdlSnNvbi53aWRnZXRJZCA9PT0gc2VuZE1lc3NhZ2VXaWRnZXRJZCAmJiBtZXNzYWdlSnNvbi5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IG1lc3NhZ2VKc29uLmFjdGlvbnNcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFjdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2pdXG5cbiAgICAgICAgICBpZiAoYWN0aW9uLndpZGdldElkID09PSBhY3Rpb25XaWRnZXRJZCkge1xuICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWVzLmluY2x1ZGVzKGFjdGlvbi5hY3Rpb25OYW1lKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lbGlrZVZpZXdwb2ludHMgKHZpZXc6IE1hcGJhc2VWaWV3LCB2cDE6IF9fZXNyaS5WaWV3cG9pbnQsIHZwMjogX19lc3JpLlZpZXdwb2ludCk6IGJvb2xlYW4ge1xuICBpZiAoIXZwMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKCF2cDIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gY2hlY2sgYm90aCB0YXJnZXRHZW9tZXRyeSBhbmQgY2FtZXJhLlxuICBpZiAodnAxLnRhcmdldEdlb21ldHJ5ICYmIHZwMS50YXJnZXRHZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcgJiYgdnAyLnRhcmdldEdlb21ldHJ5ICYmIHZwMi50YXJnZXRHZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcpIHtcbiAgICBjb25zdCBzY3JlZW5Qb2ludDEgPSB2aWV3LnRvU2NyZWVuKHZwMS50YXJnZXRHZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnQpXG4gICAgY29uc3Qgc2NyZWVuUG9pbnQyID0gdmlldy50b1NjcmVlbih2cDIudGFyZ2V0R2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KVxuICAgIGNvbnN0IGRlbHRhWCA9IHNjcmVlblBvaW50MS54IC0gc2NyZWVuUG9pbnQyLnhcbiAgICBjb25zdCBkZWx0YVkgPSBzY3JlZW5Qb2ludDEueSAtIHNjcmVlblBvaW50Mi55XG4gICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpXG5cbiAgICBpZiAoZGlzdCA+PSA1KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb25zdCBjYW1lcmExID0gdnAxLmNhbWVyYVxuICBjb25zdCBjYW1lcmEyID0gdnAyLmNhbWVyYVxuXG4gIGlmIChjYW1lcmExICYmIGNhbWVyYTIpIHtcbiAgICAvLyBjb21wYXJlIHZpZXdwb2ludCBmb3IgU2NlbmVWaWV3XG4gICAgY29uc3QgaGVhZGluZzEgPSBwYXJzZUZsb2F0KGNhbWVyYTEuaGVhZGluZy50b0ZpeGVkKDIpKVxuICAgIGNvbnN0IGhlYWRpbmcyID0gcGFyc2VGbG9hdChjYW1lcmEyLmhlYWRpbmcudG9GaXhlZCgyKSlcblxuICAgIGlmIChoZWFkaW5nMSAhPT0gaGVhZGluZzIpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IHRpbHQxID0gcGFyc2VGbG9hdChjYW1lcmExLnRpbHQudG9GaXhlZCgyKSlcbiAgICBjb25zdCB0aWx0MiA9IHBhcnNlRmxvYXQoY2FtZXJhMi50aWx0LnRvRml4ZWQoMikpXG5cbiAgICBpZiAodGlsdDEgIT09IHRpbHQyKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbkRpc3QgPSBjYW1lcmExLnBvc2l0aW9uLmRpc3RhbmNlKGNhbWVyYTIucG9zaXRpb24pXG5cbiAgICBpZiAocG9zaXRpb25EaXN0ID49IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBjb21wYXJlIHZpZXdwb2ludCBmb3IgTWFwVmlld1xuICAgIGNvbnN0IHJvdGF0aW9uMSA9IHBhcnNlRmxvYXQodnAxLnJvdGF0aW9uLnRvRml4ZWQoMikpXG4gICAgY29uc3Qgcm90YXRpb24yID0gcGFyc2VGbG9hdCh2cDIucm90YXRpb24udG9GaXhlZCgyKSlcblxuICAgIGlmIChyb3RhdGlvbjEgIT09IHJvdGF0aW9uMikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGFTY2FsZSA9IHZwMS5zY2FsZSAtIHZwMi5zY2FsZVxuXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhU2NhbGUpID49IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9pbnRJbnN0YW5jZUZyb21IaXN0b3J5ICh2aWV3OiBNYXBiYXNlVmlldywgdmlld3BvaW50SW5kZXg6IG51bWJlcik6IF9fZXNyaS5WaWV3cG9pbnQge1xuICBpZiAodmlldy52aWV3cG9pbnRIaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2aWV3LnZpZXdwb2ludEhpc3RvcnkubGVuZ3RoIC0gMVxuXG4gICAgaWYgKHZpZXdwb2ludEluZGV4ID49IDAgJiYgdmlld3BvaW50SW5kZXggPD0gbGFzdEluZGV4KSB7XG4gICAgICBjb25zdCB2aWV3cG9pbnQgPSB2aWV3LnZpZXdwb2ludEhpc3Rvcnlbdmlld3BvaW50SW5kZXhdXG4gICAgICByZXR1cm4gdmlld3BvaW50LmNsb25lKClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcFVybEhhc2hQYXJhbXMge1xuICBhY3RpdmVfZGF0YXNvdXJjZV9pZD86IHN0cmluZ1xuICBtYXBfc3RhdGU/OiBzdHJpbmdcbiAgbGF5ZXJfdmlzaWJpbGl0eT86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXJsSGFzaFBhcmFtc0ZvckFjdGl2ZUppbXVNYXBWaWV3IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcbiAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LmlzQWN0aXZlICYmIGppbXVNYXBWaWV3LnZpZXcgJiYgIWppbXVNYXBWaWV3LnZpZXcuZGVzdHJveWVkKSB7XG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXcgYXMgTWFwYmFzZVZpZXdcbiAgICBjb25zdCB1cmxNYW5hZ2VyID0gVXJsTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3Qgdmlld3BvaW50SnNvbiA9IHZpZXcudmlld3BvaW50ID8gdmlldy52aWV3cG9pbnQudG9KU09OKCkgOiBudWxsXG4gICAgY29uc3QgZXh0ZW50SnNvbiA9IHZpZXcuZXh0ZW50ID8gdmlldy5leHRlbnQudG9KU09OKCkgOiBudWxsXG5cbiAgICBsZXQgbWFwU3RhdGVTdHIgPSBudWxsXG5cbiAgICBpZiAodmlld3BvaW50SnNvbiAmJiBleHRlbnRKc29uKSB7XG4gICAgICBjb25zdCBtYXBTdGF0ZSA9IHtcbiAgICAgICAgdmlld3BvaW50OiB2aWV3cG9pbnRKc29uLFxuICAgICAgICBleHRlbnQ6IGV4dGVudEpzb25cbiAgICAgIH1cblxuICAgICAgbWFwU3RhdGVTdHIgPSBKU09OLnN0cmluZ2lmeShtYXBTdGF0ZSlcbiAgICB9XG5cbiAgICB2aWV3Lmxhc3RWaWV3cG9pbnRVcGRhdGVVcmxQYXJhbXMgPSB2aWV3LnZpZXdwb2ludCA/IHZpZXcudmlld3BvaW50LmNsb25lKCkgOiBudWxsXG5cbiAgICBjb25zdCBhY3RpdmVEYXRhc291cmNlSWQgPSBqaW11TWFwVmlldy5kYXRhU291cmNlSWQgfHwgbnVsbFxuXG4gICAgY29uc3QgbWFwVXJsSGFzaFBhcmFtczogTWFwVXJsSGFzaFBhcmFtcyA9IHtcbiAgICAgIGFjdGl2ZV9kYXRhc291cmNlX2lkOiBhY3RpdmVEYXRhc291cmNlSWQsXG4gICAgICAvLyBpZiBtYXBfc3RhdGUgaXMgbnVsbCwgVXJsTWFuYWdlciB3aWxsIHJlbW92ZSBpdCBmcm9tIHVybFxuICAgICAgbWFwX3N0YXRlOiBtYXBTdGF0ZVN0clxuICAgIH1cblxuICAgIHVybE1hbmFnZXIuc2V0V2lkZ2V0VXJsUGFyYW1zKGppbXVNYXBWaWV3Lm1hcFdpZGdldElkLCBtYXBVcmxIYXNoUGFyYW1zKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICB0eXBlIERhdGFSZWNvcmRTZXQsXG4gIHR5cGUgRmVhdHVyZURhdGFSZWNvcmQsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBKU0FQSUxheWVyTWl4aW4sXG4gIHR5cGUgRGF0YVJlY29yZCxcbiAgQWJzdHJhY3REYXRhQWN0aW9uLFxuICBEYXRhU291cmNlU3RhdHVzLFxuICBNdXRhYmxlU3RvcmVNYW5hZ2VyLFxuICBEYXRhTGV2ZWxcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgdHlwZSBab29tVG9PcHRpb25zIH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBjbG9uZUZlYXR1cmUgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xuaW1wb3J0IHsgdHlwZSBab29tVG9HcmFwaGljc0ludGVybmFsVmFsdWUsIHR5cGUgWm9vbVRvQXJyYXlHcmFwaGljc0ludGVybmFsVmFsdWUgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbVRvIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcbiAgLyoqXG4gICAqIFpvb21UbyBkYXRhIGFjdGlvbiBzdXBwb3J0cyBib3RoIERhdGFTb3VyY2UgZGF0YSBsZXZlbCBhbmQgUmVjb3JkcyBkYXRhIGxldmVsLlxuICAgKiBzdXBwb3J0ZWQgY2FzZXM6XG4gICAqIGNhc2UxOiBkYXRhU2V0cy5sZW5ndGggPT09IDEgYW5kIGRhdGFMZXZlbCBpcyBEQVRBX1NPVVJDRVxuICAgKiBjYXNlMjogZGF0YVNldHMubGVuZ3RoID09PSAxIGFuZCBkYXRhTGV2ZWwgaXMgUkVDT1JEU1xuICAgKiBjYXNlMzogZGF0YVNldHMubGVuZ3RoID49IDIgYW5kIGRhdGFMZXZlbCBpcyBSRUNPUkRTXG4gICAqL1xuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzdXBwb3J0ZWREYXRhU2V0cyA9IHRoaXMuZ2V0U3VwcG9ydGVkRGF0YVNldHMoZGF0YVNldHMsIGRhdGFMZXZlbClcblxuICAgIGlmIChzdXBwb3J0ZWREYXRhU2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIGNhc2UxLCBjYXNlMlxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnRlZERhdGFTZXRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAvLyBjYXNlM1xuICAgICAgcmV0dXJuIGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHNcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VwcG9ydGVkRGF0YVNldHMgKGRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10sIGRhdGFMZXZlbDogRGF0YUxldmVsKTogRGF0YVJlY29yZFNldFtdIHtcbiAgICBjb25zdCBzdXBwb3J0ZWREYXRhU2V0cyA9IGRhdGFTZXRzLmZpbHRlcihkYXRhU2V0ID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhU2V0LmRhdGFTb3VyY2UgYXMgRGF0YVNvdXJjZSAmIEpTQVBJTGF5ZXJNaXhpblxuXG4gICAgICBpZiAoIWRhdGFTb3VyY2UgfHwgZGF0YVNvdXJjZS5nZXRTdGF0dXMoKSA9PT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gcmVjb3JkcyBtYXliZSBjb21lIGZyb20gYSB0YWJsZSwgc28gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgZGF0YVNvdXJjZSBoYXMgZ2VvbWV0cnkgb3Igbm90XG4gICAgICBjb25zdCBzdXBwb3J0U3BhdGlhbEluZm8gPSBkYXRhU291cmNlPy5zdXBwb3J0U3BhdGlhbEluZm8gJiYgZGF0YVNvdXJjZT8uc3VwcG9ydFNwYXRpYWxJbmZvKClcblxuICAgICAgaWYgKCFzdXBwb3J0U3BhdGlhbEluZm8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5SZWNvcmRzKSB7XG4gICAgICAgIC8vIHpvb20gdG8gZ3JhcGhpY3NcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuZ2V0UmVjb3JkcyhkYXRhU2V0LCBkYXRhTGV2ZWwpXG4gICAgICAgIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDBcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuRGF0YVNvdXJjZSkge1xuICAgICAgICAvLyB6b29tIHRvIGxheWVyXG4gICAgICAgIHJldHVybiAhIWRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2VcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIHJldHVybiBzdXBwb3J0ZWREYXRhU2V0c1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZWNvcmRzIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IERhdGFSZWNvcmRbXSB7XG4gICAgbGV0IHJlc3VsdDogRGF0YVJlY29yZFtdID0gW11cblxuICAgIGlmIChkYXRhTGV2ZWwgPT09IERhdGFMZXZlbC5EYXRhU291cmNlKSB7XG4gICAgICByZXN1bHQgPSBbXVxuICAgIH0gZWxzZSBpZiAoZGF0YUxldmVsID09PSBEYXRhTGV2ZWwuUmVjb3JkcyAmJiBkYXRhU2V0LnJlY29yZHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdCA9IGRhdGFTZXQucmVjb3Jkc1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xvbmVkRmVhdHVyZXMgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQsIGRhdGFMZXZlbDogRGF0YUxldmVsLCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWMpOiBfX2VzcmkuR3JhcGhpY1tdIHtcbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5nZXRSZWNvcmRzKGRhdGFTZXQsIGRhdGFMZXZlbClcbiAgICBjb25zdCBjbG9uZWRGZWF0dXJlcyA9IHJlY29yZHMubWFwKHJlY29yZCA9PiBjbG9uZUZlYXR1cmUoKHJlY29yZCBhcyBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSwgR3JhcGhpYykpXG4gICAgcmV0dXJuIGNsb25lZEZlYXR1cmVzXG4gIH1cblxuICBhc3luYyBvbkV4ZWN1dGUgKGRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10sIGRhdGFMZXZlbDogRGF0YUxldmVsKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgbW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL0dyYXBoaWMnXSlcbiAgICBjb25zdCBbR3JhcGhpY10gPSBtb2R1bGVzIGFzIFt0eXBlb2YgX19lc3JpLkdyYXBoaWNdXG4gICAgY29uc3Qgc3VwcG9ydGVkRGF0YVNldHMgPSB0aGlzLmdldFN1cHBvcnRlZERhdGFTZXRzKGRhdGFTZXRzLCBkYXRhTGV2ZWwpXG4gICAgY29uc3Qgem9vbVRvT3B0aW9uOiBab29tVG9PcHRpb25zID0ge1xuICAgICAgcGFkZGluZzoge1xuICAgICAgICBsZWZ0OiA1MCxcbiAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICB0b3A6IDUwLFxuICAgICAgICBib3R0b206IDUwXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnRlZERhdGFTZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gY2FzZTEsIGNhc2UyXG4gICAgICBjb25zdCBkYXRhU2V0ID0gc3VwcG9ydGVkRGF0YVNldHNbMF1cbiAgICAgIGNvbnN0IGNsb25lZEZlYXR1cmVzID0gdGhpcy5nZXRDbG9uZWRGZWF0dXJlcyhkYXRhU2V0LCBkYXRhTGV2ZWwsIEdyYXBoaWMpXG5cbiAgICAgIGNvbnN0IGZlYXR1cmVBY3Rpb25WYWx1ZTogWm9vbVRvR3JhcGhpY3NJbnRlcm5hbFZhbHVlID0ge1xuICAgICAgICB0eXBlOiAnem9vbS10by1ncmFwaGljcycsXG4gICAgICAgIGZlYXR1cmVzOiBjbG9uZWRGZWF0dXJlcyxcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkYXRhU2V0LmRhdGFTb3VyY2U/LmlkIHx8IG51bGwsXG4gICAgICAgIHpvb21Ub09wdGlvblxuICAgICAgfVxuXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlLnZhbHVlJywgZmVhdHVyZUFjdGlvblZhbHVlKVxuICAgIH0gZWxzZSBpZiAoc3VwcG9ydGVkRGF0YVNldHMubGVuZ3RoID49IDIpIHtcbiAgICAgIC8vIGNhc2UzXG4gICAgICBjb25zdCBhcnJheUZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdW10gPSBbXVxuXG4gICAgICBzdXBwb3J0ZWREYXRhU2V0cy5mb3JFYWNoKGRhdGFTZXQgPT4ge1xuICAgICAgICBjb25zdCBjbG9uZWRGZWF0dXJlcyA9IHRoaXMuZ2V0Q2xvbmVkRmVhdHVyZXMoZGF0YVNldCwgZGF0YUxldmVsLCBHcmFwaGljKVxuICAgICAgICBhcnJheUZlYXR1cmVzLnB1c2goY2xvbmVkRmVhdHVyZXMpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBmZWF0dXJlQWN0aW9uVmFsdWU6IFpvb21Ub0FycmF5R3JhcGhpY3NJbnRlcm5hbFZhbHVlID0ge1xuICAgICAgICB0eXBlOiAnem9vbS10by1hcnJheS1ncmFwaGljcycsXG4gICAgICAgIGFycmF5RmVhdHVyZXMsXG4gICAgICAgIHpvb21Ub09wdGlvblxuICAgICAgfVxuXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlLnZhbHVlJywgZmVhdHVyZUFjdGlvblZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==