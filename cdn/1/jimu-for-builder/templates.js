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

/***/ "./jimu-for-builder/lib/templates/index.ts":
/*!*************************************************!*\
  !*** ./jimu-for-builder/lib/templates/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateType: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_1__.TemplateType),
/* harmony export */   getAppTemplates: () => (/* binding */ getAppTemplates),
/* harmony export */   getBlockTemplates: () => (/* binding */ getBlockTemplates),
/* harmony export */   getFooterTemplates: () => (/* binding */ getFooterTemplates),
/* harmony export */   getFullScreenGridPageTemplates: () => (/* binding */ getFullScreenGridPageTemplates),
/* harmony export */   getFullScreenPageTemplates: () => (/* binding */ getFullScreenPageTemplates),
/* harmony export */   getGridTemplates: () => (/* binding */ getGridTemplates),
/* harmony export */   getHeaderTemplates: () => (/* binding */ getHeaderTemplates),
/* harmony export */   getScreenGroupTemplates: () => (/* binding */ getScreenGroupTemplates),
/* harmony export */   getScreenTemplates: () => (/* binding */ getScreenTemplates),
/* harmony export */   getScrollingPageTemplates: () => (/* binding */ getScrollingPageTemplates),
/* harmony export */   getTemplateConfig: () => (/* binding */ getTemplateConfig),
/* harmony export */   getWindowTemplates: () => (/* binding */ getWindowTemplates),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   loadI18nMessage: () => (/* binding */ loadI18nMessage)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./jimu-for-builder/lib/templates/type.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

let templatesInfoPromise = null;
let templatesInfo = {};
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadI18nMessage();
        return yield loadTemplatesInfo();
    });
}
function getAppTemplates(filterTags) {
    const templates = templatesInfo.app || [];
    if (!filterTags || (filterTags === null || filterTags === void 0 ? void 0 : filterTags.length) === 0) {
        return templates;
    }
    const filteredTemplates = templates.filter(itemInfo => {
        const tags = (itemInfo === null || itemInfo === void 0 ? void 0 : itemInfo.tags) || [];
        const effectiveTags = filterTags.filter(tag => tags.includes(tag));
        return effectiveTags.length > 0;
    });
    return filteredTemplates;
}
function getFullScreenPageTemplates(includeBlankTemplate = true) {
    const templates = templatesInfo['full-screen-page'] || [];
    if (!includeBlankTemplate) {
        return templates.filter(template => !template.name.startsWith('blank'));
    }
    return templates;
}
function getFullScreenGridPageTemplates(includeBlankTemplate = true) {
    const templates = templatesInfo['full-screen-grid-page'] || [];
    if (!includeBlankTemplate) {
        return templates.filter(template => !template.name.startsWith('blank'));
    }
    return templates;
}
function getScrollingPageTemplates(includeBlankTemplate = true) {
    const templates = templatesInfo['scrolling-page'] || [];
    if (!includeBlankTemplate) {
        return templates.filter(template => !template.name.startsWith('blank'));
    }
    return templates;
}
function getWindowTemplates(includeBlankTemplate = true) {
    const templates = templatesInfo.window || [];
    if (!includeBlankTemplate) {
        return templates.filter(template => !template.name.startsWith('blank'));
    }
    return templates;
}
function getHeaderTemplates() {
    return templatesInfo.header || [];
}
function getFooterTemplates() {
    return templatesInfo.footer || [];
}
function getBlockTemplates() {
    return templatesInfo.block || [];
}
function getGridTemplates() {
    return templatesInfo['grid-widget'] || [];
}
function getScreenGroupTemplates() {
    return templatesInfo['screen-group'] || [];
}
function getScreenTemplates() {
    return templatesInfo.screen || [];
}
// export function getBlankScreenTemplate (): Template[] {
//   return blankScreenTemplate
// }

function loadTemplatesInfo() {
    if (templatesInfoPromise) {
        return templatesInfoPromise;
    }
    const locale = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.translatedLocale;
    const templatesUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.resolveModuleFullPath('templates/');
    templatesInfoPromise = fetch(`${templatesUrl}templates-info.json`)
        .then(res => res.json())
        .then((_templatesInfo) => {
        templatesInfo = _templatesInfo;
        Object.keys(templatesInfo).forEach(tt => {
            templatesInfo[tt].forEach((t) => {
                const templateUrl = `${templatesUrl}${t.type}/${t.name}`;
                t.label = t.i18nLabel[locale] || t.label || t.name;
                t.description = t.i18nDescription[locale] || t.description || '';
                t.thumbnail = `${templateUrl}/${t.thumbnail}`;
                if (t.gifThumbnail) {
                    t.gifThumbnail = `${templateUrl}/${t.gifThumbnail}`;
                }
                t.configUrl = `${templateUrl}/config.json`;
            });
        });
        return templatesInfo;
    });
    return templatesInfoPromise;
}
function getTemplateConfig(templateType, templateName) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(`../templates/${templateType}/${templateName}/config.json`)
            .then((res) => __awaiter(this, void 0, void 0, function* () { return yield res.json(); }))
            .then(configJson => {
            return configJson;
        });
    });
}
function loadLocaleMessages(locale, supportedLocales) {
    return __awaiter(this, void 0, void 0, function* () {
        locale = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocaleToLoad(locale, supportedLocales);
        if (locale) {
            const templatesUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.resolveModuleFullPath('templates/');
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.loadLocaleMessages(`${templatesUrl}/translations`, locale).then(messages => {
                return messages;
            });
        }
        else {
            return Promise.resolve({});
        }
    });
}
function loadI18nMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        const locale = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.locale;
        return yield loadLocaleMessages(locale, jimu_core__WEBPACK_IMPORTED_MODULE_0__.translatedLocales).then((messages) => {
            messages && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.i18nMessagesLoaded('templates', messages));
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.resetIntls();
            return messages;
        });
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/templates/type.ts":
/*!************************************************!*\
  !*** ./jimu-for-builder/lib/templates/type.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateType: () => (/* binding */ TemplateType)
/* harmony export */ });
var TemplateType;
(function (TemplateType) {
    TemplateType["Block"] = "block";
    TemplateType["Grid"] = "grid-widget";
    TemplateType["Header"] = "header";
    TemplateType["Footer"] = "footer";
    TemplateType["FullScreenPage"] = "full-screen-page";
    TemplateType["FullScreenGridPage"] = "full-screen-grid-page";
    TemplateType["ScrollingPage"] = "scrolling-page";
    TemplateType["Window"] = "window";
    TemplateType["ScreenGroup"] = "screen-group";
    TemplateType["Screen"] = "screen";
    TemplateType["App"] = "app";
})(TemplateType || (TemplateType = {}));


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
/*!***************************************!*\
  !*** ./jimu-for-builder/templates.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateType: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.TemplateType),
/* harmony export */   getAppTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getAppTemplates),
/* harmony export */   getBlockTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getBlockTemplates),
/* harmony export */   getFooterTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getFooterTemplates),
/* harmony export */   getFullScreenGridPageTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getFullScreenGridPageTemplates),
/* harmony export */   getFullScreenPageTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getFullScreenPageTemplates),
/* harmony export */   getGridTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getGridTemplates),
/* harmony export */   getHeaderTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getHeaderTemplates),
/* harmony export */   getScreenGroupTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getScreenGroupTemplates),
/* harmony export */   getScreenTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getScreenTemplates),
/* harmony export */   getScrollingPageTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getScrollingPageTemplates),
/* harmony export */   getTemplateConfig: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getTemplateConfig),
/* harmony export */   getWindowTemplates: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.getWindowTemplates),
/* harmony export */   init: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   loadI18nMessage: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.loadI18nMessage)
/* harmony export */ });
/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/templates */ "./jimu-for-builder/lib/templates/index.ts");


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvdGVtcGxhdGVzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi90ZW1wbGF0ZXMvdHlwZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci90ZW1wbGF0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIG1vZHVsZUxvYWRlciwgaTE4biwgdHJhbnNsYXRlZExvY2FsZXMsIGFwcEFjdGlvbnMsIHR5cGUgQXBwQ29uZmlnIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBUZW1wbGF0ZSwgdHlwZSBUZW1wbGF0ZXNJbmZvLCB0eXBlIFRlbXBsYXRlVHlwZSwgdHlwZSBUZW1wbGF0ZVRhZ1R5cGUgfSBmcm9tICcuL3R5cGUnXG5cbmxldCB0ZW1wbGF0ZXNJbmZvUHJvbWlzZSA9IG51bGxcbmxldCB0ZW1wbGF0ZXNJbmZvOiBUZW1wbGF0ZXNJbmZvID0ge30gYXMgVGVtcGxhdGVzSW5mb1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdCAoKSB7XG4gIGF3YWl0IGxvYWRJMThuTWVzc2FnZSgpXG4gIHJldHVybiBhd2FpdCBsb2FkVGVtcGxhdGVzSW5mbygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBUZW1wbGF0ZXMgKGZpbHRlclRhZ3M/OiBUZW1wbGF0ZVRhZ1R5cGVbXSk6IFRlbXBsYXRlW10ge1xuICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNJbmZvLmFwcCB8fCBbXVxuICBpZiAoIWZpbHRlclRhZ3MgfHwgZmlsdGVyVGFncz8ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlc1xuICB9XG4gIGNvbnN0IGZpbHRlcmVkVGVtcGxhdGVzID0gdGVtcGxhdGVzLmZpbHRlcihpdGVtSW5mbyA9PiB7XG4gICAgY29uc3QgdGFncyA9IGl0ZW1JbmZvPy50YWdzIHx8IFtdXG4gICAgY29uc3QgZWZmZWN0aXZlVGFncyA9IGZpbHRlclRhZ3MuZmlsdGVyKHRhZyA9PiB0YWdzLmluY2x1ZGVzKHRhZykpXG4gICAgcmV0dXJuIGVmZmVjdGl2ZVRhZ3MubGVuZ3RoID4gMFxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRUZW1wbGF0ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxTY3JlZW5QYWdlVGVtcGxhdGVzIChpbmNsdWRlQmxhbmtUZW1wbGF0ZSA9IHRydWUpOiBUZW1wbGF0ZVtdIHtcbiAgY29uc3QgdGVtcGxhdGVzID0gdGVtcGxhdGVzSW5mb1snZnVsbC1zY3JlZW4tcGFnZSddIHx8IFtdXG4gIGlmICghaW5jbHVkZUJsYW5rVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzLmZpbHRlcih0ZW1wbGF0ZSA9PiAhdGVtcGxhdGUubmFtZS5zdGFydHNXaXRoKCdibGFuaycpKVxuICB9XG4gIHJldHVybiB0ZW1wbGF0ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxTY3JlZW5HcmlkUGFnZVRlbXBsYXRlcyAoaW5jbHVkZUJsYW5rVGVtcGxhdGUgPSB0cnVlKTogVGVtcGxhdGVbXSB7XG4gIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlc0luZm9bJ2Z1bGwtc2NyZWVuLWdyaWQtcGFnZSddIHx8IFtdXG4gIGlmICghaW5jbHVkZUJsYW5rVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzLmZpbHRlcih0ZW1wbGF0ZSA9PiAhdGVtcGxhdGUubmFtZS5zdGFydHNXaXRoKCdibGFuaycpKVxuICB9XG4gIHJldHVybiB0ZW1wbGF0ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbGluZ1BhZ2VUZW1wbGF0ZXMgKGluY2x1ZGVCbGFua1RlbXBsYXRlID0gdHJ1ZSk6IFRlbXBsYXRlW10ge1xuICBjb25zdCB0ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXNJbmZvWydzY3JvbGxpbmctcGFnZSddIHx8IFtdXG4gIGlmICghaW5jbHVkZUJsYW5rVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzLmZpbHRlcih0ZW1wbGF0ZSA9PiAhdGVtcGxhdGUubmFtZS5zdGFydHNXaXRoKCdibGFuaycpKVxuICB9XG4gIHJldHVybiB0ZW1wbGF0ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1RlbXBsYXRlcyAoaW5jbHVkZUJsYW5rVGVtcGxhdGUgPSB0cnVlKTogVGVtcGxhdGVbXSB7XG4gIGNvbnN0IHRlbXBsYXRlcyA9IHRlbXBsYXRlc0luZm8ud2luZG93IHx8IFtdXG4gIGlmICghaW5jbHVkZUJsYW5rVGVtcGxhdGUpIHtcbiAgICByZXR1cm4gdGVtcGxhdGVzLmZpbHRlcih0ZW1wbGF0ZSA9PiAhdGVtcGxhdGUubmFtZS5zdGFydHNXaXRoKCdibGFuaycpKVxuICB9XG4gIHJldHVybiB0ZW1wbGF0ZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRlclRlbXBsYXRlcyAoKTogVGVtcGxhdGVbXSB7XG4gIHJldHVybiB0ZW1wbGF0ZXNJbmZvLmhlYWRlciB8fCBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9vdGVyVGVtcGxhdGVzICgpOiBUZW1wbGF0ZVtdIHtcbiAgcmV0dXJuIHRlbXBsYXRlc0luZm8uZm9vdGVyIHx8IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9ja1RlbXBsYXRlcyAoKTogVGVtcGxhdGVbXSB7XG4gIHJldHVybiB0ZW1wbGF0ZXNJbmZvLmJsb2NrIHx8IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmlkVGVtcGxhdGVzICgpOiBUZW1wbGF0ZVtdIHtcbiAgcmV0dXJuIHRlbXBsYXRlc0luZm9bJ2dyaWQtd2lkZ2V0J10gfHwgW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcmVlbkdyb3VwVGVtcGxhdGVzICgpOiBUZW1wbGF0ZVtdIHtcbiAgcmV0dXJuIHRlbXBsYXRlc0luZm9bJ3NjcmVlbi1ncm91cCddIHx8IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JlZW5UZW1wbGF0ZXMgKCk6IFRlbXBsYXRlW10ge1xuICByZXR1cm4gdGVtcGxhdGVzSW5mby5zY3JlZW4gfHwgW11cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEJsYW5rU2NyZWVuVGVtcGxhdGUgKCk6IFRlbXBsYXRlW10ge1xuLy8gICByZXR1cm4gYmxhbmtTY3JlZW5UZW1wbGF0ZVxuLy8gfVxuXG5leHBvcnQgKiBmcm9tICcuL3R5cGUnXG5cbmZ1bmN0aW9uIGxvYWRUZW1wbGF0ZXNJbmZvICgpOiBQcm9taXNlPFRlbXBsYXRlc0luZm8+IHtcbiAgaWYgKHRlbXBsYXRlc0luZm9Qcm9taXNlKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlc0luZm9Qcm9taXNlXG4gIH1cbiAgY29uc3QgbG9jYWxlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbnRleHQudHJhbnNsYXRlZExvY2FsZVxuICBjb25zdCB0ZW1wbGF0ZXNVcmwgPSBtb2R1bGVMb2FkZXIucmVzb2x2ZU1vZHVsZUZ1bGxQYXRoKCd0ZW1wbGF0ZXMvJylcbiAgdGVtcGxhdGVzSW5mb1Byb21pc2UgPSBmZXRjaChgJHt0ZW1wbGF0ZXNVcmx9dGVtcGxhdGVzLWluZm8uanNvbmApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKF90ZW1wbGF0ZXNJbmZvOiBUZW1wbGF0ZXNJbmZvKSA9PiB7XG4gICAgICB0ZW1wbGF0ZXNJbmZvID0gX3RlbXBsYXRlc0luZm9cbiAgICAgIE9iamVjdC5rZXlzKHRlbXBsYXRlc0luZm8pLmZvckVhY2godHQgPT4ge1xuICAgICAgICB0ZW1wbGF0ZXNJbmZvW3R0XS5mb3JFYWNoKCh0OiBUZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlVXJsID0gYCR7dGVtcGxhdGVzVXJsfSR7dC50eXBlfS8ke3QubmFtZX1gXG5cbiAgICAgICAgICB0LmxhYmVsID0gdC5pMThuTGFiZWxbbG9jYWxlXSB8fCB0LmxhYmVsIHx8IHQubmFtZVxuICAgICAgICAgIHQuZGVzY3JpcHRpb24gPSB0LmkxOG5EZXNjcmlwdGlvbltsb2NhbGVdIHx8IHQuZGVzY3JpcHRpb24gfHwgJydcbiAgICAgICAgICB0LnRodW1ibmFpbCA9IGAke3RlbXBsYXRlVXJsfS8ke3QudGh1bWJuYWlsfWBcbiAgICAgICAgICBpZiAodC5naWZUaHVtYm5haWwpIHtcbiAgICAgICAgICAgIHQuZ2lmVGh1bWJuYWlsID0gYCR7dGVtcGxhdGVVcmx9LyR7dC5naWZUaHVtYm5haWx9YFxuICAgICAgICAgIH1cbiAgICAgICAgICB0LmNvbmZpZ1VybCA9IGAke3RlbXBsYXRlVXJsfS9jb25maWcuanNvbmBcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGVtcGxhdGVzSW5mb1xuICAgIH0pXG5cbiAgcmV0dXJuIHRlbXBsYXRlc0luZm9Qcm9taXNlXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUZW1wbGF0ZUNvbmZpZyAodGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUsIHRlbXBsYXRlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxBcHBDb25maWc+IHtcbiAgcmV0dXJuIGF3YWl0IGZldGNoKGAuLi90ZW1wbGF0ZXMvJHt0ZW1wbGF0ZVR5cGV9LyR7dGVtcGxhdGVOYW1lfS9jb25maWcuanNvbmApXG4gICAgLnRoZW4oYXN5bmMgcmVzID0+IGF3YWl0IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oY29uZmlnSnNvbiA9PiB7XG4gICAgICByZXR1cm4gY29uZmlnSnNvblxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMb2NhbGVNZXNzYWdlcyAobG9jYWxlOiBzdHJpbmcsIHN1cHBvcnRlZExvY2FsZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgbG9jYWxlID0gaTE4bi5nZXRMb2NhbGVUb0xvYWQobG9jYWxlLCBzdXBwb3J0ZWRMb2NhbGVzKVxuICBpZiAobG9jYWxlKSB7XG4gICAgY29uc3QgdGVtcGxhdGVzVXJsID0gbW9kdWxlTG9hZGVyLnJlc29sdmVNb2R1bGVGdWxsUGF0aCgndGVtcGxhdGVzLycpXG4gICAgcmV0dXJuIGF3YWl0IGkxOG4ubG9hZExvY2FsZU1lc3NhZ2VzKGAke3RlbXBsYXRlc1VybH0vdHJhbnNsYXRpb25zYCwgbG9jYWxlKS50aGVuKG1lc3NhZ2VzID0+IHtcbiAgICAgIHJldHVybiBtZXNzYWdlc1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEkxOG5NZXNzYWdlICgpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBsb2NhbGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29udGV4dC5sb2NhbGVcbiAgcmV0dXJuIGF3YWl0IGxvYWRMb2NhbGVNZXNzYWdlcyhsb2NhbGUsIHRyYW5zbGF0ZWRMb2NhbGVzKS50aGVuKChtZXNzYWdlcykgPT4ge1xuICAgIG1lc3NhZ2VzICYmIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy5pMThuTWVzc2FnZXNMb2FkZWQoJ3RlbXBsYXRlcycsIG1lc3NhZ2VzKSlcbiAgICBpMThuLnJlc2V0SW50bHMoKVxuICAgIHJldHVybiBtZXNzYWdlc1xuICB9KVxufVxuIiwiaW1wb3J0IHsgdHlwZSBBcHBDb25maWcgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBlbnVtIFRlbXBsYXRlVHlwZSB7XG4gIEJsb2NrID0gJ2Jsb2NrJyxcbiAgR3JpZCA9ICdncmlkLXdpZGdldCcsXG4gIEhlYWRlciA9ICdoZWFkZXInLFxuICBGb290ZXIgPSAnZm9vdGVyJyxcbiAgRnVsbFNjcmVlblBhZ2UgPSAnZnVsbC1zY3JlZW4tcGFnZScsXG4gIEZ1bGxTY3JlZW5HcmlkUGFnZSA9ICdmdWxsLXNjcmVlbi1ncmlkLXBhZ2UnLFxuICBTY3JvbGxpbmdQYWdlID0gJ3Njcm9sbGluZy1wYWdlJyxcbiAgV2luZG93ID0gJ3dpbmRvdycsXG4gIFNjcmVlbkdyb3VwID0gJ3NjcmVlbi1ncm91cCcsXG4gIFNjcmVlbiA9ICdzY3JlZW4nLFxuICBBcHAgPSAnYXBwJyxcbn1cblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVUYWdUeXBlID0gJ0JsYW5rJyB8ICdXQUIgY2xhc3NpYycgfCAnTWFwIGNlbnRyaWMnIHwgJ0Rhc2hib2FyZCcgfCAnV2ViIHBhZ2UnIHwgJ1dlYnNpdGUnIHwgJ0Z1bGxzY3JlZW4nIHwgJ0Z1bGxzY3JlZW4gZ3JpZCcgfCAnU2Nyb2xsaW5nJyB8ICdNdWx0aXBhZ2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGUge1xuICBuYW1lOiBzdHJpbmdcbiAgdHlwZTogVGVtcGxhdGVUeXBlXG4gIC8qKlxuICAgKiBBIHRlbXBsYXRlIGNvbmZpZyBpcyBhIHN1Yi1zZXQgb2YgYXBwIGNvbmZpZy5cbiAgICogRm9yIGV4YW1wbGUsIGEgcGFnZSB0ZW1wbGF0ZSBtdXN0IGhhdmUgb25lIHBhZ2Ugb25seSwgYW5kIGEgaGVhZGVyIHRlbXBsYXRlIG11c3QgaGF2ZSBoZWFkZXIgY29uZmlnIG9ubHkuXG4gICAqL1xuICBjb25maWc/OiBQYXJ0aWFsPEFwcENvbmZpZz5cblxuICBjb25maWdVcmw6IHN0cmluZ1xuXG4gIC8qKiB0aGUgdGh1bWJuYWlsIGZpbGUgbmFtZSAgKi9cbiAgdGh1bWJuYWlsOiBzdHJpbmdcbiAgZ2lmVGh1bWJuYWlsOiBzdHJpbmcgLy8gc2NyZWVuIGdyb3VwIGhhcyBnaWZcbiAgdGh1bWJuYWlsV2lkdGg6IG51bWJlclxuICB0aHVtYm5haWxIZWlnaHQ6IG51bWJlclxuICBmbGlwVGh1bWJuYWlsOiBib29sZWFuXG5cbiAgbGFiZWw/OiBzdHJpbmcgLy8gdGhlIGxhYmVsIG9mIGN1cnJlbnQgbG9jYWxlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIC8vIHRoZSBkZXNjcmlwdGlvbiBvZiBjdXJyZW50IGxvY2FsZVxuXG4gIGkxOG5MYWJlbDogeyBbbG9jYWxlOiBzdHJpbmddOiBzdHJpbmcgfVxuICBpMThuRGVzY3JpcHRpb246IHsgW2xvY2FsZTogc3RyaW5nXTogc3RyaW5nIH1cblxuICAvLyBmb3IgYXBwIHRlbXBsYXRlIG9ubHlcbiAgaXNNdWx0aXBsZVBhZ2U6IGJvb2xlYW5cbiAgaXNNYXBBd2FyZTogYm9vbGVhblxuICB0YWdzOiBUZW1wbGF0ZVRhZ1R5cGVbXVxuXG4gIC8vIFRPRE8gcmVtb212ZSB0aGVzZSBwcm9wc1xuICB3aWRnZXRJZD86IHN0cmluZ1xuICBzZWN0aW9uSWQ/OiBzdHJpbmdcbiAgcGFnZUlkPzogc3RyaW5nXG4gIHNjcmVlbkdyb3VwSWQ/OiBzdHJpbmdcbiAgdGVtcGxhdGVDcmVhdGVWZXJzaW9uPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFRlbXBsYXRlc0luZm8gPSB7IFt0ZW1wbGF0ZVR5cGUgaW4gVGVtcGxhdGVUeXBlXTogVGVtcGxhdGVbXSB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgKiBmcm9tICcuL2xpYi90ZW1wbGF0ZXMnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=