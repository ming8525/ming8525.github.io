define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Đ_Invalid data_____________ớ",
		invalidChart: "Đ_Invalid chart______________ớ",
		noDataAvailable: "Đ_No data available to display_____________________________ớ",
		tooManyFeatures: "Đ_Too many features__________________ớ",
		cannotCombineNegativeAndPositiveSlices: "Đ_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ớ",
		error: "Đ_Error___________ớ",
		warning: "Đ_Warning_______________ớ",
		newChart: "Đ_New chart___________________ớ"
	};
	const errors = {
		divNode: "Đ_Creating a chart requires an HTML div node_______________________ớ.",
		errorRequest: "Đ_Please fix the following errors__________________ớ: ",
		warningRequest: "Đ_Please address the following warnings_____________________ớ: ",
		newChartRequest: "Đ_Configure chart_________________ớ.",
		invalidValueFormatForLineChart: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ớ.",
		invalidValueFormatForBarChart: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ớ.",
		invalidValueFormatForComboBarLineChart: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ớ.",
		invalidValueFormatForBoxPlot: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ớ.",
		invalidValueFormatForHistogram: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ớ.",
		invalidValueFormatForScatterPlot: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ớ.",
		invalidValueFormatForGauge: "Đ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ớ.",
		mismatchAxisAndValueFormat: "Đ_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ớ.",
		queryError: "Đ_Failure to read input data____________________________ớ.",
		simpleError: "Đ_Something went wrong______________________ớ."
	};
	var errors_t9n_vi = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_vi;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.vi-17c3476d-9eae987e.js.map