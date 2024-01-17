define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "é_Invalid data_____________È",
		invalidChart: "é_Invalid chart______________È",
		noDataAvailable: "é_No data available to display_____________________________È",
		tooManyFeatures: "é_Too many features__________________È",
		cannotCombineNegativeAndPositiveSlices: "é_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________È",
		error: "é_Error___________È",
		warning: "é_Warning_______________È",
		newChart: "é_New chart___________________È"
	};
	const errors = {
		divNode: "é_Creating a chart requires an HTML div node_______________________È.",
		errorRequest: "é_Please fix the following errors__________________È: ",
		warningRequest: "é_Please address the following warnings_____________________È: ",
		newChartRequest: "é_Configure chart_________________È.",
		invalidValueFormatForLineChart: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________È.",
		invalidValueFormatForBarChart: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________È.",
		invalidValueFormatForComboBarLineChart: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________È.",
		invalidValueFormatForBoxPlot: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________È.",
		invalidValueFormatForHistogram: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________È.",
		invalidValueFormatForScatterPlot: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________È.",
		invalidValueFormatForGauge: "é_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________È.",
		mismatchAxisAndValueFormat: "é_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________È.",
		queryError: "é_Failure to read input data____________________________È.",
		simpleError: "é_Something went wrong______________________È."
	};
	var errors_t9n_it = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_it;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.it-4fd7dabd-bf26d45f.js.map
