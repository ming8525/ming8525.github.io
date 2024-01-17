define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Middel",median:"Median",sum:"Sum",discretePercentitle:"Særskilt percentil",minimum:"Minimum",maximum:"Maksimum",variance:"Varians",count:"Tælling",aggregation:"${ statistics } for ${ fieldName }",noAggregation:"Ingen aggregering"};const defaultTitle="Diagram";const countSeries="Tællerække";const xAxis="X-akse";const notAvailable="Ikke tilgængelig";const timeAggregationTypes={start:"Fastgør til det første datapunkt",end:"Fastgør til det sidste datapunkt"};const noDataMessage="Der er ingen data at vise på grund af tomme datafelter og/eller kombinationen af filtre.";const noDataFBSMessage="ø_Filter by selection is enabled. There are no selected features to display______________________________________å.";const noDataFBEMessage="ø_Filter by extent is enabled. There are no features in the map extent to display_________________________________________å.";var common_t9n_da={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_da;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.da-e2b7a069-555f52d4.js.map