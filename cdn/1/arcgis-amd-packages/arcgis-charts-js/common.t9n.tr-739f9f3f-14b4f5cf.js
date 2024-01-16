define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ı_Mean_________İ",
		median: "ı_Median_____________İ",
		sum: "ı_Sum_______İ",
		discretePercentitle: "ı_Discrete percentile____________________İ",
		minimum: "ı_Minimum_______________İ",
		maximum: "ı_Maximum_______________İ",
		firstQuartile: "ı_First quartile_______________İ",
		thirdQuartile: "ı_Third quartile_______________İ",
		iqr: "ı_IQR_______İ",
		standardDeviation: "ı_Standard deviation___________________İ",
		variance: "ı_Variance_________________İ",
		count: "ı_Count___________İ",
		aggregation: "ı_${ statistics } of ${ fieldName }__________________İ",
		percent: "ı_Percent_______________İ",
		noAggregation: "ı_No aggregation_______________İ"
	};
	const overlays = {
		mean: "ı_Mean_________İ",
		median: "ı_Median_____________İ",
		stdDev: "ı_Standard Deviation___________________İ",
		normal: "ı_Normal Distribution____________________İ",
		trendline: "ı_Trendline___________________İ"
	};
	const guideTooltipLabel = "ı_From ${ guideStart } to ${ guideEnd }____________________İ";
	const pieChart = {
		defaultSliceGroupingLabel: "ı_Other___________İ"
	};
	const notAvailable = "ı_Not Available______________İ";
	const field = "ı_Field___________İ";
	var common_t9n_tr = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_tr;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.tr-739f9f3f-14b4f5cf.js.map
