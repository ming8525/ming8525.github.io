define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ķ_Mean_________ū",
		median: "ķ_Median_____________ū",
		sum: "ķ_Sum_______ū",
		discretePercentitle: "ķ_Discrete percentile____________________ū",
		minimum: "ķ_Minimum_______________ū",
		maximum: "ķ_Maximum_______________ū",
		firstQuartile: "ķ_First quartile_______________ū",
		thirdQuartile: "ķ_Third quartile_______________ū",
		iqr: "ķ_IQR_______ū",
		standardDeviation: "ķ_Standard deviation___________________ū",
		variance: "ķ_Variance_________________ū",
		count: "ķ_Count___________ū",
		aggregation: "ķ_${ statistics } of ${ fieldName }__________________ū",
		percent: "ķ_Percent_______________ū",
		noAggregation: "ķ_No aggregation_______________ū"
	};
	const overlays = {
		mean: "ķ_Mean_________ū",
		median: "ķ_Median_____________ū",
		stdDev: "ķ_Standard Deviation___________________ū",
		normal: "ķ_Normal Distribution____________________ū",
		trendline: "ķ_Trendline___________________ū"
	};
	const guideTooltipLabel = "ķ_From ${ guideStart } to ${ guideEnd }____________________ū";
	const pieChart = {
		defaultSliceGroupingLabel: "ķ_Other___________ū"
	};
	const notAvailable = "ķ_Not Available______________ū";
	const field = "ķ_Field___________ū";
	var common_t9n_lv = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_lv;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.lv-8f0561b1-4d193b01.js.map
