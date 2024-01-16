System.register(["jimu-core","jimu-ui","jimu-ui/advanced/map","jimu-ui/advanced/setting-components","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
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

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/map":
/*!***************************************!*\
  !*** external "jimu-ui/advanced/map" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__;

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
/*!***************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map-setting.tsx ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/map */ "jimu-ui/advanced/map");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");

//import { TextInput } from 'jimu-ui'





class _ShowOnMapSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.handleIsUseCustomSymbolOption = (isUseCustomSymbol) => {
            this.props.onSettingChange(Object.assign({}, this.props.config.set('isUseCustomSymbol', isUseCustomSymbol).set('symbolOption', null)));
        };
        this.onSymbolCreated = (symbol, type) => {
            this.defaultSymbolOption = this.defaultSymbolOption.set(type, symbol === null || symbol === void 0 ? void 0 : symbol.toJSON());
            if (!this.props.config.symbolOption &&
                this.defaultSymbolOption.pointSymbol &&
                this.defaultSymbolOption.polylineSymbol &&
                this.defaultSymbolOption.polygonSymbol) {
                this.props.onSettingChange(Object.assign({}, this.props.config.set('symbolOption', this.defaultSymbolOption)));
            }
        };
        this.onSymbolChanged = (symbol, type) => {
            this.props.onSettingChange(Object.assign({}, this.props.config.setIn(['symbolOption', type], symbol.toJSON())));
        };
        this.getInitSymbolFromConfig = (jimuSymbolType) => {
            let symbol;
            const symbolOption = this.props.config.symbolOption;
            if (this.jsonUtils) {
                if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.pointSymbol) ? symbolOption.pointSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('point');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polylineSymbol) ? symbolOption.polylineSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('polyline');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polygonSymbol) ? symbolOption.polygonSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('polygon');
                }
            }
            // @ts-expect-error
            return symbol ? this.jsonUtils.fromJSON(symbol) : null;
        };
        this.jsonUtils = null;
        this.defaultSymbolOption = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        this.state = {
            isModulesLoaded: false
        };
    }
    componentDidMount() {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.loadArcGISJSAPIModules)([
            'esri/symbols/support/jsonUtils'
        ]).then(modules => {
            [this.jsonUtils] = modules;
            this.setState({
                isModulesLoaded: true
            });
        });
    }
    render() {
        const pointLabel = this.props.intl.formatMessage({ id: 'mapAction_Point', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Point });
        const polylineLabel = this.props.intl.formatMessage({ id: 'mapAction_Polyline', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polyline });
        const polygonLabel = this.props.intl.formatMessage({ id: 'mapAction_Polygon', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polygon });
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'align-items-center d-flex' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(false); }, "aria-labelledby": 'useLayerDefinedLabel' }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { id: 'useLayerDefinedLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseLayerDefinedSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseLayerDefinedSymbols }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'align-items-center d-flex' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(true); }, "aria-labelledby": 'useCustomLabel' }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { id: 'useCustomLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseCustomSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseCustomSymbols }))))),
                this.props.config.isUseCustomSymbol && this.jsonUtils && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'pb-0' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: 'd-flex justify-content-around' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: pointLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point), onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'pointSymbol'); }, onPointSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'pointSymbol'); } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, pointLabel)),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: polylineLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline), onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polylineSymbol'); }, onPolylineSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polylineSymbol'); } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, polylineLabel)),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: polygonLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon), onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polygonSymbol'); }, onPolygonSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polygonSymbol'); } }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, polygonLabel)))))));
    }
}
_ShowOnMapSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        isUseCustomSymbol: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ShowOnMapSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC1zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGNBQWMsRUFBRSx3REFBd0Q7SUFDeEUsa0JBQWtCLEVBQUUsd0ZBQXdGO0lBQzVHLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsV0FBVyxFQUFFLFNBQVM7SUFDdEIsY0FBYyxFQUFFLHFFQUFxRTtJQUNyRixVQUFVLEVBQUUsUUFBUTtJQUNwQixhQUFhLEVBQUUsa0NBQWtDO0lBQ2pELGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFNBQVMsRUFBRSxPQUFPO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLHVCQUF1QixFQUFFLHFCQUFxQjtJQUM5QyxxQkFBcUIsRUFBRSwwQkFBMEI7SUFDakQsb0JBQW9CLEVBQUUsZ0JBQWdCO0lBQ3RDLHVCQUF1QixFQUFFLG1CQUFtQjtJQUM1QyxpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsZ0JBQWdCLEVBQUUsdUJBQXVCO0lBQ3pDLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsV0FBVyxFQUFFLGVBQWU7SUFDNUIsc0JBQXNCLEVBQUUsb0NBQW9DO0lBQzVELDZCQUE2QixFQUFFLHdEQUF3RDtJQUN2RixTQUFTLEVBQUUsaUJBQWlCO0lBQzVCLGdCQUFnQixFQUFFLG9CQUFvQjtJQUN0QyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxlQUFlO0lBQzdCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLHdCQUF3QixFQUFFLHVCQUF1QjtJ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Q0FDYixDQUNQO0lBQ0gsQ0FBQzs7QUFqSU0sOEJBQVksR0FBRztJQUNwQixNQUFNLEVBQUUsb0RBQVMsQ0FBQztRQUNoQixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCLENBQUM7Q0FDSDtBQWdJSCxpRUFBZSxxREFBVSxDQUFDLGlCQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvbWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9kYXRhLWFjdGlvbnMvc2hvdy1vbi1tYXAtc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXG4gIHNvdXJjZURlc2NyaXB0OiAnQSB3ZWIgbWFwIG9yIHdlYiBzY2VuZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSB0d28uJyxcbiAgc2VsZWN0VGhpcmRNYXBIaW50OiAnUGxlYXNlIHVuc2VsZWN0IGEgbWFwIG9yIHNjZW5lIGJlZm9yZSB5b3UgY2hvb3NlIGFub3RoZXIgb25lLiBVcCB0byB0d28gYXJlIHN1cHBvcnRlZC4nLFxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxuICBpbml0aWFsTWFwVmlldzogJ0luaXRpYWwgdmlldycsXG4gIHNlbGVjdE1hcDogJ1NlbGVjdCBtYXAnLFxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXG4gIGRlZmF1bHRWaWV3OiAnRGVmYXVsdCcsXG4gIGRlZmF1bHRWaWV3VGlwOiAnSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgbWFwIGluaGVyaXRlZCBmcm9tIHRoZSB3ZWIgbWFwIG9yIHdlYiBzY2VuZScsXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxuICBjdXN0b21WaWV3VGlwOiAnQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIG9mIHRoZSBtYXAnLFxuICBjdXN0b21WaWV3U2V0OiAnTW9kaWZ5JyxcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxuICBvcHRpb25zOiAnT3B0aW9ucycsXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXG4gIGZlYXR1cmVTZWxlY3Rpb25Db2xvcjogJ0ZlYXR1cmUgc2VsZWN0aW9uIGNvbG9ycycsXG4gIGZlYXR1cmVIaWdobGlnaHRGaWxsOiAnSGlnaGxpZ2h0IGZpbGwnLFxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcbiAgZGlzYWJsZVNjcm9sbFpvb206ICdEaXNhYmxlIHNjcm9sbCB6b29taW5nJyxcbiAgZW5hYmxlU2Nyb2xsWm9vbTogJ0VuYWJsZSBzY3JvbGwgem9vbWluZycsXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcbiAgZW5hYmxlUG9wVXA6ICdFbmFibGUgcG9wLXVwJyxcbiAgc2hvd1BvcHVwVXBvblNlbGVjdGlvbjogJ1Nob3cgcG9wLXVwIHVwb24gZmVhdHVyZSBzZWxlY3Rpb24nLFxuICBzaG93UG9wdXBVcG9uU2VsZWN0aW9uVG9vbHRpcDogJ1NlbGVjdGlvbiBtYWRlIGludGVyYWN0aXZlbHkgZnJvbSB0aGUgbWFwIGlzIGV4Y2x1ZGVkLicsXG4gIGRvY2tQb3B1cDogJ0RvY2sgdGhlIHBvcC11cCcsXG4gIHNjZW5lUXVhbGl0eU1vZGU6ICdTY2VuZSBxdWFsaXR5IG1vZGUnLFxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXG4gIGRhdGFSZWxhdGlvblNoaXA6ICdEYXRhIHJlbGF0aW9uc2hpcCcsXG4gIG1hcE5vbmU6ICdub25lJyxcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXG4gIG1hcExheW91dDogJ1Rvb2xzIGxheW91dCcsXG4gIG1hcExheW91dF9MYXJnZUFuZE1lZGl1bTogJ0xhcmdlIGFuZCBtZWRpdW0gc2l6ZScsXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxuICBlbmFibGVDbGllbnRTaWRlUXVlcnk6ICdFbmFibGUgY2xpZW50LXNpZGUgcXVlcnknLFxuICBjbGllbnRRdWVyeUhlbHBUaXAxOiAnSWYgZW5hYmxlZCwgd2lkZ2V0cyB1c2luZyB0aGUgd2ViIG1hcCBkYXRhIHdpbGwgYXBwbHkgY2xpZW50LXNpZGUgcXVlcmllcy4gUGxlYXNlIGJlIGF3YXJlIHRoYXQgaXQgbWlnaHQgdGFrZSBhIGxvbmdlciB0aW1lIGJlZm9yZSB5b3UgY2FuIHNlZSB0aGUgZmVhdHVyZXMgc2luY2UgdGhlIG1hcCB3aWxsIHF1ZXJ5IG1vcmUgZmllbGRzIGJlZm9yZSBpdCBmdWxseSByZW5kZXJzLicsXG4gIGNsaWVudFF1ZXJ5SGVscFRpcDI6ICdPbmUgd2ViIG1hcCBjYW4gYmUgZW5hYmxlZCBvbmx5IG9uY2UgaW4gYW55IG1hcCB3aWRnZXQuIFdlYiBzY2VuZXMgZG8gbm90IHN1cHBvcnQgY2xpZW50LXNpZGUgcXVlcmllcy4nLFxuICBjbGllbnRRdWVyeURpc2FibGVkVGlwOiAnVGhpcyB3ZWIgbWFwIGhhcyB0aGUgY2xpZW50LXNpZGUgcXVlcnkgZW5hYmxlZCBpbiBhbm90aGVyIG1hcCB3aWRnZXQuJyxcblxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcbiAgbWFwQWN0aW9uX0NvbmRpdGlvbnM6ICdDb25kaXRpb25zJyxcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQ6ICdTZWxlY3QgYSB0cmlnZ2VyIGZpZWxkJyxcbiAgbWFwQWN0aW9uX05vbmU6ICdub25lJyxcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkOiAnU2VsZWN0IGFuIGFjdGlvbiBmaWVsZCcsXG4gIG1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9uczogJ01vcmUgY29uZGl0aW9ucycsXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcbiAgbWFwQWN0aW9uX0Nob29zZUxheWVyOiAnU2VsZWN0IGRhdGEnLFxuICBtYXBBY3Rpb25fQXV0b0JpbmQ6ICdBdXRvIGJvdW5kLicsXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxuICBtYXBBY3Rpb25fUG9pbnQ6ICdQb2ludCcsXG4gIG1hcEFjdGlvbl9Qb2x5bGluZTogJ1BvbHlsaW5lJyxcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcbiAgbWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHM6ICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyxcbiAgbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHM6ICdVc2UgY3VzdG9tIHN5bWJvbHMnLFxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXG4gIG1hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWM6ICdBdXRvbWF0aWMnLFxuICBtYXBab29tVG9BY3Rpb25fQ3VzdG9tOiAnQ3VzdG9tJyxcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX21hcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgRGF0YUFjdGlvblNldHRpbmdQcm9wcywgaW5qZWN0SW50bCwgdHlwZSBJbW11dGFibGVPYmplY3QsIEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcbi8vaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcblxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU3ltYm9sU2VsZWN0b3IsIEppbXVTeW1ib2xUeXBlLCB0eXBlIEppbXVTeW1ib2wgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL21hcCdcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5pbXBvcnQgeyB0eXBlIFN5bWJvbE9wdGlvbiwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgZmVhdHVyZVV0aWxzIH0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmludGVyZmFjZSBTdGF0ZXMge1xuICBpc01vZHVsZXNMb2FkZWQ/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBDb25maWcge1xuICBpc1VzZUN1c3RvbVN5bWJvbD86IGJvb2xlYW5cbiAgc3ltYm9sT3B0aW9uPzogU3ltYm9sT3B0aW9uXG59XG5cbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cblxuY2xhc3MgX1Nob3dPbk1hcFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PERhdGFBY3Rpb25TZXR0aW5nUHJvcHM8SU1Db25maWc+LCBTdGF0ZXM+IHtcbiAganNvblV0aWxzOiB0eXBlb2YgX19lc3JpLmpzb25VdGlsc1xuICBkZWZhdWx0U3ltYm9sT3B0aW9uOiBJbW11dGFibGVPYmplY3Q8U3ltYm9sT3B0aW9uPlxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xuICAgICAgaXNVc2VDdXN0b21TeW1ib2w6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5qc29uVXRpbHMgPSBudWxsXG4gICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uID0gSW1tdXRhYmxlKHt9KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vZHVsZXNMb2FkZWQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2Vzcmkvc3ltYm9scy9zdXBwb3J0L2pzb25VdGlscydcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgW3RoaXMuanNvblV0aWxzXSA9IG1vZHVsZXNcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTW9kdWxlc0xvYWRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24gPSAoaXNVc2VDdXN0b21TeW1ib2w6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IC4uLnRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21TeW1ib2wnLCBpc1VzZUN1c3RvbVN5bWJvbCkuc2V0KCdzeW1ib2xPcHRpb24nLCBudWxsKSB9KVxuICB9XG5cbiAgb25TeW1ib2xDcmVhdGVkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uID0gdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnNldCh0eXBlLCBzeW1ib2w/LnRvSlNPTigpKVxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uICYmXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbCAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24ucG9seWxpbmVTeW1ib2wgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnBvbHlnb25TeW1ib2wpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5jb25maWcuc2V0KCdzeW1ib2xPcHRpb24nLCB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24pIH0pXG4gICAgfVxuICB9XG5cbiAgb25TeW1ib2xDaGFuZ2VkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzeW1ib2xPcHRpb24nLCB0eXBlXSwgc3ltYm9sLnRvSlNPTigpKVxuICAgIH0pXG4gIH1cblxuICBnZXRJbml0U3ltYm9sRnJvbUNvbmZpZyA9IChqaW11U3ltYm9sVHlwZTogSmltdVN5bWJvbFR5cGUpOiBKaW11U3ltYm9sID0+IHtcbiAgICBsZXQgc3ltYm9sXG4gICAgY29uc3Qgc3ltYm9sT3B0aW9uID0gdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uXG4gICAgaWYgKHRoaXMuanNvblV0aWxzKSB7XG4gICAgICBpZiAoamltdVN5bWJvbFR5cGUgPT09IEppbXVTeW1ib2xUeXBlLlBvaW50KSB7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9pbnRTeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9pbnRTeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9pbnQnKVxuICAgICAgfSBlbHNlIGlmIChqaW11U3ltYm9sVHlwZSA9PT0gSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpIHtcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sT3B0aW9uPy5wb2x5bGluZVN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2x5bGluZVN5bWJvbCA6IGZlYXR1cmVVdGlscy5nZXREZWZhdWx0U3ltYm9sKCdwb2x5bGluZScpXG4gICAgICB9IGVsc2UgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2x5Z29uKSB7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9seWdvblN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2x5Z29uU3ltYm9sIDogZmVhdHVyZVV0aWxzLmdldERlZmF1bHRTeW1ib2woJ3BvbHlnb24nKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmV0dXJuIHN5bWJvbCA/IHRoaXMuanNvblV0aWxzLmZyb21KU09OKHN5bWJvbCkgOiBudWxsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHBvaW50TGFiZWwgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvaW50JywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9pbnQgfSlcbiAgICBjb25zdCBwb2x5bGluZUxhYmVsID0gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Qb2x5bGluZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvbHlsaW5lIH0pXG4gICAgY29uc3QgcG9seWdvbkxhYmVsID0gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Qb2x5Z29uJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9seWdvbiB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAnPlxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24+XG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4Jz5cbiAgICAgICAgICAgICAgICA8UmFkaW9cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9eyF0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24oZmFsc2UpIH19XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3VzZUxheWVyRGVmaW5lZExhYmVsJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGlkPSd1c2VMYXllckRlZmluZWRMYWJlbCcgY2xhc3NOYW1lPSdtLTAgbWwtMicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9scyB9KX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxuICAgICAgICAgICAgICAgIDxSYWRpb1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2x9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uKHRydWUpIH19XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3VzZUN1c3RvbUxhYmVsJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGlkPSd1c2VDdXN0b21MYWJlbCcgY2xhc3NOYW1lPSdtLTAgbWwtMicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9scyB9KX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2wgJiYgdGhpcy5qc29uVXRpbHMgJiYgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT0ncGItMCc+XG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N5bWJvbC1zZWxlY3RvciBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHctMjUnIHRpdGxlID17cG9pbnRMYWJlbH0+XG4gICAgICAgICAgICAgICAgPFN5bWJvbFNlbGVjdG9yIGppbXVTeW1ib2xUeXBlPXtKaW11U3ltYm9sVHlwZS5Qb2ludH0gc3ltYm9sPXt0aGlzLmdldEluaXRTeW1ib2xGcm9tQ29uZmlnKEppbXVTeW1ib2xUeXBlLlBvaW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHsgdGhpcy5vblN5bWJvbENyZWF0ZWQoc3ltYm9sUGFyYW0uc3ltYm9sLCAncG9pbnRTeW1ib2wnKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50U3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9pbnRTeW1ib2wnKSB9IH0vPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0wIHctMTAwIGQtYmxvY2sgdGV4dC1jZW50ZXInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICAgICAgICAgICAgICB7cG9pbnRMYWJlbH1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N5bWJvbC1zZWxlY3RvciBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHctMjUnIHRpdGxlPXtwb2x5bGluZUxhYmVsfT5cbiAgICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvbHlsaW5lfSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlZD17IChzeW1ib2xQYXJhbSkgPT4geyB0aGlzLm9uU3ltYm9sQ3JlYXRlZChzeW1ib2xQYXJhbS5zeW1ib2wsICdwb2x5bGluZVN5bWJvbCcpIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9seWxpbmVTeW1ib2xDaGFuZ2VkPXsgKHN5bWJvbCkgPT4geyB0aGlzLm9uU3ltYm9sQ2hhbmdlZChzeW1ib2wsICdwb2x5bGluZVN5bWJvbCcpIH0gfS8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTAgdy0xMDAgZC1ibG9jayB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtwb2x5bGluZUxhYmVsfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ltYm9sLXNlbGVjdG9yIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgdy0yNScgdGl0bGU9e3BvbHlnb25MYWJlbH0+XG4gICAgICAgICAgICAgICAgPFN5bWJvbFNlbGVjdG9yIGppbXVTeW1ib2xUeXBlPXtKaW11U3ltYm9sVHlwZS5Qb2x5Z29ufSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9seWdvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHsgdGhpcy5vblN5bWJvbENyZWF0ZWQoc3ltYm9sUGFyYW0uc3ltYm9sLCAncG9seWdvblN5bWJvbCcpIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2x5Z29uU3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9seWdvblN5bWJvbCcpIH0gfS8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTAgdy0xMDAgZC1ibG9jayB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtwb2x5Z29uTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChfU2hvd09uTWFwU2V0dGluZylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==