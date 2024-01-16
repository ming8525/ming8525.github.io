define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Průměr",median:"Medián",sum:"Suma",discretePercentitle:"Diskrétní percentil",minimum:"Minimum",maximum:"Maximum",variance:"Rozptyl",count:"Počet",aggregation:"${ statistics } z ${ fieldName }",noAggregation:"Žádná agregace"};const defaultTitle="Graf";const countSeries="Počet sérií";const xAxis="Osa X";const notAvailable="Není k dispozici";const timeAggregationTypes={start:"Přichytit k prvnímu datovému bodu",end:"Přichytit k poslednímu datovému bodu"};const noDataMessage="V důsledku prázdných datových polí a/nebo kombinace filtrů nejsou k dispozici žádná data k zobrazení.";const noDataFBSMessage="Ř_Filter by selection is enabled. There are no selected features to display______________________________________ů.";const noDataFBEMessage="Ř_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ů.";var common_t9n_cs={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_cs;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.cs-231444b2-e75547b5.js.map
