define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "í_Mean_________ő",
		median: "í_Median_____________ő",
		sum: "í_Sum_______ő",
		discretePercentitle: "í_Discrete percentile____________________ő",
		minimum: "í_Minimum_______________ő",
		maximum: "í_Maximum_______________ő",
		firstQuartile: "í_First quartile_______________ő",
		thirdQuartile: "í_Third quartile_______________ő",
		iqr: "í_IQR_______ő",
		standardDeviation: "í_Standard deviation___________________ő",
		variance: "í_Variance_________________ő",
		count: "í_Count___________ő",
		aggregation: "í_${ statistics } of ${ fieldName }__________________ő",
		percent: "í_Percent_______________ő",
		noAggregation: "í_No aggregation_______________ő"
	};
	const overlays = {
		mean: "í_Mean_________ő",
		median: "í_Median_____________ő",
		stdDev: "í_Standard Deviation___________________ő",
		normal: "í_Normal Distribution____________________ő",
		trendline: "í_Trendline___________________ő"
	};
	const guideTooltipLabel = "í_From ${ guideStart } to ${ guideEnd }____________________ő";
	const pieChart = {
		defaultSliceGroupingLabel: "í_Other___________ő"
	};
	const notAvailable = "í_Not Available______________ő";
	const field = "í_Field___________ő";
	var common_t9n_hu = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_hu;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.hu-734f246b-f25f9627.js.map
