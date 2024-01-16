System.register(["jimu-core","jimu-ui/advanced/chart","jimu-theme","jimu-ui","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_chart__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_chart__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_chart__[key] = module[key];
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
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/area.svg":
/*!***************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/area.svg ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#A8A8A8\" d=\"M24 83v-8h16v8zM24 144v-8h16v8zM24 204v-8h16v8zM24 266v-8h16v8zM24 327v-8h16v8zM135 376v-8h24v8zM85 376v-8h24v8zM33 376v-8h24v8zM185 376v-8h24v8zM237 376v-8h24v8zM289 376v-8h24v8zM341 376v-8h24v8z\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M376 354.501v.999h-24.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001z\" clip-rule=\"evenodd\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m147.167 236-51.083-28.5L45 249.5v44.327l50.736-46.4 50.993 28.948 50.248-51.169 51.871 37.843 50.53-64.932L351 233.016V179l-50.583-28.5-51.083 62-52.085-59zM45 342.974v-42.366l51.43-47.035 51.175 29.052 49.915-50.83 52.3 38.156 50.635-65.068L351 239.055v42.443l-51.842-19.97-50.382 59.265-51.552-29.694-50.52 30.263-51.11-10.005zm0 5.899v5.627h306v-67.643l-50.325-19.385-50.783 59.735-52.618-30.306-49.644 29.737-51.057-9.995z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/bar.svg":
/*!**************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/bar.svg ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#000\" d=\"M326 58v12H45V58zM258.473 73v12H45V73zM204.015 88v12H45V88zM159 119v12H45v-12zM131.605 134v12H45v-12zM109.512 149v12H45v-12zM195 180v12H45v-12zM158.953 195v12H45v-12zM129.884 210v12H45v-12zM245 241v12H45v-12zM196.938 256v12H45v-12zM158.178 271v12H45v-12zM174 302v12H45v-12zM143 317v12H45v-12zM118 332v12H45v-12zM24 83v-8h16v8zM24 144v-8h16v8zM24 204v-8h16v8zM24 266v-8h16v8zM24 327v-8h16v8zM135 376v-8h24v8zM85 376v-8h24v8zM33 376v-8h24v8zM185 376v-8h24v8zM237 376v-8h24v8zM289 376v-8h24v8zM341 376v-8h24v8z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M376 354.501v.999h-75.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001zm-24.5.999v4h-1v-4z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/column.svg":
/*!*****************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/column.svg ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#000\" d=\"M24 107v-8h16v8zM24 56v-8h16v8zM24 158v-8h16v8zM24 209v-8h16v8zM24 261v-8h16v8zM24 311v-8h16v8zM24 362v-8h16v8zM128 376v-8h24v8zM72 376v-8h24v8zM189 376v-8h24v8zM250 376v-8h24v8zM311 376v-8h24v8zM58 77h12v281H58zM73 144.527h12V358H73zM88 198.984h12V358H88zM119 244h12v114h-12zM134 271.395h12V358h-12zM149 293.488h12V358h-12zM180 208h12v150h-12zM195 244.046h12v113.953h-12zM210 273.116h12V358h-12zM241 158h12v200h-12zM256 206.062h12V358h-12zM271 244.822h12V358h-12zM302 229h12v129h-12zM317 260h12v98h-12zM332 285h12v73h-12z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M49 24h-1v28h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h22v-.998H49z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/donut.svg":
/*!****************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/donut.svg ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M200 353.81c40.414 0 77.188-15.587 104.637-41.077l-45.849-45.848c-15.683 13.796-36.258 22.163-58.788 22.163-49.18 0-89.048-39.868-89.048-89.048 0-46.451 35.567-84.595 80.953-88.685V46.4C110.721 50.61 46.191 117.769 46.191 200c0 84.947 68.862 153.81 153.809 153.81m153.6-145.715c-1.842 35.533-15.744 67.876-37.69 93.014l-45.977-45.977c10.401-13.176 17.159-29.361 18.752-47.037zm.209-7.956.001-.139-.001-.139zm-.209-8.234C349.53 113.402 286.598 50.471 208.095 46.4v64.915c42.72 3.85 76.74 37.87 80.59 80.59zm-80.743 7.944c-.081-40.168-32.669-72.706-72.857-72.706-40.238 0-72.857 32.619-72.857 72.857s32.619 72.857 72.857 72.857c40.188 0 72.776-32.538 72.857-72.706zM200 370c93.888 0 170-76.112 170-170S293.888 30 200 30 30 106.112 30 200s76.112 170 170 170\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/histogram.svg":
/*!********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/histogram.svg ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><g fill=\"#000\" clip-path=\"url(#a)\"><path d=\"M24 83v-8h16v8zM24 144v-8h16v8zM24 204v-8h16v8zM24 266v-8h16v8zM24 327v-8h16v8zM135 376v-8h24v8zM85 376v-8h24v8zM33 376v-8h24v8zM185 376v-8h24v8zM237 376v-8h24v8zM289 376v-8h24v8zM341 376v-8h24v8z\"></path><path fill-rule=\"evenodd\" d=\"M376 354.001V355h-24.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4V50h-4v-1h4V27h.998v327.001z\" clip-rule=\"evenodd\"></path><path d=\"M197 88h28v14.518c-1.189-1.824-2.373-3.297-3.596-4.47C217.929 94.719 214.353 94 210.5 94c-4.416 0-8.372.968-12.177 4.463-.445.409-.886.85-1.323 1.326z\"></path><path d=\"M217.252 102.38c2.15 2.06 4.569 5.915 7.748 13.241V355h-28V110.243c1.978-3.525 3.724-5.839 5.382-7.362 2.422-2.224 4.783-2.881 8.118-2.881 2.897 0 4.758.469 6.752 2.38M139 185h23.469c-2.319 6.846-4.803 14.204-7.472 22.11l-2.339 6.93c-4.225 12.512-8.819 23.915-13.658 34.3zM158.342 215.96c-5.845 17.31-12.397 32.564-19.342 45.985V355h28V190.329a31167.84 31167.84 0 0 0-6.479 19.176l-.001.003zM254 200.519c-4.784-14.9-8.89-27.635-12.463-38.519H226v193h28zM247.852 162A4704.53 4704.53 0 0 1 254 180.929V162zM255 229h8.497c4.771 12.412 11.402 26.515 19.503 40.651V355h-28zM269.937 229c3.476 8.784 7.878 18.388 13.063 28.208V229zM284 279h4.576a284.47 284.47 0 0 0 11.937 17.746A237.642 237.642 0 0 0 312 311.29V355h-28zM305.359 293.208a241.991 241.991 0 0 0 6.641 8.683V279h-16.335a274.824 274.824 0 0 0 9.694 14.208M138 309h-28v46h28zM109 338H81v17h28zM196 214h-28v141h28zM313 343h28v12h-28z\"></path><path d=\"m158.214 208.523.006-.018c16.331-48.374 25.668-76.032 32.719-91.675 3.685-8.177 6.718-13.003 9.752-15.79 2.998-2.753 6.024-3.54 9.809-3.54 3.295 0 5.871.573 8.482 3.076 2.655 2.544 5.374 7.109 8.809 15.211 6.821 16.084 16.359 45.825 33.898 100.515l.001.002.348 1.084c6.953 21.681 22.476 53.045 42.705 80.432 20.215 27.367 45.212 50.876 71.148 56.668l.218-.976c-25.564-5.708-50.375-28.957-70.561-56.286-20.171-27.307-35.641-58.575-42.558-80.143l-.385-1.2c-17.507-54.588-27.055-84.36-33.893-100.486-3.441-8.115-6.224-12.846-9.038-15.543-2.858-2.74-5.719-3.354-9.174-3.354-3.965 0-7.257.838-10.485 3.804-3.192 2.932-6.293 7.918-9.988 16.116-7.071 15.688-16.422 43.386-32.726 91.684l-2.275 6.736c-31.261 92.582-87.728 130.231-110.202 138.692l.352.936c22.77-8.573 79.446-46.458 110.798-139.308z\"></path></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M24 27h352v349H24z\"></path></clipPath></defs></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/line.svg":
/*!***************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/line.svg ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#A8A8A8\" d=\"M24 83v-8h16v8zM24 144v-8h16v8zM24 204v-8h16v8zM24 266v-8h16v8zM24 327v-8h16v8zM135 376v-8h24v8zM85 376v-8h24v8zM33 376v-8h24v8zM185 376v-8h24v8zM237 376v-8h24v8zM289 376v-8h24v8zM341 376v-8h24v8z\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M376 354.501v.999h-24.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001z\" clip-rule=\"evenodd\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m299.88 232.358 50.866 28.707-.492.87-50.134-28.293-51.107 62.129-51.938-58.93-49.898 82.331-51.046-28.526-50.736 65.161-.79-.614 51.264-65.839 50.954 28.474 50.102-82.669 52.062 59.07z\" clip-rule=\"evenodd\"></path><circle cx=\"96\" cy=\"290\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"45\" cy=\"355\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"147\" cy=\"318\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"197\" cy=\"236\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"249\" cy=\"295\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"300\" cy=\"234\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"351\" cy=\"262\" r=\"3\" fill=\"#A8A8A8\"></circle><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m196.827 194.391 52.206 21.083 50.998-13.5 50.653 20.061-.368.93-50.347-19.94-51.002 13.501-51.794-20.917-50.083 68.113-50.937-41.948-50.712 94.961-.882-.471 51.288-96.038 51.063 42.052z\" clip-rule=\"evenodd\"></path><circle cx=\"96\" cy=\"221\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"45\" cy=\"316\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"147\" cy=\"262\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"197\" cy=\"195\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"249\" cy=\"216\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"300\" cy=\"202\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"351\" cy=\"223\" r=\"3\" fill=\"#A8A8A8\"></circle><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m350.81 117.892-50.581 40.065-51.304 13.58-51.791-30.875-50.044 68.06-50.983-41.986-50.693 75.044-.828-.56 51.308-75.955 51.016 42.013 49.956-67.94 52.209 31.125 50.696-13.42 50.419-39.935z\" clip-rule=\"evenodd\"></path><circle cx=\"96\" cy=\"166\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"45\" cy=\"241\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"147\" cy=\"207\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"197\" cy=\"140\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"249\" cy=\"171\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"300\" cy=\"157\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"351\" cy=\"118\" r=\"3\" fill=\"#A8A8A8\"></circle></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/pie.svg":
/*!**************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/pie.svg ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m191.995 203.185 120.501 124.388C282.524 353.981 243.18 370 200.095 370 106.154 370 30 293.846 30 199.905 30 108.68 101.815 34.228 191.995 30zM370 208.005c-1.961 41.827-19.029 79.703-45.87 108.295L219.219 208.005zM208.194 30C295.69 34.102 365.898 104.31 370 191.806H208.194z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/scatter.svg":
/*!******************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/scatter.svg ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#525252\" fill-rule=\"evenodd\" d=\"M376 354.501v.999h-24.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001zM24 75v8h16v-8zm0 61v8h16v-8zm0 68v-8h16v8zm0 54v8h16v-8zm0 69v-8h16v8zm9 49v-8h24v8zm52-8v8h24v-8zm50 0v8h24v-8zm50 0v8h24v-8zm52 8v-8h24v8zm52-8v8h24v-8zm52 8v-8h24v8zm6-287a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-48 14a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-31 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-113 44a8 8 0 1 0 0-16 8 8 0 0 0 0 16m30 25a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-58 40a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-30 42a8 8 0 1 1-16 0 8 8 0 0 1 16 0m38 4a8 8 0 1 1-16 0 8 8 0 0 1 16 0m45-30a8 8 0 1 1-16 0 8 8 0 0 1 16 0m41-36a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-13-58a8 8 0 1 0 0-16 8 8 0 0 0 0 16m61 1a8 8 0 1 1-16 0 8 8 0 0 1 16 0m38-30a8 8 0 1 1-16 0 8 8 0 0 1 16 0m40-16a8 8 0 1 1-16 0 8 8 0 0 1 16 0\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/smooth-area.svg":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/smooth-area.svg ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#A8A8A8\" d=\"M24 83v-8h16v8zM24 144v-8h16v8zM24 204v-8h16v8zM24 266v-8h16v8zM24 327v-8h16v8zM135 376v-8h24v8zM85 376v-8h24v8zM33 376v-8h24v8zM185 376v-8h24v8zM237 376v-8h24v8zM289 376v-8h24v8zM341 376v-8h24v8z\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M376 354.501v.999h-24.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001z\" clip-rule=\"evenodd\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m118.545 220.032-2.213-1.235a34 34 0 0 0-38.159 3.428L45 249.5v30.214c3.984-4.618 8.656-9.198 13.805-12.99 10.634-7.83 23.84-12.646 37.238-6.496 29.564 13.57 53.981 5.763 68.251-7.556 7.503-7.003 18.521-16.771 31.068-22.333 12.659-5.611 27.171-7.046 41.113 3.142 12.934 9.452 27.929 18.766 42.113 23.392 14.211 4.636 26.946 4.382 36.213-4.207 10.919-10.12 24.971-18.293 36.199-23.742V179l-25.766-14.517c-14.358-8.09-32.45-4.718-42.93 8.001l-9.791 11.883c-12.163 14.762-34.644 15.145-47.303.806-13.874-15.716-39.007-13.477-49.885 4.443l-11.151 18.367c-9.492 15.637-29.654 20.961-45.629 12.049M45 330.81v-43.161c4.46-5.852 10.235-12.086 16.77-16.899 9.974-7.344 21.185-11.028 32.187-5.978 31.436 14.43 58.019 6.236 73.749-8.444 7.497-6.997 17.979-16.229 29.682-21.418 11.591-5.138 24.079-6.203 36.137 2.608 13.066 9.549 28.571 19.235 43.512 24.109 14.914 4.864 29.929 5.118 41.162-5.294 9.791-9.074 22.321-16.579 32.801-21.834v58.189c-20.957 1.026-60.451 6.532-94.59 23.062-11.627 5.63-20.788 7.612-28.256 7.407-7.43-.204-13.377-2.577-18.596-5.998-5.075-3.326-9.417-7.604-13.815-11.936l-.544-.536c-4.499-4.429-9.142-8.934-14.494-11.877-2.913-1.603-5.764-2.165-8.579-1.826-2.765.333-5.3 1.511-7.66 3.058-2.354 1.542-4.663 3.539-6.965 5.644-.841.769-1.675 1.547-2.515 2.33l-.002.002c-1.514 1.412-3.05 2.845-4.697 4.292-5.061 4.447-10.666 8.565-17.579 10.7-6.854 2.116-15.212 2.347-25.886-1.371-18.507-6.446-34.021-3.557-45.85 2.755C54.5 321.849 49.149 326.317 45 330.81m0 7.804V354.5h306v-56.807c-20.516 1.032-59.158 6.456-92.41 22.557-12.123 5.87-22.087 8.138-30.573 7.905-8.522-.233-15.357-2.984-21.2-6.814-5.502-3.606-10.165-8.202-14.477-12.452l-.181-.178-.468-.461c-4.578-4.508-8.748-8.503-13.396-11.059-2.087-1.148-3.893-1.445-5.571-1.243-1.73.208-3.527.971-5.518 2.276-1.997 1.309-4.059 3.074-6.33 5.151-.768.702-1.568 1.448-2.394 2.218l-.002.002c-1.554 1.449-3.198 2.982-4.892 4.47-5.251 4.615-11.49 9.278-19.405 11.722-7.974 2.462-17.429 2.606-29.005-1.426-17.093-5.954-31.162-3.26-41.85 2.445-8.095 4.319-14.281 10.386-18.328 15.808\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/smooth-line.svg":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/smooth-line.svg ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#A8A8A8\" d=\"M24 83v-8h16v8zM24 144v-8h16v8zM24 204v-8h16v8zM24 266v-8h16v8zM24 327v-8h16v8zM135 376v-8h24v8zM85 376v-8h24v8zM33 376v-8h24v8zM185 376v-8h24v8zM237 376v-8h24v8zM289 376v-8h24v8zM341 376v-8h24v8z\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M376 354.501v.999h-24.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001z\" clip-rule=\"evenodd\"></path><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M326.792 248.694c-15.426-8.706-34.876-5.079-46.128 8.6l-8.137 9.892c-12.332 14.991-35.153 15.38-47.987.817-13.619-15.452-38.319-13.253-48.994 4.361l-12.091 19.95c-9.081 14.984-28.398 20.085-43.693 11.538-13.593-7.597-30.696-4.133-40.262 8.154l-34.105 43.801-.79-.614 34.105-43.802c9.87-12.676 27.516-16.249 41.54-8.412 14.825 8.284 33.548 3.34 42.35-11.183l12.09-19.95c11.026-18.191 36.535-20.462 50.6-4.504 12.427 14.1 34.524 13.724 46.464-.791l8.137-9.892c11.561-14.055 31.544-17.78 47.392-8.836l23.463 13.242-.492.87z\" clip-rule=\"evenodd\"></path><circle cx=\"96\" cy=\"300\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"45\" cy=\"355\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"147\" cy=\"306\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"197\" cy=\"258\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"249\" cy=\"278\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"300\" cy=\"245\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"351\" cy=\"262\" r=\"3\" fill=\"#A8A8A8\"></circle><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M229.969 208.854c-19.296-7.793-41.421-1.516-53.749 15.251l-10.663 14.501c-10.031 13.642-29.46 16.062-42.532 5.298-13.896-11.444-34.79-7.303-43.27 8.577l-34.314 64.254-.882-.471 34.314-64.254c8.778-16.437 30.404-20.724 44.788-8.878 12.628 10.4 31.4 8.061 41.091-5.119l10.662-14.501c12.599-17.134 35.209-23.55 54.93-15.586l3.243 1.31a50.046 50.046 0 0 0 31.549 1.975l12.467-3.3a70.5 70.5 0 0 1 43.999 2.606l29.082 11.518-.368.93-29.082-11.518a69.507 69.507 0 0 0-43.376-2.569l-12.466 3.3a51.046 51.046 0 0 1-32.179-2.015z\" clip-rule=\"evenodd\"></path><circle cx=\"96\" cy=\"239\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"45\" cy=\"316\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"147\" cy=\"250\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"197\" cy=\"208\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"249\" cy=\"213\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"300\" cy=\"206\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"351\" cy=\"223\" r=\"3\" fill=\"#A8A8A8\"></circle><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"m350.868 117.838-23.757 25.893a79.497 79.497 0 0 1-51.631 25.448l-11.951 1.048a45.49 45.49 0 0 1-27.275-6.244l-6.002-3.578c-18.785-11.198-43.003-6.299-55.959 11.32l-7.713 10.49c-10.587 14.398-31.092 16.952-44.887 5.591-13.721-11.299-34.19-8.333-44.14 6.396L45.414 241.78l-.828-.56 32.139-47.578c10.28-15.218 31.427-18.282 45.603-6.608 13.353 10.996 33.2 8.524 43.446-5.411l7.714-10.49c13.26-18.035 38.049-23.049 57.276-11.586l6.002 3.578a44.507 44.507 0 0 0 26.676 6.106l11.95-1.048a78.502 78.502 0 0 0 50.982-25.128l23.758-25.893z\" clip-rule=\"evenodd\"></path><circle cx=\"96\" cy=\"181\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"45\" cy=\"241\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"147\" cy=\"194\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"197\" cy=\"155\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"249\" cy=\"167\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"300\" cy=\"162\" r=\"3\" fill=\"#A8A8A8\"></circle><circle cx=\"351\" cy=\"118\" r=\"3\" fill=\"#A8A8A8\"></circle></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked-bar.svg":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/stacked-bar.svg ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#000\" d=\"M132.5 67v20h-87V67zM195.5 67v20h-61V67zM243.5 67v20h-46V67zM188.5 130v20h-143v-20zM259.5 130v20h-69v-20zM325.5 130v20h-64v-20zM158.5 191v20h-113v-20zM234.5 191v20h-74v-20zM282.5 191v20h-46v-20zM114.5 253v20h-69v-20zM158.5 253v20h-42v-20zM197.5 253v20h-37v-20zM100.5 315v20h-55v-20zM163.5 315v20h-61v-20zM228.5 315v20h-63v-20zM24 79v-8h16v8zM24 140v-8h16v8zM24 200v-8h16v8zM24 262v-8h16v8zM24 323v-8h16v8zM135 372v-8h24v8zM85 372v-8h24v8zM33 372v-8h24v8zM185 372v-8h24v8zM237 372v-8h24v8zM289 372v-8h24v8zM341 372v-8h24v8z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M376 350.501v.999h-75.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001zm-24.5.999v4h-1v-4z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked-column.svg":
/*!*************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/stacked-column.svg ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#000\" d=\"M24 107v-8h16v8zM24 56v-8h16v8zM24 158v-8h16v8zM24 209v-8h16v8zM24 261v-8h16v8zM24 311v-8h16v8zM24 362v-8h16v8zM128 376v-8h24v8zM68 376v-8h24v8zM189 376v-8h24v8zM250 376v-8h24v8zM311 376v-8h24v8zM70 271h20v87H70zM70 208h20v61H70zM70 160h20v46H70zM130 215h20v143h-20zM130 144h20v69h-20zM130 78h20v64h-20zM190 245h20v113h-20zM190 169h20v74h-20zM190 121h20v46h-20zM252 289h20v69h-20zM252 245h20v42h-20zM252 206h20v37h-20zM313 303h20v55h-20zM313 240h20v61h-20zM313 175h20v63h-20z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M49 24h-1v28h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h22v-.998H49z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked100-bar.svg":
/*!*************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/stacked100-bar.svg ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#000\" d=\"M132 64v20H45V64zM195 64v20h-61V64zM350 64v20H197V64zM188 124v20H45v-20zM286 124v20h-96v-20zM350 124v20h-62v-20zM158 184v20H45v-20zM234 184v20h-74v-20zM350 184v20H236v-20zM114 246v20H45v-20zM272 246v20H116v-20zM350 246v20h-76v-20zM100 307v20H45v-20zM184 307v20h-82v-20zM350 307v20H186v-20zM24 79v-8h16v8zM24 140v-8h16v8zM24 200v-8h16v8zM24 262v-8h16v8zM24 323v-8h16v8zM135 372v-8h24v8zM85 372v-8h24v8zM33 372v-8h24v8zM185 372v-8h24v8zM237 372v-8h24v8zM289 372v-8h24v8zM341 372v-8h24v8z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M376 350.501v.999h-75.5v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-50v4h-1v-4h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-60h-4v-1h4v-22h.998v327.001zm-24.5.999v4h-1v-4z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked100-column.svg":
/*!****************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/assets/icons/stacked100-column.svg ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 400 400\"><path fill=\"#000\" d=\"M24 107v-8h16v8zM24 56v-8h16v8zM24 158v-8h16v8zM24 209v-8h16v8zM24 261v-8h16v8zM24 311v-8h16v8zM24 362v-8h16v8zM128 376v-8h24v8zM68 376v-8h24v8zM189 376v-8h24v8zM250 376v-8h24v8zM311 376v-8h24v8zM70 271h20v87H70zM70 208h20v61H70zM70 72h20v134H70zM130 215h20v143h-20zM130 117h20v96h-20zM130 72h20v43h-20zM190 245h20v113h-20zM190 169h20v74h-20zM190 72h20v95h-20zM252 289h20v69h-20zM252 131h20v156h-20zM252 72h20v57h-20zM313 303h20v55h-20zM313 219h20v82h-20zM313 72h20v145h-20z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M49 24h-1v28h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v50h-4v1h4v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h60v4h1v-4h22v-.998H49z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/trash-check.svg":
/*!********************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/trash-check.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m11.366 7.841-.732-.682-3.125 3.349-1.635-1.84-.748.664 2.365 2.66z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4.5 3V1.167C4.5.469 5.204 0 6 0h4c.796 0 1.5.47 1.5 1.167V3h4a.5.5 0 0 1 0 1H14l-.929 11.077a1 1 0 0 1-.997.923H3.926a1 1 0 0 1-.997-.923L2 4H.5a.5.5 0 0 1 0-1zM3.003 4h9.994l-.923 11H3.926zM10.5 1v2h-5V1c0-.04 5-.04 5 0\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/zoom-in.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/zoom-in.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707zM7 6h3v1H7v3H6V7H3V6h3V3h1z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/gis/select-rectangle.svg":
/*!**********************************************************!*\
  !*** ./jimu-icons/svg/outlined/gis/select-rectangle.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M16 11V0H5v3.5h1V1h9v9H8.5v1zM.25 3l8.642 4.969-3.422.738 2.723 5.45-2.886 1.667-2.724-5.45-2.351 2.595zm.996 1.726-.01 5.644 1.527-1.684 2.91 5.771 1.154-.667-2.91-5.77 2.222-.48z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/chart/src/config.ts":
/*!*******************************************************!*\
  !*** ./extensions/widgets/common/chart/src/config.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryType: () => (/* binding */ CategoryType),
/* harmony export */   ConfigFields: () => (/* binding */ ConfigFields)
/* harmony export */ });
const ConfigFields = {
    fillColor: '_fillColor'
};
var CategoryType;
(function (CategoryType) {
    CategoryType["ByGroup"] = "BYGROUP";
    CategoryType["ByField"] = "BYFIELD";
})(CategoryType || (CategoryType = {}));


/***/ }),

/***/ "./extensions/widgets/common/chart/src/constants.ts":
/*!**********************************************************!*\
  !*** ./extensions/widgets/common/chart/src/constants.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByFieldSeriesX: () => (/* binding */ ByFieldSeriesX),
/* harmony export */   ByFieldSeriesXAlias: () => (/* binding */ ByFieldSeriesXAlias),
/* harmony export */   ByFieldSeriesY: () => (/* binding */ ByFieldSeriesY),
/* harmony export */   ByFieldSeriesYAlias: () => (/* binding */ ByFieldSeriesYAlias),
/* harmony export */   ChartLimits: () => (/* binding */ ChartLimits),
/* harmony export */   HistogramCountField: () => (/* binding */ HistogramCountField),
/* harmony export */   HistogramCountFieldAlias: () => (/* binding */ HistogramCountFieldAlias),
/* harmony export */   HistogramMaxValueField: () => (/* binding */ HistogramMaxValueField),
/* harmony export */   HistogramMaxValueFieldAlias: () => (/* binding */ HistogramMaxValueFieldAlias),
/* harmony export */   HistogramMinValueField: () => (/* binding */ HistogramMinValueField),
/* harmony export */   HistogramMinValueFieldAlias: () => (/* binding */ HistogramMinValueFieldAlias),
/* harmony export */   MaxColorCount: () => (/* binding */ MaxColorCount),
/* harmony export */   MaxInitialSplitBySeriesCount: () => (/* binding */ MaxInitialSplitBySeriesCount),
/* harmony export */   ObjectIdField: () => (/* binding */ ObjectIdField),
/* harmony export */   PieSliceGroupingSliceId: () => (/* binding */ PieSliceGroupingSliceId),
/* harmony export */   SplitByOtherSeriesName: () => (/* binding */ SplitByOtherSeriesName),
/* harmony export */   SplitByOtherSeriesValue: () => (/* binding */ SplitByOtherSeriesValue),
/* harmony export */   WebChartCurrentVersion: () => (/* binding */ WebChartCurrentVersion)
/* harmony export */ });
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");

const ByFieldSeriesX = 'name';
const ByFieldSeriesXAlias = 'Name';
const ByFieldSeriesY = 'value';
const ByFieldSeriesYAlias = 'Value';
const MaxColorCount = 20;
const ObjectIdField = '__outputid__';
const HistogramMinValueField = 'minValue';
const HistogramMinValueFieldAlias = 'Min value';
const HistogramMaxValueField = 'maxValue';
const HistogramMaxValueFieldAlias = 'Max value';
const HistogramCountField = 'count';
const HistogramCountFieldAlias = 'Count';
const PieSliceGroupingSliceId = '__other-slice__';
const MaxInitialSplitBySeriesCount = 20;
const SplitByOtherSeriesName = 'Undefined';
const SplitByOtherSeriesValue = '__other-split-value__';
const ChartLimits = {
    // chart's behavior once the limit is reached
    behaviorAfterLimit: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.LimitBehavior.Reject,
    // maximum number of series for bar chart
    maxBarChartSeriesCount: 100,
    // maximum number of bars for a unique series bar chart
    maxBarUniqueSeriesCountTotal: 10000,
    // maximum number of bars per series for a 2 series bar chart
    maxBarTwoSeriesCountPerSeries: 1000,
    // maximum number of bars for a 2 series bar chart
    maxBarTwoSeriesCountTotal: 2000,
    // maximum number of bars per series for a 3+ series bar chart
    maxBarThreePlusSeriesCountPerSeries: 100,
    // maximum number of bars for a 3+ series bar chart
    maxBarThreePlusSeriesCountTotal: 2000,
    // maximum number of series for line chart
    maxLineChartSeriesCount: 100,
    // maximum number of markes for a unique series line chart
    maxLineUniqueSeriesCountTotal: 10000,
    // maximum number of markes per series for a 2 series line chart
    maxLineTwoSeriesCountPerSeries: 1000,
    // maximum number of markes for a 2 series line chart
    maxLineTwoSeriesCountTotal: 2000,
    // maximum number of markes per series for a 3+ series line chart
    maxLineThreePlusSeriesCountPerSeries: 100,
    // maximum number of markes for a 3+ series line chart
    maxLineThreePlusSeriesCountTotal: 2000,
    /**
     * Specifies the maximum number of points to be rendered in a scatter plot.
     * If the number of points are more, then the data will be aggregated in
     * a 2D grid of size sqrt(maxScatterPointsAfterAggregation) x sqrt(maxScatterPointsAfterAggregation)
     */
    maxScatterPointsBeforeAggregation: 10000,
    // Specifies how many maximum points can be displayed once the scatter plot data is aggregated
    maxScatterPointsAfterAggregation: 10000,
    // maximum number of slices for pie chart
    maxPieChartSliceCountTotal: 300
};
// The version used for arcgis charts spec.
const WebChartCurrentVersion = '7.3.1';


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/components/components.tsx":
/*!*************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/components/components.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponents: () => (/* binding */ ChartComponents)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
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


const ChartComponents = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, ref) => {
    var _a;
    const { version, noDataOptions, tooltipFormatter, dataLabelFormatter, enableResponsiveFeatures = false, autoDisposeChart = false, queueChartCreation = true, useAnimatedCharts = false, hideLicenceWatermark = true, ignoreSmoothRenderingLimit = false, legendValueLabelFormatter, setTimeBinningInfoWhenNotProvided, returnSelectionIndexes = true, returnSelectionOIDs = false, chartWillRender } = props, others = __rest(props, ["version", "noDataOptions", "tooltipFormatter", "dataLabelFormatter", "enableResponsiveFeatures", "autoDisposeChart", "queueChartCreation", "useAnimatedCharts", "hideLicenceWatermark", "ignoreSmoothRenderingLimit", "legendValueLabelFormatter", "setTimeBinningInfoWhenNotProvided", "returnSelectionIndexes", "returnSelectionOIDs", "chartWillRender"]);
    const chartRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useForkRef(ref, chartRef);
    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)((_a = props.webMapWebChart) === null || _a === void 0 ? void 0 : _a.series);
    const globalOptions = {
        autoDisposeChart,
        enableResponsiveFeatures,
        queueChartCreation,
        useAnimatedCharts,
        hideLicenceWatermark,
        returnSelectionIndexes,
        returnSelectionOIDs
    };
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useUpdateEffect(() => {
        if (chartRef.current) {
            chartRef.current.refresh();
        }
    }, [version]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        seriesType === 'barSeries' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.BarChart, Object.assign({ ref: handleRef }, others, { dataLabelFormatter: dataLabelFormatter, tooltipFormatter: tooltipFormatter, noDataOptions: noDataOptions }, globalOptions))),
        seriesType === 'lineSeries' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.LineChart, Object.assign({ ref: handleRef }, others, { dataLabelFormatter: dataLabelFormatter, tooltipFormatter: tooltipFormatter, ignoreSmoothRenderingLimit: ignoreSmoothRenderingLimit, setTimeBinningInfoWhenNotProvided: setTimeBinningInfoWhenNotProvided, noDataOptions: noDataOptions }, globalOptions))),
        seriesType === 'pieSeries' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.PieChart, Object.assign({ ref: handleRef }, others, { dataLabelFormatter: dataLabelFormatter, tooltipFormatter: tooltipFormatter, legendValueLabelFormatter: legendValueLabelFormatter, noDataOptions: noDataOptions, chartWillRender: chartWillRender }, globalOptions))),
        seriesType === 'scatterSeries' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.ScatterPlot, Object.assign({ ref: handleRef }, others, { dataLabelFormatter: dataLabelFormatter, tooltipFormatter: tooltipFormatter, ignoreSmoothRenderingLimit: ignoreSmoothRenderingLimit, noDataOptions: noDataOptions }, globalOptions))),
        seriesType === 'histogramSeries' && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.Histogram, Object.assign({ ref: handleRef }, others, { dataLabelFormatter: dataLabelFormatter, tooltipFormatter: tooltipFormatter }, globalOptions)))));
});


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/components/index.ts":
/*!*******************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/components/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponents: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.ChartComponents),
/* harmony export */   ChartRoot: () => (/* reexport safe */ _root__WEBPACK_IMPORTED_MODULE_1__.ChartRoot),
/* harmony export */   getDataSourceLabels: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getDataSourceLabels),
/* harmony export */   getNotReadyTranslation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getNotReadyTranslation),
/* harmony export */   getWarningMessageTranslation: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getWarningMessageTranslation),
/* harmony export */   getWidgetLabelFromUseDataSource: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.getWidgetLabelFromUseDataSource),
/* harmony export */   isValidIWebChartDataSource: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isValidIWebChartDataSource),
/* harmony export */   isValidQuery: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isValidQuery),
/* harmony export */   isWebChartValid: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isWebChartValid),
/* harmony export */   useSourceRecords: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.useSourceRecords),
/* harmony export */   useWarningMessage: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.useWarningMessage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./extensions/widgets/common/chart/src/runtime/chart/components/utils.ts");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ "./extensions/widgets/common/chart/src/runtime/chart/components/root.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./extensions/widgets/common/chart/src/runtime/chart/components/components.tsx");





/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/components/placeholder.tsx":
/*!**************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/components/placeholder.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Placeholder: () => (/* binding */ Placeholder)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


const Placeholders = {
    bar: __webpack_require__(/*! ../../assets/icons/bar.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/bar.svg"),
    column: __webpack_require__(/*! ../../assets/icons/column.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/column.svg"),
    'stacked-bar': __webpack_require__(/*! ../../assets/icons/stacked-bar.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked-bar.svg"),
    'stacked100-bar': __webpack_require__(/*! ../../assets/icons/stacked100-bar.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked100-bar.svg"),
    'stacked-column': __webpack_require__(/*! ../../assets/icons/stacked-column.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked-column.svg"),
    'stacked100-column': __webpack_require__(/*! ../../assets/icons/stacked100-column.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/stacked100-column.svg"),
    line: __webpack_require__(/*! ../../assets/icons/line.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/line.svg"),
    'smooth-line': __webpack_require__(/*! ../../assets/icons/smooth-line.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/smooth-line.svg"),
    area: __webpack_require__(/*! ../../assets/icons/area.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/area.svg"),
    'smooth-area': __webpack_require__(/*! ../../assets/icons/smooth-area.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/smooth-area.svg"),
    pie: __webpack_require__(/*! ../../assets/icons/pie.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/pie.svg"),
    donut: __webpack_require__(/*! ../../assets/icons/donut.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/donut.svg"),
    scatter: __webpack_require__(/*! ../../assets/icons/scatter.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/scatter.svg"),
    histogram: __webpack_require__(/*! ../../assets/icons/histogram.svg */ "./extensions/widgets/common/chart/src/runtime/assets/icons/histogram.svg")
};
const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  .jimu-widget-placeholder {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .alert-tooltip-button{
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .alert-panel {
    position: absolute;
    max-width: calc(100% - 20px);
    width: auto !important;
    bottom: 10px;
  }
`;
const Placeholder = (props) => {
    const { templateType, showMessage, message, messageType = 'tooltip', className } = props;
    const icon = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => Placeholders[templateType], [templateType]);
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('placeholder-container w-100 h-100', className), css: style },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.WidgetPlaceholder, { iconSize: 'large', icon: icon }),
        showMessage && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: messageType, withIcon: true, size: 'small', type: 'warning', text: message }));
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/components/root.tsx":
/*!*******************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/components/root.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartRoot: () => (/* binding */ ChartRoot)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder */ "./extensions/widgets/common/chart/src/runtime/chart/components/placeholder.tsx");




const Root = jimu_theme__WEBPACK_IMPORTED_MODULE_1__.styled.div((props) => {
    return `
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: ${props.background} !important;
      .chart-toolbar {
        height: ${props.showTools ? '38px' : '0px'};
      }
      .chart-container {
        height: ${props.showTools ? 'calc(100% - 38px)' : '100%'} !important;
        > .web-chart {
          height: 100%;
          width: 100%;
        }
      }
      .arcgis-charts-modal-content, .arcgis-charts-ampopup-content, .arcgis-charts-modal-curtain, .arcgis-charts-ampopup-curtain {
        z-index: auto;
      }
    `;
});
const ChartRoot = (props) => {
    const { className, showPlaceholder, showLoading, background, tools, templateType, messageType, message, children } = props;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Root, { showTools: !!tools, background: background, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('chart-root', className) },
        showPlaceholder && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_placeholder__WEBPACK_IMPORTED_MODULE_3__.Placeholder, { templateType: templateType, message: message, messageType: messageType, showMessage: !!message })),
        !showPlaceholder && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'chart-toolbar' }, tools),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'chart-container' },
                children,
                showLoading && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, { type: 'DONUT' })))));
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/components/utils.ts":
/*!*******************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/components/utils.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataSourceLabels: () => (/* binding */ getDataSourceLabels),
/* harmony export */   getNotReadyTranslation: () => (/* binding */ getNotReadyTranslation),
/* harmony export */   getWarningMessageTranslation: () => (/* binding */ getWarningMessageTranslation),
/* harmony export */   getWidgetLabelFromUseDataSource: () => (/* binding */ getWidgetLabelFromUseDataSource),
/* harmony export */   isValidIWebChartDataSource: () => (/* binding */ isValidIWebChartDataSource),
/* harmony export */   isValidQuery: () => (/* binding */ isValidQuery),
/* harmony export */   isWebChartValid: () => (/* binding */ isWebChartValid),
/* harmony export */   useSourceRecords: () => (/* binding */ useSourceRecords),
/* harmony export */   useWarningMessage: () => (/* binding */ useWarningMessage)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/default */ "./extensions/widgets/common/chart/src/runtime/translations/default.ts");





/**
 *  Get the warning message translation.
 * @param type
 * @param sourceStatus
 */
const getWarningMessageTranslation = (type, seriesLength, sourceStatus, isSelectionEmpty) => {
    let translation = '';
    if (isSelectionEmpty) {
        translation = 'dataEmptyTip';
    }
    else {
        if (sourceStatus === 'exceed') {
            if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_3__.isSerialSeries)(type)) {
                if (type === 'lineSeries') {
                    translation = 'lineLimitation';
                }
                else {
                    if (seriesLength === 1) {
                        translation = 'bar1SeriesLimitation';
                    }
                    else if (seriesLength === 2) {
                        translation = 'bar2SeriesLimitation';
                    }
                    else if (seriesLength > 2) {
                        translation = 'bar3SeriesLimitation';
                    }
                }
            }
            else if (type === 'pieSeries') {
                translation = 'pieLimitation';
            }
        }
        else if (sourceStatus === 'empty') {
            translation = 'dataEmptyTip';
        }
        else if (sourceStatus === 'error') {
            translation = 'widgetLoadError';
        }
    }
    return translation;
};
/**
 * Get the warning message translation of not-ready data source.
 * @param useDataSource
 * @returns
 */
const getNotReadyTranslation = (useDataSource, dataSource) => {
    if (!useDataSource || !dataSource)
        return null;
    const labels = getDataSourceLabels(useDataSource, dataSource);
    const translation = [
        'outputDataIsNotGenerated',
        {
            outputDsLabel: labels.dataSourceLabel,
            sourceWidgetName: labels.widgetLabel
        }
    ];
    return translation;
};
/**
 * Get the label of the widget that outputs the data source
 * @param useDataSource
 */
const getWidgetLabelFromUseDataSource = (useDataSource) => {
    var _a, _b, _c;
    const widgetId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getWidgetIdByOutputDataSource(useDataSource);
    const widgetLabel = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig.widgets) === null || _b === void 0 ? void 0 : _b[widgetId]) === null || _c === void 0 ? void 0 : _c.label;
    return widgetLabel;
};
/**
 * Get the label of the data source and the label of the widget that outputs the data source
 * @param useDataSource
 * @param dataSource
 * @returns
 */
const getDataSourceLabels = (useDataSource, dataSource) => {
    const dataSourceLabel = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getLabel();
    const widgetLabel = getWidgetLabelFromUseDataSource(useDataSource);
    return { dataSourceLabel, widgetLabel };
};
/**
 * Monitor and get the latest source records
 * @param dataSource
 */
const useSourceRecords = (dataSource) => {
    const dataSourceId = dataSource === null || dataSource === void 0 ? void 0 : dataSource.id;
    const sourceVersion = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[dataSourceId]) === null || _b === void 0 ? void 0 : _b.sourceVersion; });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        var _a;
        const records = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getSourceRecords()) !== null && _a !== void 0 ? _a : [];
        return { records, version: sourceVersion };
    }, [dataSource, sourceVersion]);
};
/**
 * Check whether the query in chart data source is valid.
 * @param dataSource
 */
const isValidQuery = (type, query) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_3__.isSerialSeries)(type) || type === 'pieSeries') {
        if (query.outFields) {
            return !!(((_a = query === null || query === void 0 ? void 0 : query.outFields) === null || _a === void 0 ? void 0 : _a[0]) && ((_b = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _b === void 0 ? void 0 : _b[0]));
        }
        else {
            if (query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) {
                return (!!((_c = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _c === void 0 ? void 0 : _c[0]) &&
                    !!((_e = (_d = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.onStatisticField));
            }
            else {
                return !!((_g = (_f = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.onStatisticField);
            }
        }
    }
    else if (type === 'scatterSeries') {
        return !!((_h = query === null || query === void 0 ? void 0 : query.outFields) === null || _h === void 0 ? void 0 : _h[1]);
    }
    else if (type === 'histogramSeries') {
        return !!((_j = query === null || query === void 0 ? void 0 : query.outFields) === null || _j === void 0 ? void 0 : _j[0]);
    }
};
/**
 * Check whether the chart data source is valid.
 * @param dataSource
 */
const isValidIWebChartDataSource = (type, dataSource) => {
    return isValidQuery(type, dataSource === null || dataSource === void 0 ? void 0 : dataSource.query);
};
/**
 * Check whether the web chart config is valid.
 * @param webChart
 * @returns
 */
const isWebChartValid = (webChart) => {
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__.getSeriesType)(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    const sourceValid = isValidIWebChartDataSource(type, webChart === null || webChart === void 0 ? void 0 : webChart.dataSource);
    return sourceValid;
};
const useWarningMessage = (chartType, webChartValid, useDataSource, recordsStatus, seriesLength, isSelectionEmpty) => {
    const [type, setType] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('tooltip');
    const [message, setMessage] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('');
    const originSourceStatus = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId]) === null || _b === void 0 ? void 0 : _b.status; });
    const instanceStatus = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId]) === null || _b === void 0 ? void 0 : _b.instanceStatus; });
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        setType(recordsStatus === 'exceed' ? 'basic' : 'tooltip');
        if (originSourceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady &&
            instanceStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Created) {
            const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(useDataSource.dataSourceId);
            const translation = getNotReadyTranslation(useDataSource, dataSource);
            if (translation) {
                const message = translate(...translation);
                setMessage(message);
            }
        }
        else {
            if (!webChartValid) {
                setMessage('');
            }
            else {
                const translation = getWarningMessageTranslation(chartType, seriesLength, recordsStatus, isSelectionEmpty);
                if (translation) {
                    const message = translate(translation);
                    setMessage(message);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        originSourceStatus,
        instanceStatus,
        chartType,
        webChartValid,
        recordsStatus,
        isSelectionEmpty
    ]);
    return [type, message];
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/feature-layer.tsx":
/*!*****************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/feature-layer.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _original__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./original */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/original.tsx");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./output */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/output.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/utils.ts");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");







const FeatureLayerDataSourceManager = (props) => {
    var _a, _b, _c, _d;
    const { widgetId, useDataSource, outputDataSourceId, webChart, onSplitValuesChange, onSchemaChange } = props;
    const { queryVersion, dataSource, outputDataSource } = (0,_state__WEBPACK_IMPORTED_MODULE_5__.useChartRuntimeState)();
    const [splitByValues, setSplitByValues] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const dataSourceId = useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId;
    const splitByField = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__.getSplitByField)((_b = (_a = webChart === null || webChart === void 0 ? void 0 : webChart.dataSource) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.where, true);
    const seriesCount = (_c = webChart === null || webChart === void 0 ? void 0 : webChart.series) === null || _c === void 0 ? void 0 : _c.length;
    const seriesRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    const splitByFieldRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(splitByField);
    const onSplitValuesChangeRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(onSplitValuesChange);
    const onSchemaChangeRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(onSchemaChange);
    const query = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useMemoizedQuery)((_d = webChart === null || webChart === void 0 ? void 0 : webChart.dataSource) === null || _d === void 0 ? void 0 : _d.query);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (splitByField && (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isDataSourceReady)(dataSource)) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.queryFieldUniqueValues)(dataSource, splitByField).then((values) => {
                setSplitByValues({ [splitByField]: values });
            });
        }
    }, [dataSource, splitByField, queryVersion, onSplitValuesChangeRef]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useUpdateEffect(() => {
        var _a, _b;
        if (dataSource && outputDataSource && (splitByValues === null || splitByValues === void 0 ? void 0 : splitByValues[splitByFieldRef.current])) { //Update schema for split-by
            const dataSourceId = dataSource.id;
            const outputDataSourceId = outputDataSource.id;
            const schema = (0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.getDataSourceSchemaForSplitBy)(outputDataSource, dataSourceId, query, seriesRef.current, splitByValues[splitByFieldRef.current]);
            let dsJson = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig.dataSources) === null || _b === void 0 ? void 0 : _b[outputDataSourceId];
            if (!dsJson) {
                console.error(`The output data source of ${dataSourceId} does not exist`);
                return null;
            }
            dsJson = dsJson.set('schema', schema);
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().updateDataSourceByDataSourceJson(outputDataSource, dsJson);
            onSplitValuesChangeRef.current(splitByValues);
            onSchemaChangeRef.current(schema);
        }
    }, [dataSource, outputDataSource, splitByValues, query, seriesCount]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_original__WEBPACK_IMPORTED_MODULE_1__["default"], { widgetId: widgetId, useDataSource: useDataSource }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_output__WEBPACK_IMPORTED_MODULE_2__["default"], { webChart: webChart, widgetId: widgetId, dataSourceId: outputDataSourceId, originalDataSourceId: dataSourceId })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureLayerDataSourceManager);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/index.tsx":
/*!*********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/index.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureLayerDataSourceManager: () => (/* reexport safe */ _feature_layer__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   InlineDataSourceManager: () => (/* reexport safe */ _inline__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/inline.tsx");
/* harmony import */ var _feature_layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature-layer */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/feature-layer.tsx");




/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/inline.tsx":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/inline.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./extensions/widgets/common/chart/src/constants.ts");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _original__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./original */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/original.tsx");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./output */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/output.tsx");
/* harmony import */ var _use_fetch_records__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-fetch-records */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/use-fetch-records.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/utils.ts");











const InlineDataSourceManager = (props) => {
    var _a;
    const { widgetId, webChart, outputDataSourceId, useDataSource, chartLimits = _constants__WEBPACK_IMPORTED_MODULE_3__.ChartLimits } = props;
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    const query = (_a = webChart === null || webChart === void 0 ? void 0 : webChart.dataSource) === null || _a === void 0 ? void 0 : _a.query;
    const recordsLimited = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getInlineRecordslimited)(webChart === null || webChart === void 0 ? void 0 : webChart.series, chartLimits);
    const { queryVersion } = (0,_state__WEBPACK_IMPORTED_MODULE_6__.useChartRuntimeState)();
    const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_4__.getCategoryType)(query);
    const callback = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (categoryType !== _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByField || (!(0,_utils_default__WEBPACK_IMPORTED_MODULE_5__.isSerialSeries)(type) && type !== 'pieSeries'))
            return null;
        return _utils__WEBPACK_IMPORTED_MODULE_10__.convertByFieldRecords;
    }, [categoryType, type]);
    (0,_use_fetch_records__WEBPACK_IMPORTED_MODULE_9__["default"])(type, query, queryVersion, recordsLimited, callback);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_original__WEBPACK_IMPORTED_MODULE_7__["default"], { widgetId: widgetId, useDataSource: useDataSource }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_output__WEBPACK_IMPORTED_MODULE_8__["default"], { webChart: webChart, widgetId: widgetId, dataSourceId: outputDataSourceId, originalDataSourceId: useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InlineDataSourceManager);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/original.tsx":
/*!************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/original.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");


const OriginDataSourceManager = (props) => {
    const { widgetId, useDataSource, onQueryRequired } = props;
    const { queryVersion, dataSource, filter } = (0,_state__WEBPACK_IMPORTED_MODULE_1__.useChartRuntimeState)();
    const dataSourceRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(dataSource);
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_1__.useChartRuntimeDispatch)();
    //When the filter is modified, update it to the data source
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        var _a;
        if (dataSourceRef.current) {
            dataSourceRef.current.updateQueryParams({
                where: (_a = filter === null || filter === void 0 ? void 0 : filter.sql) !== null && _a !== void 0 ? _a : '1=1',
                sqlExpression: filter !== null && filter !== void 0 ? filter : null // TODO: test
            }, widgetId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);
    const handleCreated = (dataSouce) => {
        dispatch({ type: 'SET_DATA_SOURCE', value: dataSouce });
    };
    const handleQueryRequired = () => {
        dispatch({ type: 'SET_QUERY_VERSION', value: queryVersion + 1 });
        onQueryRequired === null || onQueryRequired === void 0 ? void 0 : onQueryRequired();
    };
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { widgetId: widgetId, useDataSource: useDataSource, onDataSourceCreated: handleCreated, onQueryRequired: handleQueryRequired });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OriginDataSourceManager);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/output.tsx":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/output.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/utils.ts");





/**
 * Check whether a data source instance is valid (whether the corresponding data source is deleted)
 * @param dataSource
 */
const isDataSourceValid = (dataSource) => {
    if (!dataSource)
        return false;
    const info = dataSource.getInfo();
    return info && Object.keys(info).length > 0;
};
const OutputSourceManager = (props) => {
    var _a;
    const { widgetId, dataSourceId, webChart } = props;
    const { dataSource, outputDataSource, records } = (0,_state__WEBPACK_IMPORTED_MODULE_1__.useChartRuntimeState)();
    const query = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.useMemoizedQuery)((_a = webChart === null || webChart === void 0 ? void 0 : webChart.dataSource) === null || _a === void 0 ? void 0 : _a.query);
    const seriesRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useUpdateEffect(() => {
        var _a, _b;
        if (dataSource && outputDataSource && query && !query.where) { //Update schema for non-split-by
            const outputDataSourceId = outputDataSource.id;
            const originalDataSourceId = dataSource.id;
            const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__.getSeriesType)(seriesRef.current);
            const schema = (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSchema)(outputDataSource, originalDataSourceId, query, seriesType);
            let dsJson = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig.dataSources) === null || _b === void 0 ? void 0 : _b[outputDataSourceId];
            if (!dsJson) {
                console.error(`The output data source of ${outputDataSourceId} does not exist`);
                return null;
            }
            dsJson = dsJson.set('schema', schema);
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().updateDataSourceByDataSourceJson(outputDataSource, dsJson);
        }
    }, [dataSource, outputDataSource, query]);
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_1__.useChartRuntimeDispatch)();
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!isDataSourceValid(outputDataSource) || !records)
            return;
        outputDataSource.setSourceRecords(records);
        outputDataSource.setStatus(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded);
        outputDataSource.setCountStatus(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outputDataSource, records]);
    const useDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (dataSourceId) {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                dataSourceId: dataSourceId,
                mainDataSourceId: dataSourceId
            });
        }
    }, [dataSourceId]);
    const handleCreated = (dataSource) => {
        syncOriginDsInfo(dataSource);
        dispatch({ type: 'SET_OUTPUT_DATA_SOURCE', value: dataSource });
    };
    const syncOriginDsInfo = (dataSource) => {
        var _a, _b, _c;
        const originDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource((_c = (_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.getDataSourceJson()) === null || _a === void 0 ? void 0 : _a.originDataSources) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.dataSourceId);
        if (!dataSource || !originDs) {
            console.error('Failed to sync origin data source info to chart output data source.');
            return;
        }
        dataSource.setLayerDefinition(jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getLayerDefinitionIntersection(originDs.getLayerDefinition(), dataSource));
    };
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { widgetId: widgetId, useDataSource: useDataSource, onDataSourceCreated: handleCreated });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutputSourceManager);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/use-fetch-records.ts":
/*!********************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/use-fetch-records.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/utils.ts");




const getDataSourceQuery = (type, query) => {
    var _a;
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isValidQuery)(type, query))
        return null;
    // Remove `orderByField` for `by-field` mode of `serial` and `pie` chart
    if (((_a = query.outStatistics) === null || _a === void 0 ? void 0 : _a.length) && !query.groupByFieldsForStatistics) {
        return query.without('orderByFields');
    }
    return query;
};
const useFetchRecords = (type, query, version, recordsLimited, callback) => {
    const { dataSource, outputDataSource } = (0,_state__WEBPACK_IMPORTED_MODULE_2__.useChartRuntimeState)();
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_2__.useChartRuntimeDispatch)();
    const categoryField = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_1__.getCategoryField)(query);
    const params = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => getDataSourceQuery(type, query), [query, type]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isDataSourceReady)(dataSource) || !outputDataSource || params == null) {
            return;
        }
        dispatch({ type: 'SET_RECORDS_STATUS', value: 'loading' });
        dataSource.query(params).then((result) => {
            var _a;
            let records = result.records;
            if (callback)
                records = (_a = callback(records, query, dataSource)) !== null && _a !== void 0 ? _a : [];
            records = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getSourceRecords)(records, outputDataSource, categoryField);
            if (records.length > recordsLimited) {
                dispatch({ type: 'SET_RECORDS', value: undefined });
                dispatch({ type: 'SET_RECORDS_STATUS', value: 'exceed' });
                return;
            }
            if (records.length === 0) {
                dispatch({ type: 'SET_RECORDS_STATUS', value: 'empty' });
                dispatch({ type: 'SET_RECORDS', value: records });
                return;
            }
            dispatch({ type: 'SET_RECORDS_STATUS', value: 'loaded' });
            dispatch({ type: 'SET_RECORDS', value: records });
        }, (error) => {
            console.error(error);
            dispatch({ type: 'SET_RECORDS', value: undefined });
            dispatch({ type: 'SET_RECORDS_STATUS', value: 'error' });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataSource, outputDataSource, params, version]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchRecords);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/data-source/utils.ts":
/*!********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/data-source/utils.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertByFieldRecords: () => (/* binding */ convertByFieldRecords),
/* harmony export */   getInlineRecordslimited: () => (/* binding */ getInlineRecordslimited),
/* harmony export */   getSourceRecords: () => (/* binding */ getSourceRecords),
/* harmony export */   isDataSourceReady: () => (/* binding */ isDataSourceReady),
/* harmony export */   isValidQuery: () => (/* binding */ isValidQuery),
/* harmony export */   queryFieldUniqueValues: () => (/* binding */ queryFieldUniqueValues),
/* harmony export */   sortWebChartData: () => (/* binding */ sortWebChartData),
/* harmony export */   useMemoizedQuery: () => (/* binding */ useMemoizedQuery)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./extensions/widgets/common/chart/src/constants.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const getSourceRecords = (records, dataSource, inputCategoryField) => {
    var _a;
    const idField = dataSource.getIdField();
    const categoryField = inputCategoryField || _constants__WEBPACK_IMPORTED_MODULE_2__.ByFieldSeriesX;
    // Filter out data with empty grouping field
    const filteredRecords = records === null || records === void 0 ? void 0 : records.filter(record => { var _a; return ((_a = record === null || record === void 0 ? void 0 : record.getData()) === null || _a === void 0 ? void 0 : _a[categoryField]) != null; });
    const rs = (_a = filteredRecords === null || filteredRecords === void 0 ? void 0 : filteredRecords.map((record, i) => {
        var _a;
        if (dataSource && record.dataSource !== dataSource) {
            const attributes = record.getData();
            // If `idField` used as the category field, use its original value
            const objectid = categoryField === idField ? ((_a = attributes[idField]) !== null && _a !== void 0 ? _a : i) : i;
            const feature = { attributes: Object.assign(Object.assign({}, attributes), { [idField]: objectid }) };
            return dataSource.buildRecord(feature);
        }
        else {
            return record;
        }
    })) === null || _a === void 0 ? void 0 : _a.filter(record => !!record);
    return rs;
};
/**
 * Get the limited records count.
 * @param series
 */
const getInlineRecordslimited = (series, chartLimits) => {
    let recordsLimited = 1000;
    const seriesLength = series === null || series === void 0 ? void 0 : series.length;
    if (!seriesLength)
        return recordsLimited;
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(series);
    if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_5__.isSerialSeries)(type)) {
        if (seriesLength === 1) {
            recordsLimited = chartLimits.maxBarUniqueSeriesCountTotal;
        }
        else if (seriesLength === 2) {
            recordsLimited = chartLimits.maxBarTwoSeriesCountPerSeries;
        }
        else if (seriesLength > 2) {
            recordsLimited = chartLimits.maxBarThreePlusSeriesCountPerSeries;
        }
    }
    else if (type === 'pieSeries') {
        recordsLimited = chartLimits.maxPieChartSliceCountTotal;
    }
    return recordsLimited;
};
/**
 * Convert to formatted data for `by-field` mode.
 * In order for the series to know which data is to used in the global chart array (through valueY), need to convert the data,
 * transforming data into web chart data for `ByField` mode.
 *
 * In case of non-aggregated type bar chart, we rename the category names by adding a suffix, in order
 * to avoid multiple identical values (they are switched back to their original value when displayed).
 */
const convertByFieldRecords = (inputRecords, query, dataSource) => {
    var _a, _b, _c, _d;
    const inputRecord = inputRecords === null || inputRecords === void 0 ? void 0 : inputRecords[0];
    if (!inputRecord || !((_a = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _a === void 0 ? void 0 : _a.length))
        return;
    const orderByFields = query.orderByFields;
    const outStatistics = query.outStatistics;
    const numericFields = (_c = (_b = outStatistics === null || outStatistics === void 0 ? void 0 : outStatistics.map((statics) => statics.onStatisticField)) === null || _b === void 0 ? void 0 : _b.filter((field) => !!field)) === null || _c === void 0 ? void 0 : _c.asMutable();
    const x = _constants__WEBPACK_IMPORTED_MODULE_2__.ByFieldSeriesX;
    const y = _constants__WEBPACK_IMPORTED_MODULE_2__.ByFieldSeriesY;
    const data = (_d = numericFields === null || numericFields === void 0 ? void 0 : numericFields.map((field) => {
        var _a, _b;
        const value = inputRecord.getFieldValue(field);
        const item = {
            [x]: field,
            [y]: value !== null && value !== void 0 ? value : 0
        };
        const alias = (_b = (_a = (0,_utils_common__WEBPACK_IMPORTED_MODULE_3__.getFieldSchema)(field, dataSource.id)) === null || _a === void 0 ? void 0 : _a.alias) !== null && _b !== void 0 ? _b : field;
        if (alias !== field) {
            item[x] = alias;
            item[x + '_original'] = field;
        }
        return item;
    })) !== null && _d !== void 0 ? _d : [];
    sortWebChartData(data, orderByFields);
    const records = data === null || data === void 0 ? void 0 : data.map((item, i) => {
        const feature = { attributes: item };
        return dataSource.buildRecord(feature);
    });
    return records;
};
/**
 * Sorting an array WebChartDataItem following the orderByFields instructions.
 */
function sortWebChartData(data, orderByFields, forceAscendingOrder = false) {
    if (data == null || orderByFields == null)
        return;
    data.sort((dataItemA, dataItemB) => {
        // Default sort decision = 0 (equal values)
        let sortDecision = 0;
        // Using all the fields from orderByFields to proceed to the comparison
        for (let idx = 0; idx < orderByFields.length; idx += 1) {
            //`orderByField` must has `ASC` or `DESC` in it, e.g. 'field ASC', 'field name DESC'
            const [field, sortOrder] = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_4__.parseOrderByField)(orderByFields[idx]);
            const descOrder = sortOrder === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartSortOrderKinds.Descending &&
                !forceAscendingOrder;
            /**
             * We set the sortDecision only if one of the values is greater than the other one.
             * Otherwise it continues to the next value in the `orderByFields` array.
             */
            const firstEntry = dataItemA[field];
            const secondEntry = dataItemB[field];
            // In case of string values, we perform a natural sort using the native `localeCompare`
            if (typeof firstEntry === 'string' && typeof secondEntry === 'string') {
                sortDecision = firstEntry.localeCompare(secondEntry, undefined, {
                    numeric: true
                });
                if (descOrder)
                    sortDecision *= -1;
            }
            else if (firstEntry === undefined || firstEntry === null) {
                sortDecision = !descOrder ? 1 : -1;
            }
            else if (secondEntry === undefined || secondEntry === null) {
                sortDecision = !descOrder ? -1 : 1;
            }
            else if (firstEntry > secondEntry) {
                sortDecision = !descOrder ? 1 : -1;
                break;
            }
            else if (firstEntry < secondEntry) {
                sortDecision = !descOrder ? -1 : 1;
                break;
            }
        }
        return sortDecision;
    });
}
/**
 * Check whether the query in chart data source is valid.
 * @param dataSource
 */
const isValidQuery = (type, query) => {
    var _a, _b, _c, _d, _e, _f;
    if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_5__.isSerialSeries)(type) || type === 'pieSeries') {
        if (query.outFields) {
            return !!(((_a = query === null || query === void 0 ? void 0 : query.outFields) === null || _a === void 0 ? void 0 : _a[0]) && ((_b = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _b === void 0 ? void 0 : _b[0]));
        }
        else {
            return !!((_d = (_c = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.onStatisticField);
        }
    }
    else if (type === 'scatterSeries') {
        return !!((_e = query === null || query === void 0 ? void 0 : query.outFields) === null || _e === void 0 ? void 0 : _e[1]);
    }
    else if (type === 'histogramSeries') {
        return !!((_f = query === null || query === void 0 ? void 0 : query.outFields) === null || _f === void 0 ? void 0 : _f[0]);
    }
};
/**
 * Check whether a data source instance is valid (whether the corresponding data source is deleted)
 * @param dataSource
 */
const isDataSourceValid = (dataSource) => {
    if (!dataSource)
        return false;
    const info = dataSource.getInfo();
    return info && Object.keys(info).length > 0;
};
/**
 * Check whether a data source instance can be used to load data
 * @param dataSource
 */
const isDataSourceReady = (dataSource) => {
    if (!isDataSourceValid(dataSource))
        return false;
    const status = dataSource.getStatus();
    //The dats source is ready to use
    return status && status !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady;
};
const queryFieldUniqueValues = (dataSource, field) => __awaiter(void 0, void 0, void 0, function* () {
    const params = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_4__.getFieldUniqueValuesParams)(field, 101);
    const result = yield dataSource.query(params);
    const values = result.records
        .map((record) => record.getFieldValue(field))
        .filter((value) => value !== undefined);
    return values;
});
const DefaultQuery = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
const useMemoizedQuery = (inputQuery = DefaultQuery) => {
    const { groupByFieldsForStatistics, outFields, outStatistics, where } = inputQuery;
    const query = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        let query = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        if (where) {
            query = query.set('where', where);
        }
        if (groupByFieldsForStatistics) {
            query = query.set('groupByFieldsForStatistics', groupByFieldsForStatistics);
        }
        if (outFields) {
            query = query.set('outFields', outFields);
        }
        if (outStatistics) {
            query = query.set('outStatistics', outStatistics);
        }
        return Object.keys(query).length > 0 ? query : null;
    }, [groupByFieldsForStatistics, outFields, outStatistics, where]);
    return query;
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/index.tsx":
/*!*****************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/index.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _with_feature_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-feature-layer */ "./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/with-feature-layer.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./extensions/widgets/common/chart/src/runtime/chart/components/index.ts");
/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data-source */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/index.tsx");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools */ "./extensions/widgets/common/chart/src/runtime/chart/tools/index.tsx");








const useChartRendered = (dataSourceId, webChart) => {
    const status = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[dataSourceId]) === null || _b === void 0 ? void 0 : _b.status; });
    const valid = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_components__WEBPACK_IMPORTED_MODULE_5__.isWebChartValid)(webChart), [webChart]);
    const render = (status && status !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) && valid;
    return { valid, render };
};
//Check whether the current data source is selected features view has no selection
const useEmptySelectionDataSource = (dataSource) => {
    const sourceVersion = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[dataSource === null || dataSource === void 0 ? void 0 : dataSource.id]) === null || _b === void 0 ? void 0 : _b.sourceVersion; });
    const isSelectionDataSource = (dataSource === null || dataSource === void 0 ? void 0 : dataSource.isDataView) && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.dataViewId) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const selectionRecordsEmpty = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => isSelectionDataSource && !dataSource.getRecords().length, [isSelectionDataSource, dataSource, sourceVersion]);
    const useEmptySelectionView = dataSource === null || dataSource === void 0 ? void 0 : dataSource.useNoSelectionView();
    if (useEmptySelectionView)
        return false;
    return selectionRecordsEmpty;
};
const WebFeatureLayerChartComponent = (props) => {
    var _a, _b, _c;
    const { widgetId, tools: propTools, enableDataAction = true, webChart, chartLimits, useDataSource, defaultTemplateType, onInitDragHandler } = props;
    const { recordsStatus, dataSource } = (0,_state__WEBPACK_IMPORTED_MODULE_3__.useChartRuntimeState)();
    const isSelectionDataSourceEmpty = useEmptySelectionDataSource(dataSource);
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    const showTools = (propTools === null || propTools === void 0 ? void 0 : propTools.cursorEnable) || !!(propTools === null || propTools === void 0 ? void 0 : propTools.filter) || enableDataAction;
    const { valid, render } = useChartRendered(useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId, webChart);
    const showPlaceolder = !render || isSelectionDataSourceEmpty;
    const templateType = ((_a = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getTemplateType)(webChart)) === null || _a === void 0 ? void 0 : _a[1]) || defaultTemplateType || 'column';
    const [messageType, message] = (0,_components__WEBPACK_IMPORTED_MODULE_5__.useWarningMessage)(type, valid, useDataSource, recordsStatus, (_c = (_b = webChart === null || webChart === void 0 ? void 0 : webChart.series) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0, isSelectionDataSourceEmpty);
    const tools = showTools
        ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_tools__WEBPACK_IMPORTED_MODULE_7__["default"], { type: type, tools: propTools, widgetId: widgetId, enableDataAction: enableDataAction }))
        : null;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.ChartRoot, { templateType: templateType, messageType: messageType, message: message, showLoading: recordsStatus === 'loading', background: webChart === null || webChart === void 0 ? void 0 : webChart.background, className: 'web-feature-layer-chart', showPlaceholder: showPlaceolder, tools: tools },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_with_feature_layer__WEBPACK_IMPORTED_MODULE_2__["default"], { className: 'web-chart', widgetId: widgetId, webChart: webChart, chartLimits: chartLimits, useDataSource: useDataSource, onInitDragHandler: onInitDragHandler })));
};
const WebFeatureLayerChart = (props) => {
    var _a, _b, _c;
    const { widgetId, tools, enableDataAction = true, webChart: propWebChart, chartLimits, useDataSource, outputDataSourceId, defaultTemplateType, onInitDragHandler } = props;
    const { chart } = (0,_state__WEBPACK_IMPORTED_MODULE_3__.useChartRuntimeState)();
    const dataSourceId = useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId;
    const splitByField = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSplitByField)((_b = (_a = propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.dataSource) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.where, true);
    const query = (_c = propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.dataSource) === null || _c === void 0 ? void 0 : _c.query;
    const [splitByValues, setSplitByValues] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const splitByFieldRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useLatest(splitByField);
    const series = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (splitByFieldRef.current && (splitByValues === null || splitByValues === void 0 ? void 0 : splitByValues[splitByFieldRef.current])) {
            const splitByFieldType = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.getFieldType)(splitByFieldRef.current, dataSourceId);
            const seriesValues = (0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.createRuntimeSplitBySeries)(propWebChart.series, query, splitByFieldType, splitByValues[splitByFieldRef.current]);
            const series = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(seriesValues);
            return series;
        }
        else {
            return propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.series;
        }
    }, [dataSourceId, splitByFieldRef, splitByValues, propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.series, query]);
    const handleSchemaChange = () => {
        chart === null || chart === void 0 ? void 0 : chart.refresh(false, false);
    };
    const webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.set('series', series);
    }, [propWebChart, series]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_data_source__WEBPACK_IMPORTED_MODULE_6__.FeatureLayerDataSourceManager, { widgetId: widgetId, webChart: propWebChart, outputDataSourceId: outputDataSourceId, useDataSource: useDataSource, onSplitValuesChange: setSplitByValues, onSchemaChange: handleSchemaChange }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(WebFeatureLayerChartComponent, { widgetId: widgetId, tools: tools, webChart: webChart, chartLimits: chartLimits, useDataSource: useDataSource, enableDataAction: enableDataAction, onInitDragHandler: onInitDragHandler, defaultTemplateType: defaultTemplateType })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebFeatureLayerChart);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/with-feature-layer.tsx":
/*!******************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/with-feature-layer.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.json */ "./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/config.json");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function WithFeatureLayerChart(props) {
    var _a;
    const { webChart: propWebChart } = props;
    const chartRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef();
    const handleMapViewChange = (mapView) => __awaiter(this, void 0, void 0, function* () {
        const view = mapView.view;
        yield view.when();
        yield new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 100);
        });
        const layer = view.map.layers.toArray()[0];
        const reactiveUtils = yield (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.loadArcGISJSAPIModule)('esri/core/reactiveUtils');
        const layerView = yield view.whenLayerView(layer);
        yield reactiveUtils.whenOnce(() => !layerView.updating);
        chartRef.current.config = _config_json__WEBPACK_IMPORTED_MODULE_2__.webChart;
        chartRef.current.layer = layerView;
        chartRef.current.view = view;
    });
    const mapid = (_a = propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.dataSource) === null || _a === void 0 ? void 0 : _a.mapid;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: mapid, onActiveViewChange: handleMapViewChange }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-charts-bar-chart", { ref: chartRef })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithFeatureLayerChart);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/index.tsx":
/*!*********************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-source */ "./extensions/widgets/common/chart/src/runtime/chart/data-source/index.tsx");
/* harmony import */ var _inline_data_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-data-chart */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/index.tsx");
/* harmony import */ var _feature_layer_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-layer-chart */ "./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/index.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./extensions/widgets/common/chart/src/constants.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");







const Chart = (props) => {
    const { outputDataSourceId, useDataSource, tools, webChart, widgetId, defaultTemplateType, enableDataAction, onInitDragHandler } = props;
    const { dataSource } = (0,_state__WEBPACK_IMPORTED_MODULE_5__.useChartRuntimeState)();
    const useInlineData = (0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.whetherUseInlineDataSource)(webChart, dataSource);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
        useInlineData && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_data_source__WEBPACK_IMPORTED_MODULE_1__.InlineDataSourceManager, { widgetId: widgetId, webChart: webChart, outputDataSourceId: outputDataSourceId, useDataSource: useDataSource, chartLimits: _constants__WEBPACK_IMPORTED_MODULE_4__.ChartLimits }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_inline_data_chart__WEBPACK_IMPORTED_MODULE_2__["default"], { widgetId: widgetId, tools: tools, webChart: webChart, chartLimits: _constants__WEBPACK_IMPORTED_MODULE_4__.ChartLimits, useDataSource: useDataSource, enableDataAction: enableDataAction, onInitDragHandler: onInitDragHandler, defaultTemplateType: defaultTemplateType }))),
        !useInlineData && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_feature_layer_chart__WEBPACK_IMPORTED_MODULE_3__["default"], { widgetId: widgetId, tools: tools, webChart: webChart, chartLimits: _constants__WEBPACK_IMPORTED_MODULE_4__.ChartLimits, useDataSource: useDataSource, outputDataSourceId: outputDataSourceId, enableDataAction: enableDataAction, onInitDragHandler: onInitDragHandler, defaultTemplateType: defaultTemplateType }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/common.ts":
/*!*****************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/common.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertGroupData: () => (/* binding */ convertGroupData),
/* harmony export */   formatFieldValue: () => (/* binding */ formatFieldValue)
/* harmony export */ });
/**
 * Convert to formatted and coloring data for `by-group` mode.
 * @param records
 * @param x
 * @param intl
 */
const convertGroupData = (records, query, intl) => {
    var _a;
    const result = [];
    const x = (_a = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _a === void 0 ? void 0 : _a[0];
    records === null || records === void 0 ? void 0 : records.forEach((record) => {
        const data = record.getData();
        // Null category value will affect the calculation of value axis range,
        // and it will not be displayed on the chart by default, so we filter it out. #7607
        let item = Object.assign({}, data);
        if (x && item[x] == null)
            return;
        //Now only formatted the value of x
        item = formatFieldValue(item, record, x, intl);
        result.push(item);
    });
    return result;
};
/**
 * Format the specific field value by its record.
 * @param item
 * @param record
 * @param field
 */
const formatFieldValue = (item, record, field, intl) => {
    const xValue = record.getFieldValue(field);
    const xFormattedValue = record.getFormattedFieldValue(field, intl);
    if (xFormattedValue !== xValue) {
        item[field] = xFormattedValue;
        item[field + '_original'] = xValue;
    }
    return item;
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/histogram.ts":
/*!********************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/histogram.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");

const getInlineHistogramData = (records, series) => {
    const rawData = records === null || records === void 0 ? void 0 : records.map((record) => record.getData());
    const transformed = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.processInlineHistogramRawData)(rawData, series[0]);
    let statistic = null;
    let bins = [];
    if (transformed.valid) {
        const data = transformed.data;
        bins = data.bins;
        const { mean, stddev, median, min, max } = data;
        statistic = { mean, stddev, median, min, max };
    }
    return { statistic, bins };
};
const convertRecordsToInlineData = (records, series) => {
    const { statistic, bins } = getInlineHistogramData(records, series);
    if (!(bins === null || bins === void 0 ? void 0 : bins.length))
        return;
    const data = Object.assign(Object.assign({}, statistic), { bins });
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertRecordsToInlineData);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/index.ts":
/*!****************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/index.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _serial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serial */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/serial.ts");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/pie.ts");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatter */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/scatter.ts");
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./histogram */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/histogram.ts");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");





/**
 * In order for the series to know which data is to used for which series,
 * we should replace the default statistic field name by its value as defined in the series(serie.y)
 */
const convertRecordsToInlineData = (type, records, query, series, intl) => {
    var _a, _b, _c, _d;
    let rawData = null;
    let inputData = null;
    let processed = true;
    if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_4__.isSerialSeries)(type)) {
        rawData = (_a = (0,_serial__WEBPACK_IMPORTED_MODULE_0__["default"])(records, query, intl)) !== null && _a !== void 0 ? _a : [];
        inputData = { dataItems: rawData };
    }
    else if (type === 'pieSeries') {
        rawData = (_b = (0,_pie__WEBPACK_IMPORTED_MODULE_1__["default"])(records, query, intl)) !== null && _b !== void 0 ? _b : [];
        inputData = { dataItems: rawData };
    }
    else if (type === 'scatterSeries') {
        rawData = (_c = (0,_scatter__WEBPACK_IMPORTED_MODULE_2__["default"])(records, query)) !== null && _c !== void 0 ? _c : [];
        inputData = { dataItems: rawData };
        processed = false;
    }
    else if (type === 'histogramSeries') {
        const data = (0,_histogram__WEBPACK_IMPORTED_MODULE_3__["default"])(records, series);
        rawData = (_d = data === null || data === void 0 ? void 0 : data.bins) !== null && _d !== void 0 ? _d : [];
        inputData = data;
    }
    return [{ inputData, processed }, rawData];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertRecordsToInlineData);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/pie.ts":
/*!**************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/pie.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/common.ts");



const convertRecordsToInlineData = (records, query, intl) => {
    let items = [];
    const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_1__.getCategoryType)(query);
    if (categoryType === _config__WEBPACK_IMPORTED_MODULE_0__.CategoryType.ByGroup) {
        items = (0,_common__WEBPACK_IMPORTED_MODULE_2__.convertGroupData)(records, query, intl);
    }
    else if (categoryType === _config__WEBPACK_IMPORTED_MODULE_0__.CategoryType.ByField) {
        items = records === null || records === void 0 ? void 0 : records.map(record => record.getData());
    }
    return items;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertRecordsToInlineData);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/scatter.ts":
/*!******************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/scatter.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertRecordsToInlineData = (records, query) => {
    var _a;
    const result = [];
    const x = (_a = query === null || query === void 0 ? void 0 : query.outFields) === null || _a === void 0 ? void 0 : _a[0];
    records === null || records === void 0 ? void 0 : records.forEach((record) => {
        const data = record.getData();
        // Null category value will affect the calculation of value axis range,
        // and it will not be displayed on the chart by default, so we filter it out. #7607
        const item = Object.assign({}, data);
        if (x && item[x] == null)
            return;
        result.push(item);
    });
    return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertRecordsToInlineData);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/serial.ts":
/*!*****************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/serial.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/common.ts");



const convertRecordsToInlineData = (records, query, intl) => {
    let items = [];
    const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_1__.getCategoryType)(query);
    if (categoryType === _config__WEBPACK_IMPORTED_MODULE_0__.CategoryType.ByGroup) {
        items = (0,_common__WEBPACK_IMPORTED_MODULE_2__.convertGroupData)(records, query, intl);
    }
    else if (categoryType === _config__WEBPACK_IMPORTED_MODULE_0__.CategoryType.ByField) {
        items = records === null || records === void 0 ? void 0 : records.map(record => record.getData());
    }
    return items;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertRecordsToInlineData);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/index.tsx":
/*!***************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/index.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools */ "./extensions/widgets/common/chart/src/runtime/chart/tools/index.tsx");
/* harmony import */ var _with_inline_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-inline-data */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/with-inline-data.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./extensions/widgets/common/chart/src/runtime/chart/components/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");







const useChartRendered = (dataSourceId, webChart, records) => {
    const status = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[dataSourceId]) === null || _b === void 0 ? void 0 : _b.status; });
    const valid = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_components__WEBPACK_IMPORTED_MODULE_4__.isWebChartValid)(webChart), [webChart]);
    const render = (status && status !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) && valid && !!(records === null || records === void 0 ? void 0 : records.length);
    return { valid, render };
};
const WebInlineDataChart = (props) => {
    var _a, _b, _c;
    const { widgetId, tools: propTools, enableDataAction = true, webChart, chartLimits, useDataSource, defaultTemplateType, onInitDragHandler } = props;
    const { recordsStatus, records } = (0,_state__WEBPACK_IMPORTED_MODULE_5__.useChartRuntimeState)();
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    const showTools = (propTools === null || propTools === void 0 ? void 0 : propTools.cursorEnable) || !!(propTools === null || propTools === void 0 ? void 0 : propTools.filter) || enableDataAction;
    const { valid, render } = useChartRendered(useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId, webChart, records);
    const templateType = ((_a = (0,_utils_common__WEBPACK_IMPORTED_MODULE_6__.getTemplateType)(webChart)) === null || _a === void 0 ? void 0 : _a[1]) || defaultTemplateType || 'column';
    const [messageType, message] = (0,_components__WEBPACK_IMPORTED_MODULE_4__.useWarningMessage)(type, valid, useDataSource, recordsStatus, (_c = (_b = webChart === null || webChart === void 0 ? void 0 : webChart.series) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0);
    const tools = showTools
        ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_tools__WEBPACK_IMPORTED_MODULE_2__["default"], { type: type, tools: propTools, widgetId: widgetId, enableDataAction: enableDataAction }))
        : null;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components__WEBPACK_IMPORTED_MODULE_4__.ChartRoot, { templateType: templateType, messageType: messageType, message: message, showLoading: recordsStatus === 'loading', background: webChart === null || webChart === void 0 ? void 0 : webChart.background, className: 'web-inlie-data-chart', showPlaceholder: !render, tools: tools },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_with_inline_data__WEBPACK_IMPORTED_MODULE_3__["default"], { className: 'web-chart', widgetId: widgetId, webChart: webChart, chartLimits: chartLimits, onInitDragHandler: onInitDragHandler })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebInlineDataChart);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/utils.ts":
/*!**************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/utils.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePieSlices: () => (/* binding */ normalizePieSlices),
/* harmony export */   normalizeSeriesName: () => (/* binding */ normalizeSeriesName)
/* harmony export */ });
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./extensions/widgets/common/chart/src/constants.ts");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");





const normalizeSeriesName = (propsSeries, query, translate) => {
    var _a, _b;
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.getSeriesType)(propsSeries);
    const statisticType = (_b = (_a = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.statisticType;
    const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_3__.getCategoryType)(query);
    let series = propsSeries;
    if (categoryType === _config__WEBPACK_IMPORTED_MODULE_1__.CategoryType.ByField)
        return series;
    if (!statisticType)
        return series;
    if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_4__.isSerialSeries)(type) || type === 'pieSeries') {
        series = propsSeries.map(serie => {
            const alias = serie.name;
            const name = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_3__.normalizeStatisticFieldLabel)(statisticType, alias, translate);
            return serie.set('name', name);
        });
    }
    return series;
};
/**
 * Slice is the original value of the field, which needs to be mapped to the formatted value of the field (the data of the chart rendered)
 * @param propsSeries
 * @param query
 * @param dataItems
 */
const normalizePieSlices = (propsSeries, query, dataItems) => {
    var _a, _b, _c;
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.getSeriesType)(propsSeries);
    if (type !== 'pieSeries')
        return propsSeries;
    const propSlices = (_a = propsSeries === null || propsSeries === void 0 ? void 0 : propsSeries[0]) === null || _a === void 0 ? void 0 : _a.slices;
    if (!propSlices)
        return propsSeries;
    const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_3__.getCategoryType)(query);
    const x = categoryType === _config__WEBPACK_IMPORTED_MODULE_1__.CategoryType.ByField ? _constants__WEBPACK_IMPORTED_MODULE_2__.ByFieldSeriesX : (_b = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _b === void 0 ? void 0 : _b[0];
    const originalx = x + '_original';
    const slices = (_c = propSlices === null || propSlices === void 0 ? void 0 : propSlices.map((slice) => {
        const sliceId = slice.sliceId;
        const matchItem = dataItems === null || dataItems === void 0 ? void 0 : dataItems.find(item => {
            const xValue = (item[originalx] || item[x]);
            if (xValue == null)
                return false;
            return sliceId === xValue || sliceId === (xValue + '');
        });
        if (matchItem) {
            return slice.set('sliceId', matchItem[x]);
        }
        return null;
    })) === null || _c === void 0 ? void 0 : _c.filter(slice => !!slice);
    const series = propsSeries.map(serie => serie.set('slices', slices));
    return series;
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/with-inline-data.tsx":
/*!**************************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/with-inline-data.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _convert_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert-utils */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/convert-utils/index.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translations/default */ "./extensions/widgets/common/chart/src/runtime/translations/default.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./extensions/widgets/common/chart/src/runtime/chart/inline-data-chart/utils.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./extensions/widgets/common/chart/src/runtime/chart/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./extensions/widgets/common/chart/src/runtime/chart/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./extensions/widgets/common/chart/src/constants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const noDataOptions = {
    displayMessageWhenNoData: false
};
const background = [0, 0, 0, 0];
function WithInlineDataChart(props) {
    var _a, _b;
    const { className, widgetId, webChart: propWebChart, chartLimits, onInitDragHandler } = props;
    const { outputDataSource, records, recordsStatus } = (0,_state__WEBPACK_IMPORTED_MODULE_2__.useChartRuntimeState)();
    const dispatch = (0,_state__WEBPACK_IMPORTED_MODULE_2__.useChartRuntimeDispatch)();
    const chartRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const id = widgetId + '-' + ((_a = propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.id) !== null && _a !== void 0 ? _a : 'chart');
    const intl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.useIntl)();
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_5__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_4__.defaultMessages);
    const webMapWebChartRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    let webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => propWebChart.set('version', _constants__WEBPACK_IMPORTED_MODULE_9__.WebChartCurrentVersion).without('dataSource').set('id', id).set('background', background), [id, propWebChart]);
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(propWebChart.series);
    const query = (_b = propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.dataSource) === null || _b === void 0 ? void 0 : _b.query;
    const propSeries = propWebChart === null || propWebChart === void 0 ? void 0 : propWebChart.series;
    const [inlineData, dataItems] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_convert_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(type, records, query, propSeries, intl), [type, records, query, propSeries, intl]);
    let series = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_utils__WEBPACK_IMPORTED_MODULE_8__.normalizeSeries)(propSeries, query), [propSeries, query]);
    series = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.normalizePieSlices)(series, query, dataItems), [dataItems, query, series]);
    series = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => (0,_utils__WEBPACK_IMPORTED_MODULE_6__.normalizeSeriesName)(series, query, translate), [series, query, translate]);
    webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => webChart.set('series', series), [webChart, series]);
    const webMapWebChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        // Ensure that the chart is rendered after the data is loaded
        if (recordsStatus !== 'loaded') {
            return webMapWebChartRef.current;
        }
        else {
            webMapWebChartRef.current = webChart;
            return webChart;
        }
    }, [recordsStatus, webChart]);
    const hanldleCreated = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((chart) => {
        chartRef.current = chart;
        dispatch({ type: 'SET_CHART', value: chart });
    }, [dispatch]);
    const [selectionData, handleSelectionChange] = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.useSelection)(widgetId, outputDataSource, propSeries);
    const chartWillRender = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((props) => __awaiter(this, void 0, void 0, function* () {
        var _c, _d;
        const { chartConfig, slices: usedSlices } = props;
        let slices = (_d = (_c = chartConfig === null || chartConfig === void 0 ? void 0 : chartConfig.series) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.slices;
        let alteredConfig = chartConfig;
        if (slices === null || slices === void 0 ? void 0 : slices.length) {
            slices = slices.map((slice) => {
                var _a;
                const id = slice.sliceId;
                const usedSliceId = (_a = usedSlices === null || usedSlices === void 0 ? void 0 : usedSlices.find((usedSlice) => usedSlice.originalLabel === id)) === null || _a === void 0 ? void 0 : _a.sliceId;
                if (usedSliceId) {
                    return Object.assign(Object.assign({}, slice), { sliceId: usedSliceId });
                }
                return slice;
            });
            alteredConfig = Object.assign(Object.assign({}, chartConfig), { series: [Object.assign(Object.assign({}, chartConfig.series[0]), { slices })] });
        }
        return alteredConfig;
    }), []);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEffectOnce(() => {
        onInitDragHandler === null || onInitDragHandler === void 0 ? void 0 : onInitDragHandler(null, null, () => {
            if (!chartRef.current)
                return;
            chartRef.current.refresh();
        });
    });
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, webMapWebChart && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components__WEBPACK_IMPORTED_MODULE_7__.ChartComponents, { ref: hanldleCreated, className: className, webMapWebChart: webMapWebChart, inlineData: inlineData, chartWillRender: chartWillRender, noDataOptions: noDataOptions, hideLoaderAnimation: true, chartLimits: chartLimits, selectionData: selectionData, arcgisChartsSelectionComplete: handleSelectionChange })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithInlineDataChart);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/tools/index.tsx":
/*!***************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/tools/index.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _selection_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection-zoom */ "./extensions/widgets/common/chart/src/runtime/chart/tools/selection-zoom.tsx");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/** @jsx jsx */





const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .tool-dividing-line {
    height: 16px;
    width: 1px;
    background-color: var(--light-400);
  }
`;
const Tools = (props) => {
    var _a, _b, _c;
    const { type = 'barSeries', className, widgetId, tools, enableDataAction } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const widgetLabel = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets) === null || _a === void 0 ? void 0 : _a[widgetId]) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : 'Chart';
    const dataActionLabel = translate('outputStatistics', { name: widgetLabel });
    const { outputDataSource, chart } = (0,_state__WEBPACK_IMPORTED_MODULE_2__.useChartRuntimeState)();
    const cursorEnable = tools === null || tools === void 0 ? void 0 : tools.cursorEnable;
    const selectedIds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a; return (_a = state === null || state === void 0 ? void 0 : state.dataSourcesInfo[outputDataSource === null || outputDataSource === void 0 ? void 0 : outputDataSource.id]) === null || _a === void 0 ? void 0 : _a.selectedIds; });
    const actionDataSets = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return outputDataSource ? [{ name: dataActionLabel, type: 'selected', dataSource: outputDataSource, records: outputDataSource === null || outputDataSource === void 0 ? void 0 : outputDataSource.getSelectedRecords() }] : [];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataActionLabel, outputDataSource, selectedIds]);
    const handleRangeModeChange = (mode) => {
        if (mode === 'selection') {
            chart === null || chart === void 0 ? void 0 : chart.setActionMode(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__.ActionModes.MultiSelectionWithCtrlKey);
        }
        else if (mode === 'zoom') {
            chart === null || chart === void 0 ? void 0 : chart.setActionMode(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__.ActionModes.Zoom);
        }
    };
    const handleClearSelection = () => {
        chart === null || chart === void 0 ? void 0 : chart.clearSelection();
    };
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (cursorEnable) {
            chart === null || chart === void 0 ? void 0 : chart.setActionMode(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__.ActionModes.MultiSelectionWithCtrlKey);
        }
        else {
            chart === null || chart === void 0 ? void 0 : chart.setActionMode(jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_4__.ActionModes.None);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cursorEnable, chart]);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('chart-tool-bar w-100 d-flex align-items-center justify-content-end px-2 pt-2', className), role: 'group', "aria-label": translate('tools') },
        cursorEnable && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_selection_zoom__WEBPACK_IMPORTED_MODULE_3__.SelectionZoom, { type: type, className: 'mr-1', onModeChange: handleRangeModeChange, onClearSelection: handleClearSelection })),
        enableDataAction && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'tool-dividing-line mx-1' }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DataActionList, { widgetId: widgetId, buttonType: 'tertiary', listStyle: jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DataActionListStyle.Dropdown, dataSets: actionDataSets })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tools);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/tools/range-cursor-mode.tsx":
/*!***************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/tools/range-cursor-mode.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RangeCursorMode: () => (/* binding */ RangeCursorMode)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_zoom_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/editor/zoom-in */ "./jimu-icons/outlined/editor/zoom-in.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_gis_select_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/gis/select-rectangle */ "./jimu-icons/outlined/gis/select-rectangle.tsx");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");





const RangeCursorMode = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
    const [mode, setMode] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState('selection');
    const { type = 'barSeries', className, onChange } = props;
    const handleSelectionClick = () => {
        if (type === 'pieSeries')
            return;
        onChange('selection');
        setMode('selection');
    };
    const handleZoomClick = () => {
        onChange('zoom');
        setMode('zoom');
    };
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('range-cursor-mode', className) },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { title: translate('SelectLabel') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', className: "mr-1", icon: true, type: 'tertiary', "aria-label": translate('SelectLabel'), onClick: handleSelectionClick, active: mode === 'selection' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_gis_select_rectangle__WEBPACK_IMPORTED_MODULE_3__.SelectRectangleOutlined, null))),
        (0,_utils_default__WEBPACK_IMPORTED_MODULE_4__.isXYChart)(type) && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, { title: translate('ZoomLabel') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: 'sm', icon: true, type: 'tertiary', "aria-label": translate('ZoomLabel'), onClick: handleZoomClick, active: mode === 'zoom' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_zoom_in__WEBPACK_IMPORTED_MODULE_1__.ZoomInOutlined, null))));
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/tools/selection-zoom.tsx":
/*!************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/tools/selection-zoom.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionZoom: () => (/* binding */ SelectionZoom)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _range_cursor_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range-cursor-mode */ "./extensions/widgets/common/chart/src/runtime/chart/tools/range-cursor-mode.tsx");
/* harmony import */ var jimu_icons_outlined_editor_trash_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/trash-check */ "./jimu-icons/outlined/editor/trash-check.tsx");




const SelectionZoom = (props) => {
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const { type, className, onModeChange, onClearSelection } = props;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('selection-zoom d-flex', className) },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_range_cursor_mode__WEBPACK_IMPORTED_MODULE_2__.RangeCursorMode, { type: type, className: "mr-1", onChange: onModeChange }),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, { title: translate('clearSelection') },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: 'sm', icon: true, "aria-label": translate('clearSelection'), type: 'tertiary', onClick: onClearSelection },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_trash_check__WEBPACK_IMPORTED_MODULE_3__.TrashCheckOutlined, null))));
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/utils/index.ts":
/*!**************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/utils/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChartLimits: () => (/* binding */ getChartLimits),
/* harmony export */   getMinSafeValue: () => (/* binding */ getMinSafeValue),
/* harmony export */   normalizeSeries: () => (/* reexport safe */ _normalize_series__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   useSelection: () => (/* reexport safe */ _use_selection__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _normalize_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalize-series */ "./extensions/widgets/common/chart/src/runtime/chart/utils/normalize-series.ts");
/* harmony import */ var _use_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-selection */ "./extensions/widgets/common/chart/src/runtime/chart/utils/use-selection.ts");



const getMinSafeValue = (v1, v2) => {
    if (v1 == null && v2 == null)
        return;
    if (v1 == null && v2 != null)
        return v2;
    if (v1 != null && v2 == null)
        return v1;
    return Math.min(v1, v2);
};
const getChartLimits = (series, defaultChartLimits, num) => {
    const chartLimits = {};
    const seriesLength = series === null || series === void 0 ? void 0 : series.length;
    if (!seriesLength)
        return defaultChartLimits;
    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.getSeriesType)(series);
    let behaviorAfterLimit = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.LimitBehavior.Reject;
    if (seriesType === 'scatterSeries') {
        chartLimits.maxScatterPointsBeforeAggregation = defaultChartLimits.maxScatterPointsBeforeAggregation;
        chartLimits.maxScatterPointsAfterAggregation = defaultChartLimits.maxScatterPointsAfterAggregation;
    }
    let limitKey = '';
    let limitNum = -1;
    if (seriesType === 'barSeries') {
        chartLimits.maxBarChartSeriesCount = defaultChartLimits.maxBarChartSeriesCount;
        if (series.length === 1) {
            limitKey = 'maxBarUniqueSeriesCountTotal';
        }
        else if (series.length === 2) {
            chartLimits.maxBarTwoSeriesCountTotal = defaultChartLimits.maxBarTwoSeriesCountTotal;
            limitKey = 'maxBarTwoSeriesCountPerSeries';
        }
        else if (series.length > 2) {
            chartLimits.maxBarThreePlusSeriesCountTotal = defaultChartLimits.maxBarThreePlusSeriesCountTotal;
            limitKey = 'maxBarThreePlusSeriesCountPerSeries';
        }
    }
    else if (seriesType === 'lineSeries') {
        chartLimits.maxLineChartSeriesCount = defaultChartLimits.maxLineChartSeriesCount;
        if (series.length === 1) {
            limitKey = 'maxLineUniqueSeriesCountTotal';
        }
        else if (series.length === 2) {
            chartLimits.maxLineTwoSeriesCountTotal = defaultChartLimits.maxLineTwoSeriesCountTotal;
            limitKey = 'maxLineTwoSeriesCountPerSeries';
        }
        else if (series.length > 2) {
            chartLimits.maxLineThreePlusSeriesCountTotal = defaultChartLimits.maxLineThreePlusSeriesCountTotal;
            limitKey = 'maxLineThreePlusSeriesCountPerSeries';
        }
    }
    else if (seriesType === 'pieSeries') {
        limitKey = 'maxPieChartSliceCountTotal';
    }
    const defaultLimitNum = defaultChartLimits[limitKey];
    if (num && num <= defaultLimitNum) {
        limitNum = num;
        behaviorAfterLimit = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_0__.LimitBehavior.RenderUpToTheLimit;
    }
    else {
        limitNum = defaultLimitNum;
    }
    if (limitKey) {
        chartLimits[limitKey] = limitNum;
    }
    chartLimits.behaviorAfterLimit = behaviorAfterLimit;
    return chartLimits;
};



/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/utils/normalize-series.ts":
/*!*************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/utils/normalize-series.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");




const getSingleQueryForByGroup = (serie, queries) => {
    const y = serie.y;
    const outStatistics = queries.outStatistics.filter((s) => s.outStatisticFieldName === y);
    const { groupByFieldsForStatistics, orderByFields, pageSize } = queries;
    const query = { groupByFieldsForStatistics, outStatistics, orderByFields, num: pageSize };
    return serie.set('query', query);
};
const getSingleQueryForNoAggregation = (serie, queries) => {
    const { orderByFields, pageSize } = queries;
    const query = { orderByFields, num: pageSize };
    return serie.set('query', query);
};
const getSingleQueryForSplitBy = (serie, queries) => {
    var _a;
    const where = serie.query.where;
    const splitByValue = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__.getSplitByValue)({ where, normalize: true });
    if ((_a = queries.outFields) === null || _a === void 0 ? void 0 : _a.length) { //no aggregation
        const { orderByFields, pageSize } = queries;
        const query = { where, orderByFields, num: pageSize };
        return serie.set('query', query);
    }
    else {
        const onStatisticField = queries.outStatistics[0].onStatisticField;
        const statisticType = queries.outStatistics[0].statisticType;
        const outStatisticFieldName = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_3__.getSplitOutStatisticName)(onStatisticField, statisticType, splitByValue);
        const outStatistics = [Object.assign(Object.assign({}, queries.outStatistics[0]), { outStatisticFieldName })];
        const { groupByFieldsForStatistics, orderByFields, pageSize } = queries;
        const query = { where, groupByFieldsForStatistics, outStatistics, orderByFields, num: pageSize };
        return serie.set('query', query).set('y', outStatisticFieldName);
    }
};
const normalizeSeries = (series, query) => {
    let callback = null;
    const type = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__.getSeriesType)(series);
    const useSplitBy = !!query.where;
    if (useSplitBy) {
        callback = getSingleQueryForSplitBy;
    }
    else {
        if ((0,_utils_default__WEBPACK_IMPORTED_MODULE_0__.isSerialSeries)(type) || type === 'pieSeries') {
            const outFields = query === null || query === void 0 ? void 0 : query.outFields;
            if (outFields === null || outFields === void 0 ? void 0 : outFields.length) { //no aggregation
                callback = getSingleQueryForNoAggregation;
            }
            else {
                const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_3__.getCategoryType)(query);
                if (categoryType === _config__WEBPACK_IMPORTED_MODULE_1__.CategoryType.ByGroup) {
                    callback = getSingleQueryForByGroup;
                }
            }
        }
    }
    if (callback) {
        return series === null || series === void 0 ? void 0 : series.map((serie) => callback(serie, query));
    }
    return series;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizeSeries);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/utils/use-selection.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/utils/use-selection.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");


const isRecordMatch = (rec1, rec2) => {
    return Object.keys(rec2).every(key => rec1[key] === rec2[key]);
};
/**
 * Match the data in the records based on the selected data. If the selected data completely matches the data in some of the records, return them.
 * Note1: The number of fields in record is different from select item. For example, there is `objectid` in record but not in select item.
 * Note2: There is a potential problem with `no aggregation` in this matching pair. There may be two records whose fields (non-objectid) and values are exactly the same.
 */
const getMatchedRecords = (records, selectionItems) => {
    return records.filter(record => {
        const data = record.getData();
        return selectionItems.some(item => isRecordMatch(data, item));
    });
};
const getNormalizedSelectionItems = (selectionItems, splitByField) => {
    if (!splitByField)
        return selectionItems;
    return selectionItems.map((item) => {
        const data = Object.assign({}, item);
        delete data[splitByField];
        return data;
    });
};
/**
 * Get selection items by the selected id from data source.
 */
const getSelectedItems = (selectedIds, records) => {
    const items = selectedIds.map((id) => {
        const record = records.find((record) => record.getId() === id);
        let data = null;
        if (record) {
            data = record.getData();
            data = Object.assign({}, data);
        }
        return data;
    }).filter((item) => !!item);
    return items;
};
/**
 * Keep the selection of chart and output data source, publish message when selection changes.
 * @param widgetId
 * @param outputDataSource
 * @param dataItems
 * @param seriesLength
 */
const useSelection = (widgetId, outputDataSource, series) => {
    const preSelectedIdsRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef();
    const handleSelectionChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((e) => {
        var _a, _b;
        const sourceRecords = outputDataSource === null || outputDataSource === void 0 ? void 0 : outputDataSource.getSourceRecords();
        if (!(sourceRecords === null || sourceRecords === void 0 ? void 0 : sourceRecords.length))
            return;
        const selectionSource = e.detail.selectionSource;
        // Only trigger selection change message if selection source is from the user operation
        const selectionByUser = selectionSource === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.SelectionSource.SelectionByClick ||
            selectionSource === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.SelectionSource.SelectionByRange ||
            selectionSource === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.SelectionSource.ClearSelection;
        if (!selectionByUser)
            return;
        const where = (_a = series[0].query) === null || _a === void 0 ? void 0 : _a.where;
        const splitByField = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSplitByField)(where);
        const selectionItems = getNormalizedSelectionItems((_b = e.detail.selectionItems) !== null && _b !== void 0 ? _b : [], splitByField);
        const selectedRecords = getMatchedRecords(sourceRecords, selectionItems);
        const selectedIds = selectedRecords.map(record => record.getId());
        preSelectedIdsRef.current = selectedIds;
        //Publish records selection change message
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(widgetId, selectedRecords));
        outputDataSource.selectRecordsByIds(selectedIds);
    });
    const originalSelectedIds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.useSelector((state) => { var _a, _b; return (_b = (_a = state.dataSourcesInfo) === null || _a === void 0 ? void 0 : _a[outputDataSource === null || outputDataSource === void 0 ? void 0 : outputDataSource.id]) === null || _b === void 0 ? void 0 : _b.selectedIds; });
    const [selectionIndexes, setSelectionIndexes] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState();
    const getSelectionItems = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((selectedIds) => {
        const sourceRecords = outputDataSource === null || outputDataSource === void 0 ? void 0 : outputDataSource.getSourceRecords();
        if (!(sourceRecords === null || sourceRecords === void 0 ? void 0 : sourceRecords.length))
            return;
        const items = getSelectedItems(selectedIds !== null && selectedIds !== void 0 ? selectedIds : [], sourceRecords);
        return items;
    });
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (!originalSelectedIds)
            return;
        const mutableSelectionIds = originalSelectedIds.asMutable();
        // if the selected ids is same as the current selected ids, just return.
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.isDeepEqual(mutableSelectionIds, preSelectedIdsRef.current))
            return;
        preSelectedIdsRef.current = mutableSelectionIds;
        const selectionItems = getSelectionItems(mutableSelectionIds);
        setSelectionIndexes(selectionItems);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [originalSelectedIds]);
    const selectionData = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => ({ selectionItems: selectionIndexes }), [selectionIndexes]);
    return [selectionData, handleSelectionChange];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSelection);


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/state/index.tsx":
/*!*********************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/state/index.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartRuntimeStateProvider: () => (/* binding */ ChartRuntimeStateProvider),
/* harmony export */   useChartRuntimeDispatch: () => (/* binding */ useChartRuntimeDispatch),
/* harmony export */   useChartRuntimeState: () => (/* binding */ useChartRuntimeState)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const initialState = {
    chart: null,
    filter: null,
    dataSource: null,
    outputDataSource: null,
    recordsStatus: 'none',
    queryVersion: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CHART':
            return Object.assign(Object.assign({}, state), { chart: action.value });
        case 'SET_FILTER':
            return Object.assign(Object.assign({}, state), { filter: action.value });
        case 'SET_DATA_SOURCE':
            return Object.assign(Object.assign({}, state), { dataSource: action.value });
        case 'SET_OUTPUT_DATA_SOURCE':
            return Object.assign(Object.assign({}, state), { outputDataSource: action.value });
        case 'SET_RECORDS':
            return Object.assign(Object.assign({}, state), { records: action.value });
        case 'SET_RECORDS_STATUS':
            return Object.assign(Object.assign({}, state), { recordsStatus: action.value });
        case 'SET_QUERY_VERSION':
            return Object.assign(Object.assign({}, state), { queryVersion: action.value });
        default:
            return state;
    }
};
const ChartRuntimeStateContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext(undefined);
const ChartRuntimeDispatchContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext(undefined);
const ChartRuntimeStateProvider = (props) => {
    const { defaultState, children } = props;
    const [state, dispatch] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useReducer(reducer, defaultState || initialState);
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ChartRuntimeStateContext.Provider, { value: state },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(ChartRuntimeDispatchContext.Provider, { value: dispatch }, children));
};
const useChartRuntimeState = () => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(ChartRuntimeStateContext);
};
const useChartRuntimeDispatch = () => {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useContext(ChartRuntimeDispatchContext);
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Chart',
    bar1SeriesLimitation: 'Bar or column charts with one series are limited to 10,000 bars in total. Please filter or re-aggregate your data and try again.',
    bar2SeriesLimitation: 'Bar or column charts with two series are limited to 2,000 bars, or 1,000 bars per series. Please filter or re-aggregate your data and try again.',
    bar3SeriesLimitation: 'Bar or column charts with three or more series are limited to 2,000 bars, or 100 bars per series. Please filter or re-aggregate your data and try again.',
    lineLimitation: 'Line or area charts are limited to 10,000 value markers in total and maximum of 100 series. Please filter or re-aggregate your data and try again.',
    pieLimitation: 'Cannot render, too many categories. Pie chart is limited to 300 categories as the maximum.',
    dataEmptyTip: 'No data found.'
});


/***/ }),

/***/ "./extensions/widgets/common/chart/src/utils/common/index.ts":
/*!*******************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/utils/common/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcgisChartsSecretKeys: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.ArcgisChartsSecretKeys),
/* harmony export */   DefaultTimeBinningProps: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.DefaultTimeBinningProps),
/* harmony export */   applySeriesColors: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.applySeriesColors),
/* harmony export */   capitalizeString: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.capitalizeString),
/* harmony export */   createDefaultQuery: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.createDefaultQuery),
/* harmony export */   createDefaultSerie: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.createDefaultSerie),
/* harmony export */   createRuntimeSplitBySeries: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.createRuntimeSplitBySeries),
/* harmony export */   createSplitBySerie: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.createSplitBySerie),
/* harmony export */   createSplitBySerieFromSeries: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.createSplitBySerieFromSeries),
/* harmony export */   getCategoryField: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getCategoryField),
/* harmony export */   getCategoryFieldType: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getCategoryFieldType),
/* harmony export */   getCategoryType: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getCategoryType),
/* harmony export */   getDataSourceSchema: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSchema),
/* harmony export */   getDataSourceSchemaForSplitBy: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSchemaForSplitBy),
/* harmony export */   getDefaultValueFormat: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueFormat),
/* harmony export */   getFieldSchema: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getFieldSchema),
/* harmony export */   getFieldType: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getFieldType),
/* harmony export */   getFieldUniqueValuesParams: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getFieldUniqueValuesParams),
/* harmony export */   getFieldsSchema: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getFieldsSchema),
/* harmony export */   getHistogramFields: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getHistogramFields),
/* harmony export */   getJimuFieldSchema: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getJimuFieldSchema),
/* harmony export */   getObjectIdField: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getObjectIdField),
/* harmony export */   getOutStatisticAlias: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getOutStatisticAlias),
/* harmony export */   getOutStatisticName: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getOutStatisticName),
/* harmony export */   getScatterPlotFields: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getScatterPlotFields),
/* harmony export */   getSeriaLlineShowArea: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getSeriaLlineShowArea),
/* harmony export */   getSeriaLlineSmoothed: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getSeriaLlineSmoothed),
/* harmony export */   getSerialFields: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getSerialFields),
/* harmony export */   getSerialSplitByFields: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.getSerialSplitByFields),
/* harmony export */   getSerialStackedType: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getSerialStackedType),
/* harmony export */   getSplitByFieldValues: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getSplitByFieldValues),
/* harmony export */   getSplitOutStatisticAlias: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getSplitOutStatisticAlias),
/* harmony export */   getSplitOutStatisticName: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getSplitOutStatisticName),
/* harmony export */   getStatisticsType: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getStatisticsType),
/* harmony export */   getTemplateType: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getTemplateType),
/* harmony export */   getUsedSeriesProps: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.getUsedSeriesProps),
/* harmony export */   isEmptyStringField: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.isEmptyStringField),
/* harmony export */   normalizeStatisticFieldLabel: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.normalizeStatisticFieldLabel),
/* harmony export */   parseOrderByField: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.parseOrderByField),
/* harmony export */   whetherUseIdFieldForNonCount: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.whetherUseIdFieldForNonCount),
/* harmony export */   whetherUseInlineDataSource: () => (/* reexport safe */ _serial__WEBPACK_IMPORTED_MODULE_0__.whetherUseInlineDataSource)
/* harmony export */ });
/* harmony import */ var _serial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./extensions/widgets/common/chart/src/utils/common/schema.ts");




/***/ }),

/***/ "./extensions/widgets/common/chart/src/utils/common/schema.ts":
/*!********************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/utils/common/schema.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataSourceSchema: () => (/* binding */ getDataSourceSchema),
/* harmony export */   getDataSourceSchemaForSplitBy: () => (/* binding */ getDataSourceSchemaForSplitBy),
/* harmony export */   getHistogramFields: () => (/* binding */ getHistogramFields),
/* harmony export */   getJimuFieldSchema: () => (/* binding */ getJimuFieldSchema),
/* harmony export */   getScatterPlotFields: () => (/* binding */ getScatterPlotFields),
/* harmony export */   getSerialFields: () => (/* binding */ getSerialFields),
/* harmony export */   getSerialSplitByFields: () => (/* binding */ getSerialSplitByFields)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./extensions/widgets/common/chart/src/constants.ts");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");
/* harmony import */ var _serial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");





const getCleanFieldSchema = (field, type, alias, originFields) => {
    const jimuName = field;
    const name = field;
    alias = alias !== null && alias !== void 0 ? alias : field;
    let esriType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.String;
    let format = null;
    if (type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number) {
        format = {
            digitSeparator: true,
            places: 3
        };
        esriType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Double;
    }
    const schema = { jimuName, type, esriType, name, alias, format };
    if (originFields) {
        schema.originFields = originFields;
    }
    return schema;
};
const getHistogramFields = (query, dataSourceId) => {
    var _a;
    let fields = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const originField = (_a = query === null || query === void 0 ? void 0 : query.outFields) === null || _a === void 0 ? void 0 : _a[0];
    if (originField) {
        const fieldInfos = [{
                name: _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramMinValueField,
                alias: _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramMinValueFieldAlias
            }, {
                name: _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramMaxValueField,
                alias: _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramMaxValueFieldAlias
            }, {
                name: _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramCountField,
                alias: _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramCountFieldAlias
            }];
        fieldInfos.forEach(({ name, alias }) => {
            var _a, _b;
            const jimuName = name;
            const originFields = [originField];
            const type = jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number;
            const esriType = name === _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramCountField ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Integer : jimu_core__WEBPACK_IMPORTED_MODULE_0__.EsriFieldType.Double;
            const originFieldSchema = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getFieldSchema)(originField, dataSourceId);
            const digitSeparator = (_b = (_a = originFieldSchema === null || originFieldSchema === void 0 ? void 0 : originFieldSchema.format) === null || _a === void 0 ? void 0 : _a.digitSeparator) !== null && _b !== void 0 ? _b : true;
            const places = name === _constants__WEBPACK_IMPORTED_MODULE_1__.HistogramCountField ? 0 : 3;
            const format = Object.assign(Object.assign({}, originFieldSchema === null || originFieldSchema === void 0 ? void 0 : originFieldSchema.format), { digitSeparator, places });
            const fieldSchema = { jimuName, type, esriType, name, alias, originFields, format };
            fields = fields.set(name, fieldSchema);
        });
    }
    return fields;
};
const getJimuFieldSchema = (field, dataSourceId, jimuName) => {
    let schema = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getFieldSchema)(field, dataSourceId);
    jimuName = jimuName || field;
    schema = schema.set('jimuName', jimuName).set('name', jimuName);
    schema = schema.set('originFields', [field]);
    return schema;
};
const getSchemaForHistogram = (query, dataSourceId) => {
    const fields = getHistogramFields(query, dataSourceId);
    const schema = {
        fields: fields.asMutable({ deep: true })
    };
    return schema;
};
const getScatterPlotFields = (query, dataSourceId) => {
    let fields = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const outFields = query === null || query === void 0 ? void 0 : query.outFields;
    if (outFields) {
        outFields.forEach((outField) => {
            const schema = getJimuFieldSchema(outField, dataSourceId);
            fields = fields.set(outField, schema);
        });
    }
    return fields;
};
const getSchemaForScatterPlot = (query, dataSourceId) => {
    const fields = getScatterPlotFields(query, dataSourceId);
    const schema = {
        fields: fields.asMutable({ deep: true })
    };
    return schema;
};
const getSerialSplitByFields = (query, dataSourceId, series, splitByValues) => {
    var _a, _b, _c, _d;
    let fields = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    const groupByFieldsForStatistics = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics;
    groupByFieldsForStatistics.forEach((field) => {
        if (field) {
            const schema = getJimuFieldSchema(field, dataSourceId);
            fields = fields.set(field, schema);
        }
    });
    const outFields = query === null || query === void 0 ? void 0 : query.outFields;
    const outStatistics = query === null || query === void 0 ? void 0 : query.outStatistics;
    const splitByField = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_2__.getSplitByField)(query === null || query === void 0 ? void 0 : query.where, true);
    const seriesSplitByValues = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getSplitByFieldValues)(series).asMutable({ deep: true });
    const uniqueSplitByValues = Array.from(new Set(seriesSplitByValues.concat(splitByValues !== null && splitByValues !== void 0 ? splitByValues : [])));
    let onStatisticField = '';
    let statisticType = 'no_aggregation';
    if (groupByFieldsForStatistics && outFields) { //no aggregation
        onStatisticField = outFields[0];
    }
    else if (groupByFieldsForStatistics && outStatistics) { //by group
        onStatisticField = (_a = outStatistics[0]) === null || _a === void 0 ? void 0 : _a.onStatisticField;
        statisticType = (_b = outStatistics[0]) === null || _b === void 0 ? void 0 : _b.statisticType;
    }
    const onStatisticFieldAlias = (_d = (_c = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getFieldSchema)(onStatisticField, dataSourceId)) === null || _c === void 0 ? void 0 : _c.alias) !== null && _d !== void 0 ? _d : onStatisticField;
    uniqueSplitByValues.forEach((splitByValue) => {
        var _a;
        const jimuFieldName = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getSplitOutStatisticName)(onStatisticFieldAlias, statisticType, splitByValue);
        const jimuFieldAlias = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getSplitOutStatisticAlias)(onStatisticField, statisticType, splitByValue);
        const originField = onStatisticField;
        if (originField) {
            let schema = getJimuFieldSchema(originField, dataSourceId, jimuFieldName);
            schema = schema.set('alias', jimuFieldAlias);
            schema = schema.set('originFields', schema.originFields.concat(splitByField));
            let format = schema.format;
            if (statisticType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.StatisticType.Count) {
                format = format || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                format = format.set('places', 0);
            }
            else if (statisticType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.StatisticType.Avg) {
                if (typeof ((_a = schema.format) === null || _a === void 0 ? void 0 : _a.places) === 'undefined') {
                    format = format || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                    format = format.set('places', 3);
                }
            }
            if (format) {
                schema = schema.set('format', format);
            }
            fields = fields.set(jimuFieldName, schema);
        }
    });
    return fields;
};
const getSerialFields = (query, dataSourceId) => {
    var _a, _b;
    const groupByFieldsForStatistics = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics;
    const outFields = query === null || query === void 0 ? void 0 : query.outFields;
    const outStatistics = query === null || query === void 0 ? void 0 : query.outStatistics;
    let fields = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
    if (groupByFieldsForStatistics && outFields) { //no aggregation
        groupByFieldsForStatistics.concat(outFields).forEach((outField) => {
            if (outField) {
                const schema = getJimuFieldSchema(outField, dataSourceId);
                fields = fields.set(outField, schema);
            }
        });
    }
    else if (groupByFieldsForStatistics && outStatistics) { //by group
        const categoryField = groupByFieldsForStatistics[0];
        if (categoryField) {
            const schema = getJimuFieldSchema(categoryField, dataSourceId);
            fields = fields.set(categoryField, schema);
        }
        outStatistics.forEach((statistic) => {
            var _a, _b, _c;
            const originField = statistic.onStatisticField;
            if (originField) {
                const statisticType = statistic.statisticType;
                const jimuFieldName = statistic.outStatisticFieldName;
                const fieldAlias = (_b = (_a = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getFieldSchema)(originField, dataSourceId)) === null || _a === void 0 ? void 0 : _a.alias) !== null && _b !== void 0 ? _b : originField;
                const jimuFieldAlias = (0,_serial__WEBPACK_IMPORTED_MODULE_4__.getOutStatisticAlias)(fieldAlias, statisticType);
                let schema = getJimuFieldSchema(originField, dataSourceId, jimuFieldName);
                schema = schema.set('alias', jimuFieldAlias);
                // defining formats for the schema of output data source https://devtopia.esri.com/Beijing-R-D-Center/ExperienceBuilder/issues/8902
                let format = schema.format;
                if (statisticType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.StatisticType.Count) {
                    format = format || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                    format = format.set('places', 0);
                }
                else if (statisticType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.StatisticType.Avg) {
                    if (typeof ((_c = schema.format) === null || _c === void 0 ? void 0 : _c.places) === 'undefined') {
                        format = format || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
                        format = format.set('places', 3);
                    }
                }
                if (format) {
                    schema = schema.set('format', format);
                }
                fields = fields.set(jimuFieldName, schema);
            }
        });
    }
    else if (!groupByFieldsForStatistics && outStatistics) { //by field
        const originFields = (_b = (_a = outStatistics.map((outStatistic) => outStatistic.onStatisticField)).asMutable) === null || _b === void 0 ? void 0 : _b.call(_a, { deep: true });
        const xField = _constants__WEBPACK_IMPORTED_MODULE_1__.ByFieldSeriesX;
        const yField = _constants__WEBPACK_IMPORTED_MODULE_1__.ByFieldSeriesY;
        const xFieldSchema = getCleanFieldSchema(xField, jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String, _constants__WEBPACK_IMPORTED_MODULE_1__.ByFieldSeriesXAlias, originFields);
        const yFieldSchema = getCleanFieldSchema(yField, jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number, _constants__WEBPACK_IMPORTED_MODULE_1__.ByFieldSeriesYAlias, originFields);
        fields = fields.set(xField, xFieldSchema);
        fields = fields.set(yField, yFieldSchema);
    }
    return fields;
};
const getSchemaForSerial = (query, dataSourceId) => {
    const fields = getSerialFields(query, dataSourceId);
    const schema = {
        fields: fields.asMutable({ deep: true })
    };
    return schema;
};
const getIdSchema = (datsSource) => {
    const idField = datsSource.getIdField();
    const idFieldSchema = datsSource.getDataSourceJson().schema.fields[idField];
    return idFieldSchema === null || idFieldSchema === void 0 ? void 0 : idFieldSchema.asMutable({ deep: true });
};
const getDataSourceSchema = (dataSource, originalDsId, query, seriesType) => {
    const idFieldSchema = getIdSchema(dataSource);
    let schema = null;
    if (seriesType === 'histogramSeries') {
        schema = getSchemaForHistogram(query, originalDsId);
    }
    else if ((0,_default__WEBPACK_IMPORTED_MODULE_3__.isSerialSeries)(seriesType) || seriesType === 'pieSeries') {
        schema = getSchemaForSerial(query, originalDsId);
    }
    else if (seriesType === 'scatterSeries') {
        schema = getSchemaForScatterPlot(query, originalDsId);
    }
    schema = {
        idField: idFieldSchema.jimuName,
        fields: Object.assign({ [idFieldSchema.jimuName]: idFieldSchema }, schema.fields)
    };
    return schema;
};
const getDataSourceSchemaForSplitBy = (dataSource, originalDsId, query, propSeries, splitByValues) => {
    const idFieldSchema = getIdSchema(dataSource);
    const series = propSeries.filter((serie) => serie.id !== _constants__WEBPACK_IMPORTED_MODULE_1__.SplitByOtherSeriesValue);
    const fields = getSerialSplitByFields(query, originalDsId, series, splitByValues);
    const schema = {
        idField: idFieldSchema.jimuName,
        fields: Object.assign({ [idFieldSchema.jimuName]: idFieldSchema }, fields.asMutable({ deep: true }))
    };
    return schema;
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/utils/common/serial.ts":
/*!********************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/utils/common/serial.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcgisChartsSecretKeys: () => (/* binding */ ArcgisChartsSecretKeys),
/* harmony export */   DefaultTimeBinningProps: () => (/* binding */ DefaultTimeBinningProps),
/* harmony export */   applySeriesColors: () => (/* binding */ applySeriesColors),
/* harmony export */   capitalizeString: () => (/* binding */ capitalizeString),
/* harmony export */   createDefaultQuery: () => (/* binding */ createDefaultQuery),
/* harmony export */   createDefaultSerie: () => (/* binding */ createDefaultSerie),
/* harmony export */   createRuntimeSplitBySeries: () => (/* binding */ createRuntimeSplitBySeries),
/* harmony export */   createSplitBySerie: () => (/* binding */ createSplitBySerie),
/* harmony export */   createSplitBySerieFromSeries: () => (/* binding */ createSplitBySerieFromSeries),
/* harmony export */   getCategoryField: () => (/* binding */ getCategoryField),
/* harmony export */   getCategoryFieldType: () => (/* binding */ getCategoryFieldType),
/* harmony export */   getCategoryType: () => (/* binding */ getCategoryType),
/* harmony export */   getDefaultValueFormat: () => (/* binding */ getDefaultValueFormat),
/* harmony export */   getFieldSchema: () => (/* binding */ getFieldSchema),
/* harmony export */   getFieldType: () => (/* binding */ getFieldType),
/* harmony export */   getFieldUniqueValuesParams: () => (/* binding */ getFieldUniqueValuesParams),
/* harmony export */   getFieldsSchema: () => (/* binding */ getFieldsSchema),
/* harmony export */   getObjectIdField: () => (/* binding */ getObjectIdField),
/* harmony export */   getOutStatisticAlias: () => (/* binding */ getOutStatisticAlias),
/* harmony export */   getOutStatisticName: () => (/* binding */ getOutStatisticName),
/* harmony export */   getSeriaLlineShowArea: () => (/* binding */ getSeriaLlineShowArea),
/* harmony export */   getSeriaLlineSmoothed: () => (/* binding */ getSeriaLlineSmoothed),
/* harmony export */   getSerialStackedType: () => (/* binding */ getSerialStackedType),
/* harmony export */   getSplitByFieldValues: () => (/* binding */ getSplitByFieldValues),
/* harmony export */   getSplitOutStatisticAlias: () => (/* binding */ getSplitOutStatisticAlias),
/* harmony export */   getSplitOutStatisticName: () => (/* binding */ getSplitOutStatisticName),
/* harmony export */   getStatisticsType: () => (/* binding */ getStatisticsType),
/* harmony export */   getTemplateType: () => (/* binding */ getTemplateType),
/* harmony export */   getUsedSeriesProps: () => (/* binding */ getUsedSeriesProps),
/* harmony export */   isEmptyStringField: () => (/* binding */ isEmptyStringField),
/* harmony export */   normalizeStatisticFieldLabel: () => (/* binding */ normalizeStatisticFieldLabel),
/* harmony export */   parseOrderByField: () => (/* binding */ parseOrderByField),
/* harmony export */   whetherUseIdFieldForNonCount: () => (/* binding */ whetherUseIdFieldForNonCount),
/* harmony export */   whetherUseInlineDataSource: () => (/* binding */ whetherUseInlineDataSource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./extensions/widgets/common/chart/src/constants.ts");






const cacheFieldSchema = {};
/**
 * Get the schema of a single field
 * @param jimuFieldName
 * @param dataSourceId
 */
const getFieldSchema = (jimuFieldName, dataSourceId) => {
    var _a;
    if (cacheFieldSchema[jimuFieldName] != null)
        return cacheFieldSchema[jimuFieldName];
    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
    const dsSchema = ds === null || ds === void 0 ? void 0 : ds.getSchema();
    const fieldSchema = (_a = dsSchema === null || dsSchema === void 0 ? void 0 : dsSchema.fields) === null || _a === void 0 ? void 0 : _a[jimuFieldName];
    cacheFieldSchema[jimuFieldName] = fieldSchema;
    return fieldSchema;
};
const cacheFieldsSchema = {};
/**
 * Get all the field schema in a data source
 * @param dataSourceId
 */
const getFieldsSchema = (dataSourceId) => {
    if (cacheFieldsSchema[dataSourceId] != null)
        return cacheFieldsSchema[dataSourceId];
    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
    const dsSchema = ds === null || ds === void 0 ? void 0 : ds.getSchema();
    const fieldsSchema = dsSchema === null || dsSchema === void 0 ? void 0 : dsSchema.fields;
    cacheFieldsSchema[dataSourceId] = fieldsSchema;
    return fieldsSchema;
};
const cacheObjectIdField = {};
/**
 * get objectid
 * @param dataSourceId
 */
const getObjectIdField = (dataSourceId) => {
    if (cacheObjectIdField[dataSourceId] != null)
        return cacheObjectIdField[dataSourceId];
    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
    if (ds == null) {
        console.error(`Invalid data source id: ${dataSourceId}`);
        return;
    }
    const objectId = ds.getIdField();
    cacheObjectIdField[dataSourceId] = objectId;
    return objectId;
};
/**
 * Get the field type.
 * @param jimuFieldName
 * @param dataSourceId
 */
const getFieldType = (jimuFieldName, dataSourceId) => {
    const fieldSchema = getFieldSchema(jimuFieldName, dataSourceId);
    return fieldSchema === null || fieldSchema === void 0 ? void 0 : fieldSchema.type;
};
/**
 * Get the template type of the current series.
 * @param series
 * @param fallbackType
 */
const getTemplateType = (webChart) => {
    var _a, _b, _c;
    const series = webChart === null || webChart === void 0 ? void 0 : webChart.series;
    const seriesType = (_a = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(series)) !== null && _a !== void 0 ? _a : 'barSeries';
    const serie = series === null || series === void 0 ? void 0 : series[0];
    let type;
    let subType;
    if (!serie)
        return [];
    if (seriesType === 'barSeries') {
        const stackedType = serie.stackedType;
        const rotated = (_b = webChart === null || webChart === void 0 ? void 0 : webChart.rotated) !== null && _b !== void 0 ? _b : false;
        const suffix = rotated ? 'bar' : 'column';
        const prefix = stackedType === 'sideBySide' ? '' : stackedType;
        type = suffix;
        subType = (prefix ? `${prefix}-${suffix}` : suffix);
    }
    else if (seriesType === 'lineSeries') {
        const showArea = getSeriaLlineShowArea(series);
        const lineSmoothed = getSeriaLlineSmoothed(series);
        const suffix = showArea ? 'area' : 'line';
        let prefix = '';
        if (lineSmoothed) {
            prefix = 'smooth';
        }
        type = suffix;
        subType = (prefix ? `${prefix}-${suffix}` : suffix);
    }
    else if (seriesType === 'pieSeries') {
        type = 'pie';
        const innerRadius = (_c = serie === null || serie === void 0 ? void 0 : serie.innerRadius) !== null && _c !== void 0 ? _c : 0;
        subType = innerRadius > 0 ? 'donut' : 'pie';
    }
    else if (seriesType === 'scatterSeries') {
        type = 'scatter';
        subType = 'scatter';
    }
    else if (seriesType === 'histogramSeries') {
        type = 'histogram';
        subType = 'histogram';
    }
    return [type, subType];
};
/**
 * Capitalize the first letter of a string.
 * @param str
 * @returns {string}
 */
const capitalizeString = (str) => {
    if (typeof str === 'string') {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return null;
};
const whetherUseIdFieldForNonCount = (query, series, dataSource) => {
    var _a, _b;
    if (!dataSource)
        return false;
    const statysticsType = (_b = (_a = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.statisticType;
    if (statysticsType === 'count')
        return false;
    const usedFields = series === null || series === void 0 ? void 0 : series.map((serie) => serie.id);
    if (!(usedFields === null || usedFields === void 0 ? void 0 : usedFields.length))
        return false;
    const idFIeld = dataSource.getIdField();
    return usedFields.includes(idFIeld);
};
const whetherUseInlineDataSource = (webChart, dataSource) => {
    var _a, _b;
    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(webChart === null || webChart === void 0 ? void 0 : webChart.series);
    const isPieOrSerialChart = (0,_default__WEBPACK_IMPORTED_MODULE_3__.isSerialSeries)(seriesType) || seriesType === 'pieSeries';
    if (!isPieOrSerialChart)
        return false;
    const categoryType = getCategoryType((_a = webChart === null || webChart === void 0 ? void 0 : webChart.dataSource) === null || _a === void 0 ? void 0 : _a.query);
    if (categoryType === _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByField)
        return true;
    const useIdFieldForNonCount = whetherUseIdFieldForNonCount((_b = webChart === null || webChart === void 0 ? void 0 : webChart.dataSource) === null || _b === void 0 ? void 0 : _b.query, webChart === null || webChart === void 0 ? void 0 : webChart.series, dataSource);
    return useIdFieldForNonCount;
};
/**
 * Indicates whether a string field is empty (different from undefined, null and empty string).
 * The value is stringified before being trimmed to debunk edge cases like when the value is a numeric value.
 * @param value The value to test
 * @returns `true` if empty, `false` otherwise
 */
function isEmptyStringField(value) {
    return value === undefined || value === null || `${value}`.trim() === '';
}
/**
 * Get category type from chart query.
 * @param query
 */
const getCategoryType = (query) => {
    if ((query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) != null) {
        return _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByGroup;
    }
    else if ((query === null || query === void 0 ? void 0 : query.outStatistics) != null) {
        return _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByField;
    }
};
/**
 * Get statistic type from chart query.
 * @param query
 */
const getStatisticsType = (query) => {
    var _a, _b, _c;
    if ((_a = query === null || query === void 0 ? void 0 : query.outFields) === null || _a === void 0 ? void 0 : _a.length) {
        return 'no_aggregation';
    }
    else {
        return (_c = (_b = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.statisticType;
    }
};
/**
 * Get category field from chart query.
 * @param query
 */
const getCategoryField = (query) => {
    var _a;
    return (_a = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _a === void 0 ? void 0 : _a[0];
};
/**
 * Get category field type from chart query.
 * @param query
 */
const getCategoryFieldType = (query, dataSourceId) => {
    var _a;
    const categoryField = (_a = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _a === void 0 ? void 0 : _a[0];
    const fieldType = getFieldType(categoryField, dataSourceId);
    return fieldType;
};
const getSerialStackedType = (series) => {
    return (series === null || series === void 0 ? void 0 : series[0]).stackedType;
};
const getSeriaLlineSmoothed = (series) => {
    return (series === null || series === void 0 ? void 0 : series[0]).lineSmoothed;
};
const getSeriaLlineShowArea = (series) => {
    return (series === null || series === void 0 ? void 0 : series[0]).showArea;
};
const OrderSeparator = ' ';
/**
 * Parse a query.orderByFields[i]
 * @param fieldOrder
 * normal: 'fieldname ASC'
 * with space in field: 'field name ASC'
 */
const parseOrderByField = (fieldOrder) => {
    if (!fieldOrder || !fieldOrder.includes(OrderSeparator))
        return [];
    const lastIndex = fieldOrder.lastIndexOf(OrderSeparator);
    const index = fieldOrder.indexOf(OrderSeparator);
    if (lastIndex !== index) {
        const field = fieldOrder.substring(0, lastIndex);
        const order = fieldOrder.substring(lastIndex + 1);
        return [field, order];
    }
    else {
        return fieldOrder.split(' ');
    }
};
//Using these special symbols as `outStatisticName` will cause some service statistics to fail.
const SpecialSymbolRegexp = /\(|\)|\[|\]|\%/gm;
/**
 * Generate the `outStatisticName` for `query`, and it's always equal to `serie.y`
 * @param numericField
 * @param statisticType
 */
const getOutStatisticName = (numericField, statisticType) => {
    if (numericField === null || numericField === void 0 ? void 0 : numericField.match(SpecialSymbolRegexp)) {
        numericField = numericField.replace(SpecialSymbolRegexp, '__');
    }
    if (statisticType !== 'no_aggregation') {
        return `${statisticType}_of_${numericField}`;
    }
    else {
        return numericField;
    }
};
const getOutStatisticAlias = (numericFieldAlias, statisticType) => {
    if (statisticType !== 'no_aggregation') {
        return `${jimu_theme__WEBPACK_IMPORTED_MODULE_4__.utils.uppercaseFirstLetter(statisticType)} of ${numericFieldAlias}`;
    }
    else {
        return numericFieldAlias;
    }
};
const StatisticsTranslations = {
    sum: 'sumOfField',
    avg: 'meanOfField',
    min: 'minOfField',
    max: 'maxOfField',
    count: 'count',
    percentile_cont: 'medianOfField'
};
/**
 * Normalize the label of statistic type.
 * @param field
 * @param statisticType
 * @param translate
 */
const normalizeStatisticFieldLabel = (statisticType, field, translate) => {
    const normalized = translate(StatisticsTranslations[statisticType], { field });
    return normalized;
};
/**
 * Get default value format based on field type.
 * Note: `NumberFormatOptions` is not supported for serial chart yet.
 * @param fieldType
 */
const getDefaultValueFormat = (fieldType) => {
    if (fieldType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date) {
        return (0,_default__WEBPACK_IMPORTED_MODULE_3__.getDefaultDateFormat)();
    }
    else {
        return (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getDefaultCategoryFormat)();
    }
};
const getSplitOutStatisticName = (numericField, statisticType, splitByValue) => {
    let outStatisticName = getOutStatisticName(numericField, statisticType);
    outStatisticName = `${outStatisticName}_of_${splitByValue}`;
    return outStatisticName;
};
const getSplitOutStatisticAlias = (numericFieldAlias, statisticType, splitByValue) => {
    let outStatisticAlias = getOutStatisticAlias(numericFieldAlias, statisticType);
    outStatisticAlias = `${outStatisticAlias} of ${splitByValue}`;
    return outStatisticAlias;
};
const getSplitByFieldValues = (series) => {
    if (!(series === null || series === void 0 ? void 0 : series.length))
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const values = series.map((serie) => {
        const where = serie.query.where;
        const value = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSplitByValue)({ where, normalize: true });
        return value;
    });
    return values;
};
const ArcgisChartsSecretKeys = {
    defaultOutStatisticFieldName: 'arcgis_charts_outStatisticFieldName_default_key'
};
const getFieldUniqueValuesParams = (field, pageSize) => {
    const outFields = [field];
    const nullFilter = `${field} IS NOT NULL`;
    const orderByFields = !isEmptyStringField(field) ? [`${field} ${jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartSortOrderKinds.Ascending}`] : [];
    const params = {
        where: nullFilter,
        orderByFields,
        outFields,
        returnDistinctValues: true,
        returnGeometry: false,
        pageSize
    };
    return params;
};
/**
 * Create the default by category type.
 * @param categoryType
 */
const createDefaultQuery = (categoryType = _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByGroup) => {
    if (categoryType === _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByGroup) {
        return {
            groupByFieldsForStatistics: [],
            outStatistics: []
        };
    }
    else if (categoryType === _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByField) {
        return {
            outStatistics: []
        };
    }
};
const DefaultTimeBinningProps = {
    timeIntervalSize: 1,
    timeIntervalUnits: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartTimeIntervalUnits.Months,
    timeAggregationType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartTimeAggregationTypes.Start,
    trimIncompleteTimeInterval: false,
    nullPolicy: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartNullPolicyTypes.Interpolate
};
/**
 * Create a default series based on the series properties.
 * @param seriesProps
 * @param index
 */
const createDefaultSerie = (seriesProps, index = 0, colorProps) => {
    var _a, _b;
    if (!seriesProps)
        return null;
    const { type = 'lineSeries', dataLabels, dataTooltipVisible } = seriesProps;
    let serie = null;
    if (type === 'barSeries') {
        const { fillSymbol, stackedType = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartStackedKinds.Side } = seriesProps;
        serie = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getDefaultBarChartSeries)(index, colorProps);
        serie.stackedType = stackedType;
        if (fillSymbol) {
            if (!(colorProps === null || colorProps === void 0 ? void 0 : colorProps.color) && (colorProps === null || colorProps === void 0 ? void 0 : colorProps.preSerieColor)) {
                const color = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getNonRepeatingColor)((_a = colorProps === null || colorProps === void 0 ? void 0 : colorProps.colors) !== null && _a !== void 0 ? _a : _default__WEBPACK_IMPORTED_MODULE_3__.SeriesColors, index, colorProps.preSerieColor);
                serie.fillSymbol = fillSymbol.set('color', color);
            }
            else {
                serie.fillSymbol = fillSymbol;
            }
        }
    }
    else if (type === 'lineSeries') {
        const { stackedType = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartStackedKinds.Side, lineSmoothed = false, showArea = false, markerVisible = false, lineSymbol, markerSymbol } = seriesProps;
        serie = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getDefaultLineChartSeries)(index, colorProps);
        serie.stackedType = stackedType;
        serie.lineSmoothed = lineSmoothed;
        serie.showArea = showArea;
        serie.markerVisible = markerVisible;
        if (lineSymbol) {
            if (!(colorProps === null || colorProps === void 0 ? void 0 : colorProps.color) && (colorProps === null || colorProps === void 0 ? void 0 : colorProps.preSerieColor)) {
                const color = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getNonRepeatingColor)((_b = colorProps === null || colorProps === void 0 ? void 0 : colorProps.colors) !== null && _b !== void 0 ? _b : _default__WEBPACK_IMPORTED_MODULE_3__.SeriesColors, index, colorProps.preSerieColor);
                serie.lineSymbol = lineSymbol.set('color', color);
            }
            else {
                serie.lineSymbol = lineSymbol;
            }
        }
        if (markerSymbol) {
            serie.markerSymbol = markerSymbol;
        }
    }
    else if (type === 'pieSeries') {
        const { innerRadius = 0, startAngle = 0, endAngle = 360 } = seriesProps;
        serie = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getDefaultPieChartSeries)();
        serie.innerRadius = innerRadius;
        serie.startAngle = startAngle;
        serie.endAngle = endAngle;
    }
    else if (type === 'scatterSeries') {
        const { markerSymbol, overlays } = seriesProps;
        serie = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getDefaultScatterPlotChartSeries)();
        if (markerSymbol) {
            serie.markerSymbol = markerSymbol;
        }
        if (overlays) {
            serie.overlays = overlays;
        }
    }
    else if (type === 'histogramSeries') {
        const { fillSymbol, binCount, overlays } = seriesProps;
        serie = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getDefaultHistogramSeries)();
        serie.binCount = binCount;
        if (overlays) {
            serie.overlays = overlays;
        }
        if (fillSymbol) {
            serie.fillSymbol = fillSymbol;
        }
    }
    if (dataLabels) {
        serie.dataLabels = dataLabels;
    }
    if (dataTooltipVisible != null) {
        serie.dataTooltipVisible = dataTooltipVisible;
    }
    return serie;
};
/**
 * Get the used series by series id or index.
 * @param propSeries
 * @param id
 * @param index
 */
const getUsedSeriesProps = (propSeries, id, index = 0, colorProps) => {
    var _a;
    let defaultSerie = propSeries.find((propSerie) => propSerie.id === id);
    if (!defaultSerie) {
        const template = (_a = propSeries[index]) !== null && _a !== void 0 ? _a : propSeries[0];
        const { type, dataLabels, dataTooltipVisible } = template;
        const { stackedType } = template;
        const { lineSmoothed, showArea, markerVisible, markerSymbol } = template;
        const { innerRadius, startAngle, endAngle } = template;
        defaultSerie = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
            type,
            dataLabels,
            dataTooltipVisible,
            stackedType,
            lineSmoothed,
            showArea,
            markerVisible,
            markerSymbol,
            innerRadius,
            startAngle,
            endAngle
        });
    }
    const seriesProps = createDefaultSerie(defaultSerie, index, colorProps);
    return seriesProps;
};
const getSeriesProps = (serie, query) => {
    var _a, _b, _c, _d;
    const categoryField = (_b = (_a = query === null || query === void 0 ? void 0 : query.groupByFieldsForStatistics) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
    const outStatistics = query === null || query === void 0 ? void 0 : query.outStatistics;
    const outFields = query === null || query === void 0 ? void 0 : query.outFields;
    const where = query === null || query === void 0 ? void 0 : query.where;
    const splitByField = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSplitByField)(where, true);
    const statisticType = (_c = getStatisticsType(query)) !== null && _c !== void 0 ? _c : 'count';
    const timeIntervalUnits = serie === null || serie === void 0 ? void 0 : serie.timeIntervalUnits;
    const numericFields = outFields || ((_d = outStatistics === null || outStatistics === void 0 ? void 0 : outStatistics.map((outStatistic) => outStatistic.onStatisticField)) === null || _d === void 0 ? void 0 : _d.filter(field => !!field));
    return { splitByField, categoryField, numericFields, statisticType, timeIntervalUnits };
};
const createSplitBySerie = (props, index, colorProps) => {
    const { propSeries, name, categoryField, numberField, timeIntervalUnits, splitByField, splitByFieldType, splitByValue } = props;
    let serie = getUsedSeriesProps(propSeries, splitByValue, index, colorProps);
    const idAndName = `${splitByValue}`;
    const y = numberField;
    serie.id = idAndName;
    serie.x = categoryField;
    serie.y = y;
    serie.name = name || idAndName;
    if (timeIntervalUnits) {
        serie = Object.assign(Object.assign(Object.assign({}, serie), DefaultTimeBinningProps), { timeIntervalUnits });
    }
    const where = `${splitByField}=${splitByFieldType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String ? `'${splitByValue}'` : splitByValue}`;
    const query = { where };
    serie.query = query;
    return serie;
};
const createSplitBySerieFromSeries = (propSeries, propQuery, splitByFieldType, splitByValues, deletable = false, colorProps) => {
    var _a;
    const seriesProps = getSeriesProps(propSeries[0], propQuery);
    const { splitByField, categoryField, numericFields, timeIntervalUnits } = seriesProps;
    const numberField = numericFields[0];
    let preSerieColor = (_a = colorProps === null || colorProps === void 0 ? void 0 : colorProps.preSerieColor) !== null && _a !== void 0 ? _a : '';
    const seriesValues = splitByValues.map((splitByValue, index) => {
        var _a, _b, _c;
        let serie = propSeries.find((serie) => {
            const seriesSplitByValue = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSplitByValue)({ where: serie.query.where, normalize: false });
            const rawSplitByValue = splitByFieldType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String ? `'${splitByValue}'` : `${splitByValue}`;
            return seriesSplitByValue === rawSplitByValue;
        });
        if (!serie) {
            const splitByProps = {
                propSeries,
                categoryField,
                numberField,
                timeIntervalUnits,
                splitByField,
                splitByFieldType,
                splitByValue
            };
            serie = createSplitBySerie(splitByProps, index, Object.assign(Object.assign({}, colorProps), { preSerieColor }));
            serie.deletable = deletable;
            preSerieColor =
                (_b = (_a = serie.fillSymbol) === null || _a === void 0 ? void 0 : _a.color) !== null && _b !== void 0 ? _b : (_c = serie.lineSymbol) === null || _c === void 0 ? void 0 : _c.color;
            if (colorProps.symbol) {
                if (serie.type === 'barSeries') {
                    serie.fillSymbol = colorProps.symbol;
                }
                else if (serie.type === 'lineSeries') {
                    serie.lineSymbol = colorProps.symbol;
                }
            }
        }
        return serie;
    });
    const series = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(seriesValues);
    return series;
};
const applySeriesColors = (propSeries, colors) => {
    if (!colors)
        return;
    const slices = propSeries === null || propSeries === void 0 ? void 0 : propSeries.map((serie, index) => {
        const color = (0,_default__WEBPACK_IMPORTED_MODULE_3__.getColorInOrder)(colors, index);
        const type = serie.type;
        if (type === 'barSeries') {
            serie = serie.setIn(['fillSymbol', 'color'], color);
        }
        else if (type === 'lineSeries') {
            serie = serie.setIn(['lineSymbol', 'color'], color);
        }
        return serie;
    });
    return slices;
};
const createRuntimeSplitBySeries = (propSeries, propQuery, splitByFieldType, splitByValues) => {
    const otherSerie = propSeries.find(serie => serie.id === _constants__WEBPACK_IMPORTED_MODULE_5__.SplitByOtherSeriesValue);
    const symbol = otherSerie.type === 'barSeries' ? otherSerie.fillSymbol : otherSerie.lineSymbol;
    let series = createSplitBySerieFromSeries(propSeries, propQuery, splitByFieldType, splitByValues, false, { symbol });
    series = series.map((serie) => {
        if (serie.deletable) {
            serie = serie.without('deletable');
        }
        return serie;
    });
    return series;
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/utils/default/index.ts":
/*!********************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/utils/default/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultAxisColor: () => (/* binding */ DefaultAxisColor),
/* harmony export */   DefaultAxisLabelColor: () => (/* binding */ DefaultAxisLabelColor),
/* harmony export */   DefaultAxisLabelSize: () => (/* binding */ DefaultAxisLabelSize),
/* harmony export */   DefaultAxisTitleColor: () => (/* binding */ DefaultAxisTitleColor),
/* harmony export */   DefaultAxisTitleSize: () => (/* binding */ DefaultAxisTitleSize),
/* harmony export */   DefaultBgColor: () => (/* binding */ DefaultBgColor),
/* harmony export */   DefaultCircleMarkerSize: () => (/* binding */ DefaultCircleMarkerSize),
/* harmony export */   DefaultCircleMarkerSymbol: () => (/* binding */ DefaultCircleMarkerSymbol),
/* harmony export */   DefaultColor: () => (/* binding */ DefaultColor),
/* harmony export */   DefaultColorBySlicesOtherColor: () => (/* binding */ DefaultColorBySlicesOtherColor),
/* harmony export */   DefaultFillColor: () => (/* binding */ DefaultFillColor),
/* harmony export */   DefaultFillSymbol: () => (/* binding */ DefaultFillSymbol),
/* harmony export */   DefaultFont: () => (/* binding */ DefaultFont),
/* harmony export */   DefaultFontWeight: () => (/* binding */ DefaultFontWeight),
/* harmony export */   DefaultFooterColor: () => (/* binding */ DefaultFooterColor),
/* harmony export */   DefaultFooterSize: () => (/* binding */ DefaultFooterSize),
/* harmony export */   DefaultGridColor: () => (/* binding */ DefaultGridColor),
/* harmony export */   DefaultGuideFillColor: () => (/* binding */ DefaultGuideFillColor),
/* harmony export */   DefaultGuideLabelSize: () => (/* binding */ DefaultGuideLabelSize),
/* harmony export */   DefaultGuideLineColor: () => (/* binding */ DefaultGuideLineColor),
/* harmony export */   DefaultLegendLabelColor: () => (/* binding */ DefaultLegendLabelColor),
/* harmony export */   DefaultLegendLabelSize: () => (/* binding */ DefaultLegendLabelSize),
/* harmony export */   DefaultLegendTitleColor: () => (/* binding */ DefaultLegendTitleColor),
/* harmony export */   DefaultLegendTitleSize: () => (/* binding */ DefaultLegendTitleSize),
/* harmony export */   DefaultLineColor: () => (/* binding */ DefaultLineColor),
/* harmony export */   DefaultLineSymbol: () => (/* binding */ DefaultLineSymbol),
/* harmony export */   DefaultPieLegendLabelMaxWidth: () => (/* binding */ DefaultPieLegendLabelMaxWidth),
/* harmony export */   DefaultPieSeriesOutlineColor: () => (/* binding */ DefaultPieSeriesOutlineColor),
/* harmony export */   DefaultScatterPlotTrandLineColor: () => (/* binding */ DefaultScatterPlotTrandLineColor),
/* harmony export */   DefaultSeriesLabelSize: () => (/* binding */ DefaultSeriesLabelSize),
/* harmony export */   DefaultSeriesOutlineColor: () => (/* binding */ DefaultSeriesOutlineColor),
/* harmony export */   DefaultSplitByOtherSeriesColor: () => (/* binding */ DefaultSplitByOtherSeriesColor),
/* harmony export */   DefaultTextColor: () => (/* binding */ DefaultTextColor),
/* harmony export */   DefaultTextSize: () => (/* binding */ DefaultTextSize),
/* harmony export */   DefaultTextSymbol: () => (/* binding */ DefaultTextSymbol),
/* harmony export */   DefaultTitleColor: () => (/* binding */ DefaultTitleColor),
/* harmony export */   DefaultTitleSize: () => (/* binding */ DefaultTitleSize),
/* harmony export */   DefaultTitleWeight: () => (/* binding */ DefaultTitleWeight),
/* harmony export */   DefaultValueLabelColor: () => (/* binding */ DefaultValueLabelColor),
/* harmony export */   SeriesColors: () => (/* binding */ SeriesColors),
/* harmony export */   defaultMarkerSize: () => (/* binding */ defaultMarkerSize),
/* harmony export */   generateRandomThemeColor: () => (/* binding */ generateRandomThemeColor),
/* harmony export */   getCategoryAxis: () => (/* binding */ getCategoryAxis),
/* harmony export */   getChartText: () => (/* binding */ getChartText),
/* harmony export */   getCircleMarkerSymbol: () => (/* binding */ getCircleMarkerSymbol),
/* harmony export */   getColorInOrder: () => (/* binding */ getColorInOrder),
/* harmony export */   getDefaultAxes: () => (/* binding */ getDefaultAxes),
/* harmony export */   getDefaultAxisColor: () => (/* binding */ getDefaultAxisColor),
/* harmony export */   getDefaultAxisLabelColor: () => (/* binding */ getDefaultAxisLabelColor),
/* harmony export */   getDefaultAxisTitleColor: () => (/* binding */ getDefaultAxisTitleColor),
/* harmony export */   getDefaultBarChartSeries: () => (/* binding */ getDefaultBarChartSeries),
/* harmony export */   getDefaultBgColor: () => (/* binding */ getDefaultBgColor),
/* harmony export */   getDefaultColor: () => (/* binding */ getDefaultColor),
/* harmony export */   getDefaultDateFormat: () => (/* binding */ getDefaultDateFormat),
/* harmony export */   getDefaultFooterColor: () => (/* binding */ getDefaultFooterColor),
/* harmony export */   getDefaultGridColor: () => (/* binding */ getDefaultGridColor),
/* harmony export */   getDefaultGuide: () => (/* binding */ getDefaultGuide),
/* harmony export */   getDefaultHistogramOverlays: () => (/* binding */ getDefaultHistogramOverlays),
/* harmony export */   getDefaultHistogramSeries: () => (/* binding */ getDefaultHistogramSeries),
/* harmony export */   getDefaultHistomgramOverlayColor: () => (/* binding */ getDefaultHistomgramOverlayColor),
/* harmony export */   getDefaultLegend: () => (/* binding */ getDefaultLegend),
/* harmony export */   getDefaultLegendLabelColor: () => (/* binding */ getDefaultLegendLabelColor),
/* harmony export */   getDefaultLegendTitleColor: () => (/* binding */ getDefaultLegendTitleColor),
/* harmony export */   getDefaultLineChartSeries: () => (/* binding */ getDefaultLineChartSeries),
/* harmony export */   getDefaultLineColor: () => (/* binding */ getDefaultLineColor),
/* harmony export */   getDefaultNumberFormat: () => (/* binding */ getDefaultNumberFormat),
/* harmony export */   getDefaultOverlay: () => (/* binding */ getDefaultOverlay),
/* harmony export */   getDefaultPercentNumberFormat: () => (/* binding */ getDefaultPercentNumberFormat),
/* harmony export */   getDefaultPieChartSeries: () => (/* binding */ getDefaultPieChartSeries),
/* harmony export */   getDefaultScatterPlotChartSeries: () => (/* binding */ getDefaultScatterPlotChartSeries),
/* harmony export */   getDefaultSeriesFillColor: () => (/* binding */ getDefaultSeriesFillColor),
/* harmony export */   getDefaultSeriesOutlineColor: () => (/* binding */ getDefaultSeriesOutlineColor),
/* harmony export */   getDefaultTextColor: () => (/* binding */ getDefaultTextColor),
/* harmony export */   getDefaultTitleColor: () => (/* binding */ getDefaultTitleColor),
/* harmony export */   getDefaultValueLabelColor: () => (/* binding */ getDefaultValueLabelColor),
/* harmony export */   getFillSymbol: () => (/* binding */ getFillSymbol),
/* harmony export */   getFont: () => (/* binding */ getFont),
/* harmony export */   getLineSymbol: () => (/* binding */ getLineSymbol),
/* harmony export */   getNonRepeatingColor: () => (/* binding */ getNonRepeatingColor),
/* harmony export */   getNonRepeatingSeriesFillColor: () => (/* binding */ getNonRepeatingSeriesFillColor),
/* harmony export */   getScatterPlotOverlays: () => (/* binding */ getScatterPlotOverlays),
/* harmony export */   getSeriesFillColor: () => (/* binding */ getSeriesFillColor),
/* harmony export */   getTextSymbol: () => (/* binding */ getTextSymbol),
/* harmony export */   getThemeColorVariables: () => (/* binding */ getThemeColorVariables),
/* harmony export */   getValueAxis: () => (/* binding */ getValueAxis),
/* harmony export */   getValueFormat: () => (/* binding */ getValueFormat),
/* harmony export */   isSerialSeries: () => (/* binding */ isSerialSeries),
/* harmony export */   isXYChart: () => (/* binding */ isXYChart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./extensions/widgets/common/chart/src/constants.ts");





const DefaultColor = 'var(--dark)';
const DefaultTextColor = 'var(--dark)';
const DefaultBgColor = 'var(--white)';
const DefaultLineColor = 'var(--light-900)';
const DefaultFillColor = 'var(--primary)';
const DefaultTextSize = 14;
const DefaultCircleMarkerSize = 10;
const DefaultFontWeight = 400;
// title
const DefaultTitleColor = 'var(--black)';
const DefaultTitleWeight = 500;
const DefaultTitleSize = 24;
// footer
const DefaultFooterSize = 14;
const DefaultFooterColor = 'var(--dark-800)';
// series
const DefaultSeriesLabelSize = 10;
const DefaultValueLabelColor = 'var(--dark-600)';
// axes
const DefaultAxisColor = 'var(--light-800)';
const DefaultAxisLabelColor = 'var(--dark-500)';
const DefaultAxisTitleColor = 'var(--dark-800)';
const DefaultAxisTitleSize = 20;
const DefaultAxisLabelSize = 14;
// guide
const DefaultGuideFillColor = '#67b7dc';
const DefaultGuideLineColor = '#67b7dc';
const DefaultGuideLabelSize = 12;
// legend
const DefaultLegendTitleSize = 20;
const DefaultLegendLabelSize = 14;
const DefaultLegendTitleColor = 'var(--dark-800)';
const DefaultLegendLabelColor = 'var(--dark-800)';
const DefaultPieLegendLabelMaxWidth = 200;
// grid
const DefaultGridColor = 'var(--light-300)';
//color by slices
const DefaultColorBySlicesOtherColor = '#D6D6D6';
//marker simbol
const defaultMarkerSize = 20;
const DefaultSplitByOtherSeriesColor = '#D6D6D6';
const getDefaultColor = () => {
    return DefaultColor;
};
const getDefaultTextColor = () => {
    return DefaultTextColor;
};
const getDefaultBgColor = () => {
    return DefaultBgColor;
};
const getDefaultTitleColor = () => {
    return DefaultTitleColor;
};
const getDefaultFooterColor = () => {
    return DefaultFooterColor;
};
const getDefaultAxisLabelColor = () => {
    return DefaultAxisLabelColor;
};
const getDefaultAxisTitleColor = () => {
    return DefaultAxisTitleColor;
};
const getDefaultLegendTitleColor = () => {
    return DefaultAxisTitleColor;
};
const getDefaultLegendLabelColor = () => {
    return DefaultAxisTitleColor;
};
const getDefaultValueLabelColor = () => {
    return DefaultValueLabelColor;
};
const getDefaultLineColor = () => {
    return DefaultLineColor;
};
const getDefaultAxisColor = () => {
    return DefaultAxisColor;
};
const getDefaultGridColor = () => {
    return DefaultGridColor;
};
const SeriesColors = [
    '#5E8FD0',
    '#77B484',
    '#DF6B35',
    '#DBCF4E',
    '#41546D',
    '#8257C2',
    '#D6558B'
];
const DefaultSeriesOutlineColor = 'var(--light-900)';
const DefaultPieSeriesOutlineColor = 'var(--light-100)';
const DefaultScatterPlotTrandLineColor = SeriesColors[2];
const defaultHistomgramMeanColor = '#A6CEE3';
const defaultHistomgramMedianColor = '#33A02C';
const defaultHistomgramStdColor = '#B2DF8A';
const defaultHistomgramCodColor = '#E31A1C';
const getDefaultHistomgramOverlayColor = (type) => {
    if (type === 'mean') {
        return defaultHistomgramMeanColor;
    }
    else if (type === 'median') {
        return defaultHistomgramMedianColor;
    }
    else if (type === 'standardDeviation') {
        return defaultHistomgramStdColor;
    }
    else if (type === 'comparisonDistribution') {
        return defaultHistomgramCodColor;
    }
};
const getDefaultSeriesOutlineColor = (type = 'barSeries') => {
    if (isXYChart(type)) {
        return DefaultSeriesOutlineColor;
    }
    else if (type === 'pieSeries') {
        return DefaultPieSeriesOutlineColor;
    }
    else {
        return DefaultSeriesOutlineColor;
    }
};
const getDefaultSeriesFillColor = () => {
    return SeriesColors[0];
};
const getDefaultNumberFormat = () => {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.NumberAxisFormat,
        intlOptions: {
            style: 'decimal',
            useGrouping: true,
            minimumFractionDigits: 0,
            maximumFractionDigits: 3
        }
    };
};
const getDefaultPercentNumberFormat = () => {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.NumberAxisFormat,
        intlOptions: {
            style: 'percent',
            notation: 'standard',
            minimumFractionDigits: 0,
            maximumFractionDigits: 3
        }
    };
};
const getDefaultDateFormat = () => {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.DateAxisFormat,
        intlOptions: {}
    };
};
/**
 * Get colors in order
 */
const getColorInOrder = (colors, index = 0) => {
    var _a;
    const length = (_a = colors === null || colors === void 0 ? void 0 : colors.length) !== null && _a !== void 0 ? _a : 0;
    if (length < 0)
        return;
    index = index % length;
    if (index < 0)
        index = 0;
    return colors[index];
};
/**
 * Get color in order, but not repeat the previous one.
 * @param index
 * @param preSerieColor
 * @returns
 */
const getNonRepeatingColor = (colors, index = 0, preSerieColor) => {
    let color = getColorInOrder(colors, index);
    if (color === preSerieColor) {
        color = getColorInOrder(colors, index + 1);
    }
    return color;
};
/**
 * Get series fill colors in order
 */
const getSeriesFillColor = (index = 0) => {
    return getColorInOrder(SeriesColors, index);
};
/**
 * Get series fill colors in order, but not repeat the previous one.
 * @param index
 * @param preSerieColor
 * @returns
 */
const getNonRepeatingSeriesFillColor = (index = 0, preSerieColor) => {
    return getNonRepeatingColor(SeriesColors, index, preSerieColor);
};
const DefaultFont = {
    family: 'Avenir Next',
    size: DefaultTextSize,
    style: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTFontStyle.Normal,
    weight: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTFontWeight.Normal,
    decoration: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTFontDecoration.None
};
const DefaultTextSymbol = {
    type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSymbolType.TS,
    color: DefaultTextColor,
    font: DefaultFont,
    horizontalAlignment: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTHorizontalAlignment.Center
};
const DefaultLineSymbol = {
    type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSymbolType.SLS,
    style: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSimpleLineSymbolStyle.Solid,
    color: DefaultLineColor,
    width: 1
};
const DefaultFillSymbol = {
    type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSymbolType.SFS,
    style: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSimpleFillSymbolStyle.Solid,
    color: DefaultFillColor,
    outline: DefaultLineSymbol
};
const DefaultCircleMarkerSymbol = {
    type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSymbolType.SMS,
    style: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSimpleMarkerSymbolStyle.Circle,
    color: DefaultFillColor,
    size: DefaultCircleMarkerSize,
    outline: DefaultLineSymbol
};
/**
 * Get all theme variables
 */
const getThemeColorVariables = () => {
    var _a, _b;
    const theme = window.jimuConfig.isBuilder ? (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme2)() : (0,jimu_theme__WEBPACK_IMPORTED_MODULE_1__.getTheme)();
    const palette = ((_a = theme.colors) === null || _a === void 0 ? void 0 : _a.getPalette) != null ? theme.colors.getPalette() : (_b = theme.colors) === null || _b === void 0 ? void 0 : _b.palette;
    const variables = [];
    Object.keys(palette).forEach(name => {
        for (let i = 1; i <= 9; i++) {
            const shadeIndex = i * 100;
            const value = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toColorVariable(name, shadeIndex);
            variables.push(value);
        }
    });
    return variables;
};
/**
 * Generate a random theme color
 */
const generateRandomThemeColor = () => {
    const varialbes = getThemeColorVariables();
    const length = varialbes.length;
    const randomIndex = Math.floor(Math.random() * length);
    return varialbes[randomIndex];
};
const getFont = (size = DefaultTextSize) => {
    return Object.assign(Object.assign({}, DefaultFont), { size });
};
/**
 * Get the default text symbol
 * @param text
 * @param size
 */
const getTextSymbol = (text = '', size = DefaultTextSize, color = DefaultTextColor) => {
    return Object.assign(Object.assign({}, DefaultTextSymbol), { text,
        color, font: getFont(size) });
};
/**
 * Get the default line symbol
 * @param useRandomColor Whether to randomly generate colors
 * @param width
 */
const getLineSymbol = (width = 1, color = DefaultLineColor, style = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSimpleLineSymbolStyle.Solid) => {
    return Object.assign(Object.assign({}, DefaultLineSymbol), { width,
        color,
        style });
};
/**
 * Get the default fill symbol.
 */
const getFillSymbol = (color = DefaultColor, outlineWidth = 1, outlineColor = DefaultLineColor) => {
    return Object.assign(Object.assign({}, DefaultFillSymbol), { color: color, outline: getLineSymbol(outlineWidth, outlineColor) });
};
/**
 * Get the default circle marker symbol
 */
const getCircleMarkerSymbol = (color = DefaultFillColor, outlineWidth = 0, markerSize = DefaultCircleMarkerSize) => {
    return Object.assign(Object.assign({}, DefaultCircleMarkerSymbol), { color, size: markerSize, outline: getLineSymbol(outlineWidth) });
};
function getDefaultGuide(name, label = '', isHorizontal) {
    const horizontalAlignment = isHorizontal ? 'center' : 'right';
    const verticalAlignment = isHorizontal ? 'top' : 'middle';
    const labelText = getTextSymbol(label, DefaultGuideLabelSize, DefaultTextColor);
    labelText.horizontalAlignment = horizontalAlignment;
    labelText.verticalAlignment = verticalAlignment;
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Guide,
        start: undefined,
        style: getLineSymbol(2, DefaultGuideLineColor),
        name,
        label: labelText,
        visible: true,
        above: false
    };
}
function getDefaultOverlay(color) {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Overlay,
        visible: false,
        created: false,
        symbol: getLineSymbol(1, color)
    };
}
function getScatterPlotOverlays(color = SeriesColors[2], width = 3) {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Overlays,
        trendLine: {
            type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Overlay,
            created: true,
            visible: true,
            symbol: {
                type: 'esriSLS',
                color,
                width
            }
        }
    };
}
/**
 * Generate a default chart text
 * @param visible
 */
const getChartText = (text = '', visible = true, size, color = DefaultTextColor) => {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Text,
        visible,
        content: getTextSymbol(text, size, color)
    };
};
const getCategoryAxis = (text = '') => {
    const title = getChartText(text, false, DefaultAxisTitleSize, DefaultAxisTitleColor);
    title.content.horizontalAlignment = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTHorizontalAlignment.Center;
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Axis,
        visible: true,
        title,
        labels: getChartText('', false, DefaultAxisLabelSize, DefaultAxisLabelColor),
        valueFormat: (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.getDefaultCategoryFormat)(),
        lineSymbol: getLineSymbol(1, DefaultAxisColor)
    };
};
const getValueAxis = (text = '', isYAxis) => {
    const title = getChartText(text, false, DefaultAxisTitleSize, DefaultAxisTitleColor);
    if (isYAxis) {
        title.content.horizontalAlignment = undefined;
        title.content.verticalAlignment = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTVerticalAlignment.Middle;
        title.content.angle = 270;
    }
    else {
        title.content.horizontalAlignment = jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTHorizontalAlignment.Center;
    }
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Axis,
        visible: true,
        title,
        labels: getChartText('', false, DefaultAxisLabelSize, DefaultAxisLabelColor),
        valueFormat: getDefaultNumberFormat(),
        lineSymbol: getLineSymbol(1, DefaultAxisColor)
    };
};
/**
 * Returns default axes based on chart type as per the WebChart Specification
 * @param chartType The type of WebChart which is of type WebChartTypes.BarSeries | WebChartTypes.HistogramSeries | WebChartTypes.ScatterSeries
 *
 */
function getDefaultAxes(chartType) {
    const defaultAxes = [];
    const xAxisTitle = '';
    const yAxisTitle = '';
    const yAxis = getValueAxis(yAxisTitle, true);
    const defaultGridLine = getLineSymbol(1, DefaultGridColor, jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.RESTSimpleLineSymbolStyle.Dash);
    switch (chartType) {
        case jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.BarSeries: {
            // Setting Line Chart baseline to 0.
            yAxis.minimum = 0;
            yAxis.grid = defaultGridLine;
            defaultAxes.push(getCategoryAxis(xAxisTitle), yAxis);
            break;
        }
        case jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.LineSeries: {
            // Setting Bar Chart baseline to 0.
            yAxis.minimum = 0;
            yAxis.grid = defaultGridLine;
            defaultAxes.push(getCategoryAxis(xAxisTitle), yAxis);
            break;
        }
        case jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.ScatterSeries: {
            const xAxis = getValueAxis(xAxisTitle);
            xAxis.grid = defaultGridLine;
            yAxis.grid = defaultGridLine;
            defaultAxes.push(xAxis, yAxis);
            break;
        }
        case jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.HistogramSeries: {
            yAxis.grid = defaultGridLine;
            defaultAxes.push(getValueAxis(xAxisTitle), yAxis);
            break;
        }
        default:
            break;
    }
    // TODO: once `getDefaultAxes` is only needed via `getDefaultBarChart` deep clone can be removed.
    return defaultAxes;
}
/**
 * Returns a default BarChartSeries object as per the WebChart Specification
 */
function getDefaultBarChartSeries(index = 0, colorProps) {
    var _a;
    const color = !(colorProps === null || colorProps === void 0 ? void 0 : colorProps.color) ? getNonRepeatingColor((_a = colorProps === null || colorProps === void 0 ? void 0 : colorProps.colors) !== null && _a !== void 0 ? _a : SeriesColors, index, colorProps === null || colorProps === void 0 ? void 0 : colorProps.preSerieColor) : colorProps === null || colorProps === void 0 ? void 0 : colorProps.color;
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.BarSeries,
        id: '',
        name: '',
        x: '',
        y: '',
        colorType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartColoringPatterns.Single,
        stackedType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartStackedKinds.Side,
        fillSymbol: getFillSymbol(color, 0),
        dataLabels: getChartText('', false, DefaultSeriesLabelSize, DefaultValueLabelColor),
        rotated: false
    };
}
/**
 * Returns a default LineChartSeries object as per the WebChart Specification
 */
function getDefaultLineChartSeries(index = 0, colorProps) {
    var _a;
    const color = !(colorProps === null || colorProps === void 0 ? void 0 : colorProps.color) ? getNonRepeatingColor((_a = colorProps === null || colorProps === void 0 ? void 0 : colorProps.colors) !== null && _a !== void 0 ? _a : SeriesColors, index, colorProps === null || colorProps === void 0 ? void 0 : colorProps.preSerieColor) : colorProps === null || colorProps === void 0 ? void 0 : colorProps.color;
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.LineSeries,
        id: '',
        name: '',
        x: '',
        y: '',
        colorType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartColoringPatterns.Single,
        stackedType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartStackedKinds.Side,
        lineSymbol: getLineSymbol(2, color),
        dataLabels: getChartText('', false, DefaultSeriesLabelSize, DefaultValueLabelColor),
        rotated: false
    };
}
/**
 * Returns a default PieChartSeries object as per the WebChart Specification
 */
function getDefaultPieChartSeries() {
    const color = getSeriesFillColor(0);
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.PieSeries,
        colorType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartColoringPatterns.Single,
        id: '',
        name: '',
        x: '',
        y: '',
        innerRadius: 0,
        startAngle: 0,
        endAngle: 360,
        displayNumericValueOnDataLabel: true,
        displayPercentageOnDataLabel: false,
        displayNumericValueOnTooltip: true,
        displayPercentageOnTooltip: true,
        dataLabelsOffset: 0,
        sliceGrouping: {
            sliceId: _constants__WEBPACK_IMPORTED_MODULE_4__.PieSliceGroupingSliceId,
            percentageThreshold: 0,
            label: 'Other'
        },
        numericValueFormat: getDefaultNumberFormat(),
        percentValueFormat: getDefaultPercentNumberFormat(),
        fillSymbol: getFillSymbol(color, 1, 'var(--light-100)'),
        dataLabels: getChartText('', false, DefaultSeriesLabelSize, DefaultValueLabelColor)
    };
}
/**
 * Returns a default ScatterPlotChartSeries object as per the WebChart Specification
 */
function getDefaultScatterPlotChartSeries() {
    const color = getSeriesFillColor(0);
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.ScatterSeries,
        colorType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartColoringPatterns.Single,
        id: '',
        name: '',
        x: '',
        y: '',
        markerSymbol: getCircleMarkerSymbol(color, 0, defaultMarkerSize),
        overlays: getScatterPlotOverlays()
    };
}
/**
 * Returns a default HistogramChartSeries object as per the WebChart Specification
 */
function getDefaultHistogramSeries() {
    const color = getSeriesFillColor(0);
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.HistogramSeries,
        colorType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartColoringPatterns.Single,
        id: '',
        name: '',
        x: '',
        binCount: 15,
        overlays: getDefaultHistogramOverlays(),
        dataTransformationType: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartDataTransformations.None,
        fillSymbol: getFillSymbol(color, 1, 'var(--light-100)'),
        dataLabels: getChartText('', false, DefaultSeriesLabelSize, DefaultValueLabelColor),
        rotated: false
    };
}
function getDefaultHistogramOverlays() {
    return {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Overlays,
        mean: getDefaultOverlay(getDefaultHistomgramOverlayColor('mean')),
        median: getDefaultOverlay(getDefaultHistomgramOverlayColor('median')),
        standardDeviation: getDefaultOverlay(getDefaultHistomgramOverlayColor('standardDeviation')),
        comparisonDistribution: getDefaultOverlay(getDefaultHistomgramOverlayColor('comparisonDistribution'))
    };
}
const getDefaultLegend = (visible = true, isPie = false) => {
    let legend = {
        type: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.Legend,
        visible,
        title: getChartText('', true, DefaultLegendTitleSize, DefaultLegendTitleColor),
        body: getTextSymbol('', DefaultLegendLabelSize, DefaultLegendLabelColor),
        position: jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartLegendPositions.Right
    };
    if (isPie) {
        legend = Object.assign(Object.assign({}, legend), { labelMaxWidth: DefaultPieLegendLabelMaxWidth });
    }
    return legend;
};
/**
 * Generate a `FormatOptions` of ac-spec by a field schema
 * @param fieldSchema
 * @param characterLimit
 */
const getValueFormat = (fieldSchema, characterLimit = 11) => {
    var _a, _b;
    if (fieldSchema.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Date) {
        const intlOptions = (_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getIntlOption(fieldSchema)) !== null && _a !== void 0 ? _a : {};
        return {
            type: 'date',
            intlOptions
        };
    }
    else if (fieldSchema.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String) {
        return {
            type: 'category',
            characterLimit
        };
    }
    else if (fieldSchema.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number) {
        const intlOptions = (_b = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getIntlOption(fieldSchema)) !== null && _b !== void 0 ? _b : {};
        return {
            type: 'number',
            intlOptions
        };
    }
};
const isSerialSeries = (value) => {
    if (value == null || value === '')
        return;
    const seriesType = typeof value === 'string' ? value : (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.getSeriesType)(value);
    return seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.BarSeries || seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.LineSeries;
};
/**
 * Check if the chart is a XY chart.
 * @param series
 * @returns {boolean}
 */
const isXYChart = (value) => {
    if (value == null || value === '')
        return false;
    const seriesType = typeof value === 'string' ? value : (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.getSeriesType)(value);
    return seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.BarSeries || seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.LineSeries ||
        seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.ScatterSeries || seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_3__.WebChartTypes.HistogramSeries;
};


/***/ }),

/***/ "./extensions/widgets/common/chart/src/version-manager.ts":
/*!****************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/version-manager.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildUniqueQuery: () => (/* binding */ buildUniqueQuery),
/* harmony export */   setSeriesIdWithNumericField: () => (/* binding */ setSeriesIdWithNumericField),
/* harmony export */   upgradeByField: () => (/* binding */ upgradeByField),
/* harmony export */   upgradeColorMatch: () => (/* binding */ upgradeColorMatch),
/* harmony export */   versionManager: () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/chart */ "jimu-ui/advanced/chart");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./extensions/widgets/common/chart/src/config.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./extensions/widgets/common/chart/src/constants.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/common */ "./extensions/widgets/common/chart/src/utils/common/index.ts");
/* harmony import */ var _utils_common_serial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/common/serial */ "./extensions/widgets/common/chart/src/utils/common/serial.ts");
/* harmony import */ var _utils_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/default */ "./extensions/widgets/common/chart/src/utils/default/index.ts");







/**
 * Function merging multiple `outStatistics` properties.
 * @param uniqueQuery
 * @param series
 */
const mergeOutStatistics = (uniqueQuery, series) => {
    series.slice(1).forEach((serie) => {
        var _a, _b, _c;
        const outStatistics = ((_a = uniqueQuery.outStatistics) !== null && _a !== void 0 ? _a : []).concat((_c = (_b = serie.query) === null || _b === void 0 ? void 0 : _b.outStatistics) !== null && _c !== void 0 ? _c : []);
        uniqueQuery = uniqueQuery.set('outStatistics', outStatistics);
    });
    return uniqueQuery;
};
/**
 * Function building a unique query based on the chart series config.
 * Note: all queries have the same onStatisticsField, so they can be combined into one query.
 */
const buildUniqueQuery = (series) => {
    var _a, _b;
    if (!(series === null || series === void 0 ? void 0 : series.length))
        return null;
    let uniqueQuery = series[0].query;
    if (!((_a = uniqueQuery.outStatistics) === null || _a === void 0 ? void 0 : _a.length))
        return null;
    if ((_b = uniqueQuery === null || uniqueQuery === void 0 ? void 0 : uniqueQuery.groupByFieldsForStatistics) === null || _b === void 0 ? void 0 : _b.length) {
        uniqueQuery = mergeOutStatistics(uniqueQuery, series);
    }
    return uniqueQuery;
};
/**
 * Use the numeric field as the id of the serie.
 */
const setSeriesIdWithNumericField = (series) => {
    return series === null || series === void 0 ? void 0 : series.map((serie) => {
        var _a, _b, _c, _d, _e;
        if (!((_b = (_a = serie.query) === null || _a === void 0 ? void 0 : _a.groupByFieldsForStatistics) === null || _b === void 0 ? void 0 : _b.length)) {
            return serie;
        }
        else {
            const numericField = (_e = (_d = (_c = serie.query) === null || _c === void 0 ? void 0 : _c.outStatistics) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.onStatisticField;
            const id = serie.id;
            if (numericField && numericField !== id) {
                serie = jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable.set(serie, 'id', numericField);
            }
            return serie;
        }
    });
};
const upgradeColorMatch = (oldConfig) => {
    var _a;
    if (!oldConfig)
        return oldConfig;
    let series = (_a = oldConfig.webChart) === null || _a === void 0 ? void 0 : _a.series;
    if (!(series === null || series === void 0 ? void 0 : series.length))
        return oldConfig;
    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(series);
    if (seriesType !== 'pieSeries')
        return oldConfig;
    const colorType = series[0].colorType;
    if (colorType !== 'colorMatch')
        return oldConfig;
    let dataSource = oldConfig.webChart.dataSource;
    const colorMatch = dataSource === null || dataSource === void 0 ? void 0 : dataSource.colorMatch;
    if (!colorMatch)
        return oldConfig;
    const colorMatches = colorMatch.colorMatches;
    const defaultFillSymbol = series[0].fillSymbol;
    const slices = Object.entries(colorMatches).map(([key, match]) => {
        var _a, _b, _c;
        const sliceId = key;
        const color = match._fillColor;
        const fillSymbol = (0,_utils_default__WEBPACK_IMPORTED_MODULE_6__.getFillSymbol)(color, (_b = (_a = defaultFillSymbol.outline) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0, (_c = defaultFillSymbol.outline) === null || _c === void 0 ? void 0 : _c.color);
        return { sliceId, fillSymbol };
    });
    series = jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable.setIn(series, ['0', 'slices'], slices);
    dataSource = dataSource.without('colorMatch');
    const newConfig = oldConfig.setIn(['webChart', 'series'], series)
        .setIn(['webChart', 'dataSource'], dataSource);
    return newConfig;
};
const upgradeByField = (oldConfig) => {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!oldConfig)
        return oldConfig;
    let query = (_b = (_a = oldConfig.webChart) === null || _a === void 0 ? void 0 : _a.dataSource) === null || _b === void 0 ? void 0 : _b.query;
    let series = (_c = oldConfig.webChart) === null || _c === void 0 ? void 0 : _c.series;
    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(series);
    if (seriesType !== 'pieSeries' && !(0,_utils_default__WEBPACK_IMPORTED_MODULE_6__.isSerialSeries)(seriesType))
        return oldConfig;
    const categoryType = (0,_utils_common_serial__WEBPACK_IMPORTED_MODULE_5__.getCategoryType)(query);
    if (categoryType !== _config__WEBPACK_IMPORTED_MODULE_2__.CategoryType.ByField)
        return oldConfig;
    const statisticType = (_f = (_e = (_d = query === null || query === void 0 ? void 0 : query.outStatistics) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.statisticType) !== null && _f !== void 0 ? _f : 'sum';
    series = series.map(serie => {
        let x = serie.x;
        let y = serie.y;
        let id = serie.y;
        if (x === 'FieldName') {
            x = _constants__WEBPACK_IMPORTED_MODULE_3__.ByFieldSeriesX;
            serie = serie.set('x', x);
        }
        if (y === 'FieldValue') {
            y = _constants__WEBPACK_IMPORTED_MODULE_3__.ByFieldSeriesY;
            serie = serie.set('y', y);
        }
        if (id === 'FieldValue') {
            id = _constants__WEBPACK_IMPORTED_MODULE_3__.ByFieldSeriesY;
            serie = serie.set('id', id);
        }
        if (serie.name === 'Sum of value') {
            const name = `${(0,_utils_common__WEBPACK_IMPORTED_MODULE_4__.capitalizeString)(statisticType)} of value`;
            serie = serie.set('name', name);
        }
        return serie;
    });
    const orderByField = (_g = query.orderByFields) === null || _g === void 0 ? void 0 : _g[0];
    if (orderByField === null || orderByField === void 0 ? void 0 : orderByField.includes('FieldName')) {
        query = query.set('orderByFields', [orderByField.replace('FieldName', _constants__WEBPACK_IMPORTED_MODULE_3__.ByFieldSeriesX)]);
    }
    else if (orderByField === null || orderByField === void 0 ? void 0 : orderByField.includes('FieldValue')) {
        query = query.set('orderByFields', [orderByField.replace('FieldValue', _constants__WEBPACK_IMPORTED_MODULE_3__.ByFieldSeriesY)]);
    }
    const newConfig = oldConfig.setIn(['webChart', 'series'], series)
        .setIn(['webChart', 'dataSource', 'query'], query);
    return newConfig;
};
/**
 * For Bar, Line charts, this function will
 * - Move the optional `rotated` property from the series to the chart object if the chart object does not contain this property.
 * - Remove all series' rotated property.
 * @param webChartToUpdate config to update
 * @returns the updated config
 * Used in version 1.12.0
 */
const moveSeriesRotatedPropToChart = (webChartToUpdate) => {
    var _a, _b;
    let updatedWebChart = webChartToUpdate;
    if ((_a = webChartToUpdate === null || webChartToUpdate === void 0 ? void 0 : webChartToUpdate.series) === null || _a === void 0 ? void 0 : _a.length) {
        const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(webChartToUpdate.series);
        const isBarOrLine = seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartTypes.BarSeries || seriesType === jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.WebChartTypes.LineSeries;
        if (isBarOrLine && webChartToUpdate.rotated === undefined) {
            // if the chart rotated property is not set, set it using the first series' rotated property or use the default value
            const rotated = (_b = webChartToUpdate.series[0].rotated) !== null && _b !== void 0 ? _b : false;
            updatedWebChart = updatedWebChart.set('rotated', rotated);
            const series = updatedWebChart.series.map((serie) => {
                if (serie.rotated !== undefined) {
                    serie = serie.without('rotated');
                }
                return serie;
            });
            updatedWebChart = updatedWebChart.set('series', series);
        }
    }
    return updatedWebChart;
};
class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.BaseVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [{
                version: '1.6.0',
                description: 'Rename `multipleBarType` to `stackedType`',
                upgrader: (oldConfig) => {
                    var _a;
                    if (!oldConfig)
                        return oldConfig;
                    let series = (_a = oldConfig.webChart) === null || _a === void 0 ? void 0 : _a.series;
                    if (!(series === null || series === void 0 ? void 0 : series.length))
                        return oldConfig;
                    series = series.map((serie) => {
                        serie = serie.set('stackedType', serie.multipleBarType);
                        serie = serie.without('multipleBarType');
                        return serie;
                    });
                    const newConfig = oldConfig.setIn(['webChart', 'series'], series);
                    return newConfig;
                }
            }, {
                version: '1.7.0',
                description: 'Use the `numericField` as the `id` of serie, build the `query` in the `series` as a data source',
                upgrader: (oldConfig) => {
                    var _a;
                    if (!oldConfig)
                        return oldConfig;
                    let series = (_a = oldConfig.webChart) === null || _a === void 0 ? void 0 : _a.series;
                    if (!(series === null || series === void 0 ? void 0 : series.length))
                        return oldConfig;
                    series = setSeriesIdWithNumericField(series);
                    const query = buildUniqueQuery(series);
                    series = series.map(serie => jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable.without(serie, 'query'));
                    const dataSource = { query };
                    const newConfig = oldConfig.setIn(['webChart', 'series'], series)
                        .setIn(['webChart', 'dataSource'], dataSource);
                    return newConfig;
                }
            }, {
                version: '1.8.0',
                description: '',
                upgrader: (oldConfig) => {
                    return oldConfig;
                }
            }, {
                version: '1.9.0',
                description: '',
                upgrader: (oldConfig) => {
                    return oldConfig;
                }
            }, {
                version: '1.10.0',
                description: 'Upgrade `config.colorMatch` to `series[0].slices` for pie chart.',
                upgrader: (oldConfig) => {
                    let newConfig = upgradeColorMatch(oldConfig);
                    newConfig = upgradeByField(newConfig);
                    return newConfig;
                }
            }, {
                version: '1.11.0',
                description: '',
                upgrader: (oldConfig) => {
                    return oldConfig;
                }
            }, {
                version: '1.12.0',
                description: 'Upgrade web-chart version and upgrade the numeric type in the slice id of the pie chart to a string type, feature layer data source only supports the latter.',
                upgrader: (oldConfig) => {
                    var _a;
                    if (!oldConfig || !oldConfig.webChart)
                        return oldConfig;
                    //upgrade to web-chart version 6.2.1
                    let newConfig = oldConfig.setIn(['webChart', 'version'], '6.2.1');
                    //move series rotated to web-chart level
                    const webChart = moveSeriesRotatedPropToChart(newConfig.webChart);
                    newConfig = newConfig.set('webChart', webChart);
                    const series = (_a = newConfig.webChart) === null || _a === void 0 ? void 0 : _a.series;
                    if (!(series === null || series === void 0 ? void 0 : series.length))
                        return newConfig;
                    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(series);
                    if (seriesType !== 'pieSeries')
                        return newConfig;
                    //upgrade sliceGrouping of pie series
                    let serie = series[0];
                    let sliceGrouping = serie.sliceGrouping;
                    sliceGrouping = sliceGrouping.set('sliceId', _constants__WEBPACK_IMPORTED_MODULE_3__.PieSliceGroupingSliceId).set('label', sliceGrouping.groupName);
                    sliceGrouping = sliceGrouping.without('groupName');
                    serie = serie.set('sliceGrouping', sliceGrouping);
                    //upgrade the sliceId of pie slices from numeric type to string type
                    const pieSlices = serie.slices;
                    if (pieSlices === null || pieSlices === void 0 ? void 0 : pieSlices.length) {
                        const slices = pieSlices.map((slice) => {
                            if (typeof slice.sliceId === 'number') {
                                slice = slice.set('sliceId', slice.sliceId + '');
                            }
                            return slice;
                        });
                        serie = serie.set('slices', slices);
                    }
                    // `series.slices` can customize the color of each pie slice
                    // it is not necessary to set the `colorType` to `colorMatch`, it will read the layer rendering color and cause unexpected changes
                    if (serie.colorType === 'colorMatch') {
                        serie = serie.set('colorType', 'singleColor');
                    }
                    newConfig = newConfig.setIn(['webChart', 'series', '0'], serie);
                    return newConfig;
                }
            }, {
                version: '1.13.0',
                description: 'Upgrade series dataTooltipVisible to true, sortLabelsBy to originalValue, support max-length for the label of pie legend',
                upgrader: (oldConfig) => {
                    var _a;
                    if (!oldConfig)
                        return oldConfig;
                    let series = (_a = oldConfig.webChart) === null || _a === void 0 ? void 0 : _a.series;
                    if (!(series === null || series === void 0 ? void 0 : series.length))
                        return oldConfig;
                    series = series.map((serie) => {
                        serie = serie.set('dataTooltipVisible', true);
                        return serie;
                    });
                    let newConfig = oldConfig.setIn(['webChart', 'series'], series).setIn(['webChart', 'sortLabelsBy'], 'originalValue');
                    const seriesType = (0,jimu_ui_advanced_chart__WEBPACK_IMPORTED_MODULE_1__.getSeriesType)(series);
                    if (seriesType === 'pieSeries' && newConfig.webChart.legend) {
                        let legend = newConfig.webChart.legend;
                        legend = legend.set('labelMaxWidth', _utils_default__WEBPACK_IMPORTED_MODULE_6__.DefaultPieLegendLabelMaxWidth);
                        newConfig = newConfig.setIn(['webChart', 'legend'], legend);
                    }
                    return newConfig;
                }
            }];
    }
}
const versionManager = new VersionManager();


/***/ }),

/***/ "./jimu-icons/outlined/editor/trash-check.tsx":
/*!****************************************************!*\
  !*** ./jimu-icons/outlined/editor/trash-check.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrashCheckOutlined: () => (/* binding */ TrashCheckOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/trash-check.svg */ "./jimu-icons/svg/outlined/editor/trash-check.svg");
/* harmony import */ var _svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const TrashCheckOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/zoom-in.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/editor/zoom-in.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomInOutlined: () => (/* binding */ ZoomInOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_zoom_in_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/zoom-in.svg */ "./jimu-icons/svg/outlined/editor/zoom-in.svg");
/* harmony import */ var _svg_outlined_editor_zoom_in_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_zoom_in_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ZoomInOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_zoom_in_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/gis/select-rectangle.tsx":
/*!******************************************************!*\
  !*** ./jimu-icons/outlined/gis/select-rectangle.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectRectangleOutlined: () => (/* binding */ SelectRectangleOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_gis_select_rectangle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/gis/select-rectangle.svg */ "./jimu-icons/svg/outlined/gis/select-rectangle.svg");
/* harmony import */ var _svg_outlined_gis_select_rectangle_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_gis_select_rectangle_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SelectRectangleOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_gis_select_rectangle_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


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

/***/ "jimu-ui/advanced/chart":
/*!*****************************************!*\
  !*** external "jimu-ui/advanced/chart" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_chart__;

/***/ }),

/***/ "./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/config.json":
/*!*******************************************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/chart/feature-layer-chart/config.json ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"webChart":{"version":"7.3.1","id":"widget_8-column","type":"chart","sortLabelsBy":"originalValue","rotated":false,"series":[{"type":"barSeries","id":"FID","name":"FID","x":"Year","y":"count_of_FID","colorType":"singleColor","stackedType":"sideBySide","fillSymbol":{"type":"esriSFS","style":"esriSFSSolid","color":[94,143,208,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[130,130,130,255],"width":0}},"dataLabels":{"type":"chartText","visible":false,"content":{"type":"esriTS","color":[54,54,54,255],"font":{"family":"Avenir Next","size":10,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","verticalAlignment":"top"}},"rotated":false,"dataTooltipVisible":true,"query":{"groupByFieldsForStatistics":["Year"],"outStatistics":[{"statisticType":"count","onStatisticField":"FID","outStatisticFieldName":"count_of_FID"}],"orderByFields":["Year ASC"]}}],"axes":[{"type":"chartAxis","visible":true,"isLogarithmic":false,"title":{"type":"chartText","visible":false,"content":{"type":"esriTS","color":[24,24,24,255],"font":{"family":"Avenir Next","size":14,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","verticalAlignment":"middle"}},"labels":{"type":"chartText","visible":true,"content":{"type":"esriTS","color":[68,68,68,255],"font":{"family":"Avenir Next","size":14,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","verticalAlignment":"middle"}},"valueFormat":{"type":"category","characterLimit":11},"lineSymbol":{"type":"esriSLS","style":"esriSLSSolid","color":[139,139,139,255],"width":1},"grid":{"type":"esriSLS","style":"esriSLSDash","color":[213,213,213,255],"width":0}},{"type":"chartAxis","visible":true,"isLogarithmic":false,"title":{"type":"chartText","visible":false,"content":{"type":"esriTS","color":[24,24,24,255],"font":{"family":"Avenir Next","size":14,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","verticalAlignment":"middle"}},"labels":{"type":"chartText","visible":true,"content":{"type":"esriTS","color":[68,68,68,255],"font":{"family":"Avenir Next","size":14,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","verticalAlignment":"middle"}},"valueFormat":{"type":"number","intlOptions":{"style":"decimal","useGrouping":true,"minimumFractionDigits":0,"maximumFractionDigits":0}},"lineSymbol":{"type":"esriSLS","style":"esriSLSSolid","color":[139,139,139,255],"width":1},"grid":{"type":"esriSLS","style":"esriSLSDash","color":[213,213,213,255],"width":0}}],"background":[0,0,0,0],"title":{"type":"chartText","visible":true,"content":{"type":"esriTS","color":[0,0,0,255],"font":{"family":"Avenir Next","size":24,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","text":""}},"footer":{"type":"chartText","visible":true,"content":{"type":"esriTS","color":[24,24,24,255],"font":{"family":"Avenir Next","size":14,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","text":""}},"legend":{"type":"chartLegend","visible":false,"title":{"type":"chartText","visible":true,"content":{"type":"esriTS","color":[24,24,24,255],"font":{"family":"Avenir Next","size":20,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","text":""}},"body":{"type":"esriTS","color":[24,24,24,255],"font":{"family":"Avenir Next","size":14,"style":"normal","weight":"normal","decoration":"none"},"horizontalAlignment":"center","text":""},"position":"right"}}}');

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************************!*\
  !*** ./extensions/widgets/common/chart/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../version-manager */ "./extensions/widgets/common/chart/src/version-manager.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./extensions/widgets/common/chart/src/runtime/state/index.tsx");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart */ "./extensions/widgets/common/chart/src/runtime/chart/index.tsx");




const Widget = (props) => {
    const { outputDataSources, useDataSources, config, id, enableDataAction, onInitDragHandler } = props;
    const webChart = config === null || config === void 0 ? void 0 : config.webChart;
    const tools = config === null || config === void 0 ? void 0 : config.tools;
    const defaultTemplateType = config === null || config === void 0 ? void 0 : config._templateType;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'jimu-widget widget-chart' },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_state__WEBPACK_IMPORTED_MODULE_2__.ChartRuntimeStateProvider, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_chart__WEBPACK_IMPORTED_MODULE_3__["default"], { widgetId: id, tools: tools, webChart: webChart, useDataSource: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0], enableDataAction: enableDataAction, onInitDragHandler: onInitDragHandler, defaultTemplateType: defaultTemplateType, outputDataSourceId: outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources[0] }))));
};
Widget.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_1__.versionManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vY2hhcnQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlTyxNQUFNLFlBQVksR0FBRztJQUMxQixTQUFTLEVBQUUsWUFBWTtDQUN4QjtBQTJCRCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsbUNBQW1CO0lBQ25CLG1DQUFtQjtBQUNyQixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzZFO0FBRXZFLE1BQU0sY0FBYyxHQUFHLE1BQU07QUFDN0IsTUFBTSxtQkFBbUIsR0FBRyxNQUFNO0FBQ2xDLE1BQU0sY0FBYyxHQUFHLE9BQU87QUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxPQUFPO0FBQ25DLE1BQU0sYUFBYSxHQUFHLEVBQUU7QUFDeEIsTUFBTSxhQUFhLEdBQUcsY0FBYztBQUNwQyxNQUFNLHNCQUFzQixHQUFHLFVBQVU7QUFDekMsTUFBTSwyQkFBMkIsR0FBRyxXQUFXO0FBQy9DLE1BQU0sc0JBQXNCLEdBQUcsVUFBVTtBQUN6QyxNQUFNLDJCQUEyQixHQUFHLFdBQVc7QUFDL0MsTUFBTSxtQkFBbUIsR0FBRyxPQUFPO0FBQ25DLE1BQU0sd0JBQXdCLEdBQUcsT0FBTztBQUN4QyxNQUFNLHVCQUF1QixH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LEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxFQUNsQixhQUFhLEVBQUUsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFHLENBQUMsQ0FBQyxFQUNsQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFDbEMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQ3BDLG1CQUFtQixFQUFFLG1CQUFtQixFQUN4QyxrQkFBa0IsRUFBRSxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRyxDQUFDLENBQUMsR0FDMUMsQ0FDd0IsQ0FDeEIsQ0FDUDtBQUNILENBQUM7QUFFRCxNQUFNLENBQUMsY0FBYyxHQUFHLDREQUFjO0FBRXRDLGlFQUFlLE1BQU07QUFFYixTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9hcmVhLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvYmFyLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvY29sdW1uLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvZG9udXQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9oaXN0b2dyYW0uc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvcGllLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvc2NhdHRlci5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL3Ntb290aC1hcmVhLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvc21vb3RoLWxpbmUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9zdGFja2VkLWJhci5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL3N0YWNrZWQtY29sdW1uLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvc3RhY2tlZDEwMC1iYXIuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9zdGFja2VkMTAwLWNvbHVtbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci90cmFzaC1jaGVjay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci96b29tLWluLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZ2lzL3NlbGVjdC1yZWN0YW5nbGUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9jb21wb25lbnRzL2NvbXBvbmVudHMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvY29tcG9uZW50cy9wbGFjZWhvbGRlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvY29tcG9uZW50cy9yb290LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9jb21wb25lbnRzL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2RhdGEtc291cmNlL2ZlYXR1cmUtbGF5ZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2RhdGEtc291cmNlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS9pbmxpbmUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2RhdGEtc291cmNlL29yaWdpbmFsLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS9vdXRwdXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2RhdGEtc291cmNlL3VzZS1mZXRjaC1yZWNvcmRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2RhdGEtc291cmNlL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2ZlYXR1cmUtbGF5ZXItY2hhcnQvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2ZlYXR1cmUtbGF5ZXItY2hhcnQvd2l0aC1mZWF0dXJlLWxheWVyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvY29udmVydC11dGlscy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvY29udmVydC11dGlscy9oaXN0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvY29udmVydC11dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9pbmxpbmUtZGF0YS1jaGFydC9jb252ZXJ0LXV0aWxzL3BpZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9pbmxpbmUtZGF0YS1jaGFydC9jb252ZXJ0LXV0aWxzL3NjYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvY29udmVydC11dGlscy9zZXJpYWwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L3dpdGgtaW5saW5lLWRhdGEudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L3Rvb2xzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC90b29scy9yYW5nZS1jdXJzb3ItbW9kZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvdG9vbHMvc2VsZWN0aW9uLXpvb20udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L3V0aWxzL25vcm1hbGl6ZS1zZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvdXRpbHMvdXNlLXNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9zdGF0ZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3V0aWxzL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvdXRpbHMvY29tbW9uL3NjaGVtYS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvdXRpbHMvY29tbW9uL3NlcmlhbC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvdXRpbHMvZGVmYXVsdC9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvdmVyc2lvbi1tYW5hZ2VyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci90cmFzaC1jaGVjay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3pvb20taW4udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2dpcy9zZWxlY3QtcmVjdGFuZ2xlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvY2hhcnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGQ9XFxcIk0yNCA4M3YtOGgxNnY4ek0yNCAxNDR2LThoMTZ2OHpNMjQgMjA0di04aDE2djh6TTI0IDI2NnYtOGgxNnY4ek0yNCAzMjd2LThoMTZ2OHpNMTM1IDM3NnYtOGgyNHY4ek04NSAzNzZ2LThoMjR2OHpNMzMgMzc2di04aDI0djh6TTE4NSAzNzZ2LThoMjR2OHpNMjM3IDM3NnYtOGgyNHY4ek0yODkgMzc2di04aDI0djh6TTM0MSAzNzZ2LThoMjR2OHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zNzYgMzU0LjUwMXYuOTk5aC0yNC41djRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtMjJoLjk5OHYzMjcuMDAxelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJtMTQ3LjE2NyAyMzYtNTEuMDgzLTI4LjVMNDUgMjQ5LjV2NDQuMzI3bDUwLjczNi00Ni40IDUwLjk5MyAyOC45NDggNTAuMjQ4LTUxLjE2OSA1MS44NzEgMzcuODQzIDUwLjUzLTY0LjkzMkwzNTEgMjMzLjAxNlYxNzlsLTUwLjU4My0yOC41LTUxLjA4MyA2Mi01Mi4wODUtNTl6TTQ1IDM0Mi45NzR2LTQyLjM2Nmw1MS40My00Ny4wMzUgNTEuMTc1IDI5LjA1MiA0OS45MTUtNTAuODMgNTIuMyAzOC4xNTYgNTAuNjM1LTY1LjA2OEwzNTEgMjM5LjA1NXY0Mi40NDNsLTUxLjg0Mi0xOS45Ny01MC4zODIgNTkuMjY1LTUxLjU1Mi0yOS42OTQtNTAuNTIgMzAuMjYzLTUxLjExLTEwLjAwNXptMCA1Ljg5OXY1LjYyN2gzMDZ2LTY3LjY0M2wtNTAuMzI1LTE5LjM4NS01MC43ODMgNTkuNzM1LTUyLjYxOC0zMC4zMDYtNDkuNjQ0IDI5LjczNy01MS4wNTctOS45OTV6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0zMjYgNTh2MTJINDVWNTh6TTI1OC40NzMgNzN2MTJINDVWNzN6TTIwNC4wMTUgODh2MTJINDVWODh6TTE1OSAxMTl2MTJINDV2LTEyek0xMzEuNjA1IDEzNHYxMkg0NXYtMTJ6TTEwOS41MTIgMTQ5djEySDQ1di0xMnpNMTk1IDE4MHYxMkg0NXYtMTJ6TTE1OC45NTMgMTk1djEySDQ1di0xMnpNMTI5Ljg4NCAyMTB2MTJINDV2LTEyek0yNDUgMjQxdjEySDQ1di0xMnpNMTk2LjkzOCAyNTZ2MTJINDV2LTEyek0xNTguMTc4IDI3MXYxMkg0NXYtMTJ6TTE3NCAzMDJ2MTJINDV2LTEyek0xNDMgMzE3djEySDQ1di0xMnpNMTE4IDMzMnYxMkg0NXYtMTJ6TTI0IDgzdi04aDE2djh6TTI0IDE0NHYtOGgxNnY4ek0yNCAyMDR2LThoMTZ2OHpNMjQgMjY2di04aDE2djh6TTI0IDMyN3YtOGgxNnY4ek0xMzUgMzc2di04aDI0djh6TTg1IDM3NnYtOGgyNHY4ek0zMyAzNzZ2LThoMjR2OHpNMTg1IDM3NnYtOGgyNHY4ek0yMzcgMzc2di04aDI0djh6TTI4OSAzNzZ2LThoMjR2OHpNMzQxIDM3NnYtOGgyNHY4elxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTM3NiAzNTQuNTAxdi45OTloLTc1LjV2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di0yMmguOTk4djMyNy4wMDF6bS0yNC41Ljk5OXY0aC0xdi00elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMjQgMTA3di04aDE2djh6TTI0IDU2di04aDE2djh6TTI0IDE1OHYtOGgxNnY4ek0yNCAyMDl2LThoMTZ2OHpNMjQgMjYxdi04aDE2djh6TTI0IDMxMXYtOGgxNnY4ek0yNCAzNjJ2LThoMTZ2OHpNMTI4IDM3NnYtOGgyNHY4ek03MiAzNzZ2LThoMjR2OHpNMTg5IDM3NnYtOGgyNHY4ek0yNTAgMzc2di04aDI0djh6TTMxMSAzNzZ2LThoMjR2OHpNNTggNzdoMTJ2MjgxSDU4ek03MyAxNDQuNTI3aDEyVjM1OEg3M3pNODggMTk4Ljk4NGgxMlYzNThIODh6TTExOSAyNDRoMTJ2MTE0aC0xMnpNMTM0IDI3MS4zOTVoMTJWMzU4aC0xMnpNMTQ5IDI5My40ODhoMTJWMzU4aC0xMnpNMTgwIDIwOGgxMnYxNTBoLTEyek0xOTUgMjQ0LjA0NmgxMnYxMTMuOTUzaC0xMnpNMjEwIDI3My4xMTZoMTJWMzU4aC0xMnpNMjQxIDE1OGgxMnYyMDBoLTEyek0yNTYgMjA2LjA2MmgxMlYzNThoLTEyek0yNzEgMjQ0LjgyMmgxMlYzNThoLTEyek0zMDIgMjI5aDEydjEyOWgtMTJ6TTMxNyAyNjBoMTJ2OThoLTEyek0zMzIgMjg1aDEydjczaC0xMnpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk00OSAyNGgtMXYyOGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoMjJ2LS45OThINDl6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTIwMCAzNTMuODFjNDAuNDE0IDAgNzcuMTg4LTE1LjU4NyAxMDQuNjM3LTQxLjA3N2wtNDUuODQ5LTQ1Ljg0OGMtMTUuNjgzIDEzLjc5Ni0zNi4yNTggMjIuMTYzLTU4Ljc4OCAyMi4xNjMtNDkuMTggMC04OS4wNDgtMzkuODY4LTg5LjA0OC04OS4wNDggMC00Ni40NTEgMzUuNTY3LTg0LjU5NSA4MC45NTMtODguNjg1VjQ2LjRDMTEwLjcyMSA1MC42MSA0Ni4xOTEgMTE3Ljc2OSA0Ni4xOTEgMjAwYzAgODQuOTQ3IDY4Ljg2MiAxNTMuODEgMTUzLjgwOSAxNTMuODFtMTUzLjYtMTQ1LjcxNWMtMS44NDIgMzUuNTMzLTE1Ljc0NCA2Ny44NzYtMzcuNjkgOTMuMDE0bC00NS45NzctNDUuOTc3YzEwLjQwMS0xMy4xNzYgMTcuMTU5LTI5LjM2MSAxOC43NTItNDcuMDM3em0uMjA5LTcuOTU2LjAwMS0uMTM5LS4wMDEtLjEzOXptLS4yMDktOC4yMzRDMzQ5LjUzIDExMy40MDIgMjg2LjU5OCA1MC40NzEgMjA4LjA5NSA0Ni40djY0LjkxNWM0Mi43MiAzLjg1IDc2Ljc0IDM3Ljg3IDgwLjU5IDgwLjU5em0tODAuNzQzIDcuOTQ0Yy0uMDgxLTQwLjE2OC0zMi42NjktNzIuNzA2LTcyLjg1Ny03Mi43MDYtNDAuMjM4IDAtNzIuODU3IDMyLjYxOS03Mi44NTcgNzIuODU3czMyLjYxOSA3Mi44NTcgNzIuODU3IDcyLjg1N2M0MC4xODggMCA3Mi43NzYtMzIuNTM4IDcyLjg1Ny03Mi43MDZ6TTIwMCAzNzBjOTMuODg4IDAgMTcwLTc2LjExMiAxNzAtMTcwUzI5My44ODggMzAgMjAwIDMwIDMwIDEwNi4xMTIgMzAgMjAwczc2LjExMiAxNzAgMTcwIDE3MFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48ZyBmaWxsPVxcXCIjMDAwXFxcIiBjbGlwLXBhdGg9XFxcInVybCgjYSlcXFwiPjxwYXRoIGQ9XFxcIk0yNCA4M3YtOGgxNnY4ek0yNCAxNDR2LThoMTZ2OHpNMjQgMjA0di04aDE2djh6TTI0IDI2NnYtOGgxNnY4ek0yNCAzMjd2LThoMTZ2OHpNMTM1IDM3NnYtOGgyNHY4ek04NSAzNzZ2LThoMjR2OHpNMzMgMzc2di04aDI0djh6TTE4NSAzNzZ2LThoMjR2OHpNMjM3IDM3NnYtOGgyNHY4ek0yODkgMzc2di04aDI0djh6TTM0MSAzNzZ2LThoMjR2OHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zNzYgMzU0LjAwMVYzNTVoLTI0LjV2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0VjUwaC00di0xaDRWMjdoLjk5OHYzMjcuMDAxelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTE5NyA4OGgyOHYxNC41MThjLTEuMTg5LTEuODI0LTIuMzczLTMuMjk3LTMuNTk2LTQuNDdDMjE3LjkyOSA5NC43MTkgMjE0LjM1MyA5NCAyMTAuNSA5NGMtNC40MTYgMC04LjM3Mi45NjgtMTIuMTc3IDQuNDYzLS40NDUuNDA5LS44ODYuODUtMS4zMjMgMS4zMjZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIxNy4yNTIgMTAyLjM4YzIuMTUgMi4wNiA0LjU2OSA1LjkxNSA3Ljc0OCAxMy4yNDFWMzU1aC0yOFYxMTAuMjQzYzEuOTc4LTMuNTI1IDMuNzI0LTUuODM5IDUuMzgyLTcuMzYyIDIuNDIyLTIuMjI0IDQuNzgzLTIuODgxIDguMTE4LTIuODgxIDIuODk3IDAgNC43NTguNDY5IDYuNzUyIDIuMzhNMTM5IDE4NWgyMy40NjljLTIuMzE5IDYuODQ2LTQuODAzIDE0LjIwNC03LjQ3MiAyMi4xMWwtMi4zMzkgNi45M2MtNC4yMjUgMTIuNTEyLTguODE5IDIzLjkxNS0xMy42NTggMzQuM3pNMTU4LjM0MiAyMTUuOTZjLTUuODQ1IDE3LjMxLTEyLjM5NyAzMi41NjQtMTkuMzQyIDQ1Ljk4NVYzNTVoMjhWMTkwLjMyOWEzMTE2Ny44NCAzMTE2Ny44NCAwIDAgMC02LjQ3OSAxOS4xNzZsLS4wMDEuMDAzek0yNTQgMjAwLjUxOWMtNC43ODQtMTQuOS04Ljg5LTI3LjYzNS0xMi40NjMtMzguNTE5SDIyNnYxOTNoMjh6TTI0Ny44NTIgMTYyQTQ3MDQuNTMgNDcwNC41MyAwIDAgMSAyNTQgMTgwLjkyOVYxNjJ6TTI1NSAyMjloOC40OTdjNC43NzEgMTIuNDEyIDExLjQwMiAyNi41MTUgMTkuNTAzIDQwLjY1MVYzNTVoLTI4ek0yNjkuOTM3IDIyOWMzLjQ3NiA4Ljc4NCA3Ljg3OCAxOC4zODggMTMuMDYzIDI4LjIwOFYyMjl6TTI4NCAyNzloNC41NzZhMjg0LjQ3IDI4NC40NyAwIDAgMCAxMS45MzcgMTcuNzQ2QTIzNy42NDIgMjM3LjY0MiAwIDAgMCAzMTIgMzExLjI5VjM1NWgtMjh6TTMwNS4zNTkgMjkzLjIwOGEyNDEuOTkxIDI0MS45OTEgMCAwIDAgNi42NDEgOC42ODNWMjc5aC0xNi4zMzVhMjc0LjgyNCAyNzQuODI0IDAgMCAwIDkuNjk0IDE0LjIwOE0xMzggMzA5aC0yOHY0NmgyOHpNMTA5IDMzOEg4MXYxN2gyOHpNMTk2IDIxNGgtMjh2MTQxaDI4ek0zMTMgMzQzaDI4djEyaC0yOHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJtMTU4LjIxNCAyMDguNTIzLjAwNi0uMDE4YzE2LjMzMS00OC4zNzQgMjUuNjY4LTc2LjAzMiAzMi43MTktOTEuNjc1IDMuNjg1LTguMTc3IDYuNzE4LTEzLjAwMyA5Ljc1Mi0xNS43OSAyLjk5OC0yLjc1MyA2LjAyNC0zLjU0IDkuODA5LTMuNTQgMy4yOTUgMCA1Ljg3MS41NzMgOC40ODIgMy4wNzYgMi42NTUgMi41NDQgNS4zNzQgNy4xMDkgOC44MDkgMTUuMjExIDYuODIxIDE2LjA4NCAxNi4zNTkgNDUuODI1IDMzLjg5OCAxMDAuNTE1bC4wMDEuMDAyLjM0OCAxLjA4NGM2Ljk1MyAyMS42ODEgMjIuNDc2IDUzLjA0NSA0Mi43MDUgODAuNDMyIDIwLjIxNSAyNy4zNjcgNDUuMjEyIDUwLjg3NiA3MS4xNDggNTYuNjY4bC4yMTgtLjk3NmMtMjUuNTY0LTUuNzA4LTUwLjM3NS0yOC45NTctNzAuNTYxLTU2LjI4Ni0yMC4xNzEtMjcuMzA3LTM1LjY0MS01OC41NzUtNDIuNTU4LTgwLjE0M2wtLjM4NS0xLjJjLTE3LjUwNy01NC41ODgtMjcuMDU1LTg0LjM2LTMzLjg5My0xMDAuNDg2LTMuNDQxLTguMTE1LTYuMjI0LTEyLjg0Ni05LjAzOC0xNS41NDMtMi44NTgtMi43NC01LjcxOS0zLjM1NC05LjE3NC0zLjM1NC0zLjk2NSAwLTcuMjU3LjgzOC0xMC40ODUgMy44MDQtMy4xOTIgMi45MzItNi4yOTMgNy45MTgtOS45ODggMTYuMTE2LTcuMDcxIDE1LjY4OC0xNi40MjIgNDMuMzg2LTMyLjcyNiA5MS42ODRsLTIuMjc1IDYuNzM2Yy0zMS4yNjEgOTIuNTgyLTg3LjcyOCAxMzAuMjMxLTExMC4yMDIgMTM4LjY5MmwuMzUyLjkzNmMyMi43Ny04LjU3MyA3OS40NDYtNDYuNDU4IDExMC43OTgtMTM5LjMwOHpcXFwiPjwvcGF0aD48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPVxcXCJhXFxcIj48cGF0aCBmaWxsPVxcXCIjZmZmXFxcIiBkPVxcXCJNMjQgMjdoMzUydjM0OUgyNHpcXFwiPjwvcGF0aD48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGQ9XFxcIk0yNCA4M3YtOGgxNnY4ek0yNCAxNDR2LThoMTZ2OHpNMjQgMjA0di04aDE2djh6TTI0IDI2NnYtOGgxNnY4ek0yNCAzMjd2LThoMTZ2OHpNMTM1IDM3NnYtOGgyNHY4ek04NSAzNzZ2LThoMjR2OHpNMzMgMzc2di04aDI0djh6TTE4NSAzNzZ2LThoMjR2OHpNMjM3IDM3NnYtOGgyNHY4ek0yODkgMzc2di04aDI0djh6TTM0MSAzNzZ2LThoMjR2OHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zNzYgMzU0LjUwMXYuOTk5aC0yNC41djRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtMjJoLjk5OHYzMjcuMDAxelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJtMjk5Ljg4IDIzMi4zNTggNTAuODY2IDI4LjcwNy0uNDkyLjg3LTUwLjEzNC0yOC4yOTMtNTEuMTA3IDYyLjEyOS01MS45MzgtNTguOTMtNDkuODk4IDgyLjMzMS01MS4wNDYtMjguNTI2LTUwLjczNiA2NS4xNjEtLjc5LS42MTQgNTEuMjY0LTY1LjgzOSA1MC45NTQgMjguNDc0IDUwLjEwMi04Mi42NjkgNTIuMDYyIDU5LjA3elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOTZcXFwiIGN5PVxcXCIyOTBcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjQ1XFxcIiBjeT1cXFwiMzU1XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNDdcXFwiIGN5PVxcXCIzMThcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE5N1xcXCIgY3k9XFxcIjIzNlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjQ5XFxcIiBjeT1cXFwiMjk1XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzMDBcXFwiIGN5PVxcXCIyMzRcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjM1MVxcXCIgY3k9XFxcIjI2MlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJtMTk2LjgyNyAxOTQuMzkxIDUyLjIwNiAyMS4wODMgNTAuOTk4LTEzLjUgNTAuNjUzIDIwLjA2MS0uMzY4LjkzLTUwLjM0Ny0xOS45NC01MS4wMDIgMTMuNTAxLTUxLjc5NC0yMC45MTctNTAuMDgzIDY4LjExMy01MC45MzctNDEuOTQ4LTUwLjcxMiA5NC45NjEtLjg4Mi0uNDcxIDUxLjI4OC05Ni4wMzggNTEuMDYzIDQyLjA1MnpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjk2XFxcIiBjeT1cXFwiMjIxXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI0NVxcXCIgY3k9XFxcIjMxNlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTQ3XFxcIiBjeT1cXFwiMjYyXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOTdcXFwiIGN5PVxcXCIxOTVcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjI0OVxcXCIgY3k9XFxcIjIxNlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzAwXFxcIiBjeT1cXFwiMjAyXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzNTFcXFwiIGN5PVxcXCIyMjNcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTM1MC44MSAxMTcuODkyLTUwLjU4MSA0MC4wNjUtNTEuMzA0IDEzLjU4LTUxLjc5MS0zMC44NzUtNTAuMDQ0IDY4LjA2LTUwLjk4My00MS45ODYtNTAuNjkzIDc1LjA0NC0uODI4LS41NiA1MS4zMDgtNzUuOTU1IDUxLjAxNiA0Mi4wMTMgNDkuOTU2LTY3Ljk0IDUyLjIwOSAzMS4xMjUgNTAuNjk2LTEzLjQyIDUwLjQxOS0zOS45MzV6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI5NlxcXCIgY3k9XFxcIjE2NlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNDVcXFwiIGN5PVxcXCIyNDFcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE0N1xcXCIgY3k9XFxcIjIwN1xcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTk3XFxcIiBjeT1cXFwiMTQwXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIyNDlcXFwiIGN5PVxcXCIxNzFcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjMwMFxcXCIgY3k9XFxcIjE1N1xcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzUxXFxcIiBjeT1cXFwiMTE4XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTE5MS45OTUgMjAzLjE4NSAxMjAuNTAxIDEyNC4zODhDMjgyLjUyNCAzNTMuOTgxIDI0My4xOCAzNzAgMjAwLjA5NSAzNzAgMTA2LjE1NCAzNzAgMzAgMjkzLjg0NiAzMCAxOTkuOTA1IDMwIDEwOC42OCAxMDEuODE1IDM0LjIyOCAxOTEuOTk1IDMwek0zNzAgMjA4LjAwNWMtMS45NjEgNDEuODI3LTE5LjAyOSA3OS43MDMtNDUuODcgMTA4LjI5NUwyMTkuMjE5IDIwOC4wMDV6TTIwOC4xOTQgMzBDMjk1LjY5IDM0LjEwMiAzNjUuODk4IDEwNC4zMSAzNzAgMTkxLjgwNkgyMDguMTk0elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjNTI1MjUyXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zNzYgMzU0LjUwMXYuOTk5aC0yNC41djRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtMjJoLjk5OHYzMjcuMDAxek0yNCA3NXY4aDE2di04em0wIDYxdjhoMTZ2LTh6bTAgNjh2LThoMTZ2OHptMCA1NHY4aDE2di04em0wIDY5di04aDE2djh6bTkgNDl2LThoMjR2OHptNTItOHY4aDI0di04em01MCAwdjhoMjR2LTh6bTUwIDB2OGgyNHYtOHptNTIgOHYtOGgyNHY4em01Mi04djhoMjR2LTh6bTUyIDh2LThoMjR2OHptNi0yODdhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZtLTQ4IDE0YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2bS0zMSAzOGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0tMTEzIDQ0YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2bTMwIDI1YTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwbS01OCA0MGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNm0tMzAgNDJhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBtMzggNGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG00NS0zMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG00MS0zNmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNm0tMTMtNThhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZtNjEgMWE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0zOC0zMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG00MC0xNmE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBkPVxcXCJNMjQgODN2LThoMTZ2OHpNMjQgMTQ0di04aDE2djh6TTI0IDIwNHYtOGgxNnY4ek0yNCAyNjZ2LThoMTZ2OHpNMjQgMzI3di04aDE2djh6TTEzNSAzNzZ2LThoMjR2OHpNODUgMzc2di04aDI0djh6TTMzIDM3NnYtOGgyNHY4ek0xODUgMzc2di04aDI0djh6TTIzNyAzNzZ2LThoMjR2OHpNMjg5IDM3NnYtOGgyNHY4ek0zNDEgMzc2di04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1NC41MDF2Ljk5OWgtMjQuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTExOC41NDUgMjIwLjAzMi0yLjIxMy0xLjIzNWEzNCAzNCAwIDAgMC0zOC4xNTkgMy40MjhMNDUgMjQ5LjV2MzAuMjE0YzMuOTg0LTQuNjE4IDguNjU2LTkuMTk4IDEzLjgwNS0xMi45OSAxMC42MzQtNy44MyAyMy44NC0xMi42NDYgMzcuMjM4LTYuNDk2IDI5LjU2NCAxMy41NyA1My45ODEgNS43NjMgNjguMjUxLTcuNTU2IDcuNTAzLTcuMDAzIDE4LjUyMS0xNi43NzEgMzEuMDY4LTIyLjMzMyAxMi42NTktNS42MTEgMjcuMTcxLTcuMDQ2IDQxLjExMyAzLjE0MiAxMi45MzQgOS40NTIgMjcuOTI5IDE4Ljc2NiA0Mi4xMTMgMjMuMzkyIDE0LjIxMSA0LjYzNiAyNi45NDYgNC4zODIgMzYuMjEzLTQuMjA3IDEwLjkxOS0xMC4xMiAyNC45NzEtMTguMjkzIDM2LjE5OS0yMy43NDJWMTc5bC0yNS43NjYtMTQuNTE3Yy0xNC4zNTgtOC4wOS0zMi40NS00LjcxOC00Mi45MyA4LjAwMWwtOS43OTEgMTEuODgzYy0xMi4xNjMgMTQuNzYyLTM0LjY0NCAxNS4xNDUtNDcuMzAzLjgwNi0xMy44NzQtMTUuNzE2LTM5LjAwNy0xMy40NzctNDkuODg1IDQuNDQzbC0xMS4xNTEgMTguMzY3Yy05LjQ5MiAxNS42MzctMjkuNjU0IDIwLjk2MS00NS42MjkgMTIuMDQ5TTQ1IDMzMC44MXYtNDMuMTYxYzQuNDYtNS44NTIgMTAuMjM1LTEyLjA4NiAxNi43Ny0xNi44OTkgOS45NzQtNy4zNDQgMjEuMTg1LTExLjAyOCAzMi4xODctNS45NzggMzEuNDM2IDE0LjQzIDU4LjAxOSA2LjIzNiA3My43NDktOC40NDQgNy40OTctNi45OTcgMTcuOTc5LTE2LjIyOSAyOS42ODItMjEuNDE4IDExLjU5MS01LjEzOCAyNC4wNzktNi4yMDMgMzYuMTM3IDIuNjA4IDEzLjA2NiA5LjU0OSAyOC41NzEgMTkuMjM1IDQzLjUxMiAyNC4xMDkgMTQuOTE0IDQuODY0IDI5LjkyOSA1LjExOCA0MS4xNjItNS4yOTQgOS43OTEtOS4wNzQgMjIuMzIxLTE2LjU3OSAzMi44MDEtMjEuODM0djU4LjE4OWMtMjAuOTU3IDEuMDI2LTYwLjQ1MSA2LjUzMi05NC41OSAyMy4wNjItMTEuNjI3IDUuNjMtMjAuNzg4IDcuNjEyLTI4LjI1NiA3LjQwNy03LjQzLS4yMDQtMTMuMzc3LTIuNTc3LTE4LjU5Ni01Ljk5OC01LjA3NS0zLjMyNi05LjQxNy03LjYwNC0xMy44MTUtMTEuOTM2bC0uNTQ0LS41MzZjLTQuNDk5LTQuNDI5LTkuMTQyLTguOTM0LTE0LjQ5NC0xMS44NzctMi45MTMtMS42MDMtNS43NjQtMi4xNjUtOC41NzktMS44MjYtMi43NjUuMzMzLTUuMyAxLjUxMS03LjY2IDMuMDU4LTIuMzU0IDEuNTQyLTQuNjYzIDMuNTM5LTYuOTY1IDUuNjQ0LS44NDEuNzY5LTEuNjc1IDEuNTQ3LTIuNTE1IDIuMzNsLS4wMDIuMDAyYy0xLjUxNCAxLjQxMi0zLjA1IDIuODQ1LTQuNjk3IDQuMjkyLTUuMDYxIDQuNDQ3LTEwLjY2NiA4LjU2NS0xNy41NzkgMTAuNy02Ljg1NCAyLjExNi0xNS4yMTIgMi4zNDctMjUuODg2LTEuMzcxLTE4LjUwNy02LjQ0Ni0zNC4wMjEtMy41NTctNDUuODUgMi43NTVDNTQuNSAzMjEuODQ5IDQ5LjE0OSAzMjYuMzE3IDQ1IDMzMC44MW0wIDcuODA0VjM1NC41aDMwNnYtNTYuODA3Yy0yMC41MTYgMS4wMzItNTkuMTU4IDYuNDU2LTkyLjQxIDIyLjU1Ny0xMi4xMjMgNS44Ny0yMi4wODcgOC4xMzgtMzAuNTczIDcuOTA1LTguNTIyLS4yMzMtMTUuMzU3LTIuOTg0LTIxLjItNi44MTQtNS41MDItMy42MDYtMTAuMTY1LTguMjAyLTE0LjQ3Ny0xMi40NTJsLS4xODEtLjE3OC0uNDY4LS40NjFjLTQuNTc4LTQuNTA4LTguNzQ4LTguNTAzLTEzLjM5Ni0xMS4wNTktMi4wODctMS4xNDgtMy44OTMtMS40NDUtNS41NzEtMS4yNDMtMS43My4yMDgtMy41MjcuOTcxLTUuNTE4IDIuMjc2LTEuOTk3IDEuMzA5LTQuMDU5IDMuMDc0LTYuMzMgNS4xNTEtLjc2OC43MDItMS41NjggMS40NDgtMi4zOTQgMi4yMThsLS4wMDIuMDAyYy0xLjU1NCAxLjQ0OS0zLjE5OCAyLjk4Mi00Ljg5MiA0LjQ3LTUuMjUxIDQuNjE1LTExLjQ5IDkuMjc4LTE5LjQwNSAxMS43MjItNy45NzQgMi40NjItMTcuNDI5IDIuNjA2LTI5LjAwNS0xLjQyNi0xNy4wOTMtNS45NTQtMzEuMTYyLTMuMjYtNDEuODUgMi40NDUtOC4wOTUgNC4zMTktMTQuMjgxIDEwLjM4Ni0xOC4zMjggMTUuODA4XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGQ9XFxcIk0yNCA4M3YtOGgxNnY4ek0yNCAxNDR2LThoMTZ2OHpNMjQgMjA0di04aDE2djh6TTI0IDI2NnYtOGgxNnY4ek0yNCAzMjd2LThoMTZ2OHpNMTM1IDM3NnYtOGgyNHY4ek04NSAzNzZ2LThoMjR2OHpNMzMgMzc2di04aDI0djh6TTE4NSAzNzZ2LThoMjR2OHpNMjM3IDM3NnYtOGgyNHY4ek0yODkgMzc2di04aDI0djh6TTM0MSAzNzZ2LThoMjR2OHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zNzYgMzU0LjUwMXYuOTk5aC0yNC41djRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtMjJoLjk5OHYzMjcuMDAxelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzI2Ljc5MiAyNDguNjk0Yy0xNS40MjYtOC43MDYtMzQuODc2LTUuMDc5LTQ2LjEyOCA4LjZsLTguMTM3IDkuODkyYy0xMi4zMzIgMTQuOTkxLTM1LjE1MyAxNS4zOC00Ny45ODcuODE3LTEzLjYxOS0xNS40NTItMzguMzE5LTEzLjI1My00OC45OTQgNC4zNjFsLTEyLjA5MSAxOS45NWMtOS4wODEgMTQuOTg0LTI4LjM5OCAyMC4wODUtNDMuNjkzIDExLjUzOC0xMy41OTMtNy41OTctMzAuNjk2LTQuMTMzLTQwLjI2MiA4LjE1NGwtMzQuMTA1IDQzLjgwMS0uNzktLjYxNCAzNC4xMDUtNDMuODAyYzkuODctMTIuNjc2IDI3LjUxNi0xNi4yNDkgNDEuNTQtOC40MTIgMTQuODI1IDguMjg0IDMzLjU0OCAzLjM0IDQyLjM1LTExLjE4M2wxMi4wOS0xOS45NWMxMS4wMjYtMTguMTkxIDM2LjUzNS0yMC40NjIgNTAuNi00LjUwNCAxMi40MjcgMTQuMSAzNC41MjQgMTMuNzI0IDQ2LjQ2NC0uNzkxbDguMTM3LTkuODkyYzExLjU2MS0xNC4wNTUgMzEuNTQ0LTE3Ljc4IDQ3LjM5Mi04LjgzNmwyMy40NjMgMTMuMjQyLS40OTIuODd6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI5NlxcXCIgY3k9XFxcIjMwMFxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNDVcXFwiIGN5PVxcXCIzNTVcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE0N1xcXCIgY3k9XFxcIjMwNlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTk3XFxcIiBjeT1cXFwiMjU4XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIyNDlcXFwiIGN5PVxcXCIyNzhcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjMwMFxcXCIgY3k9XFxcIjI0NVxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzUxXFxcIiBjeT1cXFwiMjYyXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yMjkuOTY5IDIwOC44NTRjLTE5LjI5Ni03Ljc5My00MS40MjEtMS41MTYtNTMuNzQ5IDE1LjI1MWwtMTAuNjYzIDE0LjUwMWMtMTAuMDMxIDEzLjY0Mi0yOS40NiAxNi4wNjItNDIuNTMyIDUuMjk4LTEzLjg5Ni0xMS40NDQtMzQuNzktNy4zMDMtNDMuMjcgOC41NzdsLTM0LjMxNCA2NC4yNTQtLjg4Mi0uNDcxIDM0LjMxNC02NC4yNTRjOC43NzgtMTYuNDM3IDMwLjQwNC0yMC43MjQgNDQuNzg4LTguODc4IDEyLjYyOCAxMC40IDMxLjQgOC4wNjEgNDEuMDkxLTUuMTE5bDEwLjY2Mi0xNC41MDFjMTIuNTk5LTE3LjEzNCAzNS4yMDktMjMuNTUgNTQuOTMtMTUuNTg2bDMuMjQzIDEuMzFhNTAuMDQ2IDUwLjA0NiAwIDAgMCAzMS41NDkgMS45NzVsMTIuNDY3LTMuM2E3MC41IDcwLjUgMCAwIDEgNDMuOTk5IDIuNjA2bDI5LjA4MiAxMS41MTgtLjM2OC45My0yOS4wODItMTEuNTE4YTY5LjUwNyA2OS41MDcgMCAwIDAtNDMuMzc2LTIuNTY5bC0xMi40NjYgMy4zYTUxLjA0NiA1MS4wNDYgMCAwIDEtMzIuMTc5LTIuMDE1elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOTZcXFwiIGN5PVxcXCIyMzlcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjQ1XFxcIiBjeT1cXFwiMzE2XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNDdcXFwiIGN5PVxcXCIyNTBcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE5N1xcXCIgY3k9XFxcIjIwOFxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjQ5XFxcIiBjeT1cXFwiMjEzXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzMDBcXFwiIGN5PVxcXCIyMDZcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjM1MVxcXCIgY3k9XFxcIjIyM1xcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJtMzUwLjg2OCAxMTcuODM4LTIzLjc1NyAyNS44OTNhNzkuNDk3IDc5LjQ5NyAwIDAgMS01MS42MzEgMjUuNDQ4bC0xMS45NTEgMS4wNDhhNDUuNDkgNDUuNDkgMCAwIDEtMjcuMjc1LTYuMjQ0bC02LjAwMi0zLjU3OGMtMTguNzg1LTExLjE5OC00My4wMDMtNi4yOTktNTUuOTU5IDExLjMybC03LjcxMyAxMC40OWMtMTAuNTg3IDE0LjM5OC0zMS4wOTIgMTYuOTUyLTQ0Ljg4NyA1LjU5MS0xMy43MjEtMTEuMjk5LTM0LjE5LTguMzMzLTQ0LjE0IDYuMzk2TDQ1LjQxNCAyNDEuNzhsLS44MjgtLjU2IDMyLjEzOS00Ny41NzhjMTAuMjgtMTUuMjE4IDMxLjQyNy0xOC4yODIgNDUuNjAzLTYuNjA4IDEzLjM1MyAxMC45OTYgMzMuMiA4LjUyNCA0My40NDYtNS40MTFsNy43MTQtMTAuNDljMTMuMjYtMTguMDM1IDM4LjA0OS0yMy4wNDkgNTcuMjc2LTExLjU4Nmw2LjAwMiAzLjU3OGE0NC41MDcgNDQuNTA3IDAgMCAwIDI2LjY3NiA2LjEwNmwxMS45NS0xLjA0OGE3OC41MDIgNzguNTAyIDAgMCAwIDUwLjk4Mi0yNS4xMjhsMjMuNzU4LTI1Ljg5M3pcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjk2XFxcIiBjeT1cXFwiMTgxXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI0NVxcXCIgY3k9XFxcIjI0MVxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTQ3XFxcIiBjeT1cXFwiMTk0XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOTdcXFwiIGN5PVxcXCIxNTVcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjI0OVxcXCIgY3k9XFxcIjE2N1xcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzAwXFxcIiBjeT1cXFwiMTYyXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzNTFcXFwiIGN5PVxcXCIxMThcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDQwMFxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTEzMi41IDY3djIwaC04N1Y2N3pNMTk1LjUgNjd2MjBoLTYxVjY3ek0yNDMuNSA2N3YyMGgtNDZWNjd6TTE4OC41IDEzMHYyMGgtMTQzdi0yMHpNMjU5LjUgMTMwdjIwaC02OXYtMjB6TTMyNS41IDEzMHYyMGgtNjR2LTIwek0xNTguNSAxOTF2MjBoLTExM3YtMjB6TTIzNC41IDE5MXYyMGgtNzR2LTIwek0yODIuNSAxOTF2MjBoLTQ2di0yMHpNMTE0LjUgMjUzdjIwaC02OXYtMjB6TTE1OC41IDI1M3YyMGgtNDJ2LTIwek0xOTcuNSAyNTN2MjBoLTM3di0yMHpNMTAwLjUgMzE1djIwaC01NXYtMjB6TTE2My41IDMxNXYyMGgtNjF2LTIwek0yMjguNSAzMTV2MjBoLTYzdi0yMHpNMjQgNzl2LThoMTZ2OHpNMjQgMTQwdi04aDE2djh6TTI0IDIwMHYtOGgxNnY4ek0yNCAyNjJ2LThoMTZ2OHpNMjQgMzIzdi04aDE2djh6TTEzNSAzNzJ2LThoMjR2OHpNODUgMzcydi04aDI0djh6TTMzIDM3MnYtOGgyNHY4ek0xODUgMzcydi04aDI0djh6TTIzNyAzNzJ2LThoMjR2OHpNMjg5IDM3MnYtOGgyNHY4ek0zNDEgMzcydi04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1MC41MDF2Ljk5OWgtNzUuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXptLTI0LjUuOTk5djRoLTF2LTR6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0yNCAxMDd2LThoMTZ2OHpNMjQgNTZ2LThoMTZ2OHpNMjQgMTU4di04aDE2djh6TTI0IDIwOXYtOGgxNnY4ek0yNCAyNjF2LThoMTZ2OHpNMjQgMzExdi04aDE2djh6TTI0IDM2MnYtOGgxNnY4ek0xMjggMzc2di04aDI0djh6TTY4IDM3NnYtOGgyNHY4ek0xODkgMzc2di04aDI0djh6TTI1MCAzNzZ2LThoMjR2OHpNMzExIDM3NnYtOGgyNHY4ek03MCAyNzFoMjB2ODdINzB6TTcwIDIwOGgyMHY2MUg3MHpNNzAgMTYwaDIwdjQ2SDcwek0xMzAgMjE1aDIwdjE0M2gtMjB6TTEzMCAxNDRoMjB2NjloLTIwek0xMzAgNzhoMjB2NjRoLTIwek0xOTAgMjQ1aDIwdjExM2gtMjB6TTE5MCAxNjloMjB2NzRoLTIwek0xOTAgMTIxaDIwdjQ2aC0yMHpNMjUyIDI4OWgyMHY2OWgtMjB6TTI1MiAyNDVoMjB2NDJoLTIwek0yNTIgMjA2aDIwdjM3aC0yMHpNMzEzIDMwM2gyMHY1NWgtMjB6TTMxMyAyNDBoMjB2NjFoLTIwek0zMTMgMTc1aDIwdjYzaC0yMHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk00OSAyNGgtMXYyOGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoMjJ2LS45OThINDl6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0xMzIgNjR2MjBINDVWNjR6TTE5NSA2NHYyMGgtNjFWNjR6TTM1MCA2NHYyMEgxOTdWNjR6TTE4OCAxMjR2MjBINDV2LTIwek0yODYgMTI0djIwaC05NnYtMjB6TTM1MCAxMjR2MjBoLTYydi0yMHpNMTU4IDE4NHYyMEg0NXYtMjB6TTIzNCAxODR2MjBoLTc0di0yMHpNMzUwIDE4NHYyMEgyMzZ2LTIwek0xMTQgMjQ2djIwSDQ1di0yMHpNMjcyIDI0NnYyMEgxMTZ2LTIwek0zNTAgMjQ2djIwaC03NnYtMjB6TTEwMCAzMDd2MjBINDV2LTIwek0xODQgMzA3djIwaC04MnYtMjB6TTM1MCAzMDd2MjBIMTg2di0yMHpNMjQgNzl2LThoMTZ2OHpNMjQgMTQwdi04aDE2djh6TTI0IDIwMHYtOGgxNnY4ek0yNCAyNjJ2LThoMTZ2OHpNMjQgMzIzdi04aDE2djh6TTEzNSAzNzJ2LThoMjR2OHpNODUgMzcydi04aDI0djh6TTMzIDM3MnYtOGgyNHY4ek0xODUgMzcydi04aDI0djh6TTIzNyAzNzJ2LThoMjR2OHpNMjg5IDM3MnYtOGgyNHY4ek0zNDEgMzcydi04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1MC41MDF2Ljk5OWgtNzUuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXptLTI0LjUuOTk5djRoLTF2LTR6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0yNCAxMDd2LThoMTZ2OHpNMjQgNTZ2LThoMTZ2OHpNMjQgMTU4di04aDE2djh6TTI0IDIwOXYtOGgxNnY4ek0yNCAyNjF2LThoMTZ2OHpNMjQgMzExdi04aDE2djh6TTI0IDM2MnYtOGgxNnY4ek0xMjggMzc2di04aDI0djh6TTY4IDM3NnYtOGgyNHY4ek0xODkgMzc2di04aDI0djh6TTI1MCAzNzZ2LThoMjR2OHpNMzExIDM3NnYtOGgyNHY4ek03MCAyNzFoMjB2ODdINzB6TTcwIDIwOGgyMHY2MUg3MHpNNzAgNzJoMjB2MTM0SDcwek0xMzAgMjE1aDIwdjE0M2gtMjB6TTEzMCAxMTdoMjB2OTZoLTIwek0xMzAgNzJoMjB2NDNoLTIwek0xOTAgMjQ1aDIwdjExM2gtMjB6TTE5MCAxNjloMjB2NzRoLTIwek0xOTAgNzJoMjB2OTVoLTIwek0yNTIgMjg5aDIwdjY5aC0yMHpNMjUyIDEzMWgyMHYxNTZoLTIwek0yNTIgNzJoMjB2NTdoLTIwek0zMTMgMzAzaDIwdjU1aC0yMHpNMzEzIDIxOWgyMHY4MmgtMjB6TTMxMyA3MmgyMHYxNDVoLTIwelxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQ5IDI0aC0xdjI4aC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGgyMnYtLjk5OEg0OXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIm0xMS4zNjYgNy44NDEtLjczMi0uNjgyLTMuMTI1IDMuMzQ5LTEuNjM1LTEuODQtLjc0OC42NjQgMi4zNjUgMi42NnpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk00LjUgM1YxLjE2N0M0LjUuNDY5IDUuMjA0IDAgNiAwaDRjLjc5NiAwIDEuNS40NyAxLjUgMS4xNjdWM2g0YS41LjUgMCAwIDEgMCAxSDE0bC0uOTI5IDExLjA3N2ExIDEgMCAwIDEtLjk5Ny45MjNIMy45MjZhMSAxIDAgMCAxLS45OTctLjkyM0wyIDRILjVhLjUuNSAwIDAgMSAwLTF6TTMuMDAzIDRoOS45OTRsLS45MjMgMTFIMy45MjZ6TTEwLjUgMXYyaC01VjFjMC0uMDQgNS0uMDQgNSAwXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMiA2LjVhNS41IDUuNSAwIDEgMS0xMSAwIDUuNSA1LjUgMCAwIDEgMTEgMG0tMS4yNyA0LjkzNmE2LjUgNi41IDAgMSAxIC43MDctLjcwN2w0LjEzNiA0LjEzN2EuNS41IDAgMSAxLS43MDcuNzA3ek03IDZoM3YxSDd2M0g2VjdIM1Y2aDNWM2gxelxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTYgMTFWMEg1djMuNWgxVjFoOXY5SDguNXYxek0uMjUgM2w4LjY0MiA0Ljk2OS0zLjQyMi43MzggMi43MjMgNS40NS0yLjg4NiAxLjY2Ny0yLjcyNC01LjQ1LTIuMzUxIDIuNTk1em0uOTk2IDEuNzI2LS4wMSA1LjY0NCAxLjUyNy0xLjY4NCAyLjkxIDUuNzcxIDEuMTU0LS42NjctMi45MS01Ljc3IDIuMjIyLS40OHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgdHlwZSBTdGF0aXN0aWNEZWZpbml0aW9uLCB0eXBlIEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBTcWxFeHByZXNzaW9uIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgdHlwZSBXZWJDaGFydCBhcyBfV2ViQ2hhcnQsXG4gIHR5cGUgV2ViQ2hhcnRTZXJpZXMgYXMgX1dlYkNoYXJ0U2VyaWVzLFxuICB0eXBlIFdlYkNoYXJ0Q29uZmlnRmllbGRzXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5cbmV4cG9ydCB0eXBlIFdlYkNoYXJ0U2VyaWVzID0gT21pdDxfV2ViQ2hhcnRTZXJpZXMsICdxdWVyeSc+ICYge1xuICBxdWVyeT86IEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zXG4gIC8vYWRkIGZvciBjdXN0b20gYWRkZWQgc3BsaXQtYnkgc2VyaWVzLCB3aWxsIGJlIHJlbW92ZWQgYXQgcnVudGltZVxuICBkZWxldGFibGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIEhpc3RvZ3JhbU92ZXJsYXlzVHlwZSA9ICdtZWFuJyB8ICdtZWRpYW4nIHwgJ3N0YW5kYXJkRGV2aWF0aW9uJyB8ICdjb21wYXJpc29uRGlzdHJpYnV0aW9uJ1xuXG5leHBvcnQgY29uc3QgQ29uZmlnRmllbGRzID0ge1xuICBmaWxsQ29sb3I6ICdfZmlsbENvbG9yJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9yTWF0Y2hlcyB7XG4gIFt2YWx1ZTogc3RyaW5nXToge1xuICAgIF9maWxsQ29sb3I6IGFueVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnREYXRhU291cmNlIHtcbiAgbWFwaWQ/OiBzdHJpbmdcbiAgcXVlcnk6IEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zXG4gIC8qKlxuICAgKiBVc2Ugc2VyaWVzLnNsaWNlcyBpbnN0ZWFkIGZvciBwaWUgY2hhcnRcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGNvbG9yTWF0Y2g/OiB7XG4gICAgY29uZmlnRmllbGRzPzogV2ViQ2hhcnRDb25maWdGaWVsZHNcbiAgICBjb2xvck1hdGNoZXM6IENvbG9yTWF0Y2hlc1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkNoYXJ0IGV4dGVuZHMgT21pdDxfV2ViQ2hhcnQsICdkYXRhU291cmNlJyB8ICdiYWNrZ3JvdW5kJyB8ICdzZXJpZXMnPiB7XG4gIGRhdGFTb3VyY2U6IENoYXJ0RGF0YVNvdXJjZVxuICBiYWNrZ3JvdW5kPzogc3RyaW5nXG4gIHNlcmllczogV2ViQ2hhcnRTZXJpZXNbXVxufVxuXG5leHBvcnQgZW51bSBDYXRlZ29yeVR5cGUge1xuICBCeUdyb3VwID0gJ0JZR1JPVVAnLFxuICBCeUZpZWxkID0gJ0JZRklFTEQnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRUb29scyB7XG4gIGZpbHRlcj86IFNxbEV4cHJlc3Npb25cbiAgY3Vyc29yRW5hYmxlPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBDaGFydFR5cGUgPSAnY29sdW1uJyB8ICdiYXInIHwgJ2xpbmUnIHwgJ2FyZWEnIHwgJ3BpZScgfCAnc2NhdHRlcicgfCAnaGlzdG9ncmFtJ1xuXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVR5cGUgPSAnYmFyJyB8ICdzdGFja2VkLWJhcicgfCAnc3RhY2tlZDEwMC1iYXInXG58ICdjb2x1bW4nIHwgJ3N0YWNrZWQtY29sdW1uJyB8ICdzdGFja2VkMTAwLWNvbHVtbidcbnwgJ2xpbmUnIHwgJ3Ntb290aC1saW5lJ1xufCAnYXJlYScgfCAnc21vb3RoLWFyZWEnXG58ICdwaWUnIHwgJ2RvbnV0J1xufCAnc2NhdHRlcidcbnwgJ2hpc3RvZ3JhbSdcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAvL0l0IGlzIG9ubHkgdXNlZCB3aGVuIGNvbmZpZ3VyaW5nIHRoZSBhcHAgdGVtcGxhdGVcbiAgX3RlbXBsYXRlVHlwZT86IFRlbXBsYXRlVHlwZVxuICB0ZW1wbGF0ZTogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJV2ViQ2hhcnRcbiAgdG9vbHM/OiBDaGFydFRvb2xzXG59XG5cbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cblxuZXhwb3J0IHR5cGUgQ2hhcnRTdGF0aXN0aWNUeXBlID0gT21pdDxTdGF0aXN0aWNEZWZpbml0aW9uWydzdGF0aXN0aWNUeXBlJ10sICdzdGRkZXYnIHwgJ3ZhcicgfCAncGVyY2VudGlsZV9kaXNjJz4gfCAnbm9fYWdncmVnYXRpb24nXG4iLCJpbXBvcnQgeyB0eXBlIENoYXJ0RWxlbWVudExpbWl0LCBMaW1pdEJlaGF2aW9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcblxuZXhwb3J0IGNvbnN0IEJ5RmllbGRTZXJpZXNYID0gJ25hbWUnXG5leHBvcnQgY29uc3QgQnlGaWVsZFNlcmllc1hBbGlhcyA9ICdOYW1lJ1xuZXhwb3J0IGNvbnN0IEJ5RmllbGRTZXJpZXNZID0gJ3ZhbHVlJ1xuZXhwb3J0IGNvbnN0IEJ5RmllbGRTZXJpZXNZQWxpYXMgPSAnVmFsdWUnXG5leHBvcnQgY29uc3QgTWF4Q29sb3JDb3VudCA9IDIwXG5leHBvcnQgY29uc3QgT2JqZWN0SWRGaWVsZCA9ICdfX291dHB1dGlkX18nXG5leHBvcnQgY29uc3QgSGlzdG9ncmFtTWluVmFsdWVGaWVsZCA9ICdtaW5WYWx1ZSdcbmV4cG9ydCBjb25zdCBIaXN0b2dyYW1NaW5WYWx1ZUZpZWxkQWxpYXMgPSAnTWluIHZhbHVlJ1xuZXhwb3J0IGNvbnN0IEhpc3RvZ3JhbU1heFZhbHVlRmllbGQgPSAnbWF4VmFsdWUnXG5leHBvcnQgY29uc3QgSGlzdG9ncmFtTWF4VmFsdWVGaWVsZEFsaWFzID0gJ01heCB2YWx1ZSdcbmV4cG9ydCBjb25zdCBIaXN0b2dyYW1Db3VudEZpZWxkID0gJ2NvdW50J1xuZXhwb3J0IGNvbnN0IEhpc3RvZ3JhbUNvdW50RmllbGRBbGlhcyA9ICdDb3VudCdcbmV4cG9ydCBjb25zdCBQaWVTbGljZUdyb3VwaW5nU2xpY2VJZCA9ICdfX290aGVyLXNsaWNlX18nXG5cbmV4cG9ydCBjb25zdCBNYXhJbml0aWFsU3BsaXRCeVNlcmllc0NvdW50ID0gMjBcbmV4cG9ydCBjb25zdCBTcGxpdEJ5T3RoZXJTZXJpZXNOYW1lID0gJ1VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTcGxpdEJ5T3RoZXJTZXJpZXNWYWx1ZSA9ICdfX290aGVyLXNwbGl0LXZhbHVlX18nXG5cbmV4cG9ydCBjb25zdCBDaGFydExpbWl0czogUGFydGlhbDxDaGFydEVsZW1lbnRMaW1pdD4gPSB7XG4gIC8vIGNoYXJ0J3MgYmVoYXZpb3Igb25jZSB0aGUgbGltaXQgaXMgcmVhY2hlZFxuICBiZWhhdmlvckFmdGVyTGltaXQ6IExpbWl0QmVoYXZpb3IuUmVqZWN0LFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBzZXJpZXMgZm9yIGJhciBjaGFydFxuICBtYXhCYXJDaGFydFNlcmllc0NvdW50OiAxMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIGJhcnMgZm9yIGEgdW5pcXVlIHNlcmllcyBiYXIgY2hhcnRcbiAgbWF4QmFyVW5pcXVlU2VyaWVzQ291bnRUb3RhbDogMTAwMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIGJhcnMgcGVyIHNlcmllcyBmb3IgYSAyIHNlcmllcyBiYXIgY2hhcnRcbiAgbWF4QmFyVHdvU2VyaWVzQ291bnRQZXJTZXJpZXM6IDEwMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIGJhcnMgZm9yIGEgMiBzZXJpZXMgYmFyIGNoYXJ0XG4gIG1heEJhclR3b1Nlcmllc0NvdW50VG90YWw6IDIwMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIGJhcnMgcGVyIHNlcmllcyBmb3IgYSAzKyBzZXJpZXMgYmFyIGNoYXJ0XG4gIG1heEJhclRocmVlUGx1c1Nlcmllc0NvdW50UGVyU2VyaWVzOiAxMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIGJhcnMgZm9yIGEgMysgc2VyaWVzIGJhciBjaGFydFxuICBtYXhCYXJUaHJlZVBsdXNTZXJpZXNDb3VudFRvdGFsOiAyMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBzZXJpZXMgZm9yIGxpbmUgY2hhcnRcbiAgbWF4TGluZUNoYXJ0U2VyaWVzQ291bnQ6IDEwMCxcbiAgLy8gbWF4aW11bSBudW1iZXIgb2YgbWFya2VzIGZvciBhIHVuaXF1ZSBzZXJpZXMgbGluZSBjaGFydFxuICBtYXhMaW5lVW5pcXVlU2VyaWVzQ291bnRUb3RhbDogMTAwMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIG1hcmtlcyBwZXIgc2VyaWVzIGZvciBhIDIgc2VyaWVzIGxpbmUgY2hhcnRcbiAgbWF4TGluZVR3b1Nlcmllc0NvdW50UGVyU2VyaWVzOiAxMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBtYXJrZXMgZm9yIGEgMiBzZXJpZXMgbGluZSBjaGFydFxuICBtYXhMaW5lVHdvU2VyaWVzQ291bnRUb3RhbDogMjAwMCxcbiAgLy8gbWF4aW11bSBudW1iZXIgb2YgbWFya2VzIHBlciBzZXJpZXMgZm9yIGEgMysgc2VyaWVzIGxpbmUgY2hhcnRcbiAgbWF4TGluZVRocmVlUGx1c1Nlcmllc0NvdW50UGVyU2VyaWVzOiAxMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIG1hcmtlcyBmb3IgYSAzKyBzZXJpZXMgbGluZSBjaGFydFxuICBtYXhMaW5lVGhyZWVQbHVzU2VyaWVzQ291bnRUb3RhbDogMjAwMCxcbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgcG9pbnRzIHRvIGJlIHJlbmRlcmVkIGluIGEgc2NhdHRlciBwbG90LlxuICAgKiBJZiB0aGUgbnVtYmVyIG9mIHBvaW50cyBhcmUgbW9yZSwgdGhlbiB0aGUgZGF0YSB3aWxsIGJlIGFnZ3JlZ2F0ZWQgaW5cbiAgICogYSAyRCBncmlkIG9mIHNpemUgc3FydChtYXhTY2F0dGVyUG9pbnRzQWZ0ZXJBZ2dyZWdhdGlvbikgeCBzcXJ0KG1heFNjYXR0ZXJQb2ludHNBZnRlckFnZ3JlZ2F0aW9uKVxuICAgKi9cbiAgbWF4U2NhdHRlclBvaW50c0JlZm9yZUFnZ3JlZ2F0aW9uOiAxMDAwMCxcbiAgLy8gU3BlY2lmaWVzIGhvdyBtYW55IG1heGltdW0gcG9pbnRzIGNhbiBiZSBkaXNwbGF5ZWQgb25jZSB0aGUgc2NhdHRlciBwbG90IGRhdGEgaXMgYWdncmVnYXRlZFxuICBtYXhTY2F0dGVyUG9pbnRzQWZ0ZXJBZ2dyZWdhdGlvbjogMTAwMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIHNsaWNlcyBmb3IgcGllIGNoYXJ0XG4gIG1heFBpZUNoYXJ0U2xpY2VDb3VudFRvdGFsOiAzMDBcbn1cblxuLy8gVGhlIHZlcnNpb24gdXNlZCBmb3IgYXJjZ2lzIGNoYXJ0cyBzcGVjLlxuZXhwb3J0IGNvbnN0IFdlYkNoYXJ0Q3VycmVudFZlcnNpb24gPSAnNy4zLjEnXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBJbW11dGFibGVPYmplY3QsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgdHlwZSBBY3Rpb25Nb2RlcyxcbiAgdHlwZSBCYXJBbmRMaW5lRGF0YUxhYmVsRm9ybWF0Q2FsbGJhY2ssXG4gIHR5cGUgQmFyQW5kTGluZVRvb2x0aXBGb3JtYXRDYWxsYmFjayxcbiAgQmFyQ2hhcnQsXG4gIHR5cGUgQ2hhcnRDb21wb25lbnRFdmVudENhbGxiYWNrcyxcbiAgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCxcbiAgZ2V0U2VyaWVzVHlwZSxcbiAgSGlzdG9ncmFtLFxuICB0eXBlIEhpc3RvZ3JhbUxhYmVsRm9ybWF0Q2FsbGJhY2ssXG4gIHR5cGUgSW5saW5lRGF0YSxcbiAgTGluZUNoYXJ0LFxuICB0eXBlIE5vRGF0YU9wdGlvbnMsXG4gIFBpZUNoYXJ0LFxuICB0eXBlIFBpZUNoYXJ0TGFiZWxGb3JtYXRDYWxsYmFjayxcbiAgdHlwZSBQaWVDaGFydExlZ2VuZFZhbHVlTGFiZWxGb3JtYXRDYWxsYmFjayxcbiAgU2NhdHRlclBsb3QsXG4gIHR5cGUgU2NhdHRlclBsb3RMYWJlbEZvcm1hdENhbGxiYWNrLFxuICB0eXBlIFNlbGVjdGlvbkRhdGEsXG4gIHR5cGUgU2VsZWN0aW9uVGhlbWUsXG4gIHR5cGUgVW5wcml2aWxlZ2VkQ2hhcnQsXG4gIHR5cGUgV2ViQ2hhcnREYXRhRmlsdGVycyxcbiAgdHlwZSBXZWJDaGFydERhdGFTb3VyY2VzLFxuICB0eXBlIFdlYkNoYXJ0TGVnZW5kUG9zaXRpb25zLFxuICB0eXBlIFdlYk1hcFdlYkNoYXJ0LFxuICB0eXBlIFByZVJlbmRlckNhbGxiYWNrXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRDb21wb25lbnRzUHJvcHMgZXh0ZW5kcyBDaGFydENvbXBvbmVudEV2ZW50Q2FsbGJhY2tzIHtcbiAgLyoqXG4gICAqIERlZmluZXMgdGhlIGNsYXNzIG5hbWVzIGFkZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFdoZW4gdGhlIHZlcnNpb24gbnVtYmVyIGNoYW5nZXMsIGZvcmNlIHRoZSBjaGFydCBkYXRhIHRvIGJlIHVwZGF0ZWQgb25jZS5cbiAgICovXG4gIHZlcnNpb24/OiBudW1iZXJcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIGRhdGEgc291cmNlIHVzZWQgYnkgdGhlIGNoYXJ0XG4gICAqL1xuICB0eXBlOiAnaW5saW5lJyB8ICdsYXllcidcbiAgLyoqXG4gICAqIFVzZWQgYnkgYEBhcmNnaXMvY2hhcnRzLWpzYCBwYWNrYWdlLCBib3RoIG11dGFibGUgYW5kIGltbXV0YWJsZSBhcmUgc3VwcG9ydGVkLlxuICAgKi9cbiAgd2ViTWFwV2ViQ2hhcnQ6IFdlYk1hcFdlYkNoYXJ0IHwgSW1tdXRhYmxlT2JqZWN0PFdlYk1hcFdlYkNoYXJ0PlxuICAvKipcbiAgICogUHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZSBkYXRhc291cmNlLiBDYW4gYmUgRmVhdHVyZSBsYXllciBvciB2YW5pbGxhIFBPSk9zLlxuICAgKi9cbiAgZGF0YVNvdXJjZT86IFdlYkNoYXJ0RGF0YVNvdXJjZXNcbiAgLyoqXG4gICogVXNlZCB0byBhcHBseSBydW50aW1lIGZpbHRlcnMgdG8gdGhlIGNoYXJ0J3MgZGF0YSB3aGlsZSBpbiBGZWF0dXJlIExheWVyIG1vZGUuXG4gICovXG4gIHJ1bnRpbWVEYXRhRmlsdGVycz86IFdlYkNoYXJ0RGF0YUZpbHRlcnNcbiAgLyoqXG4gICAqIEEgcHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZSBzZWxlY3Rpb24gdG8gYXBwbHkgb24gdGhlIGNoYXJ0LlxuICAgKiBUaGUgcHJvcGVydGllcyBhcmUgY29uc2lkZXJlZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICAgKiAtIHNlbGVjdGlvbkRhdGEuc2VsZWN0aW9uT0lEczogYW4gYXJyYXkgb2YgT2JqZWN0IElkcyAoZm9yIEZlYXR1cmUgTGF5ZXIpIHJlcHJlc2VudGluZyBhIHNlbGVjdGlvbiB0byBhcHBseSB0byB0aGUgY2hhcnQuXG4gICAqIC0gc2VsZWN0aW9uRGF0YS5zZWxlY3Rpb25JdGVtczogYW4gYXJyYXkgb2YgZGF0YSBpdGVtcyByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gdG8gYXBwbHkgdG8gdGhlIGNoYXJ0LlxuICAgKi9cbiAgc2VsZWN0aW9uRGF0YT86IFNlbGVjdGlvbkRhdGFcbiAgLyoqXG4gICAqIFVzZWQgdG8gcHJvdmlkZSBhIGN1c3RvbWl6ZWQgdGhlbWUgZm9yIHRoZSBzZWxlY3RlZCBhbmQgbm9uIHNlbGVjdGVkIGVsZW1lbnRzLlxuICAgKiBJZiBubyBzdHlsZSBpcyBwcm92aWRlZCBmb3IgdGhlIHNlbGVjdGVkIGVsZW1lbnRzLCBhIGRlZmF1bHQgc2VsZWN0aW9uIGlzIGFwcGxpZWQuXG4gICAqIElmIG5vIHN0eWxlIGlzIHByb3ZpZGVkIGZvciB0aGUgbm9uIHNlbGVjdGVkIGVsZW1lbnRzLCB0aGUgY2hhcnQncyBzdHlsZSBpcyBhcHBsaWVkLlxuICAgKi9cbiAgc2VsZWN0aW9uVGhlbWU/OiBTZWxlY3Rpb25UaGVtZVxuICAvKipcbiAgICogVXNlZCB0byBjdXN0b21pemUgdGhlIGNoYXJ0J3MgbGltaXRzLCBlc3BlY2lhbGx5IHRoZSBtYXhpbXVtIG51bWJlciBvZiBiYXJzIHRvIGJlIGRpc3BsYXllZC5cbiAgICovXG4gIGNoYXJ0TGltaXRzPzogUGFydGlhbDxDaGFydEVsZW1lbnRMaW1pdD5cbiAgLyoqXG4gICAqIFVzZWQgdG8gYnVpbGQvdXBkYXRlIGlubGluZSBkYXRhIHNvdXJjZSBvZiB0aGUgY2hhcnRcbiAgICovXG4gIGlubGluZURhdGE/OiBJbmxpbmVEYXRhPGFueT5cbiAgLyoqXG4gICAqIHVzZWQgdG8gcGVyZm9ybSBxdWVyaWVzIG9yIGNsaWVudC1zaWRlIHF1ZXJpZXMgKGlmIHRoZSB2aWV3IGlzIHByb3ZpZGVkKVxuICAgKi9cbiAgbGF5ZXI/OiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgX19lc3JpLkZlYXR1cmVMYXllclZpZXdcbiAgLyoqXG4gICAqIFVzZWQgdG8gYWNjZXNzIHRvIHRoZSBGZWF0dXJlTGF5ZXJWaWV3IGluc3RhbmNlIGluIG9yZGVyIHRvIHBlcmZvcm0gY2xpZW50LXNpZGUgcXVlcmllcy5cbiAgICogQGNhdGVnb3J5IFB1YmxpY1xuICAgKi9cbiAgdmlldz86IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlld1xuICAvKipcbiAgICogU2V0IHRoZSBjaGFydCdzIG1vZGUgKHpvb20sIHNlbGVjdGlvbiwgbm9uZSlcbiAgICogLSB6b29tOiBhbGxvd3MgdG8gem9vbSBvbiB0aGUgY2hhcnQuIEFsbCBzZWxlY3Rpb24gaXMgZGlzYWJsZWRcbiAgICogLSBtb25vLXNlbGVjdGlvbjogdGhlIHNlbGVjdGlvbiBpcyBlbmFibGVkIGJ1dCBvbmx5IG9uZSBlbGVtZW50IGNhbiBiZSBzZWxlY3RlZC4gWm9vbSBpcyBkaXNhYmxlZFxuICAgKiAtIG11bHRpLXNlbGVjdGlvbjogdGhlIHNlbGVjdGlvbiBpcyBlbmFibGVkIGFuZCBhbGxvd3Mgc2VsZWN0aW5nIG11bHRpcGxlIGVsZW1lbnRzLiBab29tIGlzIGRpc2FibGVkXG4gICAqIC0gbXVsdGktc2VsZWN0aW9uLXdpdGgtY3RybC1rZXk6IHRoZSBzZWxlY3Rpb24gaXMgZW5hYmxlZCBhbmQgYWxsb3dzIHNlbGVjdGluZyBtdWx0aXBsZSBlbGVtZW50cyB3aGVuIHRoZSBjdHJsL2NtZCBrZXkgaXMgcHJlc3NlZC4gWm9vbSBpcyBkaXNhYmxlZFxuICAgKiAtIG5vbmU6IHRoZSB6b29tIGFuZCBzZWxlY3Rpb24gZmVhdHVyZXMgYXJlIGRpc2FibGVkXG4gICAqL1xuICBhY3Rpb25Nb2RlPzogQWN0aW9uTW9kZXNcbiAgLyoqXG4gICAqIG9wdGlvbmFsIGNyZWF0ZSBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY2hhcnQgY29udGFpbmVyLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAgKiBVc2VkIHRvIHNldCB0aGUgY2hhcnQncyBiZWhhdmlvciB3aGVuIGl0cyBkYXRhIHNldCBpcyBlbXB0eVxuICAgICovXG4gIG5vRGF0YU9wdGlvbnM/OiBOb0RhdGFPcHRpb25zXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB3aGVuIGNyZWF0aW5nIG9yIHVwZGF0aW5nIGEgY2hhcnQgY29tcGF0aWJsZSB3aXRoIHRpbWUgYmlubmluZy4gSWYgdGhpcyBvcHRpb24gaXMgYHRydWVgLCB0aGUgc2VyaWVzIHByb3BlcnRpZXNcbiAgICogYHRpbWVJbnRlcnZhbFVuaXRzYCBhbmQgYHRpbWVJbnRlcnZhbFNpemVgIGJlY29tZSBvcHRpb25hbCBhbmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHNldCB0byB2YWx1ZXMgdGhhdCBmaXQgdGhlIGRhdGEgc2V0LlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBOb3RlOiBPbmx5IHZhbGlkIGZvciBgbGluZVNlcmllc2AuXG4gICAqL1xuICBzZXRUaW1lQmlubmluZ0luZm9XaGVuTm90UHJvdmlkZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHRoZSB0b29sdGlwcyBhcmUgcmVuZGVyZWQuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBjYW4gcmV0dXJuIGFuIEhUTUwgc3RyaW5nIGFuZCB0aGUgdGFncyB3aWxsXG4gICAqIGJlIGludGVycHJldGVkIHByb3Blcmx5LlxuICAgKi9cbiAgdG9vbHRpcEZvcm1hdHRlcj86XG4gIHwgUGllQ2hhcnRMYWJlbEZvcm1hdENhbGxiYWNrXG4gIHwgSGlzdG9ncmFtTGFiZWxGb3JtYXRDYWxsYmFja1xuICB8IFNjYXR0ZXJQbG90TGFiZWxGb3JtYXRDYWxsYmFja1xuICB8IEJhckFuZExpbmVUb29sdGlwRm9ybWF0Q2FsbGJhY2tcbiAgZGF0YUxhYmVsRm9ybWF0dGVyPzpcbiAgfCBQaWVDaGFydExhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgfCBIaXN0b2dyYW1MYWJlbEZvcm1hdENhbGxiYWNrXG4gIHwgU2NhdHRlclBsb3RMYWJlbEZvcm1hdENhbGxiYWNrXG4gIHwgQmFyQW5kTGluZURhdGFMYWJlbEZvcm1hdENhbGxiYWNrXG4gIC8qKlxuICAgKiBVc2VkIGJ5IHRoZSBsZWdlbmQgcG9zaXRpb24gY2hhbmdlIGFjdGlvbi5cbiAgICovXG4gIGxlZ2VuZFBvc2l0aW9uPzogV2ViQ2hhcnRMZWdlbmRQb3NpdGlvbnNcbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdXNlZCB0byBmb3JtYXQgdGhlIGxlZ2VuZCB2YWx1ZSBsYWJlbHMuIElmIHRoZSByZXR1cm5lZCBzdHJpbmcgY29udGFpbnMgSFRNTCB0YWdzIHRoZXkgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBzdWNoLlxuICAgKiBJZiBwcm92aWRlZCwgdGhlIGZvcm1hdHRlciB3aWxsIGJlIHVzZWQgaWYgYXQgbGVhc3QgYFdlYkNoYXJ0UGllQ2hhcnRMZWdlbmQuZGlzcGxheU51bWVyaWNWYWx1ZWAgb3IgYFdlYkNoYXJ0UGllQ2hhcnRMZWdlbmQuZGlzcGxheVBlcmNlbnRhZ2VgIGlzIHRydWUuXG4gICAqIE5vdGU6IE9ubHkgdmFsaWQgZm9yIGBwaWVTZXJpZXNgLlxuICAgKi9cbiAgbGVnZW5kVmFsdWVMYWJlbEZvcm1hdHRlcj86IFBpZUNoYXJ0TGVnZW5kVmFsdWVMYWJlbEZvcm1hdENhbGxiYWNrXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBkaXNhYmxlIHRoZSBkZWZhdWx0IHNldHRpbmcgdGhhdCB1c2VzIGRlYm91bmNlIGZ1bmN0aW9ucyB0byBoYW5kbGUgdGhlIHZpc2liaWxpdHkgb2YgbWFya2VycyB0aGF0IGFyZSBvdXRzaWRlIG9mIHRoZSBwbG90dGluZyBhcmVhXG4gICAqIHdoZW4gdGhlIG1pbi9tYXggYm91bmQgY2hhbmdlcyBhbmQvb3Igd2hlbiBhIHpvb20gYWN0aW9uIGlzIHBlcmZvcm1lZCAodmlhIGNoYXJ0IGN1cnNvciBvciBzY3JvbGxiYXIpLCB0byBpbmNyZWFzZSBwZXJmb3JtYW5jZS5cbiAgICogVGhpcyBwcm9wZXJ0eSB3aWxsIGJlIHNldCB3aGVuIHRoZSBjaGFydCBpcyBjcmVhdGVkIGFuZCBjYW5ub3QgYmUgdXBkYXRlZCBhZnRlciB0aGF0LiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgdGhpcyBwcm9wZXJ0eSBzaG91bGQgb25seSBiZSBzZXQgdG8gdHJ1ZSBmb3Igc21hbGwgZGF0YXNldHMuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIE5vdGU6IE9ubHkgdmFsaWQgZm9yIGBsaW5lU2VyaWVzYCBhbmQgYHNjYXR0ZXJTZXJpZXNgLlxuICAgKi9cbiAgaWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBVc2VkIGJ5IHRoZSBsZWdlbmQgdmlzaWJpbGl0eSBjaGFuZ2UgYWN0aW9uLlxuICAgKi9cbiAgbGVnZW5kVmlzaWJpbGl0eT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIGVuYWJsZSBmaWx0ZXIgYnkgc2VsZWN0aW9uXG4gICAqL1xuICBmaWx0ZXJCeVNlbGVjdGlvbj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHVzZWQgdG8gZGlzYWJsZSBhbGwgaW50ZXJhY3Rpb25zIG9uIHRoZSBjaGFydCAobGVnZW5kIGhpdCwgc2VsZWN0aW9uLCB6b29tLi4uKVxuICAgKi9cbiAgZGlzYWJsZUludGVyYWN0aW9ucz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFRvIGVuYWJsZSB0aGUgcmVzcG9uc2l2ZSBmZWF0dXJlcy5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFRvIGF1dG8tZGlzcG9zZSBhIGNoYXJ0IGlmIGEgbmV3IG9uZSBpcyBjcmVhdGVkIGluIHRoZSBzYW1lIGNvbnRhaW5lci5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgYXV0b0Rpc3Bvc2VDaGFydD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFRvIGVuc3VyZSB0aGF0IGNoYXJ0cyBhcmUgYnVpbHQgb25lIGJ5IG9uZS5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgcXVldWVDaGFydENyZWF0aW9uPzogYm9vbGVhblxuICAvKipcbiAgICogVG8gYWN0aXZhdGUgdGhlIGFuaW1hdGlvbnMgb24gdGhlIGNoYXJ0LlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgdXNlQW5pbWF0ZWRDaGFydHM/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUbyBoaWRlIHRoZSBsaWNlbmNlIHdhdGVybWFyay5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgaGlkZUxpY2VuY2VXYXRlcm1hcms/OiBib29sZWFuXG4gIC8qKlxuICAgICogVXNlZCB0byBoaWRlIHRoZSBsb2FkZXIgYW5pbWF0aW9uIChjdXJ0YWluIGFuZCBzcGlubmVyKSwgc2hvd2VkIGJ5IGRlZmF1bHQgYXQgZXZlcnkgdXBkYXRlLlxuICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAqL1xuICBoaWRlTG9hZGVyQW5pbWF0aW9uPzogYm9vbGVhblxuICAvKipcbiAgICAqIEluZGljYXRlcyBpZiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMgbmVlZCB0byBiZSBjb21wdXRlZCB3aGVuZXZlciBhIHNlbGVjdGlvbiBpcyBtYWRlIG9uIG9yIHBhc3NlZCB0byB0aGUgY2hhcnQuXG4gICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgKi9cbiAgcmV0dXJuU2VsZWN0aW9uSW5kZXhlcz86IGJvb2xlYW5cbiAgLyoqXG4gICAgKiBJbmRpY2F0ZXMgaWYgdGhlIG9iamVjdCBpZHMgbmVlZCB0byBiZSBjb21wdXRlZCB3aGVuZXZlciBhIHNlbGVjdGlvbiBpcyBtYWRlIG9uIG9yIHBhc3NlZCB0byB0aGUgY2hhcnQuIE9ubHkgY29uc2lkZXJlZCBmb3IgYSBkYXRhIHNvdXJjZSB1c2luZyBhIGZlYXR1cmUgbGF5ZXIuXG4gICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICovXG4gIHJldHVyblNlbGVjdGlvbk9JRHM/OiBib29sZWFuXG4gIC8qKlxuICAgICogTGlmZWN5Y2xlIGZ1bmN0aW9uIGV4ZWN1dGVkIGFmdGVyIHRoZSBkYXRhIGhhcyBiZWVuIHByb2Nlc3NlZCBhbmQgYmVmb3JlIHRoZSBjaGFydCByZW5kZXJzLiBDYW4gYmUgdXNlZCB0byBhbHRlciB0aGUgY29uZmlnLnNlcmllc1swXS5zbGljZXMgcHJvcGVydHkgZnJvbSBpbnN0YW5jZS5cbiAgICAqIE5vdGU6IG9ubHkgdmFsaWQgZm9yIHBpZSBjaGFydC5cbiAgICovXG4gIGNoYXJ0V2lsbFJlbmRlcj86IFByZVJlbmRlckNhbGxiYWNrXG59XG5cbmV4cG9ydCBjb25zdCBDaGFydENvbXBvbmVudHMgPSBSZWFjdC5mb3J3YXJkUmVmKFxuICAoXG4gICAgcHJvcHM6IENoYXJ0Q29tcG9uZW50c1Byb3BzLFxuICAgIHJlZjogUmVhY3QuUmVmPFVucHJpdmlsZWdlZENoYXJ0PlxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHZlcnNpb24sXG4gICAgICBub0RhdGFPcHRpb25zLFxuICAgICAgdG9vbHRpcEZvcm1hdHRlcixcbiAgICAgIGRhdGFMYWJlbEZvcm1hdHRlcixcbiAgICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyA9IGZhbHNlLFxuICAgICAgYXV0b0Rpc3Bvc2VDaGFydCA9IGZhbHNlLFxuICAgICAgcXVldWVDaGFydENyZWF0aW9uID0gdHJ1ZSxcbiAgICAgIHVzZUFuaW1hdGVkQ2hhcnRzID0gZmFsc2UsXG4gICAgICBoaWRlTGljZW5jZVdhdGVybWFyayA9IHRydWUsXG4gICAgICBpZ25vcmVTbW9vdGhSZW5kZXJpbmdMaW1pdCA9IGZhbHNlLFxuICAgICAgbGVnZW5kVmFsdWVMYWJlbEZvcm1hdHRlcixcbiAgICAgIHNldFRpbWVCaW5uaW5nSW5mb1doZW5Ob3RQcm92aWRlZCxcbiAgICAgIHJldHVyblNlbGVjdGlvbkluZGV4ZXMgPSB0cnVlLFxuICAgICAgcmV0dXJuU2VsZWN0aW9uT0lEcyA9IGZhbHNlLFxuICAgICAgY2hhcnRXaWxsUmVuZGVyLFxuICAgICAgLi4ub3RoZXJzXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBjaGFydFJlZiA9IFJlYWN0LnVzZVJlZjxVbnByaXZpbGVnZWRDaGFydD4obnVsbClcbiAgICBjb25zdCBoYW5kbGVSZWYgPSBob29rcy51c2VGb3JrUmVmKHJlZiwgY2hhcnRSZWYpXG5cbiAgICBjb25zdCBzZXJpZXNUeXBlID0gZ2V0U2VyaWVzVHlwZShwcm9wcy53ZWJNYXBXZWJDaGFydD8uc2VyaWVzIGFzIGFueSlcblxuICAgIGNvbnN0IGdsb2JhbE9wdGlvbnMgPSB7XG4gICAgICBhdXRvRGlzcG9zZUNoYXJ0LFxuICAgICAgZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzLFxuICAgICAgcXVldWVDaGFydENyZWF0aW9uLFxuICAgICAgdXNlQW5pbWF0ZWRDaGFydHMsXG4gICAgICBoaWRlTGljZW5jZVdhdGVybWFyayxcbiAgICAgIHJldHVyblNlbGVjdGlvbkluZGV4ZXMsXG4gICAgICByZXR1cm5TZWxlY3Rpb25PSURzXG4gICAgfVxuXG4gICAgaG9va3MudXNlVXBkYXRlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNoYXJ0UmVmLmN1cnJlbnQucmVmcmVzaCgpXG4gICAgICB9XG4gICAgfSwgW3ZlcnNpb25dKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtzZXJpZXNUeXBlID09PSAnYmFyU2VyaWVzJyAmJiAoXG4gICAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgICByZWY9e2hhbmRsZVJlZn1cbiAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICBkYXRhTGFiZWxGb3JtYXR0ZXI9e1xuICAgICAgICAgICAgICBkYXRhTGFiZWxGb3JtYXR0ZXIgYXMgQmFyQW5kTGluZURhdGFMYWJlbEZvcm1hdENhbGxiYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b29sdGlwRm9ybWF0dGVyPXtcbiAgICAgICAgICAgICAgdG9vbHRpcEZvcm1hdHRlciBhcyBCYXJBbmRMaW5lVG9vbHRpcEZvcm1hdENhbGxiYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub0RhdGFPcHRpb25zPXtub0RhdGFPcHRpb25zfVxuICAgICAgICAgICAgey4uLmdsb2JhbE9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nlcmllc1R5cGUgPT09ICdsaW5lU2VyaWVzJyAmJiAoXG4gICAgICAgICAgPExpbmVDaGFydFxuICAgICAgICAgICAgcmVmPXtoYW5kbGVSZWZ9XG4gICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyPXtcbiAgICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyIGFzIEJhckFuZExpbmVEYXRhTGFiZWxGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9vbHRpcEZvcm1hdHRlcj17XG4gICAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXIgYXMgQmFyQW5kTGluZVRvb2x0aXBGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXQ9e2lnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0fVxuICAgICAgICAgICAgc2V0VGltZUJpbm5pbmdJbmZvV2hlbk5vdFByb3ZpZGVkPXtcbiAgICAgICAgICAgICAgc2V0VGltZUJpbm5pbmdJbmZvV2hlbk5vdFByb3ZpZGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub0RhdGFPcHRpb25zPXtub0RhdGFPcHRpb25zfVxuICAgICAgICAgICAgey4uLmdsb2JhbE9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nlcmllc1R5cGUgPT09ICdwaWVTZXJpZXMnICYmIChcbiAgICAgICAgICA8UGllQ2hhcnRcbiAgICAgICAgICAgIHJlZj17aGFuZGxlUmVmfVxuICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIGRhdGFMYWJlbEZvcm1hdHRlcj17XG4gICAgICAgICAgICAgIGRhdGFMYWJlbEZvcm1hdHRlciBhcyBQaWVDaGFydExhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXI9e3Rvb2x0aXBGb3JtYXR0ZXIgYXMgUGllQ2hhcnRMYWJlbEZvcm1hdENhbGxiYWNrfVxuICAgICAgICAgICAgbGVnZW5kVmFsdWVMYWJlbEZvcm1hdHRlcj17bGVnZW5kVmFsdWVMYWJlbEZvcm1hdHRlcn1cbiAgICAgICAgICAgIG5vRGF0YU9wdGlvbnM9e25vRGF0YU9wdGlvbnN9XG4gICAgICAgICAgICBjaGFydFdpbGxSZW5kZXI9e2NoYXJ0V2lsbFJlbmRlcn1cbiAgICAgICAgICAgIHsuLi5nbG9iYWxPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXJpZXNUeXBlID09PSAnc2NhdHRlclNlcmllcycgJiYgKFxuICAgICAgICAgIDxTY2F0dGVyUGxvdFxuICAgICAgICAgICAgcmVmPXtoYW5kbGVSZWZ9XG4gICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyPXtcbiAgICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyIGFzIFNjYXR0ZXJQbG90TGFiZWxGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9vbHRpcEZvcm1hdHRlcj17XG4gICAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXIgYXMgU2NhdHRlclBsb3RMYWJlbEZvcm1hdENhbGxiYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZ25vcmVTbW9vdGhSZW5kZXJpbmdMaW1pdD17aWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXR9XG4gICAgICAgICAgICBub0RhdGFPcHRpb25zPXtub0RhdGFPcHRpb25zfVxuICAgICAgICAgICAgey4uLmdsb2JhbE9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nlcmllc1R5cGUgPT09ICdoaXN0b2dyYW1TZXJpZXMnICYmIChcbiAgICAgICAgICA8SGlzdG9ncmFtXG4gICAgICAgICAgICByZWY9e2hhbmRsZVJlZn1cbiAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICBkYXRhTGFiZWxGb3JtYXR0ZXI9e1xuICAgICAgICAgICAgICBkYXRhTGFiZWxGb3JtYXR0ZXIgYXMgSGlzdG9ncmFtTGFiZWxGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9vbHRpcEZvcm1hdHRlcj17dG9vbHRpcEZvcm1hdHRlciBhcyBIaXN0b2dyYW1MYWJlbEZvcm1hdENhbGxiYWNrfVxuICAgICAgICAgICAgey4uLmdsb2JhbE9wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuKVxuIiwiZXhwb3J0ICogZnJvbSAnLi91dGlscydcbmV4cG9ydCAqIGZyb20gJy4vcm9vdCdcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cydcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQWxlcnQsIFdpZGdldFBsYWNlaG9sZGVyIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuXG5jb25zdCBQbGFjZWhvbGRlcnMgPSB7XG4gIGJhcjogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL2Jhci5zdmcnKSxcbiAgY29sdW1uOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvY29sdW1uLnN2ZycpLFxuICAnc3RhY2tlZC1iYXInOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvc3RhY2tlZC1iYXIuc3ZnJyksXG4gICdzdGFja2VkMTAwLWJhcic6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9zdGFja2VkMTAwLWJhci5zdmcnKSxcbiAgJ3N0YWNrZWQtY29sdW1uJzogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3N0YWNrZWQtY29sdW1uLnN2ZycpLFxuICAnc3RhY2tlZDEwMC1jb2x1bW4nOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvc3RhY2tlZDEwMC1jb2x1bW4uc3ZnJyksXG4gIGxpbmU6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9saW5lLnN2ZycpLFxuICAnc21vb3RoLWxpbmUnOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvc21vb3RoLWxpbmUuc3ZnJyksXG4gIGFyZWE6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9hcmVhLnN2ZycpLFxuICAnc21vb3RoLWFyZWEnOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvc21vb3RoLWFyZWEuc3ZnJyksXG4gIHBpZTogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3BpZS5zdmcnKSxcbiAgZG9udXQ6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9kb251dC5zdmcnKSxcbiAgc2NhdHRlcjogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3NjYXR0ZXIuc3ZnJyksXG4gIGhpc3RvZ3JhbTogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL2hpc3RvZ3JhbS5zdmcnKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlaG9sZGVyUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVcbiAgc2hvd01lc3NhZ2U6IGJvb2xlYW5cbiAgbWVzc2FnZVR5cGU/OiAnYmFzaWMnIHwgJ3Rvb2x0aXAnXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgLmppbXUtd2lkZ2V0LXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICB9XG4gIC5hbGVydC10b29sdGlwLWJ1dHRvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG4gIC5hbGVydC1wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBib3R0b206IDEwcHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFBsYWNlaG9sZGVyID0gKHByb3BzOiBQbGFjZWhvbGRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0ZW1wbGF0ZVR5cGUsXG4gICAgc2hvd01lc3NhZ2UsXG4gICAgbWVzc2FnZSxcbiAgICBtZXNzYWdlVHlwZSA9ICd0b29sdGlwJyxcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgaWNvbiA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gUGxhY2Vob2xkZXJzW3RlbXBsYXRlVHlwZV0sIFt0ZW1wbGF0ZVR5cGVdKVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncGxhY2Vob2xkZXItY29udGFpbmVyIHctMTAwIGgtMTAwJywgY2xhc3NOYW1lKX0gY3NzPXtzdHlsZX0+XG4gICAgPFdpZGdldFBsYWNlaG9sZGVyIGljb25TaXplPSdsYXJnZScgaWNvbj17aWNvbn0gLz5cbiAgICB7c2hvd01lc3NhZ2UgJiYgPEFsZXJ0IGZvcm09e21lc3NhZ2VUeXBlfSB3aXRoSWNvbj17dHJ1ZX0gc2l6ZT0nc21hbGwnIHR5cGU9J3dhcm5pbmcnIHRleHQ9e21lc3NhZ2V9PjwvQWxlcnQ+fVxuICA8L2Rpdj5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnamltdS10aGVtZSdcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyBQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXInXG5cbmludGVyZmFjZSBDaGFydFJvb3RQb3JwcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzaG93TG9hZGluZzogYm9vbGVhblxuICBiYWNrZ3JvdW5kOiBzdHJpbmdcbiAgdG9vbHM6IFJlYWN0LlJlYWN0Tm9kZVxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50XG4gIHNob3dQbGFjZWhvbGRlcj86IGJvb2xlYW5cbiAgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVcbiAgbWVzc2FnZVR5cGU6ICdiYXNpYycgfCAndG9vbHRpcCdcbiAgbWVzc2FnZT86IHN0cmluZ1xufVxuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdigocHJvcHM6IHsgc2hvd1Rvb2xzOiBib29sZWFuLCBiYWNrZ3JvdW5kOiBzdHJpbmcgfSkgPT4ge1xuICByZXR1cm4gYFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMuYmFja2dyb3VuZH0gIWltcG9ydGFudDtcbiAgICAgIC5jaGFydC10b29sYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAke3Byb3BzLnNob3dUb29scyA/ICczOHB4JyA6ICcwcHgnfTtcbiAgICAgIH1cbiAgICAgIC5jaGFydC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6ICR7cHJvcHMuc2hvd1Rvb2xzID8gJ2NhbGMoMTAwJSAtIDM4cHgpJyA6ICcxMDAlJ30gIWltcG9ydGFudDtcbiAgICAgICAgPiAud2ViLWNoYXJ0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hcmNnaXMtY2hhcnRzLW1vZGFsLWNvbnRlbnQsIC5hcmNnaXMtY2hhcnRzLWFtcG9wdXAtY29udGVudCwgLmFyY2dpcy1jaGFydHMtbW9kYWwtY3VydGFpbiwgLmFyY2dpcy1jaGFydHMtYW1wb3B1cC1jdXJ0YWluIHtcbiAgICAgICAgei1pbmRleDogYXV0bztcbiAgICAgIH1cbiAgICBgXG59KVxuXG5leHBvcnQgY29uc3QgQ2hhcnRSb290ID0gKHByb3BzOiBDaGFydFJvb3RQb3JwcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dQbGFjZWhvbGRlcixcbiAgICBzaG93TG9hZGluZyxcbiAgICBiYWNrZ3JvdW5kLFxuICAgIHRvb2xzLFxuICAgIHRlbXBsYXRlVHlwZSxcbiAgICBtZXNzYWdlVHlwZSxcbiAgICBtZXNzYWdlLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFJvb3Qgc2hvd1Rvb2xzPXshIXRvb2xzfSBiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2NoYXJ0LXJvb3QnLCBjbGFzc05hbWUpfT5cbiAgICAgIHtzaG93UGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICA8UGxhY2Vob2xkZXJcbiAgICAgICAgICB0ZW1wbGF0ZVR5cGU9e3RlbXBsYXRlVHlwZX1cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgIG1lc3NhZ2VUeXBlPXttZXNzYWdlVHlwZX1cbiAgICAgICAgICBzaG93TWVzc2FnZT17ISFtZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHshc2hvd1BsYWNlaG9sZGVyICYmIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydC10b29sYmFyJz57dG9vbHN9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFydC1jb250YWluZXInPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaG93TG9hZGluZyAmJiA8TG9hZGluZyB0eXBlPSdET05VVCcgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+fVxuICAgIDwvUm9vdD5cbiAgKVxufVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsXG4gIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxuICB0eXBlIFVzZURhdGFTb3VyY2UsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgYXBwQ29uZmlnVXRpbHMsXG4gIGdldEFwcFN0b3JlLFxuICB0eXBlIERhdGFSZWNvcmQsXG4gIFJlYWN0UmVkdXgsXG4gIHR5cGUgSU1TdGF0ZSxcbiAgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLFxuICBkZWZhdWx0TWVzc2FnZXMgYXMgamltdWNvcmVEZWZhdWx0TWVzc2FnZXMsXG4gIERhdGFTb3VyY2VTdGF0dXMsXG4gIERhdGFTb3VyY2VNYW5hZ2VyLFxuICBob29rc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdURlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIENoYXJ0VHlwZXMsIGdldFNlcmllc1R5cGUgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgdHlwZSBDaGFydERhdGFTb3VyY2UsIHR5cGUgSVdlYkNoYXJ0IH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWZhdWx0J1xuaW1wb3J0IHsgdHlwZSBSZWNvcmRzU3RhdHVzIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG4vKipcbiAqICBHZXQgdGhlIHdhcm5pbmcgbWVzc2FnZSB0cmFuc2xhdGlvbi5cbiAqIEBwYXJhbSB0eXBlXG4gKiBAcGFyYW0gc291cmNlU3RhdHVzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXYXJuaW5nTWVzc2FnZVRyYW5zbGF0aW9uID0gKFxuICB0eXBlOiBDaGFydFR5cGVzLFxuICBzZXJpZXNMZW5ndGg6IG51bWJlcixcbiAgc291cmNlU3RhdHVzOiBSZWNvcmRzU3RhdHVzLFxuICBpc1NlbGVjdGlvbkVtcHR5PzogYm9vbGVhblxuKTogc3RyaW5nID0+IHtcbiAgbGV0IHRyYW5zbGF0aW9uID0gJydcbiAgaWYgKGlzU2VsZWN0aW9uRW1wdHkpIHtcbiAgICB0cmFuc2xhdGlvbiA9ICdkYXRhRW1wdHlUaXAnXG4gIH0gZWxzZSB7XG4gICAgaWYgKHNvdXJjZVN0YXR1cyA9PT0gJ2V4Y2VlZCcpIHtcbiAgICAgIGlmIChpc1NlcmlhbFNlcmllcyh0eXBlKSkge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmVTZXJpZXMnKSB7XG4gICAgICAgICAgdHJhbnNsYXRpb24gPSAnbGluZUxpbWl0YXRpb24nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlcmllc0xlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdHJhbnNsYXRpb24gPSAnYmFyMVNlcmllc0xpbWl0YXRpb24nXG4gICAgICAgICAgfSBlbHNlIGlmIChzZXJpZXNMZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gJ2JhcjJTZXJpZXNMaW1pdGF0aW9uJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2VyaWVzTGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdHJhbnNsYXRpb24gPSAnYmFyM1Nlcmllc0xpbWl0YXRpb24nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwaWVTZXJpZXMnKSB7XG4gICAgICAgIHRyYW5zbGF0aW9uID0gJ3BpZUxpbWl0YXRpb24nXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzb3VyY2VTdGF0dXMgPT09ICdlbXB0eScpIHtcbiAgICAgIHRyYW5zbGF0aW9uID0gJ2RhdGFFbXB0eVRpcCdcbiAgICB9IGVsc2UgaWYgKHNvdXJjZVN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgdHJhbnNsYXRpb24gPSAnd2lkZ2V0TG9hZEVycm9yJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhbnNsYXRpb25cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHdhcm5pbmcgbWVzc2FnZSB0cmFuc2xhdGlvbiBvZiBub3QtcmVhZHkgZGF0YSBzb3VyY2UuXG4gKiBAcGFyYW0gdXNlRGF0YVNvdXJjZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE5vdFJlYWR5VHJhbnNsYXRpb24gPSAoXG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPixcbiAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZVxuKTogW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV0gPT4ge1xuICBpZiAoIXVzZURhdGFTb3VyY2UgfHwgIWRhdGFTb3VyY2UpIHJldHVybiBudWxsXG4gIGNvbnN0IGxhYmVscyA9IGdldERhdGFTb3VyY2VMYWJlbHModXNlRGF0YVNvdXJjZSwgZGF0YVNvdXJjZSlcbiAgY29uc3QgdHJhbnNsYXRpb24gPSBbXG4gICAgJ291dHB1dERhdGFJc05vdEdlbmVyYXRlZCcsXG4gICAge1xuICAgICAgb3V0cHV0RHNMYWJlbDogbGFiZWxzLmRhdGFTb3VyY2VMYWJlbCxcbiAgICAgIHNvdXJjZVdpZGdldE5hbWU6IGxhYmVscy53aWRnZXRMYWJlbFxuICAgIH1cbiAgXSBhcyBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuICByZXR1cm4gdHJhbnNsYXRpb25cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxhYmVsIG9mIHRoZSB3aWRnZXQgdGhhdCBvdXRwdXRzIHRoZSBkYXRhIHNvdXJjZVxuICogQHBhcmFtIHVzZURhdGFTb3VyY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFdpZGdldExhYmVsRnJvbVVzZURhdGFTb3VyY2UgPSAoXG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPlxuKSA9PiB7XG4gIGNvbnN0IHdpZGdldElkID0gYXBwQ29uZmlnVXRpbHMuZ2V0V2lkZ2V0SWRCeU91dHB1dERhdGFTb3VyY2UodXNlRGF0YVNvdXJjZSlcbiAgY29uc3Qgd2lkZ2V0TGFiZWwgPVxuICAgIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnLndpZGdldHM/Llt3aWRnZXRJZF0/LmxhYmVsXG5cbiAgcmV0dXJuIHdpZGdldExhYmVsXG59XG4vKipcbiAqIEdldCB0aGUgbGFiZWwgb2YgdGhlIGRhdGEgc291cmNlIGFuZCB0aGUgbGFiZWwgb2YgdGhlIHdpZGdldCB0aGF0IG91dHB1dHMgdGhlIGRhdGEgc291cmNlXG4gKiBAcGFyYW0gdXNlRGF0YVNvdXJjZVxuICogQHBhcmFtIGRhdGFTb3VyY2VcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTGFiZWxzID0gKFxuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sXG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2Vcbik6IHsgZGF0YVNvdXJjZUxhYmVsOiBzdHJpbmcsIHdpZGdldExhYmVsOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IGRhdGFTb3VyY2VMYWJlbCA9IGRhdGFTb3VyY2U/LmdldExhYmVsKClcbiAgY29uc3Qgd2lkZ2V0TGFiZWwgPSBnZXRXaWRnZXRMYWJlbEZyb21Vc2VEYXRhU291cmNlKHVzZURhdGFTb3VyY2UpXG4gIHJldHVybiB7IGRhdGFTb3VyY2VMYWJlbCwgd2lkZ2V0TGFiZWwgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZVJlY29yZHMge1xuICB2ZXJzaW9uOiBudW1iZXJcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdXG59XG5cbi8qKlxuICogTW9uaXRvciBhbmQgZ2V0IHRoZSBsYXRlc3Qgc291cmNlIHJlY29yZHNcbiAqIEBwYXJhbSBkYXRhU291cmNlXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VTb3VyY2VSZWNvcmRzID0gKGRhdGFTb3VyY2U6IERhdGFTb3VyY2UpOiBTb3VyY2VSZWNvcmRzID0+IHtcbiAgY29uc3QgZGF0YVNvdXJjZUlkID0gZGF0YVNvdXJjZT8uaWRcbiAgY29uc3Qgc291cmNlVmVyc2lvbiA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0luZm8/LltkYXRhU291cmNlSWRdPy5zb3VyY2VWZXJzaW9uXG4gIClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGRhdGFTb3VyY2U/LmdldFNvdXJjZVJlY29yZHMoKSA/PyAoW10gYXMgRGF0YVJlY29yZFtdKVxuICAgIHJldHVybiB7IHJlY29yZHMsIHZlcnNpb246IHNvdXJjZVZlcnNpb24gfVxuICB9LCBbZGF0YVNvdXJjZSwgc291cmNlVmVyc2lvbl0pXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgcXVlcnkgaW4gY2hhcnQgZGF0YSBzb3VyY2UgaXMgdmFsaWQuXG4gKiBAcGFyYW0gZGF0YVNvdXJjZVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFF1ZXJ5ID0gKFxuICB0eXBlOiBDaGFydFR5cGVzLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChpc1NlcmlhbFNlcmllcyh0eXBlKSB8fCB0eXBlID09PSAncGllU2VyaWVzJykge1xuICAgIGlmIChxdWVyeS5vdXRGaWVsZHMpIHtcbiAgICAgIHJldHVybiAhIShxdWVyeT8ub3V0RmllbGRzPy5bMF0gJiYgcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAhIXF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdICYmXG4gICAgICAgICAgISFxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5vblN0YXRpc3RpY0ZpZWxkXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhIXF1ZXJ5Py5vdXRTdGF0aXN0aWNzPy5bMF0/Lm9uU3RhdGlzdGljRmllbGRcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjYXR0ZXJTZXJpZXMnKSB7XG4gICAgcmV0dXJuICEhcXVlcnk/Lm91dEZpZWxkcz8uWzFdXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hpc3RvZ3JhbVNlcmllcycpIHtcbiAgICByZXR1cm4gISFxdWVyeT8ub3V0RmllbGRzPy5bMF1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJ0IGRhdGEgc291cmNlIGlzIHZhbGlkLlxuICogQHBhcmFtIGRhdGFTb3VyY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRJV2ViQ2hhcnREYXRhU291cmNlID0gKFxuICB0eXBlOiBDaGFydFR5cGVzLFxuICBkYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8Q2hhcnREYXRhU291cmNlPlxuKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBpc1ZhbGlkUXVlcnkodHlwZSwgZGF0YVNvdXJjZT8ucXVlcnkpXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgd2ViIGNoYXJ0IGNvbmZpZyBpcyB2YWxpZC5cbiAqIEBwYXJhbSB3ZWJDaGFydFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGlzV2ViQ2hhcnRWYWxpZCA9IChcbiAgd2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+XG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgdHlwZSA9IGdldFNlcmllc1R5cGUod2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnkpXG4gIGNvbnN0IHNvdXJjZVZhbGlkID0gaXNWYWxpZElXZWJDaGFydERhdGFTb3VyY2UodHlwZSwgd2ViQ2hhcnQ/LmRhdGFTb3VyY2UpXG4gIHJldHVybiBzb3VyY2VWYWxpZFxufVxuXG5leHBvcnQgY29uc3QgdXNlV2FybmluZ01lc3NhZ2UgPSAoXG4gIGNoYXJ0VHlwZTogQ2hhcnRUeXBlcyxcbiAgd2ViQ2hhcnRWYWxpZDogYm9vbGVhbixcbiAgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LFxuICByZWNvcmRzU3RhdHVzOiBSZWNvcmRzU3RhdHVzLFxuICBzZXJpZXNMZW5ndGg6IG51bWJlcixcbiAgaXNTZWxlY3Rpb25FbXB0eT86IGJvb2xlYW5cbik6IFsnYmFzaWMnIHwgJ3Rvb2x0aXAnLCBzdHJpbmddID0+IHtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8J2Jhc2ljJyB8ICd0b29sdGlwJz4oJ3Rvb2x0aXAnKVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3Qgb3JpZ2luU291cmNlU3RhdHVzID0gUmVhY3RSZWR1eC51c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IElNU3RhdGUpID0+XG4gICAgICBzdGF0ZS5kYXRhU291cmNlc0luZm8/Llt1c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRdPy5zdGF0dXNcbiAgKVxuICBjb25zdCBpbnN0YW5jZVN0YXR1cyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PlxuICAgICAgc3RhdGUuZGF0YVNvdXJjZXNJbmZvPy5bdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXT8uaW5zdGFuY2VTdGF0dXNcbiAgKVxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihcbiAgICBqaW11Y29yZURlZmF1bHRNZXNzYWdlcyxcbiAgICBqaW11RGVmYXVsdE1lc3NhZ2VzLFxuICAgIGRlZmF1bHRNZXNzYWdlc1xuICApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUeXBlKHJlY29yZHNTdGF0dXMgPT09ICdleGNlZWQnID8gJ2Jhc2ljJyA6ICd0b29sdGlwJylcbiAgICBpZiAoXG4gICAgICBvcmlnaW5Tb3VyY2VTdGF0dXMgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkgJiZcbiAgICAgIGluc3RhbmNlU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLkNyZWF0ZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoXG4gICAgICAgIHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXG4gICAgICApXG4gICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGdldE5vdFJlYWR5VHJhbnNsYXRpb24odXNlRGF0YVNvdXJjZSwgZGF0YVNvdXJjZSlcbiAgICAgIGlmICh0cmFuc2xhdGlvbikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlKC4uLnRyYW5zbGF0aW9uKVxuICAgICAgICBzZXRNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghd2ViQ2hhcnRWYWxpZCkge1xuICAgICAgICBzZXRNZXNzYWdlKCcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBnZXRXYXJuaW5nTWVzc2FnZVRyYW5zbGF0aW9uKFxuICAgICAgICAgIGNoYXJ0VHlwZSxcbiAgICAgICAgICBzZXJpZXNMZW5ndGgsXG4gICAgICAgICAgcmVjb3Jkc1N0YXR1cyxcbiAgICAgICAgICBpc1NlbGVjdGlvbkVtcHR5XG4gICAgICAgIClcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbilcbiAgICAgICAgICBzZXRNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbXG4gICAgb3JpZ2luU291cmNlU3RhdHVzLFxuICAgIGluc3RhbmNlU3RhdHVzLFxuICAgIGNoYXJ0VHlwZSxcbiAgICB3ZWJDaGFydFZhbGlkLFxuICAgIHJlY29yZHNTdGF0dXMsXG4gICAgaXNTZWxlY3Rpb25FbXB0eVxuICBdKVxuXG4gIHJldHVybiBbdHlwZSwgbWVzc2FnZV1cbn1cbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBVc2VEYXRhU291cmNlLCBob29rcywgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLCBnZXRBcHBTdG9yZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgRGF0YVNvdXJjZVNjaGVtYSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCBPcmlnaW5EYXRhU291cmNlTWFuYWdlciBmcm9tICcuL29yaWdpbmFsJ1xuaW1wb3J0IE91dHB1dFNvdXJjZU1hbmFnZXIgZnJvbSAnLi9vdXRwdXQnXG5pbXBvcnQgeyB0eXBlIElXZWJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IGlzRGF0YVNvdXJjZVJlYWR5LCBxdWVyeUZpZWxkVW5pcXVlVmFsdWVzLCB1c2VNZW1vaXplZFF1ZXJ5IH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IGdldFNwbGl0QnlGaWVsZCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNjaGVtYUZvclNwbGl0QnkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24nXG5cbmludGVyZmFjZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlTWFuYWdlclBvcnBzIHtcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD5cbiAgb3V0cHV0RGF0YVNvdXJjZUlkOiBzdHJpbmdcbiAgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+XG4gIG9uU3BsaXRWYWx1ZXNDaGFuZ2U/OiAodmFsdWVzOiB7IFtmaWVsZDogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB9KSA9PiB2b2lkXG4gIG9uU2NoZW1hQ2hhbmdlPzogKHNjaGVtYTogRGF0YVNvdXJjZVNjaGVtYSkgPT4gdm9pZFxufVxuXG5jb25zdCBGZWF0dXJlTGF5ZXJEYXRhU291cmNlTWFuYWdlciA9IChwcm9wczogRmVhdHVyZUxheWVyRGF0YVNvdXJjZU1hbmFnZXJQb3JwcykgPT4ge1xuICBjb25zdCB7XG4gICAgd2lkZ2V0SWQsXG4gICAgdXNlRGF0YVNvdXJjZSxcbiAgICBvdXRwdXREYXRhU291cmNlSWQsXG4gICAgd2ViQ2hhcnQsXG4gICAgb25TcGxpdFZhbHVlc0NoYW5nZSxcbiAgICBvblNjaGVtYUNoYW5nZVxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IHF1ZXJ5VmVyc2lvbiwgZGF0YVNvdXJjZSwgb3V0cHV0RGF0YVNvdXJjZSB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCBbc3BsaXRCeVZhbHVlcywgc2V0U3BsaXRCeVZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTx7IFtmaWVsZDogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB9PigpXG5cbiAgY29uc3QgZGF0YVNvdXJjZUlkID0gdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXG4gIGNvbnN0IHNwbGl0QnlGaWVsZCA9IGdldFNwbGl0QnlGaWVsZCh3ZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnk/LndoZXJlLCB0cnVlKVxuICBjb25zdCBzZXJpZXNDb3VudCA9IHdlYkNoYXJ0Py5zZXJpZXM/Lmxlbmd0aFxuICBjb25zdCBzZXJpZXNSZWYgPSBob29rcy51c2VMYXRlc3Qod2ViQ2hhcnQ/LnNlcmllcylcbiAgY29uc3Qgc3BsaXRCeUZpZWxkUmVmID0gaG9va3MudXNlTGF0ZXN0KHNwbGl0QnlGaWVsZClcbiAgY29uc3Qgb25TcGxpdFZhbHVlc0NoYW5nZVJlZiA9IGhvb2tzLnVzZUxhdGVzdChvblNwbGl0VmFsdWVzQ2hhbmdlKVxuICBjb25zdCBvblNjaGVtYUNoYW5nZVJlZiA9IGhvb2tzLnVzZUxhdGVzdChvblNjaGVtYUNoYW5nZSlcblxuICBjb25zdCBxdWVyeSA9IHVzZU1lbW9pemVkUXVlcnkod2ViQ2hhcnQ/LmRhdGFTb3VyY2U/LnF1ZXJ5KVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNwbGl0QnlGaWVsZCAmJiBpc0RhdGFTb3VyY2VSZWFkeShkYXRhU291cmNlKSkge1xuICAgICAgcXVlcnlGaWVsZFVuaXF1ZVZhbHVlcyhkYXRhU291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHNwbGl0QnlGaWVsZCkudGhlbigodmFsdWVzKSA9PiB7XG4gICAgICAgIHNldFNwbGl0QnlWYWx1ZXMoeyBbc3BsaXRCeUZpZWxkXTogdmFsdWVzIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2RhdGFTb3VyY2UsIHNwbGl0QnlGaWVsZCwgcXVlcnlWZXJzaW9uLCBvblNwbGl0VmFsdWVzQ2hhbmdlUmVmXSlcblxuICBob29rcy51c2VVcGRhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhU291cmNlICYmIG91dHB1dERhdGFTb3VyY2UgJiYgc3BsaXRCeVZhbHVlcz8uW3NwbGl0QnlGaWVsZFJlZi5jdXJyZW50XSkgeyAvL1VwZGF0ZSBzY2hlbWEgZm9yIHNwbGl0LWJ5XG4gICAgICBjb25zdCBkYXRhU291cmNlSWQgPSBkYXRhU291cmNlLmlkXG4gICAgICBjb25zdCBvdXRwdXREYXRhU291cmNlSWQgPSBvdXRwdXREYXRhU291cmNlLmlkXG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXREYXRhU291cmNlU2NoZW1hRm9yU3BsaXRCeShvdXRwdXREYXRhU291cmNlLCBkYXRhU291cmNlSWQsIHF1ZXJ5LCBzZXJpZXNSZWYuY3VycmVudCwgc3BsaXRCeVZhbHVlc1tzcGxpdEJ5RmllbGRSZWYuY3VycmVudF0pXG4gICAgICBsZXQgZHNKc29uID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWcuZGF0YVNvdXJjZXM/LltvdXRwdXREYXRhU291cmNlSWRdXG4gICAgICBpZiAoIWRzSnNvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgb3V0cHV0IGRhdGEgc291cmNlIG9mICR7ZGF0YVNvdXJjZUlkfSBkb2VzIG5vdCBleGlzdGApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBkc0pzb24gPSBkc0pzb24uc2V0KCdzY2hlbWEnLCBzY2hlbWEpXG4gICAgICBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZURhdGFTb3VyY2VCeURhdGFTb3VyY2VKc29uKG91dHB1dERhdGFTb3VyY2UsIGRzSnNvbilcbiAgICAgIG9uU3BsaXRWYWx1ZXNDaGFuZ2VSZWYuY3VycmVudChzcGxpdEJ5VmFsdWVzKVxuICAgICAgb25TY2hlbWFDaGFuZ2VSZWYuY3VycmVudChzY2hlbWEpXG4gICAgfVxuICB9LCBbZGF0YVNvdXJjZSwgb3V0cHV0RGF0YVNvdXJjZSwgc3BsaXRCeVZhbHVlcywgcXVlcnksIHNlcmllc0NvdW50XSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T3JpZ2luRGF0YVNvdXJjZU1hbmFnZXJcbiAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgICAgLz5cbiAgICAgIDxPdXRwdXRTb3VyY2VNYW5hZ2VyXG4gICAgICAgIHdlYkNoYXJ0PXt3ZWJDaGFydH1cbiAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICBkYXRhU291cmNlSWQ9e291dHB1dERhdGFTb3VyY2VJZH1cbiAgICAgICAgb3JpZ2luYWxEYXRhU291cmNlSWQ9e2RhdGFTb3VyY2VJZH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlTGF5ZXJEYXRhU291cmNlTWFuYWdlclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJbmxpbmVEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJy4vaW5saW5lJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJy4vZmVhdHVyZS1sYXllcidcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBVc2VEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCwgZ2V0U2VyaWVzVHlwZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBDYXRlZ29yeVR5cGUsIHR5cGUgSVdlYkNoYXJ0IH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgQ2hhcnRMaW1pdHMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24vc2VyaWFsJ1xuaW1wb3J0IHsgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWZhdWx0J1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcbmltcG9ydCBPcmlnaW5EYXRhU291cmNlTWFuYWdlciBmcm9tICcuL29yaWdpbmFsJ1xuaW1wb3J0IE91dHB1dFNvdXJjZU1hbmFnZXIgZnJvbSAnLi9vdXRwdXQnXG5pbXBvcnQgdXNlRmV0Y2hSZWNvcmRzIGZyb20gJy4vdXNlLWZldGNoLXJlY29yZHMnXG5pbXBvcnQgeyBjb252ZXJ0QnlGaWVsZFJlY29yZHMsIGdldElubGluZVJlY29yZHNsaW1pdGVkIH0gZnJvbSAnLi91dGlscydcblxuaW50ZXJmYWNlIElubGluZURhdGFTb3VyY2VNYW5hZ2VyUHJvcHMge1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxuICBvdXRwdXREYXRhU291cmNlSWQ6IHN0cmluZ1xuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT5cbiAgY2hhcnRMaW1pdHM/OiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PlxufVxuXG5jb25zdCBJbmxpbmVEYXRhU291cmNlTWFuYWdlciA9IChwcm9wczogSW5saW5lRGF0YVNvdXJjZU1hbmFnZXJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgd2lkZ2V0SWQsXG4gICAgd2ViQ2hhcnQsXG4gICAgb3V0cHV0RGF0YVNvdXJjZUlkLFxuICAgIHVzZURhdGFTb3VyY2UsXG4gICAgY2hhcnRMaW1pdHMgPSBDaGFydExpbWl0c1xuICB9ID0gcHJvcHNcblxuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZSh3ZWJDaGFydD8uc2VyaWVzIGFzIGFueSlcbiAgY29uc3QgcXVlcnkgPSB3ZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnlcbiAgY29uc3QgcmVjb3Jkc0xpbWl0ZWQgPSBnZXRJbmxpbmVSZWNvcmRzbGltaXRlZCh3ZWJDaGFydD8uc2VyaWVzLCBjaGFydExpbWl0cylcbiAgY29uc3QgeyBxdWVyeVZlcnNpb24gfSA9IHVzZUNoYXJ0UnVudGltZVN0YXRlKClcblxuICBjb25zdCBjYXRlZ29yeVR5cGUgPSBnZXRDYXRlZ29yeVR5cGUocXVlcnkpXG4gIGNvbnN0IGNhbGxiYWNrID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5VHlwZSAhPT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQgfHwgKCFpc1NlcmlhbFNlcmllcyh0eXBlKSAmJiB0eXBlICE9PSAncGllU2VyaWVzJykpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIGNvbnZlcnRCeUZpZWxkUmVjb3Jkc1xuICB9LCBbY2F0ZWdvcnlUeXBlLCB0eXBlXSlcblxuICB1c2VGZXRjaFJlY29yZHModHlwZSwgcXVlcnksIHF1ZXJ5VmVyc2lvbiwgcmVjb3Jkc0xpbWl0ZWQsIGNhbGxiYWNrKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxPcmlnaW5EYXRhU291cmNlTWFuYWdlclxuICAgICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgICAvPlxuICAgICAgIDxPdXRwdXRTb3VyY2VNYW5hZ2VyXG4gICAgICAgIHdlYkNoYXJ0PXt3ZWJDaGFydH1cbiAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICBkYXRhU291cmNlSWQ9e291dHB1dERhdGFTb3VyY2VJZH1cbiAgICAgICAgb3JpZ2luYWxEYXRhU291cmNlSWQ9e3VzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVEYXRhU291cmNlTWFuYWdlclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZUNvbXBvbmVudCwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBRdWVyeVBhcmFtcywgdHlwZSBVc2VEYXRhU291cmNlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHVzZUNoYXJ0UnVudGltZURpc3BhdGNoLCB1c2VDaGFydFJ1bnRpbWVTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuXG5pbnRlcmZhY2UgT3JpZ2luRGF0YVNvdXJjZU1hbmFnZXJQcm9wcyB7XG4gIHdpZGdldElkOiBzdHJpbmdcbiAgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+XG4gIG9uUXVlcnlSZXF1aXJlZD86ICgpID0+IHZvaWRcbn1cblxuY29uc3QgT3JpZ2luRGF0YVNvdXJjZU1hbmFnZXIgPSAocHJvcHM6IE9yaWdpbkRhdGFTb3VyY2VNYW5hZ2VyUHJvcHMpID0+IHtcbiAgY29uc3QgeyB3aWRnZXRJZCwgdXNlRGF0YVNvdXJjZSwgb25RdWVyeVJlcXVpcmVkIH0gPSBwcm9wc1xuICBjb25zdCB7IHF1ZXJ5VmVyc2lvbiwgZGF0YVNvdXJjZSwgZmlsdGVyIH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG4gIGNvbnN0IGRhdGFTb3VyY2VSZWYgPSBob29rcy51c2VMYXRlc3QoZGF0YVNvdXJjZSlcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCgpXG5cbiAgLy9XaGVuIHRoZSBmaWx0ZXIgaXMgbW9kaWZpZWQsIHVwZGF0ZSBpdCB0byB0aGUgZGF0YSBzb3VyY2VcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YVNvdXJjZVJlZi5jdXJyZW50KSB7XG4gICAgICAoZGF0YVNvdXJjZVJlZi5jdXJyZW50IGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpLnVwZGF0ZVF1ZXJ5UGFyYW1zKHtcbiAgICAgICAgd2hlcmU6IGZpbHRlcj8uc3FsID8/ICcxPTEnLFxuICAgICAgICBzcWxFeHByZXNzaW9uOiBmaWx0ZXIgPz8gbnVsbCAvLyBUT0RPOiB0ZXN0XG4gICAgICB9IGFzIFF1ZXJ5UGFyYW1zLCB3aWRnZXRJZClcbiAgICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ZpbHRlcl0pXG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlZCA9IChkYXRhU291Y2U6IERhdGFTb3VyY2UpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfREFUQV9TT1VSQ0UnLCB2YWx1ZTogZGF0YVNvdWNlIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVRdWVyeVJlcXVpcmVkID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9RVUVSWV9WRVJTSU9OJywgdmFsdWU6IHF1ZXJ5VmVyc2lvbiArIDEgfSlcbiAgICBvblF1ZXJ5UmVxdWlyZWQ/LigpXG4gIH1cblxuICByZXR1cm4gPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtoYW5kbGVDcmVhdGVkfVxuICAgIG9uUXVlcnlSZXF1aXJlZD17aGFuZGxlUXVlcnlSZXF1aXJlZH1cbiAgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JpZ2luRGF0YVNvdXJjZU1hbmFnZXJcbiIsImltcG9ydCB7IHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZUNvbXBvbmVudCwgSW1tdXRhYmxlLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgUmVhY3QsIHR5cGUgVXNlRGF0YVNvdXJjZSwgRGF0YVNvdXJjZVN0YXR1cywgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCB0eXBlIFNjZW5lTGF5ZXJEYXRhU291cmNlLCBEYXRhU291cmNlTWFuYWdlciwgZGF0YVNvdXJjZVV0aWxzLCBob29rcywgZ2V0QXBwU3RvcmUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCwgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcbmltcG9ydCB7IHR5cGUgSVdlYkNoYXJ0IH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZ2V0U2VyaWVzVHlwZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBnZXREYXRhU291cmNlU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgdXNlTWVtb2l6ZWRRdWVyeSB9IGZyb20gJy4vdXRpbHMnXG5cbmludGVyZmFjZSBPdXRwdXRTb3VyY2VNYW5hZ2VyUHJvcHMge1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIG9yaWdpbmFsRGF0YVNvdXJjZUlkOiBzdHJpbmdcbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcbiAgd2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGRhdGEgc291cmNlIGluc3RhbmNlIGlzIHZhbGlkICh3aGV0aGVyIHRoZSBjb3JyZXNwb25kaW5nIGRhdGEgc291cmNlIGlzIGRlbGV0ZWQpXG4gKiBAcGFyYW0gZGF0YVNvdXJjZVxuICovXG5jb25zdCBpc0RhdGFTb3VyY2VWYWxpZCA9IChkYXRhU291cmNlOiBEYXRhU291cmNlKTogYm9vbGVhbiA9PiB7XG4gIGlmICghZGF0YVNvdXJjZSkgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IGluZm8gPSBkYXRhU291cmNlLmdldEluZm8oKVxuICByZXR1cm4gaW5mbyAmJiBPYmplY3Qua2V5cyhpbmZvKS5sZW5ndGggPiAwXG59XG5cbmNvbnN0IE91dHB1dFNvdXJjZU1hbmFnZXIgPSAocHJvcHM6IE91dHB1dFNvdXJjZU1hbmFnZXJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgd2lkZ2V0SWQsXG4gICAgZGF0YVNvdXJjZUlkLFxuICAgIHdlYkNoYXJ0XG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgZGF0YVNvdXJjZSwgb3V0cHV0RGF0YVNvdXJjZSwgcmVjb3JkcyB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCBxdWVyeSA9IHVzZU1lbW9pemVkUXVlcnkod2ViQ2hhcnQ/LmRhdGFTb3VyY2U/LnF1ZXJ5KVxuXG4gIGNvbnN0IHNlcmllc1JlZiA9IGhvb2tzLnVzZUxhdGVzdCh3ZWJDaGFydD8uc2VyaWVzKVxuXG4gIGhvb2tzLnVzZVVwZGF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGFTb3VyY2UgJiYgb3V0cHV0RGF0YVNvdXJjZSAmJiBxdWVyeSAmJiAhcXVlcnkud2hlcmUpIHsgLy9VcGRhdGUgc2NoZW1hIGZvciBub24tc3BsaXQtYnlcbiAgICAgIGNvbnN0IG91dHB1dERhdGFTb3VyY2VJZCA9IG91dHB1dERhdGFTb3VyY2UuaWRcbiAgICAgIGNvbnN0IG9yaWdpbmFsRGF0YVNvdXJjZUlkID0gZGF0YVNvdXJjZS5pZFxuICAgICAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzUmVmLmN1cnJlbnQgYXMgYW55KVxuICAgICAgY29uc3Qgc2NoZW1hID0gZ2V0RGF0YVNvdXJjZVNjaGVtYShvdXRwdXREYXRhU291cmNlLCBvcmlnaW5hbERhdGFTb3VyY2VJZCwgcXVlcnksIHNlcmllc1R5cGUpXG4gICAgICBsZXQgZHNKc29uID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWcuZGF0YVNvdXJjZXM/LltvdXRwdXREYXRhU291cmNlSWRdXG4gICAgICBpZiAoIWRzSnNvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgb3V0cHV0IGRhdGEgc291cmNlIG9mICR7b3V0cHV0RGF0YVNvdXJjZUlkfSBkb2VzIG5vdCBleGlzdGApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBkc0pzb24gPSBkc0pzb24uc2V0KCdzY2hlbWEnLCBzY2hlbWEpXG4gICAgICBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZURhdGFTb3VyY2VCeURhdGFTb3VyY2VKc29uKG91dHB1dERhdGFTb3VyY2UsIGRzSnNvbilcbiAgICB9XG4gIH0sIFtkYXRhU291cmNlLCBvdXRwdXREYXRhU291cmNlLCBxdWVyeV0pXG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCgpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzRGF0YVNvdXJjZVZhbGlkKG91dHB1dERhdGFTb3VyY2UpIHx8ICFyZWNvcmRzKSByZXR1cm5cbiAgICBvdXRwdXREYXRhU291cmNlLnNldFNvdXJjZVJlY29yZHMocmVjb3JkcylcbiAgICBvdXRwdXREYXRhU291cmNlLnNldFN0YXR1cyhEYXRhU291cmNlU3RhdHVzLlVubG9hZGVkKVxuICAgIG91dHB1dERhdGFTb3VyY2Uuc2V0Q291bnRTdGF0dXMoRGF0YVNvdXJjZVN0YXR1cy5VbmxvYWRlZClcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtvdXRwdXREYXRhU291cmNlLCByZWNvcmRzXSlcblxuICBjb25zdCB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoZGF0YVNvdXJjZUlkKSB7XG4gICAgICByZXR1cm4gSW1tdXRhYmxlKHtcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkYXRhU291cmNlSWQsXG4gICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRhdGFTb3VyY2VJZFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtkYXRhU291cmNlSWRdKVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZWQgPSAoZGF0YVNvdXJjZTogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlKSA9PiB7XG4gICAgc3luY09yaWdpbkRzSW5mbyhkYXRhU291cmNlKVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9PVVRQVVRfREFUQV9TT1VSQ0UnLCB2YWx1ZTogZGF0YVNvdXJjZSB9KVxuICB9XG5cbiAgY29uc3Qgc3luY09yaWdpbkRzSW5mbyA9IChkYXRhU291cmNlOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU2NlbmVMYXllckRhdGFTb3VyY2UpID0+IHtcbiAgICBjb25zdCBvcmlnaW5EcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlPy5nZXREYXRhU291cmNlSnNvbigpPy5vcmlnaW5EYXRhU291cmNlcz8uWzBdPy5kYXRhU291cmNlSWQpIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBTY2VuZUxheWVyRGF0YVNvdXJjZVxuICAgIGlmICghZGF0YVNvdXJjZSB8fCAhb3JpZ2luRHMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzeW5jIG9yaWdpbiBkYXRhIHNvdXJjZSBpbmZvIHRvIGNoYXJ0IG91dHB1dCBkYXRhIHNvdXJjZS4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRhdGFTb3VyY2Uuc2V0TGF5ZXJEZWZpbml0aW9uKGRhdGFTb3VyY2VVdGlscy5nZXRMYXllckRlZmluaXRpb25JbnRlcnNlY3Rpb24ob3JpZ2luRHMuZ2V0TGF5ZXJEZWZpbml0aW9uKCksIGRhdGFTb3VyY2UpKVxuICB9XG5cbiAgcmV0dXJuIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlQ3JlYXRlZH1cbiAgLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3V0cHV0U291cmNlTWFuYWdlclxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIERhdGFSZWNvcmQgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIENoYXJ0VHlwZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlGaWVsZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbi9zZXJpYWwnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCwgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcbmltcG9ydCB7IGdldFNvdXJjZVJlY29yZHMsIGlzRGF0YVNvdXJjZVJlYWR5LCBpc1ZhbGlkUXVlcnkgfSBmcm9tICcuL3V0aWxzJ1xuXG5jb25zdCBnZXREYXRhU291cmNlUXVlcnkgPSAoXG4gIHR5cGU6IENoYXJ0VHlwZXMsXG4gIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zXG4pID0+IHtcbiAgaWYgKCFpc1ZhbGlkUXVlcnkodHlwZSwgcXVlcnkpKSByZXR1cm4gbnVsbFxuICAvLyBSZW1vdmUgYG9yZGVyQnlGaWVsZGAgZm9yIGBieS1maWVsZGAgbW9kZSBvZiBgc2VyaWFsYCBhbmQgYHBpZWAgY2hhcnRcbiAgaWYgKHF1ZXJ5Lm91dFN0YXRpc3RpY3M/Lmxlbmd0aCAmJiAhcXVlcnkuZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MpIHtcbiAgICByZXR1cm4gcXVlcnkud2l0aG91dCgnb3JkZXJCeUZpZWxkcycpXG4gIH1cbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmNvbnN0IHVzZUZldGNoUmVjb3JkcyA9IChcbiAgdHlwZTogQ2hhcnRUeXBlcyxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHZlcnNpb246IG51bWJlcixcbiAgcmVjb3Jkc0xpbWl0ZWQ6IG51bWJlcixcbiAgY2FsbGJhY2s/OiAocmVjb3JkczogRGF0YVJlY29yZFtdLCBxdWVyeSwgZGF0YVNvdXJjZSkgPT4gRGF0YVJlY29yZFtdXG4pID0+IHtcbiAgY29uc3QgeyBkYXRhU291cmNlLCBvdXRwdXREYXRhU291cmNlIH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2goKVxuICBjb25zdCBjYXRlZ29yeUZpZWxkID0gZ2V0Q2F0ZWdvcnlGaWVsZChxdWVyeSlcbiAgY29uc3QgcGFyYW1zID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXREYXRhU291cmNlUXVlcnkodHlwZSwgcXVlcnkpLCBbcXVlcnksIHR5cGVdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0RhdGFTb3VyY2VSZWFkeShkYXRhU291cmNlKSB8fCAhb3V0cHV0RGF0YVNvdXJjZSB8fCBwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9SRUNPUkRTX1NUQVRVUycsIHZhbHVlOiAnbG9hZGluZycgfSlcbiAgICA7KGRhdGFTb3VyY2UgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSkucXVlcnkocGFyYW1zKS50aGVuKFxuICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICBsZXQgcmVjb3JkcyA9IHJlc3VsdC5yZWNvcmRzXG4gICAgICAgIGlmIChjYWxsYmFjaykgcmVjb3JkcyA9IGNhbGxiYWNrKHJlY29yZHMsIHF1ZXJ5LCBkYXRhU291cmNlKSA/PyBbXVxuICAgICAgICByZWNvcmRzID0gZ2V0U291cmNlUmVjb3JkcyhyZWNvcmRzLCBvdXRwdXREYXRhU291cmNlLCBjYXRlZ29yeUZpZWxkKVxuXG4gICAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCA+IHJlY29yZHNMaW1pdGVkKSB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFMnLCB2YWx1ZTogdW5kZWZpbmVkIH0pXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFNfU1RBVFVTJywgdmFsdWU6ICdleGNlZWQnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFNfU1RBVFVTJywgdmFsdWU6ICdlbXB0eScgfSlcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfUkVDT1JEUycsIHZhbHVlOiByZWNvcmRzIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfUkVDT1JEU19TVEFUVVMnLCB2YWx1ZTogJ2xvYWRlZCcgfSlcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFMnLCB2YWx1ZTogcmVjb3JkcyB9KVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfUkVDT1JEUycsIHZhbHVlOiB1bmRlZmluZWQgfSlcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFNfU1RBVFVTJywgdmFsdWU6ICdlcnJvcicgfSlcbiAgICAgIH1cbiAgICApXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZGF0YVNvdXJjZSwgb3V0cHV0RGF0YVNvdXJjZSwgcGFyYW1zLCB2ZXJzaW9uXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRmV0Y2hSZWNvcmRzXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLCB0eXBlIERhdGFSZWNvcmQsIHR5cGUgRGF0YVNvdXJjZSwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEltbXV0YWJsZUFycmF5LCBEYXRhU291cmNlU3RhdHVzLCBJbW11dGFibGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIENoYXJ0RWxlbWVudExpbWl0LCBnZXRTZXJpZXNUeXBlLCB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0sIFdlYkNoYXJ0U29ydE9yZGVyS2luZHMsIHR5cGUgQ2hhcnRUeXBlcyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBCeUZpZWxkU2VyaWVzWCwgQnlGaWVsZFNlcmllc1kgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRGaWVsZFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IGdldEZpZWxkVW5pcXVlVmFsdWVzUGFyYW1zLCBwYXJzZU9yZGVyQnlGaWVsZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbi9zZXJpYWwnXG5pbXBvcnQgeyBpc1NlcmlhbFNlcmllcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlZmF1bHQnXG5cbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VSZWNvcmRzID0gKHJlY29yZHM6IERhdGFSZWNvcmRbXSwgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSwgaW5wdXRDYXRlZ29yeUZpZWxkPzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGlkRmllbGQgPSBkYXRhU291cmNlLmdldElkRmllbGQoKVxuICBjb25zdCBjYXRlZ29yeUZpZWxkID0gaW5wdXRDYXRlZ29yeUZpZWxkIHx8IEJ5RmllbGRTZXJpZXNYXG4gIC8vIEZpbHRlciBvdXQgZGF0YSB3aXRoIGVtcHR5IGdyb3VwaW5nIGZpZWxkXG4gIGNvbnN0IGZpbHRlcmVkUmVjb3JkcyA9IHJlY29yZHM/LmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkPy5nZXREYXRhKCk/LltjYXRlZ29yeUZpZWxkXSAhPSBudWxsKVxuICBjb25zdCBycyA9IGZpbHRlcmVkUmVjb3Jkcz8ubWFwKChyZWNvcmQsIGkpID0+IHtcbiAgICBpZiAoZGF0YVNvdXJjZSAmJiByZWNvcmQuZGF0YVNvdXJjZSAhPT0gZGF0YVNvdXJjZSkge1xuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHJlY29yZC5nZXREYXRhKClcbiAgICAgIC8vIElmIGBpZEZpZWxkYCB1c2VkIGFzIHRoZSBjYXRlZ29yeSBmaWVsZCwgdXNlIGl0cyBvcmlnaW5hbCB2YWx1ZVxuICAgICAgY29uc3Qgb2JqZWN0aWQgPSBjYXRlZ29yeUZpZWxkID09PSBpZEZpZWxkID8gKGF0dHJpYnV0ZXNbaWRGaWVsZF0gPz8gaSkgOiBpXG4gICAgICBjb25zdCBmZWF0dXJlID0geyBhdHRyaWJ1dGVzOiB7IC4uLmF0dHJpYnV0ZXMsIFtpZEZpZWxkXTogb2JqZWN0aWQgfSB9XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5idWlsZFJlY29yZChmZWF0dXJlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVjb3JkXG4gICAgfVxuICB9KT8uZmlsdGVyKHJlY29yZCA9PiAhIXJlY29yZClcblxuICByZXR1cm4gcnNcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGxpbWl0ZWQgcmVjb3JkcyBjb3VudC5cbiAqIEBwYXJhbSBzZXJpZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldElubGluZVJlY29yZHNsaW1pdGVkID0gKHNlcmllcywgY2hhcnRMaW1pdHM6IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+KSA9PiB7XG4gIGxldCByZWNvcmRzTGltaXRlZCA9IDEwMDBcbiAgY29uc3Qgc2VyaWVzTGVuZ3RoID0gc2VyaWVzPy5sZW5ndGhcblxuICBpZiAoIXNlcmllc0xlbmd0aCkgcmV0dXJuIHJlY29yZHNMaW1pdGVkXG5cbiAgY29uc3QgdHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzKVxuICBpZiAoaXNTZXJpYWxTZXJpZXModHlwZSkpIHtcbiAgICBpZiAoc2VyaWVzTGVuZ3RoID09PSAxKSB7XG4gICAgICByZWNvcmRzTGltaXRlZCA9IGNoYXJ0TGltaXRzLm1heEJhclVuaXF1ZVNlcmllc0NvdW50VG90YWxcbiAgICB9IGVsc2UgaWYgKHNlcmllc0xlbmd0aCA9PT0gMikge1xuICAgICAgcmVjb3Jkc0xpbWl0ZWQgPSBjaGFydExpbWl0cy5tYXhCYXJUd29TZXJpZXNDb3VudFBlclNlcmllc1xuICAgIH0gZWxzZSBpZiAoc2VyaWVzTGVuZ3RoID4gMikge1xuICAgICAgcmVjb3Jkc0xpbWl0ZWQgPSBjaGFydExpbWl0cy5tYXhCYXJUaHJlZVBsdXNTZXJpZXNDb3VudFBlclNlcmllc1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAncGllU2VyaWVzJykge1xuICAgIHJlY29yZHNMaW1pdGVkID0gY2hhcnRMaW1pdHMubWF4UGllQ2hhcnRTbGljZUNvdW50VG90YWxcbiAgfVxuXG4gIHJldHVybiByZWNvcmRzTGltaXRlZFxufVxuXG4vKipcbiAqIENvbnZlcnQgdG8gZm9ybWF0dGVkIGRhdGEgZm9yIGBieS1maWVsZGAgbW9kZS5cbiAqIEluIG9yZGVyIGZvciB0aGUgc2VyaWVzIHRvIGtub3cgd2hpY2ggZGF0YSBpcyB0byB1c2VkIGluIHRoZSBnbG9iYWwgY2hhcnQgYXJyYXkgKHRocm91Z2ggdmFsdWVZKSwgbmVlZCB0byBjb252ZXJ0IHRoZSBkYXRhLFxuICogdHJhbnNmb3JtaW5nIGRhdGEgaW50byB3ZWIgY2hhcnQgZGF0YSBmb3IgYEJ5RmllbGRgIG1vZGUuXG4gKlxuICogSW4gY2FzZSBvZiBub24tYWdncmVnYXRlZCB0eXBlIGJhciBjaGFydCwgd2UgcmVuYW1lIHRoZSBjYXRlZ29yeSBuYW1lcyBieSBhZGRpbmcgYSBzdWZmaXgsIGluIG9yZGVyXG4gKiB0byBhdm9pZCBtdWx0aXBsZSBpZGVudGljYWwgdmFsdWVzICh0aGV5IGFyZSBzd2l0Y2hlZCBiYWNrIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlIHdoZW4gZGlzcGxheWVkKS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRCeUZpZWxkUmVjb3JkcyA9IChpbnB1dFJlY29yZHM6IERhdGFSZWNvcmRbXSwgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UpID0+IHtcbiAgY29uc3QgaW5wdXRSZWNvcmQgPSBpbnB1dFJlY29yZHM/LlswXVxuICBpZiAoIWlucHV0UmVjb3JkIHx8ICFxdWVyeT8ub3V0U3RhdGlzdGljcz8ubGVuZ3RoKSByZXR1cm5cblxuICBjb25zdCBvcmRlckJ5RmllbGRzID0gcXVlcnkub3JkZXJCeUZpZWxkc1xuICBjb25zdCBvdXRTdGF0aXN0aWNzID0gcXVlcnkub3V0U3RhdGlzdGljc1xuICBjb25zdCBudW1lcmljRmllbGRzID0gb3V0U3RhdGlzdGljc1xuICAgID8ubWFwKChzdGF0aWNzKSA9PiBzdGF0aWNzLm9uU3RhdGlzdGljRmllbGQpXG4gICAgPy5maWx0ZXIoKGZpZWxkKSA9PiAhIWZpZWxkKT8uYXNNdXRhYmxlKClcblxuICBjb25zdCB4ID0gQnlGaWVsZFNlcmllc1hcbiAgY29uc3QgeSA9IEJ5RmllbGRTZXJpZXNZXG5cbiAgY29uc3QgZGF0YSA9XG4gICAgbnVtZXJpY0ZpZWxkcz8ubWFwKChmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dFJlY29yZC5nZXRGaWVsZFZhbHVlKGZpZWxkKVxuICAgICAgY29uc3QgaXRlbSA9IHtcbiAgICAgICAgW3hdOiBmaWVsZCxcbiAgICAgICAgW3ldOiB2YWx1ZSA/PyAwXG4gICAgICB9XG4gICAgICBjb25zdCBhbGlhcyA9IGdldEZpZWxkU2NoZW1hKGZpZWxkLCBkYXRhU291cmNlLmlkKT8uYWxpYXMgPz8gZmllbGRcbiAgICAgIGlmIChhbGlhcyAhPT0gZmllbGQpIHtcbiAgICAgICAgaXRlbVt4XSA9IGFsaWFzXG4gICAgICAgIGl0ZW1beCArICdfb3JpZ2luYWwnXSA9IGZpZWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSkgPz8gW11cblxuICBzb3J0V2ViQ2hhcnREYXRhKGRhdGEsIG9yZGVyQnlGaWVsZHMpXG4gIGNvbnN0IHJlY29yZHMgPSBkYXRhPy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICBjb25zdCBmZWF0dXJlID0geyBhdHRyaWJ1dGVzOiBpdGVtIH1cbiAgICByZXR1cm4gZGF0YVNvdXJjZS5idWlsZFJlY29yZChmZWF0dXJlKVxuICB9KVxuICByZXR1cm4gcmVjb3Jkc1xufVxuXG4vKipcbiAqIFNvcnRpbmcgYW4gYXJyYXkgV2ViQ2hhcnREYXRhSXRlbSBmb2xsb3dpbmcgdGhlIG9yZGVyQnlGaWVsZHMgaW5zdHJ1Y3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFdlYkNoYXJ0RGF0YSAoXG4gIGRhdGE6IFdlYkNoYXJ0RGF0YUl0ZW1bXSxcbiAgb3JkZXJCeUZpZWxkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPixcbiAgZm9yY2VBc2NlbmRpbmdPcmRlcjogYm9vbGVhbiA9IGZhbHNlXG4pOiB2b2lkIHtcbiAgaWYgKGRhdGEgPT0gbnVsbCB8fCBvcmRlckJ5RmllbGRzID09IG51bGwpIHJldHVyblxuICBkYXRhLnNvcnQoXG4gICAgKGRhdGFJdGVtQTogV2ViQ2hhcnREYXRhSXRlbSwgZGF0YUl0ZW1COiBXZWJDaGFydERhdGFJdGVtKTogbnVtYmVyID0+IHtcbiAgICAgIC8vIERlZmF1bHQgc29ydCBkZWNpc2lvbiA9IDAgKGVxdWFsIHZhbHVlcylcbiAgICAgIGxldCBzb3J0RGVjaXNpb24gPSAwXG5cbiAgICAgIC8vIFVzaW5nIGFsbCB0aGUgZmllbGRzIGZyb20gb3JkZXJCeUZpZWxkcyB0byBwcm9jZWVkIHRvIHRoZSBjb21wYXJpc29uXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBvcmRlckJ5RmllbGRzLmxlbmd0aDsgaWR4ICs9IDEpIHtcbiAgICAgICAgLy9gb3JkZXJCeUZpZWxkYCBtdXN0IGhhcyBgQVNDYCBvciBgREVTQ2AgaW4gaXQsIGUuZy4gJ2ZpZWxkIEFTQycsICdmaWVsZCBuYW1lIERFU0MnXG4gICAgICAgIGNvbnN0IFtmaWVsZCwgc29ydE9yZGVyXSA9IHBhcnNlT3JkZXJCeUZpZWxkKG9yZGVyQnlGaWVsZHNbaWR4XSlcblxuICAgICAgICBjb25zdCBkZXNjT3JkZXI6IGJvb2xlYW4gPVxuICAgICAgICAgIHNvcnRPcmRlciA9PT0gV2ViQ2hhcnRTb3J0T3JkZXJLaW5kcy5EZXNjZW5kaW5nICYmXG4gICAgICAgICAgIWZvcmNlQXNjZW5kaW5nT3JkZXJcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHNldCB0aGUgc29ydERlY2lzaW9uIG9ubHkgaWYgb25lIG9mIHRoZSB2YWx1ZXMgaXMgZ3JlYXRlciB0aGFuIHRoZSBvdGhlciBvbmUuXG4gICAgICAgICAqIE90aGVyd2lzZSBpdCBjb250aW51ZXMgdG8gdGhlIG5leHQgdmFsdWUgaW4gdGhlIGBvcmRlckJ5RmllbGRzYCBhcnJheS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGZpcnN0RW50cnkgPSBkYXRhSXRlbUFbZmllbGRdXG4gICAgICAgIGNvbnN0IHNlY29uZEVudHJ5ID0gZGF0YUl0ZW1CW2ZpZWxkXVxuXG4gICAgICAgIC8vIEluIGNhc2Ugb2Ygc3RyaW5nIHZhbHVlcywgd2UgcGVyZm9ybSBhIG5hdHVyYWwgc29ydCB1c2luZyB0aGUgbmF0aXZlIGBsb2NhbGVDb21wYXJlYFxuICAgICAgICBpZiAodHlwZW9mIGZpcnN0RW50cnkgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZWNvbmRFbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBzb3J0RGVjaXNpb24gPSBmaXJzdEVudHJ5LmxvY2FsZUNvbXBhcmUoc2Vjb25kRW50cnksIHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgbnVtZXJpYzogdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKGRlc2NPcmRlcikgc29ydERlY2lzaW9uICo9IC0xXG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RFbnRyeSA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0RW50cnkgPT09IG51bGwpIHtcbiAgICAgICAgICBzb3J0RGVjaXNpb24gPSAhZGVzY09yZGVyID8gMSA6IC0xXG4gICAgICAgIH0gZWxzZSBpZiAoc2Vjb25kRW50cnkgPT09IHVuZGVmaW5lZCB8fCBzZWNvbmRFbnRyeSA9PT0gbnVsbCkge1xuICAgICAgICAgIHNvcnREZWNpc2lvbiA9ICFkZXNjT3JkZXIgPyAtMSA6IDFcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdEVudHJ5ID4gc2Vjb25kRW50cnkpIHtcbiAgICAgICAgICBzb3J0RGVjaXNpb24gPSAhZGVzY09yZGVyID8gMSA6IC0xXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdEVudHJ5IDwgc2Vjb25kRW50cnkpIHtcbiAgICAgICAgICBzb3J0RGVjaXNpb24gPSAhZGVzY09yZGVyID8gLTEgOiAxXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc29ydERlY2lzaW9uXG4gICAgfVxuICApXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgcXVlcnkgaW4gY2hhcnQgZGF0YSBzb3VyY2UgaXMgdmFsaWQuXG4gKiBAcGFyYW0gZGF0YVNvdXJjZVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFF1ZXJ5ID0gKFxuICB0eXBlOiBDaGFydFR5cGVzLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuKTogYm9vbGVhbiA9PiB7XG4gIGlmIChpc1NlcmlhbFNlcmllcyh0eXBlKSB8fCB0eXBlID09PSAncGllU2VyaWVzJykge1xuICAgIGlmIChxdWVyeS5vdXRGaWVsZHMpIHtcbiAgICAgIHJldHVybiAhIShxdWVyeT8ub3V0RmllbGRzPy5bMF0gJiYgcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhIXF1ZXJ5Py5vdXRTdGF0aXN0aWNzPy5bMF0/Lm9uU3RhdGlzdGljRmllbGRcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjYXR0ZXJTZXJpZXMnKSB7XG4gICAgcmV0dXJuICEhcXVlcnk/Lm91dEZpZWxkcz8uWzFdXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hpc3RvZ3JhbVNlcmllcycpIHtcbiAgICByZXR1cm4gISFxdWVyeT8ub3V0RmllbGRzPy5bMF1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBkYXRhIHNvdXJjZSBpbnN0YW5jZSBpcyB2YWxpZCAod2hldGhlciB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHNvdXJjZSBpcyBkZWxldGVkKVxuICogQHBhcmFtIGRhdGFTb3VyY2VcbiAqL1xuY29uc3QgaXNEYXRhU291cmNlVmFsaWQgPSAoZGF0YVNvdXJjZTogRGF0YVNvdXJjZSk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWRhdGFTb3VyY2UpIHJldHVybiBmYWxzZVxuICBjb25zdCBpbmZvID0gZGF0YVNvdXJjZS5nZXRJbmZvKClcbiAgcmV0dXJuIGluZm8gJiYgT2JqZWN0LmtleXMoaW5mbykubGVuZ3RoID4gMFxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBkYXRhIHNvdXJjZSBpbnN0YW5jZSBjYW4gYmUgdXNlZCB0byBsb2FkIGRhdGFcbiAqIEBwYXJhbSBkYXRhU291cmNlXG4gKi9cbmV4cG9ydCBjb25zdCBpc0RhdGFTb3VyY2VSZWFkeSA9IChkYXRhU291cmNlOiBEYXRhU291cmNlKTogYm9vbGVhbiA9PiB7XG4gIGlmICghaXNEYXRhU291cmNlVmFsaWQoZGF0YVNvdXJjZSkpIHJldHVybiBmYWxzZVxuICBjb25zdCBzdGF0dXMgPSBkYXRhU291cmNlLmdldFN0YXR1cygpXG4gIC8vVGhlIGRhdHMgc291cmNlIGlzIHJlYWR5IHRvIHVzZVxuICByZXR1cm4gc3RhdHVzICYmIHN0YXR1cyAhPT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeVxufVxuXG5leHBvcnQgY29uc3QgcXVlcnlGaWVsZFVuaXF1ZVZhbHVlcyA9IGFzeW5jIChkYXRhU291cmNlOiBRdWVyaWFibGVEYXRhU291cmNlLCBmaWVsZDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxudW1iZXIgfCBzdHJpbmc+PiA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IGdldEZpZWxkVW5pcXVlVmFsdWVzUGFyYW1zKGZpZWxkLCAxMDEpXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGFTb3VyY2UucXVlcnkocGFyYW1zKVxuICBjb25zdCB2YWx1ZXM6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSByZXN1bHQucmVjb3Jkc1xuICAgIC5tYXAoKHJlY29yZCk6IHN0cmluZyB8IG51bWJlciA9PiByZWNvcmQuZ2V0RmllbGRWYWx1ZShmaWVsZCkpXG4gICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9PSB1bmRlZmluZWQpXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuY29uc3QgRGVmYXVsdFF1ZXJ5ID0gSW1tdXRhYmxlKHt9KSBhcyBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zXG5leHBvcnQgY29uc3QgdXNlTWVtb2l6ZWRRdWVyeSA9IChpbnB1dFF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zID0gRGVmYXVsdFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHsgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MsIG91dEZpZWxkcywgb3V0U3RhdGlzdGljcywgd2hlcmUgfSA9IGlucHV0UXVlcnlcbiAgY29uc3QgcXVlcnkgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMgPSBJbW11dGFibGUoe30pXG4gICAgaWYgKHdoZXJlKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LnNldCgnd2hlcmUnLCB3aGVyZSlcbiAgICB9XG4gICAgaWYgKGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LnNldCgnZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MnLCBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcylcbiAgICB9XG4gICAgaWYgKG91dEZpZWxkcykge1xuICAgICAgcXVlcnkgPSBxdWVyeS5zZXQoJ291dEZpZWxkcycsIG91dEZpZWxkcylcbiAgICB9XG4gICAgaWYgKG91dFN0YXRpc3RpY3MpIHtcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuc2V0KCdvdXRTdGF0aXN0aWNzJywgb3V0U3RhdGlzdGljcylcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGggPiAwID8gcXVlcnkgOiBudWxsXG4gIH0sIFtncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcywgb3V0RmllbGRzLCBvdXRTdGF0aXN0aWNzLCB3aGVyZV0pXG4gIHJldHVybiBxdWVyeVxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1TdGF0ZSwgUmVhY3RSZWR1eCwgRGF0YVNvdXJjZVN0YXR1cywgQ09OU1RBTlRTLCB0eXBlIERhdGFTb3VyY2UsIHR5cGUgV2lkZ2V0SW5pdERyYWdDYWxsYmFjaywgaG9va3MsIEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRFbGVtZW50TGltaXQsIGdldFNlcmllc1R5cGUsIGdldFNwbGl0QnlGaWVsZCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyB0eXBlIENoYXJ0VG9vbHMsIHR5cGUgSVdlYkNoYXJ0LCB0eXBlIFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBXaXRoRmVhdHVyZUxheWVyQ2hhcnQgZnJvbSAnLi93aXRoLWZlYXR1cmUtbGF5ZXInXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0IHsgY3JlYXRlUnVudGltZVNwbGl0QnlTZXJpZXMsIGdldEZpZWxkVHlwZSwgZ2V0VGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uJ1xuaW1wb3J0IHsgQ2hhcnRSb290LCBpc1dlYkNoYXJ0VmFsaWQsIHVzZVdhcm5pbmdNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IEZlYXR1cmVMYXllckRhdGFTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi4vZGF0YS1zb3VyY2UnXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi4vdG9vbHMnXG5cbmludGVyZmFjZSBXZWJGZWF0dXJlTGF5ZXJDaGFydENvbXBvbmVudFBvcnBzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHdpZGdldElkOiBzdHJpbmdcbiAgd2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+XG4gIHRvb2xzOiBJbW11dGFibGVPYmplY3Q8Q2hhcnRUb29scz5cbiAgZW5hYmxlRGF0YUFjdGlvbjogYm9vbGVhblxuICBjaGFydExpbWl0cz86IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+XG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPlxuICBkZWZhdWx0VGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVcbiAgb25Jbml0RHJhZ0hhbmRsZXI6IFdpZGdldEluaXREcmFnQ2FsbGJhY2tcbn1cblxuY29uc3QgdXNlQ2hhcnRSZW5kZXJlZCA9IChkYXRhU291cmNlSWQ6IHN0cmluZywgd2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+KSA9PiB7XG4gIGNvbnN0IHN0YXR1cyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0luZm8/LltkYXRhU291cmNlSWRdPy5zdGF0dXMpXG4gIGNvbnN0IHZhbGlkID0gUmVhY3QudXNlTWVtbygoKSA9PiBpc1dlYkNoYXJ0VmFsaWQod2ViQ2hhcnQpLCBbd2ViQ2hhcnRdKVxuICBjb25zdCByZW5kZXIgPSAoc3RhdHVzICYmIHN0YXR1cyAhPT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeSkgJiYgdmFsaWRcbiAgcmV0dXJuIHsgdmFsaWQsIHJlbmRlciB9XG59XG5cbi8vQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBkYXRhIHNvdXJjZSBpcyBzZWxlY3RlZCBmZWF0dXJlcyB2aWV3IGhhcyBubyBzZWxlY3Rpb25cbmNvbnN0IHVzZUVtcHR5U2VsZWN0aW9uRGF0YVNvdXJjZSA9IChkYXRhU291cmNlPzogRGF0YVNvdXJjZSkgPT4ge1xuICBjb25zdCBzb3VyY2VWZXJzaW9uID0gUmVhY3RSZWR1eC51c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzSW5mbz8uW2RhdGFTb3VyY2U/LmlkXT8uc291cmNlVmVyc2lvbilcbiAgY29uc3QgaXNTZWxlY3Rpb25EYXRhU291cmNlID0gZGF0YVNvdXJjZT8uaXNEYXRhVmlldyAmJiBkYXRhU291cmNlPy5kYXRhVmlld0lkID09PSBDT05TVEFOVFMuU0VMRUNUSU9OX0RBVEFfVklFV19JRFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGNvbnN0IHNlbGVjdGlvblJlY29yZHNFbXB0eSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gaXNTZWxlY3Rpb25EYXRhU291cmNlICYmICFkYXRhU291cmNlLmdldFJlY29yZHMoKS5sZW5ndGgsIFtpc1NlbGVjdGlvbkRhdGFTb3VyY2UsIGRhdGFTb3VyY2UsIHNvdXJjZVZlcnNpb25dKVxuICBjb25zdCB1c2VFbXB0eVNlbGVjdGlvblZpZXcgPSBkYXRhU291cmNlPy51c2VOb1NlbGVjdGlvblZpZXcoKVxuICBpZiAodXNlRW1wdHlTZWxlY3Rpb25WaWV3KSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIHNlbGVjdGlvblJlY29yZHNFbXB0eVxufVxuXG5jb25zdCBXZWJGZWF0dXJlTGF5ZXJDaGFydENvbXBvbmVudCA9IChwcm9wczogV2ViRmVhdHVyZUxheWVyQ2hhcnRDb21wb25lbnRQb3JwcykgPT4ge1xuICBjb25zdCB7XG4gICAgd2lkZ2V0SWQsXG4gICAgdG9vbHM6IHByb3BUb29scyxcbiAgICBlbmFibGVEYXRhQWN0aW9uID0gdHJ1ZSxcbiAgICB3ZWJDaGFydCxcbiAgICBjaGFydExpbWl0cyxcbiAgICB1c2VEYXRhU291cmNlLFxuICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGUsXG4gICAgb25Jbml0RHJhZ0hhbmRsZXJcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyByZWNvcmRzU3RhdHVzLCBkYXRhU291cmNlIH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG5cbiAgY29uc3QgaXNTZWxlY3Rpb25EYXRhU291cmNlRW1wdHkgPSB1c2VFbXB0eVNlbGVjdGlvbkRhdGFTb3VyY2UoZGF0YVNvdXJjZSlcblxuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZSh3ZWJDaGFydD8uc2VyaWVzIGFzIGFueSlcbiAgY29uc3Qgc2hvd1Rvb2xzID0gcHJvcFRvb2xzPy5jdXJzb3JFbmFibGUgfHwgISFwcm9wVG9vbHM/LmZpbHRlciB8fCBlbmFibGVEYXRhQWN0aW9uXG4gIGNvbnN0IHsgdmFsaWQsIHJlbmRlciB9ID0gdXNlQ2hhcnRSZW5kZXJlZCh1c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWQsIHdlYkNoYXJ0KVxuXG4gIGNvbnN0IHNob3dQbGFjZW9sZGVyID0gIXJlbmRlciB8fCBpc1NlbGVjdGlvbkRhdGFTb3VyY2VFbXB0eVxuXG4gIGNvbnN0IHRlbXBsYXRlVHlwZSA9IGdldFRlbXBsYXRlVHlwZSh3ZWJDaGFydCk/LlsxXSB8fCBkZWZhdWx0VGVtcGxhdGVUeXBlIHx8ICdjb2x1bW4nXG4gIGNvbnN0IFttZXNzYWdlVHlwZSwgbWVzc2FnZV0gPSB1c2VXYXJuaW5nTWVzc2FnZShcbiAgICB0eXBlLFxuICAgIHZhbGlkLFxuICAgIHVzZURhdGFTb3VyY2UsXG4gICAgcmVjb3Jkc1N0YXR1cyxcbiAgICB3ZWJDaGFydD8uc2VyaWVzPy5sZW5ndGggPz8gMCxcbiAgICBpc1NlbGVjdGlvbkRhdGFTb3VyY2VFbXB0eVxuICApXG5cbiAgY29uc3QgdG9vbHMgPSBzaG93VG9vbHNcbiAgICA/IChcbiAgICAgIDxUb29sc1xuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB0b29scz17cHJvcFRvb2xzfVxuICAgICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICAgIGVuYWJsZURhdGFBY3Rpb249e2VuYWJsZURhdGFBY3Rpb259XG4gICAgICAvPlxuICAgICAgKVxuICAgIDogbnVsbFxuICByZXR1cm4gKFxuICAgIDxDaGFydFJvb3RcbiAgICAgIHRlbXBsYXRlVHlwZT17dGVtcGxhdGVUeXBlfVxuICAgICAgbWVzc2FnZVR5cGU9e21lc3NhZ2VUeXBlfVxuICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIHNob3dMb2FkaW5nPXtyZWNvcmRzU3RhdHVzID09PSAnbG9hZGluZyd9XG4gICAgICBiYWNrZ3JvdW5kPXt3ZWJDaGFydD8uYmFja2dyb3VuZH1cbiAgICAgIGNsYXNzTmFtZT0nd2ViLWZlYXR1cmUtbGF5ZXItY2hhcnQnXG4gICAgICBzaG93UGxhY2Vob2xkZXI9e3Nob3dQbGFjZW9sZGVyfVxuICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgID5cbiAgICAgIDxXaXRoRmVhdHVyZUxheWVyQ2hhcnRcbiAgICAgICAgY2xhc3NOYW1lPSd3ZWItY2hhcnQnXG4gICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgICBjaGFydExpbWl0cz17Y2hhcnRMaW1pdHN9XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgICAgIG9uSW5pdERyYWdIYW5kbGVyPXtvbkluaXREcmFnSGFuZGxlcn1cbiAgICAgIC8+XG4gICAgPC9DaGFydFJvb3Q+XG4gIClcbn1cblxuaW50ZXJmYWNlIFdlYkZlYXR1cmVMYXllckNoYXJ0UG9ycHMgZXh0ZW5kcyBXZWJGZWF0dXJlTGF5ZXJDaGFydENvbXBvbmVudFBvcnBzIHtcbiAgb3V0cHV0RGF0YVNvdXJjZUlkOiBzdHJpbmdcbn1cblxuY29uc3QgV2ViRmVhdHVyZUxheWVyQ2hhcnQgPSAocHJvcHM6IFdlYkZlYXR1cmVMYXllckNoYXJ0UG9ycHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZGdldElkLFxuICAgIHRvb2xzLFxuICAgIGVuYWJsZURhdGFBY3Rpb24gPSB0cnVlLFxuICAgIHdlYkNoYXJ0OiBwcm9wV2ViQ2hhcnQsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgdXNlRGF0YVNvdXJjZSxcbiAgICBvdXRwdXREYXRhU291cmNlSWQsXG4gICAgZGVmYXVsdFRlbXBsYXRlVHlwZSxcbiAgICBvbkluaXREcmFnSGFuZGxlclxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGNoYXJ0IH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG4gIGNvbnN0IGRhdGFTb3VyY2VJZCA9IHVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxuICBjb25zdCBzcGxpdEJ5RmllbGQgPSBnZXRTcGxpdEJ5RmllbGQocHJvcFdlYkNoYXJ0Py5kYXRhU291cmNlPy5xdWVyeT8ud2hlcmUsIHRydWUpXG4gIGNvbnN0IHF1ZXJ5ID0gcHJvcFdlYkNoYXJ0Py5kYXRhU291cmNlPy5xdWVyeVxuXG4gIGNvbnN0IFtzcGxpdEJ5VmFsdWVzLCBzZXRTcGxpdEJ5VmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlPHsgW2ZpZWxkOiBzdHJpbmddOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+IH0+KClcbiAgY29uc3Qgc3BsaXRCeUZpZWxkUmVmID0gaG9va3MudXNlTGF0ZXN0KHNwbGl0QnlGaWVsZClcblxuICBjb25zdCBzZXJpZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoc3BsaXRCeUZpZWxkUmVmLmN1cnJlbnQgJiYgc3BsaXRCeVZhbHVlcz8uW3NwbGl0QnlGaWVsZFJlZi5jdXJyZW50XSkge1xuICAgICAgY29uc3Qgc3BsaXRCeUZpZWxkVHlwZSA9IGdldEZpZWxkVHlwZShzcGxpdEJ5RmllbGRSZWYuY3VycmVudCwgZGF0YVNvdXJjZUlkKVxuICAgICAgY29uc3Qgc2VyaWVzVmFsdWVzID0gY3JlYXRlUnVudGltZVNwbGl0QnlTZXJpZXMocHJvcFdlYkNoYXJ0LnNlcmllcywgcXVlcnksIHNwbGl0QnlGaWVsZFR5cGUsIHNwbGl0QnlWYWx1ZXNbc3BsaXRCeUZpZWxkUmVmLmN1cnJlbnRdKVxuICAgICAgY29uc3Qgc2VyaWVzID0gSW1tdXRhYmxlKHNlcmllc1ZhbHVlcylcbiAgICAgIHJldHVybiBzZXJpZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByb3BXZWJDaGFydD8uc2VyaWVzXG4gICAgfVxuICB9LCBbZGF0YVNvdXJjZUlkLCBzcGxpdEJ5RmllbGRSZWYsIHNwbGl0QnlWYWx1ZXMsIHByb3BXZWJDaGFydD8uc2VyaWVzLCBxdWVyeV0pXG5cbiAgY29uc3QgaGFuZGxlU2NoZW1hQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNoYXJ0Py5yZWZyZXNoKGZhbHNlLCBmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IHdlYkNoYXJ0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BXZWJDaGFydD8uc2V0KCdzZXJpZXMnLCBzZXJpZXMpXG4gIH0sIFtwcm9wV2ViQ2hhcnQsIHNlcmllc10pXG5cbiAgcmV0dXJuICg8PlxuICAgIDxGZWF0dXJlTGF5ZXJEYXRhU291cmNlTWFuYWdlclxuICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgd2ViQ2hhcnQ9e3Byb3BXZWJDaGFydH1cbiAgICAgIG91dHB1dERhdGFTb3VyY2VJZD17b3V0cHV0RGF0YVNvdXJjZUlkfVxuICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICAgIG9uU3BsaXRWYWx1ZXNDaGFuZ2U9e3NldFNwbGl0QnlWYWx1ZXN9XG4gICAgICBvblNjaGVtYUNoYW5nZT17aGFuZGxlU2NoZW1hQ2hhbmdlfVxuICAgIC8+XG4gICAgPFdlYkZlYXR1cmVMYXllckNoYXJ0Q29tcG9uZW50XG4gICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICB0b29scz17dG9vbHN9XG4gICAgICB3ZWJDaGFydD17d2ViQ2hhcnR9XG4gICAgICBjaGFydExpbWl0cz17Y2hhcnRMaW1pdHN9XG4gICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgICAgZW5hYmxlRGF0YUFjdGlvbj17ZW5hYmxlRGF0YUFjdGlvbn1cbiAgICAgIG9uSW5pdERyYWdIYW5kbGVyPXtvbkluaXREcmFnSGFuZGxlcn1cbiAgICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGU9e2RlZmF1bHRUZW1wbGF0ZVR5cGV9XG4gICAgLz5cbiAgPC8+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJGZWF0dXJlTGF5ZXJDaGFydFxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgV2lkZ2V0SW5pdERyYWdDYWxsYmFjaywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyB0eXBlIElXZWJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IHR5cGUgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nXG5cbmludGVyZmFjZSBXaXRoRmVhdHVyZUxheWVyQ2hhcnRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxuICB1c2VEYXRhU291cmNlPzogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+XG4gIGNoYXJ0TGltaXRzPzogUGFydGlhbDxDaGFydEVsZW1lbnRMaW1pdD5cbiAgb25Jbml0RHJhZ0hhbmRsZXI6IFdpZGdldEluaXREcmFnQ2FsbGJhY2tcbn1cblxuZnVuY3Rpb24gV2l0aEZlYXR1cmVMYXllckNoYXJ0IChwcm9wczogV2l0aEZlYXR1cmVMYXllckNoYXJ0UHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IHdlYkNoYXJ0OiBwcm9wV2ViQ2hhcnQgfSA9IHByb3BzXG5cbiAgY29uc3QgY2hhcnRSZWYgPSBSZWFjdC51c2VSZWY8YW55PigpXG5cbiAgY29uc3QgaGFuZGxlTWFwVmlld0NoYW5nZSA9IGFzeW5jIChtYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSBtYXBWaWV3LnZpZXdcblxuICAgIGF3YWl0IHZpZXcud2hlbigpXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKG51bGwpXG4gICAgICB9LCAxMDApXG4gICAgfSlcblxuICAgIGNvbnN0IGxheWVyID0gdmlldy5tYXAubGF5ZXJzLnRvQXJyYXkoKVswXSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyXG4gICAgY29uc3QgcmVhY3RpdmVVdGlscyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZSgnZXNyaS9jb3JlL3JlYWN0aXZlVXRpbHMnKVxuICAgIGNvbnN0IGxheWVyVmlldyA9IGF3YWl0IHZpZXcud2hlbkxheWVyVmlldyhsYXllcilcbiAgICBhd2FpdCByZWFjdGl2ZVV0aWxzLndoZW5PbmNlKCgpID0+ICFsYXllclZpZXcudXBkYXRpbmcpXG4gICAgY2hhcnRSZWYuY3VycmVudC5jb25maWcgPSBjb25maWcud2ViQ2hhcnRcbiAgICBjaGFydFJlZi5jdXJyZW50LmxheWVyID0gbGF5ZXJWaWV3XG4gICAgY2hhcnRSZWYuY3VycmVudC52aWV3ID0gdmlld1xuICB9XG5cbiAgY29uc3QgbWFwaWQgPSBwcm9wV2ViQ2hhcnQ/LmRhdGFTb3VyY2U/Lm1hcGlkXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCB1c2VNYXBXaWRnZXRJZD17bWFwaWR9IG9uQWN0aXZlVmlld0NoYW5nZT17aGFuZGxlTWFwVmlld0NoYW5nZX0+PC9KaW11TWFwVmlld0NvbXBvbmVudD5cbiAgICAgIDxhcmNnaXMtY2hhcnRzLWJhci1jaGFydCByZWY9e2NoYXJ0UmVmfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhGZWF0dXJlTGF5ZXJDaGFydFxuIiwiaW1wb3J0IHsgdHlwZSBJbW11dGFibGVPYmplY3QsIFJlYWN0LCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgV2lkZ2V0SW5pdERyYWdDYWxsYmFjayB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IElubGluZURhdGFTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi9kYXRhLXNvdXJjZSdcbmltcG9ydCBXZWJJbmxpbmVEYXRhQ2hhcnQgZnJvbSAnLi9pbmxpbmUtZGF0YS1jaGFydCdcbmltcG9ydCBXZWJGZWF0dXJlTGF5ZXJDaGFydCBmcm9tICcuL2ZlYXR1cmUtbGF5ZXItY2hhcnQnXG5pbXBvcnQgeyB0eXBlIENoYXJ0VG9vbHMsIHR5cGUgSVdlYkNoYXJ0LCB0eXBlIFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IENoYXJ0TGltaXRzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSdcbmltcG9ydCB7IHdoZXRoZXJVc2VJbmxpbmVEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD5cbiAgdG9vbHM6IEltbXV0YWJsZU9iamVjdDxDaGFydFRvb2xzPlxuICBlbmFibGVEYXRhQWN0aW9uOiBib29sZWFuXG4gIG91dHB1dERhdGFTb3VyY2VJZDogc3RyaW5nXG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPlxuICBkZWZhdWx0VGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGVcbiAgb25Jbml0RHJhZ0hhbmRsZXI6IFdpZGdldEluaXREcmFnQ2FsbGJhY2tcbn1cblxuY29uc3QgQ2hhcnQgPSAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBvdXRwdXREYXRhU291cmNlSWQsIHVzZURhdGFTb3VyY2UsIHRvb2xzLCB3ZWJDaGFydCwgd2lkZ2V0SWQsIGRlZmF1bHRUZW1wbGF0ZVR5cGUsIGVuYWJsZURhdGFBY3Rpb24sIG9uSW5pdERyYWdIYW5kbGVyIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCB1c2VJbmxpbmVEYXRhID0gd2hldGhlclVzZUlubGluZURhdGFTb3VyY2Uod2ViQ2hhcnQsIGRhdGFTb3VyY2UpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZUlubGluZURhdGEgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJbmxpbmVEYXRhU291cmNlTWFuYWdlclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgICAgICAgb3V0cHV0RGF0YVNvdXJjZUlkPXtvdXRwdXREYXRhU291cmNlSWR9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgICAgICAgICAgY2hhcnRMaW1pdHM9e0NoYXJ0TGltaXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFdlYklubGluZURhdGFDaGFydFxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgICAgICAgY2hhcnRMaW1pdHM9e0NoYXJ0TGltaXRzfVxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICAgICAgICAgIGVuYWJsZURhdGFBY3Rpb249e2VuYWJsZURhdGFBY3Rpb259XG4gICAgICAgICAgICBvbkluaXREcmFnSGFuZGxlcj17b25Jbml0RHJhZ0hhbmRsZXJ9XG4gICAgICAgICAgICBkZWZhdWx0VGVtcGxhdGVUeXBlPXtkZWZhdWx0VGVtcGxhdGVUeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHshdXNlSW5saW5lRGF0YSAmJiAoPFdlYkZlYXR1cmVMYXllckNoYXJ0XG4gICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgICB3ZWJDaGFydD17d2ViQ2hhcnR9XG4gICAgICAgIGNoYXJ0TGltaXRzPXtDaGFydExpbWl0c31cbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICAgICAgb3V0cHV0RGF0YVNvdXJjZUlkPXtvdXRwdXREYXRhU291cmNlSWR9XG4gICAgICAgIGVuYWJsZURhdGFBY3Rpb249e2VuYWJsZURhdGFBY3Rpb259XG4gICAgICAgIG9uSW5pdERyYWdIYW5kbGVyPXtvbkluaXREcmFnSGFuZGxlcn1cbiAgICAgICAgZGVmYXVsdFRlbXBsYXRlVHlwZT17ZGVmYXVsdFRlbXBsYXRlVHlwZX1cbiAgICAgIC8+KX1cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRcbiIsImltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEludGxTaGFwZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgV2ViQ2hhcnREYXRhSXRlbSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5cbi8qKlxuICogQ29udmVydCB0byBmb3JtYXR0ZWQgYW5kIGNvbG9yaW5nIGRhdGEgZm9yIGBieS1ncm91cGAgbW9kZS5cbiAqIEBwYXJhbSByZWNvcmRzXG4gKiBAcGFyYW0geFxuICogQHBhcmFtIGludGxcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRHcm91cERhdGEgPSAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIGludGw6IEludGxTaGFwZVxuKTogYW55W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBjb25zdCB4ID0gcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF1cbiAgcmVjb3Jkcz8uZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlY29yZC5nZXREYXRhKClcbiAgICAvLyBOdWxsIGNhdGVnb3J5IHZhbHVlIHdpbGwgYWZmZWN0IHRoZSBjYWxjdWxhdGlvbiBvZiB2YWx1ZSBheGlzIHJhbmdlLFxuICAgIC8vIGFuZCBpdCB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNoYXJ0IGJ5IGRlZmF1bHQsIHNvIHdlIGZpbHRlciBpdCBvdXQuICM3NjA3XG4gICAgbGV0IGl0ZW0gPSB7IC4uLmRhdGEgfVxuICAgIGlmICh4ICYmIGl0ZW1beF0gPT0gbnVsbCkgcmV0dXJuXG4gICAgLy9Ob3cgb25seSBmb3JtYXR0ZWQgdGhlIHZhbHVlIG9mIHhcbiAgICBpdGVtID0gZm9ybWF0RmllbGRWYWx1ZShpdGVtLCByZWNvcmQsIHgsIGludGwpXG4gICAgcmVzdWx0LnB1c2goaXRlbSlcbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIEZvcm1hdCB0aGUgc3BlY2lmaWMgZmllbGQgdmFsdWUgYnkgaXRzIHJlY29yZC5cbiAqIEBwYXJhbSBpdGVtXG4gKiBAcGFyYW0gcmVjb3JkXG4gKiBAcGFyYW0gZmllbGRcbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdEZpZWxkVmFsdWUgPSAoXG4gIGl0ZW06IFdlYkNoYXJ0RGF0YUl0ZW0sXG4gIHJlY29yZDogRGF0YVJlY29yZCxcbiAgZmllbGQ6IHN0cmluZyxcbiAgaW50bFxuKSA9PiB7XG4gIGNvbnN0IHhWYWx1ZSA9IHJlY29yZC5nZXRGaWVsZFZhbHVlKGZpZWxkKVxuICBjb25zdCB4Rm9ybWF0dGVkVmFsdWUgPSByZWNvcmQuZ2V0Rm9ybWF0dGVkRmllbGRWYWx1ZShmaWVsZCwgaW50bClcbiAgaWYgKHhGb3JtYXR0ZWRWYWx1ZSAhPT0geFZhbHVlKSB7XG4gICAgaXRlbVtmaWVsZF0gPSB4Rm9ybWF0dGVkVmFsdWVcbiAgICBpdGVtW2ZpZWxkICsgJ19vcmlnaW5hbCddID0geFZhbHVlXG4gIH1cbiAgcmV0dXJuIGl0ZW1cbn1cbiIsImltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHByb2Nlc3NJbmxpbmVIaXN0b2dyYW1SYXdEYXRhLCB0eXBlIFdlYkNoYXJ0SGlzdG9ncmFtRGF0YUl0ZW0sIHR5cGUgV2ViQ2hhcnRIaXN0b2dyYW1TZXJpZXMsIHR5cGUgV2ViQ2hhcnRTZXJpZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG5jb25zdCBnZXRJbmxpbmVIaXN0b2dyYW1EYXRhID0gKFxuICByZWNvcmRzOiBEYXRhUmVjb3JkW10sXG4gIHNlcmllczogV2ViQ2hhcnRTZXJpZXNbXVxuKSA9PiB7XG4gIGNvbnN0IHJhd0RhdGEgPSByZWNvcmRzPy5tYXAoKHJlY29yZCkgPT4gcmVjb3JkLmdldERhdGEoKSlcbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBwcm9jZXNzSW5saW5lSGlzdG9ncmFtUmF3RGF0YShcbiAgICByYXdEYXRhLFxuICAgIHNlcmllc1swXSBhcyBXZWJDaGFydEhpc3RvZ3JhbVNlcmllc1xuICApXG4gIGxldCBzdGF0aXN0aWMgPSBudWxsXG4gIGxldCBiaW5zID0gW11cbiAgaWYgKHRyYW5zZm9ybWVkLnZhbGlkKSB7XG4gICAgY29uc3QgZGF0YSA9IHRyYW5zZm9ybWVkLmRhdGEgYXMgV2ViQ2hhcnRIaXN0b2dyYW1EYXRhSXRlbVxuICAgIGJpbnMgPSBkYXRhLmJpbnNcbiAgICBjb25zdCB7IG1lYW4sIHN0ZGRldiwgbWVkaWFuLCBtaW4sIG1heCB9ID0gZGF0YVxuICAgIHN0YXRpc3RpYyA9IHsgbWVhbiwgc3RkZGV2LCBtZWRpYW4sIG1pbiwgbWF4IH1cbiAgfVxuICByZXR1cm4geyBzdGF0aXN0aWMsIGJpbnMgfVxufVxuXG5jb25zdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YSA9IChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICBzZXJpZXM6IFdlYkNoYXJ0U2VyaWVzW11cbik6IFdlYkNoYXJ0SGlzdG9ncmFtRGF0YUl0ZW0gPT4ge1xuICBjb25zdCB7IHN0YXRpc3RpYywgYmlucyB9ID0gZ2V0SW5saW5lSGlzdG9ncmFtRGF0YShyZWNvcmRzLCBzZXJpZXMpXG4gIGlmICghYmlucz8ubGVuZ3RoKSByZXR1cm5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICAuLi5zdGF0aXN0aWMsXG4gICAgYmluc1xuICB9XG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhXG4iLCJpbXBvcnQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFGb3JTZXJpYWwgZnJvbSAnLi9zZXJpYWwnXG5pbXBvcnQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFGb3JQaWUgZnJvbSAnLi9waWUnXG5pbXBvcnQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFGb3JTY2F0dGVyIGZyb20gJy4vc2NhdHRlcidcbmltcG9ydCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YUZvckhpc3RvZ3JhbSBmcm9tICcuL2hpc3RvZ3JhbSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRUeXBlcywgdHlwZSBJbmxpbmVEYXRhLCB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0sIHR5cGUgV2ViQ2hhcnREYXRhVHlwZXMsIHR5cGUgV2ViQ2hhcnRQaWVDaGFydFNsaWNlLCB0eXBlIFdlYkNoYXJ0U2VyaWVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIEludGxTaGFwZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IGlzU2VyaWFsU2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZGVmYXVsdCdcblxuLyoqXG4gKiBJbiBvcmRlciBmb3IgdGhlIHNlcmllcyB0byBrbm93IHdoaWNoIGRhdGEgaXMgdG8gdXNlZCBmb3Igd2hpY2ggc2VyaWVzLFxuICogd2Ugc2hvdWxkIHJlcGxhY2UgdGhlIGRlZmF1bHQgc3RhdGlzdGljIGZpZWxkIG5hbWUgYnkgaXRzIHZhbHVlIGFzIGRlZmluZWQgaW4gdGhlIHNlcmllcyhzZXJpZS55KVxuICovXG5jb25zdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YSA9IChcbiAgdHlwZTogQ2hhcnRUeXBlcyxcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgc2VyaWVzOiBXZWJDaGFydFNlcmllc1tdLFxuICBpbnRsOiBJbnRsU2hhcGVcbik6IFtJbmxpbmVEYXRhPFdlYkNoYXJ0RGF0YVR5cGVzPiwgV2ViQ2hhcnREYXRhSXRlbVtdLCBJbW11dGFibGVBcnJheTxXZWJDaGFydFBpZUNoYXJ0U2xpY2U+P10gPT4ge1xuICBsZXQgcmF3RGF0YSA9IG51bGxcbiAgbGV0IGlucHV0RGF0YSA9IG51bGxcbiAgbGV0IHByb2Nlc3NlZCA9IHRydWVcbiAgaWYgKGlzU2VyaWFsU2VyaWVzKHR5cGUpKSB7XG4gICAgcmF3RGF0YSA9IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9yU2VyaWFsKFxuICAgICAgcmVjb3JkcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgaW50bFxuICAgICkgPz8gW11cbiAgICBpbnB1dERhdGEgPSB7IGRhdGFJdGVtczogcmF3RGF0YSB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICByYXdEYXRhID0gY29udmVydFJlY29yZHNUb0lubGluZURhdGFGb3JQaWUoXG4gICAgICByZWNvcmRzLFxuICAgICAgcXVlcnksXG4gICAgICBpbnRsXG4gICAgKSA/PyBbXVxuICAgIGlucHV0RGF0YSA9IHsgZGF0YUl0ZW1zOiByYXdEYXRhIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NhdHRlclNlcmllcycpIHtcbiAgICByYXdEYXRhID0gY29udmVydFJlY29yZHNUb0lubGluZURhdGFGb3JTY2F0dGVyKHJlY29yZHMsIHF1ZXJ5KSA/PyBbXVxuICAgIGlucHV0RGF0YSA9IHsgZGF0YUl0ZW1zOiByYXdEYXRhIH1cbiAgICBwcm9jZXNzZWQgPSBmYWxzZVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoaXN0b2dyYW1TZXJpZXMnKSB7XG4gICAgY29uc3QgZGF0YSA9IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9ySGlzdG9ncmFtKHJlY29yZHMsIHNlcmllcylcbiAgICByYXdEYXRhID0gZGF0YT8uYmlucyA/PyBbXVxuICAgIGlucHV0RGF0YSA9IGRhdGFcbiAgfVxuICByZXR1cm4gW3sgaW5wdXREYXRhLCBwcm9jZXNzZWQgfSwgcmF3RGF0YV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFcbiIsImltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEludGxTaGFwZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgV2ViQ2hhcnREYXRhSXRlbSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyBnZXRDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb21tb24vc2VyaWFsJ1xuaW1wb3J0IHsgY29udmVydEdyb3VwRGF0YSB9IGZyb20gJy4vY29tbW9uJ1xuXG5jb25zdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YSA9IChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgaW50bDogSW50bFNoYXBlXG4pOiBXZWJDaGFydERhdGFJdGVtW10gPT4ge1xuICBsZXQgaXRlbXMgPSBbXVxuICBjb25zdCBjYXRlZ29yeVR5cGUgPSBnZXRDYXRlZ29yeVR5cGUocXVlcnkpXG4gIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUdyb3VwKSB7XG4gICAgaXRlbXMgPSBjb252ZXJ0R3JvdXBEYXRhKHJlY29yZHMsIHF1ZXJ5LCBpbnRsKVxuICB9IGVsc2UgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQpIHtcbiAgICBpdGVtcyA9IHJlY29yZHM/Lm1hcChyZWNvcmQgPT4gcmVjb3JkLmdldERhdGEoKSlcbiAgfVxuXG4gIHJldHVybiBpdGVtc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YVxuIiwiaW1wb3J0IHsgdHlwZSBEYXRhUmVjb3JkLCB0eXBlIElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG5jb25zdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YSA9IChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuKTogV2ViQ2hhcnREYXRhSXRlbVtdID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgY29uc3QgeCA9IHF1ZXJ5Py5vdXRGaWVsZHM/LlswXVxuICByZWNvcmRzPy5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVjb3JkLmdldERhdGEoKVxuICAgIC8vIE51bGwgY2F0ZWdvcnkgdmFsdWUgd2lsbCBhZmZlY3QgdGhlIGNhbGN1bGF0aW9uIG9mIHZhbHVlIGF4aXMgcmFuZ2UsXG4gICAgLy8gYW5kIGl0IHdpbGwgbm90IGJlIGRpc3BsYXllZCBvbiB0aGUgY2hhcnQgYnkgZGVmYXVsdCwgc28gd2UgZmlsdGVyIGl0IG91dC4gIzc2MDdcbiAgICBjb25zdCBpdGVtID0geyAuLi5kYXRhIH1cbiAgICBpZiAoeCAmJiBpdGVtW3hdID09IG51bGwpIHJldHVyblxuICAgIHJlc3VsdC5wdXNoKGl0ZW0pXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFcbiIsImltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEludGxTaGFwZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgV2ViQ2hhcnREYXRhSXRlbSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyBnZXRDYXRlZ29yeVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jb21tb24vc2VyaWFsJ1xuaW1wb3J0IHsgY29udmVydEdyb3VwRGF0YSB9IGZyb20gJy4vY29tbW9uJ1xuXG5jb25zdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YSA9IChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgaW50bDogSW50bFNoYXBlXG4pOiBXZWJDaGFydERhdGFJdGVtW10gPT4ge1xuICBsZXQgaXRlbXMgPSBbXVxuICBjb25zdCBjYXRlZ29yeVR5cGUgPSBnZXRDYXRlZ29yeVR5cGUocXVlcnkpXG4gIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUdyb3VwKSB7XG4gICAgaXRlbXMgPSBjb252ZXJ0R3JvdXBEYXRhKHJlY29yZHMsIHF1ZXJ5LCBpbnRsKVxuICB9IGVsc2UgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQpIHtcbiAgICBpdGVtcyA9IHJlY29yZHM/Lm1hcChyZWNvcmQgPT4gcmVjb3JkLmdldERhdGEoKSlcbiAgfVxuXG4gIHJldHVybiBpdGVtc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YVxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1TdGF0ZSwgUmVhY3RSZWR1eCwgRGF0YVNvdXJjZVN0YXR1cywgdHlwZSBEYXRhUmVjb3JkLCB0eXBlIFdpZGdldEluaXREcmFnQ2FsbGJhY2sgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIENoYXJ0RWxlbWVudExpbWl0LCBnZXRTZXJpZXNUeXBlIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IHR5cGUgQ2hhcnRUb29scywgdHlwZSBJV2ViQ2hhcnQsIHR5cGUgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IFRvb2xzIGZyb20gJy4uL3Rvb2xzJ1xuaW1wb3J0IFdpdGhJbmxpbmVEYXRhQ2hhcnQgZnJvbSAnLi93aXRoLWlubGluZS1kYXRhJ1xuaW1wb3J0IHsgQ2hhcnRSb290LCBpc1dlYkNoYXJ0VmFsaWQsIHVzZVdhcm5pbmdNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24nXG5cbmludGVyZmFjZSBXZWJJbmxpbmVEYXRhQ2hhcnRQb3JwcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxuICB0b29sczogSW1tdXRhYmxlT2JqZWN0PENoYXJ0VG9vbHM+XG4gIGVuYWJsZURhdGFBY3Rpb246IGJvb2xlYW5cbiAgY2hhcnRMaW1pdHM/OiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PlxuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT5cbiAgZGVmYXVsdFRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlXG4gIG9uSW5pdERyYWdIYW5kbGVyOiBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrXG59XG5cbmNvbnN0IHVzZUNoYXJ0UmVuZGVyZWQgPSAoZGF0YVNvdXJjZUlkOiBzdHJpbmcsIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PiwgcmVjb3JkczogRGF0YVJlY29yZFtdKSA9PiB7XG4gIGNvbnN0IHN0YXR1cyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0luZm8/LltkYXRhU291cmNlSWRdPy5zdGF0dXMpXG4gIGNvbnN0IHZhbGlkID0gUmVhY3QudXNlTWVtbygoKSA9PiBpc1dlYkNoYXJ0VmFsaWQod2ViQ2hhcnQpLCBbd2ViQ2hhcnRdKVxuICBjb25zdCByZW5kZXIgPSAoc3RhdHVzICYmIHN0YXR1cyAhPT0gRGF0YVNvdXJjZVN0YXR1cy5Ob3RSZWFkeSkgJiYgdmFsaWQgJiYgISFyZWNvcmRzPy5sZW5ndGhcbiAgcmV0dXJuIHsgdmFsaWQsIHJlbmRlciB9XG59XG5cbmNvbnN0IFdlYklubGluZURhdGFDaGFydCA9IChwcm9wczogV2ViSW5saW5lRGF0YUNoYXJ0UG9ycHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZGdldElkLFxuICAgIHRvb2xzOiBwcm9wVG9vbHMsXG4gICAgZW5hYmxlRGF0YUFjdGlvbiA9IHRydWUsXG4gICAgd2ViQ2hhcnQsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgdXNlRGF0YVNvdXJjZSxcbiAgICBkZWZhdWx0VGVtcGxhdGVUeXBlLFxuICAgIG9uSW5pdERyYWdIYW5kbGVyXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgcmVjb3Jkc1N0YXR1cywgcmVjb3JkcyB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZSh3ZWJDaGFydD8uc2VyaWVzIGFzIGFueSlcbiAgY29uc3Qgc2hvd1Rvb2xzID0gcHJvcFRvb2xzPy5jdXJzb3JFbmFibGUgfHwgISFwcm9wVG9vbHM/LmZpbHRlciB8fCBlbmFibGVEYXRhQWN0aW9uXG4gIGNvbnN0IHsgdmFsaWQsIHJlbmRlciB9ID0gdXNlQ2hhcnRSZW5kZXJlZChcbiAgICB1c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWQsXG4gICAgd2ViQ2hhcnQsXG4gICAgcmVjb3Jkc1xuICApXG5cbiAgY29uc3QgdGVtcGxhdGVUeXBlID1cbiAgICBnZXRUZW1wbGF0ZVR5cGUod2ViQ2hhcnQpPy5bMV0gfHwgZGVmYXVsdFRlbXBsYXRlVHlwZSB8fCAnY29sdW1uJ1xuICBjb25zdCBbbWVzc2FnZVR5cGUsIG1lc3NhZ2VdID0gdXNlV2FybmluZ01lc3NhZ2UoXG4gICAgdHlwZSxcbiAgICB2YWxpZCxcbiAgICB1c2VEYXRhU291cmNlLFxuICAgIHJlY29yZHNTdGF0dXMsXG4gICAgd2ViQ2hhcnQ/LnNlcmllcz8ubGVuZ3RoID8/IDBcbiAgKVxuXG4gIGNvbnN0IHRvb2xzID0gc2hvd1Rvb2xzXG4gICAgPyAoXG4gICAgPFRvb2xzXG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgdG9vbHM9e3Byb3BUb29sc31cbiAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgIGVuYWJsZURhdGFBY3Rpb249e2VuYWJsZURhdGFBY3Rpb259XG4gICAgLz5cbiAgICAgIClcbiAgICA6IG51bGxcblxuICByZXR1cm4gKFxuICAgIDxDaGFydFJvb3RcbiAgICAgIHRlbXBsYXRlVHlwZT17dGVtcGxhdGVUeXBlfVxuICAgICAgbWVzc2FnZVR5cGU9e21lc3NhZ2VUeXBlfVxuICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgIHNob3dMb2FkaW5nPXtyZWNvcmRzU3RhdHVzID09PSAnbG9hZGluZyd9XG4gICAgICBiYWNrZ3JvdW5kPXt3ZWJDaGFydD8uYmFja2dyb3VuZH1cbiAgICAgIGNsYXNzTmFtZT0nd2ViLWlubGllLWRhdGEtY2hhcnQnXG4gICAgICBzaG93UGxhY2Vob2xkZXI9eyFyZW5kZXJ9XG4gICAgICB0b29scz17dG9vbHN9XG4gICAgPlxuICAgICAgPFdpdGhJbmxpbmVEYXRhQ2hhcnRcbiAgICAgICAgY2xhc3NOYW1lPSd3ZWItY2hhcnQnXG4gICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgICBjaGFydExpbWl0cz17Y2hhcnRMaW1pdHN9XG4gICAgICAgIG9uSW5pdERyYWdIYW5kbGVyPXtvbkluaXREcmFnSGFuZGxlcn1cbiAgICAgIC8+XG4gICAgPC9DaGFydFJvb3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViSW5saW5lRGF0YUNoYXJ0XG4iLCJpbXBvcnQgeyB0eXBlIElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZ2V0U2VyaWVzVHlwZSwgdHlwZSBXZWJDaGFydERhdGFJdGVtLCB0eXBlIFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlLCB0eXBlIFdlYkNoYXJ0U2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgQnlGaWVsZFNlcmllc1ggfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBnZXRDYXRlZ29yeVR5cGUsIG5vcm1hbGl6ZVN0YXRpc3RpY0ZpZWxkTGFiZWwgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24vc2VyaWFsJ1xuaW1wb3J0IHsgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWZhdWx0J1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplU2VyaWVzTmFtZSA9IChwcm9wc1NlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LCBxdWVyeSwgdHJhbnNsYXRlKSA9PiB7XG4gIGNvbnN0IHR5cGUgPSBnZXRTZXJpZXNUeXBlKHByb3BzU2VyaWVzIGFzIGFueSlcbiAgY29uc3Qgc3RhdGlzdGljVHlwZSA9IHF1ZXJ5Py5vdXRTdGF0aXN0aWNzPy5bMF0/LnN0YXRpc3RpY1R5cGVcbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICBsZXQgc2VyaWVzID0gcHJvcHNTZXJpZXNcbiAgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQpIHJldHVybiBzZXJpZXNcbiAgaWYgKCFzdGF0aXN0aWNUeXBlKSByZXR1cm4gc2VyaWVzXG4gIGlmIChpc1NlcmlhbFNlcmllcyh0eXBlKSB8fCB0eXBlID09PSAncGllU2VyaWVzJykge1xuICAgIHNlcmllcyA9IHByb3BzU2VyaWVzLm1hcChzZXJpZSA9PiB7XG4gICAgICBjb25zdCBhbGlhcyA9IHNlcmllLm5hbWVcbiAgICAgIGNvbnN0IG5hbWUgPSBub3JtYWxpemVTdGF0aXN0aWNGaWVsZExhYmVsKHN0YXRpc3RpY1R5cGUsIGFsaWFzLCB0cmFuc2xhdGUpXG4gICAgICByZXR1cm4gc2VyaWUuc2V0KCduYW1lJywgbmFtZSlcbiAgICB9KSBhcyBhbnlcbiAgfVxuICByZXR1cm4gc2VyaWVzXG59XG5cbi8qKlxuICogU2xpY2UgaXMgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSBmaWVsZCwgd2hpY2ggbmVlZHMgdG8gYmUgbWFwcGVkIHRvIHRoZSBmb3JtYXR0ZWQgdmFsdWUgb2YgdGhlIGZpZWxkICh0aGUgZGF0YSBvZiB0aGUgY2hhcnQgcmVuZGVyZWQpXG4gKiBAcGFyYW0gcHJvcHNTZXJpZXNcbiAqIEBwYXJhbSBxdWVyeVxuICogQHBhcmFtIGRhdGFJdGVtc1xuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGllU2xpY2VzID0gKHByb3BzU2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhSXRlbXM6IFdlYkNoYXJ0RGF0YUl0ZW1bXSk6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPiA9PiB7XG4gIGNvbnN0IHR5cGUgPSBnZXRTZXJpZXNUeXBlKHByb3BzU2VyaWVzIGFzIGFueSlcbiAgaWYgKHR5cGUgIT09ICdwaWVTZXJpZXMnKSByZXR1cm4gcHJvcHNTZXJpZXNcbiAgY29uc3QgcHJvcFNsaWNlcyA9IChwcm9wc1Nlcmllcz8uWzBdIGFzIHVua25vd24gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXM+KT8uc2xpY2VzXG4gIGlmICghcHJvcFNsaWNlcykgcmV0dXJuIHByb3BzU2VyaWVzXG5cbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICBjb25zdCB4ID0gY2F0ZWdvcnlUeXBlID09PSBDYXRlZ29yeVR5cGUuQnlGaWVsZCA/IEJ5RmllbGRTZXJpZXNYIDogcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF1cbiAgY29uc3Qgb3JpZ2luYWx4ID0geCArICdfb3JpZ2luYWwnXG5cbiAgY29uc3Qgc2xpY2VzID0gcHJvcFNsaWNlcz8ubWFwKChzbGljZSkgPT4ge1xuICAgIGNvbnN0IHNsaWNlSWQgPSBzbGljZS5zbGljZUlkXG4gICAgY29uc3QgbWF0Y2hJdGVtID0gZGF0YUl0ZW1zPy5maW5kKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeFZhbHVlID0gKGl0ZW1bb3JpZ2luYWx4XSB8fCBpdGVtW3hdKSBhcyBhbnlcbiAgICAgIGlmICh4VmFsdWUgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gc2xpY2VJZCA9PT0geFZhbHVlIHx8IHNsaWNlSWQgPT09ICh4VmFsdWUgKyAnJylcbiAgICB9KVxuICAgIGlmIChtYXRjaEl0ZW0pIHtcbiAgICAgIHJldHVybiBzbGljZS5zZXQoJ3NsaWNlSWQnLCBtYXRjaEl0ZW1beF0pIGFzIGFueVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9KT8uZmlsdGVyKHNsaWNlID0+ICEhc2xpY2UpXG5cbiAgY29uc3Qgc2VyaWVzID0gcHJvcHNTZXJpZXMubWFwKHNlcmllID0+IChzZXJpZSBhcyBhbnkpLnNldCgnc2xpY2VzJywgc2xpY2VzKSlcbiAgcmV0dXJuIHNlcmllc1xufVxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB1c2VJbnRsLCBob29rcywgdHlwZSBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCxcbiAgdHlwZSBXZWJNYXBXZWJDaGFydCxcbiAgdHlwZSBVbnByaXZpbGVnZWRDaGFydCxcbiAgdHlwZSBQcmVSZW5kZXJDYWxsYmFjayxcbiAgdHlwZSBXZWJDaGFydFBpZUNoYXJ0U2VyaWVzLFxuICB0eXBlIFdlYkNoYXJ0LFxuICBnZXRTZXJpZXNUeXBlXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCwgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcbmltcG9ydCB7IHR5cGUgSVdlYkNoYXJ0IH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhIGZyb20gJy4vY29udmVydC11dGlscydcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VWlNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuaW1wb3J0IHsgbm9ybWFsaXplUGllU2xpY2VzLCBub3JtYWxpemVTZXJpZXNOYW1lIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50cyB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24sIG5vcm1hbGl6ZVNlcmllcyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgV2ViQ2hhcnRDdXJyZW50VmVyc2lvbiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcblxuaW50ZXJmYWNlIFdpdGhJbmxpbmVEYXRhQ2hhcnRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxuICBjaGFydExpbWl0cz86IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+XG4gIG9uSW5pdERyYWdIYW5kbGVyOiBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrXG59XG5cbmNvbnN0IG5vRGF0YU9wdGlvbnMgPSB7XG4gIGRpc3BsYXlNZXNzYWdlV2hlbk5vRGF0YTogZmFsc2Vcbn1cblxuY29uc3QgYmFja2dyb3VuZCA9IFswLCAwLCAwLCAwXSBhcyBhbnlcblxuZnVuY3Rpb24gV2l0aElubGluZURhdGFDaGFydCAoXG4gIHByb3BzOiBXaXRoSW5saW5lRGF0YUNoYXJ0UHJvcHNcbik6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCB3aWRnZXRJZCwgd2ViQ2hhcnQ6IHByb3BXZWJDaGFydCwgY2hhcnRMaW1pdHMsIG9uSW5pdERyYWdIYW5kbGVyIH0gPSBwcm9wc1xuICBjb25zdCB7IG91dHB1dERhdGFTb3VyY2UsIHJlY29yZHMsIHJlY29yZHNTdGF0dXMgfSA9IHVzZUNoYXJ0UnVudGltZVN0YXRlKClcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCgpXG5cbiAgY29uc3QgY2hhcnRSZWYgPSBSZWFjdC51c2VSZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KG51bGwpXG4gIGNvbnN0IGlkID0gd2lkZ2V0SWQgKyAnLScgKyAocHJvcFdlYkNoYXJ0Py5pZCA/PyAnY2hhcnQnKVxuICBjb25zdCBpbnRsID0gdXNlSW50bCgpXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcywgamltdVVpTWVzc2FnZXMpXG4gIGNvbnN0IHdlYk1hcFdlYkNoYXJ0UmVmID0gUmVhY3QudXNlUmVmPEltbXV0YWJsZU9iamVjdDxXZWJNYXBXZWJDaGFydD4+KG51bGwpXG4gIGxldCB3ZWJDaGFydCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gcHJvcFdlYkNoYXJ0LnNldCgndmVyc2lvbicsIFdlYkNoYXJ0Q3VycmVudFZlcnNpb24pLndpdGhvdXQoJ2RhdGFTb3VyY2UnKS5zZXQoJ2lkJywgaWQpLnNldCgnYmFja2dyb3VuZCcsIGJhY2tncm91bmQpIGFzIHVua25vd24gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYk1hcFdlYkNoYXJ0PiwgW2lkLCBwcm9wV2ViQ2hhcnRdKVxuXG4gIGNvbnN0IHR5cGUgPSBnZXRTZXJpZXNUeXBlKHByb3BXZWJDaGFydC5zZXJpZXMgYXMgYW55KVxuICBjb25zdCBxdWVyeSA9IHByb3BXZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnlcbiAgY29uc3QgcHJvcFNlcmllcyA9IHByb3BXZWJDaGFydD8uc2VyaWVzIGFzIGFueVxuXG4gIGNvbnN0IFtpbmxpbmVEYXRhLCBkYXRhSXRlbXNdID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY29udmVydFJlY29yZHNUb0lubGluZURhdGEoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHJlY29yZHMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBwcm9wU2VyaWVzLFxuICAgICAgICBpbnRsXG4gICAgICApLFxuICAgIFt0eXBlLCByZWNvcmRzLCBxdWVyeSwgcHJvcFNlcmllcywgaW50bF1cbiAgKVxuXG4gIGxldCBzZXJpZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IG5vcm1hbGl6ZVNlcmllcyhwcm9wU2VyaWVzLCBxdWVyeSksIFtwcm9wU2VyaWVzLCBxdWVyeV0pXG4gIHNlcmllcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbm9ybWFsaXplUGllU2xpY2VzKHNlcmllcywgcXVlcnksIGRhdGFJdGVtcyksIFtkYXRhSXRlbXMsIHF1ZXJ5LCBzZXJpZXNdKVxuICBzZXJpZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IG5vcm1hbGl6ZVNlcmllc05hbWUoc2VyaWVzLCBxdWVyeSwgdHJhbnNsYXRlKSwgW3NlcmllcywgcXVlcnksIHRyYW5zbGF0ZV0pXG4gIHdlYkNoYXJ0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB3ZWJDaGFydC5zZXQoJ3NlcmllcycsIHNlcmllcyksIFt3ZWJDaGFydCwgc2VyaWVzXSlcblxuICBjb25zdCB3ZWJNYXBXZWJDaGFydCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBjaGFydCBpcyByZW5kZXJlZCBhZnRlciB0aGUgZGF0YSBpcyBsb2FkZWRcbiAgICBpZiAocmVjb3Jkc1N0YXR1cyAhPT0gJ2xvYWRlZCcpIHtcbiAgICAgIHJldHVybiB3ZWJNYXBXZWJDaGFydFJlZi5jdXJyZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYk1hcFdlYkNoYXJ0UmVmLmN1cnJlbnQgPSB3ZWJDaGFydFxuICAgICAgcmV0dXJuIHdlYkNoYXJ0XG4gICAgfVxuICB9LCBbcmVjb3Jkc1N0YXR1cywgd2ViQ2hhcnRdKVxuXG4gIGNvbnN0IGhhbmxkbGVDcmVhdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGNoYXJ0OiBVbnByaXZpbGVnZWRDaGFydCkgPT4ge1xuICAgICAgY2hhcnRSZWYuY3VycmVudCA9IGNoYXJ0XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfQ0hBUlQnLCB2YWx1ZTogY2hhcnQgfSlcbiAgICB9LFxuICAgIFtkaXNwYXRjaF1cbiAgKVxuXG4gIGNvbnN0IFtzZWxlY3Rpb25EYXRhLCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2VdID0gdXNlU2VsZWN0aW9uKFxuICAgIHdpZGdldElkLFxuICAgIG91dHB1dERhdGFTb3VyY2UsXG4gICAgcHJvcFNlcmllc1xuICApXG5cbiAgY29uc3QgY2hhcnRXaWxsUmVuZGVyOiBQcmVSZW5kZXJDYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgY2hhcnRDb25maWcsIHNsaWNlczogdXNlZFNsaWNlcyB9ID0gcHJvcHNcbiAgICBsZXQgc2xpY2VzID0gKGNoYXJ0Q29uZmlnPy5zZXJpZXM/LlswXSBhcyBXZWJDaGFydFBpZUNoYXJ0U2VyaWVzKT8uc2xpY2VzXG4gICAgbGV0IGFsdGVyZWRDb25maWc6IFdlYkNoYXJ0ID0gY2hhcnRDb25maWcgYXMgV2ViQ2hhcnRcbiAgICBpZiAoc2xpY2VzPy5sZW5ndGgpIHtcbiAgICAgIHNsaWNlcyA9IHNsaWNlcy5tYXAoKHNsaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gc2xpY2Uuc2xpY2VJZFxuICAgICAgICBjb25zdCB1c2VkU2xpY2VJZCA9IHVzZWRTbGljZXM/LmZpbmQoKHVzZWRTbGljZSkgPT4gdXNlZFNsaWNlLm9yaWdpbmFsTGFiZWwgPT09IGlkKT8uc2xpY2VJZFxuICAgICAgICBpZiAodXNlZFNsaWNlSWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc2xpY2UsXG4gICAgICAgICAgICBzbGljZUlkOiB1c2VkU2xpY2VJZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2xpY2VcbiAgICAgIH0pXG4gICAgICBhbHRlcmVkQ29uZmlnID0ge1xuICAgICAgICAuLi5jaGFydENvbmZpZyxcbiAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgIC4uLmNoYXJ0Q29uZmlnLnNlcmllc1swXSxcbiAgICAgICAgICBzbGljZXNcbiAgICAgICAgfV0gYXMgV2ViQ2hhcnRQaWVDaGFydFNlcmllc1tdXG4gICAgICB9IGFzIFdlYkNoYXJ0XG4gICAgfVxuICAgIHJldHVybiBhbHRlcmVkQ29uZmlnXG4gIH0sIFtdKVxuXG4gIGhvb2tzLnVzZUVmZmVjdE9uY2UoKCkgPT4ge1xuICAgIG9uSW5pdERyYWdIYW5kbGVyPy4obnVsbCwgbnVsbCwgKCkgPT4ge1xuICAgICAgaWYgKCFjaGFydFJlZi5jdXJyZW50KSByZXR1cm5cbiAgICAgIGNoYXJ0UmVmLmN1cnJlbnQucmVmcmVzaCgpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7d2ViTWFwV2ViQ2hhcnQgJiYgPENoYXJ0Q29tcG9uZW50c1xuICAgICAgICByZWY9e2hhbmxkbGVDcmVhdGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgd2ViTWFwV2ViQ2hhcnQ9e3dlYk1hcFdlYkNoYXJ0fVxuICAgICAgICBpbmxpbmVEYXRhPXtpbmxpbmVEYXRhfVxuICAgICAgICBjaGFydFdpbGxSZW5kZXI9e2NoYXJ0V2lsbFJlbmRlcn1cbiAgICAgICAgbm9EYXRhT3B0aW9ucz17bm9EYXRhT3B0aW9uc31cbiAgICAgICAgaGlkZUxvYWRlckFuaW1hdGlvbj17dHJ1ZX1cbiAgICAgICAgY2hhcnRMaW1pdHM9e2NoYXJ0TGltaXRzfVxuICAgICAgICBzZWxlY3Rpb25EYXRhPXtzZWxlY3Rpb25EYXRhfVxuICAgICAgICBhcmNnaXNDaGFydHNTZWxlY3Rpb25Db21wbGV0ZT17aGFuZGxlU2VsZWN0aW9uQ2hhbmdlfVxuICAgICAgLz59XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0aElubGluZURhdGFDaGFydFxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MsIGNsYXNzTmFtZXMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBnZXRBcHBTdG9yZSwgaG9va3MsIHR5cGUgRGF0YVJlY29yZFNldCwgUmVhY3RSZWR1eCwgdHlwZSBJTVN0YXRlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgRGF0YUFjdGlvbkxpc3QsIERhdGFBY3Rpb25MaXN0U3R5bGUsIGRlZmF1bHRNZXNzYWdlcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIENoYXJ0VG9vbHMgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyB0eXBlIFJhbmdlQ3Vyc29yTW9kZVZhbHVlIH0gZnJvbSAnLi9yYW5nZS1jdXJzb3ItbW9kZSdcbmltcG9ydCB7IHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgeyBTZWxlY3Rpb25ab29tIH0gZnJvbSAnLi9zZWxlY3Rpb24tem9vbSdcbmltcG9ydCB7IEFjdGlvbk1vZGVzLCB0eXBlIENoYXJ0VHlwZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG5pbnRlcmZhY2UgVG9vbHNQcm9wcyB7XG4gIHR5cGU6IENoYXJ0VHlwZXNcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICBjbGFzc05hbWU/OiBib29sZWFuXG4gIHRvb2xzPzogSW1tdXRhYmxlT2JqZWN0PENoYXJ0VG9vbHM+XG4gIGVuYWJsZURhdGFBY3Rpb24/OiBib29sZWFuXG59XG5cbmNvbnN0IHN0eWxlID0gY3NzYFxuICAudG9vbC1kaXZpZGluZy1saW5lIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC00MDApO1xuICB9XG5gXG5cbmNvbnN0IFRvb2xzID0gKHByb3BzOiBUb29sc1Byb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyB0eXBlID0gJ2JhclNlcmllcycsIGNsYXNzTmFtZSwgd2lkZ2V0SWQsIHRvb2xzLCBlbmFibGVEYXRhQWN0aW9uIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3Qgd2lkZ2V0TGFiZWwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLndpZGdldHM/Llt3aWRnZXRJZF0/LmxhYmVsID8/ICdDaGFydCdcbiAgY29uc3QgZGF0YUFjdGlvbkxhYmVsID0gdHJhbnNsYXRlKCdvdXRwdXRTdGF0aXN0aWNzJywgeyBuYW1lOiB3aWRnZXRMYWJlbCB9KVxuICBjb25zdCB7IG91dHB1dERhdGFTb3VyY2UsIGNoYXJ0IH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG4gIGNvbnN0IGN1cnNvckVuYWJsZSA9IHRvb2xzPy5jdXJzb3JFbmFibGVcblxuICBjb25zdCBzZWxlY3RlZElkcyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZT8uZGF0YVNvdXJjZXNJbmZvW291dHB1dERhdGFTb3VyY2U/LmlkXT8uc2VsZWN0ZWRJZHMpXG4gIGNvbnN0IGFjdGlvbkRhdGFTZXRzOiBEYXRhUmVjb3JkU2V0W10gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZSA/IFt7IG5hbWU6IGRhdGFBY3Rpb25MYWJlbCwgdHlwZTogJ3NlbGVjdGVkJywgZGF0YVNvdXJjZTogb3V0cHV0RGF0YVNvdXJjZSwgcmVjb3Jkczogb3V0cHV0RGF0YVNvdXJjZT8uZ2V0U2VsZWN0ZWRSZWNvcmRzKCkgfV0gOiBbXVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtkYXRhQWN0aW9uTGFiZWwsIG91dHB1dERhdGFTb3VyY2UsIHNlbGVjdGVkSWRzXSlcblxuICBjb25zdCBoYW5kbGVSYW5nZU1vZGVDaGFuZ2UgPSAobW9kZTogUmFuZ2VDdXJzb3JNb2RlVmFsdWUpID0+IHtcbiAgICBpZiAobW9kZSA9PT0gJ3NlbGVjdGlvbicpIHtcbiAgICAgIGNoYXJ0Py5zZXRBY3Rpb25Nb2RlKEFjdGlvbk1vZGVzLk11bHRpU2VsZWN0aW9uV2l0aEN0cmxLZXkpXG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnem9vbScpIHtcbiAgICAgIGNoYXJ0Py5zZXRBY3Rpb25Nb2RlKEFjdGlvbk1vZGVzLlpvb20pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXJTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgY2hhcnQ/LmNsZWFyU2VsZWN0aW9uKClcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnNvckVuYWJsZSkge1xuICAgICAgY2hhcnQ/LnNldEFjdGlvbk1vZGUoQWN0aW9uTW9kZXMuTXVsdGlTZWxlY3Rpb25XaXRoQ3RybEtleSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQ/LnNldEFjdGlvbk1vZGUoQWN0aW9uTW9kZXMuTm9uZSlcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbY3Vyc29yRW5hYmxlLCBjaGFydF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAnY2hhcnQtdG9vbC1iYXIgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kIHB4LTIgcHQtMicsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHJvbGU9J2dyb3VwJ1xuICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCd0b29scycpfVxuICAgID5cbiAgICAgIHtjdXJzb3JFbmFibGUgJiYgKFxuICAgICAgICA8U2VsZWN0aW9uWm9vbVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdtci0xJ1xuICAgICAgICAgIG9uTW9kZUNoYW5nZT17aGFuZGxlUmFuZ2VNb2RlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xlYXJTZWxlY3Rpb249e2hhbmRsZUNsZWFyU2VsZWN0aW9ufVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2VuYWJsZURhdGFBY3Rpb24gJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0b29sLWRpdmlkaW5nLWxpbmUgbXgtMSc+PC9zcGFuPlxuICAgICAgICAgIDxEYXRhQWN0aW9uTGlzdFxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICAgICAgYnV0dG9uVHlwZT0ndGVydGlhcnknXG4gICAgICAgICAgICBsaXN0U3R5bGU9e0RhdGFBY3Rpb25MaXN0U3R5bGUuRHJvcGRvd259XG4gICAgICAgICAgICBkYXRhU2V0cz17YWN0aW9uRGF0YVNldHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHNcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFpvb21Jbk91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3Ivem9vbS1pbidcbmltcG9ydCB7IEJ1dHRvbiwgZGVmYXVsdE1lc3NhZ2VzLCBUb29sdGlwIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFNlbGVjdFJlY3RhbmdsZU91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9naXMvc2VsZWN0LXJlY3RhbmdsZSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRUeXBlcyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBpc1hZQ2hhcnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWZhdWx0J1xuXG5leHBvcnQgdHlwZSBSYW5nZUN1cnNvck1vZGVWYWx1ZSA9ICdzZWxlY3Rpb24nIHwgJ3pvb20nXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VDdXJzb3JNb2RlUHJvcHMge1xuICB0eXBlOiBDaGFydFR5cGVzXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBvbkNoYW5nZTogKG1vZGU/OiBSYW5nZUN1cnNvck1vZGVWYWx1ZSkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgUmFuZ2VDdXJzb3JNb2RlID0gKHByb3BzOiBSYW5nZUN1cnNvck1vZGVQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gUmVhY3QudXNlU3RhdGU8UmFuZ2VDdXJzb3JNb2RlVmFsdWU+KCdzZWxlY3Rpb24nKVxuXG4gIGNvbnN0IHsgdHlwZSA9ICdiYXJTZXJpZXMnLCBjbGFzc05hbWUsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmICh0eXBlID09PSAncGllU2VyaWVzJykgcmV0dXJuXG5cbiAgICBvbkNoYW5nZSgnc2VsZWN0aW9uJylcbiAgICBzZXRNb2RlKCdzZWxlY3Rpb24nKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlWm9vbUNsaWNrID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKCd6b29tJylcbiAgICBzZXRNb2RlKCd6b29tJylcbiAgfVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncmFuZ2UtY3Vyc29yLW1vZGUnLCBjbGFzc05hbWUpfT5cbiAgICA8VG9vbHRpcCB0aXRsZT17dHJhbnNsYXRlKCdTZWxlY3RMYWJlbCcpfT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTFcIlxuICAgICAgICBpY29uXG4gICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xuICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ1NlbGVjdExhYmVsJyl9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbGVjdGlvbkNsaWNrfVxuICAgICAgICBhY3RpdmU9e21vZGUgPT09ICdzZWxlY3Rpb24nfVxuICAgICAgPlxuICAgICAgICA8U2VsZWN0UmVjdGFuZ2xlT3V0bGluZWQgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvVG9vbHRpcD5cbiAgICB7aXNYWUNoYXJ0KHR5cGUpICYmIDxUb29sdGlwIHRpdGxlPXt0cmFuc2xhdGUoJ1pvb21MYWJlbCcpfT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgIGljb25cbiAgICAgICAgdHlwZT0ndGVydGlhcnknXG4gICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnWm9vbUxhYmVsJyl9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVpvb21DbGlja31cbiAgICAgICAgYWN0aXZlPXttb2RlID09PSAnem9vbSd9XG4gICAgICA+XG4gICAgICAgIDxab29tSW5PdXRsaW5lZCAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Ub29sdGlwPn1cbiAgPC9kaXY+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcywgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCdXR0b24sIGRlZmF1bHRNZXNzYWdlcywgVG9vbHRpcCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIFJhbmdlQ3Vyc29yTW9kZVByb3BzLCB0eXBlIFJhbmdlQ3Vyc29yTW9kZVZhbHVlLCBSYW5nZUN1cnNvck1vZGUgfSBmcm9tICcuL3JhbmdlLWN1cnNvci1tb2RlJ1xuaW1wb3J0IHsgVHJhc2hDaGVja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdHJhc2gtY2hlY2snXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uWm9vbVByb3BzIGV4dGVuZHMgT21pdDxSYW5nZUN1cnNvck1vZGVQcm9wcywgJ29uQ2hhbmdlJz4ge1xuICBvbk1vZGVDaGFuZ2U/OiAobW9kZT86IFJhbmdlQ3Vyc29yTW9kZVZhbHVlKSA9PiB2b2lkXG4gIG9uQ2xlYXJTZWxlY3Rpb24/OiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25ab29tID0gKHByb3BzOiBTZWxlY3Rpb25ab29tUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IHsgdHlwZSwgY2xhc3NOYW1lLCBvbk1vZGVDaGFuZ2UsIG9uQ2xlYXJTZWxlY3Rpb24gfSA9IHByb3BzXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdzZWxlY3Rpb24tem9vbSBkLWZsZXgnLCBjbGFzc05hbWUpfT5cbiAgICA8UmFuZ2VDdXJzb3JNb2RlIHR5cGU9e3R5cGV9IGNsYXNzTmFtZT1cIm1yLTFcIiBvbkNoYW5nZT17b25Nb2RlQ2hhbmdlfSAvPlxuICAgIDxUb29sdGlwIHRpdGxlPXt0cmFuc2xhdGUoJ2NsZWFyU2VsZWN0aW9uJyl9PlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzaXplPSdzbSdcbiAgICAgICAgaWNvblxuICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ2NsZWFyU2VsZWN0aW9uJyl9XG4gICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xuICAgICAgICBvbkNsaWNrPXtvbkNsZWFyU2VsZWN0aW9ufVxuICAgICAgPlxuICAgICAgICA8VHJhc2hDaGVja091dGxpbmVkIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1Rvb2x0aXA+XG4gIDwvZGl2PlxufVxuIiwiaW1wb3J0IHsgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCwgTGltaXRCZWhhdmlvciwgZ2V0U2VyaWVzVHlwZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgbm9ybWFsaXplU2VyaWVzIGZyb20gJy4vbm9ybWFsaXplLXNlcmllcydcbmltcG9ydCB1c2VTZWxlY3Rpb24gZnJvbSAnLi91c2Utc2VsZWN0aW9uJ1xuXG5jb25zdCBnZXRNaW5TYWZlVmFsdWUgPSAodjEsIHYyKSA9PiB7XG4gIGlmICh2MSA9PSBudWxsICYmIHYyID09IG51bGwpIHJldHVyblxuICBpZiAodjEgPT0gbnVsbCAmJiB2MiAhPSBudWxsKSByZXR1cm4gdjJcbiAgaWYgKHYxICE9IG51bGwgJiYgdjIgPT0gbnVsbCkgcmV0dXJuIHYxXG4gIHJldHVybiBNYXRoLm1pbih2MSwgdjIpXG59XG5cbmNvbnN0IGdldENoYXJ0TGltaXRzID0gKHNlcmllczogYW55LCBkZWZhdWx0Q2hhcnRMaW1pdHM6IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+LCBudW0/OiBudW1iZXIpID0+IHtcbiAgY29uc3QgY2hhcnRMaW1pdHM6IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+ID0ge31cbiAgY29uc3Qgc2VyaWVzTGVuZ3RoID0gc2VyaWVzPy5sZW5ndGhcbiAgaWYgKCFzZXJpZXNMZW5ndGgpIHJldHVybiBkZWZhdWx0Q2hhcnRMaW1pdHNcbiAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzKVxuXG4gIGxldCBiZWhhdmlvckFmdGVyTGltaXQ6IExpbWl0QmVoYXZpb3IgPSBMaW1pdEJlaGF2aW9yLlJlamVjdFxuXG4gIGlmIChzZXJpZXNUeXBlID09PSAnc2NhdHRlclNlcmllcycpIHtcbiAgICBjaGFydExpbWl0cy5tYXhTY2F0dGVyUG9pbnRzQmVmb3JlQWdncmVnYXRpb24gPSBkZWZhdWx0Q2hhcnRMaW1pdHMubWF4U2NhdHRlclBvaW50c0JlZm9yZUFnZ3JlZ2F0aW9uXG4gICAgY2hhcnRMaW1pdHMubWF4U2NhdHRlclBvaW50c0FmdGVyQWdncmVnYXRpb24gPSBkZWZhdWx0Q2hhcnRMaW1pdHMubWF4U2NhdHRlclBvaW50c0FmdGVyQWdncmVnYXRpb25cbiAgfVxuXG4gIGxldCBsaW1pdEtleSA9ICcnXG4gIGxldCBsaW1pdE51bSA9IC0xXG5cbiAgaWYgKHNlcmllc1R5cGUgPT09ICdiYXJTZXJpZXMnKSB7XG4gICAgY2hhcnRMaW1pdHMubWF4QmFyQ2hhcnRTZXJpZXNDb3VudCA9IGRlZmF1bHRDaGFydExpbWl0cy5tYXhCYXJDaGFydFNlcmllc0NvdW50XG4gICAgaWYgKHNlcmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpbWl0S2V5ID0gJ21heEJhclVuaXF1ZVNlcmllc0NvdW50VG90YWwnXG4gICAgfSBlbHNlIGlmIChzZXJpZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICBjaGFydExpbWl0cy5tYXhCYXJUd29TZXJpZXNDb3VudFRvdGFsID0gZGVmYXVsdENoYXJ0TGltaXRzLm1heEJhclR3b1Nlcmllc0NvdW50VG90YWxcbiAgICAgIGxpbWl0S2V5ID0gJ21heEJhclR3b1Nlcmllc0NvdW50UGVyU2VyaWVzJ1xuICAgIH0gZWxzZSBpZiAoc2VyaWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgIGNoYXJ0TGltaXRzLm1heEJhclRocmVlUGx1c1Nlcmllc0NvdW50VG90YWwgPSBkZWZhdWx0Q2hhcnRMaW1pdHMubWF4QmFyVGhyZWVQbHVzU2VyaWVzQ291bnRUb3RhbFxuICAgICAgbGltaXRLZXkgPSAnbWF4QmFyVGhyZWVQbHVzU2VyaWVzQ291bnRQZXJTZXJpZXMnXG4gICAgfVxuICB9IGVsc2UgaWYgKHNlcmllc1R5cGUgPT09ICdsaW5lU2VyaWVzJykge1xuICAgIGNoYXJ0TGltaXRzLm1heExpbmVDaGFydFNlcmllc0NvdW50ID0gZGVmYXVsdENoYXJ0TGltaXRzLm1heExpbmVDaGFydFNlcmllc0NvdW50XG4gICAgaWYgKHNlcmllcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxpbWl0S2V5ID0gJ21heExpbmVVbmlxdWVTZXJpZXNDb3VudFRvdGFsJ1xuICAgIH0gZWxzZSBpZiAoc2VyaWVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgY2hhcnRMaW1pdHMubWF4TGluZVR3b1Nlcmllc0NvdW50VG90YWwgPSBkZWZhdWx0Q2hhcnRMaW1pdHMubWF4TGluZVR3b1Nlcmllc0NvdW50VG90YWxcbiAgICAgIGxpbWl0S2V5ID0gJ21heExpbmVUd29TZXJpZXNDb3VudFBlclNlcmllcydcbiAgICB9IGVsc2UgaWYgKHNlcmllcy5sZW5ndGggPiAyKSB7XG4gICAgICBjaGFydExpbWl0cy5tYXhMaW5lVGhyZWVQbHVzU2VyaWVzQ291bnRUb3RhbCA9IGRlZmF1bHRDaGFydExpbWl0cy5tYXhMaW5lVGhyZWVQbHVzU2VyaWVzQ291bnRUb3RhbFxuICAgICAgbGltaXRLZXkgPSAnbWF4TGluZVRocmVlUGx1c1Nlcmllc0NvdW50UGVyU2VyaWVzJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChzZXJpZXNUeXBlID09PSAncGllU2VyaWVzJykge1xuICAgIGxpbWl0S2V5ID0gJ21heFBpZUNoYXJ0U2xpY2VDb3VudFRvdGFsJ1xuICB9XG4gIGNvbnN0IGRlZmF1bHRMaW1pdE51bSA9IGRlZmF1bHRDaGFydExpbWl0c1tsaW1pdEtleV1cbiAgaWYgKG51bSAmJiBudW0gPD0gZGVmYXVsdExpbWl0TnVtKSB7XG4gICAgbGltaXROdW0gPSBudW1cbiAgICBiZWhhdmlvckFmdGVyTGltaXQgPSBMaW1pdEJlaGF2aW9yLlJlbmRlclVwVG9UaGVMaW1pdFxuICB9IGVsc2Uge1xuICAgIGxpbWl0TnVtID0gZGVmYXVsdExpbWl0TnVtXG4gIH1cbiAgaWYgKGxpbWl0S2V5KSB7XG4gICAgY2hhcnRMaW1pdHNbbGltaXRLZXldID0gbGltaXROdW1cbiAgfVxuICBjaGFydExpbWl0cy5iZWhhdmlvckFmdGVyTGltaXQgPSBiZWhhdmlvckFmdGVyTGltaXRcbiAgcmV0dXJuIGNoYXJ0TGltaXRzXG59XG5cbmV4cG9ydCB7IG5vcm1hbGl6ZVNlcmllcywgdXNlU2VsZWN0aW9uLCBnZXRNaW5TYWZlVmFsdWUsIGdldENoYXJ0TGltaXRzIH1cbiIsImltcG9ydCB7IHR5cGUgRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWZhdWx0J1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlLCB0eXBlIFdlYkNoYXJ0U2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZ2V0U2VyaWVzVHlwZSwgZ2V0U3BsaXRCeVZhbHVlIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IGdldENhdGVnb3J5VHlwZSwgZ2V0U3BsaXRPdXRTdGF0aXN0aWNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uL3NlcmlhbCdcblxuY29uc3QgZ2V0U2luZ2xlUXVlcnlGb3JCeUdyb3VwID0gKHNlcmllOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+LCBxdWVyaWVzOiBJbW11dGFibGVPYmplY3Q8RmVhdHVyZUxheWVyUXVlcnlQYXJhbXM+KTogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPiA9PiB7XG4gIGNvbnN0IHkgPSAoc2VyaWUgYXMgYW55KS55XG4gIGNvbnN0IG91dFN0YXRpc3RpY3MgPSBxdWVyaWVzLm91dFN0YXRpc3RpY3MuZmlsdGVyKChzKSA9PiBzLm91dFN0YXRpc3RpY0ZpZWxkTmFtZSA9PT0geSlcbiAgY29uc3QgeyBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcywgb3JkZXJCeUZpZWxkcywgcGFnZVNpemUgfSA9IHF1ZXJpZXNcbiAgY29uc3QgcXVlcnkgPSB7IGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzLCBvdXRTdGF0aXN0aWNzLCBvcmRlckJ5RmllbGRzLCBudW06IHBhZ2VTaXplIH1cbiAgcmV0dXJuIHNlcmllLnNldCgncXVlcnknLCBxdWVyeSlcbn1cblxuY29uc3QgZ2V0U2luZ2xlUXVlcnlGb3JOb0FnZ3JlZ2F0aW9uID0gKHNlcmllOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+LCBxdWVyaWVzOiBJbW11dGFibGVPYmplY3Q8RmVhdHVyZUxheWVyUXVlcnlQYXJhbXM+KTogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPiA9PiB7XG4gIGNvbnN0IHsgb3JkZXJCeUZpZWxkcywgcGFnZVNpemUgfSA9IHF1ZXJpZXNcbiAgY29uc3QgcXVlcnkgPSB7IG9yZGVyQnlGaWVsZHMsIG51bTogcGFnZVNpemUgfVxuICByZXR1cm4gc2VyaWUuc2V0KCdxdWVyeScsIHF1ZXJ5KVxufVxuXG5jb25zdCBnZXRTaW5nbGVRdWVyeUZvclNwbGl0QnkgPSAoc2VyaWU6IEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNlcmllcz4sIHF1ZXJpZXM6IEltbXV0YWJsZU9iamVjdDxGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcz4pOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+ID0+IHtcbiAgY29uc3Qgd2hlcmUgPSBzZXJpZS5xdWVyeS53aGVyZVxuICBjb25zdCBzcGxpdEJ5VmFsdWUgPSBnZXRTcGxpdEJ5VmFsdWUoeyB3aGVyZSwgbm9ybWFsaXplOiB0cnVlIH0pXG4gIGlmIChxdWVyaWVzLm91dEZpZWxkcz8ubGVuZ3RoKSB7IC8vbm8gYWdncmVnYXRpb25cbiAgICBjb25zdCB7IG9yZGVyQnlGaWVsZHMsIHBhZ2VTaXplIH0gPSBxdWVyaWVzXG4gICAgY29uc3QgcXVlcnkgPSB7IHdoZXJlLCBvcmRlckJ5RmllbGRzLCBudW06IHBhZ2VTaXplIH1cbiAgICByZXR1cm4gc2VyaWUuc2V0KCdxdWVyeScsIHF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG9uU3RhdGlzdGljRmllbGQgPSBxdWVyaWVzLm91dFN0YXRpc3RpY3NbMF0ub25TdGF0aXN0aWNGaWVsZFxuICAgIGNvbnN0IHN0YXRpc3RpY1R5cGUgPSBxdWVyaWVzLm91dFN0YXRpc3RpY3NbMF0uc3RhdGlzdGljVHlwZVxuICAgIGNvbnN0IG91dFN0YXRpc3RpY0ZpZWxkTmFtZSA9IGdldFNwbGl0T3V0U3RhdGlzdGljTmFtZShvblN0YXRpc3RpY0ZpZWxkLCBzdGF0aXN0aWNUeXBlLCBzcGxpdEJ5VmFsdWUpXG4gICAgY29uc3Qgb3V0U3RhdGlzdGljcyA9IFt7XG4gICAgICAuLi5xdWVyaWVzLm91dFN0YXRpc3RpY3NbMF0sXG4gICAgICBvdXRTdGF0aXN0aWNGaWVsZE5hbWVcbiAgICB9XVxuICAgIGNvbnN0IHsgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MsIG9yZGVyQnlGaWVsZHMsIHBhZ2VTaXplIH0gPSBxdWVyaWVzXG4gICAgY29uc3QgcXVlcnkgPSB7IHdoZXJlLCBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcywgb3V0U3RhdGlzdGljcywgb3JkZXJCeUZpZWxkcywgbnVtOiBwYWdlU2l6ZSB9XG4gICAgcmV0dXJuIHNlcmllLnNldCgncXVlcnknLCBxdWVyeSkuc2V0KCd5Jywgb3V0U3RhdGlzdGljRmllbGROYW1lKVxuICB9XG59XG5cbmNvbnN0IG5vcm1hbGl6ZVNlcmllcyA9IChzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPiwgcXVlcnk6IEltbXV0YWJsZU9iamVjdDxGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcz4pID0+IHtcbiAgbGV0IGNhbGxiYWNrID0gbnVsbFxuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZShzZXJpZXMgYXMgYW55KVxuICBjb25zdCB1c2VTcGxpdEJ5ID0gISFxdWVyeS53aGVyZVxuICBpZiAodXNlU3BsaXRCeSkge1xuICAgIGNhbGxiYWNrID0gZ2V0U2luZ2xlUXVlcnlGb3JTcGxpdEJ5XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzU2VyaWFsU2VyaWVzKHR5cGUpIHx8IHR5cGUgPT09ICdwaWVTZXJpZXMnKSB7XG4gICAgICBjb25zdCBvdXRGaWVsZHMgPSBxdWVyeT8ub3V0RmllbGRzXG4gICAgICBpZiAob3V0RmllbGRzPy5sZW5ndGgpIHsgLy9ubyBhZ2dyZWdhdGlvblxuICAgICAgICBjYWxsYmFjayA9IGdldFNpbmdsZVF1ZXJ5Rm9yTm9BZ2dyZWdhdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICAgICAgICBpZiAoY2F0ZWdvcnlUeXBlID09PSBDYXRlZ29yeVR5cGUuQnlHcm91cCkge1xuICAgICAgICAgIGNhbGxiYWNrID0gZ2V0U2luZ2xlUXVlcnlGb3JCeUdyb3VwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHNlcmllcz8ubWFwKChzZXJpZSkgPT4gY2FsbGJhY2soc2VyaWUsIHF1ZXJ5KSlcbiAgfVxuICByZXR1cm4gc2VyaWVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZVNlcmllc1xuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSU1TdGF0ZSwgUmVhY3RSZWR1eCwgbG9kYXNoLCBNZXNzYWdlTWFuYWdlciwgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCB0eXBlIERhdGFTb3VyY2UsIGhvb2tzLCB0eXBlIERhdGFSZWNvcmQsIHR5cGUgSW1tdXRhYmxlQXJyYXkgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNlbGVjdGlvbkRhdGEsIFNlbGVjdGlvblNvdXJjZSwgZ2V0U3BsaXRCeUZpZWxkLCB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgdHlwZSBXZWJDaGFydFNlcmllcyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuY29uc3QgaXNSZWNvcmRNYXRjaCA9IChyZWMxOiB7IFt4OiBzdHJpbmddOiBhbnkgfSwgcmVjMjogeyBbeDogc3RyaW5nXTogYW55IH0pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHJlYzIpLmV2ZXJ5KGtleSA9PiByZWMxW2tleV0gPT09IHJlYzJba2V5XSlcbn1cblxuLyoqXG4gKiBNYXRjaCB0aGUgZGF0YSBpbiB0aGUgcmVjb3JkcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgZGF0YS4gSWYgdGhlIHNlbGVjdGVkIGRhdGEgY29tcGxldGVseSBtYXRjaGVzIHRoZSBkYXRhIGluIHNvbWUgb2YgdGhlIHJlY29yZHMsIHJldHVybiB0aGVtLlxuICogTm90ZTE6IFRoZSBudW1iZXIgb2YgZmllbGRzIGluIHJlY29yZCBpcyBkaWZmZXJlbnQgZnJvbSBzZWxlY3QgaXRlbS4gRm9yIGV4YW1wbGUsIHRoZXJlIGlzIGBvYmplY3RpZGAgaW4gcmVjb3JkIGJ1dCBub3QgaW4gc2VsZWN0IGl0ZW0uXG4gKiBOb3RlMjogVGhlcmUgaXMgYSBwb3RlbnRpYWwgcHJvYmxlbSB3aXRoIGBubyBhZ2dyZWdhdGlvbmAgaW4gdGhpcyBtYXRjaGluZyBwYWlyLiBUaGVyZSBtYXkgYmUgdHdvIHJlY29yZHMgd2hvc2UgZmllbGRzIChub24tb2JqZWN0aWQpIGFuZCB2YWx1ZXMgYXJlIGV4YWN0bHkgdGhlIHNhbWUuXG4gKi9cbmNvbnN0IGdldE1hdGNoZWRSZWNvcmRzID0gKHJlY29yZHM6IERhdGFSZWNvcmRbXSwgc2VsZWN0aW9uSXRlbXM6IEFycmF5PHsgW3g6IHN0cmluZ106IGFueSB9PikgPT4ge1xuICByZXR1cm4gcmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVjb3JkLmdldERhdGEoKVxuICAgIHJldHVybiBzZWxlY3Rpb25JdGVtcy5zb21lKGl0ZW0gPT4gaXNSZWNvcmRNYXRjaChkYXRhLCBpdGVtKSlcbiAgfSlcbn1cblxuY29uc3QgZ2V0Tm9ybWFsaXplZFNlbGVjdGlvbkl0ZW1zID0gKHNlbGVjdGlvbkl0ZW1zOiBBcnJheTx7IFt4OiBzdHJpbmddOiBhbnkgfT4sIHNwbGl0QnlGaWVsZDogc3RyaW5nKSA9PiB7XG4gIGlmICghc3BsaXRCeUZpZWxkKSByZXR1cm4gc2VsZWN0aW9uSXRlbXNcbiAgcmV0dXJuIHNlbGVjdGlvbkl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAuLi5pdGVtXG4gICAgfVxuICAgIGRlbGV0ZSBkYXRhW3NwbGl0QnlGaWVsZF1cbiAgICByZXR1cm4gZGF0YVxuICB9KVxufVxuXG4vKipcbiAqIEdldCBzZWxlY3Rpb24gaXRlbXMgYnkgdGhlIHNlbGVjdGVkIGlkIGZyb20gZGF0YSBzb3VyY2UuXG4gKi9cbmNvbnN0IGdldFNlbGVjdGVkSXRlbXMgPSAoXG4gIHNlbGVjdGVkSWRzOiBzdHJpbmdbXSxcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdXG4pOiBXZWJDaGFydERhdGFJdGVtW10gPT4ge1xuICBjb25zdCBpdGVtcyA9IHNlbGVjdGVkSWRzLm1hcCgoaWQpID0+IHtcbiAgICBjb25zdCByZWNvcmQgPSByZWNvcmRzLmZpbmQoKHJlY29yZCkgPT4gcmVjb3JkLmdldElkKCkgPT09IGlkKVxuICAgIGxldCBkYXRhID0gbnVsbFxuICAgIGlmIChyZWNvcmQpIHtcbiAgICAgIGRhdGEgPSByZWNvcmQuZ2V0RGF0YSgpXG4gICAgICBkYXRhID0geyAuLi5kYXRhIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbiAgfSkuZmlsdGVyKChpdGVtKSA9PiAhIWl0ZW0pXG4gIHJldHVybiBpdGVtc1xufVxuXG4vKipcbiAqIEtlZXAgdGhlIHNlbGVjdGlvbiBvZiBjaGFydCBhbmQgb3V0cHV0IGRhdGEgc291cmNlLCBwdWJsaXNoIG1lc3NhZ2Ugd2hlbiBzZWxlY3Rpb24gY2hhbmdlcy5cbiAqIEBwYXJhbSB3aWRnZXRJZFxuICogQHBhcmFtIG91dHB1dERhdGFTb3VyY2VcbiAqIEBwYXJhbSBkYXRhSXRlbXNcbiAqIEBwYXJhbSBzZXJpZXNMZW5ndGhcbiAqL1xuY29uc3QgdXNlU2VsZWN0aW9uID0gKFxuICB3aWRnZXRJZDogc3RyaW5nLFxuICBvdXRwdXREYXRhU291cmNlOiBEYXRhU291cmNlLFxuICBzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPlxuKTogW1NlbGVjdGlvbkRhdGEsICguLi5hcmdzOiBhbnlbXSkgPT4gYW55XSA9PiB7XG4gIGNvbnN0IHByZVNlbGVjdGVkSWRzUmVmID0gUmVhY3QudXNlUmVmPHN0cmluZ1tdPigpXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbkNoYW5nZSA9IGhvb2tzLnVzZUV2ZW50Q2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCBzb3VyY2VSZWNvcmRzID0gb3V0cHV0RGF0YVNvdXJjZT8uZ2V0U291cmNlUmVjb3JkcygpXG4gICAgaWYgKCFzb3VyY2VSZWNvcmRzPy5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IHNlbGVjdGlvblNvdXJjZTogU2VsZWN0aW9uU291cmNlID0gZS5kZXRhaWwuc2VsZWN0aW9uU291cmNlXG4gICAgLy8gT25seSB0cmlnZ2VyIHNlbGVjdGlvbiBjaGFuZ2UgbWVzc2FnZSBpZiBzZWxlY3Rpb24gc291cmNlIGlzIGZyb20gdGhlIHVzZXIgb3BlcmF0aW9uXG4gICAgY29uc3Qgc2VsZWN0aW9uQnlVc2VyID1cbiAgICAgIHNlbGVjdGlvblNvdXJjZSA9PT0gU2VsZWN0aW9uU291cmNlLlNlbGVjdGlvbkJ5Q2xpY2sgfHxcbiAgICAgIHNlbGVjdGlvblNvdXJjZSA9PT0gU2VsZWN0aW9uU291cmNlLlNlbGVjdGlvbkJ5UmFuZ2UgfHxcbiAgICAgIHNlbGVjdGlvblNvdXJjZSA9PT0gU2VsZWN0aW9uU291cmNlLkNsZWFyU2VsZWN0aW9uXG4gICAgaWYgKCFzZWxlY3Rpb25CeVVzZXIpIHJldHVyblxuICAgIGNvbnN0IHdoZXJlID0gc2VyaWVzWzBdLnF1ZXJ5Py53aGVyZVxuICAgIGNvbnN0IHNwbGl0QnlGaWVsZCA9IGdldFNwbGl0QnlGaWVsZCh3aGVyZSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkl0ZW1zID0gZ2V0Tm9ybWFsaXplZFNlbGVjdGlvbkl0ZW1zKGUuZGV0YWlsLnNlbGVjdGlvbkl0ZW1zID8/IFtdLCBzcGxpdEJ5RmllbGQpXG4gICAgY29uc3Qgc2VsZWN0ZWRSZWNvcmRzID0gZ2V0TWF0Y2hlZFJlY29yZHMoc291cmNlUmVjb3Jkcywgc2VsZWN0aW9uSXRlbXMpXG4gICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBzZWxlY3RlZFJlY29yZHMubWFwKHJlY29yZCA9PiByZWNvcmQuZ2V0SWQoKSlcblxuICAgIHByZVNlbGVjdGVkSWRzUmVmLmN1cnJlbnQgPSBzZWxlY3RlZElkc1xuXG4gICAgLy9QdWJsaXNoIHJlY29yZHMgc2VsZWN0aW9uIGNoYW5nZSBtZXNzYWdlXG4gICAgTWVzc2FnZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdWJsaXNoTWVzc2FnZShcbiAgICAgIG5ldyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2Uod2lkZ2V0SWQsIHNlbGVjdGVkUmVjb3JkcylcbiAgICApXG5cbiAgICBvdXRwdXREYXRhU291cmNlLnNlbGVjdFJlY29yZHNCeUlkcyhzZWxlY3RlZElkcylcbiAgfSlcblxuICBjb25zdCBvcmlnaW5hbFNlbGVjdGVkSWRzID0gUmVhY3RSZWR1eC51c2VTZWxlY3Rvcigoc3RhdGU6IElNU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzSW5mbz8uW291dHB1dERhdGFTb3VyY2U/LmlkXT8uc2VsZWN0ZWRJZHMpXG4gIGNvbnN0IFtzZWxlY3Rpb25JbmRleGVzLCBzZXRTZWxlY3Rpb25JbmRleGVzXSA9IFJlYWN0LnVzZVN0YXRlPFdlYkNoYXJ0RGF0YUl0ZW1bXT4oKVxuXG4gIGNvbnN0IGdldFNlbGVjdGlvbkl0ZW1zID0gaG9va3MudXNlRXZlbnRDYWxsYmFjaygoc2VsZWN0ZWRJZHMpID0+IHtcbiAgICBjb25zdCBzb3VyY2VSZWNvcmRzID0gb3V0cHV0RGF0YVNvdXJjZT8uZ2V0U291cmNlUmVjb3JkcygpXG4gICAgaWYgKCFzb3VyY2VSZWNvcmRzPy5sZW5ndGgpIHJldHVyblxuICAgIGNvbnN0IGl0ZW1zID0gZ2V0U2VsZWN0ZWRJdGVtcyhzZWxlY3RlZElkcyA/PyBbXSwgc291cmNlUmVjb3JkcylcbiAgICByZXR1cm4gaXRlbXNcbiAgfSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb3JpZ2luYWxTZWxlY3RlZElkcykgcmV0dXJuXG4gICAgY29uc3QgbXV0YWJsZVNlbGVjdGlvbklkcyA9IG9yaWdpbmFsU2VsZWN0ZWRJZHMuYXNNdXRhYmxlKClcbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgaWRzIGlzIHNhbWUgYXMgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgaWRzLCBqdXN0IHJldHVybi5cbiAgICBpZiAobG9kYXNoLmlzRGVlcEVxdWFsKG11dGFibGVTZWxlY3Rpb25JZHMsIHByZVNlbGVjdGVkSWRzUmVmLmN1cnJlbnQpKSByZXR1cm5cbiAgICBwcmVTZWxlY3RlZElkc1JlZi5jdXJyZW50ID0gbXV0YWJsZVNlbGVjdGlvbklkc1xuICAgIGNvbnN0IHNlbGVjdGlvbkl0ZW1zID0gZ2V0U2VsZWN0aW9uSXRlbXMobXV0YWJsZVNlbGVjdGlvbklkcylcbiAgICBzZXRTZWxlY3Rpb25JbmRleGVzKHNlbGVjdGlvbkl0ZW1zKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW29yaWdpbmFsU2VsZWN0ZWRJZHNdKVxuICBjb25zdCBzZWxlY3Rpb25EYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyBzZWxlY3Rpb25JdGVtczogc2VsZWN0aW9uSW5kZXhlcyB9KSwgW3NlbGVjdGlvbkluZGV4ZXNdKVxuICByZXR1cm4gW3NlbGVjdGlvbkRhdGEsIGhhbmRsZVNlbGVjdGlvbkNoYW5nZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2VsZWN0aW9uXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBEYXRhU291cmNlLCB0eXBlIElNU3FsRXhwcmVzc2lvbiwgdHlwZSBEYXRhUmVjb3JkIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBVbnByaXZpbGVnZWRDaGFydCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5cbmV4cG9ydCB0eXBlIFJlY29yZHNTdGF0dXMgPSAnbm9uZScgfCAnZXJyb3InIHwgJ2VtcHR5JyB8ICdsb2FkaW5nJyB8ICdsb2FkZWQnIHwgJ2V4Y2VlZCdcblxuZXhwb3J0IGludGVyZmFjZSBDaGFydFJ1bnRpbWVTdGF0ZSB7XG4gIC8vVGhlIGVsZW1lbnQgb2YgdGhlIGNoYXJ0IHdlYiBjb21wb25lbnQsIHdoaWNoIGlzIHVzZWQgaW4gYHJhbmdlLWN1cnNvci1tb2RlYCB0b29sLlxuICBjaGFydD86IFVucHJpdmlsZWdlZENoYXJ0XG4gIC8vRmlsdGVyIGNyaXRlcmlhIHVzZWQgZm9yIG9yaWdpbmFsIGRhdGEuXG4gIGZpbHRlcj86IElNU3FsRXhwcmVzc2lvblxuICAvL1RoZSBkYXRhIHNvdXJjZSBpbnN0YW5jZSBvZiB0aGUgYHVzZURhdGFTb3VyY2VgLlxuICBkYXRhU291cmNlPzogRGF0YVNvdXJjZVxuICAvL1RoZSBkYXRhIHNvdXJjZSBpbnN0YW5jZSBvZiBgb3V0cHV0RGF0YVNvdXJjZWAuXG4gIG91dHB1dERhdGFTb3VyY2U/OiBEYXRhU291cmNlXG4gIC8vVGhlIGZldGNoZWQgcmVjb3Jkcy5cbiAgcmVjb3Jkcz86IERhdGFSZWNvcmRbXVxuICAvL1RoZSByZXF1ZXN0IHN0YXR1cyBvZiByZWNvcmRzXG4gIHJlY29yZHNTdGF0dXM/OiBSZWNvcmRzU3RhdHVzXG4gIC8vVGhlIHZlcnNpb24gb2YgdGhlIGRhdGEgc291cmNlIHF1ZXJ5XG4gIHF1ZXJ5VmVyc2lvbj86IG51bWJlclxufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IENoYXJ0UnVudGltZVN0YXRlID0ge1xuICBjaGFydDogbnVsbCxcbiAgZmlsdGVyOiBudWxsLFxuICBkYXRhU291cmNlOiBudWxsLFxuICBvdXRwdXREYXRhU291cmNlOiBudWxsLFxuICByZWNvcmRzU3RhdHVzOiAnbm9uZScsXG4gIHF1ZXJ5VmVyc2lvbjogMFxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBDaGFydFJ1bnRpbWVTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfQ0hBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNoYXJ0OiBhY3Rpb24udmFsdWUgfVxuICAgIGNhc2UgJ1NFVF9GSUxURVInOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZpbHRlcjogYWN0aW9uLnZhbHVlIH1cbiAgICBjYXNlICdTRVRfREFUQV9TT1VSQ0UnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhdGFTb3VyY2U6IGFjdGlvbi52YWx1ZSB9XG4gICAgY2FzZSAnU0VUX09VVFBVVF9EQVRBX1NPVVJDRSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb3V0cHV0RGF0YVNvdXJjZTogYWN0aW9uLnZhbHVlIH1cbiAgICBjYXNlICdTRVRfUkVDT1JEUyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkczogYWN0aW9uLnZhbHVlIH1cbiAgICBjYXNlICdTRVRfUkVDT1JEU19TVEFUVVMnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlY29yZHNTdGF0dXM6IGFjdGlvbi52YWx1ZSB9XG4gICAgY2FzZSAnU0VUX1FVRVJZX1ZFUlNJT04nOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHF1ZXJ5VmVyc2lvbjogYWN0aW9uLnZhbHVlIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgQ2hhcnRSdW50aW1lU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDaGFydFJ1bnRpbWVTdGF0ZT4odW5kZWZpbmVkKVxuY29uc3QgQ2hhcnRSdW50aW1lRGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxSZWFjdC5EaXNwYXRjaDxhbnk+Pih1bmRlZmluZWQpXG5cbmludGVyZmFjZSBDaGFydFJ1bnRpbWVTdGF0ZVByb3ZpZGVyUHJvcHMge1xuICBkZWZhdWx0U3RhdGU/OiBDaGFydFJ1bnRpbWVTdGF0ZVxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBjb25zdCBDaGFydFJ1bnRpbWVTdGF0ZVByb3ZpZGVyID0gKHByb3BzOiBDaGFydFJ1bnRpbWVTdGF0ZVByb3ZpZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBkZWZhdWx0U3RhdGUsIGNoaWxkcmVuIH0gPSBwcm9wc1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcjx0eXBlb2YgcmVkdWNlcj4ocmVkdWNlciwgZGVmYXVsdFN0YXRlIHx8IGluaXRpYWxTdGF0ZSlcblxuICByZXR1cm4gPENoYXJ0UnVudGltZVN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgIDxDaGFydFJ1bnRpbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoYXJ0UnVudGltZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgPC9DaGFydFJ1bnRpbWVTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBjb25zdCB1c2VDaGFydFJ1bnRpbWVTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoQ2hhcnRSdW50aW1lU3RhdGVDb250ZXh0KVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KENoYXJ0UnVudGltZURpc3BhdGNoQ29udGV4dClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnQ2hhcnQnLFxuICBiYXIxU2VyaWVzTGltaXRhdGlvbjogJ0JhciBvciBjb2x1bW4gY2hhcnRzIHdpdGggb25lIHNlcmllcyBhcmUgbGltaXRlZCB0byAxMCwwMDAgYmFycyBpbiB0b3RhbC4gUGxlYXNlIGZpbHRlciBvciByZS1hZ2dyZWdhdGUgeW91ciBkYXRhIGFuZCB0cnkgYWdhaW4uJyxcbiAgYmFyMlNlcmllc0xpbWl0YXRpb246ICdCYXIgb3IgY29sdW1uIGNoYXJ0cyB3aXRoIHR3byBzZXJpZXMgYXJlIGxpbWl0ZWQgdG8gMiwwMDAgYmFycywgb3IgMSwwMDAgYmFycyBwZXIgc2VyaWVzLiBQbGVhc2UgZmlsdGVyIG9yIHJlLWFnZ3JlZ2F0ZSB5b3VyIGRhdGEgYW5kIHRyeSBhZ2Fpbi4nLFxuICBiYXIzU2VyaWVzTGltaXRhdGlvbjogJ0JhciBvciBjb2x1bW4gY2hhcnRzIHdpdGggdGhyZWUgb3IgbW9yZSBzZXJpZXMgYXJlIGxpbWl0ZWQgdG8gMiwwMDAgYmFycywgb3IgMTAwIGJhcnMgcGVyIHNlcmllcy4gUGxlYXNlIGZpbHRlciBvciByZS1hZ2dyZWdhdGUgeW91ciBkYXRhIGFuZCB0cnkgYWdhaW4uJyxcbiAgbGluZUxpbWl0YXRpb246ICdMaW5lIG9yIGFyZWEgY2hhcnRzIGFyZSBsaW1pdGVkIHRvIDEwLDAwMCB2YWx1ZSBtYXJrZXJzIGluIHRvdGFsIGFuZCBtYXhpbXVtIG9mIDEwMCBzZXJpZXMuIFBsZWFzZSBmaWx0ZXIgb3IgcmUtYWdncmVnYXRlIHlvdXIgZGF0YSBhbmQgdHJ5IGFnYWluLicsXG4gIHBpZUxpbWl0YXRpb246ICdDYW5ub3QgcmVuZGVyLCB0b28gbWFueSBjYXRlZ29yaWVzLiBQaWUgY2hhcnQgaXMgbGltaXRlZCB0byAzMDAgY2F0ZWdvcmllcyBhcyB0aGUgbWF4aW11bS4nLFxuICBkYXRhRW1wdHlUaXA6ICdObyBkYXRhIGZvdW5kLidcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vc2VyaWFsJ1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWEnXG4iLCJpbXBvcnQgeyBFc3JpRmllbGRUeXBlLCB0eXBlIEZpZWxkRm9ybWF0U2NoZW1hLCB0eXBlIEZpZWxkU2NoZW1hLCBKaW11RmllbGRUeXBlLCB0eXBlIElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHR5cGUgSW1tdXRhYmxlQXJyYXksIEltbXV0YWJsZSwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgSU1GaWVsZFNjaGVtYSwgU3RhdGlzdGljVHlwZSwgdHlwZSBEYXRhU291cmNlU2NoZW1hLCB0eXBlIERhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBCeUZpZWxkU2VyaWVzWCwgQnlGaWVsZFNlcmllc1hBbGlhcywgQnlGaWVsZFNlcmllc1ksIEJ5RmllbGRTZXJpZXNZQWxpYXMsIEhpc3RvZ3JhbUNvdW50RmllbGQsIEhpc3RvZ3JhbUNvdW50RmllbGRBbGlhcywgSGlzdG9ncmFtTWF4VmFsdWVGaWVsZCwgSGlzdG9ncmFtTWF4VmFsdWVGaWVsZEFsaWFzLCBIaXN0b2dyYW1NaW5WYWx1ZUZpZWxkLCBIaXN0b2dyYW1NaW5WYWx1ZUZpZWxkQWxpYXMsIFNwbGl0QnlPdGhlclNlcmllc1ZhbHVlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0U3BsaXRCeUZpZWxkLCB0eXBlIENoYXJ0VHlwZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi9kZWZhdWx0J1xuaW1wb3J0IHsgZ2V0RmllbGRTY2hlbWEsIGdldE91dFN0YXRpc3RpY0FsaWFzLCBnZXRTcGxpdEJ5RmllbGRWYWx1ZXMsIGdldFNwbGl0T3V0U3RhdGlzdGljQWxpYXMsIGdldFNwbGl0T3V0U3RhdGlzdGljTmFtZSB9IGZyb20gJy4vc2VyaWFsJ1xuaW1wb3J0IHsgdHlwZSBXZWJDaGFydFNlcmllcyB9IGZyb20gJy4uLy4uL2NvbmZpZydcblxuY29uc3QgZ2V0Q2xlYW5GaWVsZFNjaGVtYSA9IChmaWVsZDogc3RyaW5nLCB0eXBlOiBKaW11RmllbGRUeXBlLCBhbGlhcz86IHN0cmluZywgb3JpZ2luRmllbGRzPzogc3RyaW5nW10pOiBGaWVsZFNjaGVtYSA9PiB7XG4gIGNvbnN0IGppbXVOYW1lID0gZmllbGRcbiAgY29uc3QgbmFtZSA9IGZpZWxkXG4gIGFsaWFzID0gYWxpYXMgPz8gZmllbGRcblxuICBsZXQgZXNyaVR5cGUgPSBFc3JpRmllbGRUeXBlLlN0cmluZ1xuICBsZXQgZm9ybWF0OiBGaWVsZEZvcm1hdFNjaGVtYSA9IG51bGxcbiAgaWYgKHR5cGUgPT09IEppbXVGaWVsZFR5cGUuTnVtYmVyKSB7XG4gICAgZm9ybWF0ID0ge1xuICAgICAgZGlnaXRTZXBhcmF0b3I6IHRydWUsXG4gICAgICBwbGFjZXM6IDNcbiAgICB9XG4gICAgZXNyaVR5cGUgPSBFc3JpRmllbGRUeXBlLkRvdWJsZVxuICB9XG4gIGNvbnN0IHNjaGVtYTogRmllbGRTY2hlbWEgPSB7IGppbXVOYW1lLCB0eXBlLCBlc3JpVHlwZSwgbmFtZSwgYWxpYXMsIGZvcm1hdCB9XG4gIGlmIChvcmlnaW5GaWVsZHMpIHtcbiAgICBzY2hlbWEub3JpZ2luRmllbGRzID0gb3JpZ2luRmllbGRzXG4gIH1cbiAgcmV0dXJuIHNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SGlzdG9ncmFtRmllbGRzID0gKHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhU291cmNlSWQ6IHN0cmluZyk6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TmFtZTogc3RyaW5nXTogRmllbGRTY2hlbWEgfT4gPT4ge1xuICBsZXQgZmllbGRzID0gSW1tdXRhYmxlKHt9KSBhcyBJbW11dGFibGVPYmplY3Q8eyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0+XG5cbiAgY29uc3Qgb3JpZ2luRmllbGQgPSBxdWVyeT8ub3V0RmllbGRzPy5bMF1cblxuICBpZiAob3JpZ2luRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZEluZm9zID0gW3tcbiAgICAgIG5hbWU6IEhpc3RvZ3JhbU1pblZhbHVlRmllbGQsXG4gICAgICBhbGlhczogSGlzdG9ncmFtTWluVmFsdWVGaWVsZEFsaWFzXG4gICAgfSwge1xuICAgICAgbmFtZTogSGlzdG9ncmFtTWF4VmFsdWVGaWVsZCxcbiAgICAgIGFsaWFzOiBIaXN0b2dyYW1NYXhWYWx1ZUZpZWxkQWxpYXNcbiAgICB9LCB7XG4gICAgICBuYW1lOiBIaXN0b2dyYW1Db3VudEZpZWxkLFxuICAgICAgYWxpYXM6IEhpc3RvZ3JhbUNvdW50RmllbGRBbGlhc1xuICAgIH1dXG4gICAgZmllbGRJbmZvcy5mb3JFYWNoKCh7IG5hbWUsIGFsaWFzIH0pID0+IHtcbiAgICAgIGNvbnN0IGppbXVOYW1lID0gbmFtZVxuICAgICAgY29uc3Qgb3JpZ2luRmllbGRzID0gW29yaWdpbkZpZWxkXVxuICAgICAgY29uc3QgdHlwZSA9IEppbXVGaWVsZFR5cGUuTnVtYmVyXG4gICAgICBjb25zdCBlc3JpVHlwZSA9IG5hbWUgPT09IEhpc3RvZ3JhbUNvdW50RmllbGQgPyBFc3JpRmllbGRUeXBlLkludGVnZXIgOiBFc3JpRmllbGRUeXBlLkRvdWJsZVxuICAgICAgY29uc3Qgb3JpZ2luRmllbGRTY2hlbWEgPSBnZXRGaWVsZFNjaGVtYShvcmlnaW5GaWVsZCwgZGF0YVNvdXJjZUlkKVxuICAgICAgY29uc3QgZGlnaXRTZXBhcmF0b3IgPSBvcmlnaW5GaWVsZFNjaGVtYT8uZm9ybWF0Py5kaWdpdFNlcGFyYXRvciA/PyB0cnVlXG4gICAgICBjb25zdCBwbGFjZXMgPSBuYW1lID09PSBIaXN0b2dyYW1Db3VudEZpZWxkID8gMCA6IDNcbiAgICAgIGNvbnN0IGZvcm1hdCA9IHsgLi4ub3JpZ2luRmllbGRTY2hlbWE/LmZvcm1hdCwgZGlnaXRTZXBhcmF0b3IsIHBsYWNlcyB9XG4gICAgICBjb25zdCBmaWVsZFNjaGVtYSA9IHsgamltdU5hbWUsIHR5cGUsIGVzcmlUeXBlLCBuYW1lLCBhbGlhcywgb3JpZ2luRmllbGRzLCBmb3JtYXQgfVxuICAgICAgZmllbGRzID0gZmllbGRzLnNldChuYW1lLCBmaWVsZFNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGZpZWxkc1xufVxuXG5leHBvcnQgY29uc3QgZ2V0SmltdUZpZWxkU2NoZW1hID0gKGZpZWxkOiBzdHJpbmcsIGRhdGFTb3VyY2VJZDogc3RyaW5nLCBqaW11TmFtZT86IHN0cmluZyk6IElNRmllbGRTY2hlbWEgPT4ge1xuICBsZXQgc2NoZW1hID0gZ2V0RmllbGRTY2hlbWEoZmllbGQsIGRhdGFTb3VyY2VJZClcbiAgamltdU5hbWUgPSBqaW11TmFtZSB8fCBmaWVsZFxuICBzY2hlbWEgPSBzY2hlbWEuc2V0KCdqaW11TmFtZScsIGppbXVOYW1lKS5zZXQoJ25hbWUnLCBqaW11TmFtZSlcbiAgc2NoZW1hID0gc2NoZW1hLnNldCgnb3JpZ2luRmllbGRzJywgW2ZpZWxkXSlcbiAgcmV0dXJuIHNjaGVtYVxufVxuXG5jb25zdCBnZXRTY2hlbWFGb3JIaXN0b2dyYW0gPSAocXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIGRhdGFTb3VyY2VJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGZpZWxkcyA9IGdldEhpc3RvZ3JhbUZpZWxkcyhxdWVyeSwgZGF0YVNvdXJjZUlkKVxuXG4gIGNvbnN0IHNjaGVtYSA9IHtcbiAgICBmaWVsZHM6IGZpZWxkcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIH0gYXMgdW5rbm93biBhcyBEYXRhU291cmNlU2NoZW1hXG5cbiAgcmV0dXJuIHNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2NhdHRlclBsb3RGaWVsZHMgPSAocXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIGRhdGFTb3VyY2VJZDogc3RyaW5nKSA9PiB7XG4gIGxldCBmaWVsZHMgPSBJbW11dGFibGUoe30pIGFzIEltbXV0YWJsZU9iamVjdDx7IFtqaW11TmFtZTogc3RyaW5nXTogRmllbGRTY2hlbWEgfT5cbiAgY29uc3Qgb3V0RmllbGRzID0gcXVlcnk/Lm91dEZpZWxkc1xuXG4gIGlmIChvdXRGaWVsZHMpIHtcbiAgICBvdXRGaWVsZHMuZm9yRWFjaCgob3V0RmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldEppbXVGaWVsZFNjaGVtYShvdXRGaWVsZCwgZGF0YVNvdXJjZUlkKVxuICAgICAgZmllbGRzID0gZmllbGRzLnNldChvdXRGaWVsZCwgc2NoZW1hKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZmllbGRzXG59XG5cbmNvbnN0IGdldFNjaGVtYUZvclNjYXR0ZXJQbG90ID0gKHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhU291cmNlSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBmaWVsZHMgPSBnZXRTY2F0dGVyUGxvdEZpZWxkcyhxdWVyeSwgZGF0YVNvdXJjZUlkKVxuXG4gIGNvbnN0IHNjaGVtYSA9IHtcbiAgICBmaWVsZHM6IGZpZWxkcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIH0gYXMgdW5rbm93biBhcyBEYXRhU291cmNlU2NoZW1hXG5cbiAgcmV0dXJuIHNjaGVtYVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VyaWFsU3BsaXRCeUZpZWxkcyA9IChxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgZGF0YVNvdXJjZUlkOiBzdHJpbmcsIHNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LCBzcGxpdEJ5VmFsdWVzPzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPik6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TmFtZTogc3RyaW5nXTogRmllbGRTY2hlbWEgfT4gPT4ge1xuICBsZXQgZmllbGRzID0gSW1tdXRhYmxlKHt9KSBhcyBJbW11dGFibGVPYmplY3Q8eyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0+XG4gIGNvbnN0IGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzID0gcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzXG5cbiAgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldEppbXVGaWVsZFNjaGVtYShmaWVsZCwgZGF0YVNvdXJjZUlkKVxuICAgICAgZmllbGRzID0gZmllbGRzLnNldChmaWVsZCwgc2NoZW1hKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBvdXRGaWVsZHMgPSBxdWVyeT8ub3V0RmllbGRzXG4gIGNvbnN0IG91dFN0YXRpc3RpY3MgPSBxdWVyeT8ub3V0U3RhdGlzdGljc1xuICBjb25zdCBzcGxpdEJ5RmllbGQgPSBnZXRTcGxpdEJ5RmllbGQocXVlcnk/LndoZXJlLCB0cnVlKVxuXG4gIGNvbnN0IHNlcmllc1NwbGl0QnlWYWx1ZXMgPSBnZXRTcGxpdEJ5RmllbGRWYWx1ZXMoc2VyaWVzKS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIGNvbnN0IHVuaXF1ZVNwbGl0QnlWYWx1ZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoc2VyaWVzU3BsaXRCeVZhbHVlcy5jb25jYXQoc3BsaXRCeVZhbHVlcyA/PyBbXSkpKVxuXG4gIGxldCBvblN0YXRpc3RpY0ZpZWxkID0gJydcbiAgbGV0IHN0YXRpc3RpY1R5cGUgPSAnbm9fYWdncmVnYXRpb24nXG4gIGlmIChncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcyAmJiBvdXRGaWVsZHMpIHsgLy9ubyBhZ2dyZWdhdGlvblxuICAgIG9uU3RhdGlzdGljRmllbGQgPSBvdXRGaWVsZHNbMF1cbiAgfSBlbHNlIGlmIChncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcyAmJiBvdXRTdGF0aXN0aWNzKSB7IC8vYnkgZ3JvdXBcbiAgICBvblN0YXRpc3RpY0ZpZWxkID0gb3V0U3RhdGlzdGljc1swXT8ub25TdGF0aXN0aWNGaWVsZFxuICAgIHN0YXRpc3RpY1R5cGUgPSBvdXRTdGF0aXN0aWNzWzBdPy5zdGF0aXN0aWNUeXBlXG4gIH1cbiAgY29uc3Qgb25TdGF0aXN0aWNGaWVsZEFsaWFzID0gZ2V0RmllbGRTY2hlbWEob25TdGF0aXN0aWNGaWVsZCwgZGF0YVNvdXJjZUlkKT8uYWxpYXMgPz8gb25TdGF0aXN0aWNGaWVsZFxuICB1bmlxdWVTcGxpdEJ5VmFsdWVzLmZvckVhY2goKHNwbGl0QnlWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGppbXVGaWVsZE5hbWUgPSBnZXRTcGxpdE91dFN0YXRpc3RpY05hbWUob25TdGF0aXN0aWNGaWVsZEFsaWFzLCBzdGF0aXN0aWNUeXBlLCBzcGxpdEJ5VmFsdWUpXG4gICAgY29uc3QgamltdUZpZWxkQWxpYXMgPSBnZXRTcGxpdE91dFN0YXRpc3RpY0FsaWFzKG9uU3RhdGlzdGljRmllbGQsIHN0YXRpc3RpY1R5cGUsIHNwbGl0QnlWYWx1ZSlcbiAgICBjb25zdCBvcmlnaW5GaWVsZCA9IG9uU3RhdGlzdGljRmllbGRcbiAgICBpZiAob3JpZ2luRmllbGQpIHtcbiAgICAgIGxldCBzY2hlbWEgPSBnZXRKaW11RmllbGRTY2hlbWEob3JpZ2luRmllbGQsIGRhdGFTb3VyY2VJZCwgamltdUZpZWxkTmFtZSlcbiAgICAgIHNjaGVtYSA9IHNjaGVtYS5zZXQoJ2FsaWFzJywgamltdUZpZWxkQWxpYXMpXG4gICAgICBzY2hlbWEgPSBzY2hlbWEuc2V0KCdvcmlnaW5GaWVsZHMnLCBzY2hlbWEub3JpZ2luRmllbGRzLmNvbmNhdChzcGxpdEJ5RmllbGQpKVxuICAgICAgbGV0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgIGlmIChzdGF0aXN0aWNUeXBlID09PSBTdGF0aXN0aWNUeXBlLkNvdW50KSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBJbW11dGFibGUoe30pXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zZXQoJ3BsYWNlcycsIDApXG4gICAgICB9IGVsc2UgaWYgKHN0YXRpc3RpY1R5cGUgPT09IFN0YXRpc3RpY1R5cGUuQXZnKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2NoZW1hLmZvcm1hdD8ucGxhY2VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBJbW11dGFibGUoe30pXG4gICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnNldCgncGxhY2VzJywgMylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvcm1hdCkge1xuICAgICAgICBzY2hlbWEgPSBzY2hlbWEuc2V0KCdmb3JtYXQnLCBmb3JtYXQpXG4gICAgICB9XG4gICAgICBmaWVsZHMgPSBmaWVsZHMuc2V0KGppbXVGaWVsZE5hbWUsIHNjaGVtYSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWVsZHNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcmlhbEZpZWxkcyA9IChxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MgPSBxdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3NcbiAgY29uc3Qgb3V0RmllbGRzID0gcXVlcnk/Lm91dEZpZWxkc1xuICBjb25zdCBvdXRTdGF0aXN0aWNzID0gcXVlcnk/Lm91dFN0YXRpc3RpY3NcblxuICBsZXQgZmllbGRzID0gSW1tdXRhYmxlKHt9KSBhcyBJbW11dGFibGVPYmplY3Q8eyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0+XG5cbiAgaWYgKGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzICYmIG91dEZpZWxkcykgeyAvL25vIGFnZ3JlZ2F0aW9uXG4gICAgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MuY29uY2F0KG91dEZpZWxkcykuZm9yRWFjaCgob3V0RmllbGQpID0+IHtcbiAgICAgIGlmIChvdXRGaWVsZCkge1xuICAgICAgICBjb25zdCBzY2hlbWEgPSBnZXRKaW11RmllbGRTY2hlbWEob3V0RmllbGQsIGRhdGFTb3VyY2VJZClcbiAgICAgICAgZmllbGRzID0gZmllbGRzLnNldChvdXRGaWVsZCwgc2NoZW1hKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MgJiYgb3V0U3RhdGlzdGljcykgeyAvL2J5IGdyb3VwXG4gICAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzWzBdXG4gICAgaWYgKGNhdGVnb3J5RmllbGQpIHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldEppbXVGaWVsZFNjaGVtYShjYXRlZ29yeUZpZWxkLCBkYXRhU291cmNlSWQpXG4gICAgICBmaWVsZHMgPSBmaWVsZHMuc2V0KGNhdGVnb3J5RmllbGQsIHNjaGVtYSlcbiAgICB9XG4gICAgb3V0U3RhdGlzdGljcy5mb3JFYWNoKChzdGF0aXN0aWMpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbkZpZWxkID0gc3RhdGlzdGljLm9uU3RhdGlzdGljRmllbGRcbiAgICAgIGlmIChvcmlnaW5GaWVsZCkge1xuICAgICAgICBjb25zdCBzdGF0aXN0aWNUeXBlID0gc3RhdGlzdGljLnN0YXRpc3RpY1R5cGVcbiAgICAgICAgY29uc3QgamltdUZpZWxkTmFtZSA9IHN0YXRpc3RpYy5vdXRTdGF0aXN0aWNGaWVsZE5hbWVcbiAgICAgICAgY29uc3QgZmllbGRBbGlhcyA9IGdldEZpZWxkU2NoZW1hKG9yaWdpbkZpZWxkLCBkYXRhU291cmNlSWQpPy5hbGlhcyA/PyBvcmlnaW5GaWVsZFxuICAgICAgICBjb25zdCBqaW11RmllbGRBbGlhcyA9IGdldE91dFN0YXRpc3RpY0FsaWFzKGZpZWxkQWxpYXMsIHN0YXRpc3RpY1R5cGUpXG4gICAgICAgIGxldCBzY2hlbWEgPSBnZXRKaW11RmllbGRTY2hlbWEob3JpZ2luRmllbGQsIGRhdGFTb3VyY2VJZCwgamltdUZpZWxkTmFtZSlcblxuICAgICAgICBzY2hlbWEgPSBzY2hlbWEuc2V0KCdhbGlhcycsIGppbXVGaWVsZEFsaWFzKVxuICAgICAgICAvLyBkZWZpbmluZyBmb3JtYXRzIGZvciB0aGUgc2NoZW1hIG9mIG91dHB1dCBkYXRhIHNvdXJjZSBodHRwczovL2RldnRvcGlhLmVzcmkuY29tL0JlaWppbmctUi1ELUNlbnRlci9FeHBlcmllbmNlQnVpbGRlci9pc3N1ZXMvODkwMlxuICAgICAgICBsZXQgZm9ybWF0ID0gc2NoZW1hLmZvcm1hdFxuICAgICAgICBpZiAoc3RhdGlzdGljVHlwZSA9PT0gU3RhdGlzdGljVHlwZS5Db3VudCkge1xuICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBJbW11dGFibGUoe30pXG4gICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnNldCgncGxhY2VzJywgMClcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0aXN0aWNUeXBlID09PSBTdGF0aXN0aWNUeXBlLkF2Zykge1xuICAgICAgICAgIGlmICh0eXBlb2Ygc2NoZW1hLmZvcm1hdD8ucGxhY2VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IEltbXV0YWJsZSh7fSlcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zZXQoJ3BsYWNlcycsIDMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQpIHtcbiAgICAgICAgICBzY2hlbWEgPSBzY2hlbWEuc2V0KCdmb3JtYXQnLCBmb3JtYXQpXG4gICAgICAgIH1cbiAgICAgICAgZmllbGRzID0gZmllbGRzLnNldChqaW11RmllbGROYW1lLCBzY2hlbWEpXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIGlmICghZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MgJiYgb3V0U3RhdGlzdGljcykgeyAvL2J5IGZpZWxkXG4gICAgY29uc3Qgb3JpZ2luRmllbGRzID0gb3V0U3RhdGlzdGljcy5tYXAoKG91dFN0YXRpc3RpYykgPT4gb3V0U3RhdGlzdGljLm9uU3RhdGlzdGljRmllbGQpLmFzTXV0YWJsZT8uKHsgZGVlcDogdHJ1ZSB9KVxuICAgIGNvbnN0IHhGaWVsZCA9IEJ5RmllbGRTZXJpZXNYXG4gICAgY29uc3QgeUZpZWxkID0gQnlGaWVsZFNlcmllc1lcbiAgICBjb25zdCB4RmllbGRTY2hlbWEgPSBnZXRDbGVhbkZpZWxkU2NoZW1hKHhGaWVsZCwgSmltdUZpZWxkVHlwZS5TdHJpbmcsIEJ5RmllbGRTZXJpZXNYQWxpYXMsIG9yaWdpbkZpZWxkcylcbiAgICBjb25zdCB5RmllbGRTY2hlbWEgPSBnZXRDbGVhbkZpZWxkU2NoZW1hKHlGaWVsZCwgSmltdUZpZWxkVHlwZS5OdW1iZXIsIEJ5RmllbGRTZXJpZXNZQWxpYXMsIG9yaWdpbkZpZWxkcylcbiAgICBmaWVsZHMgPSBmaWVsZHMuc2V0KHhGaWVsZCwgeEZpZWxkU2NoZW1hKVxuICAgIGZpZWxkcyA9IGZpZWxkcy5zZXQoeUZpZWxkLCB5RmllbGRTY2hlbWEpXG4gIH1cbiAgcmV0dXJuIGZpZWxkc1xufVxuXG5jb25zdCBnZXRTY2hlbWFGb3JTZXJpYWwgPSAocXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIGRhdGFTb3VyY2VJZDogc3RyaW5nKTogRGF0YVNvdXJjZVNjaGVtYSA9PiB7XG4gIGNvbnN0IGZpZWxkcyA9IGdldFNlcmlhbEZpZWxkcyhxdWVyeSwgZGF0YVNvdXJjZUlkKVxuXG4gIGNvbnN0IHNjaGVtYSA9IHtcbiAgICBmaWVsZHM6IGZpZWxkcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gIH0gYXMgdW5rbm93biBhcyBEYXRhU291cmNlU2NoZW1hXG5cbiAgcmV0dXJuIHNjaGVtYVxufVxuXG5jb25zdCBnZXRJZFNjaGVtYSA9IChkYXRzU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gIGNvbnN0IGlkRmllbGQgPSBkYXRzU291cmNlLmdldElkRmllbGQoKVxuICBjb25zdCBpZEZpZWxkU2NoZW1hID0gZGF0c1NvdXJjZS5nZXREYXRhU291cmNlSnNvbigpLnNjaGVtYS5maWVsZHNbaWRGaWVsZF1cbiAgcmV0dXJuIGlkRmllbGRTY2hlbWE/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWEgPSAoXG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UsXG4gIG9yaWdpbmFsRHNJZDogc3RyaW5nLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgc2VyaWVzVHlwZTogQ2hhcnRUeXBlc1xuKTogRGF0YVNvdXJjZVNjaGVtYSA9PiB7XG4gIGNvbnN0IGlkRmllbGRTY2hlbWEgPSBnZXRJZFNjaGVtYShkYXRhU291cmNlKVxuICBsZXQgc2NoZW1hOiBEYXRhU291cmNlU2NoZW1hID0gbnVsbFxuICBpZiAoc2VyaWVzVHlwZSA9PT0gJ2hpc3RvZ3JhbVNlcmllcycpIHtcbiAgICBzY2hlbWEgPSBnZXRTY2hlbWFGb3JIaXN0b2dyYW0ocXVlcnksIG9yaWdpbmFsRHNJZClcbiAgfSBlbHNlIGlmIChpc1NlcmlhbFNlcmllcyhzZXJpZXNUeXBlKSB8fCBzZXJpZXNUeXBlID09PSAncGllU2VyaWVzJykge1xuICAgIHNjaGVtYSA9IGdldFNjaGVtYUZvclNlcmlhbChxdWVyeSwgb3JpZ2luYWxEc0lkKVxuICB9IGVsc2UgaWYgKHNlcmllc1R5cGUgPT09ICdzY2F0dGVyU2VyaWVzJykge1xuICAgIHNjaGVtYSA9IGdldFNjaGVtYUZvclNjYXR0ZXJQbG90KHF1ZXJ5LCBvcmlnaW5hbERzSWQpXG4gIH1cbiAgc2NoZW1hID0ge1xuICAgIGlkRmllbGQ6IGlkRmllbGRTY2hlbWEuamltdU5hbWUsXG4gICAgZmllbGRzOiB7XG4gICAgICBbaWRGaWVsZFNjaGVtYS5qaW11TmFtZV06IGlkRmllbGRTY2hlbWEsXG4gICAgICAuLi5zY2hlbWEuZmllbGRzXG4gICAgfVxuICB9XG4gIHJldHVybiBzY2hlbWFcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VTY2hlbWFGb3JTcGxpdEJ5ID0gKFxuICBkYXRhU291cmNlOiBEYXRhU291cmNlLFxuICBvcmlnaW5hbERzSWQ6IHN0cmluZyxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHByb3BTZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPixcbiAgc3BsaXRCeVZhbHVlcz86IEFycmF5PG51bWJlciB8IHN0cmluZz5cbik6IERhdGFTb3VyY2VTY2hlbWEgPT4ge1xuICBjb25zdCBpZEZpZWxkU2NoZW1hID0gZ2V0SWRTY2hlbWEoZGF0YVNvdXJjZSlcbiAgY29uc3Qgc2VyaWVzID0gcHJvcFNlcmllcy5maWx0ZXIoXG4gICAgKHNlcmllKSA9PiBzZXJpZS5pZCAhPT0gU3BsaXRCeU90aGVyU2VyaWVzVmFsdWVcbiAgKVxuICBjb25zdCBmaWVsZHMgPSBnZXRTZXJpYWxTcGxpdEJ5RmllbGRzKFxuICAgIHF1ZXJ5LFxuICAgIG9yaWdpbmFsRHNJZCxcbiAgICBzZXJpZXMsXG4gICAgc3BsaXRCeVZhbHVlc1xuICApXG4gIGNvbnN0IHNjaGVtYSA9IHtcbiAgICBpZEZpZWxkOiBpZEZpZWxkU2NoZW1hLmppbXVOYW1lLFxuICAgIGZpZWxkczoge1xuICAgICAgW2lkRmllbGRTY2hlbWEuamltdU5hbWVdOiBpZEZpZWxkU2NoZW1hLFxuICAgICAgLi4uZmllbGRzLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICB9XG4gIH0gYXMgdW5rbm93biBhcyBEYXRhU291cmNlU2NoZW1hXG5cbiAgcmV0dXJuIHNjaGVtYVxufVxuIiwiaW1wb3J0IHtcbiAgdHlwZSBJbW11dGFibGVPYmplY3QsXG4gIHR5cGUgSW1tdXRhYmxlQXJyYXksXG4gIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgSmltdUZpZWxkVHlwZSxcbiAgSW1tdXRhYmxlLFxuICB0eXBlIEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgRGF0YVNvdXJjZU1hbmFnZXJcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJU2ltcGxlRmlsbFN5bWJvbCwgdHlwZSBJU2ltcGxlTGluZVN5bWJvbCB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXR5cGVzJ1xuaW1wb3J0IHsgdHlwZSBDYXRlZ29yeUZvcm1hdE9wdGlvbnMsIHR5cGUgRGF0ZVRpbWVGb3JtYXRPcHRpb25zLCBnZXREZWZhdWx0Q2F0ZWdvcnlGb3JtYXQsIHR5cGUgV2ViQ2hhcnRMaW5lQ2hhcnRTZXJpZXMsIFdlYkNoYXJ0U3RhY2tlZEtpbmRzLCBnZXRTcGxpdEJ5VmFsdWUsIFdlYkNoYXJ0U29ydE9yZGVyS2luZHMsIGdldFNlcmllc1R5cGUsIHR5cGUgV2ViQ2hhcnRQaWVDaGFydFNlcmllcywgV2ViQ2hhcnRUaW1lSW50ZXJ2YWxVbml0cywgZ2V0U3BsaXRCeUZpZWxkLCB0eXBlIFdlYkNoYXJ0QmFyQ2hhcnRTZXJpZXMsIHR5cGUgV2ViQ2hhcnRTY2F0dGVyUGxvdFNlcmllcywgdHlwZSBXZWJDaGFydEhpc3RvZ3JhbVNlcmllcywgV2ViQ2hhcnRUaW1lQWdncmVnYXRpb25UeXBlcywgV2ViQ2hhcnROdWxsUG9saWN5VHlwZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlLCB0eXBlIElXZWJDaGFydCwgdHlwZSBDaGFydFN0YXRpc3RpY1R5cGUsIHR5cGUgV2ViQ2hhcnRTZXJpZXMsIHR5cGUgQ2hhcnRUeXBlLCB0eXBlIFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IHR5cGUgU2VyaWVzQ29sb3JQcm9wcywgU2VyaWVzQ29sb3JzLCBnZXRDb2xvckluT3JkZXIsIGdldERlZmF1bHRCYXJDaGFydFNlcmllcywgZ2V0RGVmYXVsdERhdGVGb3JtYXQsIGdldERlZmF1bHRIaXN0b2dyYW1TZXJpZXMsIGdldERlZmF1bHRMaW5lQ2hhcnRTZXJpZXMsIGdldERlZmF1bHRQaWVDaGFydFNlcmllcywgZ2V0RGVmYXVsdFNjYXR0ZXJQbG90Q2hhcnRTZXJpZXMsIGdldE5vblJlcGVhdGluZ0NvbG9yLCBpc1NlcmlhbFNlcmllcyB9IGZyb20gJy4uL2RlZmF1bHQnXG5pbXBvcnQgeyB1dGlscyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBTcGxpdEJ5T3RoZXJTZXJpZXNWYWx1ZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RlZE9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG59XG5cbmNvbnN0IGNhY2hlRmllbGRTY2hlbWEgPSB7fVxuLyoqXG4gKiBHZXQgdGhlIHNjaGVtYSBvZiBhIHNpbmdsZSBmaWVsZFxuICogQHBhcmFtIGppbXVGaWVsZE5hbWVcbiAqIEBwYXJhbSBkYXRhU291cmNlSWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZpZWxkU2NoZW1hID0gKFxuICBqaW11RmllbGROYW1lOiBzdHJpbmcsXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXG4pOiBJTUZpZWxkU2NoZW1hIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKGNhY2hlRmllbGRTY2hlbWFbamltdUZpZWxkTmFtZV0gIT0gbnVsbCkgcmV0dXJuIGNhY2hlRmllbGRTY2hlbWFbamltdUZpZWxkTmFtZV1cbiAgY29uc3QgZHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZUlkKVxuICBjb25zdCBkc1NjaGVtYSA9IGRzPy5nZXRTY2hlbWEoKVxuICBjb25zdCBmaWVsZFNjaGVtYSA9IGRzU2NoZW1hPy5maWVsZHM/LltqaW11RmllbGROYW1lXVxuICBjYWNoZUZpZWxkU2NoZW1hW2ppbXVGaWVsZE5hbWVdID0gZmllbGRTY2hlbWFcbiAgcmV0dXJuIGZpZWxkU2NoZW1hXG59XG5cbmNvbnN0IGNhY2hlRmllbGRzU2NoZW1hID0ge31cblxuLyoqXG4gKiBHZXQgYWxsIHRoZSBmaWVsZCBzY2hlbWEgaW4gYSBkYXRhIHNvdXJjZVxuICogQHBhcmFtIGRhdGFTb3VyY2VJZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RmllbGRzU2NoZW1hID0gKFxuICBkYXRhU291cmNlSWQ6IHN0cmluZ1xuKTogeyBbamltdU5hbWU6IHN0cmluZ106IElNRmllbGRTY2hlbWEgfSB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChjYWNoZUZpZWxkc1NjaGVtYVtkYXRhU291cmNlSWRdICE9IG51bGwpIHJldHVybiBjYWNoZUZpZWxkc1NjaGVtYVtkYXRhU291cmNlSWRdXG4gIGNvbnN0IGRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZClcbiAgY29uc3QgZHNTY2hlbWEgPSBkcz8uZ2V0U2NoZW1hKClcbiAgY29uc3QgZmllbGRzU2NoZW1hID0gZHNTY2hlbWE/LmZpZWxkc1xuICBjYWNoZUZpZWxkc1NjaGVtYVtkYXRhU291cmNlSWRdID0gZmllbGRzU2NoZW1hXG4gIHJldHVybiBmaWVsZHNTY2hlbWFcbn1cblxuY29uc3QgY2FjaGVPYmplY3RJZEZpZWxkID0ge31cbi8qKlxuICogZ2V0IG9iamVjdGlkXG4gKiBAcGFyYW0gZGF0YVNvdXJjZUlkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPYmplY3RJZEZpZWxkID0gKGRhdGFTb3VyY2VJZDogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKGNhY2hlT2JqZWN0SWRGaWVsZFtkYXRhU291cmNlSWRdICE9IG51bGwpIHJldHVybiBjYWNoZU9iamVjdElkRmllbGRbZGF0YVNvdXJjZUlkXVxuICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlSWQpXG4gIGlmIChkcyA9PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBkYXRhIHNvdXJjZSBpZDogJHtkYXRhU291cmNlSWR9YClcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBvYmplY3RJZCA9IGRzLmdldElkRmllbGQoKVxuICBjYWNoZU9iamVjdElkRmllbGRbZGF0YVNvdXJjZUlkXSA9IG9iamVjdElkXG4gIHJldHVybiBvYmplY3RJZFxufVxuXG4vKipcbiAqIEdldCB0aGUgZmllbGQgdHlwZS5cbiAqIEBwYXJhbSBqaW11RmllbGROYW1lXG4gKiBAcGFyYW0gZGF0YVNvdXJjZUlkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGaWVsZFR5cGUgPSAoXG4gIGppbXVGaWVsZE5hbWU6IHN0cmluZyxcbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcbik6IEppbXVGaWVsZFR5cGUgPT4ge1xuICBjb25zdCBmaWVsZFNjaGVtYSA9IGdldEZpZWxkU2NoZW1hKGppbXVGaWVsZE5hbWUsIGRhdGFTb3VyY2VJZClcbiAgcmV0dXJuIGZpZWxkU2NoZW1hPy50eXBlXG59XG5cbi8qKlxuICogR2V0IHRoZSB0ZW1wbGF0ZSB0eXBlIG9mIHRoZSBjdXJyZW50IHNlcmllcy5cbiAqIEBwYXJhbSBzZXJpZXNcbiAqIEBwYXJhbSBmYWxsYmFja1R5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRlbXBsYXRlVHlwZSA9ICh3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD4pOiBbQ2hhcnRUeXBlLCBUZW1wbGF0ZVR5cGVdID0+IHtcbiAgY29uc3Qgc2VyaWVzID0gd2ViQ2hhcnQ/LnNlcmllc1xuICBjb25zdCBzZXJpZXNUeXBlID0gZ2V0U2VyaWVzVHlwZShzZXJpZXMgYXMgYW55KSA/PyAnYmFyU2VyaWVzJ1xuXG4gIGNvbnN0IHNlcmllID0gc2VyaWVzPy5bMF0gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXM+XG4gIGxldCB0eXBlOiBDaGFydFR5cGVcbiAgbGV0IHN1YlR5cGU6IFRlbXBsYXRlVHlwZVxuICBpZiAoIXNlcmllKSByZXR1cm4gW10gYXMgYW55XG4gIGlmIChzZXJpZXNUeXBlID09PSAnYmFyU2VyaWVzJykge1xuICAgIGNvbnN0IHN0YWNrZWRUeXBlID0gKHNlcmllIGFzIGFueSkuc3RhY2tlZFR5cGVcbiAgICBjb25zdCByb3RhdGVkID0gd2ViQ2hhcnQ/LnJvdGF0ZWQgPz8gZmFsc2VcbiAgICBjb25zdCBzdWZmaXggPSByb3RhdGVkID8gJ2JhcicgOiAnY29sdW1uJ1xuICAgIGNvbnN0IHByZWZpeCA9IHN0YWNrZWRUeXBlID09PSAnc2lkZUJ5U2lkZScgPyAnJyA6IHN0YWNrZWRUeXBlXG4gICAgdHlwZSA9IHN1ZmZpeFxuICAgIHN1YlR5cGUgPSAocHJlZml4ID8gYCR7cHJlZml4fS0ke3N1ZmZpeH1gIDogc3VmZml4KSBhcyBUZW1wbGF0ZVR5cGVcbiAgfSBlbHNlIGlmIChzZXJpZXNUeXBlID09PSAnbGluZVNlcmllcycpIHtcbiAgICBjb25zdCBzaG93QXJlYSA9IGdldFNlcmlhTGxpbmVTaG93QXJlYShzZXJpZXMpXG4gICAgY29uc3QgbGluZVNtb290aGVkID0gZ2V0U2VyaWFMbGluZVNtb290aGVkKHNlcmllcylcblxuICAgIGNvbnN0IHN1ZmZpeCA9IHNob3dBcmVhID8gJ2FyZWEnIDogJ2xpbmUnXG4gICAgbGV0IHByZWZpeCA9ICcnXG4gICAgaWYgKGxpbmVTbW9vdGhlZCkge1xuICAgICAgcHJlZml4ID0gJ3Ntb290aCdcbiAgICB9XG4gICAgdHlwZSA9IHN1ZmZpeFxuICAgIHN1YlR5cGUgPSAocHJlZml4ID8gYCR7cHJlZml4fS0ke3N1ZmZpeH1gIDogc3VmZml4KSBhcyBUZW1wbGF0ZVR5cGVcbiAgfSBlbHNlIGlmIChzZXJpZXNUeXBlID09PSAncGllU2VyaWVzJykge1xuICAgIHR5cGUgPSAncGllJ1xuICAgIGNvbnN0IGlubmVyUmFkaXVzID0gc2VyaWU/LmlubmVyUmFkaXVzID8/IDBcbiAgICBzdWJUeXBlID0gaW5uZXJSYWRpdXMgPiAwID8gJ2RvbnV0JyA6ICdwaWUnXG4gIH0gZWxzZSBpZiAoc2VyaWVzVHlwZSA9PT0gJ3NjYXR0ZXJTZXJpZXMnKSB7XG4gICAgdHlwZSA9ICdzY2F0dGVyJ1xuICAgIHN1YlR5cGUgPSAnc2NhdHRlcidcbiAgfSBlbHNlIGlmIChzZXJpZXNUeXBlID09PSAnaGlzdG9ncmFtU2VyaWVzJykge1xuICAgIHR5cGUgPSAnaGlzdG9ncmFtJ1xuICAgIHN1YlR5cGUgPSAnaGlzdG9ncmFtJ1xuICB9XG5cbiAgcmV0dXJuIFt0eXBlLCBzdWJUeXBlXVxufVxuXG4vKipcbiAqIENhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZy5cbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplU3RyaW5nID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3Qgd2hldGhlclVzZUlkRmllbGRGb3JOb25Db3VudCA9IChxdWVyeTogSW1tdXRhYmxlT2JqZWN0PEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zPiwgc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UpID0+IHtcbiAgaWYgKCFkYXRhU291cmNlKSByZXR1cm4gZmFsc2VcbiAgY29uc3Qgc3RhdHlzdGljc1R5cGUgPSBxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5zdGF0aXN0aWNUeXBlXG4gIGlmIChzdGF0eXN0aWNzVHlwZSA9PT0gJ2NvdW50JykgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgdXNlZEZpZWxkcyA9IHNlcmllcz8ubWFwKChzZXJpZSkgPT4gc2VyaWUuaWQpXG4gIGlmICghdXNlZEZpZWxkcz8ubGVuZ3RoKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgaWRGSWVsZCA9IGRhdGFTb3VyY2UuZ2V0SWRGaWVsZCgpXG4gIHJldHVybiB1c2VkRmllbGRzLmluY2x1ZGVzKGlkRkllbGQpXG59XG5cbmV4cG9ydCBjb25zdCB3aGV0aGVyVXNlSW5saW5lRGF0YVNvdXJjZSA9ICh3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD4sIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UpID0+IHtcbiAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUod2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnkpXG4gIGNvbnN0IGlzUGllT3JTZXJpYWxDaGFydCA9IGlzU2VyaWFsU2VyaWVzKHNlcmllc1R5cGUpIHx8IHNlcmllc1R5cGUgPT09ICdwaWVTZXJpZXMnXG4gIGlmICghaXNQaWVPclNlcmlhbENoYXJ0KSByZXR1cm4gZmFsc2VcbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHdlYkNoYXJ0Py5kYXRhU291cmNlPy5xdWVyeSlcbiAgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQpIHJldHVybiB0cnVlXG5cbiAgY29uc3QgdXNlSWRGaWVsZEZvck5vbkNvdW50ID0gd2hldGhlclVzZUlkRmllbGRGb3JOb25Db3VudCh3ZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnksIHdlYkNoYXJ0Py5zZXJpZXMsIGRhdGFTb3VyY2UpXG4gIHJldHVybiB1c2VJZEZpZWxkRm9yTm9uQ291bnRcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciBhIHN0cmluZyBmaWVsZCBpcyBlbXB0eSAoZGlmZmVyZW50IGZyb20gdW5kZWZpbmVkLCBudWxsIGFuZCBlbXB0eSBzdHJpbmcpLlxuICogVGhlIHZhbHVlIGlzIHN0cmluZ2lmaWVkIGJlZm9yZSBiZWluZyB0cmltbWVkIHRvIGRlYnVuayBlZGdlIGNhc2VzIGxpa2Ugd2hlbiB0aGUgdmFsdWUgaXMgYSBudW1lcmljIHZhbHVlLlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgZW1wdHksIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5U3RyaW5nRmllbGQgKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsKTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IGAke3ZhbHVlfWAudHJpbSgpID09PSAnJ1xufVxuXG4vKipcbiAqIEdldCBjYXRlZ29yeSB0eXBlIGZyb20gY2hhcnQgcXVlcnkuXG4gKiBAcGFyYW0gcXVlcnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5VHlwZSA9IChcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXNcbik6IENhdGVnb3J5VHlwZSA9PiB7XG4gIGlmIChxdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MgIT0gbnVsbCkge1xuICAgIHJldHVybiBDYXRlZ29yeVR5cGUuQnlHcm91cFxuICB9IGVsc2UgaWYgKHF1ZXJ5Py5vdXRTdGF0aXN0aWNzICE9IG51bGwpIHtcbiAgICByZXR1cm4gQ2F0ZWdvcnlUeXBlLkJ5RmllbGRcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzdGF0aXN0aWMgdHlwZSBmcm9tIGNoYXJ0IHF1ZXJ5LlxuICogQHBhcmFtIHF1ZXJ5XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTdGF0aXN0aWNzVHlwZSA9IChxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyk6IENoYXJ0U3RhdGlzdGljVHlwZSA9PiB7XG4gIGlmIChxdWVyeT8ub3V0RmllbGRzPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJ25vX2FnZ3JlZ2F0aW9uJ1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5zdGF0aXN0aWNUeXBlXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgY2F0ZWdvcnkgZmllbGQgZnJvbSBjaGFydCBxdWVyeS5cbiAqIEBwYXJhbSBxdWVyeVxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlGaWVsZCA9IChcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXNcbik6IHN0cmluZyA9PiB7XG4gIHJldHVybiBxdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M/LlswXVxufVxuXG4vKipcbiAqIEdldCBjYXRlZ29yeSBmaWVsZCB0eXBlIGZyb20gY2hhcnQgcXVlcnkuXG4gKiBAcGFyYW0gcXVlcnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5RmllbGRUeXBlID0gKFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcbik6IEppbXVGaWVsZFR5cGUgPT4ge1xuICBjb25zdCBjYXRlZ29yeUZpZWxkID0gcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF1cbiAgY29uc3QgZmllbGRUeXBlID0gZ2V0RmllbGRUeXBlKGNhdGVnb3J5RmllbGQsIGRhdGFTb3VyY2VJZClcbiAgcmV0dXJuIGZpZWxkVHlwZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VyaWFsU3RhY2tlZFR5cGUgPSAoXG4gIHNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+XG4pOiBXZWJDaGFydFN0YWNrZWRLaW5kcyA9PiB7XG4gIHJldHVybiAoc2VyaWVzPy5bMF0gYXMgYW55KS5zdGFja2VkVHlwZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VyaWFMbGluZVNtb290aGVkID0gKFxuICBzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPlxuKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAoc2VyaWVzPy5bMF0gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzPikubGluZVNtb290aGVkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJpYUxsaW5lU2hvd0FyZWEgPSAoXG4gIHNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+XG4pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIChzZXJpZXM/LlswXSBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRMaW5lQ2hhcnRTZXJpZXM+KS5zaG93QXJlYVxufVxuXG5jb25zdCBPcmRlclNlcGFyYXRvciA9ICcgJ1xuLyoqXG4gKiBQYXJzZSBhIHF1ZXJ5Lm9yZGVyQnlGaWVsZHNbaV1cbiAqIEBwYXJhbSBmaWVsZE9yZGVyXG4gKiBub3JtYWw6ICdmaWVsZG5hbWUgQVNDJ1xuICogd2l0aCBzcGFjZSBpbiBmaWVsZDogJ2ZpZWxkIG5hbWUgQVNDJ1xuICovXG5leHBvcnQgY29uc3QgcGFyc2VPcmRlckJ5RmllbGQgPSAoZmllbGRPcmRlcjogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBpZiAoIWZpZWxkT3JkZXIgfHwgIWZpZWxkT3JkZXIuaW5jbHVkZXMoT3JkZXJTZXBhcmF0b3IpKSByZXR1cm4gW11cbiAgY29uc3QgbGFzdEluZGV4ID0gZmllbGRPcmRlci5sYXN0SW5kZXhPZihPcmRlclNlcGFyYXRvcilcbiAgY29uc3QgaW5kZXggPSBmaWVsZE9yZGVyLmluZGV4T2YoT3JkZXJTZXBhcmF0b3IpXG4gIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgY29uc3QgZmllbGQgPSBmaWVsZE9yZGVyLnN1YnN0cmluZygwLCBsYXN0SW5kZXgpXG4gICAgY29uc3Qgb3JkZXIgPSBmaWVsZE9yZGVyLnN1YnN0cmluZyhsYXN0SW5kZXggKyAxKVxuICAgIHJldHVybiBbZmllbGQsIG9yZGVyXVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmaWVsZE9yZGVyLnNwbGl0KCcgJylcbiAgfVxufVxuXG4vL1VzaW5nIHRoZXNlIHNwZWNpYWwgc3ltYm9scyBhcyBgb3V0U3RhdGlzdGljTmFtZWAgd2lsbCBjYXVzZSBzb21lIHNlcnZpY2Ugc3RhdGlzdGljcyB0byBmYWlsLlxuY29uc3QgU3BlY2lhbFN5bWJvbFJlZ2V4cCA9IC9cXCh8XFwpfFxcW3xcXF18XFwlL2dtXG5cbi8qKlxuICogR2VuZXJhdGUgdGhlIGBvdXRTdGF0aXN0aWNOYW1lYCBmb3IgYHF1ZXJ5YCwgYW5kIGl0J3MgYWx3YXlzIGVxdWFsIHRvIGBzZXJpZS55YFxuICogQHBhcmFtIG51bWVyaWNGaWVsZFxuICogQHBhcmFtIHN0YXRpc3RpY1R5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE91dFN0YXRpc3RpY05hbWUgPSAobnVtZXJpY0ZpZWxkOiBzdHJpbmcsIHN0YXRpc3RpY1R5cGU6IENoYXJ0U3RhdGlzdGljVHlwZSkgPT4ge1xuICBpZiAobnVtZXJpY0ZpZWxkPy5tYXRjaChTcGVjaWFsU3ltYm9sUmVnZXhwKSkge1xuICAgIG51bWVyaWNGaWVsZCA9IG51bWVyaWNGaWVsZC5yZXBsYWNlKFNwZWNpYWxTeW1ib2xSZWdleHAsICdfXycpXG4gIH1cbiAgaWYgKHN0YXRpc3RpY1R5cGUgIT09ICdub19hZ2dyZWdhdGlvbicpIHtcbiAgICByZXR1cm4gYCR7c3RhdGlzdGljVHlwZX1fb2ZfJHtudW1lcmljRmllbGR9YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBudW1lcmljRmllbGRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0T3V0U3RhdGlzdGljQWxpYXMgPSAobnVtZXJpY0ZpZWxkQWxpYXM6IHN0cmluZywgc3RhdGlzdGljVHlwZTogQ2hhcnRTdGF0aXN0aWNUeXBlKSA9PiB7XG4gIGlmIChzdGF0aXN0aWNUeXBlICE9PSAnbm9fYWdncmVnYXRpb24nKSB7XG4gICAgcmV0dXJuIGAke3V0aWxzLnVwcGVyY2FzZUZpcnN0TGV0dGVyKHN0YXRpc3RpY1R5cGUpfSBvZiAke251bWVyaWNGaWVsZEFsaWFzfWBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVtZXJpY0ZpZWxkQWxpYXNcbiAgfVxufVxuXG5jb25zdCBTdGF0aXN0aWNzVHJhbnNsYXRpb25zID0ge1xuICBzdW06ICdzdW1PZkZpZWxkJyxcbiAgYXZnOiAnbWVhbk9mRmllbGQnLFxuICBtaW46ICdtaW5PZkZpZWxkJyxcbiAgbWF4OiAnbWF4T2ZGaWVsZCcsXG4gIGNvdW50OiAnY291bnQnLFxuICBwZXJjZW50aWxlX2NvbnQ6ICdtZWRpYW5PZkZpZWxkJ1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgbGFiZWwgb2Ygc3RhdGlzdGljIHR5cGUuXG4gKiBAcGFyYW0gZmllbGRcbiAqIEBwYXJhbSBzdGF0aXN0aWNUeXBlXG4gKiBAcGFyYW0gdHJhbnNsYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVTdGF0aXN0aWNGaWVsZExhYmVsID0gKHN0YXRpc3RpY1R5cGUsIGZpZWxkLCB0cmFuc2xhdGUpID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHRyYW5zbGF0ZShTdGF0aXN0aWNzVHJhbnNsYXRpb25zW3N0YXRpc3RpY1R5cGVdLCB7IGZpZWxkIH0pXG4gIHJldHVybiBub3JtYWxpemVkXG59XG5cbi8qKlxuICogR2V0IGRlZmF1bHQgdmFsdWUgZm9ybWF0IGJhc2VkIG9uIGZpZWxkIHR5cGUuXG4gKiBOb3RlOiBgTnVtYmVyRm9ybWF0T3B0aW9uc2AgaXMgbm90IHN1cHBvcnRlZCBmb3Igc2VyaWFsIGNoYXJ0IHlldC5cbiAqIEBwYXJhbSBmaWVsZFR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRWYWx1ZUZvcm1hdCA9IChmaWVsZFR5cGU6IEppbXVGaWVsZFR5cGUpOiBDYXRlZ29yeUZvcm1hdE9wdGlvbnMgfCBEYXRlVGltZUZvcm1hdE9wdGlvbnMgPT4ge1xuICBpZiAoZmllbGRUeXBlID09PSBKaW11RmllbGRUeXBlLkRhdGUpIHtcbiAgICByZXR1cm4gZ2V0RGVmYXVsdERhdGVGb3JtYXQoKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXREZWZhdWx0Q2F0ZWdvcnlGb3JtYXQoKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTcGxpdE91dFN0YXRpc3RpY05hbWUgPSAobnVtZXJpY0ZpZWxkOiBzdHJpbmcsIHN0YXRpc3RpY1R5cGU6IENoYXJ0U3RhdGlzdGljVHlwZSwgc3BsaXRCeVZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgbGV0IG91dFN0YXRpc3RpY05hbWUgPSBnZXRPdXRTdGF0aXN0aWNOYW1lKG51bWVyaWNGaWVsZCwgc3RhdGlzdGljVHlwZSlcbiAgb3V0U3RhdGlzdGljTmFtZSA9IGAke291dFN0YXRpc3RpY05hbWV9X29mXyR7c3BsaXRCeVZhbHVlfWBcbiAgcmV0dXJuIG91dFN0YXRpc3RpY05hbWVcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNwbGl0T3V0U3RhdGlzdGljQWxpYXMgPSAobnVtZXJpY0ZpZWxkQWxpYXM6IHN0cmluZywgc3RhdGlzdGljVHlwZTogQ2hhcnRTdGF0aXN0aWNUeXBlLCBzcGxpdEJ5VmFsdWU6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICBsZXQgb3V0U3RhdGlzdGljQWxpYXMgPSBnZXRPdXRTdGF0aXN0aWNBbGlhcyhudW1lcmljRmllbGRBbGlhcywgc3RhdGlzdGljVHlwZSlcbiAgb3V0U3RhdGlzdGljQWxpYXMgPSBgJHtvdXRTdGF0aXN0aWNBbGlhc30gb2YgJHtzcGxpdEJ5VmFsdWV9YFxuICByZXR1cm4gb3V0U3RhdGlzdGljQWxpYXNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNwbGl0QnlGaWVsZFZhbHVlcyA9IChzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPik6IEltbXV0YWJsZUFycmF5PG51bWJlciB8IHN0cmluZz4gPT4ge1xuICBpZiAoIXNlcmllcz8ubGVuZ3RoKSByZXR1cm4gSW1tdXRhYmxlKFtdKVxuICBjb25zdCB2YWx1ZXMgPSBzZXJpZXMubWFwKChzZXJpZSkgPT4ge1xuICAgIGNvbnN0IHdoZXJlID0gc2VyaWUucXVlcnkud2hlcmVcbiAgICBjb25zdCB2YWx1ZSA9IGdldFNwbGl0QnlWYWx1ZSh7IHdoZXJlLCBub3JtYWxpemU6IHRydWUgfSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfSlcbiAgcmV0dXJuIHZhbHVlc1xufVxuXG5leHBvcnQgY29uc3QgQXJjZ2lzQ2hhcnRzU2VjcmV0S2V5cyA9IHtcbiAgZGVmYXVsdE91dFN0YXRpc3RpY0ZpZWxkTmFtZTogJ2FyY2dpc19jaGFydHNfb3V0U3RhdGlzdGljRmllbGROYW1lX2RlZmF1bHRfa2V5J1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RmllbGRVbmlxdWVWYWx1ZXNQYXJhbXMgPSAoZmllbGQ6IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpID0+IHtcbiAgY29uc3Qgb3V0RmllbGRzID0gW2ZpZWxkXVxuICBjb25zdCBudWxsRmlsdGVyID0gYCR7ZmllbGR9IElTIE5PVCBOVUxMYFxuICBjb25zdCBvcmRlckJ5RmllbGRzID0gIWlzRW1wdHlTdHJpbmdGaWVsZChmaWVsZCkgPyBbYCR7ZmllbGR9ICR7V2ViQ2hhcnRTb3J0T3JkZXJLaW5kcy5Bc2NlbmRpbmd9YF0gOiBbXVxuICBjb25zdCBwYXJhbXM6IEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zID0ge1xuICAgIHdoZXJlOiBudWxsRmlsdGVyLFxuICAgIG9yZGVyQnlGaWVsZHMsXG4gICAgb3V0RmllbGRzLFxuICAgIHJldHVybkRpc3RpbmN0VmFsdWVzOiB0cnVlLFxuICAgIHJldHVybkdlb21ldHJ5OiBmYWxzZSxcbiAgICBwYWdlU2l6ZVxuICB9XG4gIHJldHVybiBwYXJhbXNcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGRlZmF1bHQgYnkgY2F0ZWdvcnkgdHlwZS5cbiAqIEBwYXJhbSBjYXRlZ29yeVR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRRdWVyeSA9IChjYXRlZ29yeVR5cGUgPSBDYXRlZ29yeVR5cGUuQnlHcm91cCk6IEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zID0+IHtcbiAgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5R3JvdXApIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M6IFtdLFxuICAgICAgb3V0U3RhdGlzdGljczogW11cbiAgICB9XG4gIH0gZWxzZSBpZiAoY2F0ZWdvcnlUeXBlID09PSBDYXRlZ29yeVR5cGUuQnlGaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBvdXRTdGF0aXN0aWNzOiBbXVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRpbWVCaW5uaW5nUHJvcHMgPSB7XG4gIHRpbWVJbnRlcnZhbFNpemU6IDEsXG4gIHRpbWVJbnRlcnZhbFVuaXRzOiBXZWJDaGFydFRpbWVJbnRlcnZhbFVuaXRzLk1vbnRocyxcbiAgdGltZUFnZ3JlZ2F0aW9uVHlwZTogV2ViQ2hhcnRUaW1lQWdncmVnYXRpb25UeXBlcy5TdGFydCxcbiAgdHJpbUluY29tcGxldGVUaW1lSW50ZXJ2YWw6IGZhbHNlLFxuICBudWxsUG9saWN5OiBXZWJDaGFydE51bGxQb2xpY3lUeXBlcy5JbnRlcnBvbGF0ZVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlZmF1bHQgc2VyaWVzIGJhc2VkIG9uIHRoZSBzZXJpZXMgcHJvcGVydGllcy5cbiAqIEBwYXJhbSBzZXJpZXNQcm9wc1xuICogQHBhcmFtIGluZGV4XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0U2VyaWUgPSAoc2VyaWVzUHJvcHM6IEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNlcmllcz4sIGluZGV4ID0gMCwgY29sb3JQcm9wcz86IFNlcmllc0NvbG9yUHJvcHMpOiBXZWJDaGFydFNlcmllcyA9PiB7XG4gIGlmICghc2VyaWVzUHJvcHMpIHJldHVybiBudWxsXG4gIGNvbnN0IHsgdHlwZSA9ICdsaW5lU2VyaWVzJywgZGF0YUxhYmVscywgZGF0YVRvb2x0aXBWaXNpYmxlIH0gPSBzZXJpZXNQcm9wc1xuXG4gIGxldCBzZXJpZSA9IG51bGxcbiAgaWYgKHR5cGUgPT09ICdiYXJTZXJpZXMnKSB7XG4gICAgY29uc3QgeyBmaWxsU3ltYm9sLCBzdGFja2VkVHlwZSA9IFdlYkNoYXJ0U3RhY2tlZEtpbmRzLlNpZGUgfSA9IHNlcmllc1Byb3BzIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydEJhckNoYXJ0U2VyaWVzPlxuICAgIHNlcmllID0gZ2V0RGVmYXVsdEJhckNoYXJ0U2VyaWVzKGluZGV4LCBjb2xvclByb3BzKVxuICAgIHNlcmllLnN0YWNrZWRUeXBlID0gc3RhY2tlZFR5cGVcblxuICAgIGlmIChmaWxsU3ltYm9sKSB7XG4gICAgICBpZiAoIWNvbG9yUHJvcHM/LmNvbG9yICYmIGNvbG9yUHJvcHM/LnByZVNlcmllQ29sb3IpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXROb25SZXBlYXRpbmdDb2xvcihjb2xvclByb3BzPy5jb2xvcnMgPz8gU2VyaWVzQ29sb3JzLCBpbmRleCwgY29sb3JQcm9wcy5wcmVTZXJpZUNvbG9yKVxuICAgICAgICBzZXJpZS5maWxsU3ltYm9sID0gZmlsbFN5bWJvbC5zZXQoJ2NvbG9yJywgY29sb3IpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpZS5maWxsU3ltYm9sID0gZmlsbFN5bWJvbFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZVNlcmllcycpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFja2VkVHlwZSA9IFdlYkNoYXJ0U3RhY2tlZEtpbmRzLlNpZGUsXG4gICAgICBsaW5lU21vb3RoZWQgPSBmYWxzZSxcbiAgICAgIHNob3dBcmVhID0gZmFsc2UsXG4gICAgICBtYXJrZXJWaXNpYmxlID0gZmFsc2UsXG4gICAgICBsaW5lU3ltYm9sLFxuICAgICAgbWFya2VyU3ltYm9sXG4gICAgfSA9IHNlcmllc1Byb3BzIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydExpbmVDaGFydFNlcmllcz5cblxuICAgIHNlcmllID0gZ2V0RGVmYXVsdExpbmVDaGFydFNlcmllcyhpbmRleCwgY29sb3JQcm9wcylcbiAgICBzZXJpZS5zdGFja2VkVHlwZSA9IHN0YWNrZWRUeXBlXG4gICAgc2VyaWUubGluZVNtb290aGVkID0gbGluZVNtb290aGVkXG4gICAgc2VyaWUuc2hvd0FyZWEgPSBzaG93QXJlYVxuICAgIHNlcmllLm1hcmtlclZpc2libGUgPSBtYXJrZXJWaXNpYmxlXG5cbiAgICBpZiAobGluZVN5bWJvbCkge1xuICAgICAgaWYgKCFjb2xvclByb3BzPy5jb2xvciAmJiBjb2xvclByb3BzPy5wcmVTZXJpZUNvbG9yKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0Tm9uUmVwZWF0aW5nQ29sb3IoY29sb3JQcm9wcz8uY29sb3JzID8/IFNlcmllc0NvbG9ycywgaW5kZXgsIGNvbG9yUHJvcHMucHJlU2VyaWVDb2xvcilcbiAgICAgICAgc2VyaWUubGluZVN5bWJvbCA9IGxpbmVTeW1ib2wuc2V0KCdjb2xvcicsIGNvbG9yKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWUubGluZVN5bWJvbCA9IGxpbmVTeW1ib2xcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFya2VyU3ltYm9sKSB7XG4gICAgICBzZXJpZS5tYXJrZXJTeW1ib2wgPSBtYXJrZXJTeW1ib2xcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICBjb25zdCB7IGlubmVyUmFkaXVzID0gMCwgc3RhcnRBbmdsZSA9IDAsIGVuZEFuZ2xlID0gMzYwIH0gPSBzZXJpZXNQcm9wcyBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRQaWVDaGFydFNlcmllcz5cbiAgICBzZXJpZSA9IGdldERlZmF1bHRQaWVDaGFydFNlcmllcygpXG4gICAgc2VyaWUuaW5uZXJSYWRpdXMgPSBpbm5lclJhZGl1c1xuICAgIHNlcmllLnN0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgc2VyaWUuZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY2F0dGVyU2VyaWVzJykge1xuICAgIGNvbnN0IHsgbWFya2VyU3ltYm9sLCBvdmVybGF5cyB9ID0gc2VyaWVzUHJvcHMgYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2NhdHRlclBsb3RTZXJpZXM+XG4gICAgc2VyaWUgPSBnZXREZWZhdWx0U2NhdHRlclBsb3RDaGFydFNlcmllcygpXG4gICAgaWYgKG1hcmtlclN5bWJvbCkge1xuICAgICAgc2VyaWUubWFya2VyU3ltYm9sID0gbWFya2VyU3ltYm9sXG4gICAgfVxuICAgIGlmIChvdmVybGF5cykge1xuICAgICAgc2VyaWUub3ZlcmxheXMgPSBvdmVybGF5c1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnaGlzdG9ncmFtU2VyaWVzJykge1xuICAgIGNvbnN0IHsgZmlsbFN5bWJvbCwgYmluQ291bnQsIG92ZXJsYXlzIH0gPSBzZXJpZXNQcm9wcyBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRIaXN0b2dyYW1TZXJpZXM+XG4gICAgc2VyaWUgPSBnZXREZWZhdWx0SGlzdG9ncmFtU2VyaWVzKClcbiAgICBzZXJpZS5iaW5Db3VudCA9IGJpbkNvdW50XG4gICAgaWYgKG92ZXJsYXlzKSB7XG4gICAgICBzZXJpZS5vdmVybGF5cyA9IG92ZXJsYXlzXG4gICAgfVxuICAgIGlmIChmaWxsU3ltYm9sKSB7XG4gICAgICBzZXJpZS5maWxsU3ltYm9sID0gZmlsbFN5bWJvbFxuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhTGFiZWxzKSB7XG4gICAgc2VyaWUuZGF0YUxhYmVscyA9IGRhdGFMYWJlbHNcbiAgfVxuXG4gIGlmIChkYXRhVG9vbHRpcFZpc2libGUgIT0gbnVsbCkge1xuICAgIHNlcmllLmRhdGFUb29sdGlwVmlzaWJsZSA9IGRhdGFUb29sdGlwVmlzaWJsZVxuICB9XG5cbiAgcmV0dXJuIHNlcmllXG59XG5cbi8qKlxuICogR2V0IHRoZSB1c2VkIHNlcmllcyBieSBzZXJpZXMgaWQgb3IgaW5kZXguXG4gKiBAcGFyYW0gcHJvcFNlcmllc1xuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gaW5kZXhcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFVzZWRTZXJpZXNQcm9wcyA9IChwcm9wU2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sIGlkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgPSAwLCBjb2xvclByb3BzPzogU2VyaWVzQ29sb3JQcm9wcyk6IFdlYkNoYXJ0U2VyaWVzID0+IHtcbiAgbGV0IGRlZmF1bHRTZXJpZSA9IHByb3BTZXJpZXMuZmluZCgocHJvcFNlcmllKSA9PiBwcm9wU2VyaWUuaWQgPT09IGlkKSBhcyB1bmtub3duIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNlcmllcz5cbiAgaWYgKCFkZWZhdWx0U2VyaWUpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHByb3BTZXJpZXNbaW5kZXhdID8/IHByb3BTZXJpZXNbMF1cbiAgICBjb25zdCB7IHR5cGUsIGRhdGFMYWJlbHMsIGRhdGFUb29sdGlwVmlzaWJsZSB9ID0gdGVtcGxhdGVcbiAgICBjb25zdCB7IHN0YWNrZWRUeXBlIH0gPSB0ZW1wbGF0ZSBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRCYXJDaGFydFNlcmllcz5cbiAgICBjb25zdCB7IGxpbmVTbW9vdGhlZCwgc2hvd0FyZWEsIG1hcmtlclZpc2libGUsIG1hcmtlclN5bWJvbCB9ID0gdGVtcGxhdGUgYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzPlxuICAgIGNvbnN0IHsgaW5uZXJSYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlIH0gPSB0ZW1wbGF0ZSBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRQaWVDaGFydFNlcmllcz5cbiAgICBkZWZhdWx0U2VyaWUgPSBJbW11dGFibGUoe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGFMYWJlbHMsXG4gICAgICBkYXRhVG9vbHRpcFZpc2libGUsXG4gICAgICBzdGFja2VkVHlwZSxcbiAgICAgIGxpbmVTbW9vdGhlZCxcbiAgICAgIHNob3dBcmVhLFxuICAgICAgbWFya2VyVmlzaWJsZSxcbiAgICAgIG1hcmtlclN5bWJvbCxcbiAgICAgIGlubmVyUmFkaXVzLFxuICAgICAgc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlXG4gICAgfSkgYXMgdW5rbm93biBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+XG4gIH1cbiAgY29uc3Qgc2VyaWVzUHJvcHMgPSBjcmVhdGVEZWZhdWx0U2VyaWUoZGVmYXVsdFNlcmllLCBpbmRleCwgY29sb3JQcm9wcylcbiAgcmV0dXJuIHNlcmllc1Byb3BzXG59XG5cbmNvbnN0IGdldFNlcmllc1Byb3BzID0gKHNlcmllOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+LCBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcykgPT4ge1xuICBjb25zdCBjYXRlZ29yeUZpZWxkID0gcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF0gPz8gJydcbiAgY29uc3Qgb3V0U3RhdGlzdGljcyA9IHF1ZXJ5Py5vdXRTdGF0aXN0aWNzXG4gIGNvbnN0IG91dEZpZWxkcyA9IHF1ZXJ5Py5vdXRGaWVsZHNcbiAgY29uc3Qgd2hlcmUgPSBxdWVyeT8ud2hlcmVcbiAgY29uc3Qgc3BsaXRCeUZpZWxkID0gZ2V0U3BsaXRCeUZpZWxkKHdoZXJlLCB0cnVlKVxuICBjb25zdCBzdGF0aXN0aWNUeXBlID0gZ2V0U3RhdGlzdGljc1R5cGUocXVlcnkpID8/ICdjb3VudCdcblxuICBjb25zdCB0aW1lSW50ZXJ2YWxVbml0cyA9IChzZXJpZSBhcyB1bmtub3duIGFzIFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzKT8udGltZUludGVydmFsVW5pdHNcblxuICBjb25zdCBudW1lcmljRmllbGRzID0gb3V0RmllbGRzIHx8IG91dFN0YXRpc3RpY3M/Lm1hcCgob3V0U3RhdGlzdGljKSA9PiBvdXRTdGF0aXN0aWMub25TdGF0aXN0aWNGaWVsZCk/LmZpbHRlcihmaWVsZCA9PiAhIWZpZWxkKVxuXG4gIHJldHVybiB7IHNwbGl0QnlGaWVsZCwgY2F0ZWdvcnlGaWVsZCwgbnVtZXJpY0ZpZWxkcywgc3RhdGlzdGljVHlwZSwgdGltZUludGVydmFsVW5pdHMgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwbGl0QnlTZXJpZVByb3BzIHtcbiAgcHJvcFNlcmllc1xuICBuYW1lPzogc3RyaW5nXG4gIGNhdGVnb3J5RmllbGQ6IHN0cmluZ1xuICBudW1iZXJGaWVsZDogc3RyaW5nXG4gIHNwbGl0QnlGaWVsZDogc3RyaW5nXG4gIHNwbGl0QnlGaWVsZFR5cGU6IEppbXVGaWVsZFR5cGVcbiAgc3BsaXRCeVZhbHVlOiBzdHJpbmcgfCBudW1iZXJcbiAgdGltZUludGVydmFsVW5pdHM/OiBXZWJDaGFydFRpbWVJbnRlcnZhbFVuaXRzXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTcGxpdEJ5U2VyaWUgPSAocHJvcHM6IFNwbGl0QnlTZXJpZVByb3BzLCBpbmRleDogbnVtYmVyLCBjb2xvclByb3BzPzogU2VyaWVzQ29sb3JQcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BTZXJpZXMsIG5hbWUsIGNhdGVnb3J5RmllbGQsIG51bWJlckZpZWxkLCB0aW1lSW50ZXJ2YWxVbml0cywgc3BsaXRCeUZpZWxkLCBzcGxpdEJ5RmllbGRUeXBlLCBzcGxpdEJ5VmFsdWUgfSA9IHByb3BzXG4gIGxldCBzZXJpZSA9IGdldFVzZWRTZXJpZXNQcm9wcyhwcm9wU2VyaWVzLCBzcGxpdEJ5VmFsdWUgYXMgc3RyaW5nLCBpbmRleCwgY29sb3JQcm9wcylcbiAgY29uc3QgaWRBbmROYW1lID0gYCR7c3BsaXRCeVZhbHVlfWBcbiAgY29uc3QgeSA9IG51bWJlckZpZWxkXG4gIHNlcmllLmlkID0gaWRBbmROYW1lXG4gIHNlcmllLnggPSBjYXRlZ29yeUZpZWxkXG4gIDsgKHNlcmllIGFzIGFueSkueSA9IHlcbiAgc2VyaWUubmFtZSA9IG5hbWUgfHwgaWRBbmROYW1lXG4gIGlmICh0aW1lSW50ZXJ2YWxVbml0cykge1xuICAgIHNlcmllID0ge1xuICAgICAgLi4uc2VyaWUsXG4gICAgICAuLi5EZWZhdWx0VGltZUJpbm5pbmdQcm9wcyxcbiAgICAgIHRpbWVJbnRlcnZhbFVuaXRzXG4gICAgfSBhcyBhbnlcbiAgfVxuICBjb25zdCB3aGVyZSA9IGAke3NwbGl0QnlGaWVsZH09JHtzcGxpdEJ5RmllbGRUeXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZyA/IGAnJHtzcGxpdEJ5VmFsdWV9J2AgOiBzcGxpdEJ5VmFsdWVcbiAgICB9YFxuICBjb25zdCBxdWVyeSA9IHsgd2hlcmUgfVxuICBzZXJpZS5xdWVyeSA9IHF1ZXJ5XG4gIHJldHVybiBzZXJpZVxufVxuXG5pbnRlcmZhY2UgU2VyaWVzU3R5bGVQcm9wcyBleHRlbmRzIFNlcmllc0NvbG9yUHJvcHMge1xuICBzeW1ib2w/OiBJU2ltcGxlRmlsbFN5bWJvbCB8IElTaW1wbGVMaW5lU3ltYm9sXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTcGxpdEJ5U2VyaWVGcm9tU2VyaWVzID0gKFxuICBwcm9wU2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sXG4gIHByb3BRdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgc3BsaXRCeUZpZWxkVHlwZTogSmltdUZpZWxkVHlwZSxcbiAgc3BsaXRCeVZhbHVlczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPixcbiAgZGVsZXRhYmxlOiBib29sZWFuID0gZmFsc2UsXG4gIGNvbG9yUHJvcHM/OiBTZXJpZXNTdHlsZVByb3BzXG4pOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4gPT4ge1xuICBjb25zdCBzZXJpZXNQcm9wcyA9IGdldFNlcmllc1Byb3BzKHByb3BTZXJpZXNbMF0sIHByb3BRdWVyeSlcbiAgY29uc3QgeyBzcGxpdEJ5RmllbGQsIGNhdGVnb3J5RmllbGQsIG51bWVyaWNGaWVsZHMsIHRpbWVJbnRlcnZhbFVuaXRzIH0gPVxuICAgIHNlcmllc1Byb3BzXG4gIGNvbnN0IG51bWJlckZpZWxkID0gbnVtZXJpY0ZpZWxkc1swXVxuICBsZXQgcHJlU2VyaWVDb2xvciA9IGNvbG9yUHJvcHM/LnByZVNlcmllQ29sb3IgPz8gJydcbiAgY29uc3Qgc2VyaWVzVmFsdWVzID0gc3BsaXRCeVZhbHVlcy5tYXAoKHNwbGl0QnlWYWx1ZSwgaW5kZXgpID0+IHtcbiAgICBsZXQgc2VyaWUgPSBwcm9wU2VyaWVzLmZpbmQoKHNlcmllKSA9PiB7XG4gICAgICBjb25zdCBzZXJpZXNTcGxpdEJ5VmFsdWUgPSBnZXRTcGxpdEJ5VmFsdWUoeyB3aGVyZTogc2VyaWUucXVlcnkud2hlcmUsIG5vcm1hbGl6ZTogZmFsc2UgfSlcbiAgICAgIGNvbnN0IHJhd1NwbGl0QnlWYWx1ZSA9IHNwbGl0QnlGaWVsZFR5cGUgPT09IEppbXVGaWVsZFR5cGUuU3RyaW5nID8gYCcke3NwbGl0QnlWYWx1ZX0nYCA6IGAke3NwbGl0QnlWYWx1ZX1gXG4gICAgICByZXR1cm4gc2VyaWVzU3BsaXRCeVZhbHVlID09PSByYXdTcGxpdEJ5VmFsdWVcbiAgICB9KVxuICAgIGlmICghc2VyaWUpIHtcbiAgICAgIGNvbnN0IHNwbGl0QnlQcm9wcyA9IHtcbiAgICAgICAgcHJvcFNlcmllcyxcbiAgICAgICAgY2F0ZWdvcnlGaWVsZCxcbiAgICAgICAgbnVtYmVyRmllbGQsXG4gICAgICAgIHRpbWVJbnRlcnZhbFVuaXRzLFxuICAgICAgICBzcGxpdEJ5RmllbGQsXG4gICAgICAgIHNwbGl0QnlGaWVsZFR5cGUsXG4gICAgICAgIHNwbGl0QnlWYWx1ZVxuICAgICAgfVxuICAgICAgc2VyaWUgPSBjcmVhdGVTcGxpdEJ5U2VyaWUoc3BsaXRCeVByb3BzLCBpbmRleCwgeyAuLi5jb2xvclByb3BzLCBwcmVTZXJpZUNvbG9yIH0pXG4gICAgICBzZXJpZS5kZWxldGFibGUgPSBkZWxldGFibGVcbiAgICAgIHByZVNlcmllQ29sb3IgPVxuICAgICAgICAoc2VyaWUgYXMgYW55KS5maWxsU3ltYm9sPy5jb2xvciA/PyAoc2VyaWUgYXMgYW55KS5saW5lU3ltYm9sPy5jb2xvclxuICAgICAgaWYgKGNvbG9yUHJvcHMuc3ltYm9sKSB7XG4gICAgICAgIGlmIChzZXJpZS50eXBlID09PSAnYmFyU2VyaWVzJykge1xuICAgICAgICAgIChzZXJpZSBhcyBXZWJDaGFydEJhckNoYXJ0U2VyaWVzKS5maWxsU3ltYm9sID0gY29sb3JQcm9wcy5zeW1ib2wgYXMgSVNpbXBsZUZpbGxTeW1ib2xcbiAgICAgICAgfSBlbHNlIGlmIChzZXJpZS50eXBlID09PSAnbGluZVNlcmllcycpIHtcbiAgICAgICAgICAoc2VyaWUgYXMgV2ViQ2hhcnRMaW5lQ2hhcnRTZXJpZXMpLmxpbmVTeW1ib2wgPSBjb2xvclByb3BzLnN5bWJvbCBhcyBJU2ltcGxlTGluZVN5bWJvbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZXJpZVxuICB9KVxuICBjb25zdCBzZXJpZXMgPSBJbW11dGFibGUoc2VyaWVzVmFsdWVzKVxuICByZXR1cm4gc2VyaWVzXG59XG5cbmV4cG9ydCBjb25zdCBhcHBseVNlcmllc0NvbG9ycyA9IChwcm9wU2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sIGNvbG9yczogc3RyaW5nW10pOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4gPT4ge1xuICBpZiAoIWNvbG9ycykgcmV0dXJuXG4gIGNvbnN0IHNsaWNlcyA9IHByb3BTZXJpZXM/Lm1hcCgoc2VyaWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBnZXRDb2xvckluT3JkZXIoY29sb3JzLCBpbmRleClcbiAgICBjb25zdCB0eXBlID0gc2VyaWUudHlwZVxuICAgIGlmICh0eXBlID09PSAnYmFyU2VyaWVzJykge1xuICAgICAgc2VyaWUgPSBzZXJpZS5zZXRJbihbJ2ZpbGxTeW1ib2wnLCAnY29sb3InXSwgY29sb3IpXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbGluZVNlcmllcycpIHtcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0SW4oWydsaW5lU3ltYm9sJywgJ2NvbG9yJ10sIGNvbG9yKVxuICAgIH1cbiAgICByZXR1cm4gc2VyaWUgYXMgYW55XG4gIH0pXG4gIHJldHVybiBzbGljZXNcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJ1bnRpbWVTcGxpdEJ5U2VyaWVzID0gKFxuICBwcm9wU2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sXG4gIHByb3BRdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgc3BsaXRCeUZpZWxkVHlwZTogSmltdUZpZWxkVHlwZSxcbiAgc3BsaXRCeVZhbHVlczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPlxuKTogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+ID0+IHtcbiAgY29uc3Qgb3RoZXJTZXJpZSA9IHByb3BTZXJpZXMuZmluZChzZXJpZSA9PiBzZXJpZS5pZCA9PT0gU3BsaXRCeU90aGVyU2VyaWVzVmFsdWUpXG4gIGNvbnN0IHN5bWJvbCA9IG90aGVyU2VyaWUudHlwZSA9PT0gJ2JhclNlcmllcycgPyAob3RoZXJTZXJpZSBhcyBXZWJDaGFydEJhckNoYXJ0U2VyaWVzKS5maWxsU3ltYm9sIDogKG90aGVyU2VyaWUgYXMgV2ViQ2hhcnRMaW5lQ2hhcnRTZXJpZXMpLmxpbmVTeW1ib2xcbiAgbGV0IHNlcmllcyA9IGNyZWF0ZVNwbGl0QnlTZXJpZUZyb21TZXJpZXMocHJvcFNlcmllcywgcHJvcFF1ZXJ5LCBzcGxpdEJ5RmllbGRUeXBlLCBzcGxpdEJ5VmFsdWVzLCBmYWxzZSwgeyBzeW1ib2wgfSlcbiAgc2VyaWVzID0gc2VyaWVzLm1hcCgoc2VyaWUpID0+IHtcbiAgICBpZiAoc2VyaWUuZGVsZXRhYmxlKSB7XG4gICAgICBzZXJpZSA9IHNlcmllLndpdGhvdXQoJ2RlbGV0YWJsZScpXG4gICAgfVxuICAgIHJldHVybiBzZXJpZSBhcyB1bmtub3duIGFzIFdlYkNoYXJ0U2VyaWVzXG4gIH0pXG4gIHJldHVybiBzZXJpZXNcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgSVNpbXBsZU1hcmtlclN5bWJvbCxcbiAgdHlwZSBJRm9udCxcbiAgdHlwZSBJVGV4dFN5bWJvbCxcbiAgdHlwZSBJU2ltcGxlTGluZVN5bWJvbCxcbiAgdHlwZSBJU2ltcGxlRmlsbFN5bWJvbFxufSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7XG4gIHR5cGUgSU1GaWVsZFNjaGVtYSxcbiAgdHlwZSBJbW11dGFibGVBcnJheSxcbiAgSmltdUZpZWxkVHlwZSxcbiAgdXRpbHNcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZ2V0VGhlbWUsIGdldFRoZW1lMiB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyB1dGlscyBhcyBqaW11VXRpbHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHtcbiAgUkVTVFN5bWJvbFR5cGUsXG4gIFJFU1RIb3Jpem9udGFsQWxpZ25tZW50LFxuICB0eXBlIFdlYkNoYXJ0QXhpcyxcbiAgUkVTVFNpbXBsZU1hcmtlclN5bWJvbFN0eWxlLFxuICBXZWJDaGFydFR5cGVzLFxuICBnZXREZWZhdWx0Q2F0ZWdvcnlGb3JtYXQsXG4gIHR5cGUgV2ViQ2hhcnRPdmVybGF5LFxuICBSRVNUVmVydGljYWxBbGlnbm1lbnQsXG4gIFdlYkNoYXJ0TGVnZW5kUG9zaXRpb25zLFxuICBnZXRTZXJpZXNUeXBlLFxuICBSRVNURm9udFN0eWxlLFxuICBSRVNURm9udFdlaWdodCxcbiAgUkVTVEZvbnREZWNvcmF0aW9uLFxuICBSRVNUU2ltcGxlTGluZVN5bWJvbFN0eWxlLFxuICBSRVNUU2ltcGxlRmlsbFN5bWJvbFN0eWxlLFxuICB0eXBlIFdlYkNoYXJ0VGV4dCxcbiAgV2ViQ2hhcnRDb2xvcmluZ1BhdHRlcm5zLFxuICBXZWJDaGFydFN0YWNrZWRLaW5kcyxcbiAgdHlwZSBXZWJDaGFydExlZ2VuZCxcbiAgdHlwZSBTY2F0dGVyUGxvdE92ZXJsYXlzLFxuICB0eXBlIENoYXJ0VHlwZXMsXG4gIHR5cGUgSGlzdG9ncmFtT3ZlcmxheXMsXG4gIFdlYkNoYXJ0RGF0YVRyYW5zZm9ybWF0aW9ucyxcbiAgdHlwZSBXZWJDaGFydEd1aWRlLFxuICB0eXBlIE51bWJlckZvcm1hdE9wdGlvbnMsXG4gIHR5cGUgRGF0ZVRpbWVGb3JtYXRPcHRpb25zLFxuICB0eXBlIFdlYkNoYXJ0UGllQ2hhcnRMZWdlbmRcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcblxuaW1wb3J0IHsgdHlwZSBIaXN0b2dyYW1PdmVybGF5c1R5cGUsIHR5cGUgV2ViQ2hhcnRTZXJpZXMgfSBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgeyBQaWVTbGljZUdyb3VwaW5nU2xpY2VJZCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRDb2xvciA9ICd2YXIoLS1kYXJrKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0VGV4dENvbG9yID0gJ3ZhcigtLWRhcmspJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRCZ0NvbG9yID0gJ3ZhcigtLXdoaXRlKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0TGluZUNvbG9yID0gJ3ZhcigtLWxpZ2h0LTkwMCknXG5leHBvcnQgY29uc3QgRGVmYXVsdEZpbGxDb2xvciA9ICd2YXIoLS1wcmltYXJ5KSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0VGV4dFNpemUgPSAxNFxuZXhwb3J0IGNvbnN0IERlZmF1bHRDaXJjbGVNYXJrZXJTaXplID0gMTBcbmV4cG9ydCBjb25zdCBEZWZhdWx0Rm9udFdlaWdodCA9IDQwMFxuXG4vLyB0aXRsZVxuZXhwb3J0IGNvbnN0IERlZmF1bHRUaXRsZUNvbG9yID0gJ3ZhcigtLWJsYWNrKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0VGl0bGVXZWlnaHQgPSA1MDBcbmV4cG9ydCBjb25zdCBEZWZhdWx0VGl0bGVTaXplID0gMjRcblxuLy8gZm9vdGVyXG5leHBvcnQgY29uc3QgRGVmYXVsdEZvb3RlclNpemUgPSAxNFxuZXhwb3J0IGNvbnN0IERlZmF1bHRGb290ZXJDb2xvciA9ICd2YXIoLS1kYXJrLTgwMCknXG5cbi8vIHNlcmllc1xuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJpZXNMYWJlbFNpemUgPSAxMFxuZXhwb3J0IGNvbnN0IERlZmF1bHRWYWx1ZUxhYmVsQ29sb3IgPSAndmFyKC0tZGFyay02MDApJ1xuXG4vLyBheGVzXG5leHBvcnQgY29uc3QgRGVmYXVsdEF4aXNDb2xvciA9ICd2YXIoLS1saWdodC04MDApJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRBeGlzTGFiZWxDb2xvciA9ICd2YXIoLS1kYXJrLTUwMCknXG5leHBvcnQgY29uc3QgRGVmYXVsdEF4aXNUaXRsZUNvbG9yID0gJ3ZhcigtLWRhcmstODAwKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0QXhpc1RpdGxlU2l6ZSA9IDIwXG5leHBvcnQgY29uc3QgRGVmYXVsdEF4aXNMYWJlbFNpemUgPSAxNFxuXG4vLyBndWlkZVxuZXhwb3J0IGNvbnN0IERlZmF1bHRHdWlkZUZpbGxDb2xvciA9ICcjNjdiN2RjJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRHdWlkZUxpbmVDb2xvciA9ICcjNjdiN2RjJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRHdWlkZUxhYmVsU2l6ZSA9IDEyXG5cbi8vIGxlZ2VuZFxuZXhwb3J0IGNvbnN0IERlZmF1bHRMZWdlbmRUaXRsZVNpemUgPSAyMFxuZXhwb3J0IGNvbnN0IERlZmF1bHRMZWdlbmRMYWJlbFNpemUgPSAxNFxuZXhwb3J0IGNvbnN0IERlZmF1bHRMZWdlbmRUaXRsZUNvbG9yID0gJ3ZhcigtLWRhcmstODAwKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0TGVnZW5kTGFiZWxDb2xvciA9ICd2YXIoLS1kYXJrLTgwMCknXG5leHBvcnQgY29uc3QgRGVmYXVsdFBpZUxlZ2VuZExhYmVsTWF4V2lkdGggPSAyMDBcbi8vIGdyaWRcbmV4cG9ydCBjb25zdCBEZWZhdWx0R3JpZENvbG9yID0gJ3ZhcigtLWxpZ2h0LTMwMCknXG4vL2NvbG9yIGJ5IHNsaWNlc1xuZXhwb3J0IGNvbnN0IERlZmF1bHRDb2xvckJ5U2xpY2VzT3RoZXJDb2xvciA9ICcjRDZENkQ2J1xuLy9tYXJrZXIgc2ltYm9sXG5leHBvcnQgY29uc3QgZGVmYXVsdE1hcmtlclNpemUgPSAyMFxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNwbGl0QnlPdGhlclNlcmllc0NvbG9yID0gJyNENkQ2RDYnXG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0Q29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFRleHRDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdFRleHRDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEJnQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRCZ0NvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0VGl0bGVDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdFRpdGxlQ29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRGb290ZXJDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdEZvb3RlckNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QXhpc0xhYmVsQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRBeGlzTGFiZWxDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEF4aXNUaXRsZUNvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0QXhpc1RpdGxlQ29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRMZWdlbmRUaXRsZUNvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0QXhpc1RpdGxlQ29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRMZWdlbmRMYWJlbENvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0QXhpc1RpdGxlQ29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRWYWx1ZUxhYmVsQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRWYWx1ZUxhYmVsQ29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRMaW5lQ29sb3IgPSAoKSA9PiB7XG4gIHJldHVybiBEZWZhdWx0TGluZUNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0QXhpc0NvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0QXhpc0NvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0R3JpZENvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0R3JpZENvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBTZXJpZXNDb2xvcnMgPSBbXG4gICcjNUU4RkQwJyxcbiAgJyM3N0I0ODQnLFxuICAnI0RGNkIzNScsXG4gICcjREJDRjRFJyxcbiAgJyM0MTU0NkQnLFxuICAnIzgyNTdDMicsXG4gICcjRDY1NThCJ1xuXVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNlcmllc091dGxpbmVDb2xvciA9ICd2YXIoLS1saWdodC05MDApJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRQaWVTZXJpZXNPdXRsaW5lQ29sb3IgPSAndmFyKC0tbGlnaHQtMTAwKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0U2NhdHRlclBsb3RUcmFuZExpbmVDb2xvciA9IFNlcmllc0NvbG9yc1syXVxuXG5jb25zdCBkZWZhdWx0SGlzdG9tZ3JhbU1lYW5Db2xvciA9ICcjQTZDRUUzJ1xuY29uc3QgZGVmYXVsdEhpc3RvbWdyYW1NZWRpYW5Db2xvciA9ICcjMzNBMDJDJ1xuY29uc3QgZGVmYXVsdEhpc3RvbWdyYW1TdGRDb2xvciA9ICcjQjJERjhBJ1xuY29uc3QgZGVmYXVsdEhpc3RvbWdyYW1Db2RDb2xvciA9ICcjRTMxQTFDJ1xuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEhpc3RvbWdyYW1PdmVybGF5Q29sb3IgPSAodHlwZTogSGlzdG9ncmFtT3ZlcmxheXNUeXBlKSA9PiB7XG4gIGlmICh0eXBlID09PSAnbWVhbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdEhpc3RvbWdyYW1NZWFuQ29sb3JcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbWVkaWFuJykge1xuICAgIHJldHVybiBkZWZhdWx0SGlzdG9tZ3JhbU1lZGlhbkNvbG9yXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0YW5kYXJkRGV2aWF0aW9uJykge1xuICAgIHJldHVybiBkZWZhdWx0SGlzdG9tZ3JhbVN0ZENvbG9yXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NvbXBhcmlzb25EaXN0cmlidXRpb24nKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRIaXN0b21ncmFtQ29kQ29sb3JcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFNlcmllc091dGxpbmVDb2xvciA9ICh0eXBlOiBDaGFydFR5cGVzID0gJ2JhclNlcmllcycpID0+IHtcbiAgaWYgKGlzWFlDaGFydCh0eXBlKSkge1xuICAgIHJldHVybiBEZWZhdWx0U2VyaWVzT3V0bGluZUNvbG9yXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICByZXR1cm4gRGVmYXVsdFBpZVNlcmllc091dGxpbmVDb2xvclxuICB9IGVsc2Uge1xuICAgIHJldHVybiBEZWZhdWx0U2VyaWVzT3V0bGluZUNvbG9yXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRTZXJpZXNGaWxsQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFNlcmllc0NvbG9yc1swXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdE51bWJlckZvcm1hdCA9ICgpOiBOdW1iZXJGb3JtYXRPcHRpb25zID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLk51bWJlckF4aXNGb3JtYXQsXG4gICAgaW50bE9wdGlvbnM6IHtcbiAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXG4gICAgICB1c2VHcm91cGluZzogdHJ1ZSxcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCxcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogM1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFBlcmNlbnROdW1iZXJGb3JtYXQgPSAoKTogTnVtYmVyRm9ybWF0T3B0aW9ucyA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5OdW1iZXJBeGlzRm9ybWF0LFxuICAgIGludGxPcHRpb25zOiB7XG4gICAgICBzdHlsZTogJ3BlcmNlbnQnLFxuICAgICAgbm90YXRpb246ICdzdGFuZGFyZCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHREYXRlRm9ybWF0ID0gKCk6IERhdGVUaW1lRm9ybWF0T3B0aW9ucyA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5EYXRlQXhpc0Zvcm1hdCxcbiAgICBpbnRsT3B0aW9uczoge31cbiAgfVxufVxuXG4vKipcbiAqIEdldCBjb2xvcnMgaW4gb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbG9ySW5PcmRlciA9IChjb2xvcnM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyID0gMCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IGNvbG9ycz8ubGVuZ3RoID8/IDBcbiAgaWYgKGxlbmd0aCA8IDApIHJldHVyblxuICBpbmRleCA9IGluZGV4ICUgbGVuZ3RoXG4gIGlmIChpbmRleCA8IDApIGluZGV4ID0gMFxuICByZXR1cm4gY29sb3JzW2luZGV4XVxufVxuXG4vKipcbiAqIEdldCBjb2xvciBpbiBvcmRlciwgYnV0IG5vdCByZXBlYXQgdGhlIHByZXZpb3VzIG9uZS5cbiAqIEBwYXJhbSBpbmRleFxuICogQHBhcmFtIHByZVNlcmllQ29sb3JcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXROb25SZXBlYXRpbmdDb2xvciA9IChjb2xvcnM6IHN0cmluZ1tdLCBpbmRleDogbnVtYmVyID0gMCwgcHJlU2VyaWVDb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgbGV0IGNvbG9yID0gZ2V0Q29sb3JJbk9yZGVyKGNvbG9ycywgaW5kZXgpXG4gIGlmIChjb2xvciA9PT0gcHJlU2VyaWVDb2xvcikge1xuICAgIGNvbG9yID0gZ2V0Q29sb3JJbk9yZGVyKGNvbG9ycywgaW5kZXggKyAxKVxuICB9XG4gIHJldHVybiBjb2xvclxufVxuXG4vKipcbiAqIEdldCBzZXJpZXMgZmlsbCBjb2xvcnMgaW4gb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlcmllc0ZpbGxDb2xvciA9IChpbmRleDogbnVtYmVyID0gMCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBnZXRDb2xvckluT3JkZXIoU2VyaWVzQ29sb3JzLCBpbmRleClcbn1cblxuLyoqXG4gKiBHZXQgc2VyaWVzIGZpbGwgY29sb3JzIGluIG9yZGVyLCBidXQgbm90IHJlcGVhdCB0aGUgcHJldmlvdXMgb25lLlxuICogQHBhcmFtIGluZGV4XG4gKiBAcGFyYW0gcHJlU2VyaWVDb2xvclxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE5vblJlcGVhdGluZ1Nlcmllc0ZpbGxDb2xvciA9IChpbmRleDogbnVtYmVyID0gMCwgcHJlU2VyaWVDb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGdldE5vblJlcGVhdGluZ0NvbG9yKFNlcmllc0NvbG9ycywgaW5kZXgsIHByZVNlcmllQ29sb3IpXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Rm9udDogSUZvbnQgPSB7XG4gIGZhbWlseTogJ0F2ZW5pciBOZXh0JyxcbiAgc2l6ZTogRGVmYXVsdFRleHRTaXplLFxuICBzdHlsZTogUkVTVEZvbnRTdHlsZS5Ob3JtYWwsXG4gIHdlaWdodDogUkVTVEZvbnRXZWlnaHQuTm9ybWFsLFxuICBkZWNvcmF0aW9uOiBSRVNURm9udERlY29yYXRpb24uTm9uZVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRleHRTeW1ib2w6IElUZXh0U3ltYm9sID0ge1xuICB0eXBlOiBSRVNUU3ltYm9sVHlwZS5UUyxcbiAgY29sb3I6IERlZmF1bHRUZXh0Q29sb3IgYXMgYW55LFxuICBmb250OiBEZWZhdWx0Rm9udCxcbiAgaG9yaXpvbnRhbEFsaWdubWVudDogUkVTVEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0TGluZVN5bWJvbDogSVNpbXBsZUxpbmVTeW1ib2wgPSB7XG4gIHR5cGU6IFJFU1RTeW1ib2xUeXBlLlNMUyxcbiAgc3R5bGU6IFJFU1RTaW1wbGVMaW5lU3ltYm9sU3R5bGUuU29saWQsXG4gIGNvbG9yOiBEZWZhdWx0TGluZUNvbG9yIGFzIGFueSxcbiAgd2lkdGg6IDFcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRGaWxsU3ltYm9sOiBJU2ltcGxlRmlsbFN5bWJvbCA9IHtcbiAgdHlwZTogUkVTVFN5bWJvbFR5cGUuU0ZTLFxuICBzdHlsZTogUkVTVFNpbXBsZUZpbGxTeW1ib2xTdHlsZS5Tb2xpZCxcbiAgY29sb3I6IERlZmF1bHRGaWxsQ29sb3IgYXMgYW55LFxuICBvdXRsaW5lOiBEZWZhdWx0TGluZVN5bWJvbFxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdENpcmNsZU1hcmtlclN5bWJvbDogSVNpbXBsZU1hcmtlclN5bWJvbCA9IHtcbiAgdHlwZTogUkVTVFN5bWJvbFR5cGUuU01TLFxuICBzdHlsZTogUkVTVFNpbXBsZU1hcmtlclN5bWJvbFN0eWxlLkNpcmNsZSxcbiAgY29sb3I6IERlZmF1bHRGaWxsQ29sb3IgYXMgYW55LFxuICBzaXplOiBEZWZhdWx0Q2lyY2xlTWFya2VyU2l6ZSxcbiAgb3V0bGluZTogRGVmYXVsdExpbmVTeW1ib2xcbn1cblxuLyoqXG4gKiBHZXQgYWxsIHRoZW1lIHZhcmlhYmxlc1xuICovXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVDb2xvclZhcmlhYmxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0VGhlbWUyKCkgOiBnZXRUaGVtZSgpXG4gIGNvbnN0IHBhbGV0dGUgPSB0aGVtZS5jb2xvcnM/LmdldFBhbGV0dGUgIT0gbnVsbCA/IHRoZW1lLmNvbG9ycy5nZXRQYWxldHRlKCkgOiB0aGVtZS5jb2xvcnM/LnBhbGV0dGVcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXVxuICBPYmplY3Qua2V5cyhwYWxldHRlKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xuICAgICAgY29uc3Qgc2hhZGVJbmRleCA9IGkgKiAxMDBcbiAgICAgIGNvbnN0IHZhbHVlID0gamltdVV0aWxzLnRvQ29sb3JWYXJpYWJsZShuYW1lLCBzaGFkZUluZGV4KVxuICAgICAgdmFyaWFibGVzLnB1c2godmFsdWUpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB2YXJpYWJsZXNcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSB0aGVtZSBjb2xvclxuICovXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb21UaGVtZUNvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHZhcmlhbGJlcyA9IGdldFRoZW1lQ29sb3JWYXJpYWJsZXMoKVxuICBjb25zdCBsZW5ndGggPSB2YXJpYWxiZXMubGVuZ3RoXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKVxuICByZXR1cm4gdmFyaWFsYmVzW3JhbmRvbUluZGV4XVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Rm9udCA9IChzaXplID0gRGVmYXVsdFRleHRTaXplKTogSUZvbnQgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLkRlZmF1bHRGb250LFxuICAgIHNpemVcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCB0ZXh0IHN5bWJvbFxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaXplXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUZXh0U3ltYm9sID0gKFxuICB0ZXh0ID0gJycsXG4gIHNpemUgPSBEZWZhdWx0VGV4dFNpemUsXG4gIGNvbG9yID0gRGVmYXVsdFRleHRDb2xvciBhcyBhbnlcbik6IElUZXh0U3ltYm9sID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5EZWZhdWx0VGV4dFN5bWJvbCxcbiAgICB0ZXh0LFxuICAgIGNvbG9yLFxuICAgIGZvbnQ6IGdldEZvbnQoc2l6ZSlcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCBsaW5lIHN5bWJvbFxuICogQHBhcmFtIHVzZVJhbmRvbUNvbG9yIFdoZXRoZXIgdG8gcmFuZG9tbHkgZ2VuZXJhdGUgY29sb3JzXG4gKiBAcGFyYW0gd2lkdGhcbiAqL1xuZXhwb3J0IGNvbnN0IGdldExpbmVTeW1ib2wgPSAoXG4gIHdpZHRoOiBudW1iZXIgPSAxLFxuICBjb2xvciA9IERlZmF1bHRMaW5lQ29sb3IgYXMgYW55LFxuICBzdHlsZTogUkVTVFNpbXBsZUxpbmVTeW1ib2xTdHlsZSA9IFJFU1RTaW1wbGVMaW5lU3ltYm9sU3R5bGUuU29saWRcbik6IElTaW1wbGVMaW5lU3ltYm9sID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5EZWZhdWx0TGluZVN5bWJvbCxcbiAgICB3aWR0aCxcbiAgICBjb2xvcixcbiAgICBzdHlsZVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IGZpbGwgc3ltYm9sLlxuICovXG5leHBvcnQgY29uc3QgZ2V0RmlsbFN5bWJvbCA9IChcbiAgY29sb3I6IHN0cmluZyA9IERlZmF1bHRDb2xvcixcbiAgb3V0bGluZVdpZHRoOiBudW1iZXIgPSAxLFxuICBvdXRsaW5lQ29sb3IgPSBEZWZhdWx0TGluZUNvbG9yXG4pOiBJU2ltcGxlRmlsbFN5bWJvbCA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uRGVmYXVsdEZpbGxTeW1ib2wsXG4gICAgY29sb3I6IGNvbG9yIGFzIGFueSxcbiAgICBvdXRsaW5lOiBnZXRMaW5lU3ltYm9sKG91dGxpbmVXaWR0aCwgb3V0bGluZUNvbG9yKVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IGNpcmNsZSBtYXJrZXIgc3ltYm9sXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaXJjbGVNYXJrZXJTeW1ib2wgPSAoXG4gIGNvbG9yOiBhbnkgPSBEZWZhdWx0RmlsbENvbG9yLFxuICBvdXRsaW5lV2lkdGg6IG51bWJlciA9IDAsXG4gIG1hcmtlclNpemU6IG51bWJlciA9IERlZmF1bHRDaXJjbGVNYXJrZXJTaXplXG4pOiBJU2ltcGxlTWFya2VyU3ltYm9sID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5EZWZhdWx0Q2lyY2xlTWFya2VyU3ltYm9sLFxuICAgIGNvbG9yLFxuICAgIHNpemU6IG1hcmtlclNpemUsXG4gICAgb3V0bGluZTogZ2V0TGluZVN5bWJvbChvdXRsaW5lV2lkdGgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRHdWlkZSAobmFtZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nID0gJycsIGlzSG9yaXpvbnRhbD86IGJvb2xlYW4pOiBXZWJDaGFydEd1aWRlIHtcbiAgY29uc3QgaG9yaXpvbnRhbEFsaWdubWVudCA9IGlzSG9yaXpvbnRhbCA/ICdjZW50ZXInIDogJ3JpZ2h0J1xuICBjb25zdCB2ZXJ0aWNhbEFsaWdubWVudCA9IGlzSG9yaXpvbnRhbCA/ICd0b3AnIDogJ21pZGRsZSdcbiAgY29uc3QgbGFiZWxUZXh0ID0gZ2V0VGV4dFN5bWJvbChsYWJlbCwgRGVmYXVsdEd1aWRlTGFiZWxTaXplLCBEZWZhdWx0VGV4dENvbG9yIGFzIGFueSlcbiAgbGFiZWxUZXh0Lmhvcml6b250YWxBbGlnbm1lbnQgPSBob3Jpem9udGFsQWxpZ25tZW50XG4gIGxhYmVsVGV4dC52ZXJ0aWNhbEFsaWdubWVudCA9IHZlcnRpY2FsQWxpZ25tZW50XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkd1aWRlLFxuICAgIHN0YXJ0OiB1bmRlZmluZWQsXG4gICAgc3R5bGU6IGdldExpbmVTeW1ib2woMiwgRGVmYXVsdEd1aWRlTGluZUNvbG9yIGFzIGFueSksXG4gICAgbmFtZSxcbiAgICBsYWJlbDogbGFiZWxUZXh0LFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgYWJvdmU6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPdmVybGF5IChjb2xvcj86IHN0cmluZyk6IFdlYkNoYXJ0T3ZlcmxheSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5PdmVybGF5LFxuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGNyZWF0ZWQ6IGZhbHNlLFxuICAgIHN5bWJvbDogZ2V0TGluZVN5bWJvbCgxLCBjb2xvcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhdHRlclBsb3RPdmVybGF5cyAoXG4gIGNvbG9yOiBhbnkgPSBTZXJpZXNDb2xvcnNbMl0sXG4gIHdpZHRoOiBudW1iZXIgPSAzXG4pOiBTY2F0dGVyUGxvdE92ZXJsYXlzIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLk92ZXJsYXlzLFxuICAgIHRyZW5kTGluZToge1xuICAgICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5PdmVybGF5LFxuICAgICAgY3JlYXRlZDogdHJ1ZSxcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICBzeW1ib2w6IHtcbiAgICAgICAgdHlwZTogJ2VzcmlTTFMnLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgd2lkdGhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGRlZmF1bHQgY2hhcnQgdGV4dFxuICogQHBhcmFtIHZpc2libGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENoYXJ0VGV4dCA9IChcbiAgdGV4dCA9ICcnLFxuICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZSxcbiAgc2l6ZT86IG51bWJlcixcbiAgY29sb3IgPSBEZWZhdWx0VGV4dENvbG9yIGFzIGFueVxuKTogV2ViQ2hhcnRUZXh0ID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLlRleHQsXG4gICAgdmlzaWJsZSxcbiAgICBjb250ZW50OiBnZXRUZXh0U3ltYm9sKHRleHQsIHNpemUsIGNvbG9yKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeUF4aXMgPSAodGV4dCA9ICcnKTogV2ViQ2hhcnRBeGlzID0+IHtcbiAgY29uc3QgdGl0bGUgPSBnZXRDaGFydFRleHQodGV4dCwgZmFsc2UsIERlZmF1bHRBeGlzVGl0bGVTaXplLCBEZWZhdWx0QXhpc1RpdGxlQ29sb3IpXG4gIHRpdGxlLmNvbnRlbnQuaG9yaXpvbnRhbEFsaWdubWVudCA9IFJFU1RIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlclxuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuQXhpcyxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIHRpdGxlLFxuICAgIGxhYmVsczogZ2V0Q2hhcnRUZXh0KCcnLCBmYWxzZSwgRGVmYXVsdEF4aXNMYWJlbFNpemUsIERlZmF1bHRBeGlzTGFiZWxDb2xvciksXG4gICAgdmFsdWVGb3JtYXQ6IGdldERlZmF1bHRDYXRlZ29yeUZvcm1hdCgpLFxuICAgIGxpbmVTeW1ib2w6IGdldExpbmVTeW1ib2woMSwgRGVmYXVsdEF4aXNDb2xvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVBeGlzID0gKFxuICB0ZXh0ID0gJycsXG4gIGlzWUF4aXM/OiBib29sZWFuXG4pOiBXZWJDaGFydEF4aXMgPT4ge1xuICBjb25zdCB0aXRsZSA9IGdldENoYXJ0VGV4dCh0ZXh0LCBmYWxzZSwgRGVmYXVsdEF4aXNUaXRsZVNpemUsIERlZmF1bHRBeGlzVGl0bGVDb2xvcilcbiAgaWYgKGlzWUF4aXMpIHtcbiAgICB0aXRsZS5jb250ZW50Lmhvcml6b250YWxBbGlnbm1lbnQgPSB1bmRlZmluZWRcbiAgICB0aXRsZS5jb250ZW50LnZlcnRpY2FsQWxpZ25tZW50ID0gUkVTVFZlcnRpY2FsQWxpZ25tZW50Lk1pZGRsZVxuICAgIHRpdGxlLmNvbnRlbnQuYW5nbGUgPSAyNzBcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5jb250ZW50Lmhvcml6b250YWxBbGlnbm1lbnQgPSBSRVNUSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXJcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuQXhpcyxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIHRpdGxlLFxuICAgIGxhYmVsczogZ2V0Q2hhcnRUZXh0KCcnLCBmYWxzZSwgRGVmYXVsdEF4aXNMYWJlbFNpemUsIERlZmF1bHRBeGlzTGFiZWxDb2xvciksXG4gICAgdmFsdWVGb3JtYXQ6IGdldERlZmF1bHROdW1iZXJGb3JtYXQoKSxcbiAgICBsaW5lU3ltYm9sOiBnZXRMaW5lU3ltYm9sKDEsIERlZmF1bHRBeGlzQ29sb3IpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGRlZmF1bHQgYXhlcyBiYXNlZCBvbiBjaGFydCB0eXBlIGFzIHBlciB0aGUgV2ViQ2hhcnQgU3BlY2lmaWNhdGlvblxuICogQHBhcmFtIGNoYXJ0VHlwZSBUaGUgdHlwZSBvZiBXZWJDaGFydCB3aGljaCBpcyBvZiB0eXBlIFdlYkNoYXJ0VHlwZXMuQmFyU2VyaWVzIHwgV2ViQ2hhcnRUeXBlcy5IaXN0b2dyYW1TZXJpZXMgfCBXZWJDaGFydFR5cGVzLlNjYXR0ZXJTZXJpZXNcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0QXhlcyAoXG4gIGNoYXJ0VHlwZTpcbiAgICB0eXBlb2YgV2ViQ2hhcnRUeXBlcy5CYXJTZXJpZXNcbiAgfCB0eXBlb2YgV2ViQ2hhcnRUeXBlcy5MaW5lU2VyaWVzXG4gIHwgdHlwZW9mIFdlYkNoYXJ0VHlwZXMuSGlzdG9ncmFtU2VyaWVzXG4gIHwgdHlwZW9mIFdlYkNoYXJ0VHlwZXMuU2NhdHRlclNlcmllc1xuKTogV2ViQ2hhcnRBeGlzW10ge1xuICBjb25zdCBkZWZhdWx0QXhlczogV2ViQ2hhcnRBeGlzW10gPSBbXVxuICBjb25zdCB4QXhpc1RpdGxlID0gJydcbiAgY29uc3QgeUF4aXNUaXRsZSA9ICcnXG4gIGNvbnN0IHlBeGlzID0gZ2V0VmFsdWVBeGlzKHlBeGlzVGl0bGUsIHRydWUpXG4gIGNvbnN0IGRlZmF1bHRHcmlkTGluZSA9IGdldExpbmVTeW1ib2woXG4gICAgMSxcbiAgICBEZWZhdWx0R3JpZENvbG9yLFxuICAgIFJFU1RTaW1wbGVMaW5lU3ltYm9sU3R5bGUuRGFzaFxuICApXG4gIHN3aXRjaCAoY2hhcnRUeXBlKSB7XG4gICAgY2FzZSBXZWJDaGFydFR5cGVzLkJhclNlcmllczoge1xuICAgICAgLy8gU2V0dGluZyBMaW5lIENoYXJ0IGJhc2VsaW5lIHRvIDAuXG4gICAgICB5QXhpcy5taW5pbXVtID0gMFxuICAgICAgeUF4aXMuZ3JpZCA9IGRlZmF1bHRHcmlkTGluZVxuICAgICAgZGVmYXVsdEF4ZXMucHVzaChnZXRDYXRlZ29yeUF4aXMoeEF4aXNUaXRsZSksIHlBeGlzKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY2FzZSBXZWJDaGFydFR5cGVzLkxpbmVTZXJpZXM6IHtcbiAgICAgIC8vIFNldHRpbmcgQmFyIENoYXJ0IGJhc2VsaW5lIHRvIDAuXG4gICAgICB5QXhpcy5taW5pbXVtID0gMFxuICAgICAgeUF4aXMuZ3JpZCA9IGRlZmF1bHRHcmlkTGluZVxuICAgICAgZGVmYXVsdEF4ZXMucHVzaChnZXRDYXRlZ29yeUF4aXMoeEF4aXNUaXRsZSksIHlBeGlzKVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY2FzZSBXZWJDaGFydFR5cGVzLlNjYXR0ZXJTZXJpZXM6IHtcbiAgICAgIGNvbnN0IHhBeGlzID0gZ2V0VmFsdWVBeGlzKHhBeGlzVGl0bGUpXG4gICAgICB4QXhpcy5ncmlkID0gZGVmYXVsdEdyaWRMaW5lXG4gICAgICB5QXhpcy5ncmlkID0gZGVmYXVsdEdyaWRMaW5lXG4gICAgICBkZWZhdWx0QXhlcy5wdXNoKHhBeGlzLCB5QXhpcylcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgV2ViQ2hhcnRUeXBlcy5IaXN0b2dyYW1TZXJpZXM6IHtcbiAgICAgIHlBeGlzLmdyaWQgPSBkZWZhdWx0R3JpZExpbmVcbiAgICAgIGRlZmF1bHRBeGVzLnB1c2goZ2V0VmFsdWVBeGlzKHhBeGlzVGl0bGUpLCB5QXhpcylcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVha1xuICB9XG4gIC8vIFRPRE86IG9uY2UgYGdldERlZmF1bHRBeGVzYCBpcyBvbmx5IG5lZWRlZCB2aWEgYGdldERlZmF1bHRCYXJDaGFydGAgZGVlcCBjbG9uZSBjYW4gYmUgcmVtb3ZlZC5cbiAgcmV0dXJuIGRlZmF1bHRBeGVzXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWVzQ29sb3JQcm9wcyB7XG4gIGNvbG9yPzogc3RyaW5nXG4gIHByZVNlcmllQ29sb3I/OiBzdHJpbmdcbiAgY29sb3JzPzogc3RyaW5nW11cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVmYXVsdCBCYXJDaGFydFNlcmllcyBvYmplY3QgYXMgcGVyIHRoZSBXZWJDaGFydCBTcGVjaWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0QmFyQ2hhcnRTZXJpZXMgKGluZGV4OiBudW1iZXIgPSAwLCBjb2xvclByb3BzPzogU2VyaWVzQ29sb3JQcm9wcyk6IFdlYkNoYXJ0U2VyaWVzIHtcbiAgY29uc3QgY29sb3IgPSAhY29sb3JQcm9wcz8uY29sb3IgPyBnZXROb25SZXBlYXRpbmdDb2xvcihjb2xvclByb3BzPy5jb2xvcnMgPz8gU2VyaWVzQ29sb3JzLCBpbmRleCwgY29sb3JQcm9wcz8ucHJlU2VyaWVDb2xvcikgOiBjb2xvclByb3BzPy5jb2xvclxuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuQmFyU2VyaWVzLFxuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICB4OiAnJyxcbiAgICB5OiAnJyxcbiAgICBjb2xvclR5cGU6IFdlYkNoYXJ0Q29sb3JpbmdQYXR0ZXJucy5TaW5nbGUsXG4gICAgc3RhY2tlZFR5cGU6IFdlYkNoYXJ0U3RhY2tlZEtpbmRzLlNpZGUsXG4gICAgZmlsbFN5bWJvbDogZ2V0RmlsbFN5bWJvbChjb2xvciwgMCksXG4gICAgZGF0YUxhYmVsczogZ2V0Q2hhcnRUZXh0KCcnLCBmYWxzZSwgRGVmYXVsdFNlcmllc0xhYmVsU2l6ZSwgRGVmYXVsdFZhbHVlTGFiZWxDb2xvciksXG4gICAgcm90YXRlZDogZmFsc2VcbiAgfSBhcyBXZWJDaGFydFNlcmllc1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBkZWZhdWx0IExpbmVDaGFydFNlcmllcyBvYmplY3QgYXMgcGVyIHRoZSBXZWJDaGFydCBTcGVjaWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0TGluZUNoYXJ0U2VyaWVzIChpbmRleDogbnVtYmVyID0gMCwgY29sb3JQcm9wcz86IFNlcmllc0NvbG9yUHJvcHMpOiBXZWJDaGFydFNlcmllcyB7XG4gIGNvbnN0IGNvbG9yID0gIWNvbG9yUHJvcHM/LmNvbG9yID8gZ2V0Tm9uUmVwZWF0aW5nQ29sb3IoY29sb3JQcm9wcz8uY29sb3JzID8/IFNlcmllc0NvbG9ycywgaW5kZXgsIGNvbG9yUHJvcHM/LnByZVNlcmllQ29sb3IpIDogY29sb3JQcm9wcz8uY29sb3JcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkxpbmVTZXJpZXMsXG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHg6ICcnLFxuICAgIHk6ICcnLFxuICAgIGNvbG9yVHlwZTogV2ViQ2hhcnRDb2xvcmluZ1BhdHRlcm5zLlNpbmdsZSxcbiAgICBzdGFja2VkVHlwZTogV2ViQ2hhcnRTdGFja2VkS2luZHMuU2lkZSxcbiAgICBsaW5lU3ltYm9sOiBnZXRMaW5lU3ltYm9sKDIsIGNvbG9yKSxcbiAgICBkYXRhTGFiZWxzOiBnZXRDaGFydFRleHQoJycsIGZhbHNlLCBEZWZhdWx0U2VyaWVzTGFiZWxTaXplLCBEZWZhdWx0VmFsdWVMYWJlbENvbG9yKSxcbiAgICByb3RhdGVkOiBmYWxzZVxuICB9IGFzIFdlYkNoYXJ0U2VyaWVzXG59XG5cbi8qKlxuICogUmV0dXJucyBhIGRlZmF1bHQgUGllQ2hhcnRTZXJpZXMgb2JqZWN0IGFzIHBlciB0aGUgV2ViQ2hhcnQgU3BlY2lmaWNhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBpZUNoYXJ0U2VyaWVzICgpOiBXZWJDaGFydFNlcmllcyB7XG4gIGNvbnN0IGNvbG9yID0gZ2V0U2VyaWVzRmlsbENvbG9yKDApXG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5QaWVTZXJpZXMsXG4gICAgY29sb3JUeXBlOiBXZWJDaGFydENvbG9yaW5nUGF0dGVybnMuU2luZ2xlLFxuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICB4OiAnJyxcbiAgICB5OiAnJyxcbiAgICBpbm5lclJhZGl1czogMCxcbiAgICBzdGFydEFuZ2xlOiAwLFxuICAgIGVuZEFuZ2xlOiAzNjAsXG4gICAgZGlzcGxheU51bWVyaWNWYWx1ZU9uRGF0YUxhYmVsOiB0cnVlLFxuICAgIGRpc3BsYXlQZXJjZW50YWdlT25EYXRhTGFiZWw6IGZhbHNlLFxuICAgIGRpc3BsYXlOdW1lcmljVmFsdWVPblRvb2x0aXA6IHRydWUsXG4gICAgZGlzcGxheVBlcmNlbnRhZ2VPblRvb2x0aXA6IHRydWUsXG4gICAgZGF0YUxhYmVsc09mZnNldDogMCxcbiAgICBzbGljZUdyb3VwaW5nOiB7XG4gICAgICBzbGljZUlkOiBQaWVTbGljZUdyb3VwaW5nU2xpY2VJZCxcbiAgICAgIHBlcmNlbnRhZ2VUaHJlc2hvbGQ6IDAsXG4gICAgICBsYWJlbDogJ090aGVyJ1xuICAgIH0sXG4gICAgbnVtZXJpY1ZhbHVlRm9ybWF0OiBnZXREZWZhdWx0TnVtYmVyRm9ybWF0KCksXG4gICAgcGVyY2VudFZhbHVlRm9ybWF0OiBnZXREZWZhdWx0UGVyY2VudE51bWJlckZvcm1hdCgpLFxuICAgIGZpbGxTeW1ib2w6IGdldEZpbGxTeW1ib2woY29sb3IsIDEsICd2YXIoLS1saWdodC0xMDApJyksXG4gICAgZGF0YUxhYmVsczogZ2V0Q2hhcnRUZXh0KCcnLCBmYWxzZSwgRGVmYXVsdFNlcmllc0xhYmVsU2l6ZSwgRGVmYXVsdFZhbHVlTGFiZWxDb2xvcilcbiAgfSBhcyBXZWJDaGFydFNlcmllc1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBkZWZhdWx0IFNjYXR0ZXJQbG90Q2hhcnRTZXJpZXMgb2JqZWN0IGFzIHBlciB0aGUgV2ViQ2hhcnQgU3BlY2lmaWNhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjYXR0ZXJQbG90Q2hhcnRTZXJpZXMgKCk6IFdlYkNoYXJ0U2VyaWVzIHtcbiAgY29uc3QgY29sb3IgPSBnZXRTZXJpZXNGaWxsQ29sb3IoMClcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLlNjYXR0ZXJTZXJpZXMsXG4gICAgY29sb3JUeXBlOiBXZWJDaGFydENvbG9yaW5nUGF0dGVybnMuU2luZ2xlLFxuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICB4OiAnJyxcbiAgICB5OiAnJyxcbiAgICBtYXJrZXJTeW1ib2w6IGdldENpcmNsZU1hcmtlclN5bWJvbChjb2xvciwgMCwgZGVmYXVsdE1hcmtlclNpemUpLFxuICAgIG92ZXJsYXlzOiBnZXRTY2F0dGVyUGxvdE92ZXJsYXlzKClcbiAgfSBhcyBXZWJDaGFydFNlcmllc1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBkZWZhdWx0IEhpc3RvZ3JhbUNoYXJ0U2VyaWVzIG9iamVjdCBhcyBwZXIgdGhlIFdlYkNoYXJ0IFNwZWNpZmljYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRIaXN0b2dyYW1TZXJpZXMgKCk6IFdlYkNoYXJ0U2VyaWVzIHtcbiAgY29uc3QgY29sb3IgPSBnZXRTZXJpZXNGaWxsQ29sb3IoMClcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkhpc3RvZ3JhbVNlcmllcyxcbiAgICBjb2xvclR5cGU6IFdlYkNoYXJ0Q29sb3JpbmdQYXR0ZXJucy5TaW5nbGUsXG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHg6ICcnLFxuICAgIGJpbkNvdW50OiAxNSxcbiAgICBvdmVybGF5czogZ2V0RGVmYXVsdEhpc3RvZ3JhbU92ZXJsYXlzKCksXG4gICAgZGF0YVRyYW5zZm9ybWF0aW9uVHlwZTogV2ViQ2hhcnREYXRhVHJhbnNmb3JtYXRpb25zLk5vbmUsXG4gICAgZmlsbFN5bWJvbDogZ2V0RmlsbFN5bWJvbChjb2xvciwgMSwgJ3ZhcigtLWxpZ2h0LTEwMCknKSxcbiAgICBkYXRhTGFiZWxzOiBnZXRDaGFydFRleHQoJycsIGZhbHNlLCBEZWZhdWx0U2VyaWVzTGFiZWxTaXplLCBEZWZhdWx0VmFsdWVMYWJlbENvbG9yKSxcbiAgICByb3RhdGVkOiBmYWxzZVxuICB9IGFzIFdlYkNoYXJ0U2VyaWVzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0SGlzdG9ncmFtT3ZlcmxheXMgKCk6IEhpc3RvZ3JhbU92ZXJsYXlzIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLk92ZXJsYXlzLFxuICAgIG1lYW46IGdldERlZmF1bHRPdmVybGF5KGdldERlZmF1bHRIaXN0b21ncmFtT3ZlcmxheUNvbG9yKCdtZWFuJykpLFxuICAgIG1lZGlhbjogZ2V0RGVmYXVsdE92ZXJsYXkoZ2V0RGVmYXVsdEhpc3RvbWdyYW1PdmVybGF5Q29sb3IoJ21lZGlhbicpKSxcbiAgICBzdGFuZGFyZERldmlhdGlvbjogZ2V0RGVmYXVsdE92ZXJsYXkoZ2V0RGVmYXVsdEhpc3RvbWdyYW1PdmVybGF5Q29sb3IoJ3N0YW5kYXJkRGV2aWF0aW9uJykpLFxuICAgIGNvbXBhcmlzb25EaXN0cmlidXRpb246IGdldERlZmF1bHRPdmVybGF5KGdldERlZmF1bHRIaXN0b21ncmFtT3ZlcmxheUNvbG9yKCdjb21wYXJpc29uRGlzdHJpYnV0aW9uJykpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRMZWdlbmQgPSAodmlzaWJsZSA9IHRydWUsIGlzUGllOiBib29sZWFuID0gZmFsc2UpOiBXZWJDaGFydExlZ2VuZCA9PiB7XG4gIGxldCBsZWdlbmQ6IFdlYkNoYXJ0TGVnZW5kID0ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuTGVnZW5kLFxuICAgIHZpc2libGUsXG4gICAgdGl0bGU6IGdldENoYXJ0VGV4dCgnJywgdHJ1ZSwgRGVmYXVsdExlZ2VuZFRpdGxlU2l6ZSwgRGVmYXVsdExlZ2VuZFRpdGxlQ29sb3IpLFxuICAgIGJvZHk6IGdldFRleHRTeW1ib2woJycsIERlZmF1bHRMZWdlbmRMYWJlbFNpemUsIERlZmF1bHRMZWdlbmRMYWJlbENvbG9yKSxcbiAgICBwb3NpdGlvbjogV2ViQ2hhcnRMZWdlbmRQb3NpdGlvbnMuUmlnaHRcbiAgfVxuICBpZiAoaXNQaWUpIHtcbiAgICBsZWdlbmQgPSB7XG4gICAgICAuLi5sZWdlbmQsXG4gICAgICBsYWJlbE1heFdpZHRoOiBEZWZhdWx0UGllTGVnZW5kTGFiZWxNYXhXaWR0aFxuICAgIH0gYXMgV2ViQ2hhcnRQaWVDaGFydExlZ2VuZFxuICB9XG4gIHJldHVybiBsZWdlbmRcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGBGb3JtYXRPcHRpb25zYCBvZiBhYy1zcGVjIGJ5IGEgZmllbGQgc2NoZW1hXG4gKiBAcGFyYW0gZmllbGRTY2hlbWFcbiAqIEBwYXJhbSBjaGFyYWN0ZXJMaW1pdFxuICovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGb3JtYXQgPSAoXG4gIGZpZWxkU2NoZW1hOiBJTUZpZWxkU2NoZW1hLFxuICBjaGFyYWN0ZXJMaW1pdDogbnVtYmVyID0gMTFcbik6IGFueSA9PiB7XG4gIGlmIChmaWVsZFNjaGVtYS50eXBlID09PSBKaW11RmllbGRUeXBlLkRhdGUpIHtcbiAgICBjb25zdCBpbnRsT3B0aW9ucyA9IHV0aWxzLmdldEludGxPcHRpb24oZmllbGRTY2hlbWEpID8/IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGludGxPcHRpb25zXG4gICAgfVxuICB9IGVsc2UgaWYgKGZpZWxkU2NoZW1hLnR5cGUgPT09IEppbXVGaWVsZFR5cGUuU3RyaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICBjaGFyYWN0ZXJMaW1pdFxuICAgIH1cbiAgfSBlbHNlIGlmIChmaWVsZFNjaGVtYS50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlcikge1xuICAgIGNvbnN0IGludGxPcHRpb25zID0gdXRpbHMuZ2V0SW50bE9wdGlvbihmaWVsZFNjaGVtYSkgPz8ge31cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBpbnRsT3B0aW9uc1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNTZXJpYWxTZXJpZXMgPSAoXG4gIHZhbHVlPzogc3RyaW5nIHwgV2ViQ2hhcnRTZXJpZXNbXSB8IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPlxuKTogYm9vbGVhbiA9PiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh2YWx1ZSBhcyBzdHJpbmcpID09PSAnJykgcmV0dXJuXG4gIGNvbnN0IHNlcmllc1R5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgYXMgQ2hhcnRUeXBlcyA6IGdldFNlcmllc1R5cGUodmFsdWUgYXMgYW55KSBhcyBzdHJpbmdcbiAgcmV0dXJuIHNlcmllc1R5cGUgPT09IFdlYkNoYXJ0VHlwZXMuQmFyU2VyaWVzIHx8IHNlcmllc1R5cGUgPT09IFdlYkNoYXJ0VHlwZXMuTGluZVNlcmllc1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBjaGFydCBpcyBhIFhZIGNoYXJ0LlxuICogQHBhcmFtIHNlcmllc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc1hZQ2hhcnQgPSAodmFsdWU6IHN0cmluZyB8IFdlYkNoYXJ0U2VyaWVzW10gfCBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4pOiBib29sZWFuID0+IHtcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgKHZhbHVlIGFzIHN0cmluZykgPT09ICcnKSByZXR1cm4gZmFsc2VcbiAgY29uc3Qgc2VyaWVzVHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IGdldFNlcmllc1R5cGUodmFsdWUgYXMgYW55KSBhcyBzdHJpbmdcbiAgcmV0dXJuIHNlcmllc1R5cGUgPT09IFdlYkNoYXJ0VHlwZXMuQmFyU2VyaWVzIHx8IHNlcmllc1R5cGUgPT09IFdlYkNoYXJ0VHlwZXMuTGluZVNlcmllcyB8fFxuICAgIHNlcmllc1R5cGUgPT09IFdlYkNoYXJ0VHlwZXMuU2NhdHRlclNlcmllcyB8fCBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkhpc3RvZ3JhbVNlcmllc1xufVxuIiwiaW1wb3J0IHsgQmFzZVZlcnNpb25NYW5hZ2VyLCB0eXBlIElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIEltbXV0YWJsZSwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJbW11dGFibGVPYmplY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBnZXRTZXJpZXNUeXBlLCBXZWJDaGFydFR5cGVzLCB0eXBlIFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXMsIHR5cGUgV2ViQ2hhcnRCYXJDaGFydFNlcmllcywgdHlwZSBXZWJDaGFydFBpZUNoYXJ0TGVnZW5kIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IENhdGVnb3J5VHlwZSwgdHlwZSBJV2ViQ2hhcnQsIHR5cGUgSU1Db25maWcsIHR5cGUgV2ViQ2hhcnRTZXJpZXMgfSBmcm9tICcuL2NvbmZpZydcbmltcG9ydCB7IEJ5RmllbGRTZXJpZXNYLCBCeUZpZWxkU2VyaWVzWSwgUGllU2xpY2VHcm91cGluZ1NsaWNlSWQgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IGNhcGl0YWxpemVTdHJpbmcgfSBmcm9tICcuL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IGdldENhdGVnb3J5VHlwZSB9IGZyb20gJy4vdXRpbHMvY29tbW9uL3NlcmlhbCdcbmltcG9ydCB7IERlZmF1bHRQaWVMZWdlbmRMYWJlbE1heFdpZHRoLCBnZXRGaWxsU3ltYm9sLCBpc1NlcmlhbFNlcmllcyB9IGZyb20gJy4vdXRpbHMvZGVmYXVsdCdcblxuLyoqXG4gKiBGdW5jdGlvbiBtZXJnaW5nIG11bHRpcGxlIGBvdXRTdGF0aXN0aWNzYCBwcm9wZXJ0aWVzLlxuICogQHBhcmFtIHVuaXF1ZVF1ZXJ5XG4gKiBAcGFyYW0gc2VyaWVzXG4gKi9cbmNvbnN0IG1lcmdlT3V0U3RhdGlzdGljcyA9ICh1bmlxdWVRdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4pID0+IHtcbiAgc2VyaWVzLnNsaWNlKDEpLmZvckVhY2goKHNlcmllKSA9PiB7XG4gICAgY29uc3Qgb3V0U3RhdGlzdGljcyA9ICh1bmlxdWVRdWVyeS5vdXRTdGF0aXN0aWNzID8/IFtdKS5jb25jYXQoc2VyaWUucXVlcnk/Lm91dFN0YXRpc3RpY3MgPz8gW10pXG4gICAgdW5pcXVlUXVlcnkgPSB1bmlxdWVRdWVyeS5zZXQoJ291dFN0YXRpc3RpY3MnLCBvdXRTdGF0aXN0aWNzKVxuICB9KVxuICByZXR1cm4gdW5pcXVlUXVlcnlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBidWlsZGluZyBhIHVuaXF1ZSBxdWVyeSBiYXNlZCBvbiB0aGUgY2hhcnQgc2VyaWVzIGNvbmZpZy5cbiAqIE5vdGU6IGFsbCBxdWVyaWVzIGhhdmUgdGhlIHNhbWUgb25TdGF0aXN0aWNzRmllbGQsIHNvIHRoZXkgY2FuIGJlIGNvbWJpbmVkIGludG8gb25lIHF1ZXJ5LlxuICovXG5leHBvcnQgY29uc3QgYnVpbGRVbmlxdWVRdWVyeSA9IChzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPik6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMgPT4ge1xuICBpZiAoIXNlcmllcz8ubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBsZXQgdW5pcXVlUXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMgPSBzZXJpZXNbMF0ucXVlcnlcbiAgaWYgKCF1bmlxdWVRdWVyeS5vdXRTdGF0aXN0aWNzPy5sZW5ndGgpIHJldHVybiBudWxsXG4gIGlmICh1bmlxdWVRdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M/Lmxlbmd0aCkge1xuICAgIHVuaXF1ZVF1ZXJ5ID0gbWVyZ2VPdXRTdGF0aXN0aWNzKHVuaXF1ZVF1ZXJ5LCBzZXJpZXMpXG4gIH1cbiAgcmV0dXJuIHVuaXF1ZVF1ZXJ5XG59XG5cbi8qKlxuICogVXNlIHRoZSBudW1lcmljIGZpZWxkIGFzIHRoZSBpZCBvZiB0aGUgc2VyaWUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRTZXJpZXNJZFdpdGhOdW1lcmljRmllbGQgPSAoc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4pOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4gPT4ge1xuICByZXR1cm4gc2VyaWVzPy5tYXAoKHNlcmllKSA9PiB7XG4gICAgaWYgKCFzZXJpZS5xdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M/Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlcmllXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG51bWVyaWNGaWVsZCA9IHNlcmllLnF1ZXJ5Py5vdXRTdGF0aXN0aWNzPy5bMF0/Lm9uU3RhdGlzdGljRmllbGRcbiAgICAgIGNvbnN0IGlkID0gc2VyaWUuaWRcbiAgICAgIGlmIChudW1lcmljRmllbGQgJiYgbnVtZXJpY0ZpZWxkICE9PSBpZCkge1xuICAgICAgICBzZXJpZSA9IEltbXV0YWJsZS5zZXQoc2VyaWUsICdpZCcsIG51bWVyaWNGaWVsZClcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXJpZVxuICAgIH1cbiAgfSkgYXMgdW5rbm93biBhcyBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz5cbn1cblxuZXhwb3J0IGNvbnN0IHVwZ3JhZGVDb2xvck1hdGNoID0gKG9sZENvbmZpZzogSU1Db25maWcpOiBJTUNvbmZpZyA9PiB7XG4gIGlmICghb2xkQ29uZmlnKSByZXR1cm4gb2xkQ29uZmlnXG4gIGxldCBzZXJpZXMgPSBvbGRDb25maWcud2ViQ2hhcnQ/LnNlcmllc1xuICBpZiAoIXNlcmllcz8ubGVuZ3RoKSByZXR1cm4gb2xkQ29uZmlnXG4gIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllcyBhcyBhbnkpXG4gIGlmIChzZXJpZXNUeXBlICE9PSAncGllU2VyaWVzJykgcmV0dXJuIG9sZENvbmZpZ1xuICBjb25zdCBjb2xvclR5cGUgPSBzZXJpZXNbMF0uY29sb3JUeXBlXG4gIGlmIChjb2xvclR5cGUgIT09ICdjb2xvck1hdGNoJykgcmV0dXJuIG9sZENvbmZpZ1xuICBsZXQgZGF0YVNvdXJjZSA9IG9sZENvbmZpZy53ZWJDaGFydC5kYXRhU291cmNlXG4gIGNvbnN0IGNvbG9yTWF0Y2ggPSBkYXRhU291cmNlPy5jb2xvck1hdGNoXG4gIGlmICghY29sb3JNYXRjaCkgcmV0dXJuIG9sZENvbmZpZ1xuXG4gIGNvbnN0IGNvbG9yTWF0Y2hlcyA9IGNvbG9yTWF0Y2guY29sb3JNYXRjaGVzXG4gIGNvbnN0IGRlZmF1bHRGaWxsU3ltYm9sID0gKHNlcmllc1swXSBhcyB1bmtub3duIGFzIFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXMpLmZpbGxTeW1ib2xcbiAgY29uc3Qgc2xpY2VzID0gT2JqZWN0LmVudHJpZXMoY29sb3JNYXRjaGVzKS5tYXAoKFtrZXksIG1hdGNoXSkgPT4ge1xuICAgIGNvbnN0IHNsaWNlSWQgPSBrZXlcbiAgICBjb25zdCBjb2xvciA9IG1hdGNoLl9maWxsQ29sb3JcbiAgICBjb25zdCBmaWxsU3ltYm9sID0gZ2V0RmlsbFN5bWJvbChjb2xvciwgZGVmYXVsdEZpbGxTeW1ib2wub3V0bGluZT8ud2lkdGggPz8gMCwgZGVmYXVsdEZpbGxTeW1ib2wub3V0bGluZT8uY29sb3IgYXMgYW55KVxuICAgIHJldHVybiB7IHNsaWNlSWQsIGZpbGxTeW1ib2wgfVxuICB9KVxuICBzZXJpZXMgPSBJbW11dGFibGUuc2V0SW4oc2VyaWVzLCBbJzAnLCAnc2xpY2VzJ10sIHNsaWNlcylcbiAgZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2Uud2l0aG91dCgnY29sb3JNYXRjaCcpXG4gIGNvbnN0IG5ld0NvbmZpZzogSU1Db25maWcgPSBvbGRDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICdzZXJpZXMnXSwgc2VyaWVzKVxuICAgIC5zZXRJbihbJ3dlYkNoYXJ0JywgJ2RhdGFTb3VyY2UnXSwgZGF0YVNvdXJjZSlcbiAgcmV0dXJuIG5ld0NvbmZpZ1xufVxuXG5leHBvcnQgY29uc3QgdXBncmFkZUJ5RmllbGQgPSAob2xkQ29uZmlnOiBJTUNvbmZpZyk6IElNQ29uZmlnID0+IHtcbiAgaWYgKCFvbGRDb25maWcpIHJldHVybiBvbGRDb25maWdcbiAgbGV0IHF1ZXJ5ID0gb2xkQ29uZmlnLndlYkNoYXJ0Py5kYXRhU291cmNlPy5xdWVyeVxuICBsZXQgc2VyaWVzID0gb2xkQ29uZmlnLndlYkNoYXJ0Py5zZXJpZXNcbiAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzIGFzIGFueSlcbiAgaWYgKHNlcmllc1R5cGUgIT09ICdwaWVTZXJpZXMnICYmICFpc1NlcmlhbFNlcmllcyhzZXJpZXNUeXBlKSkgcmV0dXJuIG9sZENvbmZpZ1xuICBjb25zdCBjYXRlZ29yeVR5cGUgPSBnZXRDYXRlZ29yeVR5cGUocXVlcnkpXG4gIGlmIChjYXRlZ29yeVR5cGUgIT09IENhdGVnb3J5VHlwZS5CeUZpZWxkKSByZXR1cm4gb2xkQ29uZmlnXG4gIGNvbnN0IHN0YXRpc3RpY1R5cGUgPSBxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5zdGF0aXN0aWNUeXBlID8/ICdzdW0nXG4gIHNlcmllcyA9IHNlcmllcy5tYXAoc2VyaWUgPT4ge1xuICAgIGxldCB4ID0gc2VyaWUueFxuICAgIGxldCB5ID0gKHNlcmllIGFzIGFueSkueVxuICAgIGxldCBpZCA9IChzZXJpZSBhcyBhbnkpLnlcbiAgICBpZiAoeCA9PT0gJ0ZpZWxkTmFtZScpIHtcbiAgICAgIHggPSBCeUZpZWxkU2VyaWVzWFxuICAgICAgc2VyaWUgPSBzZXJpZS5zZXQoJ3gnLCB4KVxuICAgIH1cbiAgICBpZiAoeSA9PT0gJ0ZpZWxkVmFsdWUnKSB7XG4gICAgICB5ID0gQnlGaWVsZFNlcmllc1lcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0KCd5JywgeSlcbiAgICB9XG4gICAgaWYgKGlkID09PSAnRmllbGRWYWx1ZScpIHtcbiAgICAgIGlkID0gQnlGaWVsZFNlcmllc1lcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0KCdpZCcsIGlkKVxuICAgIH1cbiAgICBpZiAoc2VyaWUubmFtZSA9PT0gJ1N1bSBvZiB2YWx1ZScpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtjYXBpdGFsaXplU3RyaW5nKHN0YXRpc3RpY1R5cGUpfSBvZiB2YWx1ZWBcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0KCduYW1lJywgbmFtZSlcbiAgICB9XG4gICAgcmV0dXJuIHNlcmllXG4gIH0pIGFzIGFueVxuICBjb25zdCBvcmRlckJ5RmllbGQgPSBxdWVyeS5vcmRlckJ5RmllbGRzPy5bMF1cbiAgaWYgKG9yZGVyQnlGaWVsZD8uaW5jbHVkZXMoJ0ZpZWxkTmFtZScpKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zZXQoJ29yZGVyQnlGaWVsZHMnLCBbb3JkZXJCeUZpZWxkLnJlcGxhY2UoJ0ZpZWxkTmFtZScsIEJ5RmllbGRTZXJpZXNYKV0pXG4gIH0gZWxzZSBpZiAob3JkZXJCeUZpZWxkPy5pbmNsdWRlcygnRmllbGRWYWx1ZScpKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zZXQoJ29yZGVyQnlGaWVsZHMnLCBbb3JkZXJCeUZpZWxkLnJlcGxhY2UoJ0ZpZWxkVmFsdWUnLCBCeUZpZWxkU2VyaWVzWSldKVxuICB9XG4gIGNvbnN0IG5ld0NvbmZpZzogSU1Db25maWcgPSBvbGRDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICdzZXJpZXMnXSwgc2VyaWVzKVxuICAgIC5zZXRJbihbJ3dlYkNoYXJ0JywgJ2RhdGFTb3VyY2UnLCAncXVlcnknXSwgcXVlcnkpXG4gIHJldHVybiBuZXdDb25maWdcbn1cblxuLyoqXG4gKiBGb3IgQmFyLCBMaW5lIGNoYXJ0cywgdGhpcyBmdW5jdGlvbiB3aWxsXG4gKiAtIE1vdmUgdGhlIG9wdGlvbmFsIGByb3RhdGVkYCBwcm9wZXJ0eSBmcm9tIHRoZSBzZXJpZXMgdG8gdGhlIGNoYXJ0IG9iamVjdCBpZiB0aGUgY2hhcnQgb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gdGhpcyBwcm9wZXJ0eS5cbiAqIC0gUmVtb3ZlIGFsbCBzZXJpZXMnIHJvdGF0ZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gd2ViQ2hhcnRUb1VwZGF0ZSBjb25maWcgdG8gdXBkYXRlXG4gKiBAcmV0dXJucyB0aGUgdXBkYXRlZCBjb25maWdcbiAqIFVzZWQgaW4gdmVyc2lvbiAxLjEyLjBcbiAqL1xuY29uc3QgbW92ZVNlcmllc1JvdGF0ZWRQcm9wVG9DaGFydCA9ICh3ZWJDaGFydFRvVXBkYXRlOiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0Pik6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+ID0+IHtcbiAgbGV0IHVwZGF0ZWRXZWJDaGFydCA9IHdlYkNoYXJ0VG9VcGRhdGVcblxuICBpZiAod2ViQ2hhcnRUb1VwZGF0ZT8uc2VyaWVzPy5sZW5ndGgpIHtcbiAgICBjb25zdCBzZXJpZXNUeXBlID0gZ2V0U2VyaWVzVHlwZSh3ZWJDaGFydFRvVXBkYXRlLnNlcmllcyBhcyBhbnkpXG4gICAgY29uc3QgaXNCYXJPckxpbmUgPSBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkJhclNlcmllcyB8fCBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkxpbmVTZXJpZXNcbiAgICBpZiAoaXNCYXJPckxpbmUgJiYgd2ViQ2hhcnRUb1VwZGF0ZS5yb3RhdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGlmIHRoZSBjaGFydCByb3RhdGVkIHByb3BlcnR5IGlzIG5vdCBzZXQsIHNldCBpdCB1c2luZyB0aGUgZmlyc3Qgc2VyaWVzJyByb3RhdGVkIHByb3BlcnR5IG9yIHVzZSB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgICAgY29uc3Qgcm90YXRlZCA9ICh3ZWJDaGFydFRvVXBkYXRlLnNlcmllc1swXSBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRCYXJDaGFydFNlcmllcz4pLnJvdGF0ZWQgPz8gZmFsc2VcbiAgICAgIHVwZGF0ZWRXZWJDaGFydCA9IHVwZGF0ZWRXZWJDaGFydC5zZXQoJ3JvdGF0ZWQnLCByb3RhdGVkKVxuICAgICAgY29uc3Qgc2VyaWVzID0gdXBkYXRlZFdlYkNoYXJ0LnNlcmllcy5tYXAoKHNlcmllOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNlcmllLnJvdGF0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNlcmllID0gc2VyaWUud2l0aG91dCgncm90YXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcmllIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNlcmllcz5cbiAgICAgIH0pXG4gICAgICB1cGRhdGVkV2ViQ2hhcnQgPSB1cGRhdGVkV2ViQ2hhcnQuc2V0KCdzZXJpZXMnLCBzZXJpZXMpXG4gICAgfVxuICB9XG4gIHJldHVybiB1cGRhdGVkV2ViQ2hhcnRcbn1cblxuY2xhc3MgVmVyc2lvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlVmVyc2lvbk1hbmFnZXIge1xuICB2ZXJzaW9ucyA9IFt7XG4gICAgdmVyc2lvbjogJzEuNi4wJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JlbmFtZSBgbXVsdGlwbGVCYXJUeXBlYCB0byBgc3RhY2tlZFR5cGVgJyxcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZzogSU1Db25maWcpID0+IHtcbiAgICAgIGlmICghb2xkQ29uZmlnKSByZXR1cm4gb2xkQ29uZmlnXG4gICAgICBsZXQgc2VyaWVzID0gb2xkQ29uZmlnLndlYkNoYXJ0Py5zZXJpZXNcbiAgICAgIGlmICghc2VyaWVzPy5sZW5ndGgpIHJldHVybiBvbGRDb25maWdcbiAgICAgIHNlcmllcyA9IHNlcmllcy5tYXAoKHNlcmllKSA9PiB7XG4gICAgICAgIHNlcmllID0gKHNlcmllIGFzIGFueSkuc2V0KCdzdGFja2VkVHlwZScsIChzZXJpZSBhcyBhbnkpLm11bHRpcGxlQmFyVHlwZSlcbiAgICAgICAgc2VyaWUgPSAoc2VyaWUgYXMgYW55KS53aXRob3V0KCdtdWx0aXBsZUJhclR5cGUnKVxuICAgICAgICByZXR1cm4gc2VyaWUgYXMgdW5rbm93biBhcyBXZWJDaGFydFNlcmllc1xuICAgICAgfSlcbiAgICAgIGNvbnN0IG5ld0NvbmZpZzogSU1Db25maWcgPSBvbGRDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICdzZXJpZXMnXSwgc2VyaWVzKVxuICAgICAgcmV0dXJuIG5ld0NvbmZpZ1xuICAgIH1cbiAgfSwge1xuICAgIHZlcnNpb246ICcxLjcuMCcsXG4gICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIGBudW1lcmljRmllbGRgIGFzIHRoZSBgaWRgIG9mIHNlcmllLCBidWlsZCB0aGUgYHF1ZXJ5YCBpbiB0aGUgYHNlcmllc2AgYXMgYSBkYXRhIHNvdXJjZScsXG4gICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoIW9sZENvbmZpZykgcmV0dXJuIG9sZENvbmZpZ1xuICAgICAgbGV0IHNlcmllcyA9IG9sZENvbmZpZy53ZWJDaGFydD8uc2VyaWVzXG4gICAgICBpZiAoIXNlcmllcz8ubGVuZ3RoKSByZXR1cm4gb2xkQ29uZmlnXG4gICAgICBzZXJpZXMgPSBzZXRTZXJpZXNJZFdpdGhOdW1lcmljRmllbGQoc2VyaWVzKVxuICAgICAgY29uc3QgcXVlcnkgPSBidWlsZFVuaXF1ZVF1ZXJ5KHNlcmllcylcbiAgICAgIHNlcmllcyA9IHNlcmllcy5tYXAoc2VyaWUgPT4gSW1tdXRhYmxlLndpdGhvdXQoc2VyaWUsICdxdWVyeScpKSBhcyB1bmtub3duIGFzIEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPlxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IHsgcXVlcnkgfVxuICAgICAgY29uc3QgbmV3Q29uZmlnOiBJTUNvbmZpZyA9IG9sZENvbmZpZy5zZXRJbihbJ3dlYkNoYXJ0JywgJ3NlcmllcyddLCBzZXJpZXMpXG4gICAgICAgIC5zZXRJbihbJ3dlYkNoYXJ0JywgJ2RhdGFTb3VyY2UnXSwgZGF0YVNvdXJjZSlcbiAgICAgIHJldHVybiBuZXdDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS44LjAnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZzogSU1Db25maWcpID0+IHtcbiAgICAgIHJldHVybiBvbGRDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS45LjAnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZzogSU1Db25maWcpID0+IHtcbiAgICAgIHJldHVybiBvbGRDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS4xMC4wJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VwZ3JhZGUgYGNvbmZpZy5jb2xvck1hdGNoYCB0byBgc2VyaWVzWzBdLnNsaWNlc2AgZm9yIHBpZSBjaGFydC4nLFxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnOiBJTUNvbmZpZykgPT4ge1xuICAgICAgbGV0IG5ld0NvbmZpZyA9IHVwZ3JhZGVDb2xvck1hdGNoKG9sZENvbmZpZylcbiAgICAgIG5ld0NvbmZpZyA9IHVwZ3JhZGVCeUZpZWxkKG5ld0NvbmZpZylcbiAgICAgIHJldHVybiBuZXdDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS4xMS4wJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdXBncmFkZXI6IChvbGRDb25maWcpID0+IHtcbiAgICAgIHJldHVybiBvbGRDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS4xMi4wJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VwZ3JhZGUgd2ViLWNoYXJ0IHZlcnNpb24gYW5kIHVwZ3JhZGUgdGhlIG51bWVyaWMgdHlwZSBpbiB0aGUgc2xpY2UgaWQgb2YgdGhlIHBpZSBjaGFydCB0byBhIHN0cmluZyB0eXBlLCBmZWF0dXJlIGxheWVyIGRhdGEgc291cmNlIG9ubHkgc3VwcG9ydHMgdGhlIGxhdHRlci4nLFxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnOiBJTUNvbmZpZykgPT4ge1xuICAgICAgaWYgKCFvbGRDb25maWcgfHwgIW9sZENvbmZpZy53ZWJDaGFydCkgcmV0dXJuIG9sZENvbmZpZ1xuICAgICAgLy91cGdyYWRlIHRvIHdlYi1jaGFydCB2ZXJzaW9uIDYuMi4xXG4gICAgICBsZXQgbmV3Q29uZmlnOiBJTUNvbmZpZyA9IG9sZENvbmZpZy5zZXRJbihbJ3dlYkNoYXJ0JywgJ3ZlcnNpb24nXSwgJzYuMi4xJylcbiAgICAgIC8vbW92ZSBzZXJpZXMgcm90YXRlZCB0byB3ZWItY2hhcnQgbGV2ZWxcbiAgICAgIGNvbnN0IHdlYkNoYXJ0ID0gbW92ZVNlcmllc1JvdGF0ZWRQcm9wVG9DaGFydChuZXdDb25maWcud2ViQ2hhcnQpXG4gICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0KCd3ZWJDaGFydCcsIHdlYkNoYXJ0KVxuXG4gICAgICBjb25zdCBzZXJpZXMgPSBuZXdDb25maWcud2ViQ2hhcnQ/LnNlcmllc1xuICAgICAgaWYgKCFzZXJpZXM/Lmxlbmd0aCkgcmV0dXJuIG5ld0NvbmZpZ1xuICAgICAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzIGFzIGFueSlcbiAgICAgIGlmIChzZXJpZXNUeXBlICE9PSAncGllU2VyaWVzJykgcmV0dXJuIG5ld0NvbmZpZ1xuXG4gICAgICAvL3VwZ3JhZGUgc2xpY2VHcm91cGluZyBvZiBwaWUgc2VyaWVzXG4gICAgICBsZXQgc2VyaWUgPSBzZXJpZXNbMF0gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXM+XG4gICAgICBsZXQgc2xpY2VHcm91cGluZyA9IHNlcmllLnNsaWNlR3JvdXBpbmdcbiAgICAgIHNsaWNlR3JvdXBpbmcgPSBzbGljZUdyb3VwaW5nLnNldCgnc2xpY2VJZCcsIFBpZVNsaWNlR3JvdXBpbmdTbGljZUlkKS5zZXQoJ2xhYmVsJywgKHNsaWNlR3JvdXBpbmcgYXMgYW55KS5ncm91cE5hbWUpXG4gICAgICBzbGljZUdyb3VwaW5nID0gKHNsaWNlR3JvdXBpbmcgYXMgYW55KS53aXRob3V0KCdncm91cE5hbWUnKVxuICAgICAgc2VyaWUgPSBzZXJpZS5zZXQoJ3NsaWNlR3JvdXBpbmcnLCBzbGljZUdyb3VwaW5nKVxuXG4gICAgICAvL3VwZ3JhZGUgdGhlIHNsaWNlSWQgb2YgcGllIHNsaWNlcyBmcm9tIG51bWVyaWMgdHlwZSB0byBzdHJpbmcgdHlwZVxuICAgICAgY29uc3QgcGllU2xpY2VzID0gc2VyaWUuc2xpY2VzXG4gICAgICBpZiAocGllU2xpY2VzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc2xpY2VzID0gcGllU2xpY2VzLm1hcCgoc2xpY2UpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHNsaWNlLnNsaWNlSWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzbGljZSA9IHNsaWNlLnNldCgnc2xpY2VJZCcsIHNsaWNlLnNsaWNlSWQgKyAnJylcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNsaWNlXG4gICAgICAgIH0pXG4gICAgICAgIHNlcmllID0gc2VyaWUuc2V0KCdzbGljZXMnLCBzbGljZXMpXG4gICAgICB9XG5cbiAgICAgIC8vIGBzZXJpZXMuc2xpY2VzYCBjYW4gY3VzdG9taXplIHRoZSBjb2xvciBvZiBlYWNoIHBpZSBzbGljZVxuICAgICAgLy8gaXQgaXMgbm90IG5lY2Vzc2FyeSB0byBzZXQgdGhlIGBjb2xvclR5cGVgIHRvIGBjb2xvck1hdGNoYCwgaXQgd2lsbCByZWFkIHRoZSBsYXllciByZW5kZXJpbmcgY29sb3IgYW5kIGNhdXNlIHVuZXhwZWN0ZWQgY2hhbmdlc1xuICAgICAgaWYgKHNlcmllLmNvbG9yVHlwZSA9PT0gJ2NvbG9yTWF0Y2gnKSB7XG4gICAgICAgIHNlcmllID0gc2VyaWUuc2V0KCdjb2xvclR5cGUnLCAnc2luZ2xlQ29sb3InKVxuICAgICAgfVxuXG4gICAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICdzZXJpZXMnLCAnMCddLCBzZXJpZSlcbiAgICAgIHJldHVybiBuZXdDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS4xMy4wJyxcbiAgICBkZXNjcmlwdGlvbjogJ1VwZ3JhZGUgc2VyaWVzIGRhdGFUb29sdGlwVmlzaWJsZSB0byB0cnVlLCBzb3J0TGFiZWxzQnkgdG8gb3JpZ2luYWxWYWx1ZSwgc3VwcG9ydCBtYXgtbGVuZ3RoIGZvciB0aGUgbGFiZWwgb2YgcGllIGxlZ2VuZCcsXG4gICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoIW9sZENvbmZpZykgcmV0dXJuIG9sZENvbmZpZ1xuICAgICAgbGV0IHNlcmllcyA9IG9sZENvbmZpZy53ZWJDaGFydD8uc2VyaWVzXG4gICAgICBpZiAoIXNlcmllcz8ubGVuZ3RoKSByZXR1cm4gb2xkQ29uZmlnXG4gICAgICBzZXJpZXMgPSBzZXJpZXMubWFwKChzZXJpZSkgPT4ge1xuICAgICAgICBzZXJpZSA9IHNlcmllLnNldCgnZGF0YVRvb2x0aXBWaXNpYmxlJywgdHJ1ZSlcbiAgICAgICAgcmV0dXJuIHNlcmllIGFzIHVua25vd24gYXMgV2ViQ2hhcnRTZXJpZXNcbiAgICAgIH0pXG4gICAgICBsZXQgbmV3Q29uZmlnOiBJTUNvbmZpZyA9IG9sZENvbmZpZy5zZXRJbihbJ3dlYkNoYXJ0JywgJ3NlcmllcyddLCBzZXJpZXMpLnNldEluKFsnd2ViQ2hhcnQnLCAnc29ydExhYmVsc0J5J10sICdvcmlnaW5hbFZhbHVlJylcbiAgICAgIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllcyBhcyBhbnkpXG4gICAgICBpZiAoc2VyaWVzVHlwZSA9PT0gJ3BpZVNlcmllcycgJiYgbmV3Q29uZmlnLndlYkNoYXJ0LmxlZ2VuZCkge1xuICAgICAgICBsZXQgbGVnZW5kOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRQaWVDaGFydExlZ2VuZD4gPSBuZXdDb25maWcud2ViQ2hhcnQubGVnZW5kXG4gICAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5zZXQoJ2xhYmVsTWF4V2lkdGgnLCBEZWZhdWx0UGllTGVnZW5kTGFiZWxNYXhXaWR0aClcbiAgICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnd2ViQ2hhcnQnLCAnbGVnZW5kJ10sIGxlZ2VuZClcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdDb25maWdcbiAgICB9XG4gIH1dXG59XG5cbmV4cG9ydCBjb25zdCB2ZXJzaW9uTWFuYWdlciA9IG5ldyBWZXJzaW9uTWFuYWdlcigpXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3RyYXNoLWNoZWNrLnN2ZydcblxuZXhwb3J0IGNvbnN0IFRyYXNoQ2hlY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3pvb20taW4uc3ZnJ1xuXG5leHBvcnQgY29uc3QgWm9vbUluT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2dpcy9zZWxlY3QtcmVjdGFuZ2xlLnN2ZydcblxuZXhwb3J0IGNvbnN0IFNlbGVjdFJlY3RhbmdsZU91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfY2hhcnRfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxuICogKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8gQHRzLWlnbm9yZVxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyB2ZXJzaW9uTWFuYWdlciB9IGZyb20gJy4uL3ZlcnNpb24tbWFuYWdlcidcbmltcG9ydCB7IENoYXJ0UnVudGltZVN0YXRlUHJvdmlkZXIgfSBmcm9tICcuL3N0YXRlJ1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnXG5cbmNvbnN0IFdpZGdldCA9IChwcm9wczogQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBvdXRwdXREYXRhU291cmNlcywgdXNlRGF0YVNvdXJjZXMsIGNvbmZpZywgaWQsIGVuYWJsZURhdGFBY3Rpb24sIG9uSW5pdERyYWdIYW5kbGVyIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHdlYkNoYXJ0ID0gY29uZmlnPy53ZWJDaGFydFxuICBjb25zdCB0b29scyA9IGNvbmZpZz8udG9vbHNcbiAgY29uc3QgZGVmYXVsdFRlbXBsYXRlVHlwZSA9IGNvbmZpZz8uX3RlbXBsYXRlVHlwZVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0IHdpZGdldC1jaGFydCc+XG4gICAgICA8Q2hhcnRSdW50aW1lU3RhdGVQcm92aWRlcj5cbiAgICAgICAgPENoYXJ0XG4gICAgICAgICAgd2lkZ2V0SWQ9e2lkfVxuICAgICAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgICAgICB3ZWJDaGFydD17d2ViQ2hhcnR9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgICBlbmFibGVEYXRhQWN0aW9uPXtlbmFibGVEYXRhQWN0aW9ufVxuICAgICAgICAgIG9uSW5pdERyYWdIYW5kbGVyPXtvbkluaXREcmFnSGFuZGxlcn1cbiAgICAgICAgICBkZWZhdWx0VGVtcGxhdGVUeXBlPXtkZWZhdWx0VGVtcGxhdGVUeXBlfVxuICAgICAgICAgIG91dHB1dERhdGFTb3VyY2VJZD17b3V0cHV0RGF0YVNvdXJjZXM/LlswXX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ2hhcnRSdW50aW1lU3RhdGVQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5XaWRnZXQudmVyc2lvbk1hbmFnZXIgPSB2ZXJzaW9uTWFuYWdlclxuXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=