define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Š_Mean_________ä",
		median: "Š_Median_____________ä",
		sum: "Š_Sum_______ä",
		discretePercentitle: "Š_Discrete percentile____________________ä",
		minimum: "Š_Minimum_______________ä",
		maximum: "Š_Maximum_______________ä",
		firstQuartile: "Š_First quartile_______________ä",
		thirdQuartile: "Š_Third quartile_______________ä",
		iqr: "Š_IQR_______ä",
		standardDeviation: "Š_Standard deviation___________________ä",
		variance: "Š_Variance_________________ä",
		count: "Š_Count___________ä",
		aggregation: "Š_${ statistics } of ${ fieldName }__________________ä",
		percent: "Š_Percent_______________ä",
		noAggregation: "Š_No aggregation_______________ä"
	};
	const overlays = {
		mean: "Š_Mean_________ä",
		median: "Š_Median_____________ä",
		stdDev: "Š_Standard Deviation___________________ä",
		normal: "Š_Normal Distribution____________________ä",
		trendline: "Š_Trendline___________________ä"
	};
	const guideTooltipLabel = "Š_From ${ guideStart } to ${ guideEnd }____________________ä";
	const pieChart = {
		defaultSliceGroupingLabel: "Š_Other___________ä"
	};
	const notAvailable = "Š_Not Available______________ä";
	const field = "Š_Field___________ä";
	var common_t9n_et = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_et;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.et-a026c61c-9c49b7bf.js.map
