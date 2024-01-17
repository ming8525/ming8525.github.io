define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ĺ_Mean_________ľ",
		median: "ĺ_Median_____________ľ",
		sum: "ĺ_Sum_______ľ",
		discretePercentitle: "ĺ_Discrete percentile____________________ľ",
		minimum: "ĺ_Minimum_______________ľ",
		maximum: "ĺ_Maximum_______________ľ",
		firstQuartile: "ĺ_First quartile_______________ľ",
		thirdQuartile: "ĺ_Third quartile_______________ľ",
		iqr: "ĺ_IQR_______ľ",
		standardDeviation: "ĺ_Standard deviation___________________ľ",
		variance: "ĺ_Variance_________________ľ",
		count: "ĺ_Count___________ľ",
		aggregation: "ĺ_${ statistics } of ${ fieldName }__________________ľ",
		percent: "ĺ_Percent_______________ľ",
		noAggregation: "ĺ_No aggregation_______________ľ"
	};
	const overlays = {
		mean: "ĺ_Mean_________ľ",
		median: "ĺ_Median_____________ľ",
		stdDev: "ĺ_Standard Deviation___________________ľ",
		normal: "ĺ_Normal Distribution____________________ľ",
		trendline: "ĺ_Trendline___________________ľ"
	};
	const guideTooltipLabel = "ĺ_From ${ guideStart } to ${ guideEnd }____________________ľ";
	const pieChart = {
		defaultSliceGroupingLabel: "ĺ_Other___________ľ"
	};
	const notAvailable = "ĺ_Not Available______________ľ";
	const field = "ĺ_Field___________ľ";
	var common_t9n_sk = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_sk;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.sk-204924cd-b77a8429.js.map
