define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "ó_Mean_________à",
		median: "ó_Median_____________à",
		sum: "ó_Sum_______à",
		discretePercentitle: "ó_Discrete percentile____________________à",
		minimum: "ó_Minimum_______________à",
		maximum: "ó_Maximum_______________à",
		firstQuartile: "ó_First quartile_______________à",
		thirdQuartile: "ó_Third quartile_______________à",
		iqr: "ó_IQR_______à",
		standardDeviation: "ó_Standard deviation___________________à",
		variance: "ó_Variance_________________à",
		count: "ó_Count___________à",
		aggregation: "ó_${ statistics } of ${ fieldName }__________________à",
		percent: "ó_Percent_______________à",
		noAggregation: "ó_No aggregation_______________à"
	};
	const overlays = {
		mean: "ó_Mean_________à",
		median: "ó_Median_____________à",
		stdDev: "ó_Standard Deviation___________________à",
		normal: "ó_Normal Distribution____________________à",
		trendline: "ó_Trendline___________________à"
	};
	const guideTooltipLabel = "ó_From ${ guideStart } to ${ guideEnd }____________________à";
	const pieChart = {
		defaultSliceGroupingLabel: "ó_Other___________à"
	};
	const notAvailable = "ó_Not Available______________à";
	const field = "ó_Field___________à";
	var common_t9n_ca = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_ca;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.ca-82d10a70-1bfc88bf.js.map
