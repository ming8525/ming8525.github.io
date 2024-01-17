define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "á_Mean_________Ó",
		median: "á_Median_____________Ó",
		sum: "á_Sum_______Ó",
		discretePercentitle: "á_Discrete percentile____________________Ó",
		minimum: "á_Minimum_______________Ó",
		maximum: "á_Maximum_______________Ó",
		firstQuartile: "á_First quartile_______________Ó",
		thirdQuartile: "á_Third quartile_______________Ó",
		iqr: "á_IQR_______Ó",
		standardDeviation: "á_Standard deviation___________________Ó",
		variance: "á_Variance_________________Ó",
		count: "á_Count___________Ó",
		aggregation: "á_${ statistics } of ${ fieldName }__________________Ó",
		percent: "á_Percent_______________Ó",
		noAggregation: "á_No aggregation_______________Ó"
	};
	const overlays = {
		mean: "á_Mean_________Ó",
		median: "á_Median_____________Ó",
		stdDev: "á_Standard Deviation___________________Ó",
		normal: "á_Normal Distribution____________________Ó",
		trendline: "á_Trendline___________________Ó"
	};
	const guideTooltipLabel = "á_From ${ guideStart } to ${ guideEnd }____________________Ó";
	const pieChart = {
		defaultSliceGroupingLabel: "á_Other___________Ó"
	};
	const notAvailable = "á_Not Available______________Ó";
	const field = "á_Field___________Ó";
	var common_t9n_es = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_es;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.es-6321f291-ed9b8cd7.js.map
