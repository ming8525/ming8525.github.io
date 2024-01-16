define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Ř_Mean_________ů",
		median: "Ř_Median_____________ů",
		sum: "Ř_Sum_______ů",
		discretePercentitle: "Ř_Discrete percentile____________________ů",
		minimum: "Ř_Minimum_______________ů",
		maximum: "Ř_Maximum_______________ů",
		firstQuartile: "Ř_First quartile_______________ů",
		thirdQuartile: "Ř_Third quartile_______________ů",
		iqr: "Ř_IQR_______ů",
		standardDeviation: "Ř_Standard deviation___________________ů",
		variance: "Ř_Variance_________________ů",
		count: "Ř_Count___________ů",
		aggregation: "Ř_${ statistics } of ${ fieldName }__________________ů",
		percent: "Ř_Percent_______________ů",
		noAggregation: "Ř_No aggregation_______________ů"
	};
	const overlays = {
		mean: "Ř_Mean_________ů",
		median: "Ř_Median_____________ů",
		stdDev: "Ř_Standard Deviation___________________ů",
		normal: "Ř_Normal Distribution____________________ů",
		trendline: "Ř_Trendline___________________ů"
	};
	const guideTooltipLabel = "Ř_From ${ guideStart } to ${ guideEnd }____________________ů";
	const pieChart = {
		defaultSliceGroupingLabel: "Ř_Other___________ů"
	};
	const notAvailable = "Ř_Not Available______________ů";
	const field = "Ř_Field___________ů";
	var common_t9n_cs = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_cs;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.cs-bd7b23b5-bfdf8408.js.map
