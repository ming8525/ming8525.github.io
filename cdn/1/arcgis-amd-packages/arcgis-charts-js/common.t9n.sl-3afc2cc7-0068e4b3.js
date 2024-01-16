define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Srednja vrednost",median:"Mediana",sum:"Vsota",discretePercentitle:"Diskretni percentil",minimum:"Minimum",maximum:"Maksimum",variance:"Varianca",count:"Število",aggregation:"${ statistics } od ${ fieldName }",noAggregation:"Brez agregacije"};const defaultTitle="Grafikon";const countSeries="Števec nizov";const xAxis="Os X";const notAvailable="Ni na voljo";const timeAggregationTypes={start:"Privlači na prvo podatkovno točko",end:"Privlači na zadnjo podatkovno točko"};const noDataMessage="Ni podatkov za prikaz zaradi praznih podatkovnih polj in/ali kombinacije filtrov.";const noDataFBSMessage="Š_Filter by selection is enabled. There are no selected features to display______________________________________č.";const noDataFBEMessage="Š_Filter by extent is enabled. There are no features in the map extent to display_________________________________________č.";var common_t9n_sl={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_sl;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.sl-3afc2cc7-0068e4b3.js.map
