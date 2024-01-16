define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Moyenne",median:"Médiane",sum:"Somme",discretePercentitle:"Centile discret",minimum:"Minimum",maximum:"Maximum",variance:"Variance",count:"Total",aggregation:"${ statistics } de ${ fieldName }",noAggregation:"Pas d’agrégation"};const defaultTitle="Diagramme";const countSeries="Série de nombres";const xAxis="Axe X";const notAvailable="Non disponible";const timeAggregationTypes={start:"Capturer sur le premier point de données",end:"Capturer sur le dernier point de données"};const noDataMessage="Aucune donnée ne peut être affichée en raison de champ(s) de données vide(s) et/ou de la combinaison de filtres.";const noDataFBSMessage="æ_Filter by selection is enabled. There are no selected features to display______________________________________Â.";const noDataFBEMessage="æ_Filter by extent is enabled. There are no features in the map extent to display_________________________________________Â.";var common_t9n_fr={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_fr;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.fr-2169090f-5dd73068.js.map
