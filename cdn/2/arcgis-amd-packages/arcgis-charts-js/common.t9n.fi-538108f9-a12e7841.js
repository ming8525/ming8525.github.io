define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Å_Mean_________ö",
		median: "Å_Median_____________ö",
		sum: "Å_Sum_______ö",
		discretePercentitle: "Å_Discrete percentile____________________ö",
		minimum: "Å_Minimum_______________ö",
		maximum: "Å_Maximum_______________ö",
		firstQuartile: "Å_First quartile_______________ö",
		thirdQuartile: "Å_Third quartile_______________ö",
		iqr: "Å_IQR_______ö",
		standardDeviation: "Å_Standard deviation___________________ö",
		variance: "Å_Variance_________________ö",
		count: "Å_Count___________ö",
		aggregation: "Å_${ statistics } of ${ fieldName }__________________ö",
		percent: "Å_Percent_______________ö",
		noAggregation: "Å_No aggregation_______________ö"
	};
	const overlays = {
		mean: "Å_Mean_________ö",
		median: "Å_Median_____________ö",
		stdDev: "Å_Standard Deviation___________________ö",
		normal: "Å_Normal Distribution____________________ö",
		trendline: "Å_Trendline___________________ö"
	};
	const guideTooltipLabel = "Å_From ${ guideStart } to ${ guideEnd }____________________ö";
	const pieChart = {
		defaultSliceGroupingLabel: "Å_Other___________ö"
	};
	const notAvailable = "Å_Not Available______________ö";
	const field = "Å_Field___________ö";
	var common_t9n_fi = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_fi;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.fi-538108f9-a12e7841.js.map