define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Đ_Mean_________ớ",
		median: "Đ_Median_____________ớ",
		sum: "Đ_Sum_______ớ",
		discretePercentitle: "Đ_Discrete percentile____________________ớ",
		minimum: "Đ_Minimum_______________ớ",
		maximum: "Đ_Maximum_______________ớ",
		firstQuartile: "Đ_First quartile_______________ớ",
		thirdQuartile: "Đ_Third quartile_______________ớ",
		iqr: "Đ_IQR_______ớ",
		standardDeviation: "Đ_Standard deviation___________________ớ",
		variance: "Đ_Variance_________________ớ",
		count: "Đ_Count___________ớ",
		aggregation: "Đ_${ statistics } of ${ fieldName }__________________ớ",
		percent: "Đ_Percent_______________ớ",
		noAggregation: "Đ_No aggregation_______________ớ"
	};
	const overlays = {
		mean: "Đ_Mean_________ớ",
		median: "Đ_Median_____________ớ",
		stdDev: "Đ_Standard Deviation___________________ớ",
		normal: "Đ_Normal Distribution____________________ớ",
		trendline: "Đ_Trendline___________________ớ"
	};
	const guideTooltipLabel = "Đ_From ${ guideStart } to ${ guideEnd }____________________ớ";
	const pieChart = {
		defaultSliceGroupingLabel: "Đ_Other___________ớ"
	};
	const notAvailable = "Đ_Not Available______________ớ";
	const field = "Đ_Field___________ớ";
	var common_t9n_vi = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_vi;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.vi-a02c9780-4ab97e8e.js.map
