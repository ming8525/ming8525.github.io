define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "é_Mean_________È",
		median: "é_Median_____________È",
		sum: "é_Sum_______È",
		discretePercentitle: "é_Discrete percentile____________________È",
		minimum: "é_Minimum_______________È",
		maximum: "é_Maximum_______________È",
		firstQuartile: "é_First quartile_______________È",
		thirdQuartile: "é_Third quartile_______________È",
		iqr: "é_IQR_______È",
		standardDeviation: "é_Standard deviation___________________È",
		variance: "é_Variance_________________È",
		count: "é_Count___________È",
		aggregation: "é_${ statistics } of ${ fieldName }__________________È",
		percent: "é_Percent_______________È",
		noAggregation: "é_No aggregation_______________È"
	};
	const overlays = {
		mean: "é_Mean_________È",
		median: "é_Median_____________È",
		stdDev: "é_Standard Deviation___________________È",
		normal: "é_Normal Distribution____________________È",
		trendline: "é_Trendline___________________È"
	};
	const guideTooltipLabel = "é_From ${ guideStart } to ${ guideEnd }____________________È";
	const pieChart = {
		defaultSliceGroupingLabel: "é_Other___________È"
	};
	const notAvailable = "é_Not Available______________È";
	const field = "é_Field___________È";
	var common_t9n_it = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_it;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.it-937066b7-d264e78f.js.map
