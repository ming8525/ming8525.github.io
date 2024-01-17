define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "試_Mean_________驗",
		median: "試_Median_____________驗",
		sum: "試_Sum_______驗",
		discretePercentitle: "試_Discrete percentile____________________驗",
		minimum: "試_Minimum_______________驗",
		maximum: "試_Maximum_______________驗",
		firstQuartile: "試_First quartile_______________驗",
		thirdQuartile: "試_Third quartile_______________驗",
		iqr: "試_IQR_______驗",
		standardDeviation: "試_Standard deviation___________________驗",
		variance: "試_Variance_________________驗",
		count: "試_Count___________驗",
		aggregation: "試_${ statistics } of ${ fieldName }__________________驗",
		percent: "試_Percent_______________驗",
		noAggregation: "試_No aggregation_______________驗"
	};
	const overlays = {
		mean: "試_Mean_________驗",
		median: "試_Median_____________驗",
		stdDev: "試_Standard Deviation___________________驗",
		normal: "試_Normal Distribution____________________驗",
		trendline: "試_Trendline___________________驗"
	};
	const guideTooltipLabel = "試_From ${ guideStart } to ${ guideEnd }____________________驗";
	const pieChart = {
		defaultSliceGroupingLabel: "試_Other___________驗"
	};
	const notAvailable = "試_Not Available______________驗";
	const field = "試_Field___________驗";
	var common_t9n_zhHK = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_zhHK;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.zh-HK-75d315ce-2abb9d55.js.map
