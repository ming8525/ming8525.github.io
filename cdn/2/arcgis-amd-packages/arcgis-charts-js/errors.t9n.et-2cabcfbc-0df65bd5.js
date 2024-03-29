define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Š_Invalid data_____________ä",
		invalidChart: "Š_Invalid chart______________ä",
		noDataAvailable: "Š_No data available to display_____________________________ä",
		tooManyFeatures: "Š_Too many features__________________ä",
		cannotCombineNegativeAndPositiveSlices: "Š_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ä",
		error: "Š_Error___________ä",
		warning: "Š_Warning_______________ä",
		newChart: "Š_New chart___________________ä"
	};
	const errors = {
		divNode: "Š_Creating a chart requires an HTML div node_______________________ä.",
		errorRequest: "Š_Please fix the following errors__________________ä: ",
		warningRequest: "Š_Please address the following warnings_____________________ä: ",
		newChartRequest: "Š_Configure chart_________________ä.",
		invalidValueFormatForLineChart: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ä.",
		invalidValueFormatForBarChart: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ä.",
		invalidValueFormatForComboBarLineChart: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ä.",
		invalidValueFormatForBoxPlot: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ä.",
		invalidValueFormatForHistogram: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ä.",
		invalidValueFormatForScatterPlot: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ä.",
		invalidValueFormatForGauge: "Š_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ä.",
		mismatchAxisAndValueFormat: "Š_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ä.",
		queryError: "Š_Failure to read input data____________________________ä.",
		simpleError: "Š_Something went wrong______________________ä."
	};
	var errors_t9n_et = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_et;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.et-2cabcfbc-0df65bd5.js.map
