define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Ă_Mean_________ș",
		median: "Ă_Median_____________ș",
		sum: "Ă_Sum_______ș",
		discretePercentitle: "Ă_Discrete percentile____________________ș",
		minimum: "Ă_Minimum_______________ș",
		maximum: "Ă_Maximum_______________ș",
		firstQuartile: "Ă_First quartile_______________ș",
		thirdQuartile: "Ă_Third quartile_______________ș",
		iqr: "Ă_IQR_______ș",
		standardDeviation: "Ă_Standard deviation___________________ș",
		variance: "Ă_Variance_________________ș",
		count: "Ă_Count___________ș",
		aggregation: "Ă_${ statistics } of ${ fieldName }__________________ș",
		percent: "Ă_Percent_______________ș",
		noAggregation: "Ă_No aggregation_______________ș"
	};
	const overlays = {
		mean: "Ă_Mean_________ș",
		median: "Ă_Median_____________ș",
		stdDev: "Ă_Standard Deviation___________________ș",
		normal: "Ă_Normal Distribution____________________ș",
		trendline: "Ă_Trendline___________________ș"
	};
	const guideTooltipLabel = "Ă_From ${ guideStart } to ${ guideEnd }____________________ș";
	const pieChart = {
		defaultSliceGroupingLabel: "Ă_Other___________ș"
	};
	const notAvailable = "Ă_Not Available______________ș";
	const field = "Ă_Field___________ș";
	var common_t9n_ro = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ro;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.ro-775f584e-a7823ef8.js.map