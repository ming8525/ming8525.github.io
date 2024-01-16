define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "试_Mean_________验",
		median: "试_Median_____________验",
		sum: "试_Sum_______验",
		discretePercentitle: "试_Discrete percentile____________________验",
		minimum: "试_Minimum_______________验",
		maximum: "试_Maximum_______________验",
		firstQuartile: "试_First quartile_______________验",
		thirdQuartile: "试_Third quartile_______________验",
		iqr: "试_IQR_______验",
		standardDeviation: "试_Standard deviation___________________验",
		variance: "试_Variance_________________验",
		count: "试_Count___________验",
		aggregation: "试_${ statistics } of ${ fieldName }__________________验",
		percent: "试_Percent_______________验",
		noAggregation: "试_No aggregation_______________验"
	};
	const overlays = {
		mean: "试_Mean_________验",
		median: "试_Median_____________验",
		stdDev: "试_Standard Deviation___________________验",
		normal: "试_Normal Distribution____________________验",
		trendline: "试_Trendline___________________验"
	};
	const guideTooltipLabel = "试_From ${ guideStart } to ${ guideEnd }____________________验";
	const pieChart = {
		defaultSliceGroupingLabel: "试_Other___________验"
	};
	const notAvailable = "试_Not Available______________验";
	const field = "试_Field___________验";
	var common_t9n_zhCN = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_zhCN;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.zh-CN-a4c05adc-810f1d47.js.map
