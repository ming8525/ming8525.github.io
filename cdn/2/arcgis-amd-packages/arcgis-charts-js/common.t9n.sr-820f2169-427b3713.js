define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Sredina",median:"Medijana",sum:"Zbir",discretePercentitle:"Diskretni percentil",minimum:"Minimum",maximum:"Maksimum",variance:"Odstupanje",count:"Broj",aggregation:"${ statistics } od ${ fieldName }",noAggregation:"Nema grupisanja"};const defaultTitle="Grafikon";const countSeries="Broj serija";const xAxis="X-osa";const notAvailable="Nije dostupno";const timeAggregationTypes={start:"Zakači za prvu tačku podataka",end:"Zakači za zadnju tačku podataka"};const noDataMessage="Podaci za prikazivanje nisu dostupni usled praznog/ih polja i/ili kombinacije filtera.";const noDataFBSMessage="Č_Filter by selection is enabled. There are no selected features to display______________________________________ž.";const noDataFBEMessage="Č_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ž.";var common_t9n_sr={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_sr;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.sr-820f2169-427b3713.js.map