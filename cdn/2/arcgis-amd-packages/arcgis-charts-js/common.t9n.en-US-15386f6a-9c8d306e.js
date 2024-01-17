define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Mean",median:"Median",sum:"Sum",discretePercentitle:"Discrete percentile",minimum:"Minimum",maximum:"Maximum",variance:"Variance",count:"Count",aggregation:"${ statistics } of ${ fieldName }",noAggregation:"No aggregation"};const defaultTitle="Chart";const countSeries="Count Series";const xAxis="X Axis";const notAvailable="Not Available";const timeAggregationTypes={start:"Snap to the first data point",end:"Snap to the last data point"};const noDataMessage="No data is available to display due to empty data field(s) and/or combination of filters.";const noDataFBSMessage="Filter by selection is enabled. There are no selected features to display.";const noDataFBEMessage="Filter by extent is enabled. There are no features in the map extent to display.";var common_t9n_enUS={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_enUS;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.en-US-15386f6a-9c8d306e.js.map