define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ґ_Mean_________Ї",
		median: "ґ_Median_____________Ї",
		sum: "ґ_Sum_______Ї",
		discretePercentitle: "ґ_Discrete percentile____________________Ї",
		minimum: "ґ_Minimum_______________Ї",
		maximum: "ґ_Maximum_______________Ї",
		firstQuartile: "ґ_First quartile_______________Ї",
		thirdQuartile: "ґ_Third quartile_______________Ї",
		iqr: "ґ_IQR_______Ї",
		standardDeviation: "ґ_Standard deviation___________________Ї",
		variance: "ґ_Variance_________________Ї",
		count: "ґ_Count___________Ї",
		aggregation: "ґ_${ statistics } of ${ fieldName }__________________Ї",
		percent: "ґ_Percent_______________Ї",
		noAggregation: "ґ_No aggregation_______________Ї"
	};
	const overlays = {
		mean: "ґ_Mean_________Ї",
		median: "ґ_Median_____________Ї",
		stdDev: "ґ_Standard Deviation___________________Ї",
		normal: "ґ_Normal Distribution____________________Ї",
		trendline: "ґ_Trendline___________________Ї"
	};
	const guideTooltipLabel = "ґ_From ${ guideStart } to ${ guideEnd }____________________Ї";
	const pieChart = {
		defaultSliceGroupingLabel: "ґ_Other___________Ї"
	};
	const notAvailable = "ґ_Not Available______________Ї";
	const field = "ґ_Field___________Ї";
	var common_t9n_uk = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_uk;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.uk-44d809b5-4e1ff165.js.map
