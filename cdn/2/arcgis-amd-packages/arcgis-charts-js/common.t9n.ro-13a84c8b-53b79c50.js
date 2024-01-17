define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Medie",median:"Mediană",sum:"Sumă",discretePercentitle:"Percentilă discretă",minimum:"Minim",maximum:"Maxim",variance:"Variaţie",count:"Număr",aggregation:"${ statistics } din ${ fieldName }",noAggregation:"Fără însumare"};const defaultTitle="Diagramă";const countSeries="Serie sumă";const xAxis="Axa X";const notAvailable="Indisponibil";const timeAggregationTypes={start:"Fixare la primul punct de date",end:"Fixare la ultimul punct de date"};const noDataMessage="Nu există date disponibile pentru afișare deoarece câmpul (câmpurile) de date sau combinația de filtre sunt goale.";const noDataFBSMessage="Ă_Filter by selection is enabled. There are no selected features to display______________________________________ș.";const noDataFBEMessage="Ă_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ș.";var common_t9n_ro={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_ro;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.ro-13a84c8b-53b79c50.js.map