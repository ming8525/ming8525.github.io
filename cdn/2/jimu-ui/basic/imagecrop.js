System.register(["jimu-core","jimu-for-builder","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
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

/***/ "./jimu-icons/svg/outlined/application/check.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/check.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z\"></path></svg>"

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

/***/ "./jimu-ui/basic/lib/imagecrop/imagecrop.tsx":
/*!***************************************************!*\
  !*** ./jimu-ui/basic/lib/imagecrop/imagecrop.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropType: () => (/* reexport safe */ jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType),
/* harmony export */   ImageCrop: () => (/* binding */ ImageCrop)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _lib_cropper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/cropper */ "./jimu-ui/basic/lib/imagecrop/lib/cropper.tsx");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/utils */ "./jimu-ui/basic/lib/imagecrop/lib/utils.ts");
/** @jsx jsx */





const FakeCropImageFormats = ['image/gif', 'image/svg+xml'];
class ImageCrop extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Component {
    constructor(props) {
        super(props);
        this.eidtInfoStyle = { width: '100%', height: '100%', margin: 0 };
        this.onCropChange = crop => {
            this.setState({ crop });
        };
        this.onCropAreaComplete = (croppedArea, croppedAreaPixels) => {
            this.setState({ croppedAreaPixels });
        };
        this.onZoomChange = zoom => {
            this.setState({ zoom });
        };
        this.onConfirmCrop = (svgViewBox, svgPath, cropShape) => {
            if (FakeCropImageFormats.includes(this.props.imageFormat) || this.props.cropType === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Fake) {
                const cropedInfo = {
                    cropPosition: this.state.crop,
                    cropZoom: this.state.zoom,
                    svgViewBox: svgViewBox || '0 0 28 28',
                    svgPath: svgPath || 'm0,0l0,28l28,0l0,-28l-28,0z',
                    cropShape: cropShape || 'rectangle',
                    cropPixel: this.state.croppedAreaPixels,
                    cropType: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Fake
                };
                this.props.onConfirmCrop && this.props.onConfirmCrop(cropedInfo);
            }
            else {
                const cropedInfo = {
                    cropPosition: this.state.crop,
                    cropZoom: this.state.zoom,
                    svgViewBox: svgViewBox,
                    svgPath: svgPath,
                    cropShape: cropShape,
                    cropPixel: this.state.croppedAreaPixels,
                    cropType: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Real
                };
                this.setState({
                    loading: true
                });
                (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.getCroppedImgBlobUrl)(this.props.image, cropedInfo.cropPixel, this.props.originId).then(imageResourceItemInfo => {
                    this.setState({
                        loading: false
                    });
                    this.props.onConfirmCrop && this.props.onConfirmCrop(cropedInfo, imageResourceItemInfo);
                }, () => {
                    this.setState({
                        loading: false
                    });
                });
            }
        };
        this.state = {
            modal: true,
            crop: this.props.crop ? this.props.crop : { x: 0, y: 0 },
            zoom: this.props.cropZoom ? this.props.cropZoom : 1,
            aspect: 1,
            showGrid: false,
            zoomSpeed: 0.1,
            croppedAreaPixels: null,
            loading: false
        };
    }
    render() {
        const isBuilder = window.jimuConfig.isBuilder;
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactDOM.createPortal((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget', style: { zIndex: 9999, position: 'fixed', top: 0, left: 0, backgroundColor: 'rgb(0, 0, 0, .5)' } }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { zIndex: 10000, position: 'absolute', top: 0 }, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)({ 'jimu-widget d-flex justify-content-center align-items-center': isBuilder }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_cropper__WEBPACK_IMPORTED_MODULE_1__.Cropper, { image: this.props.image, crop: this.state.crop, zoom: this.state.zoom, aspect: this.state.aspect, showGrid: this.state.showGrid, zoomSpeed: this.state.zoomSpeed, onCropChange: this.onCropChange, onCropComplete: this.onCropAreaComplete, onZoomChange: this.onZoomChange, onCancelCrop: this.props.onCancelCrop, onConfirmCrop: this.onConfirmCrop, widgetArea: this.props.widgetArea, widgetId: this.props.widgetId, svgViewBox: this.props.cropParam && this.props.cropParam.svgViewBox, svgPath: this.props.cropParam && this.props.cropParam.svgPath, cropShape: this.props.cropParam && this.props.cropParam.cropShape, loading: this.state.loading }))), document && document.getElementsByTagName('body')[0]);
    }
}


/***/ }),

/***/ "./jimu-ui/basic/lib/imagecrop/index.tsx":
/*!***********************************************!*\
  !*** ./jimu-ui/basic/lib/imagecrop/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropType: () => (/* reexport safe */ _imagecrop__WEBPACK_IMPORTED_MODULE_0__.CropType),
/* harmony export */   ImageCrop: () => (/* reexport safe */ _imagecrop__WEBPACK_IMPORTED_MODULE_0__.ImageCrop)
/* harmony export */ });
/* harmony import */ var _imagecrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagecrop */ "./jimu-ui/basic/lib/imagecrop/imagecrop.tsx");



/***/ }),

/***/ "./jimu-ui/basic/lib/imagecrop/lib/croparea.tsx":
/*!******************************************************!*\
  !*** ./jimu-ui/basic/lib/imagecrop/lib/croparea.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropArea: () => (/* binding */ CropArea)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/application/check */ "./jimu-icons/outlined/application/check.tsx");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* eslint-disable prefer-const */



class CropArea extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Component {
    render() {
        let { showGrid, style, className } = this.props;
        if (!className) {
            className = '';
        }
        const cropWindowWidth = style.width;
        const toolBarStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            minWidth: '75px',
            paddingBottom: '5px',
            left: '-1px',
            paddingTop: '5px',
            position: 'absolute',
            top: '-40px',
            height: '40px',
            width: `${Math.min(this.props.screenWidth, cropWindowWidth)}px`,
            boxShadow: '0 2px 8px 1px rgba(0,0,0,0.20)',
            backgroundColor: '#fff',
            borderRadius: '2px',
            cursor: 'default'
        };
        if (this.props.widgetArea.top - 40 < 0) {
            toolBarStyle.top = `${this.props.widgetArea.height}px`;
        }
        const toolContent = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onMouseDown: (e) => { e.stopPropagation(); }, style: toolBarStyle },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'tool-item mr-1', style: { float: 'right', padding: '0.42rem 0.5rem' }, onClick: () => {
                    this.props.onConfirmCrop && this.props.onConfirmCrop(this.props.svgViewBox, this.props.svgPath, this.props.cropShape);
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_1__.CheckOutlined, { className: 'mr-0' })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'tool-item mr-1', style: { float: 'right', padding: '0.42rem 0.5rem', marginLeft: '0.1rem' }, onClick: () => { this.props.onCancelCrop && this.props.onCancelCrop(); } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, { size: 13, className: 'mr-0' }))));
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: style, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('cropperArea ' + className, { gridLines: showGrid }) },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", { width: '100%', height: '100%', viewBox: this.props.svgViewBox ? this.props.svgViewBox : '0 0 28 28', preserveAspectRatio: 'none' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("defs", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("mask", { id: `mask-setting-${this.props.widgetId}`, maskContentUnits: 'userSpaceOnUse' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("rect", { x: '0', y: '0', width: '100%', height: '100%', stroke: 'none', fill: 'rgb(255, 255, 255, 1)' }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", { width: '100%', height: '100%', viewBox: this.props.svgViewBox ? this.props.svgViewBox : '0 0 28 28', preserveAspectRatio: 'none' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { strokeWidth: '2', strokeDasharray: '10', strokeDashoffset: '0', fill: '#000', d: this.props.svgPath ? this.props.svgPath : 'm0,0l0,28l28,0l0,-28l-28,0z' }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("rect", { x: '0', y: '0', width: '100%', height: '100%', className: 'mask-image', style: { stroke: 'none', fill: 'rgb(0, 0, 0, 0.7)' } }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", { stroke: '#fff', strokeWidth: '.1', fill: 'none', strokeDashoffset: '0', d: this.props.svgPath ? this.props.svgPath : 'm0,0l0,28l28,0l0,-28l-28,0z' }))),
            toolContent));
    }
}


/***/ }),

/***/ "./jimu-ui/basic/lib/imagecrop/lib/cropper.tsx":
/*!*****************************************************!*\
  !*** ./jimu-ui/basic/lib/imagecrop/lib/cropper.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cropper: () => (/* binding */ Cropper)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _croparea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./croparea */ "./jimu-ui/basic/lib/imagecrop/lib/croparea.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./jimu-ui/basic/lib/imagecrop/lib/utils.ts");
/** @jsx jsx */
/* eslint-disable camelcase */



const MIN_ZOOM = 1;
const MAX_ZOOM = 10;
class Cropper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Component {
    constructor(props) {
        super(props);
        this.image = null;
        this.container = null;
        this.containerRect = {};
        this.imageSize = { width: 0, height: 0, naturalWidth: 0, naturalHeight: 0 };
        this.dragStartPosition = { x: 0, y: 0 };
        this.dragStartCrop = { x: 0, y: 0 };
        this.lastPinchDistance = 0;
        this.rafDragTimeout = null;
        this.rafZoomTimeout = null;
        this.screenWidth = document ? document.documentElement.clientWidth : null;
        this.screenHeight = document ? document.documentElement.clientHeight : null;
        this.getStyle = () => {
            const baseUrl = window.location.origin + window.location.pathname;
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .cropperArea {
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-sizing: border-box;
        box-shadow: 0 0 0 9999em;
        color: rgba(0,0,0,0.5);

        .tool-item {
          background-color: #EEF0F3;
          cursor: pointer;

          &:hover {
            background-color: #c8cbcd;
            cursor: pointer;
          }
        }
      }

      .gridLines {
        &::before {
          content: " ";
          box-sizing: border-box;
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.5);
          top: 0;
          bottom: 0;
          left: 33.33%;
          right: 33.33%;
          border-top: 0;
          border-bottom: 0;
        }

        &::after {
          content: " ";
          box-sizing: border-box;
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.5);
          top: 33.33%;
          bottom: 33.33%;
          left: 0;
          right: 0;
          border-left: 0;
          border-right: 0;
        }
      }

      .roundShape {
        border-radius: 50%
      }

      .mask-border {
        path {
          transition:all 1s linear;
          animation-name:ring;
          animation-duration:9.2s;
          animation-timing-function: linear;
          animation-iteration-count:infinite;
        }

        @keyframes ring {
            from {
                stroke-dashoffset:0;
            }
            to {
                stroke-dashoffset:6000;
            }
        }
      }

      .mask-image {
        -webkit-mask-image: url(${baseUrl}#mask-setting-${this.props.widgetId});
        mask: url(${baseUrl}#mask-setting-${this.props.widgetId});
        mask-image: url(${baseUrl}#mask-setting-${this.props.widgetId});
      }
    `;
        };
        // this is to prevent Safari on iOS >= 10 to zoom the page
        this.preventZoomSafari = e => e.preventDefault();
        this.cleanEvents = () => {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onDragStopped);
            document.removeEventListener('touchmove', this.onTouchMove);
            document.removeEventListener('touchend', this.onDragStopped);
        };
        this.onImgLoad = () => {
            this.computeSizes();
            this.emitCropData();
        };
        this.computeSizes = () => {
            if (this.image) {
                this.imageSize = {
                    width: this.image.width,
                    height: this.image.height,
                    naturalWidth: this.image.naturalWidth,
                    naturalHeight: this.image.naturalHeight
                };
                // eslint-disable-next-line
                const cropSize_width = this.props.widgetArea.width;
                // eslint-disable-next-line
                const cropSize_height = this.props.widgetArea.height;
                let minZoom = this.state.minZoom;
                let maxZoom = this.state.maxZoom;
                if ((this.image.width / this.image.height) >= (cropSize_width / cropSize_height)) {
                    minZoom = cropSize_height / this.image.height;
                    maxZoom = minZoom + 5;
                }
                else {
                    minZoom = cropSize_width / this.image.width;
                    maxZoom = minZoom + 5;
                }
                if (minZoom > this.props.zoom) {
                    this.props.onZoomChange && this.props.onZoomChange(minZoom);
                }
                const cropSize = {
                    width: cropSize_width,
                    height: cropSize_height
                };
                this.setState({
                    cropSize: cropSize,
                    minZoom: minZoom,
                    maxZoom: maxZoom
                }, this.recomputeCropPosition);
            }
            if (this.container) {
                this.containerRect = this.container.getBoundingClientRect();
            }
        };
        this.onMouseDown = e => {
            e.preventDefault();
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onDragStopped);
            this.onDragStart(Cropper.getMousePoint(e));
        };
        this.onMouseMove = e => { this.onDrag(Cropper.getMousePoint(e)); };
        this.onTouchStart = e => {
            e.preventDefault();
            document.addEventListener('touchmove', this.onTouchMove, { passive: false }); // iOS 11 now defaults to passive: true
            document.addEventListener('touchend', this.onDragStopped);
            if (e.touches.length === 2) {
                this.onPinchStart(e);
            }
            else if (e.touches.length === 1) {
                this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
            }
        };
        this.onTouchMove = e => {
            if (e.touches.length === 2) {
                this.onPinchMove(e);
            }
            else if (e.touches.length === 1) {
                this.onDrag(Cropper.getTouchPoint(e.touches[0]));
            }
        };
        this.onDragStart = ({ x, y }) => {
            this.dragStartPosition = { x, y };
            this.dragStartCrop = { x: this.props.crop.x, y: this.props.crop.y };
        };
        this.onDrag = ({ x, y }) => {
            if (this.rafDragTimeout)
                window.cancelAnimationFrame(this.rafDragTimeout);
            this.rafDragTimeout = window.requestAnimationFrame(() => {
                if (x === undefined || y === undefined)
                    return;
                const offsetX = x - this.dragStartPosition.x;
                const offsetY = y - this.dragStartPosition.y;
                const requestedPosition = {
                    x: this.dragStartCrop.x + offsetX,
                    y: this.dragStartCrop.y + offsetY
                };
                const newPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.restrictPosition)(requestedPosition, this.imageSize, this.state.cropSize, this.props.zoom);
                this.props.onCropChange(newPosition);
            });
        };
        this.onDragStopped = () => {
            this.cleanEvents();
            this.emitCropData();
        };
        this.onWheel = (e) => {
            e.preventDefault();
            const point = Cropper.getMousePoint(e);
            let newZoom = null;
            const relatePathRate = 0.05;
            if (e.deltaY <= 0) {
                newZoom = (1 + relatePathRate) * this.props.zoom;
            }
            else {
                newZoom = (1 - relatePathRate) * this.props.zoom;
            }
            this.setNewZoom(newZoom, point);
        };
        this.getPointOnContainer = ({ x, y }, zoom) => {
            if (!this.containerRect) {
                throw new Error('The Cropper is not mounted');
            }
            return {
                x: this.containerRect.width / 2 - (x - this.containerRect.left),
                y: this.containerRect.height / 2 - (y - this.containerRect.top)
            };
        };
        this.getPointOnImage = ({ x, y }) => {
            const { crop, zoom } = this.props;
            return {
                x: (x + crop.x) / zoom,
                y: (y + crop.y) / zoom
            };
        };
        this.setNewZoom = (zoom, point) => {
            const zoomPoint = this.getPointOnContainer(point);
            const zoomTarget = this.getPointOnImage(zoomPoint);
            const newZoom = Math.min(this.state.maxZoom, Math.max(zoom, this.state.minZoom));
            const requestedPosition = {
                x: zoomTarget.x * newZoom - zoomPoint.x,
                y: zoomTarget.y * newZoom - zoomPoint.y
            };
            const newPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.restrictPosition)(requestedPosition, this.imageSize, this.state.cropSize, newZoom);
            this.props.onCropChange(newPosition);
            this.props.onZoomChange && this.props.onZoomChange(newZoom);
        };
        this.emitCropData = () => {
            if (!this.state.cropSize)
                return;
            // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)
            const restrictedPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.restrictPosition)(this.props.crop, this.imageSize, this.state.cropSize, this.props.zoom);
            const { croppedAreaPercentages, croppedAreaPixels } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.computeCroppedArea)(restrictedPosition, this.imageSize, this.state.cropSize, this.props.zoom);
            this.props.onCropComplete &&
                this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
        };
        this.recomputeCropPosition = () => {
            const newPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.restrictPosition)(this.props.crop, this.imageSize, this.state.cropSize, this.props.zoom);
            this.props.onCropChange(newPosition);
            this.emitCropData();
        };
        this.onImgError = () => {
            const cropSize = {
                width: this.props.widgetArea.width,
                height: this.props.widgetArea.height
            };
            this.setState({
                cropSize: cropSize
            });
        };
        this.onResize = (width, height) => {
            this.screenWidth = width;
            this.screenHeight = height;
        };
        this.state = {
            cropSize: null,
            minZoom: this.props.minZoom,
            maxZoom: this.props.maxZoom
        };
    }
    componentDidMount() {
        window.addEventListener('resize', this.computeSizes);
        this.container.addEventListener('gesturestart', this.preventZoomSafari);
        this.container.addEventListener('gesturechange', this.preventZoomSafari);
        this.container.addEventListener('wheel', this.onWheel);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.computeSizes);
        this.container.removeEventListener('gesturestart', this.preventZoomSafari);
        this.container.removeEventListener('gesturechange', this.preventZoomSafari);
        this.container.removeEventListener('wheel', this.onWheel);
        this.cleanEvents();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.aspect !== this.props.aspect) {
            this.computeSizes();
        }
        else if (prevProps.zoom !== this.props.zoom) {
            this.recomputeCropPosition();
        }
    }
    onPinchStart(e) {
        const pointA = Cropper.getTouchPoint(e.touches[0]);
        const pointB = Cropper.getTouchPoint(e.touches[1]);
        this.lastPinchDistance = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDistanceBetweenPoints)(pointA, pointB);
        this.onDragStart((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCenter)(pointA, pointB));
    }
    onPinchMove(e) {
        const pointA = Cropper.getTouchPoint(e.touches[0]);
        const pointB = Cropper.getTouchPoint(e.touches[1]);
        const center = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCenter)(pointA, pointB);
        this.onDrag(center);
        if (this.rafZoomTimeout)
            window.cancelAnimationFrame(this.rafZoomTimeout);
        this.rafZoomTimeout = window.requestAnimationFrame(() => {
            const distance = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDistanceBetweenPoints)(pointA, pointB);
            const newZoom = this.props.zoom * (distance / this.lastPinchDistance);
            this.setNewZoom(newZoom, center);
            this.lastPinchDistance = distance;
        });
    }
    render() {
        const isRTL = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appContext.isRTL;
        const { crop: { x, y }, zoom, showGrid, 
        // eslint-disable-next-line
        style: {}, classes: { containerClassName, cropAreaClassName, imageClassName } } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle, onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, "data-testid": 'container', className: containerClassName, style: {
                userSelect: 'none',
                touchAction: 'none',
                cursor: 'move',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: this.props.widgetArea.top,
                left: isRTL ? null : this.props.widgetArea.left,
                right: isRTL ? (document.body.clientWidth - this.props.widgetArea.right) : null,
                width: this.props.widgetArea.width,
                height: this.props.widgetArea.height
            }, ref: (dom) => { this.container = dom; } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleWidth: true, handleHeight: true, onResize: this.onResize }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: this.props.image, ref: (dom) => { this.image = dom; }, onLoad: this.onImgLoad, onError: this.onImgError, alt: '', style: {
                    position: 'absolute',
                    transform: `translate(${x}px, ${y}px) scale(${zoom})`,
                    willChange: 'transform'
                }, className: imageClassName }),
            this.state.cropSize && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_croparea__WEBPACK_IMPORTED_MODULE_1__.CropArea, { onCancelCrop: this.props.onCancelCrop, onConfirmCrop: this.props.onConfirmCrop, showGrid: showGrid, style: {
                    width: this.state.cropSize.width,
                    height: this.state.cropSize.height
                }, className: cropAreaClassName, svgViewBox: this.props.svgViewBox, svgPath: this.props.svgPath, cropShape: this.props.cropShape, widgetId: this.props.widgetId, screenWidth: this.screenWidth, screenHeight: this.screenHeight, widgetArea: this.props.widgetArea })),
            this.props.loading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { position: 'absolute', left: '50%', top: '50%' }, className: 'jimu-secondary-loading' })));
    }
}
Cropper.defaultProps = {
    zoom: 1,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    showGrid: true,
    style: {},
    classes: {},
    zoomSpeed: 1
};
Cropper.getMousePoint = e => ({ x: Number(e.clientX), y: Number(e.clientY) });
Cropper.getTouchPoint = touch => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY)
});


/***/ }),

/***/ "./jimu-ui/basic/lib/imagecrop/lib/utils.ts":
/*!**************************************************!*\
  !*** ./jimu-ui/basic/lib/imagecrop/lib/utils.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeCroppedArea: () => (/* binding */ computeCroppedArea),
/* harmony export */   getCenter: () => (/* binding */ getCenter),
/* harmony export */   getCropSize: () => (/* binding */ getCropSize),
/* harmony export */   getCroppedImgBlobUrl: () => (/* binding */ getCroppedImgBlobUrl),
/* harmony export */   getDistanceBetweenPoints: () => (/* binding */ getDistanceBetweenPoints),
/* harmony export */   restrictPosition: () => (/* binding */ restrictPosition)
/* harmony export */ });
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Compute the dimension of the crop area based on image size and aspect ratio
 * @param {number} imgWidth width of the src image in pixels
 * @param {number} imgHeight height of the src image in pixels
 * @param {number} aspect aspect ratio of the crop
 */
function getCropSize(imgWidth, imgHeight, aspect) {
    if (imgWidth >= imgHeight * aspect) {
        return {
            width: imgHeight * aspect,
            height: imgHeight
        };
    }
    return {
        width: imgWidth,
        height: imgWidth / aspect
    };
}
/**
 * Ensure a new image position stays in the crop area.
 * @param {{x: number, y number}} position new x/y position requested for the image
 * @param {{width: number, height: number}} imageSize width/height of the src image
 * @param {{width: number, height: number}} cropSize width/height of the crop area
 * @param {number} zoom zoom value
 * @returns {{x: number, y number}}
 */
function restrictPosition(position, imageSize, cropSize, zoom) {
    return {
        x: restrictPositionCoord(position.x, imageSize.width, cropSize.width, zoom),
        y: restrictPositionCoord(position.y, imageSize.height, cropSize.height, zoom)
    };
}
function restrictPositionCoord(position, imageSize, cropSize, zoom) {
    const maxPosition = (imageSize * zoom) / 2 - cropSize / 2;
    return Math.min(maxPosition, Math.max(position, -maxPosition));
}
function getDistanceBetweenPoints(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
/**
 * Compute the output cropped area of the image in percentages and pixels.
 * x/y are the top-left coordinates on the src image
 * @param {{x: number, y number}} crop x/y position of the current center of the image
 * @param {{width: number, height: number, naturalWidth: number, naturelHeight: number}} imageSize width/height of the src image (default is size on the screen, natural is the original size)
 * @param {{width: number, height: number}} cropSize width/height of the crop area
 * @param {number} zoom zoom value
 */
function computeCroppedArea(crop, imgSize, cropSize, zoom) {
    const croppedAreaPercentages = {
        x: limitArea(100, (((imgSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / imgSize.width) * 100),
        y: limitArea(100, (((imgSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / imgSize.height) * 100),
        width: limitArea(100, ((cropSize.width / imgSize.width) * 100) / zoom),
        height: limitArea(100, ((cropSize.height / imgSize.height) * 100) / zoom)
    };
    const croppedAreaPixels = {
        x: limitArea(imgSize.naturalWidth, (croppedAreaPercentages.x * imgSize.naturalWidth) / 100),
        y: limitArea(imgSize.naturalHeight, (croppedAreaPercentages.y * imgSize.naturalHeight) / 100),
        width: limitArea(imgSize.naturalWidth, (croppedAreaPercentages.width * imgSize.naturalWidth) / 100),
        height: limitArea(imgSize.naturalHeight, (croppedAreaPercentages.height * imgSize.naturalHeight) / 100)
    };
    return { croppedAreaPercentages, croppedAreaPixels };
}
/**
 * Ensure the returned value is between 0 and max
 * @param {number} max
 * @param {number} value
 */
function limitArea(max, value) {
    return Math.min(max, Math.max(0, value));
}
/**
 * Return the point that is the center of point a and b
 * @param {{x: number, y: number}} a
 * @param {{x: number, y: number}} b
 */
function getCenter(a, b) {
    return {
        x: (b.x + a.x) / 2,
        y: (b.y + a.y) / 2
    };
}
function getCroppedImgBlobUrl(imageSrc, pixelCrop, originId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise(function (resolve, reject) {
            if (!HTMLCanvasElement.prototype.toBlob) {
                Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                    value: function (callback, type, quality) {
                        // eslint-disable-next-line
                        const canvas = this;
                        setTimeout(function () {
                            const binStr = atob(canvas.toDataURL(type, quality).split(',')[1]);
                            const len = binStr.length;
                            const arr = new Uint8Array(len);
                            for (let i = 0; i < len; i++) {
                                arr[i] = binStr.charCodeAt(i);
                            }
                            callback(new Blob([arr], { type: type || 'image/png' }));
                        });
                    }
                });
            }
            const image = new Image();
            image.setAttribute('crossOrigin', 'anonymous');
            image.src = imageSrc;
            image.addEventListener('load', () => {
                const canvas = document.createElement('canvas');
                canvas.width = pixelCrop.width;
                canvas.height = pixelCrop.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
                canvas.toBlob(function (blob) {
                    const objectURL = URL.createObjectURL(blob);
                    const resourceItemInfo = {
                        file: objectURL,
                        fileName: (new Date().getTime()).toString() + '.jpeg',
                        type: jimu_core__WEBPACK_IMPORTED_MODULE_1__.ResourceType.Image,
                        url: objectURL,
                        blobUrl: objectURL,
                        referedIds: [],
                        fileFormat: 'image/jpeg',
                        originId: originId
                    };
                    if (window.jimuConfig.isBuilder) {
                        const appResourceManager = jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.AppResourceManager.getInstance();
                        jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.AppResourceManager.getBlobByBlobUrl(resourceItemInfo.file).then((blob) => __awaiter(this, void 0, void 0, function* () {
                            resourceItemInfo.file = blob;
                            appResourceManager.upLoadAppResource(resourceItemInfo);
                            if (resourceItemInfo.originId) {
                                jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.AppResourceManager.getInstance().updateImageResourceItemInfo(resourceItemInfo);
                            }
                        }));
                        resolve(resourceItemInfo);
                    }
                    else {
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.moduleLoader.getJimuForBuilderModules().appBuilderSync.letBuilderAddResource(resourceItemInfo);
                        resolve(resourceItemInfo);
                    }
                }, 'image/jpeg', 0.8);
            });
            image.addEventListener('error', () => {
                reject();
            });
        });
    });
}


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

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
/*!*************************************!*\
  !*** ./jimu-ui/basic/imagecrop.tsx ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropType: () => (/* reexport safe */ _lib_imagecrop__WEBPACK_IMPORTED_MODULE_0__.CropType),
/* harmony export */   ImageCrop: () => (/* reexport safe */ _lib_imagecrop__WEBPACK_IMPORTED_MODULE_0__.ImageCrop)
/* harmony export */ });
/* harmony import */ var _lib_imagecrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/imagecrop */ "./jimu-ui/basic/lib/imagecrop/index.tsx");


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9iYXNpYy9pbWFnZWNyb3AuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFFYTtBQUVuRCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUN4RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztJQUN0QixNQUFNLEVBQUUsU0FBUyxLQUFnQixLQUFLLEVBQWhCLE1BQU0sVUFBSyxLQUFLLEVBQWhDLGFBQXdCLENBQVE7SUFFdEMsTUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLGtGQUFLLFNBQVMsRUFBRSxPQUFPLElBQU0sTUFBYSxFQUFJO0lBQy9ELE9BQU8sMkRBQUMsR0FBRyxrQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSw0RUFBRyxJQUFNLE1BQU0sRUFBSTtBQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYNEM7QUFFUTtBQUU5QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUN4RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztJQUN0QixNQUFNLEVBQUUsU0FBUyxLQUFnQixLQUFLLEVBQWhCLE1BQU0sVUFBSyxLQUFLLEVBQWhDLGFBQXdCLENBQVE7SUFFdEMsTUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLGtGQUFLLFNBQVMsRUFBRSxPQUFPLElBQU0sTUFBYSxFQUFJO0lBQy9ELE9BQU8sMkRBQUMsR0FBRyxrQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSx1RUFBRyxJQUFNLE1BQU0sRUFBSTtBQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRCxlQUFlO0FBQzZDO0FBQ3JCO0FBRUw7QUFDZ0I7QUE0QmY7QUFFbkMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7QUFFcEQsTUFBTSxTQUFVLFNBQVEsNENBQUssQ0FBQyxTQUF1QjtJQUcxRCxZQUFhLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUhkLGtCQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtRQWlCNUQsaUJBQVksR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVELHVCQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUVELGlCQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxrQkFBYSxHQUFHLENBQUMsVUFBa0IsRUFBRSxPQUFlLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDakUsSUFBSSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyw2Q0FBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuRyxNQUFNLFVBQVUsR0FBRztvQkFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDekIsVUFBVSxFQUFFLFVBQVUsSUFBSSxXQUFXO29CQUNyQyxPQUFPLEVBQUUsT0FBTyxJQUFJLDZCQUE2QjtvQkFDakQsU0FBUyxFQUFFLFNBQVMsSUFBSSxXQUFXO29CQUNuQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUI7b0JBQ3ZDLFFBQVEsRUFBRSw2Q0FBUSxDQUFDLElBQUk7aUJBQ1g7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQ2xFLENBQUM7aUJBQU0sQ0FBQztnQkFDTixNQUFNLFVBQVUsR0FBRztvQkFDakIsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDekIsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixTQUFTLEVBQUUsU0FBUztvQkFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCO29CQUN2QyxRQUFRLEVBQUUsNkNBQVEsQ0FBQyxJQUFJO2lCQUNYO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQztnQkFFRixnRUFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7b0JBQzdHLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ1osT0FBTyxFQUFFLEtBQUs7cUJBQ2YsQ0FBQztvQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3pGLENBQUMsRUFBRSxHQUFHLEVBQUU7b0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDWixPQUFPLEVBQUUsS0FBSztxQkFDZixDQUFDO2dCQUNKLENBQUMsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO1FBN0RDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3hELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxHQUFHO1lBQ2QsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixPQUFPLEVBQUUsS0FBSztTQUNOO0lBQ1osQ0FBQztJQXFERCxNQUFNO1FBQ0osTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTO1FBRTdDLE9BQU8sK0NBQVEsQ0FBQyxZQUFZLENBQUM7WUFBSyx3REFDaEMsU0FBUyxFQUFDLGFBQWEsRUFDdkIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsR0FFNUY7WUFDTix3REFBSyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxxREFBVSxDQUFDLEVBQUUsOERBQThELEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQy9KLCtDQUFDLGlEQUFPLElBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUNqQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ2pDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDN0IsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFDbkUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFDN0QsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDakUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUMzQixDQUNFLENBQ0EsRUFBRSxRQUFRLElBQUksUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekkwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzQixpQ0FBaUM7QUFDMEI7QUFDVTtBQUNMO0FBbUJ6RCxNQUFNLFFBQVMsU0FBUSw0Q0FBSyxDQUFDLFNBQXlCO0lBQzNELE1BQU07UUFDSixJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUMvQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDZixTQUFTLEdBQUcsRUFBRTtRQUNoQixDQUFDO1FBRUQsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFFbkMsTUFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsUUFBUTtZQUNwQixjQUFjLEVBQUUsVUFBVTtZQUMxQixRQUFRLEVBQUUsTUFBTTtZQUNoQixhQUFhLEVBQUUsS0FBSztZQUNwQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxPQUFPO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxJQUFJO1lBQy9ELFNBQVMsRUFBRSxnQ0FBZ0M7WUFDM0MsZUFBZSxFQUFFLE1BQU07WUFDdkIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsTUFBTSxFQUFFLFNBQVM7U0FDWDtRQUVSLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJO1FBQ3hELENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBRyxDQUNsQixvRUFBSyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVk7WUFDbkUsb0VBQ0UsU0FBUyxFQUFDLGdCQUFnQixFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFDN0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZILENBQUM7Z0JBRUQsMkRBQUMsZ0ZBQWEsSUFBQyxTQUFTLEVBQUMsTUFBTSxHQUFHLENBQzlCO1lBQ04sb0VBQ0UsU0FBUyxFQUFDLGdCQUFnQixFQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsRUFDckcsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUMsQ0FBQztnQkFFdkUsMkRBQUMsMkVBQWEsSUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxNQUFNLEdBQUcsQ0FDeEMsQ0FDRixDQUNQO1FBRUQsT0FBTyxDQUNMLG9FQUNFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHFEQUFVLENBQUMsY0FBYyxHQUFHLFNBQVMsRUFDNUQsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFFMUIsb0VBQUssS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNO2dCQUM5SDtvQkFDRSxxRUFBTSxFQUFFLEVBQUUsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUMsZ0JBQWdCO3dCQUNoRixxRUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLHVCQUF1QixHQUFHO3dCQUMxRixvRUFBSyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU07NEJBQzlIO2dDQUNFLHFFQUFNLFdBQVcsRUFBQyxHQUFHLEVBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyw2QkFBNkIsR0FBSSxDQUN4SixDQUNBLENBQ0QsQ0FDRjtnQkFDUCxxRUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsR0FBSTtnQkFFNUg7b0JBQ0UscUVBQU0sTUFBTSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixHQUFJLENBQ2xKLENBQ0E7WUFDTCxXQUFXLENBQ1IsQ0FDUDtJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHRCxlQUFlO0FBQ2YsOEJBQThCO0FBQytDO0FBQ3hDO0FBTXJCO0FBRWhCLE1BQU0sUUFBUSxHQUFHLENBQUM7QUFDbEIsTUFBTSxRQUFRLEdBQUcsRUFBRTtBQWlDWixNQUFNLE9BQVEsU0FBUSw0Q0FBSyxDQUFDLFNBQXVCO0lBYXhELFlBQWEsS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDO1FBYmQsVUFBSyxHQUFHLElBQUk7UUFDWixjQUFTLEdBQW1CLElBQUk7UUFDaEMsa0JBQWEsR0FBRyxFQUFTO1FBQ3pCLGNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUU7UUFDdEUsc0JBQWlCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDbEMsa0JBQWEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM5QixzQkFBaUIsR0FBRyxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsSUFBSTtRQUNyQixtQkFBYyxHQUFHLElBQUk7UUFDckIsZ0JBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3BFLGlCQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTtRQVl0RSxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRO1lBRWpFLE9BQU8sOENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQXVFb0IsT0FBTyxpQkFBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO29CQUN6RCxPQUFPLGlCQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7MEJBQ3JDLE9BQU8saUJBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7S0FFaEU7UUFDSCxDQUFDO1FBb0NELDBEQUEwRDtRQUMxRCxzQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7UUFFM0MsZ0JBQVcsR0FBRyxHQUFHLEVBQUU7WUFDakIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMzRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDM0QsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlELENBQUM7UUFFRCxjQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JCLENBQUM7UUFFRCxpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsU0FBUyxHQUFHO29CQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7b0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07b0JBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7b0JBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWE7aUJBQ3hDO2dCQUVELDJCQUEyQjtnQkFDM0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSztnQkFDbEQsMkJBQTJCO2dCQUMzQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNO2dCQUVwRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQztvQkFDakYsT0FBTyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07b0JBQzdDLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQztnQkFDdkIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO29CQUMzQyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELE1BQU0sUUFBUSxHQUFHO29CQUNmLEtBQUssRUFBRSxjQUFjO29CQUNyQixNQUFNLEVBQUUsZUFBZTtpQkFDeEI7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxPQUFPO2lCQUNqQixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRTtZQUM3RCxDQUFDO1FBQ0gsQ0FBQztRQVNELGdCQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNsQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDeEQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBRUQsZ0JBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFFNUQsaUJBQVksR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNqQixDQUFDLENBQUMsY0FBYyxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLHVDQUF1QztZQUNwSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDekQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQztpQkFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7UUFDSCxDQUFDO1FBRUQsZ0JBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDO2lCQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUM7UUFFRCxnQkFBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDckUsQ0FBQztRQUVELFdBQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxJQUFJLENBQUMsY0FBYztnQkFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUV6RSxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLEtBQUssU0FBUztvQkFBRSxPQUFNO2dCQUM5QyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzVDLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxpQkFBaUIsR0FBRztvQkFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLE9BQU87b0JBQ2pDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxPQUFPO2lCQUNsQztnQkFFRCxNQUFNLFdBQVcsR0FBRyx3REFBZ0IsQ0FDbEMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7WUFDdEMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUVELGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNyQixDQUFDO1FBd0JELFlBQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2QsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUVsQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJO1lBQ2xCLE1BQU0sY0FBYyxHQUFHLElBQUk7WUFDM0IsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNsQixPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ2xELENBQUM7aUJBQU0sQ0FBQztnQkFDTixPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ2xELENBQUM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDakMsQ0FBQztRQUVELHdCQUFtQixHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBVSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztZQUMvQyxDQUFDO1lBQ0QsT0FBTztnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUMvRCxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQztRQUVELG9CQUFlLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDakMsT0FBTztnQkFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7Z0JBQ3RCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTthQUN2QjtRQUNILENBQUM7UUFFRCxlQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUNsRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEYsTUFBTSxpQkFBaUIsR0FBRztnQkFDeEIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDeEM7WUFDRCxNQUFNLFdBQVcsR0FBRyx3REFBZ0IsQ0FDbEMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLE9BQU8sQ0FDUjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUVwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDN0QsQ0FBQztRQUVELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQUUsT0FBTTtZQUNoQyxnSUFBZ0k7WUFDaEksTUFBTSxrQkFBa0IsR0FBRyx3REFBZ0IsQ0FDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ2YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2hCO1lBQ0QsTUFBTSxFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLEdBQUcsMERBQWtCLENBQ3RFLGtCQUFrQixFQUNsQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDaEI7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO1FBQ3hFLENBQUM7UUFFRCwwQkFBcUIsR0FBRyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxXQUFXLEdBQUcsd0RBQWdCLENBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNmLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JCLENBQUM7UUFFRCxlQUFVLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLE1BQU0sUUFBUSxHQUFHO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO2dCQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTTthQUNyQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQztRQUNKLENBQUM7UUFFRCxhQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUM1QixDQUFDO1FBOVdDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztTQUM1QjtJQUNILENBQUM7SUE4RkQsaUJBQWlCO1FBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRTtJQUNwQixDQUFDO0lBRUQsa0JBQWtCLENBQUUsU0FBUztRQUMzQixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQ3JCLENBQUM7YUFBTSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMscUJBQXFCLEVBQUU7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFnSUQsWUFBWSxDQUFFLENBQUM7UUFDYixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnRUFBd0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsaURBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsQ0FBRSxDQUFDO1FBQ1osTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLE1BQU0sR0FBRyxpREFBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRTtZQUN0RCxNQUFNLFFBQVEsR0FBRyxnRUFBd0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQ3pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVE7UUFDbkMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQW9HRCxNQUFNO1FBQ0osTUFBTSxLQUFLLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQ3ZELE1BQU0sRUFDSixJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQ2QsSUFBSSxFQUNKLFFBQVE7UUFDUiwyQkFBMkI7UUFDM0IsS0FBSyxFQUFFLEVBQW1ELEVBQzFELE9BQU8sRUFBRSxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxFQUNuRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBRWQsT0FBTyxDQUNMLHdEQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUNsQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLGlCQUNuQixXQUFXLEVBQ3ZCLFNBQVMsRUFBRSxrQkFBa0IsRUFDN0IsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsY0FBYyxFQUFFLFFBQVE7Z0JBQ3hCLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUc7Z0JBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSTtnQkFDL0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDL0UsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7Z0JBQ2xDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNO2FBQ3JDLEVBQ0QsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBQyxDQUFDO1lBRXRDLCtDQUFDLDBEQUFtQixJQUFDLFdBQVcsUUFBQyxZQUFZLFFBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUk7WUFDekUsd0RBQ0UsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUNyQixHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFDLENBQUMsRUFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUN4QixHQUFHLEVBQUMsRUFBRSxFQUNOLEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsU0FBUyxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLEdBQUc7b0JBQ3JELFVBQVUsRUFBRSxXQUFXO2lCQUN4QixFQUNELFNBQVMsRUFBRSxjQUFjLEdBQ3pCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FDdEIsK0NBQUMsK0NBQVEsSUFDUCxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDdkMsUUFBUSxFQUFFLFFBQVEsRUFDbEIsS0FBSyxFQUFFO29CQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLO29CQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtpQkFDbkMsRUFDRCxTQUFTLEVBQUUsaUJBQWlCLEVBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUMzQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQ2pDLENBQ0g7WUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSx3REFBSyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBQyx3QkFBd0IsR0FBRyxDQUN2SCxDQUNQO0lBQ0gsQ0FBQzs7QUE5Vk0sb0JBQVksR0FBRztJQUNwQixJQUFJLEVBQUUsQ0FBQztJQUNQLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNiLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLEVBQUU7SUFDVCxPQUFPLEVBQUUsRUFBRTtJQUNYLFNBQVMsRUFBRSxDQUFDO0NBQ2I7QUFvRk0scUJBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBRXJFLHFCQUFhLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Q0FDekIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UDZFO0FBQzNCO0FBQ3REOzs7OztHQUtHO0FBQ0ksU0FBUyxXQUFXLENBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNO0lBQ3RELElBQUksUUFBUSxJQUFJLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNuQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVMsR0FBRyxNQUFNO1lBQ3pCLE1BQU0sRUFBRSxTQUFTO1NBQ2xCO0lBQ0gsQ0FBQztJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsUUFBUTtRQUNmLE1BQU0sRUFBRSxRQUFRLEdBQUcsTUFBTTtLQUMxQjtBQUNILENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0ksU0FBUyxnQkFBZ0IsQ0FBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBQ25FLE9BQU87UUFDTCxDQUFDLEVBQUUscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQzNFLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7S0FDOUU7QUFDSCxDQUFDO0FBRUQsU0FBUyxxQkFBcUIsQ0FBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBQ2pFLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQztJQUN6RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVNLFNBQVMsd0JBQXdCLENBQUUsTUFBTSxFQUFFLE1BQU07SUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0ksU0FBUyxrQkFBa0IsQ0FBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBQy9ELE1BQU0sc0JBQXNCLEdBQUc7UUFDN0IsQ0FBQyxFQUFFLFNBQVMsQ0FDVixHQUFHLEVBQ0gsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQ3RGO1FBQ0QsQ0FBQyxFQUFFLFNBQVMsQ0FDVixHQUFHLEVBQ0gsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQ3pGO1FBQ0QsS0FBSyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RSxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0tBQzFFO0lBQ0QsTUFBTSxpQkFBaUIsR0FBRztRQUN4QixDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzRixDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM3RixLQUFLLEVBQUUsU0FBUyxDQUNkLE9BQU8sQ0FBQyxZQUFZLEVBQ3BCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQzVEO1FBQ0QsTUFBTSxFQUFFLFNBQVMsQ0FDZixPQUFPLENBQUMsYUFBYSxFQUNyQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUM5RDtLQUNGO0lBQ0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFO0FBQ3RELENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBUyxTQUFTLENBQUUsR0FBRyxFQUFFLEtBQUs7SUFDNUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLFNBQVMsU0FBUyxDQUFFLENBQUMsRUFBRSxDQUFDO0lBQzdCLE9BQU87UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDbkI7QUFDSCxDQUFDO0FBRU0sU0FBZSxvQkFBb0IsQ0FBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQWlCOztRQUNoRixPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN4QyxNQUFNLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7b0JBQzNELEtBQUssRUFBRSxVQUFVLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTzt3QkFDdEMsMkJBQTJCO3dCQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJO3dCQUNuQixVQUFVLENBQUM7NEJBQ1QsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU07NEJBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQzs0QkFFL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dDQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLENBQUM7NEJBRUQsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQzFELENBQUMsQ0FBQztvQkFDSixDQUFDO2lCQUNGLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO1lBQzlDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUTtZQUNwQixLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDbEMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUs7Z0JBQzlCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU07Z0JBQ2hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUVuQyxHQUFHLENBQUMsU0FBUyxDQUNYLEtBQUssRUFDTCxTQUFTLENBQUMsQ0FBQyxFQUNYLFNBQVMsQ0FBQyxDQUFDLEVBQ1gsU0FBUyxDQUFDLEtBQUssRUFDZixTQUFTLENBQUMsTUFBTSxFQUNoQixDQUFDLEVBQ0QsQ0FBQyxFQUNELFNBQVMsQ0FBQyxLQUFLLEVBQ2YsU0FBUyxDQUFDLE1BQU0sQ0FDakI7Z0JBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUk7b0JBQzFCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO29CQUMzQyxNQUFNLGdCQUFnQixHQUEwQjt3QkFDOUMsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsUUFBUSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLE9BQU87d0JBQ3JELElBQUksRUFBRSxtREFBWSxDQUFDLEtBQUs7d0JBQ3hCLEdBQUcsRUFBRSxTQUFTO3dCQUNkLE9BQU8sRUFBRSxTQUFTO3dCQUNsQixVQUFVLEVBQUUsRUFBRTt3QkFDZCxVQUFVLEVBQUUsWUFBWTt3QkFDeEIsUUFBUSxFQUFFLFFBQVE7cUJBQ25CO29CQUVELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDaEMsTUFBTSxrQkFBa0IsR0FBRyxnRUFBa0IsQ0FBQyxXQUFXLEVBQUU7d0JBQzNELGdFQUFrQixDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLElBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLElBQUksRUFBRSxFQUFFOzRCQUN2RixnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSTs0QkFDNUIsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7NEJBQ3RELElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0NBQzlCLGdFQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLDJCQUEyQixDQUFDLGdCQUFnQixDQUFDOzRCQUNoRixDQUFDO3dCQUNILENBQUMsRUFBQzt3QkFFRixPQUFPLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLENBQUM7eUJBQU0sQ0FBQzt3QkFDTixtREFBWSxDQUFDLHdCQUF3QixFQUFFLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDO3dCQUM5RixPQUFPLENBQUMsZ0JBQWdCLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBRUYsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ25DLE1BQU0sRUFBRTtZQUNWLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQTs7Ozs7Ozs7Ozs7O0FDcExEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vY2hlY2suc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2Jhc2ljL2xpYi9pbWFnZWNyb3AvaW1hZ2Vjcm9wLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9saWIvaW1hZ2Vjcm9wL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9saWIvaW1hZ2Vjcm9wL2xpYi9jcm9wYXJlYS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvbGliL2ltYWdlY3JvcC9saWIvY3JvcHBlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYmFzaWMvbGliL2ltYWdlY3JvcC9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtZm9yLWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9iYXNpYy9pbWFnZWNyb3AudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJtNi4wMzYgMTIuMTU3IDguMDEtOC4wMWEuNS41IDAgMSAxIC43MDcuNzA3bC04LjAxIDguMDFhMSAxIDAgMCAxLTEuNDE1IDBMMS4xNDYgOC42ODJhLjUuNSAwIDEgMSAuNzA4LS43MDd6XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwibTguNzQ1IDggNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ1Ljc0Nkw4IDguNzQ2bC02LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDYtLjc0Nmw2LjEtNi4xLTYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni0uNzQ2bDYuMSA2LjEgNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2Ljc0NnpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay5zdmcnXG5cbmV4cG9ydCBjb25zdCBDaGVja091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xuXG5leHBvcnQgY29uc3QgQ2xvc2VPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSwganN4LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgQ3JvcHBlciB9IGZyb20gJy4vbGliL2Nyb3BwZXInXG5pbXBvcnQgdHlwZSB7IENyb3BQYXJhbSwgQ3JvcFBvc2l0aW9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IENyb3BUeXBlIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IGdldENyb3BwZWRJbWdCbG9iVXJsIH0gZnJvbSAnLi9saWIvdXRpbHMnXG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIG1vZGFsOiBib29sZWFuXG4gIGNyb3A6IGFueVxuICB6b29tOiBudW1iZXJcbiAgYXNwZWN0OiBudW1iZXJcbiAgc2hvd0dyaWQ6IGJvb2xlYW5cbiAgem9vbVNwZWVkOiBudW1iZXJcbiAgY3JvcHBlZEFyZWFQaXhlbHM6IGFueVxuICBsb2FkaW5nPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNhbmNlbENyb3A/OiBhbnlcbiAgb25Db25maXJtQ3JvcD86IGFueVxuICBvbkZhaWxDcm9wPzogYW55XG4gIHdpZGdldElkPzogc3RyaW5nXG4gIHdpZGdldEFyZWE/OiBDbGllbnRSZWN0XG4gIGltYWdlOiBzdHJpbmdcbiAgaW1hZ2VGb3JtYXQ/OiBzdHJpbmdcbiAgY3JvcFBhcmFtPzogQ3JvcFBhcmFtXG4gIGNyb3Bab29tPzogbnVtYmVyXG4gIGNyb3A/OiBDcm9wUG9zaXRpb25cbiAgY3JvcFR5cGU/OiBDcm9wVHlwZVxuICBvcmlnaW5JZD86IHN0cmluZ1xufVxuXG5leHBvcnQgeyB0eXBlIENyb3BQYXJhbSwgQ3JvcFR5cGUgfVxuXG5jb25zdCBGYWtlQ3JvcEltYWdlRm9ybWF0cyA9IFsnaW1hZ2UvZ2lmJywgJ2ltYWdlL3N2Zyt4bWwnXVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBlaWR0SW5mb1N0eWxlID0geyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luOiAwIH1cblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbDogdHJ1ZSxcbiAgICAgIGNyb3A6IHRoaXMucHJvcHMuY3JvcCA/IHRoaXMucHJvcHMuY3JvcCA6IHsgeDogMCwgeTogMCB9LFxuICAgICAgem9vbTogdGhpcy5wcm9wcy5jcm9wWm9vbSA/IHRoaXMucHJvcHMuY3JvcFpvb20gOiAxLFxuICAgICAgYXNwZWN0OiAxLFxuICAgICAgc2hvd0dyaWQ6IGZhbHNlLFxuICAgICAgem9vbVNwZWVkOiAwLjEsXG4gICAgICBjcm9wcGVkQXJlYVBpeGVsczogbnVsbCxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSBhcyBTdGF0ZVxuICB9XG5cbiAgb25Dcm9wQ2hhbmdlID0gY3JvcCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyb3AgfSlcbiAgfVxuXG4gIG9uQ3JvcEFyZWFDb21wbGV0ZSA9IChjcm9wcGVkQXJlYSwgY3JvcHBlZEFyZWFQaXhlbHMpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JvcHBlZEFyZWFQaXhlbHMgfSlcbiAgfVxuXG4gIG9uWm9vbUNoYW5nZSA9IHpvb20gPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB6b29tIH0pXG4gIH1cblxuICBvbkNvbmZpcm1Dcm9wID0gKHN2Z1ZpZXdCb3g6IHN0cmluZywgc3ZnUGF0aDogc3RyaW5nLCBjcm9wU2hhcGUpID0+IHtcbiAgICBpZiAoRmFrZUNyb3BJbWFnZUZvcm1hdHMuaW5jbHVkZXModGhpcy5wcm9wcy5pbWFnZUZvcm1hdCkgfHwgdGhpcy5wcm9wcy5jcm9wVHlwZSA9PT0gQ3JvcFR5cGUuRmFrZSkge1xuICAgICAgY29uc3QgY3JvcGVkSW5mbyA9IHtcbiAgICAgICAgY3JvcFBvc2l0aW9uOiB0aGlzLnN0YXRlLmNyb3AsXG4gICAgICAgIGNyb3Bab29tOiB0aGlzLnN0YXRlLnpvb20sXG4gICAgICAgIHN2Z1ZpZXdCb3g6IHN2Z1ZpZXdCb3ggfHwgJzAgMCAyOCAyOCcsXG4gICAgICAgIHN2Z1BhdGg6IHN2Z1BhdGggfHwgJ20wLDBsMCwyOGwyOCwwbDAsLTI4bC0yOCwweicsXG4gICAgICAgIGNyb3BTaGFwZTogY3JvcFNoYXBlIHx8ICdyZWN0YW5nbGUnLFxuICAgICAgICBjcm9wUGl4ZWw6IHRoaXMuc3RhdGUuY3JvcHBlZEFyZWFQaXhlbHMsXG4gICAgICAgIGNyb3BUeXBlOiBDcm9wVHlwZS5GYWtlXG4gICAgICB9IGFzIENyb3BQYXJhbVxuICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm1Dcm9wICYmIHRoaXMucHJvcHMub25Db25maXJtQ3JvcChjcm9wZWRJbmZvKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjcm9wZWRJbmZvID0ge1xuICAgICAgICBjcm9wUG9zaXRpb246IHRoaXMuc3RhdGUuY3JvcCxcbiAgICAgICAgY3JvcFpvb206IHRoaXMuc3RhdGUuem9vbSxcbiAgICAgICAgc3ZnVmlld0JveDogc3ZnVmlld0JveCxcbiAgICAgICAgc3ZnUGF0aDogc3ZnUGF0aCxcbiAgICAgICAgY3JvcFNoYXBlOiBjcm9wU2hhcGUsXG4gICAgICAgIGNyb3BQaXhlbDogdGhpcy5zdGF0ZS5jcm9wcGVkQXJlYVBpeGVscyxcbiAgICAgICAgY3JvcFR5cGU6IENyb3BUeXBlLlJlYWxcbiAgICAgIH0gYXMgQ3JvcFBhcmFtXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgZ2V0Q3JvcHBlZEltZ0Jsb2JVcmwodGhpcy5wcm9wcy5pbWFnZSwgY3JvcGVkSW5mby5jcm9wUGl4ZWwsIHRoaXMucHJvcHMub3JpZ2luSWQpLnRoZW4oaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpcm1Dcm9wICYmIHRoaXMucHJvcHMub25Db25maXJtQ3JvcChjcm9wZWRJbmZvLCBpbWFnZVJlc291cmNlSXRlbUluZm8pXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaXNCdWlsZGVyID0gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyXG5cbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKDxkaXY+PGRpdlxuICAgICAgY2xhc3NOYW1lPSdqaW11LXdpZGdldCdcbiAgICAgIHN0eWxlPXt7IHpJbmRleDogOTk5OSwgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogMCwgbGVmdDogMCwgYmFja2dyb3VuZENvbG9yOiAncmdiKDAsIDAsIDAsIC41KScgfX1cbiAgICA+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBzdHlsZT17eyB6SW5kZXg6IDEwMDAwLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwIH19IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7ICdqaW11LXdpZGdldCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXInOiBpc0J1aWxkZXIgfSl9PlxuICAgICAgPENyb3BwZXJcbiAgICAgICAgaW1hZ2U9e3RoaXMucHJvcHMuaW1hZ2V9XG4gICAgICAgIGNyb3A9e3RoaXMuc3RhdGUuY3JvcH1cbiAgICAgICAgem9vbT17dGhpcy5zdGF0ZS56b29tfVxuICAgICAgICBhc3BlY3Q9e3RoaXMuc3RhdGUuYXNwZWN0fVxuICAgICAgICBzaG93R3JpZD17dGhpcy5zdGF0ZS5zaG93R3JpZH1cbiAgICAgICAgem9vbVNwZWVkPXt0aGlzLnN0YXRlLnpvb21TcGVlZH1cbiAgICAgICAgb25Dcm9wQ2hhbmdlPXt0aGlzLm9uQ3JvcENoYW5nZX1cbiAgICAgICAgb25Dcm9wQ29tcGxldGU9e3RoaXMub25Dcm9wQXJlYUNvbXBsZXRlfVxuICAgICAgICBvblpvb21DaGFuZ2U9e3RoaXMub25ab29tQ2hhbmdlfVxuICAgICAgICBvbkNhbmNlbENyb3A9e3RoaXMucHJvcHMub25DYW5jZWxDcm9wfVxuICAgICAgICBvbkNvbmZpcm1Dcm9wPXt0aGlzLm9uQ29uZmlybUNyb3B9XG4gICAgICAgIHdpZGdldEFyZWE9e3RoaXMucHJvcHMud2lkZ2V0QXJlYX1cbiAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMud2lkZ2V0SWR9XG4gICAgICAgIHN2Z1ZpZXdCb3g9e3RoaXMucHJvcHMuY3JvcFBhcmFtICYmIHRoaXMucHJvcHMuY3JvcFBhcmFtLnN2Z1ZpZXdCb3h9XG4gICAgICAgIHN2Z1BhdGg9e3RoaXMucHJvcHMuY3JvcFBhcmFtICYmIHRoaXMucHJvcHMuY3JvcFBhcmFtLnN2Z1BhdGh9XG4gICAgICAgIGNyb3BTaGFwZT17dGhpcy5wcm9wcy5jcm9wUGFyYW0gJiYgdGhpcy5wcm9wcy5jcm9wUGFyYW0uY3JvcFNoYXBlfVxuICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PiwgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSlcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZWNyb3AnXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIGFzIGNsYXNzbmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBDaGVja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjaydcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY3JvcFNoYXBlPzogc3RyaW5nXG4gIHNob3dHcmlkPzogYm9vbGVhblxuICBzdHlsZT86IGFueVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgY3JvcEFyZWFTdHlsZT86IHN0cmluZ1xuICBvblNsaWRlckNoYW5nZT86IGFueVxuICBvbkNhbmNlbENyb3A/OiBhbnlcbiAgb25Db25maXJtQ3JvcD86IGFueVxuICBzdmdWaWV3Qm94Pzogc3RyaW5nXG4gIHN2Z1BhdGg/OiBzdHJpbmdcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbiAgc2NyZWVuV2lkdGg/OiBudW1iZXJcbiAgc2NyZWVuSGVpZ2h0PzogbnVtYmVyXG4gIHdpZGdldEFyZWE/OiBDbGllbnRSZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBDcm9wQXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgdW5rbm93bj4ge1xuICByZW5kZXIgKCkge1xuICAgIGxldCB7IHNob3dHcmlkLCBzdHlsZSwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSA9ICcnXG4gICAgfVxuXG4gICAgY29uc3QgY3JvcFdpbmRvd1dpZHRoID0gc3R5bGUud2lkdGhcblxuICAgIGNvbnN0IHRvb2xCYXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICBtaW5XaWR0aDogJzc1cHgnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzVweCcsXG4gICAgICBsZWZ0OiAnLTFweCcsXG4gICAgICBwYWRkaW5nVG9wOiAnNXB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnLTQwcHgnLFxuICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICB3aWR0aDogYCR7TWF0aC5taW4odGhpcy5wcm9wcy5zY3JlZW5XaWR0aCwgY3JvcFdpbmRvd1dpZHRoKX1weGAsXG4gICAgICBib3hTaGFkb3c6ICcwIDJweCA4cHggMXB4IHJnYmEoMCwwLDAsMC4yMCknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICB9IGFzIGFueVxuXG4gICAgaWYgKHRoaXMucHJvcHMud2lkZ2V0QXJlYS50b3AgLSA0MCA8IDApIHtcbiAgICAgIHRvb2xCYXJTdHlsZS50b3AgPSBgJHt0aGlzLnByb3BzLndpZGdldEFyZWEuaGVpZ2h0fXB4YFxuICAgIH1cblxuICAgIGNvbnN0IHRvb2xDb250ZW50ID0gKFxuICAgICAgPGRpdiBvbk1vdXNlRG93bj17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9fSBzdHlsZT17dG9vbEJhclN0eWxlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0ndG9vbC1pdGVtIG1yLTEnIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMC40MnJlbSAwLjVyZW0nIH19IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Db25maXJtQ3JvcCAmJiB0aGlzLnByb3BzLm9uQ29uZmlybUNyb3AodGhpcy5wcm9wcy5zdmdWaWV3Qm94LCB0aGlzLnByb3BzLnN2Z1BhdGgsIHRoaXMucHJvcHMuY3JvcFNoYXBlKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hlY2tPdXRsaW5lZCBjbGFzc05hbWU9J21yLTAnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSd0b29sLWl0ZW0gbXItMScgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmc6ICcwLjQycmVtIDAuNXJlbScsIG1hcmdpbkxlZnQ6ICcwLjFyZW0nIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4geyB0aGlzLnByb3BzLm9uQ2FuY2VsQ3JvcCAmJiB0aGlzLnByb3BzLm9uQ2FuY2VsQ3JvcCgpIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBzaXplPXsxM30gY2xhc3NOYW1lPSdtci0wJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjcm9wcGVyQXJlYSAnICsgY2xhc3NOYW1lLFxuICAgICAgICAgIHsgZ3JpZExpbmVzOiBzaG93R3JpZCB9KX1cbiAgICAgID5cbiAgICAgICAgPHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB2aWV3Qm94PXt0aGlzLnByb3BzLnN2Z1ZpZXdCb3ggPyB0aGlzLnByb3BzLnN2Z1ZpZXdCb3ggOiAnMCAwIDI4IDI4J30gcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZSc+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8bWFzayBpZD17YG1hc2stc2V0dGluZy0ke3RoaXMucHJvcHMud2lkZ2V0SWR9YH0gbWFza0NvbnRlbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnPlxuICAgICAgICAgICAgICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBzdHJva2U9J25vbmUnIGZpbGw9J3JnYigyNTUsIDI1NSwgMjU1LCAxKScgLz5cbiAgICAgICAgICAgICAgPHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB2aWV3Qm94PXt0aGlzLnByb3BzLnN2Z1ZpZXdCb3ggPyB0aGlzLnByb3BzLnN2Z1ZpZXdCb3ggOiAnMCAwIDI4IDI4J30gcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZSc+XG4gICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VXaWR0aD0nMicgc3Ryb2tlRGFzaGFycmF5PScxMCcgc3Ryb2tlRGFzaG9mZnNldD0nMCcgZmlsbD0nIzAwMCcgZD17dGhpcy5wcm9wcy5zdmdQYXRoID8gdGhpcy5wcm9wcy5zdmdQYXRoIDogJ20wLDBsMCwyOGwyOCwwbDAsLTI4bC0yOCwweid9IC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvbWFzaz5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPHJlY3QgeD0nMCcgeT0nMCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgY2xhc3NOYW1lPSdtYXNrLWltYWdlJyBzdHlsZT17eyBzdHJva2U6ICdub25lJywgZmlsbDogJ3JnYigwLCAwLCAwLCAwLjcpJyB9fSAvPlxuXG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aCBzdHJva2U9JyNmZmYnIHN0cm9rZVdpZHRoPScuMScgZmlsbD0nbm9uZScgc3Ryb2tlRGFzaG9mZnNldD0nMCcgZD17dGhpcy5wcm9wcy5zdmdQYXRoID8gdGhpcy5wcm9wcy5zdmdQYXRoIDogJ20wLDBsMCwyOGwyOCwwbDAsLTI4bC0yOCwweid9IC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAge3Rvb2xDb250ZW50fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHsgUmVhY3QsIGNzcywganN4LCBSZWFjdFJlc2l6ZURldGVjdG9yLCBnZXRBcHBTdG9yZSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IENyb3BBcmVhIH0gZnJvbSAnLi9jcm9wYXJlYSdcbmltcG9ydCB7XG4gIHJlc3RyaWN0UG9zaXRpb24sXG4gIGdldERpc3RhbmNlQmV0d2VlblBvaW50cyxcbiAgY29tcHV0ZUNyb3BwZWRBcmVhLFxuICBnZXRDZW50ZXJcbn0gZnJvbSAnLi91dGlscydcblxuY29uc3QgTUlOX1pPT00gPSAxXG5jb25zdCBNQVhfWk9PTSA9IDEwXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFzcGVjdD86IG51bWJlclxuICB6b29tPzogbnVtYmVyXG4gIGNyb3A/OiBhbnlcbiAgaW1hZ2U/OiBzdHJpbmdcbiAgb25Dcm9wQ2hhbmdlPzogYW55XG4gIHpvb21TcGVlZD86IG51bWJlclxuICBtYXhab29tPzogbnVtYmVyXG4gIG9uWm9vbUNoYW5nZT86IGFueVxuICBtaW5ab29tPzogbnVtYmVyXG4gIG9uQ3JvcENvbXBsZXRlPzogYW55XG4gIHNob3dHcmlkPzogYm9vbGVhblxuICBzdHlsZT86IGFueVxuICBjbGFzc2VzPzogYW55XG4gIG9uSW1nRXJyb3I/OiBhbnlcbiAgb25DYW5jZWxDcm9wPzogYW55XG4gIG9uQ29uZmlybUNyb3A/OiBhbnlcbiAgd2lkZ2V0QXJlYT86IENsaWVudFJlY3RcbiAgd2lkZ2V0SWQ/OiBzdHJpbmdcbiAgc3ZnVmlld0JveD86IHN0cmluZ1xuICBzdmdQYXRoPzogc3RyaW5nXG4gIGNyb3BTaGFwZT86IHN0cmluZ1xuICBsb2FkaW5nPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBjcm9wU2l6ZTogYW55XG4gIG1pblpvb20/OiBudW1iZXJcbiAgbWF4Wm9vbT86IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgQ3JvcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgaW1hZ2UgPSBudWxsXG4gIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBudWxsXG4gIGNvbnRhaW5lclJlY3QgPSB7fSBhcyBhbnlcbiAgaW1hZ2VTaXplID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBuYXR1cmFsV2lkdGg6IDAsIG5hdHVyYWxIZWlnaHQ6IDAgfVxuICBkcmFnU3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9XG4gIGRyYWdTdGFydENyb3AgPSB7IHg6IDAsIHk6IDAgfVxuICBsYXN0UGluY2hEaXN0YW5jZSA9IDBcbiAgcmFmRHJhZ1RpbWVvdXQgPSBudWxsXG4gIHJhZlpvb21UaW1lb3V0ID0gbnVsbFxuICBzY3JlZW5XaWR0aCA9IGRvY3VtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogbnVsbFxuICBzY3JlZW5IZWlnaHQgPSBkb2N1bWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgOiBudWxsXG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3JvcFNpemU6IG51bGwsXG4gICAgICBtaW5ab29tOiB0aGlzLnByb3BzLm1pblpvb20sXG4gICAgICBtYXhab29tOiB0aGlzLnByb3BzLm1heFpvb21cbiAgICB9XG4gIH1cblxuICBnZXRTdHlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5jcm9wcGVyQXJlYSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA5OTk5ZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG5cbiAgICAgICAgLnRvb2wtaXRlbSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjBGMztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGNiY2Q7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ncmlkTGluZXMge1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDMzLjMzJTtcbiAgICAgICAgICByaWdodDogMzMuMzMlO1xuICAgICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgICAgdG9wOiAzMy4zMyU7XG4gICAgICAgICAgYm90dG9tOiAzMy4zMyU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnJvdW5kU2hhcGUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcbiAgICAgIH1cblxuICAgICAgLm1hc2stYm9yZGVyIHtcbiAgICAgICAgcGF0aCB7XG4gICAgICAgICAgdHJhbnNpdGlvbjphbGwgMXMgbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOnJpbmc7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOjkuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHJpbmcge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDo2MDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tYXNrLWltYWdlIHtcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHtiYXNlVXJsfSNtYXNrLXNldHRpbmctJHt0aGlzLnByb3BzLndpZGdldElkfSk7XG4gICAgICAgIG1hc2s6IHVybCgke2Jhc2VVcmx9I21hc2stc2V0dGluZy0ke3RoaXMucHJvcHMud2lkZ2V0SWR9KTtcbiAgICAgICAgbWFzay1pbWFnZTogdXJsKCR7YmFzZVVybH0jbWFzay1zZXR0aW5nLSR7dGhpcy5wcm9wcy53aWRnZXRJZH0pO1xuICAgICAgfVxuICAgIGBcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgem9vbTogMSxcbiAgICBhc3BlY3Q6IDQgLyAzLFxuICAgIG1heFpvb206IE1BWF9aT09NLFxuICAgIG1pblpvb206IE1JTl9aT09NLFxuICAgIHNob3dHcmlkOiB0cnVlLFxuICAgIHN0eWxlOiB7fSxcbiAgICBjbGFzc2VzOiB7fSxcbiAgICB6b29tU3BlZWQ6IDFcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jb21wdXRlU2l6ZXMpXG4gICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZ2VzdHVyZXN0YXJ0JywgdGhpcy5wcmV2ZW50Wm9vbVNhZmFyaSlcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlY2hhbmdlJywgdGhpcy5wcmV2ZW50Wm9vbVNhZmFyaSlcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jb21wdXRlU2l6ZXMpXG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZ2VzdHVyZXN0YXJ0JywgdGhpcy5wcmV2ZW50Wm9vbVNhZmFyaSlcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdnZXN0dXJlY2hhbmdlJywgdGhpcy5wcmV2ZW50Wm9vbVNhZmFyaSlcbiAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbClcbiAgICB0aGlzLmNsZWFuRXZlbnRzKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5hc3BlY3QgIT09IHRoaXMucHJvcHMuYXNwZWN0KSB7XG4gICAgICB0aGlzLmNvbXB1dGVTaXplcygpXG4gICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuem9vbSAhPT0gdGhpcy5wcm9wcy56b29tKSB7XG4gICAgICB0aGlzLnJlY29tcHV0ZUNyb3BQb3NpdGlvbigpXG4gICAgfVxuICB9XG5cbiAgLy8gdGhpcyBpcyB0byBwcmV2ZW50IFNhZmFyaSBvbiBpT1MgPj0gMTAgdG8gem9vbSB0aGUgcGFnZVxuICBwcmV2ZW50Wm9vbVNhZmFyaSA9IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY2xlYW5FdmVudHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRyYWdTdG9wcGVkKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uRHJhZ1N0b3BwZWQpXG4gIH1cblxuICBvbkltZ0xvYWQgPSAoKSA9PiB7XG4gICAgdGhpcy5jb21wdXRlU2l6ZXMoKVxuICAgIHRoaXMuZW1pdENyb3BEYXRhKClcbiAgfVxuXG4gIGNvbXB1dGVTaXplcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgdGhpcy5pbWFnZVNpemUgPSB7XG4gICAgICAgIHdpZHRoOiB0aGlzLmltYWdlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaW1hZ2UuaGVpZ2h0LFxuICAgICAgICBuYXR1cmFsV2lkdGg6IHRoaXMuaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgICBuYXR1cmFsSGVpZ2h0OiB0aGlzLmltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zdCBjcm9wU2l6ZV93aWR0aCA9IHRoaXMucHJvcHMud2lkZ2V0QXJlYS53aWR0aFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zdCBjcm9wU2l6ZV9oZWlnaHQgPSB0aGlzLnByb3BzLndpZGdldEFyZWEuaGVpZ2h0XG5cbiAgICAgIGxldCBtaW5ab29tID0gdGhpcy5zdGF0ZS5taW5ab29tXG4gICAgICBsZXQgbWF4Wm9vbSA9IHRoaXMuc3RhdGUubWF4Wm9vbVxuXG4gICAgICBpZiAoKHRoaXMuaW1hZ2Uud2lkdGggLyB0aGlzLmltYWdlLmhlaWdodCkgPj0gKGNyb3BTaXplX3dpZHRoIC8gY3JvcFNpemVfaGVpZ2h0KSkge1xuICAgICAgICBtaW5ab29tID0gY3JvcFNpemVfaGVpZ2h0IC8gdGhpcy5pbWFnZS5oZWlnaHRcbiAgICAgICAgbWF4Wm9vbSA9IG1pblpvb20gKyA1XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtaW5ab29tID0gY3JvcFNpemVfd2lkdGggLyB0aGlzLmltYWdlLndpZHRoXG4gICAgICAgIG1heFpvb20gPSBtaW5ab29tICsgNVxuICAgICAgfVxuXG4gICAgICBpZiAobWluWm9vbSA+IHRoaXMucHJvcHMuem9vbSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uWm9vbUNoYW5nZSAmJiB0aGlzLnByb3BzLm9uWm9vbUNoYW5nZShtaW5ab29tKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjcm9wU2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IGNyb3BTaXplX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNyb3BTaXplX2hlaWdodFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNyb3BTaXplOiBjcm9wU2l6ZSxcbiAgICAgICAgbWluWm9vbTogbWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogbWF4Wm9vbVxuICAgICAgfSwgdGhpcy5yZWNvbXB1dGVDcm9wUG9zaXRpb24pXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0TW91c2VQb2ludCA9IGUgPT4gKHsgeDogTnVtYmVyKGUuY2xpZW50WCksIHk6IE51bWJlcihlLmNsaWVudFkpIH0pXG5cbiAgc3RhdGljIGdldFRvdWNoUG9pbnQgPSB0b3VjaCA9PiAoe1xuICAgIHg6IE51bWJlcih0b3VjaC5jbGllbnRYKSxcbiAgICB5OiBOdW1iZXIodG91Y2guY2xpZW50WSlcbiAgfSlcblxuICBvbk1vdXNlRG93biA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25EcmFnU3RvcHBlZClcbiAgICB0aGlzLm9uRHJhZ1N0YXJ0KENyb3BwZXIuZ2V0TW91c2VQb2ludChlKSlcbiAgfVxuXG4gIG9uTW91c2VNb3ZlID0gZSA9PiB7IHRoaXMub25EcmFnKENyb3BwZXIuZ2V0TW91c2VQb2ludChlKSkgfVxuXG4gIG9uVG91Y2hTdGFydCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSkgLy8gaU9TIDExIG5vdyBkZWZhdWx0cyB0byBwYXNzaXZlOiB0cnVlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uRHJhZ1N0b3BwZWQpXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMub25QaW5jaFN0YXJ0KGUpXG4gICAgfSBlbHNlIGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLm9uRHJhZ1N0YXJ0KENyb3BwZXIuZ2V0VG91Y2hQb2ludChlLnRvdWNoZXNbMF0pKVxuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2hNb3ZlID0gZSA9PiB7XG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMub25QaW5jaE1vdmUoZSlcbiAgICB9IGVsc2UgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMub25EcmFnKENyb3BwZXIuZ2V0VG91Y2hQb2ludChlLnRvdWNoZXNbMF0pKVxuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0ID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiA9IHsgeCwgeSB9XG4gICAgdGhpcy5kcmFnU3RhcnRDcm9wID0geyB4OiB0aGlzLnByb3BzLmNyb3AueCwgeTogdGhpcy5wcm9wcy5jcm9wLnkgfVxuICB9XG5cbiAgb25EcmFnID0gKHsgeCwgeSB9KSA9PiB7XG4gICAgaWYgKHRoaXMucmFmRHJhZ1RpbWVvdXQpIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZkRyYWdUaW1lb3V0KVxuXG4gICAgdGhpcy5yYWZEcmFnVGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKHggPT09IHVuZGVmaW5lZCB8fCB5ID09PSB1bmRlZmluZWQpIHJldHVyblxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHggLSB0aGlzLmRyYWdTdGFydFBvc2l0aW9uLnhcbiAgICAgIGNvbnN0IG9mZnNldFkgPSB5IC0gdGhpcy5kcmFnU3RhcnRQb3NpdGlvbi55XG4gICAgICBjb25zdCByZXF1ZXN0ZWRQb3NpdGlvbiA9IHtcbiAgICAgICAgeDogdGhpcy5kcmFnU3RhcnRDcm9wLnggKyBvZmZzZXRYLFxuICAgICAgICB5OiB0aGlzLmRyYWdTdGFydENyb3AueSArIG9mZnNldFlcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSByZXN0cmljdFBvc2l0aW9uKFxuICAgICAgICByZXF1ZXN0ZWRQb3NpdGlvbixcbiAgICAgICAgdGhpcy5pbWFnZVNpemUsXG4gICAgICAgIHRoaXMuc3RhdGUuY3JvcFNpemUsXG4gICAgICAgIHRoaXMucHJvcHMuem9vbVxuICAgICAgKVxuICAgICAgdGhpcy5wcm9wcy5vbkNyb3BDaGFuZ2UobmV3UG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIG9uRHJhZ1N0b3BwZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5jbGVhbkV2ZW50cygpXG4gICAgdGhpcy5lbWl0Q3JvcERhdGEoKVxuICB9XG5cbiAgb25QaW5jaFN0YXJ0IChlKSB7XG4gICAgY29uc3QgcG9pbnRBID0gQ3JvcHBlci5nZXRUb3VjaFBvaW50KGUudG91Y2hlc1swXSlcbiAgICBjb25zdCBwb2ludEIgPSBDcm9wcGVyLmdldFRvdWNoUG9pbnQoZS50b3VjaGVzWzFdKVxuICAgIHRoaXMubGFzdFBpbmNoRGlzdGFuY2UgPSBnZXREaXN0YW5jZUJldHdlZW5Qb2ludHMocG9pbnRBLCBwb2ludEIpXG4gICAgdGhpcy5vbkRyYWdTdGFydChnZXRDZW50ZXIocG9pbnRBLCBwb2ludEIpKVxuICB9XG5cbiAgb25QaW5jaE1vdmUgKGUpIHtcbiAgICBjb25zdCBwb2ludEEgPSBDcm9wcGVyLmdldFRvdWNoUG9pbnQoZS50b3VjaGVzWzBdKVxuICAgIGNvbnN0IHBvaW50QiA9IENyb3BwZXIuZ2V0VG91Y2hQb2ludChlLnRvdWNoZXNbMV0pXG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKHBvaW50QSwgcG9pbnRCKVxuICAgIHRoaXMub25EcmFnKGNlbnRlcilcblxuICAgIGlmICh0aGlzLnJhZlpvb21UaW1lb3V0KSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZab29tVGltZW91dClcbiAgICB0aGlzLnJhZlpvb21UaW1lb3V0ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGdldERpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50QilcbiAgICAgIGNvbnN0IG5ld1pvb20gPSB0aGlzLnByb3BzLnpvb20gKiAoZGlzdGFuY2UgLyB0aGlzLmxhc3RQaW5jaERpc3RhbmNlKVxuICAgICAgdGhpcy5zZXROZXdab29tKG5ld1pvb20sIGNlbnRlcilcbiAgICAgIHRoaXMubGFzdFBpbmNoRGlzdGFuY2UgPSBkaXN0YW5jZVxuICAgIH0pXG4gIH1cblxuICBvbldoZWVsID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IHBvaW50ID0gQ3JvcHBlci5nZXRNb3VzZVBvaW50KGUpXG4gICAgbGV0IG5ld1pvb20gPSBudWxsXG4gICAgY29uc3QgcmVsYXRlUGF0aFJhdGUgPSAwLjA1XG4gICAgaWYgKGUuZGVsdGFZIDw9IDApIHtcbiAgICAgIG5ld1pvb20gPSAoMSArIHJlbGF0ZVBhdGhSYXRlKSAqIHRoaXMucHJvcHMuem9vbVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdab29tID0gKDEgLSByZWxhdGVQYXRoUmF0ZSkgKiB0aGlzLnByb3BzLnpvb21cbiAgICB9XG4gICAgdGhpcy5zZXROZXdab29tKG5ld1pvb20sIHBvaW50KVxuICB9XG5cbiAgZ2V0UG9pbnRPbkNvbnRhaW5lciA9ICh7IHgsIHkgfSwgem9vbT86IGFueSkgPT4ge1xuICAgIGlmICghdGhpcy5jb250YWluZXJSZWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBDcm9wcGVyIGlzIG5vdCBtb3VudGVkJylcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMuY29udGFpbmVyUmVjdC53aWR0aCAvIDIgLSAoeCAtIHRoaXMuY29udGFpbmVyUmVjdC5sZWZ0KSxcbiAgICAgIHk6IHRoaXMuY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyIC0gKHkgLSB0aGlzLmNvbnRhaW5lclJlY3QudG9wKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvaW50T25JbWFnZSA9ICh7IHgsIHkgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3JvcCwgem9vbSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICB4OiAoeCArIGNyb3AueCkgLyB6b29tLFxuICAgICAgeTogKHkgKyBjcm9wLnkpIC8gem9vbVxuICAgIH1cbiAgfVxuXG4gIHNldE5ld1pvb20gPSAoem9vbSwgcG9pbnQpID0+IHtcbiAgICBjb25zdCB6b29tUG9pbnQgPSB0aGlzLmdldFBvaW50T25Db250YWluZXIocG9pbnQpXG4gICAgY29uc3Qgem9vbVRhcmdldCA9IHRoaXMuZ2V0UG9pbnRPbkltYWdlKHpvb21Qb2ludClcbiAgICBjb25zdCBuZXdab29tID0gTWF0aC5taW4odGhpcy5zdGF0ZS5tYXhab29tLCBNYXRoLm1heCh6b29tLCB0aGlzLnN0YXRlLm1pblpvb20pKVxuICAgIGNvbnN0IHJlcXVlc3RlZFBvc2l0aW9uID0ge1xuICAgICAgeDogem9vbVRhcmdldC54ICogbmV3Wm9vbSAtIHpvb21Qb2ludC54LFxuICAgICAgeTogem9vbVRhcmdldC55ICogbmV3Wm9vbSAtIHpvb21Qb2ludC55XG4gICAgfVxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gcmVzdHJpY3RQb3NpdGlvbihcbiAgICAgIHJlcXVlc3RlZFBvc2l0aW9uLFxuICAgICAgdGhpcy5pbWFnZVNpemUsXG4gICAgICB0aGlzLnN0YXRlLmNyb3BTaXplLFxuICAgICAgbmV3Wm9vbVxuICAgIClcblxuICAgIHRoaXMucHJvcHMub25Dcm9wQ2hhbmdlKG5ld1Bvc2l0aW9uKVxuXG4gICAgdGhpcy5wcm9wcy5vblpvb21DaGFuZ2UgJiYgdGhpcy5wcm9wcy5vblpvb21DaGFuZ2UobmV3Wm9vbSlcbiAgfVxuXG4gIGVtaXRDcm9wRGF0YSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuY3JvcFNpemUpIHJldHVyblxuICAgIC8vIHRoaXMgaXMgdG8gZW5zdXJlIHRoZSBjcm9wIGlzIGNvcnJlY3RseSByZXN0cmljdGVkIGFmdGVyIGEgem9vbSBiYWNrIChodHRwczovL2dpdGh1Yi5jb20vcmljYXJkby1jaC9yZWFjdC1lYXN5LWNyb3AvaXNzdWVzLzYpXG4gICAgY29uc3QgcmVzdHJpY3RlZFBvc2l0aW9uID0gcmVzdHJpY3RQb3NpdGlvbihcbiAgICAgIHRoaXMucHJvcHMuY3JvcCxcbiAgICAgIHRoaXMuaW1hZ2VTaXplLFxuICAgICAgdGhpcy5zdGF0ZS5jcm9wU2l6ZSxcbiAgICAgIHRoaXMucHJvcHMuem9vbVxuICAgIClcbiAgICBjb25zdCB7IGNyb3BwZWRBcmVhUGVyY2VudGFnZXMsIGNyb3BwZWRBcmVhUGl4ZWxzIH0gPSBjb21wdXRlQ3JvcHBlZEFyZWEoXG4gICAgICByZXN0cmljdGVkUG9zaXRpb24sXG4gICAgICB0aGlzLmltYWdlU2l6ZSxcbiAgICAgIHRoaXMuc3RhdGUuY3JvcFNpemUsXG4gICAgICB0aGlzLnByb3BzLnpvb21cbiAgICApXG4gICAgdGhpcy5wcm9wcy5vbkNyb3BDb21wbGV0ZSAmJlxuICAgICAgdGhpcy5wcm9wcy5vbkNyb3BDb21wbGV0ZShjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLCBjcm9wcGVkQXJlYVBpeGVscylcbiAgfVxuXG4gIHJlY29tcHV0ZUNyb3BQb3NpdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHJlc3RyaWN0UG9zaXRpb24oXG4gICAgICB0aGlzLnByb3BzLmNyb3AsXG4gICAgICB0aGlzLmltYWdlU2l6ZSxcbiAgICAgIHRoaXMuc3RhdGUuY3JvcFNpemUsXG4gICAgICB0aGlzLnByb3BzLnpvb21cbiAgICApXG4gICAgdGhpcy5wcm9wcy5vbkNyb3BDaGFuZ2UobmV3UG9zaXRpb24pXG4gICAgdGhpcy5lbWl0Q3JvcERhdGEoKVxuICB9XG5cbiAgb25JbWdFcnJvciA9ICgpID0+IHtcbiAgICBjb25zdCBjcm9wU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLnByb3BzLndpZGdldEFyZWEud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMucHJvcHMud2lkZ2V0QXJlYS5oZWlnaHRcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNyb3BTaXplOiBjcm9wU2l6ZVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgdGhpcy5zY3JlZW5XaWR0aCA9IHdpZHRoXG4gICAgdGhpcy5zY3JlZW5IZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgaXNSVEwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29udGV4dC5pc1JUTFxuICAgIGNvbnN0IHtcbiAgICAgIGNyb3A6IHsgeCwgeSB9LFxuICAgICAgem9vbSxcbiAgICAgIHNob3dHcmlkLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBzdHlsZTogeyAvKiBjb250YWluZXJTdHlsZSwgY3JvcEFyZWFTdHlsZSwgaW1hZ2VTdHlsZSAqLyB9LFxuICAgICAgY2xhc3NlczogeyBjb250YWluZXJDbGFzc05hbWUsIGNyb3BBcmVhQ2xhc3NOYW1lLCBpbWFnZUNsYXNzTmFtZSB9XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17dGhpcy5nZXRTdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e3RoaXMub25Nb3VzZURvd259XG4gICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5vblRvdWNoU3RhcnR9XG4gICAgICAgIGRhdGEtdGVzdGlkPSdjb250YWluZXInXG4gICAgICAgIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxuICAgICAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiB0aGlzLnByb3BzLndpZGdldEFyZWEudG9wLFxuICAgICAgICAgIGxlZnQ6IGlzUlRMID8gbnVsbCA6IHRoaXMucHJvcHMud2lkZ2V0QXJlYS5sZWZ0LFxuICAgICAgICAgIHJpZ2h0OiBpc1JUTCA/IChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gdGhpcy5wcm9wcy53aWRnZXRBcmVhLnJpZ2h0KSA6IG51bGwsXG4gICAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMud2lkZ2V0QXJlYS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucHJvcHMud2lkZ2V0QXJlYS5oZWlnaHRcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXsoZG9tKSA9PiB7IHRoaXMuY29udGFpbmVyID0gZG9tIH19XG4gICAgICA+XG4gICAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodCBvblJlc2l6ZT17dGhpcy5vblJlc2l6ZX0gLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5pbWFnZX1cbiAgICAgICAgICByZWY9eyhkb20pID0+IHsgdGhpcy5pbWFnZSA9IGRvbSB9fVxuICAgICAgICAgIG9uTG9hZD17dGhpcy5vbkltZ0xvYWR9XG4gICAgICAgICAgb25FcnJvcj17dGhpcy5vbkltZ0Vycm9yfVxuICAgICAgICAgIGFsdD0nJ1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weCkgc2NhbGUoJHt6b29tfSlgLFxuICAgICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17aW1hZ2VDbGFzc05hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLmNyb3BTaXplICYmIChcbiAgICAgICAgICA8Q3JvcEFyZWFcbiAgICAgICAgICAgIG9uQ2FuY2VsQ3JvcD17dGhpcy5wcm9wcy5vbkNhbmNlbENyb3B9XG4gICAgICAgICAgICBvbkNvbmZpcm1Dcm9wPXt0aGlzLnByb3BzLm9uQ29uZmlybUNyb3B9XG4gICAgICAgICAgICBzaG93R3JpZD17c2hvd0dyaWR9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5zdGF0ZS5jcm9wU2l6ZS53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmNyb3BTaXplLmhlaWdodFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3JvcEFyZWFDbGFzc05hbWV9XG4gICAgICAgICAgICBzdmdWaWV3Qm94PXt0aGlzLnByb3BzLnN2Z1ZpZXdCb3h9XG4gICAgICAgICAgICBzdmdQYXRoPXt0aGlzLnByb3BzLnN2Z1BhdGh9XG4gICAgICAgICAgICBjcm9wU2hhcGU9e3RoaXMucHJvcHMuY3JvcFNoYXBlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMud2lkZ2V0SWR9XG4gICAgICAgICAgICBzY3JlZW5XaWR0aD17dGhpcy5zY3JlZW5XaWR0aH1cbiAgICAgICAgICAgIHNjcmVlbkhlaWdodD17dGhpcy5zY3JlZW5IZWlnaHR9XG4gICAgICAgICAgICB3aWRnZXRBcmVhPXt0aGlzLnByb3BzLndpZGdldEFyZWF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnNTAlJywgdG9wOiAnNTAlJyB9fSBjbGFzc05hbWU9J2ppbXUtc2Vjb25kYXJ5LWxvYWRpbmcnIC8+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgeyB0eXBlIEltYWdlUmVzb3VyY2VJdGVtSW5mbywgQXBwUmVzb3VyY2VNYW5hZ2VyIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IG1vZHVsZUxvYWRlciwgUmVzb3VyY2VUeXBlIH0gZnJvbSAnamltdS1jb3JlJ1xuLyoqXG4gKiBDb21wdXRlIHRoZSBkaW1lbnNpb24gb2YgdGhlIGNyb3AgYXJlYSBiYXNlZCBvbiBpbWFnZSBzaXplIGFuZCBhc3BlY3QgcmF0aW9cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbWdXaWR0aCB3aWR0aCBvZiB0aGUgc3JjIGltYWdlIGluIHBpeGVsc1xuICogQHBhcmFtIHtudW1iZXJ9IGltZ0hlaWdodCBoZWlnaHQgb2YgdGhlIHNyYyBpbWFnZSBpbiBwaXhlbHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDcm9wU2l6ZSAoaW1nV2lkdGgsIGltZ0hlaWdodCwgYXNwZWN0KSB7XG4gIGlmIChpbWdXaWR0aCA+PSBpbWdIZWlnaHQgKiBhc3BlY3QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGltZ0hlaWdodCAqIGFzcGVjdCxcbiAgICAgIGhlaWdodDogaW1nSGVpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGltZ1dpZHRoLFxuICAgIGhlaWdodDogaW1nV2lkdGggLyBhc3BlY3RcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhIG5ldyBpbWFnZSBwb3NpdGlvbiBzdGF5cyBpbiB0aGUgY3JvcCBhcmVhLlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5IG51bWJlcn19IHBvc2l0aW9uIG5ldyB4L3kgcG9zaXRpb24gcmVxdWVzdGVkIGZvciB0aGUgaW1hZ2VcbiAqIEBwYXJhbSB7e3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyfX0gaW1hZ2VTaXplIHdpZHRoL2hlaWdodCBvZiB0aGUgc3JjIGltYWdlXG4gKiBAcGFyYW0ge3t3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn19IGNyb3BTaXplIHdpZHRoL2hlaWdodCBvZiB0aGUgY3JvcCBhcmVhXG4gKiBAcGFyYW0ge251bWJlcn0gem9vbSB6b29tIHZhbHVlXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeSBudW1iZXJ9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdHJpY3RQb3NpdGlvbiAocG9zaXRpb24sIGltYWdlU2l6ZSwgY3JvcFNpemUsIHpvb20pIHtcbiAgcmV0dXJuIHtcbiAgICB4OiByZXN0cmljdFBvc2l0aW9uQ29vcmQocG9zaXRpb24ueCwgaW1hZ2VTaXplLndpZHRoLCBjcm9wU2l6ZS53aWR0aCwgem9vbSksXG4gICAgeTogcmVzdHJpY3RQb3NpdGlvbkNvb3JkKHBvc2l0aW9uLnksIGltYWdlU2l6ZS5oZWlnaHQsIGNyb3BTaXplLmhlaWdodCwgem9vbSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZXN0cmljdFBvc2l0aW9uQ29vcmQgKHBvc2l0aW9uLCBpbWFnZVNpemUsIGNyb3BTaXplLCB6b29tKSB7XG4gIGNvbnN0IG1heFBvc2l0aW9uID0gKGltYWdlU2l6ZSAqIHpvb20pIC8gMiAtIGNyb3BTaXplIC8gMlxuICByZXR1cm4gTWF0aC5taW4obWF4UG9zaXRpb24sIE1hdGgubWF4KHBvc2l0aW9uLCAtbWF4UG9zaXRpb24pKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2VCZXR3ZWVuUG9pbnRzIChwb2ludEEsIHBvaW50Qikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50QS55IC0gcG9pbnRCLnksIDIpICsgTWF0aC5wb3cocG9pbnRBLnggLSBwb2ludEIueCwgMikpXG59XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgb3V0cHV0IGNyb3BwZWQgYXJlYSBvZiB0aGUgaW1hZ2UgaW4gcGVyY2VudGFnZXMgYW5kIHBpeGVscy5cbiAqIHgveSBhcmUgdGhlIHRvcC1sZWZ0IGNvb3JkaW5hdGVzIG9uIHRoZSBzcmMgaW1hZ2VcbiAqIEBwYXJhbSB7e3g6IG51bWJlciwgeSBudW1iZXJ9fSBjcm9wIHgveSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBjZW50ZXIgb2YgdGhlIGltYWdlXG4gKiBAcGFyYW0ge3t3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbmF0dXJhbFdpZHRoOiBudW1iZXIsIG5hdHVyZWxIZWlnaHQ6IG51bWJlcn19IGltYWdlU2l6ZSB3aWR0aC9oZWlnaHQgb2YgdGhlIHNyYyBpbWFnZSAoZGVmYXVsdCBpcyBzaXplIG9uIHRoZSBzY3JlZW4sIG5hdHVyYWwgaXMgdGhlIG9yaWdpbmFsIHNpemUpXG4gKiBAcGFyYW0ge3t3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn19IGNyb3BTaXplIHdpZHRoL2hlaWdodCBvZiB0aGUgY3JvcCBhcmVhXG4gKiBAcGFyYW0ge251bWJlcn0gem9vbSB6b29tIHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlQ3JvcHBlZEFyZWEgKGNyb3AsIGltZ1NpemUsIGNyb3BTaXplLCB6b29tKSB7XG4gIGNvbnN0IGNyb3BwZWRBcmVhUGVyY2VudGFnZXMgPSB7XG4gICAgeDogbGltaXRBcmVhKFxuICAgICAgMTAwLFxuICAgICAgKCgoaW1nU2l6ZS53aWR0aCAtIGNyb3BTaXplLndpZHRoIC8gem9vbSkgLyAyIC0gY3JvcC54IC8gem9vbSkgLyBpbWdTaXplLndpZHRoKSAqIDEwMFxuICAgICksXG4gICAgeTogbGltaXRBcmVhKFxuICAgICAgMTAwLFxuICAgICAgKCgoaW1nU2l6ZS5oZWlnaHQgLSBjcm9wU2l6ZS5oZWlnaHQgLyB6b29tKSAvIDIgLSBjcm9wLnkgLyB6b29tKSAvIGltZ1NpemUuaGVpZ2h0KSAqIDEwMFxuICAgICksXG4gICAgd2lkdGg6IGxpbWl0QXJlYSgxMDAsICgoY3JvcFNpemUud2lkdGggLyBpbWdTaXplLndpZHRoKSAqIDEwMCkgLyB6b29tKSxcbiAgICBoZWlnaHQ6IGxpbWl0QXJlYSgxMDAsICgoY3JvcFNpemUuaGVpZ2h0IC8gaW1nU2l6ZS5oZWlnaHQpICogMTAwKSAvIHpvb20pXG4gIH1cbiAgY29uc3QgY3JvcHBlZEFyZWFQaXhlbHMgPSB7XG4gICAgeDogbGltaXRBcmVhKGltZ1NpemUubmF0dXJhbFdpZHRoLCAoY3JvcHBlZEFyZWFQZXJjZW50YWdlcy54ICogaW1nU2l6ZS5uYXR1cmFsV2lkdGgpIC8gMTAwKSxcbiAgICB5OiBsaW1pdEFyZWEoaW1nU2l6ZS5uYXR1cmFsSGVpZ2h0LCAoY3JvcHBlZEFyZWFQZXJjZW50YWdlcy55ICogaW1nU2l6ZS5uYXR1cmFsSGVpZ2h0KSAvIDEwMCksXG4gICAgd2lkdGg6IGxpbWl0QXJlYShcbiAgICAgIGltZ1NpemUubmF0dXJhbFdpZHRoLFxuICAgICAgKGNyb3BwZWRBcmVhUGVyY2VudGFnZXMud2lkdGggKiBpbWdTaXplLm5hdHVyYWxXaWR0aCkgLyAxMDBcbiAgICApLFxuICAgIGhlaWdodDogbGltaXRBcmVhKFxuICAgICAgaW1nU2l6ZS5uYXR1cmFsSGVpZ2h0LFxuICAgICAgKGNyb3BwZWRBcmVhUGVyY2VudGFnZXMuaGVpZ2h0ICogaW1nU2l6ZS5uYXR1cmFsSGVpZ2h0KSAvIDEwMFxuICAgIClcbiAgfVxuICByZXR1cm4geyBjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLCBjcm9wcGVkQXJlYVBpeGVscyB9XG59XG5cbi8qKlxuICogRW5zdXJlIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBiZXR3ZWVuIDAgYW5kIG1heFxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGxpbWl0QXJlYSAobWF4LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCgwLCB2YWx1ZSkpXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwb2ludCB0aGF0IGlzIHRoZSBjZW50ZXIgb2YgcG9pbnQgYSBhbmQgYlxuICogQHBhcmFtIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fSBhXG4gKiBAcGFyYW0ge3t4OiBudW1iZXIsIHk6IG51bWJlcn19IGJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRlciAoYSwgYikge1xuICByZXR1cm4ge1xuICAgIHg6IChiLnggKyBhLngpIC8gMixcbiAgICB5OiAoYi55ICsgYS55KSAvIDJcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3JvcHBlZEltZ0Jsb2JVcmwgKGltYWdlU3JjLCBwaXhlbENyb3AsIG9yaWdpbklkPzogc3RyaW5nKTogUHJvbWlzZTxJbWFnZVJlc291cmNlSXRlbUluZm8+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIUhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZS50b0Jsb2IpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUsICd0b0Jsb2InLCB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBiaW5TdHIgPSBhdG9iKGNhbnZhcy50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkuc3BsaXQoJywnKVsxXSlcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGJpblN0ci5sZW5ndGhcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KGxlbilcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSBiaW5TdHIuY2hhckNvZGVBdChpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgQmxvYihbYXJyXSwgeyB0eXBlOiB0eXBlIHx8ICdpbWFnZS9wbmcnIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnY3Jvc3NPcmlnaW4nLCAnYW5vbnltb3VzJylcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNyY1xuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgY2FudmFzLndpZHRoID0gcGl4ZWxDcm9wLndpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gcGl4ZWxDcm9wLmhlaWdodFxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgaW1hZ2UsXG4gICAgICAgIHBpeGVsQ3JvcC54LFxuICAgICAgICBwaXhlbENyb3AueSxcbiAgICAgICAgcGl4ZWxDcm9wLndpZHRoLFxuICAgICAgICBwaXhlbENyb3AuaGVpZ2h0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBwaXhlbENyb3Aud2lkdGgsXG4gICAgICAgIHBpeGVsQ3JvcC5oZWlnaHRcbiAgICAgIClcblxuICAgICAgY2FudmFzLnRvQmxvYihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICBjb25zdCBvYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICAgIGNvbnN0IHJlc291cmNlSXRlbUluZm86IEltYWdlUmVzb3VyY2VJdGVtSW5mbyA9IHtcbiAgICAgICAgICBmaWxlOiBvYmplY3RVUkwsXG4gICAgICAgICAgZmlsZU5hbWU6IChuZXcgRGF0ZSgpLmdldFRpbWUoKSkudG9TdHJpbmcoKSArICcuanBlZycsXG4gICAgICAgICAgdHlwZTogUmVzb3VyY2VUeXBlLkltYWdlLFxuICAgICAgICAgIHVybDogb2JqZWN0VVJMLFxuICAgICAgICAgIGJsb2JVcmw6IG9iamVjdFVSTCxcbiAgICAgICAgICByZWZlcmVkSWRzOiBbXSxcbiAgICAgICAgICBmaWxlRm9ybWF0OiAnaW1hZ2UvanBlZycsXG4gICAgICAgICAgb3JpZ2luSWQ6IG9yaWdpbklkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyKSB7XG4gICAgICAgICAgY29uc3QgYXBwUmVzb3VyY2VNYW5hZ2VyID0gQXBwUmVzb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICAgICAgICBBcHBSZXNvdXJjZU1hbmFnZXIuZ2V0QmxvYkJ5QmxvYlVybChyZXNvdXJjZUl0ZW1JbmZvLmZpbGUgYXMgc3RyaW5nKS50aGVuKGFzeW5jIChibG9iKSA9PiB7XG4gICAgICAgICAgICByZXNvdXJjZUl0ZW1JbmZvLmZpbGUgPSBibG9iXG4gICAgICAgICAgICBhcHBSZXNvdXJjZU1hbmFnZXIudXBMb2FkQXBwUmVzb3VyY2UocmVzb3VyY2VJdGVtSW5mbylcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZUl0ZW1JbmZvLm9yaWdpbklkKSB7XG4gICAgICAgICAgICAgIEFwcFJlc291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZUltYWdlUmVzb3VyY2VJdGVtSW5mbyhyZXNvdXJjZUl0ZW1JbmZvKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICByZXNvbHZlKHJlc291cmNlSXRlbUluZm8pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlTG9hZGVyLmdldEppbXVGb3JCdWlsZGVyTW9kdWxlcygpLmFwcEJ1aWxkZXJTeW5jLmxldEJ1aWxkZXJBZGRSZXNvdXJjZShyZXNvdXJjZUl0ZW1JbmZvKVxuICAgICAgICAgIHJlc29sdmUocmVzb3VyY2VJdGVtSW5mbylcbiAgICAgICAgfVxuICAgICAgfSwgJ2ltYWdlL2pwZWcnLCAwLjgpXG4gICAgfSlcblxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgcmVqZWN0KClcbiAgICB9KVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9saWIvaW1hZ2Vjcm9wJ1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9