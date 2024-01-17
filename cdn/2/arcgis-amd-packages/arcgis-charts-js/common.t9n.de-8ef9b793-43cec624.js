define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ä_Mean_________Ü",
		median: "ä_Median_____________Ü",
		sum: "ä_Sum_______Ü",
		discretePercentitle: "ä_Discrete percentile____________________Ü",
		minimum: "ä_Minimum_______________Ü",
		maximum: "ä_Maximum_______________Ü",
		firstQuartile: "ä_First quartile_______________Ü",
		thirdQuartile: "ä_Third quartile_______________Ü",
		iqr: "ä_IQR_______Ü",
		standardDeviation: "ä_Standard deviation___________________Ü",
		variance: "ä_Variance_________________Ü",
		count: "ä_Count___________Ü",
		aggregation: "ä_${ statistics } of ${ fieldName }__________________Ü",
		percent: "ä_Percent_______________Ü",
		noAggregation: "ä_No aggregation_______________Ü"
	};
	const overlays = {
		mean: "ä_Mean_________Ü",
		median: "ä_Median_____________Ü",
		stdDev: "ä_Standard Deviation___________________Ü",
		normal: "ä_Normal Distribution____________________Ü",
		trendline: "ä_Trendline___________________Ü"
	};
	const guideTooltipLabel = "ä_From ${ guideStart } to ${ guideEnd }____________________Ü";
	const pieChart = {
		defaultSliceGroupingLabel: "ä_Other___________Ü"
	};
	const notAvailable = "ä_Not Available______________Ü";
	const field = "ä_Field___________Ü";
	var common_t9n_de = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_de;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.de-8ef9b793-43cec624.js.map
