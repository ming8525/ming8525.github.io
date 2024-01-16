define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Ĳ_Mean_________ä",
		median: "Ĳ_Median_____________ä",
		sum: "Ĳ_Sum_______ä",
		discretePercentitle: "Ĳ_Discrete percentile____________________ä",
		minimum: "Ĳ_Minimum_______________ä",
		maximum: "Ĳ_Maximum_______________ä",
		firstQuartile: "Ĳ_First quartile_______________ä",
		thirdQuartile: "Ĳ_Third quartile_______________ä",
		iqr: "Ĳ_IQR_______ä",
		standardDeviation: "Ĳ_Standard deviation___________________ä",
		variance: "Ĳ_Variance_________________ä",
		count: "Ĳ_Count___________ä",
		aggregation: "Ĳ_${ statistics } of ${ fieldName }__________________ä",
		percent: "Ĳ_Percent_______________ä",
		noAggregation: "Ĳ_No aggregation_______________ä"
	};
	const overlays = {
		mean: "Ĳ_Mean_________ä",
		median: "Ĳ_Median_____________ä",
		stdDev: "Ĳ_Standard Deviation___________________ä",
		normal: "Ĳ_Normal Distribution____________________ä",
		trendline: "Ĳ_Trendline___________________ä"
	};
	const guideTooltipLabel = "Ĳ_From ${ guideStart } to ${ guideEnd }____________________ä";
	const pieChart = {
		defaultSliceGroupingLabel: "Ĳ_Other___________ä"
	};
	const notAvailable = "Ĳ_Not Available______________ä";
	const field = "Ĳ_Field___________ä";
	var common_t9n_nl = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_nl;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.nl-9c5c553a-d86db511.js.map
