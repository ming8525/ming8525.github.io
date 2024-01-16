define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "כן_Invalid data_____________ש",
		invalidChart: "כן_Invalid chart______________ש",
		noDataAvailable: "כן_No data available to display_____________________________ש",
		tooManyFeatures: "כן_Too many features__________________ש",
		cannotCombineNegativeAndPositiveSlices: "כן_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ש",
		error: "כן_Error___________ש",
		warning: "כן_Warning_______________ש",
		newChart: "כן_New chart___________________ש"
	};
	const errors = {
		divNode: "כן_Creating a chart requires an HTML div node_______________________ש.",
		errorRequest: "כן_Please fix the following errors__________________ש: ",
		warningRequest: "כן_Please address the following warnings_____________________ש: ",
		newChartRequest: "כן_Configure chart_________________ש.",
		invalidValueFormatForLineChart: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ש.",
		invalidValueFormatForBarChart: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ש.",
		invalidValueFormatForComboBarLineChart: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ש.",
		invalidValueFormatForBoxPlot: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ש.",
		invalidValueFormatForHistogram: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ש.",
		invalidValueFormatForScatterPlot: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ש.",
		invalidValueFormatForGauge: "כן_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ש.",
		mismatchAxisAndValueFormat: "כן_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ש.",
		queryError: "כן_Failure to read input data____________________________ש.",
		simpleError: "כן_Something went wrong______________________ש."
	};
	var errors_t9n_he = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_he;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.he-f0cfdf8f-59a70111.js.map
