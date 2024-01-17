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
/*!*****************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/add-to-map.ts ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToMap)
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


class AddToMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
    }
    /**
     * AddToMap data action only supports DataLevel.DATA_SOURCE data, doesn't support DataLevel.RECORDS data.
     */
    isSupported(dataSets, dataLevel) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (dataSets.length > 1) {
                return false;
            }
            const dataSet = dataSets[0];
            const dataSource = dataSet === null || dataSet === void 0 ? void 0 : dataSet.dataSource;
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            if (dataLevel !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataLevel.DataSource) {
                return false;
            }
            if ((dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService) && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d') {
                // add a scene layer to a 2d map
                return false;
            }
            // #16797, avoid add multiple layers for the same dataSource
            if (jimuMapView && jimuMapView.view) {
                const addToMapLayers = jimuMapView.view.map.layers.toArray().filter(layer => layer.id && layer.id.includes(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX));
                if (addToMapLayers.length > 0) {
                    const isDsAlreadAddLayer = addToMapLayers.some((layer) => {
                        const jimuLayerView = jimuMapView.getJimuLayerViewByAPILayer(layer);
                        if (jimuLayerView && jimuLayerView.getLayerDataSource() === dataSource) {
                            return true;
                        }
                        return false;
                    });
                    if (isDsAlreadAddLayer) {
                        return false;
                    }
                }
            }
            const canDsCreateLayer = dataSource.supportSpatialInfo &&
                dataSource.supportSpatialInfo() &&
                !!dataSource.createJSAPILayerByDataSource &&
                !dataSource.isInAppConfig() &&
                ((_b = dataSet.records) === null || _b === void 0 ? void 0 : _b.length) === 0;
            return canDsCreateLayer;
        });
    }
    onExecute(dataSets, dataLevel) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
            const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
            const dataSet = dataSets[0];
            const dataSetName = dataSet.name || '';
            const name = intl.formatMessage({ id: 'action_addedData', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.action_addedData }, { label: dataSetName });
            // save action data
            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            addToMapDatas[id] = {
                mapWidgetId: this.widgetId,
                jimuMapViewId: activeViewId,
                dataSourceId: dataSet.dataSource.id,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction,
                dataChangeType: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Create,
                dataChangeStatus: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Pending,
                title: name
            };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', addToMapDatas);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            if (jimuMapView) {
                (_b = dataSet.dataSource) === null || _b === void 0 ? void 0 : _b.createJSAPILayerByDataSource().then(layer => {
                    jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.zoomToUtils.zoomTo(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, layer, {
                        padding: {
                            left: 50,
                            right: 50,
                            top: 50,
                            bottom: 50
                        }
                    });
                });
            }
            return yield Promise.resolve(true);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9hZGQtdG8tbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDU2tCO0FBQ2dIO0FBRW5ILE1BQU0sUUFBUyxTQUFRLHlEQUFrQjtJQUF4RDs7UUFDbUIsaUJBQVksR0FBRyx1REFBYyxDQUFDLFdBQVcsRUFBRTtJQW9HOUQsQ0FBQztJQWxHQzs7T0FFRztJQUNHLFdBQVcsQ0FBRSxRQUF5QixFQUFFLFNBQW9COzs7WUFDaEUsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4QixPQUFPLEtBQUs7WUFDZCxDQUFDO1lBQ0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLFVBQVUsR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsVUFBMEM7WUFDdEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ3BHLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1lBQ3RFLElB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QyxXQUFXLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDL0gsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7UUFDbkcsQ0FBQztRQUNELE9BQU8sWUFBWTtJQUNyQixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvZGF0YS1hY3Rpb25zL2FkZC10by1tYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgdHlwZSBEYXRhUmVjb3JkU2V0LFxuICB0eXBlIEltbXV0YWJsZU9iamVjdCxcbiAgdHlwZSBKaW11TWFwVmlld0luZm8sXG4gIHR5cGUgSlNBUElMYXllck1peGluLFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIEFic3RyYWN0RGF0YUFjdGlvbixcbiAgZ2V0QXBwU3RvcmUsXG4gIGRlZmF1bHRNZXNzYWdlcyxcbiAgTXV0YWJsZVN0b3JlTWFuYWdlcixcbiAgdXRpbHMsXG4gIGkxOG4sXG4gIERhdGFTb3VyY2VUeXBlcyxcbiAgRGF0YVNvdXJjZVN0YXR1cyxcbiAgRGF0YUxldmVsXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IE1hcFZpZXdNYW5hZ2VyLCBBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYLCBBY3Rpb25UeXBlLCBEYXRhQ2hhbmdlVHlwZSwgRGF0YUNoYW5nZVN0YXR1cywgem9vbVRvVXRpbHMgfSBmcm9tICdqaW11LWFyY2dpcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9NYXAgZXh0ZW5kcyBBYnN0cmFjdERhdGFBY3Rpb24ge1xuICBwcml2YXRlIHJlYWRvbmx5IF92aWV3TWFuYWdlciA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKClcblxuICAvKipcbiAgICogQWRkVG9NYXAgZGF0YSBhY3Rpb24gb25seSBzdXBwb3J0cyBEYXRhTGV2ZWwuREFUQV9TT1VSQ0UgZGF0YSwgZG9lc24ndCBzdXBwb3J0IERhdGFMZXZlbC5SRUNPUkRTIGRhdGEuXG4gICAqL1xuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoZGF0YVNldHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IGRhdGFTZXQgPSBkYXRhU2V0c1swXVxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhU2V0Py5kYXRhU291cmNlIGFzIERhdGFTb3VyY2UgJiBKU0FQSUxheWVyTWl4aW5cbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLl92aWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQoYWN0aXZlVmlld0lkKVxuICAgIGlmICghZGF0YVNvdXJjZSB8fCBkYXRhU291cmNlLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoZGF0YUxldmVsICE9PSBEYXRhTGV2ZWwuRGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyIHx8IGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLlNjZW5lU2VydmljZSkgJiYgamltdU1hcFZpZXc/LnZpZXc/LnR5cGUgPT09ICcyZCcpIHtcbiAgICAgIC8vIGFkZCBhIHNjZW5lIGxheWVyIHRvIGEgMmQgbWFwXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyAjMTY3OTcsIGF2b2lkIGFkZCBtdWx0aXBsZSBsYXllcnMgZm9yIHRoZSBzYW1lIGRhdGFTb3VyY2VcbiAgICBpZiAoamltdU1hcFZpZXcgJiYgamltdU1hcFZpZXcudmlldykge1xuICAgICAgY29uc3QgYWRkVG9NYXBMYXllcnMgPSBqaW11TWFwVmlldy52aWV3Lm1hcC5sYXllcnMudG9BcnJheSgpLmZpbHRlcihsYXllciA9PiBsYXllci5pZCAmJiBsYXllci5pZC5pbmNsdWRlcyhBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYKSlcblxuICAgICAgaWYgKGFkZFRvTWFwTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaXNEc0FscmVhZEFkZExheWVyID0gYWRkVG9NYXBMYXllcnMuc29tZSgobGF5ZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBqaW11TGF5ZXJWaWV3ID0gamltdU1hcFZpZXcuZ2V0SmltdUxheWVyVmlld0J5QVBJTGF5ZXIobGF5ZXIpXG5cbiAgICAgICAgICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmdldExheWVyRGF0YVNvdXJjZSgpID09PSBkYXRhU291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChpc0RzQWxyZWFkQWRkTGF5ZXIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbkRzQ3JlYXRlTGF5ZXIgPSBkYXRhU291cmNlLnN1cHBvcnRTcGF0aWFsSW5mbyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlLnN1cHBvcnRTcGF0aWFsSW5mbygpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZGF0YVNvdXJjZS5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkYXRhU291cmNlLmlzSW5BcHBDb25maWcoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2V0LnJlY29yZHM/Lmxlbmd0aCA9PT0gMFxuXG4gICAgcmV0dXJuIGNhbkRzQ3JlYXRlTGF5ZXJcbiAgfVxuXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldHM6IERhdGFSZWNvcmRTZXRbXSwgZGF0YUxldmVsOiBEYXRhTGV2ZWwpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXG4gICAgY29uc3QgYWRkVG9NYXBEYXRhcyA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LmFkZFRvTWFwRGF0YXMgfHwge31cbiAgICBjb25zdCBpbnRsID0gaTE4bi5nZXRJbnRsKClcbiAgICBjb25zdCBkYXRhU2V0ID0gZGF0YVNldHNbMF1cbiAgICBjb25zdCBkYXRhU2V0TmFtZSA9IGRhdGFTZXQubmFtZSB8fCAnJ1xuICAgIGNvbnN0IG5hbWUgPSBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2FjdGlvbl9hZGRlZERhdGEnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmFjdGlvbl9hZGRlZERhdGEgfSwgeyBsYWJlbDogZGF0YVNldE5hbWUgfSlcbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgY29uc3QgaWQgPSBgJHtBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYfWRhdGFBY3Rpb25fJHt1dGlscy5nZXRVVUlEKCl9YFxuICAgIGFkZFRvTWFwRGF0YXNbaWRdID0ge1xuICAgICAgbWFwV2lkZ2V0SWQ6IHRoaXMud2lkZ2V0SWQsXG4gICAgICBqaW11TWFwVmlld0lkOiBhY3RpdmVWaWV3SWQsXG4gICAgICBkYXRhU291cmNlSWQ6IGRhdGFTZXQuZGF0YVNvdXJjZS5pZCxcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuRGF0YUFjdGlvbixcbiAgICAgIGRhdGFDaGFuZ2VUeXBlOiBEYXRhQ2hhbmdlVHlwZS5DcmVhdGUsXG4gICAgICBkYXRhQ2hhbmdlU3RhdHVzOiBEYXRhQ2hhbmdlU3RhdHVzLlBlbmRpbmcsXG4gICAgICB0aXRsZTogbmFtZVxuICAgIH1cbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnYWRkVG9NYXBEYXRhcycsIGFkZFRvTWFwRGF0YXMpXG5cbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuX3ZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZChhY3RpdmVWaWV3SWQpXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XG4gICAgICAoZGF0YVNldC5kYXRhU291cmNlIGFzIHVua25vd24gYXMgSlNBUElMYXllck1peGluKT8uY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSgpLnRoZW4obGF5ZXIgPT4ge1xuICAgICAgICB6b29tVG9VdGlscy56b29tVG8oamltdU1hcFZpZXc/LnZpZXcsIGxheWVyLCB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgbGVmdDogNTAsXG4gICAgICAgICAgICByaWdodDogNTAsXG4gICAgICAgICAgICB0b3A6IDUwLFxuICAgICAgICAgICAgYm90dG9tOiA1MFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xuICAgIGxldCBhY3RpdmVWaWV3SWQgPSBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSlcbiAgICAvLyB1c2luZyBhIGRlZmF1bHQgbWFwIHZpZXcgYXMgYWN0aXZlIG1hcCB2aWV3IGlmIHRoZSB3aWRnZXQgaGFzbid0IGJlZW4gbG9hZGVkLlxuICAgIGlmICghYWN0aXZlVmlld0lkKSB7XG4gICAgICBhY3RpdmVWaWV3SWQgPSBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQpXG4gICAgfVxuICAgIHJldHVybiBhY3RpdmVWaWV3SWRcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9