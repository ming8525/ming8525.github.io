define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "å_Mean_________ø",
		median: "å_Median_____________ø",
		sum: "å_Sum_______ø",
		discretePercentitle: "å_Discrete percentile____________________ø",
		minimum: "å_Minimum_______________ø",
		maximum: "å_Maximum_______________ø",
		firstQuartile: "å_First quartile_______________ø",
		thirdQuartile: "å_Third quartile_______________ø",
		iqr: "å_IQR_______ø",
		standardDeviation: "å_Standard deviation___________________ø",
		variance: "å_Variance_________________ø",
		count: "å_Count___________ø",
		aggregation: "å_${ statistics } of ${ fieldName }__________________ø",
		percent: "å_Percent_______________ø",
		noAggregation: "å_No aggregation_______________ø"
	};
	const overlays = {
		mean: "å_Mean_________ø",
		median: "å_Median_____________ø",
		stdDev: "å_Standard Deviation___________________ø",
		normal: "å_Normal Distribution____________________ø",
		trendline: "å_Trendline___________________ø"
	};
	const guideTooltipLabel = "å_From ${ guideStart } to ${ guideEnd }____________________ø";
	const pieChart = {
		defaultSliceGroupingLabel: "å_Other___________ø"
	};
	const notAvailable = "å_Not Available______________ø";
	const field = "å_Field___________ø";
	var common_t9n_nb = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_nb;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.nb-8bcb37d4-33c9a5f5.js.map
