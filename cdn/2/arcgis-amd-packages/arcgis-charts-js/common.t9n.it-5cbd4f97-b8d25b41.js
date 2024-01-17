define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Media",median:"Mediana",sum:"Somma",discretePercentitle:"Percentile discreto",minimum:"Minimo",maximum:"Massimo",variance:"Varianza",count:"Conteggio",aggregation:"${ statistics } di ${ fieldName }",noAggregation:"Nessuna aggregazione"};const defaultTitle="Grafico";const countSeries="Serie Conteggio";const xAxis="Asse X";const notAvailable="Non disponibile";const timeAggregationTypes={start:"Snap al primo punto dati",end:"Snap al punto dati finale"};const noDataMessage="Nessun dato disponibile da visualizzare a causa di campo di dati vuoti e/o una combinazione di filtri.";const noDataFBSMessage="é_Filter by selection is enabled. There are no selected features to display______________________________________È.";const noDataFBEMessage="é_Filter by extent is enabled. There are no features in the map extent to display_________________________________________È.";var common_t9n_it={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_it;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.it-5cbd4f97-b8d25b41.js.map