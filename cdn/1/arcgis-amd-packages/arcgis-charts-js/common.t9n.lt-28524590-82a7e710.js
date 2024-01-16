define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Vidurkis",median:"Mediana",sum:"Suma",discretePercentitle:"Diskretinis procentilis",minimum:"Minimumas",maximum:"Maksimumas",variance:"Nuokrypis",count:"Bendras skaičius",aggregation:"${ statistics } iš ${ fieldName }",noAggregation:"Be agregavimo"};const defaultTitle="Diagrama";const countSeries="Skaičių serija";const xAxis="X ašis";const notAvailable="Negalima";const timeAggregationTypes={start:"Pritraukti pirmą duomenų tašką",end:"Pritraukti paskutinį duomenų tašką"};const noDataMessage="Nėra rodytinų duomenų dėl tuščio (-ų) duomenų lauko (-ų) ir (arba) filtrų derinio.";const noDataFBSMessage="Į_Filter by selection is enabled. There are no selected features to display______________________________________š.";const noDataFBEMessage="Į_Filter by extent is enabled. There are no features in the map extent to display_________________________________________š.";var common_t9n_lt={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_lt;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.lt-28524590-82a7e710.js.map
