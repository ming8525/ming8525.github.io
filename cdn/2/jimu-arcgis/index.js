System.register(["jimu-core","jimu-core/data-source","jimu-theme"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-arcgis/lib/arcgis-js-api-module-loader.ts":
/*!********************************************************!*\
  !*** ./jimu-arcgis/lib/arcgis-js-api-module-loader.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadArcGISJSAPIModules: () => (/* binding */ loadArcGISJSAPIModules)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function loadArcGISJSAPIModules(modules) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)(modules);
    });
}


/***/ }),

/***/ "./jimu-arcgis/lib/components/jimu-layer-view-component.tsx":
/*!******************************************************************!*\
  !*** ./jimu-arcgis/lib/components/jimu-layer-view-component.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewComponent: () => (/* binding */ JimuLayerViewComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _mapview_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mapview-manager */ "./jimu-arcgis/lib/mapview-manager.tsx");
/** @jsx jsx */


/**
 * A react component that makes it easy to use JimuLayerView from the map widget.
 * In most cases, you can pass in `useMapWidgetIds` & `jimuLayerViewInfo`, and use `onLayerViewCreated` & `onLayerViewFailed` to get a callback from the JimuLayerViewComponent.
 */
function JimuLayerViewComponent(props) {
    const [, setIsJimuLayerViewLoaded] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const getJimuLayerView = () => {
        const jimuMapView = _mapview_manager__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance().getJimuMapViewById(props.jimuMapViewId);
        const jimuLayerView = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.jimuLayerViews[props.jimuLayerViewId];
        return jimuLayerView;
    };
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (this.getJimuLayerView()) {
            setIsJimuLayerViewLoaded(true);
        }
        else {
            const jimuMapView = _mapview_manager__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance().getJimuMapViewById(this.props.jimuMapViewId);
            jimuMapView.whenJimuLayerViewLoaded(this.props.jimuLayerViewId).then(() => {
                setIsJimuLayerViewLoaded(true);
            });
        }
    }, []);
    if (!props.jimuLayerViewId || !props.children) {
        return null;
    }
    const jimuLayerView = getJimuLayerView();
    if (jimuLayerView) {
        return typeof props.children === 'function' ? props.children(jimuLayerView) : props.children;
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/components/jimu-map-view-component.tsx":
/*!****************************************************************!*\
  !*** ./jimu-arcgis/lib/components/jimu-map-view-component.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuMapViewComponent: () => (/* binding */ JimuMapViewComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _mapview_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mapview-manager */ "./jimu-arcgis/lib/mapview-manager.tsx");


class _JimuMapViewComponent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.viewManager = _mapview_manager__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
        this.onViewsCreate = (views) => {
            this.props.onViewsCreate && this.props.onViewsCreate(views);
        };
        this.onViewGroupCreate = () => {
            if (this.props.onViewGroupCreate && this.viewManager && this.props.useMapWidgetId) {
                const jimuMapViewGroup = this.viewManager.getJimuMapViewGroup(this.props.useMapWidgetId);
                this.props.onViewGroupCreate(jimuMapViewGroup);
            }
        };
        this.onActiveViewChange = (previousActiveViewId) => {
            if (!this.props.onActiveViewChange) {
                return;
            }
            let activeJimuMapView = null;
            if (this.viewManager) {
                const currActiveJimuMapViewId = this.getActiveViewId(this.props.useMapWidgetId, this.props.viewInfos);
                if (currActiveJimuMapViewId) {
                    activeJimuMapView = this.viewManager.getJimuMapViewById(currActiveJimuMapViewId);
                }
            }
            this.props.onActiveViewChange(activeJimuMapView, previousActiveViewId);
        };
        this.getActiveViewId = (mapWidgetId, infos) => {
            let activeViewId = '';
            if (mapWidgetId && infos) {
                activeViewId = infos && Object.keys(infos).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive && infos[viewId].status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuMapViewStatus.Loaded);
            }
            if (!activeViewId) {
                // activeViewId maybe undefined, convert it to empty string
                activeViewId = '';
            }
            return activeViewId;
        };
        this.getWhetherAllViewsCreated = (viewIds, infos, widgetUseDataSources) => {
            if ((viewIds === null || viewIds === void 0 ? void 0 : viewIds.length) < (widgetUseDataSources === null || widgetUseDataSources === void 0 ? void 0 : widgetUseDataSources.length)) {
                return false;
            }
            return (viewIds === null || viewIds === void 0 ? void 0 : viewIds.length) > 0 && !viewIds.some(vId => !this.getWhetherViewCreated(vId, infos));
        };
        this.getWhetherViewCreated = (viewId, infos) => {
            return !!(viewId && infos && infos[viewId] && infos[viewId].status && infos[viewId].status === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuMapViewStatus.Loaded);
        };
        this.getViewIdsFromMapWidgetId = (mapWidgetId, infos) => {
            return infos ? Object.keys(infos).filter(viewId => infos[viewId].mapWidgetId === mapWidgetId) : [];
        };
        this.getViews = (viewIds) => {
            if (!viewIds) {
                return null;
            }
            const views = {};
            viewIds.forEach(vId => {
                views[vId] = this.viewManager.getJimuMapViewById(vId);
            });
            return views;
        };
    }
    componentDidMount() {
        const preActiveViewId = '';
        this.checkPropCallbacksForCurrentMapWidgetId(preActiveViewId);
    }
    componentDidUpdate(prevProps) {
        const prevMapWidgetId = prevProps.useMapWidgetId || '';
        const currMapWidgetId = this.props.useMapWidgetId || '';
        if (currMapWidgetId === prevMapWidgetId) {
            // useMapWidgetId not changed
            const preViewIds = this.getViewIdsFromMapWidgetId(prevProps.useMapWidgetId, prevProps.viewInfos);
            const viewIds = this.getViewIdsFromMapWidgetId(this.props.useMapWidgetId, this.props.viewInfos);
            if (preViewIds.length === 0 && viewIds.length > 0) {
                this.onViewGroupCreate();
            }
            if (!this.getWhetherAllViewsCreated(preViewIds, prevProps.viewInfos, prevProps.useDataSources) && this.getWhetherAllViewsCreated(viewIds, this.props.viewInfos, this.props.useDataSources)) {
                const views = this.getViews(viewIds);
                this.onViewsCreate(views);
            }
            const preActiveViewId = this.getActiveViewId(prevProps.useMapWidgetId, prevProps.viewInfos);
            const activeViewId = this.getActiveViewId(this.props.useMapWidgetId, this.props.viewInfos);
            if (preActiveViewId !== activeViewId) {
                this.onActiveViewChange(preActiveViewId);
            }
        }
        else {
            // useMapWidgetId changed
            const preActiveViewId = this.getActiveViewId(prevProps.useMapWidgetId, prevProps.viewInfos);
            this.checkPropCallbacksForCurrentMapWidgetId(preActiveViewId);
        }
    }
    /**
     * This method is called when the component is mounted or props.useMapWidgetId updates
     * @param preActiveViewId
     */
    checkPropCallbacksForCurrentMapWidgetId(preActiveViewId) {
        const { useMapWidgetId, viewInfos, useDataSources } = this.props;
        const viewIds = this.getViewIdsFromMapWidgetId(useMapWidgetId, viewInfos);
        if (viewIds.length > 0) {
            this.onViewGroupCreate();
        }
        if (this.getWhetherAllViewsCreated(viewIds, viewInfos, useDataSources)) {
            const views = this.getViews(viewIds);
            this.onViewsCreate(views);
        }
        const activeViewId = this.getActiveViewId(useMapWidgetId, viewInfos);
        if (preActiveViewId !== activeViewId) {
            this.onActiveViewChange(preActiveViewId);
        }
    }
    render() {
        if (!this.props.useMapWidgetId || !this.props.viewInfos || !this.props.children) {
            return null;
        }
        const viewIds = this.getViewIdsFromMapWidgetId(this.props.useMapWidgetId, this.props.viewInfos);
        const views = this.getViews(viewIds);
        return typeof this.props.children === 'function'
            ? this.props.children(views)
            : this.props.children;
    }
}
const mapStateToProps = (state, ownProps) => {
    var _a, _b, _c;
    const s = (_a = state.appStateInBuilder) !== null && _a !== void 0 ? _a : state;
    return {
        viewInfos: s.jimuMapViewsInfo,
        useDataSources: (_c = (_b = s.appConfig) === null || _b === void 0 ? void 0 : _b.widgets[ownProps.useMapWidgetId]) === null || _c === void 0 ? void 0 : _c.useDataSources
    };
};
/**
 * A React component that makes it easy to use the `JimuMapView` instance from the map widget.
 * In most cases, you can pass in `useMapWidgetIds`, and use `onViewsCreate`, `onActiveViewChange` to get callback from the `JimuMapViewComponent`.
 */
const JimuMapViewComponent = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)(_JimuMapViewComponent);


/***/ }),

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

/***/ "./jimu-arcgis/lib/extensions/dependency-extension.ts":
/*!************************************************************!*\
  !*** ./jimu-arcgis/lib/extensions/dependency-extension.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISDataSourceFactoryUriExtension: () => (/* binding */ ArcGISDataSourceFactoryUriExtension),
/* harmony export */   ArcGISDependencyDefineExtension: () => (/* binding */ ArcGISDependencyDefineExtension)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-sources/arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
/* harmony import */ var _mapview_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mapview-manager */ "./jimu-arcgis/lib/mapview-manager.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const { loadModules, resolveModuleFullPath } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader;
const { getPortalProxyUrl, getStandardPortalUrl, isAGOLDomain, isSamePortalUrl, getPlatformUrlByOrgUrl } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils;
const { normalize, getFolder, getFixedRootPath } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils;
// These modules are required for init
let OAuthInfo;
let IdentityManager;
let EsriConfig;
let EsriIntl;
let EsriError;
class ArcGISDependencyDefineExtension {
    constructor() {
        this.id = 'arcgis-dependency-define';
    }
    getDependencyKey() {
        return 'jimu-arcgis';
    }
    getResources() {
        if (!this.themeLoadObserver) {
            this.themeLoadObserver = jimu_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeStore.subscribe(this.onCurrentThemeLoad.bind(this));
        }
        let apiUrl = window.jimuConfig.arcgisJsApiUrl;
        if ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().queryObject.apiurl) {
            apiUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().queryObject.apiurl;
            if (!this.checkApiUrl(apiUrl)) {
                console.log('Bad apiurl.', apiUrl);
                return;
            }
        }
        if (!/\/$/.test(apiUrl)) {
            apiUrl = apiUrl + '/';
        }
        window.jimuConfig.arcgisJsApiUrl = apiUrl;
        const dependencies = [{
                url: `${apiUrl}init.js`
            }];
        if ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme)()) {
            if ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme)().darkTheme) {
                document.body.classList.add('calcite-mode-dark');
                dependencies.push({ url: this.getAPIThemeUrl(apiUrl, true) });
            }
            else {
                dependencies.push({ url: this.getAPIThemeUrl(apiUrl, false) });
            }
        }
        const dojoModules = `${getFixedRootPath()}arcgis-amd-packages/`;
        window.dojoConfig = {
            packages: [
                // arcgis-charts
                { name: 'arcgis-charts-js', location: dojoModules + 'arcgis-charts-js', main: 'index' },
                { name: 'arcgis-charts-shared-utils', location: dojoModules + 'arcgis-charts-shared-utils', main: 'index' },
                { name: 'arcgis-charts-components', location: dojoModules + 'arcgis-charts-components', main: 'index' },
                // arcgis-analysis
                { name: 'analysis-components', location: dojoModules + 'analysis-components', main: 'index' },
                { name: 'analysis-core', location: dojoModules + 'analysis-core', main: 'index' },
                { name: 'analysis-shared-utils', location: dojoModules + 'analysis-shared-utils', main: 'index' },
                { name: 'analysis-raster-function-utils', location: dojoModules + 'analysis-raster-function-utils', main: 'index' },
                { name: 'analysis-tool-app', location: dojoModules + 'analysis-tool-app', main: 'index' }
            ]
        };
        return [{
                url: 'jimu-arcgis',
                dependencies: dependencies
            }];
    }
    postInit() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initModules();
            this.initToRegistOAuthForMainPortalAndAGOL();
            const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
            EsriIntl.setLocale((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.locale);
            EsriConfig.request.proxyUrl = getPortalProxyUrl(portalUrl);
            this.initInterceptor();
            EsriConfig.portalUrl = portalUrl;
            const geometryServiceUrl = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalSelf) === null || _a === void 0 ? void 0 : _a.helperServices) === null || _b === void 0 ? void 0 : _b.geometry) === null || _c === void 0 ? void 0 : _c.url;
            if (geometryServiceUrl) {
                EsriConfig.geometryServiceUrl = geometryServiceUrl;
            }
            // set to the trustedServers, must be called before all portal requests by js-api.
            this.addToTrustedServers();
            // replace 'get credential' method for two purposes:
            // 1, in order to prompt dialog to set clientId, only take effect on builder env.
            //    online edition doesn't need to do this.
            // 2, check credental for banner list
            if ((window.jimuConfig.isBuilder || window.jimuConfig.isInBuilder) &&
                (window.jimuConfig.isDevEdition || window.jimuConfig.isInPortal)) {
                this.replaceGetCredential();
            }
            else {
                this.replaceGetCredential(false);
            }
        });
    }
    initModules() {
        return __awaiter(this, void 0, void 0, function* () {
            [IdentityManager, OAuthInfo, EsriConfig, EsriIntl, EsriError] = yield loadModules(['esri/identity/IdentityManager', 'esri/identity/OAuthInfo', 'esri/config', 'esri/intl', 'esri/core/Error']);
        });
    }
    initInterceptor() {
        var _a;
        // Register default cacheable url.
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.registerCacheableUrl(serviceInfoCacheableUrl);
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.registerCacheableUrl(communitySelfCacheableUrl);
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.registerCacheableUrl(itemInfoAndDataCacheableUrl);
        (_a = EsriConfig.request.interceptors) === null || _a === void 0 ? void 0 : _a.push({
            before: (params) => {
                var _a, _b, _c;
                if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.isURLCacheable(params.url, (_a = params.requestOptions) === null || _a === void 0 ? void 0 : _a.query)) {
                    return;
                }
                const requestCache = jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.getRequestCache(params.url, (_b = params.requestOptions) === null || _b === void 0 ? void 0 : _b.query);
                if (requestCache) {
                    return requestCache.promise;
                }
                else {
                    const requestCache = new jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExternalResolvablePromise();
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.setRequestCache(params.url, (_c = params.requestOptions) === null || _c === void 0 ? void 0 : _c.query, requestCache);
                }
            },
            after: (res) => {
                var _a, _b, _c, _d, _e, _f;
                if (!res || !res.url) {
                    return;
                }
                if (res.url.indexOf('/rest/info') && ((_a = res.data) === null || _a === void 0 ? void 0 : _a.owningSystemUrl)) {
                    // the url is a hosted service url, regists OAuth info.
                    this.registOAuthInfo(res.data.owningSystemUrl);
                }
                if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.isURLCacheable(res.url, (_b = res.requestOptions) === null || _b === void 0 ? void 0 : _b.query)) {
                    return;
                }
                const requestCache = jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.getRequestCache(res.url, (_c = res.requestOptions) === null || _c === void 0 ? void 0 : _c.query);
                if (requestCache) {
                    requestCache.resolve(res.data);
                    // Remove the cache when it has res.data.editingInfo.
                    if ((_d = res.data) === null || _d === void 0 ? void 0 : _d.editingInfo) {
                        const allDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSources();
                        const foundDss = Object.keys(allDss)
                            .filter(dsId => allDss[dsId].url === res.url)
                            .map(dsId => allDss[dsId]);
                        if (foundDss.length > 0) {
                            // may find ds that is not feature layer
                            if (foundDss.find(ds => ds.getAutoRefreshInterval && ds.getAutoRefreshInterval() > 0)) {
                                // Only remove when the auto refresh is enabled on any DS
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.deleteRequestCache(res.url, (_e = res.requestOptions) === null || _e === void 0 ? void 0 : _e.query);
                            }
                        }
                        else { // if we don't find DS by url, we still remove the cache, just in case the DS may not have url or the layer is not supported by DS.
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.deleteRequestCache(res.url, (_f = res.requestOptions) === null || _f === void 0 ? void 0 : _f.query);
                        }
                    }
                }
            },
            error: (err) => {
                var _a, _b, _c, _d, _e, _f;
                const requestCache = jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.getRequestCache((_a = err === null || err === void 0 ? void 0 : err.details) === null || _a === void 0 ? void 0 : _a.url, (_c = (_b = err === null || err === void 0 ? void 0 : err.details) === null || _b === void 0 ? void 0 : _b.requestOptions) === null || _c === void 0 ? void 0 : _c.query);
                if (requestCache) {
                    requestCache.reject(err);
                    // remove the error request so it has a chance to retry.
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.deleteRequestCache((_d = err === null || err === void 0 ? void 0 : err.details) === null || _d === void 0 ? void 0 : _d.url, (_f = (_e = err === null || err === void 0 ? void 0 : err.details) === null || _e === void 0 ? void 0 : _e.requestOptions) === null || _f === void 0 ? void 0 : _f.query);
                }
            }
        });
    }
    replaceGetCredential(needToUseDialogToSetClientId = true) {
        const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        const originalGetCredential = IdentityManager.getCredential;
        let getCredentialPromise;
        IdentityManager.getCredential = (url, options) => {
            try {
                const isServiceUrl = !!sessionManager.getServerKeyFromUrl(url);
                const clientId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getClientIdByUrl(url);
                const isPortalSelfUrl = (url === null || url === void 0 ? void 0 : url.indexOf('/sharing/rest/portals/self')) > 0;
                const noPermissionResourceInfo = sessionManager.getNoPermissionResourceInfoByUrl(url);
                if (noPermissionResourceInfo) {
                    // if the user has signed in without permission, or is actively canceled by user, no longer pop sign-in dialog.
                    const noPermissionCredential = IdentityManager.findCredential(url);
                    if (noPermissionCredential) {
                        //cannot return credential from IM.findCredential() directly,
                        //otherwise it will cause esri request to repeated login verification if current credential no permission for this resource.
                        return originalGetCredential.call(IdentityManager, url, options);
                    }
                    else {
                        return Promise.reject(new EsriError('identity-manager:user-aborted', 'ABORTED'));
                    }
                }
                let dialogPaddingDeffered = null;
                // @ts-expect-error
                if ((options === null || options === void 0 ? void 0 : options.prompt) && !IdentityManager.findCredential(url) && !sessionManager.getSessionByUrl(url)) {
                    // because the credential doesn't have resource info if it's snyced from session manager, so IM.findCredential() cannot recorgnize the url before IM.getCredential()
                    // so need to check whether the session already existed in the session manager.
                    dialogPaddingDeffered = sessionManager.tryToPendingSignInDialog(url);
                }
                if (dialogPaddingDeffered) {
                    // sign-in dialog for current service is opening, pending sign-in
                    getCredentialPromise = dialogPaddingDeffered.promise.then(() => {
                        // cannot return credential from IM.findCredential() directly, otherwise it will cause esri request to repeated login verification
                        // IM.getCredential() will register the url to credential.resources, then IM.findCredential() can recorgnize this credential.
                        return originalGetCredential.call(IdentityManager, url, options);
                    });
                }
                else if (isServiceUrl ||
                    clientId ||
                    // @ts-expect-error
                    !(options === null || options === void 0 ? void 0 : options.prompt) ||
                    IdentityManager.findCredential(url) ||
                    IdentityManager.findOAuthInfo(url) ||
                    !needToUseDialogToSetClientId) {
                    // if it's a serveice url:
                    //  unfederated service: use original method directly.
                    //  federated serveice: ues original method here,
                    //                      because it's owning system portal url will finally be called by ‘get credential',
                    //                      so we just need to use replaced method to handle it's owning system portal url.
                    getCredentialPromise = originalGetCredential.call(IdentityManager, url, options);
                }
                else {
                    const portalUrl = getStandardPortalUrl(url);
                    getCredentialPromise = sessionManager.useDialogToSetClientIdToConnectiosOfAppConfigAndSignIn(portalUrl).then(() => {
                        // register oauth info
                        this.registOAuthInfo(portalUrl);
                        return originalGetCredential.call(IdentityManager, url, options);
                    }).catch(() => {
                        return originalGetCredential.call(IdentityManager, url, options);
                    });
                }
                return getCredentialPromise.then((credential) => {
                    if (!isPortalSelfUrl) {
                        // because js-api try accessing 'portals self' with token, so don't need to check permission for request 'portls self'
                        // add to banner list.
                        if (sessionManager.getServerKeyFromUrl(url)) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchArcGISServerInfo(url).then(serverInfo => { sessionManager.checkSessionPermissionForUrl(url, credential.token, credential.userId, serverInfo === null || serverInfo === void 0 ? void 0 : serverInfo.owningSystemUrl); });
                        }
                        else {
                            sessionManager.checkSessionPermissionForUrl(url, credential.token, credential.userId, '');
                        }
                    }
                    return credential;
                }).catch(error => {
                    // release pending sign-in dialog with error
                    sessionManager.releasePendingSignIn(url, error);
                    // handle sign-in dialog abord situation
                    if (error.name === 'identity-manager:user-aborted') {
                        // sign-in for accessing url has been canceled
                        if (sessionManager.getServerKeyFromUrl(url)) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchArcGISServerInfo(url).then(serverInfo => { sessionManager.addToNoPermissionResourceInfoList(url, '', jimu_core__WEBPACK_IMPORTED_MODULE_0__.SignInErrorCode.SignInCanceled, false, serverInfo === null || serverInfo === void 0 ? void 0 : serverInfo.owningSystemUrl); });
                        }
                        else {
                            sessionManager.addToNoPermissionResourceInfoList(url, '', jimu_core__WEBPACK_IMPORTED_MODULE_0__.SignInErrorCode.SignInCanceled, false);
                        }
                    }
                    else if (error.name === 'identity-manager:not-authenticated') {
                        // use 'not authenticated' error to handle 498 error from js-api
                        // Redirect to error page if encounters 498 error on main portal
                        sessionManager.handleInvalidToken(url);
                    }
                    // should reject error to js-api
                    return Promise.reject(error);
                });
            }
            catch (error) {
                console.warn('replaced "getCredential" method error', error);
                return originalGetCredential.call(IdentityManager, url, options);
            }
        };
    }
    initToRegistOAuthForMainPortalAndAGOL() {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
            const { portalUrl, isWebTier } = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            if (!isWebTier) {
                if (isAGOLDomain(portalUrl)) {
                    // use platform url to register OAuth info in order to support switch user between different org.
                    this.registOAuthInfo(getPlatformUrlByOrgUrl(portalUrl));
                }
                else {
                    this.registOAuthInfo(portalUrl);
                }
            }
            // for online edition, will register with default client id 'ExperienceBuilder'
            // for portal or dev edition, will not register oauth info if the client id does not set to connections of app config.
            this.registOAuthInfo('https://devext.arcgis.com');
            this.registOAuthInfo('https://qaext.arcgis.com');
            this.registOAuthInfo('https://www.arcgis.com');
            // this should be the first time the IdentityManager has been loaded in the app
            // synchronize session between arcgis-rest-js and JSAPI
            this.syncToArcgisJSAPI(sessionManager.getSessions());
            sessionManager.addSessionChangeListener(this.onSessionChangedCallback.bind(this));
            this.listeningJsApiSignIn();
        });
    }
    /**
     * use after initModules for loading OAuthInfo/ServerInfo/IdentityManager
     */
    registOAuthInfo(portalUrl, clientId) {
        let oAuthInfo = IdentityManager.findOAuthInfo(portalUrl);
        clientId = clientId || jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getClientIdByUrl(portalUrl);
        if (!oAuthInfo && clientId) {
            const oauthReturnUrl = normalize(`${window.location.origin}${getFolder(resolveModuleFullPath('jimu-arcgis'))}/oauth-callback.html`);
            // let oauthReturnUrl = window.location.protocol + '//' + window.location.host + '/jimu-arcgis/oauth-callback.html';
            // OAuth will lose 'persist' query parameter if set expiration to two weeks exectly.
            oAuthInfo = new OAuthInfo({
                appId: clientId,
                expiration: 14 * 24 * 60 - 1,
                portalUrl: portalUrl,
                authNamespace: '/',
                popup: true,
                flowType: 'auto',
                popupCallbackUrl: oauthReturnUrl
            });
            IdentityManager.registerOAuthInfos([oAuthInfo]);
        }
    }
    /**
     * get flow type for registering OAuth info.
     *  return 'authorization-code' if accessing AGOL or ArcGIS Enterprise version 10.9 or higher;
     *  return 'implicit' if accessing ArcGIS Enterprise version prior to 10.9.
     */
    getFlowTypeForRegisteringOAuthInfo(portalUrl) {
        var _a;
        let portalVersion;
        if (isAGOLDomain(portalUrl)) {
            // AGOL
            return 'authorization-code';
        }
        else if (isSamePortalUrl(portalUrl, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl)) {
            // main portal
            portalVersion = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalSelf) === null || _a === void 0 ? void 0 : _a.currentVersion;
        }
        else {
            const portalConnectionInfo = jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getConnectionInfoFromAppConfig(portalUrl);
            portalVersion = portalConnectionInfo === null || portalConnectionInfo === void 0 ? void 0 : portalConnectionInfo.portalVersion;
        }
        if (portalVersion && Number(portalVersion) >= 8.4) {
            return 'authorization-code';
        }
        else {
            return 'auto';
        }
    }
    /**
     * if the url is portal url, remove the portal credential and all server credentials belonging to the same portal
     * if the url is service url, remove it's owning system portal credential and all server credentials belonging to the same owning system url
     * @ignore
     */
    removePortalAndItsServerCredentials(url, userId, owningSystemUrl) {
        const credential = IdentityManager.findCredential(url, userId);
        const removedCredentials = [];
        let server;
        // @ts-expect-error
        if ((credential === null || credential === void 0 ? void 0 : credential.scope) === 'portal') {
            // will remove all server credentials of current portal
            server = credential.server;
        }
        else {
            // will remove all server credentials belonging to the same owning system url
            server = owningSystemUrl;
        }
        // @ts-expect-error
        IdentityManager.credentials.forEach(credential => {
            if (credential.scope === 'server') {
                // @ts-expect-error
                const serverInfo = IdentityManager.serverInfos.find(serverInfo => serverInfo.server === credential.server);
                if (server === (serverInfo === null || serverInfo === void 0 ? void 0 : serverInfo.owningSystemUrl)) {
                    removedCredentials.push(credential);
                }
            }
            else {
                if (server === credential.server) {
                    removedCredentials.push(credential);
                }
            }
        });
        removedCredentials.forEach(credential => (credential === null || credential === void 0 ? void 0 : credential.server) && credential.destroy());
    }
    addCredentialToSessionManger(credential) {
        const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        if (credential.scope === 'server' && credential.server) {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchArcGISServerInfo(credential.server).then((serverInfo) => __awaiter(this, void 0, void 0, function* () {
                sessionManager.addFromArcGisJSCredential(credential, serverInfo);
                return credential;
            }));
        }
        else {
            sessionManager.addFromArcGisJSCredential(credential, null);
            return Promise.resolve(credential);
        }
    }
    /**
     * use after initModules
     */
    listeningJsApiSignIn() {
        IdentityManager.on('credential-create', ({ credential }) => {
            this.addCredentialToSessionManger(credential).then((credential) => {
                var _a;
                // release pending sign-in dialog after sync to session manager
                let server;
                if (credential.scope === 'server') {
                    server = ((_a = credential.resources) === null || _a === void 0 ? void 0 : _a.length) > 0 ? credential.resources[0] : `${credential.server}/rest/services`;
                }
                else {
                    server = credential.server;
                }
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().releasePendingSignIn(server);
            });
            credential.on('token-change', () => {
                this.addCredentialToSessionManger(credential);
            });
        });
    }
    syncToArcgisJSAPI(sessions) {
        var _a;
        // add credentials
        sessions && sessions.forEach(session => {
            var _a;
            // The purpose of using '/rest/services' subfix is to set credential scope to 'server'.
            const server = session.server ? `${session.server}/rest/services` : session.portal;
            const credential = IdentityManager.findCredential(server);
            if (!credential || session.username !== credential.userId) {
                IdentityManager.registerToken({
                    server: server,
                    token: session.token,
                    expires: (_a = session.tokenExpires) === null || _a === void 0 ? void 0 : _a.getTime(),
                    ssl: session.ssl,
                    userId: session.username
                });
                if (session.server) {
                    // the serverInfo of IdentityManager is not correct if sync the credential from sessionManager
                    // update the corresponding server info
                    const serverInfo = IdentityManager.findServerInfo(session.server);
                    if (serverInfo) {
                        // @ts-expect-error
                        serverInfo.owningSystemUrl = getStandardPortalUrl(session.portal);
                        serverInfo.tokenServiceUrl = '';
                        serverInfo.adminTokenServiceUrl = '';
                        serverInfo.hasPortal = true;
                    }
                }
            }
        });
        // remove credentials
        const removedCredentials = [];
        const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        // @ts-expect-error
        (_a = IdentityManager.credentials) === null || _a === void 0 ? void 0 : _a.forEach(credential => {
            const server = credential.scope === 'server' ? `${credential.server}/rest/services` : credential.server;
            const sessionKeyOfCredential = sessionManager.getSessionKeyFromUrl(server);
            const session = sessions.find(session => {
                const sessionKeyOfSession = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getSessionKeyFromSession(session);
                return sessionKeyOfCredential === sessionKeyOfSession && credential.userId === session.username;
            });
            if (!session) {
                removedCredentials.push(credential);
            }
        });
        removedCredentials.forEach(credential => credential.destroy());
    }
    onSessionChangedCallback(sessions, reasonType) {
        if (reasonType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionChangedReasonType.ArcGISJSSync)
            return;
        this.syncToArcgisJSAPI(sessions);
    }
    addToTrustedServers() {
        const { portalUrl, isWebTier } = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
        const trustedServers = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getTrustedServers();
        if (isWebTier) {
            EsriConfig.request.trustedServers.push(portalUrl);
        }
        trustedServers.forEach(server => {
            if (!EsriConfig.request.trustedServers.includes(server)) {
                EsriConfig.request.trustedServers.push(server);
            }
        });
    }
    onCurrentThemeLoad(themeModule, fromTheme2) {
        if (!themeModule || fromTheme2) {
            return;
        }
        if (this.checkAPITheme(this.getAPIThemeUrl(window.jimuConfig.arcgisJsApiUrl, themeModule.theme.darkTheme))) {
            return;
        }
        this.removeApiThemeStyle(this.getAPIThemeUrl(window.jimuConfig.arcgisJsApiUrl, !themeModule.theme.darkTheme));
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule(this.getAPIThemeUrl(window.jimuConfig.arcgisJsApiUrl, themeModule.theme.darkTheme));
        if (themeModule.theme.darkTheme && !document.body.classList.contains('calcite-mode-dark')) {
            document.body.classList.add('calcite-mode-dark');
        }
        else {
            document.body.classList.remove('calcite-mode-dark');
        }
        // MapView adds calcite-theme-* CSS class into its UI container DOM, which causes the inner content does not fit the theme change
        // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/44871
        // The workaround here is remove/add the calcite class.
        _mapview_manager__WEBPACK_IMPORTED_MODULE_3__.MapViewManager.getInstance().getAllJimuMapViewIds().forEach(jmvId => {
            var _a, _b, _c;
            const mv = _mapview_manager__WEBPACK_IMPORTED_MODULE_3__.MapViewManager.getInstance().getJimuMapViewById(jmvId);
            const mapContainer = (_a = mv.view) === null || _a === void 0 ? void 0 : _a.ui.container;
            if (!mapContainer) {
                return;
            }
            if (((_c = (_b = themeModule.theme) === null || _b === void 0 ? void 0 : _b.darkTheme) !== null && _c !== void 0 ? _c : themeModule.variables.darkTheme) && !mapContainer.classList.contains('calcite-mode-dark')) {
                mapContainer.classList.remove('calcite-theme-light');
                mapContainer.classList.add('calcite-mode-dark');
            }
            else {
                mapContainer.classList.remove('calcite-mode-dark');
                mapContainer.classList.add('calcite-theme-light');
            }
        });
    }
    removeApiThemeStyle(themeUrl) {
        var _a;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.deleteModule(themeUrl);
        (_a = document.querySelector(`link[href="${themeUrl}"]`)) === null || _a === void 0 ? void 0 : _a.remove();
    }
    getAPIThemeUrl(apiUrl, isDarkTheme) {
        if (isDarkTheme) {
            return `${apiUrl}esri/themes/dark/main.css`;
        }
        else {
            return `${apiUrl}esri/css/main.css`;
        }
    }
    checkAPITheme(themeUrl) {
        return !!document.querySelector(`link[href="${themeUrl}"]`);
    }
    checkApiUrl(url) {
        if (window.env === 'development') {
            return true;
        }
        if (/^\/\//.test(url) || /^https?:\/\//.test(url)) {
            return /(?:[\w\-\_]+\.)+(?:esri|arcgis)\.com/.test(url); // api url must be in esri.com or arcgis.com
        }
        else {
            return true;
        }
    }
}
class ArcGISDataSourceFactoryUriExtension {
    constructor() {
        this.id = 'arcgis-ds-factory';
    }
    getFactoryUri(dataSourceType) {
        if (Object.keys(_data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.ArcGISDataSourceTypes).map(t => _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.ArcGISDataSourceTypes[t]).includes(dataSourceType)) {
            return 'jimu-arcgis/arcgis-data-source';
        }
    }
}
function serviceInfoCacheableUrl(url, query) {
    // cache service info
    const serviceInfoReg = /rest\/services\/(.+)\/(MapServer|FeatureServer|ImageServer)\/(\d+)\/?$/;
    return serviceInfoReg.test(url);
}
function communitySelfCacheableUrl(url, query) {
    // cache community/self
    return /sharing\/rest\/community\/self\/?$/.test(url);
}
function itemInfoAndDataCacheableUrl(url, query) {
    // cache item info and item data
    const keyword = 'sharing/rest/content/items/';
    const i = url.indexOf(keyword);
    if (i > -1) {
        const subUrl = url.substring(i + keyword.length);
        const parts = subUrl.split('/');
        if (parts.length > 0 && (parts.length === 1 || parts[parts.length - 1] === 'data')) { // is item info or item data URL
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "./jimu-arcgis/lib/init.ts":
/*!*********************************!*\
  !*** ./jimu-arcgis/lib/init.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.resolve(null);
    });
}


/***/ }),

/***/ "./jimu-arcgis/lib/mapview-manager.tsx":
/*!*********************************************!*\
  !*** ./jimu-arcgis/lib/mapview-manager.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapViewManager: () => (/* binding */ MapViewManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _views_jimu_map_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/jimu-map-view */ "./jimu-arcgis/lib/views/jimu-map-view.ts");
/* harmony import */ var _views_jimu_map_view_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/jimu-map-view-group */ "./jimu-arcgis/lib/views/jimu-map-view-group.ts");
/* harmony import */ var _data_sources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-sources */ "./jimu-arcgis/lib/data-sources/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * The `MapViewManager` is used to manage `JimuMapView`, including creating, getting, setting and destroying the `JimuMapView` instance.
 * Please always use `MapViewManager.getInstance()` to use this class. For example, to get a `JimuMapView`, you can use `MapViewManager.getInstance().getJimuMapViewById(dsId)`.
 * For widget development, `MapViewManager.getInstance()` in both the widget and the widget's setting return the same instance.
 *
 * When needing to make use of the `JimuMapView`, for ease of use, it is recommended to use the `JimuMapViewComponent` React component.
 */
class MapViewManager {
    constructor() {
        /** @ignore */
        this.jimuMapViewGroups = {};
    }
    static getInstance() {
        if (window.jimuConfig.isBuilder) {
            // The builder will use the app's map-view-manager, this means the builder can't have its own map-view-manager
            // so builder can't have map-view-manager, whenever use map-view-manager in builder will use app's map-view-manager
            return (window._appWindow && window._appWindow._mapViewManager);
        }
        if (!MapViewManager._instance) {
            MapViewManager._instance = new MapViewManager();
            window._mapViewManager = MapViewManager._instance;
        }
        return MapViewManager._instance;
    }
    /**
     * Returns the `JimuMapView` instance by id.
     */
    getJimuMapViewById(id) {
        const mapWidgetIds = Object.keys(this.jimuMapViewGroups);
        if (mapWidgetIds.length === 0) {
            return null;
        }
        else {
            for (let i = 0; i < mapWidgetIds.length; i++) {
                const tempMapWidgetId = mapWidgetIds[i];
                const jimuMapViewIds = Object.keys(this.jimuMapViewGroups[tempMapWidgetId].jimuMapViews);
                if (jimuMapViewIds.includes(id)) {
                    return this.jimuMapViewGroups[tempMapWidgetId].jimuMapViews[id];
                }
            }
            return null;
        }
    }
    /** @ignore
     * Get the `JimuMapViewGroup` given widget id.
    */
    getJimuMapViewGroup(mapWidgetId) {
        if (this.jimuMapViewGroups[mapWidgetId]) {
            return this.jimuMapViewGroups[mapWidgetId];
        }
        else {
            return null;
        }
    }
    /**
     * When starting the creation of the `JimuMapView` instance, this method will set the `JimuMapView` instance status as `LOADING`.
     * Upon creation, the status will change to `LOADED`. If an error occurs, the status will be set to `FAILED`.
     */
    createJimuMapView(jimuMapViewConstructorOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const jimuMapViewId = jimuMapViewConstructorOptions.mapWidgetId + '-' + jimuMapViewConstructorOptions.dataSourceId;
            if (this.getJimuMapViewById(jimuMapViewId)) {
                return yield Promise.resolve(this.getJimuMapViewById(jimuMapViewId));
            }
            const jimuMapView = new _views_jimu_map_view__WEBPACK_IMPORTED_MODULE_1__.JimuMapView(jimuMapViewConstructorOptions);
            this.addJimuMapView(jimuMapView);
            return yield jimuMapView.whenJimuMapViewLoaded();
        });
    }
    /** @ignore
     * Add a `JimuMapView` instance to the `JimuMapViewGroup`.
     */
    addJimuMapView(jimuMapView) {
        if (this.jimuMapViewGroups[jimuMapView.mapWidgetId]) {
            this.jimuMapViewGroups[jimuMapView.mapWidgetId].addJimuMapView(jimuMapView);
        }
        else {
            const jimuMapViewGroup = new _views_jimu_map_view_group__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewGroup(jimuMapView.mapWidgetId);
            jimuMapViewGroup.addJimuMapView(jimuMapView);
            this.jimuMapViewGroups[jimuMapView.mapWidgetId] = jimuMapViewGroup;
        }
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.jimuMapViewAdded(jimuMapView.id, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            id: jimuMapView.id,
            mapWidgetId: jimuMapView.mapWidgetId,
            dataSourceId: jimuMapView.dataSourceId,
            status: jimuMapView.status
        })));
    }
    /**
     * Updates the `JimuMapView` instance.
     */
    setJimuMapView(jimuMapView) {
        if (this.jimuMapViewGroups[jimuMapView.mapWidgetId]) {
            this.jimuMapViewGroups[jimuMapView.mapWidgetId].setJimuMapView(jimuMapView);
        }
        else {
            const jimuMapViewGroup = new _views_jimu_map_view_group__WEBPACK_IMPORTED_MODULE_2__.JimuMapViewGroup(jimuMapView.mapWidgetId);
            jimuMapViewGroup.addJimuMapView(jimuMapView);
            this.jimuMapViewGroups[jimuMapView.mapWidgetId] = jimuMapViewGroup;
        }
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.jimuMapViewUpdated(jimuMapView.id, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            id: jimuMapView.id,
            mapWidgetId: jimuMapView.mapWidgetId,
            dataSourceId: jimuMapView.dataSourceId,
            isActive: jimuMapView.isActive,
            status: jimuMapView.status
        })));
    }
    /**
     * Destroys the `JimuMapView` instance by `JimuMapView` id.
     */
    destroyJimuMapView(jimuMapViewId) {
        const removeJimuMapView = this.getJimuMapViewById(jimuMapViewId);
        removeJimuMapView && removeJimuMapView.destroy();
        const mapWidgetIds = Object.keys(this.jimuMapViewGroups);
        // eslint-disable-next-line
        if (mapWidgetIds.length === 0) {
        }
        else {
            for (let i = 0; i < mapWidgetIds.length; i++) {
                const tempMapWidgetId = mapWidgetIds[i];
                const jimuMapViewIds = Object.keys(this.jimuMapViewGroups[tempMapWidgetId].jimuMapViews);
                if (jimuMapViewIds.includes(jimuMapViewId)) {
                    delete this.jimuMapViewGroups[tempMapWidgetId].jimuMapViews[jimuMapViewId];
                    if (Object.keys(this.jimuMapViewGroups[tempMapWidgetId].jimuMapViews).length === 0) {
                        delete this.jimuMapViewGroups[tempMapWidgetId];
                    }
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.jimuMapViewRemoved(jimuMapViewId));
                    break;
                }
            }
        }
    }
    /**
     * Obtain all `JimuMapView` ids.
     */
    getAllJimuMapViewIds() {
        const ids = [];
        Object.keys(this.jimuMapViewGroups).forEach(mapWidgetId => {
            Object.keys(this.jimuMapViewGroups[mapWidgetId].jimuMapViews).forEach(mapViewId => {
                ids.push(mapViewId);
            });
        });
        return ids;
    }
    /**
     * @ignore
     * Get all `JimuMapView` instances.
     */
    getAllJimuMapViews() {
        const allJimuMapViews = [];
        Object.keys(this.jimuMapViewGroups).forEach(mapWidgetId => {
            const jimuMapViews = Object.values(this.jimuMapViewGroups[mapWidgetId].jimuMapViews);
            allJimuMapViews.push(...jimuMapViews);
        });
        return allJimuMapViews;
    }
    /**
     * Destroy all `JimuMapView` instances by ids.
     */
    destroyAllJimuMapViews() {
        this.getAllJimuMapViewIds().forEach(mapViewId => {
            this.destroyJimuMapView(mapViewId);
        });
    }
    getJimuLayerViewForClientQuery(layerDs) {
        var _a, _b, _c;
        if (!layerDs) {
            return null;
        }
        const layerDsId = layerDs.id;
        // webmap or webscene data source id
        const rootDsId = (_a = layerDs.getRootDataSource()) === null || _a === void 0 ? void 0 : _a.id;
        if (!rootDsId) {
            return null;
        }
        const widgetsJson = (_c = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _b === void 0 ? void 0 : _b.appConfig) === null || _c === void 0 ? void 0 : _c.widgets;
        if (!widgetsJson) {
            return null;
        }
        const jimuMapViews = this.getAllJimuMapViews().filter(jimuMapView => { var _a; return ((_a = jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d' && jimuMapView.dataSourceId === rootDsId; });
        for (const jimuMapView of jimuMapViews) {
            const mapWidgetId = jimuMapView.mapWidgetId;
            const mapWidgetConfig = widgetsJson[mapWidgetId] ? widgetsJson[mapWidgetId].config : {};
            const clientQueryDataSourceIds = (mapWidgetConfig === null || mapWidgetConfig === void 0 ? void 0 : mapWidgetConfig.clientQueryDataSourceIds) || [];
            if (clientQueryDataSourceIds.includes(rootDsId)) {
                // jimuMapView supports client query
                const jimuLayerView = jimuMapView.getJimuLayerViewByDataSourceId(layerDsId);
                if (jimuLayerView && jimuLayerView.clientQueryFeatures && (jimuLayerView.type === _data_sources__WEBPACK_IMPORTED_MODULE_3__.LayerTypes.FeatureLayer || jimuLayerView.type === _data_sources__WEBPACK_IMPORTED_MODULE_3__.LayerTypes.SceneLayer)) {
                    return jimuLayerView;
                }
                return null;
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/translations/default.ts":
/*!*************************************************!*\
  !*** ./jimu-arcgis/lib/translations/default.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    layerIsNotSupported: 'This layer type is not supported.'
});


/***/ }),

/***/ "./jimu-arcgis/lib/utils/basemap-utils.ts":
/*!************************************************!*\
  !*** ./jimu-arcgis/lib/utils/basemap-utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasemapGroup: () => (/* binding */ getBasemapGroup),
/* harmony export */   getBasemapItemsByGroupId: () => (/* binding */ getBasemapItemsByGroupId),
/* harmony export */   getLoadedBasemapList: () => (/* binding */ getLoadedBasemapList),
/* harmony export */   getOrgBasemaps: () => (/* binding */ getOrgBasemaps)
/* harmony export */ });
/* harmony import */ var _portal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-utils */ "./jimu-arcgis/lib/utils/portal-utils.ts");
/* harmony import */ var _arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arcgis-js-api-module-loader */ "./jimu-arcgis/lib/arcgis-js-api-module-loader.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// The logic for this file was migrated from the BasemapGallery widget.
function getOrgBasemaps() {
    return __awaiter(this, void 0, void 0, function* () {
        const modules = yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/portal/Portal', 'esri/Basemap']);
        const [Portal, Basemap] = modules;
        // load portal and get portalSelf
        const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_2__.getAppStore)().getState().portalUrl;
        const portal = new Portal({
            url: portalUrl
        });
        yield portal.load();
        const portalSelf = portal.sourceJSON;
        const orgDefaultGroup = yield getBasemapGroup(portal, portalSelf, false);
        const orgGroupId = orgDefaultGroup === null || orgDefaultGroup === void 0 ? void 0 : orgDefaultGroup.id;
        if (!orgGroupId) {
            return [];
        }
        const groupBasemapItems = yield getBasemapItemsByGroupId(portal, portalUrl, orgGroupId);
        return yield getLoadedBasemapList(Basemap, groupBasemapItems);
    });
}
function getBasemapGroup(portal, portalSelf, isByEsriDefault = false) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const esriDefaultGroupQuery = 'title:"ArcGIS Online Basemaps" AND owner:esri_en';
            const basemapGalleryGroupQuery = portalSelf.useVectorBasemaps && portalSelf.vectorBasemapGalleryGroupQuery ? portalSelf.vectorBasemapGalleryGroupQuery : portalSelf.basemapGalleryGroupQuery;
            const queryStr = isByEsriDefault ? esriDefaultGroupQuery : basemapGalleryGroupQuery;
            const groupsResponse = yield portal.queryGroups({
                query: queryStr,
                // eslint-disable-next-line
                // @ts-ignore
                disableExtraQuery: true // remove extra query "AND orgid:xxxx"
            });
            if (groupsResponse.results.length > 0) {
                return groupsResponse.results[0];
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log('Failed to get basemap groups', e);
            return null;
        }
    });
}
function getBasemapItemsByGroupId(portal, portalUrl, groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const webMapQueryStr = (0,_portal_utils__WEBPACK_IMPORTED_MODULE_0__.getItemQueryStringByTypes)(['Web Map']);
            const queryStr = `group:${groupId} AND ${webMapQueryStr}`;
            const searchResponse = yield portal.queryItems({
                start: 1,
                num: 100,
                sortField: 'title',
                sortOrder: 'asc',
                query: queryStr,
                // eslint-disable-next-line
                // @ts-ignore
                disableExtraQuery: true // remove extra query "AND orgid:xxxx"
            });
            const portalItems = (searchResponse === null || searchResponse === void 0 ? void 0 : searchResponse.results) ? searchResponse.results : [];
            return portalItems.map((item) => {
                const itemUrl = jimu_core__WEBPACK_IMPORTED_MODULE_2__.portalUrlUtils.getItemUrl(portalUrl, item.id);
                // The token will be appended when the image is rendered
                const thumbnailUrl = itemUrl + '/info/' + item.thumbnail;
                return {
                    id: item.id,
                    title: item.title,
                    thumbnailUrl: thumbnailUrl,
                    type: item.type
                };
            });
        }
        catch (e) {
            console.log('Failed to get basemap items by  group id', e);
            return [];
        }
    });
}
const getLoadedBasemapList = (Basemap, basemapItems) => {
    return Promise.all(basemapItems.map((item) => {
        const basemap = new Basemap({
            portalItem: {
                id: item.id
            }
        });
        // don't need try catch here, since basemap.load will return Promise.resolve(this), this will always be fulfilled
        // this load is just used for the basemap equal now (eg: compare active basemap and basemap in list, compare original basemap and basemap in list)
        // if resources load failed, BasemapGalleryItem widget will call basemap.load and handle the error, we need not to handle the error in our code
        return basemap.load();
    }));
};


/***/ }),

/***/ "./jimu-arcgis/lib/utils/feature-utils.ts":
/*!************************************************!*\
  !*** ./jimu-arcgis/lib/utils/feature-utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDataRecordSetToFeatureSet: () => (/* binding */ convertDataRecordSetToFeatureSet),
/* harmony export */   getDefaultSymbol: () => (/* binding */ getDefaultSymbol)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function convertDataRecordSetToFeatureSet(dsSet) {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
        'esri/Graphic',
        'esri/rest/support/FeatureSet'
    ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
        const [Graphic, FeatureSet] = modules;
        const featureSet = new FeatureSet();
        const geometryType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeRestAPIGeometryTypeToJSAPIGeometryType(dsSet.dataSource.getGeometryType());
        featureSet.geometryType = geometryType;
        featureSet.features = dsSet.records.map(record => {
            let graphic;
            const recordFeature = record.feature;
            if ((recordFeature === null || recordFeature === void 0 ? void 0 : recordFeature.declaredClass) === 'esri.Graphic') {
                graphic = recordFeature.clone();
            }
            else {
                recordFeature.geometry.type = geometryType;
                graphic = new Graphic({
                    geometry: recordFeature.geometry,
                    attributes: recordFeature.attributes
                });
            }
            return graphic;
        });
        return featureSet;
        // TODO featureSet.displayFieldName, featureSet.fields, featureSet.spatialReference
    })).catch((e) => {
        console.warn(e);
        return null;
    });
}
function getDefaultSymbol(type) {
    let symbol = null;
    switch (type) {
        case 'point':
            symbol = {
                type: 'esriSMS',
                color: [255, 255, 0, 150],
                outline: {
                    color: [255, 255, 0, 150],
                    width: 1
                }
            };
            break;
        case 'polyline':
            symbol = {
                type: 'esriSLS',
                color: [255, 255, 0, 150]
            };
            break;
        case 'polygon':
            symbol = {
                type: 'esriSFS',
                color: [255, 255, 0, 150],
                outline: {
                    color: [255, 255, 0, 150],
                    width: 1
                }
            };
            break;
    }
    return symbol;
}


/***/ }),

/***/ "./jimu-arcgis/lib/utils/portal-utils.ts":
/*!***********************************************!*\
  !*** ./jimu-arcgis/lib/utils/portal-utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDefaultBaseMapIsExist: () => (/* binding */ checkDefaultBaseMapIsExist),
/* harmony export */   getDefaultWebMap: () => (/* binding */ getDefaultWebMap),
/* harmony export */   getDefaultWebMapWithoutCache: () => (/* binding */ getDefaultWebMapWithoutCache),
/* harmony export */   getItemQueryStringByTypes: () => (/* binding */ getItemQueryStringByTypes)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arcgis-js-api-module-loader */ "./jimu-arcgis/lib/arcgis-js-api-module-loader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const webMapQueryStr = ' ' + getItemQueryStringByTypes(['Web Map']) + ' ';
let getDefaultWebMapPromise = null;
function checkDefaultBaseMapIsExist() {
    const portalSelf = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalSelf;
    if (portalSelf && portalSelf.defaultBasemap && portalSelf.defaultBasemap.baseMapLayers &&
        portalSelf.defaultBasemap.baseMapLayers[0] && portalSelf.defaultBasemap.baseMapLayers[0].url) {
        return true;
    }
    else {
        return false;
    }
}
function getDefaultWebMap(_portalUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        if (getDefaultWebMapPromise) {
            return getDefaultWebMapPromise;
        }
        getDefaultWebMapPromise = getDefaultWebMapWithoutCache(_portalUrl);
        return getDefaultWebMapPromise;
    });
}
function getDefaultWebMapWithoutCache(_portalUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const modules = yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/portal/Portal']);
        const PortalClass = modules[0];
        const portal = new PortalClass({
            url: _portalUrl
        });
        yield portal.load();
        const portalSelf = portal.sourceJSON;
        // Step1: try to get default webmap from portalSelf.defaultBasemap.id
        const id1 = portalSelf.defaultBasemap && portalSelf.defaultBasemap.id;
        const defaultExtent = portalSelf.defaultExtent;
        if (id1) {
            return {
                defaultMapId: id1,
                defaultExtent: defaultExtent
            };
        }
        // Step2: try to get default webmap from basemap gallery group
        const id2 = yield _getDefaultWebMapByBasemapGallery(_portalUrl, portalSelf, portal);
        if (id2) {
            const isId2Valid = yield validateWebMapVersion(portal, id2);
            if (isId2Valid) {
                return {
                    defaultMapId: id2,
                    defaultExtent: defaultExtent
                };
            }
        }
        // Step3: try to get default webmap by most viewed
        const id3 = yield _getMostNumViewsWebMap(portal);
        return {
            defaultMapId: id3,
            defaultExtent: defaultExtent
        };
    });
}
function validateWebMapVersion(portal, webmapId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modules = yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/portal/PortalItem']);
            const PortalItemClass = modules[0];
            const portalItem = new PortalItemClass({
                portal,
                id: webmapId
            });
            const itemData = yield portalItem.fetchData();
            if (itemData && itemData.version && typeof itemData.version === 'string') {
                // JS API only supports major webmap version >= '2'
                const majorVersion = parseFloat(itemData.version.split('.')[0]);
                return majorVersion >= 2;
            }
        }
        catch (e) {
            console.error('validate web map version error', webmapId, e);
            return false;
        }
        return false;
    });
}
function _getMostNumViewsWebMap(portal) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            start: 1,
            num: 1,
            f: 'json',
            query: webMapQueryStr + ' AND access:public AND owner:esri_en',
            sortField: 'num-views',
            sortOrder: 'desc'
        };
        return yield portal.queryItems(params).then((response) => __awaiter(this, void 0, void 0, function* () {
            let items = response.results;
            items = items.filter(item => {
                return item.type && item.type.toLowerCase() === 'web map';
            });
            if (items.length > 0) {
                const item = items[0];
                return Promise.resolve(item.id);
            }
            else {
                return Promise.resolve(null);
            }
        }));
    });
}
function _getDefaultWebMapByBasemapGallery(_portalUrl, _portalSelfInfo, portal) {
    return __awaiter(this, void 0, void 0, function* () {
        const title = _portalSelfInfo.defaultBasemap && _portalSelfInfo.defaultBasemap.title;
        const basemapGalleryGroupQuery = _portalSelfInfo.useVectorBasemaps && _portalSelfInfo.vectorBasemapGalleryGroupQuery ? _portalSelfInfo.vectorBasemapGalleryGroupQuery : _portalSelfInfo.basemapGalleryGroupQuery;
        return yield portal.queryGroups({
            f: 'json',
            query: basemapGalleryGroupQuery
        }).then((groupsResponse) => __awaiter(this, void 0, void 0, function* () {
            const groups = groupsResponse.results;
            if (groups.length > 0) {
                const group = groups[0];
                const queryStr = webMapQueryStr + ' AND group:' + group.id;
                return yield portal.queryItems({
                    start: 1,
                    num: 1,
                    f: 'json',
                    query: queryStr
                }).then((searchResponse) => __awaiter(this, void 0, void 0, function* () {
                    let items = searchResponse.results;
                    items = items.filter(item => { return item.type && item.type.toLowerCase() === 'web map'; });
                    let itemMatchTitle = null;
                    if (items.length > 0) {
                        itemMatchTitle = items.find(item => { var _a; return (_a = item.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(title === null || title === void 0 ? void 0 : title.toLowerCase()); });
                    }
                    if (itemMatchTitle) {
                        return Promise.resolve(itemMatchTitle.id);
                    }
                    else {
                        const queryStr2 = `${webMapQueryStr} AND owner:esri AND title:"${title}"`;
                        return portal.queryItems({
                            start: 1,
                            num: 1,
                            f: 'json',
                            query: queryStr2
                        }).then((searchResponse2) => __awaiter(this, void 0, void 0, function* () {
                            let items = searchResponse2.results;
                            items = items.filter(item => {
                                return item.type && item.type.toLowerCase() === 'web map';
                            });
                            if (items.length > 0) {
                                const item = items[0];
                                return Promise.resolve(item.id);
                            }
                            else {
                                return Promise.resolve(null);
                            }
                        }));
                    }
                }));
            }
        }));
    });
}
function getItemQueryStringByTypes(itemTypes) {
    let queryStr = '';
    const allTypes = getAllItemTypes();
    if (itemTypes && itemTypes.length > 0) {
        if (itemTypes.length > 0) {
            let validStr = '';
            for (let i = 0; i < itemTypes.length; i++) {
                const s = ' type:"' + itemTypes[i] + '" ';
                validStr += s;
                if (i !== itemTypes.length - 1) {
                    validStr += ' OR ';
                }
            }
            queryStr = ' ( ' + validStr + ' ) ';
            const sumAllTypes = itemTypes.concat(allTypes);
            const removedTypes = sumAllTypes.filter(removedType => {
                return itemTypes.every((itemType) => {
                    return !itemType.toLowerCase().includes(removedType.toLowerCase());
                });
            });
            for (let i = 0; i < removedTypes.length; i++) {
                // eslint-disable-next-line
                var s = ' -type:"' + removedTypes[i] + '" ';
                queryStr += s;
            }
        }
    }
    return queryStr;
}
function getAllItemTypes() {
    let allTypes = [];
    // Web Content
    const maps1 = ['Web Map', 'Web Scene', 'CityEngine Web Scene'];
    const layers1 = ['Feature Service', 'Map Service', 'Image Service', 'KML', 'WMS',
        'Feature Collection', 'Feature Collection Template', 'Geodata Service', 'Globe Service'];
    const tools1 = ['Geometry Service', 'Geocoding Service', 'Network Analysis Service',
        'Geoprocessing Service'];
    const applications1 = ['Web Mapping Application', 'Mobile Application', 'Code Attachment',
        'Operations Dashboard Add In', 'Operation View'];
    const datafiles1 = ['Symbol Set', 'Color Set', 'Shapefile', 'CSV', 'Service Definition',
        'Document Link', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel', 'PDF',
        'Image', 'Visio Document'];
    // Desktop Content
    const maps2 = ['Map Document', 'Map Package', 'Tile Package', 'ArcPad Package',
        'Explorer Map', 'Globe Document', 'Scene Document', 'Published Map', 'Map Template',
        'Windows Mobile Package'];
    const layers2 = ['Layer', 'Layer Package', 'Explorer Layer'];
    const tools2 = ['Geoprocessing Package', 'Geoprocessing Sample', 'Locator Package',
        'Rule Package'];
    const applications2 = ['Workflow Manager Package', 'Desktop Application',
        'Desktop Application Template', 'Code Sample', 'Desktop Add In', 'Explorer Add In'];
    allTypes = allTypes.concat(maps1).concat(layers1).concat(tools1)
        .concat(applications1).concat(datafiles1);
    allTypes = allTypes.concat(maps2).concat(layers2).concat(tools2).concat(applications2);
    return allTypes;
}


/***/ }),

/***/ "./jimu-arcgis/lib/utils/zoomto-utils.ts":
/*!***********************************************!*\
  !*** ./jimu-arcgis/lib/utils/zoomto-utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getExtentFromScale: () => (/* binding */ getExtentFromScale),
/* harmony export */   layerExtent: () => (/* binding */ layerExtent),
/* harmony export */   projectToSpatialReference: () => (/* binding */ projectToSpatialReference),
/* harmony export */   zoomTo: () => (/* binding */ zoomTo)
/* harmony export */ });
/* harmony import */ var _arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arcgis-js-api-module-loader */ "./jimu-arcgis/lib/arcgis-js-api-module-loader.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-sources/arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
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



let TileInfo = null;
// 'target' parameter can be one of the following:
//   * extent;
//   * graphics;
//   * arrayGraphics: __esri.Graphic[][];
//   * layer;
//   * object with a combination of {
//       layer:
//       extent: optional
//   }
//   * object with a combination of {
//       layer:
//       graphics: optional
//   }
// 'options' parameter {
//   scale: optional
//   queryParams: optional, if there is no graphics or extent for 'zoom to layer', use queryParams to query layer extent.
//   padding: optional, used to set view.padding
// }
function zoomTo(view, target, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!view) {
            return yield Promise.reject(new Error('Invalid target.'));
        }
        if (!target) {
            return yield Promise.reject(new Error('Invalid target.'));
        }
        if (!options) {
            options = {};
        }
        let Graphic;
        let Extent;
        let Layer;
        const modules = yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/Graphic',
            'esri/geometry/Extent',
            'esri/layers/Layer',
            'esri/layers/support/TileInfo'
        ]);
        [Graphic, Extent, Layer, TileInfo] = modules;
        const padding = options.padding;
        if (padding && view.padding) {
            view.padding.left = padding.left || 0;
            view.padding.right = padding.right || 0;
            view.padding.top = padding.top || 0;
            view.padding.bottom = padding.bottom || 0;
        }
        let error = null;
        try {
            if (target instanceof Extent) {
                yield zoomToExtent(view, target, options.scale);
            }
            else if (Array.isArray(target) && target.length && target[0] instanceof Graphic) {
                yield zoomToGraphics(view, target, options.scale);
            }
            else if (Array.isArray(target) && target.length && target[0] instanceof Array && target[0][0] instanceof Graphic) {
                yield zoomToArrayGraphics(view, target, options.scale);
            }
            else if (target instanceof Layer) {
                yield zoomToLayer(view, target, null, null, options);
            }
            else if (target.layer && target.layer instanceof Layer && target.extent && target.extent instanceof Extent) {
                yield zoomToLayer(view, target.layer, null, target.extent, options);
            }
            else if (target.layer && target.layer instanceof Layer && Array.isArray(target.graphics)) {
                if (target.graphics.length === 0) {
                    yield zoomToLayer(view, target.layer, null, null, options);
                }
                else if (target.graphics.length && target.graphics[0] instanceof Graphic) {
                    yield zoomToLayer(view, target.layer, target.graphics, null, options);
                }
            }
            else if (Array.isArray(target) && target.length && target[0] instanceof Layer) {
                yield zoomToLayers(view, target, options);
            }
            else {
                error = new Error('Invalid target.');
            }
        }
        catch (err) {
            // catch all zoom to errors and warning
            error = err;
        }
        // must reset view.padding after zoom
        if (view.padding) {
            view.padding.left = 0;
            view.padding.right = 0;
            view.padding.top = 0;
            view.padding.bottom = 0;
        }
        if (error) {
            console.warn('zoomTo warning', error);
            return Promise.reject(error);
        }
        else {
            return Promise.resolve();
        }
    });
}
function getExtentFromScale(viewSize, extent, scale, needToAdjustHeightToAspectRatio = true) {
    return __awaiter(this, void 0, void 0, function* () {
        return _getExtentFromScale(viewSize, extent, scale, needToAdjustHeightToAspectRatio);
    });
}
function zoomToGraphics(view, graphics, scale) {
    return __awaiter(this, void 0, void 0, function* () {
        if (view.type === '3d' && !scale) {
            // temporary solution
            // miss spatialReference conversion
            // graphics extent utils does not work well on 3d map view before. But sceneView.goTo() method works as ecpected
            return view.goTo(graphics);
        }
        return graphicsExtent(view, graphics).then((extent) => __awaiter(this, void 0, void 0, function* () {
            return zoomToExtent(view, extent, scale);
        })).catch((e) => __awaiter(this, void 0, void 0, function* () {
            return Promise.reject(e);
        }));
    });
}
function zoomToArrayGraphics(view, arrayGraphics, scale) {
    return __awaiter(this, void 0, void 0, function* () {
        if (arrayGraphics.length === 0) {
            return Promise.resolve();
        }
        else if (arrayGraphics.length === 1) {
            // use 'zoomToGraphics' if only one graphics in the 'arrayGraphics', because the extent utils does not
            // work well on 3d map view before. But sceneView.goTo() method works as ecpected .
            return zoomToGraphics(view, arrayGraphics[0], scale);
        }
        else {
            const promises = [];
            arrayGraphics.forEach(graphics => {
                promises.push(graphicsExtent(view, graphics).catch(() => null));
            });
            let fullExtent = null;
            return Promise.all(promises).then(extents => {
                extents.forEach(extent => {
                    if (extent) {
                        fullExtent = fullExtent ? fullExtent.union(extent) : extent;
                    }
                });
                return zoomToExtent(view, fullExtent, scale);
            });
        }
    });
}
function zoomToLayers(view, layers, options) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((layers === null || layers === void 0 ? void 0 : layers.length) === 1) {
            return zoomToLayer(view, layers[0], null, null, options);
        }
        else {
            let fullExtent = null;
            const layerExtentPromises = [];
            layers.forEach(layer => layerExtentPromises.push(layerExtent(view, layer, options === null || options === void 0 ? void 0 : options.queryParams)));
            return Promise.all(layerExtentPromises).then(extents => {
                extents.forEach(extent => {
                    if (extent) {
                        fullExtent = fullExtent ? fullExtent.union(extent) : extent;
                    }
                });
                return goTo(view, fullExtent);
            });
        }
    });
}
function zoomToLayer(view, layer, graphics, extent, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let scale = options === null || options === void 0 ? void 0 : options.scale;
        let targetExtent;
        if (extent && isValidExtent(extent)) {
            targetExtent = extent;
        }
        else if (graphics && graphics.length > 0) {
            targetExtent = yield graphicsExtent(view, graphics);
        }
        else {
            targetExtent = yield layerExtent(view, layer, options === null || options === void 0 ? void 0 : options.queryParams);
        }
        if (!isValidExtent(targetExtent)) {
            return Promise.reject(new Error('Invalid extent.'));
        }
        const resultExtents = yield projectToSpatialReference([targetExtent], view.spatialReference);
        targetExtent = resultExtents[0];
        if (scale) {
            return getExtentForScaleByView(view, targetExtent, scale).then((extent) => {
                return goTo(view, extent);
            });
        }
        if (view.type === '3d') {
            return view.goTo(targetExtent);
        }
        else {
            // @ts-expect-error
            let minScale = layer.minScale || 0;
            // @ts-expect-error
            let maxScale = layer.maxScale || 0;
            if (isSinglePointExtent(targetExtent)) {
                let targetScale = getTargetScale(view, minScale, maxScale, 3);
                if (targetScale) {
                    targetExtent = adjustExtentToAspectRatio(view, targetExtent);
                    return getExtentForScaleByView(view, targetExtent, targetScale).then((extent) => {
                        return goTo(view, extent);
                    });
                }
                else {
                    return goTo(view, targetExtent);
                }
            }
            else {
                targetExtent = adjustExtentToAspectRatio(view, targetExtent);
                return getScaleForExtent(view, targetExtent).then((expectScale) => {
                    if (minScale > 0 && expectScale > minScale) {
                        // zoom in
                        minScale = getScaleForNextTileLevel(view, minScale, true);
                        return getExtentForScaleByView(view, targetExtent, minScale).then((extent) => {
                            return goTo(view, extent);
                        });
                    }
                    else if (expectScale < maxScale) {
                        // zoom out
                        maxScale = getScaleForNextTileLevel(view, maxScale, false);
                        return getExtentForScaleByView(view, targetExtent, maxScale).then((extent) => {
                            return goTo(view, extent);
                        });
                    }
                    else {
                        return goTo(view, targetExtent);
                    }
                });
            }
        }
    });
}
function zoomToExtent(view, extent, scale) {
    return __awaiter(this, void 0, void 0, function* () {
        extent = extent.clone();
        // if(view.type === '3d' && !scale) {
        //  // temporary solution
        //  return view.goTo(extent);
        // }
        if (!isValidExtent(extent)) {
            return Promise.reject(new Error('Invalid extent.'));
        }
        return projectToSpatialReference([extent], view.spatialReference).then((resultExtents) => {
            let resultExtent = resultExtents && resultExtents[0];
            if (!resultExtent) {
                resultExtent = extent;
            }
            // @ts-expect-error: Unreachable code error
            if (isSinglePointExtent(resultExtent)) {
                // @ts-expect-error: Unreachable code error
                return convertSinglePointExtent(view, resultExtent);
            }
            else {
                return resultExtent;
            }
        }).then((extent) => {
            if (scale) {
                return getExtentForScaleByView(view, extent, scale, false);
            }
            else {
                return extent;
            }
        }).then((extent) => {
            return goTo(view, extent);
        }).catch((e) => __awaiter(this, void 0, void 0, function* () {
            return Promise.reject(e);
        }));
    });
}
function goTo(view, extent) {
    return new Promise((resolve, reject) => {
        // delay before updating of view turns true, 400ms is a temporary solution.
        setTimeout(() => {
            //// there is a conflict for zooming when the layer vier is updating, such as 'zoom to' and 'filter'.
            //// this is a temporary solution, it can reduce the frequency of the problem rather than solve it completely.
            //if (view.updating) {
            //  const handler = view.watch('updating', value => {
            //    if (!value) {
            //      view.goTo(extent).then(() => resolve()).catch(() => reject())
            //      handler.remove()
            //    }
            //  })
            //} else {
            //  view.goTo(extent).then(() => resolve()).catch(() => reject())
            //}
            view.goTo(extent).then(() => { resolve(); }).catch(() => { reject(); });
        }, 400);
    });
}
function isValidExtent(extent) {
    return extent && isValidValue(extent.xmin) &&
        isValidValue(extent.ymin) &&
        isValidValue(extent.xmax) &&
        isValidValue(extent.ymax);
}
function isValidValue(e) {
    if (e === 0) {
        return true;
    }
    return !!e;
}
function convertSinglePointExtent(view, extent) {
    return __awaiter(this, void 0, void 0, function* () {
        // const targetScale = getMedianScale(view, view.scale, 0);
        const targetScale = getTargetScale(view, 0, 0, 3);
        if (targetScale) {
            return yield getExtentForScaleByView(view, extent, targetScale);
        }
        else {
            return yield Promise.reject();
        }
    });
}
var SinglePointOffSet;
(function (SinglePointOffSet) {
    SinglePointOffSet[SinglePointOffSet["X"] = 0.0001] = "X";
    SinglePointOffSet[SinglePointOffSet["Y"] = 0.0001] = "Y";
})(SinglePointOffSet || (SinglePointOffSet = {}));
function isSinglePointExtent(extent) {
    if (extent.xmin + SinglePointOffSet.X === extent.xmax - SinglePointOffSet.X &&
        extent.ymin + SinglePointOffSet.Y === extent.ymax - SinglePointOffSet.Y) {
        return true;
    }
    else {
        return false;
    }
    // if(extent.width <= SinglePointOffSet.X * 2 && extent.height <= SinglePointOffSet.Y * 2) {
    //  return true;
    // } else {
    //  return false;
    // }
}
function graphicsExtent(view, graphicsParam, option = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let layer = graphicsParam && graphicsParam[0] && graphicsParam[0].layer;
        if (layer && layer.type === 'scene') {
            return yield graphicsExtentForSceneLayer(graphicsParam, layer, option.factor);
        }
        else {
            if (view.type === '3d') {
                return yield graphicsExtentBase(graphicsParam, 3);
            }
            else {
                return yield graphicsExtentBase(graphicsParam);
            }
        }
    });
}
function graphicsExtentForSceneLayer(graphicsParam, sceneLayer, factor) {
    return __awaiter(this, void 0, void 0, function* () {
        // can't get geometry from a graphic of sceneLayer.
        return yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/rest/support/Query'
        ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
            const [Query] = modules;
            if (sceneLayer) {
                const query = new Query();
                query.objectIds = graphicsParam.map(graphic => graphic.attributes[sceneLayer.objectIdField]);
                query.returnGeometry = true;
                return sceneLayer.queryExtent(query).then((result) => {
                    if (result.count === 1) {
                        // single graphic
                        return result.extent.expand(3.5);
                    }
                    else {
                        return result.extent.expand(2);
                    }
                });
            }
            else {
                return Promise.reject();
            }
        })).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.reject(e); }));
    });
}
function graphicsExtentBase(graphicsParam, factor) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/Graphic',
            'esri/geometry/Extent',
            'esri/geometry/Point'
        ]).then(modules => {
            let Graphic;
            let Extent;
            let Point;
            let ext = null;
            let graphics = graphicsParam;
            [Graphic, Extent, Point] = modules;
            try {
                if (graphics &&
                    graphics.length === 1 &&
                    graphics[0].geometry &&
                    graphics[0].geometry.declaredClass === 'esri.geometry.Multipoint' &&
                    // @ts-expect-error
                    graphics[0].geometry.points.length === 1) {
                    // @ts-expect-error
                    const mPoint = graphics[0].geometry.points[0];
                    const point = new Point({
                        x: mPoint[0],
                        y: mPoint[1],
                        spatialReference: graphics[0].geometry.spatialReference
                    });
                    graphics = [new Graphic({ geometry: point })];
                }
                if (graphics && graphics.length === 1 &&
                    graphics[0].geometry &&
                    graphics[0].geometry.declaredClass === 'esri.geometry.Point') {
                    const geometry = graphics[0].geometry;
                    ext = new Extent({
                        // @ts-expect-error
                        xmin: geometry.x - SinglePointOffSet.X,
                        // @ts-expect-error
                        ymin: geometry.y - SinglePointOffSet.Y,
                        // @ts-expect-error
                        xmax: geometry.x + SinglePointOffSet.X,
                        // @ts-expect-error
                        ymax: geometry.y + SinglePointOffSet.Y,
                        spatialReference: geometry.spatialReference
                    });
                }
                else if (graphics && graphics.length > 0) {
                    ext = _graphicsExtentBase(graphics, Extent);
                    if (ext) {
                        if (factor && factor > 0) {
                            ext = ext.expand(factor);
                        }
                    }
                }
                return ext;
            }
            catch (e) {
                return Promise.reject(e);
            }
        }).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.reject(e); }));
    });
}
function _graphicsExtentBase(graphics, Extent) {
    if (!graphics || !graphics.length) {
        return null;
    }
    let fullExtent = null;
    let index;
    let numGraphics = graphics.length;
    for (index = 0; index < numGraphics; index++) {
        const geometry = graphics[index].geometry;
        if (!geometry) {
            continue;
        }
        let extent = geometry.extent;
        if (!extent && geometry.type === 'point' && geometry.x != null && geometry.y != null) {
            extent = new Extent({
                xmin: geometry.x,
                ymin: geometry.y,
                xmax: geometry.x,
                ymax: geometry.y,
                spatialReference: geometry.spatialReference
            });
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
    if (!fullExtent || fullExtent.width < 0 || fullExtent.height < 0) {
        return null;
    }
    return fullExtent;
}
/**
 * lod:{level, resolution, scale}
 */
function getMapLods(view) {
    let lods = [];
    const baseLayers = view.map.basemap.baseLayers;
    baseLayers.forEach((baseLayer) => {
        if (baseLayer &&
            // @ts-expect-error
            baseLayer.tileInfo &&
            // @ts-expect-error
            baseLayer.tileInfo.lods &&
            // @ts-expect-error
            lods.length < baseLayer.tileInfo.lods.length) {
            // @ts-expect-error
            lods = baseLayer.tileInfo.lods;
        }
    });
    // lods = lods.map((lod) => lod.toJSON());
    if (lods.length === 0) {
        return TileInfo.create().lods;
    }
    else {
        return lods;
    }
}
// function getMedianScale(view: __esri.MapView | __esri.SceneView, minScale: number, maxScale: number): number {
//  return getTargetScale(view, minScale, maxScale, 2);
// }
function getTargetScale(view, minScale, maxScale, factor) {
    const mapLods = getMapLods(view);
    let targetScale;
    let migrationParam = 1;
    if (mapLods) {
        const visibleScales = [];
        const lessThanMaxScales = [];
        mapLods.forEach((mapLod) => {
            // eslint-disable-next-line
            if (minScale > 0 && mapLod.scale > minScale) {
            }
            else if (mapLod.scale < maxScale) {
                lessThanMaxScales.push(mapLod.scale);
            }
            else {
                visibleScales.push(mapLod.scale);
            }
        });
        visibleScales.reverse();
        let targetIndex;
        if (visibleScales.length >= 1) {
            migrationParam = lessThanMaxScales.length ? lessThanMaxScales.length / mapLods.length : 1;
            targetIndex = Math.floor((visibleScales.length - 1) / (factor / migrationParam));
            targetScale = visibleScales[targetIndex];
        }
        else {
            targetScale = null;
        }
    }
    else {
        if (minScale === 0) {
            targetScale = null;
        }
        else {
            targetScale = (minScale - maxScale) / factor;
        }
    }
    return targetScale;
}
function getScaleForNextTileLevel(view, scale, zoomIn) {
    let i;
    const mapLods = getMapLods(view);
    if (mapLods) {
        if (zoomIn) {
            for (i = 0; i < mapLods.length; i++) {
                if (mapLods[i].scale < scale) {
                    return mapLods[i].scale - 1;
                }
            }
            return mapLods[mapLods.length - 1].scale - 1;
        }
        else {
            for (i = mapLods.length - 1; i >= 0; i--) {
                if (mapLods[i].scale > scale) {
                    return mapLods[i].scale + 1;
                }
            }
            return mapLods[0].scale + 1;
        }
    }
    else {
        if (zoomIn) {
            return scale - 1;
        }
        else {
            return scale + 1;
        }
    }
    // eslint-disable-next-line
    return scale;
}
function adjustExtentToAspectRatio(view, extent) {
    const mapRatio = view.size[0] / view.size[1]; // width / height
    const extentRatio = extent.width / extent.height;
    const centerX = extent.center.x;
    const centerY = extent.center.y;
    if (extentRatio > mapRatio) {
        const yBuf = extent.width / mapRatio / 2;
        extent.ymin = centerY - yBuf;
        extent.ymax = centerY + yBuf;
    }
    else if (extentRatio < mapRatio) {
        const xBuf = extent.height * mapRatio / 2;
        extent.xmin = centerX - xBuf;
        extent.xmax = centerX + xBuf;
    }
    return extent;
}
function adjustHeightToAspectRatio(viewSize, extent) {
    // adjust the height of the extent so it won't mess up our scale calculations that we do with the width
    // make it a little smaller to be sure
    const buf = (extent.width * (viewSize.height / viewSize.width)) / 5;
    const centerY = extent.center.y;
    extent.ymin = centerY - buf;
    extent.ymax = centerY + buf;
    return extent;
}
function getExtentForScaleByView(view, extent, scale, needToAdjustHeightToAspectRatio = true) {
    return __awaiter(this, void 0, void 0, function* () {
        return _getExtentFromScale({ width: view.size[0], height: view.size[1] }, extent, scale, needToAdjustHeightToAspectRatio);
    });
}
function _getExtentFromScale(viewSize, extent, scale, needToAdjustHeightToAspectRatio = true) {
    return __awaiter(this, void 0, void 0, function* () {
        if (needToAdjustHeightToAspectRatio) {
            extent = adjustHeightToAspectRatio(viewSize, extent.clone());
        }
        return yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/config',
            'esri/geometry/support/WKIDUnitConversion'
        ]).then(modules => {
            let esriConfig;
            let WKIDUnitConversion;
            [esriConfig, WKIDUnitConversion] = modules;
            const mapWidth = viewSize.width;
            const inchesPerMeter = 39.37;
            const decDegToMeters = 20015077.0 / 180.0;
            const lookup = WKIDUnitConversion;
            let wkid;
            let wkt;
            let sr = extent.spatialReference;
            if (sr) {
                wkid = sr.wkid;
                wkt = sr.wkt;
            }
            let unitValue = null;
            if (wkid) {
                unitValue = lookup.values[lookup[wkid]];
            }
            else if (wkt && (wkt.search(/^PROJCS/i) !== -1)) {
                const result = /UNIT\[([^\]]+)\]\]$/i.exec(wkt);
                if (result && result[1]) {
                    unitValue = parseFloat(result[1].split(',')[1]);
                }
            }
            const newExtent = extent.expand(((scale * mapWidth) /
                ((unitValue || decDegToMeters) * inchesPerMeter * (esriConfig.screenDPI || 96))) /
                extent.width);
            return newExtent;
        }).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.reject(); }));
    });
}
function getScaleForExtent(view, extent) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/config',
            'esri/geometry/support/WKIDUnitConversion'
        ]).then(modules => {
            let esriConfig;
            let WKIDUnitConversion;
            [esriConfig, WKIDUnitConversion] = modules;
            let scale;
            const mapWidth = view.size[0];
            const inchesPerMeter = 39.37;
            const decDegToMeters = 20015077.0 / 180.0;
            const lookup = WKIDUnitConversion;
            let wkid;
            let wkt;
            let sr = extent.spatialReference;
            if (sr) {
                wkid = sr.wkid;
                wkt = sr.wkt;
            }
            let unitValue = null;
            if (wkid) {
                unitValue = lookup.values[lookup[wkid]];
            }
            else if (wkt && (wkt.search(/^PROJCS/i) !== -1)) {
                const result = /UNIT\[([^\]]+)\]\]$/i.exec(wkt);
                if (result && result[1]) {
                    unitValue = parseFloat(result[1].split(',')[1]);
                }
            }
            scale = (extent.width / mapWidth) * (unitValue || decDegToMeters) * inchesPerMeter * (esriConfig.screenDPI || 96);
            return scale;
        }).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.reject(); }));
    });
}
function layerExtent(view, layer, queryParams) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (!layer.loaded && layer.load) {
            yield layer.load();
        }
        // @ts-expect-error
        if (layer.sublayers || layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.LayerTypes.GroupLayer) {
            const sublayerExtentPromises = [];
            let fullExtent = null;
            // @ts-expect-error
            const sublayers = layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.LayerTypes.GroupLayer ? layer.layers : layer.sublayers;
            sublayers.forEach(sublayer => sublayerExtentPromises.push(layerExtent(view, sublayer, queryParams)));
            return Promise.all(sublayerExtentPromises).then(extents => {
                var _a;
                extents.forEach(extent => {
                    if (extent) {
                        fullExtent = fullExtent ? fullExtent.union(extent) : extent;
                    }
                });
                return fullExtent || ((_a = layer.fullExtent) === null || _a === void 0 ? void 0 : _a.clone());
            });
        }
        else {
            // @ts-expect-error
            if ((_a = layer.capabilities) === null || _a === void 0 ? void 0 : _a.query) {
                return yield queriableLayerExtent(view, layer, queryParams);
            }
            else {
                return yield Promise.resolve((_b = layer.fullExtent) === null || _b === void 0 ? void 0 : _b.clone());
            }
        }
    });
}
function queriableLayerExtent(view, layer, queryParams) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const defaultExtent = (_a = layer.fullExtent) === null || _a === void 0 ? void 0 : _a.clone();
        // @ts-expect-error
        const queryCapabilities = layer.capabilities.query;
        if (queryCapabilities) {
            return yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
                'esri/rest/support/Query',
                'esri/geometry/Extent'
            ]).then(modules => {
                let Query, Extent;
                [Query, Extent] = modules;
                const query = new Query();
                // @ts-expect-error
                query.where = (queryParams === null || queryParams === void 0 ? void 0 : queryParams.where) || (layer === null || layer === void 0 ? void 0 : layer.definitionExpression) || '1=1';
                query.outSpatialReference = view.spatialReference;
                query.returnGeometry = true;
                if (queryCapabilities.supportsExtent) {
                    // @ts-expect-error
                    return layer.queryExtent(query).then((result) => {
                        var _a, _b;
                        if (view.type === '3d') {
                            return result.extent;
                            // @ts-expect-error
                        }
                        else if (result.count === 1 && layer.geometryType === 'point' && ((_a = result === null || result === void 0 ? void 0 : result.extent) === null || _a === void 0 ? void 0 : _a.center)) {
                            const center = (_b = result === null || result === void 0 ? void 0 : result.extent) === null || _b === void 0 ? void 0 : _b.center;
                            const singlePointExtent = new Extent({
                                xmin: center.x - SinglePointOffSet.X,
                                ymin: center.y - SinglePointOffSet.Y,
                                xmax: center.x + SinglePointOffSet.X,
                                ymax: center.y + SinglePointOffSet.Y,
                                spatialReference: view.spatialReference
                            });
                            return singlePointExtent;
                        }
                        else {
                            return result.extent;
                        }
                    }).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.resolve(defaultExtent); }));
                    // @ts-expect-error
                }
                else if (layer.queryFeatures) {
                    // @ts-expect-error
                    return layer.queryFeatures(query).then((featureSet) => __awaiter(this, void 0, void 0, function* () {
                        return graphicsExtent(view, featureSet.features);
                    })).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.resolve(defaultExtent); }));
                }
                else {
                    return Promise.resolve(defaultExtent);
                }
            }).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.resolve(defaultExtent); }));
        }
        else {
            return Promise.resolve(defaultExtent);
        }
    });
}
function projectToSpatialReference(geometries, spatialReference) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
            'esri/geometry/Extent'
        ]).then(modules => {
            let Extent;
            [Extent] = modules;
            return jimu_core__WEBPACK_IMPORTED_MODULE_1__.geometryUtils.projectToSpatialReference(geometries, spatialReference).then((resultGeometries) => {
                return resultGeometries.map(geometry => {
                    // extended extent with 'SinglePointOffSet' if the value of 'width' or 'height' of extent.
                    // @ts-expect-error
                    if (geometry.type === 'extent' && (geometry.width === 0 || geometry.height === 0)) {
                        const extent = new Extent({
                            // @ts-expect-error
                            xmin: geometry.xmin - SinglePointOffSet.X,
                            // @ts-expect-error
                            ymin: geometry.ymin - SinglePointOffSet.Y,
                            // @ts-expect-error
                            xmax: geometry.xmax + SinglePointOffSet.X,
                            // @ts-expect-error
                            ymax: geometry.ymax + SinglePointOffSet.Y,
                            spatialReference: geometry.spatialReference
                        });
                        return extent;
                    }
                    else {
                        return geometry;
                    }
                });
            });
        }).catch((e) => __awaiter(this, void 0, void 0, function* () { return yield Promise.reject(); }));
    });
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/index.ts":
/*!****************************************!*\
  !*** ./jimu-arcgis/lib/views/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TO_MAP_DATA_ID_PREFIX: () => (/* reexport safe */ _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__.ADD_TO_MAP_DATA_ID_PREFIX),
/* harmony export */   ActionType: () => (/* reexport safe */ _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__.ActionType),
/* harmony export */   DataChangeStatus: () => (/* reexport safe */ _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__.DataChangeStatus),
/* harmony export */   DataChangeType: () => (/* reexport safe */ _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__.DataChangeType),
/* harmony export */   JimuFeatureLayerView: () => (/* reexport safe */ _layers_jimu_feature_layer_view__WEBPACK_IMPORTED_MODULE_1__.JimuFeatureLayerView),
/* harmony export */   JimuLayerView: () => (/* reexport safe */ _layers_jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__.JimuLayerView),
/* harmony export */   JimuMapView: () => (/* reexport safe */ _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__.JimuMapView),
/* harmony export */   JimuMapViewGroup: () => (/* reexport safe */ _jimu_map_view_group__WEBPACK_IMPORTED_MODULE_4__.JimuMapViewGroup),
/* harmony export */   JimuSceneLayerView: () => (/* reexport safe */ _layers_jimu_scene_layer_view__WEBPACK_IMPORTED_MODULE_2__.JimuSceneLayerView),
/* harmony export */   SHOW_ON_MAP_DATA_ID_PREFIX: () => (/* reexport safe */ _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__.SHOW_ON_MAP_DATA_ID_PREFIX)
/* harmony export */ });
/* harmony import */ var _layers_jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layers/jimu-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts");
/* harmony import */ var _layers_jimu_feature_layer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers/jimu-feature-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-feature-layer-view.ts");
/* harmony import */ var _layers_jimu_scene_layer_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/jimu-scene-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-scene-layer-view.ts");
/* harmony import */ var _jimu_map_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jimu-map-view */ "./jimu-arcgis/lib/views/jimu-map-view.ts");
/* harmony import */ var _jimu_map_view_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jimu-map-view-group */ "./jimu-arcgis/lib/views/jimu-map-view-group.ts");







/***/ }),

/***/ "./jimu-arcgis/lib/views/jimu-map-view-group.ts":
/*!******************************************************!*\
  !*** ./jimu-arcgis/lib/views/jimu-map-view-group.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuMapViewGroup: () => (/* binding */ JimuMapViewGroup)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @ignore */
class JimuMapViewGroup {
    constructor(mapWidgetId) {
        this.switchMap = (ignoreSwitchAnimation = false) => __awaiter(this, void 0, void 0, function* () {
            if (this.mapWidgetInstance) {
                return yield this.mapWidgetInstance.switchMap(ignoreSwitchAnimation);
            }
            else {
                yield Promise.resolve();
            }
        });
        this.fullScreenMap = () => {
            if (this.mapWidgetInstance) {
                this.mapWidgetInstance.fullScreenMap();
            }
        };
        this.mapWidgetId = mapWidgetId;
        this.jimuMapViews = {};
    }
    setMapWidgetInstance(mapWidgetInstance) {
        this.mapWidgetInstance = mapWidgetInstance;
    }
    addJimuMapView(jimuMapView) {
        this.jimuMapViews[jimuMapView.id] = jimuMapView;
        jimuMapView.jimuMapViewGroup = this;
    }
    setJimuMapView(jimuMapView) {
        this.jimuMapViews[jimuMapView.id] = jimuMapView;
        jimuMapView.jimuMapViewGroup = this;
    }
    removeJimuMapView(jimuMapView) {
        delete this.jimuMapViews[jimuMapView.id];
        if (jimuMapView.jimuMapViewGroup === this) {
            jimuMapView.jimuMapViewGroup = null;
        }
    }
    getActiveJimuMapView() {
        const jimuMapViewIds = Object.keys(this.jimuMapViews);
        for (let i = 0; i < jimuMapViewIds.length; i++) {
            if (this.jimuMapViews[jimuMapViewIds[i]].isActive) {
                return this.jimuMapViews[jimuMapViewIds[i]];
            }
        }
        return null;
    }
    /**
     * @ignore
     */
    showMapTools() {
        const jimuMapViews = this.getAllJimuMapViews();
        jimuMapViews.forEach(jimuMapView => {
            const anyView = jimuMapView.view;
            if (anyView && anyView.showMapTools) {
                anyView.showMapTools();
            }
        });
    }
    /**
     * @ignore
     */
    hideMapTools() {
        const jimuMapViews = this.getAllJimuMapViews();
        jimuMapViews.forEach(jimuMapView => {
            const anyView = jimuMapView.view;
            if (anyView && anyView.hideMapTools) {
                anyView.hideMapTools();
            }
        });
    }
    getAllJimuMapViews() {
        const jimuMapViewIds = Object.keys(this.jimuMapViews);
        const jimuMapViews = jimuMapViewIds.map(jimuMapViewId => this.jimuMapViews[jimuMapViewId]);
        return jimuMapViews;
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/jimu-map-view.ts":
/*!************************************************!*\
  !*** ./jimu-arcgis/lib/views/jimu-map-view.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TO_MAP_DATA_ID_PREFIX: () => (/* binding */ ADD_TO_MAP_DATA_ID_PREFIX),
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   DataChangeStatus: () => (/* binding */ DataChangeStatus),
/* harmony export */   DataChangeType: () => (/* binding */ DataChangeType),
/* harmony export */   JimuMapView: () => (/* binding */ JimuMapView),
/* harmony export */   SHOW_ON_MAP_DATA_ID_PREFIX: () => (/* binding */ SHOW_ON_MAP_DATA_ID_PREFIX)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _layers_jimu_layer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layers/jimu-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts");
/* harmony import */ var _layers_jimu_feature_layer_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/jimu-feature-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-feature-layer-view.ts");
/* harmony import */ var _layers_jimu_scene_layer_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layers/jimu-scene-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-scene-layer-view.ts");
/* harmony import */ var _layers_jimu_group_layer_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers/jimu-group-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-group-layer-view.ts");
/* harmony import */ var _layers_jimu_subtype_group_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layers/jimu-subtype-group-layer */ "./jimu-arcgis/lib/views/layers/jimu-subtype-group-layer.ts");
/* harmony import */ var _layers_jimu_tile_layer_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layers/jimu-tile-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-tile-layer-view.ts");
/* harmony import */ var _layers_jimu_mapimage_layer_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layers/jimu-mapimage-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-mapimage-layer-view.ts");
/* harmony import */ var _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data-sources/arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
/* harmony import */ var _arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../arcgis-js-api-module-loader */ "./jimu-arcgis/lib/arcgis-js-api-module-loader.ts");
/* harmony import */ var _utils_feature_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/feature-utils */ "./jimu-arcgis/lib/utils/feature-utils.ts");
/* harmony import */ var _utils_zoomto_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/zoomto-utils */ "./jimu-arcgis/lib/utils/zoomto-utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












var ActionType;
(function (ActionType) {
    ActionType["DataAction"] = "DATA_ACTION";
    ActionType["MessageAction"] = "MESSAGE_ACTION";
})(ActionType || (ActionType = {}));
var DataChangeType;
(function (DataChangeType) {
    DataChangeType["Create"] = "CREATE";
    DataChangeType["Creating"] = "CREATING";
    DataChangeType["Created"] = "CREATED";
    DataChangeType["Remove"] = "REMOVE";
})(DataChangeType || (DataChangeType = {}));
var DataChangeStatus;
(function (DataChangeStatus) {
    DataChangeStatus["Fulfilled"] = "FULFILLED";
    DataChangeStatus["Pending"] = "PENDING";
    DataChangeStatus["Rejected"] = "REJECTED";
    DataChangeStatus["RejectedAndKnown"] = "REJECTEDANDKNOWN";
})(DataChangeStatus || (DataChangeStatus = {}));
const SHOW_ON_MAP_DATA_ID_PREFIX = 'layer_of_showOnMap_action_';
const ADD_TO_MAP_DATA_ID_PREFIX = 'layer_of_addToMap_action_';
/**
 * `JimuMapView` is the `view` for developers to develop the map-related functions.
 * For example, developers can use the `view` property of the `JimuMapView` instance to get the original
 *  <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html" target="_blank">ArcGIS Maps SDK for JavaScript `View`</a>,
 * then use the original `view` to develop the map-related functions. At the same time, `JimuMapView` also provides
 * properties such as `isActive` and `status` to indicate the current status in the map widget.
 *
 * `JimuMapView` is a wrapper class for the ArcGIS Maps SDK for JavaScript [`View`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html).
 * It is created by a map widget using a map [`DataSource`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSource).
 *
 * ```typescript
 * import { JimuMapView } from 'jimu-arcgis';
 *
 * // Add the State interface
 * interface State {
 *  extent: __esri.Extent
 * }
 *
 * // On an active view change, set the extent State property
 * onActiveViewChange = (jimuMapView: JimuMapView) => {
 *  if(!this.extentWatch){
 *   this.extentWatch = jimuMapView.view.watch('extent', extent => {
 *     this.setState({
 *       extent
 *     })
 *   });
 *  }
 * }
 *
 * // Use the `JimuMapView` instance from the map widget through the `JimuMapViewComponent` React component
<JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds[0]} onActiveViewChange={this.onActiveViewChange}></JimuMapViewComponent>
 * ```
 *
 */
class JimuMapView {
    constructor(options) {
        this.clickHighlightEnabled = true;
        this.cacheListeners = [];
        this.restoreListeners = [];
        this.selectedFeaturesChangeListeners = [];
        this.jimuLayerViewCreatedListeners = [];
        this.selectByQueryProgressChangeListeners = [];
        // false means popup.features comes from this.updatePopupFeaturesWhenSelectionChange() method, true means popup.features comes from clicking map (JS API set popup.features).
        this.popupFeaturesFromSelection = false;
        this.showPopupUponSelection = false;
        this.getJimuLayerViewIdByJimuLayerId = (JimulayerId) => {
            return `${this.id}-${JimulayerId}`;
        };
        this.getJimuLayerViewIdByAPILayer = (layerOrSubLayer) => {
            return this.getJimuLayerViewIdByJimuLayerId(jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getJimuLayerIdByJSAPILayer(layerOrSubLayer));
        };
        this.id = options.mapWidgetId + '-' + options.dataSourceId;
        this.mapWidgetId = options.mapWidgetId;
        this.isActive = options.isActive;
        this.dataSourceId = options.dataSourceId;
        this.view = options.view;
        this.mapViewManager = options.mapViewManager;
        this.jimuLayerViews = {};
        this.status = jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuMapViewStatus.Loading;
        if (this.view) {
            this.view.popupEnabled = (options.isEnablePopup === undefined || options.isEnablePopup === null) ? true : options.isEnablePopup;
        }
        this.showOnMapDatas = {};
        this.jimuMapTools = [];
        this.jimuLayerViewLoadPromises = {};
        if (options.useUrlHashLayersVisibility) {
            this.urlHashLayersVisibility = this.parseLayersVisibilityFromUrlHash();
        }
        this.initView(this.view);
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.observeStore)(this.onStoreChange.bind(this), ['dataSourcesInfo']);
        this.watchPopupFeaturesAndSelectedFeature();
    }
    /**
     * popup.features maybe come from clicking map, or maybe come from exb feature selection.
     * JimuFeatureLayerSceneLayerViewCommon focuses on clicking map case.
     * JimuMapView focuses on exb feature selection case.
     */
    watchPopupFeaturesAndSelectedFeature() {
        return __awaiter(this, void 0, void 0, function* () {
            const reactiveUtils = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/core/reactiveUtils');
            if (this.watchPopupFeaturesHandle) {
                this.watchPopupFeaturesHandle.remove();
                this.watchPopupFeaturesHandle = null;
            }
            if (this.watchPopupSelectedHandle) {
                this.watchPopupSelectedHandle.remove();
                this.watchPopupSelectedHandle = null;
            }
            // update this.popupFeaturesFromSelection by watching popup.features
            this.watchPopupFeaturesHandle = reactiveUtils.watch(() => { var _a; return (_a = this.view.popup) === null || _a === void 0 ? void 0 : _a.features; }, (features) => {
                this.popupFeaturesFromSelection = features === null || features === void 0 ? void 0 : features.fromSelection;
            });
            // We need to update popup.location manually when popup.selectedFeature change if popup.features comes from this.updatePopupFeaturesWhenSelectionChange() method.
            this.watchPopupSelectedHandle = reactiveUtils.watch(() => { var _a; return (_a = this.view.popup) === null || _a === void 0 ? void 0 : _a.selectedFeature; }, () => {
                var _a, _b;
                if (!this.popupFeaturesFromSelection) {
                    return;
                }
                const popup = (_a = this.view) === null || _a === void 0 ? void 0 : _a.popup;
                if (popup && popup.selectedFeature) {
                    const geometry = popup.selectedFeature.geometry;
                    let location = null;
                    if (geometry) {
                        if (geometry.declaredClass === 'esri.geometry.Point') {
                            location = geometry.clone();
                        }
                        else {
                            location = (_b = geometry.extent) === null || _b === void 0 ? void 0 : _b.center;
                        }
                    }
                    if (location) {
                        popup.location = location;
                    }
                }
            });
        });
    }
    /**
     * This method is called when any layer selection changes.
     * @param triggedJimuLayerView The JimuLayerView instance which selection changes.
     * @param triggedByClear Whether the selection changes is triggered by clear the selection of JimuLayerView.
     */
    handlePopupOnSelectionChange(triggedJimuLayerView, triggedByClear) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const popup = (_a = this.view) === null || _a === void 0 ? void 0 : _a.popup;
            if (!popup) {
                return;
            }
            // If the map widget is in ACTIVE state, means map interaction results in the selection changes, such as clicking map and map select tool,
            // so we don't need to update popup features. We only update popup features for other cases, such as list/table selection changes.
            const shouldUpdatePopupFeaturesWhenSelectionChange = this.isAutoShowPopupWhenSelectFeatures() && !this.isMapWidgetActive();
            if (shouldUpdatePopupFeaturesWhenSelectionChange) {
                // need to update popup.features
                yield this.updatePopupFeaturesWhenSelectionChange(popup, triggedJimuLayerView, triggedByClear);
            }
            else {
                // don't need to update popup.features
                // #15195, try to close popup is the original feature is not selected anymore
                // consider this case:
                // 1. layer1 is in map and list widget uses layer1 as ds1
                // 2. click feature1 of layer1 in map, then map shows popup for feature1 and feature1 in list widget is highlight
                // 3. click feature2 in list widget, then only feature2 is highlight in map, but the map still shows popup of feature1, we need to close the popup for this case
                if (popup.visible) {
                    const selectedFeature = popup.selectedFeature;
                    if (selectedFeature) {
                        const isPopupSelectedFeatureBelongToJimuLayerView = (triggedJimuLayerView.layer && selectedFeature.layer === triggedJimuLayerView.layer) ||
                            (triggedJimuLayerView.layer && selectedFeature.sourceLayer === triggedJimuLayerView.layer) ||
                            (triggedJimuLayerView.id && selectedFeature.jimuLayerViewId === triggedJimuLayerView.id);
                        if (isPopupSelectedFeatureBelongToJimuLayerView) {
                            const selectedFeatureId = selectedFeature.getObjectId();
                            const currentSelectedFeaturesForTheLayer = yield triggedJimuLayerView.getSelectedFeatures();
                            const isOriginalFeatureStillSelected = currentSelectedFeaturesForTheLayer.some(feature => feature.getObjectId() === selectedFeatureId);
                            if (!isOriginalFeatureStillSelected) {
                                this.closePopup();
                            }
                        }
                    }
                }
            }
        });
    }
    /**
     * This method is used to update popup.features when layer selection changes.
     * This method is only called when showPopupUponSelection option enabled and map is not in active state.
     * @param triggedJimuLayerView The JimuLayerView instance which selection changes.
     * @param triggedByClear Whether the selection changes is triggered by clear the selection of JimuLayerView.
     */
    updatePopupFeaturesWhenSelectionChange(popup, triggedJimuLayerView, triggedByClear) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!popup) {
                return;
            }
            if (!popup.visible && triggedByClear) {
                // this method is triggered by clear selection, but current popup is not visible, so we don't need to show popup.
                if (this.popupFeaturesFromSelection) {
                    this.closePopup();
                }
                return;
            }
            let selectedFeatures = yield this.getSelectedFeatures();
            const currentPopupSelectedFeature = popup.selectedFeature;
            const currentPopupSelectedFeatureJimuLayerViewId = currentPopupSelectedFeature && currentPopupSelectedFeature.jimuLayerViewId;
            let firstBatchShowJimuLayerViewId = null;
            if (triggedByClear) {
                // make sure popup still shows current batch selected features as the first batch selected features
                if (currentPopupSelectedFeatureJimuLayerViewId) {
                    firstBatchShowJimuLayerViewId = currentPopupSelectedFeatureJimuLayerViewId;
                }
            }
            else {
                // make sure popup show the first batch selected features of triggedJimuLayerView
                firstBatchShowJimuLayerViewId = triggedJimuLayerView.id;
            }
            if (firstBatchShowJimuLayerViewId) {
                const features1 = [];
                const features2 = [];
                selectedFeatures.forEach((feature) => {
                    if (feature.jimuLayerViewId === firstBatchShowJimuLayerViewId) {
                        features1.push(feature);
                    }
                    else {
                        features2.push(feature);
                    }
                });
                selectedFeatures = [...features1, ...features2];
            }
            // try to make sure popup show the original selected feature as the first selected feature
            if (currentPopupSelectedFeature && selectedFeatures.length > 0) {
                if ((currentPopupSelectedFeatureJimuLayerViewId && currentPopupSelectedFeatureJimuLayerViewId === firstBatchShowJimuLayerViewId) || !firstBatchShowJimuLayerViewId) {
                    let index = selectedFeatures.indexOf(currentPopupSelectedFeature);
                    if (index < 0) {
                        const selectedFeatureObjectId = currentPopupSelectedFeature.getObjectId();
                        if (selectedFeatureObjectId >= 0) {
                            const count = selectedFeatures.length;
                            for (let i = 0; i < count; i++) {
                                const feature = selectedFeatures[i];
                                const objectId = feature.getObjectId();
                                if (objectId === selectedFeatureObjectId) {
                                    index = i;
                                    break;
                                }
                            }
                        }
                    }
                    if (index >= 0) {
                        selectedFeatures.splice(index, 1);
                        selectedFeatures.unshift(currentPopupSelectedFeature);
                    }
                }
            }
            if (selectedFeatures.length > 0) {
                selectedFeatures.fromSelection = true;
                this.view.openPopup({
                    features: selectedFeatures
                });
            }
            else {
                // there is no selected features now
                this.closePopup();
            }
        });
    }
    /**
     * Close popup and make sure popup.features is empty.
     */
    closePopup() {
        if (this.view) {
            const popup = this.view.popup;
            if (popup) {
                popup.features = [];
            }
            this.view.closePopup();
        }
    }
    isAutoShowPopupWhenSelectFeatures() {
        return this.view.popupEnabled && this.showPopupUponSelection;
    }
    /**
     * @ignore
     */
    setShowPopupUponSelection(showPopupUponSelection) {
        this.showPopupUponSelection = !!showPopupUponSelection;
    }
    /**
     * @ignore
     */
    isPopupFeaturesFromSelection() {
        return this.popupFeaturesFromSelection;
    }
    /**
     * @ignore
     */
    getSelectedFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedGraphics = [];
            const jimuLayerViews = Object.values(this.jimuLayerViews);
            const promises = [];
            jimuLayerViews.forEach(jimuLayerView => {
                const jimuFeatureOrSceneLayerView = jimuLayerView;
                if (jimuFeatureOrSceneLayerView.getSelectedFeatures) {
                    const p = jimuFeatureOrSceneLayerView.getSelectedFeatures();
                    promises.push(p);
                }
            });
            if (promises.length > 0) {
                const results = yield Promise.all(promises);
                if (results.length > 0) {
                    results.forEach(graphics => {
                        if (graphics && graphics.length > 0) {
                            graphics.forEach(graphic => {
                                selectedGraphics.push(graphic);
                            });
                        }
                    });
                }
            }
            return selectedGraphics;
        });
    }
    /**
     * @ignore
     */
    getSelectedFeatureCount() {
        let allCount = 0;
        const jimuLayerViews = Object.values(this.jimuLayerViews);
        jimuLayerViews.forEach(jimuLayerView => {
            const jimuFeatureOrSceneLayerView = jimuLayerView;
            if (jimuFeatureOrSceneLayerView.getSelectedFeatureCount) {
                allCount += jimuFeatureOrSceneLayerView.getSelectedFeatureCount();
            }
        });
        return allCount;
    }
    addJimuMapTool(tool) {
        if (!this.jimuMapTools.find(t => t.name === tool.name)) {
            this.jimuMapTools.push(tool);
        }
    }
    deleteJimuMapTool(toolName) {
        const tool = this.jimuMapTools.find(t => t.name === toolName);
        if (!tool) {
            return;
        }
        this.jimuMapTools = this.jimuMapTools.filter(t => t.name !== toolName);
    }
    enableClickOpenPopup() {
        this.view.popupEnabled = true;
    }
    disableClickOpenPopup() {
        this.view.popupEnabled = false;
    }
    isClickOpenPopupEnabled() {
        return this.view.popupEnabled;
    }
    enableClickHighlight() {
        this.clickHighlightEnabled = true;
    }
    disableClickHighlight() {
        this.clickHighlightEnabled = false;
    }
    isClickHighlightEnabled() {
        return this.clickHighlightEnabled;
    }
    setIsActive(isActive) {
        this.isActive = isActive;
        this.mapViewManager.setJimuMapView(this);
    }
    setMapWidgetState(widgetState) {
        this.mapWidgetState = widgetState;
    }
    isMapWidgetActive() {
        return this.mapWidgetState === jimu_core__WEBPACK_IMPORTED_MODULE_0__.WidgetState.Active;
    }
    initView(view) {
        if (!view) {
            return;
        }
        view.when(() => {
            view.on('click', this.onClick.bind(this));
        });
    }
    onClick(event) {
        const screenPoint = {
            x: event.x,
            y: event.y
        };
        const mapPoint = this.view.toMap(screenPoint);
        if (!mapPoint) {
            return;
        }
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.LocationChangeMessage(this.mapWidgetId, mapPoint.toJSON()));
        this.view.hitTest(screenPoint).then(response => {
            if (!this.isClickHighlightEnabled()) {
                return;
            }
            const graphicResults = response.results.filter(r => r.type === 'graphic');
            this.selectDataSourceOrFeatureByFeatures(this.isClickOpenPopupEnabled(), graphicResults.map(r => r.graphic), mapPoint);
        }, () => {
            this.clearAllJimuLayerViewsSelectRecord();
        });
    }
    selectDataSourceOrFeatureByFeatures(isPopupOpen, features, mapPoint) {
        return __awaiter(this, void 0, void 0, function* () {
            // clear selection first
            yield this.clearAllJimuLayerViewsSelectRecord();
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(this.mapWidgetId, []));
            /**
             * We select data records only when the popup is enabled in MV.
             * Here, we handle the case that the popup is not enabled in ExB. When popup is enalbed, the selection is handled in jimu-feature-layer-view.
             *
             * When popup is disabled, we select the first feature in the hitTest result
             */
            if (isPopupOpen) {
                return;
            }
            // Find the first feature
            const firstFeature = features.find(feature => {
                return (feature.layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer || feature.layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SceneLayer) && feature.layer.popupEnabled;
            });
            if (!firstFeature) {
                // when hitTest does not hit any feature, we try to use identify to find the feature
                this.tryIdentifyClickedFeature(mapPoint);
                return;
            }
            const jimuLayerViewId = this.getJimuLayerViewIdByAPILayer(firstFeature.layer);
            const jimuLayerView = this.jimuLayerViews[jimuLayerViewId];
            if (!jimuLayerView) {
                return;
            }
            const oId = firstFeature.attributes[firstFeature.layer.objectIdField];
            if (jimuLayerView.isLayerDataSourceUsed()) {
                const layerDataSource = jimuLayerView.getLayerDataSource() || (yield jimuLayerView.createLayerDataSource());
                const record = yield layerDataSource.queryById(oId + '');
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(this.mapWidgetId, [record]));
                yield jimuLayerView.selectFeatureById(oId, record);
            }
            else {
                yield jimuLayerView.selectFeatureById(oId);
            }
        });
    }
    isMapServiceLayerPopupEnabled(layer) {
        var _a;
        // popupEnabled is not documented on MapImageLayer or TileLayer, but we can still access it.
        if (layer.popupEnabled) {
            const subLayers = (_a = layer.sublayers) === null || _a === void 0 ? void 0 : _a.toArray();
            if (subLayers && subLayers.length > 0) {
                // layer.popupEnabled maybe true but sublayers popupEnabled maybe false
                const subLayerPopupEnabled = subLayers.some((subLayer) => subLayer.popupEnabled);
                return subLayerPopupEnabled;
            }
        }
        return false;
    }
    tryIdentifyClickedFeature(mapPoint) {
        var _a, _b;
        // firstMapServiceLayerView must support identify operation and the related layer's popup is enabled
        let firstMapServiceLayerView = null;
        // traverse layers from map top to bottom
        const layers = this.view.map.layers.toArray().reverse();
        const allJimuLayerViews = Object.values(this.jimuLayerViews);
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];
            if (layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.MapImageLayer || layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.TileLayer) {
                const mapServiceLayer = layer;
                const supportsIdentify = (_b = (_a = mapServiceLayer.capabilities) === null || _a === void 0 ? void 0 : _a.operations) === null || _b === void 0 ? void 0 : _b.supportsIdentify;
                if (supportsIdentify) {
                    // If layer popup is disabled, no features should be selected.
                    if (this.isMapServiceLayerPopupEnabled(mapServiceLayer)) {
                        const currJimuLayerView = allJimuLayerViews.find(jimuLayerView => jimuLayerView.layer === layer);
                        if (currJimuLayerView) {
                            firstMapServiceLayerView = currJimuLayerView;
                            break;
                        }
                    }
                }
            }
        }
        if (!firstMapServiceLayerView) {
            return;
        }
        return (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_9__.loadArcGISJSAPIModules)(['esri/rest/identify', 'esri/rest/support/IdentifyParameters']).then(([identify, IdentifyParameters]) => {
            const childLayerViews = this.getAllChildJimuLayerViews(firstMapServiceLayerView.id);
            const identifyLayerIds = childLayerViews.filter(lv => lv.layer.popupEnabled).map(lv => lv.layer.id);
            const params = new IdentifyParameters();
            params.tolerance = 3;
            params.layerIds = identifyLayerIds;
            params.layerOption = 'top';
            params.width = this.view.width;
            params.height = this.view.height;
            params.geometry = mapPoint;
            params.mapExtent = this.view.extent;
            params.returnFieldName = true;
            params.returnGeometry = true;
            params.returnUnformattedValues = true;
            identify.identify(firstMapServiceLayerView.layer.url, params).then((response) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const firstResult = response.results[0];
                if (!firstResult) {
                    return;
                }
                const jimuLayerViewId = `${firstMapServiceLayerView.id}-${firstResult.layerId}`;
                const jimuLayerView = this.jimuLayerViews[jimuLayerViewId];
                if (!jimuLayerView) {
                    return;
                }
                if (jimuLayerView.isLayerDataSourceUsed() || jimuLayerView.getLayerDataSource()) {
                    const record = (_a = jimuLayerView.getLayerDataSource()) === null || _a === void 0 ? void 0 : _a.buildRecord(firstResult.feature);
                    jimuLayerView.selectFeatureById(Number(record.getId()), record);
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(this.mapWidgetId, [record]));
                }
                else {
                    jimuLayerView.selectFeatureById(firstResult.feature.attributes[jimuLayerView.layer.objectIdField], firstResult.feature);
                }
            }));
        });
    }
    /**
     * Get JimuLayerView by JS API layer or sublayer.
     * @param layerOrSubLayer JS API layer or sublayer.
     */
    getJimuLayerViewByAPILayer(layerOrSubLayer) {
        const jimuLayerViews = Object.values(this.jimuLayerViews);
        return jimuLayerViews.find(jimuLayerView => jimuLayerView.layer === layerOrSubLayer);
    }
    getJimuLayerViewByDataSourceId(dataSourceId) {
        const allJimuLayerViews = this.getAllJimuLayerViews();
        return allJimuLayerViews.find(jimuLayerView => jimuLayerView.layerDataSourceId === dataSourceId);
    }
    clearAllJimuLayerViewsSelectRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            const jimuLayerViews = this.jimuLayerViews;
            const jimuLayerViewKeys = Object.keys(jimuLayerViews);
            const promises = [];
            for (let i = 0; i < jimuLayerViewKeys.length; i++) {
                const tempJimuLayerView = jimuLayerViews[jimuLayerViewKeys[i]];
                if (tempJimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer || tempJimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SceneLayer) {
                    const promise = tempJimuLayerView.selectFeaturesByIds && tempJimuLayerView.selectFeaturesByIds([]);
                    promises.push(promise);
                }
            }
            if (promises.length > 0) {
                yield Promise.all(promises);
            }
        });
    }
    addJimuLayerView(jimuLayerView) {
        this.jimuLayerViews[jimuLayerView.id] = jimuLayerView;
    }
    /**
     * Resolve the JimuMapView when it is loaded.
     */
    whenJimuMapViewLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.jimuMapViewLoadPromise) {
                return this.jimuMapViewLoadPromise;
            }
            else {
                if (!this.view) {
                    this.status = jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuMapViewStatus.Failed;
                    this.mapViewManager.setJimuMapView(this);
                    this.jimuMapViewLoadPromise = Promise.reject(this);
                    return this.jimuMapViewLoadPromise;
                }
                this.jimuMapViewLoadPromise = this.view.when().then(() => __awaiter(this, void 0, void 0, function* () {
                    // we don't wait for layer views created.
                    this.startCreateJimuLayerViews();
                    this.status = jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuMapViewStatus.Loaded;
                    this.mapViewManager.setJimuMapView(this);
                    return Promise.resolve(this);
                }), (error) => __awaiter(this, void 0, void 0, function* () {
                    console.error(error);
                    this.status = jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuMapViewStatus.Failed;
                    this.mapViewManager.setJimuMapView(this);
                    return Promise.reject(this);
                }));
                return this.jimuMapViewLoadPromise;
            }
        });
    }
    /**
     * Return the JimuLayerView when it's loaded.
     *
     * For a JimuLayerView id, the instance may not have been craeted, but we can make sure the first level JimuLayerView are created.
     * So, for a JimuLayerView id, we'll make sure its parent JimuLayerView get created and ready, and the JimuLayerView will create its children JimuLayerViews in the ready().
     */
    whenJimuLayerViewLoaded(jimuLayerViewId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.jimuLayerViewLoadPromises[jimuLayerViewId]) {
                return this.jimuLayerViewLoadPromises[jimuLayerViewId];
            }
            try {
                yield this.makeSureParentLayerViewsLoaded(jimuLayerViewId);
            }
            catch (err) {
                console.log(err);
            }
            if (this.jimuLayerViewLoadPromises[jimuLayerViewId]) {
                return this.jimuLayerViewLoadPromises[jimuLayerViewId];
            }
            else {
                return Promise.reject(Error('Bad jimuLayerViewId:' + jimuLayerViewId));
            }
        });
    }
    /** @see whenJimuLayerViewLoaded, but use data source  */
    whenJimuLayerViewLoadedByDataSource(ds) {
        return __awaiter(this, void 0, void 0, function* () {
            const jimuLayerId = ds.jimuLayerId;
            if (!jimuLayerId) {
                console.error('Can not find jimuLayerId in data source.', ds.id);
                return Promise.resolve(null);
            }
            const jimuLayerViewId = this.getJimuLayerViewIdByJimuLayerId(jimuLayerId);
            return this.whenJimuLayerViewLoaded(jimuLayerViewId);
        });
    }
    makeSureParentLayerViewsLoaded(jimuLayerViewId) {
        return __awaiter(this, void 0, void 0, function* () {
            const promiseCount = Object.keys(this.jimuLayerViewLoadPromises).length;
            const parentPromises = [];
            Object.keys(this.jimuLayerViewLoadPromises).forEach(id => {
                const promise = this.jimuLayerViewLoadPromises[id];
                if (promise && jimuLayerViewId.startsWith(id)) {
                    parentPromises.push(promise);
                }
            });
            yield Promise.all(parentPromises);
            if (Object.keys(this.jimuLayerViewLoadPromises).length > promiseCount) { // means new parent layer is created
                yield this.makeSureParentLayerViewsLoaded(jimuLayerViewId);
            }
        });
    }
    /**
     * return the loaded JimuLayerViews only
     */
    whenAllJimuLayerViewLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            const loadedJimuLayerViews = {};
            yield this.whenChildJimuLayerViewLoaded(null, loadedJimuLayerViews);
            return loadedJimuLayerViews;
        });
    }
    /**
     * Give a parent JimuLayerView id, will load all of its children JimuLayerViews.
     * For failed JimuLayerViews, we'll catch the error but they don't stop others.
     */
    whenChildJimuLayerViewLoaded(jlvId, loadedJimuLayerViews) {
        return __awaiter(this, void 0, void 0, function* () {
            const childJimuLayerViews = yield Promise.all(this.getChildJimuLayerViewIds(jlvId).map(lvId => {
                return this.whenJimuLayerViewLoaded(lvId).then(jlv => {
                    loadedJimuLayerViews[lvId] = jlv;
                    return jlv;
                }).catch(err => {
                    console.error('JimuLayerView fails.', lvId, err);
                    return null;
                });
            }));
            yield Promise.all(childJimuLayerViews.filter(lv => lv).map(lv => this.whenChildJimuLayerViewLoaded(lv.id, loadedJimuLayerViews)));
        });
    }
    /**
     * Return all JimuLayerViews.
     */
    getAllJimuLayerViews() {
        return Object.values(this.jimuLayerViews);
    }
    /**
     * Return all parent JimuLayerViews.
     */
    getParentJimuLayerViews(jimuLayerViewId) {
        const parentJimuLayerViews = [];
        let currentJimuLayerView = this.jimuLayerViews[jimuLayerViewId];
        while (currentJimuLayerView === null || currentJimuLayerView === void 0 ? void 0 : currentJimuLayerView.parentJimuLayerViewId) {
            const parentJimuLayerView = this.jimuLayerViews[currentJimuLayerView.parentJimuLayerViewId];
            parentJimuLayerViews.push(parentJimuLayerView);
            currentJimuLayerView = parentJimuLayerView;
        }
        return parentJimuLayerViews;
    }
    /**
     * Return all child JimuLayerViews.
     */
    getAllChildJimuLayerViews(jimuLayerViewId) {
        const childLayerViews = [];
        this.findChildLayerView(jimuLayerViewId, childLayerViews);
        return childLayerViews;
    }
    /**
     * Return the direct child JimuLayerViews
     */
    getChildJimuLayerViewIds(jimuLayerViewId) {
        return Object.keys(this.jimuLayerViews).filter(lvId => this.jimuLayerViews[lvId].parentJimuLayerViewId === jimuLayerViewId);
    }
    findChildLayerView(parentJimuLayerViewId, childLayerViews) {
        const layerViews = this.jimuLayerViews;
        const layerViewsKeys = Object.keys(layerViews);
        for (let i = 0; i < layerViewsKeys.length; i++) {
            const layerView = layerViews[layerViewsKeys[i]];
            if (layerView.parentJimuLayerViewId === parentJimuLayerViewId) {
                const jimuLayerView = layerViews[layerViewsKeys[i]];
                childLayerViews.push(jimuLayerView);
                this.findChildLayerView(jimuLayerView.id, childLayerViews);
            }
        }
    }
    /**
     * Start to create JimuLayerViews
     * This method does not promise all layer views are created, but it promises the first level are created.
     */
    startCreateJimuLayerViews() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(this.jimuLayerViewLoadPromises).length > 0) {
                return;
            }
            this.view.map.layers.toArray().reverse().forEach((layer, index) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.createJimuLayerView(layer, null, index);
                }
                catch (e) {
                    console.log('Create JimuLayerViews error.', e);
                }
            }));
        });
    }
    /**
     * Create the JimuLayerView and add it into the jimuLayerViews object. Resolve the promise when it is ready.
     *
     * @param layerOrSubLayer the layer can be a Layer or a SubLayer
     * @param parentJimuLayerId the layer's parent JimuLayerView ID
     * @param index layer index
     * @param runtimeAddedDataSource Optional, the layer data source added at runtime.
     * @param fromRuntime Optional, true means the JimuLayerView is created from runtime. e.g. The JimuLayerView is created by AddData widget at runtime. false means the layer is a builtin layer of WebMap or WebScene.
     */
    createJimuLayerView(layerOrSubLayer, parentJimuLayerId, index, runtimeAddedDataSource, fromRuntime) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let jimuLayerView = null;
            // The current root data source is 'null' if using the default web map.
            const rootDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.dataSourceId);
            const layerId = layerOrSubLayer.id + '';
            const jimuLayerId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getJimuLayerIdByJSAPILayer(layerOrSubLayer);
            const jimuLayerViewId = this.getJimuLayerViewIdByJimuLayerId(jimuLayerId);
            const parentJimuLayerViewId = parentJimuLayerId ? this.getJimuLayerViewIdByJimuLayerId(parentJimuLayerId) : null;
            let layerDSId = (runtimeAddedDataSource === null || runtimeAddedDataSource === void 0 ? void 0 : runtimeAddedDataSource.id) || (rootDs === null || rootDs === void 0 ? void 0 : rootDs.getDataSourceIdByLayer(layerOrSubLayer));
            // case1(most cases): If we can get layerDSId from rootDs (JimuMapView webmap/webscene), means the layer is a layer of the root data source.
            // case2: If we can get layerDSId by runtimeAddedDataSource, means the layer is a layer of newly added data source at runtime, the layer url suffix is like '/MapServer' or '/MapServer/0'.
            // case3: If we can't get layerDSId and fromRuntime is true, means the layer is a sublayer of newly added data source at runtime, the layer url suffix is like '/MapServer/0'.
            // case4: If we can't get layerDSId and fromRuntime is false, means rootDs is null (default webmap), and the layer is a layer of default webmap.
            // check case3
            if (!layerDSId && fromRuntime) {
                if (parentJimuLayerViewId) {
                    const parentJimuLayerView = this.jimuLayerViews[parentJimuLayerViewId];
                    const parentDataSource = parentJimuLayerView && parentJimuLayerView.getLayerDataSource();
                    if (parentDataSource && parentDataSource.getDataSourceIdByLayer) {
                        layerDSId = parentDataSource.getDataSourceIdByLayer(layerOrSubLayer);
                    }
                }
            }
            // make sure layerDSId is a string because JimuLayerView will call layerDSId.startsWith()
            if (!layerDSId) {
                layerDSId = '';
            }
            const jimuLayerViewConstructorOptions = {
                id: jimuLayerViewId,
                jimuLayerId: jimuLayerId,
                layerDataSourceId: layerDSId,
                jimuMapViewId: this.id,
                parentJimuLayerViewId,
                mapViewManager: this.mapViewManager,
                index,
                fromRuntime,
                urlHashLayersVisibility: this.urlHashLayersVisibility
            };
            // for SubLayer, we'll use the declaredClass to check layer type
            // for layer, we'll use the type to check
            switch (layerOrSubLayer.declaredClass) {
                case 'esri.layers.support.Sublayer': // sublayer in a MapImageLayer or a TileLayer
                    const subLayer = layerOrSubLayer;
                    const layerType = ((_a = subLayer.sourceJSON) === null || _a === void 0 ? void 0 : _a.layerType) || ((_b = subLayer.sourceJSON) === null || _b === void 0 ? void 0 : _b.type);
                    if (layerType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerServiceTypes.GroupLayer) {
                        if (((_c = subLayer.sublayers) === null || _c === void 0 ? void 0 : _c.length) > 0) { // we don't create the view if the group is empty
                            Object.assign(jimuLayerViewConstructorOptions, {
                                type: _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.GroupLayer,
                                layer: subLayer
                            });
                            jimuLayerView = new _layers_jimu_group_layer_view__WEBPACK_IMPORTED_MODULE_4__.JimuGroupLayerView(jimuLayerViewConstructorOptions);
                        }
                    }
                    else if (layerType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerServiceTypes.FeatureLayer) { // support featuer layer only now
                        Object.assign(jimuLayerViewConstructorOptions, {
                            type: _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer,
                            layer: subLayer
                        });
                        jimuLayerView = new _layers_jimu_feature_layer_view__WEBPACK_IMPORTED_MODULE_2__.JimuFeatureLayerView(jimuLayerViewConstructorOptions);
                    }
                    else if (layerType === 'Raster Layer') {
                        // DataSourceManager doesn't support 'Raster Layer' data source, so we can't use SupportedLayerServiceTypes.RasterLayer, use hard code 'Raster Layer' here.
                        Object.assign(jimuLayerViewConstructorOptions, {
                            // MapViewer can't add the layer by subLayer.url, it cannot be instantiated into a specific layer, so set it to 'sublayer'.
                            type: subLayer.type,
                            layer: subLayer
                        });
                        jimuLayerView = new _layers_jimu_layer_view__WEBPACK_IMPORTED_MODULE_1__.JimuLayerView(jimuLayerViewConstructorOptions);
                    }
                    else {
                        console.log('Unsupported sub layer type.', layerId);
                    }
                    break;
                default:
                    // We support the sublayer in a MapImageLayer or a TileLayer only now.
                    // from here, the layer is a layer now.
                    const layer = layerOrSubLayer;
                    switch (layer.type) {
                        case _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SceneLayer:
                            Object.assign(jimuLayerViewConstructorOptions, {
                                type: layer.type,
                                layer: layer
                            });
                            jimuLayerView = new _layers_jimu_scene_layer_view__WEBPACK_IMPORTED_MODULE_3__.JimuSceneLayerView(jimuLayerViewConstructorOptions);
                            break;
                        case _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer:
                            Object.assign(jimuLayerViewConstructorOptions, {
                                type: layer.type,
                                layer: layer
                            });
                            jimuLayerView = new _layers_jimu_feature_layer_view__WEBPACK_IMPORTED_MODULE_2__.JimuFeatureLayerView(jimuLayerViewConstructorOptions);
                            break;
                        case _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.MapImageLayer:
                        case _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.TileLayer:
                            Object.assign(jimuLayerViewConstructorOptions, {
                                type: layer.type,
                                layer: layer
                            });
                            if (layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.MapImageLayer) {
                                jimuLayerView = new _layers_jimu_mapimage_layer_view__WEBPACK_IMPORTED_MODULE_7__.JimuMapImageLayerView(jimuLayerViewConstructorOptions);
                            }
                            if (layer.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.TileLayer) {
                                jimuLayerView = new _layers_jimu_tile_layer_view__WEBPACK_IMPORTED_MODULE_6__.JimuTileLayerView(jimuLayerViewConstructorOptions);
                            }
                            break;
                        case _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.GroupLayer:
                            Object.assign(jimuLayerViewConstructorOptions, {
                                view: null,
                                type: layer.type,
                                layer: layer
                            });
                            jimuLayerView = new _layers_jimu_group_layer_view__WEBPACK_IMPORTED_MODULE_4__.JimuGroupLayerView(jimuLayerViewConstructorOptions);
                            break;
                        case _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SubtypeGroupLayer:
                            Object.assign(jimuLayerViewConstructorOptions, {
                                type: layer.type,
                                layer: layer
                            });
                            jimuLayerView = new _layers_jimu_subtype_group_layer__WEBPACK_IMPORTED_MODULE_5__.JimuSubTypeGroupLayerView(jimuLayerViewConstructorOptions);
                            break;
                        default:
                            Object.assign(jimuLayerViewConstructorOptions, {
                                type: layer.type,
                                layer: layer
                            });
                            jimuLayerView = new _layers_jimu_layer_view__WEBPACK_IMPORTED_MODULE_1__.JimuLayerView(jimuLayerViewConstructorOptions);
                            break;
                    }
            }
            if (jimuLayerView) {
                this.addJimuLayerView(jimuLayerView);
                const noView = jimuLayerView.layer.declaredClass === 'esri.layers.support.Sublayer' ||
                    jimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.GroupLayer ||
                    jimuLayerView.layer.declaredClass === 'esri.layers.support.SubtypeSublayer';
                const viewPromsise = noView ? Promise.resolve(null) : this.view.whenLayerView(jimuLayerView.layer);
                this.jimuLayerViewLoadPromises[jimuLayerViewId] = viewPromsise.then((view) => {
                    jimuLayerView.view = view;
                    return jimuLayerView.ready();
                }).then(lv => {
                    lv.isLoaded = true;
                    setTimeout(() => {
                        this.onJimuLayerViewCreated(lv);
                    }, 0);
                    return lv;
                });
                return jimuLayerView;
            }
            else {
                return Promise.resolve(null);
            }
        });
    }
    onStoreChange(preDsInfo, dsInfo) {
        Object.keys(dsInfo || {}).forEach(dsId => {
            if (dsInfo[dsId].instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Created && (!(preDsInfo === null || preDsInfo === void 0 ? void 0 : preDsInfo[dsId]) || preDsInfo[dsId].instanceStatus !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Created)) {
                // means the DS is just created
                const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
                // find the JimuLayView that does not have DS assignned
                const jlvId = Object.keys(this.jimuLayerViews).find(jlvId => {
                    return !this.jimuLayerViews[jlvId].layerDataSourceId && this.jimuLayerViews[jlvId].jimuLayerId === (ds === null || ds === void 0 ? void 0 : ds.jimuLayerId);
                });
                if (jlvId) {
                    this.jimuLayerViews[jlvId].layerDataSourceId = ds.id;
                }
            }
        });
    }
    /**
     * Clear the selected features.
     */
    clearSelectedFeatures() {
        // TODO: need to await here before publish message
        this.clearAllJimuLayerViewsSelectRecord();
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(this.mapWidgetId, []));
    }
    /**
     * Select features in all layers in the map by a graphic.
     * @param graphic This is the [ArcGIS Maps SDK for JavaScript `Graphic`](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html).
     * @param spatialRelationship This parameter defines the spatial relationship to query features in the layer, see details [here](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html#spatialRelationship).
     * @param selectionMode This parameter is to indicate how the new select operation affects the original selection. It can only be the following enumeration values: `New`, `AddToCurrent`, `RemoveFromCurrent`, or `SelectFromCurrent`.
     * */
    selectFeaturesByGraphic(graphic, spatialRelationship, selectionMode) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_9__.loadArcGISJSAPIModules)([
                'esri/geometry/geometryEngine'
            ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
                const geometryEngine = modules[0];
                let geometry = graphic.geometry;
                if ((geometry.type === 'point' || geometry.type === 'polyline')) {
                    const resolution = this.view.scale * 2.54 / 9600;
                    geometry = geometryEngine.buffer(geometry, 10 * resolution, 'meters');
                }
                const query = {
                    geometry: geometry,
                    spatialRelationship: spatialRelationship,
                    returnGeometry: true,
                    returnZ: true,
                    outFields: ['*']
                };
                const jimuLayerViews = this.jimuLayerViews;
                const jimuLayerViewKeys = Object.keys(jimuLayerViews);
                const allSelectPromises = [];
                for (let i = 0; i < jimuLayerViewKeys.length; i++) {
                    const tempJimuLayerView = jimuLayerViews[jimuLayerViewKeys[i]];
                    if (tempJimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer || tempJimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SceneLayer) {
                        if (tempJimuLayerView.selectFeaturesByQuery) {
                            const tempSelectPromise = tempJimuLayerView.selectFeaturesByQuery(query, selectionMode);
                            allSelectPromises.push(tempSelectPromise);
                        }
                    }
                }
                this.onSelectByQueryProgressChange();
                return Promise.all(allSelectPromises);
            }));
        });
    }
    /**
     * @ignore
     */
    cancelSelectByQuery() {
        const jimuLayerViews = this.jimuLayerViews;
        const jimuLayerViewKeys = Object.keys(jimuLayerViews);
        for (let i = 0; i < jimuLayerViewKeys.length; i++) {
            const jimuLayerView = jimuLayerViews[jimuLayerViewKeys[i]];
            if (jimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer || jimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SceneLayer) {
                if (jimuLayerView.cancelSelectByQuery) {
                    jimuLayerView.cancelSelectByQuery();
                }
            }
        }
    }
    getSelectByQueryProgress() {
        const jimuLayerViewProgresses = [];
        const jimuLayerViews = this.jimuLayerViews;
        const jimuLayerViewKeys = Object.keys(jimuLayerViews);
        for (let i = 0; i < jimuLayerViewKeys.length; i++) {
            const jimuLayerView = jimuLayerViews[jimuLayerViewKeys[i]];
            if (jimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.FeatureLayer || jimuLayerView.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes.SceneLayer) {
                if (jimuLayerView.getSelectQueryProgress) {
                    const jimuLayerViewProgress = jimuLayerView.getSelectQueryProgress();
                    jimuLayerViewProgresses.push(jimuLayerViewProgress);
                }
            }
        }
        if (jimuLayerViewProgresses.length === 0) {
            return 1;
        }
        else {
            let allProgress = jimuLayerViewProgresses.reduce((acc, jimuLayerViewProgress) => {
                return acc + jimuLayerViewProgress;
            });
            allProgress /= jimuLayerViewProgresses.length;
            // clamp progress to [0, 1]
            allProgress = Math.max(0, Math.min(allProgress, 1));
            return allProgress;
        }
    }
    /**
     * Destroy the `JimuMapView` instance and the [ArcGIS Maps SDK for JavaScript `View`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) at the same time.
     */
    destroy() {
        this.cacheListeners = [];
        this.restoreListeners = [];
        this.selectedFeaturesChangeListeners = [];
        this.jimuLayerViewCreatedListeners = [];
        this.selectByQueryProgressChangeListeners = [];
        if (this.watchPopupFeaturesHandle) {
            this.watchPopupFeaturesHandle.remove();
            this.watchPopupFeaturesHandle = null;
        }
        if (this.watchPopupSelectedHandle) {
            this.watchPopupSelectedHandle.remove();
            this.watchPopupSelectedHandle = null;
        }
        // clear addToMapDatas and showOnMapDatas for current JimuMapView
        const targetJimuMapViewId = this.id;
        const mutableState = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.mapWidgetId]) || {};
        const addToMapDatas = mutableState.addToMapDatas;
        const showOnMapDatas = mutableState.showOnMapDatas;
        if (addToMapDatas) {
            const layerIds = Object.keys(addToMapDatas);
            layerIds.forEach(layerId => {
                const addToMapData = addToMapDatas[layerId];
                if (addToMapData && addToMapData.mapWidgetId === this.mapWidgetId && addToMapData.jimuMapViewId === targetJimuMapViewId) {
                    delete addToMapDatas[layerId];
                }
            });
        }
        if (showOnMapDatas) {
            const layerIds = Object.keys(showOnMapDatas);
            layerIds.forEach(layerId => {
                const showOnMapData = showOnMapDatas[layerId];
                if (showOnMapData && showOnMapData.mapWidgetId === this.mapWidgetId && showOnMapData.jimuMapViewId === targetJimuMapViewId) {
                    delete showOnMapDatas[layerId];
                }
            });
        }
        // destroy JimuLayerViews
        const jimuLayerViews = this.jimuLayerViews;
        const jimuLayerViewIds = Object.keys(jimuLayerViews);
        for (let i = 0; i < jimuLayerViewIds.length; i++) {
            const tempJimuLayerView = jimuLayerViews[jimuLayerViewIds[i]];
            tempJimuLayerView.destroy();
        }
        // destroy view
        if (this.view) {
            if (!this.view.destroyed) {
                if (this.view.graphics && this.view.graphics.destroyed) {
                    this.view.graphics.destroy();
                }
                this.view.container = null;
                if (this.view.allLayerViews && this.view.allLayerViews.destroyed) {
                    this.view.allLayerViews.destroy();
                }
                if (this.view.layerViews && this.view.layerViews.destroyed) {
                    this.view.layerViews.destroy();
                }
                /**
                 * Before refactor, the tools are not destroyed either, and we don't find any issue.
                 *
                 * However, destory the tools instance will remove the tool container DOM, which causes we can't see the tool.
                 * So, let's keep the current logic.
                 */
                // this.jimuMapTools.forEach(tool => {
                //   if (!tool.instance?.destroyed) {
                //     tool.instance.destroy()
                //   }
                // })
                this.jimuMapTools = [];
                this.view.destroy();
                this.view = null;
            }
        }
    }
    _getDefaultJimuMapViewId() {
        const jimuMapViewsInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo;
        return Object.keys(jimuMapViewsInfo || {}).find(viewId => jimuMapViewsInfo[viewId].mapWidgetId === this.mapWidgetId);
    }
    /**
     * Draw data on the map, using a dedicated [`GraphicsLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html)
     * for every data entry. This will clear the layers drawn previously.
     */
    drawDataOnMap(newShowOnMapDatas) {
        // TODO: this method is called when any message actions/data actions are triggered
        // We use both this.newShowOnMapDatas and newShowOnMapDatas to add/update/remove layers.
        // this.newShowOnMapDatas comes from JimuMapView, newShowOnMapDatas comes from MutableStoreManager.
        // this.showOnMapDatas represents the added layer in the current Map, reflecting the state of the current Map.
        // newShowOnMapDatas represents the layer in the future Map and reflects the state of the future Map.
        // We diff the changes between this.showOnMapDatas and newShowOnMapDatas to add/update/remove layers.
        // data action promises
        const dataActionPromises = [];
        // preparing add data and update data.
        Object.entries(newShowOnMapDatas).forEach(entry => {
            const layerId = entry[0];
            const newShowOnMapData = entry[1];
            let jimuMapViewId = newShowOnMapData.jimuMapViewId;
            // There is no jimuMapViewId while generating the action data if the map widget hasn't been loaded in the another page/view,
            // use a default jimuMapViewId to show data.
            if (!jimuMapViewId && newShowOnMapData.mapWidgetId === this.mapWidgetId) {
                jimuMapViewId = this._getDefaultJimuMapViewId();
            }
            if (jimuMapViewId === this.id) {
                let promise = null;
                if (this.showOnMapDatas[layerId]) {
                    // update data
                    promise = this.updateDrawnDataRecordSet(newShowOnMapData.dataSet, layerId, newShowOnMapData.title, newShowOnMapData.symbolOption);
                }
                else {
                    // add data
                    promise = this.drawDataRecordSet(newShowOnMapData.dataSet, layerId, newShowOnMapData.title, newShowOnMapData.symbolOption);
                }
                if (newShowOnMapData.type === ActionType.DataAction) {
                    dataActionPromises.push(promise);
                }
                this.showOnMapDatas[layerId] = newShowOnMapData;
            }
        });
        Object.entries(this.showOnMapDatas).forEach(entry => {
            const layerId = entry[0];
            if (!newShowOnMapDatas[layerId]) {
                const layer = this.view.map.findLayerById(layerId);
                delete this.showOnMapDatas[layerId];
                layer && this.view.map.remove(layer);
            }
        });
        // needs to zoom to graphics if the action is data action
        Promise.all(dataActionPromises).then((graphicsArray) => {
            const graphics = graphicsArray.flat();
            if (graphics.length > 0) {
                _utils_zoomto_utils__WEBPACK_IMPORTED_MODULE_11__.zoomTo(this.view, graphics, {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                });
            }
        });
    }
    /**
     * Draw the features in a [`GraphicsLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html).
     */
    drawDataRecordSet(dataSet, targetLayerId, title, symbolOption) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_9__.loadArcGISJSAPIModules)([
                'esri/layers/GraphicsLayer'
            ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
                const [GraphicsLayer] = modules;
                const graphics = yield this.getGraphicsFromRecords(dataSet, symbolOption);
                const graphicsLayer = new GraphicsLayer({
                    id: targetLayerId,
                    title: title,
                    listMode: 'hide',
                    graphics: graphics
                });
                this.view.map.add(graphicsLayer);
                return graphics;
            })).catch((e) => {
                console.warn(e);
                return [];
            });
        });
    }
    /**
     * Update the drawn [`GraphicsLayer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html).
     */
    updateDrawnDataRecordSet(dataSet, targetLayerId, title, symbolOption) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: this method maybe called muliple times when map continuously handle ExtentChange message
            const layer = this.view.map.findLayerById(targetLayerId);
            let graphics = [];
            if (layer) {
                let dataSetRecordsChanged = false;
                const newRecords = dataSet.records || [];
                const oldRecords = ((_a = this.showOnMapDatas[targetLayerId]) === null || _a === void 0 ? void 0 : _a.dataSet.records) || [];
                if ((newRecords === null || newRecords === void 0 ? void 0 : newRecords.length) === (oldRecords === null || oldRecords === void 0 ? void 0 : oldRecords.length)) {
                    dataSetRecordsChanged = newRecords.some((record, index) => {
                        var _a;
                        return record.getId() !== ((_a = oldRecords[index]) === null || _a === void 0 ? void 0 : _a.getId());
                    });
                }
                else {
                    dataSetRecordsChanged = true;
                }
                if (dataSetRecordsChanged) {
                    // @ts-expect-error
                    layer.removeAll();
                    graphics = yield this.getGraphicsFromRecords(dataSet, symbolOption);
                    // @ts-expect-error
                    layer.addMany(graphics);
                }
            }
            return graphics;
        });
    }
    /**
     * Get the graphics from `dataRecords`
     */
    getGraphicsFromRecords(dataSet, symbolOption) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0,_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_9__.loadArcGISJSAPIModules)([
                'esri/symbols/support/symbolUtils',
                'esri/symbols/support/jsonUtils'
            ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
                const [symbolUtils, jsonUtils] = modules;
                const featureSet = yield _utils_feature_utils__WEBPACK_IMPORTED_MODULE_10__.convertDataRecordSetToFeatureSet(dataSet);
                const promises = featureSet.features.map((graphic) => __awaiter(this, void 0, void 0, function* () {
                    // don't show popup for GraphicsLayer, so need to make sure graphic.sourceLayer is empty
                    // it is safe to set graphic.sourceLayer to null here because featureUtils.convertDataRecordSetToFeatureSet() clone the graphic
                    graphic.sourceLayer = null;
                    if (!graphic.symbol) {
                        // e.g. 'esriGeometryMultipoint'
                        const dsGeometryType = dataSet.dataSource.getGeometryType();
                        // e.g. 'multipoint'
                        const jsAPIGeometryType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeRestAPIGeometryTypeToJSAPIGeometryType(dsGeometryType);
                        // e.g. 'point'
                        let symbolGeometryType;
                        if (jsAPIGeometryType === 'multipoint') {
                            symbolGeometryType = 'point';
                        }
                        else if (jsAPIGeometryType === 'extent') {
                            symbolGeometryType = 'polygon';
                        }
                        else {
                            symbolGeometryType = jsAPIGeometryType;
                        }
                        graphic.symbol = yield this.getSymbol(symbolUtils, jsonUtils, graphic, symbolGeometryType, symbolOption);
                    }
                }));
                yield Promise.all(promises);
                return featureSet.features;
            })).catch((e) => {
                console.warn(e);
                return null;
            });
        });
    }
    /**
     * get symbol
     */
    getSymbol(symbolUtils, jsonUtils, graphic, geometryType, symbolOption) {
        return __awaiter(this, void 0, void 0, function* () {
            // use code to maintain 'symbolOption' compatibility here
            // For app was created before online10.1 (inlcude 10.1), actionConfig is undefined, the final 'symbolOption' is undefined.
            // For app was created or saved after online10.1, actionConfig is a object,
            //  if actionConfig.isUseCustomSymbol is true, means check 'Use custom symbols' option, the final 'symbolOption' is actionConfig.symbolOption
            //  if actionConfig.isUseCustomSymbol is false, means uncheck 'Use layer-defined symbols' option, the final 'symbolOption' is null
            // Summary:
            // for 'symbolOption', the difference between the values 'undefined' and 'null':
            //   undefined: app was created before online10.1 (inlcude 10.1), use default symbol;
            //   null: app was created or saved after online10.1, use default renderer of layer.
            let symbol = null;
            if (symbolOption) {
                // 'Use custom symbols' option
                if (symbolOption.pointSymbol && geometryType === 'point') {
                    symbol = jsonUtils.fromJSON(symbolOption.pointSymbol);
                }
                else if (symbolOption.polylineSymbol && geometryType === 'polyline') {
                    symbol = jsonUtils.fromJSON(symbolOption.polylineSymbol);
                }
                else if (symbolOption.polygonSymbol && geometryType === 'polygon') {
                    symbol = jsonUtils.fromJSON(symbolOption.polygonSymbol);
                }
            }
            else if (symbolOption === undefined) {
                // <= online 10.1, use featureUtils.getDefaultSymbol() to create default 2D symbol
                symbol = this.getDefaultSymbol(symbolUtils, jsonUtils, graphic, geometryType);
            }
            else if (symbolOption === null) {
                // 'Use custom symbols' option
                // the return value maybe null
                symbol = this.getDefaultSymbolByRenderer(symbolUtils, jsonUtils, graphic);
            }
            if (!symbol) {
                symbol = this.getDefaultSymbol(symbolUtils, jsonUtils, graphic, geometryType);
            }
            return symbol;
        });
    }
    /**
     * get default symbol
     */
    getDefaultSymbol(symbolUtils, jsonUtils, graphic, geometryType) {
        return __awaiter(this, void 0, void 0, function* () {
            let symbol = _utils_feature_utils__WEBPACK_IMPORTED_MODULE_10__.getDefaultSymbol(geometryType);
            symbol = jsonUtils.fromJSON(symbol);
            if ((graphic === null || graphic === void 0 ? void 0 : graphic.layer) && geometryType === 'polyline') {
                // let symbol uses the width of symbolFromRenderer
                const symbolFromRenderer = yield this.getDefaultSymbolByRenderer(symbolUtils, jsonUtils, graphic);
                if (symbolFromRenderer) {
                    if (symbolFromRenderer === null || symbolFromRenderer === void 0 ? void 0 : symbolFromRenderer.color) {
                        symbolFromRenderer.color = symbol.color;
                    }
                    else if (symbolFromRenderer === null || symbolFromRenderer === void 0 ? void 0 : symbolFromRenderer.material) {
                        symbolFromRenderer.material.color = symbol.color;
                    }
                    symbol = symbolFromRenderer;
                }
            }
            return symbol;
        });
    }
    /**
     * get default symbol from renderer, maybe return null
     */
    getDefaultSymbolByRenderer(symbolUtils, jsonUtils, graphic) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return __awaiter(this, void 0, void 0, function* () {
            let resultSymbol = null;
            let displayedSymbol = null;
            try {
                displayedSymbol = yield symbolUtils.getDisplayedSymbol(graphic);
            }
            catch (e) {
                displayedSymbol = null;
                resultSymbol = null;
            }
            if (displayedSymbol) {
                resultSymbol = displayedSymbol;
                // if symbol is a 3D symbol and the view is 2D MapView, we need to convert it to 2D symbol
                const is2DView = this.view && this.view.declaredClass === 'esri.views.MapView';
                if (is2DView) {
                    if (displayedSymbol.declaredClass === 'esri.symbols.PointSymbol3D') {
                        const symbolJson = {
                            type: 'esriSMS',
                            color: [255, 255, 0, 150],
                            outline: {
                                color: [255, 255, 0, 150],
                                width: 1
                            }
                        };
                        const pointSymbol3D = displayedSymbol;
                        const symbolLayers = pointSymbol3D.symbolLayers.toArray();
                        if (symbolLayers.length > 0) {
                            const color = (_b = (_a = symbolLayers[0].material) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.toJSON();
                            if (color) {
                                symbolJson.color = color;
                                symbolJson.outline.color = color;
                            }
                        }
                        resultSymbol = jsonUtils.fromJSON(symbolJson);
                    }
                    else if (displayedSymbol.declaredClass === 'esri.symbols.LineSymbol3D') {
                        const symbolJson = {
                            type: 'esriSLS',
                            color: [255, 255, 0, 150],
                            width: 1
                        };
                        const lineSymbol3D = displayedSymbol;
                        const symbolLayers = lineSymbol3D.symbolLayers.toArray();
                        if (symbolLayers.length > 0) {
                            const lineSymbol3DLayer = symbolLayers.find(symbolLayer => symbolLayer.declaredClass === 'esri.symbols.LineSymbol3DLayer');
                            if (lineSymbol3DLayer) {
                                const color = (_d = (_c = lineSymbol3DLayer.material) === null || _c === void 0 ? void 0 : _c.color) === null || _d === void 0 ? void 0 : _d.toJSON();
                                if (color) {
                                    symbolJson.color = color;
                                }
                                if (lineSymbol3DLayer.size > 0) {
                                    symbolJson.width = lineSymbol3DLayer.size;
                                }
                            }
                            else {
                                const color = (_f = (_e = symbolLayers[0].material) === null || _e === void 0 ? void 0 : _e.color) === null || _f === void 0 ? void 0 : _f.toJSON();
                                if (color) {
                                    symbolJson.color = color;
                                }
                            }
                        }
                        resultSymbol = jsonUtils.fromJSON(symbolJson);
                    }
                    else if (displayedSymbol.declaredClass === 'esri.symbols.PolygonSymbol3D') {
                        const symbolJson = {
                            type: 'esriSFS',
                            color: [255, 255, 0, 150],
                            outline: {
                                color: [255, 255, 0, 150],
                                width: 1
                            }
                        };
                        const polygonSymbol3D = displayedSymbol;
                        const symbolLayers = polygonSymbol3D.symbolLayers.toArray();
                        if (symbolLayers.length > 0) {
                            const fillSymbol3DLayer = symbolLayers.find(symbolLayer => symbolLayer.declaredClass === 'esri.symbols.FillSymbol3DLayer');
                            const extrudeSymbol3DLayer = symbolLayers.find(symbolLayer => symbolLayer.declaredClass === 'esri.symbols.ExtrudeSymbol3DLayer');
                            if (fillSymbol3DLayer) {
                                const color = (_h = (_g = fillSymbol3DLayer.material) === null || _g === void 0 ? void 0 : _g.color) === null || _h === void 0 ? void 0 : _h.toJSON();
                                if (color) {
                                    symbolJson.color = color;
                                    symbolJson.outline.color = color;
                                }
                                if (fillSymbol3DLayer.outline) {
                                    const outlineColor = (_j = fillSymbol3DLayer.outline.color) === null || _j === void 0 ? void 0 : _j.toJSON();
                                    if (outlineColor) {
                                        symbolJson.outline.color = outlineColor;
                                    }
                                    if (fillSymbol3DLayer.outline.size > 0) {
                                        symbolJson.outline.width = fillSymbol3DLayer.outline.size;
                                    }
                                }
                            }
                            else if (extrudeSymbol3DLayer) {
                                const color = (_l = (_k = extrudeSymbol3DLayer.material) === null || _k === void 0 ? void 0 : _k.color) === null || _l === void 0 ? void 0 : _l.toJSON();
                                if (color) {
                                    symbolJson.color = color;
                                    symbolJson.outline.color = color;
                                }
                            }
                        }
                        resultSymbol = jsonUtils.fromJSON(symbolJson);
                    }
                }
            }
            return resultSymbol;
        });
    }
    /**
     * add layers according to the corresponding types of data source
     */
    addOrRemoveDataOnMap(newAddToMapDatas) {
        // preparing add data.
        Object.entries(newAddToMapDatas).forEach(entry => {
            const addToMapDataId = entry[0];
            const addToMapData = entry[1];
            let jimuMapViewId = addToMapData.jimuMapViewId;
            // There is no jimuMapViewId while generating the action data if the map widget hasn't been loaded in the another page/view,
            // use a default jimuMapViewId to show data.
            if (!jimuMapViewId && addToMapData.mapWidgetId === this.mapWidgetId) {
                jimuMapViewId = this._getDefaultJimuMapViewId();
            }
            if (jimuMapViewId === this.id && addToMapData.dataChangeType === DataChangeType.Create) {
                if (addToMapData.dataChangeType === DataChangeType.Create) {
                    // dataSource.createJSAPILayerByDataSource() is an async function, so we need to set the dataChangeType to 'Creating' to avoid calling addLayerToMap multiple times.
                    addToMapData.dataChangeType = DataChangeType.Creating;
                    const targetLayerId = addToMapDataId;
                    this.addLayerToMap(addToMapData.dataSourceId, addToMapDataId).then(() => {
                        const addToMapData = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.mapWidgetId, 'addToMapDatas', `${targetLayerId}`]);
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.mapWidgetId, `addToMapDatas.${targetLayerId}`, Object.assign(Object.assign({}, addToMapData), { dataChangeType: DataChangeType.Created, dataChangeStatus: DataChangeStatus.Fulfilled }));
                    }).catch((err) => {
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.mapWidgetId, `addToMapDatas.${targetLayerId}.dataChangeStatus`, DataChangeStatus.Rejected);
                        setTimeout(() => {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.mapWidgetId, `addToMapDatas.${targetLayerId}.dataChangeStatus`, DataChangeStatus.RejectedAndKnown);
                        }, 3000);
                    });
                }
            }
            else if (jimuMapViewId === this.id && addToMapData.dataChangeType === DataChangeType.Remove) {
                this.removeLayerFromMap(addToMapDataId);
                delete newAddToMapDatas[addToMapDataId];
            }
        });
    }
    addLayerToMap(dataSourceId, targetLayerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
            // use new layer object to add to map, avoid layers being shared.
            const layer = yield (dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource());
            layer.id = targetLayerId;
            this.view.map.add(layer);
            const fromRuntime = true;
            const jimuLayerView = yield this.createJimuLayerView(layer, null, this.getMaxLayerIndex(), dataSource, fromRuntime);
            return jimuLayerView;
        });
    }
    /**
     * Return the max layer index of root layers
     */
    getMaxLayerIndex() {
        let max = 0;
        Object.keys(this.jimuLayerViews).filter(lvId => !this.jimuLayerViews[lvId].parentJimuLayerViewId)
            .forEach(lvId => {
            max = Math.max(this.jimuLayerViews[lvId].index, max);
        });
        return max;
    }
    removeLayerFromMap(targetLayerId) {
        const layerInMap = this.view.map.findLayerById(targetLayerId);
        layerInMap && this.view.map.remove(layerInMap);
    }
    parseLayersVisibilityFromUrlHash() {
        let urlHashLayersVisibility = null;
        try {
            const appState = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            if (appState.urlHashObject) {
                const widgetUrlParams = appState.urlHashObject[this.mapWidgetId];
                if (widgetUrlParams && widgetUrlParams.layer_visibility) {
                    const mapsLayerVisibility = JSON.parse(widgetUrlParams.layer_visibility);
                    if (mapsLayerVisibility) {
                        const currMapLayerVisibility = mapsLayerVisibility[this.id];
                        if (currMapLayerVisibility && typeof currMapLayerVisibility === 'object') {
                            urlHashLayersVisibility = currMapLayerVisibility;
                        }
                    }
                }
            }
        }
        catch (e) {
            urlHashLayersVisibility = null;
            console.error('parse layers visibility from url hash error', e);
        }
        return urlHashLayersVisibility;
    }
    /**
     * Get current layers visibility, it is used to update url hash.
     */
    getCurrentLayersVisibilityForUrlHash() {
        const layerVisibilityObjForOneMap = {};
        const jimuLayerViews = Object.values(this.jimuLayerViews);
        jimuLayerViews.forEach(jimuLayerView => {
            // only record layer visibility for original layers in web map/web scene, so ignore layer that added at runtime
            // only record layer visbility which current visbility is different with original layer visibility to reduce record length
            if (jimuLayerView.layer && !jimuLayerView.fromRuntime && jimuLayerView.layer.visible !== jimuLayerView.originalLayerVisible) {
                layerVisibilityObjForOneMap[jimuLayerView.id] = jimuLayerView.layer.visible;
            }
        });
        return layerVisibilityObjForOneMap;
    }
    /**
     * @ignore
     */
    updateUrlHashLayerVisibility() {
        const mapsLayerVisibility = {};
        mapsLayerVisibility[this.id] = this.getCurrentLayersVisibilityForUrlHash();
        if (this.jimuMapViewGroup) {
            const jimuLayerViews = this.jimuMapViewGroup.getAllJimuMapViews();
            jimuLayerViews.forEach(jimuMapView => {
                if (jimuMapView !== this) {
                    mapsLayerVisibility[jimuMapView.id] = jimuMapView.getCurrentLayersVisibilityForUrlHash();
                }
            });
        }
        const urlManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance();
        Object.keys(mapsLayerVisibility).forEach(jimuMapViewId => {
            const urlHashLayersVisibility = mapsLayerVisibility[jimuMapViewId];
            if (!urlHashLayersVisibility || Object.keys(urlHashLayersVisibility).length === 0) {
                delete mapsLayerVisibility[jimuMapViewId];
            }
        });
        let layerVisibilityStr = null;
        if (Object.keys(mapsLayerVisibility).length > 0) {
            layerVisibilityStr = JSON.stringify(mapsLayerVisibility);
        }
        urlManager.setWidgetUrlParams(this.mapWidgetId, {
            layer_visibility: layerVisibilityStr
        });
    }
    /**
     * Indicates if the JimuMapView is destroyed or not. Returns true if the view is not created or if the view is destroyed, otherwise returns false.
     */
    isDestroyed() {
        if (this.view) {
            return this.view.destroyed;
        }
        else {
            return true;
        }
    }
    /**
     * Return true if map instance is alive and not destroyed, but map container is detached from the DOM tree.
     * @ignore
     */
    isCached() {
        var _a;
        const viewContainer = (_a = this.view) === null || _a === void 0 ? void 0 : _a.container;
        const cached = viewContainer && !document.body.contains(viewContainer);
        return cached;
    }
    /**
     * The listener will be triggered when the map is cached, which means map container is detached from the DOM tree but the map is not destroyed.
     * @ignore
     * @param listener
     */
    addCacheListener(listener) {
        if (!this.cacheListeners.includes(listener)) {
            this.cacheListeners.push(listener);
        }
    }
    /**
     * @ignore
     * @param listener
     */
    removeCacheListener(listener) {
        const index = this.cacheListeners.indexOf(listener);
        if (index >= 0) {
            this.cacheListeners.splice(index, 1);
        }
    }
    /**
     * This method is called when map container is detached from the DOM tree but the map is not destroyed,
     * a typical scenario is that the map is scrolled out of the current page and map becomes invisible.
     * @ignore
     */
    onCache() {
        this.cacheListeners.forEach(listener => {
            try {
                listener(this);
            }
            catch (e) {
                console.error('JimuMapView onCache listener error', this.id, listener, e);
            }
        });
    }
    /**
     * The listener will be triggered when the map is restored from cached status, which means map container is attached to the DOM tree again.
     * @ignore
     * @param listener
     */
    addRestoreListener(listener) {
        if (!this.restoreListeners.includes(listener)) {
            this.restoreListeners.push(listener);
        }
    }
    /**
     * @ignore
     * @param listener
     */
    removeRestoreListener(listener) {
        const index = this.restoreListeners.indexOf(listener);
        if (index >= 0) {
            this.restoreListeners.splice(index, 1);
        }
    }
    /**
     * This method is called when map container is attached to the DOM tree again,
     * a typical scenario is that the cached map is scrolled into the current page and map becomes visible again.
     * @ignore
     */
    onRestore() {
        this.restoreListeners.forEach(listener => {
            try {
                listener(this);
            }
            catch (e) {
                console.error('JimuMapView onRestore listener error', this.id, listener, e);
            }
        });
    }
    /**
     * @ignore
     * @param listener
     */
    addJimuLayerViewSelectedFeaturesChangeListener(listener) {
        if (!this.selectedFeaturesChangeListeners.includes(listener)) {
            this.selectedFeaturesChangeListeners.push(listener);
        }
    }
    /**
     * @ignore
     * @param listener
     */
    removeJimuLayerViewSelectedFeaturesChangeListener(listener) {
        const index = this.selectedFeaturesChangeListeners.indexOf(listener);
        if (index >= 0) {
            this.selectedFeaturesChangeListeners.splice(index, 1);
        }
    }
    /**
     * @ignore
     * @param jimuLayerView
     */
    onJimuLayerViewSelectedFeaturesChange(jimuLayerView, isClear) {
        return __awaiter(this, void 0, void 0, function* () {
            this.selectedFeaturesChangeListeners.forEach(listener => {
                try {
                    listener(jimuLayerView);
                }
                catch (e) {
                    console.error('onJimuLayerViewSelectedFeaturesChange listener error', this.id, listener, e);
                }
            });
            yield this.handlePopupOnSelectionChange(jimuLayerView, isClear);
        });
    }
    /**
     * @ignore
     * @param listener
     */
    addSelectByQueryProgressChangeListener(listener) {
        if (!this.selectByQueryProgressChangeListeners.includes(listener)) {
            this.selectByQueryProgressChangeListeners.push(listener);
        }
    }
    /**
     * @ignore
     * @param listener
     */
    removeSelectByQueryProgressChangeListener(listener) {
        const index = this.selectByQueryProgressChangeListeners.indexOf(listener);
        if (index >= 0) {
            this.selectByQueryProgressChangeListeners.splice(index, 1);
        }
    }
    /**
     * @ignore
     * @param progress
     */
    onSelectByQueryProgressChange() {
        const progress = this.getSelectByQueryProgress();
        this.selectByQueryProgressChangeListeners.forEach(listener => {
            try {
                listener(progress);
            }
            catch (e) {
                console.error('onSelectByQueryProgressChange listener error', this.id, listener, e);
            }
        });
    }
    /**
     * The listener will be triggered when JimuLayerView is created and ready to use.
     * @ignore
     * @param listener
     */
    addJimuLayerViewCreatedListener(listener) {
        if (!this.jimuLayerViewCreatedListeners.includes(listener)) {
            this.jimuLayerViewCreatedListeners.push(listener);
        }
    }
    /**
     * @ignore
     * @param listener
     */
    removeJimuLayerViewCreatedListener(listener) {
        const index = this.jimuLayerViewCreatedListeners.indexOf(listener);
        if (index >= 0) {
            this.jimuLayerViewCreatedListeners.splice(index, 1);
        }
    }
    onJimuLayerViewCreated(jimuLayerView) {
        this.jimuLayerViewCreatedListeners.forEach(listener => {
            try {
                listener(jimuLayerView);
            }
            catch (e) {
                console.error('onJimuLayerViewCreated listener error', this.id, listener, e);
            }
        });
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-feature-layer-scene-layer-view-common.ts":
/*!************************************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-feature-layer-scene-layer-view-common.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuFeatureLayerSceneLayerViewCommon: () => (/* binding */ JimuFeatureLayerSceneLayerViewCommon)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _jimu_layer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jimu-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts");
/* harmony import */ var _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-sources/arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable no-async-promise-executor */



const EXB_OID = '__EXB_OID__';
/**
 * @ignore
 * The JimuFeatureLayerView extends from the JimuLayerView.
 */
class JimuFeatureLayerSceneLayerViewCommon extends _jimu_layer_view__WEBPACK_IMPORTED_MODULE_1__.JimuLayerView {
    constructor(options) {
        super(options);
        /**
         * highlightFeatureLayer is used highlight layer in mapservice, it is a client-side FeatureLayer.
         */
        this.highlightFeatureLayer = null;
        this.highlightFeatureLayerView = null;
        /** @ignore */
        this.localDefinitionExpression = '';
        /** @ignore */
        this.originalGdbVersion = null;
        /**
         * @ignore
         * The following variables are used for selectFeaturesByQuery() method.
         */
        this.selectQueryId = 0;
        this.selectQueryIdChangeListeners = [];
        // used to abort the on-the-fly selecting task
        this.selectByQueryAbortController = null;
        // the progress of latest selectByQuery method, value is in range of [0, 1]
        this.selectByQueryProgress = 1;
        /**
         * This property should only be used when DataSource not exists.
         * @ignore
         */
        this.selectedFeatureIds = [];
        this.originalGdbVersion = this.layer.gdbVersion;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            [this.reactiveUtils, this.Graphic] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)(['esri/core/reactiveUtils', 'esri/Graphic']);
            this.watchHighlightOptions();
            this.watchLayerVisible();
            this.watchPopupSelectFeature();
            this.watchPopupVisible();
            this.tryMoveToCenter();
            return Promise.resolve(this);
        });
    }
    destroy() {
        if (this.popupSelectFeatureWatchHandle) {
            this.popupSelectFeatureWatchHandle.remove();
            this.popupSelectFeatureWatchHandle = null;
        }
        this.releasePopupVisibleWatchHandle();
        if (this.layerVisibleWatchHandle) {
            this.layerVisibleWatchHandle.remove();
            this.layerVisibleWatchHandle = null;
        }
        if (this.highlightOptionsWatchHandle) {
            this.highlightOptionsWatchHandle.remove();
            this.highlightOptionsWatchHandle = null;
        }
        super.destroy();
    }
    /**
     * @ignore
     */
    getSelectedFeatureCount() {
        let count = 0;
        const ds = this.getLayerDataSource();
        if (ds) {
            count = ds.getSelectedRecords().length;
        }
        if (count === 0) {
            // Typically, this is the case that we highlight a feature by popup click, but the data source is not used and not created.
            if (this.selectedFeatureIds) {
                count = this.selectedFeatureIds.length;
            }
        }
        return count;
    }
    /**
     * Get selected features of current JimuLayerView.
     */
    getSelectedFeatures() {
        return __awaiter(this, void 0, void 0, function* () {
            let selectedGraphics = [];
            const ds = this.getLayerDataSource();
            let dsSelectedRecords = [];
            if (ds) {
                dsSelectedRecords = ds.getSelectedRecords();
            }
            // If dataSource exists, we get selected features from dataSource, otherwise we get selected features from JimuLayerView.
            if (dsSelectedRecords.length > 0) {
                selectedGraphics = dsSelectedRecords.map(record => {
                    // record.feature maybe a plain object, or maybe a esri.Graphic instance.
                    // We need to make sure selectedGraphics always be esri.Graphic instances.
                    if (record.feature.declaredClass === 'esri.Graphic') {
                        return record.feature;
                    }
                    else {
                        return this.Graphic.fromJSON(record.feature);
                    }
                });
            }
            else {
                // Typically, this is the case that we highlight a feature by popup click, but the data source is not used and not created.
                selectedGraphics = yield this.querySelectedFeaturesFromClient();
            }
            // We need to use graphic.jimuLayerViewId in JimuMapView.openPopupForAllSelectedFeatures and map widget popup data action.
            selectedGraphics.forEach((graphic) => {
                graphic.jimuLayerViewId = this.id;
            });
            return selectedGraphics;
        });
    }
    /**
     * Query features from client view.
     * The layer view does not provide queryFromServer. When you need to query from server, use the data source.
     * @param query
     */
    queryFeaturesFromClient(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                if (!this.view) {
                    resolve([]);
                    return;
                }
                yield this.whenCurrentLayerViewNotUpdating();
                let features = null;
                let queryErr = null;
                try {
                    const featureSet = yield this.view.queryFeatures(query);
                    features = featureSet === null || featureSet === void 0 ? void 0 : featureSet.features;
                }
                catch (err) {
                    console.error('Query feature from view error.', this.id, err);
                    queryErr = err;
                    features = [];
                }
                // If layerView is SceneLayerView3D and query.returnGeometry is true, then we may get the following error: returnGeometry is not yet supported for mesh scene layer queries
                // For this case, we need to re-query the SceneLayerView3D again with returnGeometry false.
                if (queryErr && this.view.declaredClass === 'esri.views.3d.layers.SceneLayerView3D' && query.returnGeometry) {
                    const newQuery = Object.assign({}, query, { returnGeometry: false });
                    try {
                        const featureSet = yield this.view.queryFeatures(newQuery);
                        features = featureSet === null || featureSet === void 0 ? void 0 : featureSet.features;
                    }
                    catch (err) {
                        console.error('Query feature from view error.', this.id, err);
                        features = [];
                    }
                }
                if (!features) {
                    features = [];
                }
                resolve(features);
            }));
        });
    }
    queryFeaturesFromClientHighlightLayer(objectIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const layerView = this.highlightFeatureLayerView;
                if (!objectIds) {
                    objectIds = [];
                }
                if (!layerView || objectIds.length === 0) {
                    resolve([]);
                    return;
                }
                yield this.whenHighlightLayerViewNotUpdating();
                const query = {
                    where: '1=1',
                    returnGeometry: true
                };
                // Use layer.queryFeatures() instead of layerView.queryFeatures() because layerView.queryFeatures() will get empty features sometimes.
                this.highlightFeatureLayer.queryFeatures(query).then(featureSet => {
                    var _a;
                    const featuresMap = {};
                    const resultFeatures = [];
                    if (((_a = featureSet.features) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        featureSet.features.forEach((feature) => {
                            const oid = feature.getAttribute(EXB_OID);
                            featuresMap[oid] = feature;
                        });
                        objectIds.forEach(oid => {
                            const feature = featuresMap[oid];
                            if (feature) {
                                resultFeatures.push(feature);
                            }
                        });
                    }
                    resolve(resultFeatures);
                }, err => {
                    console.error('Query feature from highlightFeatureLayer error.', err);
                    resolve([]);
                });
            }));
        });
    }
    /**
     * This method should only be called when DataSource not exists.
     * @ignore
     */
    querySelectedFeaturesFromClient() {
        return __awaiter(this, void 0, void 0, function* () {
            let features = [];
            if (this.selectedFeatureIds.length === 0) {
                return features;
            }
            const query = {
                objectIds: this.selectedFeatureIds,
                returnGeometry: true
            };
            if (this.highlightFeatureLayer) {
                features = yield this.queryFeaturesFromClientHighlightLayer(this.selectedFeatureIds);
            }
            else {
                features = yield this.queryFeaturesFromClient(query);
            }
            return features;
        });
    }
    /********************
     * The layer view provides some selection methods:
     * * selectFeatureById
     * * selectFeaturesByIds
     * * selectFeaturesByQuery
     *
     * What the selection does is: it will highlight the feature. If the layer view has related data source, the related data records will be selected as well.
     ******************/
    /**
     * When select feature by ID, we can pass in the data source record so when the selected records are not loaded in data source, we can add them in.
     * However, if the record is not loaded and is not passed in, there will be no selection.
     * If we can get the layer data source, record can be FeatureDataRecord or Graphic. Otherwise, record can only be Graphic.
     */
    selectFeatureById(id, record) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const oldSelectedFeatureIdsCount = this.selectedFeatureIds.length;
            this.selectedFeatureIds = [];
            const layerDs = yield this.getOrCreateLayerDataSourceIfUsed();
            if (layerDs) {
                if (!id && layerDs.getSelectedRecordIds().length === 0 && oldSelectedFeatureIdsCount === 0) { // for performance reason
                    return;
                }
                // we do not highlight here becaseu we will do highlight when layerInfoChange.
                if (id) {
                    let featureDataRecord = null;
                    if (record && record.declaredClass === 'esri.Graphic') {
                        featureDataRecord = layerDs.buildRecord(record);
                    }
                    else {
                        featureDataRecord = record;
                    }
                    layerDs.selectRecordById(id + '', featureDataRecord);
                }
                else {
                    (_a = this.getLayerDataSource()) === null || _a === void 0 ? void 0 : _a.selectRecordById(null);
                }
            }
            else {
                const mapWidgetId = this.getMapWidgetId();
                if (id) {
                    this.highLightFeatures([id], record ? [record] : null);
                    this.selectedFeatureIds = [Number(id)];
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance().changeHashObjectByDataSourceSelection(this.layerDataSourceId, { widgetId: mapWidgetId, ids: [id + ''] });
                }
                else {
                    this.clearHighLight();
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance().changeHashObjectByDataSourceSelection(this.layerDataSourceId, { widgetId: mapWidgetId, ids: [id + ''] });
                }
            }
        });
    }
    /**
     * See `selectFeatureById`
     */
    selectFeaturesByIds(ids, records) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldSelectedFeatureIdsCount = this.selectedFeatureIds.length;
            this.selectedFeatureIds = [];
            const layerDs = yield this.getOrCreateLayerDataSourceIfUsed();
            if (layerDs) {
                if (ids.length === 0 && layerDs.getSelectedRecordIds().length === 0 && oldSelectedFeatureIdsCount === 0) { // for performance reason
                    return;
                }
                layerDs.selectRecordsByIds(ids.map(id => id + ''), records);
            }
            else {
                if (ids.length > 0) {
                    const numIds = ids.map(id => Number(id));
                    this.highLightFeatures(numIds);
                    this.selectedFeatureIds = numIds.slice();
                }
                else {
                    this.clearHighLight();
                }
                const mapWidgetId = this.getMapWidgetId();
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance().changeHashObjectByDataSourceSelection(this.layerDataSourceId, { widgetId: mapWidgetId, ids: ids.map(id => id + '') });
            }
        });
    }
    /**
     * Select features from the layer. If the last select operation has not been completed, calling this method will automatically terminate the previous selection progress.
     * @param query The query parameters.
     * @param selectionMode This parameter is to indicate how the new select operation affects the original selection. It can only be the following enumeration values: `New`, `AddToCurrent`, `RemoveFromCurrent`, or `SelectFromCurrent`.
     * @returns
     */
    selectFeaturesByQuery(query, selectionMode) {
        if (selectionMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode.AddToCurrent && selectionMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode.RemoveFromCurrent && selectionMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode.SelectFromCurrent) {
            selectionMode = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode.New;
        }
        query.geometry = query.geometry.toJSON ? query.geometry.toJSON() : query.geometry;
        query = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.cloneDeep(query);
        this.selectedFeatureIds = [];
        // create new AbortController for the new selecting task
        const abortController = new AbortController();
        // If the previous selecting task is ongoing, then cancel the previous one.
        this.cancelSelectByQuery();
        this.selectByQueryAbortController = abortController;
        const prevSelectPromise = this.selectQueryPromise || Promise.resolve([]);
        this.selectQueryPromise = new Promise((resolve) => {
            // make sure the previous select is done, then do the new select, otherwise maybe conflict
            prevSelectPromise.finally(() => __awaiter(this, void 0, void 0, function* () {
                let layerDs = null;
                let finalFeatureDataRecords = [];
                const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
                const mapWidgetId = jimuMapView.mapWidgetId;
                try {
                    layerDs = yield this.getOrCreateLayerDataSource();
                    if (layerDs) {
                        const signal = abortController.signal;
                        const queryResult = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.selectBySelectionMode({
                            widgetId: mapWidgetId,
                            ds: layerDs,
                            query,
                            selectionMode,
                            signal,
                            progressCallback: (process) => {
                                this.setSelectQueryProgress(abortController, process);
                            },
                            // only update selection if the abortController is the latest one
                            updateSelectionIfAborted: () => this.isFreshAbortController(abortController)
                        });
                        if (queryResult === null || queryResult === void 0 ? void 0 : queryResult.records) {
                            finalFeatureDataRecords = queryResult.records;
                        }
                    }
                }
                catch (e) {
                    finalFeatureDataRecords = [];
                }
                const finalFeatures = finalFeatureDataRecords.map(r => r.feature);
                const message = new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(mapWidgetId, finalFeatureDataRecords);
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(message);
                this.setSelectQueryProgress(abortController, 1);
                if (this.isFreshAbortController(abortController)) {
                    this.selectQueryPromise = null;
                }
                resolve(finalFeatures);
            }));
        });
        return this.selectQueryPromise;
    }
    /**
     * @ignore
     */
    cancelSelectByQuery() {
        if (this.selectByQueryAbortController) {
            this.selectByQueryAbortController.abort();
            this.selectByQueryAbortController = null;
        }
    }
    isFreshAbortController(abortController) {
        return abortController && abortController === this.selectByQueryAbortController;
    }
    getOrCreateLocalDataSource(localDsId) {
        return __awaiter(this, void 0, void 0, function* () {
            const layerDs = yield this.getOrCreateLayerDataSource();
            if (layerDs) {
                return layerDs.dataSourceManager.createLocalDataSource(layerDs, localDsId);
            }
            return null;
        });
    }
    /**
     * @ignore
     */
    getSelectQueryProgress() {
        if (this.selectQueryPromise) {
            const progress = this.selectByQueryProgress;
            const minProgress = 0.01;
            if (typeof progress === 'number') {
                return Math.max(progress, minProgress);
            }
            else {
                return minProgress;
            }
        }
        else {
            return 1;
        }
    }
    setSelectQueryProgress(abortController, progress) {
        if (this.isFreshAbortController(abortController)) {
            const minProgress = 0;
            const maxProgress = 1;
            // clamp progress to [0, 1]
            this.selectByQueryProgress = Math.max(minProgress, Math.min(progress, maxProgress));
            const jimuMapView = this.getJimuMapView();
            jimuMapView.onSelectByQueryProgressChange();
        }
    }
    /**
     * @ignore
     *
     * The promise resolves an __esri.Query instance if client query is ready to use, otherwise resolves null.
     * Need to make sure this method resolves true before call clientQueryFeatures(), clientQueryObjectIds() and clientQueryFeatureCount().
     * @param queryParams
     */
    whenClientQueryReady(queryParams, queryType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!queryParams) {
                throw new Error(`query param is null, ${this.id} not ready for client query`);
            }
            const apiQuery = yield this.getApiQueryForClientQuery(queryParams, queryType);
            if (!apiQuery) {
                throw new Error(`can't convert queryParams to API query instance, ${this.id} not ready for client query`);
            }
            // SceneLayer and fake FeatureLayer doesn't support client query.
            // If layer.declaredClass is 'esri.layers.FeatureLayer', means it is a real FeatureLayer.
            if (this.layer.declaredClass !== 'esri.layers.FeatureLayer') {
                console.log(`layer is not a real FeatureLayer, ${this.id} not ready for client query`);
                return null;
            }
            const jimuMapView = this.getJimuMapView();
            if (jimuMapView.isDestroyed()) {
                console.log(`JimuMapView is destroyed, ${this.id} not ready for client query`);
                return null;
            }
            if (jimuMapView.isCached()) {
                console.log(`JimuMapView is cached, ${this.id} not ready for client query`);
                return null;
            }
            yield jimuMapView.whenJimuMapViewLoaded();
            // wait for layer view loaded
            if (!this.view) {
                yield jimuMapView.whenJimuLayerViewLoaded(this.id);
            }
            if (!this.view) {
                console.log(`layerView is not available, ${this.id} not ready for client query`);
                return null;
            }
            const layerView = this.view; // __esri.FeatureLayerView
            const ds = yield this.getOrCreateLayerDataSource();
            if (!ds) {
                throw new Error(`layer data source is not available, ${this.id} not ready for client query`);
            }
            let isGeometryPass = yield this.checkGeometryForClientQuery(apiQuery);
            if (!isGeometryPass) {
                return null;
            }
            // TODO: check map cached or not
            this.updateLayerOutFieldsForClientQuery(queryParams, queryType, ds);
            yield this.whenCurrentLayerViewNotUpdating();
            // need to check geometry again because user may already pan/zoom map when runing here
            isGeometryPass = yield this.checkGeometryForClientQuery(apiQuery);
            if (!isGeometryPass) {
                return null;
            }
            if (this.view.updating) {
                throw new Error(`layerView.updating is still true after pass all checks, ${this.id} not ready for client query`);
            }
            // check geometry precision
            if (queryType === 'feature') {
                const returnFullGeometries = queryParams.returnGeometry && queryParams.returnFullGeometries;
                if (returnFullGeometries && !layerView.hasFullGeometries) {
                    console.log(`layerView.hasFullGeometries is false, ${this.id} not ready for client query`);
                    return null;
                }
            }
            return apiQuery;
        });
    }
    checkGeometryForClientQuery(apiQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const layerView = this.view;
                if (layerView.hasAllFeatures) {
                    return true;
                }
                const jimuMapView = this.getJimuMapView();
                const mapView = jimuMapView.view;
                const geometry = apiQuery.geometry;
                let geoExtent = null;
                if (geometry) {
                    if (geometry.extent) {
                        geoExtent = geometry.extent;
                    }
                    else if (geometry.type === 'point') {
                        geoExtent = geometry;
                    }
                }
                if (geoExtent) {
                    if (!mapView.extent.contains(geoExtent)) {
                        console.log(`current map extent does not contain geometry, ${this.id} not ready for client query`);
                        return false;
                    }
                    yield this.whenCurrentLayerViewNotUpdating();
                    // need to check geoExtent again because mapView.extent maybe changed after whenLayerViewNotUpdating() method
                    if (!mapView.extent.contains(geoExtent)) {
                        console.log(`current map extent does not contain geometry, ${this.id} not ready for client query`);
                        return false;
                    }
                    if (!layerView.hasAllFeaturesInView) {
                        console.log(`layerView.hasAllFeaturesInView is false, ${this.id} not ready for client query`);
                    }
                    return layerView.hasAllFeaturesInView;
                }
                else {
                    yield this.whenCurrentLayerViewNotUpdating();
                    if (!layerView.hasAllFeatures) {
                        console.log(`layerView.hasAllFeatures is false, ${this.id} not ready for client query`);
                    }
                    return layerView.hasAllFeatures;
                }
            }
            catch (e) {
                console.error('check geometry error for client query', e);
            }
            return false;
        });
    }
    updateLayerOutFieldsForClientQuery(queryParams, queryType, ds) {
        return __awaiter(this, void 0, void 0, function* () {
            const layerHasAllFields = this.layer.outFields && this.layer.outFields.includes('*');
            // If layer already has all fields, we don't need to update layer.outFields.
            if (!layerHasAllFields) {
                // add new required fields
                const requiredFields = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUsedFieldsFromFeatureLayerQueryParams(queryParams.asMutable({ deep: true }), ds, queryType) || [];
                let { added: newAddedFields } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.diffArrays(true, this.view.availableFields, requiredFields);
                if (newAddedFields.includes('*')) {
                    newAddedFields = ['*'];
                }
                if (newAddedFields.length > 0) {
                    console.log(`add new fields to layer.outFiellds for client query: ${newAddedFields}, view id: ${this.id}, query type:${queryType}`);
                    if (newAddedFields.includes('*')) {
                        this.layer.outFields = ['*'];
                    }
                    else {
                        const oldOutFields = this.layer.outFields || [];
                        const newOutFields = oldOutFields.concat(newAddedFields);
                        this.layer.outFields = newOutFields;
                    }
                }
            }
        });
    }
    /**
     * This method will resolve when this.view.updating is false.
     */
    whenCurrentLayerViewNotUpdating() {
        return this.whenLayerViewNotUpdating(this.view);
    }
    /**
     * This method will resolve when this.highlightFeatureLayerView.updating is false.
     */
    whenHighlightLayerViewNotUpdating() {
        return this.whenLayerViewNotUpdating(this.highlightFeatureLayerView);
    }
    /**
     * This method will resolve when layerView.updating is false.
     */
    whenLayerViewNotUpdating(layerView) {
        return new Promise((resolve) => {
            // layerView.updating is changed in a mirco task, so need to read layerView.updating in a setTimeout callback (macro task)
            setTimeout(() => {
                if (layerView.updating) {
                    // wait for the layer view to finish updating
                    let handle = layerView.watch('updating', val => {
                        if (!val) {
                            if (handle) {
                                handle.remove();
                                handle = null;
                                resolve();
                            }
                        }
                    });
                }
                else {
                    resolve();
                }
            }, 0);
        });
    }
    /**
     * @ignore
     *
     * Query features from layer view.
     * Note, this method never rejects, so need to check result.success to  determine whether the client query is successful.
     * @param queryParams
     */
    clientQueryFeatures(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            try {
                const apiQuery = yield this.whenClientQueryReady(queryParams, 'feature');
                if (apiQuery) {
                    const data = yield this.view.queryFeatures(apiQuery);
                    console.log(`Query from client-side. view id: ${this.id}`);
                    result = {
                        success: true,
                        data,
                        hasFullGeometries: !!this.view.hasFullGeometries
                    };
                }
            }
            catch (e) {
                result = null;
                console.error(`clientQueryFeatures err for ${this.id}`, e);
            }
            if (!result) {
                result = {
                    success: false,
                    data: null,
                    hasFullGeometries: false
                };
            }
            return result;
        });
    }
    /**
     * @ignore
     *
     * Executes a Query against features available for drawing in the layerView and returns array of the ObjectIDs of features that satisfy the input query.
     * Note, this method never rejects, so need to check result.success to  determine whether the client query is successful.
     * @param query
     */
    clientQueryObjectIds(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            try {
                const apiQuery = yield this.whenClientQueryReady(queryParams, 'id');
                if (apiQuery) {
                    let data = yield this.view.queryObjectIds(apiQuery);
                    if (!data) {
                        data = [];
                    }
                    console.log(`Query objectIds from client-side. view id: ${this.id}`);
                    result = {
                        success: true,
                        data
                    };
                }
            }
            catch (e) {
                result = null;
                console.error(`clientQueryObjectIds err for ${this.id}`, e);
            }
            if (!result) {
                result = {
                    success: false,
                    data: null
                };
            }
            return result;
        });
    }
    /**
     * @ignore
     *
     * Executes a Query against features available for drawing in the layerView and returns the number of features that satisfy the query.
     * Note, this method never rejects, so need to check result.success to  determine whether the client query is successful.
     * @param query
     */
    clientQueryFeatureCount(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            try {
                const apiQuery = yield this.whenClientQueryReady(queryParams, 'count');
                if (apiQuery) {
                    const data = yield this.view.queryFeatureCount(apiQuery);
                    console.log(`Query feature count from client-side. view id: ${this.id}`);
                    result = {
                        success: true,
                        data
                    };
                }
            }
            catch (err) {
                result = null;
                console.error(`clientQueryFeatureCount err for ${this.id}`, err);
            }
            if (!result) {
                result = {
                    success: false,
                    data: null
                };
            }
            return result;
        });
    }
    getApiQueryForClientQuery(queryParams, queryType) {
        return __awaiter(this, void 0, void 0, function* () {
            let apiQuery = null;
            const layerDs = yield this.getOrCreateLayerDataSource();
            const apiQueryOrProperties = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeJimuFeatureLayerQueryToJSAPILayerQuery(layerDs, queryParams);
            if (apiQueryOrProperties.declaredClass === 'esri.rest.support.Query') {
                apiQuery = apiQueryOrProperties;
            }
            else {
                const Query = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/rest/support/Query');
                apiQuery = new Query(apiQueryOrProperties);
            }
            // client query limitation: Attribute values used in attribute queries executed against layerViews are case sensitive.
            if (!layerDs.isSqlCaseSensitive) {
                // Selection view is client-side query, it is always case sensitive, same as layer view query.
                const sql = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(queryParams.sqlExpression, layerDs.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID)).sql || '';
                apiQuery.where = sql;
            }
            if (queryType === 'id' || queryType === 'count') {
                apiQuery.outFields = [];
            }
            return apiQuery;
        });
    }
    /**
     * set the definitionExpression to layer and view, but does not apply the definitionExpression to data source.
     */
    setDefinitionExpression(localDefinitionExpression) {
        var _a;
        this.localDefinitionExpression = localDefinitionExpression;
        if ((_a = this.getLayerDataSource()) === null || _a === void 0 ? void 0 : _a.getCurrentQueryParams()) {
            this.setDefinitionExpressionToLayer(this.getLayerDataSource().getCurrentQueryParams());
        }
    }
    getLayerDataSource() {
        return super.getLayerDataSource();
    }
    createLayerDataSource() {
        return super.createLayerDataSource();
    }
    getOrCreateLayerDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            let dataSource = this.getLayerDataSource();
            if (!dataSource) {
                try {
                    dataSource = yield this.createLayerDataSource();
                }
                catch (e) {
                    dataSource = null;
                    console.error(`JimuLayerView ${this.id} createLayerDataSource error`, e);
                }
            }
            return dataSource;
        });
    }
    getOrCreateLayerDataSourceIfUsed() {
        return __awaiter(this, void 0, void 0, function* () {
            let dataSource = this.getLayerDataSource();
            if (!dataSource && this.isLayerDataSourceUsed()) {
                try {
                    dataSource = yield this.createLayerDataSource();
                }
                catch (e) {
                    dataSource = null;
                    console.error(`JimuLayerView ${this.id} createLayerDataSource error`, e);
                }
            }
            return dataSource;
        });
    }
    getHighlightLayerLayer() {
        return this.highlightFeatureLayer;
    }
    /**
     * Even the data source instance is not created, this method will still be invoked if the info changed.
     */
    onLayerDataSourceInfoChange(preDsInfo, dsInfo) {
        var _a, _b, _c;
        super.onLayerDataSourceInfoChange(preDsInfo, dsInfo);
        const preSelectedIds = (preDsInfo === null || preDsInfo === void 0 ? void 0 : preDsInfo.selectedIds) || null;
        const currSelectedIds = (dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.selectedIds) || null;
        if (preSelectedIds !== currSelectedIds) {
            // selectedIds changed
            if (((_a = dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.selectedIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.highLightSelectedRecords();
            }
            else {
                this.clearHighLight();
            }
        }
        if (this.getLayerDataSource()) {
            if (this.getLayerDataSource().getCurrentQueryParams()) {
                this.setDefinitionExpressionToLayer(this.getLayerDataSource().getCurrentQueryParams());
            }
        }
        else if ((_b = dsInfo.widgetQueries) === null || _b === void 0 ? void 0 : _b._filterInUrl) {
            this.createLayerDataSource().then(() => {
                var _a;
                this.setDefinitionExpressionToLayer((_a = dsInfo.widgetQueries) === null || _a === void 0 ? void 0 : _a._filterInUrl);
            });
        }
        if (this.view) {
            if (dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.gdbVersion) {
                this.layer.gdbVersion = dsInfo.gdbVersion;
            }
            if (!(dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.gdbVersion) && this.originalGdbVersion) {
                this.layer.gdbVersion = this.originalGdbVersion;
            }
        }
        this.setRefreshIntervalForLayer((_c = this.getLayerDataSource()) === null || _c === void 0 ? void 0 : _c.getAutoRefreshInterval());
    }
    /**
     * popup.features maybe come from clicking map, or maybe come from exb feature selection.
     * JimuFeatureLayerSceneLayerViewCommon focuses on clicking map case.
     * JimuMapView focuses on exb feature selection case.
     */
    watchPopupSelectFeature() {
        if (this.popupSelectFeatureWatchHandle) {
            this.popupSelectFeatureWatchHandle.remove();
            this.popupSelectFeatureWatchHandle = null;
        }
        // When clicking features on map, JS API will show popup by default. We need to use the following code to sync the popup selected feature to JimuFeatureLayerView and data source.
        this.popupSelectFeatureWatchHandle = this.reactiveUtils.watch(() => { var _a; return (_a = this.getMapSceneView().popup) === null || _a === void 0 ? void 0 : _a.selectedFeature; }, (graphic) => __awaiter(this, void 0, void 0, function* () {
            const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
            if (jimuMapView && jimuMapView.isPopupFeaturesFromSelection()) {
                // popup.features comes from JimuFeatureLayerView and data source selection, not from JS API clicking.
                // This callback only handles the JS API clicking case.
                return;
            }
            if (graphic) {
                const graphicLayer = this.getLayerFromFeature(graphic);
                if (!graphicLayer) {
                    return;
                }
                if (graphicLayer === this.layer) {
                    const selectedFeatureId = graphic.getObjectId();
                    if (!this.isLayerDataSourceUsed() && !this.getLayerDataSource()) {
                        this.selectFeatureById(selectedFeatureId);
                        return;
                    }
                    const layerDataSource = this.getLayerDataSource() || (yield this.createLayerDataSource());
                    if (!layerDataSource) {
                        return;
                    }
                    if (layerDataSource.getSelectedRecordIds().includes(selectedFeatureId + '')) {
                        return;
                    }
                    const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
                    // We need to use ds.queryById() instead of ds.buildRecord() to obtain the record.
                    // This is because the fields in graphic.attributes may be incomplete if the layer popup fields are configured in MapViewer.
                    layerDataSource.queryById(selectedFeatureId + '').then((record) => {
                        var _a, _b;
                        const currSelectedFeature = (_b = (_a = jimuMapView.view) === null || _a === void 0 ? void 0 : _a.popup) === null || _b === void 0 ? void 0 : _b.selectedFeature;
                        // Since ds.queryById() is an asynchronous operation, we need to detect whether the current popup.selectedFeature has changed
                        // to avoid select synchronization errors caused by quick clicks.
                        if (currSelectedFeature === graphic) {
                            this.selectFeatureById(Number(selectedFeatureId), record);
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(jimuMapView.mapWidgetId, [record]));
                        }
                    });
                }
                else {
                    this.selectFeatureById(null);
                }
            }
        }));
    }
    releasePopupVisibleWatchHandle() {
        if (this.popupVisibleWatchHandle) {
            this.popupVisibleWatchHandle.remove();
            this.popupVisibleWatchHandle = null;
        }
    }
    watchPopupVisible() {
        this.releasePopupVisibleWatchHandle();
        this.popupVisibleWatchHandle = this.reactiveUtils.watch(() => { var _a; return (_a = this.getMapSceneView().popup) === null || _a === void 0 ? void 0 : _a.visible; }, visible => {
            const popup = this.getMapSceneView().popup;
            if (!visible && popup && this.isPopupSelectCurrentLayerFeature()) {
                popup.features = [];
                const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(jimuMapView.mapWidgetId, []));
                this.selectFeatureById(null);
            }
        });
    }
    isPopupSelectCurrentLayerFeature() {
        const popup = this.getMapSceneView().popup;
        return popup && popup.selectedFeature && this.getLayerFromFeature(popup.selectedFeature) === this.layer;
    }
    /**
     * @ignore
     */
    onParentLayerVisibleChange(parentNewVisible) {
        this.onLayerFinalVisibleChange();
    }
    watchLayerVisible() {
        if (this.layerVisibleWatchHandle) {
            this.layerVisibleWatchHandle.remove();
            this.layerVisibleWatchHandle = null;
        }
        this.layerVisibleWatchHandle = this.layer.watch('visible', (newValue, oldValue) => {
            this.onLayerFinalVisibleChange();
        });
    }
    onLayerFinalVisibleChange() {
        const finalLayerVisible = this.isLayerVisible();
        if (this.highlightFeatureLayer) {
            this.highlightFeatureLayer.visible = finalLayerVisible;
        }
        const popup = this.getMapSceneView().popup;
        if (popup && this.isPopupSelectCurrentLayerFeature()) {
            if (popup.visible !== finalLayerVisible) {
                // before update popup.visible, we need to release popupVisibleWatchHandle to avoid execute this.selectFeatureById(null)
                this.releasePopupVisibleWatchHandle();
                popup.visible = finalLayerVisible;
                // after update popup.visible, we need to watch popupVisibleWatchHandle again
                this.watchPopupVisible();
            }
        }
    }
    watchHighlightOptions() {
        const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
        const view = jimuMapView.view;
        if (this.highlightOptionsWatchHandle) {
            this.highlightOptionsWatchHandle.remove();
            this.highlightOptionsWatchHandle = null;
        }
        this.highlightOptionsWatchHandle = view.watch('highlightOptions', () => {
            if (this.highlightFeatureLayer) {
                // featureLayerView.highlightOptions not work if it is a client-side FeatureLayer, we need to set renderer as a workround to highlight features
                this.highlightFeatureLayer.renderer = this.getRendererForHighlightLayer(this.highlightFeatureLayer.geometryType, view);
            }
        });
    }
    /**
     * When map is loaded first time, we'll try to move the selected feature to center
     */
    tryMoveToCenter() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            let layerDataSourceId = this.layerDataSourceId;
            let layerDataSource = null;
            if (this.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.LayerTypes.SceneLayer) {
                // When select scene features with map select tool, SceneLayerDataSourceImpl uses the associated FeatureLayerDataSourceImpl
                // to query scene features and update selection, and the browser url is updated with suffix 'associated_data_source'.
                // So when we restore selection from url, we need to use the associated FeatureLayerDataSourceImpl id, not SceneLayerDataSourceImpl id.
                let associatedDataSource = null;
                layerDataSource = (yield this.getOrCreateLayerDataSource());
                if (layerDataSource && layerDataSource.getAssociatedDataSource) {
                    associatedDataSource = layerDataSource.getAssociatedDataSource();
                }
                if (!associatedDataSource) {
                    return;
                }
                layerDataSourceId = associatedDataSource.id;
            }
            // we don't care whether the layer has data source, we just read the selected id from store
            const selectedIds = ((_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[layerDataSourceId]) === null || _a === void 0 ? void 0 : _a.selectedIds) === null || _b === void 0 ? void 0 : _b.asMutable()) || [];
            const numSelectedIds = selectedIds.map(id => Number(id));
            if (numSelectedIds.length > 0) {
                // We don't check this.isLayerDataSourceUsed() and always make sure the layer datasource is created
                // because the browser url is updated by layer data source before refresh.
                if (!layerDataSource) {
                    layerDataSource = yield this.getOrCreateLayerDataSource();
                }
                if (layerDataSource) {
                    // data source is used and created
                    const queryResult = yield layerDataSource.query({
                        objectIds: numSelectedIds.slice(),
                        returnGeometry: true,
                        returnZ: true
                    });
                    const records = queryResult.records;
                    if (records && records.length > 0) {
                        this.selectFeaturesByIds(numSelectedIds, records);
                        const firstFeatureGeometry = (_d = (_c = records[0]) === null || _c === void 0 ? void 0 : _c.feature) === null || _d === void 0 ? void 0 : _d.geometry;
                        if (firstFeatureGeometry) {
                            try {
                                this.moveFeatureToCenter(firstFeatureGeometry);
                            }
                            catch (e) {
                                console.error('fail to move feature to center', e);
                            }
                        }
                    }
                }
            }
        });
    }
    getLayerFromFeature(feature) {
        // feature of standalone feature layer has ".layer", but the feature of map server's sub feature layer has ".sourceLayer"
        return feature.layer || feature.sourceLayer;
    }
    setRefreshIntervalForLayer(refreshInterval) {
        if (!this.view || refreshInterval === undefined || refreshInterval === null) {
            return;
        }
        const appMode = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appRuntimeInfo.appMode;
        if (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design) {
            this.layer.refreshInterval = 0;
        }
        else {
            this.layer.refreshInterval = refreshInterval / 60;
        }
    }
    setDefinitionExpressionToLayer(query) {
        var _a, _b, _c, _d, _e;
        if (query) {
            if (this.view && this.view.layer) {
                const localQuery = {
                    outFields: ['*'],
                    where: this.localDefinitionExpression,
                    returnGeometry: true
                };
                const mergedQuery = ((_a = this.getLayerDataSource()) === null || _a === void 0 ? void 0 : _a.getRealQueryParams(localQuery, 'query')) || query; // layer ds may not created
                if (mergedQuery && mergedQuery.where !== this.view.layer.definitionExpression) {
                    this.view.layer.definitionExpression = mergedQuery.where;
                }
                if (this.type === _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.LayerTypes.FeatureLayer) {
                    if ((mergedQuery === null || mergedQuery === void 0 ? void 0 : mergedQuery.time) != null) {
                        this.view.layer.useViewTime = false;
                    }
                    else {
                        this.view.layer.useViewTime = true;
                    }
                    this.view.layer.timeExtent = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeJimuTimeToJSAPITimeExtent(mergedQuery === null || mergedQuery === void 0 ? void 0 : mergedQuery.time);
                }
                if (query.geometry) {
                    if (this.view.filter) {
                        if (this.view.filter.geometry === query.geometry) {
                            return;
                        }
                    }
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
                        'esri/geometry/support/jsonUtils'
                    ]).then(modules => {
                        const jsonUtils = modules[0];
                        this.view.filter = {
                            geometry: jsonUtils.fromJSON(query.geometry)
                        };
                    });
                }
                else {
                    if (this.view.filter) {
                        this.view.filter = null;
                    }
                }
                return;
            }
            if (!this.view && this.layer) {
                const localQuery = {
                    outFields: ['*'],
                    where: this.localDefinitionExpression,
                    returnGeometry: true
                };
                const mergedQuery = (_b = this.getLayerDataSource()) === null || _b === void 0 ? void 0 : _b.getRealQueryParams(localQuery, 'query');
                const supportSqlExpression = (this.layer.declaredClass === 'esri.layers.support.Sublayer' && ((_e = (_d = (_c = this.layer.layer) === null || _c === void 0 ? void 0 : _c.capabilities) === null || _d === void 0 ? void 0 : _d.exportMap) === null || _e === void 0 ? void 0 : _e.supportsSublayerDefinitionExpression)) || this.layer.declaredClass === 'esri.layers.FeatureLayer';
                if (mergedQuery && supportSqlExpression && mergedQuery.where !== this.layer.definitionExpression) {
                    this.layer.definitionExpression = mergedQuery.where;
                }
            }
        }
    }
    highLightSelectedRecords() {
        if (this.getSelectedRecordIds().length === 0) {
            return;
        }
        this.highLightFeatures(this.getSelectedRecordIds().map(id => parseInt(id)));
    }
    /**
     * For MapService sub layer, we need to create a layer for highlight.
     */
    tryCreateHighLightFeatureLayer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.view || this.type !== _data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_2__.LayerTypes.FeatureLayer || !this.isLoaded) {
                return;
            }
            yield this.getJimuMapView().whenJimuLayerViewLoaded(this.id);
            const layerDs = this.getLayerDataSource() || (yield this.createLayerDataSource());
            if (!layerDs) {
                return;
            }
            if (this.highLightLayerCreationPromise) {
                return this.highLightLayerCreationPromise;
            }
            const objectIdFieldInFeaturelayer = this.getObjectIdField(layerDs.layer.fields, layerDs.layer.objectIdField);
            // FeatureLayer.applyEdits() will change the objectId value of features if the layer is a client-side feature layer,
            // so need to add an extra field to identify objectId of feature.
            const exbOidFieldInfo = {
                name: EXB_OID,
                type: 'integer',
                alias: EXB_OID,
                description: ''
            };
            const layerFieldInfos = objectIdFieldInFeaturelayer ? [objectIdFieldInFeaturelayer, exbOidFieldInfo] : [exbOidFieldInfo];
            this.highLightLayerCreationPromise = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer'
            ]).then(modules => {
                var _a, _b;
                const FeatureLayer = modules[0];
                const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
                const view = jimuMapView.view;
                // this.layer should be esri.layers.support.Sublayer, we need sync hasZ property to this.highlightFeatureLayer,
                // otherwise this.highlightFeatureLayer can't render features with hasZ property.
                const hasZ = ((_b = (_a = this.layer) === null || _a === void 0 ? void 0 : _a.sourceJSON) === null || _b === void 0 ? void 0 : _b.hasZ) || false;
                this.highlightFeatureLayer = new FeatureLayer({
                    title: `${layerDs.layer.title}-highlight`,
                    geometryType: layerDs.layer.geometryType,
                    spatialReference: layerDs.layer.spatialReference,
                    source: [],
                    fields: layerFieldInfos,
                    objectIdField: layerDs.layer.objectIdField,
                    // featureLayerView.highlightOptions not work if it is a client-side FeatureLayer, we need to set renderer as a workround to highlight features
                    renderer: this.getRendererForHighlightLayer(layerDs.layer.geometryType, view),
                    listMode: 'hide',
                    legendEnabled: false,
                    visible: this.isLayerVisible(),
                    hasZ
                });
                view.map.add(this.highlightFeatureLayer);
                return new Promise((resolve, reject) => {
                    this.highlightFeatureLayer.on('layerview-create', event => {
                        this.highlightFeatureLayerView = event.layerView;
                        resolve();
                    });
                    if (!this.isLayerVisible()) {
                        resolve();
                    }
                });
            });
            return this.highLightLayerCreationPromise;
        });
    }
    addFeaturesToHighlightFeatureLayer(ids, features) {
        const ds = this.getLayerDataSource();
        const idField = ds.getIdField();
        if (!features) {
            const selectedRecords = ds.getSelectedRecords();
            features = ids.map(id => {
                var _a;
                return (_a = selectedRecords.find(r => r.getId() === id + '')) === null || _a === void 0 ? void 0 : _a.feature;
            }).filter(f => !!f);
        }
        if (features.length === 0) {
            return Promise.resolve(true);
        }
        const addFeatures = features.map(feature => {
            const tempFeature = feature.clone();
            const objectIdFieldValue = tempFeature.attributes[idField];
            tempFeature.attributes = {};
            tempFeature.attributes[idField] = objectIdFieldValue;
            tempFeature.attributes[EXB_OID] = objectIdFieldValue;
            return tempFeature;
        });
        return this.highlightFeatureLayer.applyEdits({ addFeatures }).then(result => {
            return !result.addFeatureResults.find(r => r.error);
        });
    }
    removeFeaturesFromHighlightFeatureLayer() {
        return this.highlightFeatureLayer.queryFeatures({ where: '1=1' }).then(result => {
            const allFeatures = result.features;
            if (allFeatures.length === 0) {
                return Promise.resolve(true);
            }
            return this.highlightFeatureLayer.applyEdits({ deleteFeatures: allFeatures }).then(result => {
                return !result.deleteFeatureResults.find(r => r.error);
            });
        });
    }
    /**
     * The ids.length must > 0
     */
    highLightFeatures(ids, features) {
        return __awaiter(this, void 0, void 0, function* () {
            // We need call onSelectedFeaturesChange in highLightFeatures because we need to make sure features are synced to layerView,
            // otherwise getSelectedRecords() will return wrong result.
            if (this.highLightHandle) {
                this.highLightHandle.remove();
                this.highLightHandle = null;
            }
            yield this.tryCreateHighLightFeatureLayer();
            const view = this.view || this.highlightFeatureLayerView;
            if (!view) {
                this.onSelectedFeaturesChange(false);
                return;
            }
            if (this.highlightFeatureLayerView) {
                const removeR = yield this.removeFeaturesFromHighlightFeatureLayer();
                const addR = yield this.addFeaturesToHighlightFeatureLayer(ids, features);
                if (!removeR || !addR) {
                    this.onSelectedFeaturesChange(false);
                    return;
                }
            }
            view.when(() => __awaiter(this, void 0, void 0, function* () {
                // If view.updating is true, view.highlight() will fail with error.
                yield this.whenLayerViewNotUpdating(view);
                // need to ensure that highLightHandle is removed after whenLayerViewNotUpdating resolves, otherwise in some cases the previously selected feature will not be cleared
                if (this.highLightHandle) {
                    this.highLightHandle.remove();
                    this.highLightHandle = null;
                }
                this.highLightHandle = view.highlight(ids);
                this.onSelectedFeaturesChange(false);
            }));
        });
    }
    clearHighLight() {
        // TODO: highLightFeatures() is async, but clearHighLight() is sync, this can lead to potential issues.
        if (this.highLightHandle) {
            this.highLightHandle.remove();
            this.highLightHandle = null;
            if (this.highlightFeatureLayerView) {
                this.removeFeaturesFromHighlightFeatureLayer();
            }
            // We close the popup if the popup shows on this.layer.
            const mapSceneView = this.getMapSceneView();
            if (this.isPopupSelectCurrentLayerFeature()) {
                mapSceneView.closePopup();
            }
            this.onSelectedFeaturesChange(true);
        }
    }
    onSelectedFeaturesChange(isClear) {
        const jimuMapView = this.getJimuMapView();
        if (jimuMapView) {
            jimuMapView.onJimuLayerViewSelectedFeaturesChange(this, isClear);
        }
    }
    moveFeatureToCenter(firstFeatureGeometry) {
        return __awaiter(this, void 0, void 0, function* () {
            const centerPoint = this.getCenterPoint(firstFeatureGeometry);
            if (centerPoint) {
                const view = this.getMapSceneView();
                // #16423, Need to update some properties of view, see handleActionForZoomToFeatureActionValue for more details.
                const anyView = view;
                anyView.extentChangeRelatedWidgetIds = [];
                anyView.receiveMessageTimeOfLastViewUpdate = Date.now();
                yield view.goTo(centerPoint, { animate: false });
                // #16423, After view.goTo() done, we need to send a extent change message which stationary and interacive are true
                // to make sure other map widget can sync this viewpoint.
                if (anyView.publishExtentChangeMessage) {
                    anyView.extentChangeRelatedWidgetIds = [];
                    anyView.receiveMessageTimeOfLastViewUpdate = Date.now();
                    // We set stationary to true to make sure other map widget can sync this viewpoint.
                    const stationary = true;
                    // We set interacive to true to make sure other map widget can ignore `isAboveCase` and can sync this viewpoint.
                    const interacive = true;
                    anyView.publishExtentChangeMessage(stationary, interacive);
                }
            }
            else {
                throw new Error('Does not find center point.');
            }
        });
    }
    getCenterPoint(geometry) {
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
    getSelectedRecordIds() {
        return this.getLayerDataSource() ? this.getLayerDataSource().getSelectedRecordIds().filter(id => !!id) : [];
    }
    /** @ignore */
    getObjectIdField(fields, objectIdFieldName) {
        let objectIdField = null;
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].name === objectIdFieldName) {
                objectIdField = fields[i];
                return objectIdField;
            }
        }
        return objectIdField;
    }
    getRendererForHighlightLayer(geometryType, view) {
        const highlightColor = view.highlightOptions.color.clone();
        const highligthHaloColor = view.highlightOptions.haloColor.clone();
        if (['point', 'multipoint'].includes(geometryType)) {
            return {
                type: 'simple',
                symbol: {
                    type: 'simple-marker',
                    style: 'circle',
                    color: highlightColor,
                    size: '16px',
                    outline: {
                        color: highligthHaloColor,
                        width: 1
                    }
                }
            };
        }
        else if (['polyline'].includes(geometryType)) {
            return {
                type: 'simple',
                symbol: {
                    type: 'simple-line',
                    color: highlightColor,
                    width: 1,
                    style: 'solid'
                }
            };
        }
        else if (['polygon', 'extent'].includes(geometryType)) {
            return {
                type: 'simple',
                symbol: {
                    type: 'simple-fill', // autocasts as new SimpleFillSymbol()
                    color: [0, 255, 255, 0],
                    style: 'solid',
                    outline: {
                        color: highligthHaloColor,
                        width: 1
                    }
                }
            };
        }
        else if (['mesh'].includes(geometryType)) {
            return {
                type: 'simple',
                symbol: {
                    type: 'mesh-3d', // autocasts as new MeshSymbol3D()
                    symbolLayers: [{
                            type: 'fill', // autocasts as new FillSymbol3DLayer()
                            material: { color: highlightColor }
                        }]
                }
            };
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-feature-layer-view.ts":
/*!*****************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-feature-layer-view.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuFeatureLayerView: () => (/* binding */ JimuFeatureLayerView)
/* harmony export */ });
/* harmony import */ var _jimu_feature_layer_scene_layer_view_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jimu-feature-layer-scene-layer-view-common */ "./jimu-arcgis/lib/views/layers/jimu-feature-layer-scene-layer-view-common.ts");

/**
 * The JimuFeatureLayerView extends from the JimuLayerView.
 */
class JimuFeatureLayerView extends _jimu_feature_layer_scene_layer_view_common__WEBPACK_IMPORTED_MODULE_0__.JimuFeatureLayerSceneLayerViewCommon {
    getLayerDataSource() {
        return super.getLayerDataSource();
    }
    createLayerDataSource() {
        return super.createLayerDataSource();
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-group-layer-view.ts":
/*!***************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-group-layer-view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuGroupLayerView: () => (/* binding */ JimuGroupLayerView)
/* harmony export */ });
/* harmony import */ var _jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jimu-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./jimu-arcgis/lib/views/layers/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class JimuGroupLayerView extends _jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__.JimuLayerView {
    constructor(options) {
        super(options);
        this.url = null;
        this.url = options.url;
        const jimuMapView = this.getJimuMapView();
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toggleHighlightLayerVisible)(jimuMapView, this);
    }
    ready() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            // the child layer can be a layer or sub layer
            const layers = ((_b = (_a = this.layer.layers) === null || _a === void 0 ? void 0 : _a.toArray()) === null || _b === void 0 ? void 0 : _b.reverse()) || ((_d = (_c = this.layer.sublayers) === null || _c === void 0 ? void 0 : _c.toArray()) === null || _d === void 0 ? void 0 : _d.reverse());
            if (layers && layers.length > 0) {
                for (let k = 0; k < layers.length; k++) {
                    yield this.mapViewManager.getJimuMapViewById(this.jimuMapViewId).createJimuLayerView(layers[k], this.jimuLayerId, k, null, this.fromRuntime);
                }
            }
            return this;
        });
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts":
/*!*********************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-layer-view.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerView: () => (/* binding */ JimuLayerView)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * `JimuLayerView` is a wrapper class for ArcGIS Maps SDK for JavaScript [`LayerView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html).
 * It is created by a `JimuMapView` using a layer [`DataSource`](https://developers.arcgis.com/experience-builder/api-reference/jimu-core/DataSource).
 *
 * A layer view may have a related data source. If it has the data source, the feature selection will be synced to data source selection and will use the data source URL params.
 * If it does not have the data source, the feature selection will use the feature_selection URL param.
 */
class JimuLayerView {
    constructor(options) {
        /** @ignore */
        this.runTimeIsHidden = false;
        // true means the layer can be removed by map clear-data tool.
        this.removeableByMapTool = false;
        this.id = options.id;
        this.mapViewManager = options.mapViewManager;
        this.type = options.type;
        this.layerDataSourceId = options.layerDataSourceId;
        this.jimuMapViewId = options.jimuMapViewId;
        this.jimuLayerId = options.jimuLayerId;
        this.layer = options.layer;
        this.parentJimuLayerViewId = options.parentJimuLayerViewId;
        this.index = options.index;
        this.fromRuntime = options.fromRuntime;
        this.isLoaded = false;
        let parentLevel = '';
        if (this.parentJimuLayerViewId) {
            const parentJimuLayerView = this.getParentJimuLayerView();
            if (parentJimuLayerView) {
                parentLevel = parentJimuLayerView.hierarchyLevel;
            }
        }
        this.hierarchyLevel = parentLevel ? `${parentLevel}.${this.index}` : this.index.toString();
        if (this.layer) {
            this.originalLayerVisible = this.layer.visible;
            if (options.urlHashLayersVisibility && !this.fromRuntime) {
                const urlHashVisible = options.urlHashLayersVisibility[this.id];
                if (typeof urlHashVisible === 'boolean' && this.layer.visible !== urlHashVisible) {
                    this.layer.visible = urlHashVisible;
                }
            }
        }
        const dsJson = jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getDataSourceJsonById(this.getAppConfig(), this.layerDataSourceId);
        if (dsJson) {
            const initIsHidden = dsJson.isHidden;
            const label = dsJson.label;
            if (label && label !== this.layer.title) {
                this.layer.title = label;
            }
            this.runTimeIsHidden = initIsHidden;
            if (initIsHidden) {
                this.layer.visible = !initIsHidden;
            }
        }
        this.initListenToDataSourceJsonChange();
        this.initListenToDataSourceInfoChange();
        // We don't call isLayerDataSourceUsed() here because we want to create data source on demand.
        if (this.isLayerUsedByFilter() || this.isLayerUsedBySelection()) {
            this.createLayerDataSource();
        }
        this.watchLayerVisibleChange();
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(this);
        });
    }
    /** Return the cooresponding data source of the layer */
    getLayerDataSource() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.layerDataSourceId);
    }
    createLayerDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            let layerDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.layerDataSourceId);
            if (!layerDs) {
                try {
                    const mapDs = this.getMapDataSource();
                    if (mapDs) {
                        layerDs = yield mapDs.createDataSourceByLayer(this.layer);
                    }
                    else {
                        // If the layer is a sublayer and the parent layer is added at runtime (by AddData widget), mapDs is null and may go here.
                        // See #15048.
                        layerDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.layerDataSourceId);
                        const parentJimuLayerView = this.getParentJimuLayerView();
                        if (parentJimuLayerView) {
                            const parentDataSource = parentJimuLayerView.getLayerDataSource();
                            if (parentDataSource && parentDataSource.createDataSourceById) {
                                layerDs = yield parentDataSource.createDataSourceById(this.layerDataSourceId);
                            }
                        }
                    }
                }
                catch (e) {
                    console.error(`JimuLayerView ${this.id} create layer data source failed:`, e);
                    layerDs = null;
                }
            }
            return layerDs;
        });
    }
    /**
     * Get parent JimuLayerView.
     */
    getParentJimuLayerView() {
        const jimuMapView = this.getJimuMapView();
        if (jimuMapView && this.parentJimuLayerViewId) {
            return jimuMapView.jimuLayerViews[this.parentJimuLayerViewId];
        }
        return null;
    }
    /**
     * Get all ancestor JimuLayerViews.
     */
    getAllAncestorJimuLayerViews() {
        const ancestorJimuLayerViews = [];
        let parentJimuLayerView = this.getParentJimuLayerView();
        if (parentJimuLayerView) {
            ancestorJimuLayerViews.push(parentJimuLayerView);
            parentJimuLayerView = this.getParentJimuLayerView();
        }
        return ancestorJimuLayerViews;
    }
    /**
     * Whether the layer data source is used by widgets.
     * For not used data source, the data source will not be created.
     */
    isLayerDataSourceUsed() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().isDataSourceUsed(this.layerDataSourceId) || this.isLayerUsedByMessage() || this.isLayerUsedByFilter();
    }
    isLayerUsedByMessage() {
        const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
        const mapWidgetId = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.mapWidgetId;
        if (mapWidgetId) {
            const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
            if (messageConfigs) {
                const messageJsonArray = Object.values(messageConfigs);
                if (messageJsonArray.length > 0) {
                    return messageJsonArray.some((messageJson) => messageJson.widgetId === mapWidgetId && messageJson.actions && messageJson.actions.length > 0);
                }
            }
        }
        return false;
    }
    isLayerUsedByFilter() {
        const dataSourcesJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.dataSources || {};
        const queue = Object.values(dataSourcesJson);
        // use BFS to traverse dataSources
        while (queue.length > 0) {
            const currDsJson = queue.shift();
            if (currDsJson.id === this.layerDataSourceId) {
                return !!currDsJson.query;
            }
            if (this.layerDataSourceId.startsWith(currDsJson.id) && currDsJson.childDataSourceJsons) {
                const childDataSourceJsons = Object.values(currDsJson.childDataSourceJsons);
                queue.push(...childDataSourceJsons);
            }
        }
        return false;
    }
    isLayerUsedBySelection() {
        var _a;
        const dataSourcesInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo;
        if (dataSourcesInfo && this.layerDataSourceId) {
            const dsInfo = dataSourcesInfo[this.layerDataSourceId];
            // TODO: When this issue is fixed: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/48066,
            // we need to remove createFilterUrlChildDataSource from MapDataSourceImpl and check dsInfo.widgetQueries?._filterInUrl here.
            if (dsInfo) {
                if (dsInfo.selectOptions || ((_a = dsInfo.selectedIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * If any layer in the layer tree is invisible, the layer is considered invisible
     */
    isLayerVisible() {
        const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
        const isParentJimuLayerInvisible = jimuMapView.getParentJimuLayerViews(this.id).some(jlv => !jlv.layer.visible);
        if (isParentJimuLayerInvisible) {
            return false;
        }
        return this.layer.visible;
    }
    /**
     * Return the MapView or SceneView of the layer view.
     */
    getMapSceneView() {
        const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
        return jimuMapView && jimuMapView.view;
    }
    getMapDataSource() {
        const mapDsId = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId).dataSourceId;
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(mapDsId);
    }
    /** @ignore */
    onLayerDataSourceInfoChange(preDsInfo, dsInfo) {
        var _a;
        const newTitle = (_a = this.getLayerDataSource()) === null || _a === void 0 ? void 0 : _a.getLabel();
        if (newTitle && newTitle !== this.layer.title) {
            const jimuMapView = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
            const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
            const newTitleWithSuffix = intl.formatMessage({ id: 'action_addedData', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.action_addedData }, { label: newTitle });
            this.layer.title = newTitle;
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(jimuMapView.mapWidgetId, `addToMapDatas.${this.layer.id}.title`, newTitleWithSuffix);
        }
    }
    getJimuMapView() {
        return this.mapViewManager.getJimuMapViewById(this.jimuMapViewId);
    }
    /**
     * Destroy the JimuLayerView instance.
     */
    destroy() {
        if (this.watchLayerVisibleChangeHandle) {
            this.watchLayerVisibleChangeHandle.remove();
            this.watchLayerVisibleChangeHandle = null;
        }
        this.dataSourceInfoObserver && this.dataSourceInfoObserver();
        this.dataSourceJsonObserver && this.dataSourceJsonObserver();
    }
    getAppConfig() {
        var _a;
        return window.jimuConfig.isBuilder ? (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
    }
    initListenToDataSourceJsonChange() {
        const mapDsId = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId).dataSourceId;
        this.dataSourceJsonObserver = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.observeStore)(this.onLayerDatasourceJsonChange.bind(this), ['appConfig', 'dataSources', mapDsId]);
    }
    initListenToDataSourceInfoChange() {
        this.dataSourceInfoObserver = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.observeStore)(this.onLayerDataSourceInfoChange.bind(this), ['dataSourcesInfo', this.layerDataSourceId]);
    }
    /** @ignore */
    onLayerDatasourceJsonChange(preDsJson, dsJson) {
        if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getDataSourceJsonById(this.getAppConfig(), this.layerDataSourceId)) {
            return;
        }
        const currentRuntimeIsHidden = jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getDataSourceJsonById(this.getAppConfig(), this.layerDataSourceId).isHidden;
        if (this.runTimeIsHidden !== currentRuntimeIsHidden) {
            this.runTimeIsHidden = currentRuntimeIsHidden;
            this.layer.visible = !currentRuntimeIsHidden;
        }
    }
    watchLayerVisibleChange() {
        if (!this.layer) {
            return;
        }
        if (this.watchLayerVisibleChangeHandle) {
            this.watchLayerVisibleChangeHandle.remove();
            this.watchLayerVisibleChangeHandle = null;
        }
        this.watchLayerVisibleChangeHandle = this.layer.watch('visible', () => {
            if (!this.fromRuntime) {
                // only record layer visibility for original layers in web map/web scene, so ignore layer that added at runtime
                const jimuMapView = this.getJimuMapView();
                if (jimuMapView) {
                    jimuMapView.updateUrlHashLayerVisibility();
                }
            }
        });
    }
    getMapWidgetId() {
        const jimuMapView = this.getJimuMapView();
        return (jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.mapWidgetId) || '';
    }
    /**
     * @ignore
     * Update removeableByMapTool property. true means the layer can be removed by map clear-data tool.
     * @param value
     */
    setRemoveableByMapTool(value) {
        var _a;
        this.removeableByMapTool = value;
        // We need to update mapMutableState to trigger map clear-data tool render.
        const mapWidgetId = this.getMapWidgetId();
        const layerId = (_a = this.layer) === null || _a === void 0 ? void 0 : _a.id;
        const jimuMapView = this.getJimuMapView();
        if (mapWidgetId && layerId && jimuMapView) {
            const jimuMapViewId = jimuMapView.id;
            const mapMutableState = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([mapWidgetId]) || {};
            const removeableLayerIdsInfo = mapMutableState.removeableLayerIdsInfo || {};
            // traverse all JimuLayerViews to get the fresh removeableLayerIds of current JimuMapView
            const removeableLayerIds = [];
            const jimuLayerViews = Object.values(jimuMapView.jimuLayerViews);
            jimuLayerViews.forEach(jimuLayerView => {
                if (jimuLayerView.removeableByMapTool && jimuLayerView.layer) {
                    removeableLayerIds.push(jimuLayerView.layer.id);
                }
            });
            removeableLayerIdsInfo[jimuMapViewId] = removeableLayerIds;
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(mapWidgetId, 'removeableLayerIdsInfo', removeableLayerIdsInfo);
        }
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-mapimage-layer-view.ts":
/*!******************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-mapimage-layer-view.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuMapImageLayerView: () => (/* binding */ JimuMapImageLayerView)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _jimu_mapservice_layer_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jimu-mapservice-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-mapservice-layer-view.ts");


class JimuMapImageLayerView extends _jimu_mapservice_layer_view__WEBPACK_IMPORTED_MODULE_1__.JimuMapServiceLayerView {
    constructor(options) {
        super(options);
        this.url = null;
        this.originalGdbVersion = null;
        this.originalGdbVersion = this.layer.gdbVersion;
    }
    onLayerDataSourceInfoChange(preDsInfo, dsInfo) {
        const layerDataSource = this.getLayerDataSource();
        if (!layerDataSource) {
            return;
        }
        const timeExtent = layerDataSource.getTimeExtent();
        const layer = this.layer;
        // when timeExtent is empty, layer.useViewTime should be true
        layer.useViewTime = timeExtent === null || timeExtent === undefined;
        layer.timeExtent = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeJimuTimeToJSAPITimeExtent(timeExtent);
        if (dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.gdbVersion) {
            layer.gdbVersion = dsInfo.gdbVersion;
        }
        if (!(dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.gdbVersion) && this.originalGdbVersion) {
            layer.gdbVersion = this.originalGdbVersion;
        }
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-mapservice-layer-view.ts":
/*!********************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-mapservice-layer-view.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuMapServiceLayerView: () => (/* binding */ JimuMapServiceLayerView)
/* harmony export */ });
/* harmony import */ var _jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jimu-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./jimu-arcgis/lib/views/layers/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class JimuMapServiceLayerView extends _jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__.JimuLayerView {
    constructor(options) {
        super(options);
        this.url = null;
        this.url = options.url;
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toggleHighlightLayerVisible)(this.mapViewManager.getJimuMapViewById(this.jimuMapViewId), this);
    }
    ready() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            yield (this.layer.loadAll ? this.layer.loadAll() : this.layer.load());
            const subLayers = (_b = (_a = this.layer.sublayers) === null || _a === void 0 ? void 0 : _a.toArray()) === null || _b === void 0 ? void 0 : _b.reverse();
            if (subLayers && subLayers.length > 0) {
                for (let k = 0; k < subLayers.length; k++) {
                    yield this.mapViewManager.getJimuMapViewById(this.jimuMapViewId).createJimuLayerView(subLayers[k], this.jimuLayerId, k, null, this.fromRuntime);
                }
            }
            return this;
        });
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-scene-layer-view.ts":
/*!***************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-scene-layer-view.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuSceneLayerView: () => (/* binding */ JimuSceneLayerView)
/* harmony export */ });
/* harmony import */ var _jimu_feature_layer_scene_layer_view_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jimu-feature-layer-scene-layer-view-common */ "./jimu-arcgis/lib/views/layers/jimu-feature-layer-scene-layer-view-common.ts");

/**
 * The JimuSceneLayerView extends from the JimuLayerView.
 */
class JimuSceneLayerView extends _jimu_feature_layer_scene_layer_view_common__WEBPACK_IMPORTED_MODULE_0__.JimuFeatureLayerSceneLayerViewCommon {
    getLayerDataSource() {
        return super.getLayerDataSource();
    }
    createLayerDataSource() {
        return super.createLayerDataSource();
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-subtype-group-layer.ts":
/*!******************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-subtype-group-layer.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuSubTypeGroupLayerView: () => (/* binding */ JimuSubTypeGroupLayerView)
/* harmony export */ });
/* harmony import */ var _jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jimu-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-layer-view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class JimuSubTypeGroupLayerView extends _jimu_layer_view__WEBPACK_IMPORTED_MODULE_0__.JimuLayerView {
    ready() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const sublayers = (_b = (_a = this.layer.sublayers) === null || _a === void 0 ? void 0 : _a.toArray()) === null || _b === void 0 ? void 0 : _b.reverse();
            if (sublayers && sublayers.length > 0) {
                const promises = [];
                for (let k = 0; k < sublayers.length; k++) {
                    const sublayer = sublayers[k];
                    const promise = this.mapViewManager.getJimuMapViewById(this.jimuMapViewId).createJimuLayerView(sublayer, this.jimuLayerId, k, null, this.fromRuntime);
                    promises.push(promise);
                }
                yield Promise.all(promises);
            }
            return this;
        });
    }
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/jimu-tile-layer-view.ts":
/*!**************************************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/jimu-tile-layer-view.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuTileLayerView: () => (/* binding */ JimuTileLayerView)
/* harmony export */ });
/* harmony import */ var _jimu_mapservice_layer_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jimu-mapservice-layer-view */ "./jimu-arcgis/lib/views/layers/jimu-mapservice-layer-view.ts");

class JimuTileLayerView extends _jimu_mapservice_layer_view__WEBPACK_IMPORTED_MODULE_0__.JimuMapServiceLayerView {
}


/***/ }),

/***/ "./jimu-arcgis/lib/views/layers/utils.ts":
/*!***********************************************!*\
  !*** ./jimu-arcgis/lib/views/layers/utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleHighlightLayerVisible: () => (/* binding */ toggleHighlightLayerVisible)
/* harmony export */ });
function toggleHighlightLayerVisible(jimuMapView, jimuLayerView) {
    // jimuLayerView should be JimuGroupLayerView or JimuMapImageLayerView
    jimuLayerView.layer.watch('visible', (newValue) => {
        const childLayerViews = jimuMapView.getAllChildJimuLayerViews(jimuLayerView.id);
        childLayerViews.forEach(childLayerView => {
            const cLayerView = childLayerView;
            if (cLayerView.onParentLayerVisibleChange) {
                cLayerView.onParentLayerVisibleChange(newValue);
            }
        });
    });
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

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

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
/*!*******************************!*\
  !*** ./jimu-arcgis/index.tsx ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TO_MAP_DATA_ID_PREFIX: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.ADD_TO_MAP_DATA_ID_PREFIX),
/* harmony export */   ActionType: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.ActionType),
/* harmony export */   ArcGISDataSourceFactoryUriExtension: () => (/* reexport safe */ _lib_extensions_dependency_extension__WEBPACK_IMPORTED_MODULE_9__.ArcGISDataSourceFactoryUriExtension),
/* harmony export */   ArcGISDataSourceTypes: () => (/* reexport safe */ _lib_data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.ArcGISDataSourceTypes),
/* harmony export */   ArcGISDependencyDefineExtension: () => (/* reexport safe */ _lib_extensions_dependency_extension__WEBPACK_IMPORTED_MODULE_9__.ArcGISDependencyDefineExtension),
/* harmony export */   DataChangeStatus: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.DataChangeStatus),
/* harmony export */   DataChangeType: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.DataChangeType),
/* harmony export */   DataSourceTypes: () => (/* reexport safe */ _lib_data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.DataSourceTypes),
/* harmony export */   JimuFeatureLayerView: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.JimuFeatureLayerView),
/* harmony export */   JimuLayerView: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.JimuLayerView),
/* harmony export */   JimuLayerViewComponent: () => (/* reexport safe */ _lib_components_jimu_layer_view_component__WEBPACK_IMPORTED_MODULE_12__.JimuLayerViewComponent),
/* harmony export */   JimuMapView: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.JimuMapView),
/* harmony export */   JimuMapViewComponent: () => (/* reexport safe */ _lib_components_jimu_map_view_component__WEBPACK_IMPORTED_MODULE_11__.JimuMapViewComponent),
/* harmony export */   JimuMapViewGroup: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.JimuMapViewGroup),
/* harmony export */   JimuSceneLayerView: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.JimuSceneLayerView),
/* harmony export */   LayerTypes: () => (/* reexport safe */ _lib_data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__.LayerTypes),
/* harmony export */   MapViewManager: () => (/* reexport safe */ _lib_mapview_manager__WEBPACK_IMPORTED_MODULE_7__.MapViewManager),
/* harmony export */   SHOW_ON_MAP_DATA_ID_PREFIX: () => (/* reexport safe */ _lib_views__WEBPACK_IMPORTED_MODULE_6__.SHOW_ON_MAP_DATA_ID_PREFIX),
/* harmony export */   basemapUtils: () => (/* reexport module object */ _lib_utils_basemap_utils__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   defaultMessages: () => (/* reexport safe */ _lib_translations_default__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   featureUtils: () => (/* reexport module object */ _lib_utils_feature_utils__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   geometryUtils: () => (/* reexport safe */ jimu_core__WEBPACK_IMPORTED_MODULE_4__.geometryUtils),
/* harmony export */   init: () => (/* reexport safe */ _lib_init__WEBPACK_IMPORTED_MODULE_13__.init),
/* harmony export */   loadArcGISJSAPIModules: () => (/* reexport safe */ _lib_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_10__.loadArcGISJSAPIModules),
/* harmony export */   portalUtils: () => (/* reexport module object */ _lib_utils_portal_utils__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   zoomToUtils: () => (/* reexport module object */ _lib_utils_zoomto_utils__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lib_utils_zoomto_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils/zoomto-utils */ "./jimu-arcgis/lib/utils/zoomto-utils.ts");
/* harmony import */ var _lib_utils_portal_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils/portal-utils */ "./jimu-arcgis/lib/utils/portal-utils.ts");
/* harmony import */ var _lib_utils_feature_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/utils/feature-utils */ "./jimu-arcgis/lib/utils/feature-utils.ts");
/* harmony import */ var _lib_utils_basemap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/utils/basemap-utils */ "./jimu-arcgis/lib/utils/basemap-utils.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _lib_translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/translations/default */ "./jimu-arcgis/lib/translations/default.ts");
/* harmony import */ var _lib_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/views */ "./jimu-arcgis/lib/views/index.ts");
/* harmony import */ var _lib_mapview_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/mapview-manager */ "./jimu-arcgis/lib/mapview-manager.tsx");
/* harmony import */ var _lib_data_sources_arcgis_data_source_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/data-sources/arcgis-data-source-interface */ "./jimu-arcgis/lib/data-sources/arcgis-data-source-interface.ts");
/* harmony import */ var _lib_extensions_dependency_extension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/extensions/dependency-extension */ "./jimu-arcgis/lib/extensions/dependency-extension.ts");
/* harmony import */ var _lib_arcgis_js_api_module_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/arcgis-js-api-module-loader */ "./jimu-arcgis/lib/arcgis-js-api-module-loader.ts");
/* harmony import */ var _lib_components_jimu_map_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/components/jimu-map-view-component */ "./jimu-arcgis/lib/components/jimu-map-view-component.tsx");
/* harmony import */ var _lib_components_jimu_layer_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/components/jimu-layer-view-component */ "./jimu-arcgis/lib/components/jimu-layer-view-component.tsx");
/* harmony import */ var _lib_init__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/init */ "./jimu-arcgis/lib/init.ts");















/**
 * @ignore
 * @deprecated
 * 'geometryUtils' is deprecated from 'jimu-arcgis', please import it from 'jimu-core'
 */


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R2hGOzs7O0dBSUc7QUFDcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL2FyY2dpcy1qcy1hcGktbW9kdWxlLWxvYWRlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL2NvbXBvbmVudHMvamltdS1sYXllci12aWV3LWNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi9jb21wb25lbnRzL2ppbXUtbWFwLXZpZXctY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL2RhdGEtc291cmNlcy9hcmNnaXMtZGF0YS1zb3VyY2UtaW50ZXJmYWNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvZGF0YS1zb3VyY2VzL2ltcGxlbWVudGF0aW9ucy9tYXAtZGF0YS1zb3VyY2UtaW1wbC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL2RhdGEtc291cmNlcy9pbXBsZW1lbnRhdGlvbnMvd2VibWFwLWRhdGEtc291cmNlLWltcGwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi9kYXRhLXNvdXJjZXMvaW1wbGVtZW50YXRpb25zL3dlYnNjZW5lLWRhdGEtc291cmNlLWltcGwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi9kYXRhLXNvdXJjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi9leHRlbnNpb25zL2RlcGVuZGVuY3ktZXh0ZW5zaW9uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvaW5pdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL21hcHZpZXctbWFuYWdlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL3V0aWxzL2Jhc2VtYXAtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi91dGlscy9mZWF0dXJlLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvdXRpbHMvcG9ydGFsLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvdXRpbHMvem9vbXRvLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvdmlld3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi92aWV3cy9qaW11LW1hcC12aWV3LWdyb3VwLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvdmlld3MvamltdS1tYXAtdmlldy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL3ZpZXdzL2xheWVycy9qaW11LWZlYXR1cmUtbGF5ZXItc2NlbmUtbGF5ZXItdmlldy1jb21tb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi92aWV3cy9sYXllcnMvamltdS1mZWF0dXJlLWxheWVyLXZpZXcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi92aWV3cy9sYXllcnMvamltdS1ncm91cC1sYXllci12aWV3LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvdmlld3MvbGF5ZXJzL2ppbXUtbGF5ZXItdmlldy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL3ZpZXdzL2xheWVycy9qaW11LW1hcGltYWdlLWxheWVyLXZpZXcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi92aWV3cy9sYXllcnMvamltdS1tYXBzZXJ2aWNlLWxheWVyLXZpZXcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtYXJjZ2lzL2xpYi92aWV3cy9sYXllcnMvamltdS1zY2VuZS1sYXllci12aWV3LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9saWIvdmlld3MvbGF5ZXJzL2ppbXUtc3VidHlwZS1ncm91cC1sYXllci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL3ZpZXdzL2xheWVycy9qaW11LXRpbGUtbGF5ZXItdmlldy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1hcmNnaXMvbGliL3ZpZXdzL2xheWVycy91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2RhdGEtc291cmNlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWFyY2dpcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyBhcyBqaW11Q29yZUxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIChtb2R1bGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55W10+IHtcbiAgcmV0dXJuIGF3YWl0IGppbXVDb3JlTG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhtb2R1bGVzKVxufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSmltdUxheWVyVmlldyB9IGZyb20gJy4uL3ZpZXdzJ1xuaW1wb3J0IHsgTWFwVmlld01hbmFnZXIgfSBmcm9tICcuLi9tYXB2aWV3LW1hbmFnZXInXG5cbnR5cGUgVmlld1JlbmRlckZ1bmN0aW9uID0gKGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcpID0+IFJlYWN0LlJlYWN0Tm9kZVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqIFRoZSBKaW11TGF5ZXJWaWV3Q29tcG9uZW50IGNvbXBvbmVudCBwcm9wc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEppbXVMYXllclZpZXdDb21wb25lbnRQcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgSmltdU1hcFZpZXcgaWRcbiAgICovXG4gIGppbXVNYXBWaWV3SWQ6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBUaGUgSmltdUxheWVyVmlldyBpZFxuICAgKi9cbiAgamltdUxheWVyVmlld0lkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIExheWVyVmlldyBpcyBsb2FkZWQuXG4gICAqL1xuICBvbkppbXVMYXllclZpZXdMb2FkZWQ/OiAoamltdUxheWVyVmlldzogSmltdUxheWVyVmlldykgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgSmltdUxheWVyVmlldyBpbnN0YW5jZSBjcmVhdGlvbiBmYWlscy5cbiAgICovXG4gIG9uSmltdUxheWVyVmlld0ZhaWxlZD86IChlcnIpID0+IHZvaWRcblxuICBjaGlsZHJlbj86IFZpZXdSZW5kZXJGdW5jdGlvbiB8IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG4vKipcbiAqIEEgcmVhY3QgY29tcG9uZW50IHRoYXQgbWFrZXMgaXQgZWFzeSB0byB1c2UgSmltdUxheWVyVmlldyBmcm9tIHRoZSBtYXAgd2lkZ2V0LlxuICogSW4gbW9zdCBjYXNlcywgeW91IGNhbiBwYXNzIGluIGB1c2VNYXBXaWRnZXRJZHNgICYgYGppbXVMYXllclZpZXdJbmZvYCwgYW5kIHVzZSBgb25MYXllclZpZXdDcmVhdGVkYCAmIGBvbkxheWVyVmlld0ZhaWxlZGAgdG8gZ2V0IGEgY2FsbGJhY2sgZnJvbSB0aGUgSmltdUxheWVyVmlld0NvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEppbXVMYXllclZpZXdDb21wb25lbnQgKHByb3BzOiBKaW11TGF5ZXJWaWV3Q29tcG9uZW50UHJvcHMpIHtcbiAgY29uc3QgWywgc2V0SXNKaW11TGF5ZXJWaWV3TG9hZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBnZXRKaW11TGF5ZXJWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gTWFwVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRKaW11TWFwVmlld0J5SWQocHJvcHMuamltdU1hcFZpZXdJZClcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gamltdU1hcFZpZXc/LmppbXVMYXllclZpZXdzW3Byb3BzLmppbXVMYXllclZpZXdJZF1cbiAgICByZXR1cm4gamltdUxheWVyVmlld1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGhpcy5nZXRKaW11TGF5ZXJWaWV3KCkpIHtcbiAgICAgIHNldElzSmltdUxheWVyVmlld0xvYWRlZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqaW11TWFwVmlldyA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMucHJvcHMuamltdU1hcFZpZXdJZClcbiAgICAgIGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkKHRoaXMucHJvcHMuamltdUxheWVyVmlld0lkKS50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0SXNKaW11TGF5ZXJWaWV3TG9hZGVkKHRydWUpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW10pXG5cbiAgaWYgKCFwcm9wcy5qaW11TGF5ZXJWaWV3SWQgfHwgIXByb3BzLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGppbXVMYXllclZpZXcgPSBnZXRKaW11TGF5ZXJWaWV3KClcblxuICBpZiAoamltdUxheWVyVmlldykge1xuICAgIHJldHVybiB0eXBlb2YgcHJvcHMuY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBwcm9wcy5jaGlsZHJlbihqaW11TGF5ZXJWaWV3KSA6IHByb3BzLmNoaWxkcmVuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIFJlYWN0UmVkdXgsIHR5cGUgSU1TdGF0ZSwgdHlwZSBKaW11TWFwVmlld0luZm8sIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBKaW11TWFwVmlld1N0YXR1cywgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBVc2VEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJy4uL3ZpZXdzL2ppbXUtbWFwLXZpZXcnXG5pbXBvcnQgeyBNYXBWaWV3TWFuYWdlciB9IGZyb20gJy4uL21hcHZpZXctbWFuYWdlcidcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXdHcm91cCB9IGZyb20gJy4uL3ZpZXdzL2ppbXUtbWFwLXZpZXctZ3JvdXAnXG5cbnR5cGUgVmlld1JlbmRlckZ1bmN0aW9uID0gKHZpZXdzOiB7IFt2aWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3IH0pID0+IFJlYWN0LlJlYWN0Tm9kZVxuXG4vKiogQGlnbm9yZSAqL1xuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICB2aWV3SW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT5cbiAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XG59XG5cbi8qKlxuICogYEppbXVNYXBWaWV3Q29tcG9uZW50UHJvcHNgIHByb3ZpZGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgSmltdU1hcFZpZXdDb21wb25lbnRgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEppbXVNYXBWaWV3Q29tcG9uZW50UHJvcHMge1xuXG4gIC8qKlxuICAgKiBUaGUgbWFwIHdpZGdldCBpZCBzZWxlY3RlZCB3aXRoaW4gdGhlIGBNYXBXaWRnZXRTZWxlY3RvcmAgY29tcG9uZW50LlxuICAgKi9cbiAgdXNlTWFwV2lkZ2V0SWQ6IHN0cmluZ1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGNoaWxkcmVuPzogVmlld1JlbmRlckZ1bmN0aW9uIHwgUmVhY3QuUmVhY3ROb2RlXG5cbiAgLyoqXG4gICAqIFRoZSBgSmltdU1hcFZpZXdHcm91cGAgaXMgY3JlYXRlZCBvbmNlIHRoZSBmaXJzdCB2aWV3IGlzIGFkZGVkLiBWaWV3cyBpbiB0aGUgZ3JvdXBzIG1heSBiZSBzdGlsbCBub3QgbG9hZGVkIGFmdGVyIGEgZ3JvdXAgaXMgY3JlYXRlZC5cbiAgICovXG4gIG9uVmlld0dyb3VwQ3JlYXRlPzogKHZpZXdHcm91cDogSmltdU1hcFZpZXdHcm91cCkgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmNlIGFsbCBvZiB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZXMgaGF2ZSBhIGBKaW11TWFwVmlld1N0YXR1c2Agb2YgYFwiTE9BREVEXCJgLlxuICAgKi9cbiAgb25WaWV3c0NyZWF0ZT86ICh2aWV3czogeyBbdmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlldyB9KSA9PiB2b2lkXG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGN1cnJlbnQgYWN0aXZlIHZpZXcgb2YgdGhlIG1hcCB3aWRnZXQgaXMgY2hhbmdlZC5cbiAgICogRm9yIGV4YW1wbGUsIGl0IGlzIGNhbGxlZCB3aGVuIGNsaWNraW5nIG9uIHRoZSBzd2l0Y2gtbWFwIHRvb2wgZm9yIG11bHRpLXNvdXJjZSBtYXBzIG9yIGNoYW5naW5nIHRoZSBgRGF0YVNvdXJjZWAgZm9yIHRoZSBtYXAgd2lkZ2V0LlxuICAgKi9cbiAgb25BY3RpdmVWaWV3Q2hhbmdlPzogKGFjdGl2ZVZpZXc6IEppbXVNYXBWaWV3LCBwcmV2aW91c0FjdGl2ZVZpZXdJZDogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmNsYXNzIF9KaW11TWFwVmlld0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SmltdU1hcFZpZXdDb21wb25lbnRQcm9wcyAmIEV4dHJhUHJvcHMsIHVua25vd24+IHtcbiAgdmlld01hbmFnZXIgPSBNYXBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSgpXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHByZUFjdGl2ZVZpZXdJZCA9ICcnXG4gICAgdGhpcy5jaGVja1Byb3BDYWxsYmFja3NGb3JDdXJyZW50TWFwV2lkZ2V0SWQocHJlQWN0aXZlVmlld0lkKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEppbXVNYXBWaWV3Q29tcG9uZW50UHJvcHMgJiBFeHRyYVByb3BzKSB7XG4gICAgY29uc3QgcHJldk1hcFdpZGdldElkID0gcHJldlByb3BzLnVzZU1hcFdpZGdldElkIHx8ICcnXG4gICAgY29uc3QgY3Vyck1hcFdpZGdldElkID0gdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZCB8fCAnJ1xuXG4gICAgaWYgKGN1cnJNYXBXaWRnZXRJZCA9PT0gcHJldk1hcFdpZGdldElkKSB7XG4gICAgICAvLyB1c2VNYXBXaWRnZXRJZCBub3QgY2hhbmdlZFxuICAgICAgY29uc3QgcHJlVmlld0lkcyA9IHRoaXMuZ2V0Vmlld0lkc0Zyb21NYXBXaWRnZXRJZChwcmV2UHJvcHMudXNlTWFwV2lkZ2V0SWQsIHByZXZQcm9wcy52aWV3SW5mb3MpXG4gICAgICBjb25zdCB2aWV3SWRzID0gdGhpcy5nZXRWaWV3SWRzRnJvbU1hcFdpZGdldElkKHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWQsIHRoaXMucHJvcHMudmlld0luZm9zKVxuICAgICAgaWYgKHByZVZpZXdJZHMubGVuZ3RoID09PSAwICYmIHZpZXdJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm9uVmlld0dyb3VwQ3JlYXRlKClcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmdldFdoZXRoZXJBbGxWaWV3c0NyZWF0ZWQocHJlVmlld0lkcywgcHJldlByb3BzLnZpZXdJbmZvcywgcHJldlByb3BzLnVzZURhdGFTb3VyY2VzKSAmJiB0aGlzLmdldFdoZXRoZXJBbGxWaWV3c0NyZWF0ZWQodmlld0lkcywgdGhpcy5wcm9wcy52aWV3SW5mb3MsIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpKSB7XG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cyh2aWV3SWRzKVxuICAgICAgICB0aGlzLm9uVmlld3NDcmVhdGUodmlld3MpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZUFjdGl2ZVZpZXdJZCA9IHRoaXMuZ2V0QWN0aXZlVmlld0lkKHByZXZQcm9wcy51c2VNYXBXaWRnZXRJZCwgcHJldlByb3BzLnZpZXdJbmZvcylcbiAgICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuZ2V0QWN0aXZlVmlld0lkKHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWQsIHRoaXMucHJvcHMudmlld0luZm9zKVxuICAgICAgaWYgKHByZUFjdGl2ZVZpZXdJZCAhPT0gYWN0aXZlVmlld0lkKSB7XG4gICAgICAgIHRoaXMub25BY3RpdmVWaWV3Q2hhbmdlKHByZUFjdGl2ZVZpZXdJZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXNlTWFwV2lkZ2V0SWQgY2hhbmdlZFxuICAgICAgY29uc3QgcHJlQWN0aXZlVmlld0lkID0gdGhpcy5nZXRBY3RpdmVWaWV3SWQocHJldlByb3BzLnVzZU1hcFdpZGdldElkLCBwcmV2UHJvcHMudmlld0luZm9zKVxuICAgICAgdGhpcy5jaGVja1Byb3BDYWxsYmFja3NGb3JDdXJyZW50TWFwV2lkZ2V0SWQocHJlQWN0aXZlVmlld0lkKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgb3IgcHJvcHMudXNlTWFwV2lkZ2V0SWQgdXBkYXRlc1xuICAgKiBAcGFyYW0gcHJlQWN0aXZlVmlld0lkXG4gICAqL1xuICBjaGVja1Byb3BDYWxsYmFja3NGb3JDdXJyZW50TWFwV2lkZ2V0SWQgKHByZUFjdGl2ZVZpZXdJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgeyB1c2VNYXBXaWRnZXRJZCwgdmlld0luZm9zLCB1c2VEYXRhU291cmNlcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZpZXdJZHMgPSB0aGlzLmdldFZpZXdJZHNGcm9tTWFwV2lkZ2V0SWQodXNlTWFwV2lkZ2V0SWQsIHZpZXdJbmZvcylcbiAgICBpZiAodmlld0lkcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9uVmlld0dyb3VwQ3JlYXRlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRXaGV0aGVyQWxsVmlld3NDcmVhdGVkKHZpZXdJZHMsIHZpZXdJbmZvcywgdXNlRGF0YVNvdXJjZXMpKSB7XG4gICAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3Modmlld0lkcylcbiAgICAgIHRoaXMub25WaWV3c0NyZWF0ZSh2aWV3cylcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLmdldEFjdGl2ZVZpZXdJZCh1c2VNYXBXaWRnZXRJZCwgdmlld0luZm9zKVxuICAgIGlmIChwcmVBY3RpdmVWaWV3SWQgIT09IGFjdGl2ZVZpZXdJZCkge1xuICAgICAgdGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2UocHJlQWN0aXZlVmlld0lkKVxuICAgIH1cbiAgfVxuXG4gIG9uVmlld3NDcmVhdGUgPSAodmlld3M6IHsgW3ZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXcgfSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25WaWV3c0NyZWF0ZSAmJiB0aGlzLnByb3BzLm9uVmlld3NDcmVhdGUodmlld3MpXG4gIH1cblxuICBvblZpZXdHcm91cENyZWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblZpZXdHcm91cENyZWF0ZSAmJiB0aGlzLnZpZXdNYW5hZ2VyICYmIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWQpIHtcbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3R3JvdXAgPSB0aGlzLnZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3R3JvdXAodGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZClcbiAgICAgIHRoaXMucHJvcHMub25WaWV3R3JvdXBDcmVhdGUoamltdU1hcFZpZXdHcm91cClcbiAgICB9XG4gIH1cblxuICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAocHJldmlvdXNBY3RpdmVWaWV3SWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5vbkFjdGl2ZVZpZXdDaGFuZ2UpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVKaW11TWFwVmlldyA9IG51bGxcblxuICAgIGlmICh0aGlzLnZpZXdNYW5hZ2VyKSB7XG4gICAgICBjb25zdCBjdXJyQWN0aXZlSmltdU1hcFZpZXdJZCA9IHRoaXMuZ2V0QWN0aXZlVmlld0lkKHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWQsIHRoaXMucHJvcHMudmlld0luZm9zKVxuXG4gICAgICBpZiAoY3VyckFjdGl2ZUppbXVNYXBWaWV3SWQpIHtcbiAgICAgICAgYWN0aXZlSmltdU1hcFZpZXcgPSB0aGlzLnZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZChjdXJyQWN0aXZlSmltdU1hcFZpZXdJZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQWN0aXZlVmlld0NoYW5nZShhY3RpdmVKaW11TWFwVmlldywgcHJldmlvdXNBY3RpdmVWaWV3SWQpXG4gIH1cblxuICBnZXRBY3RpdmVWaWV3SWQgPSAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcgPT4ge1xuICAgIGxldCBhY3RpdmVWaWV3SWQgPSAnJ1xuXG4gICAgaWYgKG1hcFdpZGdldElkICYmIGluZm9zKSB7XG4gICAgICBhY3RpdmVWaWV3SWQgPSBpbmZvcyAmJiBPYmplY3Qua2V5cyhpbmZvcykuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSAmJiBpbmZvc1t2aWV3SWRdLnN0YXR1cyA9PT0gSmltdU1hcFZpZXdTdGF0dXMuTG9hZGVkKVxuICAgIH1cblxuICAgIGlmICghYWN0aXZlVmlld0lkKSB7XG4gICAgICAvLyBhY3RpdmVWaWV3SWQgbWF5YmUgdW5kZWZpbmVkLCBjb252ZXJ0IGl0IHRvIGVtcHR5IHN0cmluZ1xuICAgICAgYWN0aXZlVmlld0lkID0gJydcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlVmlld0lkXG4gIH1cblxuICBnZXRXaGV0aGVyQWxsVmlld3NDcmVhdGVkID0gKHZpZXdJZHM6IHN0cmluZ1tdLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mbyB9Piwgd2lkZ2V0VXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+KTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHZpZXdJZHM/Lmxlbmd0aCA8IHdpZGdldFVzZURhdGFTb3VyY2VzPy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdmlld0lkcz8ubGVuZ3RoID4gMCAmJiAhdmlld0lkcy5zb21lKHZJZCA9PiAhdGhpcy5nZXRXaGV0aGVyVmlld0NyZWF0ZWQodklkLCBpbmZvcykpXG4gIH1cblxuICBnZXRXaGV0aGVyVmlld0NyZWF0ZWQgPSAodmlld0lkLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mbyB9Pik6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiAhISh2aWV3SWQgJiYgaW5mb3MgJiYgaW5mb3Nbdmlld0lkXSAmJiBpbmZvc1t2aWV3SWRdLnN0YXR1cyAmJiBpbmZvc1t2aWV3SWRdLnN0YXR1cyA9PT0gSmltdU1hcFZpZXdTdGF0dXMuTG9hZGVkKVxuICB9XG5cbiAgZ2V0Vmlld0lkc0Zyb21NYXBXaWRnZXRJZCA9IChtYXBXaWRnZXRJZDogc3RyaW5nLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mbyB9Pik6IHN0cmluZ1tdID0+IHtcbiAgICByZXR1cm4gaW5mb3MgPyBPYmplY3Qua2V5cyhpbmZvcykuZmlsdGVyKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZCkgOiBbXVxuICB9XG5cbiAgZ2V0Vmlld3MgPSAodmlld0lkczogc3RyaW5nW10pOiB7IFt2aWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3IH0gPT4ge1xuICAgIGlmICghdmlld0lkcykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3czogeyBbdmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlldyB9ID0ge31cbiAgICB2aWV3SWRzLmZvckVhY2godklkID0+IHtcbiAgICAgIHZpZXdzW3ZJZF0gPSB0aGlzLnZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh2SWQpXG4gICAgfSlcblxuICAgIHJldHVybiB2aWV3c1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWQgfHwgIXRoaXMucHJvcHMudmlld0luZm9zIHx8ICF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHZpZXdJZHMgPSB0aGlzLmdldFZpZXdJZHNGcm9tTWFwV2lkZ2V0SWQodGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZCwgdGhpcy5wcm9wcy52aWV3SW5mb3MpXG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKHZpZXdJZHMpXG5cbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJvcHMuY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgID8gdGhpcy5wcm9wcy5jaGlsZHJlbih2aWV3cylcbiAgICAgIDogdGhpcy5wcm9wcy5jaGlsZHJlblxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSwgb3duUHJvcHM6IEppbXVNYXBWaWV3Q29tcG9uZW50UHJvcHMpOiBFeHRyYVByb3BzID0+IHtcbiAgY29uc3QgcyA9IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyID8/IHN0YXRlXG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3SW5mb3M6IHMuamltdU1hcFZpZXdzSW5mbyxcbiAgICB1c2VEYXRhU291cmNlczogcy5hcHBDb25maWc/LndpZGdldHNbb3duUHJvcHMudXNlTWFwV2lkZ2V0SWRdPy51c2VEYXRhU291cmNlc1xuICB9XG59XG5cbi8qKlxuICogQSBSZWFjdCBjb21wb25lbnQgdGhhdCBtYWtlcyBpdCBlYXN5IHRvIHVzZSB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZSBmcm9tIHRoZSBtYXAgd2lkZ2V0LlxuICogSW4gbW9zdCBjYXNlcywgeW91IGNhbiBwYXNzIGluIGB1c2VNYXBXaWRnZXRJZHNgLCBhbmQgdXNlIGBvblZpZXdzQ3JlYXRlYCwgYG9uQWN0aXZlVmlld0NoYW5nZWAgdG8gZ2V0IGNhbGxiYWNrIGZyb20gdGhlIGBKaW11TWFwVmlld0NvbXBvbmVudGAuXG4gKi9cbmV4cG9ydCBjb25zdCBKaW11TWFwVmlld0NvbXBvbmVudCA9IFJlYWN0UmVkdXguY29ubmVjdDxFeHRyYVByb3BzLCB1bmtub3duLCBKaW11TWFwVmlld0NvbXBvbmVudFByb3BzPihtYXBTdGF0ZVRvUHJvcHMpKF9KaW11TWFwVmlld0NvbXBvbmVudClcbiIsImltcG9ydCB0eXBlIHsgSU1EYXRhU291cmNlU2NoZW1hLCBEYXRhU291cmNlLCBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCBGZWF0dXJlRGF0YVJlY29yZCwgSXRlbU1peGluLCBBcmNHSVNTdWJMYXllciB9IGZyb20gJ2ppbXUtY29yZSdcblxuLyoqXG4gKiBUaGUgZGF0YSBzb3VyY2UgdHlwZXMgdGhhdCBgamltdS1hcmNnaXNgIHN1cHBvcnRzLlxuICogRm9yIGFkZGl0aW9uYWwgZGF0YSBzb3VyY2UgdHlwZXMsIHBsZWFzZSBzZWUgYERhdGFTb3VyY2VUeXBlc2AgZnJvbSB0aGUgYGppbXUtY29yZWAgcGFja2FnZS5cbiAqL1xuZXhwb3J0IGVudW0gRGF0YVNvdXJjZVR5cGVzIHtcbiAgTWFwID0gJ01BUCcsXG4gIFdlYk1hcCA9ICdXRUJfTUFQJyxcbiAgV2ViU2NlbmUgPSAnV0VCX1NDRU5FJyxcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBKUyBBUEkgbGF5ZXIgdHlwZXMuXG4gKi9cbmV4cG9ydCBlbnVtIExheWVyVHlwZXMge1xuICBCYXNlRHluYW1pY0xheWVyID0gJ2Jhc2UtZHluYW1pYycsXG4gIEJhc2VFbGV2YXRpb25MYXllciA9ICdiYXNlLWVsZXZhdGlvbicsXG4gIEJhc2VUaWxlTGF5ZXIgPSAnYmFzZS10aWxlJyxcbiAgQnVpbGRpbmdTY2VuZUxheWVyID0gJ2J1aWxkaW5nLXNjZW5lJyxcbiAgQ1NWTGF5ZXIgPSAnY3N2JyxcbiAgRWxldmF0aW9uTGF5ZXIgPSAnZWxldmF0aW9uJyxcbiAgRmVhdHVyZUxheWVyID0gJ2ZlYXR1cmUnLFxuICBHZW9KU09OTGF5ZXIgPSAnZ2VvanNvbicsXG4gIEdlb1JTU0xheWVyID0gJ2dlby1yc3MnLFxuICBHcmFwaGljc0xheWVyID0gJ2dyYXBoaWNzJyxcbiAgR3JvdXBMYXllciA9ICdncm91cCcsXG4gIFN1YnR5cGVHcm91cExheWVyID0gJ3N1YnR5cGUtZ3JvdXAnLFxuICBJbWFnZXJ5TGF5ZXIgPSAnaW1hZ2VyeScsXG4gIEludGVncmF0ZWRNZXNoTGF5ZXIgPSAnaW50ZWdyYXRlZC1tZXNoJyxcbiAgS01MTGF5ZXIgPSAna21sJyxcbiAgTWFwSW1hZ2VMYXllciA9ICdtYXAtaW1hZ2UnLFxuICBNYXBOb3Rlc0xheWVyID0gJ21hcC1ub3RlcycsXG4gIFBvaW50Q2xvdWRMYXllciA9ICdwb2ludC1jbG91ZCcsXG4gIFNjZW5lTGF5ZXIgPSAnc2NlbmUnLFxuICBUaWxlTGF5ZXIgPSAndGlsZScsXG4gIFVua25vd25MYXllciA9ICd1bmtub3duJyxcbiAgVW5zdXBwb3J0ZWRMYXllciA9ICd1bnN1cHBvcnRlZCcsXG4gIFZlY3RvclRpbGVMYXllciA9ICd2ZWN0b3ItdGlsZScsXG4gIFdNU0xheWVyID0gJ3dtcycsXG4gIFdNVFNMYXllciA9ICd3bXRzJyxcbiAgV2ViVGlsZUxheWVyID0gJ3dlYi10aWxlJ1xufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgbWFwIHJlbGF0ZWQgZGF0YSBzb3VyY2VzLlxuICogSXQgY29udGFpbnMgYSBKUyBBUEkgTWFwIGluc3RhbmNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcERhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlIHtcbiAgdHlwZTogRGF0YVNvdXJjZVR5cGVzLk1hcCB8IERhdGFTb3VyY2VUeXBlcy5XZWJNYXAgfCBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmVcbiAgbWFwOiBfX2VzcmkuTWFwXG4gIHJlYWR5OiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4gIGNoaWxkRGF0YVNvdXJjZXNSZWFkeTogKCkgPT4gUHJvbWlzZTxEYXRhU291cmNlW10+XG4gIGZldGNoU2NoZW1hOiAoKSA9PiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYT5cbiAgZ2V0RGF0YVNvdXJjZUJ5TGF5ZXI6IChsYXllcjogX19lc3JpLkxheWVyIHwgQXJjR0lTU3ViTGF5ZXIpID0+IERhdGFTb3VyY2VcbiAgZ2V0RGF0YVNvdXJjZUlkQnlMYXllcjogKGxheWVyOiBfX2VzcmkuTGF5ZXIgfCBBcmNHSVNTdWJMYXllcikgPT4gc3RyaW5nXG4gIGNyZWF0ZURhdGFTb3VyY2VCeUxheWVyOiAobGF5ZXI6IF9fZXNyaS5MYXllciB8IEFyY0dJU1N1YkxheWVyKSA9PiBQcm9taXNlPERhdGFTb3VyY2U+XG4gIGNyZWF0ZURhdGFTb3VyY2VCeUlkOiAoZGF0YVNvdXJjZUlkOiBzdHJpbmcpID0+IFByb21pc2U8RGF0YVNvdXJjZT5cbn1cblxuLyoqXG4gKiBXZWIgbWFwIGRhdGEgc291cmNlIGlzIGNyZWF0ZWQgZnJvbSBhIHdlYm1hcC5cbiAqIEl0IG1heSBoYXZlIGNoaWxkIGRhdGEgc291cmNlcyAoc3VjaCBhcyBmZWF0dXJlIGxheWVyIGRhdGEgc291cmNlLCBncm91cCBsYXllciBkYXRhIHNvdXJjZSBhbmQgc28gb24pLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFdlYk1hcERhdGFTb3VyY2UgZXh0ZW5kcyBNYXBEYXRhU291cmNlLCBJdGVtTWl4aW4ge1xuICB0eXBlOiBEYXRhU291cmNlVHlwZXMuV2ViTWFwXG4gIG1hcDogX19lc3JpLldlYk1hcFxufVxuXG4vKipcbiAqIFdlYiBzY2VuZSBkYXRhIHNvdXJjZSBpcyBjcmVhdGVkIGZyb20gYSB3ZWJzY2VuZS5cbiAqIEl0IG1heSBoYXZlIGNoaWxkIGRhdGEgc291cmNlcyAoc3VjaCBhcyBmZWF0dXJlIGxheWVyIGRhdGEgc291cmNlLCBzY2VuZSBsYXllciBkYXRhIHNvdXJjZSBhbmQgc28gb24pLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNjZW5lRGF0YVNvdXJjZSBleHRlbmRzIE1hcERhdGFTb3VyY2UsIEl0ZW1NaXhpbiB7XG4gIHR5cGU6IERhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZVxuICBtYXA6IF9fZXNyaS5XZWJTY2VuZVxufVxuXG4vKipcbiAqIFRoZSBkYXRhIHNvdXJjZSB0eXBlcyB0aGF0IGBqaW11LWFyY2dpc2Agc3VwcG9ydHMuXG4gKiBGb3IgYWRkaXRpb25hbCBkYXRhIHNvdXJjZSB0eXBlcywgcGxlYXNlIHNlZSBgRGF0YVNvdXJjZVR5cGVzYCBmcm9tIHRoZSBgamltdS1jb3JlYCBwYWNrYWdlLlxuICogU2VlIHtAbGluayBEYXRhU291cmNlVHlwZXN9IGZvciBkZXRhaWxzLlxuICovXG5leHBvcnQgeyBEYXRhU291cmNlVHlwZXMgYXMgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH1cblxuZXhwb3J0IHR5cGUgeyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCBGZWF0dXJlRGF0YVJlY29yZCB9XG4iLCJpbXBvcnQge1xuICBBYnN0cmFjdFNldERhdGFTb3VyY2UsIHR5cGUgRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucyxcbiAgdHlwZSBEYXRhU291cmNlVHlwZXMgYXMgSmltdUNvcmVEYXRhU291cmNlVHlwZXMsIHR5cGUgSlNBUElMYXllck1peGluLCB0eXBlIEFyY0dJU1N1YkxheWVyLCBEYXRhU291cmNlRXJyb3IsIGRhdGFTb3VyY2VKc29uQ3JlYXRvclxufSBmcm9tICdqaW11LWNvcmUvZGF0YS1zb3VyY2UnXG5pbXBvcnQgeyB0eXBlIElNRGF0YVNvdXJjZUpzb24sIEltbXV0YWJsZSwgdHlwZSBJTURhdGFTb3VyY2VTY2hlbWEsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIGRhdGFTb3VyY2VVdGlscywgdHlwZSBEYXRhU291cmNlLCBnZXRBcHBTdG9yZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IERhdGFTb3VyY2VUeXBlcywgdHlwZSBNYXBEYXRhU291cmNlIH0gZnJvbSAnLi4vYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcblxuZXhwb3J0IGludGVyZmFjZSBNYXBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zIGV4dGVuZHMgRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIG1hcD86IF9fZXNyaS5NYXBcbn1cblxuZXhwb3J0IGNsYXNzIE1hcERhdGFTb3VyY2VJbXBsIGV4dGVuZHMgQWJzdHJhY3RTZXREYXRhU291cmNlIGltcGxlbWVudHMgTWFwRGF0YVNvdXJjZSB7XG4gIHR5cGU6IERhdGFTb3VyY2VUeXBlcy5NYXAgfCBEYXRhU291cmNlVHlwZXMuV2ViTWFwIHwgRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lID0gRGF0YVNvdXJjZVR5cGVzLk1hcFxuICBtYXA6IF9fZXNyaS5NYXBcblxuICBjb25zdHJ1Y3RvciAob3B0aW9uczogTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpXG5cbiAgICB0aGlzLm1hcCA9IG9wdGlvbnMubWFwXG4gIH1cblxuICBhc3luYyByZWFkeSAoKSB7XG4gICAgaWYgKCF0aGlzLm1hcCkge1xuICAgICAgYXdhaXQgdGhpcy5jcmVhdGVNYXAoKVxuICAgIH1cblxuICAgIGlmIChkYXRhU291cmNlVXRpbHMuZ2V0V2hldGhlclVzZVByb3h5KCkpIHtcbiAgICAgIHRoaXMuc2V0UHJveGllcygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRmlsdGVyVXJsQ2hpbGREYXRhU291cmNlKClcbiAgfVxuXG4gIGNoaWxkRGF0YVNvdXJjZXNSZWFkeSAoKTogUHJvbWlzZTxEYXRhU291cmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZERhdGFTb3VyY2VzUmVjdXJzaXZlbHkoKS50aGVuKGNoaWxkRGF0YVNvdXJjZXMgPT4ge1xuICAgICAgcmV0dXJuIGNoaWxkRGF0YVNvdXJjZXNcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHRoaXMuY2hpbGREYXRhU291cmNlc0NyZWF0ZWQgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDaGlsZElkcyAoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmdldExheWVyc0FuZFRhYmxlcygpLm1hcChsYXllck9yVGFibGUgPT4gdGhpcy5nZXRDaGlsZElkQnlMYXllcihsYXllck9yVGFibGUpKVxuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUNoaWxkRGF0YVNvdXJjZUJ5SWQgKGNoaWxkRHNJZDogc3RyaW5nLCBqaW11Q2hpbGRJZDogc3RyaW5nLCBjaGlsZElkOiBzdHJpbmcpOiBQcm9taXNlPERhdGFTb3VyY2U+IHtcbiAgICBjb25zdCBsYXllckluZm8gPSB0aGlzLmZpbmRMYXllckluZm8oY2hpbGRJZClcbiAgICBpZiAoIWxheWVySW5mbz8ubGF5ZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRGF0YVNvdXJjZUVycm9yKGNoaWxkRHNJZCwgJ0NhbiBub3QgZmluZCBkYXRhIHNvdXJjZS4nKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDaGlsZERhdGFTb3VyY2VCeUxheWVyKGxheWVySW5mby5sYXllciwgamltdUNoaWxkSWQsIGNoaWxkRHNJZCwgbGF5ZXJJbmZvLm9yZGVyKVxuICB9XG5cbiAgY3JlYXRlRGF0YVNvdXJjZUJ5TGF5ZXIgKGxheWVyOiBfX2VzcmkuTGF5ZXIgfCBBcmNHSVNTdWJMYXllcik6IFByb21pc2U8RGF0YVNvdXJjZT4ge1xuICAgIGNvbnN0IGxheWVyRHMgPSB0aGlzLmdldERhdGFTb3VyY2VCeUxheWVyKGxheWVyKVxuICAgIGlmIChsYXllckRzKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxheWVyRHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRGF0YVNvdXJjZUJ5SWQodGhpcy5nZXREYXRhU291cmNlSWRCeUxheWVyKGxheWVyKSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoU2NoZW1hICgpOiBQcm9taXNlPElNRGF0YVNvdXJjZVNjaGVtYT4ge1xuICAgIGNvbnN0IGRzcyA9IHRoaXMuZ2V0Q2hpbGREYXRhU291cmNlcygpXG5cbiAgICBsZXQgbWFwU2NoZW1hOiBJTURhdGFTb3VyY2VTY2hlbWEgPSBJbW11dGFibGUoeyBjaGlsZFNjaGVtYXM6IHt9LCBsYWJlbDogKHRoaXMubWFwIGFzIF9fZXNyaS5XZWJNYXAgfCBfX2VzcmkuV2ViU2NlbmUpPy5wb3J0YWxJdGVtPy50aXRsZSB9KSBhcyBJTURhdGFTb3VyY2VTY2hlbWFcbiAgICBkc3MuZm9yRWFjaCgoZHMsIGkpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyU2NoZW1hID0gZHMuZ2V0RmV0Y2hlZFNjaGVtYSgpXG4gICAgICBtYXBTY2hlbWEgPSBtYXBTY2hlbWEuc2V0SW4oWydjaGlsZFNjaGVtYXMnLCBkcy5qaW11Q2hpbGRJZF0sIGxheWVyU2NoZW1hKVxuICAgIH0pXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1hcFNjaGVtYSlcbiAgfVxuXG4gIGdldERhdGFTb3VyY2VCeUxheWVyIChsYXllcjogX19lc3JpLkxheWVyIHwgQXJjR0lTU3ViTGF5ZXIpOiBEYXRhU291cmNlIHtcbiAgICBjb25zdCBqaW11TGF5ZXJJZE9mSW5wdXRMYXllciA9IGRhdGFTb3VyY2VVdGlscy5nZXRKaW11TGF5ZXJJZEJ5SlNBUElMYXllcihsYXllcilcbiAgICBjb25zdCBkZXNjZW5kYW50RHNzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGFTb3VyY2VNYW5hZ2VyLmdldERhdGFTb3VyY2VzKCkpLmZpbHRlcihkcyA9PiBkcy5nZXRSb290RGF0YVNvdXJjZSgpPy5pZCA9PT0gdGhpcy5pZClcbiAgICByZXR1cm4gZGVzY2VuZGFudERzcy5maW5kKGRzID0+IChkcyBhcyB1bmtub3duIGFzIEpTQVBJTGF5ZXJNaXhpbikuamltdUxheWVySWQgPT09IGppbXVMYXllcklkT2ZJbnB1dExheWVyKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgZGVzY2VuZGFudCBkYXRhIHNvdXJjZXMgd2l0aCBzcGVjaWZpYyBkYXRhIHNvdXJjZSB0eXBlLlxuICAgKi9cbiAgZ2V0RGF0YVNvdXJjZXNCeVR5cGUgKHR5cGU6IEppbXVDb3JlRGF0YVNvdXJjZVR5cGVzIHwgRGF0YVNvdXJjZVR5cGVzKTogRGF0YVNvdXJjZVtdIHtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGFTb3VyY2VzV2l0aFNwZWNpZmljVHlwZSA9IFtdXG4gICAgdGhpcy50cmF2ZXJzZVRvR2V0RGF0YVNvdXJjZXNCeVR5cGUodHlwZSwgdGhpcywgZGF0YVNvdXJjZXNXaXRoU3BlY2lmaWNUeXBlKVxuXG4gICAgcmV0dXJuIGRhdGFTb3VyY2VzV2l0aFNwZWNpZmljVHlwZVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IGNvbnNpZGVyIGRhdGEgc291cmNlIG1hcHBpbmcsIHJlZmFjdG9yIHRoaXMgbWV0aG9kLlxuICAgKiBJZiBjb25zaWRlciBkYXRhIHNvdXJjZSBtYXBwaW5nLCBvbmUgSlMgQVBJIGxheWVyIG1heSBtYXRjaCBtdWx0aXBsZSBsYXllciBkYXRhIHNvdXJjZXMuXG4gICAqL1xuICBnZXREYXRhU291cmNlSWRCeUxheWVyIChsYXllcjogX19lc3JpLkxheWVyIHwgQXJjR0lTU3ViTGF5ZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRhU291cmNlVXRpbHMuZ2V0RGF0YVNvdXJjZUlkQnlKU0FQSUxheWVyKHRoaXMuaWQsIGxheWVyKVxuICB9XG5cbiAgcHJpdmF0ZSB0cmF2ZXJzZVRvR2V0RGF0YVNvdXJjZXNCeVR5cGUgKHR5cGU6IEppbXVDb3JlRGF0YVNvdXJjZVR5cGVzIHwgRGF0YVNvdXJjZVR5cGVzLCBkYXRhU291cmNlOiBEYXRhU291cmNlLCBkYXRhU291cmNlc1dpdGhTcGVjaWZpY1R5cGU6IERhdGFTb3VyY2VbXSkge1xuICAgIGlmICghdHlwZSB8fCAhZGF0YVNvdXJjZSB8fCAhZGF0YVNvdXJjZXNXaXRoU3BlY2lmaWNUeXBlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZGF0YVNvdXJjZS50eXBlID09PSB0eXBlKSB7XG4gICAgICBkYXRhU291cmNlc1dpdGhTcGVjaWZpY1R5cGUucHVzaChkYXRhU291cmNlKVxuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRGF0YVNvdXJjZXMgPSBkYXRhU291cmNlLmlzRGF0YVNvdXJjZVNldCAmJiBkYXRhU291cmNlLmdldENoaWxkRGF0YVNvdXJjZXMoKVxuICAgIGlmIChjaGlsZERhdGFTb3VyY2VzKSB7XG4gICAgICBjaGlsZERhdGFTb3VyY2VzLmZvckVhY2goY2hpbGREYXRhU291cmNlID0+IHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZVRvR2V0RGF0YVNvdXJjZXNCeVR5cGUodHlwZSwgY2hpbGREYXRhU291cmNlLCBkYXRhU291cmNlc1dpdGhTcGVjaWZpY1R5cGUpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBjcmVhdGVNYXAgKCkge1xuICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFsnZXNyaS9NYXAnLCAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ10pXG4gICAgY29uc3QgTWFwOiB0eXBlb2YgX19lc3JpLk1hcCA9IG1vZHVsZXNbMF1cbiAgICBjb25zdCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyID0gbW9kdWxlc1sxXVxuXG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKClcbiAgICB0aGlzLmdldERhdGFTb3VyY2VKc29uKCkubGF5ZXJzPy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgIHRoaXMubWFwLmxheWVycy5hZGQobmV3IEZlYXR1cmVMYXllcihsYXllcikpXG4gICAgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRQcm94aWVzICgpIHtcbiAgICBjb25zdCB0YWJsZXMgPSB0aGlzLm1hcC50YWJsZXM/LnRvQXJyYXkoKSB8fCBbXVxuXG4gICAgY29uc3QgdXNlUHJveHkgPSBkYXRhU291cmNlVXRpbHMuZ2V0V2hldGhlclVzZVByb3h5KClcbiAgICBpZiAodXNlUHJveHkpIHtcbiAgICAgIHRoaXMubWFwLmFsbExheWVycy50b0FycmF5KCkuY29uY2F0KHRhYmxlcykuZm9yRWFjaChsYXllck9yVGFibGUgPT4geyB0aGlzLnNldFByb3h5Rm9yTGF5ZXJPclRhYmxlKGxheWVyT3JUYWJsZSBhcyBfX2VzcmkuTGF5ZXIgJiB7IHVybDogc3RyaW5nLCBwb3J0YWxJdGVtPzogX19lc3JpLlBvcnRhbEl0ZW0gfSkgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFByb3h5Rm9yTGF5ZXJPclRhYmxlIChsYXllck9yVGFibGU6IF9fZXNyaS5MYXllciAmIHsgdXJsOiBzdHJpbmcsIHBvcnRhbEl0ZW0/OiBfX2VzcmkuUG9ydGFsSXRlbSB9KSB7XG4gICAgY29uc3Qgc291cmNlVXJsID0gZGF0YVNvdXJjZVV0aWxzLmdldFVybEJ5TGF5ZXIobGF5ZXJPclRhYmxlKVxuICAgIGlmICghc291cmNlVXJsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcHJveHlVcmwgPSBkYXRhU291cmNlVXRpbHMuZ2V0RGF0YVNvdXJjZVByb3h5VXJsKHNvdXJjZVVybClcblxuICAgIGlmIChwcm94eVVybCkge1xuICAgICAgbGF5ZXJPclRhYmxlLnVybCA9IHByb3h5VXJsXG5cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBpcyB0aGUgd29ya2Fyb3VuZCB0byBmaXggSlMgQVBJIDQuMjggaXNzdWUuIE5lZWQgdG8gYmUgcmVwbGFjZWQgd2l0aCByZXF1ZXN0IGludGVyY2VwdG9yIGluIG5leHQgcmVsZWFzZS5cbiAgICAgIGNvbnN0IHBvcnRhbEl0ZW0gPSBsYXllck9yVGFibGUucG9ydGFsSXRlbVxuXG4gICAgICBpZiAocG9ydGFsSXRlbSAmJiBwb3J0YWxJdGVtLndoZW4pIHtcbiAgICAgICAgcG9ydGFsSXRlbS53aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBBZnRlciBleGVjdXRlICdsYXllci51cmwgPSBwcm94eVVybCcsIGxheWVyLnVybCBtYXliZSBzdGlsbCBkaWZmZXJlbnQgd2l0aCBwcm94eVVybCwgZS5nLiBwcm94eVVybCBpcyAneHh4L2ZlYXR1cmVzZXJ2ZXIvMCcsIGJ1dCB0aGUgZmluYWwgbGF5ZXIudXJsIGlzICd4eHgvZmVhdHVyZXNlcnZlcicuXG4gICAgICAgICAgLy8gc28gd2UgdXNlIGxheWVyLnVybCBoZXJlLCBub3QgcHJveHlVcmwuXG4gICAgICAgICAgcG9ydGFsSXRlbS51cmwgPSBsYXllck9yVGFibGUudXJsXG5cbiAgICAgICAgICBpZiAocG9ydGFsSXRlbS5zb3VyY2VKU09OKSB7XG4gICAgICAgICAgICBwb3J0YWxJdGVtLnNvdXJjZUpTT04udXJsID0gbGF5ZXJPclRhYmxlLnVybFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNoaWxkRGF0YVNvdXJjZUJ5TGF5ZXIgKGxheWVyOiBfX2VzcmkuTGF5ZXIsIGppbXVDaGlsZElkOiBzdHJpbmcsIGNoaWxkRHNJZDogc3RyaW5nLCBvcmRlcjogbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlPiB7XG4gICAgY29uc3Qgc2NoZW1hSW5Db25maWcgPSB0aGlzLmdldERhdGFTb3VyY2VKc29uKCkuc2NoZW1hPy5jaGlsZFNjaGVtYXM/LltqaW11Q2hpbGRJZF0gfHwgbnVsbFxuICAgIGNvbnN0IGRzSnNvbkluQ29uZmlnID0gdGhpcy5nZXREYXRhU291cmNlSnNvbigpLmNoaWxkRGF0YVNvdXJjZUpzb25zPy5bamltdUNoaWxkSWRdIHx8IG51bGxcblxuICAgIGNvbnN0IGRzSnNvbjogSU1EYXRhU291cmNlSnNvbiA9IGRhdGFTb3VyY2VKc29uQ3JlYXRvci5jcmVhdGVEYXRhU291cmNlSnNvbkJ5SlNBUElMYXllcihjaGlsZERzSWQsIGxheWVyLCBkc0pzb25JbkNvbmZpZywgc2NoZW1hSW5Db25maWcpXG4gICAgaWYgKGRzSnNvbikge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgaWQ6IGRzSnNvbi5pZCxcbiAgICAgICAgZGF0YVNvdXJjZUpzb246IGRzSnNvbixcbiAgICAgICAgbGF5ZXI6IGxheWVyLFxuICAgICAgICBwYXJlbnREYXRhU291cmNlOiB0aGlzLFxuICAgICAgICBqaW11Q2hpbGRJZCxcbiAgICAgICAgb3JkZXJcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VNYW5hZ2VyLmNyZWF0ZURhdGFTb3VyY2Uob3B0aW9ucylcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IERhdGFTb3VyY2VFcnJvcihjaGlsZERzSWQsICdEbyBub3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgZGF0YS4nKSlcbiAgfVxuXG4gIHByaXZhdGUgZmluZExheWVySW5mbyAoY2hpbGRJZDogc3RyaW5nKTogeyBsYXllcjogX19lc3JpLkxheWVyLCBvcmRlcjogbnVtYmVyIH0ge1xuICAgIGxldCBsYXllckluZm86IHsgbGF5ZXI6IF9fZXNyaS5MYXllciwgb3JkZXI6IG51bWJlciB9XG4gICAgdGhpcy5nZXRMYXllcnNBbmRUYWJsZXMoKS5zb21lKChsLCBpKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXRDaGlsZElkQnlMYXllcihsKSA9PT0gY2hpbGRJZCkge1xuICAgICAgICBsYXllckluZm8gPSB7XG4gICAgICAgICAgbGF5ZXI6IGwsXG4gICAgICAgICAgb3JkZXI6IGlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIHJldHVybiBsYXllckluZm9cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGF5ZXJzQW5kVGFibGVzICgpOiBfX2VzcmkuTGF5ZXJbXSB7XG4gICAgY29uc3QgbGF5ZXJzID0gdGhpcy5tYXAubGF5ZXJzLnRvQXJyYXkoKS5yZXZlcnNlKClcbiAgICBjb25zdCB0YWJsZXMgPSAodGhpcy5tYXAudGFibGVzID8gdGhpcy5tYXAudGFibGVzLnRvQXJyYXkoKSA6IFtdKS5yZXZlcnNlKClcbiAgICByZXR1cm4gbGF5ZXJzLmNvbmNhdCh0YWJsZXMpXG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkSWRCeUxheWVyIChsYXllcjogX19lc3JpLkxheWVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0YVNvdXJjZVV0aWxzLmdldEZpeGVkTGF5ZXJJZEJ5TGF5ZXIobGF5ZXIpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHRlbXAgZml4LiBMZXQncyBtb3ZlIHRoaXMgY29kZSBpbnRvIEppbXVMYXllclZpZXcgd2hlbiB0aGlzIGlzc3VlIGlzIGZpeGVkOiBodHRwczovL2RldnRvcGlhLmVzcmkuY29tL1dlYkdJUy9hcmNnaXMtanMtYXBpL2lzc3Vlcy80ODA2NlxuICAgKi9cbiAgcHJvdGVjdGVkIGNyZWF0ZUZpbHRlclVybENoaWxkRGF0YVNvdXJjZSAoKSB7XG4gICAgY29uc3QgZGF0YVNvdXJjZUluZm8gPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuZGF0YVNvdXJjZXNJbmZvXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKGRhdGFTb3VyY2VJbmZvIHx8IHt9KS5maWx0ZXIoZHNJZCA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZUluZm9bZHNJZF0ud2lkZ2V0UXVlcmllcz8uX2ZpbHRlckluVXJsICYmIHRoaXMuZmluZENoaWxkRGF0YVNvdXJjZUlkQnlEZXNjZW5kYW50RGF0YVNvdXJjZUlkKGRzSWQpXG4gICAgfSkubWFwKGRzSWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRGF0YVNvdXJjZUJ5SWQoZHNJZClcbiAgICB9KSkudGhlbigoKSA9PiB7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzIG1ldGhvZCBhbHdheXMgcmVzb2x2ZWQsIG90aGVyd2lzZSBtYXBEcyB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAgY29uc29sZS5lcnJvcignY3JlYXRlIGZpbHRlciB1cmwgY2hpbGQgZGF0YSBzb3VyY2VzIGVycm9yJywgZXJyKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHR5cGUgSUl0ZW0gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7IHBvcnRhbFVybFV0aWxzLCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSXRlbU1peGluSW1wbCB9IGZyb20gJ2ppbXUtY29yZS9kYXRhLXNvdXJjZSdcbmltcG9ydCB7IERhdGFTb3VyY2VUeXBlcywgdHlwZSBXZWJNYXBEYXRhU291cmNlIH0gZnJvbSAnLi4vYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbmltcG9ydCB7IHR5cGUgTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucywgTWFwRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL21hcC1kYXRhLXNvdXJjZS1pbXBsJ1xuZXhwb3J0IGludGVyZmFjZSBXZWJNYXBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zIGV4dGVuZHMgTWFwRGF0YVNvdXJjZUNvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIG1hcD86IF9fZXNyaS5XZWJNYXBcbn1cbmV4cG9ydCBjbGFzcyBXZWJNYXBEYXRhU291cmNlSW1wbCBleHRlbmRzIEl0ZW1NaXhpbkltcGwoTWFwRGF0YVNvdXJjZUltcGwpIGltcGxlbWVudHMgV2ViTWFwRGF0YVNvdXJjZSB7XG4gIHR5cGU6IERhdGFTb3VyY2VUeXBlcy5XZWJNYXAgPSBEYXRhU291cmNlVHlwZXMuV2ViTWFwXG4gIG1hcDogX19lc3JpLldlYk1hcFxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zOiBXZWJNYXBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCBkc0pzb24gPSB0aGlzLmdldERhdGFTb3VyY2VKc29uKClcbiAgICB0aGlzLnBvcnRhbFVybCA9IGRzSnNvbi5wb3J0YWxVcmxcbiAgICB0aGlzLml0ZW1JZCA9IGRzSnNvbi5pdGVtSWRcbiAgfVxuXG4gIHByb3RlY3RlZCBhc3luYyBjcmVhdGVNYXAgKCkge1xuICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL1dlYk1hcCcsXG4gICAgICAnZXNyaS9wb3J0YWwvUG9ydGFsJyxcbiAgICAgICdlc3JpL3BvcnRhbC9Qb3J0YWxJdGVtJ1xuICAgIF0pXG4gICAgY29uc3QgV2ViTWFwOiB0eXBlb2YgX19lc3JpLldlYk1hcCA9IG1vZHVsZXNbMF1cbiAgICBjb25zdCBQb3J0YWw6IHR5cGVvZiBfX2VzcmkuUG9ydGFsID0gbW9kdWxlc1sxXVxuICAgIGNvbnN0IFBvcnRhbEl0ZW06IHR5cGVvZiBfX2VzcmkuUG9ydGFsSXRlbSA9IG1vZHVsZXNbMl1cbiAgICBpZiAodGhpcy5nZXREYXRhU291cmNlSnNvbigpLnBvcnRhbFVybCkge1xuICAgICAgY29uc3QgcG9ydGFsID0gbmV3IFBvcnRhbCh7XG4gICAgICAgIHVybDogcG9ydGFsVXJsVXRpbHMuZ2V0UGxhdGZvcm1VcmxCeU9yZ1VybCh0aGlzLmdldERhdGFTb3VyY2VKc29uKCkucG9ydGFsVXJsKVxuICAgICAgfSlcbiAgICAgIHRoaXMubWFwID0gbmV3IFdlYk1hcCh7XG4gICAgICAgIHBvcnRhbEl0ZW06IG5ldyBQb3J0YWxJdGVtKHtcbiAgICAgICAgICBpZDogdGhpcy5nZXREYXRhU291cmNlSnNvbigpLml0ZW1JZCxcbiAgICAgICAgICBwb3J0YWw6IHBvcnRhbFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAgPSBuZXcgV2ViTWFwKHtcbiAgICAgICAgcG9ydGFsSXRlbTogbmV3IFBvcnRhbEl0ZW0oe1xuICAgICAgICAgIGlkOiB0aGlzLmdldERhdGFTb3VyY2VKc29uKCkuaXRlbUlkXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoIXRoaXMubWFwLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgIGF3YWl0IHRoaXMubWFwLmxvYWQoKS50aGVuKCgpID0+IHsgdGhpcy5pbml0SXRlbSgpIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdEl0ZW0oKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEl0ZW0gKCkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1EYXRhKCh0aGlzLm1hcCBhcyBhbnkpLnJlc291cmNlSW5mbylcbiAgICB0aGlzLnNldEl0ZW1JbmZvKHRoaXMubWFwLnBvcnRhbEl0ZW0/LnNvdXJjZUpTT04gYXMgSUl0ZW0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHR5cGUgSUl0ZW0gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7IHBvcnRhbFVybFV0aWxzLCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSXRlbU1peGluSW1wbCB9IGZyb20gJ2ppbXUtY29yZS9kYXRhLXNvdXJjZSdcbmltcG9ydCB7IERhdGFTb3VyY2VUeXBlcywgdHlwZSBXZWJTY2VuZURhdGFTb3VyY2UgfSBmcm9tICcuLi9hcmNnaXMtZGF0YS1zb3VyY2UtaW50ZXJmYWNlJ1xuaW1wb3J0IHsgdHlwZSBNYXBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zLCBNYXBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vbWFwLWRhdGEtc291cmNlLWltcGwnXG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU2NlbmVEYXRhU291cmNlQ29udHJ1Y3Rvck9wdGlvbnMgZXh0ZW5kcyBNYXBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zIHtcbiAgbWFwPzogX19lc3JpLldlYlNjZW5lXG59XG5cbmV4cG9ydCBjbGFzcyBXZWJTY2VuZURhdGFTb3VyY2VJbXBsIGV4dGVuZHMgSXRlbU1peGluSW1wbChNYXBEYXRhU291cmNlSW1wbCkgaW1wbGVtZW50cyBXZWJTY2VuZURhdGFTb3VyY2Uge1xuICB0eXBlOiBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUgPSBEYXRhU291cmNlVHlwZXMuV2ViU2NlbmVcbiAgbWFwOiBfX2VzcmkuV2ViU2NlbmVcblxuICBjb25zdHJ1Y3RvciAob3B0aW9uczogV2ViU2NlbmVEYXRhU291cmNlQ29udHJ1Y3Rvck9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IGRzSnNvbiA9IHRoaXMuZ2V0RGF0YVNvdXJjZUpzb24oKVxuICAgIHRoaXMucG9ydGFsVXJsID0gZHNKc29uLnBvcnRhbFVybFxuICAgIHRoaXMuaXRlbUlkID0gZHNKc29uLml0ZW1JZFxuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIGNyZWF0ZU1hcCAoKSB7XG4gICAgY29uc3QgbW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvV2ViU2NlbmUnLFxuICAgICAgJ2VzcmkvcG9ydGFsL1BvcnRhbCcsXG4gICAgICAnZXNyaS9wb3J0YWwvUG9ydGFsSXRlbSdcbiAgICBdKVxuICAgIGNvbnN0IFdlYlNjZW5lOiB0eXBlb2YgX19lc3JpLldlYlNjZW5lID0gbW9kdWxlc1swXVxuICAgIGNvbnN0IFBvcnRhbDogdHlwZW9mIF9fZXNyaS5Qb3J0YWwgPSBtb2R1bGVzWzFdXG4gICAgY29uc3QgUG9ydGFsSXRlbTogdHlwZW9mIF9fZXNyaS5Qb3J0YWxJdGVtID0gbW9kdWxlc1syXVxuICAgIGlmICh0aGlzLmdldERhdGFTb3VyY2VKc29uKCkucG9ydGFsVXJsKSB7XG4gICAgICBjb25zdCBwb3J0YWwgPSBuZXcgUG9ydGFsKHtcbiAgICAgICAgdXJsOiBwb3J0YWxVcmxVdGlscy5nZXRQbGF0Zm9ybVVybEJ5T3JnVXJsKHRoaXMuZ2V0RGF0YVNvdXJjZUpzb24oKS5wb3J0YWxVcmwpXG4gICAgICB9KVxuICAgICAgdGhpcy5tYXAgPSBuZXcgV2ViU2NlbmUoe1xuICAgICAgICBwb3J0YWxJdGVtOiBuZXcgUG9ydGFsSXRlbSh7XG4gICAgICAgICAgaWQ6IHRoaXMuZ2V0RGF0YVNvdXJjZUpzb24oKS5pdGVtSWQsXG4gICAgICAgICAgcG9ydGFsOiBwb3J0YWxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwID0gbmV3IFdlYlNjZW5lKHtcbiAgICAgICAgcG9ydGFsSXRlbTogbmV3IFBvcnRhbEl0ZW0oe1xuICAgICAgICAgIGlkOiB0aGlzLmdldERhdGFTb3VyY2VKc29uKCkuaXRlbUlkXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoIXRoaXMubWFwLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgIGF3YWl0IHRoaXMubWFwLmxvYWQoKS50aGVuKCgpID0+IHsgdGhpcy5pbml0SXRlbSgpIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdEl0ZW0oKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEl0ZW0gKCkge1xuICAgIGlmICghdGhpcy5tYXApIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnNldEl0ZW1EYXRhKCh0aGlzLm1hcCBhcyBhbnkpLnJlc291cmNlSW5mbylcbiAgICB0aGlzLnNldEl0ZW1JbmZvKHRoaXMubWFwLnBvcnRhbEl0ZW0/LnNvdXJjZUpTT04gYXMgSUl0ZW0pXG4gIH1cbn1cbiIsImltcG9ydCB7IHR5cGUgRGF0YVNvdXJjZSwgdHlwZSBEYXRhU291cmNlQ29uc3RydWN0b3JPcHRpb25zLCB0eXBlIERhdGFTb3VyY2VGYWN0b3J5IH0gZnJvbSAnamltdS1jb3JlJ1xuXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZXMgfSBmcm9tICcuL2FyY2dpcy1kYXRhLXNvdXJjZS1pbnRlcmZhY2UnXG5pbXBvcnQgeyBNYXBEYXRhU291cmNlSW1wbCB9IGZyb20gJy4vaW1wbGVtZW50YXRpb25zL21hcC1kYXRhLXNvdXJjZS1pbXBsJ1xuaW1wb3J0IHsgV2ViTWFwRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9ucy93ZWJtYXAtZGF0YS1zb3VyY2UtaW1wbCdcbmltcG9ydCB7IFdlYlNjZW5lRGF0YVNvdXJjZUltcGwgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9ucy93ZWJzY2VuZS1kYXRhLXNvdXJjZS1pbXBsJ1xuXG5leHBvcnQgY2xhc3MgQXJjR0lTRGF0YVNvdXJjZUZhY3RvcnkgaW1wbGVtZW50cyBEYXRhU291cmNlRmFjdG9yeSB7XG4gIGNyZWF0ZURhdGFTb3VyY2UgKG9wdGlvbnM6IERhdGFTb3VyY2VDb25zdHJ1Y3Rvck9wdGlvbnMpOiBEYXRhU291cmNlIHtcbiAgICBjb25zdCBkc0pzb24gPSBvcHRpb25zLmRhdGFTb3VyY2VKc29uID8/IG9wdGlvbnMuYmVsb25nVG9EYXRhU291cmNlLmdldE1haW5EYXRhU291cmNlKCkuZ2V0RGF0YVNvdXJjZUpzb24oKVxuICAgIGNvbnN0IGRzVHlwZSA9IG9wdGlvbnMuZGF0YVZpZXdJZCAmJiBkc0pzb24uZGF0YVZpZXdzICYmIGRzSnNvbi5kYXRhVmlld3Nbb3B0aW9ucy5kYXRhVmlld0lkXSA/IGRzSnNvbi5kYXRhVmlld3Nbb3B0aW9ucy5kYXRhVmlld0lkXS50eXBlIHx8IGRzSnNvbi50eXBlIDogZHNKc29uLnR5cGVcbiAgICBpZiAoZHNUeXBlID09PSBEYXRhU291cmNlVHlwZXMuTWFwKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcERhdGFTb3VyY2VJbXBsKG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChkc1R5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHtcbiAgICAgIHJldHVybiBuZXcgV2ViTWFwRGF0YVNvdXJjZUltcGwob3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKGRzVHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7XG4gICAgICByZXR1cm4gbmV3IFdlYlNjZW5lRGF0YVNvdXJjZUltcGwob3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVW5pbXBsZW1lbnRlZCBkYXRhIHNvdXJjZSB0eXBlLicsIGRzVHlwZSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgTWFwRGF0YVNvdXJjZUltcGwsIFdlYk1hcERhdGFTb3VyY2VJbXBsLCBXZWJTY2VuZURhdGFTb3VyY2VJbXBsIH1cbmV4cG9ydCAqIGZyb20gJy4vYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbiIsImltcG9ydCB7IHR5cGUgZXh0ZW5zaW9uU3BlYywgZ2V0QXBwU3RvcmUsIHR5cGUgUmVzb3VyY2UsIG1vZHVsZUxvYWRlciwgcG9ydGFsVXJsVXRpbHMsIFNlc3Npb25NYW5hZ2VyLCB1cmxVdGlscywgU2Vzc2lvbkNoYW5nZWRSZWFzb25UeXBlLCBTZXJ2aWNlTWFuYWdlciwgYXBwQ29uZmlnVXRpbHMsIEV4dGVybmFsUmVzb2x2YWJsZVByb21pc2UsIHJlcXVlc3RVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgU2lnbkluRXJyb3JDb2RlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZ2V0VGhlbWUsIHR5cGUgVGhlbWVNb2R1bGUsIFRoZW1lU3RvcmUgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2FyY2dpcy1kYXRhLXNvdXJjZS1pbnRlcmZhY2UnXG5pbXBvcnQgeyBNYXBWaWV3TWFuYWdlciB9IGZyb20gJy4uL21hcHZpZXctbWFuYWdlcidcblxuY29uc3QgeyBsb2FkTW9kdWxlcywgcmVzb2x2ZU1vZHVsZUZ1bGxQYXRoIH0gPSBtb2R1bGVMb2FkZXJcbmNvbnN0IHsgZ2V0UG9ydGFsUHJveHlVcmwsIGdldFN0YW5kYXJkUG9ydGFsVXJsLCBpc0FHT0xEb21haW4sIGlzU2FtZVBvcnRhbFVybCwgZ2V0UGxhdGZvcm1VcmxCeU9yZ1VybCB9ID0gcG9ydGFsVXJsVXRpbHNcbmNvbnN0IHsgbm9ybWFsaXplLCBnZXRGb2xkZXIsIGdldEZpeGVkUm9vdFBhdGggfSA9IHVybFV0aWxzXG5cbi8vIFRoZXNlIG1vZHVsZXMgYXJlIHJlcXVpcmVkIGZvciBpbml0XG5sZXQgT0F1dGhJbmZvOiB0eXBlb2YgX19lc3JpLk9BdXRoSW5mb1xubGV0IElkZW50aXR5TWFuYWdlcjogX19lc3JpLklkZW50aXR5TWFuYWdlclxubGV0IEVzcmlDb25maWc6IF9fZXNyaS5jb25maWdcbmxldCBFc3JpSW50bDogX19lc3JpLmludGxcbmxldCBFc3JpRXJyb3JcblxuZXhwb3J0IGNsYXNzIEFyY0dJU0RlcGVuZGVuY3lEZWZpbmVFeHRlbnNpb24gaW1wbGVtZW50cyBleHRlbnNpb25TcGVjLkRlcGVuZGVuY3lEZWZpbmVFeHRlbnNpb24ge1xuICBpZCA9ICdhcmNnaXMtZGVwZW5kZW5jeS1kZWZpbmUnXG5cbiAgdGhlbWVMb2FkT2JzZXJ2ZXJcblxuICBnZXREZXBlbmRlbmN5S2V5ICgpIHtcbiAgICByZXR1cm4gJ2ppbXUtYXJjZ2lzJ1xuICB9XG5cbiAgZ2V0UmVzb3VyY2VzICgpOiBSZXNvdXJjZVtdIHtcbiAgICBpZiAoIXRoaXMudGhlbWVMb2FkT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMudGhlbWVMb2FkT2JzZXJ2ZXIgPSBUaGVtZVN0b3JlLnN1YnNjcmliZSh0aGlzLm9uQ3VycmVudFRoZW1lTG9hZC5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGxldCBhcGlVcmwgPSB3aW5kb3cuamltdUNvbmZpZy5hcmNnaXNKc0FwaVVybFxuICAgIGlmIChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucXVlcnlPYmplY3QuYXBpdXJsKSB7XG4gICAgICBhcGlVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucXVlcnlPYmplY3QuYXBpdXJsXG4gICAgICBpZiAoIXRoaXMuY2hlY2tBcGlVcmwoYXBpVXJsKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQmFkIGFwaXVybC4nLCBhcGlVcmwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIS9cXC8kLy50ZXN0KGFwaVVybCkpIHtcbiAgICAgIGFwaVVybCA9IGFwaVVybCArICcvJ1xuICAgIH1cblxuICAgIHdpbmRvdy5qaW11Q29uZmlnLmFyY2dpc0pzQXBpVXJsID0gYXBpVXJsXG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSBbe1xuICAgICAgdXJsOiBgJHthcGlVcmx9aW5pdC5qc2BcbiAgICB9XVxuXG4gICAgaWYgKGdldFRoZW1lKCkpIHtcbiAgICAgIGlmIChnZXRUaGVtZSgpLmRhcmtUaGVtZSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NhbGNpdGUtbW9kZS1kYXJrJylcbiAgICAgICAgZGVwZW5kZW5jaWVzLnB1c2goeyB1cmw6IHRoaXMuZ2V0QVBJVGhlbWVVcmwoYXBpVXJsLCB0cnVlKSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVwZW5kZW5jaWVzLnB1c2goeyB1cmw6IHRoaXMuZ2V0QVBJVGhlbWVVcmwoYXBpVXJsLCBmYWxzZSkgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkb2pvTW9kdWxlcyA9IGAke2dldEZpeGVkUm9vdFBhdGgoKX1hcmNnaXMtYW1kLXBhY2thZ2VzL2BcbiAgICB3aW5kb3cuZG9qb0NvbmZpZyA9IHtcbiAgICAgIHBhY2thZ2VzOiBbXG4gICAgICAgIC8vIGFyY2dpcy1jaGFydHNcbiAgICAgICAgeyBuYW1lOiAnYXJjZ2lzLWNoYXJ0cy1qcycsIGxvY2F0aW9uOiBkb2pvTW9kdWxlcyArICdhcmNnaXMtY2hhcnRzLWpzJywgbWFpbjogJ2luZGV4JyB9LFxuICAgICAgICB7IG5hbWU6ICdhcmNnaXMtY2hhcnRzLXNoYXJlZC11dGlscycsIGxvY2F0aW9uOiBkb2pvTW9kdWxlcyArICdhcmNnaXMtY2hhcnRzLXNoYXJlZC11dGlscycsIG1haW46ICdpbmRleCcgfSxcbiAgICAgICAgeyBuYW1lOiAnYXJjZ2lzLWNoYXJ0cy1jb21wb25lbnRzJywgbG9jYXRpb246IGRvam9Nb2R1bGVzICsgJ2FyY2dpcy1jaGFydHMtY29tcG9uZW50cycsIG1haW46ICdpbmRleCcgfSxcblxuICAgICAgICAvLyBhcmNnaXMtYW5hbHlzaXNcbiAgICAgICAgeyBuYW1lOiAnYW5hbHlzaXMtY29tcG9uZW50cycsIGxvY2F0aW9uOiBkb2pvTW9kdWxlcyArICdhbmFseXNpcy1jb21wb25lbnRzJywgbWFpbjogJ2luZGV4JyB9LFxuICAgICAgICB7IG5hbWU6ICdhbmFseXNpcy1jb3JlJywgbG9jYXRpb246IGRvam9Nb2R1bGVzICsgJ2FuYWx5c2lzLWNvcmUnLCBtYWluOiAnaW5kZXgnIH0sXG4gICAgICAgIHsgbmFtZTogJ2FuYWx5c2lzLXNoYXJlZC11dGlscycsIGxvY2F0aW9uOiBkb2pvTW9kdWxlcyArICdhbmFseXNpcy1zaGFyZWQtdXRpbHMnLCBtYWluOiAnaW5kZXgnIH0sXG4gICAgICAgIHsgbmFtZTogJ2FuYWx5c2lzLXJhc3Rlci1mdW5jdGlvbi11dGlscycsIGxvY2F0aW9uOiBkb2pvTW9kdWxlcyArICdhbmFseXNpcy1yYXN0ZXItZnVuY3Rpb24tdXRpbHMnLCBtYWluOiAnaW5kZXgnIH0sXG4gICAgICAgIHsgbmFtZTogJ2FuYWx5c2lzLXRvb2wtYXBwJywgbG9jYXRpb246IGRvam9Nb2R1bGVzICsgJ2FuYWx5c2lzLXRvb2wtYXBwJywgbWFpbjogJ2luZGV4JyB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIFt7XG4gICAgICB1cmw6ICdqaW11LWFyY2dpcycsXG4gICAgICBkZXBlbmRlbmNpZXM6IGRlcGVuZGVuY2llc1xuICAgIH1dXG4gIH1cblxuICBhc3luYyBwb3N0SW5pdCAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5pbml0TW9kdWxlcygpXG4gICAgdGhpcy5pbml0VG9SZWdpc3RPQXV0aEZvck1haW5Qb3J0YWxBbmRBR09MKClcblxuICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgICBFc3JpSW50bC5zZXRMb2NhbGUoZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbnRleHQubG9jYWxlKVxuICAgIEVzcmlDb25maWcucmVxdWVzdC5wcm94eVVybCA9IGdldFBvcnRhbFByb3h5VXJsKHBvcnRhbFVybClcblxuICAgIHRoaXMuaW5pdEludGVyY2VwdG9yKClcblxuICAgIEVzcmlDb25maWcucG9ydGFsVXJsID0gcG9ydGFsVXJsXG4gICAgY29uc3QgZ2VvbWV0cnlTZXJ2aWNlVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFNlbGY/LmhlbHBlclNlcnZpY2VzPy5nZW9tZXRyeT8udXJsXG4gICAgaWYgKGdlb21ldHJ5U2VydmljZVVybCkge1xuICAgICAgRXNyaUNvbmZpZy5nZW9tZXRyeVNlcnZpY2VVcmwgPSBnZW9tZXRyeVNlcnZpY2VVcmxcbiAgICB9XG4gICAgLy8gc2V0IHRvIHRoZSB0cnVzdGVkU2VydmVycywgbXVzdCBiZSBjYWxsZWQgYmVmb3JlIGFsbCBwb3J0YWwgcmVxdWVzdHMgYnkganMtYXBpLlxuICAgIHRoaXMuYWRkVG9UcnVzdGVkU2VydmVycygpXG5cbiAgICAvLyByZXBsYWNlICdnZXQgY3JlZGVudGlhbCcgbWV0aG9kIGZvciB0d28gcHVycG9zZXM6XG4gICAgLy8gMSwgaW4gb3JkZXIgdG8gcHJvbXB0IGRpYWxvZyB0byBzZXQgY2xpZW50SWQsIG9ubHkgdGFrZSBlZmZlY3Qgb24gYnVpbGRlciBlbnYuXG4gICAgLy8gICAgb25saW5lIGVkaXRpb24gZG9lc24ndCBuZWVkIHRvIGRvIHRoaXMuXG4gICAgLy8gMiwgY2hlY2sgY3JlZGVudGFsIGZvciBiYW5uZXIgbGlzdFxuICAgIGlmICgod2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyIHx8IHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSAmJlxuICAgICAgICAod2luZG93LmppbXVDb25maWcuaXNEZXZFZGl0aW9uIHx8IHdpbmRvdy5qaW11Q29uZmlnLmlzSW5Qb3J0YWwpKSB7XG4gICAgICB0aGlzLnJlcGxhY2VHZXRDcmVkZW50aWFsKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXBsYWNlR2V0Q3JlZGVudGlhbChmYWxzZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRNb2R1bGVzICgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBbSWRlbnRpdHlNYW5hZ2VyLCBPQXV0aEluZm8sIEVzcmlDb25maWcsIEVzcmlJbnRsLCBFc3JpRXJyb3JdID0gYXdhaXQgbG9hZE1vZHVsZXMoWydlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcicsICdlc3JpL2lkZW50aXR5L09BdXRoSW5mbycsICdlc3JpL2NvbmZpZycsICdlc3JpL2ludGwnLCAnZXNyaS9jb3JlL0Vycm9yJ10pXG4gIH1cblxuICBwcml2YXRlIGluaXRJbnRlcmNlcHRvciAoKSB7XG4gICAgLy8gUmVnaXN0ZXIgZGVmYXVsdCBjYWNoZWFibGUgdXJsLlxuICAgIHJlcXVlc3RVdGlscy5yZWdpc3RlckNhY2hlYWJsZVVybChzZXJ2aWNlSW5mb0NhY2hlYWJsZVVybClcbiAgICByZXF1ZXN0VXRpbHMucmVnaXN0ZXJDYWNoZWFibGVVcmwoY29tbXVuaXR5U2VsZkNhY2hlYWJsZVVybClcbiAgICByZXF1ZXN0VXRpbHMucmVnaXN0ZXJDYWNoZWFibGVVcmwoaXRlbUluZm9BbmREYXRhQ2FjaGVhYmxlVXJsKVxuXG4gICAgRXNyaUNvbmZpZy5yZXF1ZXN0LmludGVyY2VwdG9ycz8ucHVzaCh7XG4gICAgICBiZWZvcmU6IChwYXJhbXMpID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0VXRpbHMuaXNVUkxDYWNoZWFibGUocGFyYW1zLnVybCwgcGFyYW1zLnJlcXVlc3RPcHRpb25zPy5xdWVyeSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RDYWNoZSA9IHJlcXVlc3RVdGlscy5nZXRSZXF1ZXN0Q2FjaGUocGFyYW1zLnVybCwgcGFyYW1zLnJlcXVlc3RPcHRpb25zPy5xdWVyeSlcbiAgICAgICAgaWYgKHJlcXVlc3RDYWNoZSkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0Q2FjaGUucHJvbWlzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3RDYWNoZTogRXh0ZXJuYWxSZXNvbHZhYmxlUHJvbWlzZSA9IG5ldyBFeHRlcm5hbFJlc29sdmFibGVQcm9taXNlKClcbiAgICAgICAgICByZXF1ZXN0VXRpbHMuc2V0UmVxdWVzdENhY2hlKHBhcmFtcy51cmwsIHBhcmFtcy5yZXF1ZXN0T3B0aW9ucz8ucXVlcnksIHJlcXVlc3RDYWNoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFmdGVyOiAocmVzKSA9PiB7XG4gICAgICAgIGlmICghcmVzIHx8ICFyZXMudXJsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcy51cmwuaW5kZXhPZignL3Jlc3QvaW5mbycpICYmIHJlcy5kYXRhPy5vd25pbmdTeXN0ZW1VcmwpIHtcbiAgICAgICAgICAvLyB0aGUgdXJsIGlzIGEgaG9zdGVkIHNlcnZpY2UgdXJsLCByZWdpc3RzIE9BdXRoIGluZm8uXG4gICAgICAgICAgdGhpcy5yZWdpc3RPQXV0aEluZm8ocmVzLmRhdGEub3duaW5nU3lzdGVtVXJsKVxuICAgICAgICB9XG4gICAgICAgIGlmICghcmVxdWVzdFV0aWxzLmlzVVJMQ2FjaGVhYmxlKHJlcy51cmwsIHJlcy5yZXF1ZXN0T3B0aW9ucz8ucXVlcnkpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXF1ZXN0Q2FjaGUgPSByZXF1ZXN0VXRpbHMuZ2V0UmVxdWVzdENhY2hlKHJlcy51cmwsIHJlcy5yZXF1ZXN0T3B0aW9ucz8ucXVlcnkpXG4gICAgICAgIGlmIChyZXF1ZXN0Q2FjaGUpIHtcbiAgICAgICAgICByZXF1ZXN0Q2FjaGUucmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIGNhY2hlIHdoZW4gaXQgaGFzIHJlcy5kYXRhLmVkaXRpbmdJbmZvLlxuICAgICAgICAgIGlmIChyZXMuZGF0YT8uZWRpdGluZ0luZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbERzcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZXMoKVxuICAgICAgICAgICAgY29uc3QgZm91bmREc3MgPSBPYmplY3Qua2V5cyhhbGxEc3MpXG4gICAgICAgICAgICAgIC5maWx0ZXIoZHNJZCA9PiAoYWxsRHNzW2RzSWRdIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpLnVybCA9PT0gcmVzLnVybClcbiAgICAgICAgICAgICAgLm1hcChkc0lkID0+IGFsbERzc1tkc0lkXSBhcyBRdWVyaWFibGVEYXRhU291cmNlKVxuICAgICAgICAgICAgaWYgKGZvdW5kRHNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gbWF5IGZpbmQgZHMgdGhhdCBpcyBub3QgZmVhdHVyZSBsYXllclxuICAgICAgICAgICAgICBpZiAoZm91bmREc3MuZmluZChkcyA9PiBkcy5nZXRBdXRvUmVmcmVzaEludGVydmFsICYmIGRzLmdldEF1dG9SZWZyZXNoSW50ZXJ2YWwoKSA+IDApKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSByZW1vdmUgd2hlbiB0aGUgYXV0byByZWZyZXNoIGlzIGVuYWJsZWQgb24gYW55IERTXG4gICAgICAgICAgICAgICAgcmVxdWVzdFV0aWxzLmRlbGV0ZVJlcXVlc3RDYWNoZShyZXMudXJsLCByZXMucmVxdWVzdE9wdGlvbnM/LnF1ZXJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBpZiB3ZSBkb24ndCBmaW5kIERTIGJ5IHVybCwgd2Ugc3RpbGwgcmVtb3ZlIHRoZSBjYWNoZSwganVzdCBpbiBjYXNlIHRoZSBEUyBtYXkgbm90IGhhdmUgdXJsIG9yIHRoZSBsYXllciBpcyBub3Qgc3VwcG9ydGVkIGJ5IERTLlxuICAgICAgICAgICAgICByZXF1ZXN0VXRpbHMuZGVsZXRlUmVxdWVzdENhY2hlKHJlcy51cmwsIHJlcy5yZXF1ZXN0T3B0aW9ucz8ucXVlcnkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdENhY2hlID0gcmVxdWVzdFV0aWxzLmdldFJlcXVlc3RDYWNoZShlcnI/LmRldGFpbHM/LnVybCwgZXJyPy5kZXRhaWxzPy5yZXF1ZXN0T3B0aW9ucz8ucXVlcnkpXG4gICAgICAgIGlmIChyZXF1ZXN0Q2FjaGUpIHtcbiAgICAgICAgICByZXF1ZXN0Q2FjaGUucmVqZWN0KGVycilcbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGVycm9yIHJlcXVlc3Qgc28gaXQgaGFzIGEgY2hhbmNlIHRvIHJldHJ5LlxuICAgICAgICAgIHJlcXVlc3RVdGlscy5kZWxldGVSZXF1ZXN0Q2FjaGUoZXJyPy5kZXRhaWxzPy51cmwsIGVycj8uZGV0YWlscz8ucmVxdWVzdE9wdGlvbnM/LnF1ZXJ5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVwbGFjZUdldENyZWRlbnRpYWwgKG5lZWRUb1VzZURpYWxvZ1RvU2V0Q2xpZW50SWQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3Qgc2Vzc2lvbk1hbmFnZXIgPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgY29uc3Qgb3JpZ2luYWxHZXRDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmdldENyZWRlbnRpYWxcbiAgICBsZXQgZ2V0Q3JlZGVudGlhbFByb21pc2VcbiAgICBJZGVudGl0eU1hbmFnZXIuZ2V0Q3JlZGVudGlhbCA9ICh1cmwsIG9wdGlvbnM/KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpc1NlcnZpY2VVcmwgPSAhIXNlc3Npb25NYW5hZ2VyLmdldFNlcnZlcktleUZyb21VcmwodXJsKVxuICAgICAgICBjb25zdCBjbGllbnRJZCA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q2xpZW50SWRCeVVybCh1cmwpXG4gICAgICAgIGNvbnN0IGlzUG9ydGFsU2VsZlVybCA9IHVybD8uaW5kZXhPZignL3NoYXJpbmcvcmVzdC9wb3J0YWxzL3NlbGYnKSA+IDBcblxuICAgICAgICBjb25zdCBub1Blcm1pc3Npb25SZXNvdXJjZUluZm8gPSBzZXNzaW9uTWFuYWdlci5nZXROb1Blcm1pc3Npb25SZXNvdXJjZUluZm9CeVVybCh1cmwpXG4gICAgICAgIGlmIChub1Blcm1pc3Npb25SZXNvdXJjZUluZm8pIHtcbiAgICAgICAgICAvLyBpZiB0aGUgdXNlciBoYXMgc2lnbmVkIGluIHdpdGhvdXQgcGVybWlzc2lvbiwgb3IgaXMgYWN0aXZlbHkgY2FuY2VsZWQgYnkgdXNlciwgbm8gbG9uZ2VyIHBvcCBzaWduLWluIGRpYWxvZy5cbiAgICAgICAgICBjb25zdCBub1Blcm1pc3Npb25DcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHVybClcbiAgICAgICAgICBpZiAobm9QZXJtaXNzaW9uQ3JlZGVudGlhbCkge1xuICAgICAgICAgICAgLy9jYW5ub3QgcmV0dXJuIGNyZWRlbnRpYWwgZnJvbSBJTS5maW5kQ3JlZGVudGlhbCgpIGRpcmVjdGx5LFxuICAgICAgICAgICAgLy9vdGhlcndpc2UgaXQgd2lsbCBjYXVzZSBlc3JpIHJlcXVlc3QgdG8gcmVwZWF0ZWQgbG9naW4gdmVyaWZpY2F0aW9uIGlmIGN1cnJlbnQgY3JlZGVudGlhbCBubyBwZXJtaXNzaW9uIGZvciB0aGlzIHJlc291cmNlLlxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsR2V0Q3JlZGVudGlhbC5jYWxsKElkZW50aXR5TWFuYWdlciwgdXJsLCBvcHRpb25zKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVzcmlFcnJvcignaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWQnLCAnQUJPUlRFRCcpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZGlhbG9nUGFkZGluZ0RlZmZlcmVkID0gbnVsbFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGlmIChvcHRpb25zPy5wcm9tcHQgJiYgIUlkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh1cmwpICYmICFzZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uQnlVcmwodXJsKSkge1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIGNyZWRlbnRpYWwgZG9lc24ndCBoYXZlIHJlc291cmNlIGluZm8gaWYgaXQncyBzbnljZWQgZnJvbSBzZXNzaW9uIG1hbmFnZXIsIHNvIElNLmZpbmRDcmVkZW50aWFsKCkgY2Fubm90IHJlY29yZ25pemUgdGhlIHVybCBiZWZvcmUgSU0uZ2V0Q3JlZGVudGlhbCgpXG4gICAgICAgICAgLy8gc28gbmVlZCB0byBjaGVjayB3aGV0aGVyIHRoZSBzZXNzaW9uIGFscmVhZHkgZXhpc3RlZCBpbiB0aGUgc2Vzc2lvbiBtYW5hZ2VyLlxuICAgICAgICAgIGRpYWxvZ1BhZGRpbmdEZWZmZXJlZCA9IHNlc3Npb25NYW5hZ2VyLnRyeVRvUGVuZGluZ1NpZ25JbkRpYWxvZyh1cmwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpYWxvZ1BhZGRpbmdEZWZmZXJlZCkge1xuICAgICAgICAgIC8vIHNpZ24taW4gZGlhbG9nIGZvciBjdXJyZW50IHNlcnZpY2UgaXMgb3BlbmluZywgcGVuZGluZyBzaWduLWluXG4gICAgICAgICAgZ2V0Q3JlZGVudGlhbFByb21pc2UgPSBkaWFsb2dQYWRkaW5nRGVmZmVyZWQucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIGNhbm5vdCByZXR1cm4gY3JlZGVudGlhbCBmcm9tIElNLmZpbmRDcmVkZW50aWFsKCkgZGlyZWN0bHksIG90aGVyd2lzZSBpdCB3aWxsIGNhdXNlIGVzcmkgcmVxdWVzdCB0byByZXBlYXRlZCBsb2dpbiB2ZXJpZmljYXRpb25cbiAgICAgICAgICAgIC8vIElNLmdldENyZWRlbnRpYWwoKSB3aWxsIHJlZ2lzdGVyIHRoZSB1cmwgdG8gY3JlZGVudGlhbC5yZXNvdXJjZXMsIHRoZW4gSU0uZmluZENyZWRlbnRpYWwoKSBjYW4gcmVjb3Jnbml6ZSB0aGlzIGNyZWRlbnRpYWwuXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxHZXRDcmVkZW50aWFsLmNhbGwoSWRlbnRpdHlNYW5hZ2VyLCB1cmwsIG9wdGlvbnMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChpc1NlcnZpY2VVcmwgfHxcbiAgICAgICAgICAgIGNsaWVudElkIHx8XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAhb3B0aW9ucz8ucHJvbXB0IHx8XG4gICAgICAgICAgICBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodXJsKSB8fFxuICAgICAgICAgICAgSWRlbnRpdHlNYW5hZ2VyLmZpbmRPQXV0aEluZm8odXJsKSB8fFxuICAgICAgICAgICAgIW5lZWRUb1VzZURpYWxvZ1RvU2V0Q2xpZW50SWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gaWYgaXQncyBhIHNlcnZlaWNlIHVybDpcbiAgICAgICAgICAvLyAgdW5mZWRlcmF0ZWQgc2VydmljZTogdXNlIG9yaWdpbmFsIG1ldGhvZCBkaXJlY3RseS5cbiAgICAgICAgICAvLyAgZmVkZXJhdGVkIHNlcnZlaWNlOiB1ZXMgb3JpZ2luYWwgbWV0aG9kIGhlcmUsXG4gICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgYmVjYXVzZSBpdCdzIG93bmluZyBzeXN0ZW0gcG9ydGFsIHVybCB3aWxsIGZpbmFsbHkgYmUgY2FsbGVkIGJ5IOKAmGdldCBjcmVkZW50aWFsJyxcbiAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICBzbyB3ZSBqdXN0IG5lZWQgdG8gdXNlIHJlcGxhY2VkIG1ldGhvZCB0byBoYW5kbGUgaXQncyBvd25pbmcgc3lzdGVtIHBvcnRhbCB1cmwuXG4gICAgICAgICAgZ2V0Q3JlZGVudGlhbFByb21pc2UgPSBvcmlnaW5hbEdldENyZWRlbnRpYWwuY2FsbChJZGVudGl0eU1hbmFnZXIsIHVybCwgb3B0aW9ucylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwb3J0YWxVcmwgPSBnZXRTdGFuZGFyZFBvcnRhbFVybCh1cmwpXG4gICAgICAgICAgZ2V0Q3JlZGVudGlhbFByb21pc2UgPSBzZXNzaW9uTWFuYWdlci51c2VEaWFsb2dUb1NldENsaWVudElkVG9Db25uZWN0aW9zT2ZBcHBDb25maWdBbmRTaWduSW4ocG9ydGFsVXJsKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHJlZ2lzdGVyIG9hdXRoIGluZm9cbiAgICAgICAgICAgIHRoaXMucmVnaXN0T0F1dGhJbmZvKHBvcnRhbFVybClcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEdldENyZWRlbnRpYWwuY2FsbChJZGVudGl0eU1hbmFnZXIsIHVybCwgb3B0aW9ucylcbiAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxHZXRDcmVkZW50aWFsLmNhbGwoSWRlbnRpdHlNYW5hZ2VyLCB1cmwsIG9wdGlvbnMpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Q3JlZGVudGlhbFByb21pc2UudGhlbigoY3JlZGVudGlhbCkgPT4ge1xuICAgICAgICAgIGlmICghaXNQb3J0YWxTZWxmVXJsKSB7XG4gICAgICAgICAgICAvLyBiZWNhdXNlIGpzLWFwaSB0cnkgYWNjZXNzaW5nICdwb3J0YWxzIHNlbGYnIHdpdGggdG9rZW4sIHNvIGRvbid0IG5lZWQgdG8gY2hlY2sgcGVybWlzc2lvbiBmb3IgcmVxdWVzdCAncG9ydGxzIHNlbGYnXG4gICAgICAgICAgICAvLyBhZGQgdG8gYmFubmVyIGxpc3QuXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbk1hbmFnZXIuZ2V0U2VydmVyS2V5RnJvbVVybCh1cmwpKSB7XG4gICAgICAgICAgICAgIFNlcnZpY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZmV0Y2hBcmNHSVNTZXJ2ZXJJbmZvKHVybCkudGhlbihzZXJ2ZXJJbmZvID0+IHsgc2Vzc2lvbk1hbmFnZXIuY2hlY2tTZXNzaW9uUGVybWlzc2lvbkZvclVybCh1cmwsIGNyZWRlbnRpYWwudG9rZW4sIGNyZWRlbnRpYWwudXNlcklkLCBzZXJ2ZXJJbmZvPy5vd25pbmdTeXN0ZW1VcmwpIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXNzaW9uTWFuYWdlci5jaGVja1Nlc3Npb25QZXJtaXNzaW9uRm9yVXJsKHVybCwgY3JlZGVudGlhbC50b2tlbiwgY3JlZGVudGlhbC51c2VySWQsICcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlZGVudGlhbFxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgLy8gcmVsZWFzZSBwZW5kaW5nIHNpZ24taW4gZGlhbG9nIHdpdGggZXJyb3JcbiAgICAgICAgICBzZXNzaW9uTWFuYWdlci5yZWxlYXNlUGVuZGluZ1NpZ25Jbih1cmwsIGVycm9yKVxuICAgICAgICAgIC8vIGhhbmRsZSBzaWduLWluIGRpYWxvZyBhYm9yZCBzaXR1YXRpb25cbiAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ2lkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkJykge1xuICAgICAgICAgICAgLy8gc2lnbi1pbiBmb3IgYWNjZXNzaW5nIHVybCBoYXMgYmVlbiBjYW5jZWxlZFxuICAgICAgICAgICAgaWYgKHNlc3Npb25NYW5hZ2VyLmdldFNlcnZlcktleUZyb21VcmwodXJsKSkge1xuICAgICAgICAgICAgICBTZXJ2aWNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmZldGNoQXJjR0lTU2VydmVySW5mbyh1cmwpLnRoZW4oc2VydmVySW5mbyA9PiB7IHNlc3Npb25NYW5hZ2VyLmFkZFRvTm9QZXJtaXNzaW9uUmVzb3VyY2VJbmZvTGlzdCh1cmwsICcnLCBTaWduSW5FcnJvckNvZGUuU2lnbkluQ2FuY2VsZWQsIGZhbHNlLCBzZXJ2ZXJJbmZvPy5vd25pbmdTeXN0ZW1VcmwpIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXNzaW9uTWFuYWdlci5hZGRUb05vUGVybWlzc2lvblJlc291cmNlSW5mb0xpc3QodXJsLCAnJywgU2lnbkluRXJyb3JDb2RlLlNpZ25JbkNhbmNlbGVkLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09ICdpZGVudGl0eS1tYW5hZ2VyOm5vdC1hdXRoZW50aWNhdGVkJykge1xuICAgICAgICAgICAgLy8gdXNlICdub3QgYXV0aGVudGljYXRlZCcgZXJyb3IgdG8gaGFuZGxlIDQ5OCBlcnJvciBmcm9tIGpzLWFwaVxuICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gZXJyb3IgcGFnZSBpZiBlbmNvdW50ZXJzIDQ5OCBlcnJvciBvbiBtYWluIHBvcnRhbFxuICAgICAgICAgICAgc2Vzc2lvbk1hbmFnZXIuaGFuZGxlSW52YWxpZFRva2VuKHVybClcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc2hvdWxkIHJlamVjdCBlcnJvciB0byBqcy1hcGlcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ3JlcGxhY2VkIFwiZ2V0Q3JlZGVudGlhbFwiIG1ldGhvZCBlcnJvcicsIGVycm9yKVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxHZXRDcmVkZW50aWFsLmNhbGwoSWRlbnRpdHlNYW5hZ2VyLCB1cmwsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0VG9SZWdpc3RPQXV0aEZvck1haW5Qb3J0YWxBbmRBR09MICgpIHtcbiAgICBjb25zdCBzZXNzaW9uTWFuYWdlciA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBjb25zdCB7IHBvcnRhbFVybCwgaXNXZWJUaWVyIH0gPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKClcbiAgICBpZiAoIWlzV2ViVGllcikge1xuICAgICAgaWYgKGlzQUdPTERvbWFpbihwb3J0YWxVcmwpKSB7XG4gICAgICAgIC8vIHVzZSBwbGF0Zm9ybSB1cmwgdG8gcmVnaXN0ZXIgT0F1dGggaW5mbyBpbiBvcmRlciB0byBzdXBwb3J0IHN3aXRjaCB1c2VyIGJldHdlZW4gZGlmZmVyZW50IG9yZy5cbiAgICAgICAgdGhpcy5yZWdpc3RPQXV0aEluZm8oZ2V0UGxhdGZvcm1VcmxCeU9yZ1VybChwb3J0YWxVcmwpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWdpc3RPQXV0aEluZm8ocG9ydGFsVXJsKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3Igb25saW5lIGVkaXRpb24sIHdpbGwgcmVnaXN0ZXIgd2l0aCBkZWZhdWx0IGNsaWVudCBpZCAnRXhwZXJpZW5jZUJ1aWxkZXInXG4gICAgLy8gZm9yIHBvcnRhbCBvciBkZXYgZWRpdGlvbiwgd2lsbCBub3QgcmVnaXN0ZXIgb2F1dGggaW5mbyBpZiB0aGUgY2xpZW50IGlkIGRvZXMgbm90IHNldCB0byBjb25uZWN0aW9ucyBvZiBhcHAgY29uZmlnLlxuICAgIHRoaXMucmVnaXN0T0F1dGhJbmZvKCdodHRwczovL2RldmV4dC5hcmNnaXMuY29tJylcbiAgICB0aGlzLnJlZ2lzdE9BdXRoSW5mbygnaHR0cHM6Ly9xYWV4dC5hcmNnaXMuY29tJylcbiAgICB0aGlzLnJlZ2lzdE9BdXRoSW5mbygnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbScpXG4gICAgLy8gdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0IHRpbWUgdGhlIElkZW50aXR5TWFuYWdlciBoYXMgYmVlbiBsb2FkZWQgaW4gdGhlIGFwcFxuICAgIC8vIHN5bmNocm9uaXplIHNlc3Npb24gYmV0d2VlbiBhcmNnaXMtcmVzdC1qcyBhbmQgSlNBUElcbiAgICB0aGlzLnN5bmNUb0FyY2dpc0pTQVBJKHNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25zKCkpXG4gICAgc2Vzc2lvbk1hbmFnZXIuYWRkU2Vzc2lvbkNoYW5nZUxpc3RlbmVyKHRoaXMub25TZXNzaW9uQ2hhbmdlZENhbGxiYWNrLmJpbmQodGhpcykpXG4gICAgdGhpcy5saXN0ZW5pbmdKc0FwaVNpZ25JbigpXG4gIH1cblxuICAvKipcbiAgICogdXNlIGFmdGVyIGluaXRNb2R1bGVzIGZvciBsb2FkaW5nIE9BdXRoSW5mby9TZXJ2ZXJJbmZvL0lkZW50aXR5TWFuYWdlclxuICAgKi9cbiAgcHJpdmF0ZSByZWdpc3RPQXV0aEluZm8gKHBvcnRhbFVybDogc3RyaW5nLCBjbGllbnRJZD86IHN0cmluZykge1xuICAgIGxldCBvQXV0aEluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZE9BdXRoSW5mbyhwb3J0YWxVcmwpXG4gICAgY2xpZW50SWQgPSBjbGllbnRJZCB8fCBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENsaWVudElkQnlVcmwocG9ydGFsVXJsKVxuICAgIGlmICghb0F1dGhJbmZvICYmIGNsaWVudElkKSB7XG4gICAgICBjb25zdCBvYXV0aFJldHVyblVybCA9IG5vcm1hbGl6ZShgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7Z2V0Rm9sZGVyKHJlc29sdmVNb2R1bGVGdWxsUGF0aCgnamltdS1hcmNnaXMnKSl9L29hdXRoLWNhbGxiYWNrLmh0bWxgKVxuICAgICAgLy8gbGV0IG9hdXRoUmV0dXJuVXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9qaW11LWFyY2dpcy9vYXV0aC1jYWxsYmFjay5odG1sJztcbiAgICAgIC8vIE9BdXRoIHdpbGwgbG9zZSAncGVyc2lzdCcgcXVlcnkgcGFyYW1ldGVyIGlmIHNldCBleHBpcmF0aW9uIHRvIHR3byB3ZWVrcyBleGVjdGx5LlxuICAgICAgb0F1dGhJbmZvID0gbmV3IE9BdXRoSW5mbyh7XG4gICAgICAgIGFwcElkOiBjbGllbnRJZCxcbiAgICAgICAgZXhwaXJhdGlvbjogMTQgKiAyNCAqIDYwIC0gMSxcbiAgICAgICAgcG9ydGFsVXJsOiBwb3J0YWxVcmwsXG4gICAgICAgIGF1dGhOYW1lc3BhY2U6ICcvJyxcbiAgICAgICAgcG9wdXA6IHRydWUsXG4gICAgICAgIGZsb3dUeXBlOiAnYXV0bycsXG4gICAgICAgIHBvcHVwQ2FsbGJhY2tVcmw6IG9hdXRoUmV0dXJuVXJsXG4gICAgICB9KVxuICAgICAgSWRlbnRpdHlNYW5hZ2VyLnJlZ2lzdGVyT0F1dGhJbmZvcyhbb0F1dGhJbmZvXSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGZsb3cgdHlwZSBmb3IgcmVnaXN0ZXJpbmcgT0F1dGggaW5mby5cbiAgICogIHJldHVybiAnYXV0aG9yaXphdGlvbi1jb2RlJyBpZiBhY2Nlc3NpbmcgQUdPTCBvciBBcmNHSVMgRW50ZXJwcmlzZSB2ZXJzaW9uIDEwLjkgb3IgaGlnaGVyO1xuICAgKiAgcmV0dXJuICdpbXBsaWNpdCcgaWYgYWNjZXNzaW5nIEFyY0dJUyBFbnRlcnByaXNlIHZlcnNpb24gcHJpb3IgdG8gMTAuOS5cbiAgICovXG4gIHByaXZhdGUgZ2V0Rmxvd1R5cGVGb3JSZWdpc3RlcmluZ09BdXRoSW5mbyAocG9ydGFsVXJsOiBzdHJpbmcpOiAnYXV0bycgfCAnYXV0aG9yaXphdGlvbi1jb2RlJyB8ICdpbXBsaWNpdCcge1xuICAgIGxldCBwb3J0YWxWZXJzaW9uXG4gICAgaWYgKGlzQUdPTERvbWFpbihwb3J0YWxVcmwpKSB7XG4gICAgICAvLyBBR09MXG4gICAgICByZXR1cm4gJ2F1dGhvcml6YXRpb24tY29kZSdcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVBvcnRhbFVybChwb3J0YWxVcmwsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmwpKSB7XG4gICAgICAvLyBtYWluIHBvcnRhbFxuICAgICAgcG9ydGFsVmVyc2lvbiA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxTZWxmPy5jdXJyZW50VmVyc2lvblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwb3J0YWxDb25uZWN0aW9uSW5mbyA9IGFwcENvbmZpZ1V0aWxzLmdldENvbm5lY3Rpb25JbmZvRnJvbUFwcENvbmZpZyhwb3J0YWxVcmwpXG4gICAgICBwb3J0YWxWZXJzaW9uID0gcG9ydGFsQ29ubmVjdGlvbkluZm8/LnBvcnRhbFZlcnNpb25cbiAgICB9XG5cbiAgICBpZiAocG9ydGFsVmVyc2lvbiAmJiBOdW1iZXIocG9ydGFsVmVyc2lvbikgPj0gOC40KSB7XG4gICAgICByZXR1cm4gJ2F1dGhvcml6YXRpb24tY29kZSdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdhdXRvJ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBpZiB0aGUgdXJsIGlzIHBvcnRhbCB1cmwsIHJlbW92ZSB0aGUgcG9ydGFsIGNyZWRlbnRpYWwgYW5kIGFsbCBzZXJ2ZXIgY3JlZGVudGlhbHMgYmVsb25naW5nIHRvIHRoZSBzYW1lIHBvcnRhbFxuICAgKiBpZiB0aGUgdXJsIGlzIHNlcnZpY2UgdXJsLCByZW1vdmUgaXQncyBvd25pbmcgc3lzdGVtIHBvcnRhbCBjcmVkZW50aWFsIGFuZCBhbGwgc2VydmVyIGNyZWRlbnRpYWxzIGJlbG9uZ2luZyB0byB0aGUgc2FtZSBvd25pbmcgc3lzdGVtIHVybFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZVBvcnRhbEFuZEl0c1NlcnZlckNyZWRlbnRpYWxzICh1cmwsIHVzZXJJZCwgb3duaW5nU3lzdGVtVXJsKSB7XG4gICAgY29uc3QgY3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh1cmwsIHVzZXJJZClcbiAgICBjb25zdCByZW1vdmVkQ3JlZGVudGlhbHMgPSBbXVxuICAgIGxldCBzZXJ2ZXJcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBpZiAoY3JlZGVudGlhbD8uc2NvcGUgPT09ICdwb3J0YWwnKSB7XG4gICAgICAvLyB3aWxsIHJlbW92ZSBhbGwgc2VydmVyIGNyZWRlbnRpYWxzIG9mIGN1cnJlbnQgcG9ydGFsXG4gICAgICBzZXJ2ZXIgPSBjcmVkZW50aWFsLnNlcnZlclxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3aWxsIHJlbW92ZSBhbGwgc2VydmVyIGNyZWRlbnRpYWxzIGJlbG9uZ2luZyB0byB0aGUgc2FtZSBvd25pbmcgc3lzdGVtIHVybFxuICAgICAgc2VydmVyID0gb3duaW5nU3lzdGVtVXJsXG4gICAgfVxuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIElkZW50aXR5TWFuYWdlci5jcmVkZW50aWFscy5mb3JFYWNoKGNyZWRlbnRpYWwgPT4ge1xuICAgICAgaWYgKGNyZWRlbnRpYWwuc2NvcGUgPT09ICdzZXJ2ZXInKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IElkZW50aXR5TWFuYWdlci5zZXJ2ZXJJbmZvcy5maW5kKHNlcnZlckluZm8gPT4gc2VydmVySW5mby5zZXJ2ZXIgPT09IGNyZWRlbnRpYWwuc2VydmVyKVxuICAgICAgICBpZiAoc2VydmVyID09PSBzZXJ2ZXJJbmZvPy5vd25pbmdTeXN0ZW1VcmwpIHtcbiAgICAgICAgICByZW1vdmVkQ3JlZGVudGlhbHMucHVzaChjcmVkZW50aWFsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2VydmVyID09PSBjcmVkZW50aWFsLnNlcnZlcikge1xuICAgICAgICAgIHJlbW92ZWRDcmVkZW50aWFscy5wdXNoKGNyZWRlbnRpYWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmVtb3ZlZENyZWRlbnRpYWxzLmZvckVhY2goY3JlZGVudGlhbCA9PiBjcmVkZW50aWFsPy5zZXJ2ZXIgJiYgY3JlZGVudGlhbC5kZXN0cm95KCkpXG4gIH1cblxuICBwcml2YXRlIGFkZENyZWRlbnRpYWxUb1Nlc3Npb25NYW5nZXIgKGNyZWRlbnRpYWwpOiBQcm9taXNlPENyZWRlbnRpYWw+IHtcbiAgICBjb25zdCBzZXNzaW9uTWFuYWdlciA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICBpZiAoY3JlZGVudGlhbC5zY29wZSA9PT0gJ3NlcnZlcicgJiYgY3JlZGVudGlhbC5zZXJ2ZXIpIHtcbiAgICAgIHJldHVybiBTZXJ2aWNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmZldGNoQXJjR0lTU2VydmVySW5mbyhjcmVkZW50aWFsLnNlcnZlcikudGhlbihhc3luYyBzZXJ2ZXJJbmZvID0+IHtcbiAgICAgICAgc2Vzc2lvbk1hbmFnZXIuYWRkRnJvbUFyY0dpc0pTQ3JlZGVudGlhbChjcmVkZW50aWFsLCBzZXJ2ZXJJbmZvKVxuICAgICAgICByZXR1cm4gY3JlZGVudGlhbFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvbk1hbmFnZXIuYWRkRnJvbUFyY0dpc0pTQ3JlZGVudGlhbChjcmVkZW50aWFsLCBudWxsKVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcmVkZW50aWFsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB1c2UgYWZ0ZXIgaW5pdE1vZHVsZXNcbiAgICovXG4gIHByaXZhdGUgbGlzdGVuaW5nSnNBcGlTaWduSW4gKCkge1xuICAgIElkZW50aXR5TWFuYWdlci5vbignY3JlZGVudGlhbC1jcmVhdGUnLCAoeyBjcmVkZW50aWFsIH0pID0+IHtcbiAgICAgIHRoaXMuYWRkQ3JlZGVudGlhbFRvU2Vzc2lvbk1hbmdlcihjcmVkZW50aWFsKS50aGVuKChjcmVkZW50aWFsOiBhbnkpID0+IHtcbiAgICAgICAgLy8gcmVsZWFzZSBwZW5kaW5nIHNpZ24taW4gZGlhbG9nIGFmdGVyIHN5bmMgdG8gc2Vzc2lvbiBtYW5hZ2VyXG4gICAgICAgIGxldCBzZXJ2ZXJcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwuc2NvcGUgPT09ICdzZXJ2ZXInKSB7XG4gICAgICAgICAgc2VydmVyID0gY3JlZGVudGlhbC5yZXNvdXJjZXM/Lmxlbmd0aCA+IDAgPyBjcmVkZW50aWFsLnJlc291cmNlc1swXSA6IGAke2NyZWRlbnRpYWwuc2VydmVyfS9yZXN0L3NlcnZpY2VzYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlcnZlciA9IGNyZWRlbnRpYWwuc2VydmVyXG4gICAgICAgIH1cbiAgICAgICAgU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZWxlYXNlUGVuZGluZ1NpZ25JbihzZXJ2ZXIpXG4gICAgICB9KVxuICAgICAgY3JlZGVudGlhbC5vbigndG9rZW4tY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZENyZWRlbnRpYWxUb1Nlc3Npb25NYW5nZXIoY3JlZGVudGlhbClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgc3luY1RvQXJjZ2lzSlNBUEkgKHNlc3Npb25zKSB7XG4gICAgLy8gYWRkIGNyZWRlbnRpYWxzXG4gICAgc2Vzc2lvbnMgJiYgc2Vzc2lvbnMuZm9yRWFjaChzZXNzaW9uID0+IHtcbiAgICAgIC8vIFRoZSBwdXJwb3NlIG9mIHVzaW5nICcvcmVzdC9zZXJ2aWNlcycgc3ViZml4IGlzIHRvIHNldCBjcmVkZW50aWFsIHNjb3BlIHRvICdzZXJ2ZXInLlxuICAgICAgY29uc3Qgc2VydmVyID0gc2Vzc2lvbi5zZXJ2ZXIgPyBgJHtzZXNzaW9uLnNlcnZlcn0vcmVzdC9zZXJ2aWNlc2AgOiBzZXNzaW9uLnBvcnRhbFxuICAgICAgY29uc3QgY3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbChzZXJ2ZXIpXG4gICAgICBpZiAoIWNyZWRlbnRpYWwgfHwgc2Vzc2lvbi51c2VybmFtZSAhPT0gY3JlZGVudGlhbC51c2VySWQpIHtcbiAgICAgICAgSWRlbnRpdHlNYW5hZ2VyLnJlZ2lzdGVyVG9rZW4oe1xuICAgICAgICAgIHNlcnZlcjogc2VydmVyLFxuICAgICAgICAgIHRva2VuOiBzZXNzaW9uLnRva2VuLFxuICAgICAgICAgIGV4cGlyZXM6IHNlc3Npb24udG9rZW5FeHBpcmVzPy5nZXRUaW1lKCksXG4gICAgICAgICAgc3NsOiBzZXNzaW9uLnNzbCxcbiAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlcm5hbWVcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoc2Vzc2lvbi5zZXJ2ZXIpIHtcbiAgICAgICAgICAvLyB0aGUgc2VydmVySW5mbyBvZiBJZGVudGl0eU1hbmFnZXIgaXMgbm90IGNvcnJlY3QgaWYgc3luYyB0aGUgY3JlZGVudGlhbCBmcm9tIHNlc3Npb25NYW5hZ2VyXG4gICAgICAgICAgLy8gdXBkYXRlIHRoZSBjb3JyZXNwb25kaW5nIHNlcnZlciBpbmZvXG4gICAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IElkZW50aXR5TWFuYWdlci5maW5kU2VydmVySW5mbyhzZXNzaW9uLnNlcnZlcilcbiAgICAgICAgICBpZiAoc2VydmVySW5mbykge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgc2VydmVySW5mby5vd25pbmdTeXN0ZW1VcmwgPSBnZXRTdGFuZGFyZFBvcnRhbFVybChzZXNzaW9uLnBvcnRhbClcbiAgICAgICAgICAgIHNlcnZlckluZm8udG9rZW5TZXJ2aWNlVXJsID0gJydcbiAgICAgICAgICAgIHNlcnZlckluZm8uYWRtaW5Ub2tlblNlcnZpY2VVcmwgPSAnJ1xuICAgICAgICAgICAgc2VydmVySW5mby5oYXNQb3J0YWwgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIHJlbW92ZSBjcmVkZW50aWFsc1xuICAgIGNvbnN0IHJlbW92ZWRDcmVkZW50aWFscyA9IFtdXG4gICAgY29uc3Qgc2Vzc2lvbk1hbmFnZXIgPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIElkZW50aXR5TWFuYWdlci5jcmVkZW50aWFscz8uZm9yRWFjaChjcmVkZW50aWFsID0+IHtcbiAgICAgIGNvbnN0IHNlcnZlciA9IGNyZWRlbnRpYWwuc2NvcGUgPT09ICdzZXJ2ZXInID8gYCR7Y3JlZGVudGlhbC5zZXJ2ZXJ9L3Jlc3Qvc2VydmljZXNgIDogY3JlZGVudGlhbC5zZXJ2ZXJcbiAgICAgIGNvbnN0IHNlc3Npb25LZXlPZkNyZWRlbnRpYWwgPSBzZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uS2V5RnJvbVVybChzZXJ2ZXIpXG4gICAgICBjb25zdCBzZXNzaW9uID0gc2Vzc2lvbnMuZmluZChzZXNzaW9uID0+IHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbktleU9mU2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U2Vzc2lvbktleUZyb21TZXNzaW9uKHNlc3Npb24pXG4gICAgICAgIHJldHVybiBzZXNzaW9uS2V5T2ZDcmVkZW50aWFsID09PSBzZXNzaW9uS2V5T2ZTZXNzaW9uICYmIGNyZWRlbnRpYWwudXNlcklkID09PSBzZXNzaW9uLnVzZXJuYW1lXG4gICAgICB9KVxuICAgICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICAgIHJlbW92ZWRDcmVkZW50aWFscy5wdXNoKGNyZWRlbnRpYWwpXG4gICAgICB9XG4gICAgfSlcbiAgICByZW1vdmVkQ3JlZGVudGlhbHMuZm9yRWFjaChjcmVkZW50aWFsID0+IGNyZWRlbnRpYWwuZGVzdHJveSgpKVxuICB9XG5cbiAgcHJpdmF0ZSBvblNlc3Npb25DaGFuZ2VkQ2FsbGJhY2sgKHNlc3Npb25zLCByZWFzb25UeXBlKSB7XG4gICAgaWYgKHJlYXNvblR5cGUgPT09IFNlc3Npb25DaGFuZ2VkUmVhc29uVHlwZS5BcmNHSVNKU1N5bmMpIHJldHVyblxuICAgIHRoaXMuc3luY1RvQXJjZ2lzSlNBUEkoc2Vzc2lvbnMpXG4gIH1cblxuICBwcml2YXRlIGFkZFRvVHJ1c3RlZFNlcnZlcnMgKCkge1xuICAgIGNvbnN0IHsgcG9ydGFsVXJsLCBpc1dlYlRpZXIgfSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKVxuICAgIGNvbnN0IHRydXN0ZWRTZXJ2ZXJzID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRUcnVzdGVkU2VydmVycygpXG4gICAgaWYgKGlzV2ViVGllcikge1xuICAgICAgRXNyaUNvbmZpZy5yZXF1ZXN0LnRydXN0ZWRTZXJ2ZXJzLnB1c2gocG9ydGFsVXJsKVxuICAgIH1cbiAgICB0cnVzdGVkU2VydmVycy5mb3JFYWNoKHNlcnZlciA9PiB7XG4gICAgICBpZiAoIUVzcmlDb25maWcucmVxdWVzdC50cnVzdGVkU2VydmVycy5pbmNsdWRlcyhzZXJ2ZXIpKSB7XG4gICAgICAgIEVzcmlDb25maWcucmVxdWVzdC50cnVzdGVkU2VydmVycy5wdXNoKHNlcnZlcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBvbkN1cnJlbnRUaGVtZUxvYWQgKHRoZW1lTW9kdWxlOiBUaGVtZU1vZHVsZSwgZnJvbVRoZW1lMjogYm9vbGVhbikge1xuICAgIGlmICghdGhlbWVNb2R1bGUgfHwgZnJvbVRoZW1lMikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2hlY2tBUElUaGVtZSh0aGlzLmdldEFQSVRoZW1lVXJsKHdpbmRvdy5qaW11Q29uZmlnLmFyY2dpc0pzQXBpVXJsLCB0aGVtZU1vZHVsZS50aGVtZS5kYXJrVGhlbWUpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVBcGlUaGVtZVN0eWxlKHRoaXMuZ2V0QVBJVGhlbWVVcmwod2luZG93LmppbXVDb25maWcuYXJjZ2lzSnNBcGlVcmwsICF0aGVtZU1vZHVsZS50aGVtZS5kYXJrVGhlbWUpKVxuICAgIG1vZHVsZUxvYWRlci5sb2FkTW9kdWxlKHRoaXMuZ2V0QVBJVGhlbWVVcmwod2luZG93LmppbXVDb25maWcuYXJjZ2lzSnNBcGlVcmwsIHRoZW1lTW9kdWxlLnRoZW1lLmRhcmtUaGVtZSkpXG5cbiAgICBpZiAodGhlbWVNb2R1bGUudGhlbWUuZGFya1RoZW1lICYmICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnY2FsY2l0ZS1tb2RlLWRhcmsnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjYWxjaXRlLW1vZGUtZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY2FsY2l0ZS1tb2RlLWRhcmsnKVxuICAgIH1cblxuICAgIC8vIE1hcFZpZXcgYWRkcyBjYWxjaXRlLXRoZW1lLSogQ1NTIGNsYXNzIGludG8gaXRzIFVJIGNvbnRhaW5lciBET00sIHdoaWNoIGNhdXNlcyB0aGUgaW5uZXIgY29udGVudCBkb2VzIG5vdCBmaXQgdGhlIHRoZW1lIGNoYW5nZVxuICAgIC8vIFNlZSBodHRwczovL2RldnRvcGlhLmVzcmkuY29tL1dlYkdJUy9hcmNnaXMtanMtYXBpL2lzc3Vlcy80NDg3MVxuICAgIC8vIFRoZSB3b3JrYXJvdW5kIGhlcmUgaXMgcmVtb3ZlL2FkZCB0aGUgY2FsY2l0ZSBjbGFzcy5cbiAgICBNYXBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldEFsbEppbXVNYXBWaWV3SWRzKCkuZm9yRWFjaChqbXZJZCA9PiB7XG4gICAgICBjb25zdCBtdiA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SmltdU1hcFZpZXdCeUlkKGptdklkKVxuICAgICAgY29uc3QgbWFwQ29udGFpbmVyID0gbXYudmlldz8udWkuY29udGFpbmVyXG4gICAgICBpZiAoIW1hcENvbnRhaW5lcikge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICgodGhlbWVNb2R1bGUudGhlbWU/LmRhcmtUaGVtZSA/PyAodGhlbWVNb2R1bGUudmFyaWFibGVzIGFzIGFueSkuZGFya1RoZW1lKSAmJiAhbWFwQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2FsY2l0ZS1tb2RlLWRhcmsnKSkge1xuICAgICAgICBtYXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FsY2l0ZS10aGVtZS1saWdodCcpXG4gICAgICAgIG1hcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYWxjaXRlLW1vZGUtZGFyaycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2FsY2l0ZS1tb2RlLWRhcmsnKVxuICAgICAgICBtYXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FsY2l0ZS10aGVtZS1saWdodCcpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQXBpVGhlbWVTdHlsZSAodGhlbWVVcmw6IHN0cmluZykge1xuICAgIG1vZHVsZUxvYWRlci5kZWxldGVNb2R1bGUodGhlbWVVcmwpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tocmVmPVwiJHt0aGVtZVVybH1cIl1gKT8ucmVtb3ZlKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QVBJVGhlbWVVcmwgKGFwaVVybDogc3RyaW5nLCBpc0RhcmtUaGVtZTogYm9vbGVhbikge1xuICAgIGlmIChpc0RhcmtUaGVtZSkge1xuICAgICAgcmV0dXJuIGAke2FwaVVybH1lc3JpL3RoZW1lcy9kYXJrL21haW4uY3NzYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7YXBpVXJsfWVzcmkvY3NzL21haW4uY3NzYFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBUElUaGVtZSAodGhlbWVVcmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbaHJlZj1cIiR7dGhlbWVVcmx9XCJdYClcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tBcGlVcmwgKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHdpbmRvdy5lbnYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICgvXlxcL1xcLy8udGVzdCh1cmwpIHx8IC9eaHR0cHM/OlxcL1xcLy8udGVzdCh1cmwpKSB7XG4gICAgICByZXR1cm4gLyg/OltcXHdcXC1cXF9dK1xcLikrKD86ZXNyaXxhcmNnaXMpXFwuY29tLy50ZXN0KHVybCkgLy8gYXBpIHVybCBtdXN0IGJlIGluIGVzcmkuY29tIG9yIGFyY2dpcy5jb21cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyY0dJU0RhdGFTb3VyY2VGYWN0b3J5VXJpRXh0ZW5zaW9uIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5EYXRhU291cmNlRmFjdG9yeVVyaUV4dGVuc2lvbiB7XG4gIGlkID0gJ2FyY2dpcy1kcy1mYWN0b3J5J1xuXG4gIGdldEZhY3RvcnlVcmkgKGRhdGFTb3VyY2VUeXBlKTogc3RyaW5nIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoQXJjR0lTRGF0YVNvdXJjZVR5cGVzKS5tYXAodCA9PiBBcmNHSVNEYXRhU291cmNlVHlwZXNbdF0pLmluY2x1ZGVzKGRhdGFTb3VyY2VUeXBlKSkge1xuICAgICAgcmV0dXJuICdqaW11LWFyY2dpcy9hcmNnaXMtZGF0YS1zb3VyY2UnXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2VJbmZvQ2FjaGVhYmxlVXJsICh1cmw6IHN0cmluZywgcXVlcnk6IG9iamVjdCkge1xuICAvLyBjYWNoZSBzZXJ2aWNlIGluZm9cbiAgY29uc3Qgc2VydmljZUluZm9SZWcgPSAvcmVzdFxcL3NlcnZpY2VzXFwvKC4rKVxcLyhNYXBTZXJ2ZXJ8RmVhdHVyZVNlcnZlcnxJbWFnZVNlcnZlcilcXC8oXFxkKylcXC8/JC9cbiAgcmV0dXJuIHNlcnZpY2VJbmZvUmVnLnRlc3QodXJsKVxufVxuXG5mdW5jdGlvbiBjb21tdW5pdHlTZWxmQ2FjaGVhYmxlVXJsICh1cmw6IHN0cmluZywgcXVlcnk6IG9iamVjdCkge1xuICAvLyBjYWNoZSBjb21tdW5pdHkvc2VsZlxuICByZXR1cm4gL3NoYXJpbmdcXC9yZXN0XFwvY29tbXVuaXR5XFwvc2VsZlxcLz8kLy50ZXN0KHVybClcbn1cblxuZnVuY3Rpb24gaXRlbUluZm9BbmREYXRhQ2FjaGVhYmxlVXJsICh1cmw6IHN0cmluZywgcXVlcnk6IG9iamVjdCkge1xuICAvLyBjYWNoZSBpdGVtIGluZm8gYW5kIGl0ZW0gZGF0YVxuICBjb25zdCBrZXl3b3JkID0gJ3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLydcbiAgY29uc3QgaSA9IHVybC5pbmRleE9mKGtleXdvcmQpXG4gIGlmIChpID4gLTEpIHtcbiAgICBjb25zdCBzdWJVcmwgPSB1cmwuc3Vic3RyaW5nKGkgKyBrZXl3b3JkLmxlbmd0aClcbiAgICBjb25zdCBwYXJ0cyA9IHN1YlVybC5zcGxpdCgnLycpXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDAgJiYgKHBhcnRzLmxlbmd0aCA9PT0gMSB8fCBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSA9PT0gJ2RhdGEnKSkgeyAvLyBpcyBpdGVtIGluZm8gb3IgaXRlbSBkYXRhIFVSTFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCAoKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxufVxuIiwiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIGFwcEFjdGlvbnMsIEltbXV0YWJsZSwgdHlwZSBEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIHR5cGUgSmltdU1hcFZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMgfSBmcm9tICcuL3ZpZXdzL2ppbXUtbWFwLXZpZXcnXG5pbXBvcnQgeyBKaW11TWFwVmlld0dyb3VwIH0gZnJvbSAnLi92aWV3cy9qaW11LW1hcC12aWV3LWdyb3VwJ1xuaW1wb3J0IHsgdHlwZSBKaW11RmVhdHVyZUxheWVyVmlldyB9IGZyb20gJy4vdmlld3MvbGF5ZXJzL2ppbXUtZmVhdHVyZS1sYXllci12aWV3J1xuaW1wb3J0IHsgdHlwZSBKaW11U2NlbmVMYXllclZpZXcgfSBmcm9tICcuL3ZpZXdzL2xheWVycy9qaW11LXNjZW5lLWxheWVyLXZpZXcnXG5pbXBvcnQgeyBMYXllclR5cGVzIH0gZnJvbSAnLi9kYXRhLXNvdXJjZXMnXG5cbi8qKlxuICogVGhlIGBNYXBWaWV3TWFuYWdlcmAgaXMgdXNlZCB0byBtYW5hZ2UgYEppbXVNYXBWaWV3YCwgaW5jbHVkaW5nIGNyZWF0aW5nLCBnZXR0aW5nLCBzZXR0aW5nIGFuZCBkZXN0cm95aW5nIHRoZSBgSmltdU1hcFZpZXdgIGluc3RhbmNlLlxuICogUGxlYXNlIGFsd2F5cyB1c2UgYE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKClgIHRvIHVzZSB0aGlzIGNsYXNzLiBGb3IgZXhhbXBsZSwgdG8gZ2V0IGEgYEppbXVNYXBWaWV3YCwgeW91IGNhbiB1c2UgYE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SmltdU1hcFZpZXdCeUlkKGRzSWQpYC5cbiAqIEZvciB3aWRnZXQgZGV2ZWxvcG1lbnQsIGBNYXBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSgpYCBpbiBib3RoIHRoZSB3aWRnZXQgYW5kIHRoZSB3aWRnZXQncyBzZXR0aW5nIHJldHVybiB0aGUgc2FtZSBpbnN0YW5jZS5cbiAqXG4gKiBXaGVuIG5lZWRpbmcgdG8gbWFrZSB1c2Ugb2YgdGhlIGBKaW11TWFwVmlld2AsIGZvciBlYXNlIG9mIHVzZSwgaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgSmltdU1hcFZpZXdDb21wb25lbnRgIFJlYWN0IGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcFZpZXdNYW5hZ2VyIHtcbiAgc3RhdGljIF9pbnN0YW5jZTogTWFwVmlld01hbmFnZXJcbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICBpZiAod2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyKSB7XG4gICAgICAvLyBUaGUgYnVpbGRlciB3aWxsIHVzZSB0aGUgYXBwJ3MgbWFwLXZpZXctbWFuYWdlciwgdGhpcyBtZWFucyB0aGUgYnVpbGRlciBjYW4ndCBoYXZlIGl0cyBvd24gbWFwLXZpZXctbWFuYWdlclxuICAgICAgLy8gc28gYnVpbGRlciBjYW4ndCBoYXZlIG1hcC12aWV3LW1hbmFnZXIsIHdoZW5ldmVyIHVzZSBtYXAtdmlldy1tYW5hZ2VyIGluIGJ1aWxkZXIgd2lsbCB1c2UgYXBwJ3MgbWFwLXZpZXctbWFuYWdlclxuICAgICAgcmV0dXJuICh3aW5kb3cuX2FwcFdpbmRvdyAmJiB3aW5kb3cuX2FwcFdpbmRvdy5fbWFwVmlld01hbmFnZXIpIGFzIE1hcFZpZXdNYW5hZ2VyXG4gICAgfVxuXG4gICAgaWYgKCFNYXBWaWV3TWFuYWdlci5faW5zdGFuY2UpIHtcbiAgICAgIE1hcFZpZXdNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBNYXBWaWV3TWFuYWdlcigpXG4gICAgICB3aW5kb3cuX21hcFZpZXdNYW5hZ2VyID0gTWFwVmlld01hbmFnZXIuX2luc3RhbmNlXG4gICAgfVxuICAgIHJldHVybiBNYXBWaWV3TWFuYWdlci5faW5zdGFuY2VcbiAgfVxuXG4gIC8qKiBAaWdub3JlICovXG4gIHByaXZhdGUgamltdU1hcFZpZXdHcm91cHM6IHsgW21hcFdpZGdldElkOiBzdHJpbmddOiBKaW11TWFwVmlld0dyb3VwIH0gPSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgSmltdU1hcFZpZXdgIGluc3RhbmNlIGJ5IGlkLlxuICAgKi9cbiAgZ2V0SmltdU1hcFZpZXdCeUlkIChpZDogc3RyaW5nKTogSmltdU1hcFZpZXcge1xuICAgIGNvbnN0IG1hcFdpZGdldElkcyA9IE9iamVjdC5rZXlzKHRoaXMuamltdU1hcFZpZXdHcm91cHMpXG4gICAgaWYgKG1hcFdpZGdldElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwV2lkZ2V0SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlbXBNYXBXaWRnZXRJZCA9IG1hcFdpZGdldElkc1tpXVxuICAgICAgICBjb25zdCBqaW11TWFwVmlld0lkcyA9IE9iamVjdC5rZXlzKHRoaXMuamltdU1hcFZpZXdHcm91cHNbdGVtcE1hcFdpZGdldElkXS5qaW11TWFwVmlld3MpXG4gICAgICAgIGlmIChqaW11TWFwVmlld0lkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5qaW11TWFwVmlld0dyb3Vwc1t0ZW1wTWFwV2lkZ2V0SWRdLmppbXVNYXBWaWV3c1tpZF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICAvKiogQGlnbm9yZVxuICAgKiBHZXQgdGhlIGBKaW11TWFwVmlld0dyb3VwYCBnaXZlbiB3aWRnZXQgaWQuXG4gICovXG4gIGdldEppbXVNYXBWaWV3R3JvdXAgKG1hcFdpZGdldElkOiBzdHJpbmcpOiBKaW11TWFwVmlld0dyb3VwIHtcbiAgICBpZiAodGhpcy5qaW11TWFwVmlld0dyb3Vwc1ttYXBXaWRnZXRJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmppbXVNYXBWaWV3R3JvdXBzW21hcFdpZGdldElkXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHN0YXJ0aW5nIHRoZSBjcmVhdGlvbiBvZiB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZSwgdGhpcyBtZXRob2Qgd2lsbCBzZXQgdGhlIGBKaW11TWFwVmlld2AgaW5zdGFuY2Ugc3RhdHVzIGFzIGBMT0FESU5HYC5cbiAgICogVXBvbiBjcmVhdGlvbiwgdGhlIHN0YXR1cyB3aWxsIGNoYW5nZSB0byBgTE9BREVEYC4gSWYgYW4gZXJyb3Igb2NjdXJzLCB0aGUgc3RhdHVzIHdpbGwgYmUgc2V0IHRvIGBGQUlMRURgLlxuICAgKi9cbiAgYXN5bmMgY3JlYXRlSmltdU1hcFZpZXcgKGppbXVNYXBWaWV3Q29uc3RydWN0b3JPcHRpb25zOiBKaW11TWFwVmlld0NvbnN0cnVjdG9yT3B0aW9ucyk6IFByb21pc2U8SmltdU1hcFZpZXc+IHtcbiAgICBjb25zdCBqaW11TWFwVmlld0lkID0gamltdU1hcFZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMubWFwV2lkZ2V0SWQgKyAnLScgKyBqaW11TWFwVmlld0NvbnN0cnVjdG9yT3B0aW9ucy5kYXRhU291cmNlSWRcbiAgICBpZiAodGhpcy5nZXRKaW11TWFwVmlld0J5SWQoamltdU1hcFZpZXdJZCkpIHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodGhpcy5nZXRKaW11TWFwVmlld0J5SWQoamltdU1hcFZpZXdJZCkpXG4gICAgfVxuXG4gICAgY29uc3QgamltdU1hcFZpZXcgPSBuZXcgSmltdU1hcFZpZXcoamltdU1hcFZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMpXG4gICAgdGhpcy5hZGRKaW11TWFwVmlldyhqaW11TWFwVmlldylcbiAgICByZXR1cm4gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVNYXBWaWV3TG9hZGVkKClcbiAgfVxuXG4gIC8qKiBAaWdub3JlXG4gICAqIEFkZCBhIGBKaW11TWFwVmlld2AgaW5zdGFuY2UgdG8gdGhlIGBKaW11TWFwVmlld0dyb3VwYC5cbiAgICovXG4gIGFkZEppbXVNYXBWaWV3IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcbiAgICBpZiAodGhpcy5qaW11TWFwVmlld0dyb3Vwc1tqaW11TWFwVmlldy5tYXBXaWRnZXRJZF0pIHtcbiAgICAgIHRoaXMuamltdU1hcFZpZXdHcm91cHNbamltdU1hcFZpZXcubWFwV2lkZ2V0SWRdLmFkZEppbXVNYXBWaWV3KGppbXVNYXBWaWV3KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBqaW11TWFwVmlld0dyb3VwID0gbmV3IEppbXVNYXBWaWV3R3JvdXAoamltdU1hcFZpZXcubWFwV2lkZ2V0SWQpXG4gICAgICBqaW11TWFwVmlld0dyb3VwLmFkZEppbXVNYXBWaWV3KGppbXVNYXBWaWV3KVxuICAgICAgdGhpcy5qaW11TWFwVmlld0dyb3Vwc1tqaW11TWFwVmlldy5tYXBXaWRnZXRJZF0gPSBqaW11TWFwVmlld0dyb3VwXG4gICAgfVxuXG4gICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLmppbXVNYXBWaWV3QWRkZWQoamltdU1hcFZpZXcuaWQsIEltbXV0YWJsZSh7XG4gICAgICBpZDogamltdU1hcFZpZXcuaWQsXG4gICAgICBtYXBXaWRnZXRJZDogamltdU1hcFZpZXcubWFwV2lkZ2V0SWQsXG4gICAgICBkYXRhU291cmNlSWQ6IGppbXVNYXBWaWV3LmRhdGFTb3VyY2VJZCxcbiAgICAgIHN0YXR1czogamltdU1hcFZpZXcuc3RhdHVzXG4gICAgfSkpKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGBKaW11TWFwVmlld2AgaW5zdGFuY2UuXG4gICAqL1xuICBzZXRKaW11TWFwVmlldyAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSB7XG4gICAgaWYgKHRoaXMuamltdU1hcFZpZXdHcm91cHNbamltdU1hcFZpZXcubWFwV2lkZ2V0SWRdKSB7XG4gICAgICB0aGlzLmppbXVNYXBWaWV3R3JvdXBzW2ppbXVNYXBWaWV3Lm1hcFdpZGdldElkXS5zZXRKaW11TWFwVmlldyhqaW11TWFwVmlldylcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgamltdU1hcFZpZXdHcm91cCA9IG5ldyBKaW11TWFwVmlld0dyb3VwKGppbXVNYXBWaWV3Lm1hcFdpZGdldElkKVxuICAgICAgamltdU1hcFZpZXdHcm91cC5hZGRKaW11TWFwVmlldyhqaW11TWFwVmlldylcbiAgICAgIHRoaXMuamltdU1hcFZpZXdHcm91cHNbamltdU1hcFZpZXcubWFwV2lkZ2V0SWRdID0gamltdU1hcFZpZXdHcm91cFxuICAgIH1cblxuICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy5qaW11TWFwVmlld1VwZGF0ZWQoamltdU1hcFZpZXcuaWQsIEltbXV0YWJsZSh7XG4gICAgICBpZDogamltdU1hcFZpZXcuaWQsXG4gICAgICBtYXBXaWRnZXRJZDogamltdU1hcFZpZXcubWFwV2lkZ2V0SWQsXG4gICAgICBkYXRhU291cmNlSWQ6IGppbXVNYXBWaWV3LmRhdGFTb3VyY2VJZCxcbiAgICAgIGlzQWN0aXZlOiBqaW11TWFwVmlldy5pc0FjdGl2ZSxcbiAgICAgIHN0YXR1czogamltdU1hcFZpZXcuc3RhdHVzXG4gICAgfSkpKVxuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3lzIHRoZSBgSmltdU1hcFZpZXdgIGluc3RhbmNlIGJ5IGBKaW11TWFwVmlld2AgaWQuXG4gICAqL1xuICBkZXN0cm95SmltdU1hcFZpZXcgKGppbXVNYXBWaWV3SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlbW92ZUppbXVNYXBWaWV3ID0gdGhpcy5nZXRKaW11TWFwVmlld0J5SWQoamltdU1hcFZpZXdJZClcbiAgICByZW1vdmVKaW11TWFwVmlldyAmJiByZW1vdmVKaW11TWFwVmlldy5kZXN0cm95KClcblxuICAgIGNvbnN0IG1hcFdpZGdldElkcyA9IE9iamVjdC5rZXlzKHRoaXMuamltdU1hcFZpZXdHcm91cHMpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKG1hcFdpZGdldElkcy5sZW5ndGggPT09IDApIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcFdpZGdldElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZW1wTWFwV2lkZ2V0SWQgPSBtYXBXaWRnZXRJZHNbaV1cbiAgICAgICAgY29uc3QgamltdU1hcFZpZXdJZHMgPSBPYmplY3Qua2V5cyh0aGlzLmppbXVNYXBWaWV3R3JvdXBzW3RlbXBNYXBXaWRnZXRJZF0uamltdU1hcFZpZXdzKVxuICAgICAgICBpZiAoamltdU1hcFZpZXdJZHMuaW5jbHVkZXMoamltdU1hcFZpZXdJZCkpIHtcbiAgICAgICAgICBkZWxldGUgdGhpcy5qaW11TWFwVmlld0dyb3Vwc1t0ZW1wTWFwV2lkZ2V0SWRdLmppbXVNYXBWaWV3c1tqaW11TWFwVmlld0lkXVxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmppbXVNYXBWaWV3R3JvdXBzW3RlbXBNYXBXaWRnZXRJZF0uamltdU1hcFZpZXdzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmppbXVNYXBWaWV3R3JvdXBzW3RlbXBNYXBXaWRnZXRJZF1cbiAgICAgICAgICB9XG4gICAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLmppbXVNYXBWaWV3UmVtb3ZlZChqaW11TWFwVmlld0lkKSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9idGFpbiBhbGwgYEppbXVNYXBWaWV3YCBpZHMuXG4gICAqL1xuICBnZXRBbGxKaW11TWFwVmlld0lkcyAoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGlkcyA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy5qaW11TWFwVmlld0dyb3VwcykuZm9yRWFjaChtYXBXaWRnZXRJZCA9PiB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmppbXVNYXBWaWV3R3JvdXBzW21hcFdpZGdldElkXS5qaW11TWFwVmlld3MpLmZvckVhY2gobWFwVmlld0lkID0+IHtcbiAgICAgICAgaWRzLnB1c2gobWFwVmlld0lkKVxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBpZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEdldCBhbGwgYEppbXVNYXBWaWV3YCBpbnN0YW5jZXMuXG4gICAqL1xuICBnZXRBbGxKaW11TWFwVmlld3MgKCk6IEppbXVNYXBWaWV3W10ge1xuICAgIGNvbnN0IGFsbEppbXVNYXBWaWV3czogSmltdU1hcFZpZXdbXSA9IFtdXG4gICAgT2JqZWN0LmtleXModGhpcy5qaW11TWFwVmlld0dyb3VwcykuZm9yRWFjaChtYXBXaWRnZXRJZCA9PiB7XG4gICAgICBjb25zdCBqaW11TWFwVmlld3MgPSBPYmplY3QudmFsdWVzKHRoaXMuamltdU1hcFZpZXdHcm91cHNbbWFwV2lkZ2V0SWRdLmppbXVNYXBWaWV3cylcbiAgICAgIGFsbEppbXVNYXBWaWV3cy5wdXNoKC4uLmppbXVNYXBWaWV3cylcbiAgICB9KVxuICAgIHJldHVybiBhbGxKaW11TWFwVmlld3NcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGFsbCBgSmltdU1hcFZpZXdgIGluc3RhbmNlcyBieSBpZHMuXG4gICAqL1xuICBkZXN0cm95QWxsSmltdU1hcFZpZXdzICgpIHtcbiAgICB0aGlzLmdldEFsbEppbXVNYXBWaWV3SWRzKCkuZm9yRWFjaChtYXBWaWV3SWQgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95SmltdU1hcFZpZXcobWFwVmlld0lkKVxuICAgIH0pXG4gIH1cblxuICBnZXRKaW11TGF5ZXJWaWV3Rm9yQ2xpZW50UXVlcnkgKGxheWVyRHM6IERhdGFTb3VyY2UpOiBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldyB7XG4gICAgaWYgKCFsYXllckRzKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGxheWVyRHNJZCA9IGxheWVyRHMuaWRcblxuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkYXRhIHNvdXJjZSBpZFxuICAgIGNvbnN0IHJvb3REc0lkID0gbGF5ZXJEcy5nZXRSb290RGF0YVNvdXJjZSgpPy5pZFxuXG4gICAgaWYgKCFyb290RHNJZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB3aWRnZXRzSnNvbiA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnPy53aWRnZXRzXG5cbiAgICBpZiAoIXdpZGdldHNKc29uKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGppbXVNYXBWaWV3cyA9IHRoaXMuZ2V0QWxsSmltdU1hcFZpZXdzKCkuZmlsdGVyKGppbXVNYXBWaWV3ID0+IGppbXVNYXBWaWV3LnZpZXc/LnR5cGUgPT09ICcyZCcgJiYgamltdU1hcFZpZXcuZGF0YVNvdXJjZUlkID09PSByb290RHNJZClcblxuICAgIGZvciAoY29uc3QgamltdU1hcFZpZXcgb2YgamltdU1hcFZpZXdzKSB7XG4gICAgICBjb25zdCBtYXBXaWRnZXRJZCA9IGppbXVNYXBWaWV3Lm1hcFdpZGdldElkXG4gICAgICBjb25zdCBtYXBXaWRnZXRDb25maWcgPSB3aWRnZXRzSnNvblttYXBXaWRnZXRJZF0gPyB3aWRnZXRzSnNvblttYXBXaWRnZXRJZF0uY29uZmlnIDoge31cbiAgICAgIGNvbnN0IGNsaWVudFF1ZXJ5RGF0YVNvdXJjZUlkcyA9IG1hcFdpZGdldENvbmZpZz8uY2xpZW50UXVlcnlEYXRhU291cmNlSWRzIHx8IFtdXG5cbiAgICAgIGlmIChjbGllbnRRdWVyeURhdGFTb3VyY2VJZHMuaW5jbHVkZXMocm9vdERzSWQpKSB7XG4gICAgICAgIC8vIGppbXVNYXBWaWV3IHN1cHBvcnRzIGNsaWVudCBxdWVyeVxuICAgICAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gamltdU1hcFZpZXcuZ2V0SmltdUxheWVyVmlld0J5RGF0YVNvdXJjZUlkKGxheWVyRHNJZCkgYXMgKEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KVxuXG4gICAgICAgIGlmIChqaW11TGF5ZXJWaWV3ICYmIGppbXVMYXllclZpZXcuY2xpZW50UXVlcnlGZWF0dXJlcyAmJiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllciB8fCBqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikpIHtcbiAgICAgICAgICByZXR1cm4gamltdUxheWVyVmlld1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGxheWVySXNOb3RTdXBwb3J0ZWQ6ICdUaGlzIGxheWVyIHR5cGUgaXMgbm90IHN1cHBvcnRlZC4nXG59XG4iLCJpbXBvcnQgeyBnZXRJdGVtUXVlcnlTdHJpbmdCeVR5cGVzIH0gZnJvbSAnLi9wb3J0YWwtdXRpbHMnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnLi4vYXJjZ2lzLWpzLWFwaS1tb2R1bGUtbG9hZGVyJ1xuaW1wb3J0IHsgcG9ydGFsVXJsVXRpbHMsIGdldEFwcFN0b3JlIH0gZnJvbSAnamltdS1jb3JlJ1xuXG4vLyBUaGUgbG9naWMgZm9yIHRoaXMgZmlsZSB3YXMgbWlncmF0ZWQgZnJvbSB0aGUgQmFzZW1hcEdhbGxlcnkgd2lkZ2V0LlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JnQmFzZW1hcHMgKCk6IFByb21pc2U8X19lc3JpLkJhc2VtYXBbXT4ge1xuICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvcG9ydGFsL1BvcnRhbCcsICdlc3JpL0Jhc2VtYXAnXSlcbiAgY29uc3QgW1BvcnRhbCwgQmFzZW1hcF0gPSBtb2R1bGVzIGFzIFt0eXBlb2YgX19lc3JpLlBvcnRhbCwgdHlwZW9mIF9fZXNyaS5CYXNlbWFwXVxuXG4gIC8vIGxvYWQgcG9ydGFsIGFuZCBnZXQgcG9ydGFsU2VsZlxuICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXG4gIGNvbnN0IHBvcnRhbCA9IG5ldyBQb3J0YWwoe1xuICAgIHVybDogcG9ydGFsVXJsXG4gIH0pXG4gIGF3YWl0IHBvcnRhbC5sb2FkKClcbiAgY29uc3QgcG9ydGFsU2VsZiA9IHBvcnRhbC5zb3VyY2VKU09OXG5cbiAgY29uc3Qgb3JnRGVmYXVsdEdyb3VwID0gYXdhaXQgZ2V0QmFzZW1hcEdyb3VwKHBvcnRhbCwgcG9ydGFsU2VsZiwgZmFsc2UpXG5cbiAgY29uc3Qgb3JnR3JvdXBJZCA9IG9yZ0RlZmF1bHRHcm91cD8uaWRcbiAgaWYgKCFvcmdHcm91cElkKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBjb25zdCBncm91cEJhc2VtYXBJdGVtcyA9IGF3YWl0IGdldEJhc2VtYXBJdGVtc0J5R3JvdXBJZChwb3J0YWwsIHBvcnRhbFVybCwgb3JnR3JvdXBJZClcbiAgcmV0dXJuIGF3YWl0IGdldExvYWRlZEJhc2VtYXBMaXN0KEJhc2VtYXAsIGdyb3VwQmFzZW1hcEl0ZW1zKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VtYXBJdGVtIHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIHRodW1ibmFpbFVybDogc3RyaW5nXG4gIHR5cGU6IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmFzZW1hcEdyb3VwIChwb3J0YWw6IF9fZXNyaS5Qb3J0YWwsIHBvcnRhbFNlbGY6IF9fZXNyaS5Qb3J0YWxbJ3NvdXJjZUpTT04nXSwgaXNCeUVzcmlEZWZhdWx0ID0gZmFsc2UpOiBQcm9taXNlPF9fZXNyaS5Qb3J0YWxHcm91cD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGVzcmlEZWZhdWx0R3JvdXBRdWVyeSA9ICd0aXRsZTpcIkFyY0dJUyBPbmxpbmUgQmFzZW1hcHNcIiBBTkQgb3duZXI6ZXNyaV9lbidcbiAgICBjb25zdCBiYXNlbWFwR2FsbGVyeUdyb3VwUXVlcnkgPSBwb3J0YWxTZWxmLnVzZVZlY3RvckJhc2VtYXBzICYmIHBvcnRhbFNlbGYudmVjdG9yQmFzZW1hcEdhbGxlcnlHcm91cFF1ZXJ5ID8gcG9ydGFsU2VsZi52ZWN0b3JCYXNlbWFwR2FsbGVyeUdyb3VwUXVlcnkgOiBwb3J0YWxTZWxmLmJhc2VtYXBHYWxsZXJ5R3JvdXBRdWVyeVxuICAgIGNvbnN0IHF1ZXJ5U3RyID0gaXNCeUVzcmlEZWZhdWx0ID8gZXNyaURlZmF1bHRHcm91cFF1ZXJ5IDogYmFzZW1hcEdhbGxlcnlHcm91cFF1ZXJ5XG4gICAgY29uc3QgZ3JvdXBzUmVzcG9uc2UgPSBhd2FpdCBwb3J0YWwucXVlcnlHcm91cHMoe1xuICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkaXNhYmxlRXh0cmFRdWVyeTogdHJ1ZSAvLyByZW1vdmUgZXh0cmEgcXVlcnkgXCJBTkQgb3JnaWQ6eHh4eFwiXG4gICAgfSlcblxuICAgIGlmIChncm91cHNSZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBncm91cHNSZXNwb25zZS5yZXN1bHRzWzBdIGFzIF9fZXNyaS5Qb3J0YWxHcm91cFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IGJhc2VtYXAgZ3JvdXBzJywgZSlcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCYXNlbWFwSXRlbXNCeUdyb3VwSWQgKHBvcnRhbDogX19lc3JpLlBvcnRhbCwgcG9ydGFsVXJsOiBzdHJpbmcsIGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8QmFzZW1hcEl0ZW1bXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYk1hcFF1ZXJ5U3RyID0gZ2V0SXRlbVF1ZXJ5U3RyaW5nQnlUeXBlcyhbJ1dlYiBNYXAnXSlcbiAgICBjb25zdCBxdWVyeVN0ciA9IGBncm91cDoke2dyb3VwSWR9IEFORCAke3dlYk1hcFF1ZXJ5U3RyfWBcbiAgICBjb25zdCBzZWFyY2hSZXNwb25zZSA9IGF3YWl0IHBvcnRhbC5xdWVyeUl0ZW1zKHtcbiAgICAgIHN0YXJ0OiAxLFxuICAgICAgbnVtOiAxMDAsXG4gICAgICBzb3J0RmllbGQ6ICd0aXRsZScsXG4gICAgICBzb3J0T3JkZXI6ICdhc2MnLFxuICAgICAgcXVlcnk6IHF1ZXJ5U3RyLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkaXNhYmxlRXh0cmFRdWVyeTogdHJ1ZSAvLyByZW1vdmUgZXh0cmEgcXVlcnkgXCJBTkQgb3JnaWQ6eHh4eFwiXG4gICAgfSlcblxuICAgIGNvbnN0IHBvcnRhbEl0ZW1zID0gc2VhcmNoUmVzcG9uc2U/LnJlc3VsdHMgPyBzZWFyY2hSZXNwb25zZS5yZXN1bHRzIGFzIF9fZXNyaS5Qb3J0YWxJdGVtW10gOiBbXVxuICAgIHJldHVybiBwb3J0YWxJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1VcmwgPSBwb3J0YWxVcmxVdGlscy5nZXRJdGVtVXJsKHBvcnRhbFVybCwgaXRlbS5pZClcbiAgICAgIC8vIFRoZSB0b2tlbiB3aWxsIGJlIGFwcGVuZGVkIHdoZW4gdGhlIGltYWdlIGlzIHJlbmRlcmVkXG4gICAgICBjb25zdCB0aHVtYm5haWxVcmwgPSBpdGVtVXJsICsgJy9pbmZvLycgKyAoaXRlbSBhcyBhbnkpLnRodW1ibmFpbFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICB0aHVtYm5haWxVcmw6IHRodW1ibmFpbFVybCxcbiAgICAgICAgdHlwZTogaXRlbS50eXBlXG4gICAgICB9IGFzIEJhc2VtYXBJdGVtXG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IGJhc2VtYXAgaXRlbXMgYnkgIGdyb3VwIGlkJywgZSlcbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TG9hZGVkQmFzZW1hcExpc3QgPSAoQmFzZW1hcDogdHlwZW9mIF9fZXNyaS5CYXNlbWFwLCBiYXNlbWFwSXRlbXM6IEJhc2VtYXBJdGVtW10pOiBQcm9taXNlPF9fZXNyaS5CYXNlbWFwW10+ID0+IHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGJhc2VtYXBJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBiYXNlbWFwID0gbmV3IEJhc2VtYXAoe1xuICAgICAgcG9ydGFsSXRlbToge1xuICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkb24ndCBuZWVkIHRyeSBjYXRjaCBoZXJlLCBzaW5jZSBiYXNlbWFwLmxvYWQgd2lsbCByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpLCB0aGlzIHdpbGwgYWx3YXlzIGJlIGZ1bGZpbGxlZFxuICAgIC8vIHRoaXMgbG9hZCBpcyBqdXN0IHVzZWQgZm9yIHRoZSBiYXNlbWFwIGVxdWFsIG5vdyAoZWc6IGNvbXBhcmUgYWN0aXZlIGJhc2VtYXAgYW5kIGJhc2VtYXAgaW4gbGlzdCwgY29tcGFyZSBvcmlnaW5hbCBiYXNlbWFwIGFuZCBiYXNlbWFwIGluIGxpc3QpXG4gICAgLy8gaWYgcmVzb3VyY2VzIGxvYWQgZmFpbGVkLCBCYXNlbWFwR2FsbGVyeUl0ZW0gd2lkZ2V0IHdpbGwgY2FsbCBiYXNlbWFwLmxvYWQgYW5kIGhhbmRsZSB0aGUgZXJyb3IsIHdlIG5lZWQgbm90IHRvIGhhbmRsZSB0aGUgZXJyb3IgaW4gb3VyIGNvZGVcbiAgICByZXR1cm4gYmFzZW1hcC5sb2FkKCkgYXMgUHJvbWlzZTxfX2VzcmkuQmFzZW1hcD5cbiAgfSkpXG59XG4iLCJpbXBvcnQgeyB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkLCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIERhdGFSZWNvcmRTZXQsIGRhdGFTb3VyY2VVdGlscyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRhUmVjb3JkU2V0VG9GZWF0dXJlU2V0IChkc1NldDogRGF0YVJlY29yZFNldCk6IFByb21pc2U8X19lc3JpLkZlYXR1cmVTZXQ+IHtcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL0dyYXBoaWMnLFxuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9GZWF0dXJlU2V0J1xuICBdKS50aGVuKGFzeW5jIG1vZHVsZXMgPT4ge1xuICAgIGNvbnN0IFtHcmFwaGljLCBGZWF0dXJlU2V0XSA9IG1vZHVsZXNcbiAgICBjb25zdCBmZWF0dXJlU2V0OiBfX2VzcmkuRmVhdHVyZVNldCA9IG5ldyBGZWF0dXJlU2V0KClcblxuICAgIGNvbnN0IGdlb21ldHJ5VHlwZSA9IGRhdGFTb3VyY2VVdGlscy5jaGFuZ2VSZXN0QVBJR2VvbWV0cnlUeXBlVG9KU0FQSUdlb21ldHJ5VHlwZShkc1NldC5kYXRhU291cmNlLmdldEdlb21ldHJ5VHlwZSgpKVxuXG4gICAgZmVhdHVyZVNldC5nZW9tZXRyeVR5cGUgPSBnZW9tZXRyeVR5cGVcbiAgICBmZWF0dXJlU2V0LmZlYXR1cmVzID0gZHNTZXQucmVjb3Jkcy5tYXAocmVjb3JkID0+IHtcbiAgICAgIGxldCBncmFwaGljXG5cbiAgICAgIGNvbnN0IHJlY29yZEZlYXR1cmUgPSAocmVjb3JkIGFzIEZlYXR1cmVEYXRhUmVjb3JkKS5mZWF0dXJlXG4gICAgICBpZiAoKHJlY29yZEZlYXR1cmUgYXMgX19lc3JpLkdyYXBoaWMpPy5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5HcmFwaGljJykge1xuICAgICAgICBncmFwaGljID0gKHJlY29yZEZlYXR1cmUgYXMgX19lc3JpLkdyYXBoaWMpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChyZWNvcmRGZWF0dXJlLmdlb21ldHJ5IGFzIGFueSkudHlwZSA9IGdlb21ldHJ5VHlwZVxuICAgICAgICBncmFwaGljID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiByZWNvcmRGZWF0dXJlLmdlb21ldHJ5LFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHJlY29yZEZlYXR1cmUuYXR0cmlidXRlc1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdyYXBoaWNcbiAgICB9KVxuICAgIHJldHVybiBmZWF0dXJlU2V0XG4gICAgLy8gVE9ETyBmZWF0dXJlU2V0LmRpc3BsYXlGaWVsZE5hbWUsIGZlYXR1cmVTZXQuZmllbGRzLCBmZWF0dXJlU2V0LnNwYXRpYWxSZWZlcmVuY2VcbiAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICBjb25zb2xlLndhcm4oZSlcbiAgICByZXR1cm4gbnVsbFxuICB9KVxufVxuXG5leHBvcnQgdHlwZSBEZWZhdWx0U3ltYm9sVHlwZSA9ICdwb2ludCcgfCAncG9seWxpbmUnIHwgJ3BvbHlnb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFN5bWJvbCB7XG4gIHR5cGU6IHN0cmluZ1xuICBjb2xvcjogbnVtYmVyW11cbiAgb3V0bGluZT86IHtcbiAgICBjb2xvcjogbnVtYmVyW11cbiAgICB3aWR0aDogbnVtYmVyXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTeW1ib2wgKHR5cGU6IERlZmF1bHRTeW1ib2xUeXBlKTogRGVmYXVsdFN5bWJvbCB7XG4gIGxldCBzeW1ib2wgPSBudWxsXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3BvaW50JzpcbiAgICAgIHN5bWJvbCA9IHtcbiAgICAgICAgdHlwZTogJ2VzcmlTTVMnLFxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxNTBdLFxuICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMTUwXSxcbiAgICAgICAgICB3aWR0aDogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHN5bWJvbCA9IHtcbiAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxNTBdXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgc3ltYm9sID0ge1xuICAgICAgICB0eXBlOiAnZXNyaVNGUycsXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDE1MF0sXG4gICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxNTBdLFxuICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIHN5bWJvbFxufVxuIiwiaW1wb3J0IHsgZ2V0QXBwU3RvcmUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnLi4vYXJjZ2lzLWpzLWFwaS1tb2R1bGUtbG9hZGVyJ1xuXG5jb25zdCB3ZWJNYXBRdWVyeVN0ciA9ICcgJyArIGdldEl0ZW1RdWVyeVN0cmluZ0J5VHlwZXMoWydXZWIgTWFwJ10pICsgJyAnXG5cbmxldCBnZXREZWZhdWx0V2ViTWFwUHJvbWlzZSA9IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBEZWZhdWx0TWFwSW5mbyB7XG4gIGRlZmF1bHRNYXBJZDogc3RyaW5nXG4gIGRlZmF1bHRFeHRlbnQ6IGFueVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEZWZhdWx0QmFzZU1hcElzRXhpc3QgKCkge1xuICBjb25zdCBwb3J0YWxTZWxmID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFNlbGZcbiAgaWYgKHBvcnRhbFNlbGYgJiYgcG9ydGFsU2VsZi5kZWZhdWx0QmFzZW1hcCAmJiBwb3J0YWxTZWxmLmRlZmF1bHRCYXNlbWFwLmJhc2VNYXBMYXllcnMgJiZcbiAgICBwb3J0YWxTZWxmLmRlZmF1bHRCYXNlbWFwLmJhc2VNYXBMYXllcnNbMF0gJiYgcG9ydGFsU2VsZi5kZWZhdWx0QmFzZW1hcC5iYXNlTWFwTGF5ZXJzWzBdLnVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRXZWJNYXAgKF9wb3J0YWxVcmw6IHN0cmluZyk6IFByb21pc2U8RGVmYXVsdE1hcEluZm8+IHtcbiAgaWYgKGdldERlZmF1bHRXZWJNYXBQcm9taXNlKSB7XG4gICAgcmV0dXJuIGdldERlZmF1bHRXZWJNYXBQcm9taXNlXG4gIH1cblxuICBnZXREZWZhdWx0V2ViTWFwUHJvbWlzZSA9IGdldERlZmF1bHRXZWJNYXBXaXRob3V0Q2FjaGUoX3BvcnRhbFVybClcblxuICByZXR1cm4gZ2V0RGVmYXVsdFdlYk1hcFByb21pc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRXZWJNYXBXaXRob3V0Q2FjaGUgKF9wb3J0YWxVcmw6IHN0cmluZyk6IFByb21pc2U8RGVmYXVsdE1hcEluZm8+IHtcbiAgY29uc3QgbW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL3BvcnRhbC9Qb3J0YWwnXSlcbiAgY29uc3QgUG9ydGFsQ2xhc3M6IHR5cGVvZiBfX2VzcmkuUG9ydGFsID0gbW9kdWxlc1swXVxuICBjb25zdCBwb3J0YWwgPSBuZXcgUG9ydGFsQ2xhc3Moe1xuICAgIHVybDogX3BvcnRhbFVybFxuICB9KVxuXG4gIGF3YWl0IHBvcnRhbC5sb2FkKClcbiAgY29uc3QgcG9ydGFsU2VsZiA9IHBvcnRhbC5zb3VyY2VKU09OXG5cbiAgLy8gU3RlcDE6IHRyeSB0byBnZXQgZGVmYXVsdCB3ZWJtYXAgZnJvbSBwb3J0YWxTZWxmLmRlZmF1bHRCYXNlbWFwLmlkXG4gIGNvbnN0IGlkMSA9IHBvcnRhbFNlbGYuZGVmYXVsdEJhc2VtYXAgJiYgcG9ydGFsU2VsZi5kZWZhdWx0QmFzZW1hcC5pZFxuICBjb25zdCBkZWZhdWx0RXh0ZW50ID0gcG9ydGFsU2VsZi5kZWZhdWx0RXh0ZW50XG5cbiAgaWYgKGlkMSkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0TWFwSWQ6IGlkMSxcbiAgICAgIGRlZmF1bHRFeHRlbnQ6IGRlZmF1bHRFeHRlbnRcbiAgICB9XG4gIH1cblxuICAvLyBTdGVwMjogdHJ5IHRvIGdldCBkZWZhdWx0IHdlYm1hcCBmcm9tIGJhc2VtYXAgZ2FsbGVyeSBncm91cFxuICBjb25zdCBpZDIgPSBhd2FpdCBfZ2V0RGVmYXVsdFdlYk1hcEJ5QmFzZW1hcEdhbGxlcnkoX3BvcnRhbFVybCwgcG9ydGFsU2VsZiwgcG9ydGFsKVxuXG4gIGlmIChpZDIpIHtcbiAgICBjb25zdCBpc0lkMlZhbGlkID0gYXdhaXQgdmFsaWRhdGVXZWJNYXBWZXJzaW9uKHBvcnRhbCwgaWQyKVxuXG4gICAgaWYgKGlzSWQyVmFsaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlZmF1bHRNYXBJZDogaWQyLFxuICAgICAgICBkZWZhdWx0RXh0ZW50OiBkZWZhdWx0RXh0ZW50XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RlcDM6IHRyeSB0byBnZXQgZGVmYXVsdCB3ZWJtYXAgYnkgbW9zdCB2aWV3ZWRcbiAgY29uc3QgaWQzID0gYXdhaXQgX2dldE1vc3ROdW1WaWV3c1dlYk1hcChwb3J0YWwpXG5cbiAgcmV0dXJuIHtcbiAgICBkZWZhdWx0TWFwSWQ6IGlkMyxcbiAgICBkZWZhdWx0RXh0ZW50OiBkZWZhdWx0RXh0ZW50XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVXZWJNYXBWZXJzaW9uIChwb3J0YWw6IF9fZXNyaS5Qb3J0YWwsIHdlYm1hcElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvcG9ydGFsL1BvcnRhbEl0ZW0nXSlcbiAgICBjb25zdCBQb3J0YWxJdGVtQ2xhc3M6IHR5cGVvZiBfX2VzcmkuUG9ydGFsSXRlbSA9IG1vZHVsZXNbMF1cbiAgICBjb25zdCBwb3J0YWxJdGVtID0gbmV3IFBvcnRhbEl0ZW1DbGFzcyh7XG4gICAgICBwb3J0YWwsXG4gICAgICBpZDogd2VibWFwSWRcbiAgICB9KVxuICAgIGNvbnN0IGl0ZW1EYXRhID0gYXdhaXQgcG9ydGFsSXRlbS5mZXRjaERhdGEoKVxuXG4gICAgaWYgKGl0ZW1EYXRhICYmIGl0ZW1EYXRhLnZlcnNpb24gJiYgdHlwZW9mIGl0ZW1EYXRhLnZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBKUyBBUEkgb25seSBzdXBwb3J0cyBtYWpvciB3ZWJtYXAgdmVyc2lvbiA+PSAnMidcbiAgICAgIGNvbnN0IG1ham9yVmVyc2lvbiA9IHBhcnNlRmxvYXQoaXRlbURhdGEudmVyc2lvbi5zcGxpdCgnLicpWzBdKVxuICAgICAgcmV0dXJuIG1ham9yVmVyc2lvbiA+PSAyXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcigndmFsaWRhdGUgd2ViIG1hcCB2ZXJzaW9uIGVycm9yJywgd2VibWFwSWQsIGUpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gX2dldE1vc3ROdW1WaWV3c1dlYk1hcCAocG9ydGFsOiBfX2VzcmkuUG9ydGFsKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBzdGFydDogMSxcbiAgICBudW06IDEsXG4gICAgZjogJ2pzb24nLFxuICAgIHF1ZXJ5OiB3ZWJNYXBRdWVyeVN0ciArICcgQU5EIGFjY2VzczpwdWJsaWMgQU5EIG93bmVyOmVzcmlfZW4nLFxuICAgIHNvcnRGaWVsZDogJ251bS12aWV3cycsXG4gICAgc29ydE9yZGVyOiAnZGVzYydcbiAgfSBhcyBhbnlcblxuICByZXR1cm4gYXdhaXQgcG9ydGFsLnF1ZXJ5SXRlbXMocGFyYW1zKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICBsZXQgaXRlbXMgPSByZXNwb25zZS5yZXN1bHRzXG4gICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS50eXBlICYmIGl0ZW0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAnd2ViIG1hcCdcbiAgICB9KVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1swXVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtLmlkKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfVxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBfZ2V0RGVmYXVsdFdlYk1hcEJ5QmFzZW1hcEdhbGxlcnkgKF9wb3J0YWxVcmw6IHN0cmluZywgX3BvcnRhbFNlbGZJbmZvOiBhbnksIHBvcnRhbDogX19lc3JpLlBvcnRhbCkge1xuICBjb25zdCB0aXRsZSA9IF9wb3J0YWxTZWxmSW5mby5kZWZhdWx0QmFzZW1hcCAmJiBfcG9ydGFsU2VsZkluZm8uZGVmYXVsdEJhc2VtYXAudGl0bGVcbiAgY29uc3QgYmFzZW1hcEdhbGxlcnlHcm91cFF1ZXJ5ID0gX3BvcnRhbFNlbGZJbmZvLnVzZVZlY3RvckJhc2VtYXBzICYmIF9wb3J0YWxTZWxmSW5mby52ZWN0b3JCYXNlbWFwR2FsbGVyeUdyb3VwUXVlcnkgPyBfcG9ydGFsU2VsZkluZm8udmVjdG9yQmFzZW1hcEdhbGxlcnlHcm91cFF1ZXJ5IDogX3BvcnRhbFNlbGZJbmZvLmJhc2VtYXBHYWxsZXJ5R3JvdXBRdWVyeVxuICByZXR1cm4gYXdhaXQgcG9ydGFsLnF1ZXJ5R3JvdXBzKHtcbiAgICBmOiAnanNvbicsXG4gICAgcXVlcnk6IGJhc2VtYXBHYWxsZXJ5R3JvdXBRdWVyeVxuICB9IGFzIGFueSkudGhlbihhc3luYyBncm91cHNSZXNwb25zZSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzID0gZ3JvdXBzUmVzcG9uc2UucmVzdWx0c1xuICAgIGlmIChncm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHNbMF1cbiAgICAgIGNvbnN0IHF1ZXJ5U3RyID0gd2ViTWFwUXVlcnlTdHIgKyAnIEFORCBncm91cDonICsgZ3JvdXAuaWRcbiAgICAgIHJldHVybiBhd2FpdCBwb3J0YWwucXVlcnlJdGVtcyh7XG4gICAgICAgIHN0YXJ0OiAxLFxuICAgICAgICBudW06IDEsXG4gICAgICAgIGY6ICdqc29uJyxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyXG4gICAgICB9IGFzIGFueSkudGhlbihhc3luYyBzZWFyY2hSZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IHNlYXJjaFJlc3BvbnNlLnJlc3VsdHNcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7IHJldHVybiBpdGVtLnR5cGUgJiYgaXRlbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd3ZWIgbWFwJyB9KVxuICAgICAgICBsZXQgaXRlbU1hdGNoVGl0bGUgPSBudWxsXG5cbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpdGVtTWF0Y2hUaXRsZSA9IGl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLnRpdGxlPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRpdGxlPy50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtTWF0Y2hUaXRsZSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbU1hdGNoVGl0bGUuaWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcXVlcnlTdHIyID0gYCR7d2ViTWFwUXVlcnlTdHJ9IEFORCBvd25lcjplc3JpIEFORCB0aXRsZTpcIiR7dGl0bGV9XCJgXG4gICAgICAgICAgcmV0dXJuIHBvcnRhbC5xdWVyeUl0ZW1zKHtcbiAgICAgICAgICAgIHN0YXJ0OiAxLFxuICAgICAgICAgICAgbnVtOiAxLFxuICAgICAgICAgICAgZjogJ2pzb24nLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5U3RyMlxuICAgICAgICAgIH0gYXMgYW55KS50aGVuKGFzeW5jIHNlYXJjaFJlc3BvbnNlMiA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBzZWFyY2hSZXNwb25zZTIucmVzdWx0c1xuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgJiYgaXRlbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd3ZWIgbWFwJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1swXVxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0uaWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUXVlcnlTdHJpbmdCeVR5cGVzIChpdGVtVHlwZXM6IHN0cmluZ1tdKSB7XG4gIGxldCBxdWVyeVN0ciA9ICcnXG4gIGNvbnN0IGFsbFR5cGVzID0gZ2V0QWxsSXRlbVR5cGVzKClcbiAgaWYgKGl0ZW1UeXBlcyAmJiBpdGVtVHlwZXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpdGVtVHlwZXMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHZhbGlkU3RyID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9ICcgdHlwZTpcIicgKyBpdGVtVHlwZXNbaV0gKyAnXCIgJ1xuICAgICAgICB2YWxpZFN0ciArPSBzXG4gICAgICAgIGlmIChpICE9PSBpdGVtVHlwZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHZhbGlkU3RyICs9ICcgT1IgJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHF1ZXJ5U3RyID0gJyAoICcgKyB2YWxpZFN0ciArICcgKSAnXG5cbiAgICAgIGNvbnN0IHN1bUFsbFR5cGVzID0gaXRlbVR5cGVzLmNvbmNhdChhbGxUeXBlcylcblxuICAgICAgY29uc3QgcmVtb3ZlZFR5cGVzID0gc3VtQWxsVHlwZXMuZmlsdGVyKHJlbW92ZWRUeXBlID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1UeXBlcy5ldmVyeSgoaXRlbVR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gIWl0ZW1UeXBlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVtb3ZlZFR5cGUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlZFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgcyA9ICcgLXR5cGU6XCInICsgcmVtb3ZlZFR5cGVzW2ldICsgJ1wiICdcbiAgICAgICAgcXVlcnlTdHIgKz0gc1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlTdHJcbn1cblxuZnVuY3Rpb24gZ2V0QWxsSXRlbVR5cGVzICgpIHtcbiAgbGV0IGFsbFR5cGVzID0gW11cbiAgLy8gV2ViIENvbnRlbnRcbiAgY29uc3QgbWFwczEgPSBbJ1dlYiBNYXAnLCAnV2ViIFNjZW5lJywgJ0NpdHlFbmdpbmUgV2ViIFNjZW5lJ11cbiAgY29uc3QgbGF5ZXJzMSA9IFsnRmVhdHVyZSBTZXJ2aWNlJywgJ01hcCBTZXJ2aWNlJywgJ0ltYWdlIFNlcnZpY2UnLCAnS01MJywgJ1dNUycsXG4gICAgJ0ZlYXR1cmUgQ29sbGVjdGlvbicsICdGZWF0dXJlIENvbGxlY3Rpb24gVGVtcGxhdGUnLCAnR2VvZGF0YSBTZXJ2aWNlJywgJ0dsb2JlIFNlcnZpY2UnXVxuICBjb25zdCB0b29sczEgPSBbJ0dlb21ldHJ5IFNlcnZpY2UnLCAnR2VvY29kaW5nIFNlcnZpY2UnLCAnTmV0d29yayBBbmFseXNpcyBTZXJ2aWNlJyxcbiAgICAnR2VvcHJvY2Vzc2luZyBTZXJ2aWNlJ11cbiAgY29uc3QgYXBwbGljYXRpb25zMSA9IFsnV2ViIE1hcHBpbmcgQXBwbGljYXRpb24nLCAnTW9iaWxlIEFwcGxpY2F0aW9uJywgJ0NvZGUgQXR0YWNobWVudCcsXG4gICAgJ09wZXJhdGlvbnMgRGFzaGJvYXJkIEFkZCBJbicsICdPcGVyYXRpb24gVmlldyddXG4gIGNvbnN0IGRhdGFmaWxlczEgPSBbJ1N5bWJvbCBTZXQnLCAnQ29sb3IgU2V0JywgJ1NoYXBlZmlsZScsICdDU1YnLCAnU2VydmljZSBEZWZpbml0aW9uJyxcbiAgICAnRG9jdW1lbnQgTGluaycsICdNaWNyb3NvZnQgV29yZCcsICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdNaWNyb3NvZnQgRXhjZWwnLCAnUERGJyxcbiAgICAnSW1hZ2UnLCAnVmlzaW8gRG9jdW1lbnQnXVxuICAvLyBEZXNrdG9wIENvbnRlbnRcbiAgY29uc3QgbWFwczIgPSBbJ01hcCBEb2N1bWVudCcsICdNYXAgUGFja2FnZScsICdUaWxlIFBhY2thZ2UnLCAnQXJjUGFkIFBhY2thZ2UnLFxuICAgICdFeHBsb3JlciBNYXAnLCAnR2xvYmUgRG9jdW1lbnQnLCAnU2NlbmUgRG9jdW1lbnQnLCAnUHVibGlzaGVkIE1hcCcsICdNYXAgVGVtcGxhdGUnLFxuICAgICdXaW5kb3dzIE1vYmlsZSBQYWNrYWdlJ11cbiAgY29uc3QgbGF5ZXJzMiA9IFsnTGF5ZXInLCAnTGF5ZXIgUGFja2FnZScsICdFeHBsb3JlciBMYXllciddXG4gIGNvbnN0IHRvb2xzMiA9IFsnR2VvcHJvY2Vzc2luZyBQYWNrYWdlJywgJ0dlb3Byb2Nlc3NpbmcgU2FtcGxlJywgJ0xvY2F0b3IgUGFja2FnZScsXG4gICAgJ1J1bGUgUGFja2FnZSddXG4gIGNvbnN0IGFwcGxpY2F0aW9uczIgPSBbJ1dvcmtmbG93IE1hbmFnZXIgUGFja2FnZScsICdEZXNrdG9wIEFwcGxpY2F0aW9uJyxcbiAgICAnRGVza3RvcCBBcHBsaWNhdGlvbiBUZW1wbGF0ZScsICdDb2RlIFNhbXBsZScsICdEZXNrdG9wIEFkZCBJbicsICdFeHBsb3JlciBBZGQgSW4nXVxuXG4gIGFsbFR5cGVzID0gYWxsVHlwZXMuY29uY2F0KG1hcHMxKS5jb25jYXQobGF5ZXJzMSkuY29uY2F0KHRvb2xzMSlcbiAgICAuY29uY2F0KGFwcGxpY2F0aW9uczEpLmNvbmNhdChkYXRhZmlsZXMxKVxuICBhbGxUeXBlcyA9IGFsbFR5cGVzLmNvbmNhdChtYXBzMikuY29uY2F0KGxheWVyczIpLmNvbmNhdCh0b29sczIpLmNvbmNhdChhcHBsaWNhdGlvbnMyKVxuICByZXR1cm4gYWxsVHlwZXNcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJy4uL2FyY2dpcy1qcy1hcGktbW9kdWxlLWxvYWRlcidcbmltcG9ydCB7IGdlb21ldHJ5VXRpbHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBMYXllclR5cGVzIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2VzL2FyY2dpcy1kYXRhLXNvdXJjZS1pbnRlcmZhY2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld1BhZGRpbmcge1xuICBsZWZ0OiBudW1iZXJcbiAgcmlnaHQ6IG51bWJlclxuICB0b3A6IG51bWJlclxuICBib3R0b206IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvb21Ub09wdGlvbnMge1xuICBzY2FsZT86IG51bWJlclxuICBxdWVyeVBhcmFtcz86IGFueVxuICBwYWRkaW5nPzogVmlld1BhZGRpbmdcbn1cblxubGV0IFRpbGVJbmZvID0gbnVsbFxuXG4vLyAndGFyZ2V0JyBwYXJhbWV0ZXIgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuLy8gICAqIGV4dGVudDtcbi8vICAgKiBncmFwaGljcztcbi8vICAgKiBhcnJheUdyYXBoaWNzOiBfX2VzcmkuR3JhcGhpY1tdW107XG4vLyAgICogbGF5ZXI7XG4vLyAgICogb2JqZWN0IHdpdGggYSBjb21iaW5hdGlvbiBvZiB7XG4vLyAgICAgICBsYXllcjpcbi8vICAgICAgIGV4dGVudDogb3B0aW9uYWxcbi8vICAgfVxuLy8gICAqIG9iamVjdCB3aXRoIGEgY29tYmluYXRpb24gb2Yge1xuLy8gICAgICAgbGF5ZXI6XG4vLyAgICAgICBncmFwaGljczogb3B0aW9uYWxcbi8vICAgfVxuLy8gJ29wdGlvbnMnIHBhcmFtZXRlciB7XG4vLyAgIHNjYWxlOiBvcHRpb25hbFxuLy8gICBxdWVyeVBhcmFtczogb3B0aW9uYWwsIGlmIHRoZXJlIGlzIG5vIGdyYXBoaWNzIG9yIGV4dGVudCBmb3IgJ3pvb20gdG8gbGF5ZXInLCB1c2UgcXVlcnlQYXJhbXMgdG8gcXVlcnkgbGF5ZXIgZXh0ZW50LlxuLy8gICBwYWRkaW5nOiBvcHRpb25hbCwgdXNlZCB0byBzZXQgdmlldy5wYWRkaW5nXG4vLyB9XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gem9vbVRvICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogYW55LCBvcHRpb25zOiBab29tVG9PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgaWYgKCF2aWV3KSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignSW52YWxpZCB0YXJnZXQuJykpXG4gIH1cblxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0ludmFsaWQgdGFyZ2V0LicpKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBsZXQgR3JhcGhpYzogdHlwZW9mIF9fZXNyaS5HcmFwaGljXG4gIGxldCBFeHRlbnQ6IHR5cGVvZiBfX2VzcmkuRXh0ZW50XG4gIGxldCBMYXllcjogdHlwZW9mIF9fZXNyaS5MYXllclxuXG4gIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9HcmFwaGljJyxcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnLFxuICAgICdlc3JpL2xheWVycy9MYXllcicsXG4gICAgJ2VzcmkvbGF5ZXJzL3N1cHBvcnQvVGlsZUluZm8nXG4gIF0pO1xuXG4gIFtHcmFwaGljLCBFeHRlbnQsIExheWVyLCBUaWxlSW5mb10gPSBtb2R1bGVzXG5cbiAgY29uc3QgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ1xuXG4gIGlmIChwYWRkaW5nICYmIHZpZXcucGFkZGluZykge1xuICAgIHZpZXcucGFkZGluZy5sZWZ0ID0gcGFkZGluZy5sZWZ0IHx8IDBcbiAgICB2aWV3LnBhZGRpbmcucmlnaHQgPSBwYWRkaW5nLnJpZ2h0IHx8IDBcbiAgICB2aWV3LnBhZGRpbmcudG9wID0gcGFkZGluZy50b3AgfHwgMFxuICAgIHZpZXcucGFkZGluZy5ib3R0b20gPSBwYWRkaW5nLmJvdHRvbSB8fCAwXG4gIH1cblxuICBsZXQgZXJyb3I6IEVycm9yID0gbnVsbFxuXG4gIHRyeSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEV4dGVudCkge1xuICAgICAgYXdhaXQgem9vbVRvRXh0ZW50KHZpZXcsIHRhcmdldCwgb3B0aW9ucy5zY2FsZSlcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiB0YXJnZXQubGVuZ3RoICYmIHRhcmdldFswXSBpbnN0YW5jZW9mIEdyYXBoaWMpIHtcbiAgICAgIGF3YWl0IHpvb21Ub0dyYXBoaWNzKHZpZXcsIHRhcmdldCwgb3B0aW9ucy5zY2FsZSlcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiB0YXJnZXQubGVuZ3RoICYmIHRhcmdldFswXSBpbnN0YW5jZW9mIEFycmF5ICYmIHRhcmdldFswXVswXSBpbnN0YW5jZW9mIEdyYXBoaWMpIHtcbiAgICAgIGF3YWl0IHpvb21Ub0FycmF5R3JhcGhpY3ModmlldywgdGFyZ2V0LCBvcHRpb25zLnNjYWxlKVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgIGF3YWl0IHpvb21Ub0xheWVyKHZpZXcsIHRhcmdldCwgbnVsbCwgbnVsbCwgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5sYXllciAmJiB0YXJnZXQubGF5ZXIgaW5zdGFuY2VvZiBMYXllciAmJiB0YXJnZXQuZXh0ZW50ICYmIHRhcmdldC5leHRlbnQgaW5zdGFuY2VvZiBFeHRlbnQpIHtcbiAgICAgIGF3YWl0IHpvb21Ub0xheWVyKHZpZXcsIHRhcmdldC5sYXllciwgbnVsbCwgdGFyZ2V0LmV4dGVudCwgb3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5sYXllciAmJiB0YXJnZXQubGF5ZXIgaW5zdGFuY2VvZiBMYXllciAmJiBBcnJheS5pc0FycmF5KHRhcmdldC5ncmFwaGljcykpIHtcbiAgICAgIGlmICh0YXJnZXQuZ3JhcGhpY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGF3YWl0IHpvb21Ub0xheWVyKHZpZXcsIHRhcmdldC5sYXllciwgbnVsbCwgbnVsbCwgb3B0aW9ucylcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmdyYXBoaWNzLmxlbmd0aCAmJiB0YXJnZXQuZ3JhcGhpY3NbMF0gaW5zdGFuY2VvZiBHcmFwaGljKSB7XG4gICAgICAgIGF3YWl0IHpvb21Ub0xheWVyKHZpZXcsIHRhcmdldC5sYXllciwgdGFyZ2V0LmdyYXBoaWNzLCBudWxsLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIHRhcmdldC5sZW5ndGggJiYgdGFyZ2V0WzBdIGluc3RhbmNlb2YgTGF5ZXIpIHtcbiAgICAgIGF3YWl0IHpvb21Ub0xheWVycyh2aWV3LCB0YXJnZXQsIG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdJbnZhbGlkIHRhcmdldC4nKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gY2F0Y2ggYWxsIHpvb20gdG8gZXJyb3JzIGFuZCB3YXJuaW5nXG4gICAgZXJyb3IgPSBlcnJcbiAgfVxuXG4gIC8vIG11c3QgcmVzZXQgdmlldy5wYWRkaW5nIGFmdGVyIHpvb21cbiAgaWYgKHZpZXcucGFkZGluZykge1xuICAgIHZpZXcucGFkZGluZy5sZWZ0ID0gMFxuICAgIHZpZXcucGFkZGluZy5yaWdodCA9IDBcbiAgICB2aWV3LnBhZGRpbmcudG9wID0gMFxuICAgIHZpZXcucGFkZGluZy5ib3R0b20gPSAwXG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLndhcm4oJ3pvb21UbyB3YXJuaW5nJywgZXJyb3IpXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld1NpemUge1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHRlbnRGcm9tU2NhbGUgKHZpZXdTaXplOiBWaWV3U2l6ZSwgZXh0ZW50OiBfX2VzcmkuRXh0ZW50LCBzY2FsZTogbnVtYmVyLCBuZWVkVG9BZGp1c3RIZWlnaHRUb0FzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZSkge1xuICByZXR1cm4gX2dldEV4dGVudEZyb21TY2FsZSh2aWV3U2l6ZSwgZXh0ZW50LCBzY2FsZSwgbmVlZFRvQWRqdXN0SGVpZ2h0VG9Bc3BlY3RSYXRpbylcbn1cblxuYXN5bmMgZnVuY3Rpb24gem9vbVRvR3JhcGhpY3MgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZ3JhcGhpY3M6IF9fZXNyaS5HcmFwaGljW10sIHNjYWxlPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgaWYgKHZpZXcudHlwZSA9PT0gJzNkJyAmJiAhc2NhbGUpIHtcbiAgICAvLyB0ZW1wb3Jhcnkgc29sdXRpb25cbiAgICAvLyBtaXNzIHNwYXRpYWxSZWZlcmVuY2UgY29udmVyc2lvblxuICAgIC8vIGdyYXBoaWNzIGV4dGVudCB1dGlscyBkb2VzIG5vdCB3b3JrIHdlbGwgb24gM2QgbWFwIHZpZXcgYmVmb3JlLiBCdXQgc2NlbmVWaWV3LmdvVG8oKSBtZXRob2Qgd29ya3MgYXMgZWNwZWN0ZWRcbiAgICByZXR1cm4gdmlldy5nb1RvKGdyYXBoaWNzKVxuICB9XG4gIHJldHVybiBncmFwaGljc0V4dGVudCh2aWV3LCBncmFwaGljcykudGhlbihhc3luYyAoZXh0ZW50KSA9PiB7XG4gICAgcmV0dXJuIHpvb21Ub0V4dGVudCh2aWV3LCBleHRlbnQsIHNjYWxlKVxuICB9KS5jYXRjaChhc3luYyAoZSkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKVxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiB6b29tVG9BcnJheUdyYXBoaWNzICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGFycmF5R3JhcGhpY3M6IF9fZXNyaS5HcmFwaGljW11bXSwgc2NhbGU/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICBpZiAoYXJyYXlHcmFwaGljcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgfSBlbHNlIGlmIChhcnJheUdyYXBoaWNzLmxlbmd0aCA9PT0gMSkge1xuICAgIC8vIHVzZSAnem9vbVRvR3JhcGhpY3MnIGlmIG9ubHkgb25lIGdyYXBoaWNzIGluIHRoZSAnYXJyYXlHcmFwaGljcycsIGJlY2F1c2UgdGhlIGV4dGVudCB1dGlscyBkb2VzIG5vdFxuICAgIC8vIHdvcmsgd2VsbCBvbiAzZCBtYXAgdmlldyBiZWZvcmUuIEJ1dCBzY2VuZVZpZXcuZ29UbygpIG1ldGhvZCB3b3JrcyBhcyBlY3BlY3RlZCAuXG4gICAgcmV0dXJuIHpvb21Ub0dyYXBoaWNzKHZpZXcsIGFycmF5R3JhcGhpY3NbMF0sIHNjYWxlKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByb21pc2VzID0gW11cbiAgICBhcnJheUdyYXBoaWNzLmZvckVhY2goZ3JhcGhpY3MgPT4ge1xuICAgICAgcHJvbWlzZXMucHVzaChncmFwaGljc0V4dGVudCh2aWV3LCBncmFwaGljcykuY2F0Y2goKCkgPT4gbnVsbCkpXG4gICAgfSlcblxuICAgIGxldCBmdWxsRXh0ZW50ID0gbnVsbFxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihleHRlbnRzID0+IHtcbiAgICAgIGV4dGVudHMuZm9yRWFjaChleHRlbnQgPT4ge1xuICAgICAgICBpZiAoZXh0ZW50KSB7XG4gICAgICAgICAgZnVsbEV4dGVudCA9IGZ1bGxFeHRlbnQgPyBmdWxsRXh0ZW50LnVuaW9uKGV4dGVudCkgOiBleHRlbnRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB6b29tVG9FeHRlbnQodmlldywgZnVsbEV4dGVudCwgc2NhbGUpXG4gICAgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB6b29tVG9MYXllcnMgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbGF5ZXJzOiBfX2VzcmkuTGF5ZXJbXSwgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gIGlmIChsYXllcnM/Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiB6b29tVG9MYXllcih2aWV3LCBsYXllcnNbMF0sIG51bGwsIG51bGwsIG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgbGV0IGZ1bGxFeHRlbnQgPSBudWxsXG4gICAgY29uc3QgbGF5ZXJFeHRlbnRQcm9taXNlcyA9IFtdXG4gICAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXJFeHRlbnRQcm9taXNlcy5wdXNoKGxheWVyRXh0ZW50KHZpZXcsIGxheWVyLCBvcHRpb25zPy5xdWVyeVBhcmFtcykpKVxuICAgIHJldHVybiBQcm9taXNlLmFsbChsYXllckV4dGVudFByb21pc2VzKS50aGVuKGV4dGVudHMgPT4ge1xuICAgICAgZXh0ZW50cy5mb3JFYWNoKGV4dGVudCA9PiB7XG4gICAgICAgIGlmIChleHRlbnQpIHtcbiAgICAgICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudCA/IGZ1bGxFeHRlbnQudW5pb24oZXh0ZW50KSA6IGV4dGVudFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGdvVG8odmlldywgZnVsbEV4dGVudClcbiAgICB9KVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHpvb21Ub0xheWVyICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGxheWVyOiBfX2VzcmkuTGF5ZXIsIGdyYXBoaWNzPzogX19lc3JpLkdyYXBoaWNbXSwgZXh0ZW50PzogX19lc3JpLkV4dGVudCwgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gIGxldCBzY2FsZSA9IG9wdGlvbnM/LnNjYWxlXG4gIGxldCB0YXJnZXRFeHRlbnRcblxuICBpZiAoZXh0ZW50ICYmIGlzVmFsaWRFeHRlbnQoZXh0ZW50KSkge1xuICAgIHRhcmdldEV4dGVudCA9IGV4dGVudFxuICB9IGVsc2UgaWYgKGdyYXBoaWNzICYmIGdyYXBoaWNzLmxlbmd0aCA+IDApIHtcbiAgICB0YXJnZXRFeHRlbnQgPSBhd2FpdCBncmFwaGljc0V4dGVudCh2aWV3LCBncmFwaGljcylcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRFeHRlbnQgPSBhd2FpdCBsYXllckV4dGVudCh2aWV3LCBsYXllciwgb3B0aW9ucz8ucXVlcnlQYXJhbXMpXG4gIH1cbiAgaWYgKCFpc1ZhbGlkRXh0ZW50KHRhcmdldEV4dGVudCkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdJbnZhbGlkIGV4dGVudC4nKSlcbiAgfVxuICBjb25zdCByZXN1bHRFeHRlbnRzID0gYXdhaXQgcHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShbdGFyZ2V0RXh0ZW50XSwgdmlldy5zcGF0aWFsUmVmZXJlbmNlKVxuICB0YXJnZXRFeHRlbnQgPSByZXN1bHRFeHRlbnRzWzBdXG4gIGlmIChzY2FsZSkge1xuICAgIHJldHVybiBnZXRFeHRlbnRGb3JTY2FsZUJ5Vmlldyh2aWV3LCB0YXJnZXRFeHRlbnQsIHNjYWxlKS50aGVuKChleHRlbnQpID0+IHtcbiAgICAgIHJldHVybiBnb1RvKHZpZXcsIGV4dGVudClcbiAgICB9KVxuICB9XG5cbiAgaWYgKHZpZXcudHlwZSA9PT0gJzNkJykge1xuICAgIHJldHVybiB2aWV3LmdvVG8odGFyZ2V0RXh0ZW50KVxuICB9IGVsc2Uge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBsZXQgbWluU2NhbGUgPSBsYXllci5taW5TY2FsZSB8fCAwXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGxldCBtYXhTY2FsZSA9IGxheWVyLm1heFNjYWxlIHx8IDBcbiAgICBpZiAoaXNTaW5nbGVQb2ludEV4dGVudCh0YXJnZXRFeHRlbnQpKSB7XG4gICAgICBsZXQgdGFyZ2V0U2NhbGUgPSBnZXRUYXJnZXRTY2FsZSh2aWV3LCBtaW5TY2FsZSwgbWF4U2NhbGUsIDMpXG4gICAgICBpZiAodGFyZ2V0U2NhbGUpIHtcbiAgICAgICAgdGFyZ2V0RXh0ZW50ID0gYWRqdXN0RXh0ZW50VG9Bc3BlY3RSYXRpbyh2aWV3LCB0YXJnZXRFeHRlbnQpXG4gICAgICAgIHJldHVybiBnZXRFeHRlbnRGb3JTY2FsZUJ5Vmlldyh2aWV3LCB0YXJnZXRFeHRlbnQsIHRhcmdldFNjYWxlKS50aGVuKChleHRlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZ29Ubyh2aWV3LCBleHRlbnQpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ29Ubyh2aWV3LCB0YXJnZXRFeHRlbnQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldEV4dGVudCA9IGFkanVzdEV4dGVudFRvQXNwZWN0UmF0aW8odmlldywgdGFyZ2V0RXh0ZW50KVxuICAgICAgcmV0dXJuIGdldFNjYWxlRm9yRXh0ZW50KHZpZXcsIHRhcmdldEV4dGVudCkudGhlbigoZXhwZWN0U2NhbGUpID0+IHtcbiAgICAgICAgaWYgKG1pblNjYWxlID4gMCAmJiBleHBlY3RTY2FsZSA+IG1pblNjYWxlKSB7XG4gICAgICAgICAgLy8gem9vbSBpblxuICAgICAgICAgIG1pblNjYWxlID0gZ2V0U2NhbGVGb3JOZXh0VGlsZUxldmVsKHZpZXcsIG1pblNjYWxlLCB0cnVlKVxuICAgICAgICAgIHJldHVybiBnZXRFeHRlbnRGb3JTY2FsZUJ5Vmlldyh2aWV3LCB0YXJnZXRFeHRlbnQsIG1pblNjYWxlKS50aGVuKChleHRlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBnb1RvKHZpZXcsIGV4dGVudClcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKGV4cGVjdFNjYWxlIDwgbWF4U2NhbGUpIHtcbiAgICAgICAgICAvLyB6b29tIG91dFxuICAgICAgICAgIG1heFNjYWxlID0gZ2V0U2NhbGVGb3JOZXh0VGlsZUxldmVsKHZpZXcsIG1heFNjYWxlLCBmYWxzZSlcbiAgICAgICAgICByZXR1cm4gZ2V0RXh0ZW50Rm9yU2NhbGVCeVZpZXcodmlldywgdGFyZ2V0RXh0ZW50LCBtYXhTY2FsZSkudGhlbigoZXh0ZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZ29Ubyh2aWV3LCBleHRlbnQpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZ29Ubyh2aWV3LCB0YXJnZXRFeHRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHpvb21Ub0V4dGVudCAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBleHRlbnQ6IF9fZXNyaS5FeHRlbnQsIHNjYWxlPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGV4dGVudCA9IGV4dGVudC5jbG9uZSgpXG4gIC8vIGlmKHZpZXcudHlwZSA9PT0gJzNkJyAmJiAhc2NhbGUpIHtcbiAgLy8gIC8vIHRlbXBvcmFyeSBzb2x1dGlvblxuICAvLyAgcmV0dXJuIHZpZXcuZ29UbyhleHRlbnQpO1xuICAvLyB9XG5cbiAgaWYgKCFpc1ZhbGlkRXh0ZW50KGV4dGVudCkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdJbnZhbGlkIGV4dGVudC4nKSlcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0VG9TcGF0aWFsUmVmZXJlbmNlKFtleHRlbnRdLCB2aWV3LnNwYXRpYWxSZWZlcmVuY2UpLnRoZW4oKHJlc3VsdEV4dGVudHMpID0+IHtcbiAgICBsZXQgcmVzdWx0RXh0ZW50ID0gcmVzdWx0RXh0ZW50cyAmJiByZXN1bHRFeHRlbnRzWzBdXG4gICAgaWYgKCFyZXN1bHRFeHRlbnQpIHtcbiAgICAgIHJlc3VsdEV4dGVudCA9IGV4dGVudFxuICAgIH1cblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IFVucmVhY2hhYmxlIGNvZGUgZXJyb3JcbiAgICBpZiAoaXNTaW5nbGVQb2ludEV4dGVudChyZXN1bHRFeHRlbnQpKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBVbnJlYWNoYWJsZSBjb2RlIGVycm9yXG4gICAgICByZXR1cm4gY29udmVydFNpbmdsZVBvaW50RXh0ZW50KHZpZXcsIHJlc3VsdEV4dGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdEV4dGVudFxuICAgIH1cbiAgfSkudGhlbigoZXh0ZW50KSA9PiB7XG4gICAgaWYgKHNjYWxlKSB7XG4gICAgICByZXR1cm4gZ2V0RXh0ZW50Rm9yU2NhbGVCeVZpZXcodmlldywgZXh0ZW50IGFzIGFueSwgc2NhbGUsIGZhbHNlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXh0ZW50XG4gICAgfVxuICB9KS50aGVuKChleHRlbnQpID0+IHtcbiAgICByZXR1cm4gZ29Ubyh2aWV3LCBleHRlbnQgYXMgYW55KVxuICB9KS5jYXRjaChhc3luYyAoZSkgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKVxuICB9KVxufVxuXG5mdW5jdGlvbiBnb1RvICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGV4dGVudDogX19lc3JpLkV4dGVudCk6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vIGRlbGF5IGJlZm9yZSB1cGRhdGluZyBvZiB2aWV3IHR1cm5zIHRydWUsIDQwMG1zIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8vLyB0aGVyZSBpcyBhIGNvbmZsaWN0IGZvciB6b29taW5nIHdoZW4gdGhlIGxheWVyIHZpZXIgaXMgdXBkYXRpbmcsIHN1Y2ggYXMgJ3pvb20gdG8nIGFuZCAnZmlsdGVyJy5cbiAgICAgIC8vLy8gdGhpcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvbiwgaXQgY2FuIHJlZHVjZSB0aGUgZnJlcXVlbmN5IG9mIHRoZSBwcm9ibGVtIHJhdGhlciB0aGFuIHNvbHZlIGl0IGNvbXBsZXRlbHkuXG4gICAgICAvL2lmICh2aWV3LnVwZGF0aW5nKSB7XG4gICAgICAvLyAgY29uc3QgaGFuZGxlciA9IHZpZXcud2F0Y2goJ3VwZGF0aW5nJywgdmFsdWUgPT4ge1xuICAgICAgLy8gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8gICAgICB2aWV3LmdvVG8oZXh0ZW50KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXG4gICAgICAvLyAgICAgIGhhbmRsZXIucmVtb3ZlKClcbiAgICAgIC8vICAgIH1cbiAgICAgIC8vICB9KVxuICAgICAgLy99IGVsc2Uge1xuICAgICAgLy8gIHZpZXcuZ29UbyhleHRlbnQpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKS5jYXRjaCgoKSA9PiByZWplY3QoKSlcbiAgICAgIC8vfVxuICAgICAgdmlldy5nb1RvKGV4dGVudCkudGhlbigoKSA9PiB7IHJlc29sdmUoKSB9KS5jYXRjaCgoKSA9PiB7IHJlamVjdCgpIH0pXG4gICAgfSwgNDAwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRXh0ZW50IChleHRlbnQ6IF9fZXNyaS5FeHRlbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGV4dGVudCAmJiBpc1ZhbGlkVmFsdWUoZXh0ZW50LnhtaW4pICYmXG4gICAgaXNWYWxpZFZhbHVlKGV4dGVudC55bWluKSAmJlxuICAgIGlzVmFsaWRWYWx1ZShleHRlbnQueG1heCkgJiZcbiAgICBpc1ZhbGlkVmFsdWUoZXh0ZW50LnltYXgpXG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRWYWx1ZSAoZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGlmIChlID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gISFlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRTaW5nbGVQb2ludEV4dGVudCAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBleHRlbnQ6IF9fZXNyaS5FeHRlbnQpOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcbiAgLy8gY29uc3QgdGFyZ2V0U2NhbGUgPSBnZXRNZWRpYW5TY2FsZSh2aWV3LCB2aWV3LnNjYWxlLCAwKTtcbiAgY29uc3QgdGFyZ2V0U2NhbGUgPSBnZXRUYXJnZXRTY2FsZSh2aWV3LCAwLCAwLCAzKVxuICBpZiAodGFyZ2V0U2NhbGUpIHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0RXh0ZW50Rm9yU2NhbGVCeVZpZXcodmlldywgZXh0ZW50LCB0YXJnZXRTY2FsZSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoKVxuICB9XG59XG5cbmVudW0gU2luZ2xlUG9pbnRPZmZTZXQge1xuICBYID0gMC4wMDAxLFxuICBZID0gMC4wMDAxXG59XG5cbmZ1bmN0aW9uIGlzU2luZ2xlUG9pbnRFeHRlbnQgKGV4dGVudDogX19lc3JpLkV4dGVudCk6IGJvb2xlYW4ge1xuICBpZiAoZXh0ZW50LnhtaW4gKyBTaW5nbGVQb2ludE9mZlNldC5YID09PSBleHRlbnQueG1heCAtIFNpbmdsZVBvaW50T2ZmU2V0LlggJiZcbiAgICAgZXh0ZW50LnltaW4gKyBTaW5nbGVQb2ludE9mZlNldC5ZID09PSBleHRlbnQueW1heCAtIFNpbmdsZVBvaW50T2ZmU2V0LllcbiAgKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAvLyBpZihleHRlbnQud2lkdGggPD0gU2luZ2xlUG9pbnRPZmZTZXQuWCAqIDIgJiYgZXh0ZW50LmhlaWdodCA8PSBTaW5nbGVQb2ludE9mZlNldC5ZICogMikge1xuICAvLyAgcmV0dXJuIHRydWU7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICByZXR1cm4gZmFsc2U7XG4gIC8vIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ3JhcGhpY3NFeHRlbnQgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZ3JhcGhpY3NQYXJhbTogX19lc3JpLkdyYXBoaWNbXSwgb3B0aW9uOiBhbnkgPSB7fSk6IFByb21pc2U8X19lc3JpLkV4dGVudD4ge1xuICBsZXQgbGF5ZXIgPSBncmFwaGljc1BhcmFtICYmIGdyYXBoaWNzUGFyYW1bMF0gJiYgZ3JhcGhpY3NQYXJhbVswXS5sYXllclxuICBpZiAobGF5ZXIgJiYgbGF5ZXIudHlwZSA9PT0gJ3NjZW5lJykge1xuICAgIHJldHVybiBhd2FpdCBncmFwaGljc0V4dGVudEZvclNjZW5lTGF5ZXIoZ3JhcGhpY3NQYXJhbSwgbGF5ZXIgYXMgX19lc3JpLlNjZW5lTGF5ZXIsIG9wdGlvbi5mYWN0b3IpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHZpZXcudHlwZSA9PT0gJzNkJykge1xuICAgICAgcmV0dXJuIGF3YWl0IGdyYXBoaWNzRXh0ZW50QmFzZShncmFwaGljc1BhcmFtLCAzKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXdhaXQgZ3JhcGhpY3NFeHRlbnRCYXNlKGdyYXBoaWNzUGFyYW0pXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdyYXBoaWNzRXh0ZW50Rm9yU2NlbmVMYXllciAoZ3JhcGhpY3NQYXJhbTogX19lc3JpLkdyYXBoaWNbXSwgc2NlbmVMYXllcjogX19lc3JpLlNjZW5lTGF5ZXIsIGZhY3Rvcj86IG51bWJlcik6IFByb21pc2U8X19lc3JpLkV4dGVudD4ge1xuICAvLyBjYW4ndCBnZXQgZ2VvbWV0cnkgZnJvbSBhIGdyYXBoaWMgb2Ygc2NlbmVMYXllci5cbiAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcbiAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcbiAgICBjb25zdCBbUXVlcnldID0gbW9kdWxlc1xuICAgIGlmIChzY2VuZUxheWVyKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXG4gICAgICBxdWVyeS5vYmplY3RJZHMgPSBncmFwaGljc1BhcmFtLm1hcChncmFwaGljID0+IGdyYXBoaWMuYXR0cmlidXRlc1tzY2VuZUxheWVyLm9iamVjdElkRmllbGRdKVxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICByZXR1cm4gc2NlbmVMYXllci5xdWVyeUV4dGVudChxdWVyeSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuY291bnQgPT09IDEpIHtcbiAgICAgICAgICAvLyBzaW5nbGUgZ3JhcGhpY1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZXh0ZW50LmV4cGFuZCgzLjUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5leHRlbnQuZXhwYW5kKDIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpXG4gICAgfVxuICB9KS5jYXRjaChhc3luYyAoZSkgPT4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZSkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdyYXBoaWNzRXh0ZW50QmFzZSAoZ3JhcGhpY3NQYXJhbTogX19lc3JpLkdyYXBoaWNbXSwgZmFjdG9yPzogbnVtYmVyKTogUHJvbWlzZTxfX2VzcmkuRXh0ZW50PiB7XG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAnZXNyaS9HcmFwaGljJyxcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnLFxuICAgICdlc3JpL2dlb21ldHJ5L1BvaW50J1xuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgIGxldCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWNcbiAgICBsZXQgRXh0ZW50OiB0eXBlb2YgX19lc3JpLkV4dGVudFxuICAgIGxldCBQb2ludDogdHlwZW9mIF9fZXNyaS5Qb2ludFxuICAgIGxldCBleHQgPSBudWxsXG4gICAgbGV0IGdyYXBoaWNzID0gZ3JhcGhpY3NQYXJhbTtcbiAgICBbR3JhcGhpYywgRXh0ZW50LCBQb2ludF0gPSBtb2R1bGVzXG4gICAgdHJ5IHtcbiAgICAgIGlmIChncmFwaGljcyAmJlxuICAgICAgICAgZ3JhcGhpY3MubGVuZ3RoID09PSAxICYmXG4gICAgICAgICBncmFwaGljc1swXS5nZW9tZXRyeSAmJlxuICAgICAgICAgZ3JhcGhpY3NbMF0uZ2VvbWV0cnkuZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkuZ2VvbWV0cnkuTXVsdGlwb2ludCcgJiZcbiAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgIGdyYXBoaWNzWzBdLmdlb21ldHJ5LnBvaW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBjb25zdCBtUG9pbnQgPSBncmFwaGljc1swXS5nZW9tZXRyeS5wb2ludHNbMF1cbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgUG9pbnQoe1xuICAgICAgICAgIHg6IG1Qb2ludFswXSxcbiAgICAgICAgICB5OiBtUG9pbnRbMV0sXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZ3JhcGhpY3NbMF0uZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxuICAgICAgICB9KVxuICAgICAgICBncmFwaGljcyA9IFtuZXcgR3JhcGhpYyh7IGdlb21ldHJ5OiBwb2ludCB9KV1cbiAgICAgIH1cblxuICAgICAgaWYgKGdyYXBoaWNzICYmIGdyYXBoaWNzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICBncmFwaGljc1swXS5nZW9tZXRyeSAmJlxuICAgICAgICBncmFwaGljc1swXS5nZW9tZXRyeS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5nZW9tZXRyeS5Qb2ludCcpIHtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBncmFwaGljc1swXS5nZW9tZXRyeVxuICAgICAgICBleHQgPSBuZXcgRXh0ZW50KHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgeG1pbjogZ2VvbWV0cnkueCAtIFNpbmdsZVBvaW50T2ZmU2V0LlgsXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgIHltaW46IGdlb21ldHJ5LnkgLSBTaW5nbGVQb2ludE9mZlNldC5ZLFxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICB4bWF4OiBnZW9tZXRyeS54ICsgU2luZ2xlUG9pbnRPZmZTZXQuWCxcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgeW1heDogZ2VvbWV0cnkueSArIFNpbmdsZVBvaW50T2ZmU2V0LlksXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChncmFwaGljcyAmJiBncmFwaGljcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGV4dCA9IF9ncmFwaGljc0V4dGVudEJhc2UoZ3JhcGhpY3MsIEV4dGVudClcbiAgICAgICAgaWYgKGV4dCkge1xuICAgICAgICAgIGlmIChmYWN0b3IgJiYgZmFjdG9yID4gMCkge1xuICAgICAgICAgICAgZXh0ID0gZXh0LmV4cGFuZChmYWN0b3IpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZXh0XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpXG4gICAgfVxuICB9KS5jYXRjaChhc3luYyAoZSkgPT4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZSkpXG59XG5cbmZ1bmN0aW9uIF9ncmFwaGljc0V4dGVudEJhc2UgKGdyYXBoaWNzOiBfX2VzcmkuR3JhcGhpY1tdLCBFeHRlbnQpOiBfX2VzcmkuRXh0ZW50IHtcbiAgaWYgKCFncmFwaGljcyB8fCAhZ3JhcGhpY3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGxldCBmdWxsRXh0ZW50ID0gbnVsbDsgbGV0IGluZGV4OyBsZXQgbnVtR3JhcGhpY3MgPSBncmFwaGljcy5sZW5ndGhcblxuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HcmFwaGljczsgaW5kZXgrKykge1xuICAgIGNvbnN0IGdlb21ldHJ5ID0gZ3JhcGhpY3NbaW5kZXhdLmdlb21ldHJ5XG4gICAgaWYgKCFnZW9tZXRyeSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZXh0ZW50XG5cbiAgICBpZiAoIWV4dGVudCAmJiBnZW9tZXRyeS50eXBlID09PSAncG9pbnQnICYmIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnQpLnggIT0gbnVsbCAmJiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KS55ICE9IG51bGwpIHtcbiAgICAgIGV4dGVudCA9IG5ldyBFeHRlbnQoe1xuICAgICAgICB4bWluOiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KS54LFxuICAgICAgICB5bWluOiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KS55LFxuICAgICAgICB4bWF4OiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KS54LFxuICAgICAgICB5bWF4OiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50KS55LFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICghZXh0ZW50KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChmdWxsRXh0ZW50KSB7XG4gICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudC51bmlvbihleHRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGxFeHRlbnQgPSBleHRlbnRcbiAgICB9XG4gIH1cblxuICBpZiAoIWZ1bGxFeHRlbnQgfHwgZnVsbEV4dGVudC53aWR0aCA8IDAgfHwgZnVsbEV4dGVudC5oZWlnaHQgPCAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmdWxsRXh0ZW50XG59XG5cbi8qKlxuICogbG9kOntsZXZlbCwgcmVzb2x1dGlvbiwgc2NhbGV9XG4gKi9cbmZ1bmN0aW9uIGdldE1hcExvZHMgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyk6IGFueVtdIHtcbiAgbGV0IGxvZHMgPSBbXVxuICBjb25zdCBiYXNlTGF5ZXJzID0gdmlldy5tYXAuYmFzZW1hcC5iYXNlTGF5ZXJzXG4gIGJhc2VMYXllcnMuZm9yRWFjaCgoYmFzZUxheWVyKSA9PiB7XG4gICAgaWYgKGJhc2VMYXllciAmJlxuICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICBiYXNlTGF5ZXIudGlsZUluZm8gJiZcbiAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgYmFzZUxheWVyLnRpbGVJbmZvLmxvZHMgJiZcbiAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgbG9kcy5sZW5ndGggPCBiYXNlTGF5ZXIudGlsZUluZm8ubG9kcy5sZW5ndGgpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIGxvZHMgPSBiYXNlTGF5ZXIudGlsZUluZm8ubG9kc1xuICAgIH1cbiAgfSlcblxuICAvLyBsb2RzID0gbG9kcy5tYXAoKGxvZCkgPT4gbG9kLnRvSlNPTigpKTtcbiAgaWYgKGxvZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFRpbGVJbmZvLmNyZWF0ZSgpLmxvZHNcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9kc1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIGdldE1lZGlhblNjYWxlKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbWluU2NhbGU6IG51bWJlciwgbWF4U2NhbGU6IG51bWJlcik6IG51bWJlciB7XG4vLyAgcmV0dXJuIGdldFRhcmdldFNjYWxlKHZpZXcsIG1pblNjYWxlLCBtYXhTY2FsZSwgMik7XG4vLyB9XG5cbmZ1bmN0aW9uIGdldFRhcmdldFNjYWxlICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIG1pblNjYWxlOiBudW1iZXIsIG1heFNjYWxlOiBudW1iZXIsIGZhY3RvcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbWFwTG9kcyA9IGdldE1hcExvZHModmlldylcbiAgbGV0IHRhcmdldFNjYWxlXG4gIGxldCBtaWdyYXRpb25QYXJhbSA9IDFcbiAgaWYgKG1hcExvZHMpIHtcbiAgICBjb25zdCB2aXNpYmxlU2NhbGVzID0gW11cbiAgICBjb25zdCBsZXNzVGhhbk1heFNjYWxlcyA9IFtdXG5cbiAgICBtYXBMb2RzLmZvckVhY2goKG1hcExvZCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAobWluU2NhbGUgPiAwICYmIG1hcExvZC5zY2FsZSA+IG1pblNjYWxlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAobWFwTG9kLnNjYWxlIDwgbWF4U2NhbGUpIHtcbiAgICAgICAgbGVzc1RoYW5NYXhTY2FsZXMucHVzaChtYXBMb2Quc2NhbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aXNpYmxlU2NhbGVzLnB1c2gobWFwTG9kLnNjYWxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdmlzaWJsZVNjYWxlcy5yZXZlcnNlKClcbiAgICBsZXQgdGFyZ2V0SW5kZXhcbiAgICBpZiAodmlzaWJsZVNjYWxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgbWlncmF0aW9uUGFyYW0gPSBsZXNzVGhhbk1heFNjYWxlcy5sZW5ndGggPyBsZXNzVGhhbk1heFNjYWxlcy5sZW5ndGggLyBtYXBMb2RzLmxlbmd0aCA6IDFcbiAgICAgIHRhcmdldEluZGV4ID0gTWF0aC5mbG9vcigodmlzaWJsZVNjYWxlcy5sZW5ndGggLSAxKSAvIChmYWN0b3IgLyBtaWdyYXRpb25QYXJhbSkpXG4gICAgICB0YXJnZXRTY2FsZSA9IHZpc2libGVTY2FsZXNbdGFyZ2V0SW5kZXhdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldFNjYWxlID0gbnVsbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAobWluU2NhbGUgPT09IDApIHtcbiAgICAgIHRhcmdldFNjYWxlID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRTY2FsZSA9IChtaW5TY2FsZSAtIG1heFNjYWxlKSAvIGZhY3RvclxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0U2NhbGVcbn1cblxuZnVuY3Rpb24gZ2V0U2NhbGVGb3JOZXh0VGlsZUxldmVsICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHNjYWxlOiBudW1iZXIsIHpvb21JbjogYm9vbGVhbik6IG51bWJlciB7XG4gIGxldCBpXG4gIGNvbnN0IG1hcExvZHMgPSBnZXRNYXBMb2RzKHZpZXcpXG4gIGlmIChtYXBMb2RzKSB7XG4gICAgaWYgKHpvb21Jbikge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG1hcExvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1hcExvZHNbaV0uc2NhbGUgPCBzY2FsZSkge1xuICAgICAgICAgIHJldHVybiBtYXBMb2RzW2ldLnNjYWxlIC0gMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwTG9kc1ttYXBMb2RzLmxlbmd0aCAtIDFdLnNjYWxlIC0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSBtYXBMb2RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChtYXBMb2RzW2ldLnNjYWxlID4gc2NhbGUpIHtcbiAgICAgICAgICByZXR1cm4gbWFwTG9kc1tpXS5zY2FsZSArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1hcExvZHNbMF0uc2NhbGUgKyAxXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh6b29tSW4pIHtcbiAgICAgIHJldHVybiBzY2FsZSAtIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNjYWxlICsgMVxuICAgIH1cbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuIHNjYWxlXG59XG5cbmZ1bmN0aW9uIGFkanVzdEV4dGVudFRvQXNwZWN0UmF0aW8gKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZXh0ZW50OiBfX2VzcmkuRXh0ZW50KTogX19lc3JpLkV4dGVudCB7XG4gIGNvbnN0IG1hcFJhdGlvID0gdmlldy5zaXplWzBdIC8gdmlldy5zaXplWzFdIC8vIHdpZHRoIC8gaGVpZ2h0XG4gIGNvbnN0IGV4dGVudFJhdGlvID0gZXh0ZW50LndpZHRoIC8gZXh0ZW50LmhlaWdodFxuXG4gIGNvbnN0IGNlbnRlclggPSBleHRlbnQuY2VudGVyLnhcbiAgY29uc3QgY2VudGVyWSA9IGV4dGVudC5jZW50ZXIueVxuXG4gIGlmIChleHRlbnRSYXRpbyA+IG1hcFJhdGlvKSB7XG4gICAgY29uc3QgeUJ1ZiA9IGV4dGVudC53aWR0aCAvIG1hcFJhdGlvIC8gMlxuICAgIGV4dGVudC55bWluID0gY2VudGVyWSAtIHlCdWZcbiAgICBleHRlbnQueW1heCA9IGNlbnRlclkgKyB5QnVmXG4gIH0gZWxzZSBpZiAoZXh0ZW50UmF0aW8gPCBtYXBSYXRpbykge1xuICAgIGNvbnN0IHhCdWYgPSBleHRlbnQuaGVpZ2h0ICogbWFwUmF0aW8gLyAyXG4gICAgZXh0ZW50LnhtaW4gPSBjZW50ZXJYIC0geEJ1ZlxuICAgIGV4dGVudC54bWF4ID0gY2VudGVyWCArIHhCdWZcbiAgfVxuXG4gIHJldHVybiBleHRlbnRcbn1cblxuZnVuY3Rpb24gYWRqdXN0SGVpZ2h0VG9Bc3BlY3RSYXRpbyAodmlld1NpemU6IFZpZXdTaXplLCBleHRlbnQ6IF9fZXNyaS5FeHRlbnQpOiBfX2VzcmkuRXh0ZW50IHtcbiAgLy8gYWRqdXN0IHRoZSBoZWlnaHQgb2YgdGhlIGV4dGVudCBzbyBpdCB3b24ndCBtZXNzIHVwIG91ciBzY2FsZSBjYWxjdWxhdGlvbnMgdGhhdCB3ZSBkbyB3aXRoIHRoZSB3aWR0aFxuICAvLyBtYWtlIGl0IGEgbGl0dGxlIHNtYWxsZXIgdG8gYmUgc3VyZVxuICBjb25zdCBidWYgPSAoZXh0ZW50LndpZHRoICogKHZpZXdTaXplLmhlaWdodCAvIHZpZXdTaXplLndpZHRoKSkgLyA1XG4gIGNvbnN0IGNlbnRlclkgPSBleHRlbnQuY2VudGVyLnlcbiAgZXh0ZW50LnltaW4gPSBjZW50ZXJZIC0gYnVmXG4gIGV4dGVudC55bWF4ID0gY2VudGVyWSArIGJ1ZlxuICByZXR1cm4gZXh0ZW50XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEV4dGVudEZvclNjYWxlQnlWaWV3ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGV4dGVudDogX19lc3JpLkV4dGVudCwgc2NhbGU6IG51bWJlciwgbmVlZFRvQWRqdXN0SGVpZ2h0VG9Bc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcbiAgcmV0dXJuIF9nZXRFeHRlbnRGcm9tU2NhbGUoeyB3aWR0aDogdmlldy5zaXplWzBdLCBoZWlnaHQ6IHZpZXcuc2l6ZVsxXSB9LCBleHRlbnQsIHNjYWxlLCBuZWVkVG9BZGp1c3RIZWlnaHRUb0FzcGVjdFJhdGlvKVxufVxuXG5hc3luYyBmdW5jdGlvbiBfZ2V0RXh0ZW50RnJvbVNjYWxlICh2aWV3U2l6ZTogVmlld1NpemUsIGV4dGVudDogX19lc3JpLkV4dGVudCwgc2NhbGU6IG51bWJlciwgbmVlZFRvQWRqdXN0SGVpZ2h0VG9Bc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcbiAgaWYgKG5lZWRUb0FkanVzdEhlaWdodFRvQXNwZWN0UmF0aW8pIHtcbiAgICBleHRlbnQgPSBhZGp1c3RIZWlnaHRUb0FzcGVjdFJhdGlvKHZpZXdTaXplLCBleHRlbnQuY2xvbmUoKSlcbiAgfVxuICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgJ2VzcmkvY29uZmlnJyxcbiAgICAnZXNyaS9nZW9tZXRyeS9zdXBwb3J0L1dLSURVbml0Q29udmVyc2lvbidcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcbiAgICBsZXQgZXNyaUNvbmZpZ1xuICAgIGxldCBXS0lEVW5pdENvbnZlcnNpb247XG4gICAgW2VzcmlDb25maWcsIFdLSURVbml0Q29udmVyc2lvbl0gPSBtb2R1bGVzXG4gICAgY29uc3QgbWFwV2lkdGggPSB2aWV3U2l6ZS53aWR0aFxuICAgIGNvbnN0IGluY2hlc1Blck1ldGVyID0gMzkuMzdcbiAgICBjb25zdCBkZWNEZWdUb01ldGVycyA9IDIwMDE1MDc3LjAgLyAxODAuMFxuICAgIGNvbnN0IGxvb2t1cCA9IFdLSURVbml0Q29udmVyc2lvblxuICAgIGxldCB3a2lkOyBsZXQgd2t0OyBsZXQgc3IgPSBleHRlbnQuc3BhdGlhbFJlZmVyZW5jZVxuICAgIGlmIChzcikge1xuICAgICAgd2tpZCA9IHNyLndraWRcbiAgICAgIHdrdCA9IHNyLndrdFxuICAgIH1cblxuICAgIGxldCB1bml0VmFsdWUgPSBudWxsXG4gICAgaWYgKHdraWQpIHtcbiAgICAgIHVuaXRWYWx1ZSA9IGxvb2t1cC52YWx1ZXNbbG9va3VwW3draWRdXVxuICAgIH0gZWxzZSBpZiAod2t0ICYmICh3a3Quc2VhcmNoKC9eUFJPSkNTL2kpICE9PSAtMSkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IC9VTklUXFxbKFteXFxdXSspXFxdXFxdJC9pLmV4ZWMod2t0KVxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHRbMV0pIHtcbiAgICAgICAgdW5pdFZhbHVlID0gcGFyc2VGbG9hdChyZXN1bHRbMV0uc3BsaXQoJywnKVsxXSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmV3RXh0ZW50ID0gZXh0ZW50LmV4cGFuZCgoKHNjYWxlICogbWFwV2lkdGgpIC9cbiAgICAgICAgICAgICAgICAgICAgKCh1bml0VmFsdWUgfHwgZGVjRGVnVG9NZXRlcnMpICogaW5jaGVzUGVyTWV0ZXIgKiAoZXNyaUNvbmZpZy5zY3JlZW5EUEkgfHwgOTYpKSkgL1xuICAgICAgICAgICAgICAgICAgICBleHRlbnQud2lkdGgpXG4gICAgcmV0dXJuIG5ld0V4dGVudFxuICB9KS5jYXRjaChhc3luYyAoZSkgPT4gYXdhaXQgUHJvbWlzZS5yZWplY3QoKSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2NhbGVGb3JFeHRlbnQgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZXh0ZW50OiBfX2VzcmkuRXh0ZW50KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICdlc3JpL2NvbmZpZycsXG4gICAgJ2VzcmkvZ2VvbWV0cnkvc3VwcG9ydC9XS0lEVW5pdENvbnZlcnNpb24nXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XG4gICAgbGV0IGVzcmlDb25maWdcbiAgICBsZXQgV0tJRFVuaXRDb252ZXJzaW9uO1xuICAgIFtlc3JpQ29uZmlnLCBXS0lEVW5pdENvbnZlcnNpb25dID0gbW9kdWxlc1xuICAgIGxldCBzY2FsZVxuICAgIGNvbnN0IG1hcFdpZHRoID0gdmlldy5zaXplWzBdXG4gICAgY29uc3QgaW5jaGVzUGVyTWV0ZXIgPSAzOS4zN1xuICAgIGNvbnN0IGRlY0RlZ1RvTWV0ZXJzID0gMjAwMTUwNzcuMCAvIDE4MC4wXG4gICAgY29uc3QgbG9va3VwID0gV0tJRFVuaXRDb252ZXJzaW9uXG5cbiAgICBsZXQgd2tpZDsgbGV0IHdrdDsgbGV0IHNyID0gZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2VcbiAgICBpZiAoc3IpIHtcbiAgICAgIHdraWQgPSBzci53a2lkXG4gICAgICB3a3QgPSBzci53a3RcbiAgICB9XG5cbiAgICBsZXQgdW5pdFZhbHVlID0gbnVsbFxuICAgIGlmICh3a2lkKSB7XG4gICAgICB1bml0VmFsdWUgPSBsb29rdXAudmFsdWVzW2xvb2t1cFt3a2lkXV1cbiAgICB9IGVsc2UgaWYgKHdrdCAmJiAod2t0LnNlYXJjaCgvXlBST0pDUy9pKSAhPT0gLTEpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSAvVU5JVFxcWyhbXlxcXV0rKVxcXVxcXSQvaS5leGVjKHdrdClcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0WzFdKSB7XG4gICAgICAgIHVuaXRWYWx1ZSA9IHBhcnNlRmxvYXQocmVzdWx0WzFdLnNwbGl0KCcsJylbMV0pXG4gICAgICB9XG4gICAgfVxuICAgIHNjYWxlID0gKGV4dGVudC53aWR0aCAvIG1hcFdpZHRoKSAqICh1bml0VmFsdWUgfHwgZGVjRGVnVG9NZXRlcnMpICogaW5jaGVzUGVyTWV0ZXIgKiAoZXNyaUNvbmZpZy5zY3JlZW5EUEkgfHwgOTYpXG4gICAgcmV0dXJuIHNjYWxlXG4gIH0pLmNhdGNoKGFzeW5jIChlKSA9PiBhd2FpdCBQcm9taXNlLnJlamVjdCgpKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGF5ZXJFeHRlbnQgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbGF5ZXI6IF9fZXNyaS5MYXllciwgcXVlcnlQYXJhbXM/OiBhbnkpOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcbiAgaWYgKCFsYXllci5sb2FkZWQgJiYgbGF5ZXIubG9hZCkge1xuICAgIGF3YWl0IGxheWVyLmxvYWQoKVxuICB9XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgaWYgKGxheWVyLnN1YmxheWVycyB8fCBsYXllci50eXBlID09PSBMYXllclR5cGVzLkdyb3VwTGF5ZXIpIHtcbiAgICBjb25zdCBzdWJsYXllckV4dGVudFByb21pc2VzID0gW11cbiAgICBsZXQgZnVsbEV4dGVudCA9IG51bGxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY29uc3Qgc3VibGF5ZXJzID0gbGF5ZXIudHlwZSA9PT0gTGF5ZXJUeXBlcy5Hcm91cExheWVyID8gbGF5ZXIubGF5ZXJzIDogbGF5ZXIuc3VibGF5ZXJzXG4gICAgc3VibGF5ZXJzLmZvckVhY2goc3VibGF5ZXIgPT4gc3VibGF5ZXJFeHRlbnRQcm9taXNlcy5wdXNoKGxheWVyRXh0ZW50KHZpZXcsIHN1YmxheWVyLCBxdWVyeVBhcmFtcykpKVxuICAgIHJldHVybiBQcm9taXNlLmFsbChzdWJsYXllckV4dGVudFByb21pc2VzKS50aGVuKGV4dGVudHMgPT4ge1xuICAgICAgZXh0ZW50cy5mb3JFYWNoKGV4dGVudCA9PiB7XG4gICAgICAgIGlmIChleHRlbnQpIHtcbiAgICAgICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudCA/IGZ1bGxFeHRlbnQudW5pb24oZXh0ZW50KSA6IGV4dGVudFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGZ1bGxFeHRlbnQgfHwgbGF5ZXIuZnVsbEV4dGVudD8uY2xvbmUoKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGlmIChsYXllci5jYXBhYmlsaXRpZXM/LnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gYXdhaXQgcXVlcmlhYmxlTGF5ZXJFeHRlbnQodmlldywgbGF5ZXIsIHF1ZXJ5UGFyYW1zKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGxheWVyLmZ1bGxFeHRlbnQ/LmNsb25lKCkpXG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJpYWJsZUxheWVyRXh0ZW50ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGxheWVyOiBfX2VzcmkuTGF5ZXIsIHF1ZXJ5UGFyYW1zPzogYW55KTogUHJvbWlzZTxfX2VzcmkuRXh0ZW50PiB7XG4gIGNvbnN0IGRlZmF1bHRFeHRlbnQgPSBsYXllci5mdWxsRXh0ZW50Py5jbG9uZSgpXG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgY29uc3QgcXVlcnlDYXBhYmlsaXRpZXMgPSBsYXllci5jYXBhYmlsaXRpZXMucXVlcnlcbiAgaWYgKHF1ZXJ5Q2FwYWJpbGl0aWVzKSB7XG4gICAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JyxcbiAgICAgICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgbGV0IFF1ZXJ5LCBFeHRlbnQ7XG4gICAgICBbUXVlcnksIEV4dGVudF0gPSBtb2R1bGVzXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5UGFyYW1zPy53aGVyZSB8fCBsYXllcj8uZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgJzE9MSdcbiAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuXG4gICAgICBpZiAocXVlcnlDYXBhYmlsaXRpZXMuc3VwcG9ydHNFeHRlbnQpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICByZXR1cm4gbGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmICh2aWV3LnR5cGUgPT09ICczZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXh0ZW50XG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmNvdW50ID09PSAxICYmIGxheWVyLmdlb21ldHJ5VHlwZSA9PT0gJ3BvaW50JyAmJiByZXN1bHQ/LmV4dGVudD8uY2VudGVyKSB7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSByZXN1bHQ/LmV4dGVudD8uY2VudGVyXG4gICAgICAgICAgICBjb25zdCBzaW5nbGVQb2ludEV4dGVudCA9IG5ldyBFeHRlbnQoe1xuICAgICAgICAgICAgICB4bWluOiBjZW50ZXIueCAtIFNpbmdsZVBvaW50T2ZmU2V0LlgsXG4gICAgICAgICAgICAgIHltaW46IGNlbnRlci55IC0gU2luZ2xlUG9pbnRPZmZTZXQuWSxcbiAgICAgICAgICAgICAgeG1heDogY2VudGVyLnggKyBTaW5nbGVQb2ludE9mZlNldC5YLFxuICAgICAgICAgICAgICB5bWF4OiBjZW50ZXIueSArIFNpbmdsZVBvaW50T2ZmU2V0LlksXG4gICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBzaW5nbGVQb2ludEV4dGVudFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmV4dGVudFxuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goYXN5bmMgKGUpID0+IGF3YWl0IFByb21pc2UucmVzb2x2ZShkZWZhdWx0RXh0ZW50KSlcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgfSBlbHNlIGlmIChsYXllci5xdWVyeUZlYXR1cmVzKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oYXN5bmMgKGZlYXR1cmVTZXQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpY3NFeHRlbnQodmlldywgZmVhdHVyZVNldC5mZWF0dXJlcylcbiAgICAgICAgfSkuY2F0Y2goYXN5bmMgKGUpID0+IGF3YWl0IFByb21pc2UucmVzb2x2ZShkZWZhdWx0RXh0ZW50KSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVmYXVsdEV4dGVudClcbiAgICAgIH1cbiAgICB9KS5jYXRjaChhc3luYyAoZSkgPT4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGRlZmF1bHRFeHRlbnQpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVmYXVsdEV4dGVudClcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZSAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10sIHNwYXRpYWxSZWZlcmVuY2U6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuR2VvbWV0cnlbXT4ge1xuICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgIGxldCBFeHRlbnQ6IHR5cGVvZiBfX2VzcmkuRXh0ZW50XG4gICAgW0V4dGVudF0gPSBtb2R1bGVzXG4gICAgcmV0dXJuIGdlb21ldHJ5VXRpbHMucHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShnZW9tZXRyaWVzLCBzcGF0aWFsUmVmZXJlbmNlKS50aGVuKChyZXN1bHRHZW9tZXRyaWVzKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0R2VvbWV0cmllcy5tYXAoZ2VvbWV0cnkgPT4ge1xuICAgICAgICAvLyBleHRlbmRlZCBleHRlbnQgd2l0aCAnU2luZ2xlUG9pbnRPZmZTZXQnIGlmIHRoZSB2YWx1ZSBvZiAnd2lkdGgnIG9yICdoZWlnaHQnIG9mIGV4dGVudC5cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gJ2V4dGVudCcgJiYgKGdlb21ldHJ5LndpZHRoID09PSAwIHx8IGdlb21ldHJ5LmhlaWdodCA9PT0gMCkpIHtcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSBuZXcgRXh0ZW50KHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgIHhtaW46IGdlb21ldHJ5LnhtaW4gLSBTaW5nbGVQb2ludE9mZlNldC5YLFxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgeW1pbjogZ2VvbWV0cnkueW1pbiAtIFNpbmdsZVBvaW50T2ZmU2V0LlksXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICB4bWF4OiBnZW9tZXRyeS54bWF4ICsgU2luZ2xlUG9pbnRPZmZTZXQuWCxcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgIHltYXg6IGdlb21ldHJ5LnltYXggKyBTaW5nbGVQb2ludE9mZlNldC5ZLFxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuIGV4dGVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBnZW9tZXRyeVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pLmNhdGNoKGFzeW5jIChlKSA9PiBhd2FpdCBQcm9taXNlLnJlamVjdCgpKVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9sYXllcnMvamltdS1sYXllci12aWV3J1xuZXhwb3J0ICogZnJvbSAnLi9sYXllcnMvamltdS1mZWF0dXJlLWxheWVyLXZpZXcnXG5leHBvcnQgKiBmcm9tICcuL2xheWVycy9qaW11LXNjZW5lLWxheWVyLXZpZXcnXG5leHBvcnQgKiBmcm9tICcuL2ppbXUtbWFwLXZpZXcnXG5leHBvcnQgKiBmcm9tICcuL2ppbXUtbWFwLXZpZXctZ3JvdXAnXG4iLCJpbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnLi9qaW11LW1hcC12aWV3J1xuXG5leHBvcnQgaW50ZXJmYWNlIEppbXVNYXBDbGFzcyB7XG4gIHN3aXRjaE1hcDogKGlnbm9yZVN3aXRjaEFuaW1hdGlvbj86IGJvb2xlYW4pID0+IFByb21pc2U8YW55PlxuICBmdWxsU2NyZWVuTWFwOiAoKSA9PiB2b2lkXG59XG5cbi8qKiBAaWdub3JlICovXG5leHBvcnQgY2xhc3MgSmltdU1hcFZpZXdHcm91cCB7XG4gIG1hcFdpZGdldElkOiBzdHJpbmdcbiAgamltdU1hcFZpZXdzOiB7IFtpZDogc3RyaW5nXTogSmltdU1hcFZpZXcgfVxuICBtYXBXaWRnZXRJbnN0YW5jZTogSmltdU1hcENsYXNzXG5cbiAgY29uc3RydWN0b3IgKG1hcFdpZGdldElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1hcFdpZGdldElkID0gbWFwV2lkZ2V0SWRcbiAgICB0aGlzLmppbXVNYXBWaWV3cyA9IHt9XG4gIH1cblxuICBzZXRNYXBXaWRnZXRJbnN0YW5jZSAobWFwV2lkZ2V0SW5zdGFuY2U6IEppbXVNYXBDbGFzcykge1xuICAgIHRoaXMubWFwV2lkZ2V0SW5zdGFuY2UgPSBtYXBXaWRnZXRJbnN0YW5jZVxuICB9XG5cbiAgYWRkSmltdU1hcFZpZXcgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykge1xuICAgIHRoaXMuamltdU1hcFZpZXdzW2ppbXVNYXBWaWV3LmlkXSA9IGppbXVNYXBWaWV3XG4gICAgamltdU1hcFZpZXcuamltdU1hcFZpZXdHcm91cCA9IHRoaXNcbiAgfVxuXG4gIHNldEppbXVNYXBWaWV3IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpIHtcbiAgICB0aGlzLmppbXVNYXBWaWV3c1tqaW11TWFwVmlldy5pZF0gPSBqaW11TWFwVmlld1xuICAgIGppbXVNYXBWaWV3LmppbXVNYXBWaWV3R3JvdXAgPSB0aGlzXG4gIH1cblxuICByZW1vdmVKaW11TWFwVmlldyAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSB7XG4gICAgZGVsZXRlIHRoaXMuamltdU1hcFZpZXdzW2ppbXVNYXBWaWV3LmlkXVxuXG4gICAgaWYgKGppbXVNYXBWaWV3LmppbXVNYXBWaWV3R3JvdXAgPT09IHRoaXMpIHtcbiAgICAgIGppbXVNYXBWaWV3LmppbXVNYXBWaWV3R3JvdXAgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlSmltdU1hcFZpZXcgKCk6IEppbXVNYXBWaWV3IHtcbiAgICBjb25zdCBqaW11TWFwVmlld0lkcyA9IE9iamVjdC5rZXlzKHRoaXMuamltdU1hcFZpZXdzKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgamltdU1hcFZpZXdJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmppbXVNYXBWaWV3c1tqaW11TWFwVmlld0lkc1tpXV0uaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuamltdU1hcFZpZXdzW2ppbXVNYXBWaWV3SWRzW2ldXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3dpdGNoTWFwID0gYXN5bmMgKGlnbm9yZVN3aXRjaEFuaW1hdGlvbiA9IGZhbHNlKTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICBpZiAodGhpcy5tYXBXaWRnZXRJbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubWFwV2lkZ2V0SW5zdGFuY2Uuc3dpdGNoTWFwKGlnbm9yZVN3aXRjaEFuaW1hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG4gIH1cblxuICBmdWxsU2NyZWVuTWFwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLm1hcFdpZGdldEluc3RhbmNlKSB7XG4gICAgICB0aGlzLm1hcFdpZGdldEluc3RhbmNlLmZ1bGxTY3JlZW5NYXAoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzaG93TWFwVG9vbHMgKCkge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3cyA9IHRoaXMuZ2V0QWxsSmltdU1hcFZpZXdzKClcblxuICAgIGppbXVNYXBWaWV3cy5mb3JFYWNoKGppbXVNYXBWaWV3ID0+IHtcbiAgICAgIGNvbnN0IGFueVZpZXcgPSBqaW11TWFwVmlldy52aWV3IGFzIGFueVxuXG4gICAgICBpZiAoYW55VmlldyAmJiBhbnlWaWV3LnNob3dNYXBUb29scykge1xuICAgICAgICBhbnlWaWV3LnNob3dNYXBUb29scygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBoaWRlTWFwVG9vbHMgKCkge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3cyA9IHRoaXMuZ2V0QWxsSmltdU1hcFZpZXdzKClcblxuICAgIGppbXVNYXBWaWV3cy5mb3JFYWNoKGppbXVNYXBWaWV3ID0+IHtcbiAgICAgIGNvbnN0IGFueVZpZXcgPSBqaW11TWFwVmlldy52aWV3IGFzIGFueVxuXG4gICAgICBpZiAoYW55VmlldyAmJiBhbnlWaWV3LmhpZGVNYXBUb29scykge1xuICAgICAgICBhbnlWaWV3LmhpZGVNYXBUb29scygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldEFsbEppbXVNYXBWaWV3cyAoKSB7XG4gICAgY29uc3QgamltdU1hcFZpZXdJZHMgPSBPYmplY3Qua2V5cyh0aGlzLmppbXVNYXBWaWV3cylcbiAgICBjb25zdCBqaW11TWFwVmlld3MgPSBqaW11TWFwVmlld0lkcy5tYXAoamltdU1hcFZpZXdJZCA9PiB0aGlzLmppbXVNYXBWaWV3c1tqaW11TWFwVmlld0lkXSlcbiAgICByZXR1cm4gamltdU1hcFZpZXdzXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEppbXVNYXBWaWV3U3RhdHVzLCBNZXNzYWdlTWFuYWdlciwgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlTWFuYWdlciwgZGF0YVNvdXJjZVV0aWxzLCB0eXBlIERhdGFTb3VyY2UsXG4gIGdldEFwcFN0b3JlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBKaW11TWFwVmlld0luZm8sIExvY2F0aW9uQ2hhbmdlTWVzc2FnZSwgdHlwZSBEYXRhUmVjb3JkU2V0LCBTdXBwb3J0ZWRMYXllclNlcnZpY2VUeXBlcyxcbiAgTXV0YWJsZVN0b3JlTWFuYWdlciwgdHlwZSBKU0FQSUxheWVyTWl4aW4sIHR5cGUgQXJjR0lTU3ViTGF5ZXIsIG9ic2VydmVTdG9yZSwgdHlwZSBJTURhdGFTb3VyY2VJbmZvLCBEYXRhU291cmNlU3RhdHVzLFxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGUsIFdpZGdldFN0YXRlLCBVcmxNYW5hZ2VyLCB0eXBlIERhdGFTb3VyY2VTZWxlY3Rpb25Nb2RlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVMYXllclZpZXcsIHR5cGUgSmltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucyB9IGZyb20gJy4vbGF5ZXJzL2ppbXUtbGF5ZXItdmlldydcbmltcG9ydCB7IEppbXVGZWF0dXJlTGF5ZXJWaWV3LCB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3T3B0aW9ucyB9IGZyb20gJy4vbGF5ZXJzL2ppbXUtZmVhdHVyZS1sYXllci12aWV3J1xuaW1wb3J0IHsgSmltdVNjZW5lTGF5ZXJWaWV3LCB0eXBlIEppbXVTY2VuZUxheWVyVmlld09wdGlvbnMgfSBmcm9tICcuL2xheWVycy9qaW11LXNjZW5lLWxheWVyLXZpZXcnXG5pbXBvcnQgeyBKaW11R3JvdXBMYXllclZpZXcgfSBmcm9tICcuL2xheWVycy9qaW11LWdyb3VwLWxheWVyLXZpZXcnXG5pbXBvcnQgeyBKaW11U3ViVHlwZUdyb3VwTGF5ZXJWaWV3IH0gZnJvbSAnLi9sYXllcnMvamltdS1zdWJ0eXBlLWdyb3VwLWxheWVyJ1xuaW1wb3J0IHsgSmltdVRpbGVMYXllclZpZXcgfSBmcm9tICcuL2xheWVycy9qaW11LXRpbGUtbGF5ZXItdmlldydcbmltcG9ydCB7IEppbXVNYXBJbWFnZUxheWVyVmlldyB9IGZyb20gJy4vbGF5ZXJzL2ppbXUtbWFwaW1hZ2UtbGF5ZXItdmlldydcbmltcG9ydCB7IHR5cGUgTWFwVmlld01hbmFnZXIgfSBmcm9tICcuLi9tYXB2aWV3LW1hbmFnZXInXG5pbXBvcnQgeyBMYXllclR5cGVzLCB0eXBlIE1hcERhdGFTb3VyY2UgfSBmcm9tICcuLi9kYXRhLXNvdXJjZXMvYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICcuLi9hcmNnaXMtanMtYXBpLW1vZHVsZS1sb2FkZXInXG4vLyBvbmx5IGRlcGVuZCBvbiB0eXBlcyBmb3JtICdqaW11LXVpJywgZG9lcyBub3QgZGVwZW5kIG9uIGFueSBtb2R1bGVcbmltcG9ydCB7IHR5cGUgSmltdVBvaW50U3ltYm9sLCB0eXBlIEppbXVQb2x5bGluZVN5bWJvbCwgdHlwZSBKaW11UG9seWdvblN5bWJvbCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvbWFwJ1xuaW1wb3J0ICogYXMgZmVhdHVyZVV0aWxzIGZyb20gJy4uL3V0aWxzL2ZlYXR1cmUtdXRpbHMnXG5pbXBvcnQgeyB0eXBlIERlZmF1bHRTeW1ib2xUeXBlIH0gZnJvbSAnLi4vdXRpbHMvZmVhdHVyZS11dGlscydcbmltcG9ydCAqIGFzIHpvb21Ub1V0aWxzIGZyb20gJy4uL3V0aWxzL3pvb210by11dGlscydcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXdHcm91cCB9IGZyb20gJy4vamltdS1tYXAtdmlldy1ncm91cCdcblxuZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XG4gIERhdGFBY3Rpb24gPSAnREFUQV9BQ1RJT04nLFxuICBNZXNzYWdlQWN0aW9uID0gJ01FU1NBR0VfQUNUSU9OJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5bWJvbE9wdGlvbiB7XG4gIHBvaW50U3ltYm9sPzogSmltdVBvaW50U3ltYm9sXG4gIHBvbHlsaW5lU3ltYm9sPzogSmltdVBvbHlsaW5lU3ltYm9sXG4gIHBvbHlnb25TeW1ib2w/OiBKaW11UG9seWdvblN5bWJvbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcE11dGFibGVTdGF0ZSB7XG4gIC8qKlxuICAgKiBEYXRhIHN0b3JlZCBmb3IgU2hvd09uTWFwIG1lc3NhZ2UgYWN0aW9uIGFuZCBkYXRhIGFjdGlvbi4gSXQgY29udGFpbnMgcmVjb3JkcyBkYXRhLCBub3QgZGF0YSBzb3VyY2UuXG4gICAqL1xuICBzaG93T25NYXBEYXRhcz86IFNob3dPbk1hcERhdGFzXG5cbiAgLyoqXG4gICAqIERhdGEgc3RvcmVkIGZvciBBZGRUb01hcCBtZXNzYWdlIGFjdGlvbiBhbmQgZGF0YSBhY3Rpb24uIEl0IGNvbnRhaW5zIGRhdGEgc291cmNlLCBub3QgcmVjb3JkcyBkYXRhLlxuICAgKi9cbiAgYWRkVG9NYXBEYXRhcz86IEFkZFRvTWFwRGF0YXNcblxuICAvKipcbiAgICogU3RvcmVzIGxheWVyIGlkcyBpbmZvIHRoYXQgY2FuIGJlIGRlbGV0ZWQgaW4gTWFwJ3MgY2xlYXItZGF0YSB0b29sLlxuICAgKi9cbiAgcmVtb3ZlYWJsZUxheWVySWRzSW5mbz86IFJlbW92ZWFibGVMYXllcklkc0luZm9cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93T25NYXBEYXRhIHtcbiAgbWFwV2lkZ2V0SWQ6IHN0cmluZ1xuICAvLyBvbmx5IGF2YWlsYWJsZSBmb3IgbWVzc2FnZSBhY3Rpb25cbiAgbWVzc2FnZVdpZGdldElkOiBzdHJpbmdcbiAgamltdU1hcFZpZXdJZDogc3RyaW5nXG4gIGRhdGFTZXQ6IERhdGFSZWNvcmRTZXRcbiAgdGl0bGU6IHN0cmluZ1xuICB0eXBlOiBBY3Rpb25UeXBlXG4gIHN5bWJvbE9wdGlvbj86IFN5bWJvbE9wdGlvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dPbk1hcERhdGFzIHtcbiAgW2xheWVySWQ6IHN0cmluZ106IFNob3dPbk1hcERhdGFcbn1cblxuZXhwb3J0IGVudW0gRGF0YUNoYW5nZVR5cGUge1xuICBDcmVhdGUgPSAnQ1JFQVRFJyxcbiAgQ3JlYXRpbmcgPSAnQ1JFQVRJTkcnLFxuICBDcmVhdGVkID0gJ0NSRUFURUQnLFxuICBSZW1vdmUgPSAnUkVNT1ZFJ1xufVxuXG5leHBvcnQgZW51bSBEYXRhQ2hhbmdlU3RhdHVzIHtcbiAgRnVsZmlsbGVkID0gJ0ZVTEZJTExFRCcsXG4gIFBlbmRpbmcgPSAnUEVORElORycsXG4gIFJlamVjdGVkID0gJ1JFSkVDVEVEJyxcbiAgUmVqZWN0ZWRBbmRLbm93biA9ICdSRUpFQ1RFREFOREtOT1dOJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFRvTWFwRGF0YSB7XG4gIG1hcFdpZGdldElkOiBzdHJpbmdcbiAgbWVzc2FnZVdpZGdldElkOiBzdHJpbmdcbiAgamltdU1hcFZpZXdJZDogc3RyaW5nXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgdHlwZTogQWN0aW9uVHlwZVxuICBkYXRhQ2hhbmdlVHlwZTogRGF0YUNoYW5nZVR5cGVcbiAgZGF0YUNoYW5nZVN0YXR1czogRGF0YUNoYW5nZVN0YXR1c1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFRvTWFwRGF0YXMge1xuICBbbGF5ZXJJZDogc3RyaW5nXTogQWRkVG9NYXBEYXRhXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlYWJsZUxheWVySWRzSW5mbyB7XG4gIC8vIGtleSBpcyBqaW11TWFwVmlld0lkLCB2YWx1ZSBpcyBsYXllcklkcyB0aGF0IGNhbiBiZSByZW1vdmVkIGJ5IG1hcCB0b29sLlxuICBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogc3RyaW5nW11cbn1cblxuZXhwb3J0IGNvbnN0IFNIT1dfT05fTUFQX0RBVEFfSURfUFJFRklYID0gJ2xheWVyX29mX3Nob3dPbk1hcF9hY3Rpb25fJ1xuXG5leHBvcnQgY29uc3QgQUREX1RPX01BUF9EQVRBX0lEX1BSRUZJWCA9ICdsYXllcl9vZl9hZGRUb01hcF9hY3Rpb25fJ1xuXG4vKipcbiAqIEEgTWFwVG9vbCBpcyBhIEFyY0dJUyBKYXZhU2NyaXB0IEFQSSB3aWRnZXQgaW5zdGFuY2UgdXNlZCBpbiBtYXAgd2lkZ2V0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEppbXVNYXBUb29sIHtcbiAgLyoqIFRoZSB0b29sIG5hbWUsIHVzZSB0aGUgQXJjR0lTIEphdmFTY3JpcHQgQVBJIGNsYXNzIG5hbWUuICovXG4gIG5hbWU6IHN0cmluZ1xuICAvKiogVGhlIGluc3RhbmNlIG9mIEFyY0dJUyBKYXZhU2NyaXB0IEFQSSBjbGFzcyAqL1xuICBpbnN0YW5jZTogX19lc3JpLldpZGdldFxufVxuXG4vKipcbiAqIGBKaW11TWFwVmlld0NvbnN0cnVjdG9yT3B0aW9uc2AgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGBKaW11TWFwVmlld2AsIHRvIGluaXRpYXRlIGEgYEppbXVNYXBWaWV3YCBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBKaW11TWFwVmlld0NvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgd2lkZ2V0IGlkIHRvIGNyZWF0ZSB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZS5cbiAgICovXG4gIG1hcFdpZGdldElkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIGBpc0FjdGl2ZWAgcHJvcGVydHkgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIG1hcCBpbiB0aGUgbWFwIHdpZGdldCBpcyBhY2Nlc3NpYmxlLlxuICAgKiBGb3IgZXhhbXBsZSwgZm9yIGEgc2luZ2xlLXNvdXJjZSBtYXAsIHRoZXJlIGlzIGEgc2luZ2xlIGBKaW11TWFwVmlld2AgaW5zdGFuY2UsIHRoZXJlZm9yZSwgdGhlIGBpc0FjdGl2ZWAgaXMgYWx3YXlzIHRydWUuXG4gICAqIFdpdGggYSBtdWx0aS1zb3VyY2UgbWFwLCB0aGVyZSBhcmUgdHdvIEppbXVNYXBWaWV3IGluc3RhbmNlcy4gSW4gdGhlIG11bHRpLXNvdXJjZSBtYXAsIHRoZSBwcm9wZXJ0eSBgaXNBY3RpdmVgIGlzIHRydWUgZm9yIHRoZSB0b3AgYEppbXVNYXBWaWV3YCBpbnN0YW5jZSxcbiAgICogYW5kIGZhbHNlIGZvciB0aGUgb25lIGJlbmVhdGguIFVwb24gY2xpY2tpbmcgdGhlIHN3aXRjaCBtYXAgdG9vbCwgdGhlIGBpc0FjdGl2ZWAgcHJvcGVydGllcyB3aWxsIHN3aXRjaC5cbiAgICovXG4gIGlzQWN0aXZlPzogYm9vbGVhblxuXG4gIC8qKlxuICAgKiBUaGUgYGRhdGFTb3VyY2VJZGAgaXMgdGhlIGlkIG9mIHRoZSBkYXRhc291cmNlIHNlbGVjdGVkIHRvIGNyZWF0ZSB0aGUgbWFwLlxuICAgKi9cbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIGB2aWV3YCBpcyB0aGUgW0FyY0dJUyBNYXBzIFNESyBmb3IgSmF2YVNjcmlwdCBWaWV3XShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktdmlld3MtVmlldy5odG1sKSwgaW5jbHVkaW5nIGFcbiAgICogW2BNYXBWaWV3YF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLXZpZXdzLU1hcFZpZXcuaHRtbCkgb3IgYVxuICAgKiBbYFNjZW5lVmlld2BdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS12aWV3cy1TY2VuZVZpZXcuaHRtbCkuIEluIHRoZSBBcmNHSVMgTWFwcyBTREsgZm9yIEphdmFTY3JpcHQsXG4gICAqIHRoZSBgTWFwVmlld2AgYW5kIGBTY2VuZVZpZXdgIGFyZSBwYXJ0IG9mIHRoZSBgX19lc3JpYCBuYW1lc3BhY2UgdHlwZXMuIFRodXMsIHRoZWlyIHR5cGVzIGFyZSBgX19lc3JpLk1hcFZpZXdgIGFuZCBgX19lc3JpLlNjZW5lVmlld2AuXG4gICAqL1xuICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXdcblxuICAvKipcbiAgICogVGhlIGBpc0VuYWJsZVBvcHVwYCBwcm9wZXJ0eSBpbmRpY2F0ZXMgd2hldGhlciB0byBkaXNwbGF5IHBvcHVwcyB3aGVuIGZlYXR1cmVzIGluIHRoZSBgdmlld2AgYXJlIGNsaWNrZWQuXG4gICAqL1xuICBpc0VuYWJsZVBvcHVwPzogYm9vbGVhblxuXG4gIC8qKiBQYXNzIE1hcFZpZXdNYW5hZ2VyIGluIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3kuICovXG4gIG1hcFZpZXdNYW5hZ2VyOiBNYXBWaWV3TWFuYWdlclxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBgdXNlVXJsSGFzaExheWVyc1Zpc2liaWxpdHlgIHByb3BlcnR5IGluZGljYXRlcyB3aGV0aGVyIHRoZSBtYXAgdXNlcyB0aGUgdXJsIGhhc2ggbGF5ZXIgdmlzaWJpbGl0eSBvciBub3QuXG4gICAqL1xuICB1c2VVcmxIYXNoTGF5ZXJzVmlzaWJpbGl0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBKaW11TGF5ZXJWaWV3cyB7XG4gIFtqaW11TGF5ZXJWaWV3SWQ6IHN0cmluZ106IEppbXVMYXllclZpZXdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxIYXNoTGF5ZXJzVmlzaWJpbGl0eSB7XG4gIFtqaW11TGF5ZXJWaWV3SWQ6IHN0cmluZ106IGJvb2xlYW5cbn1cblxudHlwZSBKaW11TWFwVmlld0NhY2hlTGlzdGVuZXIgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB2b2lkXG50eXBlIEppbXVNYXBWaWV3UmVzdG9yZUxpc3RlbmVyID0gKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4gdm9pZFxudHlwZSBKaW11TGF5ZXJWaWV3U2VsZWN0ZWRGZWF0dXJlc0NoYW5nZUxpc3RlbmVyID0gKGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcpID0+IHZvaWRcbnR5cGUgSmltdUxheWVyVmlld0NyZWF0ZWRMaXN0ZW5lciA9IChqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3KSA9PiB2b2lkXG50eXBlIFNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZUxpc3RlbmVyID0gKHByb2dyZXNzOiBudW1iZXIpID0+IHZvaWRcblxuLyoqXG4gKiBgSmltdU1hcFZpZXdgIGlzIHRoZSBgdmlld2AgZm9yIGRldmVsb3BlcnMgdG8gZGV2ZWxvcCB0aGUgbWFwLXJlbGF0ZWQgZnVuY3Rpb25zLlxuICogRm9yIGV4YW1wbGUsIGRldmVsb3BlcnMgY2FuIHVzZSB0aGUgYHZpZXdgIHByb3BlcnR5IG9mIHRoZSBgSmltdU1hcFZpZXdgIGluc3RhbmNlIHRvIGdldCB0aGUgb3JpZ2luYWxcbiAqICA8YSBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLXZpZXdzLVZpZXcuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkFyY0dJUyBNYXBzIFNESyBmb3IgSmF2YVNjcmlwdCBgVmlld2A8L2E+LFxuICogdGhlbiB1c2UgdGhlIG9yaWdpbmFsIGB2aWV3YCB0byBkZXZlbG9wIHRoZSBtYXAtcmVsYXRlZCBmdW5jdGlvbnMuIEF0IHRoZSBzYW1lIHRpbWUsIGBKaW11TWFwVmlld2AgYWxzbyBwcm92aWRlc1xuICogcHJvcGVydGllcyBzdWNoIGFzIGBpc0FjdGl2ZWAgYW5kIGBzdGF0dXNgIHRvIGluZGljYXRlIHRoZSBjdXJyZW50IHN0YXR1cyBpbiB0aGUgbWFwIHdpZGdldC5cbiAqXG4gKiBgSmltdU1hcFZpZXdgIGlzIGEgd3JhcHBlciBjbGFzcyBmb3IgdGhlIEFyY0dJUyBNYXBzIFNESyBmb3IgSmF2YVNjcmlwdCBbYFZpZXdgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktdmlld3MtVmlldy5odG1sKS5cbiAqIEl0IGlzIGNyZWF0ZWQgYnkgYSBtYXAgd2lkZ2V0IHVzaW5nIGEgbWFwIFtgRGF0YVNvdXJjZWBdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2V4cGVyaWVuY2UtYnVpbGRlci9hcGktcmVmZXJlbmNlL2ppbXUtY29yZS9EYXRhU291cmNlKS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbiAqXG4gKiAvLyBBZGQgdGhlIFN0YXRlIGludGVyZmFjZVxuICogaW50ZXJmYWNlIFN0YXRlIHtcbiAqICBleHRlbnQ6IF9fZXNyaS5FeHRlbnRcbiAqIH1cbiAqXG4gKiAvLyBPbiBhbiBhY3RpdmUgdmlldyBjaGFuZ2UsIHNldCB0aGUgZXh0ZW50IFN0YXRlIHByb3BlcnR5XG4gKiBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XG4gKiAgaWYoIXRoaXMuZXh0ZW50V2F0Y2gpe1xuICogICB0aGlzLmV4dGVudFdhdGNoID0gamltdU1hcFZpZXcudmlldy53YXRjaCgnZXh0ZW50JywgZXh0ZW50ID0+IHtcbiAqICAgICB0aGlzLnNldFN0YXRlKHtcbiAqICAgICAgIGV4dGVudFxuICogICAgIH0pXG4gKiAgIH0pO1xuICogIH1cbiAqIH1cbiAqXG4gKiAvLyBVc2UgdGhlIGBKaW11TWFwVmlld2AgaW5zdGFuY2UgZnJvbSB0aGUgbWFwIHdpZGdldCB0aHJvdWdoIHRoZSBgSmltdU1hcFZpZXdDb21wb25lbnRgIFJlYWN0IGNvbXBvbmVudFxuPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXX0gb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX0+PC9KaW11TWFwVmlld0NvbXBvbmVudD5cbiAqIGBgYFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEppbXVNYXBWaWV3IHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZS5cbiAgICovXG4gIGlkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB3aWRnZXQgY3JlYXRpbmcgdGhlIGBKaW11TWFwVmlld2AgaW5zdGFuY2UuXG4gICAqL1xuICBtYXBXaWRnZXRJZDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSBgaXNBY3RpdmVgIHByb3BlcnR5IGluZGljYXRlcyB3aGV0aGVyIHRoZSBtYXAgaW4gdGhlIG1hcCB3aWRnZXQgaXMgYWNjZXNzaWJsZS5cbiAgICogRm9yIGV4YW1wbGUsIGZvciBhIHNpbmdsZS1zb3VyY2UgbWFwLCB0aGVyZSBpcyBhIHNpbmdsZSBgSmltdU1hcFZpZXdgIGluc3RhbmNlLCB0aGVyZWZvcmUsIHRoZSBgaXNBY3RpdmVgIGlzIGFsd2F5cyB0cnVlLlxuICAgKiBXaXRoIGEgbXVsdGktc291cmNlIG1hcCwgdGhlcmUgYXJlIHR3byBgSmltdU1hcFZpZXdgIGluc3RhbmNlcy4gSW4gdGhlIG11bHRpLXNvdXJjZSBtYXAsIHRoZSBwcm9wZXJ0eSBgaXNBY3RpdmVgIGlzIHRydWUgZm9yIHRoZSB0b3AgYEppbXVNYXBWaWV3YCBpbnN0YW5jZSxcbiAgICogYW5kIGZhbHNlIGZvciB0aGUgb25lIGJlbmVhdGguIFVwb24gY2xpY2tpbmcgdGhlIHN3aXRjaCBtYXAgdG9vbCwgdGhlIGBpc0FjdGl2ZWAgcHJvcGVydGllcyB3aWxsIHN3aXRjaC5cbiAgICovXG4gIGlzQWN0aXZlPzogYm9vbGVhblxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBEYXRhU291cmNlYCBzZWxlY3RlZCB0byBjcmVhdGUgdGhlIG1hcC5cbiAgICovXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSBgdmlld2AgaXMgdGhlIFtBcmNHSVMgTWFwcyBTREsgZm9yIEphdmFTY3JpcHQgYFZpZXdgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktdmlld3MtVmlldy5odG1sKSwgaW5jbHVkaW5nIGFcbiAgICogW2BNYXBWaWV3YF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLXZpZXdzLU1hcFZpZXcuaHRtbCkgb3IgYVxuICAgKiBbYFNjZW5lVmlld2BdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS12aWV3cy1TY2VuZVZpZXcuaHRtbCkuIEluIHRoZSBBcmNHSVMgTWFwcyBTREsgZm9yIEphdmFTY3JpcHQsXG4gICAqIHRoZSBgTWFwVmlld2AgYW5kIGBTY2VuZVZpZXdgIGFyZSBwYXJ0IG9mIHRoZSBgX19lc3JpYCBuYW1lc3BhY2UgdHlwZXMuIFRodXMsIHRoZWlyIHR5cGVzIGFyZSBgX19lc3JpLk1hcFZpZXdgIGFuZCBgX19lc3JpLlNjZW5lVmlld2AuXG4gICAqL1xuICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXdcblxuICAvKipcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZS4gYEppbXVNYXBWaWV3U3RhdHVzYCBlbnVtZXJhdGlvbiBtZW1iZXJzIGluY2x1ZGUgYFwiTE9BRElOR1wiYCwgYFwiTE9BREVEXCJgIGFuZCBgXCJGQUlMRURcImAuXG4gICAqL1xuICBzdGF0dXM6IEppbXVNYXBWaWV3U3RhdHVzXG5cbiAgLyoqXG4gICAqIFRoZSB1bmlvbiBmb3IgYWxsIGBKaW11TGF5ZXJWaWV3YCBpbnN0YW5jZXMgYW5kIHRoZSBsYXllciB2aWV3IG9iamVjdCB3cmFwcGVyLlxuICAgKiB0aGUgSmltdUxheWVyVmlldyBpbnN0YW5jZSBpbiB0aGlzIG9iamVjdCBtYXkgbm90IGJlZW4gbG9hZGVkLiBQbGVhc2UgY2FsbCBgd2hlbkppbXVMYXllclZpZXdMb2FkZWQoKWAgdG8gd2FpdCBmb3IgaXQncyBsb2FkZWQuXG4gICAqL1xuICBqaW11TGF5ZXJWaWV3cz86IEppbXVMYXllclZpZXdzXG5cbiAgLyoqIFRoZSBjcmVhdGVkIG1hcCB0b29scyAoQXJjR0lTIEphdmFTY3JpcHQgQVBJIHdpZGdldHMpIGZvciB0aGlzIHZpZXcuICovXG4gIGppbXVNYXBUb29sczogSmltdU1hcFRvb2xbXVxuXG4gIHByaXZhdGUgY2xpY2tIaWdobGlnaHRFbmFibGVkOiBib29sZWFuID0gdHJ1ZVxuXG4gIHByaXZhdGUgamltdU1hcFZpZXdMb2FkUHJvbWlzZTogUHJvbWlzZTxKaW11TWFwVmlldz5cbiAgcHJpdmF0ZSBqaW11TGF5ZXJWaWV3TG9hZFByb21pc2VzOiB7IFtqaW11TGF5ZXJWaWV3SWQ6IHN0cmluZ106IFByb21pc2U8SmltdUxheWVyVmlldz4gfVxuXG4gIHByaXZhdGUgc2hvd09uTWFwRGF0YXM6IFNob3dPbk1hcERhdGFzXG5cbiAgcHJpdmF0ZSByZWFkb25seSBtYXBWaWV3TWFuYWdlcjogTWFwVmlld01hbmFnZXJcblxuICBwcml2YXRlIGNhY2hlTGlzdGVuZXJzOiBKaW11TWFwVmlld0NhY2hlTGlzdGVuZXJbXSA9IFtdXG4gIHByaXZhdGUgcmVzdG9yZUxpc3RlbmVyczogSmltdU1hcFZpZXdSZXN0b3JlTGlzdGVuZXJbXSA9IFtdXG4gIHByaXZhdGUgc2VsZWN0ZWRGZWF0dXJlc0NoYW5nZUxpc3RlbmVyczogSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2VMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSBqaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVyczogSmltdUxheWVyVmlld0NyZWF0ZWRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSBzZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3NDaGFuZ2VMaXN0ZW5lcnM6IFNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZUxpc3RlbmVyW10gPSBbXVxuXG4gIC8vIHBvcHVwLmZlYXR1cmVzIG1heWJlIGNvbWUgZnJvbSBjbGlja2luZyBtYXAsIG9yIG1heWJlIGNvbWUgZnJvbSBleGIgZmVhdHVyZSBzZWxlY3Rpb24uXG4gIC8vIEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vbiBmb2N1c2VzIG9uIGNsaWNraW5nIG1hcCBjYXNlLlxuICAvLyBUaGUgZm9sbG93aW5nIGdyb3VwIG9mIHZhcmlhYmxlcyBmb2N1cyBvbiBleGIgZmVhdHVyZSBzZWxlY3Rpb24gY2FzZS5cbiAgcHJpdmF0ZSB3YXRjaFBvcHVwRmVhdHVyZXNIYW5kbGU6IF9fZXNyaS5XYXRjaEhhbmRsZVxuICBwcml2YXRlIHdhdGNoUG9wdXBTZWxlY3RlZEhhbmRsZTogX19lc3JpLldhdGNoSGFuZGxlXG4gIC8vIGZhbHNlIG1lYW5zIHBvcHVwLmZlYXR1cmVzIGNvbWVzIGZyb20gdGhpcy51cGRhdGVQb3B1cEZlYXR1cmVzV2hlblNlbGVjdGlvbkNoYW5nZSgpIG1ldGhvZCwgdHJ1ZSBtZWFucyBwb3B1cC5mZWF0dXJlcyBjb21lcyBmcm9tIGNsaWNraW5nIG1hcCAoSlMgQVBJIHNldCBwb3B1cC5mZWF0dXJlcykuXG4gIHByaXZhdGUgcG9wdXBGZWF0dXJlc0Zyb21TZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHNob3dQb3B1cFVwb25TZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIG1hcFdpZGdldFN0YXRlOiBXaWRnZXRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHVybEhhc2hMYXllcnNWaXNpYmlsaXR5OiBVcmxIYXNoTGF5ZXJzVmlzaWJpbGl0eVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBqaW11TWFwVmlld0dyb3VwOiBKaW11TWFwVmlld0dyb3VwXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEppbXVNYXBWaWV3Q29uc3RydWN0b3JPcHRpb25zKSB7XG4gICAgdGhpcy5pZCA9IG9wdGlvbnMubWFwV2lkZ2V0SWQgKyAnLScgKyBvcHRpb25zLmRhdGFTb3VyY2VJZFxuICAgIHRoaXMubWFwV2lkZ2V0SWQgPSBvcHRpb25zLm1hcFdpZGdldElkXG4gICAgdGhpcy5pc0FjdGl2ZSA9IG9wdGlvbnMuaXNBY3RpdmVcbiAgICB0aGlzLmRhdGFTb3VyY2VJZCA9IG9wdGlvbnMuZGF0YVNvdXJjZUlkXG4gICAgdGhpcy52aWV3ID0gb3B0aW9ucy52aWV3XG4gICAgdGhpcy5tYXBWaWV3TWFuYWdlciA9IG9wdGlvbnMubWFwVmlld01hbmFnZXJcbiAgICB0aGlzLmppbXVMYXllclZpZXdzID0ge31cbiAgICB0aGlzLnN0YXR1cyA9IEppbXVNYXBWaWV3U3RhdHVzLkxvYWRpbmdcbiAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICB0aGlzLnZpZXcucG9wdXBFbmFibGVkID0gKG9wdGlvbnMuaXNFbmFibGVQb3B1cCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMuaXNFbmFibGVQb3B1cCA9PT0gbnVsbCkgPyB0cnVlIDogb3B0aW9ucy5pc0VuYWJsZVBvcHVwXG4gICAgfVxuICAgIHRoaXMuc2hvd09uTWFwRGF0YXMgPSB7fVxuICAgIHRoaXMuamltdU1hcFRvb2xzID0gW11cbiAgICB0aGlzLmppbXVMYXllclZpZXdMb2FkUHJvbWlzZXMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMudXNlVXJsSGFzaExheWVyc1Zpc2liaWxpdHkpIHtcbiAgICAgIHRoaXMudXJsSGFzaExheWVyc1Zpc2liaWxpdHkgPSB0aGlzLnBhcnNlTGF5ZXJzVmlzaWJpbGl0eUZyb21VcmxIYXNoKClcbiAgICB9XG5cbiAgICB0aGlzLmluaXRWaWV3KHRoaXMudmlldylcblxuICAgIG9ic2VydmVTdG9yZSh0aGlzLm9uU3RvcmVDaGFuZ2UuYmluZCh0aGlzKSwgWydkYXRhU291cmNlc0luZm8nXSlcblxuICAgIHRoaXMud2F0Y2hQb3B1cEZlYXR1cmVzQW5kU2VsZWN0ZWRGZWF0dXJlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3B1cC5mZWF0dXJlcyBtYXliZSBjb21lIGZyb20gY2xpY2tpbmcgbWFwLCBvciBtYXliZSBjb21lIGZyb20gZXhiIGZlYXR1cmUgc2VsZWN0aW9uLlxuICAgKiBKaW11RmVhdHVyZUxheWVyU2NlbmVMYXllclZpZXdDb21tb24gZm9jdXNlcyBvbiBjbGlja2luZyBtYXAgY2FzZS5cbiAgICogSmltdU1hcFZpZXcgZm9jdXNlcyBvbiBleGIgZmVhdHVyZSBzZWxlY3Rpb24gY2FzZS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgd2F0Y2hQb3B1cEZlYXR1cmVzQW5kU2VsZWN0ZWRGZWF0dXJlICgpIHtcbiAgICBjb25zdCByZWFjdGl2ZVV0aWxzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlKCdlc3JpL2NvcmUvcmVhY3RpdmVVdGlscycpXG5cbiAgICBpZiAodGhpcy53YXRjaFBvcHVwRmVhdHVyZXNIYW5kbGUpIHtcbiAgICAgIHRoaXMud2F0Y2hQb3B1cEZlYXR1cmVzSGFuZGxlLnJlbW92ZSgpXG4gICAgICB0aGlzLndhdGNoUG9wdXBGZWF0dXJlc0hhbmRsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy53YXRjaFBvcHVwU2VsZWN0ZWRIYW5kbGUpIHtcbiAgICAgIHRoaXMud2F0Y2hQb3B1cFNlbGVjdGVkSGFuZGxlLnJlbW92ZSgpXG4gICAgICB0aGlzLndhdGNoUG9wdXBTZWxlY3RlZEhhbmRsZSA9IG51bGxcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhpcy5wb3B1cEZlYXR1cmVzRnJvbVNlbGVjdGlvbiBieSB3YXRjaGluZyBwb3B1cC5mZWF0dXJlc1xuICAgIHRoaXMud2F0Y2hQb3B1cEZlYXR1cmVzSGFuZGxlID0gcmVhY3RpdmVVdGlscy53YXRjaCgoKSA9PiB0aGlzLnZpZXcucG9wdXA/LmZlYXR1cmVzLCAoZmVhdHVyZXMpID0+IHtcbiAgICAgIHRoaXMucG9wdXBGZWF0dXJlc0Zyb21TZWxlY3Rpb24gPSBmZWF0dXJlcz8uZnJvbVNlbGVjdGlvblxuICAgIH0pXG5cbiAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSBwb3B1cC5sb2NhdGlvbiBtYW51YWxseSB3aGVuIHBvcHVwLnNlbGVjdGVkRmVhdHVyZSBjaGFuZ2UgaWYgcG9wdXAuZmVhdHVyZXMgY29tZXMgZnJvbSB0aGlzLnVwZGF0ZVBvcHVwRmVhdHVyZXNXaGVuU2VsZWN0aW9uQ2hhbmdlKCkgbWV0aG9kLlxuICAgIHRoaXMud2F0Y2hQb3B1cFNlbGVjdGVkSGFuZGxlID0gcmVhY3RpdmVVdGlscy53YXRjaCgoKSA9PiB0aGlzLnZpZXcucG9wdXA/LnNlbGVjdGVkRmVhdHVyZSwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBvcHVwRmVhdHVyZXNGcm9tU2VsZWN0aW9uKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3B1cCA9IHRoaXMudmlldz8ucG9wdXBcblxuICAgICAgaWYgKHBvcHVwICYmIHBvcHVwLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHBvcHVwLnNlbGVjdGVkRmVhdHVyZS5nZW9tZXRyeVxuICAgICAgICBsZXQgbG9jYXRpb246IF9fZXNyaS5Qb2ludCA9IG51bGxcblxuICAgICAgICBpZiAoZ2VvbWV0cnkpIHtcbiAgICAgICAgICBpZiAoZ2VvbWV0cnkuZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkuZ2VvbWV0cnkuUG9pbnQnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbiA9IGdlb21ldHJ5LmNsb25lKCkgYXMgX19lc3JpLlBvaW50XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2F0aW9uID0gZ2VvbWV0cnkuZXh0ZW50Py5jZW50ZXJcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICBwb3B1cC5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGFueSBsYXllciBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICogQHBhcmFtIHRyaWdnZWRKaW11TGF5ZXJWaWV3IFRoZSBKaW11TGF5ZXJWaWV3IGluc3RhbmNlIHdoaWNoIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0gdHJpZ2dlZEJ5Q2xlYXIgV2hldGhlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXMgaXMgdHJpZ2dlcmVkIGJ5IGNsZWFyIHRoZSBzZWxlY3Rpb24gb2YgSmltdUxheWVyVmlldy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUG9wdXBPblNlbGVjdGlvbkNoYW5nZSAodHJpZ2dlZEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3LCB0cmlnZ2VkQnlDbGVhcjogYm9vbGVhbikge1xuICAgIGNvbnN0IHBvcHVwID0gdGhpcy52aWV3Py5wb3B1cFxuXG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG1hcCB3aWRnZXQgaXMgaW4gQUNUSVZFIHN0YXRlLCBtZWFucyBtYXAgaW50ZXJhY3Rpb24gcmVzdWx0cyBpbiB0aGUgc2VsZWN0aW9uIGNoYW5nZXMsIHN1Y2ggYXMgY2xpY2tpbmcgbWFwIGFuZCBtYXAgc2VsZWN0IHRvb2wsXG4gICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byB1cGRhdGUgcG9wdXAgZmVhdHVyZXMuIFdlIG9ubHkgdXBkYXRlIHBvcHVwIGZlYXR1cmVzIGZvciBvdGhlciBjYXNlcywgc3VjaCBhcyBsaXN0L3RhYmxlIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgIGNvbnN0IHNob3VsZFVwZGF0ZVBvcHVwRmVhdHVyZXNXaGVuU2VsZWN0aW9uQ2hhbmdlID0gdGhpcy5pc0F1dG9TaG93UG9wdXBXaGVuU2VsZWN0RmVhdHVyZXMoKSAmJiAhdGhpcy5pc01hcFdpZGdldEFjdGl2ZSgpXG5cbiAgICBpZiAoc2hvdWxkVXBkYXRlUG9wdXBGZWF0dXJlc1doZW5TZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgIC8vIG5lZWQgdG8gdXBkYXRlIHBvcHVwLmZlYXR1cmVzXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVBvcHVwRmVhdHVyZXNXaGVuU2VsZWN0aW9uQ2hhbmdlKHBvcHVwLCB0cmlnZ2VkSmltdUxheWVyVmlldywgdHJpZ2dlZEJ5Q2xlYXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvbid0IG5lZWQgdG8gdXBkYXRlIHBvcHVwLmZlYXR1cmVzXG5cbiAgICAgIC8vICMxNTE5NSwgdHJ5IHRvIGNsb3NlIHBvcHVwIGlzIHRoZSBvcmlnaW5hbCBmZWF0dXJlIGlzIG5vdCBzZWxlY3RlZCBhbnltb3JlXG4gICAgICAvLyBjb25zaWRlciB0aGlzIGNhc2U6XG4gICAgICAvLyAxLiBsYXllcjEgaXMgaW4gbWFwIGFuZCBsaXN0IHdpZGdldCB1c2VzIGxheWVyMSBhcyBkczFcbiAgICAgIC8vIDIuIGNsaWNrIGZlYXR1cmUxIG9mIGxheWVyMSBpbiBtYXAsIHRoZW4gbWFwIHNob3dzIHBvcHVwIGZvciBmZWF0dXJlMSBhbmQgZmVhdHVyZTEgaW4gbGlzdCB3aWRnZXQgaXMgaGlnaGxpZ2h0XG4gICAgICAvLyAzLiBjbGljayBmZWF0dXJlMiBpbiBsaXN0IHdpZGdldCwgdGhlbiBvbmx5IGZlYXR1cmUyIGlzIGhpZ2hsaWdodCBpbiBtYXAsIGJ1dCB0aGUgbWFwIHN0aWxsIHNob3dzIHBvcHVwIG9mIGZlYXR1cmUxLCB3ZSBuZWVkIHRvIGNsb3NlIHRoZSBwb3B1cCBmb3IgdGhpcyBjYXNlXG5cbiAgICAgIGlmIChwb3B1cC52aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZSA9IHBvcHVwLnNlbGVjdGVkRmVhdHVyZVxuXG4gICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmUpIHtcbiAgICAgICAgICBjb25zdCBpc1BvcHVwU2VsZWN0ZWRGZWF0dXJlQmVsb25nVG9KaW11TGF5ZXJWaWV3ID0gKHRyaWdnZWRKaW11TGF5ZXJWaWV3LmxheWVyICYmIHNlbGVjdGVkRmVhdHVyZS5sYXllciA9PT0gdHJpZ2dlZEppbXVMYXllclZpZXcubGF5ZXIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0cmlnZ2VkSmltdUxheWVyVmlldy5sYXllciAmJiAoc2VsZWN0ZWRGZWF0dXJlIGFzIGFueSkuc291cmNlTGF5ZXIgPT09IHRyaWdnZWRKaW11TGF5ZXJWaWV3LmxheWVyKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHJpZ2dlZEppbXVMYXllclZpZXcuaWQgJiYgKHNlbGVjdGVkRmVhdHVyZSBhcyBhbnkpLmppbXVMYXllclZpZXdJZCA9PT0gdHJpZ2dlZEppbXVMYXllclZpZXcuaWQpXG5cbiAgICAgICAgICBpZiAoaXNQb3B1cFNlbGVjdGVkRmVhdHVyZUJlbG9uZ1RvSmltdUxheWVyVmlldykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlSWQgPSBzZWxlY3RlZEZlYXR1cmUuZ2V0T2JqZWN0SWQoKVxuICAgICAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkRmVhdHVyZXNGb3JUaGVMYXllciA9IGF3YWl0IHRyaWdnZWRKaW11TGF5ZXJWaWV3LmdldFNlbGVjdGVkRmVhdHVyZXMoKVxuICAgICAgICAgICAgY29uc3QgaXNPcmlnaW5hbEZlYXR1cmVTdGlsbFNlbGVjdGVkID0gY3VycmVudFNlbGVjdGVkRmVhdHVyZXNGb3JUaGVMYXllci5zb21lKGZlYXR1cmUgPT4gZmVhdHVyZS5nZXRPYmplY3RJZCgpID09PSBzZWxlY3RlZEZlYXR1cmVJZClcblxuICAgICAgICAgICAgaWYgKCFpc09yaWdpbmFsRmVhdHVyZVN0aWxsU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byB1cGRhdGUgcG9wdXAuZmVhdHVyZXMgd2hlbiBsYXllciBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICogVGhpcyBtZXRob2QgaXMgb25seSBjYWxsZWQgd2hlbiBzaG93UG9wdXBVcG9uU2VsZWN0aW9uIG9wdGlvbiBlbmFibGVkIGFuZCBtYXAgaXMgbm90IGluIGFjdGl2ZSBzdGF0ZS5cbiAgICogQHBhcmFtIHRyaWdnZWRKaW11TGF5ZXJWaWV3IFRoZSBKaW11TGF5ZXJWaWV3IGluc3RhbmNlIHdoaWNoIHNlbGVjdGlvbiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0gdHJpZ2dlZEJ5Q2xlYXIgV2hldGhlciB0aGUgc2VsZWN0aW9uIGNoYW5nZXMgaXMgdHJpZ2dlcmVkIGJ5IGNsZWFyIHRoZSBzZWxlY3Rpb24gb2YgSmltdUxheWVyVmlldy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgdXBkYXRlUG9wdXBGZWF0dXJlc1doZW5TZWxlY3Rpb25DaGFuZ2UgKHBvcHVwOiBfX2VzcmkuUG9wdXAsIHRyaWdnZWRKaW11TGF5ZXJWaWV3OiBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldywgdHJpZ2dlZEJ5Q2xlYXI6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXBvcHVwLnZpc2libGUgJiYgdHJpZ2dlZEJ5Q2xlYXIpIHtcbiAgICAgIC8vIHRoaXMgbWV0aG9kIGlzIHRyaWdnZXJlZCBieSBjbGVhciBzZWxlY3Rpb24sIGJ1dCBjdXJyZW50IHBvcHVwIGlzIG5vdCB2aXNpYmxlLCBzbyB3ZSBkb24ndCBuZWVkIHRvIHNob3cgcG9wdXAuXG5cbiAgICAgIGlmICh0aGlzLnBvcHVwRmVhdHVyZXNGcm9tU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBzZWxlY3RlZEZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdID0gYXdhaXQgdGhpcy5nZXRTZWxlY3RlZEZlYXR1cmVzKClcblxuICAgIGNvbnN0IGN1cnJlbnRQb3B1cFNlbGVjdGVkRmVhdHVyZSA9IHBvcHVwLnNlbGVjdGVkRmVhdHVyZVxuICAgIGNvbnN0IGN1cnJlbnRQb3B1cFNlbGVjdGVkRmVhdHVyZUppbXVMYXllclZpZXdJZCA9IGN1cnJlbnRQb3B1cFNlbGVjdGVkRmVhdHVyZSAmJiAoY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlIGFzIGFueSkuamltdUxheWVyVmlld0lkXG5cbiAgICBsZXQgZmlyc3RCYXRjaFNob3dKaW11TGF5ZXJWaWV3SWQ6IHN0cmluZyA9IG51bGxcblxuICAgIGlmICh0cmlnZ2VkQnlDbGVhcikge1xuICAgICAgLy8gbWFrZSBzdXJlIHBvcHVwIHN0aWxsIHNob3dzIGN1cnJlbnQgYmF0Y2ggc2VsZWN0ZWQgZmVhdHVyZXMgYXMgdGhlIGZpcnN0IGJhdGNoIHNlbGVjdGVkIGZlYXR1cmVzXG4gICAgICBpZiAoY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlSmltdUxheWVyVmlld0lkKSB7XG4gICAgICAgIGZpcnN0QmF0Y2hTaG93SmltdUxheWVyVmlld0lkID0gY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlSmltdUxheWVyVmlld0lkXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBwb3B1cCBzaG93IHRoZSBmaXJzdCBiYXRjaCBzZWxlY3RlZCBmZWF0dXJlcyBvZiB0cmlnZ2VkSmltdUxheWVyVmlld1xuICAgICAgZmlyc3RCYXRjaFNob3dKaW11TGF5ZXJWaWV3SWQgPSB0cmlnZ2VkSmltdUxheWVyVmlldy5pZFxuICAgIH1cblxuICAgIGlmIChmaXJzdEJhdGNoU2hvd0ppbXVMYXllclZpZXdJZCkge1xuICAgICAgY29uc3QgZmVhdHVyZXMxID0gW11cbiAgICAgIGNvbnN0IGZlYXR1cmVzMiA9IFtdXG4gICAgICBzZWxlY3RlZEZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcbiAgICAgICAgaWYgKChmZWF0dXJlIGFzIGFueSkuamltdUxheWVyVmlld0lkID09PSBmaXJzdEJhdGNoU2hvd0ppbXVMYXllclZpZXdJZCkge1xuICAgICAgICAgIGZlYXR1cmVzMS5wdXNoKGZlYXR1cmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmVhdHVyZXMyLnB1c2goZmVhdHVyZSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgc2VsZWN0ZWRGZWF0dXJlcyA9IFsuLi5mZWF0dXJlczEsIC4uLmZlYXR1cmVzMl1cbiAgICB9XG5cbiAgICAvLyB0cnkgdG8gbWFrZSBzdXJlIHBvcHVwIHNob3cgdGhlIG9yaWdpbmFsIHNlbGVjdGVkIGZlYXR1cmUgYXMgdGhlIGZpcnN0IHNlbGVjdGVkIGZlYXR1cmVcbiAgICBpZiAoY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlICYmIHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKChjdXJyZW50UG9wdXBTZWxlY3RlZEZlYXR1cmVKaW11TGF5ZXJWaWV3SWQgJiYgY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlSmltdUxheWVyVmlld0lkID09PSBmaXJzdEJhdGNoU2hvd0ppbXVMYXllclZpZXdJZCkgfHwgIWZpcnN0QmF0Y2hTaG93SmltdUxheWVyVmlld0lkKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkRmVhdHVyZXMuaW5kZXhPZihjdXJyZW50UG9wdXBTZWxlY3RlZEZlYXR1cmUpXG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZU9iamVjdElkID0gY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlLmdldE9iamVjdElkKClcblxuICAgICAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmVPYmplY3RJZCA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlID0gc2VsZWN0ZWRGZWF0dXJlc1tpXVxuICAgICAgICAgICAgICBjb25zdCBvYmplY3RJZCA9IGZlYXR1cmUuZ2V0T2JqZWN0SWQoKVxuXG4gICAgICAgICAgICAgIGlmIChvYmplY3RJZCA9PT0gc2VsZWN0ZWRGZWF0dXJlT2JqZWN0SWQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLnVuc2hpZnQoY3VycmVudFBvcHVwU2VsZWN0ZWRGZWF0dXJlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgKHNlbGVjdGVkRmVhdHVyZXMgYXMgYW55KS5mcm9tU2VsZWN0aW9uID0gdHJ1ZVxuXG4gICAgICB0aGlzLnZpZXcub3BlblBvcHVwKHtcbiAgICAgICAgZmVhdHVyZXM6IHNlbGVjdGVkRmVhdHVyZXNcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoZXJlIGlzIG5vIHNlbGVjdGVkIGZlYXR1cmVzIG5vd1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgcG9wdXAgYW5kIG1ha2Ugc3VyZSBwb3B1cC5mZWF0dXJlcyBpcyBlbXB0eS5cbiAgICovXG4gIHByaXZhdGUgY2xvc2VQb3B1cCAoKSB7XG4gICAgaWYgKHRoaXMudmlldykge1xuICAgICAgY29uc3QgcG9wdXAgPSB0aGlzLnZpZXcucG9wdXBcblxuICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIHBvcHVwLmZlYXR1cmVzID0gW11cbiAgICAgIH1cblxuICAgICAgdGhpcy52aWV3LmNsb3NlUG9wdXAoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBdXRvU2hvd1BvcHVwV2hlblNlbGVjdEZlYXR1cmVzICgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3LnBvcHVwRW5hYmxlZCAmJiB0aGlzLnNob3dQb3B1cFVwb25TZWxlY3Rpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZXRTaG93UG9wdXBVcG9uU2VsZWN0aW9uIChzaG93UG9wdXBVcG9uU2VsZWN0aW9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93UG9wdXBVcG9uU2VsZWN0aW9uID0gISFzaG93UG9wdXBVcG9uU2VsZWN0aW9uXG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaXNQb3B1cEZlYXR1cmVzRnJvbVNlbGVjdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9wdXBGZWF0dXJlc0Zyb21TZWxlY3Rpb25cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhc3luYyBnZXRTZWxlY3RlZEZlYXR1cmVzICgpOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcbiAgICBjb25zdCBzZWxlY3RlZEdyYXBoaWNzOiBfX2VzcmkuR3JhcGhpY1tdID0gW11cbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IE9iamVjdC52YWx1ZXModGhpcy5qaW11TGF5ZXJWaWV3cylcbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPj4gPSBbXVxuICAgIGppbXVMYXllclZpZXdzLmZvckVhY2goamltdUxheWVyVmlldyA9PiB7XG4gICAgICBjb25zdCBqaW11RmVhdHVyZU9yU2NlbmVMYXllclZpZXcgPSBqaW11TGF5ZXJWaWV3IGFzIChKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldylcblxuICAgICAgaWYgKGppbXVGZWF0dXJlT3JTY2VuZUxheWVyVmlldy5nZXRTZWxlY3RlZEZlYXR1cmVzKSB7XG4gICAgICAgIGNvbnN0IHAgPSBqaW11RmVhdHVyZU9yU2NlbmVMYXllclZpZXcuZ2V0U2VsZWN0ZWRGZWF0dXJlcygpXG4gICAgICAgIHByb21pc2VzLnB1c2gocClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZ3JhcGhpY3MgPT4ge1xuICAgICAgICAgIGlmIChncmFwaGljcyAmJiBncmFwaGljcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBncmFwaGljcy5mb3JFYWNoKGdyYXBoaWMgPT4ge1xuICAgICAgICAgICAgICBzZWxlY3RlZEdyYXBoaWNzLnB1c2goZ3JhcGhpYylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RlZEdyYXBoaWNzXG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRGZWF0dXJlQ291bnQgKCk6IG51bWJlciB7XG4gICAgbGV0IGFsbENvdW50ID0gMFxuXG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSBPYmplY3QudmFsdWVzKHRoaXMuamltdUxheWVyVmlld3MpXG4gICAgamltdUxheWVyVmlld3MuZm9yRWFjaChqaW11TGF5ZXJWaWV3ID0+IHtcbiAgICAgIGNvbnN0IGppbXVGZWF0dXJlT3JTY2VuZUxheWVyVmlldyA9IGppbXVMYXllclZpZXcgYXMgKEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KVxuXG4gICAgICBpZiAoamltdUZlYXR1cmVPclNjZW5lTGF5ZXJWaWV3LmdldFNlbGVjdGVkRmVhdHVyZUNvdW50KSB7XG4gICAgICAgIGFsbENvdW50ICs9IGppbXVGZWF0dXJlT3JTY2VuZUxheWVyVmlldy5nZXRTZWxlY3RlZEZlYXR1cmVDb3VudCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBhbGxDb3VudFxuICB9XG5cbiAgYWRkSmltdU1hcFRvb2wgKHRvb2w6IEppbXVNYXBUb29sKSB7XG4gICAgaWYgKCF0aGlzLmppbXVNYXBUb29scy5maW5kKHQgPT4gdC5uYW1lID09PSB0b29sLm5hbWUpKSB7XG4gICAgICB0aGlzLmppbXVNYXBUb29scy5wdXNoKHRvb2wpXG4gICAgfVxuICB9XG5cbiAgZGVsZXRlSmltdU1hcFRvb2wgKHRvb2xOYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0b29sID0gdGhpcy5qaW11TWFwVG9vbHMuZmluZCh0ID0+IHQubmFtZSA9PT0gdG9vbE5hbWUpXG4gICAgaWYgKCF0b29sKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5qaW11TWFwVG9vbHMgPSB0aGlzLmppbXVNYXBUb29scy5maWx0ZXIodCA9PiB0Lm5hbWUgIT09IHRvb2xOYW1lKVxuICB9XG5cbiAgZW5hYmxlQ2xpY2tPcGVuUG9wdXAgKCkge1xuICAgIHRoaXMudmlldy5wb3B1cEVuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlQ2xpY2tPcGVuUG9wdXAgKCkge1xuICAgIHRoaXMudmlldy5wb3B1cEVuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgaXNDbGlja09wZW5Qb3B1cEVuYWJsZWQgKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXcucG9wdXBFbmFibGVkXG4gIH1cblxuICBlbmFibGVDbGlja0hpZ2hsaWdodCAoKSB7XG4gICAgdGhpcy5jbGlja0hpZ2hsaWdodEVuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlQ2xpY2tIaWdobGlnaHQgKCkge1xuICAgIHRoaXMuY2xpY2tIaWdobGlnaHRFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIGlzQ2xpY2tIaWdobGlnaHRFbmFibGVkICgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbGlja0hpZ2hsaWdodEVuYWJsZWRcbiAgfVxuXG4gIHNldElzQWN0aXZlIChpc0FjdGl2ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZVxuICAgIHRoaXMubWFwVmlld01hbmFnZXIuc2V0SmltdU1hcFZpZXcodGhpcylcbiAgfVxuXG4gIHNldE1hcFdpZGdldFN0YXRlICh3aWRnZXRTdGF0ZTogV2lkZ2V0U3RhdGUpIHtcbiAgICB0aGlzLm1hcFdpZGdldFN0YXRlID0gd2lkZ2V0U3RhdGVcbiAgfVxuXG4gIGlzTWFwV2lkZ2V0QWN0aXZlICgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tYXBXaWRnZXRTdGF0ZSA9PT0gV2lkZ2V0U3RhdGUuQWN0aXZlXG4gIH1cblxuICBwcml2YXRlIGluaXRWaWV3ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcpIHtcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZpZXcud2hlbigoKSA9PiB7XG4gICAgICB2aWV3Lm9uKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIG9uQ2xpY2sgKGV2ZW50KSB7XG4gICAgY29uc3Qgc2NyZWVuUG9pbnQgPSB7XG4gICAgICB4OiBldmVudC54LFxuICAgICAgeTogZXZlbnQueVxuICAgIH1cblxuICAgIGNvbnN0IG1hcFBvaW50ID0gdGhpcy52aWV3LnRvTWFwKHNjcmVlblBvaW50KVxuICAgIGlmICghbWFwUG9pbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IExvY2F0aW9uQ2hhbmdlTWVzc2FnZSh0aGlzLm1hcFdpZGdldElkLCBtYXBQb2ludC50b0pTT04oKSkpXG5cbiAgICB0aGlzLnZpZXcuaGl0VGVzdChzY3JlZW5Qb2ludCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDbGlja0hpZ2hsaWdodEVuYWJsZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGdyYXBoaWNSZXN1bHRzID0gcmVzcG9uc2UucmVzdWx0cy5maWx0ZXIociA9PiByLnR5cGUgPT09ICdncmFwaGljJykgYXMgX19lc3JpLkdyYXBoaWNIaXRbXVxuICAgICAgdGhpcy5zZWxlY3REYXRhU291cmNlT3JGZWF0dXJlQnlGZWF0dXJlcyh0aGlzLmlzQ2xpY2tPcGVuUG9wdXBFbmFibGVkKCksIGdyYXBoaWNSZXN1bHRzLm1hcChyID0+IHIuZ3JhcGhpYyksIG1hcFBvaW50KVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJBbGxKaW11TGF5ZXJWaWV3c1NlbGVjdFJlY29yZCgpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2VsZWN0RGF0YVNvdXJjZU9yRmVhdHVyZUJ5RmVhdHVyZXMgKGlzUG9wdXBPcGVuOiBib29sZWFuLCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgbWFwUG9pbnQ6IF9fZXNyaS5Qb2ludCkge1xuICAgIC8vIGNsZWFyIHNlbGVjdGlvbiBmaXJzdFxuICAgIGF3YWl0IHRoaXMuY2xlYXJBbGxKaW11TGF5ZXJWaWV3c1NlbGVjdFJlY29yZCgpXG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKHRoaXMubWFwV2lkZ2V0SWQsIFtdKSlcblxuICAgIC8qKlxuICAgICAqIFdlIHNlbGVjdCBkYXRhIHJlY29yZHMgb25seSB3aGVuIHRoZSBwb3B1cCBpcyBlbmFibGVkIGluIE1WLlxuICAgICAqIEhlcmUsIHdlIGhhbmRsZSB0aGUgY2FzZSB0aGF0IHRoZSBwb3B1cCBpcyBub3QgZW5hYmxlZCBpbiBFeEIuIFdoZW4gcG9wdXAgaXMgZW5hbGJlZCwgdGhlIHNlbGVjdGlvbiBpcyBoYW5kbGVkIGluIGppbXUtZmVhdHVyZS1sYXllci12aWV3LlxuICAgICAqXG4gICAgICogV2hlbiBwb3B1cCBpcyBkaXNhYmxlZCwgd2Ugc2VsZWN0IHRoZSBmaXJzdCBmZWF0dXJlIGluIHRoZSBoaXRUZXN0IHJlc3VsdFxuICAgICAqL1xuXG4gICAgaWYgKGlzUG9wdXBPcGVuKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gRmluZCB0aGUgZmlyc3QgZmVhdHVyZVxuICAgIGNvbnN0IGZpcnN0RmVhdHVyZSA9IGZlYXR1cmVzLmZpbmQoZmVhdHVyZSA9PiB7XG4gICAgICByZXR1cm4gKGZlYXR1cmUubGF5ZXIudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIgfHwgZmVhdHVyZS5sYXllci50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpICYmIChmZWF0dXJlLmxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBfX2VzcmkuU2NlbmVMYXllcikucG9wdXBFbmFibGVkXG4gICAgfSlcblxuICAgIGlmICghZmlyc3RGZWF0dXJlKSB7XG4gICAgICAvLyB3aGVuIGhpdFRlc3QgZG9lcyBub3QgaGl0IGFueSBmZWF0dXJlLCB3ZSB0cnkgdG8gdXNlIGlkZW50aWZ5IHRvIGZpbmQgdGhlIGZlYXR1cmVcbiAgICAgIHRoaXMudHJ5SWRlbnRpZnlDbGlja2VkRmVhdHVyZShtYXBQb2ludClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGppbXVMYXllclZpZXdJZCA9IHRoaXMuZ2V0SmltdUxheWVyVmlld0lkQnlBUElMYXllcihmaXJzdEZlYXR1cmUubGF5ZXIpXG4gICAgY29uc3QgamltdUxheWVyVmlldyA9IHRoaXMuamltdUxheWVyVmlld3NbamltdUxheWVyVmlld0lkXSBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlld1xuXG4gICAgaWYgKCFqaW11TGF5ZXJWaWV3KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvSWQgPSBmaXJzdEZlYXR1cmUuYXR0cmlidXRlc1soZmlyc3RGZWF0dXJlLmxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIpLm9iamVjdElkRmllbGRdXG4gICAgaWYgKGppbXVMYXllclZpZXcuaXNMYXllckRhdGFTb3VyY2VVc2VkKCkpIHtcbiAgICAgIGNvbnN0IGxheWVyRGF0YVNvdXJjZSA9IGppbXVMYXllclZpZXcuZ2V0TGF5ZXJEYXRhU291cmNlKCkgfHwgYXdhaXQgamltdUxheWVyVmlldy5jcmVhdGVMYXllckRhdGFTb3VyY2UoKVxuXG4gICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBsYXllckRhdGFTb3VyY2UucXVlcnlCeUlkKG9JZCArICcnKVxuICAgICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKHRoaXMubWFwV2lkZ2V0SWQsIFtyZWNvcmRdKSlcbiAgICAgIGF3YWl0IGppbXVMYXllclZpZXcuc2VsZWN0RmVhdHVyZUJ5SWQob0lkLCByZWNvcmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IGppbXVMYXllclZpZXcuc2VsZWN0RmVhdHVyZUJ5SWQob0lkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNNYXBTZXJ2aWNlTGF5ZXJQb3B1cEVuYWJsZWQgKGxheWVyOiBfX2VzcmkuTWFwSW1hZ2VMYXllciB8IF9fZXNyaS5UaWxlTGF5ZXIpIHtcbiAgICAvLyBwb3B1cEVuYWJsZWQgaXMgbm90IGRvY3VtZW50ZWQgb24gTWFwSW1hZ2VMYXllciBvciBUaWxlTGF5ZXIsIGJ1dCB3ZSBjYW4gc3RpbGwgYWNjZXNzIGl0LlxuICAgIGlmICgobGF5ZXIgYXMgYW55KS5wb3B1cEVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHN1YkxheWVycyA9IGxheWVyLnN1YmxheWVycz8udG9BcnJheSgpXG5cbiAgICAgIGlmIChzdWJMYXllcnMgJiYgc3ViTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbGF5ZXIucG9wdXBFbmFibGVkIG1heWJlIHRydWUgYnV0IHN1YmxheWVycyBwb3B1cEVuYWJsZWQgbWF5YmUgZmFsc2VcbiAgICAgICAgY29uc3Qgc3ViTGF5ZXJQb3B1cEVuYWJsZWQgPSBzdWJMYXllcnMuc29tZSgoc3ViTGF5ZXIpID0+IHN1YkxheWVyLnBvcHVwRW5hYmxlZClcbiAgICAgICAgcmV0dXJuIHN1YkxheWVyUG9wdXBFbmFibGVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwcml2YXRlIHRyeUlkZW50aWZ5Q2xpY2tlZEZlYXR1cmUgKG1hcFBvaW50OiBfX2VzcmkuUG9pbnQpIHtcbiAgICAvLyBmaXJzdE1hcFNlcnZpY2VMYXllclZpZXcgbXVzdCBzdXBwb3J0IGlkZW50aWZ5IG9wZXJhdGlvbiBhbmQgdGhlIHJlbGF0ZWQgbGF5ZXIncyBwb3B1cCBpcyBlbmFibGVkXG4gICAgbGV0IGZpcnN0TWFwU2VydmljZUxheWVyVmlldyA9IG51bGxcblxuICAgIC8vIHRyYXZlcnNlIGxheWVycyBmcm9tIG1hcCB0b3AgdG8gYm90dG9tXG4gICAgY29uc3QgbGF5ZXJzID0gdGhpcy52aWV3Lm1hcC5sYXllcnMudG9BcnJheSgpLnJldmVyc2UoKVxuICAgIGNvbnN0IGFsbEppbXVMYXllclZpZXdzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmppbXVMYXllclZpZXdzKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW2ldXG5cbiAgICAgIGlmIChsYXllci50eXBlID09PSBMYXllclR5cGVzLk1hcEltYWdlTGF5ZXIgfHwgbGF5ZXIudHlwZSA9PT0gTGF5ZXJUeXBlcy5UaWxlTGF5ZXIpIHtcbiAgICAgICAgY29uc3QgbWFwU2VydmljZUxheWVyID0gbGF5ZXIgYXMgKF9fZXNyaS5NYXBJbWFnZUxheWVyIHwgX19lc3JpLlRpbGVMYXllcilcbiAgICAgICAgY29uc3Qgc3VwcG9ydHNJZGVudGlmeSA9IG1hcFNlcnZpY2VMYXllci5jYXBhYmlsaXRpZXM/Lm9wZXJhdGlvbnM/LnN1cHBvcnRzSWRlbnRpZnlcblxuICAgICAgICBpZiAoc3VwcG9ydHNJZGVudGlmeSkge1xuICAgICAgICAgIC8vIElmIGxheWVyIHBvcHVwIGlzIGRpc2FibGVkLCBubyBmZWF0dXJlcyBzaG91bGQgYmUgc2VsZWN0ZWQuXG4gICAgICAgICAgaWYgKHRoaXMuaXNNYXBTZXJ2aWNlTGF5ZXJQb3B1cEVuYWJsZWQobWFwU2VydmljZUxheWVyKSkge1xuICAgICAgICAgICAgY29uc3QgY3VyckppbXVMYXllclZpZXcgPSBhbGxKaW11TGF5ZXJWaWV3cy5maW5kKGppbXVMYXllclZpZXcgPT4gamltdUxheWVyVmlldy5sYXllciA9PT0gbGF5ZXIpXG5cbiAgICAgICAgICAgIGlmIChjdXJySmltdUxheWVyVmlldykge1xuICAgICAgICAgICAgICBmaXJzdE1hcFNlcnZpY2VMYXllclZpZXcgPSBjdXJySmltdUxheWVyVmlld1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZmlyc3RNYXBTZXJ2aWNlTGF5ZXJWaWV3KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvcmVzdC9pZGVudGlmeScsICdlc3JpL3Jlc3Qvc3VwcG9ydC9JZGVudGlmeVBhcmFtZXRlcnMnXSkudGhlbigoW2lkZW50aWZ5LCBJZGVudGlmeVBhcmFtZXRlcnNdKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZExheWVyVmlld3MgPSB0aGlzLmdldEFsbENoaWxkSmltdUxheWVyVmlld3MoZmlyc3RNYXBTZXJ2aWNlTGF5ZXJWaWV3LmlkKVxuICAgICAgY29uc3QgaWRlbnRpZnlMYXllcklkcyA9IGNoaWxkTGF5ZXJWaWV3cy5maWx0ZXIobHYgPT4gbHYubGF5ZXIucG9wdXBFbmFibGVkKS5tYXAobHYgPT4gbHYubGF5ZXIuaWQpXG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBJZGVudGlmeVBhcmFtZXRlcnMoKVxuICAgICAgcGFyYW1zLnRvbGVyYW5jZSA9IDNcbiAgICAgIHBhcmFtcy5sYXllcklkcyA9IGlkZW50aWZ5TGF5ZXJJZHNcbiAgICAgIHBhcmFtcy5sYXllck9wdGlvbiA9ICd0b3AnXG4gICAgICBwYXJhbXMud2lkdGggPSB0aGlzLnZpZXcud2lkdGhcbiAgICAgIHBhcmFtcy5oZWlnaHQgPSB0aGlzLnZpZXcuaGVpZ2h0XG4gICAgICBwYXJhbXMuZ2VvbWV0cnkgPSBtYXBQb2ludFxuICAgICAgcGFyYW1zLm1hcEV4dGVudCA9IHRoaXMudmlldy5leHRlbnRcbiAgICAgIHBhcmFtcy5yZXR1cm5GaWVsZE5hbWUgPSB0cnVlXG4gICAgICBwYXJhbXMucmV0dXJuR2VvbWV0cnkgPSB0cnVlXG4gICAgICBwYXJhbXMucmV0dXJuVW5mb3JtYXR0ZWRWYWx1ZXMgPSB0cnVlXG5cbiAgICAgIGlkZW50aWZ5LmlkZW50aWZ5KGZpcnN0TWFwU2VydmljZUxheWVyVmlldy5sYXllci51cmwsIHBhcmFtcykudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0UmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0c1swXSBhcyBfX2VzcmkuSWRlbnRpZnlSZXN1bHRcbiAgICAgICAgaWYgKCFmaXJzdFJlc3VsdCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgamltdUxheWVyVmlld0lkID0gYCR7Zmlyc3RNYXBTZXJ2aWNlTGF5ZXJWaWV3LmlkfS0ke2ZpcnN0UmVzdWx0LmxheWVySWR9YFxuICAgICAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gdGhpcy5qaW11TGF5ZXJWaWV3c1tqaW11TGF5ZXJWaWV3SWRdIGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3XG4gICAgICAgIGlmICghamltdUxheWVyVmlldykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGppbXVMYXllclZpZXcuaXNMYXllckRhdGFTb3VyY2VVc2VkKCkgfHwgamltdUxheWVyVmlldy5nZXRMYXllckRhdGFTb3VyY2UoKSkge1xuICAgICAgICAgIGNvbnN0IHJlY29yZCA9IGppbXVMYXllclZpZXcuZ2V0TGF5ZXJEYXRhU291cmNlKCk/LmJ1aWxkUmVjb3JkKGZpcnN0UmVzdWx0LmZlYXR1cmUpXG4gICAgICAgICAgamltdUxheWVyVmlldy5zZWxlY3RGZWF0dXJlQnlJZChOdW1iZXIocmVjb3JkLmdldElkKCkpLCByZWNvcmQpXG4gICAgICAgICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShuZXcgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKHRoaXMubWFwV2lkZ2V0SWQsIFtyZWNvcmRdKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBqaW11TGF5ZXJWaWV3LnNlbGVjdEZlYXR1cmVCeUlkKGZpcnN0UmVzdWx0LmZlYXR1cmUuYXR0cmlidXRlc1tqaW11TGF5ZXJWaWV3LmxheWVyLm9iamVjdElkRmllbGRdLCBmaXJzdFJlc3VsdC5mZWF0dXJlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogR2V0IEppbXVMYXllclZpZXcgYnkgSlMgQVBJIGxheWVyIG9yIHN1YmxheWVyLlxuICAgKiBAcGFyYW0gbGF5ZXJPclN1YkxheWVyIEpTIEFQSSBsYXllciBvciBzdWJsYXllci5cbiAgICovXG4gIGdldEppbXVMYXllclZpZXdCeUFQSUxheWVyIChsYXllck9yU3ViTGF5ZXI6IF9fZXNyaS5MYXllciB8IEFyY0dJU1N1YkxheWVyKTogSmltdUxheWVyVmlldyB7XG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSBPYmplY3QudmFsdWVzKHRoaXMuamltdUxheWVyVmlld3MpXG4gICAgcmV0dXJuIGppbXVMYXllclZpZXdzLmZpbmQoamltdUxheWVyVmlldyA9PiBqaW11TGF5ZXJWaWV3LmxheWVyID09PSBsYXllck9yU3ViTGF5ZXIpXG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IGdldEppbXVMYXllclZpZXdJZEJ5SmltdUxheWVySWQgPSAoSmltdWxheWVySWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgJHt0aGlzLmlkfS0ke0ppbXVsYXllcklkfWBcbiAgfVxuXG4gIGdldEppbXVMYXllclZpZXdJZEJ5QVBJTGF5ZXIgPSAobGF5ZXJPclN1YkxheWVyOiBfX2VzcmkuTGF5ZXIgfCBBcmNHSVNTdWJMYXllcikgPT4ge1xuICAgIHJldHVybiB0aGlzLmdldEppbXVMYXllclZpZXdJZEJ5SmltdUxheWVySWQoZGF0YVNvdXJjZVV0aWxzLmdldEppbXVMYXllcklkQnlKU0FQSUxheWVyKGxheWVyT3JTdWJMYXllcikpXG4gIH1cblxuICBnZXRKaW11TGF5ZXJWaWV3QnlEYXRhU291cmNlSWQgKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogSmltdUxheWVyVmlldyB7XG4gICAgY29uc3QgYWxsSmltdUxheWVyVmlld3MgPSB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzKClcbiAgICByZXR1cm4gYWxsSmltdUxheWVyVmlld3MuZmluZChqaW11TGF5ZXJWaWV3ID0+IGppbXVMYXllclZpZXcubGF5ZXJEYXRhU291cmNlSWQgPT09IGRhdGFTb3VyY2VJZClcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2xlYXJBbGxKaW11TGF5ZXJWaWV3c1NlbGVjdFJlY29yZCAoKSB7XG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSB0aGlzLmppbXVMYXllclZpZXdzXG4gICAgY29uc3QgamltdUxheWVyVmlld0tleXMgPSBPYmplY3Qua2V5cyhqaW11TGF5ZXJWaWV3cylcbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTx2b2lkPj4gPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqaW11TGF5ZXJWaWV3S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGVtcEppbXVMYXllclZpZXcgPSBqaW11TGF5ZXJWaWV3c1tqaW11TGF5ZXJWaWV3S2V5c1tpXV1cblxuICAgICAgaWYgKHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gKHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5zZWxlY3RGZWF0dXJlc0J5SWRzICYmICh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykuc2VsZWN0RmVhdHVyZXNCeUlkcyhbXSlcbiAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEppbXVMYXllclZpZXcgKGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcpIHtcbiAgICB0aGlzLmppbXVMYXllclZpZXdzW2ppbXVMYXllclZpZXcuaWRdID0gamltdUxheWVyVmlld1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIEppbXVNYXBWaWV3IHdoZW4gaXQgaXMgbG9hZGVkLlxuICAgKi9cbiAgYXN5bmMgd2hlbkppbXVNYXBWaWV3TG9hZGVkICgpOiBQcm9taXNlPEppbXVNYXBWaWV3PiB7XG4gICAgaWYgKHRoaXMuamltdU1hcFZpZXdMb2FkUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuamltdU1hcFZpZXdMb2FkUHJvbWlzZVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudmlldykge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEppbXVNYXBWaWV3U3RhdHVzLkZhaWxlZFxuICAgICAgICB0aGlzLm1hcFZpZXdNYW5hZ2VyLnNldEppbXVNYXBWaWV3KHRoaXMpXG4gICAgICAgIHRoaXMuamltdU1hcFZpZXdMb2FkUHJvbWlzZSA9IFByb21pc2UucmVqZWN0KHRoaXMpXG4gICAgICAgIHJldHVybiB0aGlzLmppbXVNYXBWaWV3TG9hZFByb21pc2VcbiAgICAgIH1cblxuICAgICAgdGhpcy5qaW11TWFwVmlld0xvYWRQcm9taXNlID0gdGhpcy52aWV3LndoZW4oKS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FpdCBmb3IgbGF5ZXIgdmlld3MgY3JlYXRlZC5cbiAgICAgICAgdGhpcy5zdGFydENyZWF0ZUppbXVMYXllclZpZXdzKClcblxuICAgICAgICB0aGlzLnN0YXR1cyA9IEppbXVNYXBWaWV3U3RhdHVzLkxvYWRlZFxuICAgICAgICB0aGlzLm1hcFZpZXdNYW5hZ2VyLnNldEppbXVNYXBWaWV3KHRoaXMpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcylcbiAgICAgIH0sIGFzeW5jIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICB0aGlzLnN0YXR1cyA9IEppbXVNYXBWaWV3U3RhdHVzLkZhaWxlZFxuICAgICAgICB0aGlzLm1hcFZpZXdNYW5hZ2VyLnNldEppbXVNYXBWaWV3KHRoaXMpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0aGlzKVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHRoaXMuamltdU1hcFZpZXdMb2FkUHJvbWlzZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIEppbXVMYXllclZpZXcgd2hlbiBpdCdzIGxvYWRlZC5cbiAgICpcbiAgICogRm9yIGEgSmltdUxheWVyVmlldyBpZCwgdGhlIGluc3RhbmNlIG1heSBub3QgaGF2ZSBiZWVuIGNyYWV0ZWQsIGJ1dCB3ZSBjYW4gbWFrZSBzdXJlIHRoZSBmaXJzdCBsZXZlbCBKaW11TGF5ZXJWaWV3IGFyZSBjcmVhdGVkLlxuICAgKiBTbywgZm9yIGEgSmltdUxheWVyVmlldyBpZCwgd2UnbGwgbWFrZSBzdXJlIGl0cyBwYXJlbnQgSmltdUxheWVyVmlldyBnZXQgY3JlYXRlZCBhbmQgcmVhZHksIGFuZCB0aGUgSmltdUxheWVyVmlldyB3aWxsIGNyZWF0ZSBpdHMgY2hpbGRyZW4gSmltdUxheWVyVmlld3MgaW4gdGhlIHJlYWR5KCkuXG4gICAqL1xuICBhc3luYyB3aGVuSmltdUxheWVyVmlld0xvYWRlZCAoamltdUxheWVyVmlld0lkOiBzdHJpbmcpOiBQcm9taXNlPEppbXVMYXllclZpZXc+IHtcbiAgICBpZiAodGhpcy5qaW11TGF5ZXJWaWV3TG9hZFByb21pc2VzW2ppbXVMYXllclZpZXdJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmppbXVMYXllclZpZXdMb2FkUHJvbWlzZXNbamltdUxheWVyVmlld0lkXVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm1ha2VTdXJlUGFyZW50TGF5ZXJWaWV3c0xvYWRlZChqaW11TGF5ZXJWaWV3SWQpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuamltdUxheWVyVmlld0xvYWRQcm9taXNlc1tqaW11TGF5ZXJWaWV3SWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5qaW11TGF5ZXJWaWV3TG9hZFByb21pc2VzW2ppbXVMYXllclZpZXdJZF1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KEVycm9yKCdCYWQgamltdUxheWVyVmlld0lkOicgKyBqaW11TGF5ZXJWaWV3SWQpKVxuICAgIH1cbiAgfVxuXG4gIC8qKiBAc2VlIHdoZW5KaW11TGF5ZXJWaWV3TG9hZGVkLCBidXQgdXNlIGRhdGEgc291cmNlICAqL1xuICBhc3luYyB3aGVuSmltdUxheWVyVmlld0xvYWRlZEJ5RGF0YVNvdXJjZSAoZHM6IERhdGFTb3VyY2UpOiBQcm9taXNlPEppbXVMYXllclZpZXc+IHtcbiAgICBjb25zdCBqaW11TGF5ZXJJZCA9IChkcyBhcyB1bmtub3duIGFzIEpTQVBJTGF5ZXJNaXhpbikuamltdUxheWVySWRcbiAgICBpZiAoIWppbXVMYXllcklkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYW4gbm90IGZpbmQgamltdUxheWVySWQgaW4gZGF0YSBzb3VyY2UuJywgZHMuaWQpXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfVxuICAgIGNvbnN0IGppbXVMYXllclZpZXdJZCA9IHRoaXMuZ2V0SmltdUxheWVyVmlld0lkQnlKaW11TGF5ZXJJZChqaW11TGF5ZXJJZClcbiAgICByZXR1cm4gdGhpcy53aGVuSmltdUxheWVyVmlld0xvYWRlZChqaW11TGF5ZXJWaWV3SWQpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1ha2VTdXJlUGFyZW50TGF5ZXJWaWV3c0xvYWRlZCAoamltdUxheWVyVmlld0lkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwcm9taXNlQ291bnQgPSBPYmplY3Qua2V5cyh0aGlzLmppbXVMYXllclZpZXdMb2FkUHJvbWlzZXMpLmxlbmd0aFxuICAgIGNvbnN0IHBhcmVudFByb21pc2VzID0gW11cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuamltdUxheWVyVmlld0xvYWRQcm9taXNlcykuZm9yRWFjaChpZCA9PiB7XG4gICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5qaW11TGF5ZXJWaWV3TG9hZFByb21pc2VzW2lkXVxuXG4gICAgICBpZiAocHJvbWlzZSAmJiBqaW11TGF5ZXJWaWV3SWQuc3RhcnRzV2l0aChpZCkpIHtcbiAgICAgICAgcGFyZW50UHJvbWlzZXMucHVzaChwcm9taXNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChwYXJlbnRQcm9taXNlcylcblxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmppbXVMYXllclZpZXdMb2FkUHJvbWlzZXMpLmxlbmd0aCA+IHByb21pc2VDb3VudCkgeyAvLyBtZWFucyBuZXcgcGFyZW50IGxheWVyIGlzIGNyZWF0ZWRcbiAgICAgIGF3YWl0IHRoaXMubWFrZVN1cmVQYXJlbnRMYXllclZpZXdzTG9hZGVkKGppbXVMYXllclZpZXdJZClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJuIHRoZSBsb2FkZWQgSmltdUxheWVyVmlld3Mgb25seVxuICAgKi9cbiAgYXN5bmMgd2hlbkFsbEppbXVMYXllclZpZXdMb2FkZWQgKCk6IFByb21pc2U8SmltdUxheWVyVmlld3M+IHtcbiAgICBjb25zdCBsb2FkZWRKaW11TGF5ZXJWaWV3cyA9IHt9XG4gICAgYXdhaXQgdGhpcy53aGVuQ2hpbGRKaW11TGF5ZXJWaWV3TG9hZGVkKG51bGwsIGxvYWRlZEppbXVMYXllclZpZXdzKVxuICAgIHJldHVybiBsb2FkZWRKaW11TGF5ZXJWaWV3c1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmUgYSBwYXJlbnQgSmltdUxheWVyVmlldyBpZCwgd2lsbCBsb2FkIGFsbCBvZiBpdHMgY2hpbGRyZW4gSmltdUxheWVyVmlld3MuXG4gICAqIEZvciBmYWlsZWQgSmltdUxheWVyVmlld3MsIHdlJ2xsIGNhdGNoIHRoZSBlcnJvciBidXQgdGhleSBkb24ndCBzdG9wIG90aGVycy5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgd2hlbkNoaWxkSmltdUxheWVyVmlld0xvYWRlZCAoamx2SWQ6IHN0cmluZywgbG9hZGVkSmltdUxheWVyVmlld3M6IEppbXVMYXllclZpZXdzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2hpbGRKaW11TGF5ZXJWaWV3cyA9IGF3YWl0IFByb21pc2UuYWxsKHRoaXMuZ2V0Q2hpbGRKaW11TGF5ZXJWaWV3SWRzKGpsdklkKS5tYXAobHZJZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy53aGVuSmltdUxheWVyVmlld0xvYWRlZChsdklkKS50aGVuKGpsdiA9PiB7XG4gICAgICAgIGxvYWRlZEppbXVMYXllclZpZXdzW2x2SWRdID0gamx2XG4gICAgICAgIHJldHVybiBqbHZcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ppbXVMYXllclZpZXcgZmFpbHMuJywgbHZJZCwgZXJyKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSlcbiAgICB9KSlcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKGNoaWxkSmltdUxheWVyVmlld3MuZmlsdGVyKGx2ID0+IGx2KS5tYXAobHYgPT4gdGhpcy53aGVuQ2hpbGRKaW11TGF5ZXJWaWV3TG9hZGVkKGx2LmlkLCBsb2FkZWRKaW11TGF5ZXJWaWV3cykpKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgSmltdUxheWVyVmlld3MuXG4gICAqL1xuICBnZXRBbGxKaW11TGF5ZXJWaWV3cyAoKTogSmltdUxheWVyVmlld1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmppbXVMYXllclZpZXdzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgcGFyZW50IEppbXVMYXllclZpZXdzLlxuICAgKi9cbiAgZ2V0UGFyZW50SmltdUxheWVyVmlld3MgKGppbXVMYXllclZpZXdJZDogc3RyaW5nKTogSmltdUxheWVyVmlld1tdIHtcbiAgICBjb25zdCBwYXJlbnRKaW11TGF5ZXJWaWV3cyA9IFtdXG4gICAgbGV0IGN1cnJlbnRKaW11TGF5ZXJWaWV3ID0gdGhpcy5qaW11TGF5ZXJWaWV3c1tqaW11TGF5ZXJWaWV3SWRdXG4gICAgd2hpbGUgKGN1cnJlbnRKaW11TGF5ZXJWaWV3Py5wYXJlbnRKaW11TGF5ZXJWaWV3SWQpIHtcbiAgICAgIGNvbnN0IHBhcmVudEppbXVMYXllclZpZXcgPSB0aGlzLmppbXVMYXllclZpZXdzW2N1cnJlbnRKaW11TGF5ZXJWaWV3LnBhcmVudEppbXVMYXllclZpZXdJZF1cbiAgICAgIHBhcmVudEppbXVMYXllclZpZXdzLnB1c2gocGFyZW50SmltdUxheWVyVmlldylcbiAgICAgIGN1cnJlbnRKaW11TGF5ZXJWaWV3ID0gcGFyZW50SmltdUxheWVyVmlld1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50SmltdUxheWVyVmlld3NcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIGNoaWxkIEppbXVMYXllclZpZXdzLlxuICAgKi9cbiAgZ2V0QWxsQ2hpbGRKaW11TGF5ZXJWaWV3cyAoamltdUxheWVyVmlld0lkKTogSmltdUxheWVyVmlld1tdIHtcbiAgICBjb25zdCBjaGlsZExheWVyVmlld3MgPSBbXVxuICAgIHRoaXMuZmluZENoaWxkTGF5ZXJWaWV3KGppbXVMYXllclZpZXdJZCwgY2hpbGRMYXllclZpZXdzKVxuICAgIHJldHVybiBjaGlsZExheWVyVmlld3NcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpcmVjdCBjaGlsZCBKaW11TGF5ZXJWaWV3c1xuICAgKi9cbiAgZ2V0Q2hpbGRKaW11TGF5ZXJWaWV3SWRzIChqaW11TGF5ZXJWaWV3SWQpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuamltdUxheWVyVmlld3MpLmZpbHRlcihsdklkID0+IHRoaXMuamltdUxheWVyVmlld3NbbHZJZF0ucGFyZW50SmltdUxheWVyVmlld0lkID09PSBqaW11TGF5ZXJWaWV3SWQpXG4gIH1cblxuICBwcml2YXRlIGZpbmRDaGlsZExheWVyVmlldyAocGFyZW50SmltdUxheWVyVmlld0lkOiBzdHJpbmcsIGNoaWxkTGF5ZXJWaWV3czogSmltdUxheWVyVmlld1tdKSB7XG4gICAgY29uc3QgbGF5ZXJWaWV3cyA9IHRoaXMuamltdUxheWVyVmlld3NcbiAgICBjb25zdCBsYXllclZpZXdzS2V5cyA9IE9iamVjdC5rZXlzKGxheWVyVmlld3MpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclZpZXdzS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGF5ZXJWaWV3ID0gbGF5ZXJWaWV3c1tsYXllclZpZXdzS2V5c1tpXV1cbiAgICAgIGlmIChsYXllclZpZXcucGFyZW50SmltdUxheWVyVmlld0lkID09PSBwYXJlbnRKaW11TGF5ZXJWaWV3SWQpIHtcbiAgICAgICAgY29uc3QgamltdUxheWVyVmlldyA9IGxheWVyVmlld3NbbGF5ZXJWaWV3c0tleXNbaV1dXG4gICAgICAgIGNoaWxkTGF5ZXJWaWV3cy5wdXNoKGppbXVMYXllclZpZXcpXG4gICAgICAgIHRoaXMuZmluZENoaWxkTGF5ZXJWaWV3KGppbXVMYXllclZpZXcuaWQsIGNoaWxkTGF5ZXJWaWV3cylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdG8gY3JlYXRlIEppbXVMYXllclZpZXdzXG4gICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90IHByb21pc2UgYWxsIGxheWVyIHZpZXdzIGFyZSBjcmVhdGVkLCBidXQgaXQgcHJvbWlzZXMgdGhlIGZpcnN0IGxldmVsIGFyZSBjcmVhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBzdGFydENyZWF0ZUppbXVMYXllclZpZXdzICgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5qaW11TGF5ZXJWaWV3TG9hZFByb21pc2VzKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnZpZXcubWFwLmxheWVycy50b0FycmF5KCkucmV2ZXJzZSgpLmZvckVhY2goYXN5bmMgKGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5jcmVhdGVKaW11TGF5ZXJWaWV3KGxheWVyLCBudWxsLCBpbmRleClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZSBKaW11TGF5ZXJWaWV3cyBlcnJvci4nLCBlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBKaW11TGF5ZXJWaWV3IGFuZCBhZGQgaXQgaW50byB0aGUgamltdUxheWVyVmlld3Mgb2JqZWN0LiBSZXNvbHZlIHRoZSBwcm9taXNlIHdoZW4gaXQgaXMgcmVhZHkuXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck9yU3ViTGF5ZXIgdGhlIGxheWVyIGNhbiBiZSBhIExheWVyIG9yIGEgU3ViTGF5ZXJcbiAgICogQHBhcmFtIHBhcmVudEppbXVMYXllcklkIHRoZSBsYXllcidzIHBhcmVudCBKaW11TGF5ZXJWaWV3IElEXG4gICAqIEBwYXJhbSBpbmRleCBsYXllciBpbmRleFxuICAgKiBAcGFyYW0gcnVudGltZUFkZGVkRGF0YVNvdXJjZSBPcHRpb25hbCwgdGhlIGxheWVyIGRhdGEgc291cmNlIGFkZGVkIGF0IHJ1bnRpbWUuXG4gICAqIEBwYXJhbSBmcm9tUnVudGltZSBPcHRpb25hbCwgdHJ1ZSBtZWFucyB0aGUgSmltdUxheWVyVmlldyBpcyBjcmVhdGVkIGZyb20gcnVudGltZS4gZS5nLiBUaGUgSmltdUxheWVyVmlldyBpcyBjcmVhdGVkIGJ5IEFkZERhdGEgd2lkZ2V0IGF0IHJ1bnRpbWUuIGZhbHNlIG1lYW5zIHRoZSBsYXllciBpcyBhIGJ1aWx0aW4gbGF5ZXIgb2YgV2ViTWFwIG9yIFdlYlNjZW5lLlxuICAgKi9cbiAgYXN5bmMgY3JlYXRlSmltdUxheWVyVmlldyAobGF5ZXJPclN1YkxheWVyOiBfX2VzcmkuTGF5ZXIgfCBBcmNHSVNTdWJMYXllciwgcGFyZW50SmltdUxheWVySWQ6IHN0cmluZywgaW5kZXg6IG51bWJlciwgcnVudGltZUFkZGVkRGF0YVNvdXJjZT86IERhdGFTb3VyY2UsIGZyb21SdW50aW1lPzogYm9vbGVhbik6IFByb21pc2U8SmltdUxheWVyVmlldz4ge1xuICAgIGxldCBqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3ID0gbnVsbFxuXG4gICAgLy8gVGhlIGN1cnJlbnQgcm9vdCBkYXRhIHNvdXJjZSBpcyAnbnVsbCcgaWYgdXNpbmcgdGhlIGRlZmF1bHQgd2ViIG1hcC5cbiAgICBjb25zdCByb290RHM6IE1hcERhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlSWQpIGFzIE1hcERhdGFTb3VyY2VcbiAgICBjb25zdCBsYXllcklkID0gbGF5ZXJPclN1YkxheWVyLmlkICsgJydcbiAgICBjb25zdCBqaW11TGF5ZXJJZCA9IGRhdGFTb3VyY2VVdGlscy5nZXRKaW11TGF5ZXJJZEJ5SlNBUElMYXllcihsYXllck9yU3ViTGF5ZXIpXG4gICAgY29uc3QgamltdUxheWVyVmlld0lkID0gdGhpcy5nZXRKaW11TGF5ZXJWaWV3SWRCeUppbXVMYXllcklkKGppbXVMYXllcklkKVxuICAgIGNvbnN0IHBhcmVudEppbXVMYXllclZpZXdJZCA9IHBhcmVudEppbXVMYXllcklkID8gdGhpcy5nZXRKaW11TGF5ZXJWaWV3SWRCeUppbXVMYXllcklkKHBhcmVudEppbXVMYXllcklkKSA6IG51bGxcblxuICAgIGxldCBsYXllckRTSWQgPSBydW50aW1lQWRkZWREYXRhU291cmNlPy5pZCB8fCByb290RHM/LmdldERhdGFTb3VyY2VJZEJ5TGF5ZXIobGF5ZXJPclN1YkxheWVyKVxuXG4gICAgLy8gY2FzZTEobW9zdCBjYXNlcyk6IElmIHdlIGNhbiBnZXQgbGF5ZXJEU0lkIGZyb20gcm9vdERzIChKaW11TWFwVmlldyB3ZWJtYXAvd2Vic2NlbmUpLCBtZWFucyB0aGUgbGF5ZXIgaXMgYSBsYXllciBvZiB0aGUgcm9vdCBkYXRhIHNvdXJjZS5cbiAgICAvLyBjYXNlMjogSWYgd2UgY2FuIGdldCBsYXllckRTSWQgYnkgcnVudGltZUFkZGVkRGF0YVNvdXJjZSwgbWVhbnMgdGhlIGxheWVyIGlzIGEgbGF5ZXIgb2YgbmV3bHkgYWRkZWQgZGF0YSBzb3VyY2UgYXQgcnVudGltZSwgdGhlIGxheWVyIHVybCBzdWZmaXggaXMgbGlrZSAnL01hcFNlcnZlcicgb3IgJy9NYXBTZXJ2ZXIvMCcuXG4gICAgLy8gY2FzZTM6IElmIHdlIGNhbid0IGdldCBsYXllckRTSWQgYW5kIGZyb21SdW50aW1lIGlzIHRydWUsIG1lYW5zIHRoZSBsYXllciBpcyBhIHN1YmxheWVyIG9mIG5ld2x5IGFkZGVkIGRhdGEgc291cmNlIGF0IHJ1bnRpbWUsIHRoZSBsYXllciB1cmwgc3VmZml4IGlzIGxpa2UgJy9NYXBTZXJ2ZXIvMCcuXG4gICAgLy8gY2FzZTQ6IElmIHdlIGNhbid0IGdldCBsYXllckRTSWQgYW5kIGZyb21SdW50aW1lIGlzIGZhbHNlLCBtZWFucyByb290RHMgaXMgbnVsbCAoZGVmYXVsdCB3ZWJtYXApLCBhbmQgdGhlIGxheWVyIGlzIGEgbGF5ZXIgb2YgZGVmYXVsdCB3ZWJtYXAuXG5cbiAgICAvLyBjaGVjayBjYXNlM1xuICAgIGlmICghbGF5ZXJEU0lkICYmIGZyb21SdW50aW1lKSB7XG4gICAgICBpZiAocGFyZW50SmltdUxheWVyVmlld0lkKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudEppbXVMYXllclZpZXcgPSB0aGlzLmppbXVMYXllclZpZXdzW3BhcmVudEppbXVMYXllclZpZXdJZF1cbiAgICAgICAgY29uc3QgcGFyZW50RGF0YVNvdXJjZSA9IHBhcmVudEppbXVMYXllclZpZXcgJiYgcGFyZW50SmltdUxheWVyVmlldy5nZXRMYXllckRhdGFTb3VyY2UoKSBhcyBhbnlcblxuICAgICAgICBpZiAocGFyZW50RGF0YVNvdXJjZSAmJiBwYXJlbnREYXRhU291cmNlLmdldERhdGFTb3VyY2VJZEJ5TGF5ZXIpIHtcbiAgICAgICAgICBsYXllckRTSWQgPSBwYXJlbnREYXRhU291cmNlLmdldERhdGFTb3VyY2VJZEJ5TGF5ZXIobGF5ZXJPclN1YkxheWVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIGxheWVyRFNJZCBpcyBhIHN0cmluZyBiZWNhdXNlIEppbXVMYXllclZpZXcgd2lsbCBjYWxsIGxheWVyRFNJZC5zdGFydHNXaXRoKClcbiAgICBpZiAoIWxheWVyRFNJZCkge1xuICAgICAgbGF5ZXJEU0lkID0gJydcbiAgICB9XG5cbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zOiBKaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zID0ge1xuICAgICAgaWQ6IGppbXVMYXllclZpZXdJZCxcbiAgICAgIGppbXVMYXllcklkOiBqaW11TGF5ZXJJZCxcbiAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBsYXllckRTSWQsXG4gICAgICBqaW11TWFwVmlld0lkOiB0aGlzLmlkLFxuICAgICAgcGFyZW50SmltdUxheWVyVmlld0lkLFxuICAgICAgbWFwVmlld01hbmFnZXI6IHRoaXMubWFwVmlld01hbmFnZXIsXG4gICAgICBpbmRleCxcbiAgICAgIGZyb21SdW50aW1lLFxuICAgICAgdXJsSGFzaExheWVyc1Zpc2liaWxpdHk6IHRoaXMudXJsSGFzaExheWVyc1Zpc2liaWxpdHlcbiAgICB9IGFzIEppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnNcbiAgICAvLyBmb3IgU3ViTGF5ZXIsIHdlJ2xsIHVzZSB0aGUgZGVjbGFyZWRDbGFzcyB0byBjaGVjayBsYXllciB0eXBlXG4gICAgLy8gZm9yIGxheWVyLCB3ZSdsbCB1c2UgdGhlIHR5cGUgdG8gY2hlY2tcbiAgICBzd2l0Y2ggKGxheWVyT3JTdWJMYXllci5kZWNsYXJlZENsYXNzKSB7XG4gICAgICBjYXNlICdlc3JpLmxheWVycy5zdXBwb3J0LlN1YmxheWVyJzogLy8gc3VibGF5ZXIgaW4gYSBNYXBJbWFnZUxheWVyIG9yIGEgVGlsZUxheWVyXG4gICAgICAgIGNvbnN0IHN1YkxheWVyID0gbGF5ZXJPclN1YkxheWVyIGFzIF9fZXNyaS5TdWJsYXllclxuICAgICAgICBjb25zdCBsYXllclR5cGUgPSBzdWJMYXllci5zb3VyY2VKU09OPy5sYXllclR5cGUgfHwgc3ViTGF5ZXIuc291cmNlSlNPTj8udHlwZVxuICAgICAgICBpZiAobGF5ZXJUeXBlID09PSBTdXBwb3J0ZWRMYXllclNlcnZpY2VUeXBlcy5Hcm91cExheWVyKSB7XG4gICAgICAgICAgaWYgKHN1YkxheWVyLnN1YmxheWVycz8ubGVuZ3RoID4gMCkgeyAvLyB3ZSBkb24ndCBjcmVhdGUgdGhlIHZpZXcgaWYgdGhlIGdyb3VwIGlzIGVtcHR5XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgdHlwZTogTGF5ZXJUeXBlcy5Hcm91cExheWVyLFxuICAgICAgICAgICAgICBsYXllcjogc3ViTGF5ZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBqaW11TGF5ZXJWaWV3ID0gbmV3IEppbXVHcm91cExheWVyVmlldyhqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChsYXllclR5cGUgPT09IFN1cHBvcnRlZExheWVyU2VydmljZVR5cGVzLkZlYXR1cmVMYXllcikgeyAvLyBzdXBwb3J0IGZlYXR1ZXIgbGF5ZXIgb25seSBub3dcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMsIHtcbiAgICAgICAgICAgIHR5cGU6IExheWVyVHlwZXMuRmVhdHVyZUxheWVyLFxuICAgICAgICAgICAgbGF5ZXI6IHN1YkxheWVyXG4gICAgICAgICAgfSlcbiAgICAgICAgICBqaW11TGF5ZXJWaWV3ID0gbmV3IEppbXVGZWF0dXJlTGF5ZXJWaWV3KGppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMgYXMgSmltdUZlYXR1cmVMYXllclZpZXdPcHRpb25zKVxuICAgICAgICB9IGVsc2UgaWYgKGxheWVyVHlwZSA9PT0gJ1Jhc3RlciBMYXllcicpIHtcbiAgICAgICAgICAvLyBEYXRhU291cmNlTWFuYWdlciBkb2Vzbid0IHN1cHBvcnQgJ1Jhc3RlciBMYXllcicgZGF0YSBzb3VyY2UsIHNvIHdlIGNhbid0IHVzZSBTdXBwb3J0ZWRMYXllclNlcnZpY2VUeXBlcy5SYXN0ZXJMYXllciwgdXNlIGhhcmQgY29kZSAnUmFzdGVyIExheWVyJyBoZXJlLlxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oamltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucywge1xuICAgICAgICAgICAgLy8gTWFwVmlld2VyIGNhbid0IGFkZCB0aGUgbGF5ZXIgYnkgc3ViTGF5ZXIudXJsLCBpdCBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIGludG8gYSBzcGVjaWZpYyBsYXllciwgc28gc2V0IGl0IHRvICdzdWJsYXllcicuXG4gICAgICAgICAgICB0eXBlOiBzdWJMYXllci50eXBlLFxuICAgICAgICAgICAgbGF5ZXI6IHN1YkxheWVyXG4gICAgICAgICAgfSlcbiAgICAgICAgICBqaW11TGF5ZXJWaWV3ID0gbmV3IEppbXVMYXllclZpZXcoamltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVW5zdXBwb3J0ZWQgc3ViIGxheWVyIHR5cGUuJywgbGF5ZXJJZClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gV2Ugc3VwcG9ydCB0aGUgc3VibGF5ZXIgaW4gYSBNYXBJbWFnZUxheWVyIG9yIGEgVGlsZUxheWVyIG9ubHkgbm93LlxuICAgICAgICAvLyBmcm9tIGhlcmUsIHRoZSBsYXllciBpcyBhIGxheWVyIG5vdy5cbiAgICAgICAgY29uc3QgbGF5ZXIgPSBsYXllck9yU3ViTGF5ZXIgYXMgX19lc3JpLkxheWVyXG4gICAgICAgIHN3aXRjaCAobGF5ZXIudHlwZSkge1xuICAgICAgICAgIGNhc2UgTGF5ZXJUeXBlcy5TY2VuZUxheWVyOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zLCB7XG4gICAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGppbXVMYXllclZpZXcgPSBuZXcgSmltdVNjZW5lTGF5ZXJWaWV3KGppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMgYXMgSmltdVNjZW5lTGF5ZXJWaWV3T3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSBMYXllclR5cGVzLkZlYXR1cmVMYXllcjpcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oamltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucywge1xuICAgICAgICAgICAgICB0eXBlOiBsYXllci50eXBlLFxuICAgICAgICAgICAgICBsYXllcjogbGF5ZXJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBqaW11TGF5ZXJWaWV3ID0gbmV3IEppbXVGZWF0dXJlTGF5ZXJWaWV3KGppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMgYXMgSmltdUZlYXR1cmVMYXllclZpZXdPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlIExheWVyVHlwZXMuTWFwSW1hZ2VMYXllcjpcbiAgICAgICAgICBjYXNlIExheWVyVHlwZXMuVGlsZUxheWVyOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zLCB7XG4gICAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChsYXllci50eXBlID09PSBMYXllclR5cGVzLk1hcEltYWdlTGF5ZXIpIHtcbiAgICAgICAgICAgICAgamltdUxheWVyVmlldyA9IG5ldyBKaW11TWFwSW1hZ2VMYXllclZpZXcoamltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxheWVyLnR5cGUgPT09IExheWVyVHlwZXMuVGlsZUxheWVyKSB7XG4gICAgICAgICAgICAgIGppbXVMYXllclZpZXcgPSBuZXcgSmltdVRpbGVMYXllclZpZXcoamltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSBMYXllclR5cGVzLkdyb3VwTGF5ZXI6XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgdmlldzogbnVsbCxcbiAgICAgICAgICAgICAgdHlwZTogbGF5ZXIudHlwZSxcbiAgICAgICAgICAgICAgbGF5ZXI6IGxheWVyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgamltdUxheWVyVmlldyA9IG5ldyBKaW11R3JvdXBMYXllclZpZXcoamltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSBMYXllclR5cGVzLlN1YnR5cGVHcm91cExheWVyOlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zLCB7XG4gICAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGppbXVMYXllclZpZXcgPSBuZXcgSmltdVN1YlR5cGVHcm91cExheWVyVmlldyhqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zLCB7XG4gICAgICAgICAgICAgIHR5cGU6IGxheWVyLnR5cGUsXG4gICAgICAgICAgICAgIGxheWVyOiBsYXllclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGppbXVMYXllclZpZXcgPSBuZXcgSmltdUxheWVyVmlldyhqaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChqaW11TGF5ZXJWaWV3KSB7XG4gICAgICB0aGlzLmFkZEppbXVMYXllclZpZXcoamltdUxheWVyVmlldylcbiAgICAgIGNvbnN0IG5vVmlldyA9IGppbXVMYXllclZpZXcubGF5ZXIuZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkubGF5ZXJzLnN1cHBvcnQuU3VibGF5ZXInIHx8XG4gICAgICAgICAgICAgICAgICAgICBqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuR3JvdXBMYXllciB8fFxuICAgICAgICAgICAgICAgICAgICAgamltdUxheWVyVmlldy5sYXllci5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5sYXllcnMuc3VwcG9ydC5TdWJ0eXBlU3VibGF5ZXInXG4gICAgICBjb25zdCB2aWV3UHJvbXNpc2UgPSBub1ZpZXcgPyBQcm9taXNlLnJlc29sdmUobnVsbCkgOiB0aGlzLnZpZXcud2hlbkxheWVyVmlldyhqaW11TGF5ZXJWaWV3LmxheWVyKVxuXG4gICAgICB0aGlzLmppbXVMYXllclZpZXdMb2FkUHJvbWlzZXNbamltdUxheWVyVmlld0lkXSA9IHZpZXdQcm9tc2lzZS50aGVuKCh2aWV3KSA9PiB7XG4gICAgICAgIGppbXVMYXllclZpZXcudmlldyA9IHZpZXdcbiAgICAgICAgcmV0dXJuIGppbXVMYXllclZpZXcucmVhZHkoKVxuICAgICAgfSkudGhlbihsdiA9PiB7XG4gICAgICAgIGx2LmlzTG9hZGVkID0gdHJ1ZVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25KaW11TGF5ZXJWaWV3Q3JlYXRlZChsdilcbiAgICAgICAgfSwgMClcblxuICAgICAgICByZXR1cm4gbHZcbiAgICAgIH0pXG4gICAgICByZXR1cm4gamltdUxheWVyVmlld1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblN0b3JlQ2hhbmdlIChwcmVEc0luZm86IHsgW2RzSWQ6IHN0cmluZ106IElNRGF0YVNvdXJjZUluZm8gfSwgZHNJbmZvOiB7IFtkc0lkOiBzdHJpbmddOiBJTURhdGFTb3VyY2VJbmZvIH0pIHtcbiAgICBPYmplY3Qua2V5cyhkc0luZm8gfHwge30pLmZvckVhY2goZHNJZCA9PiB7XG4gICAgICBpZiAoZHNJbmZvW2RzSWRdLmluc3RhbmNlU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkNyZWF0ZWQgJiYgKCFwcmVEc0luZm8/Lltkc0lkXSB8fCBwcmVEc0luZm9bZHNJZF0uaW5zdGFuY2VTdGF0dXMgIT09IERhdGFTb3VyY2VTdGF0dXMuQ3JlYXRlZCkpIHtcbiAgICAgICAgLy8gbWVhbnMgdGhlIERTIGlzIGp1c3QgY3JlYXRlZFxuICAgICAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKVxuXG4gICAgICAgIC8vIGZpbmQgdGhlIEppbXVMYXlWaWV3IHRoYXQgZG9lcyBub3QgaGF2ZSBEUyBhc3NpZ25uZWRcbiAgICAgICAgY29uc3Qgamx2SWQgPSBPYmplY3Qua2V5cyh0aGlzLmppbXVMYXllclZpZXdzKS5maW5kKGpsdklkID0+IHtcbiAgICAgICAgICByZXR1cm4gIXRoaXMuamltdUxheWVyVmlld3Nbamx2SWRdLmxheWVyRGF0YVNvdXJjZUlkICYmIHRoaXMuamltdUxheWVyVmlld3Nbamx2SWRdLmppbXVMYXllcklkID09PSAoZHMgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW4pPy5qaW11TGF5ZXJJZFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChqbHZJZCkge1xuICAgICAgICAgIHRoaXMuamltdUxheWVyVmlld3Nbamx2SWRdLmxheWVyRGF0YVNvdXJjZUlkID0gZHMuaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIHNlbGVjdGVkIGZlYXR1cmVzLlxuICAgKi9cbiAgY2xlYXJTZWxlY3RlZEZlYXR1cmVzICgpIHtcbiAgICAvLyBUT0RPOiBuZWVkIHRvIGF3YWl0IGhlcmUgYmVmb3JlIHB1Ymxpc2ggbWVzc2FnZVxuICAgIHRoaXMuY2xlYXJBbGxKaW11TGF5ZXJWaWV3c1NlbGVjdFJlY29yZCgpXG5cbiAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKG5ldyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UodGhpcy5tYXBXaWRnZXRJZCwgW10pKVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBmZWF0dXJlcyBpbiBhbGwgbGF5ZXJzIGluIHRoZSBtYXAgYnkgYSBncmFwaGljLlxuICAgKiBAcGFyYW0gZ3JhcGhpYyBUaGlzIGlzIHRoZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IGBHcmFwaGljYF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLUdyYXBoaWMuaHRtbCkuXG4gICAqIEBwYXJhbSBzcGF0aWFsUmVsYXRpb25zaGlwIFRoaXMgcGFyYW1ldGVyIGRlZmluZXMgdGhlIHNwYXRpYWwgcmVsYXRpb25zaGlwIHRvIHF1ZXJ5IGZlYXR1cmVzIGluIHRoZSBsYXllciwgc2VlIGRldGFpbHMgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS1yZXN0LXN1cHBvcnQtUXVlcnkuaHRtbCNzcGF0aWFsUmVsYXRpb25zaGlwKS5cbiAgICogQHBhcmFtIHNlbGVjdGlvbk1vZGUgVGhpcyBwYXJhbWV0ZXIgaXMgdG8gaW5kaWNhdGUgaG93IHRoZSBuZXcgc2VsZWN0IG9wZXJhdGlvbiBhZmZlY3RzIHRoZSBvcmlnaW5hbCBzZWxlY3Rpb24uIEl0IGNhbiBvbmx5IGJlIHRoZSBmb2xsb3dpbmcgZW51bWVyYXRpb24gdmFsdWVzOiBgTmV3YCwgYEFkZFRvQ3VycmVudGAsIGBSZW1vdmVGcm9tQ3VycmVudGAsIG9yIGBTZWxlY3RGcm9tQ3VycmVudGAuXG4gICAqICovXG4gIGFzeW5jIHNlbGVjdEZlYXR1cmVzQnlHcmFwaGljIChncmFwaGljOiBfX2VzcmkuR3JhcGhpYywgc3BhdGlhbFJlbGF0aW9uc2hpcDogc3RyaW5nLCBzZWxlY3Rpb25Nb2RlOiBEYXRhU291cmNlU2VsZWN0aW9uTW9kZSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnXG4gICAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcbiAgICAgIGNvbnN0IGdlb21ldHJ5RW5naW5lOiBfX2VzcmkuZ2VvbWV0cnlFbmdpbmUgPSBtb2R1bGVzWzBdXG4gICAgICBsZXQgZ2VvbWV0cnkgPSBncmFwaGljLmdlb21ldHJ5XG4gICAgICBpZiAoKGdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcgfHwgZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlsaW5lJykpIHtcbiAgICAgICAgY29uc3QgcmVzb2x1dGlvbiA9IHRoaXMudmlldy5zY2FsZSAqIDIuNTQgLyA5NjAwXG4gICAgICAgIGdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGdlb21ldHJ5LCAxMCAqIHJlc29sdXRpb24sICdtZXRlcnMnKSBhcyBhbnlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcbiAgICAgICAgc3BhdGlhbFJlbGF0aW9uc2hpcDogc3BhdGlhbFJlbGF0aW9uc2hpcCxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXG4gICAgICAgIHJldHVyblo6IHRydWUsXG4gICAgICAgIG91dEZpZWxkczogWycqJ11cbiAgICAgIH0gYXMgYW55XG5cbiAgICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gdGhpcy5qaW11TGF5ZXJWaWV3c1xuICAgICAgY29uc3QgamltdUxheWVyVmlld0tleXMgPSBPYmplY3Qua2V5cyhqaW11TGF5ZXJWaWV3cylcbiAgICAgIGNvbnN0IGFsbFNlbGVjdFByb21pc2VzID0gW11cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqaW11TGF5ZXJWaWV3S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0ZW1wSmltdUxheWVyVmlldyA9IGppbXVMYXllclZpZXdzW2ppbXVMYXllclZpZXdLZXlzW2ldXSBhcyAoSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpXG5cbiAgICAgICAgaWYgKHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikge1xuICAgICAgICAgIGlmICh0ZW1wSmltdUxheWVyVmlldy5zZWxlY3RGZWF0dXJlc0J5UXVlcnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBTZWxlY3RQcm9taXNlID0gdGVtcEppbXVMYXllclZpZXcuc2VsZWN0RmVhdHVyZXNCeVF1ZXJ5KHF1ZXJ5LCBzZWxlY3Rpb25Nb2RlKVxuICAgICAgICAgICAgYWxsU2VsZWN0UHJvbWlzZXMucHVzaCh0ZW1wU2VsZWN0UHJvbWlzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5vblNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZSgpXG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChhbGxTZWxlY3RQcm9taXNlcylcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNhbmNlbFNlbGVjdEJ5UXVlcnkgKCkge1xuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gdGhpcy5qaW11TGF5ZXJWaWV3c1xuICAgIGNvbnN0IGppbXVMYXllclZpZXdLZXlzID0gT2JqZWN0LmtleXMoamltdUxheWVyVmlld3MpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbXVMYXllclZpZXdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gamltdUxheWVyVmlld3NbamltdUxheWVyVmlld0tleXNbaV1dIGFzIChKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldylcblxuICAgICAgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIgfHwgamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpIHtcbiAgICAgICAgaWYgKGppbXVMYXllclZpZXcuY2FuY2VsU2VsZWN0QnlRdWVyeSkge1xuICAgICAgICAgIGppbXVMYXllclZpZXcuY2FuY2VsU2VsZWN0QnlRdWVyeSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdEJ5UXVlcnlQcm9ncmVzcyAoKTogbnVtYmVyIHtcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3UHJvZ3Jlc3NlczogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gdGhpcy5qaW11TGF5ZXJWaWV3c1xuICAgIGNvbnN0IGppbXVMYXllclZpZXdLZXlzID0gT2JqZWN0LmtleXMoamltdUxheWVyVmlld3MpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbXVMYXllclZpZXdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gamltdUxheWVyVmlld3NbamltdUxheWVyVmlld0tleXNbaV1dIGFzIChKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldylcblxuICAgICAgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIgfHwgamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpIHtcbiAgICAgICAgaWYgKGppbXVMYXllclZpZXcuZ2V0U2VsZWN0UXVlcnlQcm9ncmVzcykge1xuICAgICAgICAgIGNvbnN0IGppbXVMYXllclZpZXdQcm9ncmVzcyA9IGppbXVMYXllclZpZXcuZ2V0U2VsZWN0UXVlcnlQcm9ncmVzcygpXG4gICAgICAgICAgamltdUxheWVyVmlld1Byb2dyZXNzZXMucHVzaChqaW11TGF5ZXJWaWV3UHJvZ3Jlc3MpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoamltdUxheWVyVmlld1Byb2dyZXNzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYWxsUHJvZ3Jlc3MgPSBqaW11TGF5ZXJWaWV3UHJvZ3Jlc3Nlcy5yZWR1Y2UoKGFjYywgamltdUxheWVyVmlld1Byb2dyZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiBhY2MgKyBqaW11TGF5ZXJWaWV3UHJvZ3Jlc3NcbiAgICAgIH0pXG5cbiAgICAgIGFsbFByb2dyZXNzIC89IGppbXVMYXllclZpZXdQcm9ncmVzc2VzLmxlbmd0aFxuXG4gICAgICAvLyBjbGFtcCBwcm9ncmVzcyB0byBbMCwgMV1cbiAgICAgIGFsbFByb2dyZXNzID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oYWxsUHJvZ3Jlc3MsIDEpKVxuXG4gICAgICByZXR1cm4gYWxsUHJvZ3Jlc3NcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgYEppbXVNYXBWaWV3YCBpbnN0YW5jZSBhbmQgdGhlIFtBcmNHSVMgTWFwcyBTREsgZm9yIEphdmFTY3JpcHQgYFZpZXdgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktdmlld3MtVmlldy5odG1sKSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jYWNoZUxpc3RlbmVycyA9IFtdXG4gICAgdGhpcy5yZXN0b3JlTGlzdGVuZXJzID0gW11cbiAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZXNDaGFuZ2VMaXN0ZW5lcnMgPSBbXVxuICAgIHRoaXMuamltdUxheWVyVmlld0NyZWF0ZWRMaXN0ZW5lcnMgPSBbXVxuICAgIHRoaXMuc2VsZWN0QnlRdWVyeVByb2dyZXNzQ2hhbmdlTGlzdGVuZXJzID0gW11cblxuICAgIGlmICh0aGlzLndhdGNoUG9wdXBGZWF0dXJlc0hhbmRsZSkge1xuICAgICAgdGhpcy53YXRjaFBvcHVwRmVhdHVyZXNIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMud2F0Y2hQb3B1cEZlYXR1cmVzSGFuZGxlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLndhdGNoUG9wdXBTZWxlY3RlZEhhbmRsZSkge1xuICAgICAgdGhpcy53YXRjaFBvcHVwU2VsZWN0ZWRIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMud2F0Y2hQb3B1cFNlbGVjdGVkSGFuZGxlID0gbnVsbFxuICAgIH1cblxuICAgIC8vIGNsZWFyIGFkZFRvTWFwRGF0YXMgYW5kIHNob3dPbk1hcERhdGFzIGZvciBjdXJyZW50IEppbXVNYXBWaWV3XG4gICAgY29uc3QgdGFyZ2V0SmltdU1hcFZpZXdJZCA9IHRoaXMuaWRcbiAgICBjb25zdCBtdXRhYmxlU3RhdGUgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy5tYXBXaWRnZXRJZF0pIHx8IHt9XG4gICAgY29uc3QgYWRkVG9NYXBEYXRhczogQWRkVG9NYXBEYXRhcyA9IG11dGFibGVTdGF0ZS5hZGRUb01hcERhdGFzXG4gICAgY29uc3Qgc2hvd09uTWFwRGF0YXM6IFNob3dPbk1hcERhdGFzID0gbXV0YWJsZVN0YXRlLnNob3dPbk1hcERhdGFzXG5cbiAgICBpZiAoYWRkVG9NYXBEYXRhcykge1xuICAgICAgY29uc3QgbGF5ZXJJZHMgPSBPYmplY3Qua2V5cyhhZGRUb01hcERhdGFzKVxuICAgICAgbGF5ZXJJZHMuZm9yRWFjaChsYXllcklkID0+IHtcbiAgICAgICAgY29uc3QgYWRkVG9NYXBEYXRhID0gYWRkVG9NYXBEYXRhc1tsYXllcklkXVxuXG4gICAgICAgIGlmIChhZGRUb01hcERhdGEgJiYgYWRkVG9NYXBEYXRhLm1hcFdpZGdldElkID09PSB0aGlzLm1hcFdpZGdldElkICYmIGFkZFRvTWFwRGF0YS5qaW11TWFwVmlld0lkID09PSB0YXJnZXRKaW11TWFwVmlld0lkKSB7XG4gICAgICAgICAgZGVsZXRlIGFkZFRvTWFwRGF0YXNbbGF5ZXJJZF1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoc2hvd09uTWFwRGF0YXMpIHtcbiAgICAgIGNvbnN0IGxheWVySWRzID0gT2JqZWN0LmtleXMoc2hvd09uTWFwRGF0YXMpXG4gICAgICBsYXllcklkcy5mb3JFYWNoKGxheWVySWQgPT4ge1xuICAgICAgICBjb25zdCBzaG93T25NYXBEYXRhID0gc2hvd09uTWFwRGF0YXNbbGF5ZXJJZF1cblxuICAgICAgICBpZiAoc2hvd09uTWFwRGF0YSAmJiBzaG93T25NYXBEYXRhLm1hcFdpZGdldElkID09PSB0aGlzLm1hcFdpZGdldElkICYmIHNob3dPbk1hcERhdGEuamltdU1hcFZpZXdJZCA9PT0gdGFyZ2V0SmltdU1hcFZpZXdJZCkge1xuICAgICAgICAgIGRlbGV0ZSBzaG93T25NYXBEYXRhc1tsYXllcklkXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgSmltdUxheWVyVmlld3NcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IHRoaXMuamltdUxheWVyVmlld3NcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3SWRzID0gT2JqZWN0LmtleXMoamltdUxheWVyVmlld3MpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqaW11TGF5ZXJWaWV3SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0ZW1wSmltdUxheWVyVmlldyA9IGppbXVMYXllclZpZXdzW2ppbXVMYXllclZpZXdJZHNbaV1dXG4gICAgICB0ZW1wSmltdUxheWVyVmlldy5kZXN0cm95KClcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IHZpZXdcbiAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICBpZiAoIXRoaXMudmlldy5kZXN0cm95ZWQpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldy5ncmFwaGljcyAmJiB0aGlzLnZpZXcuZ3JhcGhpY3MuZGVzdHJveWVkKSB7XG4gICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy5jb250YWluZXIgPSBudWxsXG4gICAgICAgIGlmICh0aGlzLnZpZXcuYWxsTGF5ZXJWaWV3cyAmJiB0aGlzLnZpZXcuYWxsTGF5ZXJWaWV3cy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICB0aGlzLnZpZXcuYWxsTGF5ZXJWaWV3cy5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52aWV3LmxheWVyVmlld3MgJiYgdGhpcy52aWV3LmxheWVyVmlld3MuZGVzdHJveWVkKSB7XG4gICAgICAgICAgdGhpcy52aWV3LmxheWVyVmlld3MuZGVzdHJveSgpXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQmVmb3JlIHJlZmFjdG9yLCB0aGUgdG9vbHMgYXJlIG5vdCBkZXN0cm95ZWQgZWl0aGVyLCBhbmQgd2UgZG9uJ3QgZmluZCBhbnkgaXNzdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEhvd2V2ZXIsIGRlc3RvcnkgdGhlIHRvb2xzIGluc3RhbmNlIHdpbGwgcmVtb3ZlIHRoZSB0b29sIGNvbnRhaW5lciBET00sIHdoaWNoIGNhdXNlcyB3ZSBjYW4ndCBzZWUgdGhlIHRvb2wuXG4gICAgICAgICAqIFNvLCBsZXQncyBrZWVwIHRoZSBjdXJyZW50IGxvZ2ljLlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gdGhpcy5qaW11TWFwVG9vbHMuZm9yRWFjaCh0b29sID0+IHtcbiAgICAgICAgLy8gICBpZiAoIXRvb2wuaW5zdGFuY2U/LmRlc3Ryb3llZCkge1xuICAgICAgICAvLyAgICAgdG9vbC5pbnN0YW5jZS5kZXN0cm95KClcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIHRoaXMuamltdU1hcFRvb2xzID0gW11cblxuICAgICAgICB0aGlzLnZpZXcuZGVzdHJveSgpXG5cbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldERlZmF1bHRKaW11TWFwVmlld0lkICgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3c0luZm86IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4gPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mb1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhqaW11TWFwVmlld3NJbmZvIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBqaW11TWFwVmlld3NJbmZvW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IHRoaXMubWFwV2lkZ2V0SWQpXG4gIH1cblxuICAvKipcbiAgICogRHJhdyBkYXRhIG9uIHRoZSBtYXAsIHVzaW5nIGEgZGVkaWNhdGVkIFtgR3JhcGhpY3NMYXllcmBdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS1sYXllcnMtR3JhcGhpY3NMYXllci5odG1sKVxuICAgKiBmb3IgZXZlcnkgZGF0YSBlbnRyeS4gVGhpcyB3aWxsIGNsZWFyIHRoZSBsYXllcnMgZHJhd24gcHJldmlvdXNseS5cbiAgICovXG4gIGRyYXdEYXRhT25NYXAgKG5ld1Nob3dPbk1hcERhdGFzOiBTaG93T25NYXBEYXRhcykge1xuICAgIC8vIFRPRE86IHRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGFueSBtZXNzYWdlIGFjdGlvbnMvZGF0YSBhY3Rpb25zIGFyZSB0cmlnZ2VyZWRcblxuICAgIC8vIFdlIHVzZSBib3RoIHRoaXMubmV3U2hvd09uTWFwRGF0YXMgYW5kIG5ld1Nob3dPbk1hcERhdGFzIHRvIGFkZC91cGRhdGUvcmVtb3ZlIGxheWVycy5cbiAgICAvLyB0aGlzLm5ld1Nob3dPbk1hcERhdGFzIGNvbWVzIGZyb20gSmltdU1hcFZpZXcsIG5ld1Nob3dPbk1hcERhdGFzIGNvbWVzIGZyb20gTXV0YWJsZVN0b3JlTWFuYWdlci5cbiAgICAvLyB0aGlzLnNob3dPbk1hcERhdGFzIHJlcHJlc2VudHMgdGhlIGFkZGVkIGxheWVyIGluIHRoZSBjdXJyZW50IE1hcCwgcmVmbGVjdGluZyB0aGUgc3RhdGUgb2YgdGhlIGN1cnJlbnQgTWFwLlxuICAgIC8vIG5ld1Nob3dPbk1hcERhdGFzIHJlcHJlc2VudHMgdGhlIGxheWVyIGluIHRoZSBmdXR1cmUgTWFwIGFuZCByZWZsZWN0cyB0aGUgc3RhdGUgb2YgdGhlIGZ1dHVyZSBNYXAuXG4gICAgLy8gV2UgZGlmZiB0aGUgY2hhbmdlcyBiZXR3ZWVuIHRoaXMuc2hvd09uTWFwRGF0YXMgYW5kIG5ld1Nob3dPbk1hcERhdGFzIHRvIGFkZC91cGRhdGUvcmVtb3ZlIGxheWVycy5cblxuICAgIC8vIGRhdGEgYWN0aW9uIHByb21pc2VzXG4gICAgY29uc3QgZGF0YUFjdGlvblByb21pc2VzOiBBcnJheTxQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+PiA9IFtdXG5cbiAgICAvLyBwcmVwYXJpbmcgYWRkIGRhdGEgYW5kIHVwZGF0ZSBkYXRhLlxuICAgIE9iamVjdC5lbnRyaWVzKG5ld1Nob3dPbk1hcERhdGFzKS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IGxheWVySWQgPSBlbnRyeVswXVxuICAgICAgY29uc3QgbmV3U2hvd09uTWFwRGF0YSA9IGVudHJ5WzFdXG4gICAgICBsZXQgamltdU1hcFZpZXdJZCA9IG5ld1Nob3dPbk1hcERhdGEuamltdU1hcFZpZXdJZFxuICAgICAgLy8gVGhlcmUgaXMgbm8gamltdU1hcFZpZXdJZCB3aGlsZSBnZW5lcmF0aW5nIHRoZSBhY3Rpb24gZGF0YSBpZiB0aGUgbWFwIHdpZGdldCBoYXNuJ3QgYmVlbiBsb2FkZWQgaW4gdGhlIGFub3RoZXIgcGFnZS92aWV3LFxuICAgICAgLy8gdXNlIGEgZGVmYXVsdCBqaW11TWFwVmlld0lkIHRvIHNob3cgZGF0YS5cbiAgICAgIGlmICghamltdU1hcFZpZXdJZCAmJiBuZXdTaG93T25NYXBEYXRhLm1hcFdpZGdldElkID09PSB0aGlzLm1hcFdpZGdldElkKSB7XG4gICAgICAgIGppbXVNYXBWaWV3SWQgPSB0aGlzLl9nZXREZWZhdWx0SmltdU1hcFZpZXdJZCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChqaW11TWFwVmlld0lkID09PSB0aGlzLmlkKSB7XG4gICAgICAgIGxldCBwcm9taXNlOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+ID0gbnVsbFxuXG4gICAgICAgIGlmICh0aGlzLnNob3dPbk1hcERhdGFzW2xheWVySWRdKSB7XG4gICAgICAgICAgLy8gdXBkYXRlIGRhdGFcbiAgICAgICAgICBwcm9taXNlID0gdGhpcy51cGRhdGVEcmF3bkRhdGFSZWNvcmRTZXQobmV3U2hvd09uTWFwRGF0YS5kYXRhU2V0LCBsYXllcklkLCBuZXdTaG93T25NYXBEYXRhLnRpdGxlLCBuZXdTaG93T25NYXBEYXRhLnN5bWJvbE9wdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgZGF0YVxuICAgICAgICAgIHByb21pc2UgPSB0aGlzLmRyYXdEYXRhUmVjb3JkU2V0KG5ld1Nob3dPbk1hcERhdGEuZGF0YVNldCwgbGF5ZXJJZCwgbmV3U2hvd09uTWFwRGF0YS50aXRsZSwgbmV3U2hvd09uTWFwRGF0YS5zeW1ib2xPcHRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2hvd09uTWFwRGF0YS50eXBlID09PSBBY3Rpb25UeXBlLkRhdGFBY3Rpb24pIHtcbiAgICAgICAgICBkYXRhQWN0aW9uUHJvbWlzZXMucHVzaChwcm9taXNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93T25NYXBEYXRhc1tsYXllcklkXSA9IG5ld1Nob3dPbk1hcERhdGFcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5zaG93T25NYXBEYXRhcykuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBjb25zdCBsYXllcklkID0gZW50cnlbMF1cbiAgICAgIGlmICghbmV3U2hvd09uTWFwRGF0YXNbbGF5ZXJJZF0pIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnZpZXcubWFwLmZpbmRMYXllckJ5SWQobGF5ZXJJZClcbiAgICAgICAgZGVsZXRlIHRoaXMuc2hvd09uTWFwRGF0YXNbbGF5ZXJJZF1cbiAgICAgICAgbGF5ZXIgJiYgdGhpcy52aWV3Lm1hcC5yZW1vdmUobGF5ZXIpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIG5lZWRzIHRvIHpvb20gdG8gZ3JhcGhpY3MgaWYgdGhlIGFjdGlvbiBpcyBkYXRhIGFjdGlvblxuICAgIFByb21pc2UuYWxsKGRhdGFBY3Rpb25Qcm9taXNlcykudGhlbigoZ3JhcGhpY3NBcnJheSkgPT4ge1xuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBncmFwaGljc0FycmF5LmZsYXQoKVxuXG4gICAgICBpZiAoZ3JhcGhpY3MubGVuZ3RoID4gMCkge1xuICAgICAgICB6b29tVG9VdGlscy56b29tVG8odGhpcy52aWV3LCBncmFwaGljcywge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIGxlZnQ6IDUwLFxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICAgICAgdG9wOiA1MCxcbiAgICAgICAgICAgIGJvdHRvbTogNTBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRoZSBmZWF0dXJlcyBpbiBhIFtgR3JhcGhpY3NMYXllcmBdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS1sYXllcnMtR3JhcGhpY3NMYXllci5odG1sKS5cbiAgICovXG4gIGFzeW5jIGRyYXdEYXRhUmVjb3JkU2V0IChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCB0YXJnZXRMYXllcklkOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBzeW1ib2xPcHRpb24/OiBTeW1ib2xPcHRpb24pOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcbiAgICBdKS50aGVuKGFzeW5jIG1vZHVsZXMgPT4ge1xuICAgICAgY29uc3QgW0dyYXBoaWNzTGF5ZXJdID0gbW9kdWxlc1xuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBhd2FpdCB0aGlzLmdldEdyYXBoaWNzRnJvbVJlY29yZHMoZGF0YVNldCwgc3ltYm9sT3B0aW9uKVxuICAgICAgY29uc3QgZ3JhcGhpY3NMYXllciA9IG5ldyBHcmFwaGljc0xheWVyKHtcbiAgICAgICAgaWQ6IHRhcmdldExheWVySWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgbGlzdE1vZGU6ICdoaWRlJyxcbiAgICAgICAgZ3JhcGhpY3M6IGdyYXBoaWNzXG4gICAgICB9KVxuICAgICAgdGhpcy52aWV3Lm1hcC5hZGQoZ3JhcGhpY3NMYXllcilcbiAgICAgIHJldHVybiBncmFwaGljc1xuICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgIHJldHVybiBbXVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBkcmF3biBbYEdyYXBoaWNzTGF5ZXJgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2VzcmktbGF5ZXJzLUdyYXBoaWNzTGF5ZXIuaHRtbCkuXG4gICAqL1xuICBhc3luYyB1cGRhdGVEcmF3bkRhdGFSZWNvcmRTZXQgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQsIHRhcmdldExheWVySWQ6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIHN5bWJvbE9wdGlvbj86IFN5bWJvbE9wdGlvbik6IFByb21pc2U8X19lc3JpLkdyYXBoaWNbXT4ge1xuICAgIC8vIFRPRE86IHRoaXMgbWV0aG9kIG1heWJlIGNhbGxlZCBtdWxpcGxlIHRpbWVzIHdoZW4gbWFwIGNvbnRpbnVvdXNseSBoYW5kbGUgRXh0ZW50Q2hhbmdlIG1lc3NhZ2VcbiAgICBjb25zdCBsYXllciA9IHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZCh0YXJnZXRMYXllcklkKVxuICAgIGxldCBncmFwaGljcyA9IFtdXG5cbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgIGxldCBkYXRhU2V0UmVjb3Jkc0NoYW5nZWQgPSBmYWxzZVxuICAgICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGFTZXQucmVjb3JkcyB8fCBbXVxuICAgICAgY29uc3Qgb2xkUmVjb3JkcyA9IHRoaXMuc2hvd09uTWFwRGF0YXNbdGFyZ2V0TGF5ZXJJZF0/LmRhdGFTZXQucmVjb3JkcyB8fCBbXVxuXG4gICAgICBpZiAobmV3UmVjb3Jkcz8ubGVuZ3RoID09PSBvbGRSZWNvcmRzPy5sZW5ndGgpIHtcbiAgICAgICAgZGF0YVNldFJlY29yZHNDaGFuZ2VkID0gbmV3UmVjb3Jkcy5zb21lKChyZWNvcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZC5nZXRJZCgpICE9PSBvbGRSZWNvcmRzW2luZGV4XT8uZ2V0SWQoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVNldFJlY29yZHNDaGFuZ2VkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVNldFJlY29yZHNDaGFuZ2VkKSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgbGF5ZXIucmVtb3ZlQWxsKClcbiAgICAgICAgZ3JhcGhpY3MgPSBhd2FpdCB0aGlzLmdldEdyYXBoaWNzRnJvbVJlY29yZHMoZGF0YVNldCwgc3ltYm9sT3B0aW9uKVxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGxheWVyLmFkZE1hbnkoZ3JhcGhpY3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyYXBoaWNzXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBncmFwaGljcyBmcm9tIGBkYXRhUmVjb3Jkc2BcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZ2V0R3JhcGhpY3NGcm9tUmVjb3JkcyAoZGF0YVNldDogRGF0YVJlY29yZFNldCwgc3ltYm9sT3B0aW9uPzogU3ltYm9sT3B0aW9uKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2Vzcmkvc3ltYm9scy9zdXBwb3J0L3N5bWJvbFV0aWxzJyxcbiAgICAgICdlc3JpL3N5bWJvbHMvc3VwcG9ydC9qc29uVXRpbHMnXG4gICAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcbiAgICAgIGNvbnN0IFtzeW1ib2xVdGlscywganNvblV0aWxzXSA9IG1vZHVsZXNcbiAgICAgIGNvbnN0IGZlYXR1cmVTZXQgPSBhd2FpdCBmZWF0dXJlVXRpbHMuY29udmVydERhdGFSZWNvcmRTZXRUb0ZlYXR1cmVTZXQoZGF0YVNldClcblxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBmZWF0dXJlU2V0LmZlYXR1cmVzLm1hcChhc3luYyAoZ3JhcGhpYykgPT4ge1xuICAgICAgICAvLyBkb24ndCBzaG93IHBvcHVwIGZvciBHcmFwaGljc0xheWVyLCBzbyBuZWVkIHRvIG1ha2Ugc3VyZSBncmFwaGljLnNvdXJjZUxheWVyIGlzIGVtcHR5XG4gICAgICAgIC8vIGl0IGlzIHNhZmUgdG8gc2V0IGdyYXBoaWMuc291cmNlTGF5ZXIgdG8gbnVsbCBoZXJlIGJlY2F1c2UgZmVhdHVyZVV0aWxzLmNvbnZlcnREYXRhUmVjb3JkU2V0VG9GZWF0dXJlU2V0KCkgY2xvbmUgdGhlIGdyYXBoaWNcbiAgICAgICAgKGdyYXBoaWMgYXMgYW55KS5zb3VyY2VMYXllciA9IG51bGxcblxuICAgICAgICBpZiAoIWdyYXBoaWMuc3ltYm9sKSB7XG4gICAgICAgICAgLy8gZS5nLiAnZXNyaUdlb21ldHJ5TXVsdGlwb2ludCdcbiAgICAgICAgICBjb25zdCBkc0dlb21ldHJ5VHlwZSA9IGRhdGFTZXQuZGF0YVNvdXJjZS5nZXRHZW9tZXRyeVR5cGUoKVxuXG4gICAgICAgICAgLy8gZS5nLiAnbXVsdGlwb2ludCdcbiAgICAgICAgICBjb25zdCBqc0FQSUdlb21ldHJ5VHlwZSA9IGRhdGFTb3VyY2VVdGlscy5jaGFuZ2VSZXN0QVBJR2VvbWV0cnlUeXBlVG9KU0FQSUdlb21ldHJ5VHlwZShkc0dlb21ldHJ5VHlwZSlcblxuICAgICAgICAgIC8vIGUuZy4gJ3BvaW50J1xuICAgICAgICAgIGxldCBzeW1ib2xHZW9tZXRyeVR5cGU6IERlZmF1bHRTeW1ib2xUeXBlXG5cbiAgICAgICAgICBpZiAoanNBUElHZW9tZXRyeVR5cGUgPT09ICdtdWx0aXBvaW50Jykge1xuICAgICAgICAgICAgc3ltYm9sR2VvbWV0cnlUeXBlID0gJ3BvaW50J1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNBUElHZW9tZXRyeVR5cGUgPT09ICdleHRlbnQnKSB7XG4gICAgICAgICAgICBzeW1ib2xHZW9tZXRyeVR5cGUgPSAncG9seWdvbidcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3ltYm9sR2VvbWV0cnlUeXBlID0ganNBUElHZW9tZXRyeVR5cGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncmFwaGljLnN5bWJvbCA9IGF3YWl0IHRoaXMuZ2V0U3ltYm9sKHN5bWJvbFV0aWxzLCBqc29uVXRpbHMsIGdyYXBoaWMsIHN5bWJvbEdlb21ldHJ5VHlwZSwgc3ltYm9sT3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcblxuICAgICAgcmV0dXJuIGZlYXR1cmVTZXQuZmVhdHVyZXNcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogZ2V0IHN5bWJvbFxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBnZXRTeW1ib2wgKHN5bWJvbFV0aWxzLCBqc29uVXRpbHMsIGdyYXBoaWMsIGdlb21ldHJ5VHlwZTogRGVmYXVsdFN5bWJvbFR5cGUsIHN5bWJvbE9wdGlvbjogU3ltYm9sT3B0aW9uKSB7XG4gICAgLy8gdXNlIGNvZGUgdG8gbWFpbnRhaW4gJ3N5bWJvbE9wdGlvbicgY29tcGF0aWJpbGl0eSBoZXJlXG4gICAgLy8gRm9yIGFwcCB3YXMgY3JlYXRlZCBiZWZvcmUgb25saW5lMTAuMSAoaW5sY3VkZSAxMC4xKSwgYWN0aW9uQ29uZmlnIGlzIHVuZGVmaW5lZCwgdGhlIGZpbmFsICdzeW1ib2xPcHRpb24nIGlzIHVuZGVmaW5lZC5cbiAgICAvLyBGb3IgYXBwIHdhcyBjcmVhdGVkIG9yIHNhdmVkIGFmdGVyIG9ubGluZTEwLjEsIGFjdGlvbkNvbmZpZyBpcyBhIG9iamVjdCxcbiAgICAvLyAgaWYgYWN0aW9uQ29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sIGlzIHRydWUsIG1lYW5zIGNoZWNrICdVc2UgY3VzdG9tIHN5bWJvbHMnIG9wdGlvbiwgdGhlIGZpbmFsICdzeW1ib2xPcHRpb24nIGlzIGFjdGlvbkNvbmZpZy5zeW1ib2xPcHRpb25cbiAgICAvLyAgaWYgYWN0aW9uQ29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sIGlzIGZhbHNlLCBtZWFucyB1bmNoZWNrICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyBvcHRpb24sIHRoZSBmaW5hbCAnc3ltYm9sT3B0aW9uJyBpcyBudWxsXG5cbiAgICAvLyBTdW1tYXJ5OlxuICAgIC8vIGZvciAnc3ltYm9sT3B0aW9uJywgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdmFsdWVzICd1bmRlZmluZWQnIGFuZCAnbnVsbCc6XG4gICAgLy8gICB1bmRlZmluZWQ6IGFwcCB3YXMgY3JlYXRlZCBiZWZvcmUgb25saW5lMTAuMSAoaW5sY3VkZSAxMC4xKSwgdXNlIGRlZmF1bHQgc3ltYm9sO1xuICAgIC8vICAgbnVsbDogYXBwIHdhcyBjcmVhdGVkIG9yIHNhdmVkIGFmdGVyIG9ubGluZTEwLjEsIHVzZSBkZWZhdWx0IHJlbmRlcmVyIG9mIGxheWVyLlxuXG4gICAgbGV0IHN5bWJvbCA9IG51bGxcblxuICAgIGlmIChzeW1ib2xPcHRpb24pIHtcbiAgICAgIC8vICdVc2UgY3VzdG9tIHN5bWJvbHMnIG9wdGlvblxuICAgICAgaWYgKHN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbCAmJiBnZW9tZXRyeVR5cGUgPT09ICdwb2ludCcpIHtcbiAgICAgICAgc3ltYm9sID0ganNvblV0aWxzLmZyb21KU09OKHN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbClcbiAgICAgIH0gZWxzZSBpZiAoc3ltYm9sT3B0aW9uLnBvbHlsaW5lU3ltYm9sICYmIGdlb21ldHJ5VHlwZSA9PT0gJ3BvbHlsaW5lJykge1xuICAgICAgICBzeW1ib2wgPSBqc29uVXRpbHMuZnJvbUpTT04oc3ltYm9sT3B0aW9uLnBvbHlsaW5lU3ltYm9sKVxuICAgICAgfSBlbHNlIGlmIChzeW1ib2xPcHRpb24ucG9seWdvblN5bWJvbCAmJiBnZW9tZXRyeVR5cGUgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzeW1ib2wgPSBqc29uVXRpbHMuZnJvbUpTT04oc3ltYm9sT3B0aW9uLnBvbHlnb25TeW1ib2wpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzeW1ib2xPcHRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gPD0gb25saW5lIDEwLjEsIHVzZSBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgpIHRvIGNyZWF0ZSBkZWZhdWx0IDJEIHN5bWJvbFxuICAgICAgc3ltYm9sID0gdGhpcy5nZXREZWZhdWx0U3ltYm9sKHN5bWJvbFV0aWxzLCBqc29uVXRpbHMsIGdyYXBoaWMsIGdlb21ldHJ5VHlwZSlcbiAgICB9IGVsc2UgaWYgKHN5bWJvbE9wdGlvbiA9PT0gbnVsbCkge1xuICAgICAgLy8gJ1VzZSBjdXN0b20gc3ltYm9scycgb3B0aW9uXG4gICAgICAvLyB0aGUgcmV0dXJuIHZhbHVlIG1heWJlIG51bGxcbiAgICAgIHN5bWJvbCA9IHRoaXMuZ2V0RGVmYXVsdFN5bWJvbEJ5UmVuZGVyZXIoc3ltYm9sVXRpbHMsIGpzb25VdGlscywgZ3JhcGhpYylcbiAgICB9XG5cbiAgICBpZiAoIXN5bWJvbCkge1xuICAgICAgc3ltYm9sID0gdGhpcy5nZXREZWZhdWx0U3ltYm9sKHN5bWJvbFV0aWxzLCBqc29uVXRpbHMsIGdyYXBoaWMsIGdlb21ldHJ5VHlwZSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3ltYm9sXG4gIH1cblxuICAvKipcbiAgICogZ2V0IGRlZmF1bHQgc3ltYm9sXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGdldERlZmF1bHRTeW1ib2wgKHN5bWJvbFV0aWxzLCBqc29uVXRpbHMsIGdyYXBoaWMsIGdlb21ldHJ5VHlwZSkge1xuICAgIGxldCBzeW1ib2wgPSBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbChnZW9tZXRyeVR5cGUpXG4gICAgc3ltYm9sID0ganNvblV0aWxzLmZyb21KU09OKHN5bWJvbClcblxuICAgIGlmIChncmFwaGljPy5sYXllciAmJiBnZW9tZXRyeVR5cGUgPT09ICdwb2x5bGluZScpIHtcbiAgICAgIC8vIGxldCBzeW1ib2wgdXNlcyB0aGUgd2lkdGggb2Ygc3ltYm9sRnJvbVJlbmRlcmVyXG4gICAgICBjb25zdCBzeW1ib2xGcm9tUmVuZGVyZXIgPSBhd2FpdCB0aGlzLmdldERlZmF1bHRTeW1ib2xCeVJlbmRlcmVyKHN5bWJvbFV0aWxzLCBqc29uVXRpbHMsIGdyYXBoaWMpXG5cbiAgICAgIGlmIChzeW1ib2xGcm9tUmVuZGVyZXIpIHtcbiAgICAgICAgaWYgKHN5bWJvbEZyb21SZW5kZXJlcj8uY29sb3IpIHtcbiAgICAgICAgICBzeW1ib2xGcm9tUmVuZGVyZXIuY29sb3IgPSBzeW1ib2wuY29sb3JcbiAgICAgICAgfSBlbHNlIGlmIChzeW1ib2xGcm9tUmVuZGVyZXI/Lm1hdGVyaWFsKSB7XG4gICAgICAgICAgc3ltYm9sRnJvbVJlbmRlcmVyLm1hdGVyaWFsLmNvbG9yID0gc3ltYm9sLmNvbG9yXG4gICAgICAgIH1cblxuICAgICAgICBzeW1ib2wgPSBzeW1ib2xGcm9tUmVuZGVyZXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3ltYm9sXG4gIH1cblxuICAvKipcbiAgICogZ2V0IGRlZmF1bHQgc3ltYm9sIGZyb20gcmVuZGVyZXIsIG1heWJlIHJldHVybiBudWxsXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGdldERlZmF1bHRTeW1ib2xCeVJlbmRlcmVyIChzeW1ib2xVdGlsczogX19lc3JpLnN5bWJvbFV0aWxzLCBqc29uVXRpbHM6IF9fZXNyaS5zeW1ib2xzU3VwcG9ydEpzb25VdGlscywgZ3JhcGhpYykge1xuICAgIGxldCByZXN1bHRTeW1ib2wgPSBudWxsXG4gICAgbGV0IGRpc3BsYXllZFN5bWJvbCA9IG51bGxcblxuICAgIHRyeSB7XG4gICAgICBkaXNwbGF5ZWRTeW1ib2wgPSBhd2FpdCBzeW1ib2xVdGlscy5nZXREaXNwbGF5ZWRTeW1ib2woZ3JhcGhpYylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkaXNwbGF5ZWRTeW1ib2wgPSBudWxsXG4gICAgICByZXN1bHRTeW1ib2wgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKGRpc3BsYXllZFN5bWJvbCkge1xuICAgICAgcmVzdWx0U3ltYm9sID0gZGlzcGxheWVkU3ltYm9sXG5cbiAgICAgIC8vIGlmIHN5bWJvbCBpcyBhIDNEIHN5bWJvbCBhbmQgdGhlIHZpZXcgaXMgMkQgTWFwVmlldywgd2UgbmVlZCB0byBjb252ZXJ0IGl0IHRvIDJEIHN5bWJvbFxuICAgICAgY29uc3QgaXMyRFZpZXcgPSB0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLnZpZXdzLk1hcFZpZXcnXG5cbiAgICAgIGlmIChpczJEVmlldykge1xuICAgICAgICBpZiAoZGlzcGxheWVkU3ltYm9sLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLnN5bWJvbHMuUG9pbnRTeW1ib2wzRCcpIHtcbiAgICAgICAgICBjb25zdCBzeW1ib2xKc29uID0ge1xuICAgICAgICAgICAgdHlwZTogJ2VzcmlTTVMnLFxuICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMTUwXSxcbiAgICAgICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMTUwXSxcbiAgICAgICAgICAgICAgd2lkdGg6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwb2ludFN5bWJvbDNEID0gZGlzcGxheWVkU3ltYm9sIGFzIF9fZXNyaS5Qb2ludFN5bWJvbDNEXG4gICAgICAgICAgY29uc3Qgc3ltYm9sTGF5ZXJzID0gcG9pbnRTeW1ib2wzRC5zeW1ib2xMYXllcnMudG9BcnJheSgpXG5cbiAgICAgICAgICBpZiAoc3ltYm9sTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gc3ltYm9sTGF5ZXJzWzBdLm1hdGVyaWFsPy5jb2xvcj8udG9KU09OKClcblxuICAgICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAgIHN5bWJvbEpzb24uY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICBzeW1ib2xKc29uLm91dGxpbmUuY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3VsdFN5bWJvbCA9IGpzb25VdGlscy5mcm9tSlNPTihzeW1ib2xKc29uKVxuICAgICAgICB9IGVsc2UgaWYgKGRpc3BsYXllZFN5bWJvbC5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5zeW1ib2xzLkxpbmVTeW1ib2wzRCcpIHtcbiAgICAgICAgICBjb25zdCBzeW1ib2xKc29uID0ge1xuICAgICAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxuICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMTUwXSxcbiAgICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbGluZVN5bWJvbDNEID0gZGlzcGxheWVkU3ltYm9sIGFzIF9fZXNyaS5MaW5lU3ltYm9sM0RcbiAgICAgICAgICBjb25zdCBzeW1ib2xMYXllcnMgPSBsaW5lU3ltYm9sM0Quc3ltYm9sTGF5ZXJzLnRvQXJyYXkoKVxuXG4gICAgICAgICAgaWYgKHN5bWJvbExheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5lU3ltYm9sM0RMYXllciA9IHN5bWJvbExheWVycy5maW5kKHN5bWJvbExheWVyID0+IHN5bWJvbExheWVyLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLnN5bWJvbHMuTGluZVN5bWJvbDNETGF5ZXInKSBhcyBfX2VzcmkuTGluZVN5bWJvbDNETGF5ZXJcblxuICAgICAgICAgICAgaWYgKGxpbmVTeW1ib2wzRExheWVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbGluZVN5bWJvbDNETGF5ZXIubWF0ZXJpYWw/LmNvbG9yPy50b0pTT04oKVxuXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHN5bWJvbEpzb24uY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGxpbmVTeW1ib2wzRExheWVyLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sSnNvbi53aWR0aCA9IGxpbmVTeW1ib2wzRExheWVyLnNpemVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBzeW1ib2xMYXllcnNbMF0ubWF0ZXJpYWw/LmNvbG9yPy50b0pTT04oKVxuXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHN5bWJvbEpzb24uY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0U3ltYm9sID0ganNvblV0aWxzLmZyb21KU09OKHN5bWJvbEpzb24pXG4gICAgICAgIH0gZWxzZSBpZiAoZGlzcGxheWVkU3ltYm9sLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLnN5bWJvbHMuUG9seWdvblN5bWJvbDNEJykge1xuICAgICAgICAgIGNvbnN0IHN5bWJvbEpzb24gPSB7XG4gICAgICAgICAgICB0eXBlOiAnZXNyaVNGUycsXG4gICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxNTBdLFxuICAgICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxNTBdLFxuICAgICAgICAgICAgICB3aWR0aDogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBvbHlnb25TeW1ib2wzRCA9IGRpc3BsYXllZFN5bWJvbCBhcyBfX2VzcmkuUG9seWdvblN5bWJvbDNEXG4gICAgICAgICAgY29uc3Qgc3ltYm9sTGF5ZXJzID0gcG9seWdvblN5bWJvbDNELnN5bWJvbExheWVycy50b0FycmF5KClcblxuICAgICAgICAgIGlmIChzeW1ib2xMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlsbFN5bWJvbDNETGF5ZXIgPSBzeW1ib2xMYXllcnMuZmluZChzeW1ib2xMYXllciA9PiBzeW1ib2xMYXllci5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5zeW1ib2xzLkZpbGxTeW1ib2wzRExheWVyJykgYXMgX19lc3JpLkZpbGxTeW1ib2wzRExheWVyXG4gICAgICAgICAgICBjb25zdCBleHRydWRlU3ltYm9sM0RMYXllciA9IHN5bWJvbExheWVycy5maW5kKHN5bWJvbExheWVyID0+IHN5bWJvbExheWVyLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLnN5bWJvbHMuRXh0cnVkZVN5bWJvbDNETGF5ZXInKSBhcyBfX2VzcmkuRXh0cnVkZVN5bWJvbDNETGF5ZXJcblxuICAgICAgICAgICAgaWYgKGZpbGxTeW1ib2wzRExheWVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZmlsbFN5bWJvbDNETGF5ZXIubWF0ZXJpYWw/LmNvbG9yPy50b0pTT04oKVxuXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHN5bWJvbEpzb24uY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICAgIHN5bWJvbEpzb24ub3V0bGluZS5jb2xvciA9IGNvbG9yXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZmlsbFN5bWJvbDNETGF5ZXIub3V0bGluZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGxpbmVDb2xvciA9IGZpbGxTeW1ib2wzRExheWVyLm91dGxpbmUuY29sb3I/LnRvSlNPTigpXG5cbiAgICAgICAgICAgICAgICBpZiAob3V0bGluZUNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICBzeW1ib2xKc29uLm91dGxpbmUuY29sb3IgPSBvdXRsaW5lQ29sb3JcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlsbFN5bWJvbDNETGF5ZXIub3V0bGluZS5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgc3ltYm9sSnNvbi5vdXRsaW5lLndpZHRoID0gZmlsbFN5bWJvbDNETGF5ZXIub3V0bGluZS5zaXplXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4dHJ1ZGVTeW1ib2wzRExheWVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZXh0cnVkZVN5bWJvbDNETGF5ZXIubWF0ZXJpYWw/LmNvbG9yPy50b0pTT04oKVxuXG4gICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgIHN5bWJvbEpzb24uY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICAgIHN5bWJvbEpzb24ub3V0bGluZS5jb2xvciA9IGNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHRTeW1ib2wgPSBqc29uVXRpbHMuZnJvbUpTT04oc3ltYm9sSnNvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRTeW1ib2xcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbGF5ZXJzIGFjY29yZGluZyB0byB0aGUgY29ycmVzcG9uZGluZyB0eXBlcyBvZiBkYXRhIHNvdXJjZVxuICAgKi9cbiAgYWRkT3JSZW1vdmVEYXRhT25NYXAgKG5ld0FkZFRvTWFwRGF0YXM6IEFkZFRvTWFwRGF0YXMpIHtcbiAgICAvLyBwcmVwYXJpbmcgYWRkIGRhdGEuXG4gICAgT2JqZWN0LmVudHJpZXMobmV3QWRkVG9NYXBEYXRhcykuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBjb25zdCBhZGRUb01hcERhdGFJZCA9IGVudHJ5WzBdXG4gICAgICBjb25zdCBhZGRUb01hcERhdGEgPSBlbnRyeVsxXVxuXG4gICAgICBsZXQgamltdU1hcFZpZXdJZCA9IGFkZFRvTWFwRGF0YS5qaW11TWFwVmlld0lkXG4gICAgICAvLyBUaGVyZSBpcyBubyBqaW11TWFwVmlld0lkIHdoaWxlIGdlbmVyYXRpbmcgdGhlIGFjdGlvbiBkYXRhIGlmIHRoZSBtYXAgd2lkZ2V0IGhhc24ndCBiZWVuIGxvYWRlZCBpbiB0aGUgYW5vdGhlciBwYWdlL3ZpZXcsXG4gICAgICAvLyB1c2UgYSBkZWZhdWx0IGppbXVNYXBWaWV3SWQgdG8gc2hvdyBkYXRhLlxuICAgICAgaWYgKCFqaW11TWFwVmlld0lkICYmIGFkZFRvTWFwRGF0YS5tYXBXaWRnZXRJZCA9PT0gdGhpcy5tYXBXaWRnZXRJZCkge1xuICAgICAgICBqaW11TWFwVmlld0lkID0gdGhpcy5fZ2V0RGVmYXVsdEppbXVNYXBWaWV3SWQoKVxuICAgICAgfVxuXG4gICAgICBpZiAoamltdU1hcFZpZXdJZCA9PT0gdGhpcy5pZCAmJiBhZGRUb01hcERhdGEuZGF0YUNoYW5nZVR5cGUgPT09IERhdGFDaGFuZ2VUeXBlLkNyZWF0ZSkge1xuICAgICAgICBpZiAoYWRkVG9NYXBEYXRhLmRhdGFDaGFuZ2VUeXBlID09PSBEYXRhQ2hhbmdlVHlwZS5DcmVhdGUpIHtcbiAgICAgICAgICAvLyBkYXRhU291cmNlLmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UoKSBpcyBhbiBhc3luYyBmdW5jdGlvbiwgc28gd2UgbmVlZCB0byBzZXQgdGhlIGRhdGFDaGFuZ2VUeXBlIHRvICdDcmVhdGluZycgdG8gYXZvaWQgY2FsbGluZyBhZGRMYXllclRvTWFwIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgIGFkZFRvTWFwRGF0YS5kYXRhQ2hhbmdlVHlwZSA9IERhdGFDaGFuZ2VUeXBlLkNyZWF0aW5nXG4gICAgICAgICAgY29uc3QgdGFyZ2V0TGF5ZXJJZCA9IGFkZFRvTWFwRGF0YUlkXG5cbiAgICAgICAgICB0aGlzLmFkZExheWVyVG9NYXAoYWRkVG9NYXBEYXRhLmRhdGFTb3VyY2VJZCwgYWRkVG9NYXBEYXRhSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWRkVG9NYXBEYXRhID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMubWFwV2lkZ2V0SWQsICdhZGRUb01hcERhdGFzJywgYCR7dGFyZ2V0TGF5ZXJJZH1gXSlcbiAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMubWFwV2lkZ2V0SWQsIGBhZGRUb01hcERhdGFzLiR7dGFyZ2V0TGF5ZXJJZH1gLCB7IC4uLmFkZFRvTWFwRGF0YSwgZGF0YUNoYW5nZVR5cGU6IERhdGFDaGFuZ2VUeXBlLkNyZWF0ZWQsIGRhdGFDaGFuZ2VTdGF0dXM6IERhdGFDaGFuZ2VTdGF0dXMuRnVsZmlsbGVkIH0pXG4gICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy5tYXBXaWRnZXRJZCwgYGFkZFRvTWFwRGF0YXMuJHt0YXJnZXRMYXllcklkfS5kYXRhQ2hhbmdlU3RhdHVzYCwgRGF0YUNoYW5nZVN0YXR1cy5SZWplY3RlZClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLm1hcFdpZGdldElkLCBgYWRkVG9NYXBEYXRhcy4ke3RhcmdldExheWVySWR9LmRhdGFDaGFuZ2VTdGF0dXNgLCBEYXRhQ2hhbmdlU3RhdHVzLlJlamVjdGVkQW5kS25vd24pXG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoamltdU1hcFZpZXdJZCA9PT0gdGhpcy5pZCAmJiBhZGRUb01hcERhdGEuZGF0YUNoYW5nZVR5cGUgPT09IERhdGFDaGFuZ2VUeXBlLlJlbW92ZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUxheWVyRnJvbU1hcChhZGRUb01hcERhdGFJZClcbiAgICAgICAgZGVsZXRlIG5ld0FkZFRvTWFwRGF0YXNbYWRkVG9NYXBEYXRhSWRdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGFkZExheWVyVG9NYXAgKGRhdGFTb3VyY2VJZDogc3RyaW5nLCB0YXJnZXRMYXllcklkOiBzdHJpbmcpOiBQcm9taXNlPEppbXVMYXllclZpZXc+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW4gJiBEYXRhU291cmNlXG5cbiAgICAvLyB1c2UgbmV3IGxheWVyIG9iamVjdCB0byBhZGQgdG8gbWFwLCBhdm9pZCBsYXllcnMgYmVpbmcgc2hhcmVkLlxuICAgIGNvbnN0IGxheWVyID0gYXdhaXQgZGF0YVNvdXJjZT8uY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSgpXG4gICAgbGF5ZXIuaWQgPSB0YXJnZXRMYXllcklkXG4gICAgdGhpcy52aWV3Lm1hcC5hZGQobGF5ZXIpXG4gICAgY29uc3QgZnJvbVJ1bnRpbWUgPSB0cnVlXG4gICAgY29uc3QgamltdUxheWVyVmlldyA9IGF3YWl0IHRoaXMuY3JlYXRlSmltdUxheWVyVmlldyhsYXllciwgbnVsbCwgdGhpcy5nZXRNYXhMYXllckluZGV4KCksIGRhdGFTb3VyY2UsIGZyb21SdW50aW1lKVxuICAgIHJldHVybiBqaW11TGF5ZXJWaWV3XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggbGF5ZXIgaW5kZXggb2Ygcm9vdCBsYXllcnNcbiAgICovXG4gIHByaXZhdGUgZ2V0TWF4TGF5ZXJJbmRleCAoKTogbnVtYmVyIHtcbiAgICBsZXQgbWF4ID0gMFxuICAgIE9iamVjdC5rZXlzKHRoaXMuamltdUxheWVyVmlld3MpLmZpbHRlcihsdklkID0+ICF0aGlzLmppbXVMYXllclZpZXdzW2x2SWRdLnBhcmVudEppbXVMYXllclZpZXdJZClcbiAgICAgIC5mb3JFYWNoKGx2SWQgPT4ge1xuICAgICAgICBtYXggPSBNYXRoLm1heCh0aGlzLmppbXVMYXllclZpZXdzW2x2SWRdLmluZGV4LCBtYXgpXG4gICAgICB9KVxuICAgIHJldHVybiBtYXhcbiAgfVxuXG4gIHJlbW92ZUxheWVyRnJvbU1hcCAodGFyZ2V0TGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbGF5ZXJJbk1hcCA9IHRoaXMudmlldy5tYXAuZmluZExheWVyQnlJZCh0YXJnZXRMYXllcklkKVxuICAgIGxheWVySW5NYXAgJiYgdGhpcy52aWV3Lm1hcC5yZW1vdmUobGF5ZXJJbk1hcClcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VMYXllcnNWaXNpYmlsaXR5RnJvbVVybEhhc2ggKCkge1xuICAgIGxldCB1cmxIYXNoTGF5ZXJzVmlzaWJpbGl0eTogVXJsSGFzaExheWVyc1Zpc2liaWxpdHkgPSBudWxsXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYXBwU3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKClcblxuICAgICAgaWYgKGFwcFN0YXRlLnVybEhhc2hPYmplY3QpIHtcbiAgICAgICAgY29uc3Qgd2lkZ2V0VXJsUGFyYW1zID0gYXBwU3RhdGUudXJsSGFzaE9iamVjdFt0aGlzLm1hcFdpZGdldElkXVxuXG4gICAgICAgIGlmICh3aWRnZXRVcmxQYXJhbXMgJiYgd2lkZ2V0VXJsUGFyYW1zLmxheWVyX3Zpc2liaWxpdHkpIHtcbiAgICAgICAgICBjb25zdCBtYXBzTGF5ZXJWaXNpYmlsaXR5ID0gSlNPTi5wYXJzZSh3aWRnZXRVcmxQYXJhbXMubGF5ZXJfdmlzaWJpbGl0eSlcblxuICAgICAgICAgIGlmIChtYXBzTGF5ZXJWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyTWFwTGF5ZXJWaXNpYmlsaXR5ID0gbWFwc0xheWVyVmlzaWJpbGl0eVt0aGlzLmlkXVxuXG4gICAgICAgICAgICBpZiAoY3Vyck1hcExheWVyVmlzaWJpbGl0eSAmJiB0eXBlb2YgY3Vyck1hcExheWVyVmlzaWJpbGl0eSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgdXJsSGFzaExheWVyc1Zpc2liaWxpdHkgPSBjdXJyTWFwTGF5ZXJWaXNpYmlsaXR5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdXJsSGFzaExheWVyc1Zpc2liaWxpdHkgPSBudWxsXG4gICAgICBjb25zb2xlLmVycm9yKCdwYXJzZSBsYXllcnMgdmlzaWJpbGl0eSBmcm9tIHVybCBoYXNoIGVycm9yJywgZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsSGFzaExheWVyc1Zpc2liaWxpdHlcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBsYXllcnMgdmlzaWJpbGl0eSwgaXQgaXMgdXNlZCB0byB1cGRhdGUgdXJsIGhhc2guXG4gICAqL1xuICBwcml2YXRlIGdldEN1cnJlbnRMYXllcnNWaXNpYmlsaXR5Rm9yVXJsSGFzaCAoKTogVXJsSGFzaExheWVyc1Zpc2liaWxpdHkge1xuICAgIGNvbnN0IGxheWVyVmlzaWJpbGl0eU9iakZvck9uZU1hcDogVXJsSGFzaExheWVyc1Zpc2liaWxpdHkgPSB7fVxuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmppbXVMYXllclZpZXdzKVxuICAgIGppbXVMYXllclZpZXdzLmZvckVhY2goamltdUxheWVyVmlldyA9PiB7XG4gICAgICAvLyBvbmx5IHJlY29yZCBsYXllciB2aXNpYmlsaXR5IGZvciBvcmlnaW5hbCBsYXllcnMgaW4gd2ViIG1hcC93ZWIgc2NlbmUsIHNvIGlnbm9yZSBsYXllciB0aGF0IGFkZGVkIGF0IHJ1bnRpbWVcbiAgICAgIC8vIG9ubHkgcmVjb3JkIGxheWVyIHZpc2JpbGl0eSB3aGljaCBjdXJyZW50IHZpc2JpbGl0eSBpcyBkaWZmZXJlbnQgd2l0aCBvcmlnaW5hbCBsYXllciB2aXNpYmlsaXR5IHRvIHJlZHVjZSByZWNvcmQgbGVuZ3RoXG4gICAgICBpZiAoamltdUxheWVyVmlldy5sYXllciAmJiAhamltdUxheWVyVmlldy5mcm9tUnVudGltZSAmJiBqaW11TGF5ZXJWaWV3LmxheWVyLnZpc2libGUgIT09IGppbXVMYXllclZpZXcub3JpZ2luYWxMYXllclZpc2libGUpIHtcbiAgICAgICAgbGF5ZXJWaXNpYmlsaXR5T2JqRm9yT25lTWFwW2ppbXVMYXllclZpZXcuaWRdID0gamltdUxheWVyVmlldy5sYXllci52aXNpYmxlXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBsYXllclZpc2liaWxpdHlPYmpGb3JPbmVNYXBcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICB1cGRhdGVVcmxIYXNoTGF5ZXJWaXNpYmlsaXR5ICgpIHtcbiAgICBjb25zdCBtYXBzTGF5ZXJWaXNpYmlsaXR5OiB7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBVcmxIYXNoTGF5ZXJzVmlzaWJpbGl0eSB9ID0ge31cbiAgICBtYXBzTGF5ZXJWaXNpYmlsaXR5W3RoaXMuaWRdID0gdGhpcy5nZXRDdXJyZW50TGF5ZXJzVmlzaWJpbGl0eUZvclVybEhhc2goKVxuXG4gICAgaWYgKHRoaXMuamltdU1hcFZpZXdHcm91cCkge1xuICAgICAgY29uc3QgamltdUxheWVyVmlld3MgPSB0aGlzLmppbXVNYXBWaWV3R3JvdXAuZ2V0QWxsSmltdU1hcFZpZXdzKClcblxuICAgICAgamltdUxheWVyVmlld3MuZm9yRWFjaChqaW11TWFwVmlldyA9PiB7XG4gICAgICAgIGlmIChqaW11TWFwVmlldyAhPT0gdGhpcykge1xuICAgICAgICAgIG1hcHNMYXllclZpc2liaWxpdHlbamltdU1hcFZpZXcuaWRdID0gamltdU1hcFZpZXcuZ2V0Q3VycmVudExheWVyc1Zpc2liaWxpdHlGb3JVcmxIYXNoKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB1cmxNYW5hZ2VyID0gVXJsTWFuYWdlci5nZXRJbnN0YW5jZSgpXG5cbiAgICBPYmplY3Qua2V5cyhtYXBzTGF5ZXJWaXNpYmlsaXR5KS5mb3JFYWNoKGppbXVNYXBWaWV3SWQgPT4ge1xuICAgICAgY29uc3QgdXJsSGFzaExheWVyc1Zpc2liaWxpdHkgPSBtYXBzTGF5ZXJWaXNpYmlsaXR5W2ppbXVNYXBWaWV3SWRdXG5cbiAgICAgIGlmICghdXJsSGFzaExheWVyc1Zpc2liaWxpdHkgfHwgT2JqZWN0LmtleXModXJsSGFzaExheWVyc1Zpc2liaWxpdHkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgbWFwc0xheWVyVmlzaWJpbGl0eVtqaW11TWFwVmlld0lkXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgbGF5ZXJWaXNpYmlsaXR5U3RyOiBzdHJpbmcgPSBudWxsXG5cbiAgICBpZiAoT2JqZWN0LmtleXMobWFwc0xheWVyVmlzaWJpbGl0eSkubGVuZ3RoID4gMCkge1xuICAgICAgbGF5ZXJWaXNpYmlsaXR5U3RyID0gSlNPTi5zdHJpbmdpZnkobWFwc0xheWVyVmlzaWJpbGl0eSlcbiAgICB9XG5cbiAgICB1cmxNYW5hZ2VyLnNldFdpZGdldFVybFBhcmFtcyh0aGlzLm1hcFdpZGdldElkLCB7XG4gICAgICBsYXllcl92aXNpYmlsaXR5OiBsYXllclZpc2liaWxpdHlTdHJcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgSmltdU1hcFZpZXcgaXMgZGVzdHJveWVkIG9yIG5vdC4gUmV0dXJucyB0cnVlIGlmIHRoZSB2aWV3IGlzIG5vdCBjcmVhdGVkIG9yIGlmIHRoZSB2aWV3IGlzIGRlc3Ryb3llZCwgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2UuXG4gICAqL1xuICBpc0Rlc3Ryb3llZCAoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudmlldykge1xuICAgICAgcmV0dXJuIHRoaXMudmlldy5kZXN0cm95ZWRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgbWFwIGluc3RhbmNlIGlzIGFsaXZlIGFuZCBub3QgZGVzdHJveWVkLCBidXQgbWFwIGNvbnRhaW5lciBpcyBkZXRhY2hlZCBmcm9tIHRoZSBET00gdHJlZS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaXNDYWNoZWQgKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLnZpZXc/LmNvbnRhaW5lclxuICAgIGNvbnN0IGNhY2hlZCA9IHZpZXdDb250YWluZXIgJiYgIWRvY3VtZW50LmJvZHkuY29udGFpbnModmlld0NvbnRhaW5lcilcbiAgICByZXR1cm4gY2FjaGVkXG4gIH1cblxuICAvKipcbiAgICogVGhlIGxpc3RlbmVyIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1hcCBpcyBjYWNoZWQsIHdoaWNoIG1lYW5zIG1hcCBjb250YWluZXIgaXMgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIHRyZWUgYnV0IHRoZSBtYXAgaXMgbm90IGRlc3Ryb3llZC5cbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICovXG4gIGFkZENhY2hlTGlzdGVuZXIgKGxpc3RlbmVyOiBKaW11TWFwVmlld0NhY2hlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FjaGVMaXN0ZW5lcnMuaW5jbHVkZXMobGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLmNhY2hlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAqL1xuICByZW1vdmVDYWNoZUxpc3RlbmVyIChsaXN0ZW5lcjogSmltdU1hcFZpZXdDYWNoZUxpc3RlbmVyKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNhY2hlTGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5jYWNoZUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIG1hcCBjb250YWluZXIgaXMgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIHRyZWUgYnV0IHRoZSBtYXAgaXMgbm90IGRlc3Ryb3llZCxcbiAgICogYSB0eXBpY2FsIHNjZW5hcmlvIGlzIHRoYXQgdGhlIG1hcCBpcyBzY3JvbGxlZCBvdXQgb2YgdGhlIGN1cnJlbnQgcGFnZSBhbmQgbWFwIGJlY29tZXMgaW52aXNpYmxlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNhY2hlICgpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIodGhpcylcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSmltdU1hcFZpZXcgb25DYWNoZSBsaXN0ZW5lciBlcnJvcicsIHRoaXMuaWQsIGxpc3RlbmVyLCBlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhlIGxpc3RlbmVyIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIG1hcCBpcyByZXN0b3JlZCBmcm9tIGNhY2hlZCBzdGF0dXMsIHdoaWNoIG1lYW5zIG1hcCBjb250YWluZXIgaXMgYXR0YWNoZWQgdG8gdGhlIERPTSB0cmVlIGFnYWluLlxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgKi9cbiAgYWRkUmVzdG9yZUxpc3RlbmVyIChsaXN0ZW5lcjogSmltdU1hcFZpZXdSZXN0b3JlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmVzdG9yZUxpc3RlbmVycy5pbmNsdWRlcyhsaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMucmVzdG9yZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgKi9cbiAgcmVtb3ZlUmVzdG9yZUxpc3RlbmVyIChsaXN0ZW5lcjogSmltdU1hcFZpZXdSZXN0b3JlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucmVzdG9yZUxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMucmVzdG9yZUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIG1hcCBjb250YWluZXIgaXMgYXR0YWNoZWQgdG8gdGhlIERPTSB0cmVlIGFnYWluLFxuICAgKiBhIHR5cGljYWwgc2NlbmFyaW8gaXMgdGhhdCB0aGUgY2FjaGVkIG1hcCBpcyBzY3JvbGxlZCBpbnRvIHRoZSBjdXJyZW50IHBhZ2UgYW5kIG1hcCBiZWNvbWVzIHZpc2libGUgYWdhaW4uXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uUmVzdG9yZSAoKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0b3JlTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIodGhpcylcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSmltdU1hcFZpZXcgb25SZXN0b3JlIGxpc3RlbmVyIGVycm9yJywgdGhpcy5pZCwgbGlzdGVuZXIsIGUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgKi9cbiAgYWRkSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2VMaXN0ZW5lciAobGlzdGVuZXI6IEppbXVMYXllclZpZXdTZWxlY3RlZEZlYXR1cmVzQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRGZWF0dXJlc0NoYW5nZUxpc3RlbmVycy5pbmNsdWRlcyhsaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlc0NoYW5nZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgKi9cbiAgcmVtb3ZlSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2VMaXN0ZW5lciAobGlzdGVuZXI6IEppbXVMYXllclZpZXdTZWxlY3RlZEZlYXR1cmVzQ2hhbmdlTGlzdGVuZXIpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRGZWF0dXJlc0NoYW5nZUxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlc0NoYW5nZUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIGppbXVMYXllclZpZXdcbiAgICovXG4gIGFzeW5jIG9uSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2UgKGppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3LCBpc0NsZWFyOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVzQ2hhbmdlTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGlzdGVuZXIoamltdUxheWVyVmlldylcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignb25KaW11TGF5ZXJWaWV3U2VsZWN0ZWRGZWF0dXJlc0NoYW5nZSBsaXN0ZW5lciBlcnJvcicsIHRoaXMuaWQsIGxpc3RlbmVyLCBlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhd2FpdCB0aGlzLmhhbmRsZVBvcHVwT25TZWxlY3Rpb25DaGFuZ2UoamltdUxheWVyVmlldywgaXNDbGVhcilcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgKi9cbiAgYWRkU2VsZWN0QnlRdWVyeVByb2dyZXNzQ2hhbmdlTGlzdGVuZXIgKGxpc3RlbmVyOiBTZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3NDaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3NDaGFuZ2VMaXN0ZW5lcnMuaW5jbHVkZXMobGlzdGVuZXIpKSB7XG4gICAgICB0aGlzLnNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgKi9cbiAgcmVtb3ZlU2VsZWN0QnlRdWVyeVByb2dyZXNzQ2hhbmdlTGlzdGVuZXIgKGxpc3RlbmVyOiBTZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3NDaGFuZ2VMaXN0ZW5lcik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3NDaGFuZ2VMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLnNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIHByb2dyZXNzXG4gICAqL1xuICBvblNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZSAoKTogdm9pZCB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFNlbGVjdEJ5UXVlcnlQcm9ncmVzcygpXG5cbiAgICB0aGlzLnNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyKHByb2dyZXNzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdvblNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZSBsaXN0ZW5lciBlcnJvcicsIHRoaXMuaWQsIGxpc3RlbmVyLCBlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhlIGxpc3RlbmVyIHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gSmltdUxheWVyVmlldyBpcyBjcmVhdGVkIGFuZCByZWFkeSB0byB1c2UuXG4gICAqIEBpZ25vcmVcbiAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAqL1xuICBhZGRKaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVyIChsaXN0ZW5lcjogSmltdUxheWVyVmlld0NyZWF0ZWRMaXN0ZW5lcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5qaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVycy5pbmNsdWRlcyhsaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuamltdUxheWVyVmlld0NyZWF0ZWRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICovXG4gIHJlbW92ZUppbXVMYXllclZpZXdDcmVhdGVkTGlzdGVuZXIgKGxpc3RlbmVyOiBKaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVyKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmppbXVMYXllclZpZXdDcmVhdGVkTGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdGhpcy5qaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkppbXVMYXllclZpZXdDcmVhdGVkIChqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3KTogdm9pZCB7XG4gICAgdGhpcy5qaW11TGF5ZXJWaWV3Q3JlYXRlZExpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxpc3RlbmVyKGppbXVMYXllclZpZXcpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uSmltdUxheWVyVmlld0NyZWF0ZWQgbGlzdGVuZXIgZXJyb3InLCB0aGlzLmlkLCBsaXN0ZW5lciwgZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hc3luYy1wcm9taXNlLWV4ZWN1dG9yICovXG5pbXBvcnQge1xuICBnZXRBcHBTdG9yZSwgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCB0eXBlIElNRGF0YVNvdXJjZUluZm8sIHR5cGUgRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHR5cGUgRmVhdHVyZURhdGFSZWNvcmQsIE1lc3NhZ2VNYW5hZ2VyLCBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UsIEFwcE1vZGUsXG4gIGRhdGFTb3VyY2VVdGlscywgdHlwZSBTY2VuZUxheWVyRGF0YVNvdXJjZSwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgbG9kYXNoLCBVcmxNYW5hZ2VyLCBEYXRhU291cmNlU2VsZWN0aW9uTW9kZSxcbiAgdXRpbHMgYXMgamltdUNvcmVVdGlscywgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBsb2FkQXJjR0lTSlNBUElNb2R1bGUsIENPTlNUQU5UU1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TGF5ZXJWaWV3LCB0eXBlIEppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMgfSBmcm9tICcuL2ppbXUtbGF5ZXItdmlldydcbmltcG9ydCB7IExheWVyVHlwZXMgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbmltcG9ydCB7IHR5cGUgSUZlYXR1cmUgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcblxudHlwZSBDbGllbnRRdWVyeVR5cGUgPSAnZmVhdHVyZScgfCAnaWQnIHwgJ2NvdW50J1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBKaW11RmVhdHVyZUxheWVyU2NlbmVMYXllclZpZXdDb21tb25PcHRpb25zIGV4dGVuZHMgSmltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgYHZpZXdgIGlzIHRoZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IGBGZWF0dXJlTGF5ZXJWaWV3YF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLXZpZXdzLWxheWVycy1GZWF0dXJlTGF5ZXJWaWV3Lmh0bWwpLlxuICAgKi9cbiAgdmlldzogX19lc3JpLkZlYXR1cmVMYXllclZpZXcgfCBfX2VzcmkuU2NlbmVMYXllclZpZXdcbn1cblxuaW50ZXJmYWNlIENsaWVudFF1ZXJ5RmVhdHVyZXNSZXN1bHQge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIGRhdGE6IF9fZXNyaS5GZWF0dXJlU2V0XG4gIGhhc0Z1bGxHZW9tZXRyaWVzOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBDbGllbnRRdWVyeU9iamVjdElkc1Jlc3VsdCB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgZGF0YTogbnVtYmVyW11cbn1cblxuaW50ZXJmYWNlIENsaWVudFF1ZXJ5RmVhdHVyZUNvdW50UmVzdWx0IHtcbiAgc3VjY2VzczogYm9vbGVhblxuICBkYXRhOiBudW1iZXJcbn1cblxudHlwZSBTZWxlY3RRdWVyeUlkQ2hhbmdlTGlzdGVuZXIgPSAoKSA9PiB2b2lkXG5cbmNvbnN0IEVYQl9PSUQgPSAnX19FWEJfT0lEX18nXG5cbi8qKlxuICogQGlnbm9yZVxuICogVGhlIEppbXVGZWF0dXJlTGF5ZXJWaWV3IGV4dGVuZHMgZnJvbSB0aGUgSmltdUxheWVyVmlldy5cbiAqL1xuZXhwb3J0IGNsYXNzIEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vbiBleHRlbmRzIEppbXVMYXllclZpZXcge1xuICB2aWV3OiBfX2VzcmkuRmVhdHVyZUxheWVyVmlldyB8IF9fZXNyaS5TY2VuZUxheWVyVmlld1xuXG4gIHByaXZhdGUgaGlnaExpZ2h0SGFuZGxlXG4gIHByaXZhdGUgaGlnaExpZ2h0TGF5ZXJDcmVhdGlvblByb21pc2UgLy8gaWYgaXQgZG9lcyBub3QgaGF2ZSB0aGUgdmlldywgd2lsbCBjcmVhdGUgYSBoaWdobGlnaHQgZmVhdHVyZSBsYXllciB0byBoaWdobGlnaHRcbiAgLyoqXG4gICAqIGhpZ2hsaWdodEZlYXR1cmVMYXllciBpcyB1c2VkIGhpZ2hsaWdodCBsYXllciBpbiBtYXBzZXJ2aWNlLCBpdCBpcyBhIGNsaWVudC1zaWRlIEZlYXR1cmVMYXllci5cbiAgICovXG4gIHByaXZhdGUgaGlnaGxpZ2h0RmVhdHVyZUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyID0gbnVsbFxuICBwcml2YXRlIGhpZ2hsaWdodEZlYXR1cmVMYXllclZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3ID0gbnVsbFxuXG4gIHByaXZhdGUgcG9wdXBTZWxlY3RGZWF0dXJlV2F0Y2hIYW5kbGU6IF9fZXNyaS5IYW5kbGVcbiAgcHJpdmF0ZSBwb3B1cFZpc2libGVXYXRjaEhhbmRsZTogX19lc3JpLkhhbmRsZVxuICBwcml2YXRlIGxheWVyVmlzaWJsZVdhdGNoSGFuZGxlOiBfX2VzcmkuSGFuZGxlXG4gIHByaXZhdGUgaGlnaGxpZ2h0T3B0aW9uc1dhdGNoSGFuZGxlOiBfX2VzcmkuSGFuZGxlXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcHJpdmF0ZSBsb2NhbERlZmluaXRpb25FeHByZXNzaW9uOiBzdHJpbmcgPSAnJ1xuXG4gIC8qKiBAaWdub3JlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgb3JpZ2luYWxHZGJWZXJzaW9uID0gbnVsbFxuXG4gIHByaXZhdGUgcmVhY3RpdmVVdGlsczogX19lc3JpLnJlYWN0aXZlVXRpbHNcbiAgcHJpdmF0ZSBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWNcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgZm9sbG93aW5nIHZhcmlhYmxlcyBhcmUgdXNlZCBmb3Igc2VsZWN0RmVhdHVyZXNCeVF1ZXJ5KCkgbWV0aG9kLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBzZWxlY3RRdWVyeUlkOiBudW1iZXIgPSAwXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0UXVlcnlJZENoYW5nZUxpc3RlbmVyczogU2VsZWN0UXVlcnlJZENoYW5nZUxpc3RlbmVyW10gPSBbXVxuICBwcml2YXRlIHNlbGVjdFF1ZXJ5UHJvbWlzZTogUHJvbWlzZTxBcnJheTxfX2VzcmkuR3JhcGhpYyB8IElGZWF0dXJlPj5cbiAgLy8gdXNlZCB0byBhYm9ydCB0aGUgb24tdGhlLWZseSBzZWxlY3RpbmcgdGFza1xuICBwcml2YXRlIHNlbGVjdEJ5UXVlcnlBYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlciA9IG51bGxcbiAgLy8gdGhlIHByb2dyZXNzIG9mIGxhdGVzdCBzZWxlY3RCeVF1ZXJ5IG1ldGhvZCwgdmFsdWUgaXMgaW4gcmFuZ2Ugb2YgWzAsIDFdXG4gIHByaXZhdGUgc2VsZWN0QnlRdWVyeVByb2dyZXNzOiBudW1iZXIgPSAxXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aGVuIERhdGFTb3VyY2Ugbm90IGV4aXN0cy5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmVJZHM6IG51bWJlcltdID0gW11cblxuICBjb25zdHJ1Y3RvciAob3B0aW9uczogSmltdUZlYXR1cmVMYXllclNjZW5lTGF5ZXJWaWV3Q29tbW9uT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpXG5cbiAgICB0aGlzLm9yaWdpbmFsR2RiVmVyc2lvbiA9IHRoaXMubGF5ZXIuZ2RiVmVyc2lvblxuICB9XG5cbiAgYXN5bmMgcmVhZHkgKCk6IFByb21pc2U8dGhpcz4ge1xuICAgIFt0aGlzLnJlYWN0aXZlVXRpbHMsIHRoaXMuR3JhcGhpY10gPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFsnZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHMnLCAnZXNyaS9HcmFwaGljJ10pXG5cbiAgICB0aGlzLndhdGNoSGlnaGxpZ2h0T3B0aW9ucygpXG4gICAgdGhpcy53YXRjaExheWVyVmlzaWJsZSgpXG4gICAgdGhpcy53YXRjaFBvcHVwU2VsZWN0RmVhdHVyZSgpXG4gICAgdGhpcy53YXRjaFBvcHVwVmlzaWJsZSgpXG4gICAgdGhpcy50cnlNb3ZlVG9DZW50ZXIoKVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKVxuICB9XG5cbiAgZGVzdHJveSAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wdXBTZWxlY3RGZWF0dXJlV2F0Y2hIYW5kbGUpIHtcbiAgICAgIHRoaXMucG9wdXBTZWxlY3RGZWF0dXJlV2F0Y2hIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMucG9wdXBTZWxlY3RGZWF0dXJlV2F0Y2hIYW5kbGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5yZWxlYXNlUG9wdXBWaXNpYmxlV2F0Y2hIYW5kbGUoKVxuXG4gICAgaWYgKHRoaXMubGF5ZXJWaXNpYmxlV2F0Y2hIYW5kbGUpIHtcbiAgICAgIHRoaXMubGF5ZXJWaXNpYmxlV2F0Y2hIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMubGF5ZXJWaXNpYmxlV2F0Y2hIYW5kbGUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0T3B0aW9uc1dhdGNoSGFuZGxlKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbnNXYXRjaEhhbmRsZS5yZW1vdmUoKVxuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb25zV2F0Y2hIYW5kbGUgPSBudWxsXG4gICAgfVxuXG4gICAgc3VwZXIuZGVzdHJveSgpXG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0U2VsZWN0ZWRGZWF0dXJlQ291bnQgKCk6IG51bWJlciB7XG4gICAgbGV0IGNvdW50ID0gMFxuXG4gICAgY29uc3QgZHMgPSB0aGlzLmdldExheWVyRGF0YVNvdXJjZSgpXG5cbiAgICBpZiAoZHMpIHtcbiAgICAgIGNvdW50ID0gZHMuZ2V0U2VsZWN0ZWRSZWNvcmRzKCkubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAvLyBUeXBpY2FsbHksIHRoaXMgaXMgdGhlIGNhc2UgdGhhdCB3ZSBoaWdobGlnaHQgYSBmZWF0dXJlIGJ5IHBvcHVwIGNsaWNrLCBidXQgdGhlIGRhdGEgc291cmNlIGlzIG5vdCB1c2VkIGFuZCBub3QgY3JlYXRlZC5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZUlkcykge1xuICAgICAgICBjb3VudCA9IHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRzLmxlbmd0aFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb3VudFxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBmZWF0dXJlcyBvZiBjdXJyZW50IEppbXVMYXllclZpZXcuXG4gICAqL1xuICBhc3luYyBnZXRTZWxlY3RlZEZlYXR1cmVzICgpOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcbiAgICBsZXQgc2VsZWN0ZWRHcmFwaGljczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXG4gICAgY29uc3QgZHMgPSB0aGlzLmdldExheWVyRGF0YVNvdXJjZSgpXG5cbiAgICBsZXQgZHNTZWxlY3RlZFJlY29yZHMgPSBbXVxuXG4gICAgaWYgKGRzKSB7XG4gICAgICBkc1NlbGVjdGVkUmVjb3JkcyA9IGRzLmdldFNlbGVjdGVkUmVjb3JkcygpXG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YVNvdXJjZSBleGlzdHMsIHdlIGdldCBzZWxlY3RlZCBmZWF0dXJlcyBmcm9tIGRhdGFTb3VyY2UsIG90aGVyd2lzZSB3ZSBnZXQgc2VsZWN0ZWQgZmVhdHVyZXMgZnJvbSBKaW11TGF5ZXJWaWV3LlxuICAgIGlmIChkc1NlbGVjdGVkUmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxlY3RlZEdyYXBoaWNzID0gZHNTZWxlY3RlZFJlY29yZHMubWFwKHJlY29yZCA9PiB7XG4gICAgICAgIC8vIHJlY29yZC5mZWF0dXJlIG1heWJlIGEgcGxhaW4gb2JqZWN0LCBvciBtYXliZSBhIGVzcmkuR3JhcGhpYyBpbnN0YW5jZS5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBtYWtlIHN1cmUgc2VsZWN0ZWRHcmFwaGljcyBhbHdheXMgYmUgZXNyaS5HcmFwaGljIGluc3RhbmNlcy5cbiAgICAgICAgaWYgKHJlY29yZC5mZWF0dXJlLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLkdyYXBoaWMnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY29yZC5mZWF0dXJlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuR3JhcGhpYy5mcm9tSlNPTihyZWNvcmQuZmVhdHVyZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHlwaWNhbGx5LCB0aGlzIGlzIHRoZSBjYXNlIHRoYXQgd2UgaGlnaGxpZ2h0IGEgZmVhdHVyZSBieSBwb3B1cCBjbGljaywgYnV0IHRoZSBkYXRhIHNvdXJjZSBpcyBub3QgdXNlZCBhbmQgbm90IGNyZWF0ZWQuXG4gICAgICBzZWxlY3RlZEdyYXBoaWNzID0gYXdhaXQgdGhpcy5xdWVyeVNlbGVjdGVkRmVhdHVyZXNGcm9tQ2xpZW50KClcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHVzZSBncmFwaGljLmppbXVMYXllclZpZXdJZCBpbiBKaW11TWFwVmlldy5vcGVuUG9wdXBGb3JBbGxTZWxlY3RlZEZlYXR1cmVzIGFuZCBtYXAgd2lkZ2V0IHBvcHVwIGRhdGEgYWN0aW9uLlxuICAgIHNlbGVjdGVkR3JhcGhpY3MuZm9yRWFjaCgoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMpID0+IHtcbiAgICAgIChncmFwaGljIGFzIGFueSkuamltdUxheWVyVmlld0lkID0gdGhpcy5pZFxuICAgIH0pXG5cbiAgICByZXR1cm4gc2VsZWN0ZWRHcmFwaGljc1xuICB9XG5cbiAgLyoqXG4gICAqIFF1ZXJ5IGZlYXR1cmVzIGZyb20gY2xpZW50IHZpZXcuXG4gICAqIFRoZSBsYXllciB2aWV3IGRvZXMgbm90IHByb3ZpZGUgcXVlcnlGcm9tU2VydmVyLiBXaGVuIHlvdSBuZWVkIHRvIHF1ZXJ5IGZyb20gc2VydmVyLCB1c2UgdGhlIGRhdGEgc291cmNlLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcXVlcnlGZWF0dXJlc0Zyb21DbGllbnQgKHF1ZXJ5OiBfX2VzcmkuUXVlcnkgfCBfX2VzcmkuUXVlcnlQcm9wZXJ0aWVzKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMudmlldykge1xuICAgICAgICByZXNvbHZlKFtdKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy53aGVuQ3VycmVudExheWVyVmlld05vdFVwZGF0aW5nKClcblxuICAgICAgbGV0IGZlYXR1cmVzID0gbnVsbFxuICAgICAgbGV0IHF1ZXJ5RXJyID0gbnVsbFxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmZWF0dXJlU2V0ID0gYXdhaXQgdGhpcy52aWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpXG4gICAgICAgIGZlYXR1cmVzID0gZmVhdHVyZVNldD8uZmVhdHVyZXNcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdRdWVyeSBmZWF0dXJlIGZyb20gdmlldyBlcnJvci4nLCB0aGlzLmlkLCBlcnIpXG4gICAgICAgIHF1ZXJ5RXJyID0gZXJyXG4gICAgICAgIGZlYXR1cmVzID0gW11cbiAgICAgIH1cblxuICAgICAgLy8gSWYgbGF5ZXJWaWV3IGlzIFNjZW5lTGF5ZXJWaWV3M0QgYW5kIHF1ZXJ5LnJldHVybkdlb21ldHJ5IGlzIHRydWUsIHRoZW4gd2UgbWF5IGdldCB0aGUgZm9sbG93aW5nIGVycm9yOiByZXR1cm5HZW9tZXRyeSBpcyBub3QgeWV0IHN1cHBvcnRlZCBmb3IgbWVzaCBzY2VuZSBsYXllciBxdWVyaWVzXG4gICAgICAvLyBGb3IgdGhpcyBjYXNlLCB3ZSBuZWVkIHRvIHJlLXF1ZXJ5IHRoZSBTY2VuZUxheWVyVmlldzNEIGFnYWluIHdpdGggcmV0dXJuR2VvbWV0cnkgZmFsc2UuXG4gICAgICBpZiAocXVlcnlFcnIgJiYgdGhpcy52aWV3LmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLnZpZXdzLjNkLmxheWVycy5TY2VuZUxheWVyVmlldzNEJyAmJiBxdWVyeS5yZXR1cm5HZW9tZXRyeSkge1xuICAgICAgICBjb25zdCBuZXdRdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5LCB7IHJldHVybkdlb21ldHJ5OiBmYWxzZSB9KVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmVhdHVyZVNldCA9IGF3YWl0IHRoaXMudmlldy5xdWVyeUZlYXR1cmVzKG5ld1F1ZXJ5KVxuICAgICAgICAgIGZlYXR1cmVzID0gZmVhdHVyZVNldD8uZmVhdHVyZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignUXVlcnkgZmVhdHVyZSBmcm9tIHZpZXcgZXJyb3IuJywgdGhpcy5pZCwgZXJyKVxuICAgICAgICAgIGZlYXR1cmVzID0gW11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZlYXR1cmVzKSB7XG4gICAgICAgIGZlYXR1cmVzID0gW11cbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShmZWF0dXJlcylcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBxdWVyeUZlYXR1cmVzRnJvbUNsaWVudEhpZ2hsaWdodExheWVyIChvYmplY3RJZHM6IG51bWJlcltdKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBsYXllclZpZXcgPSB0aGlzLmhpZ2hsaWdodEZlYXR1cmVMYXllclZpZXdcblxuICAgICAgaWYgKCFvYmplY3RJZHMpIHtcbiAgICAgICAgb2JqZWN0SWRzID0gW11cbiAgICAgIH1cblxuICAgICAgaWYgKCFsYXllclZpZXcgfHwgb2JqZWN0SWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXNvbHZlKFtdKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy53aGVuSGlnaGxpZ2h0TGF5ZXJWaWV3Tm90VXBkYXRpbmcoKVxuXG4gICAgICBjb25zdCBxdWVyeTogX19lc3JpLlF1ZXJ5ID0ge1xuICAgICAgICB3aGVyZTogJzE9MScsXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXG4gICAgICB9IGFzIF9fZXNyaS5RdWVyeVxuXG4gICAgICAvLyBVc2UgbGF5ZXIucXVlcnlGZWF0dXJlcygpIGluc3RlYWQgb2YgbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMoKSBiZWNhdXNlIGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKCkgd2lsbCBnZXQgZW1wdHkgZmVhdHVyZXMgc29tZXRpbWVzLlxuICAgICAgdGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihmZWF0dXJlU2V0ID0+IHtcbiAgICAgICAgY29uc3QgZmVhdHVyZXNNYXAgPSB7fVxuICAgICAgICBjb25zdCByZXN1bHRGZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXG5cbiAgICAgICAgaWYgKGZlYXR1cmVTZXQuZmVhdHVyZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9pZCA9IGZlYXR1cmUuZ2V0QXR0cmlidXRlKEVYQl9PSUQpXG4gICAgICAgICAgICBmZWF0dXJlc01hcFtvaWRdID0gZmVhdHVyZVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBvYmplY3RJZHMuZm9yRWFjaChvaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9IGZlYXR1cmVzTWFwW29pZF1cblxuICAgICAgICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0RmVhdHVyZXMucHVzaChmZWF0dXJlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHJlc3VsdEZlYXR1cmVzKVxuICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUXVlcnkgZmVhdHVyZSBmcm9tIGhpZ2hsaWdodEZlYXR1cmVMYXllciBlcnJvci4nLCBlcnIpXG4gICAgICAgIHJlc29sdmUoW10pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW4gRGF0YVNvdXJjZSBub3QgZXhpc3RzLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHF1ZXJ5U2VsZWN0ZWRGZWF0dXJlc0Zyb21DbGllbnQgKCk6IFByb21pc2U8X19lc3JpLkdyYXBoaWNbXT4ge1xuICAgIGxldCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEZlYXR1cmVJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmVhdHVyZXNcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIG9iamVjdElkczogdGhpcy5zZWxlY3RlZEZlYXR1cmVJZHMsXG4gICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxuICAgIH0gYXMgX19lc3JpLlF1ZXJ5XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIpIHtcbiAgICAgIGZlYXR1cmVzID0gYXdhaXQgdGhpcy5xdWVyeUZlYXR1cmVzRnJvbUNsaWVudEhpZ2hsaWdodExheWVyKHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRzKVxuICAgIH0gZWxzZSB7XG4gICAgICBmZWF0dXJlcyA9IGF3YWl0IHRoaXMucXVlcnlGZWF0dXJlc0Zyb21DbGllbnQocXVlcnkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZlYXR1cmVzXG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKipcbiAgICogVGhlIGxheWVyIHZpZXcgcHJvdmlkZXMgc29tZSBzZWxlY3Rpb24gbWV0aG9kczpcbiAgICogKiBzZWxlY3RGZWF0dXJlQnlJZFxuICAgKiAqIHNlbGVjdEZlYXR1cmVzQnlJZHNcbiAgICogKiBzZWxlY3RGZWF0dXJlc0J5UXVlcnlcbiAgICpcbiAgICogV2hhdCB0aGUgc2VsZWN0aW9uIGRvZXMgaXM6IGl0IHdpbGwgaGlnaGxpZ2h0IHRoZSBmZWF0dXJlLiBJZiB0aGUgbGF5ZXIgdmlldyBoYXMgcmVsYXRlZCBkYXRhIHNvdXJjZSwgdGhlIHJlbGF0ZWQgZGF0YSByZWNvcmRzIHdpbGwgYmUgc2VsZWN0ZWQgYXMgd2VsbC5cbiAgICoqKioqKioqKioqKioqKioqKi9cblxuICAvKipcbiAgICogV2hlbiBzZWxlY3QgZmVhdHVyZSBieSBJRCwgd2UgY2FuIHBhc3MgaW4gdGhlIGRhdGEgc291cmNlIHJlY29yZCBzbyB3aGVuIHRoZSBzZWxlY3RlZCByZWNvcmRzIGFyZSBub3QgbG9hZGVkIGluIGRhdGEgc291cmNlLCB3ZSBjYW4gYWRkIHRoZW0gaW4uXG4gICAqIEhvd2V2ZXIsIGlmIHRoZSByZWNvcmQgaXMgbm90IGxvYWRlZCBhbmQgaXMgbm90IHBhc3NlZCBpbiwgdGhlcmUgd2lsbCBiZSBubyBzZWxlY3Rpb24uXG4gICAqIElmIHdlIGNhbiBnZXQgdGhlIGxheWVyIGRhdGEgc291cmNlLCByZWNvcmQgY2FuIGJlIEZlYXR1cmVEYXRhUmVjb3JkIG9yIEdyYXBoaWMuIE90aGVyd2lzZSwgcmVjb3JkIGNhbiBvbmx5IGJlIEdyYXBoaWMuXG4gICAqL1xuICBhc3luYyBzZWxlY3RGZWF0dXJlQnlJZCAoaWQ6IG51bWJlciwgcmVjb3JkPzogRmVhdHVyZURhdGFSZWNvcmQgfCBfX2VzcmkuR3JhcGhpYykge1xuICAgIGNvbnN0IG9sZFNlbGVjdGVkRmVhdHVyZUlkc0NvdW50ID0gdGhpcy5zZWxlY3RlZEZlYXR1cmVJZHMubGVuZ3RoXG4gICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVJZHMgPSBbXVxuICAgIGNvbnN0IGxheWVyRHMgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlTGF5ZXJEYXRhU291cmNlSWZVc2VkKClcblxuICAgIGlmIChsYXllckRzKSB7XG4gICAgICBpZiAoIWlkICYmIGxheWVyRHMuZ2V0U2VsZWN0ZWRSZWNvcmRJZHMoKS5sZW5ndGggPT09IDAgJiYgb2xkU2VsZWN0ZWRGZWF0dXJlSWRzQ291bnQgPT09IDApIHsgLy8gZm9yIHBlcmZvcm1hbmNlIHJlYXNvblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gd2UgZG8gbm90IGhpZ2hsaWdodCBoZXJlIGJlY2FzZXUgd2Ugd2lsbCBkbyBoaWdobGlnaHQgd2hlbiBsYXllckluZm9DaGFuZ2UuXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgbGV0IGZlYXR1cmVEYXRhUmVjb3JkOiBGZWF0dXJlRGF0YVJlY29yZCA9IG51bGxcblxuICAgICAgICBpZiAocmVjb3JkICYmIChyZWNvcmQgYXMgX19lc3JpLkdyYXBoaWMpLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLkdyYXBoaWMnKSB7XG4gICAgICAgICAgZmVhdHVyZURhdGFSZWNvcmQgPSBsYXllckRzLmJ1aWxkUmVjb3JkKHJlY29yZCBhcyBfX2VzcmkuR3JhcGhpYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZWF0dXJlRGF0YVJlY29yZCA9IHJlY29yZCBhcyBGZWF0dXJlRGF0YVJlY29yZFxuICAgICAgICB9XG5cbiAgICAgICAgbGF5ZXJEcy5zZWxlY3RSZWNvcmRCeUlkKGlkICsgJycsIGZlYXR1cmVEYXRhUmVjb3JkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXRMYXllckRhdGFTb3VyY2UoKT8uc2VsZWN0UmVjb3JkQnlJZChudWxsKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBXaWRnZXRJZCA9IHRoaXMuZ2V0TWFwV2lkZ2V0SWQoKVxuXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgdGhpcy5oaWdoTGlnaHRGZWF0dXJlcyhbaWRdLCByZWNvcmQgPyBbcmVjb3JkIGFzIF9fZXNyaS5HcmFwaGljXSA6IG51bGwpXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRzID0gW051bWJlcihpZCldXG4gICAgICAgIFVybE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGFuZ2VIYXNoT2JqZWN0QnlEYXRhU291cmNlU2VsZWN0aW9uKHRoaXMubGF5ZXJEYXRhU291cmNlSWQsIHsgd2lkZ2V0SWQ6IG1hcFdpZGdldElkLCBpZHM6IFtpZCArICcnXSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZ2hMaWdodCgpXG4gICAgICAgIFVybE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGFuZ2VIYXNoT2JqZWN0QnlEYXRhU291cmNlU2VsZWN0aW9uKHRoaXMubGF5ZXJEYXRhU291cmNlSWQsIHsgd2lkZ2V0SWQ6IG1hcFdpZGdldElkLCBpZHM6IFtpZCArICcnXSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWUgYHNlbGVjdEZlYXR1cmVCeUlkYFxuICAgKi9cbiAgYXN5bmMgc2VsZWN0RmVhdHVyZXNCeUlkcyAoaWRzOiBudW1iZXJbXSwgcmVjb3Jkcz86IEZlYXR1cmVEYXRhUmVjb3JkW10pIHtcbiAgICBjb25zdCBvbGRTZWxlY3RlZEZlYXR1cmVJZHNDb3VudCA9IHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRzLmxlbmd0aFxuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRzID0gW11cblxuICAgIGNvbnN0IGxheWVyRHMgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlTGF5ZXJEYXRhU291cmNlSWZVc2VkKClcblxuICAgIGlmIChsYXllckRzKSB7XG4gICAgICBpZiAoaWRzLmxlbmd0aCA9PT0gMCAmJiBsYXllckRzLmdldFNlbGVjdGVkUmVjb3JkSWRzKCkubGVuZ3RoID09PSAwICYmIG9sZFNlbGVjdGVkRmVhdHVyZUlkc0NvdW50ID09PSAwKSB7IC8vIGZvciBwZXJmb3JtYW5jZSByZWFzb25cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheWVyRHMuc2VsZWN0UmVjb3Jkc0J5SWRzKGlkcy5tYXAoaWQgPT4gaWQgKyAnJyksIHJlY29yZHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBudW1JZHMgPSBpZHMubWFwKGlkID0+IE51bWJlcihpZCkpXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0RmVhdHVyZXMobnVtSWRzKVxuICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZUlkcyA9IG51bUlkcy5zbGljZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFySGlnaExpZ2h0KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwV2lkZ2V0SWQgPSB0aGlzLmdldE1hcFdpZGdldElkKClcbiAgICAgIFVybE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGFuZ2VIYXNoT2JqZWN0QnlEYXRhU291cmNlU2VsZWN0aW9uKHRoaXMubGF5ZXJEYXRhU291cmNlSWQsIHsgd2lkZ2V0SWQ6IG1hcFdpZGdldElkLCBpZHM6IGlkcy5tYXAoaWQgPT4gaWQgKyAnJykgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGZlYXR1cmVzIGZyb20gdGhlIGxheWVyLiBJZiB0aGUgbGFzdCBzZWxlY3Qgb3BlcmF0aW9uIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQsIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2lsbCBhdXRvbWF0aWNhbGx5IHRlcm1pbmF0ZSB0aGUgcHJldmlvdXMgc2VsZWN0aW9uIHByb2dyZXNzLlxuICAgKiBAcGFyYW0gcXVlcnkgVGhlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25Nb2RlIFRoaXMgcGFyYW1ldGVyIGlzIHRvIGluZGljYXRlIGhvdyB0aGUgbmV3IHNlbGVjdCBvcGVyYXRpb24gYWZmZWN0cyB0aGUgb3JpZ2luYWwgc2VsZWN0aW9uLiBJdCBjYW4gb25seSBiZSB0aGUgZm9sbG93aW5nIGVudW1lcmF0aW9uIHZhbHVlczogYE5ld2AsIGBBZGRUb0N1cnJlbnRgLCBgUmVtb3ZlRnJvbUN1cnJlbnRgLCBvciBgU2VsZWN0RnJvbUN1cnJlbnRgLlxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgc2VsZWN0RmVhdHVyZXNCeVF1ZXJ5IChxdWVyeTogRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHNlbGVjdGlvbk1vZGU6IERhdGFTb3VyY2VTZWxlY3Rpb25Nb2RlKTogUHJvbWlzZTxBcnJheTwoX19lc3JpLkdyYXBoaWMgfCBJRmVhdHVyZSk+PiB7XG4gICAgaWYgKHNlbGVjdGlvbk1vZGUgIT09IERhdGFTb3VyY2VTZWxlY3Rpb25Nb2RlLkFkZFRvQ3VycmVudCAmJiBzZWxlY3Rpb25Nb2RlICE9PSBEYXRhU291cmNlU2VsZWN0aW9uTW9kZS5SZW1vdmVGcm9tQ3VycmVudCAmJiBzZWxlY3Rpb25Nb2RlICE9PSBEYXRhU291cmNlU2VsZWN0aW9uTW9kZS5TZWxlY3RGcm9tQ3VycmVudCkge1xuICAgICAgc2VsZWN0aW9uTW9kZSA9IERhdGFTb3VyY2VTZWxlY3Rpb25Nb2RlLk5ld1xuICAgIH1cblxuICAgIHF1ZXJ5Lmdlb21ldHJ5ID0gKHF1ZXJ5Lmdlb21ldHJ5IGFzIGFueSkudG9KU09OID8gKHF1ZXJ5Lmdlb21ldHJ5IGFzIGFueSkudG9KU09OKCkgOiBxdWVyeS5nZW9tZXRyeVxuICAgIHF1ZXJ5ID0gbG9kYXNoLmNsb25lRGVlcChxdWVyeSlcblxuICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRzID0gW11cblxuICAgIC8vIGNyZWF0ZSBuZXcgQWJvcnRDb250cm9sbGVyIGZvciB0aGUgbmV3IHNlbGVjdGluZyB0YXNrXG4gICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgc2VsZWN0aW5nIHRhc2sgaXMgb25nb2luZywgdGhlbiBjYW5jZWwgdGhlIHByZXZpb3VzIG9uZS5cbiAgICB0aGlzLmNhbmNlbFNlbGVjdEJ5UXVlcnkoKVxuXG4gICAgdGhpcy5zZWxlY3RCeVF1ZXJ5QWJvcnRDb250cm9sbGVyID0gYWJvcnRDb250cm9sbGVyXG5cbiAgICBjb25zdCBwcmV2U2VsZWN0UHJvbWlzZSA9IHRoaXMuc2VsZWN0UXVlcnlQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZShbXSlcblxuICAgIHRoaXMuc2VsZWN0UXVlcnlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgc2VsZWN0IGlzIGRvbmUsIHRoZW4gZG8gdGhlIG5ldyBzZWxlY3QsIG90aGVyd2lzZSBtYXliZSBjb25mbGljdFxuICAgICAgcHJldlNlbGVjdFByb21pc2UuZmluYWxseShhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBsYXllckRzOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU2NlbmVMYXllckRhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIGxldCBmaW5hbEZlYXR1cmVEYXRhUmVjb3JkczogRmVhdHVyZURhdGFSZWNvcmRbXSA9IFtdXG4gICAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5tYXBWaWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQodGhpcy5qaW11TWFwVmlld0lkKVxuICAgICAgICBjb25zdCBtYXBXaWRnZXRJZCA9IGppbXVNYXBWaWV3Lm1hcFdpZGdldElkXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsYXllckRzID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG5cbiAgICAgICAgICBpZiAobGF5ZXJEcykge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICAgICAgICAgICAgY29uc3QgcXVlcnlSZXN1bHQgPSBhd2FpdCBkYXRhU291cmNlVXRpbHMuc2VsZWN0QnlTZWxlY3Rpb25Nb2RlKHtcbiAgICAgICAgICAgICAgd2lkZ2V0SWQ6IG1hcFdpZGdldElkLFxuICAgICAgICAgICAgICBkczogbGF5ZXJEcyxcbiAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGUsXG4gICAgICAgICAgICAgIHNpZ25hbCxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjazogKHByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdFF1ZXJ5UHJvZ3Jlc3MoYWJvcnRDb250cm9sbGVyLCBwcm9jZXNzKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBvbmx5IHVwZGF0ZSBzZWxlY3Rpb24gaWYgdGhlIGFib3J0Q29udHJvbGxlciBpcyB0aGUgbGF0ZXN0IG9uZVxuICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb25JZkFib3J0ZWQ6ICgpID0+IHRoaXMuaXNGcmVzaEFib3J0Q29udHJvbGxlcihhYm9ydENvbnRyb2xsZXIpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAocXVlcnlSZXN1bHQ/LnJlY29yZHMpIHtcbiAgICAgICAgICAgICAgZmluYWxGZWF0dXJlRGF0YVJlY29yZHMgPSBxdWVyeVJlc3VsdC5yZWNvcmRzIGFzIEZlYXR1cmVEYXRhUmVjb3JkW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmaW5hbEZlYXR1cmVEYXRhUmVjb3JkcyA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaW5hbEZlYXR1cmVzID0gZmluYWxGZWF0dXJlRGF0YVJlY29yZHMubWFwKHIgPT4gci5mZWF0dXJlKVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZShtYXBXaWRnZXRJZCwgZmluYWxGZWF0dXJlRGF0YVJlY29yZHMpXG4gICAgICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobWVzc2FnZSlcblxuICAgICAgICB0aGlzLnNldFNlbGVjdFF1ZXJ5UHJvZ3Jlc3MoYWJvcnRDb250cm9sbGVyLCAxKVxuXG4gICAgICAgIGlmICh0aGlzLmlzRnJlc2hBYm9ydENvbnRyb2xsZXIoYWJvcnRDb250cm9sbGVyKSkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UXVlcnlQcm9taXNlID0gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShmaW5hbEZlYXR1cmVzKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0UXVlcnlQcm9taXNlXG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2FuY2VsU2VsZWN0QnlRdWVyeSAoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0QnlRdWVyeUFib3J0Q29udHJvbGxlcikge1xuICAgICAgdGhpcy5zZWxlY3RCeVF1ZXJ5QWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgICAgIHRoaXMuc2VsZWN0QnlRdWVyeUFib3J0Q29udHJvbGxlciA9IG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRnJlc2hBYm9ydENvbnRyb2xsZXIgKGFib3J0Q29udHJvbGxlcjogQWJvcnRDb250cm9sbGVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGFib3J0Q29udHJvbGxlciAmJiBhYm9ydENvbnRyb2xsZXIgPT09IHRoaXMuc2VsZWN0QnlRdWVyeUFib3J0Q29udHJvbGxlclxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRPckNyZWF0ZUxvY2FsRGF0YVNvdXJjZSAobG9jYWxEc0lkOiBzdHJpbmcpOiBQcm9taXNlPEZlYXR1cmVMYXllckRhdGFTb3VyY2U+IHtcbiAgICBjb25zdCBsYXllckRzID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG5cbiAgICBpZiAobGF5ZXJEcykge1xuICAgICAgcmV0dXJuIGxheWVyRHMuZGF0YVNvdXJjZU1hbmFnZXIuY3JlYXRlTG9jYWxEYXRhU291cmNlKGxheWVyRHMsIGxvY2FsRHNJZCkgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0U2VsZWN0UXVlcnlQcm9ncmVzcyAoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5zZWxlY3RRdWVyeVByb21pc2UpIHtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5zZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3NcbiAgICAgIGNvbnN0IG1pblByb2dyZXNzID0gMC4wMVxuXG4gICAgICBpZiAodHlwZW9mIHByb2dyZXNzID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgocHJvZ3Jlc3MsIG1pblByb2dyZXNzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1pblByb2dyZXNzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZWxlY3RRdWVyeVByb2dyZXNzIChhYm9ydENvbnRyb2xsZXI6IEFib3J0Q29udHJvbGxlciwgcHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmlzRnJlc2hBYm9ydENvbnRyb2xsZXIoYWJvcnRDb250cm9sbGVyKSkge1xuICAgICAgY29uc3QgbWluUHJvZ3Jlc3MgPSAwXG4gICAgICBjb25zdCBtYXhQcm9ncmVzcyA9IDFcbiAgICAgIC8vIGNsYW1wIHByb2dyZXNzIHRvIFswLCAxXVxuICAgICAgdGhpcy5zZWxlY3RCeVF1ZXJ5UHJvZ3Jlc3MgPSBNYXRoLm1heChtaW5Qcm9ncmVzcywgTWF0aC5taW4ocHJvZ3Jlc3MsIG1heFByb2dyZXNzKSlcbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5nZXRKaW11TWFwVmlldygpXG4gICAgICBqaW11TWFwVmlldy5vblNlbGVjdEJ5UXVlcnlQcm9ncmVzc0NoYW5nZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogVGhlIHByb21pc2UgcmVzb2x2ZXMgYW4gX19lc3JpLlF1ZXJ5IGluc3RhbmNlIGlmIGNsaWVudCBxdWVyeSBpcyByZWFkeSB0byB1c2UsIG90aGVyd2lzZSByZXNvbHZlcyBudWxsLlxuICAgKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGlzIG1ldGhvZCByZXNvbHZlcyB0cnVlIGJlZm9yZSBjYWxsIGNsaWVudFF1ZXJ5RmVhdHVyZXMoKSwgY2xpZW50UXVlcnlPYmplY3RJZHMoKSBhbmQgY2xpZW50UXVlcnlGZWF0dXJlQ291bnQoKS5cbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHdoZW5DbGllbnRRdWVyeVJlYWR5IChxdWVyeVBhcmFtczogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgcXVlcnlUeXBlOiBDbGllbnRRdWVyeVR5cGUpOiBQcm9taXNlPF9fZXNyaS5RdWVyeT4ge1xuICAgIGlmICghcXVlcnlQYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgcXVlcnkgcGFyYW0gaXMgbnVsbCwgJHt0aGlzLmlkfSBub3QgcmVhZHkgZm9yIGNsaWVudCBxdWVyeWApXG4gICAgfVxuXG4gICAgY29uc3QgYXBpUXVlcnkgPSBhd2FpdCB0aGlzLmdldEFwaVF1ZXJ5Rm9yQ2xpZW50UXVlcnkocXVlcnlQYXJhbXMsIHF1ZXJ5VHlwZSlcblxuICAgIGlmICghYXBpUXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgY2FuJ3QgY29udmVydCBxdWVyeVBhcmFtcyB0byBBUEkgcXVlcnkgaW5zdGFuY2UsICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgIH1cblxuICAgIC8vIFNjZW5lTGF5ZXIgYW5kIGZha2UgRmVhdHVyZUxheWVyIGRvZXNuJ3Qgc3VwcG9ydCBjbGllbnQgcXVlcnkuXG4gICAgLy8gSWYgbGF5ZXIuZGVjbGFyZWRDbGFzcyBpcyAnZXNyaS5sYXllcnMuRmVhdHVyZUxheWVyJywgbWVhbnMgaXQgaXMgYSByZWFsIEZlYXR1cmVMYXllci5cbiAgICBpZiAodGhpcy5sYXllci5kZWNsYXJlZENsYXNzICE9PSAnZXNyaS5sYXllcnMuRmVhdHVyZUxheWVyJykge1xuICAgICAgY29uc29sZS5sb2coYGxheWVyIGlzIG5vdCBhIHJlYWwgRmVhdHVyZUxheWVyLCAke3RoaXMuaWR9IG5vdCByZWFkeSBmb3IgY2xpZW50IHF1ZXJ5YClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLmdldEppbXVNYXBWaWV3KClcblxuICAgIGlmIChqaW11TWFwVmlldy5pc0Rlc3Ryb3llZCgpKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSmltdU1hcFZpZXcgaXMgZGVzdHJveWVkLCAke3RoaXMuaWR9IG5vdCByZWFkeSBmb3IgY2xpZW50IHF1ZXJ5YClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGppbXVNYXBWaWV3LmlzQ2FjaGVkKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBKaW11TWFwVmlldyBpcyBjYWNoZWQsICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBhd2FpdCBqaW11TWFwVmlldy53aGVuSmltdU1hcFZpZXdMb2FkZWQoKVxuXG4gICAgLy8gd2FpdCBmb3IgbGF5ZXIgdmlldyBsb2FkZWRcbiAgICBpZiAoIXRoaXMudmlldykge1xuICAgICAgYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWQodGhpcy5pZClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudmlldykge1xuICAgICAgY29uc29sZS5sb2coYGxheWVyVmlldyBpcyBub3QgYXZhaWxhYmxlLCAke3RoaXMuaWR9IG5vdCByZWFkeSBmb3IgY2xpZW50IHF1ZXJ5YClcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgbGF5ZXJWaWV3ID0gdGhpcy52aWV3IGFzIGFueSAvLyBfX2VzcmkuRmVhdHVyZUxheWVyVmlld1xuICAgIGNvbnN0IGRzID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG5cbiAgICBpZiAoIWRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGxheWVyIGRhdGEgc291cmNlIGlzIG5vdCBhdmFpbGFibGUsICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgIH1cblxuICAgIGxldCBpc0dlb21ldHJ5UGFzcyA9IGF3YWl0IHRoaXMuY2hlY2tHZW9tZXRyeUZvckNsaWVudFF1ZXJ5KGFwaVF1ZXJ5KVxuXG4gICAgaWYgKCFpc0dlb21ldHJ5UGFzcykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBjaGVjayBtYXAgY2FjaGVkIG9yIG5vdFxuXG4gICAgdGhpcy51cGRhdGVMYXllck91dEZpZWxkc0ZvckNsaWVudFF1ZXJ5KHF1ZXJ5UGFyYW1zLCBxdWVyeVR5cGUsIGRzKVxuXG4gICAgYXdhaXQgdGhpcy53aGVuQ3VycmVudExheWVyVmlld05vdFVwZGF0aW5nKClcblxuICAgIC8vIG5lZWQgdG8gY2hlY2sgZ2VvbWV0cnkgYWdhaW4gYmVjYXVzZSB1c2VyIG1heSBhbHJlYWR5IHBhbi96b29tIG1hcCB3aGVuIHJ1bmluZyBoZXJlXG4gICAgaXNHZW9tZXRyeVBhc3MgPSBhd2FpdCB0aGlzLmNoZWNrR2VvbWV0cnlGb3JDbGllbnRRdWVyeShhcGlRdWVyeSlcblxuICAgIGlmICghaXNHZW9tZXRyeVBhc3MpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlldy51cGRhdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBsYXllclZpZXcudXBkYXRpbmcgaXMgc3RpbGwgdHJ1ZSBhZnRlciBwYXNzIGFsbCBjaGVja3MsICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGdlb21ldHJ5IHByZWNpc2lvblxuICAgIGlmIChxdWVyeVR5cGUgPT09ICdmZWF0dXJlJykge1xuICAgICAgY29uc3QgcmV0dXJuRnVsbEdlb21ldHJpZXMgPSBxdWVyeVBhcmFtcy5yZXR1cm5HZW9tZXRyeSAmJiBxdWVyeVBhcmFtcy5yZXR1cm5GdWxsR2VvbWV0cmllc1xuXG4gICAgICBpZiAocmV0dXJuRnVsbEdlb21ldHJpZXMgJiYgIWxheWVyVmlldy5oYXNGdWxsR2VvbWV0cmllcykge1xuICAgICAgICBjb25zb2xlLmxvZyhgbGF5ZXJWaWV3Lmhhc0Z1bGxHZW9tZXRyaWVzIGlzIGZhbHNlLCAke3RoaXMuaWR9IG5vdCByZWFkeSBmb3IgY2xpZW50IHF1ZXJ5YClcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXBpUXVlcnlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hlY2tHZW9tZXRyeUZvckNsaWVudFF1ZXJ5IChhcGlRdWVyeTogX19lc3JpLlF1ZXJ5KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxheWVyVmlldyA9IHRoaXMudmlldyBhcyBfX2VzcmkuRmVhdHVyZUxheWVyVmlld1xuXG4gICAgICBpZiAobGF5ZXJWaWV3Lmhhc0FsbEZlYXR1cmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5nZXRKaW11TWFwVmlldygpXG4gICAgICBjb25zdCBtYXBWaWV3ID0gamltdU1hcFZpZXcudmlld1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBhcGlRdWVyeS5nZW9tZXRyeVxuICAgICAgbGV0IGdlb0V4dGVudDogX19lc3JpLlBvaW50IHwgX19lc3JpLkV4dGVudCA9IG51bGxcblxuICAgICAgaWYgKGdlb21ldHJ5KSB7XG4gICAgICAgIGlmIChnZW9tZXRyeS5leHRlbnQpIHtcbiAgICAgICAgICBnZW9FeHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcbiAgICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9pbnQnKSB7XG4gICAgICAgICAgZ2VvRXh0ZW50ID0gZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGdlb0V4dGVudCkge1xuICAgICAgICBpZiAoIW1hcFZpZXcuZXh0ZW50LmNvbnRhaW5zKGdlb0V4dGVudCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgY3VycmVudCBtYXAgZXh0ZW50IGRvZXMgbm90IGNvbnRhaW4gZ2VvbWV0cnksICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy53aGVuQ3VycmVudExheWVyVmlld05vdFVwZGF0aW5nKClcblxuICAgICAgICAvLyBuZWVkIHRvIGNoZWNrIGdlb0V4dGVudCBhZ2FpbiBiZWNhdXNlIG1hcFZpZXcuZXh0ZW50IG1heWJlIGNoYW5nZWQgYWZ0ZXIgd2hlbkxheWVyVmlld05vdFVwZGF0aW5nKCkgbWV0aG9kXG4gICAgICAgIGlmICghbWFwVmlldy5leHRlbnQuY29udGFpbnMoZ2VvRXh0ZW50KSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50IG1hcCBleHRlbnQgZG9lcyBub3QgY29udGFpbiBnZW9tZXRyeSwgJHt0aGlzLmlkfSBub3QgcmVhZHkgZm9yIGNsaWVudCBxdWVyeWApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxheWVyVmlldy5oYXNBbGxGZWF0dXJlc0luVmlldykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBsYXllclZpZXcuaGFzQWxsRmVhdHVyZXNJblZpZXcgaXMgZmFsc2UsICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheWVyVmlldy5oYXNBbGxGZWF0dXJlc0luVmlld1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy53aGVuQ3VycmVudExheWVyVmlld05vdFVwZGF0aW5nKClcblxuICAgICAgICBpZiAoIWxheWVyVmlldy5oYXNBbGxGZWF0dXJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBsYXllclZpZXcuaGFzQWxsRmVhdHVyZXMgaXMgZmFsc2UsICR7dGhpcy5pZH0gbm90IHJlYWR5IGZvciBjbGllbnQgcXVlcnlgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheWVyVmlldy5oYXNBbGxGZWF0dXJlc1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoZWNrIGdlb21ldHJ5IGVycm9yIGZvciBjbGllbnQgcXVlcnknLCBlKVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVMYXllck91dEZpZWxkc0ZvckNsaWVudFF1ZXJ5IChxdWVyeVBhcmFtczogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgcXVlcnlUeXBlOiBDbGllbnRRdWVyeVR5cGUsIGRzOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU2NlbmVMYXllckRhdGFTb3VyY2UpIHtcbiAgICBjb25zdCBsYXllckhhc0FsbEZpZWxkcyA9IHRoaXMubGF5ZXIub3V0RmllbGRzICYmIHRoaXMubGF5ZXIub3V0RmllbGRzLmluY2x1ZGVzKCcqJylcblxuICAgIC8vIElmIGxheWVyIGFscmVhZHkgaGFzIGFsbCBmaWVsZHMsIHdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIGxheWVyLm91dEZpZWxkcy5cbiAgICBpZiAoIWxheWVySGFzQWxsRmllbGRzKSB7XG4gICAgICAvLyBhZGQgbmV3IHJlcXVpcmVkIGZpZWxkc1xuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHM6IHN0cmluZ1tdID0gZGF0YVNvdXJjZVV0aWxzLmdldFVzZWRGaWVsZHNGcm9tRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSwgZHMsIHF1ZXJ5VHlwZSkgfHwgW11cbiAgICAgIGxldCB7IGFkZGVkOiBuZXdBZGRlZEZpZWxkcyB9ID0gamltdUNvcmVVdGlscy5kaWZmQXJyYXlzKHRydWUsIHRoaXMudmlldy5hdmFpbGFibGVGaWVsZHMsIHJlcXVpcmVkRmllbGRzKVxuXG4gICAgICBpZiAobmV3QWRkZWRGaWVsZHMuaW5jbHVkZXMoJyonKSkge1xuICAgICAgICBuZXdBZGRlZEZpZWxkcyA9IFsnKiddXG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdBZGRlZEZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGQgbmV3IGZpZWxkcyB0byBsYXllci5vdXRGaWVsbGRzIGZvciBjbGllbnQgcXVlcnk6ICR7bmV3QWRkZWRGaWVsZHN9LCB2aWV3IGlkOiAke3RoaXMuaWR9LCBxdWVyeSB0eXBlOiR7cXVlcnlUeXBlfWApXG5cbiAgICAgICAgaWYgKG5ld0FkZGVkRmllbGRzLmluY2x1ZGVzKCcqJykpIHtcbiAgICAgICAgICB0aGlzLmxheWVyLm91dEZpZWxkcyA9IFsnKiddXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgb2xkT3V0RmllbGRzID0gdGhpcy5sYXllci5vdXRGaWVsZHMgfHwgW11cbiAgICAgICAgICBjb25zdCBuZXdPdXRGaWVsZHMgPSBvbGRPdXRGaWVsZHMuY29uY2F0KG5ld0FkZGVkRmllbGRzKVxuICAgICAgICAgIHRoaXMubGF5ZXIub3V0RmllbGRzID0gbmV3T3V0RmllbGRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZXNvbHZlIHdoZW4gdGhpcy52aWV3LnVwZGF0aW5nIGlzIGZhbHNlLlxuICAgKi9cbiAgcHJpdmF0ZSB3aGVuQ3VycmVudExheWVyVmlld05vdFVwZGF0aW5nICgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy53aGVuTGF5ZXJWaWV3Tm90VXBkYXRpbmcodGhpcy52aWV3KVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgcmVzb2x2ZSB3aGVuIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyVmlldy51cGRhdGluZyBpcyBmYWxzZS5cbiAgICovXG4gIHByaXZhdGUgd2hlbkhpZ2hsaWdodExheWVyVmlld05vdFVwZGF0aW5nICgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy53aGVuTGF5ZXJWaWV3Tm90VXBkYXRpbmcodGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXJWaWV3KVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgcmVzb2x2ZSB3aGVuIGxheWVyVmlldy51cGRhdGluZyBpcyBmYWxzZS5cbiAgICovXG4gIHByaXZhdGUgd2hlbkxheWVyVmlld05vdFVwZGF0aW5nIChsYXllclZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3IHwgX19lc3JpLlNjZW5lTGF5ZXJWaWV3KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBsYXllclZpZXcudXBkYXRpbmcgaXMgY2hhbmdlZCBpbiBhIG1pcmNvIHRhc2ssIHNvIG5lZWQgdG8gcmVhZCBsYXllclZpZXcudXBkYXRpbmcgaW4gYSBzZXRUaW1lb3V0IGNhbGxiYWNrIChtYWNybyB0YXNrKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChsYXllclZpZXcudXBkYXRpbmcpIHtcbiAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgbGF5ZXIgdmlldyB0byBmaW5pc2ggdXBkYXRpbmdcbiAgICAgICAgICBsZXQgaGFuZGxlID0gbGF5ZXJWaWV3LndhdGNoKCd1cGRhdGluZycsIHZhbCA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbCkge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgaGFuZGxlID0gbnVsbFxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuICAgICAgfSwgMClcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogUXVlcnkgZmVhdHVyZXMgZnJvbSBsYXllciB2aWV3LlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBuZXZlciByZWplY3RzLCBzbyBuZWVkIHRvIGNoZWNrIHJlc3VsdC5zdWNjZXNzIHRvICBkZXRlcm1pbmUgd2hldGhlciB0aGUgY2xpZW50IHF1ZXJ5IGlzIHN1Y2Nlc3NmdWwuXG4gICAqIEBwYXJhbSBxdWVyeVBhcmFtc1xuICAgKi9cbiAgYXN5bmMgY2xpZW50UXVlcnlGZWF0dXJlcyAocXVlcnlQYXJhbXM6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMpOiBQcm9taXNlPENsaWVudFF1ZXJ5RmVhdHVyZXNSZXN1bHQ+IHtcbiAgICBsZXQgcmVzdWx0OiBDbGllbnRRdWVyeUZlYXR1cmVzUmVzdWx0ID0gbnVsbFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFwaVF1ZXJ5ID0gYXdhaXQgdGhpcy53aGVuQ2xpZW50UXVlcnlSZWFkeShxdWVyeVBhcmFtcywgJ2ZlYXR1cmUnKVxuXG4gICAgICBpZiAoYXBpUXVlcnkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudmlldy5xdWVyeUZlYXR1cmVzKGFwaVF1ZXJ5KVxuICAgICAgICBjb25zb2xlLmxvZyhgUXVlcnkgZnJvbSBjbGllbnQtc2lkZS4gdmlldyBpZDogJHt0aGlzLmlkfWApXG5cbiAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBoYXNGdWxsR2VvbWV0cmllczogISEodGhpcy52aWV3IGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3KS5oYXNGdWxsR2VvbWV0cmllc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVzdWx0ID0gbnVsbFxuICAgICAgY29uc29sZS5lcnJvcihgY2xpZW50UXVlcnlGZWF0dXJlcyBlcnIgZm9yICR7dGhpcy5pZH1gLCBlKVxuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICBoYXNGdWxsR2VvbWV0cmllczogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBFeGVjdXRlcyBhIFF1ZXJ5IGFnYWluc3QgZmVhdHVyZXMgYXZhaWxhYmxlIGZvciBkcmF3aW5nIGluIHRoZSBsYXllclZpZXcgYW5kIHJldHVybnMgYXJyYXkgb2YgdGhlIE9iamVjdElEcyBvZiBmZWF0dXJlcyB0aGF0IHNhdGlzZnkgdGhlIGlucHV0IHF1ZXJ5LlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBuZXZlciByZWplY3RzLCBzbyBuZWVkIHRvIGNoZWNrIHJlc3VsdC5zdWNjZXNzIHRvICBkZXRlcm1pbmUgd2hldGhlciB0aGUgY2xpZW50IHF1ZXJ5IGlzIHN1Y2Nlc3NmdWwuXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgYXN5bmMgY2xpZW50UXVlcnlPYmplY3RJZHMgKHF1ZXJ5UGFyYW1zOiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxDbGllbnRRdWVyeU9iamVjdElkc1Jlc3VsdD4ge1xuICAgIGxldCByZXN1bHQ6IENsaWVudFF1ZXJ5T2JqZWN0SWRzUmVzdWx0ID0gbnVsbFxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFwaVF1ZXJ5ID0gYXdhaXQgdGhpcy53aGVuQ2xpZW50UXVlcnlSZWFkeShxdWVyeVBhcmFtcywgJ2lkJylcblxuICAgICAgaWYgKGFwaVF1ZXJ5KSB7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgdGhpcy52aWV3LnF1ZXJ5T2JqZWN0SWRzKGFwaVF1ZXJ5KVxuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYFF1ZXJ5IG9iamVjdElkcyBmcm9tIGNsaWVudC1zaWRlLiB2aWV3IGlkOiAke3RoaXMuaWR9YClcblxuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXN1bHQgPSBudWxsXG4gICAgICBjb25zb2xlLmVycm9yKGBjbGllbnRRdWVyeU9iamVjdElkcyBlcnIgZm9yICR7dGhpcy5pZH1gLCBlKVxuICAgIH1cblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBkYXRhOiBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogRXhlY3V0ZXMgYSBRdWVyeSBhZ2FpbnN0IGZlYXR1cmVzIGF2YWlsYWJsZSBmb3IgZHJhd2luZyBpbiB0aGUgbGF5ZXJWaWV3IGFuZCByZXR1cm5zIHRoZSBudW1iZXIgb2YgZmVhdHVyZXMgdGhhdCBzYXRpc2Z5IHRoZSBxdWVyeS5cbiAgICogTm90ZSwgdGhpcyBtZXRob2QgbmV2ZXIgcmVqZWN0cywgc28gbmVlZCB0byBjaGVjayByZXN1bHQuc3VjY2VzcyB0byAgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGNsaWVudCBxdWVyeSBpcyBzdWNjZXNzZnVsLlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIGFzeW5jIGNsaWVudFF1ZXJ5RmVhdHVyZUNvdW50IChxdWVyeVBhcmFtczogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyk6IFByb21pc2U8Q2xpZW50UXVlcnlGZWF0dXJlQ291bnRSZXN1bHQ+IHtcbiAgICBsZXQgcmVzdWx0OiBDbGllbnRRdWVyeUZlYXR1cmVDb3VudFJlc3VsdCA9IG51bGxcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcGlRdWVyeSA9IGF3YWl0IHRoaXMud2hlbkNsaWVudFF1ZXJ5UmVhZHkocXVlcnlQYXJhbXMsICdjb3VudCcpXG5cbiAgICAgIGlmIChhcGlRdWVyeSkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy52aWV3LnF1ZXJ5RmVhdHVyZUNvdW50KGFwaVF1ZXJ5KVxuICAgICAgICBjb25zb2xlLmxvZyhgUXVlcnkgZmVhdHVyZSBjb3VudCBmcm9tIGNsaWVudC1zaWRlLiB2aWV3IGlkOiAke3RoaXMuaWR9YClcblxuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlc3VsdCA9IG51bGxcbiAgICAgIGNvbnNvbGUuZXJyb3IoYGNsaWVudFF1ZXJ5RmVhdHVyZUNvdW50IGVyciBmb3IgJHt0aGlzLmlkfWAsIGVycilcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0QXBpUXVlcnlGb3JDbGllbnRRdWVyeSAocXVlcnlQYXJhbXM6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHF1ZXJ5VHlwZTogQ2xpZW50UXVlcnlUeXBlKTogUHJvbWlzZTxfX2VzcmkuUXVlcnk+IHtcbiAgICBsZXQgYXBpUXVlcnk6IF9fZXNyaS5RdWVyeSA9IG51bGxcbiAgICBjb25zdCBsYXllckRzID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG4gICAgY29uc3QgYXBpUXVlcnlPclByb3BlcnRpZXMgPSBhd2FpdCBkYXRhU291cmNlVXRpbHMuY2hhbmdlSmltdUZlYXR1cmVMYXllclF1ZXJ5VG9KU0FQSUxheWVyUXVlcnkobGF5ZXJEcywgcXVlcnlQYXJhbXMpXG5cbiAgICBpZiAoKGFwaVF1ZXJ5T3JQcm9wZXJ0aWVzIGFzIF9fZXNyaS5RdWVyeSkuZGVjbGFyZWRDbGFzcyA9PT0gJ2VzcmkucmVzdC5zdXBwb3J0LlF1ZXJ5Jykge1xuICAgICAgYXBpUXVlcnkgPSBhcGlRdWVyeU9yUHJvcGVydGllcyBhcyBfX2VzcmkuUXVlcnlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnkgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGUoJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JylcbiAgICAgIGFwaVF1ZXJ5ID0gbmV3IFF1ZXJ5KGFwaVF1ZXJ5T3JQcm9wZXJ0aWVzIGFzIF9fZXNyaS5RdWVyeVByb3BlcnRpZXMpXG4gICAgfVxuXG4gICAgLy8gY2xpZW50IHF1ZXJ5IGxpbWl0YXRpb246IEF0dHJpYnV0ZSB2YWx1ZXMgdXNlZCBpbiBhdHRyaWJ1dGUgcXVlcmllcyBleGVjdXRlZCBhZ2FpbnN0IGxheWVyVmlld3MgYXJlIGNhc2Ugc2Vuc2l0aXZlLlxuICAgIGlmICghbGF5ZXJEcy5pc1NxbENhc2VTZW5zaXRpdmUpIHtcbiAgICAgIC8vIFNlbGVjdGlvbiB2aWV3IGlzIGNsaWVudC1zaWRlIHF1ZXJ5LCBpdCBpcyBhbHdheXMgY2FzZSBzZW5zaXRpdmUsIHNhbWUgYXMgbGF5ZXIgdmlldyBxdWVyeS5cbiAgICAgIGNvbnN0IHNxbCA9IGRhdGFTb3VyY2VVdGlscy5nZXRBcmNHSVNTUUwocXVlcnlQYXJhbXMuc3FsRXhwcmVzc2lvbiwgbGF5ZXJEcy5nZXRNYWluRGF0YVNvdXJjZSgpLmdldERhdGFWaWV3KENPTlNUQU5UUy5TRUxFQ1RJT05fREFUQV9WSUVXX0lEKSkuc3FsIHx8ICcnXG4gICAgICBhcGlRdWVyeS53aGVyZSA9IHNxbFxuICAgIH1cblxuICAgIGlmIChxdWVyeVR5cGUgPT09ICdpZCcgfHwgcXVlcnlUeXBlID09PSAnY291bnQnKSB7XG4gICAgICBhcGlRdWVyeS5vdXRGaWVsZHMgPSBbXVxuICAgIH1cblxuICAgIHJldHVybiBhcGlRdWVyeVxuICB9XG5cbiAgLyoqXG4gICAqIHNldCB0aGUgZGVmaW5pdGlvbkV4cHJlc3Npb24gdG8gbGF5ZXIgYW5kIHZpZXcsIGJ1dCBkb2VzIG5vdCBhcHBseSB0aGUgZGVmaW5pdGlvbkV4cHJlc3Npb24gdG8gZGF0YSBzb3VyY2UuXG4gICAqL1xuICBzZXREZWZpbml0aW9uRXhwcmVzc2lvbiAobG9jYWxEZWZpbml0aW9uRXhwcmVzc2lvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2NhbERlZmluaXRpb25FeHByZXNzaW9uID0gbG9jYWxEZWZpbml0aW9uRXhwcmVzc2lvblxuXG4gICAgaWYgKHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCk/LmdldEN1cnJlbnRRdWVyeVBhcmFtcygpKSB7XG4gICAgICB0aGlzLnNldERlZmluaXRpb25FeHByZXNzaW9uVG9MYXllcih0aGlzLmdldExheWVyRGF0YVNvdXJjZSgpLmdldEN1cnJlbnRRdWVyeVBhcmFtcygpKVxuICAgIH1cbiAgfVxuXG4gIGdldExheWVyRGF0YVNvdXJjZSAoKTogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TGF5ZXJEYXRhU291cmNlKCkgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlXG4gIH1cblxuICBjcmVhdGVMYXllckRhdGFTb3VyY2UgKCk6IFByb21pc2U8RmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlPiB7XG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpIGFzIFByb21pc2U8RmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlPlxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRPckNyZWF0ZUxheWVyRGF0YVNvdXJjZSAoKSB7XG4gICAgbGV0IGRhdGFTb3VyY2UgPSB0aGlzLmdldExheWVyRGF0YVNvdXJjZSgpXG5cbiAgICBpZiAoIWRhdGFTb3VyY2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGFTb3VyY2UgPSBhd2FpdCB0aGlzLmNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRhdGFTb3VyY2UgPSBudWxsXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEppbXVMYXllclZpZXcgJHt0aGlzLmlkfSBjcmVhdGVMYXllckRhdGFTb3VyY2UgZXJyb3JgLCBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhU291cmNlXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldE9yQ3JlYXRlTGF5ZXJEYXRhU291cmNlSWZVc2VkICgpIHtcbiAgICBsZXQgZGF0YVNvdXJjZSA9IHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKClcblxuICAgIGlmICghZGF0YVNvdXJjZSAmJiB0aGlzLmlzTGF5ZXJEYXRhU291cmNlVXNlZCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhU291cmNlID0gYXdhaXQgdGhpcy5jcmVhdGVMYXllckRhdGFTb3VyY2UoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkYXRhU291cmNlID0gbnVsbFxuICAgICAgICBjb25zb2xlLmVycm9yKGBKaW11TGF5ZXJWaWV3ICR7dGhpcy5pZH0gY3JlYXRlTGF5ZXJEYXRhU291cmNlIGVycm9yYCwgZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVNvdXJjZVxuICB9XG5cbiAgZ2V0SGlnaGxpZ2h0TGF5ZXJMYXllciAoKTogX19lc3JpLkZlYXR1cmVMYXllciB7XG4gICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyXG4gIH1cblxuICAvKipcbiAgICogRXZlbiB0aGUgZGF0YSBzb3VyY2UgaW5zdGFuY2UgaXMgbm90IGNyZWF0ZWQsIHRoaXMgbWV0aG9kIHdpbGwgc3RpbGwgYmUgaW52b2tlZCBpZiB0aGUgaW5mbyBjaGFuZ2VkLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uTGF5ZXJEYXRhU291cmNlSW5mb0NoYW5nZSAocHJlRHNJbmZvOiBJTURhdGFTb3VyY2VJbmZvLCBkc0luZm86IElNRGF0YVNvdXJjZUluZm8pIHtcbiAgICBzdXBlci5vbkxheWVyRGF0YVNvdXJjZUluZm9DaGFuZ2UocHJlRHNJbmZvLCBkc0luZm8pXG4gICAgY29uc3QgcHJlU2VsZWN0ZWRJZHMgPSBwcmVEc0luZm8/LnNlbGVjdGVkSWRzIHx8IG51bGxcbiAgICBjb25zdCBjdXJyU2VsZWN0ZWRJZHMgPSBkc0luZm8/LnNlbGVjdGVkSWRzIHx8IG51bGxcblxuICAgIGlmIChwcmVTZWxlY3RlZElkcyAhPT0gY3VyclNlbGVjdGVkSWRzKSB7XG4gICAgICAvLyBzZWxlY3RlZElkcyBjaGFuZ2VkXG4gICAgICBpZiAoZHNJbmZvPy5zZWxlY3RlZElkcz8ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmhpZ2hMaWdodFNlbGVjdGVkUmVjb3JkcygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFySGlnaExpZ2h0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRMYXllckRhdGFTb3VyY2UoKSkge1xuICAgICAgaWYgKHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCkuZ2V0Q3VycmVudFF1ZXJ5UGFyYW1zKCkpIHtcbiAgICAgICAgdGhpcy5zZXREZWZpbml0aW9uRXhwcmVzc2lvblRvTGF5ZXIodGhpcy5nZXRMYXllckRhdGFTb3VyY2UoKS5nZXRDdXJyZW50UXVlcnlQYXJhbXMoKSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRzSW5mby53aWRnZXRRdWVyaWVzPy5fZmlsdGVySW5VcmwpIHtcbiAgICAgIHRoaXMuY3JlYXRlTGF5ZXJEYXRhU291cmNlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGVmaW5pdGlvbkV4cHJlc3Npb25Ub0xheWVyKGRzSW5mby53aWRnZXRRdWVyaWVzPy5fZmlsdGVySW5VcmwpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgIGlmIChkc0luZm8/LmdkYlZlcnNpb24pIHtcbiAgICAgICAgdGhpcy5sYXllci5nZGJWZXJzaW9uID0gZHNJbmZvLmdkYlZlcnNpb25cbiAgICAgIH1cblxuICAgICAgaWYgKCFkc0luZm8/LmdkYlZlcnNpb24gJiYgdGhpcy5vcmlnaW5hbEdkYlZlcnNpb24pIHtcbiAgICAgICAgdGhpcy5sYXllci5nZGJWZXJzaW9uID0gdGhpcy5vcmlnaW5hbEdkYlZlcnNpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFJlZnJlc2hJbnRlcnZhbEZvckxheWVyKHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCk/LmdldEF1dG9SZWZyZXNoSW50ZXJ2YWwoKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBwb3B1cC5mZWF0dXJlcyBtYXliZSBjb21lIGZyb20gY2xpY2tpbmcgbWFwLCBvciBtYXliZSBjb21lIGZyb20gZXhiIGZlYXR1cmUgc2VsZWN0aW9uLlxuICAgKiBKaW11RmVhdHVyZUxheWVyU2NlbmVMYXllclZpZXdDb21tb24gZm9jdXNlcyBvbiBjbGlja2luZyBtYXAgY2FzZS5cbiAgICogSmltdU1hcFZpZXcgZm9jdXNlcyBvbiBleGIgZmVhdHVyZSBzZWxlY3Rpb24gY2FzZS5cbiAgICovXG4gIHByaXZhdGUgd2F0Y2hQb3B1cFNlbGVjdEZlYXR1cmUgKCkge1xuICAgIGlmICh0aGlzLnBvcHVwU2VsZWN0RmVhdHVyZVdhdGNoSGFuZGxlKSB7XG4gICAgICB0aGlzLnBvcHVwU2VsZWN0RmVhdHVyZVdhdGNoSGFuZGxlLnJlbW92ZSgpXG4gICAgICB0aGlzLnBvcHVwU2VsZWN0RmVhdHVyZVdhdGNoSGFuZGxlID0gbnVsbFxuICAgIH1cblxuICAgIC8vIFdoZW4gY2xpY2tpbmcgZmVhdHVyZXMgb24gbWFwLCBKUyBBUEkgd2lsbCBzaG93IHBvcHVwIGJ5IGRlZmF1bHQuIFdlIG5lZWQgdG8gdXNlIHRoZSBmb2xsb3dpbmcgY29kZSB0byBzeW5jIHRoZSBwb3B1cCBzZWxlY3RlZCBmZWF0dXJlIHRvIEppbXVGZWF0dXJlTGF5ZXJWaWV3IGFuZCBkYXRhIHNvdXJjZS5cbiAgICB0aGlzLnBvcHVwU2VsZWN0RmVhdHVyZVdhdGNoSGFuZGxlID0gdGhpcy5yZWFjdGl2ZVV0aWxzLndhdGNoKCgpID0+IHRoaXMuZ2V0TWFwU2NlbmVWaWV3KCkucG9wdXA/LnNlbGVjdGVkRmVhdHVyZSwgYXN5bmMgKGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljKSA9PiB7XG4gICAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMubWFwVmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMuamltdU1hcFZpZXdJZClcblxuICAgICAgaWYgKGppbXVNYXBWaWV3ICYmIGppbXVNYXBWaWV3LmlzUG9wdXBGZWF0dXJlc0Zyb21TZWxlY3Rpb24oKSkge1xuICAgICAgICAvLyBwb3B1cC5mZWF0dXJlcyBjb21lcyBmcm9tIEppbXVGZWF0dXJlTGF5ZXJWaWV3IGFuZCBkYXRhIHNvdXJjZSBzZWxlY3Rpb24sIG5vdCBmcm9tIEpTIEFQSSBjbGlja2luZy5cbiAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBvbmx5IGhhbmRsZXMgdGhlIEpTIEFQSSBjbGlja2luZyBjYXNlLlxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGdyYXBoaWMpIHtcbiAgICAgICAgY29uc3QgZ3JhcGhpY0xheWVyID0gdGhpcy5nZXRMYXllckZyb21GZWF0dXJlKGdyYXBoaWMpXG5cbiAgICAgICAgaWYgKCFncmFwaGljTGF5ZXIpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChncmFwaGljTGF5ZXIgPT09IHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEZlYXR1cmVJZCA9IGdyYXBoaWMuZ2V0T2JqZWN0SWQoKVxuXG4gICAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJEYXRhU291cmNlVXNlZCgpICYmICF0aGlzLmdldExheWVyRGF0YVNvdXJjZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVCeUlkKHNlbGVjdGVkRmVhdHVyZUlkKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbGF5ZXJEYXRhU291cmNlID0gdGhpcy5nZXRMYXllckRhdGFTb3VyY2UoKSB8fCBhd2FpdCB0aGlzLmNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG4gICAgICAgICAgaWYgKCFsYXllckRhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsYXllckRhdGFTb3VyY2UuZ2V0U2VsZWN0ZWRSZWNvcmRJZHMoKS5pbmNsdWRlcyhzZWxlY3RlZEZlYXR1cmVJZCArICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpXG5cbiAgICAgICAgICAvLyBXZSBuZWVkIHRvIHVzZSBkcy5xdWVyeUJ5SWQoKSBpbnN0ZWFkIG9mIGRzLmJ1aWxkUmVjb3JkKCkgdG8gb2J0YWluIHRoZSByZWNvcmQuXG4gICAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHRoZSBmaWVsZHMgaW4gZ3JhcGhpYy5hdHRyaWJ1dGVzIG1heSBiZSBpbmNvbXBsZXRlIGlmIHRoZSBsYXllciBwb3B1cCBmaWVsZHMgYXJlIGNvbmZpZ3VyZWQgaW4gTWFwVmlld2VyLlxuICAgICAgICAgIGxheWVyRGF0YVNvdXJjZS5xdWVyeUJ5SWQoc2VsZWN0ZWRGZWF0dXJlSWQgKyAnJykudGhlbigocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyU2VsZWN0ZWRGZWF0dXJlID0gamltdU1hcFZpZXcudmlldz8ucG9wdXA/LnNlbGVjdGVkRmVhdHVyZVxuXG4gICAgICAgICAgICAvLyBTaW5jZSBkcy5xdWVyeUJ5SWQoKSBpcyBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCB3ZSBuZWVkIHRvIGRldGVjdCB3aGV0aGVyIHRoZSBjdXJyZW50IHBvcHVwLnNlbGVjdGVkRmVhdHVyZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgLy8gdG8gYXZvaWQgc2VsZWN0IHN5bmNocm9uaXphdGlvbiBlcnJvcnMgY2F1c2VkIGJ5IHF1aWNrIGNsaWNrcy5cbiAgICAgICAgICAgIGlmIChjdXJyU2VsZWN0ZWRGZWF0dXJlID09PSBncmFwaGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUJ5SWQoTnVtYmVyKHNlbGVjdGVkRmVhdHVyZUlkKSwgcmVjb3JkKVxuICAgICAgICAgICAgICBNZXNzYWdlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1Ymxpc2hNZXNzYWdlKG5ldyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UoamltdU1hcFZpZXcubWFwV2lkZ2V0SWQsIFtyZWNvcmRdKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUJ5SWQobnVsbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VQb3B1cFZpc2libGVXYXRjaEhhbmRsZSAoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBWaXNpYmxlV2F0Y2hIYW5kbGUpIHtcbiAgICAgIHRoaXMucG9wdXBWaXNpYmxlV2F0Y2hIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMucG9wdXBWaXNpYmxlV2F0Y2hIYW5kbGUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3YXRjaFBvcHVwVmlzaWJsZSAoKSB7XG4gICAgdGhpcy5yZWxlYXNlUG9wdXBWaXNpYmxlV2F0Y2hIYW5kbGUoKVxuXG4gICAgdGhpcy5wb3B1cFZpc2libGVXYXRjaEhhbmRsZSA9IHRoaXMucmVhY3RpdmVVdGlscy53YXRjaCgoKSA9PiB0aGlzLmdldE1hcFNjZW5lVmlldygpLnBvcHVwPy52aXNpYmxlLCB2aXNpYmxlID0+IHtcbiAgICAgIGNvbnN0IHBvcHVwID0gdGhpcy5nZXRNYXBTY2VuZVZpZXcoKS5wb3B1cFxuXG4gICAgICBpZiAoIXZpc2libGUgJiYgcG9wdXAgJiYgdGhpcy5pc1BvcHVwU2VsZWN0Q3VycmVudExheWVyRmVhdHVyZSgpKSB7XG4gICAgICAgIHBvcHVwLmZlYXR1cmVzID0gW11cbiAgICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpXG4gICAgICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UobmV3IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZShqaW11TWFwVmlldy5tYXBXaWRnZXRJZCwgW10pKVxuICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVCeUlkKG51bGwpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaXNQb3B1cFNlbGVjdEN1cnJlbnRMYXllckZlYXR1cmUgKCkge1xuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5nZXRNYXBTY2VuZVZpZXcoKS5wb3B1cFxuICAgIHJldHVybiBwb3B1cCAmJiBwb3B1cC5zZWxlY3RlZEZlYXR1cmUgJiYgdGhpcy5nZXRMYXllckZyb21GZWF0dXJlKHBvcHVwLnNlbGVjdGVkRmVhdHVyZSkgPT09IHRoaXMubGF5ZXJcbiAgfVxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwdWJsaWMgb25QYXJlbnRMYXllclZpc2libGVDaGFuZ2UgKHBhcmVudE5ld1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uTGF5ZXJGaW5hbFZpc2libGVDaGFuZ2UoKVxuICB9XG5cbiAgcHJpdmF0ZSB3YXRjaExheWVyVmlzaWJsZSAoKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJWaXNpYmxlV2F0Y2hIYW5kbGUpIHtcbiAgICAgIHRoaXMubGF5ZXJWaXNpYmxlV2F0Y2hIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMubGF5ZXJWaXNpYmxlV2F0Y2hIYW5kbGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5sYXllclZpc2libGVXYXRjaEhhbmRsZSA9IHRoaXMubGF5ZXIud2F0Y2goJ3Zpc2libGUnLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICB0aGlzLm9uTGF5ZXJGaW5hbFZpc2libGVDaGFuZ2UoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIG9uTGF5ZXJGaW5hbFZpc2libGVDaGFuZ2UgKCkge1xuICAgIGNvbnN0IGZpbmFsTGF5ZXJWaXNpYmxlID0gdGhpcy5pc0xheWVyVmlzaWJsZSgpXG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIpIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyLnZpc2libGUgPSBmaW5hbExheWVyVmlzaWJsZVxuICAgIH1cblxuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5nZXRNYXBTY2VuZVZpZXcoKS5wb3B1cFxuXG4gICAgaWYgKHBvcHVwICYmIHRoaXMuaXNQb3B1cFNlbGVjdEN1cnJlbnRMYXllckZlYXR1cmUoKSkge1xuICAgICAgaWYgKHBvcHVwLnZpc2libGUgIT09IGZpbmFsTGF5ZXJWaXNpYmxlKSB7XG4gICAgICAgIC8vIGJlZm9yZSB1cGRhdGUgcG9wdXAudmlzaWJsZSwgd2UgbmVlZCB0byByZWxlYXNlIHBvcHVwVmlzaWJsZVdhdGNoSGFuZGxlIHRvIGF2b2lkIGV4ZWN1dGUgdGhpcy5zZWxlY3RGZWF0dXJlQnlJZChudWxsKVxuICAgICAgICB0aGlzLnJlbGVhc2VQb3B1cFZpc2libGVXYXRjaEhhbmRsZSgpXG4gICAgICAgIHBvcHVwLnZpc2libGUgPSBmaW5hbExheWVyVmlzaWJsZVxuXG4gICAgICAgIC8vIGFmdGVyIHVwZGF0ZSBwb3B1cC52aXNpYmxlLCB3ZSBuZWVkIHRvIHdhdGNoIHBvcHVwVmlzaWJsZVdhdGNoSGFuZGxlIGFnYWluXG4gICAgICAgIHRoaXMud2F0Y2hQb3B1cFZpc2libGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2F0Y2hIaWdobGlnaHRPcHRpb25zICgpIHtcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMubWFwVmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMuamltdU1hcFZpZXdJZClcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0T3B0aW9uc1dhdGNoSGFuZGxlKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbnNXYXRjaEhhbmRsZS5yZW1vdmUoKVxuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb25zV2F0Y2hIYW5kbGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5oaWdobGlnaHRPcHRpb25zV2F0Y2hIYW5kbGUgPSB2aWV3LndhdGNoKCdoaWdobGlnaHRPcHRpb25zJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyKSB7XG4gICAgICAgIC8vIGZlYXR1cmVMYXllclZpZXcuaGlnaGxpZ2h0T3B0aW9ucyBub3Qgd29yayBpZiBpdCBpcyBhIGNsaWVudC1zaWRlIEZlYXR1cmVMYXllciwgd2UgbmVlZCB0byBzZXQgcmVuZGVyZXIgYXMgYSB3b3Jrcm91bmQgdG8gaGlnaGxpZ2h0IGZlYXR1cmVzXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyLnJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlckZvckhpZ2hsaWdodExheWVyKHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyLmdlb21ldHJ5VHlwZSwgdmlldylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gbWFwIGlzIGxvYWRlZCBmaXJzdCB0aW1lLCB3ZSdsbCB0cnkgdG8gbW92ZSB0aGUgc2VsZWN0ZWQgZmVhdHVyZSB0byBjZW50ZXJcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgdHJ5TW92ZVRvQ2VudGVyICgpIHtcbiAgICBsZXQgbGF5ZXJEYXRhU291cmNlSWQgPSB0aGlzLmxheWVyRGF0YVNvdXJjZUlkXG4gICAgbGV0IGxheWVyRGF0YVNvdXJjZTogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlID0gbnVsbFxuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSB7XG4gICAgICAvLyBXaGVuIHNlbGVjdCBzY2VuZSBmZWF0dXJlcyB3aXRoIG1hcCBzZWxlY3QgdG9vbCwgU2NlbmVMYXllckRhdGFTb3VyY2VJbXBsIHVzZXMgdGhlIGFzc29jaWF0ZWQgRmVhdHVyZUxheWVyRGF0YVNvdXJjZUltcGxcbiAgICAgIC8vIHRvIHF1ZXJ5IHNjZW5lIGZlYXR1cmVzIGFuZCB1cGRhdGUgc2VsZWN0aW9uLCBhbmQgdGhlIGJyb3dzZXIgdXJsIGlzIHVwZGF0ZWQgd2l0aCBzdWZmaXggJ2Fzc29jaWF0ZWRfZGF0YV9zb3VyY2UnLlxuICAgICAgLy8gU28gd2hlbiB3ZSByZXN0b3JlIHNlbGVjdGlvbiBmcm9tIHVybCwgd2UgbmVlZCB0byB1c2UgdGhlIGFzc29jaWF0ZWQgRmVhdHVyZUxheWVyRGF0YVNvdXJjZUltcGwgaWQsIG5vdCBTY2VuZUxheWVyRGF0YVNvdXJjZUltcGwgaWQuXG4gICAgICBsZXQgYXNzb2NpYXRlZERhdGFTb3VyY2U6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgPSBudWxsXG4gICAgICBsYXllckRhdGFTb3VyY2UgPSBhd2FpdCB0aGlzLmdldE9yQ3JlYXRlTGF5ZXJEYXRhU291cmNlKCkgYXMgU2NlbmVMYXllckRhdGFTb3VyY2VcblxuICAgICAgaWYgKGxheWVyRGF0YVNvdXJjZSAmJiBsYXllckRhdGFTb3VyY2UuZ2V0QXNzb2NpYXRlZERhdGFTb3VyY2UpIHtcbiAgICAgICAgYXNzb2NpYXRlZERhdGFTb3VyY2UgPSBsYXllckRhdGFTb3VyY2UuZ2V0QXNzb2NpYXRlZERhdGFTb3VyY2UoKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFzc29jaWF0ZWREYXRhU291cmNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBsYXllckRhdGFTb3VyY2VJZCA9IGFzc29jaWF0ZWREYXRhU291cmNlLmlkXG4gICAgfVxuXG4gICAgLy8gd2UgZG9uJ3QgY2FyZSB3aGV0aGVyIHRoZSBsYXllciBoYXMgZGF0YSBzb3VyY2UsIHdlIGp1c3QgcmVhZCB0aGUgc2VsZWN0ZWQgaWQgZnJvbSBzdG9yZVxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmRhdGFTb3VyY2VzSW5mb1tsYXllckRhdGFTb3VyY2VJZF0/LnNlbGVjdGVkSWRzPy5hc011dGFibGUoKSB8fCBbXVxuICAgIGNvbnN0IG51bVNlbGVjdGVkSWRzID0gc2VsZWN0ZWRJZHMubWFwKGlkID0+IE51bWJlcihpZCkpXG5cbiAgICBpZiAobnVtU2VsZWN0ZWRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gV2UgZG9uJ3QgY2hlY2sgdGhpcy5pc0xheWVyRGF0YVNvdXJjZVVzZWQoKSBhbmQgYWx3YXlzIG1ha2Ugc3VyZSB0aGUgbGF5ZXIgZGF0YXNvdXJjZSBpcyBjcmVhdGVkXG4gICAgICAvLyBiZWNhdXNlIHRoZSBicm93c2VyIHVybCBpcyB1cGRhdGVkIGJ5IGxheWVyIGRhdGEgc291cmNlIGJlZm9yZSByZWZyZXNoLlxuICAgICAgaWYgKCFsYXllckRhdGFTb3VyY2UpIHtcbiAgICAgICAgbGF5ZXJEYXRhU291cmNlID0gYXdhaXQgdGhpcy5nZXRPckNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChsYXllckRhdGFTb3VyY2UpIHtcbiAgICAgICAgLy8gZGF0YSBzb3VyY2UgaXMgdXNlZCBhbmQgY3JlYXRlZFxuICAgICAgICBjb25zdCBxdWVyeVJlc3VsdCA9IGF3YWl0IGxheWVyRGF0YVNvdXJjZS5xdWVyeSh7XG4gICAgICAgICAgb2JqZWN0SWRzOiBudW1TZWxlY3RlZElkcy5zbGljZSgpLFxuICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxuICAgICAgICAgIHJldHVyblo6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZWNvcmRzID0gcXVlcnlSZXN1bHQucmVjb3JkcyBhcyBGZWF0dXJlRGF0YVJlY29yZFtdXG5cbiAgICAgICAgaWYgKHJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RGZWF0dXJlc0J5SWRzKG51bVNlbGVjdGVkSWRzLCByZWNvcmRzKVxuICAgICAgICAgIGNvbnN0IGZpcnN0RmVhdHVyZUdlb21ldHJ5ID0gcmVjb3Jkc1swXT8uZmVhdHVyZT8uZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XG5cbiAgICAgICAgICBpZiAoZmlyc3RGZWF0dXJlR2VvbWV0cnkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHRoaXMubW92ZUZlYXR1cmVUb0NlbnRlcihmaXJzdEZlYXR1cmVHZW9tZXRyeSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZmFpbCB0byBtb3ZlIGZlYXR1cmUgdG8gY2VudGVyJywgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExheWVyRnJvbUZlYXR1cmUgKGZlYXR1cmU6IF9fZXNyaS5HcmFwaGljKSB7XG4gICAgLy8gZmVhdHVyZSBvZiBzdGFuZGFsb25lIGZlYXR1cmUgbGF5ZXIgaGFzIFwiLmxheWVyXCIsIGJ1dCB0aGUgZmVhdHVyZSBvZiBtYXAgc2VydmVyJ3Mgc3ViIGZlYXR1cmUgbGF5ZXIgaGFzIFwiLnNvdXJjZUxheWVyXCJcbiAgICByZXR1cm4gZmVhdHVyZS5sYXllciB8fCAoZmVhdHVyZSBhcyBhbnkpLnNvdXJjZUxheWVyXG4gIH1cblxuICBwcml2YXRlIHNldFJlZnJlc2hJbnRlcnZhbEZvckxheWVyIChyZWZyZXNoSW50ZXJ2YWw6IG51bWJlcikge1xuICAgIGlmICghdGhpcy52aWV3IHx8IHJlZnJlc2hJbnRlcnZhbCA9PT0gdW5kZWZpbmVkIHx8IHJlZnJlc2hJbnRlcnZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYXBwTW9kZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBSdW50aW1lSW5mby5hcHBNb2RlXG4gICAgaWYgKGFwcE1vZGUgPT09IEFwcE1vZGUuRGVzaWduKSB7XG4gICAgICB0aGlzLmxheWVyLnJlZnJlc2hJbnRlcnZhbCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYXllci5yZWZyZXNoSW50ZXJ2YWwgPSByZWZyZXNoSW50ZXJ2YWwgLyA2MFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGVmaW5pdGlvbkV4cHJlc3Npb25Ub0xheWVyIChxdWVyeTogRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMpIHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3LmxheWVyKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsUXVlcnkgPSB7XG4gICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICB3aGVyZTogdGhpcy5sb2NhbERlZmluaXRpb25FeHByZXNzaW9uLFxuICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJnZWRRdWVyeSA9IHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCk/LmdldFJlYWxRdWVyeVBhcmFtcyhsb2NhbFF1ZXJ5LCAncXVlcnknKSB8fCBxdWVyeSAvLyBsYXllciBkcyBtYXkgbm90IGNyZWF0ZWRcbiAgICAgICAgaWYgKG1lcmdlZFF1ZXJ5ICYmIG1lcmdlZFF1ZXJ5LndoZXJlICE9PSB0aGlzLnZpZXcubGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24pIHtcbiAgICAgICAgICB0aGlzLnZpZXcubGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBtZXJnZWRRdWVyeS53aGVyZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIpIHtcbiAgICAgICAgICBpZiAobWVyZ2VkUXVlcnk/LnRpbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgKHRoaXMudmlldy5sYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyKS51c2VWaWV3VGltZSA9IGZhbHNlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICh0aGlzLnZpZXcubGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcikudXNlVmlld1RpbWUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgICh0aGlzLnZpZXcubGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcikudGltZUV4dGVudCA9IGRhdGFTb3VyY2VVdGlscy5jaGFuZ2VKaW11VGltZVRvSlNBUElUaW1lRXh0ZW50KG1lcmdlZFF1ZXJ5Py50aW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHF1ZXJ5Lmdlb21ldHJ5KSB7XG4gICAgICAgICAgaWYgKHRoaXMudmlldy5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcuZmlsdGVyLmdlb21ldHJ5ID09PSBxdWVyeS5nZW9tZXRyeSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICAgICAgICdlc3JpL2dlb21ldHJ5L3N1cHBvcnQvanNvblV0aWxzJ1xuICAgICAgICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uVXRpbHM6IF9fZXNyaS5qc29uVXRpbHMgPSBtb2R1bGVzWzBdXG4gICAgICAgICAgICB0aGlzLnZpZXcuZmlsdGVyID0ge1xuICAgICAgICAgICAgICBnZW9tZXRyeToganNvblV0aWxzLmZyb21KU09OKHF1ZXJ5Lmdlb21ldHJ5KVxuICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnZpZXcuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZmlsdGVyID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMudmlldyAmJiB0aGlzLmxheWVyKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsUXVlcnkgPSB7XG4gICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICB3aGVyZTogdGhpcy5sb2NhbERlZmluaXRpb25FeHByZXNzaW9uLFxuICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJnZWRRdWVyeSA9IHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCk/LmdldFJlYWxRdWVyeVBhcmFtcyhsb2NhbFF1ZXJ5LCAncXVlcnknKVxuICAgICAgICBjb25zdCBzdXBwb3J0U3FsRXhwcmVzc2lvbiA9ICgodGhpcy5sYXllciBhcyBfX2VzcmkuU3VibGF5ZXIpLmRlY2xhcmVkQ2xhc3MgPT09ICdlc3JpLmxheWVycy5zdXBwb3J0LlN1YmxheWVyJyAmJiAodGhpcy5sYXllciBhcyBfX2VzcmkuU3VibGF5ZXIpLmxheWVyPy5jYXBhYmlsaXRpZXM/LmV4cG9ydE1hcD8uc3VwcG9ydHNTdWJsYXllckRlZmluaXRpb25FeHByZXNzaW9uKSB8fCAodGhpcy5sYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyKS5kZWNsYXJlZENsYXNzID09PSAnZXNyaS5sYXllcnMuRmVhdHVyZUxheWVyJ1xuICAgICAgICBpZiAobWVyZ2VkUXVlcnkgJiYgc3VwcG9ydFNxbEV4cHJlc3Npb24gJiYgbWVyZ2VkUXVlcnkud2hlcmUgIT09IHRoaXMubGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24pIHtcbiAgICAgICAgICB0aGlzLmxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gbWVyZ2VkUXVlcnkud2hlcmVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlnaExpZ2h0U2VsZWN0ZWRSZWNvcmRzICgpIHtcbiAgICBpZiAodGhpcy5nZXRTZWxlY3RlZFJlY29yZElkcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5oaWdoTGlnaHRGZWF0dXJlcyh0aGlzLmdldFNlbGVjdGVkUmVjb3JkSWRzKCkubWFwKGlkID0+IHBhcnNlSW50KGlkKSkpXG4gIH1cblxuICAvKipcbiAgICogRm9yIE1hcFNlcnZpY2Ugc3ViIGxheWVyLCB3ZSBuZWVkIHRvIGNyZWF0ZSBhIGxheWVyIGZvciBoaWdobGlnaHQuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHRyeUNyZWF0ZUhpZ2hMaWdodEZlYXR1cmVMYXllciAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMudmlldyB8fCB0aGlzLnR5cGUgIT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8ICF0aGlzLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmdldEppbXVNYXBWaWV3KCkud2hlbkppbXVMYXllclZpZXdMb2FkZWQodGhpcy5pZClcblxuICAgIGNvbnN0IGxheWVyRHMgPSB0aGlzLmdldExheWVyRGF0YVNvdXJjZSgpIHx8IGF3YWl0IHRoaXMuY3JlYXRlTGF5ZXJEYXRhU291cmNlKClcbiAgICBpZiAoIWxheWVyRHMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5oaWdoTGlnaHRMYXllckNyZWF0aW9uUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaGlnaExpZ2h0TGF5ZXJDcmVhdGlvblByb21pc2VcbiAgICB9XG5cbiAgICBjb25zdCBvYmplY3RJZEZpZWxkSW5GZWF0dXJlbGF5ZXIgPSB0aGlzLmdldE9iamVjdElkRmllbGQobGF5ZXJEcy5sYXllci5maWVsZHMsIGxheWVyRHMubGF5ZXIub2JqZWN0SWRGaWVsZClcblxuICAgIC8vIEZlYXR1cmVMYXllci5hcHBseUVkaXRzKCkgd2lsbCBjaGFuZ2UgdGhlIG9iamVjdElkIHZhbHVlIG9mIGZlYXR1cmVzIGlmIHRoZSBsYXllciBpcyBhIGNsaWVudC1zaWRlIGZlYXR1cmUgbGF5ZXIsXG4gICAgLy8gc28gbmVlZCB0byBhZGQgYW4gZXh0cmEgZmllbGQgdG8gaWRlbnRpZnkgb2JqZWN0SWQgb2YgZmVhdHVyZS5cbiAgICBjb25zdCBleGJPaWRGaWVsZEluZm8gPSB7XG4gICAgICBuYW1lOiBFWEJfT0lELFxuICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgYWxpYXM6IEVYQl9PSUQsXG4gICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9IGFzIF9fZXNyaS5GaWVsZFxuXG4gICAgY29uc3QgbGF5ZXJGaWVsZEluZm9zOiBfX2VzcmkuRmllbGRbXSA9IG9iamVjdElkRmllbGRJbkZlYXR1cmVsYXllciA/IFtvYmplY3RJZEZpZWxkSW5GZWF0dXJlbGF5ZXIsIGV4Yk9pZEZpZWxkSW5mb10gOiBbZXhiT2lkRmllbGRJbmZvXVxuXG4gICAgdGhpcy5oaWdoTGlnaHRMYXllckNyZWF0aW9uUHJvbWlzZSA9IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgY29uc3QgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllciA9IG1vZHVsZXNbMF1cblxuICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpXG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlld1xuICAgICAgLy8gdGhpcy5sYXllciBzaG91bGQgYmUgZXNyaS5sYXllcnMuc3VwcG9ydC5TdWJsYXllciwgd2UgbmVlZCBzeW5jIGhhc1ogcHJvcGVydHkgdG8gdGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIsXG4gICAgICAvLyBvdGhlcndpc2UgdGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIgY2FuJ3QgcmVuZGVyIGZlYXR1cmVzIHdpdGggaGFzWiBwcm9wZXJ0eS5cbiAgICAgIGNvbnN0IGhhc1ogPSB0aGlzLmxheWVyPy5zb3VyY2VKU09OPy5oYXNaIHx8IGZhbHNlXG5cbiAgICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XG4gICAgICAgIHRpdGxlOiBgJHtsYXllckRzLmxheWVyLnRpdGxlfS1oaWdobGlnaHRgLFxuICAgICAgICBnZW9tZXRyeVR5cGU6IGxheWVyRHMubGF5ZXIuZ2VvbWV0cnlUeXBlLFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBsYXllckRzLmxheWVyLnNwYXRpYWxSZWZlcmVuY2UsXG4gICAgICAgIHNvdXJjZTogW10sXG4gICAgICAgIGZpZWxkczogbGF5ZXJGaWVsZEluZm9zLFxuICAgICAgICBvYmplY3RJZEZpZWxkOiBsYXllckRzLmxheWVyLm9iamVjdElkRmllbGQsXG4gICAgICAgIC8vIGZlYXR1cmVMYXllclZpZXcuaGlnaGxpZ2h0T3B0aW9ucyBub3Qgd29yayBpZiBpdCBpcyBhIGNsaWVudC1zaWRlIEZlYXR1cmVMYXllciwgd2UgbmVlZCB0byBzZXQgcmVuZGVyZXIgYXMgYSB3b3Jrcm91bmQgdG8gaGlnaGxpZ2h0IGZlYXR1cmVzXG4gICAgICAgIHJlbmRlcmVyOiB0aGlzLmdldFJlbmRlcmVyRm9ySGlnaGxpZ2h0TGF5ZXIobGF5ZXJEcy5sYXllci5nZW9tZXRyeVR5cGUsIHZpZXcpLFxuICAgICAgICBsaXN0TW9kZTogJ2hpZGUnLFxuICAgICAgICBsZWdlbmRFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgdmlzaWJsZTogdGhpcy5pc0xheWVyVmlzaWJsZSgpLFxuICAgICAgICBoYXNaXG4gICAgICB9KVxuXG4gICAgICB2aWV3Lm1hcC5hZGQodGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIpXG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyVmlldyA9IGV2ZW50LmxheWVyVmlldyBhcyBfX2VzcmkuRmVhdHVyZUxheWVyVmlld1xuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdGhpcy5pc0xheWVyVmlzaWJsZSgpKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5oaWdoTGlnaHRMYXllckNyZWF0aW9uUHJvbWlzZVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRGZWF0dXJlc1RvSGlnaGxpZ2h0RmVhdHVyZUxheWVyIChpZHM6IG51bWJlcltdLCBmZWF0dXJlcz86IF9fZXNyaS5HcmFwaGljW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBkcyA9IHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKClcbiAgICBjb25zdCBpZEZpZWxkID0gZHMuZ2V0SWRGaWVsZCgpXG5cbiAgICBpZiAoIWZlYXR1cmVzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFJlY29yZHMgPSBkcy5nZXRTZWxlY3RlZFJlY29yZHMoKVxuICAgICAgZmVhdHVyZXMgPSBpZHMubWFwKGlkID0+IHtcbiAgICAgICAgcmV0dXJuIChzZWxlY3RlZFJlY29yZHMuZmluZChyID0+IHIuZ2V0SWQoKSA9PT0gaWQgKyAnJykgYXMgRmVhdHVyZURhdGFSZWNvcmQpPy5mZWF0dXJlXG4gICAgICB9KS5maWx0ZXIoZiA9PiAhIWYpIGFzIF9fZXNyaS5HcmFwaGljW11cbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkRmVhdHVyZXMgPSBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiB7XG4gICAgICBjb25zdCB0ZW1wRmVhdHVyZSA9IGZlYXR1cmUuY2xvbmUoKVxuICAgICAgY29uc3Qgb2JqZWN0SWRGaWVsZFZhbHVlID0gdGVtcEZlYXR1cmUuYXR0cmlidXRlc1tpZEZpZWxkXVxuXG4gICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0ge31cbiAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNbaWRGaWVsZF0gPSBvYmplY3RJZEZpZWxkVmFsdWVcbiAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNbRVhCX09JRF0gPSBvYmplY3RJZEZpZWxkVmFsdWVcblxuICAgICAgcmV0dXJuIHRlbXBGZWF0dXJlXG4gICAgfSlcblxuICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodEZlYXR1cmVMYXllci5hcHBseUVkaXRzKHsgYWRkRmVhdHVyZXMgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgcmV0dXJuICFyZXN1bHQuYWRkRmVhdHVyZVJlc3VsdHMuZmluZChyID0+IHIuZXJyb3IpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRmVhdHVyZXNGcm9tSGlnaGxpZ2h0RmVhdHVyZUxheWVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIucXVlcnlGZWF0dXJlcyh7IHdoZXJlOiAnMT0xJyB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBhbGxGZWF0dXJlcyA9IHJlc3VsdC5mZWF0dXJlc1xuICAgICAgaWYgKGFsbEZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXIuYXBwbHlFZGl0cyh7IGRlbGV0ZUZlYXR1cmVzOiBhbGxGZWF0dXJlcyB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHJldHVybiAhcmVzdWx0LmRlbGV0ZUZlYXR1cmVSZXN1bHRzLmZpbmQociA9PiByLmVycm9yKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpZHMubGVuZ3RoIG11c3QgPiAwXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGhpZ2hMaWdodEZlYXR1cmVzIChpZHM6IG51bWJlcltdLCBmZWF0dXJlcz86IF9fZXNyaS5HcmFwaGljW10pIHtcbiAgICAvLyBXZSBuZWVkIGNhbGwgb25TZWxlY3RlZEZlYXR1cmVzQ2hhbmdlIGluIGhpZ2hMaWdodEZlYXR1cmVzIGJlY2F1c2Ugd2UgbmVlZCB0byBtYWtlIHN1cmUgZmVhdHVyZXMgYXJlIHN5bmNlZCB0byBsYXllclZpZXcsXG4gICAgLy8gb3RoZXJ3aXNlIGdldFNlbGVjdGVkUmVjb3JkcygpIHdpbGwgcmV0dXJuIHdyb25nIHJlc3VsdC5cbiAgICBpZiAodGhpcy5oaWdoTGlnaHRIYW5kbGUpIHtcbiAgICAgIHRoaXMuaGlnaExpZ2h0SGFuZGxlLnJlbW92ZSgpXG4gICAgICB0aGlzLmhpZ2hMaWdodEhhbmRsZSA9IG51bGxcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnRyeUNyZWF0ZUhpZ2hMaWdodEZlYXR1cmVMYXllcigpXG4gICAgY29uc3QgdmlldyA9IHRoaXMudmlldyB8fCB0aGlzLmhpZ2hsaWdodEZlYXR1cmVMYXllclZpZXdcbiAgICBpZiAoIXZpZXcpIHtcbiAgICAgIHRoaXMub25TZWxlY3RlZEZlYXR1cmVzQ2hhbmdlKGZhbHNlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0RmVhdHVyZUxheWVyVmlldykge1xuICAgICAgY29uc3QgcmVtb3ZlUiA9IGF3YWl0IHRoaXMucmVtb3ZlRmVhdHVyZXNGcm9tSGlnaGxpZ2h0RmVhdHVyZUxheWVyKClcbiAgICAgIGNvbnN0IGFkZFIgPSBhd2FpdCB0aGlzLmFkZEZlYXR1cmVzVG9IaWdobGlnaHRGZWF0dXJlTGF5ZXIoaWRzLCBmZWF0dXJlcylcblxuICAgICAgaWYgKCFyZW1vdmVSIHx8ICFhZGRSKSB7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZEZlYXR1cmVzQ2hhbmdlKGZhbHNlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2aWV3LndoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gSWYgdmlldy51cGRhdGluZyBpcyB0cnVlLCB2aWV3LmhpZ2hsaWdodCgpIHdpbGwgZmFpbCB3aXRoIGVycm9yLlxuICAgICAgYXdhaXQgdGhpcy53aGVuTGF5ZXJWaWV3Tm90VXBkYXRpbmcodmlldylcblxuICAgICAgLy8gbmVlZCB0byBlbnN1cmUgdGhhdCBoaWdoTGlnaHRIYW5kbGUgaXMgcmVtb3ZlZCBhZnRlciB3aGVuTGF5ZXJWaWV3Tm90VXBkYXRpbmcgcmVzb2x2ZXMsIG90aGVyd2lzZSBpbiBzb21lIGNhc2VzIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIGZlYXR1cmUgd2lsbCBub3QgYmUgY2xlYXJlZFxuICAgICAgaWYgKHRoaXMuaGlnaExpZ2h0SGFuZGxlKSB7XG4gICAgICAgIHRoaXMuaGlnaExpZ2h0SGFuZGxlLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuaGlnaExpZ2h0SGFuZGxlID0gbnVsbFxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZ2hMaWdodEhhbmRsZSA9IHZpZXcuaGlnaGxpZ2h0KGlkcylcblxuICAgICAgdGhpcy5vblNlbGVjdGVkRmVhdHVyZXNDaGFuZ2UoZmFsc2UpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIaWdoTGlnaHQgKCkge1xuICAgIC8vIFRPRE86IGhpZ2hMaWdodEZlYXR1cmVzKCkgaXMgYXN5bmMsIGJ1dCBjbGVhckhpZ2hMaWdodCgpIGlzIHN5bmMsIHRoaXMgY2FuIGxlYWQgdG8gcG90ZW50aWFsIGlzc3Vlcy5cblxuICAgIGlmICh0aGlzLmhpZ2hMaWdodEhhbmRsZSkge1xuICAgICAgdGhpcy5oaWdoTGlnaHRIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMuaGlnaExpZ2h0SGFuZGxlID0gbnVsbFxuXG4gICAgICBpZiAodGhpcy5oaWdobGlnaHRGZWF0dXJlTGF5ZXJWaWV3KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRmVhdHVyZXNGcm9tSGlnaGxpZ2h0RmVhdHVyZUxheWVyKClcbiAgICAgIH1cblxuICAgICAgLy8gV2UgY2xvc2UgdGhlIHBvcHVwIGlmIHRoZSBwb3B1cCBzaG93cyBvbiB0aGlzLmxheWVyLlxuICAgICAgY29uc3QgbWFwU2NlbmVWaWV3ID0gdGhpcy5nZXRNYXBTY2VuZVZpZXcoKVxuXG4gICAgICBpZiAodGhpcy5pc1BvcHVwU2VsZWN0Q3VycmVudExheWVyRmVhdHVyZSgpKSB7XG4gICAgICAgIG1hcFNjZW5lVmlldy5jbG9zZVBvcHVwKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5vblNlbGVjdGVkRmVhdHVyZXNDaGFuZ2UodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uU2VsZWN0ZWRGZWF0dXJlc0NoYW5nZSAoaXNDbGVhcjogYm9vbGVhbikge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5nZXRKaW11TWFwVmlldygpXG5cbiAgICBpZiAoamltdU1hcFZpZXcpIHtcbiAgICAgIGppbXVNYXBWaWV3Lm9uSmltdUxheWVyVmlld1NlbGVjdGVkRmVhdHVyZXNDaGFuZ2UodGhpcyBhcyBhbnksIGlzQ2xlYXIpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtb3ZlRmVhdHVyZVRvQ2VudGVyIChmaXJzdEZlYXR1cmVHZW9tZXRyeTogX19lc3JpLkdlb21ldHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY2VudGVyUG9pbnQgPSB0aGlzLmdldENlbnRlclBvaW50KGZpcnN0RmVhdHVyZUdlb21ldHJ5KVxuXG4gICAgaWYgKGNlbnRlclBvaW50KSB7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRNYXBTY2VuZVZpZXcoKVxuXG4gICAgICAvLyAjMTY0MjMsIE5lZWQgdG8gdXBkYXRlIHNvbWUgcHJvcGVydGllcyBvZiB2aWV3LCBzZWUgaGFuZGxlQWN0aW9uRm9yWm9vbVRvRmVhdHVyZUFjdGlvblZhbHVlIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICBjb25zdCBhbnlWaWV3ID0gdmlldyBhcyBhbnlcbiAgICAgIGFueVZpZXcuZXh0ZW50Q2hhbmdlUmVsYXRlZFdpZGdldElkcyA9IFtdXG4gICAgICBhbnlWaWV3LnJlY2VpdmVNZXNzYWdlVGltZU9mTGFzdFZpZXdVcGRhdGUgPSBEYXRlLm5vdygpXG5cbiAgICAgIGF3YWl0IHZpZXcuZ29UbyhjZW50ZXJQb2ludCwgeyBhbmltYXRlOiBmYWxzZSB9KVxuXG4gICAgICAvLyAjMTY0MjMsIEFmdGVyIHZpZXcuZ29UbygpIGRvbmUsIHdlIG5lZWQgdG8gc2VuZCBhIGV4dGVudCBjaGFuZ2UgbWVzc2FnZSB3aGljaCBzdGF0aW9uYXJ5IGFuZCBpbnRlcmFjaXZlIGFyZSB0cnVlXG4gICAgICAvLyB0byBtYWtlIHN1cmUgb3RoZXIgbWFwIHdpZGdldCBjYW4gc3luYyB0aGlzIHZpZXdwb2ludC5cbiAgICAgIGlmIChhbnlWaWV3LnB1Ymxpc2hFeHRlbnRDaGFuZ2VNZXNzYWdlKSB7XG4gICAgICAgIGFueVZpZXcuZXh0ZW50Q2hhbmdlUmVsYXRlZFdpZGdldElkcyA9IFtdXG4gICAgICAgIGFueVZpZXcucmVjZWl2ZU1lc3NhZ2VUaW1lT2ZMYXN0Vmlld1VwZGF0ZSA9IERhdGUubm93KClcblxuICAgICAgICAvLyBXZSBzZXQgc3RhdGlvbmFyeSB0byB0cnVlIHRvIG1ha2Ugc3VyZSBvdGhlciBtYXAgd2lkZ2V0IGNhbiBzeW5jIHRoaXMgdmlld3BvaW50LlxuICAgICAgICBjb25zdCBzdGF0aW9uYXJ5ID0gdHJ1ZVxuICAgICAgICAvLyBXZSBzZXQgaW50ZXJhY2l2ZSB0byB0cnVlIHRvIG1ha2Ugc3VyZSBvdGhlciBtYXAgd2lkZ2V0IGNhbiBpZ25vcmUgYGlzQWJvdmVDYXNlYCBhbmQgY2FuIHN5bmMgdGhpcyB2aWV3cG9pbnQuXG4gICAgICAgIGNvbnN0IGludGVyYWNpdmUgPSB0cnVlXG4gICAgICAgIGFueVZpZXcucHVibGlzaEV4dGVudENoYW5nZU1lc3NhZ2Uoc3RhdGlvbmFyeSwgaW50ZXJhY2l2ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2VzIG5vdCBmaW5kIGNlbnRlciBwb2ludC4nKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xuICAgIC8vIHBvaW50IHwgbXVsdGlwb2ludCB8IHBvbHlsaW5lIHwgcG9seWdvbiB8IGV4dGVudCB8IG1lc2hcbiAgICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICAgIGNhc2UgJ3BvaW50JzpcbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxuICAgICAgY2FzZSAnZXh0ZW50JzpcbiAgICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcbiAgICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZFxuICAgICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSkuZXh0ZW50LmNlbnRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcbiAgICAgICAgLy8gdG9kb1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRSZWNvcmRJZHMgKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMYXllckRhdGFTb3VyY2UoKSA/IHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCkuZ2V0U2VsZWN0ZWRSZWNvcmRJZHMoKS5maWx0ZXIoaWQgPT4gISFpZCkgOiBbXVxuICB9XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcHJpdmF0ZSBnZXRPYmplY3RJZEZpZWxkIChmaWVsZHM6IF9fZXNyaS5GaWVsZFtdLCBvYmplY3RJZEZpZWxkTmFtZTogc3RyaW5nKTogX19lc3JpLkZpZWxkIHtcbiAgICBsZXQgb2JqZWN0SWRGaWVsZCA9IG51bGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZpZWxkc1tpXS5uYW1lID09PSBvYmplY3RJZEZpZWxkTmFtZSkge1xuICAgICAgICBvYmplY3RJZEZpZWxkID0gZmllbGRzW2ldXG4gICAgICAgIHJldHVybiBvYmplY3RJZEZpZWxkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdElkRmllbGRcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVuZGVyZXJGb3JIaWdobGlnaHRMYXllciAoZ2VvbWV0cnlUeXBlOiBzdHJpbmcsIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyk6IGFueSB7XG4gICAgY29uc3QgaGlnaGxpZ2h0Q29sb3IgPSB2aWV3LmhpZ2hsaWdodE9wdGlvbnMuY29sb3IuY2xvbmUoKVxuICAgIGNvbnN0IGhpZ2hsaWd0aEhhbG9Db2xvciA9IHZpZXcuaGlnaGxpZ2h0T3B0aW9ucy5oYWxvQ29sb3IuY2xvbmUoKVxuXG4gICAgaWYgKFsncG9pbnQnLCAnbXVsdGlwb2ludCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXG4gICAgICAgICAgc3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgIGNvbG9yOiBoaWdobGlnaHRDb2xvcixcbiAgICAgICAgICBzaXplOiAnMTZweCcsXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6IGhpZ2hsaWd0aEhhbG9Db2xvcixcbiAgICAgICAgICAgIHdpZHRoOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChbJ3BvbHlsaW5lJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NpbXBsZScsXG4gICAgICAgIHN5bWJvbDoge1xuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXG4gICAgICAgICAgY29sb3I6IGhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgIHN0eWxlOiAnc29saWQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFsncG9seWdvbicsICdleHRlbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICAgICAgc3ltYm9sOiB7XG4gICAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVGaWxsU3ltYm9sKClcbiAgICAgICAgICBjb2xvcjogWzAsIDI1NSwgMjU1LCAwXSxcbiAgICAgICAgICBzdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICBvdXRsaW5lOiB7IC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlTGluZVN5bWJvbCgpXG4gICAgICAgICAgICBjb2xvcjogaGlnaGxpZ3RoSGFsb0NvbG9yLFxuICAgICAgICAgICAgd2lkdGg6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFsnbWVzaCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdzaW1wbGUnLFxuICAgICAgICBzeW1ib2w6IHtcbiAgICAgICAgICB0eXBlOiAnbWVzaC0zZCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgTWVzaFN5bWJvbDNEKClcbiAgICAgICAgICBzeW1ib2xMYXllcnM6IFt7XG4gICAgICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxuICAgICAgICAgICAgbWF0ZXJpYWw6IHsgY29sb3I6IGhpZ2hsaWdodENvbG9yIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11RmVhdHVyZUxheWVyU2NlbmVMYXllclZpZXdDb21tb24sIHR5cGUgSmltdUZlYXR1cmVMYXllclNjZW5lTGF5ZXJWaWV3Q29tbW9uT3B0aW9ucyB9IGZyb20gJy4vamltdS1mZWF0dXJlLWxheWVyLXNjZW5lLWxheWVyLXZpZXctY29tbW9uJ1xuXG4vKipcbiAqIGBKaW11RmVhdHVyZUxheWVyVmlld09wdGlvbnNgIHByb3ZpZGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgSmltdUZlYXR1cmVMYXllclZpZXdgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEppbXVGZWF0dXJlTGF5ZXJWaWV3T3B0aW9ucyBleHRlbmRzIEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vbk9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGB2aWV3YCBpcyB0aGUgW0FyY0dJUyBNYXBzIFNESyBmb3IgSmF2YVNjcmlwdCBgRmVhdHVyZUxheWVyVmlld2BdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS12aWV3cy1sYXllcnMtRmVhdHVyZUxheWVyVmlldy5odG1sKS5cbiAgICovXG4gIHZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3XG59XG5cbi8qKlxuICogVGhlIEppbXVGZWF0dXJlTGF5ZXJWaWV3IGV4dGVuZHMgZnJvbSB0aGUgSmltdUxheWVyVmlldy5cbiAqL1xuZXhwb3J0IGNsYXNzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IGV4dGVuZHMgSmltdUZlYXR1cmVMYXllclNjZW5lTGF5ZXJWaWV3Q29tbW9uIHtcbiAgLyoqXG4gICAqIFRoZSBgdmlld2AgaXMgdGhlIFtBcmNHSVMgTWFwcyBTREsgZm9yIEphdmFTY3JpcHQgYEZlYXR1cmVMYXllclZpZXdgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktdmlld3MtbGF5ZXJzLUZlYXR1cmVMYXllclZpZXcuaHRtbCkuXG4gICAqIElmIHRoZSBsYXllciBpcyBmcm9tIG1hcHNlcnZpY2UsIHZpZXcgPSBudWxsXG4gICAqL1xuICB2aWV3OiBfX2VzcmkuRmVhdHVyZUxheWVyVmlld1xuXG4gIGdldExheWVyRGF0YVNvdXJjZSAoKTogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldExheWVyRGF0YVNvdXJjZSgpIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2VcbiAgfVxuXG4gIGNyZWF0ZUxheWVyRGF0YVNvdXJjZSAoKTogUHJvbWlzZTxGZWF0dXJlTGF5ZXJEYXRhU291cmNlPiB7XG4gICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpIGFzIFByb21pc2U8RmVhdHVyZUxheWVyRGF0YVNvdXJjZT5cbiAgfVxufVxuIiwiaW1wb3J0IHsgSmltdUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zIH0gZnJvbSAnLi9qaW11LWxheWVyLXZpZXcnXG5pbXBvcnQgeyB0b2dnbGVIaWdobGlnaHRMYXllclZpc2libGUgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEppbXVHcm91cExheWVyVmlld09wdGlvbnMgZXh0ZW5kcyBKaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zIHtcbiAgdXJsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBKaW11R3JvdXBMYXllclZpZXcgZXh0ZW5kcyBKaW11TGF5ZXJWaWV3IHtcbiAgdXJsOiBzdHJpbmcgPSBudWxsXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEppbXVHcm91cExheWVyVmlld09wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmxcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuZ2V0SmltdU1hcFZpZXcoKVxuICAgIHRvZ2dsZUhpZ2hsaWdodExheWVyVmlzaWJsZShqaW11TWFwVmlldywgdGhpcylcbiAgfVxuXG4gIGFzeW5jIHJlYWR5ICgpIHtcbiAgICAvLyB0aGUgY2hpbGQgbGF5ZXIgY2FuIGJlIGEgbGF5ZXIgb3Igc3ViIGxheWVyXG4gICAgY29uc3QgbGF5ZXJzID0gKHRoaXMubGF5ZXIgYXMgX19lc3JpLkdyb3VwTGF5ZXIpLmxheWVycz8udG9BcnJheSgpPy5yZXZlcnNlKCkgfHwgdGhpcy5sYXllci5zdWJsYXllcnM/LnRvQXJyYXkoKT8ucmV2ZXJzZSgpXG4gICAgaWYgKGxheWVycyAmJiBsYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsYXllcnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgYXdhaXQgdGhpcy5tYXBWaWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQodGhpcy5qaW11TWFwVmlld0lkKS5jcmVhdGVKaW11TGF5ZXJWaWV3KGxheWVyc1trXSwgdGhpcy5qaW11TGF5ZXJJZCwgaywgbnVsbCwgdGhpcy5mcm9tUnVudGltZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHlwZSBNYXBWaWV3TWFuYWdlciB9IGZyb20gJy4uLy4uL21hcHZpZXctbWFuYWdlcidcbmltcG9ydCB7XG4gIG9ic2VydmVTdG9yZSwgdHlwZSBJTURhdGFTb3VyY2VJbmZvLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBEYXRhU291cmNlLCB0eXBlIERhdGFTb3VyY2VKc29uLFxuICBNdXRhYmxlU3RvcmVNYW5hZ2VyLCBpMThuLCBkZWZhdWx0TWVzc2FnZXMsIGFwcENvbmZpZ1V0aWxzLCBnZXRBcHBTdG9yZSwgdHlwZSBJTUFwcENvbmZpZ1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIE1hcERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9kYXRhLXNvdXJjZXMvYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbmltcG9ydCB7IHR5cGUgVXJsSGFzaExheWVyc1Zpc2liaWxpdHkgfSBmcm9tICcuLi9qaW11LW1hcC12aWV3J1xuaW1wb3J0IHsgdHlwZSBNYXBNdXRhYmxlU3RhdGUgfSBmcm9tICdqaW11LWFyY2dpcydcblxuLyoqXG4gKiBgSmltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9uc2AgaXMgdXNlZCBpbiB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGBKaW11TGF5ZXJWaWV3YCwgdG8gaW5pdGlhdGUgYSBgSmltdUxheWVyVmlld2AgaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSmltdUxheWVyVmlld0NvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIGxheWVyIHR5cGUsIHNlZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IExheWVyIHR5cGVdXSgoaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLWxheWVycy1MYXllci5odG1sI3R5cGUpKVxuICAgKi9cbiAgdHlwZTogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSBsYXllckRhdGFTb3VyY2VJZCBpcyB0aGUgY29ycmVzcG9uZGluZyBkYXRhc291cmNlIGlkLlxuICAgKi9cbiAgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBUaGUgamltdU1hcFZpZXdJZCBpcyB0aGUgY29ycmVzcG9uZGluZyBKaW11TWFwVmlldyBpbnN0YW5jZSBpZC5cbiAgICovXG4gIGppbXVNYXBWaWV3SWQ6IHN0cmluZ1xuXG4gIC8qKiBUaGUgamltdUxheWVySWQgaXMgYSBzdHJpbmcgdGhhdCBjb25uZWN0cyB0aGUgbGF5ZXIuaWQgaW4gdGhlIGxheWVyIHRyZWUgd2l0aCBcIi1cIiAqL1xuICBqaW11TGF5ZXJJZDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSBsYXllciBpcyB0aGUgY29ycmVzcG9uZGluZyBsYXllciBvYmplY3QgaW4gQXJjR0lTIEphdmFTY3JpcHQgQVBJIFZpZXcubWFwLlxuICAgKi9cbiAgbGF5ZXI6IGFueVxuXG4gIC8qKiBAaWdub3JlICovXG4gIHBhcmVudEppbXVMYXllclZpZXdJZDogc3RyaW5nXG5cbiAgLyoqIFBhc3MgTWFwVmlld01hbmFnZXIgaW4gdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeS4gKi9cbiAgbWFwVmlld01hbmFnZXI6IE1hcFZpZXdNYW5hZ2VyXG5cbiAgaW5kZXg6IG51bWJlclxuXG4gIC8qKlxuICAgKiB0cnVlIG1lYW5zIHRoZSBKaW11TGF5ZXJWaWV3IGlzIGNyZWF0ZWQgZnJvbSBydW50aW1lLiBlLmcuIFRoZSBKaW11TGF5ZXJWaWV3IGlzIGNyZWF0ZWQgYnkgQWRkRGF0YSB3aWRnZXQgYXQgcnVudGltZS4gZmFsc2UgbWVhbnMgdGhlIGxheWVyIGlzIGEgYnVpbHRpbiBsYXllciBvZiBXZWJNYXAgb3IgV2ViU2NlbmUuXG4gICAqL1xuICBmcm9tUnVudGltZTogYm9vbGVhblxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBgdXJsSGFzaExheWVyc1Zpc2liaWxpdHlgIHByb3BlcnR5IGluZGljYXRlcyB3aGV0aGVyIHRoZSBsYXllciB1c2VzIHRoZSB1cmwgaGFzaCBsYXllciB2aXNpYmlsaXR5IGFzIHRoZSBpbml0aWFsIGxheWVyIHZpc2liaWxpdHkgb3Igbm90LlxuICAgKi9cbiAgdXJsSGFzaExheWVyc1Zpc2liaWxpdHk/OiBVcmxIYXNoTGF5ZXJzVmlzaWJpbGl0eVxufVxuXG4vKipcbiAqIGBKaW11TGF5ZXJWaWV3YCBpcyBhIHdyYXBwZXIgY2xhc3MgZm9yIEFyY0dJUyBNYXBzIFNESyBmb3IgSmF2YVNjcmlwdCBbYExheWVyVmlld2BdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS12aWV3cy1sYXllcnMtTGF5ZXJWaWV3Lmh0bWwpLlxuICogSXQgaXMgY3JlYXRlZCBieSBhIGBKaW11TWFwVmlld2AgdXNpbmcgYSBsYXllciBbYERhdGFTb3VyY2VgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9leHBlcmllbmNlLWJ1aWxkZXIvYXBpLXJlZmVyZW5jZS9qaW11LWNvcmUvRGF0YVNvdXJjZSkuXG4gKlxuICogQSBsYXllciB2aWV3IG1heSBoYXZlIGEgcmVsYXRlZCBkYXRhIHNvdXJjZS4gSWYgaXQgaGFzIHRoZSBkYXRhIHNvdXJjZSwgdGhlIGZlYXR1cmUgc2VsZWN0aW9uIHdpbGwgYmUgc3luY2VkIHRvIGRhdGEgc291cmNlIHNlbGVjdGlvbiBhbmQgd2lsbCB1c2UgdGhlIGRhdGEgc291cmNlIFVSTCBwYXJhbXMuXG4gKiBJZiBpdCBkb2VzIG5vdCBoYXZlIHRoZSBkYXRhIHNvdXJjZSwgdGhlIGZlYXR1cmUgc2VsZWN0aW9uIHdpbGwgdXNlIHRoZSBmZWF0dXJlX3NlbGVjdGlvbiBVUkwgcGFyYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBKaW11TGF5ZXJWaWV3IHtcbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgSmltdUxheWVyVmlldyBpbnN0YW5jZS4gSXQgY29ubmVjdHMgdGhlIEppbXVNYXBWaWV3LmlkIGFuZCB0aGUgSmltdUxheWVySWQgd2l0aCBcIi1cIlxuICAgKi9cbiAgaWQ6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBUaGUgYHZpZXdgIGlzIHRoZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IGBMYXllclZpZXdgXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktdmlld3MtbGF5ZXJzLUxheWVyVmlldy5odG1sKS5cbiAgICovXG4gIHZpZXc6IF9fZXNyaS5MYXllclZpZXdcblxuICAvKipcbiAgICogVGhlIGxheWVyIHR5cGUsIHNlZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IExheWVyIHR5cGVdXSgoaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLWxheWVycy1MYXllci5odG1sI3R5cGUpKVxuICAgKi9cbiAgdHlwZTogc3RyaW5nXG5cbiAgLyoqXG4gICAqIFRoZSBsYXllckRhdGFTb3VyY2VJZCBpcyB0aGUgY29ycmVzcG9uZGluZyBkYXRhc291cmNlIGlkLlxuICAgKiBUaGlzIGlkIGFsd2F5cyBoYXMgdmFsdWUsIGJ1dCB0aGUgbGF5ZXIgZGF0YSBzb3VyY2UgbWF5IG5vdCBiZSBjcmVhdGVkLlxuICAgKi9cbiAgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBUaGUgamltdU1hcFZpZXdJZCBpcyB0aGUgY29ycmVzcG9uZGluZyBKaW11TWFwVmlldyBpbnN0YW5jZSBpZC5cbiAgICovXG4gIGppbXVNYXBWaWV3SWQ6IHN0cmluZ1xuXG4gIC8qKiBAaWdub3JlICovXG4gIGppbXVMYXllcklkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIGxheWVyIGlzIHRoZSBjb3JyZXNwb25kaW5nIGxheWVyIG9iamVjdCBpbiBBcmNHSVMgSmF2YVNjcmlwdCBBUEkgVmlldy5tYXAuXG4gICAqL1xuICBsYXllcjogYW55XG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgcGFyZW50SmltdUxheWVyVmlld0lkOiBzdHJpbmdcblxuICAvKipcbiAgICogVGhlIG9yZGVyIGRlZmluZWQgaW4gdGhlIHdlYm1hcFxuICAgKi9cbiAgaW5kZXg6IG51bWJlclxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBsYXllcidzIGhpZXJhcmNoeSBpbiB0aGUgbWFwLlxuICAgKiBJZiBsYXllciBoYXMgbm8gYW5jZXN0b3IgbGF5ZXJzLCB0aGVuIGxldmVsIGlzIGxheWVySW5kZXgsIGZvciBleGFtcGxlICcxJy5cbiAgICogSWYgdGhlIGxheWVyIGhhcyBhbmNlc3RvciBsYXllcnMsIHRoZW4gbGV2ZWwgaXMgdGhlIGNvbWJpbmF0aW9uIG9mIHRoZSBsYXllckluZGV4IG9mIGFsbCBhbmNlc3RvciBsYXllcnMsIGZvciBleGFtcGxlICcwLjQuMy41Jy5cbiAgICovXG4gIGhpZXJhcmNoeUxldmVsOiBzdHJpbmdcblxuICAvKipcbiAgICogdHJ1ZSBtZWFucyB0aGUgSmltdUxheWVyVmlldyBpcyBjcmVhdGVkIGZyb20gcnVudGltZS4gZS5nLiBUaGUgSmltdUxheWVyVmlldyBpcyBjcmVhdGVkIGJ5IEFkZERhdGEgd2lkZ2V0IGF0IHJ1bnRpbWUuIGZhbHNlIG1lYW5zIHRoZSBsYXllciBpcyBhIGJ1aWx0aW4gbGF5ZXIgb2YgV2ViTWFwIG9yIFdlYlNjZW5lLlxuICAgKi9cbiAgZnJvbVJ1bnRpbWU6IGJvb2xlYW5cblxuICBpc0xvYWRlZDogYm9vbGVhblxuXG4gIC8qKiBAaWdub3JlICovXG4gIHByaXZhdGUgZGF0YVNvdXJjZUluZm9PYnNlcnZlclxuXG4gIC8qKiBAaWdub3JlICovXG4gIHByaXZhdGUgZGF0YVNvdXJjZUpzb25PYnNlcnZlclxuXG4gIC8qKiBAaWdub3JlICovXG4gIHByaXZhdGUgcnVuVGltZUlzSGlkZGVuID0gZmFsc2VcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWFwVmlld01hbmFnZXI6IE1hcFZpZXdNYW5hZ2VyXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgb3JpZ2luYWxMYXllclZpc2libGU6IGJvb2xlYW5cblxuICBwcml2YXRlIHdhdGNoTGF5ZXJWaXNpYmxlQ2hhbmdlSGFuZGxlOiBfX2VzcmkuSGFuZGxlXG4gIC8vIHRydWUgbWVhbnMgdGhlIGxheWVyIGNhbiBiZSByZW1vdmVkIGJ5IG1hcCBjbGVhci1kYXRhIHRvb2wuXG4gIHByaXZhdGUgcmVtb3ZlYWJsZUJ5TWFwVG9vbDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMubWFwVmlld01hbmFnZXIgPSBvcHRpb25zLm1hcFZpZXdNYW5hZ2VyXG4gICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlXG4gICAgdGhpcy5sYXllckRhdGFTb3VyY2VJZCA9IG9wdGlvbnMubGF5ZXJEYXRhU291cmNlSWRcbiAgICB0aGlzLmppbXVNYXBWaWV3SWQgPSBvcHRpb25zLmppbXVNYXBWaWV3SWRcbiAgICB0aGlzLmppbXVMYXllcklkID0gb3B0aW9ucy5qaW11TGF5ZXJJZFxuICAgIHRoaXMubGF5ZXIgPSBvcHRpb25zLmxheWVyXG4gICAgdGhpcy5wYXJlbnRKaW11TGF5ZXJWaWV3SWQgPSBvcHRpb25zLnBhcmVudEppbXVMYXllclZpZXdJZFxuICAgIHRoaXMuaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgdGhpcy5mcm9tUnVudGltZSA9IG9wdGlvbnMuZnJvbVJ1bnRpbWVcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2VcblxuICAgIGxldCBwYXJlbnRMZXZlbDogc3RyaW5nID0gJydcblxuICAgIGlmICh0aGlzLnBhcmVudEppbXVMYXllclZpZXdJZCkge1xuICAgICAgY29uc3QgcGFyZW50SmltdUxheWVyVmlldyA9IHRoaXMuZ2V0UGFyZW50SmltdUxheWVyVmlldygpXG5cbiAgICAgIGlmIChwYXJlbnRKaW11TGF5ZXJWaWV3KSB7XG4gICAgICAgIHBhcmVudExldmVsID0gcGFyZW50SmltdUxheWVyVmlldy5oaWVyYXJjaHlMZXZlbFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaGllcmFyY2h5TGV2ZWwgPSBwYXJlbnRMZXZlbCA/IGAke3BhcmVudExldmVsfS4ke3RoaXMuaW5kZXh9YCA6IHRoaXMuaW5kZXgudG9TdHJpbmcoKVxuXG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMub3JpZ2luYWxMYXllclZpc2libGUgPSB0aGlzLmxheWVyLnZpc2libGVcblxuICAgICAgaWYgKG9wdGlvbnMudXJsSGFzaExheWVyc1Zpc2liaWxpdHkgJiYgIXRoaXMuZnJvbVJ1bnRpbWUpIHtcbiAgICAgICAgY29uc3QgdXJsSGFzaFZpc2libGUgPSBvcHRpb25zLnVybEhhc2hMYXllcnNWaXNpYmlsaXR5W3RoaXMuaWRdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB1cmxIYXNoVmlzaWJsZSA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMubGF5ZXIudmlzaWJsZSAhPT0gdXJsSGFzaFZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLmxheWVyLnZpc2libGUgPSB1cmxIYXNoVmlzaWJsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZHNKc29uID0gYXBwQ29uZmlnVXRpbHMuZ2V0RGF0YVNvdXJjZUpzb25CeUlkKHRoaXMuZ2V0QXBwQ29uZmlnKCksIHRoaXMubGF5ZXJEYXRhU291cmNlSWQpXG5cbiAgICBpZiAoZHNKc29uKSB7XG4gICAgICBjb25zdCBpbml0SXNIaWRkZW4gPSBkc0pzb24uaXNIaWRkZW5cbiAgICAgIGNvbnN0IGxhYmVsID0gZHNKc29uLmxhYmVsXG4gICAgICBpZiAobGFiZWwgJiYgbGFiZWwgIT09IHRoaXMubGF5ZXIudGl0bGUpIHtcbiAgICAgICAgdGhpcy5sYXllci50aXRsZSA9IGxhYmVsXG4gICAgICB9XG4gICAgICB0aGlzLnJ1blRpbWVJc0hpZGRlbiA9IGluaXRJc0hpZGRlblxuICAgICAgaWYgKGluaXRJc0hpZGRlbikge1xuICAgICAgICB0aGlzLmxheWVyLnZpc2libGUgPSAhaW5pdElzSGlkZGVuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbml0TGlzdGVuVG9EYXRhU291cmNlSnNvbkNoYW5nZSgpXG4gICAgdGhpcy5pbml0TGlzdGVuVG9EYXRhU291cmNlSW5mb0NoYW5nZSgpXG5cbiAgICAvLyBXZSBkb24ndCBjYWxsIGlzTGF5ZXJEYXRhU291cmNlVXNlZCgpIGhlcmUgYmVjYXVzZSB3ZSB3YW50IHRvIGNyZWF0ZSBkYXRhIHNvdXJjZSBvbiBkZW1hbmQuXG4gICAgaWYgKHRoaXMuaXNMYXllclVzZWRCeUZpbHRlcigpIHx8IHRoaXMuaXNMYXllclVzZWRCeVNlbGVjdGlvbigpKSB7XG4gICAgICB0aGlzLmNyZWF0ZUxheWVyRGF0YVNvdXJjZSgpXG4gICAgfVxuXG4gICAgdGhpcy53YXRjaExheWVyVmlzaWJsZUNoYW5nZSgpXG4gIH1cblxuICBhc3luYyByZWFkeSAoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKVxuICB9XG5cbiAgLyoqIFJldHVybiB0aGUgY29vcmVzcG9uZGluZyBkYXRhIHNvdXJjZSBvZiB0aGUgbGF5ZXIgKi9cbiAgZ2V0TGF5ZXJEYXRhU291cmNlICgpOiBEYXRhU291cmNlIHtcbiAgICByZXR1cm4gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKHRoaXMubGF5ZXJEYXRhU291cmNlSWQpXG4gIH1cblxuICBhc3luYyBjcmVhdGVMYXllckRhdGFTb3VyY2UgKCk6IFByb21pc2U8RGF0YVNvdXJjZT4ge1xuICAgIGxldCBsYXllckRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKHRoaXMubGF5ZXJEYXRhU291cmNlSWQpXG5cbiAgICBpZiAoIWxheWVyRHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1hcERzID0gdGhpcy5nZXRNYXBEYXRhU291cmNlKClcblxuICAgICAgICBpZiAobWFwRHMpIHtcbiAgICAgICAgICBsYXllckRzID0gYXdhaXQgbWFwRHMuY3JlYXRlRGF0YVNvdXJjZUJ5TGF5ZXIodGhpcy5sYXllcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJZiB0aGUgbGF5ZXIgaXMgYSBzdWJsYXllciBhbmQgdGhlIHBhcmVudCBsYXllciBpcyBhZGRlZCBhdCBydW50aW1lIChieSBBZGREYXRhIHdpZGdldCksIG1hcERzIGlzIG51bGwgYW5kIG1heSBnbyBoZXJlLlxuICAgICAgICAgIC8vIFNlZSAjMTUwNDguXG4gICAgICAgICAgbGF5ZXJEcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh0aGlzLmxheWVyRGF0YVNvdXJjZUlkKVxuICAgICAgICAgIGNvbnN0IHBhcmVudEppbXVMYXllclZpZXcgPSB0aGlzLmdldFBhcmVudEppbXVMYXllclZpZXcoKVxuXG4gICAgICAgICAgaWYgKHBhcmVudEppbXVMYXllclZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudERhdGFTb3VyY2UgPSBwYXJlbnRKaW11TGF5ZXJWaWV3LmdldExheWVyRGF0YVNvdXJjZSgpXG5cbiAgICAgICAgICAgIGlmIChwYXJlbnREYXRhU291cmNlICYmIHBhcmVudERhdGFTb3VyY2UuY3JlYXRlRGF0YVNvdXJjZUJ5SWQpIHtcbiAgICAgICAgICAgICAgbGF5ZXJEcyA9IGF3YWl0IHBhcmVudERhdGFTb3VyY2UuY3JlYXRlRGF0YVNvdXJjZUJ5SWQodGhpcy5sYXllckRhdGFTb3VyY2VJZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSmltdUxheWVyVmlldyAke3RoaXMuaWR9IGNyZWF0ZSBsYXllciBkYXRhIHNvdXJjZSBmYWlsZWQ6YCwgZSlcbiAgICAgICAgbGF5ZXJEcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGF5ZXJEc1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgSmltdUxheWVyVmlldy5cbiAgICovXG4gIGdldFBhcmVudEppbXVMYXllclZpZXcgKCk6IEppbXVMYXllclZpZXcge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5nZXRKaW11TWFwVmlldygpXG5cbiAgICBpZiAoamltdU1hcFZpZXcgJiYgdGhpcy5wYXJlbnRKaW11TGF5ZXJWaWV3SWQpIHtcbiAgICAgIHJldHVybiBqaW11TWFwVmlldy5qaW11TGF5ZXJWaWV3c1t0aGlzLnBhcmVudEppbXVMYXllclZpZXdJZF1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgYW5jZXN0b3IgSmltdUxheWVyVmlld3MuXG4gICAqL1xuICBnZXRBbGxBbmNlc3RvckppbXVMYXllclZpZXdzICgpOiBKaW11TGF5ZXJWaWV3W10ge1xuICAgIGNvbnN0IGFuY2VzdG9ySmltdUxheWVyVmlld3M6IEppbXVMYXllclZpZXdbXSA9IFtdXG4gICAgbGV0IHBhcmVudEppbXVMYXllclZpZXcgPSB0aGlzLmdldFBhcmVudEppbXVMYXllclZpZXcoKVxuXG4gICAgaWYgKHBhcmVudEppbXVMYXllclZpZXcpIHtcbiAgICAgIGFuY2VzdG9ySmltdUxheWVyVmlld3MucHVzaChwYXJlbnRKaW11TGF5ZXJWaWV3KVxuICAgICAgcGFyZW50SmltdUxheWVyVmlldyA9IHRoaXMuZ2V0UGFyZW50SmltdUxheWVyVmlldygpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFuY2VzdG9ySmltdUxheWVyVmlld3NcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBsYXllciBkYXRhIHNvdXJjZSBpcyB1c2VkIGJ5IHdpZGdldHMuXG4gICAqIEZvciBub3QgdXNlZCBkYXRhIHNvdXJjZSwgdGhlIGRhdGEgc291cmNlIHdpbGwgbm90IGJlIGNyZWF0ZWQuXG4gICAqL1xuICBpc0xheWVyRGF0YVNvdXJjZVVzZWQgKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzRGF0YVNvdXJjZVVzZWQodGhpcy5sYXllckRhdGFTb3VyY2VJZCkgfHwgdGhpcy5pc0xheWVyVXNlZEJ5TWVzc2FnZSgpIHx8IHRoaXMuaXNMYXllclVzZWRCeUZpbHRlcigpXG4gIH1cblxuICBwcml2YXRlIGlzTGF5ZXJVc2VkQnlNZXNzYWdlICgpIHtcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMubWFwVmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMuamltdU1hcFZpZXdJZClcbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IGppbXVNYXBWaWV3Py5tYXBXaWRnZXRJZFxuXG4gICAgaWYgKG1hcFdpZGdldElkKSB7XG4gICAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcblxuICAgICAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VKc29uQXJyYXkgPSBPYmplY3QudmFsdWVzKG1lc3NhZ2VDb25maWdzKVxuXG4gICAgICAgIGlmIChtZXNzYWdlSnNvbkFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZUpzb25BcnJheS5zb21lKChtZXNzYWdlSnNvbikgPT4gbWVzc2FnZUpzb24ud2lkZ2V0SWQgPT09IG1hcFdpZGdldElkICYmIG1lc3NhZ2VKc29uLmFjdGlvbnMgJiYgbWVzc2FnZUpzb24uYWN0aW9ucy5sZW5ndGggPiAwKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwcml2YXRlIGlzTGF5ZXJVc2VkQnlGaWx0ZXIgKCkge1xuICAgIGNvbnN0IGRhdGFTb3VyY2VzSnNvbiA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcuZGF0YVNvdXJjZXMgfHwge31cbiAgICBjb25zdCBxdWV1ZTogRGF0YVNvdXJjZUpzb25bXSA9IE9iamVjdC52YWx1ZXMoZGF0YVNvdXJjZXNKc29uKVxuXG4gICAgLy8gdXNlIEJGUyB0byB0cmF2ZXJzZSBkYXRhU291cmNlc1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXJyRHNKc29uID0gcXVldWUuc2hpZnQoKVxuXG4gICAgICBpZiAoY3VyckRzSnNvbi5pZCA9PT0gdGhpcy5sYXllckRhdGFTb3VyY2VJZCkge1xuICAgICAgICByZXR1cm4gISFjdXJyRHNKc29uLnF1ZXJ5XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxheWVyRGF0YVNvdXJjZUlkLnN0YXJ0c1dpdGgoY3VyckRzSnNvbi5pZCkgJiYgY3VyckRzSnNvbi5jaGlsZERhdGFTb3VyY2VKc29ucykge1xuICAgICAgICBjb25zdCBjaGlsZERhdGFTb3VyY2VKc29ucyA9IE9iamVjdC52YWx1ZXMoY3VyckRzSnNvbi5jaGlsZERhdGFTb3VyY2VKc29ucylcbiAgICAgICAgcXVldWUucHVzaCguLi5jaGlsZERhdGFTb3VyY2VKc29ucylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHByaXZhdGUgaXNMYXllclVzZWRCeVNlbGVjdGlvbiAoKSB7XG4gICAgY29uc3QgZGF0YVNvdXJjZXNJbmZvID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmRhdGFTb3VyY2VzSW5mb1xuXG4gICAgaWYgKGRhdGFTb3VyY2VzSW5mbyAmJiB0aGlzLmxheWVyRGF0YVNvdXJjZUlkKSB7XG4gICAgICBjb25zdCBkc0luZm8gPSBkYXRhU291cmNlc0luZm9bdGhpcy5sYXllckRhdGFTb3VyY2VJZF1cblxuICAgICAgLy8gVE9ETzogV2hlbiB0aGlzIGlzc3VlIGlzIGZpeGVkOiBodHRwczovL2RldnRvcGlhLmVzcmkuY29tL1dlYkdJUy9hcmNnaXMtanMtYXBpL2lzc3Vlcy80ODA2NixcbiAgICAgIC8vIHdlIG5lZWQgdG8gcmVtb3ZlIGNyZWF0ZUZpbHRlclVybENoaWxkRGF0YVNvdXJjZSBmcm9tIE1hcERhdGFTb3VyY2VJbXBsIGFuZCBjaGVjayBkc0luZm8ud2lkZ2V0UXVlcmllcz8uX2ZpbHRlckluVXJsIGhlcmUuXG4gICAgICBpZiAoZHNJbmZvKSB7XG4gICAgICAgIGlmIChkc0luZm8uc2VsZWN0T3B0aW9ucyB8fCBkc0luZm8uc2VsZWN0ZWRJZHM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogSWYgYW55IGxheWVyIGluIHRoZSBsYXllciB0cmVlIGlzIGludmlzaWJsZSwgdGhlIGxheWVyIGlzIGNvbnNpZGVyZWQgaW52aXNpYmxlXG4gICAqL1xuICBpc0xheWVyVmlzaWJsZSAoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpXG4gICAgY29uc3QgaXNQYXJlbnRKaW11TGF5ZXJJbnZpc2libGUgPSBqaW11TWFwVmlldy5nZXRQYXJlbnRKaW11TGF5ZXJWaWV3cyh0aGlzLmlkKS5zb21lKGpsdiA9PiAhamx2LmxheWVyLnZpc2libGUpXG4gICAgaWYgKGlzUGFyZW50SmltdUxheWVySW52aXNpYmxlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sYXllci52aXNpYmxlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBNYXBWaWV3IG9yIFNjZW5lVmlldyBvZiB0aGUgbGF5ZXIgdmlldy5cbiAgICovXG4gIGdldE1hcFNjZW5lVmlldyAoKTogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3IHtcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMubWFwVmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMuamltdU1hcFZpZXdJZClcbiAgICByZXR1cm4gamltdU1hcFZpZXcgJiYgamltdU1hcFZpZXcudmlld1xuICB9XG5cbiAgZ2V0TWFwRGF0YVNvdXJjZSAoKTogTWFwRGF0YVNvdXJjZSB7XG4gICAgY29uc3QgbWFwRHNJZCA9IHRoaXMubWFwVmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMuamltdU1hcFZpZXdJZCkuZGF0YVNvdXJjZUlkXG4gICAgcmV0dXJuIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShtYXBEc0lkKSBhcyBNYXBEYXRhU291cmNlXG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBwcm90ZWN0ZWQgb25MYXllckRhdGFTb3VyY2VJbmZvQ2hhbmdlIChwcmVEc0luZm86IElNRGF0YVNvdXJjZUluZm8sIGRzSW5mbzogSU1EYXRhU291cmNlSW5mbykge1xuICAgIGNvbnN0IG5ld1RpdGxlID0gdGhpcy5nZXRMYXllckRhdGFTb3VyY2UoKT8uZ2V0TGFiZWwoKVxuICAgIGlmIChuZXdUaXRsZSAmJiBuZXdUaXRsZSAhPT0gdGhpcy5sYXllci50aXRsZSkge1xuICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpXG4gICAgICBjb25zdCBpbnRsID0gaTE4bi5nZXRJbnRsKClcbiAgICAgIGNvbnN0IG5ld1RpdGxlV2l0aFN1ZmZpeCA9IGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnYWN0aW9uX2FkZGVkRGF0YScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuYWN0aW9uX2FkZGVkRGF0YSB9LCB7IGxhYmVsOiBuZXdUaXRsZSB9KVxuICAgICAgdGhpcy5sYXllci50aXRsZSA9IG5ld1RpdGxlXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZShqaW11TWFwVmlldy5tYXBXaWRnZXRJZCwgYGFkZFRvTWFwRGF0YXMuJHt0aGlzLmxheWVyLmlkfS50aXRsZWAsIG5ld1RpdGxlV2l0aFN1ZmZpeClcbiAgICB9XG4gIH1cblxuICBnZXRKaW11TWFwVmlldyAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwVmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKHRoaXMuamltdU1hcFZpZXdJZClcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBKaW11TGF5ZXJWaWV3IGluc3RhbmNlLlxuICAgKi9cbiAgZGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMud2F0Y2hMYXllclZpc2libGVDaGFuZ2VIYW5kbGUpIHtcbiAgICAgIHRoaXMud2F0Y2hMYXllclZpc2libGVDaGFuZ2VIYW5kbGUucmVtb3ZlKClcbiAgICAgIHRoaXMud2F0Y2hMYXllclZpc2libGVDaGFuZ2VIYW5kbGUgPSBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5kYXRhU291cmNlSW5mb09ic2VydmVyICYmIHRoaXMuZGF0YVNvdXJjZUluZm9PYnNlcnZlcigpXG4gICAgdGhpcy5kYXRhU291cmNlSnNvbk9ic2VydmVyICYmIHRoaXMuZGF0YVNvdXJjZUpzb25PYnNlcnZlcigpXG4gIH1cblxuICBwcml2YXRlIGdldEFwcENvbmZpZyAoKTogSU1BcHBDb25maWcge1xuICAgIHJldHVybiB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWdcbiAgfVxuXG4gIHByaXZhdGUgaW5pdExpc3RlblRvRGF0YVNvdXJjZUpzb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IG1hcERzSWQgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpLmRhdGFTb3VyY2VJZFxuICAgIHRoaXMuZGF0YVNvdXJjZUpzb25PYnNlcnZlciA9IG9ic2VydmVTdG9yZSh0aGlzLm9uTGF5ZXJEYXRhc291cmNlSnNvbkNoYW5nZS5iaW5kKHRoaXMpLCBbJ2FwcENvbmZpZycsICdkYXRhU291cmNlcycsIG1hcERzSWRdKVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0TGlzdGVuVG9EYXRhU291cmNlSW5mb0NoYW5nZSAoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlSW5mb09ic2VydmVyID0gb2JzZXJ2ZVN0b3JlKHRoaXMub25MYXllckRhdGFTb3VyY2VJbmZvQ2hhbmdlLmJpbmQodGhpcyksIFsnZGF0YVNvdXJjZXNJbmZvJywgdGhpcy5sYXllckRhdGFTb3VyY2VJZF0pXG4gIH1cblxuICAvKiogQGlnbm9yZSAqL1xuICBwcml2YXRlIG9uTGF5ZXJEYXRhc291cmNlSnNvbkNoYW5nZSAocHJlRHNKc29uOiBEYXRhU291cmNlSnNvbiwgZHNKc29uOiBEYXRhU291cmNlSnNvbikge1xuICAgIGlmICghYXBwQ29uZmlnVXRpbHMuZ2V0RGF0YVNvdXJjZUpzb25CeUlkKHRoaXMuZ2V0QXBwQ29uZmlnKCksIHRoaXMubGF5ZXJEYXRhU291cmNlSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY3VycmVudFJ1bnRpbWVJc0hpZGRlbiA9IGFwcENvbmZpZ1V0aWxzLmdldERhdGFTb3VyY2VKc29uQnlJZCh0aGlzLmdldEFwcENvbmZpZygpLCB0aGlzLmxheWVyRGF0YVNvdXJjZUlkKS5pc0hpZGRlblxuXG4gICAgaWYgKHRoaXMucnVuVGltZUlzSGlkZGVuICE9PSBjdXJyZW50UnVudGltZUlzSGlkZGVuKSB7XG4gICAgICB0aGlzLnJ1blRpbWVJc0hpZGRlbiA9IGN1cnJlbnRSdW50aW1lSXNIaWRkZW5cbiAgICAgIHRoaXMubGF5ZXIudmlzaWJsZSA9ICFjdXJyZW50UnVudGltZUlzSGlkZGVuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3YXRjaExheWVyVmlzaWJsZUNoYW5nZSAoKSB7XG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy53YXRjaExheWVyVmlzaWJsZUNoYW5nZUhhbmRsZSkge1xuICAgICAgdGhpcy53YXRjaExheWVyVmlzaWJsZUNoYW5nZUhhbmRsZS5yZW1vdmUoKVxuICAgICAgdGhpcy53YXRjaExheWVyVmlzaWJsZUNoYW5nZUhhbmRsZSA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLndhdGNoTGF5ZXJWaXNpYmxlQ2hhbmdlSGFuZGxlID0gdGhpcy5sYXllci53YXRjaCgndmlzaWJsZScsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5mcm9tUnVudGltZSkge1xuICAgICAgICAvLyBvbmx5IHJlY29yZCBsYXllciB2aXNpYmlsaXR5IGZvciBvcmlnaW5hbCBsYXllcnMgaW4gd2ViIG1hcC93ZWIgc2NlbmUsIHNvIGlnbm9yZSBsYXllciB0aGF0IGFkZGVkIGF0IHJ1bnRpbWVcbiAgICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLmdldEppbXVNYXBWaWV3KClcblxuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcbiAgICAgICAgICBqaW11TWFwVmlldy51cGRhdGVVcmxIYXNoTGF5ZXJWaXNpYmlsaXR5KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWFwV2lkZ2V0SWQgKCk6IHN0cmluZyB7XG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLmdldEppbXVNYXBWaWV3KClcbiAgICByZXR1cm4gamltdU1hcFZpZXc/Lm1hcFdpZGdldElkIHx8ICcnXG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBVcGRhdGUgcmVtb3ZlYWJsZUJ5TWFwVG9vbCBwcm9wZXJ0eS4gdHJ1ZSBtZWFucyB0aGUgbGF5ZXIgY2FuIGJlIHJlbW92ZWQgYnkgbWFwIGNsZWFyLWRhdGEgdG9vbC5cbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBzZXRSZW1vdmVhYmxlQnlNYXBUb29sICh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMucmVtb3ZlYWJsZUJ5TWFwVG9vbCA9IHZhbHVlXG5cbiAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSBtYXBNdXRhYmxlU3RhdGUgdG8gdHJpZ2dlciBtYXAgY2xlYXItZGF0YSB0b29sIHJlbmRlci5cbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IHRoaXMuZ2V0TWFwV2lkZ2V0SWQoKVxuICAgIGNvbnN0IGxheWVySWQgPSB0aGlzLmxheWVyPy5pZFxuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5nZXRKaW11TWFwVmlldygpXG5cbiAgICBpZiAobWFwV2lkZ2V0SWQgJiYgbGF5ZXJJZCAmJiBqaW11TWFwVmlldykge1xuICAgICAgY29uc3QgamltdU1hcFZpZXdJZCA9IGppbXVNYXBWaWV3LmlkXG4gICAgICBjb25zdCBtYXBNdXRhYmxlU3RhdGU6IE1hcE11dGFibGVTdGF0ZSA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFttYXBXaWRnZXRJZF0pIHx8IHt9XG4gICAgICBjb25zdCByZW1vdmVhYmxlTGF5ZXJJZHNJbmZvID0gbWFwTXV0YWJsZVN0YXRlLnJlbW92ZWFibGVMYXllcklkc0luZm8gfHwge31cblxuICAgICAgLy8gdHJhdmVyc2UgYWxsIEppbXVMYXllclZpZXdzIHRvIGdldCB0aGUgZnJlc2ggcmVtb3ZlYWJsZUxheWVySWRzIG9mIGN1cnJlbnQgSmltdU1hcFZpZXdcbiAgICAgIGNvbnN0IHJlbW92ZWFibGVMYXllcklkczogc3RyaW5nW10gPSBbXVxuICAgICAgY29uc3QgamltdUxheWVyVmlld3MgPSBPYmplY3QudmFsdWVzKGppbXVNYXBWaWV3LmppbXVMYXllclZpZXdzKVxuICAgICAgamltdUxheWVyVmlld3MuZm9yRWFjaChqaW11TGF5ZXJWaWV3ID0+IHtcbiAgICAgICAgaWYgKGppbXVMYXllclZpZXcucmVtb3ZlYWJsZUJ5TWFwVG9vbCAmJiBqaW11TGF5ZXJWaWV3LmxheWVyKSB7XG4gICAgICAgICAgcmVtb3ZlYWJsZUxheWVySWRzLnB1c2goamltdUxheWVyVmlldy5sYXllci5pZClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZlYWJsZUxheWVySWRzSW5mb1tqaW11TWFwVmlld0lkXSA9IHJlbW92ZWFibGVMYXllcklkc1xuXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZShtYXBXaWRnZXRJZCwgJ3JlbW92ZWFibGVMYXllcklkc0luZm8nLCByZW1vdmVhYmxlTGF5ZXJJZHNJbmZvKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZGF0YVNvdXJjZVV0aWxzLCB0eXBlIElNRGF0YVNvdXJjZUluZm8sIHR5cGUgTWFwU2VydmljZURhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBKaW11TWFwU2VydmljZUxheWVyVmlldywgdHlwZSBKaW11TWFwU2VydmljZUxheWVyVmlld09wdGlvbnMgfSBmcm9tICcuL2ppbXUtbWFwc2VydmljZS1sYXllci12aWV3J1xuXG5leHBvcnQgY2xhc3MgSmltdU1hcEltYWdlTGF5ZXJWaWV3IGV4dGVuZHMgSmltdU1hcFNlcnZpY2VMYXllclZpZXcge1xuICB1cmw6IHN0cmluZyA9IG51bGxcbiAgcHJpdmF0ZSByZWFkb25seSBvcmlnaW5hbEdkYlZlcnNpb24gPSBudWxsXG5cbiAgY29uc3RydWN0b3IgKG9wdGlvbnM6IEppbXVNYXBTZXJ2aWNlTGF5ZXJWaWV3T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcmlnaW5hbEdkYlZlcnNpb24gPSB0aGlzLmxheWVyLmdkYlZlcnNpb25cbiAgfVxuXG4gIHByb3RlY3RlZCBvbkxheWVyRGF0YVNvdXJjZUluZm9DaGFuZ2UgKHByZURzSW5mbzogSU1EYXRhU291cmNlSW5mbywgZHNJbmZvOiBJTURhdGFTb3VyY2VJbmZvKSB7XG4gICAgY29uc3QgbGF5ZXJEYXRhU291cmNlOiBNYXBTZXJ2aWNlRGF0YVNvdXJjZSA9IHRoaXMuZ2V0TGF5ZXJEYXRhU291cmNlKCkgYXMgTWFwU2VydmljZURhdGFTb3VyY2VcbiAgICBpZiAoIWxheWVyRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGltZUV4dGVudCA9IGxheWVyRGF0YVNvdXJjZS5nZXRUaW1lRXh0ZW50KClcbiAgICBjb25zdCBsYXllciA9IHRoaXMubGF5ZXIgYXMgX19lc3JpLk1hcEltYWdlTGF5ZXJcbiAgICAvLyB3aGVuIHRpbWVFeHRlbnQgaXMgZW1wdHksIGxheWVyLnVzZVZpZXdUaW1lIHNob3VsZCBiZSB0cnVlXG4gICAgbGF5ZXIudXNlVmlld1RpbWUgPSB0aW1lRXh0ZW50ID09PSBudWxsIHx8IHRpbWVFeHRlbnQgPT09IHVuZGVmaW5lZFxuICAgIGxheWVyLnRpbWVFeHRlbnQgPSBkYXRhU291cmNlVXRpbHMuY2hhbmdlSmltdVRpbWVUb0pTQVBJVGltZUV4dGVudCh0aW1lRXh0ZW50KVxuXG4gICAgaWYgKGRzSW5mbz8uZ2RiVmVyc2lvbikge1xuICAgICAgbGF5ZXIuZ2RiVmVyc2lvbiA9IGRzSW5mby5nZGJWZXJzaW9uXG4gICAgfVxuXG4gICAgaWYgKCFkc0luZm8/LmdkYlZlcnNpb24gJiYgdGhpcy5vcmlnaW5hbEdkYlZlcnNpb24pIHtcbiAgICAgIGxheWVyLmdkYlZlcnNpb24gPSB0aGlzLm9yaWdpbmFsR2RiVmVyc2lvblxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSmltdUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3Q29uc3RydWN0b3JPcHRpb25zIH0gZnJvbSAnLi9qaW11LWxheWVyLXZpZXcnXG5pbXBvcnQgeyB0b2dnbGVIaWdobGlnaHRMYXllclZpc2libGUgfSBmcm9tICcuL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEppbXVNYXBTZXJ2aWNlTGF5ZXJWaWV3T3B0aW9ucyBleHRlbmRzIEppbXVMYXllclZpZXdDb25zdHJ1Y3Rvck9wdGlvbnMge1xuICB1cmw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEppbXVNYXBTZXJ2aWNlTGF5ZXJWaWV3IGV4dGVuZHMgSmltdUxheWVyVmlldyB7XG4gIHVybDogc3RyaW5nID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yIChvcHRpb25zOiBKaW11TWFwU2VydmljZUxheWVyVmlld09wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmxcbiAgICB0b2dnbGVIaWdobGlnaHRMYXllclZpc2libGUodGhpcy5tYXBWaWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQodGhpcy5qaW11TWFwVmlld0lkKSwgdGhpcylcbiAgfVxuXG4gIGFzeW5jIHJlYWR5ICgpIHtcbiAgICBhd2FpdCAoKHRoaXMubGF5ZXIgYXMgX19lc3JpLk1hcEltYWdlTGF5ZXIpLmxvYWRBbGwgPyAodGhpcy5sYXllciBhcyBfX2VzcmkuTWFwSW1hZ2VMYXllcikubG9hZEFsbCgpIDogdGhpcy5sYXllci5sb2FkKCkpXG4gICAgY29uc3Qgc3ViTGF5ZXJzID0gKHRoaXMubGF5ZXIgYXMgX19lc3JpLk1hcEltYWdlTGF5ZXIgfCBfX2VzcmkuVGlsZUxheWVyKS5zdWJsYXllcnM/LnRvQXJyYXkoKT8ucmV2ZXJzZSgpXG4gICAgaWYgKHN1YkxheWVycyAmJiBzdWJMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdWJMYXllcnMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgYXdhaXQgdGhpcy5tYXBWaWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQodGhpcy5qaW11TWFwVmlld0lkKS5jcmVhdGVKaW11TGF5ZXJWaWV3KHN1YkxheWVyc1trXSwgdGhpcy5qaW11TGF5ZXJJZCwgaywgbnVsbCwgdGhpcy5mcm9tUnVudGltZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuIiwiaW1wb3J0IHsgdHlwZSBTY2VuZUxheWVyRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vbiwgdHlwZSBKaW11RmVhdHVyZUxheWVyU2NlbmVMYXllclZpZXdDb21tb25PcHRpb25zIH0gZnJvbSAnLi9qaW11LWZlYXR1cmUtbGF5ZXItc2NlbmUtbGF5ZXItdmlldy1jb21tb24nXG5cbi8qKlxuICogYEppbXVTY2VuZUxheWVyVmlld09wdGlvbnNgIHByb3ZpZGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgSmltdVNjZW5lTGF5ZXJWaWV3YC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBKaW11U2NlbmVMYXllclZpZXdPcHRpb25zIGV4dGVuZHMgSmltdUZlYXR1cmVMYXllclNjZW5lTGF5ZXJWaWV3Q29tbW9uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgYHZpZXdgIGlzIHRoZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IGBTY2VuZUxheWVyVmlld2BdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS12aWV3cy1sYXllcnMtU2NlbmVMYXllclZpZXcuaHRtbCkuXG4gICAqL1xuICB2aWV3OiBfX2VzcmkuU2NlbmVMYXllclZpZXdcbn1cblxuLyoqXG4gKiBUaGUgSmltdVNjZW5lTGF5ZXJWaWV3IGV4dGVuZHMgZnJvbSB0aGUgSmltdUxheWVyVmlldy5cbiAqL1xuZXhwb3J0IGNsYXNzIEppbXVTY2VuZUxheWVyVmlldyBleHRlbmRzIEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vbiB7XG4gIC8qKlxuICAgKiBUaGUgYHZpZXdgIGlzIHRoZSBbQXJjR0lTIE1hcHMgU0RLIGZvciBKYXZhU2NyaXB0IGBTY2VuZUxheWVyVmlld2BdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS12aWV3cy1sYXllcnMtU2NlbmVMYXllclZpZXcuaHRtbCkuXG4gICAqL1xuICB2aWV3OiBfX2VzcmkuU2NlbmVMYXllclZpZXdcblxuICBnZXRMYXllckRhdGFTb3VyY2UgKCk6IFNjZW5lTGF5ZXJEYXRhU291cmNlIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0TGF5ZXJEYXRhU291cmNlKCkgYXMgU2NlbmVMYXllckRhdGFTb3VyY2VcbiAgfVxuXG4gIGNyZWF0ZUxheWVyRGF0YVNvdXJjZSAoKTogUHJvbWlzZTxTY2VuZUxheWVyRGF0YVNvdXJjZT4ge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGVMYXllckRhdGFTb3VyY2UoKSBhcyBQcm9taXNlPFNjZW5lTGF5ZXJEYXRhU291cmNlPlxuICB9XG59XG4iLCJpbXBvcnQgeyBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnLi9qaW11LWxheWVyLXZpZXcnXG5cbmV4cG9ydCBjbGFzcyBKaW11U3ViVHlwZUdyb3VwTGF5ZXJWaWV3IGV4dGVuZHMgSmltdUxheWVyVmlldyB7XG4gIGFzeW5jIHJlYWR5ICgpIHtcbiAgICBjb25zdCBzdWJsYXllcnMgPSAodGhpcy5sYXllciBhcyBfX2VzcmkuU3VidHlwZUdyb3VwTGF5ZXIpLnN1YmxheWVycz8udG9BcnJheSgpPy5yZXZlcnNlKClcblxuICAgIGlmIChzdWJsYXllcnMgJiYgc3VibGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPEppbXVMYXllclZpZXc+PiA9IFtdXG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc3VibGF5ZXJzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHN1YmxheWVyID0gc3VibGF5ZXJzW2tdXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLm1hcFZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZCh0aGlzLmppbXVNYXBWaWV3SWQpLmNyZWF0ZUppbXVMYXllclZpZXcoc3VibGF5ZXIgYXMgYW55LCB0aGlzLmppbXVMYXllcklkLCBrLCBudWxsLCB0aGlzLmZyb21SdW50aW1lKVxuICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cbiIsImltcG9ydCB7IEppbXVNYXBTZXJ2aWNlTGF5ZXJWaWV3IH0gZnJvbSAnLi9qaW11LW1hcHNlcnZpY2UtbGF5ZXItdmlldydcblxuZXhwb3J0IGNsYXNzIEppbXVUaWxlTGF5ZXJWaWV3IGV4dGVuZHMgSmltdU1hcFNlcnZpY2VMYXllclZpZXcge1xufVxuIiwiaW1wb3J0IHsgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gJy4uL2ppbXUtbWFwLXZpZXcnXG5pbXBvcnQgeyB0eXBlIEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vbiB9IGZyb20gJy4vamltdS1mZWF0dXJlLWxheWVyLXNjZW5lLWxheWVyLXZpZXctY29tbW9uJ1xuaW1wb3J0IHsgdHlwZSBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnLi9qaW11LWxheWVyLXZpZXcnXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVIaWdobGlnaHRMYXllclZpc2libGUgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgamltdUxheWVyVmlldzogSmltdUxheWVyVmlldykge1xuICAvLyBqaW11TGF5ZXJWaWV3IHNob3VsZCBiZSBKaW11R3JvdXBMYXllclZpZXcgb3IgSmltdU1hcEltYWdlTGF5ZXJWaWV3XG4gIGppbXVMYXllclZpZXcubGF5ZXIud2F0Y2goJ3Zpc2libGUnLCAobmV3VmFsdWUpID0+IHtcbiAgICBjb25zdCBjaGlsZExheWVyVmlld3MgPSBqaW11TWFwVmlldy5nZXRBbGxDaGlsZEppbXVMYXllclZpZXdzKGppbXVMYXllclZpZXcuaWQpXG4gICAgY2hpbGRMYXllclZpZXdzLmZvckVhY2goY2hpbGRMYXllclZpZXcgPT4ge1xuICAgICAgY29uc3QgY0xheWVyVmlldyA9IGNoaWxkTGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJTY2VuZUxheWVyVmlld0NvbW1vblxuXG4gICAgICBpZiAoY0xheWVyVmlldy5vblBhcmVudExheWVyVmlzaWJsZUNoYW5nZSkge1xuICAgICAgICBjTGF5ZXJWaWV3Lm9uUGFyZW50TGF5ZXJWaXNpYmxlQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9kYXRhX3NvdXJjZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB6b29tVG9VdGlscyBmcm9tICcuL2xpYi91dGlscy96b29tdG8tdXRpbHMnXG5pbXBvcnQgKiBhcyBwb3J0YWxVdGlscyBmcm9tICcuL2xpYi91dGlscy9wb3J0YWwtdXRpbHMnXG5pbXBvcnQgKiBhcyBmZWF0dXJlVXRpbHMgZnJvbSAnLi9saWIvdXRpbHMvZmVhdHVyZS11dGlscydcbmltcG9ydCAqIGFzIGJhc2VtYXBVdGlscyBmcm9tICcuL2xpYi91dGlscy9iYXNlbWFwLXV0aWxzJ1xuaW1wb3J0IHsgZ2VvbWV0cnlVdGlscyB9IGZyb20gJ2ppbXUtY29yZSdcblxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL2xpYi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmV4cG9ydCAqIGZyb20gJy4vbGliL3ZpZXdzJ1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbWFwdmlldy1tYW5hZ2VyJ1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZXMvYXJjZ2lzLWRhdGEtc291cmNlLWludGVyZmFjZSdcbmV4cG9ydCAqIGZyb20gJy4vbGliL2V4dGVuc2lvbnMvZGVwZW5kZW5jeS1leHRlbnNpb24nXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2FyY2dpcy1qcy1hcGktbW9kdWxlLWxvYWRlcidcbmV4cG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9saWIvY29tcG9uZW50cy9qaW11LW1hcC12aWV3LWNvbXBvbmVudCdcbmV4cG9ydCB7IEppbXVMYXllclZpZXdDb21wb25lbnQgfSBmcm9tICcuL2xpYi9jb21wb25lbnRzL2ppbXUtbGF5ZXItdmlldy1jb21wb25lbnQnXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9saWIvaW5pdCdcbmV4cG9ydCB7IHpvb21Ub1V0aWxzLCBwb3J0YWxVdGlscywgZmVhdHVyZVV0aWxzLCBiYXNlbWFwVXRpbHMsIGRlZmF1bHRNZXNzYWdlcyB9XG5leHBvcnQgdHlwZSB7IFZpZXdQYWRkaW5nLCBab29tVG9PcHRpb25zIH0gZnJvbSAnLi9saWIvdXRpbHMvem9vbXRvLXV0aWxzJ1xuZXhwb3J0IHR5cGUgeyBEZWZhdWx0TWFwSW5mbyB9IGZyb20gJy4vbGliL3V0aWxzL3BvcnRhbC11dGlscydcbi8qKlxuICogQGlnbm9yZVxuICogQGRlcHJlY2F0ZWRcbiAqICdnZW9tZXRyeVV0aWxzJyBpcyBkZXByZWNhdGVkIGZyb20gJ2ppbXUtYXJjZ2lzJywgcGxlYXNlIGltcG9ydCBpdCBmcm9tICdqaW11LWNvcmUnXG4gKi9cbmV4cG9ydCB7IGdlb21ldHJ5VXRpbHMgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9