define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ł_Mean_________ą",
		median: "ł_Median_____________ą",
		sum: "ł_Sum_______ą",
		discretePercentitle: "ł_Discrete percentile____________________ą",
		minimum: "ł_Minimum_______________ą",
		maximum: "ł_Maximum_______________ą",
		firstQuartile: "ł_First quartile_______________ą",
		thirdQuartile: "ł_Third quartile_______________ą",
		iqr: "ł_IQR_______ą",
		standardDeviation: "ł_Standard deviation___________________ą",
		variance: "ł_Variance_________________ą",
		count: "ł_Count___________ą",
		aggregation: "ł_${ statistics } of ${ fieldName }__________________ą",
		percent: "ł_Percent_______________ą",
		noAggregation: "ł_No aggregation_______________ą"
	};
	const overlays = {
		mean: "ł_Mean_________ą",
		median: "ł_Median_____________ą",
		stdDev: "ł_Standard Deviation___________________ą",
		normal: "ł_Normal Distribution____________________ą",
		trendline: "ł_Trendline___________________ą"
	};
	const guideTooltipLabel = "ł_From ${ guideStart } to ${ guideEnd }____________________ą";
	const pieChart = {
		defaultSliceGroupingLabel: "ł_Other___________ą"
	};
	const notAvailable = "ł_Not Available______________ą";
	const field = "ł_Field___________ą";
	var common_t9n_pl = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_pl;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.pl-c04162bc-1be26027.js.map
