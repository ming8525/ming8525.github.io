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
/*!***********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/filter-action.ts ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const FILTER_ACTION_KEY_PREFIX = 'filterActionValue-';
const FILTER_MESSAGE_KEY_PREFIX = 'filterMessageValue-';
class FilterAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    constructor() {
        super(...arguments);
        this.filterActions = {};
    }
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
    }
    filterMessage(message) {
        return true;
    }
    onRemoveListen(messageType, messageWidgetId) {
        Object.keys(this.filterActions || {}).forEach(actionKey => {
            Object.entries(this.filterActions[actionKey] || {}).forEach(entry => {
                var _a;
                const messageKey = entry[0];
                if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) === messageWidgetId) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.setValue(this.filterActions, `${actionKey}.${messageKey}.querySQL`, '');
                }
            });
            const filterActionValue = {
                layerDataSourceId: actionKey.slice(FILTER_ACTION_KEY_PREFIX.length),
                querySQL: this.getUnionAllFilterQuerySQL(actionKey)
            };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, filterActionValue);
        });
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                let filterActionValue = null;
                let messageDataSource, actionDataSource;
                if (actionConfig) {
                    if (actionConfig.messageUseDataSource && actionConfig.actionUseDataSource) {
                        if (message.records.length > 0 &&
                            message.records[0].dataSource.getMainDataSource().id !== actionConfig.messageUseDataSource.mainDataSourceId) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'filterActionValue', null);
                            break;
                        }
                        // Framework makes sure the following data sources are available before call onExecute() method.
                        messageDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.messageUseDataSource.mainDataSourceId);
                        actionDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.actionUseDataSource.mainDataSourceId);
                        if (messageDataSource && actionDataSource) {
                            if (message.records.length <= 0) {
                                // clear filter
                                filterActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: ''
                                };
                            }
                            else if (actionConfig.enabledDataRelationShip) {
                                // when ds instances exit
                                // use DataRelationShip
                                let messageField = null;
                                let actionField = null;
                                if (actionConfig.messageUseDataSource.mainDataSourceId === actionConfig.actionUseDataSource.mainDataSourceId &&
                                    actionConfig.messageUseDataSource.rootDataSourceId === actionConfig.actionUseDataSource.rootDataSourceId) {
                                    // if trigger ds is same to action ds
                                    const messageDsSchema = messageDataSource.getSchema();
                                    const objectIdJimuFieldName = messageDsSchema && messageDsSchema.fields &&
                                        Object.keys(messageDsSchema.fields).find(jimuFieldName => messageDsSchema.fields[jimuFieldName].esriType === 'esriFieldTypeOID');
                                    messageField = messageDsSchema && messageDsSchema.fields && messageDsSchema.fields[objectIdJimuFieldName];
                                    actionField = messageField;
                                }
                                else {
                                    // if trigger ds isn't same to action ds
                                    const messageJimuFieldName = actionConfig.messageUseDataSource.fields[0];
                                    const actionJimuFieldName = actionConfig.actionUseDataSource.fields[0];
                                    messageField = messageDataSource.getSchema().fields[messageJimuFieldName];
                                    actionField = actionDataSource.getSchema().fields[actionJimuFieldName];
                                }
                                let whereSql = '';
                                if (messageField && actionField) {
                                    const messageFieldName = messageField.name;
                                    const messageFieldType = messageField.type;
                                    const tempMessage = message;
                                    const messageFieldValues = [];
                                    for (let i = 0; i < tempMessage.records.length; i++) {
                                        const tempFieldValue = tempMessage.records[i].getData()[messageFieldName];
                                        if (messageFieldValues.includes(`${this.formatValue(tempFieldValue, messageFieldType)}`)) {
                                            continue;
                                        }
                                        else {
                                            messageFieldValues.push(`${this.formatValue(tempMessage.records[i].getData()[messageFieldName], messageFieldType)}`);
                                        }
                                    }
                                    whereSql = `${actionField.name} IN `;
                                    if (messageFieldValues.length > 0) {
                                        whereSql = whereSql + `(${messageFieldValues.join(', ')})`;
                                    }
                                    else {
                                        whereSql = '';
                                    }
                                }
                                if (message.records.length > 0) {
                                    const moreAditionSQL = actionConfig.sqlExprObj ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null;
                                    if (moreAditionSQL) {
                                        if (whereSql) {
                                            whereSql = whereSql + ' AND ' + moreAditionSQL;
                                        }
                                        else {
                                            whereSql = moreAditionSQL;
                                        }
                                    }
                                }
                                else {
                                    whereSql = '';
                                }
                                filterActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: whereSql
                                };
                            }
                            else {
                                // not use DataRelationShip
                                let whereSql = '';
                                if (message.records.length > 0) {
                                    const moreAditionSQL = actionConfig.sqlExprObj ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null;
                                    if (moreAditionSQL) {
                                        whereSql = moreAditionSQL;
                                    }
                                }
                                else {
                                    whereSql = '';
                                }
                                filterActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: whereSql
                                };
                            }
                        }
                        else {
                            // when ds instances don't exist
                            filterActionValue = null;
                        }
                    }
                    else {
                        filterActionValue = null;
                    }
                }
                const messageKey = this.getFilterMessageKey(message.widgetId, messageDataSource === null || messageDataSource === void 0 ? void 0 : messageDataSource.id);
                const actionKey = this.getFilterActionKey(filterActionValue === null || filterActionValue === void 0 ? void 0 : filterActionValue.layerDataSourceId);
                if (filterActionValue) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.setValue(this.filterActions, `${actionKey}.${messageKey}`, {
                        querySQL: filterActionValue === null || filterActionValue === void 0 ? void 0 : filterActionValue.querySQL,
                        messageWidgetId: message.widgetId
                    });
                    filterActionValue.querySQL = this.getUnionAllFilterQuerySQL(actionKey);
                }
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, filterActionValue);
                break;
        }
        return true;
    }
    getUnionAllFilterQuerySQL(actionKey) {
        let unionQuerySQL = '';
        Object.entries(this.filterActions[actionKey] || {}).forEach(entry => {
            var _a;
            //const filterMessageKey = entry[0]
            const querySQL = (_a = entry[1]) === null || _a === void 0 ? void 0 : _a.querySQL;
            if (unionQuerySQL && querySQL) {
                unionQuerySQL = ` ${unionQuerySQL} AND ${querySQL} `;
            }
            else {
                unionQuerySQL = querySQL || unionQuerySQL;
            }
        });
        return unionQuerySQL;
    }
    getFilterActionKey(actionLayerDataSourceId) {
        const actionKey = `${FILTER_ACTION_KEY_PREFIX}${actionLayerDataSourceId}`;
        return actionKey;
    }
    getFilterMessageKey(messageWidgetId, messageLayerDataSourceId) {
        const messageKey = `${FILTER_MESSAGE_KEY_PREFIX}${messageWidgetId}-${messageLayerDataSourceId}`;
        return messageKey;
    }
    getLayerIdFromLayerDs(ds) {
        if (ds.layerId) {
            return ds.layerId;
        }
        else if (ds.layer) {
            return ds.layer.id;
        }
        else {
            return null;
        }
    }
    formatValue(value, type) {
        if (type === 'STRING') {
            return `'${value}'`;
        }
        else if (type === 'NUMBER') {
            return `${value}`;
        }
        else if (type === 'DATE') {
            return `'${value}'`;
        }
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNIa0I7QUFJbEIsTUFBTSx3QkFBd0IsR0FBVyxvQkFBb0I7QUFDN0QsTUFBTSx5QkFBeUIsR0FBVyxxQkFBcUI7QUFFaEQsTUFBTSxZQUFhLFNBQVEsNERBQXFCO0lBQS9EOztRQUNtQixrQkFBYSxHQU8xQixFQUFFO0lBeU1SLENBQUM7SUF2TUMsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELE9BQU8sa0JBQWtCLENBQUMsV0FBVyxLQUFLLGtEQUFXLENBQUMsMEJBQTBCO0lBQ2xGLENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELGNBQWMsQ0FBRSxXQUF3QixFQUFFLGVBQXdCO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ2xFLE1BQU0sVUFBVSxHQUFHLEtBQUss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QUcsR0FBRyx3QkFBd0IsR0FBRyx1QkFBdUIsRUFBRTtRQUN6RSxPQUFPLFNBQVM7SUFDbEIsQ0FBQztJQUVELG1CQUFtQixDQUFFLGVBQWUsRUFBRSx3QkFBd0I7UUFDNUQsTUFBTSxVQUFVLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxlQUFlLElBQUksd0JBQXdCLEVBQUU7UUFDL0YsT0FBTyxVQUFVO0lBQ25CLENBQUM7SUFFRCxxQkFBcUIsQ0FBRSxFQUFtRDtRQUN4RSxJQUFLLEVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixPQUFRLEVBQTZCLENBQUMsT0FBTztRQUMvQyxDQUFDO2FBQU0sSUFBSyxFQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsT0FBUSxFQUE2QixDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hELENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUUsS0FBSyxFQUFFLElBQVk7UUFDOUIsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDdEIsT0FBTyxJQUFJLEtBQUssR0FBRztRQUNyQixDQUFDO2FBQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDN0IsT0FBTyxHQUFHLEtBQUssRUFBRTtRQUNuQixDQUFDO2FBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7WUFDM0IsT0FBTyxJQUFJLEtBQUssR0FBRztRQUNyQixDQUFDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZpbHRlci1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLCBNZXNzYWdlVHlwZSwgdHlwZSBNZXNzYWdlLCB0eXBlIEZpZWxkU2NoZW1hLCBsb2Rhc2gsXG4gIHR5cGUgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBGZWF0dXJlUXVlcnlEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgZGF0YVNvdXJjZVV0aWxzLCBNdXRhYmxlU3RvcmVNYW5hZ2VyLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvblxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvZmlsdGVyLWFjdGlvbi1zZXR0aW5nJ1xuXG5jb25zdCBGSUxURVJfQUNUSU9OX0tFWV9QUkVGSVg6IHN0cmluZyA9ICdmaWx0ZXJBY3Rpb25WYWx1ZS0nXG5jb25zdCBGSUxURVJfTUVTU0FHRV9LRVlfUFJFRklYOiBzdHJpbmcgPSAnZmlsdGVyTWVzc2FnZVZhbHVlLSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmaWx0ZXJBY3Rpb25zOiB7XG4gICAgW2ZpbHRlckFjdGlvbktleTogc3RyaW5nXToge1xuICAgICAgW2ZpbHRlck1lc3NhZ2VLZXk6IHN0cmluZ106IHtcbiAgICAgICAgcXVlcnlTUUw6IHN0cmluZ1xuICAgICAgICBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZ1xuICAgICAgfVxuICAgIH1cbiAgfSA9IHt9XG5cbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlXG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG9uUmVtb3ZlTGlzdGVuIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZykge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZmlsdGVyQWN0aW9ucyB8fCB7fSkuZm9yRWFjaChhY3Rpb25LZXkgPT4ge1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5maWx0ZXJBY3Rpb25zW2FjdGlvbktleV0gfHwge30pLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlS2V5ID0gZW50cnlbMF1cbiAgICAgICAgaWYgKGVudHJ5WzFdPy5tZXNzYWdlV2lkZ2V0SWQgPT09IG1lc3NhZ2VXaWRnZXRJZCkge1xuICAgICAgICAgIGxvZGFzaC5zZXRWYWx1ZSh0aGlzLmZpbHRlckFjdGlvbnMsIGAke2FjdGlvbktleX0uJHttZXNzYWdlS2V5fS5xdWVyeVNRTGAsICcnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc3QgZmlsdGVyQWN0aW9uVmFsdWUgPSB7XG4gICAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBhY3Rpb25LZXkuc2xpY2UoRklMVEVSX0FDVElPTl9LRVlfUFJFRklYLmxlbmd0aCksXG4gICAgICAgIHF1ZXJ5U1FMOiB0aGlzLmdldFVuaW9uQWxsRmlsdGVyUXVlcnlTUUwoYWN0aW9uS2V5KVxuICAgICAgfVxuICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgYWN0aW9uS2V5LCBmaWx0ZXJBY3Rpb25WYWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgb25FeGVjdXRlIChtZXNzYWdlOiBNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBJTUNvbmZpZyk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcbiAgICAgICAgbGV0IGZpbHRlckFjdGlvblZhbHVlOiB7IGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcgfSA9IG51bGxcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhU291cmNlLCBhY3Rpb25EYXRhU291cmNlXG4gICAgICAgIGlmIChhY3Rpb25Db25maWcpIHtcbiAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKSB7XG4gICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzWzBdLmRhdGFTb3VyY2UuZ2V0TWFpbkRhdGFTb3VyY2UoKS5pZCAhPT0gYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpIHtcbiAgICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ2ZpbHRlckFjdGlvblZhbHVlJywgbnVsbClcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRnJhbWV3b3JrIG1ha2VzIHN1cmUgdGhlIGZvbGxvd2luZyBkYXRhIHNvdXJjZXMgYXJlIGF2YWlsYWJsZSBiZWZvcmUgY2FsbCBvbkV4ZWN1dGUoKSBtZXRob2QuXG4gICAgICAgICAgICBtZXNzYWdlRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZClcbiAgICAgICAgICAgIGFjdGlvbkRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoYWN0aW9uQ29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZClcblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGZpbHRlclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvblZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgbGF5ZXJEYXRhU291cmNlSWQ6IGFjdGlvbkRhdGFTb3VyY2UgJiYgYWN0aW9uRGF0YVNvdXJjZS5pZCxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5U1FMOiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb25Db25maWcuZW5hYmxlZERhdGFSZWxhdGlvblNoaXApIHtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBleGl0XG4gICAgICAgICAgICAgICAgLy8gdXNlIERhdGFSZWxhdGlvblNoaXBcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUZpZWxkOiBJbW11dGFibGVPYmplY3Q8RmllbGRTY2hlbWE+ID0gbnVsbFxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25GaWVsZDogSW1tdXRhYmxlT2JqZWN0PEZpZWxkU2NoZW1hPiA9IG51bGxcblxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCA9PT0gYWN0aW9uQ29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCAmJlxuICAgICAgICAgICAgICAgICAgYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQgPT09IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXMgc2FtZSB0byBhY3Rpb24gZHNcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEc1NjaGVtYSA9IG1lc3NhZ2VEYXRhU291cmNlLmdldFNjaGVtYSgpXG4gICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RJZEppbXVGaWVsZE5hbWUgPSBtZXNzYWdlRHNTY2hlbWEgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkcyAmJlxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlRHNTY2hlbWEuZmllbGRzKS5maW5kKGppbXVGaWVsZE5hbWUgPT4gbWVzc2FnZURzU2NoZW1hLmZpZWxkc1tqaW11RmllbGROYW1lXS5lc3JpVHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVPSUQnKVxuICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkID0gbWVzc2FnZURzU2NoZW1hICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkc1tvYmplY3RJZEppbXVGaWVsZE5hbWVdXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IG1lc3NhZ2VGaWVsZFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0cmlnZ2VyIGRzIGlzbid0IHNhbWUgdG8gYWN0aW9uIGRzXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlSmltdUZpZWxkTmFtZSA9IGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IG1lc3NhZ2VEYXRhU291cmNlLmdldFNjaGVtYSgpLmZpZWxkc1ttZXNzYWdlSmltdUZpZWxkTmFtZV1cbiAgICAgICAgICAgICAgICAgIGFjdGlvbkZpZWxkID0gYWN0aW9uRGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHNbYWN0aW9uSmltdUZpZWxkTmFtZV1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgd2hlcmVTcWwgPSAnJ1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRmllbGQgJiYgYWN0aW9uRmllbGQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZE5hbWUgPSBtZXNzYWdlRmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkVHlwZSA9IG1lc3NhZ2VGaWVsZC50eXBlXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBNZXNzYWdlOiBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkVmFsdWVzID0gW11cblxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wTWVzc2FnZS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBGaWVsZFZhbHVlID0gdGVtcE1lc3NhZ2UucmVjb3Jkc1tpXS5nZXREYXRhKClbbWVzc2FnZUZpZWxkTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5pbmNsdWRlcyhgJHt0aGlzLmZvcm1hdFZhbHVlKHRlbXBGaWVsZFZhbHVlLCBtZXNzYWdlRmllbGRUeXBlKX1gKSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkVmFsdWVzLnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZSh0ZW1wTWVzc2FnZS5yZWNvcmRzW2ldLmdldERhdGEoKVttZXNzYWdlRmllbGROYW1lXSwgbWVzc2FnZUZpZWxkVHlwZSl9YClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IGAke2FjdGlvbkZpZWxkLm5hbWV9IElOIGBcblxuICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gd2hlcmVTcWwgKyBgKCR7bWVzc2FnZUZpZWxkVmFsdWVzLmpvaW4oJywgJyl9KWBcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gJydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXG4gICAgICAgICAgICAgICAgICBpZiAobW9yZUFkaXRpb25TUUwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdoZXJlU3FsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSB3aGVyZVNxbCArICcgQU5EICcgKyBtb3JlQWRpdGlvblNRTFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gbW9yZUFkaXRpb25TUUxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9ICcnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxuICAgICAgICAgICAgICAgICAgcXVlcnlTUUw6IHdoZXJlU3FsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vdCB1c2UgRGF0YVJlbGF0aW9uU2hpcFxuICAgICAgICAgICAgICAgIGxldCB3aGVyZVNxbCA9ICcnXG5cbiAgICAgICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXG4gICAgICAgICAgICAgICAgICBpZiAobW9yZUFkaXRpb25TUUwpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBtb3JlQWRpdGlvblNRTFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9ICcnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxuICAgICAgICAgICAgICAgICAgcXVlcnlTUUw6IHdoZXJlU3FsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBkb24ndCBleGlzdFxuICAgICAgICAgICAgICBmaWx0ZXJBY3Rpb25WYWx1ZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZUtleSA9IHRoaXMuZ2V0RmlsdGVyTWVzc2FnZUtleShtZXNzYWdlLndpZGdldElkLCBtZXNzYWdlRGF0YVNvdXJjZT8uaWQpXG4gICAgICAgIGNvbnN0IGFjdGlvbktleSA9IHRoaXMuZ2V0RmlsdGVyQWN0aW9uS2V5KGZpbHRlckFjdGlvblZhbHVlPy5sYXllckRhdGFTb3VyY2VJZClcbiAgICAgICAgaWYgKGZpbHRlckFjdGlvblZhbHVlKSB7XG4gICAgICAgICAgbG9kYXNoLnNldFZhbHVlKHRoaXMuZmlsdGVyQWN0aW9ucywgYCR7YWN0aW9uS2V5fS4ke21lc3NhZ2VLZXl9YCwge1xuICAgICAgICAgICAgcXVlcnlTUUw6IGZpbHRlckFjdGlvblZhbHVlPy5xdWVyeVNRTCxcbiAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRJZDogbWVzc2FnZS53aWRnZXRJZFxuICAgICAgICAgIH0pXG4gICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUucXVlcnlTUUwgPSB0aGlzLmdldFVuaW9uQWxsRmlsdGVyUXVlcnlTUUwoYWN0aW9uS2V5KVxuICAgICAgICB9XG4gICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsIGFjdGlvbktleSwgZmlsdGVyQWN0aW9uVmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGdldFVuaW9uQWxsRmlsdGVyUXVlcnlTUUwgKGFjdGlvbktleSkge1xuICAgIGxldCB1bmlvblF1ZXJ5U1FMID0gJydcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLmZpbHRlckFjdGlvbnNbYWN0aW9uS2V5XSB8fCB7fSkuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAvL2NvbnN0IGZpbHRlck1lc3NhZ2VLZXkgPSBlbnRyeVswXVxuICAgICAgY29uc3QgcXVlcnlTUUwgPSBlbnRyeVsxXT8ucXVlcnlTUUxcbiAgICAgIGlmICh1bmlvblF1ZXJ5U1FMICYmIHF1ZXJ5U1FMKSB7XG4gICAgICAgIHVuaW9uUXVlcnlTUUwgPSBgICR7dW5pb25RdWVyeVNRTH0gQU5EICR7cXVlcnlTUUx9IGBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaW9uUXVlcnlTUUwgPSBxdWVyeVNRTCB8fCB1bmlvblF1ZXJ5U1FMXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdW5pb25RdWVyeVNRTFxuICB9XG5cbiAgZ2V0RmlsdGVyQWN0aW9uS2V5IChhY3Rpb25MYXllckRhdGFTb3VyY2VJZCkge1xuICAgIGNvbnN0IGFjdGlvbktleSA9IGAke0ZJTFRFUl9BQ1RJT05fS0VZX1BSRUZJWH0ke2FjdGlvbkxheWVyRGF0YVNvdXJjZUlkfWBcbiAgICByZXR1cm4gYWN0aW9uS2V5XG4gIH1cblxuICBnZXRGaWx0ZXJNZXNzYWdlS2V5IChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VMYXllckRhdGFTb3VyY2VJZCkge1xuICAgIGNvbnN0IG1lc3NhZ2VLZXkgPSBgJHtGSUxURVJfTUVTU0FHRV9LRVlfUFJFRklYfSR7bWVzc2FnZVdpZGdldElkfS0ke21lc3NhZ2VMYXllckRhdGFTb3VyY2VJZH1gXG4gICAgcmV0dXJuIG1lc3NhZ2VLZXlcbiAgfVxuXG4gIGdldExheWVySWRGcm9tTGF5ZXJEcyAoZHM6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBGZWF0dXJlUXVlcnlEYXRhU291cmNlKSB7XG4gICAgaWYgKChkcyBhcyBhbnkpLmxheWVySWQpIHtcbiAgICAgIHJldHVybiAoZHMgYXMgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkubGF5ZXJJZFxuICAgIH0gZWxzZSBpZiAoKGRzIGFzIGFueSkubGF5ZXIpIHtcbiAgICAgIHJldHVybiAoZHMgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSkubGF5ZXIuaWRcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBmb3JtYXRWYWx1ZSAodmFsdWUsIHR5cGU6IHN0cmluZykge1xuICAgIGlmICh0eXBlID09PSAnU1RSSU5HJykge1xuICAgICAgcmV0dXJuIGAnJHt2YWx1ZX0nYFxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1gXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnREFURScpIHtcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==