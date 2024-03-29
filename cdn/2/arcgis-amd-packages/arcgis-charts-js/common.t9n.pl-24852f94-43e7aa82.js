define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Średnia",median:"Mediana",sum:"Suma",discretePercentitle:"Percentyl dyskretny",minimum:"Minimum",maximum:"Maksimum",variance:"Odchylenie",count:"Liczba",aggregation:"${ statistics } z ${ fieldName }",noAggregation:"Bez agregacji"};const defaultTitle="Wykres";const countSeries="Zlicz serie";const xAxis="Oś X";const notAvailable="Niedostępne";const timeAggregationTypes={start:"Dociągnij do pierwszego punktu danych",end:"Dociągnij do ostatniego punktu danych"};const noDataMessage="Nie są dostępne żadne dane do wyświetlenia z powodu pustych pól danych i/lub kombinacji filtrów.";const noDataFBSMessage="ł_Filter by selection is enabled. There are no selected features to display______________________________________ą.";const noDataFBEMessage="ł_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ą.";var common_t9n_pl={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_pl;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.pl-24852f94-43e7aa82.js.map
