System.register(["jimu-arcgis","jimu-core","jimu-core/data-source","jimu-core/react","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/advanced/utility-selector","jimu-ui/basic/list-tree"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_utility_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_utility_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_utility_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/filled/brand/arcgis-enterprise.svg":
/*!***********************************************************!*\
  !*** ./jimu-icons/svg/filled/brand/arcgis-enterprise.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 32 32\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.596 6.357c.39-.59.944-1.055 1.595-1.337L15.544.094a1.143 1.143 0 0 1 .91 0L30 5.97V23.66a3.6 3.6 0 0 1-.596 1.983 3.648 3.648 0 0 1-1.595 1.337l-11.353 4.927a1.144 1.144 0 0 1-.91 0L2 26.029V8.34a3.6 3.6 0 0 1 .596-1.984m3.419 15.162c.009.016.022.029.037.038l9.594 5.351a.721.721 0 0 0 .705 0l9.144-5.103a.994.994 0 0 0 .37-.356.95.95 0 0 0 .135-.488v-9.89a.852.852 0 0 0-.122-.438.89.89 0 0 0-.331-.32l-9.497-5.3a.106.106 0 0 0-.104 0l-2.415 1.348a.069.069 0 0 0-.026.025.066.066 0 0 0 .026.092l8.947 4.992c.39.218.716.532.941.91.226.378.345.807.345 1.243v5.514c0 .08-.021.157-.062.226a.459.459 0 0 1-.172.165l-5.633 3.145a3.904 3.904 0 0 1-1.899.49c-.666 0-1.32-.169-1.898-.49L8.972 19.81a1.457 1.457 0 0 1-.542-.524 1.394 1.394 0 0 1-.198-.715V11.76a.069.069 0 0 1 .07-.068c.012 0 .024.003.035.009l7.651 4.268c.05.028.092.068.121.117a.313.313 0 0 1 .045.16v2.526c0 .012.003.024.009.034a.068.068 0 0 0 .06.033.073.073 0 0 0 .035-.009l1.972-1.1c.28-.156.511-.38.673-.651.161-.27.247-.577.247-.89v-.964c0-.278-.076-.55-.22-.79-.144-.241-.35-.44-.598-.58L9.65 9.011a.885.885 0 0 0-.86 0L6.052 10.54a.104.104 0 0 0-.052.088v10.842c0 .018.006.035.015.05\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/check.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/check.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/more-vertical.svg":
/*!***************************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/more-vertical.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M7 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m1-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/data/link-tilted.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/data/link-tilted.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m1.373 8 2.07-2.071.83.828L2.2 8.828a3.515 3.515 0 0 0 4.97 4.971l2.072-2.071.828.828L8 14.627A4.686 4.686 0 1 1 1.373 8M13.799 7.172l-2.071 2.07.828.83L14.627 8A4.686 4.686 0 1 0 8 1.373l-2.071 2.07.828.83L8.828 2.2a3.515 3.515 0 0 1 4.971 4.97\"></path><path fill=\"#000\" d=\"M5.515 9.657a.586.586 0 0 0 .828.828l4.142-4.142a.586.586 0 0 0-.828-.828z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/down.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/down.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/horizontal.svg":
/*!************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/horizontal.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M3.646 10.354a.5.5 0 0 0 .708-.708L2.707 8h10.586l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L13.293 7H2.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/sort-ascending.svg":
/*!****************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/sort-ascending.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M1.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM1 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M1.5 9a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM1.5 12a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/sort-descending.svg":
/*!*****************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/sort-descending.svg ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M1.5 13a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zM1 9.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M1.5 7a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1zM1.5 4a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/up.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/up.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/vertical.svg":
/*!**********************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/vertical.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M10.354 12.354a.5.5 0 0 0-.708-.708L8 13.293V2.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L7 2.707v10.586l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/edit.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/edit.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z\" clip-rule=\"evenodd\"></path><path fill=\"#000\" d=\"M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/plus.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/plus.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/search.svg":
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/search.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/warning.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/warning.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 2.125 14.334 14H1.667zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47zM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995m1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/filled/brand/arcgis-enterprise.tsx":
/*!*******************************************************!*\
  !*** ./jimu-icons/filled/brand/arcgis-enterprise.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcgisEnterpriseFilled: () => (/* binding */ ArcgisEnterpriseFilled)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_filled_brand_arcgis_enterprise_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/filled/brand/arcgis-enterprise.svg */ "./jimu-icons/svg/filled/brand/arcgis-enterprise.svg");
/* harmony import */ var _svg_filled_brand_arcgis_enterprise_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_filled_brand_arcgis_enterprise_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ArcgisEnterpriseFilled = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_filled_brand_arcgis_enterprise_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/check.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/application/check.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckOutlined: () => (/* binding */ CheckOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/check.svg */ "./jimu-icons/svg/outlined/application/check.svg");
/* harmony import */ var _svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const CheckOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/more-vertical.tsx":
/*!***********************************************************!*\
  !*** ./jimu-icons/outlined/application/more-vertical.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoreVerticalOutlined: () => (/* binding */ MoreVerticalOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_more_vertical_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/more-vertical.svg */ "./jimu-icons/svg/outlined/application/more-vertical.svg");
/* harmony import */ var _svg_outlined_application_more_vertical_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_more_vertical_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const MoreVerticalOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_more_vertical_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/data/link-tilted.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/data/link-tilted.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkTiltedOutlined: () => (/* binding */ LinkTiltedOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_data_link_tilted_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/data/link-tilted.svg */ "./jimu-icons/svg/outlined/data/link-tilted.svg");
/* harmony import */ var _svg_outlined_data_link_tilted_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_data_link_tilted_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const LinkTiltedOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_data_link_tilted_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/down.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/directional/down.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownOutlined: () => (/* binding */ DownOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/down.svg */ "./jimu-icons/svg/outlined/directional/down.svg");
/* harmony import */ var _svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const DownOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/horizontal.tsx":
/*!********************************************************!*\
  !*** ./jimu-icons/outlined/directional/horizontal.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HorizontalOutlined: () => (/* binding */ HorizontalOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_horizontal_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/horizontal.svg */ "./jimu-icons/svg/outlined/directional/horizontal.svg");
/* harmony import */ var _svg_outlined_directional_horizontal_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_horizontal_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const HorizontalOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_horizontal_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/right.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/directional/right.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightOutlined: () => (/* binding */ RightOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/right.svg */ "./jimu-icons/svg/outlined/directional/right.svg");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const RightOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/sort-ascending.tsx":
/*!************************************************************!*\
  !*** ./jimu-icons/outlined/directional/sort-ascending.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortAscendingOutlined: () => (/* binding */ SortAscendingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_sort_ascending_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/sort-ascending.svg */ "./jimu-icons/svg/outlined/directional/sort-ascending.svg");
/* harmony import */ var _svg_outlined_directional_sort_ascending_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_sort_ascending_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SortAscendingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_sort_ascending_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/sort-descending.tsx":
/*!*************************************************************!*\
  !*** ./jimu-icons/outlined/directional/sort-descending.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortDescendingOutlined: () => (/* binding */ SortDescendingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_sort_descending_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/sort-descending.svg */ "./jimu-icons/svg/outlined/directional/sort-descending.svg");
/* harmony import */ var _svg_outlined_directional_sort_descending_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_sort_descending_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SortDescendingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_sort_descending_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/up.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/directional/up.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpOutlined: () => (/* binding */ UpOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/up.svg */ "./jimu-icons/svg/outlined/directional/up.svg");
/* harmony import */ var _svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const UpOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/vertical.tsx":
/*!******************************************************!*\
  !*** ./jimu-icons/outlined/directional/vertical.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalOutlined: () => (/* binding */ VerticalOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_vertical_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/vertical.svg */ "./jimu-icons/svg/outlined/directional/vertical.svg");
/* harmony import */ var _svg_outlined_directional_vertical_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_vertical_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const VerticalOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_vertical_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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

/***/ "./jimu-icons/outlined/editor/edit.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/edit.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditOutlined: () => (/* binding */ EditOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/edit.svg */ "./jimu-icons/svg/outlined/editor/edit.svg");
/* harmony import */ var _svg_outlined_editor_edit_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_edit_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const EditOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_edit_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/plus.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/plus.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusOutlined: () => (/* binding */ PlusOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/plus.svg */ "./jimu-icons/svg/outlined/editor/plus.svg");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const PlusOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/search.tsx":
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/search.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchOutlined: () => (/* binding */ SearchOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/search.svg */ "./jimu-icons/svg/outlined/editor/search.svg");
/* harmony import */ var _svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SearchOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/suggested/warning.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/suggested/warning.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningOutlined: () => (/* binding */ WarningOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/suggested/warning.svg */ "./jimu-icons/svg/outlined/suggested/warning.svg");
/* harmony import */ var _svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const WarningOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/collapse/index.ts":
/*!******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/collapse/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsableCheckbox: () => (/* binding */ CollapsableCheckbox),
/* harmony export */   CollapsableRadio: () => (/* binding */ CollapsableRadio),
/* harmony export */   CollapsableToggle: () => (/* binding */ CollapsableToggle),
/* harmony export */   SettingCollapse: () => (/* binding */ SettingCollapse),
/* harmony export */   UnControlledSettingCollapse: () => (/* binding */ UnControlledSettingCollapse)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");

/**
 * The `SettingCollapse` component allows users to show the collapsible panel.
 *
 * @deprecated Use `CollapsablePanel` from `jimu-ui` instead.
 * ```ts
 * import { SettingCollapse } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const SettingCollapse = jimu_ui__WEBPACK_IMPORTED_MODULE_0__.CollapsablePanel;
/**
 * The `UnControlledSettingCollapse` is an uncontrolled component which allows users to show the collapsible panel.
 *
 * @deprecated Use `CollapsablePanel` from `jimu-ui` instead.
 * ```ts
 * import { UnControlledSettingCollapse } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const UnControlledSettingCollapse = jimu_ui__WEBPACK_IMPORTED_MODULE_0__.CollapsablePanel;
/**
 * The `CollapsableToggle` component allows users to show the collapsible panel.
 *
 * @deprecated Use `CollapsableToggle` from `jimu-ui` instead.
 * ```ts
 * import { CollapsableToggle } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const CollapsableToggle = jimu_ui__WEBPACK_IMPORTED_MODULE_0__.CollapsableToggle;
/**
 * The `CollapsableRadio` component allows users to show the collapsible panel.
 *
 * @deprecated Use `CollapsableRadio` from `jimu-ui` instead.
 * ```ts
 * import { CollapsableRadio } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const CollapsableRadio = jimu_ui__WEBPACK_IMPORTED_MODULE_0__.CollapsableRadio;
/**
 * The `CollapsableCheckbox` component allows users to show the collapsible panel.
 *
 * @deprecated Use `CollapsableCheckbox` from `jimu-ui` instead.
 * ```ts
 * import { CollapsableCheckbox } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const CollapsableCheckbox = jimu_ui__WEBPACK_IMPORTED_MODULE_0__.CollapsableCheckbox;


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/direction-selector/direction-selector.tsx":
/*!******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/direction-selector/direction-selector.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectionSelector: () => (/* binding */ DirectionSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_directional_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/directional/horizontal */ "./jimu-icons/outlined/directional/horizontal.tsx");
/* harmony import */ var jimu_icons_outlined_directional_vertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/directional/vertical */ "./jimu-icons/outlined/directional/vertical.tsx");
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




/**
 * The `DirectionSelector` component provides the user with the ability to set the direction.
 *
 * ```ts
 * import { DirectionSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const DirectionSelector = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const { vertical = false, onChange, autoFlip = true, className, size = 'sm' } = props, others = __rest(props, ["vertical", "onChange", "autoFlip", "className", "size"]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AdvancedButtonGroup, Object.assign({ size: size, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('setting--direction-selector', className) }, others),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: size, title: translate('horizontal'), type: 'default', icon: true, active: !vertical, onClick: () => { onChange(false); } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_horizontal__WEBPACK_IMPORTED_MODULE_2__.HorizontalOutlined, { autoFlip: autoFlip })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: size, title: translate('vertical'), type: 'default', icon: true, active: vertical, onClick: () => { onChange(true); } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_vertical__WEBPACK_IMPORTED_MODULE_3__.VerticalOutlined, null))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector-deprecated/ds-list-for-selector.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector-deprecated/ds-list-for-selector.tsx ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DsListForSelector: () => (/* binding */ DsListForSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class _DsListForSelector extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.getIsLoading = () => {
            if (!this.props.fromRootDsIds) {
                return false;
            }
            return this.props.fromRootDsIds.some(rootDsId => this.getIsSingleDsLoading(rootDsId));
        };
        this.getIsSingleDsLoading = (dsId) => {
            const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
            const dsInfo = ds === null || ds === void 0 ? void 0 : ds.getInfo();
            // No data source info means the data source is removed.
            if (!dsInfo) {
                return false;
            }
            if (dsInfo.instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.CreateError) {
                return false;
            }
            else if (dsInfo.instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Created) {
                // If the data source is set, should wait util all child data sources are created.
                return ds.isDataSourceSet ? !ds.areChildDataSourcesCreated() : false;
            }
            return true;
        };
        this.formatMessage = (id, values) => {
            const messages = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
            return this.props.intl.formatMessage({ id: id, defaultMessage: messages[id] }, values);
        };
        this.state = {
            isLoading: this.getIsLoading()
        };
    }
    componentDidMount() {
        if (this.state.isLoading) {
            this.waitChildDssReady().finally(() => {
                this.setState({ isLoading: false });
            });
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.fromRootDsIds !== this.props.fromRootDsIds) {
            this.setState({ isLoading: this.getIsLoading() });
        }
        if (this.state.isLoading) {
            this.waitChildDssReady().finally(() => {
                this.setState({ isLoading: false });
            });
        }
    }
    waitChildDssReady() {
        if (!this.props.fromRootDsIds) {
            return Promise.resolve([]);
        }
        return Promise.all(this.props.fromRootDsIds.map(rootDsId => this.waitChildDssReadyForSingleDs(rootDsId))).catch(err => []);
    }
    waitChildDssReadyForSingleDs(dsId) {
        const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
        if ((ds === null || ds === void 0 ? void 0 : ds.isDataSourceSet) && !ds.areChildDataSourcesCreated()) {
            return ds.childDataSourcesReady().then(() => ds);
        }
        return Promise.resolve(ds);
    }
    getContent() {
        var _a, _b, _c, _d;
        const rootDsIds = [];
        for (let i = 0; i < this.props.fromRootDsIds.length; i++) {
            rootDsIds.push(this.props.fromRootDsIds[i]);
        }
        const appConfig = ((_a = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isBuilder) ? (_c = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig : (_d = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _d === void 0 ? void 0 : _d.appConfig;
        const getWhetherItemError = (dataSourceId) => {
            var _a, _b, _c;
            return ((_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.dataSourcesInfo) === null || _b === void 0 ? void 0 : _b[dataSourceId]) === null || _c === void 0 ? void 0 : _c.instanceStatus) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.CreateError;
        };
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' }, rootDsIds.map((rootDsId, index) => {
            var _a;
            const rootDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(rootDsId);
            // const label = rootDs.getLabel()
            const label = (_a = appConfig.dataSources[rootDsId]) === null || _a === void 0 ? void 0 : _a.sourceLabel;
            const itemError = getWhetherItemError(rootDsId);
            const childerDss = rootDs === null || rootDs === void 0 ? void 0 : rootDs.getChildDataSources();
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: index },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'text-dark-600 pl-2 pr-2 d-flex align-items-center justify-content-between', style: { fontSize: '14px' } },
                    label,
                    itemError &&
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'error', text: this.formatMessage('dataSourceCreateError') })), childerDss === null || childerDss === void 0 ? void 0 :
                childerDss.map((childDs, idx) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: idx, className: 'mt-1 mb-1' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('layerviewselector-ds-item pl-2 pr-2', { 'layerviewselector-ds-item-selected': (this.props.selectedDsIds && this.props.selectedDsIds.includes(childDs.id)) }), title: childDs.getLabel(), onClick: () => {
                                this.props.onSelect && this.props.onSelect({
                                    rootDataSourceId: rootDsId,
                                    dataSourceId: childDs.id
                                });
                            } }, childDs === null || childDs === void 0 ? void 0 : childDs.getLabel())));
                })));
        })));
    }
    render() {
        if (!this.props.fromRootDsIds || this.props.fromRootDsIds.length === 0) {
            return null;
        }
        else {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' }, this.state.isLoading ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingType.Secondary, width: 24, height: 16 }) : this.getContent());
        }
    }
}
const DsListForSelector = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_DsListForSelector);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector-deprecated/index.tsx":
/*!**********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector-deprecated/index.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelectorDeprecated: () => (/* binding */ JimuLayerViewSelectorDeprecated)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _ds_list_for_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ds-list-for-selector */ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector-deprecated/ds-list-for-selector.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */




const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
& {
  .ds-selector > span {
    display: none;
  }
}
`;
class _JimuLayerViewSelectorDeprecated extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleList = (evt) => {
            this.setState({
                listOpen: !this.state.listOpen
            });
        };
        this.onResize = (width) => {
            this.setState({
                width: width
            });
        };
        this.handleChooseLayer = (selectedDsJson) => {
            if (this.props.onSelect) {
                if (selectedDsJson) {
                    const rootDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(selectedDsJson.rootDataSourceId);
                    const layerDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(selectedDsJson.dataSourceId);
                    const layerId = layerDs.id; // let survey widget work, need @teng9981 's help to review
                    const jimuLayerId = rootDs.getJimuChildId(layerId)[0];
                    this.props.onSelect((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                        jimuMapViewId: `${this.props.useMapWidgetIds[0]}-${selectedDsJson.rootDataSourceId}`,
                        jimuLayerId: jimuLayerId,
                        dataSourceId: selectedDsJson && selectedDsJson.dataSourceId,
                        rootDataSourceId: selectedDsJson && selectedDsJson.rootDataSourceId
                    }));
                }
                else {
                    this.props.onSelect((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
                }
            }
            this.setState({
                listOpen: false
            });
        };
        this.handleClickNone = () => {
            if (this.props.onSelect) {
                this.props.onSelect((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
            }
            this.setState({
                listOpen: false
            });
        };
        this.getTitle = () => {
            if (this.props.jimuLayerViewInfo && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && this.props.jimuLayerViewInfo.dataSourceId) {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                        dataSourceId: this.props.jimuLayerViewInfo.dataSourceId,
                        mainDataSourceId: this.props.jimuLayerViewInfo.dataSourceId,
                        rootDataSourceId: this.props.jimuLayerViewInfo.rootDataSourceId
                    }) }, (ds, info, query) => {
                    return ds === null || ds === void 0 ? void 0 : ds.getLabel();
                }));
            }
            else {
                return this.getNoneString();
            }
        };
        this.getContent = () => {
            const widgetId = this.props.useMapWidgetIds && this.props.useMapWidgetIds[0];
            const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
            const widgetJson = config.widgets[widgetId];
            if (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources[0]) {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 mt-1 mb-2' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onClick: () => { this.handleClickNone(); } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'layerviewselector-ds-item pl-2 pr-2' }, this.getNoneString())),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 mt-1 mb-1' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 border border-bottom-0 border-right-0 border-left-0' })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'ds-selector' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.MultipleDataSourceComponent, { useDataSources: widgetJson.useDataSources }, (dss, infos) => {
                            const fromRootDsIds = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(Object.keys(dss));
                            const selectedDsIds = [];
                            if (this.props.jimuLayerViewInfo && this.props.jimuLayerViewInfo.dataSourceId) {
                                selectedDsIds.push(this.props.jimuLayerViewInfo.dataSourceId);
                            }
                            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ds_list_for_selector__WEBPACK_IMPORTED_MODULE_2__.DsListForSelector, { fromRootDsIds: fromRootDsIds, onSelect: (selectedDsJson) => { this.handleChooseLayer(selectedDsJson); }, selectedDsIds: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(selectedDsIds) }));
                        }))));
            }
            else {
                return this.getEmptyContent();
            }
        };
        this.getNoneString = () => {
            return this.props.intl.formatMessage({ id: 'none', defaultMessage: 'None' });
        };
        this.getEmptyContent = () => {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 mt-1 mb-2' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'layerviewselector-ds-item pl-2 pr-2', onClick: () => { this.handleClickNone(); } }, this.getNoneString())));
        };
        this.state = {
            listOpen: false,
            width: 0
        };
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100', { [this.props.className]: !!this.props.className }) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { size: 'sm', toggle: (evt) => { this.toggleList(evt); }, isOpen: this.state.listOpen, className: 'w-100' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { size: 'sm', type: 'tertiary', className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 d-flex flex-column align-items-center toollist-item', 'justify-content-between toollist-item-click layerviewselector-input') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 d-flex justify-content-between align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'layerviewselector-input-text ml-2' }, this.getTitle()))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('ml-0 mr-0 mb-0 mt-1 p-0', { [this.props.className]: !!this.props.className }), css: STYLE },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 layerviewselector-bg' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: `${this.state.width}px` } }, this.getContent())))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleWidth: true, onResize: this.onResize })));
    }
}
/**
 * @deprecated
 * A react component for selecting layers in a map. It is usually used on the settings page of a widget,
 * and works with JimuLayerViewComponent to get the jimulayerview instance.
 */
const JimuLayerViewSelectorDeprecated = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.withStyles)(_JimuLayerViewSelectorDeprecated, 'JimuLayerViewSelectorDeprecated'));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/dropdown/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/dropdown/index.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelectorDropdown: () => (/* binding */ JimuLayerViewSelectorDropdown),
/* harmony export */   _JimuLayerViewSelectorDropdown: () => (/* binding */ _JimuLayerViewSelectorDropdown)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selector */ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/selector/index.tsx");
/** @jsx jsx */





/**
 * A component for selecting layers in a map view. It is usually used on the settings page of a widget.
 * It includes a dropdown button to display the selected values and JimuLayerViewSelector component to select the layer.
 * ```
 * import { JimuLayerViewSelectorDropdown } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const _JimuLayerViewSelectorDropdown = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const { useRef, useState } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
    const buttonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const getSelectLabel = () => {
        var _a;
        const { defaultSelectedValues, isMultiSelection, jimuMapViewId } = props;
        const number = (defaultSelectedValues === null || defaultSelectedValues === void 0 ? void 0 : defaultSelectedValues.length) || 0;
        if (number === 0) {
            return translate('numSelected', { number });
        }
        if (isMultiSelection) {
            return translate('numSelected', { number });
        }
        else {
            const jimuMapView = jimu_arcgis__WEBPACK_IMPORTED_MODULE_2__.MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId);
            return (_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.jimuLayerViews[defaultSelectedValues[0]]) === null || _a === void 0 ? void 0 : _a.layer.title;
        }
    };
    const onTogglePopper = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        else {
            setIsOpen(true);
        }
    };
    const getDropdownMenuStyle = () => {
        var _a;
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      ${buttonRef
            ? `
          width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(1.5 * ((_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth))} !important;
        `
            : ''}
      padding: 16px;
    `;
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('component-layer-view-selector-dropdown', 'w-100', props.className || '') },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { className: 'w-100', direction: 'down', toggle: onTogglePopper, isOpen: isOpen, autoWidth: true },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { ref: node => { buttonRef.current = node; } }, getSelectLabel()),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: 'shadow-lg', css: getDropdownMenuStyle(), alignment: 'end' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_selector__WEBPACK_IMPORTED_MODULE_4__.JimuLayerViewSelector, Object.assign({}, props, { isInDropdown: true }))))));
};
/**
 * A component for selecting layers in a map view. It is usually used on the settings page of a widget.
 * It includes a dropdown button to display the selected values and JimuLayerViewSelector component to select the layer.
 * ```
 * import { JimuLayerViewSelectorDropdown } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const JimuLayerViewSelectorDropdown = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.withStyles)(_JimuLayerViewSelectorDropdown, 'JimuLayerViewSelectorDropdown');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/selector/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/selector/index.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelector: () => (/* binding */ JimuLayerViewSelector),
/* harmony export */   _JimuLayerViewSelector: () => (/* binding */ _JimuLayerViewSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/search */ "./jimu-icons/outlined/editor/search.tsx");
/* harmony import */ var jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/list-tree */ "jimu-ui/basic/list-tree");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */






/**
 * Construct the tree structure json data from jimuLayerViews.
 */
const constructTree = (jimuLayerViews, disableLayers, hideLayers, selectedValues) => {
    const treeJson = {
        itemKey: 'root item',
        itemStateTitle: 'root item',
        itemChildren: []
    };
    const treeItemByKey = {};
    for (const key of Object.keys(jimuLayerViews)) {
        const isDisabled = disableLayers ? disableLayers(jimuLayerViews[key], jimuLayerViews) : false;
        const isSelected = (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.length) > 0 && selectedValues.includes(key);
        treeItemByKey[key] = {
            itemKey: key,
            itemStateTitle: jimuLayerViews[key].layer.title,
            itemChildren: [],
            isItemSelectable: !isDisabled,
            itemStateChecked: !isDisabled && isSelected
        };
    }
    for (const [key, val] of Object.entries(jimuLayerViews)) {
        const { parentJimuLayerViewId: pId } = val;
        if (jimuLayerViews[key].fromRuntime) {
            //To exclude the layers that added from Add Data widget
            continue;
        }
        else {
            const treeItem = treeItemByKey[key];
            if (!hideLayers) { //if hideLayers props is not defined
                if (pId === null) {
                    treeJson.itemChildren.push(treeItem);
                }
                else {
                    treeItemByKey[pId].itemChildren.push(treeItem);
                }
            }
            else if (!hideLayers(jimuLayerViews[key], jimuLayerViews)) {
                if (pId === null) {
                    treeJson.itemChildren.push(treeItem);
                }
                else {
                    treeItemByKey[pId].itemChildren.push(treeItem);
                }
            }
        }
    }
    return treeJson;
};
/**
 * Sort the tree items in the same level.
 */
const sortTreeItem = (item, jimuLayerViews) => {
    if (!item.itemChildren || item.itemChildren.length === 0) {
        return item;
    }
    // sort the children nodes
    item.itemChildren = item.itemChildren.sort((a, b) => { return jimuLayerViews[a.itemKey].index - jimuLayerViews[b.itemKey].index; });
    // iterate the children
    item.itemChildren.forEach(child => sortTreeItem(child, jimuLayerViews));
    return item;
};
/**
 * Filter the tree items that title includes the search string and expand the items.
 */
const filterTreeItem = (item, filterKey) => {
    if (!item.itemChildren || item.itemChildren.length === 0) {
        return item.itemStateTitle.toLowerCase().includes(filterKey.toLowerCase()) ? item : null;
    }
    const filteredChildren = item.itemChildren
        .map(child => filterTreeItem(child, filterKey))
        .filter(Boolean);
    //Expand every item in the tree, except the last one.
    if (filteredChildren.length > 0) {
        item.itemStateExpanded = true;
    }
    if (filteredChildren.length === 0) {
        return item.itemStateTitle.toLowerCase().includes(filterKey.toLowerCase()) ? item : null;
    }
    item.itemChildren = filteredChildren;
    return item;
};
/**
 * Modify the itemStateChecked attribute of a tree item.
 */
const modifyTreeItemCheckState = (item, key, value) => {
    if (item.itemKey === key) {
        item.itemStateChecked = value;
        return item;
    }
    if (!item.itemChildren || item.itemChildren.length === 0) {
        return item;
    }
    item.itemChildren = item.itemChildren.map(child => modifyTreeItemCheckState(child, key, value));
    return item;
};
/**
 * A component for selecting layers in a map view. It is usually used in the
 * setting page to get the layer id.
 * ```
 * import { JimuLayerViewSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const _JimuLayerViewSelector = (props) => {
    const { jimuMapViewId, hideLayers, disableLayers, isMultiSelection = false, defaultSelectedValues } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const { useRef, useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
    const searchRef = useRef(null);
    const getAllJimuLayerViews = (jimuMapViewId) => __awaiter(void 0, void 0, void 0, function* () {
        const jimuMapView = jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.MapViewManager.getInstance().getJimuMapViewById(jimuMapViewId);
        const jimuLayerViews = yield jimuMapView.whenAllJimuLayerViewLoaded();
        return jimuLayerViews;
    });
    const [searchedText, setSearchedText] = useState('');
    const [rootItemJson, setRootItemJson] = useState(null);
    const [searchedItemJson, setSearchedItemJson] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getAllJimuLayerViews(jimuMapViewId).then((jimuLayerViews) => {
            setIsLoading(false);
            const initTree = constructTree(jimuLayerViews, disableLayers, hideLayers, defaultSelectedValues);
            const sortedTree = sortTreeItem(initTree, jimuLayerViews);
            setRootItemJson(sortedTree);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [jimuMapViewId]);
    /**
     * Fired when search text is changed.
     */
    const onTextChange = (evt) => {
        const value = evt.target.value;
        if (value === '') {
            setSearchedItemJson(null);
            setSearchedText(value);
            setRootItemJson(rootItemJson);
        }
        else {
            setSearchedText(value);
            const newRootItemJson = JSON.parse(JSON.stringify(rootItemJson));
            const filteredItemJson = filterTreeItem(newRootItemJson, value);
            if (!filteredItemJson) {
                const noSearchedResultItemJson = {
                    itemKey: 'root item',
                    itemStateTitle: 'root item',
                    itemChildren: []
                };
                setSearchedItemJson(noSearchedResultItemJson);
            }
            else {
                setSearchedItemJson(filteredItemJson);
            }
        }
    };
    const handleUpdateLayerItem = (actionData, refComponent) => {
        if (actionData.updateType === jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.HandleExpandItem) {
            const [, nextRootItemJson] = actionData.itemJsons;
            if (searchedItemJson) {
                setSearchedItemJson(Object.assign({}, nextRootItemJson));
            }
            else {
                setRootItemJson(Object.assign({}, nextRootItemJson));
            }
        }
        if (actionData.updateType === jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.HandleCheckboxChanged) {
            const [currentItemJson, nextRootItemJson] = actionData.itemJsons;
            if (searchedItemJson) {
                setSearchedItemJson(Object.assign({}, nextRootItemJson));
            }
            else {
                setRootItemJson(Object.assign({}, nextRootItemJson));
            }
            if (isMultiSelection) {
                const newSelectedItem = defaultSelectedValues ? [...defaultSelectedValues] : [];
                if (currentItemJson.isItemSelectable && currentItemJson.itemStateChecked) {
                    newSelectedItem.push(currentItemJson.itemKey);
                    if (searchedItemJson) {
                        modifyTreeItemCheckState(rootItemJson, currentItemJson.itemKey, true);
                    }
                }
                else if (currentItemJson.isItemSelectable && (currentItemJson.itemStateChecked === false)) {
                    newSelectedItem.splice(newSelectedItem.indexOf(currentItemJson.itemKey), 1);
                    if (searchedItemJson) {
                        modifyTreeItemCheckState(rootItemJson, currentItemJson.itemKey, false);
                    }
                }
                props.onChange(newSelectedItem);
            }
            else {
                if (currentItemJson.isItemSelectable && currentItemJson.itemStateChecked) {
                    if (searchedItemJson) {
                        modifyTreeItemCheckState(rootItemJson, currentItemJson.itemKey, true);
                        modifyTreeItemCheckState(rootItemJson, defaultSelectedValues[0], false);
                    }
                    props.onChange([currentItemJson.itemKey]);
                }
                else if (currentItemJson.isItemSelectable && (currentItemJson.itemStateChecked === false)) {
                    if (searchedItemJson) {
                        modifyTreeItemCheckState(rootItemJson, currentItemJson.itemKey, false);
                    }
                    props.onChange([]);
                }
            }
        }
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('component-layer-view-selector', 'w-100 h-100', props.className || '') },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'search-container' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { prefix: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_2__.SearchOutlined, null), allowClear: true, size: 'sm', type: 'text', defaultValue: '', ref: searchRef, placeholder: translate('SearchLabel'), onChange: onTextChange })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tree-container' }, isLoading
            ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { className: 'w-100 h-100', type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingType.Secondary })
            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.Tree, { className: 'w-100', collapseStyle: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeCollapseStyle.Arrow, dndEnabled: false, onUpdateItem: handleUpdateLayerItem, rootItemJson: searchedItemJson || rootItemJson, isMultiSelection: isMultiSelection, checkboxLinkage: false, size: 'sm', treeAlignmentType: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeAlignmentType.Intact, disableDoubleClickTitle: true, treeStyle: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeStyle.Basic, singleLineText: true, searchedText: searchedText }))));
};
/**
 * A component for selecting layers in a map view. It is usually used on the settings page of a widget.
 * It includes a dropdown button to display the selected values and JimuLayerViewSelector component to select the layer.
 * ```
 * import { JimuLayerViewSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const JimuLayerViewSelector = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withStyles)(_JimuLayerViewSelector, 'JimuLayerViewSelector');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/jimu-map-view-selector/index.tsx":
/*!*********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/jimu-map-view-selector/index.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuMapViewSelector: () => (/* binding */ JimuMapViewSelector),
/* harmony export */   _JimuMapViewSelector: () => (/* binding */ _JimuMapViewSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-selector-utils/utils */ "./jimu-ui/advanced/lib/setting-components/components/map-selector-utils/utils.ts");




//Get the name of the map view, includes the map view that is deleted.
const getDataSourceLabel = (dataSourceId) => {
    var _a, _b, _c, _d, _e, _f;
    if (!dataSourceId) {
        return '';
    }
    const appConfig = ((_a = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isBuilder) ? (_c = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig : (_d = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _d === void 0 ? void 0 : _d.appConfig;
    const label = ((_e = appConfig.dataSources[dataSourceId]) === null || _e === void 0 ? void 0 : _e.label) || ((_f = appConfig.dataSources[dataSourceId]) === null || _f === void 0 ? void 0 : _f.sourceLabel);
    return label;
};
/**
 * A component for selecting map views in a map. It is usually used on the settings page of a widget,
 * and works with JimuLayerViewSelector.
 * ```
 * import { JimuMapViewSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const _JimuMapViewSelector = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const noneMapView = { id: 'none', label: translate('none') };
    const appConfig = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a, _b;
        return ((_a = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isBuilder) ? (_b = state.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig : state.appConfig;
    });
    const browserSizeMode = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        return (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.browserSizeMode;
    });
    const currentPageId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        return (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo.currentPageId;
    });
    const currentDialogId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        return (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo.currentDialogId;
    });
    const currentContainerType = currentDialogId ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog : jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Page;
    const currentId = currentDialogId || currentPageId;
    const mapViewJsons = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        //Get the map widgets in all the pages and windows of the app
        const selectLists = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getMapWidgets(appConfig, browserSizeMode, currentContainerType, currentId);
        const getOptionList = () => {
            const OptionList = [];
            //Get the mapView of current page or window.
            const currentMapExist = selectLists[0].maps.length > 0;
            let currentPageDivider = false;
            if (currentMapExist) {
                const sortedCurrentPageMapList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(selectLists[0].maps, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Widget);
                sortedCurrentPageMapList.forEach((mapWidget, index) => {
                    if (appConfig.widgets[mapWidget].useDataSources && appConfig.widgets[mapWidget].useDataSources.length > 0) {
                        if (!currentPageDivider) {
                            OptionList.push(_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.divider);
                            currentPageDivider = true;
                        }
                        const currentType = currentContainerType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog ? translate('currentWindow') : translate('currentPage');
                        const currentHeader = {
                            header: true,
                            label: `${currentType} | ${appConfig.widgets[mapWidget].label}`
                        };
                        OptionList.push(currentHeader);
                        appConfig.widgets[mapWidget].useDataSources.forEach((ds) => {
                            const option = {
                                id: `${mapWidget}-${ds.dataSourceId}`,
                                label: getDataSourceLabel(ds.dataSourceId),
                                headerLabel: `${currentContainerType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog ? translate('currentWindow') : translate('currentPage')} ${appConfig.widgets[mapWidget].label}`
                            };
                            OptionList.push(option);
                        });
                    }
                });
            }
            const breakList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.getBreakList)(1, selectLists);
            //Get the option list of pages.
            let pageDivider = false;
            const sortedPageList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(breakList.pageList, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Page);
            for (let i = 0; i < breakList.pageList.length; i++) {
                const sortedMapList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(sortedPageList[i].maps, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Widget);
                for (let j = 0; j < sortedMapList.length; j++) {
                    if (appConfig.widgets[sortedMapList[j]].useDataSources && appConfig.widgets[sortedMapList[j]].useDataSources.length > 0) {
                        if (!pageDivider) {
                            OptionList.push(_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.divider);
                            pageDivider = true;
                        }
                        const otherHeader = {
                            header: true,
                            label: `${appConfig.pages[sortedPageList[i].id].label} | ${appConfig.widgets[sortedMapList[j]].label}`
                        };
                        OptionList.push(otherHeader);
                        appConfig.widgets[sortedMapList[j]].useDataSources.forEach((ds) => {
                            const otherOption = {
                                id: `${sortedMapList[j]}-${ds.dataSourceId}`,
                                label: getDataSourceLabel(ds.dataSourceId),
                                headerLabel: `${appConfig.pages[sortedPageList[i].id].label} ${appConfig.widgets[sortedMapList[j]].label}`
                            };
                            OptionList.push(otherOption);
                        });
                    }
                }
            }
            //Get the option list of windows.
            if (breakList.dialogList) {
                let dialogDivider = false;
                const sortedDialogList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(breakList.dialogList, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Dialog);
                for (let i = 0; i < breakList.dialogList.length; i++) {
                    const sortedMapList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(sortedDialogList[i].maps, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Widget);
                    for (let j = 0; j < sortedMapList.length; j++) {
                        if (appConfig.widgets[sortedMapList[j]].useDataSources && appConfig.widgets[sortedMapList[j]].useDataSources.length > 0) {
                            if (!dialogDivider) {
                                OptionList.push(_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.divider);
                                dialogDivider = true;
                            }
                            const otherHeader = {
                                header: true,
                                label: `${appConfig.dialogs[sortedDialogList[i].id].label} | ${appConfig.widgets[sortedMapList[j]].label}`
                            };
                            OptionList.push(otherHeader);
                            appConfig.widgets[sortedMapList[j]].useDataSources.forEach((ds) => {
                                const otherOption = {
                                    id: `${sortedMapList[j]}-${ds.dataSourceId}`,
                                    label: getDataSourceLabel(ds.dataSourceId),
                                    headerLabel: `${appConfig.dialogs[sortedDialogList[i].id].label} ${appConfig.widgets[sortedMapList[j]].label}`
                                };
                                OptionList.push(otherOption);
                            });
                        }
                    }
                }
            }
            return OptionList;
        };
        return getOptionList();
    }, [appConfig, browserSizeMode, currentContainerType, currentId, translate]);
    const onChange = e => {
        var _a;
        const mapViewId = e.target.value;
        const useMapViewIds = mapViewId === noneMapView.id ? [] : [mapViewId];
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, useMapViewIds);
    };
    const getSelectedMapWidget = () => {
        var _a;
        if (!props.useMapViewIds || ((_a = props.useMapViewIds) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        const selectedMapViewId = props.useMapViewIds[0];
        return mapViewJsons.find(w => w.id === selectedMapViewId) || null;
    };
    const selectedMapView = getSelectedMapWidget();
    const getWhetherItemError = (dataSourceId) => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.dataSourcesInfo) === null || _b === void 0 ? void 0 : _b[dataSourceId]) === null || _c === void 0 ? void 0 : _c.instanceStatus) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.CreateError;
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'component-map-view-selector' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: 'sm', onChange: onChange, value: selectedMapView ? selectedMapView.id : noneMapView.id, "aria-label": props['aria-label'] }, [noneMapView].concat(mapViewJsons).map((option, index) => {
                var _a;
                return (getWhetherItemError((_a = option.id) === null || _a === void 0 ? void 0 : _a.split('-')[1])
                    ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { disabled: true, className: 'd-flex align-items-center justify-content-start' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, option.label),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'error', text: translate('dataSourceCreateError'), style: { marginLeft: 'auto' } }))
                    : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { header: option.header, divider: option.divider, value: option.id, key: index },
                        !option.header && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'sr-only' }, option.headerLabel),
                        option.label));
            })))));
};
/**
 * A component for selecting map views in a map. It is usually used on the settings page of a widget,
 * and works with JimuLayerViewSelector.
 * ```
 * import { JimuMapViewSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const JimuMapViewSelector = _JimuMapViewSelector;


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/layout/index.ts":
/*!****************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/layout/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingRow: () => (/* reexport safe */ _row__WEBPACK_IMPORTED_MODULE_1__.SettingRow),
/* harmony export */   SettingSection: () => (/* reexport safe */ _section__WEBPACK_IMPORTED_MODULE_0__.SettingSection)
/* harmony export */ });
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "./jimu-ui/advanced/lib/setting-components/components/layout/section.tsx");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row */ "./jimu-ui/advanced/lib/setting-components/components/layout/row.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/layout/row.tsx":
/*!***************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/layout/row.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingRow: () => (/* binding */ SettingRow),
/* harmony export */   _SettingRow: () => (/* binding */ _SettingRow)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/directional/right */ "./jimu-icons/outlined/directional/right.tsx");
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




const Header = (props) => {
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'jimu-widget-setting--row-header mb-4' }, props.children));
};
/**
 * The unstyled version of the SettingRow component.
 * Please use {@link SettingRow} instead.
 */
class _SettingRow extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onActionClick = (type) => {
            if (type === 'drilldown') {
                if (this.props && this.props.onDrillDown) {
                    this.props.onDrillDown();
                }
            }
        };
    }
    render() {
        const _a = this.props, { action, flow, truncateLabel, label, role, indented, className, level = 3, bottomLine = false } = _a, otherProps = __rest(_a, ["action", "flow", "truncateLabel", "label", "role", "indented", "className", "level", "bottomLine"]);
        const title = typeof label === 'string' ? label : '';
        const rootClasses = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'jimu-widget-setting--row', 'form-group', 'align-items-center', {
            'form-inline': flow !== 'wrap',
            'bottom-line': bottomLine,
            'pl-5': indented
        });
        const Tag = action ? 'span' : 'label';
        const Label = label && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Tag, { title: title, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(`jimu-widget-setting--row-label justify-content-start flex-grow-1 text-break setting-text-level-${level}`, {
                'w-100 mr-0': flow === 'wrap',
                'text-truncate': truncateLabel
            }) }, label);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Row, { className: rootClasses, role: role, "aria-label": otherProps['aria-label'] },
            flow === 'wrap' && action
                ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Header, null, action === 'drilldown'
                    ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', type: 'tertiary', onClick: () => { this.onActionClick('drilldown'); } },
                        Label,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_3__.RightOutlined, { className: 'right-icon' }))
                    : undefined)
                : Label,
            this.props.children));
    }
}
/**
 * The `SettingRow` component allows users to display setting content in a row.
 * Use this component inside of the `SettingSection` component.
 *
 * ```ts
 * import { SettingRow } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const SettingRow = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)(_SettingRow, 'SettingRow');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/layout/section.tsx":
/*!*******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/layout/section.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingSection: () => (/* binding */ SettingSection),
/* harmony export */   _SettingSection: () => (/* binding */ _SettingSection)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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



/**
 * The unstyled version of the SettingSection component.
 */
class _SettingSection extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        const _a = this.props, { className, style, title, role, children } = _a, otherProps = __rest(_a, ["className", "style", "title", "role", "children"]);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Container, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'jimu-widget-setting--section'), style: style, role: role, "aria-label": otherProps['aria-label'], "aria-describedby": otherProps['aria-describedby'] },
            title && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Row, { className: 'jimu-widget-setting--section-header' }, typeof title === 'string'
                ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h6", { className: 'w-100 setting-text-level-1' }, title)
                : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 text-truncate setting-text-level-1' }, title)),
            children));
    }
}
/**
 * The `SettingSection` component allows users to display setting content as a section.
 * Use this component to wrap `SettingRow` component(s).
 *
 * ```ts
 * import { SettingSection } from 'jimu-ui/advanced/setting-components'
 * ```
 */
const SettingSection = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)(_SettingSection, 'SettingSection');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/block-link-content.tsx":
/*!*********************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/block-link-content.tsx ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockLinkContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _link_setting_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-setting-list */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/link-setting-list.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




class BlockLinkContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.getInitLinkParam = () => {
            const blocks = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getBlockAnchorPointsInPage(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getAppConfig(), jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentPageId(), jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode());
            if (!blocks || blocks.length < 1) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block,
                    value: ''
                });
            }
            // default, select the first line
            if (this.props.originLinkParam.linkType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block) {
                const data = this.getBlockData();
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block,
                    value: data && data.some(p => p.id === 'default') ? 'default' : data && data[0] && data[0].id
                });
            }
            else {
                return this.props.originLinkParam;
            }
        };
        this.getBlockData = () => {
            var _a;
            const blocks = (_a = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getBlockAnchorPointsInPage(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getAppConfig(), jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentPageId(), jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode())) === null || _a === void 0 ? void 0 : _a.sort((b1, b2) => { var _a; return (_a = b1.label) === null || _a === void 0 ? void 0 : _a.localeCompare(b2.label, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' }); });
            const data = blocks.map(b => ({ id: b.id, name: b.label }));
            return data;
        };
        this.setLinkParam = (newSelectItem) => {
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', newSelectItem.id);
            this.props.onLinkParamChange(tempLinkParam);
        };
    }
    componentDidMount() {
        const linkParam = this.getInitLinkParam();
        this.props.onLinkParamChange(linkParam);
    }
    render() {
        const data = this.getBlockData();
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'jumpTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.jumpTo })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, data && data.length > 0 &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_link_setting_list__WEBPACK_IMPORTED_MODULE_2__["default"], { linkParam: this.props.linkParam, datas: data, onClick: this.setLinkParam, "aria-label": this.props.intl.formatMessage({ id: 'jumpTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.jumpTo }) }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/collapse-tool.tsx":
/*!****************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/collapse-tool.tsx ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollapseTool)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/directional/down */ "./jimu-icons/outlined/directional/down.tsx");
/* harmony import */ var jimu_icons_outlined_directional_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/directional/up */ "./jimu-icons/outlined/directional/up.tsx");




class CollapseTool extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onCollapseClick = e => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            this.setState({ collapse: !this.state.collapse });
        };
    }
    componentWillMount() {
        this.setState({
            collapse: this.props.isOpen
        });
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100', this.props.className) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { title: this.props.title, style: { overflow: 'hidden' }, className: 'w-100 btn pb-2 pr-2 d-flex justify-content-between' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, this.props.title),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'tertiary', size: 'sm', className: 'collapse-btn py-0 jimu-outline-inside pr-0', onClick: this.onCollapseClick }, this.state.collapse ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_2__.DownOutlined, { size: 's' }) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_up__WEBPACK_IMPORTED_MODULE_3__.UpOutlined, { size: 's' }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Collapse, { isOpen: this.state.collapse, "aria-label": this.props.title }, this.props.children)));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/dialog-link-content.tsx":
/*!**********************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/dialog-link-content.tsx ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DialogLinkContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _link_setting_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-setting-list */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/link-setting-list.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts");




class DialogLinkContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.getInitLinkParam = () => {
            const dialogs = this.props.appConfig.dialogs;
            if (!dialogs || Object.keys(dialogs).length < 1) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog,
                    value: ''
                });
            }
            // default, select the first line
            if (this.props.originLinkParam.linkType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog) {
                const dialogData = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDialogData)(this.props.appConfig);
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog,
                    value: dialogData && dialogData[0] && dialogData[0].id
                });
            }
            else {
                return this.props.originLinkParam;
            }
        };
        this.setLinkParam = (newSelectItem) => {
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', newSelectItem.id);
            this.props.onLinkParamChange(tempLinkParam);
        };
    }
    componentDidMount() {
        const linkParam = this.getInitLinkParam();
        this.props.onLinkParamChange(linkParam);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.appConfig !== this.props.appConfig) {
            const linkParam = this.getInitLinkParam();
            this.props.onLinkParamChange(linkParam);
        }
    }
    render() {
        const data = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDialogData)(this.props.appConfig);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'chooseADialog', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.chooseADialog })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, data && data.length > 0 &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_link_setting_list__WEBPACK_IMPORTED_MODULE_1__["default"], { linkParam: this.props.linkParam, datas: data, onClick: this.setLinkParam, "aria-label": this.props.intl.formatMessage({ id: 'chooseADialog', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.chooseADialog }) }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/link-setting-list.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/link-setting-list.tsx ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkSelectorList)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class LinkSelectorList extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.itemOnClick = (newSelectItem) => {
            this.props.onClick(newSelectItem);
            this.setState({ selectedItemName: newSelectItem.name });
        };
    }
    getListContent() {
        return this.props.datas.map((listItem, idx) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onClick: () => { this.itemOnClick(listItem); }, key: idx, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('link-selector-list-item btn w-100 border text-left border-bottom-0 rounded-0 text-truncate', { itemselected: this.props.linkParam.value === listItem.id }) }, listItem.name));
    }
    render() {
        const selected = this.props.datas.find(d => this.props.linkParam.value === d.id);
        const selectedItemId = selected && selected.id;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'link-selector-list w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: selectedItemId, className: 'w-100', onChange: e => { this.itemOnClick(this.props.datas.find(d => d.id === e.target.value)); }, "aria-label": this.props['aria-label'], size: 'sm' }, this.props.datas.map((listItem, idx) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: idx, value: listItem.id }, listItem.name)))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/page-link-content.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/page-link-content.tsx ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageLinkContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts");
/* harmony import */ var _link_setting_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-setting-list */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/link-setting-list.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts");





class PageLinkContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.getInitLinkParam = () => {
            const pageStructure = this.props.appConfig.pageStructure;
            if (!pageStructure || pageStructure.length < 1) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    value: ''
                });
            }
            // default, select the first line
            if (this.props.originLinkParam.linkType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page) {
                const pageData = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPageData)(this.props.appConfig, this.props.intl);
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page,
                    value: pageData && pageData.some(p => p.id === 'default') ? 'default' : pageData && pageData[0] && pageData[0].id,
                    openType: !this.props.openTypes || this.props.openTypes.includes(_types__WEBPACK_IMPORTED_MODULE_1__.OpenTypes.CurrentWindow) ? _types__WEBPACK_IMPORTED_MODULE_1__.OpenTypes.CurrentWindow : this.props.openTypes[0]
                });
            }
            else {
                return this.props.originLinkParam;
            }
        };
        this.setLinkParam = (newSelectItem) => {
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', newSelectItem.id);
            this.props.onLinkParamChange(tempLinkParam);
        };
    }
    componentDidMount() {
        const pagelinkParam = this.getInitLinkParam();
        this.props.onLinkParamChange(pagelinkParam);
    }
    render() {
        const pageData = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPageData)(this.props.appConfig, this.props.intl);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'chooseAPage', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.chooseAPage })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_link_setting_list__WEBPACK_IMPORTED_MODULE_2__["default"], { linkParam: this.props.linkParam, datas: pageData, onClick: this.setLinkParam, "aria-label": this.props.intl.formatMessage({ id: 'chooseAPage', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.chooseAPage }) }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/screen-link-content.tsx":
/*!**********************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/screen-link-content.tsx ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockLinkContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



class BlockLinkContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.screenGroupLabelStyle = {
            marginLeft: '-20px'
        };
        this.getInitLinkParam = () => {
            const data = this.getScreenData();
            if (!data || data.length < 1) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen,
                    value: ''
                });
            }
            // default, select the first line
            if (this.props.originLinkParam.linkType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen) {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen,
                    value: data[0].screens[0].id
                });
            }
            else {
                return this.props.originLinkParam;
            }
        };
        this.getScreenData = () => {
            var _a;
            return (_a = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getScreenAnchorPointsInPage(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getAppConfig(), jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentPageId(), jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode())) === null || _a === void 0 ? void 0 : _a.sort((s1, s2) => { var _a; return (_a = s1.label) === null || _a === void 0 ? void 0 : _a.localeCompare(s2.label, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' }); });
        };
        this.setLinkParam = e => {
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', e.target.value);
            this.props.onLinkParamChange(tempLinkParam);
        };
    }
    componentDidMount() {
        const linkParam = this.getInitLinkParam();
        this.props.onLinkParamChange(linkParam);
    }
    render() {
        var _a;
        const data = this.getScreenData();
        const options = [];
        data.forEach(g => {
            options.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: g.id, key: g.id, disabled: true, style: this.screenGroupLabelStyle }, g.label));
            g.screens.forEach((s, i) => options.push(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: s.id, key: `${g.id}-${i}` }, s.label)));
        });
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'jumpTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.jumpTo })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, data.length > 0 &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: (_a = this.props.linkParam) === null || _a === void 0 ? void 0 : _a.value, className: 'w-100', onChange: this.setLinkParam, size: 'sm', "aria-label": this.props.intl.formatMessage({ id: 'jumpTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.jumpTo }) }, options))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/view-link-content.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/view-link-content.tsx ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ViewLinkContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts");
/* harmony import */ var _collapse_tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collapse-tool */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/collapse-tool.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts");





class ViewLinkContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.noScroll = 'Do not scroll';
        this.getInitLinkParam = () => {
            const linkType = this.props.originLinkParam.linkType;
            if (linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View) {
                return this.props.originLinkParam;
            }
            else {
                let initLinkParam = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View,
                    value: ''
                });
                if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.isDialogId)(this.getDefaultPageOrDialogId())) {
                    initLinkParam = initLinkParam.set('openType', this.getInitOpenType());
                }
                return initLinkParam;
            }
        };
        this.getInitOpenType = () => {
            return !this.props.openTypes || this.props.openTypes.includes(_types__WEBPACK_IMPORTED_MODULE_1__.OpenTypes.CurrentWindow) ? _types__WEBPACK_IMPORTED_MODULE_1__.OpenTypes.CurrentWindow : this.props.openTypes[0];
        };
        this.pageOrDialogChange = (e) => {
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', e.target.value);
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.linkToViewOnDialog)(tempLinkParam)) {
                tempLinkParam = tempLinkParam.without('openType');
            }
            else {
                tempLinkParam = tempLinkParam.set('openType', this.getInitOpenType());
            }
            this.props.onLinkParamChange(tempLinkParam);
        };
        this.viewChange = (viewId, sectionId) => {
            let tempViewParamArr = [];
            tempViewParamArr = Object.assign(tempViewParamArr, this.state.viewLinkParamArr);
            if (!tempViewParamArr[0]) {
                tempViewParamArr[0] = this.getDefaultPageOrDialogId();
            }
            const views = this.props.appConfig.sections[sectionId].views;
            // remove views which are in the same section with the clicked view
            let toRemoveViewIds = tempViewParamArr.filter(id => views.some(v => v === id) && id !== viewId);
            let toAddViewIds = [];
            const index = tempViewParamArr.indexOf(viewId);
            if (index > -1) {
                toRemoveViewIds = toRemoveViewIds.concat(tempViewParamArr[index]);
            }
            else {
                toAddViewIds = toAddViewIds.concat(viewId);
            }
            if (toRemoveViewIds && toRemoveViewIds.length > 0) {
                let childViewIds = [];
                toRemoveViewIds.forEach(vId => {
                    childViewIds = childViewIds.concat((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getAllChildViewIds)(vId, this.props.appConfig));
                });
                toRemoveViewIds = toRemoveViewIds.concat(childViewIds);
            }
            tempViewParamArr = tempViewParamArr.filter(id => !toRemoveViewIds.some(vId => vId === id));
            tempViewParamArr = tempViewParamArr.concat(toAddViewIds);
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', tempViewParamArr.join(','));
            this.props.onLinkParamChange(tempLinkParam);
        };
        this.viewRemove = (viewId) => {
            let tempViewParamArr = [];
            tempViewParamArr = Object.assign(tempViewParamArr, this.state.viewLinkParamArr);
            if (!tempViewParamArr[0]) {
                tempViewParamArr[0] = this.getDefaultPageOrDialogId();
            }
            const childViewIds = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getAllChildViewIds)(viewId, this.props.appConfig);
            const toRemoveViewIds = childViewIds.concat(viewId);
            tempViewParamArr = tempViewParamArr.slice(0, 1).concat(tempViewParamArr.slice(1).filter(id => !toRemoveViewIds.some(vId => vId === id)));
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', tempViewParamArr.join(','));
            this.props.onLinkParamChange(tempLinkParam, true);
        };
        this.onScrollToViewChange = (viewId) => {
            this.setState({ scrollToViewId: viewId });
        };
        this.getDefaultPageOrDialogId = () => {
            const pages = this.props.appConfig && this.props.appConfig.pages;
            const pageIds = pages && Object.keys(pages).filter(pageId => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromPage)(pageId, this.props.appConfig).length > 0);
            const defaultPageId = (pageIds && pageIds.find(p => pages[p].isDefault)) || (pageIds === null || pageIds === void 0 ? void 0 : pageIds[0]);
            if (defaultPageId) {
                return defaultPageId;
            }
            const dialogs = this.props.appConfig && this.props.appConfig.dialogs;
            const dialogIds = dialogs && Object.keys(dialogs).filter(dialogId => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromDialog)(dialogId, this.props.appConfig).length > 0);
            return dialogIds === null || dialogIds === void 0 ? void 0 : dialogIds[0];
        };
        this.getSelectedVeiwIds = () => {
            return this.state.viewLinkParamArr.slice(1);
        };
        this.state = {
            viewLinkParamArr: [],
            scrollToViewId: this.noScroll
        };
    }
    componentDidMount() {
        const viewlinkParam = this.getInitLinkParam();
        const { value, linkType } = viewlinkParam;
        if (value && linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View) {
            this.setState({
                viewLinkParamArr: value.split(',')
            });
        }
        else {
            this.setState({
                viewLinkParamArr: []
            });
        }
        this.props.onLinkParamChange(viewlinkParam);
    }
    static getDerivedStateFromProps(newProps, prevState) {
        const { value, linkType } = newProps.linkParam;
        if (value && linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View) {
            return Object.assign(Object.assign({}, prevState), { viewLinkParamArr: value.split(',') });
        }
        else {
            return Object.assign(Object.assign({}, prevState), { viewLinkParamArr: [] });
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.props.appConfig) {
            return null;
        }
        const pageData = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getPageData)(this.props.appConfig, this.props.intl);
        const dialogData = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDialogData)(this.props.appConfig);
        const pageOrDialogId = this.state.viewLinkParamArr[0] || this.getDefaultPageOrDialogId();
        if (!pageData.some(p => p.id === pageOrDialogId) && !dialogData.some(d => d.id === pageOrDialogId)) {
            return null;
        }
        const pagesWithSection = pageData.filter(p => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromPage)(p.id, this.props.appConfig).length > 0);
        const dialogsWithSection = dialogData.filter(d => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromDialog)(d.id, this.props.appConfig).length > 0);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'chooseViews', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages.chooseViews })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { value: pageOrDialogId, onChange: this.pageOrDialogChange, className: 'w-100 mb-4', size: 'sm' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { header: true }, this.props.intl.formatMessage({ id: 'page', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.page })),
                    pagesWithSection.map((p, index) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { key: index, value: p.id }, p.name)),
                    dialogsWithSection.length > 0 && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { header: true }, this.props.intl.formatMessage({ id: 'dialog', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.dialog })),
                    dialogsWithSection.map((d, index) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { key: index, value: d.id }, d.name))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('choose-view', { 'mb-4': ((_a = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromPage)(pageOrDialogId, this.props.appConfig)) === null || _a === void 0 ? void 0 : _a.length) > 0 }) }, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromPage)(pageOrDialogId, this.props.appConfig).map(sectionId => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SectionItem, { sections: this.props.appConfig.sections, sectionId: sectionId, viewsInfo: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getViewInfoFromSection)(sectionId, this.props.appConfig), viewLinkParamArr: this.state.viewLinkParamArr, viewChange: this.viewChange, viewRemove: this.viewRemove, key: sectionId }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('choose-view', { 'mb-4': ((_b = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromDialog)(pageOrDialogId, this.props.appConfig)) === null || _b === void 0 ? void 0 : _b.length) > 0 }) }, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromDialog)(pageOrDialogId, this.props.appConfig).map(sectionId => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SectionItem, { sections: this.props.appConfig.sections, sectionId: sectionId, viewsInfo: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getViewInfoFromSection)(sectionId, this.props.appConfig), viewLinkParamArr: this.state.viewLinkParamArr, viewChange: this.viewChange, viewRemove: this.viewRemove, key: sectionId }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('choose-view', { 'mb-4': ((_c = this.getSelectedVeiwIds()) === null || _c === void 0 ? void 0 : _c.length) > 0 }) }, this.getSelectedVeiwIds().map(viewId => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getSectionIdsFromView)(viewId, this.props.appConfig).map(sectionId => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SectionItem, { sections: this.props.appConfig.sections, sectionId: sectionId, viewsInfo: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getViewInfoFromSection)(sectionId, this.props.appConfig), viewLinkParamArr: this.state.viewLinkParamArr, viewChange: this.viewChange, viewRemove: this.viewRemove, key: sectionId })))))));
    }
}
class SectionItem extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onViewChange = (viewId) => {
            this.setState({ viewId });
            this.props.viewChange(viewId, this.props.sectionId);
        };
        this.state = {
            viewId: null
        };
    }
    componentWillUnmount() {
        // remove view when view option is not existed
        this.props.viewRemove(this.state.viewId);
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_collapse_tool__WEBPACK_IMPORTED_MODULE_2__["default"], { className: 'mb-4 choose-view', title: this.props.sections[this.props.sectionId] && this.props.sections[this.props.sectionId].label, isOpen: true, key: this.props.sectionId },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'link-selector-list w-100 view-border border-top-0 border-left-0 border-right-0 rounded-0', role: 'menu' }, this.props.viewsInfo.map((v, idx) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { role: 'menuitem', onClick: () => { this.onViewChange(v.id); }, key: idx, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-outline-inside link-selector-list-item btn w-100 view-border px-2 pt-1 text-left border-bottom-0 rounded-0 text-truncate', { 'item-common': !(this.props.viewLinkParamArr.includes(v.id)) }, { itemselected: this.props.viewLinkParamArr.includes(v.id) }), title: v.label, "aria-checked": this.props.viewLinkParamArr.includes(v.id) }, v.label)))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/webaddress-link-content.tsx":
/*!**************************************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/webaddress-link-content.tsx ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebaddressLinkContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/expression-builder */ "jimu-ui/advanced/expression-builder");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../types */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts");





const expressionFrom = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Static, jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Attribute, jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionInputType.Expression]);
class WebaddressLinkContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a;
        super(props);
        this.getInitLinkParam = () => {
            const linkType = this.props.originLinkParam.linkType;
            if (linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                return this.props.originLinkParam;
            }
            else {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress,
                    openType: !this.props.openTypes || this.props.openTypes.includes(_types__WEBPACK_IMPORTED_MODULE_3__.OpenTypes.NewWindow) ? _types__WEBPACK_IMPORTED_MODULE_3__.OpenTypes.NewWindow : this.props.openTypes[0],
                    value: ''
                });
            }
        };
        this.webAddressInputChange = (res) => {
            const currentAddress = res.value;
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('value', currentAddress).set('expression', null);
            this.props.onLinkParamChange(tempLinkParam);
        };
        this.webAddressExpressionChange = (e) => {
            let tempLinkParam = this.props.linkParam;
            tempLinkParam = tempLinkParam.set('expression', e).set('value', '');
            this.props.onLinkParamChange(tempLinkParam);
            this.closeExpPopup();
        };
        this.openExpPopup = () => { this.setState({ isExpPopupOpen: true }); };
        this.closeExpPopup = () => { this.setState({ isExpPopupOpen: false }); };
        this.getDefaultExp = () => {
            return {
                name: 'Expression',
                parts: [
                    {
                        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String,
                        exp: '"https://"'
                    }
                ]
            };
        };
        this.onUrlChange = (res) => {
            this.setState({ url: res.value });
        };
        this.state = {
            isExpPopupOpen: false,
            url: ((_a = this.props.linkParam) === null || _a === void 0 ? void 0 : _a.linkType) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress ? this.props.linkParam.value : ''
        };
    }
    componentDidMount() {
        const webAddressLinkParam = this.getInitLinkParam();
        this.props.onLinkParamChange(webAddressLinkParam);
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c;
        if (((_a = prevProps.linkParam) === null || _a === void 0 ? void 0 : _a.value) !== ((_b = this.props.linkParam) === null || _b === void 0 ? void 0 : _b.value)) {
            this.setState({ url: ((_c = this.props.linkParam) === null || _c === void 0 ? void 0 : _c.linkType) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress ? this.props.linkParam.value : this.state.url });
        }
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'url', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.url })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null, this.props.useDataSources && this.props.useDataSources.length > 0
                ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_expression_builder__WEBPACK_IMPORTED_MODULE_2__.ExpressionInput, { useDataSources: this.props.useDataSources, onChange: this.webAddressExpressionChange, expression: (this.props.linkParam && this.props.linkParam.expression) || this.getDefaultExp(), closeExpPopup: this.closeExpPopup, openExpPopup: this.openExpPopup, isExpPopupOpen: this.state.isExpPopupOpen, types: expressionFrom, widgetId: this.props.widgetId, "aria-label": this.props.intl.formatMessage({ id: 'url', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.url }) })
                : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.UrlInput, { value: this.state.url, schemes: _utils__WEBPACK_IMPORTED_MODULE_4__.supportedURISchemes, onChange: this.onUrlChange, className: 'w-100', onAcceptValue: this.webAddressInputChange, "aria-label": this.props.intl.formatMessage({ id: 'url', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.url }) }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/index.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/index.tsx ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSelectorContent: () => (/* binding */ LinkSelectorContent),
/* harmony export */   LinkSetting: () => (/* binding */ LinkSetting),
/* harmony export */   _LinkSelectorContent: () => (/* binding */ _LinkSelectorContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts");
/* harmony import */ var _components_page_link_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-link-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/page-link-content.tsx");
/* harmony import */ var _components_dialog_link_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dialog-link-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/dialog-link-content.tsx");
/* harmony import */ var _components_block_link_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block-link-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/block-link-content.tsx");
/* harmony import */ var _components_screen_link_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/screen-link-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/screen-link-content.tsx");
/* harmony import */ var _components_view_link_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view-link-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/view-link-content.tsx");
/* harmony import */ var _components_webaddress_link_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/webaddress-link-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/components/webaddress-link-content.tsx");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts");
/** @jsx jsx */












/**
 * The `LinkSelectorContent` component allows users to configure a link.
 *
 * ```ts
 * import { LinkSelectorContent } from 'jimu-ui/advanced/setting-components'
 * ```
 */
class _LinkSelectorContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        // leftContent for LinkType
        this.getLinkTypeContent = () => {
            if (this.props.isLinkPageSetting) {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: this.state.linkParam.linkType, size: 'sm', onChange: this.linkTypeChange, className: 'w-100', "aria-label": this.props.intl.formatMessage({ id: 'linkTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.linkTo }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress }, this.props.intl.formatMessage({ id: 'url', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.url }))));
            }
            else {
                const hiddenLinks = this.getHiddenLinks();
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: this.state.linkParam.linkType, size: 'sm', onChange: this.linkTypeChange, className: 'w-100', "aria-label": this.props.intl.formatMessage({ id: 'linkTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.linkTo }) },
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None }, this.props.intl.formatMessage({ id: 'none', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.none })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page }, this.props.intl.formatMessage({ id: 'page', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.page })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View }, this.props.intl.formatMessage({ id: 'view', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.view })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog }, this.props.intl.formatMessage({ id: 'dialog', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.dialog })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress }, this.props.intl.formatMessage({ id: 'url', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.url })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block }, this.props.intl.formatMessage({ id: 'block', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.block })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop }, this.props.intl.formatMessage({ id: 'pageTop', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.pageTop })),
                    !hiddenLinks.some(l => l === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview }, this.props.intl.formatMessage({ id: 'printPreview', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.printPreview }))));
            }
        };
        this.getHiddenLinks = () => {
            var _a, _b, _c, _d, _e;
            let hiddenLinks = this.props.hiddenLinks || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            const currentPageId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_9__.utils.getCurrentPageId();
            const appConfig = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_9__.utils.getAppConfig();
            const currentPageJson = (_a = appConfig.pages) === null || _a === void 0 ? void 0 : _a[currentPageId];
            const currentPageLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_9__.searchUtils.findLayoutId(currentPageJson === null || currentPageJson === void 0 ? void 0 : currentPageJson.layout, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_9__.utils.getCurrentSizeMode(), appConfig.mainSizeMode);
            const currentLayoutJson = appConfig.layouts[currentPageLayoutId];
            const currentDialogId = ((_b = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _b === void 0 ? void 0 : _b.isBuilder) ? (_d = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appRuntimeInfo) === null || _d === void 0 ? void 0 : _d.currentDialogId : (_e = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appRuntimeInfo) === null || _e === void 0 ? void 0 : _e.currentDialogId;
            if ((currentLayoutJson === null || currentLayoutJson === void 0 ? void 0 : currentLayoutJson.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutType.FixedLayout || currentDialogId) {
                hiddenLinks = hiddenLinks.concat([jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop]);
            }
            return hiddenLinks;
        };
        // rightContent for LinkParamSetting
        this.getLinkContent = (linkType) => {
            switch (linkType) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None:
                    return null;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_page_link_content__WEBPACK_IMPORTED_MODULE_3__["default"], { originLinkParam: this.state.originLinkParam, linkParam: this.state.linkParam, appConfig: this.props.appConfig, onLinkParamChange: this.linkParamChange, intl: this.props.intl, openTypes: this.props.openTypes }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_dialog_link_content__WEBPACK_IMPORTED_MODULE_4__["default"], { originLinkParam: this.state.originLinkParam, linkParam: this.state.linkParam, appConfig: this.props.appConfig, onLinkParamChange: this.linkParamChange, intl: this.props.intl }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_block_link_content__WEBPACK_IMPORTED_MODULE_5__["default"], { originLinkParam: this.state.originLinkParam, linkParam: this.state.linkParam, onLinkParamChange: this.linkParamChange, intl: this.props.intl }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screen_link_content__WEBPACK_IMPORTED_MODULE_6__["default"], { originLinkParam: this.state.originLinkParam, linkParam: this.state.linkParam, onLinkParamChange: this.linkParamChange, intl: this.props.intl }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_view_link_content__WEBPACK_IMPORTED_MODULE_7__["default"], { originLinkParam: this.state.originLinkParam, linkParam: this.state.linkParam, intl: this.props.intl, openTypes: this.props.openTypes, appConfig: this.props.appConfig, onLinkParamChange: this.linkParamChange, browserSizeMode: this.props.browserSizeMode }));
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress:
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_webaddress_link_content__WEBPACK_IMPORTED_MODULE_8__["default"], { originLinkParam: this.state.originLinkParam, linkParam: this.state.linkParam, intl: this.props.intl, onLinkParamChange: this.linkParamChange, useDataSources: this.props.useDataSources, openTypes: this.props.openTypes, widgetId: this.props.widgetId }));
                default:
                    return null;
            }
        };
        this.linkTypeChange = (e) => {
            let tempLinkParam = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.state.linkParam);
            const type = e.target.value;
            if (type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop) {
                tempLinkParam = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
            }
            this.setState({
                linkParam: tempLinkParam.set('linkType', type)
            });
        };
        this.radioOpenTypeChange = (openType) => {
            let tempLinkParam = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.state.linkParam);
            tempLinkParam = tempLinkParam.set('openType', openType);
            this.setState({
                linkParam: tempLinkParam
            });
        };
        this.linkParamChange = (changedParam, isTypeSame) => {
            if (isTypeSame) {
                if (changedParam && this.state.linkParam && changedParam.linkType === this.state.linkParam.linkType) {
                    this.setState({
                        linkParam: this.fixLinkParam(changedParam)
                    });
                }
            }
            else {
                this.setState({
                    linkParam: this.fixLinkParam(changedParam)
                });
            }
        };
        this.fixLinkParam = (linkParam) => {
            var _a;
            let fixedLinkParam = linkParam;
            /**
             * Remove invalid view ids. Some views may be removed.
             */
            if ((linkParam === null || linkParam === void 0 ? void 0 : linkParam.linkType) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View && (linkParam === null || linkParam === void 0 ? void 0 : linkParam.value)) {
                const views = (_a = this.props.appConfig) === null || _a === void 0 ? void 0 : _a.views;
                const viewLinkParamArr = linkParam.value.split(',');
                const validViewIds = viewLinkParamArr.slice(1).filter(viewId => views === null || views === void 0 ? void 0 : views[viewId]);
                const fixedValue = [viewLinkParamArr[0]].concat(validViewIds).join(',');
                fixedLinkParam = fixedLinkParam.set('value', fixedValue);
            }
            return fixedLinkParam;
        };
        this.settingConfirm = () => {
            const linkParam = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.state.linkParam);
            this.setState({
                originLinkParam: linkParam
            });
            this.props.onSettingConfirm(linkParam);
        };
        this.isLinkParamOk = (linkParam) => {
            if (!linkParam || !linkParam.linkType) {
                return false;
            }
            if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View) {
                const pageId = (linkParam.value && linkParam.value.split(',')[0]) || null;
                const viewIds = (linkParam.value && linkParam.value.split(',').slice(1)) || [];
                return !!(pageId && typeof pageId === 'string' && viewIds.length > 0);
            }
            else if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                if (this.props.useDataSources && this.props.useDataSources.length > 0) {
                    const parts = linkParam.expression && linkParam.expression.parts;
                    let isExpressionOk = false;
                    if (parts && parts.length > 0) {
                        if (parts.length === 1) {
                            // when using expression, the default part is "", which does not mean expression is ok
                            isExpressionOk = !!parts[0].exp && parts[0].exp !== '""';
                        }
                        else {
                            isExpressionOk = true;
                        }
                    }
                    return isExpressionOk;
                }
                else {
                    const hasError = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.checkAbsoluteUrl(linkParam.value, _utils__WEBPACK_IMPORTED_MODULE_11__.supportedURISchemes) !== 'valid';
                    return linkParam.value && !hasError;
                }
            }
            else if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop || linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview || linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None) {
                // link to page top, only needs linkType property.
                return true;
            }
            else { // other link types only need value and value is type of string.
                return !!(linkParam.value && typeof linkParam.value === 'string');
            }
        };
        if (!this.props.linkParam || !this.props.linkParam.linkType) {
            const initLinkParam = {
                linkType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None,
                openType: !this.props.openTypes || this.props.openTypes.includes(_types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.CurrentWindow) ? _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.CurrentWindow : this.props.openTypes[0]
            };
            this.state = {
                linkParam: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(initLinkParam),
                originLinkParam: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(initLinkParam)
            };
        }
        else {
            this.state = {
                linkParam: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.linkParam),
                originLinkParam: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.linkParam)
            };
        }
    }
    needOpenIn(linkParam) {
        if (!linkParam) {
            return true;
        }
        const hideOpenInType = [jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview];
        return !hideOpenInType.some(t => t === linkParam.linkType) && !(0,_utils__WEBPACK_IMPORTED_MODULE_11__.linkToViewOnDialog)(linkParam);
    }
    render() {
        if (!this.props.appConfig) {
            return null;
        }
        else {
            const linkTypeContent = this.getLinkTypeContent();
            const linkContent = this.getLinkContent(this.state.linkParam.linkType);
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(this.props.className, 'w-100 h-100') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-builder-link-selector w-100 h-100' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: 'relative' }, className: 'w-100 h-100' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Container, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'linkTo', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.linkTo })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { className: 'mb-4' }, linkTypeContent),
                            this.state.linkParam.linkType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None
                                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { className: 'mb-4' }, linkContent),
                                    this.needOpenIn(this.state.linkParam) &&
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { className: 'mb-3 option-name' }, this.props.intl.formatMessage({ id: 'openIn', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.openIn })),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Row, { role: 'radiogroup', className: 'p-0', "aria-label": this.props.intl.formatMessage({ id: 'openIn', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.openIn }) },
                                                (!this.props.openTypes || this.props.openTypes.some(o => o === _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.CurrentWindow)) &&
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center' },
                                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: "openIn", className: "mr-2", onChange: () => { this.radioOpenTypeChange(_types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.CurrentWindow); }, checked: this.state.linkParam.openType === _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.CurrentWindow }),
                                                        this.props.intl.formatMessage({ id: 'appWindow', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.appWindow })),
                                                (!this.props.openTypes || this.props.openTypes.some(o => o === _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.TopWindow)) &&
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center' },
                                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: "openIn", className: "mr-2", onChange: () => { this.radioOpenTypeChange(_types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.TopWindow); }, checked: this.state.linkParam.openType === _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.TopWindow }),
                                                        this.props.intl.formatMessage({ id: 'topWindow', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.topWindow })),
                                                (!this.props.openTypes || this.props.openTypes.some(o => o === _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.NewWindow)) &&
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: 'link-setting-cursor-pointer open-type-label mb-6 d-flex align-items-center' },
                                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { name: "openIn", className: "mr-2", onChange: () => { this.radioOpenTypeChange(_types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.NewWindow); }, checked: this.state.linkParam.openType === _types__WEBPACK_IMPORTED_MODULE_2__.OpenTypes.NewWindow }),
                                                        this.props.intl.formatMessage({ id: 'newWindow', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.newWindow })))))
                                : null),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100', style: { position: 'absolute' } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: 'w-100 text-dark link-setting-ok-btn', type: 'primary', onClick: this.settingConfirm, disabled: !this.isLinkParamOk(this.state.linkParam), title: this.props.intl.formatMessage({ id: 'ok', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.ok }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate' }, this.props.intl.formatMessage({ id: 'ok', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.ok }))))))));
        }
    }
    componentDidMount() {
        if (this.props.isLinkPageSetting) {
            this.linkTypeChange({
                target: {
                    value: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress
                }
            });
        }
    }
}
const mapStateToProps = (state) => {
    return {
        appConfig: window && window.jimuConfig && window.jimuConfig.isBuilder ? state.appStateInBuilder.appConfig : state.appConfig,
        browserSizeMode: window && window.jimuConfig && window.jimuConfig.isBuilder ? state.appStateInBuilder.browserSizeMode : state.browserSizeMode
    };
};
const LinkSelectorContent = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_10__.withStyles)(_LinkSelectorContent, 'LinkSelectorContent')));
/**
 * @deprecated
 */
const LinkSetting = LinkSelectorContent;


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts":
/*!********************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/utils.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllChildViewIds: () => (/* binding */ getAllChildViewIds),
/* harmony export */   getDialogData: () => (/* binding */ getDialogData),
/* harmony export */   getPageData: () => (/* binding */ getPageData),
/* harmony export */   getSectionIdsFromDialog: () => (/* binding */ getSectionIdsFromDialog),
/* harmony export */   getSectionIdsFromPage: () => (/* binding */ getSectionIdsFromPage),
/* harmony export */   getSectionIdsFromView: () => (/* binding */ getSectionIdsFromView),
/* harmony export */   getViewInfoFromSection: () => (/* binding */ getViewInfoFromSection),
/* harmony export */   isDialogId: () => (/* binding */ isDialogId),
/* harmony export */   linkToViewOnDialog: () => (/* binding */ linkToViewOnDialog),
/* harmony export */   supportedURISchemes: () => (/* binding */ supportedURISchemes)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



function getSectionIdsFromPage(pageId, appConfig) {
    var _a, _b;
    const pageJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.pages) === null || _a === void 0 ? void 0 : _a[pageId];
    if ((pageJson === null || pageJson === void 0 ? void 0 : pageJson.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.PageType.Normal) {
        const bodySections = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getContentsInContainer(appConfig, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Page, id: pageId }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Section, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode());
        let headerSections = [];
        let footerSections = [];
        if (pageJson.header) {
            headerSections = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getContentsInContainer(appConfig, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Header, id: 'header' }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Section, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode());
        }
        if (pageJson.footer) {
            footerSections = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getContentsInContainer(appConfig, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Footer, id: 'footer' }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Section, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode());
        }
        return (_b = headerSections.concat(bodySections, footerSections)) === null || _b === void 0 ? void 0 : _b.sort((sId1, sId2) => { var _a, _b, _c, _d, _e; return (_c = (_b = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.sections) === null || _a === void 0 ? void 0 : _a[sId1]) === null || _b === void 0 ? void 0 : _b.label) === null || _c === void 0 ? void 0 : _c.localeCompare((_e = (_d = appConfig === null || appConfig === void 0 ? void 0 : appConfig.sections) === null || _d === void 0 ? void 0 : _d[sId2]) === null || _e === void 0 ? void 0 : _e.label, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' }); });
    }
    return [];
}
function getSectionIdsFromDialog(dialogId, appConfig) {
    var _a;
    const dialogJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.dialogs) === null || _a === void 0 ? void 0 : _a[dialogId];
    if (!dialogJson) {
        return [];
    }
    return jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getContentsInContainer(appConfig, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog, id: dialogId }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Section, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode());
}
/**
 * return all child views of parent view,
 * e.g., page_1 -> section_1 -> view_1 -> section_2 -> view_2 -> section_3 -> view_3
 * input view_1, return [view_2, view_3],
 * input view_2, return [view_3],
 * input view_undefiled, return []
 */
function getAllChildViewIds(parentViewId, appConfig) {
    if (!parentViewId) {
        return [];
    }
    const sectionIds = getSectionIdsFromView(parentViewId, appConfig);
    if (sectionIds && sectionIds.length > 0) {
        let childViewIds = [];
        let grandChildViewIds = [];
        sectionIds.forEach(sectionId => {
            childViewIds = childViewIds.concat(getViewInfoFromSection(sectionId, appConfig).map(info => info.id));
        });
        if (childViewIds.length > 0) {
            childViewIds.forEach(vId => {
                grandChildViewIds = grandChildViewIds.concat(getAllChildViewIds(vId, appConfig));
            });
        }
        return childViewIds.concat(grandChildViewIds);
    }
    else {
        return [];
    }
}
function getSectionIdsFromView(viewId, appConfig) {
    return jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.getContentsInContainer(appConfig, { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.View, id: viewId }, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Section, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getCurrentSizeMode()) || [];
}
function getViewInfoFromSection(sectionId, appConfig) {
    const tempViews = appConfig.sections[sectionId].views;
    const info = [];
    for (let i = 0; i < tempViews.length; i++) {
        info.push({
            id: tempViews[i],
            label: appConfig.views[tempViews[i]].label
        });
    }
    return info.sort((v1, v2) => { var _a; return (_a = v1.label) === null || _a === void 0 ? void 0 : _a.localeCompare(v2.label, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' }); });
}
function getPageData(appConfig, intl) {
    const pages = appConfig === null || appConfig === void 0 ? void 0 : appConfig.pages;
    const currentPage = {
        id: jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.CURRENT_PAGE,
        name: intl.formatMessage({ id: 'currentPage', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.currentPage })
    };
    const pageIds = pages && Object.keys(pages).filter(pId => pages[pId].type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.PageType.Normal).sort((pId1, pId2) => { var _a; return (_a = pages[pId1].label) === null || _a === void 0 ? void 0 : _a.localeCompare(pages[pId2].label, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' }); });
    let data = [currentPage];
    if (pageIds) {
        data = data.concat(pageIds.map(pId => ({ id: pId, name: pages[pId].label })));
    }
    return data;
}
function getDialogData(appConfig) {
    const dialogs = appConfig === null || appConfig === void 0 ? void 0 : appConfig.dialogs;
    const fixedDialogs = (dialogs && Object.values(dialogs).filter(d => (d === null || d === void 0 ? void 0 : d.mode) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DialogMode.Fixed)) || [];
    const anchoredDialogs = (dialogs && Object.values(dialogs).filter(d => (d === null || d === void 0 ? void 0 : d.mode) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DialogMode.Anchored)) || [];
    const sortedDialogs = fixedDialogs.concat(anchoredDialogs).sort((d1, d2) => { var _a; return (_a = d1.label) === null || _a === void 0 ? void 0 : _a.localeCompare(d2.label, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' }); });
    const dialogIds = sortedDialogs.map(d => d.id);
    const data = dialogIds && dialogIds.filter(id => !dialogs[id].isSplash).map(id => ({ id: id, name: dialogs[id].label }));
    return data;
}
function linkToViewOnDialog(linkParams) {
    var _a;
    const pageOrDlgId = linkParams.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View ? (_a = linkParams.value) === null || _a === void 0 ? void 0 : _a.split(',')[0] : null;
    return isDialogId(pageOrDlgId);
}
function isDialogId(id) {
    return typeof id === 'string' && id.includes('dialog_');
}
const supportedURISchemes = ['https', 'mailto', 'tel', 'sms', 'ftp'];


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-side-popper.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-side-popper.tsx ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSelectorSidePopper: () => (/* binding */ LinkSelectorSidePopper),
/* harmony export */   LinkSettingPopup: () => (/* binding */ LinkSettingPopup),
/* harmony export */   _LinkSelectorSidePopper: () => (/* binding */ _LinkSelectorSidePopper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _link_selector_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-selector-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/index.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _side_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../side-popper */ "./jimu-ui/advanced/lib/setting-components/components/side-popper/index.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");





/**
 * The `LinkSelectorSidePopper` component allows users to configure a link using a popup.
 *
 * ```ts
 * import { LinkSelectorSidePopper } from 'jimu-ui/advanced/setting-components'
 * ```
 */
class _LinkSelectorSidePopper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.close = () => {
            this.props.onSettingCancel();
        };
        this.getIsOpen = () => {
            return this.props.isOpen || this.props.showDialog;
        };
    }
    render() {
        const position = this.props.position || 'right';
        const { title } = this.props;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_side_popper__WEBPACK_IMPORTED_MODULE_3__.SidePopper, { isOpen: this.getIsOpen(), position: position, toggle: this.close, trigger: this.props.trigger, backToFocusNode: this.props.backToFocusNode, widgetId: this.props.widgetId, title: this.props.intl.formatMessage({ id: title ? 'setLinkForTitle' : 'setLink', defaultMessage: title ? jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.setLinkForTitle : jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.setLink }, { title }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'bg-light-300 w-100 h-100 px-4' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_link_selector_content__WEBPACK_IMPORTED_MODULE_1__.LinkSelectorContent, { isLinkPageSetting: this.props.isLinkPageSetting, linkParam: this.props.linkParam, onSettingConfirm: this.props.onSettingConfirm, useDataSources: this.props.useDataSources, widgetId: this.props.widgetId, hiddenLinks: this.props.hiddenLinks, openTypes: this.props.openTypes }))));
    }
}
/**
 * A component to set link, such as link to a view, a page or url
 */
const LinkSelectorSidePopper = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.withTheme)(_LinkSelectorSidePopper));
/**
 * @deprecated
 */
const LinkSettingPopup = LinkSelectorSidePopper;


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector.tsx":
/*!*******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSelector: () => (/* binding */ LinkSelector),
/* harmony export */   _LinkSelector: () => (/* binding */ _LinkSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _link_selector_side_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link-selector-side-popper */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-side-popper.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_icons_outlined_data_link_tilted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/data/link-tilted */ "./jimu-icons/outlined/data/link-tilted.tsx");
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





/**
 * The `LinkSelector` component allows users to configure a link using a popup.
 *
 * ```ts
 * import { LinkSelector } from 'jimu-ui/advanced/setting-components'
 * ```
 */
class _LinkSelector extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.linkSelectorTrigger = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.toggle = () => {
            const newIsOpen = !this.state.isOpen;
            // use renderPopper to controll whether render popper to let popper auto focus the first conent DOM.
            this.setState({ isOpen: newIsOpen }, () => { this.setState({ renderPopper: newIsOpen }); });
        };
        this.onCancel = () => {
            var _a, _b;
            (_b = (_a = this.props).onSettingCancel) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.toggle();
        };
        this.onConfirm = (linkParam) => {
            var _a, _b;
            (_b = (_a = this.props).onSettingConfirm) === null || _b === void 0 ? void 0 : _b.call(_a, linkParam);
            this.toggle();
        };
        this.getIsOpen = () => {
            return this.state.isOpen && !jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAppIdPageIdFromUrl().pageId;
        };
        this.state = {
            isOpen: false,
            renderPopper: false
        };
    }
    render() {
        const _a = this.props, { theme, intl, buttonLabel } = _a, otherProps = __rest(_a, ["theme", "intl", "buttonLabel"]);
        const label = buttonLabel || this.props.intl.formatMessage({ id: 'setLink', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.setLink });
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { className: 'w-100 text-black', type: 'primary', onClick: this.toggle, ref: this.linkSelectorTrigger, title: label },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 px-2 text-truncate' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_data_link_tilted__WEBPACK_IMPORTED_MODULE_4__.LinkTiltedOutlined, { className: 'text-black mr-1' }),
                    label)),
            this.state.renderPopper &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_link_selector_side_popper__WEBPACK_IMPORTED_MODULE_1__.LinkSelectorSidePopper, Object.assign({}, otherProps, { isOpen: this.getIsOpen(), position: 'right', onSettingCancel: this.onCancel, onSettingConfirm: this.onConfirm, trigger: this.linkSelectorTrigger.current, widgetId: this.props.widgetId }))));
    }
}
/**
 * A component to set link, such as link to a view, a page or url
 */
const LinkSelector = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_LinkSelector));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/index.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkSelector: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_0__.LinkSelector),
/* harmony export */   LinkSelectorContent: () => (/* reexport safe */ _components_link_selector_content__WEBPACK_IMPORTED_MODULE_2__.LinkSelectorContent),
/* harmony export */   LinkSelectorSidePopper: () => (/* reexport safe */ _components_link_selector_side_popper__WEBPACK_IMPORTED_MODULE_1__.LinkSelectorSidePopper),
/* harmony export */   LinkSetting: () => (/* reexport safe */ _components_link_selector_content__WEBPACK_IMPORTED_MODULE_2__.LinkSetting),
/* harmony export */   LinkSettingPopup: () => (/* reexport safe */ _components_link_selector_side_popper__WEBPACK_IMPORTED_MODULE_1__.LinkSettingPopup),
/* harmony export */   _LinkSelector: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_0__._LinkSelector),
/* harmony export */   _LinkSelectorContent: () => (/* reexport safe */ _components_link_selector_content__WEBPACK_IMPORTED_MODULE_2__._LinkSelectorContent),
/* harmony export */   _LinkSelectorSidePopper: () => (/* reexport safe */ _components_link_selector_side_popper__WEBPACK_IMPORTED_MODULE_1__._LinkSelectorSidePopper)
/* harmony export */ });
/* harmony import */ var _components_link_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/link-selector */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector.tsx");
/* harmony import */ var _components_link_selector_side_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/link-selector-side-popper */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-side-popper.tsx");
/* harmony import */ var _components_link_selector_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/link-selector-content */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/components/link-selector-content/index.tsx");





/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenTypes: () => (/* binding */ OpenTypes)
/* harmony export */ });
var OpenTypes;
(function (OpenTypes) {
    OpenTypes["CurrentWindow"] = "_self";
    OpenTypes["TopWindow"] = "_top";
    OpenTypes["NewWindow"] = "_blank";
})(OpenTypes || (OpenTypes = {}));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/map-selector-utils/utils.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/map-selector-utils/utils.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelType: () => (/* binding */ LabelType),
/* harmony export */   divider: () => (/* binding */ divider),
/* harmony export */   getBreakList: () => (/* binding */ getBreakList),
/* harmony export */   sortByLabel: () => (/* binding */ sortByLabel)
/* harmony export */ });
//Divider in option list.
const divider = {
    label: 'divider',
    divider: true
};
//Divide lists into page list and window list.
const getBreakList = (breaker, selectLists) => {
    var _a, _b;
    let pageList = [];
    let dialogList = [];
    for (let i = 1; i < selectLists.length; i++) {
        if (selectLists[i].type === 'dialogs') {
            breaker = i;
            break;
        }
    }
    if (breaker === 1 && ((_a = selectLists[1]) === null || _a === void 0 ? void 0 : _a.type) === 'dialogs') {
        dialogList = selectLists.slice(1);
    }
    else if (breaker === 1 && ((_b = selectLists[1]) === null || _b === void 0 ? void 0 : _b.type) === 'pages') {
        pageList = selectLists.slice(1);
    }
    else {
        pageList = selectLists.slice(1, breaker);
        dialogList = selectLists.slice(breaker);
    }
    return {
        pageList: pageList,
        dialogList: dialogList
    };
};
//Option labels.
var LabelType;
(function (LabelType) {
    LabelType["Page"] = "pages";
    LabelType["Dialog"] = "dialogs";
    LabelType["Widget"] = "widgets";
})(LabelType || (LabelType = {}));
//Sort pages, dialogs, or maps by label.
const sortByLabel = (items, appConfig, type) => {
    return items.sort((a, b) => {
        const labelA = type === LabelType.Widget ? appConfig[type][a].label : appConfig[type][a.id].label;
        const labelB = type === LabelType.Widget ? appConfig[type][b].label : appConfig[type][b.id].label;
        return labelA.localeCompare(labelB, window === null || window === void 0 ? void 0 : window.locale, { numeric: true, sensitivity: 'base' });
    });
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/map-widget-selector/index.tsx":
/*!******************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/map-widget-selector/index.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapWidgetSelector: () => (/* binding */ MapWidgetSelector),
/* harmony export */   _MapWidgetSelector: () => (/* binding */ _MapWidgetSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map-selector-utils/utils */ "./jimu-ui/advanced/lib/setting-components/components/map-selector-utils/utils.ts");




//Get the option list of all pages and windows, first is the current page, then is the other pages, and then is the other windows.
const getOptionList = (selectLists, appConfig, currentContainerType, translate) => {
    const OptionList = [];
    const currentMapExist = selectLists[0].maps.length > 0;
    //Get the current page or window list.
    if (currentMapExist) {
        //Add divider after None option.
        OptionList.push(_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.divider);
        const currentHeader = {
            header: true,
            label: currentContainerType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog ? translate('currentWindow') : translate('currentPage')
        };
        OptionList.push(currentHeader);
        const sortedCurrentPageMapList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(selectLists[0].maps, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Widget);
        sortedCurrentPageMapList.forEach((id) => {
            const currentOption = {
                id: id,
                label: appConfig.widgets[id].label,
                headerLabel: currentContainerType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog ? translate('currentWindow') : translate('currentPage')
            };
            OptionList.push(currentOption);
        });
    }
    const breakList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.getBreakList)(1, selectLists);
    let pageDivider = false;
    //Get the option list of pages.
    const sortedPageList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(breakList.pageList, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Page);
    for (let i = 0; i < breakList.pageList.length; i++) {
        if (breakList.pageList[i].maps.length > 0) {
            if (!pageDivider) {
                OptionList.push(_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.divider);
                pageDivider = true;
            }
            const otherHeader = {
                header: true,
                label: appConfig.pages[sortedPageList[i].id].label
            };
            OptionList.push(otherHeader);
            const sortedMapList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(sortedPageList[i].maps, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Widget);
            sortedMapList.forEach((id) => {
                const otherOption = {
                    id: id,
                    label: appConfig.widgets[id].label,
                    headerLabel: appConfig.pages[sortedPageList[i].id].label
                };
                OptionList.push(otherOption);
            });
        }
    }
    //Get the option list of windows.
    if (breakList.dialogList) {
        let dialogDivider = false;
        const sortedDialogList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(breakList.dialogList, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Dialog);
        for (let i = 0; i < breakList.dialogList.length; i++) {
            if (breakList.dialogList[i].maps.length > 0) {
                if (!dialogDivider) {
                    OptionList.push(_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.divider);
                    dialogDivider = true;
                }
                const otherHeader = {
                    header: true,
                    label: appConfig.dialogs[sortedDialogList[i].id].label
                };
                OptionList.push(otherHeader);
                const sortedMapList = (0,_map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.sortByLabel)(sortedDialogList[i].maps, appConfig, _map_selector_utils_utils__WEBPACK_IMPORTED_MODULE_3__.LabelType.Widget);
                sortedMapList.forEach((id) => {
                    const otherOption = {
                        id: id,
                        label: appConfig.widgets[id].label,
                        headerLabel: appConfig.dialogs[sortedDialogList[i].id].label
                    };
                    OptionList.push(otherOption);
                });
            }
        }
    }
    return OptionList;
};
const { useState } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const _MapWidgetSelector = (props) => {
    var _a;
    const { onSelect, isNeedConfirmBeforeChange } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const noneMapWidget = { id: 'none', label: translate('none') };
    const appConfig = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a, _b;
        return ((_a = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isBuilder) ? (_b = state.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig : state.appConfig;
    });
    const browserSizeMode = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        return (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.browserSizeMode;
    });
    const currentPageId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        return (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo.currentPageId;
    });
    const currentDialogId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a;
        return (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo.currentDialogId;
    });
    const currentContainerType = currentDialogId ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Dialog : jimu_core__WEBPACK_IMPORTED_MODULE_0__.ContainerType.Page;
    const currentId = currentDialogId || currentPageId;
    const mapWidgetJsons = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        const selectLists = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getMapWidgets(appConfig, browserSizeMode, currentContainerType, currentId);
        return getOptionList(selectLists, appConfig, currentContainerType, translate);
    }, [appConfig, browserSizeMode, currentContainerType, currentId, translate]);
    const getSelectedMapWidget = () => {
        var _a;
        if (!props.useMapWidgetIds || ((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        const selectedMapWidgetId = props.useMapWidgetIds[0];
        return mapWidgetJsons.find(w => w.id === selectedMapWidgetId) || null;
    };
    const [currentMapId, setCurrentMapId] = useState(((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0]) || null);
    const previousValueRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(currentMapId);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useUpdateEffect(() => {
        var _a, _b;
        setCurrentMapId(((_a = props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0]) || null);
        previousValueRef.current = ((_b = props.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b[0]) || null;
    }, [props.useMapWidgetIds]);
    const onClick = e => {
        const selectedMapWidgetId = e.target.value;
        if (selectedMapWidgetId === currentMapId) {
            return;
        }
        const useMapWidgetIds = selectedMapWidgetId === noneMapWidget.id ? [] : [selectedMapWidgetId];
        if (isNeedConfirmBeforeChange) {
            if (previousValueRef.current === null) {
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(useMapWidgetIds);
                setCurrentMapId(selectedMapWidgetId);
            }
            else {
                setConfirmDialogOpen(true);
            }
        }
        else {
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(useMapWidgetIds);
            setCurrentMapId(selectedMapWidgetId);
        }
        setSelectedValue(selectedMapWidgetId);
    };
    const handleMapChangeOk = () => {
        setConfirmDialogOpen(false);
        const selectedMapWidgetId = selectedValue;
        const useMapWidgetIds = selectedMapWidgetId === noneMapWidget.id ? [] : [selectedMapWidgetId];
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(useMapWidgetIds);
        setCurrentMapId(selectedValue);
    };
    const handleMapChangeCancel = () => {
        setConfirmDialogOpen(false);
    };
    const selectedMapWidget = getSelectedMapWidget();
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 component-map-selector' },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: 'sm', value: selectedMapWidget ? selectedMapWidget.id : noneMapWidget.id, "aria-label": props['aria-label'] || translate('selectMapWidget'), "aria-describedby": props['aria-describedby'], "ally-description": props['ally-description'] }, [noneMapWidget].concat(mapWidgetJsons).map((option, index) => {
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { header: option.header, divider: option.divider, value: option.id, key: index, onClick: onClick },
                !option.header && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'sr-only' }, option.headerLabel),
                option.label));
        })),
        confirmDialogOpen && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialog, { level: 'info', title: translate('confirmTitle'), hasNotShowAgainOption: false, content: props.confirmMessage, onConfirm: handleMapChangeOk, onClose: handleMapChangeCancel })));
};
/**
 * A react component for selecting Map widgets. It is usually used on the setting page of a widget,
 * and works with JimuMapViewComponent, JimuLayerViewComponent, JimuMapViewS and JimuLayerViewSelector.
 */
const MapWidgetSelector = _MapWidgetSelector;


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/multiple-jimu-map-config/index.tsx":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/multiple-jimu-map-config/index.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipleJimuMapConfig: () => (/* binding */ MultipleJimuMapConfig)
/* harmony export */ });
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/suggested/warning */ "./jimu-icons/outlined/suggested/warning.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui/basic/list-tree */ "jimu-ui/basic/list-tree");
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
/** @jsx jsx */






const getStyle = () => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
    .jimu-tree-item__icon {
      background-color: var(--info-400);
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      svg {
        margin-right: 0!important;
      }
    }
    .jimu-tree-item__body {
      .jimu-icon {
        margin-right: 4px;
        color: var(--danger-700);
      }
      .jimu-tree-item__main-line {
        cursor: pointer;
      }
    }
  `;
};
function _MultipleJimuMapConfig(props) {
    var _a, _b;
    const { mapWidgetId, disabled, disableSwitchMap = false, onClick, sidePopperContent, isDataSourceValid, invalidDataSourceTooltip, showDefaultMapWhenEmpty } = props, restProps = __rest(props, ["mapWidgetId", "disabled", "disableSwitchMap", "onClick", "sidePopperContent", "isDataSourceValid", "invalidDataSourceTooltip", "showDefaultMapWhenEmpty"]);
    const currentActiveJmvIdRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef('');
    const containerRef = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useRef(null);
    const [showPopper, setShowPopper] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [currentTitle, setCurrentTitle] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('');
    const [currentDsId, setCurrentDsId] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const [defaultDsId, setDefaultDsID] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    const jimuMapViewGroup = jimu_arcgis__WEBPACK_IMPORTED_MODULE_0__.MapViewManager.getInstance().getJimuMapViewGroup(mapWidgetId);
    const [allDataSourcesReady, setAllDataSourcesReady] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_1__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);
    const useDataSources = jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux.useSelector((state) => {
        var _a, _b, _c;
        const appState = state.appStateInBuilder;
        const useDataSourcesConfig = appState && ((_c = (_b = (_a = appState === null || appState === void 0 ? void 0 : appState.appConfig) === null || _a === void 0 ? void 0 : _a.widgets) === null || _b === void 0 ? void 0 : _b[mapWidgetId]) === null || _c === void 0 ? void 0 : _c.useDataSources);
        return useDataSourcesConfig;
    });
    const dataSourcesInfo = jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux.useSelector((state) => {
        const appState = state.appStateInBuilder;
        const dataSourcesInfoConfig = appState && (appState === null || appState === void 0 ? void 0 : appState.dataSourcesInfo);
        return dataSourcesInfoConfig;
    }, (oldDssInfo, newDssInfo) => {
        if (!useDataSources) {
            return true;
        }
        else {
            for (const useDataSource of useDataSources) {
                if (oldDssInfo && newDssInfo && (oldDssInfo[useDataSource.dataSourceId] !== newDssInfo[useDataSource.dataSourceId])) {
                    return false;
                }
            }
            return true;
        }
    });
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        // When the connected dataSources are not ready, check the loading status
        if (!allDataSourcesReady) {
            // When connect to an empty map, the useDataSources field is undefined
            if (!useDataSources || (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 0) {
                setAllDataSourcesReady(true);
            }
            else {
                let readyCount = 0;
                for (const item of useDataSources) {
                    const dsInfo = dataSourcesInfo === null || dataSourcesInfo === void 0 ? void 0 : dataSourcesInfo[item.dataSourceId];
                    if (dsInfo && (dsInfo.instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.Created || dsInfo.instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceStatus.CreateError)) {
                        readyCount++;
                        if (readyCount === useDataSources.length) {
                            setAllDataSourcesReady(true);
                        }
                    }
                }
            }
        }
    }, [allDataSourcesReady, dataSourcesInfo, useDataSources]);
    const getSkeletonList = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback(() => {
        const SKELETON_NUM = 2;
        const skeletonItems = [];
        for (let i = 0; i < SKELETON_NUM; i++) {
            skeletonItems.push({
                itemKey: i.toString(),
                itemStateCommands: [{
                        iconProps: () => ({ icon: ' ', size: 12, style: { opacity: 0 } })
                    }]
            });
        }
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_5__.List, { className: 'w-100', itemsJson: skeletonItems, dndEnabled: false, handleClickItemBody: () => { } });
    }, []);
    const getDataSourceLabel = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((dsObj) => {
        if (!dsObj) {
            return '';
        }
        const label = dsObj.getLabel();
        return label || (dsObj === null || dsObj === void 0 ? void 0 : dsObj.getDataSourceJson().sourceLabel) || dsObj.id;
    }, []);
    const defaultItemsJson = (_b = (_a = (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.asMutable())) === null || _a === void 0 ? void 0 : _a.sort((useDs1, useDs2) => useDs1.dataSourceId.localeCompare(useDs2.dataSourceId))) === null || _b === void 0 ? void 0 : _b.map(useDataSource => {
        const dsObj = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(useDataSource.dataSourceId);
        let item = null;
        if (dsObj) {
            item = {
                itemStateTitle: getDataSourceLabel(dsObj),
                itemStateChecked: useDataSource.dataSourceId === currentActiveJmvIdRef.current,
                itemKey: `${useDataSource.dataSourceId}`,
                itemStateDisabled: disabled
            };
        }
        else {
            item = {
                itemStateTitle: translate('none'),
                itemKey: `${useDataSource.dataSourceId}`,
                itemStateDisabled: true
            };
        }
        return item;
    });
    const getItemsJson = () => {
        if (showDefaultMapWhenEmpty && (!useDataSources || useDataSources.length === 0)) {
            return [{
                    itemStateTitle: translate('multipleMapDefaultWebMap'),
                    itemKey: 'default',
                    itemStateChecked: currentActiveJmvIdRef.current === 'default',
                    itemStateDisabled: disabled
                }];
        }
        else {
            return defaultItemsJson;
        }
    };
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        if (!(jimuMapViewGroup === null || jimuMapViewGroup === void 0 ? void 0 : jimuMapViewGroup.jimuMapViews)) {
            return;
        }
        const jmvPromises = Object.keys(jimuMapViewGroup === null || jimuMapViewGroup === void 0 ? void 0 : jimuMapViewGroup.jimuMapViews).map(jmvId => {
            return jimuMapViewGroup === null || jimuMapViewGroup === void 0 ? void 0 : jimuMapViewGroup.jimuMapViews[jmvId].whenJimuMapViewLoaded();
        });
        Promise.all(jmvPromises).then(() => {
            // Get active jimuMapView when all views are ready, set to ' ' for empty map
            const activeDsId = jimuMapViewGroup === null || jimuMapViewGroup === void 0 ? void 0 : jimuMapViewGroup.getActiveJimuMapView().dataSourceId;
            setCurrentDsId(activeDsId.length > 0 ? activeDsId : ' ');
            setDefaultDsID(activeDsId.length > 0 ? activeDsId : ' ');
        }).catch(err => {
            console.error(err);
        });
    }, [jimuMapViewGroup, jimuMapViewGroup === null || jimuMapViewGroup === void 0 ? void 0 : jimuMapViewGroup.jimuMapViews]);
    // Used for switch map
    const handleClickWithSwitchMap = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((actionData, refComponent) => {
        const { itemJsons } = refComponent.props;
        const currentItemJson = itemJsons[0];
        if (isDataSourceValid && !isDataSourceValid(currentItemJson.itemKey)) {
            // Not a valid data-source, do not response to click
            return;
        }
        setCurrentDsId(currentItemJson.itemKey);
        onClick && onClick(currentItemJson.itemKey);
        if (currentActiveJmvIdRef.current === currentItemJson.itemKey) {
            currentActiveJmvIdRef.current = '';
            setShowPopper(false);
        }
        else {
            currentActiveJmvIdRef.current = currentItemJson.itemKey;
            setCurrentTitle(currentItemJson.itemStateTitle);
            setShowPopper(true);
        }
        if (!disableSwitchMap) {
            // The itemKey is dsId
            if (jimuMapViewGroup && currentItemJson.itemKey !== currentDsId) {
                jimuMapViewGroup.switchMap();
            }
        }
    }, [currentDsId, disableSwitchMap, isDataSourceValid, jimuMapViewGroup, onClick]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        return () => {
            // Make sure previous round the popper is open, otherwise it will switch twice
            // Put this logic in cleanup func, so it will be executed even if when click the canvas (component unmount)
            if (!disableSwitchMap && showPopper && defaultDsId !== currentDsId) {
                jimuMapViewGroup.switchMap();
                setCurrentDsId(defaultDsId);
            }
        };
    }, [currentDsId, defaultDsId, disableSwitchMap, jimuMapViewGroup, showPopper]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", { ref: containerRef, className: 'w-100 multiple-jimu-map-config-component', css: getStyle(), tabIndex: 0 }, 
    // Wait for currentDsId, so the switchMap could work correctly
    (allDataSourcesReady && currentDsId)
        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_5__.List, Object.assign({}, restProps, { itemsJson: getItemsJson(), handleClickItemBody: handleClickWithSwitchMap, renderOverrideItemCommands: (actionData, refComponent) => {
                    const { itemJsons } = refComponent.props;
                    const [currentItemJson] = itemJsons;
                    return (isDataSourceValid && !isDataSourceValid(currentItemJson.itemKey))
                        ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { title: invalidDataSourceTooltip, role: 'tooltip' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null,
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_2__.WarningOutlined, null)))
                        : '';
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SidePopper, { position: 'right', isOpen: showPopper, toggle: () => {
                    setShowPopper(false);
                    currentActiveJmvIdRef.current = '';
                    containerRef === null || containerRef === void 0 ? void 0 : containerRef.current.focus();
                }, title: currentTitle, trigger: containerRef === null || containerRef === void 0 ? void 0 : containerRef.current }, sidePopperContent))
        : getSkeletonList()));
}
/**
 * This component is used for configuring one or multiple `JimuMap`. If two data sources are selected in the connected map widget,
 * clicking on the list item of this component switches the map widget's active view to the corresponding one. The switch behavior
 * is on the fly (discarded when refreshing the page).
 * Use this component by `import { MultipleJimuMapConfig } from 'jimu-ui/advanced/setting-components'`.
 */
const MultipleJimuMapConfig = _MultipleJimuMapConfig;


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/page-aware-popper.tsx":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/page-aware-popper.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
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
/** @jsx jsx */
/* eslint-disable @typescript-eslint/no-unused-vars */



class PageAwarePopper extends jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.PureComponent {
    componentDidUpdate(prevProps) {
        if (this.props.pageId !== prevProps.pageId || this.props.sizemode !== prevProps.sizemode) {
            this.props.toggle();
        }
    }
    getStyle() {
        const { theme } = this.props;
        return theme && (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
      background-color: ${theme.colors.palette.light[300]};
      ${(0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.popperPointer)({
            background: theme.colors.palette.light[300],
            border: {
                color: theme.colors.palette.light[600],
                width: '1px'
            }
        })}
      > * {
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.palette.light[500]};
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.colors.palette.light[800]};
        }
      }
    `;
    }
    render() {
        const _a = this.props, { pageId, sizemode, dispatch } = _a, otherProps = __rest(_a, ["pageId", "sizemode", "dispatch"]);
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Popper, Object.assign({ css: this.getStyle() }, otherProps));
    }
}
function mapStateToProps(state) {
    return {
        pageId: state.appRuntimeInfo.currentPageId,
        sizemode: state.browserSizeMode
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jimu_core__WEBPACK_IMPORTED_MODULE_1__.ReactRedux.connect(mapStateToProps)(PageAwarePopper));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/page-template-popper/index.tsx":
/*!*******************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/page-template-popper/index.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTemplatePopper: () => (/* binding */ PageTemplatePopper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _page_template_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-template-list */ "./jimu-ui/advanced/lib/setting-components/components/page-template-popper/page-template-list.tsx");
/* harmony import */ var _page_aware_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-aware-popper */ "./jimu-ui/advanced/lib/setting-components/components/page-aware-popper.tsx");
/** @jsx jsx */



const MODIFIERS = [
    {
        name: 'preventOverflow',
        options: {
            boundariesElement: 'viewport',
            padding: { bottom: 20 }
        }
    }
];
class PageTemplatePopper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.togglePopper = () => {
            var _a;
            if (this.state.open && this.props.onClose) {
                this.props.onClose();
            }
            if (this.state.open) {
                (_a = this.props.referenceElement) === null || _a === void 0 ? void 0 : _a.focus();
            }
            this.setState({ open: !this.state.open });
        };
        this.tabSelect = (tabId) => {
            this.setState({ tabId: tabId });
        };
        this.onItemSelect = (templateJson) => {
            this.props.onClose();
            this.props.onItemSelect(templateJson);
        };
        this.state = {
            open: true,
            tabId: 'fullScreenApp'
        };
    }
    render() {
        const { referenceElement, theme } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_aware_popper__WEBPACK_IMPORTED_MODULE_2__["default"], { placement: 'bottom', theme: this.props.theme, reference: referenceElement, offset: [0, 10], open: true, toggle: this.togglePopper, showArrow: true, modifiers: MODIFIERS, forceLatestFocusElements: true },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
            width: 390px;
            max-height: 640px;
            height: calc(100vh - 150px);
            overflow: hidden;
          ` },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_template_list__WEBPACK_IMPORTED_MODULE_1__.PageTemplateList, { theme: theme, tabId: this.state.tabId, onTabSelect: this.tabSelect, formatMessage: this.props.formatMessage, onItemSelect: this.onItemSelect }))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/page-template-popper/page-template-list.tsx":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/page-template-popper/page-template-list.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTemplateList: () => (/* binding */ PageTemplateList)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-for-builder/templates */ "jimu-for-builder/templates");
/* harmony import */ var _template_selector_template_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../template-selector/template-list */ "./jimu-ui/advanced/lib/setting-components/components/template-selector/template-list.tsx");
/** @jsx jsx */




class PageTemplateList extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onTabSelect = (tabId) => {
            this.props.onTabSelect(tabId);
        };
        this.onFullScreenTypeChange = (e) => {
            this.setState({ fullScreenType: e.target.value });
        };
        this.state = { fullScreenType: 'all' };
    }
    render() {
        const { theme, formatMessage } = this.props;
        const { fullScreenType } = this.state;
        let templates = [];
        if (fullScreenType === 'fixed') {
            templates = (0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getFullScreenPageTemplates)();
        }
        else if (fullScreenType === 'grid') {
            templates = (0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getFullScreenGridPageTemplates)();
        }
        else {
            templates = [(0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getFullScreenPageTemplates)()[0], (0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getFullScreenGridPageTemplates)()[0]]
                .concat((0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getFullScreenPageTemplates)().slice(1), (0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getFullScreenGridPageTemplates)().slice(1));
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { className: 'pt-4 px-5 mb-2 text-dark-600 text-truncate', title: formatMessage('addPage') }, formatMessage('addPage')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { defaultValue: 'fullScreenApp', fill: true, type: 'underline', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
            height: calc(100% - 49px);
            width: 390px;
            .tab-content {
              height: calc(100% - 30px);
              .tab-pane {
                height: 100%;
                overflow-y: scroll;
              }
              .tab-pane:first-of-type {
                overflow-y: hidden;
              }
            }
            .jimu-nav {
              padding-left: ${theme && theme.sizes[5]};
              padding-right: ${theme && theme.sizes[5]};
            }
            .nav-item {
              width: 50%;
              .tab-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          `, onChange: this.onTabSelect },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: 'fullScreenApp', title: formatMessage('fullScreenApp'), className: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FOCUSABLE_CONTAINER_CLASS },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column h-100' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: 'align-self-end my-4', value: fullScreenType, "aria-label": formatMessage('page'), css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
                  width: 120px;
                  padding-right: 1.2rem;
                `, size: 'sm', onChange: this.onFullScreenTypeChange },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'all' }, formatMessage('all')),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'fixed' }, formatMessage('fixed')),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: 'grid' }, formatMessage('grid'))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_selector_template_list__WEBPACK_IMPORTED_MODULE_3__.TemplateList, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FOCUSABLE_CONTAINER_CLASS]: this.props.tabId === 'fullScreenApp' }), templates: templates, onItemSelect: this.props.onItemSelect, css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
                  height: calc(100% - 64px);
                  overflow: auto;
                  padding-top: 0;
                ` }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: 'scrollingPage', title: formatMessage('scrollingPage'), className: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FOCUSABLE_CONTAINER_CLASS },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_selector_template_list__WEBPACK_IMPORTED_MODULE_3__.TemplateList, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FOCUSABLE_CONTAINER_CLASS]: this.props.tabId === 'scrollingPage' }), templates: (0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_2__.getScrollingPageTemplates)(), onItemSelect: this.props.onItemSelect })))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/index.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/proxy-setting/index.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxySetting: () => (/* reexport safe */ _setting__WEBPACK_IMPORTED_MODULE_1__.ProxySetting),
/* harmony export */   ProxySettingPopup: () => (/* reexport safe */ _setting_popup__WEBPACK_IMPORTED_MODULE_2__.ProxySettingPopup),
/* harmony export */   proxySettingUtils: () => (/* reexport module object */ _utils__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/utils.ts");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/index.tsx");
/* harmony import */ var _setting_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-popup */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting-popup/index.tsx");






/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting-popup/index.tsx":
/*!**************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting-popup/index.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxySettingPopup: () => (/* binding */ ProxySettingPopup)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setting */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/utils.ts");
/* harmony import */ var jimu_ui_lib_components_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/lib/components/types */ "./jimu-ui/lib/components/types.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_core_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-core/data-source */ "jimu-core/data-source");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */







const registerAppPromise = {};
class _ProxySettingPopup extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.__unmount = false;
        this.getProxySettingConfigs = (needProxyItems) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const proxySettingConfigs = {};
            const appProxies = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.appProxies;
            Object.keys(needProxyItems).forEach(sourceUrl => {
                const proxyJson = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getProxyJsonFromSourceUrl)(sourceUrl, appProxies);
                if (proxyJson) {
                    // init a new proxy setting config without previous proxy url and proxy id
                    proxySettingConfigs[sourceUrl] = proxyJson.without('id').without('proxyId').without('proxyUrl');
                }
            });
            return proxySettingConfigs;
        });
        this.registerApp = () => __awaiter(this, void 0, void 0, function* () {
            var _c, _d, _e, _f;
            const appId = (_d = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appStateInBuilder) === null || _d === void 0 ? void 0 : _d.appId;
            if (registerAppPromise[appId]) {
                return yield registerAppPromise[appId];
            }
            const portalUrl = (_f = (_e = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _e === void 0 ? void 0 : _e.appStateInBuilder) === null || _f === void 0 ? void 0 : _f.portalUrl;
            const url = `${portalUrl}/sharing/rest/oauth2/registerApp`;
            registerAppPromise[appId] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request(url, {
                authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getSessionByUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl),
                httpMethod: 'POST',
                params: {
                    itemId: appId,
                    appType: 'browser',
                    /* eslint-disable camelcase */
                    redirect_uris: JSON.stringify([this.getAppRootUrl()])
                }
            });
            return yield registerAppPromise[appId];
        });
        this.createProxies = (proxySettingConfigs) => __awaiter(this, void 0, void 0, function* () {
            var _g, _h, _j;
            if (!proxySettingConfigs) {
                return yield Promise.resolve(null);
            }
            const appProxies = (_j = (_h = (_g = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _g === void 0 ? void 0 : _g.appStateInBuilder) === null || _h === void 0 ? void 0 : _h.appConfig) === null || _j === void 0 ? void 0 : _j.appProxies;
            const existingProxyJsons = {};
            let proxies = [];
            Object.keys(proxySettingConfigs).forEach(sourceUrl => {
                const proxyConfig = proxySettingConfigs[sourceUrl];
                if (!proxyConfig) {
                    return;
                }
                const hitsPerInterval = proxyConfig.hitsPerInterval;
                const intervalSeconds = proxyConfig.intervalSeconds;
                const existingProxyJson = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getProxyJsonFromSourceUrl)(sourceUrl, appProxies);
                if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSameProxy)(existingProxyJson, sourceUrl, hitsPerInterval, intervalSeconds)) {
                    existingProxyJsons[existingProxyJson.id] = existingProxyJson;
                }
                else {
                    proxies = proxies.concat({
                        sourceUrl: sourceUrl,
                        hitsPerInterval,
                        intervalSeconds
                    });
                }
            });
            if (proxies.length === 0) { // No need to create new proxies.
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(existingProxyJsons);
            }
            const isRegistered = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isRegisteredApp)();
            if (!isRegistered) { // Must register app before creating proxies.
                yield this.registerApp();
            }
            const serviceProxyParams = {
                referrers: [this.getAppUrl()].concat(jimu_core__WEBPACK_IMPORTED_MODULE_0__.proxyUtils.getProxyReferrers())
            };
            const createProxyUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCreateProxyUrl)();
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request(createProxyUrl, {
                authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getSessionByUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl),
                httpMethod: 'POST',
                params: {
                    serviceProxyParams,
                    proxies
                }
            }).then(res => {
                var _a, _b;
                const proxiesInResponse = (res === null || res === void 0 ? void 0 : res.appProxies) || [];
                const proxiesInAppConfig = existingProxyJsons;
                const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
                const appProxies = appConfig === null || appConfig === void 0 ? void 0 : appConfig.appProxies;
                proxiesInResponse.forEach(p => {
                    const existingProxyJson = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getProxyJsonFromSourceUrl)(p.sourceUrl, appProxies);
                    // If have a proxy json with same source url, should update the proxy json instead of adding a new proxy json to app config.
                    const proxyJsonId = (existingProxyJson === null || existingProxyJson === void 0 ? void 0 : existingProxyJson.id) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getUniqueId(appConfig.set('appProxies', appProxies ? appProxies.merge(proxiesInAppConfig) : proxiesInAppConfig), 'appProxy');
                    proxiesInAppConfig[proxyJsonId] = Object.assign(Object.assign({}, p), { id: proxyJsonId });
                });
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(proxiesInAppConfig);
            });
        });
        this.getAppRootUrl = () => {
            var _a;
            const origin = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.origin;
            return origin;
        };
        this.getAppUrl = () => {
            var _a, _b, _c, _d, _e, _f;
            const appId = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appId;
            const appItem = (_d = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appStateInBuilder) === null || _d === void 0 ? void 0 : _d.appInfo;
            const isTemplate = (appItem === null || appItem === void 0 ? void 0 : appItem.type) === 'Web Experience Template';
            const appUrlWithoutOrigin = (_e = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAppUrl({ appId, isTemplate })) === null || _e === void 0 ? void 0 : _e.replace(/^\//, '');
            const origin = (_f = this.getAppRootUrl()) === null || _f === void 0 ? void 0 : _f.replace(/\/$/, '');
            return `${origin}/${appUrlWithoutOrigin}`;
        };
        this.onProxyConfigChange = (proxySettingConfigs) => {
            this.setState({ proxySettingConfigs: proxySettingConfigs });
        };
        this.onFinish = () => {
            var _a, _b, _c, _d;
            this.setState({ isLoading: true });
            // New proxy settings, these settings haven't been used to create/update remote proxies yet.
            const proxySettingConfigs = this.state.proxySettingConfigs || {};
            // Existing proxy settings in app config, these settings have already been asynced to remote proxies.
            const existingProxyJsons = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig) === null || _c === void 0 ? void 0 : _c.appProxies;
            const needToDeleteProxies = existingProxyJsons && Object.values(existingProxyJsons).filter(proxyJson => {
                var _a;
                let newProxyConfig = proxySettingConfigs[proxyJson === null || proxyJson === void 0 ? void 0 : proxyJson.sourceUrl];
                const isFeatureService = jimu_core_data_source__WEBPACK_IMPORTED_MODULE_6__.dataSourceJsonCreator.getDataSourceTypeFromArcGISWholeServiceUrl(proxyJson === null || proxyJson === void 0 ? void 0 : proxyJson.sourceUrl) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureService;
                if (isFeatureService) {
                    const associatedSceneServiceUrl = (_a = proxyJson === null || proxyJson === void 0 ? void 0 : proxyJson.sourceUrl) === null || _a === void 0 ? void 0 : _a.replace('/FeatureServer', '/SceneServer');
                    const newAssociatedSceneServiceConfig = proxySettingConfigs[associatedSceneServiceUrl];
                    /**
                     * If current source url is a feature service and has an associated scene service,
                     * 1. if have added the feature service as data source and configured proxy for it, should use its own proxy config
                     * 2. else use its associated scene service's proxy config
                     */
                    newProxyConfig = newProxyConfig || Object.assign(Object.assign({}, newAssociatedSceneServiceConfig), { sourceUrl: proxyJson === null || proxyJson === void 0 ? void 0 : proxyJson.sourceUrl });
                }
                /**
                 * If existing proxy's source url is not used any more, or,
                 * existing proxy is not same as new proxy config (need to create a new proxy),
                 * delete it.
                 */
                return !newProxyConfig || !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isSameProxy)(proxyJson, newProxyConfig.sourceUrl, newProxyConfig.hitsPerInterval, newProxyConfig.intervalSeconds);
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.deleteProxies)(needToDeleteProxies === null || needToDeleteProxies === void 0 ? void 0 : needToDeleteProxies.map(proxyJson => proxyJson.proxyId), (_d = this.state) === null || _d === void 0 ? void 0 : _d.getAppConfigAction()).then(() => {
                this.createProxies(proxySettingConfigs).then(proxyJsons => {
                    var _a;
                    if (!this.__unmount) {
                        if (proxyJsons) {
                            const action = (_a = this.state) === null || _a === void 0 ? void 0 : _a.getAppConfigAction();
                            Object.keys(proxyJsons).forEach(proxyId => {
                                action === null || action === void 0 ? void 0 : action.editAppProxy(proxyJsons[proxyId]);
                            });
                            action === null || action === void 0 ? void 0 : action.exec();
                        }
                        const newAppConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
                        this.props.onFinish(newAppConfig).then(() => {
                            if (!this.__unmount) {
                                setTimeout(() => {
                                    this.setState({ isLoading: false }, () => {
                                        this.props.onToggle();
                                    });
                                }, 3000); // waiting that publish success toast is hidden
                            }
                        }, () => {
                            if (!this.__unmount) {
                                setTimeout(() => {
                                    this.setState({ isLoading: false }, () => {
                                        this.props.onToggle();
                                    });
                                }, 3000); // waiting that publish error toast is hidden
                            }
                        });
                    }
                });
            }).catch(error => {
                console.error('Creating proxy failed: ', error);
                this.setState({
                    isLoading: false,
                    isError: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            isError: false
                        });
                    }, 5500);
                });
            });
        };
        this.getTostStyle = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      & {
        height:  ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(40)};
        top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${(_d = (_c = (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.theme) === null || _b === void 0 ? void 0 : _b.colors) === null || _c === void 0 ? void 0 : _c.palette) === null || _d === void 0 ? void 0 : _d.secondary[300]};
        line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(40)};
        color: ${(_h = (_g = (_f = (_e = this.props) === null || _e === void 0 ? void 0 : _e.theme) === null || _f === void 0 ? void 0 : _f.colors) === null || _g === void 0 ? void 0 : _g.palette) === null || _h === void 0 ? void 0 : _h.dark[800]};
        font-weight: 300;
        padding: 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
        box-shadow: 0 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba((_l = (_k = (_j = this.props) === null || _j === void 0 ? void 0 : _j.theme) === null || _k === void 0 ? void 0 : _k.colors) === null || _l === void 0 ? void 0 : _l.white, 0.2)};
      }
    `;
        };
        this.state = {
            getAppConfigAction: null,
            isLoading: false,
            isError: false,
            proxySettingConfigs: null,
            needProxyItems: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-for-builder').then(module => {
            if (!this.__unmount) {
                this.setState({
                    getAppConfigAction: module.getAppConfigAction
                });
            }
        });
        this.setState({ isLoading: true });
        this.initNeedProxyItemsAndProxySettingConfigs();
    }
    componentDidUpdate(prevProps) {
        if ((!prevProps.isOpen && this.props.isOpen) || (prevProps.appProxies !== this.props.appProxies)) {
            this.initNeedProxyItemsAndProxySettingConfigs();
        }
    }
    initNeedProxyItemsAndProxySettingConfigs() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ isLoading: true });
            try {
                const needProxyItems = yield (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getNeedProxyItems)();
                const proxySettingConfigs = yield this.getProxySettingConfigs(needProxyItems);
                if (!this.__unmount) {
                    this.setState({
                        proxySettingConfigs: proxySettingConfigs,
                        needProxyItems: needProxyItems,
                        isLoading: false
                    });
                }
            }
            catch (err) {
                if (!this.__unmount) {
                    this.setState({ isLoading: false });
                }
                console.error('Getting proxy config error', err);
            }
        });
    }
    componentWillUnmount() {
        this.__unmount = true;
    }
    render() {
        const proxySettingConfigs = this.state.proxySettingConfigs;
        const needProxyItems = this.state.needProxyItems;
        const subscriberContentString = this.props.intl.formatMessage({ id: 'subscriberContents', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.subscriberContents });
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { isOpen: this.props.isOpen, centered: true, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ [this.props.className]: !!this.props.className }), returnfocusafterclose: 'true', contentClassName: 'proxy-setting-container', backdrop: 'static', "aria-label": subscriberContentString },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { className: 'd-flex justify-content-between header px-30', toggle: this.props.onToggle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 text-truncate' }, subscriberContentString)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalBody, { className: 'd-flex px-30' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_setting__WEBPACK_IMPORTED_MODULE_2__.ProxySetting, { onChange: this.onProxyConfigChange, proxySettingConfigs: proxySettingConfigs, needProxyItems: needProxyItems })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, { className: 'px-30' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: 'mr-2', type: 'primary', onClick: this.onFinish }, this.props.intl.formatMessage({ id: 'publish', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.publish })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'default', onClick: this.props.onCancel }, this.props.intl.formatMessage({ id: 'cancel', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.cancel }))),
            this.state.isLoading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { type: jimu_ui_lib_components_types__WEBPACK_IMPORTED_MODULE_4__.LoadingType.Secondary }),
            this.state.isError &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Toast, { open: this.state.isError, type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ToastType.Info, css: this.getTostStyle(), text: this.props.intl.formatMessage({ id: 'creatProxyToPublishAppError', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.creatProxyToPublishAppError }) })));
    }
}
const mapStateToProps = (state, ownProps) => {
    var _a, _b;
    return {
        appProxies: (_b = (_a = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.appProxies
    };
};
// eslint-disable-next-line
const __ProxySettingPopup = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withStyles)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ProxySettingPopup)), 'ProxySettingPopup');
const ProxySettingPopup = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(mapStateToProps)(__ProxySettingPopup);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/index.tsx":
/*!********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/index.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxySetting: () => (/* binding */ ProxySetting),
/* harmony export */   _ProxySetting: () => (/* binding */ _ProxySetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _proxy_setting_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy-setting-item */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/proxy-setting-item.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_core_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-core/data-source */ "jimu-core/data-source");





class _ProxySetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.columnName = {
            authorized: this.props.intl.formatMessage({ id: 'authorized', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.authorized }),
            subscriberContent: this.props.intl.formatMessage({ id: 'subscriberContent', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.subscriberContent }),
            credits: this.props.intl.formatMessage({ id: 'credits', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.credits }),
            requestLimit: this.props.intl.formatMessage({ id: 'requestLimit', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.requestLimit }),
            requestInterval: this.props.intl.formatMessage({ id: 'requestInterval', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.requestInterval })
        };
        this.onProxyChange = (sourceUrl, proxySettingConfig) => {
            const proxySettingConfigs = this.props.proxySettingConfigs || {};
            const newProxySettingConfigs = Object.assign({}, proxySettingConfigs);
            const isSceneService = jimu_core_data_source__WEBPACK_IMPORTED_MODULE_4__.dataSourceJsonCreator.getDataSourceTypeFromArcGISWholeServiceUrl(sourceUrl) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService;
            if (proxySettingConfig) {
                newProxySettingConfigs[sourceUrl] = proxySettingConfig;
                if (isSceneService) {
                    const associatedFeatureServiceSourceUrl = sourceUrl.replace('/SceneServer', '/FeatureServer');
                    const associatedFeatureServiceProxyConfig = Object.assign(Object.assign({}, proxySettingConfig), { sourceUrl: associatedFeatureServiceSourceUrl });
                    newProxySettingConfigs[associatedFeatureServiceSourceUrl] = associatedFeatureServiceProxyConfig;
                }
            }
            else {
                delete newProxySettingConfigs[sourceUrl];
                if (isSceneService) {
                    const associatedFeatureServiceSourceUrl = sourceUrl.replace('/SceneServer', '/FeatureServer');
                    delete newProxySettingConfigs[associatedFeatureServiceSourceUrl];
                }
            }
            this.props.onChange(newProxySettingConfigs);
        };
    }
    render() {
        const needProxyItems = this.props.needProxyItems;
        const proxySettingConfigs = this.props.proxySettingConfigs;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('h-100 w-100 bg-light-300', { [this.props.className]: !!this.props.className }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'subscriber-warning' }, this.props.intl.formatMessage({ id: 'subscriberWarning', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.subscriberWarning })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'secondary-title mt-5 mb-4' }, this.props.intl.formatMessage({ id: 'data', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.data })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("table", { className: 'content-table w-100' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("thead", { className: 'content-table-header container' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", { className: 'row' }, Object.keys(this.columnName).map((key, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("th", { key: i, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('text-truncate', { 'col-4': key === 'subscriberContent', 'col-2': key !== 'subscriberContent' }), title: this.columnName[key] }, this.columnName[key]));
                    }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tbody", { className: 'container' }, needProxyItems && Object.keys(needProxyItems).map((sourceUrl, i) => {
                    var _a, _b;
                    const itemsWithSameSourceURl = needProxyItems[sourceUrl];
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_proxy_setting_item__WEBPACK_IMPORTED_MODULE_2__.ProxySettingItem, { isPremium: itemsWithSameSourceURl.isPremium, isSubscriber: itemsWithSameSourceURl.isSubscriber, sourceUrl: sourceUrl, intl: this.props.intl, key: i, onChange: this.onProxyChange, label: (_b = (_a = itemsWithSameSourceURl.items) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.label, proxySettingConfig: proxySettingConfigs === null || proxySettingConfigs === void 0 ? void 0 : proxySettingConfigs[sourceUrl] }));
                })))));
    }
}
const ProxySetting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.withStyles)(_ProxySetting, 'ProxySetting'));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/proxy-setting-item.tsx":
/*!*********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/proxy-setting/setting/proxy-setting-item.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxySettingItem: () => (/* binding */ ProxySettingItem)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/application/check */ "./jimu-icons/outlined/application/check.tsx");



const MIN_HITS_PER_INTERVAL = 1;
class ProxySettingItem extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.__unmount = false;
        this.interval = {
            none: this.props.intl.formatMessage({ id: 'intervalNone', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.intervalNone }),
            second: this.props.intl.formatMessage({ id: 'intervalSecond', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.intervalSecond }),
            minute: this.props.intl.formatMessage({ id: 'intervalMinute', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.intervalMinute }),
            hour: this.props.intl.formatMessage({ id: 'intervalHour', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.intervalHour }),
            day: this.props.intl.formatMessage({ id: 'intervalDay', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.intervalDay })
        };
        this.setIsHostedInSamePortal = () => {
            this.props.sourceUrl && jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchServiceInfo(this.props.sourceUrl).then(res => {
                if (!this.__unmount) {
                    this.setState({ isHostedInSamePortal: res.isHostedInSamePortal });
                }
            });
        };
        this.onToggleProxy = () => {
            let newProxyConfig;
            if (this.props.proxySettingConfig) {
                newProxyConfig = null;
            }
            else {
                newProxyConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ sourceUrl: this.props.sourceUrl });
            }
            this.props.onChange(this.props.sourceUrl, newProxyConfig);
        };
        this.onHitsPerInervalChange = (value) => {
            const hitsPerInterval = value;
            const config = {
                sourceUrl: this.props.sourceUrl,
                hitsPerInterval
            };
            const newProxyConfig = this.props.proxySettingConfig ? Object.assign(Object.assign({}, this.props.proxySettingConfig), config) : config;
            this.props.onChange(this.props.sourceUrl, newProxyConfig);
        };
        this.onIntervalUnitChange = e => {
            const intervalUnit = e.target.value;
            const intervalSeconds = this.getIntervalSeconds(intervalUnit);
            const config = {
                sourceUrl: this.props.sourceUrl,
                intervalSeconds
            };
            const newProxyConfig = this.props.proxySettingConfig ? Object.assign(Object.assign({}, this.props.proxySettingConfig), config) : config;
            this.props.onChange(this.props.sourceUrl, newProxyConfig);
        };
        this.state = {
            isHostedInSamePortal: true
        };
    }
    componentDidMount() {
        this.__unmount = false;
        this.setIsHostedInSamePortal();
    }
    componentDidUpdate(prevProps) {
        this.__unmount = false;
        if (prevProps.sourceUrl !== this.props.sourceUrl) {
            this.setIsHostedInSamePortal();
        }
    }
    componentWillUnmount() {
        this.__unmount = true;
    }
    getIntervalUnit(intervalSeconds) {
        if (!intervalSeconds) {
            return 'none';
        }
        switch (intervalSeconds) {
            case 1:
                return 'second';
            case 60:
                return 'minute';
            case 3600:
                return 'hour';
            case 86400:
                return 'day';
            default:
                return 'none';
        }
    }
    getIntervalSeconds(intervalUnit) {
        if (!intervalUnit) {
            return null;
        }
        switch (intervalUnit) {
            case 'second':
                return 1;
            case 'minute':
                return 60;
            case 'hour':
                return 3600;
            case 'day':
                return 86400;
            default:
                return null;
        }
    }
    render() {
        var _a, _b;
        if (!this.props.sourceUrl) {
            return null;
        }
        const label = this.props.label;
        const useProxy = !!this.props.proxySettingConfig;
        const selectedIntervalUnit = this.getIntervalUnit((_a = this.props.proxySettingConfig) === null || _a === void 0 ? void 0 : _a.intervalSeconds);
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const sourceUrlWithToken = `${this.props.sourceUrl}?token=${session.token}`;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("tr", { className: 'row m-0 content-table-tr' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'col-2', title: !this.state.isHostedInSamePortal ? this.props.intl.formatMessage({ id: 'disabledProxyTooltip', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.disabledProxyTooltip }) : null },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { onChange: this.onToggleProxy, checked: useProxy, className: 'mr-2', disabled: !this.state.isHostedInSamePortal, "aria-label": this.props.intl.formatMessage({ id: 'authorized', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.authorized }), "aria-checked": useProxy })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'col-4', title: label },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, { to: sourceUrlWithToken, target: '_blank', className: 'font-size-13 px-0 text-truncate d-block text-left', "aria-label": this.props.intl.formatMessage({ id: 'subscriberContent', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.subscriberContent }) }, label)),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'col-2' }, this.props.isPremium && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_2__.CheckOutlined, { size: 'm' })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'col-2' }, useProxy &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', value: (_b = this.props.proxySettingConfig) === null || _b === void 0 ? void 0 : _b.hitsPerInterval, onChange: this.onHitsPerInervalChange, precision: 0, min: MIN_HITS_PER_INTERVAL, className: 'request-limit', "aria-label": this.props.intl.formatMessage({ id: 'requestLimit', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.requestLimit }) })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("td", { className: 'col-2' }, useProxy &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: selectedIntervalUnit, onChange: this.onIntervalUnitChange, size: 'sm', className: 'request-interval', "aria-label": this.props.intl.formatMessage({ id: 'requestInterval', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.requestInterval }) }, Object.keys(this.interval).map((intv, i) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: intv, key: i, selected: intv === selectedIntervalUnit }, this.interval[intv]))))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/utils.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/proxy-setting/utils.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProxies: () => (/* binding */ deleteProxies),
/* harmony export */   getCreateProxyUrl: () => (/* binding */ getCreateProxyUrl),
/* harmony export */   getDeleteProxyUrl: () => (/* binding */ getDeleteProxyUrl),
/* harmony export */   getNeedProxyDataSources: () => (/* binding */ getNeedProxyDataSources),
/* harmony export */   getNeedProxyItems: () => (/* binding */ getNeedProxyItems),
/* harmony export */   getNeedProxyUtilities: () => (/* binding */ getNeedProxyUtilities),
/* harmony export */   getProxyJsonFromSourceUrl: () => (/* binding */ getProxyJsonFromSourceUrl),
/* harmony export */   getProxyRootUrl: () => (/* binding */ getProxyRootUrl),
/* harmony export */   isRegisteredApp: () => (/* binding */ isRegisteredApp),
/* harmony export */   isSameProxy: () => (/* binding */ isSameProxy),
/* harmony export */   needToConfigProxy: () => (/* binding */ needToConfigProxy)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function getNeedProxyItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const needProxyDataSources = yield getNeedProxyDataSources();
        const needProxyUtilities = yield getNeedProxyUtilities();
        const needProxyItems = {};
        Object.keys(needProxyDataSources).forEach(sourceUrl => {
            if (!needProxyItems[sourceUrl]) {
                needProxyItems[sourceUrl] = { items: [], isPremium: needProxyDataSources[sourceUrl].isPremium, isSubscriber: needProxyDataSources[sourceUrl].isSubscriber };
            }
            needProxyItems[sourceUrl].items = needProxyItems[sourceUrl].items.concat(needProxyDataSources[sourceUrl].dataSources.map(ds => ({ label: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLabelFromArcGISServiceUrl(sourceUrl), id: ds.id })));
        });
        Object.keys(needProxyUtilities).forEach(sourceUrl => {
            if (!needProxyItems[sourceUrl]) {
                needProxyItems[sourceUrl] = { items: [], isPremium: needProxyUtilities[sourceUrl].isPremium, isSubscriber: needProxyUtilities[sourceUrl].isSubscriber };
            }
            needProxyItems[sourceUrl].items = needProxyItems[sourceUrl].items.concat(needProxyUtilities[sourceUrl].utilities.map(u => {
                const utilityJson = jimu_core__WEBPACK_IMPORTED_MODULE_0__.UtilityManager.getInstance().getUtilityJson(u.utilityId);
                return { label: (utilityJson === null || utilityJson === void 0 ? void 0 : utilityJson.label) || (utilityJson === null || utilityJson === void 0 ? void 0 : utilityJson.name) || (utilityJson === null || utilityJson === void 0 ? void 0 : utilityJson.sourceLabel), id: u.utilityId };
            }));
        });
        return needProxyItems;
    });
}
function getNeedProxyDataSources() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const dataSourceJsons = (_d = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig) === null || _d === void 0 ? void 0 : _d.dataSources;
        const checkPromises = [];
        if (dataSourceJsons) {
            Object.keys(dataSourceJsons).forEach(dsId => {
                const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
                checkPromises.push(traverseToGetNeedProxyDataSources(ds));
            });
        }
        return Promise.allSettled(checkPromises).then(checkResultArr => {
            let finalResult = {};
            const fulfilledResults = checkResultArr.filter(c => c.status === 'fulfilled')
                .map(c => c.value);
            fulfilledResults.forEach(res => {
                res && Object.keys(res).forEach(sourceUrl => {
                    if (!finalResult[sourceUrl]) {
                        finalResult = Object.assign(Object.assign({}, finalResult), res);
                    }
                    else {
                        finalResult[sourceUrl].dataSources = finalResult[sourceUrl].dataSources.concat(res[sourceUrl].dataSources);
                    }
                });
            });
            return finalResult;
        });
    });
}
function getNeedProxyUtilities() {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const utilityJsons = (_d = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig) === null || _d === void 0 ? void 0 : _d.utilities;
        const checkPromises = [];
        if (utilityJsons) {
            Object.keys(utilityJsons).forEach(uId => {
                checkPromises.push(getSingleNeedProxyUtility(utilityJsons[uId]));
            });
        }
        return Promise.allSettled(checkPromises).then(checkResultArr => {
            let finalResult = {};
            const fulfilledResults = checkResultArr.filter(c => c.status === 'fulfilled')
                .map(c => c.value);
            fulfilledResults.forEach(res => {
                res && Object.keys(res).forEach(sourceUrl => {
                    if (!finalResult[sourceUrl]) {
                        finalResult = Object.assign(Object.assign({}, finalResult), res);
                    }
                    else {
                        finalResult[sourceUrl].utilities = finalResult[sourceUrl].utilities.concat(res[sourceUrl].utilities);
                    }
                });
            });
            return finalResult;
        });
    });
}
/**
 * If forceToCreateProxy is true, will force to create proxy for all subscriber descendant data sources.
 */
function traverseToGetNeedProxyDataSources(dataSource, forceToCreateProxy = false) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        const result = {};
        if (!dataSource) {
            return result;
        }
        if (dataSource.isDataSourceSet && !dataSource.areChildDataSourcesCreated()) {
            // If is data source set, will wait util all child data sources are created.
            yield dataSource.childDataSourcesReady();
        }
        const widgets = (_d = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig) === null || _d === void 0 ? void 0 : _d.widgets;
        const isMainDs = ((_e = dataSource.getMainDataSource()) === null || _e === void 0 ? void 0 : _e.id) === dataSource.id;
        const isUsed = jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.dataComponentsUtils.getWidgetsUsingDsOrItsViews(dataSource.id, widgets, false).length > 0;
        const sourceUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getFullArcGISServiceUrl((_f = dataSource.getDataSourceJson()) === null || _f === void 0 ? void 0 : _f.url, false);
        if (isMainDs && sourceUrl && (forceToCreateProxy || isUsed)) {
            const isPrm = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.proxyUtils.isDataSourcePremium(dataSource.getDataSourceJson());
            const isSub = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.proxyUtils.isDataSourceSubscriber(dataSource.getDataSourceJson());
            if (isPrm || isSub) {
                result[sourceUrl] = {
                    dataSources: [dataSource],
                    isPremium: isPrm,
                    isSubscriber: isSub
                };
            }
        }
        const checkChildDssPromises = [];
        if (isMainDs && dataSource.isDataSourceSet) {
            const isMap = dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.WebMap || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.WebScene;
            // If is a webmap/webscene data source and is used (currently only map widget), will force to create proxies for all subscriber descendant data sources.
            // Because map widget will load all layers.
            const allChildDataSourcesNeedProxy = (isMap && isUsed) || forceToCreateProxy;
            dataSource.getChildDataSources().forEach(childDs => {
                checkChildDssPromises.push(traverseToGetNeedProxyDataSources(childDs, allChildDataSourcesNeedProxy));
            });
        }
        return Promise.allSettled(checkChildDssPromises).then(checkChildDssResultArr => {
            let parentAndChildrenRes = result;
            const fulfilledChildDssResults = checkChildDssResultArr.filter(c => c.status === 'fulfilled')
                .map(c => c.value);
            fulfilledChildDssResults.forEach(res => {
                res && Object.keys(res).forEach(sourceUrl => {
                    if (!parentAndChildrenRes[sourceUrl]) {
                        parentAndChildrenRes = Object.assign(Object.assign({}, parentAndChildrenRes), res);
                    }
                    else {
                        parentAndChildrenRes[sourceUrl].dataSources = parentAndChildrenRes[sourceUrl].dataSources.concat(res[sourceUrl].dataSources);
                    }
                });
            });
            return parentAndChildrenRes;
        });
    });
}
function getSingleNeedProxyUtility(utilityJson) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const result = {};
        if (!utilityJson) {
            return result;
        }
        const widgets = (_d = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.appStateInBuilder) === null || _c === void 0 ? void 0 : _c.appConfig) === null || _d === void 0 ? void 0 : _d.widgets;
        const isUsed = widgets && Object.values(widgets).some(w => { var _a; return (_a = w.useUtilities) === null || _a === void 0 ? void 0 : _a.some(u => u.utilityId === utilityJson.id); });
        const sourceUrl = utilityJson.url;
        if (sourceUrl && isUsed) {
            const isPrm = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.proxyUtils.isUtilityPremium(utilityJson);
            const isSub = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.proxyUtils.isUtilitySubscriber(utilityJson);
            if (isPrm || isSub) {
                const utility = yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.UtilityManager.getInstance().getUtility(utilityJson.id);
                result[sourceUrl] = {
                    utilities: [utility],
                    isPremium: isPrm,
                    isSubscriber: isSub
                };
            }
        }
        return result;
    });
}
function getProxyJsonFromSourceUrl(sourceUrl, appProxies) {
    var _a;
    if (!sourceUrl || !appProxies) {
        return null;
    }
    let proxy = null;
    for (const proxyId in appProxies) {
        if (((_a = appProxies[proxyId]) === null || _a === void 0 ? void 0 : _a.sourceUrl) === sourceUrl) {
            proxy = appProxies[proxyId];
            break;
        }
    }
    return proxy;
}
function isSameProxy(existingProxyJson, sourceUrl, hitsPerInterval, intervalSeconds) {
    if (!existingProxyJson || !sourceUrl) {
        return false;
    }
    const isSourceUrlSame = existingProxyJson.sourceUrl === sourceUrl;
    if (!isSourceUrlSame) {
        return false;
    }
    const isLimitSame = (!existingProxyJson.hitsPerInterval && !hitsPerInterval) || (existingProxyJson.hitsPerInterval === hitsPerInterval);
    if (!isLimitSame) {
        return false;
    }
    const isIntervalSame = (!existingProxyJson.intervalSeconds && !intervalSeconds) || (existingProxyJson.intervalSeconds === intervalSeconds);
    if (!isIntervalSame) {
        return false;
    }
    return true;
}
function isRegisteredApp() {
    var _a, _b;
    const appItem = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder.appInfo;
    const isRegisteredAppCache = (_b = appItem === null || appItem === void 0 ? void 0 : appItem.typeKeywords) === null || _b === void 0 ? void 0 : _b.includes('Registered App');
    return isRegisteredAppCache;
}
function needToConfigProxy() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return __awaiter(this, void 0, void 0, function* () {
        const isOnline = !((_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appContext) === null || _b === void 0 ? void 0 : _b.jimuConfig) === null || _c === void 0 ? void 0 : _c.isInPortal) &&
            !((_f = (_e = (_d = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _d === void 0 ? void 0 : _d.appContext) === null || _e === void 0 ? void 0 : _e.jimuConfig) === null || _f === void 0 ? void 0 : _f.isDevEdition);
        if (!isOnline) {
            return yield Promise.resolve(false);
        }
        const isRegistered = isRegisteredApp();
        let isOwner = false;
        if (!isRegistered) {
            const appItem = (_g = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _g === void 0 ? void 0 : _g.appStateInBuilder.appInfo;
            const currentUser = (_k = (_j = (_h = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _h === void 0 ? void 0 : _h.appStateInBuilder) === null || _j === void 0 ? void 0 : _j.user) === null || _k === void 0 ? void 0 : _k.username;
            isOwner = (appItem === null || appItem === void 0 ? void 0 : appItem.owner) === currentUser;
        }
        const canCreateProxy = isRegistered || isOwner;
        if (!canCreateProxy) {
            return yield Promise.resolve(false);
        }
        const needProxyItems = yield getNeedProxyItems();
        const checkIsSourceUrlHostedInSamePortal = Object.keys(needProxyItems).map((sourceUrl) => __awaiter(this, void 0, void 0, function* () { return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.ServiceManager.getInstance().fetchServiceInfo(sourceUrl).then(res => res.isHostedInSamePortal); }));
        return Promise.allSettled(checkIsSourceUrlHostedInSamePortal)
            .then(checkResults => checkResults.filter(c => c.status === 'fulfilled').map(c => c.value))
            .then(res => (res === null || res === void 0 ? void 0 : res.length) > 0 && (res === null || res === void 0 ? void 0 : res.some(r => r)));
    });
}
function deleteProxies(proxyIds, action) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!proxyIds || proxyIds.length === 0 || !action) {
            yield Promise.resolve();
            return;
        }
        const deleteProxyUrl = getDeleteProxyUrl();
        yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request(deleteProxyUrl, {
            authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getSessionByUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl),
            httpMethod: 'POST',
            params: {
                proxies: proxyIds.join()
            }
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            res.results && Object.values(res.results).forEach((r) => {
                if (r.success) { // remove proxy json in app config which has been delete in origin
                    removeAppProxiesInConfig(r.proxyId, action);
                }
            });
            action === null || action === void 0 ? void 0 : action.exec();
            if ((_a = res.results) === null || _a === void 0 ? void 0 : _a.every(r => r.success === true)) {
                return Promise.resolve();
            }
            else {
                return Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(res)}`);
            }
        })).catch((err) => __awaiter(this, void 0, void 0, function* () {
            proxyIds.forEach(proxyId => {
                removeAppProxiesInConfig(proxyId, action);
            });
            action === null || action === void 0 ? void 0 : action.exec();
            return Promise.reject(`Deleting existing proxy failed: ${JSON.stringify(err)}`);
        }));
    });
}
/**
 * proxyId is the id of created proxy, it is saved in `appProxies` in the app config.
 */
function removeAppProxiesInConfig(proxyId, action) {
    var _a, _b, _c;
    const existingProxyJsons = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig) === null || _c === void 0 ? void 0 : _c.appProxies;
    const proxyJson = existingProxyJsons && Object.values(existingProxyJsons).find(p => p.proxyId === proxyId);
    proxyJson && (action === null || action === void 0 ? void 0 : action.removeAppProxy(proxyJson.id));
}
function getProxyRootUrl() {
    var _a, _b, _c, _d, _e, _f, _g;
    const portalUrl = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.portalUrl;
    const appId = (_d = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appStateInBuilder) === null || _d === void 0 ? void 0 : _d.appId;
    const owner = (_g = (_f = (_e = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _e === void 0 ? void 0 : _e.appStateInBuilder) === null || _f === void 0 ? void 0 : _f.appInfo) === null || _g === void 0 ? void 0 : _g.owner;
    return `${portalUrl}/sharing/rest/content/users/${owner}/items/${appId}`;
}
function getCreateProxyUrl() {
    const rootUrl = getProxyRootUrl();
    return `${rootUrl}/createProxies`;
}
function getDeleteProxyUrl() {
    const rootUrl = getProxyRootUrl();
    return `${rootUrl}/deleteProxies`;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/quick-style/index.ts":
/*!*********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/quick-style/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavQuickStyleItem: () => (/* reexport safe */ _nav_quick_style_item__WEBPACK_IMPORTED_MODULE_0__.NavQuickStyleItem),
/* harmony export */   QuickStylePopper: () => (/* reexport safe */ _quick_style_popper__WEBPACK_IMPORTED_MODULE_1__.QuickStylePopper)
/* harmony export */ });
/* harmony import */ var _nav_quick_style_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-quick-style-item */ "./jimu-ui/advanced/lib/setting-components/components/quick-style/nav-quick-style-item.tsx");
/* harmony import */ var _quick_style_popper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-style-popper */ "./jimu-ui/advanced/lib/setting-components/components/quick-style/quick-style-popper.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/quick-style/nav-quick-style-item.tsx":
/*!*************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/quick-style/nav-quick-style-item.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavQuickStyleItem: () => (/* binding */ NavQuickStyleItem)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */


const useStyle = () => {
    var _a, _b, _c;
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const primary600 = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.palette.primary[600];
    const light200 = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.palette.light[200];
    const black = (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.black;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      width: 100%;
      height:  ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(50)};
      padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)}  ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${black};
      background-color: ${light200};
      position: relative;
      &.selected {
        outline: 3px solid ${primary600};
      }
      >.overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
  `;
    }, [primary600, light200, black]);
};
const NavQuickStyleItem = (props) => {
    const { title, children, selected, onClick } = props;
    const style = useStyle();
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style, title: title, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('quick-style-item', { selected }), onClick: onClick },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'overlay' }),
        children));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/quick-style/quick-style-popper.tsx":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/quick-style/quick-style-popper.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickStylePopper: () => (/* binding */ QuickStylePopper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _setting_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting-popper */ "./jimu-ui/advanced/lib/setting-components/components/quick-style/setting-popper.tsx");
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



const QuickStylePopper = (props) => {
    const { onClose, children, floating } = props, others = __rest(props, ["onClose", "children", "floating"]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const headerTitle = translate('quickStyle');
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_setting_popper__WEBPACK_IMPORTED_MODULE_2__.SettingPopper, Object.assign({}, others, { headerTitle: floating ? headerTitle : '', onHeaderClose: onClose }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            !floating && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.PanelHeader, { className: 'px-4 py-2', title: headerTitle, onClose: onClose }),
            children)));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/quick-style/setting-popper.tsx":
/*!*******************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/quick-style/setting-popper.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingPopper: () => (/* binding */ SettingPopper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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



const MODIFIERS = [
    {
        name: 'preventOverflow',
        options: {
            altAxis: true
        }
    }, {
        name: 'flip',
        options: {
            fallbackPlacements: ['bottom-end', 'top-end']
        }
    }
];
const Root = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.styled)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Popper)(() => {
    var _a, _b, _c, _d;
    const theme2 = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme2)();
    const dark600 = (_a = theme2 === null || theme2 === void 0 ? void 0 : theme2.colors) === null || _a === void 0 ? void 0 : _a.palette.dark[600];
    const dark800 = (_b = theme2 === null || theme2 === void 0 ? void 0 : theme2.colors) === null || _b === void 0 ? void 0 : _b.palette.dark[800];
    const light300 = (_c = theme2 === null || theme2 === void 0 ? void 0 : theme2.colors) === null || _c === void 0 ? void 0 : _c.palette.light[300];
    const light600 = (_d = theme2 === null || theme2 === void 0 ? void 0 : theme2.colors) === null || _d === void 0 ? void 0 : _d.palette.light[600];
    return `
    background-color: ${light300};
    color: ${dark600};
    border: 1px solid ${light600};
    > .popper-box {
      > .panel-header {
        color: ${dark600};
        .action-btn {
          color: ${dark600};
          &:hover {
            color: ${dark800};
          }
        }
      }
    }
  `;
});
const SettingPopper = (props) => {
    const { className, placement = 'right-start', popperNodeRef, onInitResizeHandler, onInitDragHandler, version: propVersion, modifiers: propModifiers } = props, others = __rest(props, ["className", "placement", "popperNodeRef", "onInitResizeHandler", "onInitDragHandler", "version", "modifiers"]);
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useForkRef(popperNodeRef, ref);
    const [version, setVersion] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useControlled({ controlled: propVersion, default: 0 });
    const modifiers = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return [
            ...MODIFIERS,
            ...(propModifiers !== null && propModifiers !== void 0 ? propModifiers : [])
        ];
    }, [propModifiers]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        onInitResizeHandler === null || onInitResizeHandler === void 0 ? void 0 : onInitResizeHandler(() => {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
        }, null, () => {
            var _a;
            setVersion(v => v + 1);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
        });
    }, [onInitResizeHandler, setVersion]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        onInitDragHandler === null || onInitDragHandler === void 0 ? void 0 : onInitDragHandler(() => {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
        }, null, () => {
            var _a;
            setVersion(v => v + 1);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
        });
    }, [onInitDragHandler, setVersion]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Root, Object.assign({ className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('shadow-2', className), modifiers: modifiers, placement: placement, popperNodeRef: handleRef, version: version }, others)));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/radio-group/index.tsx":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/radio-group/index.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup),
/* harmony export */   _RadioGroup: () => (/* binding */ _RadioGroup)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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



class _RadioGroup extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
        this.onRadioButtonChange = (evt) => {
            const value = evt.target.value;
            if (this.state.value === value)
                return;
            this.setState({
                value: value
            });
            if (this.props.onChange) {
                this.props.onChange(value);
            }
        };
        _RadioGroup.count++;
        this.inputName = `setting-radiogroup-${_RadioGroup.count}`;
    }
    render() {
        const _a = this.props, { options, className } = _a, otherProps = __rest(_a, ["options", "className"]);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.FormGroup, Object.assign({}, otherProps, { onChange: this.onRadioButtonChange, className: `setting--button-group ${className}` }), options.map(option => {
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { key: option.value },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Radio, { value: option.value, name: this.inputName, checked: this.state.value === option.value }),
                option.content));
        })));
    }
}
_RadioGroup.count = 0;
const RadioGroup = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)(_RadioGroup, 'RadioGroup');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/datasource-list.tsx":
/*!***********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/datasource-list.tsx ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/basic/list-tree */ "jimu-ui/basic/list-tree");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _type_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/type */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */




const { useState, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const IconClose = __webpack_require__(/*! jimu-icons/svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .warning-alert-con {
    padding: 0 !important;
  }
  .warning-alert-con .jimu-icon-component {
    color: var(--warning-700) !important;
  }
`;
const DatasourceList = (props) => {
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    const isLoadDatasourceSelector = useRef(false);
    const dataComponentsUtilsRef = useRef(null);
    const DataSourceRemoveWaringReasonRef = useRef(null);
    const { className, datasourceConfig, useDataSources, dsConfigItemIndex, createOutputDs, showSourcePanel, showNewSourceItem, id, dataSourceCreateStatus, onDsConfigIdChange, updateConfigForLayerOptions, hideSidePopper } = props;
    const widgetsJson = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b, _c; return (_c = (_b = (_a = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets) === null || _c === void 0 ? void 0 : _c[id]; });
    const widgets = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets; });
    const AdvancedActionMap = {
        overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
            return {
                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItem,
                children: [{
                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemDroppableContainer,
                        children: [{
                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemDraggableContainer,
                                children: [{
                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemBody,
                                        children: [{
                                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemMainLine,
                                                children: [{
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemDragHandle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemIcon,
                                                        autoCollapsed: true
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemTitle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemDetailToggle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.TreeItemActionType.RenderOverrideItemCommands
                                                    }]
                                            }]
                                    }]
                            }]
                    }]
            };
        }
    };
    const [dsToRemove, setDsToRemove] = useState(null);
    const [removeDsIndex, setRemoveDsIndex] = useState(null);
    const [showRemoveSearchItemWarning, setShowRemoveSearchItemWarning] = useState(false);
    const [DataSourceRemoveWarningPopup, setDataSourceRemoveWarningPopup] = useState(null);
    const loadDatasourceSelector = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isLoadDatasourceSelector.current) {
            return false;
        }
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/data-source-selector').then(module => {
            isLoadDatasourceSelector.current = true;
            dataComponentsUtilsRef.current = module.dataComponentsUtils;
            DataSourceRemoveWaringReasonRef.current = module.DataSourceRemoveWaringReason;
            setDataSourceRemoveWarningPopup(module.DataSourceRemoveWarningPopup);
            return Promise.resolve(true);
        });
    });
    const checkIsUtilityAvaible = (dsConfigItem, utilityStates) => {
        var _a, _b;
        if ((dsConfigItem === null || dsConfigItem === void 0 ? void 0 : dsConfigItem.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.FeatureService)
            return false;
        const utilityId = (_a = dsConfigItem === null || dsConfigItem === void 0 ? void 0 : dsConfigItem.useUtility) === null || _a === void 0 ? void 0 : _a.utilityId;
        if (!utilityId)
            return false;
        const isValid = (_b = utilityStates === null || utilityStates === void 0 ? void 0 : utilityStates[utilityId]) !== null && _b !== void 0 ? _b : true;
        return isValid;
    };
    const utilityAvaibleState = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => {
        var _a, _b;
        const utilityAvaibleState = {};
        const utilityStates = ((_b = (_a = state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appRuntimeInfo) === null || _b === void 0 ? void 0 : _b.utilityStates) || {};
        datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.forEach(item => {
            if ((item === null || item === void 0 ? void 0 : item.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService) {
                utilityAvaibleState[item.configId] = checkIsUtilityAvaible(item === null || item === void 0 ? void 0 : item.asMutable({ deep: true }), utilityStates);
            }
        });
        return utilityAvaibleState;
    });
    const hideRemovePopup = () => {
        setShowRemoveSearchItemWarning(!showRemoveSearchItemWarning);
    };
    const beforeRemovingDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback(() => {
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true });
        newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.splice(removeDsIndex, 1);
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
        hideSidePopper();
    });
    const afterRemovingDataSource = () => {
        setDsToRemove(null);
        setRemoveDsIndex(null);
        setShowRemoveSearchItemWarning(false);
    };
    const isDataSourceAccessible = (dataSourceId, isOutputDs = false) => {
        let isDataSourceInProps;
        let isDataSourceAccessible = true;
        if (isOutputDs) {
            const outputDs = (widgetsJson === null || widgetsJson === void 0 ? void 0 : widgetsJson.outputDataSources) || [];
            isDataSourceInProps = (outputDs === null || outputDs === void 0 ? void 0 : outputDs.filter(dsId => dataSourceId === dsId).length) > 0;
        }
        else {
            isDataSourceInProps = (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.filter(useDs => dataSourceId === useDs.dataSourceId).length) > 0;
        }
        if (typeof (dataSourceCreateStatus === null || dataSourceCreateStatus === void 0 ? void 0 : dataSourceCreateStatus[dataSourceId]) === 'boolean' && !(dataSourceCreateStatus === null || dataSourceCreateStatus === void 0 ? void 0 : dataSourceCreateStatus[dataSourceId])) {
            isDataSourceAccessible = false;
        }
        return isDataSourceInProps && dataSourceId && isDataSourceAccessible;
    };
    const onRemoveLayerButtonClick = (dsIndex) => {
        var _a;
        const isOutputDs = ((_a = datasourceConfig[dsIndex]) === null || _a === void 0 ? void 0 : _a.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService;
        if (!isOutputDs) {
            removeDsItem(dsIndex);
        }
        else {
            if (isLoadDatasourceSelector.current) {
                removeOutpuDs(dsIndex);
            }
            else {
                loadDatasourceSelector().then(() => {
                    removeOutpuDs(dsIndex);
                });
            }
        }
    };
    const removeOutpuDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((dsIndex) => {
        const outputDataSourceId = datasourceConfig[dsIndex].outputDataSourceId;
        const relatedWidgets = dataComponentsUtilsRef.current.getWidgetsUsingDsOrItsDescendantDss(outputDataSourceId, widgets);
        if (relatedWidgets.length === 0) {
            removeDsItem(dsIndex);
        }
        else {
            setDsToRemove(outputDataSourceId);
            setShowRemoveSearchItemWarning(true);
            setRemoveDsIndex(dsIndex);
        }
    });
    const removeDsItem = (dsIndex) => {
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true });
        newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.splice(dsIndex, 1);
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
        hideSidePopper();
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `w-100 mt-2 ${className || ''}`, css: STYLE },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.List, Object.assign({ className: 'w-100', itemsJson: Array.from(datasourceConfig).map((item, index) => {
                var _a;
                return ({
                    itemStateDetailContent: item,
                    itemKey: `${index}`,
                    itemStateChecked: showSourcePanel && index === dsConfigItemIndex,
                    itemStateTitle: item === null || item === void 0 ? void 0 : item.label,
                    itemStateIcon: { icon: (_a = item.icon) === null || _a === void 0 ? void 0 : _a.svg },
                    itemStateCommands: [
                        {
                            label: nls('deleteOption'),
                            iconProps: () => ({ icon: IconClose, size: 12 }),
                            action: () => {
                                onRemoveLayerButtonClick(index);
                            }
                        }
                    ]
                });
            }), dndEnabled: true, renderOverrideItemDetailToggle: (actionData, refComponent) => {
                var _a;
                const { itemJsons } = refComponent.props;
                const [currentItemJson] = itemJsons;
                const itemStateDetailContent = currentItemJson === null || currentItemJson === void 0 ? void 0 : currentItemJson.itemStateDetailContent;
                const isGeocodeService = (itemStateDetailContent === null || itemStateDetailContent === void 0 ? void 0 : itemStateDetailContent.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService;
                const dsId = isGeocodeService ? itemStateDetailContent === null || itemStateDetailContent === void 0 ? void 0 : itemStateDetailContent.outputDataSourceId : (_a = itemStateDetailContent === null || itemStateDetailContent === void 0 ? void 0 : itemStateDetailContent.useDataSource) === null || _a === void 0 ? void 0 : _a.dataSourceId;
                const isDataError = createOutputDs ? !isDataSourceAccessible(dsId, isGeocodeService) : false;
                const isUtilityAvaible = utilityAvaibleState === null || utilityAvaibleState === void 0 ? void 0 : utilityAvaibleState[itemStateDetailContent.configId];
                if (isGeocodeService && !isUtilityAvaible) {
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { className: 'warning-alert-con', buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'warning', text: nls('utilityNotAvailable') }));
                }
                return (isDataError && dsId)
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { buttonType: 'tertiary', form: 'tooltip', size: 'small', type: 'error', text: nls('dataSourceCreateError') })
                    : '';
            }, onUpdateItem: (actionData, refComponent) => {
                const { itemJsons } = refComponent.props;
                const [, parentItemJson] = itemJsons;
                const newDatasourceConfig = parentItemJson.map(item => {
                    return item.itemStateDetailContent;
                });
                onDsConfigIdChange(null);
                updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
            }, onClickItemBody: (actionData, refComponent) => {
                var _a;
                const { itemJsons: [currentItemJson] } = refComponent.props;
                const isGeocodeSource = ((_a = currentItemJson === null || currentItemJson === void 0 ? void 0 : currentItemJson.itemStateDetailContent) === null || _a === void 0 ? void 0 : _a.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService;
                onDsConfigIdChange(+currentItemJson.itemKey, isGeocodeSource);
            } }, AdvancedActionMap)),
        showNewSourceItem && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_1__.List, Object.assign({ className: 'setting-ui-unit-list-new', itemsJson: [{
                    name: '......'
                }].map((item, x) => ({
                itemStateDetailContent: 'item',
                itemKey: 'index',
                itemStateChecked: true,
                itemStateTitle: '......',
                itemStateCommands: []
            })), dndEnabled: false, renderOverrideItemDetailToggle: () => '' }, AdvancedActionMap)),
        DataSourceRemoveWarningPopup && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataSourceRemoveWarningPopup, { dataSourceId: dsToRemove, isOpen: showRemoveSearchItemWarning, toggle: hideRemovePopup, reason: DataSourceRemoveWaringReasonRef.current.DataSourceRemoved, afterRemove: afterRemovingDataSource, beforeRemove: beforeRemovingDataSource })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatasourceList);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/display-field-select.tsx":
/*!****************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/display-field-select.tsx ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/list-tree */ "jimu-ui/basic/list-tree");
/** @jsx jsx */




const DisplayFieldSelect = (props) => {
    const advancedActionMap = {
        overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
            return {
                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItem,
                children: [{
                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemDroppableContainer,
                        children: [{
                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemDraggableContainer,
                                children: [{
                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemBody,
                                        children: [{
                                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemMainLine,
                                                children: [{
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemDragHandle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemIcon,
                                                        autoCollapsed: true
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemTitle
                                                    }, {
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.TreeItemActionType.RenderOverrideItemCommands
                                                    }]
                                            }]
                                    }]
                            }]
                    }]
            };
        }
    };
    const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `;
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { disPlayField, useDataSource, onFieldChange } = props;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.FieldSelector, { useDataSources: useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), onChange: (allSelectedFields) => { onFieldChange(allSelectedFields, disPlayField, true); }, selectedFields: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(disPlayField === null || disPlayField === void 0 ? void 0 : disPlayField.map(field => field === null || field === void 0 ? void 0 : field.name)), isMultiple: true, isSearchInputHidden: false, isDataSourceDropDownHidden: true, useDropdown: true, useMultiDropdownBottomTools: true, types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String]) }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: STYLE },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_3__.List, Object.assign({ size: 'sm', className: 'mt-2', itemsJson: Array.from(disPlayField).map((field, index) => ({
                    itemStateDetailContent: field,
                    itemKey: `${field === null || field === void 0 ? void 0 : field.name}${index}`,
                    itemStateIcon: jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.dataComponentsUtils.getIconFromFieldType(field.type, theme),
                    itemStateTitle: field.alias || field.jimuName || field.name,
                    itemStateCommands: []
                })), dndEnabled: true, onUpdateItem: (actionData, refComponent) => {
                    const { itemJsons } = refComponent.props;
                    const [, parentItemJson] = itemJsons;
                    const newDisplayField = parentItemJson.map(item => {
                        return item.itemStateDetailContent;
                    });
                    onFieldChange(newDisplayField, disPlayField, true);
                } }, advancedActionMap)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayFieldSelect);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/index.tsx":
/*!*************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/index.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchDataSetting: () => (/* binding */ SearchDataSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _type_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/type */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/* harmony import */ var _set_layer_source_side_popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-layer-source-side-popper */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/set-layer-source-side-popper.tsx");
/* harmony import */ var _set_locator_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-locator-source */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/set-locator-source.tsx");
/* harmony import */ var _datasource_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datasource-list */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/datasource-list.tsx");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/util */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/util.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */










const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;
const { useRef, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const SearchDataSetting = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const appTheme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const { datasourceConfig, id, useDataSources, searchDataSettingType, createOutputDs, hideIconSetting, enableFiltering, onSettingChange, onOutputDsSettingChange, onEnableFilteringChange } = props;
    const sourceListRef = useRef(null);
    const sidePopperTrigger = useRef(null);
    const [open, setOpen] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [showLayerSourcePanel, setShowLayerSourcePanel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [showLocatorSourcePanel, setShowLocatorSourcePanel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [showNewSourceItem, setShowNewSourceItem] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [dsConfigItemIndex, setDsConfigItemIndex] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [popperFocusNode, setPopperFocusNode] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [dsCreateStatus, setDsCreateStatus] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({}));
    const widgetsJson = useSelector((state) => { var _a, _b, _c; return (_c = (_b = (_a = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets) === null || _c === void 0 ? void 0 : _c[id]; });
    const utilitiesInConfig = useSelector((state) => {
        return state.appStateInBuilder.appConfig.utilities;
    });
    const DropDownStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    & {
      background-color: ${(_c = (_b = (_a = appTheme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.secondary) === null || _c === void 0 ? void 0 : _c[400]};
    }
  `;
    const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .data-remind {
      color: ${(_f = (_e = (_d = appTheme.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.dark) === null || _f === void 0 ? void 0 : _f[500]};
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
    }
  `;
    useEffect(() => {
        createOutputDs && checkAndInitOutputDs();
        // eslint-disable-next-line
    }, [datasourceConfig]);
    useEffect(() => {
        deleteSearchTemplateWhenUtilityNotExist(utilitiesInConfig);
        // eslint-disable-next-line
    }, [utilitiesInConfig]);
    const deleteSearchTemplateWhenUtilityNotExist = (utilitiesInConfig) => {
        let isHasRemoveTemplate = false;
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.filter(item => {
            var _a;
            if ((item === null || item === void 0 ? void 0 : item.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.FeatureService) {
                return true;
            }
            else {
                const useUtilityId = (_a = item === null || item === void 0 ? void 0 : item.useUtility) === null || _a === void 0 ? void 0 : _a.utilityId;
                if (!useUtilityId)
                    return true;
                if (!(utilitiesInConfig === null || utilitiesInConfig === void 0 ? void 0 : utilitiesInConfig[useUtilityId])) {
                    isHasRemoveTemplate = true;
                    return false;
                }
                else {
                    return true;
                }
            }
        });
        isHasRemoveTemplate && updateConfigForLayerOptions(newDatasourceConfig);
    };
    /**
     * Check is output datasource in current widget json, if not, create output datasource
    */
    const checkAndInitOutputDs = () => {
        const outputDataSources = (widgetsJson === null || widgetsJson === void 0 ? void 0 : widgetsJson.outputDataSources) || [];
        const newDatasourceConfig = (datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true })) || [];
        for (let i; i < (newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.length) - 1; i++) {
            const dsConfigItem = newDatasourceConfig[i];
            if ((dsConfigItem === null || dsConfigItem === void 0 ? void 0 : dsConfigItem.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.FeatureService)
                continue;
            const ouputDsId = dsConfigItem === null || dsConfigItem === void 0 ? void 0 : dsConfigItem.outputDataSourceId;
            if (!(outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.includes(ouputDsId))) {
                updateConfigForLayerOptions(datasourceConfig);
                break;
            }
        }
    };
    /**
     * Toggle new search source dropdown list
     */
    const toggleNewSource = () => {
        setOpen(!open);
    };
    const dsStatusChange = (dsId, isDsCreateSuccess = false) => {
        const newDsCreateStatus = dsCreateStatus.set(dsId, isDsCreateSuccess);
        setDsCreateStatus(newDsCreateStatus);
    };
    /**
     * Fire callback after add new source
     */
    const onDsConfigIdChange = (configItemIndex, isGeocodeSource) => {
        setShowNewSourceItem(false);
        if (!(typeof (configItemIndex) === 'number')) {
            hideSidePopper();
            return;
        }
        setSidePopperAnchor(configItemIndex, false);
        if (dsConfigItemIndex === configItemIndex) {
            if (isGeocodeSource) {
                setShowLocatorSourcePanel(!showLocatorSourcePanel);
                setShowLayerSourcePanel(false);
            }
            else {
                setShowLayerSourcePanel(!showLayerSourcePanel);
                setShowLocatorSourcePanel(false);
            }
        }
        else {
            setDsConfigItemIndex(configItemIndex);
            if (isGeocodeSource) {
                setShowLocatorSourcePanel(true);
                setShowLayerSourcePanel(false);
            }
            else {
                setShowLayerSourcePanel(true);
                setShowLocatorSourcePanel(false);
            }
        }
    };
    /**
     * Close side popper
     */
    const hideSidePopper = () => {
        setShowLocatorSourcePanel(false);
        setShowLayerSourcePanel(false);
        setDsConfigItemIndex(null);
    };
    const opentSourcePanel = (isLayerSource) => {
        const isShowSourcePanel = isLayerSource ? !showLocatorSourcePanel : !showLayerSourcePanel;
        setShowNewSourceItem(isShowSourcePanel);
        if (isShowSourcePanel) {
            const index = (datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.length) || 0;
            setDsConfigItemIndex(index);
            setSidePopperAnchor(index, true);
        }
        isLayerSource ? setShowLayerSourcePanel(isShowSourcePanel) : setShowLocatorSourcePanel(isShowSourcePanel);
    };
    const showSourcePanel = () => {
        var _a;
        const isGeocodeSource = ((_a = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig[dsConfigItemIndex]) === null || _a === void 0 ? void 0 : _a.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService;
        return isGeocodeSource ? showLocatorSourcePanel : showLayerSourcePanel;
    };
    /**
     * Update config after datasources config change
     */
    const updateConfigForLayerOptions = (newDatasourceConfig) => {
        if (checkIsNewLayer(newDatasourceConfig)) {
            setShowNewSourceItem(false);
        }
        const allDataSources = getAllDatasource(newDatasourceConfig);
        const dsInWidgetJson = getDsInWidgetJson(allDataSources);
        if (createOutputDs) {
            onOutputDsSettingChange && onOutputDsSettingChange(allDataSources.outputDataSources, newDatasourceConfig, dsInWidgetJson);
        }
        else {
            onSettingChange && onSettingChange(newDatasourceConfig, dsInWidgetJson);
        }
    };
    /**
     * Get all useDatasources and outputDatasources
     */
    const getAllDatasource = (datasourceConfig) => {
        var _a;
        const allDataSources = (_a = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true })) === null || _a === void 0 ? void 0 : _a.reduce((currentDsMap, dsCogfigItem) => {
            // add useDataSource
            const useDataSource = dsCogfigItem === null || dsCogfigItem === void 0 ? void 0 : dsCogfigItem.useDataSource;
            if (useDataSource) {
                if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.isDsInDatasources)(useDataSource, currentDsMap === null || currentDsMap === void 0 ? void 0 : currentDsMap.useDataSources)) {
                    currentDsMap === null || currentDsMap === void 0 ? void 0 : currentDsMap.useDataSources.push(useDataSource);
                }
                else {
                    currentDsMap.useDataSources = concatFieldsOFSameUseDataSources(useDataSource, currentDsMap === null || currentDsMap === void 0 ? void 0 : currentDsMap.useDataSources);
                }
            }
            if (createOutputDs) {
                // add outputDataSource
                const outputDsJson = getOutputDsJson(dsCogfigItem);
                outputDsJson && currentDsMap.outputDataSources.push(outputDsJson);
            }
            return currentDsMap;
        }, { useDataSources: [], outputDataSources: [] });
        return allDataSources;
    };
    const concatFieldsOFSameUseDataSources = (useDataSource, currentDsMap) => {
        return currentDsMap.map(ds => {
            const isSameDs = (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId) === (ds === null || ds === void 0 ? void 0 : ds.dataSourceId);
            if (isSameDs) {
                const dsFields = (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.fields) || [];
                const dsFieldsInUseDatasourceMap = (ds === null || ds === void 0 ? void 0 : ds.fields) || [];
                const fieldsArrary = Array.from(new Set(dsFieldsInUseDatasourceMap.concat(dsFields)));
                ds.fields = fieldsArrary;
            }
            return ds;
        });
    };
    const getOutputDsJson = (dsCogfigItem) => {
        let outputDataSourceJson;
        if ((dsCogfigItem === null || dsCogfigItem === void 0 ? void 0 : dsCogfigItem.searchServiceType) === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchServiceType.GeocodeService) {
            outputDataSourceJson = {
                id: dsCogfigItem === null || dsCogfigItem === void 0 ? void 0 : dsCogfigItem.outputDataSourceId,
                type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
                label: dsCogfigItem === null || dsCogfigItem === void 0 ? void 0 : dsCogfigItem.label,
                originDataSources: [],
                isOutputFromWidget: true,
                isDataInDataSourceInstance: false,
                schema: (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.getInitSchema)(dsCogfigItem === null || dsCogfigItem === void 0 ? void 0 : dsCogfigItem.label, dsCogfigItem === null || dsCogfigItem === void 0 ? void 0 : dsCogfigItem.addressFields),
                geometryType: 'esriGeometryPoint'
            };
        }
        return outputDataSourceJson;
    };
    /**
     * get new ds in widgetJson after select layer.
     */
    const getDsInWidgetJson = (allDataSources, outputDataSourcesJson) => {
        var _a;
        const udpateWidgetJson = { id: id };
        // Instead of function onSettingChange, use action to change widget json, which can avoid conflict.
        // Because editing widget json in builder needs pub-sub and pub-sub is async.
        udpateWidgetJson.useDataSources = allDataSources === null || allDataSources === void 0 ? void 0 : allDataSources.useDataSources;
        if (createOutputDs) {
            udpateWidgetJson.outputDataSources = (_a = allDataSources === null || allDataSources === void 0 ? void 0 : allDataSources.outputDataSources) === null || _a === void 0 ? void 0 : _a.map(outputDs => {
                return outputDs === null || outputDs === void 0 ? void 0 : outputDs.id;
            });
        }
        return {
            dsInWidgetJson: udpateWidgetJson,
            isWidgetJsonDsChanged: (0,_utils_util__WEBPACK_IMPORTED_MODULE_8__.checkIsWidgetJsonDsChanged)(widgetsJson, udpateWidgetJson.useDataSources, udpateWidgetJson.outputDataSources)
        };
    };
    /**
     * Check is a new layer
     */
    const checkIsNewLayer = (newDatasourceConfig) => {
        return (newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.length) !== (datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.length);
    };
    const locatorSourcePanelToggle = () => {
        if (showLocatorSourcePanel) {
            setDsConfigItemIndex(null);
        }
        setShowLocatorSourcePanel(!showLocatorSourcePanel);
        setShowNewSourceItem(false);
        removeUnaccessibleSearchData();
    };
    const layerSourcePanelToggle = () => {
        if (showLayerSourcePanel) {
            setDsConfigItemIndex(null);
        }
        setShowLayerSourcePanel(!showLayerSourcePanel);
        setShowNewSourceItem(false);
        removeUnaccessibleSearchData();
    };
    const removeUnaccessibleSearchData = () => {
        var _a;
        const newDatasourceConfig = (_a = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true })) === null || _a === void 0 ? void 0 : _a.filter(item => {
            return ((item === null || item === void 0 ? void 0 : item.useDataSource) || (item === null || item === void 0 ? void 0 : item.useUtility));
        });
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    const setSidePopperAnchor = (index, newAdded = false) => {
        let node;
        if (newAdded) {
            node = sidePopperTrigger.current.getElementsByClassName('add-search-btn')[0];
        }
        else {
            node = sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index];
        }
        setPopperFocusNode(node);
    };
    const handleEnableFiltering = (evt) => {
        const value = evt.target.checked;
        onEnableFilteringChange && onEnableFilteringChange(value);
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { css: STYLE },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'w-100 data-remind' }, nls('addSources'))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100', ref: sidePopperTrigger },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (!searchDataSettingType || searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.Both) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { className: 'w-100', size: 'sm', toggle: toggleNewSource, isOpen: open, autoWidth: true },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { className: 'add-search-btn w-100', title: nls('newSearchSource'), arrow: false, icon: true, type: 'primary' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, { className: 'mr-1 d-inline-block', autoFlip: true }),
                                nls('newSearchSource')),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { css: DropDownStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { className: 'w-100', onClick: () => { opentSourcePanel(true); }, title: nls('layerSource') }, nls('layerSource')),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { className: 'w-100', onClick: () => { opentSourcePanel(false); }, title: nls('locatorSource') }, nls('locatorSource')))),
                        searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.FeatureService && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'primary', className: 'w-100 add-search-btn', onClick: () => { opentSourcePanel(true); } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, { className: 'mr-1 d-inline-block', autoFlip: true }),
                            nls('layerSource')),
                        searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.GeocodeService && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'primary', className: 'w-100 add-search-btn', onClick: () => { opentSourcePanel(false); } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, { className: 'mr-1 d-inline-block', autoFlip: true }),
                            nls('locatorSource'))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100', ref: sourceListRef },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_datasource_list__WEBPACK_IMPORTED_MODULE_7__["default"], { id: id, dsConfigItemIndex: dsConfigItemIndex, datasourceConfig: datasourceConfig || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), showSourcePanel: showSourcePanel(), useDataSources: useDataSources, onDsConfigIdChange: onDsConfigIdChange, showNewSourceItem: showNewSourceItem, updateConfigForLayerOptions: updateConfigForLayerOptions, hideSidePopper: hideSidePopper, createOutputDs: createOutputDs, dataSourceCreateStatus: dsCreateStatus }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_set_layer_source_side_popper__WEBPACK_IMPORTED_MODULE_5__["default"], { id: id, dsConfigItemIndex: dsConfigItemIndex, datasourceConfig: datasourceConfig || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), useDataSources: useDataSources, isOpen: showLayerSourcePanel, onSettingChange: onSettingChange, trigger: sourceListRef === null || sourceListRef === void 0 ? void 0 : sourceListRef.current, updateConfigForLayerOptions: updateConfigForLayerOptions, toggle: layerSourcePanelToggle, dsStatusChange: dsStatusChange, popperFocusNode: popperFocusNode, hideIconSetting: hideIconSetting }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_set_locator_source__WEBPACK_IMPORTED_MODULE_6__["default"], { id: id, dsConfigItemIndex: dsConfigItemIndex, datasourceConfig: datasourceConfig || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), useDataSources: useDataSources, isOpen: showLocatorSourcePanel, onSettingChange: onSettingChange, updateConfigForLayerOptions: updateConfigForLayerOptions, trigger: sourceListRef === null || sourceListRef === void 0 ? void 0 : sourceListRef.current, toggle: locatorSourcePanelToggle, popperFocusNode: popperFocusNode, hideIconSetting: hideIconSetting, createOutputDs: createOutputDs }))),
        (searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.Both || searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.FeatureService) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: nls('enableSearchFilter') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: enableFiltering, onChange: handleEnableFiltering, title: nls('enableSearchFilter') }))),
        (searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.Both || searchDataSettingType === _type_type__WEBPACK_IMPORTED_MODULE_3__.SearchDataType.FeatureService) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null)));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/set-layer-source-side-popper.tsx":
/*!************************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/set-layer-source-side-popper.tsx ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/resource-selector */ "jimu-ui/advanced/resource-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _type_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/type */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/util */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/util.ts");
/* harmony import */ var _display_field_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-field-select */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/display-field-select.tsx");
/** @jsx jsx */








const { useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const SUPPORTED_TYPES = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
const LayerSourceSidePopper = (props) => {
    var _a;
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const focusCloseButtonTimeoutRef = useRef(null);
    const { trigger, isOpen, id, datasourceConfig, dsConfigItemIndex, popperFocusNode, toggle, updateConfigForLayerOptions, onSettingChange, dsStatusChange, hideIconSetting } = props;
    const datasourceConfigItem = (datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig[dsConfigItemIndex]) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const { configId, label, icon, searchFields, searchExact, displayFields, hint, useDataSource } = datasourceConfigItem;
    const [datasource, setDatasource] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(null);
    const [newLabel, setNewLabel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(label);
    useEffect(() => {
        if (configId) {
            setNewLabel(label);
        }
        // eslint-disable-next-line
    }, [configId]);
    useEffect(() => {
        if (configId && label !== newLabel) {
            setNewLabel(label);
        }
        // eslint-disable-next-line
    }, [datasourceConfigItem]);
    useEffect(() => {
        // focus the back button when it is open
        if (isOpen) {
            clearTimeout(focusCloseButtonTimeoutRef.current);
            focusCloseButtonTimeoutRef.current = setTimeout(() => {
                const closeButton = document.querySelector('.search-ds-setting-popper .action-close');
                closeButton === null || closeButton === void 0 ? void 0 : closeButton.focus();
            }, 200);
        }
    }, [isOpen]);
    /**
     * Create output datasource by useDatasource
     */
    const createOutputDsByUseDatasource = (useDataSource) => {
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().createDataSourceByUseDataSource((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSource)).then((originDs) => {
            const dsJsonOriginDs = (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getOutputJsonOriginDs)(originDs);
            if (!dsJsonOriginDs)
                Promise.reject(Error(''));
            return dsJsonOriginDs;
        }).then((dsJsonOriginDs) => {
            const { datasourceConfig } = getDatasourceConfig(dsJsonOriginDs, useDataSource);
            updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(datasourceConfig));
        });
    };
    /**
     * Get layer default config
     */
    const getDatasourceConfig = (dsJsonOriginDs, useDataSource) => {
        const configIdList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getConfigIdList)(datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true }));
        const nextDsConfigId = configId || (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getNewConfigId)(configIdList);
        let newDatasourceConfig = datasourceConfig ? datasourceConfig.asMutable({ deep: true }) : [];
        const queryItemLabel = dsJsonOriginDs === null || dsJsonOriginDs === void 0 ? void 0 : dsJsonOriginDs.getLabel();
        const defaultField = getDefaultField(useDataSource);
        useDataSource.fields = defaultField === null || defaultField === void 0 ? void 0 : defaultField.map(field => field === null || field === void 0 ? void 0 : field.jimuName);
        const dsConfigItem = {
            configId: nextDsConfigId,
            icon: null,
            label: queryItemLabel,
            displayLabel: true,
            useDataSource: useDataSource,
            displayFields: defaultField,
            searchFields: defaultField,
            hint: '',
            searchServiceType: _type_type__WEBPACK_IMPORTED_MODULE_5__.SearchServiceType.FeatureService
        };
        if (datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.configId) {
            newDatasourceConfig = newDatasourceConfig.map(el => {
                if ((el === null || el === void 0 ? void 0 : el.configId) === nextDsConfigId) {
                    return dsConfigItem;
                }
                else {
                    return el;
                }
            });
        }
        else {
            newDatasourceConfig.push(dsConfigItem);
        }
        return {
            dsConfigItem: dsConfigItem,
            datasourceConfig: newDatasourceConfig
        };
    };
    /**
     * Get default field after add layer
    */
    const getDefaultField = (useDataSource) => {
        var _a, _b, _c, _d, _e;
        const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        const ds = dsManager.getDataSource(useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId);
        const displayFieldName = (_a = ds.getLayerDefinition()) === null || _a === void 0 ? void 0 : _a.displayField;
        const fields = (_b = ds === null || ds === void 0 ? void 0 : ds.getSchema()) === null || _b === void 0 ? void 0 : _b.fields;
        let displayField;
        const allFieldsData = [];
        for (const fieldKey in fields) {
            if (((_c = fields === null || fields === void 0 ? void 0 : fields[fieldKey]) === null || _c === void 0 ? void 0 : _c.type) !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date) {
                allFieldsData.push(fields === null || fields === void 0 ? void 0 : fields[fieldKey]);
            }
            if (((_d = fields === null || fields === void 0 ? void 0 : fields[fieldKey]) === null || _d === void 0 ? void 0 : _d.name) === displayFieldName && ((_e = fields === null || fields === void 0 ? void 0 : fields[fieldKey]) === null || _e === void 0 ? void 0 : _e.type) !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date) {
                displayField = fields === null || fields === void 0 ? void 0 : fields[fieldKey];
            }
        }
        const defaultField = (allFieldsData === null || allFieldsData === void 0 ? void 0 : allFieldsData.length) > 1 ? allFieldsData[1] : allFieldsData[0];
        //If the feature layer has the Display field settings, the default search and display field should be the layer defined display field.
        return displayField ? [(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(displayField)] : [(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(defaultField)];
    };
    /**
     * Fire callback when datasource change.
     */
    const onDataChange = (useDataSources) => {
        if (useDataSources && useDataSources.length > 0) {
            createOutputDsByUseDatasource(useDataSources[0]);
        }
        else {
            removeDatsSource();
        }
    };
    const removeDatsSource = () => {
        const configIdList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getConfigIdList)(datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true }));
        const nextDsConfigId = configId || (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getNewConfigId)(configIdList);
        let newDatasourceConfig = datasourceConfig ? datasourceConfig.asMutable({ deep: true }) : [];
        const dsConfigItem = {
            configId: nextDsConfigId,
            icon: null,
            label: '......',
            displayLabel: true,
            useDataSource: null,
            displayFields: [],
            searchFields: [],
            hint: '',
            searchServiceType: _type_type__WEBPACK_IMPORTED_MODULE_5__.SearchServiceType.FeatureService
        };
        newDatasourceConfig = newDatasourceConfig.map(el => {
            if ((el === null || el === void 0 ? void 0 : el.configId) === nextDsConfigId) {
                return dsConfigItem;
            }
            else {
                return el;
            }
        });
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    /**
     * Fire callback when searching fields change.
     */
    const onFieldChange = (allSelectedFields, preFields, isDisplayField = false) => {
        var _a, _b;
        if (!allSelectedFields)
            return;
        const fieldName = isDisplayField ? 'displayFields' : 'searchFields';
        let filteredFields = filterFields(allSelectedFields);
        //At least one field is selected
        if ((filteredFields === null || filteredFields === void 0 ? void 0 : filteredFields.length) === 0) {
            filteredFields = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(preFields)) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })) === null || _b === void 0 ? void 0 : _b.splice(0, 1);
        }
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true });
        let newDatasourceConfigItem = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.setIn([fieldName], filteredFields);
        newDatasourceConfigItem = initNewDatasourceConfigByField(newDatasourceConfigItem);
        newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.splice(dsConfigItemIndex, 1, newDatasourceConfigItem === null || newDatasourceConfigItem === void 0 ? void 0 : newDatasourceConfigItem.asMutable({ deep: true }));
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    const initNewDatasourceConfigByField = (datasourceConfigItem) => {
        var _a, _b, _c, _d;
        const searchFieldNameArr = ((_b = (_a = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.searchFields) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })) === null || _b === void 0 ? void 0 : _b.map(item => item === null || item === void 0 ? void 0 : item.jimuName)) || [];
        const displayFieldsNameArr = ((_d = (_c = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.displayFields) === null || _c === void 0 ? void 0 : _c.asMutable({ deep: true })) === null || _d === void 0 ? void 0 : _d.map(item => item === null || item === void 0 ? void 0 : item.jimuName)) || [];
        const dsFields = Array.from(new Set(searchFieldNameArr.concat(displayFieldsNameArr)));
        return datasourceConfigItem.setIn(['useDataSource', 'fields'], dsFields);
    };
    /**
     * Filter fields after fields changed
     */
    const filterFields = (newTableFields) => {
        const fields = newTableFields === null || newTableFields === void 0 ? void 0 : newTableFields.filter(item => {
            return (item === null || item === void 0 ? void 0 : item.type) !== (jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType === null || jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType === void 0 ? void 0 : jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date);
        });
        return fields;
    };
    /**
     * Fire callback when change layer config.
     */
    const onConfigItemChange = (key, value) => {
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true });
        const newDatasourceConfigItem = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.setIn(key, value);
        newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.splice(dsConfigItemIndex, 1, newDatasourceConfigItem === null || newDatasourceConfigItem === void 0 ? void 0 : newDatasourceConfigItem.asMutable({ deep: true }));
        onSettingChange((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    const handleCheckboxChange = (evt) => {
        onConfigItemChange(['searchExact'], !searchExact);
    };
    const handleLabelChange = (event) => {
        var _a;
        const value = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        setNewLabel(value);
    };
    const handleLabelAccept = value => {
        if (!value) {
            setNewLabel(label);
        }
        else {
            setNewLabel(value === null || value === void 0 ? void 0 : value.trim());
            onConfigItemChange(['label'], value === null || value === void 0 ? void 0 : value.trim());
        }
    };
    const handleHintChange = (event) => {
        var _a;
        const value = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        onConfigItemChange(['hint'], value);
    };
    /**
     * Fire callback when the datasource created.
     */
    const onDsCreate = ds => {
        setDatasource(ds);
        ds && dsStatusChange(ds.id, true);
    };
    const onCreateDataSourceFailed = err => {
        if (!(datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useDataSource))
            return false;
        const dsId = datasourceConfigItem.useDataSource.dataSourceId;
        dsStatusChange(dsId, false);
    };
    /**
     * Render layer setting
     */
    const renderSourceSetting = () => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('label') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { "aria-label": nls('label'), size: 'sm', value: newLabel || '', onAcceptValue: handleLabelAccept, onChange: handleLabelChange, className: 'w-100', placeholder: nls('findAddressOrPlace') }))),
            !hideIconSetting && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: nls('searchIcon') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__.IconPicker, { icon: icon, onChange: (icon) => { onConfigItemChange(['icon'], icon); }, configurableOption: 'none', setButtonUseColor: false }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: nls('searchOptions'), role: 'group', "aria-label": nls('searchOptions') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('selectSearchFields'), role: 'group', "aria-label": nls('selectSearchFields') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.FieldSelectorWithFullTextIndex, { useDataSources: useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), onChange: (allSelectedFields) => { onFieldChange(allSelectedFields, searchFields); }, selectedFields: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(searchFields === null || searchFields === void 0 ? void 0 : searchFields.map(field => field === null || field === void 0 ? void 0 : field.name)), isMultiple: true, isSearchInputHidden: false, isDataSourceDropDownHidden: true, useDropdown: true, useMultiDropdownBottomTools: true, widgetId: id, types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String]) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'mt-2', "aria-label": nls('exactMatch'), onClick: handleCheckboxChange },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Checkbox, { title: nls('exactMatch'), checked: searchExact, className: 'mr-1' }),
                        nls('exactMatch'))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('displayFields'), role: 'group', "aria-label": nls('displayFields') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_display_field_select__WEBPACK_IMPORTED_MODULE_7__["default"], { disPlayField: displayFields || [], onFieldChange: onFieldChange, useDataSource: useDataSource })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('searchHint') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { size: 'sm', value: hint || '', title: hint || nls('findAddressOrPlace'), "aria-label": nls('searchHint'), onChange: handleHintChange, className: 'w-100', placeholder: nls('findAddressOrPlace') })))));
    };
    const useDataSources = (datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useDataSource) ? [(_a = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useDataSource) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })] : [];
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SidePopper, { className: 'search-ds-setting-popper', isOpen: isOpen, position: 'right', toggle: toggle, trigger: trigger, title: nls('setLayerSource'), backToFocusNode: popperFocusNode },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `overflow: auto;` },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { style: { paddingTop: 0 } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('data') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { closeDataSourceListOnChange: true, types: SUPPORTED_TYPES, useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSources), disableRemove: () => true, mustUseDataSource: true, onChange: onDataChange, widgetId: id }))),
            ((datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.configId) && datasource) && renderSourceSetting(),
            (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0]) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'waiting-for-database' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(useDataSources[0]), onDataSourceCreated: onDsCreate, onCreateDataSourceFailed: onCreateDataSourceFailed })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayerSourceSidePopper);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/set-locator-source.tsx":
/*!**************************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/set-locator-source.tsx ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_utility_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/utility-selector */ "jimu-ui/advanced/utility-selector");
/* harmony import */ var jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/resource-selector */ "jimu-ui/advanced/resource-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _type_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/type */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/util */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/util.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/constants.ts");
/* harmony import */ var _display_field_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-field-select */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/display-field-select.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */









const { useEffect, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
var UrlCheckResultType;
(function (UrlCheckResultType) {
    UrlCheckResultType["Pass"] = "Pass";
    UrlCheckResultType["NotHttps"] = "Not_Https";
    UrlCheckResultType["InvalidURL"] = "Invalid_URL";
})(UrlCheckResultType || (UrlCheckResultType = {}));
const supportedUtilityTypes = [jimu_core__WEBPACK_IMPORTED_MODULE_0__.SupportedUtilityType.GeoCoding];
const LocatorSourceSidePopper = (props) => {
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const focusCloseButtonTimeoutRef = useRef(null);
    const { id, trigger, toggle, isOpen, datasourceConfig, dsConfigItemIndex, popperFocusNode, createOutputDs, onSettingChange, updateConfigForLayerOptions, hideIconSetting } = props;
    const datasourceConfigItem = (datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig[dsConfigItemIndex]) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const { configId, label, icon, hint, outputDataSourceId, displayFields } = datasourceConfigItem;
    const [newLabel, setNewLabel] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(label);
    const [isvalidateServiceEnd, setIsvalidateServiceEnd] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const [urlCheckResults, setUrlCheckResultType] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(UrlCheckResultType.Pass);
    const [useUtility, setUseUtility] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useUtility);
    const [showLoading, setShowLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    useEffect(() => {
        // focus the back button when it is open
        if (isOpen) {
            clearTimeout(focusCloseButtonTimeoutRef.current);
            focusCloseButtonTimeoutRef.current = setTimeout(() => {
                const closeButton = document.querySelector('.search-locator-setting-popper .action-close');
                closeButton === null || closeButton === void 0 ? void 0 : closeButton.focus();
            }, 200);
        }
    }, [isOpen]);
    useEffect(() => {
        if (!isOpen)
            return;
        setUrlCheckResultType(UrlCheckResultType.Pass);
        setShowLoading(false);
        if (datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useUtility) {
            //Check if geocode service url is available
            getUrlOfUseUtility(datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useUtility).then(url => {
                validateGeocodeService(url).then(urlCheckResult => {
                    setUrlCheckResultType(urlCheckResult === null || urlCheckResult === void 0 ? void 0 : urlCheckResult.urlCheckResultType);
                });
            });
            setUseUtility(datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.useUtility);
            setNewLabel(datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.label);
        }
        else {
            setUseUtility(null);
            setNewLabel(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.DefaultGeocodeLabel);
        }
        // eslint-disable-next-line
    }, [dsConfigItemIndex, configId, isOpen]);
    useEffect(() => {
        setNewLabel(datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.label);
    }, [datasourceConfigItem]);
    /**
     * Update geocode config
     */
    const updateGeocodeConfig = (singleLineFieldName, useUtility, fields, isSupportSuggest) => {
        const configIdList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getConfigIdList)(datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true }));
        const nextDsConfigId = configId || (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getNewConfigId)(configIdList);
        let newDatasourceConfig = datasourceConfig ? datasourceConfig.asMutable({ deep: true }) : [];
        const label = getLabelOfUseUtility(useUtility);
        const defaultHint = getDefaultHintOfUseUtility(useUtility);
        // const label = getDefaultGeocodeLabel(geocodeServiceUrl)
        const { addressFieldsSchema, defaultAddressFieldName } = (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getAddressFieldsSchemaAndDefaultFieldName)(fields);
        const initDsConfigItem = {
            configId: nextDsConfigId,
            icon: null,
            label: label,
            hint: defaultHint,
            useUtility: useUtility,
            searchServiceType: _type_type__WEBPACK_IMPORTED_MODULE_5__.SearchServiceType.GeocodeService,
            singleLineFieldName: singleLineFieldName,
            isSupportSuggest: isSupportSuggest
        };
        if (createOutputDs) {
            initDsConfigItem.outputDataSourceId = `${id}_output_${nextDsConfigId}`;
            initDsConfigItem.addressFields = addressFieldsSchema;
            initDsConfigItem.displayFields = getDefaultDisplayField(addressFieldsSchema, defaultAddressFieldName);
            initDsConfigItem.defaultAddressFieldName = defaultAddressFieldName;
        }
        if (datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.configId) {
            newDatasourceConfig = datasourceConfig.map(el => {
                if ((el === null || el === void 0 ? void 0 : el.configId) === nextDsConfigId) {
                    return initDsConfigItem;
                }
                else {
                    return el;
                }
            });
        }
        else {
            newDatasourceConfig.push(initDsConfigItem);
        }
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    /**
     * Use address field as displayField by default
    */
    const getDefaultDisplayField = (addressFieldsSchema, defaultAddressFieldName) => {
        let addressSchema;
        addressFieldsSchema === null || addressFieldsSchema === void 0 ? void 0 : addressFieldsSchema.forEach(field => {
            var _a;
            if (((_a = field === null || field === void 0 ? void 0 : field.jimuName) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === defaultAddressFieldName) {
                addressSchema = field;
            }
        });
        if (!addressSchema) {
            addressSchema = addressFieldsSchema[0];
        }
        return [addressSchema];
    };
    /**
     * Check whether geocode service is legal
     */
    const validateGeocodeService = (geocodeServiceUrl) => __awaiter(void 0, void 0, void 0, function* () {
        const httpsRex = '^(([h][t]{2}[p][s])?://)';
        const urlRegExString = new RegExp(httpsRex);
        setIsvalidateServiceEnd(false);
        if (geocodeServiceUrl && urlRegExString.test(geocodeServiceUrl)) {
            try {
                return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModules)(['esri/request']).then(modules => {
                    const [esriRequest] = modules;
                    return esriRequest(geocodeServiceUrl, {
                        query: {
                            f: 'json'
                        },
                        responseType: 'json'
                    }).then(res => {
                        var _a;
                        const result = (res === null || res === void 0 ? void 0 : res.data) || {};
                        setIsvalidateServiceEnd(true);
                        if (result === null || result === void 0 ? void 0 : result.capabilities) {
                            const singleLineAddressField = (result === null || result === void 0 ? void 0 : result.singleLineAddressField) || {};
                            const addressFields = (result === null || result === void 0 ? void 0 : result.addressFields) || [];
                            const candidateFields = (result === null || result === void 0 ? void 0 : result.candidateFields) || [];
                            const capabilitiesArr = ((_a = result === null || result === void 0 ? void 0 : result.capabilities) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
                            const isSupportSuggest = capabilitiesArr === null || capabilitiesArr === void 0 ? void 0 : capabilitiesArr.includes('Suggest');
                            return Promise.resolve({
                                urlCheckResultType: UrlCheckResultType.Pass,
                                singleLineFieldName: singleLineAddressField === null || singleLineAddressField === void 0 ? void 0 : singleLineAddressField.name,
                                addressFields: addressFields,
                                isSupportSuggest: isSupportSuggest,
                                candidateFields: candidateFields
                            });
                        }
                        else {
                            return Promise.resolve({ urlCheckResultType: UrlCheckResultType.InvalidURL });
                        }
                    });
                });
            }
            catch (e) {
                setIsvalidateServiceEnd(true);
                return Promise.resolve({ urlCheckResultType: UrlCheckResultType.InvalidURL });
            }
        }
        else {
            setIsvalidateServiceEnd(true);
            return Promise.resolve({ urlCheckResultType: UrlCheckResultType.NotHttps });
        }
    });
    /**
     * Fire callback when change layer config.
     */
    const onConfigItemChange = (key, value) => {
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true });
        const newDatasourceConfigItem = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.setIn(key, value);
        newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.splice(dsConfigItemIndex, 1, newDatasourceConfigItem === null || newDatasourceConfigItem === void 0 ? void 0 : newDatasourceConfigItem.asMutable({ deep: true }));
        onSettingChange((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    const handleLabelChange = (event) => {
        var _a;
        const value = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        setNewLabel(value);
    };
    const handleLabelAccept = value => {
        if (!value) {
            setNewLabel(label);
        }
        else {
            setNewLabel(value === null || value === void 0 ? void 0 : value.trim());
            onConfigItemChange(['label'], value === null || value === void 0 ? void 0 : value.trim());
        }
    };
    const handleHintChange = (event) => {
        var _a;
        const value = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        onConfigItemChange(['hint'], value);
    };
    const handleUtilityChange = (utilities) => {
        const utility = utilities[0];
        setUseUtility(utility || null);
        if (!utility) {
            removeUtility();
        }
        else {
            setShowLoading(true);
            getUrlOfUseUtility(utility).then(url => {
                validateGeocodeService(url).then(urlCheckResult => {
                    setShowLoading(false);
                    setUrlCheckResultType(urlCheckResult === null || urlCheckResult === void 0 ? void 0 : urlCheckResult.urlCheckResultType);
                    if ((urlCheckResult === null || urlCheckResult === void 0 ? void 0 : urlCheckResult.urlCheckResultType) !== UrlCheckResultType.Pass) {
                        setUseUtility(null);
                    }
                    else {
                        const fields = urlCheckResult.addressFields.concat(urlCheckResult.candidateFields);
                        updateGeocodeConfig(urlCheckResult.singleLineFieldName, utility || null, fields, urlCheckResult === null || urlCheckResult === void 0 ? void 0 : urlCheckResult.isSupportSuggest);
                    }
                });
            });
        }
    };
    const removeUtility = () => {
        const configIdList = (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getConfigIdList)(datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true }));
        const nextDsConfigId = configId || (0,_utils_util__WEBPACK_IMPORTED_MODULE_6__.getNewConfigId)(configIdList);
        let newDatasourceConfig = datasourceConfig ? datasourceConfig.asMutable({ deep: true }) : [];
        // const label = getDefaultGeocodeLabel(geocodeServiceUrl)
        const initDsConfigItem = {
            configId: nextDsConfigId,
            icon: null,
            label: '.....',
            hint: '',
            useUtility: null,
            searchServiceType: _type_type__WEBPACK_IMPORTED_MODULE_5__.SearchServiceType.GeocodeService,
            singleLineFieldName: ''
        };
        newDatasourceConfig = datasourceConfig.map(el => {
            if ((el === null || el === void 0 ? void 0 : el.configId) === nextDsConfigId) {
                return initDsConfigItem;
            }
            else {
                return el;
            }
        });
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    const getUrlOfUseUtility = (useUtility) => __awaiter(void 0, void 0, void 0, function* () {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.UtilityManager.getInstance().getUrlOfUseUtility(useUtility)
            .then((url) => {
            return Promise.resolve(url);
        });
    });
    const getLabelOfUseUtility = (useUtility) => {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.UtilityManager.getInstance().getLabelOfUseUtility(useUtility);
    };
    const getDefaultHintOfUseUtility = (useUtility) => {
        var _a;
        const utilityJson = jimu_core__WEBPACK_IMPORTED_MODULE_0__.UtilityManager.getInstance().getUtilityJson(useUtility.utilityId);
        return (_a = utilityJson === null || utilityJson === void 0 ? void 0 : utilityJson.orgSetting) === null || _a === void 0 ? void 0 : _a.placeholder;
    };
    /**
     * Fire callback when display fields change.
     */
    const onDisplayFieldChange = (allSelectedFields, preFields, isDisplayField = false) => {
        var _a, _b;
        if (!allSelectedFields)
            return;
        //At least one field is selected
        if ((allSelectedFields === null || allSelectedFields === void 0 ? void 0 : allSelectedFields.length) === 0) {
            allSelectedFields = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(preFields)) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })) === null || _b === void 0 ? void 0 : _b.splice(0, 1);
        }
        const newDatasourceConfig = datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.asMutable({ deep: true });
        const newDatasourceConfigItem = datasourceConfigItem === null || datasourceConfigItem === void 0 ? void 0 : datasourceConfigItem.setIn(['displayFields'], allSelectedFields);
        newDatasourceConfig === null || newDatasourceConfig === void 0 ? void 0 : newDatasourceConfig.splice(dsConfigItemIndex, 1, newDatasourceConfigItem === null || newDatasourceConfigItem === void 0 ? void 0 : newDatasourceConfigItem.asMutable({ deep: true }));
        updateConfigForLayerOptions((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newDatasourceConfig));
    };
    const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &>div {
      padding: 0!important;
    }
  `;
    const getUseUtility = (useUtility) => {
        var _a;
        if (!useUtility)
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
        const utilities = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig) === null || _a === void 0 ? void 0 : _a.utilities;
        if (utilities === null || utilities === void 0 ? void 0 : utilities[useUtility.utilityId]) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([useUtility]);
        }
        else {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
        }
    };
    const renderUtilitySelector = () => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { style: { paddingTop: 0 } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('locatorSource') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100', css: STYLE },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_utility_selector__WEBPACK_IMPORTED_MODULE_2__.UtilitySelector, { useUtilities: getUseUtility(useUtility), onChange: handleUtilityChange, showRemove: false, types: supportedUtilityTypes, closePopupOnSelect: true })),
                (urlCheckResults !== UrlCheckResultType.Pass && isvalidateServiceEnd) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 align-items-center justify-content-between mt-1' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { form: "basic", type: "warning", className: "w-100", open: true, withIcon: true, text: nls('invalidUrlMessage') })))));
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SidePopper, { className: 'search-locator-setting-popper', isOpen: isOpen, position: 'right', toggle: toggle, trigger: trigger, title: nls('setLocatorSource'), backToFocusNode: popperFocusNode },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `overflow: auto;` },
            renderUtilitySelector(),
            showLoading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, null),
            (urlCheckResults === UrlCheckResultType.Pass && configId && useUtility) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('label') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { "aria-label": nls('label'), size: 'sm', value: newLabel || '', onChange: handleLabelChange, onAcceptValue: handleLabelAccept, className: 'w-100' }))),
                !hideIconSetting && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: nls('searchIcon') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__.IconPicker, { icon: icon, onChange: (icon) => { onConfigItemChange(['icon'], icon); }, configurableOption: 'none', setButtonUseColor: false }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: nls('searchOptions'), role: 'group', "aria-label": nls('searchOptions') },
                    outputDataSourceId && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('displayFields'), role: 'group', "aria-label": nls('displayFields') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_display_field_select__WEBPACK_IMPORTED_MODULE_8__["default"], { disPlayField: displayFields || [], onFieldChange: onDisplayFieldChange, useDataSource: {
                                dataSourceId: outputDataSourceId,
                                mainDataSourceId: outputDataSourceId
                            } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('searchHint') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.TextInput, { size: 'sm', "aria-label": nls('searchHint'), title: hint || nls('findAddressOrPlace'), value: hint || '', onChange: handleHintChange, className: 'w-100', placeholder: nls('findAddressOrPlace') })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocatorSourceSidePopper);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/general-search-setting.tsx":
/*!******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/general-search-setting.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchGeneralSetting: () => (/* binding */ SearchGeneralSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/** @jsx jsx */




const SearchGeneralSetting = (props) => {
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const { hint, onSettingChange } = props;
    const [newHint, setNewHint] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(hint);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
        setNewHint(hint);
        // eslint-disable-next-line
    }, [hint]);
    const handleHintChange = (event) => {
        var _a;
        const value = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        setNewHint(value);
    };
    const handHintAccept = value => {
        setNewHint(value);
        onSettingChange && onSettingChange(value);
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'general-setting-con' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', label: nls('multySearchHint') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { "aria-label": nls('multySearchHint'), title: newHint || nls('findAddressOrPlace'), size: 'sm', value: newHint, onChange: handleHintChange, onAcceptValue: handHintAccept, className: 'w-100', placeholder: nls('findAddressOrPlace') }))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/index.ts":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByFieldSeriesX: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.ByFieldSeriesX),
/* harmony export */   ByFieldSeriesY: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.ByFieldSeriesY),
/* harmony export */   DEFAULT_MAX_SUGGESTION: () => (/* reexport safe */ _type_type__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_SUGGESTION),
/* harmony export */   DefaultAddress: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.DefaultAddress),
/* harmony export */   DefaultGeocodeLabel: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.DefaultGeocodeLabel),
/* harmony export */   DefaultGeocodeURL: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.DefaultGeocodeURL),
/* harmony export */   MAX_RECENT_SEARCHES: () => (/* reexport safe */ _type_type__WEBPACK_IMPORTED_MODULE_0__.MAX_RECENT_SEARCHES),
/* harmony export */   MAX_SUGGESTION: () => (/* reexport safe */ _type_type__WEBPACK_IMPORTED_MODULE_0__.MAX_SUGGESTION),
/* harmony export */   MaxCategories: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.MaxCategories),
/* harmony export */   MaxPieces: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.MaxPieces),
/* harmony export */   MaxSeries: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.MaxSeries),
/* harmony export */   ObjectIdSchema: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.ObjectIdSchema),
/* harmony export */   OutStatisticFieldNameSplit: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OutStatisticFieldNameSplit),
/* harmony export */   OutputDsAddress: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OutputDsAddress),
/* harmony export */   OutputDsObjectField: () => (/* reexport safe */ _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OutputDsObjectField),
/* harmony export */   SearchDataSetting: () => (/* reexport safe */ _dataSetting__WEBPACK_IMPORTED_MODULE_3__.SearchDataSetting),
/* harmony export */   SearchDataType: () => (/* reexport safe */ _type_type__WEBPACK_IMPORTED_MODULE_0__.SearchDataType),
/* harmony export */   SearchGeneralSetting: () => (/* reexport safe */ _general_search_setting__WEBPACK_IMPORTED_MODULE_5__.SearchGeneralSetting),
/* harmony export */   SearchServiceType: () => (/* reexport safe */ _type_type__WEBPACK_IMPORTED_MODULE_0__.SearchServiceType),
/* harmony export */   SearchSuggestionSetting: () => (/* reexport safe */ _search_suggestion_setting__WEBPACK_IMPORTED_MODULE_4__.SearchSuggestionSetting),
/* harmony export */   checkIsUseDsChenged: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.checkIsUseDsChenged),
/* harmony export */   checkIsWidgetJsonDsChanged: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.checkIsWidgetJsonDsChanged),
/* harmony export */   getAddressFieldsSchemaAndDefaultFieldName: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getAddressFieldsSchemaAndDefaultFieldName),
/* harmony export */   getConfigIdList: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getConfigIdList),
/* harmony export */   getInitOutDataSource: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getInitOutDataSource),
/* harmony export */   getInitSchema: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getInitSchema),
/* harmony export */   getNameOfDefaultAddressField: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getNameOfDefaultAddressField),
/* harmony export */   getNewConfigId: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getNewConfigId),
/* harmony export */   getOutputDataSourceId: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getOutputDataSourceId),
/* harmony export */   getOutputJsonOriginDs: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getOutputJsonOriginDs),
/* harmony export */   getWhetherDsInUseDataSources: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.getWhetherDsInUseDataSources),
/* harmony export */   isDsInDatasources: () => (/* reexport safe */ _utils_util__WEBPACK_IMPORTED_MODULE_2__.isDsInDatasources)
/* harmony export */ });
/* harmony import */ var _type_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type/type */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/constants.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/util */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/util.ts");
/* harmony import */ var _dataSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataSetting */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/dataSetting/index.tsx");
/* harmony import */ var _search_suggestion_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-suggestion-setting */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/search-suggestion-setting.tsx");
/* harmony import */ var _general_search_setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-search-setting */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/general-search-setting.tsx");



//Component





/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/search-suggestion-setting.tsx":
/*!*********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/search-suggestion-setting.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchSuggestionSetting: () => (/* binding */ SearchSuggestionSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _type_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type/type */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/** @jsx jsx */






const SearchSuggestionSetting = (props) => {
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const appTheme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .check-box-label {
      color: ${appTheme.colors.palette.dark[800]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `;
    const { onSettingChange, hideRecentSearchSetting } = props;
    const settingConfig = props.settingConfig || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const { maxSuggestions, isUseCurrentLoation, isShowRecentSearches, recentSearchesMaxNumber } = settingConfig;
    const [newRecentSearchesMaxNumber, setRecentSearchesMaxNumber] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(recentSearchesMaxNumber);
    const [newMaxSuggestions, setMaxSuggestions] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(maxSuggestions);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
        setRecentSearchesMaxNumber(recentSearchesMaxNumber);
        setMaxSuggestions(maxSuggestions);
        // eslint-disable-next-line
    }, [settingConfig]);
    const onConfigChange = (key, value) => {
        const newSettingConfig = settingConfig.setIn(key, value);
        onSettingChange && onSettingChange(newSettingConfig);
    };
    const handleCurrentLocationChange = (evt) => {
        onConfigChange(['isUseCurrentLoation'], !isUseCurrentLoation);
    };
    const handleMaxSuggestionsChange = (e) => {
        const value = e.target.value;
        checkNumber(value, 0) && setMaxSuggestions(value);
    };
    const handleMaxSuggestionsAccept = value => {
        if (!value || value > _type_type__WEBPACK_IMPORTED_MODULE_2__.MAX_SUGGESTION) {
            value = maxSuggestions || _type_type__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_SUGGESTION;
            setMaxSuggestions(value);
        }
        checkNumber(value, 0) && onConfigChange(['maxSuggestions'], Number(value));
    };
    const handleRecentSearchesMaxNumberAccept = value => {
        if (!value) {
            value = recentSearchesMaxNumber || _type_type__WEBPACK_IMPORTED_MODULE_2__.MAX_RECENT_SEARCHES;
            setRecentSearchesMaxNumber(value);
        }
        checkNumber(value) && onConfigChange(['recentSearchesMaxNumber'], Number(value));
    };
    const handleRecentSearchesMaxNumberChange = (e) => {
        const value = e.target.value;
        checkNumber(value) && setRecentSearchesMaxNumber(value);
    };
    const checkNumber = (value, minimum = 1) => {
        if ((value === null || value === void 0 ? void 0 : value.length) === 0)
            return true;
        if (isNaN(Number(value))) {
            return false;
        }
        else {
            const numberVal = Number(value);
            return Number.isInteger(numberVal) && numberVal >= minimum;
        }
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: STYLE },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap', className: 'mt-2 checkbox-con', label: nls('maximumSuggestions') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: 'sm', "aria-label": nls('maximumSuggestions'), value: newMaxSuggestions, onChange: handleMaxSuggestionsChange, onAcceptValue: handleMaxSuggestionsAccept, className: 'w-100' })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'cursor-pointer', onClick: handleCurrentLocationChange, "aria-label": nls('useCurrentLocation') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: !!isUseCurrentLoation, className: 'mr-1', title: nls('useCurrentLocation') }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'check-box-label' }, nls('useCurrentLocation')))),
        !hideRecentSearchSetting && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: nls('recentSearches') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: isShowRecentSearches || false, title: nls('recentSearches'), onChange: (evt) => { onConfigChange(['isShowRecentSearches'], !isShowRecentSearches); } })),
        isShowRecentSearches && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: nls('maximumNumber') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: 'sm', "aria-label": nls('maximumNumber'), value: newRecentSearchesMaxNumber, onChange: handleRecentSearchesMaxNumberChange, onAcceptValue: handleRecentSearchesMaxNumberAccept, style: { width: '50px' } }))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/type/type.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MAX_SUGGESTION: () => (/* binding */ DEFAULT_MAX_SUGGESTION),
/* harmony export */   MAX_RECENT_SEARCHES: () => (/* binding */ MAX_RECENT_SEARCHES),
/* harmony export */   MAX_SUGGESTION: () => (/* binding */ MAX_SUGGESTION),
/* harmony export */   SearchDataType: () => (/* binding */ SearchDataType),
/* harmony export */   SearchServiceType: () => (/* binding */ SearchServiceType)
/* harmony export */ });
const DEFAULT_MAX_SUGGESTION = 6;
const MAX_SUGGESTION = 20;
const MAX_RECENT_SEARCHES = 6;
var SearchDataType;
(function (SearchDataType) {
    SearchDataType["Both"] = "Both";
    SearchDataType["GeocodeService"] = "GeocodeService";
    SearchDataType["FeatureService"] = "FeatureService";
})(SearchDataType || (SearchDataType = {}));
var SearchServiceType;
(function (SearchServiceType) {
    SearchServiceType["GeocodeService"] = "GeocodeService";
    SearchServiceType["FeatureService"] = "FeatureService";
})(SearchServiceType || (SearchServiceType = {}));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/constants.ts":
/*!**********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/constants.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByFieldSeriesX: () => (/* binding */ ByFieldSeriesX),
/* harmony export */   ByFieldSeriesY: () => (/* binding */ ByFieldSeriesY),
/* harmony export */   DefaultAddress: () => (/* binding */ DefaultAddress),
/* harmony export */   DefaultGeocodeLabel: () => (/* binding */ DefaultGeocodeLabel),
/* harmony export */   DefaultGeocodeURL: () => (/* binding */ DefaultGeocodeURL),
/* harmony export */   MaxCategories: () => (/* binding */ MaxCategories),
/* harmony export */   MaxPieces: () => (/* binding */ MaxPieces),
/* harmony export */   MaxSeries: () => (/* binding */ MaxSeries),
/* harmony export */   OutStatisticFieldNameSplit: () => (/* binding */ OutStatisticFieldNameSplit),
/* harmony export */   OutputDsAddress: () => (/* binding */ OutputDsAddress),
/* harmony export */   OutputDsObjectField: () => (/* binding */ OutputDsObjectField)
/* harmony export */ });
const ByFieldSeriesX = 'FieldName';
const ByFieldSeriesY = 'FieldValue';
const MaxCategories = 99;
const MaxPieces = 1000;
const MaxSeries = 20;
const OutStatisticFieldNameSplit = '__';
const OutputDsObjectField = 'objectid';
const OutputDsAddress = 'address';
const DefaultAddress = 'Default Address';
const DefaultGeocodeURL = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer';
const DefaultGeocodeLabel = 'ArcGIS World Geocoding Service';


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/geocode-utils.ts":
/*!**************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/geocode-utils.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultGeocodeLabel: () => (/* binding */ getDefaultGeocodeLabel),
/* harmony export */   getGeocodeName: () => (/* binding */ getGeocodeName),
/* harmony export */   getOrganizationGeocodeService: () => (/* binding */ getOrganizationGeocodeService),
/* harmony export */   isArcGISWorldGeocoder: () => (/* binding */ isArcGISWorldGeocoder),
/* harmony export */   isMeteredArcGISWorldGeocoder: () => (/* binding */ isMeteredArcGISWorldGeocoder),
/* harmony export */   isProxiedArcGISWorldGeocoder: () => (/* binding */ isProxiedArcGISWorldGeocoder)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/constants.ts");


const getDefaultGeocodeLabel = (geocodeUrl) => {
    if (isArcGISWorldGeocoder(geocodeUrl)) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__.DefaultGeocodeLabel;
    }
    else {
        return getGeocodeName(geocodeUrl);
    }
};
const getGeocodeName = (geocodeUrl) => {
    if (!geocodeUrl) {
        return 'geocoder';
    }
    const strs = geocodeUrl.split('/');
    return strs[strs.length - 2] || 'geocoder';
};
const isMeteredArcGISWorldGeocoder = (url) => {
    if (!url) {
        return false;
    }
    return /(?:geocode\-api\.arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(url);
};
const isProxiedArcGISWorldGeocoder = (url) => {
    if (!url) {
        return false;
    }
    return /(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(url);
};
const isArcGISWorldGeocoder = (url) => {
    if (!url) {
        return false;
    }
    return /(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(url);
};
const getOrganizationGeocodeService = (portalUrl) => {
    const request = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request;
    const sm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
    return request(`${jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPortalRestUrl(portalUrl)}portals/self`, {
        authentication: sm.getMainSession(),
        httpMethod: 'GET'
    }).then(portalSelf => {
        var _a;
        return Promise.resolve(((_a = portalSelf === null || portalSelf === void 0 ? void 0 : portalSelf.helperServices) === null || _a === void 0 ? void 0 : _a.geocode) || []);
    }).catch(err => {
        return Promise.resolve([]);
    });
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/util.ts":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/util.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectIdSchema: () => (/* binding */ ObjectIdSchema),
/* harmony export */   checkIsUseDsChenged: () => (/* binding */ checkIsUseDsChenged),
/* harmony export */   checkIsWidgetJsonDsChanged: () => (/* binding */ checkIsWidgetJsonDsChanged),
/* harmony export */   getAddressFieldsSchemaAndDefaultFieldName: () => (/* binding */ getAddressFieldsSchemaAndDefaultFieldName),
/* harmony export */   getConfigIdList: () => (/* binding */ getConfigIdList),
/* harmony export */   getInitOutDataSource: () => (/* binding */ getInitOutDataSource),
/* harmony export */   getInitSchema: () => (/* binding */ getInitSchema),
/* harmony export */   getNameOfDefaultAddressField: () => (/* binding */ getNameOfDefaultAddressField),
/* harmony export */   getNewConfigId: () => (/* binding */ getNewConfigId),
/* harmony export */   getOutputDataSourceId: () => (/* binding */ getOutputDataSourceId),
/* harmony export */   getOutputJsonOriginDs: () => (/* binding */ getOutputJsonOriginDs),
/* harmony export */   getWhetherDsInUseDataSources: () => (/* binding */ getWhetherDsInUseDataSources),
/* harmony export */   isDsInDatasources: () => (/* binding */ isDsInDatasources)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/constants.ts");
/* harmony import */ var _utils_geocode_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/geocode-utils */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/utils/geocode-utils.ts");



const ObjectIdSchema = {
    jimuName: _constants__WEBPACK_IMPORTED_MODULE_1__.OutputDsObjectField,
    alias: 'OBJECTID',
    type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number,
    name: _constants__WEBPACK_IMPORTED_MODULE_1__.OutputDsObjectField
};
/**
 * Get outputDs default schema
*/
const getInitSchema = (label = '', addressFields = []) => {
    const fields = {};
    addressFields === null || addressFields === void 0 ? void 0 : addressFields.forEach((fieldSchema, index) => {
        fields[fieldSchema === null || fieldSchema === void 0 ? void 0 : fieldSchema.jimuName] = fieldSchema;
        if (index === 0) {
            fields[_constants__WEBPACK_IMPORTED_MODULE_1__.OutputDsObjectField] = ObjectIdSchema;
        }
    });
    return {
        label,
        idField: _constants__WEBPACK_IMPORTED_MODULE_1__.OutputDsObjectField,
        fields: fields
    };
};
const getNameOfDefaultAddressField = (fields, nameIndex = 0) => {
    let name = _constants__WEBPACK_IMPORTED_MODULE_1__.DefaultAddress;
    fields === null || fields === void 0 ? void 0 : fields.forEach(field => {
        name = nameIndex ? `${name}${nameIndex}` : name;
        if (field.jimuName === name) {
            nameIndex += 1;
            name = getNameOfDefaultAddressField(fields, nameIndex);
        }
    });
    return name;
};
const getAddressFieldsSchemaAndDefaultFieldName = (addressFields = []) => {
    const addressFieldSchema = addressFields === null || addressFields === void 0 ? void 0 : addressFields.map(field => {
        return {
            jimuName: field === null || field === void 0 ? void 0 : field.alias,
            alias: field === null || field === void 0 ? void 0 : field.alias,
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String,
            name: field === null || field === void 0 ? void 0 : field.alias
        };
    });
    const defaultAddressFieldName = getNameOfDefaultAddressField(addressFieldSchema, 0);
    const DefaultAddressSchema = {
        jimuName: defaultAddressFieldName,
        alias: defaultAddressFieldName,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String,
        name: defaultAddressFieldName
    };
    addressFieldSchema.unshift(DefaultAddressSchema);
    return {
        addressFieldsSchema: addressFieldSchema,
        defaultAddressFieldName: defaultAddressFieldName
    };
};
/**
 * Get outputDs json
*/
const getInitOutDataSource = (widgetId, configId, geocodeUrl, label) => {
    const dsLabel = label || (0,_utils_geocode_utils__WEBPACK_IMPORTED_MODULE_2__.getDefaultGeocodeLabel)(geocodeUrl);
    const dsId = getOutputDataSourceId(configId, widgetId);
    const schema = getInitSchema(label);
    const outputDsJson = {
        id: dsId,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
        label: dsLabel,
        originDataSources: [],
        isOutputFromWidget: true,
        isDataInDataSourceInstance: false,
        schema,
        geometryType: 'esriGeometryPoint'
    };
    return outputDsJson;
};
const getOutputJsonOriginDs = (ds) => {
    if (!ds) {
        return null;
    }
    if (ds.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer) {
        /**
         * If is scene layer data source, will use associated feature layer data source to generate output data source.
         */
        return (ds).getAssociatedDataSource();
    }
    else {
        return ds;
    }
};
const getWhetherDsInUseDataSources = (ds, useDataSources) => {
    if (!ds || !useDataSources) {
        return false;
    }
    return useDataSources.some(u => u.dataSourceId === ds.dataSourceId);
};
const isDsInDatasources = (datasource, datasources) => {
    var _a;
    return ((_a = datasources.filter(ds => (ds === null || ds === void 0 ? void 0 : ds.dataSourceId) === (datasource === null || datasource === void 0 ? void 0 : datasource.dataSourceId))) === null || _a === void 0 ? void 0 : _a.length) > 0;
};
const checkIsUseDsChenged = (datasource, preDatasources) => {
    var _a;
    //Check is ds length change
    if ((datasource === null || datasource === void 0 ? void 0 : datasource.length) !== (preDatasources === null || preDatasources === void 0 ? void 0 : preDatasources.length)) {
        return true;
    }
    //Check is ds id change
    const intersectionDsField = [];
    datasource === null || datasource === void 0 ? void 0 : datasource.forEach(ds => {
        var _a;
        const preCommonDs = preDatasources.filter(preDs => (preDs === null || preDs === void 0 ? void 0 : preDs.dataSourceId) === (ds === null || ds === void 0 ? void 0 : ds.dataSourceId));
        if ((preCommonDs === null || preCommonDs === void 0 ? void 0 : preCommonDs.length) > 0) {
            intersectionDsField.push({
                dsFields: ds === null || ds === void 0 ? void 0 : ds.fields,
                preDsFields: (_a = preCommonDs[0]) === null || _a === void 0 ? void 0 : _a.fields
            });
        }
    });
    if ((intersectionDsField === null || intersectionDsField === void 0 ? void 0 : intersectionDsField.length) !== (datasource === null || datasource === void 0 ? void 0 : datasource.length)) {
        return true;
    }
    //Check is ds field change
    const isFieldsChange = ((_a = intersectionDsField === null || intersectionDsField === void 0 ? void 0 : intersectionDsField.filter(item => {
        var _a, _b, _c, _d;
        const isLengthChange = ((_a = item === null || item === void 0 ? void 0 : item.dsFields) === null || _a === void 0 ? void 0 : _a.length) !== ((_b = item === null || item === void 0 ? void 0 : item.preDsFields) === null || _b === void 0 ? void 0 : _b.length);
        const isFieldItemChange = ((_d = (_c = item === null || item === void 0 ? void 0 : item.dsFields) === null || _c === void 0 ? void 0 : _c.filter(field => { var _a; return !((_a = item === null || item === void 0 ? void 0 : item.preDsFields) === null || _a === void 0 ? void 0 : _a.includes(field)); })) === null || _d === void 0 ? void 0 : _d.length) > 0;
        return isLengthChange || isFieldItemChange;
    })) === null || _a === void 0 ? void 0 : _a.length) > 0;
    return isFieldsChange;
};
/**
 * Check is useDatasource or outputDatasource chenged in widgeJson
*/
const checkIsWidgetJsonDsChanged = (widgetJson, useDataSource, outputDatasource) => {
    var _a, _b, _c;
    const widgetJsonUseDs = ((_a = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })) || [];
    const widgetJsonoutputUseDs = ((_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) === null || _b === void 0 ? void 0 : _b.asMutable({ deep: true })) || [];
    if ((widgetJsonUseDs === null || widgetJsonUseDs === void 0 ? void 0 : widgetJsonUseDs.length) !== (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.length) || (widgetJsonoutputUseDs === null || widgetJsonoutputUseDs === void 0 ? void 0 : widgetJsonoutputUseDs.length) !== (outputDatasource === null || outputDatasource === void 0 ? void 0 : outputDatasource.length)) {
        return true;
    }
    const isUseDsChenged = checkIsUseDsChenged(useDataSource, widgetJsonUseDs);
    const isOutputDsChanged = ((_c = widgetJsonoutputUseDs.filter(ouputDs => !(outputDatasource === null || outputDatasource === void 0 ? void 0 : outputDatasource.includes(ouputDs)))) === null || _c === void 0 ? void 0 : _c.length) > 0;
    return (isUseDsChenged || isOutputDsChanged);
};
/**
 * Get congfig id list
*/
const getConfigIdList = (datasourceConfig) => {
    return datasourceConfig === null || datasourceConfig === void 0 ? void 0 : datasourceConfig.map(item => item.configId);
};
/**
 * Get new datasource config id
*/
const getNewConfigId = (configIdList) => {
    if (!configIdList || (configIdList === null || configIdList === void 0 ? void 0 : configIdList.length) === 0)
        return 'config_0';
    const maxIndex = getConfigIndexMaxNumber(configIdList);
    return `config_${maxIndex + 1}`;
};
const getConfigIndexMaxNumber = (configIdList) => {
    var _a;
    const idIndexData = configIdList === null || configIdList === void 0 ? void 0 : configIdList.map(id => {
        var _a;
        const currentIndex = (_a = id === null || id === void 0 ? void 0 : id.split('_')) === null || _a === void 0 ? void 0 : _a.pop();
        return currentIndex ? Number(currentIndex) : 0;
    });
    return (_a = idIndexData === null || idIndexData === void 0 ? void 0 : idIndexData.sort((a, b) => b - a)) === null || _a === void 0 ? void 0 : _a[0];
};
const getOutputDataSourceId = (configId, widgetId) => {
    var _a;
    if (!configId)
        return `${widgetId}_output_0`;
    const currentIndex = (_a = configId === null || configId === void 0 ? void 0 : configId.split('_')) === null || _a === void 0 ? void 0 : _a.pop();
    return `${widgetId}_output_${Number(currentIndex)}`;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/side-popper/index.tsx":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/side-popper/index.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidePopper: () => (/* binding */ SidePopper),
/* harmony export */   _SidePopper: () => (/* binding */ _SidePopper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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
/** @jsx jsx */




const leftSidebarLayoutId = 'left-sidebar-left-layout';
const rightSidebarLayoutId = 'right-sidebar-right-layout';
const modifiers = [{
        name: 'preventOverflow',
        options: {
            boundariesElement: 'viewport'
        }
    }];
/**
 * The `SidePopper` component is a popper which reference node is left/right side panel of builder.
 *
 * ```ts
 * import { SidePopper } from 'jimu-ui/advanced/setting-components'
 * ```
 */
class _SidePopper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.closeBtnRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.popperRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.handleDocumentMousedown = (evt) => {
            if (this.props.isOpen) {
                const target = evt.target;
                const isTargetOutOfTrigger = !this.props.trigger || (Array.isArray(this.props.trigger) ? !this.props.trigger.some(t => !(0,jimu_ui__WEBPACK_IMPORTED_MODULE_3__.isOutBoundary)(target, t)) : (0,jimu_ui__WEBPACK_IMPORTED_MODULE_3__.isOutBoundary)(target, this.props.trigger));
                // If the clicked dom is out of trigger node, close side popper.
                if (isTargetOutOfTrigger) {
                    this.toggle();
                }
            }
        };
        this.toggle = () => {
            this.props.toggle();
        };
        this.keepFocusAfterClose = () => {
            /**
             * Wait for side popper is closed.
             */
            setTimeout(() => {
                var _a, _b;
                if (this.props.backToFocusNode) {
                    this.props.backToFocusNode.focus();
                }
                else {
                    if (Array.isArray(this.props.trigger)) {
                        (_a = this.props.trigger[0]) === null || _a === void 0 ? void 0 : _a.focus();
                    }
                    else {
                        (_b = this.props.trigger) === null || _b === void 0 ? void 0 : _b.focus();
                    }
                }
            }, 200);
        };
        this.onKeyDown = e => {
            var _a, _b;
            if (e.key === 'Esc' || e.key === 'Escape') {
                if (!((_a = this.popperRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
                    return;
                }
                if (e.target === this.closeBtnRef.current) {
                    this.toggle();
                }
                else {
                    (_b = this.closeBtnRef.current) === null || _b === void 0 ? void 0 : _b.focus();
                }
            }
        };
    }
    componentDidMount() {
        var _a;
        (_a = this.getReference(this.props.position)) === null || _a === void 0 ? void 0 : _a.addEventListener('mousedown', this.handleDocumentMousedown, false);
    }
    componentDidUpdate(prevProps) {
        var _a;
        const isReferencePanelClosed = (this.props.position === 'left' && prevProps.leftSidebarCollapse && !this.props.leftSidebarCollapse) ||
            (this.props.position === 'right' && prevProps.rightSidebarCollapse && !this.props.rightSidebarCollapse);
        const isSelectedWidgetNotTriggerWidget = this.props.widgetId && this.props.layoutSelection !== prevProps.layoutSelection && ((_a = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.searchUtils.findLayoutItem(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_1__.utils.getAppConfig(), this.props.layoutSelection)) === null || _a === void 0 ? void 0 : _a.widgetId) !== this.props.widgetId;
        const isTemplatedPage = !prevProps.isTemplatePage && this.props.isTemplatePage;
        /**
         * Close the side popper if one of the following events happen.
         *  1. reference panel (right/left builder panel) is closed
         *  2. selected widget is not the widget which setting triggers side popper
         *  3. change page to template page
         */
        if (isReferencePanelClosed || isSelectedWidgetNotTriggerWidget || isTemplatedPage) {
            // Close the side popper.
            this.props.isOpen && this.toggle();
        }
        /**
         * After close the side popper, should keep the focus back to the trigger node.
         */
        if (prevProps.isOpen && !this.props.isOpen) {
            this.keepFocusAfterClose();
        }
    }
    componentWillUnmount() {
        var _a;
        (_a = this.getReference(this.props.position)) === null || _a === void 0 ? void 0 : _a.removeEventListener('mousedown', this.handleDocumentMousedown, false);
    }
    getReference(position) {
        return position === 'left'
            ? document && document.querySelector(`[data-layoutid="${leftSidebarLayoutId}"]`)
            : document && document.querySelector(`[data-layoutid="${rightSidebarLayoutId}"]`);
    }
    getPlacement(position) {
        return position === 'left' ? 'right-start' : 'left-start';
    }
    render() {
        const _a = this.props, { isOpen, position, className, dispatch, leftSidebarCollapse, rightSidebarCollapse, trigger, backToFocusNode, widgetId, layoutSelection, title, isTemplatePage, addFocusableContainerClass } = _a, others = __rest(_a, ["isOpen", "position", "className", "dispatch", "leftSidebarCollapse", "rightSidebarCollapse", "trigger", "backToFocusNode", "widgetId", "layoutSelection", "title", "isTemplatePage", "addFocusableContainerClass"]);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Popper, Object.assign({ reference: this.getReference(position), placement: this.getPlacement(position), open: isOpen, forceLatestFocusElements: true, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('bg-light-300', className), modifiers: modifiers }, others, { toggle: null, onKeyDown: this.onKeyDown, "aria-label": typeof this.props['aria-label'] === 'string' ? this.props['aria-label'] : (typeof title === 'string' ? title : undefined) }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100', ref: this.popperRef },
                typeof title !== 'undefined' && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.PanelHeader, { title: title, showClose: true, onClose: this.toggle, level: 1, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('p-4', { [jimu_ui__WEBPACK_IMPORTED_MODULE_3__.FOCUSABLE_CONTAINER_CLASS]: addFocusableContainerClass }), closeButtonRef: this.closeBtnRef }),
                typeof title !== 'undefined'
                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `height: calc(100% - 56px); overflow: auto;` }, this.props.children)
                    : this.props.children)));
    }
}
const SidePopper = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect((state, ownProps) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
        /**
         * Currently, side-popper use left/right sidebar in builder as reference. When left/right sidebar is closed, side-popper should be closed, too.
         * So map these two state to side-popper's props to know when left/right sidebar is closed.
         */
        leftSidebarCollapse: (_b = (_a = state.widgetsState) === null || _a === void 0 ? void 0 : _a['left-sidebar']) === null || _b === void 0 ? void 0 : _b.collapse, // true means open, false means closed
        rightSidebarCollapse: (_d = (_c = state.widgetsState) === null || _c === void 0 ? void 0 : _c['right-sidebar']) === null || _d === void 0 ? void 0 : _d.collapse,
        layoutSelection: ownProps.widgetId
            ? ((_e = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _e === void 0 ? void 0 : _e.isBuilder) ? (_g = (_f = state.appStateInBuilder) === null || _f === void 0 ? void 0 : _f.appRuntimeInfo) === null || _g === void 0 ? void 0 : _g.selection : (_h = state.appRuntimeInfo) === null || _h === void 0 ? void 0 : _h.selection
            : null,
        isTemplatePage: ((_j = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _j === void 0 ? void 0 : _j.isBuilder) && ((_k = state.appRuntimeInfo) === null || _k === void 0 ? void 0 : _k.currentPageId) === 'template'
    };
})((0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withStyles)(_SidePopper, 'SidePopper'));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/size-mode-select/index.tsx":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/size-mode-select/index.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeMode: () => (/* binding */ SizeMode),
/* harmony export */   SizeModeSelector: () => (/* binding */ SizeModeSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/application/check */ "./jimu-icons/outlined/application/check.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */



var SizeMode;
(function (SizeMode) {
    SizeMode["Auto"] = "AUTO";
    SizeMode["Custom"] = "CUSTOM";
})(SizeMode || (SizeMode = {}));
class _SizeModeSelector extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleDropdown = () => {
            this.setState(prevState => ({
                dropdownOpen: !prevState.dropdownOpen
            }));
        };
        this.state = { dropdownOpen: false };
        this._onAutoSelected = this.onSelect.bind(this, SizeMode.Auto);
        this._onCustomSelected = this.onSelect.bind(this, SizeMode.Custom);
    }
    onSelect(mode) {
        if (this.props.mode !== mode) {
            this.props.onChange(mode);
        }
    }
    getStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .auto-dropdown.jimu-dropdown {
        width: 26px;
        height: 26px;

        .btn {
          padding: 0 !important;
        }
      }

      & > .jimu-dropdown .jimu-dropdown-button,
      & > .jimu-dropdown .jimu-dropdown-button:hover {
        height: 26px;
        padding: 0 0.375rem;
      }
    `;
    }
    autoInput() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Input, { style: { width: '110px' }, css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
          background-color: var(--light-600);
          border-color: var(--light-600);
          color: var(--black);
          height: 1.625rem;
          border-width: 0;
          padding: 0 0.25rem;
        `, disabled: true, value: this.props.intl.formatMessage({ id: 'auto' }) }));
    }
    render() {
        const { mode, intl } = this.props;
        const autoLabel = intl.formatMessage({ id: 'auto' });
        const customLabel = intl.formatMessage({ id: 'custom' });
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex', css: this.getStyle() },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Dropdown, { className: 'auto-dropdown', isOpen: this.state.dropdownOpen, toggle: this.toggleDropdown },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownButton, { icon: true }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { onClick: this._onAutoSelected },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width: 1rem;` }, mode === SizeMode.Auto && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_1__.CheckOutlined, { size: 's' })),
                        autoLabel),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { onClick: this._onCustomSelected },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width: 1rem;` }, mode === SizeMode.Custom && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_1__.CheckOutlined, { size: 's' })),
                        customLabel))),
            mode === SizeMode.Auto && this.autoInput(),
            mode === SizeMode.Custom && this.props.children));
    }
}
const SizeModeSelector = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_SizeModeSelector);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/sort-setting/index.tsx":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/sort-setting/index.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortSetting: () => (/* binding */ SortSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var jimu_icons_outlined_editor_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/edit */ "./jimu-icons/outlined/editor/edit.tsx");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/* harmony import */ var jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-ui/basic/list-tree */ "jimu-ui/basic/list-tree");
/* harmony import */ var jimu_icons_outlined_directional_sort_descending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jimu-icons/outlined/directional/sort-descending */ "./jimu-icons/outlined/directional/sort-descending.tsx");
/* harmony import */ var jimu_icons_outlined_directional_sort_ascending__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jimu-icons/outlined/directional/sort-ascending */ "./jimu-icons/outlined/directional/sort-ascending.tsx");
/* harmony import */ var jimu_icons_outlined_application_more_vertical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jimu-icons/outlined/application/more-vertical */ "./jimu-icons/outlined/application/more-vertical.tsx");
/** @jsx jsx */
/* eslint-disable prefer-const */











// #endregion
class _Sort extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.preValue = null;
        this.initRuleOptionName = (value, preValue) => {
            var _a, _b;
            const ruleOptionName = (value === null || value === void 0 ? void 0 : value.map(item => item === null || item === void 0 ? void 0 : item.ruleOptionName)) || [];
            const preRuleOptionName = (preValue === null || preValue === void 0 ? void 0 : preValue.map(item => item === null || item === void 0 ? void 0 : item.ruleOptionName)) || [];
            let isRuleOptionNameChange = false;
            if ((value === null || value === void 0 ? void 0 : value.length) !== (preValue === null || preValue === void 0 ? void 0 : preValue.length) || ruleOptionName.join('') !== preRuleOptionName.join('')) {
                isRuleOptionNameChange = true;
                this.initEditOptionNameStatus(value);
            }
            if (isRuleOptionNameChange || (!((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.ruleOptionName) === null || _b === void 0 ? void 0 : _b.length) && (ruleOptionName === null || ruleOptionName === void 0 ? void 0 : ruleOptionName.length) > 0)) {
                this.setState({
                    ruleOptionName: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(ruleOptionName)
                });
            }
        };
        this.initEditOptionNameStatus = (value) => {
            const newEditOptionNameStatus = value.map(item => false);
            this.setState({
                editOptionNameStatus: newEditOptionNameStatus
            });
        };
        // #region action
        this.initData = () => {
            if (Array.isArray(this.props.value) && this.props.value.length) {
                return false;
            }
            const _option = this.deepClone(this.state.option);
            _option.ruleOptionName = this.props.intl.formatMessage({ id: 'option', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.option }) + 0;
            const _sortData = [_option];
            this.props.onChange(_sortData);
        };
        this.onOptionChange = (ruleIndex, optionIndex, changeName, changeValue) => {
            const _sortData = this.deepClone(this.props.value);
            _sortData[optionIndex].rule[ruleIndex][changeName] = changeValue;
            this.props.onChange(_sortData, optionIndex);
        };
        this.onOptionKeyUp = (evt, ruleIndex, optionIndex, changeName, changeValue) => {
            if (evt.key === 'Enter' || evt.key === ' ') {
                this.onOptionChange(ruleIndex, optionIndex, changeName, changeValue);
            }
        };
        this.onSelectChange = (allSelectedFields, ruleIndex, optionIndex) => {
            const field = allSelectedFields[0];
            if (!field) {
                return;
            }
            const _sortData = this.deepClone(this.props.value);
            const selectedData = field.name;
            _sortData[optionIndex].rule[ruleIndex].jimuFieldName = selectedData;
            this.props.onChange(_sortData, optionIndex);
        };
        this.addOption = () => {
            const _isValueValid = Array.isArray(this.props.value);
            const _optionIndex = _isValueValid ? this.props.value.length : 0;
            const _optionText = this.createOptionText(_optionIndex);
            const _option = this.deepClone(this.state.option);
            _option.ruleOptionName = _optionText;
            const _sortData = _isValueValid ? this.deepClone(this.props.value) : [];
            _sortData.push(_option);
            this.props.onChange(_sortData);
        };
        this.createOptionText = (index) => {
            const _optionText = this.props.intl.formatMessage({ id: 'option', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.option }) + index;
            if (!this.isOptionNameRepeat(_optionText)) {
                return _optionText;
            }
            const _index = index + 1;
            return this.createOptionText(_index);
        };
        this.deleteOption = (index, e) => {
            if (e && (e.key !== 'Enter' && e.key !== ' ')) {
                return false;
            }
            const _sortData = this.deepClone(this.props.value);
            _sortData.splice(index, 1);
            this.props.onChange(_sortData);
        };
        this.deleteAll = () => {
            this.props.onChange([]);
        };
        this.toggleOptionNameDisplay = (optionIndex, isOpen = false, e) => {
            const { editOptionNameStatus } = this.state;
            if (e && (e.key !== 'Enter' && e.key !== ' ')) {
                return false;
            }
            const newEditOptionNameStatus = (editOptionNameStatus === null || editOptionNameStatus === void 0 ? void 0 : editOptionNameStatus.asMutable({ deep: true })) || [];
            newEditOptionNameStatus[optionIndex] = isOpen;
            this.setState({
                editOptionNameStatus: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newEditOptionNameStatus)
            }, () => {
                var _a;
                (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.select();
            });
        };
        this.handleOptionNameChange = (optionIndex, value) => {
            if (!value)
                return;
            const _sortData = this.deepClone(this.props.value);
            const _optionName = value;
            const _isOptionNameValid = !this.isOptionNameRepeat(_optionName) && _optionName;
            if (_isOptionNameValid) {
                _sortData[optionIndex].ruleOptionName = _optionName;
            }
            this.props.onChange(_sortData);
        };
        this.isOptionNameRepeat = (optionName) => {
            if (!Array.isArray(this.props.value))
                return false;
            let isHasOption = false;
            this.props.value.forEach((el) => {
                if (el.ruleOptionName === optionName)
                    isHasOption = true;
            });
            return isHasOption;
        };
        this.deepClone = (obj) => {
            const isArray = Array.isArray(obj);
            const cloneObj = isArray ? [] : {};
            for (const key in obj) {
                const isObject = (typeof obj[key] === 'object' || typeof obj[key] === 'function') && obj[key] !== null;
                cloneObj[key] = isObject ? this.deepClone(obj[key]) : obj[key];
            }
            return cloneObj;
        };
        this.setInputRef = (el) => {
            if (el) {
                this.inputRef = el;
                // el.select()
                el.focus();
            }
        };
        this.createRuleOptionElement = (useDataSources, rule, index, optionIndex) => {
            // select element
            const _selectedFields = rule.jimuFieldName ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([rule.jimuFieldName]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            const ruleOption = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'select-down-con', key: rule.jimuFieldName || index },
                this.props.useDataSource &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'sort-field-selector' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.FieldSelector, { useDataSources: useDataSources, onChange: (allSelectedFields, ds) => { this.onSelectChange(allSelectedFields, index, optionIndex); }, selectedFields: _selectedFields, isSearchInputHidden: true, isDataSourceDropDownHidden: true, useDropdown: true, useKeyUpEvent: true })),
                [{
                        getTitle: () => this.nls('ascending'),
                        order: jimu_core__WEBPACK_IMPORTED_MODULE_0__.OrderRule.Asc
                    }, {
                        getTitle: () => this.nls('decending'),
                        order: jimu_core__WEBPACK_IMPORTED_MODULE_0__.OrderRule.Desc
                    }].map((item, x, items) => {
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { key: x, title: item.getTitle(), size: 'sm', type: rule.order === item.order ? 'primary' : 'secondary', className: `sort-button ${this.props.singleRowItemOnly && rule.order !== item.order ? 'collapse' : ''}`, onClick: () => { this.onOptionChange(index, optionIndex, 'order', this.props.singleRowItemOnly ? [...items, items[0]][x + 1].order : item.order); }, onKeyUp: (evt) => { this.onOptionKeyUp(evt, index, optionIndex, 'order', this.props.singleRowItemOnly ? [...items, items[0]][x + 1].order : item.order); } },
                        item.order === jimu_core__WEBPACK_IMPORTED_MODULE_0__.OrderRule.Asc && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_sort_ascending__WEBPACK_IMPORTED_MODULE_9__.SortAscendingOutlined, { size: '12', className: 'sort-arrow-down-icon' }),
                        item.order === jimu_core__WEBPACK_IMPORTED_MODULE_0__.OrderRule.Desc && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_sort_descending__WEBPACK_IMPORTED_MODULE_8__.SortDescendingOutlined, { size: '12', className: 'sort-arrow-down-icon' })));
                })));
            return ruleOption;
        };
        this.onRuleOptionNameChange = (e, index) => {
            var _a;
            const value = e.target.value;
            const newRuleOptionName = ((_a = this.state.ruleOptionName) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })) || [];
            newRuleOptionName[index] = value;
            this.setState({
                ruleOptionName: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newRuleOptionName)
            });
        };
        this.createOptionNameElement = (el, optionIndex) => {
            var _a;
            const { editOptionNameStatus } = this.state;
            // edit option name input element
            const _optionName = el.ruleOptionName;
            const _optionNameInInput = (_a = this.state.ruleOptionName) === null || _a === void 0 ? void 0 : _a[optionIndex];
            const _placeholder = this.props.intl.formatMessage({ id: 'optionNamePlaceholder', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.optionNamePlaceholder });
            const editOptionNameInputEle = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: 'flex-grow-1 h-100 edit-input', size: 'sm', type: 'text', defaultValue: _optionName, onChange: (e) => { this.onRuleOptionNameChange(e, optionIndex); }, onAcceptValue: value => { this.handleOptionNameChange(optionIndex, value); }, onBlur: () => { this.toggleOptionNameDisplay(optionIndex, false); }, ref: el => { this.setInputRef(el); }, placeholder: _placeholder, title: _optionNameInInput || _placeholder, "aria-label": _optionNameInInput || _placeholder }));
            const _optionNameElement = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'option-name d-flex align-items-center flex-grow-1', "aria-label": _optionName },
                editOptionNameStatus[optionIndex] ? editOptionNameInputEle : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { id: 'optionNameCon', title: _optionName, onDoubleClick: () => { this.toggleOptionNameDisplay(optionIndex, true); } }, _optionName),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', type: 'tertiary', icon: true, className: 'padding-0 option-name-icon-con', title: this.nls('edit'), "aria-describedby": 'optionNameCon', onClick: () => { this.toggleOptionNameDisplay(optionIndex, !editOptionNameStatus[optionIndex]); }, onKeyDown: e => { this.toggleOptionNameDisplay(optionIndex, !editOptionNameStatus[optionIndex], e); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_edit__WEBPACK_IMPORTED_MODULE_5__.EditOutlined, { size: 's', className: 'option-name-icon' }))));
            return _optionNameElement;
        };
        this.createOptionElement = (useDataSources, el, index) => {
            let _deleteTemp;
            // delete button element
            _deleteTemp = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'close-con text-right' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', icon: true, type: 'tertiary', className: 'padding-0', title: this.nls('deleteOption'), onClick: () => { this.deleteOption(index); }, onKeyUp: (e) => { this.deleteOption(index, e); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_4__.CloseOutlined, { size: this.props.singleRowItemOnly ? 14 : 12, className: 'sort-arrow-down-icon' }))));
            const getOptionSelect = () => el.rule.map((ruleEl, ruleIndex) => {
                return this.createRuleOptionElement(useDataSources, ruleEl, ruleIndex, index);
            });
            const getOptionName = () => this.createOptionNameElement(el, index);
            // option list element
            const _options = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'select-con flex-grow-1', key: index, role: 'group', "aria-label": el.ruleOptionName }, (this.props.singleRowItemOnly &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'option-name-con' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_more_vertical__WEBPACK_IMPORTED_MODULE_10__.MoreVerticalOutlined, { size: 14 }),
                        getOptionSelect(),
                        _deleteTemp))) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'option-name-con d-flex align-items-center' },
                        getOptionName(),
                        _deleteTemp),
                    getOptionSelect())));
            return _options;
        };
        this.nls = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages[id] }) : id;
        };
        this.onDataSourceCreated = (e) => {
        };
        // #endregion
        this.checkIsOrderChange = () => {
            var _a, _b;
            const { value } = this.props;
            if ((value === null || value === void 0 ? void 0 : value.length) !== ((_a = this.preValue) === null || _a === void 0 ? void 0 : _a.length)) {
                return false;
            }
            const ruleOptionName = (value === null || value === void 0 ? void 0 : value.map(item => item === null || item === void 0 ? void 0 : item.ruleOptionName)) || [];
            const preRuleOptionName = ((_b = this.preValue) === null || _b === void 0 ? void 0 : _b.map(item => item === null || item === void 0 ? void 0 : item.ruleOptionName)) || [];
            return (ruleOptionName === null || ruleOptionName === void 0 ? void 0 : ruleOptionName.join('')) !== (preRuleOptionName === null || preRuleOptionName === void 0 ? void 0 : preRuleOptionName.join(''));
        };
        this.state = {
            option: {
                ruleOptionName: '',
                isEditOptionName: false,
                rule: [
                    {
                        jimuFieldName: '',
                        order: jimu_core__WEBPACK_IMPORTED_MODULE_0__.OrderRule.Asc
                    }
                ]
            },
            ruleOptionName: null,
            editOptionNameStatus: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([])
        };
    }
    // #region life cycle
    componentDidMount() {
        this.initData();
    }
    // #endregion
    componentDidUpdate(prevProps, prevState) {
        var _a, _b, _c, _d;
        this.preValue = prevProps === null || prevProps === void 0 ? void 0 : prevProps.value;
        this.initRuleOptionName((_a = this.props) === null || _a === void 0 ? void 0 : _a.value, prevProps === null || prevProps === void 0 ? void 0 : prevProps.value);
        if (((_b = prevProps === null || prevProps === void 0 ? void 0 : prevProps.useDataSource) === null || _b === void 0 ? void 0 : _b.dataSourceId) !== ((_d = (_c = this.props) === null || _c === void 0 ? void 0 : _c.useDataSource) === null || _d === void 0 ? void 0 : _d.dataSourceId)) {
            Promise.resolve(true).then(() => {
                this.initData();
            });
        }
    }
    render() {
        const { value } = this.props;
        const isOrderChange = this.checkIsOrderChange();
        const invalidExpression = this.props.intl.formatMessage({ id: 'invalidExpression', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.invalidExpression });
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('sort-con', this.props.singleRowItemOnly && 'single-row-item', { [this.props.className]: !!this.props.className }) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: 'tertiary', className: 'add-option-btn', onClick: this.addOption },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_6__.PlusOutlined, { size: 's', className: 'add-option-icon' }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, this.props.intl.formatMessage({ id: 'addOption', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.addOption }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.useDataSource, onDataSourceCreated: this.onDataSourceCreated }, (ds) => {
                    if (!Array.isArray(value))
                        return invalidExpression;
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.List, { size: 'sm', className: 'setting-ui-unit-list', itemsJson: value.asMutable({ deep: true }).map((i, x) => ({ itemStateDetailContent: i, itemKey: `${x}` })), dndEnabled: true, onUpdateItem: (actionData, refComponent) => {
                            const { itemJsons } = refComponent.props;
                            const [, parentItemJson] = itemJsons;
                            const newSortData = parentItemJson.map(item => {
                                return item.itemStateDetailContent;
                            });
                            if (isOrderChange) {
                                this.props.onChange(newSortData);
                            }
                        }, overrideItemBlockInfo: ({ itemBlockInfo }) => {
                            return {
                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.TreeItemActionType.RenderOverrideItem,
                                children: [{
                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.TreeItemActionType.RenderOverrideItemDroppableContainer,
                                        children: [{
                                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.TreeItemActionType.RenderOverrideItemDraggableContainer,
                                                children: [{
                                                        name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.TreeItemActionType.RenderOverrideItemBody,
                                                        children: [{
                                                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.TreeItemActionType.RenderOverrideItemDragHandle
                                                            }, {
                                                                name: jimu_ui_basic_list_tree__WEBPACK_IMPORTED_MODULE_7__.TreeItemActionType.RenderOverrideItemMainLine
                                                            }]
                                                    }]
                                            }]
                                    }]
                            };
                        }, renderOverrideItemMainLine: (actionData, refComponent) => {
                            var _a;
                            const { itemJsons } = refComponent.props;
                            const currentItemJson = itemJsons[0];
                            const listItemJsons = itemJsons[1];
                            return this.createOptionElement((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([(_a = this.props.useDataSource) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })]), currentItemJson.itemStateDetailContent, listItemJsons.indexOf(currentItemJson));
                        } }));
                }),
                Array.isArray(value) && value.length === 0 && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'no-sort-remind' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, this.props.intl.formatMessage({ id: 'noOptionRemindText', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.noOptionRemindText })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, this.props.intl.formatMessage({ id: 'pleaceAddOne', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages.pleaceAddOne }))))));
    }
}
const SortSetting = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_Sort), 'SortSetting');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/style-picker/index.tsx":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/style-picker/index.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylePicker: () => (/* binding */ StylePicker),
/* harmony export */   _StylePicker: () => (/* binding */ _StylePicker)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");


class _StylePicker extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onStyleClick = value => {
            if (this.state.selectedValue === value)
                return;
            this.setState({
                selectedValue: value
            });
            if (this.props.onChange) {
                this.props.onChange(value);
            }
        };
        this.state = {
            selectedValue: this.props.value
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                selectedValue: this.props.value
            });
        }
    }
    render() {
        const styles = this.props.styles;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-setting--stylepicker w-100', {
                small: this.props.size === 'small'
            }) }, Object.keys(styles).map((uId, index) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { key: uId, role: 'button', className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-setting--stylepicker-item', {
                active: uId === this.state.selectedValue,
                'full-width': styles[uId].size === 'full'
            }), style: { backgroundImage: `url(${styles[uId].thumbnail})` }, onClick: () => { this.onStyleClick(uId); } }))));
    }
}
/**
 * @deprecated Deprecated since there is no place for use
 */
const StylePicker = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)(_StylePicker, 'StylePicker');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/card-layout-setting.tsx":
/*!*******************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/card-layout-setting.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLayoutSetting: () => (/* binding */ CardLayoutSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout */ "./jimu-ui/advanced/lib/setting-components/components/layout/index.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/type.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/suggested/warning */ "./jimu-icons/outlined/suggested/warning.tsx");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/** @jsx jsx */








const STYLE = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .jimu-radio {
    cursor: pointer;
  }
  .clear-padding {
    padding-left: 0;
    padding-right: 0;
  }
`;
const ModalStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  & .modal-content {
    border: none;
  }
  .header-con {
    & {
      border: none;
      padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
      padding-bottom: 0;
    }
    svg {
      color: var(--warning-600);
      border-bottom: none;
      margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)} !important;
    }
  }
  .modal-body {
    padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(24)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
  }
  .modal-footer {
    & {
      padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
      padding-top: 0;
    }
  }
`;
const CardLayoutSetting = (props) => {
    const { id, cardLayout, status, isCardWidget, browserSizeMode, layouts, mainSizeMode, config, appConfig } = props;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const [reminderTitle, setReminderTitle] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [reminderText, setReminderText] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const [reminderBottomText, setReminderBottomText] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const layout = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(cardLayout);
    const oldLayout = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(cardLayout);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
        layout.current = props.cardLayout;
        oldLayout.current = props.cardLayout;
    }, [status, props]);
    const handleToggle = () => {
        setIsOpen(!isOpen);
        layout.current = oldLayout.current;
    };
    const handleConfirm = () => {
        const regularLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__.searchUtils.findLayoutId(layouts[_type__WEBPACK_IMPORTED_MODULE_2__.Status.Default], browserSizeMode, mainSizeMode);
        const desLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_5__.searchUtils.findLayoutId(layouts[status], browserSizeMode, mainSizeMode);
        const option = {
            layout: layout.current,
            config: config,
            widgetId: id,
            appConfig: appConfig,
            status: status,
            regularLayoutId: regularLayoutId,
            desLayoutId: desLayoutId,
            label: nls(status.toLowerCase()),
            isCardWidget
        };
        if (layout.current === _type__WEBPACK_IMPORTED_MODULE_2__.CardLayout.AUTO) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.setLayoutAuto)(option);
        }
        else {
            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.setLayoutCustom)(option);
        }
        setIsOpen(false);
        oldLayout.current = layout.current;
    };
    const handleLayoutChange = (newLayout) => {
        if (oldLayout.current === newLayout)
            return;
        if (newLayout === _type__WEBPACK_IMPORTED_MODULE_2__.CardLayout.AUTO) {
            setReminderTitle(nls('remindAutoLayoutTitle'));
            setReminderText(nls('remindAutoLayoutText'));
            setReminderBottomText('');
        }
        else {
            setReminderTitle(nls('remindCustomLayoutTitle'));
            setReminderText(nls('remindCustomLayoutText'));
            setReminderBottomText(nls('remindCustomLayoutBottomText'));
        }
        setIsOpen(true);
        layout.current = newLayout;
    };
    const renderRemindModel = () => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, { isOpen: isOpen, toggle: handleToggle, centered: true, css: ModalStyle },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, { closeIcon: '', className: 'header-con' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_4__.WarningOutlined, { className: 'mr-2', size: 24 }),
                reminderTitle),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.ModalBody, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, reminderText),
                reminderBottomText && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'mt-5' }, reminderBottomText)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { title: nls('ok'), type: 'primary', onClick: handleConfirm }, nls('ok')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { title: nls('cancel'), onClick: () => { setIsOpen(false); } }, nls('cancel')))));
    };
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: STYLE, role: 'group', "aria-label": nls('layout') },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { className: 'clear-padding', title: nls('layout') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { flow: 'wrap' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-center', onClick: () => { handleLayoutChange(_type__WEBPACK_IMPORTED_MODULE_2__.CardLayout.AUTO); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Radio, { title: nls('auto'), checked: cardLayout === _type__WEBPACK_IMPORTED_MODULE_2__.CardLayout.AUTO, className: 'mr-2' }),
                    " ",
                    nls('auto'))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layout__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-center', onClick: () => { handleLayoutChange(_type__WEBPACK_IMPORTED_MODULE_2__.CardLayout.CUSTOM); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Radio, { title: nls('custom'), checked: cardLayout === _type__WEBPACK_IMPORTED_MODULE_2__.CardLayout.CUSTOM || !cardLayout, className: 'mr-2' }),
                    " ",
                    nls('custom'))),
            renderRemindModel())));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/index.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/index.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLayout: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_1__.CardLayout),
/* harmony export */   CardLayoutSetting: () => (/* reexport safe */ _card_layout_setting__WEBPACK_IMPORTED_MODULE_0__.CardLayoutSetting),
/* harmony export */   Status: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_1__.Status),
/* harmony export */   setLayoutAuto: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.setLayoutAuto),
/* harmony export */   setLayoutCustom: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.setLayoutCustom)
/* harmony export */ });
/* harmony import */ var _card_layout_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-layout-setting */ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/card-layout-setting.tsx");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/type.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/utils.ts");





/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/type.ts":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/type.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardLayout: () => (/* binding */ CardLayout),
/* harmony export */   Status: () => (/* binding */ Status)
/* harmony export */ });
var CardLayout;
(function (CardLayout) {
    CardLayout["AUTO"] = "Auto";
    CardLayout["CUSTOM"] = "Custom";
})(CardLayout || (CardLayout = {}));
var Status;
(function (Status) {
    Status["Default"] = "DEFAULT";
    Status["Selected"] = "SELECTED";
    Status["Hover"] = "HOVER";
})(Status || (Status = {}));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/utils.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/utils.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setLayoutAuto: () => (/* binding */ setLayoutAuto),
/* harmony export */   setLayoutCustom: () => (/* binding */ setLayoutCustom)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");


const setLayoutAuto = (option) => {
    const { layout, desLayoutId, config, widgetId, status, isCardWidget } = option;
    const action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
    desLayoutId && action.removeLayout(desLayoutId);
    const newConfig = getNewWidgetConfig(config, isCardWidget, layout, status);
    action.editWidgetConfig(widgetId, newConfig);
    action.editWidgetProperty(widgetId, `layouts.${status}`, {});
    action.exec();
};
const setLayoutCustom = (option) => {
    var _a;
    const { layout, regularLayoutId, config, widgetId, appConfig, status, label, isCardWidget } = option;
    const browserSizeMode = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.browserSizeMode;
    const action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
    const newLayoutJson = action.duplicateLayout(regularLayoutId, false);
    action.editLayoutProperty(newLayoutJson.id, 'label', label);
    const preLayoutId = (_a = appConfig.widgets[widgetId].layouts[status]) === null || _a === void 0 ? void 0 : _a[browserSizeMode];
    preLayoutId && action.removeLayout(preLayoutId);
    const newConfig = getNewWidgetConfig(config, isCardWidget, layout, status);
    action.editWidgetConfig(widgetId, newConfig);
    action.editWidgetProperty(widgetId, `layouts.${status}.${browserSizeMode}`, newLayoutJson.id);
    action.editLayoutProperty(newLayoutJson.id, 'parent', { type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutParentType.Widget, id: widgetId });
    action.exec();
};
function getNewWidgetConfig(config, isCardWidget, layout, status) {
    let newConfig = config;
    if (isCardWidget) {
        newConfig = config.set('cardLayout', layout);
    }
    else {
        newConfig = config.setIn(['cardConfigs', status, 'listLayout'], layout);
    }
    return newConfig;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/template-selector/index.tsx":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/template-selector/index.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateSelector: () => (/* binding */ TemplateSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _template_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-list */ "./jimu-ui/advanced/lib/setting-components/components/template-selector/template-list.tsx");
/* harmony import */ var _page_aware_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-aware-popper */ "./jimu-ui/advanced/lib/setting-components/components/page-aware-popper.tsx");
/** @jsx jsx */




const MODIFIERS = [
    {
        name: 'preventOverflow',
        options: {
            altAxis: true,
            boundariesElement: 'viewport',
            padding: { bottom: 20 }
        }
    },
    {
        name: 'flip',
        options: {
            fallbackPlacements: ['right', 'left']
        }
    }
];
function TemplateSelector(props) {
    const { title, templates, templateContentStyle, referenceElement, onItemSelect, onClose } = props;
    const theme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (props.theme) {
            return props.theme;
        }
        if (window.jimuConfig.isInBuilder) {
            return (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme2)();
        }
        return (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme)();
    }, [props.theme]);
    const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    min-width: 300px;
    width: auto;
    border: 1px solid ${theme ? theme.colors.palette.light[600] : 'var(--light-600)'};
    box-shadow: 0 4px 20px 4px rgba(0,0,0,0.50);

    .template-content {
      max-height: 600px;
      height: ${title ? 'calc(100% - 50px)' : '100%'};
      overflow: auto;
    }

    .size-mode-SMALL & .template-content {
      width: 320px;
    }
  `, [theme, title]);
    const togglePopper = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        onClose === null || onClose === void 0 ? void 0 : onClose();
        if (typeof (referenceElement === null || referenceElement === void 0 ? void 0 : referenceElement.focus) === 'function') {
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
                referenceElement === null || referenceElement === void 0 ? void 0 : referenceElement.focus();
            });
        }
    }, [onClose, referenceElement]);
    const handleSelect = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((item) => {
        togglePopper();
        onItemSelect(item);
    }, [togglePopper, onItemSelect]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_aware_popper__WEBPACK_IMPORTED_MODULE_3__["default"], { placement: 'bottom', theme: theme, css: style, reference: referenceElement, offset: [0, 10], toggle: togglePopper, open: true, showArrow: true, modifiers: MODIFIERS },
        title && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { className: 'text-dark-600 text-truncate title px-5 pt-4 mb-0' }, title)),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'template-content', style: templateContentStyle },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_list__WEBPACK_IMPORTED_MODULE_2__.TemplateList, { templates: templates, onItemSelect: handleSelect }))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/template-selector/template-item.tsx":
/*!************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/template-selector/template-item.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateItem: () => (/* binding */ TemplateItem)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


function TemplateItem(props) {
    var _a, _b, _c, _d;
    const { template, onClick } = props;
    const locale = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.locale;
    const label = (_b = (_a = template.i18nLabel) === null || _a === void 0 ? void 0 : _a[locale]) !== null && _b !== void 0 ? _b : template.label;
    const desc = (_d = (_c = template.i18nDescription) === null || _c === void 0 ? void 0 : _c[locale]) !== null && _d !== void 0 ? _d : template.description;
    const multipleIcon = template.gifThumbnail != null;
    const descId = 'templage_desc_' + template.name;
    const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    transform: ${(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.isRTL && template.flipThumbnail ? 'scaleX(-1);' : ''}  ;
  `, [template]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'block-item' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: desc },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { role: 'option', "aria-label": label, "aria-describedby": descId, onClick: onClick, className: 'block-item--icon p-0' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('default-icon', { 'multiple-icon': multipleIcon }), css: style, src: template.thumbnail, draggable: false, width: template.thumbnailWidth / 2, height: template.thumbnailHeight / 2 }),
                multipleIcon && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('gif-icon', { 'multiple-icon': multipleIcon }), css: style, draggable: false, src: template.gifThumbnail })))),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { "aria-hidden": true, className: 'block-item-label text-center mt-2', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-width: ${template.thumbnailWidth / 2}px` }, label),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { "aria-hidden": true, className: 'sr-only', id: descId }, desc)));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/template-selector/template-list.tsx":
/*!************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/template-selector/template-list.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateList: () => (/* binding */ TemplateList)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _template_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template-item */ "./jimu-ui/advanced/lib/setting-components/components/template-selector/template-item.tsx");
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
/** @jsx jsx */



function TemplateList(props) {
    const { templates, onItemSelect } = props, otherProps = __rest(props, ["templates", "onItemSelect"]);
    const theme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getBuilderThemeVariables)(), []);
    const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width: auto;
    padding: 20px;
    background-color: ${theme ? theme.colors.palette.light[300] : 'var(--light-300)'};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    .block-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      padding: 0;

      .jimu-btn {
        border-radius: unset !important;
      }

      .block-item--icon {
        background: ${theme ? theme.colors.palette.light[200] : 'var(--light-200)'};
        border: none;
        position: relative;

        .default-icon {
          opacity: 1;
        }
        .gif-icon {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .block-item--icon:hover {
        outline: 2px solid ${theme ? theme.colors.palette.primary[600] : 'var(--primary-600)'};
        .default-icon.multiple-icon {
          opacity: 0;
        }
        .gif-icon {
          opacity: 1;
        }
      }

      .block-item-label {
        color: ${theme ? theme.colors.palette.dark[400] : 'var(--dark-400)'};
      }
    }

    .size-mode-SMALL & .block-item {
      width: 140px;
      height: auto;
    }
  `, [theme]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ className: window.jimuConfig.isInBuilder ? jimu_theme__WEBPACK_IMPORTED_MODULE_1__.Theme2GlobalStyleClassName : '', css: style }, otherProps, { role: 'listbox' }), templates.map((template) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_template_item__WEBPACK_IMPORTED_MODULE_2__.TemplateItem, { key: template.name, template: template, onClick: () => { onItemSelect(template); } })))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/index.tsx":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/index.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetListPopper: () => (/* binding */ WidgetListPopper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _page_aware_popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-aware-popper */ "./jimu-ui/advanced/lib/setting-components/components/page-aware-popper.tsx");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _widget_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-list */ "./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/widget-list.tsx");
/** @jsx jsx */






const MODIFIERS = [
    (0,jimu_ui__WEBPACK_IMPORTED_MODULE_1__.getFallbackPlacementsModifier)(['top', 'right', 'bottom', 'left'], true),
    {
        name: 'preventOverflow',
        enabled: true,
        options: {
            boundariesElement: 'viewport',
            padding: 0
        }
    }
];
class _WidgetListPopper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.togglePopper = (evt) => {
            if (this.state.open && this.props.onClose) {
                this.props.onClose(evt);
            }
        };
        this.onWidgetLoaded = () => {
            this.setState({ generation: this.state.generation + 1 });
        };
        this.state = {
            open: true,
            generation: 0
        };
    }
    getStyle() {
        const { theme } = this.props;
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      background-color: ${theme.colors.palette.light[400]};
      color: ${theme.colors.palette.dark[800]};

      .content {
        height: 600px;
        width: 380px;
        overflow: hidden;
        padding: 0;
      }

      .title {
        font-size: 16px;
        font-weight: 600;
        color: ${theme.colors.palette.dark[600]};
      }

      .px-20 {
        padding-left: 20px;
        padding-right: 20px;
      }

      .pt-20 {
        padding-top: 20px;
      }
    `;
    }
    render() {
        var _a;
        if (!this.state.open) {
            return null;
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_aware_popper__WEBPACK_IMPORTED_MODULE_2__["default"], { theme: this.props.theme, placement: (_a = this.props.placement) !== null && _a !== void 0 ? _a : 'bottom', toggle: this.togglePopper, css: this.getStyle(), version: this.state.generation, modifiers: MODIFIERS, reference: this.props.referenceElement, open: true, forceLatestFocusElements: true },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'shadow-lg content', css: this.props.css },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between align-items-center px-20 pt-20' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'title' }, this.props.intl.formatMessage({ id: 'addWidget', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.addWidget })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: 'sm', icon: true, type: 'tertiary', onClick: this.togglePopper, title: this.props.intl.formatMessage({ id: 'close', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.close }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widget_list__WEBPACK_IMPORTED_MODULE_5__.WidgetList, { isPlaceholder: this.props.isPlaceholder, isAccepted: this.props.isAccepted, onSelect: this.props.onSelect, onWidgetLoaded: this.onWidgetLoaded, theme: this.props.theme }))));
    }
}
_WidgetListPopper.defaultProps = {
    isPlaceholder: false,
    isAccepted: () => true
};
const WidgetListPopper = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.withTheme2)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_WidgetListPopper));


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/widget-list.tsx":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/widget-list.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetList: () => (/* binding */ WidgetList)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_filled_brand_arcgis_enterprise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/filled/brand/arcgis-enterprise */ "./jimu-icons/filled/brand/arcgis-enterprise.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/search */ "./jimu-icons/outlined/editor/search.tsx");
/** @jsx jsx */





const ALL_GROUP_VALUE = 1000;
class _WidgetList extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.sectionItem = {
            itemType: jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Section,
            label: this.props.intl.formatMessage({ id: 'section', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.section }),
            uri: '',
            manifest: {
                properties: {},
                defaultSize: {
                    width: 500,
                    height: 500
                }
            },
            icon: '../builder/widgets/element-selector/dist/runtime/assets/section.svg',
            name: 'section',
            group: 9,
            order: 900
        };
        this.groupLabelMap = {
            1: this.props.intl.formatMessage({ id: 'mapCentric', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.mapCentric }),
            2: this.props.intl.formatMessage({ id: 'dataCentric', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.dataCentric }),
            3: this.props.intl.formatMessage({ id: 'pageElements', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.pageElements }),
            4: this.props.intl.formatMessage({ id: 'menuAndTollbars', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.menuAndTollbars }),
            8: this.props.intl.formatMessage({ id: 'layout', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.layout }),
            9: this.props.intl.formatMessage({ id: 'section', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.section })
        };
        this.allGroup = {
            value: ALL_GROUP_VALUE,
            label: this.props.intl.formatMessage({ id: 'all', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.all })
        };
        this.getRequireEnterpriseIconTooltip = (requiredUserTypeExtensions) => {
            if ((requiredUserTypeExtensions === null || requiredUserTypeExtensions === void 0 ? void 0 : requiredUserTypeExtensions.length) > 0) {
                const userTypeExtensions = requiredUserTypeExtensions.join(', ');
                return this.props.intl.formatMessage({ id: 'requireEnterpriseAndUserTypeExtensions', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.requireEnterpriseAndUserTypeExtensions }, { userTypeExtensions });
            }
            else {
                return this.props.intl.formatMessage({ id: 'requireEnterprise', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.requireEnterprise });
            }
        };
        this.WidgetCard = ({ widgetInfo }) => {
            var _a, _b, _c, _d;
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-start justify-content-center widget-card' },
                ((_a = widgetInfo.manifest) === null || _a === void 0 ? void 0 : _a.requireEnterprise) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: this.getRequireEnterpriseIconTooltip((_b = widgetInfo.manifest) === null || _b === void 0 ? void 0 : _b.requiredUserTypeExtensions), type: 'tertiary', className: 'widget-enterprise-btn', icon: true, size: 'sm' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_filled_brand_arcgis_enterprise__WEBPACK_IMPORTED_MODULE_2__.ArcgisEnterpriseFilled, null)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { className: 'w-100 h-100 p-0', key: widgetInfo.name, onClick: () => { this.props.onSelect(widgetInfo); }, "aria-label": widgetInfo.label },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column w-100 h-100 widget-card--content' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-center' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-card-image' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { size: 20, className: 'w-100 m-0', autoFlip: (_d = (_c = widgetInfo.manifest) === null || _c === void 0 ? void 0 : _c.properties) === null || _d === void 0 ? void 0 : _d.flipIcon, icon: typeof widgetInfo.icon === 'string' ? widgetInfo.icon : widgetInfo.icon && widgetInfo.icon.svg, color: this.props.theme.colors.dark }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 d-flex align-items-center' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-card-name w-100 text-center text-capitalize text-truncate', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
                line-height: 1rem;
                max-height: 2.2rem;
                white-space: normal;
              `, title: widgetInfo.label }, widgetInfo.label)))));
        };
        this.WidgetGroup = ({ group }) => {
            if (!group) {
                return null;
            }
            const WidgetCard = this.WidgetCard;
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-group w-100 mb-4' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { className: 'group-label w-100 text-break', title: group.label }, group.label),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'card-grid m-0' }, group.itemList.sort((i1, i2) => i1.order - i2.order).map((item, index) => {
                    if (!item) {
                        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-card', style: { visibility: 'hidden' }, key: index });
                    }
                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(WidgetCard, { widgetInfo: item, key: index });
                })));
        };
        this.getGroupList = (commonWidgetList, customWidgetList, searchValue) => {
            var _a, _b, _c, _d;
            const groups = [this.allGroup];
            const showCommonGroups = !!commonWidgetList;
            if (showCommonGroups) {
                const commonGroups = this.getCommonGroups(commonWidgetList, ALL_GROUP_VALUE, searchValue);
                commonGroups && Object.values(commonGroups).forEach(g => {
                    if (typeof g.groupId === 'number') {
                        groups.push({ value: g.groupId, label: this.getGroupLabel(g.groupId) });
                    }
                });
            }
            const showCustomGroup = (_b = (_a = this.state.jimuForBuilderUtils) === null || _a === void 0 ? void 0 : _a.showCustomWidgets) === null || _b === void 0 ? void 0 : _b.call(_a, commonWidgetList);
            if (showCustomGroup) {
                const customGroup = this.getCustomGroup(commonWidgetList, customWidgetList, ALL_GROUP_VALUE, searchValue);
                customGroup && groups.push({ value: (_c = this.state.jimuForBuilderUtils) === null || _c === void 0 ? void 0 : _c.CUSTOM_GROUP, label: this.getGroupLabel((_d = this.state.jimuForBuilderUtils) === null || _d === void 0 ? void 0 : _d.CUSTOM_GROUP) });
            }
            return groups.filter(g => !!g.label);
        };
        this.changeSelectedGroup = e => {
            this.setState({ selectedGroup: e.target.value });
        };
        this.onSearchValueChange = e => {
            this.setState({
                searchValue: e.target.value,
                selectedGroup: ALL_GROUP_VALUE // if is searching, will reset the selected group to all
            });
        };
        this.state = {
            selectedGroup: ALL_GROUP_VALUE,
            commonWidgetList: null,
            remoteCustomWidgetList: null,
            searchValue: '',
            jimuForBuilderUtils: null
        };
        this.searchInputRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    }
    componentDidMount() {
        this.loadJimuForBuilderUtilsPromise = jimu_core__WEBPACK_IMPORTED_MODULE_0__.cancelablePromise.cancelable(jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-for-builder').then(JimuForBuilder => {
            var _a;
            this.setState({ jimuForBuilderUtils: JimuForBuilder === null || JimuForBuilder === void 0 ? void 0 : JimuForBuilder.utils });
            this.groupLabelMap[(_a = JimuForBuilder === null || JimuForBuilder === void 0 ? void 0 : JimuForBuilder.utils) === null || _a === void 0 ? void 0 : _a.CUSTOM_GROUP] = this.props.intl.formatMessage({ id: 'custom', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.custom });
        }));
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
            this.searchInputRef.current.focus();
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.jimuForBuilderUtils && this.state.jimuForBuilderUtils) {
            this.loadCommonWidgetList(this.state.jimuForBuilderUtils.fetchCommonWidgetList);
            this.loadCustomWidgetList(this.state.jimuForBuilderUtils.fetchRemoteCustomWidgetList);
        }
    }
    componentWillUnmount() {
        var _a, _b, _c;
        (_a = this.loadJimuForBuilderUtilsPromise) === null || _a === void 0 ? void 0 : _a.cancel();
        (_b = this.loadCommonWidgetsPromise) === null || _b === void 0 ? void 0 : _b.cancel();
        (_c = this.loadCommonWidgetsPromise) === null || _c === void 0 ? void 0 : _c.cancel();
    }
    loadCommonWidgetList(fetchCommonWidgetList) {
        if (!fetchCommonWidgetList) {
            return;
        }
        this.loadCommonWidgetsPromise = jimu_core__WEBPACK_IMPORTED_MODULE_0__.cancelablePromise.cancelable(fetchCommonWidgetList().then((items) => {
            var _a, _b;
            const notLayoutWidgetList = items === null || items === void 0 ? void 0 : items.filter(item => this.props.isAccepted(item, this.props.isPlaceholder));
            (_b = (_a = this.props).onWidgetLoaded) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.setState({
                commonWidgetList: notLayoutWidgetList
            });
        }));
    }
    loadCustomWidgetList(fetchRemoteCustomWidgetList) {
        if (!fetchRemoteCustomWidgetList) {
            return;
        }
        this.loadRemoteCustomWidgetsPromise = jimu_core__WEBPACK_IMPORTED_MODULE_0__.cancelablePromise.cancelable(fetchRemoteCustomWidgetList().then((items) => {
            var _a, _b;
            const list = items === null || items === void 0 ? void 0 : items.filter(item => this.props.isAccepted(item, this.props.isPlaceholder));
            (_b = (_a = this.props).onWidgetLoaded) === null || _b === void 0 ? void 0 : _b.call(_a);
            this.setState({
                remoteCustomWidgetList: list
            });
        }));
    }
    getStyle() {
        const { theme } = this.props;
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      color: ${theme.colors.palette.dark[800]};

      .widget-enterprise-btn {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .px-20 {
        padding-left: 18px;
        padding-right: 18px;
      }

      .pt-20 {
        padding-top: 20px;
      }

      .list-container {
        height: calc(100% - 150px);
        overflow-y: auto;
        padding-bottom: 20px;
      }

      .groups {
        font-size: 13px;
        font-weight: 600;
        color: ${theme.colors.palette.dark[400]};
      }

      .group-select {
        width: 210px;
      }

      .widget-group {
        .group-label{
          font-size: 13px;
          font-weight: 600;
          color: ${theme.colors.palette.dark[400]};
        }
      }

      .card-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-row-gap: 0.5rem;
        grid-column-gap: 0.5rem;
      }

      .widget-card {
        height: 80px;
        width: 108px;
        padding: 0;
        border: none;
        position: relative;

        .widget-card--content {
          padding-top: 12px;
          cursor: pointer;
          background-color: ${theme.colors.palette.light[500]};
          &:hover {
            background-color: ${theme.colors.palette.light[600]};
          }
        }

        .widget-card-image {
          width: 20px;
          height: 20px;
          &:after {
            display: none;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }

        .widget-card-name {
          line-height: 1rem;
          max-height: 2rem;
          white-space: normal;
          color: ${theme.colors.dark};
          padding: 0 10px;
          font-size: 13px;
        }
      }
    `;
    }
    getGroupLabel(groupId) {
        return this.groupLabelMap[groupId];
    }
    getCommonGroups(commonWidgetList, selectedGroup, searchValue) {
        const list = selectedGroup === ALL_GROUP_VALUE ? commonWidgetList : commonWidgetList === null || commonWidgetList === void 0 ? void 0 : commonWidgetList.filter(w => w.group === selectedGroup);
        const groups = {};
        list === null || list === void 0 ? void 0 : list.forEach(w => {
            var _a;
            if (w.group === ((_a = this.state.jimuForBuilderUtils) === null || _a === void 0 ? void 0 : _a.CUSTOM_GROUP)) {
                return;
            }
            if (this.isFuzzySearch(w.label, searchValue)) {
                if (!groups[w.group]) {
                    groups[w.group] = {
                        label: this.getGroupLabel(w.group),
                        groupId: w.group,
                        itemList: []
                    };
                }
                groups[w.group].itemList.push(w);
            }
        });
        return groups;
    }
    getCustomGroup(commonWidgetList, customWidgetList, selectedGroup, searchValue) {
        var _a, _b, _c;
        if (selectedGroup === ALL_GROUP_VALUE || selectedGroup === ((_a = this.state.jimuForBuilderUtils) === null || _a === void 0 ? void 0 : _a.CUSTOM_GROUP)) {
            const itemList = (customWidgetList || []).concat(((commonWidgetList === null || commonWidgetList === void 0 ? void 0 : commonWidgetList.filter(w => { var _a; return w.group === ((_a = this.state.jimuForBuilderUtils) === null || _a === void 0 ? void 0 : _a.CUSTOM_GROUP); })) || [])).filter(w => this.isFuzzySearch(w.label, searchValue));
            // Hide group which items are empty when searching.
            if (!searchValue || itemList.length > 0) {
                return {
                    label: this.getGroupLabel((_b = this.state.jimuForBuilderUtils) === null || _b === void 0 ? void 0 : _b.CUSTOM_GROUP),
                    groupId: (_c = this.state.jimuForBuilderUtils) === null || _c === void 0 ? void 0 : _c.CUSTOM_GROUP,
                    itemList
                };
            }
        }
        return null;
    }
    isFuzzySearch(label, searchValue) {
        if (!label) {
            return false;
        }
        if (!searchValue) {
            return true;
        }
        return label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const WidgetGroup = this.WidgetGroup;
        const { commonWidgetList, remoteCustomWidgetList: customWidgetList, selectedGroup, searchValue } = this.state;
        const showCommonGroups = !!commonWidgetList;
        let commonWidgetsToShow = commonWidgetList;
        if (showCommonGroups && this.props.isAccepted(this.sectionItem, this.props.isPlaceholder)) {
            commonWidgetsToShow = commonWidgetList.concat([this.sectionItem]);
        }
        const commonGroups = showCommonGroups && this.getCommonGroups(commonWidgetsToShow, selectedGroup, searchValue);
        const showCustomGroup = (_b = (_a = this.state.jimuForBuilderUtils) === null || _a === void 0 ? void 0 : _a.showCustomWidgets) === null || _b === void 0 ? void 0 : _b.call(_a, commonWidgetsToShow);
        const customGroup = showCustomGroup && this.getCustomGroup(commonWidgetsToShow, customWidgetList, selectedGroup, searchValue);
        const groupList = this.getGroupList(commonWidgetsToShow, customWidgetList, searchValue);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `content mt-4 ${window.jimuConfig.isInBuilder ? jimu_theme__WEBPACK_IMPORTED_MODULE_3__.Theme2GlobalStyleClassName : ''}`, css: this.getStyle() },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between align-items-center mb-4 px-20' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { ref: this.searchInputRef, prefix: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_4__.SearchOutlined, { size: 16, color: (_f = (_e = (_d = (_c = this.props.theme) === null || _c === void 0 ? void 0 : _c.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.dark) === null || _f === void 0 ? void 0 : _f[200] }), value: searchValue, onChange: this.onSearchValueChange, className: 'w-100', size: 'sm', placeholder: this.props.intl.formatMessage({ id: 'search', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.search }), allowClear: true })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between align-items-center mb-4 px-20' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'groups' }, this.props.intl.formatMessage({ id: 'category', defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages.category })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: 'group-select', size: 'sm', value: selectedGroup, onChange: this.changeSelectedGroup }, groupList.map((g, i) => {
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: g.value, key: i, selected: g.value === selectedGroup }, g.label));
                }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 list-container px-20' },
                !commonWidgetList && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Loading, { type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingType.Secondary }),
                showCommonGroups && Object.values(commonGroups).sort((g1, g2) => g1.groupId - g2.groupId).map((g, i) => {
                    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(WidgetGroup, { key: i, group: g });
                }),
                showCustomGroup && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(WidgetGroup, { group: customGroup }))));
    }
}
_WidgetList.defaultProps = {
    isPlaceholder: false,
    isAccepted: () => true
};
const WidgetList = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_WidgetList);


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/components/widget-selector/index.tsx":
/*!**************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/components/widget-selector/index.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetSelector: () => (/* binding */ WidgetSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */



class _WidgetSelector extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onSelectWidget = (widgetUri) => {
            this.setState({ currentWidget: widgetUri });
        };
        this.getListItemJSX = (item) => {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Card, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-card-item', {
                    'widget-card-selected': this.state.currentWidget && this.state.currentWidget.indexOf(item.uri) === 0
                }), key: item.title, onClick: () => { this.onSelectWidget(item.uri); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-card-image bg-light-300' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CardImg, { top: true, width: '100%', src: item.image.src, alt: item.image.alt }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CardBody, { className: 'widget-card-content' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'text-capitalize', title: item.title }, item.title))));
        };
        this.state = {
            currentWidget: null,
            listInfo: []
        };
    }
    componentDidMount() {
        this.getListInfo().then(res => {
            this.setState({
                listInfo: res.listInfo
            });
        });
    }
    getListInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield fetch(`${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAbsoluteRootUrl()}widgets/widgets-info.json`)
                .then((res) => __awaiter(this, void 0, void 0, function* () { return yield res.json(); })).then((widgetInfo) => {
                const listInfo = widgetInfo.map(v => {
                    const tempInfo = {
                        title: '',
                        uri: '',
                        image: {
                            src: ''
                        }
                    };
                    tempInfo.title = v.label;
                    tempInfo.uri = v.path;
                    tempInfo.image.src = '../' + v.icon;
                    return tempInfo;
                });
                return { listInfo };
            });
        });
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [this.props.className]: !!this.props.className }) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'component-choose-widget-popup' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, { isOpen: true, className: 'component-choose-widget-popup-modal' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, { className: 'component-choose-widget-clear-border component-choose-widget-modal-header' },
                        this.props.title,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'choose-widget-popup-close', onClick: this.props.onCancel })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ModalBody, { className: 'component-choose-widget-clear-border component-choose-widget-modal-body' }, this.state.listInfo.length > 0 ? this.state.listInfo.map(l => this.getListItemJSX(l)) : 'Loading...'),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, { className: 'component-choose-widget-clear-border component-choose-widget-modal-footer' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: () => { this.props.onOK(this.state.currentWidget); } }, "OK"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: this.props.onCancel }, "Cancel"))))));
    }
}
const WidgetSelector = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)(_WidgetSelector, 'WidgetSelector');


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/index.ts":
/*!**********************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByFieldSeriesX: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.ByFieldSeriesX),
/* harmony export */   ByFieldSeriesY: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.ByFieldSeriesY),
/* harmony export */   CardLayout: () => (/* reexport safe */ _components_switch_card_layout__WEBPACK_IMPORTED_MODULE_25__.CardLayout),
/* harmony export */   CardLayoutSetting: () => (/* reexport safe */ _components_switch_card_layout__WEBPACK_IMPORTED_MODULE_25__.CardLayoutSetting),
/* harmony export */   CollapsableCheckbox: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_9__.CollapsableCheckbox),
/* harmony export */   CollapsableRadio: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_9__.CollapsableRadio),
/* harmony export */   CollapsableToggle: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_9__.CollapsableToggle),
/* harmony export */   DEFAULT_MAX_SUGGESTION: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.DEFAULT_MAX_SUGGESTION),
/* harmony export */   DefaultAddress: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.DefaultAddress),
/* harmony export */   DefaultGeocodeLabel: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.DefaultGeocodeLabel),
/* harmony export */   DefaultGeocodeURL: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.DefaultGeocodeURL),
/* harmony export */   DirectionSelector: () => (/* reexport safe */ _components_direction_selector_direction_selector__WEBPACK_IMPORTED_MODULE_20__.DirectionSelector),
/* harmony export */   JimuLayerViewSelector: () => (/* reexport safe */ _components_jimu_layer_view_selector_selector__WEBPACK_IMPORTED_MODULE_4__.JimuLayerViewSelector),
/* harmony export */   JimuLayerViewSelectorDeprecated: () => (/* reexport safe */ _components_jimu_layer_view_selector_deprecated__WEBPACK_IMPORTED_MODULE_3__.JimuLayerViewSelectorDeprecated),
/* harmony export */   JimuLayerViewSelectorDropdown: () => (/* reexport safe */ _components_jimu_layer_view_selector_dropdown__WEBPACK_IMPORTED_MODULE_5__.JimuLayerViewSelectorDropdown),
/* harmony export */   JimuMapViewSelector: () => (/* reexport safe */ _components_jimu_map_view_selector__WEBPACK_IMPORTED_MODULE_6__.JimuMapViewSelector),
/* harmony export */   LinkSelector: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__.LinkSelector),
/* harmony export */   LinkSelectorContent: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__.LinkSelectorContent),
/* harmony export */   LinkSelectorSidePopper: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__.LinkSelectorSidePopper),
/* harmony export */   LinkSetting: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__.LinkSetting),
/* harmony export */   LinkSettingPopup: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__.LinkSettingPopup),
/* harmony export */   MAX_RECENT_SEARCHES: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.MAX_RECENT_SEARCHES),
/* harmony export */   MAX_SUGGESTION: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.MAX_SUGGESTION),
/* harmony export */   MapWidgetSelector: () => (/* reexport safe */ _components_map_widget_selector__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector),
/* harmony export */   MaxCategories: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.MaxCategories),
/* harmony export */   MaxPieces: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.MaxPieces),
/* harmony export */   MaxSeries: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.MaxSeries),
/* harmony export */   MultipleJimuMapConfig: () => (/* reexport safe */ _components_multiple_jimu_map_config__WEBPACK_IMPORTED_MODULE_24__.MultipleJimuMapConfig),
/* harmony export */   NavQuickStyleItem: () => (/* reexport safe */ _components_quick_style__WEBPACK_IMPORTED_MODULE_22__.NavQuickStyleItem),
/* harmony export */   ObjectIdSchema: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.ObjectIdSchema),
/* harmony export */   OpenTypes: () => (/* reexport safe */ _components_link_selector_types__WEBPACK_IMPORTED_MODULE_11__.OpenTypes),
/* harmony export */   OutStatisticFieldNameSplit: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.OutStatisticFieldNameSplit),
/* harmony export */   OutputDsAddress: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.OutputDsAddress),
/* harmony export */   OutputDsObjectField: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.OutputDsObjectField),
/* harmony export */   PageTemplatePopper: () => (/* reexport safe */ _components_page_template_popper__WEBPACK_IMPORTED_MODULE_16__.PageTemplatePopper),
/* harmony export */   ProxySetting: () => (/* reexport safe */ _components_proxy_setting__WEBPACK_IMPORTED_MODULE_12__.ProxySetting),
/* harmony export */   ProxySettingPopup: () => (/* reexport safe */ _components_proxy_setting__WEBPACK_IMPORTED_MODULE_12__.ProxySettingPopup),
/* harmony export */   QuickStylePopper: () => (/* reexport safe */ _components_quick_style__WEBPACK_IMPORTED_MODULE_22__.QuickStylePopper),
/* harmony export */   RadioGroup: () => (/* reexport safe */ _components_radio_group__WEBPACK_IMPORTED_MODULE_8__.RadioGroup),
/* harmony export */   SearchDataSetting: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.SearchDataSetting),
/* harmony export */   SearchDataType: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.SearchDataType),
/* harmony export */   SearchGeneralSetting: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.SearchGeneralSetting),
/* harmony export */   SearchServiceType: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.SearchServiceType),
/* harmony export */   SearchSuggestionSetting: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.SearchSuggestionSetting),
/* harmony export */   SettingCollapse: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_9__.SettingCollapse),
/* harmony export */   SettingLayout: () => (/* reexport module object */ _components_layout__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   SettingRow: () => (/* reexport safe */ _components_layout__WEBPACK_IMPORTED_MODULE_0__.SettingRow),
/* harmony export */   SettingSection: () => (/* reexport safe */ _components_layout__WEBPACK_IMPORTED_MODULE_0__.SettingSection),
/* harmony export */   SidePopper: () => (/* reexport safe */ _components_side_popper__WEBPACK_IMPORTED_MODULE_13__.SidePopper),
/* harmony export */   SizeMode: () => (/* reexport safe */ _components_size_mode_select__WEBPACK_IMPORTED_MODULE_21__.SizeMode),
/* harmony export */   SizeModeSelector: () => (/* reexport safe */ _components_size_mode_select__WEBPACK_IMPORTED_MODULE_21__.SizeModeSelector),
/* harmony export */   SortSetting: () => (/* reexport safe */ _components_sort_setting__WEBPACK_IMPORTED_MODULE_19__.SortSetting),
/* harmony export */   Status: () => (/* reexport safe */ _components_switch_card_layout__WEBPACK_IMPORTED_MODULE_25__.Status),
/* harmony export */   StylePicker: () => (/* reexport safe */ _components_style_picker__WEBPACK_IMPORTED_MODULE_7__.StylePicker),
/* harmony export */   TemplateList: () => (/* reexport safe */ _components_template_selector_template_list__WEBPACK_IMPORTED_MODULE_18__.TemplateList),
/* harmony export */   TemplateSelector: () => (/* reexport safe */ _components_template_selector__WEBPACK_IMPORTED_MODULE_17__.TemplateSelector),
/* harmony export */   UnControlledSettingCollapse: () => (/* reexport safe */ _components_collapse__WEBPACK_IMPORTED_MODULE_9__.UnControlledSettingCollapse),
/* harmony export */   WidgetList: () => (/* reexport safe */ _components_widget_list_popper_widget_list__WEBPACK_IMPORTED_MODULE_15__.WidgetList),
/* harmony export */   WidgetListPopper: () => (/* reexport safe */ _components_widget_list_popper__WEBPACK_IMPORTED_MODULE_14__.WidgetListPopper),
/* harmony export */   WidgetSelector: () => (/* reexport safe */ _components_widget_selector__WEBPACK_IMPORTED_MODULE_1__.WidgetSelector),
/* harmony export */   _JimuLayerViewSelector: () => (/* reexport safe */ _components_jimu_layer_view_selector_selector__WEBPACK_IMPORTED_MODULE_4__._JimuLayerViewSelector),
/* harmony export */   _JimuLayerViewSelectorDropdown: () => (/* reexport safe */ _components_jimu_layer_view_selector_dropdown__WEBPACK_IMPORTED_MODULE_5__._JimuLayerViewSelectorDropdown),
/* harmony export */   _JimuMapViewSelector: () => (/* reexport safe */ _components_jimu_map_view_selector__WEBPACK_IMPORTED_MODULE_6__._JimuMapViewSelector),
/* harmony export */   _LinkSelector: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__._LinkSelector),
/* harmony export */   _LinkSelectorContent: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__._LinkSelectorContent),
/* harmony export */   _LinkSelectorSidePopper: () => (/* reexport safe */ _components_link_selector__WEBPACK_IMPORTED_MODULE_10__._LinkSelectorSidePopper),
/* harmony export */   _MapWidgetSelector: () => (/* reexport safe */ _components_map_widget_selector__WEBPACK_IMPORTED_MODULE_2__._MapWidgetSelector),
/* harmony export */   _SidePopper: () => (/* reexport safe */ _components_side_popper__WEBPACK_IMPORTED_MODULE_13__._SidePopper),
/* harmony export */   checkIsUseDsChenged: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.checkIsUseDsChenged),
/* harmony export */   checkIsWidgetJsonDsChanged: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.checkIsWidgetJsonDsChanged),
/* harmony export */   getAddressFieldsSchemaAndDefaultFieldName: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getAddressFieldsSchemaAndDefaultFieldName),
/* harmony export */   getConfigIdList: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getConfigIdList),
/* harmony export */   getInitOutDataSource: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getInitOutDataSource),
/* harmony export */   getInitSchema: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getInitSchema),
/* harmony export */   getNameOfDefaultAddressField: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getNameOfDefaultAddressField),
/* harmony export */   getNewConfigId: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getNewConfigId),
/* harmony export */   getOutputDataSourceId: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getOutputDataSourceId),
/* harmony export */   getOutputJsonOriginDs: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getOutputJsonOriginDs),
/* harmony export */   getWhetherDsInUseDataSources: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.getWhetherDsInUseDataSources),
/* harmony export */   isDsInDatasources: () => (/* reexport safe */ _components_search_setting__WEBPACK_IMPORTED_MODULE_23__.isDsInDatasources),
/* harmony export */   proxySettingUtils: () => (/* reexport safe */ _components_proxy_setting__WEBPACK_IMPORTED_MODULE_12__.proxySettingUtils),
/* harmony export */   setLayoutAuto: () => (/* reexport safe */ _components_switch_card_layout__WEBPACK_IMPORTED_MODULE_25__.setLayoutAuto),
/* harmony export */   setLayoutCustom: () => (/* reexport safe */ _components_switch_card_layout__WEBPACK_IMPORTED_MODULE_25__.setLayoutCustom)
/* harmony export */ });
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout */ "./jimu-ui/advanced/lib/setting-components/components/layout/index.ts");
/* harmony import */ var _components_widget_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/widget-selector */ "./jimu-ui/advanced/lib/setting-components/components/widget-selector/index.tsx");
/* harmony import */ var _components_map_widget_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/map-widget-selector */ "./jimu-ui/advanced/lib/setting-components/components/map-widget-selector/index.tsx");
/* harmony import */ var _components_jimu_layer_view_selector_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/jimu-layer-view-selector-deprecated */ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector-deprecated/index.tsx");
/* harmony import */ var _components_jimu_layer_view_selector_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/jimu-layer-view-selector/selector */ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/selector/index.tsx");
/* harmony import */ var _components_jimu_layer_view_selector_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/jimu-layer-view-selector/dropdown */ "./jimu-ui/advanced/lib/setting-components/components/jimu-layer-view-selector/dropdown/index.tsx");
/* harmony import */ var _components_jimu_map_view_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/jimu-map-view-selector */ "./jimu-ui/advanced/lib/setting-components/components/jimu-map-view-selector/index.tsx");
/* harmony import */ var _components_style_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/style-picker */ "./jimu-ui/advanced/lib/setting-components/components/style-picker/index.tsx");
/* harmony import */ var _components_radio_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/radio-group */ "./jimu-ui/advanced/lib/setting-components/components/radio-group/index.tsx");
/* harmony import */ var _components_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collapse */ "./jimu-ui/advanced/lib/setting-components/components/collapse/index.ts");
/* harmony import */ var _components_link_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/link-selector */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/index.ts");
/* harmony import */ var _components_link_selector_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/link-selector/types */ "./jimu-ui/advanced/lib/setting-components/components/link-selector/types.ts");
/* harmony import */ var _components_proxy_setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/proxy-setting */ "./jimu-ui/advanced/lib/setting-components/components/proxy-setting/index.tsx");
/* harmony import */ var _components_side_popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/side-popper */ "./jimu-ui/advanced/lib/setting-components/components/side-popper/index.tsx");
/* harmony import */ var _components_widget_list_popper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widget-list-popper */ "./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/index.tsx");
/* harmony import */ var _components_widget_list_popper_widget_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widget-list-popper/widget-list */ "./jimu-ui/advanced/lib/setting-components/components/widget-list-popper/widget-list.tsx");
/* harmony import */ var _components_page_template_popper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-template-popper */ "./jimu-ui/advanced/lib/setting-components/components/page-template-popper/index.tsx");
/* harmony import */ var _components_template_selector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/template-selector */ "./jimu-ui/advanced/lib/setting-components/components/template-selector/index.tsx");
/* harmony import */ var _components_template_selector_template_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/template-selector/template-list */ "./jimu-ui/advanced/lib/setting-components/components/template-selector/template-list.tsx");
/* harmony import */ var _components_sort_setting__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sort-setting */ "./jimu-ui/advanced/lib/setting-components/components/sort-setting/index.tsx");
/* harmony import */ var _components_direction_selector_direction_selector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/direction-selector/direction-selector */ "./jimu-ui/advanced/lib/setting-components/components/direction-selector/direction-selector.tsx");
/* harmony import */ var _components_size_mode_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/size-mode-select */ "./jimu-ui/advanced/lib/setting-components/components/size-mode-select/index.tsx");
/* harmony import */ var _components_quick_style__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/quick-style */ "./jimu-ui/advanced/lib/setting-components/components/quick-style/index.ts");
/* harmony import */ var _components_search_setting__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search-setting */ "./jimu-ui/advanced/lib/setting-components/components/search-setting/index.ts");
/* harmony import */ var _components_multiple_jimu_map_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/multiple-jimu-map-config */ "./jimu-ui/advanced/lib/setting-components/components/multiple-jimu-map-config/index.tsx");
/* harmony import */ var _components_switch_card_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/switch-card-layout */ "./jimu-ui/advanced/lib/setting-components/components/switch-card-layout/index.ts");






























/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector-deprecated.ts":
/*!**********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector-deprecated.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelectorDeprecatedStyles: () => (/* binding */ JimuLayerViewSelectorDeprecatedStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const JimuLayerViewSelectorDeprecatedStyles = (props) => {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .dropdown-menu--inner {
      background-color: ${theme.colors.palette.secondary[200]};
      padding: 0;
    }

    .dropdown-toggle-content {
      width: 100%;
    }

    .layerviewselector-input {
      width: 100%;
      height: 30px !important;
      background-color: ${theme.colors.palette.secondary[200]};
      &:hover {
        background-color: ${theme.colors.palette.secondary[200]};
      }
      flex-direction: unset !important;
    }

    .layerviewselector-input-text {
      max-width: calc(100% - 13px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layerviewselector-bg {
      max-height: 270px;
      overflow-y: auto;
      background-color: ${theme.colors.palette.secondary[200]};
    }

    .layerviewselector-item-bg {
      cursor: pointer;
    }

    .layerviewselector-item-bg:hover {
      background-color: ${theme.colors.primary};
    }

    .layerviewselector-ds-item {
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .layerviewselector-ds-item:hover {
      background-color: ${theme.colors.primary};
    }

    .layerviewselector-ds-item-selected {
      background-color: ${theme.colors.primary};
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector-dropdown.ts":
/*!********************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector-dropdown.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelectorDropdownStyles: () => (/* binding */ JimuLayerViewSelectorDropdownStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");


function getInputHeight(inputVarsBySize, inputBorderWidth) {
    const heightInner = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.math(`
    ${inputVarsBySize.fontSize} * ${inputVarsBySize.lineHeight} +
    ${inputVarsBySize.paddingY} * 2`);
    return inputBorderWidth.toString() === '0'
        ? heightInner
        : `calc(${heightInner} + ${inputBorderWidth} * 2)`;
}
function getInputSizingStyles(inputVars, size) {
    const inputVarsBySize = inputVars.sizes[size];
    return `
    height: ${inputVarsBySize.height !== 'auto'
        ? inputVarsBySize.height
        : getInputHeight(inputVarsBySize, inputVars.border.width)};
    padding: ${inputVarsBySize.paddingY} ${inputVarsBySize.paddingX};
    font-size: ${inputVarsBySize.fontSize};
    line-height: ${inputVarsBySize.lineHeight};
    border-radius: ${inputVarsBySize.borderRadius};
  `;
}
const JimuLayerViewSelectorDropdownStyles = (props) => {
    var _a, _b;
    const theme = props.theme;
    const buttonProps = props === null || props === void 0 ? void 0 : props.buttonProps;
    const inputVars = (_a = theme === null || theme === void 0 ? void 0 : theme.components) === null || _a === void 0 ? void 0 : _a.input;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width: 100%;
      > .dropdown{
        > .dropdown-button {
          text-align: start;
        }
      }
      ${(_b = buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.type) !== null && _b !== void 0 ? _b : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      /* Button override */
        > .dropdown{
          > .dropdown-button {
            &,
            &:hover {
              color: ${inputVars.color};
              background-color: ${inputVars.bg};
              background-clip: padding-box;
              box-shadow: ${inputVars.boxShadow};
              transition: ${inputVars.transition};
              text-decoration: none;
              ${getInputSizingStyles(inputVars, 'sm')}
              ${(0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getBoxStyles)(inputVars)}
            }
            &[aria-expanded="true"] {
              color: ${inputVars.color};
              background-color: ${inputVars.focus.bg};
              border-color: ${inputVars.focus.borderColor};
              text-decoration: none;
              box-shadow: ${inputVars.boxShadow}, ${inputVars.focus.boxShadow};
            }
          }
        }
      `}

  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector.ts":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelectorStyles: () => (/* binding */ JimuLayerViewSelectorStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const JimuLayerViewSelectorStyles = (props) => {
    const height = props.isInDropdown ? '366px' : 'calc(100% - 34px)';
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .tree-container{
      margin-top: 16px;
      height: ${height};
    }
    `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/layout/collapse.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/layout/collapse.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingCollapseStyles: () => (/* binding */ settingCollapseStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const settingCollapseStyles = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const isOpen = props === null || props === void 0 ? void 0 : props.isOpen;
    const type = (_a = props === null || props === void 0 ? void 0 : props.type) !== null && _a !== void 0 ? _a : 'default';
    const theme = props.theme;
    const light500 = (_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.palette) === null || _c === void 0 ? void 0 : _c.light) === null || _d === void 0 ? void 0 : _d[500];
    const light800 = (_g = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.palette) === null || _f === void 0 ? void 0 : _f.light) === null || _g === void 0 ? void 0 : _g[800];
    const primary = (_h = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _h === void 0 ? void 0 : _h.primary;
    if (type !== 'primary') {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .dividing-line {
      background-color: ${light800};
    }
    `;
    }
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .handle {
      border-top: 2px solid ${isOpen ? primary : light500};
      background-color: ${light500};
      .title {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    .dividing-line {
      background-color: ${light800};
    }
    `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/layout/row.ts":
/*!*********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/layout/row.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingRowStyles: () => (/* binding */ settingRowStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const settingRowStyles = (props) => {
    const theme = props.theme;
    const flow = props.flow;
    const action = props.action;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    &.jimu-widget-setting--row {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      &:first-of-type {
        margin-top: 0;
      }
      + .jimu-widget-setting--row {
        margin-top: ${theme.sizes[4]};
      }
    }
    &.bottom-line {
      padding-bottom: ${theme.sizes[4]};
      border-bottom: 1px solid ${theme.colors.palette.light[500]};
    }
    &,
    .jimu-widget-setting--row-header {
      > .jimu-widget-setting--row-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: ${theme.colors.palette.dark[400]};
      }
    }
    > .jimu-widget-setting--row-label {
      display: inline-block;
      margin-bottom: ${flow === 'wrap'
        ? action
            ? '0'
            : theme.sizes[2]
        : '0'};
      margin-right: 20px;
    }
    > input {
      &[type='number'] {
        width: 50px;
        flex-shrink: 0;
      }
    }
    input {
      &[type='number'] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
    .jimu-widget-setting--row-header {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 0.75rem;
      > .btn {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      .jimu-widget-setting--row-label {
        text-align: left;
        flex: 1;
        margin-bottom: 0;
      }
    }
    &.form-inline {
      flex-wrap: nowrap;
      .jimu-widget-setting--row-label {
        max-width: 80%;
        + * {
          flex-shrink: 0;
        }
      }
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/layout/section.ts":
/*!*************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/layout/section.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   settingSectionStyles: () => (/* binding */ settingSectionStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const settingSectionStyles = (props) => {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    padding: ${theme.sizes[4]};
    border-bottom: 1px solid ${theme.colors.palette.light[800]};

    &:last-child {
      border-bottom: 0 none;
    }

    &:nth-of-type(1):nth-last-of-type(1) {
      border-bottom: 0 none;
    }

    .jimu-widget-setting--section-header {
      > h6 {
        color: ${theme.colors.palette.dark[600]};
        font-weight: ${theme.typography.weights.bold};
        margin-bottom: 0;
      }
      + * {
        margin-top: ${theme.sizes[4]};
      }
    }

    .jimu-widget-setting--section-header {
      &.row {
        margin-left: 0;
        margin-right: 0;
      }
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/link-selector-content.ts":
/*!********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/link-selector-content.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkSelectorContentStyles: () => (/* binding */ linkSelectorContentStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function linkSelectorContentStyles(props) {
    const theme = props.theme;
    const gray = (theme && theme.colors && theme.colors.palette && theme.colors.palette.light[500]) || '#ccc';
    const cyan = (theme && theme.colors && theme.colors.primary) || 'blue';
    const settingColor = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(gray, 0.5);
    if (window.jimuConfig.isInBuilder) {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .widget-builder-link-selector {
      .collapse-btn{
        margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-16)};
      }
      .option-name{
        font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
        color: ${theme.colors.palette.dark[400]};
      }
      .link-selector-list {
        .view-border{
          border-width: 1px;
          border-style: solid;
        }
        .link-selector-list-item {
          height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${settingColor};
          }
        }

        .link-selector-list-select {
          background-color: ${settingColor};
        }
      }

      select {
        padding-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${cyan} !important;
      }

      .btn-primary {
        background-color: #00A6B6 !important;
        border-color: #00A6B6 !important;
        color: #ffffff !important;
      }

      .form-check-input {
        span {
          background: #00A6B6 !important;
        }
      }

      .form-check-input:hover {
        border-color: gray;
      }

      input[type='radio'].form-check-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent;
        border: 1px solid #000;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        transition: all 0.2s ease;
        &:before {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: #00A6B6 !important;
        margin: 8px;
        transition: all 0.2s ease-out;
        }
        &:hover {
        border-color: #00A6B6 !important;
        }
        &:checked {
        &:before {
            width: 8px;
            height: 8px;
            margin: 3px;
        }
        }
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        width: 100%;
        display: block;
      }
    }
    .url-error-container{
      *{
        color: ${theme.colors.danger};
      }
      div{
        width: calc(100% - 20px);
        margin-left: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  `;
    }
    else {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .widget-builder-link-selector {
      .collapse-btn{
        position: absolute;
        right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-4)};
      }
      .option-name{
        font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
        color: ${theme.colors.palette.dark[400]};
        font-weight: 500;
      }
      .item-common{
        background: ${theme.colors.white};
      }
      .view-border{
        border: 1px solid ${theme.colors.palette.light[400]};
      }
      .link-selector-list {

        .link-selector-list-item {
          height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
          cursor: pointer;

          &:hover {
            background-color: ${settingColor};
          }
        }

        .link-selector-list-select {
          background-color: ${settingColor};
        }
      }

      select {
        padding-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)} !important;
      }

      .itemselected {
        background-color: ${cyan} !important;
      }
      .link-setting-cursor-pointer{
        cursor: pointer;
      }
      .open-type-label{
        width: 100%;
        display: block;
      }
      .url-error-container{
        *{
          color: ${theme.colors.danger};
        }
        div{
          width: calc(100% - 20px);
          margin-left: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  `;
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/proxy-setting-popup.ts":
/*!******************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/proxy-setting-popup.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proxySettingPopupStyles: () => (/* binding */ proxySettingPopupStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function proxySettingPopupStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    max-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(960)} !important;
    .header{
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
      color: ${theme.colors.palette.dark[600]};
    }
    .proxy-setting-container{
      width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(960)};
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(640)};
      border: 0;
      color: ${theme.colors.palette.dark[600]};
    }
    .px-30{
      padding-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
      padding-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
    }
  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/proxy-setting.ts":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/proxy-setting.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   proxySettingStyles: () => (/* binding */ proxySettingStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function proxySettingStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    color: ${theme.colors.palette.dark[600]};
    .font-size-13{
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)} !important;
    }
    .subscriber-warning{
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
    }
    .secondary-title{
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
    }
    .content-table{
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
      color: ${theme.colors.palette.dark[800]};
    }
    .content-table-header{
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(32)};
      background-color: ${theme.colors.palette.light[400]};
      display: block;
      line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
    }
    .content-table-tr{
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(39)};
      line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(39)};
      border-bottom: 1px solid ${theme.colors.palette.light[400]};
    }
    .col-4, .col-2{
      height: 100%;
    }
    .request-limit{
      margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
    }
    .request-interval{
      display: block;
      margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-3)};
    }
  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/radio-group.ts":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/radio-group.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   radioGroupStyle: () => (/* binding */ radioGroupStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const radioGroupStyle = (props) => {
    const theme = props.theme;
    const gutter = props.gutter;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    margin-bottom: 0;
    label {
      display: inline-flex;
      align-items: center;
      margin-right: ${gutter || theme.sizes[4]};
      .jimu-radio {
        margin-right: ${theme.gutters[4]};
      }
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/side-popper.ts":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/side-popper.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sidePopperStyles: () => (/* binding */ sidePopperStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function sidePopperStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(260)};
    height: calc(100% - 70px);
    padding: 0;
    overflow: hidden;
    border-radius: 0;
    box-shadow: 0 0 0;
    border-left: 1px solid ${theme.colors.palette.light[800]};
    border-right: 1px solid ${theme.colors.palette.light[800]};
    border-top: 0;
    border-bottom: 0;
    margin: 0 !important;
  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/sort-setting.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/sort-setting.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortSettingStyle: () => (/* binding */ sortSettingStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const sortSettingStyle = (props) => {
    const theme = props.theme;
    const colors = theme.colors;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width:100%;
    &.single-row-item {
        .select-con {
            padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(0)};
            .option-name-con {
                margin-bottom: 0;
                .close-con>span {
                    margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
                }
            }
        }
    }
    .padding-0 {
        padding: 0;
    }
    .jimu-tree-item {
        margin-bottom:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
    }
    .jimu-tree-item__draggable {
        box-shadow: 0 0 0 2px ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(colors.white, 0.3)};
    }
    .add-option-btn {
        & {
            color:${colors.palette.primary[600]};
            margin-top:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
            margin-bottom: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(17)};
            cursor: pointer;
            font-size:13px;
            overflow: hidden;
            padding: 0;
        }
        .add-option-icon{
            margin-right: 4px;
        }
    }
    .no-sort-remind {
        margin: 70px auto 0;
        color: ${colors.palette.light[800]};
        font-size: 13px;
        text-align: center;
    }
    .select-con {
        & {
            box-sizing:border-box;
            padding-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
            padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
        }
        .option-name-con {
            & {
              display: flex;
              align-items: center;
              margin-bottom:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(5)};
              width: 100%;
            }
            .option-name {
              font-size: 13px;
              line-height: 13px;
              color: ${colors.palette.dark[800]};
              height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
              line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(25)};
              cursor: pointer;
              overflow: hidden;
              width: 0;
              padding-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
              .edit-input {
                max-width: 88%;
                input {
                    width: 80px;
                }
                input:placeholder-shown {
                    text-overflow: ellipsis;
                }
              }
            }
            .option-name input {
                display:inline-block;
                width: auto;
                height: 100%;
            }
            .jimu-input {
                line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(30)};
                vertical-align: middle;
            }
            .input-wrapper {
                vertical-align: middle;
            }
            .option-name-icon-con {
                margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(5)};
                svg {
                    margin-top:  ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(5)};
                }
            }
            .option-name-icon {
                color: ${colors.palette.dark[400]};
                cursor: pointer;
            }
            .option-name span {
                display: inline-block;
                text-overflow: ellipsis;
                overflow:hidden;
            }
            .close-con {
                svg {
                    margin: 0;
                    margin-top:  ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)};
                }
            }
            .close-con>span {
                margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
                color: ${colors.black};
                cursor: pointer;
            }
        }

        .select-down-con {
            & {
                display: flex;
                align-items: center;
                height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(34)};
            }
            .sort-arrow-down-icon {
                margin-right: 0;
            }
            .select-input {
                flex-grow:1;
                color: ${colors.dark};
            }
            .sort-button {
                margin-left: 5px;
                cursor: pointer;
                border:none;
            }
            .sort-field-selector {
                & {
                    background:${colors.palette.secondary[200]};
                    border-radius: 2px;
                    flex-grow: 1;
                    width: 0;
                }
            }
        }
    }


  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/style-picker.ts":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/style-picker.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stylePickerStyles: () => (/* binding */ stylePickerStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const stylePickerStyles = (props) => {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .widget-setting--stylepicker {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }

    .widget-setting--stylepicker-item {
      height: 93px;
      border: 1px solid ${theme.colors.palette.light[500]};
      background-color: ${theme.colors.white};
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        border-color: ${theme.colors.primary};
      }
      &.active {
        border: 2px solid ${theme.colors.primary};
      }
      &.full-width {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/components/widget-selector.ts":
/*!**************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/components/widget-selector.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   widgetSelectorStyles: () => (/* binding */ widgetSelectorStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const widgetSelectorStyles = (props) => {
    const theme = props.theme;
    // eslint-disable-next-line max-len
    const closeImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAsElEQVQ4jaWSLQ7EIBhEv2LxnAzP1cBzAU6DhKCpZneaQHYpP2k6omreCzA9yjf0IgyfGCMZY+g8zy2ADrpgmsA5R977raTC6IJpAiklCSEopTSVVBgddME0AeeclFJTSQ+jCwY5fh9xVERm8E0wkiAzeCjoJcgMbm/wJjdBf4XdOmwF49irdf4Es6l2E7MVXLOSXAJr7XKqkQTMFcwYQiha65JzLruggy4YZPgfPMkHXzQME+F7oHYAAAAASUVORK5CYII=';
    // eslint-disable-next-line max-len
    const widgetPlaceholderImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA20lEQVQ4jWPkidn2n4ECwESJ5iFgABsLI8PBRiuGS732DKJ8bKQbwMHKzKAqyc0gK8zBIMDNilUNI6FYkBBgBxrExPDg9Xes8iy4NIZYSDJ4GYkx/Pj1j6F25Q2cFuD0wo2nXxi42ZkZYu1lGMItpUg34Mrjzwx//0HYT9//IN0AFiZGBjstIaAh/xkOXntLugHGyvwM/FysDBcefGT48PUP6QaI8ELinZ2FicFGQ4iBnRW7UmY2vegGbBIPXn1j+P//P8OXn38ZPn77zXDxwSesBhBMB4QAxXkBAMaDOywJrob4AAAAAElFTkSuQmCC';
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .component-choose-widget-popup{
      .widget-card-active-btn{
        outline: none;
      }
    }
    div.component-choose-widget-popup-modal{
      width: 850px;
      max-width: 850px;
      height: 600px;
      background: ${theme.colors.white};
      border-radius: 4px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      .component-choose-widget-clear-border{
        border: 0;
        padding: 0;
      }
      .modal-content{
        border: 0;
        padding: 20px 10px 20px 40px;
        position: static;
      }
      .component-choose-widget-modal-header{
        .choose-widget-popup-close{
          width: 50px;
          height: 50px;
          display: inline-block;
          right: 28px;
          position: absolute;
          top: 10px;
          &:hover{
            cursor: pointer;
          }
        }
        .choose-widget-popup-close:after{
          content: '';
          display: inline-block;
          width: 16px;
          height: 16px;
          background-image: url(${closeImageUrl});
          position: relative;
          left: 18px;
          top: 12px;
        }
      }
      .component-choose-widget-modal-body{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        margin: 40px 0 10px 0;
        .widget-card-item{
          width: 70px;
          height: 120px;
          border: 0;
          margin: 0 30px 0 0;
          &:hover{
            cursor: pointer;
          }
          .widget-card-image{
            width: 70px;
            height: 70px;
            border: 1px solid #ccc;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            >div{
              width: 30px;
              height: 30px;
              position: relative;
              &:after{
                display: none;
              }
            }
          }
          .widget-card-content{
            font-size: 12px;
            color: #000;
            letter-spacing: 0.33px;
            padding: 2px;
            text-align: center;
            line-height: 14px;
          }
        }
        .widget-card-selected{
          .widget-card-image{
            border: 2px solid #0C5CB6;
            >div:after{
              content: '';
              display: block;
              width: 16px;
              height: 16px;
              position: absolute;
              top: -20px;
              right: -20px;
              background-image: url(${widgetPlaceholderImageUrl});
            }
          }
        }
      }
      .component-choose-widget-modal-footer{
        position: absolute;
        bottom: 20px;
        right: 40px;
        >button{
          font-size: 14px;
          letter-spacing: 0.39px;
          text-align: center;
          vertical-align: middle;
        }
        button:first-of-type {
          background-color: #0075D0;
          border: 1px solid  #0075D0;
          border-radius: 3px;
          color: #ffffff;
        }
        button:last-of-type{
          background-color: #ffffff;
          border: 1px solid #CCCCCC;
          border-radius: 3px;
          color: #000000;
        }
      }
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/setting-components/styles/index.ts":
/*!*****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/setting-components/styles/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JimuLayerViewSelector: () => (/* reexport safe */ _components_jimu_layer_view_selector__WEBPACK_IMPORTED_MODULE_13__.JimuLayerViewSelectorStyles),
/* harmony export */   JimuLayerViewSelectorDeprecated: () => (/* reexport safe */ _components_jimu_layer_view_selector_deprecated__WEBPACK_IMPORTED_MODULE_11__.JimuLayerViewSelectorDeprecatedStyles),
/* harmony export */   JimuLayerViewSelectorDropdown: () => (/* reexport safe */ _components_jimu_layer_view_selector_dropdown__WEBPACK_IMPORTED_MODULE_12__.JimuLayerViewSelectorDropdownStyles),
/* harmony export */   LinkSelectorContent: () => (/* reexport safe */ _components_link_selector_content__WEBPACK_IMPORTED_MODULE_6__.linkSelectorContentStyles),
/* harmony export */   ProxySetting: () => (/* reexport safe */ _components_proxy_setting__WEBPACK_IMPORTED_MODULE_7__.proxySettingStyles),
/* harmony export */   ProxySettingPopup: () => (/* reexport safe */ _components_proxy_setting_popup__WEBPACK_IMPORTED_MODULE_8__.proxySettingPopupStyles),
/* harmony export */   RadioGroup: () => (/* reexport safe */ _components_radio_group__WEBPACK_IMPORTED_MODULE_9__.radioGroupStyle),
/* harmony export */   SettingCollapse: () => (/* reexport safe */ _components_layout_collapse__WEBPACK_IMPORTED_MODULE_5__.settingCollapseStyles),
/* harmony export */   SettingRow: () => (/* reexport safe */ _components_layout_row__WEBPACK_IMPORTED_MODULE_4__.settingRowStyles),
/* harmony export */   SettingSection: () => (/* reexport safe */ _components_layout_section__WEBPACK_IMPORTED_MODULE_3__.settingSectionStyles),
/* harmony export */   SidePopper: () => (/* reexport safe */ _components_side_popper__WEBPACK_IMPORTED_MODULE_10__.sidePopperStyles),
/* harmony export */   SortSetting: () => (/* reexport safe */ _components_sort_setting__WEBPACK_IMPORTED_MODULE_1__.sortSettingStyle),
/* harmony export */   StylePicker: () => (/* reexport safe */ _components_style_picker__WEBPACK_IMPORTED_MODULE_2__.stylePickerStyles),
/* harmony export */   WidgetSelector: () => (/* reexport safe */ _components_widget_selector__WEBPACK_IMPORTED_MODULE_0__.widgetSelectorStyles)
/* harmony export */ });
/* harmony import */ var _components_widget_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/widget-selector */ "./jimu-ui/advanced/lib/setting-components/styles/components/widget-selector.ts");
/* harmony import */ var _components_sort_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sort-setting */ "./jimu-ui/advanced/lib/setting-components/styles/components/sort-setting.ts");
/* harmony import */ var _components_style_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/style-picker */ "./jimu-ui/advanced/lib/setting-components/styles/components/style-picker.ts");
/* harmony import */ var _components_layout_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/section */ "./jimu-ui/advanced/lib/setting-components/styles/components/layout/section.ts");
/* harmony import */ var _components_layout_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/row */ "./jimu-ui/advanced/lib/setting-components/styles/components/layout/row.ts");
/* harmony import */ var _components_layout_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/collapse */ "./jimu-ui/advanced/lib/setting-components/styles/components/layout/collapse.ts");
/* harmony import */ var _components_link_selector_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/link-selector-content */ "./jimu-ui/advanced/lib/setting-components/styles/components/link-selector-content.ts");
/* harmony import */ var _components_proxy_setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/proxy-setting */ "./jimu-ui/advanced/lib/setting-components/styles/components/proxy-setting.ts");
/* harmony import */ var _components_proxy_setting_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/proxy-setting-popup */ "./jimu-ui/advanced/lib/setting-components/styles/components/proxy-setting-popup.ts");
/* harmony import */ var _components_radio_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/radio-group */ "./jimu-ui/advanced/lib/setting-components/styles/components/radio-group.ts");
/* harmony import */ var _components_side_popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/side-popper */ "./jimu-ui/advanced/lib/setting-components/styles/components/side-popper.ts");
/* harmony import */ var _components_jimu_layer_view_selector_deprecated__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/jimu-layer-view-selector-deprecated */ "./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector-deprecated.ts");
/* harmony import */ var _components_jimu_layer_view_selector_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/jimu-layer-view-selector-dropdown */ "./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector-dropdown.ts");
/* harmony import */ var _components_jimu_layer_view_selector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/jimu-layer-view-selector */ "./jimu-ui/advanced/lib/setting-components/styles/components/jimu-layer-view-selector.ts");
















/***/ }),

/***/ "./jimu-ui/lib/components/types.ts":
/*!*****************************************!*\
  !*** ./jimu-ui/lib/components/types.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingType: () => (/* reexport safe */ jimu_core__WEBPACK_IMPORTED_MODULE_0__.LoadingType),
/* harmony export */   NavIconType: () => (/* binding */ NavIconType)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

var NavIconType;
(function (NavIconType) {
    NavIconType["IMAGE"] = "image";
    NavIconType["ICON"] = "icon";
})(NavIconType || (NavIconType = {}));
/**
 * @ignore
 */



/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-core/data-source":
/*!****************************************!*\
  !*** external "jimu-core/data-source" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core_data_source__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-for-builder/templates":
/*!*********************************************!*\
  !*** external "jimu-for-builder/templates" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__;

/***/ }),

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

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

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/expression-builder":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/expression-builder" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_expression_builder__;

/***/ }),

/***/ "jimu-ui/advanced/resource-selector":
/*!*****************************************************!*\
  !*** external "jimu-ui/advanced/resource-selector" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/advanced/utility-selector":
/*!****************************************************!*\
  !*** external "jimu-ui/advanced/utility-selector" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_utility_selector__;

/***/ }),

/***/ "jimu-ui/basic/list-tree":
/*!******************************************!*\
  !*** external "jimu-ui/basic/list-tree" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_list_tree__;

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
  !*** ./jimu-ui/advanced/setting-components.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByFieldSeriesX: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.ByFieldSeriesX),
/* harmony export */   ByFieldSeriesY: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.ByFieldSeriesY),
/* harmony export */   CardLayout: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.CardLayout),
/* harmony export */   CardLayoutSetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.CardLayoutSetting),
/* harmony export */   CollapsableCheckbox: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.CollapsableCheckbox),
/* harmony export */   CollapsableRadio: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.CollapsableRadio),
/* harmony export */   CollapsableToggle: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.CollapsableToggle),
/* harmony export */   DEFAULT_MAX_SUGGESTION: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_MAX_SUGGESTION),
/* harmony export */   DefaultAddress: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.DefaultAddress),
/* harmony export */   DefaultGeocodeLabel: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.DefaultGeocodeLabel),
/* harmony export */   DefaultGeocodeURL: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.DefaultGeocodeURL),
/* harmony export */   DirectionSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.DirectionSelector),
/* harmony export */   JimuLayerViewSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.JimuLayerViewSelector),
/* harmony export */   JimuLayerViewSelectorDeprecated: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.JimuLayerViewSelectorDeprecated),
/* harmony export */   JimuLayerViewSelectorDropdown: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.JimuLayerViewSelectorDropdown),
/* harmony export */   JimuMapViewSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.JimuMapViewSelector),
/* harmony export */   LinkSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.LinkSelector),
/* harmony export */   LinkSelectorContent: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.LinkSelectorContent),
/* harmony export */   LinkSelectorSidePopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.LinkSelectorSidePopper),
/* harmony export */   LinkSetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.LinkSetting),
/* harmony export */   LinkSettingPopup: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.LinkSettingPopup),
/* harmony export */   MAX_RECENT_SEARCHES: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MAX_RECENT_SEARCHES),
/* harmony export */   MAX_SUGGESTION: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MAX_SUGGESTION),
/* harmony export */   MapWidgetSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MapWidgetSelector),
/* harmony export */   MaxCategories: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MaxCategories),
/* harmony export */   MaxPieces: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MaxPieces),
/* harmony export */   MaxSeries: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MaxSeries),
/* harmony export */   MultipleJimuMapConfig: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.MultipleJimuMapConfig),
/* harmony export */   NavQuickStyleItem: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.NavQuickStyleItem),
/* harmony export */   ObjectIdSchema: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.ObjectIdSchema),
/* harmony export */   OpenTypes: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.OpenTypes),
/* harmony export */   OutStatisticFieldNameSplit: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.OutStatisticFieldNameSplit),
/* harmony export */   OutputDsAddress: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.OutputDsAddress),
/* harmony export */   OutputDsObjectField: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.OutputDsObjectField),
/* harmony export */   PageTemplatePopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.PageTemplatePopper),
/* harmony export */   ProxySetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.ProxySetting),
/* harmony export */   ProxySettingPopup: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.ProxySettingPopup),
/* harmony export */   QuickStylePopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.QuickStylePopper),
/* harmony export */   RadioGroup: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.RadioGroup),
/* harmony export */   SearchDataSetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SearchDataSetting),
/* harmony export */   SearchDataType: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SearchDataType),
/* harmony export */   SearchGeneralSetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SearchGeneralSetting),
/* harmony export */   SearchServiceType: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SearchServiceType),
/* harmony export */   SearchSuggestionSetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SearchSuggestionSetting),
/* harmony export */   SettingCollapse: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingCollapse),
/* harmony export */   SettingLayout: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingLayout),
/* harmony export */   SettingRow: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingRow),
/* harmony export */   SettingSection: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingSection),
/* harmony export */   SidePopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SidePopper),
/* harmony export */   SizeMode: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SizeMode),
/* harmony export */   SizeModeSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SizeModeSelector),
/* harmony export */   SortSetting: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.SortSetting),
/* harmony export */   Status: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.Status),
/* harmony export */   StylePicker: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.StylePicker),
/* harmony export */   TemplateList: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.TemplateList),
/* harmony export */   TemplateSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.TemplateSelector),
/* harmony export */   UnControlledSettingCollapse: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.UnControlledSettingCollapse),
/* harmony export */   WidgetList: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.WidgetList),
/* harmony export */   WidgetListPopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.WidgetListPopper),
/* harmony export */   WidgetSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.WidgetSelector),
/* harmony export */   _JimuLayerViewSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._JimuLayerViewSelector),
/* harmony export */   _JimuLayerViewSelectorDropdown: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._JimuLayerViewSelectorDropdown),
/* harmony export */   _JimuMapViewSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._JimuMapViewSelector),
/* harmony export */   _LinkSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._LinkSelector),
/* harmony export */   _LinkSelectorContent: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._LinkSelectorContent),
/* harmony export */   _LinkSelectorSidePopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._LinkSelectorSidePopper),
/* harmony export */   _MapWidgetSelector: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._MapWidgetSelector),
/* harmony export */   _SidePopper: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__._SidePopper),
/* harmony export */   changeCurrentDialog: () => (/* binding */ changeCurrentDialog),
/* harmony export */   changeCurrentPage: () => (/* binding */ changeCurrentPage),
/* harmony export */   checkIsUseDsChenged: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.checkIsUseDsChenged),
/* harmony export */   checkIsWidgetJsonDsChanged: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.checkIsWidgetJsonDsChanged),
/* harmony export */   getAddressFieldsSchemaAndDefaultFieldName: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getAddressFieldsSchemaAndDefaultFieldName),
/* harmony export */   getConfigIdList: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getConfigIdList),
/* harmony export */   getInitOutDataSource: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getInitOutDataSource),
/* harmony export */   getInitSchema: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getInitSchema),
/* harmony export */   getNameOfDefaultAddressField: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getNameOfDefaultAddressField),
/* harmony export */   getNewConfigId: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getNewConfigId),
/* harmony export */   getOutputDataSourceId: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getOutputDataSourceId),
/* harmony export */   getOutputJsonOriginDs: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getOutputJsonOriginDs),
/* harmony export */   getWhetherDsInUseDataSources: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.getWhetherDsInUseDataSources),
/* harmony export */   handelDialogInfos: () => (/* binding */ handelDialogInfos),
/* harmony export */   isDsInDatasources: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.isDsInDatasources),
/* harmony export */   proxySettingUtils: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.proxySettingUtils),
/* harmony export */   setLayoutAuto: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.setLayoutAuto),
/* harmony export */   setLayoutCustom: () => (/* reexport safe */ _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__.setLayoutCustom)
/* harmony export */ });
/* harmony import */ var _lib_setting_components_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/setting-components/styles */ "./jimu-ui/advanced/lib/setting-components/styles/index.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _lib_setting_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/setting-components */ "./jimu-ui/advanced/lib/setting-components/index.ts");




(0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.registerStyles)('jimu-ui/advanced/setting-components/', _lib_setting_components_styles__WEBPACK_IMPORTED_MODULE_0__);
// handel closed dialog ids when page/dialog is changed:
// 1. add `currentDialogId` (splash, or combine with previous pageIds if it exists)
// 2. add splash dialog id
// 3. remove `targetDialogId` if it exists in dialogInfos (only when dialog is changed)
function handelDialogInfos(targetDialogId) {
    var _a, _b;
    const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().appStateInBuilder;
    const currentPageId = state.appRuntimeInfo.currentPageId;
    const currentDialogId = state.appRuntimeInfo.currentDialogId;
    let dialogInfos = state.appRuntimeInfo.dialogInfos || (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.Immutable)({});
    const dialogs = state.appConfig.dialogs;
    const pages = state.appConfig.pages;
    const dialogInfo = {
        canClose: true,
        checked: true,
        isClosed: true
    };
    if (currentDialogId) {
        if ((_a = dialogs[currentDialogId]) === null || _a === void 0 ? void 0 : _a.isSplash) {
            dialogInfos = dialogInfos.set(currentDialogId, dialogInfo);
        }
        if (pages[currentPageId].autoOpenDialogId) {
            dialogInfos = dialogInfos.set(currentPageId + '-' + pages[currentPageId].autoOpenDialogId, dialogInfo);
        }
        if (targetDialogId) { // click dlg item. save all pages related.
            Object.keys(pages).forEach(id => {
                if (pages[id].autoOpenDialogId === currentDialogId) {
                    dialogInfos = dialogInfos.set(id + '-' + currentDialogId, dialogInfo);
                }
            });
        }
    }
    if (!((_b = dialogs[currentDialogId]) === null || _b === void 0 ? void 0 : _b.isSplash)) {
        // eslint-disable-next-line
        Object.keys(dialogs).some(id => {
            if (dialogs[id].isSplash) {
                dialogInfos = dialogInfos.set(id, dialogInfo);
            }
        });
    }
    if (targetDialogId) {
        dialogInfos && Object.keys(dialogInfos).forEach(dlgId => {
            if (dlgId === targetDialogId || dlgId === currentPageId + '-' + targetDialogId) {
                dialogInfos = dialogInfos.set(dlgId, { canClose: isDialogCanClose(targetDialogId), checked: false, isClosed: false });
            }
        });
    }
    return dialogInfos;
}
function isDialogCanClose(dialogId) {
    const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().appStateInBuilder;
    const dialog = state.appConfig.dialogs[dialogId];
    return !dialog.interactionType || !dialog.confirmBeforeClose;
}
function changeCurrentPage(targetPageId) {
    const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().appStateInBuilder;
    const currentPageId = state.appRuntimeInfo.currentPageId;
    const currentDialogId = state.appRuntimeInfo.currentDialogId;
    jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishChangeSelectionToApp(null);
    if (currentDialogId) {
        const dialogInfos = handelDialogInfos();
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishDialogInfosChangeToApp(dialogInfos);
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishDialogChangeToApp(null);
    }
    if (currentPageId !== targetPageId) {
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishPageChangeToApp(targetPageId);
    }
    jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publichActivePagePartChangeToApp(jimu_core__WEBPACK_IMPORTED_MODULE_1__.PagePart.Body);
}
function changeCurrentDialog(targetDialogId, forceRefresh = false) {
    jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishChangeSelectionToApp(null);
    const currentDialogId = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().appStateInBuilder.appRuntimeInfo.currentDialogId;
    if (forceRefresh || targetDialogId !== currentDialogId) {
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishDialogChangeToApp(targetDialogId);
        const dialogInfos = handelDialogInfos(targetDialogId);
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publishDialogInfosChangeToApp(dialogInfos);
        jimu_for_builder__WEBPACK_IMPORTED_MODULE_2__.builderAppSync.publichActivePagePartChangeToApp(null); // should be null when window is open.
    }
}


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});