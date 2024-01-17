define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "å_Invalid data_____________ø",
		invalidChart: "å_Invalid chart______________ø",
		noDataAvailable: "å_No data available to display_____________________________ø",
		tooManyFeatures: "å_Too many features__________________ø",
		cannotCombineNegativeAndPositiveSlices: "å_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ø",
		error: "å_Error___________ø",
		warning: "å_Warning_______________ø",
		newChart: "å_New chart___________________ø"
	};
	const errors = {
		divNode: "å_Creating a chart requires an HTML div node_______________________ø.",
		errorRequest: "å_Please fix the following errors__________________ø: ",
		warningRequest: "å_Please address the following warnings_____________________ø: ",
		newChartRequest: "å_Configure chart_________________ø.",
		invalidValueFormatForLineChart: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ø.",
		invalidValueFormatForBarChart: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ø.",
		invalidValueFormatForComboBarLineChart: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ø.",
		invalidValueFormatForBoxPlot: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ø.",
		invalidValueFormatForHistogram: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ø.",
		invalidValueFormatForScatterPlot: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ø.",
		invalidValueFormatForGauge: "å_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ø.",
		mismatchAxisAndValueFormat: "å_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ø.",
		queryError: "å_Failure to read input data____________________________ø.",
		simpleError: "å_Something went wrong______________________ø."
	};
	var errors_t9n_nb = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_nb;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.nb-036db1bd-7b747b96.js.map