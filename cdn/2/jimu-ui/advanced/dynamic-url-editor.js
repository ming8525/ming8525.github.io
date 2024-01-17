System.register(["jimu-core","jimu-theme","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
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

/***/ "./jimu-icons/svg/outlined/data/data.svg":
/*!***********************************************!*\
  !*** ./jimu-icons/svg/outlined/data/data.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15 3.5v9c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5v-9C1 1.567 4.134 0 8 0s7 1.567 7 3.5M2 5.304V6.5C2 7.692 4.615 9 8 9s6-1.308 6-2.5V5.304C12.775 6.32 10.546 7 8 7s-4.775-.68-6-1.696M8 10c2.546 0 4.775-.68 6-1.696V9.5c0 1.192-2.615 2.5-6 2.5s-6-1.308-6-2.5V8.304C3.225 9.32 5.454 10 8 10m6 1.304C12.775 12.32 10.546 13 8 13s-4.775-.68-6-1.696V12.5C2 13.692 4.615 15 8 15s6-1.308 6-2.5zM14 3.5C14 4.692 11.385 6 8 6S2 4.692 2 3.5 4.615 1 8 1s6 1.308 6 2.5\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/data/url.svg":
/*!**********************************************!*\
  !*** ./jimu-icons/svg/outlined/data/url.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8.39 3.425 5.553.588a2.006 2.006 0 0 0-2.837 0L.588 2.716a2.006 2.006 0 0 0 0 2.837L3.425 8.39a2.006 2.006 0 0 0 2.837 0l.71-.709 1.347 1.347-.71.71a2.006 2.006 0 0 0 0 2.837l2.838 2.837a2.006 2.006 0 0 0 2.837 0l2.128-2.128a2.006 2.006 0 0 0 0-2.837L12.575 7.61a2.006 2.006 0 0 0-2.837 0l-.71.709-1.347-1.347.71-.71a2.006 2.006 0 0 0 0-2.837M6.972 6.262l.709-.709a1.003 1.003 0 0 0 0-1.419L4.844 1.297a1.003 1.003 0 0 0-1.419 0L1.297 3.425a1.003 1.003 0 0 0 0 1.419L4.134 7.68a1.003 1.003 0 0 0 1.419 0l.71-.71-.894-.892a.501.501 0 0 1 .71-.71zm2.056 3.476.6.599a.502.502 0 0 0 .709-.71l-.6-.599.71-.709a1.003 1.003 0 0 1 1.419 0l2.837 2.837a1.003 1.003 0 0 1 0 1.419l-2.128 2.128a1.003 1.003 0 0 1-1.419 0L8.32 11.866a1.003 1.003 0 0 1 0-1.419z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/data/data.tsx":
/*!*******************************************!*\
  !*** ./jimu-icons/outlined/data/data.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataOutlined: () => (/* binding */ DataOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_data_data_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/data/data.svg */ "./jimu-icons/svg/outlined/data/data.svg");
/* harmony import */ var _svg_outlined_data_data_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_data_data_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const DataOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_data_data_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/data/url.tsx":
/*!******************************************!*\
  !*** ./jimu-icons/outlined/data/url.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlOutlined: () => (/* binding */ UrlOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_data_url_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/data/url.svg */ "./jimu-icons/svg/outlined/data/url.svg");
/* harmony import */ var _svg_outlined_data_url_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_data_url_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const UrlOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_data_url_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-ui/advanced/lib/dynamic-url-editor/components/dynamic-url-editor.tsx":
/*!***********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/dynamic-url-editor/components/dynamic-url-editor.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicUrlEditor: () => (/* binding */ DynamicUrlEditor),
/* harmony export */   _DynamicUrlEditor: () => (/* binding */ _DynamicUrlEditor)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _url_info_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-info-selector */ "./jimu-ui/advanced/lib/dynamic-url-editor/components/url-info-selector.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_icons_outlined_data_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/data/url */ "./jimu-icons/outlined/data/url.tsx");
/* harmony import */ var jimu_icons_outlined_data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/data/data */ "./jimu-icons/outlined/data/data.tsx");
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






const { useState, useRef } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const MODIFIERS = [
    {
        name: 'preventOverflow',
        options: {
            altAxis: true
        }
    },
    (0,jimu_ui__WEBPACK_IMPORTED_MODULE_1__.getFallbackPlacementsModifier)(['left-start', 'left-end'], true)
];
const expOffset = [0, 8];
const hasEmbedTag = (delta) => {
    var _a;
    if (!((_a = delta === null || delta === void 0 ? void 0 : delta.ops) === null || _a === void 0 ? void 0 : _a.length))
        return false;
    return delta.ops.some((op) => {
        var _a;
        const insert = (_a = op === null || op === void 0 ? void 0 : op.insert) !== null && _a !== void 0 ? _a : {};
        return insert.urlInfo || insert.expression || insert.urlinfo;
    });
};
const _DynamicUrlEditor = (props) => {
    const { className, editorRef, useDataSourcesEnabled, useDataSources, onChange, widgetId, value, selectWidgets, RichExpressionBuilder, useMixinKeyboardEnterModules, useEditorSelectionFormats, richTextEditorUtils, RichEditorCore, Delta, ExpressionBuilderType } = props, others = __rest(props, ["className", "editorRef", "useDataSourcesEnabled", "useDataSources", "onChange", "widgetId", "value", "selectWidgets", "RichExpressionBuilder", "useMixinKeyboardEnterModules", "useEditorSelectionFormats", "richTextEditorUtils", "RichEditorCore", "Delta", "ExpressionBuilderType"]);
    const [urlPopper, setUrlPopper] = useState(false);
    const [dataPopper, setDataPopper] = useState(false);
    const urlRef = useRef(null);
    const dataRef = useRef(null);
    const [editor, setEditor] = jimu_ui__WEBPACK_IMPORTED_MODULE_1__.hooks.useForwardValueRef(editorRef);
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages);
    const [formats, selection] = useEditorSelectionFormats(editor, false);
    const [expressionStr, setExpressionStr] = useState(value);
    const [editorFocus, setEditorFocus] = useState(false);
    //When pasting, only `urlInfo` and `expression` are allowed, and other formats are converted to pure string
    const pasteMatcherCallback = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useCallback((_, delta) => {
        if (hasEmbedTag(delta)) {
            return delta;
        }
        const text = delta
            .map((op) => {
            if (typeof op.insert === 'string') {
                return op.insert;
            }
            else {
                return '';
            }
        })
            .join('');
        return new Delta().insert(text);
    }, [Delta]);
    //Customize the quill modules, hide the toolbar, forbid shortcut keys and process pasted text
    const modules = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return {
            toolbar: false,
            keyboard: {
                bindings: {
                    bold: {
                        handler: () => { }
                    },
                    italic: {
                        handler: () => { }
                    },
                    underline: {
                        handler: () => { }
                    },
                    enter: {
                        key: 13,
                        handler: () => { }
                    },
                    tab: {
                        key: 9,
                        handler: () => { }
                    }
                }
            },
            clipboard: {
                matchers: [['*', pasteMatcherCallback]]
            }
        };
    }, [pasteMatcherCallback]);
    // modules = useMixinKeyboardEnterModules(modules, editor)
    const toggleUrlPopper = () => {
        setUrlPopper(!urlPopper);
        if (dataPopper)
            setDataPopper(false);
    };
    const toggleDataPopper = () => {
        setDataPopper(!dataPopper);
        if (urlPopper)
            setUrlPopper(false);
    };
    const closeUrlPopper = () => {
        setUrlPopper(false);
        if (urlPopper) {
            urlRef.current.focus();
        }
    };
    const closeDataPopper = () => {
        setDataPopper(false);
        if (dataPopper) {
            dataRef.current.focus();
        }
    };
    const clearEmptyTag = (html) => {
        const EXP_TAG_REGEXP = /\<exp((?!\<exp).)+\<\/exp\>/gmi;
        const hasExpressionTag = html === null || html === void 0 ? void 0 : html.match(EXP_TAG_REGEXP);
        let filterHtml = html;
        if (hasExpressionTag) {
            hasExpressionTag.forEach(exptag => {
                var _a, _b;
                const tagContent = (_a = exptag.match(/<exp[^>]*>([\s\S]*?)<\/exp>/)) === null || _a === void 0 ? void 0 : _a[1];
                const matchSpan = tagContent.match(/<span[^>]*>([\s\S]*?)<\/span>/);
                const spanContent = matchSpan && ((_b = tagContent.match(/<span[^>]*>([\s\S]*?)<\/span>/)) === null || _b === void 0 ? void 0 : _b[1]);
                if (!tagContent.trim() || (matchSpan && !spanContent.trim())) {
                    filterHtml = filterHtml.replace(exptag, '');
                }
            });
        }
        return filterHtml;
    };
    const handleChange = (html) => {
        if ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.isKeyboardMode)()) {
            setUrlPopper(false);
            setDataPopper(false);
        }
        setExpressionStr(clearEmptyTag(html));
    };
    const handleClick = () => {
        if (!editorFocus) {
            setEditorFocus(true);
            richTextEditorUtils.setEditorCursorEnd(editor);
        }
    };
    const handleBlur = () => {
        setEditorFocus(false);
        onChange(expressionStr);
    };
    const onKeyDown = evt => {
        if (!evt || !evt.target)
            return;
        if (evt.key === 'Enter') {
            evt.target.blur();
        }
        if (evt.key === 'Tab' && !evt.shiftKey) {
            evt.preventDefault();
            urlRef.current.focus();
        }
    };
    const onUrlEscKeyDown = e => {
        if (editor === null || editor === void 0 ? void 0 : editor.root.contains(e === null || e === void 0 ? void 0 : e.target))
            return;
        if (e.key === 'Esc' || e.key === 'Escape') {
            closeUrlPopper();
        }
    };
    const onDataEscKeyDown = e => {
        if (editor === null || editor === void 0 ? void 0 : editor.root.contains(e === null || e === void 0 ? void 0 : e.target))
            return;
        if (e.key === 'Esc' || e.key === 'Escape') {
            closeDataPopper();
        }
    };
    // When unMounted, change the html
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useUnmount(() => {
        onChange(expressionStr);
    });
    const dataPopperAvailable = useDataSources && useDataSources.length > 0;
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [className]: !!className }) },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'component-dynamic-url-editor' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichEditorCore, Object.assign({ modules: modules, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('rich-text-editor'), onChange: handleChange, onClick: handleClick, onBlur: handleBlur, editorRef: setEditor, onKeyDown: onKeyDown, autoFocus: true, defaultValue: value, placeholder: translate('websitePlaceholder') }, others)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'dynamic-url-editor-btngroup' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: 'sm', icon: true, onClick: toggleUrlPopper, ref: urlRef, active: urlPopper, type: 'tertiary', title: translate('urlInfo'), className: 'jimu-outline-inside' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_data_url__WEBPACK_IMPORTED_MODULE_4__.UrlOutlined, null)),
                useDataSourcesEnabled &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: 'sm', icon: true, onClick: toggleDataPopper, ref: dataRef, active: dataPopper, type: 'tertiary', disabled: !dataPopperAvailable, title: dataPopperAvailable ? translate('data') : translate('dataUnavailableTips'), className: 'jimu-outline-inside' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_data_data__WEBPACK_IMPORTED_MODULE_5__.DataOutlined, null))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { open: urlPopper, disableResize: true, placement: 'left-start', reference: urlRef.current, modifiers: MODIFIERS, showArrow: true, toggle: closeUrlPopper, trapFocus: true, autoFocus: true, "aria-label": translate('urlInfo'), onKeyDown: onUrlEscKeyDown },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: 180, height: 300 } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.PanelHeader, { className: 'px-4 py-2', title: translate('urlInfo'), onClose: closeUrlPopper }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_url_info_selector__WEBPACK_IMPORTED_MODULE_2__.UrlInfoSelector, { editor: editor, className: className, selectWidgets: selectWidgets, selection: selection, formats: formats }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { open: dataPopper, disableResize: true, placement: 'left-start', reference: dataRef.current, modifiers: MODIFIERS, showArrow: true, toggle: closeDataPopper, offset: expOffset, trapFocus: true, autoFocus: true, "aria-label": translate('dataPanelTitle'), onKeyDown: onDataEscKeyDown },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
            width: 240px;
            height: 360px;
            .field-list{
              height: calc(100% - 200px) !important;
            }
          ` },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.PanelHeader, { className: 'px-4 py-2', title: translate('dataPanelTitle'), onClose: closeDataPopper }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichExpressionBuilder, { widgetId: widgetId, source: 'user', useDataSources: useDataSources, editor: editor, formats: formats, editable: false, autoInsertSpace: false, types: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([ExpressionBuilderType.Attribute]), selection: selection }))))));
};
class _DynamicUrlEditorWrapper extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            moduleLoaded: false
        };
    }
    componentDidMount() {
        Promise.all([
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/rich-text-editor'),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.loadModule('jimu-ui/advanced/expression-builder')
        ]).then(res => {
            const [{ RichExpressionBuilder, useEditorSelectionFormats, richTextEditorUtils, RichEditorCore, Delta, useMixinKeyboardEnterModules }, { ExpressionBuilderType }] = res;
            if (!this.state.moduleLoaded) {
                this.RichExpressionBuilder = RichExpressionBuilder;
                this.useEditorSelectionFormats = useEditorSelectionFormats;
                this.richTextEditorUtils = richTextEditorUtils;
                this.RichEditorCore = RichEditorCore;
                this.ExpressionBuilderType = ExpressionBuilderType;
                this.Delta = Delta;
                this.useMixinKeyboardEnterModules = useMixinKeyboardEnterModules;
                this.setState({ moduleLoaded: true });
            }
        });
    }
    render() {
        if (!this.state.moduleLoaded) {
            return null;
        }
        return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DynamicUrlEditor, Object.assign({}, this.props, { Delta: this.Delta, useMixinKeyboardEnterModules: this.useMixinKeyboardEnterModules, RichExpressionBuilder: this.RichExpressionBuilder, useEditorSelectionFormats: this.useEditorSelectionFormats, richTextEditorUtils: this.richTextEditorUtils, RichEditorCore: this.RichEditorCore, ExpressionBuilderType: this.ExpressionBuilderType }));
    }
}
const DynamicUrlEditor = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_3__.withStyles)(_DynamicUrlEditorWrapper, 'DynamicUrlEditor');


/***/ }),

/***/ "./jimu-ui/advanced/lib/dynamic-url-editor/components/url-info-selector.tsx":
/*!**********************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/dynamic-url-editor/components/url-info-selector.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlInfoSelector: () => (/* binding */ UrlInfoSelector),
/* harmony export */   _UrlInfoSelector: () => (/* binding */ _UrlInfoSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");



const { useSelector } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux;
const { useState } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const isSelectShow = false; // Temporarily hides the ability to select embed widget.
const getQueryParams = (SearchObject) => {
    const queryParams = [];
    Object.keys(SearchObject).forEach(key => {
        if (key !== 'draft') {
            queryParams.push({ key, value: SearchObject[key] });
        }
    });
    return queryParams;
};
const _UrlInfoSelector = (props) => {
    const { editor, className, selectWidgets, selection } = props;
    const appQueryObject = useSelector((state) => {
        const realState = state.appStateInBuilder ? state.appStateInBuilder : state;
        return realState.queryObject;
    });
    const getSelectedSourceUrlObject = (activeSource) => {
        const widgetIndex = selectWidgets.findIndex(x => x.id === activeSource);
        let selectedSourceUrlObject = {};
        if (widgetIndex > -1) {
            const exp = selectWidgets[widgetIndex].config.expression;
            let selectedSourceUrl = '';
            if (exp)
                selectedSourceUrl = exp.replace(/<[^>]+>/g, '');
            if (selectedSourceUrl && selectedSourceUrl.includes('?')) {
                const search = selectedSourceUrl.substr(selectedSourceUrl.indexOf('?'));
                selectedSourceUrlObject = jimu_core__WEBPACK_IMPORTED_MODULE_0__.queryString.parse(search);
            }
        }
        else {
            selectedSourceUrlObject = appQueryObject;
        }
        return selectedSourceUrlObject;
    };
    const [activeSource, setActiveSource] = useState('appURL');
    const [urlParams, setUrlParams] = useState(getQueryParams(getSelectedSourceUrlObject(activeSource)));
    const insertExpression = (uniqueid, name, urlInfo, selection) => {
        editor.deleteText(selection.index, selection.length);
        editor.insertEmbed(selection.index, 'urlInfo', { uniqueid, name, urlInfo }, 'user');
        editor.setSelection(selection.index + 1, 'user');
        editor.focus();
    };
    const handleChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useEventCallback((urlInfo) => {
        // const selection = editor.getSelection(false)
        if (selection == null) {
            return;
        }
        const imUrlInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(urlInfo);
        const name = imUrlInfo.name;
        const uniqueid = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID();
        insertExpression(uniqueid, name, urlInfo, selection);
    });
    const onSelectedParamChange = (selectedItem) => {
        const key = selectedItem.key;
        const part = {
            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.UrlInfoPartType.Urlinfo,
            urlsearch: `{${activeSource}.search.${key}}`
        };
        handleChange({ name: part.urlsearch, parts: [part] });
    };
    const getSelectOptions = () => {
        const optionConfig = [{
                id: 'appURL',
                name: 'App Url'
            }];
        // Temporarily hides the ability to read url from another embed
        // if(selectWidgets) {
        //   selectWidgets.forEach(item => {
        //     optionConfig.push({
        //       id: item.id,
        //       name: item.label
        //     })
        //   })
        // }
        return optionConfig.map(item => {
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: item.id, value: item.id, title: item.name }, item.name));
        });
    };
    const infoSourceChange = e => {
        const sourceValue = e.target.value;
        setActiveSource(sourceValue);
        setUrlParams(getQueryParams(getSelectedSourceUrlObject(sourceValue)));
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('w-100 h-100', { [className]: !!className }) },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'component-url-info-selector w-100 h-100' },
            isSelectShow && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'p-4' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: 'sm', value: activeSource, onChange: infoSourceChange, className: 'top-drop' }, getSelectOptions())),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'param-list px-4' }, urlParams.map(item => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", { key: item.key, "aria-label": item.key, title: item.key, onClick: () => { onSelectedParamChange(item); }, onKeyDown: (evt) => {
                        if (evt.key === 'Enter' || evt.key === ' ') {
                            evt.stopPropagation();
                            onSelectedParamChange(item);
                        }
                    }, className: 'param-item text-truncate mt-2 p-1' }, `${item.key}`));
            })))));
};
const UrlInfoSelector = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.withStyles)(_UrlInfoSelector, 'UrlInfoSelector');


/***/ }),

/***/ "./jimu-ui/advanced/lib/dynamic-url-editor/index.tsx":
/*!***********************************************************!*\
  !*** ./jimu-ui/advanced/lib/dynamic-url-editor/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicUrlEditor: () => (/* reexport safe */ _components_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_0__.DynamicUrlEditor),
/* harmony export */   UrlInfoSelector: () => (/* reexport safe */ _components_url_info_selector__WEBPACK_IMPORTED_MODULE_1__.UrlInfoSelector)
/* harmony export */ });
/* harmony import */ var _components_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dynamic-url-editor */ "./jimu-ui/advanced/lib/dynamic-url-editor/components/dynamic-url-editor.tsx");
/* harmony import */ var _components_url_info_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/url-info-selector */ "./jimu-ui/advanced/lib/dynamic-url-editor/components/url-info-selector.tsx");





/***/ }),

/***/ "./jimu-ui/advanced/lib/dynamic-url-editor/styles/components/dynamic-url-editor.ts":
/*!*****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/dynamic-url-editor/styles/components/dynamic-url-editor.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamicUrlEditorStyles: () => (/* binding */ dynamicUrlEditorStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function dynamicUrlEditorStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .component-dynamic-url-editor{
      width: 100%;
      height: 100%;
      .ql-container{
        background-color: ${theme.colors.palette.light[200]};
      }
      .ql-editor{
        outline: none;
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(5)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
        p{
          word-break: break-all;
        }
        &:focus {
          border: 1px solid ${theme.colors.palette.primary[700]};
        }
      }
      .dynamic-url-editor-btngroup{
        background-color: ${theme.colors.palette.light[200]};
      }
    }
  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/dynamic-url-editor/styles/components/url-info-selector.ts":
/*!****************************************************************************************!*\
  !*** ./jimu-ui/advanced/lib/dynamic-url-editor/styles/components/url-info-selector.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlInfoSelectorStyles: () => (/* binding */ urlInfoSelectorStyles)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function urlInfoSelectorStyles(props) {
    const theme = props.theme;
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
    .component-url-info-selector{
      .param-list{
        height: calc(100% - 45px);
        overflow-y: auto;
        .param-item.param-item-selected{
          border: 1px solid ${theme.colors.primary};
        }
        .param-item{
          width: 100%;
          text-align: left;
          color: #fff;
          border: 1px solid transparent;
          cursor: pointer;
          background-color: ${theme.colors.palette.light[400]};
          user-select: none;
        }
        .param-item:hover{
          background-color: ${theme.colors.palette.light[500]};
        }
        .param-item:active.param-item:hover{
          background-color: ${theme.colors.white};
        }
      }
    }
  `;
}


/***/ }),

/***/ "./jimu-ui/advanced/lib/dynamic-url-editor/styles/index.ts":
/*!*****************************************************************!*\
  !*** ./jimu-ui/advanced/lib/dynamic-url-editor/styles/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicUrlEditor: () => (/* reexport safe */ _components_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_0__.dynamicUrlEditorStyles),
/* harmony export */   UrlInfoSelector: () => (/* reexport safe */ _components_url_info_selector__WEBPACK_IMPORTED_MODULE_1__.urlInfoSelectorStyles)
/* harmony export */ });
/* harmony import */ var _components_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dynamic-url-editor */ "./jimu-ui/advanced/lib/dynamic-url-editor/styles/components/dynamic-url-editor.ts");
/* harmony import */ var _components_url_info_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/url-info-selector */ "./jimu-ui/advanced/lib/dynamic-url-editor/styles/components/url-info-selector.ts");




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
  !*** ./jimu-ui/advanced/dynamic-url-editor.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicUrlEditor: () => (/* reexport safe */ _lib_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlEditor),
/* harmony export */   UrlInfoSelector: () => (/* reexport safe */ _lib_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_2__.UrlInfoSelector)
/* harmony export */ });
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _lib_dynamic_url_editor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dynamic-url-editor/styles */ "./jimu-ui/advanced/lib/dynamic-url-editor/styles/index.ts");
/* harmony import */ var _lib_dynamic_url_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dynamic-url-editor */ "./jimu-ui/advanced/lib/dynamic-url-editor/index.tsx");


(0,jimu_theme__WEBPACK_IMPORTED_MODULE_0__.registerStyles)('jimu-ui/advanced/dynamic-url-editor', _lib_dynamic_url_editor_styles__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamltdS11aS9hZHZhbmNlZC9keW5hbWljLXVybC1lZGl0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFFSztBQUUzQyxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUN2RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztJQUN0QixNQUFNLEVBQUUsU0FBUyxLQUFnQixLQUFLLEVBQWhCLE1BQU0sVUFBSyxLQUFLLEVBQWhDLGFBQXdCLENBQVE7SUFFdEMsTUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLGtGQUFLLFNBQVMsRUFBRSxPQUFPLElBQU0sTUFBYSxFQUFJO0lBQy9ELE9BQU8sMkRBQUMsR0FBRyxrQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxvRUFBRyxJQUFNLE1BQU0sRUFBSTtBQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYNEM7QUFFSTtBQUUxQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXdCLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRztJQUN0QixNQUFNLEVBQUUsU0FBUyxLQUFnQixLQUFLLEVBQWhCLE1BQU0sVUFBSyxLQUFLLEVBQWhDLGFBQXdCLENBQVE7SUFFdEMsTUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQywrQkFBK0IsRUFBRSxTQUFTLENBQUM7SUFDdEUsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLGtGQUFLLFNBQVMsRUFBRSxPQUFPLElBQU0sTUFBYSxFQUFJO0lBQy9ELE9BQU8sMkRBQUMsR0FBRyxrQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxtRUFBRyxJQUFNLE1BQU0sRUFBSTtBQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEQsZUFBZTtBQUM2SDtBQUNyQjtBQUNsRTtBQUlkO0FBQ21CO0FBQ0U7QUFDNUQsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyw0Q0FBSztBQUVsQyxNQUFNLFNBQVMsR0FBRztJQUNoQjtRQUNFLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLElBQUk7U0FDZDtLQUNGO0lBQ0Qsc0VBQTZCLENBQUMsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDO0NBQ2hFO0FBQ0QsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBdUJ4QixNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQWlCLEVBQUUsRUFBRTs7SUFDeEMsSUFBSSxDQUFDLFlBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxHQUFHLDBDQUFFLE1BQU07UUFBRSxPQUFPLEtBQUs7SUFDckMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFOztRQUMzQixNQUFNLE1BQU0sR0FBUSxRQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsTUFBTSxtQ0FBSSxFQUFFO1FBQ3BDLE9BQU8sTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxPQUFPO0lBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUFFTSxNQUFNLGlCQUFpQixHQUFHLENBQUMsS0FBbUMsRUFBc0IsRUFBRTtJQUMzRixNQUFNLEVBQ0osU0FBUyxFQUNULFNBQVMsRUFDVCxxQkFBcUIsRUFDckIsY0FBYyxFQUNkLFFBQVEsRUFDUixRQUFRLEVBQ1IsS0FBSyxFQUNMLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsNEJBQTRCLEVBQzVCLHlCQUF5QixFQUN6QixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLEtBQUssRUFDTCxxQkFBcUIsS0FFbkIsS0FBSyxFQURKLE1BQU0sVUFDUCxLQUFLLEVBakJILHdSQWlCTCxDQUFRO0lBRVQsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNuRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQW9CLElBQUksQ0FBQztJQUM5QyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQW9CLElBQUksQ0FBQztJQUMvQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLDBDQUFPLENBQUMsa0JBQWtCLENBQVMsU0FBUyxDQUFDO0lBQ3pFLE1BQU0sU0FBUyxHQUFHLDRDQUFLLENBQUMsY0FBYyxDQUFDLG9EQUFlLENBQUM7SUFDdkQsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO0lBQ3JFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUVyRCwyR0FBMkc7SUFDM0csTUFBTSxvQkFBb0IsR0FBRyw0Q0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFpQixFQUFFLEVBQUU7UUFDdEUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN2QixPQUFPLEtBQUs7UUFDZCxDQUFDO1FBRUQsTUFBTSxJQUFJLEdBQUcsS0FBSzthQUNmLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ1YsSUFBSSxPQUFPLEVBQUUsQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLE1BQU07WUFDbEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE9BQU8sRUFBRTtZQUNYLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRVgsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFWCw2RkFBNkY7SUFDN0YsTUFBTSxPQUFPLEdBQUcsNENBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2pDLE9BQU87WUFDTCxPQUFPLEVBQUUsS0FBSztZQUNkLFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO3FCQUNuQjtvQkFDRCxNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7cUJBQ25CO29CQUNELFNBQVMsRUFBRTt3QkFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztxQkFDbkI7b0JBQ0QsS0FBSyxFQUFFO3dCQUNMLEdBQUcsRUFBRSxFQUFFO3dCQUNQLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO3FCQUNuQjtvQkFDRCxHQUFHLEVBQUU7d0JBQ0gsR0FBRyxFQUFFLENBQUM7d0JBQ04sT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7cUJBQ25CO2lCQUNGO2FBQ0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzthQUN4QztTQUNGO0lBQ0gsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUUxQiwwREFBMEQ7SUFFMUQsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4QixJQUFJLFVBQVU7WUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtRQUM1QixhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDMUIsSUFBSSxTQUFTO1lBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFO1FBQzFCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkIsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsR0FBRyxFQUFFO1FBQzNCLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDcEIsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUNyQyxNQUFNLGNBQWMsR0FBRyxnQ0FBZ0M7UUFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNwRCxJQUFJLFVBQVUsR0FBRyxJQUFJO1FBQ3JCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUNoQyxNQUFNLFVBQVUsR0FBRyxZQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLDBDQUFHLENBQUMsQ0FBQztnQkFDbkUsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQztnQkFDbkUsTUFBTSxXQUFXLEdBQUcsU0FBUyxLQUFJLGdCQUFVLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLDBDQUFHLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQzdELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7Z0JBQzdDLENBQUM7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0QsT0FBTyxVQUFVO0lBQ25CLENBQUM7SUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO1FBQ3BDLElBQUkseURBQWMsRUFBRSxFQUFFLENBQUM7WUFDckIsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNuQixhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtRQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDakIsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7UUFDdEIsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQixRQUFRLENBQUMsYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUN0QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07WUFBRSxPQUFNO1FBQy9CLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixDQUFDO1FBQ0QsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxHQUFHLENBQUMsY0FBYyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ3hCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDMUIsSUFBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsTUFBTSxDQUFDO1lBQUUsT0FBTTtRQUM1QyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDMUMsY0FBYyxFQUFFO1FBQ2xCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUMzQixJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBRCxDQUFDLHVCQUFELENBQUMsQ0FBRSxNQUFNLENBQUM7WUFBRSxPQUFNO1FBQzVDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMxQyxlQUFlLEVBQUU7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFDRCxrQ0FBa0M7SUFDbEMsNENBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ3BCLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDekIsQ0FBQyxDQUFDO0lBRUYsTUFBTSxtQkFBbUIsR0FBRyxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBRXZFLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUUscURBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyRSx3REFBSyxTQUFTLEVBQUMsOEJBQThCO1lBQzNDLCtDQUFDLGNBQWMsa0JBQ2IsT0FBTyxFQUFFLE9BQU8sRUFDaEIsU0FBUyxFQUFFLHFEQUFVLENBQUMsa0JBQWtCLENBQUMsRUFDekMsUUFBUSxFQUFFLFlBQVksRUFDdEIsT0FBTyxFQUFFLFdBQVcsRUFDcEIsTUFBTSxFQUFFLFVBQVUsRUFDbEIsU0FBUyxFQUFFLFNBQVMsRUFDcEIsU0FBUyxFQUFFLFNBQVMsRUFDcEIsU0FBUyxFQUFFLElBQUksRUFDZixZQUFZLEVBQUUsS0FBSyxFQUNuQixXQUFXLEVBQUUsU0FBUyxDQUFDLG9CQUFvQixDQUFDLElBQ3hDLE1BQU0sRUFDVjtZQUNGLHdEQUFLLFNBQVMsRUFBQyw2QkFBNkI7Z0JBQzFDLCtDQUFDLDJDQUFNLElBQ0wsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLFFBQ0osT0FBTyxFQUFFLGVBQWUsRUFDeEIsR0FBRyxFQUFFLE1BQU0sRUFDWCxNQUFNLEVBQUUsU0FBUyxFQUNqQixJQUFJLEVBQUMsVUFBVSxFQUNmLEtBQUssRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQzNCLFNBQVMsRUFBQyxxQkFBcUI7b0JBRS9CLCtDQUFDLHFFQUFXLE9BQUcsQ0FDUjtnQkFFUCxxQkFBcUI7b0JBQ3JCLCtDQUFDLDJDQUFNLElBQ0wsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLFFBQ0osT0FBTyxFQUFFLGdCQUFnQixFQUN6QixHQUFHLEVBQUUsT0FBTyxFQUNaLE1BQU0sRUFBRSxVQUFVLEVBQ2xCLElBQUksRUFBQyxVQUFVLEVBQ2YsUUFBUSxFQUFFLENBQUMsbUJBQW1CLEVBQzlCLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsRUFDakYsU0FBUyxFQUFDLHFCQUFxQjt3QkFFL0IsK0NBQUMsdUVBQVksT0FBRyxDQUNULENBRVA7WUFDTiwrQ0FBQywyQ0FBTSxJQUNMLElBQUksRUFBRSxTQUFTLEVBQ2YsYUFBYSxRQUNiLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUN6QixTQUFTLEVBQUUsU0FBUyxFQUNwQixTQUFTLFFBQ1QsTUFBTSxFQUFFLGNBQWMsRUFDdEIsU0FBUyxFQUFFLElBQUksRUFDZixTQUFTLEVBQUUsSUFBSSxnQkFDSCxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQ2hDLFNBQVMsRUFBRSxlQUFlO2dCQUUxQix3REFBSyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7b0JBQ3JDLCtDQUFDLGdEQUFXLElBQ1YsU0FBUyxFQUFDLFdBQVcsRUFDckIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFDM0IsT0FBTyxFQUFFLGNBQWMsR0FDdkI7b0JBQ0YsK0NBQUMsK0RBQWUsSUFDZCxNQUFNLEVBQUUsTUFBTSxFQUNkLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLGFBQWEsRUFBRSxhQUFhLEVBQzVCLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLE9BQU8sRUFBRSxPQUFPLEdBQ2hCLENBQ0UsQ0FDQztZQUNULCtDQUFDLDJDQUFNLElBQ0wsSUFBSSxFQUFFLFVBQVUsRUFDaEIsYUFBYSxRQUNiLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUMxQixTQUFTLEVBQUUsU0FBUyxFQUNwQixTQUFTLFFBQ1QsTUFBTSxFQUFFLGVBQWUsRUFDdkIsTUFBTSxFQUFFLFNBQVMsRUFDakIsU0FBUyxFQUFFLElBQUksRUFDZixTQUFTLEVBQUUsSUFBSSxnQkFDSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFDdkMsU0FBUyxFQUFFLGdCQUFnQjtnQkFFM0Isd0RBQUssR0FBRyxFQUFFLDhDQUFHOzs7Ozs7V0FNWjtvQkFDQywrQ0FBQyxnREFBVyxJQUNWLFNBQVMsRUFBQyxXQUFXLEVBQ3JCLEtBQUssRUFBRSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFDbEMsT0FBTyxFQUFFLGVBQWUsR0FDeEI7b0JBQ0YsK0NBQUMscUJBQXFCLElBQ3BCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE1BQU0sRUFBQyxNQUFNLEVBQ2IsY0FBYyxFQUFFLGNBQWMsRUFDOUIsTUFBTSxFQUFFLE1BQU0sRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsS0FBSyxFQUNmLGVBQWUsRUFBRSxLQUFLLEVBQ3RCLEtBQUssRUFBRSxvREFBUyxDQUFDLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDbkQsU0FBUyxFQUFFLFNBQVMsR0FDcEIsQ0FDRSxDQUNDLENBQ0wsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVELE1BQU0sd0JBQXlCLFNBQVEsNENBQUssQ0FBQyxhQUFvQztJQUFqRjs7UUFDRSxVQUFLLEdBQUc7WUFDTixZQUFZLEVBQUUsS0FBSztTQUNwQjtJQTRDSCxDQUFDO0lBbENDLGlCQUFpQjtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDVixtREFBWSxDQUFDLFVBQVUsQ0FBQyxtQ0FBbUMsQ0FBQztZQUM1RCxtREFBWSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUFDLENBQ2hFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsTUFBTSxDQUFDLEVBQUUscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUc7WUFDdkssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUI7Z0JBQ2xELElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUI7Z0JBQzFELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUI7Z0JBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztnQkFDcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQjtnQkFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO2dCQUNsQixJQUFJLENBQUMsNEJBQTRCLEdBQUcsNEJBQTRCO2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3ZDLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzdCLE9BQU8sSUFBSTtRQUNiLENBQUM7UUFDRCxPQUFPLCtDQUFDLGlCQUFpQixvQkFDbEIsSUFBSSxDQUFDLEtBQUssSUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFDakIsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLDRCQUE0QixFQUMvRCxxQkFBcUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQ2pELHlCQUF5QixFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFDekQsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUM3QyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFDbkMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixJQUNqRDtJQUNKLENBQUM7Q0FDRjtBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsc0RBQVUsQ0FBQyx3QkFBd0IsRUFBRSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0WXRFO0FBR2M7QUFDTztBQUN2QyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsaURBQVU7QUFDbEMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLDRDQUFLO0FBQzFCLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBQyx3REFBd0Q7QUFVbkYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRTtJQUN0QyxNQUFNLFdBQVcsR0FBRyxFQUFFO0lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RDLElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3JELENBQUM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLFdBQVc7QUFDcEIsQ0FBQztBQUVNLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFZLEVBQXNCLEVBQUU7SUFDbkUsTUFBTSxFQUNKLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLFNBQVMsRUFDVixHQUFHLEtBQUs7SUFFVCxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUNwRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSztRQUMzRSxPQUFPLFNBQVMsQ0FBQyxXQUFXO0lBQzlCLENBQUMsQ0FBQztJQUVGLE1BQU0sMEJBQTBCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRTtRQUNsRCxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxZQUFZLENBQUM7UUFDdkUsSUFBSSx1QkFBdUIsR0FBRyxFQUFFO1FBQ2hDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckIsTUFBTSxHQUFHLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQ3hELElBQUksaUJBQWlCLEdBQUcsRUFBRTtZQUMxQixJQUFJLEdBQUc7Z0JBQUUsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ3hELElBQUksaUJBQWlCLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pELE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZFLHVCQUF1QixHQUFHLGtEQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNyRCxDQUFDO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTix1QkFBdUIsR0FBRyxjQUFjO1FBQzFDLENBQUM7UUFDRCxPQUFPLHVCQUF1QjtJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzFELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBRXBHLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxRQUFnQixFQUFFLElBQVksRUFBRSxPQUFzQixFQUFFLFNBQXdCLEVBQVEsRUFBRTtRQUNsSCxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNwRCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUM7UUFDbkYsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUM7UUFDaEQsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNoQixDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsNENBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQXNCLEVBQUUsRUFBRTtRQUNyRSwrQ0FBK0M7UUFDL0MsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsT0FBTTtRQUNSLENBQUM7UUFDRCxNQUFNLFNBQVMsR0FBYyxvREFBUyxDQUFDLE9BQU8sQ0FBQztRQUMvQyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSTtRQUMzQixNQUFNLFFBQVEsR0FBRyw0Q0FBSyxDQUFDLE9BQU8sRUFBRTtRQUNoQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFO1FBQzdDLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHO1FBQzVCLE1BQU0sSUFBSSxHQUFnQjtZQUN4QixJQUFJLEVBQUUsc0RBQWUsQ0FBQyxPQUFPO1lBQzdCLFNBQVMsRUFBRSxJQUFJLFlBQVksV0FBVyxHQUFHLEdBQUc7U0FDN0M7UUFDRCxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLEdBQUcsRUFBRTtRQUM1QixNQUFNLFlBQVksR0FBRyxDQUFDO2dCQUNwQixFQUFFLEVBQUUsUUFBUTtnQkFDWixJQUFJLEVBQUUsU0FBUzthQUNoQixDQUFDO1FBQ0YsK0RBQStEO1FBQy9ELHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsU0FBUztRQUNULE9BQU87UUFDUCxJQUFJO1FBQ0osT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FDTCx1RUFBUSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksSUFDbkQsSUFBSSxDQUFDLElBQUksQ0FDSCxDQUNWO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQ2xDLGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDNUIsWUFBWSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFFLHFEQUFVLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckUsb0VBQUssU0FBUyxFQUFDLHlDQUF5QztZQUV4RCxZQUFZLElBQUksb0VBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hDLDJEQUFDLDJDQUFNLElBQ0wsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsWUFBWSxFQUNuQixRQUFRLEVBQUUsZ0JBQWdCLEVBQzFCLFNBQVMsRUFBQyxVQUFVLElBRW5CLGdCQUFnQixFQUFFLENBQ1osQ0FDTDtZQUVOLG9FQUFLLFNBQVMsRUFBQyxpQkFBaUIsSUFFNUIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxDQUNMLHVFQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxnQkFDRCxJQUFJLENBQUMsR0FBRyxFQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUM5QyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDakIsSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDOzRCQUMzQyxHQUFHLENBQUMsZUFBZSxFQUFFOzRCQUNyQixxQkFBcUIsQ0FBQyxJQUFJLENBQUM7d0JBQzdCLENBQUM7b0JBQ0gsQ0FBQyxFQUNELFNBQVMsRUFBRSxtQ0FBbUMsSUFFN0MsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQ1AsQ0FDVjtZQUNILENBQUMsQ0FBQyxDQUVBLENBQ0YsQ0FDRixDQUNQO0FBQ0gsQ0FBQztBQUVNLE1BQU0sZUFBZSxHQUFHLHNEQUFVLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS1o7QUFDRjtBQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGb0I7QUFFekQsU0FBUyxzQkFBc0IsQ0FBRSxLQUFLO0lBQzNDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQ3pCLE9BQU8sOENBQUc7Ozs7OzRCQUtnQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7O21CQUl4QywrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7OzhCQUt2QixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDOzs7OzRCQUluQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzs7R0FHeEQ7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCcUQ7QUFFL0MsU0FBUyxxQkFBcUIsQ0FBRSxLQUFLO0lBQzFDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQ3pCLE9BQU8sOENBQUc7Ozs7Ozs4QkFNa0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7Ozs7Ozs4QkFRcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs4QkFJL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7OzhCQUcvQixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7Ozs7R0FJN0M7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUIyRjtBQUNIOzs7Ozs7Ozs7Ozs7QUNEekY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ2M7QUFDekQsMERBQWMsQ0FBQyxxQ0FBcUMsRUFBRSwyREFBTSxDQUFDO0FBRXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RhdGEvZGF0YS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RhdGEvdXJsLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9kYXRhL2RhdGEudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RhdGEvdXJsLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZHluYW1pYy11cmwtZWRpdG9yL2NvbXBvbmVudHMvZHluYW1pYy11cmwtZWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvZHluYW1pYy11cmwtZWRpdG9yL2NvbXBvbmVudHMvdXJsLWluZm8tc2VsZWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9keW5hbWljLXVybC1lZGl0b3IvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9keW5hbWljLXVybC1lZGl0b3Ivc3R5bGVzL2NvbXBvbmVudHMvZHluYW1pYy11cmwtZWRpdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9keW5hbWljLXVybC1lZGl0b3Ivc3R5bGVzL2NvbXBvbmVudHMvdXJsLWluZm8tc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2R5bmFtaWMtdXJsLWVkaXRvci9zdHlsZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9keW5hbWljLXVybC1lZGl0b3IudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNSAzLjV2OWMwIDEuOTMzLTMuMTM0IDMuNS03IDMuNXMtNy0xLjU2Ny03LTMuNXYtOUMxIDEuNTY3IDQuMTM0IDAgOCAwczcgMS41NjcgNyAzLjVNMiA1LjMwNFY2LjVDMiA3LjY5MiA0LjYxNSA5IDggOXM2LTEuMzA4IDYtMi41VjUuMzA0QzEyLjc3NSA2LjMyIDEwLjU0NiA3IDggN3MtNC43NzUtLjY4LTYtMS42OTZNOCAxMGMyLjU0NiAwIDQuNzc1LS42OCA2LTEuNjk2VjkuNWMwIDEuMTkyLTIuNjE1IDIuNS02IDIuNXMtNi0xLjMwOC02LTIuNVY4LjMwNEMzLjIyNSA5LjMyIDUuNDU0IDEwIDggMTBtNiAxLjMwNEMxMi43NzUgMTIuMzIgMTAuNTQ2IDEzIDggMTNzLTQuNzc1LS42OC02LTEuNjk2VjEyLjVDMiAxMy42OTIgNC42MTUgMTUgOCAxNXM2LTEuMzA4IDYtMi41ek0xNCAzLjVDMTQgNC42OTIgMTEuMzg1IDYgOCA2UzIgNC42OTIgMiAzLjUgNC42MTUgMSA4IDFzNiAxLjMwOCA2IDIuNVxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOC4zOSAzLjQyNSA1LjU1My41ODhhMi4wMDYgMi4wMDYgMCAwIDAtMi44MzcgMEwuNTg4IDIuNzE2YTIuMDA2IDIuMDA2IDAgMCAwIDAgMi44MzdMMy40MjUgOC4zOWEyLjAwNiAyLjAwNiAwIDAgMCAyLjgzNyAwbC43MS0uNzA5IDEuMzQ3IDEuMzQ3LS43MS43MWEyLjAwNiAyLjAwNiAwIDAgMCAwIDIuODM3bDIuODM4IDIuODM3YTIuMDA2IDIuMDA2IDAgMCAwIDIuODM3IDBsMi4xMjgtMi4xMjhhMi4wMDYgMi4wMDYgMCAwIDAgMC0yLjgzN0wxMi41NzUgNy42MWEyLjAwNiAyLjAwNiAwIDAgMC0yLjgzNyAwbC0uNzEuNzA5LTEuMzQ3LTEuMzQ3LjcxLS43MWEyLjAwNiAyLjAwNiAwIDAgMCAwLTIuODM3TTYuOTcyIDYuMjYybC43MDktLjcwOWExLjAwMyAxLjAwMyAwIDAgMCAwLTEuNDE5TDQuODQ0IDEuMjk3YTEuMDAzIDEuMDAzIDAgMCAwLTEuNDE5IDBMMS4yOTcgMy40MjVhMS4wMDMgMS4wMDMgMCAwIDAgMCAxLjQxOUw0LjEzNCA3LjY4YTEuMDAzIDEuMDAzIDAgMCAwIDEuNDE5IDBsLjcxLS43MS0uODk0LS44OTJhLjUwMS41MDEgMCAwIDEgLjcxLS43MXptMi4wNTYgMy40NzYuNi41OTlhLjUwMi41MDIgMCAwIDAgLjcwOS0uNzFsLS42LS41OTkuNzEtLjcwOWExLjAwMyAxLjAwMyAwIDAgMSAxLjQxOSAwbDIuODM3IDIuODM3YTEuMDAzIDEuMDAzIDAgMCAxIDAgMS40MTlsLTIuMTI4IDIuMTI4YTEuMDAzIDEuMDAzIDAgMCAxLTEuNDE5IDBMOC4zMiAxMS44NjZhMS4wMDMgMS4wMDMgMCAwIDEgMC0xLjQxOXpcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RhdGEvZGF0YS5zdmcnXG5cbmV4cG9ydCBjb25zdCBEYXRhT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcblxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxufVxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RhdGEvdXJsLnN2ZydcblxuZXhwb3J0IGNvbnN0IFVybE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cbn1cbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMsIHR5cGUgVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCB0eXBlIFdpZGdldEpzb24sIGpzeCwgbW9kdWxlTG9hZGVyLCBjc3MsIGlzS2V5Ym9hcmRNb2RlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcywgQnV0dG9uLCBQb3BwZXIsIFBhbmVsSGVhZGVyLCBnZXRGYWxsYmFja1BsYWNlbWVudHNNb2RpZmllciwgaG9va3MgYXMgdWlIb29rcyB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBVcmxJbmZvU2VsZWN0b3IgfSBmcm9tICcuL3VybC1pbmZvLXNlbGVjdG9yJ1xuLy8gT25seSB1c2UgYXMgdHlwZVxuaW1wb3J0IHsgdHlwZSBEZWx0YVZhbHVlLCB0eXBlIEVkaXRvciwgdHlwZSBGb3JtYXRzLCB0eXBlIFJpY2hTZWxlY3Rpb24gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3JpY2gtdGV4dC1lZGl0b3InXG5pbXBvcnQgeyB0eXBlIEV4cHJlc3Npb25CdWlsZGVyVHlwZSBhcyBFeHBCdWlsZGVyVHlwZSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZXhwcmVzc2lvbi1idWlsZGVyJ1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ2ppbXUtdGhlbWUnXG5pbXBvcnQgeyBVcmxPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGF0YS91cmwnXG5pbXBvcnQgeyBEYXRhT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RhdGEvZGF0YSdcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZVJlZiB9ID0gUmVhY3RcblxuY29uc3QgTU9ESUZJRVJTID0gW1xuICB7XG4gICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgb3B0aW9uczoge1xuICAgICAgYWx0QXhpczogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZ2V0RmFsbGJhY2tQbGFjZW1lbnRzTW9kaWZpZXIoWydsZWZ0LXN0YXJ0JywgJ2xlZnQtZW5kJ10sIHRydWUpXG5dXG5jb25zdCBleHBPZmZzZXQgPSBbMCwgOF1cblxuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljVXJsRWRpdG9yUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZWRpdG9yUmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxFZGl0b3I+IHwgKChFZGl0b3IpID0+IHZvaWQpXG4gIHVzZURhdGFTb3VyY2VzRW5hYmxlZDogYm9vbGVhblxuICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XG4gIHdpZGdldElkOiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xuICBzZWxlY3RXaWRnZXRzPzogV2lkZ2V0SnNvbltdXG4gIG9uQ2hhbmdlOiAoZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNVcmxFZGl0b3JXcmFwcGVyUHJvcHMgPSBEeW5hbWljVXJsRWRpdG9yUHJvcHMgJiB7XG4gIFJpY2hFeHByZXNzaW9uQnVpbGRlcjogKHByb3BzKSA9PiBSZWFjdC5SZWFjdEVsZW1lbnRcbiAgdXNlRWRpdG9yU2VsZWN0aW9uRm9ybWF0czogKGVkaXRvciwgdXNlQWxsU2VjdGlvbj86IGJvb2xlYW4pID0+IFtGb3JtYXRzLCBSaWNoU2VsZWN0aW9uXVxuICByaWNoVGV4dEVkaXRvclV0aWxzOiBhbnlcbiAgUmljaEVkaXRvckNvcmU6IGFueVxuICBFeHByZXNzaW9uQnVpbGRlclR5cGU6IHR5cGVvZiBFeHBCdWlsZGVyVHlwZVxuICBEZWx0YTogYW55XG4gIHVzZU1peGluS2V5Ym9hcmRFbnRlck1vZHVsZXM6IGFueVxufVxuXG5jb25zdCBoYXNFbWJlZFRhZyA9IChkZWx0YTogRGVsdGFWYWx1ZSkgPT4ge1xuICBpZiAoIWRlbHRhPy5vcHM/Lmxlbmd0aCkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBkZWx0YS5vcHMuc29tZSgob3ApID0+IHtcbiAgICBjb25zdCBpbnNlcnQ6IGFueSA9IG9wPy5pbnNlcnQgPz8ge31cbiAgICByZXR1cm4gaW5zZXJ0LnVybEluZm8gfHwgaW5zZXJ0LmV4cHJlc3Npb24gfHwgaW5zZXJ0LnVybGluZm9cbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IF9EeW5hbWljVXJsRWRpdG9yID0gKHByb3BzOiBEeW5hbWljVXJsRWRpdG9yV3JhcHBlclByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBlZGl0b3JSZWYsXG4gICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkLFxuICAgIHVzZURhdGFTb3VyY2VzLFxuICAgIG9uQ2hhbmdlLFxuICAgIHdpZGdldElkLFxuICAgIHZhbHVlLFxuICAgIHNlbGVjdFdpZGdldHMsXG4gICAgUmljaEV4cHJlc3Npb25CdWlsZGVyLFxuICAgIHVzZU1peGluS2V5Ym9hcmRFbnRlck1vZHVsZXMsXG4gICAgdXNlRWRpdG9yU2VsZWN0aW9uRm9ybWF0cyxcbiAgICByaWNoVGV4dEVkaXRvclV0aWxzLFxuICAgIFJpY2hFZGl0b3JDb3JlLFxuICAgIERlbHRhLFxuICAgIEV4cHJlc3Npb25CdWlsZGVyVHlwZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgW3VybFBvcHBlciwgc2V0VXJsUG9wcGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGF0YVBvcHBlciwgc2V0RGF0YVBvcHBlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdXJsUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxuICBjb25zdCBkYXRhUmVmID0gdXNlUmVmPEhUTUxCdXR0b25FbGVtZW50PihudWxsKVxuICBjb25zdCBbZWRpdG9yLCBzZXRFZGl0b3JdID0gdWlIb29rcy51c2VGb3J3YXJkVmFsdWVSZWY8RWRpdG9yPihlZGl0b3JSZWYpXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IGhvb2tzLnVzZVRyYW5zbGF0aW9uKGRlZmF1bHRNZXNzYWdlcylcbiAgY29uc3QgW2Zvcm1hdHMsIHNlbGVjdGlvbl0gPSB1c2VFZGl0b3JTZWxlY3Rpb25Gb3JtYXRzKGVkaXRvciwgZmFsc2UpXG4gIGNvbnN0IFtleHByZXNzaW9uU3RyLCBzZXRFeHByZXNzaW9uU3RyXSA9IHVzZVN0YXRlKHZhbHVlKVxuICBjb25zdCBbZWRpdG9yRm9jdXMsIHNldEVkaXRvckZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vV2hlbiBwYXN0aW5nLCBvbmx5IGB1cmxJbmZvYCBhbmQgYGV4cHJlc3Npb25gIGFyZSBhbGxvd2VkLCBhbmQgb3RoZXIgZm9ybWF0cyBhcmUgY29udmVydGVkIHRvIHB1cmUgc3RyaW5nXG4gIGNvbnN0IHBhc3RlTWF0Y2hlckNhbGxiYWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKF8sIGRlbHRhOiBEZWx0YVZhbHVlKSA9PiB7XG4gICAgaWYgKGhhc0VtYmVkVGFnKGRlbHRhKSkge1xuICAgICAgcmV0dXJuIGRlbHRhXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGRlbHRhXG4gICAgICAubWFwKChvcCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG9wLmluc2VydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gb3AuaW5zZXJ0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiBuZXcgRGVsdGEoKS5pbnNlcnQodGV4dClcbiAgfSwgW0RlbHRhXSlcblxuICAvL0N1c3RvbWl6ZSB0aGUgcXVpbGwgbW9kdWxlcywgaGlkZSB0aGUgdG9vbGJhciwgZm9yYmlkIHNob3J0Y3V0IGtleXMgYW5kIHByb2Nlc3MgcGFzdGVkIHRleHRcbiAgY29uc3QgbW9kdWxlcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0b29sYmFyOiBmYWxzZSxcbiAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgIGJpbmRpbmdzOiB7XG4gICAgICAgICAgYm9sZDoge1xuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4geyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpdGFsaWM6IHtcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICBrZXk6IDEzLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4geyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWI6IHtcbiAgICAgICAgICAgIGtleTogOSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsaXBib2FyZDoge1xuICAgICAgICBtYXRjaGVyczogW1snKicsIHBhc3RlTWF0Y2hlckNhbGxiYWNrXV1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwYXN0ZU1hdGNoZXJDYWxsYmFja10pXG5cbiAgLy8gbW9kdWxlcyA9IHVzZU1peGluS2V5Ym9hcmRFbnRlck1vZHVsZXMobW9kdWxlcywgZWRpdG9yKVxuXG4gIGNvbnN0IHRvZ2dsZVVybFBvcHBlciA9ICgpID0+IHtcbiAgICBzZXRVcmxQb3BwZXIoIXVybFBvcHBlcilcbiAgICBpZiAoZGF0YVBvcHBlcikgc2V0RGF0YVBvcHBlcihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZURhdGFQb3BwZXIgPSAoKSA9PiB7XG4gICAgc2V0RGF0YVBvcHBlcighZGF0YVBvcHBlcilcbiAgICBpZiAodXJsUG9wcGVyKSBzZXRVcmxQb3BwZXIoZmFsc2UpXG4gIH1cblxuICBjb25zdCBjbG9zZVVybFBvcHBlciA9ICgpID0+IHtcbiAgICBzZXRVcmxQb3BwZXIoZmFsc2UpXG4gICAgaWYgKHVybFBvcHBlcikge1xuICAgICAgdXJsUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsb3NlRGF0YVBvcHBlciA9ICgpID0+IHtcbiAgICBzZXREYXRhUG9wcGVyKGZhbHNlKVxuICAgIGlmIChkYXRhUG9wcGVyKSB7XG4gICAgICBkYXRhUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNsZWFyRW1wdHlUYWcgPSAoaHRtbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgRVhQX1RBR19SRUdFWFAgPSAvXFw8ZXhwKCg/IVxcPGV4cCkuKStcXDxcXC9leHBcXD4vZ21pXG4gICAgY29uc3QgaGFzRXhwcmVzc2lvblRhZyA9IGh0bWw/Lm1hdGNoKEVYUF9UQUdfUkVHRVhQKVxuICAgIGxldCBmaWx0ZXJIdG1sID0gaHRtbFxuICAgIGlmIChoYXNFeHByZXNzaW9uVGFnKSB7XG4gICAgICBoYXNFeHByZXNzaW9uVGFnLmZvckVhY2goZXhwdGFnID0+IHtcbiAgICAgICAgY29uc3QgdGFnQ29udGVudCA9IGV4cHRhZy5tYXRjaCgvPGV4cFtePl0qPihbXFxzXFxTXSo/KTxcXC9leHA+Lyk/LlsxXVxuICAgICAgICBjb25zdCBtYXRjaFNwYW4gPSB0YWdDb250ZW50Lm1hdGNoKC88c3BhbltePl0qPihbXFxzXFxTXSo/KTxcXC9zcGFuPi8pXG4gICAgICAgIGNvbnN0IHNwYW5Db250ZW50ID0gbWF0Y2hTcGFuICYmIHRhZ0NvbnRlbnQubWF0Y2goLzxzcGFuW14+XSo+KFtcXHNcXFNdKj8pPFxcL3NwYW4+Lyk/LlsxXVxuICAgICAgICBpZiAoIXRhZ0NvbnRlbnQudHJpbSgpIHx8IChtYXRjaFNwYW4gJiYgIXNwYW5Db250ZW50LnRyaW0oKSkpIHtcbiAgICAgICAgICBmaWx0ZXJIdG1sID0gZmlsdGVySHRtbC5yZXBsYWNlKGV4cHRhZywgJycpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJIdG1sXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaHRtbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGlzS2V5Ym9hcmRNb2RlKCkpIHtcbiAgICAgIHNldFVybFBvcHBlcihmYWxzZSlcbiAgICAgIHNldERhdGFQb3BwZXIoZmFsc2UpXG4gICAgfVxuICAgIHNldEV4cHJlc3Npb25TdHIoY2xlYXJFbXB0eVRhZyhodG1sKSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICghZWRpdG9yRm9jdXMpIHtcbiAgICAgIHNldEVkaXRvckZvY3VzKHRydWUpXG4gICAgICByaWNoVGV4dEVkaXRvclV0aWxzLnNldEVkaXRvckN1cnNvckVuZChlZGl0b3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBzZXRFZGl0b3JGb2N1cyhmYWxzZSlcbiAgICBvbkNoYW5nZShleHByZXNzaW9uU3RyKVxuICB9XG5cbiAgY29uc3Qgb25LZXlEb3duID0gZXZ0ID0+IHtcbiAgICBpZiAoIWV2dCB8fCAhZXZ0LnRhcmdldCkgcmV0dXJuXG4gICAgaWYgKGV2dC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGV2dC50YXJnZXQuYmx1cigpXG4gICAgfVxuICAgIGlmIChldnQua2V5ID09PSAnVGFiJyAmJiAhZXZ0LnNoaWZ0S2V5KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdXJsUmVmLmN1cnJlbnQuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uVXJsRXNjS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlZGl0b3I/LnJvb3QuY29udGFpbnMoZT8udGFyZ2V0KSkgcmV0dXJuXG4gICAgaWYgKGUua2V5ID09PSAnRXNjJyB8fCBlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGNsb3NlVXJsUG9wcGVyKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkRhdGFFc2NLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGVkaXRvcj8ucm9vdC5jb250YWlucyhlPy50YXJnZXQpKSByZXR1cm5cbiAgICBpZiAoZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgY2xvc2VEYXRhUG9wcGVyKClcbiAgICB9XG4gIH1cbiAgLy8gV2hlbiB1bk1vdW50ZWQsIGNoYW5nZSB0aGUgaHRtbFxuICBob29rcy51c2VVbm1vdW50KCgpID0+IHtcbiAgICBvbkNoYW5nZShleHByZXNzaW9uU3RyKVxuICB9KVxuXG4gIGNvbnN0IGRhdGFQb3BwZXJBdmFpbGFibGUgPSB1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndy0xMDAgaC0xMDAnLCB7IFtjbGFzc05hbWVdOiAhIWNsYXNzTmFtZSB9KX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tcG9uZW50LWR5bmFtaWMtdXJsLWVkaXRvcic+XG4gICAgICAgIDxSaWNoRWRpdG9yQ29yZVxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdyaWNoLXRleHQtZWRpdG9yJyl9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgZWRpdG9yUmVmPXtzZXRFZGl0b3J9XG4gICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnd2Vic2l0ZVBsYWNlaG9sZGVyJyl9XG4gICAgICAgICAgey4uLm90aGVyc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2R5bmFtaWMtdXJsLWVkaXRvci1idG5ncm91cCc+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc2l6ZT0nc20nXG4gICAgICAgICAgICBpY29uXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVVcmxQb3BwZXJ9XG4gICAgICAgICAgICByZWY9e3VybFJlZn1cbiAgICAgICAgICAgIGFjdGl2ZT17dXJsUG9wcGVyfVxuICAgICAgICAgICAgdHlwZT0ndGVydGlhcnknXG4gICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRlKCd1cmxJbmZvJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ppbXUtb3V0bGluZS1pbnNpZGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFVybE91dGxpbmVkIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXNFbmFibGVkICYmXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhdGFQb3BwZXJ9XG4gICAgICAgICAgICAgIHJlZj17ZGF0YVJlZn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtkYXRhUG9wcGVyfVxuICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkYXRhUG9wcGVyQXZhaWxhYmxlfVxuICAgICAgICAgICAgICB0aXRsZT17ZGF0YVBvcHBlckF2YWlsYWJsZSA/IHRyYW5zbGF0ZSgnZGF0YScpIDogdHJhbnNsYXRlKCdkYXRhVW5hdmFpbGFibGVUaXBzJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0namltdS1vdXRsaW5lLWluc2lkZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERhdGFPdXRsaW5lZCAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBvcHBlclxuICAgICAgICAgIG9wZW49e3VybFBvcHBlcn1cbiAgICAgICAgICBkaXNhYmxlUmVzaXplXG4gICAgICAgICAgcGxhY2VtZW50PSdsZWZ0LXN0YXJ0J1xuICAgICAgICAgIHJlZmVyZW5jZT17dXJsUmVmLmN1cnJlbnR9XG4gICAgICAgICAgbW9kaWZpZXJzPXtNT0RJRklFUlN9XG4gICAgICAgICAgc2hvd0Fycm93XG4gICAgICAgICAgdG9nZ2xlPXtjbG9zZVVybFBvcHBlcn1cbiAgICAgICAgICB0cmFwRm9jdXM9e3RydWV9XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgndXJsSW5mbycpfVxuICAgICAgICAgIG9uS2V5RG93bj17b25VcmxFc2NLZXlEb3dufVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTgwLCBoZWlnaHQ6IDMwMCB9fT5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgcHktMidcbiAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSgndXJsSW5mbycpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtjbG9zZVVybFBvcHBlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VXJsSW5mb1NlbGVjdG9yXG4gICAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgc2VsZWN0V2lkZ2V0cz17c2VsZWN0V2lkZ2V0c31cbiAgICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XG4gICAgICAgICAgICAgIGZvcm1hdHM9e2Zvcm1hdHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BvcHBlcj5cbiAgICAgICAgPFBvcHBlclxuICAgICAgICAgIG9wZW49e2RhdGFQb3BwZXJ9XG4gICAgICAgICAgZGlzYWJsZVJlc2l6ZVxuICAgICAgICAgIHBsYWNlbWVudD0nbGVmdC1zdGFydCdcbiAgICAgICAgICByZWZlcmVuY2U9e2RhdGFSZWYuY3VycmVudH1cbiAgICAgICAgICBtb2RpZmllcnM9e01PRElGSUVSU31cbiAgICAgICAgICBzaG93QXJyb3dcbiAgICAgICAgICB0b2dnbGU9e2Nsb3NlRGF0YVBvcHBlcn1cbiAgICAgICAgICBvZmZzZXQ9e2V4cE9mZnNldH1cbiAgICAgICAgICB0cmFwRm9jdXM9e3RydWV9XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgIGFyaWEtbGFiZWw9e3RyYW5zbGF0ZSgnZGF0YVBhbmVsVGl0bGUnKX1cbiAgICAgICAgICBvbktleURvd249e29uRGF0YUVzY0tleURvd259XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNzcz17Y3NzYFxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICAgIC5maWVsZC1saXN0e1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNCBweS0yJ1xuICAgICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRlKCdkYXRhUGFuZWxUaXRsZScpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtjbG9zZURhdGFQb3BwZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJpY2hFeHByZXNzaW9uQnVpbGRlclxuICAgICAgICAgICAgICB3aWRnZXRJZD17d2lkZ2V0SWR9XG4gICAgICAgICAgICAgIHNvdXJjZT0ndXNlcidcbiAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgICAgICAgZWRpdGFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBhdXRvSW5zZXJ0U3BhY2U9e2ZhbHNlfVxuICAgICAgICAgICAgICB0eXBlcz17SW1tdXRhYmxlKFtFeHByZXNzaW9uQnVpbGRlclR5cGUuQXR0cmlidXRlXSl9XG4gICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3BwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jbGFzcyBfRHluYW1pY1VybEVkaXRvcldyYXBwZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PER5bmFtaWNVcmxFZGl0b3JQcm9wcz4ge1xuICBzdGF0ZSA9IHtcbiAgICBtb2R1bGVMb2FkZWQ6IGZhbHNlXG4gIH1cblxuICBSaWNoRXhwcmVzc2lvbkJ1aWxkZXJcbiAgdXNlRWRpdG9yU2VsZWN0aW9uRm9ybWF0c1xuICByaWNoVGV4dEVkaXRvclV0aWxzXG4gIFJpY2hFZGl0b3JDb3JlXG4gIEV4cHJlc3Npb25CdWlsZGVyVHlwZVxuICBEZWx0YVxuICB1c2VNaXhpbktleWJvYXJkRW50ZXJNb2R1bGVzXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIG1vZHVsZUxvYWRlci5sb2FkTW9kdWxlKCdqaW11LXVpL2FkdmFuY2VkL3JpY2gtdGV4dC1lZGl0b3InKSxcbiAgICAgIG1vZHVsZUxvYWRlci5sb2FkTW9kdWxlKCdqaW11LXVpL2FkdmFuY2VkL2V4cHJlc3Npb24tYnVpbGRlcicpXVxuICAgICkudGhlbihyZXMgPT4ge1xuICAgICAgY29uc3QgW3sgUmljaEV4cHJlc3Npb25CdWlsZGVyLCB1c2VFZGl0b3JTZWxlY3Rpb25Gb3JtYXRzLCByaWNoVGV4dEVkaXRvclV0aWxzLCBSaWNoRWRpdG9yQ29yZSwgRGVsdGEsIHVzZU1peGluS2V5Ym9hcmRFbnRlck1vZHVsZXMgfSwgeyBFeHByZXNzaW9uQnVpbGRlclR5cGUgfV0gPSByZXNcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5tb2R1bGVMb2FkZWQpIHtcbiAgICAgICAgdGhpcy5SaWNoRXhwcmVzc2lvbkJ1aWxkZXIgPSBSaWNoRXhwcmVzc2lvbkJ1aWxkZXJcbiAgICAgICAgdGhpcy51c2VFZGl0b3JTZWxlY3Rpb25Gb3JtYXRzID0gdXNlRWRpdG9yU2VsZWN0aW9uRm9ybWF0c1xuICAgICAgICB0aGlzLnJpY2hUZXh0RWRpdG9yVXRpbHMgPSByaWNoVGV4dEVkaXRvclV0aWxzXG4gICAgICAgIHRoaXMuUmljaEVkaXRvckNvcmUgPSBSaWNoRWRpdG9yQ29yZVxuICAgICAgICB0aGlzLkV4cHJlc3Npb25CdWlsZGVyVHlwZSA9IEV4cHJlc3Npb25CdWlsZGVyVHlwZVxuICAgICAgICB0aGlzLkRlbHRhID0gRGVsdGFcbiAgICAgICAgdGhpcy51c2VNaXhpbktleWJvYXJkRW50ZXJNb2R1bGVzID0gdXNlTWl4aW5LZXlib2FyZEVudGVyTW9kdWxlc1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kdWxlTG9hZGVkOiB0cnVlIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm1vZHVsZUxvYWRlZCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIDxfRHluYW1pY1VybEVkaXRvclxuICAgICAgey4uLiB0aGlzLnByb3BzfVxuICAgICAgRGVsdGE9e3RoaXMuRGVsdGF9XG4gICAgICB1c2VNaXhpbktleWJvYXJkRW50ZXJNb2R1bGVzPXt0aGlzLnVzZU1peGluS2V5Ym9hcmRFbnRlck1vZHVsZXN9XG4gICAgICBSaWNoRXhwcmVzc2lvbkJ1aWxkZXI9e3RoaXMuUmljaEV4cHJlc3Npb25CdWlsZGVyfVxuICAgICAgdXNlRWRpdG9yU2VsZWN0aW9uRm9ybWF0cz17dGhpcy51c2VFZGl0b3JTZWxlY3Rpb25Gb3JtYXRzfVxuICAgICAgcmljaFRleHRFZGl0b3JVdGlscz17dGhpcy5yaWNoVGV4dEVkaXRvclV0aWxzfVxuICAgICAgUmljaEVkaXRvckNvcmU9e3RoaXMuUmljaEVkaXRvckNvcmV9XG4gICAgICBFeHByZXNzaW9uQnVpbGRlclR5cGU9e3RoaXMuRXhwcmVzc2lvbkJ1aWxkZXJUeXBlfVxuICAgIC8+XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IER5bmFtaWNVcmxFZGl0b3IgPSB3aXRoU3R5bGVzKF9EeW5hbWljVXJsRWRpdG9yV3JhcHBlciwgJ0R5bmFtaWNVcmxFZGl0b3InKVxuIiwiaW1wb3J0IHtcbiAgUmVhY3QsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgVXJsSW5mb1BhcnQsIFVybEluZm9QYXJ0VHlwZSwgdXRpbHMsIHR5cGUgSU1VcmxJbmZvLCBob29rcyxcbiAgdHlwZSBKaW11RmllbGRUeXBlLCB0eXBlIFdpZGdldEpzb24sIGNsYXNzTmFtZXMsIHR5cGUgVXJsSW5mbyBhcyBVcmxJbmZvblZhbHVlLCBJbW11dGFibGUsIHR5cGUgSU1TdGF0ZSwgUmVhY3RSZWR1eCwgcXVlcnlTdHJpbmdcbn0gZnJvbSAnamltdS1jb3JlJ1xuLy8gT25seSB1c2UgYXMgdHlwZVxuaW1wb3J0IHsgdHlwZSBFZGl0b3IsIHR5cGUgRm9ybWF0cywgdHlwZSBSaWNoU2VsZWN0aW9uIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9yaWNoLXRleHQtZWRpdG9yJ1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdqaW11LXRoZW1lJ1xuY29uc3QgeyB1c2VTZWxlY3RvciB9ID0gUmVhY3RSZWR1eFxuY29uc3QgeyB1c2VTdGF0ZSB9ID0gUmVhY3RcbmNvbnN0IGlzU2VsZWN0U2hvdyA9IGZhbHNlIC8vIFRlbXBvcmFyaWx5IGhpZGVzIHRoZSBhYmlsaXR5IHRvIHNlbGVjdCBlbWJlZCB3aWRnZXQuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlZGl0b3I6IEVkaXRvclxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgdHlwZXM/OiBJbW11dGFibGVBcnJheTxKaW11RmllbGRUeXBlPlxuICBzZWxlY3RXaWRnZXRzPzogV2lkZ2V0SnNvbltdXG4gIHNlbGVjdGlvbjogUmljaFNlbGVjdGlvblxuICBmb3JtYXRzPzogRm9ybWF0c1xufVxuXG5jb25zdCBnZXRRdWVyeVBhcmFtcyA9IChTZWFyY2hPYmplY3QpID0+IHtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSBbXVxuICBPYmplY3Qua2V5cyhTZWFyY2hPYmplY3QpLmZvckVhY2goa2V5ID0+IHtcbiAgICBpZiAoa2V5ICE9PSAnZHJhZnQnKSB7XG4gICAgICBxdWVyeVBhcmFtcy5wdXNoKHsga2V5LCB2YWx1ZTogU2VhcmNoT2JqZWN0W2tleV0gfSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVBhcmFtc1xufVxuXG5leHBvcnQgY29uc3QgX1VybEluZm9TZWxlY3RvciA9IChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB7XG4gICAgZWRpdG9yLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzZWxlY3RXaWRnZXRzLFxuICAgIHNlbGVjdGlvblxuICB9ID0gcHJvcHNcblxuICBjb25zdCBhcHBRdWVyeU9iamVjdCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSU1TdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHJlYWxTdGF0ZSA9IHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyID8gc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIgOiBzdGF0ZVxuICAgIHJldHVybiByZWFsU3RhdGUucXVlcnlPYmplY3RcbiAgfSlcblxuICBjb25zdCBnZXRTZWxlY3RlZFNvdXJjZVVybE9iamVjdCA9IChhY3RpdmVTb3VyY2UpID0+IHtcbiAgICBjb25zdCB3aWRnZXRJbmRleCA9IHNlbGVjdFdpZGdldHMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gYWN0aXZlU291cmNlKVxuICAgIGxldCBzZWxlY3RlZFNvdXJjZVVybE9iamVjdCA9IHt9XG4gICAgaWYgKHdpZGdldEluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGV4cCA9IHNlbGVjdFdpZGdldHNbd2lkZ2V0SW5kZXhdLmNvbmZpZy5leHByZXNzaW9uXG4gICAgICBsZXQgc2VsZWN0ZWRTb3VyY2VVcmwgPSAnJ1xuICAgICAgaWYgKGV4cCkgc2VsZWN0ZWRTb3VyY2VVcmwgPSBleHAucmVwbGFjZSgvPFtePl0rPi9nLCAnJylcbiAgICAgIGlmIChzZWxlY3RlZFNvdXJjZVVybCAmJiBzZWxlY3RlZFNvdXJjZVVybC5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IHNlbGVjdGVkU291cmNlVXJsLnN1YnN0cihzZWxlY3RlZFNvdXJjZVVybC5pbmRleE9mKCc/JykpXG4gICAgICAgIHNlbGVjdGVkU291cmNlVXJsT2JqZWN0ID0gcXVlcnlTdHJpbmcucGFyc2Uoc2VhcmNoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZFNvdXJjZVVybE9iamVjdCA9IGFwcFF1ZXJ5T2JqZWN0XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFNvdXJjZVVybE9iamVjdFxuICB9XG5cbiAgY29uc3QgW2FjdGl2ZVNvdXJjZSwgc2V0QWN0aXZlU291cmNlXSA9IHVzZVN0YXRlKCdhcHBVUkwnKVxuICBjb25zdCBbdXJsUGFyYW1zLCBzZXRVcmxQYXJhbXNdID0gdXNlU3RhdGUoZ2V0UXVlcnlQYXJhbXMoZ2V0U2VsZWN0ZWRTb3VyY2VVcmxPYmplY3QoYWN0aXZlU291cmNlKSkpXG5cbiAgY29uc3QgaW5zZXJ0RXhwcmVzc2lvbiA9ICh1bmlxdWVpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHVybEluZm86IFVybEluZm9uVmFsdWUsIHNlbGVjdGlvbjogUmljaFNlbGVjdGlvbik6IHZvaWQgPT4ge1xuICAgIGVkaXRvci5kZWxldGVUZXh0KHNlbGVjdGlvbi5pbmRleCwgc2VsZWN0aW9uLmxlbmd0aClcbiAgICBlZGl0b3IuaW5zZXJ0RW1iZWQoc2VsZWN0aW9uLmluZGV4LCAndXJsSW5mbycsIHsgdW5pcXVlaWQsIG5hbWUsIHVybEluZm8gfSwgJ3VzZXInKVxuICAgIGVkaXRvci5zZXRTZWxlY3Rpb24oc2VsZWN0aW9uLmluZGV4ICsgMSwgJ3VzZXInKVxuICAgIGVkaXRvci5mb2N1cygpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBob29rcy51c2VFdmVudENhbGxiYWNrKCh1cmxJbmZvOiBVcmxJbmZvblZhbHVlKSA9PiB7XG4gICAgLy8gY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbihmYWxzZSlcbiAgICBpZiAoc2VsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBpbVVybEluZm86IElNVXJsSW5mbyA9IEltbXV0YWJsZSh1cmxJbmZvKVxuICAgIGNvbnN0IG5hbWUgPSBpbVVybEluZm8ubmFtZVxuICAgIGNvbnN0IHVuaXF1ZWlkID0gdXRpbHMuZ2V0VVVJRCgpXG4gICAgaW5zZXJ0RXhwcmVzc2lvbih1bmlxdWVpZCwgbmFtZSwgdXJsSW5mbywgc2VsZWN0aW9uKVxuICB9KVxuXG4gIGNvbnN0IG9uU2VsZWN0ZWRQYXJhbUNoYW5nZSA9IChzZWxlY3RlZEl0ZW0pID0+IHtcbiAgICBjb25zdCBrZXkgPSBzZWxlY3RlZEl0ZW0ua2V5XG4gICAgY29uc3QgcGFydDogVXJsSW5mb1BhcnQgPSB7XG4gICAgICB0eXBlOiBVcmxJbmZvUGFydFR5cGUuVXJsaW5mbyxcbiAgICAgIHVybHNlYXJjaDogYHske2FjdGl2ZVNvdXJjZX0uc2VhcmNoLiR7a2V5fX1gXG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZSh7IG5hbWU6IHBhcnQudXJsc2VhcmNoLCBwYXJ0czogW3BhcnRdIH0pXG4gIH1cblxuICBjb25zdCBnZXRTZWxlY3RPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbkNvbmZpZyA9IFt7XG4gICAgICBpZDogJ2FwcFVSTCcsXG4gICAgICBuYW1lOiAnQXBwIFVybCdcbiAgICB9XVxuICAgIC8vIFRlbXBvcmFyaWx5IGhpZGVzIHRoZSBhYmlsaXR5IHRvIHJlYWQgdXJsIGZyb20gYW5vdGhlciBlbWJlZFxuICAgIC8vIGlmKHNlbGVjdFdpZGdldHMpIHtcbiAgICAvLyAgIHNlbGVjdFdpZGdldHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyAgICAgb3B0aW9uQ29uZmlnLnB1c2goe1xuICAgIC8vICAgICAgIGlkOiBpdGVtLmlkLFxuICAgIC8vICAgICAgIG5hbWU6IGl0ZW0ubGFiZWxcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIHJldHVybiBvcHRpb25Db25maWcubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uaWR9IHZhbHVlPXtpdGVtLmlkfSB0aXRsZT17aXRlbS5uYW1lfT5cbiAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaW5mb1NvdXJjZUNoYW5nZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNvdXJjZVZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICBzZXRBY3RpdmVTb3VyY2Uoc291cmNlVmFsdWUpXG4gICAgc2V0VXJsUGFyYW1zKGdldFF1ZXJ5UGFyYW1zKGdldFNlbGVjdGVkU291cmNlVXJsT2JqZWN0KHNvdXJjZVZhbHVlKSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCd3LTEwMCBoLTEwMCcsIHsgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lIH0pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21wb25lbnQtdXJsLWluZm8tc2VsZWN0b3Igdy0xMDAgaC0xMDAnPlxuICAgICAge1xuICAgICAgaXNTZWxlY3RTaG93ICYmIDxkaXYgY2xhc3NOYW1lPSdwLTQnPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHNpemU9J3NtJ1xuICAgICAgICAgICAgdmFsdWU9e2FjdGl2ZVNvdXJjZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtpbmZvU291cmNlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPSd0b3AtZHJvcCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0U2VsZWN0T3B0aW9ucygpfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhcmFtLWxpc3QgcHgtNCc+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGFyYW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5rZXl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IG9uU2VsZWN0ZWRQYXJhbUNoYW5nZShpdGVtKSB9fVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXkgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWRQYXJhbUNoYW5nZShpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsncGFyYW0taXRlbSB0ZXh0LXRydW5jYXRlIG10LTIgcC0xJ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YCR7aXRlbS5rZXl9YH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IFVybEluZm9TZWxlY3RvciA9IHdpdGhTdHlsZXMoX1VybEluZm9TZWxlY3RvciwgJ1VybEluZm9TZWxlY3RvcicpXG4iLCJpbXBvcnQgeyBEeW5hbWljVXJsRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtdXJsLWVkaXRvcidcbmltcG9ydCB7IFVybEluZm9TZWxlY3RvciB9IGZyb20gJy4vY29tcG9uZW50cy91cmwtaW5mby1zZWxlY3RvcidcbmV4cG9ydCB7IER5bmFtaWNVcmxFZGl0b3IsIFVybEluZm9TZWxlY3RvciB9XG4iLCJpbXBvcnQgeyBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgcG9saXNoZWQgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBkeW5hbWljVXJsRWRpdG9yU3R5bGVzIChwcm9wcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xuICBjb25zdCB0aGVtZSA9IHByb3BzLnRoZW1lXG4gIHJldHVybiBjc3NgXG4gICAgLmNvbXBvbmVudC1keW5hbWljLXVybC1lZGl0b3J7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC5xbC1jb250YWluZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbMjAwXX07XG4gICAgICB9XG4gICAgICAucWwtZWRpdG9ye1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSg1KX0gJHtwb2xpc2hlZC5yZW0oNil9O1xuICAgICAgICBwe1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLnByaW1hcnlbNzAwXX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5keW5hbWljLXVybC1lZGl0b3ItYnRuZ3JvdXB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbMjAwXX07XG4gICAgICB9XG4gICAgfVxuICBgXG59XG4iLCJpbXBvcnQgeyBjc3MsIHR5cGUgU2VyaWFsaXplZFN0eWxlcyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGZ1bmN0aW9uIHVybEluZm9TZWxlY3RvclN0eWxlcyAocHJvcHMpOiBTZXJpYWxpemVkU3R5bGVzIHtcbiAgY29uc3QgdGhlbWUgPSBwcm9wcy50aGVtZVxuICByZXR1cm4gY3NzYFxuICAgIC5jb21wb25lbnQtdXJsLWluZm8tc2VsZWN0b3J7XG4gICAgICAucGFyYW0tbGlzdHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLnBhcmFtLWl0ZW0ucGFyYW0taXRlbS1zZWxlY3RlZHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgfVxuICAgICAgICAucGFyYW0taXRlbXtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzQwMF19O1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wYXJhbS1pdGVtOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbNTAwXX07XG4gICAgICAgIH1cbiAgICAgICAgLnBhcmFtLWl0ZW06YWN0aXZlLnBhcmFtLWl0ZW06aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgXG59XG4iLCJleHBvcnQgeyBkeW5hbWljVXJsRWRpdG9yU3R5bGVzIGFzIER5bmFtaWNVcmxFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pYy11cmwtZWRpdG9yJ1xuZXhwb3J0IHsgdXJsSW5mb1NlbGVjdG9yU3R5bGVzIGFzIFVybEluZm9TZWxlY3RvciB9IGZyb20gJy4vY29tcG9uZW50cy91cmwtaW5mby1zZWxlY3RvcidcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlZ2lzdGVyU3R5bGVzIH0gZnJvbSAnamltdS10aGVtZSdcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2xpYi9keW5hbWljLXVybC1lZGl0b3Ivc3R5bGVzJ1xucmVnaXN0ZXJTdHlsZXMoJ2ppbXUtdWkvYWR2YW5jZWQvZHluYW1pYy11cmwtZWRpdG9yJywgc3R5bGVzKVxuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9keW5hbWljLXVybC1lZGl0b3InXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=