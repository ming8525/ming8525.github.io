define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Ă_Invalid data_____________ș",
		invalidChart: "Ă_Invalid chart______________ș",
		noDataAvailable: "Ă_No data available to display_____________________________ș",
		tooManyFeatures: "Ă_Too many features__________________ș",
		cannotCombineNegativeAndPositiveSlices: "Ă_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ș",
		error: "Ă_Error___________ș",
		warning: "Ă_Warning_______________ș",
		newChart: "Ă_New chart___________________ș"
	};
	const errors = {
		divNode: "Ă_Creating a chart requires an HTML div node_______________________ș.",
		errorRequest: "Ă_Please fix the following errors__________________ș: ",
		warningRequest: "Ă_Please address the following warnings_____________________ș: ",
		newChartRequest: "Ă_Configure chart_________________ș.",
		invalidValueFormatForLineChart: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ș.",
		invalidValueFormatForBarChart: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ș.",
		invalidValueFormatForComboBarLineChart: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ș.",
		invalidValueFormatForBoxPlot: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ș.",
		invalidValueFormatForHistogram: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ș.",
		invalidValueFormatForScatterPlot: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ș.",
		invalidValueFormatForGauge: "Ă_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ș.",
		mismatchAxisAndValueFormat: "Ă_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ș.",
		queryError: "Ă_Failure to read input data____________________________ș.",
		simpleError: "Ă_Something went wrong______________________ș."
	};
	var errors_t9n_ro = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_ro;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.ro-e8db4bb7-6c347f3c.js.map
