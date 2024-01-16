System.register(["arcgis-amd-packages/arcgis-charts-components","arcgis-amd-packages/arcgis-charts-shared-utils","jimu-core","jimu-theme","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__arcgis_charts_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE__arcgis_charts_shared_utils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_charts_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__arcgis_charts_shared_utils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_charts_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__arcgis_charts_shared_utils__[key] = module[key];
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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@arcgis/charts-spec/dist/ts-schema/chart-object-literals.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/charts-spec/dist/ts-schema/chart-object-literals.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaugeChartSubTypes: () => (/* binding */ GaugeChartSubTypes),
/* harmony export */   LabelValueTypes: () => (/* binding */ LabelValueTypes),
/* harmony export */   SizePolicyScaleTypes: () => (/* binding */ SizePolicyScaleTypes),
/* harmony export */   StatisticsDefaults: () => (/* binding */ StatisticsDefaults),
/* harmony export */   WebChartAxisTypes: () => (/* binding */ WebChartAxisTypes),
/* harmony export */   WebChartColoringPatterns: () => (/* binding */ WebChartColoringPatterns),
/* harmony export */   WebChartDataSourceTypes: () => (/* binding */ WebChartDataSourceTypes),
/* harmony export */   WebChartDataTransformations: () => (/* binding */ WebChartDataTransformations),
/* harmony export */   WebChartLabelBehavior: () => (/* binding */ WebChartLabelBehavior),
/* harmony export */   WebChartLegendPositions: () => (/* binding */ WebChartLegendPositions),
/* harmony export */   WebChartLineSmoothedKinds: () => (/* binding */ WebChartLineSmoothedKinds),
/* harmony export */   WebChartNullPolicyTypes: () => (/* binding */ WebChartNullPolicyTypes),
/* harmony export */   WebChartProbabilityPlotKinds: () => (/* binding */ WebChartProbabilityPlotKinds),
/* harmony export */   WebChartSortOrderKinds: () => (/* binding */ WebChartSortOrderKinds),
/* harmony export */   WebChartStackedKinds: () => (/* binding */ WebChartStackedKinds),
/* harmony export */   WebChartTimeAggregationTypes: () => (/* binding */ WebChartTimeAggregationTypes),
/* harmony export */   WebChartTimeIntervalUnits: () => (/* binding */ WebChartTimeIntervalUnits),
/* harmony export */   WebChartTypes: () => (/* binding */ WebChartTypes),
/* harmony export */   WebChartVersionStatus: () => (/* binding */ WebChartVersionStatus)
/* harmony export */ });
/* harmony import */ var _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-js-object-literals */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/rest-js-object-literals.js");

const WebChartTypes = {
    Chart: "chart",
    Text: "chartText",
    Overlay: "chartOverlay",
    Overlays: "chartOverlays",
    Legend: "chartLegend",
    CursorCrosshair: "cursorCrosshair",
    Axis: "chartAxis",
    GaugeAxisTick: "gaugeAxisTick",
    GaugeNeedle: "gaugeNeedle",
    CategoryAxisFormat: "category",
    NumberAxisFormat: "number",
    DateAxisFormat: "date",
    Guide: "chartGuide",
    ScatterSeries: "scatterSeries",
    PieSeries: "pieSeries",
    PieTick: "pieTick",
    GaugeSeries: "gaugeSeries",
    LineSeries: "lineSeries",
    BarSeries: "barSeries",
    HistogramSeries: "histogramSeries",
    BoxPlotSeries: "boxPlotSeries",
    ProbabilityPlotSeries: "probabilityPlotSeries",
    ProfileGraphSeries: "profileGraphSeries",
    ComboLineAndBarSeries: "comboLineAndBarSeries",
    Buffer: "buffer",
    SizePolicy: "sizeScale"
};
const WebChartDataTransformations = {
    None: "none",
    Log: "logarithmic",
    Sqrt: "squareRoot"
};
const WebChartColoringPatterns = {
    Single: "singleColor",
    Match: "colorMatch" // apply the color from the layer's renderer symbology
};
const WebChartLegendPositions = {
    Left: "left",
    Right: "right",
    Top: "top",
    Bottom: "bottom"
};
const WebChartStackedKinds = {
    Side: "sideBySide",
    Stacked: "stacked",
    Stacked100: "stacked100"
};
const WebChartProbabilityPlotKinds = {
    General: "qqPlot",
    Normalized: "normalQQPlot"
};
const WebChartSortOrderKinds = {
    Ascending: "ASC",
    Descending: "DESC"
};
const WebChartDataSourceTypes = {
    Inline: "inline",
    Layer: "layer"
};
const StatisticsDefaults = {
    statisticType: _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_0__.RESTStatisticType.Count,
    sortingOrder: WebChartSortOrderKinds.Ascending
};
const WebChartLineSmoothedKinds = {
    Bezier: "bezier",
    MonotoneX: "monotoneX",
    MonotoneY: "monotoneY"
};
const WebChartTimeIntervalUnits = {
    Seconds: "esriTimeUnitsSeconds",
    Minutes: "esriTimeUnitsMinutes",
    Hours: "esriTimeUnitsHours",
    Days: "esriTimeUnitsDays",
    Weeks: "esriTimeUnitsWeeks",
    Months: "esriTimeUnitsMonths",
    Years: "esriTimeUnitsYears"
};
const WebChartNullPolicyTypes = {
    Null: "null",
    Zero: "zero",
    Interpolate: "interpolate"
};
const WebChartTimeAggregationTypes = {
    Start: "equalIntervalsFromStartTime",
    End: "equalIntervalsFromEndTime"
};
const WebChartLabelBehavior = {
    None: "none",
    Rotate: "rotate",
    Stagger: "stagger",
    Wrap: "wrap"
};
const WebChartVersionStatus = {
    Same: "same",
    Newer: "newer",
    Older: "older",
    Unrecognized: "unrecognized"
};
const WebChartAxisTypes = {
    Value: "value",
    Date: "date",
    Category: "category"
};
const GaugeChartSubTypes = {
    FeatureGauge: "featureGauge",
    StatisticGauge: "statisticGauge"
};
const SizePolicyScaleTypes = {
    Linear: "linear",
    Logarithmic: "logarithmic"
};
const LabelValueTypes = {
    OriginalValue: "originalValue",
    ModifiedValue: "modifiedValue" // use data label or custom label; in this mode, if the field contains codedDomainValue and there is no custom label, it's likely that the description associated with coded value will be displayed.
};


/***/ }),

/***/ "./node_modules/@arcgis/charts-spec/dist/ts-schema/config-defaults.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/charts-spec/dist/ts-schema/config-defaults.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPieFromFieldsName: () => (/* binding */ defaultPieFromFieldsName),
/* harmony export */   defaultPieFromFieldsValue: () => (/* binding */ defaultPieFromFieldsValue)
/* harmony export */ });
const defaultPieFromFieldsName = "arcgis_charts_pie_from_fields_name";
const defaultPieFromFieldsValue = "arcgis_charts_pie_from_fields_value";


/***/ }),

/***/ "./node_modules/@arcgis/charts-spec/dist/ts-schema/events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/charts-spec/dist/ts-schema/events.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayTerms: () => (/* binding */ OverlayTerms)
/* harmony export */ });
const OverlayTerms = {
    Mean: "Mean",
    Median: "Median",
    StdDev: "Standard Deviation",
    Normal: "Normal Distribution",
    Trendline: "Trendline"
};


/***/ }),

/***/ "./node_modules/@arcgis/charts-spec/dist/ts-schema/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/charts-spec/dist/ts-schema/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GaugeChartSubTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.GaugeChartSubTypes),
/* harmony export */   LabelValueTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.LabelValueTypes),
/* harmony export */   OverlayTerms: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_4__.OverlayTerms),
/* harmony export */   RESTFieldType: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTFieldType),
/* harmony export */   RESTFontDecoration: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTFontDecoration),
/* harmony export */   RESTFontStyle: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTFontStyle),
/* harmony export */   RESTFontWeight: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTFontWeight),
/* harmony export */   RESTHorizontalAlignment: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTHorizontalAlignment),
/* harmony export */   RESTRendererType: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTRendererType),
/* harmony export */   RESTSimpleFillSymbolStyle: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTSimpleFillSymbolStyle),
/* harmony export */   RESTSimpleLineSymbolStyle: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTSimpleLineSymbolStyle),
/* harmony export */   RESTSimpleMarkerSymbolStyle: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTSimpleMarkerSymbolStyle),
/* harmony export */   RESTStatisticType: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTStatisticType),
/* harmony export */   RESTSymbolType: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTSymbolType),
/* harmony export */   RESTUnits: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTUnits),
/* harmony export */   RESTVerticalAlignment: () => (/* reexport safe */ _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__.RESTVerticalAlignment),
/* harmony export */   SizePolicyScaleTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.SizePolicyScaleTypes),
/* harmony export */   StatisticsDefaults: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.StatisticsDefaults),
/* harmony export */   WebChartAxisTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartAxisTypes),
/* harmony export */   WebChartColoringPatterns: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartColoringPatterns),
/* harmony export */   WebChartCurrentVersion: () => (/* reexport safe */ _web_chart__WEBPACK_IMPORTED_MODULE_0__.WebChartCurrentVersion),
/* harmony export */   WebChartDataSourceTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartDataSourceTypes),
/* harmony export */   WebChartDataTransformations: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartDataTransformations),
/* harmony export */   WebChartLabelBehavior: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartLabelBehavior),
/* harmony export */   WebChartLegendPositions: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartLegendPositions),
/* harmony export */   WebChartLineSmoothedKinds: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartLineSmoothedKinds),
/* harmony export */   WebChartNullPolicyTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartNullPolicyTypes),
/* harmony export */   WebChartProbabilityPlotKinds: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartProbabilityPlotKinds),
/* harmony export */   WebChartSortOrderKinds: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartSortOrderKinds),
/* harmony export */   WebChartStackedKinds: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartStackedKinds),
/* harmony export */   WebChartTimeAggregationTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartTimeAggregationTypes),
/* harmony export */   WebChartTimeIntervalUnits: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartTimeIntervalUnits),
/* harmony export */   WebChartTypes: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartTypes),
/* harmony export */   WebChartVersionStatus: () => (/* reexport safe */ _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__.WebChartVersionStatus),
/* harmony export */   defaultPieFromFieldsName: () => (/* reexport safe */ _config_defaults__WEBPACK_IMPORTED_MODULE_3__.defaultPieFromFieldsName),
/* harmony export */   defaultPieFromFieldsValue: () => (/* reexport safe */ _config_defaults__WEBPACK_IMPORTED_MODULE_3__.defaultPieFromFieldsValue)
/* harmony export */ });
/* harmony import */ var _web_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-chart */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/web-chart.js");
/* harmony import */ var _chart_object_literals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-object-literals */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/chart-object-literals.js");
/* harmony import */ var _rest_js_object_literals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-js-object-literals */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/rest-js-object-literals.js");
/* harmony import */ var _config_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-defaults */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/config-defaults.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/events.js");








/***/ }),

/***/ "./node_modules/@arcgis/charts-spec/dist/ts-schema/rest-js-object-literals.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/charts-spec/dist/ts-schema/rest-js-object-literals.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESTFieldType: () => (/* binding */ RESTFieldType),
/* harmony export */   RESTFontDecoration: () => (/* binding */ RESTFontDecoration),
/* harmony export */   RESTFontStyle: () => (/* binding */ RESTFontStyle),
/* harmony export */   RESTFontWeight: () => (/* binding */ RESTFontWeight),
/* harmony export */   RESTHorizontalAlignment: () => (/* binding */ RESTHorizontalAlignment),
/* harmony export */   RESTRendererType: () => (/* binding */ RESTRendererType),
/* harmony export */   RESTSimpleFillSymbolStyle: () => (/* binding */ RESTSimpleFillSymbolStyle),
/* harmony export */   RESTSimpleLineSymbolStyle: () => (/* binding */ RESTSimpleLineSymbolStyle),
/* harmony export */   RESTSimpleMarkerSymbolStyle: () => (/* binding */ RESTSimpleMarkerSymbolStyle),
/* harmony export */   RESTStatisticType: () => (/* binding */ RESTStatisticType),
/* harmony export */   RESTSymbolType: () => (/* binding */ RESTSymbolType),
/* harmony export */   RESTUnits: () => (/* binding */ RESTUnits),
/* harmony export */   RESTVerticalAlignment: () => (/* binding */ RESTVerticalAlignment)
/* harmony export */ });
const RESTFieldType = {
    Blob: "esriFieldTypeBlob",
    Date: "esriFieldTypeDate",
    Double: "esriFieldTypeDouble",
    Geometry: "esriFieldTypeGeometry",
    GlobalID: "esriFieldTypeGlobalID",
    GUID: "esriFieldTypeGUID",
    Integer: "esriFieldTypeInteger",
    OID: "esriFieldTypeOID",
    Raster: "esriFieldTypeRaster",
    Single: "esriFieldTypeSingle",
    SmallInteger: "esriFieldTypeSmallInteger",
    String: "esriFieldTypeString",
    XML: "esriFieldTypeXML"
};
const RESTStatisticType = {
    Count: "count",
    Sum: "sum",
    Minimum: "min",
    Maximum: "max",
    Average: "avg",
    StandardDeviation: "stddev",
    Variance: "var",
    ContinuousPercentile: "percentile_cont",
    DiscretePercentile: "percentile_disc",
    EnvelopeAggregate: "envelope-aggregate",
    CentroidAggregate: "centroid-aggregate",
    ConvexHullAggregate: "convex-hull-aggregate",
    NoAggregation: "no_aggregation" // TODO: that property needs to be exported to another interface, as it is not REST compatible (see issue #2352)
};
const RESTSimpleLineSymbolStyle = {
    Dash: "esriSLSDash",
    DashDot: "esriSLSDashDot",
    DashDotDot: "esriSLSDashDotDot",
    Dot: "esriSLSDot",
    Null: "esriSLSNull",
    Solid: "esriSLSSolid"
};
const RESTSimpleMarkerSymbolStyle = {
    Circle: "esriSMSCircle",
    Cross: "esriSMSCross",
    Diamond: "esriSMSDiamond",
    Square: "esriSMSSquare",
    X: "esriSMSX",
    Triangle: "esriSMSTriangle"
};
const RESTSimpleFillSymbolStyle = {
    BackwardDiagonal: "esriSFSBackwardDiagonal",
    Cross: "esriSFSCross",
    DiagonalCross: "esriSFSDiagonalCross",
    ForwardDiagonal: "esriSFSForwardDiagonal",
    Horizontal: "esriSFSHorizontal",
    Null: "esriSFSNull",
    Solid: "esriSFSSolid",
    Vertical: "esriSFSVertical"
};
const RESTHorizontalAlignment = {
    Left: "left",
    Right: "right",
    Center: "center",
    Justify: "justify"
};
const RESTVerticalAlignment = {
    Baseline: "baseline",
    Top: "top",
    Middle: "middle",
    Bottom: "bottom"
};
const RESTSymbolType = {
    SLS: "esriSLS",
    SMS: "esriSMS",
    SFS: "esriSFS",
    PMS: "esriPMS",
    PFS: "esriPFS",
    TS: "esriTS"
};
const RESTFontStyle = {
    Italic: "italic",
    Normal: "normal",
    Oblique: "oblique"
};
const RESTFontWeight = {
    Bold: "bold",
    Bolder: "bolder",
    Lighter: "lighter",
    Normal: "normal"
};
const RESTFontDecoration = {
    LineThrough: "line-through",
    Underline: "underline",
    None: "none"
};
const RESTRendererType = {
    UniqueValue: "unique-value",
    Simple: "simple",
    ClassBreaks: "class-breaks",
    Heatmap: "heatmap",
    DotDensity: "dot-density",
    Dictionary: "dictionary",
    PieChart: "pie-chart"
};
const RESTUnits = {
    Feet: "feet",
    Miles: "miles",
    NauticalMiles: "nautical-miles",
    USNauticalMiles: "us-nautical-miles",
    Meters: "meters",
    Kilometers: "kilometers"
};


/***/ }),

/***/ "./node_modules/@arcgis/charts-spec/dist/ts-schema/web-chart.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/charts-spec/dist/ts-schema/web-chart.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebChartCurrentVersion: () => (/* binding */ WebChartCurrentVersion)
/* harmony export */ });
/**
 * Version of the current specification.
 */
const WebChartCurrentVersion = "7.4.1";


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/bar/bar.tsx":
/*!************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/bar/bar.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChart: () => (/* binding */ BarChart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/bar/core.tsx");
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



const BarChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const { webMapWebChart: propWebMapWebChart, dataSource } = props, others = __rest(props, ["webMapWebChart", "dataSource"]);
    const defined = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useChartComponentDefined)('barSeries');
    const webMapWebChart = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useNormalizedChartObject)(propWebMapWebChart);
    const webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return Object.assign(Object.assign({}, webMapWebChart), { dataSource });
    }, [webMapWebChart, dataSource]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, defined && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core__WEBPACK_IMPORTED_MODULE_2__.BarChartCore, Object.assign({ ref: chartRef, config: webChart }, others))));
}));
BarChart.displayName = 'BarChart';


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/bar/core.tsx":
/*!*************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/bar/core.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChartCore: () => (/* binding */ BarChartCore)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");


const BarChartCore = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useForkChartRef)(ref, chartRef);
    const { className, config, layer, view, rotation, legendPosition, legendVisibility, xAxisLabelFormatter, yAxisLabelFormatter, runtimeDataFilters, inlineData, selectionData, selectionTheme, chartLimits, placeholder, tooltipFormatter, dataLabelFormatter, actionMode, filterBySelection, disableInteractions, noDataOptions, returnSelectionIndexes, returnSelectionOIDs, autoDisposeChart, enableResponsiveFeatures, hideLicenceWatermark, queueChartCreation, useAnimatedCharts, hideLoaderAnimation, arcgisChartsDataProcessComplete, arcgisChartsDataProcessError, arcgisChartsLegendItemVisibilityChange, arcgisChartsUpdateComplete, arcgisChartsSeriesColorChange, arcgisChartsAxesMinMaxChange, arcgisChartsDefaultActionSelect, arcgisChartsSelectionComplete, arcgisChartsActionBarToggle, arcgisChartsNoRenderPropChange } = props;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.config = config;
        if (ref.current) {
            if (layer) {
                ref.current.layer = layer;
            }
            else {
                // If update config and inline-data at the same time, the update of data will be ignored
                setTimeout(() => {
                    ref.current.inlineData = inlineData;
                });
            }
        }
    }, [config, inlineData, layer]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.runtimeDataFilters = runtimeDataFilters;
    }, [runtimeDataFilters]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.view = view;
        ref.current.rotation = rotation;
        ref.current.legendPosition = legendPosition;
        ref.current.legendVisibility = legendVisibility;
        ref.current.legendVisibility = legendVisibility;
        ref.current.xAxisLabelFormatter = xAxisLabelFormatter;
        ref.current.yAxisLabelFormatter = yAxisLabelFormatter;
    }, [
        view,
        rotation,
        legendPosition,
        legendVisibility,
        xAxisLabelFormatter,
        yAxisLabelFormatter
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.selectionData = selectionData;
        ref.current.selectionTheme = selectionTheme;
        ref.current.chartLimits = chartLimits;
        ref.current.placeholder = placeholder;
        ref.current.tooltipFormatter = tooltipFormatter;
        ref.current.dataLabelFormatter = dataLabelFormatter;
        ref.current.actionMode = actionMode;
        ref.current.filterBySelection = filterBySelection;
        ref.current.disableInteractions = disableInteractions;
    }, [
        selectionData,
        selectionTheme,
        chartLimits,
        placeholder,
        tooltipFormatter,
        dataLabelFormatter,
        actionMode,
        filterBySelection,
        disableInteractions
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.returnSelectionIndexes = returnSelectionIndexes;
        ref.current.returnSelectionOIDs = returnSelectionOIDs;
    }, [returnSelectionIndexes, returnSelectionOIDs]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.noDataOptions = noDataOptions;
    }, [noDataOptions]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.autoDisposeChart = autoDisposeChart;
        ref.current.enableResponsiveFeatures = enableResponsiveFeatures;
        ref.current.hideLicenceWatermark = hideLicenceWatermark;
        ref.current.queueChartCreation = queueChartCreation;
        ref.current.useAnimatedCharts = useAnimatedCharts;
        ref.current.hideLoaderAnimation = hideLoaderAnimation;
    }, [
        autoDisposeChart,
        enableResponsiveFeatures,
        hideLicenceWatermark,
        queueChartCreation,
        useAnimatedCharts,
        hideLoaderAnimation
    ]);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessComplete', arcgisChartsDataProcessComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessError', arcgisChartsDataProcessError);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsLegendItemVisibilityChange', arcgisChartsLegendItemVisibilityChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsUpdateComplete', arcgisChartsUpdateComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSeriesColorChange', arcgisChartsSeriesColorChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsAxesMinMaxChange', arcgisChartsAxesMinMaxChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDefaultActionSelect', arcgisChartsDefaultActionSelect);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSelectionComplete', arcgisChartsSelectionComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsActionBarToggle', arcgisChartsActionBarToggle);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsNoRenderPropChange', arcgisChartsNoRenderPropChange);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-charts-bar-chart", { ref: handleRef, class: className }));
});


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/bar/index.ts":
/*!*************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/bar/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChart: () => (/* reexport safe */ _bar__WEBPACK_IMPORTED_MODULE_1__.BarChart),
/* harmony export */   BarChartCore: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.BarChartCore)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/bar/core.tsx");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "./jimu-ui/advanced/lib/chart/bar/bar.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/histogram/core.tsx":
/*!*******************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/histogram/core.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistogramCore: () => (/* binding */ HistogramCore)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");


const HistogramCore = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useForkChartRef)(ref, chartRef);
    const { className, config, layer, view, legendPosition, legendVisibility, xAxisLabelFormatter, yAxisLabelFormatter, runtimeDataFilters, inlineData, selectionData, selectionTheme, placeholder, tooltipFormatter, dataLabelFormatter, actionMode, filterBySelection, disableInteractions, returnSelectionIndexes, returnSelectionOIDs, autoDisposeChart, enableResponsiveFeatures, hideLicenceWatermark, queueChartCreation, useAnimatedCharts, hideLoaderAnimation, arcgisChartsDataProcessComplete, arcgisChartsDataProcessError, arcgisChartsLegendItemVisibilityChange, arcgisChartsUpdateComplete, arcgisChartsSeriesColorChange, arcgisChartsAxesMinMaxChange, arcgisChartsDefaultActionSelect, arcgisChartsSelectionComplete, arcgisChartsActionBarToggle, arcgisChartsNoRenderPropChange } = props;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.config = config;
        if (ref.current) {
            if (layer) {
                ref.current.layer = layer;
            }
            else {
                // If update config and inline-data at the same time, the update of data will be ignored
                setTimeout(() => {
                    ref.current.inlineData = inlineData;
                });
            }
        }
    }, [config, inlineData, layer]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.runtimeDataFilters = runtimeDataFilters;
    }, [runtimeDataFilters]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.view = view;
        ref.current.legendPosition = legendPosition;
        ref.current.legendVisibility = legendVisibility;
        ref.current.legendVisibility = legendVisibility;
        ref.current.xAxisLabelFormatter = xAxisLabelFormatter;
        ref.current.yAxisLabelFormatter = yAxisLabelFormatter;
    }, [
        view,
        legendPosition,
        legendVisibility,
        xAxisLabelFormatter,
        yAxisLabelFormatter
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.selectionData = selectionData;
        ref.current.selectionTheme = selectionTheme;
        ref.current.placeholder = placeholder;
        ref.current.tooltipFormatter = tooltipFormatter;
        ref.current.dataLabelFormatter = dataLabelFormatter;
        ref.current.actionMode = actionMode;
        ref.current.filterBySelection = filterBySelection;
        ref.current.disableInteractions = disableInteractions;
    }, [
        selectionData,
        selectionTheme,
        placeholder,
        tooltipFormatter,
        dataLabelFormatter,
        actionMode,
        filterBySelection,
        disableInteractions
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.returnSelectionIndexes = returnSelectionIndexes;
        ref.current.returnSelectionOIDs = returnSelectionOIDs;
    }, [returnSelectionIndexes, returnSelectionOIDs]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.autoDisposeChart = autoDisposeChart;
        ref.current.enableResponsiveFeatures = enableResponsiveFeatures;
        ref.current.hideLicenceWatermark = hideLicenceWatermark;
        ref.current.queueChartCreation = queueChartCreation;
        ref.current.useAnimatedCharts = useAnimatedCharts;
        ref.current.hideLoaderAnimation = hideLoaderAnimation;
    }, [
        autoDisposeChart,
        enableResponsiveFeatures,
        hideLicenceWatermark,
        queueChartCreation,
        useAnimatedCharts,
        hideLoaderAnimation
    ]);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessComplete', arcgisChartsDataProcessComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessError', arcgisChartsDataProcessError);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsLegendItemVisibilityChange', arcgisChartsLegendItemVisibilityChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsUpdateComplete', arcgisChartsUpdateComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSeriesColorChange', arcgisChartsSeriesColorChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsAxesMinMaxChange', arcgisChartsAxesMinMaxChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDefaultActionSelect', arcgisChartsDefaultActionSelect);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSelectionComplete', arcgisChartsSelectionComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsActionBarToggle', arcgisChartsActionBarToggle);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsNoRenderPropChange', arcgisChartsNoRenderPropChange);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-charts-histogram", { ref: handleRef, class: className }));
});


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/histogram/histogram.tsx":
/*!************************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/histogram/histogram.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Histogram: () => (/* binding */ Histogram)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/histogram/core.tsx");
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



const Histogram = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const { webMapWebChart: propWebMapWebChart, dataSource } = props, others = __rest(props, ["webMapWebChart", "dataSource"]);
    const defined = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useChartComponentDefined)('histogramSeries');
    const webMapWebChart = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useNormalizedChartObject)(propWebMapWebChart);
    const webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return Object.assign(Object.assign({}, webMapWebChart), { dataSource });
    }, [webMapWebChart, dataSource]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, defined && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core__WEBPACK_IMPORTED_MODULE_2__.HistogramCore, Object.assign({ ref: chartRef, config: webChart }, others))));
}));
Histogram.displayName = 'Histogram';


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/histogram/index.ts":
/*!*******************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/histogram/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Histogram: () => (/* reexport safe */ _histogram__WEBPACK_IMPORTED_MODULE_1__.Histogram),
/* harmony export */   HistogramCore: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.HistogramCore)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/histogram/core.tsx");
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./histogram */ "./jimu-ui/advanced/lib/chart/histogram/histogram.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/index.ts":
/*!*********************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChart: () => (/* reexport safe */ _bar__WEBPACK_IMPORTED_MODULE_2__.BarChart),
/* harmony export */   BarChartCore: () => (/* reexport safe */ _bar__WEBPACK_IMPORTED_MODULE_2__.BarChartCore),
/* harmony export */   GaugeChartSubTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.GaugeChartSubTypes),
/* harmony export */   Histogram: () => (/* reexport safe */ _histogram__WEBPACK_IMPORTED_MODULE_3__.Histogram),
/* harmony export */   HistogramCore: () => (/* reexport safe */ _histogram__WEBPACK_IMPORTED_MODULE_3__.HistogramCore),
/* harmony export */   LabelValueTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.LabelValueTypes),
/* harmony export */   LineChart: () => (/* reexport safe */ _line__WEBPACK_IMPORTED_MODULE_4__.LineChart),
/* harmony export */   LineChartCore: () => (/* reexport safe */ _line__WEBPACK_IMPORTED_MODULE_4__.LineChartCore),
/* harmony export */   OverlayTerms: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.OverlayTerms),
/* harmony export */   PieChart: () => (/* reexport safe */ _pie__WEBPACK_IMPORTED_MODULE_5__.PieChart),
/* harmony export */   PieChartCore: () => (/* reexport safe */ _pie__WEBPACK_IMPORTED_MODULE_5__.PieChartCore),
/* harmony export */   RESTFieldType: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTFieldType),
/* harmony export */   RESTFontDecoration: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTFontDecoration),
/* harmony export */   RESTFontStyle: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTFontStyle),
/* harmony export */   RESTFontWeight: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTFontWeight),
/* harmony export */   RESTHorizontalAlignment: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTHorizontalAlignment),
/* harmony export */   RESTRendererType: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTRendererType),
/* harmony export */   RESTSimpleFillSymbolStyle: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTSimpleFillSymbolStyle),
/* harmony export */   RESTSimpleLineSymbolStyle: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTSimpleLineSymbolStyle),
/* harmony export */   RESTSimpleMarkerSymbolStyle: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTSimpleMarkerSymbolStyle),
/* harmony export */   RESTStatisticType: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTStatisticType),
/* harmony export */   RESTSymbolType: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTSymbolType),
/* harmony export */   RESTUnits: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTUnits),
/* harmony export */   RESTVerticalAlignment: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.RESTVerticalAlignment),
/* harmony export */   ScatterPlot: () => (/* reexport safe */ _scatter__WEBPACK_IMPORTED_MODULE_6__.ScatterPlot),
/* harmony export */   ScatterPlotCore: () => (/* reexport safe */ _scatter__WEBPACK_IMPORTED_MODULE_6__.ScatterPlotCore),
/* harmony export */   SizePolicyScaleTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.SizePolicyScaleTypes),
/* harmony export */   StatisticsDefaults: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.StatisticsDefaults),
/* harmony export */   WebChartAxisTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartAxisTypes),
/* harmony export */   WebChartColoringPatterns: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartColoringPatterns),
/* harmony export */   WebChartCurrentVersion: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartCurrentVersion),
/* harmony export */   WebChartDataSourceTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartDataSourceTypes),
/* harmony export */   WebChartDataTransformations: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartDataTransformations),
/* harmony export */   WebChartLabelBehavior: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartLabelBehavior),
/* harmony export */   WebChartLegendPositions: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartLegendPositions),
/* harmony export */   WebChartLineSmoothedKinds: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartLineSmoothedKinds),
/* harmony export */   WebChartNullPolicyTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartNullPolicyTypes),
/* harmony export */   WebChartProbabilityPlotKinds: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartProbabilityPlotKinds),
/* harmony export */   WebChartSortOrderKinds: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartSortOrderKinds),
/* harmony export */   WebChartStackedKinds: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartStackedKinds),
/* harmony export */   WebChartTimeAggregationTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartTimeAggregationTypes),
/* harmony export */   WebChartTimeIntervalUnits: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartTimeIntervalUnits),
/* harmony export */   WebChartTypes: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartTypes),
/* harmony export */   WebChartVersionStatus: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.WebChartVersionStatus),
/* harmony export */   defaultPieFromFieldsName: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.defaultPieFromFieldsName),
/* harmony export */   defaultPieFromFieldsValue: () => (/* reexport safe */ _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__.defaultPieFromFieldsValue),
/* harmony export */   makeUnprivilegedChart: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.makeUnprivilegedChart),
/* harmony export */   traverse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.traverse),
/* harmony export */   traverseConvertColor: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.traverseConvertColor),
/* harmony export */   traverseConvertSymbolColor: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.traverseConvertSymbolColor),
/* harmony export */   traverseConvertWebChartColor: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.traverseConvertWebChartColor),
/* harmony export */   useChartComponentDefined: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.useChartComponentDefined),
/* harmony export */   useForkChartRef: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.useForkChartRef),
/* harmony export */   useNormalizedChartObject: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.useNormalizedChartObject),
/* harmony export */   useRegisterEvent: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.useRegisterEvent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _arcgis_charts_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @arcgis/charts-components */ "@arcgis/charts-components");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "./jimu-ui/advanced/lib/chart/bar/index.ts");
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./histogram */ "./jimu-ui/advanced/lib/chart/histogram/index.ts");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line */ "./jimu-ui/advanced/lib/chart/line/index.ts");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie */ "./jimu-ui/advanced/lib/chart/pie/index.ts");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scatter */ "./jimu-ui/advanced/lib/chart/scatter/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./jimu-ui/advanced/lib/chart/utils.ts");
/* harmony import */ var _arcgis_charts_shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @arcgis/charts-shared-utils */ "@arcgis/charts-shared-utils");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _arcgis_charts_shared_utils__WEBPACK_IMPORTED_MODULE_8__) if(["default","BarChart","BarChartCore","Histogram","HistogramCore","LineChart","LineChartCore","PieChart","PieChartCore","ScatterPlot","ScatterPlotCore","makeUnprivilegedChart","traverse","traverseConvertColor","traverseConvertSymbolColor","traverseConvertWebChartColor","useChartComponentDefined","useForkChartRef","useNormalizedChartObject","useRegisterEvent"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _arcgis_charts_shared_utils__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _arcgis_charts_spec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @arcgis/charts-spec */ "./node_modules/@arcgis/charts-spec/dist/ts-schema/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _arcgis_charts_components__WEBPACK_IMPORTED_MODULE_1__) if(["default","BarChart","BarChartCore","Histogram","HistogramCore","LineChart","LineChartCore","PieChart","PieChartCore","ScatterPlot","ScatterPlotCore","makeUnprivilegedChart","traverse","traverseConvertColor","traverseConvertSymbolColor","traverseConvertWebChartColor","useChartComponentDefined","useForkChartRef","useNormalizedChartObject","useRegisterEvent","GaugeChartSubTypes","LabelValueTypes","OverlayTerms","RESTFieldType","RESTFontDecoration","RESTFontStyle","RESTFontWeight","RESTHorizontalAlignment","RESTRendererType","RESTSimpleFillSymbolStyle","RESTSimpleLineSymbolStyle","RESTSimpleMarkerSymbolStyle","RESTStatisticType","RESTSymbolType","RESTUnits","RESTVerticalAlignment","SizePolicyScaleTypes","StatisticsDefaults","WebChartAxisTypes","WebChartColoringPatterns","WebChartCurrentVersion","WebChartDataSourceTypes","WebChartDataTransformations","WebChartLabelBehavior","WebChartLegendPositions","WebChartLineSmoothedKinds","WebChartNullPolicyTypes","WebChartProbabilityPlotKinds","WebChartSortOrderKinds","WebChartStackedKinds","WebChartTimeAggregationTypes","WebChartTimeIntervalUnits","WebChartTypes","WebChartVersionStatus","defaultPieFromFieldsName","defaultPieFromFieldsValue"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _arcgis_charts_components__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

// @ts-expect-error

(0,_arcgis_charts_components__WEBPACK_IMPORTED_MODULE_1__.setAssetPath)(`${jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAbsoluteRootUrl()}arcgis-amd-packages/arcgis-charts-components/t9n`);











/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/line/core.tsx":
/*!**************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/line/core.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChartCore: () => (/* binding */ LineChartCore)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");


const LineChartCore = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useForkChartRef)(ref, chartRef);
    const { className, config, layer, view, rotation, legendPosition, legendVisibility, xAxisLabelFormatter, yAxisLabelFormatter, runtimeDataFilters, inlineData, selectionData, selectionTheme, chartLimits, placeholder, tooltipFormatter, dataLabelFormatter, actionMode, filterBySelection, disableInteractions, noDataOptions, returnSelectionIndexes, returnSelectionOIDs, autoDisposeChart, enableResponsiveFeatures, hideLicenceWatermark, queueChartCreation, useAnimatedCharts, hideLoaderAnimation, arcgisChartsDataProcessComplete, arcgisChartsDataProcessError, arcgisChartsLegendItemVisibilityChange, arcgisChartsUpdateComplete, arcgisChartsSeriesColorChange, arcgisChartsAxesMinMaxChange, arcgisChartsDefaultActionSelect, arcgisChartsSelectionComplete, arcgisChartsActionBarToggle, arcgisChartsNoRenderPropChange, ignoreSmoothRenderingLimit, setTimeBinningInfoWhenNotProvided } = props;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.config = config;
        if (ref.current) {
            if (layer) {
                ref.current.layer = layer;
            }
            else {
                // If update config and inline-data at the same time, the update of data will be ignored
                setTimeout(() => {
                    ref.current.inlineData = inlineData;
                });
            }
        }
    }, [config, inlineData, layer]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.runtimeDataFilters = runtimeDataFilters;
    }, [runtimeDataFilters]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.view = view;
        ref.current.rotation = rotation;
        ref.current.legendPosition = legendPosition;
        ref.current.legendVisibility = legendVisibility;
        ref.current.legendVisibility = legendVisibility;
        ref.current.xAxisLabelFormatter = xAxisLabelFormatter;
        ref.current.yAxisLabelFormatter = yAxisLabelFormatter;
    }, [
        view,
        rotation,
        legendPosition,
        legendVisibility,
        xAxisLabelFormatter,
        yAxisLabelFormatter
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.selectionData = selectionData;
        ref.current.selectionTheme = selectionTheme;
        ref.current.chartLimits = chartLimits;
        ref.current.placeholder = placeholder;
        ref.current.tooltipFormatter = tooltipFormatter;
        ref.current.dataLabelFormatter = dataLabelFormatter;
        ref.current.actionMode = actionMode;
        ref.current.filterBySelection = filterBySelection;
        ref.current.disableInteractions = disableInteractions;
    }, [
        selectionData,
        selectionTheme,
        chartLimits,
        placeholder,
        tooltipFormatter,
        dataLabelFormatter,
        actionMode,
        filterBySelection,
        disableInteractions
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.returnSelectionIndexes = returnSelectionIndexes;
        ref.current.returnSelectionOIDs = returnSelectionOIDs;
    }, [returnSelectionIndexes, returnSelectionOIDs]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.autoDisposeChart = autoDisposeChart;
        ref.current.enableResponsiveFeatures = enableResponsiveFeatures;
        ref.current.hideLicenceWatermark = hideLicenceWatermark;
        ref.current.queueChartCreation = queueChartCreation;
        ref.current.useAnimatedCharts = useAnimatedCharts;
        ref.current.hideLoaderAnimation = hideLoaderAnimation;
    }, [
        autoDisposeChart,
        enableResponsiveFeatures,
        hideLicenceWatermark,
        queueChartCreation,
        useAnimatedCharts,
        hideLoaderAnimation
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.noDataOptions = noDataOptions;
    }, [noDataOptions]);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessComplete', arcgisChartsDataProcessComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessError', arcgisChartsDataProcessError);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsLegendItemVisibilityChange', arcgisChartsLegendItemVisibilityChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsUpdateComplete', arcgisChartsUpdateComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSeriesColorChange', arcgisChartsSeriesColorChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsAxesMinMaxChange', arcgisChartsAxesMinMaxChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDefaultActionSelect', arcgisChartsDefaultActionSelect);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSelectionComplete', arcgisChartsSelectionComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsActionBarToggle', arcgisChartsActionBarToggle);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsNoRenderPropChange', arcgisChartsNoRenderPropChange);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.ignoreSmoothRenderingLimit = ignoreSmoothRenderingLimit;
        ref.current.setTimeBinningInfoWhenNotProvided = setTimeBinningInfoWhenNotProvided;
    }, [
        ignoreSmoothRenderingLimit,
        setTimeBinningInfoWhenNotProvided
    ]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-charts-line-chart", { ref: handleRef, class: className }));
});


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/line/index.ts":
/*!**************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/line/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChart: () => (/* reexport safe */ _line__WEBPACK_IMPORTED_MODULE_1__.LineChart),
/* harmony export */   LineChartCore: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.LineChartCore)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/line/core.tsx");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./jimu-ui/advanced/lib/chart/line/line.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/line/line.tsx":
/*!**************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/line/line.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChart: () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/line/core.tsx");
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



const LineChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const { webMapWebChart: propWebMapWebChart, dataSource } = props, others = __rest(props, ["webMapWebChart", "dataSource"]);
    const defined = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useChartComponentDefined)('lineSeries');
    const webMapWebChart = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useNormalizedChartObject)(propWebMapWebChart);
    const webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return Object.assign(Object.assign({}, webMapWebChart), { dataSource });
    }, [webMapWebChart, dataSource]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, defined && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core__WEBPACK_IMPORTED_MODULE_2__.LineChartCore, Object.assign({ ref: chartRef, config: webChart }, others))));
}));
LineChart.displayName = 'LineChart';


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/pie/core.tsx":
/*!*************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/pie/core.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChartCore: () => (/* binding */ PieChartCore)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");


const PieChartCore = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useForkChartRef)(ref, chartRef);
    const { className, config, layer, view, legendPosition, legendVisibility, runtimeDataFilters, inlineData, selectionData, selectionTheme, chartLimits, placeholder, tooltipFormatter, dataLabelFormatter, actionMode, filterBySelection, disableInteractions, noDataOptions, returnSelectionIndexes, returnSelectionOIDs, autoDisposeChart, enableResponsiveFeatures, hideLicenceWatermark, queueChartCreation, useAnimatedCharts, hideLoaderAnimation, chartWillRender, arcgisChartsDataProcessComplete, arcgisChartsDataProcessError, arcgisChartsLegendItemVisibilityChange, arcgisChartsUpdateComplete, arcgisChartsSeriesColorChange, arcgisChartsAxesMinMaxChange, arcgisChartsDefaultActionSelect, arcgisChartsSelectionComplete, arcgisChartsActionBarToggle, arcgisChartsNoRenderPropChange, legendValueLabelFormatter } = props;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.config = config;
        if (ref.current) {
            if (layer) {
                ref.current.layer = layer;
            }
            else {
                // If update config and inline-data at the same time, the update of data will be ignored
                setTimeout(() => {
                    ref.current.inlineData = inlineData;
                });
            }
        }
    }, [config, inlineData, layer]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.runtimeDataFilters = runtimeDataFilters;
    }, [runtimeDataFilters]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.view = view;
        ref.current.legendPosition = legendPosition;
        ref.current.legendVisibility = legendVisibility;
        ref.current.legendVisibility = legendVisibility;
    }, [
        view,
        legendPosition,
        legendVisibility
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.selectionData = selectionData;
        ref.current.selectionTheme = selectionTheme;
        ref.current.chartLimits = chartLimits;
        ref.current.placeholder = placeholder;
        ref.current.tooltipFormatter = tooltipFormatter;
        ref.current.dataLabelFormatter = dataLabelFormatter;
        ref.current.actionMode = actionMode;
        ref.current.filterBySelection = filterBySelection;
        ref.current.disableInteractions = disableInteractions;
    }, [
        selectionData,
        selectionTheme,
        chartLimits,
        placeholder,
        tooltipFormatter,
        dataLabelFormatter,
        actionMode,
        filterBySelection,
        disableInteractions
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.returnSelectionIndexes = returnSelectionIndexes;
        ref.current.returnSelectionOIDs = returnSelectionOIDs;
    }, [returnSelectionIndexes, returnSelectionOIDs]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.autoDisposeChart = autoDisposeChart;
        ref.current.enableResponsiveFeatures = enableResponsiveFeatures;
        ref.current.hideLicenceWatermark = hideLicenceWatermark;
        ref.current.queueChartCreation = queueChartCreation;
        ref.current.useAnimatedCharts = useAnimatedCharts;
        ref.current.hideLoaderAnimation = hideLoaderAnimation;
    }, [
        autoDisposeChart,
        enableResponsiveFeatures,
        hideLicenceWatermark,
        queueChartCreation,
        useAnimatedCharts,
        hideLoaderAnimation
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.noDataOptions = noDataOptions;
    }, [noDataOptions]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.chartWillRender = chartWillRender;
    }, [chartWillRender]);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessComplete', arcgisChartsDataProcessComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessError', arcgisChartsDataProcessError);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsLegendItemVisibilityChange', arcgisChartsLegendItemVisibilityChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsUpdateComplete', arcgisChartsUpdateComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSeriesColorChange', arcgisChartsSeriesColorChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsAxesMinMaxChange', arcgisChartsAxesMinMaxChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDefaultActionSelect', arcgisChartsDefaultActionSelect);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSelectionComplete', arcgisChartsSelectionComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsActionBarToggle', arcgisChartsActionBarToggle);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsNoRenderPropChange', arcgisChartsNoRenderPropChange);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.legendValueLabelFormatter = legendValueLabelFormatter;
    }, [
        legendValueLabelFormatter
    ]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-charts-pie-chart", { ref: handleRef, class: className }));
});


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/pie/index.ts":
/*!*************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/pie/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChart: () => (/* reexport safe */ _pie__WEBPACK_IMPORTED_MODULE_1__.PieChart),
/* harmony export */   PieChartCore: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.PieChartCore)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/pie/core.tsx");
/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie */ "./jimu-ui/advanced/lib/chart/pie/pie.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/pie/pie.tsx":
/*!************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/pie/pie.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieChart: () => (/* binding */ PieChart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/pie/core.tsx");
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



const PieChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const { webMapWebChart: propWebMapWebChart, dataSource } = props, others = __rest(props, ["webMapWebChart", "dataSource"]);
    const defined = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useChartComponentDefined)('pieSeries');
    const webMapWebChart = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useNormalizedChartObject)(propWebMapWebChart);
    const webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return Object.assign(Object.assign({}, webMapWebChart), { dataSource });
    }, [webMapWebChart, dataSource]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, defined && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core__WEBPACK_IMPORTED_MODULE_2__.PieChartCore, Object.assign({ ref: chartRef, config: webChart }, others))));
}));
PieChart.displayName = 'PieChart';


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/scatter/core.tsx":
/*!*****************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/scatter/core.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScatterPlotCore: () => (/* binding */ ScatterPlotCore)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");


const ScatterPlotCore = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const ref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(null);
    const handleRef = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useForkChartRef)(ref, chartRef);
    const { className, config, layer, view, legendPosition, legendVisibility, xAxisLabelFormatter, yAxisLabelFormatter, runtimeDataFilters, inlineData, selectionData, selectionTheme, placeholder, tooltipFormatter, dataLabelFormatter, actionMode, filterBySelection, disableInteractions, noDataOptions, returnSelectionIndexes, returnSelectionOIDs, autoDisposeChart, enableResponsiveFeatures, hideLicenceWatermark, queueChartCreation, useAnimatedCharts, hideLoaderAnimation, arcgisChartsDataProcessComplete, arcgisChartsDataProcessError, arcgisChartsLegendItemVisibilityChange, arcgisChartsUpdateComplete, arcgisChartsSeriesColorChange, arcgisChartsAxesMinMaxChange, arcgisChartsDefaultActionSelect, arcgisChartsSelectionComplete, arcgisChartsActionBarToggle, arcgisChartsNoRenderPropChange, ignoreSmoothRenderingLimit } = props;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.config = config;
        if (ref.current) {
            if (layer) {
                ref.current.layer = layer;
            }
            else {
                // If update config and inline-data at the same time, the update of data will be ignored
                setTimeout(() => {
                    ref.current.inlineData = inlineData;
                });
            }
        }
    }, [config, inlineData, layer]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.runtimeDataFilters = runtimeDataFilters;
    }, [runtimeDataFilters]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.view = view;
        ref.current.legendPosition = legendPosition;
        ref.current.legendVisibility = legendVisibility;
        ref.current.legendVisibility = legendVisibility;
        ref.current.xAxisLabelFormatter = xAxisLabelFormatter;
        ref.current.yAxisLabelFormatter = yAxisLabelFormatter;
    }, [
        view,
        legendPosition,
        legendVisibility,
        xAxisLabelFormatter,
        yAxisLabelFormatter
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.selectionData = selectionData;
        ref.current.selectionTheme = selectionTheme;
        ref.current.placeholder = placeholder;
        ref.current.tooltipFormatter = tooltipFormatter;
        ref.current.dataLabelFormatter = dataLabelFormatter;
        ref.current.actionMode = actionMode;
        ref.current.filterBySelection = filterBySelection;
        ref.current.disableInteractions = disableInteractions;
    }, [
        selectionData,
        selectionTheme,
        placeholder,
        tooltipFormatter,
        dataLabelFormatter,
        actionMode,
        filterBySelection,
        disableInteractions
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.returnSelectionIndexes = returnSelectionIndexes;
        ref.current.returnSelectionOIDs = returnSelectionOIDs;
    }, [returnSelectionIndexes, returnSelectionOIDs]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.autoDisposeChart = autoDisposeChart;
        ref.current.enableResponsiveFeatures = enableResponsiveFeatures;
        ref.current.hideLicenceWatermark = hideLicenceWatermark;
        ref.current.queueChartCreation = queueChartCreation;
        ref.current.useAnimatedCharts = useAnimatedCharts;
        ref.current.hideLoaderAnimation = hideLoaderAnimation;
    }, [
        autoDisposeChart,
        enableResponsiveFeatures,
        hideLicenceWatermark,
        queueChartCreation,
        useAnimatedCharts,
        hideLoaderAnimation
    ]);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.noDataOptions = noDataOptions;
    }, [noDataOptions]);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessComplete', arcgisChartsDataProcessComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDataProcessError', arcgisChartsDataProcessError);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsLegendItemVisibilityChange', arcgisChartsLegendItemVisibilityChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsUpdateComplete', arcgisChartsUpdateComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSeriesColorChange', arcgisChartsSeriesColorChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsAxesMinMaxChange', arcgisChartsAxesMinMaxChange);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsDefaultActionSelect', arcgisChartsDefaultActionSelect);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsSelectionComplete', arcgisChartsSelectionComplete);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsActionBarToggle', arcgisChartsActionBarToggle);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useRegisterEvent)(ref, 'arcgisChartsNoRenderPropChange', arcgisChartsNoRenderPropChange);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        ref.current.ignoreSmoothRenderingLimit = ignoreSmoothRenderingLimit;
    }, [
        ignoreSmoothRenderingLimit
    ]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("arcgis-charts-scatter-plot", { ref: handleRef, class: className }));
});


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/scatter/index.ts":
/*!*****************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/scatter/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScatterPlot: () => (/* reexport safe */ _scatter__WEBPACK_IMPORTED_MODULE_1__.ScatterPlot),
/* harmony export */   ScatterPlotCore: () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.ScatterPlotCore)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/scatter/core.tsx");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scatter */ "./jimu-ui/advanced/lib/chart/scatter/scatter.tsx");




/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/scatter/scatter.tsx":
/*!********************************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/scatter/scatter.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScatterPlot: () => (/* binding */ ScatterPlot)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./jimu-ui/advanced/lib/chart/utils.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./jimu-ui/advanced/lib/chart/scatter/core.tsx");
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



const ScatterPlot = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.memo(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.forwardRef((props, chartRef) => {
    const { webMapWebChart: propWebMapWebChart, dataSource } = props, others = __rest(props, ["webMapWebChart", "dataSource"]);
    const defined = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useChartComponentDefined)('scatterSeries');
    const webMapWebChart = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useNormalizedChartObject)(propWebMapWebChart);
    const webChart = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        return Object.assign(Object.assign({}, webMapWebChart), { dataSource });
    }, [webMapWebChart, dataSource]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, defined && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_core__WEBPACK_IMPORTED_MODULE_2__.ScatterPlotCore, Object.assign({ ref: chartRef, config: webChart }, others))));
}));
ScatterPlot.displayName = 'ScatterPlot';


/***/ }),

/***/ "./jimu-ui/advanced/lib/chart/utils.ts":
/*!*********************************************!*\
  !*** ./jimu-ui/advanced/lib/chart/utils.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeUnprivilegedChart: () => (/* binding */ makeUnprivilegedChart),
/* harmony export */   traverse: () => (/* binding */ traverse),
/* harmony export */   traverseConvertColor: () => (/* binding */ traverseConvertColor),
/* harmony export */   traverseConvertSymbolColor: () => (/* binding */ traverseConvertSymbolColor),
/* harmony export */   traverseConvertWebChartColor: () => (/* binding */ traverseConvertWebChartColor),
/* harmony export */   useChartComponentDefined: () => (/* binding */ useChartComponentDefined),
/* harmony export */   useForkChartRef: () => (/* binding */ useForkChartRef),
/* harmony export */   useNormalizedChartObject: () => (/* binding */ useNormalizedChartObject),
/* harmony export */   useRegisterEvent: () => (/* binding */ useRegisterEvent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_lib_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/lib/utils/utils */ "./jimu-ui/lib/utils/utils.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




/**
 * Traverses and converts all string colors to symbol colors.
 * @param input
 * @param theme
 *
 * [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 */
const traverseConvertColor = (input, theme, identifier = 'color') => {
    if (!theme)
        return input;
    const convertToSymbolColor = (theme, key, value) => {
        const applyIdentifier = (key) => {
            if (typeof identifier === 'string') {
                return key === identifier;
            }
            else if (typeof identifier === 'function') {
                return identifier(key);
            }
        };
        if (applyIdentifier(key)) {
            const color = (0,jimu_ui_lib_utils_utils__WEBPACK_IMPORTED_MODULE_1__.convertStringColorToJsAPISymbolColor)(value, theme);
            return color;
        }
        return value;
    };
    const webChart = traverse(input, convertToSymbolColor.bind(null, theme), null);
    return webChart;
};
const traverseConvertWebChartColor = (input, theme) => {
    return traverseConvertSymbolColor(input, theme);
};
const traverseConvertSymbolColor = (input, theme) => {
    const identifier = (key) => key === 'color' || key === 'background';
    return traverseConvertColor(input, theme, identifier);
};
/**
 * Traverse an object and execute a callback function on the [primitive] value
 * @param input
 * @param callback
 * @param key
 * @returns input
 */
const traverse = (input, callback, key) => {
    if (Object.prototype.toString.call(input) === '[object Object]') {
        Object.entries(input).forEach(([_key, value]) => {
            value = traverse(value, callback, _key);
            if (input.asMutable) {
                input = input.set(_key, value);
            }
            else {
                input[_key] = value;
            }
        });
    }
    else if (Object.prototype.toString.call(input) === '[object Array]') {
        input.forEach((value, idx) => {
            value = traverse(value, callback, idx);
            if (input.asMutable) {
                input = input.set(idx, value);
            }
            else {
                input[idx] = value;
            }
        });
    }
    else {
        input = callback(key, input);
    }
    return input;
};
/**
 * Normalize the chart object.
 * @param input
 */
const useNormalizedChartObject = (input) => {
    const theme = (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    /**
     * Convert to mutable object.
     */
    const output1 = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        const output = input;
        if (output.asMutable != null) {
            return output.asMutable({ deep: true });
        }
        return output;
    }, [input]);
    /**
     * Traverses and converts all string colors to symbol colors.
     */
    const output = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        const cloned = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.cloneDeep(output1);
        return traverseConvertSymbolColor(cloned, theme);
    }, [theme, output1]);
    return output;
};
const useRegisterEvent = (nodeRef, eventName, callback) => {
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        const node = nodeRef === null || nodeRef === void 0 ? void 0 : nodeRef.current;
        if (node && eventName && callback) {
            node.addEventListener(eventName, callback);
        }
        return () => {
            if (node && eventName && callback) {
                node.removeEventListener(eventName, callback);
            }
        };
    }, [eventName, nodeRef, callback]);
};
/**
 * Returns an weaker, unprivileged proxy object that only exposes methods of chart element.
 * @param chart
 * @returns {UnprivilegedChart}
 */
const makeUnprivilegedChart = (chart) => {
    if (chart == null)
        return;
    return {
        setActionMode: (actionMode) => { chart.actionMode = actionMode; },
        resetZoom: function () { return chart.resetZoom.apply(chart, arguments); },
        clearSelection: function () { return chart.clearSelection.apply(chart, arguments); },
        switchSelection: function () { return chart.switchSelection.apply(chart, arguments); },
        notify: function () { return chart.notify.apply(chart, arguments); },
        refresh: function () { return chart.refresh.apply(chart, arguments); }
    };
};
const useForkChartRef = (ref, chartRef) => {
    const handleRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useMemo(() => {
        if (ref == null && chartRef == null) {
            return null;
        }
        return element => {
            ref.current = element;
            jimu_ui__WEBPACK_IMPORTED_MODULE_3__.utils.setRef(chartRef, makeUnprivilegedChart(element));
        };
    }, [ref, chartRef]);
    return handleRef;
};
const ChartTags = {
    barSeries: 'arcgis-charts-bar-chart',
    lineSeries: 'arcgis-charts-line-chart',
    pieSeries: 'arcgis-charts-pie-chart',
    scatterSeries: 'arcgis-charts-scatter-plot',
    histogramSeries: 'arcgis-charts-histogram'
};
const useChartComponentDefined = (chartType) => {
    const [defined, setDefined] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState(false);
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        customElements.whenDefined(ChartTags[chartType]).then(function () {
            setDefined(true);
        });
    }, [chartType]);
    return defined;
};


/***/ }),

/***/ "./jimu-ui/lib/utils/color-names.ts":
/*!******************************************!*\
  !*** ./jimu-ui/lib/utils/color-names.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_NAMES: () => (/* binding */ COLOR_NAMES)
/* harmony export */ });
const COLOR_NAMES = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
    'antiquewhite',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'limegreen',
    'linen',
    'magenta',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'oldlace',
    'olivedrab',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'whitesmoke',
    'yellowgreen'
];


/***/ }),

/***/ "./jimu-ui/lib/utils/utils.ts":
/*!************************************!*\
  !*** ./jimu-ui/lib/utils/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLOR_VARIABLE_REGEX: () => (/* binding */ COLOR_VARIABLE_REGEX),
/* harmony export */   applyLinkResult: () => (/* binding */ applyLinkResult),
/* harmony export */   applyLinkStringAndLocation: () => (/* binding */ applyLinkStringAndLocation),
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   convertJsAPISymbolColorToStringColor: () => (/* binding */ convertJsAPISymbolColorToStringColor),
/* harmony export */   convertStringColorToJsAPISymbolColor: () => (/* binding */ convertStringColorToJsAPISymbolColor),
/* harmony export */   createChainedFunction: () => (/* binding */ createChainedFunction),
/* harmony export */   fetchTextInputValidityResult: () => (/* binding */ fetchTextInputValidityResult),
/* harmony export */   getColorAlpha: () => (/* binding */ getColorAlpha),
/* harmony export */   getColorValue: () => (/* binding */ getColorValue),
/* harmony export */   getLinkHrefByLinkResult: () => (/* binding */ getLinkHrefByLinkResult),
/* harmony export */   isColorVariable: () => (/* binding */ isColorVariable),
/* harmony export */   isCurrentDlgCanBeClosed: () => (/* binding */ isCurrentDlgCanBeClosed),
/* harmony export */   isHrefCanBeChanged: () => (/* binding */ isHrefCanBeChanged),
/* harmony export */   isModifiedEvent: () => (/* binding */ isModifiedEvent),
/* harmony export */   isOutOrTopTargetLink: () => (/* binding */ isOutOrTopTargetLink),
/* harmony export */   isTransparentColor: () => (/* binding */ isTransparentColor),
/* harmony export */   isValidColor: () => (/* binding */ isValidColor),
/* harmony export */   isValidNormalColor: () => (/* binding */ isValidNormalColor),
/* harmony export */   isWidgetSelected: () => (/* binding */ isWidgetSelected),
/* harmony export */   setRef: () => (/* binding */ setRef),
/* harmony export */   stringOfLinearUnit: () => (/* binding */ stringOfLinearUnit),
/* harmony export */   toColorString: () => (/* binding */ toColorString),
/* harmony export */   toColorVariable: () => (/* binding */ toColorVariable),
/* harmony export */   toIconResult: () => (/* binding */ toIconResult),
/* harmony export */   toLinearUnit: () => (/* binding */ toLinearUnit),
/* harmony export */   toRgba: () => (/* binding */ toRgba)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _color_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-names */ "./jimu-ui/lib/utils/color-names.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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



const COLOR_VARIABLE_REGEX = /^var\(--(.+?)\)$/;
const toColorVariable = (name, index) => {
    if (name == null || name === '')
        return;
    if (typeof index !== 'undefined') {
        return `var(--${name}-${index})`;
    }
    else {
        return `var(--${name})`;
    }
};
const isColorVariable = (color) => {
    return !!COLOR_VARIABLE_REGEX.test(color);
};
const getColorValue = (color, theme) => {
    return isColorVariable(color) ? (0,jimu_theme__WEBPACK_IMPORTED_MODULE_2__.getThemeColorValue)(color, theme) : color;
};
const isTransparentColor = (color) => {
    if (color === 'transparent') {
        return true;
    }
    try {
        const rgba = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.parseToRgb(color);
        return !!((rgba === null || rgba === void 0 ? void 0 : rgba.alpha) === 0);
    }
    catch (error) {
        console.error(error);
    }
};
const toColorString = (color) => {
    // if alpha is 1, return hex;
    if (color.rgb.a === 1) {
        return color.hex;
    }
    else {
        return toRgba(color.rgb);
    }
};
const toRgba = (color) => {
    return `rgba(${color.r},${color.g},${color.b},${color.a})`;
};
/**
 * Convert a string format color to esri symbol color
 * @param value [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 * @param theme
 * @returns string color
 */
const convertJsAPISymbolColorToStringColor = (value) => {
    if (!Array.isArray(value)) {
        return value;
    }
    const [red, green, blue, _alpha] = value;
    const alpha = (_alpha !== null && _alpha !== void 0 ? _alpha : 255) / 255;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(red, green, blue, alpha);
};
/**
 * Convert a string format color to esri symbol color
 * @param value string color
 * @param theme
 * @returns [symbol color](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#color)
 */
const convertStringColorToJsAPISymbolColor = (value, theme) => {
    var _a;
    if (typeof value !== 'string' || value === '' || value == null)
        return value;
    const color = getColorValue(value, theme);
    const rgba = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.parseToRgb(color);
    if (rgba == null)
        return;
    const { red, green, blue } = rgba;
    const alpha = ((_a = rgba.alpha) !== null && _a !== void 0 ? _a : 1) * 255;
    return [red, green, blue, alpha];
};
const COLOR_REG = /^(#|rgb|rgba|var)/gm;
const NORMAL_COLOR_REG = /^(#|rgb|rgba)/gm;
const isValidColor = (color) => {
    if (typeof color !== 'string')
        return false;
    return _color_names__WEBPACK_IMPORTED_MODULE_1__.COLOR_NAMES.includes(color) || (color === null || color === void 0 ? void 0 : color.match(COLOR_REG)) != null;
};
const isValidNormalColor = (color) => {
    if (typeof color !== 'string')
        return false;
    return _color_names__WEBPACK_IMPORTED_MODULE_1__.COLOR_NAMES.includes(color) || (color === null || color === void 0 ? void 0 : color.match(NORMAL_COLOR_REG)) != null;
};
const getColorAlpha = (color) => {
    var _a;
    if (!isValidNormalColor(color))
        return 1;
    const rgba = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.parseToRgb(color);
    return (_a = rgba.alpha) !== null && _a !== void 0 ? _a : 1;
};
const setRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref != null) {
        ref.current = value;
    }
};
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
const createChainedFunction = (...funcs) => {
    return funcs.reduce((acc, func) => {
        if (func == null) {
            return acc;
        }
        if (typeof func !== 'function') {
            console.error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }
        return function chainedFunction(...args) {
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, () => { });
};
function toLinearUnit(cssValue) {
    var _a;
    const vu = jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.getValueAndUnit(cssValue);
    return {
        distance: vu[0],
        unit: (_a = vu === null || vu === void 0 ? void 0 : vu[1]) !== null && _a !== void 0 ? _a : 'px'
    };
}
function fromLinearUnit(value) {
    var _a, _b;
    if (value.unit != null) {
        return `${(_a = value.distance) !== null && _a !== void 0 ? _a : 0}${value.unit}`;
    }
    return `${(_b = value.distance) !== null && _b !== void 0 ? _b : 0}px`;
}
function stringOfLinearUnit(cssValue) {
    if (cssValue == null) {
        return '';
    }
    if (typeof cssValue === 'object') {
        return fromLinearUnit(cssValue);
    }
    const lu = toLinearUnit(cssValue);
    return fromLinearUnit(lu);
}
const toIconResult = (icon, filename, size = 12) => {
    return {
        svg: icon,
        properties: {
            filename,
            size
        }
    };
};
const isOutOrTopTargetLink = (linkType, href, target) => {
    const isWebAddress = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.isAbsoluteUrl(href) || /^www./.test(href)) || linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress;
    const isTopTarget = target === '_top';
    const isPrintPreview = linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview;
    return isWebAddress || isTopTarget || isPrintPreview;
};
const capitalizeFirstLetter = (string) => {
    if (typeof string !== 'string')
        return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 * Check if the specified widget is selected
 * @param widgetId
 */
const isWidgetSelected = (widgetId, state) => {
    var _a, _b, _c, _d;
    state = state != null ? state : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
    const selection = (_a = state.appRuntimeInfo) === null || _a === void 0 ? void 0 : _a.selection;
    if (!((_b = state.appConfig) === null || _b === void 0 ? void 0 : _b.layouts) || !selection) {
        return false;
    }
    const layout = state.appConfig.layouts[selection.layoutId];
    return ((_d = (_c = layout === null || layout === void 0 ? void 0 : layout.content) === null || _c === void 0 ? void 0 : _c[selection.layoutItemId]) === null || _d === void 0 ? void 0 : _d.widgetId) === widgetId;
};
function fetchTextInputValidityResult(value, checkValidityFunc) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const result = checkValidityFunc(value);
        if (typeof result.then === 'function') {
            try {
                return yield result;
            }
            catch (err) {
                return { valid: false, msg: (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : err };
            }
        }
        return result;
    });
}
const isModifiedEvent = evt => !!(evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey);
const shouldContinueLinkClick = (evt, target, linkHref) => {
    return !evt.defaultPrevented && // onClick prevented default
        evt.button === 0 && // ignore everything but left clicks
        (!target || target === '_self') &&
        !isModifiedEvent(evt) && // ignore clicks with modifier keys
        !jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.isAbsoluteUrl(linkHref);
};
const applyLinkStringAndLocation = (evt, target, linkHref, replace, history, onClick) => {
    onClick && onClick(evt);
    if (!shouldContinueLinkClick(evt, target, linkHref)) {
        return;
    }
    evt.preventDefault();
    if (!linkHref) {
        return;
    }
    applyLinkHrefToHistory(linkHref, replace, history);
};
const applyLinkResult = (props) => {
    var _a;
    switch (props.linkTo.linkType) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PageTop:
            applyLinkResultPageTop(props.evt, props.onClick);
            break;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress:
            applyLinkResultWebAddress(props.evt, props.onClick);
            break;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block:
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Screen:
            applyLinkResultBlockAndScreen({
                evt: props.evt,
                target: props.target,
                linkHref: props.linkHref,
                linkTo: props.linkTo,
                replace: props.replace,
                history: props.history,
                onClick: props.onClick
            });
            break;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page:
            applyLinkResultPage(props);
            break;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog:
            applyLinkResultDialog(props);
            break;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.View:
            applyLinkResultView(props);
            break;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.PrintPreview:
            applyLinkResultPrintPreview(props);
            break;
        default: // None
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props.evt);
            break;
    }
};
const applyLinkHrefToHistory = (linkHref, replace, history) => {
    const loc = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.createLocation(window.location, linkHref);
    try {
        if (replace) {
            history.replace(loc);
        }
        else {
            history.push(loc);
        }
    }
    catch (err) {
        console.error('Failed to change browser history', err);
    }
};
const applyLinkResultPageTop = (evt, onClick) => {
    var _a, _b;
    if ((_a = window === null || window === void 0 ? void 0 : window.jimuConfig) === null || _a === void 0 ? void 0 : _a.isInBuilder) {
        (_b = document === null || document === void 0 ? void 0 : document.querySelector('.page-renderer')) === null || _b === void 0 ? void 0 : _b.scroll({ left: 0, top: 0 });
    }
    else {
        window === null || window === void 0 ? void 0 : window.scroll({ left: 0, top: 0 });
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
};
const applyLinkResultWebAddress = (evt, onClick) => {
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
};
const applyLinkResultBlockAndScreen = (props) => {
    var _a;
    const { evt, target, linkHref, linkTo, replace, history, onClick } = props;
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    if (!shouldContinueLinkClick(evt, target, linkHref)) {
        return;
    }
    if (!linkHref) {
        return;
    }
    applyLinkHrefToHistory(linkHref, replace, history);
    // scroll to block
    if (linkTo.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Block) {
        evt.preventDefault();
        (_a = document.querySelector(`div#${linkTo.value}`)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }
};
const applyLinkResultPage = (props) => {
    const { evt, target, history, replace, linkHref, onClick } = props, others = __rest(props, ["evt", "target", "history", "replace", "linkHref", "onClick"]);
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    if (!shouldContinueLinkClick(evt, target, linkHref)) {
        return;
    }
    evt.preventDefault();
    if (!linkHref) {
        return;
    }
    if (isHrefCanBeChanged(others)) {
        clearSelectionByLinkClick(props.dispatch);
        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.activePagePartChanged(jimu_core__WEBPACK_IMPORTED_MODULE_0__.PagePart.Body));
        applyLinkHrefToHistory(linkHref, replace, history);
    }
};
const applyLinkResultDialog = (props) => {
    var _a, _b;
    const { evt, target, history, replace, linkHref, onClick } = props, others = __rest(props, ["evt", "target", "history", "replace", "linkHref", "onClick"]);
    if (props.dialogJson) { // for anchored dlg
        /**
         * can open anchored dlg from no dlg, or a normal fixed dlg (with comfirmation checked)
         * can't:
         *  from anchored dlg.
         *  or from splash and page dlgs, since their states will be disappeared.
         */
        if (!props.currentDialogJson ||
            (((_a = props.currentDialogJson) === null || _a === void 0 ? void 0 : _a.mode) !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DialogMode.Anchored &&
                !((_b = props.currentDialogJson) === null || _b === void 0 ? void 0 : _b.isSplash) &&
                !props.isPageDlg &&
                isCurrentDlgCanBeClosed(props))) {
            props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.currentDialogChanged(props.dialogJson.id));
            props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.activePagePartChanged(null));
        }
        clearSelectionByLinkClick(props.dispatch);
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    if (!shouldContinueLinkClick(evt, target, linkHref)) {
        return;
    }
    evt.preventDefault();
    if (!linkHref) {
        return;
    }
    if (isHrefCanBeChanged(others)) {
        clearSelectionByLinkClick(props.dispatch);
        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.activePagePartChanged(null));
        applyLinkHrefToHistory(linkHref, replace, history);
    }
};
const applyLinkResultView = (props) => {
    var _a, _b, _c;
    const { evt, target, history, replace, linkHref, onClick, linkTo } = props;
    const pageOrDlgId = (_a = linkTo.value) === null || _a === void 0 ? void 0 : _a.split(',')[0];
    if ((_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.dialogs) === null || _b === void 0 ? void 0 : _b[pageOrDlgId]) {
        const dialogJson = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.dialogs) === null || _c === void 0 ? void 0 : _c[pageOrDlgId];
        if ((dialogJson === null || dialogJson === void 0 ? void 0 : dialogJson.mode) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DialogMode.Anchored) {
            applyLinkResultDialog(Object.assign(Object.assign({}, props), { dialogJson }));
            return;
        }
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    if (!shouldContinueLinkClick(evt, target, linkHref)) {
        return;
    }
    evt.preventDefault();
    if (!linkHref) {
        return;
    }
    if (isHrefCanBeChanged(props)) {
        applyLinkHrefToHistory(linkHref, replace, history);
    }
};
const applyLinkResultPrintPreview = (props) => {
    const { evt, target, history, replace, linkHref, onClick, dispatch } = props;
    onClick === null || onClick === void 0 ? void 0 : onClick(evt);
    if (!shouldContinueLinkClick(evt, target, linkHref)) {
        return;
    }
    evt.preventDefault();
    if (!linkHref) {
        return;
    }
    dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.activePrintPreview());
    applyLinkHrefToHistory(linkHref, replace, history);
};
const clearSelectionByLinkClick = (dispatch, times = 50) => {
    // clear widget setting
    setTimeout(() => {
        dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.selectionChanged(null));
    }, times);
};
const isHrefCanBeChanged = (props) => {
    var _a, _b, _c;
    const { queryObject, dispatch, dialogInfos, linkTo, isPageDlg, currentPageId, currentDialogId, currentDialogJson, currentPageDlgId } = props;
    // Do not need to handle dialog details for following cases.
    if (!currentDialogJson) { // no current dlg
        return true;
    }
    // check if current dlg can be closed and no other dlgs behind.
    const dlgId = isPageDlg ? currentPageId + '-' + currentDialogId : currentDialogId;
    const urlDlgId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getDialogIdFromIdOrLabel(queryObject === null || queryObject === void 0 ? void 0 : queryObject.dlg, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig);
    let canBeChange = false;
    // Two cases:
    //  1. current dlg is anchored
    //  2. current dlg is fixed( can be closed )
    if (currentDialogJson.mode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DialogMode.Anchored) { // ... -> anchored(current) -> fixed, page
        const to = linkTo;
        if (!urlDlgId) { // anchored -> fixed, page
            canBeChange = true;
            if (to.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page) { // back to current page
                dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.currentDialogChanged(null));
            }
        }
        else {
            // when queryObject.dlg exists which means:
            // case1: anchord dlg(current, display as fixed by TOC) -> open another fixed dlg or page.
            // case2: fixed(queryObject.dlg) -> anchored dlg (current) -> open another fixed dlg(not supported) or current page(supported).
            if (urlDlgId === currentDialogId) {
                if (to.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog || to.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page) {
                    canBeChange = true;
                }
            }
            else {
                if (to.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Page) {
                    dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.currentDialogChanged(urlDlgId)); // back to previous fixed dlg
                }
            }
        }
    }
    else if (isCurrentDlgCanBeClosed(props)) { // can be closed fixed dlg
        let nextDialog;
        let destroySplashOrPageDlg = currentDialogJson.isSplash || isPageDlg;
        let newDlgInfos = dialogInfos || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        if (window.jimuConfig.isInBuilder) {
            nextDialog = null; // for enable `canBeChange`
            // DO Not close splash by open another fixed dlg when page dlg exists.
            const pageDialogId = currentPageId + '-' + currentPageDlgId;
            if (currentDialogJson.isSplash && currentPageDlgId && !((_a = dialogInfos === null || dialogInfos === void 0 ? void 0 : dialogInfos[pageDialogId]) === null || _a === void 0 ? void 0 : _a.isClosed) && linkTo.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog) {
                nextDialog = pageDialogId;
                destroySplashOrPageDlg = false;
            }
        }
        else {
            nextDialog = (currentDialogJson.isSplash && (currentPageDlgId || urlDlgId)) || (isPageDlg && currentDialogId !== urlDlgId && urlDlgId) || null;
            if (currentDialogId === nextDialog) {
                nextDialog = null;
            }
            destroySplashOrPageDlg = destroySplashOrPageDlg &&
                !(nextDialog && linkTo.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.Dialog); // not close splash/page dlg when nextDlgId exists and trying to open a fixed dlg.
        }
        if (destroySplashOrPageDlg) {
            // trigger page-render to destory current dlg.
            newDlgInfos = newDlgInfos.setIn([dlgId, 'canClose'], true).setIn([dlgId, 'isClosed'], true);
            dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dialogInfosChanged(newDlgInfos));
        }
        // trigger href change when it will unmount and no dialog exists:
        if (!nextDialog) {
            canBeChange = true;
        }
    }
    else { // when it can't be closed (cbx should be checked first)
        const newDlgInfos = (dialogInfos || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({})).setIn([dlgId, 'alertVersion'], ((_c = (_b = dialogInfos === null || dialogInfos === void 0 ? void 0 : dialogInfos[dlgId]) === null || _b === void 0 ? void 0 : _b.alertVersion) !== null && _c !== void 0 ? _c : 0) + 1);
        dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.dialogInfosChanged(newDlgInfos));
    }
    return canBeChange;
};
const isCurrentDlgCanBeClosed = (props) => {
    var _a;
    const { dialogInfos, isPageDlg, currentPageId, currentDialogId, currentDialogJson } = props;
    const dlgId = isPageDlg ? currentPageId + '-' + currentDialogId : currentDialogId;
    return (!(currentDialogJson === null || currentDialogJson === void 0 ? void 0 : currentDialogJson.interactionType) || !(currentDialogJson === null || currentDialogJson === void 0 ? void 0 : currentDialogJson.confirmBeforeClose)) || ((_a = dialogInfos === null || dialogInfos === void 0 ? void 0 : dialogInfos[dlgId]) === null || _a === void 0 ? void 0 : _a.canClose);
};
const getLinkHrefByLinkResult = (linkTo, queryObject, history) => {
    var _a, _b, _c;
    let linkHref = null;
    if (linkTo) {
        const urlDlgId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getDialogIdFromIdOrLabel(queryObject === null || queryObject === void 0 ? void 0 : queryObject.dlg, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig);
        const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
        const currentDialogId = state.appRuntimeInfo.currentDialogId;
        const currentDialogJson = (_a = state.appConfig.dialogs) === null || _a === void 0 ? void 0 : _a[currentDialogId];
        const isPageDlg = ((_c = (_b = state.appConfig.pages) === null || _b === void 0 ? void 0 : _b[state.appRuntimeInfo.currentPageId]) === null || _c === void 0 ? void 0 : _c.autoOpenDialogId) === currentDialogId;
        const keepQueryObjectDlg = ((currentDialogJson === null || currentDialogJson === void 0 ? void 0 : currentDialogJson.isSplash) || isPageDlg) && currentDialogId !== urlDlgId;
        linkHref = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getHrefFromLinkTo(linkTo, queryObject, history && history.location, keepQueryObjectDlg);
    }
    return linkHref;
};


/***/ }),

/***/ "@arcgis/charts-components":
/*!***************************************************************!*\
  !*** external "arcgis-amd-packages/arcgis-charts-components" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_charts_components__;

/***/ }),

/***/ "@arcgis/charts-shared-utils":
/*!*****************************************************************!*\
  !*** external "arcgis-amd-packages/arcgis-charts-shared-utils" ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__arcgis_charts_shared_utils__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

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
/*!***********************************!*\
  !*** ./jimu-ui/advanced/chart.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/chart */ "./jimu-ui/advanced/lib/chart/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _lib_chart__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _lib_chart__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsMENBQUUsZ0JBQWdCLE1BQUssZUFBZTtRQUNuSCxNQUFNLGtCQUFrQixHQUFHLENBQUMsa0JBQWlCLGFBQWpCLGlCQUFpQix1QkFBakIsaUJBQWlCLENBQUUsUUFBUSxLQUFJLFNBQVMsQ0FBQyxJQUFJLGVBQWUsS0FBSyxRQUFRO1FBQ3JHLFFBQVEsR0FBRywrQ0FBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUM7SUFDN0csQ0FBQztJQUNELE9BQU8sUUFBUTtBQUNqQixDQUFDOzs7Ozs7Ozs7OztBQzFpQkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04yQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jaGFydHMtc3BlYy9kaXN0L3RzLXNjaGVtYS9jaGFydC1vYmplY3QtbGl0ZXJhbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NoYXJ0cy1zcGVjL2Rpc3QvdHMtc2NoZW1hL2NvbmZpZy1kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY2hhcnRzLXNwZWMvZGlzdC90cy1zY2hlbWEvZXZlbnRzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jaGFydHMtc3BlYy9kaXN0L3RzLXNjaGVtYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY2hhcnRzLXNwZWMvZGlzdC90cy1zY2hlbWEvcmVzdC1qcy1vYmplY3QtbGl0ZXJhbHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NoYXJ0cy1zcGVjL2Rpc3QvdHMtc2NoZW1hL3dlYi1jaGFydC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvY2hhcnQvYmFyL2Jhci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L2Jhci9jb3JlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvY2hhcnQvYmFyL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jaGFydC9oaXN0b2dyYW0vY29yZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L2hpc3RvZ3JhbS9oaXN0b2dyYW0udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jaGFydC9oaXN0b2dyYW0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jaGFydC9saW5lL2NvcmUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jaGFydC9saW5lL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jaGFydC9saW5lL2xpbmUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2xpYi9jaGFydC9waWUvY29yZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L3BpZS9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9hZHZhbmNlZC9saWIvY2hhcnQvcGllL3BpZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L3NjYXR0ZXIvY29yZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L3NjYXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L3NjYXR0ZXIvc2NhdHRlci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvYWR2YW5jZWQvbGliL2NoYXJ0L3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2xpYi91dGlscy9jb2xvci1uYW1lcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJhcmNnaXMtYW1kLXBhY2thZ2VzL2FyY2dpcy1jaGFydHMtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiYXJjZ2lzLWFtZC1wYWNrYWdlcy9hcmNnaXMtY2hhcnRzLXNoYXJlZC11dGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LXVpL2FkdmFuY2VkL2NoYXJ0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFU1RTdGF0aXN0aWNUeXBlIH0gZnJvbSBcIi4vcmVzdC1qcy1vYmplY3QtbGl0ZXJhbHNcIjtcbmV4cG9ydCBjb25zdCBXZWJDaGFydFR5cGVzID0ge1xuICAgIENoYXJ0OiBcImNoYXJ0XCIsXG4gICAgVGV4dDogXCJjaGFydFRleHRcIixcbiAgICBPdmVybGF5OiBcImNoYXJ0T3ZlcmxheVwiLFxuICAgIE92ZXJsYXlzOiBcImNoYXJ0T3ZlcmxheXNcIixcbiAgICBMZWdlbmQ6IFwiY2hhcnRMZWdlbmRcIixcbiAgICBDdXJzb3JDcm9zc2hhaXI6IFwiY3Vyc29yQ3Jvc3NoYWlyXCIsXG4gICAgQXhpczogXCJjaGFydEF4aXNcIixcbiAgICBHYXVnZUF4aXNUaWNrOiBcImdhdWdlQXhpc1RpY2tcIixcbiAgICBHYXVnZU5lZWRsZTogXCJnYXVnZU5lZWRsZVwiLFxuICAgIENhdGVnb3J5QXhpc0Zvcm1hdDogXCJjYXRlZ29yeVwiLFxuICAgIE51bWJlckF4aXNGb3JtYXQ6IFwibnVtYmVyXCIsXG4gICAgRGF0ZUF4aXNGb3JtYXQ6IFwiZGF0ZVwiLFxuICAgIEd1aWRlOiBcImNoYXJ0R3VpZGVcIixcbiAgICBTY2F0dGVyU2VyaWVzOiBcInNjYXR0ZXJTZXJpZXNcIixcbiAgICBQaWVTZXJpZXM6IFwicGllU2VyaWVzXCIsXG4gICAgUGllVGljazogXCJwaWVUaWNrXCIsXG4gICAgR2F1Z2VTZXJpZXM6IFwiZ2F1Z2VTZXJpZXNcIixcbiAgICBMaW5lU2VyaWVzOiBcImxpbmVTZXJpZXNcIixcbiAgICBCYXJTZXJpZXM6IFwiYmFyU2VyaWVzXCIsXG4gICAgSGlzdG9ncmFtU2VyaWVzOiBcImhpc3RvZ3JhbVNlcmllc1wiLFxuICAgIEJveFBsb3RTZXJpZXM6IFwiYm94UGxvdFNlcmllc1wiLFxuICAgIFByb2JhYmlsaXR5UGxvdFNlcmllczogXCJwcm9iYWJpbGl0eVBsb3RTZXJpZXNcIixcbiAgICBQcm9maWxlR3JhcGhTZXJpZXM6IFwicHJvZmlsZUdyYXBoU2VyaWVzXCIsXG4gICAgQ29tYm9MaW5lQW5kQmFyU2VyaWVzOiBcImNvbWJvTGluZUFuZEJhclNlcmllc1wiLFxuICAgIEJ1ZmZlcjogXCJidWZmZXJcIixcbiAgICBTaXplUG9saWN5OiBcInNpemVTY2FsZVwiXG59O1xuZXhwb3J0IGNvbnN0IFdlYkNoYXJ0RGF0YVRyYW5zZm9ybWF0aW9ucyA9IHtcbiAgICBOb25lOiBcIm5vbmVcIixcbiAgICBMb2c6IFwibG9nYXJpdGhtaWNcIixcbiAgICBTcXJ0OiBcInNxdWFyZVJvb3RcIlxufTtcbmV4cG9ydCBjb25zdCBXZWJDaGFydENvbG9yaW5nUGF0dGVybnMgPSB7XG4gICAgU2luZ2xlOiBcInNpbmdsZUNvbG9yXCIsXG4gICAgTWF0Y2g6IFwiY29sb3JNYXRjaFwiIC8vIGFwcGx5IHRoZSBjb2xvciBmcm9tIHRoZSBsYXllcidzIHJlbmRlcmVyIHN5bWJvbG9neVxufTtcbmV4cG9ydCBjb25zdCBXZWJDaGFydExlZ2VuZFBvc2l0aW9ucyA9IHtcbiAgICBMZWZ0OiBcImxlZnRcIixcbiAgICBSaWdodDogXCJyaWdodFwiLFxuICAgIFRvcDogXCJ0b3BcIixcbiAgICBCb3R0b206IFwiYm90dG9tXCJcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnRTdGFja2VkS2luZHMgPSB7XG4gICAgU2lkZTogXCJzaWRlQnlTaWRlXCIsXG4gICAgU3RhY2tlZDogXCJzdGFja2VkXCIsXG4gICAgU3RhY2tlZDEwMDogXCJzdGFja2VkMTAwXCJcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnRQcm9iYWJpbGl0eVBsb3RLaW5kcyA9IHtcbiAgICBHZW5lcmFsOiBcInFxUGxvdFwiLFxuICAgIE5vcm1hbGl6ZWQ6IFwibm9ybWFsUVFQbG90XCJcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnRTb3J0T3JkZXJLaW5kcyA9IHtcbiAgICBBc2NlbmRpbmc6IFwiQVNDXCIsXG4gICAgRGVzY2VuZGluZzogXCJERVNDXCJcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnREYXRhU291cmNlVHlwZXMgPSB7XG4gICAgSW5saW5lOiBcImlubGluZVwiLFxuICAgIExheWVyOiBcImxheWVyXCJcbn07XG5leHBvcnQgY29uc3QgU3RhdGlzdGljc0RlZmF1bHRzID0ge1xuICAgIHN0YXRpc3RpY1R5cGU6IFJFU1RTdGF0aXN0aWNUeXBlLkNvdW50LFxuICAgIHNvcnRpbmdPcmRlcjogV2ViQ2hhcnRTb3J0T3JkZXJLaW5kcy5Bc2NlbmRpbmdcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnRMaW5lU21vb3RoZWRLaW5kcyA9IHtcbiAgICBCZXppZXI6IFwiYmV6aWVyXCIsXG4gICAgTW9ub3RvbmVYOiBcIm1vbm90b25lWFwiLFxuICAgIE1vbm90b25lWTogXCJtb25vdG9uZVlcIlxufTtcbmV4cG9ydCBjb25zdCBXZWJDaGFydFRpbWVJbnRlcnZhbFVuaXRzID0ge1xuICAgIFNlY29uZHM6IFwiZXNyaVRpbWVVbml0c1NlY29uZHNcIixcbiAgICBNaW51dGVzOiBcImVzcmlUaW1lVW5pdHNNaW51dGVzXCIsXG4gICAgSG91cnM6IFwiZXNyaVRpbWVVbml0c0hvdXJzXCIsXG4gICAgRGF5czogXCJlc3JpVGltZVVuaXRzRGF5c1wiLFxuICAgIFdlZWtzOiBcImVzcmlUaW1lVW5pdHNXZWVrc1wiLFxuICAgIE1vbnRoczogXCJlc3JpVGltZVVuaXRzTW9udGhzXCIsXG4gICAgWWVhcnM6IFwiZXNyaVRpbWVVbml0c1llYXJzXCJcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnROdWxsUG9saWN5VHlwZXMgPSB7XG4gICAgTnVsbDogXCJudWxsXCIsXG4gICAgWmVybzogXCJ6ZXJvXCIsXG4gICAgSW50ZXJwb2xhdGU6IFwiaW50ZXJwb2xhdGVcIlxufTtcbmV4cG9ydCBjb25zdCBXZWJDaGFydFRpbWVBZ2dyZWdhdGlvblR5cGVzID0ge1xuICAgIFN0YXJ0OiBcImVxdWFsSW50ZXJ2YWxzRnJvbVN0YXJ0VGltZVwiLFxuICAgIEVuZDogXCJlcXVhbEludGVydmFsc0Zyb21FbmRUaW1lXCJcbn07XG5leHBvcnQgY29uc3QgV2ViQ2hhcnRMYWJlbEJlaGF2aW9yID0ge1xuICAgIE5vbmU6IFwibm9uZVwiLFxuICAgIFJvdGF0ZTogXCJyb3RhdGVcIixcbiAgICBTdGFnZ2VyOiBcInN0YWdnZXJcIixcbiAgICBXcmFwOiBcIndyYXBcIlxufTtcbmV4cG9ydCBjb25zdCBXZWJDaGFydFZlcnNpb25TdGF0dXMgPSB7XG4gICAgU2FtZTogXCJzYW1lXCIsXG4gICAgTmV3ZXI6IFwibmV3ZXJcIixcbiAgICBPbGRlcjogXCJvbGRlclwiLFxuICAgIFVucmVjb2duaXplZDogXCJ1bnJlY29nbml6ZWRcIlxufTtcbmV4cG9ydCBjb25zdCBXZWJDaGFydEF4aXNUeXBlcyA9IHtcbiAgICBWYWx1ZTogXCJ2YWx1ZVwiLFxuICAgIERhdGU6IFwiZGF0ZVwiLFxuICAgIENhdGVnb3J5OiBcImNhdGVnb3J5XCJcbn07XG5leHBvcnQgY29uc3QgR2F1Z2VDaGFydFN1YlR5cGVzID0ge1xuICAgIEZlYXR1cmVHYXVnZTogXCJmZWF0dXJlR2F1Z2VcIixcbiAgICBTdGF0aXN0aWNHYXVnZTogXCJzdGF0aXN0aWNHYXVnZVwiXG59O1xuZXhwb3J0IGNvbnN0IFNpemVQb2xpY3lTY2FsZVR5cGVzID0ge1xuICAgIExpbmVhcjogXCJsaW5lYXJcIixcbiAgICBMb2dhcml0aG1pYzogXCJsb2dhcml0aG1pY1wiXG59O1xuZXhwb3J0IGNvbnN0IExhYmVsVmFsdWVUeXBlcyA9IHtcbiAgICBPcmlnaW5hbFZhbHVlOiBcIm9yaWdpbmFsVmFsdWVcIixcbiAgICBNb2RpZmllZFZhbHVlOiBcIm1vZGlmaWVkVmFsdWVcIiAvLyB1c2UgZGF0YSBsYWJlbCBvciBjdXN0b20gbGFiZWw7IGluIHRoaXMgbW9kZSwgaWYgdGhlIGZpZWxkIGNvbnRhaW5zIGNvZGVkRG9tYWluVmFsdWUgYW5kIHRoZXJlIGlzIG5vIGN1c3RvbSBsYWJlbCwgaXQncyBsaWtlbHkgdGhhdCB0aGUgZGVzY3JpcHRpb24gYXNzb2NpYXRlZCB3aXRoIGNvZGVkIHZhbHVlIHdpbGwgYmUgZGlzcGxheWVkLlxufTtcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0UGllRnJvbUZpZWxkc05hbWUgPSBcImFyY2dpc19jaGFydHNfcGllX2Zyb21fZmllbGRzX25hbWVcIjtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UGllRnJvbUZpZWxkc1ZhbHVlID0gXCJhcmNnaXNfY2hhcnRzX3BpZV9mcm9tX2ZpZWxkc192YWx1ZVwiO1xuIiwiZXhwb3J0IGNvbnN0IE92ZXJsYXlUZXJtcyA9IHtcbiAgICBNZWFuOiBcIk1lYW5cIixcbiAgICBNZWRpYW46IFwiTWVkaWFuXCIsXG4gICAgU3RkRGV2OiBcIlN0YW5kYXJkIERldmlhdGlvblwiLFxuICAgIE5vcm1hbDogXCJOb3JtYWwgRGlzdHJpYnV0aW9uXCIsXG4gICAgVHJlbmRsaW5lOiBcIlRyZW5kbGluZVwiXG59O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vd2ViLWNoYXJ0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kYXRhLXNvdXJjZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY2hhcnQtb2JqZWN0LWxpdGVyYWxzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZXN0LWpzLW9iamVjdC1saXRlcmFsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlnLWRlZmF1bHRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ldmVudHNcIjtcbiIsImV4cG9ydCBjb25zdCBSRVNURmllbGRUeXBlID0ge1xuICAgIEJsb2I6IFwiZXNyaUZpZWxkVHlwZUJsb2JcIixcbiAgICBEYXRlOiBcImVzcmlGaWVsZFR5cGVEYXRlXCIsXG4gICAgRG91YmxlOiBcImVzcmlGaWVsZFR5cGVEb3VibGVcIixcbiAgICBHZW9tZXRyeTogXCJlc3JpRmllbGRUeXBlR2VvbWV0cnlcIixcbiAgICBHbG9iYWxJRDogXCJlc3JpRmllbGRUeXBlR2xvYmFsSURcIixcbiAgICBHVUlEOiBcImVzcmlGaWVsZFR5cGVHVUlEXCIsXG4gICAgSW50ZWdlcjogXCJlc3JpRmllbGRUeXBlSW50ZWdlclwiLFxuICAgIE9JRDogXCJlc3JpRmllbGRUeXBlT0lEXCIsXG4gICAgUmFzdGVyOiBcImVzcmlGaWVsZFR5cGVSYXN0ZXJcIixcbiAgICBTaW5nbGU6IFwiZXNyaUZpZWxkVHlwZVNpbmdsZVwiLFxuICAgIFNtYWxsSW50ZWdlcjogXCJlc3JpRmllbGRUeXBlU21hbGxJbnRlZ2VyXCIsXG4gICAgU3RyaW5nOiBcImVzcmlGaWVsZFR5cGVTdHJpbmdcIixcbiAgICBYTUw6IFwiZXNyaUZpZWxkVHlwZVhNTFwiXG59O1xuZXhwb3J0IGNvbnN0IFJFU1RTdGF0aXN0aWNUeXBlID0ge1xuICAgIENvdW50OiBcImNvdW50XCIsXG4gICAgU3VtOiBcInN1bVwiLFxuICAgIE1pbmltdW06IFwibWluXCIsXG4gICAgTWF4aW11bTogXCJtYXhcIixcbiAgICBBdmVyYWdlOiBcImF2Z1wiLFxuICAgIFN0YW5kYXJkRGV2aWF0aW9uOiBcInN0ZGRldlwiLFxuICAgIFZhcmlhbmNlOiBcInZhclwiLFxuICAgIENvbnRpbnVvdXNQZXJjZW50aWxlOiBcInBlcmNlbnRpbGVfY29udFwiLFxuICAgIERpc2NyZXRlUGVyY2VudGlsZTogXCJwZXJjZW50aWxlX2Rpc2NcIixcbiAgICBFbnZlbG9wZUFnZ3JlZ2F0ZTogXCJlbnZlbG9wZS1hZ2dyZWdhdGVcIixcbiAgICBDZW50cm9pZEFnZ3JlZ2F0ZTogXCJjZW50cm9pZC1hZ2dyZWdhdGVcIixcbiAgICBDb252ZXhIdWxsQWdncmVnYXRlOiBcImNvbnZleC1odWxsLWFnZ3JlZ2F0ZVwiLFxuICAgIE5vQWdncmVnYXRpb246IFwibm9fYWdncmVnYXRpb25cIiAvLyBUT0RPOiB0aGF0IHByb3BlcnR5IG5lZWRzIHRvIGJlIGV4cG9ydGVkIHRvIGFub3RoZXIgaW50ZXJmYWNlLCBhcyBpdCBpcyBub3QgUkVTVCBjb21wYXRpYmxlIChzZWUgaXNzdWUgIzIzNTIpXG59O1xuZXhwb3J0IGNvbnN0IFJFU1RTaW1wbGVMaW5lU3ltYm9sU3R5bGUgPSB7XG4gICAgRGFzaDogXCJlc3JpU0xTRGFzaFwiLFxuICAgIERhc2hEb3Q6IFwiZXNyaVNMU0Rhc2hEb3RcIixcbiAgICBEYXNoRG90RG90OiBcImVzcmlTTFNEYXNoRG90RG90XCIsXG4gICAgRG90OiBcImVzcmlTTFNEb3RcIixcbiAgICBOdWxsOiBcImVzcmlTTFNOdWxsXCIsXG4gICAgU29saWQ6IFwiZXNyaVNMU1NvbGlkXCJcbn07XG5leHBvcnQgY29uc3QgUkVTVFNpbXBsZU1hcmtlclN5bWJvbFN0eWxlID0ge1xuICAgIENpcmNsZTogXCJlc3JpU01TQ2lyY2xlXCIsXG4gICAgQ3Jvc3M6IFwiZXNyaVNNU0Nyb3NzXCIsXG4gICAgRGlhbW9uZDogXCJlc3JpU01TRGlhbW9uZFwiLFxuICAgIFNxdWFyZTogXCJlc3JpU01TU3F1YXJlXCIsXG4gICAgWDogXCJlc3JpU01TWFwiLFxuICAgIFRyaWFuZ2xlOiBcImVzcmlTTVNUcmlhbmdsZVwiXG59O1xuZXhwb3J0IGNvbnN0IFJFU1RTaW1wbGVGaWxsU3ltYm9sU3R5bGUgPSB7XG4gICAgQmFja3dhcmREaWFnb25hbDogXCJlc3JpU0ZTQmFja3dhcmREaWFnb25hbFwiLFxuICAgIENyb3NzOiBcImVzcmlTRlNDcm9zc1wiLFxuICAgIERpYWdvbmFsQ3Jvc3M6IFwiZXNyaVNGU0RpYWdvbmFsQ3Jvc3NcIixcbiAgICBGb3J3YXJkRGlhZ29uYWw6IFwiZXNyaVNGU0ZvcndhcmREaWFnb25hbFwiLFxuICAgIEhvcml6b250YWw6IFwiZXNyaVNGU0hvcml6b250YWxcIixcbiAgICBOdWxsOiBcImVzcmlTRlNOdWxsXCIsXG4gICAgU29saWQ6IFwiZXNyaVNGU1NvbGlkXCIsXG4gICAgVmVydGljYWw6IFwiZXNyaVNGU1ZlcnRpY2FsXCJcbn07XG5leHBvcnQgY29uc3QgUkVTVEhvcml6b250YWxBbGlnbm1lbnQgPSB7XG4gICAgTGVmdDogXCJsZWZ0XCIsXG4gICAgUmlnaHQ6IFwicmlnaHRcIixcbiAgICBDZW50ZXI6IFwiY2VudGVyXCIsXG4gICAgSnVzdGlmeTogXCJqdXN0aWZ5XCJcbn07XG5leHBvcnQgY29uc3QgUkVTVFZlcnRpY2FsQWxpZ25tZW50ID0ge1xuICAgIEJhc2VsaW5lOiBcImJhc2VsaW5lXCIsXG4gICAgVG9wOiBcInRvcFwiLFxuICAgIE1pZGRsZTogXCJtaWRkbGVcIixcbiAgICBCb3R0b206IFwiYm90dG9tXCJcbn07XG5leHBvcnQgY29uc3QgUkVTVFN5bWJvbFR5cGUgPSB7XG4gICAgU0xTOiBcImVzcmlTTFNcIixcbiAgICBTTVM6IFwiZXNyaVNNU1wiLFxuICAgIFNGUzogXCJlc3JpU0ZTXCIsXG4gICAgUE1TOiBcImVzcmlQTVNcIixcbiAgICBQRlM6IFwiZXNyaVBGU1wiLFxuICAgIFRTOiBcImVzcmlUU1wiXG59O1xuZXhwb3J0IGNvbnN0IFJFU1RGb250U3R5bGUgPSB7XG4gICAgSXRhbGljOiBcIml0YWxpY1wiLFxuICAgIE5vcm1hbDogXCJub3JtYWxcIixcbiAgICBPYmxpcXVlOiBcIm9ibGlxdWVcIlxufTtcbmV4cG9ydCBjb25zdCBSRVNURm9udFdlaWdodCA9IHtcbiAgICBCb2xkOiBcImJvbGRcIixcbiAgICBCb2xkZXI6IFwiYm9sZGVyXCIsXG4gICAgTGlnaHRlcjogXCJsaWdodGVyXCIsXG4gICAgTm9ybWFsOiBcIm5vcm1hbFwiXG59O1xuZXhwb3J0IGNvbnN0IFJFU1RGb250RGVjb3JhdGlvbiA9IHtcbiAgICBMaW5lVGhyb3VnaDogXCJsaW5lLXRocm91Z2hcIixcbiAgICBVbmRlcmxpbmU6IFwidW5kZXJsaW5lXCIsXG4gICAgTm9uZTogXCJub25lXCJcbn07XG5leHBvcnQgY29uc3QgUkVTVFJlbmRlcmVyVHlwZSA9IHtcbiAgICBVbmlxdWVWYWx1ZTogXCJ1bmlxdWUtdmFsdWVcIixcbiAgICBTaW1wbGU6IFwic2ltcGxlXCIsXG4gICAgQ2xhc3NCcmVha3M6IFwiY2xhc3MtYnJlYWtzXCIsXG4gICAgSGVhdG1hcDogXCJoZWF0bWFwXCIsXG4gICAgRG90RGVuc2l0eTogXCJkb3QtZGVuc2l0eVwiLFxuICAgIERpY3Rpb25hcnk6IFwiZGljdGlvbmFyeVwiLFxuICAgIFBpZUNoYXJ0OiBcInBpZS1jaGFydFwiXG59O1xuZXhwb3J0IGNvbnN0IFJFU1RVbml0cyA9IHtcbiAgICBGZWV0OiBcImZlZXRcIixcbiAgICBNaWxlczogXCJtaWxlc1wiLFxuICAgIE5hdXRpY2FsTWlsZXM6IFwibmF1dGljYWwtbWlsZXNcIixcbiAgICBVU05hdXRpY2FsTWlsZXM6IFwidXMtbmF1dGljYWwtbWlsZXNcIixcbiAgICBNZXRlcnM6IFwibWV0ZXJzXCIsXG4gICAgS2lsb21ldGVyczogXCJraWxvbWV0ZXJzXCJcbn07XG4iLCIvKipcbiAqIFZlcnNpb24gb2YgdGhlIGN1cnJlbnQgc3BlY2lmaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IFdlYkNoYXJ0Q3VycmVudFZlcnNpb24gPSBcIjcuNC4xXCI7XG4iLCJpbXBvcnQgeyB0eXBlIEltbXV0YWJsZU9iamVjdCwgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0LCB0eXBlIFdlYkNoYXJ0RGF0YVNvdXJjZXMsIHR5cGUgV2ViTWFwV2ViQ2hhcnQgfSBmcm9tICdAYXJjZ2lzL2NoYXJ0cy1zcGVjJ1xuaW1wb3J0IHsgdHlwZSBVbnByaXZpbGVnZWRDaGFydCwgdXNlTm9ybWFsaXplZENoYXJ0T2JqZWN0LCB1c2VDaGFydENvbXBvbmVudERlZmluZWQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IEJhckNoYXJ0Q29yZSwgdHlwZSBCYXJDaGFydENvcmVQcm9wcyB9IGZyb20gJy4vY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBCYXJDaGFydFByb3BzIGV4dGVuZHMgT21pdDxCYXJDaGFydENvcmVQcm9wcywgJ2NvbmZpZyc+IHtcbiAgLyoqXG4gKiBVc2VkIGJ5IGBAYXJjZ2lzL2NoYXJ0cy1jb21wb25lbnRzYCBwYWNrYWdlLCBib3RoIG11dGFibGUgYW5kIGltbXV0YWJsZSBhcmUgc3VwcG9ydGVkLlxuICovXG4gIHdlYk1hcFdlYkNoYXJ0OiBXZWJNYXBXZWJDaGFydCB8IEltbXV0YWJsZU9iamVjdDxXZWJNYXBXZWJDaGFydD5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHJlcHJlc2VudGluZyB0aGUgZGF0YXNvdXJjZS4gQ2FuIGJlIEZlYXR1cmUgbGF5ZXIgb3IgdmFuaWxsYSBQT0pPcy5cbiAgICovXG4gIGRhdGFTb3VyY2U/OiBXZWJDaGFydERhdGFTb3VyY2VzXG59XG5cbmV4cG9ydCBjb25zdCBCYXJDaGFydCA9IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IEJhckNoYXJ0UHJvcHMsIGNoYXJ0UmVmOiBSZWFjdC5SZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHdlYk1hcFdlYkNoYXJ0OiBwcm9wV2ViTWFwV2ViQ2hhcnQsXG4gICAgZGF0YVNvdXJjZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgZGVmaW5lZCA9IHVzZUNoYXJ0Q29tcG9uZW50RGVmaW5lZCgnYmFyU2VyaWVzJylcblxuICBjb25zdCB3ZWJNYXBXZWJDaGFydCA9IHVzZU5vcm1hbGl6ZWRDaGFydE9iamVjdDxXZWJNYXBXZWJDaGFydD4ocHJvcFdlYk1hcFdlYkNoYXJ0KVxuICBjb25zdCB3ZWJDaGFydCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi53ZWJNYXBXZWJDaGFydCxcbiAgICAgIGRhdGFTb3VyY2VcbiAgICB9IGFzIFdlYkNoYXJ0XG4gIH0sIFt3ZWJNYXBXZWJDaGFydCwgZGF0YVNvdXJjZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RlZmluZWQgJiYgPEJhckNoYXJ0Q29yZSByZWY9e2NoYXJ0UmVmfSBjb25maWc9e3dlYkNoYXJ0fSB7Li4ub3RoZXJzfSAvPn1cbiAgICA8Lz5cbiAgKVxufSkpXG5CYXJDaGFydC5kaXNwbGF5TmFtZSA9ICdCYXJDaGFydCdcbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydENvbXBvbmVudEV2ZW50Q2FsbGJhY2tzLCB0eXBlIFVucHJpdmlsZWdlZENoYXJ0LCB1c2VSZWdpc3RlckV2ZW50LCB1c2VGb3JrQ2hhcnRSZWYgfSBmcm9tICcuLi91dGlscydcbmV4cG9ydCBpbnRlcmZhY2UgQmFyQ2hhcnRDb3JlUHJvcHMgZXh0ZW5kcyBQYXJ0aWFsPEhUTUxBcmNnaXNDaGFydHNCYXJDaGFydEVsZW1lbnQ+LCBDaGFydENvbXBvbmVudEV2ZW50Q2FsbGJhY2tzIHtcbn1cblxuZXhwb3J0IGNvbnN0IEJhckNoYXJ0Q29yZSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBCYXJDaGFydENvcmVQcm9wcywgY2hhcnRSZWY6IFJlYWN0LlJlZjxVbnByaXZpbGVnZWRDaGFydD4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTEFyY2dpc0NoYXJ0c0JhckNoYXJ0RWxlbWVudD4obnVsbClcbiAgY29uc3QgaGFuZGxlUmVmID0gdXNlRm9ya0NoYXJ0UmVmKHJlZiwgY2hhcnRSZWYpXG5cbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb25maWcsXG4gICAgbGF5ZXIsXG4gICAgdmlldyxcbiAgICByb3RhdGlvbixcbiAgICBsZWdlbmRQb3NpdGlvbixcbiAgICBsZWdlbmRWaXNpYmlsaXR5LFxuICAgIHhBeGlzTGFiZWxGb3JtYXR0ZXIsXG4gICAgeUF4aXNMYWJlbEZvcm1hdHRlcixcblxuICAgIHJ1bnRpbWVEYXRhRmlsdGVycyxcbiAgICBpbmxpbmVEYXRhLFxuICAgIHNlbGVjdGlvbkRhdGEsXG4gICAgc2VsZWN0aW9uVGhlbWUsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdG9vbHRpcEZvcm1hdHRlcixcbiAgICBkYXRhTGFiZWxGb3JtYXR0ZXIsXG4gICAgYWN0aW9uTW9kZSxcbiAgICBmaWx0ZXJCeVNlbGVjdGlvbixcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb25zLFxuICAgIG5vRGF0YU9wdGlvbnMsXG5cbiAgICByZXR1cm5TZWxlY3Rpb25JbmRleGVzLFxuICAgIHJldHVyblNlbGVjdGlvbk9JRHMsXG5cbiAgICBhdXRvRGlzcG9zZUNoYXJ0LFxuICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyxcbiAgICBoaWRlTGljZW5jZVdhdGVybWFyayxcbiAgICBxdWV1ZUNoYXJ0Q3JlYXRpb24sXG4gICAgdXNlQW5pbWF0ZWRDaGFydHMsXG4gICAgaGlkZUxvYWRlckFuaW1hdGlvbixcblxuICAgIGFyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NFcnJvcixcbiAgICBhcmNnaXNDaGFydHNMZWdlbmRJdGVtVmlzaWJpbGl0eUNoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZSxcbiAgICBhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlLFxuICAgIGFyY2dpc0NoYXJ0c0RlZmF1bHRBY3Rpb25TZWxlY3QsXG4gICAgYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlLFxuICAgIGFyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZVxuICB9ID0gcHJvcHNcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmNvbmZpZyA9IGNvbmZpZ1xuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmxheWVyID0gbGF5ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHVwZGF0ZSBjb25maWcgYW5kIGlubGluZS1kYXRhIGF0IHRoZSBzYW1lIHRpbWUsIHRoZSB1cGRhdGUgb2YgZGF0YSB3aWxsIGJlIGlnbm9yZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmLmN1cnJlbnQuaW5saW5lRGF0YSA9IGlubGluZURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjb25maWcsIGlubGluZURhdGEsIGxheWVyXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnJ1bnRpbWVEYXRhRmlsdGVycyA9IHJ1bnRpbWVEYXRhRmlsdGVyc1xuICB9LCBbcnVudGltZURhdGFGaWx0ZXJzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnZpZXcgPSB2aWV3XG4gICAgcmVmLmN1cnJlbnQucm90YXRpb24gPSByb3RhdGlvblxuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFBvc2l0aW9uID0gbGVnZW5kUG9zaXRpb25cbiAgICByZWYuY3VycmVudC5sZWdlbmRWaXNpYmlsaXR5ID0gbGVnZW5kVmlzaWJpbGl0eVxuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFZpc2liaWxpdHkgPSBsZWdlbmRWaXNpYmlsaXR5XG4gICAgcmVmLmN1cnJlbnQueEF4aXNMYWJlbEZvcm1hdHRlciA9IHhBeGlzTGFiZWxGb3JtYXR0ZXJcbiAgICByZWYuY3VycmVudC55QXhpc0xhYmVsRm9ybWF0dGVyID0geUF4aXNMYWJlbEZvcm1hdHRlclxuICB9LCBbXG4gICAgdmlldyxcbiAgICByb3RhdGlvbixcbiAgICBsZWdlbmRQb3NpdGlvbixcbiAgICBsZWdlbmRWaXNpYmlsaXR5LFxuICAgIHhBeGlzTGFiZWxGb3JtYXR0ZXIsXG4gICAgeUF4aXNMYWJlbEZvcm1hdHRlclxuICBdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uRGF0YSA9IHNlbGVjdGlvbkRhdGFcbiAgICByZWYuY3VycmVudC5zZWxlY3Rpb25UaGVtZSA9IHNlbGVjdGlvblRoZW1lXG4gICAgcmVmLmN1cnJlbnQuY2hhcnRMaW1pdHMgPSBjaGFydExpbWl0c1xuICAgIHJlZi5jdXJyZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICByZWYuY3VycmVudC50b29sdGlwRm9ybWF0dGVyID0gdG9vbHRpcEZvcm1hdHRlclxuICAgIHJlZi5jdXJyZW50LmRhdGFMYWJlbEZvcm1hdHRlciA9IGRhdGFMYWJlbEZvcm1hdHRlclxuICAgIHJlZi5jdXJyZW50LmFjdGlvbk1vZGUgPSBhY3Rpb25Nb2RlXG4gICAgcmVmLmN1cnJlbnQuZmlsdGVyQnlTZWxlY3Rpb24gPSBmaWx0ZXJCeVNlbGVjdGlvblxuICAgIHJlZi5jdXJyZW50LmRpc2FibGVJbnRlcmFjdGlvbnMgPSBkaXNhYmxlSW50ZXJhY3Rpb25zXG4gIH0sIFtcbiAgICBzZWxlY3Rpb25EYXRhLFxuICAgIHNlbGVjdGlvblRoZW1lLFxuICAgIGNoYXJ0TGltaXRzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHRvb2x0aXBGb3JtYXR0ZXIsXG4gICAgZGF0YUxhYmVsRm9ybWF0dGVyLFxuICAgIGFjdGlvbk1vZGUsXG4gICAgZmlsdGVyQnlTZWxlY3Rpb24sXG4gICAgZGlzYWJsZUludGVyYWN0aW9uc1xuICBdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQucmV0dXJuU2VsZWN0aW9uSW5kZXhlcyA9IHJldHVyblNlbGVjdGlvbkluZGV4ZXNcbiAgICByZWYuY3VycmVudC5yZXR1cm5TZWxlY3Rpb25PSURzID0gcmV0dXJuU2VsZWN0aW9uT0lEc1xuICB9LCBbcmV0dXJuU2VsZWN0aW9uSW5kZXhlcywgcmV0dXJuU2VsZWN0aW9uT0lEc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5ub0RhdGFPcHRpb25zID0gbm9EYXRhT3B0aW9uc1xuICB9LCBbbm9EYXRhT3B0aW9uc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5hdXRvRGlzcG9zZUNoYXJ0ID0gYXV0b0Rpc3Bvc2VDaGFydFxuICAgIHJlZi5jdXJyZW50LmVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyA9IGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlc1xuICAgIHJlZi5jdXJyZW50LmhpZGVMaWNlbmNlV2F0ZXJtYXJrID0gaGlkZUxpY2VuY2VXYXRlcm1hcmtcbiAgICByZWYuY3VycmVudC5xdWV1ZUNoYXJ0Q3JlYXRpb24gPSBxdWV1ZUNoYXJ0Q3JlYXRpb25cbiAgICByZWYuY3VycmVudC51c2VBbmltYXRlZENoYXJ0cyA9IHVzZUFuaW1hdGVkQ2hhcnRzXG4gICAgcmVmLmN1cnJlbnQuaGlkZUxvYWRlckFuaW1hdGlvbiA9IGhpZGVMb2FkZXJBbmltYXRpb25cbiAgfSwgW1xuICAgIGF1dG9EaXNwb3NlQ2hhcnQsXG4gICAgZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzLFxuICAgIGhpZGVMaWNlbmNlV2F0ZXJtYXJrLFxuICAgIHF1ZXVlQ2hhcnRDcmVhdGlvbixcbiAgICB1c2VBbmltYXRlZENoYXJ0cyxcbiAgICBoaWRlTG9hZGVyQW5pbWF0aW9uXG4gIF0pXG5cbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0NvbXBsZXRlJywgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NDb21wbGV0ZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0Vycm9yJywgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NFcnJvcilcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNMZWdlbmRJdGVtVmlzaWJpbGl0eUNoYW5nZScsIGFyY2dpc0NoYXJ0c0xlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c1VwZGF0ZUNvbXBsZXRlJywgYXJjZ2lzQ2hhcnRzVXBkYXRlQ29tcGxldGUpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzU2VyaWVzQ29sb3JDaGFuZ2UnLCBhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlJywgYXJjZ2lzQ2hhcnRzQXhlc01pbk1heENoYW5nZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNEZWZhdWx0QWN0aW9uU2VsZWN0JywgYXJjZ2lzQ2hhcnRzRGVmYXVsdEFjdGlvblNlbGVjdClcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNTZWxlY3Rpb25Db21wbGV0ZScsIGFyY2dpc0NoYXJ0c1NlbGVjdGlvbkNvbXBsZXRlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0FjdGlvbkJhclRvZ2dsZScsIGFyY2dpc0NoYXJ0c0FjdGlvbkJhclRvZ2dsZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNOb1JlbmRlclByb3BDaGFuZ2UnLCBhcmNnaXNDaGFydHNOb1JlbmRlclByb3BDaGFuZ2UpXG5cbiAgcmV0dXJuIChcbiAgICA8YXJjZ2lzLWNoYXJ0cy1iYXItY2hhcnQgcmVmPXtoYW5kbGVSZWZ9IGNsYXNzPXtjbGFzc05hbWV9IC8+XG4gIClcbn0pXG4iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnXG5leHBvcnQgKiBmcm9tICcuL2JhcidcbiIsImltcG9ydCB7IFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDaGFydENvbXBvbmVudEV2ZW50Q2FsbGJhY2tzLCB0eXBlIFVucHJpdmlsZWdlZENoYXJ0LCB1c2VSZWdpc3RlckV2ZW50LCB1c2VGb3JrQ2hhcnRSZWYgfSBmcm9tICcuLi91dGlscydcbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9ncmFtQ29yZVByb3BzIGV4dGVuZHMgUGFydGlhbDxIVE1MQXJjZ2lzQ2hhcnRzSGlzdG9ncmFtRWxlbWVudD4sIENoYXJ0Q29tcG9uZW50RXZlbnRDYWxsYmFja3Mge1xufVxuXG5leHBvcnQgY29uc3QgSGlzdG9ncmFtQ29yZSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzOiBIaXN0b2dyYW1Db3JlUHJvcHMsIGNoYXJ0UmVmOiBSZWFjdC5SZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxBcmNnaXNDaGFydHNIaXN0b2dyYW1FbGVtZW50PihudWxsKVxuICBjb25zdCBoYW5kbGVSZWYgPSB1c2VGb3JrQ2hhcnRSZWYocmVmLCBjaGFydFJlZilcblxuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbmZpZyxcbiAgICBsYXllcixcbiAgICB2aWV3LFxuICAgIGxlZ2VuZFBvc2l0aW9uLFxuICAgIGxlZ2VuZFZpc2liaWxpdHksXG4gICAgeEF4aXNMYWJlbEZvcm1hdHRlcixcbiAgICB5QXhpc0xhYmVsRm9ybWF0dGVyLFxuXG4gICAgcnVudGltZURhdGFGaWx0ZXJzLFxuICAgIGlubGluZURhdGEsXG4gICAgc2VsZWN0aW9uRGF0YSxcbiAgICBzZWxlY3Rpb25UaGVtZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB0b29sdGlwRm9ybWF0dGVyLFxuICAgIGRhdGFMYWJlbEZvcm1hdHRlcixcbiAgICBhY3Rpb25Nb2RlLFxuICAgIGZpbHRlckJ5U2VsZWN0aW9uLFxuICAgIGRpc2FibGVJbnRlcmFjdGlvbnMsXG5cbiAgICByZXR1cm5TZWxlY3Rpb25JbmRleGVzLFxuICAgIHJldHVyblNlbGVjdGlvbk9JRHMsXG5cbiAgICBhdXRvRGlzcG9zZUNoYXJ0LFxuICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyxcbiAgICBoaWRlTGljZW5jZVdhdGVybWFyayxcbiAgICBxdWV1ZUNoYXJ0Q3JlYXRpb24sXG4gICAgdXNlQW5pbWF0ZWRDaGFydHMsXG4gICAgaGlkZUxvYWRlckFuaW1hdGlvbixcblxuICAgIGFyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NFcnJvcixcbiAgICBhcmNnaXNDaGFydHNMZWdlbmRJdGVtVmlzaWJpbGl0eUNoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZSxcbiAgICBhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlLFxuICAgIGFyY2dpc0NoYXJ0c0RlZmF1bHRBY3Rpb25TZWxlY3QsXG4gICAgYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlLFxuICAgIGFyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZVxuICB9ID0gcHJvcHNcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmNvbmZpZyA9IGNvbmZpZ1xuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmxheWVyID0gbGF5ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHVwZGF0ZSBjb25maWcgYW5kIGlubGluZS1kYXRhIGF0IHRoZSBzYW1lIHRpbWUsIHRoZSB1cGRhdGUgb2YgZGF0YSB3aWxsIGJlIGlnbm9yZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmLmN1cnJlbnQuaW5saW5lRGF0YSA9IGlubGluZURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjb25maWcsIGlubGluZURhdGEsIGxheWVyXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnJ1bnRpbWVEYXRhRmlsdGVycyA9IHJ1bnRpbWVEYXRhRmlsdGVyc1xuICB9LCBbcnVudGltZURhdGFGaWx0ZXJzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnZpZXcgPSB2aWV3XG4gICAgcmVmLmN1cnJlbnQubGVnZW5kUG9zaXRpb24gPSBsZWdlbmRQb3NpdGlvblxuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFZpc2liaWxpdHkgPSBsZWdlbmRWaXNpYmlsaXR5XG4gICAgcmVmLmN1cnJlbnQubGVnZW5kVmlzaWJpbGl0eSA9IGxlZ2VuZFZpc2liaWxpdHlcbiAgICByZWYuY3VycmVudC54QXhpc0xhYmVsRm9ybWF0dGVyID0geEF4aXNMYWJlbEZvcm1hdHRlclxuICAgIHJlZi5jdXJyZW50LnlBeGlzTGFiZWxGb3JtYXR0ZXIgPSB5QXhpc0xhYmVsRm9ybWF0dGVyXG4gIH0sIFtcbiAgICB2aWV3LFxuICAgIGxlZ2VuZFBvc2l0aW9uLFxuICAgIGxlZ2VuZFZpc2liaWxpdHksXG4gICAgeEF4aXNMYWJlbEZvcm1hdHRlcixcbiAgICB5QXhpc0xhYmVsRm9ybWF0dGVyXG4gIF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5zZWxlY3Rpb25EYXRhID0gc2VsZWN0aW9uRGF0YVxuICAgIHJlZi5jdXJyZW50LnNlbGVjdGlvblRoZW1lID0gc2VsZWN0aW9uVGhlbWVcbiAgICByZWYuY3VycmVudC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyXG4gICAgcmVmLmN1cnJlbnQudG9vbHRpcEZvcm1hdHRlciA9IHRvb2x0aXBGb3JtYXR0ZXJcbiAgICByZWYuY3VycmVudC5kYXRhTGFiZWxGb3JtYXR0ZXIgPSBkYXRhTGFiZWxGb3JtYXR0ZXJcbiAgICByZWYuY3VycmVudC5hY3Rpb25Nb2RlID0gYWN0aW9uTW9kZVxuICAgIHJlZi5jdXJyZW50LmZpbHRlckJ5U2VsZWN0aW9uID0gZmlsdGVyQnlTZWxlY3Rpb25cbiAgICByZWYuY3VycmVudC5kaXNhYmxlSW50ZXJhY3Rpb25zID0gZGlzYWJsZUludGVyYWN0aW9uc1xuICB9LCBbXG4gICAgc2VsZWN0aW9uRGF0YSxcbiAgICBzZWxlY3Rpb25UaGVtZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB0b29sdGlwRm9ybWF0dGVyLFxuICAgIGRhdGFMYWJlbEZvcm1hdHRlcixcbiAgICBhY3Rpb25Nb2RlLFxuICAgIGZpbHRlckJ5U2VsZWN0aW9uLFxuICAgIGRpc2FibGVJbnRlcmFjdGlvbnNcbiAgXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnJldHVyblNlbGVjdGlvbkluZGV4ZXMgPSByZXR1cm5TZWxlY3Rpb25JbmRleGVzXG4gICAgcmVmLmN1cnJlbnQucmV0dXJuU2VsZWN0aW9uT0lEcyA9IHJldHVyblNlbGVjdGlvbk9JRHNcbiAgfSwgW3JldHVyblNlbGVjdGlvbkluZGV4ZXMsIHJldHVyblNlbGVjdGlvbk9JRHNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuYXV0b0Rpc3Bvc2VDaGFydCA9IGF1dG9EaXNwb3NlQ2hhcnRcbiAgICByZWYuY3VycmVudC5lbmFibGVSZXNwb25zaXZlRmVhdHVyZXMgPSBlbmFibGVSZXNwb25zaXZlRmVhdHVyZXNcbiAgICByZWYuY3VycmVudC5oaWRlTGljZW5jZVdhdGVybWFyayA9IGhpZGVMaWNlbmNlV2F0ZXJtYXJrXG4gICAgcmVmLmN1cnJlbnQucXVldWVDaGFydENyZWF0aW9uID0gcXVldWVDaGFydENyZWF0aW9uXG4gICAgcmVmLmN1cnJlbnQudXNlQW5pbWF0ZWRDaGFydHMgPSB1c2VBbmltYXRlZENoYXJ0c1xuICAgIHJlZi5jdXJyZW50LmhpZGVMb2FkZXJBbmltYXRpb24gPSBoaWRlTG9hZGVyQW5pbWF0aW9uXG4gIH0sIFtcbiAgICBhdXRvRGlzcG9zZUNoYXJ0LFxuICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyxcbiAgICBoaWRlTGljZW5jZVdhdGVybWFyayxcbiAgICBxdWV1ZUNoYXJ0Q3JlYXRpb24sXG4gICAgdXNlQW5pbWF0ZWRDaGFydHMsXG4gICAgaGlkZUxvYWRlckFuaW1hdGlvblxuICBdKVxuXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NDb21wbGV0ZScsIGFyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzQ29tcGxldGUpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NFcnJvcicsIGFyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzRXJyb3IpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzTGVnZW5kSXRlbVZpc2liaWxpdHlDaGFuZ2UnLCBhcmNnaXNDaGFydHNMZWdlbmRJdGVtVmlzaWJpbGl0eUNoYW5nZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZScsIGFyY2dpc0NoYXJ0c1VwZGF0ZUNvbXBsZXRlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c1Nlcmllc0NvbG9yQ2hhbmdlJywgYXJjZ2lzQ2hhcnRzU2VyaWVzQ29sb3JDaGFuZ2UpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzQXhlc01pbk1heENoYW5nZScsIGFyY2dpc0NoYXJ0c0F4ZXNNaW5NYXhDaGFuZ2UpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzRGVmYXVsdEFjdGlvblNlbGVjdCcsIGFyY2dpc0NoYXJ0c0RlZmF1bHRBY3Rpb25TZWxlY3QpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGUnLCBhcmNnaXNDaGFydHNTZWxlY3Rpb25Db21wbGV0ZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNBY3Rpb25CYXJUb2dnbGUnLCBhcmNnaXNDaGFydHNBY3Rpb25CYXJUb2dnbGUpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzTm9SZW5kZXJQcm9wQ2hhbmdlJywgYXJjZ2lzQ2hhcnRzTm9SZW5kZXJQcm9wQ2hhbmdlKVxuXG4gIHJldHVybiAoXG4gICAgPGFyY2dpcy1jaGFydHMtaGlzdG9ncmFtIHJlZj17aGFuZGxlUmVmfSBjbGFzcz17Y2xhc3NOYW1lfSAvPlxuICApXG59KVxuIiwiaW1wb3J0IHsgdHlwZSBJbW11dGFibGVPYmplY3QsIFJlYWN0IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBXZWJDaGFydCwgdHlwZSBXZWJDaGFydERhdGFTb3VyY2VzLCB0eXBlIFdlYk1hcFdlYkNoYXJ0IH0gZnJvbSAnQGFyY2dpcy9jaGFydHMtc3BlYydcbmltcG9ydCB7IHR5cGUgVW5wcml2aWxlZ2VkQ2hhcnQsIHVzZU5vcm1hbGl6ZWRDaGFydE9iamVjdCwgdXNlQ2hhcnRDb21wb25lbnREZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBIaXN0b2dyYW1Db3JlLCB0eXBlIEhpc3RvZ3JhbUNvcmVQcm9wcyB9IGZyb20gJy4vY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBIaXN0b2dyYW1Qcm9wcyBleHRlbmRzIE9taXQ8SGlzdG9ncmFtQ29yZVByb3BzLCAnY29uZmlnJz4ge1xuICAvKipcbiAqIFVzZWQgYnkgYEBhcmNnaXMvY2hhcnRzLWNvbXBvbmVudHNgIHBhY2thZ2UsIGJvdGggbXV0YWJsZSBhbmQgaW1tdXRhYmxlIGFyZSBzdXBwb3J0ZWQuXG4gKi9cbiAgd2ViTWFwV2ViQ2hhcnQ6IFdlYk1hcFdlYkNoYXJ0IHwgSW1tdXRhYmxlT2JqZWN0PFdlYk1hcFdlYkNoYXJ0PlxuICAvKipcbiAgICogUHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZSBkYXRhc291cmNlLiBDYW4gYmUgRmVhdHVyZSBsYXllciBvciB2YW5pbGxhIFBPSk9zLlxuICAgKi9cbiAgZGF0YVNvdXJjZT86IFdlYkNoYXJ0RGF0YVNvdXJjZXNcbn1cblxuZXhwb3J0IGNvbnN0IEhpc3RvZ3JhbSA9IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IEhpc3RvZ3JhbVByb3BzLCBjaGFydFJlZjogUmVhY3QuUmVmPFVucHJpdmlsZWdlZENoYXJ0Pik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHtcbiAgICB3ZWJNYXBXZWJDaGFydDogcHJvcFdlYk1hcFdlYkNoYXJ0LFxuICAgIGRhdGFTb3VyY2UsXG4gICAgLi4ub3RoZXJzXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGRlZmluZWQgPSB1c2VDaGFydENvbXBvbmVudERlZmluZWQoJ2hpc3RvZ3JhbVNlcmllcycpXG5cbiAgY29uc3Qgd2ViTWFwV2ViQ2hhcnQgPSB1c2VOb3JtYWxpemVkQ2hhcnRPYmplY3Q8V2ViTWFwV2ViQ2hhcnQ+KHByb3BXZWJNYXBXZWJDaGFydClcbiAgY29uc3Qgd2ViQ2hhcnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ud2ViTWFwV2ViQ2hhcnQsXG4gICAgICBkYXRhU291cmNlXG4gICAgfSBhcyBXZWJDaGFydFxuICB9LCBbd2ViTWFwV2ViQ2hhcnQsIGRhdGFTb3VyY2VdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkZWZpbmVkICYmIDxIaXN0b2dyYW1Db3JlIHJlZj17Y2hhcnRSZWZ9IGNvbmZpZz17d2ViQ2hhcnR9IHsuLi5vdGhlcnN9IC8+fVxuICAgIDwvPlxuICApXG59KSlcbkhpc3RvZ3JhbS5kaXNwbGF5TmFtZSA9ICdIaXN0b2dyYW0nXG4iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvZ3JhbSdcbiIsImltcG9ydCB7IHVybFV0aWxzIH0gZnJvbSAnamltdS1jb3JlJ1xuLy8gQHRzLWV4cGVjdC1lcnJvclxuaW1wb3J0IHsgc2V0QXNzZXRQYXRoIH0gZnJvbSAnQGFyY2dpcy9jaGFydHMtY29tcG9uZW50cydcbmltcG9ydCB0eXBlIHsgQmFyQW5kTGluZURhdGFMYWJlbEZvcm1hdENhbGxiYWNrLCBCYXJBbmRMaW5lVG9vbHRpcEZvcm1hdENhbGxiYWNrLCBIaXN0b2dyYW1MYWJlbEZvcm1hdENhbGxiYWNrLCBTY2F0dGVyUGxvdExhYmVsRm9ybWF0Q2FsbGJhY2ssIFBpZUNoYXJ0TGFiZWxGb3JtYXRDYWxsYmFjaywgUGllQ2hhcnRMZWdlbmRWYWx1ZUxhYmVsRm9ybWF0Q2FsbGJhY2ssIFByZVJlbmRlckNhbGxiYWNrLCBOb0RhdGFPcHRpb25zIH0gZnJvbSAnQGFyY2dpcy9jaGFydHMtanMnXG5zZXRBc3NldFBhdGgoYCR7dXJsVXRpbHMuZ2V0QWJzb2x1dGVSb290VXJsKCl9YXJjZ2lzLWFtZC1wYWNrYWdlcy9hcmNnaXMtY2hhcnRzLWNvbXBvbmVudHMvdDluYClcblxuZXhwb3J0ICogZnJvbSAnLi9iYXInXG5leHBvcnQgKiBmcm9tICcuL2hpc3RvZ3JhbSdcbmV4cG9ydCAqIGZyb20gJy4vbGluZSdcbmV4cG9ydCAqIGZyb20gJy4vcGllJ1xuZXhwb3J0ICogZnJvbSAnLi9zY2F0dGVyJ1xuXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJ1xuZXhwb3J0ICogZnJvbSAnQGFyY2dpcy9jaGFydHMtc2hhcmVkLXV0aWxzJ1xuZXhwb3J0ICogZnJvbSAnQGFyY2dpcy9jaGFydHMtc3BlYydcbmV4cG9ydCAqIGZyb20gJ0BhcmNnaXMvY2hhcnRzLWNvbXBvbmVudHMnXG5leHBvcnQgdHlwZSB7IEJhckFuZExpbmVEYXRhTGFiZWxGb3JtYXRDYWxsYmFjaywgQmFyQW5kTGluZVRvb2x0aXBGb3JtYXRDYWxsYmFjaywgSGlzdG9ncmFtTGFiZWxGb3JtYXRDYWxsYmFjaywgU2NhdHRlclBsb3RMYWJlbEZvcm1hdENhbGxiYWNrLCBQaWVDaGFydExhYmVsRm9ybWF0Q2FsbGJhY2ssIFBpZUNoYXJ0TGVnZW5kVmFsdWVMYWJlbEZvcm1hdENhbGxiYWNrLCBQcmVSZW5kZXJDYWxsYmFjaywgTm9EYXRhT3B0aW9ucyB9XG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRDb21wb25lbnRFdmVudENhbGxiYWNrcywgdHlwZSBVbnByaXZpbGVnZWRDaGFydCwgdXNlUmVnaXN0ZXJFdmVudCwgdXNlRm9ya0NoYXJ0UmVmIH0gZnJvbSAnLi4vdXRpbHMnXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydENvcmVQcm9wcyBleHRlbmRzIFBhcnRpYWw8SFRNTEFyY2dpc0NoYXJ0c0xpbmVDaGFydEVsZW1lbnQ+LCBDaGFydENvbXBvbmVudEV2ZW50Q2FsbGJhY2tzIHtcbn1cblxuZXhwb3J0IGNvbnN0IExpbmVDaGFydENvcmUgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wczogTGluZUNoYXJ0Q29yZVByb3BzLCBjaGFydFJlZjogUmVhY3QuUmVmPFVucHJpdmlsZWdlZENoYXJ0Pik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQXJjZ2lzQ2hhcnRzTGluZUNoYXJ0RWxlbWVudD4obnVsbClcbiAgY29uc3QgaGFuZGxlUmVmID0gdXNlRm9ya0NoYXJ0UmVmKHJlZiwgY2hhcnRSZWYpXG5cbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb25maWcsXG4gICAgbGF5ZXIsXG4gICAgdmlldyxcbiAgICByb3RhdGlvbixcbiAgICBsZWdlbmRQb3NpdGlvbixcbiAgICBsZWdlbmRWaXNpYmlsaXR5LFxuICAgIHhBeGlzTGFiZWxGb3JtYXR0ZXIsXG4gICAgeUF4aXNMYWJlbEZvcm1hdHRlcixcblxuICAgIHJ1bnRpbWVEYXRhRmlsdGVycyxcbiAgICBpbmxpbmVEYXRhLFxuICAgIHNlbGVjdGlvbkRhdGEsXG4gICAgc2VsZWN0aW9uVGhlbWUsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdG9vbHRpcEZvcm1hdHRlcixcbiAgICBkYXRhTGFiZWxGb3JtYXR0ZXIsXG4gICAgYWN0aW9uTW9kZSxcbiAgICBmaWx0ZXJCeVNlbGVjdGlvbixcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb25zLFxuICAgIG5vRGF0YU9wdGlvbnMsXG5cbiAgICByZXR1cm5TZWxlY3Rpb25JbmRleGVzLFxuICAgIHJldHVyblNlbGVjdGlvbk9JRHMsXG5cbiAgICBhdXRvRGlzcG9zZUNoYXJ0LFxuICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyxcbiAgICBoaWRlTGljZW5jZVdhdGVybWFyayxcbiAgICBxdWV1ZUNoYXJ0Q3JlYXRpb24sXG4gICAgdXNlQW5pbWF0ZWRDaGFydHMsXG4gICAgaGlkZUxvYWRlckFuaW1hdGlvbixcblxuICAgIGFyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NFcnJvcixcbiAgICBhcmNnaXNDaGFydHNMZWdlbmRJdGVtVmlzaWJpbGl0eUNoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZSxcbiAgICBhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlLFxuICAgIGFyY2dpc0NoYXJ0c0RlZmF1bHRBY3Rpb25TZWxlY3QsXG4gICAgYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlLFxuICAgIGFyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZSxcblxuICAgIGlnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0LFxuICAgIHNldFRpbWVCaW5uaW5nSW5mb1doZW5Ob3RQcm92aWRlZFxuICB9ID0gcHJvcHNcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmNvbmZpZyA9IGNvbmZpZ1xuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LmxheWVyID0gbGF5ZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHVwZGF0ZSBjb25maWcgYW5kIGlubGluZS1kYXRhIGF0IHRoZSBzYW1lIHRpbWUsIHRoZSB1cGRhdGUgb2YgZGF0YSB3aWxsIGJlIGlnbm9yZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVmLmN1cnJlbnQuaW5saW5lRGF0YSA9IGlubGluZURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjb25maWcsIGlubGluZURhdGEsIGxheWVyXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnJ1bnRpbWVEYXRhRmlsdGVycyA9IHJ1bnRpbWVEYXRhRmlsdGVyc1xuICB9LCBbcnVudGltZURhdGFGaWx0ZXJzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LnZpZXcgPSB2aWV3XG4gICAgcmVmLmN1cnJlbnQucm90YXRpb24gPSByb3RhdGlvblxuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFBvc2l0aW9uID0gbGVnZW5kUG9zaXRpb25cbiAgICByZWYuY3VycmVudC5sZWdlbmRWaXNpYmlsaXR5ID0gbGVnZW5kVmlzaWJpbGl0eVxuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFZpc2liaWxpdHkgPSBsZWdlbmRWaXNpYmlsaXR5XG4gICAgcmVmLmN1cnJlbnQueEF4aXNMYWJlbEZvcm1hdHRlciA9IHhBeGlzTGFiZWxGb3JtYXR0ZXJcbiAgICByZWYuY3VycmVudC55QXhpc0xhYmVsRm9ybWF0dGVyID0geUF4aXNMYWJlbEZvcm1hdHRlclxuICB9LCBbXG4gICAgdmlldyxcbiAgICByb3RhdGlvbixcbiAgICBsZWdlbmRQb3NpdGlvbixcbiAgICBsZWdlbmRWaXNpYmlsaXR5LFxuICAgIHhBeGlzTGFiZWxGb3JtYXR0ZXIsXG4gICAgeUF4aXNMYWJlbEZvcm1hdHRlclxuICBdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uRGF0YSA9IHNlbGVjdGlvbkRhdGFcbiAgICByZWYuY3VycmVudC5zZWxlY3Rpb25UaGVtZSA9IHNlbGVjdGlvblRoZW1lXG4gICAgcmVmLmN1cnJlbnQuY2hhcnRMaW1pdHMgPSBjaGFydExpbWl0c1xuICAgIHJlZi5jdXJyZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICByZWYuY3VycmVudC50b29sdGlwRm9ybWF0dGVyID0gdG9vbHRpcEZvcm1hdHRlclxuICAgIHJlZi5jdXJyZW50LmRhdGFMYWJlbEZvcm1hdHRlciA9IGRhdGFMYWJlbEZvcm1hdHRlclxuICAgIHJlZi5jdXJyZW50LmFjdGlvbk1vZGUgPSBhY3Rpb25Nb2RlXG4gICAgcmVmLmN1cnJlbnQuZmlsdGVyQnlTZWxlY3Rpb24gPSBmaWx0ZXJCeVNlbGVjdGlvblxuICAgIHJlZi5jdXJyZW50LmRpc2FibGVJbnRlcmFjdGlvbnMgPSBkaXNhYmxlSW50ZXJhY3Rpb25zXG4gIH0sIFtcbiAgICBzZWxlY3Rpb25EYXRhLFxuICAgIHNlbGVjdGlvblRoZW1lLFxuICAgIGNoYXJ0TGltaXRzLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHRvb2x0aXBGb3JtYXR0ZXIsXG4gICAgZGF0YUxhYmVsRm9ybWF0dGVyLFxuICAgIGFjdGlvbk1vZGUsXG4gICAgZmlsdGVyQnlTZWxlY3Rpb24sXG4gICAgZGlzYWJsZUludGVyYWN0aW9uc1xuICBdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQucmV0dXJuU2VsZWN0aW9uSW5kZXhlcyA9IHJldHVyblNlbGVjdGlvbkluZGV4ZXNcbiAgICByZWYuY3VycmVudC5yZXR1cm5TZWxlY3Rpb25PSURzID0gcmV0dXJuU2VsZWN0aW9uT0lEc1xuICB9LCBbcmV0dXJuU2VsZWN0aW9uSW5kZXhlcywgcmV0dXJuU2VsZWN0aW9uT0lEc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5hdXRvRGlzcG9zZUNoYXJ0ID0gYXV0b0Rpc3Bvc2VDaGFydFxuICAgIHJlZi5jdXJyZW50LmVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyA9IGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlc1xuICAgIHJlZi5jdXJyZW50LmhpZGVMaWNlbmNlV2F0ZXJtYXJrID0gaGlkZUxpY2VuY2VXYXRlcm1hcmtcbiAgICByZWYuY3VycmVudC5xdWV1ZUNoYXJ0Q3JlYXRpb24gPSBxdWV1ZUNoYXJ0Q3JlYXRpb25cbiAgICByZWYuY3VycmVudC51c2VBbmltYXRlZENoYXJ0cyA9IHVzZUFuaW1hdGVkQ2hhcnRzXG4gICAgcmVmLmN1cnJlbnQuaGlkZUxvYWRlckFuaW1hdGlvbiA9IGhpZGVMb2FkZXJBbmltYXRpb25cbiAgfSwgW1xuICAgIGF1dG9EaXNwb3NlQ2hhcnQsXG4gICAgZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzLFxuICAgIGhpZGVMaWNlbmNlV2F0ZXJtYXJrLFxuICAgIHF1ZXVlQ2hhcnRDcmVhdGlvbixcbiAgICB1c2VBbmltYXRlZENoYXJ0cyxcbiAgICBoaWRlTG9hZGVyQW5pbWF0aW9uXG4gIF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5ub0RhdGFPcHRpb25zID0gbm9EYXRhT3B0aW9uc1xuICB9LCBbbm9EYXRhT3B0aW9uc10pXG5cbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0NvbXBsZXRlJywgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NDb21wbGV0ZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0Vycm9yJywgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NFcnJvcilcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNMZWdlbmRJdGVtVmlzaWJpbGl0eUNoYW5nZScsIGFyY2dpc0NoYXJ0c0xlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c1VwZGF0ZUNvbXBsZXRlJywgYXJjZ2lzQ2hhcnRzVXBkYXRlQ29tcGxldGUpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzU2VyaWVzQ29sb3JDaGFuZ2UnLCBhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlJywgYXJjZ2lzQ2hhcnRzQXhlc01pbk1heENoYW5nZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNEZWZhdWx0QWN0aW9uU2VsZWN0JywgYXJjZ2lzQ2hhcnRzRGVmYXVsdEFjdGlvblNlbGVjdClcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNTZWxlY3Rpb25Db21wbGV0ZScsIGFyY2dpc0NoYXJ0c1NlbGVjdGlvbkNvbXBsZXRlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0FjdGlvbkJhclRvZ2dsZScsIGFyY2dpc0NoYXJ0c0FjdGlvbkJhclRvZ2dsZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNOb1JlbmRlclByb3BDaGFuZ2UnLCBhcmNnaXNDaGFydHNOb1JlbmRlclByb3BDaGFuZ2UpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5pZ25vcmVTbW9vdGhSZW5kZXJpbmdMaW1pdCA9IGlnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0XG4gICAgcmVmLmN1cnJlbnQuc2V0VGltZUJpbm5pbmdJbmZvV2hlbk5vdFByb3ZpZGVkID0gc2V0VGltZUJpbm5pbmdJbmZvV2hlbk5vdFByb3ZpZGVkXG4gIH0sIFtcbiAgICBpZ25vcmVTbW9vdGhSZW5kZXJpbmdMaW1pdCxcbiAgICBzZXRUaW1lQmlubmluZ0luZm9XaGVuTm90UHJvdmlkZWRcbiAgXSlcblxuICByZXR1cm4gKFxuICAgIDxhcmNnaXMtY2hhcnRzLWxpbmUtY2hhcnQgcmVmPXtoYW5kbGVSZWZ9IGNsYXNzPXtjbGFzc05hbWV9IC8+XG4gIClcbn0pXG4iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnXG5leHBvcnQgKiBmcm9tICcuL2xpbmUnXG4iLCJpbXBvcnQgeyB0eXBlIEltbXV0YWJsZU9iamVjdCwgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0LCB0eXBlIFdlYkNoYXJ0RGF0YVNvdXJjZXMsIHR5cGUgV2ViTWFwV2ViQ2hhcnQgfSBmcm9tICdAYXJjZ2lzL2NoYXJ0cy1zcGVjJ1xuaW1wb3J0IHsgdHlwZSBVbnByaXZpbGVnZWRDaGFydCwgdXNlTm9ybWFsaXplZENoYXJ0T2JqZWN0LCB1c2VDaGFydENvbXBvbmVudERlZmluZWQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IExpbmVDaGFydENvcmUsIHR5cGUgTGluZUNoYXJ0Q29yZVByb3BzIH0gZnJvbSAnLi9jb3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFByb3BzIGV4dGVuZHMgT21pdDxMaW5lQ2hhcnRDb3JlUHJvcHMsICdjb25maWcnPiB7XG4gIC8qKlxuICogVXNlZCBieSBgQGFyY2dpcy9jaGFydHMtY29tcG9uZW50c2AgcGFja2FnZSwgYm90aCBtdXRhYmxlIGFuZCBpbW11dGFibGUgYXJlIHN1cHBvcnRlZC5cbiAqL1xuICB3ZWJNYXBXZWJDaGFydDogV2ViTWFwV2ViQ2hhcnQgfCBJbW11dGFibGVPYmplY3Q8V2ViTWFwV2ViQ2hhcnQ+XG4gIC8qKlxuICAgKiBQcm9wZXJ0eSByZXByZXNlbnRpbmcgdGhlIGRhdGFzb3VyY2UuIENhbiBiZSBGZWF0dXJlIGxheWVyIG9yIHZhbmlsbGEgUE9KT3MuXG4gICAqL1xuICBkYXRhU291cmNlPzogV2ViQ2hhcnREYXRhU291cmNlc1xufVxuXG5leHBvcnQgY29uc3QgTGluZUNoYXJ0ID0gUmVhY3QubWVtbyhSZWFjdC5mb3J3YXJkUmVmKChwcm9wczogTGluZUNoYXJ0UHJvcHMsIGNoYXJ0UmVmOiBSZWFjdC5SZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHdlYk1hcFdlYkNoYXJ0OiBwcm9wV2ViTWFwV2ViQ2hhcnQsXG4gICAgZGF0YVNvdXJjZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgZGVmaW5lZCA9IHVzZUNoYXJ0Q29tcG9uZW50RGVmaW5lZCgnbGluZVNlcmllcycpXG5cbiAgY29uc3Qgd2ViTWFwV2ViQ2hhcnQgPSB1c2VOb3JtYWxpemVkQ2hhcnRPYmplY3Q8V2ViTWFwV2ViQ2hhcnQ+KHByb3BXZWJNYXBXZWJDaGFydClcbiAgY29uc3Qgd2ViQ2hhcnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ud2ViTWFwV2ViQ2hhcnQsXG4gICAgICBkYXRhU291cmNlXG4gICAgfSBhcyBXZWJDaGFydFxuICB9LCBbd2ViTWFwV2ViQ2hhcnQsIGRhdGFTb3VyY2VdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkZWZpbmVkICYmIDxMaW5lQ2hhcnRDb3JlIHJlZj17Y2hhcnRSZWZ9IGNvbmZpZz17d2ViQ2hhcnR9IHsuLi5vdGhlcnN9IC8+fVxuICAgIDwvPlxuICApXG59KSlcbkxpbmVDaGFydC5kaXNwbGF5TmFtZSA9ICdMaW5lQ2hhcnQnXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQ2hhcnRDb21wb25lbnRFdmVudENhbGxiYWNrcywgdHlwZSBVbnByaXZpbGVnZWRDaGFydCwgdXNlUmVnaXN0ZXJFdmVudCwgdXNlRm9ya0NoYXJ0UmVmIH0gZnJvbSAnLi4vdXRpbHMnXG5leHBvcnQgaW50ZXJmYWNlIFBpZUNoYXJ0Q29yZVByb3BzIGV4dGVuZHMgUGFydGlhbDxIVE1MQXJjZ2lzQ2hhcnRzUGllQ2hhcnRFbGVtZW50PiwgQ2hhcnRDb21wb25lbnRFdmVudENhbGxiYWNrcyB7XG59XG5cbmV4cG9ydCBjb25zdCBQaWVDaGFydENvcmUgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wczogUGllQ2hhcnRDb3JlUHJvcHMsIGNoYXJ0UmVmOiBSZWFjdC5SZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxBcmNnaXNDaGFydHNQaWVDaGFydEVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGhhbmRsZVJlZiA9IHVzZUZvcmtDaGFydFJlZihyZWYsIGNoYXJ0UmVmKVxuXG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29uZmlnLFxuICAgIGxheWVyLFxuICAgIHZpZXcsXG4gICAgbGVnZW5kUG9zaXRpb24sXG4gICAgbGVnZW5kVmlzaWJpbGl0eSxcblxuICAgIHJ1bnRpbWVEYXRhRmlsdGVycyxcbiAgICBpbmxpbmVEYXRhLFxuICAgIHNlbGVjdGlvbkRhdGEsXG4gICAgc2VsZWN0aW9uVGhlbWUsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdG9vbHRpcEZvcm1hdHRlcixcbiAgICBkYXRhTGFiZWxGb3JtYXR0ZXIsXG4gICAgYWN0aW9uTW9kZSxcbiAgICBmaWx0ZXJCeVNlbGVjdGlvbixcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb25zLFxuICAgIG5vRGF0YU9wdGlvbnMsXG5cbiAgICByZXR1cm5TZWxlY3Rpb25JbmRleGVzLFxuICAgIHJldHVyblNlbGVjdGlvbk9JRHMsXG5cbiAgICBhdXRvRGlzcG9zZUNoYXJ0LFxuICAgIGVuYWJsZVJlc3BvbnNpdmVGZWF0dXJlcyxcbiAgICBoaWRlTGljZW5jZVdhdGVybWFyayxcbiAgICBxdWV1ZUNoYXJ0Q3JlYXRpb24sXG4gICAgdXNlQW5pbWF0ZWRDaGFydHMsXG4gICAgaGlkZUxvYWRlckFuaW1hdGlvbixcblxuICAgIGNoYXJ0V2lsbFJlbmRlcixcbiAgICBhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0NvbXBsZXRlLFxuICAgIGFyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzRXJyb3IsXG4gICAgYXJjZ2lzQ2hhcnRzTGVnZW5kSXRlbVZpc2liaWxpdHlDaGFuZ2UsXG4gICAgYXJjZ2lzQ2hhcnRzVXBkYXRlQ29tcGxldGUsXG4gICAgYXJjZ2lzQ2hhcnRzU2VyaWVzQ29sb3JDaGFuZ2UsXG4gICAgYXJjZ2lzQ2hhcnRzQXhlc01pbk1heENoYW5nZSxcbiAgICBhcmNnaXNDaGFydHNEZWZhdWx0QWN0aW9uU2VsZWN0LFxuICAgIGFyY2dpc0NoYXJ0c1NlbGVjdGlvbkNvbXBsZXRlLFxuICAgIGFyY2dpc0NoYXJ0c0FjdGlvbkJhclRvZ2dsZSxcbiAgICBhcmNnaXNDaGFydHNOb1JlbmRlclByb3BDaGFuZ2UsXG5cbiAgICBsZWdlbmRWYWx1ZUxhYmVsRm9ybWF0dGVyXG4gIH0gPSBwcm9wc1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuY29uZmlnID0gY29uZmlnXG4gICAgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQubGF5ZXIgPSBsYXllclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdXBkYXRlIGNvbmZpZyBhbmQgaW5saW5lLWRhdGEgYXQgdGhlIHNhbWUgdGltZSwgdGhlIHVwZGF0ZSBvZiBkYXRhIHdpbGwgYmUgaWdub3JlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWYuY3VycmVudC5pbmxpbmVEYXRhID0gaW5saW5lRGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2NvbmZpZywgaW5saW5lRGF0YSwgbGF5ZXJdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQucnVudGltZURhdGFGaWx0ZXJzID0gcnVudGltZURhdGFGaWx0ZXJzXG4gIH0sIFtydW50aW1lRGF0YUZpbHRlcnNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQudmlldyA9IHZpZXdcbiAgICByZWYuY3VycmVudC5sZWdlbmRQb3NpdGlvbiA9IGxlZ2VuZFBvc2l0aW9uXG4gICAgcmVmLmN1cnJlbnQubGVnZW5kVmlzaWJpbGl0eSA9IGxlZ2VuZFZpc2liaWxpdHlcbiAgICByZWYuY3VycmVudC5sZWdlbmRWaXNpYmlsaXR5ID0gbGVnZW5kVmlzaWJpbGl0eVxuICB9LCBbXG4gICAgdmlldyxcbiAgICBsZWdlbmRQb3NpdGlvbixcbiAgICBsZWdlbmRWaXNpYmlsaXR5XG4gIF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5zZWxlY3Rpb25EYXRhID0gc2VsZWN0aW9uRGF0YVxuICAgIHJlZi5jdXJyZW50LnNlbGVjdGlvblRoZW1lID0gc2VsZWN0aW9uVGhlbWVcbiAgICByZWYuY3VycmVudC5jaGFydExpbWl0cyA9IGNoYXJ0TGltaXRzXG4gICAgcmVmLmN1cnJlbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgIHJlZi5jdXJyZW50LnRvb2x0aXBGb3JtYXR0ZXIgPSB0b29sdGlwRm9ybWF0dGVyXG4gICAgcmVmLmN1cnJlbnQuZGF0YUxhYmVsRm9ybWF0dGVyID0gZGF0YUxhYmVsRm9ybWF0dGVyXG4gICAgcmVmLmN1cnJlbnQuYWN0aW9uTW9kZSA9IGFjdGlvbk1vZGVcbiAgICByZWYuY3VycmVudC5maWx0ZXJCeVNlbGVjdGlvbiA9IGZpbHRlckJ5U2VsZWN0aW9uXG4gICAgcmVmLmN1cnJlbnQuZGlzYWJsZUludGVyYWN0aW9ucyA9IGRpc2FibGVJbnRlcmFjdGlvbnNcbiAgfSwgW1xuICAgIHNlbGVjdGlvbkRhdGEsXG4gICAgc2VsZWN0aW9uVGhlbWUsXG4gICAgY2hhcnRMaW1pdHMsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdG9vbHRpcEZvcm1hdHRlcixcbiAgICBkYXRhTGFiZWxGb3JtYXR0ZXIsXG4gICAgYWN0aW9uTW9kZSxcbiAgICBmaWx0ZXJCeVNlbGVjdGlvbixcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb25zXG4gIF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5yZXR1cm5TZWxlY3Rpb25JbmRleGVzID0gcmV0dXJuU2VsZWN0aW9uSW5kZXhlc1xuICAgIHJlZi5jdXJyZW50LnJldHVyblNlbGVjdGlvbk9JRHMgPSByZXR1cm5TZWxlY3Rpb25PSURzXG4gIH0sIFtyZXR1cm5TZWxlY3Rpb25JbmRleGVzLCByZXR1cm5TZWxlY3Rpb25PSURzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmF1dG9EaXNwb3NlQ2hhcnQgPSBhdXRvRGlzcG9zZUNoYXJ0XG4gICAgcmVmLmN1cnJlbnQuZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzID0gZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzXG4gICAgcmVmLmN1cnJlbnQuaGlkZUxpY2VuY2VXYXRlcm1hcmsgPSBoaWRlTGljZW5jZVdhdGVybWFya1xuICAgIHJlZi5jdXJyZW50LnF1ZXVlQ2hhcnRDcmVhdGlvbiA9IHF1ZXVlQ2hhcnRDcmVhdGlvblxuICAgIHJlZi5jdXJyZW50LnVzZUFuaW1hdGVkQ2hhcnRzID0gdXNlQW5pbWF0ZWRDaGFydHNcbiAgICByZWYuY3VycmVudC5oaWRlTG9hZGVyQW5pbWF0aW9uID0gaGlkZUxvYWRlckFuaW1hdGlvblxuICB9LCBbXG4gICAgYXV0b0Rpc3Bvc2VDaGFydCxcbiAgICBlbmFibGVSZXNwb25zaXZlRmVhdHVyZXMsXG4gICAgaGlkZUxpY2VuY2VXYXRlcm1hcmssXG4gICAgcXVldWVDaGFydENyZWF0aW9uLFxuICAgIHVzZUFuaW1hdGVkQ2hhcnRzLFxuICAgIGhpZGVMb2FkZXJBbmltYXRpb25cbiAgXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50Lm5vRGF0YU9wdGlvbnMgPSBub0RhdGFPcHRpb25zXG4gIH0sIFtub0RhdGFPcHRpb25zXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmNoYXJ0V2lsbFJlbmRlciA9IGNoYXJ0V2lsbFJlbmRlclxuICB9LCBbY2hhcnRXaWxsUmVuZGVyXSlcblxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzQ29tcGxldGUnLCBhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0NvbXBsZXRlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzRXJyb3InLCBhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0Vycm9yKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0xlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlJywgYXJjZ2lzQ2hhcnRzTGVnZW5kSXRlbVZpc2liaWxpdHlDaGFuZ2UpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzVXBkYXRlQ29tcGxldGUnLCBhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZScsIGFyY2dpc0NoYXJ0c1Nlcmllc0NvbG9yQ2hhbmdlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0F4ZXNNaW5NYXhDaGFuZ2UnLCBhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0RlZmF1bHRBY3Rpb25TZWxlY3QnLCBhcmNnaXNDaGFydHNEZWZhdWx0QWN0aW9uU2VsZWN0KVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c1NlbGVjdGlvbkNvbXBsZXRlJywgYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGUpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlJywgYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZScsIGFyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFZhbHVlTGFiZWxGb3JtYXR0ZXIgPSBsZWdlbmRWYWx1ZUxhYmVsRm9ybWF0dGVyXG4gIH0sIFtcbiAgICBsZWdlbmRWYWx1ZUxhYmVsRm9ybWF0dGVyXG4gIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8YXJjZ2lzLWNoYXJ0cy1waWUtY2hhcnQgcmVmPXtoYW5kbGVSZWZ9IGNsYXNzPXtjbGFzc05hbWV9IC8+XG4gIClcbn0pXG4iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnXG5leHBvcnQgKiBmcm9tICcuL3BpZSdcbiIsImltcG9ydCB7IHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgV2ViQ2hhcnQsIHR5cGUgV2ViQ2hhcnREYXRhU291cmNlcywgdHlwZSBXZWJNYXBXZWJDaGFydCB9IGZyb20gJ0BhcmNnaXMvY2hhcnRzLXNwZWMnXG5pbXBvcnQgeyB0eXBlIFVucHJpdmlsZWdlZENoYXJ0LCB1c2VOb3JtYWxpemVkQ2hhcnRPYmplY3QsIHVzZUNoYXJ0Q29tcG9uZW50RGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgUGllQ2hhcnRDb3JlLCB0eXBlIFBpZUNoYXJ0Q29yZVByb3BzIH0gZnJvbSAnLi9jb3JlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFBpZUNoYXJ0UHJvcHMgZXh0ZW5kcyBPbWl0PFBpZUNoYXJ0Q29yZVByb3BzLCAnY29uZmlnJz4ge1xuICAvKipcbiAqIFVzZWQgYnkgYEBhcmNnaXMvY2hhcnRzLWNvbXBvbmVudHNgIHBhY2thZ2UsIGJvdGggbXV0YWJsZSBhbmQgaW1tdXRhYmxlIGFyZSBzdXBwb3J0ZWQuXG4gKi9cbiAgd2ViTWFwV2ViQ2hhcnQ6IFdlYk1hcFdlYkNoYXJ0IHwgSW1tdXRhYmxlT2JqZWN0PFdlYk1hcFdlYkNoYXJ0PlxuICAvKipcbiAgICogUHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZSBkYXRhc291cmNlLiBDYW4gYmUgRmVhdHVyZSBsYXllciBvciB2YW5pbGxhIFBPSk9zLlxuICAgKi9cbiAgZGF0YVNvdXJjZT86IFdlYkNoYXJ0RGF0YVNvdXJjZXNcbn1cblxuZXhwb3J0IGNvbnN0IFBpZUNoYXJ0ID0gUmVhY3QubWVtbyhSZWFjdC5mb3J3YXJkUmVmKChwcm9wczogUGllQ2hhcnRQcm9wcywgY2hhcnRSZWY6IFJlYWN0LlJlZjxVbnByaXZpbGVnZWRDaGFydD4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB7XG4gICAgd2ViTWFwV2ViQ2hhcnQ6IHByb3BXZWJNYXBXZWJDaGFydCxcbiAgICBkYXRhU291cmNlLFxuICAgIC4uLm90aGVyc1xuICB9ID0gcHJvcHNcblxuICBjb25zdCBkZWZpbmVkID0gdXNlQ2hhcnRDb21wb25lbnREZWZpbmVkKCdwaWVTZXJpZXMnKVxuXG4gIGNvbnN0IHdlYk1hcFdlYkNoYXJ0ID0gdXNlTm9ybWFsaXplZENoYXJ0T2JqZWN0PFdlYk1hcFdlYkNoYXJ0Pihwcm9wV2ViTWFwV2ViQ2hhcnQpXG4gIGNvbnN0IHdlYkNoYXJ0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLndlYk1hcFdlYkNoYXJ0LFxuICAgICAgZGF0YVNvdXJjZVxuICAgIH0gYXMgV2ViQ2hhcnRcbiAgfSwgW3dlYk1hcFdlYkNoYXJ0LCBkYXRhU291cmNlXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGVmaW5lZCAmJiA8UGllQ2hhcnRDb3JlIHJlZj17Y2hhcnRSZWZ9IGNvbmZpZz17d2ViQ2hhcnR9IHsuLi5vdGhlcnN9IC8+fVxuICAgIDwvPlxuICApXG59KSlcblBpZUNoYXJ0LmRpc3BsYXlOYW1lID0gJ1BpZUNoYXJ0J1xuIiwiaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIENoYXJ0Q29tcG9uZW50RXZlbnRDYWxsYmFja3MsIHR5cGUgVW5wcml2aWxlZ2VkQ2hhcnQsIHVzZVJlZ2lzdGVyRXZlbnQsIHVzZUZvcmtDaGFydFJlZiB9IGZyb20gJy4uL3V0aWxzJ1xuZXhwb3J0IGludGVyZmFjZSBTY2F0dGVyUGxvdENvcmVQcm9wcyBleHRlbmRzIFBhcnRpYWw8SFRNTEFyY2dpc0NoYXJ0c1NjYXR0ZXJQbG90RWxlbWVudD4sIENoYXJ0Q29tcG9uZW50RXZlbnRDYWxsYmFja3Mge1xufVxuXG5leHBvcnQgY29uc3QgU2NhdHRlclBsb3RDb3JlID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IFNjYXR0ZXJQbG90Q29yZVByb3BzLCBjaGFydFJlZjogUmVhY3QuUmVmPFVucHJpdmlsZWdlZENoYXJ0Pik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQXJjZ2lzQ2hhcnRzU2NhdHRlclBsb3RFbGVtZW50PihudWxsKVxuICBjb25zdCBoYW5kbGVSZWYgPSB1c2VGb3JrQ2hhcnRSZWYocmVmLCBjaGFydFJlZilcblxuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbmZpZyxcbiAgICBsYXllcixcbiAgICB2aWV3LFxuICAgIGxlZ2VuZFBvc2l0aW9uLFxuICAgIGxlZ2VuZFZpc2liaWxpdHksXG4gICAgeEF4aXNMYWJlbEZvcm1hdHRlcixcbiAgICB5QXhpc0xhYmVsRm9ybWF0dGVyLFxuXG4gICAgcnVudGltZURhdGFGaWx0ZXJzLFxuICAgIGlubGluZURhdGEsXG4gICAgc2VsZWN0aW9uRGF0YSxcbiAgICBzZWxlY3Rpb25UaGVtZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICB0b29sdGlwRm9ybWF0dGVyLFxuICAgIGRhdGFMYWJlbEZvcm1hdHRlcixcbiAgICBhY3Rpb25Nb2RlLFxuICAgIGZpbHRlckJ5U2VsZWN0aW9uLFxuICAgIGRpc2FibGVJbnRlcmFjdGlvbnMsXG4gICAgbm9EYXRhT3B0aW9ucyxcblxuICAgIHJldHVyblNlbGVjdGlvbkluZGV4ZXMsXG4gICAgcmV0dXJuU2VsZWN0aW9uT0lEcyxcblxuICAgIGF1dG9EaXNwb3NlQ2hhcnQsXG4gICAgZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzLFxuICAgIGhpZGVMaWNlbmNlV2F0ZXJtYXJrLFxuICAgIHF1ZXVlQ2hhcnRDcmVhdGlvbixcbiAgICB1c2VBbmltYXRlZENoYXJ0cyxcbiAgICBoaWRlTG9hZGVyQW5pbWF0aW9uLFxuXG4gICAgYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NDb21wbGV0ZSxcbiAgICBhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0Vycm9yLFxuICAgIGFyY2dpc0NoYXJ0c0xlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlLFxuICAgIGFyY2dpc0NoYXJ0c1VwZGF0ZUNvbXBsZXRlLFxuICAgIGFyY2dpc0NoYXJ0c1Nlcmllc0NvbG9yQ2hhbmdlLFxuICAgIGFyY2dpc0NoYXJ0c0F4ZXNNaW5NYXhDaGFuZ2UsXG4gICAgYXJjZ2lzQ2hhcnRzRGVmYXVsdEFjdGlvblNlbGVjdCxcbiAgICBhcmNnaXNDaGFydHNTZWxlY3Rpb25Db21wbGV0ZSxcbiAgICBhcmNnaXNDaGFydHNBY3Rpb25CYXJUb2dnbGUsXG4gICAgYXJjZ2lzQ2hhcnRzTm9SZW5kZXJQcm9wQ2hhbmdlLFxuXG4gICAgaWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXRcbiAgfSA9IHByb3BzXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5jb25maWcgPSBjb25maWdcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChsYXllcikge1xuICAgICAgICByZWYuY3VycmVudC5sYXllciA9IGxheWVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB1cGRhdGUgY29uZmlnIGFuZCBpbmxpbmUtZGF0YSBhdCB0aGUgc2FtZSB0aW1lLCB0aGUgdXBkYXRlIG9mIGRhdGEgd2lsbCBiZSBpZ25vcmVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlZi5jdXJyZW50LmlubGluZURhdGEgPSBpbmxpbmVEYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbY29uZmlnLCBpbmxpbmVEYXRhLCBsYXllcl0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5ydW50aW1lRGF0YUZpbHRlcnMgPSBydW50aW1lRGF0YUZpbHRlcnNcbiAgfSwgW3J1bnRpbWVEYXRhRmlsdGVyc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC52aWV3ID0gdmlld1xuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFBvc2l0aW9uID0gbGVnZW5kUG9zaXRpb25cbiAgICByZWYuY3VycmVudC5sZWdlbmRWaXNpYmlsaXR5ID0gbGVnZW5kVmlzaWJpbGl0eVxuICAgIHJlZi5jdXJyZW50LmxlZ2VuZFZpc2liaWxpdHkgPSBsZWdlbmRWaXNpYmlsaXR5XG4gICAgcmVmLmN1cnJlbnQueEF4aXNMYWJlbEZvcm1hdHRlciA9IHhBeGlzTGFiZWxGb3JtYXR0ZXJcbiAgICByZWYuY3VycmVudC55QXhpc0xhYmVsRm9ybWF0dGVyID0geUF4aXNMYWJlbEZvcm1hdHRlclxuICB9LCBbXG4gICAgdmlldyxcbiAgICBsZWdlbmRQb3NpdGlvbixcbiAgICBsZWdlbmRWaXNpYmlsaXR5LFxuICAgIHhBeGlzTGFiZWxGb3JtYXR0ZXIsXG4gICAgeUF4aXNMYWJlbEZvcm1hdHRlclxuICBdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQuc2VsZWN0aW9uRGF0YSA9IHNlbGVjdGlvbkRhdGFcbiAgICByZWYuY3VycmVudC5zZWxlY3Rpb25UaGVtZSA9IHNlbGVjdGlvblRoZW1lXG4gICAgcmVmLmN1cnJlbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclxuICAgIHJlZi5jdXJyZW50LnRvb2x0aXBGb3JtYXR0ZXIgPSB0b29sdGlwRm9ybWF0dGVyXG4gICAgcmVmLmN1cnJlbnQuZGF0YUxhYmVsRm9ybWF0dGVyID0gZGF0YUxhYmVsRm9ybWF0dGVyXG4gICAgcmVmLmN1cnJlbnQuYWN0aW9uTW9kZSA9IGFjdGlvbk1vZGVcbiAgICByZWYuY3VycmVudC5maWx0ZXJCeVNlbGVjdGlvbiA9IGZpbHRlckJ5U2VsZWN0aW9uXG4gICAgcmVmLmN1cnJlbnQuZGlzYWJsZUludGVyYWN0aW9ucyA9IGRpc2FibGVJbnRlcmFjdGlvbnNcbiAgfSwgW1xuICAgIHNlbGVjdGlvbkRhdGEsXG4gICAgc2VsZWN0aW9uVGhlbWUsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgdG9vbHRpcEZvcm1hdHRlcixcbiAgICBkYXRhTGFiZWxGb3JtYXR0ZXIsXG4gICAgYWN0aW9uTW9kZSxcbiAgICBmaWx0ZXJCeVNlbGVjdGlvbixcbiAgICBkaXNhYmxlSW50ZXJhY3Rpb25zXG4gIF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudC5yZXR1cm5TZWxlY3Rpb25JbmRleGVzID0gcmV0dXJuU2VsZWN0aW9uSW5kZXhlc1xuICAgIHJlZi5jdXJyZW50LnJldHVyblNlbGVjdGlvbk9JRHMgPSByZXR1cm5TZWxlY3Rpb25PSURzXG4gIH0sIFtyZXR1cm5TZWxlY3Rpb25JbmRleGVzLCByZXR1cm5TZWxlY3Rpb25PSURzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50LmF1dG9EaXNwb3NlQ2hhcnQgPSBhdXRvRGlzcG9zZUNoYXJ0XG4gICAgcmVmLmN1cnJlbnQuZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzID0gZW5hYmxlUmVzcG9uc2l2ZUZlYXR1cmVzXG4gICAgcmVmLmN1cnJlbnQuaGlkZUxpY2VuY2VXYXRlcm1hcmsgPSBoaWRlTGljZW5jZVdhdGVybWFya1xuICAgIHJlZi5jdXJyZW50LnF1ZXVlQ2hhcnRDcmVhdGlvbiA9IHF1ZXVlQ2hhcnRDcmVhdGlvblxuICAgIHJlZi5jdXJyZW50LnVzZUFuaW1hdGVkQ2hhcnRzID0gdXNlQW5pbWF0ZWRDaGFydHNcbiAgICByZWYuY3VycmVudC5oaWRlTG9hZGVyQW5pbWF0aW9uID0gaGlkZUxvYWRlckFuaW1hdGlvblxuICB9LCBbXG4gICAgYXV0b0Rpc3Bvc2VDaGFydCxcbiAgICBlbmFibGVSZXNwb25zaXZlRmVhdHVyZXMsXG4gICAgaGlkZUxpY2VuY2VXYXRlcm1hcmssXG4gICAgcXVldWVDaGFydENyZWF0aW9uLFxuICAgIHVzZUFuaW1hdGVkQ2hhcnRzLFxuICAgIGhpZGVMb2FkZXJBbmltYXRpb25cbiAgXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50Lm5vRGF0YU9wdGlvbnMgPSBub0RhdGFPcHRpb25zXG4gIH0sIFtub0RhdGFPcHRpb25zXSlcblxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzQ29tcGxldGUnLCBhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0NvbXBsZXRlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzRXJyb3InLCBhcmNnaXNDaGFydHNEYXRhUHJvY2Vzc0Vycm9yKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0xlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlJywgYXJjZ2lzQ2hhcnRzTGVnZW5kSXRlbVZpc2liaWxpdHlDaGFuZ2UpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzVXBkYXRlQ29tcGxldGUnLCBhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZSlcbiAgdXNlUmVnaXN0ZXJFdmVudChyZWYsICdhcmNnaXNDaGFydHNTZXJpZXNDb2xvckNoYW5nZScsIGFyY2dpc0NoYXJ0c1Nlcmllc0NvbG9yQ2hhbmdlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0F4ZXNNaW5NYXhDaGFuZ2UnLCBhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c0RlZmF1bHRBY3Rpb25TZWxlY3QnLCBhcmNnaXNDaGFydHNEZWZhdWx0QWN0aW9uU2VsZWN0KVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c1NlbGVjdGlvbkNvbXBsZXRlJywgYXJjZ2lzQ2hhcnRzU2VsZWN0aW9uQ29tcGxldGUpXG4gIHVzZVJlZ2lzdGVyRXZlbnQocmVmLCAnYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlJywgYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlKVxuICB1c2VSZWdpc3RlckV2ZW50KHJlZiwgJ2FyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZScsIGFyY2dpc0NoYXJ0c05vUmVuZGVyUHJvcENoYW5nZSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZi5jdXJyZW50Lmlnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0ID0gaWdub3JlU21vb3RoUmVuZGVyaW5nTGltaXRcbiAgfSwgW1xuICAgIGlnbm9yZVNtb290aFJlbmRlcmluZ0xpbWl0XG4gIF0pXG5cbiAgcmV0dXJuIChcbiAgICA8YXJjZ2lzLWNoYXJ0cy1zY2F0dGVyLXBsb3QgcmVmPXtoYW5kbGVSZWZ9IGNsYXNzPXtjbGFzc05hbWV9IC8+XG4gIClcbn0pXG4iLCJleHBvcnQgKiBmcm9tICcuL2NvcmUnXG5leHBvcnQgKiBmcm9tICcuL3NjYXR0ZXInXG4iLCJpbXBvcnQgeyB0eXBlIEltbXV0YWJsZU9iamVjdCwgUmVhY3QgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIFdlYkNoYXJ0LCB0eXBlIFdlYkNoYXJ0RGF0YVNvdXJjZXMsIHR5cGUgV2ViTWFwV2ViQ2hhcnQgfSBmcm9tICdAYXJjZ2lzL2NoYXJ0cy1zcGVjJ1xuaW1wb3J0IHsgdHlwZSBVbnByaXZpbGVnZWRDaGFydCwgdXNlTm9ybWFsaXplZENoYXJ0T2JqZWN0LCB1c2VDaGFydENvbXBvbmVudERlZmluZWQgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IFNjYXR0ZXJQbG90Q29yZSwgdHlwZSBTY2F0dGVyUGxvdENvcmVQcm9wcyB9IGZyb20gJy4vY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSBTY2F0dGVyUGxvdFByb3BzIGV4dGVuZHMgT21pdDxTY2F0dGVyUGxvdENvcmVQcm9wcywgJ2NvbmZpZyc+IHtcbiAgLyoqXG4gKiBVc2VkIGJ5IGBAYXJjZ2lzL2NoYXJ0cy1jb21wb25lbnRzYCBwYWNrYWdlLCBib3RoIG11dGFibGUgYW5kIGltbXV0YWJsZSBhcmUgc3VwcG9ydGVkLlxuICovXG4gIHdlYk1hcFdlYkNoYXJ0OiBXZWJNYXBXZWJDaGFydCB8IEltbXV0YWJsZU9iamVjdDxXZWJNYXBXZWJDaGFydD5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHJlcHJlc2VudGluZyB0aGUgZGF0YXNvdXJjZS4gQ2FuIGJlIEZlYXR1cmUgbGF5ZXIgb3IgdmFuaWxsYSBQT0pPcy5cbiAgICovXG4gIGRhdGFTb3VyY2U/OiBXZWJDaGFydERhdGFTb3VyY2VzXG59XG5cbmV4cG9ydCBjb25zdCBTY2F0dGVyUGxvdCA9IFJlYWN0Lm1lbW8oUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IFNjYXR0ZXJQbG90UHJvcHMsIGNoYXJ0UmVmOiBSZWFjdC5SZWY8VW5wcml2aWxlZ2VkQ2hhcnQ+KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3Qge1xuICAgIHdlYk1hcFdlYkNoYXJ0OiBwcm9wV2ViTWFwV2ViQ2hhcnQsXG4gICAgZGF0YVNvdXJjZSxcbiAgICAuLi5vdGhlcnNcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgZGVmaW5lZCA9IHVzZUNoYXJ0Q29tcG9uZW50RGVmaW5lZCgnc2NhdHRlclNlcmllcycpXG5cbiAgY29uc3Qgd2ViTWFwV2ViQ2hhcnQgPSB1c2VOb3JtYWxpemVkQ2hhcnRPYmplY3Q8V2ViTWFwV2ViQ2hhcnQ+KHByb3BXZWJNYXBXZWJDaGFydClcbiAgY29uc3Qgd2ViQ2hhcnQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ud2ViTWFwV2ViQ2hhcnQsXG4gICAgICBkYXRhU291cmNlXG4gICAgfSBhcyBXZWJDaGFydFxuICB9LCBbd2ViTWFwV2ViQ2hhcnQsIGRhdGFTb3VyY2VdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkZWZpbmVkICYmIDxTY2F0dGVyUGxvdENvcmUgcmVmPXtjaGFydFJlZn0gY29uZmlnPXt3ZWJDaGFydH0gey4uLm90aGVyc30gLz59XG4gICAgPC8+XG4gIClcbn0pKVxuU2NhdHRlclBsb3QuZGlzcGxheU5hbWUgPSAnU2NhdHRlclBsb3QnXG4iLCJpbXBvcnQgeyBSZWFjdCwgdHlwZSBJbW11dGFibGVPYmplY3QsIGxvZGFzaCwgdHlwZSBJTVRoZW1lVmFyaWFibGVzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgY29udmVydFN0cmluZ0NvbG9yVG9Kc0FQSVN5bWJvbENvbG9yIH0gZnJvbSAnamltdS11aS9saWIvdXRpbHMvdXRpbHMnXG5pbXBvcnQge1xuICB0eXBlIFdlYk1hcFdlYkNoYXJ0LFxuICB0eXBlIENhbGN1bGF0ZWRNaW5NYXhCb3VuZHNQYXlsb2FkLFxuICB0eXBlIExlZ2VuZEl0ZW1WaXNpYmlsaXR5LFxuICB0eXBlIFdlYkNoYXJ0RGF0YVR5cGVzXG59IGZyb20gJ0BhcmNnaXMvY2hhcnRzLXNwZWMnXG5pbXBvcnQge1xuICB0eXBlIEFjdGlvbk1vZGVzLFxuICB0eXBlIFNlbGVjdGlvbkRhdGEsXG4gIHR5cGUgVmFsaWRhdGlvblN0YXR1cyxcbiAgdHlwZSBDaGFydFR5cGVzXG59IGZyb20gJ0BhcmNnaXMvY2hhcnRzLXNoYXJlZC11dGlscydcbmltcG9ydCB7XG4gIHR5cGUgTm90aWZ5T3B0aW9uc1xufSBmcm9tICdAYXJjZ2lzL2NoYXJ0cy1qcydcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnamltdS11aSdcblxudHlwZSBUcmF2ZXJzZUNvbnZlcnRDb2xvckluZW50aWZpZXIgPSBzdHJpbmcgfCAoKGtleTogc3RyaW5nKSA9PiBib29sZWFuKVxuLyoqXG4gKiBUcmF2ZXJzZXMgYW5kIGNvbnZlcnRzIGFsbCBzdHJpbmcgY29sb3JzIHRvIHN5bWJvbCBjb2xvcnMuXG4gKiBAcGFyYW0gaW5wdXRcbiAqIEBwYXJhbSB0aGVtZVxuICpcbiAqIFtzeW1ib2wgY29sb3JdKGh0dHBzOi8vZGV2ZWxvcGVycy5hcmNnaXMuY29tL2phdmFzY3JpcHQvbGF0ZXN0L2FwaS1yZWZlcmVuY2UvZXNyaS1zeW1ib2xzLVN5bWJvbC5odG1sI2NvbG9yKVxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VDb252ZXJ0Q29sb3IgPSA8VD4oXG4gIGlucHV0OiBULFxuICB0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyxcbiAgaWRlbnRpZmllcjogVHJhdmVyc2VDb252ZXJ0Q29sb3JJbmVudGlmaWVyID0gJ2NvbG9yJ1xuKTogVCA9PiB7XG4gIGlmICghdGhlbWUpIHJldHVybiBpbnB1dFxuICBjb25zdCBjb252ZXJ0VG9TeW1ib2xDb2xvciA9IChcbiAgICB0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyxcbiAgICBrZXk6IHN0cmluZyxcbiAgICB2YWx1ZTogYW55XG4gICkgPT4ge1xuICAgIGNvbnN0IGFwcGx5SWRlbnRpZmllciA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ga2V5ID09PSBpZGVudGlmaWVyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyKGtleSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFwcGx5SWRlbnRpZmllcihrZXkpKSB7XG4gICAgICBjb25zdCBjb2xvciA9IGNvbnZlcnRTdHJpbmdDb2xvclRvSnNBUElTeW1ib2xDb2xvcih2YWx1ZSwgdGhlbWUpXG4gICAgICByZXR1cm4gY29sb3JcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgY29uc3Qgd2ViQ2hhcnQgPSB0cmF2ZXJzZShpbnB1dCwgY29udmVydFRvU3ltYm9sQ29sb3IuYmluZChudWxsLCB0aGVtZSksIG51bGwpXG4gIHJldHVybiB3ZWJDaGFydFxufVxuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VDb252ZXJ0V2ViQ2hhcnRDb2xvciA9IChpbnB1dDogV2ViTWFwV2ViQ2hhcnQsIHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIHJldHVybiB0cmF2ZXJzZUNvbnZlcnRTeW1ib2xDb2xvcjxXZWJNYXBXZWJDaGFydD4oaW5wdXQsIHRoZW1lKVxufVxuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VDb252ZXJ0U3ltYm9sQ29sb3IgPSA8VD4oaW5wdXQ6IFQsIHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKSA9PiB7XG4gIGNvbnN0IGlkZW50aWZpZXIgPSAoa2V5OiBzdHJpbmcpID0+IGtleSA9PT0gJ2NvbG9yJyB8fCBrZXkgPT09ICdiYWNrZ3JvdW5kJ1xuICByZXR1cm4gdHJhdmVyc2VDb252ZXJ0Q29sb3I8VD4oaW5wdXQsIHRoZW1lLCBpZGVudGlmaWVyKVxufVxuXG50eXBlIFRyYXZlcnNlQ2FsbGJhY2tIYW5kbGUgPSAoXG4gIGtleTogc3RyaW5nLFxuICB2YWx1ZTogYW55XG4pID0+IGFueVxuXG4vKipcbiAqIFRyYXZlcnNlIGFuIG9iamVjdCBhbmQgZXhlY3V0ZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9uIHRoZSBbcHJpbWl0aXZlXSB2YWx1ZVxuICogQHBhcmFtIGlucHV0XG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBrZXlcbiAqIEByZXR1cm5zIGlucHV0XG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZSA9IChpbnB1dDogYW55LCBjYWxsYmFjazogVHJhdmVyc2VDYWxsYmFja0hhbmRsZSwga2V5Pzogc3RyaW5nKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIE9iamVjdC5lbnRyaWVzKGlucHV0KS5mb3JFYWNoKChbX2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICB2YWx1ZSA9IHRyYXZlcnNlKHZhbHVlLCBjYWxsYmFjaywgX2tleSlcbiAgICAgIGlmIChpbnB1dC5hc011dGFibGUpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zZXQoX2tleSwgdmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFtfa2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaW5wdXQuZm9yRWFjaCgodmFsdWUsIGlkeCkgPT4ge1xuICAgICAgdmFsdWUgPSB0cmF2ZXJzZSh2YWx1ZSwgY2FsbGJhY2ssIGlkeClcbiAgICAgIGlmIChpbnB1dC5hc011dGFibGUpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zZXQoaWR4LCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0W2lkeF0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgaW5wdXQgPSBjYWxsYmFjayhrZXksIGlucHV0KVxuICB9XG4gIHJldHVybiBpbnB1dFxufVxuXG5kZWNsYXJlIGNvbnN0IENvbXBvbmVudEV2ZW50czoge1xuICByZWFkb25seSBEYXRhUHJvY2Vzc0NvbXBsZXRlOiAnYXJjZ2lzQ2hhcnRzRGF0YVByb2Nlc3NDb21wbGV0ZSdcbiAgcmVhZG9ubHkgRGF0YVByb2Nlc3NFcnJvcjogJ2FyY2dpc0NoYXJ0c0RhdGFQcm9jZXNzRXJyb3InXG4gIHJlYWRvbmx5IExlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlOiAnYXJjZ2lzQ2hhcnRzTGVnZW5kSXRlbVZpc2liaWxpdHlDaGFuZ2UnXG4gIHJlYWRvbmx5IFVwZGF0ZUNvbXBsZXRlOiAnYXJjZ2lzQ2hhcnRzVXBkYXRlQ29tcGxldGUnXG4gIHJlYWRvbmx5IFNlcmllc0NvbG9yQ2hhbmdlOiAnYXJjZ2lzQ2hhcnRzU2VyaWVzQ29sb3JDaGFuZ2UnXG4gIHJlYWRvbmx5IEF4ZXNNaW5NYXhDaGFuZ2U6ICdhcmNnaXNDaGFydHNBeGVzTWluTWF4Q2hhbmdlJ1xuICByZWFkb25seSBEZWZhdWx0QWN0aW9uU2VsZWN0OiAnYXJjZ2lzQ2hhcnRzRGVmYXVsdEFjdGlvblNlbGVjdCdcbiAgcmVhZG9ubHkgU2VsZWN0aW9uQ29tcGxldGU6ICdhcmNnaXNDaGFydHNTZWxlY3Rpb25Db21wbGV0ZSdcbiAgcmVhZG9ubHkgQWN0aW9uQmFyVG9nZ2xlOiAnYXJjZ2lzQ2hhcnRzQWN0aW9uQmFyVG9nZ2xlJ1xuICByZWFkb25seSBOb1JlbmRlclByb3BDaGFuZ2U6ICdhcmNnaXNDaGFydHNOb1JlbmRlclByb3BDaGFuZ2UnXG59XG5cbi8qKlxuICogRGV0YWlsZWQgb3B0aW9ucyB0byBjdXN0b21pemUgY2hhcnQgZXhwZXJpZW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbE9wdGlvbnMge1xuICAvLyBUbyBlbnN1cmUgdGhhdCBjaGFydHMgYXJlIGJ1aWx0IG9uZSBieSBvbmUuIFRydWUgYnkgZGVmYXVsdFxuICBxdWV1ZUNoYXJ0Q3JlYXRpb24/OiBib29sZWFuXG4gIC8vIFRvIGFjdGl2YXRlIHRoZSBhbmltYXRpb25zIG9uIHRoZSBjaGFydC4gRmFsc2UgYnkgZGVmYXVsdFxuICB1c2VBbmltYXRlZENoYXJ0cz86IGJvb2xlYW5cbiAgLy8gVG8gaGlkZSB0aGUgYW1DaGFydHMgd2F0ZXJtYXJrLiBGYWxzZSBieSBkZWZhdWx0XG4gIGhpZGVMaWNlbmNlV2F0ZXJtYXJrPzogYm9vbGVhblxuICAvLyBUbyBlbmFibGUgdGhlIHJlc3BvbnNpdmUgZmVhdHVyZXMuIFRydWUgYnkgZGVmYXVsdFxuICBlbmFibGVSZXNwb25zaXZlRmVhdHVyZXM/OiBib29sZWFuXG4gIC8vIFRvIGF1dG8tZGlzcG9zZSBhIGNoYXJ0IGlmIGEgbmV3IG9uZSBpcyBjcmVhdGVkIGluIHRoZSBzYW1lIGNvbnRhaW5lci4gRmFsc2UgYnkgZGVmYXVsdFxuICBhdXRvRGlzcG9zZUNoYXJ0PzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJ0Q29tcG9uZW50RXZlbnRDYWxsYmFja3Mge1xuICBbQ29tcG9uZW50RXZlbnRzLkRhdGFQcm9jZXNzQ29tcGxldGVdPzogKFxuICAgIGV2ZW50OiBDdXN0b21FdmVudEluaXQ8V2ViQ2hhcnREYXRhVHlwZXM+XG4gICkgPT4gdm9pZFxuICBbQ29tcG9uZW50RXZlbnRzLkRhdGFQcm9jZXNzRXJyb3JdPzogKFxuICAgIGV2ZW50OiBDdXN0b21FdmVudEluaXQ8V2ViQ2hhcnREYXRhVHlwZXM+XG4gICkgPT4gdm9pZFxuICBbQ29tcG9uZW50RXZlbnRzLkxlZ2VuZEl0ZW1WaXNpYmlsaXR5Q2hhbmdlXT86IChcbiAgICBldmVudDogQ3VzdG9tRXZlbnRJbml0PExlZ2VuZEl0ZW1WaXNpYmlsaXR5PlxuICApID0+IHZvaWRcbiAgW0NvbXBvbmVudEV2ZW50cy5VcGRhdGVDb21wbGV0ZV0/OiAoXG4gICAgZXZlbnQ6IEN1c3RvbUV2ZW50SW5pdDxWYWxpZGF0aW9uU3RhdHVzPlxuICApID0+IHZvaWRcbiAgW0NvbXBvbmVudEV2ZW50cy5TZXJpZXNDb2xvckNoYW5nZV0/OiAoZXZlbnQ6IEN1c3RvbUV2ZW50SW5pdCkgPT4gdm9pZFxuICBbQ29tcG9uZW50RXZlbnRzLkF4ZXNNaW5NYXhDaGFuZ2VdPzogKFxuICAgIGV2ZW50OiBDdXN0b21FdmVudEluaXQ8Q2FsY3VsYXRlZE1pbk1heEJvdW5kc1BheWxvYWRbXT5cbiAgKSA9PiB2b2lkXG4gIFtDb21wb25lbnRFdmVudHMuRGVmYXVsdEFjdGlvblNlbGVjdF0/OiAoZXZlbnQ6IEN1c3RvbUV2ZW50SW5pdCkgPT4gdm9pZFxuICBbQ29tcG9uZW50RXZlbnRzLlNlbGVjdGlvbkNvbXBsZXRlXT86IChldmVudDogQ3VzdG9tRXZlbnRJbml0PFNlbGVjdGlvbkRhdGE+KSA9PiB2b2lkXG4gIFtDb21wb25lbnRFdmVudHMuQWN0aW9uQmFyVG9nZ2xlXT86IChldmVudDogQ3VzdG9tRXZlbnRJbml0KSA9PiB2b2lkXG4gIFtDb21wb25lbnRFdmVudHMuTm9SZW5kZXJQcm9wQ2hhbmdlXT86IChldmVudDogQ3VzdG9tRXZlbnRJbml0KSA9PiB2b2lkXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBjaGFydCBvYmplY3QuXG4gKiBAcGFyYW0gaW5wdXRcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZU5vcm1hbGl6ZWRDaGFydE9iamVjdCA9IDxUPihpbnB1dCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcblxuICAvKipcbiAgICogQ29udmVydCB0byBtdXRhYmxlIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IG91dHB1dDEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBvdXRwdXQgPSBpbnB1dCBhcyBJbW11dGFibGVPYmplY3Q8VD5cbiAgICBpZiAob3V0cHV0LmFzTXV0YWJsZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gb3V0cHV0LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dCBhcyBUXG4gIH0sIFtpbnB1dF0pXG5cbiAgLyoqXG4gICAqIFRyYXZlcnNlcyBhbmQgY29udmVydHMgYWxsIHN0cmluZyBjb2xvcnMgdG8gc3ltYm9sIGNvbG9ycy5cbiAgICovXG4gIGNvbnN0IG91dHB1dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNsb25lZCA9IGxvZGFzaC5jbG9uZURlZXAob3V0cHV0MSlcbiAgICByZXR1cm4gdHJhdmVyc2VDb252ZXJ0U3ltYm9sQ29sb3I8VD4oY2xvbmVkLCB0aGVtZSlcbiAgfSwgW3RoZW1lLCBvdXRwdXQxXSlcblxuICByZXR1cm4gb3V0cHV0XG59XG5cbmV4cG9ydCBjb25zdCB1c2VSZWdpc3RlckV2ZW50ID0gKFxuICBub2RlUmVmLFxuICBldmVudE5hbWU6IHN0cmluZyxcbiAgY2FsbGJhY2s6IChldmVudDogQ3VzdG9tRXZlbnRJbml0KSA9PiB2b2lkXG4pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBub2RlID0gbm9kZVJlZj8uY3VycmVudFxuICAgIGlmIChub2RlICYmIGV2ZW50TmFtZSAmJiBjYWxsYmFjaykge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChub2RlICYmIGV2ZW50TmFtZSAmJiBjYWxsYmFjaykge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtldmVudE5hbWUsIG5vZGVSZWYsIGNhbGxiYWNrXSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnByaXZpbGVnZWRDaGFydCB7XG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGNoYXJ0IHpvb20gdG8gYnJpbmcgaXQgYmFjayB0byBmdWxsIGV4dGVudFxuICAgKiBAY2F0ZWdvcnkgUHVibGljXG4gICAqL1xuICByZXNldFpvb206ICgpID0+IFByb21pc2U8dm9pZD5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgc2VsZWN0aW9uIG9uIHRoZSBjaGFydC5cbiAgICogQGNhdGVnb3J5IFB1YmxpY1xuICAgKi9cbiAgY2xlYXJTZWxlY3Rpb246ICgpID0+IFByb21pc2U8dm9pZD5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIHRoZSBzZWxlY3Rpb24gb24gdGhlIGNoYXJ0LlxuICAgKiBAY2F0ZWdvcnkgUHVibGljXG4gICAqL1xuICBzd2l0Y2hTZWxlY3Rpb246ICgpID0+IFByb21pc2U8dm9pZD5cbiAgLyoqXG4gICAqIE5vdGlmeSBtZXRob2QgYWxsb3dzIHBhc3NpbmcgZXh0ZXJuYWwgbWVzc2FnZXMgdG8gdGhlIGNoYXJ0IGNvbXBvbmVudC4gSXQgY2FuIGJlIHVzZWQgdG8gcGFzcyB2YWxpZGF0aW9uIG9yIGluZm9ybWF0aW9uIG1lc3NhZ2VzLiBJbiBhIHNpdHVhdGlvbiB3aGVyZSBhIGNvbmZpZyB1cGRhdGUgaXMgb3ZlcnJpZGluZyB5b3VyIG5vdGlmaWNhdGlvbiBtb2RhbCwgY29uc2lkZXIgd2FpdGluZyBmb3IgdGhlIGBhcmNnaXNDaGFydHNVcGRhdGVDb21wbGV0ZWAgZXZlbnQuXG4gICAqIEBjYXRlZ29yeSBQdWJsaWNcbiAgICovXG4gIG5vdGlmeTogKFxuICAgIG1lc3NhZ2U/OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgaGVhZGluZz86IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgICBvcHRpb25zPzogTm90aWZ5T3B0aW9ucyB8IHVuZGVmaW5lZFxuICApID0+IFByb21pc2U8dm9pZD5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIHRoZSBgYWN0aW9uTW9kZWAgb24gdGhlIGNoYXJ0LlxuICAgKi9cbiAgc2V0QWN0aW9uTW9kZTogKGFjdGlvbk1vZGU/OiBBY3Rpb25Nb2RlcykgPT4gdm9pZFxuICAvKipcbiAgICogUmUtcmVuZGVyIHRoZSBjaGFydC5cbiAgICogQHBhcmFtIHVwZGF0ZURhdGEgSW5kaWNhdGVzIHdoZXRoZXIgdG8gZmV0Y2ggbmV3IGRhdGEuIERlZmF1bHQ6IHRydWUuXG4gICAqIEBwYXJhbSByZXNldEF4ZXNCb3VuZHMgT3B0aW9uIHRvIHJlc2V0IHRoZSBheGVzIGJvdW5kcyBhbG9uZyB3aXRoIHRoZSByZWZyZXNoLlxuICAqL1xuICByZWZyZXNoOiAodXBkYXRlRGF0YT86IGJvb2xlYW4sIHJlc2V0QXhlc0JvdW5kcz86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD5cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIHdlYWtlciwgdW5wcml2aWxlZ2VkIHByb3h5IG9iamVjdCB0aGF0IG9ubHkgZXhwb3NlcyBtZXRob2RzIG9mIGNoYXJ0IGVsZW1lbnQuXG4gKiBAcGFyYW0gY2hhcnRcbiAqIEByZXR1cm5zIHtVbnByaXZpbGVnZWRDaGFydH1cbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VVbnByaXZpbGVnZWRDaGFydCA9IChjaGFydCk6IFVucHJpdmlsZWdlZENoYXJ0ID0+IHtcbiAgaWYgKGNoYXJ0ID09IG51bGwpIHJldHVyblxuICByZXR1cm4ge1xuICAgIHNldEFjdGlvbk1vZGU6IChhY3Rpb25Nb2RlPzogQWN0aW9uTW9kZXMpID0+IHsgY2hhcnQuYWN0aW9uTW9kZSA9IGFjdGlvbk1vZGUgfSxcbiAgICByZXNldFpvb206IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNoYXJ0LnJlc2V0Wm9vbS5hcHBseShjaGFydCwgYXJndW1lbnRzKSB9LFxuICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjaGFydC5jbGVhclNlbGVjdGlvbi5hcHBseShjaGFydCwgYXJndW1lbnRzKSB9LFxuICAgIHN3aXRjaFNlbGVjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hhcnQuc3dpdGNoU2VsZWN0aW9uLmFwcGx5KGNoYXJ0LCBhcmd1bWVudHMpIH0sXG4gICAgbm90aWZ5OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjaGFydC5ub3RpZnkuYXBwbHkoY2hhcnQsIGFyZ3VtZW50cykgfSxcbiAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjaGFydC5yZWZyZXNoLmFwcGx5KGNoYXJ0LCBhcmd1bWVudHMpIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlRm9ya0NoYXJ0UmVmID0gPFQ+KHJlZjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxUPiwgY2hhcnRSZWY6IFJlYWN0LlJlZjxVbnByaXZpbGVnZWRDaGFydD4pID0+IHtcbiAgY29uc3QgaGFuZGxlUmVmID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHJlZiA9PSBudWxsICYmIGNoYXJ0UmVmID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50ID0+IHtcbiAgICAgIHJlZi5jdXJyZW50ID0gZWxlbWVudFxuICAgICAgdXRpbHMuc2V0UmVmKGNoYXJ0UmVmLCBtYWtlVW5wcml2aWxlZ2VkQ2hhcnQoZWxlbWVudCkpXG4gICAgfVxuICB9LCBbcmVmLCBjaGFydFJlZl0pXG5cbiAgcmV0dXJuIGhhbmRsZVJlZlxufVxuXG5jb25zdCBDaGFydFRhZ3MgPSB7XG4gIGJhclNlcmllczogJ2FyY2dpcy1jaGFydHMtYmFyLWNoYXJ0JyxcbiAgbGluZVNlcmllczogJ2FyY2dpcy1jaGFydHMtbGluZS1jaGFydCcsXG4gIHBpZVNlcmllczogJ2FyY2dpcy1jaGFydHMtcGllLWNoYXJ0JyxcbiAgc2NhdHRlclNlcmllczogJ2FyY2dpcy1jaGFydHMtc2NhdHRlci1wbG90JyxcbiAgaGlzdG9ncmFtU2VyaWVzOiAnYXJjZ2lzLWNoYXJ0cy1oaXN0b2dyYW0nXG59XG5cbmV4cG9ydCBjb25zdCB1c2VDaGFydENvbXBvbmVudERlZmluZWQgPSAoY2hhcnRUeXBlOiBDaGFydFR5cGVzKSA9PiB7XG4gIGNvbnN0IFtkZWZpbmVkLCBzZXREZWZpbmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKENoYXJ0VGFnc1tjaGFydFR5cGVdKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldERlZmluZWQodHJ1ZSlcbiAgICB9KVxuICB9LCBbY2hhcnRUeXBlXSlcbiAgcmV0dXJuIGRlZmluZWRcbn1cbiIsImV4cG9ydCBjb25zdCBDT0xPUl9OQU1FUyA9IFtcbiAgJ2JsYWNrJyxcbiAgJ3NpbHZlcicsXG4gICdncmF5JyxcbiAgJ3doaXRlJyxcbiAgJ21hcm9vbicsXG4gICdyZWQnLFxuICAncHVycGxlJyxcbiAgJ2Z1Y2hzaWEnLFxuICAnZ3JlZW4nLFxuICAnbGltZScsXG4gICdvbGl2ZScsXG4gICd5ZWxsb3cnLFxuICAnbmF2eScsXG4gICdibHVlJyxcbiAgJ3RlYWwnLFxuICAnYXF1YScsXG4gICdhbnRpcXVld2hpdGUnLFxuICAnYXF1YW1hcmluZScsXG4gICdhenVyZScsXG4gICdiZWlnZScsXG4gICdiaXNxdWUnLFxuICAnYmxhbmNoZWRhbG1vbmQnLFxuICAnYmx1ZXZpb2xldCcsXG4gICdicm93bicsXG4gICdidXJseXdvb2QnLFxuICAnY2FkZXRibHVlJyxcbiAgJ2NoYXJ0cmV1c2UnLFxuICAnY2hvY29sYXRlJyxcbiAgJ2NvcmFsJyxcbiAgJ2Nvcm5mbG93ZXJibHVlJyxcbiAgJ2Nvcm5zaWxrJyxcbiAgJ2NyaW1zb24nLFxuICAnY3lhbicsXG4gICdkYXJrYmx1ZScsXG4gICdkYXJrY3lhbicsXG4gICdkYXJrZ29sZGVucm9kJyxcbiAgJ2RhcmtncmF5JyxcbiAgJ2RhcmtncmVlbicsXG4gICdkYXJrZ3JleScsXG4gICdkYXJra2hha2knLFxuICAnZGFya21hZ2VudGEnLFxuICAnZGFya29saXZlZ3JlZW4nLFxuICAnZGFya29yYW5nZScsXG4gICdkYXJrb3JjaGlkJyxcbiAgJ2RhcmtyZWQnLFxuICAnZGFya3NhbG1vbicsXG4gICdkYXJrc2VhZ3JlZW4nLFxuICAnZGFya3NsYXRlYmx1ZScsXG4gICdkYXJrc2xhdGVncmF5JyxcbiAgJ2RhcmtzbGF0ZWdyZXknLFxuICAnZGFya3R1cnF1b2lzZScsXG4gICdkYXJrdmlvbGV0JyxcbiAgJ2RlZXBwaW5rJyxcbiAgJ2RlZXBza3libHVlJyxcbiAgJ2RpbWdyYXknLFxuICAnZGltZ3JleScsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2ZpcmVicmljaycsXG4gICdmbG9yYWx3aGl0ZScsXG4gICdmb3Jlc3RncmVlbicsXG4gICdnYWluc2Jvcm8nLFxuICAnZ2hvc3R3aGl0ZScsXG4gICdnb2xkJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdncmVlbnllbGxvdycsXG4gICdncmV5JyxcbiAgJ2hvbmV5ZGV3JyxcbiAgJ2hvdHBpbmsnLFxuICAnaW5kaWFucmVkJyxcbiAgJ2luZGlnbycsXG4gICdpdm9yeScsXG4gICdraGFraScsXG4gICdsYXZlbmRlcicsXG4gICdsYXZlbmRlcmJsdXNoJyxcbiAgJ2xhd25ncmVlbicsXG4gICdsZW1vbmNoaWZmb24nLFxuICAnbGlnaHRibHVlJyxcbiAgJ2xpZ2h0Y29yYWwnLFxuICAnbGlnaHRjeWFuJyxcbiAgJ2xpZ2h0Z29sZGVucm9keWVsbG93JyxcbiAgJ2xpZ2h0Z3JheScsXG4gICdsaWdodGdyZWVuJyxcbiAgJ2xpZ2h0Z3JleScsXG4gICdsaWdodHBpbmsnLFxuICAnbGlnaHRzYWxtb24nLFxuICAnbGlnaHRzZWFncmVlbicsXG4gICdsaWdodHNreWJsdWUnLFxuICAnbGlnaHRzbGF0ZWdyYXknLFxuICAnbGlnaHRzbGF0ZWdyZXknLFxuICAnbGlnaHRzdGVlbGJsdWUnLFxuICAnbGlnaHR5ZWxsb3cnLFxuICAnbGltZWdyZWVuJyxcbiAgJ2xpbmVuJyxcbiAgJ21hZ2VudGEnLFxuICAnbWVkaXVtYXF1YW1hcmluZScsXG4gICdtZWRpdW1ibHVlJyxcbiAgJ21lZGl1bW9yY2hpZCcsXG4gICdtZWRpdW1wdXJwbGUnLFxuICAnbWVkaXVtc2VhZ3JlZW4nLFxuICAnbWVkaXVtc2xhdGVibHVlJyxcbiAgJ21lZGl1bXNwcmluZ2dyZWVuJyxcbiAgJ21lZGl1bXR1cnF1b2lzZScsXG4gICdtZWRpdW12aW9sZXRyZWQnLFxuICAnbWlkbmlnaHRibHVlJyxcbiAgJ21pbnRjcmVhbScsXG4gICdtaXN0eXJvc2UnLFxuICAnbW9jY2FzaW4nLFxuICAnbmF2YWpvd2hpdGUnLFxuICAnb2xkbGFjZScsXG4gICdvbGl2ZWRyYWInLFxuICAnb3JhbmdlcmVkJyxcbiAgJ29yY2hpZCcsXG4gICdwYWxlZ29sZGVucm9kJyxcbiAgJ3BhbGVncmVlbicsXG4gICdwYWxldHVycXVvaXNlJyxcbiAgJ3BhbGV2aW9sZXRyZWQnLFxuICAncGFwYXlhd2hpcCcsXG4gICdwZWFjaHB1ZmYnLFxuICAncGVydScsXG4gICdwaW5rJyxcbiAgJ3BsdW0nLFxuICAncG93ZGVyYmx1ZScsXG4gICdyb3N5YnJvd24nLFxuICAncm95YWxibHVlJyxcbiAgJ3NhZGRsZWJyb3duJyxcbiAgJ3NhbG1vbicsXG4gICdzYW5keWJyb3duJyxcbiAgJ3NlYWdyZWVuJyxcbiAgJ3NlYXNoZWxsJyxcbiAgJ3NpZW5uYScsXG4gICdza3libHVlJyxcbiAgJ3NsYXRlYmx1ZScsXG4gICdzbGF0ZWdyYXknLFxuICAnc2xhdGVncmV5JyxcbiAgJ3Nub3cnLFxuICAnc3ByaW5nZ3JlZW4nLFxuICAnc3RlZWxibHVlJyxcbiAgJ3RhbicsXG4gICd0aGlzdGxlJyxcbiAgJ3RvbWF0bycsXG4gICd0dXJxdW9pc2UnLFxuICAndmlvbGV0JyxcbiAgJ3doZWF0JyxcbiAgJ3doaXRlc21va2UnLFxuICAneWVsbG93Z3JlZW4nXG5dXG4iLCJpbXBvcnQge1xuICBwb2xpc2hlZCxcbiAgdHlwZSBJTVRoZW1lVmFyaWFibGVzLFxuICB0eXBlIEljb25SZXN1bHQsXG4gIHVybFV0aWxzLFxuICBnZXRBcHBTdG9yZSxcbiAgdHlwZSBJTVN0YXRlLFxuICBMaW5rVHlwZSxcbiAgdHlwZSBMaW5rVG8sXG4gIHR5cGUgSU1EaWFsb2dKc29uLFxuICB0eXBlIExpbmtSZXN1bHQsXG4gIERpYWxvZ01vZGUsXG4gIGFwcEFjdGlvbnMsXG4gIEltbXV0YWJsZSxcbiAgUGFnZVBhcnRcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBDb2xvclJlc3VsdCwgdHlwZSBSR0JDb2xvciB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyJ1xuaW1wb3J0IHsgQ09MT1JfTkFNRVMgfSBmcm9tICcuL2NvbG9yLW5hbWVzJ1xuaW1wb3J0IHsgdHlwZSBMaW5lYXJVbml0LCB0eXBlIExpbmtUYXJnZXQsIHR5cGUgVmFsaWRpdHlSZXN1bHQgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGdldFRoZW1lQ29sb3JWYWx1ZSB9IGZyb20gJ2ppbXUtdGhlbWUnXG5cbmV4cG9ydCBjb25zdCBDT0xPUl9WQVJJQUJMRV9SRUdFWCA9IC9edmFyXFwoLS0oLis/KVxcKSQvXG5cbmV4cG9ydCBjb25zdCB0b0NvbG9yVmFyaWFibGUgPSAobmFtZTogc3RyaW5nLCBpbmRleD86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGlmIChuYW1lID09IG51bGwgfHwgbmFtZSA9PT0gJycpIHJldHVyblxuICBpZiAodHlwZW9mIGluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBgdmFyKC0tJHtuYW1lfS0ke2luZGV4fSlgXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGB2YXIoLS0ke25hbWV9KWBcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNDb2xvclZhcmlhYmxlID0gKGNvbG9yOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuICEhQ09MT1JfVkFSSUFCTEVfUkVHRVgudGVzdChjb2xvcilcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWUgPSAoY29sb3I6IHN0cmluZywgdGhlbWU/OiBJTVRoZW1lVmFyaWFibGVzKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGlzQ29sb3JWYXJpYWJsZShjb2xvcikgPyBnZXRUaGVtZUNvbG9yVmFsdWUoY29sb3IsIHRoZW1lKSA6IGNvbG9yXG59XG5cbmV4cG9ydCBjb25zdCBpc1RyYW5zcGFyZW50Q29sb3IgPSAoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmdiYSA9IHBvbGlzaGVkLnBhcnNlVG9SZ2IoY29sb3IpXG4gICAgcmV0dXJuICEhKHJnYmE/LmFscGhhID09PSAwKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvQ29sb3JTdHJpbmcgPSAoY29sb3I6IENvbG9yUmVzdWx0KTogc3RyaW5nID0+IHtcbiAgLy8gaWYgYWxwaGEgaXMgMSwgcmV0dXJuIGhleDtcbiAgaWYgKGNvbG9yLnJnYi5hID09PSAxKSB7XG4gICAgcmV0dXJuIGNvbG9yLmhleFxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0b1JnYmEoY29sb3IucmdiKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b1JnYmEgPSAoY29sb3I6IFJHQkNvbG9yKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGByZ2JhKCR7Y29sb3Iucn0sJHtjb2xvci5nfSwke2NvbG9yLmJ9LCR7Y29sb3IuYX0pYFxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgZm9ybWF0IGNvbG9yIHRvIGVzcmkgc3ltYm9sIGNvbG9yXG4gKiBAcGFyYW0gdmFsdWUgW3N5bWJvbCBjb2xvcl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmFyY2dpcy5jb20vamF2YXNjcmlwdC9sYXRlc3QvYXBpLXJlZmVyZW5jZS9lc3JpLXN5bWJvbHMtU3ltYm9sLmh0bWwjY29sb3IpXG4gKiBAcGFyYW0gdGhlbWVcbiAqIEByZXR1cm5zIHN0cmluZyBjb2xvclxuICovXG5leHBvcnQgY29uc3QgY29udmVydEpzQVBJU3ltYm9sQ29sb3JUb1N0cmluZ0NvbG9yID0gKFxuICB2YWx1ZTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cbik6IHN0cmluZyA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUgYXMgYW55XG4gIH1cbiAgY29uc3QgW3JlZCwgZ3JlZW4sIGJsdWUsIF9hbHBoYV0gPSB2YWx1ZVxuICBjb25zdCBhbHBoYSA9IChfYWxwaGEgPz8gMjU1KSAvIDI1NVxuICByZXR1cm4gcG9saXNoZWQucmdiYShyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSlcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIGZvcm1hdCBjb2xvciB0byBlc3JpIHN5bWJvbCBjb2xvclxuICogQHBhcmFtIHZhbHVlIHN0cmluZyBjb2xvclxuICogQHBhcmFtIHRoZW1lXG4gKiBAcmV0dXJucyBbc3ltYm9sIGNvbG9yXShodHRwczovL2RldmVsb3BlcnMuYXJjZ2lzLmNvbS9qYXZhc2NyaXB0L2xhdGVzdC9hcGktcmVmZXJlbmNlL2Vzcmktc3ltYm9scy1TeW1ib2wuaHRtbCNjb2xvcilcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRTdHJpbmdDb2xvclRvSnNBUElTeW1ib2xDb2xvciA9IChcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcltdLFxuICB0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyB8IElNVGhlbWVWYXJpYWJsZXNcbik6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHJldHVybiB2YWx1ZSBhcyBhbnlcbiAgY29uc3QgY29sb3IgPSBnZXRDb2xvclZhbHVlKHZhbHVlLCB0aGVtZSBhcyBhbnkpXG4gIGNvbnN0IHJnYmEgPSBwb2xpc2hlZC5wYXJzZVRvUmdiKGNvbG9yKVxuICBpZiAocmdiYSA9PSBudWxsKSByZXR1cm5cbiAgY29uc3QgeyByZWQsIGdyZWVuLCBibHVlIH0gPSByZ2JhXG4gIGNvbnN0IGFscGhhID0gKHJnYmEuYWxwaGEgPz8gMSkgKiAyNTVcbiAgcmV0dXJuIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYV1cbn1cblxuY29uc3QgQ09MT1JfUkVHID0gL14oI3xyZ2J8cmdiYXx2YXIpL2dtXG5jb25zdCBOT1JNQUxfQ09MT1JfUkVHID0gL14oI3xyZ2J8cmdiYSkvZ21cblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRDb2xvciA9IChjb2xvcjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSByZXR1cm4gZmFsc2VcbiAgcmV0dXJuIENPTE9SX05BTUVTLmluY2x1ZGVzKGNvbG9yKSB8fCBjb2xvcj8ubWF0Y2goQ09MT1JfUkVHKSAhPSBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkTm9ybWFsQ29sb3IgPSAoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBDT0xPUl9OQU1FUy5pbmNsdWRlcyhjb2xvcikgfHwgY29sb3I/Lm1hdGNoKE5PUk1BTF9DT0xPUl9SRUcpICE9IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbG9yQWxwaGEgPSAoY29sb3I6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gIGlmICghaXNWYWxpZE5vcm1hbENvbG9yKGNvbG9yKSkgcmV0dXJuIDFcbiAgY29uc3QgcmdiYSA9IHBvbGlzaGVkLnBhcnNlVG9SZ2IoY29sb3IpXG4gIHJldHVybiByZ2JhLmFscGhhID8/IDFcbn1cblxuZXhwb3J0IGNvbnN0IHNldFJlZiA9IChyZWYsIHZhbHVlKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmVmKHZhbHVlKVxuICB9IGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZVxuICB9XG59XG5cbi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3Rpb25zIHRvIGNoYWluXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9ICguLi5mdW5jcyk6IGFueSA9PiB7XG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoXG4gICAgKGFjYywgZnVuYykgPT4ge1xuICAgICAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYWNjXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLidcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICB9XG4gICAgfSxcbiAgICAoKSA9PiB7fVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0xpbmVhclVuaXQgKGNzc1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBMaW5lYXJVbml0IHtcbiAgY29uc3QgdnUgPSBwb2xpc2hlZC5nZXRWYWx1ZUFuZFVuaXQoY3NzVmFsdWUpXG4gIHJldHVybiB7XG4gICAgZGlzdGFuY2U6IHZ1WzBdLFxuICAgIHVuaXQ6IHZ1Py5bMV0gPz8gJ3B4J1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21MaW5lYXJVbml0ICh2YWx1ZTogTGluZWFyVW5pdCk6IHN0cmluZyB7XG4gIGlmICh2YWx1ZS51bml0ICE9IG51bGwpIHtcbiAgICByZXR1cm4gYCR7dmFsdWUuZGlzdGFuY2UgPz8gMH0ke3ZhbHVlLnVuaXR9YFxuICB9XG4gIHJldHVybiBgJHt2YWx1ZS5kaXN0YW5jZSA/PyAwfXB4YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nT2ZMaW5lYXJVbml0IChcbiAgY3NzVmFsdWU6IHN0cmluZyB8IG51bWJlciB8IExpbmVhclVuaXRcbik6IHN0cmluZyB7XG4gIGlmIChjc3NWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgaWYgKHR5cGVvZiBjc3NWYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZnJvbUxpbmVhclVuaXQoY3NzVmFsdWUpXG4gIH1cbiAgY29uc3QgbHUgPSB0b0xpbmVhclVuaXQoY3NzVmFsdWUpXG4gIHJldHVybiBmcm9tTGluZWFyVW5pdChsdSlcbn1cblxuZXhwb3J0IGNvbnN0IHRvSWNvblJlc3VsdCA9IChcbiAgaWNvbjogYW55LFxuICBmaWxlbmFtZTogc3RyaW5nLFxuICBzaXplOiBudW1iZXIgPSAxMlxuKTogSWNvblJlc3VsdCA9PiB7XG4gIHJldHVybiB7XG4gICAgc3ZnOiBpY29uLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGZpbGVuYW1lLFxuICAgICAgc2l6ZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaXNPdXRPclRvcFRhcmdldExpbmsgPSAoXG4gIGxpbmtUeXBlOiBMaW5rVHlwZSxcbiAgaHJlZjogc3RyaW5nLFxuICB0YXJnZXQ/OiBMaW5rVGFyZ2V0XG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgaXNXZWJBZGRyZXNzID0gKHVybFV0aWxzLmlzQWJzb2x1dGVVcmwoaHJlZikgfHwgL153d3cuLy50ZXN0KGhyZWYpKSB8fCBsaW5rVHlwZSA9PT0gTGlua1R5cGUuV2ViQWRkcmVzc1xuICBjb25zdCBpc1RvcFRhcmdldCA9IHRhcmdldCA9PT0gJ190b3AnXG4gIGNvbnN0IGlzUHJpbnRQcmV2aWV3ID0gbGlua1R5cGUgPT09IExpbmtUeXBlLlByaW50UHJldmlld1xuICByZXR1cm4gaXNXZWJBZGRyZXNzIHx8IGlzVG9wVGFyZ2V0IHx8IGlzUHJpbnRQcmV2aWV3XG59XG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHJldHVybiBzdHJpbmdcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgd2lkZ2V0IGlzIHNlbGVjdGVkXG4gKiBAcGFyYW0gd2lkZ2V0SWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzV2lkZ2V0U2VsZWN0ZWQgPSAod2lkZ2V0SWQ6IHN0cmluZywgc3RhdGU/OiBJTVN0YXRlKTogYm9vbGVhbiA9PiB7XG4gIHN0YXRlID0gc3RhdGUgIT0gbnVsbCA/IHN0YXRlIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHN0YXRlLmFwcFJ1bnRpbWVJbmZvPy5zZWxlY3Rpb25cbiAgaWYgKCFzdGF0ZS5hcHBDb25maWc/LmxheW91dHMgfHwgIXNlbGVjdGlvbikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGNvbnN0IGxheW91dCA9IHN0YXRlLmFwcENvbmZpZy5sYXlvdXRzW3NlbGVjdGlvbi5sYXlvdXRJZF1cbiAgcmV0dXJuIGxheW91dD8uY29udGVudD8uW3NlbGVjdGlvbi5sYXlvdXRJdGVtSWRdPy53aWRnZXRJZCA9PT0gd2lkZ2V0SWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVGV4dElucHV0VmFsaWRpdHlSZXN1bHQgKFxuICB2YWx1ZTogc3RyaW5nLFxuICBjaGVja1ZhbGlkaXR5RnVuYzogKHRleHQ6IHN0cmluZykgPT4gVmFsaWRpdHlSZXN1bHQgfCBQcm9taXNlPFZhbGlkaXR5UmVzdWx0PlxuKTogUHJvbWlzZTxWYWxpZGl0eVJlc3VsdD4ge1xuICBjb25zdCByZXN1bHQgPSBjaGVja1ZhbGlkaXR5RnVuYyh2YWx1ZSlcbiAgaWYgKHR5cGVvZiAocmVzdWx0IGFzIFByb21pc2U8VmFsaWRpdHlSZXN1bHQ+KS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCByZXN1bHRcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbXNnOiBlcnI/Lm1lc3NhZ2UgPz8gZXJyIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY29uc3QgaXNNb2RpZmllZEV2ZW50ID0gZXZ0ID0+ICEhKGV2dC5tZXRhS2V5IHx8IGV2dC5hbHRLZXkgfHwgZXZ0LmN0cmxLZXkgfHwgZXZ0LnNoaWZ0S2V5KVxuY29uc3Qgc2hvdWxkQ29udGludWVMaW5rQ2xpY2sgPSAoZXZ0LCB0YXJnZXQsIGxpbmtIcmVmKSA9PiB7XG4gIHJldHVybiAhZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgIGV2dC5idXR0b24gPT09IDAgJiYgLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSAnX3NlbGYnKSAmJlxuICAgICFpc01vZGlmaWVkRXZlbnQoZXZ0KSAmJiAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICF1cmxVdGlscy5pc0Fic29sdXRlVXJsKGxpbmtIcmVmKVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlMaW5rU3RyaW5nQW5kTG9jYXRpb24gPSAoZXZ0LCB0YXJnZXQsIGxpbmtIcmVmLCByZXBsYWNlLCBoaXN0b3J5LCBvbkNsaWNrKSA9PiB7XG4gIG9uQ2xpY2sgJiYgb25DbGljayhldnQpXG4gIGlmICghc2hvdWxkQ29udGludWVMaW5rQ2xpY2soZXZ0LCB0YXJnZXQsIGxpbmtIcmVmKSkge1xuICAgIHJldHVyblxuICB9XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gIGlmICghbGlua0hyZWYpIHtcbiAgICByZXR1cm5cbiAgfVxuICBhcHBseUxpbmtIcmVmVG9IaXN0b3J5KGxpbmtIcmVmLCByZXBsYWNlLCBoaXN0b3J5KVxufVxuXG5leHBvcnQgY29uc3QgYXBwbHlMaW5rUmVzdWx0ID0gKHByb3BzKSA9PiB7XG4gIHN3aXRjaCAocHJvcHMubGlua1RvLmxpbmtUeXBlKSB7XG4gICAgY2FzZSBMaW5rVHlwZS5QYWdlVG9wOlxuICAgICAgYXBwbHlMaW5rUmVzdWx0UGFnZVRvcChwcm9wcy5ldnQsIHByb3BzLm9uQ2xpY2spXG4gICAgICBicmVha1xuICAgIGNhc2UgTGlua1R5cGUuV2ViQWRkcmVzczpcbiAgICAgIGFwcGx5TGlua1Jlc3VsdFdlYkFkZHJlc3MocHJvcHMuZXZ0LCBwcm9wcy5vbkNsaWNrKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIExpbmtUeXBlLkJsb2NrOlxuICAgIGNhc2UgTGlua1R5cGUuU2NyZWVuOlxuICAgICAgYXBwbHlMaW5rUmVzdWx0QmxvY2tBbmRTY3JlZW4oe1xuICAgICAgICBldnQ6IHByb3BzLmV2dCxcbiAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICAgIGxpbmtIcmVmOiBwcm9wcy5saW5rSHJlZixcbiAgICAgICAgbGlua1RvOiBwcm9wcy5saW5rVG8sXG4gICAgICAgIHJlcGxhY2U6IHByb3BzLnJlcGxhY2UsXG4gICAgICAgIGhpc3Rvcnk6IHByb3BzLmhpc3RvcnksXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzLm9uQ2xpY2tcbiAgICAgIH0pXG4gICAgICBicmVha1xuICAgIGNhc2UgTGlua1R5cGUuUGFnZTpcbiAgICAgIGFwcGx5TGlua1Jlc3VsdFBhZ2UocHJvcHMpXG4gICAgICBicmVha1xuICAgIGNhc2UgTGlua1R5cGUuRGlhbG9nOlxuICAgICAgYXBwbHlMaW5rUmVzdWx0RGlhbG9nKHByb3BzKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIExpbmtUeXBlLlZpZXc6XG4gICAgICBhcHBseUxpbmtSZXN1bHRWaWV3KHByb3BzKVxuICAgICAgYnJlYWtcbiAgICBjYXNlIExpbmtUeXBlLlByaW50UHJldmlldzpcbiAgICAgIGFwcGx5TGlua1Jlc3VsdFByaW50UHJldmlldyhwcm9wcylcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDogLy8gTm9uZVxuICAgICAgcHJvcHMub25DbGljaz8uKHByb3BzLmV2dClcbiAgICAgIGJyZWFrXG4gIH1cbn1cblxuY29uc3QgYXBwbHlMaW5rSHJlZlRvSGlzdG9yeSA9IChsaW5rSHJlZiwgcmVwbGFjZSwgaGlzdG9yeSkgPT4ge1xuICBjb25zdCBsb2MgPSB1cmxVdGlscy5jcmVhdGVMb2NhdGlvbih3aW5kb3cubG9jYXRpb24sIGxpbmtIcmVmKVxuICB0cnkge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2UobG9jKVxuICAgIH0gZWxzZSB7XG4gICAgICBoaXN0b3J5LnB1c2gobG9jKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNoYW5nZSBicm93c2VyIGhpc3RvcnknLCBlcnIpXG4gIH1cbn1cblxuY29uc3QgYXBwbHlMaW5rUmVzdWx0UGFnZVRvcCA9IChldnQsIG9uQ2xpY2spID0+IHtcbiAgaWYgKHdpbmRvdz8uamltdUNvbmZpZz8uaXNJbkJ1aWxkZXIpIHtcbiAgICBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcignLnBhZ2UtcmVuZGVyZXInKT8uc2Nyb2xsKHsgbGVmdDogMCwgdG9wOiAwIH0pXG4gIH0gZWxzZSB7XG4gICAgd2luZG93Py5zY3JvbGwoeyBsZWZ0OiAwLCB0b3A6IDAgfSlcbiAgfVxuICBvbkNsaWNrPy4oZXZ0KVxufVxuXG5jb25zdCBhcHBseUxpbmtSZXN1bHRXZWJBZGRyZXNzID0gKGV2dCwgb25DbGljaykgPT4ge1xuICBvbkNsaWNrPy4oZXZ0KVxufVxuXG5jb25zdCBhcHBseUxpbmtSZXN1bHRCbG9ja0FuZFNjcmVlbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGV2dCwgdGFyZ2V0LCBsaW5rSHJlZiwgbGlua1RvLCByZXBsYWNlLCBoaXN0b3J5LCBvbkNsaWNrIH0gPSBwcm9wc1xuICBvbkNsaWNrPy4oZXZ0KVxuICBpZiAoIXNob3VsZENvbnRpbnVlTGlua0NsaWNrKGV2dCwgdGFyZ2V0LCBsaW5rSHJlZikpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWxpbmtIcmVmKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgYXBwbHlMaW5rSHJlZlRvSGlzdG9yeShsaW5rSHJlZiwgcmVwbGFjZSwgaGlzdG9yeSlcbiAgLy8gc2Nyb2xsIHRvIGJsb2NrXG4gIGlmIChsaW5rVG8ubGlua1R5cGUgPT09IExpbmtUeXBlLkJsb2NrKSB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYjJHtsaW5rVG8udmFsdWV9YCk/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gIH1cbn1cblxuY29uc3QgYXBwbHlMaW5rUmVzdWx0UGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGV2dCwgdGFyZ2V0LCBoaXN0b3J5LCByZXBsYWNlLCBsaW5rSHJlZiwgb25DbGljaywgLi4ub3RoZXJzIH0gPSBwcm9wc1xuICBvbkNsaWNrPy4oZXZ0KVxuICBpZiAoIXNob3VsZENvbnRpbnVlTGlua0NsaWNrKGV2dCwgdGFyZ2V0LCBsaW5rSHJlZikpIHtcbiAgICByZXR1cm5cbiAgfVxuICBldnQucHJldmVudERlZmF1bHQoKVxuICBpZiAoIWxpbmtIcmVmKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGlzSHJlZkNhbkJlQ2hhbmdlZChvdGhlcnMpKSB7XG4gICAgY2xlYXJTZWxlY3Rpb25CeUxpbmtDbGljayhwcm9wcy5kaXNwYXRjaClcbiAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLmFjdGl2ZVBhZ2VQYXJ0Q2hhbmdlZChQYWdlUGFydC5Cb2R5KSlcbiAgICBhcHBseUxpbmtIcmVmVG9IaXN0b3J5KGxpbmtIcmVmLCByZXBsYWNlLCBoaXN0b3J5KVxuICB9XG59XG5cbmNvbnN0IGFwcGx5TGlua1Jlc3VsdERpYWxvZyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGV2dCwgdGFyZ2V0LCBoaXN0b3J5LCByZXBsYWNlLCBsaW5rSHJlZiwgb25DbGljaywgLi4ub3RoZXJzIH0gPSBwcm9wc1xuICBpZiAocHJvcHMuZGlhbG9nSnNvbikgeyAvLyBmb3IgYW5jaG9yZWQgZGxnXG4gICAgLyoqXG4gICAgICogY2FuIG9wZW4gYW5jaG9yZWQgZGxnIGZyb20gbm8gZGxnLCBvciBhIG5vcm1hbCBmaXhlZCBkbGcgKHdpdGggY29tZmlybWF0aW9uIGNoZWNrZWQpXG4gICAgICogY2FuJ3Q6XG4gICAgICogIGZyb20gYW5jaG9yZWQgZGxnLlxuICAgICAqICBvciBmcm9tIHNwbGFzaCBhbmQgcGFnZSBkbGdzLCBzaW5jZSB0aGVpciBzdGF0ZXMgd2lsbCBiZSBkaXNhcHBlYXJlZC5cbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICAhcHJvcHMuY3VycmVudERpYWxvZ0pzb24gfHxcbiAgICAgIChwcm9wcy5jdXJyZW50RGlhbG9nSnNvbj8ubW9kZSAhPT0gRGlhbG9nTW9kZS5BbmNob3JlZCAmJlxuICAgICAgIXByb3BzLmN1cnJlbnREaWFsb2dKc29uPy5pc1NwbGFzaCAmJlxuICAgICAgIXByb3BzLmlzUGFnZURsZyAmJlxuICAgICAgaXNDdXJyZW50RGxnQ2FuQmVDbG9zZWQocHJvcHMpKSkge1xuICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy5jdXJyZW50RGlhbG9nQ2hhbmdlZChwcm9wcy5kaWFsb2dKc29uLmlkKSlcbiAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMuYWN0aXZlUGFnZVBhcnRDaGFuZ2VkKG51bGwpKVxuICAgIH1cbiAgICBjbGVhclNlbGVjdGlvbkJ5TGlua0NsaWNrKHByb3BzLmRpc3BhdGNoKVxuICB9XG5cbiAgb25DbGljaz8uKGV2dClcbiAgaWYgKCFzaG91bGRDb250aW51ZUxpbmtDbGljayhldnQsIHRhcmdldCwgbGlua0hyZWYpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgaWYgKCFsaW5rSHJlZikge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChpc0hyZWZDYW5CZUNoYW5nZWQob3RoZXJzKSkge1xuICAgIGNsZWFyU2VsZWN0aW9uQnlMaW5rQ2xpY2socHJvcHMuZGlzcGF0Y2gpXG4gICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy5hY3RpdmVQYWdlUGFydENoYW5nZWQobnVsbCkpXG4gICAgYXBwbHlMaW5rSHJlZlRvSGlzdG9yeShsaW5rSHJlZiwgcmVwbGFjZSwgaGlzdG9yeSlcbiAgfVxufVxuXG5jb25zdCBhcHBseUxpbmtSZXN1bHRWaWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZXZ0LCB0YXJnZXQsIGhpc3RvcnksIHJlcGxhY2UsIGxpbmtIcmVmLCBvbkNsaWNrLCBsaW5rVG8gfSA9IHByb3BzXG4gIGNvbnN0IHBhZ2VPckRsZ0lkID0gbGlua1RvLnZhbHVlPy5zcGxpdCgnLCcpWzBdXG4gIGlmIChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLmRpYWxvZ3M/LltwYWdlT3JEbGdJZF0pIHtcbiAgICBjb25zdCBkaWFsb2dKc29uID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5kaWFsb2dzPy5bcGFnZU9yRGxnSWRdXG4gICAgaWYgKGRpYWxvZ0pzb24/Lm1vZGUgPT09IERpYWxvZ01vZGUuQW5jaG9yZWQpIHtcbiAgICAgIGFwcGx5TGlua1Jlc3VsdERpYWxvZyh7IC4uLnByb3BzLCBkaWFsb2dKc29uIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgb25DbGljaz8uKGV2dClcbiAgaWYgKCFzaG91bGRDb250aW51ZUxpbmtDbGljayhldnQsIHRhcmdldCwgbGlua0hyZWYpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgaWYgKCFsaW5rSHJlZikge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChpc0hyZWZDYW5CZUNoYW5nZWQocHJvcHMpKSB7XG4gICAgYXBwbHlMaW5rSHJlZlRvSGlzdG9yeShsaW5rSHJlZiwgcmVwbGFjZSwgaGlzdG9yeSlcbiAgfVxufVxuXG5jb25zdCBhcHBseUxpbmtSZXN1bHRQcmludFByZXZpZXcgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBldnQsIHRhcmdldCwgaGlzdG9yeSwgcmVwbGFjZSwgbGlua0hyZWYsIG9uQ2xpY2ssIGRpc3BhdGNoIH0gPSBwcm9wc1xuICBvbkNsaWNrPy4oZXZ0KVxuICBpZiAoIXNob3VsZENvbnRpbnVlTGlua0NsaWNrKGV2dCwgdGFyZ2V0LCBsaW5rSHJlZikpIHtcbiAgICByZXR1cm5cbiAgfVxuICBldnQucHJldmVudERlZmF1bHQoKVxuICBpZiAoIWxpbmtIcmVmKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGlzcGF0Y2goYXBwQWN0aW9ucy5hY3RpdmVQcmludFByZXZpZXcoKSlcbiAgYXBwbHlMaW5rSHJlZlRvSGlzdG9yeShsaW5rSHJlZiwgcmVwbGFjZSwgaGlzdG9yeSlcbn1cblxuY29uc3QgY2xlYXJTZWxlY3Rpb25CeUxpbmtDbGljayA9IChkaXNwYXRjaCwgdGltZXMgPSA1MCkgPT4ge1xuICAvLyBjbGVhciB3aWRnZXQgc2V0dGluZ1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXNwYXRjaChhcHBBY3Rpb25zLnNlbGVjdGlvbkNoYW5nZWQobnVsbCkpXG4gIH0sIHRpbWVzKVxufVxuXG5pbnRlcmZhY2UgaXNIcmVmQ2FuQmVDaGFuZ2VkUHJvcHMge1xuICBsaW5rVG86IExpbmtUb1xuICBjdXJyZW50RGlhbG9nSnNvbjogSU1EaWFsb2dKc29uXG4gIGlzUGFnZURsZzogYm9vbGVhblxuICBjdXJyZW50UGFnZUlkOiBzdHJpbmdcbiAgY3VycmVudERpYWxvZ0lkOiBzdHJpbmdcbiAgcXVlcnlPYmplY3RcbiAgZGlzcGF0Y2hcbiAgZGlhbG9nSW5mb3NcbiAgY3VycmVudFBhZ2VEbGdJZFxufVxuXG5leHBvcnQgY29uc3QgaXNIcmVmQ2FuQmVDaGFuZ2VkID0gKHByb3BzOiBpc0hyZWZDYW5CZUNoYW5nZWRQcm9wcyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnlPYmplY3QsIGRpc3BhdGNoLCBkaWFsb2dJbmZvcywgbGlua1RvLFxuICAgIGlzUGFnZURsZywgY3VycmVudFBhZ2VJZCwgY3VycmVudERpYWxvZ0lkLCBjdXJyZW50RGlhbG9nSnNvbiwgY3VycmVudFBhZ2VEbGdJZFxuICB9ID0gcHJvcHNcblxuICAvLyBEbyBub3QgbmVlZCB0byBoYW5kbGUgZGlhbG9nIGRldGFpbHMgZm9yIGZvbGxvd2luZyBjYXNlcy5cbiAgaWYgKCFjdXJyZW50RGlhbG9nSnNvbikgeyAvLyBubyBjdXJyZW50IGRsZ1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAvLyBjaGVjayBpZiBjdXJyZW50IGRsZyBjYW4gYmUgY2xvc2VkIGFuZCBubyBvdGhlciBkbGdzIGJlaGluZC5cbiAgY29uc3QgZGxnSWQgPSBpc1BhZ2VEbGcgPyBjdXJyZW50UGFnZUlkICsgJy0nICsgY3VycmVudERpYWxvZ0lkIDogY3VycmVudERpYWxvZ0lkXG4gIGNvbnN0IHVybERsZ0lkID0gdXJsVXRpbHMuZ2V0RGlhbG9nSWRGcm9tSWRPckxhYmVsKHF1ZXJ5T2JqZWN0Py5kbGcsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcpXG5cbiAgbGV0IGNhbkJlQ2hhbmdlID0gZmFsc2VcbiAgLy8gVHdvIGNhc2VzOlxuICAvLyAgMS4gY3VycmVudCBkbGcgaXMgYW5jaG9yZWRcbiAgLy8gIDIuIGN1cnJlbnQgZGxnIGlzIGZpeGVkKCBjYW4gYmUgY2xvc2VkIClcbiAgaWYgKGN1cnJlbnREaWFsb2dKc29uLm1vZGUgPT09IERpYWxvZ01vZGUuQW5jaG9yZWQpIHsgLy8gLi4uIC0+IGFuY2hvcmVkKGN1cnJlbnQpIC0+IGZpeGVkLCBwYWdlXG4gICAgY29uc3QgdG8gPSBsaW5rVG8gYXMgTGlua1Jlc3VsdFxuXG4gICAgaWYgKCF1cmxEbGdJZCkgeyAvLyBhbmNob3JlZCAtPiBmaXhlZCwgcGFnZVxuICAgICAgY2FuQmVDaGFuZ2UgPSB0cnVlXG4gICAgICBpZiAodG8ubGlua1R5cGUgPT09IExpbmtUeXBlLlBhZ2UpIHsgLy8gYmFjayB0byBjdXJyZW50IHBhZ2VcbiAgICAgICAgZGlzcGF0Y2goYXBwQWN0aW9ucy5jdXJyZW50RGlhbG9nQ2hhbmdlZChudWxsKSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2hlbiBxdWVyeU9iamVjdC5kbGcgZXhpc3RzIHdoaWNoIG1lYW5zOlxuICAgICAgLy8gY2FzZTE6IGFuY2hvcmQgZGxnKGN1cnJlbnQsIGRpc3BsYXkgYXMgZml4ZWQgYnkgVE9DKSAtPiBvcGVuIGFub3RoZXIgZml4ZWQgZGxnIG9yIHBhZ2UuXG4gICAgICAvLyBjYXNlMjogZml4ZWQocXVlcnlPYmplY3QuZGxnKSAtPiBhbmNob3JlZCBkbGcgKGN1cnJlbnQpIC0+IG9wZW4gYW5vdGhlciBmaXhlZCBkbGcobm90IHN1cHBvcnRlZCkgb3IgY3VycmVudCBwYWdlKHN1cHBvcnRlZCkuXG4gICAgICBpZiAodXJsRGxnSWQgPT09IGN1cnJlbnREaWFsb2dJZCkge1xuICAgICAgICBpZiAodG8ubGlua1R5cGUgPT09IExpbmtUeXBlLkRpYWxvZyB8fCB0by5saW5rVHlwZSA9PT0gTGlua1R5cGUuUGFnZSkge1xuICAgICAgICAgIGNhbkJlQ2hhbmdlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodG8ubGlua1R5cGUgPT09IExpbmtUeXBlLlBhZ2UpIHtcbiAgICAgICAgICBkaXNwYXRjaChhcHBBY3Rpb25zLmN1cnJlbnREaWFsb2dDaGFuZ2VkKHVybERsZ0lkKSkgLy8gYmFjayB0byBwcmV2aW91cyBmaXhlZCBkbGdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc0N1cnJlbnREbGdDYW5CZUNsb3NlZChwcm9wcykpIHsgLy8gY2FuIGJlIGNsb3NlZCBmaXhlZCBkbGdcbiAgICBsZXQgbmV4dERpYWxvZ1xuICAgIGxldCBkZXN0cm95U3BsYXNoT3JQYWdlRGxnID0gY3VycmVudERpYWxvZ0pzb24uaXNTcGxhc2ggfHwgaXNQYWdlRGxnXG4gICAgbGV0IG5ld0RsZ0luZm9zID0gZGlhbG9nSW5mb3MgfHwgSW1tdXRhYmxlKHt9KSBhcyBhbnlcbiAgICBpZiAod2luZG93LmppbXVDb25maWcuaXNJbkJ1aWxkZXIpIHtcbiAgICAgIG5leHREaWFsb2cgPSBudWxsIC8vIGZvciBlbmFibGUgYGNhbkJlQ2hhbmdlYFxuICAgICAgLy8gRE8gTm90IGNsb3NlIHNwbGFzaCBieSBvcGVuIGFub3RoZXIgZml4ZWQgZGxnIHdoZW4gcGFnZSBkbGcgZXhpc3RzLlxuICAgICAgY29uc3QgcGFnZURpYWxvZ0lkID0gY3VycmVudFBhZ2VJZCArICctJyArIGN1cnJlbnRQYWdlRGxnSWRcbiAgICAgIGlmIChjdXJyZW50RGlhbG9nSnNvbi5pc1NwbGFzaCAmJiBjdXJyZW50UGFnZURsZ0lkICYmICFkaWFsb2dJbmZvcz8uW3BhZ2VEaWFsb2dJZF0/LmlzQ2xvc2VkICYmIChsaW5rVG8gYXMgTGlua1Jlc3VsdCkubGlua1R5cGUgPT09IExpbmtUeXBlLkRpYWxvZykge1xuICAgICAgICBuZXh0RGlhbG9nID0gcGFnZURpYWxvZ0lkXG4gICAgICAgIGRlc3Ryb3lTcGxhc2hPclBhZ2VEbGcgPSBmYWxzZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0RGlhbG9nID0gKGN1cnJlbnREaWFsb2dKc29uLmlzU3BsYXNoICYmIChjdXJyZW50UGFnZURsZ0lkIHx8IHVybERsZ0lkKSkgfHwgKGlzUGFnZURsZyAmJiBjdXJyZW50RGlhbG9nSWQgIT09IHVybERsZ0lkICYmIHVybERsZ0lkKSB8fCBudWxsXG4gICAgICBpZiAoY3VycmVudERpYWxvZ0lkID09PSBuZXh0RGlhbG9nKSB7XG4gICAgICAgIG5leHREaWFsb2cgPSBudWxsXG4gICAgICB9XG4gICAgICBkZXN0cm95U3BsYXNoT3JQYWdlRGxnID0gZGVzdHJveVNwbGFzaE9yUGFnZURsZyAmJlxuICAgICAgICAhKG5leHREaWFsb2cgJiYgKGxpbmtUbyBhcyBMaW5rUmVzdWx0KS5saW5rVHlwZSA9PT0gTGlua1R5cGUuRGlhbG9nKSAvLyBub3QgY2xvc2Ugc3BsYXNoL3BhZ2UgZGxnIHdoZW4gbmV4dERsZ0lkIGV4aXN0cyBhbmQgdHJ5aW5nIHRvIG9wZW4gYSBmaXhlZCBkbGcuXG4gICAgfVxuXG4gICAgaWYgKGRlc3Ryb3lTcGxhc2hPclBhZ2VEbGcpIHtcbiAgICAgIC8vIHRyaWdnZXIgcGFnZS1yZW5kZXIgdG8gZGVzdG9yeSBjdXJyZW50IGRsZy5cbiAgICAgIG5ld0RsZ0luZm9zID0gbmV3RGxnSW5mb3Muc2V0SW4oW2RsZ0lkLCAnY2FuQ2xvc2UnXSwgdHJ1ZSkuc2V0SW4oW2RsZ0lkLCAnaXNDbG9zZWQnXSwgdHJ1ZSlcbiAgICAgIGRpc3BhdGNoKGFwcEFjdGlvbnMuZGlhbG9nSW5mb3NDaGFuZ2VkKG5ld0RsZ0luZm9zKSlcbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyIGhyZWYgY2hhbmdlIHdoZW4gaXQgd2lsbCB1bm1vdW50IGFuZCBubyBkaWFsb2cgZXhpc3RzOlxuICAgIGlmICghbmV4dERpYWxvZykge1xuICAgICAgY2FuQmVDaGFuZ2UgPSB0cnVlXG4gICAgfVxuICB9IGVsc2UgeyAvLyB3aGVuIGl0IGNhbid0IGJlIGNsb3NlZCAoY2J4IHNob3VsZCBiZSBjaGVja2VkIGZpcnN0KVxuICAgIGNvbnN0IG5ld0RsZ0luZm9zID0gKGRpYWxvZ0luZm9zIHx8IEltbXV0YWJsZSh7fSkgYXMgYW55KS5zZXRJbihbZGxnSWQsICdhbGVydFZlcnNpb24nXSwgKGRpYWxvZ0luZm9zPy5bZGxnSWRdPy5hbGVydFZlcnNpb24gPz8gMCkgKyAxKVxuICAgIGRpc3BhdGNoKGFwcEFjdGlvbnMuZGlhbG9nSW5mb3NDaGFuZ2VkKG5ld0RsZ0luZm9zKSlcbiAgfVxuICByZXR1cm4gY2FuQmVDaGFuZ2Vcbn1cblxuZXhwb3J0IGNvbnN0IGlzQ3VycmVudERsZ0NhbkJlQ2xvc2VkID0gKHByb3BzKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHsgZGlhbG9nSW5mb3MsIGlzUGFnZURsZywgY3VycmVudFBhZ2VJZCwgY3VycmVudERpYWxvZ0lkLCBjdXJyZW50RGlhbG9nSnNvbiB9ID0gcHJvcHNcbiAgY29uc3QgZGxnSWQgPSBpc1BhZ2VEbGcgPyBjdXJyZW50UGFnZUlkICsgJy0nICsgY3VycmVudERpYWxvZ0lkIDogY3VycmVudERpYWxvZ0lkXG4gIHJldHVybiAoIWN1cnJlbnREaWFsb2dKc29uPy5pbnRlcmFjdGlvblR5cGUgfHwgIWN1cnJlbnREaWFsb2dKc29uPy5jb25maXJtQmVmb3JlQ2xvc2UpIHx8IGRpYWxvZ0luZm9zPy5bZGxnSWRdPy5jYW5DbG9zZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TGlua0hyZWZCeUxpbmtSZXN1bHQgPSAobGlua1RvLCBxdWVyeU9iamVjdCwgaGlzdG9yeSkgPT4ge1xuICBsZXQgbGlua0hyZWYgPSBudWxsXG4gIGlmIChsaW5rVG8pIHtcbiAgICBjb25zdCB1cmxEbGdJZCA9IHVybFV0aWxzLmdldERpYWxvZ0lkRnJvbUlkT3JMYWJlbChxdWVyeU9iamVjdD8uZGxnLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnKVxuICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpXG4gICAgY29uc3QgY3VycmVudERpYWxvZ0lkID0gc3RhdGUuYXBwUnVudGltZUluZm8uY3VycmVudERpYWxvZ0lkXG4gICAgY29uc3QgY3VycmVudERpYWxvZ0pzb24gPSBzdGF0ZS5hcHBDb25maWcuZGlhbG9ncz8uW2N1cnJlbnREaWFsb2dJZF1cbiAgICBjb25zdCBpc1BhZ2VEbGcgPSBzdGF0ZS5hcHBDb25maWcucGFnZXM/LltzdGF0ZS5hcHBSdW50aW1lSW5mby5jdXJyZW50UGFnZUlkXT8uYXV0b09wZW5EaWFsb2dJZCA9PT0gY3VycmVudERpYWxvZ0lkXG4gICAgY29uc3Qga2VlcFF1ZXJ5T2JqZWN0RGxnID0gKGN1cnJlbnREaWFsb2dKc29uPy5pc1NwbGFzaCB8fCBpc1BhZ2VEbGcpICYmIGN1cnJlbnREaWFsb2dJZCAhPT0gdXJsRGxnSWRcbiAgICBsaW5rSHJlZiA9IHVybFV0aWxzLmdldEhyZWZGcm9tTGlua1RvKGxpbmtUbywgcXVlcnlPYmplY3QsIGhpc3RvcnkgJiYgaGlzdG9yeS5sb2NhdGlvbiwga2VlcFF1ZXJ5T2JqZWN0RGxnKVxuICB9XG4gIHJldHVybiBsaW5rSHJlZlxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hcmNnaXNfY2hhcnRzX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FyY2dpc19jaGFydHNfc2hhcmVkX3V0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCAqIGZyb20gJy4vbGliL2NoYXJ0J1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9