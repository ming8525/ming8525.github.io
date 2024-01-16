define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Į_Invalid data_____________š",
		invalidChart: "Į_Invalid chart______________š",
		noDataAvailable: "Į_No data available to display_____________________________š",
		tooManyFeatures: "Į_Too many features__________________š",
		cannotCombineNegativeAndPositiveSlices: "Į_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________š",
		error: "Į_Error___________š",
		warning: "Į_Warning_______________š",
		newChart: "Į_New chart___________________š"
	};
	const errors = {
		divNode: "Į_Creating a chart requires an HTML div node_______________________š.",
		errorRequest: "Į_Please fix the following errors__________________š: ",
		warningRequest: "Į_Please address the following warnings_____________________š: ",
		newChartRequest: "Į_Configure chart_________________š.",
		invalidValueFormatForLineChart: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________š.",
		invalidValueFormatForBarChart: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________š.",
		invalidValueFormatForComboBarLineChart: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________š.",
		invalidValueFormatForBoxPlot: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________š.",
		invalidValueFormatForHistogram: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________š.",
		invalidValueFormatForScatterPlot: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________š.",
		invalidValueFormatForGauge: "Į_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________š.",
		mismatchAxisAndValueFormat: "Į_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________š.",
		queryError: "Į_Failure to read input data____________________________š.",
		simpleError: "Į_Something went wrong______________________š."
	};
	var errors_t9n_lt = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_lt;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.lt-6e3947a0-b25523f0.js.map
