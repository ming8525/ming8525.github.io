System.register(["esri/Graphic","esri/core/Handles","esri/geometry/Point","esri/layers/GraphicsLayer","esri/request","esri/rest/geometryService","esri/rest/locator","esri/symbols/support/jsonUtils","esri/widgets/CoordinateConversion/CoordinateConversionViewModel","esri/widgets/CoordinateConversion/support/Conversion","esri/widgets/CoordinateConversion/support/Format","esri/widgets/CoordinateConversion/support/formatUtils","jimu-core","jimu-theme","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_core_Handles__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_request__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_locator__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_support_jsonUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_CoordinateConversionViewModel__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Conversion__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Format__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_formatUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_core_Handles__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_request__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_locator__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_support_jsonUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_CoordinateConversionViewModel__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Conversion__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Format__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_formatUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_core_Handles__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_request__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_locator__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_support_jsonUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_CoordinateConversionViewModel__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Conversion__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Format__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_formatUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/application/pin.svg":
/*!*****************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/pin.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M13 6.133c0 .598-.28 1.46-.825 2.51-.53 1.02-1.247 2.102-1.981 3.102A45.718 45.718 0 0 1 8 14.492a48.01 48.01 0 0 1-2.194-2.747c-.734-1-1.451-2.081-1.98-3.102C3.28 7.593 3 6.731 3 6.133 3 3.277 5.26 1 8 1s5 2.277 5 5.133m1 0c0 2.685-3.768 7.311-5.332 9.115C8.258 15.722 8 16 8 16s-.258-.279-.668-.751C5.768 13.444 2 8.817 2 6.133 2 2.746 4.686 0 8 0s6 2.746 6 6.133M10 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/setting.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/setting.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/zoom-in-window.svg":
/*!****************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/zoom-in-window.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M1 1h4.5v1H2.707l3.647 3.646-.708.708L2 2.707V5.5H1zm14 14h-4.5v-1h2.793l-3.647-3.646.707-.708L14 13.293V10.5h1zM1 10.5V15h4.5v-1H2.707l3.647-3.646-.708-.708L2 13.293V10.5zM15 1v4.5h-1V2.707l-3.646 3.647-.708-.708L13.293 2H10.5V1zm-1 1\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/duplicate.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/duplicate.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M1.5 11a.5.5 0 0 0 .5-.5V2h8.5a.5.5 0 0 0 0-1H2a1 1 0 0 0-1 1v8.5a.5.5 0 0 0 .5.5M5 4h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 1v9h9V5z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/reset.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/reset.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M14.938 8A7 7 0 0 1 1.01 9H0a8.001 8.001 0 0 0 15.938-1A8 8 0 0 0 1.02 3.98L1 .702a.5.5 0 1 0-1 .006L.031 5.9l5.128-.826a.5.5 0 0 0-.16-.987L1.819 4.6A7 7 0 0 1 14.938 8\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/pin.tsx":
/*!*************************************************!*\
  !*** ./jimu-icons/outlined/application/pin.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PinOutlined: () => (/* binding */ PinOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_pin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/pin.svg */ "./jimu-icons/svg/outlined/application/pin.svg");
/* harmony import */ var _svg_outlined_application_pin_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_pin_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const PinOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_pin_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/setting.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/application/setting.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingOutlined: () => (/* binding */ SettingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/setting.svg */ "./jimu-icons/svg/outlined/application/setting.svg");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SettingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/zoom-in-window.tsx":
/*!************************************************************!*\
  !*** ./jimu-icons/outlined/directional/zoom-in-window.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomInWindowOutlined: () => (/* binding */ ZoomInWindowOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_zoom_in_window_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/zoom-in-window.svg */ "./jimu-icons/svg/outlined/directional/zoom-in-window.svg");
/* harmony import */ var _svg_outlined_directional_zoom_in_window_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_zoom_in_window_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ZoomInWindowOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_zoom_in_window_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/close.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/close.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseOutlined: () => (/* binding */ CloseOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const CloseOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/duplicate.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/editor/duplicate.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DuplicateOutlined: () => (/* binding */ DuplicateOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_duplicate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/duplicate.svg */ "./jimu-icons/svg/outlined/editor/duplicate.svg");
/* harmony import */ var _svg_outlined_editor_duplicate_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_duplicate_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const DuplicateOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_duplicate_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/reset.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/reset.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetOutlined: () => (/* binding */ ResetOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/reset.svg */ "./jimu-icons/svg/outlined/editor/reset.svg");
/* harmony import */ var _svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ResetOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/coordinate-control/components/address-utils.ts":
/*!*****************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/coordinate-control/components/address-utils.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addressToLocations: () => (/* binding */ addressToLocations),
/* harmony export */   fetchSuggestion: () => (/* binding */ fetchSuggestion),
/* harmony export */   generateAddressFormat: () => (/* binding */ generateAddressFormat),
/* harmony export */   getLocationForSuggestion: () => (/* binding */ getLocationForSuggestion)
/* harmony export */ });
/* harmony import */ var esri_widgets_CoordinateConversion_support_Format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/widgets/CoordinateConversion/support/Format */ "esri/widgets/CoordinateConversion/support/Format");
/* harmony import */ var esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/rest/locator */ "esri/rest/locator");


function addressToLocations(locatorURL, address, minCandidateScore) {
    return esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"].addressToLocations(locatorURL, {
        address: {
            SingleLine: address
        }
    }, {
        query: {}
    }).then(response => {
        response = response.sort((a, b) => { return b.score - a.score; });
        response = response.filter((item) => { return item.score >= minCandidateScore && item.location; });
        return response;
    }, err => {
        console.error(err.message);
        return [];
    });
}
function getLocationForSuggestion(locatorURL, magicKey, address, minCandidateScore) {
    return esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"].addressToLocations(locatorURL, {
        address: {
            SingleLine: address
        },
        outFields: ['*'],
        magicKey: magicKey
    }, {
        query: {}
    }).then(response => {
        response = response.sort((a, b) => { return b.score - a.score; });
        response = response.filter((item) => { return item.score >= minCandidateScore && item.location; });
        return response;
    }, err => {
        console.error(err.message);
        return [];
    });
}
const loadSuggest = (locatorURL, address, maxSuggestion) => {
    return esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"].suggestLocations(locatorURL, {
        text: address,
        location: null
    }, {
        query: {
            maxSuggestions: maxSuggestion
        }
    }).then(response => {
        return response || [];
    }, err => {
        console.error(err.message);
        return [];
    });
};
const fetchSuggestion = (geocodeURL, searchText, maxSuggestions) => {
    return loadSuggest(geocodeURL, searchText, maxSuggestions).then(res => {
        let searchSuggestion = [];
        res.forEach((addrInfo, index) => {
            const address = addrInfo.text;
            if (address && !checkIsSuggestionRepeated(searchSuggestion, address)) {
                const layerSuggestion = {
                    suggestion: address,
                    magicKey: addrInfo === null || addrInfo === void 0 ? void 0 : addrInfo.magicKey
                };
                searchSuggestion.push(layerSuggestion);
            }
        });
        searchSuggestion = uniqueJson(searchSuggestion, 'suggestion');
        const suggestion = {
            suggestionItem: searchSuggestion.splice(0, maxSuggestions)
        };
        return Promise.resolve(suggestion);
    }).catch((error) => {
        return Promise.reject(error);
    });
};
function checkIsSuggestionRepeated(searchSuggestion, suggestionRecord) {
    //Checks if the suggestion is repeated or not
    return searchSuggestion.filter(suggestion => {
        return suggestionRecord === (suggestion === null || suggestion === void 0 ? void 0 : suggestion.suggestion);
    }).length > 0;
}
//De-duplicate for object or Array
const uniqueJson = (jsonArr, key) => {
    const result = jsonArr[0] ? [jsonArr[0]] : [];
    for (let i = 1; i < jsonArr.length; i++) {
        const item = jsonArr[i];
        let repeat = false;
        for (let j = 0; j < result.length; j++) {
            if (item[key] === result[j][key]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
};
function generateAddressFormat(locatorURL, minCandidateScore, displayFullAddress) {
    const newFormat = new esri_widgets_CoordinateConversion_support_Format__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: 'address',
        getConversionStrategy: () => {
            return 'server';
        },
        conversionInfo: {
            // Define a convert function
            // Point -> Position
            // @ts-expect-error
            convert: (point) => {
                const promise = new Promise((resolve, reject) => {
                    if (esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                        return esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"].locationToAddress(locatorURL, {
                            location: point
                        }, {
                            query: {}
                        }).then(response => {
                            var _a, _b;
                            let updatedAddress = '';
                            if (response === null || response === void 0 ? void 0 : response.address) {
                                updatedAddress = response.address;
                                if (displayFullAddress && response.address === ((_a = response.attributes) === null || _a === void 0 ? void 0 : _a.PlaceName) && ((_b = response.attributes) === null || _b === void 0 ? void 0 : _b.LongLabel)) {
                                    updatedAddress = response.attributes.LongLabel;
                                }
                            }
                            resolve({
                                coordinate: (response === null || response === void 0 ? void 0 : response.score) >= minCandidateScore ? updatedAddress : '',
                                location: point
                            });
                        }, () => {
                            resolve({
                                coordinate: '',
                                location: point
                            });
                        });
                    }
                    else {
                        resolve({
                            coordinate: '',
                            location: point
                        });
                    }
                });
                return promise;
            },
            // Define a reverse convert function
            // String -> Point
            // @ts-expect-error
            reverseConvert: (string) => {
                const promise = new Promise((resolve, reject) => {
                    if (esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"]) {
                        return esri_rest_locator__WEBPACK_IMPORTED_MODULE_1__["default"].addressToLocations(locatorURL, {
                            address: {
                                SingleLine: string
                            }
                        }, {
                            query: {}
                        }).then(response => {
                            if (response && response.length > 0) {
                                response = response.filter((item) => { return item.score >= minCandidateScore && item.location; });
                                response = response.sort((a, b) => { return b.score - a.score; });
                                resolve(response[0]);
                            }
                            resolve(null);
                        }, () => {
                            resolve(null);
                        });
                    }
                    else {
                        resolve(null);
                    }
                });
                return promise;
            }
        },
        // Define each segment of the coordinate
        coordinateSegments: [
            {
                alias: 'L',
                description: 'Address',
                searchPattern: /.*/
            }
        ],
        defaultPattern: 'L'
    });
    return newFormat;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/coordinate-control/components/coordinate-control.tsx":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/coordinate-control/components/coordinate-control.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoordinateControl: () => (/* binding */ CoordinateControl),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _address_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-utils */ "./jimu-ui/advanced/lib/coordinate-control/components/address-utils.ts");
/* harmony import */ var _coordinate_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordinate-utils */ "./jimu-ui/advanced/lib/coordinate-control/components/coordinate-utils.ts");
/* harmony import */ var esri_core_Handles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/core/Handles */ "esri/core/Handles");
/* harmony import */ var esri_widgets_CoordinateConversion_support_Conversion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/widgets/CoordinateConversion/support/Conversion */ "esri/widgets/CoordinateConversion/support/Conversion");
/* harmony import */ var esri_widgets_CoordinateConversion_CoordinateConversionViewModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/widgets/CoordinateConversion/CoordinateConversionViewModel */ "esri/widgets/CoordinateConversion/CoordinateConversionViewModel");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_symbols_support_jsonUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/symbols/support/jsonUtils */ "esri/symbols/support/jsonUtils");
/* harmony import */ var esri_widgets_CoordinateConversion_support_formatUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esri/widgets/CoordinateConversion/support/formatUtils */ "esri/widgets/CoordinateConversion/support/formatUtils");
/* harmony import */ var esri_rest_geometryService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! esri/rest/geometryService */ "esri/rest/geometryService");
/* harmony import */ var esri_request__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! esri/request */ "esri/request");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _point_sym_image_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./point-sym-image-data */ "./jimu-ui/advanced/lib/coordinate-control/components/point-sym-image-data.ts");
/* harmony import */ var jimu_icons_outlined_application_pin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jimu-icons/outlined/application/pin */ "./jimu-icons/outlined/application/pin.tsx");
/* harmony import */ var jimu_icons_outlined_editor_duplicate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jimu-icons/outlined/editor/duplicate */ "./jimu-icons/outlined/editor/duplicate.tsx");
/* harmony import */ var jimu_icons_outlined_directional_zoom_in_window__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jimu-icons/outlined/directional/zoom-in-window */ "./jimu-icons/outlined/directional/zoom-in-window.tsx");
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var jimu_icons_outlined_editor_reset__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jimu-icons/outlined/editor/reset */ "./jimu-icons/outlined/editor/reset.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */ // <-- make sure to include the jsx pragma






















//Constants
const LEFT_TO_RIGHT_MARK = '‎';
const DEGREE_SYMBOL = `°${LEFT_TO_RIGHT_MARK}`;
const DEFAULT_COORDINATE = 'dd';
const DEFAULT_FORMAT = 'Y°N, X°E';
const LOCATOR_URL = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer';
const MIN_CANDIDATE_SCORE = 100;
const MAX_SUGGESTIONS = 6;
const GEOMETRY_SERVICE_URL = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getGeometryService();
const ZOOM_SCALE = 50000;
const DEFAULT_POINT_SYMBOL = {
    type: 'esriPMS',
    angle: 0,
    xoffset: 2,
    yoffset: 8,
    contentType: 'image/png',
    /* eslint-disable */
    imageData: _point_sym_image_data__WEBPACK_IMPORTED_MODULE_15__.DEF_POINT_SYM_IMAGE_DATA,
    url: 'https://static.arcgis.com/images/Symbols/Basic/BlueShinyPin.png',
    height: 24,
    width: 24
};
class _CoordinateControl extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a;
        super(props);
        this._inputTextbox = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this._copyInputTextbox = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.getSuggestionsTimer = null;
        this.componentDidMount = () => {
            //On widget load set focus to input coordinate textbox
            this._inputTextbox.current.focus();
            this._isMounted = true;
            if (!this.state.coordinateVM) {
                this.validateGeocodeUrl();
                this.createAPIWidget();
            }
        };
        this.validateGeocodeUrl = () => {
            //check whether suggest capabilities available
            this.validateGeocodeUrlForSuggestion(this.state.locatorUrl).then((canSuggest) => {
                this.setState({
                    canSuggest: canSuggest
                });
            });
        };
        this.validateGeocodeUrlForSuggestion = (value) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                try {
                    (0,esri_request__WEBPACK_IMPORTED_MODULE_13__["default"])(value, {
                        query: {
                            f: 'json'
                        },
                        responseType: 'json'
                    }).then((result) => {
                        var _a;
                        let canSuggest = false;
                        const suggestResult = result;
                        //validate geocode url with the availability of suggest capabilities
                        if ((_a = suggestResult === null || suggestResult === void 0 ? void 0 : suggestResult.data) === null || _a === void 0 ? void 0 : _a.capabilities.includes('Suggest')) {
                            canSuggest = true;
                        }
                        resolve(canSuggest);
                    }, (err) => {
                        console.error(err);
                        resolve(false);
                    });
                }
                catch (e) {
                    console.error(e);
                    resolve(false);
                }
            });
        });
        this.componentDidUpdate = (prevPops, prevState) => {
            var _a, _b, _c, _d, _e;
            //Create CVM and drawing layer if not available or if map view is changed
            if (!this.state.coordinateVM) {
                this.createAPIWidget();
            }
            else if ((prevPops.jimuMapview && this.props.jimuMapview === null) || (this.props.jimuMapview && ((_a = this.props.jimuMapview) === null || _a === void 0 ? void 0 : _a.id) !== ((_b = prevPops.jimuMapview) === null || _b === void 0 ? void 0 : _b.id))) {
                //prev map was configured and now removed then update the drawing graphics layer
                if (this.drawingLayer) {
                    this.drawingLayer.removeAll();
                }
                //if map view is changed destroy prev drawing layer and CVM, since the map SR could be different
                //and the after changing map the drawing and conversions should be shown on new map
                (_c = this.state.coordinateVM) === null || _c === void 0 ? void 0 : _c.destroy();
                (_d = this.drawingLayer) === null || _d === void 0 ? void 0 : _d.destroy();
                (_e = this._handles) === null || _e === void 0 ? void 0 : _e.removeAll();
                this.onClearInputClick();
                //once we set coordinateVM, control will again come into componentDidUpdate and as coordinateVM is null it will call createAPIWidget
                this.setState({ mapPointActive: false, coordinateVM: null });
            }
            else if (this.props.defaultCoordinate !== prevPops.defaultCoordinate || this.props.defaultFormat !== prevPops.defaultFormat) {
                //if input settings are changed update defaultCoords & defFormat,
                //if default format prop is not passed then set the default formats for the selected coordinates
                //also call onInputSettingsOkClicked which will take of updating UI according to selected Coordinate & format
                const defCoords = this.props.defaultCoordinate ? this.props.defaultCoordinate : DEFAULT_COORDINATE;
                const selectedItem = this.state.supportedFormats.find(i => i.name === defCoords);
                this.setState({
                    defaultCoords: selectedItem.name,
                    defFormat: this.props.defaultFormat ? this.props.defaultFormat : selectedItem.defaultPattern
                }, () => {
                    this.onInputSettingsOkClicked();
                });
            }
            else if (this.drawingLayer && this.drawingLayer.graphics.length > 0 &&
                this.props.defaultPointSymbol !== prevPops.defaultPointSymbol) {
                this.setState({
                    defPointSymbol: this.props.defaultPointSymbol
                }, () => {
                    //If default symbol is updated, update it on the layer (for builder nad Live mode)
                    const drawnGraphic = this.drawingLayer.graphics.getItemAt(0);
                    const pointSymbol = this.state.defPointSymbol;
                    drawnGraphic.symbol = esri_symbols_support_jsonUtils__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(pointSymbol);
                });
            }
            //check if the geocode service url and number of max suggestions changes from config
            if (prevPops.locatorURL && prevPops.locatorURL !== this.props.locatorURL) {
                //clear previous input on locator url change
                this.onClearInputClick();
                //update locator url in the statw
                this.setState({
                    locatorUrl: this.props.locatorURL
                }, () => {
                    var _a;
                    //validate locator url
                    this.validateGeocodeUrl();
                    //update the address conversion with the new locator url
                    const conversions = (_a = this.state.coordinateVM) === null || _a === void 0 ? void 0 : _a.conversions;
                    if (conversions) {
                        const addressFormat = (0,_address_utils__WEBPACK_IMPORTED_MODULE_2__.generateAddressFormat)(this.state.locatorUrl, this.state.minimumCandidateScore, this.state.displayFullAddress);
                        conversions.forEach((conversionItem, index) => {
                            if (conversionItem.format.name === 'address') {
                                conversionItem.format = addressFormat;
                            }
                        });
                    }
                });
            }
            else if (prevPops.maxSuggestions !== this.props.maxSuggestions) {
                this.setState({
                    maximumSuggestions: this.props.maxSuggestions
                });
                const inputText = this.getCleanInput(this.state.inputValue);
                this.displaySuggestionList(inputText);
            }
            //check if the display full address changed in config
            if ((prevPops === null || prevPops === void 0 ? void 0 : prevPops.displayFullAddress) !== this.props.displayFullAddress) {
                this.setState({
                    displayFullAddress: this.props.displayFullAddress
                }, () => {
                    var _a;
                    //update the address conversion with the new locator url
                    const conversions = (_a = this.state.coordinateVM) === null || _a === void 0 ? void 0 : _a.conversions;
                    if (conversions) {
                        const addressFormat = (0,_address_utils__WEBPACK_IMPORTED_MODULE_2__.generateAddressFormat)(this.state.locatorUrl, this.state.minimumCandidateScore, this.state.displayFullAddress);
                        conversions.forEach((conversionItem, index) => {
                            if (conversionItem.format.name === 'address') {
                                conversionItem.format = addressFormat;
                            }
                        });
                    }
                    if (this.state.inputValue !== '') {
                        this.showConversion(this.location, false);
                    }
                });
            }
        };
        this.componentWillUnmount = () => {
            this._isMounted = false;
            //remove previously drawn graphics
            if (this.drawingLayer) {
                this.drawingLayer.removeAll();
                this.drawingLayer.destroy();
            }
            //this will reset the cursor to default
            this._displayDefaultCursor();
        };
        this.createAPIWidget = () => {
            if (!this.state.locatorUrl) {
                return;
            }
            if (this.props.jimuMapview && this.props.jimuMapview.view) {
                //create new graphicsLayer to show selected location on map
                this.drawingLayer = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_9__["default"]({
                    listMode: 'hide'
                });
                //add layer on the map view
                this.props.jimuMapview.view.map.addMany([this.drawingLayer]);
                //To show conversions on map click
                this._handles.add(this.props.jimuMapview.view.on('click', (event) => {
                    if (this.state.mapPointActive) {
                        if (this.props.deactivateMapTool) {
                            this.setState({
                                mapPointActive: !this.state.mapPointActive
                            });
                            this._displayDefaultCursor();
                        }
                        this.drawingLayer.removeAll();
                        if (event.mapPoint) {
                            this.showConversion(event.mapPoint, false);
                        }
                    }
                }));
                //If multiple widgets are configured, and both have mapPoint tool active,
                //and one of the widget deactivates mapPoint tool, then cross hair cursor is not shown for other widget
                //so on point move check if mapPoint tool is active then _displayMapPointCursor
                this._handles.add(this.props.jimuMapview.view.on('pointer-move', (event) => {
                    if (this.state.mapPointActive) {
                        if (this._isMounted) {
                            this._displayMapPointCursor();
                        }
                    }
                }));
            }
            if (!this.state.coordinateVM) {
                const cVM = new esri_widgets_CoordinateConversion_CoordinateConversionViewModel__WEBPACK_IMPORTED_MODULE_6__["default"]({
                    view: this.props.jimuMapview ? this.props.jimuMapview.view : null
                });
                cVM.watch('messages', () => {
                    if (this._isMounted) {
                        setTimeout(() => {
                            if (!this._isMounted) {
                                return;
                            }
                            //Call the pause method to avoid reverse geocode request on map mouse move
                            cVM.pause();
                            const allFormats = esri_widgets_CoordinateConversion_support_formatUtils__WEBPACK_IMPORTED_MODULE_11__["default"].generateDefaultFormats(cVM.messages);
                            cVM.conversions.removeAll();
                            const allSupportedFormats = [];
                            const addressFormat = {
                                name: 'address',
                                label: this.nls('address'),
                                defaultPattern: '',
                                currentPattern: '',
                                enabled: true,
                                isCustom: true
                            };
                            allSupportedFormats.push(addressFormat);
                            //push address format
                            const addressFormatConversion = new esri_widgets_CoordinateConversion_support_Conversion__WEBPACK_IMPORTED_MODULE_5__["default"]({
                                format: (0,_address_utils__WEBPACK_IMPORTED_MODULE_2__.generateAddressFormat)(this.state.locatorUrl, this.state.minimumCandidateScore, this.state.displayFullAddress)
                            });
                            cVM.conversions.add(addressFormatConversion);
                            allFormats.forEach((defaultFormat) => {
                                if (defaultFormat.name !== 'basemap') {
                                    const newConversion = new esri_widgets_CoordinateConversion_support_Conversion__WEBPACK_IMPORTED_MODULE_5__["default"]({ format: defaultFormat });
                                    cVM.conversions.add(newConversion);
                                    const newSupportedFormat = {
                                        name: defaultFormat.name,
                                        label: this.nls(defaultFormat.name),
                                        defaultPattern: defaultFormat.defaultPattern,
                                        currentPattern: defaultFormat.currentPattern,
                                        enabled: true,
                                        isCustom: true
                                    };
                                    allSupportedFormats.push(newSupportedFormat);
                                }
                            });
                            allSupportedFormats.sort((a, b) => a.label.localeCompare(b.label));
                            this.setState({
                                coordinateVM: cVM,
                                supportedFormats: allSupportedFormats
                            }, () => {
                                var _a, _b;
                                if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.getSupportedFormats) {
                                    (_b = this.props) === null || _b === void 0 ? void 0 : _b.getSupportedFormats(this.state.supportedFormats);
                                }
                            });
                        }, 400);
                    }
                });
            }
        };
        this.nls = (id) => {
            const messages = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
            //for unit testing no need to mock intl we can directly use default en msg
            if (this.props.intl && this.props.intl.formatMessage) {
                return this.props.intl.formatMessage({ id: id, defaultMessage: messages[id] ? messages[id] : id });
            }
            else {
                return messages[id] ? messages[id] : id;
            }
        };
        this.onMapPointClick = () => {
            this.setState({
                mapPointActive: !this.state.mapPointActive,
                isAddressOptionsPopupOpen: false
            }, () => {
                if (this.state.mapPointActive) {
                    this._displayMapPointCursor();
                }
                else {
                    this._displayDefaultCursor();
                }
            });
        };
        this._displayMapPointCursor = () => {
            if (this.props.jimuMapview && this.props.jimuMapview.view) {
                if (this.props.jimuMapview.view && this.props.jimuMapview.view.container &&
                    this.props.jimuMapview.view.container.style.cursor !== 'crosshair') {
                    this.props.jimuMapview.view.container.style.cursor = 'crosshair';
                }
            }
        };
        this._displayDefaultCursor = () => {
            if (this.props.jimuMapview && this.props.jimuMapview.view) {
                if (this.props.jimuMapview.view && this.props.jimuMapview.view.container &&
                    this.props.jimuMapview.view.container.style.cursor !== null) {
                    this.props.jimuMapview.view.container.style.cursor = 'default';
                }
            }
        };
        this.onCopyClick = () => {
            const inputLabel = this.props.inputLabelString ? this.props.inputLabelString : '';
            //clear prev selection
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
            //create list of input and all output values
            //add current input label format and value
            let inputCoord = '(' + this.nls(this.currentCoordinateFormat) + ')\r\n' + this.state.inputValue;
            if (inputLabel !== '') {
                inputCoord = inputLabel + inputCoord;
            }
            const allCoords = this.props.copyAllList ? inputCoord + '\r\n\n' + this.props.copyAllList.join('\r\n\n') : inputCoord;
            //copy input and all output values
            this._copyInputTextbox.current.value = allCoords;
            this._copyInputTextbox.current.select();
            document.execCommand('copy');
            //disable it so that it will not get focus and will not read out the contents in screen reader
            //enable it back after the timeout
            this._copyInputTextbox.current.disabled = true;
            this.setState({
                isCopyMessageOpen: true
            });
            setTimeout(() => {
                //Remove the existing selection
                if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                }
                this.setState({
                    isCopyMessageOpen: false
                });
                this._copyInputTextbox.current.disabled = false;
            }, 500);
        };
        this.onZoomClick = () => {
            //zoom to the selected loaction, which will be the only graphic in drawingLayer
            if (this.drawingLayer && this.drawingLayer.graphics.length > 0) {
                const selectedLocationGraphic = this.drawingLayer.graphics.getItemAt(0);
                this.props.jimuMapview.view.goTo({
                    center: selectedLocationGraphic.geometry,
                    scale: this.props.zoomScale ? this.props.zoomScale : ZOOM_SCALE
                });
            }
        };
        this.onSettingsClick = () => {
            this.setState({
                isInputSettingsPopupOpen: !this.state.isInputSettingsPopupOpen,
                isAddressOptionsPopupOpen: false
            });
        };
        this.onInputSettingsOkClicked = () => {
            if (this.state.defaultCoords !== 'address' && this.state.defFormat === '') {
                return;
            }
            this.setState({
                isInputSettingsPopupOpen: false
            });
            this.currentCoordinateFormat = this.state.defaultCoords;
            //update current pattern
            //eslint-disable-next-line
            this.state.coordinateVM.conversions.some((con) => {
                if (con.format.name === this.state.defaultCoords) {
                    con.format.currentPattern = this.state.defFormat;
                    return true;
                }
            });
            //if value is valid
            if (this.state.inputValue !== '') {
                this.showConversion(this.location, false);
            }
        };
        this.onInputSettingsCancelClicked = () => {
            //close the input settings and set the coordinate and format to the current selected format
            //get current pattern
            let currentPattern = '';
            //eslint-disable-next-line
            this.state.coordinateVM.conversions.some((con) => {
                if (con.format.name === this.currentCoordinateFormat) {
                    currentPattern = con.format.currentPattern;
                    return true;
                }
            });
            this.setState({
                isInputSettingsPopupOpen: false,
                defaultCoords: this.currentCoordinateFormat,
                defFormat: currentPattern
            });
        };
        this.onInputCoordinateChange = (event) => {
            if (event.target && event.target.value.trim() === '') {
                this.setState({
                    inputValue: '',
                    disableCopyZoom: true
                });
                if (this.getSuggestionsTimer) {
                    clearInterval(this.getSuggestionsTimer);
                }
                //hide the suggestion list if empty input
                setTimeout(() => {
                    if (this.state.isAddressOptionsPopupOpen) {
                        this.setState({
                            isAddressOptionsPopupOpen: false
                        });
                    }
                }, 500);
            }
            else {
                this.setState({
                    inputValue: event.target.value
                }, () => {
                    const inputText = this.getCleanInput(this.state.inputValue);
                    this.displaySuggestionList(inputText);
                });
            }
        };
        this.displaySuggestionList = (inputText) => {
            (0,_coordinate_utils__WEBPACK_IMPORTED_MODULE_3__.getCoordinateType)(inputText).then((itm) => {
                if (itm && itm.length > 0) {
                    if (this.state.isAddressOptionsPopupOpen) {
                        this.setState({
                            isAddressOptionsPopupOpen: false
                        });
                    }
                }
                else {
                    if (this.getSuggestionsTimer) {
                        clearInterval(this.getSuggestionsTimer);
                    }
                    this.getSuggestionsTimer = setTimeout(() => {
                        if (this.state.canSuggest) {
                            // get all the addresses suggestions and show it with the help of value, label and magic key
                            (0,_address_utils__WEBPACK_IMPORTED_MODULE_2__.fetchSuggestion)(this.state.locatorUrl, inputText, this.state.maximumSuggestions).then(suggestion => {
                                const addressOptions = [];
                                suggestion.suggestionItem.forEach((addrInfo, index) => {
                                    const addrOption = {
                                        value: addrInfo.suggestion + index,
                                        label: addrInfo.suggestion,
                                        magicKey: addrInfo.magicKey,
                                        mapPoint: null
                                    };
                                    addressOptions.push(addrOption);
                                });
                                if (addressOptions.length > 0) {
                                    this.setState({
                                        selectedAddress: addressOptions.length > 0 ? addressOptions[0].value : '',
                                        addressOptions: addressOptions,
                                        isAddressOptionsPopupOpen: true
                                    });
                                }
                                else {
                                    this.setState({
                                        addressOptions: [],
                                        isAddressOptionsPopupOpen: false
                                    });
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                        }
                    }, 300);
                }
            });
        };
        this.showParseCoordinateError = () => {
            this.setState({
                disableCopyZoom: true
            });
            this.showMessage(this.nls('errorMsgTitle'), this.nls('parseCoordinatesError'));
        };
        this.onReverseConvertComplete = (mapPoint) => {
            if (mapPoint) {
                this.showConversion(mapPoint, true);
            }
            if (this.props.processing) {
                this.props.processing(false);
            }
        };
        this.onErrorInReverseConvert = (err) => {
            this.showParseCoordinateError();
            console.error(err.message);
            if (this.props.processing) {
                this.props.processing(false);
            }
        };
        this.isValidNumber = (number) => {
            return typeof number === 'number' && isFinite(number);
        };
        this.isValidPoint = (point) => {
            return point && this.isValidNumber(point.x) && this.isValidNumber(point.y);
        };
        this.getFromGeoCoordinateString = (parameters) => {
            const { coordinate, spatialReference, formatName } = parameters;
            return esri_rest_geometryService__WEBPACK_IMPORTED_MODULE_12__["default"].fromGeoCoordinateString(GEOMETRY_SERVICE_URL, {
                strings: [coordinate],
                sr: spatialReference,
                conversionType: formatName
            })
                .then((response) => {
                const returnPoint = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]({
                    x: response[0][0],
                    y: response[0][1],
                    spatialReference
                });
                if (!this.isValidPoint(returnPoint)) {
                    throw response;
                }
                return returnPoint;
            })
                .catch((error) => {
                throw new Error(error);
            });
        };
        /**
         * Converts input text to the point from the specified format name
         * @param inputFormatName
         * @param inputText
         * @param useFormatReverseConvert
         */
        this.reverseConvertInput = (inputFormatName, inputText, useFormatReverseConvert) => {
            this.state.coordinateVM.conversions.some((con) => {
                if (inputFormatName === con.format.name) {
                    if (this.props.processing) {
                        this.props.processing(true);
                    }
                    if (useFormatReverseConvert) {
                        this.state.coordinateVM.reverseConvert(inputText, con.format).then(this.onReverseConvertComplete, this.onErrorInReverseConvert);
                    }
                    else {
                        this.getFromGeoCoordinateString({
                            coordinate: inputText,
                            spatialReference: con.format.spatialReference,
                            formatName: con.format.name
                        }).then(this.onReverseConvertComplete, this.onErrorInReverseConvert);
                    }
                    return true;
                }
                return false;
            });
        };
        /**
         * Removes Degree symbol, new line chars and extra spaces if from the input text
         * @param inputText : String
         */
        this.getCleanInput = (inputText) => {
            //remove degree symbol from the search to match the exp
            inputText = inputText.split(DEGREE_SYMBOL).join('');
            inputText = inputText.replace(/\n/g, '');
            inputText = inputText.replace(/\s+/g, ' ').trim();
            return inputText.toUpperCase();
        };
        this.getProcessedTextInput = (inputText, notation, testingMode) => {
            const coordinateTextInfo = (0,_coordinate_utils__WEBPACK_IMPORTED_MODULE_3__.processCoordTextInput)(inputText, notation, testingMode);
            if (coordinateTextInfo.prefixSuffixError && !testingMode) {
                this.showMessage('', this.nls('latLongWarningMessage'));
            }
            return coordinateTextInfo.str;
        };
        this.getCurrentFormat = () => {
            let currentFormat;
            this.state.coordinateVM.conversions.some((con) => {
                if (this.state.defaultCoords === con.format.name) {
                    currentFormat = con.format;
                    return true;
                }
                return false;
            });
            return currentFormat;
        };
        this.tryParsingFormat = (inputText, conversion) => __awaiter(this, void 0, void 0, function* () {
            var _b, _c;
            try {
                //reverse convert the input text to get mapPoint
                const mapPoint = yield this.state.coordinateVM.reverseConvert(inputText, conversion.format);
                //if map point is valid means the input text is reverseConverted in the the format
                if (mapPoint) {
                    //Same text can be reverseConverted into multiple format, to overcome the issue convert the mapPoint using same format
                    //and if the inputValue/inputText matches the conversion then consider this as valid result and return it
                    const conversions = yield this.state.coordinateVM.updateConversions([conversion], mapPoint);
                    if ((conversions === null || conversions === void 0 ? void 0 : conversions.length) > 0 &&
                        (((_b = conversions[0]) === null || _b === void 0 ? void 0 : _b.displayCoordinate) === this.state.inputValue ||
                            ((_c = conversions[0]) === null || _c === void 0 ? void 0 : _c.displayCoordinate) === inputText)) {
                        return mapPoint;
                    }
                    return null;
                }
            }
            catch (e) {
                return null;
            }
        });
        this.onInputKeyDown = (evt) => {
            if (evt.key === 'Enter') {
                if (this.getSuggestionsTimer) {
                    clearInterval(this.getSuggestionsTimer);
                }
                const inputText = this.getCleanInput(this.state.inputValue);
                (0,_coordinate_utils__WEBPACK_IMPORTED_MODULE_3__.getCoordinateType)(inputText).then((itm) => {
                    //check if input can be parsed without reverse function
                    if (itm && itm.length > 0) {
                        if (itm.length === 1) {
                            const inputFormatName = itm[0].conversionType;
                            const useFormatReverseConvert = !(inputFormatName === 'dd' || inputFormatName === 'ddm' || inputFormatName === 'dms');
                            const coordText = this.getProcessedTextInput(inputText, itm[0], false);
                            this.reverseConvertInput(inputFormatName, coordText, useFormatReverseConvert);
                        }
                        else {
                            this.confirmInputNotationFromUser(itm);
                        }
                    }
                    else {
                        if (this.props.processing) {
                            this.props.processing(true);
                        }
                        (0,_address_utils__WEBPACK_IMPORTED_MODULE_2__.addressToLocations)(this.state.locatorUrl, inputText, this.state.minimumCandidateScore).then((addressResult) => {
                            if (addressResult && addressResult.length > 0) {
                                if (addressResult.length === 1) {
                                    this.setState({
                                        addressOptions: [],
                                        isAddressOptionsPopupOpen: false
                                    }, () => {
                                        this.showConversion(addressResult[0].location, true);
                                    });
                                }
                                else {
                                    const addressOptions = [];
                                    //Get only the valid conversion results
                                    addressResult.forEach((addrInfo, index) => {
                                        const addrOption = {
                                            value: addrInfo.address + index,
                                            label: addrInfo.address,
                                            mapPoint: addrInfo.location
                                        };
                                        addressOptions.push(addrOption);
                                    });
                                    this.setState({
                                        selectedAddress: addressOptions.length > 0 ? addressOptions[0].value : '',
                                        addressOptions: addressOptions,
                                        isAddressOptionsPopupOpen: true
                                    });
                                }
                            }
                            else {
                                if (this.state.defaultCoords !== 'address') {
                                    const reverseFormatPromises = [];
                                    this.state.coordinateVM.conversions.forEach((con) => {
                                        if (con.format.name !== 'address') {
                                            reverseFormatPromises.push(this.tryParsingFormat(inputText, con));
                                        }
                                    });
                                    //try parsing in all conversion and if valid result is found perform reverseComplete operation on it
                                    if (reverseFormatPromises.length > 0) {
                                        Promise.all(reverseFormatPromises).then((values) => {
                                            let resultFound = false;
                                            values.some((mapPoint) => {
                                                if (mapPoint) {
                                                    resultFound = true;
                                                    this.onReverseConvertComplete(mapPoint);
                                                    return true;
                                                }
                                                return false;
                                            });
                                            //if no result found show error msg
                                            if (!resultFound) {
                                                this.showParseCoordinateError();
                                            }
                                        }, (errResult) => {
                                            this.showParseCoordinateError();
                                        });
                                    }
                                    else {
                                        this.showParseCoordinateError();
                                    }
                                }
                                else {
                                    this.showParseCoordinateError();
                                }
                            }
                            if (this.props.processing) {
                                this.props.processing(false);
                            }
                        });
                    }
                });
            }
        };
        this.confirmInputNotationFromUser = (itm) => {
            const confirmFormats = [];
            itm.forEach((itmInfo) => {
                const newSupportedFormat = {
                    value: itmInfo.name,
                    label: this.nls(itmInfo.notationType),
                    notation: itmInfo
                };
                confirmFormats.push(newSupportedFormat);
            });
            this.setState({
                addressOptions: [],
                isAddressOptionsPopupOpen: false,
                confirmedInputNotation: confirmFormats[0].value,
                inputNotationOptions: confirmFormats,
                inputNotationWarning: itm.length + ' ' + this.nls('multipleNotationLabel'),
                isConfirmInputNotationPopupOpen: true
            });
        };
        this.onSelectedAddressChange = (addressValue) => {
            this.setState({
                selectedAddress: addressValue
            }, () => {
                if (this.state.selectedAddress) {
                    //eslint-disable-next-line
                    this.state.addressOptions.some((addrOption) => {
                        if (addrOption.value === this.state.selectedAddress) {
                            if (addrOption.magicKey) {
                                // get the location for selected address/suggestion and set the label of it in input box and show location on map
                                (0,_address_utils__WEBPACK_IMPORTED_MODULE_2__.getLocationForSuggestion)(this.state.locatorUrl, addrOption.magicKey, addressValue, this.state.minimumCandidateScore).then((addressResult) => {
                                    this.setState({
                                        inputValue: addrOption.label
                                    });
                                    this.showConversion(addressResult[0].location, true);
                                });
                            }
                            else if (addrOption.mapPoint) {
                                this.showConversion(addrOption.mapPoint, true);
                            }
                            return true;
                        }
                    });
                    this.setState({
                        selectedAddress: '',
                        addressOptions: [],
                        isAddressOptionsPopupOpen: false
                    });
                }
            });
        };
        this.onInputNotationChange = (evt) => {
            this.setState({
                confirmedInputNotation: evt.target.value
            });
        };
        this.onConfirmInputOkClicked = () => {
            if (this.state.confirmedInputNotation) {
                const inputText = this.getCleanInput(this.state.inputValue);
                let selectedNotation;
                //eslint-disable-next-line
                this.state.inputNotationOptions.some((item) => {
                    if (item.value === this.state.confirmedInputNotation) {
                        selectedNotation = item.notation;
                        return true;
                    }
                });
                const coordText = this.getProcessedTextInput(inputText, selectedNotation, false);
                this.reverseConvertInput(selectedNotation.conversionType, coordText, false);
                this.setState({
                    confirmedInputNotation: '',
                    inputNotationOptions: [],
                    isConfirmInputNotationPopupOpen: false
                });
            }
        };
        this.onConfirmInputCancelClicked = () => {
            this.setState({
                confirmedInputNotation: '',
                inputNotationOptions: [],
                isConfirmInputNotationPopupOpen: false
            });
        };
        this.onClearInputClick = () => {
            //remove previously drawn graphics
            if (this.drawingLayer) {
                this.drawingLayer.removeAll();
            }
            //empty the text input
            this.setState({
                inputValue: '',
                disableCopyZoom: true,
                isAddressOptionsPopupOpen: false
            }, () => {
                if (this.props.onClear) {
                    this.props.onClear();
                }
                this._inputTextbox.current.focus();
            });
        };
        this.onDefaultCoordsChange = (evt) => {
            this.setState({
                defaultCoords: evt.target.value
            }, () => {
                this.resetToDefaultPattern(this.state.defaultCoords);
            });
        };
        this.onFormatChange = (e) => {
            const value = e.target.value;
            this.setState({
                defFormat: value
            });
        };
        this.onFormatAcceptValue = (value) => {
            this.setState({
                defFormat: value.trim()
            });
        };
        this.onResetButtonClick = () => {
            const selectedValue = this.state.defaultCoords;
            this.resetToDefaultPattern(selectedValue);
        };
        this.resetToDefaultPattern = (selectedValue) => {
            const selectedItem = this.state.supportedFormats.find(i => i.name === selectedValue);
            if (selectedItem) {
                this.setState({
                    defFormat: selectedItem.defaultPattern
                });
            }
        };
        this.getProjectedLocation = (location, sr) => {
            //eslint-disable-next-line
            const formatIndex = this.state.coordinateVM.formats.findIndex((formatItem) => {
                if (formatItem.name === 'dd') {
                    return true;
                }
            });
            const promise = new Promise((resolve, reject) => {
                if (formatIndex > -1 && sr) {
                    const format = this.state.coordinateVM.formats.getItemAt(formatIndex);
                    format._project(location, sr).then((projectedLocation) => {
                        resolve(projectedLocation);
                    });
                }
                else {
                    resolve(location);
                }
            });
            return promise;
        };
        this.showLocationOnMap = (selectedLocation, centerToLocation) => {
            if (this.drawingLayer && this.props.jimuMapview && this.props.jimuMapview.view) {
                //project the location in map spatial reference
                this.getProjectedLocation(selectedLocation, this.props.jimuMapview.view.spatialReference).then((location) => {
                    this.drawingLayer.removeAll();
                    const pointGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_8__["default"]({
                        geometry: location,
                        symbol: esri_symbols_support_jsonUtils__WEBPACK_IMPORTED_MODULE_10__["default"].fromJSON(this.state.defPointSymbol)
                    });
                    this.drawingLayer.add(pointGraphic);
                    if (centerToLocation) {
                        this.props.jimuMapview.view.set({ center: location });
                    }
                });
            }
        };
        this.showConversion = (location, centerToLocation) => {
            //store the current selected location, which can be used when changing input settings
            this.location = location;
            //first show selected location on map
            this.showLocationOnMap(location, centerToLocation);
            if (this.state.coordinateVM) {
                this.setState({
                    disableCopyZoom: false
                });
                //Only convert the selected location into currently selected input format
                const selectedConversion = this.state.coordinateVM.conversions.filter((con) => {
                    return con.format.name === this.currentCoordinateFormat || con.format.name === 'dd';
                });
                //update value in input based on selected input format setting and then emit conversion complete event
                this.state.coordinateVM.updateConversions(selectedConversion.toArray(), location).then((results) => {
                    let ddLocation = null;
                    let inputVal = '';
                    results.forEach((cVMInfo) => {
                        if (cVMInfo.format.name === 'dd') {
                            ddLocation = cVMInfo.position.location;
                        }
                        if (cVMInfo.format.name === this.currentCoordinateFormat) {
                            inputVal = cVMInfo.displayCoordinate ? cVMInfo.displayCoordinate : '';
                            //in case of address as input format and returned address is empty show 'No Address Found' msg in the input box
                            if (this.currentCoordinateFormat === 'address' && inputVal === '') {
                                inputVal = this.nls('noAddressFoundMsg');
                            }
                        }
                    });
                    this.setState({
                        inputValue: inputVal
                    }, () => {
                        const conversionResult = {
                            formattedCoordinateText: inputVal,
                            mapCoordinate: location,
                            ddCoordinate: ddLocation
                        };
                        //for output coordinates format
                        this.props.onConversionComplete(conversionResult);
                    });
                }, (err) => {
                    console.log(err.message);
                });
            }
        };
        this.onAddConversion = () => {
            this.setState({
                isAddConversionPopupOpen: true
            });
        };
        this.onAddPopperClose = () => {
            this.setState({
                isAddConversionPopupOpen: false
            });
        };
        /**
         * Display's the message in the popup. Can be used to show errors, information and warning messages
         * @param title : string - Popup title
         * @param msg  : string - Text Message
         */
        this.showMessage = (title, msg) => {
            this.setState({
                isErrorMsgPopupOpen: true,
                errorMsgPopupTitle: title,
                errorMsg: msg
            });
        };
        /**
         * Hide the message popup
         */
        this.hideMessage = () => {
            this.setState({
                isErrorMsgPopupOpen: false,
                errorMsgPopupTitle: '',
                errorMsg: ''
            });
        };
        /**
         * Formats value in input box to show minus sign at front in case of RTL
         * @param displayValue : string - Value to be shown in input box
         * @returns : string
         */
        this.formatDisplayCoordinate = (displayValue) => {
            if (this.isRTL && this.currentCoordinateFormat && this.currentCoordinateFormat === 'xy' &&
                displayValue && displayValue.charAt(0) === '-') {
                return displayValue.substr(1) + displayValue.substr(0, 1);
            }
            return displayValue;
        };
        this.getClearIcon = (inputValue) => {
            return inputValue.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "aria-label": this.nls('clear'), title: this.nls('clear'), onClick: this.onClearInputClick.bind(this) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_20__.CloseOutlined, { width: 14, height: 14, className: 'search-clear' })));
        };
        this.overrideInputWidthStyle = () => {
            var _a;
            const hasMap = !!((_a = this.props.jimuMapview) === null || _a === void 0 ? void 0 : _a.view);
            let widthToBeSubtracted = 29; //settings will always be shown
            if (hasMap) {
                widthToBeSubtracted += 29;
            }
            if (this.props.showCopy) {
                widthToBeSubtracted += 29;
            }
            if (this.props.showZoom && hasMap) {
                widthToBeSubtracted += 29;
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .cc-search-input {
      width: calc( 100% -  ${widthToBeSubtracted}px);
    }
    `;
        };
        this.isRTL = false;
        const appState = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
        this.isRTL = (_a = appState === null || appState === void 0 ? void 0 : appState.appContext) === null || _a === void 0 ? void 0 : _a.isRTL;
        this.state = {
            mapPointActive: false,
            isInputSettingsPopupOpen: false,
            isAddConversionPopupOpen: false,
            isCopyMessageOpen: false,
            defaultCoords: this.props.defaultCoordinate ? this.props.defaultCoordinate : DEFAULT_COORDINATE,
            defFormat: this.props.defaultFormat ? this.props.defaultFormat : DEFAULT_FORMAT,
            locatorUrl: this.props.locatorURL ? this.props.locatorURL : LOCATOR_URL,
            minimumCandidateScore: this.props.minCandidateScore ? this.props.minCandidateScore : MIN_CANDIDATE_SCORE,
            maximumSuggestions: this.props.maxSuggestions || this.props.maxSuggestions === 0 ? this.props.maxSuggestions : MAX_SUGGESTIONS,
            displayFullAddress: this.props.displayFullAddress ? this.props.displayFullAddress : false,
            defPointSymbol: this.props.defaultPointSymbol ? this.props.defaultPointSymbol : DEFAULT_POINT_SYMBOL,
            disableCopyZoom: true,
            inputValue: '',
            coordinateVM: null,
            supportedFormats: null,
            isConfirmInputNotationPopupOpen: false,
            inputNotationOptions: [],
            confirmedInputNotation: '',
            inputNotationWarning: '',
            addressOptions: [],
            selectedAddress: '',
            isAddressOptionsPopupOpen: false,
            isErrorMsgPopupOpen: false,
            errorMsgPopupTitle: '',
            errorMsg: '',
            canSuggest: true
        };
        this.currentCoordinateFormat = this.props.defaultCoordinate ? this.props.defaultCoordinate : DEFAULT_COORDINATE;
        this._handles = new esri_core_Handles__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.location = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this._isMounted = false;
    }
    render() {
        var _a, _b;
        const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(this.props.className, 'jimu-coordinate-control');
        const inputLabel = this.props.inputLabelString ? this.props.inputLabelString : '';
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classes },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { flow: 'wrap', "aria-label": inputLabel + '  (' + this.nls(this.state.defaultCoords) + ')', className: 'pl-3 pr-4' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { title: inputLabel + '  (' + this.nls(this.state.defaultCoords) + ')', className: 'jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-3 w-100 mr-0' }, inputLabel + '  (' + this.nls(this.state.defaultCoords) + ')'),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'adjust-buttons w-100 align-items-center', css: this.overrideInputWidthStyle() },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'cc-search-input' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { role: 'textbox', "aria-label": inputLabel + '  (' + this.nls(this.state.defaultCoords) + ')', size: 'sm', placeholder: this.nls('inputPlaceHolder'), onKeyDown: this.onInputKeyDown, id: 'textInput' + this.props.parentWidgetId, ref: this._inputTextbox, onChange: this.onInputCoordinateChange.bind(this), className: 'search-input', value: this.formatDisplayCoordinate(this.state.inputValue), suffix: this.getClearIcon(this.formatDisplayCoordinate(this.state.inputValue)) }),
                        this.state.isAddressOptionsPopupOpen &&
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: 'textInput' + this.props.parentWidgetId },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ListGroup, { className: 'addressListGroup p-2 shadow' }, this.state.addressOptions &&
                                    this.state.addressOptions.map((option, index) => {
                                        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ListGroupItem, { tabIndex: 0, className: 'listItem', key: index, onKeyPress: (e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    this.onSelectedAddressChange(option.value);
                                                }
                                            }, onClick: () => this.onSelectedAddressChange(option.value) }, option.label);
                                    }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, { tabIndex: -1, className: 'hidden-copy-input', ref: this._copyInputTextbox })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { role: 'button', "aria-label": this.nls('mapPoint'), title: this.nls('mapPoint'), className: ((_a = this.props.jimuMapview) === null || _a === void 0 ? void 0 : _a.view) ? 'actionButton' : 'hidden', type: 'tertiary', icon: true, size: 'sm', active: this.state.mapPointActive, onClick: this.onMapPointClick.bind(this) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_pin__WEBPACK_IMPORTED_MODULE_16__.PinOutlined, { size: '17' })),
                    this.props.showCopy &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { role: 'button', "aria-label": this.nls('copyAll'), "aria-disabled": this.state.disableCopyZoom, title: this.nls('copyAll'), className: 'actionButton', type: 'tertiary', icon: true, size: 'sm', active: this.state.isCopyMessageOpen, id: 'refCopy' + this.props.parentWidgetId, disabled: this.state.disableCopyZoom, onClick: this.onCopyClick.bind(this) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_duplicate__WEBPACK_IMPORTED_MODULE_17__.DuplicateOutlined, { size: '17' })),
                    this.props.jimuMapview && this.props.showZoom &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { role: 'button', "aria-label": this.nls('ZoomLabel'), "aria-disabled": this.state.disableCopyZoom, title: this.nls('ZoomLabel'), className: ((_b = this.props.jimuMapview) === null || _b === void 0 ? void 0 : _b.view) ? 'actionButton' : 'hidden', type: 'tertiary', icon: true, size: 'sm', disabled: this.state.disableCopyZoom, onClick: this.onZoomClick.bind(this) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_zoom_in_window__WEBPACK_IMPORTED_MODULE_18__.ZoomInWindowOutlined, { size: '17' })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { role: 'button', "aria-label": this.nls('inputSettingsTitle'), "aria-haspopup": 'dialog', title: this.nls('inputSettingsTitle'), className: 'actionButton', type: 'tertiary', icon: true, size: 'sm', active: this.state.isInputSettingsPopupOpen, onClick: this.onSettingsClick.bind(this) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_19__.SettingOutlined, { size: '17' })))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AlertPopup, { className: classes, "aria-expanded": this.state.isInputSettingsPopupOpen, isOpen: this.state.isInputSettingsPopupOpen, onClickOk: this.onInputSettingsOkClicked.bind(this), onClickClose: this.onInputSettingsCancelClicked.bind(this), title: this.nls('inputSettingsTitle') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { cellPadding: 10 },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: 'labelDimension' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, this.nls('defaultCoordinate'))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { "aria-label": this.nls('defaultCoordinate'), name: 'defaultCoords', size: 'sm', value: this.state.defaultCoords, onChange: this.onDefaultCoordsChange }, this.state.supportedFormats && this.state.supportedFormats.map((option, index) => {
                                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { tabIndex: 0, role: 'option', "aria-label": option.label, key: index, value: option.name }, option.label);
                                })))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { className: this.state.defaultCoords === 'address' ? 'hidden' : '' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: 'labelDimension' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, this.nls('coordinateFormat'))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { role: 'textbox', "aria-label": this.nls('coordinateFormat'), value: this.state.defFormat, onAcceptValue: this.onFormatAcceptValue, onChange: this.onFormatChange, size: 'sm', className: this.state.defFormat === '' ? 'invalid-value' : '' })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { role: 'button', "aria-label": this.nls('resetFormat'), title: this.nls('resetFormat'), className: 'ml-2', icon: true, type: 'tertiary', size: 'sm', onClick: this.onResetButtonClick.bind(this) },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_reset__WEBPACK_IMPORTED_MODULE_21__.ResetOutlined, { size: '16' }))))))),
            this.state.isConfirmInputNotationPopupOpen &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AlertPopup, { "aria-expanded": this.state.isConfirmInputNotationPopupOpen, isOpen: this.state.isConfirmInputNotationPopupOpen, onClickOk: this.onConfirmInputOkClicked.bind(this), onClickClose: this.onConfirmInputCancelClicked.bind(this), title: this.nls('confirmInputNotation') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-2' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, null, this.state.inputNotationWarning),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { "aria-label": this.state.inputNotationWarning, name: 'confirmedInputNotation', size: 'sm', value: this.state.confirmedInputNotation, onChange: this.onInputNotationChange }, this.state.inputNotationOptions &&
                            this.state.inputNotationOptions.map((option, index) => {
                                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { tabIndex: 0, role: 'option', "aria-label": option.label, key: index, value: option.value }, option.label);
                            })))),
            this.state.isErrorMsgPopupOpen &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AlertPopup, { "aria-expanded": this.state.isErrorMsgPopupOpen, hideCancel: true, isOpen: this.state.isErrorMsgPopupOpen, onClickOk: this.hideMessage.bind(this), onClickClose: this.hideMessage.bind(this), title: this.state.errorMsgPopupTitle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-2' }, this.state.errorMsg)),
            this.state.isCopyMessageOpen &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { open: this.state.isCopyMessageOpen, version: 0, placement: 'bottom', showArrow: true, reference: 'refCopy' + this.props.parentWidgetId, offset: [0, 0] },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'p-2' }, this.nls('copySuccessMessage'))));
    }
}
/**
 * This component is used to input coordinates in different formats.
 */
const CoordinateControl = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_14__.withStyles)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_CoordinateControl), 'CoordinateControl');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoordinateControl);


/***/ }),

/***/ "./jimu-ui/advanced/lib/coordinate-control/components/coordinate-utils.ts":
/*!********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/coordinate-control/components/coordinate-utils.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoordinateType: () => (/* binding */ getCoordinateType),
/* harmony export */   getCoordinatesType: () => (/* binding */ getCoordinatesType),
/* harmony export */   getNotations: () => (/* binding */ getNotations),
/* harmony export */   processCoordTextInput: () => (/* binding */ processCoordTextInput)
/* harmony export */ });
function processCoordTextInput(withStr, asType, testingMode) {
    const match = asType.pattern.exec(withStr);
    let northSouthPrefix, northSouthSuffix, eastWestPrefix, eastWestSuffix, latDeg, longDeg, latMin, longMin, latSec, longSec;
    let prefixSuffixError = false;
    let conversionType = asType.name;
    switch (asType.name) {
        case 'dd':
            northSouthPrefix = match[2];
            northSouthSuffix = match[7];
            eastWestPrefix = match[10];
            eastWestSuffix = match[16];
            latDeg = match[3].replace(/[,:]/, '.');
            longDeg = match[11].replace(/[,:]/, '.');
            conversionType = 'dd';
            break;
        case 'ddrev':
            northSouthPrefix = match[11];
            northSouthSuffix = match[16];
            eastWestPrefix = match[2];
            eastWestSuffix = match[8];
            latDeg = match[12].replace(/[,:]/, '.');
            longDeg = match[3].replace(/[,:]/, '.');
            conversionType = 'dd';
            break;
        case 'ddm':
            northSouthPrefix = match[2];
            northSouthSuffix = match[7];
            eastWestPrefix = match[10];
            eastWestSuffix = match[15];
            latDeg = match[3];
            latMin = match[4].replace(/[,:]/, '.');
            longDeg = match[11];
            longMin = match[12].replace(/[,:]/, '.');
            conversionType = 'ddm';
            break;
        case 'ddmrev':
            northSouthPrefix = match[10];
            northSouthSuffix = match[15];
            eastWestPrefix = match[2];
            eastWestSuffix = match[7];
            latDeg = match[11];
            latMin = match[12].replace(/[,:]/, '.');
            longDeg = match[3];
            longMin = match[4].replace(/[,:]/, '.');
            conversionType = 'ddm';
            break;
        case 'dms':
            northSouthPrefix = match[2];
            northSouthSuffix = match[8];
            eastWestPrefix = match[11];
            eastWestSuffix = match[17];
            latDeg = match[3];
            latMin = match[4];
            latSec = match[5].replace(/[,:]/, '.');
            longDeg = match[12];
            longMin = match[13];
            longSec = match[14].replace(/[,:]/, '.');
            conversionType = 'dms';
            break;
        case 'dmsrev':
            northSouthPrefix = match[11];
            northSouthSuffix = match[17];
            eastWestPrefix = match[2];
            eastWestSuffix = match[8];
            latDeg = match[12];
            latMin = match[13];
            latSec = match[14].replace(/[,:]/, '.');
            longDeg = match[3];
            longMin = match[4];
            longSec = match[5].replace(/[,:]/, '.');
            conversionType = 'dms';
            break;
    }
    //check for north/south prefix/suffix
    if (northSouthPrefix && northSouthSuffix) {
        prefixSuffixError = true;
        // eslint-disable-next-line
        if (new RegExp(/[Ss-]/).test(northSouthPrefix)) {
            northSouthPrefix = '-';
        }
        else {
            northSouthPrefix = '+';
        }
    }
    else {
        // eslint-disable-next-line
        if (northSouthPrefix && new RegExp(/[Ss-]/).test(northSouthPrefix)) {
            northSouthPrefix = '-';
        }
        else {
            // eslint-disable-next-line
            if (northSouthSuffix && new RegExp(/[Ss-]/).test(northSouthSuffix)) {
                northSouthPrefix = '-';
            }
            else {
                northSouthPrefix = '+';
            }
        }
    }
    //check for east/west prefix/suffix
    if (eastWestPrefix && eastWestSuffix) {
        prefixSuffixError = true;
        // eslint-disable-next-line
        if (new RegExp(/[Ww-]/).test(eastWestPrefix)) {
            eastWestPrefix = '-';
        }
        else {
            eastWestPrefix = '+';
        }
    }
    else {
        // eslint-disable-next-line
        if (eastWestPrefix && new RegExp(/[Ww-]/).test(eastWestPrefix)) {
            eastWestPrefix = '-';
        }
        else {
            // eslint-disable-next-line
            if (eastWestSuffix && new RegExp(/[Ww-]/).test(eastWestSuffix)) {
                eastWestPrefix = '-';
            }
            else {
                eastWestPrefix = '+';
            }
        }
    }
    switch (conversionType) {
        case 'dd':
            withStr = northSouthPrefix + latDeg + ',' + eastWestPrefix + longDeg;
            break;
        case 'ddm':
            withStr = northSouthPrefix + latDeg +
                ' ' + latMin + ',' + eastWestPrefix +
                longDeg + ' ' + longMin;
            break;
        case 'dms':
            withStr = northSouthPrefix + latDeg + ' ' +
                latMin + ' ' + latSec + ',' + eastWestPrefix +
                longDeg + ' ' + longMin + ' ' + longSec;
            break;
    }
    const returnValue = {
        prefixSuffixError: prefixSuffixError,
        str: withStr
    };
    return returnValue;
}
function getNotations() {
    // using jshint ignore line on parts of the regular
    // expressions that cannot be split over lines
    const strs = [{
            name: 'dd',
            pattern: new RegExp([
                /^(([NS\+\-\s])*([0-8]?\d([,.]\d*)?|90([,.]0*)?)([°˚º^~*]*)([NS\+\-\s])*)([,:;\s|\/\\]+)/,
                /(([EW\+\-\s])*([0]?\d?\d([,.]\d*)?|1[0-7]\d([,.]\d*)?|180([,.]0*)?)([°˚º^~*]*)([EW\+\-\s])*)$/ // jshint ignore:line
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'DDLatLongNotation',
            conversionType: 'dd'
        }, {
            name: 'ddrev',
            pattern: new RegExp([
                /^(([EW\+\-\s])*([0]?\d?\d([,.]\d*)?|1[0-7]\d([,.]\d*)?|180([,.]0*)?)([°˚º^~*]*)([EW\+\-\s])*)/, // jshint ignore:line
                /([,:;\s|\/\\]+)(([NS\+\-\s])*([0-8]?\d([,.]\d*)?|90([,.]0*)?)([°˚º^~*]*)([NS\+\-\s])*)$/
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'DDLongLatNotation',
            conversionType: 'dd'
        }, {
            name: 'ddm',
            pattern: new RegExp([
                /^(([NS\+\-\s])*([0-8]?\d|90)[°˚º^~*\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)['′\s_]*([NS\+\-\s])*)/,
                /([,:;\s|\/\\]+)/,
                /(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[°˚º^~*\s\-_]+(([0-5]\d|\d)([,.]\d*)?)['′\s_]*([EW\+\-\s])*)/, // jshint ignore:line
                /[\s]*$/
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'DDMLatLongNotation',
            conversionType: 'ddm'
        }, {
            name: 'ddmrev',
            pattern: new RegExp([
                /^(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[°˚º^~*\s\-_]+(([0-5]\d|\d)([,.]\d*)?)['′\s_]*([EW\+\-\s])*)/, // jshint ignore:line
                /([,:;\s|\/\\]+)/,
                /(([NS\+\-\s])*([0-8]?\d|90)[°˚º^~*\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)['′\s_]*([NS\+\-\s])*)[\s]*$/ // jshint ignore:line
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'DDMLongLatNotation',
            conversionType: 'ddm'
        }, {
            name: 'dms',
            pattern: new RegExp([
                /^(([NS\+\-\s])*([0-8]?\d|90)[°˚º^~*\s\-_]+([0-5]?\d|\d)['′\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["¨˝\s_]*([NS\+\-\s])*)/, // jshint ignore:line
                /([,:;\s|\/\\]+)/,
                /(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[°˚º^~*\s\-_]+([0-5]\d|\d)['′\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["¨˝\s_]*([EW\+\-\s])*)[\s]*$/ // jshint ignore:line
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'DMSLatLongNotation',
            conversionType: 'dms'
        }, {
            name: 'dmsrev',
            pattern: new RegExp([
                /^(([EW\+\-\s])*([0]?\d?\d|1[0-7]\d|180)[°˚º^~*\s\-_]+([0-5]\d|\d)['′\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["¨˝\s_]*([EW\+\-\s])*)/, // jshint ignore:line
                /([,:;\s|\/\\]+)/,
                /(([NS\+\-\s])*([0-8]?\d|90)[°˚º^~*\s\-_]+([0-5]?\d|\d)['′\s\-_]+(([0-5]?\d|\d)([,.]\d*)?)["¨˝\s_]*([NS\+\-\s])*)[\s]*$/ // jshint ignore:line
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'DMSLongLatNotation',
            conversionType: 'dms'
        }, {
            name: 'mgrs',
            pattern: new RegExp([
                /^\d{1,2}[-,;:\s]*[C-HJ-NP-X][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*/,
                /(\d[-,;:\s]+\d|\d{2}[-,;:\s]+\d{2}|\d{3}[-,;:\s]+\d{3}|\d{4}[-,;:\s]+\d{4}|\d{5}[-,;:\s]+\d{5})/, // jshint ignore:line
                /$|^(\d{1,2}[-,;:\s]*[C-HJ-NP-X][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*)/,
                /(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})?$|^[ABYZ][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*/,
                /(\d[-,;:\s]+\d|\d{2}[-,;:\s]+\d{2}|\d{3}[-,;:\s]+\d{3}|\d{4}[-,;:\s]+\d{4}|\d{5}[-,;:\s]+\d{5})/, // jshint ignore:line
                /$|^[ABYZ][-,;:\s]*[A-HJ-NP-Z]{2}[-,;:\s]*(\d{2}|\d{4}|\d{6}|\d{8}|\d{10})?$/
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'MGRSNotation',
            conversionType: 'mgrs'
        },
        {
            name: 'utm',
            pattern: new RegExp([
                /^\d{1,2}[-,;:\s]*[c-hj-np-xC-HJ-NP-X][-,;:\s]*\d{1,6}\.?\d*[mM]?[-,;:\s]?\d{1,7}\.?\d*[mM]?$/ // jshint ignore:line
            ].map(function (r) {
                return r.source;
            }).join('')),
            notationType: 'UTMBandNotation',
            conversionType: 'utm'
        }
    ];
    return strs;
}
function getCoordinateType(fromInput) {
    const clnInput = fromInput;
    const promise = new Promise((resolve, reject) => {
        const allNotations = getNotations();
        const matchedType = allNotations.filter((itm) => {
            return itm.pattern.test(clnInput);
        });
        if (matchedType.length > 0) {
            resolve(matchedType);
        }
        else {
            resolve([]);
        }
    });
    return promise;
}
function getCoordinatesType(fromInput) {
    const result = [];
    const promise = new Promise((resolve, reject) => {
        const allNotations = getNotations();
        fromInput.forEach((clnInput) => {
            const matchedType = allNotations.filter((itm) => {
                return itm.pattern.test(clnInput);
            });
            if (matchedType.length > 0) {
                result.push(matchedType);
            }
            else {
                result.push([]);
            }
        });
        if (result.length > 0) {
            resolve(result);
        }
        else {
            resolve([]);
        }
    });
    return promise;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/coordinate-control/components/point-sym-image-data.ts":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/coordinate-control/components/point-sym-image-data.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEF_POINT_SYM_IMAGE_DATA: () => (/* binding */ DEF_POINT_SYM_IMAGE_DATA)
/* harmony export */ });
const DEF_POINT_SYM_IMAGE_DATA = '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';


/***/ }),

/***/ "./jimu-ui/advanced/lib/coordinate-control/styles/coordinate-control.ts":
/*!******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/coordinate-control/styles/coordinate-control.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coordinateControlStyles: () => (/* binding */ coordinateControlStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */

function coordinateControlStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .adjust-buttons {
    display: flex;
    flex-flow: row wrap;
  }

  .actionButton {
    margin: 2px 0px 0px 2px;
  }

  .actionButton:disabled{
    cursor: default;
  }

  .hidden {
    display: none;
  }

  .addressListGroup {
    position: absolute;
    max-height: 10rem;
    overflow-y: auto;
    z-index: 1;
    width: 100%;
    border: 1px solid ${theme.border.color};
  }

  .listItem {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    margin: -7px -8px 6px -8px;
  }

  .listItem:hover {
    background-color: ${theme.colors.palette.primary[300]};
  }

  .cc-search-input {
    position: relative;
    min-width: 100px;

      .search-clear {
        cursor: pointer;
      }

      .search-input {
        padding-right: 0.25rem;
      }

      .search-input::-ms-clear {
        display: none;
      }
  }

  .hidden-copy-input {
    opacity: 0.01;
    height:0;
    position:absolute;
    z-index: -1;
  }

  .labelDimension {
    width: 36%
  }

  .hidden {
    display: none;
  }

  .invalid-value {
    border: 1px solid ${theme.colors.danger};
    box-shadow: 0 0 5px ${theme.colors.danger};
  }

  `;
}


/***/ }),

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/core/Handles":
/*!************************************!*\
  !*** external "esri/core/Handles" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_Handles__;

/***/ }),

/***/ "esri/geometry/Point":
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/request":
/*!*******************************!*\
  !*** external "esri/request" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_request__;

/***/ }),

/***/ "esri/rest/geometryService":
/*!********************************************!*\
  !*** external "esri/rest/geometryService" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_geometryService__;

/***/ }),

/***/ "esri/rest/locator":
/*!************************************!*\
  !*** external "esri/rest/locator" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_locator__;

/***/ }),

/***/ "esri/symbols/support/jsonUtils":
/*!*************************************************!*\
  !*** external "esri/symbols/support/jsonUtils" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_support_jsonUtils__;

/***/ }),

/***/ "esri/widgets/CoordinateConversion/CoordinateConversionViewModel":
/*!**********************************************************************************!*\
  !*** external "esri/widgets/CoordinateConversion/CoordinateConversionViewModel" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_CoordinateConversionViewModel__;

/***/ }),

/***/ "esri/widgets/CoordinateConversion/support/Conversion":
/*!***********************************************************************!*\
  !*** external "esri/widgets/CoordinateConversion/support/Conversion" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Conversion__;

/***/ }),

/***/ "esri/widgets/CoordinateConversion/support/Format":
/*!*******************************************************************!*\
  !*** external "esri/widgets/CoordinateConversion/support/Format" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_Format__;

/***/ }),

/***/ "esri/widgets/CoordinateConversion/support/formatUtils":
/*!************************************************************************!*\
  !*** external "esri/widgets/CoordinateConversion/support/formatUtils" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_CoordinateConversion_support_formatUtils__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./jimu-ui/advanced/coordinate-control.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoordinateControl: () => (/* reexport safe */ _lib_coordinate_control_components_coordinate_control__WEBPACK_IMPORTED_MODULE_2__.CoordinateControl)
/* harmony export */ });
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _lib_coordinate_control_styles_coordinate_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/coordinate-control/styles/coordinate-control */ "./jimu-ui/advanced/lib/coordinate-control/styles/coordinate-control.ts");
/* harmony import */ var _lib_coordinate_control_components_coordinate_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/coordinate-control/components/coordinate-control */ "./jimu-ui/advanced/lib/coordinate-control/components/coordinate-control.tsx");


(0,jimu_theme__WEBPACK_IMPORTED_MODULE_0__.registerStyles)('jimu-ui/advanced/coordinate-control', { CoordinateControl: _lib_coordinate_control_styles_coordinate_control__WEBPACK_IMPORTED_MODULE_1__.coordinateControlStyles });


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9jb29yZGluYXRlLWNvbnRyb2wuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QztBQUVXO0FBRWpELE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO0lBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO0lBQ3RCLE1BQU0sRUFBRSxTQUFTLEtBQWdCLEtBQUssRUFBaEIsTUFBTSxVQUFLLEtBQUssRUFBaEMsYUFBd0IsQ0FBUTtJQUV0QyxNQUFNLE9BQU8sR0FBRyxxREFBVSxDQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQztJQUN0RSxJQUFJLENBQUMsR0FBRztRQUFFLE9BQU8sa0ZBQUssU0FBUyxFQUFFLE9BQU8sSUFBTSxNQUFhLEVBQUk7SUFDL0QsT0FBTywyREFBQyxHQUFHLGtCQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLDBFQUFHLElBQU0sTUFBTSxFQUFJO0FBQzFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g0QztBQUVlO0FBRXJELE1BQU0sZUFBZSxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO0lBQzFELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHO0lBQ3RCLE1BQU0sRUFBRSxTQUFTLEtBQWdCLEtBQUssRUFBaEIsTUFBTSxVQUFLLEtBQUssRUFBaEMsYUFBd0IsQ0FBUTtJQUV0QyxNQUFNLE9BQU8sR0FBRyxxREFBVSxDQUFDLCtCQUErQixFQUFFLFNB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QVEsZ0JBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsbUJBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLFFBQUMsSUFBSSxFQUFFLElBQUksRUFDMUwsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDM0osK0NBQUMsb0ZBQWlCLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxDQUMxQjtvQkFFVixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7d0JBQzVDLCtDQUFDLDJDQUFNLElBQUMsSUFBSSxFQUFFLFFBQVEsZ0JBQWMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsMENBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFDck0sSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLFFBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs0QkFDN0csK0NBQUMsaUdBQW9CLElBQUMs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RSxFQUFFLGlCQUFpQiwwR0FBRSxDQUFDO0FBQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vcGluLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL3pvb20taW4td2luZG93LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2R1cGxpY2F0ZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9yZXNldC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vcGluLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC96b29tLWluLXdpbmRvdy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvZHVwbGljYXRlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcmVzZXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jb29yZGluYXRlLWNvbnRyb2wvY29tcG9uZW50cy9hZGRyZXNzLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jb29yZGluYXRlLWNvbnRyb2wvY29tcG9uZW50cy9jb29yZGluYXRlLWNvbnRyb2wudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jb29yZGluYXRlLWNvbnRyb2wvY29tcG9uZW50cy9jb29yZGluYXRlLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jb29yZGluYXRlLWNvbnRyb2wvY29tcG9uZW50cy9wb2ludC1zeW0taW1hZ2UtZGF0YS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvY29vcmRpbmF0ZS1jb250cm9sL3N0eWxlcy9jb29yZGluYXRlLWNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvY29yZS9IYW5kbGVzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3JlcXVlc3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9nZW9tZXRyeVNlcnZpY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9sb2NhdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvc3VwcG9ydC9qc29uVXRpbHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9Db29yZGluYXRlQ29udmVyc2lvbi9Db29yZGluYXRlQ29udmVyc2lvblZpZXdNb2RlbFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uL3N1cHBvcnQvQ29udmVyc2lvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL0Nvb3JkaW5hdGVDb252ZXJzaW9uL3N1cHBvcnQvRm9ybWF0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24vc3VwcG9ydC9mb3JtYXRVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvY29vcmRpbmF0ZS1jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTMgNi4xMzNjMCAuNTk4LS4yOCAxLjQ2LS44MjUgMi41MS0uNTMgMS4wMi0xLjI0NyAyLjEwMi0xLjk4MSAzLjEwMkE0NS43MTggNDUuNzE4IDAgMCAxIDggMTQuNDkyYTQ4LjAxIDQ4LjAxIDAgMCAxLTIuMTk0LTIuNzQ3Yy0uNzM0LTEtMS40NTEtMi4wODEtMS45OC0zLjEwMkMzLjI4IDcuNTkzIDMgNi43MzEgMyA2LjEzMyAzIDMuMjc3IDUuMjYgMSA4IDFzNSAyLjI3NyA1IDUuMTMzbTEgMGMwIDIuNjg1LTMuNzY4IDcuMzExLTUuMzMyIDkuMTE1QzguMjU4IDE1LjcyMiA4IDE2IDggMTZzLS4yNTgtLjI3OS0uNjY4LS43NTFDNS43NjggMTMuNDQ0IDIgOC44MTcgMiA2LjEzMyAyIDIuNzQ2IDQuNjg2IDAgOCAwczYgMi43NDYgNiA2LjEzM00xMCA1LjVhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwbTEgMGEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTkuNDM4Ljk5NGMuMjEzIDAgLjM5Ny4xNDYuNDQuMzUuMTUxLjcyMi4yNTcgMS4zNC4zMTYgMS44NTIuMzc0LjE2LjcyNS4zNjIgMS4wNDguNTk5bDEuNzI4LS42NzZhLjQ1NS40NTUgMCAwIDEgLjU1Ni4xODhsMS40MiAyLjM5NGEuNDMuNDMgMCAwIDEtLjA5MS41NDcgMjEuOTggMjEuOTggMCAwIDEtMS40OSAxLjE5NCA1LjE3IDUuMTcgMCAwIDEtLjAwNyAxLjE4M2wxLjQ2NCAxLjExOWEuNDMuNDMgMCAwIDEgLjExMS41NjNsLTEuNDIgMi4zOTRhLjQ1NC40NTQgMCAwIDEtLjUzLjE5NyAyMi40NDUgMjIuNDQ1IDAgMCAxLTEuODA3LS42NmMtLjMyNS4yMzMtLjY3OS40My0xLjA1NS41ODZsLS4yNjMgMS43OTRhLjQ0Ni40NDYgMCAwIDEtLjQ0NS4zNzZINi41NzRhLjQ0Ni40NDYgMCAwIDEtLjQ0LS4zNSAyMS4wMTkgMjEuMDE5IDAgMCAxLS4zMTctMS44NTMgNS4zNCA1LjM0IDAgMCAxLTEuMDQ3LS41OThsLTEuNzI4LjY3NWEuNDU1LjQ1NSAwIDAgMS0uNTU2LS4xODdsLTEuNDItMi4zOTVhLjQzLjQzIDAgMCAxIC4wOTEtLjU0NmMuNTY3LS40OSAxLjA2My0uODg4IDEuNDktMS4xOTRhNS4xNjcgNS4xNjcgMCAwIDEgLjAwOC0xLjE4M0wxLjE5IDYuMjQzYS40My40MyAwIDAgMS0uMTEyLS41NjJsMS40Mi0yLjM5NWEuNDU1LjQ1NSAwIDAgMSAuNTMxLS4xOTZjLjcxOS4yMzMgMS4zMjEuNDUzIDEuODA3LjY2LjMyNC0uMjMzLjY3OS0uNDMgMS4wNTYtLjU4N2wuMjYyLTEuNzk0QS40NDYuNDQ2IDAgMCAxIDYuNi45OTR6bS0uMzY1IDFINi45ODVsLS4yOCAxLjg2Ni0uNDY3LjE5Yy0uMjM1LjA5NS0uNDYuMjEtLjY3Mi4zNGwtLjIwNy4xMzYtLjQyLjI5My0uNDc2LS4xOTdjLS4zMjgtLjEzNy0uNzE4LS4yODEtMS4xNjktLjQzM2wtLjIyMS0uMDc0LTEuMDQ1IDEuNzE5TDMuNTkgNi45OTlsLS4wNi40NzlhNC4xMjcgNC4xMjcgMCAwIDAtLjAyMS44MTZsLjAxNC4xNDQuMDU4LjQ5Mi0uNDE5LjI5NGMtLjI4OC4yMDMtLjYxNS40NTEtLjk3OS43NDZsLS4xNzcuMTQ1IDEuMDQzIDEuNzIgMS44NDUtLjcwMy40MDYuMjljLjIwNC4xNDYuNDIuMjc0LjY0NS4zODRsLjIyOC4xMDMuNDc0LjE5OS4wNTkuNDljLjA0LjMzOC4xMDMuNzMxLjE5IDEuMTc3bC4wNDMuMjE5aDIuMDg4bC4yODItMS44NjcuNDY2LS4xOWMuMjM2LS4wOTUuNDYtLjIxLjY3Mi0uMzRsLjIwNy0uMTM2LjQxOS0uMjkzLjQ3Ni4xOThjLjMzLjEzNi43Mi4yOCAxLjE3LjQzM2wuMjIuMDcyIDEuMDQ0LTEuNzE4LTEuNTYtMS4xNjUuMDYtLjQ3OWE0LjEzMSA0LjEzMSAwIDAgMCAuMDItLjgxNWwtLjAxMy0uMTQ0LS4wNi0uNDkyLjQyLS4yOTVhMTguMSAxOC4xIDAgMCAwIC45OC0uNzQ2bC4xNzYtLjE0Ni0xLjA0My0xLjcyLTEuODQ0LjcwNS0uNDA2LS4yOWE0LjQ5NiA0LjQ5NiAwIDAgMC0uNjQ2LS4zODVsLS4yMjgtLjEwMy0uNDc0LS4xOTktLjA1OC0uNDljLS4wMzItLjI3LS4wOC0uNTc2LS4xNC0uOTE2em0tMS4wNjcgM2EzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZtMCAxYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMSAxaDQuNXYxSDIuNzA3bDMuNjQ3IDMuNjQ2LS43MDguNzA4TDIgMi43MDdWNS41SDF6bTE0IDE0aC00LjV2LTFoMi43OTNsLTMuNjQ3LTMuNjQ2LjcwNy0uNzA4TDE0IDEzLjI5M1YxMC41aDF6TTEgMTAuNVYxNWg0LjV2LTFIMi43MDdsMy42NDctMy42NDYtLjcwOC0uNzA4TDIgMTMuMjkzVjEwLjV6TTE1IDF2NC41aC0xVjIuNzA3bC0zLjY0NiAzLjY0Ny0uNzA4LS43MDhMMTMuMjkzIDJIMTAuNVYxem0tMSAxXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJtOC43NDUgOCA2LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDUuNzQ2TDggOC43NDZsLTYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0Ni0uNzQ2bDYuMS02LjEtNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2LS43NDZsNi4xIDYuMSA2LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYuNzQ2elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEuNSAxMWEuNS41IDAgMCAwIC41LS41VjJoOC41YS41LjUgMCAwIDAgMC0xSDJhMSAxIDAgMCAwLTEgMXY4LjVhLjUuNSAwIDAgMCAuNS41TTUgNGg5YTEgMSAwIDAgMSAxIDF2OWExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMVY1YTEgMSAwIDAgMSAxLTFtMCAxdjloOVY1elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTE0LjkzOCA4QTcgNyAwIDAgMSAxLjAxIDlIMGE4LjAwMSA4LjAwMSAwIDAgMCAxNS45MzgtMUE4IDggMCAwIDAgMS4wMiAzLjk4TDEgLjcwMmEuNS41IDAgMSAwLTEgLjAwNkwuMDMxIDUuOWw1LjEyOC0uODI2YS41LjUgMCAwIDAtLjE2LS45ODdMMS44MTkgNC42QTcgNyAwIDAgMSAxNC45MzggOFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3Bpbi5zdmcnXG5cbmV4cG9ydCBjb25zdCBQaW5PdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmcnXG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL3pvb20taW4td2luZG93LnN2ZydcblxuZXhwb3J0IGNvbnN0IFpvb21JbldpbmRvd091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xuXG5leHBvcnQgY29uc3QgQ2xvc2VPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2R1cGxpY2F0ZS5zdmcnXG5cbmV4cG9ydCBjb25zdCBEdXBsaWNhdGVPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3Jlc2V0LnN2ZydcblxuZXhwb3J0IGNvbnN0IFJlc2V0T3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IEZvcm1hdCBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24vc3VwcG9ydC9Gb3JtYXQnXG5pbXBvcnQgbG9jYXRvciBmcm9tICdlc3JpL3Jlc3QvbG9jYXRvcidcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZHJlc3NUb0xvY2F0aW9ucyAobG9jYXRvclVSTDogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIG1pbkNhbmRpZGF0ZVNjb3JlOiBudW1iZXIpOiBQcm9taXNlPF9fZXNyaS5BZGRyZXNzQ2FuZGlkYXRlW10+IHtcbiAgcmV0dXJuIGxvY2F0b3IuYWRkcmVzc1RvTG9jYXRpb25zKGxvY2F0b3JVUkwsIHtcbiAgICBhZGRyZXNzOiB7XG4gICAgICBTaW5nbGVMaW5lOiBhZGRyZXNzXG4gICAgfVxuICB9LCB7XG4gICAgcXVlcnk6IHt9XG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHJlc3BvbnNlID0gcmVzcG9uc2Uuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmUgfSlcbiAgICByZXNwb25zZSA9IHJlc3BvbnNlLmZpbHRlcigoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5zY29yZSA+PSBtaW5DYW5kaWRhdGVTY29yZSAmJiBpdGVtLmxvY2F0aW9uIH0pXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sIGVyciA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICByZXR1cm4gW11cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uRm9yU3VnZ2VzdGlvbiAobG9jYXRvclVSTDogc3RyaW5nLCBtYWdpY0tleTogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIG1pbkNhbmRpZGF0ZVNjb3JlOiBudW1iZXIpOiBQcm9taXNlPF9fZXNyaS5BZGRyZXNzQ2FuZGlkYXRlW10+IHtcbiAgcmV0dXJuIGxvY2F0b3IuYWRkcmVzc1RvTG9jYXRpb25zKGxvY2F0b3JVUkwsIHtcbiAgICBhZGRyZXNzOiB7XG4gICAgICBTaW5nbGVMaW5lOiBhZGRyZXNzXG4gICAgfSxcbiAgICBvdXRGaWVsZHM6IFsnKiddLFxuICAgIG1hZ2ljS2V5OiBtYWdpY0tleVxuICB9LCB7XG4gICAgcXVlcnk6IHt9XG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHJlc3BvbnNlID0gcmVzcG9uc2Uuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmUgfSlcbiAgICByZXNwb25zZSA9IHJlc3BvbnNlLmZpbHRlcigoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5zY29yZSA+PSBtaW5DYW5kaWRhdGVTY29yZSAmJiBpdGVtLmxvY2F0aW9uIH0pXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH0sIGVyciA9PiB7XG4gICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICByZXR1cm4gW11cbiAgfSlcbn1cblxuY29uc3QgbG9hZFN1Z2dlc3QgPSAobG9jYXRvclVSTDogc3RyaW5nLCBhZGRyZXNzOiBzdHJpbmcsIG1heFN1Z2dlc3Rpb246IG51bWJlcik6IFByb21pc2U8X19lc3JpLlN1Z2dlc3Rpb25SZXN1bHRbXT4gPT4ge1xuICByZXR1cm4gbG9jYXRvci5zdWdnZXN0TG9jYXRpb25zKGxvY2F0b3JVUkwsIHtcbiAgICB0ZXh0OiBhZGRyZXNzLFxuICAgIGxvY2F0aW9uOiBudWxsXG4gIH0sIHtcbiAgICBxdWVyeToge1xuICAgICAgbWF4U3VnZ2VzdGlvbnM6IG1heFN1Z2dlc3Rpb25cbiAgICB9XG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHJldHVybiByZXNwb25zZSB8fCBbXVxuICB9LCBlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgcmV0dXJuIFtdXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN1Z2dlc3Rpb24gPSAoZ2VvY29kZVVSTDogc3RyaW5nLCBzZWFyY2hUZXh0OiBzdHJpbmcsIG1heFN1Z2dlc3Rpb25zOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIGxvYWRTdWdnZXN0KGdlb2NvZGVVUkwsIHNlYXJjaFRleHQsIG1heFN1Z2dlc3Rpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgbGV0IHNlYXJjaFN1Z2dlc3Rpb24gPSBbXVxuICAgIHJlcy5mb3JFYWNoKChhZGRySW5mbywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhZGRySW5mby50ZXh0XG4gICAgICBpZiAoYWRkcmVzcyAmJiAhY2hlY2tJc1N1Z2dlc3Rpb25SZXBlYXRlZChzZWFyY2hTdWdnZXN0aW9uLCBhZGRyZXNzKSkge1xuICAgICAgICBjb25zdCBsYXllclN1Z2dlc3Rpb24gPSB7XG4gICAgICAgICAgc3VnZ2VzdGlvbjogYWRkcmVzcyxcbiAgICAgICAgICBtYWdpY0tleTogYWRkckluZm8/Lm1hZ2ljS2V5XG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoU3VnZ2VzdGlvbi5wdXNoKGxheWVyU3VnZ2VzdGlvbilcbiAgICAgIH1cbiAgICB9KVxuICAgIHNlYXJjaFN1Z2dlc3Rpb24gPSB1bmlxdWVKc29uKHNlYXJjaFN1Z2dlc3Rpb24sICdzdWdnZXN0aW9uJylcbiAgICBjb25zdCBzdWdnZXN0aW9uID0ge1xuICAgICAgc3VnZ2VzdGlvbkl0ZW06IHNlYXJjaFN1Z2dlc3Rpb24uc3BsaWNlKDAsIG1heFN1Z2dlc3Rpb25zKVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN1Z2dlc3Rpb24pXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tJc1N1Z2dlc3Rpb25SZXBlYXRlZCAoc2VhcmNoU3VnZ2VzdGlvbiwgc3VnZ2VzdGlvblJlY29yZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vQ2hlY2tzIGlmIHRoZSBzdWdnZXN0aW9uIGlzIHJlcGVhdGVkIG9yIG5vdFxuICByZXR1cm4gc2VhcmNoU3VnZ2VzdGlvbi5maWx0ZXIoc3VnZ2VzdGlvbiA9PiB7XG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25SZWNvcmQgPT09IHN1Z2dlc3Rpb24/LnN1Z2dlc3Rpb25cbiAgfSkubGVuZ3RoID4gMFxufVxuXG4vL0RlLWR1cGxpY2F0ZSBmb3Igb2JqZWN0IG9yIEFycmF5XG5jb25zdCB1bmlxdWVKc29uID0gKGpzb25BcnIsIGtleSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBqc29uQXJyWzBdID8gW2pzb25BcnJbMF1dIDogW11cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBqc29uQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGpzb25BcnJbaV1cbiAgICBsZXQgcmVwZWF0ID0gZmFsc2VcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGl0ZW1ba2V5XSA9PT0gcmVzdWx0W2pdW2tleV0pIHtcbiAgICAgICAgcmVwZWF0ID0gdHJ1ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgcmVzdWx0LnB1c2goaXRlbSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVBZGRyZXNzRm9ybWF0IChsb2NhdG9yVVJMOiBzdHJpbmcsIG1pbkNhbmRpZGF0ZVNjb3JlOiBudW1iZXIsIGRpc3BsYXlGdWxsQWRkcmVzczogYm9vbGVhbik6IEZvcm1hdCB7XG4gIGNvbnN0IG5ld0Zvcm1hdCA9IG5ldyBGb3JtYXQoe1xuICAgIG5hbWU6ICdhZGRyZXNzJyxcbiAgICBnZXRDb252ZXJzaW9uU3RyYXRlZ3k6ICgpOiAnc2VydmVyJyB8ICdjbGllbnQnID0+IHtcbiAgICAgIHJldHVybiAnc2VydmVyJ1xuICAgIH0sXG4gICAgY29udmVyc2lvbkluZm86IHtcbiAgICAgIC8vIERlZmluZSBhIGNvbnZlcnQgZnVuY3Rpb25cbiAgICAgIC8vIFBvaW50IC0+IFBvc2l0aW9uXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICBjb252ZXJ0OiAocG9pbnQ6IF9fZXNyaS5Qb2ludCk6IFByb21pc2U8X19lc3JpLlBvc2l0aW9uPiA9PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxfX2VzcmkuUG9zaXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobG9jYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2F0b3IubG9jYXRpb25Ub0FkZHJlc3MobG9jYXRvclVSTCwge1xuICAgICAgICAgICAgICBsb2NhdGlvbjogcG9pbnRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgcXVlcnk6IHt9XG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgbGV0IHVwZGF0ZWRBZGRyZXNzID0gJydcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlPy5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZEFkZHJlc3MgPSByZXNwb25zZS5hZGRyZXNzXG4gICAgICAgICAgICAgICAgaWYgKGRpc3BsYXlGdWxsQWRkcmVzcyAmJiByZXNwb25zZS5hZGRyZXNzID09PSByZXNwb25zZS5hdHRyaWJ1dGVzPy5QbGFjZU5hbWUgJiYgcmVzcG9uc2UuYXR0cmlidXRlcz8uTG9uZ0xhYmVsKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVkQWRkcmVzcyA9IHJlc3BvbnNlLmF0dHJpYnV0ZXMuTG9uZ0xhYmVsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU6IHJlc3BvbnNlPy5zY29yZSA+PSBtaW5DYW5kaWRhdGVTY29yZSA/IHVwZGF0ZWRBZGRyZXNzIDogJycsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHBvaW50XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU6ICcnLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBwb2ludFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU6ICcnLFxuICAgICAgICAgICAgICBsb2NhdGlvbjogcG9pbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgfSxcbiAgICAgIC8vIERlZmluZSBhIHJldmVyc2UgY29udmVydCBmdW5jdGlvblxuICAgICAgLy8gU3RyaW5nIC0+IFBvaW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICByZXZlcnNlQ29udmVydDogKHN0cmluZzogc3RyaW5nKTogUHJvbWlzZTxfX2VzcmkuQWRkcmVzc0NhbmRpZGF0ZT4gPT4ge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8X19lc3JpLkFkZHJlc3NDYW5kaWRhdGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobG9jYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2F0b3IuYWRkcmVzc1RvTG9jYXRpb25zKGxvY2F0b3JVUkwsIHtcbiAgICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIFNpbmdsZUxpbmU6IHN0cmluZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7fVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5maWx0ZXIoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0uc2NvcmUgPj0gbWluQ2FuZGlkYXRlU2NvcmUgJiYgaXRlbS5sb2NhdGlvbiB9KVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2Uuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmUgfSlcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlWzBdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc29sdmUobnVsbClcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb21pc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERlZmluZSBlYWNoIHNlZ21lbnQgb2YgdGhlIGNvb3JkaW5hdGVcbiAgICBjb29yZGluYXRlU2VnbWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6ICdMJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZGRyZXNzJyxcbiAgICAgICAgc2VhcmNoUGF0dGVybjogLy4qL1xuICAgICAgfVxuICAgIF0sXG4gICAgZGVmYXVsdFBhdHRlcm46ICdMJ1xuICB9KVxuICByZXR1cm4gbmV3Rm9ybWF0XG59XG4iLCIvKiogQGpzeCBqc3ggKi8gLy8gPC0tIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHRoZSBqc3ggcHJhZ21hXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIHR5cGUgSW50bFNoYXBlLCBpbmplY3RJbnRsLCB1dGlscywgY2xhc3NOYW1lcywgZ2V0QXBwU3RvcmUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBQb3BwZXIsIEJ1dHRvbiwgU2VsZWN0LCBPcHRpb24sIFRleHRJbnB1dCwgVGV4dEFyZWEsIEFsZXJ0UG9wdXAsIExhYmVsLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0sIFJvdywgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVVSURlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgeyBnZW5lcmF0ZUFkZHJlc3NGb3JtYXQsIGFkZHJlc3NUb0xvY2F0aW9ucywgZ2V0TG9jYXRpb25Gb3JTdWdnZXN0aW9uLCBmZXRjaFN1Z2dlc3Rpb24gfSBmcm9tICcuL2FkZHJlc3MtdXRpbHMnXG5pbXBvcnQgeyB0eXBlIE5vdGF0aW9uLCB0eXBlIFByb2Nlc3NlZENvb3JkaW5hdGVUZXh0SW5mbywgZ2V0Q29vcmRpbmF0ZVR5cGUsIHByb2Nlc3NDb29yZFRleHRJbnB1dCB9IGZyb20gJy4vY29vcmRpbmF0ZS11dGlscydcbmltcG9ydCBIYW5kbGVzIGZyb20gJ2VzcmkvY29yZS9IYW5kbGVzJ1xuaW1wb3J0IHR5cGUgU3BhdGlhbFJlZmVyZW5jZSBmcm9tICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXG5pbXBvcnQgQ29udmVyc2lvbiBmcm9tICdlc3JpL3dpZGdldHMvQ29vcmRpbmF0ZUNvbnZlcnNpb24vc3VwcG9ydC9Db252ZXJzaW9uJ1xuaW1wb3J0IENvb3JkaW5hdGVDb252ZXJzaW9uVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db29yZGluYXRlQ29udmVyc2lvbi9Db29yZGluYXRlQ29udmVyc2lvblZpZXdNb2RlbCdcbmltcG9ydCBQb2ludCBmcm9tICdlc3JpL2dlb21ldHJ5L1BvaW50J1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJ1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcidcbmltcG9ydCBqc29uVXRpbHMgZnJvbSAnZXNyaS9zeW1ib2xzL3N1cHBvcnQvanNvblV0aWxzJ1xuaW1wb3J0IGZvcm1hdFV0aWxzIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Db29yZGluYXRlQ29udmVyc2lvbi9zdXBwb3J0L2Zvcm1hdFV0aWxzJ1xuaW1wb3J0IGdlb21ldHJ5U2VydmljZSBmcm9tICdlc3JpL3Jlc3QvZ2VvbWV0cnlTZXJ2aWNlJ1xuaW1wb3J0IGVzcmlSZXF1ZXN0IGZyb20gJ2VzcmkvcmVxdWVzdCdcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgREVGX1BPSU5UX1NZTV9JTUFHRV9EQVRBIH0gZnJvbSAnLi9wb2ludC1zeW0taW1hZ2UtZGF0YSdcbmltcG9ydCB7IFBpbk91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9waW4nXG5pbXBvcnQgeyBEdXBsaWNhdGVPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2R1cGxpY2F0ZSdcbmltcG9ydCB7IFpvb21JbldpbmRvd091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC96b29tLWluLXdpbmRvdydcbmltcG9ydCB7IFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZydcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZSdcbmltcG9ydCB7IFJlc2V0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9yZXNldCdcblxuLy9Db25zdGFudHNcbmNvbnN0IExFRlRfVE9fUklHSFRfTUFSSyA9ICfigI4nXG5jb25zdCBERUdSRUVfU1lNQk9MID0gYMKwJHtMRUZUX1RPX1JJR0hUX01BUkt9YFxuY29uc3QgREVGQVVMVF9DT09SRElOQVRFID0gJ2RkJ1xuY29uc3QgREVGQVVMVF9GT1JNQVQgPSAnWcKwTiwgWMKwRSdcbmNvbnN0IExPQ0FUT1JfVVJMID0gJ2h0dHBzOi8vZ2VvY29kZS5hcmNnaXMuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL1dvcmxkL0dlb2NvZGVTZXJ2ZXInXG5jb25zdCBNSU5fQ0FORElEQVRFX1NDT1JFID0gMTAwXG5jb25zdCBNQVhfU1VHR0VTVElPTlMgPSA2XG5jb25zdCBHRU9NRVRSWV9TRVJWSUNFX1VSTCA9IHV0aWxzLmdldEdlb21ldHJ5U2VydmljZSgpXG5jb25zdCBaT09NX1NDQUxFID0gNTAwMDBcbmNvbnN0IERFRkFVTFRfUE9JTlRfU1lNQk9MID0ge1xuICB0eXBlOiAnZXNyaVBNUycsXG4gIGFuZ2xlOiAwLFxuICB4b2Zmc2V0OiAyLFxuICB5b2Zmc2V0OiA4LFxuICBjb250ZW50VHlwZTogJ2ltYWdlL3BuZycsXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG4gIGltYWdlRGF0YTogREVGX1BPSU5UX1NZTV9JTUFHRV9EQVRBLFxuICB1cmw6ICdodHRwczovL3N0YXRpYy5hcmNnaXMuY29tL2ltYWdlcy9TeW1ib2xzL0Jhc2ljL0JsdWVTaGlueVBpbi5wbmcnLFxuICBoZWlnaHQ6IDI0LFxuICB3aWR0aDogMjRcbn1cblxuaW50ZXJmYWNlIElucHV0Rm9ybWF0Tm90YXRpb24ge1xuICByZWFkb25seSB2YWx1ZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbm90YXRpb246IE5vdGF0aW9uXG59XG5cbmludGVyZmFjZSBBZGRyZXNzT3B0aW9uIHtcbiAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG1hcFBvaW50OiBQb2ludFxuICBtYWdpY0tleT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgT3V0cHV0U2V0dGluZ3Mge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBkZWZhdWx0UGF0dGVybjogc3RyaW5nXG4gIGN1cnJlbnRQYXR0ZXJuOiBzdHJpbmdcbiAgZW5hYmxlZDogYm9vbGVhblxuICBpc0N1c3RvbT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlQ29udHJvbFJlc3VsdCB7XG4gIGZvcm1hdHRlZENvb3JkaW5hdGVUZXh0OiBzdHJpbmdcbiAgbWFwQ29vcmRpbmF0ZTogUG9pbnRcbiAgZGRDb29yZGluYXRlOiBQb2ludFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVDb250cm9sUHJvcHMge1xuICBwYXJlbnRXaWRnZXRJZDogc3RyaW5nXG4gIGxvY2F0b3JVUkw6IHN0cmluZ1xuICBpbnB1dExhYmVsU3RyaW5nPzogc3RyaW5nXG4gIGRlZmF1bHRDb29yZGluYXRlPzogc3RyaW5nXG4gIGRlZmF1bHRGb3JtYXQ/OiBzdHJpbmdcbiAgem9vbVNjYWxlPzogbnVtYmVyXG4gIGRlZmF1bHRQb2ludFN5bWJvbD86IGFueVxuICBtaW5DYW5kaWRhdGVTY29yZT86IG51bWJlclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlclxuICBkaXNwbGF5RnVsbEFkZHJlc3M/OiBib29sZWFuXG4gIGppbXVNYXB2aWV3PzogSmltdU1hcFZpZXdcbiAgY29weUFsbExpc3Q/OiBzdHJpbmdbXVxuICBzaG93Q29weT86IGJvb2xlYW5cbiAgc2hvd1pvb20/OiBib29sZWFuXG4gIGRlYWN0aXZhdGVNYXBUb29sPzogYm9vbGVhblxuICAvKiogQGlnbm9yZSAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb25Db252ZXJzaW9uQ29tcGxldGU6IChjb252ZXJzaW9uUmVzdWx0OiBDb29yZGluYXRlQ29udHJvbFJlc3VsdCkgPT4gdm9pZFxuICBvbkNsZWFyPzogKCkgPT4gdm9pZFxuICBwcm9jZXNzaW5nPzogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkXG4gIGdldFN1cHBvcnRlZEZvcm1hdHM/OiAoZm9ybWF0czogT3V0cHV0U2V0dGluZ3NbXSkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSW50bFByb3BzIHtcbiAgaW50bDogSW50bFNoYXBlXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzdXBwb3J0ZWRGb3JtYXRzOiBPdXRwdXRTZXR0aW5nc1tdXG4gIGNvb3JkaW5hdGVWTTogQ29vcmRpbmF0ZUNvbnZlcnNpb25WaWV3TW9kZWxcbiAgbWFwUG9pbnRBY3RpdmU6IGJvb2xlYW5cbiAgaXNJbnB1dFNldHRpbmdzUG9wdXBPcGVuOiBib29sZWFuXG4gIGlzQWRkQ29udmVyc2lvblBvcHVwT3BlbjogYm9vbGVhblxuICBpc0NvcHlNZXNzYWdlT3BlbjogYm9vbGVhblxuICBkZWZhdWx0Q29vcmRzOiBzdHJpbmdcbiAgZGVmRm9ybWF0OiBzdHJpbmdcbiAgbG9jYXRvclVybDogc3RyaW5nXG4gIG1pbmltdW1DYW5kaWRhdGVTY29yZTogbnVtYmVyXG4gIG1heGltdW1TdWdnZXN0aW9uczogbnVtYmVyXG4gIGRpc3BsYXlGdWxsQWRkcmVzczogYm9vbGVhblxuICBkZWZQb2ludFN5bWJvbDogX19lc3JpLlNpbXBsZU1hcmtlclN5bWJvbCB8IF9fZXNyaS5QaWN0dXJlTWFya2VyU3ltYm9sIHwgX19lc3JpLlBvaW50U3ltYm9sM0RcbiAgZGlzYWJsZUNvcHlab29tOiBib29sZWFuXG4gIGlucHV0VmFsdWU6IHN0cmluZ1xuICBpc0NvbmZpcm1JbnB1dE5vdGF0aW9uUG9wdXBPcGVuOiBib29sZWFuXG4gIGlucHV0Tm90YXRpb25PcHRpb25zOiBJbnB1dEZvcm1hdE5vdGF0aW9uW11cbiAgY29uZmlybWVkSW5wdXROb3RhdGlvbjogc3RyaW5nXG4gIGlucHV0Tm90YXRpb25XYXJuaW5nOiBzdHJpbmdcbiAgYWRkcmVzc09wdGlvbnM6IEFkZHJlc3NPcHRpb25bXVxuICBzZWxlY3RlZEFkZHJlc3M6IHN0cmluZ1xuICBpc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuOiBib29sZWFuXG4gIGlzRXJyb3JNc2dQb3B1cE9wZW46IGJvb2xlYW5cbiAgZXJyb3JNc2dQb3B1cFRpdGxlOiBzdHJpbmdcbiAgZXJyb3JNc2c6IHN0cmluZ1xuICBjYW5TdWdnZXN0OiBib29sZWFuXG59XG5cbmNsYXNzIF9Db29yZGluYXRlQ29udHJvbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29vcmRpbmF0ZUNvbnRyb2xQcm9wcyAmIEludGxQcm9wcywgSVN0YXRlPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2hhbmRsZXM6IEhhbmRsZXNcbiAgcHJpdmF0ZSByZWFkb25seSBfaW5wdXRUZXh0Ym94ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcbiAgcHJpdmF0ZSBfaXNNb3VudGVkOiBib29sZWFuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvcHlJbnB1dFRleHRib3ggPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKVxuICBwdWJsaWMgZHJhd2luZ0xheWVyOiBHcmFwaGljc0xheWVyXG4gIHB1YmxpYyBjdXJyZW50Q29vcmRpbmF0ZUZvcm1hdDogc3RyaW5nXG4gIHB1YmxpYyBsb2NhdGlvbjogUG9pbnRcbiAgcHJpdmF0ZSBnZXRTdWdnZXN0aW9uc1RpbWVyID0gbnVsbFxuICBwcml2YXRlIHJlYWRvbmx5IGlzUlRMOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5pc1JUTCA9IGZhbHNlXG5cbiAgICBjb25zdCBhcHBTdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKVxuICAgIHRoaXMuaXNSVEwgPSBhcHBTdGF0ZT8uYXBwQ29udGV4dD8uaXNSVExcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWFwUG9pbnRBY3RpdmU6IGZhbHNlLFxuICAgICAgaXNJbnB1dFNldHRpbmdzUG9wdXBPcGVuOiBmYWxzZSxcbiAgICAgIGlzQWRkQ29udmVyc2lvblBvcHVwT3BlbjogZmFsc2UsXG4gICAgICBpc0NvcHlNZXNzYWdlT3BlbjogZmFsc2UsXG4gICAgICBkZWZhdWx0Q29vcmRzOiB0aGlzLnByb3BzLmRlZmF1bHRDb29yZGluYXRlID8gdGhpcy5wcm9wcy5kZWZhdWx0Q29vcmRpbmF0ZSA6IERFRkFVTFRfQ09PUkRJTkFURSxcbiAgICAgIGRlZkZvcm1hdDogdGhpcy5wcm9wcy5kZWZhdWx0Rm9ybWF0ID8gdGhpcy5wcm9wcy5kZWZhdWx0Rm9ybWF0IDogREVGQVVMVF9GT1JNQVQsXG4gICAgICBsb2NhdG9yVXJsOiB0aGlzLnByb3BzLmxvY2F0b3JVUkwgPyB0aGlzLnByb3BzLmxvY2F0b3JVUkwgOiBMT0NBVE9SX1VSTCxcbiAgICAgIG1pbmltdW1DYW5kaWRhdGVTY29yZTogdGhpcy5wcm9wcy5taW5DYW5kaWRhdGVTY29yZSA/IHRoaXMucHJvcHMubWluQ2FuZGlkYXRlU2NvcmUgOiBNSU5fQ0FORElEQVRFX1NDT1JFLFxuICAgICAgbWF4aW11bVN1Z2dlc3Rpb25zOiB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zIHx8IHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMgPT09IDAgPyB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zIDogTUFYX1NVR0dFU1RJT05TLFxuICAgICAgZGlzcGxheUZ1bGxBZGRyZXNzOiB0aGlzLnByb3BzLmRpc3BsYXlGdWxsQWRkcmVzcyA/IHRoaXMucHJvcHMuZGlzcGxheUZ1bGxBZGRyZXNzIDogZmFsc2UsXG4gICAgICBkZWZQb2ludFN5bWJvbDogdGhpcy5wcm9wcy5kZWZhdWx0UG9pbnRTeW1ib2wgPyB0aGlzLnByb3BzLmRlZmF1bHRQb2ludFN5bWJvbCA6IERFRkFVTFRfUE9JTlRfU1lNQk9MLFxuICAgICAgZGlzYWJsZUNvcHlab29tOiB0cnVlLFxuICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICBjb29yZGluYXRlVk06IG51bGwsXG4gICAgICBzdXBwb3J0ZWRGb3JtYXRzOiBudWxsLFxuICAgICAgaXNDb25maXJtSW5wdXROb3RhdGlvblBvcHVwT3BlbjogZmFsc2UsXG4gICAgICBpbnB1dE5vdGF0aW9uT3B0aW9uczogW10sXG4gICAgICBjb25maXJtZWRJbnB1dE5vdGF0aW9uOiAnJyxcbiAgICAgIGlucHV0Tm90YXRpb25XYXJuaW5nOiAnJyxcbiAgICAgIGFkZHJlc3NPcHRpb25zOiBbXSxcbiAgICAgIHNlbGVjdGVkQWRkcmVzczogJycsXG4gICAgICBpc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuOiBmYWxzZSxcbiAgICAgIGlzRXJyb3JNc2dQb3B1cE9wZW46IGZhbHNlLFxuICAgICAgZXJyb3JNc2dQb3B1cFRpdGxlOiAnJyxcbiAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgIGNhblN1Z2dlc3Q6IHRydWVcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50Q29vcmRpbmF0ZUZvcm1hdCA9IHRoaXMucHJvcHMuZGVmYXVsdENvb3JkaW5hdGUgPyB0aGlzLnByb3BzLmRlZmF1bHRDb29yZGluYXRlIDogREVGQVVMVF9DT09SRElOQVRFXG4gICAgdGhpcy5faGFuZGxlcyA9IG5ldyBIYW5kbGVzKClcbiAgICB0aGlzLmxvY2F0aW9uID0gbmV3IFBvaW50KClcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy9PbiB3aWRnZXQgbG9hZCBzZXQgZm9jdXMgdG8gaW5wdXQgY29vcmRpbmF0ZSB0ZXh0Ym94XG4gICAgdGhpcy5faW5wdXRUZXh0Ym94LmN1cnJlbnQuZm9jdXMoKVxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWVcbiAgICBpZiAoIXRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlR2VvY29kZVVybCgpXG4gICAgICB0aGlzLmNyZWF0ZUFQSVdpZGdldCgpXG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVHZW9jb2RlVXJsID0gKCkgPT4ge1xuICAgIC8vY2hlY2sgd2hldGhlciBzdWdnZXN0IGNhcGFiaWxpdGllcyBhdmFpbGFibGVcbiAgICB0aGlzLnZhbGlkYXRlR2VvY29kZVVybEZvclN1Z2dlc3Rpb24odGhpcy5zdGF0ZS5sb2NhdG9yVXJsKS50aGVuKChjYW5TdWdnZXN0OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2FuU3VnZ2VzdDogY2FuU3VnZ2VzdFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdmFsaWRhdGVHZW9jb2RlVXJsRm9yU3VnZ2VzdGlvbiA9IGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBlc3JpUmVxdWVzdCh2YWx1ZSwge1xuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBmOiAnanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGxldCBjYW5TdWdnZXN0ID0gZmFsc2VcbiAgICAgICAgICBjb25zdCBzdWdnZXN0UmVzdWx0OiBhbnkgPSByZXN1bHRcbiAgICAgICAgICAvL3ZhbGlkYXRlIGdlb2NvZGUgdXJsIHdpdGggdGhlIGF2YWlsYWJpbGl0eSBvZiBzdWdnZXN0IGNhcGFiaWxpdGllc1xuICAgICAgICAgIGlmIChzdWdnZXN0UmVzdWx0Py5kYXRhPy5jYXBhYmlsaXRpZXMuaW5jbHVkZXMoJ1N1Z2dlc3QnKSkge1xuICAgICAgICAgICAgY2FuU3VnZ2VzdCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShjYW5TdWdnZXN0KVxuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlBvcHMsIHByZXZTdGF0ZSkgPT4ge1xuICAgIC8vQ3JlYXRlIENWTSBhbmQgZHJhd2luZyBsYXllciBpZiBub3QgYXZhaWxhYmxlIG9yIGlmIG1hcCB2aWV3IGlzIGNoYW5nZWRcbiAgICBpZiAoIXRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNKSB7XG4gICAgICB0aGlzLmNyZWF0ZUFQSVdpZGdldCgpXG4gICAgfSBlbHNlIGlmICgocHJldlBvcHMuamltdU1hcHZpZXcgJiYgdGhpcy5wcm9wcy5qaW11TWFwdmlldyA9PT0gbnVsbCkgfHwgKHRoaXMucHJvcHMuamltdU1hcHZpZXcgJiYgdGhpcy5wcm9wcy5qaW11TWFwdmlldz8uaWQgIT09IHByZXZQb3BzLmppbXVNYXB2aWV3Py5pZCkpIHtcbiAgICAgIC8vcHJldiBtYXAgd2FzIGNvbmZpZ3VyZWQgYW5kIG5vdyByZW1vdmVkIHRoZW4gdXBkYXRlIHRoZSBkcmF3aW5nIGdyYXBoaWNzIGxheWVyXG4gICAgICBpZiAodGhpcy5kcmF3aW5nTGF5ZXIpIHtcbiAgICAgICAgdGhpcy5kcmF3aW5nTGF5ZXIucmVtb3ZlQWxsKClcbiAgICAgIH1cbiAgICAgIC8vaWYgbWFwIHZpZXcgaXMgY2hhbmdlZCBkZXN0cm95IHByZXYgZHJhd2luZyBsYXllciBhbmQgQ1ZNLCBzaW5jZSB0aGUgbWFwIFNSIGNvdWxkIGJlIGRpZmZlcmVudFxuICAgICAgLy9hbmQgdGhlIGFmdGVyIGNoYW5naW5nIG1hcCB0aGUgZHJhd2luZyBhbmQgY29udmVyc2lvbnMgc2hvdWxkIGJlIHNob3duIG9uIG5ldyBtYXBcbiAgICAgIHRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNPy5kZXN0cm95KClcbiAgICAgIHRoaXMuZHJhd2luZ0xheWVyPy5kZXN0cm95KClcbiAgICAgIHRoaXMuX2hhbmRsZXM/LnJlbW92ZUFsbCgpXG4gICAgICB0aGlzLm9uQ2xlYXJJbnB1dENsaWNrKClcbiAgICAgIC8vb25jZSB3ZSBzZXQgY29vcmRpbmF0ZVZNLCBjb250cm9sIHdpbGwgYWdhaW4gY29tZSBpbnRvIGNvbXBvbmVudERpZFVwZGF0ZSBhbmQgYXMgY29vcmRpbmF0ZVZNIGlzIG51bGwgaXQgd2lsbCBjYWxsIGNyZWF0ZUFQSVdpZGdldFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hcFBvaW50QWN0aXZlOiBmYWxzZSwgY29vcmRpbmF0ZVZNOiBudWxsIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRlZmF1bHRDb29yZGluYXRlICE9PSBwcmV2UG9wcy5kZWZhdWx0Q29vcmRpbmF0ZSB8fCB0aGlzLnByb3BzLmRlZmF1bHRGb3JtYXQgIT09IHByZXZQb3BzLmRlZmF1bHRGb3JtYXQpIHtcbiAgICAgIC8vaWYgaW5wdXQgc2V0dGluZ3MgYXJlIGNoYW5nZWQgdXBkYXRlIGRlZmF1bHRDb29yZHMgJiBkZWZGb3JtYXQsXG4gICAgICAvL2lmIGRlZmF1bHQgZm9ybWF0IHByb3AgaXMgbm90IHBhc3NlZCB0aGVuIHNldCB0aGUgZGVmYXVsdCBmb3JtYXRzIGZvciB0aGUgc2VsZWN0ZWQgY29vcmRpbmF0ZXNcbiAgICAgIC8vYWxzbyBjYWxsIG9uSW5wdXRTZXR0aW5nc09rQ2xpY2tlZCB3aGljaCB3aWxsIHRha2Ugb2YgdXBkYXRpbmcgVUkgYWNjb3JkaW5nIHRvIHNlbGVjdGVkIENvb3JkaW5hdGUgJiBmb3JtYXRcbiAgICAgIGNvbnN0IGRlZkNvb3JkcyA9IHRoaXMucHJvcHMuZGVmYXVsdENvb3JkaW5hdGUgPyB0aGlzLnByb3BzLmRlZmF1bHRDb29yZGluYXRlIDogREVGQVVMVF9DT09SRElOQVRFXG4gICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnN0YXRlLnN1cHBvcnRlZEZvcm1hdHMuZmluZChpID0+IGkubmFtZSA9PT0gZGVmQ29vcmRzKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRlZmF1bHRDb29yZHM6IHNlbGVjdGVkSXRlbS5uYW1lLFxuICAgICAgICBkZWZGb3JtYXQ6IHRoaXMucHJvcHMuZGVmYXVsdEZvcm1hdCA/IHRoaXMucHJvcHMuZGVmYXVsdEZvcm1hdCA6IHNlbGVjdGVkSXRlbS5kZWZhdWx0UGF0dGVyblxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLm9uSW5wdXRTZXR0aW5nc09rQ2xpY2tlZCgpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kcmF3aW5nTGF5ZXIgJiYgdGhpcy5kcmF3aW5nTGF5ZXIuZ3JhcGhpY3MubGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0UG9pbnRTeW1ib2wgIT09IHByZXZQb3BzLmRlZmF1bHRQb2ludFN5bWJvbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRlZlBvaW50U3ltYm9sOiB0aGlzLnByb3BzLmRlZmF1bHRQb2ludFN5bWJvbFxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvL0lmIGRlZmF1bHQgc3ltYm9sIGlzIHVwZGF0ZWQsIHVwZGF0ZSBpdCBvbiB0aGUgbGF5ZXIgKGZvciBidWlsZGVyIG5hZCBMaXZlIG1vZGUpXG4gICAgICAgIGNvbnN0IGRyYXduR3JhcGhpYyA9IHRoaXMuZHJhd2luZ0xheWVyLmdyYXBoaWNzLmdldEl0ZW1BdCgwKVxuICAgICAgICBjb25zdCBwb2ludFN5bWJvbCA9IHRoaXMuc3RhdGUuZGVmUG9pbnRTeW1ib2xcbiAgICAgICAgZHJhd25HcmFwaGljLnN5bWJvbCA9IGpzb25VdGlscy5mcm9tSlNPTihwb2ludFN5bWJvbClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy9jaGVjayBpZiB0aGUgZ2VvY29kZSBzZXJ2aWNlIHVybCBhbmQgbnVtYmVyIG9mIG1heCBzdWdnZXN0aW9ucyBjaGFuZ2VzIGZyb20gY29uZmlnXG4gICAgaWYgKHByZXZQb3BzLmxvY2F0b3JVUkwgJiYgcHJldlBvcHMubG9jYXRvclVSTCAhPT0gdGhpcy5wcm9wcy5sb2NhdG9yVVJMKSB7XG4gICAgICAvL2NsZWFyIHByZXZpb3VzIGlucHV0IG9uIGxvY2F0b3IgdXJsIGNoYW5nZVxuICAgICAgdGhpcy5vbkNsZWFySW5wdXRDbGljaygpXG4gICAgICAvL3VwZGF0ZSBsb2NhdG9yIHVybCBpbiB0aGUgc3RhdHdcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2NhdG9yVXJsOiB0aGlzLnByb3BzLmxvY2F0b3JVUkxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy92YWxpZGF0ZSBsb2NhdG9yIHVybFxuICAgICAgICB0aGlzLnZhbGlkYXRlR2VvY29kZVVybCgpXG4gICAgICAgIC8vdXBkYXRlIHRoZSBhZGRyZXNzIGNvbnZlcnNpb24gd2l0aCB0aGUgbmV3IGxvY2F0b3IgdXJsXG4gICAgICAgIGNvbnN0IGNvbnZlcnNpb25zID0gdGhpcy5zdGF0ZS5jb29yZGluYXRlVk0/LmNvbnZlcnNpb25zXG4gICAgICAgIGlmIChjb252ZXJzaW9ucykge1xuICAgICAgICAgIGNvbnN0IGFkZHJlc3NGb3JtYXQgPSBnZW5lcmF0ZUFkZHJlc3NGb3JtYXQodGhpcy5zdGF0ZS5sb2NhdG9yVXJsLCB0aGlzLnN0YXRlLm1pbmltdW1DYW5kaWRhdGVTY29yZSwgdGhpcy5zdGF0ZS5kaXNwbGF5RnVsbEFkZHJlc3MpXG4gICAgICAgICAgY29udmVyc2lvbnMuZm9yRWFjaCgoY29udmVyc2lvbkl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udmVyc2lvbkl0ZW0uZm9ybWF0Lm5hbWUgPT09ICdhZGRyZXNzJykge1xuICAgICAgICAgICAgICBjb252ZXJzaW9uSXRlbS5mb3JtYXQgPSBhZGRyZXNzRm9ybWF0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHByZXZQb3BzLm1heFN1Z2dlc3Rpb25zICE9PSB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWF4aW11bVN1Z2dlc3Rpb25zOiB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zXG4gICAgICB9KVxuICAgICAgY29uc3QgaW5wdXRUZXh0ID0gdGhpcy5nZXRDbGVhbklucHV0KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICAgIHRoaXMuZGlzcGxheVN1Z2dlc3Rpb25MaXN0KGlucHV0VGV4dClcbiAgICB9IFxuXG4gICAgLy9jaGVjayBpZiB0aGUgZGlzcGxheSBmdWxsIGFkZHJlc3MgY2hhbmdlZCBpbiBjb25maWdcbiAgICBpZiAocHJldlBvcHM/LmRpc3BsYXlGdWxsQWRkcmVzcyAhPT0gdGhpcy5wcm9wcy5kaXNwbGF5RnVsbEFkZHJlc3MpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNwbGF5RnVsbEFkZHJlc3M6IHRoaXMucHJvcHMuZGlzcGxheUZ1bGxBZGRyZXNzXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vdXBkYXRlIHRoZSBhZGRyZXNzIGNvbnZlcnNpb24gd2l0aCB0aGUgbmV3IGxvY2F0b3IgdXJsXG4gICAgICAgIGNvbnN0IGNvbnZlcnNpb25zID0gdGhpcy5zdGF0ZS5jb29yZGluYXRlVk0/LmNvbnZlcnNpb25zXG4gICAgICAgIGlmIChjb252ZXJzaW9ucykge1xuICAgICAgICAgIGNvbnN0IGFkZHJlc3NGb3JtYXQgPSBnZW5lcmF0ZUFkZHJlc3NGb3JtYXQodGhpcy5zdGF0ZS5sb2NhdG9yVXJsLCB0aGlzLnN0YXRlLm1pbmltdW1DYW5kaWRhdGVTY29yZSwgdGhpcy5zdGF0ZS5kaXNwbGF5RnVsbEFkZHJlc3MpXG4gICAgICAgICAgY29udmVyc2lvbnMuZm9yRWFjaCgoY29udmVyc2lvbkl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udmVyc2lvbkl0ZW0uZm9ybWF0Lm5hbWUgPT09ICdhZGRyZXNzJykge1xuICAgICAgICAgICAgICBjb252ZXJzaW9uSXRlbS5mb3JtYXQgPSBhZGRyZXNzRm9ybWF0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2hvd0NvbnZlcnNpb24odGhpcy5sb2NhdGlvbiwgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2VcbiAgICAvL3JlbW92ZSBwcmV2aW91c2x5IGRyYXduIGdyYXBoaWNzXG4gICAgaWYgKHRoaXMuZHJhd2luZ0xheWVyKSB7XG4gICAgICB0aGlzLmRyYXdpbmdMYXllci5yZW1vdmVBbGwoKVxuICAgICAgdGhpcy5kcmF3aW5nTGF5ZXIuZGVzdHJveSgpXG4gICAgfVxuICAgIC8vdGhpcyB3aWxsIHJlc2V0IHRoZSBjdXJzb3IgdG8gZGVmYXVsdFxuICAgIHRoaXMuX2Rpc3BsYXlEZWZhdWx0Q3Vyc29yKClcbiAgfVxuXG4gIGNyZWF0ZUFQSVdpZGdldCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubG9jYXRvclVybCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLmppbXVNYXB2aWV3ICYmIHRoaXMucHJvcHMuamltdU1hcHZpZXcudmlldykge1xuICAgICAgLy9jcmVhdGUgbmV3IGdyYXBoaWNzTGF5ZXIgdG8gc2hvdyBzZWxlY3RlZCBsb2NhdGlvbiBvbiBtYXBcbiAgICAgIHRoaXMuZHJhd2luZ0xheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xuICAgICAgICBsaXN0TW9kZTogJ2hpZGUnXG4gICAgICB9KVxuICAgICAgLy9hZGQgbGF5ZXIgb24gdGhlIG1hcCB2aWV3XG4gICAgICB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcubWFwLmFkZE1hbnkoW3RoaXMuZHJhd2luZ0xheWVyXSlcbiAgICAgIC8vVG8gc2hvdyBjb252ZXJzaW9ucyBvbiBtYXAgY2xpY2tcbiAgICAgIHRoaXMuX2hhbmRsZXMuYWRkKHRoaXMucHJvcHMuamltdU1hcHZpZXcudmlldy5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWFwUG9pbnRBY3RpdmUpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZWFjdGl2YXRlTWFwVG9vbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1hcFBvaW50QWN0aXZlOiAhdGhpcy5zdGF0ZS5tYXBQb2ludEFjdGl2ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlEZWZhdWx0Q3Vyc29yKClcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kcmF3aW5nTGF5ZXIucmVtb3ZlQWxsKClcbiAgICAgICAgICBpZiAoZXZlbnQubWFwUG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnZlcnNpb24oZXZlbnQubWFwUG9pbnQsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgICAvL0lmIG11bHRpcGxlIHdpZGdldHMgYXJlIGNvbmZpZ3VyZWQsIGFuZCBib3RoIGhhdmUgbWFwUG9pbnQgdG9vbCBhY3RpdmUsXG4gICAgICAvL2FuZCBvbmUgb2YgdGhlIHdpZGdldCBkZWFjdGl2YXRlcyBtYXBQb2ludCB0b29sLCB0aGVuIGNyb3NzIGhhaXIgY3Vyc29yIGlzIG5vdCBzaG93biBmb3Igb3RoZXIgd2lkZ2V0XG4gICAgICAvL3NvIG9uIHBvaW50IG1vdmUgY2hlY2sgaWYgbWFwUG9pbnQgdG9vbCBpcyBhY3RpdmUgdGhlbiBfZGlzcGxheU1hcFBvaW50Q3Vyc29yXG4gICAgICB0aGlzLl9oYW5kbGVzLmFkZCh0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcub24oJ3BvaW50ZXItbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXBQb2ludEFjdGl2ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXlNYXBQb2ludEN1cnNvcigpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNKSB7XG4gICAgICBjb25zdCBjVk0gPSBuZXcgQ29vcmRpbmF0ZUNvbnZlcnNpb25WaWV3TW9kZWwoe1xuICAgICAgICB2aWV3OiB0aGlzLnByb3BzLmppbXVNYXB2aWV3ID8gdGhpcy5wcm9wcy5qaW11TWFwdmlldy52aWV3IDogbnVsbFxuICAgICAgfSlcbiAgICAgIGNWTS53YXRjaCgnbWVzc2FnZXMnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9DYWxsIHRoZSBwYXVzZSBtZXRob2QgdG8gYXZvaWQgcmV2ZXJzZSBnZW9jb2RlIHJlcXVlc3Qgb24gbWFwIG1vdXNlIG1vdmVcbiAgICAgICAgICAgIGNWTS5wYXVzZSgpXG4gICAgICAgICAgICBjb25zdCBhbGxGb3JtYXRzID0gZm9ybWF0VXRpbHMuZ2VuZXJhdGVEZWZhdWx0Rm9ybWF0cyhjVk0ubWVzc2FnZXMpXG4gICAgICAgICAgICBjVk0uY29udmVyc2lvbnMucmVtb3ZlQWxsKClcblxuICAgICAgICAgICAgY29uc3QgYWxsU3VwcG9ydGVkRm9ybWF0czogT3V0cHV0U2V0dGluZ3NbXSA9IFtdXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzRm9ybWF0OiBPdXRwdXRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogJ2FkZHJlc3MnLFxuICAgICAgICAgICAgICBsYWJlbDogdGhpcy5ubHMoJ2FkZHJlc3MnKSxcbiAgICAgICAgICAgICAgZGVmYXVsdFBhdHRlcm46ICcnLFxuICAgICAgICAgICAgICBjdXJyZW50UGF0dGVybjogJycsXG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGlzQ3VzdG9tOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxTdXBwb3J0ZWRGb3JtYXRzLnB1c2goYWRkcmVzc0Zvcm1hdClcbiAgICAgICAgICAgIC8vcHVzaCBhZGRyZXNzIGZvcm1hdFxuICAgICAgICAgICAgY29uc3QgYWRkcmVzc0Zvcm1hdENvbnZlcnNpb24gPSBuZXcgQ29udmVyc2lvbih7XG4gICAgICAgICAgICAgIGZvcm1hdDogZ2VuZXJhdGVBZGRyZXNzRm9ybWF0KHRoaXMuc3RhdGUubG9jYXRvclVybCwgdGhpcy5zdGF0ZS5taW5pbXVtQ2FuZGlkYXRlU2NvcmUsIHRoaXMuc3RhdGUuZGlzcGxheUZ1bGxBZGRyZXNzKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNWTS5jb252ZXJzaW9ucy5hZGQoYWRkcmVzc0Zvcm1hdENvbnZlcnNpb24pXG5cbiAgICAgICAgICAgIGFsbEZvcm1hdHMuZm9yRWFjaCgoZGVmYXVsdEZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZGVmYXVsdEZvcm1hdC5uYW1lICE9PSAnYmFzZW1hcCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb252ZXJzaW9uID0gbmV3IENvbnZlcnNpb24oeyBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQgfSlcbiAgICAgICAgICAgICAgICBjVk0uY29udmVyc2lvbnMuYWRkKG5ld0NvbnZlcnNpb24pXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U3VwcG9ydGVkRm9ybWF0OiBPdXRwdXRTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGRlZmF1bHRGb3JtYXQubmFtZSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm5scyhkZWZhdWx0Rm9ybWF0Lm5hbWUpLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFBhdHRlcm46IGRlZmF1bHRGb3JtYXQuZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICBjdXJyZW50UGF0dGVybjogZGVmYXVsdEZvcm1hdC5jdXJyZW50UGF0dGVybixcbiAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpc0N1c3RvbTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbGxTdXBwb3J0ZWRGb3JtYXRzLnB1c2gobmV3U3VwcG9ydGVkRm9ybWF0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYWxsU3VwcG9ydGVkRm9ybWF0cy5zb3J0KChhLCBiKSA9PiBhLmxhYmVsLmxvY2FsZUNvbXBhcmUoYi5sYWJlbCkpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgY29vcmRpbmF0ZVZNOiBjVk0sXG4gICAgICAgICAgICAgIHN1cHBvcnRlZEZvcm1hdHM6IGFsbFN1cHBvcnRlZEZvcm1hdHNcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHM/LmdldFN1cHBvcnRlZEZvcm1hdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzPy5nZXRTdXBwb3J0ZWRGb3JtYXRzKHRoaXMuc3RhdGUuc3VwcG9ydGVkRm9ybWF0cylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IE9iamVjdC5hc3NpZ24oe30sIGppbXVVSURlZmF1bHRNZXNzYWdlcylcbiAgICAvL2ZvciB1bml0IHRlc3Rpbmcgbm8gbmVlZCB0byBtb2NrIGludGwgd2UgY2FuIGRpcmVjdGx5IHVzZSBkZWZhdWx0IGVuIG1zZ1xuICAgIGlmICh0aGlzLnByb3BzLmludGwgJiYgdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IG1lc3NhZ2VzW2lkXSA/IG1lc3NhZ2VzW2lkXSA6IGlkIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtZXNzYWdlc1tpZF0gPyBtZXNzYWdlc1tpZF0gOiBpZFxuICAgIH1cbiAgfVxuXG4gIG9uTWFwUG9pbnRDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcFBvaW50QWN0aXZlOiAhdGhpcy5zdGF0ZS5tYXBQb2ludEFjdGl2ZSxcbiAgICAgIGlzQWRkcmVzc09wdGlvbnNQb3B1cE9wZW46IGZhbHNlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubWFwUG9pbnRBY3RpdmUpIHtcbiAgICAgICAgdGhpcy5fZGlzcGxheU1hcFBvaW50Q3Vyc29yKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlEZWZhdWx0Q3Vyc29yKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX2Rpc3BsYXlNYXBQb2ludEN1cnNvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5qaW11TWFwdmlldyAmJiB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcgJiYgdGhpcy5wcm9wcy5qaW11TWFwdmlldy52aWV3LmNvbnRhaW5lciAmJlxuICAgICAgICB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcuY29udGFpbmVyLnN0eWxlLmN1cnNvciAhPT0gJ2Nyb3NzaGFpcicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5qaW11TWFwdmlldy52aWV3LmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kaXNwbGF5RGVmYXVsdEN1cnNvciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5qaW11TWFwdmlldyAmJiB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcgJiYgdGhpcy5wcm9wcy5qaW11TWFwdmlldy52aWV3LmNvbnRhaW5lciAmJlxuICAgICAgICB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcuY29udGFpbmVyLnN0eWxlLmN1cnNvciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ29weUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSB0aGlzLnByb3BzLmlucHV0TGFiZWxTdHJpbmcgPyB0aGlzLnByb3BzLmlucHV0TGFiZWxTdHJpbmcgOiAnJ1xuICAgIC8vY2xlYXIgcHJldiBzZWxlY3Rpb25cbiAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgfVxuICAgIC8vY3JlYXRlIGxpc3Qgb2YgaW5wdXQgYW5kIGFsbCBvdXRwdXQgdmFsdWVzXG4gICAgLy9hZGQgY3VycmVudCBpbnB1dCBsYWJlbCBmb3JtYXQgYW5kIHZhbHVlXG4gICAgbGV0IGlucHV0Q29vcmQgPSAnKCcgKyB0aGlzLm5scyh0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0KSArICcpXFxyXFxuJyArIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZVxuICAgIGlmIChpbnB1dExhYmVsICE9PSAnJykge1xuICAgICAgaW5wdXRDb29yZCA9IGlucHV0TGFiZWwgKyBpbnB1dENvb3JkXG4gICAgfVxuICAgIGNvbnN0IGFsbENvb3Jkczogc3RyaW5nID0gdGhpcy5wcm9wcy5jb3B5QWxsTGlzdCA/IGlucHV0Q29vcmQgKyAnXFxyXFxuXFxuJyArIHRoaXMucHJvcHMuY29weUFsbExpc3Quam9pbignXFxyXFxuXFxuJykgOiBpbnB1dENvb3JkXG4gICAgLy9jb3B5IGlucHV0IGFuZCBhbGwgb3V0cHV0IHZhbHVlc1xuICAgIHRoaXMuX2NvcHlJbnB1dFRleHRib3guY3VycmVudC52YWx1ZSA9IGFsbENvb3Jkc1xuICAgIHRoaXMuX2NvcHlJbnB1dFRleHRib3guY3VycmVudC5zZWxlY3QoKVxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgICAvL2Rpc2FibGUgaXQgc28gdGhhdCBpdCB3aWxsIG5vdCBnZXQgZm9jdXMgYW5kIHdpbGwgbm90IHJlYWQgb3V0IHRoZSBjb250ZW50cyBpbiBzY3JlZW4gcmVhZGVyXG4gICAgLy9lbmFibGUgaXQgYmFjayBhZnRlciB0aGUgdGltZW91dFxuICAgIHRoaXMuX2NvcHlJbnB1dFRleHRib3guY3VycmVudC5kaXNhYmxlZCA9IHRydWVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQ29weU1lc3NhZ2VPcGVuOiB0cnVlXG4gICAgfSlcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9SZW1vdmUgdGhlIGV4aXN0aW5nIHNlbGVjdGlvblxuICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNDb3B5TWVzc2FnZU9wZW46IGZhbHNlXG4gICAgICB9KVxuICAgICAgdGhpcy5fY29weUlucHV0VGV4dGJveC5jdXJyZW50LmRpc2FibGVkID0gZmFsc2VcbiAgICB9LCA1MDApXG4gIH1cblxuICBvblpvb21DbGljayA9ICgpID0+IHtcbiAgICAvL3pvb20gdG8gdGhlIHNlbGVjdGVkIGxvYWN0aW9uLCB3aGljaCB3aWxsIGJlIHRoZSBvbmx5IGdyYXBoaWMgaW4gZHJhd2luZ0xheWVyXG4gICAgaWYgKHRoaXMuZHJhd2luZ0xheWVyICYmIHRoaXMuZHJhd2luZ0xheWVyLmdyYXBoaWNzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTG9jYXRpb25HcmFwaGljID0gdGhpcy5kcmF3aW5nTGF5ZXIuZ3JhcGhpY3MuZ2V0SXRlbUF0KDApXG4gICAgICB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcuZ29Ubyh7XG4gICAgICAgIGNlbnRlcjogc2VsZWN0ZWRMb2NhdGlvbkdyYXBoaWMuZ2VvbWV0cnksXG4gICAgICAgIHNjYWxlOiB0aGlzLnByb3BzLnpvb21TY2FsZSA/IHRoaXMucHJvcHMuem9vbVNjYWxlIDogWk9PTV9TQ0FMRVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblNldHRpbmdzQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0lucHV0U2V0dGluZ3NQb3B1cE9wZW46ICF0aGlzLnN0YXRlLmlzSW5wdXRTZXR0aW5nc1BvcHVwT3BlbixcbiAgICAgIGlzQWRkcmVzc09wdGlvbnNQb3B1cE9wZW46IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG9uSW5wdXRTZXR0aW5nc09rQ2xpY2tlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kZWZhdWx0Q29vcmRzICE9PSAnYWRkcmVzcycgJiYgdGhpcy5zdGF0ZS5kZWZGb3JtYXQgPT09ICcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0lucHV0U2V0dGluZ3NQb3B1cE9wZW46IGZhbHNlXG4gICAgfSlcbiAgICB0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0ID0gdGhpcy5zdGF0ZS5kZWZhdWx0Q29vcmRzXG4gICAgLy91cGRhdGUgY3VycmVudCBwYXR0ZXJuXG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB0aGlzLnN0YXRlLmNvb3JkaW5hdGVWTS5jb252ZXJzaW9ucy5zb21lKChjb24pID0+IHtcbiAgICAgIGlmIChjb24uZm9ybWF0Lm5hbWUgPT09IHRoaXMuc3RhdGUuZGVmYXVsdENvb3Jkcykge1xuICAgICAgICBjb24uZm9ybWF0LmN1cnJlbnRQYXR0ZXJuID0gdGhpcy5zdGF0ZS5kZWZGb3JtYXRcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vaWYgdmFsdWUgaXMgdmFsaWRcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5zaG93Q29udmVyc2lvbih0aGlzLmxvY2F0aW9uLCBmYWxzZSlcbiAgICB9XG4gIH1cblxuICBvbklucHV0U2V0dGluZ3NDYW5jZWxDbGlja2VkID0gKCkgPT4ge1xuICAgIC8vY2xvc2UgdGhlIGlucHV0IHNldHRpbmdzIGFuZCBzZXQgdGhlIGNvb3JkaW5hdGUgYW5kIGZvcm1hdCB0byB0aGUgY3VycmVudCBzZWxlY3RlZCBmb3JtYXRcbiAgICAvL2dldCBjdXJyZW50IHBhdHRlcm5cbiAgICBsZXQgY3VycmVudFBhdHRlcm4gPSAnJ1xuICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdGhpcy5zdGF0ZS5jb29yZGluYXRlVk0uY29udmVyc2lvbnMuc29tZSgoY29uKSA9PiB7XG4gICAgICBpZiAoY29uLmZvcm1hdC5uYW1lID09PSB0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0KSB7XG4gICAgICAgIGN1cnJlbnRQYXR0ZXJuID0gY29uLmZvcm1hdC5jdXJyZW50UGF0dGVyblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzSW5wdXRTZXR0aW5nc1BvcHVwT3BlbjogZmFsc2UsXG4gICAgICBkZWZhdWx0Q29vcmRzOiB0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0LFxuICAgICAgZGVmRm9ybWF0OiBjdXJyZW50UGF0dGVyblxuICAgIH0pXG4gIH1cblxuICBvbklucHV0Q29vcmRpbmF0ZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgZGlzYWJsZUNvcHlab29tOiB0cnVlXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMuZ2V0U3VnZ2VzdGlvbnNUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2V0U3VnZ2VzdGlvbnNUaW1lcilcbiAgICAgIH1cbiAgICAgIC8vaGlkZSB0aGUgc3VnZ2VzdGlvbiBsaXN0IGlmIGVtcHR5IGlucHV0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNBZGRyZXNzT3B0aW9uc1BvcHVwT3Blbikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNBZGRyZXNzT3B0aW9uc1BvcHVwT3BlbjogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LCA1MDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gdGhpcy5nZXRDbGVhbklucHV0KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICAgICAgdGhpcy5kaXNwbGF5U3VnZ2VzdGlvbkxpc3QoaW5wdXRUZXh0KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5U3VnZ2VzdGlvbkxpc3QgPSAoaW5wdXRUZXh0OiBzdHJpbmcpID0+IHtcbiAgICBnZXRDb29yZGluYXRlVHlwZShpbnB1dFRleHQpLnRoZW4oKGl0bSkgPT4ge1xuICAgICAgaWYgKGl0bSAmJiBpdG0ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmdldFN1Z2dlc3Rpb25zVGltZXIpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ2V0U3VnZ2VzdGlvbnNUaW1lcilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFN1Z2dlc3Rpb25zVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5jYW5TdWdnZXN0KSB7XG4gICAgICAgICAgICAvLyBnZXQgYWxsIHRoZSBhZGRyZXNzZXMgc3VnZ2VzdGlvbnMgYW5kIHNob3cgaXQgd2l0aCB0aGUgaGVscCBvZiB2YWx1ZSwgbGFiZWwgYW5kIG1hZ2ljIGtleVxuICAgICAgICAgICAgZmV0Y2hTdWdnZXN0aW9uKHRoaXMuc3RhdGUubG9jYXRvclVybCwgaW5wdXRUZXh0LCB0aGlzLnN0YXRlLm1heGltdW1TdWdnZXN0aW9ucykudGhlbihzdWdnZXN0aW9uID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYWRkcmVzc09wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICBzdWdnZXN0aW9uLnN1Z2dlc3Rpb25JdGVtLmZvckVhY2goKGFkZHJJbmZvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJPcHRpb246IEFkZHJlc3NPcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkckluZm8uc3VnZ2VzdGlvbiArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGFkZHJJbmZvLnN1Z2dlc3Rpb24sXG4gICAgICAgICAgICAgICAgICBtYWdpY0tleTogYWRkckluZm8ubWFnaWNLZXksXG4gICAgICAgICAgICAgICAgICBtYXBQb2ludDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhZGRyZXNzT3B0aW9ucy5wdXNoKGFkZHJPcHRpb24pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGlmIChhZGRyZXNzT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEFkZHJlc3M6IGFkZHJlc3NPcHRpb25zLmxlbmd0aCA+IDAgPyBhZGRyZXNzT3B0aW9uc1swXS52YWx1ZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzc09wdGlvbnM6IGFkZHJlc3NPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgaXNBZGRyZXNzT3B0aW9uc1BvcHVwT3BlbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBhZGRyZXNzT3B0aW9uczogW10sXG4gICAgICAgICAgICAgICAgICBpc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LCAzMDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNob3dQYXJzZUNvb3JkaW5hdGVFcnJvciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVDb3B5Wm9vbTogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5zaG93TWVzc2FnZSh0aGlzLm5scygnZXJyb3JNc2dUaXRsZScpLCB0aGlzLm5scygncGFyc2VDb29yZGluYXRlc0Vycm9yJykpXG4gIH1cblxuICBvblJldmVyc2VDb252ZXJ0Q29tcGxldGUgPSAobWFwUG9pbnQ6IFBvaW50KSA9PiB7XG4gICAgaWYgKG1hcFBvaW50KSB7XG4gICAgICB0aGlzLnNob3dDb252ZXJzaW9uKG1hcFBvaW50LCB0cnVlKVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5wcm9jZXNzaW5nKSB7XG4gICAgICB0aGlzLnByb3BzLnByb2Nlc3NpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgb25FcnJvckluUmV2ZXJzZUNvbnZlcnQgPSAoZXJyKSA9PiB7XG4gICAgdGhpcy5zaG93UGFyc2VDb29yZGluYXRlRXJyb3IoKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgaWYgKHRoaXMucHJvcHMucHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5wcm9wcy5wcm9jZXNzaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGlzVmFsaWROdW1iZXIgPSAobnVtYmVyOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIG51bWJlciA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUobnVtYmVyKVxuICB9XG5cbiAgaXNWYWxpZFBvaW50ID0gKHBvaW50OiBQb2ludCk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBwb2ludCAmJiB0aGlzLmlzVmFsaWROdW1iZXIocG9pbnQueCkgJiYgdGhpcy5pc1ZhbGlkTnVtYmVyKHBvaW50LnkpXG4gIH1cblxuICBnZXRGcm9tR2VvQ29vcmRpbmF0ZVN0cmluZyA9IChwYXJhbWV0ZXJzOiBhbnkpOiBQcm9taXNlPFBvaW50PiA9PiB7XG4gICAgY29uc3QgeyBjb29yZGluYXRlLCBzcGF0aWFsUmVmZXJlbmNlLCBmb3JtYXROYW1lIH0gPSBwYXJhbWV0ZXJzXG4gICAgcmV0dXJuIGdlb21ldHJ5U2VydmljZS5mcm9tR2VvQ29vcmRpbmF0ZVN0cmluZyhHRU9NRVRSWV9TRVJWSUNFX1VSTCwge1xuICAgICAgc3RyaW5nczogW2Nvb3JkaW5hdGVdLFxuICAgICAgc3I6IHNwYXRpYWxSZWZlcmVuY2UsXG4gICAgICBjb252ZXJzaW9uVHlwZTogZm9ybWF0TmFtZVxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgcmV0dXJuUG9pbnQgPSBuZXcgUG9pbnQoe1xuICAgICAgICAgIHg6IHJlc3BvbnNlWzBdWzBdLFxuICAgICAgICAgIHk6IHJlc3BvbnNlWzBdWzFdLFxuICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2VcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFBvaW50KHJldHVyblBvaW50KSkge1xuICAgICAgICAgIHRocm93IHJlc3BvbnNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuUG9pbnRcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKVxuICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBpbnB1dCB0ZXh0IHRvIHRoZSBwb2ludCBmcm9tIHRoZSBzcGVjaWZpZWQgZm9ybWF0IG5hbWVcbiAgICogQHBhcmFtIGlucHV0Rm9ybWF0TmFtZVxuICAgKiBAcGFyYW0gaW5wdXRUZXh0XG4gICAqIEBwYXJhbSB1c2VGb3JtYXRSZXZlcnNlQ29udmVydFxuICAgKi9cbiAgcmV2ZXJzZUNvbnZlcnRJbnB1dCA9IChpbnB1dEZvcm1hdE5hbWU6IHN0cmluZywgaW5wdXRUZXh0OiBzdHJpbmcsIHVzZUZvcm1hdFJldmVyc2VDb252ZXJ0OiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5zdGF0ZS5jb29yZGluYXRlVk0uY29udmVyc2lvbnMuc29tZSgoY29uKSA9PiB7XG4gICAgICBpZiAoaW5wdXRGb3JtYXROYW1lID09PSBjb24uZm9ybWF0Lm5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvY2Vzc2luZykge1xuICAgICAgICAgIHRoaXMucHJvcHMucHJvY2Vzc2luZyh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VGb3JtYXRSZXZlcnNlQ29udmVydCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNLnJldmVyc2VDb252ZXJ0KGlucHV0VGV4dCwgY29uLmZvcm1hdCkudGhlbih0aGlzLm9uUmV2ZXJzZUNvbnZlcnRDb21wbGV0ZSwgdGhpcy5vbkVycm9ySW5SZXZlcnNlQ29udmVydClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldEZyb21HZW9Db29yZGluYXRlU3RyaW5nKHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGU6IGlucHV0VGV4dCxcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGNvbi5mb3JtYXQuc3BhdGlhbFJlZmVyZW5jZSxcbiAgICAgICAgICAgIGZvcm1hdE5hbWU6IGNvbi5mb3JtYXQubmFtZVxuICAgICAgICAgIH0pLnRoZW4odGhpcy5vblJldmVyc2VDb252ZXJ0Q29tcGxldGUsIHRoaXMub25FcnJvckluUmV2ZXJzZUNvbnZlcnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBEZWdyZWUgc3ltYm9sLCBuZXcgbGluZSBjaGFycyBhbmQgZXh0cmEgc3BhY2VzIGlmIGZyb20gdGhlIGlucHV0IHRleHRcbiAgICogQHBhcmFtIGlucHV0VGV4dCA6IFN0cmluZ1xuICAgKi9cbiAgZ2V0Q2xlYW5JbnB1dCA9IChpbnB1dFRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgLy9yZW1vdmUgZGVncmVlIHN5bWJvbCBmcm9tIHRoZSBzZWFyY2ggdG8gbWF0Y2ggdGhlIGV4cFxuICAgIGlucHV0VGV4dCA9IGlucHV0VGV4dC5zcGxpdChERUdSRUVfU1lNQk9MKS5qb2luKCcnKVxuICAgIGlucHV0VGV4dCA9IGlucHV0VGV4dC5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgaW5wdXRUZXh0ID0gaW5wdXRUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgICByZXR1cm4gaW5wdXRUZXh0LnRvVXBwZXJDYXNlKClcbiAgfVxuXG4gIGdldFByb2Nlc3NlZFRleHRJbnB1dCA9IChpbnB1dFRleHQ6IHN0cmluZywgbm90YXRpb246IE5vdGF0aW9uLCB0ZXN0aW5nTW9kZTogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZVRleHRJbmZvOiBQcm9jZXNzZWRDb29yZGluYXRlVGV4dEluZm8gPSBwcm9jZXNzQ29vcmRUZXh0SW5wdXQoaW5wdXRUZXh0LCBub3RhdGlvbiwgdGVzdGluZ01vZGUpXG4gICAgaWYgKGNvb3JkaW5hdGVUZXh0SW5mby5wcmVmaXhTdWZmaXhFcnJvciAmJiAhdGVzdGluZ01vZGUpIHtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UoJycsIHRoaXMubmxzKCdsYXRMb25nV2FybmluZ01lc3NhZ2UnKSlcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVUZXh0SW5mby5zdHJcbiAgfVxuXG4gIGdldEN1cnJlbnRGb3JtYXQgPSAoKTogX19lc3JpLkZvcm1hdCA9PiB7XG4gICAgbGV0IGN1cnJlbnRGb3JtYXRcbiAgICB0aGlzLnN0YXRlLmNvb3JkaW5hdGVWTS5jb252ZXJzaW9ucy5zb21lKChjb24pID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmRlZmF1bHRDb29yZHMgPT09IGNvbi5mb3JtYXQubmFtZSkge1xuICAgICAgICBjdXJyZW50Rm9ybWF0ID0gY29uLmZvcm1hdFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm4gY3VycmVudEZvcm1hdFxuICB9XG5cbiAgdHJ5UGFyc2luZ0Zvcm1hdCA9IGFzeW5jIChpbnB1dFRleHQ6IHN0cmluZywgY29udmVyc2lvbjogX19lc3JpLkNvbnZlcnNpb24pOiBQcm9taXNlPF9fZXNyaS5Qb2ludD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAvL3JldmVyc2UgY29udmVydCB0aGUgaW5wdXQgdGV4dCB0byBnZXQgbWFwUG9pbnRcbiAgICAgIGNvbnN0IG1hcFBvaW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb29yZGluYXRlVk0ucmV2ZXJzZUNvbnZlcnQoaW5wdXRUZXh0LCBjb252ZXJzaW9uLmZvcm1hdClcbiAgICAgIC8vaWYgbWFwIHBvaW50IGlzIHZhbGlkIG1lYW5zIHRoZSBpbnB1dCB0ZXh0IGlzIHJldmVyc2VDb252ZXJ0ZWQgaW4gdGhlIHRoZSBmb3JtYXRcbiAgICAgIGlmIChtYXBQb2ludCkge1xuICAgICAgICAvL1NhbWUgdGV4dCBjYW4gYmUgcmV2ZXJzZUNvbnZlcnRlZCBpbnRvIG11bHRpcGxlIGZvcm1hdCwgdG8gb3ZlcmNvbWUgdGhlIGlzc3VlIGNvbnZlcnQgdGhlIG1hcFBvaW50IHVzaW5nIHNhbWUgZm9ybWF0XG4gICAgICAgIC8vYW5kIGlmIHRoZSBpbnB1dFZhbHVlL2lucHV0VGV4dCBtYXRjaGVzIHRoZSBjb252ZXJzaW9uIHRoZW4gY29uc2lkZXIgdGhpcyBhcyB2YWxpZCByZXN1bHQgYW5kIHJldHVybiBpdFxuICAgICAgICBjb25zdCBjb252ZXJzaW9ucyA9IGF3YWl0IHRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNLnVwZGF0ZUNvbnZlcnNpb25zKFtjb252ZXJzaW9uXSwgbWFwUG9pbnQpXG4gICAgICAgIGlmIChjb252ZXJzaW9ucz8ubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIChjb252ZXJzaW9uc1swXT8uZGlzcGxheUNvb3JkaW5hdGUgPT09IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSB8fFxuICAgICAgICAgICAgY29udmVyc2lvbnNbMF0/LmRpc3BsYXlDb29yZGluYXRlID09PSBpbnB1dFRleHQpKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcFBvaW50XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duID0gKGV2dCkgPT4ge1xuICAgIGlmIChldnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAodGhpcy5nZXRTdWdnZXN0aW9uc1RpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5nZXRTdWdnZXN0aW9uc1RpbWVyKVxuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXRUZXh0ID0gdGhpcy5nZXRDbGVhbklucHV0KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICAgIGdldENvb3JkaW5hdGVUeXBlKGlucHV0VGV4dCkudGhlbigoaXRtKSA9PiB7XG4gICAgICAgIC8vY2hlY2sgaWYgaW5wdXQgY2FuIGJlIHBhcnNlZCB3aXRob3V0IHJldmVyc2UgZnVuY3Rpb25cbiAgICAgICAgaWYgKGl0bSAmJiBpdG0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChpdG0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dEZvcm1hdE5hbWUgPSBpdG1bMF0uY29udmVyc2lvblR5cGVcbiAgICAgICAgICAgIGNvbnN0IHVzZUZvcm1hdFJldmVyc2VDb252ZXJ0ID0gIShpbnB1dEZvcm1hdE5hbWUgPT09ICdkZCcgfHwgaW5wdXRGb3JtYXROYW1lID09PSAnZGRtJyB8fCBpbnB1dEZvcm1hdE5hbWUgPT09ICdkbXMnKVxuICAgICAgICAgICAgY29uc3QgY29vcmRUZXh0ID0gdGhpcy5nZXRQcm9jZXNzZWRUZXh0SW5wdXQoaW5wdXRUZXh0LCBpdG1bMF0sIGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5yZXZlcnNlQ29udmVydElucHV0KGlucHV0Rm9ybWF0TmFtZSwgY29vcmRUZXh0LCB1c2VGb3JtYXRSZXZlcnNlQ29udmVydClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtSW5wdXROb3RhdGlvbkZyb21Vc2VyKGl0bSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMucHJvY2Vzc2luZykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9jZXNzaW5nKHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZHJlc3NUb0xvY2F0aW9ucyh0aGlzLnN0YXRlLmxvY2F0b3JVcmwsIGlucHV0VGV4dCwgdGhpcy5zdGF0ZS5taW5pbXVtQ2FuZGlkYXRlU2NvcmUpLnRoZW4oKGFkZHJlc3NSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChhZGRyZXNzUmVzdWx0ICYmIGFkZHJlc3NSZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpZiAoYWRkcmVzc1Jlc3VsdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3NPcHRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICAgIGlzQWRkcmVzc09wdGlvbnNQb3B1cE9wZW46IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udmVyc2lvbihhZGRyZXNzUmVzdWx0WzBdLmxvY2F0aW9uLCB0cnVlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzc09wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgIC8vR2V0IG9ubHkgdGhlIHZhbGlkIGNvbnZlcnNpb24gcmVzdWx0c1xuICAgICAgICAgICAgICAgIGFkZHJlc3NSZXN1bHQuZm9yRWFjaCgoYWRkckluZm8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhZGRyT3B0aW9uOiBBZGRyZXNzT3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYWRkckluZm8uYWRkcmVzcyArIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYWRkckluZm8uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgbWFwUG9pbnQ6IGFkZHJJbmZvLmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhZGRyZXNzT3B0aW9ucy5wdXNoKGFkZHJPcHRpb24pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQWRkcmVzczogYWRkcmVzc09wdGlvbnMubGVuZ3RoID4gMCA/IGFkZHJlc3NPcHRpb25zWzBdLnZhbHVlIDogJycsXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzT3B0aW9uczogYWRkcmVzc09wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBpc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGVmYXVsdENvb3JkcyAhPT0gJ2FkZHJlc3MnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV2ZXJzZUZvcm1hdFByb21pc2VzID0gW11cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvb3JkaW5hdGVWTS5jb252ZXJzaW9ucy5mb3JFYWNoKChjb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjb24uZm9ybWF0Lm5hbWUgIT09ICdhZGRyZXNzJykge1xuICAgICAgICAgICAgICAgICAgICByZXZlcnNlRm9ybWF0UHJvbWlzZXMucHVzaCh0aGlzLnRyeVBhcnNpbmdGb3JtYXQoaW5wdXRUZXh0LCBjb24pKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy90cnkgcGFyc2luZyBpbiBhbGwgY29udmVyc2lvbiBhbmQgaWYgdmFsaWQgcmVzdWx0IGlzIGZvdW5kIHBlcmZvcm0gcmV2ZXJzZUNvbXBsZXRlIG9wZXJhdGlvbiBvbiBpdFxuICAgICAgICAgICAgICAgIGlmIChyZXZlcnNlRm9ybWF0UHJvbWlzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocmV2ZXJzZUZvcm1hdFByb21pc2VzKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdEZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnNvbWUoKG1hcFBvaW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRGb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25SZXZlcnNlQ29udmVydENvbXBsZXRlKG1hcFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbm8gcmVzdWx0IGZvdW5kIHNob3cgZXJyb3IgbXNnXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYXJzZUNvb3JkaW5hdGVFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIChlcnJSZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGFyc2VDb29yZGluYXRlRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGFyc2VDb29yZGluYXRlRXJyb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYXJzZUNvb3JkaW5hdGVFcnJvcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9jZXNzaW5nKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uZmlybUlucHV0Tm90YXRpb25Gcm9tVXNlciA9IChpdG06IE5vdGF0aW9uW10pID0+IHtcbiAgICBjb25zdCBjb25maXJtRm9ybWF0cyA9IFtdXG4gICAgaXRtLmZvckVhY2goKGl0bUluZm8pID0+IHtcbiAgICAgIGNvbnN0IG5ld1N1cHBvcnRlZEZvcm1hdDogSW5wdXRGb3JtYXROb3RhdGlvbiA9IHtcbiAgICAgICAgdmFsdWU6IGl0bUluZm8ubmFtZSxcbiAgICAgICAgbGFiZWw6IHRoaXMubmxzKGl0bUluZm8ubm90YXRpb25UeXBlKSxcbiAgICAgICAgbm90YXRpb246IGl0bUluZm9cbiAgICAgIH1cbiAgICAgIGNvbmZpcm1Gb3JtYXRzLnB1c2gobmV3U3VwcG9ydGVkRm9ybWF0KVxuICAgIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhZGRyZXNzT3B0aW9uczogW10sXG4gICAgICBpc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1lZElucHV0Tm90YXRpb246IGNvbmZpcm1Gb3JtYXRzWzBdLnZhbHVlLFxuICAgICAgaW5wdXROb3RhdGlvbk9wdGlvbnM6IGNvbmZpcm1Gb3JtYXRzLFxuICAgICAgaW5wdXROb3RhdGlvbldhcm5pbmc6IGl0bS5sZW5ndGggKyAnICcgKyB0aGlzLm5scygnbXVsdGlwbGVOb3RhdGlvbkxhYmVsJyksXG4gICAgICBpc0NvbmZpcm1JbnB1dE5vdGF0aW9uUG9wdXBPcGVuOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIG9uU2VsZWN0ZWRBZGRyZXNzQ2hhbmdlID0gKGFkZHJlc3NWYWx1ZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRBZGRyZXNzOiBhZGRyZXNzVmFsdWVcbiAgICB9LCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEFkZHJlc3MpIHtcbiAgICAgICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzT3B0aW9ucy5zb21lKChhZGRyT3B0aW9uOiBBZGRyZXNzT3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKGFkZHJPcHRpb24udmFsdWUgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgICAgICBpZiAoYWRkck9wdGlvbi5tYWdpY0tleSkge1xuICAgICAgICAgICAgICAvLyBnZXQgdGhlIGxvY2F0aW9uIGZvciBzZWxlY3RlZCBhZGRyZXNzL3N1Z2dlc3Rpb24gYW5kIHNldCB0aGUgbGFiZWwgb2YgaXQgaW4gaW5wdXQgYm94IGFuZCBzaG93IGxvY2F0aW9uIG9uIG1hcFxuICAgICAgICAgICAgICBnZXRMb2NhdGlvbkZvclN1Z2dlc3Rpb24odGhpcy5zdGF0ZS5sb2NhdG9yVXJsLCBhZGRyT3B0aW9uLm1hZ2ljS2V5LCBhZGRyZXNzVmFsdWUsIHRoaXMuc3RhdGUubWluaW11bUNhbmRpZGF0ZVNjb3JlKS50aGVuKChhZGRyZXNzUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiBhZGRyT3B0aW9uLmxhYmVsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb252ZXJzaW9uKGFkZHJlc3NSZXN1bHRbMF0ubG9jYXRpb24sIHRydWUpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZHJPcHRpb24ubWFwUG9pbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93Q29udmVyc2lvbihhZGRyT3B0aW9uLm1hcFBvaW50LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkQWRkcmVzczogJycsXG4gICAgICAgICAgYWRkcmVzc09wdGlvbnM6IFtdLFxuICAgICAgICAgIGlzQWRkcmVzc09wdGlvbnNQb3B1cE9wZW46IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uSW5wdXROb3RhdGlvbkNoYW5nZSA9IChldnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbmZpcm1lZElucHV0Tm90YXRpb246IGV2dC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgb25Db25maXJtSW5wdXRPa0NsaWNrZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY29uZmlybWVkSW5wdXROb3RhdGlvbikge1xuICAgICAgY29uc3QgaW5wdXRUZXh0ID0gdGhpcy5nZXRDbGVhbklucHV0KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICAgIGxldCBzZWxlY3RlZE5vdGF0aW9uOiBOb3RhdGlvblxuICAgICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHRoaXMuc3RhdGUuaW5wdXROb3RhdGlvbk9wdGlvbnMuc29tZSgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gdGhpcy5zdGF0ZS5jb25maXJtZWRJbnB1dE5vdGF0aW9uKSB7XG4gICAgICAgICAgc2VsZWN0ZWROb3RhdGlvbiA9IGl0ZW0ubm90YXRpb25cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc3QgY29vcmRUZXh0ID0gdGhpcy5nZXRQcm9jZXNzZWRUZXh0SW5wdXQoaW5wdXRUZXh0LCBzZWxlY3RlZE5vdGF0aW9uLCBmYWxzZSlcbiAgICAgIHRoaXMucmV2ZXJzZUNvbnZlcnRJbnB1dChzZWxlY3RlZE5vdGF0aW9uLmNvbnZlcnNpb25UeXBlLCBjb29yZFRleHQsIGZhbHNlKVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29uZmlybWVkSW5wdXROb3RhdGlvbjogJycsXG4gICAgICAgIGlucHV0Tm90YXRpb25PcHRpb25zOiBbXSxcbiAgICAgICAgaXNDb25maXJtSW5wdXROb3RhdGlvblBvcHVwT3BlbjogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Db25maXJtSW5wdXRDYW5jZWxDbGlja2VkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29uZmlybWVkSW5wdXROb3RhdGlvbjogJycsXG4gICAgICBpbnB1dE5vdGF0aW9uT3B0aW9uczogW10sXG4gICAgICBpc0NvbmZpcm1JbnB1dE5vdGF0aW9uUG9wdXBPcGVuOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBvbkNsZWFySW5wdXRDbGljayA9ICgpID0+IHtcbiAgICAvL3JlbW92ZSBwcmV2aW91c2x5IGRyYXduIGdyYXBoaWNzXG4gICAgaWYgKHRoaXMuZHJhd2luZ0xheWVyKSB7XG4gICAgICB0aGlzLmRyYXdpbmdMYXllci5yZW1vdmVBbGwoKVxuICAgIH1cbiAgICAvL2VtcHR5IHRoZSB0ZXh0IGlucHV0XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgIGRpc2FibGVDb3B5Wm9vbTogdHJ1ZSxcbiAgICAgIGlzQWRkcmVzc09wdGlvbnNQb3B1cE9wZW46IGZhbHNlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGVhcikge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xlYXIoKVxuICAgICAgfVxuICAgICAgdGhpcy5faW5wdXRUZXh0Ym94LmN1cnJlbnQuZm9jdXMoKVxuICAgIH0pXG4gIH1cblxuICBvbkRlZmF1bHRDb29yZHNDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZWZhdWx0Q29vcmRzOiBldnQudGFyZ2V0LnZhbHVlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldFRvRGVmYXVsdFBhdHRlcm4odGhpcy5zdGF0ZS5kZWZhdWx0Q29vcmRzKVxuICAgIH0pXG4gIH1cblxuICBvbkZvcm1hdENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGVmRm9ybWF0OiB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBvbkZvcm1hdEFjY2VwdFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkZWZGb3JtYXQ6IHZhbHVlLnRyaW0oKVxuICAgIH0pXG4gIH1cblxuICBvblJlc2V0QnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc3RhdGUuZGVmYXVsdENvb3Jkc1xuICAgIHRoaXMucmVzZXRUb0RlZmF1bHRQYXR0ZXJuKHNlbGVjdGVkVmFsdWUpXG4gIH1cblxuICByZXNldFRvRGVmYXVsdFBhdHRlcm4gPSAoc2VsZWN0ZWRWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5zdGF0ZS5zdXBwb3J0ZWRGb3JtYXRzLmZpbmQoaSA9PiBpLm5hbWUgPT09IHNlbGVjdGVkVmFsdWUpXG4gICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRlZkZvcm1hdDogc2VsZWN0ZWRJdGVtLmRlZmF1bHRQYXR0ZXJuXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFByb2plY3RlZExvY2F0aW9uID0gKGxvY2F0aW9uOiBQb2ludCwgc3I6IFNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPFBvaW50PiA9PiB7XG4gICAgLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdCBmb3JtYXRJbmRleCA9IHRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNLmZvcm1hdHMuZmluZEluZGV4KChmb3JtYXRJdGVtKSA9PiB7XG4gICAgICBpZiAoZm9ybWF0SXRlbS5uYW1lID09PSAnZGQnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8UG9pbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChmb3JtYXRJbmRleCA+IC0xICYmIHNyKSB7XG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuc3RhdGUuY29vcmRpbmF0ZVZNLmZvcm1hdHMuZ2V0SXRlbUF0KGZvcm1hdEluZGV4KVxuICAgICAgICBmb3JtYXQuX3Byb2plY3QobG9jYXRpb24sIHNyKS50aGVuKChwcm9qZWN0ZWRMb2NhdGlvbikgPT4ge1xuICAgICAgICAgIHJlc29sdmUocHJvamVjdGVkTG9jYXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGxvY2F0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIHNob3dMb2NhdGlvbk9uTWFwID0gKHNlbGVjdGVkTG9jYXRpb246IFBvaW50LCBjZW50ZXJUb0xvY2F0aW9uOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMuZHJhd2luZ0xheWVyICYmIHRoaXMucHJvcHMuamltdU1hcHZpZXcgJiYgdGhpcy5wcm9wcy5qaW11TWFwdmlldy52aWV3KSB7XG4gICAgICAvL3Byb2plY3QgdGhlIGxvY2F0aW9uIGluIG1hcCBzcGF0aWFsIHJlZmVyZW5jZVxuICAgICAgdGhpcy5nZXRQcm9qZWN0ZWRMb2NhdGlvbihzZWxlY3RlZExvY2F0aW9uLCB0aGlzLnByb3BzLmppbXVNYXB2aWV3LnZpZXcuc3BhdGlhbFJlZmVyZW5jZSkudGhlbigobG9jYXRpb24pID0+IHtcbiAgICAgICAgdGhpcy5kcmF3aW5nTGF5ZXIucmVtb3ZlQWxsKClcbiAgICAgICAgY29uc3QgcG9pbnRHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgIGdlb21ldHJ5OiBsb2NhdGlvbixcbiAgICAgICAgICBzeW1ib2w6IGpzb25VdGlscy5mcm9tSlNPTih0aGlzLnN0YXRlLmRlZlBvaW50U3ltYm9sKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHJhd2luZ0xheWVyLmFkZChwb2ludEdyYXBoaWMpXG4gICAgICAgIGlmIChjZW50ZXJUb0xvY2F0aW9uKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5qaW11TWFwdmlldy52aWV3LnNldCh7IGNlbnRlcjogbG9jYXRpb24gfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzaG93Q29udmVyc2lvbiA9IChsb2NhdGlvbjogUG9pbnQsIGNlbnRlclRvTG9jYXRpb24/OiBib29sZWFuKSA9PiB7XG4gICAgLy9zdG9yZSB0aGUgY3VycmVudCBzZWxlY3RlZCBsb2NhdGlvbiwgd2hpY2ggY2FuIGJlIHVzZWQgd2hlbiBjaGFuZ2luZyBpbnB1dCBzZXR0aW5nc1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIC8vZmlyc3Qgc2hvdyBzZWxlY3RlZCBsb2NhdGlvbiBvbiBtYXBcbiAgICB0aGlzLnNob3dMb2NhdGlvbk9uTWFwKGxvY2F0aW9uLCBjZW50ZXJUb0xvY2F0aW9uKVxuICAgIGlmICh0aGlzLnN0YXRlLmNvb3JkaW5hdGVWTSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRpc2FibGVDb3B5Wm9vbTogZmFsc2VcbiAgICAgIH0pXG4gICAgICAvL09ubHkgY29udmVydCB0aGUgc2VsZWN0ZWQgbG9jYXRpb24gaW50byBjdXJyZW50bHkgc2VsZWN0ZWQgaW5wdXQgZm9ybWF0XG4gICAgICBjb25zdCBzZWxlY3RlZENvbnZlcnNpb24gPSB0aGlzLnN0YXRlLmNvb3JkaW5hdGVWTS5jb252ZXJzaW9ucy5maWx0ZXIoKGNvbikgPT4ge1xuICAgICAgICByZXR1cm4gY29uLmZvcm1hdC5uYW1lID09PSB0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0IHx8IGNvbi5mb3JtYXQubmFtZSA9PT0gJ2RkJ1xuICAgICAgfSlcbiAgICAgIC8vdXBkYXRlIHZhbHVlIGluIGlucHV0IGJhc2VkIG9uIHNlbGVjdGVkIGlucHV0IGZvcm1hdCBzZXR0aW5nIGFuZCB0aGVuIGVtaXQgY29udmVyc2lvbiBjb21wbGV0ZSBldmVudFxuICAgICAgdGhpcy5zdGF0ZS5jb29yZGluYXRlVk0udXBkYXRlQ29udmVyc2lvbnMoc2VsZWN0ZWRDb252ZXJzaW9uLnRvQXJyYXkoKSwgbG9jYXRpb24pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgbGV0IGRkTG9jYXRpb24gPSBudWxsXG4gICAgICAgIGxldCBpbnB1dFZhbCA9ICcnXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoY1ZNSW5mbykgPT4ge1xuICAgICAgICAgIGlmIChjVk1JbmZvLmZvcm1hdC5uYW1lID09PSAnZGQnKSB7XG4gICAgICAgICAgICBkZExvY2F0aW9uID0gY1ZNSW5mby5wb3NpdGlvbi5sb2NhdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY1ZNSW5mby5mb3JtYXQubmFtZSA9PT0gdGhpcy5jdXJyZW50Q29vcmRpbmF0ZUZvcm1hdCkge1xuICAgICAgICAgICAgaW5wdXRWYWwgPSBjVk1JbmZvLmRpc3BsYXlDb29yZGluYXRlID8gY1ZNSW5mby5kaXNwbGF5Q29vcmRpbmF0ZSA6ICcnXG4gICAgICAgICAgICAvL2luIGNhc2Ugb2YgYWRkcmVzcyBhcyBpbnB1dCBmb3JtYXQgYW5kIHJldHVybmVkIGFkZHJlc3MgaXMgZW1wdHkgc2hvdyAnTm8gQWRkcmVzcyBGb3VuZCcgbXNnIGluIHRoZSBpbnB1dCBib3hcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0ID09PSAnYWRkcmVzcycgJiYgaW5wdXRWYWwgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGlucHV0VmFsID0gdGhpcy5ubHMoJ25vQWRkcmVzc0ZvdW5kTXNnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb252ZXJzaW9uUmVzdWx0OiBDb29yZGluYXRlQ29udHJvbFJlc3VsdCA9IHtcbiAgICAgICAgICAgIGZvcm1hdHRlZENvb3JkaW5hdGVUZXh0OiBpbnB1dFZhbCxcbiAgICAgICAgICAgIG1hcENvb3JkaW5hdGU6IGxvY2F0aW9uLFxuICAgICAgICAgICAgZGRDb29yZGluYXRlOiBkZExvY2F0aW9uXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vZm9yIG91dHB1dCBjb29yZGluYXRlcyBmb3JtYXRcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29udmVyc2lvbkNvbXBsZXRlKGNvbnZlcnNpb25SZXN1bHQpXG4gICAgICAgIH0pXG4gICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkFkZENvbnZlcnNpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0FkZENvbnZlcnNpb25Qb3B1cE9wZW46IHRydWVcbiAgICB9KVxuICB9XG5cbiAgb25BZGRQb3BwZXJDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQWRkQ29udmVyc2lvblBvcHVwT3BlbjogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkncyB0aGUgbWVzc2FnZSBpbiB0aGUgcG9wdXAuIENhbiBiZSB1c2VkIHRvIHNob3cgZXJyb3JzLCBpbmZvcm1hdGlvbiBhbmQgd2FybmluZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gdGl0bGUgOiBzdHJpbmcgLSBQb3B1cCB0aXRsZVxuICAgKiBAcGFyYW0gbXNnICA6IHN0cmluZyAtIFRleHQgTWVzc2FnZVxuICAgKi9cbiAgc2hvd01lc3NhZ2UgPSAodGl0bGU6IHN0cmluZywgbXNnOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRXJyb3JNc2dQb3B1cE9wZW46IHRydWUsXG4gICAgICBlcnJvck1zZ1BvcHVwVGl0bGU6IHRpdGxlLFxuICAgICAgZXJyb3JNc2c6IG1zZ1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgbWVzc2FnZSBwb3B1cFxuICAgKi9cbiAgaGlkZU1lc3NhZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0Vycm9yTXNnUG9wdXBPcGVuOiBmYWxzZSxcbiAgICAgIGVycm9yTXNnUG9wdXBUaXRsZTogJycsXG4gICAgICBlcnJvck1zZzogJydcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgdmFsdWUgaW4gaW5wdXQgYm94IHRvIHNob3cgbWludXMgc2lnbiBhdCBmcm9udCBpbiBjYXNlIG9mIFJUTFxuICAgKiBAcGFyYW0gZGlzcGxheVZhbHVlIDogc3RyaW5nIC0gVmFsdWUgdG8gYmUgc2hvd24gaW4gaW5wdXQgYm94XG4gICAqIEByZXR1cm5zIDogc3RyaW5nXG4gICAqL1xuICBmb3JtYXREaXNwbGF5Q29vcmRpbmF0ZSA9IChkaXNwbGF5VmFsdWUpID0+IHtcbiAgICBpZiAodGhpcy5pc1JUTCAmJiB0aGlzLmN1cnJlbnRDb29yZGluYXRlRm9ybWF0ICYmIHRoaXMuY3VycmVudENvb3JkaW5hdGVGb3JtYXQgPT09ICd4eScgJiZcbiAgICAgIGRpc3BsYXlWYWx1ZSAmJiBkaXNwbGF5VmFsdWUuY2hhckF0KDApID09PSAnLScpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5VmFsdWUuc3Vic3RyKDEpICsgZGlzcGxheVZhbHVlLnN1YnN0cigwLCAxKVxuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheVZhbHVlXG4gIH1cblxuICBnZXRDbGVhckljb24gPSAoaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGlucHV0VmFsdWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICA8ZGl2IGFyaWEtbGFiZWw9e3RoaXMubmxzKCdjbGVhcicpfSB0aXRsZT17dGhpcy5ubHMoJ2NsZWFyJyl9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGVhcklucHV0Q2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgIDxDbG9zZU91dGxpbmVkIHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gY2xhc3NOYW1lPSdzZWFyY2gtY2xlYXInLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIG92ZXJyaWRlSW5wdXRXaWR0aFN0eWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc01hcCA9ICEhdGhpcy5wcm9wcy5qaW11TWFwdmlldz8udmlld1xuICAgIGxldCB3aWR0aFRvQmVTdWJ0cmFjdGVkID0gMjkgLy9zZXR0aW5ncyB3aWxsIGFsd2F5cyBiZSBzaG93blxuICAgIGlmIChoYXNNYXApIHtcbiAgICAgIHdpZHRoVG9CZVN1YnRyYWN0ZWQgKz0gMjlcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd0NvcHkpIHtcbiAgICAgIHdpZHRoVG9CZVN1YnRyYWN0ZWQgKz0gMjlcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd1pvb20gJiYgaGFzTWFwKSB7XG4gICAgICB3aWR0aFRvQmVTdWJ0cmFjdGVkICs9IDI5XG4gICAgfVxuICAgIHJldHVybiBjc3NgXG4gICAgLmNjLXNlYXJjaC1pbnB1dCB7XG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtICAke3dpZHRoVG9CZVN1YnRyYWN0ZWR9cHgpO1xuICAgIH1cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnamltdS1jb29yZGluYXRlLWNvbnRyb2wnKVxuICAgIGNvbnN0IGlucHV0TGFiZWwgPSB0aGlzLnByb3BzLmlucHV0TGFiZWxTdHJpbmcgPyB0aGlzLnByb3BzLmlucHV0TGFiZWxTdHJpbmcgOiAnJ1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICA8Um93IGZsb3c9eyd3cmFwJ30gYXJpYS1sYWJlbD17aW5wdXRMYWJlbCArICcgICgnICsgdGhpcy5ubHModGhpcy5zdGF0ZS5kZWZhdWx0Q29vcmRzKSArICcpJ30gY2xhc3NOYW1lPXsncGwtMyBwci00J30+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIHRpdGxlPXtpbnB1dExhYmVsICsgJyAgKCcgKyB0aGlzLm5scyh0aGlzLnN0YXRlLmRlZmF1bHRDb29yZHMpICsgJyknfVxuICAgICAgICAgIGNsYXNzTmFtZT17J2ppbXUtd2lkZ2V0LXNldHRpbmctLXJvdy1sYWJlbCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgZmxleC1ncm93LTEgdGV4dC1icmVhayBzZXR0aW5nLXRleHQtbGV2ZWwtMyB3LTEwMCBtci0wJ30+XG4gICAgICAgICAge2lucHV0TGFiZWwgKyAnICAoJyArIHRoaXMubmxzKHRoaXMuc3RhdGUuZGVmYXVsdENvb3JkcykgKyAnKSd9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYWRqdXN0LWJ1dHRvbnMgdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJ30gY3NzPXt0aGlzLm92ZXJyaWRlSW5wdXRXaWR0aFN0eWxlKCl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2Mtc2VhcmNoLWlucHV0J30gPlxuICAgICAgICAgICAgPFRleHRJbnB1dCByb2xlPXsndGV4dGJveCd9IGFyaWEtbGFiZWw9e2lucHV0TGFiZWwgKyAnICAoJyArIHRoaXMubmxzKHRoaXMuc3RhdGUuZGVmYXVsdENvb3JkcykgKyAnKSd9IHNpemU9eydzbSd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLm5scygnaW5wdXRQbGFjZUhvbGRlcicpfSBvbktleURvd249e3RoaXMub25JbnB1dEtleURvd259IGlkPXsndGV4dElucHV0JyArIHRoaXMucHJvcHMucGFyZW50V2lkZ2V0SWR9XG4gICAgICAgICAgICAgIHJlZj17dGhpcy5faW5wdXRUZXh0Ym94fSBvbkNoYW5nZT17dGhpcy5vbklucHV0Q29vcmRpbmF0ZUNoYW5nZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9eydzZWFyY2gtaW5wdXQnfSB2YWx1ZT17dGhpcy5mb3JtYXREaXNwbGF5Q29vcmRpbmF0ZSh0aGlzLnN0YXRlLmlucHV0VmFsdWUpfVxuICAgICAgICAgICAgICBzdWZmaXg9e3RoaXMuZ2V0Q2xlYXJJY29uKHRoaXMuZm9ybWF0RGlzcGxheUNvb3JkaW5hdGUodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7LyogQ29uZmlybSBBZGRyZXNzIGxpc3QgKi99XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0FkZHJlc3NPcHRpb25zUG9wdXBPcGVuICYmXG4gICAgICAgICAgICAgIDxkaXYgcmVmPXsndGV4dElucHV0JyArIHRoaXMucHJvcHMucGFyZW50V2lkZ2V0SWR9PlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgY2xhc3NOYW1lPXsnYWRkcmVzc0xpc3RHcm91cCBwLTIgc2hhZG93J30+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hZGRyZXNzT3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFkZHJlc3NPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlzdEdyb3VwSXRlbSB0YWJJbmRleD17MH0gY2xhc3NOYW1lPXsnbGlzdEl0ZW0nfSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRBZGRyZXNzQ2hhbmdlKG9wdGlvbi52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZWxlY3RlZEFkZHJlc3NDaGFuZ2Uob3B0aW9uLnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfTwvTGlzdEdyb3VwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8VGV4dEFyZWEgdGFiSW5kZXg9ey0xfSBjbGFzc05hbWU9eydoaWRkZW4tY29weS1pbnB1dCd9IHJlZj17dGhpcy5fY29weUlucHV0VGV4dGJveH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QnV0dG9uIHJvbGU9eydidXR0b24nfSBhcmlhLWxhYmVsPXt0aGlzLm5scygnbWFwUG9pbnQnKX0gdGl0bGU9e3RoaXMubmxzKCdtYXBQb2ludCcpfSBjbGFzc05hbWU9e3RoaXMucHJvcHMuamltdU1hcHZpZXc/LnZpZXcgPyAnYWN0aW9uQnV0dG9uJyA6ICdoaWRkZW4nfSB0eXBlPXsndGVydGlhcnknfSBpY29uIHNpemU9eydzbSd9XG4gICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUubWFwUG9pbnRBY3RpdmV9IG9uQ2xpY2s9e3RoaXMub25NYXBQb2ludENsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPFBpbk91dGxpbmVkIHNpemU9eycxNyd9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3RoaXMucHJvcHMuc2hvd0NvcHkgJiZcbiAgICAgICAgICAgIDxCdXR0b24gcm9sZT17J2J1dHRvbid9IGFyaWEtbGFiZWw9e3RoaXMubmxzKCdjb3B5QWxsJyl9IGFyaWEtZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZUNvcHlab29tfSB0aXRsZT17dGhpcy5ubHMoJ2NvcHlBbGwnKX0gY2xhc3NOYW1lPXsnYWN0aW9uQnV0dG9uJ30gdHlwZT17J3RlcnRpYXJ5J30gaWNvbiBzaXplPXsnc20nfVxuICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuaXNDb3B5TWVzc2FnZU9wZW59IGlkPXsncmVmQ29weScgKyB0aGlzLnByb3BzLnBhcmVudFdpZGdldElkfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlQ29weVpvb219IG9uQ2xpY2s9e3RoaXMub25Db3B5Q2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIDxEdXBsaWNhdGVPdXRsaW5lZCBzaXplPXsnMTcnfSAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmppbXVNYXB2aWV3ICYmIHRoaXMucHJvcHMuc2hvd1pvb20gJiZcbiAgICAgICAgICAgIDxCdXR0b24gcm9sZT17J2J1dHRvbid9IGFyaWEtbGFiZWw9e3RoaXMubmxzKCdab29tTGFiZWwnKX0gYXJpYS1kaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlQ29weVpvb219IHRpdGxlPXt0aGlzLm5scygnWm9vbUxhYmVsJyl9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5qaW11TWFwdmlldz8udmlldyA/ICdhY3Rpb25CdXR0b24nIDogJ2hpZGRlbid9XG4gICAgICAgICAgICAgIHR5cGU9eyd0ZXJ0aWFyeSd9IGljb24gc2l6ZT17J3NtJ30gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZUNvcHlab29tfSBvbkNsaWNrPXt0aGlzLm9uWm9vbUNsaWNrLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICA8Wm9vbUluV2luZG93T3V0bGluZWQgc2l6ZT17JzE3J30gLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgICA8QnV0dG9uIHJvbGU9eydidXR0b24nfSBhcmlhLWxhYmVsPXt0aGlzLm5scygnaW5wdXRTZXR0aW5nc1RpdGxlJyl9IGFyaWEtaGFzcG9wdXA9eydkaWFsb2cnfSB0aXRsZT17dGhpcy5ubHMoJ2lucHV0U2V0dGluZ3NUaXRsZScpfSBjbGFzc05hbWU9eydhY3Rpb25CdXR0b24nfSB0eXBlPXsndGVydGlhcnknfVxuICAgICAgICAgICAgaWNvbiBzaXplPXsnc20nfSBhY3RpdmU9e3RoaXMuc3RhdGUuaXNJbnB1dFNldHRpbmdzUG9wdXBPcGVufSBvbkNsaWNrPXt0aGlzLm9uU2V0dGluZ3NDbGljay5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgc2l6ZT17JzE3J30gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Jvdz5cblxuICAgICAgey8qIElucHV0IGZvcm1hdCBzZXR0aW5ncyBwb3B1cCAqL31cbiAgICAgIDxBbGVydFBvcHVwIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgYXJpYS1leHBhbmRlZD17dGhpcy5zdGF0ZS5pc0lucHV0U2V0dGluZ3NQb3B1cE9wZW59XG4gICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc0lucHV0U2V0dGluZ3NQb3B1cE9wZW59XG4gICAgICAgIG9uQ2xpY2tPaz17dGhpcy5vbklucHV0U2V0dGluZ3NPa0NsaWNrZWQuYmluZCh0aGlzKX1cbiAgICAgICAgb25DbGlja0Nsb3NlPXt0aGlzLm9uSW5wdXRTZXR0aW5nc0NhbmNlbENsaWNrZWQuYmluZCh0aGlzKX1cbiAgICAgICAgdGl0bGU9e3RoaXMubmxzKCdpbnB1dFNldHRpbmdzVGl0bGUnKX0+XG4gICAgICAgIDx0YWJsZSBjZWxsUGFkZGluZz17MTB9PlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J2xhYmVsRGltZW5zaW9uJ30+XG4gICAgICAgICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgICAgICAge3RoaXMubmxzKCdkZWZhdWx0Q29vcmRpbmF0ZScpfVxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8U2VsZWN0IGFyaWEtbGFiZWw9e3RoaXMubmxzKCdkZWZhdWx0Q29vcmRpbmF0ZScpfSBuYW1lPXsnZGVmYXVsdENvb3Jkcyd9XG4gICAgICAgICAgICAgICAgICBzaXplPXsnc20nfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZWZhdWx0Q29vcmRzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EZWZhdWx0Q29vcmRzQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1cHBvcnRlZEZvcm1hdHMgJiYgdGhpcy5zdGF0ZS5zdXBwb3J0ZWRGb3JtYXRzLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiB0YWJJbmRleD17MH0gcm9sZT17J29wdGlvbid9IGFyaWEtbGFiZWw9e29wdGlvbi5sYWJlbH0ga2V5PXtpbmRleH0gdmFsdWU9e29wdGlvbi5uYW1lfT57b3B0aW9uLmxhYmVsfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kZWZhdWx0Q29vcmRzID09PSAnYWRkcmVzcycgPyAnaGlkZGVuJyA6ICcnfT5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J2xhYmVsRGltZW5zaW9uJ30+XG4gICAgICAgICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgICAgICAge3RoaXMubmxzKCdjb29yZGluYXRlRm9ybWF0Jyl9XG4gICAgICAgICAgICAgICAgPC9MYWJlbD48L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCByb2xlPXsndGV4dGJveCd9IGFyaWEtbGFiZWw9e3RoaXMubmxzKCdjb29yZGluYXRlRm9ybWF0Jyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRlZkZvcm1hdH0gb25BY2NlcHRWYWx1ZT17dGhpcy5vbkZvcm1hdEFjY2VwdFZhbHVlfSBvbkNoYW5nZT17dGhpcy5vbkZvcm1hdENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHNpemU9eydzbSd9IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5kZWZGb3JtYXQgPT09ICcnID8gJ2ludmFsaWQtdmFsdWUnIDogJyd9IC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvbGU9eydidXR0b24nfSBhcmlhLWxhYmVsPXt0aGlzLm5scygncmVzZXRGb3JtYXQnKX0gdGl0bGU9e3RoaXMubmxzKCdyZXNldEZvcm1hdCcpfSBjbGFzc05hbWU9eydtbC0yJ30gaWNvbiB0eXBlPXsndGVydGlhcnknfSBzaXplPXsnc20nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblJlc2V0QnV0dG9uQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICA8UmVzZXRPdXRsaW5lZCBzaXplPXsnMTYnfSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9BbGVydFBvcHVwPlxuXG4gICAgICB7LyogQ29uZmlybSBpbnB1dCBmb3JtYXQgbm90YXRpb24gcG9wdXAgKi99XG4gICAgICB7dGhpcy5zdGF0ZS5pc0NvbmZpcm1JbnB1dE5vdGF0aW9uUG9wdXBPcGVuICYmXG4gICAgICAgIDxBbGVydFBvcHVwXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD17dGhpcy5zdGF0ZS5pc0NvbmZpcm1JbnB1dE5vdGF0aW9uUG9wdXBPcGVufVxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc0NvbmZpcm1JbnB1dE5vdGF0aW9uUG9wdXBPcGVufVxuICAgICAgICAgIG9uQ2xpY2tPaz17dGhpcy5vbkNvbmZpcm1JbnB1dE9rQ2xpY2tlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2xpY2tDbG9zZT17dGhpcy5vbkNvbmZpcm1JbnB1dENhbmNlbENsaWNrZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICB0aXRsZT17dGhpcy5ubHMoJ2NvbmZpcm1JbnB1dE5vdGF0aW9uJyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncC0yJ30+XG4gICAgICAgICAgICA8TGFiZWw+e3RoaXMuc3RhdGUuaW5wdXROb3RhdGlvbldhcm5pbmd9PC9MYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFNlbGVjdCBhcmlhLWxhYmVsPXt0aGlzLnN0YXRlLmlucHV0Tm90YXRpb25XYXJuaW5nfSBuYW1lPXsnY29uZmlybWVkSW5wdXROb3RhdGlvbid9XG4gICAgICAgICAgICAgIHNpemU9eydzbSd9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbmZpcm1lZElucHV0Tm90YXRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXROb3RhdGlvbkNoYW5nZX0+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlucHV0Tm90YXRpb25PcHRpb25zICYmXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dE5vdGF0aW9uT3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIHRhYkluZGV4PXswfSByb2xlPXsnb3B0aW9uJ30gYXJpYS1sYWJlbD17b3B0aW9uLmxhYmVsfSBrZXk9e2luZGV4fSB2YWx1ZT17b3B0aW9uLnZhbHVlfT57b3B0aW9uLmxhYmVsfTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQWxlcnRQb3B1cD5cbiAgICAgIH1cblxuICAgICAgey8qIEVycm9yL0luZm8gbWVzc2FnZSBwb3B1cCAqL31cbiAgICAgIHt0aGlzLnN0YXRlLmlzRXJyb3JNc2dQb3B1cE9wZW4gJiZcbiAgICAgICAgPEFsZXJ0UG9wdXBcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXJyb3JNc2dQb3B1cE9wZW59XG4gICAgICAgICAgaGlkZUNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNFcnJvck1zZ1BvcHVwT3Blbn1cbiAgICAgICAgICBvbkNsaWNrT2s9e3RoaXMuaGlkZU1lc3NhZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkNsaWNrQ2xvc2U9e3RoaXMuaGlkZU1lc3NhZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5lcnJvck1zZ1BvcHVwVGl0bGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncC0yJ30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1zZ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BbGVydFBvcHVwPlxuICAgICAgfVxuXG4gICAgICB7LyogQ29weSBtZXNzYWdlIHRvYXN0IHBvcHBlciAqL31cbiAgICAgIHt0aGlzLnN0YXRlLmlzQ29weU1lc3NhZ2VPcGVuICYmXG4gICAgICAgIDxQb3BwZXJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmlzQ29weU1lc3NhZ2VPcGVufVxuICAgICAgICAgIHZlcnNpb249ezB9XG4gICAgICAgICAgcGxhY2VtZW50PXsnYm90dG9tJ31cbiAgICAgICAgICBzaG93QXJyb3c9e3RydWV9XG4gICAgICAgICAgcmVmZXJlbmNlPXsncmVmQ29weScgKyB0aGlzLnByb3BzLnBhcmVudFdpZGdldElkfVxuICAgICAgICAgIG9mZnNldD17WzAsIDBdfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3AtMid9Pnt0aGlzLm5scygnY29weVN1Y2Nlc3NNZXNzYWdlJyl9PC9kaXY+XG4gICAgICAgIDwvUG9wcGVyPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICB9XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCB0byBpbnB1dCBjb29yZGluYXRlcyBpbiBkaWZmZXJlbnQgZm9ybWF0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IENvb3JkaW5hdGVDb250cm9sID0gd2l0aFN0eWxlcyhpbmplY3RJbnRsKF9Db29yZGluYXRlQ29udHJvbCksICdDb29yZGluYXRlQ29udHJvbCcpXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlQ29udHJvbCIsImV4cG9ydCBpbnRlcmZhY2UgTm90YXRpb24ge1xuICBuYW1lOiBzdHJpbmdcbiAgcGF0dGVybjogUmVnRXhwXG4gIG5vdGF0aW9uVHlwZTogc3RyaW5nXG4gIGNvbnZlcnNpb25UeXBlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzZWRDb29yZGluYXRlVGV4dEluZm8ge1xuICBzdHI6IHN0cmluZ1xuICBwcmVmaXhTdWZmaXhFcnJvcjogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0Nvb3JkVGV4dElucHV0ICh3aXRoU3RyOiBzdHJpbmcsIGFzVHlwZTogTm90YXRpb24sIHRlc3RpbmdNb2RlOiBib29sZWFuKTogUHJvY2Vzc2VkQ29vcmRpbmF0ZVRleHRJbmZvIHtcbiAgY29uc3QgbWF0Y2ggPSBhc1R5cGUucGF0dGVybi5leGVjKHdpdGhTdHIpXG4gIGxldCBub3J0aFNvdXRoUHJlZml4LCBub3J0aFNvdXRoU3VmZml4LFxuICAgIGVhc3RXZXN0UHJlZml4LCBlYXN0V2VzdFN1ZmZpeCxcbiAgICBsYXREZWcsIGxvbmdEZWcsIGxhdE1pbixcbiAgICBsb25nTWluLCBsYXRTZWMsIGxvbmdTZWNcbiAgbGV0IHByZWZpeFN1ZmZpeEVycm9yID0gZmFsc2VcbiAgbGV0IGNvbnZlcnNpb25UeXBlID0gYXNUeXBlLm5hbWVcblxuICBzd2l0Y2ggKGFzVHlwZS5uYW1lKSB7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgbm9ydGhTb3V0aFByZWZpeCA9IG1hdGNoWzJdXG4gICAgICBub3J0aFNvdXRoU3VmZml4ID0gbWF0Y2hbN11cbiAgICAgIGVhc3RXZXN0UHJlZml4ID0gbWF0Y2hbMTBdXG4gICAgICBlYXN0V2VzdFN1ZmZpeCA9IG1hdGNoWzE2XVxuICAgICAgbGF0RGVnID0gbWF0Y2hbM10ucmVwbGFjZSgvWyw6XS8sICcuJylcbiAgICAgIGxvbmdEZWcgPSBtYXRjaFsxMV0ucmVwbGFjZSgvWyw6XS8sICcuJylcbiAgICAgIGNvbnZlcnNpb25UeXBlID0gJ2RkJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdkZHJldic6XG4gICAgICBub3J0aFNvdXRoUHJlZml4ID0gbWF0Y2hbMTFdXG4gICAgICBub3J0aFNvdXRoU3VmZml4ID0gbWF0Y2hbMTZdXG4gICAgICBlYXN0V2VzdFByZWZpeCA9IG1hdGNoWzJdXG4gICAgICBlYXN0V2VzdFN1ZmZpeCA9IG1hdGNoWzhdXG4gICAgICBsYXREZWcgPSBtYXRjaFsxMl0ucmVwbGFjZSgvWyw6XS8sICcuJylcbiAgICAgIGxvbmdEZWcgPSBtYXRjaFszXS5yZXBsYWNlKC9bLDpdLywgJy4nKVxuICAgICAgY29udmVyc2lvblR5cGUgPSAnZGQnXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RkbSc6XG4gICAgICBub3J0aFNvdXRoUHJlZml4ID0gbWF0Y2hbMl1cbiAgICAgIG5vcnRoU291dGhTdWZmaXggPSBtYXRjaFs3XVxuICAgICAgZWFzdFdlc3RQcmVmaXggPSBtYXRjaFsxMF1cbiAgICAgIGVhc3RXZXN0U3VmZml4ID0gbWF0Y2hbMTVdXG4gICAgICBsYXREZWcgPSBtYXRjaFszXVxuICAgICAgbGF0TWluID0gbWF0Y2hbNF0ucmVwbGFjZSgvWyw6XS8sICcuJylcbiAgICAgIGxvbmdEZWcgPSBtYXRjaFsxMV1cbiAgICAgIGxvbmdNaW4gPSBtYXRjaFsxMl0ucmVwbGFjZSgvWyw6XS8sICcuJylcbiAgICAgIGNvbnZlcnNpb25UeXBlID0gJ2RkbSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZGRtcmV2JzpcbiAgICAgIG5vcnRoU291dGhQcmVmaXggPSBtYXRjaFsxMF1cbiAgICAgIG5vcnRoU291dGhTdWZmaXggPSBtYXRjaFsxNV1cbiAgICAgIGVhc3RXZXN0UHJlZml4ID0gbWF0Y2hbMl1cbiAgICAgIGVhc3RXZXN0U3VmZml4ID0gbWF0Y2hbN11cbiAgICAgIGxhdERlZyA9IG1hdGNoWzExXVxuICAgICAgbGF0TWluID0gbWF0Y2hbMTJdLnJlcGxhY2UoL1ssOl0vLCAnLicpXG4gICAgICBsb25nRGVnID0gbWF0Y2hbM11cbiAgICAgIGxvbmdNaW4gPSBtYXRjaFs0XS5yZXBsYWNlKC9bLDpdLywgJy4nKVxuICAgICAgY29udmVyc2lvblR5cGUgPSAnZGRtJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdkbXMnOlxuICAgICAgbm9ydGhTb3V0aFByZWZpeCA9IG1hdGNoWzJdXG4gICAgICBub3J0aFNvdXRoU3VmZml4ID0gbWF0Y2hbOF1cbiAgICAgIGVhc3RXZXN0UHJlZml4ID0gbWF0Y2hbMTFdXG4gICAgICBlYXN0V2VzdFN1ZmZpeCA9IG1hdGNoWzE3XVxuICAgICAgbGF0RGVnID0gbWF0Y2hbM11cbiAgICAgIGxhdE1pbiA9IG1hdGNoWzRdXG4gICAgICBsYXRTZWMgPSBtYXRjaFs1XS5yZXBsYWNlKC9bLDpdLywgJy4nKVxuICAgICAgbG9uZ0RlZyA9IG1hdGNoWzEyXVxuICAgICAgbG9uZ01pbiA9IG1hdGNoWzEzXVxuICAgICAgbG9uZ1NlYyA9IG1hdGNoWzE0XS5yZXBsYWNlKC9bLDpdLywgJy4nKVxuICAgICAgY29udmVyc2lvblR5cGUgPSAnZG1zJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdkbXNyZXYnOlxuICAgICAgbm9ydGhTb3V0aFByZWZpeCA9IG1hdGNoWzExXVxuICAgICAgbm9ydGhTb3V0aFN1ZmZpeCA9IG1hdGNoWzE3XVxuICAgICAgZWFzdFdlc3RQcmVmaXggPSBtYXRjaFsyXVxuICAgICAgZWFzdFdlc3RTdWZmaXggPSBtYXRjaFs4XVxuICAgICAgbGF0RGVnID0gbWF0Y2hbMTJdXG4gICAgICBsYXRNaW4gPSBtYXRjaFsxM11cbiAgICAgIGxhdFNlYyA9IG1hdGNoWzE0XS5yZXBsYWNlKC9bLDpdLywgJy4nKVxuICAgICAgbG9uZ0RlZyA9IG1hdGNoWzNdXG4gICAgICBsb25nTWluID0gbWF0Y2hbNF1cbiAgICAgIGxvbmdTZWMgPSBtYXRjaFs1XS5yZXBsYWNlKC9bLDpdLywgJy4nKVxuICAgICAgY29udmVyc2lvblR5cGUgPSAnZG1zJ1xuICAgICAgYnJlYWtcbiAgfVxuXG4gIC8vY2hlY2sgZm9yIG5vcnRoL3NvdXRoIHByZWZpeC9zdWZmaXhcbiAgaWYgKG5vcnRoU291dGhQcmVmaXggJiYgbm9ydGhTb3V0aFN1ZmZpeCkge1xuICAgIHByZWZpeFN1ZmZpeEVycm9yID0gdHJ1ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChuZXcgUmVnRXhwKC9bU3MtXS8pLnRlc3Qobm9ydGhTb3V0aFByZWZpeCkpIHtcbiAgICAgIG5vcnRoU291dGhQcmVmaXggPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgbm9ydGhTb3V0aFByZWZpeCA9ICcrJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAobm9ydGhTb3V0aFByZWZpeCAmJiBuZXcgUmVnRXhwKC9bU3MtXS8pLnRlc3Qobm9ydGhTb3V0aFByZWZpeCkpIHtcbiAgICAgIG5vcnRoU291dGhQcmVmaXggPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAobm9ydGhTb3V0aFN1ZmZpeCAmJiBuZXcgUmVnRXhwKC9bU3MtXS8pLnRlc3Qobm9ydGhTb3V0aFN1ZmZpeCkpIHtcbiAgICAgICAgbm9ydGhTb3V0aFByZWZpeCA9ICctJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ydGhTb3V0aFByZWZpeCA9ICcrJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vY2hlY2sgZm9yIGVhc3Qvd2VzdCBwcmVmaXgvc3VmZml4XG4gIGlmIChlYXN0V2VzdFByZWZpeCAmJiBlYXN0V2VzdFN1ZmZpeCkge1xuICAgIHByZWZpeFN1ZmZpeEVycm9yID0gdHJ1ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmIChuZXcgUmVnRXhwKC9bV3ctXS8pLnRlc3QoZWFzdFdlc3RQcmVmaXgpKSB7XG4gICAgICBlYXN0V2VzdFByZWZpeCA9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBlYXN0V2VzdFByZWZpeCA9ICcrJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoZWFzdFdlc3RQcmVmaXggJiYgbmV3IFJlZ0V4cCgvW1d3LV0vKS50ZXN0KGVhc3RXZXN0UHJlZml4KSkge1xuICAgICAgZWFzdFdlc3RQcmVmaXggPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZWFzdFdlc3RTdWZmaXggJiYgbmV3IFJlZ0V4cCgvW1d3LV0vKS50ZXN0KGVhc3RXZXN0U3VmZml4KSkge1xuICAgICAgICBlYXN0V2VzdFByZWZpeCA9ICctJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWFzdFdlc3RQcmVmaXggPSAnKydcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGNvbnZlcnNpb25UeXBlKSB7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgd2l0aFN0ciA9IG5vcnRoU291dGhQcmVmaXggKyBsYXREZWcgKyAnLCcgKyBlYXN0V2VzdFByZWZpeCArIGxvbmdEZWdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZGRtJzpcbiAgICAgIHdpdGhTdHIgPSBub3J0aFNvdXRoUHJlZml4ICsgbGF0RGVnICtcbiAgICAgICAgJyAnICsgbGF0TWluICsgJywnICsgZWFzdFdlc3RQcmVmaXggK1xuICAgICAgICBsb25nRGVnICsgJyAnICsgbG9uZ01pblxuICAgICAgYnJlYWtcbiAgICBjYXNlICdkbXMnOlxuICAgICAgd2l0aFN0ciA9IG5vcnRoU291dGhQcmVmaXggKyBsYXREZWcgKyAnICcgK1xuICAgICAgICBsYXRNaW4gKyAnICcgKyBsYXRTZWMgKyAnLCcgKyBlYXN0V2VzdFByZWZpeCArXG4gICAgICAgIGxvbmdEZWcgKyAnICcgKyBsb25nTWluICsgJyAnICsgbG9uZ1NlY1xuICAgICAgYnJlYWtcbiAgfVxuXG4gIGNvbnN0IHJldHVyblZhbHVlOiBQcm9jZXNzZWRDb29yZGluYXRlVGV4dEluZm8gPSB7XG4gICAgcHJlZml4U3VmZml4RXJyb3I6IHByZWZpeFN1ZmZpeEVycm9yLFxuICAgIHN0cjogd2l0aFN0clxuICB9XG5cbiAgcmV0dXJuIHJldHVyblZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RhdGlvbnMgKCk6IE5vdGF0aW9uW10ge1xuICAvLyB1c2luZyBqc2hpbnQgaWdub3JlIGxpbmUgb24gcGFydHMgb2YgdGhlIHJlZ3VsYXJcbiAgLy8gZXhwcmVzc2lvbnMgdGhhdCBjYW5ub3QgYmUgc3BsaXQgb3ZlciBsaW5lc1xuICBjb25zdCBzdHJzID0gW3tcbiAgICBuYW1lOiAnZGQnLFxuICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoW1xuICAgICAgL14oKFtOU1xcK1xcLVxcc10pKihbMC04XT9cXGQoWywuXVxcZCopP3w5MChbLC5dMCopPykoW8Kwy5rCul5+Kl0qKShbTlNcXCtcXC1cXHNdKSopKFssOjtcXHN8XFwvXFxcXF0rKS8sXG4gICAgICAvKChbRVdcXCtcXC1cXHNdKSooWzBdP1xcZD9cXGQoWywuXVxcZCopP3wxWzAtN11cXGQoWywuXVxcZCopP3wxODAoWywuXTAqKT8pKFvCsMuawrpefipdKikoW0VXXFwrXFwtXFxzXSkqKSQvIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIF0ubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gci5zb3VyY2VcbiAgICB9KS5qb2luKCcnKSksXG4gICAgbm90YXRpb25UeXBlOiAnRERMYXRMb25nTm90YXRpb24nLFxuICAgIGNvbnZlcnNpb25UeXBlOiAnZGQnXG4gIH0sIHtcbiAgICBuYW1lOiAnZGRyZXYnLFxuICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoW1xuICAgICAgL14oKFtFV1xcK1xcLVxcc10pKihbMF0/XFxkP1xcZChbLC5dXFxkKik/fDFbMC03XVxcZChbLC5dXFxkKik/fDE4MChbLC5dMCopPykoW8Kwy5rCul5+Kl0qKShbRVdcXCtcXC1cXHNdKSopLywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAvKFssOjtcXHN8XFwvXFxcXF0rKSgoW05TXFwrXFwtXFxzXSkqKFswLThdP1xcZChbLC5dXFxkKik/fDkwKFssLl0wKik/KShbwrDLmsK6Xn4qXSopKFtOU1xcK1xcLVxcc10pKikkL1xuICAgIF0ubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gci5zb3VyY2VcbiAgICB9KS5qb2luKCcnKSksXG4gICAgbm90YXRpb25UeXBlOiAnRERMb25nTGF0Tm90YXRpb24nLFxuICAgIGNvbnZlcnNpb25UeXBlOiAnZGQnXG4gIH0sIHtcbiAgICBuYW1lOiAnZGRtJyxcbiAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFtcbiAgICAgIC9eKChbTlNcXCtcXC1cXHNdKSooWzAtOF0/XFxkfDkwKVvCsMuawrpefipcXHNcXC1fXSsoKFswLTVdP1xcZHxcXGQpKFssLl1cXGQqKT8pWyfigLJcXHNfXSooW05TXFwrXFwtXFxzXSkqKS8sXG4gICAgICAvKFssOjtcXHN8XFwvXFxcXF0rKS8sXG4gICAgICAvKChbRVdcXCtcXC1cXHNdKSooWzBdP1xcZD9cXGR8MVswLTddXFxkfDE4MClbwrDLmsK6Xn4qXFxzXFwtX10rKChbMC01XVxcZHxcXGQpKFssLl1cXGQqKT8pWyfigLJcXHNfXSooW0VXXFwrXFwtXFxzXSkqKS8sIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgL1tcXHNdKiQvXG4gICAgXS5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiByLnNvdXJjZVxuICAgIH0pLmpvaW4oJycpKSxcbiAgICBub3RhdGlvblR5cGU6ICdERE1MYXRMb25nTm90YXRpb24nLFxuICAgIGNvbnZlcnNpb25UeXBlOiAnZGRtJ1xuICB9LCB7XG4gICAgbmFtZTogJ2RkbXJldicsXG4gICAgcGF0dGVybjogbmV3IFJlZ0V4cChbXG4gICAgICAvXigoW0VXXFwrXFwtXFxzXSkqKFswXT9cXGQ/XFxkfDFbMC03XVxcZHwxODApW8Kwy5rCul5+Klxcc1xcLV9dKygoWzAtNV1cXGR8XFxkKShbLC5dXFxkKik/KVsn4oCyXFxzX10qKFtFV1xcK1xcLVxcc10pKikvLCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgIC8oWyw6O1xcc3xcXC9cXFxcXSspLyxcbiAgICAgIC8oKFtOU1xcK1xcLVxcc10pKihbMC04XT9cXGR8OTApW8Kwy5rCul5+Klxcc1xcLV9dKygoWzAtNV0/XFxkfFxcZCkoWywuXVxcZCopPylbJ+KAslxcc19dKihbTlNcXCtcXC1cXHNdKSopW1xcc10qJC8gLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgXS5tYXAoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiByLnNvdXJjZVxuICAgIH0pLmpvaW4oJycpKSxcbiAgICBub3RhdGlvblR5cGU6ICdERE1Mb25nTGF0Tm90YXRpb24nLFxuICAgIGNvbnZlcnNpb25UeXBlOiAnZGRtJ1xuICB9LCB7XG4gICAgbmFtZTogJ2RtcycsXG4gICAgcGF0dGVybjogbmV3IFJlZ0V4cChbXG4gICAgICAvXigoW05TXFwrXFwtXFxzXSkqKFswLThdP1xcZHw5MClbwrDLmsK6Xn4qXFxzXFwtX10rKFswLTVdP1xcZHxcXGQpWyfigLJcXHNcXC1fXSsoKFswLTVdP1xcZHxcXGQpKFssLl1cXGQqKT8pW1wiwqjLnVxcc19dKihbTlNcXCtcXC1cXHNdKSopLywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAvKFssOjtcXHN8XFwvXFxcXF0rKS8sXG4gICAgICAvKChbRVdcXCtcXC1cXHNdKSooWzBdP1xcZD9cXGR8MVswLTddXFxkfDE4MClbwrDLmsK6Xn4qXFxzXFwtX10rKFswLTVdXFxkfFxcZClbJ+KAslxcc1xcLV9dKygoWzAtNV0/XFxkfFxcZCkoWywuXVxcZCopPylbXCLCqMudXFxzX10qKFtFV1xcK1xcLVxcc10pKilbXFxzXSokLyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBdLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIHIuc291cmNlXG4gICAgfSkuam9pbignJykpLFxuICAgIG5vdGF0aW9uVHlwZTogJ0RNU0xhdExvbmdOb3RhdGlvbicsXG4gICAgY29udmVyc2lvblR5cGU6ICdkbXMnXG4gIH0sIHtcbiAgICBuYW1lOiAnZG1zcmV2JyxcbiAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFtcbiAgICAgIC9eKChbRVdcXCtcXC1cXHNdKSooWzBdP1xcZD9cXGR8MVswLTddXFxkfDE4MClbwrDLmsK6Xn4qXFxzXFwtX10rKFswLTVdXFxkfFxcZClbJ+KAslxcc1xcLV9dKygoWzAtNV0/XFxkfFxcZCkoWywuXVxcZCopPylbXCLCqMudXFxzX10qKFtFV1xcK1xcLVxcc10pKikvLCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgIC8oWyw6O1xcc3xcXC9cXFxcXSspLyxcbiAgICAgIC8oKFtOU1xcK1xcLVxcc10pKihbMC04XT9cXGR8OTApW8Kwy5rCul5+Klxcc1xcLV9dKyhbMC01XT9cXGR8XFxkKVsn4oCyXFxzXFwtX10rKChbMC01XT9cXGR8XFxkKShbLC5dXFxkKik/KVtcIsKoy51cXHNfXSooW05TXFwrXFwtXFxzXSkqKVtcXHNdKiQvIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIF0ubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICByZXR1cm4gci5zb3VyY2VcbiAgICB9KS5qb2luKCcnKSksXG4gICAgbm90YXRpb25UeXBlOiAnRE1TTG9uZ0xhdE5vdGF0aW9uJyxcbiAgICBjb252ZXJzaW9uVHlwZTogJ2RtcydcbiAgfSwge1xuICAgIG5hbWU6ICdtZ3JzJyxcbiAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKFtcbiAgICAgIC9eXFxkezEsMn1bLSw7Olxcc10qW0MtSEotTlAtWF1bLSw7Olxcc10qW0EtSEotTlAtWl17Mn1bLSw7Olxcc10qLyxcbiAgICAgIC8oXFxkWy0sOzpcXHNdK1xcZHxcXGR7Mn1bLSw7Olxcc10rXFxkezJ9fFxcZHszfVstLDs6XFxzXStcXGR7M318XFxkezR9Wy0sOzpcXHNdK1xcZHs0fXxcXGR7NX1bLSw7Olxcc10rXFxkezV9KS8sIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgLyR8XihcXGR7MSwyfVstLDs6XFxzXSpbQy1ISi1OUC1YXVstLDs6XFxzXSpbQS1ISi1OUC1aXXsyfVstLDs6XFxzXSopLyxcbiAgICAgIC8oXFxkezJ9fFxcZHs0fXxcXGR7Nn18XFxkezh9fFxcZHsxMH0pPyR8XltBQllaXVstLDs6XFxzXSpbQS1ISi1OUC1aXXsyfVstLDs6XFxzXSovLFxuICAgICAgLyhcXGRbLSw7Olxcc10rXFxkfFxcZHsyfVstLDs6XFxzXStcXGR7Mn18XFxkezN9Wy0sOzpcXHNdK1xcZHszfXxcXGR7NH1bLSw7Olxcc10rXFxkezR9fFxcZHs1fVstLDs6XFxzXStcXGR7NX0pLywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAvJHxeW0FCWVpdWy0sOzpcXHNdKltBLUhKLU5QLVpdezJ9Wy0sOzpcXHNdKihcXGR7Mn18XFxkezR9fFxcZHs2fXxcXGR7OH18XFxkezEwfSk/JC9cbiAgICBdLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIHIuc291cmNlXG4gICAgfSkuam9pbignJykpLFxuICAgIG5vdGF0aW9uVHlwZTogJ01HUlNOb3RhdGlvbicsXG4gICAgY29udmVyc2lvblR5cGU6ICdtZ3JzJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ3V0bScsXG4gICAgcGF0dGVybjogbmV3IFJlZ0V4cChbXG4gICAgICAvXlxcZHsxLDJ9Wy0sOzpcXHNdKltjLWhqLW5wLXhDLUhKLU5QLVhdWy0sOzpcXHNdKlxcZHsxLDZ9XFwuP1xcZCpbbU1dP1stLDs6XFxzXT9cXGR7MSw3fVxcLj9cXGQqW21NXT8kLyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBdLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIHIuc291cmNlXG4gICAgfSkuam9pbignJykpLFxuICAgIG5vdGF0aW9uVHlwZTogJ1VUTUJhbmROb3RhdGlvbicsXG4gICAgY29udmVyc2lvblR5cGU6ICd1dG0nXG4gIH1cbiAgXVxuICByZXR1cm4gc3Ryc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZVR5cGUgKGZyb21JbnB1dDogc3RyaW5nKTogUHJvbWlzZTxOb3RhdGlvbltdPiB7XG4gIGNvbnN0IGNsbklucHV0ID0gZnJvbUlucHV0XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxOb3RhdGlvbltdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgYWxsTm90YXRpb25zID0gZ2V0Tm90YXRpb25zKClcbiAgICBjb25zdCBtYXRjaGVkVHlwZSA9IGFsbE5vdGF0aW9ucy5maWx0ZXIoKGl0bSkgPT4ge1xuICAgICAgcmV0dXJuIGl0bS5wYXR0ZXJuLnRlc3QoY2xuSW5wdXQpXG4gICAgfSlcbiAgICBpZiAobWF0Y2hlZFR5cGUubGVuZ3RoID4gMCkge1xuICAgICAgcmVzb2x2ZShtYXRjaGVkVHlwZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShbXSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29yZGluYXRlc1R5cGUgKGZyb21JbnB1dDogc3RyaW5nW10pOiBQcm9taXNlPE5vdGF0aW9uW11bXT4ge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8Tm90YXRpb25bXVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgYWxsTm90YXRpb25zID0gZ2V0Tm90YXRpb25zKClcbiAgICBmcm9tSW5wdXQuZm9yRWFjaCgoY2xuSW5wdXQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZWRUeXBlID0gYWxsTm90YXRpb25zLmZpbHRlcigoaXRtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdG0ucGF0dGVybi50ZXN0KGNsbklucHV0KVxuICAgICAgfSlcbiAgICAgIGlmIChtYXRjaGVkVHlwZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG1hdGNoZWRUeXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2goW10pXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKFtdKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHByb21pc2Vcbn1cbiIsImV4cG9ydCBjb25zdCBERUZfUE9JTlRfU1lNX0lNQUdFX0RBVEE6IHN0cmluZyA9ICdpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRFFBQUFBMENBWUFBQURGZUJ2ckFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBbHdTRmx6QUFBT3dRQUFEc0VCdUpGcjdRQUFBQmwwUlZoMFUyOW1kSGRoY21VQVVHRnBiblF1VGtWVUlIWXpMalV1TVU3bk9Qa0FBQTAxU1VSQlZHaEQ3Vm41YzFYMUhSVmJSUk1TbzhRRUFnbUJTRUlXa3BDUWtKQ0U3Q1JrM3dNdmhKQUFNUnVFSkMvN0JvRW9RUmJMb3dwVVJCQ2hvWUtnS0doVjJtbHJLM1VYcldMRnBUODQvUVBxMkhIczZUazM3M1pTcCsxb2pTOTBwcGs1Yys5N3VlL2R6L21lOHpuZjcvZStHMjc0Lzk5L1B3SjVyVHR2SysxLzJIZjE4TW5Jc3Y0RFllV0RoM3lHWHZoc3luLy9qWlAweVlJVzI1S2lyZ2Y3VjIwOWVxNjgvL0FybHFHalZ5eER4OThvNlQzNGZFSDdQbHR4OXdPWmsxVGF0N3R0WWN2ZWlKeVd2ZWZYN2JtQU5UdFBvV2JQV1ZUZmQ4NDRydHQ3SHVXRHgxSGM4eE1VOVJ4QWZ0dWV5em1iUnZLLzNSMGNlSFZ4ejhHeW5KYmRuNisvLzFrMFBmUnIxQis4aEkwUC93ck5SMzZINWtkK2g1WkhYK2I1SzZnLzhEd3FkNHlpY3ZnTXl2dVBJcnRweDRnRHkveG10eXJyUHh5UlZOWHhsL3FEdjhUR0k3OUI2NGxYMGYzRSsraDgvQjEwL093dHRQRjEyOG5YMFByWTc3SDUyRXRvMXZINHF5UjRHUlhiUnFuWVFkczN1NU9EcmtxckdYaXFZdmdrT2srL3g0Si9pNzd6SDZEbjNGVjBrRkQzMmZmUWNmb0t1czY4aTQ1VFY5Qjg5Q1cwamI0TzYraGJWTzBWdEI1L0JlVURoMm5IdytzZFZPNS92azErMjQrQzQ4dmJ2OXgwNUdVTVhQZ1kvZWMveE9ERlQ4WUlrVVQ3cWJmUVJVSlNyTzNFRzhSckpFZVNQN3RpbkRjZmZSbDMvL2c1NUczZWViVmg1SG5uU1NlVnUybWtZbkgyZW14aXJ3dysrNmxCeWp6Mm5MMkszcWMrTU5ETmN5bldUbVdzbzI5VHpYY04wcDJuMzZFVjMwRDJ4aEdVOVI3SW1uUkNXWTNiK3dQamMxRnJlODRnMHYvME5RTWkxbjN1ZmZTeWFCVXU2L1UreWFOeGZoVURUMzlrWE5kMy9ocXYrWWlwdDUra2RyUk5PcUY4Njk2ZHN3SmpVTko3MkNEVSsrUUhWT0lLU2J3L1Z1eFRIeG9FK25qc2sxcFBma2d5SC9ONERUMVBYS1U5UDZVZDMwTktkVC9TYXJyN0o1MVFhZCtCRHUvZ2FBVEdsN0F3anZ5RlQ5a2ZZOWJxT3ZNSGRMS1BWTENoRWwrcmQzU3VQdW9uU1EzQ3hvZCtnZmlWelVpdDZXNmRkRUlWdzhjU0lyUFh3SG02RDVhdDdzSWdyVFp3NFJQRGFrWmNQMGFjZUlzRTN6RGl2UG5vWmFObk9rbk82TFZucmlHNTBvckYyV3VSdlhsSHpxUVRVZ0VadFlPWC9LUFNjYXVyTytJc205RkxxNDBWeS9oV0dKeDYxeUJsL1NtSktmV29qbUhQYzllUTE3SVAzc0d4c3R1ZnNwcTJ1VjRYaEN4RGp5NUp0TFIrSHBwYWhtbnVQZ2hLTE1LYWUwOFo4NDRLTjhCZStjYzVYNi9mOXd6Q2xsZkJmVTRFWW9zYndIQnB1aTdJbUVXVWRPOWZsN2phaW9pTVNzendDNFdMeHh6TVc1aUkyS0k2NUxYdGhXWG9CRXA3RHlHemJqdkMweXh3OXBnSFQxNFhXMUxIUUdoLzVMb2hzMmJrcEhQRjl1UEZsZmVjT0pQWHNoTUpxellpT3E4YUlVbjVDSXJOd1B6SVJQZ3dOSHlERStBNWJ4SGNmWU14WjJFc29uUFhZcG1sbWRoc1M2NnkzbmhkRUxJTUhWbkRVWCs3WXVneFdMWWRaei9zcEFLRFlFOGhjWFVia2xlM0luL3oySHZMVmpVaGhRcW0xdlFoNCs1QjVMZmM5MFcrZFZmNmRVR0VHN1diUzNvZU9GTFNld0FiYk5vcW5BWDNPSndZaDQzaVU2bzZrTEsyazhUNmtkTzB6U0NWM1RqTVBoa0d0d3pFRGhSMjdQdlNzdTNZNVBkTi9ZUFAzbFJndFYzTWF0ckpQYzdUcU9VNnJIendZYXB6bnhyYklKUlczWW4wOWQzSTJOQkhKWGFTMUhiK2I1dldhOGhwSGtGbXd4Q0t1dllqMzJvRFYrcVBWZTg1ZmN1a0tWWGE4K0JQa3F0NjJPUW51ZHg1Z1V1V2ZTaXczbThRTVFqUlR1azEzWHc5Z0JYMWd5aG9HVUZlOHc1azFtL1JwczRnbnQxMEw4OTNZL1h3S0FyYTk0dlVpVWtoWk5seXJHSjU3UmFrMUF6ZzdnZGVSQWwzbnlwd0JVYy90YVlMdVp0SGtOV3dGV2xWVnBMcW9zMjJvdGk2QjRXRXlNcHV1VlJwUmYwUXozZkJzdlZSVk43ek9NblpzR1prdE4yaHBQUndJNjlsMTIvalNqY2h2K01BbW85ZDVtVFlQeFlFOVZ2WjlNMkdTbElpbzNaZ3JIOUlsSEgrajk0eUZDVGg1RFZXRHNJd2Q2eUhVYjNuS1pUMkg1SDl2bWg2NkpLM3cwZ3gwUUl5NjdaOHNTaHJIZGJ1ZXRyWVZpL0tyTUJ5RnErK2lHSU14Ni9jYUNSY05vbGtOUXl5ZDZoUTF6NWFiQ3dzY3FnZ0l4cFJqUFhsZFZ2NGZPR1FZYnMxTzA0am8yNGJLclkvT3VBd1FzV2R0cExVNmk3Tzd0VjhMbkNKTzgzTDhJdE1Ra1JtcGFGUWVNWXFoS2FYR1hHZHhhYlBiaHFpMVhhaHRPY0JSVFR5VzNjYnBNTFR5dzFDSEJ6azh2M0tlMDV4Zy9jQzB0WnZZVC9aTGptTVVHRzdyVEdCdGdwSkxrUHQvZ3ZHUTQrNTRZbVlHYkNZazJpUkVRU3h4YlZVYlpWaEtSVmYybVBEcXNGRHlHWk1wekQ1d2pOV2NsV2VZL1NiTVRkeDNWZkIrYXQ2MTFra1dOcVF2bUh3enc0bEZGZldTRUlsOVB4aGhzSnpDRTB0Z2NzZFhuQ2Z2UUQrMGVrR2tjU0tWc1NWTnlLdXRCNkpMSmlMVGhLdFEyaGFPZDh6MW14OGhuQ0kxN1ZSclpWWU96S0ttcjBYRUZQY2lPUzFIWTRqbE5lNnV6UTZ2d2IrTVptY05MdFF2ZnNNRzN2SVdJKzV1bnZEbWNTbXo3NEx2b3VXVVlreWxMYmZpK3J0aDR5ZWtiTGM2L0J6SFFicEpZVWJjRmRVR3BkSWE2bjJSUlIySFVSTUVRbFZXYTg1VEtIaWRsc1lDZjNOYTBHa1ladHNCa0hsdlNlTkF0MTkvT0hzNWdubjIyZkNaYnFJQlNLaGNCWHlHM3NRWFZTUG9LU1ZtQmU1QWo0aHl6QnJ3V0xNbkI5SkxPSmM5Z2dhRHYwQ1M0cWJzVGluQnNzcXJPODZqSkJ1eEJGKzNTY2tCcDd6SXhETUxRSzMzL1QvNDB5b1FSWWJRekt6NGVJK0cyNmVjd2svZU13SmhXOVlNcndDWXpIZEo1QkUvVWwrQVdiY0ZXcjAydnE5Ri9uWkVRVEVGMkJKUVMzaXk1dmVkQ2doam1pdEFzQmpiakR1OEFwZ0tDUmhHWGViQmUzM0k0bEsrVVVtWTdxM1B3djNZMThGNFBhWk9sK0EyMmxGUVlRODU0Y2lJRGFUZmNaNXEzN0VDSm1naEZ5anYxWTBiaDkxS0NGT3JqZG0xQTFjbU1zdGdhemw1T2JCb3plVkNJYmY0aFFXbHNkd3lJQlBhS3hoTGUrZ0dDb1h6KzFEcklGNTdDKy9SVW53aTBoRFNNb3FoS1ZiYU44OFk3dWhYdHQ0NUNXSHJiN05uMENtNkNlUjlQVjlIM2tIeCtCVzlzMnRyaDZZNmpRZFU1M2Q0WHFuRDlVTE1mWTlYdjZSSk1SOVVHZ0NadlBvNVI5bFlBWVY4dlFMdzV4RktmQ05TRUVnMVluS3J0TFQwNk9PVWtka0JHM0Nma0Q4c0xEei9nVnBOVDF2K3RNNnJ0eHk2MW1DMDIwZWNISWRDd1luTjRiREhiTVpGRjVHckV0TmwrbHo0SExuWEZveUdCNitZUXlGS0NaZE9oK09WS0dvdy9iaXBpTy9jbkVFb1g4aXdodmVUR2lwN3hTY1dEYUxzLzFETVl4ZzM3Q2xjUFgwZ2RzTVh6NzltWW1wMHp4d2k5c011SHNIVVJFbFdnUjNxaUhzbzBBK1ExaUlHZjRSQ0ZpYWhiaVNCdTZqYktjYUR2N2M3ZnNrWXlxaW82RUlNWlc0bFpoRzZNbk03WVE3NGJHMHBINGxaLzZMY2NYMUNPTkVHNWFjamVqTUFvUW5abUYrZENybVJhVENLNGg5dERBWmZsR3BDR0U2eHBVcEFJYit5QzFFblYxNTg1N2ZDNi94cXR4a1YwUkViaU9tRTU2RUYrRkR6Q1B1SXViN2hrU3Y0RVJweTd5Ny8vUEtvY093OU5tK3ltN1k4bmxLcGZXcnVMSW1KRlZhLzVyVGRNK25YUEk4U1dWckErT3pQT3lLYThBMGNOL0xUNVZmSnlOVjVPMDc3RVJtOHpoWEJJZ2dZaUVSVGtRUWtVU0d2My93QjRrcGFkZEtTeTFQQkFVRTVjWEV4RmpXV2lvdFpVVmx1VDQrUHZyTVRQdkFTR2tuUXVwcjRMNFhVbWJqbThxSWpGUlJFYjZFUHhGQ0xDS2lpVmdpbmxoR0pISTB0c2NzaVVIYzBqZ0UrUWNOMnYrdjYwUlk1QmNRVW5VV2NTZmhSdWduRkpHU1Vyci9oQ2xscWpQZVpsTEdKS05pd3UxRVJDS1pTQ015Q1AwSXZPTEdLVGVlbitic2d0bXo1dnpOYWFyVEJyNlhhcjlPMXkreEQ0UlU4aU9rdGtpWlNpbHdwTktFa0Jwdk5YMnhyS0RSVTcrb1Y2Uk1tTDBvcVNFaUlxRm4wWG1FZnZ4ZE9lV0dLUis1VEhOQldGallaL2IzOWY4VmhDYk1KR0lwSWJWRVNrcXBGelZvNmxIVGVoTkt5RXcwM1VBMzBnMDFtc0hFWWlMQlRrWkY1aElGUkJGUlFsUVNuN2k2dUNJa1pPRnJQQzhtQ3UzRXNubGNiaWNWdzJNNG9VSFNZQ2tjdnE3U2Q3YWRHZEhqZTBleExGc29BRUlKOVlMVVVXRXFVS3FZWkVwNVhrYjBFdnVJRGtMdmpTZWxRWkFGWlQ4RlNDRGhTOHdnTkEyb2wwemJmYWNZTno4cy80cVFrazBqSm4vL08wTDY2VkJXa3dJcVdzVUxWanVaOG05QVNMWlRZcXBIVFVJVEZnNm1RaG9oazVBVVVockpja28yV1M2T1NDRVVCRkpKcEFyc3hLUldJN0hPVGxLdjlUOWRvMnYxR1FXSmtsRXArYThVbW5CQzR5Mm5IcElkZkFrbG5FSWhpakFUVG8ydVlKQmFhbjcxbEpTUllpS2gxeUlpcThtbUlxTUIwWGNvd21WbFBiWlNEMm5TVmhCTnFPV1VMbVlveU05dWhHd25sWlJJR2xHVGxOSktBWkZFcUMrVWVpcGFrQktDenZXK2lLajM5Qm1wckg3VUFQa1NzcHNHVHZPZG5ERWhFNnpaUXlZaDAzYTZpYnl0RVRSWENBRThOeWRXRmFlNVJZVktOUkVVVkx5Z2N5bWlWSk1xc3BrK3EzUlQ3eWhCWld0VG5RbTEyL2hnTUZXU0JjYVRVZ0Z6Q1BXVWlKbExINm1tWXMzbGo0Z3F4ZlJhNzBzUnhiNCtvODhxcWsweWJqelhGS0VWL0hoMUppUzJ2NzZPMDRpWnBIUmpqYVltV2xsUVJXbVVWYUI2UWNYS1JyS2xDYjJXR2xxODZscVRpTDVEeXlrcFk1S1JLOFl2ZmI0eklYNmZzWVl5U2VuTE5XTGp0dzBxUUg0M2ljbi9JaWM3cXJsVnNCUVVkQzdvZmFtaGNKRjFSY1NOa1BJYUxGT1pDU2NqUXYrVGYzOEhNajVrN09XSzVYOEFBQUFBU1VWT1JLNUNZSUk9J1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGNvb3JkaW5hdGVDb250cm9sU3R5bGVzIChwcm9wcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lXG4gIHJldHVybiBjc3NgXG4gIC5hZGp1c3QtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG5cbiAgLmFjdGlvbkJ1dHRvbiB7XG4gICAgbWFyZ2luOiAycHggMHB4IDBweCAycHg7XG4gIH1cblxuICAuYWN0aW9uQnV0dG9uOmRpc2FibGVke1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYWRkcmVzc0xpc3RHcm91cCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlci5jb2xvcn07XG4gIH1cblxuICAubGlzdEl0ZW0ge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAtN3B4IC04cHggNnB4IC04cHg7XG4gIH1cblxuICAubGlzdEl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUucHJpbWFyeVszMDBdfTtcbiAgfVxuXG4gIC5jYy1zZWFyY2gtaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuXG4gICAgICAuc2VhcmNoLWNsZWFyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1pbnB1dDo6LW1zLWNsZWFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgfVxuXG4gIC5oaWRkZW4tY29weS1pbnB1dCB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICBoZWlnaHQ6MDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gIC5sYWJlbERpbWVuc2lvbiB7XG4gICAgd2lkdGg6IDM2JVxuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbnZhbGlkLXZhbHVlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5kYW5nZXJ9O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggJHt0aGVtZS5jb2xvcnMuZGFuZ2VyfTtcbiAgfVxuXG4gIGBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9jb3JlX0hhbmRsZXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2ludF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVxdWVzdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3RfZ2VvbWV0cnlTZXJ2aWNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9sb2NhdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc3ltYm9sc19zdXBwb3J0X2pzb25VdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfQ29vcmRpbmF0ZUNvbnZlcnNpb25fQ29vcmRpbmF0ZUNvbnZlcnNpb25WaWV3TW9kZWxfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX0Nvb3JkaW5hdGVDb252ZXJzaW9uX3N1cHBvcnRfQ29udmVyc2lvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfQ29vcmRpbmF0ZUNvbnZlcnNpb25fc3VwcG9ydF9Gb3JtYXRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX0Nvb3JkaW5hdGVDb252ZXJzaW9uX3N1cHBvcnRfZm9ybWF0VXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZWdpc3RlclN0eWxlcyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBjb29yZGluYXRlQ29udHJvbFN0eWxlcyBhcyBDb29yZGluYXRlQ29udHJvbCB9IGZyb20gJy4vbGliL2Nvb3JkaW5hdGUtY29udHJvbC9zdHlsZXMvY29vcmRpbmF0ZS1jb250cm9sJ1xuXG5yZWdpc3RlclN0eWxlcygnamltdS11aS9hZHZhbmNlZC9jb29yZGluYXRlLWNvbnRyb2wnLCB7IENvb3JkaW5hdGVDb250cm9sIH0pXG5leHBvcnQgeyBDb29yZGluYXRlQ29udHJvbCB9IGZyb20gJy4vbGliL2Nvb3JkaW5hdGUtY29udHJvbC9jb21wb25lbnRzL2Nvb3JkaW5hdGUtY29udHJvbCdcbmV4cG9ydCB0eXBlIHsgQ29vcmRpbmF0ZUNvbnRyb2xSZXN1bHQgfSBmcm9tICcuL2xpYi9jb29yZGluYXRlLWNvbnRyb2wvY29tcG9uZW50cy9jb29yZGluYXRlLWNvbnRyb2wnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=