define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Ж_Mean_________Я",
		median: "Ж_Median_____________Я",
		sum: "Ж_Sum_______Я",
		discretePercentitle: "Ж_Discrete percentile____________________Я",
		minimum: "Ж_Minimum_______________Я",
		maximum: "Ж_Maximum_______________Я",
		firstQuartile: "Ж_First quartile_______________Я",
		thirdQuartile: "Ж_Third quartile_______________Я",
		iqr: "Ж_IQR_______Я",
		standardDeviation: "Ж_Standard deviation___________________Я",
		variance: "Ж_Variance_________________Я",
		count: "Ж_Count___________Я",
		aggregation: "Ж_${ statistics } of ${ fieldName }__________________Я",
		percent: "Ж_Percent_______________Я",
		noAggregation: "Ж_No aggregation_______________Я"
	};
	const overlays = {
		mean: "Ж_Mean_________Я",
		median: "Ж_Median_____________Я",
		stdDev: "Ж_Standard Deviation___________________Я",
		normal: "Ж_Normal Distribution____________________Я",
		trendline: "Ж_Trendline___________________Я"
	};
	const guideTooltipLabel = "Ж_From ${ guideStart } to ${ guideEnd }____________________Я";
	const pieChart = {
		defaultSliceGroupingLabel: "Ж_Other___________Я"
	};
	const notAvailable = "Ж_Not Available______________Я";
	const field = "Ж_Field___________Я";
	var common_t9n_ru = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ru;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.ru-8e7ac0c5-524c61ae.js.map
