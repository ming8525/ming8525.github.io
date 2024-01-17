define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "بيت_Mean_________لاحقة",
		median: "بيت_Median_____________لاحقة",
		sum: "بيت_Sum_______لاحقة",
		discretePercentitle: "بيت_Discrete percentile____________________لاحقة",
		minimum: "بيت_Minimum_______________لاحقة",
		maximum: "بيت_Maximum_______________لاحقة",
		firstQuartile: "بيت_First quartile_______________لاحقة",
		thirdQuartile: "بيت_Third quartile_______________لاحقة",
		iqr: "بيت_IQR_______لاحقة",
		standardDeviation: "بيت_Standard deviation___________________لاحقة",
		variance: "بيت_Variance_________________لاحقة",
		count: "بيت_Count___________لاحقة",
		aggregation: "بيت_${ statistics } of ${ fieldName }__________________لاحقة",
		percent: "بيت_Percent_______________لاحقة",
		noAggregation: "بيت_No aggregation_______________لاحقة"
	};
	const overlays = {
		mean: "بيت_Mean_________لاحقة",
		median: "بيت_Median_____________لاحقة",
		stdDev: "بيت_Standard Deviation___________________لاحقة",
		normal: "بيت_Normal Distribution____________________لاحقة",
		trendline: "بيت_Trendline___________________لاحقة"
	};
	const guideTooltipLabel = "بيت_From ${ guideStart } to ${ guideEnd }____________________لاحقة";
	const pieChart = {
		defaultSliceGroupingLabel: "بيت_Other___________لاحقة"
	};
	const notAvailable = "بيت_Not Available______________لاحقة";
	const field = "بيت_Field___________لاحقة";
	var common_t9n_ar = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ar;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.ar-3e750b59-3dffcae2.js.map
