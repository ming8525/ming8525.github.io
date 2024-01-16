define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "ĺ_Invalid data_____________ľ",
		invalidChart: "ĺ_Invalid chart______________ľ",
		noDataAvailable: "ĺ_No data available to display_____________________________ľ",
		tooManyFeatures: "ĺ_Too many features__________________ľ",
		cannotCombineNegativeAndPositiveSlices: "ĺ_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ľ",
		error: "ĺ_Error___________ľ",
		warning: "ĺ_Warning_______________ľ",
		newChart: "ĺ_New chart___________________ľ"
	};
	const errors = {
		divNode: "ĺ_Creating a chart requires an HTML div node_______________________ľ.",
		errorRequest: "ĺ_Please fix the following errors__________________ľ: ",
		warningRequest: "ĺ_Please address the following warnings_____________________ľ: ",
		newChartRequest: "ĺ_Configure chart_________________ľ.",
		invalidValueFormatForLineChart: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ľ.",
		invalidValueFormatForBarChart: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ľ.",
		invalidValueFormatForComboBarLineChart: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ľ.",
		invalidValueFormatForBoxPlot: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ľ.",
		invalidValueFormatForHistogram: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ľ.",
		invalidValueFormatForScatterPlot: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ľ.",
		invalidValueFormatForGauge: "ĺ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ľ.",
		mismatchAxisAndValueFormat: "ĺ_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ľ.",
		queryError: "ĺ_Failure to read input data____________________________ľ.",
		simpleError: "ĺ_Something went wrong______________________ľ."
	};
	var errors_t9n_sk = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_sk;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.sk-d0c8ce6a-4ac49322.js.map
