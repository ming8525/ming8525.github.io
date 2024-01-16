define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ø_Mean_________å",
		median: "ø_Median_____________å",
		sum: "ø_Sum_______å",
		discretePercentitle: "ø_Discrete percentile____________________å",
		minimum: "ø_Minimum_______________å",
		maximum: "ø_Maximum_______________å",
		firstQuartile: "ø_First quartile_______________å",
		thirdQuartile: "ø_Third quartile_______________å",
		iqr: "ø_IQR_______å",
		standardDeviation: "ø_Standard deviation___________________å",
		variance: "ø_Variance_________________å",
		count: "ø_Count___________å",
		aggregation: "ø_${ statistics } of ${ fieldName }__________________å",
		percent: "ø_Percent_______________å",
		noAggregation: "ø_No aggregation_______________å"
	};
	const overlays = {
		mean: "ø_Mean_________å",
		median: "ø_Median_____________å",
		stdDev: "ø_Standard Deviation___________________å",
		normal: "ø_Normal Distribution____________________å",
		trendline: "ø_Trendline___________________å"
	};
	const guideTooltipLabel = "ø_From ${ guideStart } to ${ guideEnd }____________________å";
	const pieChart = {
		defaultSliceGroupingLabel: "ø_Other___________å"
	};
	const notAvailable = "ø_Not Available______________å";
	const field = "ø_Field___________å";
	var common_t9n_da = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_da;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.da-3ef6e25e-6ee442c3.js.map
