define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Prosjek",median:"Srednja vrijednost",sum:"Zbroj",discretePercentitle:"Diskretni postotak",minimum:"Minimum",maximum:"Maksimum",variance:"Varijanca",count:"Zbroj",aggregation:"${ statistics } od ${ fieldName }",noAggregation:"Nema agregacije"};const defaultTitle="Grafikon";const countSeries="Broj serija";const xAxis="Os x";const notAvailable="Nije dostupno";const timeAggregationTypes={start:"Prilijepi na prvu podatkovnu točku",end:"Prilijepi na posljednju podatkovnu točku"};const noDataMessage="Nema dostupnih podataka za prikaz zbog praznih polja podataka i/ili kombinacije filtara.";const noDataFBSMessage="Č_Filter by selection is enabled. There are no selected features to display______________________________________ž.";const noDataFBEMessage="Č_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ž.";var common_t9n_hr={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_hr;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.hr-2b6f0b55-b1ac652d.js.map