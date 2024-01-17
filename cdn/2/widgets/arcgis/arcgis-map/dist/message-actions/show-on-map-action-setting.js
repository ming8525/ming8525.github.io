System.register(["jimu-core","jimu-ui","jimu-ui/advanced/map","jimu-ui/advanced/setting-components","jimu-theme","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
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
/*!*************************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action-setting.tsx ***!
  \*************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/map */ "jimu-ui/advanced/map");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/** @jsx jsx */







class _ShowOnMapActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
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
        this.handleIsUseCustomSymbolOption = (isUseCustomSymbol) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                //config: this.props.config.set('isUseCustomSymbol', isUseCustomSymbol)
                config: this.props.config.set('isUseCustomSymbol', isUseCustomSymbol).set('symbolOption', null)
            });
        };
        this.onSymbolChanged = (symbol, type) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.setIn(['symbolOption', type], symbol.toJSON())
            });
        };
        this.onSymbolCreated = (symbol, type) => {
            this.defaultSymbolOption = this.defaultSymbolOption.set(type, symbol === null || symbol === void 0 ? void 0 : symbol.toJSON());
            if (!this.props.config.symbolOption &&
                this.defaultSymbolOption.pointSymbol &&
                this.defaultSymbolOption.polylineSymbol &&
                this.defaultSymbolOption.polygonSymbol) {
                this.props.onSettingChange({
                    actionId: this.props.actionId,
                    config: this.props.config.setIn(['symbolOption'], this.defaultSymbolOption)
                });
            }
        };
        this.getInitSymbolFromConfig = (jimuSymbolType) => {
            let symbol;
            const symbolOption = this.props.config.symbolOption;
            if (this.jsonUtils) {
                if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.pointSymbol) ? symbolOption.pointSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.featureUtils.getDefaultSymbol('point');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polylineSymbol) ? symbolOption.polylineSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.featureUtils.getDefaultSymbol('polyline');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polygonSymbol) ? symbolOption.polygonSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.featureUtils.getDefaultSymbol('polygon');
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
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.loadArcGISJSAPIModules)([
            'esri/symbols/support/jsonUtils'
        ]).then(modules => {
            [
                this.jsonUtils
            ] = modules;
            this.setState({
                isModulesLoaded: true
            });
        });
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: this.props.config
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
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: this.props.intl.formatMessage({ id: 'symbol', defaultMessage: 'symbol' }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(false); }, "aria-labelledby": 'useLayerDefinedLabel' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { id: 'useLayerDefinedLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseLayerDefinedSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseLayerDefinedSymbols }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(true); }, "aria-labelledby": 'useCustomLabel' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { id: 'useCustomLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseCustomSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseCustomSymbols }))))),
                this.props.config.isUseCustomSymbol && this.jsonUtils && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Point', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Point }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point), onPointSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'pointSymbol'); }, onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'pointSymbol'); } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Polyline', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polyline }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline), onPolylineSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polylineSymbol'); }, onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polylineSymbol'); } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Polygon', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polygon }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon), onPolygonSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polygonSymbol'); }, onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polygonSymbol'); } }))))));
    }
}
_ShowOnMapActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        isUseCustomSymbol: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_ShowOnMapActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsV0FBVyxFQUFFLFFBQVE7SUFDckIsY0FBYyxFQUFFLHdEQUF3RDtJQUN4RSxrQkFBa0IsRUFBRSx3RkFBd0Y7SUFDNUcsVUFBVSxFQUFFLGFBQWE7SUFDekIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsU0FBUztJQUN0QixjQUFjLEVBQUUscUVBQXFFO0lBQ3JGLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsdUJBQXVCLEVBQUUscUJBQXFCO0lBQzlDLHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdEMsdUJBQXVCLEVBQUUsbUJBQW1CO0lBQzVDLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxnQkFBZ0IsRUFBRSx1QkFBdUI7SUFDekMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixXQUFXLEVBQUUsZUFBZTtJQUM1QixzQkFBc0IsRUFBRSxvQ0FBb0M7SUFDNUQsNkJBQTZCLEVBQUUsd0RBQXdEO0lBQ3ZGLFNBQVMsRUFBRSxpQkFBaUI7SUFDNUIsZ0JBQWdCLEVBQUUsb0JBQW9CO0lBQ3RDLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsWUFBWSxFQUFFLGVBQWU7SUFDN0IsU0FBUyxFQUFFLGNBQWM7SUFDekIsd0JBQXdCLEVBQUUsdUJBQXVCO0lBQ2pELGVBQWUsRUFBRSxZQUFZO0lBQzdCLHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCxtQkFBbUIsRUFBRSwyTkFBMk47SUFDaFAsbUJBQW1CLEVBQUUsd0dBQXdHO0lBQzdILHNCQUFzQixFQUFFLHVFQUF1RTtJQUUvRixzQkFBc0IsRUFBRSxjQUFjO0lBQ3RDLGlCQUFpQixFQUFFLGFBQWE7SUFDaEMscUJBQXFCLEVBQUUsYUFBYTtJQUNwQyxvQkFBb0IsRUFBRSxZQUFZO0lBQ2xDLHVCQUF1QixFQUFFLDZCQUE2QjtJQUN0RCwyQkFBMkIsRUFBRSx3QkFBd0I7SUFDckQsY0FBYyxFQUFFLE1BQU07SUFDdEIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQiwwQkFBMEIsRUFBRSx3QkFBd0I7SUFDcEQsd0JBQXdCLEVBQUUsaUJBQWlCO0lBQzNDLHVCQUF1QixFQUFFLG1DQUFtQztJQUM1RCxxQkFBcUIsRUFBRSxhQUFhO0lBQ3BDLGtCQUFrQixFQUFFLGFBQWE7SUFDakMsaUJBQWlCLEVBQUUsVUFBVTtJQUM3QixlQUFlLEVBQUUsT0FBTztJQUN4QixrQkFBa0IsRUFBRSxVQUFVO0lBQzlCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsZ0NBQWdDLEVBQUUsMkJBQTJCO0lBQzdELDBCQUEwQixFQUFFLG9CQUFvQjtJQUNoRCx5QkFBeUIsRUFBRSxZQUFZO0lBQ3ZDLHlCQUF5QixFQUFFLFdBQVc7SUFDdEMsc0JBQXNCLEVBQUUsUUFBUTtJQUNoQyx5QkFBeUIsRUFBRSxjQUFjO0NBQzFDOzs7Ozs7Ozs7OztBQzlERDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxlQUFlO0FBSUc7QUFDYTtBQUN1RDtBQUNOO0FBQ25CO0FBQ3ZCO0FBQytDO0FBaUJyRixNQUFNLHVCQUF3QixTQUFRLDRDQUFLLENBQUMsYUFBZ0U7SUFlMUcsWUFBYSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFmZCxlQUFVLEdBQVE7WUFDaEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCO1FBdURELGtDQUE2QixHQUFHLENBQUMsaUJBQTBCLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0IsdUVBQXVFO2dCQUN2RSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7YUFDaEcsQ0FBQztRQUNKLENBQUM7UUFFRCxvQkFBZSxHQUFHLENBQUMsTUFBa0IsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDekUsQ0FBQztRQUNKLENBQUM7UUFFRCxvQkFBZSxHQUFHLENBQUMsTUFBa0IsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE1BQU0sRUFBRSxDQUFDO1lBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZO2dCQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVztnQkFDcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWM7Z0JBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7b0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUM7aUJBQzVFLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUVELDRCQUF1QixHQUFHLENBQUMsY0FBOEIsRUFBYyxFQUFFO1lBQ3ZFLElBQUksTUFBTTtZQUNWLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVk7WUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLElBQUksY0FBYyxLQUFLLGdFQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzVDLE1BQU0sR0FBRyxhQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxxREFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztnQkFDeEcsQ0FBQztxQkFBTSxJQUFJLGNBQWMsS0FBSyxnRUFBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN0RCxNQUFNLEdBQUcsYUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLGNBQWMsRUFBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMscURBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pILENBQUM7cUJBQU0sSUFBSSxjQUFjLEtBQUssZ0VBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckQsTUFBTSxHQUFHLGFBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHFEQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO2dCQUM5RyxDQUFDO1lBQ0gsQ0FBQztZQUNELG1CQUFtQjtZQUNuQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDeEQsQ0FBQztRQTFGQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG9EQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxlQUFlLEVBQUUsS0FBSztTQUN2QjtJQUNILENBQUM7SUFRRCxpQkFBaUI7UUFDZixtRUFBc0IsQ0FBQztZQUNyQixnQ0FBZ0M7U0FDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQjtnQkFDRSxJQUFJLENBQUMsU0FBUzthQUNmLEdBQUcsT0FBTztZQUVYLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osZUFBZSxFQUFFLElBQUk7YUFDdEIsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBRSxLQUF1QjtRQUMvQixPQUFPLDhDQUFHOzttQkFFSywrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7O0tBV3pGO0lBQ0gsQ0FBQztJQThDRCxNQUFNO1FBQ0osT0FBTyxDQUNMLHdEQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUM5RiwrQ0FBQywyRUFBVTtvQkFDVCx3REFBSyxTQUFTLEVBQUMseURBQXlEO3dCQUN0RSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN4QywrQ0FBQywwQ0FBSyxJQUNKLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFDM0UsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLHFCQUM3QyxzQkFBc0IsR0FDdEM7NEJBQ0YsMERBQU8sRUFBRSxFQUFDLHNCQUFzQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUMvRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsa0NBQWtDLEVBQUUsY0FBYyxFQUFFLHFFQUFlLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxDQUN0SSxDQUNKLENBQ0YsQ0FDSztnQkFDYiwrQ0FBQywyRUFBVTtvQkFDVCx3REFBSyxTQUFTLEVBQUMseURBQXlEO3dCQUN0RSx3REFBSyxTQUFTLEVBQUMsMkJBQTJCOzRCQUN4QywrQ0FBQywwQ0FBSyxJQUNKLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQzFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxxQkFDNUMsZ0JBQWdCLEdBQ2hDOzRCQUNGLDBEQUFPLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLDRCQUE0QixFQUFFLGNBQWMsRUFBRSxxRUFBZSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FDMUgsQ0FDSixDQUNGLENBQ0s7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSwrQ0FBQywrRUFBYztvQkFDdkUsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxxRUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO3dCQUMxSCwrQ0FBQyxnRUFBYyxJQUFDLGNBQWMsRUFBRSxnRUFBYyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdFQUFjLENBQUMsS0FBSyxDQUFDLEVBQzFELG9CQUFvQixFQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBQyxDQUFDLEVBQ2xGLFNBQVMsRUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFDLENBQUMsR0FBSSxDQUN2STtvQkFDYiwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLHFFQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt3QkFDaEksK0NBQUMsZ0VBQWMsSUFBQyxjQUFjLEVBQUUsZ0VBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxnRUFBYyxDQUFDLFFBQVEsQ0FBQyxFQUM3RCx1QkFBdUIsRUFBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsRUFBQyxDQUFDLEVBQ3hGLFNBQVMsRUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLEVBQUMsQ0FBQyxHQUFJLENBQzdJO29CQUNiLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUscUVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUM5SCwrQ0FBQyxnRUFBYyxJQUFDLGNBQWMsRUFBRSxnRUFBYyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdFQUFjLENBQUMsT0FBTyxDQUFDLEVBQzVELHNCQUFzQixFQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFBQyxDQUFDLEVBQ3RGLFNBQVMsRUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFDLENBQUMsR0FBSSxDQUMzSSxDQUNFLENBQ0YsQ0FDYixDQUNQO0lBQ0gsQ0FBQzs7QUF6SU0sb0NBQVksR0FBRztJQUNwQixNQUFNLEVBQUUsb0RBQVMsQ0FBQztRQUNoQixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCLENBQUM7Q0FDSDtBQXdJSCxpRUFBZSxxREFBUyxDQUFDLHVCQUF1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvbWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvc2hvdy1vbi1tYXAtYWN0aW9uLXNldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgc291cmNlTGFiZWw6ICdTb3VyY2UnLFxuICBzb3VyY2VEZXNjcmlwdDogJ0Egd2ViIG1hcCBvciB3ZWIgc2NlbmUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLicsXG4gIHNlbGVjdFRoaXJkTWFwSGludDogJ1BsZWFzZSB1bnNlbGVjdCBhIG1hcCBvciBzY2VuZSBiZWZvcmUgeW91IGNob29zZSBhbm90aGVyIG9uZS4gVXAgdG8gdHdvIGFyZSBzdXBwb3J0ZWQuJyxcbiAgaW5pdGlhbE1hcDogJ0luaXRpYWwgbWFwJyxcbiAgaW5pdGlhbE1hcFZpZXc6ICdJbml0aWFsIHZpZXcnLFxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcbiAgc2V0TWFwVmlldzogJ01vZGlmeSBpbml0aWFsIHZpZXcnLFxuICBkZWZhdWx0VmlldzogJ0RlZmF1bHQnLFxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxuICBjdXN0b21WaWV3OiAnQ3VzdG9tJyxcbiAgY3VzdG9tVmlld1RpcDogJ0NyZWF0ZSBhIG5ldyBwb3NpdGlvbiBvZiB0aGUgbWFwJyxcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXG4gIHRvb2xMYWJlbDogJ1Rvb2xzJyxcbiAgb3B0aW9uczogJ09wdGlvbnMnLFxuICBzZWxlY3Rpb25IaWdobGlnaHRDb2xvcjogJ1NlbGVjdGlvbiBoaWdobGlnaHQnLFxuICBmZWF0dXJlU2VsZWN0aW9uQ29sb3I6ICdGZWF0dXJlIHNlbGVjdGlvbiBjb2xvcnMnLFxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcbiAgZmVhdHVyZUhpZ2hsaWdodE91dGxpbmU6ICdIaWdobGlnaHQgb3V0bGluZScsXG4gIGRpc2FibGVTY3JvbGxab29tOiAnRGlzYWJsZSBzY3JvbGwgem9vbWluZycsXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxuICBkaXNhYmxlUG9wVXA6ICdEaXNhYmxlIHBvcC11cCcsXG4gIGVuYWJsZVBvcFVwOiAnRW5hYmxlIHBvcC11cCcsXG4gIHNob3dQb3B1cFVwb25TZWxlY3Rpb246ICdTaG93IHBvcC11cCB1cG9uIGZlYXR1cmUgc2VsZWN0aW9uJyxcbiAgc2hvd1BvcHVwVXBvblNlbGVjdGlvblRvb2x0aXA6ICdTZWxlY3Rpb24gbWFkZSBpbnRlcmFjdGl2ZWx5IGZyb20gdGhlIG1hcCBpcyBleGNsdWRlZC4nLFxuICBkb2NrUG9wdXA6ICdEb2NrIHRoZSBwb3AtdXAnLFxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcbiAgY2hvb3NlQUxheWVyOiAnU2VsZWN0IGEgbGF5ZXInLFxuICBkYXRhUmVsYXRpb25TaGlwOiAnRGF0YSByZWxhdGlvbnNoaXAnLFxuICBtYXBOb25lOiAnbm9uZScsXG4gIG1lc3NhZ2VGaWVsZDogJ01lc3NhZ2UgZmllbGQnLFxuICBtYXBMYXlvdXQ6ICdUb29scyBsYXlvdXQnLFxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxuICBtYXBMYXlvdXRfU21hbGw6ICdTbWFsbCBzaXplJyxcbiAgZW5hYmxlQ2xpZW50U2lkZVF1ZXJ5OiAnRW5hYmxlIGNsaWVudC1zaWRlIHF1ZXJ5JyxcbiAgY2xpZW50UXVlcnlIZWxwVGlwMTogJ0lmIGVuYWJsZWQsIHdpZGdldHMgdXNpbmcgdGhlIHdlYiBtYXAgZGF0YSB3aWxsIGFwcGx5IGNsaWVudC1zaWRlIHF1ZXJpZXMuIFBsZWFzZSBiZSBhd2FyZSB0aGF0IGl0IG1pZ2h0IHRha2UgYSBsb25nZXIgdGltZSBiZWZvcmUgeW91IGNhbiBzZWUgdGhlIGZlYXR1cmVzIHNpbmNlIHRoZSBtYXAgd2lsbCBxdWVyeSBtb3JlIGZpZWxkcyBiZWZvcmUgaXQgZnVsbHkgcmVuZGVycy4nLFxuICBjbGllbnRRdWVyeUhlbHBUaXAyOiAnT25lIHdlYiBtYXAgY2FuIGJlIGVuYWJsZWQgb25seSBvbmNlIGluIGFueSBtYXAgd2lkZ2V0LiBXZWIgc2NlbmVzIGRvIG5vdCBzdXBwb3J0IGNsaWVudC1zaWRlIHF1ZXJpZXMuJyxcbiAgY2xpZW50UXVlcnlEaXNhYmxlZFRpcDogJ1RoaXMgd2ViIG1hcCBoYXMgdGhlIGNsaWVudC1zaWRlIHF1ZXJ5IGVuYWJsZWQgaW4gYW5vdGhlciBtYXAgd2lkZ2V0LicsXG5cbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXG4gIG1hcEFjdGlvbl9TZXREYXRhOiAnU2VsZWN0IGRhdGEnLFxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXI6ICdBY3Rpb24gZGF0YScsXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXG4gIG1hcEFjdGlvbl9SZWxhdGVNZXNzYWdlOiAnVHJpZ2dlciAvIGFjdGlvbiBjb25uZWN0aW9uJyxcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkOiAnU2VsZWN0IGEgdHJpZ2dlciBmaWVsZCcsXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXG4gIG1hcEFjdGlvbl9FcXVhbHM6ICdlcXVhbHMnLFxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZDogJ1NlbGVjdCBhbiBhY3Rpb24gZmllbGQnLFxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxuICBtYXBBY3Rpb25fU2V0RXhwcmVzc2lvbjogJ1BsZWFzZSBzZXQgeW91ciBleHByZXNzaW9uIGZpcnN0LicsXG4gIG1hcEFjdGlvbl9DaG9vc2VMYXllcjogJ1NlbGVjdCBkYXRhJyxcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxuICBtYXBBY3Rpb25fTm9MYXllcjogJ05vIGRhdGEuJyxcbiAgbWFwQWN0aW9uX1BvaW50OiAnUG9pbnQnLFxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXG4gIG1hcEFjdGlvbl9Qb2x5Z29uOiAnUG9seWdvbicsXG4gIG1hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzOiAnVXNlIGxheWVyLWRlZmluZWQgc3ltYm9scycsXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcbiAgbWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZTogJ1pvb20gc2NhbGUnLFxuICBtYXBab29tVG9BY3Rpb25fQXV0b21hdGljOiAnQXV0b21hdGljJyxcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXG4gIG1hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGU6ICdUeXBlIGEgc2NhbGUnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX21hcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBSZWFjdCwgY3NzLCBqc3gsIHR5cGUgQWN0aW9uU2V0dGluZ1Byb3BzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxuICB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIHBvbGlzaGVkLCBJbW11dGFibGVcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU3ltYm9sU2VsZWN0b3IsIEppbXVTeW1ib2xUeXBlLCB0eXBlIEppbXVTeW1ib2wgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL21hcCdcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgdHlwZSBTeW1ib2xPcHRpb24sIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIGZlYXR1cmVVdGlscyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XG4gIHRoZW1lPzogSU1UaGVtZVZhcmlhYmxlc1xufVxuXG5pbnRlcmZhY2UgU3RhdGVzIHtcbiAgaXNNb2R1bGVzTG9hZGVkPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgQ29uZmlnIHtcbiAgaXNVc2VDdXN0b21TeW1ib2w/OiBib29sZWFuXG4gIHN5bWJvbE9wdGlvbj86IFN5bWJvbE9wdGlvblxufVxuXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XG5cbmNsYXNzIF9TaG93T25NYXBBY3Rpb25TZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBY3Rpb25TZXR0aW5nUHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgU3RhdGVzPiB7XG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwJyxcbiAgICBib3R0b206ICcwJyxcbiAgICB3aWR0aDogJzI1OXB4JyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBib3JkZXJSaWdodDogJycsXG4gICAgYm9yZGVyQm90dG9tOiAnJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMXB4J1xuICB9XG5cbiAganNvblV0aWxzOiB0eXBlb2YgX19lc3JpLmpzb25VdGlsc1xuICBkZWZhdWx0U3ltYm9sT3B0aW9uOiBJbW11dGFibGVPYmplY3Q8U3ltYm9sT3B0aW9uPlxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuanNvblV0aWxzID0gbnVsbFxuICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbiA9IEltbXV0YWJsZSh7fSlcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb2R1bGVzTG9hZGVkOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xuICAgICAgaXNVc2VDdXN0b21TeW1ib2w6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2Vzcmkvc3ltYm9scy9zdXBwb3J0L2pzb25VdGlscydcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xuICAgICAgW1xuICAgICAgICB0aGlzLmpzb25VdGlsc1xuICAgICAgXSA9IG1vZHVsZXNcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTW9kdWxlc0xvYWRlZDogdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZ1xuICAgIH0pXG4gIH1cblxuICBnZXRTdHlsZSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogJHtwb2xpc2hlZC5yZW0oMTApfSAke3BvbGlzaGVkLnJlbSgxNil9ICR7cG9saXNoZWQucmVtKDApfSAke3BvbGlzaGVkLnJlbSgxNil9XG4gICAgICB9XG5cbiAgICAgIC5kZWxldGVJY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgIH1cblxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIGhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uID0gKGlzVXNlQ3VzdG9tU3ltYm9sOiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICAvL2NvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdpc1VzZUN1c3RvbVN5bWJvbCcsIGlzVXNlQ3VzdG9tU3ltYm9sKVxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2lzVXNlQ3VzdG9tU3ltYm9sJywgaXNVc2VDdXN0b21TeW1ib2wpLnNldCgnc3ltYm9sT3B0aW9uJywgbnVsbClcbiAgICB9KVxuICB9XG5cbiAgb25TeW1ib2xDaGFuZ2VkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnc3ltYm9sT3B0aW9uJywgdHlwZV0sIHN5bWJvbC50b0pTT04oKSlcbiAgICB9KVxuICB9XG5cbiAgb25TeW1ib2xDcmVhdGVkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uID0gdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnNldCh0eXBlLCBzeW1ib2w/LnRvSlNPTigpKVxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uICYmXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbCAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24ucG9seWxpbmVTeW1ib2wgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnBvbHlnb25TeW1ib2wpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXG4gICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzeW1ib2xPcHRpb24nXSwgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXRJbml0U3ltYm9sRnJvbUNvbmZpZyA9IChqaW11U3ltYm9sVHlwZTogSmltdVN5bWJvbFR5cGUpOiBKaW11U3ltYm9sID0+IHtcbiAgICBsZXQgc3ltYm9sXG4gICAgY29uc3Qgc3ltYm9sT3B0aW9uID0gdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uXG4gICAgaWYgKHRoaXMuanNvblV0aWxzKSB7XG4gICAgICBpZiAoamltdVN5bWJvbFR5cGUgPT09IEppbXVTeW1ib2xUeXBlLlBvaW50KSB7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9pbnRTeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9pbnRTeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9pbnQnKVxuICAgICAgfSBlbHNlIGlmIChqaW11U3ltYm9sVHlwZSA9PT0gSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpIHtcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sT3B0aW9uPy5wb2x5bGluZVN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2x5bGluZVN5bWJvbCA6IGZlYXR1cmVVdGlscy5nZXREZWZhdWx0U3ltYm9sKCdwb2x5bGluZScpXG4gICAgICB9IGVsc2UgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2x5Z29uKSB7XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9seWdvblN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2x5Z29uU3ltYm9sIDogZmVhdHVyZVV0aWxzLmdldERlZmF1bHRTeW1ib2woJ3BvbHlnb24nKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmV0dXJuIHN5bWJvbCA/IHRoaXMuanNvblV0aWxzLmZyb21KU09OKHN5bWJvbCkgOiBudWxsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17dGhpcy5nZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lKX0gPlxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzeW1ib2wnLCBkZWZhdWx0TWVzc2FnZTogJ3N5bWJvbCcgfSl9PlxuICAgICAgICAgIDxTZXR0aW5nUm93PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XG4gICAgICAgICAgICAgICAgPFJhZGlvXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjaGVja2VkPXshdGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2x9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uKGZhbHNlKSB9fVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSd1c2VMYXllckRlZmluZWRMYWJlbCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBpZD0ndXNlTGF5ZXJEZWZpbmVkTGFiZWwnIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9scycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHMgfSl9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgPFNldHRpbmdSb3c+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4Jz5cbiAgICAgICAgICAgICAgICA8UmFkaW9cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHsgdGhpcy5oYW5kbGVJc1VzZUN1c3RvbVN5bWJvbE9wdGlvbih0cnVlKSB9fVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSd1c2VDdXN0b21MYWJlbCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBpZD0ndXNlQ3VzdG9tTGFiZWwnIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9scycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHMgfSl9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sICYmIHRoaXMuanNvblV0aWxzICYmIDxTZXR0aW5nU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvaW50JywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9pbnQgfSl9PlxuICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvaW50fSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9pbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50U3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9pbnRTeW1ib2wnKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB7IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvaW50U3ltYm9sJykgfSB9Lz5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvbHlsaW5lJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9seWxpbmUgfSl9PlxuICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvbHlsaW5lfSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvbHlsaW5lU3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9seWxpbmVTeW1ib2wnKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB7IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlsaW5lU3ltYm9sJykgfSB9Lz5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvbHlnb24nLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Qb2x5Z29uIH0pfT5cbiAgICAgICAgICAgICAgPFN5bWJvbFNlbGVjdG9yIGppbXVTeW1ib2xUeXBlPXtKaW11U3ltYm9sVHlwZS5Qb2x5Z29ufSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9seWdvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2x5Z29uU3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9seWdvblN5bWJvbCcpIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlZD17IChzeW1ib2xQYXJhbSkgPT4geyB0aGlzLm9uU3ltYm9sQ3JlYXRlZChzeW1ib2xQYXJhbS5zeW1ib2wsICdwb2x5Z29uU3ltYm9sJykgfSB9Lz5cbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPn1cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoX1Nob3dPbk1hcEFjdGlvblNldHRpbmcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=