define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Keskiarvo",median:"Mediaani",sum:"Summa",discretePercentitle:"Irrallinen prosenttipiste",minimum:"Vähimmäisarvo",maximum:"Enimmäisarvo",variance:"Varianssi",count:"Määrä",aggregation:"${ statistics }/${ fieldName }",noAggregation:"Ei koostetta"};const defaultTitle="Kaavio";const countSeries="Laske sarjat";const xAxis="X-akseli";const notAvailable="Ei käytettävissä";const timeAggregationTypes={start:"Kiinnitä ensimmäiseen aineistopisteeseen",end:"Kiinnitä viimeiseen aineistopisteeseen"};const noDataMessage="Näytettävää aineistoa ei ole tyhjien aineistokenttien tai suodatinyhdistelmien takia.";const noDataFBSMessage="Å_Filter by selection is enabled. There are no selected features to display______________________________________ö.";const noDataFBEMessage="Å_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ö.";var common_t9n_fi={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_fi;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.fi-e96a6d07-e5915cc0.js.map
