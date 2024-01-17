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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Map',
    _action_displayFeatureSet_label: 'Display feature set',
    _action_panTo_label: 'Pan to',
    _action_zoomToFeature_label: 'Zoom to',
    _action_selectFeature_label: 'Select feature',
    _action_flash_label: 'Flash',
    _action_filter_label: 'Filter',
    _action_showOnMap_label: 'Show on map',
    _action_addToMap_label: 'Add to map',
    showOnMapData: 'Show on map data',
    addedData: 'added data',
    failToAddTheDataOnMap: 'Fail to add the data.',
    addToMapData: 'Add to map data',
    mapCurrentRecord: '{layerName} map current record',
    _url_params_map_state_label: 'Viewpoint',
    _url_params_layer_center_label: 'Center',
    _url_params_layer_scale_label: 'Scale',
    _url_params_layer_rotation_label: 'Rotation',
    _url_params_layer_visibility_label: 'Layer visibility'
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
/*!******************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map.ts ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOnMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ShowOnMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
    }
    /**
     * ShowOnMap data action only supports DataLevel.RECORDS data, doesn't support DataLevel.DATA_SOURCE data.
     */
    isSupported(dataSets, dataLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (dataSets.length > 1) {
                return false;
            }
            const dataSet = dataSets[0];
            const { records, dataSource } = dataSet;
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            // @ts-expect-error
            return dataLevel === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.Records && (records === null || records === void 0 ? void 0 : records.length) > 0 && records.some(record => { var _a; return (_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry; });
        });
    }
    onExecute(dataSets, dataLevel, widgetId, actionConfig) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
            const dataSet = dataSets[0];
            const titleCountInfo = this.getUniqueTitleCountInfo(dataSet, activeViewId, showOnMapDatas);
            // save action data
            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            // use code to maintain 'symbolOption' compatibility here
            // For app was created before online10.1 (inlcude 10.1), actionConfig is undefined, the final 'symbolOption' is undefined.
            // For app was created or saved after online10.1, actionConfig is a object,
            //  if actionConfig.isUseCustomSymbol is true, means check 'Use custom symbols' option, the final 'symbolOption' is actionConfig.symbolOption
            //  if actionConfig.isUseCustomSymbol is false, means uncheck 'Use layer-defined symbols' option, the final 'symbolOption' is null
            // Summary:
            // for 'symbolOption', the difference between the values 'undefined' and 'null':
            //   undefined: app was created before online10.1 (inlcude 10.1), use default symbol;
            //   null: app was created or saved after online10.1, use default renderer of layer.
            // symbolOption: actionConfig?.isUseCustomSymbol ? actionConfig.symbolOption : (actionConfig?.isUseCustomSymbol === false ? null : undefined),
            let symbolOption;
            if (actionConfig) {
                // > online 10.1
                if (actionConfig.isUseCustomSymbol) {
                    // 'Use custom symbols' option
                    symbolOption = actionConfig.symbolOption;
                }
                else if (actionConfig.isUseCustomSymbol === false) {
                    // 'Use layer-defined symbols' option
                    symbolOption = null;
                }
                else {
                    // should not goes here
                    symbolOption = undefined;
                }
            }
            else {
                // <= online 10.1
                // use featureUtils.getDefaultSymbol() to create default 2D symbol
                symbolOption = undefined;
            }
            const newShowOnMapData = {
                mapWidgetId: this.widgetId,
                // messageWidgetId is only available for message action, so keep it empty for data action
                messageWidgetId: undefined,
                jimuMapViewId: activeViewId,
                dataSet,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction,
                symbolOption,
                title: titleCountInfo.finalTitle,
                titleCountInfo
            };
            showOnMapDatas[id] = newShowOnMapData;
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);
            return yield Promise.resolve(true);
        });
    }
    getUniqueTitleCountInfo(dataSet, activeViewId, showOnMapDatas) {
        const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
        const rawTitle = dataSet.name || intl.formatMessage({ id: 'showOnMapData', defaultMessage: _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].showOnMapData });
        // #16798, If Query widget sends data action with same data source and data records multiple times, we will create multiple layers with same title.
        // To avoid this case, we need to make name unique.
        const existingTitleCounts = [];
        Object.values(showOnMapDatas).forEach((showOnMap) => {
            const titleCountInfo = showOnMap.titleCountInfo;
            if (showOnMap.jimuMapViewId === activeViewId && showOnMap.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction && titleCountInfo && titleCountInfo.rawTitle === rawTitle && titleCountInfo.count >= 0) {
                existingTitleCounts.push(titleCountInfo.count);
            }
        });
        let titleCountInfo = null;
        if (existingTitleCounts.length > 0) {
            const maxCount = Math.max(...existingTitleCounts);
            const count = maxCount + 1;
            const finalTitle = `${rawTitle} ${maxCount + 1}`;
            titleCountInfo = {
                rawTitle,
                finalTitle,
                count
            };
        }
        else {
            const count = 1;
            const finalTitle = rawTitle;
            titleCountInfo = {
                rawTitle,
                finalTitle,
                count
            };
        }
        return titleCountInfo;
    }
    _getActiveViewId(mapWidgetId, infos) {
        let activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
        // using a default map view as active map view if the widget hasn't been loaded.
        if (!activeViewId) {
            activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
        }
        return activeViewId;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsS0FBSztJQUNuQiwrQkFBK0IsRUFBRSxxQkFBcUI7SUFDdEQsbUJBQW1CLEVBQUUsUUFBUTtJQUM3QiwyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDLDJCQUEyQixFQUFFLGdCQUFnQjtJQUM3QyxtQkFBbUIsRUFBRSxPQUFPO0lBQzVCLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsdUJBQXVCLEVBQUUsYUFBYTtJQUN0QyxzQkFBc0IsRUFBRSxZQUFZO0lBQ3BDLGFBQWEsRUFBRSxrQkFBa0I7SUFDakMsU0FBUyxFQUFFLFlBQVk7SUFDdkIscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLFlBQVksRUFBRSxpQkFBaUI7SUFDL0IsZ0JBQWdCLEVBQUUsZ0NBQWdDO0lBQ2xELDJCQUEyQixFQUFFLFdBQVc7SUFDeEMsOEJBQThCLEVBQUUsUUFBUTtJQUN4Qyw2QkFBNkIsRUFBRSxPQUFPO0lBQ3RDLGdDQUFnQyxFQUFFLFVBQVU7SUFDNUMsa0NBQWtDLEVBQUUsa0JBQWtCO0NBQ3ZEOzs7Ozs7Ozs7OztBQ3BCRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLa0I7QUFDMkc7QUFD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akQsTUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLENBQUM7WUFDMUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtZQUVoRCxjQUFjLEdBQUc7Z0JBQ2YsUUFBUTtnQkFDUixVQUFVO2dCQUNWLEtBQUs7YUFDTjtRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxLQUFLLEdBQUcsQ0FBQztZQUNmLE1BQU0sVUFBVSxHQUFHLFFBQVE7WUFFM0IsY0FBYyxHQUFHO2dCQUNmLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixLQUFLO2FBQ047UUFDSCxDQUFDO1FBRUQsT0FBTyxjQUFjO0lBQ3ZCLENBQUM7SUFFTyxnQkFBZ0IsQ0FBRSxXQUFtQixFQUFFLEtBQW9FO1FBQ2pILElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDL0gsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7UUFDbkcsQ0FBQztRQUNELE9BQU8sWUFBWTtJQUNyQixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9kYXRhLWFjdGlvbnMvc2hvdy1vbi1tYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdNYXAnLFxuICBfYWN0aW9uX2Rpc3BsYXlGZWF0dXJlU2V0X2xhYmVsOiAnRGlzcGxheSBmZWF0dXJlIHNldCcsXG4gIF9hY3Rpb25fcGFuVG9fbGFiZWw6ICdQYW4gdG8nLFxuICBfYWN0aW9uX3pvb21Ub0ZlYXR1cmVfbGFiZWw6ICdab29tIHRvJyxcbiAgX2FjdGlvbl9zZWxlY3RGZWF0dXJlX2xhYmVsOiAnU2VsZWN0IGZlYXR1cmUnLFxuICBfYWN0aW9uX2ZsYXNoX2xhYmVsOiAnRmxhc2gnLFxuICBfYWN0aW9uX2ZpbHRlcl9sYWJlbDogJ0ZpbHRlcicsXG4gIF9hY3Rpb25fc2hvd09uTWFwX2xhYmVsOiAnU2hvdyBvbiBtYXAnLFxuICBfYWN0aW9uX2FkZFRvTWFwX2xhYmVsOiAnQWRkIHRvIG1hcCcsXG4gIHNob3dPbk1hcERhdGE6ICdTaG93IG9uIG1hcCBkYXRhJyxcbiAgYWRkZWREYXRhOiAnYWRkZWQgZGF0YScsXG4gIGZhaWxUb0FkZFRoZURhdGFPbk1hcDogJ0ZhaWwgdG8gYWRkIHRoZSBkYXRhLicsXG4gIGFkZFRvTWFwRGF0YTogJ0FkZCB0byBtYXAgZGF0YScsXG4gIG1hcEN1cnJlbnRSZWNvcmQ6ICd7bGF5ZXJOYW1lfSBtYXAgY3VycmVudCByZWNvcmQnLFxuICBfdXJsX3BhcmFtc19tYXBfc3RhdGVfbGFiZWw6ICdWaWV3cG9pbnQnLFxuICBfdXJsX3BhcmFtc19sYXllcl9jZW50ZXJfbGFiZWw6ICdDZW50ZXInLFxuICBfdXJsX3BhcmFtc19sYXllcl9zY2FsZV9sYWJlbDogJ1NjYWxlJyxcbiAgX3VybF9wYXJhbXNfbGF5ZXJfcm90YXRpb25fbGFiZWw6ICdSb3RhdGlvbicsXG4gIF91cmxfcGFyYW1zX2xheWVyX3Zpc2liaWxpdHlfbGFiZWw6ICdMYXllciB2aXNpYmlsaXR5J1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgdHlwZSBEYXRhUmVjb3JkU2V0LFxuICB0eXBlIEltbXV0YWJsZU9iamVjdCxcbiAgdHlwZSBKaW11TWFwVmlld0luZm8sXG4gIEFic3RyYWN0RGF0YUFjdGlvbixcbiAgZ2V0QXBwU3RvcmUsXG4gIERhdGFTb3VyY2VTdGF0dXMsXG4gIE11dGFibGVTdG9yZU1hbmFnZXIsXG4gIHV0aWxzLFxuICBpMThuLFxuICBEYXRhTGV2ZWxcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgTWFwVmlld01hbmFnZXIsIFNIT1dfT05fTUFQX0RBVEFfSURfUFJFRklYLCBBY3Rpb25UeXBlLCB0eXBlIFNob3dPbk1hcERhdGFzLCB0eXBlIFNob3dPbk1hcERhdGEgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuaW50ZXJmYWNlIFRpdGxlQ291bnRJbmZvIHtcbiAgY291bnQ6IG51bWJlciAvLyAxIGJhc2VkXG4gIHJhd1RpdGxlOiBzdHJpbmdcbiAgZmluYWxUaXRsZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBTaG93T25NYXBEYXRhV2l0aFRpdGxlQ291bnRJbmZvIGV4dGVuZHMgU2hvd09uTWFwRGF0YSB7XG4gIHRpdGxlQ291bnRJbmZvPzogVGl0bGVDb3VudEluZm9cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd09uTWFwIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfdmlld01hbmFnZXIgPSBNYXBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSgpXG5cbiAgLyoqXG4gICAqIFNob3dPbk1hcCBkYXRhIGFjdGlvbiBvbmx5IHN1cHBvcnRzIERhdGFMZXZlbC5SRUNPUkRTIGRhdGEsIGRvZXNuJ3Qgc3VwcG9ydCBEYXRhTGV2ZWwuREFUQV9TT1VSQ0UgZGF0YS5cbiAgICovXG4gIGFzeW5jIGlzU3VwcG9ydGVkIChkYXRhU2V0czogRGF0YVJlY29yZFNldFtdLCBkYXRhTGV2ZWw6IERhdGFMZXZlbCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChkYXRhU2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3QgZGF0YVNldCA9IGRhdGFTZXRzWzBdXG4gICAgY29uc3QgeyByZWNvcmRzLCBkYXRhU291cmNlIH0gPSBkYXRhU2V0XG4gICAgaWYgKCFkYXRhU291cmNlIHx8IGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmV0dXJuIGRhdGFMZXZlbCA9PT0gRGF0YUxldmVsLlJlY29yZHMgJiYgcmVjb3Jkcz8ubGVuZ3RoID4gMCAmJiByZWNvcmRzLnNvbWUocmVjb3JkID0+IHJlY29yZC5mZWF0dXJlPy5nZW9tZXRyeSlcbiAgfVxuXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwsIHdpZGdldElkOiBzdHJpbmcsIGFjdGlvbkNvbmZpZz86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcbiAgICBjb25zdCBzaG93T25NYXBEYXRhczogU2hvd09uTWFwRGF0YXMgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy53aWRnZXRJZF0pPy5zaG93T25NYXBEYXRhcyB8fCB7fVxuXG4gICAgY29uc3QgZGF0YVNldCA9IGRhdGFTZXRzWzBdXG4gICAgY29uc3QgdGl0bGVDb3VudEluZm8gPSB0aGlzLmdldFVuaXF1ZVRpdGxlQ291bnRJbmZvKGRhdGFTZXQsIGFjdGl2ZVZpZXdJZCwgc2hvd09uTWFwRGF0YXMpXG5cbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgY29uc3QgaWQgPSBgJHtTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWH1kYXRhQWN0aW9uXyR7dXRpbHMuZ2V0VVVJRCgpfWBcblxuICAgIC8vIHVzZSBjb2RlIHRvIG1haW50YWluICdzeW1ib2xPcHRpb24nIGNvbXBhdGliaWxpdHkgaGVyZVxuICAgIC8vIEZvciBhcHAgd2FzIGNyZWF0ZWQgYmVmb3JlIG9ubGluZTEwLjEgKGlubGN1ZGUgMTAuMSksIGFjdGlvbkNvbmZpZyBpcyB1bmRlZmluZWQsIHRoZSBmaW5hbCAnc3ltYm9sT3B0aW9uJyBpcyB1bmRlZmluZWQuXG4gICAgLy8gRm9yIGFwcCB3YXMgY3JlYXRlZCBvciBzYXZlZCBhZnRlciBvbmxpbmUxMC4xLCBhY3Rpb25Db25maWcgaXMgYSBvYmplY3QsXG4gICAgLy8gIGlmIGFjdGlvbkNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbCBpcyB0cnVlLCBtZWFucyBjaGVjayAnVXNlIGN1c3RvbSBzeW1ib2xzJyBvcHRpb24sIHRoZSBmaW5hbCAnc3ltYm9sT3B0aW9uJyBpcyBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uXG4gICAgLy8gIGlmIGFjdGlvbkNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbCBpcyBmYWxzZSwgbWVhbnMgdW5jaGVjayAnVXNlIGxheWVyLWRlZmluZWQgc3ltYm9scycgb3B0aW9uLCB0aGUgZmluYWwgJ3N5bWJvbE9wdGlvbicgaXMgbnVsbFxuXG4gICAgLy8gU3VtbWFyeTpcbiAgICAvLyBmb3IgJ3N5bWJvbE9wdGlvbicsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHZhbHVlcyAndW5kZWZpbmVkJyBhbmQgJ251bGwnOlxuICAgIC8vICAgdW5kZWZpbmVkOiBhcHAgd2FzIGNyZWF0ZWQgYmVmb3JlIG9ubGluZTEwLjEgKGlubGN1ZGUgMTAuMSksIHVzZSBkZWZhdWx0IHN5bWJvbDtcbiAgICAvLyAgIG51bGw6IGFwcCB3YXMgY3JlYXRlZCBvciBzYXZlZCBhZnRlciBvbmxpbmUxMC4xLCB1c2UgZGVmYXVsdCByZW5kZXJlciBvZiBsYXllci5cbiAgICAvLyBzeW1ib2xPcHRpb246IGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPyBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uIDogKGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPT09IGZhbHNlID8gbnVsbCA6IHVuZGVmaW5lZCksXG4gICAgbGV0IHN5bWJvbE9wdGlvblxuXG4gICAgaWYgKGFjdGlvbkNvbmZpZykge1xuICAgICAgLy8gPiBvbmxpbmUgMTAuMVxuICAgICAgaWYgKGFjdGlvbkNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbCkge1xuICAgICAgICAvLyAnVXNlIGN1c3RvbSBzeW1ib2xzJyBvcHRpb25cbiAgICAgICAgc3ltYm9sT3B0aW9uID0gYWN0aW9uQ29uZmlnLnN5bWJvbE9wdGlvblxuICAgICAgfSBlbHNlIGlmIChhY3Rpb25Db25maWcuaXNVc2VDdXN0b21TeW1ib2wgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyBvcHRpb25cbiAgICAgICAgc3ltYm9sT3B0aW9uID0gbnVsbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2hvdWxkIG5vdCBnb2VzIGhlcmVcbiAgICAgICAgc3ltYm9sT3B0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIDw9IG9ubGluZSAxMC4xXG4gICAgICAvLyB1c2UgZmVhdHVyZVV0aWxzLmdldERlZmF1bHRTeW1ib2woKSB0byBjcmVhdGUgZGVmYXVsdCAyRCBzeW1ib2xcbiAgICAgIHN5bWJvbE9wdGlvbiA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIGNvbnN0IG5ld1Nob3dPbk1hcERhdGE6IFNob3dPbk1hcERhdGFXaXRoVGl0bGVDb3VudEluZm8gPSB7XG4gICAgICBtYXBXaWRnZXRJZDogdGhpcy53aWRnZXRJZCxcbiAgICAgIC8vIG1lc3NhZ2VXaWRnZXRJZCBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgbWVzc2FnZSBhY3Rpb24sIHNvIGtlZXAgaXQgZW1wdHkgZm9yIGRhdGEgYWN0aW9uXG4gICAgICBtZXNzYWdlV2lkZ2V0SWQ6IHVuZGVmaW5lZCxcbiAgICAgIGppbXVNYXBWaWV3SWQ6IGFjdGl2ZVZpZXdJZCxcbiAgICAgIGRhdGFTZXQsXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLkRhdGFBY3Rpb24sXG4gICAgICBzeW1ib2xPcHRpb24sXG4gICAgICB0aXRsZTogdGl0bGVDb3VudEluZm8uZmluYWxUaXRsZSxcbiAgICAgIHRpdGxlQ291bnRJbmZvXG4gICAgfVxuXG4gICAgc2hvd09uTWFwRGF0YXNbaWRdID0gbmV3U2hvd09uTWFwRGF0YVxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdzaG93T25NYXBEYXRhcycsIHNob3dPbk1hcERhdGFzKVxuXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbmlxdWVUaXRsZUNvdW50SW5mbyAoZGF0YVNldDogRGF0YVJlY29yZFNldCwgYWN0aXZlVmlld0lkOiBzdHJpbmcsIHNob3dPbk1hcERhdGFzOiBTaG93T25NYXBEYXRhcyk6IFRpdGxlQ291bnRJbmZvIHtcbiAgICBjb25zdCBpbnRsID0gaTE4bi5nZXRJbnRsKClcbiAgICBjb25zdCByYXdUaXRsZSA9IGRhdGFTZXQubmFtZSB8fCBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Nob3dPbk1hcERhdGEnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNob3dPbk1hcERhdGEgfSlcblxuICAgIC8vICMxNjc5OCwgSWYgUXVlcnkgd2lkZ2V0IHNlbmRzIGRhdGEgYWN0aW9uIHdpdGggc2FtZSBkYXRhIHNvdXJjZSBhbmQgZGF0YSByZWNvcmRzIG11bHRpcGxlIHRpbWVzLCB3ZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBsYXllcnMgd2l0aCBzYW1lIHRpdGxlLlxuICAgIC8vIFRvIGF2b2lkIHRoaXMgY2FzZSwgd2UgbmVlZCB0byBtYWtlIG5hbWUgdW5pcXVlLlxuICAgIGNvbnN0IGV4aXN0aW5nVGl0bGVDb3VudHM6IG51bWJlcltdID0gW11cbiAgICBPYmplY3QudmFsdWVzKHNob3dPbk1hcERhdGFzKS5mb3JFYWNoKChzaG93T25NYXA6IFNob3dPbk1hcERhdGFXaXRoVGl0bGVDb3VudEluZm8pID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlQ291bnRJbmZvID0gc2hvd09uTWFwLnRpdGxlQ291bnRJbmZvXG5cbiAgICAgIGlmIChzaG93T25NYXAuamltdU1hcFZpZXdJZCA9PT0gYWN0aXZlVmlld0lkICYmIHNob3dPbk1hcC50eXBlID09PSBBY3Rpb25UeXBlLkRhdGFBY3Rpb24gJiYgdGl0bGVDb3VudEluZm8gJiYgdGl0bGVDb3VudEluZm8ucmF3VGl0bGUgPT09IHJhd1RpdGxlICYmIHRpdGxlQ291bnRJbmZvLmNvdW50ID49IDApIHtcbiAgICAgICAgZXhpc3RpbmdUaXRsZUNvdW50cy5wdXNoKHRpdGxlQ291bnRJbmZvLmNvdW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgdGl0bGVDb3VudEluZm86IFRpdGxlQ291bnRJbmZvID0gbnVsbFxuXG4gICAgaWYgKGV4aXN0aW5nVGl0bGVDb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbWF4Q291bnQgPSBNYXRoLm1heCguLi5leGlzdGluZ1RpdGxlQ291bnRzKVxuICAgICAgY29uc3QgY291bnQgPSBtYXhDb3VudCArIDFcbiAgICAgIGNvbnN0IGZpbmFsVGl0bGUgPSBgJHtyYXdUaXRsZX0gJHttYXhDb3VudCArIDF9YFxuXG4gICAgICB0aXRsZUNvdW50SW5mbyA9IHtcbiAgICAgICAgcmF3VGl0bGUsXG4gICAgICAgIGZpbmFsVGl0bGUsXG4gICAgICAgIGNvdW50XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gMVxuICAgICAgY29uc3QgZmluYWxUaXRsZSA9IHJhd1RpdGxlXG5cbiAgICAgIHRpdGxlQ291bnRJbmZvID0ge1xuICAgICAgICByYXdUaXRsZSxcbiAgICAgICAgZmluYWxUaXRsZSxcbiAgICAgICAgY291bnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVDb3VudEluZm9cbiAgfVxuXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xuICAgIGxldCBhY3RpdmVWaWV3SWQgPSBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSlcbiAgICAvLyB1c2luZyBhIGRlZmF1bHQgbWFwIHZpZXcgYXMgYWN0aXZlIG1hcCB2aWV3IGlmIHRoZSB3aWRnZXQgaGFzbid0IGJlZW4gbG9hZGVkLlxuICAgIGlmICghYWN0aXZlVmlld0lkKSB7XG4gICAgICBhY3RpdmVWaWV3SWQgPSBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQpXG4gICAgfVxuICAgIHJldHVybiBhY3RpdmVWaWV3SWRcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9