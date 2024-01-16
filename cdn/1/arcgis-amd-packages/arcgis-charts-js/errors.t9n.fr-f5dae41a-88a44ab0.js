define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "æ_Invalid data_____________Â",
		invalidChart: "æ_Invalid chart______________Â",
		noDataAvailable: "æ_No data available to display_____________________________Â",
		tooManyFeatures: "æ_Too many features__________________Â",
		cannotCombineNegativeAndPositiveSlices: "æ_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________Â",
		error: "æ_Error___________Â",
		warning: "æ_Warning_______________Â",
		newChart: "æ_New chart___________________Â"
	};
	const errors = {
		divNode: "æ_Creating a chart requires an HTML div node_______________________Â.",
		errorRequest: "æ_Please fix the following errors__________________Â: ",
		warningRequest: "æ_Please address the following warnings_____________________Â: ",
		newChartRequest: "æ_Configure chart_________________Â.",
		invalidValueFormatForLineChart: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________Â.",
		invalidValueFormatForBarChart: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________Â.",
		invalidValueFormatForComboBarLineChart: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________Â.",
		invalidValueFormatForBoxPlot: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________Â.",
		invalidValueFormatForHistogram: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________Â.",
		invalidValueFormatForScatterPlot: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________Â.",
		invalidValueFormatForGauge: "æ_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________Â.",
		mismatchAxisAndValueFormat: "æ_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________Â.",
		queryError: "æ_Failure to read input data____________________________Â.",
		simpleError: "æ_Something went wrong______________________Â."
	};
	var errors_t9n_fr = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_fr;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.fr-f5dae41a-88a44ab0.js.map
