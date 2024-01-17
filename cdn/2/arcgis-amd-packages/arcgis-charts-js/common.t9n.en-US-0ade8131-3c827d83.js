define(['exports'], (function (exports) { 'use strict';

	const statistics = {
		mean: "Mean",
		median: "Median",
		sum: "Sum",
		discretePercentitle: "Discrete percentile",
		minimum: "Minimum",
		maximum: "Maximum",
		firstQuartile: "First quartile",
		thirdQuartile: "Third quartile",
		iqr: "IQR",
		standardDeviation: "Standard deviation",
		variance: "Variance",
		count: "Count",
		aggregation: "${ statistics } of ${ fieldName }",
		percent: "Percent",
		noAggregation: "No aggregation"
	};
	const overlays = {
		mean: "Mean",
		median: "Median",
		stdDev: "Standard Deviation",
		normal: "Normal Distribution",
		trendline: "Trendline"
	};
	const guideTooltipLabel = "From ${ guideStart } to ${ guideEnd }";
	const pieChart = {
		defaultSliceGroupingLabel: "Other"
	};
	const notAvailable = "Not Available";
	const field = "Field";
	var common_t9n_enUS = {
		statistics: statistics,
		overlays: overlays,
		guideTooltipLabel: guideTooltipLabel,
		pieChart: pieChart,
		notAvailable: notAvailable,
		field: field
	};

	exports["default"] = common_t9n_enUS;
	exports.field = field;
	exports.guideTooltipLabel = guideTooltipLabel;
	exports.notAvailable = notAvailable;
	exports.overlays = overlays;
	exports.pieChart = pieChart;
	exports.statistics = statistics;

}));
//# sourceMappingURL=common.t9n.en-US-0ade8131-3c827d83.js.map
