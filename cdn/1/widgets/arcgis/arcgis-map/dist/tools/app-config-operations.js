System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/tools/app-config-operations.ts ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppConfigOperation)
/* harmony export */ });
class AppConfigOperation {
    constructor() {
        this.id = 'map-app-config-operation';
    }
    afterWidgetCopied(sourceWidgetId, sourceAppConfig, destWidgetId, destAppConfig, widgetMap) {
        var _a;
        if (!widgetMap) { // no need to change widget linkage if it is not performed during a page copying
            return destAppConfig;
        }
        let newAppConfig = destAppConfig;
        const sourceWidgetJson = sourceAppConfig.widgets[sourceWidgetId];
        const sourceWidgetConfig = sourceWidgetJson === null || sourceWidgetJson === void 0 ? void 0 : sourceWidgetJson.config;
        const destWidgetJson = newAppConfig.widgets[destWidgetId];
        const destWidgetConfig = destWidgetJson === null || destWidgetJson === void 0 ? void 0 : destWidgetJson.config;
        if (sourceWidgetConfig && destWidgetConfig && ((_a = sourceWidgetConfig.clientQueryDataSourceIds) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            // client query should be enabled by only one map widget for one webmap data source
            newAppConfig = newAppConfig.setIn(['widgets', destWidgetId, 'config', 'clientQueryDataSourceIds'], []);
        }
        return newAppConfig;
    }
    /**
     * Do some cleanup operations before current widget is removed.
     * @returns The updated appConfig
     */
    widgetWillRemove(appConfig) {
        return appConfig;
    }
}

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L3Rvb2xzL2FwcC1jb25maWctb3BlcmF0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNIZSxNQUFNLGtCQUFrQjtJQUF2QztRQUNFLE9BQUUsR0FBRywwQkFBMEI7SUFtQ2pDLENBQUM7SUFqQ0MsaUJBQWlCLENBQ2YsY0FBc0IsRUFDdEIsZUFBNEIsRUFDNUIsWUFBb0IsRUFDcEIsYUFBMEIsRUFDMUIsU0FBcUM7O1FBRXJDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLGdGQUFnRjtZQUNoRyxPQUFPLGFBQWE7UUFDdEIsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLGFBQWE7UUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNoRSxNQUFNLGtCQUFrQixHQUFhLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLE1BQU07UUFFN0QsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDekQsTUFBTSxnQkFBZ0IsR0FBYSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsTUFBTTtRQUV6RCxJQUFJLGtCQUFrQixJQUFJLGdCQUFnQixJQUFJLHlCQUFrQixDQUFDLHdCQUF3QiwwQ0FBRSxNQUFNLElBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdEcsbUZBQW1GO1lBQ25GLFlBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDeEcsQ0FBQztRQUVELE9BQU8sWUFBWTtJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUUsU0FBc0I7UUFDdEMsT0FBTyxTQUFTO0lBQ2xCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy90b29scy9hcHAtY29uZmlnLW9wZXJhdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0eXBlIGV4dGVuc2lvblNwZWMsIHR5cGUgSU1BcHBDb25maWcgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb25maWdPcGVyYXRpb24gaW1wbGVtZW50cyBleHRlbnNpb25TcGVjLkFwcENvbmZpZ09wZXJhdGlvbnNFeHRlbnNpb24ge1xuICBpZCA9ICdtYXAtYXBwLWNvbmZpZy1vcGVyYXRpb24nXG5cbiAgYWZ0ZXJXaWRnZXRDb3BpZWQgKFxuICAgIHNvdXJjZVdpZGdldElkOiBzdHJpbmcsXG4gICAgc291cmNlQXBwQ29uZmlnOiBJTUFwcENvbmZpZyxcbiAgICBkZXN0V2lkZ2V0SWQ6IHN0cmluZyxcbiAgICBkZXN0QXBwQ29uZmlnOiBJTUFwcENvbmZpZyxcbiAgICB3aWRnZXRNYXA/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IElNQXBwQ29uZmlnIHtcbiAgICBpZiAoIXdpZGdldE1hcCkgeyAvLyBubyBuZWVkIHRvIGNoYW5nZSB3aWRnZXQgbGlua2FnZSBpZiBpdCBpcyBub3QgcGVyZm9ybWVkIGR1cmluZyBhIHBhZ2UgY29weWluZ1xuICAgICAgcmV0dXJuIGRlc3RBcHBDb25maWdcbiAgICB9XG5cbiAgICBsZXQgbmV3QXBwQ29uZmlnID0gZGVzdEFwcENvbmZpZ1xuICAgIGNvbnN0IHNvdXJjZVdpZGdldEpzb24gPSBzb3VyY2VBcHBDb25maWcud2lkZ2V0c1tzb3VyY2VXaWRnZXRJZF1cbiAgICBjb25zdCBzb3VyY2VXaWRnZXRDb25maWc6IElNQ29uZmlnID0gc291cmNlV2lkZ2V0SnNvbj8uY29uZmlnXG5cbiAgICBjb25zdCBkZXN0V2lkZ2V0SnNvbiA9IG5ld0FwcENvbmZpZy53aWRnZXRzW2Rlc3RXaWRnZXRJZF1cbiAgICBjb25zdCBkZXN0V2lkZ2V0Q29uZmlnOiBJTUNvbmZpZyA9IGRlc3RXaWRnZXRKc29uPy5jb25maWdcblxuICAgIGlmIChzb3VyY2VXaWRnZXRDb25maWcgJiYgZGVzdFdpZGdldENvbmZpZyAmJiBzb3VyY2VXaWRnZXRDb25maWcuY2xpZW50UXVlcnlEYXRhU291cmNlSWRzPy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBjbGllbnQgcXVlcnkgc2hvdWxkIGJlIGVuYWJsZWQgYnkgb25seSBvbmUgbWFwIHdpZGdldCBmb3Igb25lIHdlYm1hcCBkYXRhIHNvdXJjZVxuICAgICAgbmV3QXBwQ29uZmlnID0gbmV3QXBwQ29uZmlnLnNldEluKFsnd2lkZ2V0cycsIGRlc3RXaWRnZXRJZCwgJ2NvbmZpZycsICdjbGllbnRRdWVyeURhdGFTb3VyY2VJZHMnXSwgW10pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FwcENvbmZpZ1xuICB9XG5cbiAgLyoqXG4gICAqIERvIHNvbWUgY2xlYW51cCBvcGVyYXRpb25zIGJlZm9yZSBjdXJyZW50IHdpZGdldCBpcyByZW1vdmVkLlxuICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCBhcHBDb25maWdcbiAgICovXG4gIHdpZGdldFdpbGxSZW1vdmUgKGFwcENvbmZpZzogSU1BcHBDb25maWcpOiBJTUFwcENvbmZpZyB7XG4gICAgcmV0dXJuIGFwcENvbmZpZ1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=