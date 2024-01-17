define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Priemer",median:"Medián",sum:"Súčet",discretePercentitle:"Diskrétny percentil",minimum:"Minimum",maximum:"Maximum",variance:"Rozptyl",count:"Počet",aggregation:"${ statistics } z ${ fieldName }",noAggregation:"Bez agregácie"};const defaultTitle="Graf";const countSeries="Počet sérií";const xAxis="Os X";const notAvailable="Nie je k dispozícii";const timeAggregationTypes={start:"Prichytiť k prvému dátovému bodu",end:"Prichytiť k poslednému dátovému bodu"};const noDataMessage="Nie sú dostupné žiadne dáta na zobrazenie z dôvodu prázdnych dátových polí a/alebo kombinácie filtrov.";const noDataFBSMessage="ĺ_Filter by selection is enabled. There are no selected features to display______________________________________ľ.";const noDataFBEMessage="ĺ_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ľ.";var common_t9n_sk={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_sk;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.sk-44981224-d30664b6.js.map