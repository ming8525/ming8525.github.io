define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "ã_Invalid data_____________Ç",
		invalidChart: "ã_Invalid chart______________Ç",
		noDataAvailable: "ã_No data available to display_____________________________Ç",
		tooManyFeatures: "ã_Too many features__________________Ç",
		cannotCombineNegativeAndPositiveSlices: "ã_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________Ç",
		error: "ã_Error___________Ç",
		warning: "ã_Warning_______________Ç",
		newChart: "ã_New chart___________________Ç"
	};
	const errors = {
		divNode: "ã_Creating a chart requires an HTML div node_______________________Ç.",
		errorRequest: "ã_Please fix the following errors__________________Ç: ",
		warningRequest: "ã_Please address the following warnings_____________________Ç: ",
		newChartRequest: "ã_Configure chart_________________Ç.",
		invalidValueFormatForLineChart: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________Ç.",
		invalidValueFormatForBarChart: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________Ç.",
		invalidValueFormatForComboBarLineChart: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________Ç.",
		invalidValueFormatForBoxPlot: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________Ç.",
		invalidValueFormatForHistogram: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________Ç.",
		invalidValueFormatForScatterPlot: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________Ç.",
		invalidValueFormatForGauge: "ã_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________Ç.",
		mismatchAxisAndValueFormat: "ã_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________Ç.",
		queryError: "ã_Failure to read input data____________________________Ç.",
		simpleError: "ã_Something went wrong______________________Ç."
	};
	var errors_t9n_ptPT = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_ptPT;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.pt-PT-be5747a8-5b4c3d2d.js.map
