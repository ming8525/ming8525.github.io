define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "כן_Mean_________ש",
		median: "כן_Median_____________ש",
		sum: "כן_Sum_______ש",
		discretePercentitle: "כן_Discrete percentile____________________ש",
		minimum: "כן_Minimum_______________ש",
		maximum: "כן_Maximum_______________ש",
		firstQuartile: "כן_First quartile_______________ש",
		thirdQuartile: "כן_Third quartile_______________ש",
		iqr: "כן_IQR_______ש",
		standardDeviation: "כן_Standard deviation___________________ש",
		variance: "כן_Variance_________________ש",
		count: "כן_Count___________ש",
		aggregation: "כן_${ statistics } of ${ fieldName }__________________ש",
		percent: "כן_Percent_______________ש",
		noAggregation: "כן_No aggregation_______________ש"
	};
	const overlays = {
		mean: "כן_Mean_________ש",
		median: "כן_Median_____________ש",
		stdDev: "כן_Standard Deviation___________________ש",
		normal: "כן_Normal Distribution____________________ש",
		trendline: "כן_Trendline___________________ש"
	};
	const guideTooltipLabel = "כן_From ${ guideStart } to ${ guideEnd }____________________ש";
	const pieChart = {
		defaultSliceGroupingLabel: "כן_Other___________ש"
	};
	const notAvailable = "כן_Not Available______________ש";
	const field = "כן_Field___________ש";
	var common_t9n_he = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_he;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.he-2c259947-83313c40.js.map
