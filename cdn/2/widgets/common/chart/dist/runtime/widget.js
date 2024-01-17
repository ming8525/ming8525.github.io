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
        const layer = view.map.layers.toArray()[0];
        chartRef.current.config = _config_json__WEBPACK_IMPORTED_MODULE_2__.webChart;
        chartRef.current.layer = layer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vY2hhcnQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlTyxNQUFNLFlBQVksR0FBRztJQUMxQixTQUFTLEVBQUUsWUFBWTtDQUN4QjtBQTJCRCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsbUNBQW1CO0lBQ25CLG1DQUFtQjtBQUNyQixDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzZFO0FBRXZFLE1BQU0sY0FBYyxHQUFHLE1BQU07QUFDN0IsTUFBTSxtQkFBbUIsR0FBRyxNQUFNO0FBQ2xDLE1BQU0sY0FBYyxHQUFHLE9BQU87QUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxPQUFPO0FBQ25DLE1BQU0sYUFBYSxHQUFHLEVBQUU7QUFDeEIsTUFBTSxhQUFhLEdBQUcsY0FBYztBQUNwQyxNQUFNLHNCQUFzQixHQUFHLFVBQVU7QUFDekMsTUFBTSwyQkFBMkIsR0FBRyxXQUFXO0FBQy9DLE1BQU0sc0JBQXNCLEdBQUcsVUFBVTtBQUN6QyxNQUFNLDJCQUEyQixHQUFHLFdBQVc7QUFDL0MsTUFBTSxtQkFBbUIsR0FBRyxPQUFPO0FBQ25DLE1BQU0sd0JBQXdCLEdBQUcsT0FBTztBQUN4QyxNQUFNLHVCQUF1QixH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ZSxNQUFNO0FBRWIsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvYXJlYS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL2Jhci5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL2NvbHVtbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL2RvbnV0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvaGlzdG9ncmFtLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvbGluZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL3BpZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL3NjYXR0ZXIuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9zbW9vdGgtYXJlYS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL3Ntb290aC1saW5lLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvc3RhY2tlZC1iYXIuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2Fzc2V0cy9pY29ucy9zdGFja2VkLWNvbHVtbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvYXNzZXRzL2ljb25zL3N0YWNrZWQxMDAtYmFyLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9hc3NldHMvaWNvbnMvc3RhY2tlZDEwMC1jb2x1bW4uc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdHJhc2gtY2hlY2suc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3Ivem9vbS1pbi5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2dpcy9zZWxlY3QtcmVjdGFuZ2xlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvY29tcG9uZW50cy9jb21wb25lbnRzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2NvbXBvbmVudHMvcGxhY2Vob2xkZXIudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2NvbXBvbmVudHMvcm9vdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvY29tcG9uZW50cy91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS9mZWF0dXJlLWxheWVyLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvZGF0YS1zb3VyY2UvaW5saW5lLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS9vcmlnaW5hbC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvZGF0YS1zb3VyY2Uvb3V0cHV0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS91c2UtZmV0Y2gtcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9kYXRhLXNvdXJjZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9mZWF0dXJlLWxheWVyLWNoYXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9mZWF0dXJlLWxheWVyLWNoYXJ0L3dpdGgtZmVhdHVyZS1sYXllci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L2NvbnZlcnQtdXRpbHMvY29tbW9uLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L2NvbnZlcnQtdXRpbHMvaGlzdG9ncmFtLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L2NvbnZlcnQtdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvY29udmVydC11dGlscy9waWUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvaW5saW5lLWRhdGEtY2hhcnQvY29udmVydC11dGlscy9zY2F0dGVyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L2NvbnZlcnQtdXRpbHMvc2VyaWFsLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L2lubGluZS1kYXRhLWNoYXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9pbmxpbmUtZGF0YS1jaGFydC91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC9pbmxpbmUtZGF0YS1jaGFydC93aXRoLWlubGluZS1kYXRhLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC90b29scy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvY2hhcnQvdG9vbHMvcmFuZ2UtY3Vyc29yLW1vZGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L3Rvb2xzL3NlbGVjdGlvbi16b29tLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9jaGFydC9zcmMvcnVudGltZS9jaGFydC91dGlscy9ub3JtYWxpemUtc2VyaWVzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL2NoYXJ0L3V0aWxzL3VzZS1zZWxlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvc3RhdGUvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2NoYXJ0L3NyYy91dGlscy9jb21tb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3V0aWxzL2NvbW1vbi9zY2hlbWEudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3V0aWxzL2NvbW1vbi9zZXJpYWwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3V0aWxzL2RlZmF1bHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3ZlcnNpb24tbWFuYWdlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvdHJhc2gtY2hlY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci96b29tLWluLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9naXMvc2VsZWN0LXJlY3RhbmdsZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2NoYXJ0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vY2hhcnQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBkPVxcXCJNMjQgODN2LThoMTZ2OHpNMjQgMTQ0di04aDE2djh6TTI0IDIwNHYtOGgxNnY4ek0yNCAyNjZ2LThoMTZ2OHpNMjQgMzI3di04aDE2djh6TTEzNSAzNzZ2LThoMjR2OHpNODUgMzc2di04aDI0djh6TTMzIDM3NnYtOGgyNHY4ek0xODUgMzc2di04aDI0djh6TTIzNyAzNzZ2LThoMjR2OHpNMjg5IDM3NnYtOGgyNHY4ek0zNDEgMzc2di04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1NC41MDF2Ljk5OWgtMjQuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTE0Ny4xNjcgMjM2LTUxLjA4My0yOC41TDQ1IDI0OS41djQ0LjMyN2w1MC43MzYtNDYuNCA1MC45OTMgMjguOTQ4IDUwLjI0OC01MS4xNjkgNTEuODcxIDM3Ljg0MyA1MC41My02NC45MzJMMzUxIDIzMy4wMTZWMTc5bC01MC41ODMtMjguNS01MS4wODMgNjItNTIuMDg1LTU5ek00NSAzNDIuOTc0di00Mi4zNjZsNTEuNDMtNDcuMDM1IDUxLjE3NSAyOS4wNTIgNDkuOTE1LTUwLjgzIDUyLjMgMzguMTU2IDUwLjYzNS02NS4wNjhMMzUxIDIzOS4wNTV2NDIuNDQzbC01MS44NDItMTkuOTctNTAuMzgyIDU5LjI2NS01MS41NTItMjkuNjk0LTUwLjUyIDMwLjI2My01MS4xMS0xMC4wMDV6bTAgNS44OTl2NS42MjdoMzA2di02Ny42NDNsLTUwLjMyNS0xOS4zODUtNTAuNzgzIDU5LjczNS01Mi42MTgtMzAuMzA2LTQ5LjY0NCAyOS43MzctNTEuMDU3LTkuOTk1elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMzI2IDU4djEySDQ1VjU4ek0yNTguNDczIDczdjEySDQ1Vjczek0yMDQuMDE1IDg4djEySDQ1Vjg4ek0xNTkgMTE5djEySDQ1di0xMnpNMTMxLjYwNSAxMzR2MTJINDV2LTEyek0xMDkuNTEyIDE0OXYxMkg0NXYtMTJ6TTE5NSAxODB2MTJINDV2LTEyek0xNTguOTUzIDE5NXYxMkg0NXYtMTJ6TTEyOS44ODQgMjEwdjEySDQ1di0xMnpNMjQ1IDI0MXYxMkg0NXYtMTJ6TTE5Ni45MzggMjU2djEySDQ1di0xMnpNMTU4LjE3OCAyNzF2MTJINDV2LTEyek0xNzQgMzAydjEySDQ1di0xMnpNMTQzIDMxN3YxMkg0NXYtMTJ6TTExOCAzMzJ2MTJINDV2LTEyek0yNCA4M3YtOGgxNnY4ek0yNCAxNDR2LThoMTZ2OHpNMjQgMjA0di04aDE2djh6TTI0IDI2NnYtOGgxNnY4ek0yNCAzMjd2LThoMTZ2OHpNMTM1IDM3NnYtOGgyNHY4ek04NSAzNzZ2LThoMjR2OHpNMzMgMzc2di04aDI0djh6TTE4NSAzNzZ2LThoMjR2OHpNMjM3IDM3NnYtOGgyNHY4ek0yODkgMzc2di04aDI0djh6TTM0MSAzNzZ2LThoMjR2OHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zNzYgMzU0LjUwMXYuOTk5aC03NS41djRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtMjJoLjk5OHYzMjcuMDAxem0tMjQuNS45OTl2NGgtMXYtNHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDQwMFxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTI0IDEwN3YtOGgxNnY4ek0yNCA1NnYtOGgxNnY4ek0yNCAxNTh2LThoMTZ2OHpNMjQgMjA5di04aDE2djh6TTI0IDI2MXYtOGgxNnY4ek0yNCAzMTF2LThoMTZ2OHpNMjQgMzYydi04aDE2djh6TTEyOCAzNzZ2LThoMjR2OHpNNzIgMzc2di04aDI0djh6TTE4OSAzNzZ2LThoMjR2OHpNMjUwIDM3NnYtOGgyNHY4ek0zMTEgMzc2di04aDI0djh6TTU4IDc3aDEydjI4MUg1OHpNNzMgMTQ0LjUyN2gxMlYzNThINzN6TTg4IDE5OC45ODRoMTJWMzU4SDg4ek0xMTkgMjQ0aDEydjExNGgtMTJ6TTEzNCAyNzEuMzk1aDEyVjM1OGgtMTJ6TTE0OSAyOTMuNDg4aDEyVjM1OGgtMTJ6TTE4MCAyMDhoMTJ2MTUwaC0xMnpNMTk1IDI0NC4wNDZoMTJ2MTEzLjk1M2gtMTJ6TTIxMCAyNzMuMTE2aDEyVjM1OGgtMTJ6TTI0MSAxNThoMTJ2MjAwaC0xMnpNMjU2IDIwNi4wNjJoMTJWMzU4aC0xMnpNMjcxIDI0NC44MjJoMTJWMzU4aC0xMnpNMzAyIDIyOWgxMnYxMjloLTEyek0zMTcgMjYwaDEydjk4aC0xMnpNMzMyIDI4NWgxMnY3M2gtMTJ6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNDkgMjRoLTF2MjhoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDIydi0uOTk4SDQ5elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yMDAgMzUzLjgxYzQwLjQxNCAwIDc3LjE4OC0xNS41ODcgMTA0LjYzNy00MS4wNzdsLTQ1Ljg0OS00NS44NDhjLTE1LjY4MyAxMy43OTYtMzYuMjU4IDIyLjE2My01OC43ODggMjIuMTYzLTQ5LjE4IDAtODkuMDQ4LTM5Ljg2OC04OS4wNDgtODkuMDQ4IDAtNDYuNDUxIDM1LjU2Ny04NC41OTUgODAuOTUzLTg4LjY4NVY0Ni40QzExMC43MjEgNTAuNjEgNDYuMTkxIDExNy43NjkgNDYuMTkxIDIwMGMwIDg0Ljk0NyA2OC44NjIgMTUzLjgxIDE1My44MDkgMTUzLjgxbTE1My42LTE0NS43MTVjLTEuODQyIDM1LjUzMy0xNS43NDQgNjcuODc2LTM3LjY5IDkzLjAxNGwtNDUuOTc3LTQ1Ljk3N2MxMC40MDEtMTMuMTc2IDE3LjE1OS0yOS4zNjEgMTguNzUyLTQ3LjAzN3ptLjIwOS03Ljk1Ni4wMDEtLjEzOS0uMDAxLS4xMzl6bS0uMjA5LTguMjM0QzM0OS41MyAxMTMuNDAyIDI4Ni41OTggNTAuNDcxIDIwOC4wOTUgNDYuNHY2NC45MTVjNDIuNzIgMy44NSA3Ni43NCAzNy44NyA4MC41OSA4MC41OXptLTgwLjc0MyA3Ljk0NGMtLjA4MS00MC4xNjgtMzIuNjY5LTcyLjcwNi03Mi44NTctNzIuNzA2LTQwLjIzOCAwLTcyLjg1NyAzMi42MTktNzIuODU3IDcyLjg1N3MzMi42MTkgNzIuODU3IDcyLjg1NyA3Mi44NTdjNDAuMTg4IDAgNzIuNzc2LTMyLjUzOCA3Mi44NTctNzIuNzA2ek0yMDAgMzcwYzkzLjg4OCAwIDE3MC03Ni4xMTIgMTcwLTE3MFMyOTMuODg4IDMwIDIwMCAzMCAzMCAxMDYuMTEyIDMwIDIwMHM3Ni4xMTIgMTcwIDE3MCAxNzBcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDQwMFxcXCI+PGcgZmlsbD1cXFwiIzAwMFxcXCIgY2xpcC1wYXRoPVxcXCJ1cmwoI2EpXFxcIj48cGF0aCBkPVxcXCJNMjQgODN2LThoMTZ2OHpNMjQgMTQ0di04aDE2djh6TTI0IDIwNHYtOGgxNnY4ek0yNCAyNjZ2LThoMTZ2OHpNMjQgMzI3di04aDE2djh6TTEzNSAzNzZ2LThoMjR2OHpNODUgMzc2di04aDI0djh6TTMzIDM3NnYtOGgyNHY4ek0xODUgMzc2di04aDI0djh6TTIzNyAzNzZ2LThoMjR2OHpNMjg5IDM3NnYtOGgyNHY4ek0zNDEgMzc2di04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1NC4wMDFWMzU1aC0yNC41djRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTUwdjRoLTF2LTRoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNHYtNjBoLTR2LTFoNFY1MGgtNHYtMWg0VjI3aC45OTh2MzI3LjAwMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOTcgODhoMjh2MTQuNTE4Yy0xLjE4OS0xLjgyNC0yLjM3My0zLjI5Ny0zLjU5Ni00LjQ3QzIxNy45MjkgOTQuNzE5IDIxNC4zNTMgOTQgMjEwLjUgOTRjLTQuNDE2IDAtOC4zNzIuOTY4LTEyLjE3NyA0LjQ2My0uNDQ1LjQwOS0uODg2Ljg1LTEuMzIzIDEuMzI2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMTcuMjUyIDEwMi4zOGMyLjE1IDIuMDYgNC41NjkgNS45MTUgNy43NDggMTMuMjQxVjM1NWgtMjhWMTEwLjI0M2MxLjk3OC0zLjUyNSAzLjcyNC01LjgzOSA1LjM4Mi03LjM2MiAyLjQyMi0yLjIyNCA0Ljc4My0yLjg4MSA4LjExOC0yLjg4MSAyLjg5NyAwIDQuNzU4LjQ2OSA2Ljc1MiAyLjM4TTEzOSAxODVoMjMuNDY5Yy0yLjMxOSA2Ljg0Ni00LjgwMyAxNC4yMDQtNy40NzIgMjIuMTFsLTIuMzM5IDYuOTNjLTQuMjI1IDEyLjUxMi04LjgxOSAyMy45MTUtMTMuNjU4IDM0LjN6TTE1OC4zNDIgMjE1Ljk2Yy01Ljg0NSAxNy4zMS0xMi4zOTcgMzIuNTY0LTE5LjM0MiA0NS45ODVWMzU1aDI4VjE5MC4zMjlhMzExNjcuODQgMzExNjcuODQgMCAwIDAtNi40NzkgMTkuMTc2bC0uMDAxLjAwM3pNMjU0IDIwMC41MTljLTQuNzg0LTE0LjktOC44OS0yNy42MzUtMTIuNDYzLTM4LjUxOUgyMjZ2MTkzaDI4ek0yNDcuODUyIDE2MkE0NzA0LjUzIDQ3MDQuNTMgMCAwIDEgMjU0IDE4MC45MjlWMTYyek0yNTUgMjI5aDguNDk3YzQuNzcxIDEyLjQxMiAxMS40MDIgMjYuNTE1IDE5LjUwMyA0MC42NTFWMzU1aC0yOHpNMjY5LjkzNyAyMjljMy40NzYgOC43ODQgNy44NzggMTguMzg4IDEzLjA2MyAyOC4yMDhWMjI5ek0yODQgMjc5aDQuNTc2YTI4NC40NyAyODQuNDcgMCAwIDAgMTEuOTM3IDE3Ljc0NkEyMzcuNjQyIDIzNy42NDIgMCAwIDAgMzEyIDMxMS4yOVYzNTVoLTI4ek0zMDUuMzU5IDI5My4yMDhhMjQxLjk5MSAyNDEuOTkxIDAgMCAwIDYuNjQxIDguNjgzVjI3OWgtMTYuMzM1YTI3NC44MjQgMjc0LjgyNCAwIDAgMCA5LjY5NCAxNC4yMDhNMTM4IDMwOWgtMjh2NDZoMjh6TTEwOSAzMzhIODF2MTdoMjh6TTE5NiAyMTRoLTI4djE0MWgyOHpNMzEzIDM0M2gyOHYxMmgtMjh6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwibTE1OC4yMTQgMjA4LjUyMy4wMDYtLjAxOGMxNi4zMzEtNDguMzc0IDI1LjY2OC03Ni4wMzIgMzIuNzE5LTkxLjY3NSAzLjY4NS04LjE3NyA2LjcxOC0xMy4wMDMgOS43NTItMTUuNzkgMi45OTgtMi43NTMgNi4wMjQtMy41NCA5LjgwOS0zLjU0IDMuMjk1IDAgNS44NzEuNTczIDguNDgyIDMuMDc2IDIuNjU1IDIuNTQ0IDUuMzc0IDcuMTA5IDguODA5IDE1LjIxMSA2LjgyMSAxNi4wODQgMTYuMzU5IDQ1LjgyNSAzMy44OTggMTAwLjUxNWwuMDAxLjAwMi4zNDggMS4wODRjNi45NTMgMjEuNjgxIDIyLjQ3NiA1My4wNDUgNDIuNzA1IDgwLjQzMiAyMC4yMTUgMjcuMzY3IDQ1LjIxMiA1MC44NzYgNzEuMTQ4IDU2LjY2OGwuMjE4LS45NzZjLTI1LjU2NC01LjcwOC01MC4zNzUtMjguOTU3LTcwLjU2MS01Ni4yODYtMjAuMTcxLTI3LjMwNy0zNS42NDEtNTguNTc1LTQyLjU1OC04MC4xNDNsLS4zODUtMS4yYy0xNy41MDctNTQuNTg4LTI3LjA1NS04NC4zNi0zMy44OTMtMTAwLjQ4Ni0zLjQ0MS04LjExNS02LjIyNC0xMi44NDYtOS4wMzgtMTUuNTQzLTIuODU4LTIuNzQtNS43MTktMy4zNTQtOS4xNzQtMy4zNTQtMy45NjUgMC03LjI1Ny44MzgtMTAuNDg1IDMuODA0LTMuMTkyIDIuOTMyLTYuMjkzIDcuOTE4LTkuOTg4IDE2LjExNi03LjA3MSAxNS42ODgtMTYuNDIyIDQzLjM4Ni0zMi43MjYgOTEuNjg0bC0yLjI3NSA2LjczNmMtMzEuMjYxIDkyLjU4Mi04Ny43MjggMTMwLjIzMS0xMTAuMjAyIDEzOC42OTJsLjM1Mi45MzZjMjIuNzctOC41NzMgNzkuNDQ2LTQ2LjQ1OCAxMTAuNzk4LTEzOS4zMDh6XFxcIj48L3BhdGg+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD1cXFwiYVxcXCI+PHBhdGggZmlsbD1cXFwiI2ZmZlxcXCIgZD1cXFwiTTI0IDI3aDM1MnYzNDlIMjR6XFxcIj48L3BhdGg+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBkPVxcXCJNMjQgODN2LThoMTZ2OHpNMjQgMTQ0di04aDE2djh6TTI0IDIwNHYtOGgxNnY4ek0yNCAyNjZ2LThoMTZ2OHpNMjQgMzI3di04aDE2djh6TTEzNSAzNzZ2LThoMjR2OHpNODUgMzc2di04aDI0djh6TTMzIDM3NnYtOGgyNHY4ek0xODUgMzc2di04aDI0djh6TTIzNyAzNzZ2LThoMjR2OHpNMjg5IDM3NnYtOGgyNHY4ek0zNDEgMzc2di04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1NC41MDF2Ljk5OWgtMjQuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTI5OS44OCAyMzIuMzU4IDUwLjg2NiAyOC43MDctLjQ5Mi44Ny01MC4xMzQtMjguMjkzLTUxLjEwNyA2Mi4xMjktNTEuOTM4LTU4LjkzLTQ5Ljg5OCA4Mi4zMzEtNTEuMDQ2LTI4LjUyNi01MC43MzYgNjUuMTYxLS43OS0uNjE0IDUxLjI2NC02NS44MzkgNTAuOTU0IDI4LjQ3NCA1MC4xMDItODIuNjY5IDUyLjA2MiA1OS4wN3pcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjk2XFxcIiBjeT1cXFwiMjkwXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI0NVxcXCIgY3k9XFxcIjM1NVxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTQ3XFxcIiBjeT1cXFwiMzE4XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOTdcXFwiIGN5PVxcXCIyMzZcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjI0OVxcXCIgY3k9XFxcIjI5NVxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzAwXFxcIiBjeT1cXFwiMjM0XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzNTFcXFwiIGN5PVxcXCIyNjJcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTE5Ni44MjcgMTk0LjM5MSA1Mi4yMDYgMjEuMDgzIDUwLjk5OC0xMy41IDUwLjY1MyAyMC4wNjEtLjM2OC45My01MC4zNDctMTkuOTQtNTEuMDAyIDEzLjUwMS01MS43OTQtMjAuOTE3LTUwLjA4MyA2OC4xMTMtNTAuOTM3LTQxLjk0OC01MC43MTIgOTQuOTYxLS44ODItLjQ3MSA1MS4yODgtOTYuMDM4IDUxLjA2MyA0Mi4wNTJ6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI5NlxcXCIgY3k9XFxcIjIyMVxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNDVcXFwiIGN5PVxcXCIzMTZcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE0N1xcXCIgY3k9XFxcIjI2MlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTk3XFxcIiBjeT1cXFwiMTk1XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIyNDlcXFwiIGN5PVxcXCIyMTZcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjMwMFxcXCIgY3k9XFxcIjIwMlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzUxXFxcIiBjeT1cXFwiMjIzXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIm0zNTAuODEgMTE3Ljg5Mi01MC41ODEgNDAuMDY1LTUxLjMwNCAxMy41OC01MS43OTEtMzAuODc1LTUwLjA0NCA2OC4wNi01MC45ODMtNDEuOTg2LTUwLjY5MyA3NS4wNDQtLjgyOC0uNTYgNTEuMzA4LTc1Ljk1NSA1MS4wMTYgNDIuMDEzIDQ5Ljk1Ni02Ny45NCA1Mi4yMDkgMzEuMTI1IDUwLjY5Ni0xMy40MiA1MC40MTktMzkuOTM1elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOTZcXFwiIGN5PVxcXCIxNjZcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjQ1XFxcIiBjeT1cXFwiMjQxXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNDdcXFwiIGN5PVxcXCIyMDdcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE5N1xcXCIgY3k9XFxcIjE0MFxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjQ5XFxcIiBjeT1cXFwiMTcxXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzMDBcXFwiIGN5PVxcXCIxNTdcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjM1MVxcXCIgY3k9XFxcIjExOFxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIm0xOTEuOTk1IDIwMy4xODUgMTIwLjUwMSAxMjQuMzg4QzI4Mi41MjQgMzUzLjk4MSAyNDMuMTggMzcwIDIwMC4wOTUgMzcwIDEwNi4xNTQgMzcwIDMwIDI5My44NDYgMzAgMTk5LjkwNSAzMCAxMDguNjggMTAxLjgxNSAzNC4yMjggMTkxLjk5NSAzMHpNMzcwIDIwOC4wMDVjLTEuOTYxIDQxLjgyNy0xOS4wMjkgNzkuNzAzLTQ1Ljg3IDEwOC4yOTVMMjE5LjIxOSAyMDguMDA1ek0yMDguMTk0IDMwQzI5NS42OSAzNC4xMDIgMzY1Ljg5OCAxMDQuMzEgMzcwIDE5MS44MDZIMjA4LjE5NHpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDQwMFxcXCI+PHBhdGggZmlsbD1cXFwiIzUyNTI1MlxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1NC41MDF2Ljk5OWgtMjQuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXpNMjQgNzV2OGgxNnYtOHptMCA2MXY4aDE2di04em0wIDY4di04aDE2djh6bTAgNTR2OGgxNnYtOHptMCA2OXYtOGgxNnY4em05IDQ5di04aDI0djh6bTUyLTh2OGgyNHYtOHptNTAgMHY4aDI0di04em01MCAwdjhoMjR2LTh6bTUyIDh2LThoMjR2OHptNTItOHY4aDI0di04em01MiA4di04aDI0djh6bTYtMjg3YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2bS00OCAxNGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNm0tMzEgMzhhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBtLTExMyA0NGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNm0zMCAyNWE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMG0tNTggNDBhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZtLTMwIDQyYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwbTM4IDRhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBtNDUtMzBhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBtNDEtMzZhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZtLTEzLTU4YTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2bTYxIDFhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBtMzgtMzBhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBtNDAtMTZhOCA4IDAgMSAxLTE2IDAgOCA4IDAgMCAxIDE2IDBcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAwIDQwMFxcXCI+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZD1cXFwiTTI0IDgzdi04aDE2djh6TTI0IDE0NHYtOGgxNnY4ek0yNCAyMDR2LThoMTZ2OHpNMjQgMjY2di04aDE2djh6TTI0IDMyN3YtOGgxNnY4ek0xMzUgMzc2di04aDI0djh6TTg1IDM3NnYtOGgyNHY4ek0zMyAzNzZ2LThoMjR2OHpNMTg1IDM3NnYtOGgyNHY4ek0yMzcgMzc2di04aDI0djh6TTI4OSAzNzZ2LThoMjR2OHpNMzQxIDM3NnYtOGgyNHY4elxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTM3NiAzNTQuNTAxdi45OTloLTI0LjV2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di0yMmguOTk4djMyNy4wMDF6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIm0xMTguNTQ1IDIyMC4wMzItMi4yMTMtMS4yMzVhMzQgMzQgMCAwIDAtMzguMTU5IDMuNDI4TDQ1IDI0OS41djMwLjIxNGMzLjk4NC00LjYxOCA4LjY1Ni05LjE5OCAxMy44MDUtMTIuOTkgMTAuNjM0LTcuODMgMjMuODQtMTIuNjQ2IDM3LjIzOC02LjQ5NiAyOS41NjQgMTMuNTcgNTMuOTgxIDUuNzYzIDY4LjI1MS03LjU1NiA3LjUwMy03LjAwMyAxOC41MjEtMTYuNzcxIDMxLjA2OC0yMi4zMzMgMTIuNjU5LTUuNjExIDI3LjE3MS03LjA0NiA0MS4xMTMgMy4xNDIgMTIuOTM0IDkuNDUyIDI3LjkyOSAxOC43NjYgNDIuMTEzIDIzLjM5MiAxNC4yMTEgNC42MzYgMjYuOTQ2IDQuMzgyIDM2LjIxMy00LjIwNyAxMC45MTktMTAuMTIgMjQuOTcxLTE4LjI5MyAzNi4xOTktMjMuNzQyVjE3OWwtMjUuNzY2LTE0LjUxN2MtMTQuMzU4LTguMDktMzIuNDUtNC43MTgtNDIuOTMgOC4wMDFsLTkuNzkxIDExLjg4M2MtMTIuMTYzIDE0Ljc2Mi0zNC42NDQgMTUuMTQ1LTQ3LjMwMy44MDYtMTMuODc0LTE1LjcxNi0zOS4wMDctMTMuNDc3LTQ5Ljg4NSA0LjQ0M2wtMTEuMTUxIDE4LjM2N2MtOS40OTIgMTUuNjM3LTI5LjY1NCAyMC45NjEtNDUuNjI5IDEyLjA0OU00NSAzMzAuODF2LTQzLjE2MWM0LjQ2LTUuODUyIDEwLjIzNS0xMi4wODYgMTYuNzctMTYuODk5IDkuOTc0LTcuMzQ0IDIxLjE4NS0xMS4wMjggMzIuMTg3LTUuOTc4IDMxLjQzNiAxNC40MyA1OC4wMTkgNi4yMzYgNzMuNzQ5LTguNDQ0IDcuNDk3LTYuOTk3IDE3Ljk3OS0xNi4yMjkgMjkuNjgyLTIxLjQxOCAxMS41OTEtNS4xMzggMjQuMDc5LTYuMjAzIDM2LjEzNyAyLjYwOCAxMy4wNjYgOS41NDkgMjguNTcxIDE5LjIzNSA0My41MTIgMjQuMTA5IDE0LjkxNCA0Ljg2NCAyOS45MjkgNS4xMTggNDEuMTYyLTUuMjk0IDkuNzkxLTkuMDc0IDIyLjMyMS0xNi41NzkgMzIuODAxLTIxLjgzNHY1OC4xODljLTIwLjk1NyAxLjAyNi02MC40NTEgNi41MzItOTQuNTkgMjMuMDYyLTExLjYyNyA1LjYzLTIwLjc4OCA3LjYxMi0yOC4yNTYgNy40MDctNy40My0uMjA0LTEzLjM3Ny0yLjU3Ny0xOC41OTYtNS45OTgtNS4wNzUtMy4zMjYtOS40MTctNy42MDQtMTMuODE1LTExLjkzNmwtLjU0NC0uNTM2Yy00LjQ5OS00LjQyOS05LjE0Mi04LjkzNC0xNC40OTQtMTEuODc3LTIuOTEzLTEuNjAzLTUuNzY0LTIuMTY1LTguNTc5LTEuODI2LTIuNzY1LjMzMy01LjMgMS41MTEtNy42NiAzLjA1OC0yLjM1NCAxLjU0Mi00LjY2MyAzLjUzOS02Ljk2NSA1LjY0NC0uODQxLjc2OS0xLjY3NSAxLjU0Ny0yLjUxNSAyLjMzbC0uMDAyLjAwMmMtMS41MTQgMS40MTItMy4wNSAyLjg0NS00LjY5NyA0LjI5Mi01LjA2MSA0LjQ0Ny0xMC42NjYgOC41NjUtMTcuNTc5IDEwLjctNi44NTQgMi4xMTYtMTUuMjEyIDIuMzQ3LTI1Ljg4Ni0xLjM3MS0xOC41MDctNi40NDYtMzQuMDIxLTMuNTU3LTQ1Ljg1IDIuNzU1QzU0LjUgMzIxLjg0OSA0OS4xNDkgMzI2LjMxNyA0NSAzMzAuODFtMCA3LjgwNFYzNTQuNWgzMDZ2LTU2LjgwN2MtMjAuNTE2IDEuMDMyLTU5LjE1OCA2LjQ1Ni05Mi40MSAyMi41NTctMTIuMTIzIDUuODctMjIuMDg3IDguMTM4LTMwLjU3MyA3LjkwNS04LjUyMi0uMjMzLTE1LjM1Ny0yLjk4NC0yMS4yLTYuODE0LTUuNTAyLTMuNjA2LTEwLjE2NS04LjIwMi0xNC40NzctMTIuNDUybC0uMTgxLS4xNzgtLjQ2OC0uNDYxYy00LjU3OC00LjUwOC04Ljc0OC04LjUwMy0xMy4zOTYtMTEuMDU5LTIuMDg3LTEuMTQ4LTMuODkzLTEuNDQ1LTUuNTcxLTEuMjQzLTEuNzMuMjA4LTMuNTI3Ljk3MS01LjUxOCAyLjI3Ni0xLjk5NyAxLjMwOS00LjA1OSAzLjA3NC02LjMzIDUuMTUxLS43NjguNzAyLTEuNTY4IDEuNDQ4LTIuMzk0IDIuMjE4bC0uMDAyLjAwMmMtMS41NTQgMS40NDktMy4xOTggMi45ODItNC44OTIgNC40Ny01LjI1MSA0LjYxNS0xMS40OSA5LjI3OC0xOS40MDUgMTEuNzIyLTcuOTc0IDIuNDYyLTE3LjQyOSAyLjYwNi0yOS4wMDUtMS40MjYtMTcuMDkzLTUuOTU0LTMxLjE2Mi0zLjI2LTQxLjg1IDIuNDQ1LTguMDk1IDQuMzE5LTE0LjI4MSAxMC4zODYtMTguMzI4IDE1LjgwOFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjQThBOEE4XFxcIiBkPVxcXCJNMjQgODN2LThoMTZ2OHpNMjQgMTQ0di04aDE2djh6TTI0IDIwNHYtOGgxNnY4ek0yNCAyNjZ2LThoMTZ2OHpNMjQgMzI3di04aDE2djh6TTEzNSAzNzZ2LThoMjR2OHpNODUgMzc2di04aDI0djh6TTMzIDM3NnYtOGgyNHY4ek0xODUgMzc2di04aDI0djh6TTIzNyAzNzZ2LThoMjR2OHpNMjg5IDM3NnYtOGgyNHY4ek0zNDEgMzc2di04aDI0djh6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzc2IDM1NC41MDF2Ljk5OWgtMjQuNXY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC01MHY0aC0xdi00aC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTYwaC00di0xaDR2LTIyaC45OTh2MzI3LjAwMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTMyNi43OTIgMjQ4LjY5NGMtMTUuNDI2LTguNzA2LTM0Ljg3Ni01LjA3OS00Ni4xMjggOC42bC04LjEzNyA5Ljg5MmMtMTIuMzMyIDE0Ljk5MS0zNS4xNTMgMTUuMzgtNDcuOTg3LjgxNy0xMy42MTktMTUuNDUyLTM4LjMxOS0xMy4yNTMtNDguOTk0IDQuMzYxbC0xMi4wOTEgMTkuOTVjLTkuMDgxIDE0Ljk4NC0yOC4zOTggMjAuMDg1LTQzLjY5MyAxMS41MzgtMTMuNTkzLTcuNTk3LTMwLjY5Ni00LjEzMy00MC4yNjIgOC4xNTRsLTM0LjEwNSA0My44MDEtLjc5LS42MTQgMzQuMTA1LTQzLjgwMmM5Ljg3LTEyLjY3NiAyNy41MTYtMTYuMjQ5IDQxLjU0LTguNDEyIDE0LjgyNSA4LjI4NCAzMy41NDggMy4zNCA0Mi4zNS0xMS4xODNsMTIuMDktMTkuOTVjMTEuMDI2LTE4LjE5MSAzNi41MzUtMjAuNDYyIDUwLjYtNC41MDQgMTIuNDI3IDE0LjEgMzQuNTI0IDEzLjcyNCA0Ni40NjQtLjc5MWw4LjEzNy05Ljg5MmMxMS41NjEtMTQuMDU1IDMxLjU0NC0xNy43OCA0Ny4zOTItOC44MzZsMjMuNDYzIDEzLjI0Mi0uNDkyLjg3elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PGNpcmNsZSBjeD1cXFwiOTZcXFwiIGN5PVxcXCIzMDBcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjQ1XFxcIiBjeT1cXFwiMzU1XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNDdcXFwiIGN5PVxcXCIzMDZcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE5N1xcXCIgY3k9XFxcIjI1OFxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMjQ5XFxcIiBjeT1cXFwiMjc4XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzMDBcXFwiIGN5PVxcXCIyNDVcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjM1MVxcXCIgY3k9XFxcIjI2MlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMjI5Ljk2OSAyMDguODU0Yy0xOS4yOTYtNy43OTMtNDEuNDIxLTEuNTE2LTUzLjc0OSAxNS4yNTFsLTEwLjY2MyAxNC41MDFjLTEwLjAzMSAxMy42NDItMjkuNDYgMTYuMDYyLTQyLjUzMiA1LjI5OC0xMy44OTYtMTEuNDQ0LTM0Ljc5LTcuMzAzLTQzLjI3IDguNTc3bC0zNC4zMTQgNjQuMjU0LS44ODItLjQ3MSAzNC4zMTQtNjQuMjU0YzguNzc4LTE2LjQzNyAzMC40MDQtMjAuNzI0IDQ0Ljc4OC04Ljg3OCAxMi42MjggMTAuNCAzMS40IDguMDYxIDQxLjA5MS01LjExOWwxMC42NjItMTQuNTAxYzEyLjU5OS0xNy4xMzQgMzUuMjA5LTIzLjU1IDU0LjkzLTE1LjU4NmwzLjI0MyAxLjMxYTUwLjA0NiA1MC4wNDYgMCAwIDAgMzEuNTQ5IDEuOTc1bDEyLjQ2Ny0zLjNhNzAuNSA3MC41IDAgMCAxIDQzLjk5OSAyLjYwNmwyOS4wODIgMTEuNTE4LS4zNjguOTMtMjkuMDgyLTExLjUxOGE2OS41MDcgNjkuNTA3IDAgMCAwLTQzLjM3Ni0yLjU2OWwtMTIuNDY2IDMuM2E1MS4wNDYgNTEuMDQ2IDAgMCAxLTMyLjE3OS0yLjAxNXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjxjaXJjbGUgY3g9XFxcIjk2XFxcIiBjeT1cXFwiMjM5XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCI0NVxcXCIgY3k9XFxcIjMxNlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTQ3XFxcIiBjeT1cXFwiMjUwXFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxOTdcXFwiIGN5PVxcXCIyMDhcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjI0OVxcXCIgY3k9XFxcIjIxM1xcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzAwXFxcIiBjeT1cXFwiMjA2XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIzNTFcXFwiIGN5PVxcXCIyMjNcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwibTM1MC44NjggMTE3LjgzOC0yMy43NTcgMjUuODkzYTc5LjQ5NyA3OS40OTcgMCAwIDEtNTEuNjMxIDI1LjQ0OGwtMTEuOTUxIDEuMDQ4YTQ1LjQ5IDQ1LjQ5IDAgMCAxLTI3LjI3NS02LjI0NGwtNi4wMDItMy41NzhjLTE4Ljc4NS0xMS4xOTgtNDMuMDAzLTYuMjk5LTU1Ljk1OSAxMS4zMmwtNy43MTMgMTAuNDljLTEwLjU4NyAxNC4zOTgtMzEuMDkyIDE2Ljk1Mi00NC44ODcgNS41OTEtMTMuNzIxLTExLjI5OS0zNC4xOS04LjMzMy00NC4xNCA2LjM5Nkw0NS40MTQgMjQxLjc4bC0uODI4LS41NiAzMi4xMzktNDcuNTc4YzEwLjI4LTE1LjIxOCAzMS40MjctMTguMjgyIDQ1LjYwMy02LjYwOCAxMy4zNTMgMTAuOTk2IDMzLjIgOC41MjQgNDMuNDQ2LTUuNDExbDcuNzE0LTEwLjQ5YzEzLjI2LTE4LjAzNSAzOC4wNDktMjMuMDQ5IDU3LjI3Ni0xMS41ODZsNi4wMDIgMy41NzhhNDQuNTA3IDQ0LjUwNyAwIDAgMCAyNi42NzYgNi4xMDZsMTEuOTUtMS4wNDhhNzguNTAyIDc4LjUwMiAwIDAgMCA1MC45ODItMjUuMTI4bDIzLjc1OC0yNS44OTN6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48Y2lyY2xlIGN4PVxcXCI5NlxcXCIgY3k9XFxcIjE4MVxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiNDVcXFwiIGN5PVxcXCIyNDFcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE0N1xcXCIgY3k9XFxcIjE5NFxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMTk3XFxcIiBjeT1cXFwiMTU1XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIyNDlcXFwiIGN5PVxcXCIxNjdcXFwiIHI9XFxcIjNcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjMwMFxcXCIgY3k9XFxcIjE2MlxcXCIgcj1cXFwiM1xcXCIgZmlsbD1cXFwiI0E4QThBOFxcXCI+PC9jaXJjbGU+PGNpcmNsZSBjeD1cXFwiMzUxXFxcIiBjeT1cXFwiMTE4XFxcIiByPVxcXCIzXFxcIiBmaWxsPVxcXCIjQThBOEE4XFxcIj48L2NpcmNsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDQwMCA0MDBcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGQ9XFxcIk0xMzIuNSA2N3YyMGgtODdWNjd6TTE5NS41IDY3djIwaC02MVY2N3pNMjQzLjUgNjd2MjBoLTQ2VjY3ek0xODguNSAxMzB2MjBoLTE0M3YtMjB6TTI1OS41IDEzMHYyMGgtNjl2LTIwek0zMjUuNSAxMzB2MjBoLTY0di0yMHpNMTU4LjUgMTkxdjIwaC0xMTN2LTIwek0yMzQuNSAxOTF2MjBoLTc0di0yMHpNMjgyLjUgMTkxdjIwaC00NnYtMjB6TTExNC41IDI1M3YyMGgtNjl2LTIwek0xNTguNSAyNTN2MjBoLTQydi0yMHpNMTk3LjUgMjUzdjIwaC0zN3YtMjB6TTEwMC41IDMxNXYyMGgtNTV2LTIwek0xNjMuNSAzMTV2MjBoLTYxdi0yMHpNMjI4LjUgMzE1djIwaC02M3YtMjB6TTI0IDc5di04aDE2djh6TTI0IDE0MHYtOGgxNnY4ek0yNCAyMDB2LThoMTZ2OHpNMjQgMjYydi04aDE2djh6TTI0IDMyM3YtOGgxNnY4ek0xMzUgMzcydi04aDI0djh6TTg1IDM3MnYtOGgyNHY4ek0zMyAzNzJ2LThoMjR2OHpNMTg1IDM3MnYtOGgyNHY4ek0yMzcgMzcydi04aDI0djh6TTI4OSAzNzJ2LThoMjR2OHpNMzQxIDM3MnYtOGgyNHY4elxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTM3NiAzNTAuNTAxdi45OTloLTc1LjV2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di0yMmguOTk4djMyNy4wMDF6bS0yNC41Ljk5OXY0aC0xdi00elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMjQgMTA3di04aDE2djh6TTI0IDU2di04aDE2djh6TTI0IDE1OHYtOGgxNnY4ek0yNCAyMDl2LThoMTZ2OHpNMjQgMjYxdi04aDE2djh6TTI0IDMxMXYtOGgxNnY4ek0yNCAzNjJ2LThoMTZ2OHpNMTI4IDM3NnYtOGgyNHY4ek02OCAzNzZ2LThoMjR2OHpNMTg5IDM3NnYtOGgyNHY4ek0yNTAgMzc2di04aDI0djh6TTMxMSAzNzZ2LThoMjR2OHpNNzAgMjcxaDIwdjg3SDcwek03MCAyMDhoMjB2NjFINzB6TTcwIDE2MGgyMHY0Nkg3MHpNMTMwIDIxNWgyMHYxNDNoLTIwek0xMzAgMTQ0aDIwdjY5aC0yMHpNMTMwIDc4aDIwdjY0aC0yMHpNMTkwIDI0NWgyMHYxMTNoLTIwek0xOTAgMTY5aDIwdjc0aC0yMHpNMTkwIDEyMWgyMHY0NmgtMjB6TTI1MiAyODloMjB2NjloLTIwek0yNTIgMjQ1aDIwdjQyaC0yMHpNMjUyIDIwNmgyMHYzN2gtMjB6TTMxMyAzMDNoMjB2NTVoLTIwek0zMTMgMjQwaDIwdjYxaC0yMHpNMzEzIDE3NWgyMHY2M2gtMjB6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNDkgMjRoLTF2MjhoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDIydi0uOTk4SDQ5elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMTMyIDY0djIwSDQ1VjY0ek0xOTUgNjR2MjBoLTYxVjY0ek0zNTAgNjR2MjBIMTk3VjY0ek0xODggMTI0djIwSDQ1di0yMHpNMjg2IDEyNHYyMGgtOTZ2LTIwek0zNTAgMTI0djIwaC02MnYtMjB6TTE1OCAxODR2MjBINDV2LTIwek0yMzQgMTg0djIwaC03NHYtMjB6TTM1MCAxODR2MjBIMjM2di0yMHpNMTE0IDI0NnYyMEg0NXYtMjB6TTI3MiAyNDZ2MjBIMTE2di0yMHpNMzUwIDI0NnYyMGgtNzZ2LTIwek0xMDAgMzA3djIwSDQ1di0yMHpNMTg0IDMwN3YyMGgtODJ2LTIwek0zNTAgMzA3djIwSDE4NnYtMjB6TTI0IDc5di04aDE2djh6TTI0IDE0MHYtOGgxNnY4ek0yNCAyMDB2LThoMTZ2OHpNMjQgMjYydi04aDE2djh6TTI0IDMyM3YtOGgxNnY4ek0xMzUgMzcydi04aDI0djh6TTg1IDM3MnYtOGgyNHY4ek0zMyAzNzJ2LThoMjR2OHpNMTg1IDM3MnYtOGgyNHY4ek0yMzcgMzcydi04aDI0djh6TTI4OSAzNzJ2LThoMjR2OHpNMzQxIDM3MnYtOGgyNHY4elxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTM3NiAzNTAuNTAxdi45OTloLTc1LjV2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNTB2NGgtMXYtNGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di02MGgtNHYtMWg0di0yMmguOTk4djMyNy4wMDF6bS0yNC41Ljk5OXY0aC0xdi00elxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MDAgNDAwXFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMjQgMTA3di04aDE2djh6TTI0IDU2di04aDE2djh6TTI0IDE1OHYtOGgxNnY4ek0yNCAyMDl2LThoMTZ2OHpNMjQgMjYxdi04aDE2djh6TTI0IDMxMXYtOGgxNnY4ek0yNCAzNjJ2LThoMTZ2OHpNMTI4IDM3NnYtOGgyNHY4ek02OCAzNzZ2LThoMjR2OHpNMTg5IDM3NnYtOGgyNHY4ek0yNTAgMzc2di04aDI0djh6TTMxMSAzNzZ2LThoMjR2OHpNNzAgMjcxaDIwdjg3SDcwek03MCAyMDhoMjB2NjFINzB6TTcwIDcyaDIwdjEzNEg3MHpNMTMwIDIxNWgyMHYxNDNoLTIwek0xMzAgMTE3aDIwdjk2aC0yMHpNMTMwIDcyaDIwdjQzaC0yMHpNMTkwIDI0NWgyMHYxMTNoLTIwek0xOTAgMTY5aDIwdjc0aC0yMHpNMTkwIDcyaDIwdjk1aC0yMHpNMjUyIDI4OWgyMHY2OWgtMjB6TTI1MiAxMzFoMjB2MTU2aC0yMHpNMjUyIDcyaDIwdjU3aC0yMHpNMzEzIDMwM2gyMHY1NWgtMjB6TTMxMyAyMTloMjB2ODJoLTIwek0zMTMgNzJoMjB2MTQ1aC0yMHpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk00OSAyNGgtMXYyOGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NTBoLTR2MWg0djUwaC00djFoNHY1MGgtNHYxaDR2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoNjB2NGgxdi00aDYwdjRoMXYtNGg2MHY0aDF2LTRoMjJ2LS45OThINDl6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJtMTEuMzY2IDcuODQxLS43MzItLjY4Mi0zLjEyNSAzLjM0OS0xLjYzNS0xLjg0LS43NDguNjY0IDIuMzY1IDIuNjZ6XFxcIj48L3BhdGg+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNC41IDNWMS4xNjdDNC41LjQ2OSA1LjIwNCAwIDYgMGg0Yy43OTYgMCAxLjUuNDcgMS41IDEuMTY3VjNoNGEuNS41IDAgMCAxIDAgMUgxNGwtLjkyOSAxMS4wNzdhMSAxIDAgMCAxLS45OTcuOTIzSDMuOTI2YTEgMSAwIDAgMS0uOTk3LS45MjNMMiA0SC41YS41LjUgMCAwIDEgMC0xek0zLjAwMyA0aDkuOTk0bC0uOTIzIDExSDMuOTI2ek0xMC41IDF2MmgtNVYxYzAtLjA0IDUtLjA0IDUgMFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDBtLTEuMjcgNC45MzZhNi41IDYuNSAwIDEgMSAuNzA3LS43MDdsNC4xMzYgNC4xMzdhLjUuNSAwIDEgMS0uNzA3LjcwN3pNNyA2aDN2MUg3djNINlY3SDNWNmgzVjNoMXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE2IDExVjBINXYzLjVoMVYxaDl2OUg4LjV2MXpNLjI1IDNsOC42NDIgNC45NjktMy40MjIuNzM4IDIuNzIzIDUuNDUtMi44ODYgMS42NjctMi43MjQtNS40NS0yLjM1MSAyLjU5NXptLjk5NiAxLjcyNi0uMDEgNS42NDQgMS41MjctMS42ODQgMi45MSA1Ljc3MSAxLjE1NC0uNjY3LTIuOTEtNS43NyAyLjIyMi0uNDh6XFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IHR5cGUgU3RhdGlzdGljRGVmaW5pdGlvbiwgdHlwZSBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgU3FsRXhwcmVzc2lvbiB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIHR5cGUgV2ViQ2hhcnQgYXMgX1dlYkNoYXJ0LFxuICB0eXBlIFdlYkNoYXJ0U2VyaWVzIGFzIF9XZWJDaGFydFNlcmllcyxcbiAgdHlwZSBXZWJDaGFydENvbmZpZ0ZpZWxkc1xufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG5leHBvcnQgdHlwZSBXZWJDaGFydFNlcmllcyA9IE9taXQ8X1dlYkNoYXJ0U2VyaWVzLCAncXVlcnknPiAmIHtcbiAgcXVlcnk/OiBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuICAvL2FkZCBmb3IgY3VzdG9tIGFkZGVkIHNwbGl0LWJ5IHNlcmllcywgd2lsbCBiZSByZW1vdmVkIGF0IHJ1bnRpbWVcbiAgZGVsZXRhYmxlPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBIaXN0b2dyYW1PdmVybGF5c1R5cGUgPSAnbWVhbicgfCAnbWVkaWFuJyB8ICdzdGFuZGFyZERldmlhdGlvbicgfCAnY29tcGFyaXNvbkRpc3RyaWJ1dGlvbidcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0ZpZWxkcyA9IHtcbiAgZmlsbENvbG9yOiAnX2ZpbGxDb2xvcidcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvck1hdGNoZXMge1xuICBbdmFsdWU6IHN0cmluZ106IHtcbiAgICBfZmlsbENvbG9yOiBhbnlcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0RGF0YVNvdXJjZSB7XG4gIG1hcGlkPzogc3RyaW5nXG4gIHF1ZXJ5OiBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuICAvKipcbiAgICogVXNlIHNlcmllcy5zbGljZXMgaW5zdGVhZCBmb3IgcGllIGNoYXJ0XG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBjb2xvck1hdGNoPzoge1xuICAgIGNvbmZpZ0ZpZWxkcz86IFdlYkNoYXJ0Q29uZmlnRmllbGRzXG4gICAgY29sb3JNYXRjaGVzOiBDb2xvck1hdGNoZXNcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElXZWJDaGFydCBleHRlbmRzIE9taXQ8X1dlYkNoYXJ0LCAnZGF0YVNvdXJjZScgfCAnYmFja2dyb3VuZCcgfCAnc2VyaWVzJz4ge1xuICBkYXRhU291cmNlOiBDaGFydERhdGFTb3VyY2VcbiAgYmFja2dyb3VuZD86IHN0cmluZ1xuICBzZXJpZXM6IFdlYkNoYXJ0U2VyaWVzW11cbn1cblxuZXhwb3J0IGVudW0gQ2F0ZWdvcnlUeXBlIHtcbiAgQnlHcm91cCA9ICdCWUdST1VQJyxcbiAgQnlGaWVsZCA9ICdCWUZJRUxEJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0VG9vbHMge1xuICBmaWx0ZXI/OiBTcWxFeHByZXNzaW9uXG4gIGN1cnNvckVuYWJsZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgQ2hhcnRUeXBlID0gJ2NvbHVtbicgfCAnYmFyJyB8ICdsaW5lJyB8ICdhcmVhJyB8ICdwaWUnIHwgJ3NjYXR0ZXInIHwgJ2hpc3RvZ3JhbSdcblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVUeXBlID0gJ2JhcicgfCAnc3RhY2tlZC1iYXInIHwgJ3N0YWNrZWQxMDAtYmFyJ1xufCAnY29sdW1uJyB8ICdzdGFja2VkLWNvbHVtbicgfCAnc3RhY2tlZDEwMC1jb2x1bW4nXG58ICdsaW5lJyB8ICdzbW9vdGgtbGluZSdcbnwgJ2FyZWEnIHwgJ3Ntb290aC1hcmVhJ1xufCAncGllJyB8ICdkb251dCdcbnwgJ3NjYXR0ZXInXG58ICdoaXN0b2dyYW0nXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLy9JdCBpcyBvbmx5IHVzZWQgd2hlbiBjb25maWd1cmluZyB0aGUgYXBwIHRlbXBsYXRlXG4gIF90ZW1wbGF0ZVR5cGU/OiBUZW1wbGF0ZVR5cGVcbiAgdGVtcGxhdGU6IHN0cmluZ1xuICB3ZWJDaGFydDogSVdlYkNoYXJ0XG4gIHRvb2xzPzogQ2hhcnRUb29sc1xufVxuXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XG5cbmV4cG9ydCB0eXBlIENoYXJ0U3RhdGlzdGljVHlwZSA9IE9taXQ8U3RhdGlzdGljRGVmaW5pdGlvblsnc3RhdGlzdGljVHlwZSddLCAnc3RkZGV2JyB8ICd2YXInIHwgJ3BlcmNlbnRpbGVfZGlzYyc+IHwgJ25vX2FnZ3JlZ2F0aW9uJ1xuIiwiaW1wb3J0IHsgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCwgTGltaXRCZWhhdmlvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5cbmV4cG9ydCBjb25zdCBCeUZpZWxkU2VyaWVzWCA9ICduYW1lJ1xuZXhwb3J0IGNvbnN0IEJ5RmllbGRTZXJpZXNYQWxpYXMgPSAnTmFtZSdcbmV4cG9ydCBjb25zdCBCeUZpZWxkU2VyaWVzWSA9ICd2YWx1ZSdcbmV4cG9ydCBjb25zdCBCeUZpZWxkU2VyaWVzWUFsaWFzID0gJ1ZhbHVlJ1xuZXhwb3J0IGNvbnN0IE1heENvbG9yQ291bnQgPSAyMFxuZXhwb3J0IGNvbnN0IE9iamVjdElkRmllbGQgPSAnX19vdXRwdXRpZF9fJ1xuZXhwb3J0IGNvbnN0IEhpc3RvZ3JhbU1pblZhbHVlRmllbGQgPSAnbWluVmFsdWUnXG5leHBvcnQgY29uc3QgSGlzdG9ncmFtTWluVmFsdWVGaWVsZEFsaWFzID0gJ01pbiB2YWx1ZSdcbmV4cG9ydCBjb25zdCBIaXN0b2dyYW1NYXhWYWx1ZUZpZWxkID0gJ21heFZhbHVlJ1xuZXhwb3J0IGNvbnN0IEhpc3RvZ3JhbU1heFZhbHVlRmllbGRBbGlhcyA9ICdNYXggdmFsdWUnXG5leHBvcnQgY29uc3QgSGlzdG9ncmFtQ291bnRGaWVsZCA9ICdjb3VudCdcbmV4cG9ydCBjb25zdCBIaXN0b2dyYW1Db3VudEZpZWxkQWxpYXMgPSAnQ291bnQnXG5leHBvcnQgY29uc3QgUGllU2xpY2VHcm91cGluZ1NsaWNlSWQgPSAnX19vdGhlci1zbGljZV9fJ1xuXG5leHBvcnQgY29uc3QgTWF4SW5pdGlhbFNwbGl0QnlTZXJpZXNDb3VudCA9IDIwXG5leHBvcnQgY29uc3QgU3BsaXRCeU90aGVyU2VyaWVzTmFtZSA9ICdVbmRlZmluZWQnXG5leHBvcnQgY29uc3QgU3BsaXRCeU90aGVyU2VyaWVzVmFsdWUgPSAnX19vdGhlci1zcGxpdC12YWx1ZV9fJ1xuXG5leHBvcnQgY29uc3QgQ2hhcnRMaW1pdHM6IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+ID0ge1xuICAvLyBjaGFydCdzIGJlaGF2aW9yIG9uY2UgdGhlIGxpbWl0IGlzIHJlYWNoZWRcbiAgYmVoYXZpb3JBZnRlckxpbWl0OiBMaW1pdEJlaGF2aW9yLlJlamVjdCxcbiAgLy8gbWF4aW11bSBudW1iZXIgb2Ygc2VyaWVzIGZvciBiYXIgY2hhcnRcbiAgbWF4QmFyQ2hhcnRTZXJpZXNDb3VudDogMTAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBiYXJzIGZvciBhIHVuaXF1ZSBzZXJpZXMgYmFyIGNoYXJ0XG4gIG1heEJhclVuaXF1ZVNlcmllc0NvdW50VG90YWw6IDEwMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBiYXJzIHBlciBzZXJpZXMgZm9yIGEgMiBzZXJpZXMgYmFyIGNoYXJ0XG4gIG1heEJhclR3b1Nlcmllc0NvdW50UGVyU2VyaWVzOiAxMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBiYXJzIGZvciBhIDIgc2VyaWVzIGJhciBjaGFydFxuICBtYXhCYXJUd29TZXJpZXNDb3VudFRvdGFsOiAyMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBiYXJzIHBlciBzZXJpZXMgZm9yIGEgMysgc2VyaWVzIGJhciBjaGFydFxuICBtYXhCYXJUaHJlZVBsdXNTZXJpZXNDb3VudFBlclNlcmllczogMTAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBiYXJzIGZvciBhIDMrIHNlcmllcyBiYXIgY2hhcnRcbiAgbWF4QmFyVGhyZWVQbHVzU2VyaWVzQ291bnRUb3RhbDogMjAwMCxcbiAgLy8gbWF4aW11bSBudW1iZXIgb2Ygc2VyaWVzIGZvciBsaW5lIGNoYXJ0XG4gIG1heExpbmVDaGFydFNlcmllc0NvdW50OiAxMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIG1hcmtlcyBmb3IgYSB1bmlxdWUgc2VyaWVzIGxpbmUgY2hhcnRcbiAgbWF4TGluZVVuaXF1ZVNlcmllc0NvdW50VG90YWw6IDEwMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBtYXJrZXMgcGVyIHNlcmllcyBmb3IgYSAyIHNlcmllcyBsaW5lIGNoYXJ0XG4gIG1heExpbmVUd29TZXJpZXNDb3VudFBlclNlcmllczogMTAwMCxcbiAgLy8gbWF4aW11bSBudW1iZXIgb2YgbWFya2VzIGZvciBhIDIgc2VyaWVzIGxpbmUgY2hhcnRcbiAgbWF4TGluZVR3b1Nlcmllc0NvdW50VG90YWw6IDIwMDAsXG4gIC8vIG1heGltdW0gbnVtYmVyIG9mIG1hcmtlcyBwZXIgc2VyaWVzIGZvciBhIDMrIHNlcmllcyBsaW5lIGNoYXJ0XG4gIG1heExpbmVUaHJlZVBsdXNTZXJpZXNDb3VudFBlclNlcmllczogMTAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBtYXJrZXMgZm9yIGEgMysgc2VyaWVzIGxpbmUgY2hhcnRcbiAgbWF4TGluZVRocmVlUGx1c1Nlcmllc0NvdW50VG90YWw6IDIwMDAsXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHBvaW50cyB0byBiZSByZW5kZXJlZCBpbiBhIHNjYXR0ZXIgcGxvdC5cbiAgICogSWYgdGhlIG51bWJlciBvZiBwb2ludHMgYXJlIG1vcmUsIHRoZW4gdGhlIGRhdGEgd2lsbCBiZSBhZ2dyZWdhdGVkIGluXG4gICAqIGEgMkQgZ3JpZCBvZiBzaXplIHNxcnQobWF4U2NhdHRlclBvaW50c0FmdGVyQWdncmVnYXRpb24pIHggc3FydChtYXhTY2F0dGVyUG9pbnRzQWZ0ZXJBZ2dyZWdhdGlvbilcbiAgICovXG4gIG1heFNjYXR0ZXJQb2ludHNCZWZvcmVBZ2dyZWdhdGlvbjogMTAwMDAsXG4gIC8vIFNwZWNpZmllcyBob3cgbWFueSBtYXhpbXVtIHBvaW50cyBjYW4gYmUgZGlzcGxheWVkIG9uY2UgdGhlIHNjYXR0ZXIgcGxvdCBkYXRhIGlzIGFnZ3JlZ2F0ZWRcbiAgbWF4U2NhdHRlclBvaW50c0FmdGVyQWdncmVnYXRpb246IDEwMDAwLFxuICAvLyBtYXhpbXVtIG51bWJlciBvZiBzbGljZXMgZm9yIHBpZSBjaGFydFxuICBtYXhQaWVDaGFydFNsaWNlQ291bnRUb3RhbDogMzAwXG59XG5cbi8vIFRoZSB2ZXJzaW9uIHVzZWQgZm9yIGFyY2dpcyBjaGFydHMgc3BlYy5cbmV4cG9ydCBjb25zdCBXZWJDaGFydEN1cnJlbnRWZXJzaW9uID0gJzcuMy4xJ1xuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIHR5cGUgQWN0aW9uTW9kZXMsXG4gIHR5cGUgQmFyQW5kTGluZURhdGFMYWJlbEZvcm1hdENhbGxiYWNrLFxuICB0eXBlIEJhckFuZExpbmVUb29sdGlwRm9ybWF0Q2FsbGJhY2ssXG4gIEJhckNoYXJ0LFxuICB0eXBlIENoYXJ0Q29tcG9uZW50RXZlbnRDYWxsYmFja3MsXG4gIHR5cGUgQ2hhcnRFbGVtZW50TGltaXQsXG4gIGdldFNlcmllc1R5cGUsXG4gIEhpc3RvZ3JhbSxcbiAgdHlwZSBIaXN0b2dyYW1MYWJlbEZvcm1hdENhbGxiYWNrLFxuICB0eXBlIElubGluZURhdGEsXG4gIExpbmVDaGFydCxcbiAgdHlwZSBOb0RhdGFPcHRpb25zLFxuICBQaWVDaGFydCxcbiAgdHlwZSBQaWVDaGFydExhYmVsRm9ybWF0Q2FsbGJhY2ssXG4gIHR5cGUgUGllQ2hhcnRMZWdlbmRWYWx1ZUxhYmVsRm9ybWF0Q2FsbGJhY2ssXG4gIFNjYXR0ZXJQbG90LFxuICB0eXBlIFNjYXR0ZXJQbG90TGFiZWxGb3JtYXRDYWxsYmFjayxcbiAgdHlwZSBTZWxlY3Rpb25EYXRhLFxuICB0eXBlIFNlbGVjdGlvblRoZW1lLFxuICB0eXBlIFVucHJpdmlsZWdlZENoYXJ0LFxuICB0eXBlIFdlYkNoYXJ0RGF0YUZpbHRlcnMsXG4gIHR5cGUgV2ViQ2hhcnREYXRhU291cmNlcyxcbiAgdHlwZSBXZWJDaGFydExlZ2VuZFBvc2l0aW9ucyxcbiAgdHlwZSBXZWJNYXBXZWJDaGFydCxcbiAgdHlwZSBQcmVSZW5kZXJDYWxsYmFja1xufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0Q29tcG9uZW50c1Byb3BzIGV4dGVuZHMgQ2hhcnRDb21wb25lbnRFdmVudENhbGxiYWNrcyB7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHRoZSBjbGFzcyBuYW1lcyBhZGRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB2ZXJzaW9uIG51bWJlciBjaGFuZ2VzLCBmb3JjZSB0aGUgY2hhcnQgZGF0YSB0byBiZSB1cGRhdGVkIG9uY2UuXG4gICAqL1xuICB2ZXJzaW9uPzogbnVtYmVyXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiBkYXRhIHNvdXJjZSB1c2VkIGJ5IHRoZSBjaGFydFxuICAgKi9cbiAgdHlwZTogJ2lubGluZScgfCAnbGF5ZXInXG4gIC8qKlxuICAgKiBVc2VkIGJ5IGBAYXJjZ2lzL2NoYXJ0cy1qc2AgcGFja2FnZSwgYm90aCBtdXRhYmxlIGFuZCBpbW11dGFibGUgYXJlIHN1cHBvcnRlZC5cbiAgICovXG4gIHdlYk1hcFdlYkNoYXJ0OiBXZWJNYXBXZWJDaGFydCB8IEltbXV0YWJsZU9iamVjdDxXZWJNYXBXZWJDaGFydD5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHJlcHJlc2VudGluZyB0aGUgZGF0YXNvdXJjZS4gQ2FuIGJlIEZlYXR1cmUgbGF5ZXIgb3IgdmFuaWxsYSBQT0pPcy5cbiAgICovXG4gIGRhdGFTb3VyY2U/OiBXZWJDaGFydERhdGFTb3VyY2VzXG4gIC8qKlxuICAqIFVzZWQgdG8gYXBwbHkgcnVudGltZSBmaWx0ZXJzIHRvIHRoZSBjaGFydCdzIGRhdGEgd2hpbGUgaW4gRmVhdHVyZSBMYXllciBtb2RlLlxuICAqL1xuICBydW50aW1lRGF0YUZpbHRlcnM/OiBXZWJDaGFydERhdGFGaWx0ZXJzXG4gIC8qKlxuICAgKiBBIHByb3BlcnR5IHJlcHJlc2VudGluZyB0aGUgc2VsZWN0aW9uIHRvIGFwcGx5IG9uIHRoZSBjaGFydC5cbiAgICogVGhlIHByb3BlcnRpZXMgYXJlIGNvbnNpZGVyZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcbiAgICogLSBzZWxlY3Rpb25EYXRhLnNlbGVjdGlvbk9JRHM6IGFuIGFycmF5IG9mIE9iamVjdCBJZHMgKGZvciBGZWF0dXJlIExheWVyKSByZXByZXNlbnRpbmcgYSBzZWxlY3Rpb24gdG8gYXBwbHkgdG8gdGhlIGNoYXJ0LlxuICAgKiAtIHNlbGVjdGlvbkRhdGEuc2VsZWN0aW9uSXRlbXM6IGFuIGFycmF5IG9mIGRhdGEgaXRlbXMgcmVwcmVzZW50aW5nIGEgc2VsZWN0aW9uIHRvIGFwcGx5IHRvIHRoZSBjaGFydC5cbiAgICovXG4gIHNlbGVjdGlvbkRhdGE/OiBTZWxlY3Rpb25EYXRhXG4gIC8qKlxuICAgKiBVc2VkIHRvIHByb3ZpZGUgYSBjdXN0b21pemVkIHRoZW1lIGZvciB0aGUgc2VsZWN0ZWQgYW5kIG5vbiBzZWxlY3RlZCBlbGVtZW50cy5cbiAgICogSWYgbm8gc3R5bGUgaXMgcHJvdmlkZWQgZm9yIHRoZSBzZWxlY3RlZCBlbGVtZW50cywgYSBkZWZhdWx0IHNlbGVjdGlvbiBpcyBhcHBsaWVkLlxuICAgKiBJZiBubyBzdHlsZSBpcyBwcm92aWRlZCBmb3IgdGhlIG5vbiBzZWxlY3RlZCBlbGVtZW50cywgdGhlIGNoYXJ0J3Mgc3R5bGUgaXMgYXBwbGllZC5cbiAgICovXG4gIHNlbGVjdGlvblRoZW1lPzogU2VsZWN0aW9uVGhlbWVcbiAgLyoqXG4gICAqIFVzZWQgdG8gY3VzdG9taXplIHRoZSBjaGFydCdzIGxpbWl0cywgZXNwZWNpYWxseSB0aGUgbWF4aW11bSBudW1iZXIgb2YgYmFycyB0byBiZSBkaXNwbGF5ZWQuXG4gICAqL1xuICBjaGFydExpbWl0cz86IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+XG4gIC8qKlxuICAgKiBVc2VkIHRvIGJ1aWxkL3VwZGF0ZSBpbmxpbmUgZGF0YSBzb3VyY2Ugb2YgdGhlIGNoYXJ0XG4gICAqL1xuICBpbmxpbmVEYXRhPzogSW5saW5lRGF0YTxhbnk+XG4gIC8qKlxuICAgKiB1c2VkIHRvIHBlcmZvcm0gcXVlcmllcyBvciBjbGllbnQtc2lkZSBxdWVyaWVzIChpZiB0aGUgdmlldyBpcyBwcm92aWRlZClcbiAgICovXG4gIGxheWVyPzogX19lc3JpLkZlYXR1cmVMYXllciB8IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3XG4gIC8qKlxuICAgKiBVc2VkIHRvIGFjY2VzcyB0byB0aGUgRmVhdHVyZUxheWVyVmlldyBpbnN0YW5jZSBpbiBvcmRlciB0byBwZXJmb3JtIGNsaWVudC1zaWRlIHF1ZXJpZXMuXG4gICAqIEBjYXRlZ29yeSBQdWJsaWNcbiAgICovXG4gIHZpZXc/OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXdcbiAgLyoqXG4gICAqIFNldCB0aGUgY2hhcnQncyBtb2RlICh6b29tLCBzZWxlY3Rpb24sIG5vbmUpXG4gICAqIC0gem9vbTogYWxsb3dzIHRvIHpvb20gb24gdGhlIGNoYXJ0LiBBbGwgc2VsZWN0aW9uIGlzIGRpc2FibGVkXG4gICAqIC0gbW9uby1zZWxlY3Rpb246IHRoZSBzZWxlY3Rpb24gaXMgZW5hYmxlZCBidXQgb25seSBvbmUgZWxlbWVudCBjYW4gYmUgc2VsZWN0ZWQuIFpvb20gaXMgZGlzYWJsZWRcbiAgICogLSBtdWx0aS1zZWxlY3Rpb246IHRoZSBzZWxlY3Rpb24gaXMgZW5hYmxlZCBhbmQgYWxsb3dzIHNlbGVjdGluZyBtdWx0aXBsZSBlbGVtZW50cy4gWm9vbSBpcyBkaXNhYmxlZFxuICAgKiAtIG11bHRpLXNlbGVjdGlvbi13aXRoLWN0cmwta2V5OiB0aGUgc2VsZWN0aW9uIGlzIGVuYWJsZWQgYW5kIGFsbG93cyBzZWxlY3RpbmcgbXVsdGlwbGUgZWxlbWVudHMgd2hlbiB0aGUgY3RybC9jbWQga2V5IGlzIHByZXNzZWQuIFpvb20gaXMgZGlzYWJsZWRcbiAgICogLSBub25lOiB0aGUgem9vbSBhbmQgc2VsZWN0aW9uIGZlYXR1cmVzIGFyZSBkaXNhYmxlZFxuICAgKi9cbiAgYWN0aW9uTW9kZT86IEFjdGlvbk1vZGVzXG4gIC8qKlxuICAgKiBvcHRpb25hbCBjcmVhdGUgbWVzc2FnZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNoYXJ0IGNvbnRhaW5lci5cbiAgICovXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgICogVXNlZCB0byBzZXQgdGhlIGNoYXJ0J3MgYmVoYXZpb3Igd2hlbiBpdHMgZGF0YSBzZXQgaXMgZW1wdHlcbiAgICAqL1xuICBub0RhdGFPcHRpb25zPzogTm9EYXRhT3B0aW9uc1xuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBvciB1cGRhdGluZyBhIGNoYXJ0IGNvbXBhdGlibGUgd2l0aCB0aW1lIGJpbm5pbmcuIElmIHRoaXMgb3B0aW9uIGlzIGB0cnVlYCwgdGhlIHNlcmllcyBwcm9wZXJ0aWVzXG4gICAqIGB0aW1lSW50ZXJ2YWxVbml0c2AgYW5kIGB0aW1lSW50ZXJ2YWxTaXplYCBiZWNvbWUgb3B0aW9uYWwgYW5kIHdpbGwgYmUgYXV0b21hdGljYWxseSBzZXQgdG8gdmFsdWVzIHRoYXQgZml0IHRoZSBkYXRhIHNldC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogTm90ZTogT25seSB2YWxpZCBmb3IgYGxpbmVTZXJpZXNgLlxuICAgKi9cbiAgc2V0VGltZUJpbm5pbmdJbmZvV2hlbk5vdFByb3ZpZGVkPzogYm9vbGVhblxuICAvKipcbiAgICogVXNlZCB0byBjdXN0b21pemUgdGhlIHdheSB0aGUgdG9vbHRpcHMgYXJlIHJlbmRlcmVkLiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gY2FuIHJldHVybiBhbiBIVE1MIHN0cmluZyBhbmQgdGhlIHRhZ3Mgd2lsbFxuICAgKiBiZSBpbnRlcnByZXRlZCBwcm9wZXJseS5cbiAgICovXG4gIHRvb2x0aXBGb3JtYXR0ZXI/OlxuICB8IFBpZUNoYXJ0TGFiZWxGb3JtYXRDYWxsYmFja1xuICB8IEhpc3RvZ3JhbUxhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgfCBTY2F0dGVyUGxvdExhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgfCBCYXJBbmRMaW5lVG9vbHRpcEZvcm1hdENhbGxiYWNrXG4gIGRhdGFMYWJlbEZvcm1hdHRlcj86XG4gIHwgUGllQ2hhcnRMYWJlbEZvcm1hdENhbGxiYWNrXG4gIHwgSGlzdG9ncmFtTGFiZWxGb3JtYXRDYWxsYmFja1xuICB8IFNjYXR0ZXJQbG90TGFiZWxGb3JtYXRDYWxsYmFja1xuICB8IEJhckFuZExpbmVEYXRhTGFiZWxGb3JtYXRDYWxsYmFja1xuICAvKipcbiAgICogVXNlZCBieSB0aGUgbGVnZW5kIHBvc2l0aW9uIGNoYW5nZSBhY3Rpb24uXG4gICAqL1xuICBsZWdlbmRQb3NpdGlvbj86IFdlYkNoYXJ0TGVnZW5kUG9zaXRpb25zXG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHVzZWQgdG8gZm9ybWF0IHRoZSBsZWdlbmQgdmFsdWUgbGFiZWxzLiBJZiB0aGUgcmV0dXJuZWQgc3RyaW5nIGNvbnRhaW5zIEhUTUwgdGFncyB0aGV5IHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgc3VjaC5cbiAgICogSWYgcHJvdmlkZWQsIHRoZSBmb3JtYXR0ZXIgd2lsbCBiZSB1c2VkIGlmIGF0IGxlYXN0IGBXZWJDaGFydFBpZUNoYXJ0TGVnZW5kLmRpc3BsYXlOdW1lcmljVmFsdWVgIG9yIGBXZWJDaGFydFBpZUNoYXJ0TGVnZW5kLmRpc3BsYXlQZXJjZW50YWdlYCBpcyB0cnVlLlxuICAgKiBOb3RlOiBPbmx5IHZhbGlkIGZvciBgcGllU2VyaWVzYC5cbiAgICovXG4gIGxlZ2VuZFZhbHVlTGFiZWxGb3JtYXR0ZXI/OiBQaWVDaGFydExlZ2VuZFZhbHVlTGFiZWxGb3JtYXRDYWxsYmFja1xuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gZGlzYWJsZSB0aGUgZGVmYXVsdCBzZXR0aW5nIHRoYXQgdXNlcyBkZWJvdW5jZSBmdW5jdGlvbnMgdG8gaGFuZGxlIHRoZSB2aXNpYmlsaXR5IG9mIG1hcmtlcnMgdGhhdCBhcmUgb3V0c2lkZSBvZiB0aGUgcGxvdHRpbmcgYXJlYVxuICAgKiB3aGVuIHRoZSBtaW4vbWF4IGJvdW5kIGNoYW5nZXMgYW5kL29yIHdoZW4gYSB6b29tIGFjdGlvbiBpcyBwZXJmb3JtZWQgKHZpYSBjaGFydCBjdXJzb3Igb3Igc2Nyb2xsYmFyKSwgdG8gaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAqIFRoaXMgcHJvcGVydHkgd2lsbCBiZSBzZXQgd2hlbiB0aGUgY2hhcnQgaXMgY3JlYXRlZCBhbmQgY2Fubm90IGJlIHVwZGF0ZWQgYWZ0ZXIgdGhhdC4gSXQncyByZWNvbW1lbmRlZCB0aGF0IHRoaXMgcHJvcGVydHkgc2hvdWxkIG9ubHkgYmUgc2V0IHRvIHRydWUgZm9yIHNtYWxsIGRhdGFzZXRzLlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBOb3RlOiBPbmx5IHZhbGlkIGZvciBgbGluZVNlcmllc2AgYW5kIGBzY2F0dGVyU2VyaWVzYC5cbiAgICovXG4gIGlnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0PzogYm9vbGVhblxuICAvKipcbiAgICogVXNlZCBieSB0aGUgbGVnZW5kIHZpc2liaWxpdHkgY2hhbmdlIGFjdGlvbi5cbiAgICovXG4gIGxlZ2VuZFZpc2liaWxpdHk/OiBib29sZWFuXG4gIC8qKlxuICAgKiBlbmFibGUgZmlsdGVyIGJ5IHNlbGVjdGlvblxuICAgKi9cbiAgZmlsdGVyQnlTZWxlY3Rpb24/OiBib29sZWFuXG4gIC8qKlxuICAgKiB1c2VkIHRvIGRpc2FibGUgYWxsIGludGVyYWN0aW9ucyBvbiB0aGUgY2hhcnQgKGxlZ2VuZCBoaXQsIHNlbGVjdGlvbiwgem9vbS4uLilcbiAgICovXG4gIGRpc2FibGVJbnRlcmFjdGlvbnM/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUbyBlbmFibGUgdGhlIHJlc3BvbnNpdmUgZmVhdHVyZXMuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBlbmFibGVSZXNwb25zaXZlRmVhdHVyZXM/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUbyBhdXRvLWRpc3Bvc2UgYSBjaGFydCBpZiBhIG5ldyBvbmUgaXMgY3JlYXRlZCBpbiB0aGUgc2FtZSBjb250YWluZXIuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGF1dG9EaXNwb3NlQ2hhcnQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBUbyBlbnN1cmUgdGhhdCBjaGFydHMgYXJlIGJ1aWx0IG9uZSBieSBvbmUuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIHF1ZXVlQ2hhcnRDcmVhdGlvbj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFRvIGFjdGl2YXRlIHRoZSBhbmltYXRpb25zIG9uIHRoZSBjaGFydC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHVzZUFuaW1hdGVkQ2hhcnRzPzogYm9vbGVhblxuICAvKipcbiAgICogVG8gaGlkZSB0aGUgbGljZW5jZSB3YXRlcm1hcmsuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIGhpZGVMaWNlbmNlV2F0ZXJtYXJrPzogYm9vbGVhblxuICAvKipcbiAgICAqIFVzZWQgdG8gaGlkZSB0aGUgbG9hZGVyIGFuaW1hdGlvbiAoY3VydGFpbiBhbmQgc3Bpbm5lciksIHNob3dlZCBieSBkZWZhdWx0IGF0IGV2ZXJ5IHVwZGF0ZS5cbiAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgKi9cbiAgaGlkZUxvYWRlckFuaW1hdGlvbj86IGJvb2xlYW5cbiAgLyoqXG4gICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHNlbGVjdGlvbiBpbmRleGVzIG5lZWQgdG8gYmUgY29tcHV0ZWQgd2hlbmV2ZXIgYSBzZWxlY3Rpb24gaXMgbWFkZSBvbiBvciBwYXNzZWQgdG8gdGhlIGNoYXJ0LlxuICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICovXG4gIHJldHVyblNlbGVjdGlvbkluZGV4ZXM/OiBib29sZWFuXG4gIC8qKlxuICAgICogSW5kaWNhdGVzIGlmIHRoZSBvYmplY3QgaWRzIG5lZWQgdG8gYmUgY29tcHV0ZWQgd2hlbmV2ZXIgYSBzZWxlY3Rpb24gaXMgbWFkZSBvbiBvciBwYXNzZWQgdG8gdGhlIGNoYXJ0LiBPbmx5IGNvbnNpZGVyZWQgZm9yIGEgZGF0YSBzb3VyY2UgdXNpbmcgYSBmZWF0dXJlIGxheWVyLlxuICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAqL1xuICByZXR1cm5TZWxlY3Rpb25PSURzPzogYm9vbGVhblxuICAvKipcbiAgICAqIExpZmVjeWNsZSBmdW5jdGlvbiBleGVjdXRlZCBhZnRlciB0aGUgZGF0YSBoYXMgYmVlbiBwcm9jZXNzZWQgYW5kIGJlZm9yZSB0aGUgY2hhcnQgcmVuZGVycy4gQ2FuIGJlIHVzZWQgdG8gYWx0ZXIgdGhlIGNvbmZpZy5zZXJpZXNbMF0uc2xpY2VzIHByb3BlcnR5IGZyb20gaW5zdGFuY2UuXG4gICAgKiBOb3RlOiBvbmx5IHZhbGlkIGZvciBwaWUgY2hhcnQuXG4gICAqL1xuICBjaGFydFdpbGxSZW5kZXI/OiBQcmVSZW5kZXJDYWxsYmFja1xufVxuXG5leHBvcnQgY29uc3QgQ2hhcnRDb21wb25lbnRzID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHByb3BzOiBDaGFydENvbXBvbmVudHNQcm9wcyxcbiAgICByZWY6IFJlYWN0LlJlZjxVbnByaXZpbGVnZWRDaGFydD5cbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB2ZXJzaW9uLFxuICAgICAgbm9EYXRhT3B0aW9ucyxcbiAgICAgIHRvb2x0aXBGb3JtYXR0ZXIsXG4gICAgICBkYXRhTGFiZWxGb3JtYXR0ZXIsXG4gICAgICBlbmFibGVSZXNwb25zaXZlRmVhdHVyZXMgPSBmYWxzZSxcbiAgICAgIGF1dG9EaXNwb3NlQ2hhcnQgPSBmYWxzZSxcbiAgICAgIHF1ZXVlQ2hhcnRDcmVhdGlvbiA9IHRydWUsXG4gICAgICB1c2VBbmltYXRlZENoYXJ0cyA9IGZhbHNlLFxuICAgICAgaGlkZUxpY2VuY2VXYXRlcm1hcmsgPSB0cnVlLFxuICAgICAgaWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXQgPSBmYWxzZSxcbiAgICAgIGxlZ2VuZFZhbHVlTGFiZWxGb3JtYXR0ZXIsXG4gICAgICBzZXRUaW1lQmlubmluZ0luZm9XaGVuTm90UHJvdmlkZWQsXG4gICAgICByZXR1cm5TZWxlY3Rpb25JbmRleGVzID0gdHJ1ZSxcbiAgICAgIHJldHVyblNlbGVjdGlvbk9JRHMgPSBmYWxzZSxcbiAgICAgIGNoYXJ0V2lsbFJlbmRlcixcbiAgICAgIC4uLm90aGVyc1xuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgY2hhcnRSZWYgPSBSZWFjdC51c2VSZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KG51bGwpXG4gICAgY29uc3QgaGFuZGxlUmVmID0gaG9va3MudXNlRm9ya1JlZihyZWYsIGNoYXJ0UmVmKVxuXG4gICAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUocHJvcHMud2ViTWFwV2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnkpXG5cbiAgICBjb25zdCBnbG9iYWxPcHRpb25zID0ge1xuICAgICAgYXV0b0Rpc3Bvc2VDaGFydCxcbiAgICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyxcbiAgICAgIHF1ZXVlQ2hhcnRDcmVhdGlvbixcbiAgICAgIHVzZUFuaW1hdGVkQ2hhcnRzLFxuICAgICAgaGlkZUxpY2VuY2VXYXRlcm1hcmssXG4gICAgICByZXR1cm5TZWxlY3Rpb25JbmRleGVzLFxuICAgICAgcmV0dXJuU2VsZWN0aW9uT0lEc1xuICAgIH1cblxuICAgIGhvb2tzLnVzZVVwZGF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoY2hhcnRSZWYuY3VycmVudCkge1xuICAgICAgICBjaGFydFJlZi5jdXJyZW50LnJlZnJlc2goKVxuICAgICAgfVxuICAgIH0sIFt2ZXJzaW9uXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7c2VyaWVzVHlwZSA9PT0gJ2JhclNlcmllcycgJiYgKFxuICAgICAgICAgIDxCYXJDaGFydFxuICAgICAgICAgICAgcmVmPXtoYW5kbGVSZWZ9XG4gICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyPXtcbiAgICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyIGFzIEJhckFuZExpbmVEYXRhTGFiZWxGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9vbHRpcEZvcm1hdHRlcj17XG4gICAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXIgYXMgQmFyQW5kTGluZVRvb2x0aXBGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9EYXRhT3B0aW9ucz17bm9EYXRhT3B0aW9uc31cbiAgICAgICAgICAgIHsuLi5nbG9iYWxPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXJpZXNUeXBlID09PSAnbGluZVNlcmllcycgJiYgKFxuICAgICAgICAgIDxMaW5lQ2hhcnRcbiAgICAgICAgICAgIHJlZj17aGFuZGxlUmVmfVxuICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIGRhdGFMYWJlbEZvcm1hdHRlcj17XG4gICAgICAgICAgICAgIGRhdGFMYWJlbEZvcm1hdHRlciBhcyBCYXJBbmRMaW5lRGF0YUxhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXI9e1xuICAgICAgICAgICAgICB0b29sdGlwRm9ybWF0dGVyIGFzIEJhckFuZExpbmVUb29sdGlwRm9ybWF0Q2FsbGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0PXtpZ25vcmVTbW9vdGhSZW5kZXJpbmdMaW1pdH1cbiAgICAgICAgICAgIHNldFRpbWVCaW5uaW5nSW5mb1doZW5Ob3RQcm92aWRlZD17XG4gICAgICAgICAgICAgIHNldFRpbWVCaW5uaW5nSW5mb1doZW5Ob3RQcm92aWRlZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9EYXRhT3B0aW9ucz17bm9EYXRhT3B0aW9uc31cbiAgICAgICAgICAgIHsuLi5nbG9iYWxPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXJpZXNUeXBlID09PSAncGllU2VyaWVzJyAmJiAoXG4gICAgICAgICAgPFBpZUNoYXJ0XG4gICAgICAgICAgICByZWY9e2hhbmRsZVJlZn1cbiAgICAgICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgICAgICBkYXRhTGFiZWxGb3JtYXR0ZXI9e1xuICAgICAgICAgICAgICBkYXRhTGFiZWxGb3JtYXR0ZXIgYXMgUGllQ2hhcnRMYWJlbEZvcm1hdENhbGxiYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b29sdGlwRm9ybWF0dGVyPXt0b29sdGlwRm9ybWF0dGVyIGFzIFBpZUNoYXJ0TGFiZWxGb3JtYXRDYWxsYmFja31cbiAgICAgICAgICAgIGxlZ2VuZFZhbHVlTGFiZWxGb3JtYXR0ZXI9e2xlZ2VuZFZhbHVlTGFiZWxGb3JtYXR0ZXJ9XG4gICAgICAgICAgICBub0RhdGFPcHRpb25zPXtub0RhdGFPcHRpb25zfVxuICAgICAgICAgICAgY2hhcnRXaWxsUmVuZGVyPXtjaGFydFdpbGxSZW5kZXJ9XG4gICAgICAgICAgICB7Li4uZ2xvYmFsT3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c2VyaWVzVHlwZSA9PT0gJ3NjYXR0ZXJTZXJpZXMnICYmIChcbiAgICAgICAgICA8U2NhdHRlclBsb3RcbiAgICAgICAgICAgIHJlZj17aGFuZGxlUmVmfVxuICAgICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgICAgIGRhdGFMYWJlbEZvcm1hdHRlcj17XG4gICAgICAgICAgICAgIGRhdGFMYWJlbEZvcm1hdHRlciBhcyBTY2F0dGVyUGxvdExhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXI9e1xuICAgICAgICAgICAgICB0b29sdGlwRm9ybWF0dGVyIGFzIFNjYXR0ZXJQbG90TGFiZWxGb3JtYXRDYWxsYmFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXQ9e2lnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0fVxuICAgICAgICAgICAgbm9EYXRhT3B0aW9ucz17bm9EYXRhT3B0aW9uc31cbiAgICAgICAgICAgIHsuLi5nbG9iYWxPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXJpZXNUeXBlID09PSAnaGlzdG9ncmFtU2VyaWVzJyAmJiAoXG4gICAgICAgICAgPEhpc3RvZ3JhbVxuICAgICAgICAgICAgcmVmPXtoYW5kbGVSZWZ9XG4gICAgICAgICAgICB7Li4ub3RoZXJzfVxuICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyPXtcbiAgICAgICAgICAgICAgZGF0YUxhYmVsRm9ybWF0dGVyIGFzIEhpc3RvZ3JhbUxhYmVsRm9ybWF0Q2FsbGJhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvb2x0aXBGb3JtYXR0ZXI9e3Rvb2x0aXBGb3JtYXR0ZXIgYXMgSGlzdG9ncmFtTGFiZWxGb3JtYXRDYWxsYmFja31cbiAgICAgICAgICAgIHsuLi5nbG9iYWxPcHRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbilcbiIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXG5leHBvcnQgKiBmcm9tICcuL3Jvb3QnXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEFsZXJ0LCBXaWRnZXRQbGFjZWhvbGRlciB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyB0eXBlIFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcblxuY29uc3QgUGxhY2Vob2xkZXJzID0ge1xuICBiYXI6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9iYXIuc3ZnJyksXG4gIGNvbHVtbjogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL2NvbHVtbi5zdmcnKSxcbiAgJ3N0YWNrZWQtYmFyJzogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3N0YWNrZWQtYmFyLnN2ZycpLFxuICAnc3RhY2tlZDEwMC1iYXInOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvc3RhY2tlZDEwMC1iYXIuc3ZnJyksXG4gICdzdGFja2VkLWNvbHVtbic6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9zdGFja2VkLWNvbHVtbi5zdmcnKSxcbiAgJ3N0YWNrZWQxMDAtY29sdW1uJzogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3N0YWNrZWQxMDAtY29sdW1uLnN2ZycpLFxuICBsaW5lOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvbGluZS5zdmcnKSxcbiAgJ3Ntb290aC1saW5lJzogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3Ntb290aC1saW5lLnN2ZycpLFxuICBhcmVhOiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvYXJlYS5zdmcnKSxcbiAgJ3Ntb290aC1hcmVhJzogcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL3Ntb290aC1hcmVhLnN2ZycpLFxuICBwaWU6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9waWUuc3ZnJyksXG4gIGRvbnV0OiByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvZG9udXQuc3ZnJyksXG4gIHNjYXR0ZXI6IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9zY2F0dGVyLnN2ZycpLFxuICBoaXN0b2dyYW06IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9oaXN0b2dyYW0uc3ZnJylcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGFjZWhvbGRlclByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlXG4gIHNob3dNZXNzYWdlOiBib29sZWFuXG4gIG1lc3NhZ2VUeXBlPzogJ2Jhc2ljJyB8ICd0b29sdGlwJ1xuICBtZXNzYWdlOiBzdHJpbmdcbn1cblxuY29uc3Qgc3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIC5qaW11LXdpZGdldC1wbGFjZWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgfVxuICAuYWxlcnQtdG9vbHRpcC1idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxuICAuYWxlcnQtcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBQbGFjZWhvbGRlciA9IChwcm9wczogUGxhY2Vob2xkZXJQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGVtcGxhdGVUeXBlLFxuICAgIHNob3dNZXNzYWdlLFxuICAgIG1lc3NhZ2UsXG4gICAgbWVzc2FnZVR5cGUgPSAndG9vbHRpcCcsXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGljb24gPSBSZWFjdC51c2VNZW1vKCgpID0+IFBsYWNlaG9sZGVyc1t0ZW1wbGF0ZVR5cGVdLCBbdGVtcGxhdGVUeXBlXSlcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3BsYWNlaG9sZGVyLWNvbnRhaW5lciB3LTEwMCBoLTEwMCcsIGNsYXNzTmFtZSl9IGNzcz17c3R5bGV9PlxuICAgIDxXaWRnZXRQbGFjZWhvbGRlciBpY29uU2l6ZT0nbGFyZ2UnIGljb249e2ljb259IC8+XG4gICAge3Nob3dNZXNzYWdlICYmIDxBbGVydCBmb3JtPXttZXNzYWdlVHlwZX0gd2l0aEljb249e3RydWV9IHNpemU9J3NtYWxsJyB0eXBlPSd3YXJuaW5nJyB0ZXh0PXttZXNzYWdlfT48L0FsZXJ0Pn1cbiAgPC9kaXY+XG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgUGxhY2Vob2xkZXIgfSBmcm9tICcuL3BsYWNlaG9sZGVyJ1xuXG5pbnRlcmZhY2UgQ2hhcnRSb290UG9ycHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc2hvd0xvYWRpbmc6IGJvb2xlYW5cbiAgYmFja2dyb3VuZDogc3RyaW5nXG4gIHRvb2xzOiBSZWFjdC5SZWFjdE5vZGVcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudFxuICBzaG93UGxhY2Vob2xkZXI/OiBib29sZWFuXG4gIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlXG4gIG1lc3NhZ2VUeXBlOiAnYmFzaWMnIHwgJ3Rvb2x0aXAnXG4gIG1lc3NhZ2U/OiBzdHJpbmdcbn1cblxuY29uc3QgUm9vdCA9IHN0eWxlZC5kaXYoKHByb3BzOiB7IHNob3dUb29sczogYm9vbGVhbiwgYmFja2dyb3VuZDogc3RyaW5nIH0pID0+IHtcbiAgcmV0dXJuIGBcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzLmJhY2tncm91bmR9ICFpbXBvcnRhbnQ7XG4gICAgICAuY2hhcnQtdG9vbGJhciB7XG4gICAgICAgIGhlaWdodDogJHtwcm9wcy5zaG93VG9vbHMgPyAnMzhweCcgOiAnMHB4J307XG4gICAgICB9XG4gICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAke3Byb3BzLnNob3dUb29scyA/ICdjYWxjKDEwMCUgLSAzOHB4KScgOiAnMTAwJSd9ICFpbXBvcnRhbnQ7XG4gICAgICAgID4gLndlYi1jaGFydCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYXJjZ2lzLWNoYXJ0cy1tb2RhbC1jb250ZW50LCAuYXJjZ2lzLWNoYXJ0cy1hbXBvcHVwLWNvbnRlbnQsIC5hcmNnaXMtY2hhcnRzLW1vZGFsLWN1cnRhaW4sIC5hcmNnaXMtY2hhcnRzLWFtcG9wdXAtY3VydGFpbiB7XG4gICAgICAgIHotaW5kZXg6IGF1dG87XG4gICAgICB9XG4gICAgYFxufSlcblxuZXhwb3J0IGNvbnN0IENoYXJ0Um9vdCA9IChwcm9wczogQ2hhcnRSb290UG9ycHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBzaG93UGxhY2Vob2xkZXIsXG4gICAgc2hvd0xvYWRpbmcsXG4gICAgYmFja2dyb3VuZCxcbiAgICB0b29scyxcbiAgICB0ZW1wbGF0ZVR5cGUsXG4gICAgbWVzc2FnZVR5cGUsXG4gICAgbWVzc2FnZSxcbiAgICBjaGlsZHJlblxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxSb290IHNob3dUb29scz17ISF0b29sc30gYmFja2dyb3VuZD17YmFja2dyb3VuZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdjaGFydC1yb290JywgY2xhc3NOYW1lKX0+XG4gICAgICB7c2hvd1BsYWNlaG9sZGVyICYmIChcbiAgICAgICAgPFBsYWNlaG9sZGVyXG4gICAgICAgICAgdGVtcGxhdGVUeXBlPXt0ZW1wbGF0ZVR5cGV9XG4gICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICBtZXNzYWdlVHlwZT17bWVzc2FnZVR5cGV9XG4gICAgICAgICAgc2hvd01lc3NhZ2U9eyEhbWVzc2FnZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7IXNob3dQbGFjZWhvbGRlciAmJiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcnQtdG9vbGJhcic+e3Rvb2xzfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhcnQtY29udGFpbmVyJz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd0xvYWRpbmcgJiYgPExvYWRpbmcgdHlwZT0nRE9OVVQnIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPn1cbiAgICA8L1Jvb3Q+XG4gIClcbn1cbiIsImltcG9ydCB7XG4gIFJlYWN0LFxuICB0eXBlIEltbXV0YWJsZU9iamVjdCxcbiAgdHlwZSBVc2VEYXRhU291cmNlLFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIGFwcENvbmZpZ1V0aWxzLFxuICBnZXRBcHBTdG9yZSxcbiAgdHlwZSBEYXRhUmVjb3JkLFxuICBSZWFjdFJlZHV4LFxuICB0eXBlIElNU3RhdGUsXG4gIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVjb3JlRGVmYXVsdE1lc3NhZ2VzLFxuICBEYXRhU291cmNlU3RhdHVzLFxuICBEYXRhU291cmNlTWFuYWdlcixcbiAgaG9va3Ncbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZGVmYXVsdE1lc3NhZ2VzIGFzIGppbXVEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBDaGFydFR5cGVzLCBnZXRTZXJpZXNUeXBlIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IHR5cGUgQ2hhcnREYXRhU291cmNlLCB0eXBlIElXZWJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IGlzU2VyaWFsU2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVmYXVsdCdcbmltcG9ydCB7IHR5cGUgUmVjb3Jkc1N0YXR1cyB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuLyoqXG4gKiAgR2V0IHRoZSB3YXJuaW5nIG1lc3NhZ2UgdHJhbnNsYXRpb24uXG4gKiBAcGFyYW0gdHlwZVxuICogQHBhcmFtIHNvdXJjZVN0YXR1c1xuICovXG5leHBvcnQgY29uc3QgZ2V0V2FybmluZ01lc3NhZ2VUcmFuc2xhdGlvbiA9IChcbiAgdHlwZTogQ2hhcnRUeXBlcyxcbiAgc2VyaWVzTGVuZ3RoOiBudW1iZXIsXG4gIHNvdXJjZVN0YXR1czogUmVjb3Jkc1N0YXR1cyxcbiAgaXNTZWxlY3Rpb25FbXB0eT86IGJvb2xlYW5cbik6IHN0cmluZyA9PiB7XG4gIGxldCB0cmFuc2xhdGlvbiA9ICcnXG4gIGlmIChpc1NlbGVjdGlvbkVtcHR5KSB7XG4gICAgdHJhbnNsYXRpb24gPSAnZGF0YUVtcHR5VGlwJ1xuICB9IGVsc2Uge1xuICAgIGlmIChzb3VyY2VTdGF0dXMgPT09ICdleGNlZWQnKSB7XG4gICAgICBpZiAoaXNTZXJpYWxTZXJpZXModHlwZSkpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5lU2VyaWVzJykge1xuICAgICAgICAgIHRyYW5zbGF0aW9uID0gJ2xpbmVMaW1pdGF0aW9uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZXJpZXNMZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gJ2JhcjFTZXJpZXNMaW1pdGF0aW9uJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2VyaWVzTGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbiA9ICdiYXIyU2VyaWVzTGltaXRhdGlvbidcbiAgICAgICAgICB9IGVsc2UgaWYgKHNlcmllc0xlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uID0gJ2JhcjNTZXJpZXNMaW1pdGF0aW9uJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncGllU2VyaWVzJykge1xuICAgICAgICB0cmFuc2xhdGlvbiA9ICdwaWVMaW1pdGF0aW9uJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc291cmNlU3RhdHVzID09PSAnZW1wdHknKSB7XG4gICAgICB0cmFuc2xhdGlvbiA9ICdkYXRhRW1wdHlUaXAnXG4gICAgfSBlbHNlIGlmIChzb3VyY2VTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgIHRyYW5zbGF0aW9uID0gJ3dpZGdldExvYWRFcnJvcidcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRyYW5zbGF0aW9uXG59XG5cbi8qKlxuICogR2V0IHRoZSB3YXJuaW5nIG1lc3NhZ2UgdHJhbnNsYXRpb24gb2Ygbm90LXJlYWR5IGRhdGEgc291cmNlLlxuICogQHBhcmFtIHVzZURhdGFTb3VyY2VcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXROb3RSZWFkeVRyYW5zbGF0aW9uID0gKFxuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sXG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2Vcbik6IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dID0+IHtcbiAgaWYgKCF1c2VEYXRhU291cmNlIHx8ICFkYXRhU291cmNlKSByZXR1cm4gbnVsbFxuICBjb25zdCBsYWJlbHMgPSBnZXREYXRhU291cmNlTGFiZWxzKHVzZURhdGFTb3VyY2UsIGRhdGFTb3VyY2UpXG4gIGNvbnN0IHRyYW5zbGF0aW9uID0gW1xuICAgICdvdXRwdXREYXRhSXNOb3RHZW5lcmF0ZWQnLFxuICAgIHtcbiAgICAgIG91dHB1dERzTGFiZWw6IGxhYmVscy5kYXRhU291cmNlTGFiZWwsXG4gICAgICBzb3VyY2VXaWRnZXROYW1lOiBsYWJlbHMud2lkZ2V0TGFiZWxcbiAgICB9XG4gIF0gYXMgW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cbiAgcmV0dXJuIHRyYW5zbGF0aW9uXG59XG5cbi8qKlxuICogR2V0IHRoZSBsYWJlbCBvZiB0aGUgd2lkZ2V0IHRoYXQgb3V0cHV0cyB0aGUgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSB1c2VEYXRhU291cmNlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXaWRnZXRMYWJlbEZyb21Vc2VEYXRhU291cmNlID0gKFxuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT5cbikgPT4ge1xuICBjb25zdCB3aWRnZXRJZCA9IGFwcENvbmZpZ1V0aWxzLmdldFdpZGdldElkQnlPdXRwdXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UpXG4gIGNvbnN0IHdpZGdldExhYmVsID1cbiAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbmZpZy53aWRnZXRzPy5bd2lkZ2V0SWRdPy5sYWJlbFxuXG4gIHJldHVybiB3aWRnZXRMYWJlbFxufVxuLyoqXG4gKiBHZXQgdGhlIGxhYmVsIG9mIHRoZSBkYXRhIHNvdXJjZSBhbmQgdGhlIGxhYmVsIG9mIHRoZSB3aWRnZXQgdGhhdCBvdXRwdXRzIHRoZSBkYXRhIHNvdXJjZVxuICogQHBhcmFtIHVzZURhdGFTb3VyY2VcbiAqIEBwYXJhbSBkYXRhU291cmNlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZUxhYmVscyA9IChcbiAgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LFxuICBkYXRhU291cmNlOiBEYXRhU291cmNlXG4pOiB7IGRhdGFTb3VyY2VMYWJlbDogc3RyaW5nLCB3aWRnZXRMYWJlbDogc3RyaW5nIH0gPT4ge1xuICBjb25zdCBkYXRhU291cmNlTGFiZWwgPSBkYXRhU291cmNlPy5nZXRMYWJlbCgpXG4gIGNvbnN0IHdpZGdldExhYmVsID0gZ2V0V2lkZ2V0TGFiZWxGcm9tVXNlRGF0YVNvdXJjZSh1c2VEYXRhU291cmNlKVxuICByZXR1cm4geyBkYXRhU291cmNlTGFiZWwsIHdpZGdldExhYmVsIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb3VyY2VSZWNvcmRzIHtcbiAgdmVyc2lvbjogbnVtYmVyXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXVxufVxuXG4vKipcbiAqIE1vbml0b3IgYW5kIGdldCB0aGUgbGF0ZXN0IHNvdXJjZSByZWNvcmRzXG4gKiBAcGFyYW0gZGF0YVNvdXJjZVxuICovXG5leHBvcnQgY29uc3QgdXNlU291cmNlUmVjb3JkcyA9IChkYXRhU291cmNlOiBEYXRhU291cmNlKTogU291cmNlUmVjb3JkcyA9PiB7XG4gIGNvbnN0IGRhdGFTb3VyY2VJZCA9IGRhdGFTb3VyY2U/LmlkXG4gIGNvbnN0IHNvdXJjZVZlcnNpb24gPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNJbmZvPy5bZGF0YVNvdXJjZUlkXT8uc291cmNlVmVyc2lvblxuICApXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlY29yZHMgPSBkYXRhU291cmNlPy5nZXRTb3VyY2VSZWNvcmRzKCkgPz8gKFtdIGFzIERhdGFSZWNvcmRbXSlcbiAgICByZXR1cm4geyByZWNvcmRzLCB2ZXJzaW9uOiBzb3VyY2VWZXJzaW9uIH1cbiAgfSwgW2RhdGFTb3VyY2UsIHNvdXJjZVZlcnNpb25dKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIHF1ZXJ5IGluIGNoYXJ0IGRhdGEgc291cmNlIGlzIHZhbGlkLlxuICogQHBhcmFtIGRhdGFTb3VyY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRRdWVyeSA9IChcbiAgdHlwZTogQ2hhcnRUeXBlcyxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXNcbik6IGJvb2xlYW4gPT4ge1xuICBpZiAoaXNTZXJpYWxTZXJpZXModHlwZSkgfHwgdHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICBpZiAocXVlcnkub3V0RmllbGRzKSB7XG4gICAgICByZXR1cm4gISEocXVlcnk/Lm91dEZpZWxkcz8uWzBdICYmIHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgISFxdWVyeT8uZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3M/LlswXSAmJlxuICAgICAgICAgICEhcXVlcnk/Lm91dFN0YXRpc3RpY3M/LlswXT8ub25TdGF0aXN0aWNGaWVsZFxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gISFxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5vblN0YXRpc3RpY0ZpZWxkXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY2F0dGVyU2VyaWVzJykge1xuICAgIHJldHVybiAhIXF1ZXJ5Py5vdXRGaWVsZHM/LlsxXVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoaXN0b2dyYW1TZXJpZXMnKSB7XG4gICAgcmV0dXJuICEhcXVlcnk/Lm91dEZpZWxkcz8uWzBdXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFydCBkYXRhIHNvdXJjZSBpcyB2YWxpZC5cbiAqIEBwYXJhbSBkYXRhU291cmNlXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkSVdlYkNoYXJ0RGF0YVNvdXJjZSA9IChcbiAgdHlwZTogQ2hhcnRUeXBlcyxcbiAgZGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PENoYXJ0RGF0YVNvdXJjZT5cbik6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gaXNWYWxpZFF1ZXJ5KHR5cGUsIGRhdGFTb3VyY2U/LnF1ZXJ5KVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIHdlYiBjaGFydCBjb25maWcgaXMgdmFsaWQuXG4gKiBAcGFyYW0gd2ViQ2hhcnRcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBpc1dlYkNoYXJ0VmFsaWQgPSAoXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxuKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHR5cGUgPSBnZXRTZXJpZXNUeXBlKHdlYkNoYXJ0Py5zZXJpZXMgYXMgYW55KVxuICBjb25zdCBzb3VyY2VWYWxpZCA9IGlzVmFsaWRJV2ViQ2hhcnREYXRhU291cmNlKHR5cGUsIHdlYkNoYXJ0Py5kYXRhU291cmNlKVxuICByZXR1cm4gc291cmNlVmFsaWRcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVdhcm5pbmdNZXNzYWdlID0gKFxuICBjaGFydFR5cGU6IENoYXJ0VHlwZXMsXG4gIHdlYkNoYXJ0VmFsaWQ6IGJvb2xlYW4sXG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPixcbiAgcmVjb3Jkc1N0YXR1czogUmVjb3Jkc1N0YXR1cyxcbiAgc2VyaWVzTGVuZ3RoOiBudW1iZXIsXG4gIGlzU2VsZWN0aW9uRW1wdHk/OiBib29sZWFuXG4pOiBbJ2Jhc2ljJyB8ICd0b29sdGlwJywgc3RyaW5nXSA9PiB7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPCdiYXNpYycgfCAndG9vbHRpcCc+KCd0b29sdGlwJylcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IG9yaWdpblNvdXJjZVN0YXR1cyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBJTVN0YXRlKSA9PlxuICAgICAgc3RhdGUuZGF0YVNvdXJjZXNJbmZvPy5bdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXT8uc3RhdHVzXG4gIClcbiAgY29uc3QgaW5zdGFuY2VTdGF0dXMgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogSU1TdGF0ZSkgPT5cbiAgICAgIHN0YXRlLmRhdGFTb3VyY2VzSW5mbz8uW3VzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZF0/Lmluc3RhbmNlU3RhdHVzXG4gIClcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oXG4gICAgamltdWNvcmVEZWZhdWx0TWVzc2FnZXMsXG4gICAgamltdURlZmF1bHRNZXNzYWdlcyxcbiAgICBkZWZhdWx0TWVzc2FnZXNcbiAgKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VHlwZShyZWNvcmRzU3RhdHVzID09PSAnZXhjZWVkJyA/ICdiYXNpYycgOiAndG9vbHRpcCcpXG4gICAgaWYgKFxuICAgICAgb3JpZ2luU291cmNlU3RhdHVzID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5ICYmXG4gICAgICBpbnN0YW5jZVN0YXR1cyA9PT0gRGF0YVNvdXJjZVN0YXR1cy5DcmVhdGVkXG4gICAgKSB7XG4gICAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKFxuICAgICAgICB1c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZFxuICAgICAgKVxuICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBnZXROb3RSZWFkeVRyYW5zbGF0aW9uKHVzZURhdGFTb3VyY2UsIGRhdGFTb3VyY2UpXG4gICAgICBpZiAodHJhbnNsYXRpb24pIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRyYW5zbGF0ZSguLi50cmFuc2xhdGlvbilcbiAgICAgICAgc2V0TWVzc2FnZShtZXNzYWdlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXdlYkNoYXJ0VmFsaWQpIHtcbiAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gZ2V0V2FybmluZ01lc3NhZ2VUcmFuc2xhdGlvbihcbiAgICAgICAgICBjaGFydFR5cGUsXG4gICAgICAgICAgc2VyaWVzTGVuZ3RoLFxuICAgICAgICAgIHJlY29yZHNTdGF0dXMsXG4gICAgICAgICAgaXNTZWxlY3Rpb25FbXB0eVxuICAgICAgICApXG4gICAgICAgIGlmICh0cmFuc2xhdGlvbikge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0cmFuc2xhdGUodHJhbnNsYXRpb24pXG4gICAgICAgICAgc2V0TWVzc2FnZShtZXNzYWdlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW1xuICAgIG9yaWdpblNvdXJjZVN0YXR1cyxcbiAgICBpbnN0YW5jZVN0YXR1cyxcbiAgICBjaGFydFR5cGUsXG4gICAgd2ViQ2hhcnRWYWxpZCxcbiAgICByZWNvcmRzU3RhdHVzLFxuICAgIGlzU2VsZWN0aW9uRW1wdHlcbiAgXSlcblxuICByZXR1cm4gW3R5cGUsIG1lc3NhZ2VdXG59XG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgVXNlRGF0YVNvdXJjZSwgaG9va3MsIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgZ2V0QXBwU3RvcmUsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIERhdGFTb3VyY2VTY2hlbWEgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgT3JpZ2luRGF0YVNvdXJjZU1hbmFnZXIgZnJvbSAnLi9vcmlnaW5hbCdcbmltcG9ydCBPdXRwdXRTb3VyY2VNYW5hZ2VyIGZyb20gJy4vb3V0cHV0J1xuaW1wb3J0IHsgdHlwZSBJV2ViQ2hhcnQgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyBpc0RhdGFTb3VyY2VSZWFkeSwgcXVlcnlGaWVsZFVuaXF1ZVZhbHVlcywgdXNlTWVtb2l6ZWRRdWVyeSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBnZXRTcGxpdEJ5RmllbGQgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTY2hlbWFGb3JTcGxpdEJ5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uJ1xuXG5pbnRlcmZhY2UgRmVhdHVyZUxheWVyRGF0YVNvdXJjZU1hbmFnZXJQb3JwcyB7XG4gIHdpZGdldElkOiBzdHJpbmdcbiAgd2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+XG4gIG91dHB1dERhdGFTb3VyY2VJZDogc3RyaW5nXG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPlxuICBvblNwbGl0VmFsdWVzQ2hhbmdlPzogKHZhbHVlczogeyBbZmllbGQ6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj4gfSkgPT4gdm9pZFxuICBvblNjaGVtYUNoYW5nZT86IChzY2hlbWE6IERhdGFTb3VyY2VTY2hlbWEpID0+IHZvaWRcbn1cblxuY29uc3QgRmVhdHVyZUxheWVyRGF0YVNvdXJjZU1hbmFnZXIgPSAocHJvcHM6IEZlYXR1cmVMYXllckRhdGFTb3VyY2VNYW5hZ2VyUG9ycHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZGdldElkLFxuICAgIHVzZURhdGFTb3VyY2UsXG4gICAgb3V0cHV0RGF0YVNvdXJjZUlkLFxuICAgIHdlYkNoYXJ0LFxuICAgIG9uU3BsaXRWYWx1ZXNDaGFuZ2UsXG4gICAgb25TY2hlbWFDaGFuZ2VcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBxdWVyeVZlcnNpb24sIGRhdGFTb3VyY2UsIG91dHB1dERhdGFTb3VyY2UgfSA9IHVzZUNoYXJ0UnVudGltZVN0YXRlKClcbiAgY29uc3QgW3NwbGl0QnlWYWx1ZXMsIHNldFNwbGl0QnlWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGU8eyBbZmllbGQ6IHN0cmluZ106IEFycmF5PHN0cmluZyB8IG51bWJlcj4gfT4oKVxuXG4gIGNvbnN0IGRhdGFTb3VyY2VJZCA9IHVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxuICBjb25zdCBzcGxpdEJ5RmllbGQgPSBnZXRTcGxpdEJ5RmllbGQod2ViQ2hhcnQ/LmRhdGFTb3VyY2U/LnF1ZXJ5Py53aGVyZSwgdHJ1ZSlcbiAgY29uc3Qgc2VyaWVzQ291bnQgPSB3ZWJDaGFydD8uc2VyaWVzPy5sZW5ndGhcbiAgY29uc3Qgc2VyaWVzUmVmID0gaG9va3MudXNlTGF0ZXN0KHdlYkNoYXJ0Py5zZXJpZXMpXG4gIGNvbnN0IHNwbGl0QnlGaWVsZFJlZiA9IGhvb2tzLnVzZUxhdGVzdChzcGxpdEJ5RmllbGQpXG4gIGNvbnN0IG9uU3BsaXRWYWx1ZXNDaGFuZ2VSZWYgPSBob29rcy51c2VMYXRlc3Qob25TcGxpdFZhbHVlc0NoYW5nZSlcbiAgY29uc3Qgb25TY2hlbWFDaGFuZ2VSZWYgPSBob29rcy51c2VMYXRlc3Qob25TY2hlbWFDaGFuZ2UpXG5cbiAgY29uc3QgcXVlcnkgPSB1c2VNZW1vaXplZFF1ZXJ5KHdlYkNoYXJ0Py5kYXRhU291cmNlPy5xdWVyeSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzcGxpdEJ5RmllbGQgJiYgaXNEYXRhU291cmNlUmVhZHkoZGF0YVNvdXJjZSkpIHtcbiAgICAgIHF1ZXJ5RmllbGRVbmlxdWVWYWx1ZXMoZGF0YVNvdXJjZSBhcyBRdWVyaWFibGVEYXRhU291cmNlLCBzcGxpdEJ5RmllbGQpLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICBzZXRTcGxpdEJ5VmFsdWVzKHsgW3NwbGl0QnlGaWVsZF06IHZhbHVlcyB9KVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtkYXRhU291cmNlLCBzcGxpdEJ5RmllbGQsIHF1ZXJ5VmVyc2lvbiwgb25TcGxpdFZhbHVlc0NoYW5nZVJlZl0pXG5cbiAgaG9va3MudXNlVXBkYXRlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YVNvdXJjZSAmJiBvdXRwdXREYXRhU291cmNlICYmIHNwbGl0QnlWYWx1ZXM/LltzcGxpdEJ5RmllbGRSZWYuY3VycmVudF0pIHsgLy9VcGRhdGUgc2NoZW1hIGZvciBzcGxpdC1ieVxuICAgICAgY29uc3QgZGF0YVNvdXJjZUlkID0gZGF0YVNvdXJjZS5pZFxuICAgICAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZUlkID0gb3V0cHV0RGF0YVNvdXJjZS5pZFxuICAgICAgY29uc3Qgc2NoZW1hID0gZ2V0RGF0YVNvdXJjZVNjaGVtYUZvclNwbGl0Qnkob3V0cHV0RGF0YVNvdXJjZSwgZGF0YVNvdXJjZUlkLCBxdWVyeSwgc2VyaWVzUmVmLmN1cnJlbnQsIHNwbGl0QnlWYWx1ZXNbc3BsaXRCeUZpZWxkUmVmLmN1cnJlbnRdKVxuICAgICAgbGV0IGRzSnNvbiA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnLmRhdGFTb3VyY2VzPy5bb3V0cHV0RGF0YVNvdXJjZUlkXVxuICAgICAgaWYgKCFkc0pzb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIG91dHB1dCBkYXRhIHNvdXJjZSBvZiAke2RhdGFTb3VyY2VJZH0gZG9lcyBub3QgZXhpc3RgKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgZHNKc29uID0gZHNKc29uLnNldCgnc2NoZW1hJywgc2NoZW1hKVxuICAgICAgRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVEYXRhU291cmNlQnlEYXRhU291cmNlSnNvbihvdXRwdXREYXRhU291cmNlLCBkc0pzb24pXG4gICAgICBvblNwbGl0VmFsdWVzQ2hhbmdlUmVmLmN1cnJlbnQoc3BsaXRCeVZhbHVlcylcbiAgICAgIG9uU2NoZW1hQ2hhbmdlUmVmLmN1cnJlbnQoc2NoZW1hKVxuICAgIH1cbiAgfSwgW2RhdGFTb3VyY2UsIG91dHB1dERhdGFTb3VyY2UsIHNwbGl0QnlWYWx1ZXMsIHF1ZXJ5LCBzZXJpZXNDb3VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE9yaWdpbkRhdGFTb3VyY2VNYW5hZ2VyXG4gICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICAgIC8+XG4gICAgICA8T3V0cHV0U291cmNlTWFuYWdlclxuICAgICAgICB3ZWJDaGFydD17d2ViQ2hhcnR9XG4gICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgZGF0YVNvdXJjZUlkPXtvdXRwdXREYXRhU291cmNlSWR9XG4gICAgICAgIG9yaWdpbmFsRGF0YVNvdXJjZUlkPXtkYXRhU291cmNlSWR9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZUxheWVyRGF0YVNvdXJjZU1hbmFnZXJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW5saW5lRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICcuL2lubGluZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICcuL2ZlYXR1cmUtbGF5ZXInXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgVXNlRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRFbGVtZW50TGltaXQsIGdldFNlcmllc1R5cGUgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlLCB0eXBlIElXZWJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IENoYXJ0TGltaXRzIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uL3NlcmlhbCdcbmltcG9ydCB7IGlzU2VyaWFsU2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVmYXVsdCdcbmltcG9ydCB7IHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgT3JpZ2luRGF0YVNvdXJjZU1hbmFnZXIgZnJvbSAnLi9vcmlnaW5hbCdcbmltcG9ydCBPdXRwdXRTb3VyY2VNYW5hZ2VyIGZyb20gJy4vb3V0cHV0J1xuaW1wb3J0IHVzZUZldGNoUmVjb3JkcyBmcm9tICcuL3VzZS1mZXRjaC1yZWNvcmRzJ1xuaW1wb3J0IHsgY29udmVydEJ5RmllbGRSZWNvcmRzLCBnZXRJbmxpbmVSZWNvcmRzbGltaXRlZCB9IGZyb20gJy4vdXRpbHMnXG5cbmludGVyZmFjZSBJbmxpbmVEYXRhU291cmNlTWFuYWdlclByb3BzIHtcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD5cbiAgb3V0cHV0RGF0YVNvdXJjZUlkOiBzdHJpbmdcbiAgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+XG4gIGNoYXJ0TGltaXRzPzogUGFydGlhbDxDaGFydEVsZW1lbnRMaW1pdD5cbn1cblxuY29uc3QgSW5saW5lRGF0YVNvdXJjZU1hbmFnZXIgPSAocHJvcHM6IElubGluZURhdGFTb3VyY2VNYW5hZ2VyUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZGdldElkLFxuICAgIHdlYkNoYXJ0LFxuICAgIG91dHB1dERhdGFTb3VyY2VJZCxcbiAgICB1c2VEYXRhU291cmNlLFxuICAgIGNoYXJ0TGltaXRzID0gQ2hhcnRMaW1pdHNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgdHlwZSA9IGdldFNlcmllc1R5cGUod2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnkpXG4gIGNvbnN0IHF1ZXJ5ID0gd2ViQ2hhcnQ/LmRhdGFTb3VyY2U/LnF1ZXJ5XG4gIGNvbnN0IHJlY29yZHNMaW1pdGVkID0gZ2V0SW5saW5lUmVjb3Jkc2xpbWl0ZWQod2ViQ2hhcnQ/LnNlcmllcywgY2hhcnRMaW1pdHMpXG4gIGNvbnN0IHsgcXVlcnlWZXJzaW9uIH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG5cbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICBjb25zdCBjYWxsYmFjayA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChjYXRlZ29yeVR5cGUgIT09IENhdGVnb3J5VHlwZS5CeUZpZWxkIHx8ICghaXNTZXJpYWxTZXJpZXModHlwZSkgJiYgdHlwZSAhPT0gJ3BpZVNlcmllcycpKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBjb252ZXJ0QnlGaWVsZFJlY29yZHNcbiAgfSwgW2NhdGVnb3J5VHlwZSwgdHlwZV0pXG5cbiAgdXNlRmV0Y2hSZWNvcmRzKHR5cGUsIHF1ZXJ5LCBxdWVyeVZlcnNpb24sIHJlY29yZHNMaW1pdGVkLCBjYWxsYmFjaylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T3JpZ2luRGF0YVNvdXJjZU1hbmFnZXJcbiAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgICAgLz5cbiAgICAgICA8T3V0cHV0U291cmNlTWFuYWdlclxuICAgICAgICB3ZWJDaGFydD17d2ViQ2hhcnR9XG4gICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgZGF0YVNvdXJjZUlkPXtvdXRwdXREYXRhU291cmNlSWR9XG4gICAgICAgIG9yaWdpbmFsRGF0YVNvdXJjZUlkPXt1c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWR9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5saW5lRGF0YVNvdXJjZU1hbmFnZXJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIERhdGFTb3VyY2UsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHR5cGUgUXVlcnlQYXJhbXMsIHR5cGUgVXNlRGF0YVNvdXJjZSwgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVEaXNwYXRjaCwgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcblxuaW50ZXJmYWNlIE9yaWdpbkRhdGFTb3VyY2VNYW5hZ2VyUHJvcHMge1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPlxuICBvblF1ZXJ5UmVxdWlyZWQ/OiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IE9yaWdpbkRhdGFTb3VyY2VNYW5hZ2VyID0gKHByb3BzOiBPcmlnaW5EYXRhU291cmNlTWFuYWdlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgd2lkZ2V0SWQsIHVzZURhdGFTb3VyY2UsIG9uUXVlcnlSZXF1aXJlZCB9ID0gcHJvcHNcbiAgY29uc3QgeyBxdWVyeVZlcnNpb24sIGRhdGFTb3VyY2UsIGZpbHRlciB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCBkYXRhU291cmNlUmVmID0gaG9va3MudXNlTGF0ZXN0KGRhdGFTb3VyY2UpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2goKVxuXG4gIC8vV2hlbiB0aGUgZmlsdGVyIGlzIG1vZGlmaWVkLCB1cGRhdGUgaXQgdG8gdGhlIGRhdGEgc291cmNlXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGFTb3VyY2VSZWYuY3VycmVudCkge1xuICAgICAgKGRhdGFTb3VyY2VSZWYuY3VycmVudCBhcyBRdWVyaWFibGVEYXRhU291cmNlKS51cGRhdGVRdWVyeVBhcmFtcyh7XG4gICAgICAgIHdoZXJlOiBmaWx0ZXI/LnNxbCA/PyAnMT0xJyxcbiAgICAgICAgc3FsRXhwcmVzc2lvbjogZmlsdGVyID8/IG51bGwgLy8gVE9ETzogdGVzdFxuICAgICAgfSBhcyBRdWVyeVBhcmFtcywgd2lkZ2V0SWQpXG4gICAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtmaWx0ZXJdKVxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZWQgPSAoZGF0YVNvdWNlOiBEYXRhU291cmNlKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0RBVEFfU09VUkNFJywgdmFsdWU6IGRhdGFTb3VjZSB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUXVlcnlSZXF1aXJlZCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfUVVFUllfVkVSU0lPTicsIHZhbHVlOiBxdWVyeVZlcnNpb24gKyAxIH0pXG4gICAgb25RdWVyeVJlcXVpcmVkPy4oKVxuICB9XG5cbiAgcmV0dXJuIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgb25EYXRhU291cmNlQ3JlYXRlZD17aGFuZGxlQ3JlYXRlZH1cbiAgICBvblF1ZXJ5UmVxdWlyZWQ9e2hhbmRsZVF1ZXJ5UmVxdWlyZWR9XG4gIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yaWdpbkRhdGFTb3VyY2VNYW5hZ2VyXG4iLCJpbXBvcnQgeyB0eXBlIERhdGFTb3VyY2UsIERhdGFTb3VyY2VDb21wb25lbnQsIEltbXV0YWJsZSwgdHlwZSBJbW11dGFibGVPYmplY3QsIFJlYWN0LCB0eXBlIFVzZURhdGFTb3VyY2UsIERhdGFTb3VyY2VTdGF0dXMsIHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSwgdHlwZSBTY2VuZUxheWVyRGF0YVNvdXJjZSwgRGF0YVNvdXJjZU1hbmFnZXIsIGRhdGFTb3VyY2VVdGlscywgaG9va3MsIGdldEFwcFN0b3JlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2gsIHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgeyB0eXBlIElXZWJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IGdldFNlcmllc1R5cGUgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IHVzZU1lbW9pemVkUXVlcnkgfSBmcm9tICcuL3V0aWxzJ1xuXG5pbnRlcmZhY2UgT3V0cHV0U291cmNlTWFuYWdlclByb3BzIHtcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICBvcmlnaW5hbERhdGFTb3VyY2VJZDogc3RyaW5nXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBkYXRhIHNvdXJjZSBpbnN0YW5jZSBpcyB2YWxpZCAod2hldGhlciB0aGUgY29ycmVzcG9uZGluZyBkYXRhIHNvdXJjZSBpcyBkZWxldGVkKVxuICogQHBhcmFtIGRhdGFTb3VyY2VcbiAqL1xuY29uc3QgaXNEYXRhU291cmNlVmFsaWQgPSAoZGF0YVNvdXJjZTogRGF0YVNvdXJjZSk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWRhdGFTb3VyY2UpIHJldHVybiBmYWxzZVxuICBjb25zdCBpbmZvID0gZGF0YVNvdXJjZS5nZXRJbmZvKClcbiAgcmV0dXJuIGluZm8gJiYgT2JqZWN0LmtleXMoaW5mbykubGVuZ3RoID4gMFxufVxuXG5jb25zdCBPdXRwdXRTb3VyY2VNYW5hZ2VyID0gKHByb3BzOiBPdXRwdXRTb3VyY2VNYW5hZ2VyUHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZGdldElkLFxuICAgIGRhdGFTb3VyY2VJZCxcbiAgICB3ZWJDaGFydFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IGRhdGFTb3VyY2UsIG91dHB1dERhdGFTb3VyY2UsIHJlY29yZHMgfSA9IHVzZUNoYXJ0UnVudGltZVN0YXRlKClcbiAgY29uc3QgcXVlcnkgPSB1c2VNZW1vaXplZFF1ZXJ5KHdlYkNoYXJ0Py5kYXRhU291cmNlPy5xdWVyeSlcblxuICBjb25zdCBzZXJpZXNSZWYgPSBob29rcy51c2VMYXRlc3Qod2ViQ2hhcnQ/LnNlcmllcylcblxuICBob29rcy51c2VVcGRhdGVFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhU291cmNlICYmIG91dHB1dERhdGFTb3VyY2UgJiYgcXVlcnkgJiYgIXF1ZXJ5LndoZXJlKSB7IC8vVXBkYXRlIHNjaGVtYSBmb3Igbm9uLXNwbGl0LWJ5XG4gICAgICBjb25zdCBvdXRwdXREYXRhU291cmNlSWQgPSBvdXRwdXREYXRhU291cmNlLmlkXG4gICAgICBjb25zdCBvcmlnaW5hbERhdGFTb3VyY2VJZCA9IGRhdGFTb3VyY2UuaWRcbiAgICAgIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllc1JlZi5jdXJyZW50IGFzIGFueSlcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGdldERhdGFTb3VyY2VTY2hlbWEob3V0cHV0RGF0YVNvdXJjZSwgb3JpZ2luYWxEYXRhU291cmNlSWQsIHF1ZXJ5LCBzZXJpZXNUeXBlKVxuICAgICAgbGV0IGRzSnNvbiA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnLmRhdGFTb3VyY2VzPy5bb3V0cHV0RGF0YVNvdXJjZUlkXVxuICAgICAgaWYgKCFkc0pzb24pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIG91dHB1dCBkYXRhIHNvdXJjZSBvZiAke291dHB1dERhdGFTb3VyY2VJZH0gZG9lcyBub3QgZXhpc3RgKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgZHNKc29uID0gZHNKc29uLnNldCgnc2NoZW1hJywgc2NoZW1hKVxuICAgICAgRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVEYXRhU291cmNlQnlEYXRhU291cmNlSnNvbihvdXRwdXREYXRhU291cmNlLCBkc0pzb24pXG4gICAgfVxuICB9LCBbZGF0YVNvdXJjZSwgb3V0cHV0RGF0YVNvdXJjZSwgcXVlcnldKVxuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2goKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0RhdGFTb3VyY2VWYWxpZChvdXRwdXREYXRhU291cmNlKSB8fCAhcmVjb3JkcykgcmV0dXJuXG4gICAgb3V0cHV0RGF0YVNvdXJjZS5zZXRTb3VyY2VSZWNvcmRzKHJlY29yZHMpXG4gICAgb3V0cHV0RGF0YVNvdXJjZS5zZXRTdGF0dXMoRGF0YVNvdXJjZVN0YXR1cy5VbmxvYWRlZClcbiAgICBvdXRwdXREYXRhU291cmNlLnNldENvdW50U3RhdHVzKERhdGFTb3VyY2VTdGF0dXMuVW5sb2FkZWQpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbb3V0cHV0RGF0YVNvdXJjZSwgcmVjb3Jkc10pXG5cbiAgY29uc3QgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGRhdGFTb3VyY2VJZCkge1xuICAgICAgcmV0dXJuIEltbXV0YWJsZSh7XG4gICAgICAgIGRhdGFTb3VyY2VJZDogZGF0YVNvdXJjZUlkLFxuICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBkYXRhU291cmNlSWRcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbZGF0YVNvdXJjZUlkXSlcblxuICBjb25zdCBoYW5kbGVDcmVhdGVkID0gKGRhdGFTb3VyY2U6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBTY2VuZUxheWVyRGF0YVNvdXJjZSkgPT4ge1xuICAgIHN5bmNPcmlnaW5Ec0luZm8oZGF0YVNvdXJjZSlcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfT1VUUFVUX0RBVEFfU09VUkNFJywgdmFsdWU6IGRhdGFTb3VyY2UgfSlcbiAgfVxuXG4gIGNvbnN0IHN5bmNPcmlnaW5Ec0luZm8gPSAoZGF0YVNvdXJjZTogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IFNjZW5lTGF5ZXJEYXRhU291cmNlKSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luRHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8ub3JpZ2luRGF0YVNvdXJjZXM/LlswXT8uZGF0YVNvdXJjZUlkKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgU2NlbmVMYXllckRhdGFTb3VyY2VcbiAgICBpZiAoIWRhdGFTb3VyY2UgfHwgIW9yaWdpbkRzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3luYyBvcmlnaW4gZGF0YSBzb3VyY2UgaW5mbyB0byBjaGFydCBvdXRwdXQgZGF0YSBzb3VyY2UuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBkYXRhU291cmNlLnNldExheWVyRGVmaW5pdGlvbihkYXRhU291cmNlVXRpbHMuZ2V0TGF5ZXJEZWZpbml0aW9uSW50ZXJzZWN0aW9uKG9yaWdpbkRzLmdldExheWVyRGVmaW5pdGlvbigpLCBkYXRhU291cmNlKSlcbiAgfVxuXG4gIHJldHVybiA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZUNyZWF0ZWR9XG4gIC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dHB1dFNvdXJjZU1hbmFnZXJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBEYXRhUmVjb3JkIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydFR5cGVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IGdldENhdGVnb3J5RmllbGQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24vc2VyaWFsJ1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2gsIHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgeyBnZXRTb3VyY2VSZWNvcmRzLCBpc0RhdGFTb3VyY2VSZWFkeSwgaXNWYWxpZFF1ZXJ5IH0gZnJvbSAnLi91dGlscydcblxuY29uc3QgZ2V0RGF0YVNvdXJjZVF1ZXJ5ID0gKFxuICB0eXBlOiBDaGFydFR5cGVzLFxuICBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuKSA9PiB7XG4gIGlmICghaXNWYWxpZFF1ZXJ5KHR5cGUsIHF1ZXJ5KSkgcmV0dXJuIG51bGxcbiAgLy8gUmVtb3ZlIGBvcmRlckJ5RmllbGRgIGZvciBgYnktZmllbGRgIG1vZGUgb2YgYHNlcmlhbGAgYW5kIGBwaWVgIGNoYXJ0XG4gIGlmIChxdWVyeS5vdXRTdGF0aXN0aWNzPy5sZW5ndGggJiYgIXF1ZXJ5Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzKSB7XG4gICAgcmV0dXJuIHF1ZXJ5LndpdGhvdXQoJ29yZGVyQnlGaWVsZHMnKVxuICB9XG4gIHJldHVybiBxdWVyeVxufVxuXG5jb25zdCB1c2VGZXRjaFJlY29yZHMgPSAoXG4gIHR5cGU6IENoYXJ0VHlwZXMsXG4gIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLFxuICB2ZXJzaW9uOiBudW1iZXIsXG4gIHJlY29yZHNMaW1pdGVkOiBudW1iZXIsXG4gIGNhbGxiYWNrPzogKHJlY29yZHM6IERhdGFSZWNvcmRbXSwgcXVlcnksIGRhdGFTb3VyY2UpID0+IERhdGFSZWNvcmRbXVxuKSA9PiB7XG4gIGNvbnN0IHsgZGF0YVNvdXJjZSwgb3V0cHV0RGF0YVNvdXJjZSB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNoYXJ0UnVudGltZURpc3BhdGNoKClcbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGdldENhdGVnb3J5RmllbGQocXVlcnkpXG4gIGNvbnN0IHBhcmFtcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0RGF0YVNvdXJjZVF1ZXJ5KHR5cGUsIHF1ZXJ5KSwgW3F1ZXJ5LCB0eXBlXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNEYXRhU291cmNlUmVhZHkoZGF0YVNvdXJjZSkgfHwgIW91dHB1dERhdGFTb3VyY2UgfHwgcGFyYW1zID09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfUkVDT1JEU19TVEFUVVMnLCB2YWx1ZTogJ2xvYWRpbmcnIH0pXG4gICAgOyhkYXRhU291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpLnF1ZXJ5KHBhcmFtcykudGhlbihcbiAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgbGV0IHJlY29yZHMgPSByZXN1bHQucmVjb3Jkc1xuICAgICAgICBpZiAoY2FsbGJhY2spIHJlY29yZHMgPSBjYWxsYmFjayhyZWNvcmRzLCBxdWVyeSwgZGF0YVNvdXJjZSkgPz8gW11cbiAgICAgICAgcmVjb3JkcyA9IGdldFNvdXJjZVJlY29yZHMocmVjb3Jkcywgb3V0cHV0RGF0YVNvdXJjZSwgY2F0ZWdvcnlGaWVsZClcblxuICAgICAgICBpZiAocmVjb3Jkcy5sZW5ndGggPiByZWNvcmRzTGltaXRlZCkge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9SRUNPUkRTJywgdmFsdWU6IHVuZGVmaW5lZCB9KVxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9SRUNPUkRTX1NUQVRVUycsIHZhbHVlOiAnZXhjZWVkJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChyZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9SRUNPUkRTX1NUQVRVUycsIHZhbHVlOiAnZW1wdHknIH0pXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFMnLCB2YWx1ZTogcmVjb3JkcyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFNfU1RBVFVTJywgdmFsdWU6ICdsb2FkZWQnIH0pXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9SRUNPUkRTJywgdmFsdWU6IHJlY29yZHMgfSlcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX1JFQ09SRFMnLCB2YWx1ZTogdW5kZWZpbmVkIH0pXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9SRUNPUkRTX1NUQVRVUycsIHZhbHVlOiAnZXJyb3InIH0pXG4gICAgICB9XG4gICAgKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2RhdGFTb3VyY2UsIG91dHB1dERhdGFTb3VyY2UsIHBhcmFtcywgdmVyc2lvbl0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoUmVjb3Jkc1xuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSwgdHlwZSBEYXRhUmVjb3JkLCB0eXBlIERhdGFTb3VyY2UsIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBJbW11dGFibGVBcnJheSwgRGF0YVNvdXJjZVN0YXR1cywgSW1tdXRhYmxlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCwgZ2V0U2VyaWVzVHlwZSwgdHlwZSBXZWJDaGFydERhdGFJdGVtLCBXZWJDaGFydFNvcnRPcmRlcktpbmRzLCB0eXBlIENoYXJ0VHlwZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgQnlGaWVsZFNlcmllc1gsIEJ5RmllbGRTZXJpZXNZIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0RmllbGRTY2hlbWEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24nXG5pbXBvcnQgeyBnZXRGaWVsZFVuaXF1ZVZhbHVlc1BhcmFtcywgcGFyc2VPcmRlckJ5RmllbGQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jb21tb24vc2VyaWFsJ1xuaW1wb3J0IHsgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWZhdWx0J1xuXG5leHBvcnQgY29uc3QgZ2V0U291cmNlUmVjb3JkcyA9IChyZWNvcmRzOiBEYXRhUmVjb3JkW10sIGRhdGFTb3VyY2U6IERhdGFTb3VyY2UsIGlucHV0Q2F0ZWdvcnlGaWVsZD86IHN0cmluZykgPT4ge1xuICBjb25zdCBpZEZpZWxkID0gZGF0YVNvdXJjZS5nZXRJZEZpZWxkKClcbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IGlucHV0Q2F0ZWdvcnlGaWVsZCB8fCBCeUZpZWxkU2VyaWVzWFxuICAvLyBGaWx0ZXIgb3V0IGRhdGEgd2l0aCBlbXB0eSBncm91cGluZyBmaWVsZFxuICBjb25zdCBmaWx0ZXJlZFJlY29yZHMgPSByZWNvcmRzPy5maWx0ZXIocmVjb3JkID0+IHJlY29yZD8uZ2V0RGF0YSgpPy5bY2F0ZWdvcnlGaWVsZF0gIT0gbnVsbClcbiAgY29uc3QgcnMgPSBmaWx0ZXJlZFJlY29yZHM/Lm1hcCgocmVjb3JkLCBpKSA9PiB7XG4gICAgaWYgKGRhdGFTb3VyY2UgJiYgcmVjb3JkLmRhdGFTb3VyY2UgIT09IGRhdGFTb3VyY2UpIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSByZWNvcmQuZ2V0RGF0YSgpXG4gICAgICAvLyBJZiBgaWRGaWVsZGAgdXNlZCBhcyB0aGUgY2F0ZWdvcnkgZmllbGQsIHVzZSBpdHMgb3JpZ2luYWwgdmFsdWVcbiAgICAgIGNvbnN0IG9iamVjdGlkID0gY2F0ZWdvcnlGaWVsZCA9PT0gaWRGaWVsZCA/IChhdHRyaWJ1dGVzW2lkRmllbGRdID8/IGkpIDogaVxuICAgICAgY29uc3QgZmVhdHVyZSA9IHsgYXR0cmlidXRlczogeyAuLi5hdHRyaWJ1dGVzLCBbaWRGaWVsZF06IG9iamVjdGlkIH0gfVxuICAgICAgcmV0dXJuIGRhdGFTb3VyY2UuYnVpbGRSZWNvcmQoZmVhdHVyZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlY29yZFxuICAgIH1cbiAgfSk/LmZpbHRlcihyZWNvcmQgPT4gISFyZWNvcmQpXG5cbiAgcmV0dXJuIHJzXG59XG5cbi8qKlxuICogR2V0IHRoZSBsaW1pdGVkIHJlY29yZHMgY291bnQuXG4gKiBAcGFyYW0gc2VyaWVzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRJbmxpbmVSZWNvcmRzbGltaXRlZCA9IChzZXJpZXMsIGNoYXJ0TGltaXRzOiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PikgPT4ge1xuICBsZXQgcmVjb3Jkc0xpbWl0ZWQgPSAxMDAwXG4gIGNvbnN0IHNlcmllc0xlbmd0aCA9IHNlcmllcz8ubGVuZ3RoXG5cbiAgaWYgKCFzZXJpZXNMZW5ndGgpIHJldHVybiByZWNvcmRzTGltaXRlZFxuXG4gIGNvbnN0IHR5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllcylcbiAgaWYgKGlzU2VyaWFsU2VyaWVzKHR5cGUpKSB7XG4gICAgaWYgKHNlcmllc0xlbmd0aCA9PT0gMSkge1xuICAgICAgcmVjb3Jkc0xpbWl0ZWQgPSBjaGFydExpbWl0cy5tYXhCYXJVbmlxdWVTZXJpZXNDb3VudFRvdGFsXG4gICAgfSBlbHNlIGlmIChzZXJpZXNMZW5ndGggPT09IDIpIHtcbiAgICAgIHJlY29yZHNMaW1pdGVkID0gY2hhcnRMaW1pdHMubWF4QmFyVHdvU2VyaWVzQ291bnRQZXJTZXJpZXNcbiAgICB9IGVsc2UgaWYgKHNlcmllc0xlbmd0aCA+IDIpIHtcbiAgICAgIHJlY29yZHNMaW1pdGVkID0gY2hhcnRMaW1pdHMubWF4QmFyVGhyZWVQbHVzU2VyaWVzQ291bnRQZXJTZXJpZXNcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICByZWNvcmRzTGltaXRlZCA9IGNoYXJ0TGltaXRzLm1heFBpZUNoYXJ0U2xpY2VDb3VudFRvdGFsXG4gIH1cblxuICByZXR1cm4gcmVjb3Jkc0xpbWl0ZWRcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRvIGZvcm1hdHRlZCBkYXRhIGZvciBgYnktZmllbGRgIG1vZGUuXG4gKiBJbiBvcmRlciBmb3IgdGhlIHNlcmllcyB0byBrbm93IHdoaWNoIGRhdGEgaXMgdG8gdXNlZCBpbiB0aGUgZ2xvYmFsIGNoYXJ0IGFycmF5ICh0aHJvdWdoIHZhbHVlWSksIG5lZWQgdG8gY29udmVydCB0aGUgZGF0YSxcbiAqIHRyYW5zZm9ybWluZyBkYXRhIGludG8gd2ViIGNoYXJ0IGRhdGEgZm9yIGBCeUZpZWxkYCBtb2RlLlxuICpcbiAqIEluIGNhc2Ugb2Ygbm9uLWFnZ3JlZ2F0ZWQgdHlwZSBiYXIgY2hhcnQsIHdlIHJlbmFtZSB0aGUgY2F0ZWdvcnkgbmFtZXMgYnkgYWRkaW5nIGEgc3VmZml4LCBpbiBvcmRlclxuICogdG8gYXZvaWQgbXVsdGlwbGUgaWRlbnRpY2FsIHZhbHVlcyAodGhleSBhcmUgc3dpdGNoZWQgYmFjayB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZSB3aGVuIGRpc3BsYXllZCkuXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0QnlGaWVsZFJlY29yZHMgPSAoaW5wdXRSZWNvcmRzOiBEYXRhUmVjb3JkW10sIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gIGNvbnN0IGlucHV0UmVjb3JkID0gaW5wdXRSZWNvcmRzPy5bMF1cbiAgaWYgKCFpbnB1dFJlY29yZCB8fCAhcXVlcnk/Lm91dFN0YXRpc3RpY3M/Lmxlbmd0aCkgcmV0dXJuXG5cbiAgY29uc3Qgb3JkZXJCeUZpZWxkcyA9IHF1ZXJ5Lm9yZGVyQnlGaWVsZHNcbiAgY29uc3Qgb3V0U3RhdGlzdGljcyA9IHF1ZXJ5Lm91dFN0YXRpc3RpY3NcbiAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IG91dFN0YXRpc3RpY3NcbiAgICA/Lm1hcCgoc3RhdGljcykgPT4gc3RhdGljcy5vblN0YXRpc3RpY0ZpZWxkKVxuICAgID8uZmlsdGVyKChmaWVsZCkgPT4gISFmaWVsZCk/LmFzTXV0YWJsZSgpXG5cbiAgY29uc3QgeCA9IEJ5RmllbGRTZXJpZXNYXG4gIGNvbnN0IHkgPSBCeUZpZWxkU2VyaWVzWVxuXG4gIGNvbnN0IGRhdGEgPVxuICAgIG51bWVyaWNGaWVsZHM/Lm1hcCgoZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXRSZWNvcmQuZ2V0RmllbGRWYWx1ZShmaWVsZClcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIFt4XTogZmllbGQsXG4gICAgICAgIFt5XTogdmFsdWUgPz8gMFxuICAgICAgfVxuICAgICAgY29uc3QgYWxpYXMgPSBnZXRGaWVsZFNjaGVtYShmaWVsZCwgZGF0YVNvdXJjZS5pZCk/LmFsaWFzID8/IGZpZWxkXG4gICAgICBpZiAoYWxpYXMgIT09IGZpZWxkKSB7XG4gICAgICAgIGl0ZW1beF0gPSBhbGlhc1xuICAgICAgICBpdGVtW3ggKyAnX29yaWdpbmFsJ10gPSBmaWVsZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pID8/IFtdXG5cbiAgc29ydFdlYkNoYXJ0RGF0YShkYXRhLCBvcmRlckJ5RmllbGRzKVxuICBjb25zdCByZWNvcmRzID0gZGF0YT8ubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHsgYXR0cmlidXRlczogaXRlbSB9XG4gICAgcmV0dXJuIGRhdGFTb3VyY2UuYnVpbGRSZWNvcmQoZmVhdHVyZSlcbiAgfSlcbiAgcmV0dXJuIHJlY29yZHNcbn1cblxuLyoqXG4gKiBTb3J0aW5nIGFuIGFycmF5IFdlYkNoYXJ0RGF0YUl0ZW0gZm9sbG93aW5nIHRoZSBvcmRlckJ5RmllbGRzIGluc3RydWN0aW9ucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvcnRXZWJDaGFydERhdGEgKFxuICBkYXRhOiBXZWJDaGFydERhdGFJdGVtW10sXG4gIG9yZGVyQnlGaWVsZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4sXG4gIGZvcmNlQXNjZW5kaW5nT3JkZXI6IGJvb2xlYW4gPSBmYWxzZVxuKTogdm9pZCB7XG4gIGlmIChkYXRhID09IG51bGwgfHwgb3JkZXJCeUZpZWxkcyA9PSBudWxsKSByZXR1cm5cbiAgZGF0YS5zb3J0KFxuICAgIChkYXRhSXRlbUE6IFdlYkNoYXJ0RGF0YUl0ZW0sIGRhdGFJdGVtQjogV2ViQ2hhcnREYXRhSXRlbSk6IG51bWJlciA9PiB7XG4gICAgICAvLyBEZWZhdWx0IHNvcnQgZGVjaXNpb24gPSAwIChlcXVhbCB2YWx1ZXMpXG4gICAgICBsZXQgc29ydERlY2lzaW9uID0gMFxuXG4gICAgICAvLyBVc2luZyBhbGwgdGhlIGZpZWxkcyBmcm9tIG9yZGVyQnlGaWVsZHMgdG8gcHJvY2VlZCB0byB0aGUgY29tcGFyaXNvblxuICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgb3JkZXJCeUZpZWxkcy5sZW5ndGg7IGlkeCArPSAxKSB7XG4gICAgICAgIC8vYG9yZGVyQnlGaWVsZGAgbXVzdCBoYXMgYEFTQ2Agb3IgYERFU0NgIGluIGl0LCBlLmcuICdmaWVsZCBBU0MnLCAnZmllbGQgbmFtZSBERVNDJ1xuICAgICAgICBjb25zdCBbZmllbGQsIHNvcnRPcmRlcl0gPSBwYXJzZU9yZGVyQnlGaWVsZChvcmRlckJ5RmllbGRzW2lkeF0pXG5cbiAgICAgICAgY29uc3QgZGVzY09yZGVyOiBib29sZWFuID1cbiAgICAgICAgICBzb3J0T3JkZXIgPT09IFdlYkNoYXJ0U29ydE9yZGVyS2luZHMuRGVzY2VuZGluZyAmJlxuICAgICAgICAgICFmb3JjZUFzY2VuZGluZ09yZGVyXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBzZXQgdGhlIHNvcnREZWNpc2lvbiBvbmx5IGlmIG9uZSBvZiB0aGUgdmFsdWVzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgb3RoZXIgb25lLlxuICAgICAgICAgKiBPdGhlcndpc2UgaXQgY29udGludWVzIHRvIHRoZSBuZXh0IHZhbHVlIGluIHRoZSBgb3JkZXJCeUZpZWxkc2AgYXJyYXkuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBmaXJzdEVudHJ5ID0gZGF0YUl0ZW1BW2ZpZWxkXVxuICAgICAgICBjb25zdCBzZWNvbmRFbnRyeSA9IGRhdGFJdGVtQltmaWVsZF1cblxuICAgICAgICAvLyBJbiBjYXNlIG9mIHN0cmluZyB2YWx1ZXMsIHdlIHBlcmZvcm0gYSBuYXR1cmFsIHNvcnQgdXNpbmcgdGhlIG5hdGl2ZSBgbG9jYWxlQ29tcGFyZWBcbiAgICAgICAgaWYgKHR5cGVvZiBmaXJzdEVudHJ5ID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kRW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc29ydERlY2lzaW9uID0gZmlyc3RFbnRyeS5sb2NhbGVDb21wYXJlKHNlY29uZEVudHJ5LCB1bmRlZmluZWQsIHtcbiAgICAgICAgICAgIG51bWVyaWM6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChkZXNjT3JkZXIpIHNvcnREZWNpc2lvbiAqPSAtMVxuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0RW50cnkgPT09IHVuZGVmaW5lZCB8fCBmaXJzdEVudHJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgc29ydERlY2lzaW9uID0gIWRlc2NPcmRlciA/IDEgOiAtMVxuICAgICAgICB9IGVsc2UgaWYgKHNlY29uZEVudHJ5ID09PSB1bmRlZmluZWQgfHwgc2Vjb25kRW50cnkgPT09IG51bGwpIHtcbiAgICAgICAgICBzb3J0RGVjaXNpb24gPSAhZGVzY09yZGVyID8gLTEgOiAxXG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RFbnRyeSA+IHNlY29uZEVudHJ5KSB7XG4gICAgICAgICAgc29ydERlY2lzaW9uID0gIWRlc2NPcmRlciA/IDEgOiAtMVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RFbnRyeSA8IHNlY29uZEVudHJ5KSB7XG4gICAgICAgICAgc29ydERlY2lzaW9uID0gIWRlc2NPcmRlciA/IC0xIDogMVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNvcnREZWNpc2lvblxuICAgIH1cbiAgKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIHF1ZXJ5IGluIGNoYXJ0IGRhdGEgc291cmNlIGlzIHZhbGlkLlxuICogQHBhcmFtIGRhdGFTb3VyY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRRdWVyeSA9IChcbiAgdHlwZTogQ2hhcnRUeXBlcyxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXNcbik6IGJvb2xlYW4gPT4ge1xuICBpZiAoaXNTZXJpYWxTZXJpZXModHlwZSkgfHwgdHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICBpZiAocXVlcnkub3V0RmllbGRzKSB7XG4gICAgICByZXR1cm4gISEocXVlcnk/Lm91dEZpZWxkcz8uWzBdICYmIHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gISFxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5vblN0YXRpc3RpY0ZpZWxkXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY2F0dGVyU2VyaWVzJykge1xuICAgIHJldHVybiAhIXF1ZXJ5Py5vdXRGaWVsZHM/LlsxXVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdoaXN0b2dyYW1TZXJpZXMnKSB7XG4gICAgcmV0dXJuICEhcXVlcnk/Lm91dEZpZWxkcz8uWzBdXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgZGF0YSBzb3VyY2UgaW5zdGFuY2UgaXMgdmFsaWQgKHdoZXRoZXIgdGhlIGNvcnJlc3BvbmRpbmcgZGF0YSBzb3VyY2UgaXMgZGVsZXRlZClcbiAqIEBwYXJhbSBkYXRhU291cmNlXG4gKi9cbmNvbnN0IGlzRGF0YVNvdXJjZVZhbGlkID0gKGRhdGFTb3VyY2U6IERhdGFTb3VyY2UpOiBib29sZWFuID0+IHtcbiAgaWYgKCFkYXRhU291cmNlKSByZXR1cm4gZmFsc2VcbiAgY29uc3QgaW5mbyA9IGRhdGFTb3VyY2UuZ2V0SW5mbygpXG4gIHJldHVybiBpbmZvICYmIE9iamVjdC5rZXlzKGluZm8pLmxlbmd0aCA+IDBcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgZGF0YSBzb3VyY2UgaW5zdGFuY2UgY2FuIGJlIHVzZWQgdG8gbG9hZCBkYXRhXG4gKiBAcGFyYW0gZGF0YVNvdXJjZVxuICovXG5leHBvcnQgY29uc3QgaXNEYXRhU291cmNlUmVhZHkgPSAoZGF0YVNvdXJjZTogRGF0YVNvdXJjZSk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWlzRGF0YVNvdXJjZVZhbGlkKGRhdGFTb3VyY2UpKSByZXR1cm4gZmFsc2VcbiAgY29uc3Qgc3RhdHVzID0gZGF0YVNvdXJjZS5nZXRTdGF0dXMoKVxuICAvL1RoZSBkYXRzIHNvdXJjZSBpcyByZWFkeSB0byB1c2VcbiAgcmV0dXJuIHN0YXR1cyAmJiBzdGF0dXMgIT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHlcbn1cblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RmllbGRVbmlxdWVWYWx1ZXMgPSBhc3luYyAoZGF0YVNvdXJjZTogUXVlcmlhYmxlRGF0YVNvdXJjZSwgZmllbGQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8bnVtYmVyIHwgc3RyaW5nPj4gPT4ge1xuICBjb25zdCBwYXJhbXMgPSBnZXRGaWVsZFVuaXF1ZVZhbHVlc1BhcmFtcyhmaWVsZCwgMTAxKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYXRhU291cmNlLnF1ZXJ5KHBhcmFtcylcbiAgY29uc3QgdmFsdWVzOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gcmVzdWx0LnJlY29yZHNcbiAgICAubWFwKChyZWNvcmQpOiBzdHJpbmcgfCBudW1iZXIgPT4gcmVjb3JkLmdldEZpZWxkVmFsdWUoZmllbGQpKVxuICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICByZXR1cm4gdmFsdWVzXG59XG5cbmNvbnN0IERlZmF1bHRRdWVyeSA9IEltbXV0YWJsZSh7fSkgYXMgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtc1xuZXhwb3J0IGNvbnN0IHVzZU1lbW9pemVkUXVlcnkgPSAoaW5wdXRRdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyA9IERlZmF1bHRRdWVyeSkgPT4ge1xuICBjb25zdCB7IGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzLCBvdXRGaWVsZHMsIG91dFN0YXRpc3RpY3MsIHdoZXJlIH0gPSBpbnB1dFF1ZXJ5XG4gIGNvbnN0IHF1ZXJ5ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zID0gSW1tdXRhYmxlKHt9KVxuICAgIGlmICh3aGVyZSkge1xuICAgICAgcXVlcnkgPSBxdWVyeS5zZXQoJ3doZXJlJywgd2hlcmUpXG4gICAgfVxuICAgIGlmIChncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcykge1xuICAgICAgcXVlcnkgPSBxdWVyeS5zZXQoJ2dyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzJywgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MpXG4gICAgfVxuICAgIGlmIChvdXRGaWVsZHMpIHtcbiAgICAgIHF1ZXJ5ID0gcXVlcnkuc2V0KCdvdXRGaWVsZHMnLCBvdXRGaWVsZHMpXG4gICAgfVxuICAgIGlmIChvdXRTdGF0aXN0aWNzKSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5LnNldCgnb3V0U3RhdGlzdGljcycsIG91dFN0YXRpc3RpY3MpXG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoID4gMCA/IHF1ZXJ5IDogbnVsbFxuICB9LCBbZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MsIG91dEZpZWxkcywgb3V0U3RhdGlzdGljcywgd2hlcmVdKVxuICByZXR1cm4gcXVlcnlcbn1cbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIElNU3RhdGUsIFJlYWN0UmVkdXgsIERhdGFTb3VyY2VTdGF0dXMsIENPTlNUQU5UUywgdHlwZSBEYXRhU291cmNlLCB0eXBlIFdpZGdldEluaXREcmFnQ2FsbGJhY2ssIGhvb2tzLCBJbW11dGFibGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIENoYXJ0RWxlbWVudExpbWl0LCBnZXRTZXJpZXNUeXBlLCBnZXRTcGxpdEJ5RmllbGQgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgdHlwZSBDaGFydFRvb2xzLCB0eXBlIElXZWJDaGFydCwgdHlwZSBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgV2l0aEZlYXR1cmVMYXllckNoYXJ0IGZyb20gJy4vd2l0aC1mZWF0dXJlLWxheWVyJ1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSdcbmltcG9ydCB7IGNyZWF0ZVJ1bnRpbWVTcGxpdEJ5U2VyaWVzLCBnZXRGaWVsZFR5cGUsIGdldFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbidcbmltcG9ydCB7IENoYXJ0Um9vdCwgaXNXZWJDaGFydFZhbGlkLCB1c2VXYXJuaW5nTWVzc2FnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJy4uL2RhdGEtc291cmNlJ1xuaW1wb3J0IFRvb2xzIGZyb20gJy4uL3Rvb2xzJ1xuXG5pbnRlcmZhY2UgV2ViRmVhdHVyZUxheWVyQ2hhcnRDb21wb25lbnRQb3JwcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB3aWRnZXRJZDogc3RyaW5nXG4gIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PlxuICB0b29sczogSW1tdXRhYmxlT2JqZWN0PENoYXJ0VG9vbHM+XG4gIGVuYWJsZURhdGFBY3Rpb246IGJvb2xlYW5cbiAgY2hhcnRMaW1pdHM/OiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PlxuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT5cbiAgZGVmYXVsdFRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlXG4gIG9uSW5pdERyYWdIYW5kbGVyOiBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrXG59XG5cbmNvbnN0IHVzZUNoYXJ0UmVuZGVyZWQgPSAoZGF0YVNvdXJjZUlkOiBzdHJpbmcsIHdlYkNoYXJ0OiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PikgPT4ge1xuICBjb25zdCBzdGF0dXMgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNJbmZvPy5bZGF0YVNvdXJjZUlkXT8uc3RhdHVzKVxuICBjb25zdCB2YWxpZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gaXNXZWJDaGFydFZhbGlkKHdlYkNoYXJ0KSwgW3dlYkNoYXJ0XSlcbiAgY29uc3QgcmVuZGVyID0gKHN0YXR1cyAmJiBzdGF0dXMgIT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpICYmIHZhbGlkXG4gIHJldHVybiB7IHZhbGlkLCByZW5kZXIgfVxufVxuXG4vL0NoZWNrIHdoZXRoZXIgdGhlIGN1cnJlbnQgZGF0YSBzb3VyY2UgaXMgc2VsZWN0ZWQgZmVhdHVyZXMgdmlldyBoYXMgbm8gc2VsZWN0aW9uXG5jb25zdCB1c2VFbXB0eVNlbGVjdGlvbkRhdGFTb3VyY2UgPSAoZGF0YVNvdXJjZT86IERhdGFTb3VyY2UpID0+IHtcbiAgY29uc3Qgc291cmNlVmVyc2lvbiA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0luZm8/LltkYXRhU291cmNlPy5pZF0/LnNvdXJjZVZlcnNpb24pXG4gIGNvbnN0IGlzU2VsZWN0aW9uRGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U/LmlzRGF0YVZpZXcgJiYgZGF0YVNvdXJjZT8uZGF0YVZpZXdJZCA9PT0gQ09OU1RBTlRTLlNFTEVDVElPTl9EQVRBX1ZJRVdfSURcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBjb25zdCBzZWxlY3Rpb25SZWNvcmRzRW1wdHkgPSBSZWFjdC51c2VNZW1vKCgpID0+IGlzU2VsZWN0aW9uRGF0YVNvdXJjZSAmJiAhZGF0YVNvdXJjZS5nZXRSZWNvcmRzKCkubGVuZ3RoLCBbaXNTZWxlY3Rpb25EYXRhU291cmNlLCBkYXRhU291cmNlLCBzb3VyY2VWZXJzaW9uXSlcbiAgY29uc3QgdXNlRW1wdHlTZWxlY3Rpb25WaWV3ID0gZGF0YVNvdXJjZT8udXNlTm9TZWxlY3Rpb25WaWV3KClcbiAgaWYgKHVzZUVtcHR5U2VsZWN0aW9uVmlldykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBzZWxlY3Rpb25SZWNvcmRzRW1wdHlcbn1cblxuY29uc3QgV2ViRmVhdHVyZUxheWVyQ2hhcnRDb21wb25lbnQgPSAocHJvcHM6IFdlYkZlYXR1cmVMYXllckNoYXJ0Q29tcG9uZW50UG9ycHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZGdldElkLFxuICAgIHRvb2xzOiBwcm9wVG9vbHMsXG4gICAgZW5hYmxlRGF0YUFjdGlvbiA9IHRydWUsXG4gICAgd2ViQ2hhcnQsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgdXNlRGF0YVNvdXJjZSxcbiAgICBkZWZhdWx0VGVtcGxhdGVUeXBlLFxuICAgIG9uSW5pdERyYWdIYW5kbGVyXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgcmVjb3Jkc1N0YXR1cywgZGF0YVNvdXJjZSB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuXG4gIGNvbnN0IGlzU2VsZWN0aW9uRGF0YVNvdXJjZUVtcHR5ID0gdXNlRW1wdHlTZWxlY3Rpb25EYXRhU291cmNlKGRhdGFTb3VyY2UpXG5cbiAgY29uc3QgdHlwZSA9IGdldFNlcmllc1R5cGUod2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnkpXG4gIGNvbnN0IHNob3dUb29scyA9IHByb3BUb29scz8uY3Vyc29yRW5hYmxlIHx8ICEhcHJvcFRvb2xzPy5maWx0ZXIgfHwgZW5hYmxlRGF0YUFjdGlvblxuICBjb25zdCB7IHZhbGlkLCByZW5kZXIgfSA9IHVzZUNoYXJ0UmVuZGVyZWQodXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkLCB3ZWJDaGFydClcblxuICBjb25zdCBzaG93UGxhY2VvbGRlciA9ICFyZW5kZXIgfHwgaXNTZWxlY3Rpb25EYXRhU291cmNlRW1wdHlcblxuICBjb25zdCB0ZW1wbGF0ZVR5cGUgPSBnZXRUZW1wbGF0ZVR5cGUod2ViQ2hhcnQpPy5bMV0gfHwgZGVmYXVsdFRlbXBsYXRlVHlwZSB8fCAnY29sdW1uJ1xuICBjb25zdCBbbWVzc2FnZVR5cGUsIG1lc3NhZ2VdID0gdXNlV2FybmluZ01lc3NhZ2UoXG4gICAgdHlwZSxcbiAgICB2YWxpZCxcbiAgICB1c2VEYXRhU291cmNlLFxuICAgIHJlY29yZHNTdGF0dXMsXG4gICAgd2ViQ2hhcnQ/LnNlcmllcz8ubGVuZ3RoID8/IDAsXG4gICAgaXNTZWxlY3Rpb25EYXRhU291cmNlRW1wdHlcbiAgKVxuXG4gIGNvbnN0IHRvb2xzID0gc2hvd1Rvb2xzXG4gICAgPyAoXG4gICAgICA8VG9vbHNcbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgdG9vbHM9e3Byb3BUb29sc31cbiAgICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgICBlbmFibGVEYXRhQWN0aW9uPXtlbmFibGVEYXRhQWN0aW9ufVxuICAgICAgLz5cbiAgICAgIClcbiAgICA6IG51bGxcbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRSb290XG4gICAgICB0ZW1wbGF0ZVR5cGU9e3RlbXBsYXRlVHlwZX1cbiAgICAgIG1lc3NhZ2VUeXBlPXttZXNzYWdlVHlwZX1cbiAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICBzaG93TG9hZGluZz17cmVjb3Jkc1N0YXR1cyA9PT0gJ2xvYWRpbmcnfVxuICAgICAgYmFja2dyb3VuZD17d2ViQ2hhcnQ/LmJhY2tncm91bmR9XG4gICAgICBjbGFzc05hbWU9J3dlYi1mZWF0dXJlLWxheWVyLWNoYXJ0J1xuICAgICAgc2hvd1BsYWNlaG9sZGVyPXtzaG93UGxhY2VvbGRlcn1cbiAgICAgIHRvb2xzPXt0b29sc31cbiAgICA+XG4gICAgICA8V2l0aEZlYXR1cmVMYXllckNoYXJ0XG4gICAgICAgIGNsYXNzTmFtZT0nd2ViLWNoYXJ0J1xuICAgICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICAgIHdlYkNoYXJ0PXt3ZWJDaGFydH1cbiAgICAgICAgY2hhcnRMaW1pdHM9e2NoYXJ0TGltaXRzfVxuICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlfVxuICAgICAgICBvbkluaXREcmFnSGFuZGxlcj17b25Jbml0RHJhZ0hhbmRsZXJ9XG4gICAgICAvPlxuICAgIDwvQ2hhcnRSb290PlxuICApXG59XG5cbmludGVyZmFjZSBXZWJGZWF0dXJlTGF5ZXJDaGFydFBvcnBzIGV4dGVuZHMgV2ViRmVhdHVyZUxheWVyQ2hhcnRDb21wb25lbnRQb3JwcyB7XG4gIG91dHB1dERhdGFTb3VyY2VJZDogc3RyaW5nXG59XG5cbmNvbnN0IFdlYkZlYXR1cmVMYXllckNoYXJ0ID0gKHByb3BzOiBXZWJGZWF0dXJlTGF5ZXJDaGFydFBvcnBzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3aWRnZXRJZCxcbiAgICB0b29scyxcbiAgICBlbmFibGVEYXRhQWN0aW9uID0gdHJ1ZSxcbiAgICB3ZWJDaGFydDogcHJvcFdlYkNoYXJ0LFxuICAgIGNoYXJ0TGltaXRzLFxuICAgIHVzZURhdGFTb3VyY2UsXG4gICAgb3V0cHV0RGF0YVNvdXJjZUlkLFxuICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGUsXG4gICAgb25Jbml0RHJhZ0hhbmRsZXJcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBjaGFydCB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCBkYXRhU291cmNlSWQgPSB1c2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcbiAgY29uc3Qgc3BsaXRCeUZpZWxkID0gZ2V0U3BsaXRCeUZpZWxkKHByb3BXZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnk/LndoZXJlLCB0cnVlKVxuICBjb25zdCBxdWVyeSA9IHByb3BXZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnlcblxuICBjb25zdCBbc3BsaXRCeVZhbHVlcywgc2V0U3BsaXRCeVZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZTx7IFtmaWVsZDogc3RyaW5nXTogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiB9PigpXG4gIGNvbnN0IHNwbGl0QnlGaWVsZFJlZiA9IGhvb2tzLnVzZUxhdGVzdChzcGxpdEJ5RmllbGQpXG5cbiAgY29uc3Qgc2VyaWVzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHNwbGl0QnlGaWVsZFJlZi5jdXJyZW50ICYmIHNwbGl0QnlWYWx1ZXM/LltzcGxpdEJ5RmllbGRSZWYuY3VycmVudF0pIHtcbiAgICAgIGNvbnN0IHNwbGl0QnlGaWVsZFR5cGUgPSBnZXRGaWVsZFR5cGUoc3BsaXRCeUZpZWxkUmVmLmN1cnJlbnQsIGRhdGFTb3VyY2VJZClcbiAgICAgIGNvbnN0IHNlcmllc1ZhbHVlcyA9IGNyZWF0ZVJ1bnRpbWVTcGxpdEJ5U2VyaWVzKHByb3BXZWJDaGFydC5zZXJpZXMsIHF1ZXJ5LCBzcGxpdEJ5RmllbGRUeXBlLCBzcGxpdEJ5VmFsdWVzW3NwbGl0QnlGaWVsZFJlZi5jdXJyZW50XSlcbiAgICAgIGNvbnN0IHNlcmllcyA9IEltbXV0YWJsZShzZXJpZXNWYWx1ZXMpXG4gICAgICByZXR1cm4gc2VyaWVzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcm9wV2ViQ2hhcnQ/LnNlcmllc1xuICAgIH1cbiAgfSwgW2RhdGFTb3VyY2VJZCwgc3BsaXRCeUZpZWxkUmVmLCBzcGxpdEJ5VmFsdWVzLCBwcm9wV2ViQ2hhcnQ/LnNlcmllcywgcXVlcnldKVxuXG4gIGNvbnN0IGhhbmRsZVNjaGVtYUNoYW5nZSA9ICgpID0+IHtcbiAgICBjaGFydD8ucmVmcmVzaChmYWxzZSwgZmFsc2UpXG4gIH1cblxuICBjb25zdCB3ZWJDaGFydCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBwcm9wV2ViQ2hhcnQ/LnNldCgnc2VyaWVzJywgc2VyaWVzKVxuICB9LCBbcHJvcFdlYkNoYXJ0LCBzZXJpZXNdKVxuXG4gIHJldHVybiAoPD5cbiAgICA8RmVhdHVyZUxheWVyRGF0YVNvdXJjZU1hbmFnZXJcbiAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgIHdlYkNoYXJ0PXtwcm9wV2ViQ2hhcnR9XG4gICAgICBvdXRwdXREYXRhU291cmNlSWQ9e291dHB1dERhdGFTb3VyY2VJZH1cbiAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgICBvblNwbGl0VmFsdWVzQ2hhbmdlPXtzZXRTcGxpdEJ5VmFsdWVzfVxuICAgICAgb25TY2hlbWFDaGFuZ2U9e2hhbmRsZVNjaGVtYUNoYW5nZX1cbiAgICAvPlxuICAgIDxXZWJGZWF0dXJlTGF5ZXJDaGFydENvbXBvbmVudFxuICAgICAgd2lkZ2V0SWQ9e3dpZGdldElkfVxuICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgY2hhcnRMaW1pdHM9e2NoYXJ0TGltaXRzfVxuICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICAgIGVuYWJsZURhdGFBY3Rpb249e2VuYWJsZURhdGFBY3Rpb259XG4gICAgICBvbkluaXREcmFnSGFuZGxlcj17b25Jbml0RHJhZ0hhbmRsZXJ9XG4gICAgICBkZWZhdWx0VGVtcGxhdGVUeXBlPXtkZWZhdWx0VGVtcGxhdGVUeXBlfVxuICAgIC8+XG4gIDwvPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViRmVhdHVyZUxheWVyQ2hhcnRcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIFdpZGdldEluaXREcmFnQ2FsbGJhY2ssIGxvYWRBcmNHSVNKU0FQSU1vZHVsZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRFbGVtZW50TGltaXQgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgdHlwZSBJV2ViQ2hhcnQgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5pbXBvcnQgeyB0eXBlIEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJ1xuXG5pbnRlcmZhY2UgV2l0aEZlYXR1cmVMYXllckNoYXJ0UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD5cbiAgdXNlRGF0YVNvdXJjZT86IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPlxuICBjaGFydExpbWl0cz86IFBhcnRpYWw8Q2hhcnRFbGVtZW50TGltaXQ+XG4gIG9uSW5pdERyYWdIYW5kbGVyOiBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrXG59XG5cbmZ1bmN0aW9uIFdpdGhGZWF0dXJlTGF5ZXJDaGFydCAocHJvcHM6IFdpdGhGZWF0dXJlTGF5ZXJDaGFydFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyB3ZWJDaGFydDogcHJvcFdlYkNoYXJ0IH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNoYXJ0UmVmID0gUmVhY3QudXNlUmVmPGFueT4oKVxuXG4gIGNvbnN0IGhhbmRsZU1hcFZpZXdDaGFuZ2UgPSBhc3luYyAobWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gbWFwVmlldy52aWV3XG5cbiAgICBhd2FpdCB2aWV3LndoZW4oKVxuXG4gICAgY29uc3QgbGF5ZXIgPSB2aWV3Lm1hcC5sYXllcnMudG9BcnJheSgpWzBdIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXJcbiAgICBjaGFydFJlZi5jdXJyZW50LmNvbmZpZyA9IGNvbmZpZy53ZWJDaGFydFxuICAgIGNoYXJ0UmVmLmN1cnJlbnQubGF5ZXIgPSBsYXllclxuICAgIGNoYXJ0UmVmLmN1cnJlbnQudmlldyA9IHZpZXdcbiAgfVxuXG4gIGNvbnN0IG1hcGlkID0gcHJvcFdlYkNoYXJ0Py5kYXRhU291cmNlPy5tYXBpZFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e21hcGlkfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e2hhbmRsZU1hcFZpZXdDaGFuZ2V9PjwvSmltdU1hcFZpZXdDb21wb25lbnQ+XG4gICAgICA8YXJjZ2lzLWNoYXJ0cy1iYXItY2hhcnQgcmVmPXtjaGFydFJlZn0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoRmVhdHVyZUxheWVyQ2hhcnRcbiIsImltcG9ydCB7IHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBSZWFjdCwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIFdpZGdldEluaXREcmFnQ2FsbGJhY2sgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBJbmxpbmVEYXRhU291cmNlTWFuYWdlciB9IGZyb20gJy4vZGF0YS1zb3VyY2UnXG5pbXBvcnQgV2ViSW5saW5lRGF0YUNoYXJ0IGZyb20gJy4vaW5saW5lLWRhdGEtY2hhcnQnXG5pbXBvcnQgV2ViRmVhdHVyZUxheWVyQ2hhcnQgZnJvbSAnLi9mZWF0dXJlLWxheWVyLWNoYXJ0J1xuaW1wb3J0IHsgdHlwZSBDaGFydFRvb2xzLCB0eXBlIElXZWJDaGFydCwgdHlwZSBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgeyBDaGFydExpbWl0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnXG5pbXBvcnQgeyB3aGV0aGVyVXNlSW5saW5lRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHdpZGdldElkOiBzdHJpbmdcbiAgd2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+XG4gIHRvb2xzOiBJbW11dGFibGVPYmplY3Q8Q2hhcnRUb29scz5cbiAgZW5hYmxlRGF0YUFjdGlvbjogYm9vbGVhblxuICBvdXRwdXREYXRhU291cmNlSWQ6IHN0cmluZ1xuICB1c2VEYXRhU291cmNlOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT5cbiAgZGVmYXVsdFRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlXG4gIG9uSW5pdERyYWdIYW5kbGVyOiBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrXG59XG5cbmNvbnN0IENoYXJ0ID0gKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgb3V0cHV0RGF0YVNvdXJjZUlkLCB1c2VEYXRhU291cmNlLCB0b29scywgd2ViQ2hhcnQsIHdpZGdldElkLCBkZWZhdWx0VGVtcGxhdGVUeXBlLCBlbmFibGVEYXRhQWN0aW9uLCBvbkluaXREcmFnSGFuZGxlciB9ID0gcHJvcHNcblxuICBjb25zdCB7IGRhdGFTb3VyY2UgfSA9IHVzZUNoYXJ0UnVudGltZVN0YXRlKClcbiAgY29uc3QgdXNlSW5saW5lRGF0YSA9IHdoZXRoZXJVc2VJbmxpbmVEYXRhU291cmNlKHdlYkNoYXJ0LCBkYXRhU291cmNlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VJbmxpbmVEYXRhICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SW5saW5lRGF0YVNvdXJjZU1hbmFnZXJcbiAgICAgICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgICAgIHdlYkNoYXJ0PXt3ZWJDaGFydH1cbiAgICAgICAgICAgIG91dHB1dERhdGFTb3VyY2VJZD17b3V0cHV0RGF0YVNvdXJjZUlkfVxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZT17dXNlRGF0YVNvdXJjZX1cbiAgICAgICAgICAgIGNoYXJ0TGltaXRzPXtDaGFydExpbWl0c31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxXZWJJbmxpbmVEYXRhQ2hhcnRcbiAgICAgICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgICAgICAgIHdlYkNoYXJ0PXt3ZWJDaGFydH1cbiAgICAgICAgICAgIGNoYXJ0TGltaXRzPXtDaGFydExpbWl0c31cbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgICAgICAgICBlbmFibGVEYXRhQWN0aW9uPXtlbmFibGVEYXRhQWN0aW9ufVxuICAgICAgICAgICAgb25Jbml0RHJhZ0hhbmRsZXI9e29uSW5pdERyYWdIYW5kbGVyfVxuICAgICAgICAgICAgZGVmYXVsdFRlbXBsYXRlVHlwZT17ZGVmYXVsdFRlbXBsYXRlVHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXVzZUlubGluZURhdGEgJiYgKDxXZWJGZWF0dXJlTGF5ZXJDaGFydFxuICAgICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICAgIHRvb2xzPXt0b29sc31cbiAgICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgICBjaGFydExpbWl0cz17Q2hhcnRMaW1pdHN9XG4gICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2V9XG4gICAgICAgIG91dHB1dERhdGFTb3VyY2VJZD17b3V0cHV0RGF0YVNvdXJjZUlkfVxuICAgICAgICBlbmFibGVEYXRhQWN0aW9uPXtlbmFibGVEYXRhQWN0aW9ufVxuICAgICAgICBvbkluaXREcmFnSGFuZGxlcj17b25Jbml0RHJhZ0hhbmRsZXJ9XG4gICAgICAgIGRlZmF1bHRUZW1wbGF0ZVR5cGU9e2RlZmF1bHRUZW1wbGF0ZVR5cGV9XG4gICAgICAvPil9XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IENoYXJ0XG4iLCJpbXBvcnQgeyB0eXBlIERhdGFSZWNvcmQsIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBJbnRsU2hhcGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG4vKipcbiAqIENvbnZlcnQgdG8gZm9ybWF0dGVkIGFuZCBjb2xvcmluZyBkYXRhIGZvciBgYnktZ3JvdXBgIG1vZGUuXG4gKiBAcGFyYW0gcmVjb3Jkc1xuICogQHBhcmFtIHhcbiAqIEBwYXJhbSBpbnRsXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0R3JvdXBEYXRhID0gKFxuICByZWNvcmRzOiBEYXRhUmVjb3JkW10sXG4gIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLFxuICBpbnRsOiBJbnRsU2hhcGVcbik6IGFueVtdID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgY29uc3QgeCA9IHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdXG4gIHJlY29yZHM/LmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZWNvcmQuZ2V0RGF0YSgpXG4gICAgLy8gTnVsbCBjYXRlZ29yeSB2YWx1ZSB3aWxsIGFmZmVjdCB0aGUgY2FsY3VsYXRpb24gb2YgdmFsdWUgYXhpcyByYW5nZSxcbiAgICAvLyBhbmQgaXQgd2lsbCBub3QgYmUgZGlzcGxheWVkIG9uIHRoZSBjaGFydCBieSBkZWZhdWx0LCBzbyB3ZSBmaWx0ZXIgaXQgb3V0LiAjNzYwN1xuICAgIGxldCBpdGVtID0geyAuLi5kYXRhIH1cbiAgICBpZiAoeCAmJiBpdGVtW3hdID09IG51bGwpIHJldHVyblxuICAgIC8vTm93IG9ubHkgZm9ybWF0dGVkIHRoZSB2YWx1ZSBvZiB4XG4gICAgaXRlbSA9IGZvcm1hdEZpZWxkVmFsdWUoaXRlbSwgcmVjb3JkLCB4LCBpbnRsKVxuICAgIHJlc3VsdC5wdXNoKGl0ZW0pXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBGb3JtYXQgdGhlIHNwZWNpZmljIGZpZWxkIHZhbHVlIGJ5IGl0cyByZWNvcmQuXG4gKiBAcGFyYW0gaXRlbVxuICogQHBhcmFtIHJlY29yZFxuICogQHBhcmFtIGZpZWxkXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtYXRGaWVsZFZhbHVlID0gKFxuICBpdGVtOiBXZWJDaGFydERhdGFJdGVtLFxuICByZWNvcmQ6IERhdGFSZWNvcmQsXG4gIGZpZWxkOiBzdHJpbmcsXG4gIGludGxcbikgPT4ge1xuICBjb25zdCB4VmFsdWUgPSByZWNvcmQuZ2V0RmllbGRWYWx1ZShmaWVsZClcbiAgY29uc3QgeEZvcm1hdHRlZFZhbHVlID0gcmVjb3JkLmdldEZvcm1hdHRlZEZpZWxkVmFsdWUoZmllbGQsIGludGwpXG4gIGlmICh4Rm9ybWF0dGVkVmFsdWUgIT09IHhWYWx1ZSkge1xuICAgIGl0ZW1bZmllbGRdID0geEZvcm1hdHRlZFZhbHVlXG4gICAgaXRlbVtmaWVsZCArICdfb3JpZ2luYWwnXSA9IHhWYWx1ZVxuICB9XG4gIHJldHVybiBpdGVtXG59XG4iLCJpbXBvcnQgeyB0eXBlIERhdGFSZWNvcmQgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBwcm9jZXNzSW5saW5lSGlzdG9ncmFtUmF3RGF0YSwgdHlwZSBXZWJDaGFydEhpc3RvZ3JhbURhdGFJdGVtLCB0eXBlIFdlYkNoYXJ0SGlzdG9ncmFtU2VyaWVzLCB0eXBlIFdlYkNoYXJ0U2VyaWVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcblxuY29uc3QgZ2V0SW5saW5lSGlzdG9ncmFtRGF0YSA9IChcbiAgcmVjb3JkczogRGF0YVJlY29yZFtdLFxuICBzZXJpZXM6IFdlYkNoYXJ0U2VyaWVzW11cbikgPT4ge1xuICBjb25zdCByYXdEYXRhID0gcmVjb3Jkcz8ubWFwKChyZWNvcmQpID0+IHJlY29yZC5nZXREYXRhKCkpXG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gcHJvY2Vzc0lubGluZUhpc3RvZ3JhbVJhd0RhdGEoXG4gICAgcmF3RGF0YSxcbiAgICBzZXJpZXNbMF0gYXMgV2ViQ2hhcnRIaXN0b2dyYW1TZXJpZXNcbiAgKVxuICBsZXQgc3RhdGlzdGljID0gbnVsbFxuICBsZXQgYmlucyA9IFtdXG4gIGlmICh0cmFuc2Zvcm1lZC52YWxpZCkge1xuICAgIGNvbnN0IGRhdGEgPSB0cmFuc2Zvcm1lZC5kYXRhIGFzIFdlYkNoYXJ0SGlzdG9ncmFtRGF0YUl0ZW1cbiAgICBiaW5zID0gZGF0YS5iaW5zXG4gICAgY29uc3QgeyBtZWFuLCBzdGRkZXYsIG1lZGlhbiwgbWluLCBtYXggfSA9IGRhdGFcbiAgICBzdGF0aXN0aWMgPSB7IG1lYW4sIHN0ZGRldiwgbWVkaWFuLCBtaW4sIG1heCB9XG4gIH1cbiAgcmV0dXJuIHsgc3RhdGlzdGljLCBiaW5zIH1cbn1cblxuY29uc3QgY29udmVydFJlY29yZHNUb0lubGluZURhdGEgPSAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgc2VyaWVzOiBXZWJDaGFydFNlcmllc1tdXG4pOiBXZWJDaGFydEhpc3RvZ3JhbURhdGFJdGVtID0+IHtcbiAgY29uc3QgeyBzdGF0aXN0aWMsIGJpbnMgfSA9IGdldElubGluZUhpc3RvZ3JhbURhdGEocmVjb3Jkcywgc2VyaWVzKVxuICBpZiAoIWJpbnM/Lmxlbmd0aCkgcmV0dXJuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgLi4uc3RhdGlzdGljLFxuICAgIGJpbnNcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YVxuIiwiaW1wb3J0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9yU2VyaWFsIGZyb20gJy4vc2VyaWFsJ1xuaW1wb3J0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9yUGllIGZyb20gJy4vcGllJ1xuaW1wb3J0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9yU2NhdHRlciBmcm9tICcuL3NjYXR0ZXInXG5pbXBvcnQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFGb3JIaXN0b2dyYW0gZnJvbSAnLi9oaXN0b2dyYW0nXG5pbXBvcnQgeyB0eXBlIENoYXJ0VHlwZXMsIHR5cGUgSW5saW5lRGF0YSwgdHlwZSBXZWJDaGFydERhdGFJdGVtLCB0eXBlIFdlYkNoYXJ0RGF0YVR5cGVzLCB0eXBlIFdlYkNoYXJ0UGllQ2hhcnRTbGljZSwgdHlwZSBXZWJDaGFydFNlcmllcyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyB0eXBlIERhdGFSZWNvcmQsIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJbnRsU2hhcGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBpc1NlcmlhbFNlcmllcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2RlZmF1bHQnXG5cbi8qKlxuICogSW4gb3JkZXIgZm9yIHRoZSBzZXJpZXMgdG8ga25vdyB3aGljaCBkYXRhIGlzIHRvIHVzZWQgZm9yIHdoaWNoIHNlcmllcyxcbiAqIHdlIHNob3VsZCByZXBsYWNlIHRoZSBkZWZhdWx0IHN0YXRpc3RpYyBmaWVsZCBuYW1lIGJ5IGl0cyB2YWx1ZSBhcyBkZWZpbmVkIGluIHRoZSBzZXJpZXMoc2VyaWUueSlcbiAqL1xuY29uc3QgY29udmVydFJlY29yZHNUb0lubGluZURhdGEgPSAoXG4gIHR5cGU6IENoYXJ0VHlwZXMsXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHNlcmllczogV2ViQ2hhcnRTZXJpZXNbXSxcbiAgaW50bDogSW50bFNoYXBlXG4pOiBbSW5saW5lRGF0YTxXZWJDaGFydERhdGFUeXBlcz4sIFdlYkNoYXJ0RGF0YUl0ZW1bXSwgSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRQaWVDaGFydFNsaWNlPj9dID0+IHtcbiAgbGV0IHJhd0RhdGEgPSBudWxsXG4gIGxldCBpbnB1dERhdGEgPSBudWxsXG4gIGxldCBwcm9jZXNzZWQgPSB0cnVlXG4gIGlmIChpc1NlcmlhbFNlcmllcyh0eXBlKSkge1xuICAgIHJhd0RhdGEgPSBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YUZvclNlcmlhbChcbiAgICAgIHJlY29yZHMsXG4gICAgICBxdWVyeSxcbiAgICAgIGludGxcbiAgICApID8/IFtdXG4gICAgaW5wdXREYXRhID0geyBkYXRhSXRlbXM6IHJhd0RhdGEgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwaWVTZXJpZXMnKSB7XG4gICAgcmF3RGF0YSA9IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9yUGllKFxuICAgICAgcmVjb3JkcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgaW50bFxuICAgICkgPz8gW11cbiAgICBpbnB1dERhdGEgPSB7IGRhdGFJdGVtczogcmF3RGF0YSB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjYXR0ZXJTZXJpZXMnKSB7XG4gICAgcmF3RGF0YSA9IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhRm9yU2NhdHRlcihyZWNvcmRzLCBxdWVyeSkgPz8gW11cbiAgICBpbnB1dERhdGEgPSB7IGRhdGFJdGVtczogcmF3RGF0YSB9XG4gICAgcHJvY2Vzc2VkID0gZmFsc2VcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnaGlzdG9ncmFtU2VyaWVzJykge1xuICAgIGNvbnN0IGRhdGEgPSBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YUZvckhpc3RvZ3JhbShyZWNvcmRzLCBzZXJpZXMpXG4gICAgcmF3RGF0YSA9IGRhdGE/LmJpbnMgPz8gW11cbiAgICBpbnB1dERhdGEgPSBkYXRhXG4gIH1cbiAgcmV0dXJuIFt7IGlucHV0RGF0YSwgcHJvY2Vzc2VkIH0sIHJhd0RhdGFdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhXG4iLCJpbXBvcnQgeyB0eXBlIERhdGFSZWNvcmQsIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBJbnRsU2hhcGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29tbW9uL3NlcmlhbCdcbmltcG9ydCB7IGNvbnZlcnRHcm91cERhdGEgfSBmcm9tICcuL2NvbW1vbidcblxuY29uc3QgY29udmVydFJlY29yZHNUb0lubGluZURhdGEgPSAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIGludGw6IEludGxTaGFwZVxuKTogV2ViQ2hhcnREYXRhSXRlbVtdID0+IHtcbiAgbGV0IGl0ZW1zID0gW11cbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICBpZiAoY2F0ZWdvcnlUeXBlID09PSBDYXRlZ29yeVR5cGUuQnlHcm91cCkge1xuICAgIGl0ZW1zID0gY29udmVydEdyb3VwRGF0YShyZWNvcmRzLCBxdWVyeSwgaW50bClcbiAgfSBlbHNlIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUZpZWxkKSB7XG4gICAgaXRlbXMgPSByZWNvcmRzPy5tYXAocmVjb3JkID0+IHJlY29yZC5nZXREYXRhKCkpXG4gIH1cblxuICByZXR1cm4gaXRlbXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFcbiIsImltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBXZWJDaGFydERhdGFJdGVtIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcblxuY29uc3QgY29udmVydFJlY29yZHNUb0lubGluZURhdGEgPSAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXNcbik6IFdlYkNoYXJ0RGF0YUl0ZW1bXSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGNvbnN0IHggPSBxdWVyeT8ub3V0RmllbGRzPy5bMF1cbiAgcmVjb3Jkcz8uZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlY29yZC5nZXREYXRhKClcbiAgICAvLyBOdWxsIGNhdGVnb3J5IHZhbHVlIHdpbGwgYWZmZWN0IHRoZSBjYWxjdWxhdGlvbiBvZiB2YWx1ZSBheGlzIHJhbmdlLFxuICAgIC8vIGFuZCBpdCB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgb24gdGhlIGNoYXJ0IGJ5IGRlZmF1bHQsIHNvIHdlIGZpbHRlciBpdCBvdXQuICM3NjA3XG4gICAgY29uc3QgaXRlbSA9IHsgLi4uZGF0YSB9XG4gICAgaWYgKHggJiYgaXRlbVt4XSA9PSBudWxsKSByZXR1cm5cbiAgICByZXN1bHQucHVzaChpdGVtKVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhXG4iLCJpbXBvcnQgeyB0eXBlIERhdGFSZWNvcmQsIHR5cGUgSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgdHlwZSBJbnRsU2hhcGUgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0RGF0YUl0ZW0gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY29tbW9uL3NlcmlhbCdcbmltcG9ydCB7IGNvbnZlcnRHcm91cERhdGEgfSBmcm9tICcuL2NvbW1vbidcblxuY29uc3QgY29udmVydFJlY29yZHNUb0lubGluZURhdGEgPSAoXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXSxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIGludGw6IEludGxTaGFwZVxuKTogV2ViQ2hhcnREYXRhSXRlbVtdID0+IHtcbiAgbGV0IGl0ZW1zID0gW11cbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICBpZiAoY2F0ZWdvcnlUeXBlID09PSBDYXRlZ29yeVR5cGUuQnlHcm91cCkge1xuICAgIGl0ZW1zID0gY29udmVydEdyb3VwRGF0YShyZWNvcmRzLCBxdWVyeSwgaW50bClcbiAgfSBlbHNlIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUZpZWxkKSB7XG4gICAgaXRlbXMgPSByZWNvcmRzPy5tYXAocmVjb3JkID0+IHJlY29yZC5nZXREYXRhKCkpXG4gIH1cblxuICByZXR1cm4gaXRlbXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFJlY29yZHNUb0lubGluZURhdGFcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIElNU3RhdGUsIFJlYWN0UmVkdXgsIERhdGFTb3VyY2VTdGF0dXMsIHR5cGUgRGF0YVJlY29yZCwgdHlwZSBXaWRnZXRJbml0RHJhZ0NhbGxiYWNrIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydEVsZW1lbnRMaW1pdCwgZ2V0U2VyaWVzVHlwZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyB0eXBlIENoYXJ0VG9vbHMsIHR5cGUgSVdlYkNoYXJ0LCB0eXBlIFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBUb29scyBmcm9tICcuLi90b29scydcbmltcG9ydCBXaXRoSW5saW5lRGF0YUNoYXJ0IGZyb20gJy4vd2l0aC1pbmxpbmUtZGF0YSdcbmltcG9ydCB7IENoYXJ0Um9vdCwgaXNXZWJDaGFydFZhbGlkLCB1c2VXYXJuaW5nTWVzc2FnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uJ1xuXG5pbnRlcmZhY2UgV2ViSW5saW5lRGF0YUNoYXJ0UG9ycHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD5cbiAgdG9vbHM6IEltbXV0YWJsZU9iamVjdDxDaGFydFRvb2xzPlxuICBlbmFibGVEYXRhQWN0aW9uOiBib29sZWFuXG4gIGNoYXJ0TGltaXRzPzogUGFydGlhbDxDaGFydEVsZW1lbnRMaW1pdD5cbiAgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+XG4gIGRlZmF1bHRUZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZVxuICBvbkluaXREcmFnSGFuZGxlcjogV2lkZ2V0SW5pdERyYWdDYWxsYmFja1xufVxuXG5jb25zdCB1c2VDaGFydFJlbmRlcmVkID0gKGRhdGFTb3VyY2VJZDogc3RyaW5nLCB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD4sIHJlY29yZHM6IERhdGFSZWNvcmRbXSkgPT4ge1xuICBjb25zdCBzdGF0dXMgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNJbmZvPy5bZGF0YVNvdXJjZUlkXT8uc3RhdHVzKVxuICBjb25zdCB2YWxpZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gaXNXZWJDaGFydFZhbGlkKHdlYkNoYXJ0KSwgW3dlYkNoYXJ0XSlcbiAgY29uc3QgcmVuZGVyID0gKHN0YXR1cyAmJiBzdGF0dXMgIT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpICYmIHZhbGlkICYmICEhcmVjb3Jkcz8ubGVuZ3RoXG4gIHJldHVybiB7IHZhbGlkLCByZW5kZXIgfVxufVxuXG5jb25zdCBXZWJJbmxpbmVEYXRhQ2hhcnQgPSAocHJvcHM6IFdlYklubGluZURhdGFDaGFydFBvcnBzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3aWRnZXRJZCxcbiAgICB0b29sczogcHJvcFRvb2xzLFxuICAgIGVuYWJsZURhdGFBY3Rpb24gPSB0cnVlLFxuICAgIHdlYkNoYXJ0LFxuICAgIGNoYXJ0TGltaXRzLFxuICAgIHVzZURhdGFTb3VyY2UsXG4gICAgZGVmYXVsdFRlbXBsYXRlVHlwZSxcbiAgICBvbkluaXREcmFnSGFuZGxlclxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IHJlY29yZHNTdGF0dXMsIHJlY29yZHMgfSA9IHVzZUNoYXJ0UnVudGltZVN0YXRlKClcbiAgY29uc3QgdHlwZSA9IGdldFNlcmllc1R5cGUod2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnkpXG4gIGNvbnN0IHNob3dUb29scyA9IHByb3BUb29scz8uY3Vyc29yRW5hYmxlIHx8ICEhcHJvcFRvb2xzPy5maWx0ZXIgfHwgZW5hYmxlRGF0YUFjdGlvblxuICBjb25zdCB7IHZhbGlkLCByZW5kZXIgfSA9IHVzZUNoYXJ0UmVuZGVyZWQoXG4gICAgdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkLFxuICAgIHdlYkNoYXJ0LFxuICAgIHJlY29yZHNcbiAgKVxuXG4gIGNvbnN0IHRlbXBsYXRlVHlwZSA9XG4gICAgZ2V0VGVtcGxhdGVUeXBlKHdlYkNoYXJ0KT8uWzFdIHx8IGRlZmF1bHRUZW1wbGF0ZVR5cGUgfHwgJ2NvbHVtbidcbiAgY29uc3QgW21lc3NhZ2VUeXBlLCBtZXNzYWdlXSA9IHVzZVdhcm5pbmdNZXNzYWdlKFxuICAgIHR5cGUsXG4gICAgdmFsaWQsXG4gICAgdXNlRGF0YVNvdXJjZSxcbiAgICByZWNvcmRzU3RhdHVzLFxuICAgIHdlYkNoYXJ0Py5zZXJpZXM/Lmxlbmd0aCA/PyAwXG4gIClcblxuICBjb25zdCB0b29scyA9IHNob3dUb29sc1xuICAgID8gKFxuICAgIDxUb29sc1xuICAgICAgdHlwZT17dHlwZX1cbiAgICAgIHRvb2xzPXtwcm9wVG9vbHN9XG4gICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICBlbmFibGVEYXRhQWN0aW9uPXtlbmFibGVEYXRhQWN0aW9ufVxuICAgIC8+XG4gICAgICApXG4gICAgOiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRSb290XG4gICAgICB0ZW1wbGF0ZVR5cGU9e3RlbXBsYXRlVHlwZX1cbiAgICAgIG1lc3NhZ2VUeXBlPXttZXNzYWdlVHlwZX1cbiAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICBzaG93TG9hZGluZz17cmVjb3Jkc1N0YXR1cyA9PT0gJ2xvYWRpbmcnfVxuICAgICAgYmFja2dyb3VuZD17d2ViQ2hhcnQ/LmJhY2tncm91bmR9XG4gICAgICBjbGFzc05hbWU9J3dlYi1pbmxpZS1kYXRhLWNoYXJ0J1xuICAgICAgc2hvd1BsYWNlaG9sZGVyPXshcmVuZGVyfVxuICAgICAgdG9vbHM9e3Rvb2xzfVxuICAgID5cbiAgICAgIDxXaXRoSW5saW5lRGF0YUNoYXJ0XG4gICAgICAgIGNsYXNzTmFtZT0nd2ViLWNoYXJ0J1xuICAgICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICAgIHdlYkNoYXJ0PXt3ZWJDaGFydH1cbiAgICAgICAgY2hhcnRMaW1pdHM9e2NoYXJ0TGltaXRzfVxuICAgICAgICBvbkluaXREcmFnSGFuZGxlcj17b25Jbml0RHJhZ0hhbmRsZXJ9XG4gICAgICAvPlxuICAgIDwvQ2hhcnRSb290PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYklubGluZURhdGFDaGFydFxuIiwiaW1wb3J0IHsgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIEltbXV0YWJsZU9iamVjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IGdldFNlcmllc1R5cGUsIHR5cGUgV2ViQ2hhcnREYXRhSXRlbSwgdHlwZSBXZWJDaGFydFBpZUNoYXJ0U2VyaWVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IENhdGVnb3J5VHlwZSwgdHlwZSBXZWJDaGFydFNlcmllcyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IEJ5RmllbGRTZXJpZXNYIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlUeXBlLCBub3JtYWxpemVTdGF0aXN0aWNGaWVsZExhYmVsIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29tbW9uL3NlcmlhbCdcbmltcG9ydCB7IGlzU2VyaWFsU2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVmYXVsdCdcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVNlcmllc05hbWUgPSAocHJvcHNTZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPiwgcXVlcnksIHRyYW5zbGF0ZSkgPT4ge1xuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZShwcm9wc1NlcmllcyBhcyBhbnkpXG4gIGNvbnN0IHN0YXRpc3RpY1R5cGUgPSBxdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5zdGF0aXN0aWNUeXBlXG4gIGNvbnN0IGNhdGVnb3J5VHlwZSA9IGdldENhdGVnb3J5VHlwZShxdWVyeSlcbiAgbGV0IHNlcmllcyA9IHByb3BzU2VyaWVzXG4gIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUZpZWxkKSByZXR1cm4gc2VyaWVzXG4gIGlmICghc3RhdGlzdGljVHlwZSkgcmV0dXJuIHNlcmllc1xuICBpZiAoaXNTZXJpYWxTZXJpZXModHlwZSkgfHwgdHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICBzZXJpZXMgPSBwcm9wc1Nlcmllcy5tYXAoc2VyaWUgPT4ge1xuICAgICAgY29uc3QgYWxpYXMgPSBzZXJpZS5uYW1lXG4gICAgICBjb25zdCBuYW1lID0gbm9ybWFsaXplU3RhdGlzdGljRmllbGRMYWJlbChzdGF0aXN0aWNUeXBlLCBhbGlhcywgdHJhbnNsYXRlKVxuICAgICAgcmV0dXJuIHNlcmllLnNldCgnbmFtZScsIG5hbWUpXG4gICAgfSkgYXMgYW55XG4gIH1cbiAgcmV0dXJuIHNlcmllc1xufVxuXG4vKipcbiAqIFNsaWNlIGlzIHRoZSBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgZmllbGQsIHdoaWNoIG5lZWRzIHRvIGJlIG1hcHBlZCB0byB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIHRoZSBmaWVsZCAodGhlIGRhdGEgb2YgdGhlIGNoYXJ0IHJlbmRlcmVkKVxuICogQHBhcmFtIHByb3BzU2VyaWVzXG4gKiBAcGFyYW0gcXVlcnlcbiAqIEBwYXJhbSBkYXRhSXRlbXNcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBpZVNsaWNlcyA9IChwcm9wc1NlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LCBxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgZGF0YUl0ZW1zOiBXZWJDaGFydERhdGFJdGVtW10pOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4gPT4ge1xuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZShwcm9wc1NlcmllcyBhcyBhbnkpXG4gIGlmICh0eXBlICE9PSAncGllU2VyaWVzJykgcmV0dXJuIHByb3BzU2VyaWVzXG4gIGNvbnN0IHByb3BTbGljZXMgPSAocHJvcHNTZXJpZXM/LlswXSBhcyB1bmtub3duIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFBpZUNoYXJ0U2VyaWVzPik/LnNsaWNlc1xuICBpZiAoIXByb3BTbGljZXMpIHJldHVybiBwcm9wc1Nlcmllc1xuXG4gIGNvbnN0IGNhdGVnb3J5VHlwZSA9IGdldENhdGVnb3J5VHlwZShxdWVyeSlcbiAgY29uc3QgeCA9IGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQgPyBCeUZpZWxkU2VyaWVzWCA6IHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdXG4gIGNvbnN0IG9yaWdpbmFseCA9IHggKyAnX29yaWdpbmFsJ1xuXG4gIGNvbnN0IHNsaWNlcyA9IHByb3BTbGljZXM/Lm1hcCgoc2xpY2UpID0+IHtcbiAgICBjb25zdCBzbGljZUlkID0gc2xpY2Uuc2xpY2VJZFxuICAgIGNvbnN0IG1hdGNoSXRlbSA9IGRhdGFJdGVtcz8uZmluZChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHhWYWx1ZSA9IChpdGVtW29yaWdpbmFseF0gfHwgaXRlbVt4XSkgYXMgYW55XG4gICAgICBpZiAoeFZhbHVlID09IG51bGwpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHNsaWNlSWQgPT09IHhWYWx1ZSB8fCBzbGljZUlkID09PSAoeFZhbHVlICsgJycpXG4gICAgfSlcbiAgICBpZiAobWF0Y2hJdGVtKSB7XG4gICAgICByZXR1cm4gc2xpY2Uuc2V0KCdzbGljZUlkJywgbWF0Y2hJdGVtW3hdKSBhcyBhbnlcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSk/LmZpbHRlcihzbGljZSA9PiAhIXNsaWNlKVxuXG4gIGNvbnN0IHNlcmllcyA9IHByb3BzU2VyaWVzLm1hcChzZXJpZSA9PiAoc2VyaWUgYXMgYW55KS5zZXQoJ3NsaWNlcycsIHNsaWNlcykpXG4gIHJldHVybiBzZXJpZXNcbn1cbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdXNlSW50bCwgaG9va3MsIHR5cGUgV2lkZ2V0SW5pdERyYWdDYWxsYmFjayB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIHR5cGUgQ2hhcnRFbGVtZW50TGltaXQsXG4gIHR5cGUgV2ViTWFwV2ViQ2hhcnQsXG4gIHR5cGUgVW5wcml2aWxlZ2VkQ2hhcnQsXG4gIHR5cGUgUHJlUmVuZGVyQ2FsbGJhY2ssXG4gIHR5cGUgV2ViQ2hhcnRQaWVDaGFydFNlcmllcyxcbiAgdHlwZSBXZWJDaGFydCxcbiAgZ2V0U2VyaWVzVHlwZVxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2gsIHVzZUNoYXJ0UnVudGltZVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnXG5pbXBvcnQgeyB0eXBlIElXZWJDaGFydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCBjb252ZXJ0UmVjb3Jkc1RvSW5saW5lRGF0YSBmcm9tICcuL2NvbnZlcnQtdXRpbHMnXG5pbXBvcnQgeyBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVpTWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IG5vcm1hbGl6ZVBpZVNsaWNlcywgbm9ybWFsaXplU2VyaWVzTmFtZSB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudHMgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uLCBub3JtYWxpemVTZXJpZXMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFdlYkNoYXJ0Q3VycmVudFZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnXG5cbmludGVyZmFjZSBXaXRoSW5saW5lRGF0YUNoYXJ0UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICB3ZWJDaGFydDogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD5cbiAgY2hhcnRMaW1pdHM/OiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PlxuICBvbkluaXREcmFnSGFuZGxlcjogV2lkZ2V0SW5pdERyYWdDYWxsYmFja1xufVxuXG5jb25zdCBub0RhdGFPcHRpb25zID0ge1xuICBkaXNwbGF5TWVzc2FnZVdoZW5Ob0RhdGE6IGZhbHNlXG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSBbMCwgMCwgMCwgMF0gYXMgYW55XG5cbmZ1bmN0aW9uIFdpdGhJbmxpbmVEYXRhQ2hhcnQgKFxuICBwcm9wczogV2l0aElubGluZURhdGFDaGFydFByb3BzXG4pOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgd2lkZ2V0SWQsIHdlYkNoYXJ0OiBwcm9wV2ViQ2hhcnQsIGNoYXJ0TGltaXRzLCBvbkluaXREcmFnSGFuZGxlciB9ID0gcHJvcHNcbiAgY29uc3QgeyBvdXRwdXREYXRhU291cmNlLCByZWNvcmRzLCByZWNvcmRzU3RhdHVzIH0gPSB1c2VDaGFydFJ1bnRpbWVTdGF0ZSgpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ2hhcnRSdW50aW1lRGlzcGF0Y2goKVxuXG4gIGNvbnN0IGNoYXJ0UmVmID0gUmVhY3QudXNlUmVmPFVucHJpdmlsZWdlZENoYXJ0PihudWxsKVxuICBjb25zdCBpZCA9IHdpZGdldElkICsgJy0nICsgKHByb3BXZWJDaGFydD8uaWQgPz8gJ2NoYXJ0JylcbiAgY29uc3QgaW50bCA9IHVzZUludGwoKVxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMsIGppbXVVaU1lc3NhZ2VzKVxuICBjb25zdCB3ZWJNYXBXZWJDaGFydFJlZiA9IFJlYWN0LnVzZVJlZjxJbW11dGFibGVPYmplY3Q8V2ViTWFwV2ViQ2hhcnQ+PihudWxsKVxuICBsZXQgd2ViQ2hhcnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHByb3BXZWJDaGFydC5zZXQoJ3ZlcnNpb24nLCBXZWJDaGFydEN1cnJlbnRWZXJzaW9uKS53aXRob3V0KCdkYXRhU291cmNlJykuc2V0KCdpZCcsIGlkKS5zZXQoJ2JhY2tncm91bmQnLCBiYWNrZ3JvdW5kKSBhcyB1bmtub3duIGFzIEltbXV0YWJsZU9iamVjdDxXZWJNYXBXZWJDaGFydD4sIFtpZCwgcHJvcFdlYkNoYXJ0XSlcblxuICBjb25zdCB0eXBlID0gZ2V0U2VyaWVzVHlwZShwcm9wV2ViQ2hhcnQuc2VyaWVzIGFzIGFueSlcbiAgY29uc3QgcXVlcnkgPSBwcm9wV2ViQ2hhcnQ/LmRhdGFTb3VyY2U/LnF1ZXJ5XG4gIGNvbnN0IHByb3BTZXJpZXMgPSBwcm9wV2ViQ2hhcnQ/LnNlcmllcyBhcyBhbnlcblxuICBjb25zdCBbaW5saW5lRGF0YSwgZGF0YUl0ZW1zXSA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGNvbnZlcnRSZWNvcmRzVG9JbmxpbmVEYXRhKFxuICAgICAgICB0eXBlLFxuICAgICAgICByZWNvcmRzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgcHJvcFNlcmllcyxcbiAgICAgICAgaW50bFxuICAgICAgKSxcbiAgICBbdHlwZSwgcmVjb3JkcywgcXVlcnksIHByb3BTZXJpZXMsIGludGxdXG4gIClcblxuICBsZXQgc2VyaWVzID0gUmVhY3QudXNlTWVtbygoKSA9PiBub3JtYWxpemVTZXJpZXMocHJvcFNlcmllcywgcXVlcnkpLCBbcHJvcFNlcmllcywgcXVlcnldKVxuICBzZXJpZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IG5vcm1hbGl6ZVBpZVNsaWNlcyhzZXJpZXMsIHF1ZXJ5LCBkYXRhSXRlbXMpLCBbZGF0YUl0ZW1zLCBxdWVyeSwgc2VyaWVzXSlcbiAgc2VyaWVzID0gUmVhY3QudXNlTWVtbygoKSA9PiBub3JtYWxpemVTZXJpZXNOYW1lKHNlcmllcywgcXVlcnksIHRyYW5zbGF0ZSksIFtzZXJpZXMsIHF1ZXJ5LCB0cmFuc2xhdGVdKVxuICB3ZWJDaGFydCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gd2ViQ2hhcnQuc2V0KCdzZXJpZXMnLCBzZXJpZXMpLCBbd2ViQ2hhcnQsIHNlcmllc10pXG5cbiAgY29uc3Qgd2ViTWFwV2ViQ2hhcnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGUgY2hhcnQgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIGRhdGEgaXMgbG9hZGVkXG4gICAgaWYgKHJlY29yZHNTdGF0dXMgIT09ICdsb2FkZWQnKSB7XG4gICAgICByZXR1cm4gd2ViTWFwV2ViQ2hhcnRSZWYuY3VycmVudFxuICAgIH0gZWxzZSB7XG4gICAgICB3ZWJNYXBXZWJDaGFydFJlZi5jdXJyZW50ID0gd2ViQ2hhcnRcbiAgICAgIHJldHVybiB3ZWJDaGFydFxuICAgIH1cbiAgfSwgW3JlY29yZHNTdGF0dXMsIHdlYkNoYXJ0XSlcblxuICBjb25zdCBoYW5sZGxlQ3JlYXRlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChjaGFydDogVW5wcml2aWxlZ2VkQ2hhcnQpID0+IHtcbiAgICAgIGNoYXJ0UmVmLmN1cnJlbnQgPSBjaGFydFxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0NIQVJUJywgdmFsdWU6IGNoYXJ0IH0pXG4gICAgfSxcbiAgICBbZGlzcGF0Y2hdXG4gIClcblxuICBjb25zdCBbc2VsZWN0aW9uRGF0YSwgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlXSA9IHVzZVNlbGVjdGlvbihcbiAgICB3aWRnZXRJZCxcbiAgICBvdXRwdXREYXRhU291cmNlLFxuICAgIHByb3BTZXJpZXNcbiAgKVxuXG4gIGNvbnN0IGNoYXJ0V2lsbFJlbmRlcjogUHJlUmVuZGVyQ2FsbGJhY2sgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNoYXJ0Q29uZmlnLCBzbGljZXM6IHVzZWRTbGljZXMgfSA9IHByb3BzXG4gICAgbGV0IHNsaWNlcyA9IChjaGFydENvbmZpZz8uc2VyaWVzPy5bMF0gYXMgV2ViQ2hhcnRQaWVDaGFydFNlcmllcyk/LnNsaWNlc1xuICAgIGxldCBhbHRlcmVkQ29uZmlnOiBXZWJDaGFydCA9IGNoYXJ0Q29uZmlnIGFzIFdlYkNoYXJ0XG4gICAgaWYgKHNsaWNlcz8ubGVuZ3RoKSB7XG4gICAgICBzbGljZXMgPSBzbGljZXMubWFwKChzbGljZSkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IHNsaWNlLnNsaWNlSWRcbiAgICAgICAgY29uc3QgdXNlZFNsaWNlSWQgPSB1c2VkU2xpY2VzPy5maW5kKCh1c2VkU2xpY2UpID0+IHVzZWRTbGljZS5vcmlnaW5hbExhYmVsID09PSBpZCk/LnNsaWNlSWRcbiAgICAgICAgaWYgKHVzZWRTbGljZUlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNsaWNlLFxuICAgICAgICAgICAgc2xpY2VJZDogdXNlZFNsaWNlSWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNsaWNlXG4gICAgICB9KVxuICAgICAgYWx0ZXJlZENvbmZpZyA9IHtcbiAgICAgICAgLi4uY2hhcnRDb25maWcsXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAuLi5jaGFydENvbmZpZy5zZXJpZXNbMF0sXG4gICAgICAgICAgc2xpY2VzXG4gICAgICAgIH1dIGFzIFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXNbXVxuICAgICAgfSBhcyBXZWJDaGFydFxuICAgIH1cbiAgICByZXR1cm4gYWx0ZXJlZENvbmZpZ1xuICB9LCBbXSlcblxuICBob29rcy51c2VFZmZlY3RPbmNlKCgpID0+IHtcbiAgICBvbkluaXREcmFnSGFuZGxlcj8uKG51bGwsIG51bGwsICgpID0+IHtcbiAgICAgIGlmICghY2hhcnRSZWYuY3VycmVudCkgcmV0dXJuXG4gICAgICBjaGFydFJlZi5jdXJyZW50LnJlZnJlc2goKVxuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dlYk1hcFdlYkNoYXJ0ICYmIDxDaGFydENvbXBvbmVudHNcbiAgICAgICAgcmVmPXtoYW5sZGxlQ3JlYXRlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHdlYk1hcFdlYkNoYXJ0PXt3ZWJNYXBXZWJDaGFydH1cbiAgICAgICAgaW5saW5lRGF0YT17aW5saW5lRGF0YX1cbiAgICAgICAgY2hhcnRXaWxsUmVuZGVyPXtjaGFydFdpbGxSZW5kZXJ9XG4gICAgICAgIG5vRGF0YU9wdGlvbnM9e25vRGF0YU9wdGlvbnN9XG4gICAgICAgIGhpZGVMb2FkZXJBbmltYXRpb249e3RydWV9XG4gICAgICAgIGNoYXJ0TGltaXRzPXtjaGFydExpbWl0c31cbiAgICAgICAgc2VsZWN0aW9uRGF0YT17c2VsZWN0aW9uRGF0YX1cbiAgICAgICAgYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGU9e2hhbmRsZVNlbGVjdGlvbkNoYW5nZX1cbiAgICAgIC8+fVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhJbmxpbmVEYXRhQ2hhcnRcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBjbGFzc05hbWVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgZ2V0QXBwU3RvcmUsIGhvb2tzLCB0eXBlIERhdGFSZWNvcmRTZXQsIFJlYWN0UmVkdXgsIHR5cGUgSU1TdGF0ZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IERhdGFBY3Rpb25MaXN0LCBEYXRhQWN0aW9uTGlzdFN0eWxlLCBkZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBDaGFydFRvb2xzIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgdHlwZSBSYW5nZUN1cnNvck1vZGVWYWx1ZSB9IGZyb20gJy4vcmFuZ2UtY3Vyc29yLW1vZGUnXG5pbXBvcnQgeyB1c2VDaGFydFJ1bnRpbWVTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJ1xuaW1wb3J0IHsgU2VsZWN0aW9uWm9vbSB9IGZyb20gJy4vc2VsZWN0aW9uLXpvb20nXG5pbXBvcnQgeyBBY3Rpb25Nb2RlcywgdHlwZSBDaGFydFR5cGVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcblxuaW50ZXJmYWNlIFRvb2xzUHJvcHMge1xuICB0eXBlOiBDaGFydFR5cGVzXG4gIHdpZGdldElkOiBzdHJpbmdcbiAgY2xhc3NOYW1lPzogYm9vbGVhblxuICB0b29scz86IEltbXV0YWJsZU9iamVjdDxDaGFydFRvb2xzPlxuICBlbmFibGVEYXRhQWN0aW9uPzogYm9vbGVhblxufVxuXG5jb25zdCBzdHlsZSA9IGNzc2BcbiAgLnRvb2wtZGl2aWRpbmctbGluZSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtNDAwKTtcbiAgfVxuYFxuXG5jb25zdCBUb29scyA9IChwcm9wczogVG9vbHNQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgdHlwZSA9ICdiYXJTZXJpZXMnLCBjbGFzc05hbWUsIHdpZGdldElkLCB0b29scywgZW5hYmxlRGF0YUFjdGlvbiB9ID0gcHJvcHNcblxuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IHdpZGdldExhYmVsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy53aWRnZXRzPy5bd2lkZ2V0SWRdPy5sYWJlbCA/PyAnQ2hhcnQnXG4gIGNvbnN0IGRhdGFBY3Rpb25MYWJlbCA9IHRyYW5zbGF0ZSgnb3V0cHV0U3RhdGlzdGljcycsIHsgbmFtZTogd2lkZ2V0TGFiZWwgfSlcbiAgY29uc3QgeyBvdXRwdXREYXRhU291cmNlLCBjaGFydCB9ID0gdXNlQ2hhcnRSdW50aW1lU3RhdGUoKVxuICBjb25zdCBjdXJzb3JFbmFibGUgPSB0b29scz8uY3Vyc29yRW5hYmxlXG5cbiAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBSZWFjdFJlZHV4LnVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4gc3RhdGU/LmRhdGFTb3VyY2VzSW5mb1tvdXRwdXREYXRhU291cmNlPy5pZF0/LnNlbGVjdGVkSWRzKVxuICBjb25zdCBhY3Rpb25EYXRhU2V0czogRGF0YVJlY29yZFNldFtdID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2UgPyBbeyBuYW1lOiBkYXRhQWN0aW9uTGFiZWwsIHR5cGU6ICdzZWxlY3RlZCcsIGRhdGFTb3VyY2U6IG91dHB1dERhdGFTb3VyY2UsIHJlY29yZHM6IG91dHB1dERhdGFTb3VyY2U/LmdldFNlbGVjdGVkUmVjb3JkcygpIH1dIDogW11cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbZGF0YUFjdGlvbkxhYmVsLCBvdXRwdXREYXRhU291cmNlLCBzZWxlY3RlZElkc10pXG5cbiAgY29uc3QgaGFuZGxlUmFuZ2VNb2RlQ2hhbmdlID0gKG1vZGU6IFJhbmdlQ3Vyc29yTW9kZVZhbHVlKSA9PiB7XG4gICAgaWYgKG1vZGUgPT09ICdzZWxlY3Rpb24nKSB7XG4gICAgICBjaGFydD8uc2V0QWN0aW9uTW9kZShBY3Rpb25Nb2Rlcy5NdWx0aVNlbGVjdGlvbldpdGhDdHJsS2V5KVxuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3pvb20nKSB7XG4gICAgICBjaGFydD8uc2V0QWN0aW9uTW9kZShBY3Rpb25Nb2Rlcy5ab29tKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsZWFyU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNoYXJ0Py5jbGVhclNlbGVjdGlvbigpXG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXJzb3JFbmFibGUpIHtcbiAgICAgIGNoYXJ0Py5zZXRBY3Rpb25Nb2RlKEFjdGlvbk1vZGVzLk11bHRpU2VsZWN0aW9uV2l0aEN0cmxLZXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYXJ0Py5zZXRBY3Rpb25Nb2RlKEFjdGlvbk1vZGVzLk5vbmUpXG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2N1cnNvckVuYWJsZSwgY2hhcnRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgJ2NoYXJ0LXRvb2wtYmFyIHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZCBweC0yIHB0LTInLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICByb2xlPSdncm91cCdcbiAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgndG9vbHMnKX1cbiAgICA+XG4gICAgICB7Y3Vyc29yRW5hYmxlICYmIChcbiAgICAgICAgPFNlbGVjdGlvblpvb21cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIGNsYXNzTmFtZT0nbXItMSdcbiAgICAgICAgICBvbk1vZGVDaGFuZ2U9e2hhbmRsZVJhbmdlTW9kZUNoYW5nZX1cbiAgICAgICAgICBvbkNsZWFyU2VsZWN0aW9uPXtoYW5kbGVDbGVhclNlbGVjdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHtlbmFibGVEYXRhQWN0aW9uICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndG9vbC1kaXZpZGluZy1saW5lIG14LTEnPjwvc3Bhbj5cbiAgICAgICAgICA8RGF0YUFjdGlvbkxpc3RcbiAgICAgICAgICAgIHdpZGdldElkPXt3aWRnZXRJZH1cbiAgICAgICAgICAgIGJ1dHRvblR5cGU9J3RlcnRpYXJ5J1xuICAgICAgICAgICAgbGlzdFN0eWxlPXtEYXRhQWN0aW9uTGlzdFN0eWxlLkRyb3Bkb3dufVxuICAgICAgICAgICAgZGF0YVNldHM9e2FjdGlvbkRhdGFTZXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xzXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcywgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBab29tSW5PdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3pvb20taW4nXG5pbXBvcnQgeyBCdXR0b24sIGRlZmF1bHRNZXNzYWdlcywgVG9vbHRpcCB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBTZWxlY3RSZWN0YW5nbGVPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZ2lzL3NlbGVjdC1yZWN0YW5nbGUnXG5pbXBvcnQgeyB0eXBlIENoYXJ0VHlwZXMgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IHsgaXNYWUNoYXJ0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVmYXVsdCdcblxuZXhwb3J0IHR5cGUgUmFuZ2VDdXJzb3JNb2RlVmFsdWUgPSAnc2VsZWN0aW9uJyB8ICd6b29tJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmdlQ3Vyc29yTW9kZVByb3BzIHtcbiAgdHlwZTogQ2hhcnRUeXBlc1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgb25DaGFuZ2U6IChtb2RlPzogUmFuZ2VDdXJzb3JNb2RlVmFsdWUpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFJhbmdlQ3Vyc29yTW9kZSA9IChwcm9wczogUmFuZ2VDdXJzb3JNb2RlUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB0cmFuc2xhdGUgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZXMpXG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlPFJhbmdlQ3Vyc29yTW9kZVZhbHVlPignc2VsZWN0aW9uJylcblxuICBjb25zdCB7IHR5cGUgPSAnYmFyU2VyaWVzJywgY2xhc3NOYW1lLCBvbkNoYW5nZSB9ID0gcHJvcHNcblxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DbGljayA9ICgpID0+IHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpZVNlcmllcycpIHJldHVyblxuXG4gICAgb25DaGFuZ2UoJ3NlbGVjdGlvbicpXG4gICAgc2V0TW9kZSgnc2VsZWN0aW9uJylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVpvb21DbGljayA9ICgpID0+IHtcbiAgICBvbkNoYW5nZSgnem9vbScpXG4gICAgc2V0TW9kZSgnem9vbScpXG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3JhbmdlLWN1cnNvci1tb2RlJywgY2xhc3NOYW1lKX0+XG4gICAgPFRvb2x0aXAgdGl0bGU9e3RyYW5zbGF0ZSgnU2VsZWN0TGFiZWwnKX0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9J3NtJ1xuICAgICAgICBjbGFzc05hbWU9XCJtci0xXCJcbiAgICAgICAgaWNvblxuICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcbiAgICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdTZWxlY3RMYWJlbCcpfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWxlY3Rpb25DbGlja31cbiAgICAgICAgYWN0aXZlPXttb2RlID09PSAnc2VsZWN0aW9uJ31cbiAgICAgID5cbiAgICAgICAgPFNlbGVjdFJlY3RhbmdsZU91dGxpbmVkIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1Rvb2x0aXA+XG4gICAge2lzWFlDaGFydCh0eXBlKSAmJiA8VG9vbHRpcCB0aXRsZT17dHJhbnNsYXRlKCdab29tTGFiZWwnKX0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHNpemU9J3NtJ1xuICAgICAgICBpY29uXG4gICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xuICAgICAgICBhcmlhLWxhYmVsPXt0cmFuc2xhdGUoJ1pvb21MYWJlbCcpfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVab29tQ2xpY2t9XG4gICAgICAgIGFjdGl2ZT17bW9kZSA9PT0gJ3pvb20nfVxuICAgICAgPlxuICAgICAgICA8Wm9vbUluT3V0bGluZWQgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvVG9vbHRpcD59XG4gIDwvZGl2PlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIGhvb2tzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uLCBkZWZhdWx0TWVzc2FnZXMsIFRvb2x0aXAgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgdHlwZSBSYW5nZUN1cnNvck1vZGVQcm9wcywgdHlwZSBSYW5nZUN1cnNvck1vZGVWYWx1ZSwgUmFuZ2VDdXJzb3JNb2RlIH0gZnJvbSAnLi9yYW5nZS1jdXJzb3ItbW9kZSdcbmltcG9ydCB7IFRyYXNoQ2hlY2tPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3RyYXNoLWNoZWNrJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvblpvb21Qcm9wcyBleHRlbmRzIE9taXQ8UmFuZ2VDdXJzb3JNb2RlUHJvcHMsICdvbkNoYW5nZSc+IHtcbiAgb25Nb2RlQ2hhbmdlPzogKG1vZGU/OiBSYW5nZUN1cnNvck1vZGVWYWx1ZSkgPT4gdm9pZFxuICBvbkNsZWFyU2VsZWN0aW9uPzogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uWm9vbSA9IChwcm9wczogU2VsZWN0aW9uWm9vbVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxuICBjb25zdCB7IHR5cGUsIGNsYXNzTmFtZSwgb25Nb2RlQ2hhbmdlLCBvbkNsZWFyU2VsZWN0aW9uIH0gPSBwcm9wc1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2VsZWN0aW9uLXpvb20gZC1mbGV4JywgY2xhc3NOYW1lKX0+XG4gICAgPFJhbmdlQ3Vyc29yTW9kZSB0eXBlPXt0eXBlfSBjbGFzc05hbWU9XCJtci0xXCIgb25DaGFuZ2U9e29uTW9kZUNoYW5nZX0gLz5cbiAgICA8VG9vbHRpcCB0aXRsZT17dHJhbnNsYXRlKCdjbGVhclNlbGVjdGlvbicpfT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgIGljb25cbiAgICAgICAgYXJpYS1sYWJlbD17dHJhbnNsYXRlKCdjbGVhclNlbGVjdGlvbicpfVxuICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcbiAgICAgICAgb25DbGljaz17b25DbGVhclNlbGVjdGlvbn1cbiAgICAgID5cbiAgICAgICAgPFRyYXNoQ2hlY2tPdXRsaW5lZCAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Ub29sdGlwPlxuICA8L2Rpdj5cbn1cbiIsImltcG9ydCB7IHR5cGUgQ2hhcnRFbGVtZW50TGltaXQsIExpbWl0QmVoYXZpb3IsIGdldFNlcmllc1R5cGUgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuaW1wb3J0IG5vcm1hbGl6ZVNlcmllcyBmcm9tICcuL25vcm1hbGl6ZS1zZXJpZXMnXG5pbXBvcnQgdXNlU2VsZWN0aW9uIGZyb20gJy4vdXNlLXNlbGVjdGlvbidcblxuY29uc3QgZ2V0TWluU2FmZVZhbHVlID0gKHYxLCB2MikgPT4ge1xuICBpZiAodjEgPT0gbnVsbCAmJiB2MiA9PSBudWxsKSByZXR1cm5cbiAgaWYgKHYxID09IG51bGwgJiYgdjIgIT0gbnVsbCkgcmV0dXJuIHYyXG4gIGlmICh2MSAhPSBudWxsICYmIHYyID09IG51bGwpIHJldHVybiB2MVxuICByZXR1cm4gTWF0aC5taW4odjEsIHYyKVxufVxuXG5jb25zdCBnZXRDaGFydExpbWl0cyA9IChzZXJpZXM6IGFueSwgZGVmYXVsdENoYXJ0TGltaXRzOiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PiwgbnVtPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGNoYXJ0TGltaXRzOiBQYXJ0aWFsPENoYXJ0RWxlbWVudExpbWl0PiA9IHt9XG4gIGNvbnN0IHNlcmllc0xlbmd0aCA9IHNlcmllcz8ubGVuZ3RoXG4gIGlmICghc2VyaWVzTGVuZ3RoKSByZXR1cm4gZGVmYXVsdENoYXJ0TGltaXRzXG4gIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllcylcblxuICBsZXQgYmVoYXZpb3JBZnRlckxpbWl0OiBMaW1pdEJlaGF2aW9yID0gTGltaXRCZWhhdmlvci5SZWplY3RcblxuICBpZiAoc2VyaWVzVHlwZSA9PT0gJ3NjYXR0ZXJTZXJpZXMnKSB7XG4gICAgY2hhcnRMaW1pdHMubWF4U2NhdHRlclBvaW50c0JlZm9yZUFnZ3JlZ2F0aW9uID0gZGVmYXVsdENoYXJ0TGltaXRzLm1heFNjYXR0ZXJQb2ludHNCZWZvcmVBZ2dyZWdhdGlvblxuICAgIGNoYXJ0TGltaXRzLm1heFNjYXR0ZXJQb2ludHNBZnRlckFnZ3JlZ2F0aW9uID0gZGVmYXVsdENoYXJ0TGltaXRzLm1heFNjYXR0ZXJQb2ludHNBZnRlckFnZ3JlZ2F0aW9uXG4gIH1cblxuICBsZXQgbGltaXRLZXkgPSAnJ1xuICBsZXQgbGltaXROdW0gPSAtMVxuXG4gIGlmIChzZXJpZXNUeXBlID09PSAnYmFyU2VyaWVzJykge1xuICAgIGNoYXJ0TGltaXRzLm1heEJhckNoYXJ0U2VyaWVzQ291bnQgPSBkZWZhdWx0Q2hhcnRMaW1pdHMubWF4QmFyQ2hhcnRTZXJpZXNDb3VudFxuICAgIGlmIChzZXJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaW1pdEtleSA9ICdtYXhCYXJVbmlxdWVTZXJpZXNDb3VudFRvdGFsJ1xuICAgIH0gZWxzZSBpZiAoc2VyaWVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgY2hhcnRMaW1pdHMubWF4QmFyVHdvU2VyaWVzQ291bnRUb3RhbCA9IGRlZmF1bHRDaGFydExpbWl0cy5tYXhCYXJUd29TZXJpZXNDb3VudFRvdGFsXG4gICAgICBsaW1pdEtleSA9ICdtYXhCYXJUd29TZXJpZXNDb3VudFBlclNlcmllcydcbiAgICB9IGVsc2UgaWYgKHNlcmllcy5sZW5ndGggPiAyKSB7XG4gICAgICBjaGFydExpbWl0cy5tYXhCYXJUaHJlZVBsdXNTZXJpZXNDb3VudFRvdGFsID0gZGVmYXVsdENoYXJ0TGltaXRzLm1heEJhclRocmVlUGx1c1Nlcmllc0NvdW50VG90YWxcbiAgICAgIGxpbWl0S2V5ID0gJ21heEJhclRocmVlUGx1c1Nlcmllc0NvdW50UGVyU2VyaWVzJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChzZXJpZXNUeXBlID09PSAnbGluZVNlcmllcycpIHtcbiAgICBjaGFydExpbWl0cy5tYXhMaW5lQ2hhcnRTZXJpZXNDb3VudCA9IGRlZmF1bHRDaGFydExpbWl0cy5tYXhMaW5lQ2hhcnRTZXJpZXNDb3VudFxuICAgIGlmIChzZXJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaW1pdEtleSA9ICdtYXhMaW5lVW5pcXVlU2VyaWVzQ291bnRUb3RhbCdcbiAgICB9IGVsc2UgaWYgKHNlcmllcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNoYXJ0TGltaXRzLm1heExpbmVUd29TZXJpZXNDb3VudFRvdGFsID0gZGVmYXVsdENoYXJ0TGltaXRzLm1heExpbmVUd29TZXJpZXNDb3VudFRvdGFsXG4gICAgICBsaW1pdEtleSA9ICdtYXhMaW5lVHdvU2VyaWVzQ291bnRQZXJTZXJpZXMnXG4gICAgfSBlbHNlIGlmIChzZXJpZXMubGVuZ3RoID4gMikge1xuICAgICAgY2hhcnRMaW1pdHMubWF4TGluZVRocmVlUGx1c1Nlcmllc0NvdW50VG90YWwgPSBkZWZhdWx0Q2hhcnRMaW1pdHMubWF4TGluZVRocmVlUGx1c1Nlcmllc0NvdW50VG90YWxcbiAgICAgIGxpbWl0S2V5ID0gJ21heExpbmVUaHJlZVBsdXNTZXJpZXNDb3VudFBlclNlcmllcydcbiAgICB9XG4gIH0gZWxzZSBpZiAoc2VyaWVzVHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICBsaW1pdEtleSA9ICdtYXhQaWVDaGFydFNsaWNlQ291bnRUb3RhbCdcbiAgfVxuICBjb25zdCBkZWZhdWx0TGltaXROdW0gPSBkZWZhdWx0Q2hhcnRMaW1pdHNbbGltaXRLZXldXG4gIGlmIChudW0gJiYgbnVtIDw9IGRlZmF1bHRMaW1pdE51bSkge1xuICAgIGxpbWl0TnVtID0gbnVtXG4gICAgYmVoYXZpb3JBZnRlckxpbWl0ID0gTGltaXRCZWhhdmlvci5SZW5kZXJVcFRvVGhlTGltaXRcbiAgfSBlbHNlIHtcbiAgICBsaW1pdE51bSA9IGRlZmF1bHRMaW1pdE51bVxuICB9XG4gIGlmIChsaW1pdEtleSkge1xuICAgIGNoYXJ0TGltaXRzW2xpbWl0S2V5XSA9IGxpbWl0TnVtXG4gIH1cbiAgY2hhcnRMaW1pdHMuYmVoYXZpb3JBZnRlckxpbWl0ID0gYmVoYXZpb3JBZnRlckxpbWl0XG4gIHJldHVybiBjaGFydExpbWl0c1xufVxuXG5leHBvcnQgeyBub3JtYWxpemVTZXJpZXMsIHVzZVNlbGVjdGlvbiwgZ2V0TWluU2FmZVZhbHVlLCBnZXRDaGFydExpbWl0cyB9XG4iLCJpbXBvcnQgeyB0eXBlIEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIEltbXV0YWJsZU9iamVjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IGlzU2VyaWFsU2VyaWVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVmYXVsdCdcbmltcG9ydCB7IENhdGVnb3J5VHlwZSwgdHlwZSBXZWJDaGFydFNlcmllcyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IGdldFNlcmllc1R5cGUsIGdldFNwbGl0QnlWYWx1ZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBnZXRDYXRlZ29yeVR5cGUsIGdldFNwbGl0T3V0U3RhdGlzdGljTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NvbW1vbi9zZXJpYWwnXG5cbmNvbnN0IGdldFNpbmdsZVF1ZXJ5Rm9yQnlHcm91cCA9IChzZXJpZTogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPiwgcXVlcmllczogSW1tdXRhYmxlT2JqZWN0PEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zPik6IEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNlcmllcz4gPT4ge1xuICBjb25zdCB5ID0gKHNlcmllIGFzIGFueSkueVxuICBjb25zdCBvdXRTdGF0aXN0aWNzID0gcXVlcmllcy5vdXRTdGF0aXN0aWNzLmZpbHRlcigocykgPT4gcy5vdXRTdGF0aXN0aWNGaWVsZE5hbWUgPT09IHkpXG4gIGNvbnN0IHsgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MsIG9yZGVyQnlGaWVsZHMsIHBhZ2VTaXplIH0gPSBxdWVyaWVzXG4gIGNvbnN0IHF1ZXJ5ID0geyBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcywgb3V0U3RhdGlzdGljcywgb3JkZXJCeUZpZWxkcywgbnVtOiBwYWdlU2l6ZSB9XG4gIHJldHVybiBzZXJpZS5zZXQoJ3F1ZXJ5JywgcXVlcnkpXG59XG5cbmNvbnN0IGdldFNpbmdsZVF1ZXJ5Rm9yTm9BZ2dyZWdhdGlvbiA9IChzZXJpZTogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPiwgcXVlcmllczogSW1tdXRhYmxlT2JqZWN0PEZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zPik6IEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNlcmllcz4gPT4ge1xuICBjb25zdCB7IG9yZGVyQnlGaWVsZHMsIHBhZ2VTaXplIH0gPSBxdWVyaWVzXG4gIGNvbnN0IHF1ZXJ5ID0geyBvcmRlckJ5RmllbGRzLCBudW06IHBhZ2VTaXplIH1cbiAgcmV0dXJuIHNlcmllLnNldCgncXVlcnknLCBxdWVyeSlcbn1cblxuY29uc3QgZ2V0U2luZ2xlUXVlcnlGb3JTcGxpdEJ5ID0gKHNlcmllOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+LCBxdWVyaWVzOiBJbW11dGFibGVPYmplY3Q8RmVhdHVyZUxheWVyUXVlcnlQYXJhbXM+KTogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPiA9PiB7XG4gIGNvbnN0IHdoZXJlID0gc2VyaWUucXVlcnkud2hlcmVcbiAgY29uc3Qgc3BsaXRCeVZhbHVlID0gZ2V0U3BsaXRCeVZhbHVlKHsgd2hlcmUsIG5vcm1hbGl6ZTogdHJ1ZSB9KVxuICBpZiAocXVlcmllcy5vdXRGaWVsZHM/Lmxlbmd0aCkgeyAvL25vIGFnZ3JlZ2F0aW9uXG4gICAgY29uc3QgeyBvcmRlckJ5RmllbGRzLCBwYWdlU2l6ZSB9ID0gcXVlcmllc1xuICAgIGNvbnN0IHF1ZXJ5ID0geyB3aGVyZSwgb3JkZXJCeUZpZWxkcywgbnVtOiBwYWdlU2l6ZSB9XG4gICAgcmV0dXJuIHNlcmllLnNldCgncXVlcnknLCBxdWVyeSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvblN0YXRpc3RpY0ZpZWxkID0gcXVlcmllcy5vdXRTdGF0aXN0aWNzWzBdLm9uU3RhdGlzdGljRmllbGRcbiAgICBjb25zdCBzdGF0aXN0aWNUeXBlID0gcXVlcmllcy5vdXRTdGF0aXN0aWNzWzBdLnN0YXRpc3RpY1R5cGVcbiAgICBjb25zdCBvdXRTdGF0aXN0aWNGaWVsZE5hbWUgPSBnZXRTcGxpdE91dFN0YXRpc3RpY05hbWUob25TdGF0aXN0aWNGaWVsZCwgc3RhdGlzdGljVHlwZSwgc3BsaXRCeVZhbHVlKVxuICAgIGNvbnN0IG91dFN0YXRpc3RpY3MgPSBbe1xuICAgICAgLi4ucXVlcmllcy5vdXRTdGF0aXN0aWNzWzBdLFxuICAgICAgb3V0U3RhdGlzdGljRmllbGROYW1lXG4gICAgfV1cbiAgICBjb25zdCB7IGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzLCBvcmRlckJ5RmllbGRzLCBwYWdlU2l6ZSB9ID0gcXVlcmllc1xuICAgIGNvbnN0IHF1ZXJ5ID0geyB3aGVyZSwgZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MsIG91dFN0YXRpc3RpY3MsIG9yZGVyQnlGaWVsZHMsIG51bTogcGFnZVNpemUgfVxuICAgIHJldHVybiBzZXJpZS5zZXQoJ3F1ZXJ5JywgcXVlcnkpLnNldCgneScsIG91dFN0YXRpc3RpY0ZpZWxkTmFtZSlcbiAgfVxufVxuXG5jb25zdCBub3JtYWxpemVTZXJpZXMgPSAoc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sIHF1ZXJ5OiBJbW11dGFibGVPYmplY3Q8RmVhdHVyZUxheWVyUXVlcnlQYXJhbXM+KSA9PiB7XG4gIGxldCBjYWxsYmFjayA9IG51bGxcbiAgY29uc3QgdHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzIGFzIGFueSlcbiAgY29uc3QgdXNlU3BsaXRCeSA9ICEhcXVlcnkud2hlcmVcbiAgaWYgKHVzZVNwbGl0QnkpIHtcbiAgICBjYWxsYmFjayA9IGdldFNpbmdsZVF1ZXJ5Rm9yU3BsaXRCeVxuICB9IGVsc2Uge1xuICAgIGlmIChpc1NlcmlhbFNlcmllcyh0eXBlKSB8fCB0eXBlID09PSAncGllU2VyaWVzJykge1xuICAgICAgY29uc3Qgb3V0RmllbGRzID0gcXVlcnk/Lm91dEZpZWxkc1xuICAgICAgaWYgKG91dEZpZWxkcz8ubGVuZ3RoKSB7IC8vbm8gYWdncmVnYXRpb25cbiAgICAgICAgY2FsbGJhY2sgPSBnZXRTaW5nbGVRdWVyeUZvck5vQWdncmVnYXRpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VHlwZSA9IGdldENhdGVnb3J5VHlwZShxdWVyeSlcbiAgICAgICAgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5R3JvdXApIHtcbiAgICAgICAgICBjYWxsYmFjayA9IGdldFNpbmdsZVF1ZXJ5Rm9yQnlHcm91cFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjYWxsYmFjaykge1xuICAgIHJldHVybiBzZXJpZXM/Lm1hcCgoc2VyaWUpID0+IGNhbGxiYWNrKHNlcmllLCBxdWVyeSkpXG4gIH1cbiAgcmV0dXJuIHNlcmllc1xufVxuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVTZXJpZXNcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIElNU3RhdGUsIFJlYWN0UmVkdXgsIGxvZGFzaCwgTWVzc2FnZU1hbmFnZXIsIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgdHlwZSBEYXRhU291cmNlLCBob29rcywgdHlwZSBEYXRhUmVjb3JkLCB0eXBlIEltbXV0YWJsZUFycmF5IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTZWxlY3Rpb25EYXRhLCBTZWxlY3Rpb25Tb3VyY2UsIGdldFNwbGl0QnlGaWVsZCwgdHlwZSBXZWJDaGFydERhdGFJdGVtIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IHR5cGUgV2ViQ2hhcnRTZXJpZXMgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnXG5cbmNvbnN0IGlzUmVjb3JkTWF0Y2ggPSAocmVjMTogeyBbeDogc3RyaW5nXTogYW55IH0sIHJlYzI6IHsgW3g6IHN0cmluZ106IGFueSB9KTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhyZWMyKS5ldmVyeShrZXkgPT4gcmVjMVtrZXldID09PSByZWMyW2tleV0pXG59XG5cbi8qKlxuICogTWF0Y2ggdGhlIGRhdGEgaW4gdGhlIHJlY29yZHMgYmFzZWQgb24gdGhlIHNlbGVjdGVkIGRhdGEuIElmIHRoZSBzZWxlY3RlZCBkYXRhIGNvbXBsZXRlbHkgbWF0Y2hlcyB0aGUgZGF0YSBpbiBzb21lIG9mIHRoZSByZWNvcmRzLCByZXR1cm4gdGhlbS5cbiAqIE5vdGUxOiBUaGUgbnVtYmVyIG9mIGZpZWxkcyBpbiByZWNvcmQgaXMgZGlmZmVyZW50IGZyb20gc2VsZWN0IGl0ZW0uIEZvciBleGFtcGxlLCB0aGVyZSBpcyBgb2JqZWN0aWRgIGluIHJlY29yZCBidXQgbm90IGluIHNlbGVjdCBpdGVtLlxuICogTm90ZTI6IFRoZXJlIGlzIGEgcG90ZW50aWFsIHByb2JsZW0gd2l0aCBgbm8gYWdncmVnYXRpb25gIGluIHRoaXMgbWF0Y2hpbmcgcGFpci4gVGhlcmUgbWF5IGJlIHR3byByZWNvcmRzIHdob3NlIGZpZWxkcyAobm9uLW9iamVjdGlkKSBhbmQgdmFsdWVzIGFyZSBleGFjdGx5IHRoZSBzYW1lLlxuICovXG5jb25zdCBnZXRNYXRjaGVkUmVjb3JkcyA9IChyZWNvcmRzOiBEYXRhUmVjb3JkW10sIHNlbGVjdGlvbkl0ZW1zOiBBcnJheTx7IFt4OiBzdHJpbmddOiBhbnkgfT4pID0+IHtcbiAgcmV0dXJuIHJlY29yZHMuZmlsdGVyKHJlY29yZCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlY29yZC5nZXREYXRhKClcbiAgICByZXR1cm4gc2VsZWN0aW9uSXRlbXMuc29tZShpdGVtID0+IGlzUmVjb3JkTWF0Y2goZGF0YSwgaXRlbSkpXG4gIH0pXG59XG5cbmNvbnN0IGdldE5vcm1hbGl6ZWRTZWxlY3Rpb25JdGVtcyA9IChzZWxlY3Rpb25JdGVtczogQXJyYXk8eyBbeDogc3RyaW5nXTogYW55IH0+LCBzcGxpdEJ5RmllbGQ6IHN0cmluZykgPT4ge1xuICBpZiAoIXNwbGl0QnlGaWVsZCkgcmV0dXJuIHNlbGVjdGlvbkl0ZW1zXG4gIHJldHVybiBzZWxlY3Rpb25JdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgLi4uaXRlbVxuICAgIH1cbiAgICBkZWxldGUgZGF0YVtzcGxpdEJ5RmllbGRdXG4gICAgcmV0dXJuIGRhdGFcbiAgfSlcbn1cblxuLyoqXG4gKiBHZXQgc2VsZWN0aW9uIGl0ZW1zIGJ5IHRoZSBzZWxlY3RlZCBpZCBmcm9tIGRhdGEgc291cmNlLlxuICovXG5jb25zdCBnZXRTZWxlY3RlZEl0ZW1zID0gKFxuICBzZWxlY3RlZElkczogc3RyaW5nW10sXG4gIHJlY29yZHM6IERhdGFSZWNvcmRbXVxuKTogV2ViQ2hhcnREYXRhSXRlbVtdID0+IHtcbiAgY29uc3QgaXRlbXMgPSBzZWxlY3RlZElkcy5tYXAoKGlkKSA9PiB7XG4gICAgY29uc3QgcmVjb3JkID0gcmVjb3Jkcy5maW5kKChyZWNvcmQpID0+IHJlY29yZC5nZXRJZCgpID09PSBpZClcbiAgICBsZXQgZGF0YSA9IG51bGxcbiAgICBpZiAocmVjb3JkKSB7XG4gICAgICBkYXRhID0gcmVjb3JkLmdldERhdGEoKVxuICAgICAgZGF0YSA9IHsgLi4uZGF0YSB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH0pLmZpbHRlcigoaXRlbSkgPT4gISFpdGVtKVxuICByZXR1cm4gaXRlbXNcbn1cblxuLyoqXG4gKiBLZWVwIHRoZSBzZWxlY3Rpb24gb2YgY2hhcnQgYW5kIG91dHB1dCBkYXRhIHNvdXJjZSwgcHVibGlzaCBtZXNzYWdlIHdoZW4gc2VsZWN0aW9uIGNoYW5nZXMuXG4gKiBAcGFyYW0gd2lkZ2V0SWRcbiAqIEBwYXJhbSBvdXRwdXREYXRhU291cmNlXG4gKiBAcGFyYW0gZGF0YUl0ZW1zXG4gKiBAcGFyYW0gc2VyaWVzTGVuZ3RoXG4gKi9cbmNvbnN0IHVzZVNlbGVjdGlvbiA9IChcbiAgd2lkZ2V0SWQ6IHN0cmluZyxcbiAgb3V0cHV0RGF0YVNvdXJjZTogRGF0YVNvdXJjZSxcbiAgc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz5cbik6IFtTZWxlY3Rpb25EYXRhLCAoLi4uYXJnczogYW55W10pID0+IGFueV0gPT4ge1xuICBjb25zdCBwcmVTZWxlY3RlZElkc1JlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmdbXT4oKVxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UgPSBob29rcy51c2VFdmVudENhbGxiYWNrKChlKSA9PiB7XG4gICAgY29uc3Qgc291cmNlUmVjb3JkcyA9IG91dHB1dERhdGFTb3VyY2U/LmdldFNvdXJjZVJlY29yZHMoKVxuICAgIGlmICghc291cmNlUmVjb3Jkcz8ubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBzZWxlY3Rpb25Tb3VyY2U6IFNlbGVjdGlvblNvdXJjZSA9IGUuZGV0YWlsLnNlbGVjdGlvblNvdXJjZVxuICAgIC8vIE9ubHkgdHJpZ2dlciBzZWxlY3Rpb24gY2hhbmdlIG1lc3NhZ2UgaWYgc2VsZWN0aW9uIHNvdXJjZSBpcyBmcm9tIHRoZSB1c2VyIG9wZXJhdGlvblxuICAgIGNvbnN0IHNlbGVjdGlvbkJ5VXNlciA9XG4gICAgICBzZWxlY3Rpb25Tb3VyY2UgPT09IFNlbGVjdGlvblNvdXJjZS5TZWxlY3Rpb25CeUNsaWNrIHx8XG4gICAgICBzZWxlY3Rpb25Tb3VyY2UgPT09IFNlbGVjdGlvblNvdXJjZS5TZWxlY3Rpb25CeVJhbmdlIHx8XG4gICAgICBzZWxlY3Rpb25Tb3VyY2UgPT09IFNlbGVjdGlvblNvdXJjZS5DbGVhclNlbGVjdGlvblxuICAgIGlmICghc2VsZWN0aW9uQnlVc2VyKSByZXR1cm5cbiAgICBjb25zdCB3aGVyZSA9IHNlcmllc1swXS5xdWVyeT8ud2hlcmVcbiAgICBjb25zdCBzcGxpdEJ5RmllbGQgPSBnZXRTcGxpdEJ5RmllbGQod2hlcmUpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25JdGVtcyA9IGdldE5vcm1hbGl6ZWRTZWxlY3Rpb25JdGVtcyhlLmRldGFpbC5zZWxlY3Rpb25JdGVtcyA/PyBbXSwgc3BsaXRCeUZpZWxkKVxuICAgIGNvbnN0IHNlbGVjdGVkUmVjb3JkcyA9IGdldE1hdGNoZWRSZWNvcmRzKHNvdXJjZVJlY29yZHMsIHNlbGVjdGlvbkl0ZW1zKVxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gc2VsZWN0ZWRSZWNvcmRzLm1hcChyZWNvcmQgPT4gcmVjb3JkLmdldElkKCkpXG5cbiAgICBwcmVTZWxlY3RlZElkc1JlZi5jdXJyZW50ID0gc2VsZWN0ZWRJZHNcblxuICAgIC8vUHVibGlzaCByZWNvcmRzIHNlbGVjdGlvbiBjaGFuZ2UgbWVzc2FnZVxuICAgIE1lc3NhZ2VNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVibGlzaE1lc3NhZ2UoXG4gICAgICBuZXcgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKHdpZGdldElkLCBzZWxlY3RlZFJlY29yZHMpXG4gICAgKVxuXG4gICAgb3V0cHV0RGF0YVNvdXJjZS5zZWxlY3RSZWNvcmRzQnlJZHMoc2VsZWN0ZWRJZHMpXG4gIH0pXG5cbiAgY29uc3Qgb3JpZ2luYWxTZWxlY3RlZElkcyA9IFJlYWN0UmVkdXgudXNlU2VsZWN0b3IoKHN0YXRlOiBJTVN0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0luZm8/LltvdXRwdXREYXRhU291cmNlPy5pZF0/LnNlbGVjdGVkSWRzKVxuICBjb25zdCBbc2VsZWN0aW9uSW5kZXhlcywgc2V0U2VsZWN0aW9uSW5kZXhlc10gPSBSZWFjdC51c2VTdGF0ZTxXZWJDaGFydERhdGFJdGVtW10+KClcblxuICBjb25zdCBnZXRTZWxlY3Rpb25JdGVtcyA9IGhvb2tzLnVzZUV2ZW50Q2FsbGJhY2soKHNlbGVjdGVkSWRzKSA9PiB7XG4gICAgY29uc3Qgc291cmNlUmVjb3JkcyA9IG91dHB1dERhdGFTb3VyY2U/LmdldFNvdXJjZVJlY29yZHMoKVxuICAgIGlmICghc291cmNlUmVjb3Jkcz8ubGVuZ3RoKSByZXR1cm5cbiAgICBjb25zdCBpdGVtcyA9IGdldFNlbGVjdGVkSXRlbXMoc2VsZWN0ZWRJZHMgPz8gW10sIHNvdXJjZVJlY29yZHMpXG4gICAgcmV0dXJuIGl0ZW1zXG4gIH0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9yaWdpbmFsU2VsZWN0ZWRJZHMpIHJldHVyblxuICAgIGNvbnN0IG11dGFibGVTZWxlY3Rpb25JZHMgPSBvcmlnaW5hbFNlbGVjdGVkSWRzLmFzTXV0YWJsZSgpXG4gICAgLy8gaWYgdGhlIHNlbGVjdGVkIGlkcyBpcyBzYW1lIGFzIHRoZSBjdXJyZW50IHNlbGVjdGVkIGlkcywganVzdCByZXR1cm4uXG4gICAgaWYgKGxvZGFzaC5pc0RlZXBFcXVhbChtdXRhYmxlU2VsZWN0aW9uSWRzLCBwcmVTZWxlY3RlZElkc1JlZi5jdXJyZW50KSkgcmV0dXJuXG4gICAgcHJlU2VsZWN0ZWRJZHNSZWYuY3VycmVudCA9IG11dGFibGVTZWxlY3Rpb25JZHNcbiAgICBjb25zdCBzZWxlY3Rpb25JdGVtcyA9IGdldFNlbGVjdGlvbkl0ZW1zKG11dGFibGVTZWxlY3Rpb25JZHMpXG4gICAgc2V0U2VsZWN0aW9uSW5kZXhlcyhzZWxlY3Rpb25JdGVtcylcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtvcmlnaW5hbFNlbGVjdGVkSWRzXSlcbiAgY29uc3Qgc2VsZWN0aW9uRGF0YSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHsgc2VsZWN0aW9uSXRlbXM6IHNlbGVjdGlvbkluZGV4ZXMgfSksIFtzZWxlY3Rpb25JbmRleGVzXSlcbiAgcmV0dXJuIFtzZWxlY3Rpb25EYXRhLCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2VdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNlbGVjdGlvblxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgRGF0YVNvdXJjZSwgdHlwZSBJTVNxbEV4cHJlc3Npb24sIHR5cGUgRGF0YVJlY29yZCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgVW5wcml2aWxlZ2VkQ2hhcnQgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2NoYXJ0J1xuXG5leHBvcnQgdHlwZSBSZWNvcmRzU3RhdHVzID0gJ25vbmUnIHwgJ2Vycm9yJyB8ICdlbXB0eScgfCAnbG9hZGluZycgfCAnbG9hZGVkJyB8ICdleGNlZWQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcnRSdW50aW1lU3RhdGUge1xuICAvL1RoZSBlbGVtZW50IG9mIHRoZSBjaGFydCB3ZWIgY29tcG9uZW50LCB3aGljaCBpcyB1c2VkIGluIGByYW5nZS1jdXJzb3ItbW9kZWAgdG9vbC5cbiAgY2hhcnQ/OiBVbnByaXZpbGVnZWRDaGFydFxuICAvL0ZpbHRlciBjcml0ZXJpYSB1c2VkIGZvciBvcmlnaW5hbCBkYXRhLlxuICBmaWx0ZXI/OiBJTVNxbEV4cHJlc3Npb25cbiAgLy9UaGUgZGF0YSBzb3VyY2UgaW5zdGFuY2Ugb2YgdGhlIGB1c2VEYXRhU291cmNlYC5cbiAgZGF0YVNvdXJjZT86IERhdGFTb3VyY2VcbiAgLy9UaGUgZGF0YSBzb3VyY2UgaW5zdGFuY2Ugb2YgYG91dHB1dERhdGFTb3VyY2VgLlxuICBvdXRwdXREYXRhU291cmNlPzogRGF0YVNvdXJjZVxuICAvL1RoZSBmZXRjaGVkIHJlY29yZHMuXG4gIHJlY29yZHM/OiBEYXRhUmVjb3JkW11cbiAgLy9UaGUgcmVxdWVzdCBzdGF0dXMgb2YgcmVjb3Jkc1xuICByZWNvcmRzU3RhdHVzPzogUmVjb3Jkc1N0YXR1c1xuICAvL1RoZSB2ZXJzaW9uIG9mIHRoZSBkYXRhIHNvdXJjZSBxdWVyeVxuICBxdWVyeVZlcnNpb24/OiBudW1iZXJcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDaGFydFJ1bnRpbWVTdGF0ZSA9IHtcbiAgY2hhcnQ6IG51bGwsXG4gIGZpbHRlcjogbnVsbCxcbiAgZGF0YVNvdXJjZTogbnVsbCxcbiAgb3V0cHV0RGF0YVNvdXJjZTogbnVsbCxcbiAgcmVjb3Jkc1N0YXR1czogJ25vbmUnLFxuICBxdWVyeVZlcnNpb246IDBcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogQ2hhcnRSdW50aW1lU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX0NIQVJUJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjaGFydDogYWN0aW9uLnZhbHVlIH1cbiAgICBjYXNlICdTRVRfRklMVEVSJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmaWx0ZXI6IGFjdGlvbi52YWx1ZSB9XG4gICAgY2FzZSAnU0VUX0RBVEFfU09VUkNFJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXRhU291cmNlOiBhY3Rpb24udmFsdWUgfVxuICAgIGNhc2UgJ1NFVF9PVVRQVVRfREFUQV9TT1VSQ0UnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG91dHB1dERhdGFTb3VyY2U6IGFjdGlvbi52YWx1ZSB9XG4gICAgY2FzZSAnU0VUX1JFQ09SRFMnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlY29yZHM6IGFjdGlvbi52YWx1ZSB9XG4gICAgY2FzZSAnU0VUX1JFQ09SRFNfU1RBVFVTJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzU3RhdHVzOiBhY3Rpb24udmFsdWUgfVxuICAgIGNhc2UgJ1NFVF9RVUVSWV9WRVJTSU9OJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBxdWVyeVZlcnNpb246IGFjdGlvbi52YWx1ZSB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IENoYXJ0UnVudGltZVN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q2hhcnRSdW50aW1lU3RhdGU+KHVuZGVmaW5lZClcbmNvbnN0IENoYXJ0UnVudGltZURpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UmVhY3QuRGlzcGF0Y2g8YW55Pj4odW5kZWZpbmVkKVxuXG5pbnRlcmZhY2UgQ2hhcnRSdW50aW1lU3RhdGVQcm92aWRlclByb3BzIHtcbiAgZGVmYXVsdFN0YXRlPzogQ2hhcnRSdW50aW1lU3RhdGVcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgY29uc3QgQ2hhcnRSdW50aW1lU3RhdGVQcm92aWRlciA9IChwcm9wczogQ2hhcnRSdW50aW1lU3RhdGVQcm92aWRlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdFN0YXRlLCBjaGlsZHJlbiB9ID0gcHJvcHNcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXI8dHlwZW9mIHJlZHVjZXI+KHJlZHVjZXIsIGRlZmF1bHRTdGF0ZSB8fCBpbml0aWFsU3RhdGUpXG5cbiAgcmV0dXJuIDxDaGFydFJ1bnRpbWVTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICA8Q2hhcnRSdW50aW1lRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGFydFJ1bnRpbWVEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gIDwvQ2hhcnRSdW50aW1lU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlQ2hhcnRSdW50aW1lU3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KENoYXJ0UnVudGltZVN0YXRlQ29udGV4dClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNoYXJ0UnVudGltZURpc3BhdGNoID0gKCkgPT4ge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChDaGFydFJ1bnRpbWVEaXNwYXRjaENvbnRleHQpXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIF93aWRnZXRMYWJlbDogJ0NoYXJ0JyxcbiAgYmFyMVNlcmllc0xpbWl0YXRpb246ICdCYXIgb3IgY29sdW1uIGNoYXJ0cyB3aXRoIG9uZSBzZXJpZXMgYXJlIGxpbWl0ZWQgdG8gMTAsMDAwIGJhcnMgaW4gdG90YWwuIFBsZWFzZSBmaWx0ZXIgb3IgcmUtYWdncmVnYXRlIHlvdXIgZGF0YSBhbmQgdHJ5IGFnYWluLicsXG4gIGJhcjJTZXJpZXNMaW1pdGF0aW9uOiAnQmFyIG9yIGNvbHVtbiBjaGFydHMgd2l0aCB0d28gc2VyaWVzIGFyZSBsaW1pdGVkIHRvIDIsMDAwIGJhcnMsIG9yIDEsMDAwIGJhcnMgcGVyIHNlcmllcy4gUGxlYXNlIGZpbHRlciBvciByZS1hZ2dyZWdhdGUgeW91ciBkYXRhIGFuZCB0cnkgYWdhaW4uJyxcbiAgYmFyM1Nlcmllc0xpbWl0YXRpb246ICdCYXIgb3IgY29sdW1uIGNoYXJ0cyB3aXRoIHRocmVlIG9yIG1vcmUgc2VyaWVzIGFyZSBsaW1pdGVkIHRvIDIsMDAwIGJhcnMsIG9yIDEwMCBiYXJzIHBlciBzZXJpZXMuIFBsZWFzZSBmaWx0ZXIgb3IgcmUtYWdncmVnYXRlIHlvdXIgZGF0YSBhbmQgdHJ5IGFnYWluLicsXG4gIGxpbmVMaW1pdGF0aW9uOiAnTGluZSBvciBhcmVhIGNoYXJ0cyBhcmUgbGltaXRlZCB0byAxMCwwMDAgdmFsdWUgbWFya2VycyBpbiB0b3RhbCBhbmQgbWF4aW11bSBvZiAxMDAgc2VyaWVzLiBQbGVhc2UgZmlsdGVyIG9yIHJlLWFnZ3JlZ2F0ZSB5b3VyIGRhdGEgYW5kIHRyeSBhZ2Fpbi4nLFxuICBwaWVMaW1pdGF0aW9uOiAnQ2Fubm90IHJlbmRlciwgdG9vIG1hbnkgY2F0ZWdvcmllcy4gUGllIGNoYXJ0IGlzIGxpbWl0ZWQgdG8gMzAwIGNhdGVnb3JpZXMgYXMgdGhlIG1heGltdW0uJyxcbiAgZGF0YUVtcHR5VGlwOiAnTm8gZGF0YSBmb3VuZC4nXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3NlcmlhbCdcbmV4cG9ydCAqIGZyb20gJy4vc2NoZW1hJ1xuIiwiaW1wb3J0IHsgRXNyaUZpZWxkVHlwZSwgdHlwZSBGaWVsZEZvcm1hdFNjaGVtYSwgdHlwZSBGaWVsZFNjaGVtYSwgSmltdUZpZWxkVHlwZSwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCB0eXBlIEltbXV0YWJsZUFycmF5LCBJbW11dGFibGUsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIElNRmllbGRTY2hlbWEsIFN0YXRpc3RpY1R5cGUsIHR5cGUgRGF0YVNvdXJjZVNjaGVtYSwgdHlwZSBEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQnlGaWVsZFNlcmllc1gsIEJ5RmllbGRTZXJpZXNYQWxpYXMsIEJ5RmllbGRTZXJpZXNZLCBCeUZpZWxkU2VyaWVzWUFsaWFzLCBIaXN0b2dyYW1Db3VudEZpZWxkLCBIaXN0b2dyYW1Db3VudEZpZWxkQWxpYXMsIEhpc3RvZ3JhbU1heFZhbHVlRmllbGQsIEhpc3RvZ3JhbU1heFZhbHVlRmllbGRBbGlhcywgSGlzdG9ncmFtTWluVmFsdWVGaWVsZCwgSGlzdG9ncmFtTWluVmFsdWVGaWVsZEFsaWFzLCBTcGxpdEJ5T3RoZXJTZXJpZXNWYWx1ZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IGdldFNwbGl0QnlGaWVsZCwgdHlwZSBDaGFydFR5cGVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IGlzU2VyaWFsU2VyaWVzIH0gZnJvbSAnLi4vZGVmYXVsdCdcbmltcG9ydCB7IGdldEZpZWxkU2NoZW1hLCBnZXRPdXRTdGF0aXN0aWNBbGlhcywgZ2V0U3BsaXRCeUZpZWxkVmFsdWVzLCBnZXRTcGxpdE91dFN0YXRpc3RpY0FsaWFzLCBnZXRTcGxpdE91dFN0YXRpc3RpY05hbWUgfSBmcm9tICcuL3NlcmlhbCdcbmltcG9ydCB7IHR5cGUgV2ViQ2hhcnRTZXJpZXMgfSBmcm9tICcuLi8uLi9jb25maWcnXG5cbmNvbnN0IGdldENsZWFuRmllbGRTY2hlbWEgPSAoZmllbGQ6IHN0cmluZywgdHlwZTogSmltdUZpZWxkVHlwZSwgYWxpYXM/OiBzdHJpbmcsIG9yaWdpbkZpZWxkcz86IHN0cmluZ1tdKTogRmllbGRTY2hlbWEgPT4ge1xuICBjb25zdCBqaW11TmFtZSA9IGZpZWxkXG4gIGNvbnN0IG5hbWUgPSBmaWVsZFxuICBhbGlhcyA9IGFsaWFzID8/IGZpZWxkXG5cbiAgbGV0IGVzcmlUeXBlID0gRXNyaUZpZWxkVHlwZS5TdHJpbmdcbiAgbGV0IGZvcm1hdDogRmllbGRGb3JtYXRTY2hlbWEgPSBudWxsXG4gIGlmICh0eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlcikge1xuICAgIGZvcm1hdCA9IHtcbiAgICAgIGRpZ2l0U2VwYXJhdG9yOiB0cnVlLFxuICAgICAgcGxhY2VzOiAzXG4gICAgfVxuICAgIGVzcmlUeXBlID0gRXNyaUZpZWxkVHlwZS5Eb3VibGVcbiAgfVxuICBjb25zdCBzY2hlbWE6IEZpZWxkU2NoZW1hID0geyBqaW11TmFtZSwgdHlwZSwgZXNyaVR5cGUsIG5hbWUsIGFsaWFzLCBmb3JtYXQgfVxuICBpZiAob3JpZ2luRmllbGRzKSB7XG4gICAgc2NoZW1hLm9yaWdpbkZpZWxkcyA9IG9yaWdpbkZpZWxkc1xuICB9XG4gIHJldHVybiBzY2hlbWFcbn1cblxuZXhwb3J0IGNvbnN0IGdldEhpc3RvZ3JhbUZpZWxkcyA9IChxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0+ID0+IHtcbiAgbGV0IGZpZWxkcyA9IEltbXV0YWJsZSh7fSkgYXMgSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVOYW1lOiBzdHJpbmddOiBGaWVsZFNjaGVtYSB9PlxuXG4gIGNvbnN0IG9yaWdpbkZpZWxkID0gcXVlcnk/Lm91dEZpZWxkcz8uWzBdXG5cbiAgaWYgKG9yaWdpbkZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJbmZvcyA9IFt7XG4gICAgICBuYW1lOiBIaXN0b2dyYW1NaW5WYWx1ZUZpZWxkLFxuICAgICAgYWxpYXM6IEhpc3RvZ3JhbU1pblZhbHVlRmllbGRBbGlhc1xuICAgIH0sIHtcbiAgICAgIG5hbWU6IEhpc3RvZ3JhbU1heFZhbHVlRmllbGQsXG4gICAgICBhbGlhczogSGlzdG9ncmFtTWF4VmFsdWVGaWVsZEFsaWFzXG4gICAgfSwge1xuICAgICAgbmFtZTogSGlzdG9ncmFtQ291bnRGaWVsZCxcbiAgICAgIGFsaWFzOiBIaXN0b2dyYW1Db3VudEZpZWxkQWxpYXNcbiAgICB9XVxuICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoeyBuYW1lLCBhbGlhcyB9KSA9PiB7XG4gICAgICBjb25zdCBqaW11TmFtZSA9IG5hbWVcbiAgICAgIGNvbnN0IG9yaWdpbkZpZWxkcyA9IFtvcmlnaW5GaWVsZF1cbiAgICAgIGNvbnN0IHR5cGUgPSBKaW11RmllbGRUeXBlLk51bWJlclxuICAgICAgY29uc3QgZXNyaVR5cGUgPSBuYW1lID09PSBIaXN0b2dyYW1Db3VudEZpZWxkID8gRXNyaUZpZWxkVHlwZS5JbnRlZ2VyIDogRXNyaUZpZWxkVHlwZS5Eb3VibGVcbiAgICAgIGNvbnN0IG9yaWdpbkZpZWxkU2NoZW1hID0gZ2V0RmllbGRTY2hlbWEob3JpZ2luRmllbGQsIGRhdGFTb3VyY2VJZClcbiAgICAgIGNvbnN0IGRpZ2l0U2VwYXJhdG9yID0gb3JpZ2luRmllbGRTY2hlbWE/LmZvcm1hdD8uZGlnaXRTZXBhcmF0b3IgPz8gdHJ1ZVxuICAgICAgY29uc3QgcGxhY2VzID0gbmFtZSA9PT0gSGlzdG9ncmFtQ291bnRGaWVsZCA/IDAgOiAzXG4gICAgICBjb25zdCBmb3JtYXQgPSB7IC4uLm9yaWdpbkZpZWxkU2NoZW1hPy5mb3JtYXQsIGRpZ2l0U2VwYXJhdG9yLCBwbGFjZXMgfVxuICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSB7IGppbXVOYW1lLCB0eXBlLCBlc3JpVHlwZSwgbmFtZSwgYWxpYXMsIG9yaWdpbkZpZWxkcywgZm9ybWF0IH1cbiAgICAgIGZpZWxkcyA9IGZpZWxkcy5zZXQobmFtZSwgZmllbGRTY2hlbWEpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBmaWVsZHNcbn1cblxuZXhwb3J0IGNvbnN0IGdldEppbXVGaWVsZFNjaGVtYSA9IChmaWVsZDogc3RyaW5nLCBkYXRhU291cmNlSWQ6IHN0cmluZywgamltdU5hbWU/OiBzdHJpbmcpOiBJTUZpZWxkU2NoZW1hID0+IHtcbiAgbGV0IHNjaGVtYSA9IGdldEZpZWxkU2NoZW1hKGZpZWxkLCBkYXRhU291cmNlSWQpXG4gIGppbXVOYW1lID0gamltdU5hbWUgfHwgZmllbGRcbiAgc2NoZW1hID0gc2NoZW1hLnNldCgnamltdU5hbWUnLCBqaW11TmFtZSkuc2V0KCduYW1lJywgamltdU5hbWUpXG4gIHNjaGVtYSA9IHNjaGVtYS5zZXQoJ29yaWdpbkZpZWxkcycsIFtmaWVsZF0pXG4gIHJldHVybiBzY2hlbWFcbn1cblxuY29uc3QgZ2V0U2NoZW1hRm9ySGlzdG9ncmFtID0gKHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhU291cmNlSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBmaWVsZHMgPSBnZXRIaXN0b2dyYW1GaWVsZHMocXVlcnksIGRhdGFTb3VyY2VJZClcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgZmllbGRzOiBmaWVsZHMuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICB9IGFzIHVua25vd24gYXMgRGF0YVNvdXJjZVNjaGVtYVxuXG4gIHJldHVybiBzY2hlbWFcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNjYXR0ZXJQbG90RmllbGRzID0gKHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhU291cmNlSWQ6IHN0cmluZykgPT4ge1xuICBsZXQgZmllbGRzID0gSW1tdXRhYmxlKHt9KSBhcyBJbW11dGFibGVPYmplY3Q8eyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0+XG4gIGNvbnN0IG91dEZpZWxkcyA9IHF1ZXJ5Py5vdXRGaWVsZHNcblxuICBpZiAob3V0RmllbGRzKSB7XG4gICAgb3V0RmllbGRzLmZvckVhY2goKG91dEZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXRKaW11RmllbGRTY2hlbWEob3V0RmllbGQsIGRhdGFTb3VyY2VJZClcbiAgICAgIGZpZWxkcyA9IGZpZWxkcy5zZXQob3V0RmllbGQsIHNjaGVtYSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGZpZWxkc1xufVxuXG5jb25zdCBnZXRTY2hlbWFGb3JTY2F0dGVyUGxvdCA9IChxdWVyeTogSU1GZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZmllbGRzID0gZ2V0U2NhdHRlclBsb3RGaWVsZHMocXVlcnksIGRhdGFTb3VyY2VJZClcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgZmllbGRzOiBmaWVsZHMuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICB9IGFzIHVua25vd24gYXMgRGF0YVNvdXJjZVNjaGVtYVxuXG4gIHJldHVybiBzY2hlbWFcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcmlhbFNwbGl0QnlGaWVsZHMgPSAocXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIGRhdGFTb3VyY2VJZDogc3RyaW5nLCBzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPiwgc3BsaXRCeVZhbHVlcz86IEFycmF5PG51bWJlciB8IHN0cmluZz4pOiBJbW11dGFibGVPYmplY3Q8eyBbamltdU5hbWU6IHN0cmluZ106IEZpZWxkU2NoZW1hIH0+ID0+IHtcbiAgbGV0IGZpZWxkcyA9IEltbXV0YWJsZSh7fSkgYXMgSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVOYW1lOiBzdHJpbmddOiBGaWVsZFNjaGVtYSB9PlxuICBjb25zdCBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcyA9IHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljc1xuXG4gIGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXRKaW11RmllbGRTY2hlbWEoZmllbGQsIGRhdGFTb3VyY2VJZClcbiAgICAgIGZpZWxkcyA9IGZpZWxkcy5zZXQoZmllbGQsIHNjaGVtYSlcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgb3V0RmllbGRzID0gcXVlcnk/Lm91dEZpZWxkc1xuICBjb25zdCBvdXRTdGF0aXN0aWNzID0gcXVlcnk/Lm91dFN0YXRpc3RpY3NcbiAgY29uc3Qgc3BsaXRCeUZpZWxkID0gZ2V0U3BsaXRCeUZpZWxkKHF1ZXJ5Py53aGVyZSwgdHJ1ZSlcblxuICBjb25zdCBzZXJpZXNTcGxpdEJ5VmFsdWVzID0gZ2V0U3BsaXRCeUZpZWxkVmFsdWVzKHNlcmllcykuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICBjb25zdCB1bmlxdWVTcGxpdEJ5VmFsdWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KHNlcmllc1NwbGl0QnlWYWx1ZXMuY29uY2F0KHNwbGl0QnlWYWx1ZXMgPz8gW10pKSlcblxuICBsZXQgb25TdGF0aXN0aWNGaWVsZCA9ICcnXG4gIGxldCBzdGF0aXN0aWNUeXBlID0gJ25vX2FnZ3JlZ2F0aW9uJ1xuICBpZiAoZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MgJiYgb3V0RmllbGRzKSB7IC8vbm8gYWdncmVnYXRpb25cbiAgICBvblN0YXRpc3RpY0ZpZWxkID0gb3V0RmllbGRzWzBdXG4gIH0gZWxzZSBpZiAoZ3JvdXBCeUZpZWxkc0ZvclN0YXRpc3RpY3MgJiYgb3V0U3RhdGlzdGljcykgeyAvL2J5IGdyb3VwXG4gICAgb25TdGF0aXN0aWNGaWVsZCA9IG91dFN0YXRpc3RpY3NbMF0/Lm9uU3RhdGlzdGljRmllbGRcbiAgICBzdGF0aXN0aWNUeXBlID0gb3V0U3RhdGlzdGljc1swXT8uc3RhdGlzdGljVHlwZVxuICB9XG4gIGNvbnN0IG9uU3RhdGlzdGljRmllbGRBbGlhcyA9IGdldEZpZWxkU2NoZW1hKG9uU3RhdGlzdGljRmllbGQsIGRhdGFTb3VyY2VJZCk/LmFsaWFzID8/IG9uU3RhdGlzdGljRmllbGRcbiAgdW5pcXVlU3BsaXRCeVZhbHVlcy5mb3JFYWNoKChzcGxpdEJ5VmFsdWUpID0+IHtcbiAgICBjb25zdCBqaW11RmllbGROYW1lID0gZ2V0U3BsaXRPdXRTdGF0aXN0aWNOYW1lKG9uU3RhdGlzdGljRmllbGRBbGlhcywgc3RhdGlzdGljVHlwZSwgc3BsaXRCeVZhbHVlKVxuICAgIGNvbnN0IGppbXVGaWVsZEFsaWFzID0gZ2V0U3BsaXRPdXRTdGF0aXN0aWNBbGlhcyhvblN0YXRpc3RpY0ZpZWxkLCBzdGF0aXN0aWNUeXBlLCBzcGxpdEJ5VmFsdWUpXG4gICAgY29uc3Qgb3JpZ2luRmllbGQgPSBvblN0YXRpc3RpY0ZpZWxkXG4gICAgaWYgKG9yaWdpbkZpZWxkKSB7XG4gICAgICBsZXQgc2NoZW1hID0gZ2V0SmltdUZpZWxkU2NoZW1hKG9yaWdpbkZpZWxkLCBkYXRhU291cmNlSWQsIGppbXVGaWVsZE5hbWUpXG4gICAgICBzY2hlbWEgPSBzY2hlbWEuc2V0KCdhbGlhcycsIGppbXVGaWVsZEFsaWFzKVxuICAgICAgc2NoZW1hID0gc2NoZW1hLnNldCgnb3JpZ2luRmllbGRzJywgc2NoZW1hLm9yaWdpbkZpZWxkcy5jb25jYXQoc3BsaXRCeUZpZWxkKSlcbiAgICAgIGxldCBmb3JtYXQgPSBzY2hlbWEuZm9ybWF0XG4gICAgICBpZiAoc3RhdGlzdGljVHlwZSA9PT0gU3RhdGlzdGljVHlwZS5Db3VudCkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgSW1tdXRhYmxlKHt9KVxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQuc2V0KCdwbGFjZXMnLCAwKVxuICAgICAgfSBlbHNlIGlmIChzdGF0aXN0aWNUeXBlID09PSBTdGF0aXN0aWNUeXBlLkF2Zykge1xuICAgICAgICBpZiAodHlwZW9mIHNjaGVtYS5mb3JtYXQ/LnBsYWNlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgSW1tdXRhYmxlKHt9KVxuICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zZXQoJ3BsYWNlcycsIDMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3JtYXQpIHtcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hLnNldCgnZm9ybWF0JywgZm9ybWF0KVxuICAgICAgfVxuICAgICAgZmllbGRzID0gZmllbGRzLnNldChqaW11RmllbGROYW1lLCBzY2hlbWEpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmllbGRzXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJpYWxGaWVsZHMgPSAocXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIGRhdGFTb3VyY2VJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzID0gcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzXG4gIGNvbnN0IG91dEZpZWxkcyA9IHF1ZXJ5Py5vdXRGaWVsZHNcbiAgY29uc3Qgb3V0U3RhdGlzdGljcyA9IHF1ZXJ5Py5vdXRTdGF0aXN0aWNzXG5cbiAgbGV0IGZpZWxkcyA9IEltbXV0YWJsZSh7fSkgYXMgSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVOYW1lOiBzdHJpbmddOiBGaWVsZFNjaGVtYSB9PlxuXG4gIGlmIChncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcyAmJiBvdXRGaWVsZHMpIHsgLy9ubyBhZ2dyZWdhdGlvblxuICAgIGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzLmNvbmNhdChvdXRGaWVsZHMpLmZvckVhY2goKG91dEZpZWxkKSA9PiB7XG4gICAgICBpZiAob3V0RmllbGQpIHtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gZ2V0SmltdUZpZWxkU2NoZW1hKG91dEZpZWxkLCBkYXRhU291cmNlSWQpXG4gICAgICAgIGZpZWxkcyA9IGZpZWxkcy5zZXQob3V0RmllbGQsIHNjaGVtYSlcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2UgaWYgKGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzICYmIG91dFN0YXRpc3RpY3MpIHsgLy9ieSBncm91cFxuICAgIGNvbnN0IGNhdGVnb3J5RmllbGQgPSBncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljc1swXVxuICAgIGlmIChjYXRlZ29yeUZpZWxkKSB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBnZXRKaW11RmllbGRTY2hlbWEoY2F0ZWdvcnlGaWVsZCwgZGF0YVNvdXJjZUlkKVxuICAgICAgZmllbGRzID0gZmllbGRzLnNldChjYXRlZ29yeUZpZWxkLCBzY2hlbWEpXG4gICAgfVxuICAgIG91dFN0YXRpc3RpY3MuZm9yRWFjaCgoc3RhdGlzdGljKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5GaWVsZCA9IHN0YXRpc3RpYy5vblN0YXRpc3RpY0ZpZWxkXG4gICAgICBpZiAob3JpZ2luRmllbGQpIHtcbiAgICAgICAgY29uc3Qgc3RhdGlzdGljVHlwZSA9IHN0YXRpc3RpYy5zdGF0aXN0aWNUeXBlXG4gICAgICAgIGNvbnN0IGppbXVGaWVsZE5hbWUgPSBzdGF0aXN0aWMub3V0U3RhdGlzdGljRmllbGROYW1lXG4gICAgICAgIGNvbnN0IGZpZWxkQWxpYXMgPSBnZXRGaWVsZFNjaGVtYShvcmlnaW5GaWVsZCwgZGF0YVNvdXJjZUlkKT8uYWxpYXMgPz8gb3JpZ2luRmllbGRcbiAgICAgICAgY29uc3QgamltdUZpZWxkQWxpYXMgPSBnZXRPdXRTdGF0aXN0aWNBbGlhcyhmaWVsZEFsaWFzLCBzdGF0aXN0aWNUeXBlKVxuICAgICAgICBsZXQgc2NoZW1hID0gZ2V0SmltdUZpZWxkU2NoZW1hKG9yaWdpbkZpZWxkLCBkYXRhU291cmNlSWQsIGppbXVGaWVsZE5hbWUpXG5cbiAgICAgICAgc2NoZW1hID0gc2NoZW1hLnNldCgnYWxpYXMnLCBqaW11RmllbGRBbGlhcylcbiAgICAgICAgLy8gZGVmaW5pbmcgZm9ybWF0cyBmb3IgdGhlIHNjaGVtYSBvZiBvdXRwdXQgZGF0YSBzb3VyY2UgaHR0cHM6Ly9kZXZ0b3BpYS5lc3JpLmNvbS9CZWlqaW5nLVItRC1DZW50ZXIvRXhwZXJpZW5jZUJ1aWxkZXIvaXNzdWVzLzg5MDJcbiAgICAgICAgbGV0IGZvcm1hdCA9IHNjaGVtYS5mb3JtYXRcbiAgICAgICAgaWYgKHN0YXRpc3RpY1R5cGUgPT09IFN0YXRpc3RpY1R5cGUuQ291bnQpIHtcbiAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgSW1tdXRhYmxlKHt9KVxuICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5zZXQoJ3BsYWNlcycsIDApXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGlzdGljVHlwZSA9PT0gU3RhdGlzdGljVHlwZS5BdmcpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHNjaGVtYS5mb3JtYXQ/LnBsYWNlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCBJbW11dGFibGUoe30pXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQuc2V0KCdwbGFjZXMnLCAzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgc2NoZW1hID0gc2NoZW1hLnNldCgnZm9ybWF0JywgZm9ybWF0KVxuICAgICAgICB9XG4gICAgICAgIGZpZWxkcyA9IGZpZWxkcy5zZXQoamltdUZpZWxkTmFtZSwgc2NoZW1hKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoIWdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzICYmIG91dFN0YXRpc3RpY3MpIHsgLy9ieSBmaWVsZFxuICAgIGNvbnN0IG9yaWdpbkZpZWxkcyA9IG91dFN0YXRpc3RpY3MubWFwKChvdXRTdGF0aXN0aWMpID0+IG91dFN0YXRpc3RpYy5vblN0YXRpc3RpY0ZpZWxkKS5hc011dGFibGU/Lih7IGRlZXA6IHRydWUgfSlcbiAgICBjb25zdCB4RmllbGQgPSBCeUZpZWxkU2VyaWVzWFxuICAgIGNvbnN0IHlGaWVsZCA9IEJ5RmllbGRTZXJpZXNZXG4gICAgY29uc3QgeEZpZWxkU2NoZW1hID0gZ2V0Q2xlYW5GaWVsZFNjaGVtYSh4RmllbGQsIEppbXVGaWVsZFR5cGUuU3RyaW5nLCBCeUZpZWxkU2VyaWVzWEFsaWFzLCBvcmlnaW5GaWVsZHMpXG4gICAgY29uc3QgeUZpZWxkU2NoZW1hID0gZ2V0Q2xlYW5GaWVsZFNjaGVtYSh5RmllbGQsIEppbXVGaWVsZFR5cGUuTnVtYmVyLCBCeUZpZWxkU2VyaWVzWUFsaWFzLCBvcmlnaW5GaWVsZHMpXG4gICAgZmllbGRzID0gZmllbGRzLnNldCh4RmllbGQsIHhGaWVsZFNjaGVtYSlcbiAgICBmaWVsZHMgPSBmaWVsZHMuc2V0KHlGaWVsZCwgeUZpZWxkU2NoZW1hKVxuICB9XG4gIHJldHVybiBmaWVsZHNcbn1cblxuY29uc3QgZ2V0U2NoZW1hRm9yU2VyaWFsID0gKHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBkYXRhU291cmNlSWQ6IHN0cmluZyk6IERhdGFTb3VyY2VTY2hlbWEgPT4ge1xuICBjb25zdCBmaWVsZHMgPSBnZXRTZXJpYWxGaWVsZHMocXVlcnksIGRhdGFTb3VyY2VJZClcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgZmllbGRzOiBmaWVsZHMuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KVxuICB9IGFzIHVua25vd24gYXMgRGF0YVNvdXJjZVNjaGVtYVxuXG4gIHJldHVybiBzY2hlbWFcbn1cblxuY29uc3QgZ2V0SWRTY2hlbWEgPSAoZGF0c1NvdXJjZTogRGF0YVNvdXJjZSkgPT4ge1xuICBjb25zdCBpZEZpZWxkID0gZGF0c1NvdXJjZS5nZXRJZEZpZWxkKClcbiAgY29uc3QgaWRGaWVsZFNjaGVtYSA9IGRhdHNTb3VyY2UuZ2V0RGF0YVNvdXJjZUpzb24oKS5zY2hlbWEuZmllbGRzW2lkRmllbGRdXG4gIHJldHVybiBpZEZpZWxkU2NoZW1hPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hID0gKFxuICBkYXRhU291cmNlOiBEYXRhU291cmNlLFxuICBvcmlnaW5hbERzSWQ6IHN0cmluZyxcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHNlcmllc1R5cGU6IENoYXJ0VHlwZXNcbik6IERhdGFTb3VyY2VTY2hlbWEgPT4ge1xuICBjb25zdCBpZEZpZWxkU2NoZW1hID0gZ2V0SWRTY2hlbWEoZGF0YVNvdXJjZSlcbiAgbGV0IHNjaGVtYTogRGF0YVNvdXJjZVNjaGVtYSA9IG51bGxcbiAgaWYgKHNlcmllc1R5cGUgPT09ICdoaXN0b2dyYW1TZXJpZXMnKSB7XG4gICAgc2NoZW1hID0gZ2V0U2NoZW1hRm9ySGlzdG9ncmFtKHF1ZXJ5LCBvcmlnaW5hbERzSWQpXG4gIH0gZWxzZSBpZiAoaXNTZXJpYWxTZXJpZXMoc2VyaWVzVHlwZSkgfHwgc2VyaWVzVHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICBzY2hlbWEgPSBnZXRTY2hlbWFGb3JTZXJpYWwocXVlcnksIG9yaWdpbmFsRHNJZClcbiAgfSBlbHNlIGlmIChzZXJpZXNUeXBlID09PSAnc2NhdHRlclNlcmllcycpIHtcbiAgICBzY2hlbWEgPSBnZXRTY2hlbWFGb3JTY2F0dGVyUGxvdChxdWVyeSwgb3JpZ2luYWxEc0lkKVxuICB9XG4gIHNjaGVtYSA9IHtcbiAgICBpZEZpZWxkOiBpZEZpZWxkU2NoZW1hLmppbXVOYW1lLFxuICAgIGZpZWxkczoge1xuICAgICAgW2lkRmllbGRTY2hlbWEuamltdU5hbWVdOiBpZEZpZWxkU2NoZW1hLFxuICAgICAgLi4uc2NoZW1hLmZpZWxkc1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NoZW1hXG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlU2NoZW1hRm9yU3BsaXRCeSA9IChcbiAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZSxcbiAgb3JpZ2luYWxEc0lkOiBzdHJpbmcsXG4gIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLFxuICBwcm9wU2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4sXG4gIHNwbGl0QnlWYWx1ZXM/OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+XG4pOiBEYXRhU291cmNlU2NoZW1hID0+IHtcbiAgY29uc3QgaWRGaWVsZFNjaGVtYSA9IGdldElkU2NoZW1hKGRhdGFTb3VyY2UpXG4gIGNvbnN0IHNlcmllcyA9IHByb3BTZXJpZXMuZmlsdGVyKFxuICAgIChzZXJpZSkgPT4gc2VyaWUuaWQgIT09IFNwbGl0QnlPdGhlclNlcmllc1ZhbHVlXG4gIClcbiAgY29uc3QgZmllbGRzID0gZ2V0U2VyaWFsU3BsaXRCeUZpZWxkcyhcbiAgICBxdWVyeSxcbiAgICBvcmlnaW5hbERzSWQsXG4gICAgc2VyaWVzLFxuICAgIHNwbGl0QnlWYWx1ZXNcbiAgKVxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgaWRGaWVsZDogaWRGaWVsZFNjaGVtYS5qaW11TmFtZSxcbiAgICBmaWVsZHM6IHtcbiAgICAgIFtpZEZpZWxkU2NoZW1hLmppbXVOYW1lXTogaWRGaWVsZFNjaGVtYSxcbiAgICAgIC4uLmZpZWxkcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXG4gICAgfVxuICB9IGFzIHVua25vd24gYXMgRGF0YVNvdXJjZVNjaGVtYVxuXG4gIHJldHVybiBzY2hlbWFcbn1cbiIsImltcG9ydCB7XG4gIHR5cGUgSW1tdXRhYmxlT2JqZWN0LFxuICB0eXBlIEltbXV0YWJsZUFycmF5LFxuICB0eXBlIElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIEppbXVGaWVsZFR5cGUsXG4gIEltbXV0YWJsZSxcbiAgdHlwZSBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyxcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIERhdGFTb3VyY2VNYW5hZ2VyXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSVNpbXBsZUZpbGxTeW1ib2wsIHR5cGUgSVNpbXBsZUxpbmVTeW1ib2wgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7IHR5cGUgQ2F0ZWdvcnlGb3JtYXRPcHRpb25zLCB0eXBlIERhdGVUaW1lRm9ybWF0T3B0aW9ucywgZ2V0RGVmYXVsdENhdGVnb3J5Rm9ybWF0LCB0eXBlIFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzLCBXZWJDaGFydFN0YWNrZWRLaW5kcywgZ2V0U3BsaXRCeVZhbHVlLCBXZWJDaGFydFNvcnRPcmRlcktpbmRzLCBnZXRTZXJpZXNUeXBlLCB0eXBlIFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXMsIFdlYkNoYXJ0VGltZUludGVydmFsVW5pdHMsIGdldFNwbGl0QnlGaWVsZCwgdHlwZSBXZWJDaGFydEJhckNoYXJ0U2VyaWVzLCB0eXBlIFdlYkNoYXJ0U2NhdHRlclBsb3RTZXJpZXMsIHR5cGUgV2ViQ2hhcnRIaXN0b2dyYW1TZXJpZXMsIFdlYkNoYXJ0VGltZUFnZ3JlZ2F0aW9uVHlwZXMsIFdlYkNoYXJ0TnVsbFBvbGljeVR5cGVzIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9jaGFydCdcbmltcG9ydCB7IENhdGVnb3J5VHlwZSwgdHlwZSBJV2ViQ2hhcnQsIHR5cGUgQ2hhcnRTdGF0aXN0aWNUeXBlLCB0eXBlIFdlYkNoYXJ0U2VyaWVzLCB0eXBlIENoYXJ0VHlwZSwgdHlwZSBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgeyB0eXBlIFNlcmllc0NvbG9yUHJvcHMsIFNlcmllc0NvbG9ycywgZ2V0Q29sb3JJbk9yZGVyLCBnZXREZWZhdWx0QmFyQ2hhcnRTZXJpZXMsIGdldERlZmF1bHREYXRlRm9ybWF0LCBnZXREZWZhdWx0SGlzdG9ncmFtU2VyaWVzLCBnZXREZWZhdWx0TGluZUNoYXJ0U2VyaWVzLCBnZXREZWZhdWx0UGllQ2hhcnRTZXJpZXMsIGdldERlZmF1bHRTY2F0dGVyUGxvdENoYXJ0U2VyaWVzLCBnZXROb25SZXBlYXRpbmdDb2xvciwgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuLi9kZWZhdWx0J1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgU3BsaXRCeU90aGVyU2VyaWVzVmFsdWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0ZWRPcHRpb24ge1xuICBuYW1lOiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xufVxuXG5jb25zdCBjYWNoZUZpZWxkU2NoZW1hID0ge31cbi8qKlxuICogR2V0IHRoZSBzY2hlbWEgb2YgYSBzaW5nbGUgZmllbGRcbiAqIEBwYXJhbSBqaW11RmllbGROYW1lXG4gKiBAcGFyYW0gZGF0YVNvdXJjZUlkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGaWVsZFNjaGVtYSA9IChcbiAgamltdUZpZWxkTmFtZTogc3RyaW5nLFxuICBkYXRhU291cmNlSWQ6IHN0cmluZ1xuKTogSU1GaWVsZFNjaGVtYSB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChjYWNoZUZpZWxkU2NoZW1hW2ppbXVGaWVsZE5hbWVdICE9IG51bGwpIHJldHVybiBjYWNoZUZpZWxkU2NoZW1hW2ppbXVGaWVsZE5hbWVdXG4gIGNvbnN0IGRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZClcbiAgY29uc3QgZHNTY2hlbWEgPSBkcz8uZ2V0U2NoZW1hKClcbiAgY29uc3QgZmllbGRTY2hlbWEgPSBkc1NjaGVtYT8uZmllbGRzPy5bamltdUZpZWxkTmFtZV1cbiAgY2FjaGVGaWVsZFNjaGVtYVtqaW11RmllbGROYW1lXSA9IGZpZWxkU2NoZW1hXG4gIHJldHVybiBmaWVsZFNjaGVtYVxufVxuXG5jb25zdCBjYWNoZUZpZWxkc1NjaGVtYSA9IHt9XG5cbi8qKlxuICogR2V0IGFsbCB0aGUgZmllbGQgc2NoZW1hIGluIGEgZGF0YSBzb3VyY2VcbiAqIEBwYXJhbSBkYXRhU291cmNlSWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZpZWxkc1NjaGVtYSA9IChcbiAgZGF0YVNvdXJjZUlkOiBzdHJpbmdcbik6IHsgW2ppbXVOYW1lOiBzdHJpbmddOiBJTUZpZWxkU2NoZW1hIH0gfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoY2FjaGVGaWVsZHNTY2hlbWFbZGF0YVNvdXJjZUlkXSAhPSBudWxsKSByZXR1cm4gY2FjaGVGaWVsZHNTY2hlbWFbZGF0YVNvdXJjZUlkXVxuICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlSWQpXG4gIGNvbnN0IGRzU2NoZW1hID0gZHM/LmdldFNjaGVtYSgpXG4gIGNvbnN0IGZpZWxkc1NjaGVtYSA9IGRzU2NoZW1hPy5maWVsZHNcbiAgY2FjaGVGaWVsZHNTY2hlbWFbZGF0YVNvdXJjZUlkXSA9IGZpZWxkc1NjaGVtYVxuICByZXR1cm4gZmllbGRzU2NoZW1hXG59XG5cbmNvbnN0IGNhY2hlT2JqZWN0SWRGaWVsZCA9IHt9XG4vKipcbiAqIGdldCBvYmplY3RpZFxuICogQHBhcmFtIGRhdGFTb3VyY2VJZFxuICovXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0SWRGaWVsZCA9IChkYXRhU291cmNlSWQ6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmIChjYWNoZU9iamVjdElkRmllbGRbZGF0YVNvdXJjZUlkXSAhPSBudWxsKSByZXR1cm4gY2FjaGVPYmplY3RJZEZpZWxkW2RhdGFTb3VyY2VJZF1cbiAgY29uc3QgZHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZGF0YVNvdXJjZUlkKVxuICBpZiAoZHMgPT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgZGF0YSBzb3VyY2UgaWQ6ICR7ZGF0YVNvdXJjZUlkfWApXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2JqZWN0SWQgPSBkcy5nZXRJZEZpZWxkKClcbiAgY2FjaGVPYmplY3RJZEZpZWxkW2RhdGFTb3VyY2VJZF0gPSBvYmplY3RJZFxuICByZXR1cm4gb2JqZWN0SWRcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZpZWxkIHR5cGUuXG4gKiBAcGFyYW0gamltdUZpZWxkTmFtZVxuICogQHBhcmFtIGRhdGFTb3VyY2VJZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RmllbGRUeXBlID0gKFxuICBqaW11RmllbGROYW1lOiBzdHJpbmcsXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXG4pOiBKaW11RmllbGRUeXBlID0+IHtcbiAgY29uc3QgZmllbGRTY2hlbWEgPSBnZXRGaWVsZFNjaGVtYShqaW11RmllbGROYW1lLCBkYXRhU291cmNlSWQpXG4gIHJldHVybiBmaWVsZFNjaGVtYT8udHlwZVxufVxuXG4vKipcbiAqIEdldCB0aGUgdGVtcGxhdGUgdHlwZSBvZiB0aGUgY3VycmVudCBzZXJpZXMuXG4gKiBAcGFyYW0gc2VyaWVzXG4gKiBAcGFyYW0gZmFsbGJhY2tUeXBlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUZW1wbGF0ZVR5cGUgPSAod2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+KTogW0NoYXJ0VHlwZSwgVGVtcGxhdGVUeXBlXSA9PiB7XG4gIGNvbnN0IHNlcmllcyA9IHdlYkNoYXJ0Py5zZXJpZXNcbiAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUoc2VyaWVzIGFzIGFueSkgPz8gJ2JhclNlcmllcydcblxuICBjb25zdCBzZXJpZSA9IHNlcmllcz8uWzBdIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFBpZUNoYXJ0U2VyaWVzPlxuICBsZXQgdHlwZTogQ2hhcnRUeXBlXG4gIGxldCBzdWJUeXBlOiBUZW1wbGF0ZVR5cGVcbiAgaWYgKCFzZXJpZSkgcmV0dXJuIFtdIGFzIGFueVxuICBpZiAoc2VyaWVzVHlwZSA9PT0gJ2JhclNlcmllcycpIHtcbiAgICBjb25zdCBzdGFja2VkVHlwZSA9IChzZXJpZSBhcyBhbnkpLnN0YWNrZWRUeXBlXG4gICAgY29uc3Qgcm90YXRlZCA9IHdlYkNoYXJ0Py5yb3RhdGVkID8/IGZhbHNlXG4gICAgY29uc3Qgc3VmZml4ID0gcm90YXRlZCA/ICdiYXInIDogJ2NvbHVtbidcbiAgICBjb25zdCBwcmVmaXggPSBzdGFja2VkVHlwZSA9PT0gJ3NpZGVCeVNpZGUnID8gJycgOiBzdGFja2VkVHlwZVxuICAgIHR5cGUgPSBzdWZmaXhcbiAgICBzdWJUeXBlID0gKHByZWZpeCA/IGAke3ByZWZpeH0tJHtzdWZmaXh9YCA6IHN1ZmZpeCkgYXMgVGVtcGxhdGVUeXBlXG4gIH0gZWxzZSBpZiAoc2VyaWVzVHlwZSA9PT0gJ2xpbmVTZXJpZXMnKSB7XG4gICAgY29uc3Qgc2hvd0FyZWEgPSBnZXRTZXJpYUxsaW5lU2hvd0FyZWEoc2VyaWVzKVxuICAgIGNvbnN0IGxpbmVTbW9vdGhlZCA9IGdldFNlcmlhTGxpbmVTbW9vdGhlZChzZXJpZXMpXG5cbiAgICBjb25zdCBzdWZmaXggPSBzaG93QXJlYSA/ICdhcmVhJyA6ICdsaW5lJ1xuICAgIGxldCBwcmVmaXggPSAnJ1xuICAgIGlmIChsaW5lU21vb3RoZWQpIHtcbiAgICAgIHByZWZpeCA9ICdzbW9vdGgnXG4gICAgfVxuICAgIHR5cGUgPSBzdWZmaXhcbiAgICBzdWJUeXBlID0gKHByZWZpeCA/IGAke3ByZWZpeH0tJHtzdWZmaXh9YCA6IHN1ZmZpeCkgYXMgVGVtcGxhdGVUeXBlXG4gIH0gZWxzZSBpZiAoc2VyaWVzVHlwZSA9PT0gJ3BpZVNlcmllcycpIHtcbiAgICB0eXBlID0gJ3BpZSdcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IHNlcmllPy5pbm5lclJhZGl1cyA/PyAwXG4gICAgc3ViVHlwZSA9IGlubmVyUmFkaXVzID4gMCA/ICdkb251dCcgOiAncGllJ1xuICB9IGVsc2UgaWYgKHNlcmllc1R5cGUgPT09ICdzY2F0dGVyU2VyaWVzJykge1xuICAgIHR5cGUgPSAnc2NhdHRlcidcbiAgICBzdWJUeXBlID0gJ3NjYXR0ZXInXG4gIH0gZWxzZSBpZiAoc2VyaWVzVHlwZSA9PT0gJ2hpc3RvZ3JhbVNlcmllcycpIHtcbiAgICB0eXBlID0gJ2hpc3RvZ3JhbSdcbiAgICBzdWJUeXBlID0gJ2hpc3RvZ3JhbSdcbiAgfVxuXG4gIHJldHVybiBbdHlwZSwgc3ViVHlwZV1cbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmcuXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZVN0cmluZyA9IChzdHI6IHN0cmluZykgPT4ge1xuICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHdoZXRoZXJVc2VJZEZpZWxkRm9yTm9uQ291bnQgPSAocXVlcnk6IEltbXV0YWJsZU9iamVjdDxGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcz4sIHNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LCBkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gIGlmICghZGF0YVNvdXJjZSkgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IHN0YXR5c3RpY3NUeXBlID0gcXVlcnk/Lm91dFN0YXRpc3RpY3M/LlswXT8uc3RhdGlzdGljVHlwZVxuICBpZiAoc3RhdHlzdGljc1R5cGUgPT09ICdjb3VudCcpIHJldHVybiBmYWxzZVxuXG4gIGNvbnN0IHVzZWRGaWVsZHMgPSBzZXJpZXM/Lm1hcCgoc2VyaWUpID0+IHNlcmllLmlkKVxuICBpZiAoIXVzZWRGaWVsZHM/Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IGlkRkllbGQgPSBkYXRhU291cmNlLmdldElkRmllbGQoKVxuICByZXR1cm4gdXNlZEZpZWxkcy5pbmNsdWRlcyhpZEZJZWxkKVxufVxuXG5leHBvcnQgY29uc3Qgd2hldGhlclVzZUlubGluZURhdGFTb3VyY2UgPSAod2ViQ2hhcnQ6IEltbXV0YWJsZU9iamVjdDxJV2ViQ2hhcnQ+LCBkYXRhU291cmNlOiBEYXRhU291cmNlKSA9PiB7XG4gIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHdlYkNoYXJ0Py5zZXJpZXMgYXMgYW55KVxuICBjb25zdCBpc1BpZU9yU2VyaWFsQ2hhcnQgPSBpc1NlcmlhbFNlcmllcyhzZXJpZXNUeXBlKSB8fCBzZXJpZXNUeXBlID09PSAncGllU2VyaWVzJ1xuICBpZiAoIWlzUGllT3JTZXJpYWxDaGFydCkgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IGNhdGVnb3J5VHlwZSA9IGdldENhdGVnb3J5VHlwZSh3ZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnkpXG4gIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUZpZWxkKSByZXR1cm4gdHJ1ZVxuXG4gIGNvbnN0IHVzZUlkRmllbGRGb3JOb25Db3VudCA9IHdoZXRoZXJVc2VJZEZpZWxkRm9yTm9uQ291bnQod2ViQ2hhcnQ/LmRhdGFTb3VyY2U/LnF1ZXJ5LCB3ZWJDaGFydD8uc2VyaWVzLCBkYXRhU291cmNlKVxuICByZXR1cm4gdXNlSWRGaWVsZEZvck5vbkNvdW50XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgYSBzdHJpbmcgZmllbGQgaXMgZW1wdHkgKGRpZmZlcmVudCBmcm9tIHVuZGVmaW5lZCwgbnVsbCBhbmQgZW1wdHkgc3RyaW5nKS5cbiAqIFRoZSB2YWx1ZSBpcyBzdHJpbmdpZmllZCBiZWZvcmUgYmVpbmcgdHJpbW1lZCB0byBkZWJ1bmsgZWRnZSBjYXNlcyBsaWtlIHdoZW4gdGhlIHZhbHVlIGlzIGEgbnVtZXJpYyB2YWx1ZS5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMgYHRydWVgIGlmIGVtcHR5LCBgZmFsc2VgIG90aGVyd2lzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eVN0cmluZ0ZpZWxkICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBgJHt2YWx1ZX1gLnRyaW0oKSA9PT0gJydcbn1cblxuLyoqXG4gKiBHZXQgY2F0ZWdvcnkgdHlwZSBmcm9tIGNoYXJ0IHF1ZXJ5LlxuICogQHBhcmFtIHF1ZXJ5XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeVR5cGUgPSAoXG4gIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zXG4pOiBDYXRlZ29yeVR5cGUgPT4ge1xuICBpZiAocXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzICE9IG51bGwpIHtcbiAgICByZXR1cm4gQ2F0ZWdvcnlUeXBlLkJ5R3JvdXBcbiAgfSBlbHNlIGlmIChxdWVyeT8ub3V0U3RhdGlzdGljcyAhPSBudWxsKSB7XG4gICAgcmV0dXJuIENhdGVnb3J5VHlwZS5CeUZpZWxkXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGlzdGljIHR5cGUgZnJvbSBjaGFydCBxdWVyeS5cbiAqIEBwYXJhbSBxdWVyeVxuICovXG5leHBvcnQgY29uc3QgZ2V0U3RhdGlzdGljc1R5cGUgPSAocXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMpOiBDaGFydFN0YXRpc3RpY1R5cGUgPT4ge1xuICBpZiAocXVlcnk/Lm91dEZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuICdub19hZ2dyZWdhdGlvbidcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcXVlcnk/Lm91dFN0YXRpc3RpY3M/LlswXT8uc3RhdGlzdGljVHlwZVxuICB9XG59XG5cbi8qKlxuICogR2V0IGNhdGVnb3J5IGZpZWxkIGZyb20gY2hhcnQgcXVlcnkuXG4gKiBAcGFyYW0gcXVlcnlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5RmllbGQgPSAoXG4gIHF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zXG4pOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gcXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5bMF1cbn1cblxuLyoqXG4gKiBHZXQgY2F0ZWdvcnkgZmllbGQgdHlwZSBmcm9tIGNoYXJ0IHF1ZXJ5LlxuICogQHBhcmFtIHF1ZXJ5XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeUZpZWxkVHlwZSA9IChcbiAgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXG4pOiBKaW11RmllbGRUeXBlID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdXG4gIGNvbnN0IGZpZWxkVHlwZSA9IGdldEZpZWxkVHlwZShjYXRlZ29yeUZpZWxkLCBkYXRhU291cmNlSWQpXG4gIHJldHVybiBmaWVsZFR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcmlhbFN0YWNrZWRUeXBlID0gKFxuICBzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPlxuKTogV2ViQ2hhcnRTdGFja2VkS2luZHMgPT4ge1xuICByZXR1cm4gKHNlcmllcz8uWzBdIGFzIGFueSkuc3RhY2tlZFR5cGVcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcmlhTGxpbmVTbW9vdGhlZCA9IChcbiAgc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz5cbik6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gKHNlcmllcz8uWzBdIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydExpbmVDaGFydFNlcmllcz4pLmxpbmVTbW9vdGhlZFxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VyaWFMbGluZVNob3dBcmVhID0gKFxuICBzZXJpZXM6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPlxuKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAoc2VyaWVzPy5bMF0gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzPikuc2hvd0FyZWFcbn1cblxuY29uc3QgT3JkZXJTZXBhcmF0b3IgPSAnICdcbi8qKlxuICogUGFyc2UgYSBxdWVyeS5vcmRlckJ5RmllbGRzW2ldXG4gKiBAcGFyYW0gZmllbGRPcmRlclxuICogbm9ybWFsOiAnZmllbGRuYW1lIEFTQydcbiAqIHdpdGggc3BhY2UgaW4gZmllbGQ6ICdmaWVsZCBuYW1lIEFTQydcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlT3JkZXJCeUZpZWxkID0gKGZpZWxkT3JkZXI6IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgaWYgKCFmaWVsZE9yZGVyIHx8ICFmaWVsZE9yZGVyLmluY2x1ZGVzKE9yZGVyU2VwYXJhdG9yKSkgcmV0dXJuIFtdXG4gIGNvbnN0IGxhc3RJbmRleCA9IGZpZWxkT3JkZXIubGFzdEluZGV4T2YoT3JkZXJTZXBhcmF0b3IpXG4gIGNvbnN0IGluZGV4ID0gZmllbGRPcmRlci5pbmRleE9mKE9yZGVyU2VwYXJhdG9yKVxuICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgIGNvbnN0IGZpZWxkID0gZmllbGRPcmRlci5zdWJzdHJpbmcoMCwgbGFzdEluZGV4KVxuICAgIGNvbnN0IG9yZGVyID0gZmllbGRPcmRlci5zdWJzdHJpbmcobGFzdEluZGV4ICsgMSlcbiAgICByZXR1cm4gW2ZpZWxkLCBvcmRlcl1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmllbGRPcmRlci5zcGxpdCgnICcpXG4gIH1cbn1cblxuLy9Vc2luZyB0aGVzZSBzcGVjaWFsIHN5bWJvbHMgYXMgYG91dFN0YXRpc3RpY05hbWVgIHdpbGwgY2F1c2Ugc29tZSBzZXJ2aWNlIHN0YXRpc3RpY3MgdG8gZmFpbC5cbmNvbnN0IFNwZWNpYWxTeW1ib2xSZWdleHAgPSAvXFwofFxcKXxcXFt8XFxdfFxcJS9nbVxuXG4vKipcbiAqIEdlbmVyYXRlIHRoZSBgb3V0U3RhdGlzdGljTmFtZWAgZm9yIGBxdWVyeWAsIGFuZCBpdCdzIGFsd2F5cyBlcXVhbCB0byBgc2VyaWUueWBcbiAqIEBwYXJhbSBudW1lcmljRmllbGRcbiAqIEBwYXJhbSBzdGF0aXN0aWNUeXBlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPdXRTdGF0aXN0aWNOYW1lID0gKG51bWVyaWNGaWVsZDogc3RyaW5nLCBzdGF0aXN0aWNUeXBlOiBDaGFydFN0YXRpc3RpY1R5cGUpID0+IHtcbiAgaWYgKG51bWVyaWNGaWVsZD8ubWF0Y2goU3BlY2lhbFN5bWJvbFJlZ2V4cCkpIHtcbiAgICBudW1lcmljRmllbGQgPSBudW1lcmljRmllbGQucmVwbGFjZShTcGVjaWFsU3ltYm9sUmVnZXhwLCAnX18nKVxuICB9XG4gIGlmIChzdGF0aXN0aWNUeXBlICE9PSAnbm9fYWdncmVnYXRpb24nKSB7XG4gICAgcmV0dXJuIGAke3N0YXRpc3RpY1R5cGV9X29mXyR7bnVtZXJpY0ZpZWxkfWBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVtZXJpY0ZpZWxkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE91dFN0YXRpc3RpY0FsaWFzID0gKG51bWVyaWNGaWVsZEFsaWFzOiBzdHJpbmcsIHN0YXRpc3RpY1R5cGU6IENoYXJ0U3RhdGlzdGljVHlwZSkgPT4ge1xuICBpZiAoc3RhdGlzdGljVHlwZSAhPT0gJ25vX2FnZ3JlZ2F0aW9uJykge1xuICAgIHJldHVybiBgJHt1dGlscy51cHBlcmNhc2VGaXJzdExldHRlcihzdGF0aXN0aWNUeXBlKX0gb2YgJHtudW1lcmljRmllbGRBbGlhc31gXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bWVyaWNGaWVsZEFsaWFzXG4gIH1cbn1cblxuY29uc3QgU3RhdGlzdGljc1RyYW5zbGF0aW9ucyA9IHtcbiAgc3VtOiAnc3VtT2ZGaWVsZCcsXG4gIGF2ZzogJ21lYW5PZkZpZWxkJyxcbiAgbWluOiAnbWluT2ZGaWVsZCcsXG4gIG1heDogJ21heE9mRmllbGQnLFxuICBjb3VudDogJ2NvdW50JyxcbiAgcGVyY2VudGlsZV9jb250OiAnbWVkaWFuT2ZGaWVsZCdcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGxhYmVsIG9mIHN0YXRpc3RpYyB0eXBlLlxuICogQHBhcmFtIGZpZWxkXG4gKiBAcGFyYW0gc3RhdGlzdGljVHlwZVxuICogQHBhcmFtIHRyYW5zbGF0ZVxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplU3RhdGlzdGljRmllbGRMYWJlbCA9IChzdGF0aXN0aWNUeXBlLCBmaWVsZCwgdHJhbnNsYXRlKSA9PiB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB0cmFuc2xhdGUoU3RhdGlzdGljc1RyYW5zbGF0aW9uc1tzdGF0aXN0aWNUeXBlXSwgeyBmaWVsZCB9KVxuICByZXR1cm4gbm9ybWFsaXplZFxufVxuXG4vKipcbiAqIEdldCBkZWZhdWx0IHZhbHVlIGZvcm1hdCBiYXNlZCBvbiBmaWVsZCB0eXBlLlxuICogTm90ZTogYE51bWJlckZvcm1hdE9wdGlvbnNgIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHNlcmlhbCBjaGFydCB5ZXQuXG4gKiBAcGFyYW0gZmllbGRUeXBlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0VmFsdWVGb3JtYXQgPSAoZmllbGRUeXBlOiBKaW11RmllbGRUeXBlKTogQ2F0ZWdvcnlGb3JtYXRPcHRpb25zIHwgRGF0ZVRpbWVGb3JtYXRPcHRpb25zID0+IHtcbiAgaWYgKGZpZWxkVHlwZSA9PT0gSmltdUZpZWxkVHlwZS5EYXRlKSB7XG4gICAgcmV0dXJuIGdldERlZmF1bHREYXRlRm9ybWF0KClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0RGVmYXVsdENhdGVnb3J5Rm9ybWF0KClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3BsaXRPdXRTdGF0aXN0aWNOYW1lID0gKG51bWVyaWNGaWVsZDogc3RyaW5nLCBzdGF0aXN0aWNUeXBlOiBDaGFydFN0YXRpc3RpY1R5cGUsIHNwbGl0QnlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gIGxldCBvdXRTdGF0aXN0aWNOYW1lID0gZ2V0T3V0U3RhdGlzdGljTmFtZShudW1lcmljRmllbGQsIHN0YXRpc3RpY1R5cGUpXG4gIG91dFN0YXRpc3RpY05hbWUgPSBgJHtvdXRTdGF0aXN0aWNOYW1lfV9vZl8ke3NwbGl0QnlWYWx1ZX1gXG4gIHJldHVybiBvdXRTdGF0aXN0aWNOYW1lXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTcGxpdE91dFN0YXRpc3RpY0FsaWFzID0gKG51bWVyaWNGaWVsZEFsaWFzOiBzdHJpbmcsIHN0YXRpc3RpY1R5cGU6IENoYXJ0U3RhdGlzdGljVHlwZSwgc3BsaXRCeVZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgbGV0IG91dFN0YXRpc3RpY0FsaWFzID0gZ2V0T3V0U3RhdGlzdGljQWxpYXMobnVtZXJpY0ZpZWxkQWxpYXMsIHN0YXRpc3RpY1R5cGUpXG4gIG91dFN0YXRpc3RpY0FsaWFzID0gYCR7b3V0U3RhdGlzdGljQWxpYXN9IG9mICR7c3BsaXRCeVZhbHVlfWBcbiAgcmV0dXJuIG91dFN0YXRpc3RpY0FsaWFzXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTcGxpdEJ5RmllbGRWYWx1ZXMgPSAoc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4pOiBJbW11dGFibGVBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0+IHtcbiAgaWYgKCFzZXJpZXM/Lmxlbmd0aCkgcmV0dXJuIEltbXV0YWJsZShbXSlcbiAgY29uc3QgdmFsdWVzID0gc2VyaWVzLm1hcCgoc2VyaWUpID0+IHtcbiAgICBjb25zdCB3aGVyZSA9IHNlcmllLnF1ZXJ5LndoZXJlXG4gICAgY29uc3QgdmFsdWUgPSBnZXRTcGxpdEJ5VmFsdWUoeyB3aGVyZSwgbm9ybWFsaXplOiB0cnVlIH0pXG4gICAgcmV0dXJuIHZhbHVlXG4gIH0pXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuZXhwb3J0IGNvbnN0IEFyY2dpc0NoYXJ0c1NlY3JldEtleXMgPSB7XG4gIGRlZmF1bHRPdXRTdGF0aXN0aWNGaWVsZE5hbWU6ICdhcmNnaXNfY2hhcnRzX291dFN0YXRpc3RpY0ZpZWxkTmFtZV9kZWZhdWx0X2tleSdcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpZWxkVW5pcXVlVmFsdWVzUGFyYW1zID0gKGZpZWxkOiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG91dEZpZWxkcyA9IFtmaWVsZF1cbiAgY29uc3QgbnVsbEZpbHRlciA9IGAke2ZpZWxkfSBJUyBOT1QgTlVMTGBcbiAgY29uc3Qgb3JkZXJCeUZpZWxkcyA9ICFpc0VtcHR5U3RyaW5nRmllbGQoZmllbGQpID8gW2Ake2ZpZWxkfSAke1dlYkNoYXJ0U29ydE9yZGVyS2luZHMuQXNjZW5kaW5nfWBdIDogW11cbiAgY29uc3QgcGFyYW1zOiBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyA9IHtcbiAgICB3aGVyZTogbnVsbEZpbHRlcixcbiAgICBvcmRlckJ5RmllbGRzLFxuICAgIG91dEZpZWxkcyxcbiAgICByZXR1cm5EaXN0aW5jdFZhbHVlczogdHJ1ZSxcbiAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgcGFnZVNpemVcbiAgfVxuICByZXR1cm4gcGFyYW1zXG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBkZWZhdWx0IGJ5IGNhdGVnb3J5IHR5cGUuXG4gKiBAcGFyYW0gY2F0ZWdvcnlUeXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0UXVlcnkgPSAoY2F0ZWdvcnlUeXBlID0gQ2F0ZWdvcnlUeXBlLkJ5R3JvdXApOiBGZWF0dXJlTGF5ZXJRdWVyeVBhcmFtcyA9PiB7XG4gIGlmIChjYXRlZ29yeVR5cGUgPT09IENhdGVnb3J5VHlwZS5CeUdyb3VwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzOiBbXSxcbiAgICAgIG91dFN0YXRpc3RpY3M6IFtdXG4gICAgfVxuICB9IGVsc2UgaWYgKGNhdGVnb3J5VHlwZSA9PT0gQ2F0ZWdvcnlUeXBlLkJ5RmllbGQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3V0U3RhdGlzdGljczogW11cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUaW1lQmlubmluZ1Byb3BzID0ge1xuICB0aW1lSW50ZXJ2YWxTaXplOiAxLFxuICB0aW1lSW50ZXJ2YWxVbml0czogV2ViQ2hhcnRUaW1lSW50ZXJ2YWxVbml0cy5Nb250aHMsXG4gIHRpbWVBZ2dyZWdhdGlvblR5cGU6IFdlYkNoYXJ0VGltZUFnZ3JlZ2F0aW9uVHlwZXMuU3RhcnQsXG4gIHRyaW1JbmNvbXBsZXRlVGltZUludGVydmFsOiBmYWxzZSxcbiAgbnVsbFBvbGljeTogV2ViQ2hhcnROdWxsUG9saWN5VHlwZXMuSW50ZXJwb2xhdGVcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWZhdWx0IHNlcmllcyBiYXNlZCBvbiB0aGUgc2VyaWVzIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gc2VyaWVzUHJvcHNcbiAqIEBwYXJhbSBpbmRleFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRGVmYXVsdFNlcmllID0gKHNlcmllc1Byb3BzOiBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+LCBpbmRleCA9IDAsIGNvbG9yUHJvcHM/OiBTZXJpZXNDb2xvclByb3BzKTogV2ViQ2hhcnRTZXJpZXMgPT4ge1xuICBpZiAoIXNlcmllc1Byb3BzKSByZXR1cm4gbnVsbFxuICBjb25zdCB7IHR5cGUgPSAnbGluZVNlcmllcycsIGRhdGFMYWJlbHMsIGRhdGFUb29sdGlwVmlzaWJsZSB9ID0gc2VyaWVzUHJvcHNcblxuICBsZXQgc2VyaWUgPSBudWxsXG4gIGlmICh0eXBlID09PSAnYmFyU2VyaWVzJykge1xuICAgIGNvbnN0IHsgZmlsbFN5bWJvbCwgc3RhY2tlZFR5cGUgPSBXZWJDaGFydFN0YWNrZWRLaW5kcy5TaWRlIH0gPSBzZXJpZXNQcm9wcyBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRCYXJDaGFydFNlcmllcz5cbiAgICBzZXJpZSA9IGdldERlZmF1bHRCYXJDaGFydFNlcmllcyhpbmRleCwgY29sb3JQcm9wcylcbiAgICBzZXJpZS5zdGFja2VkVHlwZSA9IHN0YWNrZWRUeXBlXG5cbiAgICBpZiAoZmlsbFN5bWJvbCkge1xuICAgICAgaWYgKCFjb2xvclByb3BzPy5jb2xvciAmJiBjb2xvclByb3BzPy5wcmVTZXJpZUNvbG9yKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0Tm9uUmVwZWF0aW5nQ29sb3IoY29sb3JQcm9wcz8uY29sb3JzID8/IFNlcmllc0NvbG9ycywgaW5kZXgsIGNvbG9yUHJvcHMucHJlU2VyaWVDb2xvcilcbiAgICAgICAgc2VyaWUuZmlsbFN5bWJvbCA9IGZpbGxTeW1ib2wuc2V0KCdjb2xvcicsIGNvbG9yKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWUuZmlsbFN5bWJvbCA9IGZpbGxTeW1ib2xcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmVTZXJpZXMnKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhY2tlZFR5cGUgPSBXZWJDaGFydFN0YWNrZWRLaW5kcy5TaWRlLFxuICAgICAgbGluZVNtb290aGVkID0gZmFsc2UsXG4gICAgICBzaG93QXJlYSA9IGZhbHNlLFxuICAgICAgbWFya2VyVmlzaWJsZSA9IGZhbHNlLFxuICAgICAgbGluZVN5bWJvbCxcbiAgICAgIG1hcmtlclN5bWJvbFxuICAgIH0gPSBzZXJpZXNQcm9wcyBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRMaW5lQ2hhcnRTZXJpZXM+XG5cbiAgICBzZXJpZSA9IGdldERlZmF1bHRMaW5lQ2hhcnRTZXJpZXMoaW5kZXgsIGNvbG9yUHJvcHMpXG4gICAgc2VyaWUuc3RhY2tlZFR5cGUgPSBzdGFja2VkVHlwZVxuICAgIHNlcmllLmxpbmVTbW9vdGhlZCA9IGxpbmVTbW9vdGhlZFxuICAgIHNlcmllLnNob3dBcmVhID0gc2hvd0FyZWFcbiAgICBzZXJpZS5tYXJrZXJWaXNpYmxlID0gbWFya2VyVmlzaWJsZVxuXG4gICAgaWYgKGxpbmVTeW1ib2wpIHtcbiAgICAgIGlmICghY29sb3JQcm9wcz8uY29sb3IgJiYgY29sb3JQcm9wcz8ucHJlU2VyaWVDb2xvcikge1xuICAgICAgICBjb25zdCBjb2xvciA9IGdldE5vblJlcGVhdGluZ0NvbG9yKGNvbG9yUHJvcHM/LmNvbG9ycyA/PyBTZXJpZXNDb2xvcnMsIGluZGV4LCBjb2xvclByb3BzLnByZVNlcmllQ29sb3IpXG4gICAgICAgIHNlcmllLmxpbmVTeW1ib2wgPSBsaW5lU3ltYm9sLnNldCgnY29sb3InLCBjb2xvcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmllLmxpbmVTeW1ib2wgPSBsaW5lU3ltYm9sXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlclN5bWJvbCkge1xuICAgICAgc2VyaWUubWFya2VyU3ltYm9sID0gbWFya2VyU3ltYm9sXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwaWVTZXJpZXMnKSB7XG4gICAgY29uc3QgeyBpbm5lclJhZGl1cyA9IDAsIHN0YXJ0QW5nbGUgPSAwLCBlbmRBbmdsZSA9IDM2MCB9ID0gc2VyaWVzUHJvcHMgYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXM+XG4gICAgc2VyaWUgPSBnZXREZWZhdWx0UGllQ2hhcnRTZXJpZXMoKVxuICAgIHNlcmllLmlubmVyUmFkaXVzID0gaW5uZXJSYWRpdXNcbiAgICBzZXJpZS5zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHNlcmllLmVuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NhdHRlclNlcmllcycpIHtcbiAgICBjb25zdCB7IG1hcmtlclN5bWJvbCwgb3ZlcmxheXMgfSA9IHNlcmllc1Byb3BzIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFNjYXR0ZXJQbG90U2VyaWVzPlxuICAgIHNlcmllID0gZ2V0RGVmYXVsdFNjYXR0ZXJQbG90Q2hhcnRTZXJpZXMoKVxuICAgIGlmIChtYXJrZXJTeW1ib2wpIHtcbiAgICAgIHNlcmllLm1hcmtlclN5bWJvbCA9IG1hcmtlclN5bWJvbFxuICAgIH1cbiAgICBpZiAob3ZlcmxheXMpIHtcbiAgICAgIHNlcmllLm92ZXJsYXlzID0gb3ZlcmxheXNcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hpc3RvZ3JhbVNlcmllcycpIHtcbiAgICBjb25zdCB7IGZpbGxTeW1ib2wsIGJpbkNvdW50LCBvdmVybGF5cyB9ID0gc2VyaWVzUHJvcHMgYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0SGlzdG9ncmFtU2VyaWVzPlxuICAgIHNlcmllID0gZ2V0RGVmYXVsdEhpc3RvZ3JhbVNlcmllcygpXG4gICAgc2VyaWUuYmluQ291bnQgPSBiaW5Db3VudFxuICAgIGlmIChvdmVybGF5cykge1xuICAgICAgc2VyaWUub3ZlcmxheXMgPSBvdmVybGF5c1xuICAgIH1cbiAgICBpZiAoZmlsbFN5bWJvbCkge1xuICAgICAgc2VyaWUuZmlsbFN5bWJvbCA9IGZpbGxTeW1ib2xcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YUxhYmVscykge1xuICAgIHNlcmllLmRhdGFMYWJlbHMgPSBkYXRhTGFiZWxzXG4gIH1cblxuICBpZiAoZGF0YVRvb2x0aXBWaXNpYmxlICE9IG51bGwpIHtcbiAgICBzZXJpZS5kYXRhVG9vbHRpcFZpc2libGUgPSBkYXRhVG9vbHRpcFZpc2libGVcbiAgfVxuXG4gIHJldHVybiBzZXJpZVxufVxuXG4vKipcbiAqIEdldCB0aGUgdXNlZCBzZXJpZXMgYnkgc2VyaWVzIGlkIG9yIGluZGV4LlxuICogQHBhcmFtIHByb3BTZXJpZXNcbiAqIEBwYXJhbSBpZFxuICogQHBhcmFtIGluZGV4XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVc2VkU2VyaWVzUHJvcHMgPSAocHJvcFNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LCBpZDogc3RyaW5nLCBpbmRleDogbnVtYmVyID0gMCwgY29sb3JQcm9wcz86IFNlcmllc0NvbG9yUHJvcHMpOiBXZWJDaGFydFNlcmllcyA9PiB7XG4gIGxldCBkZWZhdWx0U2VyaWUgPSBwcm9wU2VyaWVzLmZpbmQoKHByb3BTZXJpZSkgPT4gcHJvcFNlcmllLmlkID09PSBpZCkgYXMgdW5rbm93biBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+XG4gIGlmICghZGVmYXVsdFNlcmllKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBwcm9wU2VyaWVzW2luZGV4XSA/PyBwcm9wU2VyaWVzWzBdXG4gICAgY29uc3QgeyB0eXBlLCBkYXRhTGFiZWxzLCBkYXRhVG9vbHRpcFZpc2libGUgfSA9IHRlbXBsYXRlXG4gICAgY29uc3QgeyBzdGFja2VkVHlwZSB9ID0gdGVtcGxhdGUgYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0QmFyQ2hhcnRTZXJpZXM+XG4gICAgY29uc3QgeyBsaW5lU21vb3RoZWQsIHNob3dBcmVhLCBtYXJrZXJWaXNpYmxlLCBtYXJrZXJTeW1ib2wgfSA9IHRlbXBsYXRlIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydExpbmVDaGFydFNlcmllcz5cbiAgICBjb25zdCB7IGlubmVyUmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSB9ID0gdGVtcGxhdGUgYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0UGllQ2hhcnRTZXJpZXM+XG4gICAgZGVmYXVsdFNlcmllID0gSW1tdXRhYmxlKHtcbiAgICAgIHR5cGUsXG4gICAgICBkYXRhTGFiZWxzLFxuICAgICAgZGF0YVRvb2x0aXBWaXNpYmxlLFxuICAgICAgc3RhY2tlZFR5cGUsXG4gICAgICBsaW5lU21vb3RoZWQsXG4gICAgICBzaG93QXJlYSxcbiAgICAgIG1hcmtlclZpc2libGUsXG4gICAgICBtYXJrZXJTeW1ib2wsXG4gICAgICBpbm5lclJhZGl1cyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZVxuICAgIH0pIGFzIHVua25vd24gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPlxuICB9XG4gIGNvbnN0IHNlcmllc1Byb3BzID0gY3JlYXRlRGVmYXVsdFNlcmllKGRlZmF1bHRTZXJpZSwgaW5kZXgsIGNvbG9yUHJvcHMpXG4gIHJldHVybiBzZXJpZXNQcm9wc1xufVxuXG5jb25zdCBnZXRTZXJpZXNQcm9wcyA9IChzZXJpZTogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0U2VyaWVzPiwgcXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlGaWVsZCA9IHF1ZXJ5Py5ncm91cEJ5RmllbGRzRm9yU3RhdGlzdGljcz8uWzBdID8/ICcnXG4gIGNvbnN0IG91dFN0YXRpc3RpY3MgPSBxdWVyeT8ub3V0U3RhdGlzdGljc1xuICBjb25zdCBvdXRGaWVsZHMgPSBxdWVyeT8ub3V0RmllbGRzXG4gIGNvbnN0IHdoZXJlID0gcXVlcnk/LndoZXJlXG4gIGNvbnN0IHNwbGl0QnlGaWVsZCA9IGdldFNwbGl0QnlGaWVsZCh3aGVyZSwgdHJ1ZSlcbiAgY29uc3Qgc3RhdGlzdGljVHlwZSA9IGdldFN0YXRpc3RpY3NUeXBlKHF1ZXJ5KSA/PyAnY291bnQnXG5cbiAgY29uc3QgdGltZUludGVydmFsVW5pdHMgPSAoc2VyaWUgYXMgdW5rbm93biBhcyBXZWJDaGFydExpbmVDaGFydFNlcmllcyk/LnRpbWVJbnRlcnZhbFVuaXRzXG5cbiAgY29uc3QgbnVtZXJpY0ZpZWxkcyA9IG91dEZpZWxkcyB8fCBvdXRTdGF0aXN0aWNzPy5tYXAoKG91dFN0YXRpc3RpYykgPT4gb3V0U3RhdGlzdGljLm9uU3RhdGlzdGljRmllbGQpPy5maWx0ZXIoZmllbGQgPT4gISFmaWVsZClcblxuICByZXR1cm4geyBzcGxpdEJ5RmllbGQsIGNhdGVnb3J5RmllbGQsIG51bWVyaWNGaWVsZHMsIHN0YXRpc3RpY1R5cGUsIHRpbWVJbnRlcnZhbFVuaXRzIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcGxpdEJ5U2VyaWVQcm9wcyB7XG4gIHByb3BTZXJpZXNcbiAgbmFtZT86IHN0cmluZ1xuICBjYXRlZ29yeUZpZWxkOiBzdHJpbmdcbiAgbnVtYmVyRmllbGQ6IHN0cmluZ1xuICBzcGxpdEJ5RmllbGQ6IHN0cmluZ1xuICBzcGxpdEJ5RmllbGRUeXBlOiBKaW11RmllbGRUeXBlXG4gIHNwbGl0QnlWYWx1ZTogc3RyaW5nIHwgbnVtYmVyXG4gIHRpbWVJbnRlcnZhbFVuaXRzPzogV2ViQ2hhcnRUaW1lSW50ZXJ2YWxVbml0c1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3BsaXRCeVNlcmllID0gKHByb3BzOiBTcGxpdEJ5U2VyaWVQcm9wcywgaW5kZXg6IG51bWJlciwgY29sb3JQcm9wcz86IFNlcmllc0NvbG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wU2VyaWVzLCBuYW1lLCBjYXRlZ29yeUZpZWxkLCBudW1iZXJGaWVsZCwgdGltZUludGVydmFsVW5pdHMsIHNwbGl0QnlGaWVsZCwgc3BsaXRCeUZpZWxkVHlwZSwgc3BsaXRCeVZhbHVlIH0gPSBwcm9wc1xuICBsZXQgc2VyaWUgPSBnZXRVc2VkU2VyaWVzUHJvcHMocHJvcFNlcmllcywgc3BsaXRCeVZhbHVlIGFzIHN0cmluZywgaW5kZXgsIGNvbG9yUHJvcHMpXG4gIGNvbnN0IGlkQW5kTmFtZSA9IGAke3NwbGl0QnlWYWx1ZX1gXG4gIGNvbnN0IHkgPSBudW1iZXJGaWVsZFxuICBzZXJpZS5pZCA9IGlkQW5kTmFtZVxuICBzZXJpZS54ID0gY2F0ZWdvcnlGaWVsZFxuICA7IChzZXJpZSBhcyBhbnkpLnkgPSB5XG4gIHNlcmllLm5hbWUgPSBuYW1lIHx8IGlkQW5kTmFtZVxuICBpZiAodGltZUludGVydmFsVW5pdHMpIHtcbiAgICBzZXJpZSA9IHtcbiAgICAgIC4uLnNlcmllLFxuICAgICAgLi4uRGVmYXVsdFRpbWVCaW5uaW5nUHJvcHMsXG4gICAgICB0aW1lSW50ZXJ2YWxVbml0c1xuICAgIH0gYXMgYW55XG4gIH1cbiAgY29uc3Qgd2hlcmUgPSBgJHtzcGxpdEJ5RmllbGR9PSR7c3BsaXRCeUZpZWxkVHlwZSA9PT0gSmltdUZpZWxkVHlwZS5TdHJpbmcgPyBgJyR7c3BsaXRCeVZhbHVlfSdgIDogc3BsaXRCeVZhbHVlXG4gICAgfWBcbiAgY29uc3QgcXVlcnkgPSB7IHdoZXJlIH1cbiAgc2VyaWUucXVlcnkgPSBxdWVyeVxuICByZXR1cm4gc2VyaWVcbn1cblxuaW50ZXJmYWNlIFNlcmllc1N0eWxlUHJvcHMgZXh0ZW5kcyBTZXJpZXNDb2xvclByb3BzIHtcbiAgc3ltYm9sPzogSVNpbXBsZUZpbGxTeW1ib2wgfCBJU2ltcGxlTGluZVN5bWJvbFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3BsaXRCeVNlcmllRnJvbVNlcmllcyA9IChcbiAgcHJvcFNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LFxuICBwcm9wUXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHNwbGl0QnlGaWVsZFR5cGU6IEppbXVGaWVsZFR5cGUsXG4gIHNwbGl0QnlWYWx1ZXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj4sXG4gIGRlbGV0YWJsZTogYm9vbGVhbiA9IGZhbHNlLFxuICBjb2xvclByb3BzPzogU2VyaWVzU3R5bGVQcm9wc1xuKTogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+ID0+IHtcbiAgY29uc3Qgc2VyaWVzUHJvcHMgPSBnZXRTZXJpZXNQcm9wcyhwcm9wU2VyaWVzWzBdLCBwcm9wUXVlcnkpXG4gIGNvbnN0IHsgc3BsaXRCeUZpZWxkLCBjYXRlZ29yeUZpZWxkLCBudW1lcmljRmllbGRzLCB0aW1lSW50ZXJ2YWxVbml0cyB9ID1cbiAgICBzZXJpZXNQcm9wc1xuICBjb25zdCBudW1iZXJGaWVsZCA9IG51bWVyaWNGaWVsZHNbMF1cbiAgbGV0IHByZVNlcmllQ29sb3IgPSBjb2xvclByb3BzPy5wcmVTZXJpZUNvbG9yID8/ICcnXG4gIGNvbnN0IHNlcmllc1ZhbHVlcyA9IHNwbGl0QnlWYWx1ZXMubWFwKChzcGxpdEJ5VmFsdWUsIGluZGV4KSA9PiB7XG4gICAgbGV0IHNlcmllID0gcHJvcFNlcmllcy5maW5kKChzZXJpZSkgPT4ge1xuICAgICAgY29uc3Qgc2VyaWVzU3BsaXRCeVZhbHVlID0gZ2V0U3BsaXRCeVZhbHVlKHsgd2hlcmU6IHNlcmllLnF1ZXJ5LndoZXJlLCBub3JtYWxpemU6IGZhbHNlIH0pXG4gICAgICBjb25zdCByYXdTcGxpdEJ5VmFsdWUgPSBzcGxpdEJ5RmllbGRUeXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZyA/IGAnJHtzcGxpdEJ5VmFsdWV9J2AgOiBgJHtzcGxpdEJ5VmFsdWV9YFxuICAgICAgcmV0dXJuIHNlcmllc1NwbGl0QnlWYWx1ZSA9PT0gcmF3U3BsaXRCeVZhbHVlXG4gICAgfSlcbiAgICBpZiAoIXNlcmllKSB7XG4gICAgICBjb25zdCBzcGxpdEJ5UHJvcHMgPSB7XG4gICAgICAgIHByb3BTZXJpZXMsXG4gICAgICAgIGNhdGVnb3J5RmllbGQsXG4gICAgICAgIG51bWJlckZpZWxkLFxuICAgICAgICB0aW1lSW50ZXJ2YWxVbml0cyxcbiAgICAgICAgc3BsaXRCeUZpZWxkLFxuICAgICAgICBzcGxpdEJ5RmllbGRUeXBlLFxuICAgICAgICBzcGxpdEJ5VmFsdWVcbiAgICAgIH1cbiAgICAgIHNlcmllID0gY3JlYXRlU3BsaXRCeVNlcmllKHNwbGl0QnlQcm9wcywgaW5kZXgsIHsgLi4uY29sb3JQcm9wcywgcHJlU2VyaWVDb2xvciB9KVxuICAgICAgc2VyaWUuZGVsZXRhYmxlID0gZGVsZXRhYmxlXG4gICAgICBwcmVTZXJpZUNvbG9yID1cbiAgICAgICAgKHNlcmllIGFzIGFueSkuZmlsbFN5bWJvbD8uY29sb3IgPz8gKHNlcmllIGFzIGFueSkubGluZVN5bWJvbD8uY29sb3JcbiAgICAgIGlmIChjb2xvclByb3BzLnN5bWJvbCkge1xuICAgICAgICBpZiAoc2VyaWUudHlwZSA9PT0gJ2JhclNlcmllcycpIHtcbiAgICAgICAgICAoc2VyaWUgYXMgV2ViQ2hhcnRCYXJDaGFydFNlcmllcykuZmlsbFN5bWJvbCA9IGNvbG9yUHJvcHMuc3ltYm9sIGFzIElTaW1wbGVGaWxsU3ltYm9sXG4gICAgICAgIH0gZWxzZSBpZiAoc2VyaWUudHlwZSA9PT0gJ2xpbmVTZXJpZXMnKSB7XG4gICAgICAgICAgKHNlcmllIGFzIFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzKS5saW5lU3ltYm9sID0gY29sb3JQcm9wcy5zeW1ib2wgYXMgSVNpbXBsZUxpbmVTeW1ib2xcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VyaWVcbiAgfSlcbiAgY29uc3Qgc2VyaWVzID0gSW1tdXRhYmxlKHNlcmllc1ZhbHVlcylcbiAgcmV0dXJuIHNlcmllc1xufVxuXG5leHBvcnQgY29uc3QgYXBwbHlTZXJpZXNDb2xvcnMgPSAocHJvcFNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LCBjb2xvcnM6IHN0cmluZ1tdKTogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+ID0+IHtcbiAgaWYgKCFjb2xvcnMpIHJldHVyblxuICBjb25zdCBzbGljZXMgPSBwcm9wU2VyaWVzPy5tYXAoKHNlcmllLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gZ2V0Q29sb3JJbk9yZGVyKGNvbG9ycywgaW5kZXgpXG4gICAgY29uc3QgdHlwZSA9IHNlcmllLnR5cGVcbiAgICBpZiAodHlwZSA9PT0gJ2JhclNlcmllcycpIHtcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0SW4oWydmaWxsU3ltYm9sJywgJ2NvbG9yJ10sIGNvbG9yKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmVTZXJpZXMnKSB7XG4gICAgICBzZXJpZSA9IHNlcmllLnNldEluKFsnbGluZVN5bWJvbCcsICdjb2xvciddLCBjb2xvcilcbiAgICB9XG4gICAgcmV0dXJuIHNlcmllIGFzIGFueVxuICB9KVxuICByZXR1cm4gc2xpY2VzXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSdW50aW1lU3BsaXRCeVNlcmllcyA9IChcbiAgcHJvcFNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+LFxuICBwcm9wUXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsXG4gIHNwbGl0QnlGaWVsZFR5cGU6IEppbXVGaWVsZFR5cGUsXG4gIHNwbGl0QnlWYWx1ZXM6IEFycmF5PHN0cmluZyB8IG51bWJlcj5cbik6IEltbXV0YWJsZUFycmF5PFdlYkNoYXJ0U2VyaWVzPiA9PiB7XG4gIGNvbnN0IG90aGVyU2VyaWUgPSBwcm9wU2VyaWVzLmZpbmQoc2VyaWUgPT4gc2VyaWUuaWQgPT09IFNwbGl0QnlPdGhlclNlcmllc1ZhbHVlKVxuICBjb25zdCBzeW1ib2wgPSBvdGhlclNlcmllLnR5cGUgPT09ICdiYXJTZXJpZXMnID8gKG90aGVyU2VyaWUgYXMgV2ViQ2hhcnRCYXJDaGFydFNlcmllcykuZmlsbFN5bWJvbCA6IChvdGhlclNlcmllIGFzIFdlYkNoYXJ0TGluZUNoYXJ0U2VyaWVzKS5saW5lU3ltYm9sXG4gIGxldCBzZXJpZXMgPSBjcmVhdGVTcGxpdEJ5U2VyaWVGcm9tU2VyaWVzKHByb3BTZXJpZXMsIHByb3BRdWVyeSwgc3BsaXRCeUZpZWxkVHlwZSwgc3BsaXRCeVZhbHVlcywgZmFsc2UsIHsgc3ltYm9sIH0pXG4gIHNlcmllcyA9IHNlcmllcy5tYXAoKHNlcmllKSA9PiB7XG4gICAgaWYgKHNlcmllLmRlbGV0YWJsZSkge1xuICAgICAgc2VyaWUgPSBzZXJpZS53aXRob3V0KCdkZWxldGFibGUnKVxuICAgIH1cbiAgICByZXR1cm4gc2VyaWUgYXMgdW5rbm93biBhcyBXZWJDaGFydFNlcmllc1xuICB9KVxuICByZXR1cm4gc2VyaWVzXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIElTaW1wbGVNYXJrZXJTeW1ib2wsXG4gIHR5cGUgSUZvbnQsXG4gIHR5cGUgSVRleHRTeW1ib2wsXG4gIHR5cGUgSVNpbXBsZUxpbmVTeW1ib2wsXG4gIHR5cGUgSVNpbXBsZUZpbGxTeW1ib2xcbn0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQge1xuICB0eXBlIElNRmllbGRTY2hlbWEsXG4gIHR5cGUgSW1tdXRhYmxlQXJyYXksXG4gIEppbXVGaWVsZFR5cGUsXG4gIHV0aWxzXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IGdldFRoZW1lLCBnZXRUaGVtZTIgfSBmcm9tICdqaW11LXRoZW1lJ1xuaW1wb3J0IHsgdXRpbHMgYXMgamltdVV0aWxzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7XG4gIFJFU1RTeW1ib2xUeXBlLFxuICBSRVNUSG9yaXpvbnRhbEFsaWdubWVudCxcbiAgdHlwZSBXZWJDaGFydEF4aXMsXG4gIFJFU1RTaW1wbGVNYXJrZXJTeW1ib2xTdHlsZSxcbiAgV2ViQ2hhcnRUeXBlcyxcbiAgZ2V0RGVmYXVsdENhdGVnb3J5Rm9ybWF0LFxuICB0eXBlIFdlYkNoYXJ0T3ZlcmxheSxcbiAgUkVTVFZlcnRpY2FsQWxpZ25tZW50LFxuICBXZWJDaGFydExlZ2VuZFBvc2l0aW9ucyxcbiAgZ2V0U2VyaWVzVHlwZSxcbiAgUkVTVEZvbnRTdHlsZSxcbiAgUkVTVEZvbnRXZWlnaHQsXG4gIFJFU1RGb250RGVjb3JhdGlvbixcbiAgUkVTVFNpbXBsZUxpbmVTeW1ib2xTdHlsZSxcbiAgUkVTVFNpbXBsZUZpbGxTeW1ib2xTdHlsZSxcbiAgdHlwZSBXZWJDaGFydFRleHQsXG4gIFdlYkNoYXJ0Q29sb3JpbmdQYXR0ZXJucyxcbiAgV2ViQ2hhcnRTdGFja2VkS2luZHMsXG4gIHR5cGUgV2ViQ2hhcnRMZWdlbmQsXG4gIHR5cGUgU2NhdHRlclBsb3RPdmVybGF5cyxcbiAgdHlwZSBDaGFydFR5cGVzLFxuICB0eXBlIEhpc3RvZ3JhbU92ZXJsYXlzLFxuICBXZWJDaGFydERhdGFUcmFuc2Zvcm1hdGlvbnMsXG4gIHR5cGUgV2ViQ2hhcnRHdWlkZSxcbiAgdHlwZSBOdW1iZXJGb3JtYXRPcHRpb25zLFxuICB0eXBlIERhdGVUaW1lRm9ybWF0T3B0aW9ucyxcbiAgdHlwZSBXZWJDaGFydFBpZUNoYXJ0TGVnZW5kXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5cbmltcG9ydCB7IHR5cGUgSGlzdG9ncmFtT3ZlcmxheXNUeXBlLCB0eXBlIFdlYkNoYXJ0U2VyaWVzIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IHsgUGllU2xpY2VHcm91cGluZ1NsaWNlSWQgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q29sb3IgPSAndmFyKC0tZGFyayknXG5leHBvcnQgY29uc3QgRGVmYXVsdFRleHRDb2xvciA9ICd2YXIoLS1kYXJrKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0QmdDb2xvciA9ICd2YXIoLS13aGl0ZSknXG5leHBvcnQgY29uc3QgRGVmYXVsdExpbmVDb2xvciA9ICd2YXIoLS1saWdodC05MDApJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRGaWxsQ29sb3IgPSAndmFyKC0tcHJpbWFyeSknXG5leHBvcnQgY29uc3QgRGVmYXVsdFRleHRTaXplID0gMTRcbmV4cG9ydCBjb25zdCBEZWZhdWx0Q2lyY2xlTWFya2VyU2l6ZSA9IDEwXG5leHBvcnQgY29uc3QgRGVmYXVsdEZvbnRXZWlnaHQgPSA0MDBcblxuLy8gdGl0bGVcbmV4cG9ydCBjb25zdCBEZWZhdWx0VGl0bGVDb2xvciA9ICd2YXIoLS1ibGFjayknXG5leHBvcnQgY29uc3QgRGVmYXVsdFRpdGxlV2VpZ2h0ID0gNTAwXG5leHBvcnQgY29uc3QgRGVmYXVsdFRpdGxlU2l6ZSA9IDI0XG5cbi8vIGZvb3RlclxuZXhwb3J0IGNvbnN0IERlZmF1bHRGb290ZXJTaXplID0gMTRcbmV4cG9ydCBjb25zdCBEZWZhdWx0Rm9vdGVyQ29sb3IgPSAndmFyKC0tZGFyay04MDApJ1xuXG4vLyBzZXJpZXNcbmV4cG9ydCBjb25zdCBEZWZhdWx0U2VyaWVzTGFiZWxTaXplID0gMTBcbmV4cG9ydCBjb25zdCBEZWZhdWx0VmFsdWVMYWJlbENvbG9yID0gJ3ZhcigtLWRhcmstNjAwKSdcblxuLy8gYXhlc1xuZXhwb3J0IGNvbnN0IERlZmF1bHRBeGlzQ29sb3IgPSAndmFyKC0tbGlnaHQtODAwKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0QXhpc0xhYmVsQ29sb3IgPSAndmFyKC0tZGFyay01MDApJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRBeGlzVGl0bGVDb2xvciA9ICd2YXIoLS1kYXJrLTgwMCknXG5leHBvcnQgY29uc3QgRGVmYXVsdEF4aXNUaXRsZVNpemUgPSAyMFxuZXhwb3J0IGNvbnN0IERlZmF1bHRBeGlzTGFiZWxTaXplID0gMTRcblxuLy8gZ3VpZGVcbmV4cG9ydCBjb25zdCBEZWZhdWx0R3VpZGVGaWxsQ29sb3IgPSAnIzY3YjdkYydcbmV4cG9ydCBjb25zdCBEZWZhdWx0R3VpZGVMaW5lQ29sb3IgPSAnIzY3YjdkYydcbmV4cG9ydCBjb25zdCBEZWZhdWx0R3VpZGVMYWJlbFNpemUgPSAxMlxuXG4vLyBsZWdlbmRcbmV4cG9ydCBjb25zdCBEZWZhdWx0TGVnZW5kVGl0bGVTaXplID0gMjBcbmV4cG9ydCBjb25zdCBEZWZhdWx0TGVnZW5kTGFiZWxTaXplID0gMTRcbmV4cG9ydCBjb25zdCBEZWZhdWx0TGVnZW5kVGl0bGVDb2xvciA9ICd2YXIoLS1kYXJrLTgwMCknXG5leHBvcnQgY29uc3QgRGVmYXVsdExlZ2VuZExhYmVsQ29sb3IgPSAndmFyKC0tZGFyay04MDApJ1xuZXhwb3J0IGNvbnN0IERlZmF1bHRQaWVMZWdlbmRMYWJlbE1heFdpZHRoID0gMjAwXG4vLyBncmlkXG5leHBvcnQgY29uc3QgRGVmYXVsdEdyaWRDb2xvciA9ICd2YXIoLS1saWdodC0zMDApJ1xuLy9jb2xvciBieSBzbGljZXNcbmV4cG9ydCBjb25zdCBEZWZhdWx0Q29sb3JCeVNsaWNlc090aGVyQ29sb3IgPSAnI0Q2RDZENidcbi8vbWFya2VyIHNpbWJvbFxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJrZXJTaXplID0gMjBcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTcGxpdEJ5T3RoZXJTZXJpZXNDb2xvciA9ICcjRDZENkQ2J1xuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdENvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0Q29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRUZXh0Q29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRUZXh0Q29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRCZ0NvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0QmdDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdFRpdGxlQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRUaXRsZUNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0Rm9vdGVyQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIERlZmF1bHRGb290ZXJDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEF4aXNMYWJlbENvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0QXhpc0xhYmVsQ29sb3Jcbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRBeGlzVGl0bGVDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdEF4aXNUaXRsZUNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0TGVnZW5kVGl0bGVDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdEF4aXNUaXRsZUNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0TGVnZW5kTGFiZWxDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdEF4aXNUaXRsZUNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0VmFsdWVMYWJlbENvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBEZWZhdWx0VmFsdWVMYWJlbENvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0TGluZUNvbG9yID0gKCkgPT4ge1xuICByZXR1cm4gRGVmYXVsdExpbmVDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEF4aXNDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdEF4aXNDb2xvclxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGVmYXVsdEdyaWRDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gRGVmYXVsdEdyaWRDb2xvclxufVxuXG5leHBvcnQgY29uc3QgU2VyaWVzQ29sb3JzID0gW1xuICAnIzVFOEZEMCcsXG4gICcjNzdCNDg0JyxcbiAgJyNERjZCMzUnLFxuICAnI0RCQ0Y0RScsXG4gICcjNDE1NDZEJyxcbiAgJyM4MjU3QzInLFxuICAnI0Q2NTU4Qidcbl1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXJpZXNPdXRsaW5lQ29sb3IgPSAndmFyKC0tbGlnaHQtOTAwKSdcbmV4cG9ydCBjb25zdCBEZWZhdWx0UGllU2VyaWVzT3V0bGluZUNvbG9yID0gJ3ZhcigtLWxpZ2h0LTEwMCknXG5leHBvcnQgY29uc3QgRGVmYXVsdFNjYXR0ZXJQbG90VHJhbmRMaW5lQ29sb3IgPSBTZXJpZXNDb2xvcnNbMl1cblxuY29uc3QgZGVmYXVsdEhpc3RvbWdyYW1NZWFuQ29sb3IgPSAnI0E2Q0VFMydcbmNvbnN0IGRlZmF1bHRIaXN0b21ncmFtTWVkaWFuQ29sb3IgPSAnIzMzQTAyQydcbmNvbnN0IGRlZmF1bHRIaXN0b21ncmFtU3RkQ29sb3IgPSAnI0IyREY4QSdcbmNvbnN0IGRlZmF1bHRIaXN0b21ncmFtQ29kQ29sb3IgPSAnI0UzMUExQydcblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRIaXN0b21ncmFtT3ZlcmxheUNvbG9yID0gKHR5cGU6IEhpc3RvZ3JhbU92ZXJsYXlzVHlwZSkgPT4ge1xuICBpZiAodHlwZSA9PT0gJ21lYW4nKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRIaXN0b21ncmFtTWVhbkNvbG9yXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ21lZGlhbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdEhpc3RvbWdyYW1NZWRpYW5Db2xvclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdGFuZGFyZERldmlhdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdEhpc3RvbWdyYW1TdGRDb2xvclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjb21wYXJpc29uRGlzdHJpYnV0aW9uJykge1xuICAgIHJldHVybiBkZWZhdWx0SGlzdG9tZ3JhbUNvZENvbG9yXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRTZXJpZXNPdXRsaW5lQ29sb3IgPSAodHlwZTogQ2hhcnRUeXBlcyA9ICdiYXJTZXJpZXMnKSA9PiB7XG4gIGlmIChpc1hZQ2hhcnQodHlwZSkpIHtcbiAgICByZXR1cm4gRGVmYXVsdFNlcmllc091dGxpbmVDb2xvclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwaWVTZXJpZXMnKSB7XG4gICAgcmV0dXJuIERlZmF1bHRQaWVTZXJpZXNPdXRsaW5lQ29sb3JcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRGVmYXVsdFNlcmllc091dGxpbmVDb2xvclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0U2VyaWVzRmlsbENvbG9yID0gKCk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBTZXJpZXNDb2xvcnNbMF1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHROdW1iZXJGb3JtYXQgPSAoKTogTnVtYmVyRm9ybWF0T3B0aW9ucyA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5OdW1iZXJBeGlzRm9ybWF0LFxuICAgIGludGxPcHRpb25zOiB7XG4gICAgICBzdHlsZTogJ2RlY2ltYWwnLFxuICAgICAgdXNlR3JvdXBpbmc6IHRydWUsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDNcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRQZXJjZW50TnVtYmVyRm9ybWF0ID0gKCk6IE51bWJlckZvcm1hdE9wdGlvbnMgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuTnVtYmVyQXhpc0Zvcm1hdCxcbiAgICBpbnRsT3B0aW9uczoge1xuICAgICAgc3R5bGU6ICdwZXJjZW50JyxcbiAgICAgIG5vdGF0aW9uOiAnc3RhbmRhcmQnLFxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAzXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RGF0ZUZvcm1hdCA9ICgpOiBEYXRlVGltZUZvcm1hdE9wdGlvbnMgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuRGF0ZUF4aXNGb3JtYXQsXG4gICAgaW50bE9wdGlvbnM6IHt9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgY29sb3JzIGluIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvckluT3JkZXIgPSAoY29sb3JzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcgPT4ge1xuICBjb25zdCBsZW5ndGggPSBjb2xvcnM/Lmxlbmd0aCA/PyAwXG4gIGlmIChsZW5ndGggPCAwKSByZXR1cm5cbiAgaW5kZXggPSBpbmRleCAlIGxlbmd0aFxuICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IDBcbiAgcmV0dXJuIGNvbG9yc1tpbmRleF1cbn1cblxuLyoqXG4gKiBHZXQgY29sb3IgaW4gb3JkZXIsIGJ1dCBub3QgcmVwZWF0IHRoZSBwcmV2aW91cyBvbmUuXG4gKiBAcGFyYW0gaW5kZXhcbiAqIEBwYXJhbSBwcmVTZXJpZUNvbG9yXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgZ2V0Tm9uUmVwZWF0aW5nQ29sb3IgPSAoY29sb3JzOiBzdHJpbmdbXSwgaW5kZXg6IG51bWJlciA9IDAsIHByZVNlcmllQ29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGxldCBjb2xvciA9IGdldENvbG9ySW5PcmRlcihjb2xvcnMsIGluZGV4KVxuICBpZiAoY29sb3IgPT09IHByZVNlcmllQ29sb3IpIHtcbiAgICBjb2xvciA9IGdldENvbG9ySW5PcmRlcihjb2xvcnMsIGluZGV4ICsgMSlcbiAgfVxuICByZXR1cm4gY29sb3Jcbn1cblxuLyoqXG4gKiBHZXQgc2VyaWVzIGZpbGwgY29sb3JzIGluIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZXJpZXNGaWxsQ29sb3IgPSAoaW5kZXg6IG51bWJlciA9IDApOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZ2V0Q29sb3JJbk9yZGVyKFNlcmllc0NvbG9ycywgaW5kZXgpXG59XG5cbi8qKlxuICogR2V0IHNlcmllcyBmaWxsIGNvbG9ycyBpbiBvcmRlciwgYnV0IG5vdCByZXBlYXQgdGhlIHByZXZpb3VzIG9uZS5cbiAqIEBwYXJhbSBpbmRleFxuICogQHBhcmFtIHByZVNlcmllQ29sb3JcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXROb25SZXBlYXRpbmdTZXJpZXNGaWxsQ29sb3IgPSAoaW5kZXg6IG51bWJlciA9IDAsIHByZVNlcmllQ29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBnZXROb25SZXBlYXRpbmdDb2xvcihTZXJpZXNDb2xvcnMsIGluZGV4LCBwcmVTZXJpZUNvbG9yKVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEZvbnQ6IElGb250ID0ge1xuICBmYW1pbHk6ICdBdmVuaXIgTmV4dCcsXG4gIHNpemU6IERlZmF1bHRUZXh0U2l6ZSxcbiAgc3R5bGU6IFJFU1RGb250U3R5bGUuTm9ybWFsLFxuICB3ZWlnaHQ6IFJFU1RGb250V2VpZ2h0Lk5vcm1hbCxcbiAgZGVjb3JhdGlvbjogUkVTVEZvbnREZWNvcmF0aW9uLk5vbmVcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUZXh0U3ltYm9sOiBJVGV4dFN5bWJvbCA9IHtcbiAgdHlwZTogUkVTVFN5bWJvbFR5cGUuVFMsXG4gIGNvbG9yOiBEZWZhdWx0VGV4dENvbG9yIGFzIGFueSxcbiAgZm9udDogRGVmYXVsdEZvbnQsXG4gIGhvcml6b250YWxBbGlnbm1lbnQ6IFJFU1RIb3Jpem9udGFsQWxpZ25tZW50LkNlbnRlclxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdExpbmVTeW1ib2w6IElTaW1wbGVMaW5lU3ltYm9sID0ge1xuICB0eXBlOiBSRVNUU3ltYm9sVHlwZS5TTFMsXG4gIHN0eWxlOiBSRVNUU2ltcGxlTGluZVN5bWJvbFN0eWxlLlNvbGlkLFxuICBjb2xvcjogRGVmYXVsdExpbmVDb2xvciBhcyBhbnksXG4gIHdpZHRoOiAxXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0RmlsbFN5bWJvbDogSVNpbXBsZUZpbGxTeW1ib2wgPSB7XG4gIHR5cGU6IFJFU1RTeW1ib2xUeXBlLlNGUyxcbiAgc3R5bGU6IFJFU1RTaW1wbGVGaWxsU3ltYm9sU3R5bGUuU29saWQsXG4gIGNvbG9yOiBEZWZhdWx0RmlsbENvbG9yIGFzIGFueSxcbiAgb3V0bGluZTogRGVmYXVsdExpbmVTeW1ib2xcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRDaXJjbGVNYXJrZXJTeW1ib2w6IElTaW1wbGVNYXJrZXJTeW1ib2wgPSB7XG4gIHR5cGU6IFJFU1RTeW1ib2xUeXBlLlNNUyxcbiAgc3R5bGU6IFJFU1RTaW1wbGVNYXJrZXJTeW1ib2xTdHlsZS5DaXJjbGUsXG4gIGNvbG9yOiBEZWZhdWx0RmlsbENvbG9yIGFzIGFueSxcbiAgc2l6ZTogRGVmYXVsdENpcmNsZU1hcmtlclNpemUsXG4gIG91dGxpbmU6IERlZmF1bHRMaW5lU3ltYm9sXG59XG5cbi8qKlxuICogR2V0IGFsbCB0aGVtZSB2YXJpYWJsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRoZW1lQ29sb3JWYXJpYWJsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCB0aGVtZSA9IHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldFRoZW1lMigpIDogZ2V0VGhlbWUoKVxuICBjb25zdCBwYWxldHRlID0gdGhlbWUuY29sb3JzPy5nZXRQYWxldHRlICE9IG51bGwgPyB0aGVtZS5jb2xvcnMuZ2V0UGFsZXR0ZSgpIDogdGhlbWUuY29sb3JzPy5wYWxldHRlXG5cbiAgY29uc3QgdmFyaWFibGVzID0gW11cbiAgT2JqZWN0LmtleXMocGFsZXR0ZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAgIGNvbnN0IHNoYWRlSW5kZXggPSBpICogMTAwXG4gICAgICBjb25zdCB2YWx1ZSA9IGppbXVVdGlscy50b0NvbG9yVmFyaWFibGUobmFtZSwgc2hhZGVJbmRleClcbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gdmFyaWFibGVzXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gdGhlbWUgY29sb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmFuZG9tVGhlbWVDb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB2YXJpYWxiZXMgPSBnZXRUaGVtZUNvbG9yVmFyaWFibGVzKClcbiAgY29uc3QgbGVuZ3RoID0gdmFyaWFsYmVzLmxlbmd0aFxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aClcbiAgcmV0dXJuIHZhcmlhbGJlc1tyYW5kb21JbmRleF1cbn1cblxuZXhwb3J0IGNvbnN0IGdldEZvbnQgPSAoc2l6ZSA9IERlZmF1bHRUZXh0U2l6ZSk6IElGb250ID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5EZWZhdWx0Rm9udCxcbiAgICBzaXplXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdGV4dCBzeW1ib2xcbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2l6ZVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGV4dFN5bWJvbCA9IChcbiAgdGV4dCA9ICcnLFxuICBzaXplID0gRGVmYXVsdFRleHRTaXplLFxuICBjb2xvciA9IERlZmF1bHRUZXh0Q29sb3IgYXMgYW55XG4pOiBJVGV4dFN5bWJvbCA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uRGVmYXVsdFRleHRTeW1ib2wsXG4gICAgdGV4dCxcbiAgICBjb2xvcixcbiAgICBmb250OiBnZXRGb250KHNpemUpXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgbGluZSBzeW1ib2xcbiAqIEBwYXJhbSB1c2VSYW5kb21Db2xvciBXaGV0aGVyIHRvIHJhbmRvbWx5IGdlbmVyYXRlIGNvbG9yc1xuICogQHBhcmFtIHdpZHRoXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRMaW5lU3ltYm9sID0gKFxuICB3aWR0aDogbnVtYmVyID0gMSxcbiAgY29sb3IgPSBEZWZhdWx0TGluZUNvbG9yIGFzIGFueSxcbiAgc3R5bGU6IFJFU1RTaW1wbGVMaW5lU3ltYm9sU3R5bGUgPSBSRVNUU2ltcGxlTGluZVN5bWJvbFN0eWxlLlNvbGlkXG4pOiBJU2ltcGxlTGluZVN5bWJvbCA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uRGVmYXVsdExpbmVTeW1ib2wsXG4gICAgd2lkdGgsXG4gICAgY29sb3IsXG4gICAgc3R5bGVcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCBmaWxsIHN5bWJvbC5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZpbGxTeW1ib2wgPSAoXG4gIGNvbG9yOiBzdHJpbmcgPSBEZWZhdWx0Q29sb3IsXG4gIG91dGxpbmVXaWR0aDogbnVtYmVyID0gMSxcbiAgb3V0bGluZUNvbG9yID0gRGVmYXVsdExpbmVDb2xvclxuKTogSVNpbXBsZUZpbGxTeW1ib2wgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLkRlZmF1bHRGaWxsU3ltYm9sLFxuICAgIGNvbG9yOiBjb2xvciBhcyBhbnksXG4gICAgb3V0bGluZTogZ2V0TGluZVN5bWJvbChvdXRsaW5lV2lkdGgsIG91dGxpbmVDb2xvcilcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCBjaXJjbGUgbWFya2VyIHN5bWJvbFxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2lyY2xlTWFya2VyU3ltYm9sID0gKFxuICBjb2xvcjogYW55ID0gRGVmYXVsdEZpbGxDb2xvcixcbiAgb3V0bGluZVdpZHRoOiBudW1iZXIgPSAwLFxuICBtYXJrZXJTaXplOiBudW1iZXIgPSBEZWZhdWx0Q2lyY2xlTWFya2VyU2l6ZVxuKTogSVNpbXBsZU1hcmtlclN5bWJvbCA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uRGVmYXVsdENpcmNsZU1hcmtlclN5bWJvbCxcbiAgICBjb2xvcixcbiAgICBzaXplOiBtYXJrZXJTaXplLFxuICAgIG91dGxpbmU6IGdldExpbmVTeW1ib2wob3V0bGluZVdpZHRoKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0R3VpZGUgKG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyA9ICcnLCBpc0hvcml6b250YWw/OiBib29sZWFuKTogV2ViQ2hhcnRHdWlkZSB7XG4gIGNvbnN0IGhvcml6b250YWxBbGlnbm1lbnQgPSBpc0hvcml6b250YWwgPyAnY2VudGVyJyA6ICdyaWdodCdcbiAgY29uc3QgdmVydGljYWxBbGlnbm1lbnQgPSBpc0hvcml6b250YWwgPyAndG9wJyA6ICdtaWRkbGUnXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGdldFRleHRTeW1ib2wobGFiZWwsIERlZmF1bHRHdWlkZUxhYmVsU2l6ZSwgRGVmYXVsdFRleHRDb2xvciBhcyBhbnkpXG4gIGxhYmVsVGV4dC5ob3Jpem9udGFsQWxpZ25tZW50ID0gaG9yaXpvbnRhbEFsaWdubWVudFxuICBsYWJlbFRleHQudmVydGljYWxBbGlnbm1lbnQgPSB2ZXJ0aWNhbEFsaWdubWVudFxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5HdWlkZSxcbiAgICBzdGFydDogdW5kZWZpbmVkLFxuICAgIHN0eWxlOiBnZXRMaW5lU3ltYm9sKDIsIERlZmF1bHRHdWlkZUxpbmVDb2xvciBhcyBhbnkpLFxuICAgIG5hbWUsXG4gICAgbGFiZWw6IGxhYmVsVGV4dCxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGFib3ZlOiBmYWxzZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3ZlcmxheSAoY29sb3I/OiBzdHJpbmcpOiBXZWJDaGFydE92ZXJsYXkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuT3ZlcmxheSxcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBjcmVhdGVkOiBmYWxzZSxcbiAgICBzeW1ib2w6IGdldExpbmVTeW1ib2woMSwgY29sb3IpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYXR0ZXJQbG90T3ZlcmxheXMgKFxuICBjb2xvcjogYW55ID0gU2VyaWVzQ29sb3JzWzJdLFxuICB3aWR0aDogbnVtYmVyID0gM1xuKTogU2NhdHRlclBsb3RPdmVybGF5cyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5PdmVybGF5cyxcbiAgICB0cmVuZExpbmU6IHtcbiAgICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuT3ZlcmxheSxcbiAgICAgIGNyZWF0ZWQ6IHRydWUsXG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgc3ltYm9sOiB7XG4gICAgICAgIHR5cGU6ICdlc3JpU0xTJyxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHdpZHRoXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBkZWZhdWx0IGNoYXJ0IHRleHRcbiAqIEBwYXJhbSB2aXNpYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDaGFydFRleHQgPSAoXG4gIHRleHQgPSAnJyxcbiAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWUsXG4gIHNpemU/OiBudW1iZXIsXG4gIGNvbG9yID0gRGVmYXVsdFRleHRDb2xvciBhcyBhbnlcbik6IFdlYkNoYXJ0VGV4dCA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5UZXh0LFxuICAgIHZpc2libGUsXG4gICAgY29udGVudDogZ2V0VGV4dFN5bWJvbCh0ZXh0LCBzaXplLCBjb2xvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlBeGlzID0gKHRleHQgPSAnJyk6IFdlYkNoYXJ0QXhpcyA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZ2V0Q2hhcnRUZXh0KHRleHQsIGZhbHNlLCBEZWZhdWx0QXhpc1RpdGxlU2l6ZSwgRGVmYXVsdEF4aXNUaXRsZUNvbG9yKVxuICB0aXRsZS5jb250ZW50Lmhvcml6b250YWxBbGlnbm1lbnQgPSBSRVNUSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXJcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkF4aXMsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB0aXRsZSxcbiAgICBsYWJlbHM6IGdldENoYXJ0VGV4dCgnJywgZmFsc2UsIERlZmF1bHRBeGlzTGFiZWxTaXplLCBEZWZhdWx0QXhpc0xhYmVsQ29sb3IpLFxuICAgIHZhbHVlRm9ybWF0OiBnZXREZWZhdWx0Q2F0ZWdvcnlGb3JtYXQoKSxcbiAgICBsaW5lU3ltYm9sOiBnZXRMaW5lU3ltYm9sKDEsIERlZmF1bHRBeGlzQ29sb3IpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFZhbHVlQXhpcyA9IChcbiAgdGV4dCA9ICcnLFxuICBpc1lBeGlzPzogYm9vbGVhblxuKTogV2ViQ2hhcnRBeGlzID0+IHtcbiAgY29uc3QgdGl0bGUgPSBnZXRDaGFydFRleHQodGV4dCwgZmFsc2UsIERlZmF1bHRBeGlzVGl0bGVTaXplLCBEZWZhdWx0QXhpc1RpdGxlQ29sb3IpXG4gIGlmIChpc1lBeGlzKSB7XG4gICAgdGl0bGUuY29udGVudC5ob3Jpem9udGFsQWxpZ25tZW50ID0gdW5kZWZpbmVkXG4gICAgdGl0bGUuY29udGVudC52ZXJ0aWNhbEFsaWdubWVudCA9IFJFU1RWZXJ0aWNhbEFsaWdubWVudC5NaWRkbGVcbiAgICB0aXRsZS5jb250ZW50LmFuZ2xlID0gMjcwXG4gIH0gZWxzZSB7XG4gICAgdGl0bGUuY29udGVudC5ob3Jpem9udGFsQWxpZ25tZW50ID0gUkVTVEhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyXG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkF4aXMsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB0aXRsZSxcbiAgICBsYWJlbHM6IGdldENoYXJ0VGV4dCgnJywgZmFsc2UsIERlZmF1bHRBeGlzTGFiZWxTaXplLCBEZWZhdWx0QXhpc0xhYmVsQ29sb3IpLFxuICAgIHZhbHVlRm9ybWF0OiBnZXREZWZhdWx0TnVtYmVyRm9ybWF0KCksXG4gICAgbGluZVN5bWJvbDogZ2V0TGluZVN5bWJvbCgxLCBEZWZhdWx0QXhpc0NvbG9yKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBkZWZhdWx0IGF4ZXMgYmFzZWQgb24gY2hhcnQgdHlwZSBhcyBwZXIgdGhlIFdlYkNoYXJ0IFNwZWNpZmljYXRpb25cbiAqIEBwYXJhbSBjaGFydFR5cGUgVGhlIHR5cGUgb2YgV2ViQ2hhcnQgd2hpY2ggaXMgb2YgdHlwZSBXZWJDaGFydFR5cGVzLkJhclNlcmllcyB8IFdlYkNoYXJ0VHlwZXMuSGlzdG9ncmFtU2VyaWVzIHwgV2ViQ2hhcnRUeXBlcy5TY2F0dGVyU2VyaWVzXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEF4ZXMgKFxuICBjaGFydFR5cGU6XG4gICAgdHlwZW9mIFdlYkNoYXJ0VHlwZXMuQmFyU2VyaWVzXG4gIHwgdHlwZW9mIFdlYkNoYXJ0VHlwZXMuTGluZVNlcmllc1xuICB8IHR5cGVvZiBXZWJDaGFydFR5cGVzLkhpc3RvZ3JhbVNlcmllc1xuICB8IHR5cGVvZiBXZWJDaGFydFR5cGVzLlNjYXR0ZXJTZXJpZXNcbik6IFdlYkNoYXJ0QXhpc1tdIHtcbiAgY29uc3QgZGVmYXVsdEF4ZXM6IFdlYkNoYXJ0QXhpc1tdID0gW11cbiAgY29uc3QgeEF4aXNUaXRsZSA9ICcnXG4gIGNvbnN0IHlBeGlzVGl0bGUgPSAnJ1xuICBjb25zdCB5QXhpcyA9IGdldFZhbHVlQXhpcyh5QXhpc1RpdGxlLCB0cnVlKVxuICBjb25zdCBkZWZhdWx0R3JpZExpbmUgPSBnZXRMaW5lU3ltYm9sKFxuICAgIDEsXG4gICAgRGVmYXVsdEdyaWRDb2xvcixcbiAgICBSRVNUU2ltcGxlTGluZVN5bWJvbFN0eWxlLkRhc2hcbiAgKVxuICBzd2l0Y2ggKGNoYXJ0VHlwZSkge1xuICAgIGNhc2UgV2ViQ2hhcnRUeXBlcy5CYXJTZXJpZXM6IHtcbiAgICAgIC8vIFNldHRpbmcgTGluZSBDaGFydCBiYXNlbGluZSB0byAwLlxuICAgICAgeUF4aXMubWluaW11bSA9IDBcbiAgICAgIHlBeGlzLmdyaWQgPSBkZWZhdWx0R3JpZExpbmVcbiAgICAgIGRlZmF1bHRBeGVzLnB1c2goZ2V0Q2F0ZWdvcnlBeGlzKHhBeGlzVGl0bGUpLCB5QXhpcylcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgV2ViQ2hhcnRUeXBlcy5MaW5lU2VyaWVzOiB7XG4gICAgICAvLyBTZXR0aW5nIEJhciBDaGFydCBiYXNlbGluZSB0byAwLlxuICAgICAgeUF4aXMubWluaW11bSA9IDBcbiAgICAgIHlBeGlzLmdyaWQgPSBkZWZhdWx0R3JpZExpbmVcbiAgICAgIGRlZmF1bHRBeGVzLnB1c2goZ2V0Q2F0ZWdvcnlBeGlzKHhBeGlzVGl0bGUpLCB5QXhpcylcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGNhc2UgV2ViQ2hhcnRUeXBlcy5TY2F0dGVyU2VyaWVzOiB7XG4gICAgICBjb25zdCB4QXhpcyA9IGdldFZhbHVlQXhpcyh4QXhpc1RpdGxlKVxuICAgICAgeEF4aXMuZ3JpZCA9IGRlZmF1bHRHcmlkTGluZVxuICAgICAgeUF4aXMuZ3JpZCA9IGRlZmF1bHRHcmlkTGluZVxuICAgICAgZGVmYXVsdEF4ZXMucHVzaCh4QXhpcywgeUF4aXMpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBjYXNlIFdlYkNoYXJ0VHlwZXMuSGlzdG9ncmFtU2VyaWVzOiB7XG4gICAgICB5QXhpcy5ncmlkID0gZGVmYXVsdEdyaWRMaW5lXG4gICAgICBkZWZhdWx0QXhlcy5wdXNoKGdldFZhbHVlQXhpcyh4QXhpc1RpdGxlKSwgeUF4aXMpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuICAvLyBUT0RPOiBvbmNlIGBnZXREZWZhdWx0QXhlc2AgaXMgb25seSBuZWVkZWQgdmlhIGBnZXREZWZhdWx0QmFyQ2hhcnRgIGRlZXAgY2xvbmUgY2FuIGJlIHJlbW92ZWQuXG4gIHJldHVybiBkZWZhdWx0QXhlc1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmllc0NvbG9yUHJvcHMge1xuICBjb2xvcj86IHN0cmluZ1xuICBwcmVTZXJpZUNvbG9yPzogc3RyaW5nXG4gIGNvbG9ycz86IHN0cmluZ1tdXG59XG5cbi8qKlxuICogUmV0dXJucyBhIGRlZmF1bHQgQmFyQ2hhcnRTZXJpZXMgb2JqZWN0IGFzIHBlciB0aGUgV2ViQ2hhcnQgU3BlY2lmaWNhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEJhckNoYXJ0U2VyaWVzIChpbmRleDogbnVtYmVyID0gMCwgY29sb3JQcm9wcz86IFNlcmllc0NvbG9yUHJvcHMpOiBXZWJDaGFydFNlcmllcyB7XG4gIGNvbnN0IGNvbG9yID0gIWNvbG9yUHJvcHM/LmNvbG9yID8gZ2V0Tm9uUmVwZWF0aW5nQ29sb3IoY29sb3JQcm9wcz8uY29sb3JzID8/IFNlcmllc0NvbG9ycywgaW5kZXgsIGNvbG9yUHJvcHM/LnByZVNlcmllQ29sb3IpIDogY29sb3JQcm9wcz8uY29sb3JcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkJhclNlcmllcyxcbiAgICBpZDogJycsXG4gICAgbmFtZTogJycsXG4gICAgeDogJycsXG4gICAgeTogJycsXG4gICAgY29sb3JUeXBlOiBXZWJDaGFydENvbG9yaW5nUGF0dGVybnMuU2luZ2xlLFxuICAgIHN0YWNrZWRUeXBlOiBXZWJDaGFydFN0YWNrZWRLaW5kcy5TaWRlLFxuICAgIGZpbGxTeW1ib2w6IGdldEZpbGxTeW1ib2woY29sb3IsIDApLFxuICAgIGRhdGFMYWJlbHM6IGdldENoYXJ0VGV4dCgnJywgZmFsc2UsIERlZmF1bHRTZXJpZXNMYWJlbFNpemUsIERlZmF1bHRWYWx1ZUxhYmVsQ29sb3IpLFxuICAgIHJvdGF0ZWQ6IGZhbHNlXG4gIH0gYXMgV2ViQ2hhcnRTZXJpZXNcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVmYXVsdCBMaW5lQ2hhcnRTZXJpZXMgb2JqZWN0IGFzIHBlciB0aGUgV2ViQ2hhcnQgU3BlY2lmaWNhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdExpbmVDaGFydFNlcmllcyAoaW5kZXg6IG51bWJlciA9IDAsIGNvbG9yUHJvcHM/OiBTZXJpZXNDb2xvclByb3BzKTogV2ViQ2hhcnRTZXJpZXMge1xuICBjb25zdCBjb2xvciA9ICFjb2xvclByb3BzPy5jb2xvciA/IGdldE5vblJlcGVhdGluZ0NvbG9yKGNvbG9yUHJvcHM/LmNvbG9ycyA/PyBTZXJpZXNDb2xvcnMsIGluZGV4LCBjb2xvclByb3BzPy5wcmVTZXJpZUNvbG9yKSA6IGNvbG9yUHJvcHM/LmNvbG9yXG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5MaW5lU2VyaWVzLFxuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICB4OiAnJyxcbiAgICB5OiAnJyxcbiAgICBjb2xvclR5cGU6IFdlYkNoYXJ0Q29sb3JpbmdQYXR0ZXJucy5TaW5nbGUsXG4gICAgc3RhY2tlZFR5cGU6IFdlYkNoYXJ0U3RhY2tlZEtpbmRzLlNpZGUsXG4gICAgbGluZVN5bWJvbDogZ2V0TGluZVN5bWJvbCgyLCBjb2xvciksXG4gICAgZGF0YUxhYmVsczogZ2V0Q2hhcnRUZXh0KCcnLCBmYWxzZSwgRGVmYXVsdFNlcmllc0xhYmVsU2l6ZSwgRGVmYXVsdFZhbHVlTGFiZWxDb2xvciksXG4gICAgcm90YXRlZDogZmFsc2VcbiAgfSBhcyBXZWJDaGFydFNlcmllc1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBkZWZhdWx0IFBpZUNoYXJ0U2VyaWVzIG9iamVjdCBhcyBwZXIgdGhlIFdlYkNoYXJ0IFNwZWNpZmljYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRQaWVDaGFydFNlcmllcyAoKTogV2ViQ2hhcnRTZXJpZXMge1xuICBjb25zdCBjb2xvciA9IGdldFNlcmllc0ZpbGxDb2xvcigwKVxuICByZXR1cm4ge1xuICAgIHR5cGU6IFdlYkNoYXJ0VHlwZXMuUGllU2VyaWVzLFxuICAgIGNvbG9yVHlwZTogV2ViQ2hhcnRDb2xvcmluZ1BhdHRlcm5zLlNpbmdsZSxcbiAgICBpZDogJycsXG4gICAgbmFtZTogJycsXG4gICAgeDogJycsXG4gICAgeTogJycsXG4gICAgaW5uZXJSYWRpdXM6IDAsXG4gICAgc3RhcnRBbmdsZTogMCxcbiAgICBlbmRBbmdsZTogMzYwLFxuICAgIGRpc3BsYXlOdW1lcmljVmFsdWVPbkRhdGFMYWJlbDogdHJ1ZSxcbiAgICBkaXNwbGF5UGVyY2VudGFnZU9uRGF0YUxhYmVsOiBmYWxzZSxcbiAgICBkaXNwbGF5TnVtZXJpY1ZhbHVlT25Ub29sdGlwOiB0cnVlLFxuICAgIGRpc3BsYXlQZXJjZW50YWdlT25Ub29sdGlwOiB0cnVlLFxuICAgIGRhdGFMYWJlbHNPZmZzZXQ6IDAsXG4gICAgc2xpY2VHcm91cGluZzoge1xuICAgICAgc2xpY2VJZDogUGllU2xpY2VHcm91cGluZ1NsaWNlSWQsXG4gICAgICBwZXJjZW50YWdlVGhyZXNob2xkOiAwLFxuICAgICAgbGFiZWw6ICdPdGhlcidcbiAgICB9LFxuICAgIG51bWVyaWNWYWx1ZUZvcm1hdDogZ2V0RGVmYXVsdE51bWJlckZvcm1hdCgpLFxuICAgIHBlcmNlbnRWYWx1ZUZvcm1hdDogZ2V0RGVmYXVsdFBlcmNlbnROdW1iZXJGb3JtYXQoKSxcbiAgICBmaWxsU3ltYm9sOiBnZXRGaWxsU3ltYm9sKGNvbG9yLCAxLCAndmFyKC0tbGlnaHQtMTAwKScpLFxuICAgIGRhdGFMYWJlbHM6IGdldENoYXJ0VGV4dCgnJywgZmFsc2UsIERlZmF1bHRTZXJpZXNMYWJlbFNpemUsIERlZmF1bHRWYWx1ZUxhYmVsQ29sb3IpXG4gIH0gYXMgV2ViQ2hhcnRTZXJpZXNcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVmYXVsdCBTY2F0dGVyUGxvdENoYXJ0U2VyaWVzIG9iamVjdCBhcyBwZXIgdGhlIFdlYkNoYXJ0IFNwZWNpZmljYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTY2F0dGVyUGxvdENoYXJ0U2VyaWVzICgpOiBXZWJDaGFydFNlcmllcyB7XG4gIGNvbnN0IGNvbG9yID0gZ2V0U2VyaWVzRmlsbENvbG9yKDApXG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5TY2F0dGVyU2VyaWVzLFxuICAgIGNvbG9yVHlwZTogV2ViQ2hhcnRDb2xvcmluZ1BhdHRlcm5zLlNpbmdsZSxcbiAgICBpZDogJycsXG4gICAgbmFtZTogJycsXG4gICAgeDogJycsXG4gICAgeTogJycsXG4gICAgbWFya2VyU3ltYm9sOiBnZXRDaXJjbGVNYXJrZXJTeW1ib2woY29sb3IsIDAsIGRlZmF1bHRNYXJrZXJTaXplKSxcbiAgICBvdmVybGF5czogZ2V0U2NhdHRlclBsb3RPdmVybGF5cygpXG4gIH0gYXMgV2ViQ2hhcnRTZXJpZXNcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVmYXVsdCBIaXN0b2dyYW1DaGFydFNlcmllcyBvYmplY3QgYXMgcGVyIHRoZSBXZWJDaGFydCBTcGVjaWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0SGlzdG9ncmFtU2VyaWVzICgpOiBXZWJDaGFydFNlcmllcyB7XG4gIGNvbnN0IGNvbG9yID0gZ2V0U2VyaWVzRmlsbENvbG9yKDApXG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5IaXN0b2dyYW1TZXJpZXMsXG4gICAgY29sb3JUeXBlOiBXZWJDaGFydENvbG9yaW5nUGF0dGVybnMuU2luZ2xlLFxuICAgIGlkOiAnJyxcbiAgICBuYW1lOiAnJyxcbiAgICB4OiAnJyxcbiAgICBiaW5Db3VudDogMTUsXG4gICAgb3ZlcmxheXM6IGdldERlZmF1bHRIaXN0b2dyYW1PdmVybGF5cygpLFxuICAgIGRhdGFUcmFuc2Zvcm1hdGlvblR5cGU6IFdlYkNoYXJ0RGF0YVRyYW5zZm9ybWF0aW9ucy5Ob25lLFxuICAgIGZpbGxTeW1ib2w6IGdldEZpbGxTeW1ib2woY29sb3IsIDEsICd2YXIoLS1saWdodC0xMDApJyksXG4gICAgZGF0YUxhYmVsczogZ2V0Q2hhcnRUZXh0KCcnLCBmYWxzZSwgRGVmYXVsdFNlcmllc0xhYmVsU2l6ZSwgRGVmYXVsdFZhbHVlTGFiZWxDb2xvciksXG4gICAgcm90YXRlZDogZmFsc2VcbiAgfSBhcyBXZWJDaGFydFNlcmllc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEhpc3RvZ3JhbU92ZXJsYXlzICgpOiBIaXN0b2dyYW1PdmVybGF5cyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogV2ViQ2hhcnRUeXBlcy5PdmVybGF5cyxcbiAgICBtZWFuOiBnZXREZWZhdWx0T3ZlcmxheShnZXREZWZhdWx0SGlzdG9tZ3JhbU92ZXJsYXlDb2xvcignbWVhbicpKSxcbiAgICBtZWRpYW46IGdldERlZmF1bHRPdmVybGF5KGdldERlZmF1bHRIaXN0b21ncmFtT3ZlcmxheUNvbG9yKCdtZWRpYW4nKSksXG4gICAgc3RhbmRhcmREZXZpYXRpb246IGdldERlZmF1bHRPdmVybGF5KGdldERlZmF1bHRIaXN0b21ncmFtT3ZlcmxheUNvbG9yKCdzdGFuZGFyZERldmlhdGlvbicpKSxcbiAgICBjb21wYXJpc29uRGlzdHJpYnV0aW9uOiBnZXREZWZhdWx0T3ZlcmxheShnZXREZWZhdWx0SGlzdG9tZ3JhbU92ZXJsYXlDb2xvcignY29tcGFyaXNvbkRpc3RyaWJ1dGlvbicpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0TGVnZW5kID0gKHZpc2libGUgPSB0cnVlLCBpc1BpZTogYm9vbGVhbiA9IGZhbHNlKTogV2ViQ2hhcnRMZWdlbmQgPT4ge1xuICBsZXQgbGVnZW5kOiBXZWJDaGFydExlZ2VuZCA9IHtcbiAgICB0eXBlOiBXZWJDaGFydFR5cGVzLkxlZ2VuZCxcbiAgICB2aXNpYmxlLFxuICAgIHRpdGxlOiBnZXRDaGFydFRleHQoJycsIHRydWUsIERlZmF1bHRMZWdlbmRUaXRsZVNpemUsIERlZmF1bHRMZWdlbmRUaXRsZUNvbG9yKSxcbiAgICBib2R5OiBnZXRUZXh0U3ltYm9sKCcnLCBEZWZhdWx0TGVnZW5kTGFiZWxTaXplLCBEZWZhdWx0TGVnZW5kTGFiZWxDb2xvciksXG4gICAgcG9zaXRpb246IFdlYkNoYXJ0TGVnZW5kUG9zaXRpb25zLlJpZ2h0XG4gIH1cbiAgaWYgKGlzUGllKSB7XG4gICAgbGVnZW5kID0ge1xuICAgICAgLi4ubGVnZW5kLFxuICAgICAgbGFiZWxNYXhXaWR0aDogRGVmYXVsdFBpZUxlZ2VuZExhYmVsTWF4V2lkdGhcbiAgICB9IGFzIFdlYkNoYXJ0UGllQ2hhcnRMZWdlbmRcbiAgfVxuICByZXR1cm4gbGVnZW5kXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBgRm9ybWF0T3B0aW9uc2Agb2YgYWMtc3BlYyBieSBhIGZpZWxkIHNjaGVtYVxuICogQHBhcmFtIGZpZWxkU2NoZW1hXG4gKiBAcGFyYW0gY2hhcmFjdGVyTGltaXRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRm9ybWF0ID0gKFxuICBmaWVsZFNjaGVtYTogSU1GaWVsZFNjaGVtYSxcbiAgY2hhcmFjdGVyTGltaXQ6IG51bWJlciA9IDExXG4pOiBhbnkgPT4ge1xuICBpZiAoZmllbGRTY2hlbWEudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5EYXRlKSB7XG4gICAgY29uc3QgaW50bE9wdGlvbnMgPSB1dGlscy5nZXRJbnRsT3B0aW9uKGZpZWxkU2NoZW1hKSA/PyB7fVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICBpbnRsT3B0aW9uc1xuICAgIH1cbiAgfSBlbHNlIGlmIChmaWVsZFNjaGVtYS50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgY2hhcmFjdGVyTGltaXRcbiAgICB9XG4gIH0gZWxzZSBpZiAoZmllbGRTY2hlbWEudHlwZSA9PT0gSmltdUZpZWxkVHlwZS5OdW1iZXIpIHtcbiAgICBjb25zdCBpbnRsT3B0aW9ucyA9IHV0aWxzLmdldEludGxPcHRpb24oZmllbGRTY2hlbWEpID8/IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgaW50bE9wdGlvbnNcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGlzU2VyaWFsU2VyaWVzID0gKFxuICB2YWx1ZT86IHN0cmluZyB8IFdlYkNoYXJ0U2VyaWVzW10gfCBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz5cbik6IGJvb2xlYW4gPT4ge1xuICBpZiAodmFsdWUgPT0gbnVsbCB8fCAodmFsdWUgYXMgc3RyaW5nKSA9PT0gJycpIHJldHVyblxuICBjb25zdCBzZXJpZXNUeXBlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIGFzIENoYXJ0VHlwZXMgOiBnZXRTZXJpZXNUeXBlKHZhbHVlIGFzIGFueSkgYXMgc3RyaW5nXG4gIHJldHVybiBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkJhclNlcmllcyB8fCBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkxpbmVTZXJpZXNcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgY2hhcnQgaXMgYSBYWSBjaGFydC5cbiAqIEBwYXJhbSBzZXJpZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgaXNYWUNoYXJ0ID0gKHZhbHVlOiBzdHJpbmcgfCBXZWJDaGFydFNlcmllc1tdIHwgSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+KTogYm9vbGVhbiA9PiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh2YWx1ZSBhcyBzdHJpbmcpID09PSAnJykgcmV0dXJuIGZhbHNlXG4gIGNvbnN0IHNlcmllc1R5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBnZXRTZXJpZXNUeXBlKHZhbHVlIGFzIGFueSkgYXMgc3RyaW5nXG4gIHJldHVybiBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkJhclNlcmllcyB8fCBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLkxpbmVTZXJpZXMgfHxcbiAgICBzZXJpZXNUeXBlID09PSBXZWJDaGFydFR5cGVzLlNjYXR0ZXJTZXJpZXMgfHwgc2VyaWVzVHlwZSA9PT0gV2ViQ2hhcnRUeXBlcy5IaXN0b2dyYW1TZXJpZXNcbn1cbiIsImltcG9ydCB7IEJhc2VWZXJzaW9uTWFuYWdlciwgdHlwZSBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zLCBJbW11dGFibGUsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgZ2V0U2VyaWVzVHlwZSwgV2ViQ2hhcnRUeXBlcywgdHlwZSBXZWJDaGFydFBpZUNoYXJ0U2VyaWVzLCB0eXBlIFdlYkNoYXJ0QmFyQ2hhcnRTZXJpZXMsIHR5cGUgV2ViQ2hhcnRQaWVDaGFydExlZ2VuZCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvY2hhcnQnXG5pbXBvcnQgeyBDYXRlZ29yeVR5cGUsIHR5cGUgSVdlYkNoYXJ0LCB0eXBlIElNQ29uZmlnLCB0eXBlIFdlYkNoYXJ0U2VyaWVzIH0gZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBCeUZpZWxkU2VyaWVzWCwgQnlGaWVsZFNlcmllc1ksIFBpZVNsaWNlR3JvdXBpbmdTbGljZUlkIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBjYXBpdGFsaXplU3RyaW5nIH0gZnJvbSAnLi91dGlscy9jb21tb24nXG5pbXBvcnQgeyBnZXRDYXRlZ29yeVR5cGUgfSBmcm9tICcuL3V0aWxzL2NvbW1vbi9zZXJpYWwnXG5pbXBvcnQgeyBEZWZhdWx0UGllTGVnZW5kTGFiZWxNYXhXaWR0aCwgZ2V0RmlsbFN5bWJvbCwgaXNTZXJpYWxTZXJpZXMgfSBmcm9tICcuL3V0aWxzL2RlZmF1bHQnXG5cbi8qKlxuICogRnVuY3Rpb24gbWVyZ2luZyBtdWx0aXBsZSBgb3V0U3RhdGlzdGljc2AgcHJvcGVydGllcy5cbiAqIEBwYXJhbSB1bmlxdWVRdWVyeVxuICogQHBhcmFtIHNlcmllc1xuICovXG5jb25zdCBtZXJnZU91dFN0YXRpc3RpY3MgPSAodW5pcXVlUXVlcnk6IElNRmVhdHVyZUxheWVyUXVlcnlQYXJhbXMsIHNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+KSA9PiB7XG4gIHNlcmllcy5zbGljZSgxKS5mb3JFYWNoKChzZXJpZSkgPT4ge1xuICAgIGNvbnN0IG91dFN0YXRpc3RpY3MgPSAodW5pcXVlUXVlcnkub3V0U3RhdGlzdGljcyA/PyBbXSkuY29uY2F0KHNlcmllLnF1ZXJ5Py5vdXRTdGF0aXN0aWNzID8/IFtdKVxuICAgIHVuaXF1ZVF1ZXJ5ID0gdW5pcXVlUXVlcnkuc2V0KCdvdXRTdGF0aXN0aWNzJywgb3V0U3RhdGlzdGljcylcbiAgfSlcbiAgcmV0dXJuIHVuaXF1ZVF1ZXJ5XG59XG5cbi8qKlxuICogRnVuY3Rpb24gYnVpbGRpbmcgYSB1bmlxdWUgcXVlcnkgYmFzZWQgb24gdGhlIGNoYXJ0IHNlcmllcyBjb25maWcuXG4gKiBOb3RlOiBhbGwgcXVlcmllcyBoYXZlIHRoZSBzYW1lIG9uU3RhdGlzdGljc0ZpZWxkLCBzbyB0aGV5IGNhbiBiZSBjb21iaW5lZCBpbnRvIG9uZSBxdWVyeS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkVW5pcXVlUXVlcnkgPSAoc2VyaWVzOiBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz4pOiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zID0+IHtcbiAgaWYgKCFzZXJpZXM/Lmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgbGV0IHVuaXF1ZVF1ZXJ5OiBJTUZlYXR1cmVMYXllclF1ZXJ5UGFyYW1zID0gc2VyaWVzWzBdLnF1ZXJ5XG4gIGlmICghdW5pcXVlUXVlcnkub3V0U3RhdGlzdGljcz8ubGVuZ3RoKSByZXR1cm4gbnVsbFxuICBpZiAodW5pcXVlUXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5sZW5ndGgpIHtcbiAgICB1bmlxdWVRdWVyeSA9IG1lcmdlT3V0U3RhdGlzdGljcyh1bmlxdWVRdWVyeSwgc2VyaWVzKVxuICB9XG4gIHJldHVybiB1bmlxdWVRdWVyeVxufVxuXG4vKipcbiAqIFVzZSB0aGUgbnVtZXJpYyBmaWVsZCBhcyB0aGUgaWQgb2YgdGhlIHNlcmllLlxuICovXG5leHBvcnQgY29uc3Qgc2V0U2VyaWVzSWRXaXRoTnVtZXJpY0ZpZWxkID0gKHNlcmllczogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+KTogSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+ID0+IHtcbiAgcmV0dXJuIHNlcmllcz8ubWFwKChzZXJpZSkgPT4ge1xuICAgIGlmICghc2VyaWUucXVlcnk/Lmdyb3VwQnlGaWVsZHNGb3JTdGF0aXN0aWNzPy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzZXJpZVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBudW1lcmljRmllbGQgPSBzZXJpZS5xdWVyeT8ub3V0U3RhdGlzdGljcz8uWzBdPy5vblN0YXRpc3RpY0ZpZWxkXG4gICAgICBjb25zdCBpZCA9IHNlcmllLmlkXG4gICAgICBpZiAobnVtZXJpY0ZpZWxkICYmIG51bWVyaWNGaWVsZCAhPT0gaWQpIHtcbiAgICAgICAgc2VyaWUgPSBJbW11dGFibGUuc2V0KHNlcmllLCAnaWQnLCBudW1lcmljRmllbGQpXG4gICAgICB9XG4gICAgICByZXR1cm4gc2VyaWVcbiAgICB9XG4gIH0pIGFzIHVua25vd24gYXMgSW1tdXRhYmxlQXJyYXk8V2ViQ2hhcnRTZXJpZXM+XG59XG5cbmV4cG9ydCBjb25zdCB1cGdyYWRlQ29sb3JNYXRjaCA9IChvbGRDb25maWc6IElNQ29uZmlnKTogSU1Db25maWcgPT4ge1xuICBpZiAoIW9sZENvbmZpZykgcmV0dXJuIG9sZENvbmZpZ1xuICBsZXQgc2VyaWVzID0gb2xkQ29uZmlnLndlYkNoYXJ0Py5zZXJpZXNcbiAgaWYgKCFzZXJpZXM/Lmxlbmd0aCkgcmV0dXJuIG9sZENvbmZpZ1xuICBjb25zdCBzZXJpZXNUeXBlID0gZ2V0U2VyaWVzVHlwZShzZXJpZXMgYXMgYW55KVxuICBpZiAoc2VyaWVzVHlwZSAhPT0gJ3BpZVNlcmllcycpIHJldHVybiBvbGRDb25maWdcbiAgY29uc3QgY29sb3JUeXBlID0gc2VyaWVzWzBdLmNvbG9yVHlwZVxuICBpZiAoY29sb3JUeXBlICE9PSAnY29sb3JNYXRjaCcpIHJldHVybiBvbGRDb25maWdcbiAgbGV0IGRhdGFTb3VyY2UgPSBvbGRDb25maWcud2ViQ2hhcnQuZGF0YVNvdXJjZVxuICBjb25zdCBjb2xvck1hdGNoID0gZGF0YVNvdXJjZT8uY29sb3JNYXRjaFxuICBpZiAoIWNvbG9yTWF0Y2gpIHJldHVybiBvbGRDb25maWdcblxuICBjb25zdCBjb2xvck1hdGNoZXMgPSBjb2xvck1hdGNoLmNvbG9yTWF0Y2hlc1xuICBjb25zdCBkZWZhdWx0RmlsbFN5bWJvbCA9IChzZXJpZXNbMF0gYXMgdW5rbm93biBhcyBXZWJDaGFydFBpZUNoYXJ0U2VyaWVzKS5maWxsU3ltYm9sXG4gIGNvbnN0IHNsaWNlcyA9IE9iamVjdC5lbnRyaWVzKGNvbG9yTWF0Y2hlcykubWFwKChba2V5LCBtYXRjaF0pID0+IHtcbiAgICBjb25zdCBzbGljZUlkID0ga2V5XG4gICAgY29uc3QgY29sb3IgPSBtYXRjaC5fZmlsbENvbG9yXG4gICAgY29uc3QgZmlsbFN5bWJvbCA9IGdldEZpbGxTeW1ib2woY29sb3IsIGRlZmF1bHRGaWxsU3ltYm9sLm91dGxpbmU/LndpZHRoID8/IDAsIGRlZmF1bHRGaWxsU3ltYm9sLm91dGxpbmU/LmNvbG9yIGFzIGFueSlcbiAgICByZXR1cm4geyBzbGljZUlkLCBmaWxsU3ltYm9sIH1cbiAgfSlcbiAgc2VyaWVzID0gSW1tdXRhYmxlLnNldEluKHNlcmllcywgWycwJywgJ3NsaWNlcyddLCBzbGljZXMpXG4gIGRhdGFTb3VyY2UgPSBkYXRhU291cmNlLndpdGhvdXQoJ2NvbG9yTWF0Y2gnKVxuICBjb25zdCBuZXdDb25maWc6IElNQ29uZmlnID0gb2xkQ29uZmlnLnNldEluKFsnd2ViQ2hhcnQnLCAnc2VyaWVzJ10sIHNlcmllcylcbiAgICAuc2V0SW4oWyd3ZWJDaGFydCcsICdkYXRhU291cmNlJ10sIGRhdGFTb3VyY2UpXG4gIHJldHVybiBuZXdDb25maWdcbn1cblxuZXhwb3J0IGNvbnN0IHVwZ3JhZGVCeUZpZWxkID0gKG9sZENvbmZpZzogSU1Db25maWcpOiBJTUNvbmZpZyA9PiB7XG4gIGlmICghb2xkQ29uZmlnKSByZXR1cm4gb2xkQ29uZmlnXG4gIGxldCBxdWVyeSA9IG9sZENvbmZpZy53ZWJDaGFydD8uZGF0YVNvdXJjZT8ucXVlcnlcbiAgbGV0IHNlcmllcyA9IG9sZENvbmZpZy53ZWJDaGFydD8uc2VyaWVzXG4gIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllcyBhcyBhbnkpXG4gIGlmIChzZXJpZXNUeXBlICE9PSAncGllU2VyaWVzJyAmJiAhaXNTZXJpYWxTZXJpZXMoc2VyaWVzVHlwZSkpIHJldHVybiBvbGRDb25maWdcbiAgY29uc3QgY2F0ZWdvcnlUeXBlID0gZ2V0Q2F0ZWdvcnlUeXBlKHF1ZXJ5KVxuICBpZiAoY2F0ZWdvcnlUeXBlICE9PSBDYXRlZ29yeVR5cGUuQnlGaWVsZCkgcmV0dXJuIG9sZENvbmZpZ1xuICBjb25zdCBzdGF0aXN0aWNUeXBlID0gcXVlcnk/Lm91dFN0YXRpc3RpY3M/LlswXT8uc3RhdGlzdGljVHlwZSA/PyAnc3VtJ1xuICBzZXJpZXMgPSBzZXJpZXMubWFwKHNlcmllID0+IHtcbiAgICBsZXQgeCA9IHNlcmllLnhcbiAgICBsZXQgeSA9IChzZXJpZSBhcyBhbnkpLnlcbiAgICBsZXQgaWQgPSAoc2VyaWUgYXMgYW55KS55XG4gICAgaWYgKHggPT09ICdGaWVsZE5hbWUnKSB7XG4gICAgICB4ID0gQnlGaWVsZFNlcmllc1hcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0KCd4JywgeClcbiAgICB9XG4gICAgaWYgKHkgPT09ICdGaWVsZFZhbHVlJykge1xuICAgICAgeSA9IEJ5RmllbGRTZXJpZXNZXG4gICAgICBzZXJpZSA9IHNlcmllLnNldCgneScsIHkpXG4gICAgfVxuICAgIGlmIChpZCA9PT0gJ0ZpZWxkVmFsdWUnKSB7XG4gICAgICBpZCA9IEJ5RmllbGRTZXJpZXNZXG4gICAgICBzZXJpZSA9IHNlcmllLnNldCgnaWQnLCBpZClcbiAgICB9XG4gICAgaWYgKHNlcmllLm5hbWUgPT09ICdTdW0gb2YgdmFsdWUnKSB7XG4gICAgICBjb25zdCBuYW1lID0gYCR7Y2FwaXRhbGl6ZVN0cmluZyhzdGF0aXN0aWNUeXBlKX0gb2YgdmFsdWVgXG4gICAgICBzZXJpZSA9IHNlcmllLnNldCgnbmFtZScsIG5hbWUpXG4gICAgfVxuICAgIHJldHVybiBzZXJpZVxuICB9KSBhcyBhbnlcbiAgY29uc3Qgb3JkZXJCeUZpZWxkID0gcXVlcnkub3JkZXJCeUZpZWxkcz8uWzBdXG4gIGlmIChvcmRlckJ5RmllbGQ/LmluY2x1ZGVzKCdGaWVsZE5hbWUnKSkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2V0KCdvcmRlckJ5RmllbGRzJywgW29yZGVyQnlGaWVsZC5yZXBsYWNlKCdGaWVsZE5hbWUnLCBCeUZpZWxkU2VyaWVzWCldKVxuICB9IGVsc2UgaWYgKG9yZGVyQnlGaWVsZD8uaW5jbHVkZXMoJ0ZpZWxkVmFsdWUnKSkge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2V0KCdvcmRlckJ5RmllbGRzJywgW29yZGVyQnlGaWVsZC5yZXBsYWNlKCdGaWVsZFZhbHVlJywgQnlGaWVsZFNlcmllc1kpXSlcbiAgfVxuICBjb25zdCBuZXdDb25maWc6IElNQ29uZmlnID0gb2xkQ29uZmlnLnNldEluKFsnd2ViQ2hhcnQnLCAnc2VyaWVzJ10sIHNlcmllcylcbiAgICAuc2V0SW4oWyd3ZWJDaGFydCcsICdkYXRhU291cmNlJywgJ3F1ZXJ5J10sIHF1ZXJ5KVxuICByZXR1cm4gbmV3Q29uZmlnXG59XG5cbi8qKlxuICogRm9yIEJhciwgTGluZSBjaGFydHMsIHRoaXMgZnVuY3Rpb24gd2lsbFxuICogLSBNb3ZlIHRoZSBvcHRpb25hbCBgcm90YXRlZGAgcHJvcGVydHkgZnJvbSB0aGUgc2VyaWVzIHRvIHRoZSBjaGFydCBvYmplY3QgaWYgdGhlIGNoYXJ0IG9iamVjdCBkb2VzIG5vdCBjb250YWluIHRoaXMgcHJvcGVydHkuXG4gKiAtIFJlbW92ZSBhbGwgc2VyaWVzJyByb3RhdGVkIHByb3BlcnR5LlxuICogQHBhcmFtIHdlYkNoYXJ0VG9VcGRhdGUgY29uZmlnIHRvIHVwZGF0ZVxuICogQHJldHVybnMgdGhlIHVwZGF0ZWQgY29uZmlnXG4gKiBVc2VkIGluIHZlcnNpb24gMS4xMi4wXG4gKi9cbmNvbnN0IG1vdmVTZXJpZXNSb3RhdGVkUHJvcFRvQ2hhcnQgPSAod2ViQ2hhcnRUb1VwZGF0ZTogSW1tdXRhYmxlT2JqZWN0PElXZWJDaGFydD4pOiBJbW11dGFibGVPYmplY3Q8SVdlYkNoYXJ0PiA9PiB7XG4gIGxldCB1cGRhdGVkV2ViQ2hhcnQgPSB3ZWJDaGFydFRvVXBkYXRlXG5cbiAgaWYgKHdlYkNoYXJ0VG9VcGRhdGU/LnNlcmllcz8ubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2VyaWVzVHlwZSA9IGdldFNlcmllc1R5cGUod2ViQ2hhcnRUb1VwZGF0ZS5zZXJpZXMgYXMgYW55KVxuICAgIGNvbnN0IGlzQmFyT3JMaW5lID0gc2VyaWVzVHlwZSA9PT0gV2ViQ2hhcnRUeXBlcy5CYXJTZXJpZXMgfHwgc2VyaWVzVHlwZSA9PT0gV2ViQ2hhcnRUeXBlcy5MaW5lU2VyaWVzXG4gICAgaWYgKGlzQmFyT3JMaW5lICYmIHdlYkNoYXJ0VG9VcGRhdGUucm90YXRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpZiB0aGUgY2hhcnQgcm90YXRlZCBwcm9wZXJ0eSBpcyBub3Qgc2V0LCBzZXQgaXQgdXNpbmcgdGhlIGZpcnN0IHNlcmllcycgcm90YXRlZCBwcm9wZXJ0eSBvciB1c2UgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICAgIGNvbnN0IHJvdGF0ZWQgPSAod2ViQ2hhcnRUb1VwZGF0ZS5zZXJpZXNbMF0gYXMgSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0QmFyQ2hhcnRTZXJpZXM+KS5yb3RhdGVkID8/IGZhbHNlXG4gICAgICB1cGRhdGVkV2ViQ2hhcnQgPSB1cGRhdGVkV2ViQ2hhcnQuc2V0KCdyb3RhdGVkJywgcm90YXRlZClcbiAgICAgIGNvbnN0IHNlcmllcyA9IHVwZGF0ZWRXZWJDaGFydC5zZXJpZXMubWFwKChzZXJpZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzZXJpZS5yb3RhdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzZXJpZSA9IHNlcmllLndpdGhvdXQoJ3JvdGF0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJpZSBhcyBJbW11dGFibGVPYmplY3Q8V2ViQ2hhcnRTZXJpZXM+XG4gICAgICB9KVxuICAgICAgdXBkYXRlZFdlYkNoYXJ0ID0gdXBkYXRlZFdlYkNoYXJ0LnNldCgnc2VyaWVzJywgc2VyaWVzKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdXBkYXRlZFdlYkNoYXJ0XG59XG5cbmNsYXNzIFZlcnNpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZVZlcnNpb25NYW5hZ2VyIHtcbiAgdmVyc2lvbnMgPSBbe1xuICAgIHZlcnNpb246ICcxLjYuMCcsXG4gICAgZGVzY3JpcHRpb246ICdSZW5hbWUgYG11bHRpcGxlQmFyVHlwZWAgdG8gYHN0YWNrZWRUeXBlYCcsXG4gICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoIW9sZENvbmZpZykgcmV0dXJuIG9sZENvbmZpZ1xuICAgICAgbGV0IHNlcmllcyA9IG9sZENvbmZpZy53ZWJDaGFydD8uc2VyaWVzXG4gICAgICBpZiAoIXNlcmllcz8ubGVuZ3RoKSByZXR1cm4gb2xkQ29uZmlnXG4gICAgICBzZXJpZXMgPSBzZXJpZXMubWFwKChzZXJpZSkgPT4ge1xuICAgICAgICBzZXJpZSA9IChzZXJpZSBhcyBhbnkpLnNldCgnc3RhY2tlZFR5cGUnLCAoc2VyaWUgYXMgYW55KS5tdWx0aXBsZUJhclR5cGUpXG4gICAgICAgIHNlcmllID0gKHNlcmllIGFzIGFueSkud2l0aG91dCgnbXVsdGlwbGVCYXJUeXBlJylcbiAgICAgICAgcmV0dXJuIHNlcmllIGFzIHVua25vd24gYXMgV2ViQ2hhcnRTZXJpZXNcbiAgICAgIH0pXG4gICAgICBjb25zdCBuZXdDb25maWc6IElNQ29uZmlnID0gb2xkQ29uZmlnLnNldEluKFsnd2ViQ2hhcnQnLCAnc2VyaWVzJ10sIHNlcmllcylcbiAgICAgIHJldHVybiBuZXdDb25maWdcbiAgICB9XG4gIH0sIHtcbiAgICB2ZXJzaW9uOiAnMS43LjAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBgbnVtZXJpY0ZpZWxkYCBhcyB0aGUgYGlkYCBvZiBzZXJpZSwgYnVpbGQgdGhlIGBxdWVyeWAgaW4gdGhlIGBzZXJpZXNgIGFzIGEgZGF0YSBzb3VyY2UnLFxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnOiBJTUNvbmZpZykgPT4ge1xuICAgICAgaWYgKCFvbGRDb25maWcpIHJldHVybiBvbGRDb25maWdcbiAgICAgIGxldCBzZXJpZXMgPSBvbGRDb25maWcud2ViQ2hhcnQ/LnNlcmllc1xuICAgICAgaWYgKCFzZXJpZXM/Lmxlbmd0aCkgcmV0dXJuIG9sZENvbmZpZ1xuICAgICAgc2VyaWVzID0gc2V0U2VyaWVzSWRXaXRoTnVtZXJpY0ZpZWxkKHNlcmllcylcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYnVpbGRVbmlxdWVRdWVyeShzZXJpZXMpXG4gICAgICBzZXJpZXMgPSBzZXJpZXMubWFwKHNlcmllID0+IEltbXV0YWJsZS53aXRob3V0KHNlcmllLCAncXVlcnknKSkgYXMgdW5rbm93biBhcyBJbW11dGFibGVBcnJheTxXZWJDaGFydFNlcmllcz5cbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSB7IHF1ZXJ5IH1cbiAgICAgIGNvbnN0IG5ld0NvbmZpZzogSU1Db25maWcgPSBvbGRDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICdzZXJpZXMnXSwgc2VyaWVzKVxuICAgICAgICAuc2V0SW4oWyd3ZWJDaGFydCcsICdkYXRhU291cmNlJ10sIGRhdGFTb3VyY2UpXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXG4gICAgfVxuICB9LCB7XG4gICAgdmVyc2lvbjogJzEuOC4wJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XG4gICAgICByZXR1cm4gb2xkQ29uZmlnXG4gICAgfVxuICB9LCB7XG4gICAgdmVyc2lvbjogJzEuOS4wJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgdXBncmFkZXI6IChvbGRDb25maWc6IElNQ29uZmlnKSA9PiB7XG4gICAgICByZXR1cm4gb2xkQ29uZmlnXG4gICAgfVxuICB9LCB7XG4gICAgdmVyc2lvbjogJzEuMTAuMCcsXG4gICAgZGVzY3JpcHRpb246ICdVcGdyYWRlIGBjb25maWcuY29sb3JNYXRjaGAgdG8gYHNlcmllc1swXS5zbGljZXNgIGZvciBwaWUgY2hhcnQuJyxcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZzogSU1Db25maWcpID0+IHtcbiAgICAgIGxldCBuZXdDb25maWcgPSB1cGdyYWRlQ29sb3JNYXRjaChvbGRDb25maWcpXG4gICAgICBuZXdDb25maWcgPSB1cGdyYWRlQnlGaWVsZChuZXdDb25maWcpXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXG4gICAgfVxuICB9LCB7XG4gICAgdmVyc2lvbjogJzEuMTEuMCcsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnKSA9PiB7XG4gICAgICByZXR1cm4gb2xkQ29uZmlnXG4gICAgfVxuICB9LCB7XG4gICAgdmVyc2lvbjogJzEuMTIuMCcsXG4gICAgZGVzY3JpcHRpb246ICdVcGdyYWRlIHdlYi1jaGFydCB2ZXJzaW9uIGFuZCB1cGdyYWRlIHRoZSBudW1lcmljIHR5cGUgaW4gdGhlIHNsaWNlIGlkIG9mIHRoZSBwaWUgY2hhcnQgdG8gYSBzdHJpbmcgdHlwZSwgZmVhdHVyZSBsYXllciBkYXRhIHNvdXJjZSBvbmx5IHN1cHBvcnRzIHRoZSBsYXR0ZXIuJyxcbiAgICB1cGdyYWRlcjogKG9sZENvbmZpZzogSU1Db25maWcpID0+IHtcbiAgICAgIGlmICghb2xkQ29uZmlnIHx8ICFvbGRDb25maWcud2ViQ2hhcnQpIHJldHVybiBvbGRDb25maWdcbiAgICAgIC8vdXBncmFkZSB0byB3ZWItY2hhcnQgdmVyc2lvbiA2LjIuMVxuICAgICAgbGV0IG5ld0NvbmZpZzogSU1Db25maWcgPSBvbGRDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICd2ZXJzaW9uJ10sICc2LjIuMScpXG4gICAgICAvL21vdmUgc2VyaWVzIHJvdGF0ZWQgdG8gd2ViLWNoYXJ0IGxldmVsXG4gICAgICBjb25zdCB3ZWJDaGFydCA9IG1vdmVTZXJpZXNSb3RhdGVkUHJvcFRvQ2hhcnQobmV3Q29uZmlnLndlYkNoYXJ0KVxuICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldCgnd2ViQ2hhcnQnLCB3ZWJDaGFydClcblxuICAgICAgY29uc3Qgc2VyaWVzID0gbmV3Q29uZmlnLndlYkNoYXJ0Py5zZXJpZXNcbiAgICAgIGlmICghc2VyaWVzPy5sZW5ndGgpIHJldHVybiBuZXdDb25maWdcbiAgICAgIGNvbnN0IHNlcmllc1R5cGUgPSBnZXRTZXJpZXNUeXBlKHNlcmllcyBhcyBhbnkpXG4gICAgICBpZiAoc2VyaWVzVHlwZSAhPT0gJ3BpZVNlcmllcycpIHJldHVybiBuZXdDb25maWdcblxuICAgICAgLy91cGdyYWRlIHNsaWNlR3JvdXBpbmcgb2YgcGllIHNlcmllc1xuICAgICAgbGV0IHNlcmllID0gc2VyaWVzWzBdIGFzIEltbXV0YWJsZU9iamVjdDxXZWJDaGFydFBpZUNoYXJ0U2VyaWVzPlxuICAgICAgbGV0IHNsaWNlR3JvdXBpbmcgPSBzZXJpZS5zbGljZUdyb3VwaW5nXG4gICAgICBzbGljZUdyb3VwaW5nID0gc2xpY2VHcm91cGluZy5zZXQoJ3NsaWNlSWQnLCBQaWVTbGljZUdyb3VwaW5nU2xpY2VJZCkuc2V0KCdsYWJlbCcsIChzbGljZUdyb3VwaW5nIGFzIGFueSkuZ3JvdXBOYW1lKVxuICAgICAgc2xpY2VHcm91cGluZyA9IChzbGljZUdyb3VwaW5nIGFzIGFueSkud2l0aG91dCgnZ3JvdXBOYW1lJylcbiAgICAgIHNlcmllID0gc2VyaWUuc2V0KCdzbGljZUdyb3VwaW5nJywgc2xpY2VHcm91cGluZylcblxuICAgICAgLy91cGdyYWRlIHRoZSBzbGljZUlkIG9mIHBpZSBzbGljZXMgZnJvbSBudW1lcmljIHR5cGUgdG8gc3RyaW5nIHR5cGVcbiAgICAgIGNvbnN0IHBpZVNsaWNlcyA9IHNlcmllLnNsaWNlc1xuICAgICAgaWYgKHBpZVNsaWNlcz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHNsaWNlcyA9IHBpZVNsaWNlcy5tYXAoKHNsaWNlKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzbGljZS5zbGljZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgc2xpY2UgPSBzbGljZS5zZXQoJ3NsaWNlSWQnLCBzbGljZS5zbGljZUlkICsgJycpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzbGljZVxuICAgICAgICB9KVxuICAgICAgICBzZXJpZSA9IHNlcmllLnNldCgnc2xpY2VzJywgc2xpY2VzKVxuICAgICAgfVxuXG4gICAgICAvLyBgc2VyaWVzLnNsaWNlc2AgY2FuIGN1c3RvbWl6ZSB0aGUgY29sb3Igb2YgZWFjaCBwaWUgc2xpY2VcbiAgICAgIC8vIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gc2V0IHRoZSBgY29sb3JUeXBlYCB0byBgY29sb3JNYXRjaGAsIGl0IHdpbGwgcmVhZCB0aGUgbGF5ZXIgcmVuZGVyaW5nIGNvbG9yIGFuZCBjYXVzZSB1bmV4cGVjdGVkIGNoYW5nZXNcbiAgICAgIGlmIChzZXJpZS5jb2xvclR5cGUgPT09ICdjb2xvck1hdGNoJykge1xuICAgICAgICBzZXJpZSA9IHNlcmllLnNldCgnY29sb3JUeXBlJywgJ3NpbmdsZUNvbG9yJylcbiAgICAgIH1cblxuICAgICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnd2ViQ2hhcnQnLCAnc2VyaWVzJywgJzAnXSwgc2VyaWUpXG4gICAgICByZXR1cm4gbmV3Q29uZmlnXG4gICAgfVxuICB9LCB7XG4gICAgdmVyc2lvbjogJzEuMTMuMCcsXG4gICAgZGVzY3JpcHRpb246ICdVcGdyYWRlIHNlcmllcyBkYXRhVG9vbHRpcFZpc2libGUgdG8gdHJ1ZSwgc29ydExhYmVsc0J5IHRvIG9yaWdpbmFsVmFsdWUsIHN1cHBvcnQgbWF4LWxlbmd0aCBmb3IgdGhlIGxhYmVsIG9mIHBpZSBsZWdlbmQnLFxuICAgIHVwZ3JhZGVyOiAob2xkQ29uZmlnOiBJTUNvbmZpZykgPT4ge1xuICAgICAgaWYgKCFvbGRDb25maWcpIHJldHVybiBvbGRDb25maWdcbiAgICAgIGxldCBzZXJpZXMgPSBvbGRDb25maWcud2ViQ2hhcnQ/LnNlcmllc1xuICAgICAgaWYgKCFzZXJpZXM/Lmxlbmd0aCkgcmV0dXJuIG9sZENvbmZpZ1xuICAgICAgc2VyaWVzID0gc2VyaWVzLm1hcCgoc2VyaWUpID0+IHtcbiAgICAgICAgc2VyaWUgPSBzZXJpZS5zZXQoJ2RhdGFUb29sdGlwVmlzaWJsZScsIHRydWUpXG4gICAgICAgIHJldHVybiBzZXJpZSBhcyB1bmtub3duIGFzIFdlYkNoYXJ0U2VyaWVzXG4gICAgICB9KVxuICAgICAgbGV0IG5ld0NvbmZpZzogSU1Db25maWcgPSBvbGRDb25maWcuc2V0SW4oWyd3ZWJDaGFydCcsICdzZXJpZXMnXSwgc2VyaWVzKS5zZXRJbihbJ3dlYkNoYXJ0JywgJ3NvcnRMYWJlbHNCeSddLCAnb3JpZ2luYWxWYWx1ZScpXG4gICAgICBjb25zdCBzZXJpZXNUeXBlID0gZ2V0U2VyaWVzVHlwZShzZXJpZXMgYXMgYW55KVxuICAgICAgaWYgKHNlcmllc1R5cGUgPT09ICdwaWVTZXJpZXMnICYmIG5ld0NvbmZpZy53ZWJDaGFydC5sZWdlbmQpIHtcbiAgICAgICAgbGV0IGxlZ2VuZDogSW1tdXRhYmxlT2JqZWN0PFdlYkNoYXJ0UGllQ2hhcnRMZWdlbmQ+ID0gbmV3Q29uZmlnLndlYkNoYXJ0LmxlZ2VuZFxuICAgICAgICBsZWdlbmQgPSBsZWdlbmQuc2V0KCdsYWJlbE1heFdpZHRoJywgRGVmYXVsdFBpZUxlZ2VuZExhYmVsTWF4V2lkdGgpXG4gICAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXRJbihbJ3dlYkNoYXJ0JywgJ2xlZ2VuZCddLCBsZWdlbmQpXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3Q29uZmlnXG4gICAgfVxuICB9XVxufVxuXG5leHBvcnQgY29uc3QgdmVyc2lvbk1hbmFnZXIgPSBuZXcgVmVyc2lvbk1hbmFnZXIoKVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci90cmFzaC1jaGVjay5zdmcnXG5cbmV4cG9ydCBjb25zdCBUcmFzaENoZWNrT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci96b29tLWluLnN2ZydcblxuZXhwb3J0IGNvbnN0IFpvb21Jbk91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9naXMvc2VsZWN0LXJlY3RhbmdsZS5zdmcnXG5cbmV4cG9ydCBjb25zdCBTZWxlY3RSZWN0YW5nbGVPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2NoYXJ0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cbiAqICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vIEB0cy1pZ25vcmVcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxuIiwiaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgdmVyc2lvbk1hbmFnZXIgfSBmcm9tICcuLi92ZXJzaW9uLW1hbmFnZXInXG5pbXBvcnQgeyBDaGFydFJ1bnRpbWVTdGF0ZVByb3ZpZGVyIH0gZnJvbSAnLi9zdGF0ZSdcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0J1xuXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgb3V0cHV0RGF0YVNvdXJjZXMsIHVzZURhdGFTb3VyY2VzLCBjb25maWcsIGlkLCBlbmFibGVEYXRhQWN0aW9uLCBvbkluaXREcmFnSGFuZGxlciB9ID0gcHJvcHNcblxuICBjb25zdCB3ZWJDaGFydCA9IGNvbmZpZz8ud2ViQ2hhcnRcbiAgY29uc3QgdG9vbHMgPSBjb25maWc/LnRvb2xzXG4gIGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVR5cGUgPSBjb25maWc/Ll90ZW1wbGF0ZVR5cGVcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdqaW11LXdpZGdldCB3aWRnZXQtY2hhcnQnPlxuICAgICAgPENoYXJ0UnVudGltZVN0YXRlUHJvdmlkZXI+XG4gICAgICAgIDxDaGFydFxuICAgICAgICAgIHdpZGdldElkPXtpZH1cbiAgICAgICAgICB0b29scz17dG9vbHN9XG4gICAgICAgICAgd2ViQ2hhcnQ9e3dlYkNoYXJ0fVxuICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgICAgZW5hYmxlRGF0YUFjdGlvbj17ZW5hYmxlRGF0YUFjdGlvbn1cbiAgICAgICAgICBvbkluaXREcmFnSGFuZGxlcj17b25Jbml0RHJhZ0hhbmRsZXJ9XG4gICAgICAgICAgZGVmYXVsdFRlbXBsYXRlVHlwZT17ZGVmYXVsdFRlbXBsYXRlVHlwZX1cbiAgICAgICAgICBvdXRwdXREYXRhU291cmNlSWQ9e291dHB1dERhdGFTb3VyY2VzPy5bMF19XG4gICAgICAgIC8+XG4gICAgICA8L0NoYXJ0UnVudGltZVN0YXRlUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuV2lkZ2V0LnZlcnNpb25NYW5hZ2VyID0gdmVyc2lvbk1hbmFnZXJcblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9