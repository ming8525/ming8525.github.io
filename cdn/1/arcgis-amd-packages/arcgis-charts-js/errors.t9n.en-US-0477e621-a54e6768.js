define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Invalid data",
		invalidChart: "Invalid chart",
		noDataAvailable: "No data available to display",
		tooManyFeatures: "Too many features",
		cannotCombineNegativeAndPositiveSlices: "Pie charts cannot combine slices with positive values to slices with negative values",
		error: "Error",
		warning: "Warning",
		newChart: "New chart"
	};
	const errors = {
		divNode: "Creating a chart requires an HTML div node.",
		errorRequest: "Please fix the following errors: ",
		warningRequest: "Please address the following warnings: ",
		newChartRequest: "Configure chart.",
		invalidValueFormatForLineChart: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis.",
		invalidValueFormatForBarChart: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis.",
		invalidValueFormatForComboBarLineChart: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis.",
		invalidValueFormatForBoxPlot: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis.",
		invalidValueFormatForHistogram: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes.",
		invalidValueFormatForScatterPlot: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes.",
		invalidValueFormatForGauge: "The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge.",
		mismatchAxisAndValueFormat: "There's a mismatch between the axis type and the axis 'valueFormat'.",
		queryError: "Failure to read input data.",
		simpleError: "Something went wrong."
	};
	var errors_t9n_enUS = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_enUS;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.en-US-0477e621-a54e6768.js.map
