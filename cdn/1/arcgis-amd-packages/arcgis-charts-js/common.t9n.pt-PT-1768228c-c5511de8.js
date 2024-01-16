define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ã_Mean_________Ç",
		median: "ã_Median_____________Ç",
		sum: "ã_Sum_______Ç",
		discretePercentitle: "ã_Discrete percentile____________________Ç",
		minimum: "ã_Minimum_______________Ç",
		maximum: "ã_Maximum_______________Ç",
		firstQuartile: "ã_First quartile_______________Ç",
		thirdQuartile: "ã_Third quartile_______________Ç",
		iqr: "ã_IQR_______Ç",
		standardDeviation: "ã_Standard deviation___________________Ç",
		variance: "ã_Variance_________________Ç",
		count: "ã_Count___________Ç",
		aggregation: "ã_${ statistics } of ${ fieldName }__________________Ç",
		percent: "ã_Percent_______________Ç",
		noAggregation: "ã_No aggregation_______________Ç"
	};
	const overlays = {
		mean: "ã_Mean_________Ç",
		median: "ã_Median_____________Ç",
		stdDev: "ã_Standard Deviation___________________Ç",
		normal: "ã_Normal Distribution____________________Ç",
		trendline: "ã_Trendline___________________Ç"
	};
	const guideTooltipLabel = "ã_From ${ guideStart } to ${ guideEnd }____________________Ç";
	const pieChart = {
		defaultSliceGroupingLabel: "ã_Other___________Ç"
	};
	const notAvailable = "ã_Not Available______________Ç";
	const field = "ã_Field___________Ç";
	var common_t9n_ptPT = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ptPT;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.pt-PT-1768228c-c5511de8.js.map
