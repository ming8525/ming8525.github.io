define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Į_Mean_________š",
		median: "Į_Median_____________š",
		sum: "Į_Sum_______š",
		discretePercentitle: "Į_Discrete percentile____________________š",
		minimum: "Į_Minimum_______________š",
		maximum: "Į_Maximum_______________š",
		firstQuartile: "Į_First quartile_______________š",
		thirdQuartile: "Į_Third quartile_______________š",
		iqr: "Į_IQR_______š",
		standardDeviation: "Į_Standard deviation___________________š",
		variance: "Į_Variance_________________š",
		count: "Į_Count___________š",
		aggregation: "Į_${ statistics } of ${ fieldName }__________________š",
		percent: "Į_Percent_______________š",
		noAggregation: "Į_No aggregation_______________š"
	};
	const overlays = {
		mean: "Į_Mean_________š",
		median: "Į_Median_____________š",
		stdDev: "Į_Standard Deviation___________________š",
		normal: "Į_Normal Distribution____________________š",
		trendline: "Į_Trendline___________________š"
	};
	const guideTooltipLabel = "Į_From ${ guideStart } to ${ guideEnd }____________________š";
	const pieChart = {
		defaultSliceGroupingLabel: "Į_Other___________š"
	};
	const notAvailable = "Į_Not Available______________š";
	const field = "Į_Field___________š";
	var common_t9n_lt = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_lt;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.lt-c0686cc9-d8fe98e0.js.map
