define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "ng_Invalid data_____________ny",
		invalidChart: "ng_Invalid chart______________ny",
		noDataAvailable: "ng_No data available to display_____________________________ny",
		tooManyFeatures: "ng_Too many features__________________ny",
		cannotCombineNegativeAndPositiveSlices: "ng_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ny",
		error: "ng_Error___________ny",
		warning: "ng_Warning_______________ny",
		newChart: "ng_New chart___________________ny"
	};
	const errors = {
		divNode: "ng_Creating a chart requires an HTML div node_______________________ny.",
		errorRequest: "ng_Please fix the following errors__________________ny: ",
		warningRequest: "ng_Please address the following warnings_____________________ny: ",
		newChartRequest: "ng_Configure chart_________________ny.",
		invalidValueFormatForLineChart: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ny.",
		invalidValueFormatForBarChart: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ny.",
		invalidValueFormatForComboBarLineChart: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ny.",
		invalidValueFormatForBoxPlot: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ny.",
		invalidValueFormatForHistogram: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ny.",
		invalidValueFormatForScatterPlot: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ny.",
		invalidValueFormatForGauge: "ng_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ny.",
		mismatchAxisAndValueFormat: "ng_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ny.",
		queryError: "ng_Failure to read input data____________________________ny.",
		simpleError: "ng_Something went wrong______________________ny."
	};
	var errors_t9n_id = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_id;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.id-39132d2a-00d9cf3a.js.map
