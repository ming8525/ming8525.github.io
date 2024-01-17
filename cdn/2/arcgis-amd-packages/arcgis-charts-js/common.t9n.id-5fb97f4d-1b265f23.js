define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ng_Mean_________ny",
		median: "ng_Median_____________ny",
		sum: "ng_Sum_______ny",
		discretePercentitle: "ng_Discrete percentile____________________ny",
		minimum: "ng_Minimum_______________ny",
		maximum: "ng_Maximum_______________ny",
		firstQuartile: "ng_First quartile_______________ny",
		thirdQuartile: "ng_Third quartile_______________ny",
		iqr: "ng_IQR_______ny",
		standardDeviation: "ng_Standard deviation___________________ny",
		variance: "ng_Variance_________________ny",
		count: "ng_Count___________ny",
		aggregation: "ng_${ statistics } of ${ fieldName }__________________ny",
		percent: "ng_Percent_______________ny",
		noAggregation: "ng_No aggregation_______________ny"
	};
	const overlays = {
		mean: "ng_Mean_________ny",
		median: "ng_Median_____________ny",
		stdDev: "ng_Standard Deviation___________________ny",
		normal: "ng_Normal Distribution____________________ny",
		trendline: "ng_Trendline___________________ny"
	};
	const guideTooltipLabel = "ng_From ${ guideStart } to ${ guideEnd }____________________ny";
	const pieChart = {
		defaultSliceGroupingLabel: "ng_Other___________ny"
	};
	const notAvailable = "ng_Not Available______________ny";
	const field = "ng_Field___________ny";
	var common_t9n_id = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_id;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.id-5fb97f4d-1b265f23.js.map
