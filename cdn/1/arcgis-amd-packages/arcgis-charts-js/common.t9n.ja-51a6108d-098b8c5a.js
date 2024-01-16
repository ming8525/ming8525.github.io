define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "須_Mean_________鷗",
		median: "須_Median_____________鷗",
		sum: "須_Sum_______鷗",
		discretePercentitle: "須_Discrete percentile____________________鷗",
		minimum: "須_Minimum_______________鷗",
		maximum: "須_Maximum_______________鷗",
		firstQuartile: "須_First quartile_______________鷗",
		thirdQuartile: "須_Third quartile_______________鷗",
		iqr: "須_IQR_______鷗",
		standardDeviation: "須_Standard deviation___________________鷗",
		variance: "須_Variance_________________鷗",
		count: "須_Count___________鷗",
		aggregation: "須_${ statistics } of ${ fieldName }__________________鷗",
		percent: "須_Percent_______________鷗",
		noAggregation: "須_No aggregation_______________鷗"
	};
	const overlays = {
		mean: "須_Mean_________鷗",
		median: "須_Median_____________鷗",
		stdDev: "須_Standard Deviation___________________鷗",
		normal: "須_Normal Distribution____________________鷗",
		trendline: "須_Trendline___________________鷗"
	};
	const guideTooltipLabel = "須_From ${ guideStart } to ${ guideEnd }____________________鷗";
	const pieChart = {
		defaultSliceGroupingLabel: "須_Other___________鷗"
	};
	const notAvailable = "須_Not Available______________鷗";
	const field = "須_Field___________鷗";
	var common_t9n_ja = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ja;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.ja-51a6108d-098b8c5a.js.map
