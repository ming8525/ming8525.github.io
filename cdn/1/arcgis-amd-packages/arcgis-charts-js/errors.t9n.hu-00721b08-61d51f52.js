define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "í_Invalid data_____________ő",
		invalidChart: "í_Invalid chart______________ő",
		noDataAvailable: "í_No data available to display_____________________________ő",
		tooManyFeatures: "í_Too many features__________________ő",
		cannotCombineNegativeAndPositiveSlices: "í_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ő",
		error: "í_Error___________ő",
		warning: "í_Warning_______________ő",
		newChart: "í_New chart___________________ő"
	};
	const errors = {
		divNode: "í_Creating a chart requires an HTML div node_______________________ő.",
		errorRequest: "í_Please fix the following errors__________________ő: ",
		warningRequest: "í_Please address the following warnings_____________________ő: ",
		newChartRequest: "í_Configure chart_________________ő.",
		invalidValueFormatForLineChart: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ő.",
		invalidValueFormatForBarChart: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ő.",
		invalidValueFormatForComboBarLineChart: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ő.",
		invalidValueFormatForBoxPlot: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ő.",
		invalidValueFormatForHistogram: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ő.",
		invalidValueFormatForScatterPlot: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ő.",
		invalidValueFormatForGauge: "í_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ő.",
		mismatchAxisAndValueFormat: "í_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ő.",
		queryError: "í_Failure to read input data____________________________ő.",
		simpleError: "í_Something went wrong______________________ő."
	};
	var errors_t9n_hu = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_hu;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.hu-00721b08-61d51f52.js.map
