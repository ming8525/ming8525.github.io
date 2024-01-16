define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "æ_Mean_________Â",
		median: "æ_Median_____________Â",
		sum: "æ_Sum_______Â",
		discretePercentitle: "æ_Discrete percentile____________________Â",
		minimum: "æ_Minimum_______________Â",
		maximum: "æ_Maximum_______________Â",
		firstQuartile: "æ_First quartile_______________Â",
		thirdQuartile: "æ_Third quartile_______________Â",
		iqr: "æ_IQR_______Â",
		standardDeviation: "æ_Standard deviation___________________Â",
		variance: "æ_Variance_________________Â",
		count: "æ_Count___________Â",
		aggregation: "æ_${ statistics } of ${ fieldName }__________________Â",
		percent: "æ_Percent_______________Â",
		noAggregation: "æ_No aggregation_______________Â"
	};
	const overlays = {
		mean: "æ_Mean_________Â",
		median: "æ_Median_____________Â",
		stdDev: "æ_Standard Deviation___________________Â",
		normal: "æ_Normal Distribution____________________Â",
		trendline: "æ_Trendline___________________Â"
	};
	const guideTooltipLabel = "æ_From ${ guideStart } to ${ guideEnd }____________________Â";
	const pieChart = {
		defaultSliceGroupingLabel: "æ_Other___________Â"
	};
	const notAvailable = "æ_Not Available______________Â";
	const field = "æ_Field___________Â";
	var common_t9n_fr = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_fr;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.fr-838be1e4-ecac7874.js.map
