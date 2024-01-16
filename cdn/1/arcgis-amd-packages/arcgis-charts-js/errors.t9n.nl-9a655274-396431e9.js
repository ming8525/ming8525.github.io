define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "Ĳ_Invalid data_____________ä",
		invalidChart: "Ĳ_Invalid chart______________ä",
		noDataAvailable: "Ĳ_No data available to display_____________________________ä",
		tooManyFeatures: "Ĳ_Too many features__________________ä",
		cannotCombineNegativeAndPositiveSlices: "Ĳ_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________ä",
		error: "Ĳ_Error___________ä",
		warning: "Ĳ_Warning_______________ä",
		newChart: "Ĳ_New chart___________________ä"
	};
	const errors = {
		divNode: "Ĳ_Creating a chart requires an HTML div node_______________________ä.",
		errorRequest: "Ĳ_Please fix the following errors__________________ä: ",
		warningRequest: "Ĳ_Please address the following warnings_____________________ä: ",
		newChartRequest: "Ĳ_Configure chart_________________ä.",
		invalidValueFormatForLineChart: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________ä.",
		invalidValueFormatForBarChart: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________ä.",
		invalidValueFormatForComboBarLineChart: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________ä.",
		invalidValueFormatForBoxPlot: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________ä.",
		invalidValueFormatForHistogram: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________ä.",
		invalidValueFormatForScatterPlot: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________ä.",
		invalidValueFormatForGauge: "Ĳ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________ä.",
		mismatchAxisAndValueFormat: "Ĳ_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________ä.",
		queryError: "Ĳ_Failure to read input data____________________________ä.",
		simpleError: "Ĳ_Something went wrong______________________ä."
	};
	var errors_t9n_nl = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_nl;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.nl-9a655274-396431e9.js.map
