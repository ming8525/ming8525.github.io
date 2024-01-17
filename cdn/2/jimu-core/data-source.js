System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
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

/***/ "./jimu-core/lib/data-sources/base-classes/abstract-data-source.ts":
/*!*************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/abstract-data-source.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDataSource: () => (/* binding */ AbstractDataSource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _data_record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-record */ "./jimu-core/lib/data-sources/base-classes/data-record.ts");
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
 * Include the common implementations for datasource.
 */
class AbstractDataSource {
    constructor(options) {
        this.isDataSourceSet = false;
        this.records = [];
        this.dataSourceManager = options.dataSourceManager;
        Object.assign(this, options);
        this.originDataSourceJson = options.dataSourceJson;
        if (options.dataSourceJson) { // main data source
            this.isDataView = false;
            this.isLocal = false;
            if (options.dataSourceJson.url) {
                this.url = options.dataSourceJson.url;
            }
        }
        else {
            if (!options.belongToDataSource) {
                console.error('bad DataSourceConstructorOptions.');
                return;
            }
            if (options.localId) {
                this.isLocal = true;
                this.isDataView = false;
            }
            else {
                this.isLocal = false;
                this.isDataView = true;
            }
        }
        if (this.getDataSourceJson().isDataInDataSourceInstance) { // Use source records as source.
            this.sourceRecords = options.sourceRecords;
            // Reset other sources info.
            this.url = null;
        }
        if (this.isLocal) {
            this.listenSelection = false;
        }
        else {
            this.listenSelection = true;
        }
    }
    ready() {
        return Promise.resolve();
    }
    get url() {
        if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getWhetherUseProxy()) {
            return this._url;
        }
        const proxyUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceProxyUrl(this._url);
        return proxyUrl || this._url;
    }
    set url(u) {
        this._url = u;
    }
    isInAppConfig() {
        var _a, _b;
        return !!((_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.dataSources) === null || _a === void 0 ? void 0 : _a[((_b = this.getRootDataSource()) === null || _b === void 0 ? void 0 : _b.id) || this.id]);
    }
    getLabel() {
        if (this.isLocal) {
            return this.belongToDataSource.getLabel();
        }
        if (this.isDataView) {
            if (this.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.OUTPUT_DATA_VIEW_ID && this.getDataSourceJson().isOutputFromWidget) {
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatMessage({ id: 'outputView' }, { dataSourceLabel: this.belongToDataSource.getLabel() });
            }
            const mainDsJson = this.getMainDataSource().getDataSourceJson();
            const dataViewJson = (mainDsJson === null || mainDsJson === void 0 ? void 0 : mainDsJson.dataViews) && mainDsJson.dataViews[this.dataViewId];
            return (dataViewJson === null || dataViewJson === void 0 ? void 0 : dataViewJson.label) || this.belongToDataSource.getLabel();
        }
        const mainDataSourceLabel = this.getDataSourceJson().label || this.getSchema().label;
        return mainDataSourceLabel;
    }
    getDataSourceJson() {
        if (this.isDataView || this.isLocal) {
            let dsJson = this.getMainDataSource().getDataSourceJson();
            if (this.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID) {
                dsJson = dsJson.set('isDataInDataSourceInstance', true);
            }
            return dsJson;
        }
        return this.dataSourceJson;
    }
    setDataSourceJson(dsJson) {
        if (!dsJson) {
            this.dataSourceJson = this.originDataSourceJson; // reset data source json
            return;
        }
        if (this.dataSourceJson) {
            this.dataSourceJson = this.traverseToMergeDataSourceJson(this.dataSourceJson, dsJson);
        }
        else {
            this.dataSourceJson = dsJson;
        }
    }
    traverseToMergeDataSourceJson(baseDsJson, newDsJson) {
        if (!baseDsJson && !newDsJson) {
            console.error('Can not merge data source json since do not have base data source json or new data source json.');
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        }
        else if (!baseDsJson) {
            return newDsJson;
        }
        else if (!newDsJson) {
            return baseDsJson;
        }
        const currentDs = this.dataSourceManager.getDataSource(baseDsJson.id);
        if (!currentDs) {
            return baseDsJson;
        }
        let mergedDsJson = baseDsJson.merge(newDsJson.asMutable({ deep: true }));
        /**
         * The following properties are editable properties in data source json.
         * Other properties in data source json are not allowed to be changed. Changing them may break data source.
         */
        const editablePropertiesInDsJson = ['label', 'isHidden', 'useFields', 'query', 'dataViews', 'childDataSourceJsons', 'schema', 'url', 'itemId', 'portalUrl'];
        editablePropertiesInDsJson.forEach(key => {
            // If one editable property is deleted in new data source json, should delete it from the merged data source json.
            if (!newDsJson[key]) {
                mergedDsJson = mergedDsJson.without(key);
            }
            // If schema is updated in new data source json, use the new schema.
            if (newDsJson[key] && key === 'schema') {
                mergedDsJson = mergedDsJson.set('schema', newDsJson.schema);
            }
            // If AGOL/portal info is updated in new data source json, update the accrodingly info in the current data source.
            if (newDsJson[key] && (key === 'url' || key === 'portalUrl' || key === 'itemId')) {
                mergedDsJson = mergedDsJson.set(key, newDsJson[key]);
                currentDs[key] = newDsJson[key];
                if (currentDs.canSaveSourceRecords()) {
                    currentDs.getAllDerivedDataSources().forEach(ds => {
                        ds[key] = newDsJson[key];
                    });
                }
            }
            // If there are some fields used in previous data source json, should copy them to the merged data source json.
            if (baseDsJson[key] && key === 'useFields') {
                // If schema is updated, only copy consistant fields to the merged data source json.
                if (newDsJson.schema) {
                    mergedDsJson = mergedDsJson.set('useFields', baseDsJson.useFields.filter(jimuName => { var _a; return !!((_a = newDsJson.schema.fields) === null || _a === void 0 ? void 0 : _a[jimuName]); }));
                }
                else { // If schema keeps the same, copy all fields to the merged data source json.
                    mergedDsJson = mergedDsJson.set('useFields', baseDsJson.useFields);
                }
            }
        });
        if (mergedDsJson.childDataSourceJsons) {
            Object.keys(mergedDsJson.childDataSourceJsons).forEach(jimuChildId => {
                var _a;
                const mergedChildDsJson = currentDs.traverseToMergeDataSourceJson((_a = baseDsJson === null || baseDsJson === void 0 ? void 0 : baseDsJson.childDataSourceJsons) === null || _a === void 0 ? void 0 : _a[jimuChildId], newDsJson.childDataSourceJsons[jimuChildId]);
                mergedDsJson = mergedDsJson.setIn(['childDataSourceJsons', jimuChildId], mergedChildDsJson);
            });
        }
        return mergedDsJson;
    }
    getSchema() {
        // data view does not have schema
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getSchema();
        }
        return this.schema || {};
    }
    getSelectedFields() {
        var _a, _b, _c, _d;
        let outFields;
        if (this.isLocal) {
            return this.belongToDataSource.getSelectedFields();
        }
        if (this.isSelectionView() || this.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.OUTPUT_DATA_VIEW_ID) {
            return this.getMainDataSource().getSelectedFields();
        }
        const allFields = ((_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields) ? Object.keys(this.getSchema().fields) : [];
        if (this.isDataView) {
            outFields = (_c = (_b = this.getDataSourceJson().dataViews) === null || _b === void 0 ? void 0 : _b[this.dataViewId]) === null || _c === void 0 ? void 0 : _c.outFields;
        }
        else {
            outFields = (_d = this.getDataSourceJson().query) === null || _d === void 0 ? void 0 : _d.outFields;
        }
        if (!outFields && !this.selectedFields) {
            return allFields;
        }
        let realSelectedFields = allFields;
        if (outFields) {
            realSelectedFields = realSelectedFields.filter(fName => outFields.includes(fName));
        }
        if (this.selectedFields) {
            realSelectedFields = realSelectedFields.filter(fName => this.selectedFields.includes(fName));
        }
        // fields must in outFields, at the same time, in selectedFields
        return realSelectedFields;
    }
    // Return used filleds saved in config and fields load on demand.
    getAllUsedFields(options) {
        let usedFields;
        if (this.getLoadOnDemandUsedFields() === '*') {
            usedFields = this.getLoadOnDemandUsedFields(options);
        }
        else {
            usedFields = this.mergeUsedFields(this.getLoadOnDemandUsedFields(options), this.getConfigUsedFields(options));
        }
        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug' && usedFields === '*') {
            console.warn('All used fields are * since used fields length equals schema fields length.');
        }
        return usedFields;
    }
    _printUsedFieldsDetail(options) {
        this.getAllUsedFields(Object.assign({ logLevel: 'debug', excludeWidgetsDoNotUseDsToQuery: true }, options));
    }
    // Return used fields load on demand.
    getLoadOnDemandUsedFields(options) {
        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
            console.log('Load on demand fields are:', this.loadOnDemandFields);
        }
        return this.loadOnDemandFields;
    }
    // Return used fields saved in config.
    getConfigUsedFields(options) {
        var _a, _b, _c;
        /**
         * Widgets don't save used fields of local data source. Widgets can use query params to indicate which fields should be loaded.
         *
         * TODO: widget doesn't save used fields of local data source, which will cause that local data sources may not work after data mapping.
         */
        if (this.isLocal) {
            return [];
        }
        // Used fields of no_selection view should be the same as selection view.
        if (this.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION) {
            return (_a = this.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID)) === null || _a === void 0 ? void 0 : _a.getAllUsedFields();
        }
        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
            console.group('Config used fields');
        }
        const widgets = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _b === void 0 ? void 0 : _b.widgets;
        const messages = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig) === null || _c === void 0 ? void 0 : _c.messageConfigs;
        let actionsArr = [];
        messages && Object.values(messages).forEach(m => {
            var _a, _b;
            if (m.actions) {
                actionsArr = actionsArr.concat((_b = (_a = m.actions).asMutable) === null || _b === void 0 ? void 0 : _b.call(_a));
            }
        });
        const widgetsArr = widgets ? Object.values(widgets) : [];
        const jsonsWithUseDss = widgetsArr.concat(actionsArr);
        const usedFields = [];
        jsonsWithUseDss.every(w => {
            var _a, _b;
            // Whether should exclude the widget based on options and widget properties.
            const excludeTheWidgetForCurrentDs = (options === null || options === void 0 ? void 0 : options.excludeWidgetsDoNotUseDsToQuery) && ((_b = (_a = w.manifest) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.notAutoLoadUsedFieldsData);
            w.useDataSources && w.useDataSources.every(u => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                /**
                 * Skip the use data source if it is not selection view of the current data source and should exclude the widget.
                 * The reason why won't skip the use data source if it is selection view is that selection view uses client-side query, it needs its main data source/data views to load its used fields from remote database.
                 */
                if ((u === null || u === void 0 ? void 0 : u.dataSourceId) !== ((_a = this.getSelectionDataView()) === null || _a === void 0 ? void 0 : _a.id) && excludeTheWidgetForCurrentDs) {
                    return true;
                }
                /**
                 * These used fields should be loaded:
                 * 1. used fields of current data source should be loaded,
                 * 2. used fields of current data source's selection view should be loaded,
                 * 3. if current data source is selection view, used fields of all data sources which are derived from the same main data source should be loaded,
                 * 4. if current data source is output data source and schema is same as its origin data source, used fields of its origin data source should be loaded,
                 * 5. if current data source is the associated data source of data source A , use fields of data source A should be loaded.
                 *
                 * 2 is to reduce requests, load more fields for selection view to use.
                 * 3 is for expression, widget can select a data view / main data, but use its selection view to create expression.
                 */
                const useCurrentDataSource = (u === null || u === void 0 ? void 0 : u.dataSourceId) === this.id;
                const useSelectionViewOfCurrentDataSource = (u === null || u === void 0 ? void 0 : u.dataSourceId) === ((_b = this.getSelectionDataView()) === null || _b === void 0 ? void 0 : _b.id);
                const useOtherViewsDerivedFromSameMainDsWithSelectionView = this.isSelectionView() && (u === null || u === void 0 ? void 0 : u.mainDataSourceId) === this.getMainDataSource().id;
                const useOriginDataSource = this.getDataSourceJson().isOutputFromWidget && !this.getDataSourceJson().schema && ((_c = this.getDataSourceJson().originDataSources) === null || _c === void 0 ? void 0 : _c.length) === 1 && (u === null || u === void 0 ? void 0 : u.dataSourceId) === this.getDataSourceJson().originDataSources[0].dataSourceId;
                const useAssociatedDataSource = (u === null || u === void 0 ? void 0 : u.dataSourceId) === ((_f = (_e = (_d = this).getAssociatedDataSource) === null || _e === void 0 ? void 0 : _e.call(_d)) === null || _f === void 0 ? void 0 : _f.id);
                if (useCurrentDataSource || useSelectionViewOfCurrentDataSource || useOtherViewsDerivedFromSameMainDsWithSelectionView || useOriginDataSource || useAssociatedDataSource) {
                    // 1. Use fields directly.
                    if (u.fields) {
                        usedFields.push(...u.fields);
                    }
                    // 2. Use fields configured in popup.
                    if (u.useFieldsInPopupInfo) {
                        const popupInfoFields = ((_l = (_k = (_j = (_h = (_g = this).getPopupInfo) === null || _h === void 0 ? void 0 : _h.call(_g)) === null || _j === void 0 ? void 0 : _j.fieldInfos) === null || _k === void 0 ? void 0 : _k.map(fieldInfo => this.findJimuFieldName(fieldInfo.fieldName))) === null || _l === void 0 ? void 0 : _l.filter(f => !!f)) || [];
                        /**
                         * If the data source doesn't have popup info but widgets declared to use popup info, will treat all fields as used fields.
                         */
                        if (popupInfoFields.length > 0) {
                            usedFields.push(...popupInfoFields);
                        }
                        else {
                            if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
                                console.warn('Config used fields are * since widget uses popup info fields, but can not find them.', w.id || w.actionId);
                            }
                            usedFields.push('*');
                        }
                    }
                    // 3. Use fields in symbol.
                    if (u.useFieldsInSymbol) {
                        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
                            console.warn('Config used fields are * since widget uses symbol fields.', w.id || w.actionId);
                        }
                        // We do not calculate which fields are in symbol, just add all fields simply.
                        usedFields.push('*');
                    }
                }
                // Break the loop if used fields contain '*'
                return !usedFields.includes('*');
            });
            if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
                console.log('Accumulated config used fields are:', usedFields, w.id || w.actionId);
            }
            // Break the loop if used fields contain '*'
            return !usedFields.includes('*');
        });
        let configUsedFields = usedFields.includes('*') ? '*' : Array.from(new Set(usedFields));
        if (configUsedFields !== '*') {
            configUsedFields = configUsedFields.filter(f => { var _a, _b; return !!((_b = (_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[f]); });
        }
        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
            console.log('Final config used fields are:', usedFields);
            console.groupEnd();
        }
        return configUsedFields;
    }
    updateLoadOnDemandFields(usedFields) {
        if (!usedFields) {
            return;
        }
        this.loadOnDemandFields = this.mergeUsedFields(this.loadOnDemandFields, this.findMissingFields(usedFields, this.getConfigUsedFields()));
        if (this.loadOnDemandFields !== '*') {
            this.loadOnDemandFields = this.loadOnDemandFields.filter(f => { var _a, _b; return !!((_b = (_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[f]); });
        }
    }
    mergeUsedFields(baseUsedFields, newUsedFields) {
        if (baseUsedFields === '*' || newUsedFields === '*') {
            return '*';
        }
        else if (Array.isArray(baseUsedFields) && Array.isArray(newUsedFields)) {
            let res = Array.from(new Set((baseUsedFields).concat(newUsedFields))).filter(f => !!f);
            if (res.length === Object.keys(this.getSchema().fields).length) {
                res = '*';
            }
            return res;
        }
        else {
            return baseUsedFields || newUsedFields || [];
        }
    }
    missingSomeFields(usedFields, currentFields) {
        if (currentFields === '*') {
            return false;
        }
        return this.findMissingFields(usedFields, currentFields).length > 0;
    }
    /**
     * Compare usedFields with currentFields, find out the fields which are in usedFields but are not in currentFields.
     */
    findMissingFields(usedFields, currentFields) {
        const selectedFields = this.getSelectedFields();
        const f1 = usedFields === '*' ? selectedFields : usedFields;
        const f2 = currentFields === '*' ? selectedFields : currentFields;
        const missingFields = [];
        f1 === null || f1 === void 0 ? void 0 : f1.forEach(f => {
            if (!(f2 === null || f2 === void 0 ? void 0 : f2.includes(f))) {
                missingFields.push(f);
            }
        });
        return missingFields;
    }
    findJimuFieldName(originFieldName) {
        const schema = this.getSchema();
        let jimuFieldName = null;
        if (schema === null || schema === void 0 ? void 0 : schema.fields) {
            jimuFieldName = Object.keys(schema.fields).find(jimuFieldName => schema.fields[jimuFieldName].name === originFieldName);
        }
        return jimuFieldName;
    }
    setSelectedFields(jimuNames) {
        this.selectedFields = jimuNames;
    }
    setSchema(schema) {
        this.schema = schema;
    }
    fetchSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
        });
    }
    getFetchedSchema() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getFetchedSchema();
        }
        return this.fetchedSchema;
    }
    setFetchedSchema(fetchedSchema) {
        this.fetchedSchema = fetchedSchema;
    }
    getGeometryType() {
        return null;
    }
    getReversedConfigSchema() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getReversedConfigSchema();
        }
        if (this.reverseSchema) {
            return this.reverseSchema;
        }
        if (this.isDataSourceSet) {
            const schema = this.getDataSourceJson().schema;
            const rSchema = { childSchemas: {} };
            if (!schema) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
            }
            if (!schema.childSchemas) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    label: schema.label,
                    childId: schema.childId,
                    jimuChildId: schema.jimuChildId
                });
            }
            Object.keys(schema.childSchemas).forEach(jimuChildId => {
                const actualChildId = schema.childSchemas[jimuChildId].childId;
                if (rSchema.childSchemas[actualChildId]) {
                    rSchema.childSchemas[actualChildId].push(this.getOneReversedConfigSchema(schema.childSchemas[jimuChildId]));
                }
                else {
                    rSchema.childSchemas[actualChildId] = [this.getOneReversedConfigSchema(schema.childSchemas[jimuChildId])];
                }
            });
            this.reverseSchema = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(rSchema);
        }
        else {
            this.reverseSchema = this.getOneReversedConfigSchema(this.getDataSourceJson().schema);
        }
        return this.reverseSchema;
    }
    setRecords(records) {
        this.records = records;
        this.addVersion();
    }
    /**
     * @param schema
     */
    getOneReversedConfigSchema(schema) {
        const reversedSchema = {};
        if (!schema) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(reversedSchema);
        }
        reversedSchema.fields = {};
        Object.keys(schema.fields).forEach(jimuName => {
            const field = schema.fields[jimuName].asMutable({ deep: true });
            if (reversedSchema.fields[field.name]) {
                (reversedSchema.fields[field.name]).push(field);
            }
            else {
                (reversedSchema.fields[field.name]) = [field];
            }
        });
        schema.childId && (reversedSchema.childId = schema.childId);
        schema.jimuChildId && (reversedSchema.jimuChildId = schema.jimuChildId);
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(reversedSchema);
    }
    getStatus() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id] && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id].status;
    }
    setStatus(status) {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceStatusChanged(this.id, status));
    }
    getCountStatus() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id] && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id].countStatus;
    }
    setCountStatus(status) {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceCountStatusChanged(this.id, status));
    }
    getVersion() {
        var _a;
        return (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id]) === null || _a === void 0 ? void 0 : _a.version;
    }
    addVersion() {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceVersionAdded(this.id));
    }
    getSourceVersion() {
        var _a;
        if (this.canSaveSourceRecords()) {
            return (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id]) === null || _a === void 0 ? void 0 : _a.sourceVersion;
        }
        else {
            return this.getMainDataSource().getSourceVersion();
        }
    }
    addSourceVersion() {
        if (this.canSaveSourceRecords()) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceSourceVersionAdded(this.id));
        }
    }
    getSelectedRecordIdsFromInfo() {
        var _a, _b;
        return ((_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[this.id]) === null || _b === void 0 ? void 0 : _b.selectedIds) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    }
    getSelectOptionsFromInfo() {
        var _a, _b;
        return (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[this.id]) === null || _b === void 0 ? void 0 : _b.selectOptions;
    }
    updateSelectionInfo(options, triggerDataSource) {
        if (!options) {
            return;
        }
        /**
         * Update selected record ids only when current data source listens selection or current data source is the data source which triggers selection.
         */
        if (this.getListenSelection() || this.id === (triggerDataSource === null || triggerDataSource === void 0 ? void 0 : triggerDataSource.id)) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceSelectionChanged(this.id, options));
        }
    }
    buildRecord(data) {
        return new _data_record__WEBPACK_IMPORTED_MODULE_2__.SimpleDataRecordImpl(data, this);
    }
    getRecords() {
        return this.records;
    }
    getRecordsWithSelection() {
        return this.concatRecordsAndSelection(this.getSelectedRecords(), this.getRecords());
    }
    /**
     * If the selected records have not been loaded, they will be filled to the start of the records array.
     * These selected records should match query params of current data source.
     */
    concatRecordsAndSelection(selectRecords, records) {
        var _a;
        const newRecords = records || [];
        (_a = selectRecords === null || selectRecords === void 0 ? void 0 : selectRecords.reverse()) === null || _a === void 0 ? void 0 : _a.forEach(selectedRecord => {
            const isSelectedRecordLoaded = records === null || records === void 0 ? void 0 : records.some(r => (r === null || r === void 0 ? void 0 : r.getId()) === (selectedRecord === null || selectedRecord === void 0 ? void 0 : selectedRecord.getId()));
            if (!isSelectedRecordLoaded) {
                newRecords.unshift(selectedRecord);
            }
        });
        return newRecords;
    }
    clearSourceRecordsNotAddVersion() {
        this.clearRecordsNotAddVersion();
        this.sourceRecords = [];
    }
    clearSourceRecords() {
        this.clearSourceRecordsNotAddVersion();
        this.addSourceVersion();
        this.addVersion();
    }
    setSourceRecords(records) {
        if (this.canSaveSourceRecords()) {
            // Clear loaded records and selected records in current data source, will add version in the end.
            this.clearRecordsNotAddVersion();
            // Selected record ids of selection view is always empty array, no need to reset it.
            const resetSelectionInfo = !this.isSelectionView();
            if (resetSelectionInfo) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                    this.updateSelectionInfo({ widgetId: null, ids: [] }, this.getMainDataSource());
                });
            }
            this.sourceRecords = records.filter(r => !!r).map(r => {
                r.dataSource = this;
                return r;
            });
            // Clear loaded records and selected records in derived data sources.
            this.getAllDerivedDataSources().forEach(ds => {
                ds.clearRecords();
                if (resetSelectionInfo) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                        ds.updateSelectionInfo({ widgetId: null, ids: [] }, ds.getMainDataSource());
                    });
                }
            });
            this.addSourceVersion();
            this.addVersion();
        }
    }
    getSourceRecords() {
        var _a;
        if (!this.canSaveSourceRecords()) {
            if (this.isLocalViewOfSelectionView()) { // If is local view of a selection view, should use selection view's source.
                return this.belongToDataSource.getSourceRecords();
            }
            else {
                return this.getMainDataSource().getSourceRecords();
            }
        }
        let sourceRecords = this.sourceRecords || [];
        if (this.useNoSelectionView(this)) {
            const noSelectionView = this.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION);
            if (noSelectionView) {
                // Change data source of record to current data source.
                sourceRecords = (_a = noSelectionView.getRecords()) === null || _a === void 0 ? void 0 : _a.map(r => {
                    r.dataSource = this;
                    return r;
                });
            }
        }
        return sourceRecords;
    }
    /**
     * Get whether a data source should use records of no_selection view as its own source records.
     *  - the data source must be selection view, no_selection view is designed as the default value of selection view.
     *  - the data source must have no source records, if it has source records, should use these source records.
     */
    useNoSelectionView(dataSource = this) {
        const sourceRecords = dataSource.sourceRecords || [];
        return dataSource.isDataView && dataSource.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID && sourceRecords.length === 0 && dataSource.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION) && dataSource.getMainDataSource().getSelectedRecordIds().filter(id => !!id).length === 0;
    }
    canSaveSourceRecords() {
        const isMainDataSource = !this.isDataView && !this.isLocal;
        return isMainDataSource || this.isSelectionView();
    }
    getSelectionDataView() {
        const mainDsId = (this.isDataView || this.isLocal) ? this.getMainDataSource().id : this.id;
        const selectionDv = this.dataSourceManager.getDataViewDataSource(mainDsId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID);
        return selectionDv;
    }
    getSelectedRecords() {
        const selectionDv = this.getSelectionDataView();
        /**
         * When getting selected records, we should return real selection, shouldn't consider no_selection view.
         * No_selection view is only used when widget using selected features as its data source.
         */
        const allSelectedRecords = selectionDv ? selectionDv.getRecords() : [];
        const selectedRecordIdsInCurrentDs = this.getSelectedRecordIds();
        return allSelectedRecords.filter(r => selectedRecordIdsInCurrentDs.includes(r.getId()));
        // const dsInfo = getAppStore().getState().dataSourcesInfo[this.id];
        // if (dsInfo.selectedIndexes) { // select by index, get records from main ds.
        //   //we use .asMutable() here, because the .map() in SeamlessImmutable will remove mutable properties.
        //   return dsInfo.selectedIndexes.asMutable().map(index => this.getRecords()[index]).filter(r => r);
        // } else if (dsInfo.selectedIds) { // select by id, get records from selection dv
        //   return dsInfo.selectedIds.asMutable().map(id => this.getRecordById(id)).filter(r => r);
        // } else {
        //   return [];
        // }
    }
    getSelectedRecordIndexes() {
        if (!(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id]) {
            return [];
        }
        const dsId = (this.isDataView || this.isLocal) ? this.getMainDataSource().id : this.id;
        if ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[dsId].selectedIds) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[dsId].selectedIds.asMutable().map(id => {
                // we don't care the type here
                return this.getRecords().findIndex(record => record.getId() === id);
            });
        }
        else {
            return [];
        }
    }
    getSelectedRecordIds() {
        /**
         * Selection view should contains all selected records, including records selected in main data source and records selected in data views.
         *
         * Selected records of main data source also should contain all selected records.
         * The reason is that records selected in data view should be copied to main data source since data view is a subset of main data source.
         */
        if (this.isSelectionView()) {
            return this.getMainDataSource().getSelectedRecordIdsFromInfo().asMutable();
        }
        else {
            return this.getSelectedRecordIdsFromInfo().asMutable();
        }
    }
    nextRecord() {
        if (this.getSelectedRecordIndexes().length > 1) {
            console.warn('method "nextRecord" only works when single record is selected');
            return null;
        }
        if (this.getSelectedRecordIndexes().indexOf(this.getRecords().length - 1)) {
            throw Error('Reach the end of data.');
        }
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceSelectedIndexesChanged(this.id, [this.getSelectedRecordIndexes()[0]++]));
        return this.getSelectedRecords()[0];
    }
    prevRecord() {
        if (this.getSelectedRecordIndexes().length > 1) {
            console.warn('method "prevRecord" only works when single record is selected');
            return null;
        }
        if (this.getSelectedRecordIndexes().indexOf(0)) {
            throw Error('Reach the start of data.');
        }
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceSelectedIndexesChanged(this.id, [this.getSelectedRecordIndexes()[0]--]));
        return this.getSelectedRecords()[0];
    }
    getRecord(index) {
        return this.getRecords()[index];
    }
    getSourceRecord(index) {
        return this.getSourceRecords()[index];
    }
    getRecordById(id) {
        return this.getRecords().filter(record => record && record.getId() === id)[0];
    }
    getSourceRecordById(id) {
        return this.getSourceRecords().filter(record => record && record.getId() === id)[0];
    }
    clearSelection() {
        this.copySelectionToDataView([]);
        /**
         * Need to update records of selection view, then update data source info,
         * which can avoid that records of selection view haven't been updated when widgets detect data source info change event.
         */
        this.updateSelectionInfoOfDerivedDssAndChangeUrl({ widgetId: null, ids: [] });
    }
    updateSelectionInfoOfDerivedDssAndChangeUrl(options, derivedFromDataSource, forceCheck) {
        const mainDs = this.getMainDataSource();
        const updateByDs = derivedFromDataSource || mainDs;
        updateByDs.getAllDerivedDataSources().forEach(ds => {
            /**
             * Data source info of selection view and no_selection view don't save selected record ids.
             * Selection view's records and selected records should be same as main data source's selected records.
             */
            if (ds.id === this.dataSourceManager.getDataViewDataSourceId(mainDs.id, jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID) ||
                ds.id === this.dataSourceManager.getDataViewDataSourceId(mainDs.id, jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION)) {
                return;
            }
            ds.updateSelectionInfo(options, this, forceCheck);
        });
        updateByDs.updateSelectionInfo(options, this, forceCheck);
        if (updateByDs.id === mainDs.id) {
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlManager.getInstance().changeHashObjectByDataSourceSelection(mainDs.id, options);
        }
    }
    selectRecord(index) {
        const record = this.getDataSourceJson().isDataInDataSourceInstance ? this.getSourceRecord(index) : this.getRecord(index);
        if (record) {
            this.copySelectionToDataView([record]);
            this.updateSelectionInfoOfDerivedDssAndChangeUrl({ widgetId: null, ids: [record.getId()] });
        }
    }
    selectRecords(options) {
        let selectRecords = [];
        if (options === null || options === void 0 ? void 0 : options.records) {
            selectRecords = options.records;
        }
        else if (options === null || options === void 0 ? void 0 : options.ids) {
            const allRecords = this.getDataSourceJson().isDataInDataSourceInstance ? this.getSourceRecords() : this.getRecords();
            selectRecords = options.ids.map(id => allRecords.find(r => (r === null || r === void 0 ? void 0 : r.getId()) === id));
        }
        this.copySelectionToDataView(selectRecords);
        this.updateSelectionInfoOfDerivedDssAndChangeUrl(options);
        return Promise.resolve({ records: selectRecords });
    }
    selectRecordById(id, record) {
        if (this.getSelectedRecordIds().find(_id => _id === id)) {
            return;
        }
        let selectRecord;
        if (this.getDataSourceJson().isDataInDataSourceInstance) {
            selectRecord = record || (id && this.getSourceRecordById(id));
        }
        else {
            selectRecord = record || (id && this.getRecordById(id));
        }
        if (!selectRecord) {
            this.copySelectionToDataView([]);
            this.updateSelectionInfoOfDerivedDssAndChangeUrl({ widgetId: null, ids: [] });
        }
        else {
            this.copySelectionToDataView([selectRecord]);
            this.updateSelectionInfoOfDerivedDssAndChangeUrl({ widgetId: null, ids: [id] });
        }
    }
    selectRecordsByIds(ids, records) {
        const allRecords = this.getDataSourceJson().isDataInDataSourceInstance ? this.getSourceRecords() : this.getRecords();
        const selectRecords = records || ids.map(id => allRecords.find(r => (r === null || r === void 0 ? void 0 : r.getId()) === id));
        this.copySelectionToDataView(selectRecords);
        this.updateSelectionInfoOfDerivedDssAndChangeUrl({ widgetId: null, ids });
    }
    copySelectionToDataView(selection) {
        const selectionDv = this.getSelectionDataView();
        if (!selectionDv) {
            return;
        }
        selectionDv.setSourceRecords(selection.filter(r => !!r));
        selectionDv.setRecords(selection.filter(r => !!r));
    }
    getInfo() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id] || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    }
    clearRecords() {
        this.clearRecordsNotAddVersion();
        this.addVersion();
    }
    clearRecordsNotAddVersion() {
        if (!this.isSelectionView() && this.getSelectedRecords().length > 0) {
            this.copySelectionToDataView([]);
        }
        this.records = [];
    }
    getIdField() {
        return (this.getSchema() && this.getSchema().idField) || 'id';
    }
    getRootDataSource() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getRootDataSource();
        }
        let rootDs = this.parentDataSource;
        while (rootDs && rootDs.parentDataSource) {
            rootDs = rootDs.parentDataSource;
        }
        return rootDs;
    }
    getOriginDataSources() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getOriginDataSources();
        }
        if (!this.getDataSourceJson().originDataSources || this.getDataSourceJson().originDataSources.length === 0) {
            return [];
        }
        return this.getDataSourceJson().originDataSources.asMutable().map(useDs => this.dataSourceManager.getDataSource(useDs.dataSourceId));
    }
    getMainDataSource() {
        var _a;
        if (this.belongToDataSource) {
            return (_a = this.belongToDataSource.belongToDataSource) !== null && _a !== void 0 ? _a : this.belongToDataSource;
        }
        else {
            return this;
        }
    }
    getDataViews() {
        if (this.getMainDataSource() !== this) {
            return [];
        }
        else {
            return this.dataSourceManager.getDataSourcesAsArray().filter(ds => ds.belongToDataSource === this && ds.isDataView);
        }
    }
    getDataView(dataViewId) {
        return this.getDataViews().find(dv => dv.dataViewId === dataViewId);
    }
    /**
     * The data source's query is a data view config as well.
     */
    getDataViewConfig() {
        if (this.isLocal) {
            return this.belongToDataSource.getDataViewConfig();
        }
        if (this.isDataView) {
            return this.getDataSourceJson().dataViews && this.getDataSourceJson().dataViews[this.dataViewId];
        }
        else {
            return this.getDataSourceJson().query;
        }
    }
    getLocalDataSources() {
        if (this.isLocal) {
            return [];
        }
        else {
            return this.dataSourceManager.getDataSourcesAsArray().filter(ds => ds.belongToDataSource === this && ds.isLocal);
        }
    }
    getLocalDataSource(localId) {
        return this.getLocalDataSources().find(dv => dv.localId === localId);
    }
    getAllDerivedDataSources() {
        let dss = [];
        const dvs = this.getDataViews();
        const locals = this.getLocalDataSources();
        dss = dvs.concat(locals);
        dvs.forEach(dv => {
            dss = dss.concat(dv.getLocalDataSources());
        });
        return dss;
    }
    getSaveStatus() {
        var _a;
        return (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[this.id]) === null || _a === void 0 ? void 0 : _a.saveStatus;
    }
    setSaveStatus(status) {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceSaveStatusChanged(this.id, status));
    }
    setListenSelection(listen) {
        this.listenSelection = listen;
    }
    getListenSelection() {
        return this.listenSelection;
    }
    isSelectionView() {
        return this.isDataView && this.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID;
    }
    isLocalViewOfSelectionView() {
        return this.isLocal && this.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID;
    }
    addRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return yield Promise.reject('No record passed in.');
            }
            this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Saving);
            return yield this.doAddRecord(record).then(record => {
                this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Saved);
                return record;
            }, (error) => __awaiter(this, void 0, void 0, function* () {
                this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.SaveError);
                return yield Promise.reject(error);
            }));
        });
    }
    doAddRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getDataSourceJson().isDataInDataSourceInstance) {
                return yield this.doAddRecordToSourceRecords(record);
            }
            else {
                // return this.doAddRecordToAGOLOrPortalSource();
                return yield Promise.reject('Editing source is not ready yet.');
            }
        });
    }
    updateRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.updateRecords([record]);
        });
    }
    updateRecords(records) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!records || records.length === 0) {
                return yield Promise.reject('No records passed in.');
            }
            this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Saving);
            return yield this.doUpdateRecords(records).then(isDone => {
                this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Saved);
                return isDone;
            }, (error) => __awaiter(this, void 0, void 0, function* () {
                this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.SaveError);
                return yield Promise.reject(error);
            }));
        });
    }
    doUpdateRecords(records) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getDataSourceJson().isDataInDataSourceInstance) {
                return yield this.doUpdateRecordsInSourceRecords(records);
            }
            else {
                // return this.doUpdateRecordsInAGOLOrPortalSource();
                return yield Promise.reject('Editing source is not ready yet.');
            }
        });
    }
    deleteRecord(index) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = this.getRecords()[index];
            return yield this.deleteOneRecord(record);
        });
    }
    deleteRecordById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const record = this.getRecordById(id);
            return yield this.deleteOneRecord(record);
        });
    }
    deleteOneRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return yield Promise.reject('No record passed in.');
            }
            this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Saving);
            return yield this.doDeleteOneRecord(record).then(isDone => {
                this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Saved);
                return isDone;
            }, (error) => __awaiter(this, void 0, void 0, function* () {
                this.setSaveStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.SaveError);
                return yield Promise.reject(error);
            }));
        });
    }
    doDeleteOneRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getDataSourceJson().isDataInDataSourceInstance) {
                return yield this.doDeleteOneRecordFromSourceRecords(record);
            }
            else {
                // return this.doDeleteOneRecordFromAGOLOrPortalSource();
                return yield Promise.reject('Editing source is not ready yet.');
            }
        });
    }
    doDeleteOneRecordFromSourceRecords(record) {
        return __awaiter(this, void 0, void 0, function* () {
            this.sourceRecords = this.sourceRecords.filter(r => r.getId() !== record.getId());
            return Promise.resolve(true);
        });
    }
    doAddRecordToSourceRecords(record) {
        return __awaiter(this, void 0, void 0, function* () {
            this.sourceRecords = this.sourceRecords.concat(record);
            return yield Promise.resolve(record);
        });
    }
    doUpdateRecordsInSourceRecords(records) {
        return __awaiter(this, void 0, void 0, function* () {
            records.forEach(r => {
                const index = this.sourceRecords.findIndex(or => or.getId() === r.getId());
                if (index > -1) {
                    this.sourceRecords[index] = r;
                }
            });
            return Promise.resolve(true);
        });
    }
    afterUpdateRecords(records) {
        if (!records || records.filter(r => !!r).length === 0) {
            return;
        }
        this.updateLoadedRecords(this.getMainDataSource(), records);
        this.getMainDataSource().getAllDerivedDataSources().forEach(ds => { this.updateLoadedRecords(ds, records); });
        this.getMainDataSource().addSourceVersion();
    }
    updateLoadedRecords(ds, records) {
        const rs = records.map(r => ds.getRecordById(r.getId()));
        if (rs.filter(r => !!r).length > 0) {
            rs.forEach((r, i) => {
                if (r) {
                    r.setData(records[i].getData());
                    r.setGeometry(records[i].getRawGeometry());
                }
            });
            ds.addVersion();
        }
    }
    afterUpdateRecord(record) {
        if (!record) {
            return;
        }
        this.updateOneLoadedRecord(this.getMainDataSource(), record);
        this.getMainDataSource().getAllDerivedDataSources().forEach(ds => { this.updateOneLoadedRecord(ds, record); });
        this.getMainDataSource().addSourceVersion();
    }
    updateOneLoadedRecord(ds, record) {
        const r = ds.getRecordById(record.getId());
        if (r) {
            r.setData(record.getData());
            r.setGeometry(record.getRawGeometry());
            ds.addVersion();
        }
    }
    afterAddRecord(record) {
        if (!record) {
            return;
        }
        /**
         * It is hard to decide which page to put the new record on and how to handle it after adding filter.
         * To make the update easier, just clear loaded records here.
         */
        this.getMainDataSource().clearRecords();
        this.getMainDataSource().getAllDerivedDataSources().forEach(ds => {
            ds.clearRecords();
        });
        this.getMainDataSource().addSourceVersion();
    }
    afterDeleteRecordById(id) {
        if (!id) {
            return;
        }
        if (this.getMainDataSource().getSelectedRecordIds().includes(id)) {
            this.getMainDataSource().selectRecordsByIds(this.getMainDataSource().getSelectedRecordIds().filter(selectedId => selectedId !== id), this.getMainDataSource().getSelectedRecords().filter(r => r.getId() !== id));
        }
        this.deleteOneLoadedRecordById(this.getMainDataSource(), id);
        this.getMainDataSource().getAllDerivedDataSources().forEach(ds => { this.deleteOneLoadedRecordById(ds, id); });
        this.getMainDataSource().addSourceVersion();
    }
    deleteOneLoadedRecordById(ds, id) {
        const index = ds.getRecords().findIndex(r => (r === null || r === void 0 ? void 0 : r.getId()) === id);
        if (typeof index === 'number' && index > -1) {
            ds.getRecords().splice(index, 1);
            ds.addVersion();
        }
    }
    // protected abstract doAddRecordToAGOLOrPortalSource?(record: DataRecord): Promise<DataRecord>
    // protected abstract doDeleteOneRecordFromAGOLOrPortalSource?(record: DataRecord): Promise<boolean>
    // protected abstract doUpdateRecordsInAGOLOrPortalSource?(records: DataRecord[]): Promise<boolean>
    destroy() { }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/abstract-layer-folder-data-source.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/abstract-layer-folder-data-source.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractLayerFolderDataSource: () => (/* binding */ AbstractLayerFolderDataSource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _abstract_set_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-set-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-set-data-source.ts");
/* harmony import */ var _item_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-mixin */ "./jimu-core/lib/data-sources/base-classes/item-mixin.ts");
/* harmony import */ var _js_api_layer_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-api-layer-mixin */ "./jimu-core/lib/data-sources/base-classes/js-api-layer-mixin.ts");
/* harmony import */ var _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/data-source-json-creator */ "./jimu-core/lib/data-sources/support/data-source-json-creator.ts");
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
 * * Common operations for folder-like services, such as feature service, scene service, map service, group layer, etc, are grouped in this class.
 * please see {@link SupportedLayerServiceTypes} to find supported layer service types.
 */
class AbstractLayerFolderDataSource extends (0,_js_api_layer_mixin__WEBPACK_IMPORTED_MODULE_4__.JSAPILayerMixinImpl)((0,_item_mixin__WEBPACK_IMPORTED_MODULE_3__.ItemMixinImpl)(_abstract_set_data_source__WEBPACK_IMPORTED_MODULE_2__.AbstractSetDataSource)) {
    constructor(options) {
        var _a;
        super(options);
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
        if ((_a = this.layer) === null || _a === void 0 ? void 0 : _a.portalItem) {
            this.setItemInfo(this.layer.portalItem.sourceJSON);
        }
    }
    ready() {
        const _super = Object.create(null, {
            ready: { get: () => super.ready },
            createChildDataSourcesRecursively: { get: () => super.createChildDataSourcesRecursively }
        });
        return this.fetchDataDefinitions().then(() => _super.ready.call(this)).then(() => __awaiter(this, void 0, void 0, function* () {
            const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            if (appConfig.originExbVersion && jimu_core__WEBPACK_IMPORTED_MODULE_0__.semver.lt(appConfig.originExbVersion, '1.6.0')) {
                const childDss = yield _super.createChildDataSourcesRecursively.call(this);
                yield this.upgradeChildDssId(childDss);
            }
        }));
    }
    upgradeChildDssId(childDss) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Before dev1.6, the jimuChildId is generated from layer label (name of layer definition).
             * After dev1.6, the jimuChildId is generated from layer id (id of JS API layer or layer definition).
             * The following part is to update jimuChildId and id of child data sources to be compatible with the version before dev1.6.
             */
            let appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            const selectionViewReadyPromises = [];
            const updateUseDataSource = (u, id, newId) => {
                if (u === null || u === void 0 ? void 0 : u.dataSourceId) {
                    u.dataSourceId = u.dataSourceId.replace(id, newId);
                }
                /**
                * Some use data sources in text widget may not have main data source id.
                * It seems to be a bug of text widget. Will fix the bug in another issue.
                */
                if (u === null || u === void 0 ? void 0 : u.mainDataSourceId) {
                    u.mainDataSourceId = u.mainDataSourceId.replace(id, newId);
                }
                return u;
            };
            const needUpdateUseDs = (u, idFromLabel) => {
                if (u === null || u === void 0 ? void 0 : u.mainDataSourceId) {
                    return u.mainDataSourceId === idFromLabel;
                }
                else if (u === null || u === void 0 ? void 0 : u.dataSourceId) {
                    return u.dataSourceId.split('-dataView_')[0] === idFromLabel;
                }
                else {
                    return false;
                }
            };
            childDss.forEach(childDs => {
                var _a, _b, _c, _d, _e, _f, _g;
                if (childDs) {
                    /**
                    * 1. Get id from layer label.
                    */
                    let idFromLabel = '';
                    let ds = childDs;
                    const idFromLabelToIdFromId = [];
                    while (ds) {
                        const isRootDs = !ds.parentDataSource;
                        // If do not have url, should be feature collection item.
                        const isSingleLayerDs = (!ds.isDataSourceSet && !ds.getDataSourceJson().url) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isSupportedSingleArcGISLayerService(ds.getDataSourceJson().url);
                        const isChildDsOfMap = !!((_a = ds.parentDataSource) === null || _a === void 0 ? void 0 : _a.map);
                        let jimuChildIdFromLabel;
                        if (isRootDs) {
                            jimuChildIdFromLabel = ds.id;
                        }
                        else if (isSingleLayerDs && !isChildDsOfMap) {
                            /**
                            * Single layer ds used to use name of layer definition as jimuChildId, which is need to be updated (should use id of layer definition).
                            * Child ds of map uses JS API layer id as jimuChildId, which is expected.
                            */
                            const layerDefinition = ds.getLayerDefinition ? ds.getLayerDefinition() : (_c = (_b = ds).getServiceDefinition) === null || _c === void 0 ? void 0 : _c.call(_b);
                            jimuChildIdFromLabel = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils._getFixedLayerIdByLayerDefinition(layerDefinition) || ds.jimuChildId;
                        }
                        else if (!isSingleLayerDs && !isChildDsOfMap) {
                            jimuChildIdFromLabel = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(ds.getDataSourceJson().url);
                        }
                        else {
                            jimuChildIdFromLabel = ds.jimuChildId;
                        }
                        /**
                        * One group may contain same layer services (can do it in map viewer).
                        * To make data source id of the same layer services different, we add `_[repeat times]` to the end of the data source id.
                        *
                        * For example, group 1 has three same layer services (id of the layer service is 0), the data source id of the three layer services will be dataSource_1-group1-0, dataSource_1-group1-0_1 and dataSource_1-group1-0_2.
                      */
                        if (!isRootDs && !isChildDsOfMap && ds.getDataSourceJson().url && ((_g = (_f = (_e = (_d = ds.parentDataSource.layer) === null || _d === void 0 ? void 0 : _d.layers) === null || _e === void 0 ? void 0 : _e.toArray) === null || _f === void 0 ? void 0 : _f.call(_e)) === null || _g === void 0 ? void 0 : _g.filter(l => jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(l) === ds.getDataSourceJson().url).length) > 1) {
                            const chilLayersFromSameService = ds.parentDataSource.layer.layers.toArray().filter(l => jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(l) === ds.getDataSourceJson().url);
                            const repeatTimes = chilLayersFromSameService.findIndex(l => l.id === ds.jimuChildId);
                            if (repeatTimes > 0) {
                                jimuChildIdFromLabel = `${jimuChildIdFromLabel}_${repeatTimes}`;
                            }
                        }
                        idFromLabel = idFromLabel ? `${jimuChildIdFromLabel}-${idFromLabel}` : jimuChildIdFromLabel;
                        idFromLabelToIdFromId.unshift({ jimuChildIdFromLabel, jimuChildIdFromId: ds.jimuChildId || ds.id });
                        ds = ds.parentDataSource;
                    }
                    /**
                    * 2. Update app config - replace id from layer label with id from layer id.
                    */
                    // 2.1 Update widgets.
                    Object.keys(appConfig.widgets || {}).forEach(widgetId => {
                        var _a;
                        if ((_a = appConfig.widgets[widgetId].useDataSources) === null || _a === void 0 ? void 0 : _a.some(u => needUpdateUseDs(u, idFromLabel))) {
                            const widgetJson = appConfig.widgets[widgetId].asMutable({ deep: true });
                            widgetJson.useDataSources = widgetJson.useDataSources.map(u => updateUseDataSource(u, idFromLabel, childDs.id));
                            if (widgetJson.config) {
                                widgetJson.config = JSON.parse(JSON.stringify(widgetJson.config).replace(new RegExp(idFromLabel, 'g'), childDs.id));
                            }
                            appConfig = appConfig.setIn(['widgets', widgetId], widgetJson);
                        }
                    });
                    // 2.2 Update data sources.
                    Object.keys(appConfig.dataSources || {}).forEach(dsId => {
                        var _a;
                        // 2.2.1 Update output data sources.
                        if ((_a = appConfig.dataSources[dsId].originDataSources) === null || _a === void 0 ? void 0 : _a.some(u => needUpdateUseDs(u, idFromLabel))) {
                            const dsJson = appConfig.dataSources[dsId].asMutable({ deep: true });
                            dsJson.originDataSources = dsJson.originDataSources.map(u => updateUseDataSource(u, idFromLabel, childDs.id));
                            appConfig = appConfig.setIn(['dataSources', dsId], dsJson);
                        }
                        // 2.2.2 Update added data sources.
                        const pathToChildDsJson = [];
                        idFromLabelToIdFromId.forEach((id, index) => {
                            pathToChildDsJson.push(id.jimuChildIdFromLabel);
                            if (index !== idFromLabelToIdFromId.length - 1) {
                                pathToChildDsJson.push('childDataSourceJsons');
                            }
                        });
                        if (appConfig.dataSources.getIn(pathToChildDsJson)) {
                            const ids = idFromLabelToIdFromId.slice().reverse();
                            if (ids[0].jimuChildIdFromId !== ids[0].jimuChildIdFromLabel) {
                                const pathToParentDsJson = pathToChildDsJson.slice(0, pathToChildDsJson.length - 2);
                                const parentDsJson = appConfig.dataSources.getIn(pathToParentDsJson).asMutable({ deep: true });
                                parentDsJson.childDataSourceJsons[ids[0].jimuChildIdFromId] = parentDsJson.childDataSourceJsons[ids[0].jimuChildIdFromLabel];
                                parentDsJson.childDataSourceJsons[ids[0].jimuChildIdFromId].id = childDs.id;
                                delete parentDsJson.childDataSourceJsons[ids[0].jimuChildIdFromLabel];
                                appConfig = appConfig.setIn(['dataSources'].concat(pathToParentDsJson), parentDsJson);
                            }
                        }
                    });
                    // 2.3 Update message actions.
                    Object.keys(appConfig.messageConfigs || {}).forEach(messageId => {
                        var _a;
                        const hasActionUseDsWhichIdIsFromLabel = (_a = appConfig.messageConfigs[messageId].actions) === null || _a === void 0 ? void 0 : _a.some(a => { var _a, _b, _c, _d, _e; return ((_a = a.useDataSources) === null || _a === void 0 ? void 0 : _a.some(u => (u === null || u === void 0 ? void 0 : u.mainDataSourceId) === idFromLabel)) || ((_c = (_b = a.config) === null || _b === void 0 ? void 0 : _b.actionUseDataSource) === null || _c === void 0 ? void 0 : _c.mainDataSourceId) === idFromLabel || ((_e = (_d = a.config) === null || _d === void 0 ? void 0 : _d.messageUseDataSource) === null || _e === void 0 ? void 0 : _e.mainDataSourceId) === idFromLabel; });
                        if (hasActionUseDsWhichIdIsFromLabel) {
                            const messageJson = appConfig.messageConfigs[messageId].asMutable({ deep: true });
                            messageJson.actions = messageJson.actions.map(a => {
                                var _a, _b;
                                if (a.useDataSources) {
                                    a.useDataSources = a.useDataSources.map(u => updateUseDataSource(u, idFromLabel, childDs.id));
                                }
                                if ((_a = a.config) === null || _a === void 0 ? void 0 : _a.actionUseDataSource) {
                                    a.config.actionUseDataSource = updateUseDataSource(a.config.actionUseDataSource, idFromLabel, childDs.id);
                                }
                                if ((_b = a.config) === null || _b === void 0 ? void 0 : _b.messageUseDataSource) {
                                    a.config.messageUseDataSource = updateUseDataSource(a.config.messageUseDataSource, idFromLabel, childDs.id);
                                }
                                return a;
                            });
                            appConfig = appConfig.setIn(['messageConfigs', messageId], messageJson);
                        }
                    });
                    /**
                    * 3. Update data source info - merge data source info which id is from label and current data source info.
                    */
                    if (!childDs.isDataSourceSet && Object.keys((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo).some(dsId => dsId.includes(idFromLabel))) {
                        Object.keys((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo).forEach(dsId => {
                            if (dsId.includes(idFromLabel)) {
                                const prevDsId = dsId;
                                const newDsId = dsId.replace(idFromLabel, childDs.id);
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.updateDataSourceInfo(childDs.id, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[prevDsId].merge((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo[newDsId] || {})));
                            }
                        });
                        if (childDs.getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID)) {
                            selectionViewReadyPromises.push(childDs.getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID).ready());
                        }
                    }
                }
            });
            if ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig !== appConfig) {
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.appConfigChanged(appConfig));
                const rootDs = this.getRootDataSource() || this;
                const rootDsJson = appConfig.dataSources[rootDs.id];
                if (rootDsJson) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                        // Update data source json in data source instance.
                        this.dataSourceManager.updateDataSourceByDataSourceJson(rootDs, rootDsJson);
                    });
                }
            }
            return Promise.allSettled(selectionViewReadyPromises).then();
        });
    }
    /**
     * The data can be defined in service, item data.
     */
    fetchDataDefinitions() {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchServiceDefinitionPromise = this.fetchServiceDefinition().then(() => {
                var _a, _b;
                if (((_b = (_a = this.serviceDefinition) === null || _a === void 0 ? void 0 : _a.tables) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    this.serviceDefinition.tables = this.serviceDefinition.tables.map(t => (Object.assign(Object.assign({}, t), { type: _interfaces__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.Table })));
                }
            });
            const sourceDataPromises = [fetchServiceDefinitionPromise];
            if (!this.layer && !this.url && this.itemId) { // mulitple-layers feature collection item or group layer item
                sourceDataPromises.push(this.fetchItemData(), this.fetchItemInfo());
            }
            yield Promise.all(sourceDataPromises);
        });
    }
    fetchServiceDefinition() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.layer) { // from map item
                if (this.layer.loadAll) {
                    yield this.layer.loadAll();
                }
                else {
                    yield this.layer.load();
                }
                this.updateServiceDefinitionByLayer();
                return this.getServiceDefinition();
            }
            else if (this.url) { // from service url
                return this.fetchServiceDefinitionByUrl();
            }
            return Promise.resolve(null);
        });
    }
    fetchSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            const dss = this.getChildDataSources();
            const label = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getOriginDataLabel(this);
            let schema = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ childSchemas: {}, label });
            dss.forEach((ds, i) => {
                const layerSchema = ds.getFetchedSchema();
                schema = schema.setIn(['childSchemas', ds.jimuChildId], layerSchema);
            });
            return Promise.resolve(schema);
        });
    }
    getServiceDefinition() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getServiceDefinition();
        }
        return this.serviceDefinition;
    }
    getItemInfo() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getItemInfo();
        }
        return super.getItemInfo();
    }
    createChildDataSourceById(childDsId, jimuChildId, childId) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.createChildDataSourceOptionsById(childDsId, jimuChildId, childId);
            if (!options) {
                return Promise.reject(new _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceError(childDsId, 'Do not support this type of data.'));
            }
            const childDs = yield this.dataSourceManager.createDataSource(options);
            this.updateChildDatasourcesGDBVersion([childDs]);
            return childDs;
        });
    }
    createChildDataSourceOptionsByIdFromUrl(childDsId, jimuChildId, childId) {
        if (this.url) {
            const layerInfo = this.findLayerDefinitionInfo(childId);
            if (!(layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.url)) {
                return null;
            }
            return this.createChildDataSourceOptionsByLayerDefinition(layerInfo.partailLayerDefinition, layerInfo.url, jimuChildId, childDsId, layerInfo.order);
        }
        return null;
    }
    createChildDataSourceOptionsByLayerDefinition(layerDefinition, url, jimuChildId, childDsId, order) {
        const dsJson = this.createChildDataSourceJsonByLayerDefinition(layerDefinition, url, jimuChildId, childDsId);
        if (dsJson) {
            return {
                id: childDsId,
                dataSourceJson: dsJson,
                parentDataSource: this,
                jimuChildId,
                order
            };
        }
        return null;
    }
    createChildDataSourceJsonByLayerDefinition(layerDefinition, url, jimuChildId, childDsId) {
        var _a, _b, _c, _d, _e, _f;
        if (!layerDefinition || !childDsId) {
            return null;
        }
        // _jimuChildIdFromLabel is to support data source before dev1.16, see upgradeChildDssId for more details.
        const _jimuChildIdFromLabel = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils._getFixedLayerIdByLayerDefinition(layerDefinition) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(url);
        const schemaInConfig = ((_b = (_a = this.getDataSourceJson().schema) === null || _a === void 0 ? void 0 : _a.childSchemas) === null || _b === void 0 ? void 0 : _b[jimuChildId]) || ((_d = (_c = this.getDataSourceJson().schema) === null || _c === void 0 ? void 0 : _c.childSchemas) === null || _d === void 0 ? void 0 : _d[_jimuChildIdFromLabel]);
        const dsJsonInConfig = ((_e = this.getDataSourceJson().childDataSourceJsons) === null || _e === void 0 ? void 0 : _e[jimuChildId]) || ((_f = this.getDataSourceJson().childDataSourceJsons) === null || _f === void 0 ? void 0 : _f[_jimuChildIdFromLabel]);
        let dsJson = _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_5__.createDataSourceJsonByLayerDefinition(childDsId, layerDefinition, url, dsJsonInConfig, schemaInConfig);
        if (dsJson) {
            if (this.portalUrl) {
                dsJson = dsJson.set('portalUrl', this.portalUrl);
            }
            if (this.itemId) {
                dsJson = dsJson.set('itemId', this.itemId);
            }
        }
        return dsJson;
    }
    findLayerDefinitionInfo(childId) {
        const layerDefs = this.getPartialLayerAndTableDefinitions().concat(this.getPartialSubLayerDefinitions());
        let layerInfo;
        layerDefs.some((layerDef, i) => {
            const layerUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(this.url, true, layerDef);
            const layerSourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceSourceUrl(layerUrl);
            if (this.getChildIdByLayerDefinition(layerDef, layerSourceUrl) === childId) {
                layerInfo = {
                    proxyUrl: layerUrl,
                    url: layerSourceUrl,
                    partailLayerDefinition: layerDef,
                    order: i
                };
                return true;
            }
            return false;
        });
        return layerInfo;
    }
    updateServiceDefinitionByLayer() {
        var _a, _b;
        if ((_a = this.layer) === null || _a === void 0 ? void 0 : _a.sourceJSON) {
            this.serviceDefinition = this.layer.sourceJSON;
        }
        else {
            this.serviceDefinition = {
                name: (_b = this.layer) === null || _b === void 0 ? void 0 : _b.title
            };
        }
    }
    fetchServiceDefinitionByUrl() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getServiceDefinition()) {
                return this.getServiceDefinition();
            }
            if (this.url) {
                const definition = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchServiceInfo(this.url).then(res => res.definition);
                if (!definition) {
                    return null;
                }
                if (!definition.name) {
                    definition.name = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(this.getDataSourceJson().url);
                }
                // Sub layer doesn't have type.
                if ((_a = definition.subLayers) === null || _a === void 0 ? void 0 : _a.some(l => !l.type)) {
                    const allLayerDefs = ((_b = this.parentDataSource) === null || _b === void 0 ? void 0 : _b.getServiceDefinition) ? (_c = this.parentDataSource) === null || _c === void 0 ? void 0 : _c.getServiceDefinition() : (yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchServiceInfo(`${jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(this.url, false)}/layers`).then(res => res.definition));
                    definition.subLayers = definition.subLayers.map(l => {
                        var _a;
                        const def = (_a = allLayerDefs === null || allLayerDefs === void 0 ? void 0 : allLayerDefs.layers) === null || _a === void 0 ? void 0 : _a.find(allDef => allDef.id === l.id);
                        return Object.assign(Object.assign({}, l), def);
                    });
                }
                this.serviceDefinition = definition;
                return this.serviceDefinition;
            }
            return Promise.reject(new _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceError(this.id, 'Failed to fetch service definition, need url.'));
        });
    }
    getPartialSubLayerDefinitions() {
        var _a;
        // The layer definition in the server definition is missing some fields, not a complete layer definition.
        return ((_a = this.getServiceDefinition()) === null || _a === void 0 ? void 0 : _a.subLayers) || [];
    }
    getPartialLayerAndTableDefinitions() {
        var _a, _b;
        // The layer definition in the server definition is missing some fields, not a complete layer definition.
        const layers = ((_a = this.getServiceDefinition()) === null || _a === void 0 ? void 0 : _a.layers) || [];
        const tables = ((_b = this.getServiceDefinition()) === null || _b === void 0 ? void 0 : _b.tables) || [];
        return layers.concat(tables);
    }
    getChildIdByLayerDefinition(layerDefinition, url) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFixedLayerIdByLayerDefinition(layerDefinition) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(url);
    }
    getChildIdByLayer(layer) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFixedLayerIdByLayer(layer) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(layer));
    }
    getChildIdBySubLayer(subLayer) {
        var _a, _b;
        /**
         * In most cases, sublayer ID is same with the layer definition ID, so we used to create child data source by sublayer's layer definition.
         * Now, we want to change back to use sublayer, but we found issue #14594, #16588. In the issue's sample map, the sublayer ID is different with layer definition's ID.
         * To make previous app work, we keep using sublayer's layer definition.
         */
        const fixedSubLayer = Object.assign(Object.assign({}, subLayer), { id: (_b = (_a = subLayer === null || subLayer === void 0 ? void 0 : subLayer.source) === null || _a === void 0 ? void 0 : _a.mapLayerId) !== null && _b !== void 0 ? _b : subLayer.id });
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFixedLayerIdByLayer(fixedSubLayer) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(subLayer));
    }
    getChildIdsByUrl() {
        return this.getPartialLayerAndTableDefinitions().concat(this.getPartialSubLayerDefinitions()).map(l => this.getChildIdByLayerDefinition(l, jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(this.getDataSourceJson().url, true, l)));
    }
    getDataSourceIdByLayer(layerOrSubLayer) {
        let childId = '';
        if (layerOrSubLayer.declaredClass === 'esri.layers.support.Sublayer') {
            childId = this.getChildIdBySubLayer(layerOrSubLayer);
        }
        else {
            childId = this.getChildIdByLayer(layerOrSubLayer);
        }
        return this.getChildDataSourceId(childId);
    }
    updateChildDatasourcesGDBVersion(childDss) {
        if (this.getInfo().gdbVersion) {
            childDss.forEach(ds => {
                if (ds.type === _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.FeatureLayer) {
                    ds.changeGDBVersion(this.getInfo().gdbVersion);
                }
            });
        }
    }
    getGDBVersion() {
        return this.getInfo().gdbVersion;
    }
    changeGDBVersion(gdbVersion) {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.changeDataSourceGDBVersion(this.id, gdbVersion));
        this.updateChildDatasourcesGDBVersion(this.getAllChildDataSources());
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.jimuHistory.changeQueryObjectByDataSourceGDBVersion(this.id, gdbVersion);
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/abstract-loadable-data-source.ts":
/*!**********************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/abstract-loadable-data-source.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractLoadableDataSource: () => (/* binding */ AbstractLoadableDataSource)
/* harmony export */ });
/* harmony import */ var _abstract_data_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-data-source.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
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
class AbstractLoadableDataSource extends _abstract_data_source__WEBPACK_IMPORTED_MODULE_0__.AbstractDataSource {
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Loading);
            return yield this.doLoad().then(records => {
                this.records = records;
                this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Loaded);
                return this.records;
            });
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/abstract-queriable-data-source.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/abstract-queriable-data-source.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractQueriableDataSource: () => (/* binding */ AbstractQueriableDataSource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _abstract_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-data-source.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _support_capabilities_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/capabilities-impl */ "./jimu-core/lib/data-sources/support/capabilities-impl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




const { DEFAULT_QUERY_PAGE_SIZE, DATA_VIEW_ID_FOR_NO_SELECTION, OUTPUT_DATA_VIEW_ID, SELECTION_DATA_VIEW_ID } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS;
class AbstractQueriableDataSource extends _abstract_data_source__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource {
    constructor(options) {
        super(options);
        /**
         * Data will be cached here, not this.records.
         *
         * When selectRecordById, some selected records may be put in this.records, so they are not in the pages.
         */
        this.pages = {};
        this.pagePromises = {};
        /**
         * Promises to load missing fields for every page.
         * The promises contain a specail page (its id is variable SELECTION_DATA_VIEW_ID), it is the promise to load missing fields for source records of selection view.
         */
        this.loadMissingFieldsByPagePromises = {};
        this.throttleQueryRecordsByIdWithCurrentQueryParams = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.throttle(this.queryRecordsByIdWithCurrentQueryParams, 200);
        this.setCapabilities(new _support_capabilities_impl__WEBPACK_IMPORTED_MODULE_3__.CapabilitiesImpl({}));
        this.url = this.getDataSourceJson().url;
        this.isSqlCaseSensitive = this.getDataSourceJson().isDataInDataSourceInstance ? true : !jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isAGOLHostedService(this.getDataSourceJson().url);
        const isBelongToDsReady = options.belongToDataSource && options.belongToDataSource.getStatus() !== _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady;
        if (this.getDataSourceJson().isOutputFromWidget && !isBelongToDsReady) {
            /**
             * If is output data source, the initial data status is not ready, widget will change the status to unloaded when it is ready to do query.
             */
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady);
            this.setCountStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady);
        }
        else {
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Unloaded);
            this.setCountStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Unloaded);
        }
    }
    ready() {
        /**
         * If current data source is selection view, load selected records in data source info.
         * If there are selected record ids in URL, will set them to data source info, should load these selected records here.
         * This will make sure selected record ids in data source info and records in selection view match.
         */
        if (this.isSelectionView()) {
            const mainDsId = this.getMainDataSource().id;
            const dsInfos = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().dataSourcesInfo;
            let allSelectedRecordIds = [];
            const allSelectOptions = {};
            dsInfos && Object.keys(dsInfos).forEach(dsId => {
                var _a, _b, _c, _d;
                // Derived data view objects are not created, get derived data source info by id here.
                if (dsId === mainDsId || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isDerivedFrom(mainDsId, dsId)) {
                    if ((_b = (_a = dsInfos[dsId]) === null || _a === void 0 ? void 0 : _a.selectedIds) === null || _b === void 0 ? void 0 : _b.length) {
                        allSelectedRecordIds = allSelectedRecordIds.concat(dsInfos[dsId].selectedIds.asMutable());
                    }
                    if ((_d = (_c = dsInfos[dsId]) === null || _c === void 0 ? void 0 : _c.selectOptions) === null || _d === void 0 ? void 0 : _d.widgetId) {
                        allSelectOptions[dsId] = dsInfos[dsId].selectOptions.asMutable({ deep: true });
                    }
                }
            });
            allSelectedRecordIds = Array.from(new Set(allSelectedRecordIds));
            const querySelectedRecords = () => {
                /**
                 * If selected records are empty, no need to load.
                 */
                if (allSelectedRecordIds.length === 0 && Object.keys(allSelectOptions).length === 0) {
                    return Promise.resolve({});
                }
                const queryByIdsPromise = allSelectedRecordIds.length > 0
                    ? this.queryRecordsByIdWithCurrentQueryParams(allSelectedRecordIds, this.getMainDataSource(), { returnGeometry: true }).then(res => {
                        var _a;
                        this.getMainDataSource().selectRecordsByIds((_a = res.records) === null || _a === void 0 ? void 0 : _a.map(r => r.getId()), res.records);
                    })
                    : null;
                const queryBySelectOptionsPromises = Object.keys(allSelectOptions).map(dsId => {
                    var _a, _b, _c;
                    if ((_b = (_a = allSelectOptions[dsId]) === null || _a === void 0 ? void 0 : _a.ids) === null || _b === void 0 ? void 0 : _b.length) {
                        // When select by id, we query these ids by main data source, no need to consider data view settings.
                        return this.queryRecordsByIdWithCurrentQueryParams(allSelectOptions[dsId].ids, this.getMainDataSource(), { returnGeometry: true }).then(res => {
                            this.getMainDataSource().selectRecords(Object.assign(Object.assign({}, allSelectOptions[dsId]), { records: res.records }));
                        });
                    }
                    else if ((_c = allSelectOptions[dsId]) === null || _c === void 0 ? void 0 : _c.queryParams) {
                        // When select by query params, we need to consider data view settings.
                        const dataViewId = dsId === mainDsId ? null : dsId.replace(`${mainDsId}-`, '');
                        const ds = dataViewId ? this.dataSourceManager.createDataView(this.getMainDataSource(), dataViewId) : this.getMainDataSource();
                        return ds === null || ds === void 0 ? void 0 : ds.queryAll(Object.assign(Object.assign({}, allSelectOptions[dsId].queryParams), { returnGeometry: true })).then(res => {
                            ds.selectRecords(Object.assign(Object.assign({}, allSelectOptions[dsId]), { records: res.records }));
                        });
                    }
                    return null;
                });
                this.pendingPromiseToQuerySelectedRecordsPresetBeforeDsReady = Promise.allSettled([queryByIdsPromise, ...queryBySelectOptionsPromises].filter(p => !!p)).then(() => {
                    this.getMainDataSource().addSourceVersion();
                }).finally(() => {
                    this.pendingPromiseToQuerySelectedRecordsPresetBeforeDsReady = null;
                });
            };
            /**
             * If data is saved in data source instance, will not query selected records until the first time set source records.
             * If data is in remote, will query selected records now.
             */
            if (this.getMainDataSource().getDataSourceJson().isDataInDataSourceInstance) {
                this.getMainDataSource().setOnceSetSourceRecords(querySelectedRecords);
            }
            else {
                querySelectedRecords();
            }
            return Promise.resolve({});
        }
        else if (this.isDataView && this.dataViewId === DATA_VIEW_ID_FOR_NO_SELECTION) {
            /**
             * If current data source is no_selection view, load records.
             * We load no_selection view in framework.
             */
            return Promise.allSettled([
                this.load({ returnGeometry: true }, { widgetId: DATA_VIEW_ID_FOR_NO_SELECTION }),
                this.loadCount({}, { widgetId: DATA_VIEW_ID_FOR_NO_SELECTION })
            ]).then(() => {
                var _a, _b, _c;
                // If selected record id is empty, should use no_selection view to do query.
                if (this.getMainDataSource().getSelectedRecordIds().filter(id => !!id).length === 0) {
                    // Clear selection and let other widgets / components to know selection view is updated.
                    (_a = this.getMainDataSource().getDataView(SELECTION_DATA_VIEW_ID)) === null || _a === void 0 ? void 0 : _a.clearRecords();
                    (_c = (_b = this.getMainDataSource().getDataView(SELECTION_DATA_VIEW_ID)) === null || _b === void 0 ? void 0 : _b.getAllDerivedDataSources()) === null || _c === void 0 ? void 0 : _c.forEach(ds => {
                        ds === null || ds === void 0 ? void 0 : ds.clearRecords();
                    });
                }
            });
        }
        else {
            return Promise.resolve({});
        }
    }
    getCurrentQueryParams(options) {
        var _a, _b;
        const runtimeQuery = this.getRuntimeQueryParams(((_a = options === null || options === void 0 ? void 0 : options.exclude) === null || _a === void 0 ? void 0 : _a.dataSourceId) === this.id ? (_b = options === null || options === void 0 ? void 0 : options.exclude) === null || _b === void 0 ? void 0 : _b.widgetId : null);
        return this.getCurrentQueryParamsByQuery(runtimeQuery, options);
    }
    getRuntimeQueryParams(excludeWidgetId) {
        var _a;
        const widgetQueries = excludeWidgetId ? (_a = this.getInfo().widgetQueries) === null || _a === void 0 ? void 0 : _a.without(excludeWidgetId) : this.getInfo().widgetQueries;
        return this.getMergedWidgetQueries(widgetQueries);
    }
    getCurrentQueryParamsByQuery(runtimeQuery, options) {
        let query;
        if (this.isLocal) { // local ds has no config query
            query = this.mergeQueryParams(this.belongToDataSource.getCurrentQueryParams(options), runtimeQuery);
        }
        else if (this.isDataView) {
            query = this.mergeQueryParams(this.getConfigQueryParams(), runtimeQuery);
            /**
             * Selection view is always case-sensitive since it is a client-side layer, main data source may be case-insensitive.
             * Use current data view to get correct SQL clause.
             */
            query = this.mergeQueryParams(this.getMainDataSource().getCurrentQueryParams(Object.assign(Object.assign({}, options), { dataSourceToFormatSql: this })), query);
        }
        else {
            query = this.mergeQueryParams(this.getConfigQueryParams(), runtimeQuery);
            query = this.mergeQueryParams(this.getRemoteQueryParams(), query);
        }
        return query;
    }
    getMergedWidgetQueries(widgetQueries) {
        let widgetIds = (widgetQueries && Object.keys(widgetQueries)) || [];
        widgetIds = widgetIds.sort((a, b) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }));
        return this.mergeQueryParams(...widgetIds.map(widgetId => widgetQueries[widgetId]));
    }
    getCurrentQueryId() {
        return this.lastQueryId;
    }
    getRealQueryParams(query, flag, options) {
        let realQuery;
        if (flag === 'query') {
            if (options && options.scope) {
                if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InAllData) {
                    realQuery = query;
                }
                else if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InRemoteConfigView) {
                    realQuery = this.mergeQueryParams(this.getRemoteQueryParams(), query);
                }
                else if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InConfigView) {
                    realQuery = this.mergeQueryWithConfigQuery(query);
                    realQuery = this.mergeQueryParams(this.getRemoteQueryParams(), realQuery);
                }
                else if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InRuntimeView) {
                    realQuery = this.mergeQueryParams(this.getCurrentQueryParams({ exclude: options.excludeQuery, dataSourceToFormatSql: options.dataSourceToFormatSql }), query);
                }
                else {
                    realQuery = query;
                }
            }
            else { // no scope, same as InRuntimeView
                realQuery = this.mergeQueryParams(this.getCurrentQueryParams({ exclude: options === null || options === void 0 ? void 0 : options.excludeQuery, dataSourceToFormatSql: options === null || options === void 0 ? void 0 : options.dataSourceToFormatSql }), query);
            }
        }
        else { // for load
            if (!options || !options.widgetId) {
                console.error('Please pass widget id for load.');
                return null;
            }
            const getQueryForLoadRuntime = () => {
                let newQuery;
                let widgetQueries = this.getInfo().widgetQueries || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                if (options === null || options === void 0 ? void 0 : options.excludeQuery) {
                    widgetQueries = widgetQueries.without(options.excludeQuery.widgetId);
                }
                widgetQueries = widgetQueries.set(options.widgetId, query);
                newQuery = this.getMergedWidgetQueries(widgetQueries);
                newQuery = this.getCurrentQueryParamsByQuery(newQuery, { exclude: options.excludeQuery, dataSourceToFormatSql: options.dataSourceToFormatSql });
                return newQuery;
            };
            if (options && options.scope) {
                if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InAllData) {
                    realQuery = query;
                }
                else if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InRemoteConfigView) {
                    realQuery = this.mergeQueryParams(this.getRemoteQueryParams(), query);
                }
                else if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InConfigView) {
                    realQuery = this.mergeQueryWithConfigQuery(query);
                    realQuery = this.mergeQueryParams(this.getRemoteQueryParams(), realQuery);
                }
                else if (options.scope === _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InRuntimeView) {
                    realQuery = getQueryForLoadRuntime();
                }
                else {
                    realQuery = query;
                }
            }
            else {
                realQuery = getQueryForLoadRuntime();
            }
        }
        return realQuery;
    }
    mergeQueryWithConfigQuery(query) {
        let newQuery;
        if (this.isLocal) {
            if (this.belongToDataSource.isDataView) {
                newQuery = this.mergeQueryParams(this.belongToDataSource.getConfigQueryParams(), query);
                newQuery = this.mergeQueryParams(this.getMainDataSource().getConfigQueryParams(), newQuery);
            }
            else {
                newQuery = this.mergeQueryParams(this.getConfigQueryParams(), query);
            }
        }
        else if (this.isDataView) {
            newQuery = this.mergeQueryParams(this.getConfigQueryParams(), query);
            newQuery = this.mergeQueryParams(this.getMainDataSource().getConfigQueryParams(), newQuery);
        }
        else {
            newQuery = this.mergeQueryParams(this.getConfigQueryParams(), query);
        }
        return newQuery;
    }
    updateQueryParams(query, widgetId) {
        var _a;
        query = this.getQueryWithoutPage(query);
        if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(query || {}, ((_a = this.getInfo().widgetQueries) === null || _a === void 0 ? void 0 : _a[widgetId]) || {})) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.updateWidgetQuery(this.id, widgetId, query));
            /**
             * We update selection info and load selection view in framework.
             *
             * If query params of selection view is changed, load selection view (selection info will be updated after load).
             * Else, Check and update selection info of data sources which are derived from the current data source.
             */
            if (this.isSelectionView()) {
                this.load({ returnGeometry: true }, { widgetId: SELECTION_DATA_VIEW_ID });
                this.loadCount({}, { widgetId: SELECTION_DATA_VIEW_ID });
            }
            else {
                this.handleSelectionOnQueryParamChanges();
            }
        }
    }
    getQueryPageSize() {
        var _a, _b, _c;
        const configuredPageSize = ((_a = this.getDataViewConfig()) === null || _a === void 0 ? void 0 : _a.pageSize) || DEFAULT_QUERY_PAGE_SIZE;
        const serviceMaxPageSize = ((_c = (_b = this.getCapabilities()) === null || _b === void 0 ? void 0 : _b.getQueryCapabilities()) === null || _c === void 0 ? void 0 : _c.maxPageSize) || Infinity;
        return Math.min(configuredPageSize, serviceMaxPageSize);
    }
    getMaxRecordCount() {
        var _a;
        return ((_a = this.getDataViewConfig()) === null || _a === void 0 ? void 0 : _a.maximum) || null;
    }
    getQueryWithoutPage(query) {
        if (!query) {
            return null;
        }
        const { pageSize, page } = query, q = __rest(query, ["pageSize", "page"]);
        return q;
    }
    checkClearLocalCache(query, lastQuery, options) {
        const queryWithoutPage = this.getQueryWithoutPage(query);
        const realQueryWithoutPage = this.getRealQueryParams(queryWithoutPage, 'load', options);
        const realQueryWithoutPageOrUsedFields = this.applyUsedFields(realQueryWithoutPage, '*');
        const lastQueryWithoutPageOrUsedFields = this.applyUsedFields(lastQuery, '*');
        const refresh = options.refresh || this.getInfo().needRefresh;
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(realQueryWithoutPageOrUsedFields, lastQueryWithoutPageOrUsedFields) && !refresh) {
            return false;
        }
        else {
            /**
             * If needRefresh is true, only need to clear the cache and query new results once.
             */
            if (this.getInfo().needRefresh) {
                this.setNeedRefresh(false);
            }
            return true;
        }
    }
    selectRecords(options, signal, progressCallback) {
        const _super = Object.create(null, {
            selectRecords: { get: () => super.selectRecords }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.clearPendingSelect();
            if ((options === null || options === void 0 ? void 0 : options.records) || (options === null || options === void 0 ? void 0 : options.ids)) {
                const result = yield _super.selectRecords.call(this, options);
                return Promise.resolve(Object.assign(Object.assign({}, result), { queryParams: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(options === null || options === void 0 ? void 0 : options.queryParams) }));
            }
            else if (options === null || options === void 0 ? void 0 : options.queryParams) {
                const controller = new AbortController();
                if (signal) {
                    // Abort the query process whenever the input signal is aborted.
                    signal.onabort = e => { controller.abort(); };
                }
                this.abortControllerOfPendingPromiseToQuerySelectedRecordsBySelectOptions = controller;
                return this.queryAll(Object.assign(Object.assign({}, options.queryParams), { returnGeometry: true }), this.abortControllerOfPendingPromiseToQuerySelectedRecordsBySelectOptions.signal, progressCallback).then(result => {
                    /**
                     * Select the query result if -
                     * 1. the query process is completed, or,
                     * 2. is aborted by the input signal
                     * That is to say, do not select the query result if the query process is aborted by another select.
                     */
                    if (!result.isAborted || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
                        _super.selectRecords.call(this, Object.assign(Object.assign({}, options), { records: result.records }));
                    }
                    return result;
                }).catch((err) => {
                    console.error('Failed to select by options. ', err);
                    return { records: [], queryParams: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(options.queryParams) };
                });
            }
            return Promise.resolve({ records: [], queryParams: null });
        });
    }
    selectRecordById(id, record) {
        this.clearPendingSelect();
        super.selectRecordById(id, record);
    }
    selectRecordsByIds(ids, records) {
        this.clearPendingSelect();
        super.selectRecordsByIds(ids, records);
    }
    selectRecord(index) {
        this.clearPendingSelect();
        super.selectRecord(index);
    }
    clearSelection() {
        this.clearPendingSelect();
        super.clearSelection();
    }
    clearPendingSelect() {
        var _a;
        // Abort the pending select.
        (_a = this.abortControllerOfPendingPromiseToQuerySelectedRecordsBySelectOptions) === null || _a === void 0 ? void 0 : _a.abort();
        this.abortControllerOfPendingPromiseToQuerySelectedRecordsBySelectOptions = null;
    }
    getRecordsByPage(page, pageSize) {
        const records = [];
        const pages = Object.assign({}, this.pages);
        const maxPage = Object.keys(pages).map(p => parseInt(p)).sort((a, b) => b - a)[0];
        const queryPageSize = this.getQueryPageSize();
        let start = pageSize * (page - 1);
        let end = start + pageSize - 1;
        const maxCount = this.getMaxRecordCount();
        if (maxCount !== null) {
            /**
             * If start index is more than max index, return empty array.
             */
            if (start > maxCount - 1) {
                return records;
            }
            start = Math.min(start, maxCount - 1);
            end = Math.min(end, maxCount - 1);
        }
        for (let i = 1; i <= maxPage; i++) {
            const pageStart = (i - 1) * queryPageSize;
            const pageEnd = pageStart + queryPageSize - 1;
            if (pageEnd < start || pageStart > end) {
                continue;
            }
            if (pages[i]) {
                for (let pi = 0; pi < pages[i].length; pi++) {
                    if (pageStart + pi < start || pageStart + pi > end) {
                        continue;
                    }
                    records.push(pages[i][pi]);
                }
            }
        }
        return records;
    }
    getRecordsByPageWithSelection(page, pageSize) {
        return this.concatRecordsAndSelection(this.getSelectedRecords(), this.getRecordsByPage(page, pageSize));
    }
    getPagesData() {
        return this.pages;
    }
    setPagesData(pages) {
        this.pages = pages;
    }
    clearRecordsNotAddVersion() {
        if (!this.isSelectionView() && this.getSelectedRecords().length > 0) {
            this.copySelectionToDataView([]);
        }
        this.pages = {};
        this.pagePromises = {};
        this.loadMissingFieldsByPagePromises = {};
        this.loadMissingFieldsForAllPagePromise = null;
        this.count = null;
        this.countPromise = null;
        this.byIdPromise = null;
    }
    /**
     * get continuious page records
     */
    getRecords() {
        let records = [];
        const pages = []; // continuious pages
        for (let i = 1; i <= Object.keys(this.pages).length; i++) {
            if (!this.pages[i]) {
                break;
            }
            pages.push(i);
        }
        pages.forEach(page => {
            records = records.concat(this.pages[page]);
        });
        if (this.getMaxRecordCount() !== null && this.getMaxRecordCount() < records.length) {
            return records.slice(0, this.getMaxRecordCount());
        }
        return records;
    }
    setRecords(records) {
        const pages = {};
        const pageSize = this.getQueryPageSize();
        records.forEach((r, i) => {
            const newPageNumber = Math.ceil((i + 1) / pageSize);
            if (!pages[newPageNumber]) {
                pages[newPageNumber] = [];
            }
            pages[newPageNumber][i % pageSize] = r;
        });
        this.setPagesData(pages);
        this.addVersion();
    }
    setSourceRecords(records) {
        super.setSourceRecords(records);
        if (this.canSaveSourceRecords()) {
            /**
             * If have a hook to do after the first time set source records, do it and clear the hook.
             */
            if (this.onceSetSourceRecords) {
                const onceSetSourceRecords = this.onceSetSourceRecords;
                this.setOnceSetSourceRecords(null);
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                    onceSetSourceRecords();
                });
            }
        }
    }
    get count() {
        return this._count;
    }
    set count(c) {
        this._count = c;
    }
    getRealQueryPages(page, pageSize) {
        // the record index starts from 0
        const start = pageSize * (page - 1);
        let end = start + pageSize - 1;
        if (this.getMaxRecordCount() !== null) {
            end = Math.min(end, this.getMaxRecordCount() - 1);
        }
        const startPage = Math.floor(start / this.getQueryPageSize()) + 1;
        const endPage = Math.floor(end / this.getQueryPageSize()) + 1;
        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }
    /**
     * the page/pageSize in query will not be used in the actual query
     */
    load(query, options = {}) {
        var _a;
        if (this.getStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
            return Promise.resolve([]);
        }
        query = Object.assign({}, query);
        if (!query.page) {
            query.page = 1;
        }
        if (!query.pageSize) {
            query.pageSize = this.getQueryPageSize();
        }
        const queryPages = this.getRealQueryPages(query.page, query.pageSize);
        if (this.checkClearLocalCache(query, this.lastQueryParams, options)) {
            Object.keys(this.pages).forEach((p) => {
                if (!queryPages.includes(parseInt(p))) {
                    delete this.pages[p];
                }
            });
            this.pagePromises = {};
            this.loadMissingFieldsByPagePromises = {};
            this.loadMissingFieldsForAllPagePromise = null;
            this.count = null;
            this.countPromise = null;
        }
        const queryWithoutPage = this.getQueryWithoutPage(query);
        if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(queryWithoutPage || {}, ((_a = this.getInfo().widgetQueries) === null || _a === void 0 ? void 0 : _a[options.widgetId]) || {})) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.updateWidgetQuery(this.id, options.widgetId, queryWithoutPage));
        }
        let realQuery = this.getRealQueryParams(queryWithoutPage, 'load', options);
        const usedFields = this.getAllUsedFields({ queryParams: realQuery, excludeWidgetsDoNotUseDsToQuery: true });
        realQuery = this.applyUsedFields(realQuery, usedFields);
        this.loadMissingFields(realQuery);
        const pagePromises = queryPages.filter(page => this.pagePromises[page]).map(page => this.pagePromises[page].promise);
        if (pagePromises.length === queryPages.length) {
            return Promise.all(pagePromises).then(() => {
                return this.getRecordsByPage(query.page, query.pageSize);
            });
        }
        this.lastQueryParams = realQuery;
        this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Loading);
        this.setNeedRefresh(false);
        return Promise.all(queryPages.map(page => this.loadByPage(realQuery, query, usedFields, page))).then((results) => {
            const isUseful = results.find(r => r);
            if (!isUseful) {
                // Tell the widgets which are using the returned promise that this result is outdated.
                return null;
            }
            this.handleSelectionOnQueryParamChanges();
            this.lastRefreshTime = new Date();
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Loaded);
            if (!(window.jimuConfig.isInBuilder && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appRuntimeInfo.appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design)) {
                this.startAutoRefresh();
            }
            return this.getRecordsByPage(query.page, query.pageSize);
        }, err => {
            console.error(err);
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.LoadError);
            return [];
        });
    }
    /**
     * Check and load missing fields for loaded records.
     * If delay is true, will merge mulitple calls and send one request after time window run out.
     */
    loadMissingFields(realQuery, delay = false) {
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
            const usedFields = this.getAllUsedFields({ queryParams: realQuery, excludeWidgetsDoNotUseDsToQuery: true });
            this.updateLoadOnDemandFields(usedFields);
            if (delay) {
                this.usedFieldsInTimeWindow = this.mergeUsedFields(this.usedFieldsInTimeWindow, usedFields);
                if (this.loadMissingFieldsTimer) {
                    return;
                }
                this.loadMissingFieldsTimer = setTimeout(() => {
                    this.doLoadMissingFields(realQuery, this.usedFieldsInTimeWindow);
                    clearTimeout(this.loadMissingFieldsTimer);
                    this.loadMissingFieldsTimer = null;
                    this.usedFieldsInTimeWindow = [];
                }, 500);
            }
            else {
                this.doLoadMissingFields(realQuery, usedFields);
            }
        });
    }
    doLoadMissingFields(realQuery, usedFields) {
        var _a;
        if (this.isSelectionView()) {
            const records = this.getRecords();
            const notLoadedSourceRecords = this.getSourceRecords().filter(sR => !records.some(r => r.getId() === sR.getId()));
            const allRecords = records.concat(notLoadedSourceRecords);
            const missingFields = [];
            /**
             * Selected record may be from any data views, so find missing fields from records.
             * Need to find from records since records may miss some fields while source records don't. Records are loaded from source records.
             */
            allRecords.forEach(r => {
                const missingFieldsInRecord = this.findMissingFields(usedFields, Object.keys(r.getData()));
                missingFieldsInRecord.forEach(f => {
                    if (!missingFields.includes(f)) {
                        missingFields.push(f);
                    }
                });
            });
            if (missingFields.length === 0) {
                return;
            }
            /**
             * Update promise if 1. didn't load missing fields for selection view before, or, 2. new missing fields are more than the previous missing fields.
             */
            if (!this.loadMissingFieldsByPagePromises[SELECTION_DATA_VIEW_ID] || this.missingSomeFields(missingFields, this.loadMissingFieldsByPagePromises[SELECTION_DATA_VIEW_ID].fields)) {
                const ids = records.map(r => r.getId());
                const fieldSchema = (_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields;
                const promise = this.queryRecordsByIdWithCurrentQueryParams(ids, this.getMainDataSource(), this.applyUsedFields(realQuery, missingFields)).then(res => {
                    var _a;
                    if (fieldSchema !== ((_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields)) {
                        return false;
                    }
                    const records = this.getRecords();
                    const sourceRecords = this.getSourceRecords();
                    res.records.forEach(newRecord => {
                        const prevRecord = records.find(r => r.getId() === newRecord.getId());
                        if (prevRecord) {
                            prevRecord.setData(Object.assign(Object.assign({}, prevRecord.getData()), newRecord.getData()));
                        }
                        const prevSourceRecord = sourceRecords.find(r => r.getId() === newRecord.getId());
                        if (prevSourceRecord) {
                            prevSourceRecord.setData(Object.assign(Object.assign({}, prevSourceRecord.getData()), newRecord.getData()));
                        }
                    });
                    this.addSourceVersion();
                    this.addVersion();
                    return true;
                }).catch(err => {
                    console.error('Failed to load missing fields, ', err);
                    return false;
                });
                this.loadMissingFieldsByPagePromises[SELECTION_DATA_VIEW_ID] = { promise, fields: missingFields };
            }
        }
        else {
            /**
             * If there is no such a page that is missing some fields, no need to load.
             */
            if (!Object.values(this.pagePromises).some(p => this.missingSomeFields(usedFields, p.fields))) {
                return;
            }
            const missingFieldsByPage = {};
            Object.keys(this.pagePromises).forEach(pageId => {
                const page = parseInt(pageId);
                const missingFieldsInPage = this.findMissingFields(usedFields, this.pagePromises[page].fields);
                missingFieldsByPage[page] = missingFieldsInPage;
            });
            if (!this.loadMissingFieldsForAllPagePromise || Object.keys(this.pagePromises).some(pageId => this.missingSomeFields(missingFieldsByPage[pageId], this.loadMissingFieldsForAllPagePromise.fields[pageId]))) {
                const loadMissingFieldsByPagePromises = [];
                Object.keys(this.pagePromises).forEach(pageId => {
                    const page = parseInt(pageId);
                    const missingFieldsInPage = missingFieldsByPage[page];
                    const p = this.loadMissingFieldsByPage(realQuery, missingFieldsInPage, page);
                    loadMissingFieldsByPagePromises.push(p);
                });
                const promise = Promise.all(loadMissingFieldsByPagePromises).then(results => {
                    const isUseful = results.find(r => r);
                    if (isUseful) {
                        this.addVersion();
                    }
                    return true;
                }).catch(err => {
                    console.error('Failed to load missing fields, ', err);
                    return false;
                });
                this.loadMissingFieldsForAllPagePromise = { promise, fields: missingFieldsByPage };
            }
        }
    }
    loadMissingFieldsByPage(realQuery, missingFields, page) {
        var _a;
        if (!missingFields || missingFields.length === 0 || this.pagePromises[page].fields === '*') {
            return Promise.resolve(true);
        }
        /**
         * Update promise if 1. didn't load missing fields for the page before, or, 2. new missing fields are more than the previous missing fields.
         */
        if (!this.loadMissingFieldsByPagePromises[page] || this.missingSomeFields(missingFields, this.loadMissingFieldsByPagePromises[page].fields)) {
            const realQueryWithPage = Object.assign(Object.assign({}, realQuery), { page, pageSize: this.getQueryPageSize() });
            const fieldSchema = (_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields;
            const promise = this.query(this.applyUsedFields(realQueryWithPage, missingFields), { scope: _interfaces__WEBPACK_IMPORTED_MODULE_2__.QueryScope.InAllData }).then(result => {
                var _a, _b;
                if (fieldSchema !== ((_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields)) {
                    return false;
                }
                this.pagePromises[result.queryParams.page].fields = this.pagePromises[result.queryParams.page].fields.concat(missingFields);
                (_b = result.records) === null || _b === void 0 ? void 0 : _b.forEach(newRecord => {
                    var _a, _b, _c;
                    const prevRecord = (_a = this.pages[result.queryParams.page]) === null || _a === void 0 ? void 0 : _a.find(r => r.getId() === newRecord.getId());
                    if (prevRecord) {
                        prevRecord.setData(Object.assign(Object.assign({}, prevRecord.getData()), newRecord.getData()));
                    }
                    const prevRecordInSelection = (_c = (_b = this.getSelectionDataView()) === null || _b === void 0 ? void 0 : _b.getSourceRecords()) === null || _c === void 0 ? void 0 : _c.find(r => r.getId() === newRecord.getId());
                    if (prevRecordInSelection) {
                        prevRecordInSelection.setData(Object.assign(Object.assign({}, prevRecordInSelection.getData()), newRecord.getData()));
                    }
                });
                return true;
            });
            this.loadMissingFieldsByPagePromises[page] = { promise, fields: missingFields };
        }
        return this.loadMissingFieldsByPagePromises[page].promise;
    }
    /**
     * Keep selection after data source or data view is loaded.
     */
    handleSelectionOnQueryParamChanges() {
        var _a, _b;
        /**
         * If is using no_selection view to show default status, no need to update selection info since the loaded records are not selected by users, they are from no_selection view.
         * We do not expect records of no_selection view are hightlighted.
         */
        if (this.useNoSelectionView(this.getSelectionDataView())) {
            return;
        }
        /**
         * Do not update selection info if there is a pending promise to load preset selected records (e.g. preset in URL).
         */
        if (this.getSelectionDataView().pendingPromiseToQuerySelectedRecordsPresetBeforeDsReady) {
            return;
        }
        const isNoSelectionView = this.isDataView && this.dataViewId === DATA_VIEW_ID_FOR_NO_SELECTION;
        const isSelectionView = this.isSelectionView();
        const isLocalViewOfSelectionView = this.isLocalViewOfSelectionView();
        const isNotSelectionViewOrNoSelectionView = !isNoSelectionView && !isSelectionView && !isLocalViewOfSelectionView;
        if (isNotSelectionViewOrNoSelectionView) {
            /**
             * If data is saved in data source instance, find selected records from source records (records may not load, e.g. chart output data source),
             * else, find selected records from records (selected records should already be loaded).
             */
            const records = this.getDataSourceJson().isDataInDataSourceInstance ? this.getSourceRecords() : this.getRecords();
            /**
             * 1. Update source records of selection view - copy records that satisfy all of these 3 conditions (1. loaded 2. in selected record ids of data source info 3. not in source records of selection view) to selection view.
             */
            let selectedRecordsNotInSelectionView = [];
            this.getSelectedRecordIds().forEach(id => {
                const isInSelectionView = this.getSelectionDataView().getSourceRecords().some(r => r.getId() === id);
                const r = records.find(r => (r === null || r === void 0 ? void 0 : r.getId()) === id);
                if (!isInSelectionView && r) {
                    selectedRecordsNotInSelectionView = selectedRecordsNotInSelectionView.concat(r);
                }
            });
            if (selectedRecordsNotInSelectionView.length > 0) {
                this.copySelectionToDataView(this.getSelectionDataView().getSourceRecords().concat(selectedRecordsNotInSelectionView));
            }
            /**
             * 2. Check and update selection info of data sources which are derived from the current data source.
             */
            this.updateSelectionInfoOfDerivedDssAndChangeUrl(Object.assign(Object.assign({}, (_a = this.getSelectOptionsFromInfo()) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })), { ids: this.getSelectionDataView().getRecords().map(r => r.getId()) }), this, true);
        }
        else if (isSelectionView) {
            /**
             * 1. Check and update selection info of data sources which are derived from main data source.
             */
            this.getMainDataSource().updateSelectionInfoOfDerivedDssAndChangeUrl(Object.assign(Object.assign({}, (_b = this.getMainDataSource().getSelectOptionsFromInfo()) === null || _b === void 0 ? void 0 : _b.asMutable({ deep: true })), { ids: this.getRecords().map(r => r.getId()) }));
        }
    }
    /**
     * the resolved boolean means whether the query result is used (only the last query update records)
     * @param realQuery
     * @param page
     */
    loadByPage(realQuery, originQuery, usedFields, page) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.pagePromises[page]) {
                return yield this.pagePromises[page].promise;
            }
            /**
             * If source records miss some fields, the query may not execute successfully. For example, source records miss fields used in filter.
             * Wait until load missing fields is done.
             */
            if (this.getDataSourceJson().isDataInDataSourceInstance && this.sourceRecordsMissingFields(this.getSourceRecords(), usedFields)) {
                return Promise.resolve(false);
            }
            const realQueryWithPage = Object.assign(Object.assign({}, realQuery), { page, pageSize: this.getQueryPageSize() });
            const promise = this.doQuery((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(realQueryWithPage), (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(originQuery)).then(result => {
                const resultQueryWithoutPage = this.getQueryWithoutPage(result.queryParams);
                // Make sure the last query and the last source take effect.
                if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(resultQueryWithoutPage, this.lastQueryParams)) {
                    return false;
                }
                // If only source version is incorrect, do the query again.
                if ((typeof result.sourceVersion === 'number' && result.sourceVersion !== this.getSourceVersion())) {
                    delete this.pagePromises[page];
                    return this.loadByPage(realQuery, originQuery, usedFields, page);
                }
                this.pages[result.queryParams.page] = result.records;
                return true;
            });
            this.pagePromises[page] = { promise, fields: usedFields };
            return this.pagePromises[page].promise;
        });
    }
    sourceRecordsMissingFields(sourceRecords, usedFields) {
        if (!sourceRecords || !usedFields) {
            return false;
        }
        return sourceRecords.some(r => this.missingSomeFields(usedFields, Object.keys(r.getData())));
    }
    loadCount(query, options = {}) {
        if (this.getCountStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
            return Promise.resolve(0);
        }
        if (!this.checkClearLocalCache(query, this.lastCountQueryParams, options) && this.countPromise) {
            return this.countPromise;
        }
        const realQuery = this.getRealQueryParams(this.getQueryWithoutPage(query), 'load', options);
        this.lastCountQueryParams = realQuery;
        this.setCountStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Loading);
        this.countPromise = this.doQueryCount((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(realQuery)).then(result => {
            // Make sure the last query and the last source take effect.
            if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(result.queryParams, this.lastCountQueryParams)) {
                return null;
            }
            // If only source version is incorrect, do the query again.
            if ((typeof result.sourceVersion === 'number' && result.sourceVersion !== this.getSourceVersion())) {
                delete this.countPromise;
                return this.loadCount(query, options);
            }
            if (this.getMaxRecordCount() === null) {
                this.count = result.count;
            }
            else {
                this.count = Math.min(result.count, this.getMaxRecordCount());
            }
            this.setCountStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Loaded);
            return this.count;
        }, err => {
            console.error(err);
            this.setCountStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.LoadError);
            return Promise.reject(err);
        });
        return this.countPromise;
    }
    loadById(id, refresh) {
        if (this.getStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
            return Promise.resolve(null);
        }
        if (id === this.lastQueryId && !refresh && this.byIdPromise) {
            return this.byIdPromise;
        }
        this.lastQueryId = id;
        this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Loading);
        this.byIdPromise = this.doQueryById(id).then(record => {
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.Loaded);
            return record;
        }, err => {
            console.error(err);
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.LoadError);
            return null;
        });
        return this.byIdPromise;
    }
    query(query, options) {
        if (this.getStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
            return Promise.resolve({
                queryParams: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(query),
                records: [],
                fields: [],
                sourceVersion: this.getSourceVersion()
            });
        }
        const realQuery = this.getRealQueryParams(query, 'query', options);
        return this.doQuery((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(realQuery), (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(query)).then(result => {
            const maxCount = this.getMaxRecordCount();
            if (maxCount === null) {
                return result;
            }
            const page = result.queryParams.page || 1;
            const pageSize = result.queryParams.pageSize;
            if (page === 1 || !pageSize) {
                if (result.records.length > maxCount) {
                    result.records = result.records.slice(0, maxCount);
                }
            }
            else {
                if (((page - 1) * pageSize) > maxCount) {
                    result.records = [];
                }
                else if ((page - 1) * pageSize + result.records.length > maxCount) {
                    result.records = result.records.slice(0, (page - 1) * pageSize + result.records.length - maxCount);
                }
            }
            return result;
        });
    }
    queryCount(query, options) {
        if (this.getCountStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
            return Promise.resolve({
                queryParams: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(query),
                count: 0,
                sourceVersion: this.getSourceVersion()
            });
        }
        if (this.useNoSelectionView()) {
            const noSelectionView = this.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION);
            if (noSelectionView) {
                return noSelectionView.queryCount(query, options);
            }
        }
        const realQuery = this.getRealQueryParams(query, 'query', options);
        return this.doQueryCount((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(realQuery)).then(result => {
            if (this.getMaxRecordCount() === null) {
                return result;
            }
            else {
                result.count = Math.min(result.count, this.getMaxRecordCount());
                return result;
            }
        });
    }
    queryIds(query, options) {
        if (this.getCountStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
            return Promise.resolve({
                queryParams: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(query),
                ids: [],
                sourceVersion: this.getSourceVersion()
            });
        }
        if (this.useNoSelectionView()) {
            const noSelectionView = this.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION);
            if (noSelectionView) {
                return noSelectionView.queryIds(query, options);
            }
        }
        const realQuery = this.getRealQueryParams(query, 'query', options);
        return this.doQueryIds((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(realQuery)).then(result => {
            if (this.getMaxRecordCount() === null) {
                return result;
            }
            else {
                const maxCount = Math.min(result.ids.length, this.getMaxRecordCount());
                result.ids.splice(maxCount);
                return result;
            }
        });
    }
    queryAll(query, signal, progressCallback, options) {
        const q = Object.assign({}, query);
        const result = {
            queryParams: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(q).without('page').without('pageSize'),
            records: []
        };
        const setIsAborted = (result) => {
            result.isAborted = true;
            return result;
        };
        const queryByPage = (pageSize, pageCount, result, signal, progressCallback) => __awaiter(this, void 0, void 0, function* () {
            if (pageCount > 0) {
                for (let i = 1; i <= pageCount; i++) {
                    q.page = i;
                    q.pageSize = pageSize;
                    const r = yield this.query(q, options);
                    if ((r === null || r === void 0 ? void 0 : r.records) && r.records.length > 0) {
                        // Concat current page result to all result.
                        result.records.push(...r.records);
                        // Check if is aborted.
                        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                            return setIsAborted(result);
                        }
                        // Send progress.
                        progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(i / pageCount, result);
                    }
                }
            }
            return result;
        });
        // Check if is aborted before sending any requests.
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            return Promise.resolve(setIsAborted(result));
        }
        // The process begins.
        progressCallback === null || progressCallback === void 0 ? void 0 : progressCallback(0, result);
        return this.queryCount(q, options).then(countResult => {
            return new Promise(resolve => {
                var _a, _b;
                if (signal) {
                    // Abort the process whenever abort method of abort controller is called.
                    signal.onabort = e => {
                        resolve(setIsAborted(result));
                    };
                }
                const totalCount = countResult.count;
                const maxCount = this.getMaxRecordCount() !== null ? Math.min(totalCount, this.getMaxRecordCount()) : totalCount;
                const pageSize = ((_b = (_a = this.getCapabilities()) === null || _a === void 0 ? void 0 : _a.getQueryCapabilities()) === null || _b === void 0 ? void 0 : _b.maxPageSize) || this.getQueryPageSize();
                const pageCount = Math.ceil(maxCount / pageSize);
                queryByPage(pageSize, pageCount, result, signal, progressCallback).then(r => { resolve(r); });
            });
        });
    }
    queryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getStatus() === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceStatus.NotReady) {
                return yield Promise.resolve(null);
            }
            return yield this.doQueryById(id);
        });
    }
    getAutoRefreshInterval() {
        const ds = this.getMainDataSource();
        let interval = ds.getDataViewConfig() && ds.getDataViewConfig().refreshInterval;
        if (interval === 0) { // 0 means do not auto refresh.
            return 0;
        }
        if (interval === null || typeof interval === 'undefined') { // means user layer/map's setting
            interval = ds.getSchema().refreshInterval;
        }
        return interval;
    }
    getLastRefreshTime() {
        return this.lastRefreshTime;
    }
    startAutoRefresh() {
        const interval = this.getAutoRefreshInterval();
        if (!interval) {
            return;
        }
        if (this.autoRefreshHandle) {
            return;
        }
        // Reset needRefresh to false.
        this.setNeedRefresh(false);
        // Start a new interval.
        this.autoRefreshHandle = setInterval(() => {
            this.setNeedRefresh(true);
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => { this.setNeedRefresh(false); });
        }, interval * 1000);
    }
    stopAutoRefresh() {
        if (this.autoRefreshHandle) {
            // Reset needRefresh to false.
            this.setNeedRefresh(false);
            // Clear interval.
            clearInterval(this.autoRefreshHandle);
            this.autoRefreshHandle = null;
        }
    }
    setNeedRefresh(needRefresh) {
        /**
         * Change data source info only when current `needRefresh` is not same as new `needRefresh`.
         */
        if (this.getInfo().needRefresh !== needRefresh) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setDataNeedRefresh(this.id, needRefresh));
        }
    }
    setCapabilities(cap) {
        this.capabilities = cap;
    }
    getCapabilities() {
        if (this.canSaveSourceRecords()) {
            return this.capabilities;
        }
        else {
            return this.getMainDataSource().getCapabilities();
        }
    }
    getMainDataSource() {
        return super.getMainDataSource();
    }
    getDataViews() {
        return super.getDataViews();
    }
    getDataView(dataViewId) {
        return super.getDataView(dataViewId);
    }
    updateSelectionInfo(options, triggerDataSource, forceCheck) {
        var _a;
        if (!(options === null || options === void 0 ? void 0 : options.ids) && !(options === null || options === void 0 ? void 0 : options.records)) {
            return;
        }
        /**
         * Update selected record ids only when current data source listens selection or current data source is the data source which triggers selection.
         */
        const needToUpdateInfo = this.getListenSelection() || this.id === (triggerDataSource === null || triggerDataSource === void 0 ? void 0 : triggerDataSource.id);
        if (!needToUpdateInfo) {
            return;
        }
        /**
         * Main data source and output view contains all records, no need to check whether selected records match query params of them.
         * If selected records are empty, no need to check, too.
         */
        const isMainDataSource = !this.isLocal && !this.isDataView;
        const isOutputView = this.dataViewId === OUTPUT_DATA_VIEW_ID;
        const isSubset = !isMainDataSource && !isOutputView;
        const ids = ((_a = options.records) === null || _a === void 0 ? void 0 : _a.map(r => r.getId())) || options.ids;
        const needToDoCheck = (forceCheck || isSubset) && ids.length > 0;
        if (!needToDoCheck) {
            this.changeSelectedRecordIdsOfDsInfo(options);
            return;
        }
        const records = this.getRecords();
        const currentSelectedIds = this.getSelectedRecordIds();
        let idsNotInLoadedRecords = [];
        let idsInLoadedRecords = [];
        ids.forEach(id => {
            if (records.some(r => (r === null || r === void 0 ? void 0 : r.getId()) === id) || (!forceCheck && currentSelectedIds.some(selectedId => selectedId === id))) {
                idsInLoadedRecords = idsInLoadedRecords.concat(id);
            }
            else {
                idsNotInLoadedRecords = idsNotInLoadedRecords.concat(id);
            }
        });
        /**
         * If every selected record is already loaded or is in current selected ids, no need to check.
         */
        if (idsInLoadedRecords.length === ids.length) {
            this.changeSelectedRecordIdsOfDsInfo(options);
            return;
        }
        /**
         * Check whether selected records match query parmas of current data source.
         */
        this.throttleQueryRecordsByIdWithCurrentQueryParams(idsNotInLoadedRecords).then(res => {
            const prevSelectedIds = currentSelectedIds;
            const curSelectedIds = this.getSelectedRecordIds();
            const isSelectionStillTheSame = curSelectedIds.length === prevSelectedIds.length && curSelectedIds.every(curId => prevSelectedIds.some(prevId => prevId === curId));
            /**
             * If selection has been changed during the time waiting for check result back (e.g. changed by message action), no need to update selection info.
             */
            if (isSelectionStillTheSame) {
                const idsMatchQueryParamsNotInLoadedRecords = idsNotInLoadedRecords.filter(id => { var _a; return (_a = res === null || res === void 0 ? void 0 : res.records) === null || _a === void 0 ? void 0 : _a.some(r => (r === null || r === void 0 ? void 0 : r.getId()) === id); });
                this.changeSelectedRecordIdsOfDsInfo(Object.assign(Object.assign({}, options), { ids: idsInLoadedRecords.concat(idsMatchQueryParamsNotInLoadedRecords) }));
            }
        }).catch(err => {
            console.error(`Failed to check whether selected records in ${this.id}. `, err);
        });
    }
    changeSelectedRecordIdsOfDsInfo(options) {
        var _a;
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dataSourceSelectionChanged(this.id, options));
        /**
         * If is main data source, will update version of selection view.
         * This can make sure widget/component can get the newest selected records via `selectionView.getSelectedRecords()`.
         *
         * Will do it only if the current data source is the main data source since `selectionView.getSelectedRecords()` will return the intersection of 1. selected record ids of main data source info and 2. records of selection view.
         * Only main data source info and selection view records can affect the result.
         */
        if (this.getMainDataSource().id === this.id) {
            (_a = this.getSelectionDataView()) === null || _a === void 0 ? void 0 : _a.addVersion();
            /**
             * Checking whether need to use no_selection view uses the selection info, see `useNoSelectionView`.
             * After the newest selection info is set, need to do the check again.
             * If need to use no_selection view now, update source version of selection view to let widgets to refresh.
             */
            if (this.useNoSelectionView(this.getSelectionDataView())) {
                this.getSelectionDataView().addSourceVersion();
            }
        }
    }
    queryRecordsByIdWithCurrentQueryParams(ids, dataSource, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectIds = ids.map(id => +id).filter(id => !isNaN(id));
            const checkRecordsQueryParams = this.mergeQueryParams(queryParams, { objectIds });
            // In query method, will merge current query params and `checkRecordsQueryParams`.
            return dataSource ? dataSource.query(checkRecordsQueryParams) : this.query(checkRecordsQueryParams);
        });
    }
    deleteOneLoadedRecordById(ds, id) {
        var _a;
        const pages = ds.getPagesData();
        const pageId = Object.keys(pages).find(pId => { var _a; return (_a = pages[pId]) === null || _a === void 0 ? void 0 : _a.some(r => (r === null || r === void 0 ? void 0 : r.getId()) === id); });
        const index = (_a = pages[pageId]) === null || _a === void 0 ? void 0 : _a.findIndex(r => (r === null || r === void 0 ? void 0 : r.getId()) === id);
        if (typeof index === 'number' && index > -1) {
            pages[pageId].splice(index, 1);
            ds.addVersion();
        }
    }
    setOnceSetSourceRecords(func) {
        this.onceSetSourceRecords = func;
    }
    getAllUsedFields(options) {
        return super.getAllUsedFields(options);
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/abstract-set-data-source.ts":
/*!*****************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/abstract-set-data-source.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractSetDataSource: () => (/* binding */ AbstractSetDataSource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _abstract_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-data-source.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class AbstractSetDataSource extends _abstract_data_source__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource {
    constructor() {
        super(...arguments);
        this.isDataSourceSet = true;
        this.childDataSourcesCreated = false;
        this.childDataSourcePromises = {};
    }
    ready() {
        return Promise.resolve();
    }
    childDataSourcesReady() {
        return this.createChildDataSourcesRecursively().finally(() => {
            this.childDataSourcesCreated = true;
        });
    }
    areChildDataSourcesCreated() {
        return this.childDataSourcesCreated;
    }
    // Create child data sources and wait for all descendant data sources created.
    createChildDataSourcesRecursively() {
        return this.createChildDataSources().then(childDss => Promise.allSettled(childDss.map(childDs => childDs.isDataSourceSet ? childDs.childDataSourcesReady().then(() => childDs) : childDs)).then(childDssRes => childDssRes.filter(c => c.status === 'fulfilled').map(c => c.value)));
    }
    createChildDataSources() {
        return __awaiter(this, void 0, void 0, function* () {
            const childDsIds = this.getChildDataSourceIds();
            childDsIds.forEach(childDsId => {
                if (!this.childDataSourcePromises[childDsId]) {
                    this.childDataSourcePromises[childDsId] = this.createDataSourceById(childDsId);
                }
            });
            return Promise.allSettled(Object.values(this.childDataSourcePromises)).then(childDssRes => childDssRes.filter(c => c.status === 'fulfilled').map(c => c.value));
        });
    }
    // Create a child or a descendant data source by id.
    createDataSourceById(dataSourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const neededChildDsId = this.findChildDataSourceIdByDescendantDataSourceId(dataSourceId);
                if (!neededChildDsId) {
                    return Promise.reject(new _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceError(dataSourceId, 'Can not find data source.'));
                }
                if (!this.childDataSourcePromises[neededChildDsId]) {
                    const childIds = this.getChildIds();
                    const childId = childIds.find(cId => this.getJimuChildId(cId).some(jimuCId => this.getChildDataSourceId(jimuCId) === neededChildDsId));
                    const jimuChildId = this.getJimuChildId(childId).find(jimuCId => this.getChildDataSourceId(jimuCId) === neededChildDsId);
                    this.childDataSourcePromises[neededChildDsId] = this.createChildDataSourceById(neededChildDsId, jimuChildId, childId);
                }
                const childDs = yield this.childDataSourcePromises[neededChildDsId];
                if (childDs.id === dataSourceId) {
                    return childDs;
                }
                else if (childDs.isDataSourceSet) {
                    return childDs.createDataSourceById(dataSourceId);
                }
                return Promise.reject(new _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceError(dataSourceId, 'Can not find data source.'));
            }
            catch (err) {
                return Promise.reject(new _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceError(dataSourceId, 'Failed to create the data source.'));
            }
        });
    }
    findChildDataSourceIdByDescendantDataSourceId(dataSourceId) {
        const childDsIds = this.getChildDataSourceIds();
        /**
         * The process is to find a child data source ID whose splitted ID array (by '-') has the same first N elements with the passed in data source ID.
         * Can not use string's startsWith here, since we need to match each element of the ID array, not part of the element.
         * For example,
         * 1. The child data source IDs are ds1-1 and ds1-10, the descendant data source ID is ds1-10-1, should return ds1-10.
         * 2. The child data source IDs are ds1-1 and ds1-10, the descendant data source ID is ds1-10, should return ds1-10.
         * 3. The child data source IDs are ds1-1 and ds1-10, the descendant data source ID is ds1-11-1, should return null.
         */
        const descendantDsIdArr = dataSourceId === null || dataSourceId === void 0 ? void 0 : dataSourceId.split('-');
        const neededChildDsId = childDsIds.find(childDsId => {
            const childDsIdArr = childDsId === null || childDsId === void 0 ? void 0 : childDsId.split('-');
            return childDsIdArr === null || childDsIdArr === void 0 ? void 0 : childDsIdArr.every((d, i) => descendantDsIdArr[i] === d);
        }, null);
        return neededChildDsId;
    }
    getChildDataSourceIds() {
        const childIds = this.getChildIds();
        return childIds.reduce((jimuChildIds, childId) => jimuChildIds.concat(this.getJimuChildId(childId)), []).map(jimuChildId => this.getChildDataSourceId(jimuChildId));
    }
    destroy() {
        if (!this.areChildDataSourcesCreated()) {
            this.childDataSourcesReady().then(childDss => {
                childDss.forEach(ds => {
                    if (ds) {
                        this.dataSourceManager.destroyDataSource(ds.id);
                    }
                });
            });
        }
        else {
            this.getChildDataSources().forEach(ds => {
                if (ds) {
                    this.dataSourceManager.destroyDataSource(ds.id);
                }
            });
        }
    }
    getChildDataSourceId(jimuChildId) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getChildDataSourceId(this.id, jimuChildId);
    }
    getChildDataSources() {
        const childDss = Object.keys(this.dataSourceManager.getDataSources())
            .filter(dsId => this.dataSourceManager.getDataSource(dsId).parentDataSource === this)
            .map(dsId => this.dataSourceManager.getDataSource(dsId));
        return childDss.sort((ds1, ds2) => ds1.order - ds2.order);
    }
    getAllChildDataSources() {
        const visitTree = (ds, results) => {
            const childDss = ds.isDataSourceSet && ds.getChildDataSources();
            if (childDss) {
                childDss.forEach(childDs => {
                    results.push(childDs);
                    if (childDs.isDataSourceSet) {
                        visitTree(childDs, results);
                    }
                });
            }
        };
        const allDss = [];
        visitTree(this, allDss);
        return allDss;
    }
    getChildDataSource(jimuChildId) {
        return this.dataSourceManager.getDataSource(this.getChildDataSourceId(jimuChildId));
    }
    getJimuChildId(childId) {
        const rschema = this.getReversedConfigSchema();
        if (rschema && rschema.childSchemas && rschema.childSchemas[childId]) {
            return (rschema.childSchemas[childId]).map(schema => schema.jimuChildId).asMutable();
        }
        else {
            return [childId];
        }
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/data-record.ts":
/*!****************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/data-record.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDataRecord: () => (/* binding */ AbstractDataRecord),
/* harmony export */   SimpleDataRecordImpl: () => (/* binding */ SimpleDataRecordImpl),
/* harmony export */   SimpleDataRecordSetImpl: () => (/* binding */ SimpleDataRecordSetImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

/**
 * Include the common implementations for data record.
 */
class AbstractDataRecord {
    clone(deep) {
        const shallowClone = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.clone(this);
        if (deep) {
            shallowClone.setData(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.cloneDeep(this.getData()));
            return shallowClone;
        }
        else {
            return shallowClone;
        }
    }
    getFieldValue(jimuFieldName) {
        return this.getData()[jimuFieldName];
    }
    /** @ignore */
    getDateFieldValue(jimuFieldName) {
        return this.getFieldValue(jimuFieldName);
    }
    getFormattedFieldValue(jimuFieldName, intl) {
        const field = this.dataSource.getSchema().fields[jimuFieldName];
        if (field) {
            if (field.format) {
                switch (field.type) {
                    case jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date:
                        return this.formatDateField(this.getDateFieldValue(jimuFieldName), field.format.dateFormat, intl);
                    case jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number:
                        return this.formatNumberField(this.getFieldValue(jimuFieldName), field.format.places, field.format.digitSeparator, intl);
                    default:
                        return this.getFieldValue(jimuFieldName);
                }
            }
            else {
                switch (field.type) {
                    case jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date:
                        return this.getFieldValue(jimuFieldName) !== null && this.getFieldValue(jimuFieldName) !== undefined
                            ? intl.formatDate(this.getDateFieldValue(jimuFieldName))
                            : null;
                    case jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number:
                        return this.getFieldValue(jimuFieldName) !== null && this.getFieldValue(jimuFieldName) !== undefined
                            ? intl.formatNumber(this.getFieldValue(jimuFieldName))
                            : null;
                    default:
                        return this.getFieldValue(jimuFieldName);
                }
            }
        }
        else {
            return this.getFieldValue(jimuFieldName);
        }
    }
    /** @ignore */
    convertBeforeMappingDataToData(dataBeforeMapping) {
        const reversedData = {};
        const reversedSchema = this.dataSource.getReversedConfigSchema();
        Object.keys(dataBeforeMapping).forEach(fieldName => {
            const fields = reversedSchema && reversedSchema.fields && reversedSchema.fields[fieldName];
            if (fields) {
                fields.forEach(f => {
                    reversedData[f.jimuName] = dataBeforeMapping[fieldName];
                });
            }
            else {
                reversedData[fieldName] = dataBeforeMapping[fieldName];
            }
        });
        return reversedData;
    }
    /** @ignore */
    convertDataToDataBeforeMapping(data) {
        const dataBeforeMapping = {};
        const schema = this.dataSource.getSchema();
        Object.keys(data).forEach(jimuFieldName => {
            const fieldName = schema && schema.fields && schema.fields[jimuFieldName] ? schema.fields[jimuFieldName].name : jimuFieldName;
            dataBeforeMapping[fieldName] = data[jimuFieldName];
        });
        return dataBeforeMapping;
    }
    getFormattedData(intl) {
        const ret = {};
        Object.keys(this.getData()).forEach(fieldName => {
            ret[fieldName] = this.getFormattedFieldValue(fieldName, intl);
        });
        return ret;
    }
    formatDateField(value, esriDateFormat, intl) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.formatDateField(value, esriDateFormat, intl);
    }
    formatNumberField(value, places, digitSeparator, intl) {
        if (value === null || value === undefined) {
            return null;
        }
        /* eslint-disable-next-line*/
        const num = new Number(value);
        if (digitSeparator) {
            return intl.formatNumber(value, { maximumFractionDigits: places, minimumFractionDigits: places });
        }
        else {
            return num.toFixed(places);
        }
    }
    set dataSource(d) {
        this._dataSource = d;
    }
    get dataSource() {
        return this._dataSource;
    }
}
/**
 * @ignore
 */
class SimpleDataRecordImpl extends AbstractDataRecord {
    /**
     * beforeMappingData: is the data from the real data source, such as query from remote service/database.
     * data is the data used in Exb.
     *
     * The beforeMappingData uses this schema: {fieldName: value}, we'll reverse it to {jimuFieldName: value}, which is called data and will be used in exb.
     *
     */
    constructor(data, dataSource, isBeforeMappingData = true) {
        super();
        this.dataSource = dataSource;
        if (isBeforeMappingData) {
            this.data = this.convertBeforeMappingDataToData(data);
        }
        else {
            this.data = data;
        }
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getDataBeforeMapping() {
        return this.convertDataToDataBeforeMapping(this.data);
    }
    toJson() {
        return this.data;
    }
    getId() {
        return this.data.id;
    }
    setId() {
    }
    getGeometry() {
        return null;
    }
    getRawGeometry() {
        return null;
    }
    setGeometry(geo) {
    }
}
/**
 * @ignore
 */
class SimpleDataRecordSetImpl {
    constructor(options) {
        Object.assign(this, options);
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/index.ts":
/*!**********************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDataRecord: () => (/* reexport safe */ _data_record__WEBPACK_IMPORTED_MODULE_5__.AbstractDataRecord),
/* harmony export */   AbstractDataSource: () => (/* reexport safe */ _abstract_data_source__WEBPACK_IMPORTED_MODULE_0__.AbstractDataSource),
/* harmony export */   AbstractLayerFolderDataSource: () => (/* reexport safe */ _abstract_layer_folder_data_source__WEBPACK_IMPORTED_MODULE_1__.AbstractLayerFolderDataSource),
/* harmony export */   AbstractLoadableDataSource: () => (/* reexport safe */ _abstract_loadable_data_source__WEBPACK_IMPORTED_MODULE_2__.AbstractLoadableDataSource),
/* harmony export */   AbstractQueriableDataSource: () => (/* reexport safe */ _abstract_queriable_data_source__WEBPACK_IMPORTED_MODULE_3__.AbstractQueriableDataSource),
/* harmony export */   AbstractSetDataSource: () => (/* reexport safe */ _abstract_set_data_source__WEBPACK_IMPORTED_MODULE_4__.AbstractSetDataSource),
/* harmony export */   ItemMixinImpl: () => (/* reexport safe */ _item_mixin__WEBPACK_IMPORTED_MODULE_6__.ItemMixinImpl),
/* harmony export */   JSAPILayerMixinImpl: () => (/* reexport safe */ _js_api_layer_mixin__WEBPACK_IMPORTED_MODULE_7__.JSAPILayerMixinImpl),
/* harmony export */   SimpleDataRecordImpl: () => (/* reexport safe */ _data_record__WEBPACK_IMPORTED_MODULE_5__.SimpleDataRecordImpl),
/* harmony export */   SimpleDataRecordSetImpl: () => (/* reexport safe */ _data_record__WEBPACK_IMPORTED_MODULE_5__.SimpleDataRecordSetImpl)
/* harmony export */ });
/* harmony import */ var _abstract_data_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-data-source.ts");
/* harmony import */ var _abstract_layer_folder_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-layer-folder-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-layer-folder-data-source.ts");
/* harmony import */ var _abstract_loadable_data_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-loadable-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-loadable-data-source.ts");
/* harmony import */ var _abstract_queriable_data_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-queriable-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-queriable-data-source.ts");
/* harmony import */ var _abstract_set_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract-set-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-set-data-source.ts");
/* harmony import */ var _data_record__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-record */ "./jimu-core/lib/data-sources/base-classes/data-record.ts");
/* harmony import */ var _item_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-mixin */ "./jimu-core/lib/data-sources/base-classes/item-mixin.ts");
/* harmony import */ var _js_api_layer_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js-api-layer-mixin */ "./jimu-core/lib/data-sources/base-classes/js-api-layer-mixin.ts");










/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/item-mixin.ts":
/*!***************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/item-mixin.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemMixinImpl: () => (/* binding */ ItemMixinImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const fetchItemDataPromises = {};
const fetchItemInfoPromises = {};
const ItemMixinImpl = (Base) => {
    class ItemMixinImpl extends Base {
        get itemId() {
            return this._itemId;
        }
        set itemId(itemId) {
            if (this._itemId !== itemId) {
                this._itemId = itemId;
                this.clearData();
            }
        }
        get portalUrl() {
            return this._portalUrl;
        }
        set portalUrl(portalUrl) {
            if (this._portalUrl !== portalUrl) {
                this._portalUrl = portalUrl;
                this.clearData();
            }
        }
        getItemData() {
            return this.itemData;
        }
        setItemData(itemData) {
            this.itemData = itemData;
        }
        /**
         * Classes that extend this class may get item info from other sources, e.g. JSAPI layer object.
         */
        setItemInfo(itemInfo) {
            this.itemInfo = itemInfo;
        }
        getItemInfo() {
            return this.itemInfo;
        }
        fetchItemData() {
            if (!this.portalUrl || !this.itemId) {
                return Promise.resolve(null);
            }
            if (this.itemData) {
                return Promise.resolve(this.itemData);
            }
            if (!fetchItemDataPromises[getCacheId(this.portalUrl, this.itemId)]) {
                fetchItemDataPromises[getCacheId(this.portalUrl, this.itemId)] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(this.portalUrl, (session) => {
                    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.getItemData(this.itemId, {
                        portal: jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPortalRestUrl(this.portalUrl),
                        authentication: session
                    });
                });
            }
            return fetchItemDataPromises[getCacheId(this.portalUrl, this.itemId)].then(itemData => {
                this.itemData = itemData;
                return this.itemData;
            });
        }
        fetchItemInfo() {
            if (!this.portalUrl || !this.itemId) {
                return Promise.resolve(null);
            }
            if (this.itemInfo) {
                return Promise.resolve(this.itemInfo);
            }
            if (!fetchItemInfoPromises[getCacheId(this.portalUrl, this.itemId)]) {
                fetchItemInfoPromises[getCacheId(this.portalUrl, this.itemId)] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(this.portalUrl, (session) => {
                    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.getItem(this.itemId, {
                        portal: jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPortalRestUrl(this.portalUrl),
                        authentication: session
                    });
                });
            }
            return fetchItemInfoPromises[getCacheId(this.portalUrl, this.itemId)].then(itemInfo => {
                this.itemInfo = itemInfo;
                return this.itemInfo;
            });
        }
        clearData() {
            this.itemData = null;
            this.itemInfo = null;
        }
    }
    return ItemMixinImpl;
};
function getCacheId(portalUrl, itemId) {
    return `${portalUrl}-${itemId}`;
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/base-classes/js-api-layer-mixin.ts":
/*!***********************************************************************!*\
  !*** ./jimu-core/lib/data-sources/base-classes/js-api-layer-mixin.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSAPILayerMixinImpl: () => (/* binding */ JSAPILayerMixinImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const JSAPILayerMixinImpl = (Base) => {
    class JSAPILayerMixinImpl extends Base {
        get jimuLayerId() {
            if (this.layer && !this._jimuLayerId) {
                this._jimuLayerId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getJimuLayerIdByJSAPILayer(this.layer);
            }
            return this._jimuLayerId;
        }
        createJSAPILayerByDataSource() {
            return __awaiter(this, void 0, void 0, function* () {
                let layer;
                try {
                    const options = this.getLayerConstructorOptions();
                    if (NonArcGISLayerClass[this.type]) { // Layers which are not from ArcGIS, such as csv layer, geojson layer and so on.
                        const Layer = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)(NonArcGISLayerClass[this.type]);
                        layer = new Layer(options);
                    }
                    else { // Layers which are from ArcGIS, such as feature layer, map service layer, image service layer.
                        const Layer = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/layers/Layer');
                        if (this.portalUrl && this.itemId) {
                            layer = yield Layer.fromPortalItem(options);
                        }
                        else if (this.url) {
                            layer = yield Layer.fromArcGISServerUrl(options);
                        }
                    }
                    const label = this.getDataSourceJson().label || this.getDataSourceJson().sourceLabel;
                    if (layer && layer.title !== label) {
                        layer.title = label;
                    }
                    if (layer && !this.layer && !this._cachedLayer) {
                        this._cachedLayer = layer;
                    }
                }
                catch (err) {
                    console.error('Failed to create JS API layer. ', err, this.id);
                }
                return layer;
            });
        }
        supportSpatialInfo() {
            const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.id);
            if (ds === null || ds === void 0 ? void 0 : ds.isDataSourceSet) {
                /**
                 * We do not support some types of scene layer (e.g. building scene layer), but wo do support scene service.
                 * Scene service must have spatial info.
                 */
                return ds.getChildDataSources().length === 0 || ds.getChildDataSources().some(ds => { var _a; return (_a = ds === null || ds === void 0 ? void 0 : ds.supportSpatialInfo) === null || _a === void 0 ? void 0 : _a.call(ds); });
            }
            const cachedLayer = this.layer || this._cachedLayer;
            if (cachedLayer) {
                /**
                 * Some layers have `isTable` property (e.g. feature layer and csv layer), some don't.
                 * `isTable` is undefined or false means the layer has spatial info.
                 */
                return !cachedLayer.isTable;
            }
            else if (this.type === _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.SceneLayer) {
                /**
                 * Scene layer can not be table.
                 */
                return true;
            }
            else {
                return !!(ds === null || ds === void 0 ? void 0 : ds.getGeometryType());
            }
        }
        getLayerConstructorOptions() {
            var _a, _b;
            const options = {};
            if (this.url) {
                options.url = this.url;
            }
            if (this.itemId && this.portalUrl) {
                options.portalItem = {
                    id: this.itemId,
                    portal: {
                        url: this.portalUrl
                    }
                };
            }
            /**
             * If has a JS API layer, use it to avoid duplicate requests.
             * Can not use `layer.clone` directly here since some layer has clone method but will throw an error, such as csv layer which references a csv file via portal item.
             */
            const cachedLayer = this.layer || this._cachedLayer;
            if (cachedLayer === null || cachedLayer === void 0 ? void 0 : cachedLayer.sourceJSON) {
                options.sourceJSON = cachedLayer.sourceJSON;
            }
            if ((_a = cachedLayer === null || cachedLayer === void 0 ? void 0 : cachedLayer.source) === null || _a === void 0 ? void 0 : _a.clone) {
                options.source = cachedLayer.source.clone();
            }
            if ((_b = cachedLayer === null || cachedLayer === void 0 ? void 0 : cachedLayer.portalItem) === null || _b === void 0 ? void 0 : _b.clone) {
                options.portalItem = cachedLayer.portalItem.clone();
            }
            return options;
        }
    }
    return JSAPILayerMixinImpl;
};
const NonArcGISLayerClass = {
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.CSV]: 'esri/layers/CSVLayer',
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.GeoJSON]: 'esri/layers/GeoJSONLayer',
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.KML]: 'esri/layers/KMLLayer',
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WFS]: 'esri/layers/WFSLayer',
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WMS]: 'esri/layers/WMSLayer',
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.WMTS]: 'esri/layers/WMTSLayer',
    /**
     * Vector tile service is ArcGIS service, but user can add this type of data by a style json.
     * See https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html - Creating a VectorTileLayer.
     */
    [_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.VectorTileService]: 'esri/layers/VectorTileLayer'
};


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/building-component-sublayer-data-source-impl.ts":
/*!****************************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/building-component-sublayer-data-source-impl.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingComponentSubLayerDataSourceImpl: () => (/* binding */ BuildingComponentSubLayerDataSourceImpl)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./jimu-core/lib/data-sources/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
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



class BuildingComponentSubLayerDataSourceImpl extends ___WEBPACK_IMPORTED_MODULE_0__.SceneLayerDataSourceImpl {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.BuildingComponentSubLayer;
    }
    createAssociatedDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getAssociatedDataSource()) {
                return Promise.resolve(this.getAssociatedDataSource());
            }
            if (this.layer) {
                return this._createAssociatedDataSourceWithLayer().then(associatedDataSource => {
                    if (!associatedDataSource) {
                        return this._createAssociatedDataSourceWithUrl();
                    }
                    return associatedDataSource;
                });
            }
            else {
                const layerDef = yield this.fetchLayerDefinition();
                // We might create this ds from a view, so we need to compute the feature service url here
                const associatedFeatureLayerUrl = `${this.getAssociatedFeatureServerUrl()}/${layerDef.associatedLayerID}`;
                const dsId = this._getNewAssociatedDataSourceId();
                let dsJson = ___WEBPACK_IMPORTED_MODULE_0__.dataSourceJsonCreator.createDataSourceJsonByLayerDefinition(dsId, layerDef, associatedFeatureLayerUrl);
                // The building-component's associated feature layer's ID url is different from the others, set it manually
                dsJson = dsJson.set('url', associatedFeatureLayerUrl);
                dsJson = this._mergeAssociatedDataSourceJson(dsJson).setIn(['type'], _interfaces__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.FeatureLayer);
                const options = {
                    id: dsJson.id,
                    dataSourceJson: dsJson,
                    associatedDataSource: this
                };
                const featureDs = yield this.dataSourceManager.createDataSource(options);
                this.associatedDataSource = featureDs;
            }
        });
    }
    getAssociatedFeatureServerUrl() {
        const sceneServiceUrlArray = jimu_core__WEBPACK_IMPORTED_MODULE_2__.dataSourceUtils.getFullArcGISServiceUrl(this.url, false).split('/');
        sceneServiceUrlArray[sceneServiceUrlArray.length - 1] = 'FeatureServer';
        const featureServiceUrl = sceneServiceUrlArray.join('/');
        return featureServiceUrl;
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/building-group-sublayer-data-source-impl.ts":
/*!************************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/building-group-sublayer-data-source-impl.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingGroupSubLayerDataSourceImpl: () => (/* binding */ BuildingGroupSubLayerDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./jimu-core/lib/data-sources/index.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-core */ "jimu-core");




class BuildingGroupSubLayerDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_0__.AbstractLayerFolderDataSource {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.BuildingGroupSubLayer;
    }
    fetchServiceDefinition() {
        if (!this.serviceDefinition) {
            // Building-group layer does not have a corresponding service, use it's layerDefinition as serviceDefinition
            // Otherwise the label can not be displayed
            this.serviceDefinition = this.layerDefinition;
        }
        return Promise.resolve(this.layerDefinition || {});
    }
    createChildDataSourceOptionsById(childDsId, jimuChildId, childId) {
        const subLayerUrl = !this.layer ? this.getSubLayerUrlByChildId(childId) : '';
        const serviceInfo = {
            url: subLayerUrl,
            layerDefinition: !this.layer ? this.getSubLayerDefinitionByChildId(childId) : null
        };
        const subLayer = this.getSubLayerByChildId(childId);
        // Override the url since the naming format is different
        const dsJson = ___WEBPACK_IMPORTED_MODULE_2__.dataSourceJsonCreator.createDataSourceJson(childDsId, subLayer, { portalUrl: '' }, serviceInfo)
            .set('url', subLayerUrl);
        const dsJsonInRootDs = jimu_core__WEBPACK_IMPORTED_MODULE_3__.dataSourceUtils.getChildDsJsonFromRootDs(this, jimuChildId);
        const mergedDsJson = dsJson.merge(dsJsonInRootDs, { deep: true });
        const option = {
            id: childDsId,
            dataSourceJson: mergedDsJson,
            jimuChildId: jimuChildId,
            parentDataSource: this,
            serviceUrl: this.serviceUrl
        };
        if (this.layer) {
            option.layer = subLayer;
        }
        else if (this.serviceDefinition) {
            option.layerDefinition = this.getSubLayerDefinitionByChildId(childId);
        }
        return option;
    }
    getChildIds() {
        if (this.layer) {
            const subLayers = this.layer.sublayers;
            return subLayers.toArray().map(layer => {
                const id = this.getChildIdByLayer(layer);
                return id;
            });
        }
        else if (this.layerDefinition) {
            const childIds = this.layerDefinition.sublayers.map(def => def.id);
            return childIds;
        }
        return [];
    }
    getSubLayerByChildId(childId) {
        if (!this.layer) {
            return null;
        }
        const subLayers = this.layer.sublayers.toArray();
        for (const subLayer of subLayers) {
            const id = this.getChildIdByLayer(subLayer);
            if (id === childId) {
                return subLayer;
            }
        }
        return null;
    }
    getSubLayerDefinitionByChildId(childId) {
        if (!this.layerDefinition) {
            return null;
        }
        for (const subLayerDef of this.layerDefinition.sublayers) {
            if (subLayerDef.id.toString() === childId.toString()) {
                if (subLayerDef.layerType === 'group') {
                    subLayerDef.layerType = _interfaces__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.BuildingGroupSubLayer;
                }
                else if (subLayerDef.layerType === '3DObject') {
                    subLayerDef.layerType = _interfaces__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.BuildingComponentSubLayer;
                }
                return subLayerDef;
            }
        }
        return null;
    }
    getSubLayerUrlByChildId(childId) {
        const subLayerDef = this.getSubLayerDefinitionByChildId(childId);
        return subLayerDef.layerType === _interfaces__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.BuildingGroupSubLayer ? null : `${this.serviceUrl}/sublayers/${childId}`;
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/building-scene-layer-data-source-impl.ts":
/*!*********************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/building-scene-layer-data-source-impl.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildingSceneLayerDataSourceImpl: () => (/* binding */ BuildingSceneLayerDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./jimu-core/lib/data-sources/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");




class BuildingSceneLayerDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_2__.AbstractLayerFolderDataSource {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_3__.DataSourceTypes.BuildingSceneLayer;
        if (options.layer) {
            const urlArray = options.layer.url.split('/');
            if (urlArray[urlArray.length - 1] === 'SceneServer') {
                // Compute the actual url for the building-scene layer
                this.url = `${options.layer.url}/layers/${options.layer.layerId}`;
            }
        }
    }
    createChildDataSourceOptionsById(childDsId, jimuChildId, childId) {
        const subLayerUrl = !this.layer ? this.getSubLayerUrlByChildId(childId) : '';
        const serviceInfo = {
            url: subLayerUrl,
            layerDefinition: !this.layer ? this.getSubLayerDefinitionByChildId(childId) : null
        };
        const subLayer = this.getSubLayerByChildId(childId);
        // Override the url since the naming format is different
        const dsJson = ___WEBPACK_IMPORTED_MODULE_1__.dataSourceJsonCreator.createDataSourceJson(childDsId, subLayer, { portalUrl: '' }, serviceInfo)
            .set('url', subLayerUrl);
        const dsJsonInRootDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getChildDsJsonFromRootDs(this, jimuChildId);
        const mergedDsJson = dsJson.merge(dsJsonInRootDs, { deep: true });
        const option = {
            id: childDsId,
            dataSourceJson: mergedDsJson,
            jimuChildId: jimuChildId,
            parentDataSource: this,
            serviceUrl: this.url
        };
        if (this.layer) {
            option.layer = subLayer;
        }
        else if (this.serviceDefinition) {
            option.layerDefinition = this.getSubLayerDefinitionByChildId(childId);
        }
        return option;
    }
    getChildIds() {
        if (this.layer) {
            const subLayers = this.layer.sublayers;
            return subLayers.toArray().map(layer => {
                const id = this.getChildIdByLayer(layer);
                return id;
            });
        }
        else if (this.serviceDefinition) {
            const subLayerDefinitions = this.serviceDefinition.sublayers;
            const ret = subLayerDefinitions.map(subLayerDef => {
                return subLayerDef.id;
            });
            return ret;
        }
        return [];
    }
    getSubLayerByChildId(childId) {
        if (!this.layer) {
            return null;
        }
        const subLayers = (this.layer).sublayers.toArray();
        for (const subLayer of subLayers) {
            const id = this.getChildIdByLayer(subLayer);
            if (id === childId) {
                return subLayer;
            }
        }
        return null;
    }
    getSubLayerDefinitionByChildId(childId) {
        // Only get subLayerDefinition from this method, because the layerType is not unique, we need to override it
        if (!this.serviceDefinition) {
            return null;
        }
        const subLayerDefinitions = this.serviceDefinition.sublayers;
        for (const subLayerDef of subLayerDefinitions) {
            if (subLayerDef.id === childId) {
                // The layerType may have been overwritten already
                if (subLayerDef.layerType === 'group') {
                    subLayerDef.layerType = _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedJSAPILayerTypes.BuildingGroupSubLayer;
                }
                else if (subLayerDef.layerType === '3DObject') {
                    subLayerDef.layerType = _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedJSAPILayerTypes.BuildingComponentSubLayer;
                }
                return subLayerDef;
            }
        }
        return null;
    }
    getSubLayerUrlByChildId(childId) {
        // subLayerDefinition is still available with a web-scene
        const subLayerDef = this.getSubLayerDefinitionByChildId(childId);
        const serviceUrl = this.url;
        return subLayerDef.layerType === _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedJSAPILayerTypes.BuildingGroupSubLayer ? null : `${serviceUrl}/sublayers/${childId}`;
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/csv-data-source-impl.ts":
/*!****************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/csv-data-source-impl.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSVDataSourceImpl: () => (/* binding */ CSVDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class CSVDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_2__.AbstractLoadableDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.CSV;
        const dsJson = this.getDataSourceJson();
        if (dsJson.data) {
            this.records = dsJson.data.asMutable().map(d => new _base_classes__WEBPACK_IMPORTED_MODULE_2__.SimpleDataRecordImpl(d, this));
            this.setStatus(_interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Loaded);
        }
        else {
            this.url = dsJson.url;
        }
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
        if (this.url) {
            /**
             * Cache request since -
             * 1. we need to cache the request since the records are saved here, which means, the response size may be large.
             * 2. we don't know the URL schema of this type of data source, can not cache them by default.
             */
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.registerCacheableUrl(this.url);
        }
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
    doLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(this.url).then((res) => __awaiter(this, void 0, void 0, function* () { return yield res.json(); })).then((data) => {
                return data.map(d => new _base_classes__WEBPACK_IMPORTED_MODULE_2__.SimpleDataRecordImpl(d, this));
            });
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/error-data-source-impl.ts":
/*!******************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/error-data-source-impl.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDataSourceImpl: () => (/* binding */ ErrorDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");


class ErrorDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.Error;
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/feature-layer-data-source-impl.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/feature-layer-data-source-impl.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureLayerDataSourceImpl: () => (/* binding */ FeatureLayerDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-record-impl */ "./jimu-core/lib/data-sources/implementations/feature-record-impl.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _support_feature_layer_capabilities_impl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/feature-layer-capabilities-impl */ "./jimu-core/lib/data-sources/support/feature-layer-capabilities-impl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class FeatureLayerDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_2__.AbstractQueriableDataSource)) {
    constructor(options) {
        var _a;
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_3__.DataSourceTypes.FeatureLayer;
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
        this.layerId = dsJson.layerId;
        if (options.layer) {
            this.layer = options.layer;
        }
        else if (options.belongToDataSource && options.belongToDataSource.layer) {
            this.layer = options.belongToDataSource.layer;
        }
        if (this.getDataSourceJson().isDataInDataSourceInstance) {
            // Reset other sources info.
            this.url = null;
            this.itemId = null;
            this.portalUrl = null;
            this.setCapabilities(new _support_feature_layer_capabilities_impl__WEBPACK_IMPORTED_MODULE_4__.FeatureLayerCapabilitiesImpl({ layerDefinition: null, isClientSide: true }));
        }
        if ((_a = this.layer) === null || _a === void 0 ? void 0 : _a.portalItem) {
            this.setItemInfo(this.layer.portalItem.sourceJSON);
        }
        // Associated feature layer should use the same case-sensitive with its scene layer.
        if (this.getAssociatedDataSource()) {
            this.isSqlCaseSensitive = this.getAssociatedDataSource().isSqlCaseSensitive;
        }
    }
    ready() {
        return super.ready().then(() => {
            return this.replaceSubLayerWithFeatureLayer();
        });
    }
    setAssociatedDataSource(associatedDataSource) {
        this.associatedDataSource = associatedDataSource;
    }
    getAssociatedDataSource() {
        return this.associatedDataSource;
    }
    getIdField() {
        return this.getSchema().idField;
    }
    getGeometryType() {
        const layerDef = this.getLayerDefinition();
        if ((layerDef === null || layerDef === void 0 ? void 0 : layerDef.type) === _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedLayerServiceTypes.Table) {
            return null;
        }
        else {
            return this.getDataSourceJson().geometryType || (layerDef === null || layerDef === void 0 ? void 0 : layerDef.geometryType);
        }
    }
    doQuery(realQuery, originQuery) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            this._printUseAllFieldsWarning(realQuery.outFields);
            if (!this.getCapabilities()) {
                return Promise.reject('Unable to perform query. Waiting for layer capabilities.');
            }
            if (!realQuery || !originQuery) {
                return Promise.reject('Unable to perform query. Query parameter is null.');
            }
            let result = null;
            let errorMsg = '';
            const cap = this.getCapabilities().getQueryCapabilities();
            /**
             * `originQuery` doesn't merge other queries in the current data source, to get full origin query, need to merge real query.
             */
            const originQueryWithOtherQueriesInDs = realQuery.merge(originQuery);
            if (realQuery.outStatistics) {
                const matchStatistics = realQuery.outStatistics.some(stat => stat.statisticType.includes('percentile')) ? cap.supportsStatistics && cap.supportsPercentileStatistics : cap.supportsStatistics;
                if (matchStatistics) {
                    let fixedQuery = realQuery;
                    /**
                     * The result may contain more than one records.
                     */
                    if (((_a = realQuery.groupByFieldsForStatistics) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        /**
                         * Remove pagination if service doesn't support pagination on statistics query with group by.
                         */
                        if (!cap.supportsPaginationOnStatisticsWithGroupBy) {
                            fixedQuery = fixedQuery.without('page').without('pageSize');
                        }
                        /**
                         * Remove order by if the order by fields don't match service capabilities.
                         */
                        if (((_b = fixedQuery.orderByFields) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                            let matchStatOrderBy = false;
                            if (cap.supportsOrderBy) {
                                if (cap.supportsOrderByOnlyOnLayerFields) { // only support order by fields to be layer fields, can not use out statistic name as order by fields
                                    const useOutStatNameAsOrderBy = fixedQuery.orderByFields.some(oField => realQuery.outStatistics.map(stat => stat.outStatisticFieldName).some(outStatName => oField.split(' ').includes(outStatName)));
                                    matchStatOrderBy = !useOutStatNameAsOrderBy;
                                }
                                else {
                                    matchStatOrderBy = true;
                                }
                            }
                            if (!matchStatOrderBy) {
                                fixedQuery = fixedQuery.without('orderByFields');
                            }
                        }
                    }
                    else {
                        /**
                         * The result only contains one record.
                         */
                        fixedQuery = realQuery.without('page').without('pageSize').without('orderByFields');
                    }
                    result = yield this.doQueryByCapabilities(fixedQuery);
                    result = this.enhanceStatisticQueryResult(result, fixedQuery, originQueryWithOtherQueriesInDs);
                }
                else {
                    errorMsg = 'Do not support statistic query.';
                }
            }
            else {
                const matchOrderBy = ((_c = realQuery.orderByFields) === null || _c === void 0 ? void 0 : _c.length) > 0 ? cap.supportsOrderBy : true;
                const matchDistinct = realQuery.returnDistinctValues ? cap.supportsDistinct && !!realQuery.outFields : true;
                if (matchOrderBy && matchDistinct) {
                    const matchPagination = cap.supportsPagination;
                    const matchPaginationWithDistinct = realQuery.returnDistinctValues ? cap.supportsPaginationOnDistinct : true;
                    if (matchPagination && matchPaginationWithDistinct) {
                        result = yield this.doQueryByCapabilities(realQuery);
                    }
                    else {
                        if (realQuery.returnDistinctValues) {
                            result = yield this.doQueryByCapabilities(realQuery.without('page').without('pageSize'));
                            /**
                             * For distinct query which service does not support pagination, we can only query one page.
                             * To find other records, please use the `where` query parameter to narrow the results.
                             */
                            result.queryParams = realQuery.set('page', 1);
                        }
                        else {
                            result = yield this.doQueryWithoutPagination(realQuery);
                        }
                    }
                }
                else {
                    if (!matchOrderBy) {
                        errorMsg = 'Do not support orderBy.';
                    }
                    else if (!matchDistinct) {
                        if (!cap.supportsDistinct) {
                            errorMsg = 'Do not support distinct.';
                        }
                        else if (!realQuery.outFields) {
                            errorMsg = 'outFields should be specified for returnDistinctValues.';
                        }
                    }
                }
            }
            if (result) {
                return result;
            }
            else {
                return Promise.reject(`Unable to perform query. Please check your parameters. ${errorMsg}`);
            }
        });
    }
    applyUsedFields(query, usedFields) {
        var _a;
        /**
         * If no used fields or is statistic query, do not change query.
         */
        if (!usedFields || (query === null || query === void 0 ? void 0 : query.outStatistics)) {
            return query;
        }
        const q = Object.assign({}, query);
        /**
         * 1. Load used fields.
         */
        if (!q.returnDistinctValues && usedFields) {
            q.outFields = typeof usedFields === 'string' ? [usedFields] : usedFields;
        }
        /**
         * 2. Load id field.
         * Add id field automatically when loading missing fields. Missing fields may only the diff between loaded fields and used fields.
         */
        if (!q.returnDistinctValues && q.outFields && !q.outFields.includes('*')) {
            const jimuIdField = this.getIdField();
            if (jimuIdField && !q.outFields.includes(jimuIdField)) {
                q.outFields = q.outFields.concat(jimuIdField);
            }
        }
        /**
         * 3. Load type id field.
         * Add type id field automatically when loading missing fields. Missing fields may only the diff between loaded fields and used fields.
         * Please note, doesn't check returnDistinctValues here because SQL expression builder needs type id field but won't set it to outFields when query unique value.
         */
        if (q.outFields && !q.outFields.includes('*')) {
            const originTypeIdField = (_a = this.getLayerDefinition()) === null || _a === void 0 ? void 0 : _a.typeIdField;
            const jimuTypeIdField = this.findJimuFieldName(originTypeIdField);
            if (jimuTypeIdField && !q.outFields.includes(jimuTypeIdField)) {
                q.outFields = q.outFields.concat(jimuTypeIdField);
            }
        }
        return q;
    }
    getAllUsedFields(options) {
        var _a, _b;
        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
            console.group('All used fields');
        }
        const query = options === null || options === void 0 ? void 0 : options.queryParams;
        let usedFields = ((_a = query === null || query === void 0 ? void 0 : query.outFields) === null || _a === void 0 ? void 0 : _a.includes('*')) ? '*' : ((query === null || query === void 0 ? void 0 : query.outFields) || []);
        /**
         * If do not query unique values, will merge used fields in query params and used fields in widget json.
         * If query unique values, will use used fields in query parmas directly.
         */
        if (!(query === null || query === void 0 ? void 0 : query.returnDistinctValues)) {
            const usedFieldsInQueryParams = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUsedFieldsFromFeatureLayerQueryParams(query, this, 'feature');
            if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
                console.log('Query params used fields are:', usedFieldsInQueryParams);
            }
            if (usedFieldsInQueryParams.includes('*')) {
                usedFields = '*';
            }
            else {
                const usedFieldsInConfigAndOnDemand = super.getAllUsedFields(options);
                usedFields = usedFieldsInConfigAndOnDemand === '*' ? '*' : Array.from(new Set([...usedFieldsInConfigAndOnDemand, ...usedFieldsInQueryParams]));
            }
            /**
             * Add id field.
             */
            const jimuIdField = this.getIdField();
            if (jimuIdField && usedFields !== '*' && !usedFields.includes(jimuIdField)) {
                usedFields.push(jimuIdField);
            }
        }
        /**
         * Add type id field.
         * Load type id field even if returnDistinctValues is true, it is by design.
         * Still need to get type id field values to get domain fields resolved even if widgets want to get unique values.
         */
        const originTypeIdField = (_b = this.getLayerDefinition()) === null || _b === void 0 ? void 0 : _b.typeIdField;
        const jimuTypeIdField = this.findJimuFieldName(originTypeIdField);
        if (jimuTypeIdField && usedFields !== '*' && !usedFields.includes(jimuTypeIdField)) {
            usedFields.push(jimuTypeIdField);
        }
        /**
         * If used fields are not * but include all fields in schema, change it to *.
         */
        if (usedFields !== '*' && usedFields.length === Object.keys(this.getSchema().fields).length) {
            if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
                console.warn('All used fields are * since used fields length equals schema fields length.');
            }
            usedFields = '*';
        }
        if ((options === null || options === void 0 ? void 0 : options.logLevel) === 'debug') {
            console.log('All used fields are:', usedFields);
            console.groupEnd();
        }
        return usedFields;
    }
    doQueryWithoutPagination(query) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            // Get object ids which match the query params.
            const queryByCapabilities = query.without('page').without('pageSize').set('returnIdsOnly', true);
            const objectIdsQueryResult = yield this.doQueryByCapabilities(queryByCapabilities);
            const matchedObjectIds = ((_b = (_a = objectIdsQueryResult.records) === null || _a === void 0 ? void 0 : _a.map(r => +r.getId())) === null || _b === void 0 ? void 0 : _b.filter(id => !isNaN(id))) || [];
            // Get object ids which match the page and the pageSize.
            const page = typeof query.page === 'number' ? query.page : 1;
            const pageSize = typeof query.pageSize === 'number' ? query.pageSize : this.getQueryPageSize();
            const objectIds = this.sliceByPage(matchedObjectIds, pageSize, page);
            if (objectIds.length === 0) {
                return { queryParams: query, records: [], count: 0 };
            }
            // Query records by object ids.
            const result = yield this.doQueryByCapabilities((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ objectIds, outFields: ((_c = query.outFields) === null || _c === void 0 ? void 0 : _c.asMutable()) || ['*'], returnGeometry: query.returnGeometry }));
            result.queryParams = query;
            return result;
        });
    }
    /**
     * `queryByCapabilities` should match capabilities of the source (AGOL/portal item or a remote database) of the current data source.
     */
    doQueryByCapabilities(queryByCapabilities) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { queryParams: queryByCapabilities, records: [], sourceVersion: this.getSourceVersion() };
            /**
             * The reason of use layer.query when has layer is:
             * 1 some layer does not have url:
             *   1.1 feature collection item, records are saved in item.
             *   1.2 source records passed to current data source directly.
             * 2 features returned from layer.query() have symbol object
             */
            /**
             * If has source records, use these records to create a JS API feature layer to do query.
             */
            if (this.getDataSourceJson().isDataInDataSourceInstance) {
                if (this.getSourceRecords().length > 0) {
                    const sourceRecords = this.getSourceRecords();
                    /**
                     * If query params is empty, no need to load JS API to create layer.
                     */
                    if (this.isQueryParamsEmpty(queryByCapabilities)) {
                        result = { queryParams: queryByCapabilities, records: sourceRecords, sourceVersion: this.getSourceVersion() };
                    }
                    else {
                        result = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createFeatureLayerByRecords(this, sourceRecords, this.getSourceVersion()).then(({ layer, sourceVersion }) => __awaiter(this, void 0, void 0, function* () {
                            const r = yield this.doQueryByLayerCapabilities(queryByCapabilities, layer);
                            return Object.assign(Object.assign({}, r), { sourceVersion });
                        }));
                    }
                }
            }
            else if (this.layer) { // If has a JS API feature layer, use the layer to do query.
                result = yield this.doQueryByLayerCapabilities(queryByCapabilities, this.layer);
            }
            else if (this.url) { // If has url, use the url (via REST API directly) to do query.
                const format = ((_c = (_b = (_a = this.getCapabilities().getQueryCapabilities().supportedQueryFormats) === null || _a === void 0 ? void 0 : _a.toLowerCase) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.includes('pbf')) ? 'pbf' : 'json';
                /**
                 * If should use pbf format -
                 *  1. if do not have layer for rest query, use url to do query, at the same time, create a layer for rest query.
                 *  2. if have layer for rest query, use the layer to do query.
                 */
                if (format === 'pbf' && this.layerForRestQuery) {
                    result = yield this.doQueryByLayerCapabilities(queryByCapabilities, this.layerForRestQuery);
                }
                else {
                    result = yield this.doQueryByUrlCapabilities(queryByCapabilities, this.url);
                }
                if (format === 'pbf' && !this.layerForRestQuery) {
                    this.createLayerForRestQuery();
                }
            }
            else { // Use item id to create a JS API feature layer to do query.
                result = yield this.createLayerByItemId().then(layer => this.doQueryByLayerCapabilities(queryByCapabilities, layer));
            }
            return result;
        });
    }
    createLayerForRestQuery() {
        /**
         * All data views and local data soruces share the same layer to do rest query.
         */
        if (this.isDataView || this.isLocal) {
            this.getMainDataSource().createLayerForRestQuery();
            return;
        }
        if (!this.layerForRestQueryPromise) {
            this.layerForRestQueryPromise = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createJSAPILayerByDataSource(this, false);
        }
        this.layerForRestQueryPromise.then((layer) => {
            this.layerForRestQuery = layer;
            this.getAllDerivedDataSources().forEach((ds) => {
                ds.layerForRestQuery = layer;
            });
        });
    }
    isQueryParamsEmpty(queryParams) {
        if (!queryParams) {
            return true;
        }
        // We should always return geometry since spatial query needs it.
        const q = queryParams.without('page').without('pageSize').without('returnGeometry').without('returnZ').without('sqlExpression').without('outFields');
        const isEmpty = Object.keys(q).length === 0;
        if (isEmpty) {
            return true;
        }
        // remove ' ', '(' and ')'
        const trimWhere = typeof q.where === 'string' ? q.where.replace(/\s+/g, '').replace(/\(/g, '').replace(/\)/g, '') : null;
        const emptyWheres = ['', '1=1'];
        const isOnlyEmptyWhere = Object.keys(q).length === 1 && emptyWheres.some(w => w === trimWhere);
        return isOnlyEmptyWhere;
    }
    /**
     * Some statistic query params are not supported according to the feature service capability. See https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm.
     * We will remove these query params before sending query request. See `doQuery` method.
     * However, we can enhance the result after the query request is back.
     *
     * For example, if `supportsOrderByOnlyOnLayerFields` is true, only fields from the layer's fields array can be used with the `orderByFields` parameter,
     * the `outStatisticfieldName` from outStatistics can't be used. In the case, data source can help to sort the records and return an expected result.
     */
    enhanceStatisticQueryResult(queryResult, realQuery, originQueryWithOtherQueriesInDs) {
        var _a, _b;
        let fixedRecords = (_a = queryResult.records) === null || _a === void 0 ? void 0 : _a.slice();
        if (!fixedRecords) {
            return queryResult;
        }
        let fixedQueryParams = queryResult.queryParams;
        if (originQueryWithOtherQueriesInDs === null || originQueryWithOtherQueriesInDs === void 0 ? void 0 : originQueryWithOtherQueriesInDs.outStatistics) {
            if (originQueryWithOtherQueriesInDs.orderByFields && !(realQuery === null || realQuery === void 0 ? void 0 : realQuery.orderByFields)) {
                fixedRecords = fixedRecords.length > 1 ? this.sortRecordsByFields(fixedRecords, originQueryWithOtherQueriesInDs.orderByFields) : fixedRecords;
                fixedQueryParams = fixedQueryParams.set('orderByFields', originQueryWithOtherQueriesInDs.orderByFields);
            }
            if (typeof originQueryWithOtherQueriesInDs.pageSize === 'number' && typeof (realQuery === null || realQuery === void 0 ? void 0 : realQuery.pageSize) !== 'number') {
                const page = (_b = originQueryWithOtherQueriesInDs.page) !== null && _b !== void 0 ? _b : 1;
                fixedRecords = this.sliceByPage(fixedRecords, originQueryWithOtherQueriesInDs.pageSize, page);
                fixedQueryParams = fixedQueryParams.set('pageSize', originQueryWithOtherQueriesInDs.pageSize);
                fixedQueryParams = fixedQueryParams.set('page', originQueryWithOtherQueriesInDs.page);
            }
            const matchStatName = originQueryWithOtherQueriesInDs.outStatistics.every(stat => !(stat === null || stat === void 0 ? void 0 : stat.outStatisticFieldName) || fixedRecords.some(r => typeof r.getFieldValue(stat.outStatisticFieldName) !== 'undefined'));
            if (!matchStatName) {
                /**
                 * Some services use lower/upper case of the outStatisticFieldName as field name of the returned feature.
                 */
                originQueryWithOtherQueriesInDs.outStatistics.forEach(stat => {
                    if (stat === null || stat === void 0 ? void 0 : stat.outStatisticFieldName) {
                        const isOutStatNameLowerCase = fixedRecords.some(r => typeof r.getFieldValue(stat.outStatisticFieldName.toLowerCase()) !== 'undefined');
                        const isOutStatNameUpperCase = fixedRecords.some(r => typeof r.getFieldValue(stat.outStatisticFieldName.toUpperCase()) !== 'undefined');
                        fixedRecords.forEach(r => {
                            const realOutStatName = isOutStatNameLowerCase ? stat.outStatisticFieldName.toLowerCase() : (isOutStatNameUpperCase ? stat.outStatisticFieldName.toUpperCase() : null);
                            if (realOutStatName) {
                                r.feature.attributes[stat.outStatisticFieldName] = r.getFieldValue(realOutStatName);
                                delete r.feature.attributes[realOutStatName];
                            }
                        });
                    }
                });
            }
        }
        return Object.assign(Object.assign({}, queryResult), { records: fixedRecords, queryParams: fixedQueryParams });
    }
    sliceByPage(records, pageSize, page) {
        const start = pageSize * (page - 1); // include start
        const end = start + pageSize; // not include end
        return records.slice(start, end);
    }
    sortRecordsByFields(records, orderByFields) {
        const sortedRecords = records.filter(r => !!r).sort((r1, r2) => this.compareRecordsByFields(r1, r2, orderByFields));
        return sortedRecords;
    }
    compareRecordsByFields(r1, r2, orderByFields) {
        var _a, _b;
        let index = 0;
        // Default result is 0, which means don't change the order of r1 and r2.
        let res = 0;
        while (index < orderByFields.length) {
            const jimuFieldName = orderByFields[index].split(' ')[0];
            // Assume that order is ASC.
            let compareByValue = 0;
            // If orderby field doesn't follow 'f1 ASC' or 'f1', won't change position of r1 and r2.
            if (orderByFields[index].split(' ').length > 2) {
                compareByValue = 0;
            }
            else if (typeof r1.getFieldValue(jimuFieldName) !== typeof r2.getFieldValue(jimuFieldName)) {
                // If types of the two fields are not same, put record which type is not same with orderby field type before the other one.
                const jimuField = (_b = (_a = this.getSchema()) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[jimuFieldName];
                // If schema has the orderby field, use its type, or, the orderby field is statistics query result field, type is number.
                const jimuTypeOfOrderByField = (jimuField === null || jimuField === void 0 ? void 0 : jimuField.type) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number;
                // Date field's value is actually number, after format, will be string.
                // TODO: If have other types of jimu field type, need to handle them.
                const typeOfOrderByField = jimuTypeOfOrderByField === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String ? 'string' : 'number';
                /* eslint-disable-next-line */
                const r1TypeIsSameWithOrderByField = typeof r1.getFieldValue(jimuFieldName) === typeOfOrderByField;
                /* eslint-disable-next-line */
                const r2TypeIsSameWIthOrderByField = typeof r2.getFieldValue(jimuFieldName) === typeOfOrderByField;
                if (r1TypeIsSameWithOrderByField && !r2TypeIsSameWIthOrderByField) {
                    // r2 should be before r1
                    compareByValue = 1;
                }
                else if (!r1TypeIsSameWithOrderByField && r2TypeIsSameWIthOrderByField) {
                    // r1 should be before r2
                    compareByValue = -1;
                }
                else {
                    // do not change position of r1 and r2
                    compareByValue = 0;
                }
            }
            else { // Types of the two fields are the same.
                const valueOfR1 = r1.getFieldValue(jimuFieldName);
                const valueOfR2 = r2.getFieldValue(jimuFieldName);
                compareByValue = this.getCompareValueResult(valueOfR1, valueOfR2);
            }
            // Default order is ascending.
            const order = orderByFields[index].split(' ')[1];
            if (order === 'DESC') {
                res = -compareByValue;
            }
            else { // Default order is 'ASC'
                res = compareByValue;
            }
            // If can not sort r1 and r2 according to the current field, will try to sort the two records by the next field.
            if (res === 0) {
                index++;
                continue;
            }
            else {
                break;
            }
        }
        return res;
    }
    /** .
     * Negative number means value of r1 should be before value of r2,
     * 0 means value of r1 is equal as value of r2,
     * positive means value of r1 should be after value of r2.
     */
    getCompareValueResult(v1, v2) {
        let res = 0;
        if (typeof v1 === 'string' && typeof v2 === 'string') {
            res = v1.localeCompare ? v1.localeCompare(v2) : 0;
        }
        else if (typeof v1 === 'number' && typeof v2 === 'number') {
            res = v1 - v2;
        }
        return res;
    }
    doQueryCount(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * See comments in doQuery method.
             */
            if (this.getDataSourceJson().isDataInDataSourceInstance) {
                if (this.getSourceRecords().length === 0) {
                    return yield Promise.resolve({ queryParams: queryParams, count: 0, sourceVersion: this.getSourceVersion() });
                }
                const sourceRecords = this.getSourceRecords();
                /**
                 * If query params is empty, no need to load JS API to create layer.
                 */
                if (this.isQueryParamsEmpty(queryParams)) {
                    return Promise.resolve({ queryParams: queryParams, count: sourceRecords.length, sourceVersion: this.getSourceVersion() });
                }
                return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createFeatureLayerByRecords(this, sourceRecords, this.getSourceVersion()).then(({ layer, sourceVersion }) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield this.doQueryCountByLayer(queryParams, layer);
                    return Object.assign(Object.assign({}, result), { sourceVersion });
                }));
            }
            else if (this.layer) {
                return yield this.doQueryCountByLayer(queryParams, this.layer);
            }
            else if (this.url) {
                return yield this.doQueryCountByUrl(queryParams, this.url);
            }
            else {
                return yield this.createLayerByItemId().then(layer => this.doQueryCountByLayer(queryParams, layer));
            }
        });
    }
    doQueryIds(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * See comments in doQuery method.
             */
            if (this.getDataSourceJson().isDataInDataSourceInstance) {
                if (this.getSourceRecords().length === 0) {
                    return Promise.resolve({ queryParams: queryParams, ids: [], sourceVersion: this.getSourceVersion() });
                }
                const sourceRecords = this.getSourceRecords();
                /**
                 * If query params is empty, no need to load JS API to create layer.
                 */
                if (this.isQueryParamsEmpty(queryParams)) {
                    return Promise.resolve({ queryParams: queryParams, ids: sourceRecords.map(r => r.getId()), sourceVersion: this.getSourceVersion() });
                }
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createFeatureLayerByRecords(this, sourceRecords, this.getSourceVersion()).then(({ layer, sourceVersion }) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield this.doQueryIdsByLayer(queryParams, layer);
                    return Object.assign(Object.assign({}, result), { sourceVersion });
                }));
            }
            else if (this.layer) {
                return this.doQueryIdsByLayer(queryParams, this.layer);
            }
            else if (this.url) {
                return this.doQueryIdsByUrl(queryParams, this.url);
            }
            else {
                return this.createLayerByItemId().then(layer => this.doQueryIdsByLayer(queryParams, layer));
            }
        });
    }
    doAddRecordToServerSideSource(record) {
        if (this.layer) {
            return this.addRecordByLayer(record, this.layer);
        }
        else if (this.url) {
            return this.addRecordByUrl(record, this.url);
        }
        else {
            return this.createLayerByItemId().then(layer => this.addRecordByLayer(record, layer));
        }
    }
    doDeleteOneRecordFromServerSideSource(record) {
        if (this.layer) {
            return this.deleteOneRecordByLayer(record, this.layer);
        }
        else if (this.url) {
            return this.deleteOneRecordByUrl(record, this.url);
        }
        else {
            return this.createLayerByItemId().then(layer => this.deleteOneRecordByLayer(record, layer));
        }
    }
    doUpdateRecordsInServerSideSource(records) {
        if (this.layer) {
            return this.updateRecordsByLayer(records, this.layer);
        }
        else if (this.url) {
            return this.updateRecordsByUrl(records, this.url);
        }
        else {
            return this.createLayerByItemId().then(layer => this.updateRecordsByLayer(records, layer));
        }
    }
    doQueryCountByLayer(queryParams, layer) {
        return __awaiter(this, void 0, void 0, function* () {
            const layerView = this.getLayerViewForClientSideQuery(layer);
            let count;
            let isClientQuerySuccess = false;
            if (layerView) {
                const clientQueryResult = yield layerView.clientQueryFeatureCount(queryParams);
                if (clientQueryResult === null || clientQueryResult === void 0 ? void 0 : clientQueryResult.success) {
                    isClientQuerySuccess = true;
                    count = clientQueryResult.data;
                }
            }
            if (!isClientQuerySuccess) {
                const query = yield this.changeJimuQueryToJSAPIQuery(queryParams);
                count = yield layer.queryFeatureCount(query);
            }
            return {
                queryParams: queryParams,
                count
            };
        });
    }
    doQueryCountByUrl(queryParams, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.changeJimuQueryToRestAPIQuery(queryParams);
            delete query.resultRecordCount;
            delete query.resultOffset;
            if (!query.returnCountOnly) {
                query.returnCountOnly = true;
            }
            return yield this._q(query, url).then((queryResponse) => {
                return {
                    queryParams: queryParams,
                    count: queryResponse.count
                };
            });
        });
    }
    doQueryIdsByLayer(queryParams, layer) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.changeJimuQueryToJSAPIQuery(queryParams);
            const layerView = this.getLayerViewForClientSideQuery(layer);
            let ids;
            let isClientQuerySuccess = false;
            if (layerView) {
                const clientQueryResult = yield layerView.clientQueryObjectIds(queryParams);
                if (clientQueryResult === null || clientQueryResult === void 0 ? void 0 : clientQueryResult.success) {
                    isClientQuerySuccess = true;
                    ids = clientQueryResult.data;
                }
            }
            if (!isClientQuerySuccess) {
                ids = yield layer.queryObjectIds(query);
            }
            // ids maybe null, null means zero ids
            if (!ids) {
                ids = [];
            }
            return {
                queryParams: queryParams,
                ids: ids.map(i => `${i}`)
            };
        });
    }
    doQueryIdsByUrl(queryParams, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.changeJimuQueryToRestAPIQuery(queryParams);
            delete query.resultRecordCount;
            delete query.resultOffset;
            delete query.returnCountOnly;
            delete query.returnGeometry;
            if (!query.returnIdsOnly) {
                query.returnIdsOnly = true;
            }
            return this._q(query, url).then((queryResponse) => {
                var _a;
                return {
                    queryParams: queryParams,
                    ids: (_a = queryResponse.objectIds) === null || _a === void 0 ? void 0 : _a.map(i => `${i}`)
                };
            });
        });
    }
    doQueryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doQueryByCapabilities((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ objectIds: [parseInt(id)], returnGeometry: true, returnZ: true }))
                .then(result => result.records[0]);
        });
    }
    queryById(id) {
        const _super = Object.create(null, {
            queryById: { get: () => super.queryById }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return yield _super.queryById.call(this, id);
        });
    }
    getConfigQueryParams() {
        var _a;
        const query = this.getDataViewConfig();
        if (!query) {
            return null;
        }
        const configQuery = {
            where: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(query.where, this).sql,
            sqlExpression: (_a = query.where) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true }),
            orderByFields: this.getOrderByArray(query.orderBy)
        };
        return configQuery;
    }
    mergeQueryParams(...queries) {
        queries = queries || [];
        let mergedQueries = queries.filter(q => q).reduce((res, q) => (Object.assign(Object.assign({}, res), q)), {});
        /**
         * 1. merge time.
         */
        const timeArr = queries.map(q => q === null || q === void 0 ? void 0 : q.time).filter(w => typeof w === 'number' || Array.isArray(w));
        const time = timeArr.length > 1 ? timeArr.reduce((res, t) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.mergeTimeExtent(res, t)), null) : timeArr[0];
        /**
         * Some services do not support temporal query. Add time only when needed.
         */
        if (time === -1) {
            mergedQueries.where = '1=2';
            // The result will be empty, no need to merge other queries.
            return mergedQueries;
        }
        else if (typeof time === 'number' || Array.isArray(time)) {
            mergedQueries.time = time;
        }
        /**
         * 2. merge where.
         */
        const whereArr = queries.map(q => q === null || q === void 0 ? void 0 : q.where).filter(w => w);
        const where = whereArr.length > 1 ? whereArr.map(w => `(${w})`).join(' and ') : whereArr[0];
        mergedQueries = Object.assign(Object.assign({}, mergedQueries), { where: where ? `${where}` : '' });
        /**
         * 3. merge sqlExpression.
         */
        const sqlExpressionArr = queries.map(q => q === null || q === void 0 ? void 0 : q.sqlExpression).filter(s => s);
        const sqlExpression = sqlExpressionArr.length > 1
            ? sqlExpressionArr.reduce((res, s) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getMergedSQLExpressions([res, s], this)), null)
            : sqlExpressionArr[0];
        mergedQueries = Object.assign(Object.assign({}, mergedQueries), { sqlExpression });
        return mergedQueries;
    }
    getCurrentQueryParams(options) {
        const query = super.getCurrentQueryParams(options);
        return this.applyGDBVersionAndFix(query, options === null || options === void 0 ? void 0 : options.dataSourceToFormatSql);
    }
    getRealQueryParams(query, flag, options) {
        const rq = super.getRealQueryParams(query, flag, options);
        return this.applyGDBVersionAndFix(rq, options === null || options === void 0 ? void 0 : options.dataSourceToFormatSql);
    }
    getRemoteQueryParams() {
        if (this.getSchema().filter) {
            return { where: this.getSchema().filter };
        }
        return null;
    }
    applyGDBVersionAndFix(query, dataSourceToFormatSql) {
        if (this.getGDBVersion()) {
            query.gdbVersion = this.getGDBVersion();
        }
        let q = this.fixQueryParam((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(query));
        if (q.sqlExpression && dataSourceToFormatSql && dataSourceToFormatSql.isSqlCaseSensitive !== this.isSqlCaseSensitive) {
            q = q.set('where', jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(q.sqlExpression, dataSourceToFormatSql).sql);
        }
        return q.asMutable({ deep: true });
    }
    /**
     * Some query params have conflicts according to the feature layer query capability and we can not enhance it.
     * Will fix query object by removing these conflicts params.
     */
    fixQueryParam(q) {
        var _a, _b, _c;
        let fixedQuery = q;
        // TODO: other cases.
        if (q.outStatistics) {
            // orderByFields, page and pageSize may not be supported by service, but we can enhance it, see `doQuery` mothod.
            Object.keys(q).forEach(k => {
                if (!['outStatistics', 'where', 'gdbVersion', 'geometry', 'geometryType', 'spatialRel', 'distance', 'units', 'groupByFieldsForStatistics', 'time', 'orderByFields', 'havingClause', 'page', 'pageSize'].includes(k)) {
                    fixedQuery = fixedQuery.without(k);
                }
            });
        }
        if (q.returnDistinctValues && q.returnGeometry) {
            // returnDistinctValues can not work with returnGeometry.
            fixedQuery = fixedQuery.set('returnGeometry', false);
        }
        if (!q.returnDistinctValues && q.returnGeometry) {
            // Return z-values.
            fixedQuery = fixedQuery.set('returnZ', true);
        }
        if (!fixedQuery.outStatistics && !fixedQuery.returnDistinctValues && ((_a = fixedQuery.orderByFields) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const hasIdField = !!fixedQuery.orderByFields.find(f => f.split(' ')[0] === this.getIdField());
            if (!hasIdField) {
                fixedQuery = fixedQuery.set('orderByFields', fixedQuery.orderByFields.concat([`${this.getIdField()} ASC`]));
            }
        }
        if (fixedQuery.returnDistinctValues && ((_b = fixedQuery.outFields) === null || _b === void 0 ? void 0 : _b.length) && !((_c = fixedQuery.orderByFields) === null || _c === void 0 ? void 0 : _c.length)) {
            /**
             * When query distinct, we need to use one of the out fields to sort the query result.
             * It is a limitation of server. If we don't do it, server will use the id field to do sort and the id field is generally not in the out fields, which will result in an error.
             */
            fixedQuery = fixedQuery.set('orderByFields', [fixedQuery.outFields[0]]);
        }
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.areDatesInUnknownTimezone(this)) {
            fixedQuery = fixedQuery.set('timeReferenceUnknownClient', true);
        }
        return fixedQuery;
    }
    addRecordByLayer(record, layer) {
        return __awaiter(this, void 0, void 0, function* () {
            const feature = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToJSAPIGraphic(record.feature);
            const f = feature.clone();
            return layer.applyEdits({
                addFeatures: [f]
            }).then(response => {
                var _a, _b;
                const objectId = (_a = response.addFeatureResults[0]) === null || _a === void 0 ? void 0 : _a.objectId;
                if (typeof objectId !== 'number' || ((_b = response.addFeatureResults[0]) === null || _b === void 0 ? void 0 : _b.error)) {
                    return Promise.reject('Adding record failed.');
                }
                const idFeild = this.getIdField();
                f.attributes[idFeild] = objectId;
                // return a new record with a new value of id field
                return new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl(f, this);
            });
        });
    }
    addRecordByUrl(record, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const feature = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToRestAPIFeature(record.feature);
            const f = Object.assign({}, feature);
            const options = {
                url,
                features: [f]
            };
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(url, (session) => __awaiter(this, void 0, void 0, function* () {
                options.authentication = session;
                return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restFeatureLayer.addFeatures(options)
                    .then(response => {
                    var _a, _b;
                    const objectId = (_a = response.addResults[0]) === null || _a === void 0 ? void 0 : _a.objectId;
                    if (typeof objectId !== 'number' || !((_b = response.addResults[0]) === null || _b === void 0 ? void 0 : _b.success)) {
                        return Promise.reject('Adding record failed.');
                    }
                    const idFeild = this.getIdField();
                    f.attributes[idFeild] = objectId;
                    // return a new record with a new value of id field
                    return new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl(f, this);
                });
            }), 1);
            // TODO: retry if request was unauthenticated
            // once we are sending tokens above
            // .catch(sessionManager.handleAuthError.bind(sessionManager))
        });
    }
    updateRecordsByLayer(records, layer) {
        return __awaiter(this, void 0, void 0, function* () {
            const features = yield Promise.all(records.map((r) => __awaiter(this, void 0, void 0, function* () { return (yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToJSAPIGraphic(r.feature).then(g => g.clone())); })));
            return layer.applyEdits({
                updateFeatures: features
                // TODO: if only update parts of the records?
            }).then(response => response.updateFeatureResults.filter(r => !r.error).length > 0);
        });
    }
    updateRecordsByUrl(records, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const features = records.map(r => (Object.assign({}, jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToRestAPIFeature(r.feature))));
            const options = {
                url,
                features: features
            };
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(url, (session) => __awaiter(this, void 0, void 0, function* () {
                options.authentication = session;
                return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restFeatureLayer.updateFeatures(options)
                    // TODO: if only update parts of the records?
                    .then(response => response.updateResults.filter(r => r.success).length > 0);
            }), 1);
        });
    }
    deleteOneRecordByLayer(record, layer) {
        return __awaiter(this, void 0, void 0, function* () {
            const feature = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToJSAPIGraphic(record.feature);
            const f = feature.clone();
            return layer.applyEdits({
                deleteFeatures: [f]
            }).then(response => response.deleteFeatureResults.filter(r => !r.error).length > 0);
        });
    }
    deleteOneRecordByUrl(record, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const f = Object.assign({}, jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeToRestAPIFeature(record.feature));
            const idField = this.getIdField();
            const objectId = f.attributes[idField];
            const options = {
                url,
                objectIds: [objectId]
            };
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(url, (session) => __awaiter(this, void 0, void 0, function* () {
                options.authentication = session;
                return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restFeatureLayer.deleteFeatures(options)
                    .then(response => response.deleteResults.filter(r => r.success).length > 0);
            }), 1);
        });
    }
    fetchSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getDataSourceJson().isStatistic) {
                return Promise.resolve((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
            }
            let schema;
            if (this.layer) { // from map
                schema = yield this.fetchSchemaWithLayer();
            }
            else { // from a feature service item or feature service url or from a feature collection item
                schema = yield this.fetchSchemaWithoutLayer();
            }
            if (!(schema === null || schema === void 0 ? void 0 : schema.fields)) {
                return Promise.reject(new _interfaces__WEBPACK_IMPORTED_MODULE_3__.DataSourceError(this.id, 'No fields.'));
            }
            return schema;
        });
    }
    createLayerByItemId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.createFeatureLayerPromise) {
                if (!this.itemId) {
                    this.createFeatureLayerPromise = Promise.reject('No item id.');
                }
                else {
                    this.createFeatureLayerPromise = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)(['esri/layers/Layer', 'esri/portal/PortalItem']).then((modules) => __awaiter(this, void 0, void 0, function* () {
                        const Layer = modules[0];
                        const PortalItem = modules[1];
                        return yield Layer.fromPortalItem({ portalItem: new PortalItem({ id: this.itemId, portal: { url: this.portalUrl } }) });
                    })).then((layer) => __awaiter(this, void 0, void 0, function* () {
                        if ((layer === null || layer === void 0 ? void 0 : layer.type) === _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedJSAPILayerTypes.FeatureLayer) {
                            return yield Promise.resolve(layer);
                        }
                        else if ((layer === null || layer === void 0 ? void 0 : layer.type) === _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedJSAPILayerTypes.GroupLayer) {
                            return yield layer.loadAll().then((layer) => __awaiter(this, void 0, void 0, function* () {
                                const feaureLayer = (layer).layers.toArray().find(
                                // feature layer created from a multiple-layer feature collection item may do not have layerId,
                                // so title to find the feature layer
                                (l) => `${l.layerId}` === this.layerId || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.fixLayerId(l.title) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.fixLayerId(this.getMainDataSource().getDataSourceJson().sourceLabel));
                                if ((feaureLayer === null || feaureLayer === void 0 ? void 0 : feaureLayer.type) === _interfaces__WEBPACK_IMPORTED_MODULE_3__.SupportedJSAPILayerTypes.FeatureLayer) {
                                    return Promise.resolve(feaureLayer);
                                }
                                return Promise.reject('Feaure layer data source error: failed to create feature layer with specific layer id.');
                            }));
                        }
                    }));
                }
            }
            return this.createFeatureLayerPromise;
        });
    }
    fetchSchemaWithoutLayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceInfoPromise = this.url ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchServiceInfo(this.url) : Promise.resolve(null);
            return yield serviceInfoPromise.then((serviceInfo) => {
                if (this.itemId) {
                    return Promise.all([this.fetchItemData(), this.fetchItemInfo()]).then(([itemData, itemInfo]) => {
                        var _a;
                        const layerInfo = itemData && itemData.layers && itemData.layers[this.layerId];
                        const serviceDefinition = (serviceInfo === null || serviceInfo === void 0 ? void 0 : serviceInfo.definition) ? this.getUpdatedLayerDefinition(layerInfo, serviceInfo.definition) : layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.layerDefinition;
                        if (!this.parentDataSource && serviceDefinition) { // item id is root layer's item id, so use item title as label only when current ds doesn't have parent ds
                            // use item title as data source schema's label
                            serviceDefinition.name = (itemInfo === null || itemInfo === void 0 ? void 0 : itemInfo.title) || serviceDefinition.name;
                        }
                        return {
                            serviceDefinition,
                            fieldInfos: layerInfo && layerInfo.popupInfo && layerInfo.popupInfo.fieldInfos,
                            filter: ((_a = layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.layerDefinition) === null || _a === void 0 ? void 0 : _a.definitionExpression) ? `(${layerInfo.layerDefinition.definitionExpression})` : null,
                            refreshInterval: (layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.refreshInterval) * 60 // change to second
                        };
                    });
                }
                else {
                    return {
                        serviceDefinition: serviceInfo === null || serviceInfo === void 0 ? void 0 : serviceInfo.definition,
                        fieldInfos: null,
                        filter: null,
                        refreshInterval: null
                    };
                }
            }).then(({ serviceDefinition, fieldInfos, filter, refreshInterval }) => {
                var _a, _b, _c, _d;
                const schema = {
                    fields: {},
                    /**
                     * We should save idField in schema, instead of finding it in layer defintion.
                     * The reason is:
                     *   - output data source may use original data source's schema,
                     *   - output data source doesn't have layer definition and should find idField from its schema.
                     */
                    idField: (serviceDefinition === null || serviceDefinition === void 0 ? void 0 : serviceDefinition.idField) || ((_b = (_a = serviceDefinition === null || serviceDefinition === void 0 ? void 0 : serviceDefinition.fields) === null || _a === void 0 ? void 0 : _a.find(f => f.type === 'esriFieldTypeOID')) === null || _b === void 0 ? void 0 : _b.name) || 'OBJECTID',
                    filter,
                    refreshInterval,
                    label: ((_c = this.layer) === null || _c === void 0 ? void 0 : _c.title) || (serviceDefinition === null || serviceDefinition === void 0 ? void 0 : serviceDefinition.name)
                };
                this.setLayerDefinitionAndQueryCapabilities(serviceDefinition);
                (_d = serviceDefinition === null || serviceDefinition === void 0 ? void 0 : serviceDefinition.fields) === null || _d === void 0 ? void 0 : _d.forEach(f => {
                    const fieldInfo = fieldInfos && fieldInfos.find(fi => fi.fieldName === f.name);
                    const jimuField = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.convertFieldToJimuField(f, fieldInfo);
                    if (jimuField) {
                        schema.fields[f.name] = jimuField;
                    }
                });
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(schema);
            });
        });
    }
    fetchSchemaWithLayer() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.layer.load().then(() => {
                var _a, _b;
                if (!this.layer.fields) {
                    return null;
                }
                /**
                 * If not scene layer's associated feature layer data source, we do not support multipatch or mesh.
                 */
                if (!this.getAssociatedDataSource() && (this.layer.geometryType === 'multipatch' || this.layer.geometryType === 'mesh')) {
                    return null;
                }
                this.updateLayerDefinitionByLayer();
                const schema = {
                    fields: {},
                    /**
                     * We should save idField in schema, instead of finding it in layer defintion.
                     * The reason is:
                     *   - output data source may use original data source's schema,
                     *   - output data source doesn't have layer definition and should find idField from its schema.
                     */
                    idField: this.layer.objectIdField || ((_b = (_a = this.layer.fields) === null || _a === void 0 ? void 0 : _a.find(f => f.type === 'oid')) === null || _b === void 0 ? void 0 : _b.name) || 'OBJECTID',
                    filter: this.layer.definitionExpression ? `(${this.layer.definitionExpression})` : null,
                    refreshInterval: this.layer.refreshInterval * 60,
                    label: this.layer.title
                };
                this.layer.fields.forEach(field => {
                    const fieldInfo = this.layer.popupTemplate && this.layer.popupTemplate.fieldInfos && this.layer.popupTemplate.fieldInfos.find(f => f.fieldName === field.name);
                    const jimuField = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.convertFieldToJimuField(field.toJSON(), fieldInfo === null || fieldInfo === void 0 ? void 0 : fieldInfo.toJSON());
                    if (jimuField) {
                        schema.fields[field.name] = jimuField;
                    }
                });
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(schema);
            });
        });
    }
    updateLayerDefinitionByLayer() {
        let layerDef = this.layer.sourceJSON;
        const renderer = this.layer.renderer;
        if (renderer && renderer.toJSON()) {
            const rendererJSON = renderer.toJSON();
            if (rendererJSON.type === 'uniqueValue') {
                let types = this.layer.sourceJSON.types;
                if (rendererJSON.field1 !== this.layer.sourceJSON.typeIdField) {
                    types = [];
                    rendererJSON.uniqueValueInfos.forEach(item => {
                        types.push({ id: item.value, name: item.label, domain: {} });
                    });
                }
                layerDef = Object.assign({ name: this.layer.title }, layerDef, {
                    drawingInfo: { renderer: rendererJSON },
                    typeIdField: rendererJSON.field1,
                    types: types
                });
            }
        }
        this.setLayerDefinitionAndQueryCapabilities(layerDef);
    }
    getLayerDefinition() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLayerDefinition(this);
    }
    setLayerDefinition(layerDef) {
        this.layerDefinition = layerDef;
    }
    getPopupInfo() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getPopupInfo(this);
    }
    setPopupInfo(popupInfo) {
        this.popupInfo = popupInfo;
    }
    getItemInfo() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getItemInfo();
        }
        return super.getItemInfo();
    }
    getCharts() {
        var _a, _b;
        const mainDs = this.getMainDataSource();
        /**
         * If the layer contains charts (from layer item) but didn't open the charts in map viewer,
         * - the charts won't be saved to map item data.
         * - the JSAPI layer object contains charts (loaded by JSAPI).
         */
        if (mainDs === null || mainDs === void 0 ? void 0 : mainDs.layer) {
            return mainDs.layer.charts;
        }
        else if (mainDs === null || mainDs === void 0 ? void 0 : mainDs.getItemData()) {
            const layerInfo = (_b = (_a = mainDs.getItemData()) === null || _a === void 0 ? void 0 : _a.layers) === null || _b === void 0 ? void 0 : _b.find(l => `${l.id}` === this.layerId);
            return (layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.charts);
        }
        return [];
    }
    setLayerDefinitionAndQueryCapabilities(layerDef) {
        this.setLayerDefinition(layerDef);
        const isFeatureCollection = !this.url && !!this.itemId;
        this.setCapabilities(new _support_feature_layer_capabilities_impl__WEBPACK_IMPORTED_MODULE_4__.FeatureLayerCapabilitiesImpl({ layerDefinition: layerDef, isClientSide: this.getDataSourceJson().isDataInDataSourceInstance || isFeatureCollection }));
    }
    getCapabilities() {
        return super.getCapabilities();
    }
    buildRecord(feature) {
        return new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl(feature, this);
    }
    getFieldCodedValueList(jimuFieldName, record) {
        let fieldName = '';
        const fields = this.getSchema().fields;
        Object.keys(fields).some(name => {
            if (name === jimuFieldName) {
                fieldName = fields[name].name;
                return true;
            }
            else {
                return false;
            }
        });
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getCodedValueListForCodedValueOrSubtypeField(this.getLayerDefinition(), fieldName, record);
    }
    getGDBVersion() {
        return this.getInfo().gdbVersion;
    }
    changeGDBVersion(gdbVersion) {
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.changeDataSourceGDBVersion(this.id, gdbVersion));
        if (this.layer) {
            this.layer.gdbVersion = gdbVersion;
        }
    }
    // update serviceInfo from layerInfo for layer item
    getUpdatedLayerDefinition(layerInfo, serviceDefinition) {
        let updatedDefinition = serviceDefinition;
        if (layerInfo && layerInfo.layerDefinition) {
            let updatedOptions;
            const drawingInfo = layerInfo.layerDefinition.drawingInfo;
            if (drawingInfo) {
                if (drawingInfo.renderer && drawingInfo.renderer.type === 'uniqueValue') {
                    // update types(id, name) from drawingInfo(value,label)
                    let types = serviceDefinition.types;
                    if (drawingInfo.renderer.field1 !== serviceDefinition.typeIdField) {
                        types = [];
                        drawingInfo.renderer.uniqueValueInfos.forEach(item => {
                            types.push({ id: item.value, name: item.label, domain: {} });
                        });
                    }
                    updatedOptions = {
                        defaultVisibility: layerInfo.layerDefinition.defaultVisibility,
                        drawingInfo: layerInfo.layerDefinition.drawingInfo,
                        typeIdField: drawingInfo.renderer.field1,
                        types: types
                    };
                }
            }
            else if (layerInfo.layerDefinition.defaultVisibility !== serviceDefinition.defaultVisibility) {
                updatedOptions = { defaultVisibility: layerInfo.layerDefinition.defaultVisibility };
            }
            updatedDefinition = Object.assign({}, updatedDefinition, updatedOptions);
        }
        return updatedDefinition;
    }
    getOrderByArray(orderBys) {
        var _a;
        return (_a = orderBys === null || orderBys === void 0 ? void 0 : orderBys.map(orderBy => {
            return orderBy.jimuFieldName + ' ' + orderBy.order;
        }).asMutable()) !== null && _a !== void 0 ? _a : [];
    }
    /**
     * Convert IMFeatureLayerQueryParams to IQueryFeaturesOptions, to query features by service url.
     */
    changeJimuQueryToRestAPIQuery(queryParams) {
        var _a, _b;
        if (!queryParams) {
            return null;
        }
        const q = queryParams.asMutable({ deep: true });
        if (typeof q.pageSize === 'number') {
            const page = (_a = q.page) !== null && _a !== void 0 ? _a : 1;
            q.resultOffset = (page - 1) * q.pageSize;
            q.resultRecordCount = q.pageSize;
            /**
             * We don't change query page size in base class, because in general case, developers expect the page size is fixed.
             */
            if (this.getMaxRecordCount() !== null) {
                if (page === 1) { // first page
                    q.resultRecordCount = Math.min(this.getMaxRecordCount(), q.pageSize);
                }
                else if (page * q.pageSize > this.getMaxRecordCount()) { // last page
                    q.resultRecordCount = this.getMaxRecordCount() - (page - 1) * q.pageSize;
                }
            }
            delete q.page;
            delete q.pageSize;
        }
        if (Array.isArray(q.orderByFields)) {
            q.orderByFields = q.orderByFields.join(',');
        }
        if (Array.isArray(q.groupByFieldsForStatistics)) {
            q.groupByFieldsForStatistics = q.groupByFieldsForStatistics.join(',');
        }
        if (Array.isArray(q.time)) {
            q.time = q.time.join(',');
        }
        if ((_b = q.outStatistics) === null || _b === void 0 ? void 0 : _b.some(stat => { var _a; return (_a = stat.statisticParameters) === null || _a === void 0 ? void 0 : _a.orderBy; })) {
            q.outStatistics = q.outStatistics.map(stat => {
                var _a;
                if ((_a = stat.statisticParameters) === null || _a === void 0 ? void 0 : _a.orderBy) {
                    stat.statisticParameters.orderBy = stat.statisticParameters.orderBy.toUpperCase();
                }
                return stat;
            });
        }
        return q;
    }
    /**
     * Convert IMFeatureLayerQueryParams to __esri.Query | __esri.QueryProperties, to query features by layer (instance of ArcGIS Maps SDK for JavaScript FeatureLayer class).
     */
    changeJimuQueryToJSAPIQuery(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.changeJimuFeatureLayerQueryToJSAPILayerQuery(this, queryParams);
        });
    }
    doQueryByUrlCapabilities(queryParams, url) {
        const query = this.changeJimuQueryToRestAPIQuery(queryParams);
        if (query.returnCountOnly) {
            console.error('To query count, please use queryCount.');
            return Promise.reject('To query count, please use queryCount.');
        }
        return this._q(query, url).then((queryResponse) => {
            var _a;
            const fields = Object.keys(this.getSchema().fields).filter(jimuFieldName => {
                return queryResponse.fields && queryResponse.fields.find(field => field.name === this.getSchema().fields[jimuFieldName].name);
            });
            const queryResult = {
                queryParams: queryParams,
                fields: fields,
                records: (queryResponse.features
                    ? queryResponse.features.map(feature => new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl(feature, this))
                    : (_a = queryResponse.objectIds) === null || _a === void 0 ? void 0 : _a.map(id => new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl({ attributes: { [this.getIdField()]: id } }, this))) || []
            };
            return queryResult;
        });
    }
    doQueryByLayerCapabilities(queryParams, layer) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.changeJimuQueryToJSAPIQuery(queryParams);
            const layerView = this.getLayerViewForClientSideQuery(layer);
            if (queryParams.returnIdsOnly) {
                delete query.returnIdsOnly;
                let objectIds;
                let isClientQuerySuccess = false;
                if (layerView) {
                    const clientQueryResult = yield layerView.clientQueryObjectIds(queryParams);
                    if (clientQueryResult === null || clientQueryResult === void 0 ? void 0 : clientQueryResult.success) {
                        isClientQuerySuccess = true;
                        objectIds = clientQueryResult.data;
                    }
                }
                if (!isClientQuerySuccess) {
                    objectIds = yield layer.queryObjectIds(query);
                }
                const records = objectIds === null || objectIds === void 0 ? void 0 : objectIds.map(id => new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl({ attributes: { [this.getIdField()]: id } }, this));
                const fields = [this.getIdField()];
                return {
                    queryParams: queryParams,
                    records,
                    fields
                };
            }
            else {
                let featureSet;
                let isClientQuerySuccess = false;
                let hasFullGeometries = true;
                if (layerView) {
                    let clientQueryParams = queryParams;
                    // Server-side query uses id field to sort records by default. To get the correct page from client-side query, use the same rule.
                    if (!((_a = clientQueryParams.orderByFields) === null || _a === void 0 ? void 0 : _a.length)) {
                        clientQueryParams = clientQueryParams.set('orderByFields', [this.getIdField()]);
                    }
                    const clientQueryResult = yield layerView.clientQueryFeatures(clientQueryParams);
                    if (clientQueryResult === null || clientQueryResult === void 0 ? void 0 : clientQueryResult.success) {
                        isClientQuerySuccess = true;
                        featureSet = clientQueryResult.data;
                        hasFullGeometries = clientQueryResult.hasFullGeometries;
                    }
                }
                if (!isClientQuerySuccess) {
                    featureSet = yield layer.queryFeatures(query);
                }
                const records = featureSet.features.map(f => new _feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl(f, this, { hasFullGeometries }));
                const fields = Object.keys(this.getSchema().fields).filter(jimuFieldName => {
                    return featureSet.fields && featureSet.fields.find(field => field.name === this.getSchema().fields[jimuFieldName].name);
                });
                return {
                    queryParams: queryParams,
                    records,
                    fields
                };
            }
        });
    }
    getLayerViewForClientSideQuery(useLayer) {
        var _a, _b;
        // If root data source doesn't have map or the layer use to query is not a map layer (e.g. selection view use a client-side layer to do query), there must be no corresponding layer view.
        if (!((_a = this.getRootDataSource()) === null || _a === void 0 ? void 0 : _a.map) || useLayer !== this.layer) {
            return null;
        }
        const JimuArcgis = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.getModuleSync('jimu-arcgis');
        const mapViewManager = (_b = JimuArcgis === null || JimuArcgis === void 0 ? void 0 : JimuArcgis.MapViewManager) === null || _b === void 0 ? void 0 : _b.getInstance();
        return mapViewManager === null || mapViewManager === void 0 ? void 0 : mapViewManager.getJimuLayerViewForClientQuery(this.getMainDataSource());
    }
    _q(queryParams, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = Object.keys(queryParams || {}).reduce((previous, current) => {
                if (typeof queryParams[current] !== 'object') {
                    return `${previous}&${current}=${queryParams[current]}`;
                }
                else {
                    return `${previous}&${current}=${JSON.stringify(queryParams[current])}`;
                }
            }, '');
            const rawUrl = `${url}?${queryString}`;
            const rawUrlLength = rawUrl.length;
            const usePost = rawUrlLength > 1500; // default max url length of JS API is 2000
            const options = Object.assign({ url, httpMethod: usePost ? 'POST' : 'GET' }, queryParams);
            // timeReferenceUnknownClient will be removed by esri.restFeatureLayer.queryFeatures, put it into params.
            if (options.timeReferenceUnknownClient) {
                options.params = {
                    where: options.where || '1=1', // set default query parameters
                    outFields: options.outFields || '*', // set default query parameters
                    timeReferenceUnknownClient: true
                };
            }
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(url, (session) => __awaiter(this, void 0, void 0, function* () {
                options.authentication = session;
                return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restFeatureLayer.queryFeatures(options);
            }), 1);
        });
    }
    getTimezone() {
        var _a, _b, _c;
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.areDatesInUnknownTimezone(this)) {
            return 'unknown';
        }
        else {
            const timezoneInAppConfig = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.attributes) === null || _a === void 0 ? void 0 : _a.timezone;
            if (!timezoneInAppConfig || timezoneInAppConfig.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.TimezoneType.Device) { // default timezone in app config is device
                return 'device';
            }
            else if (timezoneInAppConfig.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.TimezoneType.Specific) {
                return timezoneInAppConfig.value;
            }
            else if (timezoneInAppConfig.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.TimezoneType.Data) {
                const canConfigInMapViewer = !!((_b = this.getRootDataSource()) === null || _b === void 0 ? void 0 : _b.map);
                if (canConfigInMapViewer) {
                    const rootDsTimezone = (_c = this.getRootDataSource().map.resourceInfo) === null || _c === void 0 ? void 0 : _c.timeZone;
                    if (!rootDsTimezone || rootDsTimezone === 'system') { // device, default timezone in map viewer
                        return 'device';
                    }
                    else if (rootDsTimezone === 'unknown') { // data
                        return this.getLayerTimezone();
                    }
                    else if (typeof rootDsTimezone === 'string') { // specific
                        return rootDsTimezone;
                    }
                }
                else {
                    return this.getLayerTimezone();
                }
            }
        }
        return null;
    }
    getLayerTimezone() {
        var _a, _b;
        return ((_b = (_a = this.getLayerDefinition()) === null || _a === void 0 ? void 0 : _a.dateFieldsTimeReference) === null || _b === void 0 ? void 0 : _b.timeZone) || null;
    }
    allowToExportData() {
        var _a, _b;
        /**
         * If is data view or local data source, use main data source's export setting.
         */
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().allowToExportData();
        }
        /**
         * If is output data source, use its original data source's export setting.
         */
        if (this.getDataSourceJson().isOutputFromWidget && ((_a = this.getDataSourceJson().originDataSources) === null || _a === void 0 ? void 0 : _a.length) === 1) {
            const originDsId = (_b = this.getDataSourceJson().originDataSources[0]) === null || _b === void 0 ? void 0 : _b.dataSourceId;
            const originDs = originDsId && this.dataSourceManager.getDataSource(originDsId);
            if (originDs) {
                return originDs.allowToExportData();
            }
            else {
                console.error('Origin data source is not created, allow to export data by default. Output data source id is ', this.id);
                return Promise.resolve(true);
            }
        }
        const allowInDataSource = !this.getDataSourceJson().disableExport;
        if (allowInDataSource) {
            return this.allowToExportDataInRemote();
        }
        else {
            // No need to check remote if doesn't allow to export data in data source setting.
            return Promise.resolve(false);
        }
    }
    allowToExportDataInRemote() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.allowExportRemoteCheckPromise) {
                this.allowExportRemoteCheckPromise = jimu_core__WEBPACK_IMPORTED_MODULE_0__.proxyUtils.isDataSourceSubscriberOrPremium(this.getDataSourceJson()).then(isSubscriberOrPremium => {
                    // Do not allow to export subscriber data or premium data.
                    if (isSubscriberOrPremium) {
                        return false;
                    }
                    else if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isAGOLHostedService(this.getDataSourceJson().url)) { // If service is not hosted, allow to export in remote.
                        return true;
                    }
                    else {
                        return this.allowToExportDataInItem();
                    }
                });
            }
            return this.allowExportRemoteCheckPromise;
        });
    }
    allowToExportDataInItem() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // If current data source doesn't come from an item, allow to export data.
                if (!this.itemId) {
                    return true;
                }
                const user = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().user;
                if (!user) {
                    return this.getWhetherAllowToExportInItemSetting();
                }
                let itemInfo = this.getItemInfo();
                itemInfo = (itemInfo === null || itemInfo === void 0 ? void 0 : itemInfo.contentOrigin)
                    ? itemInfo
                    : yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl, (session) => {
                        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.getItem(this.itemId, {
                            portal: jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPortalRestUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl),
                            authentication: session
                        });
                    }).catch(err => {
                        console.warn('Failed to get item info via app portal url. ', err);
                        return itemInfo;
                    });
                const isInSameOrg = (itemInfo === null || itemInfo === void 0 ? void 0 : itemInfo.contentOrigin) === 'self';
                if (isInSameOrg) {
                    const isAdminUser = user.role === 'org_admin';
                    // If user and item are in the same org and user is admin, allow to export data.
                    if (isAdminUser) {
                        return true;
                    }
                    else {
                        const isOwnedByCurrentUser = user && (itemInfo === null || itemInfo === void 0 ? void 0 : itemInfo.owner) === user.username;
                        // If the item is owned by current login user, allow to export data.
                        if (isOwnedByCurrentUser) {
                            return true;
                        }
                        else {
                            return this.getWhetherAllowToExportInItemSetting();
                        }
                    }
                }
                else {
                    return this.getWhetherAllowToExportInItemSetting();
                }
            }
            catch (error) {
                console.log(`Failed to get whether data source ${this.id} allows to export data, `, error);
                return true;
            }
        });
    }
    /**
     * Check export setting in portal/AGOL (item setting page).
     */
    getWhetherAllowToExportInItemSetting() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.url) {
                const layerDef = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.requestWrapper(this.url, (session) => __awaiter(this, void 0, void 0, function* () {
                    return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request(this.url, { authentication: session, httpMethod: 'GET' });
                }), 1);
                return !!((_a = layerDef === null || layerDef === void 0 ? void 0 : layerDef.capabilities) === null || _a === void 0 ? void 0 : _a.includes('Extract'));
            }
            return true;
        });
    }
    supportSymbol() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.supportSymbol(this);
    }
    supportAttachment() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.supportAttachment(this);
    }
    supportTime() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.supportTime(this);
    }
    getTimeInfo() {
        var _a, _b, _c, _d;
        if (this.layer) {
            /**
             * JS API feature layer has `timeOffset` property, but it is null even if the service has time offset in layer definition.
             * So we deep merge `timeInfo` of JS API layer and `timeInfo` of layer definition here to get `timeOffset`.
             */
            if (((_a = this.getLayerDefinition()) === null || _a === void 0 ? void 0 : _a.timeInfo) && this.layer.timeInfo) {
                return jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.merge(this.getLayerDefinition().timeInfo, this.layer.timeInfo.toJSON());
            }
            else {
                return ((_b = this.layer.timeInfo) === null || _b === void 0 ? void 0 : _b.toJSON()) || ((_c = this.getLayerDefinition()) === null || _c === void 0 ? void 0 : _c.timeInfo);
            }
        }
        else {
            return (_d = this.getLayerDefinition()) === null || _d === void 0 ? void 0 : _d.timeInfo;
        }
    }
    createJSAPILayerByDataSource() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createJSAPILayerByDataSource(this);
    }
    createRestAPILayerByDataSource() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createRestAPILayerByDataSource(this);
    }
    updateSourceByFeatures(features, fields, objectIdField, others) {
        return __awaiter(this, void 0, void 0, function* () {
            const FeatureLayer = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/layers/FeatureLayer');
            this._layer = new FeatureLayer(Object.assign(Object.assign({}, others), { objectIdField,
                fields, source: features }));
            // Clear loaded records.
            this.clearRecordsNotAddVersion();
            // Add source version to let widgets to update.
            this.addSourceVersion();
        });
    }
    getDataViews() {
        return super.getDataViews();
    }
    getDataView(dataViewId) {
        return super.getDataView(dataViewId);
    }
    getMainDataSource() {
        return super.getMainDataSource();
    }
    // @ts-expect-error - TS2611 error, seems to be solved in v4.8.0, https://github.com/microsoft/TypeScript/issues/41347 .
    get layer() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getJSAPILayer(this);
    }
    set layer(l) {
        this._layer = l;
    }
    get restLayer() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getRestAPILayer(this);
    }
    set restLayer(l) {
        this._restLayer = l;
    }
    afterUpdateRecords(records) {
        this.clearRecordsNotAddVersionForDerivedDssWhichQueryStat();
        super.afterUpdateRecords(records);
    }
    afterUpdateRecord(record) {
        this.clearRecordsNotAddVersionForDerivedDssWhichQueryStat();
        super.afterUpdateRecord(record);
    }
    afterAddRecord(record) {
        this.clearRecordsNotAddVersionForDerivedDssWhichQueryStat();
        super.afterAddRecord(record);
    }
    afterDeleteRecordById(id) {
        this.clearRecordsNotAddVersionForDerivedDssWhichQueryStat();
        super.afterDeleteRecordById(id);
    }
    clearRecordsNotAddVersionForDerivedDssWhichQueryStat() {
        this.getMainDataSource().getAllDerivedDataSources().concat(this.getMainDataSource()).forEach((ds) => {
            var _a;
            // If query statistics, we can not update the loaded records, will clear them.
            if ((_a = ds.getCurrentQueryParams()) === null || _a === void 0 ? void 0 : _a.outStatistics) {
                ds.clearRecordsNotAddVersion();
            }
        });
    }
    replaceSubLayerWithFeatureLayer() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const needToCreateLayer = ((_a = this.layer) === null || _a === void 0 ? void 0 : _a.declaredClass) === 'esri.layers.support.Sublayer';
            /**
             * Actually only sublayers of map service layer will need to create a new layer
             * since sublayer is not a real layer.
             * And in these sublayers, we only support feature layer.
             * So we only need to create feature layer.
             */
            if (needToCreateLayer && this.layer.url) {
                const FeatureLayer = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/layers/FeatureLayer');
                const definitionExpression = this.layer.definitionExpression || null;
                this.layer = new FeatureLayer({
                    id: this.layer.id,
                    title: this.layer.title,
                    url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(this.layer),
                    renderer: this.layer.renderer,
                    popupTemplate: this.layer.popupTemplate,
                    sourceJSON: this.layer.sourceJSON,
                    parent: this.layer.parent,
                    definitionExpression
                });
                /**
                 * Child data sources will be ready before root data source.
                 * Clear child data sources cache here to let widgets using these child data sources update.
                 */
                this.getAllDerivedDataSources().forEach(ds => {
                    ds.clearRecords();
                    ds.layer = this.layer;
                });
                yield this.layer.load();
            }
            return Promise.resolve(this);
        });
    }
    _printUseAllFieldsWarning(outFields) {
        if (outFields === null || outFields === void 0 ? void 0 : outFields.includes('*')) {
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                /**
                 * Use defer to make the warning clear.
                 * Otherwise the chrome (with react extension open) will also show the relevant stack after launching the app.
                 */
                console.warn(`Using * as out fields to do query. Data source id is: ${this.id}`);
            });
        }
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/feature-record-impl.ts":
/*!***************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/feature-record-impl.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureDataRecordImpl: () => (/* binding */ FeatureDataRecordImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// Data source id used in proxy to load missing fields.
const DATA_SOURCE_ID_FOR_RECORD = 'data_source_id_for_record';
// Whether data of a recrod is a proxy.
const IS_RECORD_DATA_A_PROXY = 'is_record_data_a_proxy';
class FeatureDataRecordImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataRecord {
    constructor(feature, dataSource, options) {
        super();
        this._id = null;
        this.dataSource = dataSource;
        if (feature.attributes[dataSource.getIdField()] == null) {
            // That put the default id to feature.attributes will cause other issues. E.g. for cluster features, they should not have object id.
            this._id = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.uuidv1)();
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
        if ((options === null || options === void 0 ? void 0 : options.isBeforeMappingData) !== false) {
            feature.attributes = this.convertBeforeMappingDataToData(feature.attributes);
            this.feature = feature;
        }
        else {
            this.feature = feature;
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
        this.hasFullGeometries = (options === null || options === void 0 ? void 0 : options.hasFullGeometries) !== false;
        this.setProxyForData();
        this.fillGeometry();
    }
    setProxyForData() {
        var _a;
        if (!((_a = this.feature) === null || _a === void 0 ? void 0 : _a.attributes) || !this.dataSource) {
            return;
        }
        // If proxy is set and data source is not changed, no need to do it again.
        if (this.feature.attributes[IS_RECORD_DATA_A_PROXY] && this.feature.attributes[DATA_SOURCE_ID_FOR_RECORD] === this.dataSource.id) {
            return;
        }
        const dataSource = this.dataSource;
        this.feature.attributes = new Proxy(this.feature.attributes[IS_RECORD_DATA_A_PROXY] ? Object.assign({}, this.feature.attributes) : this.feature.attributes, {
            get(target, prop) {
                var _a;
                let value;
                if (prop in target) {
                    value = target[prop];
                }
                else if (typeof prop === 'string' && ((_a = dataSource.getSchema()) === null || _a === void 0 ? void 0 : _a.fields) && prop in dataSource.getSchema().fields) {
                    dataSource.loadMissingFields(Object.assign(Object.assign({}, dataSource.getCurrentQueryParams()), { outFields: [prop] }), true);
                }
                else if (prop === DATA_SOURCE_ID_FOR_RECORD) {
                    value = dataSource.id;
                }
                else if (prop === IS_RECORD_DATA_A_PROXY) {
                    value = true;
                }
                return value;
            }
        });
    }
    set dataSource(d) {
        this._dataSource = d;
        this.setProxyForData();
    }
    get dataSource() {
        return this._dataSource;
    }
    fillGeometry() {
        var _a, _b;
        if (!this.feature.geometry) {
            return;
        }
        const ds = this.dataSource;
        if (!this.feature.geometry.spatialReference) {
            this.feature.geometry.spatialReference = (_b = (_a = ds.getLayerDefinition()) === null || _a === void 0 ? void 0 : _a.extent) === null || _b === void 0 ? void 0 : _b.spatialReference;
        }
        // (this.feature.geometry as IHasZM).hasM = ds.getLayerDefinition()?.hasM;
        // (this.feature.geometry as IHasZM).hasZ = ds.getLayerDefinition()?.hasZ;
    }
    queryAttachments(attachmentTypes) {
        return __awaiter(this, void 0, void 0, function* () {
            let featureLayerUrl = null;
            const featureLayerDs = this.dataSource;
            featureLayerUrl = featureLayerDs && featureLayerDs.getMainDataSource().url;
            if (!featureLayerUrl) {
                return yield Promise.resolve([]);
            }
            const attachmentQuery = {
                attachmentTypes: attachmentTypes,
                url: featureLayerUrl,
                featureId: this.getId()
            };
            if (!this._queryAllAttachmentsPromise) {
                this._queryAllAttachmentsPromise = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.queryAllAttachments(attachmentQuery);
            }
            return yield this._queryAllAttachmentsPromise.then((attachmentInfos) => __awaiter(this, void 0, void 0, function* () {
                this.attachmentInfos = attachmentInfos;
                return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.filterAttachments(attachmentInfos, attachmentQuery);
            }));
        });
    }
    fetchSymbolPreviewHTML() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._isGraphicFeature()) {
                return yield Promise.resolve(null);
            }
            if (this._getSymbolPreviewHTMLPromise) {
                return yield this._getSymbolPreviewHTMLPromise;
            }
            this._getSymbolPreviewHTMLPromise = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)([
                'esri/symbols/support/symbolUtils'
            ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
                let symbolUtils = null;
                [symbolUtils] = modules;
                return yield symbolUtils.getDisplayedSymbol(this.feature).then((symbol) => __awaiter(this, void 0, void 0, function* () {
                    const nodeHtml = document.createElement('div');
                    nodeHtml.className = 'w-100 h-100 d-flex justify-content-center align-items-center';
                    return yield symbolUtils.renderPreviewHTML(symbol, {
                        node: nodeHtml
                    });
                }));
            }));
            return yield this._getSymbolPreviewHTMLPromise;
        });
    }
    getData() {
        return this.feature.attributes;
    }
    setData(data) {
        this.feature.attributes = data;
        this.setProxyForData();
    }
    clone(deep) {
        const shallowClone = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.clone(this);
        if (deep) {
            if (this.feature.declaredClass === 'esri.Graphic') {
                shallowClone.feature = this.feature.clone();
            }
            else {
                shallowClone.feature = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.cloneDeep(this.feature);
            }
            return shallowClone;
        }
        else {
            return shallowClone;
        }
    }
    /*
     * Displayed date label should honor timezone
     * Three cases: unknown timezone, specific timezone, or device (local, by default).
     */
    getDateFieldValue(jimuFieldName) {
        let value = this.getFieldValue(jimuFieldName);
        const timezone = this.dataSource.getTimezone();
        if (timezone === 'unknown') {
            value = value - jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLocalTimeOffset();
        }
        else if (timezone !== 'device' && timezone !== null) {
            const tzOffset = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getAppSettingTimeZoneOffset(timezone);
            value = value - jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLocalTimeOffset() + tzOffset;
        }
        return value;
    }
    getFormattedFieldValue(jimuFieldName, intl) {
        const ds = this.dataSource;
        const layerDefinition = ds && ds.getLayerDefinition && ds.getLayerDefinition();
        if (!layerDefinition) {
            return super.getFormattedFieldValue(jimuFieldName, intl);
        }
        const valueObj = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDisplayValueForCodedValueOrSubtype(layerDefinition, jimuFieldName, this.getData());
        return valueObj.isCodedValueOrSubtype ? valueObj.displayValue : super.getFormattedFieldValue(jimuFieldName, intl);
    }
    getDataBeforeMapping() {
        return this.convertDataToDataBeforeMapping(this.getData());
    }
    getOriginData() {
        const cloneFeature = Object.assign({}, this.feature);
        cloneFeature.attributes = this.convertDataToDataBeforeMapping(this.getData());
        return cloneFeature;
    }
    toJson() {
        const featureJson = this.feature;
        return featureJson;
    }
    getId() {
        return this.feature.attributes[this.dataSource.getIdField()] != null ? this.feature.attributes[this.dataSource.getIdField()] + '' : this._id;
    }
    setId(id) {
        // TODO
    }
    getGeometry() {
        var _a;
        if (this.feature.declaredClass === 'esri.Graphic') {
            return (_a = this.feature.geometry) === null || _a === void 0 ? void 0 : _a.toJSON();
        }
        return this.feature.geometry;
    }
    getRawGeometry() {
        // __esri.Geometry's toJSON will cause the loss of some lines. Use this method to get the original geometry.
        return this.feature.geometry;
    }
    setGeometry(geo) {
        var _a, _b, _c;
        if (((_a = this.feature) === null || _a === void 0 ? void 0 : _a.declaredClass) === 'esri.Graphic') {
            const Geometry = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.getModuleSync('esri/geometry/Geometry');
            // If feature is typeof Graphic, JS API module Geometry should already be loaded.
            this.feature.geometry = ((_b = geo === null || geo === void 0 ? void 0 : geo.declaredClass) === null || _b === void 0 ? void 0 : _b.includes('esri.geometry')) ? geo : ((Geometry === null || Geometry === void 0 ? void 0 : Geometry.fromJSON(geo)) || geo);
        }
        else {
            this.feature.geometry = ((_c = geo === null || geo === void 0 ? void 0 : geo.declaredClass) === null || _c === void 0 ? void 0 : _c.includes('esri.geometry')) ? geo.toJSON() : geo;
        }
    }
    setFeature(feature) {
        this.feature = feature;
        this.fillGeometry();
    }
    getFeature() {
        return this.feature;
    }
    /**
     * @ignore
     * Returns whether `feature` is type of `__esri.Graphic`, some methods only work with `__esri.Graphic`.
     */
    _isGraphicFeature() {
        var _a;
        return !!((_a = this === null || this === void 0 ? void 0 : this.feature) === null || _a === void 0 ? void 0 : _a.layer);
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/feature-service-data-source-impl.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/feature-service-data-source-impl.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureServiceDataSourceImpl: () => (/* binding */ FeatureServiceDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
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
 * Data source from a feature service, which may contain multiple child data sources.
 */
class FeatureServiceDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_2__.AbstractLayerFolderDataSource {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.FeatureService;
    }
    getChildIds() {
        return this.getChildIdsByUrl();
    }
    createChildDataSourceOptionsById(childDsId, jimuChildId, childId) {
        return this.createChildDataSourceOptionsByIdFromUrl(childDsId, jimuChildId, childId);
    }
    /**
     * If use Layer.fromArcGISServerUrl/Layer.fromPortalItem to create JS API layer for feature service, will return a feature layer if the feature service only contains one layer/table.
     * It causes the feature service data source returns a feature layer as its JS API layer, which is not expected.
     * So we overide the method to make sure feature service data source always returns a group layer.
    */
    createJSAPILayerByDataSource() {
        const _super = Object.create(null, {
            createJSAPILayerByDataSource: { get: () => super.createJSAPILayerByDataSource }
        });
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            let layer;
            try {
                if (!this.areChildDataSourcesCreated()) {
                    yield this.childDataSourcesReady();
                }
                const hasSingleLayer = ((_b = (_a = this.getItemInfo()) === null || _a === void 0 ? void 0 : _a.typeKeywords) === null || _b === void 0 ? void 0 : _b.includes('Singlelayer')) || ((_d = (_c = this.getServiceDefinition()) === null || _c === void 0 ? void 0 : _c.layers) === null || _d === void 0 ? void 0 : _d.length) === 1;
                if (hasSingleLayer) { // the original item/service only contains one layer
                    const childDss = this.getChildDataSources();
                    if (childDss.length === 0) { // failed to create child data sources for some reason
                        const [Layer, GroupLayer] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)(['esri/layers/Layer', 'esri/layers/GroupLayer']);
                        const childLayer = yield Layer.fromArcGISServerUrl({ url: `${this.url}/${((_g = (_f = (_e = this.getServiceDefinition()) === null || _e === void 0 ? void 0 : _e.layers) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.id) || 0}` });
                        layer = new GroupLayer({
                            layers: childLayer.isTable ? [] : [childLayer],
                            tables: childLayer.isTable ? [childLayer] : [],
                            title: this.getLabel()
                        });
                    }
                    else { // only has one child data source
                        const loadJSAPIGroupLayerPromise = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/layers/GroupLayer');
                        const createJSAPILayerForChildDsPromise = childDss[0].layer ? Promise.resolve(childDss[0].layer) : childDss[0].createJSAPILayerByDataSource();
                        const [GroupLayer, childLayer] = yield Promise.all([loadJSAPIGroupLayerPromise, createJSAPILayerForChildDsPromise]);
                        layer = new GroupLayer({
                            layers: childLayer.isTable ? [] : [childLayer],
                            tables: childLayer.isTable ? [childLayer] : [],
                            title: this.getLabel()
                        });
                    }
                }
                else { // the original item/service contains multiple layers
                    layer = (yield _super.createJSAPILayerByDataSource.call(this));
                }
            }
            catch (err) {
                console.error('Failed to create JS API layer. ', err, this.id);
            }
            return (layer === null || layer === void 0 ? void 0 : layer.type) === 'group' ? layer : null;
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/geojson-data-source-impl.ts":
/*!********************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/geojson-data-source-impl.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoJSONDataSourceImpl: () => (/* binding */ GeoJSONDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class GeoJSONDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_2__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.GeoJSON;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
        if (this.url) {
            /**
             * Cache request since -
             * 1. we need to cache the request since the records are saved here, which means, the response size may be large.
             * 2. we don't know the URL schema of this type of data source, can not cache them by default.
             */
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.registerCacheableUrl(this.url);
        }
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/group-layer-data-source-impl.ts":
/*!************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/group-layer-data-source-impl.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupLayerDataSourceImpl: () => (/* binding */ GroupLayerDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/data-source-json-creator */ "./jimu-core/lib/data-sources/support/data-source-json-creator.ts");




/**
 * Data source from group layer in a map service, or group in map viewer/scene viewer, or feature collection item which contains multiple layers.
 * Group layer data source may contain multiple child data sources.
 */
class GroupLayerDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractLayerFolderDataSource {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.GroupLayer;
        this.setItemData(options.itemData);
    }
    getChildIds() {
        if (this.layer) {
            return this.getChildIdsByLayer();
        }
        else if (this.url) {
            return this.getChildIdsByUrl();
        }
        else if (this.itemId || this.getItemData()) {
            return this.getChildIdsByItem();
        }
        return [];
    }
    createChildDataSourceOptionsById(childDsId, jimuChildId, childId) {
        if (this.layer) {
            return this.createChildDataSourceOptionsByIdFromLayer(childDsId, jimuChildId, childId);
        }
        else if (this.url) {
            return this.createChildDataSourceOptionsByIdFromUrl(childDsId, jimuChildId, childId);
        }
        else if (this.itemId || this.getItemData()) {
            return this.createChildDataSourceOptionsByIdFromItem(childDsId, jimuChildId, childId);
        }
        return null;
    }
    getChildIdsByLayer() {
        return this.isJSAPIGroupLayer(this.layer) ? this.getChildIdsByJSAPIGroupLayer() : this.getChildIdsByJSAPISubLayer();
    }
    getChildIdsByItem() {
        return this.isFeatureCollectionItem(this.getItemInfo()) ? this.getChildIdsByFeatureCollectionItem() : this.getChildIdsByGroupLayerItem();
    }
    createChildDataSourceOptionsByIdFromLayer(childDsId, jimuChildId, childId) {
        if (this.layer) {
            const isJSAPIGroupLayer = this.isJSAPIGroupLayer(this.layer);
            const layerInfo = isJSAPIGroupLayer ? this.findLayerInfoOfJSAPIGroupLayer(childId) : this.findLayerInfoOfJSAPISubLayer(childId);
            if (!(layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.layer)) {
                return null;
            }
            if (isJSAPIGroupLayer) {
                return this.createChildDataSourceOptionsByLayer(layerInfo.layer, layerInfo.url, jimuChildId, childDsId, layerInfo.order);
            }
            else {
                /**
                 * __esri.Sublayer doesn't indicate its type (group layer or feature layer or raster layer or other types). Its type always is 'sublayer'.
                 * So we use layer definition to create child data sources.
                 */
                const dsOptions = this.createChildDataSourceOptionsByLayerDefinition(layerInfo.layer.sourceJSON, layerInfo.url, jimuChildId, childDsId, layerInfo.order);
                if (layerInfo.layer.title && dsOptions.dataSourceJson) {
                    dsOptions.dataSourceJson = dsOptions.dataSourceJson.set('sourceLabel', layerInfo.layer.title);
                }
                return dsOptions ? Object.assign(Object.assign({}, dsOptions), { layer: layerInfo.layer }) : null;
            }
        }
        return null;
    }
    createChildDataSourceOptionsByIdFromItem(childDsId, jimuChildId, childId) {
        const isFeatureCollection = this.isFeatureCollectionItem(this.getItemInfo());
        let dsOptions;
        if (isFeatureCollection) {
            const layerInfo = this.findLayerInfoOfFeatureCollectionItem(childId);
            if (!(layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.layerDefinition)) {
                return null;
            }
            dsOptions = this.createChildDataSourceOptionsByLayerDefinition(layerInfo.layerDefinition, null, jimuChildId, childDsId, layerInfo.order);
            if (dsOptions && !dsOptions.dataSourceJson.layerId) {
                // If is multiple-layers feature collection item, the layer definition may don't contain layer id, need to pass in it.
                dsOptions.dataSourceJson = dsOptions.dataSourceJson.set('layerId', `${layerInfo.order}`);
            }
        }
        else {
            const layerInfo = this.findLayerInfoOfGroupLayerItem(childId);
            if (!(layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.layerItem)) {
                return null;
            }
            dsOptions = this.createChildDataSourceOptionsByLayerItem(layerInfo.layerItem, layerInfo.portalUrl, jimuChildId, childDsId, layerInfo.order);
        }
        return dsOptions;
    }
    createChildDataSourceOptionsByLayerItem(item, portalUrl, jimuChildId, childDsId, order) {
        const dsJson = this.createChildDataSourceJsonByLayerItem(item, portalUrl, jimuChildId, childDsId);
        if (dsJson) {
            return {
                id: childDsId,
                dataSourceJson: dsJson,
                parentDataSource: this,
                jimuChildId,
                order,
                itemData: item
            };
        }
        return null;
    }
    createChildDataSourceJsonByLayerItem(itemData, portalUrl, jimuChildId, childDsId) {
        var _a, _b, _c;
        if (!itemData || !childDsId) {
            return null;
        }
        const schemaInConfig = (_b = (_a = this.getDataSourceJson().schema) === null || _a === void 0 ? void 0 : _a.childSchemas) === null || _b === void 0 ? void 0 : _b[jimuChildId];
        const dsJsonInConfig = (_c = this.getDataSourceJson().childDataSourceJsons) === null || _c === void 0 ? void 0 : _c[jimuChildId];
        return _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_3__.createDataSourceJsonByItemData(childDsId, itemData, portalUrl, dsJsonInConfig, schemaInConfig);
    }
    createChildDataSourceOptionsByLayer(layer, url, jimuChildId, childDsId, order) {
        const dsJson = this.createChildDataSourceJsonByLayer(layer, url, jimuChildId, childDsId);
        if (dsJson) {
            return {
                id: childDsId,
                dataSourceJson: dsJson,
                parentDataSource: this,
                jimuChildId,
                order,
                layer
            };
        }
        return null;
    }
    createChildDataSourceJsonByLayer(layer, url, jimuChildId, childDsId) {
        var _a, _b, _c, _d, _e, _f;
        if (!layer || !childDsId) {
            return null;
        }
        const layerDefinition = layer.sourceJSON;
        // _jimuChildIdFromLabel is to support data source before dev1.16, see upgradeChildDssId for more details.
        const _jimuChildIdFromLabel = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils._getFixedLayerIdByLayerDefinition(layerDefinition) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(url);
        const schemaInConfig = ((_b = (_a = this.getDataSourceJson().schema) === null || _a === void 0 ? void 0 : _a.childSchemas) === null || _b === void 0 ? void 0 : _b[jimuChildId]) || ((_d = (_c = this.getDataSourceJson().schema) === null || _c === void 0 ? void 0 : _c.childSchemas) === null || _d === void 0 ? void 0 : _d[_jimuChildIdFromLabel]);
        const dsJsonInConfig = ((_e = this.getDataSourceJson().childDataSourceJsons) === null || _e === void 0 ? void 0 : _e[jimuChildId]) || ((_f = this.getDataSourceJson().childDataSourceJsons) === null || _f === void 0 ? void 0 : _f[_jimuChildIdFromLabel]);
        return _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_3__.createDataSourceJsonByJSAPILayer(childDsId, layer, dsJsonInConfig, schemaInConfig);
    }
    findLayerInfoOfJSAPIGroupLayer(childId) {
        const layers = this.getJSAPILayersAndTables();
        let layerInfo;
        layers.some((l, i) => {
            const layerUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(l);
            const layerSourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceSourceUrl(layerUrl);
            if (this.getChildIdByLayer(l) === childId) {
                layerInfo = {
                    layer: l,
                    url: layerSourceUrl,
                    order: i
                };
                return true;
            }
            return false;
        });
        return layerInfo;
    }
    findLayerInfoOfJSAPISubLayer(childId) {
        const layers = this.getJSAPISubLayers();
        let layerInfo;
        layers.some((l, i) => {
            const layerUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(l);
            const layerSourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceSourceUrl(layerUrl);
            if (this.getChildIdBySubLayer(l) === childId) {
                layerInfo = {
                    layer: l,
                    url: layerSourceUrl,
                    order: i
                };
                return true;
            }
            return false;
        });
        return layerInfo;
    }
    findLayerInfoOfGroupLayerItem(childId) {
        const layers = this.getLayersOfGroupLayerItem();
        let layerInfo;
        layers.some((l, i) => {
            if (this.getChildIdByLayerItem(l) === childId) {
                layerInfo = {
                    layerItem: l,
                    order: i,
                    portalUrl: this.portalUrl
                };
                return true;
            }
            return false;
        });
        return layerInfo;
    }
    findLayerInfoOfFeatureCollectionItem(childId) {
        const layers = this.getLayersOfFeatureCollectionItem();
        let layerInfo;
        layers.some((l, i) => {
            if (this.getChildIdByLayerDefinition(l, null) === childId) {
                layerInfo = {
                    layerDefinition: l,
                    order: i
                };
                return true;
            }
            return false;
        });
        return layerInfo;
    }
    getJSAPISubLayers() {
        var _a, _b;
        return ((_b = (_a = this.layer.sublayers) === null || _a === void 0 ? void 0 : _a.toArray()) === null || _b === void 0 ? void 0 : _b.reverse()) || [];
    }
    getJSAPILayersAndTables() {
        var _a, _b, _c, _d;
        const layers = ((_b = (_a = this.layer.layers) === null || _a === void 0 ? void 0 : _a.toArray()) === null || _b === void 0 ? void 0 : _b.reverse()) || [];
        const tables = ((_d = (_c = this.layer.tables) === null || _c === void 0 ? void 0 : _c.toArray()) === null || _d === void 0 ? void 0 : _d.reverse()) || [];
        return layers.concat(tables);
    }
    getLayersOfFeatureCollectionItem() {
        var _a, _b;
        return ((_b = (_a = this.getItemData()) === null || _a === void 0 ? void 0 : _a.layers) === null || _b === void 0 ? void 0 : _b.map(l => l.layerDefinition)) || [];
    }
    getLayersOfGroupLayerItem() {
        var _a;
        return ((_a = this.getItemData()) === null || _a === void 0 ? void 0 : _a.layers) || [];
    }
    getChildIdsByJSAPISubLayer() {
        return this.getJSAPISubLayers().map(l => this.getChildIdBySubLayer(l));
    }
    getChildIdsByJSAPIGroupLayer() {
        return this.getJSAPILayersAndTables().map(l => this.getChildIdByLayer(l));
    }
    getChildIdsByFeatureCollectionItem() {
        return this.getLayersOfFeatureCollectionItem().map(l => this.getChildIdByLayerDefinition(l, null));
    }
    getChildIdsByGroupLayerItem() {
        return this.getLayersOfGroupLayerItem().map(l => this.getChildIdByLayerItem(l));
    }
    getChildIdByLayerItem(item) {
        // Didn't create a new util to get child id by layer item data, since the logic is simliar.
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFixedLayerIdByLayerDefinition(item);
    }
    isJSAPIGroupLayer(layer) {
        return (layer === null || layer === void 0 ? void 0 : layer.type) === _interfaces__WEBPACK_IMPORTED_MODULE_2__.SupportedJSAPILayerTypes.GroupLayer;
    }
    isFeatureCollectionItem(item) {
        return (item === null || item === void 0 ? void 0 : item.type) === _interfaces__WEBPACK_IMPORTED_MODULE_2__.SupportedItemTypes.FeatureCollection;
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/image-service-data-source-impl.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/image-service-data-source-impl.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageServiceDataSourceImpl: () => (/* binding */ ImageServiceDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ImageServiceDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.ImageService;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/kml-data-source-impl.ts":
/*!****************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/kml-data-source-impl.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KMLDataSourceImpl: () => (/* binding */ KMLDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class KMLDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_2__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_2__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_1__.DataSourceTypes.KML;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
        if (this.url || (this.portalUrl && this.itemId)) {
            /**
             * KML layer will use the utility service to analyze the url/portal item data.
             *
             * Cache request since -
             * 1. we need to cache the request since the records are saved here, which means, the response size may be large.
             * 2. we don't know the URL schema of this type of data source, can not cache them by default.
             */
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.requestUtils.registerCacheableUrl((url, query) => {
                if (url !== 'https://utility.arcgis.com/sharing/kml') {
                    return false;
                }
                const sourceUrl = query === null || query === void 0 ? void 0 : query.url;
                return sourceUrl.includes(this.url) || sourceUrl.includes(`${this.portalUrl}/sharing/rest/content/items/${this.itemId}`);
            });
        }
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/map-service-data-source-impl.ts":
/*!************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/map-service-data-source-impl.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapServiceDataSourceImpl: () => (/* binding */ MapServiceDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");



/**
 * Data source from a map service, which may contain multiple child data sources.
 */
class MapServiceDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractLayerFolderDataSource {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.MapService;
    }
    getChildIds() {
        if (this.layer) {
            return this.getChildIdsByLayer();
        }
        else {
            return this.getChildIdsByUrl();
        }
    }
    createChildDataSourceOptionsById(childDsId, jimuChildId, childId) {
        if (this.layer) {
            return this.createChildDataSourceOptionsByIdFromLayer(childDsId, jimuChildId, childId);
        }
        else if (this.url) {
            return this.createChildDataSourceOptionsByIdFromUrl(childDsId, jimuChildId, childId);
        }
        return null;
    }
    supportTime() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.supportTime(this);
    }
    getTimeInfo() {
        var _a, _b;
        if (this.layer) {
            return (_a = this.layer.timeInfo) === null || _a === void 0 ? void 0 : _a.toJSON();
        }
        else {
            return (_b = this.getServiceDefinition()) === null || _b === void 0 ? void 0 : _b.timeInfo;
        }
    }
    getTimeExtent() {
        const widgetQueries = this.getInfo().widgetQueries || {};
        const timeArr = Object.values(widgetQueries).map((q) => q === null || q === void 0 ? void 0 : q.time).filter(w => typeof w === 'number' || Array.isArray(w));
        const time = timeArr.length > 1 ? timeArr.reduce((res, t) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.mergeTimeExtent(res, t)), null) : timeArr[0];
        return time;
    }
    changeTimeExtent(time, widgetId) {
        var _a, _b;
        if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(time, (_b = (_a = this.getInfo().widgetQueries) === null || _a === void 0 ? void 0 : _a[widgetId]) === null || _b === void 0 ? void 0 : _b.time)) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.updateWidgetQuery(this.id, widgetId, { time }));
            this.getAllChildDataSources().forEach(cDs => {
                if (cDs.type === _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.FeatureLayer) {
                    cDs.updateQueryParams({ time }, widgetId);
                }
            });
        }
    }
    changeGDBVersion(gdbVersion) {
        super.changeGDBVersion(gdbVersion);
        if (this.layer && this.layer.type === 'map-image') {
            this.layer.gdbVersion = gdbVersion;
        }
    }
    createChildDataSourceOptionsByIdFromLayer(childDsId, jimuChildId, childId) {
        if (this.layer) {
            const layerInfo = this.findSubLayerInfo(childId);
            if (!(layerInfo === null || layerInfo === void 0 ? void 0 : layerInfo.subLayer)) {
                return null;
            }
            const dsOptions = this.createChildDataSourceOptionsByLayerDefinition(layerInfo.subLayer.sourceJSON, layerInfo.url, jimuChildId, childDsId, layerInfo.order);
            if (layerInfo.subLayer.title && dsOptions.dataSourceJson) {
                dsOptions.dataSourceJson = dsOptions.dataSourceJson.set('sourceLabel', layerInfo.subLayer.title);
            }
            return dsOptions ? Object.assign(Object.assign({}, dsOptions), { layer: layerInfo.subLayer }) : null;
        }
        return null;
    }
    findSubLayerInfo(childId) {
        const subLayers = this.getSubLayers();
        let subLayerInfo;
        subLayers.some((subLayer, i) => {
            const layerUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(subLayer);
            const layerSourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceSourceUrl(layerUrl);
            if (this.getChildIdBySubLayer(subLayer) === childId) {
                subLayerInfo = {
                    subLayer: subLayer,
                    url: layerSourceUrl,
                    order: i
                };
                return true;
            }
            return false;
        });
        return subLayerInfo;
    }
    getSubLayers() {
        var _a, _b;
        return ((_b = (_a = this.layer.sublayers) === null || _a === void 0 ? void 0 : _a.toArray()) === null || _b === void 0 ? void 0 : _b.reverse()) || [];
    }
    getChildIdsByLayer() {
        var _a, _b;
        return (((_b = (_a = this.layer) === null || _a === void 0 ? void 0 : _a.sublayers) === null || _b === void 0 ? void 0 : _b.toArray()) || []).map(l => this.getChildIdBySubLayer(l));
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/scene-layer-data-source-impl.ts":
/*!************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/scene-layer-data-source-impl.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneLayerDataSourceImpl: () => (/* binding */ SceneLayerDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_classes_abstract_queriable_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes/abstract-queriable-data-source */ "./jimu-core/lib/data-sources/base-classes/abstract-queriable-data-source.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _feature_record_impl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-record-impl */ "./jimu-core/lib/data-sources/implementations/feature-record-impl.ts");
/* harmony import */ var _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/data-source-json-creator */ "./jimu-core/lib/data-sources/support/data-source-json-creator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const ASSOCIATED_DATA_SOURCE_ID = 'associated_data_source';
class SceneLayerDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_3__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_3__.ItemMixinImpl)(_base_classes_abstract_queriable_data_source__WEBPACK_IMPORTED_MODULE_1__.AbstractQueriableDataSource)) {
    constructor(options) {
        var _a, _b, _c;
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.SceneLayer;
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
        this.layerId = dsJson.layerId;
        if (options.layer) {
            this.layer = options.layer;
        }
        if (options.belongToDataSource && options.belongToDataSource.layer) {
            this.layer = options.belongToDataSource.layer;
        }
        if (this.isLocal) {
            const associatedDataSourceBelongToDataSource = (_a = options.belongToDataSource) === null || _a === void 0 ? void 0 : _a.getAssociatedDataSource();
            if (associatedDataSourceBelongToDataSource) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().createLocalDataSource(associatedDataSourceBelongToDataSource, this.localId);
            }
        }
        else if (this.isDataView) {
            const associatedDataSourceBelongToDataSource = (_b = options.belongToDataSource) === null || _b === void 0 ? void 0 : _b.getAssociatedDataSource();
            if (associatedDataSourceBelongToDataSource) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().createDataView(associatedDataSourceBelongToDataSource, this.dataViewId);
            }
        }
        if (this.getAssociatedDataSource()) {
            // Keep data view and local scene layer data source's info is same as associated data source's info.
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.observeStore)(this.onInfoChange.bind(this), ['dataSourcesInfo', this.getAssociatedDataSource().id]);
            // Set data view and local associated feature layer data source's associated data source to scene layer data source.
            this.getAssociatedDataSource().setAssociatedDataSource(this);
        }
        if ((_c = this.layer) === null || _c === void 0 ? void 0 : _c.portalItem) {
            this.setItemInfo(this.layer.portalItem.sourceJSON);
        }
    }
    ready() {
        const _super = Object.create(null, {
            ready: { get: () => super.ready }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.fetchLayerDefinition(),
                this.createAssociatedDataSource()
            ]).then(() => {
                if (!this.getAssociatedDataSource()) {
                    return Promise.reject('Need associated feature layer.');
                }
                return _super.ready.call(this);
            }).then(() => {
                var _a, _b;
                // Keep main scene layer data source's info is same as associated data source's info.
                if (this.getAssociatedDataSource()) {
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.observeStore)(this.onInfoChange.bind(this), ['dataSourcesInfo', this.getAssociatedDataSource().id]);
                }
                // Sync popupTemplate to associated feature layer.
                if (((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.layer) && ((_b = this.layer) === null || _b === void 0 ? void 0 : _b.popupTemplate)) {
                    this.getAssociatedDataSource().layer.popupTemplate = this.layer.popupTemplate;
                }
            });
        });
    }
    // Need to keep the scene layer data source's info is same as the associated data source's (feature layer data source) info, except for `instanceStatus`.
    onInfoChange() {
        if (this.getAssociatedDataSource() && !jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(this.getInfo().without('instanceStatus'), this.getAssociatedDataSource().getInfo().without('instanceStatus'))) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.updateDataSourceInfo(this.id, this.getAssociatedDataSource().getInfo().without('instanceStatus').set('instanceStatus', this.getInfo().instanceStatus)));
        }
    }
    createAssociatedDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.getAssociatedDataSource()) {
                return yield Promise.resolve(this.getAssociatedDataSource());
            }
            if (this.layer) {
                return yield this._createAssociatedDataSourceWithLayer().then(associatedDataSource => {
                    if (!associatedDataSource) {
                        return this._createAssociatedDataSourceWithUrl();
                    }
                    return associatedDataSource;
                });
            }
            else {
                return this._createAssociatedDataSourceWithUrl();
            }
        });
    }
    _createAssociatedDataSourceWithLayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const dsId = this._getNewAssociatedDataSourceId();
            return yield this.layer.load().then(() => __awaiter(this, void 0, void 0, function* () {
                const associatedFeatureLayer = this.layer.associatedLayer;
                if (!associatedFeatureLayer) {
                    return null;
                }
                if (this.layer.definitionExpression) {
                    associatedFeatureLayer.definitionExpression = this.layer.definitionExpression;
                }
                let dsJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    id: dsId,
                    type: _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.FeatureLayer,
                    url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(associatedFeatureLayer)
                });
                dsJson = this._mergeAssociatedDataSourceJson(dsJson);
                const options = {
                    id: dsId,
                    dataSourceJson: dsJson,
                    layer: associatedFeatureLayer,
                    associatedDataSource: this
                };
                return yield this.dataSourceManager.createDataSource(options);
            })).then(ds => {
                this.associatedDataSource = ds;
                return this.associatedDataSource;
            });
        });
    }
    _createAssociatedDataSourceWithUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            const dsId = this._getNewAssociatedDataSourceId();
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.fetchAssociatedFeatureLayerDefinition(this.url, this.layerId, this.itemId, this.portalUrl)
                .then(res => {
                if (!res) {
                    return Promise.reject('Can not find associated feature layer');
                }
                let dsJson = _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_5__.createDataSourceJsonByLayerDefinition(dsId, res.def, res.url);
                dsJson = this._mergeAssociatedDataSourceJson(dsJson);
                return dsJson;
            }).then((dsJson) => __awaiter(this, void 0, void 0, function* () {
                const options = {
                    id: dsJson.id,
                    dataSourceJson: dsJson,
                    associatedDataSource: this
                };
                return yield this.dataSourceManager.createDataSource(options);
            })).then(ds => {
                this.associatedDataSource = ds;
                return this.associatedDataSource;
            });
        });
    }
    _getNewAssociatedDataSourceId() {
        return `${this.getDataSourceJson().id}-${ASSOCIATED_DATA_SOURCE_ID}`;
    }
    getTimezone() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getTimezone();
    }
    fetchLayerDefinition() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = this.url;
                if (this.layer) {
                    yield this.layer.load();
                    this.layerDefinition = {
                        id: this.layer.layerId,
                        fields: (_a = this.layer.fields) === null || _a === void 0 ? void 0 : _a.map(f => f === null || f === void 0 ? void 0 : f.toJSON())
                    };
                }
                else if (this.url) {
                    const layerDef = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchServiceInfo(url).then(res => res.definition)
                        .then(definition => {
                        if (!definition) {
                            return null;
                        }
                        return definition;
                    });
                    this.layerDefinition = layerDef;
                }
                return Promise.resolve(this.layerDefinition);
            }
            catch (err) {
                return Promise.resolve(null);
            }
        });
    }
    getLayerDefinition() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLayerDefinition(this);
    }
    setLayerDefinition(layerDef) {
        this.layerDefinition = layerDef;
    }
    getPopupInfo() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getPopupInfo(this);
    }
    setPopupInfo(popupInfo) {
        this.popupInfo = popupInfo;
    }
    getCapabilities() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getCapabilities();
    }
    // @ts-expect-error - TS2611 error, seems to be solved in v4.8.0, https://github.com/microsoft/TypeScript/issues/41347 .
    get layer() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getJSAPILayer(this);
    }
    set layer(l) {
        this._layer = l;
    }
    getItemInfo() {
        if (this.isDataView || this.isLocal) {
            return this.getMainDataSource().getItemInfo();
        }
        return super.getItemInfo();
    }
    fetchSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            const label = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getOriginDataLabel(this);
            const sceneLayerSchema = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ label });
            const associatedLayerSchema = yield (this.getAssociatedDataSource() ? this.getAssociatedDataSource().fetchSchema() : Promise.resolve(null));
            return associatedLayerSchema ? associatedLayerSchema.merge(sceneLayerSchema) : sceneLayerSchema;
        });
    }
    setDataSourceJson(dsJson) {
        super.setDataSourceJson(dsJson);
        if (this.getAssociatedDataSource()) {
            const aDsJson = this._mergeAssociatedDataSourceJson(this.getAssociatedDataSource().getDataSourceJson());
            this.getAssociatedDataSource().setDataSourceJson(aDsJson);
        }
    }
    getFetchedSchema() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getFetchedSchema();
    }
    setFetchedSchema(fetchedSchema) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.setFetchedSchema(fetchedSchema);
    }
    getReversedConfigSchema() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getReversedConfigSchema();
    }
    getSelectedFields() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getSelectedFields();
    }
    setSelectedFields(jimuNames) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.setSelectedFields(jimuNames);
    }
    getIdField() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getIdField();
    }
    queryById(id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_b = (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.queryById(id)) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.')));
        });
    }
    addRecord(record) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.addRecord(record));
        });
    }
    updateRecord(record) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.updateRecord(record));
        });
    }
    updateRecords(records) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.updateRecords(records));
        });
    }
    deleteRecord(index) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.deleteRecord(index));
        });
    }
    deleteRecordById(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.deleteRecordById(id));
        });
    }
    doQuery(realQuery, originQuery) {
        if (this.getAssociatedDataSource()) {
            return this.getAssociatedDataSource().doQuery(realQuery, originQuery).then(res => {
                res.records = res.records.map(r => this.fixRecordDataSource(r));
                return res;
            });
        }
        else {
            return Promise.reject(Error('No Associated DataSource.'));
        }
    }
    doQueryById(id) {
        if (this.getAssociatedDataSource()) {
            return this.getAssociatedDataSource().doQueryById(id).then(record => this.fixRecordDataSource(record));
        }
        else {
            return Promise.reject(Error('No Associated DataSource.'));
        }
    }
    doQueryIds(queryParams) {
        if (this.getAssociatedDataSource()) {
            return this.getAssociatedDataSource().doQueryIds(queryParams).then(res => {
                res.records = res.records.map(r => this.fixRecordDataSource(r));
                return res;
            });
        }
        else {
            return Promise.reject(Error('No Associated DataSource.'));
        }
    }
    doQueryCount(queryProperties) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_b = (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.doQueryCount(queryProperties)) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.')));
        });
    }
    getConfigQueryParams() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getConfigQueryParams();
    }
    getRemoteQueryParams() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRemoteQueryParams();
    }
    getCurrentQueryParams(options) {
        var _a;
        (options === null || options === void 0 ? void 0 : options.exclude) && this.fixExcludeQuery(options.exclude);
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getCurrentQueryParams(options);
    }
    getRuntimeQueryParamsgetRuntimeQueryParams(excludeWidgetId) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRuntimeQueryParams(excludeWidgetId);
    }
    getCurrentQueryId() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getCurrentQueryId();
    }
    mergeQueryParams(...queries) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.mergeQueryParams(...queries);
    }
    buildRecord(feature) {
        return new _feature_record_impl__WEBPACK_IMPORTED_MODULE_4__.FeatureDataRecordImpl(feature, this);
    }
    getFieldCodedValueList(jimuFieldName, record) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getFieldCodedValueList(jimuFieldName, record);
    }
    getRealQueryParams(query, flag, options) {
        var _a;
        options && this.fixQueryOptions(options);
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRealQueryParams(query, flag, options);
    }
    getAllUsedFields(options) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getAllUsedFields(options);
    }
    applyUsedFields(query, usedFields) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.applyUsedFields(query, usedFields);
    }
    updateQueryParams(query, widgetId) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.updateQueryParams(query, widgetId);
    }
    getGDBVersion() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getGDBVersion();
    }
    getQueryPageSize() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getQueryPageSize();
    }
    getMaxRecordCount() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getMaxRecordCount();
    }
    getRecordsByPage(page, pageSize) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRecordsByPage(page, pageSize);
    }
    getPagesData() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getPagesData();
    }
    setPagesData(pages) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.setPagesData(pages);
    }
    getRealQueryPages(page, pageSize) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRealQueryPages(page, pageSize);
    }
    load(query, options = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            options && this.fixQueryOptions(options);
            return (_b = yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.load(query, options))) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.'));
        });
    }
    loadCount(query, options = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            options && this.fixQueryOptions(options);
            return (_b = yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.loadCount(query, options))) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.'));
        });
    }
    query(query, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            options && this.fixQueryOptions(options);
            return (_b = yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.query(query, options))) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.'));
        });
    }
    queryCount(query, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            options && this.fixQueryOptions(options);
            return (_b = yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.queryCount(query, options))) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.'));
        });
    }
    loadById(id, refresh) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            return (_b = yield ((_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.loadById(id, refresh))) !== null && _b !== void 0 ? _b : Promise.reject(Error('No Associated DataSource.'));
        });
    }
    changeGDBVersion(gdbVersion) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.changeGDBVersion(gdbVersion);
    }
    getAssociatedDataSource() {
        if (!this.isDataView && !this.isLocal) {
            return this.associatedDataSource;
        }
        const realAssoDsId = this._getRealAssociatedDataSourceId();
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(realAssoDsId);
    }
    getAssociatedDataSourceById(dsId) {
        return this.dataSourceManager.getDataSource(dsId).getAssociatedDataSource();
    }
    fixQueryOptions(options) {
        if (!options) {
            return;
        }
        if (options.excludeQuery) {
            this.fixExcludeQuery(options.excludeQuery);
        }
    }
    fixExcludeQuery(excludeQuery) {
        if ((excludeQuery === null || excludeQuery === void 0 ? void 0 : excludeQuery.dataSourceId) && this.getAssociatedDataSourceById(excludeQuery.dataSourceId)) {
            excludeQuery.dataSourceId = this.getAssociatedDataSourceById(excludeQuery.dataSourceId).id;
        }
    }
    _getRealAssociatedDataSourceId() {
        var _a;
        let realAssoDsId;
        const belongToAssoDs = (_a = this.belongToDataSource) === null || _a === void 0 ? void 0 : _a.getAssociatedDataSource();
        if (this.isLocal) {
            realAssoDsId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getLocalDataSourceId(belongToAssoDs === null || belongToAssoDs === void 0 ? void 0 : belongToAssoDs.id, this.localId);
        }
        else if (this.isDataView) {
            realAssoDsId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataViewDataSourceId(belongToAssoDs === null || belongToAssoDs === void 0 ? void 0 : belongToAssoDs.id, this.dataViewId);
        }
        else {
            realAssoDsId = this.associatedDataSource.id;
        }
        return realAssoDsId;
    }
    clearRecords() {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.clearRecords();
    }
    setRecords(records) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.setRecords(records);
    }
    getRecords() {
        var _a, _b;
        return (_b = (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRecords()) === null || _b === void 0 ? void 0 : _b.map(r => this.fixRecordDataSource(r));
    }
    setSourceRecords(records) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.setSourceRecords(records);
    }
    getSourceRecords() {
        var _a, _b;
        return (_b = (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getSourceRecords()) === null || _b === void 0 ? void 0 : _b.map(r => this.fixRecordDataSource(r));
    }
    fixRecordDataSource(r) {
        if (!r) {
            return null;
        }
        /**
         * Scene layer data source uses associated feature layer data source to do query.
         * If the feature record belongs to an associated feature layer data source, actually, it should belong to the scene layer data source.
         */
        const record = r.clone();
        record.dataSource = this;
        return record;
    }
    getSelectedRecords() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getSelectedRecords();
    }
    nextRecord() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.nextRecord();
    }
    prevRecord() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.prevRecord();
    }
    getRecord(index) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRecord(index);
    }
    getRecordById(id) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.getRecordById(id);
    }
    clearRecordsNotAddVersion() {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.clearRecordsNotAddVersion();
    }
    clearSelection() {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.clearSelection();
    }
    addVersion() {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.addVersion();
    }
    selectRecord(index) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.selectRecord(index);
    }
    selectRecords(options, signal, progressCallback) {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.selectRecords(options);
    }
    selectRecordById(id, record) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.selectRecordById(id, record);
    }
    selectRecordsByIds(ids, records) {
        var _a;
        (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.selectRecordsByIds(ids, records);
    }
    destroy() {
        const associatedDataSource = this.getAssociatedDataSource();
        if (associatedDataSource) {
            this.dataSourceManager.destroyDataSource(associatedDataSource.id);
        }
    }
    supportSymbol() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.supportSymbol(this);
    }
    supportAttachment() {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.supportAttachment(this);
    }
    createJSAPILayerByDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createJSAPILayerByDataSource(this);
        });
    }
    getDataViews() {
        return super.getDataViews();
    }
    getDataView(dataViewId) {
        return super.getDataView(dataViewId);
    }
    getMainDataSource() {
        return super.getMainDataSource();
    }
    _mergeAssociatedDataSourceJson(associatedDataSourceJson) {
        return associatedDataSourceJson === null || associatedDataSourceJson === void 0 ? void 0 : associatedDataSourceJson.set('query', this.getDataSourceJson().query).set('dataViews', this.getDataSourceJson().dataViews).set('schema', this.getDataSourceJson().schema);
    }
    get count() {
        var _a;
        return (_a = this.getAssociatedDataSource()) === null || _a === void 0 ? void 0 : _a.count;
    }
    set count(count) {
        if (this.getAssociatedDataSource()) {
            this.getAssociatedDataSource().count = count;
        }
    }
    allowToExportData() {
        return __awaiter(this, void 0, void 0, function* () {
            const allowInDataSource = !this.getDataSourceJson().disableExport;
            return yield Promise.resolve(allowInDataSource);
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/scene-service-data-source-impl.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/scene-service-data-source-impl.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneServiceDataSourceImpl: () => (/* binding */ SceneServiceDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
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
 * Data source from a scene service, which may contain multiple child data sources.
 */
class SceneServiceDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractLayerFolderDataSource {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.SceneService;
    }
    getChildIds() {
        return this.getChildIdsByUrl();
    }
    createChildDataSourceOptionsById(childDsId, jimuChildId, childId) {
        return this.createChildDataSourceOptionsByIdFromUrl(childDsId, jimuChildId, childId);
    }
    /**
     * If use Layer.fromArcGISServerUrl/Layer.fromPortalItem to create JS API layer for feature service, will return a feature layer if the feature service only contains one layer/table.
     * It causes the feature service data source returns a feature layer as its JS API layer, which is not expected.
     * So we overide the method to make sure feature service data source always returns a group layer.
    */
    createJSAPILayerByDataSource() {
        const _super = Object.create(null, {
            createJSAPILayerByDataSource: { get: () => super.createJSAPILayerByDataSource }
        });
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            let layer;
            try {
                if (!this.areChildDataSourcesCreated()) {
                    yield this.childDataSourcesReady();
                }
                const hasSingleLayer = ((_b = (_a = this.getItemInfo()) === null || _a === void 0 ? void 0 : _a.typeKeywords) === null || _b === void 0 ? void 0 : _b.includes('Singlelayer')) || ((_d = (_c = this.getServiceDefinition()) === null || _c === void 0 ? void 0 : _c.layers) === null || _d === void 0 ? void 0 : _d.length) === 1;
                if (hasSingleLayer) { // the original item/service only contains one layer
                    const childDss = this.getChildDataSources();
                    if (childDss.length === 0) { // failed to create child data sources for some reason
                        const [Layer, GroupLayer] = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)(['esri/layers/Layer', 'esri/layers/GroupLayer']);
                        const childLayer = yield Layer.fromArcGISServerUrl({ url: `${this.url}/layers/${((_g = (_f = (_e = this.getServiceDefinition()) === null || _e === void 0 ? void 0 : _e.layers) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.id) || 0}` });
                        layer = new GroupLayer({
                            layers: [childLayer],
                            title: this.getLabel()
                        });
                    }
                    else { // only has one child data source
                        const loadJSAPIGroupLayerPromise = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/layers/GroupLayer');
                        const createJSAPILayerForChildDsPromise = childDss[0].layer ? Promise.resolve(childDss[0].layer) : childDss[0].createJSAPILayerByDataSource();
                        const [GroupLayer, childLayer] = yield Promise.all([loadJSAPIGroupLayerPromise, createJSAPILayerForChildDsPromise]);
                        layer = new GroupLayer({
                            layers: [childLayer],
                            title: this.getLabel()
                        });
                    }
                }
                else { // the original item/service contains multiple layers
                    layer = (yield _super.createJSAPILayerByDataSource.call(this));
                }
            }
            catch (err) {
                console.error('Failed to create JS API layer. ', err, this.id);
            }
            return (layer === null || layer === void 0 ? void 0 : layer.type) === 'group' ? layer : null;
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/simple-local-data-source-impl.ts":
/*!*************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/simple-local-data-source-impl.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleLocalDataSourceImpl: () => (/* binding */ SimpleLocalDataSourceImpl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
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
 * @ignore
 */
class SimpleLocalDataSourceImpl extends _base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource {
    constructor() {
        super(...arguments);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_2__.DataSourceTypes.SimpleLocal;
    }
    updateRecoreds(records) {
        this.records = records;
        this.addVersion();
    }
    addRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record.getId()) {
                record.setId((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.uuidv1)());
            }
            this.records.push(record);
            this.addVersion();
            return yield Promise.resolve(record);
        });
    }
    updateRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            const i = this.records.findIndex(r => r.getId() === record.getId());
            this.records.splice(i, 1, record);
            this.addVersion();
            return Promise.resolve(true);
        });
    }
    deleteRecord(index) {
        return __awaiter(this, void 0, void 0, function* () {
            this.records.splice(index, 1);
            this.addVersion();
            return yield Promise.resolve(true);
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/vector-tile-service-data-source-impl.ts":
/*!********************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/vector-tile-service-data-source-impl.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorTileServiceDataSourceImpl: () => (/* binding */ VectorTileServiceDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class VectorTileServiceDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.VectorTileService;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/wfs-data-source-impl.ts":
/*!****************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/wfs-data-source-impl.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WFSDataSourceImpl: () => (/* binding */ WFSDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class WFSDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WFS;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/wms-data-source-impl.ts":
/*!****************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/wms-data-source-impl.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WMSDataSourceImpl: () => (/* binding */ WMSDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class WMSDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WMS;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/implementations/wmts-data-source-impl.ts":
/*!*****************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/implementations/wmts-data-source-impl.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WMTSDataSourceImpl: () => (/* binding */ WMTSDataSourceImpl)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class WMTSDataSourceImpl extends (0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.JSAPILayerMixinImpl)((0,_base_classes__WEBPACK_IMPORTED_MODULE_1__.ItemMixinImpl)(_base_classes__WEBPACK_IMPORTED_MODULE_1__.AbstractDataSource)) {
    constructor(options) {
        super(options);
        this.type = _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WMTS;
        if (options.layer) {
            this.layer = options.layer;
        }
        const dsJson = this.getDataSourceJson();
        this.portalUrl = dsJson.portalUrl;
        this.itemId = dsJson.itemId;
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.layer) {
                this.layer = (yield this.createJSAPILayerByDataSource());
            }
            yield this.layer.load();
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/index.ts":
/*!*********************************************!*\
  !*** ./jimu-core/lib/data-sources/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDataRecord: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.AbstractDataRecord),
/* harmony export */   AbstractDataSource: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.AbstractDataSource),
/* harmony export */   AbstractLayerFolderDataSource: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.AbstractLayerFolderDataSource),
/* harmony export */   AbstractLoadableDataSource: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.AbstractLoadableDataSource),
/* harmony export */   AbstractQueriableDataSource: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.AbstractQueriableDataSource),
/* harmony export */   AbstractSetDataSource: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.AbstractSetDataSource),
/* harmony export */   AllDataSourceTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes),
/* harmony export */   ArcGISDataSourceTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceTypes),
/* harmony export */   CSVDataSourceImpl: () => (/* reexport safe */ _implementations_csv_data_source_impl__WEBPACK_IMPORTED_MODULE_2__.CSVDataSourceImpl),
/* harmony export */   DataSourceError: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceError),
/* harmony export */   DataSourceSelectionMode: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode),
/* harmony export */   DataSourceStatus: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus),
/* harmony export */   DataSourceTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes),
/* harmony export */   FeatureDataRecordImpl: () => (/* reexport safe */ _implementations_feature_record_impl__WEBPACK_IMPORTED_MODULE_1__.FeatureDataRecordImpl),
/* harmony export */   FeatureLayerDataSourceImpl: () => (/* reexport safe */ _implementations_feature_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_3__.FeatureLayerDataSourceImpl),
/* harmony export */   FeatureServiceDataSourceImpl: () => (/* reexport safe */ _implementations_feature_service_data_source_impl__WEBPACK_IMPORTED_MODULE_4__.FeatureServiceDataSourceImpl),
/* harmony export */   GroupLayerDataSourceImpl: () => (/* reexport safe */ _implementations_group_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_5__.GroupLayerDataSourceImpl),
/* harmony export */   ItemMixinImpl: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.ItemMixinImpl),
/* harmony export */   JSAPILayerMixinImpl: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.JSAPILayerMixinImpl),
/* harmony export */   JimuCoreDataSourceFactory: () => (/* binding */ JimuCoreDataSourceFactory),
/* harmony export */   MapServiceDataSourceImpl: () => (/* reexport safe */ _implementations_map_service_data_source_impl__WEBPACK_IMPORTED_MODULE_6__.MapServiceDataSourceImpl),
/* harmony export */   QueryScope: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.QueryScope),
/* harmony export */   SceneLayerDataSourceImpl: () => (/* reexport safe */ _implementations_scene_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_9__.SceneLayerDataSourceImpl),
/* harmony export */   SceneServiceDataSourceImpl: () => (/* reexport safe */ _implementations_scene_service_data_source_impl__WEBPACK_IMPORTED_MODULE_8__.SceneServiceDataSourceImpl),
/* harmony export */   SimpleDataRecordImpl: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.SimpleDataRecordImpl),
/* harmony export */   SimpleDataRecordSetImpl: () => (/* reexport safe */ _base_classes__WEBPACK_IMPORTED_MODULE_22__.SimpleDataRecordSetImpl),
/* harmony export */   SimpleLocalDataSourceImpl: () => (/* reexport safe */ _implementations_simple_local_data_source_impl__WEBPACK_IMPORTED_MODULE_7__.SimpleLocalDataSourceImpl),
/* harmony export */   SupportedItemTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.SupportedItemTypes),
/* harmony export */   SupportedJSAPILayerTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.SupportedJSAPILayerTypes),
/* harmony export */   SupportedLayerServiceTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerServiceTypes),
/* harmony export */   SupportedLayerTypesInWebMapSpec: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerTypesInWebMapSpec),
/* harmony export */   SupportedServerTypes: () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_0__.SupportedServerTypes),
/* harmony export */   dataSourceJsonCreator: () => (/* reexport module object */ _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_21__)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./jimu-core/lib/data-sources/interfaces/index.ts");
/* harmony import */ var _implementations_feature_record_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementations/feature-record-impl */ "./jimu-core/lib/data-sources/implementations/feature-record-impl.ts");
/* harmony import */ var _implementations_csv_data_source_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./implementations/csv-data-source-impl */ "./jimu-core/lib/data-sources/implementations/csv-data-source-impl.ts");
/* harmony import */ var _implementations_feature_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementations/feature-layer-data-source-impl */ "./jimu-core/lib/data-sources/implementations/feature-layer-data-source-impl.ts");
/* harmony import */ var _implementations_feature_service_data_source_impl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./implementations/feature-service-data-source-impl */ "./jimu-core/lib/data-sources/implementations/feature-service-data-source-impl.ts");
/* harmony import */ var _implementations_group_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./implementations/group-layer-data-source-impl */ "./jimu-core/lib/data-sources/implementations/group-layer-data-source-impl.ts");
/* harmony import */ var _implementations_map_service_data_source_impl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./implementations/map-service-data-source-impl */ "./jimu-core/lib/data-sources/implementations/map-service-data-source-impl.ts");
/* harmony import */ var _implementations_simple_local_data_source_impl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./implementations/simple-local-data-source-impl */ "./jimu-core/lib/data-sources/implementations/simple-local-data-source-impl.ts");
/* harmony import */ var _implementations_scene_service_data_source_impl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./implementations/scene-service-data-source-impl */ "./jimu-core/lib/data-sources/implementations/scene-service-data-source-impl.ts");
/* harmony import */ var _implementations_scene_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./implementations/scene-layer-data-source-impl */ "./jimu-core/lib/data-sources/implementations/scene-layer-data-source-impl.ts");
/* harmony import */ var _implementations_image_service_data_source_impl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./implementations/image-service-data-source-impl */ "./jimu-core/lib/data-sources/implementations/image-service-data-source-impl.ts");
/* harmony import */ var _implementations_vector_tile_service_data_source_impl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./implementations/vector-tile-service-data-source-impl */ "./jimu-core/lib/data-sources/implementations/vector-tile-service-data-source-impl.ts");
/* harmony import */ var _implementations_geojson_data_source_impl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./implementations/geojson-data-source-impl */ "./jimu-core/lib/data-sources/implementations/geojson-data-source-impl.ts");
/* harmony import */ var _implementations_kml_data_source_impl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./implementations/kml-data-source-impl */ "./jimu-core/lib/data-sources/implementations/kml-data-source-impl.ts");
/* harmony import */ var _implementations_wfs_data_source_impl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./implementations/wfs-data-source-impl */ "./jimu-core/lib/data-sources/implementations/wfs-data-source-impl.ts");
/* harmony import */ var _implementations_wms_data_source_impl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./implementations/wms-data-source-impl */ "./jimu-core/lib/data-sources/implementations/wms-data-source-impl.ts");
/* harmony import */ var _implementations_wmts_data_source_impl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./implementations/wmts-data-source-impl */ "./jimu-core/lib/data-sources/implementations/wmts-data-source-impl.ts");
/* harmony import */ var _implementations_error_data_source_impl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./implementations/error-data-source-impl */ "./jimu-core/lib/data-sources/implementations/error-data-source-impl.ts");
/* harmony import */ var _implementations_building_scene_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./implementations/building-scene-layer-data-source-impl */ "./jimu-core/lib/data-sources/implementations/building-scene-layer-data-source-impl.ts");
/* harmony import */ var _implementations_building_component_sublayer_data_source_impl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./implementations/building-component-sublayer-data-source-impl */ "./jimu-core/lib/data-sources/implementations/building-component-sublayer-data-source-impl.ts");
/* harmony import */ var _implementations_building_group_sublayer_data_source_impl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./implementations/building-group-sublayer-data-source-impl */ "./jimu-core/lib/data-sources/implementations/building-group-sublayer-data-source-impl.ts");
/* harmony import */ var _support_data_source_json_creator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/data-source-json-creator */ "./jimu-core/lib/data-sources/support/data-source-json-creator.ts");
/* harmony import */ var _base_classes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./base-classes */ "./jimu-core/lib/data-sources/base-classes/index.ts");






















class JimuCoreDataSourceFactory {
    createDataSource(options) {
        var _a;
        const dsJson = (_a = options.dataSourceJson) !== null && _a !== void 0 ? _a : options.belongToDataSource.getMainDataSource().getDataSourceJson();
        const dsType = (options.dataViewId && dsJson.dataViews && dsJson.dataViews[options.dataViewId] ? dsJson.dataViews[options.dataViewId].type || dsJson.type : dsJson.type);
        switch (dsType) {
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.Error:
                return new _implementations_error_data_source_impl__WEBPACK_IMPORTED_MODULE_17__.ErrorDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.CSV:
                return new _implementations_csv_data_source_impl__WEBPACK_IMPORTED_MODULE_2__.CSVDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer:
                return new _implementations_feature_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_3__.FeatureLayerDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureService:
                return new _implementations_feature_service_data_source_impl__WEBPACK_IMPORTED_MODULE_4__.FeatureServiceDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.GroupLayer:
                return new _implementations_group_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_5__.GroupLayerDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.MapService:
                return new _implementations_map_service_data_source_impl__WEBPACK_IMPORTED_MODULE_6__.MapServiceDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService:
                return new _implementations_scene_service_data_source_impl__WEBPACK_IMPORTED_MODULE_8__.SceneServiceDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.ImageService:
                return new _implementations_image_service_data_source_impl__WEBPACK_IMPORTED_MODULE_10__.ImageServiceDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.VectorTileService:
                return new _implementations_vector_tile_service_data_source_impl__WEBPACK_IMPORTED_MODULE_11__.VectorTileServiceDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.GeoJSON:
                return new _implementations_geojson_data_source_impl__WEBPACK_IMPORTED_MODULE_12__.GeoJSONDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.KML:
                return new _implementations_kml_data_source_impl__WEBPACK_IMPORTED_MODULE_13__.KMLDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WFS:
                return new _implementations_wfs_data_source_impl__WEBPACK_IMPORTED_MODULE_14__.WFSDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WMS:
                return new _implementations_wms_data_source_impl__WEBPACK_IMPORTED_MODULE_15__.WMSDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.WMTS:
                return new _implementations_wmts_data_source_impl__WEBPACK_IMPORTED_MODULE_16__.WMTSDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer:
                return new _implementations_scene_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_9__.SceneLayerDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SimpleLocal:
                return new _implementations_simple_local_data_source_impl__WEBPACK_IMPORTED_MODULE_7__.SimpleLocalDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingSceneLayer:
                return new _implementations_building_scene_layer_data_source_impl__WEBPACK_IMPORTED_MODULE_18__.BuildingSceneLayerDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingComponentSubLayer:
                return new _implementations_building_component_sublayer_data_source_impl__WEBPACK_IMPORTED_MODULE_19__.BuildingComponentSubLayerDataSourceImpl(options);
            case _interfaces__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.BuildingGroupSubLayer:
                return new _implementations_building_group_sublayer_data_source_impl__WEBPACK_IMPORTED_MODULE_20__.BuildingGroupSubLayerDataSourceImpl(options);
            default:
                const exhaustiveCheck = dsType;
                throw new Error(`Unhandled case: ${exhaustiveCheck}`);
        }
    }
}





/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/common-data-source-interface.ts":
/*!*******************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/common-data-source-interface.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllDataSourceTypes: () => (/* binding */ AllDataSourceTypes),
/* harmony export */   ArcGISDataSourceTypes: () => (/* binding */ ArcGISDataSourceTypes),
/* harmony export */   DataSourceError: () => (/* binding */ DataSourceError),
/* harmony export */   DataSourceSelectionMode: () => (/* binding */ DataSourceSelectionMode),
/* harmony export */   DataSourceStatus: () => (/* binding */ DataSourceStatus),
/* harmony export */   DataSourceTypes: () => (/* binding */ DataSourceTypes),
/* harmony export */   QueryScope: () => (/* binding */ QueryScope),
/* harmony export */   SupportedItemTypes: () => (/* binding */ SupportedItemTypes),
/* harmony export */   SupportedJSAPILayerTypes: () => (/* binding */ SupportedJSAPILayerTypes),
/* harmony export */   SupportedLayerServiceTypes: () => (/* binding */ SupportedLayerServiceTypes),
/* harmony export */   SupportedLayerTypesInWebMapSpec: () => (/* binding */ SupportedLayerTypesInWebMapSpec),
/* harmony export */   SupportedServerTypes: () => (/* binding */ SupportedServerTypes)
/* harmony export */ });
/**
 * All data source status is here, including data source instance status and data status (for QueriableDataSource).
 * * Instance status includes: NotCreated, Created, CreateError. <br/>
 *    When a data source is requested to be created, it is set to `NotCreated` at first.
 *    If a data source has never been used, there is no data source status.
 * * Data status includes: NotReady, Unloaded, Loading, Loaded, LoadError. <br/>
 *    When a QueriableDataSource is created, it is set as `NotReady` or `Unloaded` at first.
 *    If the data source is generated by widgets, the initial status will be `NotReady`, otherwise the initial status will be `Unloaded`.
 *    When widgets are ready to generate data, that is to say, the data source is ready to do query, widgets will change the status from `NotReady` to `Unloaded`.
 *    When widgets are not ready to generate data, widgets will change the status back to `NotReady`,
 *    then framework will help to clear source records, records and cache in data source instance.
 *    If `load()` is invoked, it will be set as `Loading`. If data is returned, it will be set as `Loaded`.
 *    If an error occurs, it will be set as `LoadError`.
 */
var DataSourceStatus;
(function (DataSourceStatus) {
    // Instance status.
    DataSourceStatus["NotCreated"] = "NOT_CREATED";
    DataSourceStatus["Created"] = "CREATED";
    DataSourceStatus["CreateError"] = "CREATE_ERROR";
    // Data status.
    /**
     * NotReady is for widget output data source only.
     * When output data source instance is created, the data is not ready for use.
     * Widget should dispatch an action (DataSourceStatusChanged) to make the data source ready for use.
     * If a data source status is not ready, the query should return an empty result.
     */
    DataSourceStatus["NotReady"] = "NOT_READY";
    DataSourceStatus["Unloaded"] = "UNLOADED";
    DataSourceStatus["Loading"] = "LOADING";
    DataSourceStatus["Loaded"] = "LOADED";
    DataSourceStatus["LoadError"] = "LOAD_ERROR";
    // Save status.
    /** @ignore */
    DataSourceStatus["Saving"] = "SAVING";
    /** @ignore */
    DataSourceStatus["Saved"] = "SAVED";
    /** @ignore */
    DataSourceStatus["SaveError"] = "SAVE_ERROR";
    // For remote push(stream) data sources.
    /** @ignore */
    DataSourceStatus["Closed"] = "CLOSED";
    /** @ignore */
    DataSourceStatus["Connecting"] = "CONNECTING";
    /** @ignore */
    DataSourceStatus["Connected"] = "CONNECTED";
    /** @ignore */
    DataSourceStatus["Closing"] = "CLOSING";
    // For client DS, we don't define status.
})(DataSourceStatus || (DataSourceStatus = {}));
/**
 * The data source types that `jimu-core` supports.
 */
var DataSourceTypes;
(function (DataSourceTypes) {
    DataSourceTypes["Error"] = "ERROR";
    /** @ignore */
    DataSourceTypes["SimpleLocal"] = "SIMPLE_LOCAL";
    /**
     * CSV data source is from a CSV file (.csv, .txt).
     * @ignore
     */
    DataSourceTypes["CSV"] = "CSV";
    /**
     * FeatureLayer data source is a `QueriableDataSource`, which is used to query ArcGIS feature service.
     * See {@link FeatureLayerDataSource}
     */
    DataSourceTypes["FeatureLayer"] = "FEATURE_LAYER";
    /**
     * See {@link SceneLayerDataSource}
     */
    DataSourceTypes["SceneLayer"] = "SCENE_LAYER";
    /**
     * GroupLayer data source is a data source set that may have child data sources. It is from group layer in a map service or a webmap/webscene.
     */
    DataSourceTypes["GroupLayer"] = "GROUP_LAYER";
    /**
     * FeatureService data source is a data source set that may have child data sources. It is from the feature service.
     */
    DataSourceTypes["FeatureService"] = "FEATURE_SERVICE";
    /**
     * MapService data source is a data source set that may have child data sources. It is from the map service.
     */
    DataSourceTypes["MapService"] = "MAP_SERVICE";
    /**
     * SceneService data source is a data source set that may have child data sources. It is from the scene service.
     */
    DataSourceTypes["SceneService"] = "SCENE_SERVICE";
    /**
     * ImageService data source is from the image service.
     * @ignore
     */
    DataSourceTypes["ImageService"] = "IMAGE_SERVICE";
    /**
     * VectorTileService data source is from the vector tile service.
     * @ignore
     */
    DataSourceTypes["VectorTileService"] = "VECTOR_TILE_SERVICE";
    /**
     * GeoJSONLayer data source is from a [GeoJSON](https://geojson.org/) file.
     * @ignore
     */
    DataSourceTypes["GeoJSON"] = "GEO_JSON";
    /**
     * KMLLayer data source is from a KML file (.kml, .kmz).
     * @ignore
     */
    DataSourceTypes["KML"] = "KML";
    /**
     * WFSLayer data source is from an OGC Web Feature Service (WFS).
     * @ignore
     */
    DataSourceTypes["WFS"] = "WFS";
    /**
     * WMSLayer data source is from an OGC Web Map Services (WMS).
     * @ignore
     */
    DataSourceTypes["WMS"] = "WMS";
    /**
     * @ignore
     * WMTSLayer data source is from an OGC Web Map Tile Services (WMTS).
     */
    DataSourceTypes["WMTS"] = "WMTS";
    DataSourceTypes["BuildingSceneLayer"] = "building-scene";
    DataSourceTypes["BuildingGroupSubLayer"] = "building-group";
    DataSourceTypes["BuildingComponentSubLayer"] = "building-component";
})(DataSourceTypes || (DataSourceTypes = {}));
/**
 * @ignore
 */
var ArcGISDataSourceTypes;
(function (ArcGISDataSourceTypes) {
    ArcGISDataSourceTypes["Map"] = "MAP";
    ArcGISDataSourceTypes["WebMap"] = "WEB_MAP";
    ArcGISDataSourceTypes["WebScene"] = "WEB_SCENE";
})(ArcGISDataSourceTypes || (ArcGISDataSourceTypes = {}));
/**
 * @ignore
 * All data source types, including types from jimu-core and jimu-arcgis.
 * The variable is only used as `value`, e.g. const types = [AllDataSourceTypes.WebMap].
 */
const AllDataSourceTypes = Object.assign(Object.assign({}, DataSourceTypes), ArcGISDataSourceTypes);
/**
 * For now, we only support some layer service types.
 * This type is used by adding data source by URL.
 */
var SupportedLayerServiceTypes;
(function (SupportedLayerServiceTypes) {
    // single layer service under map service or feature service
    SupportedLayerServiceTypes["FeatureLayer"] = "Feature Layer";
    SupportedLayerServiceTypes["Table"] = "Table";
    SupportedLayerServiceTypes["GroupLayer"] = "Group Layer";
    // single layer service under scene service
    SupportedLayerServiceTypes["SceneLayerPoint"] = "Point";
    SupportedLayerServiceTypes["SceneLayer3DObject"] = "3DObject";
    SupportedLayerServiceTypes["BuildingSceneLayer"] = "Building";
    SupportedLayerServiceTypes["BuildingGroupSubLayer"] = "building-group";
    SupportedLayerServiceTypes["BuildingComponentSubLayer"] = "building-component";
})(SupportedLayerServiceTypes || (SupportedLayerServiceTypes = {}));
/**
 * For now, we only support some service types.
 * This type is used by adding data source by URL.
 */
var SupportedServerTypes;
(function (SupportedServerTypes) {
    // [Feature Service](https://developers.arcgis.com/rest/services-reference/feature-service.htm)
    SupportedServerTypes["FeatureService"] = "FeatureServer";
    // [Map Service](https://developers.arcgis.com/rest/services-reference/hosted-map-service.htm)
    SupportedServerTypes["MapService"] = "MapServer";
    // [Scene Service](https://developers.arcgis.com/rest/services-reference/scene-service.htm)
    SupportedServerTypes["SceneService"] = "SceneServer";
    // [Image Service](https://developers.arcgis.com/rest/services-reference/image-service.htm)
    SupportedServerTypes["ImageService"] = "ImageServer";
    // [Vector Tile Service](https://developers.arcgis.com/rest/services-reference/vector-tile-service.htm)
    SupportedServerTypes["VectorTileService"] = "VectorTileServer";
})(SupportedServerTypes || (SupportedServerTypes = {}));
/**
 * For now, we only support some portal item types.
 * This type is used by adding data source by items.
 * Please see [Items and item types](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
 */
var SupportedItemTypes;
(function (SupportedItemTypes) {
    SupportedItemTypes["WebMap"] = "Web Map";
    SupportedItemTypes["WebScene"] = "Web Scene";
    SupportedItemTypes["FeatureService"] = "Feature Service";
    SupportedItemTypes["MapService"] = "Map Service";
    SupportedItemTypes["SceneService"] = "Scene Service";
    SupportedItemTypes["ImageService"] = "Image Service";
    SupportedItemTypes["VectorTileService"] = "Vector Tile Service";
    SupportedItemTypes["FeatureCollection"] = "Feature Collection";
    SupportedItemTypes["GroupLayer"] = "Group Layer";
    SupportedItemTypes["CSV"] = "CSV";
    SupportedItemTypes["GeoJSON"] = "GeoJson";
    SupportedItemTypes["KML"] = "KML";
    SupportedItemTypes["WFS"] = "WFS";
    SupportedItemTypes["WMS"] = "WMS";
    SupportedItemTypes["WMTS"] = "WMTS";
    SupportedItemTypes["GeometryService"] = "Geometry Service";
    SupportedItemTypes["GeocodingService"] = "Geocoding Service";
    SupportedItemTypes["GeoprocessingService"] = "Geoprocessing Service";
    SupportedItemTypes["NetworkAnalysisService"] = "Network Analysis Service";
    SupportedItemTypes["GeoenrichmentService"] = "Geoenrichment service";
})(SupportedItemTypes || (SupportedItemTypes = {}));
/**
 * For now, we only support some types of ArcGIS Maps SDK for JavaScript layer.
 * This type is used by adding data source by ArcGIS Maps SDK for JavaScript layer.
 * Please see [Layer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html).
 */
var SupportedJSAPILayerTypes;
(function (SupportedJSAPILayerTypes) {
    SupportedJSAPILayerTypes["FeatureLayer"] = "feature";
    SupportedJSAPILayerTypes["MapImageLayer"] = "map-image";
    SupportedJSAPILayerTypes["TileLayer"] = "tile";
    SupportedJSAPILayerTypes["GroupLayer"] = "group";
    SupportedJSAPILayerTypes["SceneLayer"] = "scene";
    SupportedJSAPILayerTypes["ImageryLayer"] = "imagery";
    SupportedJSAPILayerTypes["ImageryTileLayer"] = "imagery-tile";
    SupportedJSAPILayerTypes["VectorTileLayer"] = "vector-tile";
    SupportedJSAPILayerTypes["KMLLayer"] = "kml";
    SupportedJSAPILayerTypes["CSVLayer"] = "csv";
    SupportedJSAPILayerTypes["GeoJSONLayer"] = "geojson";
    SupportedJSAPILayerTypes["WFSLayer"] = "wfs";
    SupportedJSAPILayerTypes["WMSLayer"] = "wms";
    SupportedJSAPILayerTypes["WMTSLayer"] = "wmts";
    SupportedJSAPILayerTypes["BuildingSceneLayer"] = "building-scene";
    SupportedJSAPILayerTypes["BuildingComponentSubLayer"] = "building-component";
    SupportedJSAPILayerTypes["BuildingGroupSubLayer"] = "building-group";
})(SupportedJSAPILayerTypes || (SupportedJSAPILayerTypes = {}));
/**
 * For now, we only support some types of layers.
 * This type is used by adding data source by item data. For example, add data from group layer item, to create child data sources, we need to parse group layer item data.
 * Please see https://developers.arcgis.com/web-map-specification/objects/operationalLayers/ and https://developers.arcgis.com/web-scene-specification/objects/operationalLayers/.
 */
var SupportedLayerTypesInWebMapSpec;
(function (SupportedLayerTypesInWebMapSpec) {
    SupportedLayerTypesInWebMapSpec["FeatureLayer"] = "ArcGISFeatureLayer";
    SupportedLayerTypesInWebMapSpec["SceneLayer"] = "ArcGISSceneServiceLayer";
    SupportedLayerTypesInWebMapSpec["GroupLayer"] = "GroupLayer";
    SupportedLayerTypesInWebMapSpec["MapService"] = "ArcGISMapServiceLayer";
    SupportedLayerTypesInWebMapSpec["TiledMapService"] = "ArcGISTiledMapServiceLayer";
    SupportedLayerTypesInWebMapSpec["VectorTileService"] = "VectorTileLayer";
    SupportedLayerTypesInWebMapSpec["ImageService"] = "ArcGISImageServiceLayer";
    SupportedLayerTypesInWebMapSpec["TiledImageService"] = "ArcGISTiledImageServiceLayer";
    SupportedLayerTypesInWebMapSpec["CSV"] = "CSV";
    SupportedLayerTypesInWebMapSpec["GeoJSON"] = "GeoJSON";
    SupportedLayerTypesInWebMapSpec["KML"] = "KML";
    SupportedLayerTypesInWebMapSpec["WFS"] = "WFS";
    SupportedLayerTypesInWebMapSpec["WMS"] = "WMS";
})(SupportedLayerTypesInWebMapSpec || (SupportedLayerTypesInWebMapSpec = {}));
/**
 * @ignore
 */
class DataSourceError extends Error {
    constructor(id, message) {
        super(`data source id: ${id}, ${message}`);
        this.dataSourceId = id;
    }
}
/**
 * Query scope defines which data is returned when the query is executed in addition to the query parameters.
 */
var QueryScope;
(function (QueryScope) {
    /** Use the query parameters directly to query. */
    QueryScope["InAllData"] = "IN_ALL_DATA";
    /** Use the query parameters and the filters configured in exb to query. */
    QueryScope["InRemoteConfigView"] = "IN_REMOTE_CONFIG_VIEW";
    /** Use the query parameters and the configured filters in data source and filters configured in exb to query. */
    QueryScope["InConfigView"] = "IN_CONFIG_VIEW";
    /** Use all of the appliyed query parameters to query. */
    QueryScope["InRuntimeView"] = "IN_RUNTIME_VIEW";
})(QueryScope || (QueryScope = {}));
// #endregion Data source mixins
var DataSourceSelectionMode;
(function (DataSourceSelectionMode) {
    DataSourceSelectionMode["New"] = "New";
    DataSourceSelectionMode["AddToCurrent"] = "AddToCurrent";
    DataSourceSelectionMode["RemoveFromCurrent"] = "RemoveFromCurrent";
    DataSourceSelectionMode["SelectFromCurrent"] = "SelectFromCurrent";
})(DataSourceSelectionMode || (DataSourceSelectionMode = {}));


/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/feature-layer-data-source-interface.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/feature-layer-data-source-interface.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/feature-service-data-source-interface.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/feature-service-data-source-interface.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/group-layer-data-source-interface.ts":
/*!************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/group-layer-data-source-interface.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/index.ts":
/*!********************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllDataSourceTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes),
/* harmony export */   ArcGISDataSourceTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceTypes),
/* harmony export */   DataSourceError: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceError),
/* harmony export */   DataSourceSelectionMode: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode),
/* harmony export */   DataSourceStatus: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus),
/* harmony export */   DataSourceTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes),
/* harmony export */   QueryScope: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.QueryScope),
/* harmony export */   SupportedItemTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.SupportedItemTypes),
/* harmony export */   SupportedJSAPILayerTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.SupportedJSAPILayerTypes),
/* harmony export */   SupportedLayerServiceTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerServiceTypes),
/* harmony export */   SupportedLayerTypesInWebMapSpec: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerTypesInWebMapSpec),
/* harmony export */   SupportedServerTypes: () => (/* reexport safe */ _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__.SupportedServerTypes)
/* harmony export */ });
/* harmony import */ var _common_data_source_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/common-data-source-interface.ts");
/* harmony import */ var _feature_layer_data_source_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-layer-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/feature-layer-data-source-interface.ts");
/* harmony import */ var _scene_layer_data_source_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-layer-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/scene-layer-data-source-interface.ts");
/* harmony import */ var _group_layer_data_source_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-layer-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/group-layer-data-source-interface.ts");
/* harmony import */ var _feature_service_data_source_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature-service-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/feature-service-data-source-interface.ts");
/* harmony import */ var _scene_service_data_source_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scene-service-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/scene-service-data-source-interface.ts");
/* harmony import */ var _map_service_data_source_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-service-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/map-service-data-source-interface.ts");









/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/map-service-data-source-interface.ts":
/*!************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/map-service-data-source-interface.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/scene-layer-data-source-interface.ts":
/*!************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/scene-layer-data-source-interface.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-core/lib/data-sources/interfaces/scene-service-data-source-interface.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/interfaces/scene-service-data-source-interface.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./jimu-core/lib/data-sources/support/capabilities-impl.ts":
/*!*****************************************************************!*\
  !*** ./jimu-core/lib/data-sources/support/capabilities-impl.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CapabilitiesImpl: () => (/* binding */ CapabilitiesImpl)
/* harmony export */ });
class CapabilitiesImpl {
    constructor(options) {
        Object.assign(this, options);
    }
    getQueryCapabilities() {
        return {
            maxPageSize: null
        };
    }
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/support/data-source-json-creator.ts":
/*!************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/support/data-source-json-creator.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDataSourceJson: () => (/* binding */ createDataSourceJson),
/* harmony export */   createDataSourceJsonByItemData: () => (/* binding */ createDataSourceJsonByItemData),
/* harmony export */   createDataSourceJsonByItemInfo: () => (/* binding */ createDataSourceJsonByItemInfo),
/* harmony export */   createDataSourceJsonByJSAPILayer: () => (/* binding */ createDataSourceJsonByJSAPILayer),
/* harmony export */   createDataSourceJsonByLayerDefinition: () => (/* binding */ createDataSourceJsonByLayerDefinition),
/* harmony export */   getDataSourceTypeFromArcGISWholeServiceUrl: () => (/* binding */ getDataSourceTypeFromArcGISWholeServiceUrl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/common-data-source-interface */ "./jimu-core/lib/data-sources/interfaces/common-data-source-interface.ts");


function createDataSourceJson(dsId, layer, itemInfo, serviceInfo, dsJsonInConfig, schemaInConfig) {
    if (layer) {
        return createDataSourceJsonByJSAPILayer(dsId, layer, dsJsonInConfig, schemaInConfig);
    }
    else {
        let dsJsonFromItem;
        let dsJsonFromService;
        if (itemInfo.data) {
            dsJsonFromItem = createDataSourceJsonByItemData(dsId, itemInfo.data, itemInfo.portalUrl, dsJsonInConfig, schemaInConfig);
        }
        else if (itemInfo.item) {
            dsJsonFromItem = createDataSourceJsonByItemInfo(dsId, itemInfo.item, itemInfo.portalUrl, dsJsonInConfig, schemaInConfig);
        }
        if (serviceInfo) {
            dsJsonFromService = createDataSourceJsonByLayerDefinition(dsId, serviceInfo.layerDefinition, serviceInfo.url, dsJsonInConfig, schemaInConfig);
        }
        return dsJsonFromItem && dsJsonFromService ? dsJsonFromService.merge(dsJsonFromItem) : dsJsonFromItem || dsJsonFromService;
    }
}
function createDataSourceJsonByJSAPILayer(dsId, layer, dsJsonInConfig, schemaInConfig) {
    var _a, _b, _c, _d;
    if (!dsId || !layer) {
        return null;
    }
    let dsType;
    let layerId;
    let geometryType;
    // layer should be loaded.
    const layerType = layer.type;
    switch (layerType) {
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.GroupLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.GroupLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.FeatureLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.FeatureLayer;
            layerId = `${layer.layerId}`;
            geometryType = (_a = layer.sourceJSON) === null || _a === void 0 ? void 0 : _a.geometryType;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.SceneLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.SceneLayer;
            layerId = `${layer.layerId}`;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.MapImageLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.TileLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.MapService;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.BuildingSceneLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.BuildingSceneLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.BuildingGroupSubLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.BuildingGroupSubLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.BuildingComponentSubLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.BuildingComponentSubLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.ImageryLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.ImageryTileLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.VectorTileLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.KMLLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.CSVLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.GeoJSONLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.WFSLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.WMSLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedJSAPILayerTypes.WMTSLayer:
            break;
        default:
            const exhaustiveCheck = layerType;
            throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
    let dsJson;
    if (dsType) {
        dsJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            id: dsId,
            type: dsType,
            sourceLabel: layer.title || ((_b = layer.sourceJSON) === null || _b === void 0 ? void 0 : _b.name)
        });
        dsJson = layer.url ? dsJson.set('url', jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceSourceUrl(jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(layer))) : dsJson;
        dsJson = ((_c = layer.portalItem) === null || _c === void 0 ? void 0 : _c.id) ? dsJson.set('portalUrl', (_d = layer.portalItem.portal) === null || _d === void 0 ? void 0 : _d.url).set('itemId', layer.portalItem.id) : dsJson;
        dsJson = /^\d+$/.test(layerId) ? dsJson.set('layerId', layerId) : dsJson;
        dsJson = geometryType ? dsJson.set('geometryType', geometryType) : dsJson;
        dsJson = dsJsonInConfig ? dsJson.merge(dsJsonInConfig.without('id'), { deep: true }) : dsJson;
        dsJson = schemaInConfig ? dsJson.set('schema', schemaInConfig) : dsJson;
    }
    return dsJson;
}
/**
 * Generally, we only use this method to get raw data source json to get data source type and label.
 * Item info misses some information such as geometry type.
 */
function createDataSourceJsonByItemInfo(dsId, item, portalUrl, dsJsonInConfig, schemaInConfig) {
    var _a, _b, _c, _d, _e;
    if (!dsId || !item) {
        return null;
    }
    let dsType;
    let layerId;
    let url;
    const itemType = item.type;
    switch (itemType) {
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.WebMap:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.WebScene:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.CSV:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.GeoJSON:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.KML:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.WFS:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.WMS:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.WMTS:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.GroupLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes[findKey(_interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes, itemType)];
            url = (_a = item.url) === null || _a === void 0 ? void 0 : _a.replace(/^http:/, 'https:').replace(/\/$/, '');
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.FeatureCollection:
            if ((_b = item.typeKeywords) === null || _b === void 0 ? void 0 : _b.includes('Singlelayer')) {
                dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.FeatureLayer;
                layerId = '0';
            }
            else {
                dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.GroupLayer;
            }
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.FeatureService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.MapService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.SceneService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.ImageService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.VectorTileService:
            if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isSupportedWholeArcGISService(item.url)) {
                dsType = getDataSourceTypeFromArcGISWholeServiceUrl(item.url);
            }
            else if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isSupportedSingleArcGISLayerService(item.url)) {
                const serviceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(item.url, false);
                const serviceDsType = getDataSourceTypeFromArcGISWholeServiceUrl(serviceUrl);
                if (serviceDsType === _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.FeatureService || serviceDsType === _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.MapService) {
                    dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.FeatureLayer;
                }
                else if (serviceDsType === _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.SceneService) {
                    dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.SceneLayer;
                }
                layerId = dsType && ((_c = item.url) === null || _c === void 0 ? void 0 : _c.replace(/\/$/, '').split('/').reverse()[0]);
            }
            // url of vector tile service may be a style json or a vector tile service, should not replace url queries (string after '?').
            url = dsType === _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.VectorTileService ? (_d = item.url) === null || _d === void 0 ? void 0 : _d.replace(/^http:/, 'https:').replace(/\/$/, '') : (_e = item.url) === null || _e === void 0 ? void 0 : _e.split('?')[0].replace(/^http:/, 'https:').replace(/\/$/, '');
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.GeocodingService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.GeoenrichmentService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.GeometryService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.GeoprocessingService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedItemTypes.NetworkAnalysisService:
            break;
        default:
            const exhaustiveCheck = itemType;
            throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
    let dsJson;
    if (dsType) {
        dsJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            id: dsId,
            type: dsType,
            sourceLabel: item.title
        });
        dsJson = dsJson.set('itemId', item.id);
        dsJson = dsJson.set('portalUrl', portalUrl);
        dsJson = /^\d+$/.test(layerId) ? dsJson.set('layerId', layerId) : dsJson;
        dsJson = url ? dsJson.set('url', url) : dsJson;
        dsJson = dsJsonInConfig ? dsJson.merge(dsJsonInConfig.without('id'), { deep: true }) : dsJson;
        dsJson = schemaInConfig ? dsJson.set('schema', schemaInConfig) : dsJson;
    }
    return dsJson;
}
function createDataSourceJsonByItemData(dsId, itemData, portalUrl, dsJsonInConfig, schemaInConfig) {
    var _a;
    if (!dsId || !itemData) {
        return null;
    }
    let dsType;
    let layerId;
    // General item data doesn't have a specific interface, but the layers we supported does, we assume the item data is the type which we support.
    const data = itemData;
    const itemType = data.layerType;
    switch (itemType) {
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.FeatureLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.SceneLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes[findKey(_interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec, itemType)];
            layerId = (_a = data.url) === null || _a === void 0 ? void 0 : _a.replace(/\/$/, '').split('/').reverse()[0];
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.GroupLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.MapService:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes[findKey(_interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec, itemType)];
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.TiledMapService:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.MapService;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.VectorTileService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.ImageService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.TiledImageService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.CSV:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.GeoJSON:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.KML:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.WFS:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerTypesInWebMapSpec.WMS:
            break;
        default:
            const exhaustiveCheck = itemType;
            throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
    let dsJson;
    if (dsType) {
        dsJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            id: dsId,
            type: dsType,
            sourceLabel: data.title
        });
        dsJson = dsJson.set('itemId', data.itemId);
        dsJson = dsJson.set('portalUrl', portalUrl);
        dsJson = /^\d+$/.test(layerId) ? dsJson.set('layerId', layerId) : dsJson;
        dsJson = data.url ? dsJson.set('url', data.url.replace(/^http:/, 'https:').replace(/\/$/, '')) : dsJson;
        dsJson = dsJsonInConfig ? dsJson.merge(dsJsonInConfig.without('id'), { deep: true }) : dsJson;
        dsJson = schemaInConfig ? dsJson.set('schema', schemaInConfig) : dsJson;
    }
    return dsJson;
}
function createDataSourceJsonByLayerDefinition(dsId, layerDefinition, url, dsJsonInConfig, schemaInConfig) {
    if (!dsId || !layerDefinition) {
        return null;
    }
    const layerUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(url, true, layerDefinition);
    const layerSourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getDataSourceSourceUrl(layerUrl);
    let dsJson;
    if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isSupportedWholeArcGISService(layerSourceUrl)) {
        dsJson = createDataSourceJsonByWholeServiceDefinition(dsId, layerSourceUrl, layerDefinition);
    }
    else if (!layerSourceUrl || jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isSupportedSingleArcGISLayerService(layerSourceUrl)) { // Feature collection item does not have url but has layer defnition (via item data).
        dsJson = createDataSourceJsonBySingleLayerDefinition(dsId, layerSourceUrl, layerDefinition);
    }
    dsJson = dsJsonInConfig && dsJson ? dsJson.merge(dsJsonInConfig.without('id'), { deep: true }) : dsJson;
    dsJson = schemaInConfig && dsJson ? dsJson.set('schema', schemaInConfig) : dsJson;
    return dsJson;
}
function getDataSourceTypeFromArcGISWholeServiceUrl(url) {
    if (!jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.isSupportedWholeArcGISService(url)) {
        return null;
    }
    const urlArray = url.split('?')[0].split('/');
    const serviceType = Object.values(_interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes).find(s => urlArray.some(u => s.toLowerCase() === u.toLowerCase()));
    let dsType;
    switch (serviceType) {
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes.FeatureService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes.MapService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes.SceneService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes.ImageService:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes.VectorTileService:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes[findKey(_interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedServerTypes, serviceType)];
            break;
        default:
            const exhaustiveCheck = serviceType;
            throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
    return dsType;
}
function createDataSourceJsonByWholeServiceDefinition(dsId, url, serviceDefinition) {
    if (!dsId || !url || !serviceDefinition) {
        return null;
    }
    const type = getDataSourceTypeFromArcGISWholeServiceUrl(url);
    if (!type) {
        return null;
    }
    const dsJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        id: dsId,
        type,
        url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(url, false),
        sourceLabel: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(url)
    });
    return dsJson;
}
function createDataSourceJsonBySingleLayerDefinition(dsId, url, layerDefinition) {
    if (!dsId || !layerDefinition) {
        return null;
    }
    let dsType;
    const layerType = (layerDefinition.type || layerDefinition.layerType);
    switch (layerType) {
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.GroupLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.GroupLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.FeatureLayer:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.Table:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.FeatureLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.SceneLayer3DObject:
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.SceneLayerPoint:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.SceneLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.BuildingSceneLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.BuildingSceneLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.BuildingGroupSubLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.BuildingGroupSubLayer;
            break;
        case _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.SupportedLayerServiceTypes.BuildingComponentSubLayer:
            dsType = _interfaces_common_data_source_interface__WEBPACK_IMPORTED_MODULE_1__.AllDataSourceTypes.BuildingComponentSubLayer;
            break;
        default:
            const exhaustiveCheck = layerType;
            throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
    let dsJson;
    if (dsType) {
        dsJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            id: dsId,
            type: dsType,
            sourceLabel: layerDefinition.name
        });
        dsJson = url ? dsJson.set('url', jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl(url, true, layerDefinition)) : dsJson;
        dsJson = /^\d+$/.test(`${layerDefinition.id}`) ? dsJson.set('layerId', `${layerDefinition.id}`) : dsJson;
        dsJson = layerDefinition.geometryType ? dsJson.set('geometryType', layerDefinition.geometryType) : dsJson;
    }
    return dsJson;
}
function findKey(obj, value) {
    var _a;
    return (_a = Object.entries(obj).find(([k, v]) => v === value)) === null || _a === void 0 ? void 0 : _a[0];
}


/***/ }),

/***/ "./jimu-core/lib/data-sources/support/feature-layer-capabilities-impl.ts":
/*!*******************************************************************************!*\
  !*** ./jimu-core/lib/data-sources/support/feature-layer-capabilities-impl.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureLayerCapabilitiesImpl: () => (/* binding */ FeatureLayerCapabilitiesImpl)
/* harmony export */ });
/* harmony import */ var _capabilities_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capabilities-impl */ "./jimu-core/lib/data-sources/support/capabilities-impl.ts");

const QueryCapabilitiesOfClientSideFeatureLayer = {
    maxPageSize: 1000,
    supportsStatistics: true,
    supportsPagination: true,
    supportsOrderBy: true,
    supportsDistinct: true,
    /**
     * Support pagination with distinct.
     */
    supportsPaginationOnDistinct: true,
    /**
     * Do not support pagination with statistic with group by.
     * Will ignore the pagination and always return all results.
     */
    supportsPaginationOnStatisticsWithGroupBy: false,
    supportsPaginationOnAggregatedQueries: true,
    supportsOrderByOnlyOnLayerFields: true,
    supportsPercentileStatistics: true,
    supportedQueryFormats: 'JSON, geoJSON'
};
class FeatureLayerCapabilitiesImpl extends _capabilities_impl__WEBPACK_IMPORTED_MODULE_0__.CapabilitiesImpl {
    getQueryCapabilities() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.isClientSide || !this.layerDefinition) {
            return QueryCapabilitiesOfClientSideFeatureLayer;
        }
        else {
            return {
                maxPageSize: this.layerDefinition.maxRecordCount,
                supportsStatistics: !!((_a = this.layerDefinition.advancedQueryCapabilities) === null || _a === void 0 ? void 0 : _a.supportsStatistics),
                supportsPagination: !!((_b = this.layerDefinition.advancedQueryCapabilities) === null || _b === void 0 ? void 0 : _b.supportsPagination),
                supportsOrderBy: !!((_c = this.layerDefinition.advancedQueryCapabilities) === null || _c === void 0 ? void 0 : _c.supportsOrderBy),
                supportsDistinct: !!((_d = this.layerDefinition.advancedQueryCapabilities) === null || _d === void 0 ? void 0 : _d.supportsDistinct),
                /**
                 * undefined will be regarded as true since some services do not have this capability but support to use pagination with distinct.
                 */
                // eslint-disable-next-line
                supportsPaginationOnDistinct: ((_e = this.layerDefinition.advancedQueryCapabilities) === null || _e === void 0 ? void 0 : _e.supportsPaginationOnAggregatedQueries) !== false,
                supportsPaginationOnStatisticsWithGroupBy: !!((_f = this.layerDefinition.advancedQueryCapabilities) === null || _f === void 0 ? void 0 : _f.supportsPaginationOnAggregatedQueries),
                supportsOrderByOnlyOnLayerFields: !!((_g = this.layerDefinition.advancedQueryCapabilities) === null || _g === void 0 ? void 0 : _g.supportsOrderByOnlyOnLayerFields),
                supportsPercentileStatistics: !!((_h = this.layerDefinition.advancedQueryCapabilities) === null || _h === void 0 ? void 0 : _h.supportsPercentileStatistics),
                supportedQueryFormats: this.layerDefinition.supportedQueryFormats
            };
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
/*!**********************************!*\
  !*** ./jimu-core/data-source.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractDataRecord: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AbstractDataRecord),
/* harmony export */   AbstractDataSource: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AbstractDataSource),
/* harmony export */   AbstractLayerFolderDataSource: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AbstractLayerFolderDataSource),
/* harmony export */   AbstractLoadableDataSource: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AbstractLoadableDataSource),
/* harmony export */   AbstractQueriableDataSource: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AbstractQueriableDataSource),
/* harmony export */   AbstractSetDataSource: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AbstractSetDataSource),
/* harmony export */   AllDataSourceTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes),
/* harmony export */   ArcGISDataSourceTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.ArcGISDataSourceTypes),
/* harmony export */   CSVDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.CSVDataSourceImpl),
/* harmony export */   DataSourceError: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.DataSourceError),
/* harmony export */   DataSourceSelectionMode: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.DataSourceSelectionMode),
/* harmony export */   DataSourceStatus: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus),
/* harmony export */   DataSourceTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes),
/* harmony export */   FeatureDataRecordImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.FeatureDataRecordImpl),
/* harmony export */   FeatureLayerDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.FeatureLayerDataSourceImpl),
/* harmony export */   FeatureServiceDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.FeatureServiceDataSourceImpl),
/* harmony export */   GroupLayerDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.GroupLayerDataSourceImpl),
/* harmony export */   ItemMixinImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.ItemMixinImpl),
/* harmony export */   JSAPILayerMixinImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.JSAPILayerMixinImpl),
/* harmony export */   JimuCoreDataSourceFactory: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.JimuCoreDataSourceFactory),
/* harmony export */   MapServiceDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.MapServiceDataSourceImpl),
/* harmony export */   QueryScope: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.QueryScope),
/* harmony export */   SceneLayerDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SceneLayerDataSourceImpl),
/* harmony export */   SceneServiceDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SceneServiceDataSourceImpl),
/* harmony export */   SimpleDataRecordImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SimpleDataRecordImpl),
/* harmony export */   SimpleDataRecordSetImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SimpleDataRecordSetImpl),
/* harmony export */   SimpleLocalDataSourceImpl: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SimpleLocalDataSourceImpl),
/* harmony export */   SupportedItemTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SupportedItemTypes),
/* harmony export */   SupportedJSAPILayerTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SupportedJSAPILayerTypes),
/* harmony export */   SupportedLayerServiceTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerServiceTypes),
/* harmony export */   SupportedLayerTypesInWebMapSpec: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SupportedLayerTypesInWebMapSpec),
/* harmony export */   SupportedServerTypes: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.SupportedServerTypes),
/* harmony export */   dataSourceJsonCreator: () => (/* reexport safe */ _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.dataSourceJsonCreator),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_data_sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/data-sources */ "./jimu-core/lib/data-sources/index.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_data_sources__WEBPACK_IMPORTED_MODULE_0__.JimuCoreDataSourceFactory);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});