System.register(["jimu-core","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/resource-selector","jimu-ui/advanced/setting-components","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_resource_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/filled/application/check.svg":
/*!*****************************************************!*\
  !*** ./jimu-icons/svg/filled/application/check.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/check.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/check.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/colors.svg":
/*!********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/colors.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#C5C5C5\" fill-rule=\"evenodd\" d=\"M13 3h-2v2h2zm-3-1v4h4V2zm-7 9h2v2H3zm-1 3v-4h4v4zm9-3h2v2h-2zm-1 3v-4h4v4zM3 3h2v2H3zM2 6V2h4v4z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/star.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/star.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M10.373 5.57 8 .5 5.625 5.57 0 6.23l4.158 3.792L3.056 15.5 8 12.773l4.944 2.727-1.103-5.478L16 6.229zM8 2.857l1.705 3.641 4.002.469-2.957 2.697.788 3.918L8 11.631l-3.539 1.951.79-3.918-2.959-2.697 4.002-.469z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/arrow-down.svg":
/*!************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/arrow-down.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M7.5 1c.291 0 .527.231.527.516v11.508L11.6 9.527a.535.535 0 0 1 .746 0 .508.508 0 0 1 0 .73L7.5 15l-4.846-4.743a.508.508 0 0 1 0-.73.535.535 0 0 1 .746 0l3.573 3.497V1.516c0-.285.236-.516.527-.516\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/arrow-left.svg":
/*!************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/arrow-left.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/arrow-right.svg":
/*!*************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/arrow-right.svg ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M1 7.5c0-.291.231-.527.516-.527h11.508L9.527 3.4a.535.535 0 0 1 0-.746.508.508 0 0 1 .73 0L15 7.5l-4.743 4.846a.508.508 0 0 1-.73 0 .535.535 0 0 1 0-.746l3.497-3.573H1.516A.522.522 0 0 1 1 7.5\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/arrow-up.svg":
/*!**********************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/arrow-up.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M7.5 15a.522.522 0 0 1-.527-.516V2.976L3.4 6.473a.535.535 0 0 1-.746 0 .508.508 0 0 1 0-.73L7.5 1l4.846 4.743a.508.508 0 0 1 0 .73.535.535 0 0 1-.746 0L8.027 2.976v11.508A.522.522 0 0 1 7.5 15\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/down.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/down.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/bold.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/bold.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4 3a1 1 0 0 1 1-1h2.75a3.25 3.25 0 0 1 2.33 5.516A3.25 3.25 0 0 1 9.75 14H5a1 1 0 0 1-1-1V7.5zm1 4.5h2.75a2.25 2.25 0 0 0 0-4.5H5zm0 1V13h4.75a2.25 2.25 0 0 0 0-4.5h-2z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/italic.svg":
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/italic.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M6 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-2l-2 10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2l2-10h-2a.5.5 0 0 1-.5-.5\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/lock.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/lock.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0M5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5zm6 1H3v8h9V7zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/play.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/play.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"m2 1 12 7-12 7zm9.983 6.999L3 2.723v10.553z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/strike-through.svg":
/*!***********************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/strike-through.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M11 2.02a.02.02 0 0 0-.02-.02H8a3 3 0 0 0-2.829 4l1.097.001A2 2 0 0 1 8 3h2v.5a.5.5 0 0 0 1 0zM12.5 7a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm-1.9 1.999h1.111c.185.456.289.964.289 1.501 0 1.866-1.252 3.392-2.83 3.495L9 14H6a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 1 0v.499L9 13c1.105 0 2-1.12 2-2.5a2.96 2.96 0 0 0-.311-1.34z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/text-center.svg":
/*!********************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/text-center.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M5.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/text-justify.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/text-justify.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/text-left.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/text-left.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M9.5 3h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1m-7 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m6 3h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1m5 3h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/text-right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/text-right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M6.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/underscore.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/underscore.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M5 2.5a.5.5 0 0 0-1 0V8a4 4 0 0 0 8 0V2.5a.5.5 0 0 0-1 0V8a3 3 0 0 1-6 0zm7 11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/unlock.svg":
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/unlock.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0M9 7H3v8h9V7h-1zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/info.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/info.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icons/dash-dot-line.svg":
/*!*************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icons/dash-dot-line.svg ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 46 1\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0h5v1H0zm10 0h5v1h-5zm15 0h-5v1h5zm5 0h5v1h-5zm16 0h-6v1h6zM7 0h1v1H7zm11 0h-1v1h1zm9 0h1v1h-1zm11 0h-1v1h1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icons/dash-double-dot-line.svg":
/*!********************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icons/dash-double-dot-line.svg ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 46 1\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M5 0H0v1h5zm13 0h-5v1h5zm8 0h5v1h-5zm20 0h-7v1h7zM7 0h1v1H7zm14 0h-1v1h1zm12 0h1v1h-1zM11 0h-1v1h1zm12 0h1v1h-1zm14 0h-1v1h1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icons/dashed-line.svg":
/*!***********************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icons/dashed-line.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 46 1\"><path fill=\"#fff\" d=\"M0 1h3V0H0zM6 1h3V0H6zM15 1h-3V0h3zM18 1h3V0h-3zM27 1h-3V0h3zM30 1h3V0h-3zM39 1h-3V0h3zM42 1h4V0h-4z\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icons/dotted-line.svg":
/*!***********************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icons/dotted-line.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 46 1\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 1h1V0H0zm6 0h1V0H6zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zM3 1h1V0H3zm7 0H9V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm7 0h-1V0h1zm5 0h1V0h-1zm4 0h-1V0h1zm2 0h1V0h-1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icons/double-line.svg":
/*!***********************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icons/double-line.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 46 4\"><path fill=\"#fff\" d=\"M0 1h46V0H0zM0 4h46V3H0z\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icons/solid-line.svg":
/*!**********************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icons/solid-line.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 46 1\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M46 1H0V0h46z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/lib/icons/navigation/circle.svg":
/*!*************************************************!*\
  !*** ./jimu-ui/lib/icons/navigation/circle.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\"><path fill=\"#000\" fill-rule=\"nonzero\" d=\"M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/lib/icons/navigation/cube.svg":
/*!***********************************************!*\
  !*** ./jimu-ui/lib/icons/navigation/cube.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"nonzero\" d=\"m10 0 10 10-10 10L0 10z\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/lib/icons/navigation/dot.svg":
/*!**********************************************!*\
  !*** ./jimu-ui/lib/icons/navigation/dot.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 6\"><circle cx=\"1104\" cy=\"1049\" r=\"3\" fill=\"#000\" fill-rule=\"nonzero\" transform=\"translate(-1101 -1046)\"></circle></svg>"

/***/ }),

/***/ "./jimu-ui/lib/icons/navigation/double-circle.svg":
/*!********************************************************!*\
  !*** ./jimu-ui/lib/icons/navigation/double-circle.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"nonzero\" d=\"M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12\"></path></svg>"

/***/ }),

/***/ "./jimu-ui/lib/icons/navigation/pill.svg":
/*!***********************************************!*\
  !*** ./jimu-ui/lib/icons/navigation/pill.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 4\"><rect width=\"8\" height=\"4\" x=\"1103\" y=\"1123\" fill=\"#000\" fill-rule=\"nonzero\" rx=\"2\" transform=\"translate(-1103 -1123)\"></rect></svg>"

/***/ }),

/***/ "./jimu-ui/lib/icons/uppercase.svg":
/*!*****************************************!*\
  !*** ./jimu-ui/lib/icons/uppercase.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 12\"><path fill=\"#000\" fill-rule=\"nonzero\" d=\"m6.828.535 4.966 11.01A.323.323 0 0 1 11.5 12a.776.776 0 0 1-.707-.455L9.182 8H2.818l-1.611 3.545A.776.776 0 0 1 .5 12a.323.323 0 0 1-.294-.456L5.172.535a.909.909 0 0 1 1.656 0M6 1 3.272 7h5.456z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/filled/application/check.tsx":
/*!*************************************************!*\
  !*** ./jimu-icons/filled/application/check.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckFilled: () => (/* binding */ CheckFilled)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_filled_application_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/filled/application/check.svg */ "./jimu-icons/svg/filled/application/check.svg");
/* harmony import */ var _svg_filled_application_check_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_filled_application_check_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const CheckFilled = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_filled_application_check_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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

/***/ "./jimu-icons/outlined/application/colors.tsx":
/*!****************************************************!*\
  !*** ./jimu-icons/outlined/application/colors.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorsOutlined: () => (/* binding */ ColorsOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_colors_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/colors.svg */ "./jimu-icons/svg/outlined/application/colors.svg");
/* harmony import */ var _svg_outlined_application_colors_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_colors_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ColorsOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_colors_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/arrow-down.tsx":
/*!********************************************************!*\
  !*** ./jimu-icons/outlined/directional/arrow-down.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrowDownOutlined: () => (/* binding */ ArrowDownOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/arrow-down.svg */ "./jimu-icons/svg/outlined/directional/arrow-down.svg");
/* harmony import */ var _svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ArrowDownOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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

/***/ "./jimu-icons/outlined/editor/bold.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/bold.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoldOutlined: () => (/* binding */ BoldOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_bold_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/bold.svg */ "./jimu-icons/svg/outlined/editor/bold.svg");
/* harmony import */ var _svg_outlined_editor_bold_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_bold_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const BoldOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_bold_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/italic.tsx":
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/italic.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItalicOutlined: () => (/* binding */ ItalicOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_italic_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/italic.svg */ "./jimu-icons/svg/outlined/editor/italic.svg");
/* harmony import */ var _svg_outlined_editor_italic_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_italic_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ItalicOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_italic_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/lock.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/lock.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockOutlined: () => (/* binding */ LockOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/lock.svg */ "./jimu-icons/svg/outlined/editor/lock.svg");
/* harmony import */ var _svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const LockOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/play.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/play.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayOutlined: () => (/* binding */ PlayOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_play_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/play.svg */ "./jimu-icons/svg/outlined/editor/play.svg");
/* harmony import */ var _svg_outlined_editor_play_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_play_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const PlayOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_play_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/strike-through.tsx":
/*!*******************************************************!*\
  !*** ./jimu-icons/outlined/editor/strike-through.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrikeThroughOutlined: () => (/* binding */ StrikeThroughOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_strike_through_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/strike-through.svg */ "./jimu-icons/svg/outlined/editor/strike-through.svg");
/* harmony import */ var _svg_outlined_editor_strike_through_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_strike_through_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const StrikeThroughOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_strike_through_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/text-center.tsx":
/*!****************************************************!*\
  !*** ./jimu-icons/outlined/editor/text-center.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextCenterOutlined: () => (/* binding */ TextCenterOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_text_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/text-center.svg */ "./jimu-icons/svg/outlined/editor/text-center.svg");
/* harmony import */ var _svg_outlined_editor_text_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_text_center_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const TextCenterOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_text_center_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/text-justify.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/editor/text-justify.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextJustifyOutlined: () => (/* binding */ TextJustifyOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_text_justify_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/text-justify.svg */ "./jimu-icons/svg/outlined/editor/text-justify.svg");
/* harmony import */ var _svg_outlined_editor_text_justify_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_text_justify_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const TextJustifyOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_text_justify_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/text-left.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/editor/text-left.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextLeftOutlined: () => (/* binding */ TextLeftOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_text_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/text-left.svg */ "./jimu-icons/svg/outlined/editor/text-left.svg");
/* harmony import */ var _svg_outlined_editor_text_left_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_text_left_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const TextLeftOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_text_left_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/text-right.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/editor/text-right.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextRightOutlined: () => (/* binding */ TextRightOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_text_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/text-right.svg */ "./jimu-icons/svg/outlined/editor/text-right.svg");
/* harmony import */ var _svg_outlined_editor_text_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_text_right_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const TextRightOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_text_right_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/underscore.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/editor/underscore.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnderscoreOutlined: () => (/* binding */ UnderscoreOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_underscore_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/underscore.svg */ "./jimu-icons/svg/outlined/editor/underscore.svg");
/* harmony import */ var _svg_outlined_editor_underscore_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_underscore_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const UnderscoreOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_underscore_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/unlock.tsx":
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/unlock.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnlockOutlined: () => (/* binding */ UnlockOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/unlock.svg */ "./jimu-icons/svg/outlined/editor/unlock.svg");
/* harmony import */ var _svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const UnlockOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/suggested/info.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/suggested/info.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoOutlined: () => (/* binding */ InfoOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/suggested/info.svg */ "./jimu-icons/svg/outlined/suggested/info.svg");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const InfoOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/animation-info.ts":
/*!*************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/animation-info.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationInfos: () => (/* binding */ animationInfos),
/* harmony export */   oneByOneAnimationInfos: () => (/* binding */ oneByOneAnimationInfos)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const noneIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_none.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_none.svg");
const fadeIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_fade.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_fade.svg");
const floatinIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_floatin.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_floatin.svg");
const flyinIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_flyin.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_flyin.svg");
const spinIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_spin.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_spin.svg");
const wipeIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_wipe.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_wipe.svg");
const zoomIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_zoom.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_zoom.svg");
const animationInfos = [
    {
        icon: noneIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.None
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.FadeIn,
        icon: fadeIcon,
        supportedTriggers: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationTriggerType.ScrollIntoView]
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.FloatIn,
        icon: floatinIcon,
        supportedTriggers: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationTriggerType.ScrollIntoView],
        supportedDirections: [
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Bottom,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Left,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Right
        ]
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.FlyIn,
        icon: flyinIcon,
        supportedTriggers: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationTriggerType.ScrollIntoView],
        supportedDirections: [
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Bottom,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Left,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Right
        ]
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.SpinIn,
        icon: spinIcon,
        supportedTriggers: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationTriggerType.ScrollIntoView]
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.WipeIn,
        icon: wipeIcon,
        supportedTriggers: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationTriggerType.ScrollIntoView],
        supportedDirections: [
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Bottom,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Left,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Right
        ]
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.ZoomIn,
        icon: zoomIcon,
        supportedTriggers: [jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationTriggerType.ScrollIntoView]
    }
];
const oneByOneAnimationInfos = [
    {
        icon: noneIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.None
    },
    {
        icon: fadeIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.FadeIn
    },
    {
        icon: floatinIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.FloatIn,
        supportedDirections: [
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Bottom,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Left,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Right
        ]
    },
    {
        icon: wipeIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.WipeIn,
        supportedDirections: [
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Bottom,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Left,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Right
        ]
    },
    {
        icon: zoomIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.ZoomIn
    }
];


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/animation-part.tsx":
/*!**************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/animation-part.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationPart: () => (/* binding */ AnimationPart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/svg/outlined/directional/arrow-up.svg */ "./jimu-icons/svg/outlined/directional/arrow-up.svg");
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_directional_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/svg/outlined/directional/arrow-down.svg */ "./jimu-icons/svg/outlined/directional/arrow-down.svg");
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/svg/outlined/directional/arrow-left.svg */ "./jimu-icons/svg/outlined/directional/arrow-left.svg");
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/svg/outlined/directional/arrow-right.svg */ "./jimu-icons/svg/outlined/directional/arrow-right.svg");
/* harmony import */ var jimu_icons_svg_outlined_directional_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_directional_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jimu_icons_svg_outlined_application_star_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/svg/outlined/application/star.svg */ "./jimu-icons/svg/outlined/application/star.svg");
/* harmony import */ var jimu_icons_svg_outlined_application_star_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_application_star_svg__WEBPACK_IMPORTED_MODULE_6__);
/** @jsx jsx */







class AnimationPart extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onWidgetEffectTypeChanged = (e, value) => {
            e.stopPropagation();
            const setting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.effectSetting || {});
            if ((setting === null || setting === void 0 ? void 0 : setting.type) === value) {
                this.props.onPreviewClicked();
            }
            else if (this.props.isOneByOne) {
                this.props.onSettingChange(setting
                    .set('type', value)
                    .setIn(['option', 'direction'], null)
                    .setIn(['option', 'start'], jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationStartMode.AfterPrevious)
                    .setIn(['option', 'parentMode'], jimu_core__WEBPACK_IMPORTED_MODULE_0__.ParentAnimationMode.OneByOne));
            }
            else {
                this.props.onSettingChange(setting.set('type', value).setIn(['option', 'direction'], null));
            }
        };
        this.onDurationChange = (e) => {
            const setting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.effectSetting || {});
            this.props.onSettingChange(setting.setIn(['option', 'configType'], e.target.value));
        };
        this.onStartModeChange = (e) => {
            const setting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.effectSetting || {});
            this.props.onSettingChange(setting.setIn(['option', 'start'], e.target.value));
        };
        this.onParentModeChange = (e) => {
            const setting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.effectSetting || {});
            this.props.onSettingChange(setting.setIn(['option', 'parentMode'], e.target.value));
        };
        this.onWidgetEffectDirectionChanged = (e) => {
            const setting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.effectSetting || {});
            this.props.onSettingChange(setting.setIn(['option', 'direction'], e.target.value));
        };
    }
    createAnimationCard(metaInfo, index) {
        const { effectSetting } = this.props;
        const effectType = (effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.type) || jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.None;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('d-flex flex-column align-items-center card-item', {
                selected: metaInfo.type === effectType
            }), key: index },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { icon: true, role: 'option', "aria-label": this.props.formatMessage(metaInfo.type.toLowerCase()), "aria-selected": metaInfo.type === effectType, className: 'd-flex justify-content-center card-content border-0', onClick: (e) => { this.onWidgetEffectTypeChanged(e, metaInfo.type); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: 'w-100', currentColor: false, icon: metaInfo.icon || (jimu_icons_svg_outlined_application_star_svg__WEBPACK_IMPORTED_MODULE_6___default()), size: 72 })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'card-name flex-grow-1 d-flex align-items-start mt-1' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'text-center card-name-content', title: this.props.formatMessage(metaInfo.type.toLowerCase()) }, this.props.formatMessage(metaInfo.type.toLowerCase())))));
    }
    chooseDirectionIcon(direction) {
        switch (direction) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Bottom:
                return (jimu_icons_svg_outlined_directional_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2___default());
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Left:
                return (jimu_icons_svg_outlined_directional_arrow_right_svg__WEBPACK_IMPORTED_MODULE_5___default());
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Right:
                return (jimu_icons_svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_4___default());
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top:
                return (jimu_icons_svg_outlined_directional_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3___default());
            default:
                return null;
        }
    }
    createEffectDirectionChooser(directions) {
        var _a;
        const { effectSetting } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'direction-select px-4 mb-4' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'effect-title mb-2' }, this.props.formatMessage('direction')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { defaultValue: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationDirection.Top, value: (_a = effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.option) === null || _a === void 0 ? void 0 : _a.direction, onChange: this.onWidgetEffectDirectionChanged, size: 'sm', "aria-label": this.props.formatMessage('direction') }, directions.map((dir, index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: dir, key: index },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: 'mx-1', icon: this.chooseDirectionIcon(dir), size: 12 }),
                this.props.formatMessage(dir.toLowerCase())))))));
    }
    getStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .animation-cards {
        padding: 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .separator {
        width: calc(100% - 2rem);
        height: 1px;
        margin: 0 1rem 1rem;
        background: var(--light-500);
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5rem;
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-600);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `;
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const { formatMessage, effectSetting, metaInfos, isRoot, isOneByOne } = this.props;
        const usedEffectInfo = metaInfos.find((item) => item.type === (effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.type));
        const hasEffect = effectSetting != null && effectSetting.type !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.None;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'bg-light-300 border-color-gray-400', css: this.getStyle() },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 animation-panel-border' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, { role: 'listbox', className: 'animation-cards' }, metaInfos.map((info, index) => this.createAnimationCard(info, index))),
                usedEffectInfo && usedEffectInfo.type !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.None &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator' }),
                usedEffectInfo && usedEffectInfo.type !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationType.None &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'duration-input px-4 mb-4' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'effect-title mb-2' }, this.props.formatMessage('effect')),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: (_b = (_a = effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.option) === null || _a === void 0 ? void 0 : _a.configType) !== null && _b !== void 0 ? _b : jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationEffectType.Default, onChange: this.onDurationChange, size: 'sm', "aria-label": this.props.formatMessage('effect') }, Object.entries(jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationEffectType).map(([key, type], index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: index, value: type }, formatMessage(key.toLowerCase())))))),
                (usedEffectInfo === null || usedEffectInfo === void 0 ? void 0 : usedEffectInfo.supportedDirections) &&
                    this.createEffectDirectionChooser(usedEffectInfo.supportedDirections),
                !isRoot && hasEffect && isOneByOne && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'start-input px-4 mb-4' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'effect-title mb-2' }, this.props.formatMessage('start')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: (_d = (_c = effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.option) === null || _c === void 0 ? void 0 : _c.start) !== null && _d !== void 0 ? _d : jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationStartMode.WithPrevious, onChange: this.onStartModeChange, size: 'sm', "aria-label": this.props.formatMessage('start') }, Object.entries(jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationStartMode).map(([key, type], index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: index, value: type }, formatMessage(key.toLowerCase()))))))),
                hasEffect && isOneByOne && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'start-input px-4 mb-4' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'effect-title mb-2' }, this.props.formatMessage('playAnimation')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: (_f = (_e = effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.option) === null || _e === void 0 ? void 0 : _e.parentMode) !== null && _f !== void 0 ? _f : jimu_core__WEBPACK_IMPORTED_MODULE_0__.ParentAnimationMode.OneByOne, onChange: this.onParentModeChange, size: 'sm', "aria-label": this.props.formatMessage('playAnimation') }, Object.entries(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ParentAnimationMode).map(([key, type], index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: index, value: type }, formatMessage(key.toLowerCase()))))))))));
    }
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/animation-popper-content.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/animation-popper-content.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/directional/down */ "./jimu-icons/outlined/directional/down.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _animation_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-info */ "./jimu-ui/advanced/lib/style-setting-components/animation-info.ts");
/* harmony import */ var _animation_part__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-part */ "./jimu-ui/advanced/lib/style-setting-components/animation-part.tsx");
/** @jsx jsx */






class AnimationPopperContent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onAsOneSettingChange = (setting) => {
            this.props.onSettingChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationPlayMode.AsOne, setting);
        };
        this.onOneByOneSettingChange = (setting) => {
            this.props.onSettingChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationPlayMode.OneByOne, setting);
        };
        this.previewAsOne = () => {
            this.props.onPreviewClicked(jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationPlayMode.AsOne);
        };
        this.previewOneByOne = () => {
            this.props.onPreviewClicked(jimu_core__WEBPACK_IMPORTED_MODULE_0__.AnimationPlayMode.OneByOne);
        };
        this.toggleAsOneOpened = () => {
            this.setState({
                asOneOpened: !this.state.asOneOpened
            });
        };
        this.toggleOneByOneOpened = () => {
            this.setState({
                oneByOneOpened: !this.state.oneByOneOpened
            });
        };
        this.state = {
            asOneOpened: true,
            oneByOneOpened: !(this.props.supportAsOne && this.props.supportOneByOne)
        };
    }
    getStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .sub-header {
        padding: 0.5rem 0.5rem 0.5rem 1rem;

        .title {
          font-size: 14px;
        }
      }
    `;
    }
    render() {
        const { formatMessage, supportOneByOne, supportAsOne, effectSetting, oneByOneSetting } = this.props;
        const canToggle = supportOneByOne && supportAsOne;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'bg-light-300 border-color-gray-400', css: this.getStyle() },
            supportAsOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'p-0', title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 d-flex justify-content-between align-items-center sub-header' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate title', title: `${supportOneByOne && this.props.selectedWidgetLabel}`, css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-width: 80%;` }, supportOneByOne && this.props.selectedWidgetLabel),
                    canToggle && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', type: 'tertiary', icon: true, onClick: this.toggleAsOneOpened },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_1__.DownOutlined, { size: 's', rotate: this.state.asOneOpened ? 180 : 0 }))) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, { isOpen: this.state.asOneOpened, className: 'mt-0' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_animation_part__WEBPACK_IMPORTED_MODULE_5__.AnimationPart, { effectSetting: effectSetting, metaInfos: _animation_info__WEBPACK_IMPORTED_MODULE_4__.animationInfos, onSettingChange: this.onAsOneSettingChange, previewEnabled: true, onPreviewClicked: this.previewAsOne, formatMessage: formatMessage }))),
            supportOneByOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'p-0', title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 d-flex justify-content-between align-items-center sub-header' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate title', title: `${supportAsOne && formatMessage('widgetByWidget')}`, css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `max-width: 80%;` }, supportAsOne && formatMessage('widgetByWidget')),
                    canToggle && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', type: 'tertiary', icon: true, onClick: this.toggleOneByOneOpened },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_1__.DownOutlined, { size: 's', rotate: this.state.oneByOneOpened ? 180 : 0 }))) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, { isOpen: this.state.oneByOneOpened, className: 'mt-0' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_animation_part__WEBPACK_IMPORTED_MODULE_5__.AnimationPart, { effectSetting: oneByOneSetting, metaInfos: _animation_info__WEBPACK_IMPORTED_MODULE_4__.oneByOneAnimationInfos, onSettingChange: this.onOneByOneSettingChange, previewEnabled: true, isOneByOne: true, isRoot: this.props.isRoot, onPreviewClicked: this.previewOneByOne, formatMessage: formatMessage })))));
    }
}
function getSelectedWidgetLabel(state) {
    var _a, _b, _c, _d, _e, _f;
    const appState = state.appStateInBuilder;
    const appConfig = appState === null || appState === void 0 ? void 0 : appState.appConfig;
    const selection = (_a = appState === null || appState === void 0 ? void 0 : appState.appRuntimeInfo) === null || _a === void 0 ? void 0 : _a.selection;
    if (selection) {
        const { layoutId, layoutItemId } = selection;
        const layoutItem = (_d = (_c = (_b = appConfig.layouts) === null || _b === void 0 ? void 0 : _b[layoutId]) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d[layoutItemId];
        if ((layoutItem === null || layoutItem === void 0 ? void 0 : layoutItem.type) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Widget) {
            const widget = appConfig.widgets[layoutItem.widgetId];
            return {
                selectedWidgetLabel: (_e = widget === null || widget === void 0 ? void 0 : widget.label) !== null && _e !== void 0 ? _e : ''
            };
        }
    }
    else {
        const dialogId = (_f = appState === null || appState === void 0 ? void 0 : appState.appRuntimeInfo) === null || _f === void 0 ? void 0 : _f.currentDialogId;
        if (dialogId && appConfig.dialogs[dialogId]) {
            const dialog = appConfig.dialogs[dialogId];
            return { selectedWidgetLabel: dialog.label };
        }
    }
    return {
        selectedWidgetLabel: ''
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect(getSelectedWidgetLabel)(AnimationPopperContent));


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/animation-setting.tsx":
/*!*****************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/animation-setting.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationSettingComponent: () => (/* binding */ AnimationSettingComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _animation_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-info */ "./jimu-ui/advanced/lib/style-setting-components/animation-info.ts");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _animation_popper_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-popper-content */ "./jimu-ui/advanced/lib/style-setting-components/animation-popper-content.tsx");
/* harmony import */ var jimu_icons_outlined_editor_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/play */ "./jimu-icons/outlined/editor/play.tsx");
/* harmony import */ var jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/outlined/suggested/info */ "./jimu-icons/outlined/suggested/info.tsx");
/** @jsx jsx */







const animationIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_none.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_none.svg");
class AnimationSettingComponent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.sidePopperTrigger = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.buttonRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.toggleSidePanel = () => {
            this.setState({ showSidePanel: !this.state.showSidePanel });
        };
        this.previewAnimation = (e) => {
            e.stopPropagation();
            this.props.onPreviewClicked(null);
        };
        this.state = {
            showSidePanel: false
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.contentId !== prevProps.contentId && this.state.showSidePanel) {
            this.setState({ showSidePanel: false });
        }
    }
    getAnimBoxStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      background-color: transparent;
      position: relative;
      width: 100%;
      height: 72px;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;

        &, &:hover {
          background: var(--light-200);
        }

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--light-500);

          .jimu-rtl & {
            transform: rotateZ(45deg);
          }
        }
      }

      .amin-icons  {
        display: inline-grid;
        grid-template-columns: auto 26px;
        grid-column-gap: .5rem;
        .jimu-icon {
          margin-right: 0;
        }
      }
      .anim-labels {
        align-self: stretch;
        .anim-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
        }
      }
    `;
    }
    getSidePopperStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .header {
        height: 60px;
        padding: 0 0.5rem;
      }
      .side-popper-title {
        color: var(--dark-600);
        font-size: 16px;
      }
      .effect-title {
        color: var(--dark-600);
        font-size: 13px;
      }
      .side-content {
        position: relative;
        width: 100%;
        overflow: auto;
      }
    `;
    }
    render() {
        var _a, _b;
        const { effectSetting, oneByOneSetting, formatMessage, previewEnabled, supportAsOne, supportOneByOne } = this.props;
        const usedAsOneEffect = _animation_info__WEBPACK_IMPORTED_MODULE_1__.animationInfos.find((item) => item.type === (effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.type));
        const usedOneByOneEffect = _animation_info__WEBPACK_IMPORTED_MODULE_1__.oneByOneAnimationInfos.find((item) => item.type === (oneByOneSetting === null || oneByOneSetting === void 0 ? void 0 : oneByOneSetting.type));
        const hasTwoEffects = supportAsOne && supportOneByOne;
        const iconSize = hasTwoEffects ? 32 : 48;
        const asOneEffectName = (effectSetting === null || effectSetting === void 0 ? void 0 : effectSetting.type) ? formatMessage(effectSetting.type.toLowerCase()) : formatMessage('none');
        const oneByOneEffectName = (oneByOneSetting === null || oneByOneSetting === void 0 ? void 0 : oneByOneSetting.type) ? formatMessage(oneByOneSetting.type.toLowerCase()) : formatMessage('none');
        let ariaLabel = '';
        if (supportAsOne) {
            ariaLabel = ariaLabel + asOneEffectName;
        }
        if (hasTwoEffects) {
            ariaLabel = ariaLabel + '/';
        }
        if (supportOneByOne) {
            ariaLabel = ariaLabel + oneByOneEffectName;
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anima-box d-flex justify-content-center align-items-center', css: this.getAnimBoxStyle() },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { className: 'img-tip d-flex justify-content-center align-items-center border-0', onClick: this.toggleSidePanel, title: ariaLabel, "aria-label": ariaLabel, icon: true },
                    supportAsOne && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('anim-icon first', { 'has-sibling': hasTwoEffects }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { icon: (usedAsOneEffect === null || usedAsOneEffect === void 0 ? void 0 : usedAsOneEffect.icon) || animationIcon, size: iconSize }))),
                    hasTwoEffects && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'diag-sep' }),
                    supportOneByOne && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('anim-icon second', { 'has-sibling': hasTwoEffects }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { icon: (usedOneByOneEffect === null || usedOneByOneEffect === void 0 ? void 0 : usedOneByOneEffect.icon) || animationIcon, size: iconSize })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-labels d-flex' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-label', title: `${asOneEffectName}${hasTwoEffects ? ' / ' : ''}${supportOneByOne ? oneByOneEffectName : ''}` },
                            supportAsOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, asOneEffectName),
                            hasTwoEffects && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'mx-1' }, "/"),
                            supportOneByOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, oneByOneEffectName)),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { title: formatMessage('scrollIntoView') },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { className: 'p-0', icon: true, type: 'tertiary', size: 'sm' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_6__.InfoOutlined, { size: 'm' })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'amin-icons w-100', ref: this.sidePopperTrigger },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: 'sm', ref: this.buttonRef, onClick: this.toggleSidePanel, className: 'text-truncate', title: formatMessage('change') }, formatMessage('change')),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { title: formatMessage('preview'), placement: 'bottom' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'default', size: 'sm', icon: true, disabled: !previewEnabled, onClick: this.previewAnimation },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_play__WEBPACK_IMPORTED_MODULE_5__.PlayOutlined, { size: 's' })))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SidePopper, { isOpen: this.state.showSidePanel, css: this.getSidePopperStyle(), position: 'right', toggle: this.toggleSidePanel, trigger: (_a = this.sidePopperTrigger) === null || _a === void 0 ? void 0 : _a.current, title: formatMessage('animationSetting'), backToFocusNode: (_b = this.buttonRef) === null || _b === void 0 ? void 0 : _b.current },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'side-content' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_animation_popper_content__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.props))))));
    }
}
AnimationSettingComponent.defaultProps = {
    onSettingChange: () => { },
    previewEnabled: true,
    supportOneByOne: false,
    onPreviewClicked: () => { },
    formatMessage: id => id
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/background-setting.tsx":
/*!******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/background-setting.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundSetting: () => (/* binding */ BackgroundSetting),
/* harmony export */   _BackgroundSetting: () => (/* binding */ _BackgroundSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/resource-selector */ "jimu-ui/advanced/resource-selector");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */






/**
 * The `BackgroundSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { BackgroundSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
class _BackgroundSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.openBrowseImage = (imageParam) => {
            const { background } = this.props;
            this.props.onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, background, { image: imageParam }));
        };
        this._onPositionChange = (e) => {
            const { background } = this.props;
            const value = e.target.value;
            this.props.onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, background, { fillType: value }));
        };
        this._onColorChange = (color) => {
            const { background } = this.props;
            this.props.onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, background, { color: color }));
        };
        this.translate = (id, values) => {
            var _a, _b;
            const messages = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
            return (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.intl) === null || _b === void 0 ? void 0 : _b.formatMessage({ id: id, defaultMessage: messages[id] }, values);
        };
        this.getFillType = () => {
            return [{
                    value: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FIT,
                    label: this.translate('fit')
                }, {
                    value: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL,
                    label: this.translate('fill')
                }, {
                    value: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.CENTER,
                    label: this.translate('center')
                }, {
                    value: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.TILE,
                    label: this.translate('tile')
                }, {
                    value: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.STRETCH,
                    label: this.translate('stretch')
                }];
        };
        this.fileInput = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    }
    render() {
        var _a;
        const { background, className, style, theme, theme2 } = this.props;
        const selectedName = (_a = background.image) === null || _a === void 0 ? void 0 : _a.originalName;
        const describedId = `image-dynamic-selected-${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUID()}`;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'jimu-builder--background-setting'), style: style },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.translate('fill') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ThemeColorPicker, { className: 'ml-auto', title: this.translate('fillColor'), "aria-label": this.translate('fillColor'), specificTheme: theme2 || theme, onChange: this._onColorChange, value: (background.color) })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { className: 'background-image', label: this.translate('image') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_3__.ImageSelector, Object.assign({ widgetId: 'background-setting', buttonLabel: this.translate('browse'), buttonSize: 'sm', className: 'w-50', buttonClassName: 'text-dark d-flex justify-content-center btn-browse', onChange: this.openBrowseImage, imageParam: background.image, "aria-label": this.translate('browseImage') }, (selectedName ? { 'aria-describedby': describedId } : {}))),
                selectedName &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: describedId, style: { display: 'none' }, "aria-label": this.translate('numSelected', { number: selectedName }) })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { className: 'background-image-fill-type', label: this.translate('position') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { "aria-label": this.translate('position'), size: 'sm', className: 'fill-type', name: 'bg-position', value: background.fillType, onChange: this._onPositionChange.bind(this) }, this.getFillType().map((item, index) => { var _a; return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: index, value: item.value }, (_a = item.label) !== null && _a !== void 0 ? _a : item.value); })))));
    }
}
_BackgroundSetting.defaultProps = {
    background: { color: undefined, fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL, image: { url: '' } },
    onChange: () => { }
};
/**
 * The `BackgroundSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { BackgroundSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const BackgroundSetting = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withStyles)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_BackgroundSetting), true), 'BackgroundSetting');


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/border-radius-setting.tsx":
/*!*********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/border-radius-setting.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderRadiusSetting: () => (/* binding */ BorderRadiusSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _four_edges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./four-edges */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/index.tsx");
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
 * The `BorderRadiusSetting` component allows users to set the border radius of the box.
 *
 * ```ts
 * import { BorderRadiusSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const BorderRadiusSetting = (props) => {
    const { className, value: propValue, onChange } = props, others = __rest(props, ["className", "value", "onChange"]);
    const value = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => propValue === null || propValue === void 0 ? void 0 : propValue.asMutable({ deep: true }), [propValue]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const label = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => translate('borderRadius'), [translate]);
    const handleChange = (value) => {
        onChange === null || onChange === void 0 ? void 0 : onChange((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(value));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_four_edges__WEBPACK_IMPORTED_MODULE_2__.FourEdges, Object.assign({ type: 'corner', value: value, onChange: handleChange, unifiedAriaLabel: label, unifiedTitle: label }, others, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--border-radius', className) })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/border-setting.tsx":
/*!**************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/border-setting.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderSetting: () => (/* binding */ BorderSetting),
/* harmony export */   _BorderSetting: () => (/* binding */ _BorderSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _line_style_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-style-selector */ "./jimu-ui/advanced/lib/style-setting-components/line-style-selector.tsx");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");






const borderUnits = [jimu_ui__WEBPACK_IMPORTED_MODULE_4__.DistanceUnits.PIXEL];
const defaultValue = {
    type: jimu_ui__WEBPACK_IMPORTED_MODULE_4__.NormalLineType.DASHED,
    color: undefined,
    width: '0px'
};
const _BorderSetting = (props) => {
    const { value = defaultValue, onChange, className, style } = props;
    const { type, color, width } = value;
    const theme2 = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages);
    const updateBorder = (key, newValue) => {
        const toReplace = {};
        toReplace[key] = newValue;
        onChange === null || onChange === void 0 ? void 0 : onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, value, toReplace));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--border-setting', className), style: style },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { "aria-label": translate('color'), specificTheme: theme2, className: 'item', onChange: (color) => { updateBorder('color', color); }, value: (color) }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_line_style_selector__WEBPACK_IMPORTED_MODULE_1__.LineStyleSelector, { "aria-label": translate('lineStyle'), className: 'item', value: type, onChange: (newType) => { updateBorder('type', newType); } }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_unit_input__WEBPACK_IMPORTED_MODULE_2__.InputUnit, { "aria-label": translate('width'), min: 0, precision: 0, units: borderUnits, className: 'item', value: width, onChange: (newWidth) => { updateBorder('width', jimu_ui__WEBPACK_IMPORTED_MODULE_4__.utils.stringOfLinearUnit(newWidth)); } })));
};
/**
 * A react component for setting border style (border-style, border-color, border-width)
 */
const BorderSetting = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withStyles)(_BorderSetting, 'BorderSetting');


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/box-shadow-setting.tsx":
/*!******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/box-shadow-setting.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxShadowSetting: () => (/* binding */ BoxShadowSetting),
/* harmony export */   _BoxShadowSetting: () => (/* binding */ _BoxShadowSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */






class _BoxShadowSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.translate = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages[id] }) : id;
        };
        this.getShadows = () => {
            return [{
                    name: 'offsetX',
                    label: this.translate('offsetX'),
                    min: -200,
                    max: 200
                }, {
                    name: 'offsetY',
                    label: this.translate('offsetY'),
                    min: -200,
                    max: 200
                }, {
                    name: 'blur',
                    label: this.translate('blurRadius'),
                    min: 0,
                    max: 300
                }, {
                    name: 'spread',
                    label: this.translate('spreadRadius'),
                    min: -200,
                    max: 200
                }];
        };
    }
    _updateShadow(key, newValue) {
        const { value } = this.props;
        this.props.onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, value, { [key]: newValue }));
    }
    render() {
        const { value, className, theme2 } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--box-shadow-setting', className), role: 'group', "aria-label": this.translate('boxShadow') },
            this.getShadows().map((param, index) => {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingRow, { key: index, label: param.label },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unit_input__WEBPACK_IMPORTED_MODULE_2__.InputUnit, { "aria-label": param.label, precision: 0, className: 'box-input', min: param.min, max: param.max, value: value[param.name], onChange: (value) => { this._updateShadow(param.name, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.utils.stringOfLinearUnit(value)); } })));
            }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SettingRow, { label: this.translate('color') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { className: 'box-color ml-auto', specificTheme: theme2, value: value.color, onChange: (newColor) => { this._updateShadow('color', newColor); } }))));
    }
}
_BoxShadowSetting.defaultProps = {
    value: {
        offsetX: '0px',
        offsetY: '0px',
        blur: '0px',
        spread: '0px',
        color: undefined
    },
    onChange: () => { }
};
/**
 * A react component for setting box-shadow style (offsetX, offsetY, blur, spread and color)
 */
const BoxShadowSetting = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withStyles)((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_BoxShadowSetting), true), 'BoxShadowSetting');


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/font-family-selector.tsx":
/*!********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/font-family-selector.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontFamilySelector: () => (/* binding */ FontFamilySelector),
/* harmony export */   FontFamilyValue: () => (/* binding */ FontFamilyValue),
/* harmony export */   fontValue: () => (/* binding */ fontValue)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


var FontFamilyValue;
(function (FontFamilyValue) {
    FontFamilyValue["AVENIRNEXT"] = "Avenir Next";
    FontFamilyValue["CALIBRI"] = "Calibri";
    FontFamilyValue["PMINGLIU"] = "PmingLiu";
    FontFamilyValue["IMPACT"] = "Impact";
    FontFamilyValue["GEORGIA"] = "Georgia";
    FontFamilyValue["ARIAL"] = "Arial";
    FontFamilyValue["TIMESNEWROMAN"] = "Times New Roman";
    FontFamilyValue["SIMHEI"] = "SimHei";
    FontFamilyValue["MICROSOFTYAHEI"] = "Microsoft YaHei";
})(FontFamilyValue || (FontFamilyValue = {}));
const fontValue = [FontFamilyValue.AVENIRNEXT, FontFamilyValue.CALIBRI, FontFamilyValue.PMINGLIU, FontFamilyValue.IMPACT,
    FontFamilyValue.GEORGIA, FontFamilyValue.ARIAL, FontFamilyValue.TIMESNEWROMAN, FontFamilyValue.SIMHEI, FontFamilyValue.MICROSOFTYAHEI];
/**
 * A react component for choosing a font we support
 */
const FontFamilySelector = (props) => {
    const { font = FontFamilyValue.AVENIRNEXT, 'aria-label': ariaLabel, onChange, style, className } = props;
    const hangeChange = (e) => {
        onChange(e.target.value);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { title: font, "aria-label": ariaLabel, style: style, value: font, onChange: hangeChange, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'style-setting--font-family') }, fontValue.map((e, index) => jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: index, value: e, label: e }, e))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/four-edges/corner.tsx":
/*!*****************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/four-edges/corner.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Corner: () => (/* binding */ Corner)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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
/**@jsx jsx */


const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.unified {
      border: 1px solid var(--black);
      border-radius: 4px;
    }
    &.none-select {
      .corner {
        opacity: 1;
      }
    }
    > .top,
    > .bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: calc(50% - 3px);
    }

    .corner {
      width: calc(50% - 3px);
      height: 100%;
      opacity: 0.4;
      &.selected {
        opacity: 1;
      }
      &.top-left {
        border-top: 1px solid var(--black);
        border-left: 1px solid var(--black);
        border-radius: 4px 0 0 0;
      }
      &.top-right {
        border-top: 1px solid var(--black);
        border-right: 1px solid var(--black);
        border-radius: 0 4px 0 0;
      }
      &.bottom-left {
        border-bottom: 1px solid var(--black);
        border-left: 1px solid var(--black);
        border-radius: 0 0 0 4px;
      }
      &.bottom-right {
        border-bottom: 1px solid var(--black);
        border-right: 1px solid var(--black);
        border-radius: 0 0 4px 0;
      }
    }
  }
`;
const Corner = (props) => {
    const { className, activated = -1, detached } = props, others = __rest(props, ["className", "activated", "detached"]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({ css: styles, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('corner', className) }, others),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('content', { unified: !detached }, { 'none-select': activated < 0 }) }, detached && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'top' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('top-left corner', {
                        selected: activated === 0
                    }) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('top-right corner', {
                        selected: activated === 1
                    }) })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'bottom' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('bottom-left corner', {
                        selected: activated === 3
                    }) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('bottom-right corner', {
                        selected: activated === 2
                    }) })))))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/four-edges/edge.tsx":
/*!***************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/four-edges/edge.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
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
/**@jsx jsx */


const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  padding: 4px !important;
  .content {
    width: 16px;
    height: 16px;
    position: relative;
    &.unified {
      border: 1px solid var(--black);
      > .inner-box {
        opacity: 1;
      }
    }
    &:not(.unified) {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.none-select {
        .edge {
          opacity: 1;
        }
        > .inner-box {
          opacity: 1;
        }
      }
      > .top {
        width: calc(100% - 4px);
        border-top: 1px solid var(--black);
        height: 3px;
      }
      > .middle {
        height: calc(100% - 6px);
        width: 100%;
        display: flex;
        justify-content: space-between;
        > .left {
          border-left: 1px solid var(--black);
          width: 3px;
          height: 100%;
        }
        > .right {
          border-right: 1px solid var(--black);
          width: 3px;
          height: 100%;
        }
      }
      > .bottom {
        border-bottom: 1px solid var(--black);
        width: calc(100% - 4px);
        height: 3px;
      }
      .edge {
        opacity: 0.4;
        &.selected {
          opacity: 1;
        }
      }
    }
    > .inner-box {
      width: 8px;
      height: 8px;
      border: 1px dotted var(--black);
      opacity: 0.4;
      z-index: 1;
      position: absolute;
      left: calc(50% - 4px);
      top: calc(50% - 4px);
    }
  }
`;
const Edge = (props) => {
    const { className, activated = -1, detached } = props, others = __rest(props, ["className", "activated", "detached"]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({ css: styles, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('edge', className) }, others),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('content', { unified: !detached }, { 'none-select': activated < 0 }) },
            detached && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('edge top', { selected: activated === 0 }) }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'middle' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('edge left', {
                            selected: activated === 3
                        }) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('edge right', {
                            selected: activated === 1
                        }) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('edge bottom', {
                        selected: activated === 2
                    }) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'inner-box' }))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/four-edges/edges-block.tsx":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/four-edges/edges-block.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgesBlock: () => (/* binding */ EdgesBlock)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _corner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corner */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/corner.tsx");
/* harmony import */ var _edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edge */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/edge.tsx");
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




const EdgesBlock = (props) => {
    const { type = 'edge', detached, onDetachedChange, onClick } = props, others = __rest(props, ["type", "detached", "onDetachedChange", "onClick"]);
    const handleDetachedChange = (detached, evt) => {
        onDetachedChange === null || onDetachedChange === void 0 ? void 0 : onDetachedChange(detached);
        onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    };
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const unified = translate('unified');
    const independent = translate('independent');
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        type === 'edge' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AdvancedButtonGroup, null,
            type === 'edge' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_edge__WEBPACK_IMPORTED_MODULE_3__.Edge, Object.assign({ active: !detached, detached: false, title: unified, "aria-label": unified }, others, { onClick: (evt) => { handleDetachedChange(false, evt); } }))),
            type === 'edge' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_edge__WEBPACK_IMPORTED_MODULE_3__.Edge, Object.assign({ active: detached, detached: true, title: independent, "aria-label": independent }, others, { onClick: (evt) => { handleDetachedChange(true, evt); } }))))),
        type === 'corner' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.AdvancedButtonGroup, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_corner__WEBPACK_IMPORTED_MODULE_2__.Corner, Object.assign({ active: !detached, detached: false, title: unified, "aria-label": unified }, others, { onClick: (evt) => { handleDetachedChange(false, evt); } })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_corner__WEBPACK_IMPORTED_MODULE_2__.Corner, Object.assign({ active: detached, detached: true, title: independent, "aria-label": independent }, others, { onClick: (evt) => { handleDetachedChange(true, evt); } }))))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/four-edges/edges-number.tsx":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/four-edges/edges-number.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgesNumber: () => (/* binding */ EdgesNumber)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/**@jsx jsx */



const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .jimu-numeric-input-input{
    z-index: auto;
    &:focus {
      z-index: 1;
    }
  }
  .unit-selector-con {
    margin-left: -1px;
  }
`;
const edges = [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Sides.T, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Sides.R, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Sides.B, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Sides.L];
const corners = [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.BorderSides.TL, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.BorderSides.TR, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.BorderSides.BR, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.BorderSides.BL];
const defaultUnits = [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PERCENTAGE];
const DefaultValue = {
    number: [0, 0, 0, 0],
    unit: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL
};
const EdgesNumber = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const defaultLabel = translate('unifiedNumericValue');
    const { type = 'edge', value = DefaultValue, className, min = 0, max = 100, units = defaultUnits, disabled = false, onActivatedChange, onChange, detached, unifiedTitle = defaultLabel, unifiedAriaLabel = defaultLabel } = props;
    const numbers = value.number;
    const unit = value.unit;
    const sides = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => type === 'edge' ? edges : corners, [type]);
    const handleAcceptValue = (val, index) => {
        val = Math.floor(+val);
        if (!detached) {
            const number = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.expandStyleArray([val]);
            onChange === null || onChange === void 0 ? void 0 : onChange({ number, unit: value.unit });
        }
        else {
            const number = [...numbers];
            number[index] = val;
            onChange === null || onChange === void 0 ? void 0 : onChange({ number, unit });
        }
    };
    const handleUnitChange = (unit) => {
        onChange === null || onChange === void 0 ? void 0 : onChange({
            number: value.number,
            unit
        });
    };
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.InputGroup, { css: styles, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('edges-number', className) },
        !detached && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', min: min, max: max, title: unifiedTitle, "aria-label": unifiedAriaLabel, disabled: disabled, value: numbers === null || numbers === void 0 ? void 0 : numbers[0], onAcceptValue: (val) => { handleAcceptValue(val, 0); }, showHandlers: false })),
        detached &&
            sides.map((side, index) => {
                const title = translate(side);
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', key: side, title: title, "aria-label": title, min: min, max: max, disabled: disabled, value: numbers[index], onAcceptValue: (val) => { handleAcceptValue(val, index); }, onFocus: () => { onActivatedChange(index); }, onBlur: () => { onActivatedChange(-1); }, showHandlers: false }));
            }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'unit-selector-con' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unit_input__WEBPACK_IMPORTED_MODULE_2__.UnitSelector, { disabled: disabled, units: units, value: value.unit, onChange: handleUnitChange })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/four-edges/index.tsx":
/*!****************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/four-edges/index.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FourEdges: () => (/* binding */ FourEdges)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _edges_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edges-number */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/edges-number.tsx");
/* harmony import */ var _edges_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edges-block */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/edges-block.tsx");
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




const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: 100%;
  .jimu-numeric-input {
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
  }
  .input-group-append {
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
  }
  .content {
    .btn-group {
      margin-right: 6px;
    }
    .input-group {
      .input-group-append {
        margin-left: 0;
      }
    }
  }
`;
const DefaultValue = {
    number: [0, 0, 0, 0],
    unit: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL
};
const defaultUnits = [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PERCENTAGE];
const upgradeValue = (propValue) => {
    let value = propValue;
    if ((propValue === null || propValue === void 0 ? void 0 : propValue.number) && propValue.number.length !== 4) {
        const numbers = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.expandStyleArray(propValue.number);
        value = Object.assign(Object.assign({}, value), { number: numbers });
    }
    return value;
};
const isDetached = (value) => {
    const number = value === null || value === void 0 ? void 0 : value.number;
    if (!number)
        return false;
    const unified = number[0] === number[1] &&
        number[1] === number[2] && number[2] === number[3];
    return !unified;
};
/**
 * The `FourEdges` component allows users to set the values of four edges or four corners of the box.
 *
 * ```ts
 * import { FourEdges } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const FourEdges = (props) => {
    const { type = 'edge', value: propValue = DefaultValue, units = defaultUnits, min = 0, max = 100, disabled = false, className, style, onChange, separated = true } = props, others = __rest(props, ["type", "value", "units", "min", "max", "disabled", "className", "style", "onChange", "separated"]);
    const value = upgradeValue(propValue);
    const numbers = value.number;
    const unit = value.unit;
    const [detached, setDetached] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(() => isDetached(value));
    const [activated, setActivated] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(-1);
    const handleDetachedChange = (detached) => {
        if (disabled) {
            return;
        }
        if (!detached) {
            const number = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.expandStyleArray([numbers[0]]);
            onChange === null || onChange === void 0 ? void 0 : onChange({ number, unit });
        }
        setDetached(detached);
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--four-edges', className), style: style, css: styles },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'content d-flex' },
            separated && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_edges_block__WEBPACK_IMPORTED_MODULE_3__.EdgesBlock, { type: type, detached: detached, activated: activated, disabled: disabled, onDetachedChange: handleDetachedChange })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_edges_number__WEBPACK_IMPORTED_MODULE_2__.EdgesNumber, Object.assign({ type: type, detached: detached, value: value, min: min, max: max, disabled: disabled, units: units, onChange: onChange }, others, { onActivatedChange: setActivated })))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/four-sides.tsx":
/*!**********************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/four-sides.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FourSides: () => (/* binding */ FourSides),
/* harmony export */   _FourSides: () => (/* binding */ _FourSides)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/* harmony import */ var jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/lock */ "./jimu-icons/outlined/editor/lock.tsx");
/* harmony import */ var jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/unlock */ "./jimu-icons/outlined/editor/unlock.tsx");
/** @jsx jsx */






/**
 * The `FourSides` component allows users to set the values of four edges or four corners of the box.
 * @deprecated
 * Use `FourEdges` or `Padding` or `BorderRadiusSetting` conponents instead.
 * ```ts
 * import { FourSides } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
class _FourSides extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this._onSideValueChange = (val, index) => {
            const { bindAll } = this.state;
            if (bindAll) {
                this._onAllSidesValueChange(val);
            }
            else {
                const { value } = this.props;
                const styleArray = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.styleUtils.expandStyleArray(value.number);
                styleArray[index] = val;
                this.props.onChange({
                    number: styleArray,
                    unit: value.unit
                });
            }
        };
        this._onUnitChange = (newUnit) => {
            const { value } = this.props;
            if (newUnit !== value.unit) {
                const styleArray = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.styleUtils.expandStyleArray(value.number);
                this.props.onChange({
                    number: styleArray,
                    unit: newUnit
                });
            }
        };
        this._onAllSidesValueChange = (value) => {
            this.props.onChange({ number: [value], unit: this.props.value.unit });
        };
        this._toggleBindAll = () => {
            const { disabled } = this.props;
            if (disabled) {
                return;
            }
            if (!this.state.bindAll) {
                const { value } = this.props;
                const styleArray = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.styleUtils.expandStyleArray(value.number);
                this._onAllSidesValueChange(styleArray[0]);
            }
            this.setState({
                bindAll: !this.state.bindAll
            });
        };
        this.nls = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages[id] }) : id;
        };
        this.handleAcceptValue = (value, index) => {
            this._onSideValueChange(value, index);
        };
        this.state = {
            bindAll: false
        };
    }
    render() {
        const { value, units, showTip, sides, min, max, disabled, className } = this.props;
        const { bindAll } = this.state;
        const padding = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.styleUtils.expandStyleArray(value.number);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--four-sides', className) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'content' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.InputGroup, null,
                    sides.map((side, index) => {
                        const title = this.nls(side);
                        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { size: 'sm', key: index, placeholder: showTip ? side : '', title: title, "aria-label": title, min: min, max: max, disabled: disabled, value: padding[index], onAcceptValue: val => { this.handleAcceptValue(val, index); }, showHandlers: false }));
                    }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'unit-selector-con' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unit_input__WEBPACK_IMPORTED_MODULE_3__.UnitSelector, { units: units, value: value.unit, onChange: this._onUnitChange }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { icon: true, type: 'tertiary', className: 'lock-btn', onClick: this._toggleBindAll, title: bindAll ? this.nls('lock') : this.nls('unlock'), "aria-label": bindAll ? this.nls('lock') : this.nls('unlock') }, bindAll ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_4__.LockOutlined, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ disabled: disabled }) }) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_5__.UnlockOutlined, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ disabled: disabled }) }))),
            showTip && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tips' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tip-group' }, sides.map((side, index) => (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: index, title: this.nls(side) }, side))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null))));
    }
}
_FourSides.defaultProps = {
    units: [jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PIXEL, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PERCENTAGE],
    showTip: true,
    value: {
        number: [0],
        unit: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PIXEL
    },
    disabled: false,
    min: 0,
    max: 100,
    sides: [jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Sides.T, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Sides.R, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Sides.B, jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Sides.L],
    onChange: () => { }
};
/**
 * The `FourSides` component allows users to set the values of four edges or four corners of the box.
 * @deprecated
 * Use `FourEdges` or `Padding` or `BorderRadiusSetting` conponents instead.
 * ```ts
 * import { FourSides } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const FourSides = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.withStyles)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_FourSides), 'FourSides');


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/hover-effects.tsx":
/*!*************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/hover-effects.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoverEffect: () => (/* binding */ HoverEffect)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_directional_arrow_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/directional/arrow-down */ "./jimu-icons/outlined/directional/arrow-down.tsx");
/** @jsx jsx */



const effects = [{
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.None,
        type: 'none'
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Skew,
        type: 'skew',
        x: -10,
        y: 0
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Grow,
        type: 'scale',
        x: 110,
        y: 110
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Shrink,
        type: 'scale',
        x: 90,
        y: 90
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Float,
        type: 'translate',
        x: 0,
        y: 10
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Sink,
        type: 'translate',
        x: 0,
        y: -10
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Rotate,
        type: 'rotate',
        deg: 3
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Spin,
        type: 'rotate',
        deg: -720
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Forward,
        type: 'translate',
        x: 10,
        y: 0
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Backward,
        type: 'translate',
        x: -10,
        y: 0
    }, {
        name: jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.Opacity,
        type: 'opacity',
        opacity: 50
    }];
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .animation-cards {
    padding: 0 16px 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 12px;
    grid-column-gap: 12px;
  }

  .separator {
    width: calc(100% - 2rem);
    height: 1px;
    margin: 0 1rem 1rem;
    background: var(--light-500);
  }

  .card-item {
    font-size: 13px;
    flex: 0 0 45%;

    user-select: none;
    cursor: pointer;
    position: relative;

    .card-content {
      width: 100%;
      height: 5rem;
      background-color: var(--light-200);
    }

    &.selected .card-content {
      outline: 2px solid var(--primary-600);
    }

    .card-name {
      max-width: 90px;
      margin: 0 auto;
      color: var(--dark-800);
      .card-name-content {
        line-height: 1rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;
function HoverEffect(props) {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const { type = jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.None, onTypeChange } = props;
    const onHoverEffectTypeChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((newType) => {
        onTypeChange(newType);
    });
    const createCard = (info, index) => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('d-flex flex-column align-items-center card-item', {
                selected: info.name === type
            }), key: index },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { icon: true, role: 'option', "aria-label": translate(info.name.toLowerCase()), "aria-selected": info.name === type, className: 'd-flex justify-content-center card-content border-0', onClick: () => onHoverEffectTypeChange(info.name) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_arrow_down__WEBPACK_IMPORTED_MODULE_2__.ArrowDownOutlined, { size: 72 })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'card-name flex-grow-1 d-flex align-items-start mt-1' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'text-center card-name-content', title: translate(info.name.toLowerCase()) }, translate(info.name.toLowerCase())))));
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, { role: 'listbox', className: 'animation-cards' }, effects.map((info, index) => createCard(info, index)))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/index.tsx":
/*!*****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/index.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationSettingComponent: () => (/* reexport safe */ _animation_setting__WEBPACK_IMPORTED_MODULE_14__.AnimationSettingComponent),
/* harmony export */   BackgroundSetting: () => (/* reexport safe */ _background_setting__WEBPACK_IMPORTED_MODULE_9__.BackgroundSetting),
/* harmony export */   BorderRadiusSetting: () => (/* reexport safe */ _border_radius_setting__WEBPACK_IMPORTED_MODULE_6__.BorderRadiusSetting),
/* harmony export */   BorderSetting: () => (/* reexport safe */ _border_setting__WEBPACK_IMPORTED_MODULE_0__.BorderSetting),
/* harmony export */   BoxShadowSetting: () => (/* reexport safe */ _box_shadow_setting__WEBPACK_IMPORTED_MODULE_1__.BoxShadowSetting),
/* harmony export */   ButtonStyleSetting: () => (/* reexport safe */ _navigation_style__WEBPACK_IMPORTED_MODULE_13__.ButtonStyleSetting),
/* harmony export */   DateUnitInput: () => (/* reexport safe */ _unit_input__WEBPACK_IMPORTED_MODULE_3__.DateUnitInput),
/* harmony export */   FontFamilySelector: () => (/* reexport safe */ _font_family_selector__WEBPACK_IMPORTED_MODULE_4__.FontFamilySelector),
/* harmony export */   FontFamilyValue: () => (/* reexport safe */ _font_family_selector__WEBPACK_IMPORTED_MODULE_4__.FontFamilyValue),
/* harmony export */   FontStyle: () => (/* reexport safe */ _text_style__WEBPACK_IMPORTED_MODULE_7__.FontStyle),
/* harmony export */   FourEdges: () => (/* reexport safe */ _four_edges__WEBPACK_IMPORTED_MODULE_18__.FourEdges),
/* harmony export */   FourSides: () => (/* reexport safe */ _four_sides__WEBPACK_IMPORTED_MODULE_2__.FourSides),
/* harmony export */   InputRatio: () => (/* reexport safe */ _input_ratio__WEBPACK_IMPORTED_MODULE_5__.InputRatio),
/* harmony export */   InputUnit: () => (/* reexport safe */ _unit_input__WEBPACK_IMPORTED_MODULE_3__.InputUnit),
/* harmony export */   LineStyleSelector: () => (/* reexport safe */ _line_style_selector__WEBPACK_IMPORTED_MODULE_17__.LineStyleSelector),
/* harmony export */   LineStyleTranstions: () => (/* reexport safe */ _line_style_selector__WEBPACK_IMPORTED_MODULE_17__.LineStyleTranstions),
/* harmony export */   MouseActionSetting: () => (/* reexport safe */ _mouse_action_setting__WEBPACK_IMPORTED_MODULE_16__.MouseActionSetting),
/* harmony export */   NavIconPicker: () => (/* reexport safe */ _navigation_style__WEBPACK_IMPORTED_MODULE_13__.NavIconPicker),
/* harmony export */   NavStyleSettingByState: () => (/* reexport safe */ _navigation_style__WEBPACK_IMPORTED_MODULE_13__.NavStyleSettingByState),
/* harmony export */   Padding: () => (/* reexport safe */ _padding__WEBPACK_IMPORTED_MODULE_19__.Padding),
/* harmony export */   SizeColorSetting: () => (/* reexport safe */ _navigation_style__WEBPACK_IMPORTED_MODULE_13__.SizeColorSetting),
/* harmony export */   SizeEditor: () => (/* reexport safe */ _size_editor__WEBPACK_IMPORTED_MODULE_8__.SizeEditor),
/* harmony export */   TextAlignment: () => (/* reexport safe */ _text_style__WEBPACK_IMPORTED_MODULE_7__.TextAlignment),
/* harmony export */   TextStyle: () => (/* reexport safe */ _text_style__WEBPACK_IMPORTED_MODULE_7__.TextStyle),
/* harmony export */   ThemeBackgroundSection: () => (/* reexport safe */ _theme_background_section__WEBPACK_IMPORTED_MODULE_10__.ThemeBackgroundSection),
/* harmony export */   ThemeBorderSection: () => (/* reexport safe */ _theme_border_section__WEBPACK_IMPORTED_MODULE_11__.ThemeBorderSection),
/* harmony export */   ThemeBoxShadowSection: () => (/* reexport safe */ _theme_box_shadow_section__WEBPACK_IMPORTED_MODULE_12__.ThemeBoxShadowSection),
/* harmony export */   TransitionSetting: () => (/* reexport safe */ _transition_setting__WEBPACK_IMPORTED_MODULE_15__.TransitionSetting),
/* harmony export */   UnitSelector: () => (/* reexport safe */ _unit_input__WEBPACK_IMPORTED_MODULE_3__.UnitSelector),
/* harmony export */   UnitSelectorDateUnits: () => (/* reexport safe */ _unit_input__WEBPACK_IMPORTED_MODULE_3__.UnitSelectorDateUnits),
/* harmony export */   UnitSelectorDateWeekUnits: () => (/* reexport safe */ _unit_input__WEBPACK_IMPORTED_MODULE_3__.UnitSelectorDateWeekUnits),
/* harmony export */   UnitSelectorTimeUnits: () => (/* reexport safe */ _unit_input__WEBPACK_IMPORTED_MODULE_3__.UnitSelectorTimeUnits),
/* harmony export */   _BackgroundSetting: () => (/* reexport safe */ _background_setting__WEBPACK_IMPORTED_MODULE_9__._BackgroundSetting),
/* harmony export */   _BorderSetting: () => (/* reexport safe */ _border_setting__WEBPACK_IMPORTED_MODULE_0__._BorderSetting),
/* harmony export */   _BoxShadowSetting: () => (/* reexport safe */ _box_shadow_setting__WEBPACK_IMPORTED_MODULE_1__._BoxShadowSetting),
/* harmony export */   _FourSides: () => (/* reexport safe */ _four_sides__WEBPACK_IMPORTED_MODULE_2__._FourSides),
/* harmony export */   _InputRatio: () => (/* reexport safe */ _input_ratio__WEBPACK_IMPORTED_MODULE_5__._InputRatio),
/* harmony export */   _SizeEditor: () => (/* reexport safe */ _size_editor__WEBPACK_IMPORTED_MODULE_8__._SizeEditor),
/* harmony export */   fontValue: () => (/* reexport safe */ _font_family_selector__WEBPACK_IMPORTED_MODULE_4__.fontValue)
/* harmony export */ });
/* harmony import */ var _border_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border-setting */ "./jimu-ui/advanced/lib/style-setting-components/border-setting.tsx");
/* harmony import */ var _box_shadow_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box-shadow-setting */ "./jimu-ui/advanced/lib/style-setting-components/box-shadow-setting.tsx");
/* harmony import */ var _four_sides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./four-sides */ "./jimu-ui/advanced/lib/style-setting-components/four-sides.tsx");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/* harmony import */ var _font_family_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-family-selector */ "./jimu-ui/advanced/lib/style-setting-components/font-family-selector.tsx");
/* harmony import */ var _input_ratio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-ratio */ "./jimu-ui/advanced/lib/style-setting-components/input-ratio.tsx");
/* harmony import */ var _border_radius_setting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./border-radius-setting */ "./jimu-ui/advanced/lib/style-setting-components/border-radius-setting.tsx");
/* harmony import */ var _text_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-style */ "./jimu-ui/advanced/lib/style-setting-components/text-style/index.ts");
/* harmony import */ var _size_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./size-editor */ "./jimu-ui/advanced/lib/style-setting-components/size-editor.tsx");
/* harmony import */ var _background_setting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./background-setting */ "./jimu-ui/advanced/lib/style-setting-components/background-setting.tsx");
/* harmony import */ var _theme_background_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme-background-section */ "./jimu-ui/advanced/lib/style-setting-components/theme-background-section.tsx");
/* harmony import */ var _theme_border_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme-border-section */ "./jimu-ui/advanced/lib/style-setting-components/theme-border-section.tsx");
/* harmony import */ var _theme_box_shadow_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme-box-shadow-section */ "./jimu-ui/advanced/lib/style-setting-components/theme-box-shadow-section.tsx");
/* harmony import */ var _navigation_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation-style */ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/index.ts");
/* harmony import */ var _animation_setting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./animation-setting */ "./jimu-ui/advanced/lib/style-setting-components/animation-setting.tsx");
/* harmony import */ var _transition_setting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transition-setting */ "./jimu-ui/advanced/lib/style-setting-components/transition-setting.tsx");
/* harmony import */ var _mouse_action_setting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mouse-action-setting */ "./jimu-ui/advanced/lib/style-setting-components/mouse-action-setting.tsx");
/* harmony import */ var _line_style_selector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./line-style-selector */ "./jimu-ui/advanced/lib/style-setting-components/line-style-selector.tsx");
/* harmony import */ var _four_edges__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./four-edges */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/index.tsx");
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./padding */ "./jimu-ui/advanced/lib/style-setting-components/padding.tsx");






















/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/input-ratio.tsx":
/*!***********************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/input-ratio.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputRatio: () => (/* binding */ InputRatio),
/* harmony export */   _InputRatio: () => (/* binding */ _InputRatio)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


const labelStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  font-size: 10px;
  color: var(--dark-600);
  text-align: center;
`;
class _InputRatio extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.width = 100;
        this.height = 100;
        this.onWidthChange = (val) => {
            this.props.onChange(`${val}:${this.height}`);
        };
        this.onHeightChange = (val) => {
            this.props.onChange(`${this.width}:${val}`);
        };
    }
    // ratio is height/width
    parseAspectRatio(ratio) {
        if (typeof ratio === 'number') {
            this.width = 100;
            this.height = Math.round(ratio * 100);
        }
        else if (typeof ratio === 'string') {
            const items = ratio.split(':');
            this.width = parseInt(items[0], 10);
            this.height = parseInt(items[1], 10);
        }
    }
    formatMessage(id) {
        return this.props.intl.formatMessage({ id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages[id] });
    }
    render() {
        const { style, disabled, value: ratio } = this.props;
        this.parseAspectRatio(ratio);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.InputGroup, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--input-ratio'), style: style },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column justify-content-start align-items-center', style: { width: '45%' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', min: 1, max: 100, value: isNaN(this.width) ? '' : this.width, showHandlers: false, onChange: this.onWidthChange, disabled: disabled, "aria-label": this.formatMessage('width') }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'px-1 mt-1 w-100', css: labelStyle, title: this.formatMessage('width') }, "W")),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'h-100 text-center', style: { width: '10%' } }, ":"),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column justify-content-start align-items-center', style: { width: '45%' } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: 'sm', min: 1, value: isNaN(this.height) ? '' : this.height, showHandlers: false, onChange: this.onHeightChange, disabled: disabled, "aria-label": this.formatMessage('height') }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'px-1 mt-1 w-100', css: labelStyle, title: this.formatMessage('height') }, "H"))));
    }
}
_InputRatio.defaultProps = {
    value: 1,
    disabled: false,
    onChange: () => { }
};
const InputRatio = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_InputRatio);


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/line-style-selector.tsx":
/*!*******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/line-style-selector.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineStyleSelector: () => (/* binding */ LineStyleSelector),
/* harmony export */   LineStyleTranstions: () => (/* binding */ LineStyleTranstions)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _assets_icons_double_line_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/double-line.svg */ "./jimu-ui/advanced/lib/assets/icons/double-line.svg");
/* harmony import */ var _assets_icons_double_line_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_double_line_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_solid_line_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/solid-line.svg */ "./jimu-ui/advanced/lib/assets/icons/solid-line.svg");
/* harmony import */ var _assets_icons_solid_line_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_solid_line_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_icons_dotted_line_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/dotted-line.svg */ "./jimu-ui/advanced/lib/assets/icons/dotted-line.svg");
/* harmony import */ var _assets_icons_dotted_line_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dotted_line_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_icons_dashed_line_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/dashed-line.svg */ "./jimu-ui/advanced/lib/assets/icons/dashed-line.svg");
/* harmony import */ var _assets_icons_dashed_line_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dashed_line_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_icons_dash_double_dot_line_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/dash-double-dot-line.svg */ "./jimu-ui/advanced/lib/assets/icons/dash-double-dot-line.svg");
/* harmony import */ var _assets_icons_dash_double_dot_line_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dash_double_dot_line_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_dash_dot_line_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/dash-dot-line.svg */ "./jimu-ui/advanced/lib/assets/icons/dash-dot-line.svg");
/* harmony import */ var _assets_icons_dash_dot_line_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dash_dot_line_svg__WEBPACK_IMPORTED_MODULE_7__);








const LineIcons = {
    dashed: (_assets_icons_dashed_line_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    dotted: (_assets_icons_dotted_line_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    double: (_assets_icons_double_line_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    solid: (_assets_icons_solid_line_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    esriSLSDash: (_assets_icons_dashed_line_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    esriSLSDot: (_assets_icons_dotted_line_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    esriSLSSolid: (_assets_icons_solid_line_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    esriSLSDashDot: (_assets_icons_dash_dot_line_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    esriSLSDashDotDot: (_assets_icons_dash_double_dot_line_svg__WEBPACK_IMPORTED_MODULE_6___default())
};
const LineStyleTranstions = {
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    solid: 'solid',
    esriSLSDash: 'dashed',
    esriSLSDot: 'dotted',
    esriSLSSolid: 'solid',
    esriSLSDashDot: 'dashDot',
    esriSLSDashDotDot: 'dashDoubleDot'
};
const LineStyleSelector = (props) => {
    var _a;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const { type = 'normal', value = 'solid', className, style, onChange, 'aria-label': ariaLabel } = props;
    const lines = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        const keysOfLine = (type === 'normal' ? Object.values(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NormalLineType) : Object.values(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.EsriSimpleLineSymbolStyle));
        return keysOfLine.map((line) => {
            return { label: translate(LineStyleTranstions[line]), value: line };
        });
    }, [translate, type]);
    const title = (_a = lines.find(line => line.value === value)) === null || _a === void 0 ? void 0 : _a.label;
    const handleChange = (evt) => {
        const value = evt.currentTarget.value;
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'style-setting--line-style-selector'), style: style },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: 'sm', name: 'lineType', value: value, title: title, onChange: handleChange, "aria-label": ariaLabel }, lines.map((line, index) => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { className: 'py-0', key: index, title: line.label, value: line.value, label: line.label },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { style: { width: 46 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: 'w-100', icon: LineIcons[line.value] }))))))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/mouse-action-setting.tsx":
/*!********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/mouse-action-setting.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseActionSetting: () => (/* binding */ MouseActionSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/editor/play */ "./jimu-icons/outlined/editor/play.tsx");
/* harmony import */ var jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/suggested/info */ "./jimu-icons/outlined/suggested/info.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _hover_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hover-effects */ "./jimu-ui/advanced/lib/style-setting-components/hover-effects.tsx");
/** @jsx jsx */






const animationIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_none.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_none.svg");
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  background-color: transparent;
  position: relative;
  width: 100%;
  height: 72px;

  .img-tip {
    position: relative;
    min-width: 90px;
    height: 72px;
    cursor: pointer;

    &, &:hover {
      background: var(--light-200);
    }
  }

  .amin-icons  {
    display: inline-grid;
    grid-template-columns: auto 26px;
    grid-column-gap: .5rem;
    .jimu-icon {
      margin-right: 0;
    }
  }
  .anim-labels {
    align-self: stretch;
    .anim-label {
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      word-break: break-word;
      -webkit-line-clamp: 2;
    }
  }
`;
const sidePopperStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .header {
    height: 60px;
    padding: 0 0.5rem;
  }
  .side-popper-title {
    color: var(--dark-600);
    font-size: 16px;
  }
  .effect-title {
    color: var(--dark-600);
    font-size: 13px;
  }
  .side-content {
    position: relative;
    width: 100%;
    overflow: auto;
  }
`;
function MouseActionSetting(props) {
    const { type = jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.None, setting, onChange, onPreviewClick } = props;
    const [showPopper, setShowPopper] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const buttonRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef();
    const sidePopperRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef();
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);
    const toggleSidePanel = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback(() => {
        setShowPopper(!showPopper);
    }, [showPopper]);
    const handleTypeChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((newType) => {
        onChange({ type: newType });
    });
    const handleSettingChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((newSetting) => {
        onChange({ type, setting: newSetting });
    });
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anima-box d-flex justify-content-center align-items-center', css: style },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { className: 'img-tip d-flex justify-content-center align-items-center border-0', onClick: toggleSidePanel, title: translate(type.toLowerCase()), "aria-label": translate(type.toLowerCase()), icon: true },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-icon' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { icon: animationIcon, size: 48 }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-labels d-flex' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-label' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, translate(type.toLowerCase()))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { title: translate('hover') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { className: 'p-0', icon: true, type: 'tertiary', size: 'sm' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_2__.InfoOutlined, { size: 'm' })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'amin-icons w-100', ref: sidePopperRef },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: 'sm', ref: buttonRef, onClick: toggleSidePanel, className: 'text-truncate', title: translate('change') }, translate('change')),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { title: translate('preview'), placement: 'bottom' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { type: 'default', size: 'sm', icon: true, disabled: type == null || type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.HoverType.None, onClick: onPreviewClick },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_play__WEBPACK_IMPORTED_MODULE_1__.PlayOutlined, { size: 's' }))))))),
        showPopper && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_4__.SidePopper, { isOpen: true, css: sidePopperStyle, position: 'right', toggle: toggleSidePanel, trigger: sidePopperRef.current, title: translate('hover'), backToFocusNode: buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'side-content pt-2' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hover_effects__WEBPACK_IMPORTED_MODULE_5__.HoverEffect, { type: type, setting: setting, onTypeChange: handleTypeChange, onSettingChange: handleSettingChange }))))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/button-style-setting.tsx":
/*!*************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/navigation-style/button-style-setting.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonStyleSetting: () => (/* binding */ ButtonStyleSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _text_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text-style */ "./jimu-ui/advanced/lib/style-setting-components/text-style/index.ts");
/* harmony import */ var _border_setting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../border-setting */ "./jimu-ui/advanced/lib/style-setting-components/border-setting.tsx");
/* harmony import */ var _border_radius_setting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../border-radius-setting */ "./jimu-ui/advanced/lib/style-setting-components/border-radius-setting.tsx");
/* harmony import */ var _text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text-style/size-color-setting */ "./jimu-ui/advanced/lib/style-setting-components/text-style/size-color-setting.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");









const ButtonStyleSetting = (props) => {
    const appTheme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
    const { onlyBorderColor, icon: showIcon, onChange, variant } = props;
    const { bold, italic, underline, strike, color, bg, size, border, borderRadius, icon } = variant || {};
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    const radius = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.styleUtils.remToPixel(borderRadius || '0rem'));
    const value = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({ number: [radius === null || radius === void 0 ? void 0 : radius[0]], unit: radius === null || radius === void 0 ? void 0 : radius[1] });
    const handleBorderChange = (key, value) => {
        key = key === 'size' ? 'width' : key;
        onChange('border', Object.assign(Object.assign({}, border), { [key]: value }));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-4', flow: 'wrap', label: translate('text'), role: 'group', "aria-label": translate('text') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_text_style__WEBPACK_IMPORTED_MODULE_4__.TextStyle, { bold: bold, italic: italic, underline: underline, strike: strike, size: size, color: color, onChange: onChange })),
        showIcon && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-4', flow: 'no-wrap', label: translate('icon'), role: 'group', "aria-label": translate('icon') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_7__.SizeColorSetting, { className: 'w-50', color: icon === null || icon === void 0 ? void 0 : icon.color, size: icon === null || icon === void 0 ? void 0 : icon.size, onChange: (key, value) => { onChange('icon', Object.assign(Object.assign({}, icon), { [key]: value })); } })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-4', flow: 'no-wrap', label: translate('background'), role: 'group', "aria-label": translate('background') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { specificTheme: appTheme, value: bg, onChange: (value) => { onChange('bg', value); } })),
        onlyBorderColor && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-4', label: translate('underline'), flow: 'no-wrap', role: 'group', "aria-label": translate('underline') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_7__.SizeColorSetting, { color: border === null || border === void 0 ? void 0 : border.color, size: border === null || border === void 0 ? void 0 : border.width, onChange: handleBorderChange })),
        !onlyBorderColor && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-4', label: translate('border'), flow: 'wrap', role: 'group', "aria-label": translate('border') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_border_setting__WEBPACK_IMPORTED_MODULE_5__.BorderSetting, { value: border, onChange: (value) => { onChange('border', value); } })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-4', label: translate('borderRadius'), flow: 'no-wrap', role: 'group', "aria-label": translate('borderRadius') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_border_radius_setting__WEBPACK_IMPORTED_MODULE_6__.BorderRadiusSetting, { style: { width: !onlyBorderColor ? '30%' : '35%' }, separated: false, value: value, onChange: (value) => { var _a; onChange('borderRadius', `${(_a = value.number) === null || _a === void 0 ? void 0 : _a[0]}${value === null || value === void 0 ? void 0 : value.unit}`); } }))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/icon-style-setting.tsx":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/navigation-style/icon-style-setting.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconStyleSetting: () => (/* binding */ IconStyleSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-style/size-color-setting */ "./jimu-ui/advanced/lib/style-setting-components/text-style/size-color-setting.tsx");



const IconStyleSetting = (props) => {
    const { onChange, variant } = props;
    const { icon } = variant || {};
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { className: 'mt-2', flow: 'no-wrap', label: translate('icon'), role: 'group', "aria-label": translate('icon') },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_2__.SizeColorSetting, { color: icon === null || icon === void 0 ? void 0 : icon.color, size: icon === null || icon === void 0 ? void 0 : icon.size, onChange: (key, value) => { onChange('icon', Object.assign(Object.assign({}, icon), { [key]: value })); } })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/index.ts":
/*!*********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/navigation-style/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonStyleSetting: () => (/* reexport safe */ _button_style_setting__WEBPACK_IMPORTED_MODULE_0__.ButtonStyleSetting),
/* harmony export */   NavIconPicker: () => (/* reexport safe */ _nav_icon_picker__WEBPACK_IMPORTED_MODULE_3__.NavIconPicker),
/* harmony export */   NavStyleSettingByState: () => (/* reexport safe */ _style_by_state__WEBPACK_IMPORTED_MODULE_2__.NavStyleSettingByState),
/* harmony export */   SizeColorSetting: () => (/* reexport safe */ _text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_1__.SizeColorSetting)
/* harmony export */ });
/* harmony import */ var _button_style_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-style-setting */ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/button-style-setting.tsx");
/* harmony import */ var _text_style_size_color_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-style/size-color-setting */ "./jimu-ui/advanced/lib/style-setting-components/text-style/size-color-setting.tsx");
/* harmony import */ var _style_by_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-by-state */ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/style-by-state.tsx");
/* harmony import */ var _nav_icon_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-icon-picker */ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/nav-icon-picker.tsx");






/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/nav-icon-picker.tsx":
/*!********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/navigation-style/nav-icon-picker.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavIconPicker: () => (/* binding */ NavIconPicker)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/resource-selector */ "jimu-ui/advanced/resource-selector");
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



const { useMemo } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const dotIcon = __webpack_require__(/*! ../../../../lib/icons/navigation/dot.svg */ "./jimu-ui/lib/icons/navigation/dot.svg");
const pillIcon = __webpack_require__(/*! ../../../../lib/icons/navigation/pill.svg */ "./jimu-ui/lib/icons/navigation/pill.svg");
const cubeIcon = __webpack_require__(/*! ../../../../lib/icons/navigation/cube.svg */ "./jimu-ui/lib/icons/navigation/cube.svg");
const circleIcon = __webpack_require__(/*! ../../../../lib/icons/navigation/circle.svg */ "./jimu-ui/lib/icons/navigation/circle.svg");
const dbCircleIcon = __webpack_require__(/*! ../../../../lib/icons/navigation/double-circle.svg */ "./jimu-ui/lib/icons/navigation/double-circle.svg");
const useCustomIcons = (size) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    return useMemo(() => [
        jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toIconResult(dotIcon, translate('drawToolDot'), size),
        jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toIconResult(pillIcon, translate('pill'), size),
        jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toIconResult(cubeIcon, translate('rhombus'), size),
        jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toIconResult(circleIcon, translate('hollowCircle'), size),
        jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toIconResult(dbCircleIcon, translate('filledDoubleCircle'), size)
    ], [size, translate]);
};
const NavIconPicker = (props) => {
    const { size = 12 } = props, others = __rest(props, ["size"]);
    const customIcons = useCustomIcons(size);
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_resource_selector__WEBPACK_IMPORTED_MODULE_1__.IconPicker, Object.assign({ groups: 'none', customIcons: customIcons }, others));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/style-by-state.tsx":
/*!*******************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/navigation-style/style-by-state.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavStyleSettingByState: () => (/* binding */ NavStyleSettingByState)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _button_style_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-style-setting */ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/button-style-setting.tsx");
/* harmony import */ var _icon_style_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-style-setting */ "./jimu-ui/advanced/lib/style-setting-components/navigation-style/icon-style-setting.tsx");
/** @jsx jsx */





const getTranslateKey = (state) => {
    if (state === 'default')
        return 'default';
    if (state === 'active')
        return 'selected';
    return state;
};
/**
 * The `NavStyleSettingByState` component is used to provide the user the ability to setting styles for nav related widget.
 *
 * Note: use in Builder only.
 */
const NavStyleSettingByState = (props) => {
    const { variant, onChange, states = ['default', 'active', 'hover'], icon, text, iconInText, onlyBorderColor } = props;
    const style = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        var _a;
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .tab-title-item{
        width: ${((_a = 100 / (states === null || states === void 0 ? void 0 : states.length)) !== null && _a !== void 0 ? _a : 1)}%;
      }
     .style-setting--input-unit {
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(80)};
      }
      ${ /* use overflow: visible to avoid focus ring cut off */''}
      .tab-content {
        overflow: visible;
      }
    `;
    }, [states]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { flow: 'wrap', className: 'w-100' },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { type: 'pills', className: 'flex-grow-1 w-100 h-100', fill: true, css: style, defaultValue: '0' }, states.map((state, index) => {
            var _a, _b;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: index + '', key: index, className: 'tab-title-item', title: translate(getTranslateKey(state)) },
                icon && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icon_style_setting__WEBPACK_IMPORTED_MODULE_4__.IconStyleSetting, { variant: (_a = variant === null || variant === void 0 ? void 0 : variant.item) === null || _a === void 0 ? void 0 : _a[state], onChange: (key, value) => { onChange(state, key, value); } }),
                text && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_button_style_setting__WEBPACK_IMPORTED_MODULE_3__.ButtonStyleSetting, { variant: (_b = variant === null || variant === void 0 ? void 0 : variant.item) === null || _b === void 0 ? void 0 : _b[state], icon: iconInText, onlyBorderColor: onlyBorderColor, onChange: (key, value) => { onChange(state, key, value); } })));
        }))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/padding.tsx":
/*!*******************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/padding.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Padding: () => (/* binding */ Padding)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _four_edges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./four-edges */ "./jimu-ui/advanced/lib/style-setting-components/four-edges/index.tsx");
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
 * The `Padding` component allows users to set the padding of the box.
 *
 * ```ts
 * import { Padding } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const Padding = (props) => {
    const { className, value: propValue, onChange } = props, others = __rest(props, ["className", "value", "onChange"]);
    const value = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (propValue === null || propValue === void 0 ? void 0 : propValue.asMutable) ? propValue.asMutable({ deep: true }) : propValue, [propValue]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const label = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => translate('padding'), [translate]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_four_edges__WEBPACK_IMPORTED_MODULE_2__.FourEdges, Object.assign({ type: 'edge', value: value, onChange: onChange, unifiedAriaLabel: label, unifiedTitle: label }, others, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('style-setting--padding', className) })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/size-editor.tsx":
/*!***********************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/size-editor.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeEditor: () => (/* binding */ SizeEditor),
/* harmony export */   _SizeEditor: () => (/* binding */ _SizeEditor)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/application/check */ "./jimu-icons/outlined/application/check.tsx");
/** @jsx jsx */





const availableUnits = [jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PIXEL, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PERCENTAGE];
const defaultSizeModes = [jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Auto, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Stretch, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Custom];
class _SizeEditor extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.handleChange = (value) => {
            if (value !== this.props.mode) {
                this.props.onModeChange(value);
            }
        };
        this.nls = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages[id] }) : id;
        };
        this.getPopperStyle = () => {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .units-list {
        border-radius: 2px;
        background: var(--light-500);
        padding: 2px 0;
        .style-setting--markable-item {
          height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(26)};
        }
        .unit-item {
          justify-content: flex-start;
        }
      }
    `;
        };
    }
    getStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      background: var(--light-200);
      height: 26px;

      .side-label {
        font-size: 10px;
      }

      .prop-label {
        background-color: var(--light-400);
        font-size: 12px;
        line-height: 26px;
        color: var(--dark-400);
      }

      .jimu-dropdown {
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }
      }

      .style-setting--input-unit {
        background: var(--light-200);
        border-radius: 2px;
        height: 26px;
        flex-grow: 1;
        z-index: 0;

        &:focus-within {
          z-index: 1;
        }

        input {
          height: 100%;
          font-size: 12px;
          padding: 0;
          text-align: center;
        }
        .style-setting--unit-selector {
          background: var(--light-200);
          color: var(--black);
          height: 26px;
          width: auto;
          min-width: 0;
          padding: 0;
          margin-left: 0;
          font-size: 12px;
          border: none;
        }
      }
    `;
    }
    render() {
        var _a;
        const { mode, value, disableModeSelect = false, disabled } = this.props;
        if (disabled) {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex size-editor w-100', css: this.getStyle() },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { title: this.nls(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Auto.toLowerCase()), className: 'prop-label px-2 text-truncate text-center w-100' }, this.nls(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Auto.toLowerCase()))));
        }
        const sizeModes = (_a = this.props.sizeModes) !== null && _a !== void 0 ? _a : defaultSizeModes;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex size-editor w-100', css: this.getStyle() },
            !disableModeSelect && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { direction: 'down', size: 'sm', menuItemCheckMode: 'singleCheck' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { arrow: true, icon: true, size: 'sm', className: 'p-0' }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: 'p-0', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `min-width: 5rem;` }, sizeModes.map((item, index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { active: item === mode, "aria-label": this.nls(item.toLowerCase()), key: index, onClick: () => { this.handleChange(item); } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex alitn-items-center justify-content-end w-100' },
                        item === mode && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_4__.CheckOutlined, { className: 'mr-2' }),
                        this.nls(item.toLowerCase())))))))),
            mode !== jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Custom && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'prop-label flex-grow-1 px-2 text-truncate text-center', title: typeof (mode === null || mode === void 0 ? void 0 : mode.toLowerCase) === 'function' && this.nls(mode.toLowerCase()) }, typeof (mode === null || mode === void 0 ? void 0 : mode.toLowerCase) === 'function' && this.nls(mode.toLowerCase()))),
            mode === jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Custom && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unit_input__WEBPACK_IMPORTED_MODULE_2__.InputUnit, { units: this.props.availableUnits || availableUnits, min: 0, max: Infinity, precision: 2, value: jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.utils.normalizeLinearUnit(value), onChange: this.props.onChange }))));
    }
}
_SizeEditor.defaultProps = {
    disableModeSelect: false,
    onChange: () => { }
};
const SizeEditor = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_SizeEditor);


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/styles/components/background-setting.ts":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/styles/components/background-setting.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundSettingStyle: () => (/* binding */ BackgroundSettingStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const BackgroundSettingStyle = () => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    display: flex;
    flex-direction: column;
    width: 100%;
    > .setting-row {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-top: 0.75rem;
      margin-bottom: 0;
    }
    .jimu-builder--color {
      width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(40)};
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(20)};
    }
    .fill-type {
      width: 50%;
    }
    `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/styles/components/border-setting.ts":
/*!*******************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/styles/components/border-setting.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderSettingStyle: () => (/* binding */ BorderSettingStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const BorderSettingStyle = () => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    display: flex;
    justify-content: space-between;
    width: 100%;
    >.item {
      flex: 0 1 auto;
    }
    >.item.style-setting--line-style-selector {
      width: 40%;
    }
    >.item.style-setting--input-unit {
      width:30%;
    }
    .jimu-builder--color {
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(26)};
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/styles/components/box-shadow-setting.ts":
/*!***********************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/styles/components/box-shadow-setting.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxShadowSettingStyle: () => (/* binding */ BoxShadowSettingStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const BoxShadowSettingStyle = () => {
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    display: flex;
    flex-direction: column;
    width: 100%;
    > .setting-row {
      display: flex;
      align-items:center;
      justify-content: space-between;
      margin-top: 0.75rem;
      margin-bottom: 0;
    }
    .box-input {
      width: 30%;
      flex: 0 0 auto;
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/styles/components/four-sides.ts":
/*!***************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/styles/components/four-sides.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FourSidesStyle: () => (/* binding */ FourSidesStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const FourSidesStyle = (props) => {
    const { theme } = props;
    const gray600 = theme && theme.colors ? theme.colors.palette.dark[300] : '#c8cbcd';
    const black = theme && theme.colors ? theme.colors.black : 'black';
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    width: 100%;
    .unit-selector-con {
      margin-left: -1px;
    }
    .content {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .input-group {
        width: 87%;
        flex-wrap: nowrap;
        flex-shrink: 0;
        flex-grow: 0;
        > input {
          width: 21%;
        }
        .jimu-numeric-input-input {
          width: calc(100% - 1px);
          z-index: 0;
          &:focus-within {
            z-index: 1;
          }
        }
        .form-control {
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        >.style-setting--unit-selector {
          width: 16%;
          margin-left: -1px;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
        }
      }
      .lock-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
        cursor: pointer;
        .jimu-icon {
          color: ${black};
          &.disabled {
            color: ${gray600};
          }
        }
      }
    }
    .tips {
      color: ${gray600};
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
      .tip-group {
        text-align: center;
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        width: 73%;
        > div {
          width: 25%;
          ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.ellipsis()}
        }
      }
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/styles/components/single-color-selector.ts":
/*!**************************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/styles/components/single-color-selector.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleColorSelectorStyle: () => (/* binding */ SingleColorSelectorStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const SingleColorSelectorStyle = (props) => {
    const { theme } = props;
    const gray300 = theme ? theme.colors.palette.light[500] : '';
    const cyan500 = theme ? theme.colors.palette.primary[700] : '';
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    display: flex;
    .btn {
      border-radius: 0;
      height:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(20)};
      width:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(20)};
      border: 1px solid ${gray300};
      &.active {
          outline: 1px solid ${cyan500};
      }
    }
    .btn:not(:last-of-type) {
      margin-right: 6px;
    }
  `;
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/styles/index.ts":
/*!***********************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/styles/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundSetting: () => (/* reexport safe */ _components_background_setting__WEBPACK_IMPORTED_MODULE_0__.BackgroundSettingStyle),
/* harmony export */   BorderSetting: () => (/* reexport safe */ _components_border_setting__WEBPACK_IMPORTED_MODULE_1__.BorderSettingStyle),
/* harmony export */   BoxShadowSetting: () => (/* reexport safe */ _components_box_shadow_setting__WEBPACK_IMPORTED_MODULE_2__.BoxShadowSettingStyle),
/* harmony export */   FourSides: () => (/* reexport safe */ _components_four_sides__WEBPACK_IMPORTED_MODULE_3__.FourSidesStyle),
/* harmony export */   SingleColorSelector: () => (/* reexport safe */ _components_single_color_selector__WEBPACK_IMPORTED_MODULE_4__.SingleColorSelectorStyle)
/* harmony export */ });
/* harmony import */ var _components_background_setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/background-setting */ "./jimu-ui/advanced/lib/style-setting-components/styles/components/background-setting.ts");
/* harmony import */ var _components_border_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/border-setting */ "./jimu-ui/advanced/lib/style-setting-components/styles/components/border-setting.ts");
/* harmony import */ var _components_box_shadow_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/box-shadow-setting */ "./jimu-ui/advanced/lib/style-setting-components/styles/components/box-shadow-setting.ts");
/* harmony import */ var _components_four_sides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/four-sides */ "./jimu-ui/advanced/lib/style-setting-components/styles/components/four-sides.ts");
/* harmony import */ var _components_single_color_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/single-color-selector */ "./jimu-ui/advanced/lib/style-setting-components/styles/components/single-color-selector.ts");







/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/text-style/index.ts":
/*!***************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/text-style/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontStyle: () => (/* reexport safe */ _text_font_style__WEBPACK_IMPORTED_MODULE_0__.FontStyle),
/* harmony export */   TextAlignment: () => (/* reexport safe */ _text_alignment__WEBPACK_IMPORTED_MODULE_2__.TextAlignment),
/* harmony export */   TextStyle: () => (/* reexport safe */ _text_style__WEBPACK_IMPORTED_MODULE_1__.TextStyle)
/* harmony export */ });
/* harmony import */ var _text_font_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-font-style */ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-font-style.tsx");
/* harmony import */ var _text_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-style */ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-style.tsx");
/* harmony import */ var _text_alignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-alignment */ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-alignment.tsx");





/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/text-style/size-color-setting.tsx":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/text-style/size-color-setting.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeColorSetting: () => (/* binding */ SizeColorSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
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




const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .color-picker-block {
    margin-right: 9px;
  }
`;
const SizeColorSetting = (props) => {
    const appTheme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme2)();
    const { onChange, color, size, className } = props, others = __rest(props, ["onChange", "color", "size", "className"]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ css: style, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('size-color-setting d-flex', className) }, others),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ThemeColorPicker, { specificTheme: appTheme, value: color, onChange: (value) => { onChange('color', value); } }),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_unit_input__WEBPACK_IMPORTED_MODULE_3__.InputUnit, { value: size !== null && size !== void 0 ? size : '12px', onChange: (value) => { onChange('size', `${value.distance}${value.unit}`); } })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-alignment.tsx":
/*!*************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/text-style/text-alignment.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAlignment: () => (/* binding */ TextAlignment)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_text_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/text-left */ "./jimu-icons/outlined/editor/text-left.tsx");
/* harmony import */ var jimu_icons_outlined_editor_text_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/text-center */ "./jimu-icons/outlined/editor/text-center.tsx");
/* harmony import */ var jimu_icons_outlined_editor_text_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/text-right */ "./jimu-icons/outlined/editor/text-right.tsx");
/* harmony import */ var jimu_icons_outlined_editor_text_justify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/text-justify */ "./jimu-icons/outlined/editor/text-justify.tsx");
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
 * The `TextAlignment` component allows users to set the alignment of text.
 *
 * ```ts
 * import { TextAlignment } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const TextAlignment = (props) => {
    var _a, _b;
    const isRTL = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appContext) === null || _b === void 0 ? void 0 : _b.isRTL;
    const { buttonType = 'default', textAlign = !isRTL ? jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.LEFT : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.RIGHT, onChange, className, showJustify = false, autoFlip = false } = props, others = __rest(props, ["buttonType", "textAlign", "onChange", "className", "showJustify", "autoFlip"]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, Object.assign({}, others, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('text-alignment', className, {
            'flex-row-reverse': isRTL && autoFlip
        }) }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: translate(isRTL && !autoFlip ? 'right' : 'left'), type: buttonType, icon: true, size: 'sm', active: textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.LEFT, "aria-pressed": textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.LEFT, onClick: () => { onChange(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.LEFT); } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_text_left__WEBPACK_IMPORTED_MODULE_2__.TextLeftOutlined, { autoFlip: !autoFlip })),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: translate('center'), type: buttonType, icon: true, size: 'sm', active: textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.CENTER, "aria-pressed": textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.CENTER, onClick: () => { onChange(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.CENTER); } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_text_center__WEBPACK_IMPORTED_MODULE_3__.TextCenterOutlined, null)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: translate(isRTL && !autoFlip ? 'left' : 'right'), type: buttonType, icon: true, size: 'sm', active: textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.RIGHT, "aria-pressed": textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.RIGHT, onClick: () => { onChange(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.RIGHT); } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_text_right__WEBPACK_IMPORTED_MODULE_4__.TextRightOutlined, { autoFlip: !autoFlip })),
        showJustify && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: translate('justify'), type: buttonType, icon: true, size: 'sm', active: textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.JUSTIFY, "aria-pressed": textAlign === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.JUSTIFY, onClick: () => { onChange(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.JUSTIFY); } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_text_justify__WEBPACK_IMPORTED_MODULE_5__.TextJustifyOutlined, null)))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-font-style.tsx":
/*!**************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/text-style/text-font-style.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontStyle: () => (/* binding */ FontStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_bold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/bold */ "./jimu-icons/outlined/editor/bold.tsx");
/* harmony import */ var jimu_icons_outlined_editor_italic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/italic */ "./jimu-icons/outlined/editor/italic.tsx");
/* harmony import */ var jimu_icons_outlined_editor_underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/editor/underscore */ "./jimu-icons/outlined/editor/underscore.tsx");
/* harmony import */ var jimu_icons_outlined_editor_strike_through__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/strike-through */ "./jimu-icons/outlined/editor/strike-through.tsx");
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






const DefaultTypes = ['bold', 'italic', 'underline', 'strike'];
/**
 * The `FontStyle` component allows users to set the font styles of text.
 *
 * ```ts
 * import { FontStyle } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const FontStyle = (props) => {
    const { types = DefaultTypes, bold, italic, underline, strike, onChange, 'aria-label': propAriaLabel, size = 'sm' } = props, others = __rest(props, ["types", "bold", "italic", "underline", "strike", "onChange", 'aria-label', "size"]);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const ariaLabel = propAriaLabel || translate('fontStyle');
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, Object.assign({ size: size }, others, { role: 'group', "aria-label": ariaLabel }), types.map((style, idx) => {
        const active = !!props[style];
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { key: idx, title: translate(style), "aria-label": translate(style), "aria-pressed": active, active: active, type: 'default', icon: true, onClick: () => { onChange(style, !props[style]); } },
            style === 'bold' && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_bold__WEBPACK_IMPORTED_MODULE_2__.BoldOutlined, null),
            style === 'italic' && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_italic__WEBPACK_IMPORTED_MODULE_3__.ItalicOutlined, null),
            style === 'underline' && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_underscore__WEBPACK_IMPORTED_MODULE_4__.UnderscoreOutlined, null),
            style === 'strike' && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_strike_through__WEBPACK_IMPORTED_MODULE_5__.StrikeThroughOutlined, null)));
    })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-style.tsx":
/*!*********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/text-style/text-style.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextStyle: () => (/* binding */ TextStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _text_font_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-font-style */ "./jimu-ui/advanced/lib/style-setting-components/text-style/text-font-style.tsx");
/* harmony import */ var _unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
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






const textIcon = __webpack_require__(/*! ../../../../lib/icons/uppercase.svg */ "./jimu-ui/lib/icons/uppercase.svg");
/**
 * The `TextStyle` component allows users to set the styles of text.
 *
 * ```ts
 * import { TextStyle } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const TextStyle = (props) => {
    const appTheme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages);
    const { className, bold, italic, strike, underline, color, size = '16px', onChange } = props, others = __rest(props, ["className", "bold", "italic", "strike", "underline", "color", "size", "onChange"]);
    const handleChange = (key, value) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(key, value);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", Object.assign({ className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('d-flex justify-content-between w-100', className) }, others),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_text_font_style__WEBPACK_IMPORTED_MODULE_1__.FontStyle, { bold: bold, italic: italic, strike: strike, underline: underline, onChange: handleChange }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ThemeColorPicker, { "aria-label": translate('fontColor'), icon: textIcon, type: 'with-icon', specificTheme: appTheme, value: color, onChange: (value) => { handleChange('color', value); } }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_unit_input__WEBPACK_IMPORTED_MODULE_2__.InputUnit, { "aria-label": translate('fontSize'), min: 4, max: 999, style: { width: '35%' }, value: size, onChange: (value) => { handleChange('size', `${value.distance}${value.unit}`); } })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-active-flag.tsx":
/*!*****************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-active-flag.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveFlag: () => (/* binding */ ActiveFlag)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_filled_application_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/filled/application/check */ "./jimu-icons/filled/application/check.tsx");
/** @jsx jsx */


function ActiveFlag() {
    const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    position: absolute;
    top: -2px;
    right: -2px;
    .icon-container {
      width: 1rem;
      height: 1rem;
      background: linear-gradient(to top right, transparent 50%, var(--primary-600) 50% 100%);
      svg {
        margin-top: 1px;
        margin-right: 1px;
      }
    }
  `;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-end align-items-start icon-container' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_filled_application_check__WEBPACK_IMPORTED_MODULE_1__.CheckFilled, { color: 'var(--white)', size: 8 }))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-background-section.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-background-section.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeBackgroundSection: () => (/* binding */ ThemeBackgroundSection)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _theme_background_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-background-setting */ "./jimu-ui/advanced/lib/style-setting-components/theme-background-setting.tsx");
/* harmony import */ var _background_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-setting */ "./jimu-ui/advanced/lib/style-setting-components/background-setting.tsx");
/** @jsx jsx */





function ThemeBackgroundSection(props) {
    const { background, onChange } = props;
    const [isCustom, setIsCustom] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEffectOnce(() => {
        var _a, _b;
        if (background != null) {
            if ((((_a = background.image) === null || _a === void 0 ? void 0 : _a.url) != null && ((_b = background.image) === null || _b === void 0 ? void 0 : _b.url) !== '') || background.fillType !== jimu_ui__WEBPACK_IMPORTED_MODULE_2__.FillType.FILL) {
                setIsCustom(true);
                return;
            }
            const result = (background.color != null && background.color !== '') && _theme_background_setting__WEBPACK_IMPORTED_MODULE_3__.THEME_BACKGROUND_COLOR_LIST.every(color => {
                if (color == null) {
                    return true;
                }
                return `var(--${color})` !== background.color;
            });
            setIsCustom(result);
            return;
        }
        setIsCustom(false);
    });
    const onBackgroundStyleChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((useCustom, config) => {
        if (useCustom !== isCustom) {
            setIsCustom(useCustom);
            if (useCustom) {
                return;
            }
            onChange(config);
            return;
        }
        let bg = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(background !== null && background !== void 0 ? background : {});
        for (const key in config) {
            switch (key) {
                case 'fillType':
                    if (bg.fillType !== config[key]) {
                        bg = bg.set('fillType', config[key]);
                    }
                    break;
                case 'color':
                    bg = bg.set('color', config[key]);
                    break;
                case 'image':
                    bg = bg.set('image', config[key]);
                    break;
            }
        }
        onChange(bg);
    }, [background, isCustom, onChange]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { role: 'group', "aria-label": translate('background'), title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 align-items-center justify-content-between' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate setting-text-level-1' }, translate('background')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_background_setting__WEBPACK_IMPORTED_MODULE_3__.ThemeBackgroundSetting, { background: background, isCustom: isCustom, onChange: onBackgroundStyleChange })) }, isCustom && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_background_setting__WEBPACK_IMPORTED_MODULE_4__.BackgroundSetting, { className: 'mt-4', background: background, onChange: (bg) => { onBackgroundStyleChange(true, bg); } }))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-background-setting.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-background-setting.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   THEME_BACKGROUND_COLOR_LIST: () => (/* binding */ THEME_BACKGROUND_COLOR_LIST),
/* harmony export */   ThemeBackgroundSetting: () => (/* binding */ ThemeBackgroundSetting),
/* harmony export */   _ThemeBackgroundSetting: () => (/* binding */ _ThemeBackgroundSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_icons_outlined_application_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/application/colors */ "./jimu-icons/outlined/application/colors.tsx");
/* harmony import */ var _theme_active_flag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-active-flag */ "./jimu-ui/advanced/lib/style-setting-components/theme-active-flag.tsx");
/** @jsx jsx */





const THEME_BACKGROUND_COLOR_LIST = [null, 'primary-100', 'primary-200', 'primary-300', 'light-100', 'light-300', 'light-500', 'light-700'];
/**
 * The `ThemeBackgroundSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { ThemeBackgroundSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
class _ThemeBackgroundSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleDropdown = () => {
            this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
        };
        this.getStyle = (color) => {
            var _a, _b;
            const { theme2 } = this.props;
            let colorName;
            let scale;
            if (color != null) {
                const colors = color.split('-');
                colorName = colors[0];
                scale = colors[1];
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      width: 88px;
      height: 24px;
      position: relative;
      &:not(.has-color) {
        border: 2px solid ${theme2.colors.palette.dark[200]};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1.5px),
          ${theme2.colors.palette.dark[200]} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1.5px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      &.has-color {
        border: 2px solid ${(_a = theme2.colors.palette[colorName]) === null || _a === void 0 ? void 0 : _a[scale]};
        background: ${(_b = theme2.colors.palette[colorName]) === null || _b === void 0 ? void 0 : _b[scale]};
      }
    `;
        };
        this.createItem = (color, index) => {
            const { background, isCustom, onChange } = this.props;
            const selected = isCustom ? false : (color == null ? (background == null || background.color == null) : `var(--${color})` === background.color);
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: color, className: 'jimu-outline-inside', onClick: () => { onChange(false, { color: color != null ? `var(--${color})` : null, fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FILL }); }, title: index === 0 ? this.translate('none') : this.translate(`backgroundStyle${index}`), "aria-label": index === 0 ? this.translate('none') : this.translate(`backgroundStyle${index}`) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(color), className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('d-flex justify-content-center align-items-center', {
                        'has-color': color != null
                    }) }, selected && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_active_flag__WEBPACK_IMPORTED_MODULE_4__.ActiveFlag, null))));
        };
        this.translate = (id) => {
            var _a, _b;
            const messages = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
            return (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.intl) === null || _b === void 0 ? void 0 : _b.formatMessage({ id: id, defaultMessage: messages[id] });
        };
        this.state = { isDropdownOpen: false };
    }
    render() {
        const { className, onChange, isCustom } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { isOpen: this.state.isDropdownOpen, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'jimu-builder--theme-background-setting'), toggle: this.toggleDropdown },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: this.translate('quickStyle') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { className: 'jimu-outline-inside', icon: true, type: 'tertiary', arrow: false },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_colors__WEBPACK_IMPORTED_MODULE_3__.ColorsOutlined, null))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: 'text-truncate', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
          min-width: unset;
          padding: 0;
          .popper-box {
            padding: 1rem;
          }
          .dropdown-menu--inner {
            overflow: visible;
          }
          .dropdown-item {
            padding: 0 !important;
            margin-top: 0.5rem;
            &:hover {
              background: transparent !important;
            }
          }
          .jimu-keyboard-nav & .jimu-dropdown-item:focus {
            outline: 2px solid var(--primary-700);
            outline-offset: 2px;
            background: transparent;
          }
        ` },
                THEME_BACKGROUND_COLOR_LIST.map((color, index) => this.createItem(color, index)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'my-2 px-2', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `height: 1px; background-color: var(--light-700);` }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { className: 'jimu-outline-inside', onClick: () => { !isCustom && onChange(true, null); }, title: this.translate('custom'), "aria-label": this.translate('custom') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
                width: 88px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid var(--light-800);
                color: var(--dark-600);
                position: relative;
              `, className: 'text-truncate px-1' },
                        this.translate('custom'),
                        isCustom && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_active_flag__WEBPACK_IMPORTED_MODULE_4__.ActiveFlag, null))))));
    }
}
_ThemeBackgroundSetting.defaultProps = {
    background: { color: undefined, fillType: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.FillType.FIT, image: { url: '' } },
    onChange: () => { }
};
/**
 * The `ThemeBackgroundSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { ThemeBackgroundSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const ThemeBackgroundSetting = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ThemeBackgroundSetting), true);


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-border-section.tsx":
/*!********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-border-section.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeBorderSection: () => (/* binding */ ThemeBorderSection)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _theme_border_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-border-setting */ "./jimu-ui/advanced/lib/style-setting-components/theme-border-setting.tsx");
/* harmony import */ var _border_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border-setting */ "./jimu-ui/advanced/lib/style-setting-components/border-setting.tsx");
/* harmony import */ var _border_radius_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./border-radius-setting */ "./jimu-ui/advanced/lib/style-setting-components/border-radius-setting.tsx");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/** @jsx jsx */






function ThemeBorderSection(props) {
    const { border, borderRadius, onBorderChange, onBorderRasiusChange } = props;
    const [isCustom, setIsCustom] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (borderRadius != null) {
            setIsCustom(true);
            return;
        }
        else if (border != null) {
            const result = border.type !== jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NormalLineType.SOLID || border.width !== '2px' || (border.color != null && border.color !== '' && _theme_border_setting__WEBPACK_IMPORTED_MODULE_2__.THEME_BORDER_COLOR_LIST.every(color => {
                if (color == null) {
                    return true;
                }
                return `var(--${color})` !== border.color;
            }));
            setIsCustom(result);
            return;
        }
        setIsCustom(false);
    }, [border, borderRadius]);
    const updateBorderWithTheme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((useCustom, bd) => {
        if (useCustom !== isCustom) {
            setIsCustom(useCustom);
            if (useCustom) {
                return;
            }
        }
        onBorderRasiusChange(null);
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.defer(() => {
            onBorderChange(bd);
        });
    }, [isCustom, onBorderChange, onBorderRasiusChange]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_5__.SettingSection, { role: 'group', "aria-label": translate('border'), title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 align-items-center justify-content-between' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate setting-text-level-1' }, translate('border')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_border_setting__WEBPACK_IMPORTED_MODULE_2__.ThemeBorderSetting, { value: border, isCustom: isCustom, onChange: updateBorderWithTheme })) }, isCustom && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_5__.SettingRow, { flow: 'wrap' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_border_setting__WEBPACK_IMPORTED_MODULE_3__.BorderSetting, { value: border, onChange: onBorderChange })),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_5__.SettingRow, { flow: 'wrap', label: translate('borderRadius') },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_border_radius_setting__WEBPACK_IMPORTED_MODULE_4__.BorderRadiusSetting, { value: borderRadius, onChange: onBorderRasiusChange }))))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-border-setting.tsx":
/*!********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-border-setting.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   THEME_BORDER_COLOR_LIST: () => (/* binding */ THEME_BORDER_COLOR_LIST),
/* harmony export */   ThemeBorderSetting: () => (/* binding */ ThemeBorderSetting),
/* harmony export */   _ThemeBorderSetting: () => (/* binding */ _ThemeBorderSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_icons_outlined_application_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/application/colors */ "./jimu-icons/outlined/application/colors.tsx");
/* harmony import */ var _theme_active_flag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-active-flag */ "./jimu-ui/advanced/lib/style-setting-components/theme-active-flag.tsx");
/** @jsx jsx */





const THEME_BORDER_COLOR_LIST = [null, 'primary-200', 'primary-400', 'primary-600', 'light-300', 'light-600', 'light-900', 'dark-300'];
/**
 * The `ThemeBorderSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { ThemeBorderSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
class _ThemeBorderSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleDropdown = () => {
            this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
        };
        this.getStyle = (color) => {
            var _a;
            const { theme2 } = this.props;
            let colorName;
            let scale;
            if (color != null) {
                const colors = color.split('-');
                colorName = colors[0];
                scale = colors[1];
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      width: 88px;
      height: 24px;
      position: relative;
      &:not(.has-color) {
        border: 2px solid ${theme2.colors.palette.dark[200]};
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1.5px),
          ${theme2.colors.palette.dark[200]} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1.5px),
          rgba(0, 0, 0, 0) 100%
        );
      }
      &.has-color {
        border: 2px solid ${(_a = theme2.colors.palette[colorName]) === null || _a === void 0 ? void 0 : _a[scale]};
      }
    `;
        };
        this.createItem = (color, index) => {
            const { value, isCustom, onChange } = this.props;
            const selected = isCustom
                ? false
                : color == null
                    ? (value == null || value.color == null)
                    : (`var(--${color})` === value.color && value.type === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NormalLineType.SOLID && value.width === '2px');
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { key: color, className: 'jimu-outline-inside', onClick: () => { onChange(false, { color: color != null ? `var(--${color})` : null, type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NormalLineType.SOLID, width: '2px' }); }, title: index === 0 ? this.translate('none') : this.translate(`borderStyle${index}`), "aria-label": index === 0 ? this.translate('none') : this.translate(`borderStyle${index}`) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(color), className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({
                        'has-color': color != null
                    }) }, selected && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_active_flag__WEBPACK_IMPORTED_MODULE_4__.ActiveFlag, null))));
        };
        this.translate = (id) => {
            var _a, _b;
            const messages = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
            return (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.intl) === null || _b === void 0 ? void 0 : _b.formatMessage({ id: id, defaultMessage: messages[id] });
        };
        this.state = { isDropdownOpen: false };
    }
    render() {
        const { className, isCustom, onChange } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { isOpen: this.state.isDropdownOpen, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'jimu-builder--theme-border-setting'), toggle: this.toggleDropdown },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: this.translate('quickStyle') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { className: 'jimu-outline-inside', icon: true, type: 'tertiary', arrow: false },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_colors__WEBPACK_IMPORTED_MODULE_3__.ColorsOutlined, null))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: 'text-truncate', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
          min-width: unset;
          padding: 0;
          .popper-box {
            padding: 1rem;
          }
          .dropdown-menu--inner {
            overflow: visible;
          }
          .dropdown-item {
            padding: 0 !important;
            margin-top: 0.5rem;
            &:hover {
              background: transparent !important;
            }
          }
          .jimu-keyboard-nav & .jimu-dropdown-item:focus {
            outline: 2px solid var(--primary-700);
            outline-offset: 2px;
            background: transparent;
          }
        ` },
                THEME_BORDER_COLOR_LIST.map((color, index) => this.createItem(color, index)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'my-2 px-2', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `height: 1px; background-color: var(--light-700);` }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { className: 'jimu-outline-inside', onClick: () => { !isCustom && onChange(true, null); }, title: this.translate('custom'), "aria-label": this.translate('custom') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
                width: 88px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid var(--light-800);
                color: var(--dark-600);
                position: relative;
              `, className: 'text-truncate px-1' },
                        this.translate('custom'),
                        isCustom && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_active_flag__WEBPACK_IMPORTED_MODULE_4__.ActiveFlag, null))))));
    }
}
_ThemeBorderSetting.defaultProps = {
    value: { color: undefined, type: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NormalLineType.SOLID, width: '2px' },
    onChange: () => { }
};
/**
 * The `ThemeBorderSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { ThemeBorderSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const ThemeBorderSetting = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withTheme)((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ThemeBorderSetting), true);


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-box-shadow-section.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-box-shadow-section.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeBoxShadowSection: () => (/* binding */ ThemeBoxShadowSection)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _theme_box_shadow_setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-box-shadow-setting */ "./jimu-ui/advanced/lib/style-setting-components/theme-box-shadow-setting.tsx");
/* harmony import */ var _box_shadow_setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./box-shadow-setting */ "./jimu-ui/advanced/lib/style-setting-components/box-shadow-setting.tsx");
/** @jsx jsx */





function ThemeBoxShadowSection(props) {
    const { value, onChange } = props;
    const [isCustom, setIsCustom] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        setIsCustom(value != null && (value === null || value === void 0 ? void 0 : value.presetStyle) == null);
    }, [value]);
    const updateShadowWithTheme = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((useCustom, boxshadow) => {
        if (useCustom !== isCustom) {
            setIsCustom(useCustom);
        }
        onChange(boxshadow);
    }, [isCustom, onChange]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { role: 'group', "aria-label": translate('boxShadow'), title: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 align-items-center justify-content-between' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate setting-text-level-1' }, translate('boxShadow')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_box_shadow_setting__WEBPACK_IMPORTED_MODULE_3__.ThemeBoxShadowSetting, { value: value, isCustom: isCustom, onChange: updateShadowWithTheme })) }, isCustom && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_box_shadow_setting__WEBPACK_IMPORTED_MODULE_4__.BoxShadowSetting, { className: 'mt-4', value: value, onChange: onChange }))));
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/theme-box-shadow-setting.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/theme-box-shadow-setting.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeBoxShadowSetting: () => (/* binding */ ThemeBoxShadowSetting),
/* harmony export */   _ThemeBoxShadowSetting: () => (/* binding */ _ThemeBoxShadowSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_application_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/application/colors */ "./jimu-icons/outlined/application/colors.tsx");
/* harmony import */ var jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/application/check */ "./jimu-icons/outlined/application/check.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/** @jsx jsx */





const MODE_LIST = { none: 'shadow-none', small: 'shadow-sm', default: 'shadow', large: 'shadow-lg' };
function getPredefinedShadow(mode) {
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.getTheme2)();
    let boxShadow;
    switch (mode) {
        case 'none':
            boxShadow = theme.boxShadows.none;
            break;
        case 'small':
            boxShadow = theme.boxShadows.sm;
            break;
        case 'large':
            boxShadow = theme.boxShadows.lg;
            break;
        default:
            boxShadow = theme.boxShadows.default;
    }
    if (boxShadow) {
        // 0 0 10px 0 rgba(0, 0, 0, 0.2)
        const tokens = boxShadow.split(' ');
        if (tokens.length >= 5) {
            const indexOfSpread = boxShadow.lastIndexOf(tokens[3]);
            return {
                offsetX: tokens[0],
                offsetY: tokens[1],
                blur: tokens[2],
                spread: tokens[3],
                color: boxShadow.substring(indexOfSpread + tokens[3].length).trim()
            };
        }
    }
    return null;
}
/**
 * The `BoxShadowSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { BoxShadowSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
class _ThemeBoxShadowSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.translate = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages[id] }) : id;
        };
        this.toggleDropdown = () => {
            this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
        };
        this.getStyle = () => {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      font-size: 13px;
      line-height: 18px;
    `;
        };
        this.onCustomModeClick = () => {
            if (this.props.isCustom) {
                return;
            }
            const { onChange, value } = this.props;
            if ((value === null || value === void 0 ? void 0 : value.presetStyle) != null) {
                const mode = Object.keys(MODE_LIST).find(id => MODE_LIST[id] === value.presetStyle);
                if (mode) {
                    const boxShadow = getPredefinedShadow(mode);
                    if (boxShadow) {
                        onChange(true, boxShadow);
                        return;
                    }
                }
            }
            onChange(true, {});
        };
        this.createItem = (mode) => {
            const { value, isCustom, onChange } = this.props;
            const selected = !isCustom && (value.presetStyle === MODE_LIST[mode] || (mode === 'none' && this.isEmpty()));
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { css: this.getStyle(), "aria-label": this.translate(mode), key: mode, active: selected, onClick: () => { onChange(false, { presetStyle: MODE_LIST[mode] }); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 align-items-center text-truncate' },
                    selected && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_3__.CheckOutlined, null),
                    !selected && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width: 1rem;` }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 ml-2' }, this.translate(mode)))));
        };
        this.state = { isDropdownOpen: false };
    }
    isEmpty() {
        const { value } = this.props;
        if (value != null) {
            return (value.presetStyle == null || value.presetStyle === MODE_LIST.none) && ['offsetX', 'offsetY', 'blur', 'spread'].every(k => value[k] == null || parseInt(value[k]) === 0);
        }
        return true;
    }
    render() {
        const { className, isCustom } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { isOpen: this.state.isDropdownOpen, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'jimu-builder--theme-bx-setting'), toggle: this.toggleDropdown },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: this.translate('quickStyle') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { icon: true, type: 'tertiary', arrow: false, className: 'jimu-outline-inside' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_colors__WEBPACK_IMPORTED_MODULE_2__.ColorsOutlined, null))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: 'text-truncate' },
                Object.keys(MODE_LIST).map((mode) => this.createItem(mode)),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'my-2 px-2', css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `height: 1px; background-color: var(--light-700);` }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { active: isCustom, onClick: this.onCustomModeClick },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 align-items-center text-truncate' },
                        isCustom && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_3__.CheckOutlined, null),
                        !isCustom && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `width: 1rem;` }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 ml-2' }, this.translate('custom')))))));
    }
}
_ThemeBoxShadowSetting.defaultProps = {
    value: {
        offsetX: '0px',
        offsetY: '0px',
        blur: '0px',
        spread: '0px',
        color: undefined
    },
    onChange: () => { }
};
/**
 * The `BoxShadowSetting` component allows users to set the backgrpund of the box.
 *
 * ```ts
 * import { BoxShadowSetting } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const ThemeBoxShadowSetting = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ThemeBoxShadowSetting);


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/transition-info.ts":
/*!**************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/transition-info.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transitionInfos: () => (/* binding */ transitionInfos)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const noneIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_transition_none.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_transition_none.svg");
const fadeIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_transition_fade.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_transition_fade.svg");
const boxIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_transition_doorway.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_transition_doorway.svg");
const cubeIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_transition_cube.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_transition_cube.svg");
const pushIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_transition_push.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_transition_push.svg");
const coverIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_transition_cover.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_transition_cover.svg");
const transitionInfos = [
    {
        icon: noneIcon,
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.None
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.Box,
        icon: boxIcon,
        supportDirection: true
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.Cover,
        icon: coverIcon,
        supportDirection: true
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.Cube,
        icon: cubeIcon,
        supportDirection: true
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.Fade,
        icon: fadeIcon
    },
    {
        type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.Push,
        icon: pushIcon,
        supportDirection: true
    }
];


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/transition-setting.tsx":
/*!******************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/transition-setting.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransitionSetting: () => (/* binding */ TransitionSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _animation_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-info */ "./jimu-ui/advanced/lib/style-setting-components/animation-info.ts");
/* harmony import */ var _transition_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition-info */ "./jimu-ui/advanced/lib/style-setting-components/transition-info.ts");
/* harmony import */ var _animation_popper_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation-popper-content */ "./jimu-ui/advanced/lib/style-setting-components/animation-popper-content.tsx");
/* harmony import */ var jimu_icons_outlined_editor_play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/outlined/editor/play */ "./jimu-icons/outlined/editor/play.tsx");
/* harmony import */ var jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-icons/outlined/suggested/info */ "./jimu-icons/outlined/suggested/info.tsx");
/** @jsx jsx */








const animationIcon = __webpack_require__(/*! jimu-ui/advanced/lib/assets/icon_animation_in_none.svg */ "./jimu-ui/advanced/lib/assets/icon_animation_in_none.svg");
class TransitionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.sidePopperTrigger = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.buttonRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.modalStyle = {
            position: 'absolute',
            top: '60px',
            bottom: '0',
            width: '100%',
            height: 'auto',
            paddingBottom: '1px'
        };
        this.toggleSidePanel = () => {
            this.setState({ showSidePanel: !this.state.showSidePanel });
        };
        this.previewTransition = (e) => {
            e.stopPropagation();
            this.props.onPreviewTransitionClicked();
        };
        this.onTransitionTypeChanged = (value) => {
            var _a, _b;
            if (((_a = this.props.transition) === null || _a === void 0 ? void 0 : _a.type) === value) {
                this.props.onPreviewTransitionClicked();
            }
            else {
                this.props.onTransitionChange({
                    type: value,
                    direction: (_b = this.props.transition) === null || _b === void 0 ? void 0 : _b.direction
                });
            }
        };
        this.onDirectionChanged = (e) => {
            var _a;
            this.props.onTransitionChange({
                type: (_a = this.props.transition) === null || _a === void 0 ? void 0 : _a.type,
                direction: e.target.value
            });
        };
        this.previewOneByOneEffect = () => {
            this.props.onPreviewOneByOneClicked();
        };
        this.onPreviewAsAWhoneClicked = (e) => {
            e.stopPropagation();
            this.props.onPreviewAsAWhoneClicked();
        };
        this.onOnebyOneSettingChange = (mode, setting) => {
            this.props.onOneByOneChange(setting);
        };
        this.state = {
            showSidePanel: false
        };
    }
    createTransitionCard(metaInfo, index) {
        const { transition } = this.props;
        const transitionType = transition.type || jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionType.None;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('d-flex flex-column align-items-center card-item', {
                selected: metaInfo.type === transitionType
            }), key: index },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { icon: true, role: 'option', "aria-label": this.props.formatMessage(metaInfo.type.toLowerCase()), "aria-selected": metaInfo.type === transitionType, className: 'd-flex justify-content-center card-content border-0', onClick: () => { this.onTransitionTypeChanged(metaInfo.type); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { className: 'w-100 h-100', currentColor: false, icon: metaInfo.icon || animationIcon })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'card-name flex-grow-1 d-flex align-items-start mt-1' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'text-center card-name-content', title: this.props.formatMessage(metaInfo.type.toLowerCase()) }, this.props.formatMessage(metaInfo.type.toLowerCase())))));
    }
    createDirectionChooser() {
        const { transition } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'direction-select px-4' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'direction-title mb-2' }, this.props.formatMessage('direction')),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { defaultValue: jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionDirection.Horizontal, value: transition === null || transition === void 0 ? void 0 : transition.direction, onChange: this.onDirectionChanged, size: 'sm' }, Object.entries(jimu_core__WEBPACK_IMPORTED_MODULE_0__.TransitionDirection).map((entry, index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: entry[1], key: index }, this.props.formatMessage(entry[0].toLowerCase())))))));
    }
    getSidePopperStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .tab-pane {
        position: relative;
      }
      .header {
        height: 60px;
        padding: 0 0.5rem;
        border-bottom: none;
      }
      .side-popper-title {
        color: var(--dark-600);
        font-size: 16px;
      }
      .direction-title {
        color: var(--dark-600);
        font-size: 13px;
      }
      .animation-cards {
        padding: 0 16px 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12px;
        grid-column-gap: 12px;
      }

      .separator {
        width: calc(100% - 2rem);
        height: 1px;
        margin: 0 1rem 1rem;
        background: var(--light-500);
      }

      .card-item {
        font-size: 13px;
        flex: 0 0 45%;

        user-select: none;
        cursor: pointer;
        position: relative;

        .card-content {
          width: 100%;
          height: 5.3rem;
          background-color: var(--light-200);
        }

        &.selected .card-content {
          outline: 2px solid var(--primary-600);
        }

        .card-name {
          max-width: 90px;
          margin: 0 auto;
          color: var(--dark-800);
          .card-name-content {
            line-height: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    `;
    }
    getAnimBoxStyle() {
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      background-color: transparent;
      width: 100%;
      height: 72px;
      position: relative;

      .img-tip {
        position: relative;
        min-width: 90px;
        height: 72px;
        cursor: pointer;

        &, &:hover {
          background: var(--light-200);
        }

        .has-sibling {
          position: absolute;
          &.first {
            left: 5px;
            top: 5px;
          }
          &.second {
            bottom: 5px;
            right: 5px;
          }
        }

        .diag-sep {
          position: absolute;
          height: 1px;
          width: 80px;
          top: 36px;
          transform: rotateZ(-45deg);
          background: var(--light-500);

          .jimu-rtl & {
            transform: rotateZ(45deg);
          }
        }
      }

      .amin-icons  {
        display: inline-grid;
        grid-template-columns: auto 26px;
        grid-column-gap: .5rem;
        .jimu-icon {
          margin-right: 0;
        }
      }

      .anim-labels {
        align-self: stretch;
        .anim-label {
          flex-grow: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-break: break-word;
          -webkit-line-clamp: 2;
        }
      }
    `;
    }
    render() {
        var _a, _b;
        const { formatMessage, transition, transitionLabel, oneByOneEffect, showOneByOne } = this.props;
        const usedTransitionInfo = _transition_info__WEBPACK_IMPORTED_MODULE_4__.transitionInfos.find((item) => item.type === (transition === null || transition === void 0 ? void 0 : transition.type));
        const usedOneByOneEffect = _animation_info__WEBPACK_IMPORTED_MODULE_3__.oneByOneAnimationInfos.find((item) => item.type === (oneByOneEffect === null || oneByOneEffect === void 0 ? void 0 : oneByOneEffect.type));
        const iconSize = showOneByOne ? 32 : 48;
        const transitionName = (transition === null || transition === void 0 ? void 0 : transition.type) ? formatMessage(transition.type.toLowerCase()) : formatMessage('none');
        const oneByOneEffectName = (oneByOneEffect === null || oneByOneEffect === void 0 ? void 0 : oneByOneEffect.type) ? formatMessage(oneByOneEffect.type.toLowerCase()) : formatMessage('none');
        let ariaLabel = transitionName;
        if (showOneByOne) {
            ariaLabel = ariaLabel + '/' + oneByOneEffectName;
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anima-box d-flex justify-content-center align-items-center flex-grow-1', css: this.getAnimBoxStyle() },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { className: 'img-tip d-flex justify-content-center align-items-center border-0', onClick: this.toggleSidePanel, title: ariaLabel, "aria-label": ariaLabel, icon: true },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('anim-icon first', { 'has-sibling': showOneByOne }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: (usedTransitionInfo === null || usedTransitionInfo === void 0 ? void 0 : usedTransitionInfo.icon) || animationIcon, size: iconSize })),
                    showOneByOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'diag-sep' }),
                    showOneByOne && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('anim-icon second', { 'has-sibling': showOneByOne }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: (usedOneByOneEffect === null || usedOneByOneEffect === void 0 ? void 0 : usedOneByOneEffect.icon) || animationIcon, size: iconSize })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column justify-content-between align-items-center ml-2 h-100 flex-grow-1' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-labels d-flex' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'anim-label' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, transitionName),
                            showOneByOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'mx-1' }, "/"),
                            showOneByOne && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null, oneByOneEffectName)),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { title: formatMessage('animationOnTransition') },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { className: 'p-0', icon: true, type: 'tertiary', size: 'sm' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_7__.InfoOutlined, { size: 'm' })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'amin-icons w-100', ref: this.sidePopperTrigger },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { ref: this.buttonRef, "aria-label": formatMessage('change'), size: 'sm', onClick: this.toggleSidePanel, className: 'text-truncate', title: formatMessage('change') }, formatMessage('change')),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { title: formatMessage('preview'), placement: 'bottom' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: 'default', size: 'sm', icon: true, onClick: this.onPreviewAsAWhoneClicked },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_play__WEBPACK_IMPORTED_MODULE_6__.PlayOutlined, { size: 's' })))))),
            this.state.showSidePanel && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SidePopper, { isOpen: true, position: 'right', toggle: this.toggleSidePanel, trigger: (_a = this.sidePopperTrigger) === null || _a === void 0 ? void 0 : _a.current, title: formatMessage('setting'), backToFocusNode: (_b = this.buttonRef) === null || _b === void 0 ? void 0 : _b.current },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getSidePopperStyle(), style: this.modalStyle },
                    !showOneByOne &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'bg-light-300 border-color-gray-400 mt-4' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 animation-panel-border' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, { role: 'listbox', className: 'animation-cards' }, _transition_info__WEBPACK_IMPORTED_MODULE_4__.transitionInfos.map((entry, index) => this.createTransitionCard(entry, index))),
                                (usedTransitionInfo === null || usedTransitionInfo === void 0 ? void 0 : usedTransitionInfo.supportDirection) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator' }),
                                (usedTransitionInfo === null || usedTransitionInfo === void 0 ? void 0 : usedTransitionInfo.supportDirection) && this.createDirectionChooser())),
                    showOneByOne && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tabs, { type: 'underline', key: 'widget-setting', className: 'flex-grow-1 w-100 h-100', fill: true, defaultValue: 'transition' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tab, { id: 'transition', title: transitionLabel, className: 'tab-title-item' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'bg-light-300 border-color-gray-400 mt-4' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 animation-panel-border' },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'animation-cards', role: 'listbox' }, _transition_info__WEBPACK_IMPORTED_MODULE_4__.transitionInfos.map((entry, index) => this.createTransitionCard(entry, index))),
                                    (usedTransitionInfo === null || usedTransitionInfo === void 0 ? void 0 : usedTransitionInfo.supportDirection) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'separator' }),
                                    (usedTransitionInfo === null || usedTransitionInfo === void 0 ? void 0 : usedTransitionInfo.supportDirection) && this.createDirectionChooser()))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tab, { id: 'widget', title: formatMessage('widget'), className: 'tab-title-item' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_animation_popper_content__WEBPACK_IMPORTED_MODULE_5__["default"], { effectSetting: null, oneByOneSetting: oneByOneEffect, onSettingChange: this.onOnebyOneSettingChange, previewEnabled: true, supportOneByOne: true, supportAsOne: false, onPreviewClicked: this.previewOneByOneEffect, formatMessage: this.props.formatMessage })))))))));
    }
}
TransitionSetting.defaultProps = {
    formatMessage: id => id,
    showOneByOne: true,
    onPreviewOneByOneClicked: () => { }
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/unit-input/base-unit-input.tsx":
/*!**************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/unit-input/base-unit-input.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUnitInput: () => (/* binding */ BaseUnitInput)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _unit_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-selector */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/unit-selector.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
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




const DefaultValue = {
    val: 0,
    unit: 'px'
};
const DefaultUnits = ['px'];
const Root = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.styled)((0,jimu_ui__WEBPACK_IMPORTED_MODULE_1__.InputGroup)) `
  width: 100%;
  .jimu-numeric-input {
    flex: 1;
    z-index: 0;
    &:focus-within {
      z-index: 1;
    }
    padding: 0px;
    width: calc(100% - 26px)
  }

  > .style-setting--unit-selector button {
    width: 26px;
    margin-left: -1px;
    z-index: 0;
    padding: 0px;
  }
`;
const parseValue = (value) => {
    if (value && typeof value === 'object')
        return value;
    const ret = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(value);
    return {
        val: ret === null || ret === void 0 ? void 0 : ret[0],
        unit: (ret === null || ret === void 0 ? void 0 : ret[1]) || 'px'
    };
};
/**
 * The `BaseUnitInput` component allows users to set units and values.
 *
 * ```ts
 * import { BaseUnitInput } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const BaseUnitInput = (props) => {
    const { min, max, precision, className, disabled = false, units = DefaultUnits, value: propValue = DefaultValue, onChange, 'aria-label': propAriaLabel } = props, others = __rest(props, ["min", "max", "precision", "className", "disabled", "units", "value", "onChange", 'aria-label']);
    const value = parseValue(propValue);
    const ariaLabel = value !== null
        ? `${propAriaLabel ? `${propAriaLabel}, ` : ''}${value.unit}`
        : propAriaLabel;
    const handleInputChange = (val, evt) => {
        if (val == null && (value === null || value === void 0 ? void 0 : value.val) === '')
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, value, { val }), evt);
    };
    const handleUnitChange = (_unit) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.assign({}, value, { unit: _unit }));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Root, Object.assign({ className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'style-setting--base-unit-input') }, others),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { "aria-label": ariaLabel, size: 'sm', min: min, max: max, precision: precision, value: isNaN(value.val) ? '' : value.val, disabled: disabled, showHandlers: false, onAcceptValue: handleInputChange }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_unit_selector__WEBPACK_IMPORTED_MODULE_2__.UnitSelector, { disabled: disabled, units: units, value: value.unit, onChange: handleUnitChange })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/unit-input/date-unit-input.tsx":
/*!**************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/unit-input/date-unit-input.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateUnitInput: () => (/* binding */ DateUnitInput)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _base_unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/base-unit-input.tsx");
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



const DefaultValue = {
    val: 0,
    unit: 'year'
};
const DefaultUnits = ['year'];
const Root = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.styled)((0,_base_unit_input__WEBPACK_IMPORTED_MODULE_2__.BaseUnitInput)) `
 .jimu-numeric-input {
    width: calc(100% - 60px)
  }
  > .style-setting--unit-selector button {
    width: 60px;
  }
`;
/**
 * The `DateUnitInput` component allows users to set date time units and values.
 *
 * ```ts
 * import { DateUnitInput } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const DateUnitInput = (props) => {
    const { className, value = DefaultValue, units = DefaultUnits } = props, others = __rest(props, ["className", "value", "units"]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Root, Object.assign({ className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'style-setting--date-unit-input') }, others, { value: value, units: units })));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts":
/*!***************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/unit-input/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateUnitInput: () => (/* reexport safe */ _date_unit_input__WEBPACK_IMPORTED_MODULE_2__.DateUnitInput),
/* harmony export */   InputUnit: () => (/* reexport safe */ _input_unit__WEBPACK_IMPORTED_MODULE_1__.InputUnit),
/* harmony export */   UnitSelector: () => (/* reexport safe */ _unit_selector__WEBPACK_IMPORTED_MODULE_0__.UnitSelector),
/* harmony export */   UnitSelectorDateUnits: () => (/* reexport safe */ _unit_selector__WEBPACK_IMPORTED_MODULE_0__.UnitSelectorDateUnits),
/* harmony export */   UnitSelectorDateWeekUnits: () => (/* reexport safe */ _unit_selector__WEBPACK_IMPORTED_MODULE_0__.UnitSelectorDateWeekUnits),
/* harmony export */   UnitSelectorTimeUnits: () => (/* reexport safe */ _unit_selector__WEBPACK_IMPORTED_MODULE_0__.UnitSelectorTimeUnits)
/* harmony export */ });
/* harmony import */ var _unit_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-selector */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/unit-selector.tsx");
/* harmony import */ var _input_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-unit */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/input-unit.tsx");
/* harmony import */ var _date_unit_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/date-unit-input.tsx");





/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/unit-input/input-unit.tsx":
/*!*********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/unit-input/input-unit.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputUnit: () => (/* binding */ InputUnit)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _base_unit_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-unit-input */ "./jimu-ui/advanced/lib/style-setting-components/unit-input/base-unit-input.tsx");
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


const DefaultValue = {
    distance: 0,
    unit: 'px'
};
const DefaultUnits = ['px'];
const parseValue = (value) => {
    var _a, _b;
    if (typeof value === 'string') {
        return value;
    }
    else {
        const val = (_a = value === null || value === void 0 ? void 0 : value.distance) !== null && _a !== void 0 ? _a : 0;
        const unit = (_b = value === null || value === void 0 ? void 0 : value.unit) !== null && _b !== void 0 ? _b : 'px';
        return { val, unit };
    }
};
/**
 * The `InputUnit` component allows users to set units and values.
 *
 * ```ts
 * import { InputUnit } from 'jimu-ui/advanced/style-setting-components'
 * ```
 */
const InputUnit = (props) => {
    const { className, units = DefaultUnits, value: propValue = DefaultValue, onChange } = props, others = __rest(props, ["className", "units", "value", "onChange"]);
    const value = parseValue(propValue);
    const handleChange = (value, evt) => {
        var _a, _b;
        const distance = (_a = value === null || value === void 0 ? void 0 : value.val) !== null && _a !== void 0 ? _a : 0;
        const unit = ((_b = value === null || value === void 0 ? void 0 : value.unit) !== null && _b !== void 0 ? _b : 'px');
        onChange === null || onChange === void 0 ? void 0 : onChange({ distance, unit }, evt);
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_base_unit_input__WEBPACK_IMPORTED_MODULE_1__.BaseUnitInput, Object.assign({ className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'style-setting--input-unit'), units: units, value: value, onChange: handleChange }, others)));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/style-setting-components/unit-input/unit-selector.tsx":
/*!************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/style-setting-components/unit-input/unit-selector.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitSelector: () => (/* binding */ UnitSelector),
/* harmony export */   UnitSelectorDateUnits: () => (/* binding */ UnitSelectorDateUnits),
/* harmony export */   UnitSelectorDateWeekUnits: () => (/* binding */ UnitSelectorDateWeekUnits),
/* harmony export */   UnitSelectorTimeUnits: () => (/* binding */ UnitSelectorTimeUnits)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



const UnitSelectorDateUnits = ['year', 'month', 'day'];
const UnitSelectorDateWeekUnits = ['year', 'month', 'week', 'day'];
const UnitSelectorTimeUnits = ['hour', 'minute', 'second'];
const dateTimeUnits = [...UnitSelectorDateWeekUnits, ...UnitSelectorTimeUnits];
const StyledDropdownMenu = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.styled)((0,jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu)) `
  min-width: 60px !important;
`;
const defaultUnits = ['px'];
const UnitSelector = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    const { className, style, title = translate('changeUnit'), disabled: propDisabled, value = 'px', units = defaultUnits, onChange } = props;
    const disabled = propDisabled || units.length <= 1;
    const handleChange = (newUnit) => {
        if (newUnit !== value) {
            onChange === null || onChange === void 0 ? void 0 : onChange(newUnit);
        }
    };
    const translateUnit = (unit) => {
        if (dateTimeUnits.includes(unit)) {
            return translate(unit);
        }
        else {
            return unit;
        }
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Dropdown, { direction: 'down', size: 'sm', disabled: disabled, style: style, title: title, activeIcon: true, autoWidth: true, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'style-setting--unit-selector', 'jimu-outline-inside') },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownButton, { arrow: false, size: 'sm', "aria-label": translate('unit') }, translateUnit(value)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(StyledDropdownMenu, { alignment: 'end' }, units.map(unit => {
            const label = translateUnit(unit);
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, { className: 'px-1', active: value === unit, "aria-pressed": value === unit, "aria-label": label, key: unit, onClick: () => { handleChange(unit); } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'text-truncate', title: label }, label)));
        }))));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_fade.svg":
/*!****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_fade.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NiA0OEwzMS44OTMyIDU1LjQxNjRMMzQuNTg3MyAzOS43MDgyTDIzLjE3NDYgMjguNTgzNkwzOC45NDY2IDI2LjI5MThMNDYgMTJMNTMuMDUzNCAyNi4yOTE4TDY4LjgyNTQgMjguNTgzNkw1Ny40MTI3IDM5LjcwODJMNjAuMTA2OCA1NS40MTY0TDQ2IDQ4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfMjk5MCkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzI5OTAiIHgxPSI2Ny43MjQ5IiB5MT0iMTcuMzMxMyIgeDI9IjM3Ljc5NTEiIHkyPSIxNy4zMzEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjgyODI4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_floatin.svg":
/*!*******************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_floatin.svg ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NiA0OEwzMS44OTMyIDU1LjQxNjRMMzQuNTg3MyAzOS43MDgyTDIzLjE3NDYgMjguNTgzNkwzOC45NDY2IDI2LjI5MThMNDYgMTJMNTMuMDUzNCAyNi4yOTE4TDY4LjgyNTQgMjguNTgzNkw1Ny40MTI3IDM5LjcwODJMNjAuMTA2OCA1NS40MTY0TDQ2IDQ4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfMzAxNikiLz4KPHJlY3QgeD0iNTMiIHk9IjU0IiB3aWR0aD0iOCIgaGVpZ2h0PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MyA1NCkiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xXzMwMTYpIi8+CjxyZWN0IHg9IjQxIiB5PSI1NCIgd2lkdGg9IjgiIGhlaWdodD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNDEgNTQpIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMV8zMDE2KSIvPgo8cmVjdCB4PSI0NyIgeT0iNTEuNSIgd2lkdGg9IjExIiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDQ3IDUxLjUpIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMV8zMDE2KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMzAxNiIgeDE9IjU4LjA3NjMiIHkxPSI1Ni4xODk4IiB4Mj0iNTguMDc2MyIgeTI9IjMyLjAzNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzZBNkE2QSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyODI4MjgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzFfMzAxNiIgeDE9IjUzIiB5MT0iNTYiIHgyPSI2MSIgeTI9IjU2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzFfMzAxNiIgeDE9IjQxIiB5MT0iNTYiIHgyPSI0OSIgeTI9IjU2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzFfMzAxNiIgeDE9IjQ3IiB5MT0iNTMuNSIgeDI9IjU4IiB5Mj0iNTMuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzZBNkE2QSIgc3RvcC1vcGFjaXR5PSIwLjAxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_flyin.svg":
/*!*****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_flyin.svg ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NyA0OEwzMi44OTMyIDU1LjQxNjRMMzUuNTg3MyAzOS43MDgyTDI0LjE3NDYgMjguNTgzNkwzOS45NDY2IDI2LjI5MThMNDcgMTJMNTQuMDUzNCAyNi4yOTE4TDY5LjgyNTQgMjguNTgzNkw1OC40MTI3IDM5LjcwODJMNjEuMTA2OCA1NS40MTY0TDQ3IDQ4WiIgZmlsbD0iIzZBNkE2QSIvPgo8cmVjdCB4PSIyMSIgeT0iMTYiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMV8zMDA2KSIvPgo8cmVjdCB4PSIyMSIgeT0iMjIiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMV8zMDA2KSIvPgo8cmVjdCB4PSIyMSIgeT0iMzYiIHdpZHRoPSI5IiBoZWlnaHQ9IjIiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xXzMwMDYpIi8+CjxyZWN0IHg9IjIxIiB5PSI0OCIgd2lkdGg9IjkiIGhlaWdodD0iMiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzFfMzAwNikiLz4KPHJlY3QgeD0iMjEiIHk9IjQyIiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzFfMzAwNikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjE4IiB4Mj0iNDEiIHkyPSIxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjI0IiB4Mj0iMzgiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjM4IiB4Mj0iMzAiIHkyPSIzOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjUwIiB4Mj0iMzAiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8xXzMwMDYiIHgxPSIyMSIgeTE9IjQ0IiB4Mj0iMzMiIHkyPSI0NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNkE2QTZBIiBzdG9wLW9wYWNpdHk9IjAuMDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNkE2QTZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_none.svg":
/*!****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_none.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25faW5fbm9uZTwvdGl0bGU+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTE5Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE0MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiM2QTZBNkEiIHBvaW50cz0iNDYgNDggMzEuODkzMTUzOSA1NS40MTY0MDc5IDM0LjU4NzMyMTggMzkuNzA4MjAzOSAyMy4xNzQ2NDM2IDI4LjU4MzU5MjEgMzguOTQ2NTc3IDI2LjI5MTc5NjEgNDYgMTIgNTMuMDUzNDIzIDI2LjI5MTc5NjEgNjguODI1MzU2NCAyOC41ODM1OTIxIDU3LjQxMjY3ODIgMzkuNzA4MjAzOSA2MC4xMDY4NDYxIDU1LjQxNjQwNzkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_spin.svg":
/*!****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_spin.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25faW5fc3BpbjwvdGl0bGU+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2MS4wMDAwMDAsIC01NTIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxNy4wMDAwMDAsIDUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ0LjAwMDAwMCwgNTAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQ1LjY2NjY2NjcsMTMgTDUyLjcyMDA4OTcsMjcuMjkxNzk2MSBMNjguNDkyMDIzMSwyOS41ODM1OTIxIEw1Ny4wNzkzNDQ5LDQwLjcwODIwMzkgTDU5Ljc3MzUxMjcsNTYuNDE2NDA3OSBMNDUuNjY2NjY2Nyw0OSBMMzEuNTU5ODIwNiw1Ni40MTY0MDc5IEwzNC4yNTM5ODg1LDQwLjcwODIwMzkgTDIyLjg0MTMxMDMsMjkuNTgzNTkyMSBMMzguNjEzMjQzNiwyNy4yOTE3OTYxIEw0NS42NjY2NjY3LDEzIFogTTc2LjY2NjY2NjcsMjMuNjY2NjY2NyBMNzYuNjY2NjY2NywyNSBMNzMuMDg5MzMzMywyNSBDNzMuNTI1MzMzMywyNS4zMzMzMzMzIDc0LjA4NCwyNS43NjY2NjY3IDc0LjM5MTMzMzMsMjYuMDQ2NjY2NyBDNzUuODI4LDI3LjM1NjY2NjcgNzYuNjY2NjY2NywyOC44NDEzMzMzIDc2LjY2NjY2NjcsMzAuNjY2NjY2NyBDNzYuNjY2NjY2NywzNC45MjY2NjY3IDczLjcyNTMzMzMsMzcgNzAsMzcgTDcwLDM1LjY2NjY2NjcgQzczLjA2ODY2NjcsMzUuNjY2NjY2NyA3NS4zMzMzMzMzLDM0LjA3IDc1LjMzMzMzMzMsMzAuNjY2NjY2NyBDNzUuMzMzMzMzMywyOS4yNzI2NjY3IDc0LjY3OCwyOC4xMTIgNzMuNDkzMzMzMywyNy4wMzMzMzMzIEM3My4xODQsMjYuNzUwNjY2NyA3Mi40Nzg2NjY3LDI2LjIxMzMzMzMgNzIsMjUuODQ1MzMzMyBMNzIsMjkuNjY2NjY2NyBMNzAuNjY2NjY2NywyOS42NjY2NjY3IEw3MC42NjY2NjY3LDIzLjY2NjY2NjcgTDc2LjY2NjY2NjcsMjMuNjY2NjY2NyBaIE0xOSwyMy42NjY2NjY3IEwxOSwyNSBDMTUuOTMxMzMzMywyNSAxMy42NjY2NjY3LDI2LjU5NjY2NjcgMTMuNjY2NjY2NywzMCBDMTMuNjY2NjY2NywzMS4zOTQgMTQuMzIyLDMyLjU1NDY2NjcgMTUuNTA2NjY2NywzMy42MzMzMzMzIEMxNS44MTYsMzMuOTE2IDE2LjUyMTMzMzMsMzQuNDUzMzMzMyAxNywzNC44MjEzMzMzIEwxNywzMSBMMTguMzMzMzMzMywzMSBMMTguMzMzMzMzMywzNyBMMTIuMzMzMzMzMywzNyBMMTIuMzMzMzMzMywzNS42NjY2NjY3IEwxNS45MTA2NjY3LDM1LjY2NjY2NjcgQzE1LjQ3NDY2NjcsMzUuMzMzMzMzMyAxNC45MTYsMzQuOSAxNC42MDg2NjY3LDM0LjYyIEMxMy4xNzIsMzMuMzEgMTIuMzMzMzMzMywzMS44MjUzMzMzIDEyLjMzMzMzMzMsMzAgQzEyLjMzMzMzMzMsMjUuNzQgMTUuMjc0NjY2NywyMy42NjY2NjY3IDE5LDIzLjY2NjY2NjcgWiBNNDAuMzMzMzMzMyw0IEw0MC4zMzMzMzMzLDcuNTc3MzMzMzMgQzQwLjY2NjY2NjcsNy4xNDEzMzMzMyA0MS4xLDYuNTgyNjY2NjYgNDEuMzgsNi4yNzUzMzMzMyBDNDIuNjksNC44Mzg2NjY2NyA0NC4xNzQ2NjY3LDQgNDYsNCBDNTAuMjYsNCA1Mi4zMzMzMzMzLDYuOTQxMzMzMzMgNTIuMzMzMzMzMywxMC42NjY2NjY3IEw1MSwxMC42NjY2NjY3IEM1MSw3LjU5OCA0OS40MDMzMzMzLDUuMzMzMzMzMzQgNDYsNS4zMzMzMzMzMyBDNDQuNjA2LDUuMzMzMzMzMzMgNDMuNDQ1MzMzMyw1Ljk4ODY2NjY2IDQyLjM2NjY2NjcsNy4xNzMzMzMzMyBDNDIuMDg0LDcuNDgyNjY2NjYgNDEuNTQ2NjY2Nyw4LjE4OCA0MS4xNzg2NjY3LDguNjY2NjY2NjcgTDQ1LDguNjY2NjY2NjcgTDQ1LDEwIEwzOSwxMCBMMzksNCBMNDAuMzMzMzMzMyw0IFoiIGZpbGw9IiM2QTZBNkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_wipe.svg":
/*!****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_wipe.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NiA0OEwzMS44OTMyIDU1LjQxNjRMMzQuNTg3MyAzOS43MDgyTDIzLjE3NDYgMjguNTgzNkwzOC45NDY2IDI2LjI5MThMNDYgMTJMNTMuMDUzNCAyNi4yOTE4TDY4LjgyNTQgMjguNTgzNkw1Ny40MTI3IDM5LjcwODJMNjAuMTA2OCA1NS40MTY0TDQ2IDQ4WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfMzAyMykiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzMwMjMiIHgxPSI1OC4wNzYzIiB5MT0iNTYuMTg5OCIgeDI9IjU4LjA3NjMiIHkyPSIzMi4wMzcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2QTZBNkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjgyODI4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_in_zoom.svg":
/*!****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_in_zoom.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25faW5fem9vbTwvdGl0bGU+CiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQxLjAwMDAwMCwgLTQzMi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDM4MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjAiIHk9IjAiIHdpZHRoPSI5MiIgaGVpZ2h0PSI3MiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgMTEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHBvaW50cz0iMjYgMzYgMTEuODkzMTUzOSA0My40MTY0MDc5IDE0LjU4NzMyMTggMjcuNzA4MjAzOSAzLjE3NDY0MzYxIDE2LjU4MzU5MjEgMTguOTQ2NTc3IDE0LjI5MTc5NjEgMjYgMCAzMy4wNTM0MjMgMTQuMjkxNzk2MSA0OC44MjUzNTY0IDE2LjU4MzU5MjEgMzcuNDEyNjc4MiAyNy43MDgyMDM5IDQwLjEwNjg0NjEgNDMuNDE2NDA3OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjNkE2QTZBIiBwb2ludHM9IjI2IDMwIDE4Ljk0NjU3NyAzMy43MDgyMDM5IDIwLjI5MzY2MDkgMjUuODU0MTAyIDE0LjU4NzMyMTggMjAuMjkxNzk2MSAyMi40NzMyODg1IDE5LjE0NTg5OCAyNiAxMiAyOS41MjY3MTE1IDE5LjE0NTg5OCAzNy40MTI2NzgyIDIwLjI5MTc5NjEgMzEuNzA2MzM5MSAyNS44NTQxMDIgMzMuMDUzNDIzIDMzLjcwODIwMzkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjA5ODk5OTUsNDEgQzI2LjM4OTI0NjYsNDEuMDAyNjg3NyAyNi42MzQ3Mzc0LDQxLjIzODQ2MTQgMjYuNjQ3MzE4Myw0MS41MjY2NTYzIEwyNi42NDkyMjIyLDQ4LjkzMDM5OTggTDMwLjA1NzAxNSw0NS40MjU4NzUxIEMzMC4yNTMzNTQ4LDQ1LjIyMzk2MiAzMC41ODYxMDgsNDUuMjI2OTk2NCAzMC44MDAyMzk5LDQ1LjQzMjY1MjUgQzMxLjAxNDM3MTgsNDUuNjM4MzA4NSAzMS4wMjg3OTUyLDQ1Ljk2ODcwODYgMzAuODMyNDU1Myw0Ni4xNzA2MjE3IEwyNi4yMTA4OTMzLDUwLjkyMzM2OTEgTDIxLjE3MDUzMTIsNDYuMDgyNTE2MiBDMjAuOTU2Mzk5Miw0NS44NzY4NjAyIDIwLjk0MTk3NTksNDUuNTQ2NDYwMSAyMS4xMzgzMTU4LDQ1LjM0NDU0NyBDMjEuMzM0NjU1Niw0NS4xNDI2MzM5IDIxLjY2NzQwODgsNDUuMTQ1NjY4MiAyMS44ODE1NDA3LDQ1LjM1MTMyNDMgTDI1LjU5ODE0MzQsNDguOTIwODE1MiBMMjUuNTk2MjM5NSw0MS41MTcwNzE3IEMyNS41ODM2NTg2LDQxLjIyODg3NjggMjUuODA4NzUxOCw0MC45OTczOTQyIDI2LjA5ODk5OTUsNDEgWiBNNDkuMjI5MTgxMSwyNy4yMDM4MiBDNDkuNDg4MDQ1MSwyNy4wOTI4ODAxIDQ5Ljc5MTMzMTMsMjcuMjI0NzUwMyA0OS45MDY1ODk3LDI3LjQ5ODM2MDIgTDQ5LjkwNjU4OTcsMjcuNDk4MzYwMiBMNTIuNjE5NjExLDMzLjkzODc1MDEgTDQ2LjUyNjMxOTMsMzYuNTUwMTE3NiBDNDYuMjY3NDU1MywzNi42NjEwNTc1IDQ1Ljk2NDE2OTEsMzYuNTI5MTg3NCA0NS44NDg5MTA2LDM2LjI1NTU3NzUgQzQ1LjczMzY1MjIsMzUuOTgxOTY3NSA0NS44NTAwNjc0LDM1LjY3MDIyODMgNDYuMTA4OTMxNSwzNS41NTkyODg0IEw0Ni4xMDg5MzE1LDM1LjU1OTI4ODQgTDUwLjYwMTkzMDksMzMuNjMzNzQ5MSBMNDMuNjkwNjIzMSwzMC45Nzg3MDczIEM0My40MjYwNzg2LDMwLjg2MzY4MjIgNDMuMjkzOTQwOSwzMC41NTAwMDMgNDMuMzk1NDg1MywzMC4yNzgwODUyIEM0My40OTcwMjk3LDMwLjAwNjE2NzUgNDMuNzkzODAzNSwyOS44Nzg5ODA4IDQ0LjA1ODM0OCwyOS45OTQwMDU5IEw0NC4wNTgzNDgsMjkuOTk0MDA1OSBMNTAuOTY5NjU1OCwzMi42NDkwNDc3IEw0OC45NjkxNjAzLDI3LjkwMDEwOTEgQzQ4Ljg1MzkwMTgsMjcuNjI2NDk5MSA0OC45NzAzMTcxLDI3LjMxNDc1OTkgNDkuMjI5MTgxMSwyNy4yMDM4MiBaIE0zLjM5MDQyOTksMjcuMjAzODIgQzMuNjQ5MjkzOTEsMjcuMzE0NzU5OSAzLjc2NTcwOTE4LDI3LjYyNjQ5OTEgMy42NTA0NTA3LDI3LjkwMDEwOTEgTDEuNjQ5OTU1MTYsMzIuNjQ5MDQ3NyBMOC41NjEyNjI5MiwyOS45OTQwMDU5IEM4LjgyNTgwNzQ2LDI5Ljg3ODk4MDggOS4xMjI1ODEyMiwzMC4wMDYxNjc1IDkuMjI0MTI1NjYsMzAuMjc4MDg1MiBDOS4zMjU2NzAxLDMwLjU1MDAwMyA5LjE5MzUzMjQxLDMwLjg2MzY4MjIgOC45Mjg5ODc4NiwzMC45Nzg3MDczIEwyLjAxNzY4MDExLDMzLjYzMzc0OTEgTDYuNTEwNjc5NTEsMzUuNTU5Mjg4NCBDNi43Njk1NDM1MiwzNS42NzAyMjgzIDYuODg1OTU4NzksMzUuOTgxOTY3NSA2Ljc3MDcwMDMxLDM2LjI1NTU3NzUgQzYuNjU1NDQxODMsMzYuNTI5MTg3NCA2LjM1MjE1NTY0LDM2LjY2MTA1NzUgNi4wOTMyOTE2MywzNi41NTAxMTc2IEwtNi4zMTA4ODcyNGUtMzAsMzMuOTM4NzUwMSBMMi43MTMwMjEyMiwyNy40OTgzNjAyIEMyLjgyODI3OTcsMjcuMjI0NzUwMyAzLjEzMTU2NTksMjcuMDkyODgwMSAzLjM5MDQyOTksMjcuMjAzODIgWiBNNDMuMDAyNjcyMSwxIEw0My45OTQyMDUxLDcuOTE3ODAwODcgQzQ0LjAzNjMyODgsOC4yMTE2OTI4NiA0My44NDQyNzk5LDguNDgwOTMxNTYgNDMuNTY1MjUxOSw4LjUxOTE2MjM0IEM0My4yODYyMjM5LDguNTU3MzkzMTIgNDMuMDI1ODc5LDguMzUwMTM4NzYgNDIuOTgzNzU1Miw4LjA1NjI0Njc2IEw0Mi4yNTI2MzA0LDIuOTU1MjgwNDggTDM3LjY5NTkzMSw4Ljc5MDY4MjEyIEMzNy41Mjg0MTQzLDkuMDI1NTI4MzggMzcuMjA4NTIzNiw5LjA2OTM1NzkzIDM2Ljk4MTQzNSw4Ljg4ODU3ODE1IEMzNi43NTQzNDY0LDguNzA3Nzk4MzcgMzYuNzA2MDUzOCw4LjM3MDg2Njg5IDM2Ljg3MzU3MDUsOC4xMzYwMjA2MyBMNDEuNDMwMjY5OSwyLjMwMDYxODk5IEwzNi41ODcyOTE2LDIuOTY0MTc1NCBDMzYuMzA4MjYzNiwzLjAwMjQwNjE4IDM2LjA0NzkxODcsMi43OTUxNTE4MiAzNi4wMDU3OTQ5LDIuNTAxMjU5ODIgQzM1Ljk2MzY3MTIsMi4yMDczNjc4MyAzNi4xNTU3MjAxLDEuOTM4MTI5MTIgMzYuNDM0NzQ4MSwxLjg5OTg5ODM1IEw0My4wMDI2NzIxLDEgWiBNOC45OTczMjc4NywxIEwxNS41NjUyNTE5LDEuODk5ODk4MzUgQzE1Ljg0NDI3OTksMS45MzgxMjkxMiAxNi4wMzYzMjg4LDIuMjA3MzY3ODMgMTUuOTk0MjA1MSwyLjUwMTI1OTgyIEMxNS45NTIwODEzLDIuNzk1MTUxODIgMTUuNjkxNzM2NCwzLjAwMjQwNjE4IDE1LjQxMjcwODQsMi45NjQxNzU0IEwxNS40MTI3MDg0LDIuOTY0MTc1NCBMMTAuNTY5NzMwMSwyLjMwMDYxODk5IEwxNS4xMjY0Mjk1LDguMTM2MDIwNjMgQzE1LjI5Mzk0NjIsOC4zNzA4NjY4OSAxNS4yNDU2NTM2LDguNzA3Nzk4MzcgMTUuMDE4NTY1LDguODg4NTc4MTUgQzE0Ljc5MTQ3NjQsOS4wNjkzNTc5MyAxNC40NzE1ODU3LDkuMDI1NTI4MzggMTQuMzA0MDY5LDguNzkwNjgyMTIgTDE0LjMwNDA2OSw4Ljc5MDY4MjEyIEw5Ljc0NzM2OTYzLDIuOTU1MjgwNDggTDkuMDE2MjQ0NzgsOC4wNTYyNDY3NiBDOC45NzQxMjEwNSw4LjM1MDEzODc2IDguNzEzNzc2MTEsOC41NTczOTMxMiA4LjQzNDc0ODA5LDguNTE5MTYyMzQgQzguMTU1NzIwMDcsOC40ODA5MzE1NiA3Ljk2MzY3MTE5LDguMjExNjkyODYgOC4wMDU3OTQ5Myw3LjkxNzgwMDg3IEw4LjAwNTc5NDkzLDcuOTE3ODAwODcgTDguOTk3MzI3ODcsMSBaIiBmaWxsPSIjNkE2QTZBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_transition_cover.svg":
/*!*************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_transition_cover.svg ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iOCIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzYzNjM2IiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cmVjdCB5PSIyNCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjNTI1MjUyIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_transition_cube.svg":
/*!************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_transition_cube.svg ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9jdWJlPC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDYxLjAwMDAwMCwgLTI3MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCAyMTguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjNkE2QTZBIiBwb2ludHM9IjEyIDE4LjQgNTEgMTIgNTEgNjAgMTIgNTMuNiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMzNjM2MzYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1LjUwMDAwMCwgMzYuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02NS41MDAwMDAsIC0zNi4wMDAwMDApICIgcG9pbnRzPSI1MSAxOC40IDgwIDEyIDgwIDYwIDUxIDUzLjYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_transition_doorway.svg":
/*!***************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_transition_doorway.svg ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9kb29yd2F5PC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDEuMDAwMDAwLCAtNjMwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxNy4wMDAwMDAsIDUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA1NzguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzM2MzYzNiIgcG9pbnRzPSIwIC0xLjE0MDE5OTA1ZS0xMyAyNCAxMiAyNCA2MCAwIDcyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgZmlsbD0iIzZBNkE2QSIgeD0iMjYiIHk9IjIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMzYzNjM2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MC4wMDAwMDAsIDM2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtODAuMDAwMDAwLCAtMzYuMDAwMDAwKSAiIHBvaW50cz0iNjggLTEuMTQwMTk5MDVlLTEzIDkyIDExIDkyIDYwIDY4IDcyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_transition_fade.svg":
/*!************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_transition_fade.svg ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9mYWRlPC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDYxLjAwMDAwMCwgLTE1MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTE3LjAwMDAwMCwgNTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA5OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBvcGFjaXR5PSIwLjEwMDAwMDAwMSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNTI1MjUyIiB4PSIyOCIgeT0iMjQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsPSIjMzYzNjM2IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjQsMCBMNjQsNDggTDAsNDggTDAsMCBMNjQsMCBaIE02MywxIEwxLDEgTDEsNDcgTDYzLDQ3IEw2MywxIFoiIGZpbGw9IiM2QTZBNkEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_transition_none.svg":
/*!************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_transition_none.svg ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9ub25lPC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDEuMDAwMDAwLCAtMTUwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxNy4wMDAwMDAsIDUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCA5OC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBmaWxsPSIjNkE2QTZBIiB4PSIwIiB5PSIwIiB3aWR0aD0iOTIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./jimu-ui/advanced/lib/assets/icon_animation_transition_push.svg":
/*!************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/assets/icon_animation_transition_push.svg ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTJweCIgaGVpZ2h0PSI3MnB4IiB2aWV3Qm94PSIwIDAgOTIgNzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9wdXNoPC90aXRsZT4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NDEuMDAwMDAwLCAtMjcwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxNy4wMDAwMDAsIDUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMTguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkyIiBoZWlnaHQ9IjcyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkyLDAgTDkyLDcyIEwwLDcyIEwwLDAgTDkyLDAgWiBNOTEsMzcgTDEsMzcgTDEsNzEgTDkxLDcxIEw5MSwzNyBaIE00Niw0NCBMNTYsNTQgTDUwLjE2NjY2NjcsNTQgTDUwLjE2NjY2NjcsNjQgTDQxLjgzMzMzMzMsNjQgTDQxLjgzMzMzMzMsNTQgTDM2LDU0IEw0Niw0NCBaIiBmaWxsPSIjNkE2QTZBIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

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
/*!*******************************************************!*\
  !*** ./jimu-ui/advanced/style-setting-components.tsx ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationSettingComponent: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.AnimationSettingComponent),
/* harmony export */   BackgroundSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.BackgroundSetting),
/* harmony export */   BorderRadiusSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.BorderRadiusSetting),
/* harmony export */   BorderSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.BorderSetting),
/* harmony export */   BoxShadowSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.BoxShadowSetting),
/* harmony export */   ButtonStyleSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.ButtonStyleSetting),
/* harmony export */   DateUnitInput: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.DateUnitInput),
/* harmony export */   FontFamilySelector: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.FontFamilySelector),
/* harmony export */   FontFamilyValue: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.FontFamilyValue),
/* harmony export */   FontStyle: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.FontStyle),
/* harmony export */   FourEdges: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.FourEdges),
/* harmony export */   FourSides: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.FourSides),
/* harmony export */   InputRatio: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.InputRatio),
/* harmony export */   InputUnit: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.InputUnit),
/* harmony export */   LineStyleSelector: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.LineStyleSelector),
/* harmony export */   LineStyleTranstions: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.LineStyleTranstions),
/* harmony export */   MouseActionSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.MouseActionSetting),
/* harmony export */   NavIconPicker: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.NavIconPicker),
/* harmony export */   NavStyleSettingByState: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.NavStyleSettingByState),
/* harmony export */   Padding: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.Padding),
/* harmony export */   SizeColorSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.SizeColorSetting),
/* harmony export */   SizeEditor: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.SizeEditor),
/* harmony export */   TextAlignment: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.TextAlignment),
/* harmony export */   TextStyle: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.TextStyle),
/* harmony export */   ThemeBackgroundSection: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.ThemeBackgroundSection),
/* harmony export */   ThemeBorderSection: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.ThemeBorderSection),
/* harmony export */   ThemeBoxShadowSection: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.ThemeBoxShadowSection),
/* harmony export */   TransitionSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.TransitionSetting),
/* harmony export */   UnitSelector: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.UnitSelector),
/* harmony export */   UnitSelectorDateUnits: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.UnitSelectorDateUnits),
/* harmony export */   UnitSelectorDateWeekUnits: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.UnitSelectorDateWeekUnits),
/* harmony export */   UnitSelectorTimeUnits: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.UnitSelectorTimeUnits),
/* harmony export */   _BackgroundSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__._BackgroundSetting),
/* harmony export */   _BorderSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__._BorderSetting),
/* harmony export */   _BoxShadowSetting: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__._BoxShadowSetting),
/* harmony export */   _FourSides: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__._FourSides),
/* harmony export */   _InputRatio: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__._InputRatio),
/* harmony export */   _SizeEditor: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__._SizeEditor),
/* harmony export */   fontValue: () => (/* reexport safe */ _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__.fontValue)
/* harmony export */ });
/* harmony import */ var _lib_style_setting_components_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/style-setting-components/styles */ "./jimu-ui/advanced/lib/style-setting-components/styles/index.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _lib_style_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/style-setting-components */ "./jimu-ui/advanced/lib/style-setting-components/index.tsx");


(0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.registerStyles)('jimu-ui/advanced/style-setting-components/', _lib_style_setting_components_styles__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFFVztBQUVqRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztJQUN0QixNQUFNLEVBQUUsU0FBUyxLQUFnQixLQUFLLEVBQWhCLE1BQU0sVUFBSyxLQUFLLEVBQWhDLGFBQXdCLENBQVE7SUFFdEMsTUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLGtGQUFLLFNBQVMsRUFBRSxPQUFPLElBQU0sTUFBYSxF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Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitEO0FBQ3BCO0FBRTNDLDBEQUFjLENBQUMsNENBQTRDLEVBQUUsaUVBQU0sQ0FBQztBQUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9maWxsZWQvYXBwbGljYXRpb24vY2hlY2suc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2NvbG9ycy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3N0YXIuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9hcnJvdy1kb3duLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctbGVmdC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2Fycm93LXJpZ2h0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctdXAuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9kb3duLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2JvbGQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvaXRhbGljLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2xvY2suc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGxheS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9zdHJpa2UtdGhyb3VnaC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci90ZXh0LWNlbnRlci5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci90ZXh0LWp1c3RpZnkuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdGV4dC1sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL3RleHQtcmlnaHQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdW5kZXJzY29yZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci91bmxvY2suc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29ucy9kYXNoLWRvdC1saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25zL2Rhc2gtZG91YmxlLWRvdC1saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25zL2Rhc2hlZC1saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25zL2RvdHRlZC1saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25zL2RvdWJsZS1saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25zL3NvbGlkLWxpbmUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2xpYi9pY29ucy9uYXZpZ2F0aW9uL2NpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL25hdmlnYXRpb24vY3ViZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL25hdmlnYXRpb24vZG90LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvbmF2aWdhdGlvbi9kb3VibGUtY2lyY2xlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvbmF2aWdhdGlvbi9waWxsLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvdXBwZXJjYXNlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9maWxsZWQvYXBwbGljYXRpb24vY2hlY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jb2xvcnMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2Fycm93LWRvd24udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2Rvd24udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9ib2xkLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvaXRhbGljLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvbG9jay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsYXkudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9zdHJpa2UtdGhyb3VnaC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3RleHQtY2VudGVyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdGV4dC1qdXN0aWZ5LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdGV4dC1sZWZ0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdGV4dC1yaWdodC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3VuZGVyc2NvcmUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci91bmxvY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL3N1Z2dlc3RlZC9pbmZvLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2FuaW1hdGlvbi1pbmZvLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvYW5pbWF0aW9uLXBhcnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvYW5pbWF0aW9uLXBvcHBlci1jb250ZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2FuaW1hdGlvbi1zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2JhY2tncm91bmQtc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9ib3JkZXItcmFkaXVzLXNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvYm9yZGVyLXNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvYm94LXNoYWRvdy1zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2ZvbnQtZmFtaWx5LXNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2ZvdXItZWRnZXMvY29ybmVyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2ZvdXItZWRnZXMvZWRnZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9mb3VyLWVkZ2VzL2VkZ2VzLWJsb2NrLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2ZvdXItZWRnZXMvZWRnZXMtbnVtYmVyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2ZvdXItZWRnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvZm91ci1zaWRlcy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9ob3Zlci1lZmZlY3RzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2lucHV0LXJhdGlvLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL2xpbmUtc3R5bGUtc2VsZWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvbW91c2UtYWN0aW9uLXNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvbmF2aWdhdGlvbi1zdHlsZS9idXR0b24tc3R5bGUtc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9uYXZpZ2F0aW9uLXN0eWxlL2ljb24tc3R5bGUtc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9uYXZpZ2F0aW9uLXN0eWxlL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvbmF2aWdhdGlvbi1zdHlsZS9uYXYtaWNvbi1waWNrZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvbmF2aWdhdGlvbi1zdHlsZS9zdHlsZS1ieS1zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9wYWRkaW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3NpemUtZWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3N0eWxlcy9jb21wb25lbnRzL2JhY2tncm91bmQtc2V0dGluZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3N0eWxlcy9jb21wb25lbnRzL2JvcmRlci1zZXR0aW5nLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvc3R5bGVzL2NvbXBvbmVudHMvYm94LXNoYWRvdy1zZXR0aW5nLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvc3R5bGVzL2NvbXBvbmVudHMvZm91ci1zaWRlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3N0eWxlcy9jb21wb25lbnRzL3NpbmdsZS1jb2xvci1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3N0eWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3RleHQtc3R5bGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy90ZXh0LXN0eWxlL3NpemUtY29sb3Itc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy90ZXh0LXN0eWxlL3RleHQtYWxpZ25tZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3RleHQtc3R5bGUvdGV4dC1mb250LXN0eWxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3RleHQtc3R5bGUvdGV4dC1zdHlsZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy90aGVtZS1hY3RpdmUtZmxhZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy90aGVtZS1iYWNrZ3JvdW5kLXNlY3Rpb24udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvdGhlbWUtYmFja2dyb3VuZC1zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3RoZW1lLWJvcmRlci1zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3RoZW1lLWJvcmRlci1zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3RoZW1lLWJveC1zaGFkb3ctc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy90aGVtZS1ib3gtc2hhZG93LXNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvdHJhbnNpdGlvbi1pbmZvLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvdHJhbnNpdGlvbi1zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3VuaXQtaW5wdXQvYmFzZS11bml0LWlucHV0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3VuaXQtaW5wdXQvZGF0ZS11bml0LWlucHV0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzL3VuaXQtaW5wdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy91bml0LWlucHV0L2lucHV0LXVuaXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMvdW5pdC1pbnB1dC91bml0LXNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX2luX2ZhZGUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fZmxvYXRpbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl9pbl9mbHlpbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl9pbl9ub25lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX2luX3NwaW4uc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fd2lwZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl9pbl96b29tLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX3RyYW5zaXRpb25fY292ZXIuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9jdWJlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX3RyYW5zaXRpb25fZG9vcndheS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2ZhZGUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9ub25lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX3RyYW5zaXRpb25fcHVzaC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9yZXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTYgMi40NDMgNS44NTEgMTQgMCA4LjExNWwxLjQ1LTEuNTM4IDQuMzEgNC4zMzRMMTQuNDYzIDF6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJtNi4wMzYgMTIuMTU3IDguMDEtOC4wMWEuNS41IDAgMSAxIC43MDcuNzA3bC04LjAxIDguMDFhMSAxIDAgMCAxLTEuNDE1IDBMMS4xNDYgOC42ODJhLjUuNSAwIDEgMSAuNzA4LS43MDd6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiI0M1QzVDNVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTMgM2gtMnYyaDJ6bS0zLTF2NGg0VjJ6bS03IDloMnYySDN6bS0xIDN2LTRoNHY0em05LTNoMnYyaC0yem0tMSAzdi00aDR2NHpNMyAzaDJ2Mkgzek0yIDZWMmg0djR6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMC4zNzMgNS41NyA4IC41IDUuNjI1IDUuNTcgMCA2LjIzbDQuMTU4IDMuNzkyTDMuMDU2IDE1LjUgOCAxMi43NzNsNC45NDQgMi43MjctMS4xMDMtNS40NzhMMTYgNi4yMjl6TTggMi44NTdsMS43MDUgMy42NDEgNC4wMDIuNDY5LTIuOTU3IDIuNjk3Ljc4OCAzLjkxOEw4IDExLjYzMWwtMy41MzkgMS45NTEuNzktMy45MTgtMi45NTktMi42OTcgNC4wMDItLjQ2OXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk03LjUgMWMuMjkxIDAgLjUyNy4yMzEuNTI3LjUxNnYxMS41MDhMMTEuNiA5LjUyN2EuNTM1LjUzNSAwIDAgMSAuNzQ2IDAgLjUwOC41MDggMCAwIDEgMCAuNzNMNy41IDE1bC00Ljg0Ni00Ljc0M2EuNTA4LjUwOCAwIDAgMSAwLS43My41MzUuNTM1IDAgMCAxIC43NDYgMGwzLjU3MyAzLjQ5N1YxLjUxNmMwLS4yODUuMjM2LS41MTYuNTI3LS41MTZcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMTUgNy41YS41MjIuNTIyIDAgMCAxLS41MTYuNTI3SDIuOTc2TDYuNDczIDExLjZhLjUzNS41MzUgMCAwIDEgMCAuNzQ2LjUwOC41MDggMCAwIDEtLjczIDBMMSA3LjVsNC43NDMtNC44NDZhLjUwOC41MDggMCAwIDEgLjczIDAgLjUzNS41MzUgMCAwIDEgMCAuNzQ2TDIuOTc2IDYuOTczaDExLjUwOGMuMjg1IDAgLjUxNi4yMzYuNTE2LjUyN1xcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0xIDcuNWMwLS4yOTEuMjMxLS41MjcuNTE2LS41MjdoMTEuNTA4TDkuNTI3IDMuNGEuNTM1LjUzNSAwIDAgMSAwLS43NDYuNTA4LjUwOCAwIDAgMSAuNzMgMEwxNSA3LjVsLTQuNzQzIDQuODQ2YS41MDguNTA4IDAgMCAxLS43MyAwIC41MzUuNTM1IDAgMCAxIDAtLjc0NmwzLjQ5Ny0zLjU3M0gxLjUxNkEuNTIyLjUyMiAwIDAgMSAxIDcuNVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk03LjUgMTVhLjUyMi41MjIgMCAwIDEtLjUyNy0uNTE2VjIuOTc2TDMuNCA2LjQ3M2EuNTM1LjUzNSAwIDAgMS0uNzQ2IDAgLjUwOC41MDggMCAwIDEgMC0uNzNMNy41IDFsNC44NDYgNC43NDNhLjUwOC41MDggMCAwIDEgMCAuNzMuNTM1LjUzNSAwIDAgMS0uNzQ2IDBMOC4wMjcgMi45NzZ2MTEuNTA4QS41MjIuNTIyIDAgMCAxIDcuNSAxNVxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTIuMTQ2IDQuNjUzYS40ODUuNDg1IDAgMCAxIC43MDggMEw4IDEwLjI0bDUuMTQ2LTUuNTg3YS40ODUuNDg1IDAgMCAxIC43MDggMCAuNTM4LjUzOCAwIDAgMSAwIC43MzhsLTUuNSA1Ljk1NmEuNDg1LjQ4NSAwIDAgMS0uNzA4IDBsLTUuNS01Ljk1NmEuNTM4LjUzOCAwIDAgMSAwLS43MzhcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQgM2ExIDEgMCAwIDEgMS0xaDIuNzVhMy4yNSAzLjI1IDAgMCAxIDIuMzMgNS41MTZBMy4yNSAzLjI1IDAgMCAxIDkuNzUgMTRINWExIDEgMCAwIDEtMS0xVjcuNXptMSA0LjVoMi43NWEyLjI1IDIuMjUgMCAwIDAgMC00LjVINXptMCAxVjEzaDQuNzVhMi4yNSAyLjI1IDAgMCAwIDAtNC41aC0yelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNiAyLjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxaC0ybC0yIDEwaDJhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMSAwLTFoMmwyLTEwaC0yYS41LjUgMCAwIDEtLjUtLjVcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTcuNSAwQTMuNSAzLjUgMCAwIDEgMTEgMy41VjZoMWExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAwIDEgMS0xaDFWMy41QTMuNSAzLjUgMCAwIDEgNy41IDBNNSA2aDVWMy41YTIuNSAyLjUgMCAwIDAtMi4zMzYtMi40OTVMNy41IDFhMi41IDIuNSAwIDAgMC0yLjQ5NSAyLjMzNkw1IDMuNXptNiAxSDN2OGg5Vjd6bS0zLjUgNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM1xcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJtMiAxIDEyIDctMTIgN3ptOS45ODMgNi45OTlMMyAyLjcyM3YxMC41NTN6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMSAyLjAyYS4wMi4wMiAwIDAgMC0uMDItLjAySDhhMyAzIDAgMCAwLTIuODI5IDRsMS4wOTcuMDAxQTIgMiAwIDAgMSA4IDNoMnYuNWEuNS41IDAgMCAwIDEgMHpNMTIuNSA3YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEgMC0xem0tMS45IDEuOTk5aDEuMTExYy4xODUuNDU2LjI4OS45NjQuMjg5IDEuNTAxIDAgMS44NjYtMS4yNTIgMy4zOTItMi44MyAzLjQ5NUw5IDE0SDZhMSAxIDAgMCAxLTEtMXYtLjVhLjUuNSAwIDAgMSAxIDB2LjQ5OUw5IDEzYzEuMTA1IDAgMi0xLjEyIDItMi41YTIuOTYgMi45NiAwIDAgMC0uMzExLTEuMzR6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk01LjUgM2EuNS41IDAgMCAwIDAgMWg1YS41LjUgMCAwIDAgMC0xem0wIDZhLjUuNSAwIDAgMCAwIDFoNWEuNS41IDAgMCAwIDAtMXpNMiA2LjVhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMS0uNS0uNW0uNSA1LjVhLjUuNSAwIDAgMCAwIDFoMTFhLjUuNSAwIDAgMCAwLTF6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yLjUgM2EuNS41IDAgMCAwIDAgMWgxMWEuNS41IDAgMCAwIDAtMXptMCA2YS41LjUgMCAwIDAgMCAxaDExYS41LjUgMCAwIDAgMC0xek0yIDYuNWEuNS41IDAgMCAxIC41LS41aDExYS41LjUgMCAwIDEgMCAxaC0xMWEuNS41IDAgMCAxLS41LS41bS41IDUuNWEuNS41IDAgMCAwIDAgMWgxMWEuNS41IDAgMCAwIDAtMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTkuNSAzaC03YS41LjUgMCAwIDAgMCAxaDdhLjUuNSAwIDAgMCAwLTFtLTcgM2g5YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEgMC0xbTYgM2gtNmEuNS41IDAgMCAwIDAgMWg2YS41LjUgMCAwIDAgMC0xbTUgM2gtMTFhLjUuNSAwIDAgMCAwIDFoMTFhLjUuNSAwIDAgMCAwLTFcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTYuNSAzYS41LjUgMCAwIDAgMCAxaDdhLjUuNSAwIDAgMCAwLTF6bTEgNmEuNS41IDAgMCAwIDAgMWg2YS41LjUgMCAwIDAgMC0xek00IDYuNWEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNU0yLjUgMTJhLjUuNSAwIDAgMCAwIDFoMTFhLjUuNSAwIDAgMCAwLTF6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk01IDIuNWEuNS41IDAgMCAwLTEgMFY4YTQgNCAwIDAgMCA4IDBWMi41YS41LjUgMCAwIDAtMSAwVjhhMyAzIDAgMCAxLTYgMHptNyAxMWEuNS41IDAgMCAwLS41LS41aC03YS41LjUgMCAwIDAgMCAxaDdhLjUuNSAwIDAgMCAuNS0uNVxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTYgMy41YTMuNSAzLjUgMCAxIDAtNyAwVjZIM2ExIDEgMCAwIDAtMSAxdjhhMSAxIDAgMCAwIDEgMWg5YTEgMSAwIDAgMCAxLTFWN2ExIDEgMCAwIDAtMS0xaC0yVjMuNWwuMDA1LS4xNjRBMi41IDIuNSAwIDAgMSAxMi41IDFsLjE2NC4wMDVBMi41IDIuNSAwIDAgMSAxNSAzLjVhLjUuNSAwIDAgMCAxIDBNOSA3SDN2OGg5VjdoLTF6bS0xLjUgNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM1xcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTggNS41YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMk02LjUgNy41QS41LjUgMCAwIDEgNyA3aDEuNXY0LjVoMWEuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxIDAtMWgxVjhIN2EuNS41IDAgMCAxLS41LS41XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOCAxNkE4IDggMCAxIDEgOCAwYTggOCAwIDAgMSAwIDE2bTAtMUE3IDcgMCAxIDAgOCAxYTcgNyAwIDAgMCAwIDE0XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQ2IDFcXFwiPjxwYXRoIGZpbGw9XFxcIiNmZmZcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTAgMGg1djFIMHptMTAgMGg1djFoLTV6bTE1IDBoLTV2MWg1em01IDBoNXYxaC01em0xNiAwaC02djFoNnpNNyAwaDF2MUg3em0xMSAwaC0xdjFoMXptOSAwaDF2MWgtMXptMTEgMGgtMXYxaDF6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQ2IDFcXFwiPjxwYXRoIGZpbGw9XFxcIiNmZmZcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUgMEgwdjFoNXptMTMgMGgtNXYxaDV6bTggMGg1djFoLTV6bTIwIDBoLTd2MWg3ek03IDBoMXYxSDd6bTE0IDBoLTF2MWgxem0xMiAwaDF2MWgtMXpNMTEgMGgtMXYxaDF6bTEyIDBoMXYxaC0xem0xNCAwaC0xdjFoMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDYgMVxcXCI+PHBhdGggZmlsbD1cXFwiI2ZmZlxcXCIgZD1cXFwiTTAgMWgzVjBIMHpNNiAxaDNWMEg2ek0xNSAxaC0zVjBoM3pNMTggMWgzVjBoLTN6TTI3IDFoLTNWMGgzek0zMCAxaDNWMGgtM3pNMzkgMWgtM1YwaDN6TTQyIDFoNFYwaC00elxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDYgMVxcXCI+PHBhdGggZmlsbD1cXFwiI2ZmZlxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMCAxaDFWMEgwem02IDBoMVYwSDZ6bTcgMGgtMVYwaDF6bTUgMGgxVjBoLTF6bTcgMGgtMVYwaDF6bTUgMGgxVjBoLTF6bTcgMGgtMVYwaDF6TTMgMWgxVjBIM3ptNyAwSDlWMGgxem01IDBoMVYwaC0xem03IDBoLTFWMGgxem01IDBoMVYwaC0xem03IDBoLTFWMGgxem01IDBoMVYwaC0xem00IDBoLTFWMGgxem0yIDBoMVYwaC0xelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0NiA0XFxcIj48cGF0aCBmaWxsPVxcXCIjZmZmXFxcIiBkPVxcXCJNMCAxaDQ2VjBIMHpNMCA0aDQ2VjNIMHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQ2IDFcXFwiPjxwYXRoIGZpbGw9XFxcIiNmZmZcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQ2IDFIMFYwaDQ2elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMiAxMlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIiBkPVxcXCJNNiAwYTYgNiAwIDEgMSAwIDEyQTYgNiAwIDAgMSA2IDBtMCAyYTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwibm9uemVyb1xcXCIgZD1cXFwibTEwIDAgMTAgMTAtMTAgMTBMMCAxMHpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDYgNlxcXCI+PGNpcmNsZSBjeD1cXFwiMTEwNFxcXCIgY3k9XFxcIjEwNDlcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwibm9uemVyb1xcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTExMDEgLTEwNDYpXFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDIwIDIwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcIm5vbnplcm9cXFwiIGQ9XFxcIk0xMCAwYzUuNTIzIDAgMTAgNC40NzcgMTAgMTBzLTQuNDc3IDEwLTEwIDEwUzAgMTUuNTIzIDAgMTAgNC40NzcgMCAxMCAwbTAgMmE4IDggMCAxIDAgMCAxNiA4IDggMCAwIDAgMC0xNm0wIDJhNiA2IDAgMSAxIDAgMTIgNiA2IDAgMCAxIDAtMTJcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDggNFxcXCI+PHJlY3Qgd2lkdGg9XFxcIjhcXFwiIGhlaWdodD1cXFwiNFxcXCIgeD1cXFwiMTEwM1xcXCIgeT1cXFwiMTEyM1xcXCIgZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIiByeD1cXFwiMlxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTExMDMgLTExMjMpXFxcIj48L3JlY3Q+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMiAxMlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJub256ZXJvXFxcIiBkPVxcXCJtNi44MjguNTM1IDQuOTY2IDExLjAxQS4zMjMuMzIzIDAgMCAxIDExLjUgMTJhLjc3Ni43NzYgMCAwIDEtLjcwNy0uNDU1TDkuMTgyIDhIMi44MThsLTEuNjExIDMuNTQ1QS43NzYuNzc2IDAgMCAxIC41IDEyYS4zMjMuMzIzIDAgMCAxLS4yOTQtLjQ1Nkw1LjE3Mi41MzVhLjkwOS45MDkgMCAwIDEgMS42NTYgME02IDEgMy4yNzIgN2g1LjQ1NnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9maWxsZWQvYXBwbGljYXRpb24vY2hlY2suc3ZnJ1xuXG5leHBvcnQgY29uc3QgQ2hlY2tGaWxsZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrLnN2ZydcblxuZXhwb3J0IGNvbnN0IENoZWNrT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2NvbG9ycy5zdmcnXG5cbmV4cG9ydCBjb25zdCBDb2xvcnNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctZG93bi5zdmcnXG5cbmV4cG9ydCBjb25zdCBBcnJvd0Rvd25PdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvZG93bi5zdmcnXG5cbmV4cG9ydCBjb25zdCBEb3duT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9ib2xkLnN2ZydcblxuZXhwb3J0IGNvbnN0IEJvbGRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2l0YWxpYy5zdmcnXG5cbmV4cG9ydCBjb25zdCBJdGFsaWNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2xvY2suc3ZnJ1xuXG5leHBvcnQgY29uc3QgTG9ja091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGxheS5zdmcnXG5cbmV4cG9ydCBjb25zdCBQbGF5T3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9zdHJpa2UtdGhyb3VnaC5zdmcnXG5cbmV4cG9ydCBjb25zdCBTdHJpa2VUaHJvdWdoT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci90ZXh0LWNlbnRlci5zdmcnXG5cbmV4cG9ydCBjb25zdCBUZXh0Q2VudGVyT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci90ZXh0LWp1c3RpZnkuc3ZnJ1xuXG5leHBvcnQgY29uc3QgVGV4dEp1c3RpZnlPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3RleHQtbGVmdC5zdmcnXG5cbmV4cG9ydCBjb25zdCBUZXh0TGVmdE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdGV4dC1yaWdodC5zdmcnXG5cbmV4cG9ydCBjb25zdCBUZXh0UmlnaHRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3VuZGVyc2NvcmUuc3ZnJ1xuXG5leHBvcnQgY29uc3QgVW5kZXJzY29yZU91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdW5sb2NrLnN2ZydcblxuZXhwb3J0IGNvbnN0IFVubG9ja091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby5zdmcnXG5cbmV4cG9ydCBjb25zdCBJbmZvT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBBbmltYXRpb25NZXRhSW5mbyxcbiAgQW5pbWF0aW9uVHlwZSxcbiAgQW5pbWF0aW9uVHJpZ2dlclR5cGUsXG4gIEFuaW1hdGlvbkRpcmVjdGlvblxufSBmcm9tICdqaW11LWNvcmUnXG5cbmNvbnN0IG5vbmVJY29uID0gcmVxdWlyZSgnamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX2luX25vbmUuc3ZnJylcbmNvbnN0IGZhZGVJY29uID0gcmVxdWlyZSgnamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX2luX2ZhZGUuc3ZnJylcbmNvbnN0IGZsb2F0aW5JY29uID0gcmVxdWlyZSgnamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX2luX2Zsb2F0aW4uc3ZnJylcbmNvbnN0IGZseWluSWNvbiA9IHJlcXVpcmUoJ2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl9pbl9mbHlpbi5zdmcnKVxuY29uc3Qgc3Bpbkljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fc3Bpbi5zdmcnKVxuY29uc3Qgd2lwZUljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fd2lwZS5zdmcnKVxuY29uc3Qgem9vbUljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fem9vbS5zdmcnKVxuXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uSW5mb3M6IEFuaW1hdGlvbk1ldGFJbmZvW10gPSBbXG4gIHtcbiAgICBpY29uOiBub25lSWNvbixcbiAgICB0eXBlOiBBbmltYXRpb25UeXBlLk5vbmVcbiAgfSxcbiAge1xuICAgIHR5cGU6IEFuaW1hdGlvblR5cGUuRmFkZUluLFxuICAgIGljb246IGZhZGVJY29uLFxuICAgIHN1cHBvcnRlZFRyaWdnZXJzOiBbQW5pbWF0aW9uVHJpZ2dlclR5cGUuU2Nyb2xsSW50b1ZpZXddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBBbmltYXRpb25UeXBlLkZsb2F0SW4sXG4gICAgaWNvbjogZmxvYXRpbkljb24sXG4gICAgc3VwcG9ydGVkVHJpZ2dlcnM6IFtBbmltYXRpb25UcmlnZ2VyVHlwZS5TY3JvbGxJbnRvVmlld10sXG4gICAgc3VwcG9ydGVkRGlyZWN0aW9uczogW1xuICAgICAgQW5pbWF0aW9uRGlyZWN0aW9uLlRvcCxcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5Cb3R0b20sXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uTGVmdCxcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5SaWdodFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHR5cGU6IEFuaW1hdGlvblR5cGUuRmx5SW4sXG4gICAgaWNvbjogZmx5aW5JY29uLFxuICAgIHN1cHBvcnRlZFRyaWdnZXJzOiBbQW5pbWF0aW9uVHJpZ2dlclR5cGUuU2Nyb2xsSW50b1ZpZXddLFxuICAgIHN1cHBvcnRlZERpcmVjdGlvbnM6IFtcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5Ub3AsXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uQm90dG9tLFxuICAgICAgQW5pbWF0aW9uRGlyZWN0aW9uLkxlZnQsXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uUmlnaHRcbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBBbmltYXRpb25UeXBlLlNwaW5JbixcbiAgICBpY29uOiBzcGluSWNvbixcbiAgICBzdXBwb3J0ZWRUcmlnZ2VyczogW0FuaW1hdGlvblRyaWdnZXJUeXBlLlNjcm9sbEludG9WaWV3XVxuICB9LFxuICB7XG4gICAgdHlwZTogQW5pbWF0aW9uVHlwZS5XaXBlSW4sXG4gICAgaWNvbjogd2lwZUljb24sXG4gICAgc3VwcG9ydGVkVHJpZ2dlcnM6IFtBbmltYXRpb25UcmlnZ2VyVHlwZS5TY3JvbGxJbnRvVmlld10sXG4gICAgc3VwcG9ydGVkRGlyZWN0aW9uczogW1xuICAgICAgQW5pbWF0aW9uRGlyZWN0aW9uLlRvcCxcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5Cb3R0b20sXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uTGVmdCxcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5SaWdodFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHR5cGU6IEFuaW1hdGlvblR5cGUuWm9vbUluLFxuICAgIGljb246IHpvb21JY29uLFxuICAgIHN1cHBvcnRlZFRyaWdnZXJzOiBbQW5pbWF0aW9uVHJpZ2dlclR5cGUuU2Nyb2xsSW50b1ZpZXddXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IG9uZUJ5T25lQW5pbWF0aW9uSW5mb3M6IEFuaW1hdGlvbk1ldGFJbmZvW10gPSBbXG4gIHtcbiAgICBpY29uOiBub25lSWNvbixcbiAgICB0eXBlOiBBbmltYXRpb25UeXBlLk5vbmVcbiAgfSxcbiAge1xuICAgIGljb246IGZhZGVJY29uLFxuICAgIHR5cGU6IEFuaW1hdGlvblR5cGUuRmFkZUluXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmbG9hdGluSWNvbixcbiAgICB0eXBlOiBBbmltYXRpb25UeXBlLkZsb2F0SW4sXG4gICAgc3VwcG9ydGVkRGlyZWN0aW9uczogW1xuICAgICAgQW5pbWF0aW9uRGlyZWN0aW9uLlRvcCxcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5Cb3R0b20sXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uTGVmdCxcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5SaWdodFxuICAgIF1cbiAgfSxcbiAge1xuICAgIGljb246IHdpcGVJY29uLFxuICAgIHR5cGU6IEFuaW1hdGlvblR5cGUuV2lwZUluLFxuICAgIHN1cHBvcnRlZERpcmVjdGlvbnM6IFtcbiAgICAgIEFuaW1hdGlvbkRpcmVjdGlvbi5Ub3AsXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uQm90dG9tLFxuICAgICAgQW5pbWF0aW9uRGlyZWN0aW9uLkxlZnQsXG4gICAgICBBbmltYXRpb25EaXJlY3Rpb24uUmlnaHRcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpY29uOiB6b29tSWNvbixcbiAgICB0eXBlOiBBbmltYXRpb25UeXBlLlpvb21JblxuICB9XG5dXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIFJlYWN0LFxuICBJbW11dGFibGUsXG4gIGpzeCxcbiAgY3NzLFxuICB0eXBlIEltbXV0YWJsZU9iamVjdCxcbiAgY2xhc3NOYW1lcyxcbiAgdHlwZSBBbmltYXRpb25NZXRhSW5mbyxcbiAgdHlwZSBBbmltYXRpb25TZXR0aW5nLFxuICBBbmltYXRpb25EaXJlY3Rpb24sXG4gIEFuaW1hdGlvblR5cGUsXG4gIEFuaW1hdGlvbkVmZmVjdFR5cGUsXG4gIEFuaW1hdGlvblN0YXJ0TW9kZSxcbiAgUGFyZW50QW5pbWF0aW9uTW9kZVxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBJY29uLCBTZWxlY3QsIEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHVwSWNvbiBmcm9tICdqaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9hcnJvdy11cC5zdmcnXG5pbXBvcnQgZG93bkljb24gZnJvbSAnamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctZG93bi5zdmcnXG5pbXBvcnQgbGVmdEljb24gZnJvbSAnamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctbGVmdC5zdmcnXG5pbXBvcnQgcmlnaHRJY29uIGZyb20gJ2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2Fycm93LXJpZ2h0LnN2ZydcbmltcG9ydCBhbmltYXRpb25JY29uIGZyb20gJ2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3N0YXIuc3ZnJ1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICBlZmZlY3RTZXR0aW5nOiBBbmltYXRpb25TZXR0aW5nXG4gIG1ldGFJbmZvczogQW5pbWF0aW9uTWV0YUluZm9bXVxuICBvblNldHRpbmdDaGFuZ2U6IChzZXR0aW5nOiBBbmltYXRpb25TZXR0aW5nKSA9PiB2b2lkXG4gIGlzT25lQnlPbmU/OiBib29sZWFuXG4gIGlzUm9vdD86IGJvb2xlYW5cbiAgcHJldmlld0VuYWJsZWQ/OiBib29sZWFuXG4gIG9uUHJldmlld0NsaWNrZWQ/OiAoKSA9PiB2b2lkXG4gIGZvcm1hdE1lc3NhZ2U6IChpZDogc3RyaW5nKSA9PiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblBhcnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzPiB7XG4gIG9uV2lkZ2V0RWZmZWN0VHlwZUNoYW5nZWQgPSAoZSwgdmFsdWUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3Qgc2V0dGluZyA9IEltbXV0YWJsZSh0aGlzLnByb3BzLmVmZmVjdFNldHRpbmcgfHwge30pIGFzIEltbXV0YWJsZU9iamVjdDxBbmltYXRpb25TZXR0aW5nPlxuICAgIGlmIChzZXR0aW5nPy50eXBlID09PSB2YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblByZXZpZXdDbGlja2VkKClcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaXNPbmVCeU9uZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoc2V0dGluZ1xuICAgICAgICAuc2V0KCd0eXBlJywgdmFsdWUpXG4gICAgICAgIC5zZXRJbihbJ29wdGlvbicsICdkaXJlY3Rpb24nXSwgbnVsbClcbiAgICAgICAgLnNldEluKFsnb3B0aW9uJywgJ3N0YXJ0J10sIEFuaW1hdGlvblN0YXJ0TW9kZS5BZnRlclByZXZpb3VzKVxuICAgICAgICAuc2V0SW4oWydvcHRpb24nLCAncGFyZW50TW9kZSddLCBQYXJlbnRBbmltYXRpb25Nb2RlLk9uZUJ5T25lKVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZShzZXR0aW5nLnNldCgndHlwZScsIHZhbHVlKS5zZXRJbihbJ29wdGlvbicsICdkaXJlY3Rpb24nXSwgbnVsbCkpXG4gICAgfVxuICB9XG5cbiAgb25EdXJhdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZyA9IEltbXV0YWJsZSh0aGlzLnByb3BzLmVmZmVjdFNldHRpbmcgfHwge30pIGFzIEltbXV0YWJsZU9iamVjdDxBbmltYXRpb25TZXR0aW5nPlxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHNldHRpbmcuc2V0SW4oWydvcHRpb24nLCAnY29uZmlnVHlwZSddLCBlLnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICBvblN0YXJ0TW9kZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZyA9IEltbXV0YWJsZSh0aGlzLnByb3BzLmVmZmVjdFNldHRpbmcgfHwge30pIGFzIEltbXV0YWJsZU9iamVjdDxBbmltYXRpb25TZXR0aW5nPlxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHNldHRpbmcuc2V0SW4oWydvcHRpb24nLCAnc3RhcnQnXSwgZS50YXJnZXQudmFsdWUpKVxuICB9XG5cbiAgb25QYXJlbnRNb2RlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZXR0aW5nID0gSW1tdXRhYmxlKHRoaXMucHJvcHMuZWZmZWN0U2V0dGluZyB8fCB7fSkgYXMgSW1tdXRhYmxlT2JqZWN0PEFuaW1hdGlvblNldHRpbmc+XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoc2V0dGluZy5zZXRJbihbJ29wdGlvbicsICdwYXJlbnRNb2RlJ10sIGUudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIG9uV2lkZ2V0RWZmZWN0RGlyZWN0aW9uQ2hhbmdlZCA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZyA9IEltbXV0YWJsZSh0aGlzLnByb3BzLmVmZmVjdFNldHRpbmcgfHwge30pIGFzIEltbXV0YWJsZU9iamVjdDxBbmltYXRpb25TZXR0aW5nPlxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHNldHRpbmcuc2V0SW4oWydvcHRpb24nLCAnZGlyZWN0aW9uJ10sIGUudGFyZ2V0LnZhbHVlKSlcbiAgfVxuXG4gIGNyZWF0ZUFuaW1hdGlvbkNhcmQgKG1ldGFJbmZvOiBBbmltYXRpb25NZXRhSW5mbywgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHsgZWZmZWN0U2V0dGluZyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGVmZmVjdFR5cGUgPSBlZmZlY3RTZXR0aW5nPy50eXBlIHx8IEFuaW1hdGlvblR5cGUuTm9uZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBjYXJkLWl0ZW0nLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IG1ldGFJbmZvLnR5cGUgPT09IGVmZmVjdFR5cGVcbiAgICAgICAgfSl9XG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uXG4gICAgICAgICAgcm9sZT0nb3B0aW9uJ1xuICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZShtZXRhSW5mby50eXBlLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e21ldGFJbmZvLnR5cGUgPT09IGVmZmVjdFR5cGV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBjYXJkLWNvbnRlbnQgYm9yZGVyLTAnXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHsgdGhpcy5vbldpZGdldEVmZmVjdFR5cGVDaGFuZ2VkKGUsIG1ldGFJbmZvLnR5cGUpIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3ctMTAwJyBjdXJyZW50Q29sb3I9e2ZhbHNlfSBpY29uPXttZXRhSW5mby5pY29uIHx8IGFuaW1hdGlvbkljb259IHNpemU9ezcyfSAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtbmFtZSBmbGV4LWdyb3ctMSBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnQgbXQtMSc+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgY2FyZC1uYW1lLWNvbnRlbnQnXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5mb3JtYXRNZXNzYWdlKG1ldGFJbmZvLnR5cGUudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZShtZXRhSW5mby50eXBlLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjaG9vc2VEaXJlY3Rpb25JY29uIChkaXJlY3Rpb246IEFuaW1hdGlvbkRpcmVjdGlvbikge1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEFuaW1hdGlvbkRpcmVjdGlvbi5Cb3R0b206XG4gICAgICAgIHJldHVybiB1cEljb25cbiAgICAgIGNhc2UgQW5pbWF0aW9uRGlyZWN0aW9uLkxlZnQ6XG4gICAgICAgIHJldHVybiByaWdodEljb25cbiAgICAgIGNhc2UgQW5pbWF0aW9uRGlyZWN0aW9uLlJpZ2h0OlxuICAgICAgICByZXR1cm4gbGVmdEljb25cbiAgICAgIGNhc2UgQW5pbWF0aW9uRGlyZWN0aW9uLlRvcDpcbiAgICAgICAgcmV0dXJuIGRvd25JY29uXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUVmZmVjdERpcmVjdGlvbkNob29zZXIgKGRpcmVjdGlvbnM6IEFuaW1hdGlvbkRpcmVjdGlvbltdKSB7XG4gICAgY29uc3QgeyBlZmZlY3RTZXR0aW5nIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXJlY3Rpb24tc2VsZWN0IHB4LTQgbWItNCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZmZlY3QtdGl0bGUgbWItMic+e3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZSgnZGlyZWN0aW9uJyl9PC9kaXY+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e0FuaW1hdGlvbkRpcmVjdGlvbi5Ub3B9XG4gICAgICAgICAgdmFsdWU9e2VmZmVjdFNldHRpbmc/Lm9wdGlvbj8uZGlyZWN0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0RWZmZWN0RGlyZWN0aW9uQ2hhbmdlZH1cbiAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmZvcm1hdE1lc3NhZ2UoJ2RpcmVjdGlvbicpfVxuICAgICAgICA+XG4gICAgICAgICAge2RpcmVjdGlvbnMubWFwKChkaXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkaXJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J214LTEnIGljb249e3RoaXMuY2hvb3NlRGlyZWN0aW9uSWNvbihkaXIpfSBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZShkaXIudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBnZXRTdHlsZSAoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5hbmltYXRpb24tY2FyZHMge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXJvdy1nYXA6IDEycHg7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LTUwMCk7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XG5cbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC0yMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5zZWxlY3RlZCAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS02MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtbmFtZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5MHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTgwMCk7XG4gICAgICAgICAgLmNhcmQtbmFtZS1jb250ZW50IHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0TWVzc2FnZSwgZWZmZWN0U2V0dGluZywgbWV0YUluZm9zLCBpc1Jvb3QsIGlzT25lQnlPbmUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB1c2VkRWZmZWN0SW5mbyA9IG1ldGFJbmZvcy5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IGVmZmVjdFNldHRpbmc/LnR5cGUpXG4gICAgY29uc3QgaGFzRWZmZWN0ID0gZWZmZWN0U2V0dGluZyAhPSBudWxsICYmIGVmZmVjdFNldHRpbmcudHlwZSAhPT0gQW5pbWF0aW9uVHlwZS5Ob25lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2JnLWxpZ2h0LTMwMCBib3JkZXItY29sb3ItZ3JheS00MDAnXG4gICAgICAgIGNzcz17dGhpcy5nZXRTdHlsZSgpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAgYW5pbWF0aW9uLXBhbmVsLWJvcmRlcic+XG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIHJvbGU9J2xpc3Rib3gnIGNsYXNzTmFtZT0nYW5pbWF0aW9uLWNhcmRzJz5cbiAgICAgICAgICAgIHttZXRhSW5mb3MubWFwKChpbmZvLCBpbmRleCkgPT4gdGhpcy5jcmVhdGVBbmltYXRpb25DYXJkKGluZm8sIGluZGV4KSl9XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICB7dXNlZEVmZmVjdEluZm8gJiYgdXNlZEVmZmVjdEluZm8udHlwZSAhPT0gQW5pbWF0aW9uVHlwZS5Ob25lICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VwYXJhdG9yJyAvPn1cbiAgICAgICAgICB7dXNlZEVmZmVjdEluZm8gJiYgdXNlZEVmZmVjdEluZm8udHlwZSAhPT0gQW5pbWF0aW9uVHlwZS5Ob25lICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHVyYXRpb24taW5wdXQgcHgtNCBtYi00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VmZmVjdC10aXRsZSBtYi0yJz57dGhpcy5wcm9wcy5mb3JtYXRNZXNzYWdlKCdlZmZlY3QnKX08L2Rpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZmZlY3RTZXR0aW5nPy5vcHRpb24/LmNvbmZpZ1R5cGUgPz8gQW5pbWF0aW9uRWZmZWN0VHlwZS5EZWZhdWx0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRHVyYXRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5mb3JtYXRNZXNzYWdlKCdlZmZlY3QnKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhBbmltYXRpb25FZmZlY3RUeXBlKS5tYXAoKFtrZXksIHR5cGVdLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17dHlwZX0+e2Zvcm1hdE1lc3NhZ2Uoa2V5LnRvTG93ZXJDYXNlKCkpfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICB7dXNlZEVmZmVjdEluZm8/LnN1cHBvcnRlZERpcmVjdGlvbnMgJiZcbiAgICAgICAgICB0aGlzLmNyZWF0ZUVmZmVjdERpcmVjdGlvbkNob29zZXIodXNlZEVmZmVjdEluZm8uc3VwcG9ydGVkRGlyZWN0aW9ucyl9XG4gICAgICAgICAgeyFpc1Jvb3QgJiYgaGFzRWZmZWN0ICYmIGlzT25lQnlPbmUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXJ0LWlucHV0IHB4LTQgbWItNCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlZmZlY3QtdGl0bGUgbWItMic+e3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZSgnc3RhcnQnKX08L2Rpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZmZlY3RTZXR0aW5nPy5vcHRpb24/LnN0YXJ0ID8/IEFuaW1hdGlvblN0YXJ0TW9kZS5XaXRoUHJldmlvdXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TdGFydE1vZGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5mb3JtYXRNZXNzYWdlKCdzdGFydCcpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKEFuaW1hdGlvblN0YXJ0TW9kZSkubWFwKChba2V5LCB0eXBlXSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3R5cGV9Pntmb3JtYXRNZXNzYWdlKGtleS50b0xvd2VyQ2FzZSgpKX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtoYXNFZmZlY3QgJiYgaXNPbmVCeU9uZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhcnQtaW5wdXQgcHgtNCBtYi00Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VmZmVjdC10aXRsZSBtYi0yJz57dGhpcy5wcm9wcy5mb3JtYXRNZXNzYWdlKCdwbGF5QW5pbWF0aW9uJyl9PC9kaXY+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWZmZWN0U2V0dGluZz8ub3B0aW9uPy5wYXJlbnRNb2RlID8/IFBhcmVudEFuaW1hdGlvbk1vZGUuT25lQnlPbmV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QYXJlbnRNb2RlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZSgncGxheUFuaW1hdGlvbicpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKFBhcmVudEFuaW1hdGlvbk1vZGUpLm1hcCgoW2tleSwgdHlwZV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt0eXBlfT57Zm9ybWF0TWVzc2FnZShrZXkudG9Mb3dlckNhc2UoKSl9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsXG4gIFJlYWN0UmVkdXgsXG4gIGpzeCxcbiAgY3NzLFxuICBBbmltYXRpb25QbGF5TW9kZSxcbiAgdHlwZSBBbmltYXRpb25TZXR0aW5nLFxuICB0eXBlIElNU3RhdGUsXG4gIExheW91dEl0ZW1UeXBlXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvZG93bidcbmltcG9ydCB7IENvbGxhcHNlLCBCdXR0b24gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7XG4gIGFuaW1hdGlvbkluZm9zLFxuICBvbmVCeU9uZUFuaW1hdGlvbkluZm9zXG59IGZyb20gJy4vYW5pbWF0aW9uLWluZm8nXG5pbXBvcnQgeyBBbmltYXRpb25QYXJ0IH0gZnJvbSAnLi9hbmltYXRpb24tcGFydCdcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgZWZmZWN0U2V0dGluZzogQW5pbWF0aW9uU2V0dGluZ1xuICBvbmVCeU9uZVNldHRpbmc6IEFuaW1hdGlvblNldHRpbmdcbiAgb25TZXR0aW5nQ2hhbmdlOiAobW9kZTogQW5pbWF0aW9uUGxheU1vZGUsIHNldHRpbmc6IEFuaW1hdGlvblNldHRpbmcpID0+IHZvaWRcbiAgcHJldmlld0VuYWJsZWQ/OiBib29sZWFuXG4gIHN1cHBvcnRPbmVCeU9uZT86IGJvb2xlYW5cbiAgc3VwcG9ydEFzT25lPzogYm9vbGVhblxuICBpc1Jvb3Q/OiBib29sZWFuXG4gIG9uUHJldmlld0NsaWNrZWQ/OiAobW9kZTogQW5pbWF0aW9uUGxheU1vZGUpID0+IHZvaWRcbiAgZm9ybWF0TWVzc2FnZTogKGlkOiBzdHJpbmcpID0+IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBhc09uZU9wZW5lZDogYm9vbGVhblxuICBvbmVCeU9uZU9wZW5lZDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3RhdGVUb1Byb3BzIHtcbiAgc2VsZWN0ZWRXaWRnZXRMYWJlbDogc3RyaW5nXG59XG5cbmNsYXNzIEFuaW1hdGlvblBvcHBlckNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzICYgU3RhdGVUb1Byb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXNPbmVPcGVuZWQ6IHRydWUsXG4gICAgICBvbmVCeU9uZU9wZW5lZDogISh0aGlzLnByb3BzLnN1cHBvcnRBc09uZSAmJiB0aGlzLnByb3BzLnN1cHBvcnRPbmVCeU9uZSlcbiAgICB9XG4gIH1cblxuICBvbkFzT25lU2V0dGluZ0NoYW5nZSA9IChzZXR0aW5nOiBBbmltYXRpb25TZXR0aW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoQW5pbWF0aW9uUGxheU1vZGUuQXNPbmUsIHNldHRpbmcpXG4gIH1cblxuICBvbk9uZUJ5T25lU2V0dGluZ0NoYW5nZSA9IChzZXR0aW5nOiBBbmltYXRpb25TZXR0aW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoQW5pbWF0aW9uUGxheU1vZGUuT25lQnlPbmUsIHNldHRpbmcpXG4gIH1cblxuICBwcmV2aWV3QXNPbmUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblByZXZpZXdDbGlja2VkKEFuaW1hdGlvblBsYXlNb2RlLkFzT25lKVxuICB9XG5cbiAgcHJldmlld09uZUJ5T25lID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25QcmV2aWV3Q2xpY2tlZChBbmltYXRpb25QbGF5TW9kZS5PbmVCeU9uZSlcbiAgfVxuXG4gIHRvZ2dsZUFzT25lT3BlbmVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYXNPbmVPcGVuZWQ6ICF0aGlzLnN0YXRlLmFzT25lT3BlbmVkXG4gICAgfSlcbiAgfVxuXG4gIHRvZ2dsZU9uZUJ5T25lT3BlbmVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgb25lQnlPbmVPcGVuZWQ6ICF0aGlzLnN0YXRlLm9uZUJ5T25lT3BlbmVkXG4gICAgfSlcbiAgfVxuXG4gIGdldFN0eWxlICgpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnN1Yi1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAxcmVtO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UsIHN1cHBvcnRPbmVCeU9uZSwgc3VwcG9ydEFzT25lLCBlZmZlY3RTZXR0aW5nLCBvbmVCeU9uZVNldHRpbmcgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjYW5Ub2dnbGUgPSBzdXBwb3J0T25lQnlPbmUgJiYgc3VwcG9ydEFzT25lXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2JnLWxpZ2h0LTMwMCBib3JkZXItY29sb3ItZ3JheS00MDAnIGNzcz17dGhpcy5nZXRTdHlsZSgpfVxuICAgICAgPlxuICAgICAgICB7c3VwcG9ydEFzT25lICYmIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT0ncC0wJyB0aXRsZT17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBzdWItaGVhZGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgdGl0bGUnIHRpdGxlPXtgJHtzdXBwb3J0T25lQnlPbmUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFdpZGdldExhYmVsfWB9IGNzcz17Y3NzYG1heC13aWR0aDogODAlO2B9PlxuICAgICAgICAgICAgICAgIHtzdXBwb3J0T25lQnlPbmUgJiYgdGhpcy5wcm9wcy5zZWxlY3RlZFdpZGdldExhYmVsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2NhblRvZ2dsZSAmJiA8QnV0dG9uIHNpemU9J3NtJyB0eXBlPSd0ZXJ0aWFyeScgaWNvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFzT25lT3BlbmVkfT5cbiAgICAgICAgICAgICAgICA8RG93bk91dGxpbmVkIHNpemU9J3MnIHJvdGF0ZT17dGhpcy5zdGF0ZS5hc09uZU9wZW5lZCA/IDE4MCA6IDB9Lz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5hc09uZU9wZW5lZH0gY2xhc3NOYW1lPSdtdC0wJz5cbiAgICAgICAgICAgIDxBbmltYXRpb25QYXJ0XG4gICAgICAgICAgICAgIGVmZmVjdFNldHRpbmc9e2VmZmVjdFNldHRpbmd9XG4gICAgICAgICAgICAgIG1ldGFJbmZvcz17YW5pbWF0aW9uSW5mb3N9XG4gICAgICAgICAgICAgIG9uU2V0dGluZ0NoYW5nZT17dGhpcy5vbkFzT25lU2V0dGluZ0NoYW5nZX1cbiAgICAgICAgICAgICAgcHJldmlld0VuYWJsZWRcbiAgICAgICAgICAgICAgb25QcmV2aWV3Q2xpY2tlZD17dGhpcy5wcmV2aWV3QXNPbmV9XG4gICAgICAgICAgICAgIGZvcm1hdE1lc3NhZ2U9e2Zvcm1hdE1lc3NhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+fVxuICAgICAgICB7c3VwcG9ydE9uZUJ5T25lICYmIDxTZXR0aW5nU2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT0ncC0wJyB0aXRsZT17XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBzdWItaGVhZGVyJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgdGl0bGUnIHRpdGxlPXtgJHtzdXBwb3J0QXNPbmUgJiYgZm9ybWF0TWVzc2FnZSgnd2lkZ2V0QnlXaWRnZXQnKX1gfSBjc3M9e2Nzc2BtYXgtd2lkdGg6IDgwJTtgfT5cbiAgICAgICAgICAgICAgICB7c3VwcG9ydEFzT25lICYmIGZvcm1hdE1lc3NhZ2UoJ3dpZGdldEJ5V2lkZ2V0Jyl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Y2FuVG9nZ2xlICYmIDxCdXR0b24gc2l6ZT0nc20nIHR5cGU9J3RlcnRpYXJ5JyBpY29uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlT25lQnlPbmVPcGVuZWR9PlxuICAgICAgICAgICAgICAgIDxEb3duT3V0bGluZWQgc2l6ZT0ncycgcm90YXRlPXt0aGlzLnN0YXRlLm9uZUJ5T25lT3BlbmVkID8gMTgwIDogMH0vPlxuICAgICAgICAgICAgICA8L0J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXt0aGlzLnN0YXRlLm9uZUJ5T25lT3BlbmVkfSBjbGFzc05hbWU9J210LTAnPlxuICAgICAgICAgICAgPEFuaW1hdGlvblBhcnRcbiAgICAgICAgICAgICAgZWZmZWN0U2V0dGluZz17b25lQnlPbmVTZXR0aW5nfVxuICAgICAgICAgICAgICBtZXRhSW5mb3M9e29uZUJ5T25lQW5pbWF0aW9uSW5mb3N9XG4gICAgICAgICAgICAgIG9uU2V0dGluZ0NoYW5nZT17dGhpcy5vbk9uZUJ5T25lU2V0dGluZ0NoYW5nZX1cbiAgICAgICAgICAgICAgcHJldmlld0VuYWJsZWRcbiAgICAgICAgICAgICAgaXNPbmVCeU9uZVxuICAgICAgICAgICAgICBpc1Jvb3Q9e3RoaXMucHJvcHMuaXNSb290fVxuICAgICAgICAgICAgICBvblByZXZpZXdDbGlja2VkPXt0aGlzLnByZXZpZXdPbmVCeU9uZX1cbiAgICAgICAgICAgICAgZm9ybWF0TWVzc2FnZT17Zm9ybWF0TWVzc2FnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0ZWRXaWRnZXRMYWJlbCAoc3RhdGU6IElNU3RhdGUpOiBTdGF0ZVRvUHJvcHMge1xuICBjb25zdCBhcHBTdGF0ZSA9IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGFwcFN0YXRlPy5hcHBDb25maWdcbiAgY29uc3Qgc2VsZWN0aW9uID0gYXBwU3RhdGU/LmFwcFJ1bnRpbWVJbmZvPy5zZWxlY3Rpb25cblxuICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgY29uc3QgeyBsYXlvdXRJZCwgbGF5b3V0SXRlbUlkIH0gPSBzZWxlY3Rpb25cbiAgICBjb25zdCBsYXlvdXRJdGVtID0gYXBwQ29uZmlnLmxheW91dHM/LltsYXlvdXRJZF0/LmNvbnRlbnQ/LltsYXlvdXRJdGVtSWRdXG4gICAgaWYgKGxheW91dEl0ZW0/LnR5cGUgPT09IExheW91dEl0ZW1UeXBlLldpZGdldCkge1xuICAgICAgY29uc3Qgd2lkZ2V0ID0gYXBwQ29uZmlnLndpZGdldHNbbGF5b3V0SXRlbS53aWRnZXRJZF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkV2lkZ2V0TGFiZWw6IHdpZGdldD8ubGFiZWwgPz8gJydcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGlhbG9nSWQgPSBhcHBTdGF0ZT8uYXBwUnVudGltZUluZm8/LmN1cnJlbnREaWFsb2dJZFxuICAgIGlmIChkaWFsb2dJZCAmJiBhcHBDb25maWcuZGlhbG9nc1tkaWFsb2dJZF0pIHtcbiAgICAgIGNvbnN0IGRpYWxvZyA9IGFwcENvbmZpZy5kaWFsb2dzW2RpYWxvZ0lkXVxuICAgICAgcmV0dXJuIHsgc2VsZWN0ZWRXaWRnZXRMYWJlbDogZGlhbG9nLmxhYmVsIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RlZFdpZGdldExhYmVsOiAnJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXguY29ubmVjdDxTdGF0ZVRvUHJvcHMsIHVua25vd24sIE93blByb3BzPihnZXRTZWxlY3RlZFdpZGdldExhYmVsKShcbiAgQW5pbWF0aW9uUG9wcGVyQ29udGVudFxuKVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBSZWFjdCxcbiAganN4LFxuICBjc3MsXG4gIHR5cGUgQW5pbWF0aW9uUGxheU1vZGUsXG4gIHR5cGUgQW5pbWF0aW9uU2V0dGluZyxcbiAgY2xhc3NOYW1lc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBhbmltYXRpb25JbmZvcyxcbiAgb25lQnlPbmVBbmltYXRpb25JbmZvc1xufSBmcm9tICcuL2FuaW1hdGlvbi1pbmZvJ1xuaW1wb3J0IHsgU2lkZVBvcHBlciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUb29sdGlwIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBBbmltYXRpb25Qb3BwZXJDb250ZW50IGZyb20gJy4vYW5pbWF0aW9uLXBvcHBlci1jb250ZW50J1xuaW1wb3J0IHsgUGxheU91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGxheSdcbmltcG9ydCB7IEluZm9PdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvc3VnZ2VzdGVkL2luZm8nXG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIGNvbnRlbnRJZDogc3RyaW5nIC8vIHBhZ2UgaWQgb3Igd2luZG93IGlkXG4gIGVmZmVjdFNldHRpbmc6IEFuaW1hdGlvblNldHRpbmdcbiAgb25lQnlPbmVTZXR0aW5nOiBBbmltYXRpb25TZXR0aW5nXG4gIGlzUm9vdD86IGJvb2xlYW5cbiAgc3VwcG9ydEFzT25lPzogYm9vbGVhblxuICBzdXBwb3J0T25lQnlPbmU/OiBib29sZWFuXG4gIHByZXZpZXdFbmFibGVkPzogYm9vbGVhblxuICBvblNldHRpbmdDaGFuZ2U6IChtb2RlOiBBbmltYXRpb25QbGF5TW9kZSwgc2V0dGluZzogQW5pbWF0aW9uU2V0dGluZykgPT4gdm9pZFxuICBvblByZXZpZXdDbGlja2VkPzogKG1vZGU6IEFuaW1hdGlvblBsYXlNb2RlKSA9PiB2b2lkXG4gIGZvcm1hdE1lc3NhZ2U6IChpZDogc3RyaW5nKSA9PiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvd1NpZGVQYW5lbDogYm9vbGVhblxufVxuXG5jb25zdCBhbmltYXRpb25JY29uID0gcmVxdWlyZSgnamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX2luX25vbmUuc3ZnJylcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblNldHRpbmdDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzLCBTdGF0ZT4ge1xuICBzaWRlUG9wcGVyVHJpZ2dlciA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxuICBidXR0b25SZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KClcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBQYXJ0aWFsPE93blByb3BzPiA9IHtcbiAgICBvblNldHRpbmdDaGFuZ2U6ICgpID0+IHt9LFxuICAgIHByZXZpZXdFbmFibGVkOiB0cnVlLFxuICAgIHN1cHBvcnRPbmVCeU9uZTogZmFsc2UsXG4gICAgb25QcmV2aWV3Q2xpY2tlZDogKCkgPT4ge30sXG4gICAgZm9ybWF0TWVzc2FnZTogaWQgPT4gaWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93U2lkZVBhbmVsOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBPd25Qcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbnRlbnRJZCAhPT0gcHJldlByb3BzLmNvbnRlbnRJZCAmJiB0aGlzLnN0YXRlLnNob3dTaWRlUGFuZWwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U2lkZVBhbmVsOiBmYWxzZSB9KVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNpZGVQYW5lbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpZGVQYW5lbDogIXRoaXMuc3RhdGUuc2hvd1NpZGVQYW5lbCB9KVxuICB9XG5cbiAgcHJldmlld0FuaW1hdGlvbiA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHRoaXMucHJvcHMub25QcmV2aWV3Q2xpY2tlZChudWxsKVxuICB9XG5cbiAgZ2V0QW5pbUJveFN0eWxlICgpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNzJweDtcblxuICAgICAgLmltZy10aXAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJiwgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtc2libGluZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICYuZmlyc3Qge1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuc2Vjb25kIHtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGlhZy1zZXAge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICB0b3A6IDM2cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC00NWRlZyk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtNTAwKTtcblxuICAgICAgICAgIC5qaW11LXJ0bCAmIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5hbWluLWljb25zICB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMjZweDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAuNXJlbTtcbiAgICAgICAgLmppbXUtaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYW5pbS1sYWJlbHMge1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICAuYW5pbS1sYWJlbCB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIGdldFNpZGVQb3BwZXJTdHlsZSAoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgfVxuICAgICAgLnNpZGUtcG9wcGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstNjAwKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmVmZmVjdC10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTYwMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5zaWRlLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cbiAgICBgXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0U2V0dGluZywgb25lQnlPbmVTZXR0aW5nLCBmb3JtYXRNZXNzYWdlLCBwcmV2aWV3RW5hYmxlZCwgc3VwcG9ydEFzT25lLCBzdXBwb3J0T25lQnlPbmUgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHVzZWRBc09uZUVmZmVjdCA9IGFuaW1hdGlvbkluZm9zLmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gZWZmZWN0U2V0dGluZz8udHlwZSlcbiAgICBjb25zdCB1c2VkT25lQnlPbmVFZmZlY3QgPSBvbmVCeU9uZUFuaW1hdGlvbkluZm9zLmZpbmQoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gb25lQnlPbmVTZXR0aW5nPy50eXBlKVxuICAgIGNvbnN0IGhhc1R3b0VmZmVjdHMgPSBzdXBwb3J0QXNPbmUgJiYgc3VwcG9ydE9uZUJ5T25lXG4gICAgY29uc3QgaWNvblNpemUgPSBoYXNUd29FZmZlY3RzID8gMzIgOiA0OFxuXG4gICAgY29uc3QgYXNPbmVFZmZlY3ROYW1lID0gZWZmZWN0U2V0dGluZz8udHlwZSA/IGZvcm1hdE1lc3NhZ2UoZWZmZWN0U2V0dGluZy50eXBlLnRvTG93ZXJDYXNlKCkpIDogZm9ybWF0TWVzc2FnZSgnbm9uZScpXG4gICAgY29uc3Qgb25lQnlPbmVFZmZlY3ROYW1lID0gb25lQnlPbmVTZXR0aW5nPy50eXBlID8gZm9ybWF0TWVzc2FnZShvbmVCeU9uZVNldHRpbmcudHlwZS50b0xvd2VyQ2FzZSgpKSA6IGZvcm1hdE1lc3NhZ2UoJ25vbmUnKVxuICAgIGxldCBhcmlhTGFiZWwgPSAnJ1xuICAgIGlmIChzdXBwb3J0QXNPbmUpIHtcbiAgICAgIGFyaWFMYWJlbCA9IGFyaWFMYWJlbCArIGFzT25lRWZmZWN0TmFtZVxuICAgIH1cbiAgICBpZiAoaGFzVHdvRWZmZWN0cykge1xuICAgICAgYXJpYUxhYmVsID0gYXJpYUxhYmVsICsgJy8nXG4gICAgfVxuICAgIGlmIChzdXBwb3J0T25lQnlPbmUpIHtcbiAgICAgIGFyaWFMYWJlbCA9IGFyaWFMYWJlbCArIG9uZUJ5T25lRWZmZWN0TmFtZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2FuaW1hLWJveCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInXG4gICAgICAgICAgY3NzPXt0aGlzLmdldEFuaW1Cb3hTdHlsZSgpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctdGlwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItMCdcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2lkZVBhbmVsfVxuICAgICAgICAgICAgdGl0bGU9e2FyaWFMYWJlbH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c3VwcG9ydEFzT25lICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FuaW0taWNvbiBmaXJzdCcsIHsgJ2hhcy1zaWJsaW5nJzogaGFzVHdvRWZmZWN0cyB9KX0+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj17dXNlZEFzT25lRWZmZWN0Py5pY29uIHx8IGFuaW1hdGlvbkljb259IHNpemU9e2ljb25TaXplfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aGFzVHdvRWZmZWN0cyAmJiA8ZGl2IGNsYXNzTmFtZT0nZGlhZy1zZXAnIC8+fVxuICAgICAgICAgICAge3N1cHBvcnRPbmVCeU9uZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhbmltLWljb24gc2Vjb25kJywgeyAnaGFzLXNpYmxpbmcnOiBoYXNUd29FZmZlY3RzIH0pfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXt1c2VkT25lQnlPbmVFZmZlY3Q/Lmljb24gfHwgYW5pbWF0aW9uSWNvbn0gc2l6ZT17aWNvblNpemV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1sLTIgaC0xMDAgZmxleC1ncm93LTEnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW0tbGFiZWxzIGQtZmxleCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltLWxhYmVsJyB0aXRsZT17YCR7YXNPbmVFZmZlY3ROYW1lfSR7aGFzVHdvRWZmZWN0cyA/ICcgLyAnIDogJyd9JHtzdXBwb3J0T25lQnlPbmUgPyBvbmVCeU9uZUVmZmVjdE5hbWUgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICB7c3VwcG9ydEFzT25lICYmIDxzcGFuPnthc09uZUVmZmVjdE5hbWV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICB7aGFzVHdvRWZmZWN0cyAmJiA8c3BhbiBjbGFzc05hbWU9J214LTEnPi88L3NwYW4+fVxuICAgICAgICAgICAgICAgIHtzdXBwb3J0T25lQnlPbmUgJiYgPHNwYW4+e29uZUJ5T25lRWZmZWN0TmFtZX08L3NwYW4+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e2Zvcm1hdE1lc3NhZ2UoJ3Njcm9sbEludG9WaWV3Jyl9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncC0wJ1xuICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGVydGlhcnknXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5mb091dGxpbmVkIHNpemU9J20nLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW1pbi1pY29ucyB3LTEwMCcgcmVmPXt0aGlzLnNpZGVQb3BwZXJUcmlnZ2VyfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdzbScgcmVmPXt0aGlzLmJ1dHRvblJlZn0gb25DbGljaz17dGhpcy50b2dnbGVTaWRlUGFuZWx9IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZScgdGl0bGU9e2Zvcm1hdE1lc3NhZ2UoJ2NoYW5nZScpfT5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0TWVzc2FnZSgnY2hhbmdlJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17Zm9ybWF0TWVzc2FnZSgncHJldmlldycpfSBwbGFjZW1lbnQ9J2JvdHRvbSc+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nZGVmYXVsdCdcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcmV2aWV3RW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJldmlld0FuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGxheU91dGxpbmVkIHNpemU9J3MnIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNpZGVQb3BwZXJcbiAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuc2hvd1NpZGVQYW5lbH1cbiAgICAgICAgICBjc3M9e3RoaXMuZ2V0U2lkZVBvcHBlclN0eWxlKCl9XG4gICAgICAgICAgcG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVTaWRlUGFuZWx9XG4gICAgICAgICAgdHJpZ2dlcj17dGhpcy5zaWRlUG9wcGVyVHJpZ2dlcj8uY3VycmVudH1cbiAgICAgICAgICB0aXRsZT17Zm9ybWF0TWVzc2FnZSgnYW5pbWF0aW9uU2V0dGluZycpfVxuICAgICAgICAgIGJhY2tUb0ZvY3VzTm9kZT17dGhpcy5idXR0b25SZWY/LmN1cnJlbnR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZS1jb250ZW50Jz5cbiAgICAgICAgICAgIDxBbmltYXRpb25Qb3BwZXJDb250ZW50XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaWRlUG9wcGVyPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGxvZGFzaCwganN4LCBpbmplY3RJbnRsLCB0eXBlIEludGxTaGFwZSwgY2xhc3NOYW1lcywgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCB1dGlscyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQmFja2dyb3VuZFN0eWxlLCBGaWxsVHlwZSwgU2VsZWN0LCB0eXBlIEltYWdlUGFyYW0sIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBJbWFnZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9yZXNvdXJjZS1zZWxlY3RvcidcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXIgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlcidcbmltcG9ydCB7IHdpdGhTdHlsZXMsIHdpdGhUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbi8qKlxuICogVGhlIGBCYWNrZ3JvdW5kU2V0dGluZ2AgY29tcG9uZW50IHByb3BzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhY2tncm91bmRTZXR0aW5nUHJvcHMge1xuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoaXMgY29tcG9uZW50LCBpbmNsdWRpbmcgdGhlIGJhY2tncm91bmQgY29sb3IsIGJhY2tncm91bmQgaW1hZ2UsIGFuZCB0aGUgZmlsbCB0eXBlIG9mIGJhY2tncm91bmQgaW1hZ2VcbiAgICovXG4gIGJhY2tncm91bmQ/OiBCYWNrZ3JvdW5kU3R5bGVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgYmFja2dyb3VuZCB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U/OiAoYmFja2dyb3VuZDogQmFja2dyb3VuZFN0eWxlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBjbGFzcyBuYW1lcyBhZGRlZCB0byB0aGUgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogRGVmaW5lcyB0aGUgaW5saW5lIENTUyBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc3R5bGU/OiBhbnlcbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBpbnRsPzogSW50bFNoYXBlXG4gIHRoZW1lPzogSU1UaGVtZVZhcmlhYmxlc1xuICB0aGVtZTI/OiBJTVRoZW1lVmFyaWFibGVzXG59XG5cbi8qKlxuICogVGhlIGBCYWNrZ3JvdW5kU2V0dGluZ2AgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBzZXQgdGhlIGJhY2tncnB1bmQgb2YgdGhlIGJveC5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgQmFja2dyb3VuZFNldHRpbmcgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgX0JhY2tncm91bmRTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxCYWNrZ3JvdW5kU2V0dGluZ1Byb3BzICYgRXh0cmFQcm9wcz4ge1xuICBmaWxlSW5wdXQ6IFJlYWN0LlJlZk9iamVjdDxhbnk+XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wczogUGFydGlhbDxCYWNrZ3JvdW5kU2V0dGluZ1Byb3BzICYgRXh0cmFQcm9wcz4gPSB7XG4gICAgYmFja2dyb3VuZDogeyBjb2xvcjogdW5kZWZpbmVkLCBmaWxsVHlwZTogRmlsbFR5cGUuRklMTCwgaW1hZ2U6IHsgdXJsOiAnJyB9IH0sXG4gICAgb25DaGFuZ2U6ICgpID0+IHsgfVxuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5maWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgb3BlbkJyb3dzZUltYWdlID0gKGltYWdlUGFyYW06IEltYWdlUGFyYW0pID0+IHtcbiAgICBjb25zdCB7IGJhY2tncm91bmQgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGxvZGFzaC5hc3NpZ24oe30sIGJhY2tncm91bmQsIHsgaW1hZ2U6IGltYWdlUGFyYW0gfSkpXG4gIH1cblxuICBfb25Qb3NpdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBiYWNrZ3JvdW5kIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobG9kYXNoLmFzc2lnbih7fSwgYmFja2dyb3VuZCwgeyBmaWxsVHlwZTogdmFsdWUgfSkpXG4gIH1cblxuICBfb25Db2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBiYWNrZ3JvdW5kIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShsb2Rhc2guYXNzaWduKHt9LCBiYWNrZ3JvdW5kLCB7IGNvbG9yOiBjb2xvciB9KSlcbiAgfVxuXG4gIHRyYW5zbGF0ZSA9IChpZDogc3RyaW5nLCB2YWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0TWVzc2FnZXMpXG4gICAgcmV0dXJuIHRoaXMucHJvcHM/LmludGw/LmZvcm1hdE1lc3NhZ2UoXG4gICAgICB7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IG1lc3NhZ2VzW2lkXSB9LFxuICAgICAgdmFsdWVzXG4gICAgKVxuICB9XG5cbiAgZ2V0RmlsbFR5cGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB2YWx1ZTogRmlsbFR5cGUuRklULFxuICAgICAgbGFiZWw6IHRoaXMudHJhbnNsYXRlKCdmaXQnKVxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiBGaWxsVHlwZS5GSUxMLFxuICAgICAgbGFiZWw6IHRoaXMudHJhbnNsYXRlKCdmaWxsJylcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogRmlsbFR5cGUuQ0VOVEVSLFxuICAgICAgbGFiZWw6IHRoaXMudHJhbnNsYXRlKCdjZW50ZXInKVxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiBGaWxsVHlwZS5USUxFLFxuICAgICAgbGFiZWw6IHRoaXMudHJhbnNsYXRlKCd0aWxlJylcbiAgICB9LCB7XG4gICAgICB2YWx1ZTogRmlsbFR5cGUuU1RSRVRDSCxcbiAgICAgIGxhYmVsOiB0aGlzLnRyYW5zbGF0ZSgnc3RyZXRjaCcpXG4gICAgfV1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBiYWNrZ3JvdW5kLCBjbGFzc05hbWUsIHN0eWxlLCB0aGVtZSwgdGhlbWUyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2VsZWN0ZWROYW1lID0gYmFja2dyb3VuZC5pbWFnZT8ub3JpZ2luYWxOYW1lXG4gICAgY29uc3QgZGVzY3JpYmVkSWQgPSBgaW1hZ2UtZHluYW1pYy1zZWxlY3RlZC0ke3V0aWxzLmdldFVJRCgpfWBcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsICdqaW11LWJ1aWxkZXItLWJhY2tncm91bmQtc2V0dGluZycpfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy50cmFuc2xhdGUoJ2ZpbGwnKX0+XG4gICAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXIgY2xhc3NOYW1lPSdtbC1hdXRvJyB0aXRsZT17dGhpcy50cmFuc2xhdGUoJ2ZpbGxDb2xvcicpfSBhcmlhLWxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgnZmlsbENvbG9yJyl9IHNwZWNpZmljVGhlbWU9e3RoZW1lMiB8fCB0aGVtZX0gb25DaGFuZ2U9e3RoaXMuX29uQ29sb3JDaGFuZ2V9IHZhbHVlPXsoYmFja2dyb3VuZC5jb2xvcil9IC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cblxuICAgICAgICA8U2V0dGluZ1JvdyBjbGFzc05hbWU9J2JhY2tncm91bmQtaW1hZ2UnIGxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgnaW1hZ2UnKX0+XG4gICAgICAgICAgPEltYWdlU2VsZWN0b3JcbiAgICAgICAgICAgIHdpZGdldElkPSdiYWNrZ3JvdW5kLXNldHRpbmcnIGJ1dHRvbkxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgnYnJvd3NlJyl9IGJ1dHRvblNpemU9J3NtJyBjbGFzc05hbWU9J3ctNTAnXG4gICAgICAgICAgICBidXR0b25DbGFzc05hbWU9J3RleHQtZGFyayBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBidG4tYnJvd3NlJyBvbkNoYW5nZT17dGhpcy5vcGVuQnJvd3NlSW1hZ2V9IGltYWdlUGFyYW09e2JhY2tncm91bmQuaW1hZ2V9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgnYnJvd3NlSW1hZ2UnKX1cbiAgICAgICAgICAgIHsuLi4oc2VsZWN0ZWROYW1lID8geyAnYXJpYS1kZXNjcmliZWRieSc6IGRlc2NyaWJlZElkIH0gOiB7fSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7c2VsZWN0ZWROYW1lICYmXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPXtkZXNjcmliZWRJZH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMudHJhbnNsYXRlKCdudW1TZWxlY3RlZCcsIHsgbnVtYmVyOiBzZWxlY3RlZE5hbWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgIDxTZXR0aW5nUm93IGNsYXNzTmFtZT0nYmFja2dyb3VuZC1pbWFnZS1maWxsLXR5cGUnIGxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgncG9zaXRpb24nKX0+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cmFuc2xhdGUoJ3Bvc2l0aW9uJyl9XG4gICAgICAgICAgICBzaXplPSdzbScgY2xhc3NOYW1lPSdmaWxsLXR5cGUnIG5hbWU9J2JnLXBvc2l0aW9uJyB2YWx1ZT17YmFja2dyb3VuZC5maWxsVHlwZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vblBvc2l0aW9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMuZ2V0RmlsbFR5cGUoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLnZhbHVlfT57aXRlbS5sYWJlbCA/PyBpdGVtLnZhbHVlfTwvb3B0aW9uPil9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBgQmFja2dyb3VuZFNldHRpbmdgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSBiYWNrZ3JwdW5kIG9mIHRoZSBib3guXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEJhY2tncm91bmRTZXR0aW5nIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRTZXR0aW5nID0gd2l0aFN0eWxlcyh3aXRoVGhlbWUoaW5qZWN0SW50bChfQmFja2dyb3VuZFNldHRpbmcpLCB0cnVlKSwgJ0JhY2tncm91bmRTZXR0aW5nJylcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgSW1tdXRhYmxlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgRm91clNpZGVzVW5pdCwgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IEZvdXJFZGdlcywgdHlwZSBGb3VyRWRnZXNQcm9wcyB9IGZyb20gJy4vZm91ci1lZGdlcydcblxuLyoqXG4gKiBUaGUgYEJvcmRlclJhZGl1c1NldHRpbmdgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCb3JkZXJSYWRpdXNTZXR0aW5nUHJvcHMgZXh0ZW5kcyBPbWl0PEZvdXJFZGdlc1Byb3BzLCAndHlwZScgfCAndmFsdWUnIHwgJ29uQ2hhbmdlJyB8ICd1bmlmaWVkQXJpYUxhYmVsJyB8ICd1bmlmaWVkVGl0bGUnPiB7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBkZWZhdWx0IHtudW1iZXI6WzAsMCwwLDBdLHVuaXQ6cHh9XG4gICAqL1xuICB2YWx1ZTogSW1tdXRhYmxlT2JqZWN0PEZvdXJTaWRlc1VuaXQ+XG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZTogKHZhbHVlOiBJbW11dGFibGVPYmplY3Q8Rm91clNpZGVzVW5pdD4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiBUaGUgYEJvcmRlclJhZGl1c1NldHRpbmdgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSBib3JkZXIgcmFkaXVzIG9mIHRoZSBib3guXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEJvcmRlclJhZGl1c1NldHRpbmcgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgQm9yZGVyUmFkaXVzU2V0dGluZyA9IChwcm9wczogQm9yZGVyUmFkaXVzU2V0dGluZ1Byb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCB2YWx1ZTogcHJvcFZhbHVlLCBvbkNoYW5nZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gcHJvcFZhbHVlPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLCBbcHJvcFZhbHVlXSlcblxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IGxhYmVsID0gUmVhY3QudXNlTWVtbygoKSA9PiB0cmFuc2xhdGUoJ2JvcmRlclJhZGl1cycpLCBbdHJhbnNsYXRlXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IEZvdXJTaWRlc1VuaXQpID0+IHtcbiAgICBvbkNoYW5nZT8uKEltbXV0YWJsZSh2YWx1ZSkpXG4gIH1cblxuICByZXR1cm4gKDxGb3VyRWRnZXNcbiAgICB0eXBlPSdjb3JuZXInXG4gICAgdmFsdWU9e3ZhbHVlfVxuICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgdW5pZmllZEFyaWFMYWJlbD17bGFiZWx9XG4gICAgdW5pZmllZFRpdGxlPXtsYWJlbH1cbiAgICB7Li4ub3RoZXJzfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3R5bGUtc2V0dGluZy0tYm9yZGVyLXJhZGl1cycsIGNsYXNzTmFtZSl9IC8+KVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIGxvZGFzaCwgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBMaW5lU3R5bGVTZWxlY3RvciB9IGZyb20gJy4vbGluZS1zdHlsZS1zZWxlY3RvcidcbmltcG9ydCB7IElucHV0VW5pdCB9IGZyb20gJy4vdW5pdC1pbnB1dCdcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXIgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlcidcbmltcG9ydCB7IHV0aWxzLCB0eXBlIEJvcmRlclN0eWxlLCBEaXN0YW5jZVVuaXRzLCBOb3JtYWxMaW5lVHlwZSwgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHVzZVRoZW1lMiwgd2l0aFN0eWxlcyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbmludGVyZmFjZSBCb3JkZXJTdHlsZVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlPzogYW55XG4gIC8qKlxuICAgKiBCb3JkZXIgc3R5bGUsIGluY2x1ZGluZyB0eXBlLCBjb2xvciwgYW5kIHdpZHRoXG4gICAqL1xuICB2YWx1ZT86IEJvcmRlclN0eWxlXG4gIG9uQ2hhbmdlPzogKHBhcmFtOiBCb3JkZXJTdHlsZSkgPT4gdm9pZFxufVxuXG5jb25zdCBib3JkZXJVbml0cyA9IFtEaXN0YW5jZVVuaXRzLlBJWEVMXVxuY29uc3QgZGVmYXVsdFZhbHVlID0ge1xuICB0eXBlOiBOb3JtYWxMaW5lVHlwZS5EQVNIRUQsXG4gIGNvbG9yOiB1bmRlZmluZWQsXG4gIHdpZHRoOiAnMHB4J1xufVxuZXhwb3J0IGNvbnN0IF9Cb3JkZXJTZXR0aW5nID0gKHByb3BzOiBCb3JkZXJTdHlsZVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUgPSBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlLCBjbGFzc05hbWUsIHN0eWxlIH0gPSBwcm9wc1xuICBjb25zdCB7IHR5cGUsIGNvbG9yLCB3aWR0aCB9ID0gdmFsdWVcbiAgY29uc3QgdGhlbWUyID0gdXNlVGhlbWUyKClcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuXG4gIGNvbnN0IHVwZGF0ZUJvcmRlciA9IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRvUmVwbGFjZTogYW55ID0ge31cbiAgICB0b1JlcGxhY2Vba2V5XSA9IG5ld1ZhbHVlXG4gICAgb25DaGFuZ2U/Lihsb2Rhc2guYXNzaWduKHt9LCB2YWx1ZSwgdG9SZXBsYWNlKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3N0eWxlLXNldHRpbmctLWJvcmRlci1zZXR0aW5nJywgY2xhc3NOYW1lKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxUaGVtZUNvbG9yUGlja2VyIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnY29sb3InKX0gc3BlY2lmaWNUaGVtZT17dGhlbWUyfSBjbGFzc05hbWU9J2l0ZW0nIG9uQ2hhbmdlPXsoY29sb3IpID0+IHsgdXBkYXRlQm9yZGVyKCdjb2xvcicsIGNvbG9yKSB9fSB2YWx1ZT17KGNvbG9yKX0gLz5cbiAgICAgIDxMaW5lU3R5bGVTZWxlY3RvciBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2xpbmVTdHlsZScpfSBjbGFzc05hbWU9J2l0ZW0nIHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17KG5ld1R5cGUpID0+IHsgdXBkYXRlQm9yZGVyKCd0eXBlJywgbmV3VHlwZSkgfX0gLz5cbiAgICAgIDxJbnB1dFVuaXRcbiAgICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCd3aWR0aCcpfVxuICAgICAgICBtaW49ezB9XG4gICAgICAgIHByZWNpc2lvbj17MH1cbiAgICAgICAgdW5pdHM9e2JvcmRlclVuaXRzfSBjbGFzc05hbWU9J2l0ZW0nIHZhbHVlPXt3aWR0aCBhcyBzdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXsobmV3V2lkdGgpID0+IHsgdXBkYXRlQm9yZGVyKCd3aWR0aCcsIHV0aWxzLnN0cmluZ09mTGluZWFyVW5pdChuZXdXaWR0aCkpIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8qKlxuICogQSByZWFjdCBjb21wb25lbnQgZm9yIHNldHRpbmcgYm9yZGVyIHN0eWxlIChib3JkZXItc3R5bGUsIGJvcmRlci1jb2xvciwgYm9yZGVyLXdpZHRoKVxuICovXG5leHBvcnQgY29uc3QgQm9yZGVyU2V0dGluZyA9IHdpdGhTdHlsZXMoX0JvcmRlclNldHRpbmcsICdCb3JkZXJTZXR0aW5nJylcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGxvZGFzaCwgaW5qZWN0SW50bCwgdHlwZSBJbnRsU2hhcGUsIGpzeCwgY2xhc3NOYW1lcywgdHlwZSBJTVRoZW1lVmFyaWFibGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBCb3hTaGFkb3dTdHlsZSwgdXRpbHMsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBJbnB1dFVuaXQgfSBmcm9tICcuL3VuaXQtaW5wdXQnXG5pbXBvcnQgeyBUaGVtZUNvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInXG5pbXBvcnQgeyBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCB3aXRoVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEJveFNoYWRvd1NldHRpbmdQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogQm94IHNoYWRvdyBzdHlsZSwgaW5jbHVkaW5nIG9mZnNldFgsIG9mZnNldFksIGJsdXIsIHNwcmVhZCBhbmQgY29sb3JcbiAgICovXG4gIHZhbHVlPzogQm94U2hhZG93U3R5bGVcbiAgb25DaGFuZ2U/OiAodmFsdWU6IEJveFNoYWRvd1N0eWxlKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgaW50bDogSW50bFNoYXBlXG4gIHRoZW1lMj86IElNVGhlbWVWYXJpYWJsZXNcbn1cblxuZXhwb3J0IGNsYXNzIF9Cb3hTaGFkb3dTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxCb3hTaGFkb3dTZXR0aW5nUHJvcHMgJiBFeHRyYVByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8Qm94U2hhZG93U2V0dGluZ1Byb3BzICYgRXh0cmFQcm9wcz4gPSB7XG4gICAgdmFsdWU6IHtcbiAgICAgIG9mZnNldFg6ICcwcHgnLFxuICAgICAgb2Zmc2V0WTogJzBweCcsXG4gICAgICBibHVyOiAnMHB4JyxcbiAgICAgIHNwcmVhZDogJzBweCcsXG4gICAgICBjb2xvcjogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBvbkNoYW5nZTogKCkgPT4geyB9XG4gIH1cblxuICBfdXBkYXRlU2hhZG93IChrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGxvZGFzaC5hc3NpZ24oe30sIHZhbHVlLCB7IFtrZXldOiBuZXdWYWx1ZSB9KSlcbiAgfVxuXG4gIHRyYW5zbGF0ZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW50bCA/IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6IGlkLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzW2lkXSB9KSA6IGlkXG4gIH1cblxuICBnZXRTaGFkb3dzID0gKCkgPT4ge1xuICAgIHJldHVybiBbe1xuICAgICAgbmFtZTogJ29mZnNldFgnLFxuICAgICAgbGFiZWw6IHRoaXMudHJhbnNsYXRlKCdvZmZzZXRYJyksXG4gICAgICBtaW46IC0yMDAsXG4gICAgICBtYXg6IDIwMFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdvZmZzZXRZJyxcbiAgICAgIGxhYmVsOiB0aGlzLnRyYW5zbGF0ZSgnb2Zmc2V0WScpLFxuICAgICAgbWluOiAtMjAwLFxuICAgICAgbWF4OiAyMDBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnYmx1cicsXG4gICAgICBsYWJlbDogdGhpcy50cmFuc2xhdGUoJ2JsdXJSYWRpdXMnKSxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMzAwXG4gICAgfSwge1xuICAgICAgbmFtZTogJ3NwcmVhZCcsXG4gICAgICBsYWJlbDogdGhpcy50cmFuc2xhdGUoJ3NwcmVhZFJhZGl1cycpLFxuICAgICAgbWluOiAtMjAwLFxuICAgICAgbWF4OiAyMDBcbiAgICB9XVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBjbGFzc05hbWUsIHRoZW1lMiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3R5bGUtc2V0dGluZy0tYm94LXNoYWRvdy1zZXR0aW5nJywgY2xhc3NOYW1lKX0gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RoaXMudHJhbnNsYXRlKCdib3hTaGFkb3cnKX0+XG4gICAgICAgIHt0aGlzLmdldFNoYWRvd3MoKS5tYXAoKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBrZXk9e2luZGV4fSBsYWJlbD17cGFyYW0ubGFiZWx9PlxuICAgICAgICAgICAgICA8SW5wdXRVbml0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17cGFyYW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uPXswfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYm94LWlucHV0JyBtaW49e3BhcmFtLm1pbn0gbWF4PXtwYXJhbS5tYXh9IHZhbHVlPXt2YWx1ZVtwYXJhbS5uYW1lXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7IHRoaXMuX3VwZGF0ZVNoYWRvdyhwYXJhbS5uYW1lLCB1dGlscy5zdHJpbmdPZkxpbmVhclVuaXQodmFsdWUpKSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnRyYW5zbGF0ZSgnY29sb3InKX0+XG4gICAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXIgY2xhc3NOYW1lPSdib3gtY29sb3IgbWwtYXV0bycgc3BlY2lmaWNUaGVtZT17dGhlbWUyfSB2YWx1ZT17dmFsdWUuY29sb3J9IG9uQ2hhbmdlPXsobmV3Q29sb3IpID0+IHsgdGhpcy5fdXBkYXRlU2hhZG93KCdjb2xvcicsIG5ld0NvbG9yKSB9fSAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBBIHJlYWN0IGNvbXBvbmVudCBmb3Igc2V0dGluZyBib3gtc2hhZG93IHN0eWxlIChvZmZzZXRYLCBvZmZzZXRZLCBibHVyLCBzcHJlYWQgYW5kIGNvbG9yKVxuICovXG5leHBvcnQgY29uc3QgQm94U2hhZG93U2V0dGluZyA9IHdpdGhTdHlsZXMod2l0aFRoZW1lKGluamVjdEludGwoX0JveFNoYWRvd1NldHRpbmcpLCB0cnVlKSwgJ0JveFNoYWRvd1NldHRpbmcnKVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdqaW11LXVpJ1xuXG5leHBvcnQgZW51bSBGb250RmFtaWx5VmFsdWUge1xuICBBVkVOSVJORVhUID0gJ0F2ZW5pciBOZXh0JyxcbiAgQ0FMSUJSSSA9ICdDYWxpYnJpJyxcbiAgUE1JTkdMSVUgPSAnUG1pbmdMaXUnLFxuICBJTVBBQ1QgPSAnSW1wYWN0JyxcbiAgR0VPUkdJQSA9ICdHZW9yZ2lhJyxcbiAgQVJJQUwgPSAnQXJpYWwnLFxuICBUSU1FU05FV1JPTUFOID0gJ1RpbWVzIE5ldyBSb21hbicsXG4gIFNJTUhFSSA9ICdTaW1IZWknLFxuICBNSUNST1NPRlRZQUhFSSA9ICdNaWNyb3NvZnQgWWFIZWknXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9udEZhbWlseVNlbGVjdG9yUHJvcHMge1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmdcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICAvKipcbiAgICogT25lIHZhbHVlIG9mIGVudW0gRm9udEZhbWlseVZhbHVlXG4gICAqL1xuICBmb250PzogRm9udEZhbWlseVZhbHVlXG4gIG9uQ2hhbmdlPzogKGZvbnQ6IHN0cmluZykgPT4gdm9pZFxufVxuZXhwb3J0IGNvbnN0IGZvbnRWYWx1ZSA9IFtGb250RmFtaWx5VmFsdWUuQVZFTklSTkVYVCwgRm9udEZhbWlseVZhbHVlLkNBTElCUkksIEZvbnRGYW1pbHlWYWx1ZS5QTUlOR0xJVSwgRm9udEZhbWlseVZhbHVlLklNUEFDVCxcbiAgRm9udEZhbWlseVZhbHVlLkdFT1JHSUEsIEZvbnRGYW1pbHlWYWx1ZS5BUklBTCwgRm9udEZhbWlseVZhbHVlLlRJTUVTTkVXUk9NQU4sIEZvbnRGYW1pbHlWYWx1ZS5TSU1IRUksIEZvbnRGYW1pbHlWYWx1ZS5NSUNST1NPRlRZQUhFSV1cblxuLyoqXG4gKiBBIHJlYWN0IGNvbXBvbmVudCBmb3IgY2hvb3NpbmcgYSBmb250IHdlIHN1cHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEZvbnRGYW1pbHlTZWxlY3RvciA9IChwcm9wczogRm9udEZhbWlseVNlbGVjdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBmb250ID0gRm9udEZhbWlseVZhbHVlLkFWRU5JUk5FWFQsICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLCBvbkNoYW5nZSwgc3R5bGUsIGNsYXNzTmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgaGFuZ2VDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgdGl0bGU9e2ZvbnR9XG4gICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB2YWx1ZT17Zm9udH1cbiAgICAgIG9uQ2hhbmdlPXtoYW5nZUNoYW5nZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsICdzdHlsZS1zZXR0aW5nLS1mb250LWZhbWlseScpfVxuICAgID5cbiAgICAgIHtmb250VmFsdWUubWFwKChlLCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17ZX0gbGFiZWw9e2V9PntlfTwvb3B0aW9uPil9XG4gICAgPC9TZWxlY3Q+XG4gIClcbn1cbiIsIi8qKkBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIHR5cGUgQnV0dG9uUHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuXG5pbnRlcmZhY2UgQ29ybmVyUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7XG4gIGRldGFjaGVkPzogYm9vbGVhblxuICBhY3RpdmF0ZWQ/OiAtMSB8IDAgfCAxIHwgMiB8IDNcbn1cblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICYudW5pZmllZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgICYubm9uZS1zZWxlY3Qge1xuICAgICAgLmNvcm5lciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgID4gLnRvcCxcbiAgICA+IC5ib3R0b20ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDNweCk7XG4gICAgfVxuXG4gICAgLmNvcm5lciB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAzcHgpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgICAmLnRvcC1sZWZ0IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgMDtcbiAgICAgIH1cbiAgICAgICYudG9wLXJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XG4gICAgICB9XG4gICAgICAmLmJvdHRvbS1sZWZ0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbiAgICAgIH1cbiAgICAgICYuYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb3JuZXIgPSAocHJvcHM6IENvcm5lclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBhY3RpdmF0ZWQgPSAtMSwgZGV0YWNoZWQsIC4uLm90aGVycyB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIGNzcz17c3R5bGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2Nvcm5lcicsIGNsYXNzTmFtZSl9IHsuLi5vdGhlcnN9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgJ2NvbnRlbnQnLFxuICAgICAgICAgIHsgdW5pZmllZDogIWRldGFjaGVkIH0sXG4gICAgICAgICAgeyAnbm9uZS1zZWxlY3QnOiBhY3RpdmF0ZWQgPCAwIH1cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2RldGFjaGVkICYmIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wJz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndG9wLWxlZnQgY29ybmVyJywge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFjdGl2YXRlZCA9PT0gMFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0b3AtcmlnaHQgY29ybmVyJywge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFjdGl2YXRlZCA9PT0gMVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm90dG9tJz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYm90dG9tLWxlZnQgY29ybmVyJywge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFjdGl2YXRlZCA9PT0gM1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdib3R0b20tcmlnaHQgY29ybmVyJywge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFjdGl2YXRlZCA9PT0gMlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQnV0dG9uPlxuICApXG59XG4iLCIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uLCB0eXBlIEJ1dHRvblByb3BzIH0gZnJvbSAnamltdS11aSdcblxuZXhwb3J0IGludGVyZmFjZSBFZGdlUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7XG4gIGRldGFjaGVkPzogYm9vbGVhblxuICBhY3RpdmF0ZWQ/OiAtMSB8IDAgfCAxIHwgMiB8IDNcbn1cblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuICBwYWRkaW5nOiA0cHggIWltcG9ydGFudDtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi51bmlmaWVkIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICAgID4gLmlubmVyLWJveCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgICY6bm90KC51bmlmaWVkKSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmLm5vbmUtc2VsZWN0IHtcbiAgICAgICAgLmVkZ2Uge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgPiAuaW5uZXItYm94IHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA+IC50b3Age1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICB9XG4gICAgICA+IC5taWRkbGUge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgID4gLmxlZnQge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgID4gLnJpZ2h0IHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgID4gLmJvdHRvbSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjayk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIH1cbiAgICAgIC5lZGdlIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgID4gLmlubmVyLWJveCB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBib3JkZXI6IDFweCBkb3R0ZWQgdmFyKC0tYmxhY2spO1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSA0cHgpO1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRWRnZSA9IChwcm9wczogRWRnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBhY3RpdmF0ZWQgPSAtMSwgZGV0YWNoZWQsIC4uLm90aGVycyB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIGNzcz17c3R5bGVzfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2VkZ2UnLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICdjb250ZW50JyxcbiAgICAgICAgICB7IHVuaWZpZWQ6ICFkZXRhY2hlZCB9LFxuICAgICAgICAgIHsgJ25vbmUtc2VsZWN0JzogYWN0aXZhdGVkIDwgMCB9XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtkZXRhY2hlZCAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2VkZ2UgdG9wJywgeyBzZWxlY3RlZDogYWN0aXZhdGVkID09PSAwIH0pfVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pZGRsZSc+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2VkZ2UgbGVmdCcsIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhY3RpdmF0ZWQgPT09IDNcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdlZGdlIHJpZ2h0Jywge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFjdGl2YXRlZCA9PT0gMVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdlZGdlIGJvdHRvbScsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYWN0aXZhdGVkID09PSAyXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lci1ib3gnPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9CdXR0b24+XG4gIClcbn1cbiIsImltcG9ydCB7IFJlYWN0LCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEFkdmFuY2VkQnV0dG9uR3JvdXAsIHR5cGUgQnV0dG9uUHJvcHMsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBDb3JuZXIgfSBmcm9tICcuL2Nvcm5lcidcbmltcG9ydCB7IEVkZ2UgfSBmcm9tICcuL2VkZ2UnXG5cbmludGVyZmFjZSBFZGdlc0Jsb2NrUHJvcHMgZXh0ZW5kcyBPbWl0PEJ1dHRvblByb3BzLCAndHlwZScgfCAnb25DaGFuZ2UnPiB7XG4gIHR5cGU6ICdlZGdlJyB8ICdjb3JuZXInXG4gIGFjdGl2YXRlZD86IC0xIHwgMCB8IDEgfCAyIHwgM1xuICBkZXRhY2hlZDogYm9vbGVhblxuICBvbkRldGFjaGVkQ2hhbmdlOiAoZGV0YWNoZWQ6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEVkZ2VzQmxvY2sgPSAocHJvcHM6IEVkZ2VzQmxvY2tQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSA9ICdlZGdlJyxcbiAgICBkZXRhY2hlZCxcbiAgICBvbkRldGFjaGVkQ2hhbmdlLFxuICAgIG9uQ2xpY2ssXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGhhbmRsZURldGFjaGVkQ2hhbmdlID0gKFxuICAgIGRldGFjaGVkOiBib29sZWFuLFxuICAgIGV2dDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD5cbiAgKSA9PiB7XG4gICAgb25EZXRhY2hlZENoYW5nZT8uKGRldGFjaGVkKVxuICAgIG9uQ2xpY2s/LihldnQpXG4gIH1cblxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IHVuaWZpZWQgPSB0cmFuc2xhdGUoJ3VuaWZpZWQnKVxuICBjb25zdCBpbmRlcGVuZGVudCA9IHRyYW5zbGF0ZSgnaW5kZXBlbmRlbnQnKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0eXBlID09PSAnZWRnZScgJiYgKFxuICAgICAgICA8QWR2YW5jZWRCdXR0b25Hcm91cD5cbiAgICAgICAgICB7dHlwZSA9PT0gJ2VkZ2UnICYmIChcbiAgICAgICAgICAgIDxFZGdlXG4gICAgICAgICAgICAgIGFjdGl2ZT17IWRldGFjaGVkfVxuICAgICAgICAgICAgICBkZXRhY2hlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIHRpdGxlPXt1bmlmaWVkfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt1bmlmaWVkfVxuICAgICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7IGhhbmRsZURldGFjaGVkQ2hhbmdlKGZhbHNlLCBldnQpIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3R5cGUgPT09ICdlZGdlJyAmJiAoXG4gICAgICAgICAgICA8RWRnZVxuICAgICAgICAgICAgICBhY3RpdmU9e2RldGFjaGVkfVxuICAgICAgICAgICAgICBkZXRhY2hlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgdGl0bGU9e2luZGVwZW5kZW50fVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpbmRlcGVuZGVudH1cbiAgICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4geyBoYW5kbGVEZXRhY2hlZENoYW5nZSh0cnVlLCBldnQpIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQWR2YW5jZWRCdXR0b25Hcm91cD5cbiAgICAgICl9XG4gICAgICB7dHlwZSA9PT0gJ2Nvcm5lcicgJiYgKFxuICAgICAgICA8QWR2YW5jZWRCdXR0b25Hcm91cD5cbiAgICAgICAgICA8Q29ybmVyXG4gICAgICAgICAgICBhY3RpdmU9eyFkZXRhY2hlZH1cbiAgICAgICAgICAgIGRldGFjaGVkPXtmYWxzZX1cbiAgICAgICAgICAgIHRpdGxlPXt1bmlmaWVkfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dW5pZmllZH1cbiAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7IGhhbmRsZURldGFjaGVkQ2hhbmdlKGZhbHNlLCBldnQpIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29ybmVyXG4gICAgICAgICAgICBhY3RpdmU9e2RldGFjaGVkfVxuICAgICAgICAgICAgZGV0YWNoZWQ9e3RydWV9XG4gICAgICAgICAgICB0aXRsZT17aW5kZXBlbmRlbnR9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtpbmRlcGVuZGVudH1cbiAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB7IGhhbmRsZURldGFjaGVkQ2hhbmdlKHRydWUsIGV2dCkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0FkdmFuY2VkQnV0dG9uR3JvdXA+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iLCIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIGNzcywganN4LCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJvcmRlclNpZGVzLCB0eXBlIEZvdXJTaWRlc1VuaXQsIElucHV0R3JvdXAsIE51bWVyaWNJbnB1dCwgU2lkZXMsIHN0eWxlVXRpbHMsIERpc3RhbmNlVW5pdHMsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBVbml0U2VsZWN0b3IgfSBmcm9tICcuLi91bml0LWlucHV0J1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkZ2VzTnVtYmVyUHJvcHMge1xuICAvKipcbiAgICAqIFRoZSB0eXBlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgICogQGRlZmF1bHQgZWRnZVxuICAgICovXG4gIHR5cGU6ICdlZGdlJyB8ICdjb3JuZXInXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBkZWZhdWx0IHtudW1iZXI6WzAsMCwwLDBdLHVuaXQ6cHh9XG4gICAqL1xuICB2YWx1ZTogRm91clNpZGVzVW5pdFxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgY2xhc3MgbmFtZXMgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgZm91ciB2YWx1ZXMgY2FuIGJlIHNldCBzZXBhcmF0ZWx5LlxuICAgKi9cbiAgZGV0YWNoZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBDYWxsIGJhY2sgdGhlIGN1cnJlbnRseSBhY3RpdmF0ZWQgaW5kZXguXG4gICAqL1xuICBvbkFjdGl2YXRlZENoYW5nZT86IChhY3RpdmF0ZWQ6IC0xIHwgMCB8IDEgfCAyIHwgMykgPT4gdm9pZFxuICAvKipcbiAgICogVGhlIG1pbmltdW0gdmFsdWUgdG8gYWNjZXB0IGZvciBhbGwgdGhlIGlucHV0IGJveGVzLlxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBtaW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHZhbHVlIHRvIGFjY2VwdCBmb3IgYWxsIHRoZSBpbnB1dCBib3hlcy5cbiAgICogQGRlZmF1bHQgMTAwXG4gICAqL1xuICBtYXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIERpc2FibGUgaW5wdXQgYW5kIHNlbGVjdGlvbiBvZiBhbGwgdGhlIGlucHV0IGJveGVzLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBTZWxlY3RhYmxlIHVuaXRzOiBweCwgcmVtLCBlbSwgJS5cbiAgICogQGRlZmF1bHQgWydweCcsJyUnXVxuICAgKi9cbiAgdW5pdHM/OiBEaXN0YW5jZVVuaXRzW11cbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBGb3VyU2lkZXNVbml0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBBcmlhLWxhYmVsIGZvciB1bmlmaWVkIG1vZGUgKGRldGFjaGVkIGlzIGZhbHNlKS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdW5pZmllZEFyaWFMYWJlbD86IHN0cmluZ1xuICAvKipcbiAgICogVGl0bGUgZm9yIGZvciB1bmlmaWVkIG1vZGUgKGRldGFjaGVkIGlzIGZhbHNlKS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdW5pZmllZFRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgLmppbXUtbnVtZXJpYy1pbnB1dC1pbnB1dHtcbiAgICB6LWluZGV4OiBhdXRvO1xuICAgICY6Zm9jdXMge1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gIH1cbiAgLnVuaXQtc2VsZWN0b3ItY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuYFxuXG5jb25zdCBlZGdlcyA9IFtTaWRlcy5ULCBTaWRlcy5SLCBTaWRlcy5CLCBTaWRlcy5MXVxuY29uc3QgY29ybmVycyA9IFtCb3JkZXJTaWRlcy5UTCwgQm9yZGVyU2lkZXMuVFIsIEJvcmRlclNpZGVzLkJSLCBCb3JkZXJTaWRlcy5CTF1cbmNvbnN0IGRlZmF1bHRVbml0cyA9IFtEaXN0YW5jZVVuaXRzLlBJWEVMLCBEaXN0YW5jZVVuaXRzLlBFUkNFTlRBR0VdXG5jb25zdCBEZWZhdWx0VmFsdWUgPSB7XG4gIG51bWJlcjogWzAsIDAsIDAsIDBdIGFzIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdLFxuICB1bml0OiBEaXN0YW5jZVVuaXRzLlBJWEVMXG59XG5cbmV4cG9ydCBjb25zdCBFZGdlc051bWJlciA9IChwcm9wczogRWRnZXNOdW1iZXJQcm9wcykgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IGRlZmF1bHRMYWJlbCA9IHRyYW5zbGF0ZSgndW5pZmllZE51bWVyaWNWYWx1ZScpXG4gIGNvbnN0IHtcbiAgICB0eXBlID0gJ2VkZ2UnLFxuICAgIHZhbHVlID0gRGVmYXVsdFZhbHVlLFxuICAgIGNsYXNzTmFtZSxcbiAgICBtaW4gPSAwLFxuICAgIG1heCA9IDEwMCxcbiAgICB1bml0cyA9IGRlZmF1bHRVbml0cyxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIG9uQWN0aXZhdGVkQ2hhbmdlLFxuICAgIG9uQ2hhbmdlLFxuICAgIGRldGFjaGVkLFxuICAgIHVuaWZpZWRUaXRsZSA9IGRlZmF1bHRMYWJlbCxcbiAgICB1bmlmaWVkQXJpYUxhYmVsID0gZGVmYXVsdExhYmVsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IG51bWJlcnMgPSB2YWx1ZS5udW1iZXJcbiAgY29uc3QgdW5pdCA9IHZhbHVlLnVuaXRcbiAgY29uc3Qgc2lkZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHR5cGUgPT09ICdlZGdlJyA/IGVkZ2VzIDogY29ybmVycywgW3R5cGVdKVxuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdFZhbHVlID0gKHZhbDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgdmFsID0gTWF0aC5mbG9vcigrdmFsKVxuICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHN0eWxlVXRpbHMuZXhwYW5kU3R5bGVBcnJheShbdmFsXSlcbiAgICAgIG9uQ2hhbmdlPy4oeyBudW1iZXIsIHVuaXQ6IHZhbHVlLnVuaXQgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbnVtYmVyOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9IFsuLi5udW1iZXJzXVxuICAgICAgbnVtYmVyW2luZGV4XSA9IHZhbFxuICAgICAgb25DaGFuZ2U/Lih7IG51bWJlciwgdW5pdCB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVuaXRDaGFuZ2UgPSAodW5pdCkgPT4ge1xuICAgIG9uQ2hhbmdlPy4oe1xuICAgICAgbnVtYmVyOiB2YWx1ZS5udW1iZXIsXG4gICAgICB1bml0XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiA8SW5wdXRHcm91cCBjc3M9e3N0eWxlc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdlZGdlcy1udW1iZXInLCBjbGFzc05hbWUpfT5cbiAgICB7IWRldGFjaGVkICYmIChcbiAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgIG1pbj17bWlufVxuICAgICAgICBtYXg9e21heH1cbiAgICAgICAgdGl0bGU9e3VuaWZpZWRUaXRsZX1cbiAgICAgICAgYXJpYS1sYWJlbD17dW5pZmllZEFyaWFMYWJlbH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICB2YWx1ZT17bnVtYmVycz8uWzBdfVxuICAgICAgICBvbkFjY2VwdFZhbHVlPXsodmFsOiBudW1iZXIpID0+IHsgaGFuZGxlQWNjZXB0VmFsdWUodmFsLCAwKSB9fVxuICAgICAgICBzaG93SGFuZGxlcnM9e2ZhbHNlfVxuICAgICAgLz5cbiAgICApfVxuICAgIHtkZXRhY2hlZCAmJlxuICAgICAgc2lkZXMubWFwKChzaWRlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRyYW5zbGF0ZShzaWRlKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAga2V5PXtzaWRlfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGl0bGV9XG4gICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdmFsdWU9e251bWJlcnNbaW5kZXhdfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KHZhbDogbnVtYmVyKSA9PiB7IGhhbmRsZUFjY2VwdFZhbHVlKHZhbCwgaW5kZXgpIH19XG4gICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7IG9uQWN0aXZhdGVkQ2hhbmdlKGluZGV4KSB9fVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7IG9uQWN0aXZhdGVkQ2hhbmdlKC0xKSB9fVxuICAgICAgICAgICAgc2hvd0hhbmRsZXJzPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8ZGl2IGNsYXNzTmFtZT0ndW5pdC1zZWxlY3Rvci1jb24nPlxuICAgICAgPFVuaXRTZWxlY3RvclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHVuaXRzPXt1bml0c31cbiAgICAgICAgdmFsdWU9e3ZhbHVlLnVuaXR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVbml0Q2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9JbnB1dEdyb3VwPlxufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjbGFzc05hbWVzLCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEZvdXJTaWRlc1VuaXQsIHN0eWxlVXRpbHMsIERpc3RhbmNlVW5pdHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgRWRnZXNOdW1iZXIsIHR5cGUgRWRnZXNOdW1iZXJQcm9wcyB9IGZyb20gJy4vZWRnZXMtbnVtYmVyJ1xuaW1wb3J0IHsgRWRnZXNCbG9jayB9IGZyb20gJy4vZWRnZXMtYmxvY2snXG5cbi8qKlxuICogVGhlIGBGb3VyRWRnZXNgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb3VyRWRnZXNQcm9wcyBleHRlbmRzIE9taXQ8RWRnZXNOdW1iZXJQcm9wcywgJ29uQWN0aXZhdGVkQ2hhbmdlJyB8ICdkZXRhY2hlZCc+IHtcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHN0eWxlIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU/OiBhbnlcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYWxsb3cgdGhlIHZhbHVlcyBvZiB0aGUgZm91ciBzaWRlcyB0byBiZSBzZXQgc2VwYXJhdGVseS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2VwYXJhdGVkPzogYm9vbGVhblxufVxuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICAuamltdS1udW1lcmljLWlucHV0IHtcbiAgICB6LWluZGV4OiAwO1xuICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICB9XG4gIC5pbnB1dC1ncm91cC1hcHBlbmQge1xuICAgIHotaW5kZXg6IDA7XG4gICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIC5idG4tZ3JvdXAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgfVxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICAuaW5wdXQtZ3JvdXAtYXBwZW5kIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IERlZmF1bHRWYWx1ZTogRm91clNpZGVzVW5pdCA9IHtcbiAgbnVtYmVyOiBbMCwgMCwgMCwgMF0sXG4gIHVuaXQ6IERpc3RhbmNlVW5pdHMuUElYRUxcbn1cblxuY29uc3QgZGVmYXVsdFVuaXRzID0gW0Rpc3RhbmNlVW5pdHMuUElYRUwsIERpc3RhbmNlVW5pdHMuUEVSQ0VOVEFHRV1cblxuY29uc3QgdXBncmFkZVZhbHVlID0gKHByb3BWYWx1ZTogRm91clNpZGVzVW5pdCkgPT4ge1xuICBsZXQgdmFsdWUgPSBwcm9wVmFsdWVcbiAgaWYgKHByb3BWYWx1ZT8ubnVtYmVyICYmIHByb3BWYWx1ZS5udW1iZXIubGVuZ3RoICE9PSA0KSB7XG4gICAgY29uc3QgbnVtYmVycyA9IHN0eWxlVXRpbHMuZXhwYW5kU3R5bGVBcnJheShwcm9wVmFsdWUubnVtYmVyKVxuICAgIHZhbHVlID0ge1xuICAgICAgLi4udmFsdWUsXG4gICAgICBudW1iZXI6IG51bWJlcnNcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmNvbnN0IGlzRGV0YWNoZWQgPSAodmFsdWU6IEZvdXJTaWRlc1VuaXQpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gdmFsdWU/Lm51bWJlclxuICBpZiAoIW51bWJlcikgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IHVuaWZpZWQgPSBudW1iZXJbMF0gPT09IG51bWJlclsxXSAmJlxuICAgIG51bWJlclsxXSA9PT0gbnVtYmVyWzJdICYmIG51bWJlclsyXSA9PT0gbnVtYmVyWzNdXG4gIHJldHVybiAhdW5pZmllZFxufVxuXG4vKipcbiAqIFRoZSBgRm91ckVkZ2VzYCBjb21wb25lbnQgYWxsb3dzIHVzZXJzIHRvIHNldCB0aGUgdmFsdWVzIG9mIGZvdXIgZWRnZXMgb3IgZm91ciBjb3JuZXJzIG9mIHRoZSBib3guXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEZvdXJFZGdlcyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBGb3VyRWRnZXMgPSAocHJvcHM6IEZvdXJFZGdlc1Byb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlID0gJ2VkZ2UnLFxuICAgIHZhbHVlOiBwcm9wVmFsdWUgPSBEZWZhdWx0VmFsdWUsXG4gICAgdW5pdHMgPSBkZWZhdWx0VW5pdHMsXG4gICAgbWluID0gMCxcbiAgICBtYXggPSAxMDAsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBjbGFzc05hbWUsXG4gICAgc3R5bGUsXG4gICAgb25DaGFuZ2UsXG4gICAgc2VwYXJhdGVkID0gdHJ1ZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgdmFsdWUgPSB1cGdyYWRlVmFsdWUocHJvcFZhbHVlKVxuICBjb25zdCBudW1iZXJzID0gdmFsdWUubnVtYmVyXG4gIGNvbnN0IHVuaXQgPSB2YWx1ZS51bml0XG4gIGNvbnN0IFtkZXRhY2hlZCwgc2V0RGV0YWNoZWRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gaXNEZXRhY2hlZCh2YWx1ZSkpXG4gIGNvbnN0IFthY3RpdmF0ZWQsIHNldEFjdGl2YXRlZF0gPSBSZWFjdC51c2VTdGF0ZTwtMSB8IDAgfCAxIHwgMiB8IDM+KC0xKVxuXG4gIGNvbnN0IGhhbmRsZURldGFjaGVkQ2hhbmdlID0gKGRldGFjaGVkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFkZXRhY2hlZCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gc3R5bGVVdGlscy5leHBhbmRTdHlsZUFycmF5KFtudW1iZXJzWzBdXSlcbiAgICAgIG9uQ2hhbmdlPy4oeyBudW1iZXIsIHVuaXQgfSlcbiAgICB9XG4gICAgc2V0RGV0YWNoZWQoZGV0YWNoZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3R5bGUtc2V0dGluZy0tZm91ci1lZGdlcycsIGNsYXNzTmFtZSl9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjc3M9e3N0eWxlc31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCBkLWZsZXgnPlxuICAgICAgICB7c2VwYXJhdGVkICYmIChcbiAgICAgICAgICA8RWRnZXNCbG9ja1xuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIGRldGFjaGVkPXtkZXRhY2hlZH1cbiAgICAgICAgICAgIGFjdGl2YXRlZD17YWN0aXZhdGVkfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgb25EZXRhY2hlZENoYW5nZT17aGFuZGxlRGV0YWNoZWRDaGFuZ2V9IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxFZGdlc051bWJlclxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgZGV0YWNoZWQ9e2RldGFjaGVkfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgdW5pdHM9e3VuaXRzfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgIG9uQWN0aXZhdGVkQ2hhbmdlPXtzZXRBY3RpdmF0ZWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBJbnRsU2hhcGUsIGpzeCwgaW5qZWN0SW50bCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgTnVtZXJpY0lucHV0LCBJbnB1dEdyb3VwLCBCdXR0b24sIHR5cGUgRm91clNpZGVzVW5pdCwgRGlzdGFuY2VVbml0cywgdHlwZSBCb3JkZXJTaWRlcywgU2lkZXMsIHN0eWxlVXRpbHMsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBVbml0U2VsZWN0b3IgfSBmcm9tICcuL3VuaXQtaW5wdXQnXG5pbXBvcnQgeyBMb2NrT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9sb2NrJ1xuaW1wb3J0IHsgVW5sb2NrT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci91bmxvY2snXG5cbi8qKlxuICogVGhlIGBGb3VyU2lkZXNgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGb3VyU2lkZXNQcm9wcyB7XG4gIC8qKlxuICAgKiBTZWxlY3RhYmxlIHVuaXRzOiBweCwgcmVtLCBlbSwgJS5cbiAgICogQGRlZmF1bHQgWydweCcsJyUnXVxuICAgKi9cbiAgdW5pdHM/OiBEaXN0YW5jZVVuaXRzW11cbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGNsYXNzIG5hbWVzIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqIEBkZWZhdWx0IHtudW1iZXI6WzBdLHVuaXQ6cHh9XG4gICAqL1xuICB2YWx1ZT86IEZvdXJTaWRlc1VuaXRcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBGb3VyU2lkZXNVbml0KSA9PiB2b2lkXG4gIC8qKlxuICAgKiBEaXNhYmxlIGlucHV0IGFuZCBzZWxlY3Rpb24gb2YgYWxsIHRoZSBpbnB1dCBib3hlcy5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGRpc2FibGVkPzogYm9vbGVhblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gdmFsdWUgdG8gYWNjZXB0IGZvciBhbGwgdGhlIGlucHV0IGJveGVzLlxuICAgKiBAZGVmYXVsdCAwXG4gICAqL1xuICBtaW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHZhbHVlIHRvIGFjY2VwdCBmb3IgYWxsIHRoZSBpbnB1dCBib3hlcy5cbiAgICogQGRlZmF1bHQgMTAwXG4gICAqL1xuICBtYXg/OiBudW1iZXJcbiAgLyoqXG4gICAqIFdXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIHByb21wdCB0ZXh0LlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICBzaG93VGlwPzogYm9vbGVhblxuICAvKipcbiAgICogRGVmaW5lIHRoZSBsYWJlbCBmb3IgdGhlIGZvdXIgaW5wdXQgYm94ZXMuXG4gICAqIEBkZWZhdWx0IFsnVCcsJ1InLCdCJywnTCddXG4gICAqL1xuICBzaWRlcz86IEFycmF5PEJvcmRlclNpZGVzIHwgU2lkZXM+XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGJpbmRBbGw6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBpbnRsPzogSW50bFNoYXBlXG59XG5cbi8qKlxuICogVGhlIGBGb3VyU2lkZXNgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSB2YWx1ZXMgb2YgZm91ciBlZGdlcyBvciBmb3VyIGNvcm5lcnMgb2YgdGhlIGJveC5cbiAqIEBkZXByZWNhdGVkXG4gKiBVc2UgYEZvdXJFZGdlc2Agb3IgYFBhZGRpbmdgIG9yIGBCb3JkZXJSYWRpdXNTZXR0aW5nYCBjb25wb25lbnRzIGluc3RlYWQuXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgRm91clNpZGVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIF9Gb3VyU2lkZXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZvdXJTaWRlc1Byb3BzICYgRXh0cmFQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogUGFydGlhbDxGb3VyU2lkZXNQcm9wcz4gPSB7XG4gICAgdW5pdHM6IFtEaXN0YW5jZVVuaXRzLlBJWEVMLCBEaXN0YW5jZVVuaXRzLlBFUkNFTlRBR0VdLFxuICAgIHNob3dUaXA6IHRydWUsXG4gICAgdmFsdWU6IHtcbiAgICAgIG51bWJlcjogWzBdIGFzIGFueSxcbiAgICAgIHVuaXQ6IERpc3RhbmNlVW5pdHMuUElYRUxcbiAgICB9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgc2lkZXM6IFtTaWRlcy5ULCBTaWRlcy5SLCBTaWRlcy5CLCBTaWRlcy5MXSxcbiAgICBvbkNoYW5nZTogKCkgPT4geyB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmluZEFsbDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBfb25TaWRlVmFsdWVDaGFuZ2UgPSAodmFsLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBiaW5kQWxsIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGJpbmRBbGwpIHtcbiAgICAgIHRoaXMuX29uQWxsU2lkZXNWYWx1ZUNoYW5nZSh2YWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHN0eWxlQXJyYXkgPSBzdHlsZVV0aWxzLmV4cGFuZFN0eWxlQXJyYXkodmFsdWUubnVtYmVyKVxuICAgICAgc3R5bGVBcnJheVtpbmRleF0gPSB2YWxcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICBudW1iZXI6IHN0eWxlQXJyYXksXG4gICAgICAgIHVuaXQ6IHZhbHVlLnVuaXRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX29uVW5pdENoYW5nZSA9IChuZXdVbml0KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChuZXdVbml0ICE9PSB2YWx1ZS51bml0KSB7XG4gICAgICBjb25zdCBzdHlsZUFycmF5ID0gc3R5bGVVdGlscy5leHBhbmRTdHlsZUFycmF5KHZhbHVlLm51bWJlcilcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICBudW1iZXI6IHN0eWxlQXJyYXksXG4gICAgICAgIHVuaXQ6IG5ld1VuaXRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgX29uQWxsU2lkZXNWYWx1ZUNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IG51bWJlcjogW3ZhbHVlXSBhcyBhbnksIHVuaXQ6IHRoaXMucHJvcHMudmFsdWUudW5pdCB9KVxuICB9XG5cbiAgX3RvZ2dsZUJpbmRBbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5iaW5kQWxsKSB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCBzdHlsZUFycmF5ID0gc3R5bGVVdGlscy5leHBhbmRTdHlsZUFycmF5KHZhbHVlLm51bWJlcilcbiAgICAgIHRoaXMuX29uQWxsU2lkZXNWYWx1ZUNoYW5nZShzdHlsZUFycmF5WzBdKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGJpbmRBbGw6ICF0aGlzLnN0YXRlLmJpbmRBbGxcbiAgICB9KVxuICB9XG5cbiAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogaWQsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXNbaWRdIH0pIDogaWRcbiAgfVxuXG4gIGhhbmRsZUFjY2VwdFZhbHVlID0gKHZhbHVlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5fb25TaWRlVmFsdWVDaGFuZ2UodmFsdWUsIGluZGV4KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCB1bml0cywgc2hvd1RpcCwgc2lkZXMsIG1pbiwgbWF4LCBkaXNhYmxlZCwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBiaW5kQWxsIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgcGFkZGluZyA9IHN0eWxlVXRpbHMuZXhwYW5kU3R5bGVBcnJheSh2YWx1ZS5udW1iZXIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3N0eWxlLXNldHRpbmctLWZvdXItc2lkZXMnLCBjbGFzc05hbWUpfT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICB7c2lkZXMubWFwKChzaWRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMubmxzKHNpZGUpXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Nob3dUaXAgPyBzaWRlIDogJyd9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFkZGluZ1tpbmRleF19XG4gICAgICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXt2YWwgPT4geyB0aGlzLmhhbmRsZUFjY2VwdFZhbHVlKHZhbCwgaW5kZXgpIH19XG4gICAgICAgICAgICAgICAgICBzaG93SGFuZGxlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5pdC1zZWxlY3Rvci1jb24nPlxuICAgICAgICAgICAgICA8VW5pdFNlbGVjdG9yIHVuaXRzPXt1bml0c30gdmFsdWU9e3ZhbHVlLnVuaXR9IG9uQ2hhbmdlPXt0aGlzLl9vblVuaXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0lucHV0R3JvdXA+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uXG4gICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9jay1idG4nXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVCaW5kQWxsfVxuICAgICAgICAgICAgdGl0bGU9e2JpbmRBbGwgPyB0aGlzLm5scygnbG9jaycpIDogdGhpcy5ubHMoJ3VubG9jaycpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YmluZEFsbCA/IHRoaXMubmxzKCdsb2NrJykgOiB0aGlzLm5scygndW5sb2NrJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2JpbmRBbGwgPyA8TG9ja091dGxpbmVkIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGRpc2FibGVkOiBkaXNhYmxlZCB9KX0gLz4gOiA8VW5sb2NrT3V0bGluZWQgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgZGlzYWJsZWQ6IGRpc2FibGVkIH0pfSAvPn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Nob3dUaXAgJiYgPGRpdiBjbGFzc05hbWU9J3RpcHMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXAtZ3JvdXAnPlxuICAgICAgICAgICAge3NpZGVzLm1hcCgoc2lkZSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0gdGl0bGU9e3RoaXMubmxzKHNpZGUpfT57c2lkZX08L2Rpdj4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogVGhlIGBGb3VyU2lkZXNgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSB2YWx1ZXMgb2YgZm91ciBlZGdlcyBvciBmb3VyIGNvcm5lcnMgb2YgdGhlIGJveC5cbiAqIEBkZXByZWNhdGVkXG4gKiBVc2UgYEZvdXJFZGdlc2Agb3IgYFBhZGRpbmdgIG9yIGBCb3JkZXJSYWRpdXNTZXR0aW5nYCBjb25wb25lbnRzIGluc3RlYWQuXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgRm91clNpZGVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEZvdXJTaWRlcyA9IHdpdGhTdHlsZXMoaW5qZWN0SW50bChfRm91clNpZGVzKSwgJ0ZvdXJTaWRlcycpXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzLCBjbGFzc05hbWVzLCBSZWFjdCwgSG92ZXJUeXBlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBBcnJvd0Rvd25PdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctZG93bidcblxuY29uc3QgZWZmZWN0cyA9IFt7XG4gIG5hbWU6IEhvdmVyVHlwZS5Ob25lLFxuICB0eXBlOiAnbm9uZSdcbn0sIHtcbiAgbmFtZTogSG92ZXJUeXBlLlNrZXcsXG4gIHR5cGU6ICdza2V3JyxcbiAgeDogLTEwLFxuICB5OiAwXG59LCB7XG4gIG5hbWU6IEhvdmVyVHlwZS5Hcm93LFxuICB0eXBlOiAnc2NhbGUnLFxuICB4OiAxMTAsXG4gIHk6IDExMFxufSwge1xuICBuYW1lOiBIb3ZlclR5cGUuU2hyaW5rLFxuICB0eXBlOiAnc2NhbGUnLFxuICB4OiA5MCxcbiAgeTogOTBcbn0sIHtcbiAgbmFtZTogSG92ZXJUeXBlLkZsb2F0LFxuICB0eXBlOiAndHJhbnNsYXRlJyxcbiAgeDogMCxcbiAgeTogMTBcbn0sIHtcbiAgbmFtZTogSG92ZXJUeXBlLlNpbmssXG4gIHR5cGU6ICd0cmFuc2xhdGUnLFxuICB4OiAwLFxuICB5OiAtMTBcbn0sIHtcbiAgbmFtZTogSG92ZXJUeXBlLlJvdGF0ZSxcbiAgdHlwZTogJ3JvdGF0ZScsXG4gIGRlZzogM1xufSwge1xuICBuYW1lOiBIb3ZlclR5cGUuU3BpbixcbiAgdHlwZTogJ3JvdGF0ZScsXG4gIGRlZzogLTcyMFxufSwge1xuICBuYW1lOiBIb3ZlclR5cGUuRm9yd2FyZCxcbiAgdHlwZTogJ3RyYW5zbGF0ZScsXG4gIHg6IDEwLFxuICB5OiAwXG59LCB7XG4gIG5hbWU6IEhvdmVyVHlwZS5CYWNrd2FyZCxcbiAgdHlwZTogJ3RyYW5zbGF0ZScsXG4gIHg6IC0xMCxcbiAgeTogMFxufSwge1xuICBuYW1lOiBIb3ZlclR5cGUuT3BhY2l0eSxcbiAgdHlwZTogJ29wYWNpdHknLFxuICBvcGFjaXR5OiA1MFxufV1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdHlwZTogSG92ZXJUeXBlXG4gIHNldHRpbmc/OiB7XG4gICAgc2tld1g/OiBudW1iZXJcbiAgICBza2V3WT86IG51bWJlclxuICAgIHNjYWxlWD86IG51bWJlclxuICAgIHNjYWxlWT86IG51bWJlclxuICAgIHJvdGF0ZT86IG51bWJlclxuICAgIG9mZnNldFg/OiBudW1iZXJcbiAgICBvZmZzZXRZPzogbnVtYmVyXG4gICAgb3BhY2l0eT86IG51bWJlclxuICB9XG4gIG9uVHlwZUNoYW5nZTogKHR5cGU6IEhvdmVyVHlwZSkgPT4gdm9pZFxuICBvblNldHRpbmdDaGFuZ2U6IChwcm9wczogYW55KSA9PiB2b2lkXG59XG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICAuYW5pbWF0aW9uLWNhcmRzIHtcbiAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXJvdy1nYXA6IDEycHg7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMnB4O1xuICB9XG5cbiAgLnNlcGFyYXRvciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtNTAwKTtcbiAgfVxuXG4gIC5jYXJkLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmbGV4OiAwIDAgNDUlO1xuXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC0yMDApO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQgLmNhcmQtY29udGVudCB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS02MDApO1xuICAgIH1cblxuICAgIC5jYXJkLW5hbWUge1xuICAgICAgbWF4LXdpZHRoOiA5MHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBjb2xvcjogdmFyKC0tZGFyay04MDApO1xuICAgICAgLmNhcmQtbmFtZS1jb250ZW50IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBmdW5jdGlvbiBIb3ZlckVmZmVjdCAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3QgeyB0eXBlID0gSG92ZXJUeXBlLk5vbmUsIG9uVHlwZUNoYW5nZSB9ID0gcHJvcHNcblxuICBjb25zdCBvbkhvdmVyRWZmZWN0VHlwZUNoYW5nZSA9IGhvb2tzLnVzZUV2ZW50Q2FsbGJhY2soKG5ld1R5cGUpID0+IHtcbiAgICBvblR5cGVDaGFuZ2UobmV3VHlwZSlcbiAgfSlcblxuICBjb25zdCBjcmVhdGVDYXJkID0gKGluZm86IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBjYXJkLWl0ZW0nLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IGluZm8ubmFtZSA9PT0gdHlwZVxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb25cbiAgICAgICAgICByb2xlPSdvcHRpb24nXG4gICAgICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKGluZm8ubmFtZS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpbmZvLm5hbWUgPT09IHR5cGV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBjYXJkLWNvbnRlbnQgYm9yZGVyLTAnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25Ib3ZlckVmZmVjdFR5cGVDaGFuZ2UoaW5mby5uYW1lKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0Rvd25PdXRsaW5lZCBzaXplPXs3Mn0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLW5hbWUgZmxleC1ncm93LTEgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IG10LTEnPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtY2VudGVyIGNhcmQtbmFtZS1jb250ZW50J1xuICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZShpbmZvLm5hbWUudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RyYW5zbGF0ZShpbmZvLm5hbWUudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfT5cbiAgICAgIDxCdXR0b25Hcm91cCByb2xlPSdsaXN0Ym94JyBjbGFzc05hbWU9J2FuaW1hdGlvbi1jYXJkcyc+XG4gICAgICAgIHtlZmZlY3RzLm1hcCgoaW5mbywgaW5kZXgpID0+IGNyZWF0ZUNhcmQoaW5mbywgaW5kZXgpKX1cbiAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYm9yZGVyLXNldHRpbmcnXG5leHBvcnQgKiBmcm9tICcuL2JveC1zaGFkb3ctc2V0dGluZydcbmV4cG9ydCAqIGZyb20gJy4vZm91ci1zaWRlcydcbmV4cG9ydCAqIGZyb20gJy4vdW5pdC1pbnB1dCdcbmV4cG9ydCAqIGZyb20gJy4vZm9udC1mYW1pbHktc2VsZWN0b3InXG5leHBvcnQgKiBmcm9tICcuL2lucHV0LXJhdGlvJ1xuZXhwb3J0ICogZnJvbSAnLi9ib3JkZXItcmFkaXVzLXNldHRpbmcnXG5leHBvcnQgKiBmcm9tICcuL3RleHQtc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3NpemUtZWRpdG9yJ1xuZXhwb3J0ICogZnJvbSAnLi9iYWNrZ3JvdW5kLXNldHRpbmcnXG5leHBvcnQgKiBmcm9tICcuL3RoZW1lLWJhY2tncm91bmQtc2VjdGlvbidcbmV4cG9ydCAqIGZyb20gJy4vdGhlbWUtYm9yZGVyLXNlY3Rpb24nXG5leHBvcnQgKiBmcm9tICcuL3RoZW1lLWJveC1zaGFkb3ctc2VjdGlvbidcbmV4cG9ydCAqIGZyb20gJy4vbmF2aWdhdGlvbi1zdHlsZSdcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uLXNldHRpbmcnXG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRpb24tc2V0dGluZydcbmV4cG9ydCAqIGZyb20gJy4vbW91c2UtYWN0aW9uLXNldHRpbmcnXG5leHBvcnQgKiBmcm9tICcuL2xpbmUtc3R5bGUtc2VsZWN0b3InXG5leHBvcnQgKiBmcm9tICcuL2ZvdXItZWRnZXMnXG5leHBvcnQgKiBmcm9tICcuL3BhZGRpbmcnXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzLCBqc3gsIGNzcywgaW5qZWN0SW50bCwgdHlwZSBJbnRsU2hhcGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBOdW1lcmljSW5wdXQsIElucHV0R3JvdXAsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5cbi8qKlxuICogVGhlIElucHV0UmF0aW8gY29tcG9uZW50IHByb3BzLlxuICovXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgcmF0aW8gdmFsdWUuIENhbiBiZSBhIG51bWJlciBvZiB3aWR0aC9oZWlnaHQgb3Igc3RyaW5nIGxpa2UgJzQ6MydcbiAgICovXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmdcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzYWJsZSB0aGUgaW5wdXQuXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlPzogYW55XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBpbnRsOiBJbnRsU2hhcGVcbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHJhdGlvIHZhbHVlIGNoYW5nZXMuXG4gICAqIEBldmVudFxuICAgKi9cbiAgb25DaGFuZ2U/OiAocmF0aW86IHN0cmluZykgPT4gdm9pZFxufVxuXG5jb25zdCBsYWJlbFN0eWxlID0gY3NzYFxuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLTYwMCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNsYXNzIF9JbnB1dFJhdGlvIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcywgYW55PiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge1xuICAgIHZhbHVlOiAxLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4geyB9XG4gIH1cblxuICB3aWR0aDogbnVtYmVyID0gMTAwXG4gIGhlaWdodDogbnVtYmVyID0gMTAwXG5cbiAgb25XaWR0aENoYW5nZSA9ICh2YWw6IG51bWJlcikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoYCR7dmFsfToke3RoaXMuaGVpZ2h0fWApXG4gIH1cblxuICBvbkhlaWdodENoYW5nZSA9ICh2YWw6IG51bWJlcikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoYCR7dGhpcy53aWR0aH06JHt2YWx9YClcbiAgfVxuXG4gIC8vIHJhdGlvIGlzIGhlaWdodC93aWR0aFxuICBwYXJzZUFzcGVjdFJhdGlvIChyYXRpbzogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiByYXRpbyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMud2lkdGggPSAxMDBcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZChyYXRpbyAqIDEwMClcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByYXRpbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gcmF0aW8uc3BsaXQoJzonKVxuICAgICAgdGhpcy53aWR0aCA9IHBhcnNlSW50KGl0ZW1zWzBdLCAxMClcbiAgICAgIHRoaXMuaGVpZ2h0ID0gcGFyc2VJbnQoaXRlbXNbMV0sIDEwKVxuICAgIH1cbiAgfVxuXG4gIGZvcm1hdE1lc3NhZ2UgKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZCwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0gfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdHlsZSwgZGlzYWJsZWQsIHZhbHVlOiByYXRpbyB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMucGFyc2VBc3BlY3RSYXRpbyhyYXRpbylcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0R3JvdXAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzdHlsZS1zZXR0aW5nLS1pbnB1dC1yYXRpbycpfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1jZW50ZXInIHN0eWxlPXt7IHdpZHRoOiAnNDUlJyB9fT5cbiAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICBzaXplPSdzbScgbWluPXsxfSBtYXg9ezEwMH0gdmFsdWU9e2lzTmFOKHRoaXMud2lkdGgpID8gJycgOiB0aGlzLndpZHRofSBzaG93SGFuZGxlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XaWR0aENoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCd3aWR0aCcpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTEgbXQtMSB3LTEwMCcgY3NzPXtsYWJlbFN0eWxlfSB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCd3aWR0aCcpfT5XPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0xMDAgdGV4dC1jZW50ZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAlJyB9fT46PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlcicgc3R5bGU9e3sgd2lkdGg6ICc0NSUnIH19PlxuICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgIHNpemU9J3NtJyBtaW49ezF9IHZhbHVlPXtpc05hTih0aGlzLmhlaWdodCkgPyAnJyA6IHRoaXMuaGVpZ2h0fSBzaG93SGFuZGxlcnM9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25IZWlnaHRDaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnaGVpZ2h0Jyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMSBtdC0xIHctMTAwJyBjc3M9e2xhYmVsU3R5bGV9IHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2hlaWdodCcpfT5IPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgSW5wdXRSYXRpbyA9IGluamVjdEludGw8J2ludGwnLCBQcm9wcz4oX0lucHV0UmF0aW8pXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcywgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiwgdHlwZSBMaW5lVHlwZSwgTm9ybWFsTGluZVR5cGUsIEVzcmlTaW1wbGVMaW5lU3ltYm9sU3R5bGUsIEljb24sIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgZG91YmxlTGluZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvZG91YmxlLWxpbmUuc3ZnJ1xuaW1wb3J0IHNvbGlkTGluZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvc29saWQtbGluZS5zdmcnXG5pbXBvcnQgZG90dGVkTGluZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvZG90dGVkLWxpbmUuc3ZnJ1xuaW1wb3J0IGRhc2hlZExpbmUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2Rhc2hlZC1saW5lLnN2ZydcbmltcG9ydCBkYXNoRG91YmxlRG90TGluZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvZGFzaC1kb3VibGUtZG90LWxpbmUuc3ZnJ1xuaW1wb3J0IGRhc2hEb3RMaW5lIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kYXNoLWRvdC1saW5lLnN2ZydcblxuY29uc3QgTGluZUljb25zID0ge1xuICBkYXNoZWQ6IGRhc2hlZExpbmUsXG4gIGRvdHRlZDogZG90dGVkTGluZSxcbiAgZG91YmxlOiBkb3VibGVMaW5lLFxuICBzb2xpZDogc29saWRMaW5lLFxuICBlc3JpU0xTRGFzaDogZGFzaGVkTGluZSxcbiAgZXNyaVNMU0RvdDogZG90dGVkTGluZSxcbiAgZXNyaVNMU1NvbGlkOiBzb2xpZExpbmUsXG4gIGVzcmlTTFNEYXNoRG90OiBkYXNoRG90TGluZSxcbiAgZXNyaVNMU0Rhc2hEb3REb3Q6IGRhc2hEb3VibGVEb3RMaW5lXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZVN0eWxlUHJvcHMge1xuICAvKipcbiAgICogVG8gcHJvdmlkZSBhIGxhYmVsIGZvciBpbnRlcmFjdGl2ZSBjb21wb25lbnRzIGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgYWNjZXNzaWJsZSBuYW1lIGlzIGNvbXB1dGVkIGZyb20gYW55IHRleHQgY29udGVudCBpbnNpZGUgdGhlIGVsZW1lbnQuXG4gICAqIFdpdGggdGhpcyBwcm9wLCBhIHNyLW9ubHkgRE9NIHdvdWxkIGJlIGNyZWF0ZWQgd2l0aCB0aGlzIGxhYmVsIGJlZm9yZSB2YWx1ZSBET00uXG4gICAqL1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFR3byBzdXBwb3J0ZWQgdHlwZXMsIGBub3JtYWxgIHJlcHJlc2VudHMgY29tbW9uIGxpbmUgdHlwZXMsIGluY2x1ZGluZyBgc29saWRgLCBgZGFzaGVkYCwgYGRvdHRlZGAsIGFuZCBgZG91YmxlYDtcbiAgICogYHN5bWJvbGAgaW5kaWNhdGVzIHRoZSBsaW5lIHR5cGUgc3VwcG9ydGVkIGJ5IGVzcmkgc3ltYm9sLCBpbmNsdWRpbmcgYGVzcmlTTFNTb2xpZGAsIGBlc3JpU0xTRGFzaGAsIGV0Yy5cbiAgICovXG4gIHR5cGU/OiAnbm9ybWFsJyB8ICdzeW1ib2wnXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogTGluZVR5cGVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGNsYXNzIG5hbWUgZm9yIHRoZSBjb250YWluZXIgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogRGVmaW5lcyB0aGUgc3R5bGUgZm9yIHRoZSBjb250YWluZXIgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHN0eWxlPzogYW55XG59XG5cbmV4cG9ydCBjb25zdCBMaW5lU3R5bGVUcmFuc3Rpb25zID0ge1xuICBkYXNoZWQ6ICdkYXNoZWQnLFxuICBkb3R0ZWQ6ICdkb3R0ZWQnLFxuICBkb3VibGU6ICdkb3VibGUnLFxuICBzb2xpZDogJ3NvbGlkJyxcbiAgZXNyaVNMU0Rhc2g6ICdkYXNoZWQnLFxuICBlc3JpU0xTRG90OiAnZG90dGVkJyxcbiAgZXNyaVNMU1NvbGlkOiAnc29saWQnLFxuICBlc3JpU0xTRGFzaERvdDogJ2Rhc2hEb3QnLFxuICBlc3JpU0xTRGFzaERvdERvdDogJ2Rhc2hEb3VibGVEb3QnXG59XG5cbmV4cG9ydCBjb25zdCBMaW5lU3R5bGVTZWxlY3RvciA9IChwcm9wczogTGluZVN0eWxlUHJvcHMpID0+IHtcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuXG4gIGNvbnN0IHsgdHlwZSA9ICdub3JtYWwnLCB2YWx1ZSA9ICdzb2xpZCcsIGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2hhbmdlLCAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCB9ID0gcHJvcHNcblxuICBjb25zdCBsaW5lcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGtleXNPZkxpbmUgPSAodHlwZSA9PT0gJ25vcm1hbCcgPyBPYmplY3QudmFsdWVzKE5vcm1hbExpbmVUeXBlKSA6IE9iamVjdC52YWx1ZXMoRXNyaVNpbXBsZUxpbmVTeW1ib2xTdHlsZSkpIGFzIHN0cmluZ1tdXG4gICAgcmV0dXJuIGtleXNPZkxpbmUubWFwKChsaW5lKSA9PiB7XG4gICAgICByZXR1cm4geyBsYWJlbDogdHJhbnNsYXRlKExpbmVTdHlsZVRyYW5zdGlvbnNbbGluZV0pLCB2YWx1ZTogbGluZSB9XG4gICAgfSlcbiAgfSwgW3RyYW5zbGF0ZSwgdHlwZV0pXG5cbiAgY29uc3QgdGl0bGUgPSBsaW5lcy5maW5kKGxpbmUgPT4gbGluZS52YWx1ZSA9PT0gdmFsdWUpPy5sYWJlbFxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIG9uQ2hhbmdlPy4odmFsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgJ3N0eWxlLXNldHRpbmctLWxpbmUtc3R5bGUtc2VsZWN0b3InKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxTZWxlY3Qgc2l6ZT0nc20nIG5hbWU9J2xpbmVUeXBlJyB2YWx1ZT17dmFsdWV9IHRpdGxlPXt0aXRsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD17YXJpYUxhYmVsfT5cbiAgICAgICAge2xpbmVzLm1hcCgobGluZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8T3B0aW9uIGNsYXNzTmFtZT0ncHktMCcga2V5PXtpbmRleH0gdGl0bGU9e2xpbmUubGFiZWx9IHZhbHVlPXtsaW5lLnZhbHVlfSBsYWJlbD17bGluZS5sYWJlbH0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyB3aWR0aDogNDYgfX0+PEljb24gY2xhc3NOYW1lPSd3LTEwMCcgaWNvbj17TGluZUljb25zW2xpbmUudmFsdWVdfT48L0ljb24+PC9zcGFuPlxuICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvU2VsZWN0PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgSG92ZXJUeXBlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFBsYXlPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsYXknXG5pbXBvcnQgeyBJbmZvT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL3N1Z2dlc3RlZC9pbmZvJ1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBUb29sdGlwLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgU2lkZVBvcHBlciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgSG92ZXJFZmZlY3QgfSBmcm9tICcuL2hvdmVyLWVmZmVjdHMnXG5cbmNvbnN0IGFuaW1hdGlvbkljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fbm9uZS5zdmcnKVxuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzJweDtcblxuICAuaW1nLXRpcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJiwgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC0yMDApO1xuICAgIH1cbiAgfVxuXG4gIC5hbWluLWljb25zICB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDI2cHg7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAuNXJlbTtcbiAgICAuamltdS1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbiAgLmFuaW0tbGFiZWxzIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIC5hbmltLWxhYmVsIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IHNpZGVQb3BwZXJTdHlsZSA9IGNzc2BcbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICB9XG4gIC5zaWRlLXBvcHBlci10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstNjAwKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmVmZmVjdC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstNjAwKTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLnNpZGUtY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5gXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHR5cGU6IEhvdmVyVHlwZVxuICBzZXR0aW5nOiBhbnlcbiAgb25DaGFuZ2U6IChob3ZlclNldHRpbmcpID0+IHZvaWRcbiAgb25QcmV2aWV3Q2xpY2s6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1vdXNlQWN0aW9uU2V0dGluZyAocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgdHlwZSA9IEhvdmVyVHlwZS5Ob25lLCBzZXR0aW5nLCBvbkNoYW5nZSwgb25QcmV2aWV3Q2xpY2sgfSA9IHByb3BzXG4gIGNvbnN0IFtzaG93UG9wcGVyLCBzZXRTaG93UG9wcGVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBidXR0b25SZWYgPSBSZWFjdC51c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KClcbiAgY29uc3Qgc2lkZVBvcHBlclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG5cbiAgY29uc3QgdG9nZ2xlU2lkZVBhbmVsID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dQb3BwZXIoIXNob3dQb3BwZXIpXG4gIH0sIFtzaG93UG9wcGVyXSlcblxuICBjb25zdCBoYW5kbGVUeXBlQ2hhbmdlID0gaG9va3MudXNlRXZlbnRDYWxsYmFjaygobmV3VHlwZTogSG92ZXJUeXBlKSA9PiB7XG4gICAgb25DaGFuZ2UoeyB0eXBlOiBuZXdUeXBlIH0pXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlU2V0dGluZ0NoYW5nZSA9IGhvb2tzLnVzZUV2ZW50Q2FsbGJhY2soKG5ld1NldHRpbmcpID0+IHtcbiAgICBvbkNoYW5nZSh7IHR5cGUsIHNldHRpbmc6IG5ld1NldHRpbmcgfSlcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhbmltYS1ib3ggZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyJ1xuICAgICAgICBjc3M9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPSdpbWctdGlwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItMCdcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlUGFuZWx9XG4gICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSh0eXBlLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSh0eXBlLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgIGljb25cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltLWljb24nPlxuICAgICAgICAgICAgPEljb24gaWNvbj17YW5pbWF0aW9uSWNvbn0gc2l6ZT17NDh9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1sLTIgaC0xMDAgZmxleC1ncm93LTEnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltLWxhYmVscyBkLWZsZXgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW0tbGFiZWwnPlxuICAgICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRlKHR5cGUudG9Mb3dlckNhc2UoKSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17dHJhbnNsYXRlKCdob3ZlcicpfT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncC0wJ1xuICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcbiAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbmZvT3V0bGluZWQgc2l6ZT0nbScvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYW1pbi1pY29ucyB3LTEwMCcgcmVmPXtzaWRlUG9wcGVyUmVmfT5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nc20nIHJlZj17YnV0dG9uUmVmfSBvbkNsaWNrPXt0b2dnbGVTaWRlUGFuZWx9IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZScgdGl0bGU9e3RyYW5zbGF0ZSgnY2hhbmdlJyl9PlxuICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdjaGFuZ2UnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3RyYW5zbGF0ZSgncHJldmlldycpfSBwbGFjZW1lbnQ9J2JvdHRvbSc+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9J2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0eXBlID09IG51bGwgfHwgdHlwZSA9PT0gSG92ZXJUeXBlLk5vbmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblByZXZpZXdDbGlja31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UGxheU91dGxpbmVkIHNpemU9J3MnIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93UG9wcGVyICYmIChcbiAgICAgICAgPFNpZGVQb3BwZXJcbiAgICAgICAgICBpc09wZW5cbiAgICAgICAgICBjc3M9e3NpZGVQb3BwZXJTdHlsZX1cbiAgICAgICAgICBwb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAgdG9nZ2xlPXt0b2dnbGVTaWRlUGFuZWx9XG4gICAgICAgICAgdHJpZ2dlcj17c2lkZVBvcHBlclJlZi5jdXJyZW50fVxuICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ2hvdmVyJyl9XG4gICAgICAgICAgYmFja1RvRm9jdXNOb2RlPXtidXR0b25SZWY/LmN1cnJlbnR9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZS1jb250ZW50IHB0LTInPlxuICAgICAgICAgICAgPEhvdmVyRWZmZWN0IHR5cGU9e3R5cGV9IHNldHRpbmc9e3NldHRpbmd9IG9uVHlwZUNoYW5nZT17aGFuZGxlVHlwZUNoYW5nZX0gb25TZXR0aW5nQ2hhbmdlPXtoYW5kbGVTZXR0aW5nQ2hhbmdlfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2lkZVBvcHBlcj5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIHBvbGlzaGVkLCBkZWZhdWx0TWVzc2FnZXMsIEltbXV0YWJsZSwgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBzdHlsZVV0aWxzLCB0eXBlIEljb25CdXR0b25TdHlsZXMsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11aURlZmF1bHRNZXNzYWdlIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXIgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlcidcbmltcG9ydCB7IFRleHRTdHlsZSB9IGZyb20gJy4uL3RleHQtc3R5bGUnXG5pbXBvcnQgeyBCb3JkZXJTZXR0aW5nIH0gZnJvbSAnLi4vYm9yZGVyLXNldHRpbmcnXG5pbXBvcnQgeyBCb3JkZXJSYWRpdXNTZXR0aW5nIH0gZnJvbSAnLi4vYm9yZGVyLXJhZGl1cy1zZXR0aW5nJ1xuaW1wb3J0IHsgU2l6ZUNvbG9yU2V0dGluZyB9IGZyb20gJy4uL3RleHQtc3R5bGUvc2l6ZS1jb2xvci1zZXR0aW5nJ1xuaW1wb3J0IHsgdXNlVGhlbWUyIH0gZnJvbSAnamltdS10aGVtZSdcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25TdHlsZVNldHRpbmdQcm9wcyB7XG4gIHZhcmlhbnQ/OiBJY29uQnV0dG9uU3R5bGVzXG4gIG9ubHlCb3JkZXJDb2xvcj86IGJvb2xlYW5cbiAgb25DaGFuZ2U/OiAocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZFxuICBpY29uPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uU3R5bGVTZXR0aW5nID0gKHByb3BzOiBCdXR0b25TdHlsZVNldHRpbmdQcm9wcykgPT4ge1xuICBjb25zdCBhcHBUaGVtZSA9IHVzZVRoZW1lMigpXG4gIGNvbnN0IHsgb25seUJvcmRlckNvbG9yLCBpY29uOiBzaG93SWNvbiwgb25DaGFuZ2UsIHZhcmlhbnQgfSA9IHByb3BzXG4gIGNvbnN0IHsgYm9sZCwgaXRhbGljLCB1bmRlcmxpbmUsIHN0cmlrZSwgY29sb3IsIGJnLCBzaXplLCBib3JkZXIsIGJvcmRlclJhZGl1cywgaWNvbiB9ID0gdmFyaWFudCB8fCB7fVxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihqaW11aURlZmF1bHRNZXNzYWdlLCBkZWZhdWx0TWVzc2FnZXMpXG5cbiAgY29uc3QgcmFkaXVzID0gcG9saXNoZWQuZ2V0VmFsdWVBbmRVbml0KHN0eWxlVXRpbHMucmVtVG9QaXhlbChib3JkZXJSYWRpdXMgfHwgJzByZW0nKSlcbiAgY29uc3QgdmFsdWUgPSBJbW11dGFibGUoeyBudW1iZXI6IFtyYWRpdXM/LlswXV0gYXMgYW55LCB1bml0OiByYWRpdXM/LlsxXSB9KVxuICBjb25zdCBoYW5kbGVCb3JkZXJDaGFuZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIGtleSA9IGtleSA9PT0gJ3NpemUnID8gJ3dpZHRoJyA6IGtleVxuICAgIG9uQ2hhbmdlKCdib3JkZXInLCB7IC4uLmJvcmRlciwgW2tleV06IHZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2V0dGluZ1JvdyBjbGFzc05hbWU9J210LTQnIGZsb3c9J3dyYXAnIGxhYmVsPXt0cmFuc2xhdGUoJ3RleHQnKX0gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgndGV4dCcpfT5cbiAgICAgICAgPFRleHRTdHlsZSBib2xkPXtib2xkIGFzIGJvb2xlYW59IGl0YWxpYz17aXRhbGljIGFzIGJvb2xlYW59IHVuZGVybGluZT17dW5kZXJsaW5lIGFzIGJvb2xlYW59IHN0cmlrZT17c3RyaWtlIGFzIGJvb2xlYW59IHNpemU9e3NpemV9IGNvbG9yPXtjb2xvcn0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPC9TZXR0aW5nUm93PlxuICAgICAge3Nob3dJY29uICYmIDxTZXR0aW5nUm93IGNsYXNzTmFtZT0nbXQtNCcgZmxvdz0nbm8td3JhcCcgbGFiZWw9e3RyYW5zbGF0ZSgnaWNvbicpfSByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdpY29uJyl9PlxuICAgICAgICA8U2l6ZUNvbG9yU2V0dGluZyBjbGFzc05hbWU9J3ctNTAnIGNvbG9yPXtpY29uPy5jb2xvcn0gc2l6ZT17aWNvbj8uc2l6ZX0gb25DaGFuZ2U9eyhrZXksIHZhbHVlKSA9PiB7IG9uQ2hhbmdlKCdpY29uJywgeyAuLi5pY29uLCBba2V5XTogdmFsdWUgfSkgfX0gLz5cbiAgICAgIDwvU2V0dGluZ1Jvdz59XG4gICAgICA8U2V0dGluZ1JvdyBjbGFzc05hbWU9J210LTQnIGZsb3c9J25vLXdyYXAnIGxhYmVsPXt0cmFuc2xhdGUoJ2JhY2tncm91bmQnKX0gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnYmFja2dyb3VuZCcpfT5cbiAgICAgICAgPFRoZW1lQ29sb3JQaWNrZXIgc3BlY2lmaWNUaGVtZT17YXBwVGhlbWV9IHZhbHVlPXtiZ30gb25DaGFuZ2U9eyh2YWx1ZSkgPT4geyBvbkNoYW5nZSgnYmcnLCB2YWx1ZSkgfX0gLz5cbiAgICAgIDwvU2V0dGluZ1Jvdz5cblxuICAgICAge29ubHlCb3JkZXJDb2xvciAmJiA8U2V0dGluZ1JvdyBjbGFzc05hbWU9J210LTQnIGxhYmVsPXt0cmFuc2xhdGUoJ3VuZGVybGluZScpfSBmbG93PSduby13cmFwJyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCd1bmRlcmxpbmUnKX0+XG4gICAgICAgIDxTaXplQ29sb3JTZXR0aW5nIGNvbG9yPXtib3JkZXI/LmNvbG9yfSBzaXplPXtib3JkZXI/LndpZHRoIGFzIHN0cmluZ30gb25DaGFuZ2U9e2hhbmRsZUJvcmRlckNoYW5nZX0gLz5cbiAgICAgIDwvU2V0dGluZ1Jvdz59XG5cbiAgICAgIHshb25seUJvcmRlckNvbG9yICYmIDxTZXR0aW5nUm93IGNsYXNzTmFtZT0nbXQtNCcgbGFiZWw9e3RyYW5zbGF0ZSgnYm9yZGVyJyl9IGZsb3c9J3dyYXAnIHJvbGU9J2dyb3VwJyBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2JvcmRlcicpfT5cbiAgICAgICAgPEJvcmRlclNldHRpbmcgdmFsdWU9e2JvcmRlcn0gb25DaGFuZ2U9eyh2YWx1ZSkgPT4geyBvbkNoYW5nZSgnYm9yZGVyJywgdmFsdWUpIH19IC8+XG4gICAgICA8L1NldHRpbmdSb3c+fVxuICAgICAgPFNldHRpbmdSb3cgY2xhc3NOYW1lPSdtdC00JyBsYWJlbD17dHJhbnNsYXRlKCdib3JkZXJSYWRpdXMnKX0gZmxvdz0nbm8td3JhcCcgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnYm9yZGVyUmFkaXVzJyl9PlxuICAgICAgICA8Qm9yZGVyUmFkaXVzU2V0dGluZ1xuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAhb25seUJvcmRlckNvbG9yID8gJzMwJScgOiAnMzUlJyB9fSBzZXBhcmF0ZWQ9e2ZhbHNlfSB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4geyBvbkNoYW5nZSgnYm9yZGVyUmFkaXVzJywgYCR7dmFsdWUubnVtYmVyPy5bMF19JHt2YWx1ZT8udW5pdH1gKSB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgPC8+XG4gIClcbn1cbiIsImltcG9ydCB7IFJlYWN0LCBkZWZhdWx0TWVzc2FnZXMsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdHlwZSBJY29uQnV0dG9uU3R5bGVzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFNpemVDb2xvclNldHRpbmcgfSBmcm9tICcuLi90ZXh0LXN0eWxlL3NpemUtY29sb3Itc2V0dGluZydcblxuZXhwb3J0IGludGVyZmFjZSBJY29uU3R5bGVTZXR0aW5nUHJvcHMge1xuICB2YXJpYW50PzogSWNvbkJ1dHRvblN0eWxlc1xuICBvbkNoYW5nZT86IChwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBJY29uU3R5bGVTZXR0aW5nID0gKHByb3BzOiBJY29uU3R5bGVTZXR0aW5nUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgdmFyaWFudCB9ID0gcHJvcHNcbiAgY29uc3QgeyBpY29uIH0gPSB2YXJpYW50IHx8IHt9XG5cbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuXG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdSb3cgY2xhc3NOYW1lPSdtdC0yJyBmbG93PSduby13cmFwJyBsYWJlbD17dHJhbnNsYXRlKCdpY29uJyl9IHJvbGU9J2dyb3VwJyBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2ljb24nKX0+XG4gICAgICA8U2l6ZUNvbG9yU2V0dGluZyBjb2xvcj17aWNvbj8uY29sb3J9IHNpemU9e2ljb24/LnNpemV9IG9uQ2hhbmdlPXsoa2V5LCB2YWx1ZSkgPT4geyBvbkNoYW5nZSgnaWNvbicsIHsgLi4uaWNvbiwgW2tleV06IHZhbHVlIH0pIH19IC8+XG4gICAgPC9TZXR0aW5nUm93PlxuICApXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2J1dHRvbi1zdHlsZS1zZXR0aW5nJ1xuZXhwb3J0ICogZnJvbSAnLi4vdGV4dC1zdHlsZS9zaXplLWNvbG9yLXNldHRpbmcnXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWJ5LXN0YXRlJ1xuZXhwb3J0ICogZnJvbSAnLi9uYXYtaWNvbi1waWNrZXInXG4iLCJpbXBvcnQgeyBSZWFjdCwgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBJY29uUGlja2VyLCB0eXBlIEljb25QaWNrZXJQcm9wcyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvcmVzb3VyY2Utc2VsZWN0b3InXG5pbXBvcnQgeyB1dGlscywgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVpRGVmYXVsdE1lc3NhZ2UgfSBmcm9tICdqaW11LXVpJ1xuY29uc3QgeyB1c2VNZW1vIH0gPSBSZWFjdFxuXG5jb25zdCBkb3RJY29uID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbGliL2ljb25zL25hdmlnYXRpb24vZG90LnN2ZycpXG5jb25zdCBwaWxsSWNvbiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2xpYi9pY29ucy9uYXZpZ2F0aW9uL3BpbGwuc3ZnJylcbmNvbnN0IGN1YmVJY29uID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbGliL2ljb25zL25hdmlnYXRpb24vY3ViZS5zdmcnKVxuY29uc3QgY2lyY2xlSWNvbiA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2xpYi9pY29ucy9uYXZpZ2F0aW9uL2NpcmNsZS5zdmcnKVxuY29uc3QgZGJDaXJjbGVJY29uID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbGliL2ljb25zL25hdmlnYXRpb24vZG91YmxlLWNpcmNsZS5zdmcnKVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkljb25QaWNrZXJQcm9wcyBleHRlbmRzIE9taXQ8SWNvblBpY2tlclByb3BzLCAnZ3JvdXBzJyB8ICdjdXN0b21JY29ucyc+IHtcbiAgc2l6ZT86IG51bWJlclxufVxuXG5jb25zdCB1c2VDdXN0b21JY29ucyA9IChzaXplOiBudW1iZXIpID0+IHtcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oamltdWlEZWZhdWx0TWVzc2FnZSlcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gW1xuICAgIHV0aWxzLnRvSWNvblJlc3VsdChkb3RJY29uLCB0cmFuc2xhdGUoJ2RyYXdUb29sRG90JyksIHNpemUpLFxuICAgIHV0aWxzLnRvSWNvblJlc3VsdChwaWxsSWNvbiwgdHJhbnNsYXRlKCdwaWxsJyksIHNpemUpLFxuICAgIHV0aWxzLnRvSWNvblJlc3VsdChjdWJlSWNvbiwgdHJhbnNsYXRlKCdyaG9tYnVzJyksIHNpemUpLFxuICAgIHV0aWxzLnRvSWNvblJlc3VsdChjaXJjbGVJY29uLCB0cmFuc2xhdGUoJ2hvbGxvd0NpcmNsZScpLCBzaXplKSxcbiAgICB1dGlscy50b0ljb25SZXN1bHQoZGJDaXJjbGVJY29uLCB0cmFuc2xhdGUoJ2ZpbGxlZERvdWJsZUNpcmNsZScpLCBzaXplKVxuICBdLCBbc2l6ZSwgdHJhbnNsYXRlXSlcbn1cblxuZXhwb3J0IGNvbnN0IE5hdkljb25QaWNrZXIgPSAocHJvcHM6IE5hdkljb25QaWNrZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHNpemUgPSAxMiwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuICBjb25zdCBjdXN0b21JY29ucyA9IHVzZUN1c3RvbUljb25zKHNpemUpXG4gIHJldHVybiA8SWNvblBpY2tlciBncm91cHM9J25vbmUnIGN1c3RvbUljb25zPXtjdXN0b21JY29uc30gey4uLm90aGVyc30gLz5cbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBwb2xpc2hlZCwgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBUYWJzLCBUYWIsIHR5cGUgTmF2aWdhdGlvblZhcmlhbnQsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCdXR0b25TdHlsZVNldHRpbmcgfSBmcm9tICcuL2J1dHRvbi1zdHlsZS1zZXR0aW5nJ1xuaW1wb3J0IHsgSWNvblN0eWxlU2V0dGluZyB9IGZyb20gJy4vaWNvbi1zdHlsZS1zZXR0aW5nJ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRTdGF0ZSA9ICdkZWZhdWx0JyB8ICdob3ZlcicgfCAnYWN0aXZlJyB8ICdkaXNhYmxlZCdcblxuLyoqXG4gKiBUaGUgYE5hdlN0eWxlU2V0dGluZ0J5U3RhdGVgIGNvbXBvbmVudHMgcHJvcHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmF2U3R5bGVTZXR0aW5nQnlTdGF0ZVByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHZhcmlhbnQ/OiBOYXZpZ2F0aW9uVmFyaWFudFxuICAvKipcbiAgICogQ2FsbGJhY2sgd2hlbiB2YWx1ZXMgY2hhbmdlLlxuICAgKi9cbiAgb25DaGFuZ2U/OiAoc3RhdGU6IENvbXBvbmVudFN0YXRlLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZFxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBzdGF0ZSBvZiB0aGUgc2V0dGluZy5cbiAgICovXG4gIHN0YXRlcz86IENvbXBvbmVudFN0YXRlW11cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSBpY29uLXJlbGF0ZWQgc2V0dGluZ3MuXG4gICAqL1xuICBpY29uPzogYm9vbGVhblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNwbGF5IHRleHQtcmVsYXRlZCBzZXR0aW5ncy5cbiAgICovXG4gIHRleHQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc3BsYXkgaWNvbiByZWxhdGVkIHNldHRpbmdzIGluIHRleHQgc2V0dGluZ3MuXG4gICAqL1xuICBpY29uSW5UZXh0PzogYm9vbGVhblxuICAvKipcbiAgICogRm9yIGJvcmRlciBzZXR0aW5ncywgd2hldGhlciB0byBvbmx5IHNldCBpdHMgY29sb3IuXG4gICAqL1xuICBvbmx5Qm9yZGVyQ29sb3I/OiBib29sZWFuXG59XG5cbmNvbnN0IGdldFRyYW5zbGF0ZUtleSA9IChzdGF0ZTogQ29tcG9uZW50U3RhdGUpID0+IHtcbiAgaWYgKHN0YXRlID09PSAnZGVmYXVsdCcpIHJldHVybiAnZGVmYXVsdCdcbiAgaWYgKHN0YXRlID09PSAnYWN0aXZlJykgcmV0dXJuICdzZWxlY3RlZCdcbiAgcmV0dXJuIHN0YXRlXG59XG5cbi8qKlxuICogVGhlIGBOYXZTdHlsZVNldHRpbmdCeVN0YXRlYCBjb21wb25lbnQgaXMgdXNlZCB0byBwcm92aWRlIHRoZSB1c2VyIHRoZSBhYmlsaXR5IHRvIHNldHRpbmcgc3R5bGVzIGZvciBuYXYgcmVsYXRlZCB3aWRnZXQuXG4gKlxuICogTm90ZTogdXNlIGluIEJ1aWxkZXIgb25seS5cbiAqL1xuZXhwb3J0IGNvbnN0IE5hdlN0eWxlU2V0dGluZ0J5U3RhdGUgPSAocHJvcHM6IE5hdlN0eWxlU2V0dGluZ0J5U3RhdGVQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdmFyaWFudCxcbiAgICBvbkNoYW5nZSxcbiAgICBzdGF0ZXMgPSBbJ2RlZmF1bHQnLCAnYWN0aXZlJywgJ2hvdmVyJ10sXG4gICAgaWNvbixcbiAgICB0ZXh0LFxuICAgIGljb25JblRleHQsXG4gICAgb25seUJvcmRlckNvbG9yXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHN0eWxlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC50YWItdGl0bGUtaXRlbXtcbiAgICAgICAgd2lkdGg6ICR7KDEwMCAvIHN0YXRlcz8ubGVuZ3RoID8/IDEpfSU7XG4gICAgICB9XG4gICAgIC5zdHlsZS1zZXR0aW5nLS1pbnB1dC11bml0IHtcbiAgICAgICAgd2lkdGg6ICR7cG9saXNoZWQucmVtKDgwKX07XG4gICAgICB9XG4gICAgICAkey8qIHVzZSBvdmVyZmxvdzogdmlzaWJsZSB0byBhdm9pZCBmb2N1cyByaW5nIGN1dCBvZmYgKi8nJ31cbiAgICAgIC50YWItY29udGVudCB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIGBcbiAgfSwgW3N0YXRlc10pXG5cbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuXG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgY2xhc3NOYW1lPSd3LTEwMCc+XG4gICAgICA8VGFicyB0eXBlPSdwaWxscycgY2xhc3NOYW1lPSdmbGV4LWdyb3ctMSB3LTEwMCBoLTEwMCcgZmlsbCBjc3M9e3N0eWxlfSBkZWZhdWx0VmFsdWU9JzAnPlxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGVzLm1hcCgoc3RhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGFiIGlkPXtpbmRleCArICcnfSBrZXk9e2luZGV4fSBjbGFzc05hbWU9J3RhYi10aXRsZS1pdGVtJyB0aXRsZT17dHJhbnNsYXRlKGdldFRyYW5zbGF0ZUtleShzdGF0ZSkpfT5cbiAgICAgICAgICAgICAgICB7aWNvbiAmJiA8SWNvblN0eWxlU2V0dGluZyB2YXJpYW50PXt2YXJpYW50Py5pdGVtPy5bc3RhdGVdfSBvbkNoYW5nZT17KGtleSwgdmFsdWUpID0+IHsgb25DaGFuZ2Uoc3RhdGUsIGtleSwgdmFsdWUpIH19IC8+fVxuICAgICAgICAgICAgICAgIHt0ZXh0ICYmIDxCdXR0b25TdHlsZVNldHRpbmcgdmFyaWFudD17dmFyaWFudD8uaXRlbT8uW3N0YXRlXX0gaWNvbj17aWNvbkluVGV4dH0gb25seUJvcmRlckNvbG9yPXtvbmx5Qm9yZGVyQ29sb3J9IG9uQ2hhbmdlPXsoa2V5LCB2YWx1ZSkgPT4geyBvbkNoYW5nZShzdGF0ZSwga2V5LCB2YWx1ZSkgfX0gLz59XG4gICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvVGFicz5cbiAgICA8L1NldHRpbmdSb3c+XG4gIClcbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEZvdXJTaWRlc1VuaXQsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBGb3VyRWRnZXMsIHR5cGUgRm91ckVkZ2VzUHJvcHMgfSBmcm9tICcuL2ZvdXItZWRnZXMnXG5cbi8qKlxuICogVGhlIGBQYWRkaW5nYCBjb21wb25lbnQgcHJvcHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFkZGluZ1Byb3BzIGV4dGVuZHMgT21pdDxGb3VyRWRnZXNQcm9wcywgJ3R5cGUnIHwgJ3ZhbHVlJyB8ICdvbkNoYW5nZScgfCAndW5pZmllZEFyaWFMYWJlbCcgfCAndW5pZmllZFRpdGxlJz4ge1xuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCB7bnVtYmVyOlswLDAsMCwwXSx1bml0OnB4fVxuICAgKi9cbiAgdmFsdWU6IEltbXV0YWJsZU9iamVjdDxGb3VyU2lkZXNVbml0PlxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6ICh2YWx1ZTogRm91clNpZGVzVW5pdCkgPT4gdm9pZFxufVxuXG4vKipcbiAqIFRoZSBgUGFkZGluZ2AgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBzZXQgdGhlIHBhZGRpbmcgb2YgdGhlIGJveC5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgUGFkZGluZyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBQYWRkaW5nID0gKHByb3BzOiBQYWRkaW5nUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIHZhbHVlOiBwcm9wVmFsdWUsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiBwcm9wVmFsdWU/LmFzTXV0YWJsZSA/IHByb3BWYWx1ZS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pIDogcHJvcFZhbHVlIGFzIGFueSwgW3Byb3BWYWx1ZV0pXG5cbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuICBjb25zdCBsYWJlbCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gdHJhbnNsYXRlKCdwYWRkaW5nJyksIFt0cmFuc2xhdGVdKVxuXG4gIHJldHVybiAoPEZvdXJFZGdlc1xuICAgIHR5cGU9J2VkZ2UnXG4gICAgdmFsdWU9e3ZhbHVlfVxuICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICB1bmlmaWVkQXJpYUxhYmVsPXtsYWJlbH1cbiAgICB1bmlmaWVkVGl0bGU9e2xhYmVsfVxuICAgIHsuLi5vdGhlcnN9XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzdHlsZS1zZXR0aW5nLS1wYWRkaW5nJywgY2xhc3NOYW1lKX0gLz4pXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgaW5qZWN0SW50bCwgdHlwZSBJbnRsU2hhcGUsIHBvbGlzaGVkIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgRGlzdGFuY2VVbml0cywgdHlwZSBMaW5lYXJVbml0LCBkZWZhdWx0TWVzc2FnZXMsIERyb3Bkb3duLCBEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0gfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgSW5wdXRVbml0IH0gZnJvbSAnLi91bml0LWlucHV0J1xuaW1wb3J0IHsgTGF5b3V0SXRlbVNpemVNb2RlcywgdXRpbHMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXG5pbXBvcnQgeyBDaGVja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjaydcblxuY29uc3QgYXZhaWxhYmxlVW5pdHMgPSBbRGlzdGFuY2VVbml0cy5QSVhFTCwgRGlzdGFuY2VVbml0cy5QRVJDRU5UQUdFXVxuY29uc3QgZGVmYXVsdFNpemVNb2RlcyA9IFtMYXlvdXRJdGVtU2l6ZU1vZGVzLkF1dG8sIExheW91dEl0ZW1TaXplTW9kZXMuU3RyZXRjaCwgTGF5b3V0SXRlbVNpemVNb2Rlcy5DdXN0b21dXG5cbi8qKlxuICogVGhlIFNpemVFZGl0b3IgY29tcG9uZW50IHByb3BzLlxuICovXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbGFiZWw6IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2l6ZSBtb2RlLCBvbmUgb2YgYExheW91dEl0ZW1TaXplTW9kZXNgLlxuICAgKi9cbiAgbW9kZTogTGF5b3V0SXRlbVNpemVNb2Rlc1xuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIHRoZSBtb2RlIHNlbGVjdC5cbiAgICovXG4gIGRpc2FibGVNb2RlU2VsZWN0PzogYm9vbGVhblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgc2l6ZSB2YWx1ZS5cbiAgICovXG4gIHZhbHVlPzogTGluZWFyVW5pdCB8IHN0cmluZ1xuICAvKipcbiAgICogVGhlIHVuaXRzIGF2YWlsYWJsZSBmb3IgdGhlIHNpemUgdmFsdWUuXG4gICAqL1xuICBhdmFpbGFibGVVbml0cz86IERpc3RhbmNlVW5pdHNbXVxuICAvKipcbiAgICogVGhlIHNpemUgbW9kZXMgYXZhaWxhYmxlIGZvciB0aGUgc2l6ZSB2YWx1ZS5cbiAgICovXG4gIHNpemVNb2Rlcz86IExheW91dEl0ZW1TaXplTW9kZXNbXVxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIGFsbCBvcHRpb25zIGFuZCBzaG93IEF1dG8uXG4gICAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIG1vZGUgc2VsZWN0IGNoYW5nZXMuXG4gICAqIEBldmVudFxuICAgKi9cbiAgb25Nb2RlQ2hhbmdlPzogKG1vZGU6IExheW91dEl0ZW1TaXplTW9kZXMpID0+IHZvaWRcbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHNpemUgdmFsdWUgY2hhbmdlcy5cbiAgICogQGV2ZW50XG4gICAqL1xuICBvbkNoYW5nZTogKHZhbHVlOiBMaW5lYXJVbml0KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgaW50bDogSW50bFNoYXBlXG59XG5cbmV4cG9ydCBjbGFzcyBfU2l6ZUVkaXRvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMgJiBFeHRyYVByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge1xuICAgIGRpc2FibGVNb2RlU2VsZWN0OiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogTGF5b3V0SXRlbVNpemVNb2RlcykgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5wcm9wcy5tb2RlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW9kZUNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gIH1cblxuICBubHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmludGwgPyB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0gfSkgOiBpZFxuICB9XG5cbiAgZ2V0UG9wcGVyU3R5bGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC51bml0cy1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC01MDApO1xuICAgICAgICBwYWRkaW5nOiAycHggMDtcbiAgICAgICAgLnN0eWxlLXNldHRpbmctLW1hcmthYmxlLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogJHtwb2xpc2hlZC5yZW0oMjYpfTtcbiAgICAgICAgfVxuICAgICAgICAudW5pdC1pdGVtIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIH1cblxuICBnZXRTdHlsZSAoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LTIwMCk7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG5cbiAgICAgIC5zaWRlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAucHJvcC1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTQwMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTQwMCk7XG4gICAgICB9XG5cbiAgICAgIC5qaW11LWRyb3Bkb3duIHtcbiAgICAgICAgei1pbmRleDogMDtcblxuICAgICAgICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3R5bGUtc2V0dGluZy0taW5wdXQtdW5pdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LTIwMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHotaW5kZXg6IDA7XG5cbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc3R5bGUtc2V0dGluZy0tdW5pdC1zZWxlY3RvciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtMjAwKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IG1vZGUsIHZhbHVlLCBkaXNhYmxlTW9kZVNlbGVjdCA9IGZhbHNlLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBzaXplLWVkaXRvciB3LTEwMCcgY3NzPXt0aGlzLmdldFN0eWxlKCl9PlxuICAgICAgICAgIDxkaXYgdGl0bGU9e3RoaXMubmxzKExheW91dEl0ZW1TaXplTW9kZXMuQXV0by50b0xvd2VyQ2FzZSgpKX0gY2xhc3NOYW1lPSdwcm9wLWxhYmVsIHB4LTIgdGV4dC10cnVuY2F0ZSB0ZXh0LWNlbnRlciB3LTEwMCc+XG4gICAgICAgICAgICB7dGhpcy5ubHMoTGF5b3V0SXRlbVNpemVNb2Rlcy5BdXRvLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgY29uc3Qgc2l6ZU1vZGVzID0gdGhpcy5wcm9wcy5zaXplTW9kZXMgPz8gZGVmYXVsdFNpemVNb2Rlc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IHNpemUtZWRpdG9yIHctMTAwJyBjc3M9e3RoaXMuZ2V0U3R5bGUoKX0+XG4gICAgICAgIHshZGlzYWJsZU1vZGVTZWxlY3QgJiYgKFxuICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgZGlyZWN0aW9uPSdkb3duJ1xuICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICBtZW51SXRlbUNoZWNrTW9kZT0nc2luZ2xlQ2hlY2snXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIGFycm93IGljb24gc2l6ZT0nc20nIGNsYXNzTmFtZT0ncC0wJy8+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT0ncC0wJyBjc3M9e2Nzc2BtaW4td2lkdGg6IDVyZW07YH0+XG4gICAgICAgICAgICAgIHtzaXplTW9kZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gYWN0aXZlPXtpdGVtID09PSBtb2RlfSBhcmlhLWxhYmVsPXt0aGlzLm5scyhpdGVtLnRvTG93ZXJDYXNlKCkpfSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0pIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBhbGl0bi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZCB3LTEwMCc+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtID09PSBtb2RlICYmIDxDaGVja091dGxpbmVkIGNsYXNzTmFtZT0nbXItMicvPn1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKGl0ZW0udG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICApfVxuICAgICAgICB7bW9kZSAhPT0gTGF5b3V0SXRlbVNpemVNb2Rlcy5DdXN0b20gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJvcC1sYWJlbCBmbGV4LWdyb3ctMSBweC0yIHRleHQtdHJ1bmNhdGUgdGV4dC1jZW50ZXInXG4gICAgICAgICAgICB0aXRsZT17dHlwZW9mIG1vZGU/LnRvTG93ZXJDYXNlID09PSAnZnVuY3Rpb24nICYmIHRoaXMubmxzKG1vZGUudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGVvZiBtb2RlPy50b0xvd2VyQ2FzZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLm5scyhtb2RlLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7bW9kZSA9PT0gTGF5b3V0SXRlbVNpemVNb2Rlcy5DdXN0b20gJiYgKFxuICAgICAgICAgIDxJbnB1dFVuaXRcbiAgICAgICAgICAgIHVuaXRzPXt0aGlzLnByb3BzLmF2YWlsYWJsZVVuaXRzIHx8IGF2YWlsYWJsZVVuaXRzfVxuICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgbWF4PXtJbmZpbml0eX1cbiAgICAgICAgICAgIHByZWNpc2lvbj17Mn1cbiAgICAgICAgICAgIHZhbHVlPXt1dGlscy5ub3JtYWxpemVMaW5lYXJVbml0KHZhbHVlKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNpemVFZGl0b3IgPSBpbmplY3RJbnRsPCdpbnRsJywgUHJvcHMgJiBFeHRyYVByb3BzPihfU2l6ZUVkaXRvcilcbiIsImltcG9ydCB7IGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRTZXR0aW5nU3R5bGUgPSAoKTogU2VyaWFsaXplZFN0eWxlcyA9PiB7XG4gIHJldHVybiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgID4gLnNldHRpbmctcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmppbXUtYnVpbGRlci0tY29sb3Ige1xuICAgICAgd2lkdGg6ICR7cG9saXNoZWQucmVtKDQwKX07XG4gICAgICBoZWlnaHQ6ICR7cG9saXNoZWQucmVtKDIwKX07XG4gICAgfVxuICAgIC5maWxsLXR5cGUge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgYFxufVxuIiwiaW1wb3J0IHsgY3NzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMsIHBvbGlzaGVkIH0gZnJvbSAnamltdS1jb3JlJ1xuXG5leHBvcnQgY29uc3QgQm9yZGVyU2V0dGluZ1N0eWxlID0gKCk6IFNlcmlhbGl6ZWRTdHlsZXMgPT4ge1xuICByZXR1cm4gY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgID4uaXRlbSB7XG4gICAgICBmbGV4OiAwIDEgYXV0bztcbiAgICB9XG4gICAgPi5pdGVtLnN0eWxlLXNldHRpbmctLWxpbmUtc3R5bGUtc2VsZWN0b3Ige1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG4gICAgPi5pdGVtLnN0eWxlLXNldHRpbmctLWlucHV0LXVuaXQge1xuICAgICAgd2lkdGg6MzAlO1xuICAgIH1cbiAgICAuamltdS1idWlsZGVyLS1jb2xvciB7XG4gICAgICBoZWlnaHQ6ICR7cG9saXNoZWQucmVtKDI2KX07XG4gICAgfVxuICBgXG59XG4iLCJpbXBvcnQgeyBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IEJveFNoYWRvd1NldHRpbmdTdHlsZSA9ICgpOiBTZXJpYWxpemVkU3R5bGVzID0+IHtcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgPiAuc2V0dGluZy1yb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAuYm94LWlucHV0IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG4gIGBcbn1cbiIsImltcG9ydCB7IGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IEZvdXJTaWRlc1N0eWxlID0gKHByb3BzKTogU2VyaWFsaXplZFN0eWxlcyA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHByb3BzXG4gIGNvbnN0IGdyYXk2MDAgPSB0aGVtZSAmJiB0aGVtZS5jb2xvcnMgPyB0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzMwMF0gOiAnI2M4Y2JjZCdcbiAgY29uc3QgYmxhY2sgPSB0aGVtZSAmJiB0aGVtZS5jb2xvcnMgPyB0aGVtZS5jb2xvcnMuYmxhY2sgOiAnYmxhY2snXG5cbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICAudW5pdC1zZWxlY3Rvci1jb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICB3aWR0aDogODclO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgPiBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDIxJTtcbiAgICAgICAgfVxuICAgICAgICAuamltdS1udW1lcmljLWlucHV0LWlucHV0IHtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMXB4KTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgID4uc3R5bGUtc2V0dGluZy0tdW5pdC1zZWxlY3RvciB7XG4gICAgICAgICAgd2lkdGg6IDE2JTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sb2NrLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC5qaW11LWljb24ge1xuICAgICAgICAgIGNvbG9yOiAke2JsYWNrfTtcbiAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2dyYXk2MDB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudGlwcyB7XG4gICAgICBjb2xvcjogJHtncmF5NjAwfTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6ICR7cG9saXNoZWQucmVtKDEwKX07XG4gICAgICAudGlwLWdyb3VwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICB3aWR0aDogNzMlO1xuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAke3BvbGlzaGVkLmVsbGlwc2lzKCl9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGBcbn1cbiIsImltcG9ydCB7IGNzcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCBwb2xpc2hlZCB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGNvbnN0IFNpbmdsZUNvbG9yU2VsZWN0b3JTdHlsZSA9IChwcm9wcyk6IFNlcmlhbGl6ZWRTdHlsZXMgPT4ge1xuICBjb25zdCB7IHRoZW1lIH0gPSBwcm9wc1xuICBjb25zdCBncmF5MzAwID0gdGhlbWUgPyB0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFs1MDBdIDogJydcbiAgY29uc3QgY3lhbjUwMCA9IHRoZW1lID8gdGhlbWUuY29sb3JzLnBhbGV0dGUucHJpbWFyeVs3MDBdIDogJydcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGhlaWdodDoke3BvbGlzaGVkLnJlbSgyMCl9O1xuICAgICAgd2lkdGg6JHtwb2xpc2hlZC5yZW0oMjApfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7Z3JheTMwMH07XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICR7Y3lhbjUwMH07XG4gICAgICB9XG4gICAgfVxuICAgIC5idG46bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cbiAgYFxufVxuIiwiZXhwb3J0IHsgQmFja2dyb3VuZFNldHRpbmdTdHlsZSBhcyBCYWNrZ3JvdW5kU2V0dGluZyB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrZ3JvdW5kLXNldHRpbmcnXG5leHBvcnQgeyBCb3JkZXJTZXR0aW5nU3R5bGUgYXMgQm9yZGVyU2V0dGluZyB9IGZyb20gJy4vY29tcG9uZW50cy9ib3JkZXItc2V0dGluZydcbmV4cG9ydCB7IEJveFNoYWRvd1NldHRpbmdTdHlsZSBhcyBCb3hTaGFkb3dTZXR0aW5nIH0gZnJvbSAnLi9jb21wb25lbnRzL2JveC1zaGFkb3ctc2V0dGluZydcbmV4cG9ydCB7IEZvdXJTaWRlc1N0eWxlIGFzIEZvdXJTaWRlcyB9IGZyb20gJy4vY29tcG9uZW50cy9mb3VyLXNpZGVzJ1xuZXhwb3J0IHsgU2luZ2xlQ29sb3JTZWxlY3RvclN0eWxlIGFzIFNpbmdsZUNvbG9yU2VsZWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvc2luZ2xlLWNvbG9yLXNlbGVjdG9yJ1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0LWZvbnQtc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3RleHQtc3R5bGUnXG5leHBvcnQgKiBmcm9tICcuL3RleHQtYWxpZ25tZW50J1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgY3NzLCBqc3gsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgVGhlbWVDb2xvclBpY2tlciB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyJ1xuaW1wb3J0IHsgSW5wdXRVbml0IH0gZnJvbSAnLi4vdW5pdC1pbnB1dCdcblxuZXhwb3J0IGludGVyZmFjZSBTaXplQ29sb3JTZXR0aW5nUHJvcHMgZXh0ZW5kcyBPbWl0PFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiwgJ29uQ2hhbmdlJz4ge1xuICBjb2xvcj86IHN0cmluZ1xuICBzaXplPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICAuY29sb3ItcGlja2VyLWJsb2NrIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2l6ZUNvbG9yU2V0dGluZyA9IChwcm9wczogU2l6ZUNvbG9yU2V0dGluZ1Byb3BzKSA9PiB7XG4gIGNvbnN0IGFwcFRoZW1lID0gdXNlVGhlbWUyKClcbiAgY29uc3QgeyBvbkNoYW5nZSwgY29sb3IsIHNpemUsIGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NpemUtY29sb3Itc2V0dGluZyBkLWZsZXgnLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICAgIDxUaGVtZUNvbG9yUGlja2VyIHNwZWNpZmljVGhlbWU9e2FwcFRoZW1lfSB2YWx1ZT17Y29sb3J9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHsgb25DaGFuZ2UoJ2NvbG9yJywgdmFsdWUpIH19IC8+XG4gICAgICA8SW5wdXRVbml0IHZhbHVlPXtzaXplID8/ICcxMnB4J30gb25DaGFuZ2U9eyh2YWx1ZSkgPT4geyBvbkNoYW5nZSgnc2l6ZScsIGAke3ZhbHVlLmRpc3RhbmNlfSR7dmFsdWUudW5pdH1gKSB9fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgZ2V0QXBwU3RvcmUsIGNsYXNzTmFtZXMsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbiAgdHlwZSBCdXR0b25Hcm91cFByb3BzLFxuICBUZXh0QWxpZ25WYWx1ZSxcbiAgZGVmYXVsdE1lc3NhZ2VzXG59IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIEJ1dHRvblR5cGUgfSBmcm9tICdqaW11LXVpL2xpYi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IFRleHRMZWZ0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci90ZXh0LWxlZnQnXG5pbXBvcnQgeyBUZXh0Q2VudGVyT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci90ZXh0LWNlbnRlcidcbmltcG9ydCB7IFRleHRSaWdodE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdGV4dC1yaWdodCdcbmltcG9ydCB7IFRleHRKdXN0aWZ5T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci90ZXh0LWp1c3RpZnknXG5cbi8qKlxuICogVGhlIFRleHRBbGlnbm1lbnQgY29tcG9uZW50IHByb3BzLlxuICovXG5leHBvcnQgdHlwZSBUZXh0QWxpZ25tZW50UHJvcHMgPSBPbWl0PEJ1dHRvbkdyb3VwUHJvcHMsICdvbkNoYW5nZSc+ICYge1xuICAvKipcbiAgICogVHlwZSBmb3IgdGhlIHRoZSBidXR0b24gY29tcG9uZW50cyBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICogQGlnbm9yZVxuICAgKiBAZGVmYXVsdCBkZWZhdWx0XG4gICAqL1xuICBidXR0b25UeXBlPzogQnV0dG9uVHlwZVxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgdGV4dEFsaWduPzogVGV4dEFsaWduVmFsdWVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgdGV4dCBhbGlnbm1lbnQgY2hhbmdlcy5cbiAgICogQGV2ZW50XG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogVGV4dEFsaWduVmFsdWUpID0+IHZvaWRcbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUganVzdGlmeSBhbGlnbm1lbnQuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBzaG93SnVzdGlmeT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIEZsaXAgdGhlIGljb24gYXV0b21hdGljYWxseSBpZiB0aGUgbG9jYWxlIGlzIGZvbGxvd2luZyByaWdodC10by1sZWZ0IChSVEwpLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgYXV0b0ZsaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogVGhlIGBUZXh0QWxpZ25tZW50YCBjb21wb25lbnQgYWxsb3dzIHVzZXJzIHRvIHNldCB0aGUgYWxpZ25tZW50IG9mIHRleHQuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFRleHRBbGlnbm1lbnQgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgVGV4dEFsaWdubWVudCA9IChwcm9wczogVGV4dEFsaWdubWVudFByb3BzKSA9PiB7XG4gIGNvbnN0IGlzUlRMID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb250ZXh0Py5pc1JUTFxuICBjb25zdCB7XG4gICAgYnV0dG9uVHlwZSA9ICdkZWZhdWx0JyxcbiAgICB0ZXh0QWxpZ24gPSAhaXNSVEwgPyBUZXh0QWxpZ25WYWx1ZS5MRUZUIDogVGV4dEFsaWduVmFsdWUuUklHSFQsXG4gICAgb25DaGFuZ2UsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dKdXN0aWZ5ID0gZmFsc2UsXG4gICAgYXV0b0ZsaXAgPSBmYWxzZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbkdyb3VwXG4gICAgICB7Li4ub3RoZXJzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd0ZXh0LWFsaWdubWVudCcsIGNsYXNzTmFtZSwge1xuICAgICAgICAnZmxleC1yb3ctcmV2ZXJzZSc6IGlzUlRMICYmIGF1dG9GbGlwXG4gICAgICB9KX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoaXNSVEwgJiYgIWF1dG9GbGlwID8gJ3JpZ2h0JyA6ICdsZWZ0Jyl9XG4gICAgICAgIHR5cGU9e2J1dHRvblR5cGV9XG4gICAgICAgIGljb25cbiAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgIGFjdGl2ZT17dGV4dEFsaWduID09PSBUZXh0QWxpZ25WYWx1ZS5MRUZUfVxuICAgICAgICBhcmlhLXByZXNzZWQ9e3RleHRBbGlnbiA9PT0gVGV4dEFsaWduVmFsdWUuTEVGVH1cbiAgICAgICAgb25DbGljaz17KCkgPT4geyBvbkNoYW5nZShUZXh0QWxpZ25WYWx1ZS5MRUZUKSB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dExlZnRPdXRsaW5lZCBhdXRvRmxpcD17IWF1dG9GbGlwfSAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ2NlbnRlcicpfVxuICAgICAgICB0eXBlPXtidXR0b25UeXBlfVxuICAgICAgICBpY29uXG4gICAgICAgIHNpemU9J3NtJ1xuICAgICAgICBhY3RpdmU9e3RleHRBbGlnbiA9PT0gVGV4dEFsaWduVmFsdWUuQ0VOVEVSfVxuICAgICAgICBhcmlhLXByZXNzZWQ9e3RleHRBbGlnbiA9PT0gVGV4dEFsaWduVmFsdWUuQ0VOVEVSfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKFRleHRBbGlnblZhbHVlLkNFTlRFUikgfX1cbiAgICAgID5cbiAgICAgICAgPFRleHRDZW50ZXJPdXRsaW5lZCAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoaXNSVEwgJiYgIWF1dG9GbGlwID8gJ2xlZnQnIDogJ3JpZ2h0Jyl9XG4gICAgICAgIHR5cGU9e2J1dHRvblR5cGV9XG4gICAgICAgIGljb25cbiAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgIGFjdGl2ZT17dGV4dEFsaWduID09PSBUZXh0QWxpZ25WYWx1ZS5SSUdIVH1cbiAgICAgICAgYXJpYS1wcmVzc2VkPXt0ZXh0QWxpZ24gPT09IFRleHRBbGlnblZhbHVlLlJJR0hUfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKFRleHRBbGlnblZhbHVlLlJJR0hUKSB9fVxuICAgICAgPlxuICAgICAgICA8VGV4dFJpZ2h0T3V0bGluZWQgYXV0b0ZsaXA9eyFhdXRvRmxpcH0gLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAge3Nob3dKdXN0aWZ5ICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGUoJ2p1c3RpZnknKX1cbiAgICAgICAgICB0eXBlPXtidXR0b25UeXBlfVxuICAgICAgICAgIGljb25cbiAgICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgICBhY3RpdmU9e3RleHRBbGlnbiA9PT0gVGV4dEFsaWduVmFsdWUuSlVTVElGWX1cbiAgICAgICAgICBhcmlhLXByZXNzZWQ9e3RleHRBbGlnbiA9PT0gVGV4dEFsaWduVmFsdWUuSlVTVElGWX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKFRleHRBbGlnblZhbHVlLkpVU1RJRlkpIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dEp1c3RpZnlPdXRsaW5lZCAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgdHlwZSBCdXR0b25Hcm91cFByb3BzLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgQm9sZE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvYm9sZCdcbmltcG9ydCB7IEl0YWxpY091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvaXRhbGljJ1xuaW1wb3J0IHsgVW5kZXJzY29yZU91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdW5kZXJzY29yZSdcbmltcG9ydCB7IFN0cmlrZVRocm91Z2hPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3N0cmlrZS10aHJvdWdoJ1xuXG5leHBvcnQgdHlwZSBGb250U3R5bGVzID0gJ2JvbGQnIHwgJ2l0YWxpYycgfCAndW5kZXJsaW5lJyB8ICdzdHJpa2UnXG5cbi8qKlxuICogVGhlIEZvbnRTdHlsZSBjb21wb25lbnQgcHJvcHMuXG4gKi9cbmV4cG9ydCB0eXBlIEZvbnRTdHlsZVByb3BzID0gT21pdDxCdXR0b25Hcm91cFByb3BzLCAnb25DaGFuZ2UnIHwgJ3NpemUnPiAmIHtcbiAgLyoqXG4gICAqIEEgY29sbGVjdGlvbiBvZiBmb250IHN0eWxlcyB0aGF0IGNhbiBiZSBzZXQuXG4gICAqIFlvdSBjYW4gc2VsZWN0IGFueSBvZiB0aGUgZm91ciBzdHlsZXMgJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsIGFuZCAnc3RyaWtlJy5cbiAgICogSW5jbHVkZXMgYWxsIGZvbnQgc3R5bGVzIGJ5IGRlZmF1bHQuXG4gICAqL1xuICB0eXBlcz86IEZvbnRTdHlsZXNbXVxuICAvKipcbiAqIERlZmluZXMgdGhlIHNpemUgb2YgdGhlIGJ1dHRvbiBncm91cC5cbiAqIEBkZWZhdWx0IHNtXG4gKi9cbiAgc2l6ZT86ICdkZWZhdWx0JyB8ICdzbScgfCAnbGcnXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGJvbGQgdGV4dC5cbiAgICovXG4gIGJvbGQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGl0YWxpY2l6ZSB0ZXh0LlxuICAgKi9cbiAgaXRhbGljPzogYm9vbGVhblxuICAvKipcbiAgICogV2hldGhlciB0byB1bmRlcmxpbmUgdGV4dC5cbiAgICovXG4gIHVuZGVybGluZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3RyaWtldGhyb3VnaCB0ZXh0LlxuICAgKi9cbiAgc3RyaWtlPzogYm9vbGVhblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBmb250IHN0eWxlIGNoYW5nZXMuXG4gICAqIEBldmVudFxuICAgKi9cbiAgb25DaGFuZ2U/OiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlcyA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZSddXG5cbi8qKlxuICogVGhlIGBGb250U3R5bGVgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSBmb250IHN0eWxlcyBvZiB0ZXh0LlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBGb250U3R5bGUgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0gKHByb3BzOiBGb250U3R5bGVQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZXMgPSBEZWZhdWx0VHlwZXMsXG4gICAgYm9sZCxcbiAgICBpdGFsaWMsXG4gICAgdW5kZXJsaW5lLFxuICAgIHN0cmlrZSxcbiAgICBvbkNoYW5nZSxcbiAgICAnYXJpYS1sYWJlbCc6IHByb3BBcmlhTGFiZWwsXG4gICAgc2l6ZSA9ICdzbScsXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3QgYXJpYUxhYmVsID0gcHJvcEFyaWFMYWJlbCB8fCB0cmFuc2xhdGUoJ2ZvbnRTdHlsZScpXG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uR3JvdXAgc2l6ZT17c2l6ZX0gey4uLm90aGVyc30gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH0+XG4gICAgICB7XG4gICAgICAgIHR5cGVzLm1hcCgoc3R5bGUsIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9ICEhcHJvcHNbc3R5bGVdXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpZHh9IHRpdGxlPXt0cmFuc2xhdGUoc3R5bGUpfSBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoc3R5bGUpfSBhcmlhLXByZXNzZWQ9e2FjdGl2ZX0gYWN0aXZlPXthY3RpdmV9IHR5cGU9J2RlZmF1bHQnIGljb25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBvbkNoYW5nZShzdHlsZSwgIXByb3BzW3N0eWxlXSkgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0eWxlID09PSAnYm9sZCcgJiYgPEJvbGRPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAge3N0eWxlID09PSAnaXRhbGljJyAmJiA8SXRhbGljT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHtzdHlsZSA9PT0gJ3VuZGVybGluZScgJiYgPFVuZGVyc2NvcmVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAge3N0eWxlID09PSAnc3RyaWtlJyAmJiA8U3RyaWtlVGhyb3VnaE91dGxpbmVkIC8+fVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvQnV0dG9uR3JvdXA+XG4gIClcbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEZvbnRTdHlsZSwgdHlwZSBGb250U3R5bGVQcm9wcyB9IGZyb20gJy4vdGV4dC1mb250LXN0eWxlJ1xuaW1wb3J0IHsgSW5wdXRVbml0IH0gZnJvbSAnLi4vdW5pdC1pbnB1dCdcbmltcG9ydCB7IFRoZW1lQ29sb3JQaWNrZXIgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlcidcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB1c2VUaGVtZTIgfSBmcm9tICdqaW11LXRoZW1lJ1xuY29uc3QgdGV4dEljb24gPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9saWIvaWNvbnMvdXBwZXJjYXNlLnN2ZycpXG5cbi8qKlxuICogVGhlIFRleHRTdHlsZSBjb21wb25lbnQgcHJvcHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFN0eWxlUHJvcHMgZXh0ZW5kcyBPbWl0PEZvbnRTdHlsZVByb3BzLCAnc2l6ZScgfCAndmVydGljYWwnIHwgJ3R5cGVzJyB8ICdvbkNoYW5nZSc+IHtcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgdGV4dC5cbiAgICovXG4gIGNvbG9yPzogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgZm9udCBzaXplIG9mIHRoZSB0ZXh0LlxuICAgKiBAZGVmYXVsdCAxNnB4XG4gICAqL1xuICBzaXplPzogc3RyaW5nXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIHRleHQgc3R5bGUgY2hhbmdlcy5cbiAgICogQGV2ZW50XG4gICAqL1xuICBvbkNoYW5nZT86IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZFxufVxuXG4vKipcbiAqIFRoZSBgVGV4dFN0eWxlYCBjb21wb25lbnQgYWxsb3dzIHVzZXJzIHRvIHNldCB0aGUgc3R5bGVzIG9mIHRleHQuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IFRleHRTdHlsZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0U3R5bGUgPSAocHJvcHM6IFRleHRTdHlsZVByb3BzKSA9PiB7XG4gIGNvbnN0IGFwcFRoZW1lID0gdXNlVGhlbWUyKClcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuICBjb25zdCB7IGNsYXNzTmFtZSwgYm9sZCwgaXRhbGljLCBzdHJpa2UsIHVuZGVybGluZSwgY29sb3IsIHNpemUgPSAnMTZweCcsIG9uQ2hhbmdlLCAuLi5vdGhlcnMgfSA9IHByb3BzXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgIG9uQ2hhbmdlPy4oa2V5LCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAnLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICAgIDxGb250U3R5bGUgYm9sZD17Ym9sZH0gaXRhbGljPXtpdGFsaWN9IHN0cmlrZT17c3RyaWtlfSB1bmRlcmxpbmU9e3VuZGVybGluZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxUaGVtZUNvbG9yUGlja2VyIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnZm9udENvbG9yJyl9IGljb249e3RleHRJY29ufSB0eXBlPSd3aXRoLWljb24nIHNwZWNpZmljVGhlbWU9e2FwcFRoZW1lfSB2YWx1ZT17Y29sb3J9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHsgaGFuZGxlQ2hhbmdlKCdjb2xvcicsIHZhbHVlKSB9fSAvPlxuICAgICAgPElucHV0VW5pdCBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2ZvbnRTaXplJyl9IG1pbj17NH0gbWF4PXs5OTl9IHN0eWxlPXt7IHdpZHRoOiAnMzUlJyB9fSB2YWx1ZT17c2l6ZSB9IG9uQ2hhbmdlPXsodmFsdWUpID0+IHsgaGFuZGxlQ2hhbmdlKCdzaXplJywgYCR7dmFsdWUuZGlzdGFuY2V9JHt2YWx1ZS51bml0fWApIH19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBDaGVja0ZpbGxlZCB9IGZyb20gJ2ppbXUtaWNvbnMvZmlsbGVkL2FwcGxpY2F0aW9uL2NoZWNrJ1xuXG5leHBvcnQgZnVuY3Rpb24gQWN0aXZlRmxhZyAoKSB7XG4gIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgcmlnaHQ6IC0ycHg7XG4gICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgdHJhbnNwYXJlbnQgNTAlLCB2YXIoLS1wcmltYXJ5LTYwMCkgNTAlIDEwMCUpO1xuICAgICAgc3ZnIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17c3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLXN0YXJ0IGljb24tY29udGFpbmVyJz5cbiAgICAgICAgPENoZWNrRmlsbGVkIGNvbG9yPSd2YXIoLS13aGl0ZSknIHNpemU9ezh9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgUmVhY3QsIEltbXV0YWJsZSwgdHlwZSBJbW11dGFibGVPYmplY3QsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcbmltcG9ydCB7IHR5cGUgQmFja2dyb3VuZFN0eWxlLCBGaWxsVHlwZSwgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFRoZW1lQmFja2dyb3VuZFNldHRpbmcsIFRIRU1FX0JBQ0tHUk9VTkRfQ09MT1JfTElTVCB9IGZyb20gJy4vdGhlbWUtYmFja2dyb3VuZC1zZXR0aW5nJ1xuaW1wb3J0IHsgQmFja2dyb3VuZFNldHRpbmcgfSBmcm9tICcuL2JhY2tncm91bmQtc2V0dGluZydcblxuLyoqXG4gKiBUaGUgYFRoZW1lQmFja2dyb3VuZFNlY3Rpb25gIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJhY2tncm91bmRTZWN0aW9uUHJvcHMge1xuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoaXMgY29tcG9uZW50LCBpbmNsdWRpbmcgdGhlIGJhY2tncm91bmQgY29sb3IsIGJhY2tncm91bmQgaW1hZ2UsIGFuZCB0aGUgZmlsbCB0eXBlIG9mIGJhY2tncm91bmQgaW1hZ2VcbiAgICovXG4gIGJhY2tncm91bmQ/OiBCYWNrZ3JvdW5kU3R5bGVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgYmFja2dyb3VuZCB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U/OiAoYmFja2dyb3VuZDogQmFja2dyb3VuZFN0eWxlKSA9PiB2b2lkXG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBjbGFzcyBuYW1lcyBhZGRlZCB0byB0aGUgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlbWVCYWNrZ3JvdW5kU2VjdGlvbiAocHJvcHM6IFRoZW1lQmFja2dyb3VuZFNlY3Rpb25Qcm9wcykge1xuICBjb25zdCB7IGJhY2tncm91bmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBjb25zdCBbaXNDdXN0b20sIHNldElzQ3VzdG9tXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG5cbiAgaG9va3MudXNlRWZmZWN0T25jZSgoKSA9PiB7XG4gICAgaWYgKGJhY2tncm91bmQgIT0gbnVsbCkge1xuICAgICAgaWYgKChiYWNrZ3JvdW5kLmltYWdlPy51cmwgIT0gbnVsbCAmJiBiYWNrZ3JvdW5kLmltYWdlPy51cmwgIT09ICcnKSB8fCBiYWNrZ3JvdW5kLmZpbGxUeXBlICE9PSBGaWxsVHlwZS5GSUxMKSB7XG4gICAgICAgIHNldElzQ3VzdG9tKHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSAoYmFja2dyb3VuZC5jb2xvciAhPSBudWxsICYmIGJhY2tncm91bmQuY29sb3IgIT09ICcnKSAmJiBUSEVNRV9CQUNLR1JPVU5EX0NPTE9SX0xJU1QuZXZlcnkoY29sb3IgPT4ge1xuICAgICAgICBpZiAoY29sb3IgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGB2YXIoLS0ke2NvbG9yfSlgICE9PSBiYWNrZ3JvdW5kLmNvbG9yXG4gICAgICB9KVxuXG4gICAgICBzZXRJc0N1c3RvbShyZXN1bHQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0SXNDdXN0b20oZmFsc2UpXG4gIH0pXG5cbiAgY29uc3Qgb25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2UgPSBSZWFjdC51c2VDYWxsYmFjaygodXNlQ3VzdG9tLCBjb25maWcpID0+IHtcbiAgICBpZiAodXNlQ3VzdG9tICE9PSBpc0N1c3RvbSkge1xuICAgICAgc2V0SXNDdXN0b20odXNlQ3VzdG9tKVxuICAgICAgaWYgKHVzZUN1c3RvbSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIG9uQ2hhbmdlKGNvbmZpZylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgYmcgPSBJbW11dGFibGUoYmFja2dyb3VuZCA/PyB7fSkgYXMgSW1tdXRhYmxlT2JqZWN0PEJhY2tncm91bmRTdHlsZT5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25maWcpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2ZpbGxUeXBlJzpcbiAgICAgICAgICBpZiAoYmcuZmlsbFR5cGUgIT09IGNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgICBiZyA9IGJnLnNldCgnZmlsbFR5cGUnLCBjb25maWdba2V5XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgIGJnID0gYmcuc2V0KCdjb2xvcicsIGNvbmZpZ1trZXldKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICBiZyA9IGJnLnNldCgnaW1hZ2UnLCBjb25maWdba2V5XSlcbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBvbkNoYW5nZShiZylcbiAgfSwgW2JhY2tncm91bmQsIGlzQ3VzdG9tLCBvbkNoYW5nZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8U2V0dGluZ1NlY3Rpb25cbiAgICAgIHJvbGU9J2dyb3VwJ1xuICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdiYWNrZ3JvdW5kJyl9XG4gICAgICB0aXRsZT17PGRpdiBjbGFzc05hbWU9J2QtZmxleCB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZSBzZXR0aW5nLXRleHQtbGV2ZWwtMSc+e3RyYW5zbGF0ZSgnYmFja2dyb3VuZCcpfTwvZGl2PlxuICAgICAgICA8VGhlbWVCYWNrZ3JvdW5kU2V0dGluZyBiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfSBpc0N1c3RvbT17aXNDdXN0b219IG9uQ2hhbmdlPXtvbkJhY2tncm91bmRTdHlsZUNoYW5nZX0vPlxuICAgICAgPC9kaXY+fVxuICAgID5cbiAgICAgIHtpc0N1c3RvbSAmJiAoXG4gICAgICAgIDxCYWNrZ3JvdW5kU2V0dGluZ1xuICAgICAgICAgIGNsYXNzTmFtZT0nbXQtNCdcbiAgICAgICAgICBiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoYmcpID0+IHsgb25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2UodHJ1ZSwgYmcpIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBjbGFzc05hbWVzLCBpbmplY3RJbnRsLCB0eXBlIEludGxTaGFwZSwgdHlwZSBJTVRoZW1lVmFyaWFibGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBCYWNrZ3JvdW5kU3R5bGUsIEZpbGxUeXBlLCBEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd25JdGVtLCBUb29sdGlwLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcbmltcG9ydCB7IENvbG9yc091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jb2xvcnMnXG5pbXBvcnQgeyBBY3RpdmVGbGFnIH0gZnJvbSAnLi90aGVtZS1hY3RpdmUtZmxhZydcblxuLyoqXG4gKiBUaGUgYFRoZW1lQmFja2dyb3VuZFNldHRpbmdgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJhY2tncm91bmRTZXR0aW5nUHJvcHMge1xuICBpc0N1c3RvbTogYm9vbGVhblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoaXMgY29tcG9uZW50LCBpbmNsdWRpbmcgdGhlIGJhY2tncm91bmQgY29sb3IsIGJhY2tncm91bmQgaW1hZ2UsIGFuZCB0aGUgZmlsbCB0eXBlIG9mIGJhY2tncm91bmQgaW1hZ2VcbiAgICovXG4gIGJhY2tncm91bmQ/OiBCYWNrZ3JvdW5kU3R5bGVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgYmFja2dyb3VuZCB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U/OiAodXNlQ3VzdG9tOiBib29sZWFuLCBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kU3R5bGUpID0+IHZvaWRcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGNsYXNzIG5hbWVzIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBFeHRyYVByb3BzIHtcbiAgaW50bD86IEludGxTaGFwZVxuICB0aGVtZTI/OiBJTVRoZW1lVmFyaWFibGVzXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzRHJvcGRvd25PcGVuOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBUSEVNRV9CQUNLR1JPVU5EX0NPTE9SX0xJU1QgPSBbbnVsbCwgJ3ByaW1hcnktMTAwJywgJ3ByaW1hcnktMjAwJywgJ3ByaW1hcnktMzAwJywgJ2xpZ2h0LTEwMCcsICdsaWdodC0zMDAnLCAnbGlnaHQtNTAwJywgJ2xpZ2h0LTcwMCddXG4vKipcbiAqIFRoZSBgVGhlbWVCYWNrZ3JvdW5kU2V0dGluZ2AgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBzZXQgdGhlIGJhY2tncnB1bmQgb2YgdGhlIGJveC5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgVGhlbWVCYWNrZ3JvdW5kU2V0dGluZyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBfVGhlbWVCYWNrZ3JvdW5kU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGhlbWVCYWNrZ3JvdW5kU2V0dGluZ1Byb3BzICYgRXh0cmFQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogUGFydGlhbDxUaGVtZUJhY2tncm91bmRTZXR0aW5nUHJvcHMgJiBFeHRyYVByb3BzPiA9IHtcbiAgICBiYWNrZ3JvdW5kOiB7IGNvbG9yOiB1bmRlZmluZWQsIGZpbGxUeXBlOiBGaWxsVHlwZS5GSVQsIGltYWdlOiB7IHVybDogJycgfSB9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7IH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IGlzRHJvcGRvd25PcGVuOiBmYWxzZSB9XG4gIH1cblxuICB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEcm9wZG93bk9wZW46ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25PcGVuIH0pXG4gIH1cblxuICBnZXRTdHlsZSA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUyIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGNvbG9yTmFtZVxuICAgIGxldCBzY2FsZVxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBjb25zdCBjb2xvcnMgPSBjb2xvci5zcGxpdCgnLScpXG4gICAgICBjb2xvck5hbWUgPSBjb2xvcnNbMF1cbiAgICAgIHNjYWxlID0gY29sb3JzWzFdXG4gICAgfVxuICAgIHJldHVybiBjc3NgXG4gICAgICB3aWR0aDogODhweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICY6bm90KC5oYXMtY29sb3IpIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZTIuY29sb3JzLnBhbGV0dGUuZGFya1syMDBdfTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIHRvIHRvcCByaWdodCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAxLjVweCksXG4gICAgICAgICAgJHt0aGVtZTIuY29sb3JzLnBhbGV0dGUuZGFya1syMDBdfSA1MCUsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDEuNXB4KSxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgICYuaGFzLWNvbG9yIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZTIuY29sb3JzLnBhbGV0dGVbY29sb3JOYW1lXT8uW3NjYWxlXX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUyLmNvbG9ycy5wYWxldHRlW2NvbG9yTmFtZV0/LltzY2FsZV19O1xuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIGNyZWF0ZUl0ZW0gPSAoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBiYWNrZ3JvdW5kLCBpc0N1c3RvbSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzZWxlY3RlZCA9IGlzQ3VzdG9tID8gZmFsc2UgOiAoY29sb3IgPT0gbnVsbCA/IChiYWNrZ3JvdW5kID09IG51bGwgfHwgYmFja2dyb3VuZC5jb2xvciA9PSBudWxsKSA6IGB2YXIoLS0ke2NvbG9yfSlgID09PSBiYWNrZ3JvdW5kLmNvbG9yKVxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgIGtleT17Y29sb3J9XG4gICAgICAgIGNsYXNzTmFtZT0namltdS1vdXRsaW5lLWluc2lkZSdcbiAgICAgICAgb25DbGljaz17KCkgPT4geyBvbkNoYW5nZShmYWxzZSwgeyBjb2xvcjogY29sb3IgIT0gbnVsbCA/IGB2YXIoLS0ke2NvbG9yfSlgIDogbnVsbCwgZmlsbFR5cGU6IEZpbGxUeXBlLkZJTEwgfSkgfX1cbiAgICAgICAgdGl0bGU9e2luZGV4ID09PSAwID8gdGhpcy50cmFuc2xhdGUoJ25vbmUnKSA6IHRoaXMudHJhbnNsYXRlKGBiYWNrZ3JvdW5kU3R5bGUke2luZGV4fWApfVxuICAgICAgICBhcmlhLWxhYmVsPXtpbmRleCA9PT0gMCA/IHRoaXMudHJhbnNsYXRlKCdub25lJykgOiB0aGlzLnRyYW5zbGF0ZShgYmFja2dyb3VuZFN0eWxlJHtpbmRleH1gKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17dGhpcy5nZXRTdHlsZShjb2xvcil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInLCB7XG4gICAgICAgICAgICAnaGFzLWNvbG9yJzogY29sb3IgIT0gbnVsbFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAge3NlbGVjdGVkICYmIDxBY3RpdmVGbGFnLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgKVxuICB9XG5cbiAgdHJhbnNsYXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRNZXNzYWdlcylcbiAgICByZXR1cm4gdGhpcy5wcm9wcz8uaW50bD8uZm9ybWF0TWVzc2FnZShcbiAgICAgIHsgaWQ6IGlkLCBkZWZhdWx0TWVzc2FnZTogbWVzc2FnZXNbaWRdIH1cbiAgICApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBvbkNoYW5nZSwgaXNDdXN0b20gfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25cbiAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzRHJvcGRvd25PcGVufSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCAnamltdS1idWlsZGVyLS10aGVtZS1iYWNrZ3JvdW5kLXNldHRpbmcnKX1cbiAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZURyb3Bkb3dufVxuICAgICAgPlxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGhpcy50cmFuc2xhdGUoJ3F1aWNrU3R5bGUnKX0+XG4gICAgICAgICAgPERyb3Bkb3duQnV0dG9uIGNsYXNzTmFtZT0namltdS1vdXRsaW5lLWluc2lkZScgaWNvbiB0eXBlPSd0ZXJ0aWFyeScgYXJyb3c9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxDb2xvcnNPdXRsaW5lZC8+XG4gICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZScgY3NzPXtjc3NgXG4gICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIC5wb3BwZXItYm94IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wZG93bi1tZW51LS1pbm5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5qaW11LWtleWJvYXJkLW5hdiAmIC5qaW11LWRyb3Bkb3duLWl0ZW06Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktNzAwKTtcbiAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFRIRU1FX0JBQ0tHUk9VTkRfQ09MT1JfTElTVC5tYXAoKGNvbG9yLCBpbmRleCkgPT4gdGhpcy5jcmVhdGVJdGVtKGNvbG9yLCBpbmRleCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIHB4LTInIGNzcz17Y3NzYGhlaWdodDogMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC03MDApO2B9PjwvZGl2PlxuICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0namltdS1vdXRsaW5lLWluc2lkZSdcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgIWlzQ3VzdG9tICYmIG9uQ2hhbmdlKHRydWUsIG51bGwpIH19XG4gICAgICAgICAgICB0aXRsZT17dGhpcy50cmFuc2xhdGUoJ2N1c3RvbScpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cmFuc2xhdGUoJ2N1c3RvbScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC04MDApO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTYwMCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgcHgtMSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMudHJhbnNsYXRlKCdjdXN0b20nKX1cbiAgICAgICAgICAgICAge2lzQ3VzdG9tICYmIDxBY3RpdmVGbGFnLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBgVGhlbWVCYWNrZ3JvdW5kU2V0dGluZ2AgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBzZXQgdGhlIGJhY2tncnB1bmQgb2YgdGhlIGJveC5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgVGhlbWVCYWNrZ3JvdW5kU2V0dGluZyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzJ1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBUaGVtZUJhY2tncm91bmRTZXR0aW5nID0gd2l0aFRoZW1lKGluamVjdEludGwoX1RoZW1lQmFja2dyb3VuZFNldHRpbmcpLCB0cnVlKVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgbG9kYXNoLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQm9yZGVyU3R5bGUsIHR5cGUgRm91clNpZGVzVW5pdCwgTm9ybWFsTGluZVR5cGUsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBUaGVtZUJvcmRlclNldHRpbmcsIFRIRU1FX0JPUkRFUl9DT0xPUl9MSVNUIH0gZnJvbSAnLi90aGVtZS1ib3JkZXItc2V0dGluZydcbmltcG9ydCB7IEJvcmRlclNldHRpbmcgfSBmcm9tICcuL2JvcmRlci1zZXR0aW5nJ1xuaW1wb3J0IHsgQm9yZGVyUmFkaXVzU2V0dGluZyB9IGZyb20gJy4vYm9yZGVyLXJhZGl1cy1zZXR0aW5nJ1xuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJvcmRlclNlY3Rpb25Qcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQsIGluY2x1ZGluZyB0aGUgYm9yZGVyIGNvbG9yLCBsaW5lIHN0eWxlIGFuZCB3aWR0aFxuICAgKi9cbiAgYm9yZGVyPzogQm9yZGVyU3R5bGVcblxuICBib3JkZXJSYWRpdXM/OiBGb3VyU2lkZXNVbml0IHwgSW1tdXRhYmxlT2JqZWN0PEZvdXJTaWRlc1VuaXQ+XG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGJvcmRlciB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25Cb3JkZXJDaGFuZ2U/OiAodmFsdWU6IEJvcmRlclN0eWxlKSA9PiB2b2lkXG5cbiAgb25Cb3JkZXJSYXNpdXNDaGFuZ2U/OiAodmFsdWU6IEZvdXJTaWRlc1VuaXQgfCBJbW11dGFibGVPYmplY3Q8Rm91clNpZGVzVW5pdD4pID0+IHZvaWRcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGNsYXNzIG5hbWVzIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZUJvcmRlclNlY3Rpb24gKHByb3BzOiBUaGVtZUJvcmRlclNlY3Rpb25Qcm9wcykge1xuICBjb25zdCB7IGJvcmRlciwgYm9yZGVyUmFkaXVzLCBvbkJvcmRlckNoYW5nZSwgb25Cb3JkZXJSYXNpdXNDaGFuZ2UgfSA9IHByb3BzXG4gIGNvbnN0IFtpc0N1c3RvbSwgc2V0SXNDdXN0b21dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChib3JkZXJSYWRpdXMgIT0gbnVsbCkge1xuICAgICAgc2V0SXNDdXN0b20odHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSBpZiAoYm9yZGVyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGJvcmRlci50eXBlICE9PSBOb3JtYWxMaW5lVHlwZS5TT0xJRCB8fCBib3JkZXIud2lkdGggIT09ICcycHgnIHx8IChib3JkZXIuY29sb3IgIT0gbnVsbCAmJiBib3JkZXIuY29sb3IgIT09ICcnICYmIFRIRU1FX0JPUkRFUl9DT0xPUl9MSVNULmV2ZXJ5KGNvbG9yID0+IHtcbiAgICAgICAgaWYgKGNvbG9yID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgdmFyKC0tJHtjb2xvcn0pYCAhPT0gYm9yZGVyLmNvbG9yXG4gICAgICB9KSlcbiAgICAgIHNldElzQ3VzdG9tKHJlc3VsdClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRJc0N1c3RvbShmYWxzZSlcbiAgfSwgW2JvcmRlciwgYm9yZGVyUmFkaXVzXSlcblxuICBjb25zdCB1cGRhdGVCb3JkZXJXaXRoVGhlbWUgPSBSZWFjdC51c2VDYWxsYmFjaygodXNlQ3VzdG9tLCBiZCkgPT4ge1xuICAgIGlmICh1c2VDdXN0b20gIT09IGlzQ3VzdG9tKSB7XG4gICAgICBzZXRJc0N1c3RvbSh1c2VDdXN0b20pXG4gICAgICBpZiAodXNlQ3VzdG9tKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIG9uQm9yZGVyUmFzaXVzQ2hhbmdlKG51bGwpXG4gICAgbG9kYXNoLmRlZmVyKCgpID0+IHtcbiAgICAgIG9uQm9yZGVyQ2hhbmdlKGJkKVxuICAgIH0pXG4gIH0sIFtpc0N1c3RvbSwgb25Cb3JkZXJDaGFuZ2UsIG9uQm9yZGVyUmFzaXVzQ2hhbmdlXSlcblxuICByZXR1cm4gKFxuICAgIDxTZXR0aW5nU2VjdGlvblxuICAgICAgcm9sZT0nZ3JvdXAnXG4gICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2JvcmRlcicpfVxuICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPSdkLWZsZXggdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgc2V0dGluZy10ZXh0LWxldmVsLTEnPnt0cmFuc2xhdGUoJ2JvcmRlcicpfTwvZGl2PlxuICAgICAgICA8VGhlbWVCb3JkZXJTZXR0aW5nIHZhbHVlPXtib3JkZXJ9IGlzQ3VzdG9tPXtpc0N1c3RvbX0gb25DaGFuZ2U9e3VwZGF0ZUJvcmRlcldpdGhUaGVtZX0vPlxuICAgICAgPC9kaXY+fVxuICAgID5cbiAgICAgIHtpc0N1c3RvbSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cbiAgICAgICAgICAgIDxCb3JkZXJTZXR0aW5nIHZhbHVlPXtib3JkZXJ9IG9uQ2hhbmdlPXtvbkJvcmRlckNoYW5nZX0gLz5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgbGFiZWw9e3RyYW5zbGF0ZSgnYm9yZGVyUmFkaXVzJyl9PlxuICAgICAgICAgICAgPEJvcmRlclJhZGl1c1NldHRpbmcgdmFsdWU9e2JvcmRlclJhZGl1cyBhcyBhbnl9IG9uQ2hhbmdlPXtvbkJvcmRlclJhc2l1c0NoYW5nZX0gLz5cbiAgICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvU2V0dGluZ1NlY3Rpb24+XG4gIClcbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBjbGFzc05hbWVzLCBpbmplY3RJbnRsLCB0eXBlIEludGxTaGFwZSwgdHlwZSBJTVRoZW1lVmFyaWFibGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBCb3JkZXJTdHlsZSwgTm9ybWFsTGluZVR5cGUsIERyb3Bkb3duLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duQnV0dG9uLCBEcm9wZG93bkl0ZW0sIFRvb2x0aXAsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgQ29sb3JzT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NvbG9ycydcbmltcG9ydCB7IEFjdGl2ZUZsYWcgfSBmcm9tICcuL3RoZW1lLWFjdGl2ZS1mbGFnJ1xuXG4vKipcbiAqIFRoZSBgVGhlbWVCb3JkZXJTZXR0aW5nYCBjb21wb25lbnQgcHJvcHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVCb3JkZXJTZXR0aW5nUHJvcHMge1xuICBpc0N1c3RvbTogYm9vbGVhblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoaXMgY29tcG9uZW50LCBpbmNsdWRpbmcgdGhlIGJvcmRlciBjb2xvciwgbGluZSBzdHlsZSBhbmQgd2lkdGhcbiAgICovXG4gIHZhbHVlPzogQm9yZGVyU3R5bGVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgYm9yZGVyIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZT86ICh1c2VDdXN0b206IGJvb2xlYW4sIHZhbHVlOiBCb3JkZXJTdHlsZSkgPT4gdm9pZFxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgY2xhc3MgbmFtZXMgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBpbnRsPzogSW50bFNoYXBlXG4gIHRoZW1lMj86IElNVGhlbWVWYXJpYWJsZXNcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNEcm9wZG93bk9wZW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IFRIRU1FX0JPUkRFUl9DT0xPUl9MSVNUID0gW251bGwsICdwcmltYXJ5LTIwMCcsICdwcmltYXJ5LTQwMCcsICdwcmltYXJ5LTYwMCcsICdsaWdodC0zMDAnLCAnbGlnaHQtNjAwJywgJ2xpZ2h0LTkwMCcsICdkYXJrLTMwMCddXG4vKipcbiAqIFRoZSBgVGhlbWVCb3JkZXJTZXR0aW5nYCBjb21wb25lbnQgYWxsb3dzIHVzZXJzIHRvIHNldCB0aGUgYmFja2dycHVuZCBvZiB0aGUgYm94LlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBUaGVtZUJvcmRlclNldHRpbmcgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgX1RoZW1lQm9yZGVyU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGhlbWVCb3JkZXJTZXR0aW5nUHJvcHMgJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBQYXJ0aWFsPFRoZW1lQm9yZGVyU2V0dGluZ1Byb3BzICYgRXh0cmFQcm9wcz4gPSB7XG4gICAgdmFsdWU6IHsgY29sb3I6IHVuZGVmaW5lZCwgdHlwZTogTm9ybWFsTGluZVR5cGUuU09MSUQsIHdpZHRoOiAnMnB4JyB9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7IH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IGlzRHJvcGRvd25PcGVuOiBmYWxzZSB9XG4gIH1cblxuICB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEcm9wZG93bk9wZW46ICF0aGlzLnN0YXRlLmlzRHJvcGRvd25PcGVuIH0pXG4gIH1cblxuICBnZXRTdHlsZSA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUyIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGNvbG9yTmFtZVxuICAgIGxldCBzY2FsZVxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBjb25zdCBjb2xvcnMgPSBjb2xvci5zcGxpdCgnLScpXG4gICAgICBjb2xvck5hbWUgPSBjb2xvcnNbMF1cbiAgICAgIHNjYWxlID0gY29sb3JzWzFdXG4gICAgfVxuICAgIHJldHVybiBjc3NgXG4gICAgICB3aWR0aDogODhweDtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICY6bm90KC5oYXMtY29sb3IpIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZTIuY29sb3JzLnBhbGV0dGUuZGFya1syMDBdfTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIHRvIHRvcCByaWdodCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDAlLFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMCkgY2FsYyg1MCUgLSAxLjVweCksXG4gICAgICAgICAgJHt0aGVtZTIuY29sb3JzLnBhbGV0dGUuZGFya1syMDBdfSA1MCUsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwKSBjYWxjKDUwJSArIDEuNXB4KSxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDApIDEwMCVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgICYuaGFzLWNvbG9yIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHt0aGVtZTIuY29sb3JzLnBhbGV0dGVbY29sb3JOYW1lXT8uW3NjYWxlXX07XG4gICAgICB9XG4gICAgYFxuICB9XG5cbiAgY3JlYXRlSXRlbSA9IChjb2xvciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlLCBpc0N1c3RvbSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzZWxlY3RlZCA9IGlzQ3VzdG9tXG4gICAgICA/IGZhbHNlXG4gICAgICA6IGNvbG9yID09IG51bGxcbiAgICAgICAgPyAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5jb2xvciA9PSBudWxsKVxuICAgICAgICA6IChgdmFyKC0tJHtjb2xvcn0pYCA9PT0gdmFsdWUuY29sb3IgJiYgdmFsdWUudHlwZSA9PT0gTm9ybWFsTGluZVR5cGUuU09MSUQgJiYgdmFsdWUud2lkdGggPT09ICcycHgnKVxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgIGtleT17Y29sb3J9XG4gICAgICAgIGNsYXNzTmFtZT0namltdS1vdXRsaW5lLWluc2lkZSdcbiAgICAgICAgb25DbGljaz17KCkgPT4geyBvbkNoYW5nZShmYWxzZSwgeyBjb2xvcjogY29sb3IgIT0gbnVsbCA/IGB2YXIoLS0ke2NvbG9yfSlgIDogbnVsbCwgdHlwZTogTm9ybWFsTGluZVR5cGUuU09MSUQsIHdpZHRoOiAnMnB4JyB9KSB9fVxuICAgICAgICB0aXRsZT17aW5kZXggPT09IDAgPyB0aGlzLnRyYW5zbGF0ZSgnbm9uZScpIDogdGhpcy50cmFuc2xhdGUoYGJvcmRlclN0eWxlJHtpbmRleH1gKX1cbiAgICAgICAgYXJpYS1sYWJlbD17aW5kZXggPT09IDAgPyB0aGlzLnRyYW5zbGF0ZSgnbm9uZScpIDogdGhpcy50cmFuc2xhdGUoYGJvcmRlclN0eWxlJHtpbmRleH1gKX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17dGhpcy5nZXRTdHlsZShjb2xvcil9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdoYXMtY29sb3InOiBjb2xvciAhPSBudWxsXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7c2VsZWN0ZWQgJiYgPEFjdGl2ZUZsYWcvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICApXG4gIH1cblxuICB0cmFuc2xhdGUgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE1lc3NhZ2VzKVxuICAgIHJldHVybiB0aGlzLnByb3BzPy5pbnRsPy5mb3JtYXRNZXNzYWdlKFxuICAgICAgeyBpZDogaWQsIGRlZmF1bHRNZXNzYWdlOiBtZXNzYWdlc1tpZF0gfVxuICAgIClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlzQ3VzdG9tLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93blxuICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNEcm9wZG93bk9wZW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsICdqaW11LWJ1aWxkZXItLXRoZW1lLWJvcmRlci1zZXR0aW5nJyl9XG4gICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGVEcm9wZG93bn1cbiAgICAgID5cbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3RoaXMudHJhbnNsYXRlKCdxdWlja1N0eWxlJyl9PlxuICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBjbGFzc05hbWU9J2ppbXUtb3V0bGluZS1pbnNpZGUnIGljb24gdHlwZT0ndGVydGlhcnknIGFycm93PXtmYWxzZX0+XG4gICAgICAgICAgICA8Q29sb3JzT3V0bGluZWQvPlxuICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUnIGNzcz17Y3NzYFxuICAgICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAucG9wcGVyLWJveCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJvcGRvd24tbWVudS0taW5uZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuamltdS1rZXlib2FyZC1uYXYgJiAuamltdS1kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTcwMCk7XG4gICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBUSEVNRV9CT1JERVJfQ09MT1JfTElTVC5tYXAoKGNvbG9yLCBpbmRleCkgPT4gdGhpcy5jcmVhdGVJdGVtKGNvbG9yLCBpbmRleCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0yIHB4LTInIGNzcz17Y3NzYGhlaWdodDogMXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC03MDApO2B9PjwvZGl2PlxuICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0namltdS1vdXRsaW5lLWluc2lkZSdcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgIWlzQ3VzdG9tICYmIG9uQ2hhbmdlKHRydWUsIG51bGwpIH19XG4gICAgICAgICAgICB0aXRsZT17dGhpcy50cmFuc2xhdGUoJ2N1c3RvbScpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cmFuc2xhdGUoJ2N1c3RvbScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC04MDApO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTYwMCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgcHgtMSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RoaXMudHJhbnNsYXRlKCdjdXN0b20nKX1cbiAgICAgICAgICAgICAge2lzQ3VzdG9tICYmIDxBY3RpdmVGbGFnLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBgVGhlbWVCb3JkZXJTZXR0aW5nYCBjb21wb25lbnQgYWxsb3dzIHVzZXJzIHRvIHNldCB0aGUgYmFja2dycHVuZCBvZiB0aGUgYm94LlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBUaGVtZUJvcmRlclNldHRpbmcgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgVGhlbWVCb3JkZXJTZXR0aW5nID0gd2l0aFRoZW1lKGluamVjdEludGwoX1RoZW1lQm9yZGVyU2V0dGluZyksIHRydWUpXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBCb3hTaGFkb3dTdHlsZSwgZGVmYXVsdE1lc3NhZ2VzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBUaGVtZUJveFNoYWRvd1NldHRpbmcgfSBmcm9tICcuL3RoZW1lLWJveC1zaGFkb3ctc2V0dGluZydcbmltcG9ydCB7IEJveFNoYWRvd1NldHRpbmcgfSBmcm9tICcuL2JveC1zaGFkb3ctc2V0dGluZydcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJveFNoYWRvd1NlY3Rpb25Qcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQsIGluY2x1ZGluZyB0aGUgY29sb3IsIG9mZnNldCwgZXRjLlxuICAgKi9cbiAgdmFsdWU/OiBCb3hTaGFkb3dTdHlsZVxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBib3ggc2hhZG93IHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZTogQm94U2hhZG93U3R5bGUpID0+IHZvaWRcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGNsYXNzIG5hbWVzIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVtZUJveFNoYWRvd1NlY3Rpb24gKHByb3BzOiBUaGVtZUJveFNoYWRvd1NlY3Rpb25Qcm9wcykge1xuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgW2lzQ3VzdG9tLCBzZXRJc0N1c3RvbV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNDdXN0b20odmFsdWUgIT0gbnVsbCAmJiB2YWx1ZT8ucHJlc2V0U3R5bGUgPT0gbnVsbClcbiAgfSwgW3ZhbHVlXSlcblxuICBjb25zdCB1cGRhdGVTaGFkb3dXaXRoVGhlbWUgPSBSZWFjdC51c2VDYWxsYmFjaygodXNlQ3VzdG9tLCBib3hzaGFkb3cpID0+IHtcbiAgICBpZiAodXNlQ3VzdG9tICE9PSBpc0N1c3RvbSkge1xuICAgICAgc2V0SXNDdXN0b20odXNlQ3VzdG9tKVxuICAgIH1cbiAgICBvbkNoYW5nZShib3hzaGFkb3cpXG4gIH0sIFtpc0N1c3RvbSwgb25DaGFuZ2VdKVxuXG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdTZWN0aW9uXG4gICAgICByb2xlPSdncm91cCdcbiAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnYm94U2hhZG93Jyl9XG4gICAgICB0aXRsZT17PGRpdiBjbGFzc05hbWU9J2QtZmxleCB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZSBzZXR0aW5nLXRleHQtbGV2ZWwtMSc+e3RyYW5zbGF0ZSgnYm94U2hhZG93Jyl9PC9kaXY+XG4gICAgICAgIDxUaGVtZUJveFNoYWRvd1NldHRpbmcgdmFsdWU9e3ZhbHVlfSBpc0N1c3RvbT17aXNDdXN0b219IG9uQ2hhbmdlPXt1cGRhdGVTaGFkb3dXaXRoVGhlbWV9Lz5cbiAgICAgIDwvZGl2Pn1cbiAgICA+XG4gICAgICB7aXNDdXN0b20gJiYgKFxuICAgICAgICA8Qm94U2hhZG93U2V0dGluZyBjbGFzc05hbWU9J210LTQnIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgKX1cbiAgICA8L1NldHRpbmdTZWN0aW9uPlxuICApXG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgaW5qZWN0SW50bCwgdHlwZSBJbnRsU2hhcGUsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEJveFNoYWRvd1N0eWxlLCBEcm9wZG93biwgRHJvcGRvd25NZW51LCBEcm9wZG93bkJ1dHRvbiwgRHJvcGRvd25JdGVtLCBUb29sdGlwLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgQ29sb3JzT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NvbG9ycydcbmltcG9ydCB7IENoZWNrT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrJ1xuaW1wb3J0IHsgZ2V0VGhlbWUyIH0gZnJvbSAnamltdS10aGVtZSdcblxuLyoqXG4gKiBUaGUgYEJveFNoYWRvd1NldHRpbmdgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUaGVtZUJveFNoYWRvd1NldHRpbmdQcm9wcyB7XG4gIGlzQ3VzdG9tOiBib29sZWFuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhpcyBjb21wb25lbnQsIGluY2x1ZGluZyB0aGUgY29sb3IsIG9mZnNldCwgZXRjLlxuICAgKi9cbiAgdmFsdWU/OiBCb3hTaGFkb3dTdHlsZVxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBib3ggc2hhZG93IHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZT86ICh1c2VDdXN0b206IGJvb2xlYW4sIHZhbHVlOiBCb3hTaGFkb3dTdHlsZSkgPT4gdm9pZFxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgY2xhc3MgbmFtZXMgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xuICBpbnRsPzogSW50bFNoYXBlXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzRHJvcGRvd25PcGVuOiBib29sZWFuXG59XG5cbmNvbnN0IE1PREVfTElTVCA9IHsgbm9uZTogJ3NoYWRvdy1ub25lJywgc21hbGw6ICdzaGFkb3ctc20nLCBkZWZhdWx0OiAnc2hhZG93JywgbGFyZ2U6ICdzaGFkb3ctbGcnIH1cblxuZnVuY3Rpb24gZ2V0UHJlZGVmaW5lZFNoYWRvdyAobW9kZTogc3RyaW5nKTogQm94U2hhZG93U3R5bGUge1xuICBjb25zdCB0aGVtZSA9IGdldFRoZW1lMigpXG4gIGxldCBib3hTaGFkb3c6IHN0cmluZ1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdub25lJzpcbiAgICAgIGJveFNoYWRvdyA9IHRoZW1lLmJveFNoYWRvd3Mubm9uZVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICBib3hTaGFkb3cgPSB0aGVtZS5ib3hTaGFkb3dzLnNtXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIGJveFNoYWRvdyA9IHRoZW1lLmJveFNoYWRvd3MubGdcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJveFNoYWRvdyA9IHRoZW1lLmJveFNoYWRvd3MuZGVmYXVsdFxuICB9XG4gIGlmIChib3hTaGFkb3cpIHtcbiAgICAvLyAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxuICAgIGNvbnN0IHRva2VucyA9IGJveFNoYWRvdy5zcGxpdCgnICcpXG4gICAgaWYgKHRva2Vucy5sZW5ndGggPj0gNSkge1xuICAgICAgY29uc3QgaW5kZXhPZlNwcmVhZCA9IGJveFNoYWRvdy5sYXN0SW5kZXhPZih0b2tlbnNbM10pXG4gICAgICByZXR1cm4ge1xuICAgICAgICBvZmZzZXRYOiB0b2tlbnNbMF0sXG4gICAgICAgIG9mZnNldFk6IHRva2Vuc1sxXSxcbiAgICAgICAgYmx1cjogdG9rZW5zWzJdLFxuICAgICAgICBzcHJlYWQ6IHRva2Vuc1szXSxcbiAgICAgICAgY29sb3I6IGJveFNoYWRvdy5zdWJzdHJpbmcoaW5kZXhPZlNwcmVhZCArIHRva2Vuc1szXS5sZW5ndGgpLnRyaW0oKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuLyoqXG4gKiBUaGUgYEJveFNoYWRvd1NldHRpbmdgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSBiYWNrZ3JwdW5kIG9mIHRoZSBib3guXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEJveFNoYWRvd1NldHRpbmcgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgX1RoZW1lQm94U2hhZG93U2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8VGhlbWVCb3hTaGFkb3dTZXR0aW5nUHJvcHMgJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBQYXJ0aWFsPFRoZW1lQm94U2hhZG93U2V0dGluZ1Byb3BzICYgRXh0cmFQcm9wcz4gPSB7XG4gICAgdmFsdWU6IHtcbiAgICAgIG9mZnNldFg6ICcwcHgnLFxuICAgICAgb2Zmc2V0WTogJzBweCcsXG4gICAgICBibHVyOiAnMHB4JyxcbiAgICAgIHNwcmVhZDogJzBweCcsXG4gICAgICBjb2xvcjogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBvbkNoYW5nZTogKCkgPT4geyB9XG4gIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBpc0Ryb3Bkb3duT3BlbjogZmFsc2UgfVxuICB9XG5cbiAgdHJhbnNsYXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogaWQsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXNbaWRdIH0pIDogaWRcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Ryb3Bkb3duT3BlbjogIXRoaXMuc3RhdGUuaXNEcm9wZG93bk9wZW4gfSlcbiAgfVxuXG4gIGdldFN0eWxlID0gKCkgPT4ge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBgXG4gIH1cblxuICBvbkN1c3RvbU1vZGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc0N1c3RvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHZhbHVlPy5wcmVzZXRTdHlsZSAhPSBudWxsKSB7XG4gICAgICBjb25zdCBtb2RlID0gT2JqZWN0LmtleXMoTU9ERV9MSVNUKS5maW5kKGlkID0+IE1PREVfTElTVFtpZF0gPT09IHZhbHVlLnByZXNldFN0eWxlKVxuICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgY29uc3QgYm94U2hhZG93ID0gZ2V0UHJlZGVmaW5lZFNoYWRvdyhtb2RlKVxuICAgICAgICBpZiAoYm94U2hhZG93KSB7XG4gICAgICAgICAgb25DaGFuZ2UodHJ1ZSwgYm94U2hhZG93KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG9uQ2hhbmdlKHRydWUsIHt9IGFzIGFueSlcbiAgfVxuXG4gIGlzRW1wdHkgKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuICh2YWx1ZS5wcmVzZXRTdHlsZSA9PSBudWxsIHx8IHZhbHVlLnByZXNldFN0eWxlID09PSBNT0RFX0xJU1Qubm9uZSkgJiYgWydvZmZzZXRYJywgJ29mZnNldFknLCAnYmx1cicsICdzcHJlYWQnXS5ldmVyeShrID0+IHZhbHVlW2tdID09IG51bGwgfHwgcGFyc2VJbnQodmFsdWVba10pID09PSAwKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY3JlYXRlSXRlbSA9IChtb2RlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgaXNDdXN0b20sIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSAhaXNDdXN0b20gJiYgKHZhbHVlLnByZXNldFN0eWxlID09PSBNT0RFX0xJU1RbbW9kZV0gfHwgKG1vZGUgPT09ICdub25lJyAmJiB0aGlzLmlzRW1wdHkoKSkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgY3NzPXt0aGlzLmdldFN0eWxlKCl9XG4gICAgICAgIGFyaWEtbGFiZWw9e3RoaXMudHJhbnNsYXRlKG1vZGUpfVxuICAgICAgICBrZXk9e21vZGV9XG4gICAgICAgIGFjdGl2ZT17c2VsZWN0ZWR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgb25DaGFuZ2UoZmFsc2UsIHsgcHJlc2V0U3R5bGU6IE1PREVfTElTVFttb2RlXSB9IGFzIGFueSkgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC10cnVuY2F0ZSc+XG4gICAgICAgICAge3NlbGVjdGVkICYmIDxDaGVja091dGxpbmVkLz59XG4gICAgICAgICAgeyFzZWxlY3RlZCAmJiA8ZGl2IGNzcz17Y3NzYHdpZHRoOiAxcmVtO2B9Lz59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xIG1sLTInPnt0aGlzLnRyYW5zbGF0ZShtb2RlKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpc0N1c3RvbSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93blxuICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNEcm9wZG93bk9wZW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsICdqaW11LWJ1aWxkZXItLXRoZW1lLWJ4LXNldHRpbmcnKX1cbiAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZURyb3Bkb3dufVxuICAgICAgPlxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17dGhpcy50cmFuc2xhdGUoJ3F1aWNrU3R5bGUnKX0+XG4gICAgICAgICAgPERyb3Bkb3duQnV0dG9uIGljb24gdHlwZT0ndGVydGlhcnknIGFycm93PXtmYWxzZX0gY2xhc3NOYW1lPSdqaW11LW91dGxpbmUtaW5zaWRlJz5cbiAgICAgICAgICAgIDxDb2xvcnNPdXRsaW5lZC8+XG4gICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZSc+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoTU9ERV9MSVNUKS5tYXAoKG1vZGUpID0+IHRoaXMuY3JlYXRlSXRlbShtb2RlKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J215LTIgcHgtMicgY3NzPXtjc3NgaGVpZ2h0OiAxcHg7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTcwMCk7YH0+PC9kaXY+XG4gICAgICAgICAgPERyb3Bkb3duSXRlbSBhY3RpdmU9e2lzQ3VzdG9tfSBvbkNsaWNrPXt0aGlzLm9uQ3VzdG9tTW9kZUNsaWNrfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgICB7aXNDdXN0b20gJiYgPENoZWNrT3V0bGluZWQvPn1cbiAgICAgICAgICAgICAgeyFpc0N1c3RvbSAmJiA8ZGl2IGNzcz17Y3NzYHdpZHRoOiAxcmVtO2B9Lz59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3ctMSBtbC0yJz57dGhpcy50cmFuc2xhdGUoJ2N1c3RvbScpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYEJveFNoYWRvd1NldHRpbmdgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHRoZSBiYWNrZ3JwdW5kIG9mIHRoZSBib3guXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEJveFNoYWRvd1NldHRpbmcgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgVGhlbWVCb3hTaGFkb3dTZXR0aW5nID0gaW5qZWN0SW50bChfVGhlbWVCb3hTaGFkb3dTZXR0aW5nKVxuIiwiaW1wb3J0IHsgVHJhbnNpdGlvblR5cGUgfSBmcm9tICdqaW11LWNvcmUnXG5cbmNvbnN0IG5vbmVJY29uID0gcmVxdWlyZSgnamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX3RyYW5zaXRpb25fbm9uZS5zdmcnKVxuY29uc3QgZmFkZUljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9mYWRlLnN2ZycpXG5jb25zdCBib3hJY29uID0gcmVxdWlyZSgnamltdS11aS9hZHZhbmNlZC9saWIvYXNzZXRzL2ljb25fYW5pbWF0aW9uX3RyYW5zaXRpb25fZG9vcndheS5zdmcnKVxuY29uc3QgY3ViZUljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25fdHJhbnNpdGlvbl9jdWJlLnN2ZycpXG5jb25zdCBwdXNoSWNvbiA9IHJlcXVpcmUoJ2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX3B1c2guc3ZnJylcbmNvbnN0IGNvdmVySWNvbiA9IHJlcXVpcmUoJ2ppbXUtdWkvYWR2YW5jZWQvbGliL2Fzc2V0cy9pY29uX2FuaW1hdGlvbl90cmFuc2l0aW9uX2NvdmVyLnN2ZycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdGlvbk1ldGFJbmZvIHtcbiAgdHlwZTogVHJhbnNpdGlvblR5cGVcbiAgaWNvbj86IGFueVxuICBzdXBwb3J0RGlyZWN0aW9uPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbkluZm9zOiBUcmFuc2l0aW9uTWV0YUluZm9bXSA9IFtcbiAge1xuICAgIGljb246IG5vbmVJY29uLFxuICAgIHR5cGU6IFRyYW5zaXRpb25UeXBlLk5vbmVcbiAgfSxcbiAge1xuICAgIHR5cGU6IFRyYW5zaXRpb25UeXBlLkJveCxcbiAgICBpY29uOiBib3hJY29uLFxuICAgIHN1cHBvcnREaXJlY3Rpb246IHRydWVcbiAgfSxcbiAge1xuICAgIHR5cGU6IFRyYW5zaXRpb25UeXBlLkNvdmVyLFxuICAgIGljb246IGNvdmVySWNvbixcbiAgICBzdXBwb3J0RGlyZWN0aW9uOiB0cnVlXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBUcmFuc2l0aW9uVHlwZS5DdWJlLFxuICAgIGljb246IGN1YmVJY29uLFxuICAgIHN1cHBvcnREaXJlY3Rpb246IHRydWVcbiAgfSxcbiAge1xuICAgIHR5cGU6IFRyYW5zaXRpb25UeXBlLkZhZGUsXG4gICAgaWNvbjogZmFkZUljb25cbiAgfSxcbiAge1xuICAgIHR5cGU6IFRyYW5zaXRpb25UeXBlLlB1c2gsXG4gICAgaWNvbjogcHVzaEljb24sXG4gICAgc3VwcG9ydERpcmVjdGlvbjogdHJ1ZVxuICB9XG5dXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIFJlYWN0LFxuICBqc3gsXG4gIGNzcyxcbiAgY2xhc3NOYW1lcyxcbiAgVHJhbnNpdGlvblR5cGUsXG4gIFRyYW5zaXRpb25EaXJlY3Rpb25cbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHR5cGUgeyBBbmltYXRpb25TZXR0aW5nIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgU2lkZVBvcHBlciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBTZWxlY3QsIFRhYnMsIFRhYiwgVG9vbHRpcCwgQnV0dG9uR3JvdXAgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHtcbiAgb25lQnlPbmVBbmltYXRpb25JbmZvc1xufSBmcm9tICcuL2FuaW1hdGlvbi1pbmZvJ1xuaW1wb3J0IHsgdHJhbnNpdGlvbkluZm9zIH0gZnJvbSAnLi90cmFuc2l0aW9uLWluZm8nXG5pbXBvcnQgdHlwZSB7IFRyYW5zaXRpb25NZXRhSW5mbyB9IGZyb20gJy4vdHJhbnNpdGlvbi1pbmZvJ1xuaW1wb3J0IEFuaW1hdGlvblBvcHBlckNvbnRlbnQgZnJvbSAnLi9hbmltYXRpb24tcG9wcGVyLWNvbnRlbnQnXG5pbXBvcnQgeyBQbGF5T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbGF5J1xuaW1wb3J0IHsgSW5mb091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mbydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb24ge1xuICB0eXBlOiBUcmFuc2l0aW9uVHlwZVxuICBkaXJlY3Rpb246IFRyYW5zaXRpb25EaXJlY3Rpb25cbn1cblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgdHJhbnNpdGlvbjogVHJhbnNpdGlvblxuICB0cmFuc2l0aW9uTGFiZWw/OiBzdHJpbmdcbiAgc2hvd09uZUJ5T25lPzogYm9vbGVhblxuICBvbmVCeU9uZUVmZmVjdD86IEFuaW1hdGlvblNldHRpbmdcbiAgb25UcmFuc2l0aW9uQ2hhbmdlOiAodHJhbnNpdGlvbjogVHJhbnNpdGlvbikgPT4gdm9pZFxuICBvbk9uZUJ5T25lQ2hhbmdlPzogKEFuaW1hdGlvblNldHRpbmcpID0+IHZvaWRcbiAgb25QcmV2aWV3VHJhbnNpdGlvbkNsaWNrZWQ6ICgpID0+IHZvaWRcbiAgb25QcmV2aWV3T25lQnlPbmVDbGlja2VkPzogKCkgPT4gdm9pZFxuICBvblByZXZpZXdBc0FXaG9uZUNsaWNrZWQ6ICgpID0+IHZvaWRcbiAgZm9ybWF0TWVzc2FnZTogKGlkOiBzdHJpbmcpID0+IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93U2lkZVBhbmVsOiBib29sZWFuXG59XG5cbmNvbnN0IGFuaW1hdGlvbkljb24gPSByZXF1aXJlKCdqaW11LXVpL2FkdmFuY2VkL2xpYi9hc3NldHMvaWNvbl9hbmltYXRpb25faW5fbm9uZS5zdmcnKVxuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvblNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzLCBTdGF0ZT4ge1xuICBzaWRlUG9wcGVyVHJpZ2dlciA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKVxuICBidXR0b25SZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KClcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBQYXJ0aWFsPE93blByb3BzPiA9IHtcbiAgICBmb3JtYXRNZXNzYWdlOiBpZCA9PiBpZCxcbiAgICBzaG93T25lQnlPbmU6IHRydWUsXG4gICAgb25QcmV2aWV3T25lQnlPbmVDbGlja2VkOiAoKSA9PiB7fVxuICB9XG5cbiAgbW9kYWxTdHlsZTogYW55ID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzYwcHgnLFxuICAgIGJvdHRvbTogJzAnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93U2lkZVBhbmVsOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNpZGVQYW5lbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1NpZGVQYW5lbDogIXRoaXMuc3RhdGUuc2hvd1NpZGVQYW5lbCB9KVxuICB9XG5cbiAgcHJldmlld1RyYW5zaXRpb24gPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB0aGlzLnByb3BzLm9uUHJldmlld1RyYW5zaXRpb25DbGlja2VkKClcbiAgfVxuXG4gIGNyZWF0ZVRyYW5zaXRpb25DYXJkIChtZXRhSW5mbzogVHJhbnNpdGlvbk1ldGFJbmZvLCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyB0cmFuc2l0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdHJhbnNpdGlvblR5cGUgPSB0cmFuc2l0aW9uLnR5cGUgfHwgVHJhbnNpdGlvblR5cGUuTm9uZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBjYXJkLWl0ZW0nLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IG1ldGFJbmZvLnR5cGUgPT09IHRyYW5zaXRpb25UeXBlXG4gICAgICAgIH0pfVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWNvblxuICAgICAgICAgIHJvbGU9J29wdGlvbidcbiAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLmZvcm1hdE1lc3NhZ2UobWV0YUluZm8udHlwZS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICBhcmlhLXNlbGVjdGVkPXttZXRhSW5mby50eXBlID09PSB0cmFuc2l0aW9uVHlwZX1cbiAgICAgICAgICBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGNhcmQtY29udGVudCBib3JkZXItMCdcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRoaXMub25UcmFuc2l0aW9uVHlwZUNoYW5nZWQobWV0YUluZm8udHlwZSkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnIGN1cnJlbnRDb2xvcj17ZmFsc2V9IGljb249e21ldGFJbmZvLmljb24gfHwgYW5pbWF0aW9uSWNvbn0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLW5hbWUgZmxleC1ncm93LTEgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IG10LTEnPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtY2VudGVyIGNhcmQtbmFtZS1jb250ZW50J1xuICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZShtZXRhSW5mby50eXBlLnRvTG93ZXJDYXNlKCkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmZvcm1hdE1lc3NhZ2UobWV0YUluZm8udHlwZS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY3JlYXRlRGlyZWN0aW9uQ2hvb3NlciAoKSB7XG4gICAgY29uc3QgeyB0cmFuc2l0aW9uIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXJlY3Rpb24tc2VsZWN0IHB4LTQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlyZWN0aW9uLXRpdGxlIG1iLTInPnt0aGlzLnByb3BzLmZvcm1hdE1lc3NhZ2UoJ2RpcmVjdGlvbicpfTwvZGl2PlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtUcmFuc2l0aW9uRGlyZWN0aW9uLkhvcml6b250YWx9XG4gICAgICAgICAgdmFsdWU9e3RyYW5zaXRpb24/LmRpcmVjdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRpcmVjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgID5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoVHJhbnNpdGlvbkRpcmVjdGlvbikubWFwKChlbnRyeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2VudHJ5WzFdfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZm9ybWF0TWVzc2FnZShlbnRyeVswXS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGdldFNpZGVQb3BwZXJTdHlsZSAoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC50YWItcGFuZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuICAgICAgLnNpZGUtcG9wcGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstNjAwKTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLmRpcmVjdGlvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLTYwMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5hbmltYXRpb24tY2FyZHMge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBncmlkLXJvdy1nYXA6IDEycHg7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LTUwMCk7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsZXg6IDAgMCA0NSU7XG5cbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNS4zcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LTIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTYwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1uYW1lIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstODAwKTtcbiAgICAgICAgICAuY2FyZC1uYW1lLWNvbnRlbnQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIGdldEFuaW1Cb3hTdHlsZSAoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5pbWctdGlwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYsICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LTIwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLXNpYmxpbmcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLnNlY29uZCB7XG4gICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRpYWctc2VwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgdG9wOiAzNnB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LTUwMCk7XG5cbiAgICAgICAgICAuamltdS1ydGwgJiB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYW1pbi1pY29ucyAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDI2cHg7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogLjVyZW07XG4gICAgICAgIC5qaW11LWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYW5pbS1sYWJlbHMge1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICAuYW5pbS1sYWJlbCB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIG9uVHJhbnNpdGlvblR5cGVDaGFuZ2VkID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJhbnNpdGlvbj8udHlwZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25QcmV2aWV3VHJhbnNpdGlvbkNsaWNrZWQoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLm9uVHJhbnNpdGlvbkNoYW5nZSh7XG4gICAgICAgIHR5cGU6IHZhbHVlLFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMucHJvcHMudHJhbnNpdGlvbj8uZGlyZWN0aW9uXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uRGlyZWN0aW9uQ2hhbmdlZCA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblRyYW5zaXRpb25DaGFuZ2Uoe1xuICAgICAgdHlwZTogdGhpcy5wcm9wcy50cmFuc2l0aW9uPy50eXBlLFxuICAgICAgZGlyZWN0aW9uOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBwcmV2aWV3T25lQnlPbmVFZmZlY3QgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblByZXZpZXdPbmVCeU9uZUNsaWNrZWQoKVxuICB9XG5cbiAgb25QcmV2aWV3QXNBV2hvbmVDbGlja2VkID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgdGhpcy5wcm9wcy5vblByZXZpZXdBc0FXaG9uZUNsaWNrZWQoKVxuICB9XG5cbiAgb25PbmVieU9uZVNldHRpbmdDaGFuZ2UgPSAobW9kZSwgc2V0dGluZykgPT4ge1xuICAgIHRoaXMucHJvcHMub25PbmVCeU9uZUNoYW5nZShzZXR0aW5nKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGZvcm1hdE1lc3NhZ2UsIHRyYW5zaXRpb24sIHRyYW5zaXRpb25MYWJlbCwgb25lQnlPbmVFZmZlY3QsIHNob3dPbmVCeU9uZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHVzZWRUcmFuc2l0aW9uSW5mbyA9IHRyYW5zaXRpb25JbmZvcy5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IHRyYW5zaXRpb24/LnR5cGUpXG4gICAgY29uc3QgdXNlZE9uZUJ5T25lRWZmZWN0ID0gb25lQnlPbmVBbmltYXRpb25JbmZvcy5maW5kKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IG9uZUJ5T25lRWZmZWN0Py50eXBlKVxuICAgIGNvbnN0IGljb25TaXplID0gc2hvd09uZUJ5T25lID8gMzIgOiA0OFxuXG4gICAgY29uc3QgdHJhbnNpdGlvbk5hbWUgPSB0cmFuc2l0aW9uPy50eXBlID8gZm9ybWF0TWVzc2FnZSh0cmFuc2l0aW9uLnR5cGUudG9Mb3dlckNhc2UoKSkgOiBmb3JtYXRNZXNzYWdlKCdub25lJylcbiAgICBjb25zdCBvbmVCeU9uZUVmZmVjdE5hbWUgPSBvbmVCeU9uZUVmZmVjdD8udHlwZSA/IGZvcm1hdE1lc3NhZ2Uob25lQnlPbmVFZmZlY3QudHlwZS50b0xvd2VyQ2FzZSgpKSA6IGZvcm1hdE1lc3NhZ2UoJ25vbmUnKVxuICAgIGxldCBhcmlhTGFiZWwgPSB0cmFuc2l0aW9uTmFtZVxuICAgIGlmIChzaG93T25lQnlPbmUpIHtcbiAgICAgIGFyaWFMYWJlbCA9IGFyaWFMYWJlbCArICcvJyArIG9uZUJ5T25lRWZmZWN0TmFtZVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2FuaW1hLWJveCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTEnXG4gICAgICAgICAgY3NzPXt0aGlzLmdldEFuaW1Cb3hTdHlsZSgpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbWctdGlwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItMCdcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlU2lkZVBhbmVsfVxuICAgICAgICAgICAgdGl0bGU9e2FyaWFMYWJlbH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgICAgIGljb25cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYW5pbS1pY29uIGZpcnN0JywgeyAnaGFzLXNpYmxpbmcnOiBzaG93T25lQnlPbmUgfSl9PlxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXt1c2VkVHJhbnNpdGlvbkluZm8/Lmljb24gfHwgYW5pbWF0aW9uSWNvbn0gc2l6ZT17aWNvblNpemV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93T25lQnlPbmUgJiYgPGRpdiBjbGFzc05hbWU9J2RpYWctc2VwJyAvPn1cbiAgICAgICAgICAgIHtzaG93T25lQnlPbmUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYW5pbS1pY29uIHNlY29uZCcsIHsgJ2hhcy1zaWJsaW5nJzogc2hvd09uZUJ5T25lIH0pfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXt1c2VkT25lQnlPbmVFZmZlY3Q/Lmljb24gfHwgYW5pbWF0aW9uSWNvbn0gc2l6ZT17aWNvblNpemV9IC8+XG4gICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWwtMiBoLTEwMCBmbGV4LWdyb3ctMSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FuaW0tbGFiZWxzIGQtZmxleCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltLWxhYmVsJz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dHJhbnNpdGlvbk5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIHtzaG93T25lQnlPbmUgJiYgPHNwYW4gY2xhc3NOYW1lPSdteC0xJz4vPC9zcGFuPn1cbiAgICAgICAgICAgICAgICB7c2hvd09uZUJ5T25lICYmIDxzcGFuPntvbmVCeU9uZUVmZmVjdE5hbWV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtmb3JtYXRNZXNzYWdlKCdhbmltYXRpb25PblRyYW5zaXRpb24nKX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwLTAnXG4gICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbmZvT3V0bGluZWQgc2l6ZT0nbScvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbWluLWljb25zIHctMTAwJyByZWY9e3RoaXMuc2lkZVBvcHBlclRyaWdnZXJ9PlxuICAgICAgICAgICAgICA8QnV0dG9uIHJlZj17dGhpcy5idXR0b25SZWZ9IGFyaWEtbGFiZWw9e2Zvcm1hdE1lc3NhZ2UoJ2NoYW5nZScpfSBzaXplPSdzbScgb25DbGljaz17dGhpcy50b2dnbGVTaWRlUGFuZWx9IGNsYXNzTmFtZT0ndGV4dC10cnVuY2F0ZScgdGl0bGU9e2Zvcm1hdE1lc3NhZ2UoJ2NoYW5nZScpfT5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0TWVzc2FnZSgnY2hhbmdlJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17Zm9ybWF0TWVzc2FnZSgncHJldmlldycpfSBwbGFjZW1lbnQ9J2JvdHRvbSc+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nZGVmYXVsdCdcbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblByZXZpZXdBc0FXaG9uZUNsaWNrZWR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBsYXlPdXRsaW5lZCBzaXplPSdzJy8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NpZGVQYW5lbCAmJiAoXG4gICAgICAgICAgPFNpZGVQb3BwZXJcbiAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgcG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZVNpZGVQYW5lbH1cbiAgICAgICAgICAgIHRyaWdnZXI9e3RoaXMuc2lkZVBvcHBlclRyaWdnZXI/LmN1cnJlbnR9XG4gICAgICAgICAgICB0aXRsZT17Zm9ybWF0TWVzc2FnZSgnc2V0dGluZycpfVxuICAgICAgICAgICAgYmFja1RvRm9jdXNOb2RlPXt0aGlzLmJ1dHRvblJlZj8uY3VycmVudH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNzcz17dGhpcy5nZXRTaWRlUG9wcGVyU3R5bGUoKX0gc3R5bGU9e3RoaXMubW9kYWxTdHlsZX0+XG4gICAgICAgICAgICAgIHshc2hvd09uZUJ5T25lICYmXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1saWdodC0zMDAgYm9yZGVyLWNvbG9yLWdyYXktNDAwIG10LTQnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwIGFuaW1hdGlvbi1wYW5lbC1ib3JkZXInPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgcm9sZT0nbGlzdGJveCcgY2xhc3NOYW1lPSdhbmltYXRpb24tY2FyZHMnPlxuICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2l0aW9uSW5mb3MubWFwKChlbnRyeSwgaW5kZXgpID0+IHRoaXMuY3JlYXRlVHJhbnNpdGlvbkNhcmQoZW50cnksIGluZGV4KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VkVHJhbnNpdGlvbkluZm8/LnN1cHBvcnREaXJlY3Rpb24gJiYgPGRpdiBjbGFzc05hbWU9J3NlcGFyYXRvcicgLz59XG4gICAgICAgICAgICAgICAgICAgIHt1c2VkVHJhbnNpdGlvbkluZm8/LnN1cHBvcnREaXJlY3Rpb24gJiYgdGhpcy5jcmVhdGVEaXJlY3Rpb25DaG9vc2VyKCl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgIHtzaG93T25lQnlPbmUgJiYgKFxuICAgICAgICAgICAgICAgIDxUYWJzIHR5cGU9J3VuZGVybGluZScga2V5PSd3aWRnZXQtc2V0dGluZycgY2xhc3NOYW1lPSdmbGV4LWdyb3ctMSB3LTEwMCBoLTEwMCcgZmlsbCBkZWZhdWx0VmFsdWU9J3RyYW5zaXRpb24nPlxuICAgICAgICAgICAgICAgICAgPFRhYiBpZD0ndHJhbnNpdGlvbicgdGl0bGU9e3RyYW5zaXRpb25MYWJlbH0gY2xhc3NOYW1lPSd0YWItdGl0bGUtaXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWxpZ2h0LTMwMCBib3JkZXItY29sb3ItZ3JheS00MDAgbXQtNCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBoLTEwMCBhbmltYXRpb24tcGFuZWwtYm9yZGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbmltYXRpb24tY2FyZHMnIHJvbGU9J2xpc3Rib3gnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNpdGlvbkluZm9zLm1hcCgoZW50cnksIGluZGV4KSA9PiB0aGlzLmNyZWF0ZVRyYW5zaXRpb25DYXJkKGVudHJ5LCBpbmRleCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlZFRyYW5zaXRpb25JbmZvPy5zdXBwb3J0RGlyZWN0aW9uICYmIDxkaXYgY2xhc3NOYW1lPSdzZXBhcmF0b3InIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZWRUcmFuc2l0aW9uSW5mbz8uc3VwcG9ydERpcmVjdGlvbiAmJiB0aGlzLmNyZWF0ZURpcmVjdGlvbkNob29zZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWIgaWQ9J3dpZGdldCcgdGl0bGU9e2Zvcm1hdE1lc3NhZ2UoJ3dpZGdldCcpfSBjbGFzc05hbWU9J3RhYi10aXRsZS1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGlvblBvcHBlckNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICBlZmZlY3RTZXR0aW5nPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIG9uZUJ5T25lU2V0dGluZz17b25lQnlPbmVFZmZlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgb25TZXR0aW5nQ2hhbmdlPXt0aGlzLm9uT25lYnlPbmVTZXR0aW5nQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdFbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydE9uZUJ5T25lXG4gICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydEFzT25lPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICBvblByZXZpZXdDbGlja2VkPXt0aGlzLnByZXZpZXdPbmVCeU9uZUVmZmVjdH1cbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRNZXNzYWdlPXt0aGlzLnByb3BzLmZvcm1hdE1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1NpZGVQb3BwZXI+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIGxvZGFzaCwgcG9saXNoZWQgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBOdW1lcmljSW5wdXQsIElucHV0R3JvdXAsIHR5cGUgSW5wdXRHcm91cFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgU3VwcG9ydGVkVW5pdHMsIFVuaXRTZWxlY3RvciB9IGZyb20gJy4vdW5pdC1zZWxlY3RvcidcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFZhbHVlIHtcbiAgdmFsOiBudW1iZXJcbiAgdW5pdDogU3VwcG9ydGVkVW5pdHNcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVVuaXRWYWx1ZSA9IFVuaXRWYWx1ZSB8IHN0cmluZ1xuXG4vKipcbiAqIFRoZSBgQmFzZVVuaXRJbnB1dGAgY29tcG9uZW50IHByb3BzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VVbml0SW5wdXRQcm9wcyBleHRlbmRzIE9taXQ8SW5wdXRHcm91cFByb3BzLCAndmFsdWUnPiB7XG4gIC8qKlxuICAgKiBUbyBwcm92aWRlIGEgbGFiZWwgZm9yIGludGVyYWN0aXZlIGNvbXBvbmVudHMgZm9yIGFjY2Vzc2liaWxpdHkgcHVycG9zZXMuXG4gICAqL1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFN1cHBvcnRlZCB1bml0cyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqIEBkZWZhdWx0IFsncHgnXVxuICAgKi9cbiAgdW5pdHM/OiBTdXBwb3J0ZWRVbml0c1tdXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCB7dmFsOjAsdW5pdDpweH1cbiAgICovXG4gIHZhbHVlPzogQmFzZVVuaXRWYWx1ZVxuICAvKipcbiAgICogRGlzYWJsZSBpbnB1dCBhbmQgc2VsZWN0aW9uIG9mIHVuaXRzLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHByZWNpc2lvbiBsZW5ndGggb2YgdGhlIHZhbHVlIChudW1iZXIgb2YgZGVjaW1hbCBkaWppdHMpLlxuICAgKi9cbiAgcHJlY2lzaW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSB2YWx1ZSB0byBhY2NlcHQgZm9yIHRoZSBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBtaW4/OiBudW1iZXJcbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHZhbHVlIHRvIGFjY2VwdCBmb3IgdGhlIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIG1heD86IG51bWJlclxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IFVuaXRWYWx1ZSwgZXZ0PzogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZFxufVxuXG5jb25zdCBEZWZhdWx0VmFsdWU6IFVuaXRWYWx1ZSA9IHtcbiAgdmFsOiAwLFxuICB1bml0OiAncHgnXG59XG5cbmNvbnN0IERlZmF1bHRVbml0czogU3VwcG9ydGVkVW5pdHNbXSA9IFsncHgnXVxuXG5jb25zdCBSb290ID0gc3R5bGVkKElucHV0R3JvdXApYFxuICB3aWR0aDogMTAwJTtcbiAgLmppbXUtbnVtZXJpYy1pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICB6LWluZGV4OiAwO1xuICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjZweClcbiAgfVxuXG4gID4gLnN0eWxlLXNldHRpbmctLXVuaXQtc2VsZWN0b3IgYnV0dG9uIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuYFxuXG5jb25zdCBwYXJzZVZhbHVlID0gKHZhbHVlOiBCYXNlVW5pdFZhbHVlKTogVW5pdFZhbHVlID0+IHtcbiAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHJldHVybiB2YWx1ZVxuICBjb25zdCByZXQgPSBwb2xpc2hlZC5nZXRWYWx1ZUFuZFVuaXQodmFsdWUpXG4gIHJldHVybiB7XG4gICAgdmFsOiByZXQ/LlswXSxcbiAgICB1bml0OiByZXQ/LlsxXSB8fCAncHgnXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYEJhc2VVbml0SW5wdXRgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IHVuaXRzIGFuZCB2YWx1ZXMuXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IEJhc2VVbml0SW5wdXQgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgQmFzZVVuaXRJbnB1dCA9IChwcm9wczogQmFzZVVuaXRJbnB1dFByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtaW4sXG4gICAgbWF4LFxuICAgIHByZWNpc2lvbixcbiAgICBjbGFzc05hbWUsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICB1bml0cyA9IERlZmF1bHRVbml0cyxcbiAgICB2YWx1ZTogcHJvcFZhbHVlID0gRGVmYXVsdFZhbHVlLFxuICAgIG9uQ2hhbmdlLFxuICAgICdhcmlhLWxhYmVsJzogcHJvcEFyaWFMYWJlbCxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgdmFsdWUgPSBwYXJzZVZhbHVlKHByb3BWYWx1ZSlcblxuICBjb25zdCBhcmlhTGFiZWwgPVxuICAgIHZhbHVlICE9PSBudWxsXG4gICAgICA/IGAke3Byb3BBcmlhTGFiZWwgPyBgJHtwcm9wQXJpYUxhYmVsfSwgYCA6ICcnfSR7dmFsdWUudW5pdH1gXG4gICAgICA6IHByb3BBcmlhTGFiZWxcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChcbiAgICB2YWw6IG51bWJlcixcbiAgICBldnQ/OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIGlmICh2YWwgPT0gbnVsbCAmJiAodmFsdWU/LnZhbCBhcyBhbnkpID09PSAnJykgcmV0dXJuXG4gICAgb25DaGFuZ2U/Lihsb2Rhc2guYXNzaWduKHt9LCB2YWx1ZSwgeyB2YWwgfSksIGV2dClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVuaXRDaGFuZ2UgPSAoX3VuaXQ6IFN1cHBvcnRlZFVuaXRzKSA9PiB7XG4gICAgb25DaGFuZ2U/Lihsb2Rhc2guYXNzaWduKHt9LCB2YWx1ZSwgeyB1bml0OiBfdW5pdCB9KSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJvb3RcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsICdzdHlsZS1zZXR0aW5nLS1iYXNlLXVuaXQtaW5wdXQnKX1cbiAgICAgIHsuLi5vdGhlcnN9XG4gICAgPlxuICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIHNpemU9J3NtJ1xuICAgICAgICBtaW49e21pbn1cbiAgICAgICAgbWF4PXttYXh9XG4gICAgICAgIHByZWNpc2lvbj17cHJlY2lzaW9ufVxuICAgICAgICB2YWx1ZT17aXNOYU4odmFsdWUudmFsKSA/ICcnIDogdmFsdWUudmFsfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHNob3dIYW5kbGVycz17ZmFsc2V9XG4gICAgICAgIG9uQWNjZXB0VmFsdWU9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxVbml0U2VsZWN0b3JcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICB1bml0cz17dW5pdHN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZS51bml0fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVW5pdENoYW5nZX1cbiAgICAgIC8+XG4gICAgPC9Sb290PlxuICApXG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBCYXNlVW5pdElucHV0IH0gZnJvbSAnLi9iYXNlLXVuaXQtaW5wdXQnXG5pbXBvcnQgeyB0eXBlIElucHV0VW5pdFByb3BzIH0gZnJvbSAnLi9pbnB1dC11bml0J1xuaW1wb3J0IHsgdHlwZSBEYXRlVGltZVVuaXRzIH0gZnJvbSAnLi91bml0LXNlbGVjdG9yJ1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVVbml0SW5wdXRWYWx1ZSB7XG4gIHZhbDogbnVtYmVyXG4gIHVuaXQ6IERhdGVUaW1lVW5pdHNcbn1cblxuLyoqXG4gKiBUaGUgYERhdGVVbml0SW5wdXRgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRlVW5pdElucHV0UHJvcHMgZXh0ZW5kcyBPbWl0PElucHV0VW5pdFByb3BzLCAndW5pdHMnPiB7XG4gIC8qKlxuICAgKiBTdXBwb3J0ZWQgdW5pdHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCBbJ3B4J11cbiAgICovXG4gIHVuaXRzPzogRGF0ZVRpbWVVbml0c1tdXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCB7ZGlzdGFuY2U6MCx1bml0OnB4fVxuICAgKi9cbiAgdmFsdWU/OiBEYXRlVW5pdElucHV0VmFsdWVcbiAgLyoqXG4gICAqIEludm9rZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIG9uQ2hhbmdlPzogKFxuICAgIHZhbHVlOiBEYXRlVW5pdElucHV0VmFsdWUsXG4gICAgZXZ0PzogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHZvaWRcbn1cblxuY29uc3QgRGVmYXVsdFZhbHVlOiBEYXRlVW5pdElucHV0VmFsdWUgPSB7XG4gIHZhbDogMCxcbiAgdW5pdDogJ3llYXInXG59XG5cbmNvbnN0IERlZmF1bHRVbml0czogRGF0ZVRpbWVVbml0c1tdID0gWyd5ZWFyJ11cblxuY29uc3QgUm9vdCA9IHN0eWxlZChCYXNlVW5pdElucHV0KWBcbiAuamltdS1udW1lcmljLWlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweClcbiAgfVxuICA+IC5zdHlsZS1zZXR0aW5nLS11bml0LXNlbGVjdG9yIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDYwcHg7XG4gIH1cbmBcblxuLyoqXG4gKiBUaGUgYERhdGVVbml0SW5wdXRgIGNvbXBvbmVudCBhbGxvd3MgdXNlcnMgdG8gc2V0IGRhdGUgdGltZSB1bml0cyBhbmQgdmFsdWVzLlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBEYXRlVW5pdElucHV0IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IERhdGVVbml0SW5wdXQgPSAocHJvcHM6IERhdGVVbml0SW5wdXRQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHZhbHVlID0gRGVmYXVsdFZhbHVlLFxuICAgIHVuaXRzID0gRGVmYXVsdFVuaXRzLFxuICAgIC4uLm90aGVyc1xuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxSb290XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCAnc3R5bGUtc2V0dGluZy0tZGF0ZS11bml0LWlucHV0Jyl9XG4gICAgICB7Li4ub3RoZXJzfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgdW5pdHM9e3VuaXRzfVxuICAgIC8+XG4gIClcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vdW5pdC1zZWxlY3RvcidcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQtdW5pdCdcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS11bml0LWlucHV0J1xuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCYXNlVW5pdElucHV0LCB0eXBlIEJhc2VVbml0SW5wdXRQcm9wcywgdHlwZSBCYXNlVW5pdFZhbHVlLCB0eXBlIFVuaXRWYWx1ZSB9IGZyb20gJy4vYmFzZS11bml0LWlucHV0J1xuaW1wb3J0IHsgdHlwZSBEaXN0YW5jZVVuaXRzIH0gZnJvbSAnLi91bml0LXNlbGVjdG9yJ1xuaW1wb3J0IHsgdHlwZSBMaW5lYXJVbml0IH0gZnJvbSAnamltdS11aSdcblxuZXhwb3J0IHR5cGUgSW5wdXRVbml0VmFsdWUgPSBMaW5lYXJVbml0IHwgc3RyaW5nXG5cbi8qKlxuICogVGhlIGBJbnB1dFVuaXRgIGNvbXBvbmVudCBwcm9wcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnB1dFVuaXRQcm9wcyBleHRlbmRzIE9taXQ8QmFzZVVuaXRJbnB1dFByb3BzLCAndmFsdWUnPiB7XG4gIC8qKlxuICAgKiBTdXBwb3J0ZWQgdW5pdHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCBbJ3B4J11cbiAgICovXG4gIHVuaXRzPzogRGlzdGFuY2VVbml0c1tdXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgY29tcG9uZW50LlxuICAgKiBAZGVmYXVsdCB7ZGlzdGFuY2U6MCx1bml0OnB4fVxuICAgKi9cbiAgdmFsdWU/OiBJbnB1dFVuaXRWYWx1ZVxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU6IExpbmVhclVuaXQsIGV2dD86IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcbn1cblxuY29uc3QgRGVmYXVsdFZhbHVlID0ge1xuICBkaXN0YW5jZTogMCxcbiAgdW5pdDogJ3B4J1xufSBhcyBMaW5lYXJVbml0XG5cbmNvbnN0IERlZmF1bHRVbml0czogRGlzdGFuY2VVbml0c1tdID0gWydweCddXG5cbmNvbnN0IHBhcnNlVmFsdWUgPSAodmFsdWU6IElucHV0VW5pdFZhbHVlKTogQmFzZVVuaXRWYWx1ZSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFsID0gdmFsdWU/LmRpc3RhbmNlID8/IDBcbiAgICBjb25zdCB1bml0ID0gdmFsdWU/LnVuaXQgPz8gJ3B4J1xuICAgIHJldHVybiB7IHZhbCwgdW5pdCB9XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYElucHV0VW5pdGAgY29tcG9uZW50IGFsbG93cyB1c2VycyB0byBzZXQgdW5pdHMgYW5kIHZhbHVlcy5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgSW5wdXRVbml0IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zdHlsZS1zZXR0aW5nLWNvbXBvbmVudHMnXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0VW5pdCA9IChwcm9wczogSW5wdXRVbml0UHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICB1bml0cyA9IERlZmF1bHRVbml0cyxcbiAgICB2YWx1ZTogcHJvcFZhbHVlID0gRGVmYXVsdFZhbHVlLFxuICAgIG9uQ2hhbmdlLFxuICAgIC4uLm90aGVyc1xuICB9ID0gcHJvcHNcblxuICBjb25zdCB2YWx1ZSA9IHBhcnNlVmFsdWUocHJvcFZhbHVlKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZTogVW5pdFZhbHVlLCBldnQpID0+IHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHZhbHVlPy52YWwgPz8gMFxuICAgIGNvbnN0IHVuaXQgPSAodmFsdWU/LnVuaXQgPz8gJ3B4JykgYXMgRGlzdGFuY2VVbml0c1xuICAgIG9uQ2hhbmdlPy4oeyBkaXN0YW5jZSwgdW5pdCB9IGFzIGFueSwgZXZ0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZVVuaXRJbnB1dFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgJ3N0eWxlLXNldHRpbmctLWlucHV0LXVuaXQnKX1cbiAgICAgIHVuaXRzPXt1bml0c31cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICB7Li4ub3RoZXJzfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBEcm9wZG93biwgRHJvcGRvd25CdXR0b24sIERyb3Bkb3duTWVudSwgRHJvcGRvd25JdGVtLCB0eXBlIERpc3RhbmNlVW5pdHMgYXMgX0Rpc3RhbmNlVW5pdHMsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5cbmV4cG9ydCB0eXBlIERhdGVVbml0cyA9ICd5ZWFyJyB8ICdtb250aCcgfCAnZGF5J1xuZXhwb3J0IHR5cGUgRGF0ZVdlZWtVbml0cyA9ICd5ZWFyJyB8ICdtb250aCcgfCAnd2VlaycgfCAnZGF5J1xuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJ1xuZXhwb3J0IHR5cGUgRGF0ZVRpbWVVbml0cyA9IERhdGVXZWVrVW5pdHMgfCBUaW1lVW5pdHNcbmV4cG9ydCB0eXBlIERpc3RhbmNlVW5pdHMgPSBgJHtfRGlzdGFuY2VVbml0c31gXG5leHBvcnQgdHlwZSBTdXBwb3J0ZWRVbml0cyA9IERpc3RhbmNlVW5pdHMgfCBEYXRlVGltZVVuaXRzXG5cbmV4cG9ydCBjb25zdCBVbml0U2VsZWN0b3JEYXRlVW5pdHM6IERhdGVVbml0c1tdID0gWyd5ZWFyJywgJ21vbnRoJywgJ2RheSddXG5leHBvcnQgY29uc3QgVW5pdFNlbGVjdG9yRGF0ZVdlZWtVbml0czogRGF0ZVdlZWtVbml0c1tdID0gWyd5ZWFyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5J11cbmV4cG9ydCBjb25zdCBVbml0U2VsZWN0b3JUaW1lVW5pdHM6IFRpbWVVbml0c1tdID0gWydob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXVxuY29uc3QgZGF0ZVRpbWVVbml0czogU3VwcG9ydGVkVW5pdHNbXSA9IFsuLi5Vbml0U2VsZWN0b3JEYXRlV2Vla1VuaXRzLCAuLi5Vbml0U2VsZWN0b3JUaW1lVW5pdHNdXG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdFNlbGVjdG9yUHJvcHMge1xuICAvKipcbiAgICogVGhlIHVuaXQgZGlzcGxheWVkLlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYHZhbHVlYCBpbnN0ZWFkLlxuICAgKi9cbiAgdW5pdD86IFN1cHBvcnRlZFVuaXRzXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU/OiBTdXBwb3J0ZWRVbml0c1xuICAvKipcbiAgICogU3VwcG9ydGVkIHVuaXRzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICogQGRlZmF1bHQgWydweCddXG4gICAqL1xuICB1bml0cz86IFN1cHBvcnRlZFVuaXRzW11cbiAgLyoqXG4gICAqIEludm9sa2VkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBvbkNoYW5nZT86ICh1bml0OiBTdXBwb3J0ZWRVbml0cykgPT4gdm9pZFxuICAvKipcbiAgICogRGVmaW5lcyB0aGUgY2xhc3MgbmFtZXMgYWRkZWQgdG8gdGhlIGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIHN0eWxlIGFkZGVkIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU/OiBhbnlcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duTWVudSA9IHN0eWxlZChEcm9wZG93bk1lbnUpYFxuICBtaW4td2lkdGg6IDYwcHggIWltcG9ydGFudDtcbmBcblxuY29uc3QgZGVmYXVsdFVuaXRzOiBTdXBwb3J0ZWRVbml0c1tdID0gWydweCddXG5cbmV4cG9ydCBjb25zdCBVbml0U2VsZWN0b3IgPSAocHJvcHM6IFVuaXRTZWxlY3RvclByb3BzKSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBzdHlsZSxcbiAgICB0aXRsZSA9IHRyYW5zbGF0ZSgnY2hhbmdlVW5pdCcpLFxuICAgIGRpc2FibGVkOiBwcm9wRGlzYWJsZWQsXG4gICAgdmFsdWUgPSAncHgnLFxuICAgIHVuaXRzID0gZGVmYXVsdFVuaXRzLFxuICAgIG9uQ2hhbmdlXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGRpc2FibGVkID0gcHJvcERpc2FibGVkIHx8IHVuaXRzLmxlbmd0aCA8PSAxXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5ld1VuaXQpID0+IHtcbiAgICBpZiAobmV3VW5pdCAhPT0gdmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlPy4obmV3VW5pdClcbiAgICB9XG4gIH1cblxuICBjb25zdCB0cmFuc2xhdGVVbml0ID0gKHVuaXQ6IFN1cHBvcnRlZFVuaXRzKSA9PiB7XG4gICAgaWYgKGRhdGVUaW1lVW5pdHMuaW5jbHVkZXModW5pdCkpIHtcbiAgICAgIHJldHVybiB0cmFuc2xhdGUodW5pdClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuaXRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEcm9wZG93blxuICAgICAgZGlyZWN0aW9uPSdkb3duJ1xuICAgICAgc2l6ZT0nc20nXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBhY3RpdmVJY29uPXt0cnVlfVxuICAgICAgYXV0b1dpZHRoXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCAnc3R5bGUtc2V0dGluZy0tdW5pdC1zZWxlY3RvcicsICdqaW11LW91dGxpbmUtaW5zaWRlJyl9XG4gICAgPlxuICAgICAgPERyb3Bkb3duQnV0dG9uIGFycm93PXtmYWxzZX0gc2l6ZT0nc20nIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgndW5pdCcpfT5cbiAgICAgICAge3RyYW5zbGF0ZVVuaXQodmFsdWUpfVxuICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgIDxTdHlsZWREcm9wZG93bk1lbnUgYWxpZ25tZW50PSdlbmQnPlxuICAgICAgICB7dW5pdHMubWFwKHVuaXQgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gdHJhbnNsYXRlVW5pdCh1bml0KVxuICAgICAgICAgIHJldHVybiAoPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9J3B4LTEnIGFjdGl2ZT17dmFsdWUgPT09IHVuaXR9IGFyaWEtcHJlc3NlZD17dmFsdWUgPT09IHVuaXR9IGFyaWEtbGFiZWw9e2xhYmVsfSBrZXk9e3VuaXR9IG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2hhbmdlKHVuaXQpIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUnIHRpdGxlPXtsYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDwvRHJvcGRvd25JdGVtPilcbiAgICAgICAgfSl9XG4gICAgICA8L1N0eWxlZERyb3Bkb3duTWVudT5cbiAgICA8L0Ryb3Bkb3duPlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RJaUlHaGxhV2RvZEQwaU56SWlJSFpwWlhkQ2IzZzlJakFnTUNBNU1pQTNNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTmlBME9Fd3pNUzQ0T1RNeUlEVTFMalF4TmpSTU16UXVOVGczTXlBek9TNDNNRGd5VERJekxqRTNORFlnTWpndU5UZ3pOa3d6T0M0NU5EWTJJREkyTGpJNU1UaE1ORFlnTVRKTU5UTXVNRFV6TkNBeU5pNHlPVEU0VERZNExqZ3lOVFFnTWpndU5UZ3pOa3cxTnk0ME1USTNJRE01TGpjd09ESk1OakF1TVRBMk9DQTFOUzQwTVRZMFREUTJJRFE0V2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERCZmJHbHVaV0Z5WHpGZk1qazVNQ2tpTHo0S1BHUmxabk0rQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjbDh4WHpJNU9UQWlJSGd4UFNJMk55NDNNalE1SWlCNU1UMGlNVGN1TXpNeE15SWdlREk5SWpNM0xqYzVOVEVpSUhreVBTSXhOeTR6TXpFeklpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNMlFUWkJOa0VpTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpNamd5T0RJNElpOCtDand2YkdsdVpXRnlSM0poWkdsbGJuUStDand2WkdWbWN6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVElpSUdobGFXZG9kRDBpTnpJaUlIWnBaWGRDYjNnOUlqQWdNQ0E1TWlBM01pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOaUEwT0V3ek1TNDRPVE15SURVMUxqUXhOalJNTXpRdU5UZzNNeUF6T1M0M01EZ3lUREl6TGpFM05EWWdNamd1TlRnek5rd3pPQzQ1TkRZMklESTJMakk1TVRoTU5EWWdNVEpNTlRNdU1EVXpOQ0F5Tmk0eU9URTRURFk0TGpneU5UUWdNamd1TlRnek5rdzFOeTQwTVRJM0lETTVMamN3T0RKTU5qQXVNVEEyT0NBMU5TNDBNVFkwVERRMklEUTRXaUlnWm1sc2JEMGlkWEpzS0NOd1lXbHVkREJmYkdsdVpXRnlYekZmTXpBeE5pa2lMejRLUEhKbFkzUWdlRDBpTlRNaUlIazlJalUwSWlCM2FXUjBhRDBpT0NJZ2FHVnBaMmgwUFNJeUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZzVNQ0ExTXlBMU5Da2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXhYMnhwYm1WaGNsOHhYek13TVRZcElpOCtDanh5WldOMElIZzlJalF4SWlCNVBTSTFOQ0lnZDJsa2RHZzlJamdpSUdobGFXZG9kRDBpTWlJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb09UQWdOREVnTlRRcElpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1sOXNhVzVsWVhKZk1WOHpNREUyS1NJdlBnbzhjbVZqZENCNFBTSTBOeUlnZVQwaU5URXVOU0lnZDJsa2RHZzlJakV4SWlCb1pXbG5hSFE5SWpJaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtEa3dJRFEzSURVeExqVXBJaUJtYVd4c1BTSjFjbXdvSTNCaGFXNTBNMTlzYVc1bFlYSmZNVjh6TURFMktTSXZQZ284WkdWbWN6NEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWREQmZiR2x1WldGeVh6RmZNekF4TmlJZ2VERTlJalU0TGpBM05qTWlJSGt4UFNJMU5pNHhPRGs0SWlCNE1qMGlOVGd1TURjMk15SWdlVEk5SWpNeUxqQXpOeklpSUdkeVlXUnBaVzUwVlc1cGRITTlJblZ6WlhKVGNHRmpaVTl1VlhObElqNEtQSE4wYjNBZ2MzUnZjQzFqYjJ4dmNqMGlJelpCTmtFMlFTSXZQZ284YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlNeU9ESTRNamdpTHo0S1BDOXNhVzVsWVhKSGNtRmthV1Z1ZEQ0S1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSndZV2x1ZERGZmJHbHVaV0Z5WHpGZk16QXhOaUlnZURFOUlqVXpJaUI1TVQwaU5UWWlJSGd5UFNJMk1TSWdlVEk5SWpVMklpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNMlFUWkJOa0VpTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpOa0UyUVRaQklpQnpkRzl3TFc5d1lXTnBkSGs5SWpBdU1ERWlMejRLUEM5c2FXNWxZWEpIY21Ga2FXVnVkRDRLUEd4cGJtVmhja2R5WVdScFpXNTBJR2xrUFNKd1lXbHVkREpmYkdsdVpXRnlYekZmTXpBeE5pSWdlREU5SWpReElpQjVNVDBpTlRZaUlIZ3lQU0kwT1NJZ2VUSTlJalUySWlCbmNtRmthV1Z1ZEZWdWFYUnpQU0oxYzJWeVUzQmhZMlZQYmxWelpTSStDanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJaU0yUVRaQk5rRWlMejRLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJak5rRTJRVFpCSWlCemRHOXdMVzl3WVdOcGRIazlJakF1TURFaUx6NEtQQzlzYVc1bFlYSkhjbUZrYVdWdWRENEtQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0p3WVdsdWRETmZiR2x1WldGeVh6RmZNekF4TmlJZ2VERTlJalEzSWlCNU1UMGlOVE11TlNJZ2VESTlJalU0SWlCNU1qMGlOVE11TlNJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTmtFMlFUWkJJaTgrQ2p4emRHOXdJRzltWm5ObGREMGlNU0lnYzNSdmNDMWpiMnh2Y2owaUl6WkJOa0UyUVNJZ2MzUnZjQzF2Y0dGamFYUjVQU0l3TGpBeElpOCtDand2YkdsdVpXRnlSM0poWkdsbGJuUStDand2WkdWbWN6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVElpSUdobGFXZG9kRDBpTnpJaUlIWnBaWGRDYjNnOUlqQWdNQ0E1TWlBM01pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDBOeUEwT0V3ek1pNDRPVE15SURVMUxqUXhOalJNTXpVdU5UZzNNeUF6T1M0M01EZ3lUREkwTGpFM05EWWdNamd1TlRnek5rd3pPUzQ1TkRZMklESTJMakk1TVRoTU5EY2dNVEpNTlRRdU1EVXpOQ0F5Tmk0eU9URTRURFk1TGpneU5UUWdNamd1TlRnek5rdzFPQzQwTVRJM0lETTVMamN3T0RKTU5qRXVNVEEyT0NBMU5TNDBNVFkwVERRM0lEUTRXaUlnWm1sc2JEMGlJelpCTmtFMlFTSXZQZ284Y21WamRDQjRQU0l5TVNJZ2VUMGlNVFlpSUhkcFpIUm9QU0l5TUNJZ2FHVnBaMmgwUFNJeUlpQm1hV3hzUFNKMWNtd29JM0JoYVc1ME1GOXNhVzVsWVhKZk1WOHpNREEyS1NJdlBnbzhjbVZqZENCNFBTSXlNU0lnZVQwaU1qSWlJSGRwWkhSb1BTSXhOeUlnYUdWcFoyaDBQU0l5SWlCbWFXeHNQU0oxY213b0kzQmhhVzUwTVY5c2FXNWxZWEpmTVY4ek1EQTJLU0l2UGdvOGNtVmpkQ0I0UFNJeU1TSWdlVDBpTXpZaUlIZHBaSFJvUFNJNUlpQm9aV2xuYUhROUlqSWlJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXlYMnhwYm1WaGNsOHhYek13TURZcElpOCtDanh5WldOMElIZzlJakl4SWlCNVBTSTBPQ0lnZDJsa2RHZzlJamtpSUdobGFXZG9kRDBpTWlJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZEROZmJHbHVaV0Z5WHpGZk16QXdOaWtpTHo0S1BISmxZM1FnZUQwaU1qRWlJSGs5SWpReUlpQjNhV1IwYUQwaU1USWlJR2hsYVdkb2REMGlNaUlnWm1sc2JEMGlkWEpzS0NOd1lXbHVkRFJmYkdsdVpXRnlYekZmTXpBd05pa2lMejRLUEdSbFpuTStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNsOHhYek13TURZaUlIZ3hQU0l5TVNJZ2VURTlJakU0SWlCNE1qMGlOREVpSUhreVBTSXhPQ0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaVBnbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpOa0UyUVRaQklpQnpkRzl3TFc5d1lXTnBkSGs5SWpBdU1ERWlMejRLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJak5rRTJRVFpCSWk4K0Nqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0NqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5ReFgyeHBibVZoY2w4eFh6TXdNRFlpSUhneFBTSXlNU0lnZVRFOUlqSTBJaUI0TWowaU16Z2lJSGt5UFNJeU5DSWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGdvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak5rRTJRVFpCSWlCemRHOXdMVzl3WVdOcGRIazlJakF1TURFaUx6NEtQSE4wYjNBZ2IyWm1jMlYwUFNJeElpQnpkRzl3TFdOdmJHOXlQU0lqTmtFMlFUWkJJaTgrQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF5WDJ4cGJtVmhjbDh4WHpNd01EWWlJSGd4UFNJeU1TSWdlVEU5SWpNNElpQjRNajBpTXpBaUlIa3lQU0l6T0NJZ1ozSmhaR2xsYm5SVmJtbDBjejBpZFhObGNsTndZV05sVDI1VmMyVWlQZ284YzNSdmNDQnpkRzl3TFdOdmJHOXlQU0lqTmtFMlFUWkJJaUJ6ZEc5d0xXOXdZV05wZEhrOUlqQXVNREVpTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpOa0UyUVRaQklpOCtDand2YkdsdVpXRnlSM0poWkdsbGJuUStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXpYMnhwYm1WaGNsOHhYek13TURZaUlIZ3hQU0l5TVNJZ2VURTlJalV3SWlCNE1qMGlNekFpSUhreVBTSTFNQ0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaVBnbzhjM1J2Y0NCemRHOXdMV052Ykc5eVBTSWpOa0UyUVRaQklpQnpkRzl3TFc5d1lXTnBkSGs5SWpBdU1ERWlMejRLUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJak5rRTJRVFpCSWk4K0Nqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0NqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGljR0ZwYm5RMFgyeHBibVZoY2w4eFh6TXdNRFlpSUhneFBTSXlNU0lnZVRFOUlqUTBJaUI0TWowaU16TWlJSGt5UFNJME5DSWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGdvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak5rRTJRVFpCSWlCemRHOXdMVzl3WVdOcGRIazlJakF1TURFaUx6NEtQSE4wYjNBZ2IyWm1jMlYwUFNJeElpQnpkRzl3TFdOdmJHOXlQU0lqTmtFMlFUWkJJaTgrQ2p3dmJHbHVaV0Z5UjNKaFpHbGxiblErQ2p3dlpHVm1jejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejRLUEhOMlp5QjNhV1IwYUQwaU9USndlQ0lnYUdWcFoyaDBQU0kzTW5CNElpQjJhV1YzUW05NFBTSXdJREFnT1RJZ056SWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUkrQ2lBZ0lDQThkR2wwYkdVK2FXTnZibDloYm1sdFlYUnBiMjVmYVc1ZmJtOXVaVHd2ZEdsMGJHVStDaUFnSUNBOFp5QnpkSEp2YTJVOUltNXZibVVpSUhOMGNtOXJaUzEzYVdSMGFEMGlNU0lnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNEtJQ0FnSUNBZ0lDQThaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNndE9UUXhMakF3TURBd01Dd2dMVEU1TWk0d01EQXdNREFwSWo0S0lDQWdJQ0FnSUNBZ0lDQWdQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb09URTNMakF3TURBd01Dd2dOVEl1TURBd01EQXdLU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WnlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3lOQzR3TURBd01EQXNJREUwTUM0d01EQXdNREFwSWo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjbVZqZENCbWFXeHNMWEoxYkdVOUltNXZibnBsY204aUlIZzlJakFpSUhrOUlqQWlJSGRwWkhSb1BTSTVNaUlnYUdWcFoyaDBQU0kzTWlJK1BDOXlaV04wUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdiMng1WjI5dUlHWnBiR3c5SWlNMlFUWkJOa0VpSUhCdmFXNTBjejBpTkRZZ05EZ2dNekV1T0Rrek1UVXpPU0ExTlM0ME1UWTBNRGM1SURNMExqVTROek15TVRnZ016a3VOekE0TWpBek9TQXlNeTR4TnpRMk5ETTJJREk0TGpVNE16VTVNakVnTXpndU9UUTJOVGMzSURJMkxqSTVNVGM1TmpFZ05EWWdNVElnTlRNdU1EVXpOREl6SURJMkxqSTVNVGM1TmpFZ05qZ3VPREkxTXpVMk5DQXlPQzQxT0RNMU9USXhJRFUzTGpReE1qWTNPRElnTXprdU56QTRNakF6T1NBMk1DNHhNRFk0TkRZeElEVTFMalF4TmpRd056a2lQand2Y0c5c2VXZHZiajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdQQzluUGdvZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlPVEp3ZUNJZ2FHVnBaMmgwUFNJM01uQjRJaUIyYVdWM1FtOTRQU0l3SURBZ09USWdOeklpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4ZEdsMGJHVSthV052Ymw5aGJtbHRZWFJwYjI1ZmFXNWZjM0JwYmp3dmRHbDBiR1UrQ2lBZ0lDQThaeUJ6ZEhKdmEyVTlJbTV2Ym1VaUlITjBjbTlyWlMxM2FXUjBhRDBpTVNJZ1ptbHNiRDBpYm05dVpTSWdabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJajRLSUNBZ0lDQWdJQ0E4WnlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3RNVEEyTVM0d01EQXdNREFzSUMwMU5USXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRGt4Tnk0d01EQXdNREFzSURVeUxqQXdNREF3TUNraVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRRMExqQXdNREF3TUN3Z05UQXdMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4eVpXTjBJR1pwYkd3dGNuVnNaVDBpYm05dWVtVnlieUlnZUQwaU1DSWdlVDBpTUNJZ2QybGtkR2c5SWpreUlpQm9aV2xuYUhROUlqY3lJajQ4TDNKbFkzUStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRRMUxqWTJOalkyTmpjc01UTWdURFV5TGpjeU1EQTRPVGNzTWpjdU1qa3hOemsyTVNCTU5qZ3VORGt5TURJek1Td3lPUzQxT0RNMU9USXhJRXcxTnk0d056a3pORFE1TERRd0xqY3dPREl3TXprZ1REVTVMamMzTXpVeE1qY3NOVFl1TkRFMk5EQTNPU0JNTkRVdU5qWTJOalkyTnl3ME9TQk1NekV1TlRVNU9ESXdOaXcxTmk0ME1UWTBNRGM1SUV3ek5DNHlOVE01T0RnMUxEUXdMamN3T0RJd016a2dUREl5TGpnME1UTXhNRE1zTWprdU5UZ3pOVGt5TVNCTU16Z3VOakV6TWpRek5pd3lOeTR5T1RFM09UWXhJRXcwTlM0Mk5qWTJOalkzTERFeklGb2dUVGMyTGpZMk5qWTJOamNzTWpNdU5qWTJOalkyTnlCTU56WXVOalkyTmpZMk55d3lOU0JNTnpNdU1EZzVNek16TXl3eU5TQkROek11TlRJMU16TXpNeXd5TlM0ek16TXpNek16SURjMExqQTROQ3d5TlM0M05qWTJOalkzSURjMExqTTVNVE16TXpNc01qWXVNRFEyTmpZMk55QkROelV1T0RJNExESTNMak0xTmpZMk5qY2dOell1TmpZMk5qWTJOeXd5T0M0NE5ERXpNek16SURjMkxqWTJOalkyTmpjc016QXVOalkyTmpZMk55QkROell1TmpZMk5qWTJOeXd6TkM0NU1qWTJOalkzSURjekxqY3lOVE16TXpNc016Y2dOekFzTXpjZ1REY3dMRE0xTGpZMk5qWTJOamNnUXpjekxqQTJPRFkyTmpjc016VXVOalkyTmpZMk55QTNOUzR6TXpNek16TXpMRE0wTGpBM0lEYzFMak16TXpNek16TXNNekF1TmpZMk5qWTJOeUJETnpVdU16TXpNek16TXl3eU9TNHlOekkyTmpZM0lEYzBMalkzT0N3eU9DNHhNVElnTnpNdU5Ea3pNek16TXl3eU55NHdNek16TXpNeklFTTNNeTR4T0RRc01qWXVOelV3TmpZMk55QTNNaTQwTnpnMk5qWTNMREkyTGpJeE16TXpNek1nTnpJc01qVXVPRFExTXpNek15Qk1OeklzTWprdU5qWTJOalkyTnlCTU56QXVOalkyTmpZMk55d3lPUzQyTmpZMk5qWTNJRXczTUM0Mk5qWTJOalkzTERJekxqWTJOalkyTmpjZ1REYzJMalkyTmpZMk5qY3NNak11TmpZMk5qWTJOeUJhSUUweE9Td3lNeTQyTmpZMk5qWTNJRXd4T1N3eU5TQkRNVFV1T1RNeE16TXpNeXd5TlNBeE15NDJOalkyTmpZM0xESTJMalU1TmpZMk5qY2dNVE11TmpZMk5qWTJOeXd6TUNCRE1UTXVOalkyTmpZMk55d3pNUzR6T1RRZ01UUXVNekl5TERNeUxqVTFORFkyTmpjZ01UVXVOVEEyTmpZMk55d3pNeTQyTXpNek16TXpJRU14TlM0NE1UWXNNek11T1RFMklERTJMalV5TVRNek16TXNNelF1TkRVek16TXpNeUF4Tnl3ek5DNDRNakV6TXpNeklFd3hOeXd6TVNCTU1UZ3VNek16TXpNek15d3pNU0JNTVRndU16TXpNek16TXl3ek55Qk1NVEl1TXpNek16TXpNeXd6TnlCTU1USXVNek16TXpNek15d3pOUzQyTmpZMk5qWTNJRXd4TlM0NU1UQTJOalkzTERNMUxqWTJOalkyTmpjZ1F6RTFMalEzTkRZMk5qY3NNelV1TXpNek16TXpNeUF4TkM0NU1UWXNNelF1T1NBeE5DNDJNRGcyTmpZM0xETTBMall5SUVNeE15NHhOeklzTXpNdU16RWdNVEl1TXpNek16TXpNeXd6TVM0NE1qVXpNek16SURFeUxqTXpNek16TXpNc016QWdRekV5TGpNek16TXpNek1zTWpVdU56UWdNVFV1TWpjME5qWTJOeXd5TXk0Mk5qWTJOalkzSURFNUxESXpMalkyTmpZMk5qY2dXaUJOTkRBdU16TXpNek16TXl3MElFdzBNQzR6TXpNek16TXpMRGN1TlRjM016TXpNek1nUXpRd0xqWTJOalkyTmpjc055NHhOREV6TXpNek15QTBNUzR4TERZdU5UZ3lOalkyTmpZZ05ERXVNemdzTmk0eU56VXpNek16TXlCRE5ESXVOamtzTkM0NE16ZzJOalkyTnlBME5DNHhOelEyTmpZM0xEUWdORFlzTkNCRE5UQXVNallzTkNBMU1pNHpNek16TXpNekxEWXVPVFF4TXpNek16TWdOVEl1TXpNek16TXpNeXd4TUM0Mk5qWTJOalkzSUV3MU1Td3hNQzQyTmpZMk5qWTNJRU0xTVN3M0xqVTVPQ0EwT1M0ME1ETXpNek16TERVdU16TXpNek16TXpRZ05EWXNOUzR6TXpNek16TXpNeUJETkRRdU5qQTJMRFV1TXpNek16TXpNek1nTkRNdU5EUTFNek16TXl3MUxqazRPRFkyTmpZMklEUXlMak0yTmpZMk5qY3NOeTR4TnpNek16TXpNeUJETkRJdU1EZzBMRGN1TkRneU5qWTJOallnTkRFdU5UUTJOalkyTnl3NExqRTRPQ0EwTVM0eE56ZzJOalkzTERndU5qWTJOalkyTmpjZ1REUTFMRGd1TmpZMk5qWTJOamNnVERRMUxERXdJRXd6T1N3eE1DQk1NemtzTkNCTU5EQXVNek16TXpNek15dzBJRm9pSUdacGJHdzlJaU0yUVRaQk5rRWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1RJaUlHaGxhV2RvZEQwaU56SWlJSFpwWlhkQ2IzZzlJakFnTUNBNU1pQTNNaUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAwTmlBME9Fd3pNUzQ0T1RNeUlEVTFMalF4TmpSTU16UXVOVGczTXlBek9TNDNNRGd5VERJekxqRTNORFlnTWpndU5UZ3pOa3d6T0M0NU5EWTJJREkyTGpJNU1UaE1ORFlnTVRKTU5UTXVNRFV6TkNBeU5pNHlPVEU0VERZNExqZ3lOVFFnTWpndU5UZ3pOa3cxTnk0ME1USTNJRE01TGpjd09ESk1OakF1TVRBMk9DQTFOUzQwTVRZMFREUTJJRFE0V2lJZ1ptbHNiRDBpZFhKc0tDTndZV2x1ZERCZmJHbHVaV0Z5WHpGZk16QXlNeWtpTHo0S1BHUmxabk0rQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjbDh4WHpNd01qTWlJSGd4UFNJMU9DNHdOell6SWlCNU1UMGlOVFl1TVRnNU9DSWdlREk5SWpVNExqQTNOak1pSUhreVBTSXpNaTR3TXpjeUlpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKMWMyVnlVM0JoWTJWUGJsVnpaU0krQ2p4emRHOXdJSE4wYjNBdFkyOXNiM0k5SWlNMlFUWkJOa0VpTHo0S1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpNamd5T0RJNElpOCtDand2YkdsdVpXRnlSM0poWkdsbGJuUStDand2WkdWbWN6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpT1RKd2VDSWdhR1ZwWjJoMFBTSTNNbkI0SWlCMmFXVjNRbTk0UFNJd0lEQWdPVElnTnpJaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStDaUFnSUNBOGRHbDBiR1UrYVdOdmJsOWhibWx0WVhScGIyNWZhVzVmZW05dmJUd3ZkR2wwYkdVK0NpQWdJQ0E4WnlCemRISnZhMlU5SW01dmJtVWlJSE4wY205clpTMTNhV1IwYUQwaU1TSWdabWxzYkQwaWJtOXVaU0lnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWo0S0lDQWdJQ0FnSUNBOFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d0T1RReExqQXdNREF3TUN3Z0xUUXpNaTR3TURBd01EQXBJajRLSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvT1RFM0xqQXdNREF3TUN3Z05USXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneU5DNHdNREF3TURBc0lETTRNQzR3TURBd01EQXBJajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNtVmpkQ0JtYVd4c0xYSjFiR1U5SW01dmJucGxjbThpSUhnOUlqQWlJSGs5SWpBaUlIZHBaSFJvUFNJNU1pSWdhR1ZwWjJoMFBTSTNNaUkrUEM5eVpXTjBQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREU1TGpBd01EQXdNQ3dnTVRFdU1EQXdNREF3S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d2IyeDVaMjl1SUdacGJHdzlJaU16TmpNMk16WWlJSEJ2YVc1MGN6MGlNallnTXpZZ01URXVPRGt6TVRVek9TQTBNeTQwTVRZME1EYzVJREUwTGpVNE56TXlNVGdnTWpjdU56QTRNakF6T1NBekxqRTNORFkwTXpZeElERTJMalU0TXpVNU1qRWdNVGd1T1RRMk5UYzNJREUwTGpJNU1UYzVOakVnTWpZZ01DQXpNeTR3TlRNME1qTWdNVFF1TWpreE56azJNU0EwT0M0NE1qVXpOVFkwSURFMkxqVTRNelU1TWpFZ016Y3VOREV5TmpjNE1pQXlOeTQzTURneU1ETTVJRFF3TGpFd05qZzBOakVnTkRNdU5ERTJOREEzT1NJK1BDOXdiMng1WjI5dVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNHOXNlV2R2YmlCbWFXeHNQU0lqTmtFMlFUWkJJaUJ3YjJsdWRITTlJakkySURNd0lERTRMamswTmpVM055QXpNeTQzTURneU1ETTVJREl3TGpJNU16WTJNRGtnTWpVdU9EVTBNVEF5SURFMExqVTROek15TVRnZ01qQXVNamt4TnprMk1TQXlNaTQwTnpNeU9EZzFJREU1TGpFME5UZzVPQ0F5TmlBeE1pQXlPUzQxTWpZM01URTFJREU1TGpFME5UZzVPQ0F6Tnk0ME1USTJOemd5SURJd0xqSTVNVGM1TmpFZ016RXVOekEyTXpNNU1TQXlOUzQ0TlRReE1ESWdNek11TURVek5ESXpJRE16TGpjd09ESXdNemtpUGp3dmNHOXNlV2R2Ymo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJMkxqQTVPRGs1T1RVc05ERWdRekkyTGpNNE9USTBOallzTkRFdU1EQXlOamczTnlBeU5pNDJNelEzTXpjMExEUXhMakl6T0RRMk1UUWdNall1TmpRM016RTRNeXcwTVM0MU1qWTJOVFl6SUV3eU5pNDJORGt5TWpJeUxEUTRMamt6TURNNU9UZ2dURE13TGpBMU56QXhOU3cwTlM0ME1qVTROelV4SUVNek1DNHlOVE16TlRRNExEUTFMakl5TXprMk1pQXpNQzQxT0RZeE1EZ3NORFV1TWpJMk9UazJOQ0F6TUM0NE1EQXlNems1TERRMUxqUXpNalkxTWpVZ1F6TXhMakF4TkRNM01UZ3NORFV1TmpNNE16QTROU0F6TVM0d01qZzNPVFV5TERRMUxqazJPRGN3T0RZZ016QXVPRE15TkRVMU15dzBOaTR4TnpBMk1qRTNJRXd5Tmk0eU1UQTRPVE16TERVd0xqa3lNek0yT1RFZ1RESXhMakUzTURVek1USXNORFl1TURneU5URTJNaUJETWpBdU9UVTJNems1TWl3ME5TNDROelk0TmpBeUlESXdMamswTVRrM05Ua3NORFV1TlRRMk5EWXdNU0F5TVM0eE16Z3pNVFU0TERRMUxqTTBORFUwTnlCRE1qRXVNek0wTmpVMU5pdzBOUzR4TkRJMk16TTVJREl4TGpZMk56UXdPRGdzTkRVdU1UUTFOalk0TWlBeU1TNDRPREUxTkRBM0xEUTFMak0xTVRNeU5ETWdUREkxTGpVNU9ERTBNelFzTkRndU9USXdPREUxTWlCTU1qVXVOVGsyTWpNNU5TdzBNUzQxTVRjd056RTNJRU15TlM0MU9ETTJOVGcyTERReExqSXlPRGczTmpnZ01qVXVPREE0TnpVeE9DdzBNQzQ1T1Rjek9UUXlJREkyTGpBNU9EazVPVFVzTkRFZ1dpQk5ORGt1TWpJNU1UZ3hNU3d5Tnk0eU1ETTRNaUJETkRrdU5EZzRNRFExTVN3eU55NHdPVEk0T0RBeElEUTVMamM1TVRNek1UTXNNamN1TWpJME56VXdNeUEwT1M0NU1EWTFPRGszTERJM0xqUTVPRE0yTURJZ1REUTVMamt3TmpVNE9UY3NNamN1TkRrNE16WXdNaUJNTlRJdU5qRTVOakV4TERNekxqa3pPRGMxTURFZ1REUTJMalV5TmpNeE9UTXNNell1TlRVd01URTNOaUJETkRZdU1qWTNORFUxTXl3ek5pNDJOakV3TlRjMUlEUTFMamsyTkRFMk9URXNNell1TlRJNU1UZzNOQ0EwTlM0NE5EZzVNVEEyTERNMkxqSTFOVFUzTnpVZ1F6UTFMamN6TXpZMU1qSXNNelV1T1RneE9UWTNOU0EwTlM0NE5UQXdOamMwTERNMUxqWTNNREl5T0RNZ05EWXVNVEE0T1RNeE5Td3pOUzQxTlRreU9EZzBJRXcwTmk0eE1EZzVNekUxTERNMUxqVTFPVEk0T0RRZ1REVXdMall3TVRrek1Ea3NNek11TmpNek56UTVNU0JNTkRNdU5qa3dOakl6TVN3ek1DNDVOemczTURjeklFTTBNeTQwTWpZd056ZzJMRE13TGpnMk16WTRNaklnTkRNdU1qa3pPVFF3T1N3ek1DNDFOVEF3TURNZ05ETXVNemsxTkRnMU15d3pNQzR5Tnpnd09EVXlJRU0wTXk0ME9UY3dNamszTERNd0xqQXdOakUyTnpVZ05ETXVOemt6T0RBek5Td3lPUzQ0TnpnNU9EQTRJRFEwTGpBMU9ETTBPQ3d5T1M0NU9UUXdNRFU1SUV3ME5DNHdOVGd6TkRnc01qa3VPVGswTURBMU9TQk1OVEF1T1RZNU5qVTFPQ3d6TWk0Mk5Ea3dORGMzSUV3ME9DNDVOamt4TmpBekxESTNMamt3TURFd09URWdRelE0TGpnMU16a3dNVGdzTWpjdU5qSTJORGs1TVNBME9DNDVOekF6TVRjeExESTNMak14TkRjMU9Ua2dORGt1TWpJNU1UZ3hNU3d5Tnk0eU1ETTRNaUJhSUUwekxqTTVNRFF5T1Rrc01qY3VNakF6T0RJZ1F6TXVOalE1TWprek9URXNNamN1TXpFME56VTVPU0F6TGpjMk5UY3dPVEU0TERJM0xqWXlOalE1T1RFZ015NDJOVEEwTlRBM0xESTNMamt3TURFd09URWdUREV1TmpRNU9UVTFNVFlzTXpJdU5qUTVNRFEzTnlCTU9DNDFOakV5TmpJNU1pd3lPUzQ1T1RRd01EVTVJRU00TGpneU5UZ3dOelEyTERJNUxqZzNPRGs0TURnZ09TNHhNakkxT0RFeU1pd3pNQzR3TURZeE5qYzFJRGt1TWpJME1USTFOallzTXpBdU1qYzRNRGcxTWlCRE9TNHpNalUyTnpBeExETXdMalUxTURBd015QTVMakU1TXpVek1qUXhMRE13TGpnMk16WTRNaklnT0M0NU1qZzVPRGM0Tml3ek1DNDVOemczTURjeklFd3lMakF4TnpZNE1ERXhMRE16TGpZek16YzBPVEVnVERZdU5URXdOamM1TlRFc016VXVOVFU1TWpnNE5DQkROaTQzTmprMU5ETTFNaXd6TlM0Mk56QXlNamd6SURZdU9EZzFPVFU0Tnprc016VXVPVGd4T1RZM05TQTJMamMzTURjd01ETXhMRE0yTGpJMU5UVTNOelVnUXpZdU5qVTFORFF4T0RNc016WXVOVEk1TVRnM05DQTJMak0xTWpFMU5UWTBMRE0yTGpZMk1UQTFOelVnTmk0d09UTXlPVEUyTXl3ek5pNDFOVEF4TVRjMklFd3ROaTR6TVRBNE9EY3lOR1V0TXpBc016TXVPVE00TnpVd01TQk1NaTQzTVRNd01qRXlNaXd5Tnk0ME9UZ3pOakF5SUVNeUxqZ3lPREkzT1Rjc01qY3VNakkwTnpVd015QXpMakV6TVRVMk5Ua3NNamN1TURreU9EZ3dNU0F6TGpNNU1EUXlPVGtzTWpjdU1qQXpPRElnV2lCTk5ETXVNREF5TmpjeU1Td3hJRXcwTXk0NU9UUXlNRFV4TERjdU9URTNPREF3T0RjZ1F6UTBMakF6TmpNeU9EZ3NPQzR5TVRFMk9USTROaUEwTXk0NE5EUXlOems1TERndU5EZ3dPVE14TlRZZ05ETXVOVFkxTWpVeE9TdzRMalV4T1RFMk1qTTBJRU0wTXk0eU9EWXlNak01TERndU5UVTNNemt6TVRJZ05ETXVNREkxT0RjNUxEZ3VNelV3TVRNNE56WWdOREl1T1Rnek56VTFNaXc0TGpBMU5qSTBOamMySUV3ME1pNHlOVEkyTXpBMExESXVPVFUxTWpnd05EZ2dURE0zTGpZNU5Ua3pNU3c0TGpjNU1EWTRNakV5SUVNek55NDFNamcwTVRRekxEa3VNREkxTlRJNE16Z2dNemN1TWpBNE5USXpOaXc1TGpBMk9UTTFOemt6SURNMkxqazRNVFF6TlN3NExqZzRPRFUzT0RFMUlFTXpOaTQzTlRRek5EWTBMRGd1TnpBM056azRNemNnTXpZdU56QTJNRFV6T0N3NExqTTNNRGcyTmpnNUlETTJMamczTXpVM01EVXNPQzR4TXpZd01qQTJNeUJNTkRFdU5ETXdNalk1T1N3eUxqTXdNRFl4T0RrNUlFd3pOaTQxT0RjeU9URTJMREl1T1RZME1UYzFOQ0JETXpZdU16QTRNall6Tml3ekxqQXdNalF3TmpFNElETTJMakEwTnpreE9EY3NNaTQzT1RVeE5URTRNaUF6Tmk0d01EVTNPVFE1TERJdU5UQXhNalU1T0RJZ1F6TTFMamsyTXpZM01USXNNaTR5TURjek5qYzRNeUF6Tmk0eE5UVTNNakF4TERFdU9UTTRNVEk1TVRJZ016WXVORE0wTnpRNE1Td3hMamc1T1RnNU9ETTFJRXcwTXk0d01ESTJOekl4TERFZ1dpQk5PQzQ1T1Rjek1qYzROeXd4SUV3eE5TNDFOalV5TlRFNUxERXVPRGs1T0RrNE16VWdRekUxTGpnME5ESTNPVGtzTVM0NU16Z3hNamt4TWlBeE5pNHdNell6TWpnNExESXVNakEzTXpZM09ETWdNVFV1T1RrME1qQTFNU3d5TGpVd01USTFPVGd5SUVNeE5TNDVOVEl3T0RFekxESXVOemsxTVRVeE9ESWdNVFV1TmpreE56TTJOQ3d6TGpBd01qUXdOakU0SURFMUxqUXhNamN3T0RRc01pNDVOalF4TnpVMElFd3hOUzQwTVRJM01EZzBMREl1T1RZME1UYzFOQ0JNTVRBdU5UWTVOek13TVN3eUxqTXdNRFl4T0RrNUlFd3hOUzR4TWpZME1qazFMRGd1TVRNMk1ESXdOak1nUXpFMUxqSTVNemswTmpJc09DNHpOekE0TmpZNE9TQXhOUzR5TkRVMk5UTTJMRGd1TnpBM056azRNemNnTVRVdU1ERTROVFkxTERndU9EZzROVGM0TVRVZ1F6RTBMamM1TVRRM05qUXNPUzR3Tmprek5UYzVNeUF4TkM0ME56RTFPRFUzTERrdU1ESTFOVEk0TXpnZ01UUXVNekEwTURZNUxEZ3VOemt3TmpneU1USWdUREUwTGpNd05EQTJPU3c0TGpjNU1EWTRNakV5SUV3NUxqYzBOek0yT1RZekxESXVPVFUxTWpnd05EZ2dURGt1TURFMk1qUTBOemdzT0M0d05UWXlORFkzTmlCRE9DNDVOelF4TWpFd05TdzRMak0xTURFek9EYzJJRGd1TnpFek56YzJNVEVzT0M0MU5UY3pPVE14TWlBNExqUXpORGMwT0RBNUxEZ3VOVEU1TVRZeU16UWdRemd1TVRVMU56SXdNRGNzT0M0ME9EQTVNekUxTmlBM0xqazJNelkzTVRFNUxEZ3VNakV4TmpreU9EWWdPQzR3TURVM09UUTVNeXczTGpreE56Z3dNRGczSUV3NExqQXdOVGM1TkRrekxEY3VPVEUzT0RBd09EY2dURGd1T1RrM016STNPRGNzTVNCYUlpQm1hV3hzUFNJak5rRTJRVFpCSWlCbWFXeHNMWEoxYkdVOUltNXZibnBsY204aVBqd3ZjR0YwYUQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBOEwyYytDand2YzNablBnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPVElpSUdobGFXZG9kRDBpTnpJaUlIWnBaWGRDYjNnOUlqQWdNQ0E1TWlBM01pSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhKbFkzUWdlRDBpT0NJZ2QybGtkR2c5SWpjMklpQm9aV2xuYUhROUlqUXdJaUJtYVd4c1BTSWpNell6TmpNMklpQm1hV3hzTFc5d1lXTnBkSGs5SWpBdU5TSXZQZ284Y21WamRDQjVQU0l5TkNJZ2QybGtkR2c5SWpreUlpQm9aV2xuYUhROUlqUTRJaUJtYVd4c1BTSWpOVEkxTWpVeUlpOCtDand2YzNablBnbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpT1RKd2VDSWdhR1ZwWjJoMFBTSTNNbkI0SWlCMmFXVjNRbTk0UFNJd0lEQWdPVElnTnpJaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStDaUFnSUNBOGRHbDBiR1UrYVdOdmJsOWhibWx0WVhScGIyNWZkSEpoYm5OcGRHbHZibDlqZFdKbFBDOTBhWFJzWlQ0S0lDQWdJRHhuSUhOMGNtOXJaVDBpYm05dVpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGdvZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzB4TURZeExqQXdNREF3TUN3Z0xUSTNNQzR3TURBd01EQXBJajRLSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvT1RFM0xqQXdNREF3TUN3Z05USXVNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE5EUXVNREF3TURBd0xDQXlNVGd1TURBd01EQXdLU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BISmxZM1FnWm1sc2JDMXlkV3hsUFNKdWIyNTZaWEp2SWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU9USWlJR2hsYVdkb2REMGlOeklpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNHOXNlV2R2YmlCbWFXeHNQU0lqTmtFMlFUWkJJaUJ3YjJsdWRITTlJakV5SURFNExqUWdOVEVnTVRJZ05URWdOakFnTVRJZ05UTXVOaUkrUEM5d2IyeDVaMjl1UGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdiMng1WjI5dUlHWnBiR3c5SWlNek5qTTJNellpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEWTFMalV3TURBd01Dd2dNell1TURBd01EQXdLU0J6WTJGc1pTZ3RNU3dnTVNrZ2RISmhibk5zWVhSbEtDMDJOUzQxTURBd01EQXNJQzB6Tmk0d01EQXdNREFwSUNJZ2NHOXBiblJ6UFNJMU1TQXhPQzQwSURnd0lERXlJRGd3SURZd0lEVXhJRFV6TGpZaVBqd3ZjRzlzZVdkdmJqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ0lDQWdJRHd2Wno0S0lDQWdJRHd2Wno0S1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejRLUEhOMlp5QjNhV1IwYUQwaU9USndlQ0lnYUdWcFoyaDBQU0kzTW5CNElpQjJhV1YzUW05NFBTSXdJREFnT1RJZ056SWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUkrQ2lBZ0lDQThkR2wwYkdVK2FXTnZibDloYm1sdFlYUnBiMjVmZEhKaGJuTnBkR2x2Ymw5a2IyOXlkMkY1UEM5MGFYUnNaVDRLSUNBZ0lEeG5JSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhuSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMDVOREV1TURBd01EQXdMQ0F0TmpNd0xqQXdNREF3TUNraUlHWnBiR3d0Y25Wc1pUMGlibTl1ZW1WeWJ5SStDaUFnSUNBZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRGt4Tnk0d01EQXdNREFzSURVeUxqQXdNREF3TUNraVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTWpRdU1EQXdNREF3TENBMU56Z3VNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhCdmJIbG5iMjRnWm1sc2JEMGlJek0yTXpZek5pSWdjRzlwYm5SelBTSXdJQzB4TGpFME1ERTVPVEExWlMweE15QXlOQ0F4TWlBeU5DQTJNQ0F3SURjeUlqNDhMM0J2YkhsbmIyNCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhKbFkzUWdabWxzYkQwaUl6WkJOa0UyUVNJZ2VEMGlNallpSUhrOUlqSXdJaUIzYVdSMGFEMGlOREFpSUdobGFXZG9kRDBpTXpJaVBqd3ZjbVZqZEQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjRzlzZVdkdmJpQm1hV3hzUFNJak16WXpOak0ySWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzRNQzR3TURBd01EQXNJRE0yTGpBd01EQXdNQ2tnYzJOaGJHVW9MVEVzSURFcElIUnlZVzV6YkdGMFpTZ3RPREF1TURBd01EQXdMQ0F0TXpZdU1EQXdNREF3S1NBaUlIQnZhVzUwY3owaU5qZ2dMVEV1TVRRd01UazVNRFZsTFRFeklEa3lJREV4SURreUlEWXdJRFk0SURjeUlqNDhMM0J2YkhsbmIyNCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGc9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlPVEp3ZUNJZ2FHVnBaMmgwUFNJM01uQjRJaUIyYVdWM1FtOTRQU0l3SURBZ09USWdOeklpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4ZEdsMGJHVSthV052Ymw5aGJtbHRZWFJwYjI1ZmRISmhibk5wZEdsdmJsOW1ZV1JsUEM5MGFYUnNaVDRLSUNBZ0lEeG5JSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhuSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHhNRFl4TGpBd01EQXdNQ3dnTFRFMU1DNHdNREF3TURBcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnUEdjZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9PVEUzTGpBd01EQXdNQ3dnTlRJdU1EQXdNREF3S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d4TkRRdU1EQXdNREF3TENBNU9DNHdNREF3TURBcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y21WamRDQnZjR0ZqYVhSNVBTSXdMakV3TURBd01EQXdNU0lnWm1sc2JDMXlkV3hsUFNKdWIyNTZaWEp2SWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU9USWlJR2hsYVdkb2REMGlOeklpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNtVmpkQ0JtYVd4c1BTSWpOVEkxTWpVeUlpQjRQU0l5T0NJZ2VUMGlNalFpSUhkcFpIUm9QU0kyTkNJZ2FHVnBaMmgwUFNJME9DSStQQzl5WldOMFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh5WldOMElHWnBiR3d0YjNCaFkybDBlVDBpTUM0MUlpQm1hV3hzUFNJak16WXpOak0ySWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU5qUWlJR2hsYVdkb2REMGlORGdpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNHRjBhQ0JrUFNKTk5qUXNNQ0JNTmpRc05EZ2dUREFzTkRnZ1REQXNNQ0JNTmpRc01DQmFJRTAyTXl3eElFd3hMREVnVERFc05EY2dURFl6TERRM0lFdzJNeXd4SUZvaUlHWnBiR3c5SWlNMlFUWkJOa0VpSUdacGJHd3RjblZzWlQwaWJtOXVlbVZ5YnlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0FnSUNBZ1BDOW5QZ29nSUNBZ1BDOW5QZ284TDNOMlp6ND1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpT1RKd2VDSWdhR1ZwWjJoMFBTSTNNbkI0SWlCMmFXVjNRbTk0UFNJd0lEQWdPVElnTnpJaUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SStDaUFnSUNBOGRHbDBiR1UrYVdOdmJsOWhibWx0WVhScGIyNWZkSEpoYm5OcGRHbHZibDl1YjI1bFBDOTBhWFJzWlQ0S0lDQWdJRHhuSUhOMGNtOXJaVDBpYm05dVpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGdvZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzA1TkRFdU1EQXdNREF3TENBdE1UVXdMakF3TURBd01Da2lJR1pwYkd3dGNuVnNaVDBpYm05dWVtVnlieUkrQ2lBZ0lDQWdJQ0FnSUNBZ0lEeG5JSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RreE55NHdNREF3TURBc0lEVXlMakF3TURBd01Da2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR2NnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01qUXVNREF3TURBd0xDQTVPQzR3TURBd01EQXBJajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNtVmpkQ0I0UFNJd0lpQjVQU0l3SWlCM2FXUjBhRDBpT1RJaUlHaGxhV2RvZEQwaU56SWlQand2Y21WamRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y21WamRDQm1hV3hzUFNJak5rRTJRVFpCSWlCNFBTSXdJaUI1UFNJd0lpQjNhV1IwYUQwaU9USWlJR2hsYVdkb2REMGlOeklpUGp3dmNtVmpkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdQQzluUGdvZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUR3dlp6NEtQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlPVEp3ZUNJZ2FHVnBaMmgwUFNJM01uQjRJaUIyYVdWM1FtOTRQU0l3SURBZ09USWdOeklpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK0NpQWdJQ0E4ZEdsMGJHVSthV052Ymw5aGJtbHRZWFJwYjI1ZmRISmhibk5wZEdsdmJsOXdkWE5vUEM5MGFYUnNaVDRLSUNBZ0lEeG5JSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ0lDQWdJRHhuSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMDVOREV1TURBd01EQXdMQ0F0TWpjd0xqQXdNREF3TUNraUlHWnBiR3d0Y25Wc1pUMGlibTl1ZW1WeWJ5SStDaUFnSUNBZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRGt4Tnk0d01EQXdNREFzSURVeUxqQXdNREF3TUNraVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTWpRdU1EQXdNREF3TENBeU1UZ3VNREF3TURBd0tTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhKbFkzUWdlRDBpTUNJZ2VUMGlNQ0lnZDJsa2RHZzlJamt5SWlCb1pXbG5hSFE5SWpjeUlqNDhMM0psWTNRK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVGt5TERBZ1REa3lMRGN5SUV3d0xEY3lJRXd3TERBZ1REa3lMREFnV2lCTk9URXNNemNnVERFc016Y2dUREVzTnpFZ1REa3hMRGN4SUV3NU1Td3pOeUJhSUUwME5pdzBOQ0JNTlRZc05UUWdURFV3TGpFMk5qWTJOamNzTlRRZ1REVXdMakUyTmpZMk5qY3NOalFnVERReExqZ3pNek16TXpNc05qUWdURFF4TGpnek16TXpNek1zTlRRZ1RETTJMRFUwSUV3ME5pdzBOQ0JhSWlCbWFXeHNQU0lqTmtFMlFUWkJJajQ4TDNCaGRHZytDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGc9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfcmVzb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb2xvcl9waWNrZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy9zdHlsZXMnXG5pbXBvcnQgeyByZWdpc3RlclN0eWxlcyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbnJlZ2lzdGVyU3R5bGVzKCdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cy8nLCBzdHlsZXMpXG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==