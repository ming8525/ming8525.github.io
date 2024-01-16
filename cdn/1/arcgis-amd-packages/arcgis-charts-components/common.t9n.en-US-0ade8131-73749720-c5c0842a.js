define(["exports"],(function(exports){"use strict";
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See LICENSE.md for details.
	 * v1.0.0-beta.703
	 */const statistics={mean:"Mean",median:"Median",sum:"Sum",discretePercentitle:"Discrete percentile",minimum:"Minimum",maximum:"Maximum",firstQuartile:"First quartile",thirdQuartile:"Third quartile",iqr:"IQR",standardDeviation:"Standard deviation",variance:"Variance",count:"Count",aggregation:"${ statistics } of ${ fieldName }",percent:"Percent",noAggregation:"No aggregation"};const overlays={mean:"Mean",median:"Median",stdDev:"Standard Deviation",normal:"Normal Distribution",trendline:"Trendline"};const guideTooltipLabel="From ${ guideStart } to ${ guideEnd }";const pieChart={defaultSliceGroupingLabel:"Other"};const notAvailable="Not Available";const field="Field";var common_t9n_enUS={statistics,overlays,guideTooltipLabel,pieChart,notAvailable,field};exports["default"]=common_t9n_enUS;exports.field=field;exports.guideTooltipLabel=guideTooltipLabel;exports.notAvailable=notAvailable;exports.overlays=overlays;exports.pieChart=pieChart;exports.statistics=statistics}));
