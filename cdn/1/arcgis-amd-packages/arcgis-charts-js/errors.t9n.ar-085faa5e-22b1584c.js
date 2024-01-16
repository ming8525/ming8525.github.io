define(['exports'], (function (exports) { 'use strict';

	const modalHeaders = {
		invalidData: "بيت_Invalid data_____________لاحقة",
		invalidChart: "بيت_Invalid chart______________لاحقة",
		noDataAvailable: "بيت_No data available to display_____________________________لاحقة",
		tooManyFeatures: "بيت_Too many features__________________لاحقة",
		cannotCombineNegativeAndPositiveSlices: "بيت_Pie charts cannot combine slices with positive values to slices with negative values___________________________________________لاحقة",
		error: "بيت_Error___________لاحقة",
		warning: "بيت_Warning_______________لاحقة",
		newChart: "بيت_New chart___________________لاحقة"
	};
	const errors = {
		divNode: "بيت_Creating a chart requires an HTML div node_______________________لاحقة.",
		errorRequest: "بيت_Please fix the following errors__________________لاحقة: ",
		warningRequest: "بيت_Please address the following warnings_____________________لاحقة: ",
		newChartRequest: "بيت_Configure chart_________________لاحقة.",
		invalidValueFormatForLineChart: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the line chart y-axis______________________________________________لاحقة.",
		invalidValueFormatForBarChart: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar chart y-axis_____________________________________________لاحقة.",
		invalidValueFormatForComboBarLineChart: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the bar-line chart y-axis, and category and date types on the x-axis_____________________________________________________________________لاحقة.",
		invalidValueFormatForBoxPlot: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the box plot y-axis, and category and date types on the x-axis__________________________________________________________________لاحقة.",
		invalidValueFormatForHistogram: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the histogram axes____________________________________________لاحقة.",
		invalidValueFormatForScatterPlot: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the scatter plot axes______________________________________________لاحقة.",
		invalidValueFormatForGauge: "بيت_The axis 'valueFormat' is invalid. Only numeric type is allowed on the gauge________________________________________لاحقة.",
		mismatchAxisAndValueFormat: "بيت_There's a mismatch between the axis type and the axis 'valueFormat'___________________________________لاحقة.",
		queryError: "بيت_Failure to read input data____________________________لاحقة.",
		simpleError: "بيت_Something went wrong______________________لاحقة."
	};
	var errors_t9n_ar = {
		modalHeaders: modalHeaders,
		errors: errors
	};

	exports["default"] = errors_t9n_ar;
	exports.errors = errors;
	exports.modalHeaders = modalHeaders;

}));
//# sourceMappingURL=errors.t9n.ar-085faa5e-22b1584c.js.map
