define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "한_Mean_________빠",
		median: "한_Median_____________빠",
		sum: "한_Sum_______빠",
		discretePercentitle: "한_Discrete percentile____________________빠",
		minimum: "한_Minimum_______________빠",
		maximum: "한_Maximum_______________빠",
		firstQuartile: "한_First quartile_______________빠",
		thirdQuartile: "한_Third quartile_______________빠",
		iqr: "한_IQR_______빠",
		standardDeviation: "한_Standard deviation___________________빠",
		variance: "한_Variance_________________빠",
		count: "한_Count___________빠",
		aggregation: "한_${ statistics } of ${ fieldName }__________________빠",
		percent: "한_Percent_______________빠",
		noAggregation: "한_No aggregation_______________빠"
	};
	const overlays = {
		mean: "한_Mean_________빠",
		median: "한_Median_____________빠",
		stdDev: "한_Standard Deviation___________________빠",
		normal: "한_Normal Distribution____________________빠",
		trendline: "한_Trendline___________________빠"
	};
	const guideTooltipLabel = "한_From ${ guideStart } to ${ guideEnd }____________________빠";
	const pieChart = {
		defaultSliceGroupingLabel: "한_Other___________빠"
	};
	const notAvailable = "한_Not Available______________빠";
	const field = "한_Field___________빠";
	var common_t9n_ko = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ko;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.ko-81c8a819-5b7a7644.js.map
