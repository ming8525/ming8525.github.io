define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Š_Mean_________č",
		median: "Š_Median_____________č",
		sum: "Š_Sum_______č",
		discretePercentitle: "Š_Discrete percentile____________________č",
		minimum: "Š_Minimum_______________č",
		maximum: "Š_Maximum_______________č",
		firstQuartile: "Š_First quartile_______________č",
		thirdQuartile: "Š_Third quartile_______________č",
		iqr: "Š_IQR_______č",
		standardDeviation: "Š_Standard deviation___________________č",
		variance: "Š_Variance_________________č",
		count: "Š_Count___________č",
		aggregation: "Š_${ statistics } of ${ fieldName }__________________č",
		percent: "Š_Percent_______________č",
		noAggregation: "Š_No aggregation_______________č"
	};
	const overlays = {
		mean: "Š_Mean_________č",
		median: "Š_Median_____________č",
		stdDev: "Š_Standard Deviation___________________č",
		normal: "Š_Normal Distribution____________________č",
		trendline: "Š_Trendline___________________č"
	};
	const guideTooltipLabel = "Š_From ${ guideStart } to ${ guideEnd }____________________č";
	const pieChart = {
		defaultSliceGroupingLabel: "Š_Other___________č"
	};
	const notAvailable = "Š_Not Available______________č";
	const field = "Š_Field___________č";
	var common_t9n_sl = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_sl;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.sl-e04cb649-056350aa.js.map
