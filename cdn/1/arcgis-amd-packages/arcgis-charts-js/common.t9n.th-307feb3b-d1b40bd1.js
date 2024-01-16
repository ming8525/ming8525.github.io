define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ก้_Mean_________ษฺ",
		median: "ก้_Median_____________ษฺ",
		sum: "ก้_Sum_______ษฺ",
		discretePercentitle: "ก้_Discrete percentile____________________ษฺ",
		minimum: "ก้_Minimum_______________ษฺ",
		maximum: "ก้_Maximum_______________ษฺ",
		firstQuartile: "ก้_First quartile_______________ษฺ",
		thirdQuartile: "ก้_Third quartile_______________ษฺ",
		iqr: "ก้_IQR_______ษฺ",
		standardDeviation: "ก้_Standard deviation___________________ษฺ",
		variance: "ก้_Variance_________________ษฺ",
		count: "ก้_Count___________ษฺ",
		aggregation: "ก้_${ statistics } of ${ fieldName }__________________ษฺ",
		percent: "ก้_Percent_______________ษฺ",
		noAggregation: "ก้_No aggregation_______________ษฺ"
	};
	const overlays = {
		mean: "ก้_Mean_________ษฺ",
		median: "ก้_Median_____________ษฺ",
		stdDev: "ก้_Standard Deviation___________________ษฺ",
		normal: "ก้_Normal Distribution____________________ษฺ",
		trendline: "ก้_Trendline___________________ษฺ"
	};
	const guideTooltipLabel = "ก้_From ${ guideStart } to ${ guideEnd }____________________ษฺ";
	const pieChart = {
		defaultSliceGroupingLabel: "ก้_Other___________ษฺ"
	};
	const notAvailable = "ก้_Not Available______________ษฺ";
	const field = "ก้_Field___________ษฺ";
	var common_t9n_th = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_th;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.th-307feb3b-d1b40bd1.js.map
