define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "試_Invalid data_____________驗",
		invalidChart: "試_Invalid chart______________驗",
		noDataAvailable: "試_No data available to display_____________________________驗",
		tooManyFeatures: "試_Too many features__________________驗",
		cannotCombineNegativeAndPositiveSlices: "試_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________驗",
		error: "試_Error___________驗",
		warning: "試_Warning_______________驗",
		newChart: "試_New chart___________________驗"
	};
	const errors = {
		divNode: "試_Creating a chart requires an HTML div node_______________________驗.",
		errorRequest: "試_Please fix the following errors__________________驗: ",
		warningRequest: "試_Please address the following warnings_____________________驗: ",
		newChartRequest: "試_Configure chart_________________驗.",
		invalidValueFormatForLineChart: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________驗.",
		invalidValueFormatForBarChart: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________驗.",
		invalidValueFormatForComboBarLineChart: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________驗.",
		invalidValueFormatForBoxPlot: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________驗.",
		invalidValueFormatForHistogram: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________驗.",
		invalidValueFormatForScatterPlot: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________驗.",
		invalidValueFormatForGauge: "試_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________驗.",
		mismatchAxisAndValueFormat: "試_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________驗.",
		queryError: "試_Failure to read input data____________________________驗.",
		simpleError: "試_Something went wrong______________________驗."
	};
	var errors_t9n_zhTW = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_zhTW;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.zh-TW-c8efe4ce-c1a30bd0.js.map
