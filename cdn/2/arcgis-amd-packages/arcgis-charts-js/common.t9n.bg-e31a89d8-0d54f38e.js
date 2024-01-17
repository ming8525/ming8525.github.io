define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "й_Mean_________й",
		median: "й_Median_____________й",
		sum: "й_Sum_______й",
		discretePercentitle: "й_Discrete percentile____________________й",
		minimum: "й_Minimum_______________й",
		maximum: "й_Maximum_______________й",
		firstQuartile: "й_First quartile_______________й",
		thirdQuartile: "й_Third quartile_______________й",
		iqr: "й_IQR_______й",
		standardDeviation: "й_Standard deviation___________________й",
		variance: "й_Variance_________________й",
		count: "й_Count___________й",
		aggregation: "й_${ statistics } of ${ fieldName }__________________й",
		percent: "й_Percent_______________й",
		noAggregation: "й_No aggregation_______________й"
	};
	const overlays = {
		mean: "й_Mean_________й",
		median: "й_Median_____________й",
		stdDev: "й_Standard Deviation___________________й",
		normal: "й_Normal Distribution____________________й",
		trendline: "й_Trendline___________________й"
	};
	const guideTooltipLabel = "й_From ${ guideStart } to ${ guideEnd }____________________й";
	const pieChart = {
		defaultSliceGroupingLabel: "й_Other___________й"
	};
	const notAvailable = "й_Not Available______________й";
	const field = "й_Field___________й";
	var common_t9n_bg = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_bg;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.bg-e31a89d8-0d54f38e.js.map
