define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "π_Mean_________Ω",
		median: "π_Median_____________Ω",
		sum: "π_Sum_______Ω",
		discretePercentitle: "π_Discrete percentile____________________Ω",
		minimum: "π_Minimum_______________Ω",
		maximum: "π_Maximum_______________Ω",
		firstQuartile: "π_First quartile_______________Ω",
		thirdQuartile: "π_Third quartile_______________Ω",
		iqr: "π_IQR_______Ω",
		standardDeviation: "π_Standard deviation___________________Ω",
		variance: "π_Variance_________________Ω",
		count: "π_Count___________Ω",
		aggregation: "π_${ statistics } of ${ fieldName }__________________Ω",
		percent: "π_Percent_______________Ω",
		noAggregation: "π_No aggregation_______________Ω"
	};
	const overlays = {
		mean: "π_Mean_________Ω",
		median: "π_Median_____________Ω",
		stdDev: "π_Standard Deviation___________________Ω",
		normal: "π_Normal Distribution____________________Ω",
		trendline: "π_Trendline___________________Ω"
	};
	const guideTooltipLabel = "π_From ${ guideStart } to ${ guideEnd }____________________Ω";
	const pieChart = {
		defaultSliceGroupingLabel: "π_Other___________Ω"
	};
	const notAvailable = "π_Not Available______________Ω";
	const field = "π_Field___________Ω";
	var common_t9n_el = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_el;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.el-853bd7b1-4a42bcb7.js.map
