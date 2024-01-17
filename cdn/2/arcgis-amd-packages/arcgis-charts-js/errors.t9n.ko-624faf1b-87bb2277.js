define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "한_Invalid data_____________빠",
		invalidChart: "한_Invalid chart______________빠",
		noDataAvailable: "한_No data available to display_____________________________빠",
		tooManyFeatures: "한_Too many features__________________빠",
		cannotCombineNegativeAndPositiveSlices: "한_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________빠",
		error: "한_Error___________빠",
		warning: "한_Warning_______________빠",
		newChart: "한_New chart___________________빠"
	};
	const errors = {
		divNode: "한_Creating a chart requires an HTML div node_______________________빠.",
		errorRequest: "한_Please fix the following errors__________________빠: ",
		warningRequest: "한_Please address the following warnings_____________________빠: ",
		newChartRequest: "한_Configure chart_________________빠.",
		invalidValueFormatForLineChart: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________빠.",
		invalidValueFormatForBarChart: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________빠.",
		invalidValueFormatForComboBarLineChart: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________빠.",
		invalidValueFormatForBoxPlot: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________빠.",
		invalidValueFormatForHistogram: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________빠.",
		invalidValueFormatForScatterPlot: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________빠.",
		invalidValueFormatForGauge: "한_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________빠.",
		mismatchAxisAndValueFormat: "한_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________빠.",
		queryError: "한_Failure to read input data____________________________빠.",
		simpleError: "한_Something went wrong______________________빠."
	};
	var errors_t9n_ko = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_ko;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.ko-624faf1b-87bb2277.js.map
