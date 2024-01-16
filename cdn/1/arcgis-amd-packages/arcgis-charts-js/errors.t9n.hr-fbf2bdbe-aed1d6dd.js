define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Č_Invalid data_____________ž",
		invalidChart: "Č_Invalid chart______________ž",
		noDataAvailable: "Č_No data available to display_____________________________ž",
		tooManyFeatures: "Č_Too many features__________________ž",
		cannotCombineNegativeAndPositiveSlices: "Č_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ž",
		error: "Č_Error___________ž",
		warning: "Č_Warning_______________ž",
		newChart: "Č_New chart___________________ž"
	};
	const errors = {
		divNode: "Č_Creating a chart requires an HTML div node_______________________ž.",
		errorRequest: "Č_Please fix the following errors__________________ž: ",
		warningRequest: "Č_Please address the following warnings_____________________ž: ",
		newChartRequest: "Č_Configure chart_________________ž.",
		invalidValueFormatForLineChart: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ž.",
		invalidValueFormatForBarChart: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ž.",
		invalidValueFormatForComboBarLineChart: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ž.",
		invalidValueFormatForBoxPlot: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ž.",
		invalidValueFormatForHistogram: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ž.",
		invalidValueFormatForScatterPlot: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ž.",
		invalidValueFormatForGauge: "Č_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ž.",
		mismatchAxisAndValueFormat: "Č_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ž.",
		queryError: "Č_Failure to read input data____________________________ž.",
		simpleError: "Č_Something went wrong______________________ž."
	};
	var errors_t9n_hr = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_hr;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.hr-fbf2bdbe-aed1d6dd.js.map
