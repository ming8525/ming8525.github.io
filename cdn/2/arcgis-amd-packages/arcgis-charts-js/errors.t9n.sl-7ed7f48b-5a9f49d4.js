define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Š_Invalid data_____________č",
		invalidChart: "Š_Invalid chart______________č",
		noDataAvailable: "Š_No data available to display_____________________________č",
		tooManyFeatures: "Š_Too many features__________________č",
		cannotCombineNegativeAndPositiveSlices: "Š_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________č",
		error: "Š_Error___________č",
		warning: "Š_Warning_______________č",
		newChart: "Š_New chart___________________č"
	};
	const errors = {
		divNode: "Š_Creating a chart requires an HTML div node_______________________č.",
		errorRequest: "Š_Please fix the following errors__________________č: ",
		warningRequest: "Š_Please address the following warnings_____________________č: ",
		newChartRequest: "Š_Configure chart_________________č.",
		invalidValueFormatForLineChart: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________č.",
		invalidValueFormatForBarChart: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________č.",
		invalidValueFormatForComboBarLineChart: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________č.",
		invalidValueFormatForBoxPlot: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________č.",
		invalidValueFormatForHistogram: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________č.",
		invalidValueFormatForScatterPlot: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________č.",
		invalidValueFormatForGauge: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________č.",
		mismatchAxisAndValueFormat: "Š_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________č.",
		queryError: "Š_Failure to read input data____________________________č.",
		simpleError: "Š_Something went wrong______________________č."
	};
	var errors_t9n_sl = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_sl;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.sl-7ed7f48b-5a9f49d4.js.map