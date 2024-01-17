define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Vidējais",median:"Mediāna",sum:"Summa",discretePercentitle:"Diskrētā procentīle",minimum:"Minimums",maximum:"Maksimums",variance:"Novirze",count:"Skaits",aggregation:"${ statistics } no ${ fieldName }",noAggregation:"Bez apkopošanas"};const defaultTitle="Diagramma";const countSeries="Sēriju uzskaite";const xAxis="X ass";const notAvailable="Nav pieejams";const timeAggregationTypes={start:"Pielipināt pie pirmā datu punkta",end:"Pielipināt pie pēdējā datu punkta"};const noDataMessage="Nav pieejami dati, ko varētu parādīt, jo datu lauks(-i) un/vai filtru kombinācija ir tukša(-i).";const noDataFBSMessage="ķ_Filter by selection is enabled. There are no selected features to display______________________________________ū.";const noDataFBEMessage="ķ_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ū.";var common_t9n_lv={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_lv;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.lv-e60cde8b-35700ab4.js.map
