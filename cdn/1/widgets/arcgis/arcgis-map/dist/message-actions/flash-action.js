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
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/flash-action.ts ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class FlashAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
    }
    filterMessage(message) {
        return true;
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                if (message.records.length === 0) {
                    break;
                }
                let flashActionValue = null;
                if (actionConfig) {
                    if (actionConfig.messageUseDataSource && actionConfig.actionUseDataSource) {
                        if (message.records.length > 0 &&
                            message.records[0].dataSource.getMainDataSource().id !== actionConfig.messageUseDataSource.mainDataSourceId) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'flashActionValue', null);
                            break;
                        }
                        // Framework makes sure the following data sources are available before call onExecute() method.
                        const messageDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.messageUseDataSource.mainDataSourceId);
                        const actionDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.actionUseDataSource.mainDataSourceId);
                        if (messageDataSource && actionDataSource) {
                            // when ds instances exit
                            if (actionConfig.enabledDataRelationShip) {
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
                                const query = {
                                    outFields: ['*'],
                                    where: whereSql,
                                    returnGeometry: true
                                };
                                const realQuery = actionDataSource.getRealQueryParams(query, 'query');
                                flashActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: realQuery && realQuery.where
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
                                const query = {
                                    outFields: ['*'],
                                    where: whereSql,
                                    returnGeometry: true
                                };
                                const realQuery = actionDataSource.getRealQueryParams(query, 'query');
                                flashActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: realQuery && realQuery.where
                                };
                            }
                        }
                        else {
                            // when ds instances don't exist
                            flashActionValue = null;
                        }
                    }
                    else {
                        flashActionValue = null;
                    }
                }
                const actionKey = `flashActionValue-${flashActionValue === null || flashActionValue === void 0 ? void 0 : flashActionValue.layerDataSourceId}`;
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, flashActionValue);
                break;
        }
        return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUlILE1BQU0sV0FBWSxTQUFRLDREQUFxQjtJQUM1RCx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssa0RBQVcsQ0FBQywwQkFBMEI7SUFDbEYsQ0FBQztJQUVELGFBQWEsQ0FBRSxPQUFnQjtRQUM3QixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsU0FBUyxDQUFFLE9BQWdCLEVBQUUsWUFBdUI7UUFDbEQsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsS0FBSyxrREFBVyxDQUFDLDBCQUEwQjtnQkFDekMsSUFBSyxPQUE2QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ3hFLE1BQUs7Z0JBQ1AsQ0FBQztnQkFFRCxJQUFJLGdCQUFnQixHQUFvRCxJQUFJO2dCQUM1RSxJQUFJLFlBQVksRUFBRSxDQUFDO29CQUNqQixJQUFJLFlBQVksQ0FBQyxvQkFBb0IsSUFBSSxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt3QkFDMUUsSUFBSyxPQUE2QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQzs0QkFDbEUs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QUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZsYXNoLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCB0eXBlIE1lc3NhZ2UsIHR5cGUgRmllbGRTY2hlbWEsXG4gIHR5cGUgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBGZWF0dXJlUXVlcnlEYXRhU291cmNlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgZGF0YVNvdXJjZVV0aWxzLCBNdXRhYmxlU3RvcmVNYW5hZ2VyLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvblxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvZmxhc2gtYWN0aW9uLXNldHRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlXG4gIH1cblxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2U6XG4gICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmbGFzaEFjdGlvblZhbHVlOiB7IGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcgfSA9IG51bGxcbiAgICAgICAgaWYgKGFjdGlvbkNvbmZpZykge1xuICAgICAgICAgIGlmIChhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgYWN0aW9uQ29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHNbMF0uZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpLmlkICE9PSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCkge1xuICAgICAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnZmxhc2hBY3Rpb25WYWx1ZScsIG51bGwpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZyYW1ld29yayBtYWtlcyBzdXJlIHRoZSBmb2xsb3dpbmcgZGF0YSBzb3VyY2VzIGFyZSBhdmFpbGFibGUgYmVmb3JlIGNhbGwgb25FeGVjdXRlKCkgbWV0aG9kLlxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25EYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpXG5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlKSB7XG4gICAgICAgICAgICAgIC8vIHdoZW4gZHMgaW5zdGFuY2VzIGV4aXRcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5lbmFibGVkRGF0YVJlbGF0aW9uU2hpcCkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSBEYXRhUmVsYXRpb25TaGlwXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VGaWVsZDogSW1tdXRhYmxlT2JqZWN0PEZpZWxkU2NoZW1hPiA9IG51bGxcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXG5cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgPT09IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgJiZcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0cmlnZ2VyIGRzIGlzIHNhbWUgdG8gYWN0aW9uIGRzXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRHNTY2hlbWEgPSBtZXNzYWdlRGF0YVNvdXJjZS5nZXRTY2hlbWEoKVxuICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0SWRKaW11RmllbGROYW1lID0gbWVzc2FnZURzU2NoZW1hICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobWVzc2FnZURzU2NoZW1hLmZpZWxkcykuZmluZChqaW11RmllbGROYW1lID0+IG1lc3NhZ2VEc1NjaGVtYS5maWVsZHNbamltdUZpZWxkTmFtZV0uZXNyaVR5cGUgPT09ICdlc3JpRmllbGRUeXBlT0lEJylcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IG1lc3NhZ2VEc1NjaGVtYSAmJiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHNbb2JqZWN0SWRKaW11RmllbGROYW1lXVxuICAgICAgICAgICAgICAgICAgYWN0aW9uRmllbGQgPSBtZXNzYWdlRmllbGRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gaWYgdHJpZ2dlciBkcyBpc24ndCBzYW1lIHRvIGFjdGlvbiBkc1xuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzWzBdXG4gICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25KaW11RmllbGROYW1lID0gYWN0aW9uQ29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZmllbGRzWzBdXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBtZXNzYWdlRGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHNbbWVzc2FnZUppbXVGaWVsZE5hbWVdXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IGFjdGlvbkRhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW2FjdGlvbkppbXVGaWVsZE5hbWVdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHdoZXJlU3FsID0gJydcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUZpZWxkICYmIGFjdGlvbkZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRmllbGROYW1lID0gbWVzc2FnZUZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFR5cGUgPSBtZXNzYWdlRmllbGQudHlwZVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTWVzc2FnZTogRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFZhbHVlcyA9IFtdXG5cbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcE1lc3NhZ2UucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmllbGRWYWx1ZSA9IHRlbXBNZXNzYWdlLnJlY29yZHNbaV0uZ2V0RGF0YSgpW21lc3NhZ2VGaWVsZE5hbWVdXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRmllbGRWYWx1ZXMuaW5jbHVkZXMoYCR7dGhpcy5mb3JtYXRWYWx1ZSh0ZW1wRmllbGRWYWx1ZSwgbWVzc2FnZUZpZWxkVHlwZSl9YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZFZhbHVlcy5wdXNoKGAke3RoaXMuZm9ybWF0VmFsdWUodGVtcE1lc3NhZ2UucmVjb3Jkc1tpXS5nZXREYXRhKClbbWVzc2FnZUZpZWxkTmFtZV0sIG1lc3NhZ2VGaWVsZFR5cGUpfWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBgJHthY3Rpb25GaWVsZC5uYW1lfSBJTiBgXG5cbiAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRmllbGRWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IHdoZXJlU3FsICsgYCgke21lc3NhZ2VGaWVsZFZhbHVlcy5qb2luKCcsICcpfSlgXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9ICcnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQWRpdGlvblNRTCA9IGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTChhY3Rpb25Db25maWcuc3FsRXhwck9iaiwgYWN0aW9uRGF0YVNvdXJjZSkuc3FsIDogbnVsbFxuICAgICAgICAgICAgICAgICAgaWYgKG1vcmVBZGl0aW9uU1FMKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aGVyZVNxbCkge1xuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gd2hlcmVTcWwgKyAnIEFORCAnICsgbW9yZUFkaXRpb25TUUxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IG1vcmVBZGl0aW9uU1FMXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcbiAgICAgICAgICAgICAgICAgIHdoZXJlOiB3aGVyZVNxbCxcbiAgICAgICAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFF1ZXJ5ID0gKGFjdGlvbkRhdGFTb3VyY2UgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmdldFJlYWxRdWVyeVBhcmFtcyhxdWVyeSwgJ3F1ZXJ5JylcblxuICAgICAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxuICAgICAgICAgICAgICAgICAgcXVlcnlTUUw6IHJlYWxRdWVyeSAmJiByZWFsUXVlcnkud2hlcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm90IHVzZSBEYXRhUmVsYXRpb25TaGlwXG4gICAgICAgICAgICAgICAgbGV0IHdoZXJlU3FsID0gJydcblxuICAgICAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbW9yZUFkaXRpb25TUUwgPSBhY3Rpb25Db25maWcuc3FsRXhwck9iaiA/IGRhdGFTb3VyY2VVdGlscy5nZXRBcmNHSVNTUUwoYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmosIGFjdGlvbkRhdGFTb3VyY2UpLnNxbCA6IG51bGxcbiAgICAgICAgICAgICAgICAgIGlmIChtb3JlQWRpdGlvblNRTCkge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IG1vcmVBZGl0aW9uU1FMXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gJydcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXG4gICAgICAgICAgICAgICAgICB3aGVyZTogd2hlcmVTcWwsXG4gICAgICAgICAgICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxRdWVyeSA9IChhY3Rpb25EYXRhU291cmNlIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBGZWF0dXJlUXVlcnlEYXRhU291cmNlKS5nZXRSZWFsUXVlcnlQYXJhbXMocXVlcnksICdxdWVyeScpXG5cbiAgICAgICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgbGF5ZXJEYXRhU291cmNlSWQ6IGFjdGlvbkRhdGFTb3VyY2UgJiYgYWN0aW9uRGF0YVNvdXJjZS5pZCxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5U1FMOiByZWFsUXVlcnkgJiYgcmVhbFF1ZXJ5LndoZXJlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBkb24ndCBleGlzdFxuICAgICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25LZXkgPSBgZmxhc2hBY3Rpb25WYWx1ZS0ke2ZsYXNoQWN0aW9uVmFsdWU/LmxheWVyRGF0YVNvdXJjZUlkfWBcbiAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgYWN0aW9uS2V5LCBmbGFzaEFjdGlvblZhbHVlKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBnZXRMYXllcklkRnJvbUxheWVyRHMgKGRzOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkge1xuICAgIGlmICgoZHMgYXMgYW55KS5sYXllcklkKSB7XG4gICAgICByZXR1cm4gKGRzIGFzIEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmxheWVySWRcbiAgICB9IGVsc2UgaWYgKChkcyBhcyBhbnkpLmxheWVyKSB7XG4gICAgICByZXR1cm4gKGRzIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UpLmxheWVyLmlkXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VmFsdWUgKHZhbHVlLCB0eXBlOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZSA9PT0gJ1NUUklORycpIHtcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOVU1CRVInKSB7XG4gICAgICByZXR1cm4gYCR7dmFsdWV9YFxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0RBVEUnKSB7XG4gICAgICByZXR1cm4gYCcke3ZhbHVlfSdgXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=