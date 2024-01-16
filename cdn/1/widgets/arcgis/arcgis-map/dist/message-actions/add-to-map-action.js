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
/*!***************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/add-to-map-action.ts ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToMapAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


class AddToMapAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange) {
            return true;
        }
        else {
            return false;
        }
    }
    filterMessage(message) {
        return true;
    }
    onRemoveListen(messageType, messageWidgetId) {
        var _a;
        const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
        const newAddToMapDatas = {};
        Object.entries(addToMapDatas).forEach(entry => {
            var _a;
            if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) !== messageWidgetId) {
                newAddToMapDatas[entry[0]] = entry[1]; //*********
            }
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', newAddToMapDatas);
    }
    //getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    //  return 'message-actions/show-on-map-action-setting'
    //}
    onExecute(message, actionConfig) {
        var _a;
        const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const defaultViewId = this._getDefaultViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const jimuMapViewId = activeViewId || defaultViewId;
        const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
        message.dataSources.forEach(dataSourceParam => {
            var _a;
            const dataSource = dataSourceParam;
            if (!dataSource.supportSpatialInfo || !dataSource.supportSpatialInfo()) {
                return;
            }
            const jimuMapView = activeViewId && jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance().getJimuMapViewById(activeViewId);
            if ((dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService) && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d') {
                // add a scene layer to a 2d map
                return;
            }
            const idBase = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${dataSource.id}_`;
            const idTemporary = `${idBase}???`;
            const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary;
            if (defaultViewId && defaultViewId === activeViewId) {
                // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId
                if (addToMapDatas[idTemporary]) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, `addToMapDatas.${idTemporary}.dataChangeType`, jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Remove);
                }
            }
            addToMapDatas[id] = {
                mapWidgetId: this.widgetId,
                messageWidgetId: message.widgetId,
                // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget
                jimuMapViewId: jimuMapViewId, // activeViewId,
                dataSourceId: dataSource.id,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.MessageAction,
                dataChangeType: message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Remove ? jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Remove : jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Create,
                dataChangeStatus: message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Remove ? jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Fulfilled : jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Pending,
                title: id // 'add to map message ...'
            };
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', addToMapDatas);
        return Promise.resolve(true);
    }
    _getActiveViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
    }
    _getDefaultViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9hZGQtdG8tbWFwLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUN1SDtBQUUxSCxNQUFNLGNBQWUsU0FBUSw0REFBcUI7SUFDL0Qsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELElBQUksa0JBQWtCLENBQUMsV0FBVyxLQUFLLGtEQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyRSxPQUFPLElBQUk7UUFDYixDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sS0FBSztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxjQUFjLENBQUUsV0FBd0IsRUFBRSxlQUF3Qjs7UUFDaEUsTUFBTSxhQUFhLEdBQWtCLGlFQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQywwQ0FBRSxhQUFhLEtBQUksRUFBRTtRQUMxSCxNQUFNLGdCQUFnQixHQUFHLEVBQUU7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQzVDLElB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ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2FkZC10by1tYXAtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbiwgTWVzc2FnZVR5cGUsIHR5cGUgTWVzc2FnZSwgdHlwZSBEYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UsIERhdGFTb3VyY2VzQ2hhbmdlVHlwZSwgTXV0YWJsZVN0b3JlTWFuYWdlcixcbiAgZ2V0QXBwU3RvcmUsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIEppbXVNYXBWaWV3SW5mbywgdHlwZSBNZXNzYWdlRGVzY3JpcHRpb24sIHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZVR5cGVzLCB0eXBlIEpTQVBJTGF5ZXJNaXhpblxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYLCBBY3Rpb25UeXBlLCB0eXBlIEFkZFRvTWFwRGF0YXMsIERhdGFDaGFuZ2VUeXBlLCBEYXRhQ2hhbmdlU3RhdHVzLCBNYXBWaWV3TWFuYWdlciB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUb01hcEFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcbiAgICBpZiAobWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlc0NoYW5nZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBvblJlbW92ZUxpc3RlbiAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBhZGRUb01hcERhdGFzOiBBZGRUb01hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uYWRkVG9NYXBEYXRhcyB8fCB7fVxuICAgIGNvbnN0IG5ld0FkZFRvTWFwRGF0YXMgPSB7fVxuICAgIE9iamVjdC5lbnRyaWVzKGFkZFRvTWFwRGF0YXMpLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgaWYgKGVudHJ5WzFdPy5tZXNzYWdlV2lkZ2V0SWQgIT09IG1lc3NhZ2VXaWRnZXRJZCkge1xuICAgICAgICBuZXdBZGRUb01hcERhdGFzW2VudHJ5WzBdXSA9IGVudHJ5WzFdIC8vKioqKioqKioqXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ2FkZFRvTWFwRGF0YXMnLCBuZXdBZGRUb01hcERhdGFzKVxuICB9XG5cbiAgLy9nZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vICByZXR1cm4gJ21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZydcbiAgLy99XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBEYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXG4gICAgY29uc3QgZGVmYXVsdFZpZXdJZCA9IHRoaXMuX2dldERlZmF1bHRWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXG4gICAgY29uc3QgamltdU1hcFZpZXdJZCA9IGFjdGl2ZVZpZXdJZCB8fCBkZWZhdWx0Vmlld0lkXG4gICAgY29uc3QgYWRkVG9NYXBEYXRhcyA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LmFkZFRvTWFwRGF0YXMgfHwge31cblxuICAgIG1lc3NhZ2UuZGF0YVNvdXJjZXMuZm9yRWFjaChkYXRhU291cmNlUGFyYW0gPT4ge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2VQYXJhbSBhcyBEYXRhU291cmNlICYgSlNBUElMYXllck1peGluXG4gICAgICBpZiAoIWRhdGFTb3VyY2Uuc3VwcG9ydFNwYXRpYWxJbmZvIHx8ICFkYXRhU291cmNlLnN1cHBvcnRTcGF0aWFsSW5mbygpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgamltdU1hcFZpZXcgPSBhY3RpdmVWaWV3SWQgJiYgTWFwVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRKaW11TWFwVmlld0J5SWQoYWN0aXZlVmlld0lkKVxuICAgICAgaWYgKChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyIHx8IGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLlNjZW5lU2VydmljZSkgJiYgamltdU1hcFZpZXc/LnZpZXc/LnR5cGUgPT09ICcyZCcpIHtcbiAgICAgICAgLy8gYWRkIGEgc2NlbmUgbGF5ZXIgdG8gYSAyZCBtYXBcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBpZEJhc2UgPSBgJHtBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYfW1lc3NhZ2VBY3Rpb25fJHt0aGlzLndpZGdldElkfV8ke2RhdGFTb3VyY2UuaWR9X2BcbiAgICAgIGNvbnN0IGlkVGVtcG9yYXJ5ID0gYCR7aWRCYXNlfT8/P2BcbiAgICAgIGNvbnN0IGlkID0gYWN0aXZlVmlld0lkID8gYCR7aWRCYXNlfSR7YWN0aXZlVmlld0lkfWAgOiBpZFRlbXBvcmFyeVxuXG4gICAgICBpZiAoZGVmYXVsdFZpZXdJZCAmJiBkZWZhdWx0Vmlld0lkID09PSBhY3RpdmVWaWV3SWQpIHtcbiAgICAgICAgLy8gYWxsb3cgdG8gYWRkIGRhdGEgdXNpbmcgYSB0ZW1wb3JhcnkgaWQsIHRlbXBvcmFyeSBpZCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBpZiBjYW4gZ2V0IGFjdGl2ZVZpZXdJZFxuICAgICAgICBpZiAoYWRkVG9NYXBEYXRhc1tpZFRlbXBvcmFyeV0pIHtcbiAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCBgYWRkVG9NYXBEYXRhcy4ke2lkVGVtcG9yYXJ5fS5kYXRhQ2hhbmdlVHlwZWAsIERhdGFDaGFuZ2VUeXBlLlJlbW92ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZGRUb01hcERhdGFzW2lkXSA9IHtcbiAgICAgICAgbWFwV2lkZ2V0SWQ6IHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIG1lc3NhZ2VXaWRnZXRJZDogbWVzc2FnZS53aWRnZXRJZCxcbiAgICAgICAgLy8gU2V0IGppbXVNYXBWaWV3SWQgdG8gbnVsbCBtZWFucyB0aGUgZGF0YSB3aWxsIGJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBqaW11TWFwVmlld3Mgb2Ygb25lIG1hcFdpZGdldFxuICAgICAgICBqaW11TWFwVmlld0lkOiBqaW11TWFwVmlld0lkLCAvLyBhY3RpdmVWaWV3SWQsXG4gICAgICAgIGRhdGFTb3VyY2VJZDogZGF0YVNvdXJjZS5pZCxcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5NZXNzYWdlQWN0aW9uLFxuICAgICAgICBkYXRhQ2hhbmdlVHlwZTogbWVzc2FnZS5jaGFuZ2VUeXBlID09PSBEYXRhU291cmNlc0NoYW5nZVR5cGUuUmVtb3ZlID8gRGF0YUNoYW5nZVR5cGUuUmVtb3ZlIDogRGF0YUNoYW5nZVR5cGUuQ3JlYXRlLFxuICAgICAgICBkYXRhQ2hhbmdlU3RhdHVzOiBtZXNzYWdlLmNoYW5nZVR5cGUgPT09IERhdGFTb3VyY2VzQ2hhbmdlVHlwZS5SZW1vdmUgPyBEYXRhQ2hhbmdlU3RhdHVzLkZ1bGZpbGxlZCA6IERhdGFDaGFuZ2VTdGF0dXMuUGVuZGluZyxcbiAgICAgICAgdGl0bGU6IGlkIC8vICdhZGQgdG8gbWFwIG1lc3NhZ2UgLi4uJ1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ2FkZFRvTWFwRGF0YXMnLCBhZGRUb01hcERhdGFzKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQgJiYgaW5mb3Nbdmlld0lkXS5pc0FjdGl2ZSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlZmF1bHRWaWV3SWQgKG1hcFdpZGdldElkOiBzdHJpbmcsIGluZm9zOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvIH0+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=