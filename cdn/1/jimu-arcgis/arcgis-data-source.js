System.register(["jimu-core/data-source","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts":
/*!**********************************************************************!*\
  !*** ./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISDataSourceTypes: () => (/* binding */ DataSourceTypes),
/* harmony export */   DataSourceTypes: () => (/* binding */ DataSourceTypes),
/* harmony export */   LayerTypes: () => (/* binding */ LayerTypes)
/* harmony export */ });
/**
 * The data source types that `jimu-arcgis` supports.
 * For additional data source types, please see `DataSourceTypes` from the `jimu-core` package.
 */
var DataSourceTypes;
(function (DataSourceTypes) {
    DataSourceTypes["Map"] = "MAP";
    DataSourceTypes["WebMap"] = "WEB_MAP";
    DataSourceTypes["WebScene"] = "WEB_SCENE";
})(DataSourceTypes || (DataSourceTypes = {}));
/**
 * @ignore
 * JS API layer types.
 */
var LayerTypes;
(function (LayerTypes) {
    LayerTypes["BaseDynamicLayer"] = "base-dynamic";
    LayerTypes["BaseElevationLayer"] = "base-elevation";
    LayerTypes["BaseTileLayer"] = "base-tile";
    LayerTypes["BuildingSceneLayer"] = "building-scene";
    LayerTypes["CSVLayer"] = "csv";
    LayerTypes["ElevationLayer"] = "elevation";
    LayerTypes["FeatureLayer"] = "feature";
    LayerTypes["GeoJSONLayer"] = "geojson";
    LayerTypes["GeoRSSLayer"] = "geo-rss";
    LayerTypes["GraphicsLayer"] = "graphics";
    LayerTypes["GroupLayer"] = "group";
    LayerTypes["SubtypeGroupLayer"] = "subtype-group";
    LayerTypes["ImageryLayer"] = "imagery";
    LayerTypes["IntegratedMeshLayer"] = "integrated-mesh";
    LayerTypes["KMLLayer"] = "kml";
    LayerTypes["MapImageLayer"] = "map-image";
    LayerTypes["MapNotesLayer"] = "map-notes";
    LayerTypes["PointCloudLayer"] = "point-cloud";
    LayerTypes["SceneLayer"] = "scene";
    LayerTypes["TileLayer"] = "tile";
    LayerTypes["UnknownLayer"] = "unknown";
    LayerTypes["UnsupportedLayer"] = "unsupported";
    LayerTypes["VectorTileLayer"] = "vector-tile";
    LayerTypes["WMSLayer"] = "wms";
    LayerTypes["WMTSLayer"] = "wmts";
    LayerTypes["WebTileLayer"] = "web-tile";
})(LayerTypes || (LayerTypes = {}));
/**
 * The data source types that `jimu-arcgis` supports.
 * For additional data source types, please see `DataSourceTypes` from the `jimu-core` package.
 * See {@link DataSourceTypes} for details.
 */



/***/ }),

/***/ "./jimu-arcgis/lib/data-sources/implementations/map-data-source-impl.ts":
/*!******************************************************************************!*\
  !*** ./jimu-arcgis/lib/data-sources/implementations/map-data-source-impl.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapDataSourceImpl: () => (/* binding */ MapDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core_data_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core/data-source */ "jimu-core/data-source");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class MapDataSourceImpl extends jimu_core_data_source__WEBPACK_IMPORTED_MODULE_0__.AbstractSetDataSource {
    constructor(options) {
        super(options);
        this.type = _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.Map;
        this.map = options.map;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.map) {
                yield this.createMap();
            }
            if (jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getWhetherUseProxy()) {
                this.setProxies();
            }
            return this.createFilterUrlChildDataSource();
        });
    }
    childDataSourcesReady() {
        return this.createChildDataSourcesRecursively().then(childDataSources => {
            return childDataSources;
        }).finally(() => {
            this.childDataSourcesCreated = true;
        });
    }
    getChildIds() {
        return this.getLayersAndTables().map(layerOrTable => this.getChildIdByLayer(layerOrTable));
    }
    createChildDataSourceById(childDsId, jimuChildId, childId) {
        const layerInfo = this.findLayerInfo(childId);
        if (!(layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.layer)) {
            return Promise.reject(new jimu_core_data_source__WEBPACK_IMPORTED_MODULE_0__.DataSourceError(childDsId, 'Can not find data source.'));
        }
        return this.createChildDataSourceByLayer(layerInfo.layer, jimuChildId, childDsId, layerInfo.order);
    }
    createDataSourceByLayer(layer) {
        const layerDs = this.getDataSourceByLayer(layer);
        if (layerDs) {
            return Promise.resolve(layerDs);
        }
        return this.createDataSourceById(this.getDataSourceIdByLayer(layer));
    }
    fetchSchema() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const dss = this.getChildDataSources();
            let mapSchema = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)({ childSchemas: {}, label: (_b = (_a = this.map) === null || _a === void 0 ? void 0 : _a.portalItem) === null || _b === void 0 ? void 0 : _b.title });
            dss.forEach((ds, i) => {
                const layerSchema = ds.getFetchedSchema();
                mapSchema = mapSchema.setIn(['childSchemas', ds.jimuChildId], layerSchema);
            });
            return Promise.resolve(mapSchema);
        });
    }
    getDataSourceByLayer(layer) {
        const jimuLayerIdOfInputLayer = jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getJimuLayerIdByJSAPILayer(layer);
        const descendantDss = Object.values(this.dataSourceManager.getDataSources()).filter(ds => { var _a; return ((_a = ds.getRootDataSource()) === null || _a === void 0 ? void 0 : _a.id) === this.id; });
        return descendantDss.find(ds => ds.jimuLayerId === jimuLayerIdOfInputLayer);
    }
    /**
     * Return all descendant data sources with specific data source type.
     */
    getDataSourcesByType(type) {
        if (!type) {
            return [];
        }
        const dataSourcesWithSpecificType = [];
        this.traverseToGetDataSourcesByType(type, this, dataSourcesWithSpecificType);
        return dataSourcesWithSpecificType;
    }
    /**
     * TODO: consider data source mapping, refactor this method.
     * If consider data source mapping, one JS API layer may match multiple layer data sources.
     */
    getDataSourceIdByLayer(layer) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getDataSourceIdByJSAPILayer(this.id, layer);
    }
    traverseToGetDataSourcesByType(type, dataSource, dataSourcesWithSpecificType) {
        if (!type || !dataSource || !dataSourcesWithSpecificType) {
            return;
        }
        if (dataSource.type === type) {
            dataSourcesWithSpecificType.push(dataSource);
        }
        const childDataSources = dataSource.isDataSourceSet && dataSource.getChildDataSources();
        if (childDataSources) {
            childDataSources.forEach(childDataSource => {
                this.traverseToGetDataSourcesByType(type, childDataSource, dataSourcesWithSpecificType);
            });
        }
    }
    createMap() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Map', 'esri/layers/FeatureLayer']);
            const Map = modules[0];
            const FeatureLayer = modules[1];
            this.map = new Map();
            (_a = this.getDataSourceJson().layers) === null || _a === void 0 ? void 0 : _a.forEach(layer => {
                this.map.layers.add(new FeatureLayer(layer));
            });
        });
    }
    setProxies() {
        var _a;
        const tables = ((_a = this.map.tables) === null || _a === void 0 ? void 0 : _a.toArray()) || [];
        const useProxy = jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getWhetherUseProxy();
        if (useProxy) {
            this.map.allLayers.toArray().concat(tables).forEach(layerOrTable => { this.setProxyForLayerOrTable(layerOrTable); });
        }
    }
    setProxyForLayerOrTable(layerOrTable) {
        const sourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getUrlByLayer(layerOrTable);
        if (!sourceUrl) {
            return;
        }
        const proxyUrl = jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getDataSourceProxyUrl(sourceUrl);
        if (proxyUrl) {
            layerOrTable.url = proxyUrl;
            // The following code is the workaround to fix JS API 4.28 issue. Need to be replaced with request interceptor in next release.
            const portalItem = layerOrTable.portalItem;
            if (portalItem && portalItem.when) {
                portalItem.when(() => {
                    // After execute 'layer.url = proxyUrl', layer.url maybe still different with proxyUrl, e.g. proxyUrl is 'xxx/featureserver/0', but the final layer.url is 'xxx/featureserver'.
                    // so we use layer.url here, not proxyUrl.
                    portalItem.url = layerOrTable.url;
                    if (portalItem.sourceJSON) {
                        portalItem.sourceJSON.url = layerOrTable.url;
                    }
                });
            }
        }
    }
    createChildDataSourceByLayer(layer, jimuChildId, childDsId, order) {
        var _a, _b, _c;
        const schemaInConfig = ((_b = (_a = this.getDataSourceJson().schema) === null || _a === void 0 ? void 0 : _a.childSchemas) === null || _b === void 0 ? void 0 : _b[jimuChildId]) || null;
        const dsJsonInConfig = ((_c = this.getDataSourceJson().childDataSourceJsons) === null || _c === void 0 ? void 0 : _c[jimuChildId]) || null;
        const dsJson = jimu_core_data_source__WEBPACK_IMPORTED_MODULE_0__.dataSourceJsonCreator.createDataSourceJsonByJSAPILayer(childDsId, layer, dsJsonInConfig, schemaInConfig);
        if (dsJson) {
            const options = {
                id: dsJson.id,
                dataSourceJson: dsJson,
                layer: layer,
                parentDataSource: this,
                jimuChildId,
                order
            };
            return this.dataSourceManager.createDataSource(options);
        }
        return Promise.reject(new jimu_core_data_source__WEBPACK_IMPORTED_MODULE_0__.DataSourceError(childDsId, 'Do not support this type of data.'));
    }
    findLayerInfo(childId) {
        let layerInfo;
        this.getLayersAndTables().some((l, i) => {
            if (this.getChildIdByLayer(l) === childId) {
                layerInfo = {
                    layer: l,
                    order: i
                };
                return true;
            }
            return false;
        });
        return layerInfo;
    }
    getLayersAndTables() {
        const layers = this.map.layers.toArray().reverse();
        const tables = (this.map.tables ? this.map.tables.toArray() : []).reverse();
        return layers.concat(tables);
    }
    getChildIdByLayer(layer) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_1__.dataSourceUtils.getFixedLayerIdByLayer(layer);
    }
    /**
     * This is a temp fix. Let's move this code into JimuLayerView when this issue is fixed: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/48066
     */
    createFilterUrlChildDataSource() {
        const dataSourceInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().dataSourcesInfo;
        return Promise.all(Object.keys(dataSourceInfo || {}).filter(dsId => {
            var _a;
            return ((_a = dataSourceInfo[dsId].widgetQueries) === null || _a === void 0 ? void 0 : _a._filterInUrl) && this.findChildDataSourceIdByDescendantDataSourceId(dsId);
        }).map(dsId => {
            return this.createDataSourceById(dsId);
        })).then(() => {
        }).catch(err => {
            // Make sure this method always resolved, otherwise mapDs will be rejected.
            console.error('create filter url child data sources error', err);
        });
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/data-sources/implementations/webmap-data-source-impl.ts":
/*!*********************************************************************************!*\
  !*** ./jimu-arcgis/lib/data-sources/implementations/webmap-data-source-impl.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebMapDataSourceImpl: () => (/* binding */ WebMapDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_core_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core/data-source */ "jimu-core/data-source");
/* harmony import */ var _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
/* harmony import */ var _map_data_source_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-data-source-impl */ "./jimu-arcgis/lib/data-sources/implementations/map-data-source-impl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class WebMapDataSourceImpl extends (0,jimu_core_data_source__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_map_data_source_impl__WEBPACK_IMPORTED_MODULE_3__.MapDataSourceImpl) {
    constructor(options) {
        super(options);
        this.type = _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.WebMap;
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    createMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
                'esri/WebMap',
                'esri/portal/Portal',
                'esri/portal/PortalItem'
            ]);
            const WebMap = modules[0];
            const Portal = modules[1];
            const PortalItem = modules[2];
            if (this.getDataSourceJson().portalUrl) {
                const portal = new Portal({
                    url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPlatformUrlByOrgUrl(this.getDataSourceJson().portalUrl)
                });
                this.map = new WebMap({
                    portalItem: new PortalItem({
                        id: this.getDataSourceJson().itemId,
                        portal: portal
                    })
                });
            }
            else {
                this.map = new WebMap({
                    portalItem: new PortalItem({
                        id: this.getDataSourceJson().itemId
                    })
                });
            }
            if (!this.map.isFulfilled()) {
                yield this.map.load().then(() => { this.initItem(); });
            }
            else {
                this.initItem();
            }
        });
    }
    initItem() {
        var _a;
        if (!this.map) {
            return;
        }
        this.setItemData(this.map.resourceInfo);
        this.setItemInfo((_a = this.map.portalItem) === null || _a === void 0 ? void 0 : _a.sourceJSON);
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/data-sources/implementations/webscene-data-source-impl.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-arcgis/lib/data-sources/implementations/webscene-data-source-impl.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSceneDataSourceImpl: () => (/* binding */ WebSceneDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_core_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core/data-source */ "jimu-core/data-source");
/* harmony import */ var _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
/* harmony import */ var _map_data_source_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-data-source-impl */ "./jimu-arcgis/lib/data-sources/implementations/map-data-source-impl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class WebSceneDataSourceImpl extends (0,jimu_core_data_source__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_map_data_source_impl__WEBPACK_IMPORTED_MODULE_3__.MapDataSourceImpl) {
    constructor(options) {
        super(options);
        this.type = _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.WebScene;
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    createMap() {
        return __awaiter(this, void 0, void 0, function* () {
            const modules = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
                'esri/WebScene',
                'esri/portal/Portal',
                'esri/portal/PortalItem'
            ]);
            const WebScene = modules[0];
            const Portal = modules[1];
            const PortalItem = modules[2];
            if (this.getDataSourceJson().portalUrl) {
                const portal = new Portal({
                    url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPlatformUrlByOrgUrl(this.getDataSourceJson().portalUrl)
                });
                this.map = new WebScene({
                    portalItem: new PortalItem({
                        id: this.getDataSourceJson().itemId,
                        portal: portal
                    })
                });
            }
            else {
                this.map = new WebScene({
                    portalItem: new PortalItem({
                        id: this.getDataSourceJson().itemId
                    })
                });
            }
            if (!this.map.isFulfilled()) {
                yield this.map.load().then(() => { this.initItem(); });
            }
            else {
                this.initItem();
            }
        });
    }
    initItem() {
        var _a;
        if (!this.map) {
            return;
        }
        this.setItemData(this.map.resourceInfo);
        this.setItemInfo((_a = this.map.portalItem) === null || _a === void 0 ? void 0 : _a.sourceJSON);
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/data-sources/index.ts":
/*!***********************************************!*\
  !*** ./jimu-arcgis/lib/data-sources/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISDataSourceFactory: () => (/* binding */ ArcGISDataSourceFactory),
/* harmony export */   ArcGISDataSourceTypes: () => (/* reexport safe */ _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceTypes),
/* harmony export */   DataSourceTypes: () => (/* reexport safe */ _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes),
/* harmony export */   LayerTypes: () => (/* reexport safe */ _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.LayerTypes),
/* harmony export */   MapDataSourceImpl: () => (/* reexport safe */ _implementations_map_data_source_impl__WEBPACK_IMPORTED_MODULE_1__.MapDataSourceImpl),
/* harmony export */   WebMapDataSourceImpl: () => (/* reexport safe */ _implementations_webmap_data_source_impl__WEBPACK_IMPORTED_MODULE_2__.WebMapDataSourceImpl),
/* harmony export */   WebSceneDataSourceImpl: () => (/* reexport safe */ _implementations_webscene_data_source_impl__WEBPACK_IMPORTED_MODULE_3__.WebSceneDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
/* harmony import */ var _implementations_map_data_source_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementations/map-data-source-impl */ "./jimu-arcgis/lib/data-sources/implementations/map-data-source-impl.ts");
/* harmony import */ var _implementations_webmap_data_source_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementations/webmap-data-source-impl */ "./jimu-arcgis/lib/data-sources/implementations/webmap-data-source-impl.ts");
/* harmony import */ var _implementations_webscene_data_source_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementations/webscene-data-source-impl */ "./jimu-arcgis/lib/data-sources/implementations/webscene-data-source-impl.ts");




class ArcGISDataSourceFactory {
    createDataSource(options) {
        var _a;
        const dsJson = (_a = options.dataSourceJson) !== null && _a !== void 0 ? _a : options.belongToDataSource.getMainDataSource().getDataSourceJson();
        const dsType = options.dataViewId && dsJson.dataViews && dsJson.dataViews[options.dataViewId] ? dsJson.dataViews[options.dataViewId].type || dsJson.type : dsJson.type;
        if (dsType === _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.Map) {
            return new _implementations_map_data_source_impl__WEBPACK_IMPORTED_MODULE_1__.MapDataSourceImpl(options);
        }
        else if (dsType === _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebMap) {
            return new _implementations_webmap_data_source_impl__WEBPACK_IMPORTED_MODULE_2__.WebMapDataSourceImpl(options);
        }
        else if (dsType === _arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WebScene) {
            return new _implementations_webscene_data_source_impl__WEBPACK_IMPORTED_MODULE_3__.WebSceneDataSourceImpl(options);
        }
        else {
            console.error('Unimplemented data source type.', dsType);
        }
    }
}




/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-core/data-source":
/*!****************************************!*\
  !*** external "jimu-core/data-source" ***!
  \****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__;

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
/*!*******************************************!*\
  !*** ./jimu-arcgis/arcgis-data-source.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISDataSourceFactory: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceFactory),
/* harmony export */   ArcGISDataSourceTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceTypes),
/* harmony export */   DataSourceTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes),
/* harmony export */   LayerTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.LayerTypes),
/* harmony export */   MapDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.MapDataSourceImpl),
/* harmony export */   WebMapDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.WebMapDataSourceImpl),
/* harmony export */   WebSceneDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.WebSceneDataSourceImpl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data-sources */ "./jimu-arcgis/lib/data-sources/index.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceFactory);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi9kYXRhLXNvdXJjZXMvYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL2RhdGEtc291cmNlcy9pbXBsZW1lbnRhdGlvbnMvbWFwLWRhdGEtc291cmNlLWltcGwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi9kYXRhLXNvdXJjZXMvaW1wbGVtZW50YXRpb25zL3dlYm1hcC1kYXRhLXNvdXJjZS1pbXBsLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvZGF0YS1zb3VyY2VzL2ltcGxlbWVudGF0aW9ucy93ZWJzY2VuZS1kYXRhLXNvdXJjZS1pbXBsLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvZGF0YS1zb3VyY2VzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZGF0YS1zb3VyY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2FyY2dpcy1kYXRhLXNvdXJjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IElNRGF0YVNvdXJjZVNjaGVtYSwgRGF0YVNvdXJjZSwgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSwgRmVhdHVyZURhdGFSZWNvcmQsIEl0ZW1NaXhpbiwgQXJjR0lTU3ViTGF5ZXIgfSBmcm9tICdqaW11LWNvcmUnXG5cbi8qKlxuICogVGhlIGRhdGEgc291cmNlIHR5cGVzIHRoYXQgYGppbXUtYXJjZ2lzYCBzdXBwb3J0cy5cbiAqIEZvciBhZGRpdGlvbmFsIGRhdGEgc291cmNlIHR5cGVzLCBwbGVhc2Ugc2VlIGBEYXRhU291cmNlVHlwZXNgIGZyb20gdGhlIGBqaW11LWNvcmVgIHBhY2thZ2UuXG4gKi9cbmV4cG9ydCBlbnVtIERhdGFTb3VyY2VUeXBlcyB7XG4gIE1hcCA9ICdNQVAnLFxuICBXZWJNYXAgPSAnV0VCX01BUCcsXG4gIFdlYlNjZW5lID0gJ1dFQl9TQ0VORScsXG59XG5cbi8qKlxuICogQGlnbm9yZVxuICogSlMgQVBJIGxheWVyIHR5cGVzLlxuICovXG5leHBvcnQgZW51bSBMYXllclR5cGVzIHtcbiAgQmFzZUR5bmFtaWNMYXllciA9ICdiYXNlLWR5bmFtaWMnLFxuICBCYXNlRWxldmF0aW9uTGF5ZXIgPSAnYmFzZS1lbGV2YXRpb24nLFxuICBCYXNlVGlsZUxheWVyID0gJ2Jhc2UtdGlsZScsXG4gIEJ1aWxkaW5nU2NlbmVMYXllciA9ICdidWlsZGluZy1zY2VuZScsXG4gIENTVkxheWVyID0gJ2NzdicsXG4gIEVsZXZhdGlvbkxheWVyID0gJ2VsZXZhdGlvbicsXG4gIEZlYXR1cmVMYXllciA9ICdmZWF0dXJlJyxcbiAgR2VvSlNPTkxheWVyID0gJ2dlb2pzb24nLFxuICBHZW9SU1NMYXllciA9ICdnZW8tcnNzJyxcbiAgR3JhcGhpY3NMYXllciA9ICdncmFwaGljcycsXG4gIEdyb3VwTGF5ZXIgPSAnZ3JvdXAnLFxuICBTdWJ0eXBlR3JvdXBMYXllciA9ICdzdWJ0eXBlLWdyb3VwJyxcbiAgSW1hZ2VyeUxheWVyID0gJ2ltYWdlcnknLFxuICBJbnRlZ3JhdGVkTWVzaExheWVyID0gJ2ludGVncmF0ZWQtbWVzaCcsXG4gIEtNTExheWVyID0gJ2ttbCcsXG4gIE1hcEltYWdlTGF5ZXIgPSAnbWFwLWltYWdlJyxcbiAgTWFwTm90ZXNMYXllciA9ICdtYXAtbm90ZXMnLFxuICBQb2ludENsb3VkTGF5ZXIgPSAncG9pbnQtY2xvdWQnLFxuICBTY2VuZUxheWVyID0gJ3NjZW5lJyxcbiAgVGlsZUxheWVyID0gJ3RpbGUnLFxuICBVbmtub3duTGF5ZXIgPSAndW5rbm93bicsXG4gIFVuc3VwcG9ydGVkTGF5ZXIgPSAndW5zdXBwb3J0ZWQnLFxuICBWZWN0b3JUaWxlTGF5ZXIgPSAndmVjdG9yLXRpbGUnLFxuICBXTVNMYXllciA9ICd3bXMnLFxuICBXTVRTTGF5ZXIgPSAnd210cycsXG4gIFdlYlRpbGVMYXllciA9ICd3ZWItdGlsZSdcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIG1hcCByZWxhdGVkIGRhdGEgc291cmNlcy5cbiAqIEl0IGNvbnRhaW5zIGEgSlMgQVBJIE1hcCBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIHR5cGU6IERhdGFTb3VyY2VUeXBlcy5NYXAgfCBEYXRhU291cmNlVHlwZXMuV2ViTWFwIHwgRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lXG4gIG1hcDogX19lc3JpLk1hcFxuICByZWFkeTogKCkgPT4gUHJvbWlzZTx2b2lkPlxuICBjaGlsZERhdGFTb3VyY2VzUmVhZHk6ICgpID0+IFByb21pc2U8RGF0YVNvdXJjZVtdPlxuICBmZXRjaFNjaGVtYTogKCkgPT4gUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+XG4gIGdldERhdGFTb3VyY2VCeUxheWVyOiAobGF5ZXI6IF9fZXNyaS5MYXllciB8IEFyY0dJU1N1YkxheWVyKSA9PiBEYXRhU291cmNlXG4gIGdldERhdGFTb3VyY2VJZEJ5TGF5ZXI6IChsYXllcjogX19lc3JpLkxheWVyIHwgQXJjR0lTU3ViTGF5ZXIpID0+IHN0cmluZ1xuICBjcmVhdGVEYXRhU291cmNlQnlMYXllcjogKGxheWVyOiBfX2VzcmkuTGF5ZXIgfCBBcmNHSVNTdWJMYXllcikgPT4gUHJvbWlzZTxEYXRhU291cmNlPlxuICBjcmVhdGVEYXRhU291cmNlQnlJZDogKGRhdGFTb3VyY2VJZDogc3RyaW5nKSA9PiBQcm9taXNlPERhdGFTb3VyY2U+XG59XG5cbi8qKlxuICogV2ViIG1hcCBkYXRhIHNvdXJjZSBpcyBjcmVhdGVkIGZyb20gYSB3ZWJtYXAuXG4gKiBJdCBtYXkgaGF2ZSBjaGlsZCBkYXRhIHNvdXJjZXMgKHN1Y2ggYXMgZmVhdHVyZSBsYXllciBkYXRhIHNvdXJjZSwgZ3JvdXAgbGF5ZXIgZGF0YSBzb3VyY2UgYW5kIHNvIG9uKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXZWJNYXBEYXRhU291cmNlIGV4dGVuZHMgTWFwRGF0YVNvdXJjZSwgSXRlbU1peGluIHtcbiAgdHlwZTogRGF0YVNvdXJjZVR5cGVzLldlYk1hcFxuICBtYXA6IF9fZXNyaS5XZWJNYXBcbn1cblxuLyoqXG4gKiBXZWIgc2NlbmUgZGF0YSBzb3VyY2UgaXMgY3JlYXRlZCBmcm9tIGEgd2Vic2NlbmUuXG4gKiBJdCBtYXkgaGF2ZSBjaGlsZCBkYXRhIHNvdXJjZXMgKHN1Y2ggYXMgZmVhdHVyZSBsYXllciBkYXRhIHNvdXJjZSwgc2NlbmUgbGF5ZXIgZGF0YSBzb3VyY2UgYW5kIHNvIG9uKS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXZWJTY2VuZURhdGFTb3VyY2UgZXh0ZW5kcyBNYXBEYXRhU291cmNlLCBJdGVtTWl4aW4ge1xuICB0eXBlOiBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmVcbiAgbWFwOiBfX2VzcmkuV2ViU2NlbmVcbn1cblxuLyoqXG4gKiBUaGUgZGF0YSBzb3VyY2UgdHlwZXMgdGhhdCBgamltdS1hcmNnaXNgIHN1cHBvcnRzLlxuICogRm9yIGFkZGl0aW9uYWwgZGF0YSBzb3VyY2UgdHlwZXMsIHBsZWFzZSBzZWUgYERhdGFTb3VyY2VUeXBlc2AgZnJvbSB0aGUgYGppbXUtY29yZWAgcGFja2FnZS5cbiAqIFNlZSB7QGxpbmsgRGF0YVNvdXJjZVR5cGVzfSBmb3IgZGV0YWlscy5cbiAqL1xuZXhwb3J0IHsgRGF0YVNvdXJjZVR5cGVzIGFzIEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9XG5cbmV4cG9ydCB0eXBlIHsgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSwgRmVhdHVyZURhdGFSZWNvcmQgfVxuIiwiaW1wb3J0IHtcbiAgQWJzdHJhY3RTZXREYXRhU291cmNlLCB0eXBlIERhdGFTb3VyY2VDb25zdHJ1Y3Rvck9wdGlvbnMsXG4gIHR5cGUgRGF0YVNvdXJjZVR5cGVzIGFzIEppbXVDb3JlRGF0YVNvdXJjZVR5cGVzLCB0eXBlIEpTQVBJTGF5ZXJNaXhpbiwgdHlwZSBBcmNHSVNTdWJMYXllciwgRGF0YVNvdXJjZUVycm9yLCBkYXRhU291cmNlSnNvbkNyZWF0b3Jcbn0gZnJvbSAnamltdS1jb3JlL2RhdGEtc291cmNlJ1xuaW1wb3J0IHsgdHlwZSBJTURhdGFTb3VyY2VKc29uLCBJbW11dGFibGUsIHR5cGUgSU1EYXRhU291cmNlU2NoZW1hLCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCBkYXRhU291cmNlVXRpbHMsIHR5cGUgRGF0YVNvdXJjZSwgZ2V0QXBwU3RvcmUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZXMsIHR5cGUgTWFwRGF0YVNvdXJjZSB9IGZyb20gJy4uL2FyY2dpcy1kYXRhLXNvdXJjZS1pbnRlcmZhY2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucyBleHRlbmRzIERhdGFTb3VyY2VDb25zdHJ1Y3Rvck9wdGlvbnMge1xuICBtYXA/OiBfX2VzcmkuTWFwXG59XG5cbmV4cG9ydCBjbGFzcyBNYXBEYXRhU291cmNlSW1wbCBleHRlbmRzIEFic3RyYWN0U2V0RGF0YVNvdXJjZSBpbXBsZW1lbnRzIE1hcERhdGFTb3VyY2Uge1xuICB0eXBlOiBEYXRhU291cmNlVHlwZXMuTWFwIHwgRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8IERhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSA9IERhdGFTb3VyY2VUeXBlcy5NYXBcbiAgbWFwOiBfX2VzcmkuTWFwXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IE1hcERhdGFTb3VyY2VDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuXG4gICAgdGhpcy5tYXAgPSBvcHRpb25zLm1hcFxuICB9XG5cbiAgYXN5bmMgcmVhZHkgKCkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlTWFwKClcbiAgICB9XG5cbiAgICBpZiAoZGF0YVNvdXJjZVV0aWxzLmdldFdoZXRoZXJVc2VQcm94eSgpKSB7XG4gICAgICB0aGlzLnNldFByb3hpZXMoKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUZpbHRlclVybENoaWxkRGF0YVNvdXJjZSgpXG4gIH1cblxuICBjaGlsZERhdGFTb3VyY2VzUmVhZHkgKCk6IFByb21pc2U8RGF0YVNvdXJjZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGREYXRhU291cmNlc1JlY3Vyc2l2ZWx5KCkudGhlbihjaGlsZERhdGFTb3VyY2VzID0+IHtcbiAgICAgIHJldHVybiBjaGlsZERhdGFTb3VyY2VzXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICB0aGlzLmNoaWxkRGF0YVNvdXJjZXNDcmVhdGVkID0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q2hpbGRJZHMgKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMYXllcnNBbmRUYWJsZXMoKS5tYXAobGF5ZXJPclRhYmxlID0+IHRoaXMuZ2V0Q2hpbGRJZEJ5TGF5ZXIobGF5ZXJPclRhYmxlKSlcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVDaGlsZERhdGFTb3VyY2VCeUlkIChjaGlsZERzSWQ6IHN0cmluZywgamltdUNoaWxkSWQ6IHN0cmluZywgY2hpbGRJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRhU291cmNlPiB7XG4gICAgY29uc3QgbGF5ZXJJbmZvID0gdGhpcy5maW5kTGF5ZXJJbmZvKGNoaWxkSWQpXG4gICAgaWYgKCFsYXllckluZm8/LmxheWVyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IERhdGFTb3VyY2VFcnJvcihjaGlsZERzSWQsICdDYW4gbm90IGZpbmQgZGF0YSBzb3VyY2UuJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ2hpbGREYXRhU291cmNlQnlMYXllcihsYXllckluZm8ubGF5ZXIsIGppbXVDaGlsZElkLCBjaGlsZERzSWQsIGxheWVySW5mby5vcmRlcilcbiAgfVxuXG4gIGNyZWF0ZURhdGFTb3VyY2VCeUxheWVyIChsYXllcjogX19lc3JpLkxheWVyIHwgQXJjR0lTU3ViTGF5ZXIpOiBQcm9taXNlPERhdGFTb3VyY2U+IHtcbiAgICBjb25zdCBsYXllckRzID0gdGhpcy5nZXREYXRhU291cmNlQnlMYXllcihsYXllcilcbiAgICBpZiAobGF5ZXJEcykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsYXllckRzKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZURhdGFTb3VyY2VCeUlkKHRoaXMuZ2V0RGF0YVNvdXJjZUlkQnlMYXllcihsYXllcikpXG4gIH1cblxuICBhc3luYyBmZXRjaFNjaGVtYSAoKTogUHJvbWlzZTxJTURhdGFTb3VyY2VTY2hlbWE+IHtcbiAgICBjb25zdCBkc3MgPSB0aGlzLmdldENoaWxkRGF0YVNvdXJjZXMoKVxuXG4gICAgbGV0IG1hcFNjaGVtYTogSU1EYXRhU291cmNlU2NoZW1hID0gSW1tdXRhYmxlKHsgY2hpbGRTY2hlbWFzOiB7fSwgbGFiZWw6ICh0aGlzLm1hcCBhcyBfX2VzcmkuV2ViTWFwIHwgX19lc3JpLldlYlNjZW5lKT8ucG9ydGFsSXRlbT8udGl0bGUgfSkgYXMgSU1EYXRhU291cmNlU2NoZW1hXG4gICAgZHNzLmZvckVhY2goKGRzLCBpKSA9PiB7XG4gICAgICBjb25zdCBsYXllclNjaGVtYSA9IGRzLmdldEZldGNoZWRTY2hlbWEoKVxuICAgICAgbWFwU2NoZW1hID0gbWFwU2NoZW1hLnNldEluKFsnY2hpbGRTY2hlbWFzJywgZHMuamltdUNoaWxkSWRdLCBsYXllclNjaGVtYSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtYXBTY2hlbWEpXG4gIH1cblxuICBnZXREYXRhU291cmNlQnlMYXllciAobGF5ZXI6IF9fZXNyaS5MYXllciB8IEFyY0dJU1N1YkxheWVyKTogRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgamltdUxheWVySWRPZklucHV0TGF5ZXIgPSBkYXRhU291cmNlVXRpbHMuZ2V0SmltdUxheWVySWRCeUpTQVBJTGF5ZXIobGF5ZXIpXG4gICAgY29uc3QgZGVzY2VuZGFudERzcyA9IE9iamVjdC52YWx1ZXModGhpcy5kYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlcygpKS5maWx0ZXIoZHMgPT4gZHMuZ2V0Um9vdERhdGFTb3VyY2UoKT8uaWQgPT09IHRoaXMuaWQpXG4gICAgcmV0dXJuIGRlc2NlbmRhbnREc3MuZmluZChkcyA9PiAoZHMgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW4pLmppbXVMYXllcklkID09PSBqaW11TGF5ZXJJZE9mSW5wdXRMYXllcilcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIGRlc2NlbmRhbnQgZGF0YSBzb3VyY2VzIHdpdGggc3BlY2lmaWMgZGF0YSBzb3VyY2UgdHlwZS5cbiAgICovXG4gIGdldERhdGFTb3VyY2VzQnlUeXBlICh0eXBlOiBKaW11Q29yZURhdGFTb3VyY2VUeXBlcyB8IERhdGFTb3VyY2VUeXBlcyk6IERhdGFTb3VyY2VbXSB7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhU291cmNlc1dpdGhTcGVjaWZpY1R5cGUgPSBbXVxuICAgIHRoaXMudHJhdmVyc2VUb0dldERhdGFTb3VyY2VzQnlUeXBlKHR5cGUsIHRoaXMsIGRhdGFTb3VyY2VzV2l0aFNwZWNpZmljVHlwZSlcblxuICAgIHJldHVybiBkYXRhU291cmNlc1dpdGhTcGVjaWZpY1R5cGVcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBjb25zaWRlciBkYXRhIHNvdXJjZSBtYXBwaW5nLCByZWZhY3RvciB0aGlzIG1ldGhvZC5cbiAgICogSWYgY29uc2lkZXIgZGF0YSBzb3VyY2UgbWFwcGluZywgb25lIEpTIEFQSSBsYXllciBtYXkgbWF0Y2ggbXVsdGlwbGUgbGF5ZXIgZGF0YSBzb3VyY2VzLlxuICAgKi9cbiAgZ2V0RGF0YVNvdXJjZUlkQnlMYXllciAobGF5ZXI6IF9fZXNyaS5MYXllciB8IEFyY0dJU1N1YkxheWVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0YVNvdXJjZVV0aWxzLmdldERhdGFTb3VyY2VJZEJ5SlNBUElMYXllcih0aGlzLmlkLCBsYXllcilcbiAgfVxuXG4gIHByaXZhdGUgdHJhdmVyc2VUb0dldERhdGFTb3VyY2VzQnlUeXBlICh0eXBlOiBKaW11Q29yZURhdGFTb3VyY2VUeXBlcyB8IERhdGFTb3VyY2VUeXBlcywgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSwgZGF0YVNvdXJjZXNXaXRoU3BlY2lmaWNUeXBlOiBEYXRhU291cmNlW10pIHtcbiAgICBpZiAoIXR5cGUgfHwgIWRhdGFTb3VyY2UgfHwgIWRhdGFTb3VyY2VzV2l0aFNwZWNpZmljVHlwZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGRhdGFTb3VyY2UudHlwZSA9PT0gdHlwZSkge1xuICAgICAgZGF0YVNvdXJjZXNXaXRoU3BlY2lmaWNUeXBlLnB1c2goZGF0YVNvdXJjZSlcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZERhdGFTb3VyY2VzID0gZGF0YVNvdXJjZS5pc0RhdGFTb3VyY2VTZXQgJiYgZGF0YVNvdXJjZS5nZXRDaGlsZERhdGFTb3VyY2VzKClcbiAgICBpZiAoY2hpbGREYXRhU291cmNlcykge1xuICAgICAgY2hpbGREYXRhU291cmNlcy5mb3JFYWNoKGNoaWxkRGF0YVNvdXJjZSA9PiB7XG4gICAgICAgIHRoaXMudHJhdmVyc2VUb0dldERhdGFTb3VyY2VzQnlUeXBlKHR5cGUsIGNoaWxkRGF0YVNvdXJjZSwgZGF0YVNvdXJjZXNXaXRoU3BlY2lmaWNUeXBlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgY3JlYXRlTWFwICgpIHtcbiAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvTWFwJywgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllciddKVxuICAgIGNvbnN0IE1hcDogdHlwZW9mIF9fZXNyaS5NYXAgPSBtb2R1bGVzWzBdXG4gICAgY29uc3QgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllciA9IG1vZHVsZXNbMV1cblxuICAgIHRoaXMubWFwID0gbmV3IE1hcCgpXG4gICAgdGhpcy5nZXREYXRhU291cmNlSnNvbigpLmxheWVycz8uZm9yRWFjaChsYXllciA9PiB7XG4gICAgICB0aGlzLm1hcC5sYXllcnMuYWRkKG5ldyBGZWF0dXJlTGF5ZXIobGF5ZXIpKVxuICAgIH0pXG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0UHJveGllcyAoKSB7XG4gICAgY29uc3QgdGFibGVzID0gdGhpcy5tYXAudGFibGVzPy50b0FycmF5KCkgfHwgW11cblxuICAgIGNvbnN0IHVzZVByb3h5ID0gZGF0YVNvdXJjZVV0aWxzLmdldFdoZXRoZXJVc2VQcm94eSgpXG4gICAgaWYgKHVzZVByb3h5KSB7XG4gICAgICB0aGlzLm1hcC5hbGxMYXllcnMudG9BcnJheSgpLmNvbmNhdCh0YWJsZXMpLmZvckVhY2gobGF5ZXJPclRhYmxlID0+IHsgdGhpcy5zZXRQcm94eUZvckxheWVyT3JUYWJsZShsYXllck9yVGFibGUgYXMgX19lc3JpLkxheWVyICYgeyB1cmw6IHN0cmluZywgcG9ydGFsSXRlbT86IF9fZXNyaS5Qb3J0YWxJdGVtIH0pIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcm94eUZvckxheWVyT3JUYWJsZSAobGF5ZXJPclRhYmxlOiBfX2VzcmkuTGF5ZXIgJiB7IHVybDogc3RyaW5nLCBwb3J0YWxJdGVtPzogX19lc3JpLlBvcnRhbEl0ZW0gfSkge1xuICAgIGNvbnN0IHNvdXJjZVVybCA9IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKGxheWVyT3JUYWJsZSlcbiAgICBpZiAoIXNvdXJjZVVybCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHByb3h5VXJsID0gZGF0YVNvdXJjZVV0aWxzLmdldERhdGFTb3VyY2VQcm94eVVybChzb3VyY2VVcmwpXG5cbiAgICBpZiAocHJveHlVcmwpIHtcbiAgICAgIGxheWVyT3JUYWJsZS51cmwgPSBwcm94eVVybFxuXG4gICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgaXMgdGhlIHdvcmthcm91bmQgdG8gZml4IEpTIEFQSSA0LjI4IGlzc3VlLiBOZWVkIHRvIGJlIHJlcGxhY2VkIHdpdGggcmVxdWVzdCBpbnRlcmNlcHRvciBpbiBuZXh0IHJlbGVhc2UuXG4gICAgICBjb25zdCBwb3J0YWxJdGVtID0gbGF5ZXJPclRhYmxlLnBvcnRhbEl0ZW1cblxuICAgICAgaWYgKHBvcnRhbEl0ZW0gJiYgcG9ydGFsSXRlbS53aGVuKSB7XG4gICAgICAgIHBvcnRhbEl0ZW0ud2hlbigoKSA9PiB7XG4gICAgICAgICAgLy8gQWZ0ZXIgZXhlY3V0ZSAnbGF5ZXIudXJsID0gcHJveHlVcmwnLCBsYXllci51cmwgbWF5YmUgc3RpbGwgZGlmZmVyZW50IHdpdGggcHJveHlVcmwsIGUuZy4gcHJveHlVcmwgaXMgJ3h4eC9mZWF0dXJlc2VydmVyLzAnLCBidXQgdGhlIGZpbmFsIGxheWVyLnVybCBpcyAneHh4L2ZlYXR1cmVzZXJ2ZXInLlxuICAgICAgICAgIC8vIHNvIHdlIHVzZSBsYXllci51cmwgaGVyZSwgbm90IHByb3h5VXJsLlxuICAgICAgICAgIHBvcnRhbEl0ZW0udXJsID0gbGF5ZXJPclRhYmxlLnVybFxuXG4gICAgICAgICAgaWYgKHBvcnRhbEl0ZW0uc291cmNlSlNPTikge1xuICAgICAgICAgICAgcG9ydGFsSXRlbS5zb3VyY2VKU09OLnVybCA9IGxheWVyT3JUYWJsZS51cmxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGlsZERhdGFTb3VyY2VCeUxheWVyIChsYXllcjogX19lc3JpLkxheWVyLCBqaW11Q2hpbGRJZDogc3RyaW5nLCBjaGlsZERzSWQ6IHN0cmluZywgb3JkZXI6IG51bWJlcik6IFByb21pc2U8RGF0YVNvdXJjZT4ge1xuICAgIGNvbnN0IHNjaGVtYUluQ29uZmlnID0gdGhpcy5nZXREYXRhU291cmNlSnNvbigpLnNjaGVtYT8uY2hpbGRTY2hlbWFzPy5bamltdUNoaWxkSWRdIHx8IG51bGxcbiAgICBjb25zdCBkc0pzb25JbkNvbmZpZyA9IHRoaXMuZ2V0RGF0YVNvdXJjZUpzb24oKS5jaGlsZERhdGFTb3VyY2VKc29ucz8uW2ppbXVDaGlsZElkXSB8fCBudWxsXG5cbiAgICBjb25zdCBkc0pzb246IElNRGF0YVNvdXJjZUpzb24gPSBkYXRhU291cmNlSnNvbkNyZWF0b3IuY3JlYXRlRGF0YVNvdXJjZUpzb25CeUpTQVBJTGF5ZXIoY2hpbGREc0lkLCBsYXllciwgZHNKc29uSW5Db25maWcsIHNjaGVtYUluQ29uZmlnKVxuICAgIGlmIChkc0pzb24pIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGlkOiBkc0pzb24uaWQsXG4gICAgICAgIGRhdGFTb3VyY2VKc29uOiBkc0pzb24sXG4gICAgICAgIGxheWVyOiBsYXllcixcbiAgICAgICAgcGFyZW50RGF0YVNvdXJjZTogdGhpcyxcbiAgICAgICAgamltdUNoaWxkSWQsXG4gICAgICAgIG9yZGVyXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlTWFuYWdlci5jcmVhdGVEYXRhU291cmNlKG9wdGlvbnMpXG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBEYXRhU291cmNlRXJyb3IoY2hpbGREc0lkLCAnRG8gbm90IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGRhdGEuJykpXG4gIH1cblxuICBwcml2YXRlIGZpbmRMYXllckluZm8gKGNoaWxkSWQ6IHN0cmluZyk6IHsgbGF5ZXI6IF9fZXNyaS5MYXllciwgb3JkZXI6IG51bWJlciB9IHtcbiAgICBsZXQgbGF5ZXJJbmZvOiB7IGxheWVyOiBfX2VzcmkuTGF5ZXIsIG9yZGVyOiBudW1iZXIgfVxuICAgIHRoaXMuZ2V0TGF5ZXJzQW5kVGFibGVzKCkuc29tZSgobCwgaSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGRJZEJ5TGF5ZXIobCkgPT09IGNoaWxkSWQpIHtcbiAgICAgICAgbGF5ZXJJbmZvID0ge1xuICAgICAgICAgIGxheWVyOiBsLFxuICAgICAgICAgIG9yZGVyOiBpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICByZXR1cm4gbGF5ZXJJbmZvXG4gIH1cblxuICBwcml2YXRlIGdldExheWVyc0FuZFRhYmxlcyAoKTogX19lc3JpLkxheWVyW10ge1xuICAgIGNvbnN0IGxheWVycyA9IHRoaXMubWFwLmxheWVycy50b0FycmF5KCkucmV2ZXJzZSgpXG4gICAgY29uc3QgdGFibGVzID0gKHRoaXMubWFwLnRhYmxlcyA/IHRoaXMubWFwLnRhYmxlcy50b0FycmF5KCkgOiBbXSkucmV2ZXJzZSgpXG4gICAgcmV0dXJuIGxheWVycy5jb25jYXQodGFibGVzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZElkQnlMYXllciAobGF5ZXI6IF9fZXNyaS5MYXllcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2VVdGlscy5nZXRGaXhlZExheWVySWRCeUxheWVyKGxheWVyKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSB0ZW1wIGZpeC4gTGV0J3MgbW92ZSB0aGlzIGNvZGUgaW50byBKaW11TGF5ZXJWaWV3IHdoZW4gdGhpcyBpc3N1ZSBpcyBmaXhlZDogaHR0cHM6Ly9kZXZ0b3BpYS5lc3JpLmNvbS9XZWJHSVMvYXJjZ2lzLWpzLWFwaS9pc3N1ZXMvNDgwNjZcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVGaWx0ZXJVcmxDaGlsZERhdGFTb3VyY2UgKCkge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VJbmZvID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmRhdGFTb3VyY2VzSW5mb1xuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhkYXRhU291cmNlSW5mbyB8fCB7fSkuZmlsdGVyKGRzSWQgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFTb3VyY2VJbmZvW2RzSWRdLndpZGdldFF1ZXJpZXM/Ll9maWx0ZXJJblVybCAmJiB0aGlzLmZpbmRDaGlsZERhdGFTb3VyY2VJZEJ5RGVzY2VuZGFudERhdGFTb3VyY2VJZChkc0lkKVxuICAgIH0pLm1hcChkc0lkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZURhdGFTb3VyY2VCeUlkKGRzSWQpXG4gICAgfSkpLnRoZW4oKCkgPT4ge1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhpcyBtZXRob2QgYWx3YXlzIHJlc29sdmVkLCBvdGhlcndpc2UgbWFwRHMgd2lsbCBiZSByZWplY3RlZC5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2NyZWF0ZSBmaWx0ZXIgdXJsIGNoaWxkIGRhdGEgc291cmNlcyBlcnJvcicsIGVycilcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIElJdGVtIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyBwb3J0YWxVcmxVdGlscywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEl0ZW1NaXhpbkltcGwgfSBmcm9tICdqaW11LWNvcmUvZGF0YS1zb3VyY2UnXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZXMsIHR5cGUgV2ViTWFwRGF0YVNvdXJjZSB9IGZyb20gJy4uL2FyY2dpcy1kYXRhLXNvdXJjZS1pbnRlcmZhY2UnXG5pbXBvcnQgeyB0eXBlIE1hcERhdGFTb3VyY2VDb25zdHJ1Y3Rvck9wdGlvbnMsIE1hcERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9tYXAtZGF0YS1zb3VyY2UtaW1wbCdcbmV4cG9ydCBpbnRlcmZhY2UgV2ViTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucyBleHRlbmRzIE1hcERhdGFTb3VyY2VDb25zdHJ1Y3Rvck9wdGlvbnMge1xuICBtYXA/OiBfX2VzcmkuV2ViTWFwXG59XG5leHBvcnQgY2xhc3MgV2ViTWFwRGF0YVNvdXJjZUltcGwgZXh0ZW5kcyBJdGVtTWl4aW5JbXBsKE1hcERhdGFTb3VyY2VJbXBsKSBpbXBsZW1lbnRzIFdlYk1hcERhdGFTb3VyY2Uge1xuICB0eXBlOiBEYXRhU291cmNlVHlwZXMuV2ViTWFwID0gRGF0YVNvdXJjZVR5cGVzLldlYk1hcFxuICBtYXA6IF9fZXNyaS5XZWJNYXBcblxuICBjb25zdHJ1Y3RvciAob3B0aW9uczogV2ViTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgZHNKc29uID0gdGhpcy5nZXREYXRhU291cmNlSnNvbigpXG4gICAgdGhpcy5wb3J0YWxVcmwgPSBkc0pzb24ucG9ydGFsVXJsXG4gICAgdGhpcy5pdGVtSWQgPSBkc0pzb24uaXRlbUlkXG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgY3JlYXRlTWFwICgpIHtcbiAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9XZWJNYXAnLFxuICAgICAgJ2VzcmkvcG9ydGFsL1BvcnRhbCcsXG4gICAgICAnZXNyaS9wb3J0YWwvUG9ydGFsSXRlbSdcbiAgICBdKVxuICAgIGNvbnN0IFdlYk1hcDogdHlwZW9mIF9fZXNyaS5XZWJNYXAgPSBtb2R1bGVzWzBdXG4gICAgY29uc3QgUG9ydGFsOiB0eXBlb2YgX19lc3JpLlBvcnRhbCA9IG1vZHVsZXNbMV1cbiAgICBjb25zdCBQb3J0YWxJdGVtOiB0eXBlb2YgX19lc3JpLlBvcnRhbEl0ZW0gPSBtb2R1bGVzWzJdXG4gICAgaWYgKHRoaXMuZ2V0RGF0YVNvdXJjZUpzb24oKS5wb3J0YWxVcmwpIHtcbiAgICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBQb3J0YWwoe1xuICAgICAgICB1cmw6IHBvcnRhbFVybFV0aWxzLmdldFBsYXRmb3JtVXJsQnlPcmdVcmwodGhpcy5nZXREYXRhU291cmNlSnNvbigpLnBvcnRhbFVybClcbiAgICAgIH0pXG4gICAgICB0aGlzLm1hcCA9IG5ldyBXZWJNYXAoe1xuICAgICAgICBwb3J0YWxJdGVtOiBuZXcgUG9ydGFsSXRlbSh7XG4gICAgICAgICAgaWQ6IHRoaXMuZ2V0RGF0YVNvdXJjZUpzb24oKS5pdGVtSWQsXG4gICAgICAgICAgcG9ydGFsOiBwb3J0YWxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IFdlYk1hcCh7XG4gICAgICAgIHBvcnRhbEl0ZW06IG5ldyBQb3J0YWxJdGVtKHtcbiAgICAgICAgICBpZDogdGhpcy5nZXREYXRhU291cmNlSnNvbigpLml0ZW1JZFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1hcC5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICBhd2FpdCB0aGlzLm1hcC5sb2FkKCkudGhlbigoKSA9PiB7IHRoaXMuaW5pdEl0ZW0oKSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRJdGVtKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRJdGVtICgpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5zZXRJdGVtRGF0YSgodGhpcy5tYXAgYXMgYW55KS5yZXNvdXJjZUluZm8pXG4gICAgdGhpcy5zZXRJdGVtSW5mbyh0aGlzLm1hcC5wb3J0YWxJdGVtPy5zb3VyY2VKU09OIGFzIElJdGVtKVxuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIElJdGVtIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyBwb3J0YWxVcmxVdGlscywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEl0ZW1NaXhpbkltcGwgfSBmcm9tICdqaW11LWNvcmUvZGF0YS1zb3VyY2UnXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZXMsIHR5cGUgV2ViU2NlbmVEYXRhU291cmNlIH0gZnJvbSAnLi4vYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbmltcG9ydCB7IHR5cGUgTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucywgTWFwRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL21hcC1kYXRhLXNvdXJjZS1pbXBsJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNjZW5lRGF0YVNvdXJjZUNvbnRydWN0b3JPcHRpb25zIGV4dGVuZHMgTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIG1hcD86IF9fZXNyaS5XZWJTY2VuZVxufVxuXG5leHBvcnQgY2xhc3MgV2ViU2NlbmVEYXRhU291cmNlSW1wbCBleHRlbmRzIEl0ZW1NaXhpbkltcGwoTWFwRGF0YVNvdXJjZUltcGwpIGltcGxlbWVudHMgV2ViU2NlbmVEYXRhU291cmNlIHtcbiAgdHlwZTogRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lID0gRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lXG4gIG1hcDogX19lc3JpLldlYlNjZW5lXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IFdlYlNjZW5lRGF0YVNvdXJjZUNvbnRydWN0b3JPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCBkc0pzb24gPSB0aGlzLmdldERhdGFTb3VyY2VKc29uKClcbiAgICB0aGlzLnBvcnRhbFVybCA9IGRzSnNvbi5wb3J0YWxVcmxcbiAgICB0aGlzLml0ZW1JZCA9IGRzSnNvbi5pdGVtSWRcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBjcmVhdGVNYXAgKCkge1xuICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL1dlYlNjZW5lJyxcbiAgICAgICdlc3JpL3BvcnRhbC9Qb3J0YWwnLFxuICAgICAgJ2VzcmkvcG9ydGFsL1BvcnRhbEl0ZW0nXG4gICAgXSlcbiAgICBjb25zdCBXZWJTY2VuZTogdHlwZW9mIF9fZXNyaS5XZWJTY2VuZSA9IG1vZHVsZXNbMF1cbiAgICBjb25zdCBQb3J0YWw6IHR5cGVvZiBfX2VzcmkuUG9ydGFsID0gbW9kdWxlc1sxXVxuICAgIGNvbnN0IFBvcnRhbEl0ZW06IHR5cGVvZiBfX2VzcmkuUG9ydGFsSXRlbSA9IG1vZHVsZXNbMl1cbiAgICBpZiAodGhpcy5nZXREYXRhU291cmNlSnNvbigpLnBvcnRhbFVybCkge1xuICAgICAgY29uc3QgcG9ydGFsID0gbmV3IFBvcnRhbCh7XG4gICAgICAgIHVybDogcG9ydGFsVXJsVXRpbHMuZ2V0UGxhdGZvcm1VcmxCeU9yZ1VybCh0aGlzLmdldERhdGFTb3VyY2VKc29uKCkucG9ydGFsVXJsKVxuICAgICAgfSlcbiAgICAgIHRoaXMubWFwID0gbmV3IFdlYlNjZW5lKHtcbiAgICAgICAgcG9ydGFsSXRlbTogbmV3IFBvcnRhbEl0ZW0oe1xuICAgICAgICAgIGlkOiB0aGlzLmdldERhdGFTb3VyY2VKc29uKCkuaXRlbUlkLFxuICAgICAgICAgIHBvcnRhbDogcG9ydGFsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcCA9IG5ldyBXZWJTY2VuZSh7XG4gICAgICAgIHBvcnRhbEl0ZW06IG5ldyBQb3J0YWxJdGVtKHtcbiAgICAgICAgICBpZDogdGhpcy5nZXREYXRhU291cmNlSnNvbigpLml0ZW1JZFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1hcC5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICBhd2FpdCB0aGlzLm1hcC5sb2FkKCkudGhlbigoKSA9PiB7IHRoaXMuaW5pdEl0ZW0oKSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRJdGVtKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRJdGVtICgpIHtcbiAgICBpZiAoIXRoaXMubWFwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5zZXRJdGVtRGF0YSgodGhpcy5tYXAgYXMgYW55KS5yZXNvdXJjZUluZm8pXG4gICAgdGhpcy5zZXRJdGVtSW5mbyh0aGlzLm1hcC5wb3J0YWxJdGVtPy5zb3VyY2VKU09OIGFzIElJdGVtKVxuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIERhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucywgdHlwZSBEYXRhU291cmNlRmFjdG9yeSB9IGZyb20gJ2ppbXUtY29yZSdcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi9hcmNnaXMtZGF0YS1zb3VyY2UtaW50ZXJmYWNlJ1xuaW1wb3J0IHsgTWFwRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9ucy9tYXAtZGF0YS1zb3VyY2UtaW1wbCdcbmltcG9ydCB7IFdlYk1hcERhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbnMvd2VibWFwLWRhdGEtc291cmNlLWltcGwnXG5pbXBvcnQgeyBXZWJTY2VuZURhdGFTb3VyY2VJbXBsIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbnMvd2Vic2NlbmUtZGF0YS1zb3VyY2UtaW1wbCdcblxuZXhwb3J0IGNsYXNzIEFyY0dJU0RhdGFTb3VyY2VGYWN0b3J5IGltcGxlbWVudHMgRGF0YVNvdXJjZUZhY3Rvcnkge1xuICBjcmVhdGVEYXRhU291cmNlIChvcHRpb25zOiBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zKTogRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgZHNKc29uID0gb3B0aW9ucy5kYXRhU291cmNlSnNvbiA/PyBvcHRpb25zLmJlbG9uZ1RvRGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpLmdldERhdGFTb3VyY2VKc29uKClcbiAgICBjb25zdCBkc1R5cGUgPSBvcHRpb25zLmRhdGFWaWV3SWQgJiYgZHNKc29uLmRhdGFWaWV3cyAmJiBkc0pzb24uZGF0YVZpZXdzW29wdGlvbnMuZGF0YVZpZXdJZF0gPyBkc0pzb24uZGF0YVZpZXdzW29wdGlvbnMuZGF0YVZpZXdJZF0udHlwZSB8fCBkc0pzb24udHlwZSA6IGRzSnNvbi50eXBlXG4gICAgaWYgKGRzVHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLk1hcCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXBEYXRhU291cmNlSW1wbChvcHRpb25zKVxuICAgIH0gZWxzZSBpZiAoZHNUeXBlID09PSBEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB7XG4gICAgICByZXR1cm4gbmV3IFdlYk1hcERhdGFTb3VyY2VJbXBsKG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChkc1R5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkge1xuICAgICAgcmV0dXJuIG5ldyBXZWJTY2VuZURhdGFTb3VyY2VJbXBsKG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaW1wbGVtZW50ZWQgZGF0YSBzb3VyY2UgdHlwZS4nLCBkc1R5cGUpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IE1hcERhdGFTb3VyY2VJbXBsLCBXZWJNYXBEYXRhU291cmNlSW1wbCwgV2ViU2NlbmVEYXRhU291cmNlSW1wbCB9XG5leHBvcnQgKiBmcm9tICcuL2FyY2dpcy1kYXRhLXNvdXJjZS1pbnRlcmZhY2UnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9kYXRhX3NvdXJjZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZUZhY3RvcnkgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZXMnXG5cbmV4cG9ydCBkZWZhdWx0IEFyY0dJU0RhdGFTb3VyY2VGYWN0b3J5XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2RhdGEtc291cmNlcydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==