define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Č_Mean_________ž",
		median: "Č_Median_____________ž",
		sum: "Č_Sum_______ž",
		discretePercentitle: "Č_Discrete percentile____________________ž",
		minimum: "Č_Minimum_______________ž",
		maximum: "Č_Maximum_______________ž",
		firstQuartile: "Č_First quartile_______________ž",
		thirdQuartile: "Č_Third quartile_______________ž",
		iqr: "Č_IQR_______ž",
		standardDeviation: "Č_Standard deviation___________________ž",
		variance: "Č_Variance_________________ž",
		count: "Č_Count___________ž",
		aggregation: "Č_${ statistics } of ${ fieldName }__________________ž",
		percent: "Č_Percent_______________ž",
		noAggregation: "Č_No aggregation_______________ž"
	};
	const overlays = {
		mean: "Č_Mean_________ž",
		median: "Č_Median_____________ž",
		stdDev: "Č_Standard Deviation___________________ž",
		normal: "Č_Normal Distribution____________________ž",
		trendline: "Č_Trendline___________________ž"
	};
	const guideTooltipLabel = "Č_From ${ guideStart } to ${ guideEnd }____________________ž";
	const pieChart = {
		defaultSliceGroupingLabel: "Č_Other___________ž"
	};
	const notAvailable = "Č_Not Available______________ž";
	const field = "Č_Field___________ž";
	var common_t9n_bs = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_bs;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.bs-76ec2c65-2d791b48.js.map
