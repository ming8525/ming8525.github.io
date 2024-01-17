define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "ó_Invalid data_____________à",
		invalidChart: "ó_Invalid chart______________à",
		noDataAvailable: "ó_No data available to display_____________________________à",
		tooManyFeatures: "ó_Too many features__________________à",
		cannotCombineNegativeAndPositiveSlices: "ó_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________à",
		error: "ó_Error___________à",
		warning: "ó_Warning_______________à",
		newChart: "ó_New chart___________________à"
	};
	const errors = {
		divNode: "ó_Creating a chart requires an HTML div node_______________________à.",
		errorRequest: "ó_Please fix the following errors__________________à: ",
		warningRequest: "ó_Please address the following warnings_____________________à: ",
		newChartRequest: "ó_Configure chart_________________à.",
		invalidValueFormatForLineChart: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________à.",
		invalidValueFormatForBarChart: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________à.",
		invalidValueFormatForComboBarLineChart: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________à.",
		invalidValueFormatForBoxPlot: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________à.",
		invalidValueFormatForHistogram: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________à.",
		invalidValueFormatForScatterPlot: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________à.",
		invalidValueFormatForGauge: "ó_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________à.",
		mismatchAxisAndValueFormat: "ó_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________à.",
		queryError: "ó_Failure to read input data____________________________à.",
		simpleError: "ó_Something went wrong______________________à."
	};
	var errors_t9n_ca = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_ca;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.ca-ba444952-550347da.js.map