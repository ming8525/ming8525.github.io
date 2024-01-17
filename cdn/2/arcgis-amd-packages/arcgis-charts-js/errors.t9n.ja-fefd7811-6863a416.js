define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "須_Invalid data_____________鷗",
		invalidChart: "須_Invalid chart______________鷗",
		noDataAvailable: "須_No data available to display_____________________________鷗",
		tooManyFeatures: "須_Too many features__________________鷗",
		cannotCombineNegativeAndPositiveSlices: "須_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________鷗",
		error: "須_Error___________鷗",
		warning: "須_Warning_______________鷗",
		newChart: "須_New chart___________________鷗"
	};
	const errors = {
		divNode: "須_Creating a chart requires an HTML div node_______________________鷗.",
		errorRequest: "須_Please fix the following errors__________________鷗: ",
		warningRequest: "須_Please address the following warnings_____________________鷗: ",
		newChartRequest: "須_Configure chart_________________鷗.",
		invalidValueFormatForLineChart: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________鷗.",
		invalidValueFormatForBarChart: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________鷗.",
		invalidValueFormatForComboBarLineChart: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________鷗.",
		invalidValueFormatForBoxPlot: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________鷗.",
		invalidValueFormatForHistogram: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________鷗.",
		invalidValueFormatForScatterPlot: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________鷗.",
		invalidValueFormatForGauge: "須_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________鷗.",
		mismatchAxisAndValueFormat: "須_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________鷗.",
		queryError: "須_Failure to read input data____________________________鷗.",
		simpleError: "須_Something went wrong______________________鷗."
	};
	var errors_t9n_ja = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_ja;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.ja-fefd7811-6863a416.js.map
