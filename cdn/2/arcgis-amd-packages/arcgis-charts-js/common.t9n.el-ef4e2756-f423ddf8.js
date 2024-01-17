define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Μέσος όρος",median:"Διάμεσο",sum:"Άθροισμα",discretePercentitle:"Διακριτό ποσοστημόριο",minimum:"Ελάχιστο",maximum:"Μέγιστο",variance:"Διακύμανση",count:"Πλήθος",aggregation:"${ statistics } από ${ fieldName }",noAggregation:"Δεν υπάρχει συνάθροιση"};const defaultTitle="Γράφημα";const countSeries="Σειρά μέτρησης";const xAxis="Άξονας Χ";const notAvailable="Μη διαθέσιμο";const timeAggregationTypes={start:"Συνδεθείτε με το πρώτο σημείο δεδομένων",end:"Συνδεθείτε με το τελευταίο σημείο δεδομένων"};const noDataMessage="Δεν υπάρχουν διαθέσιμα δεδομένα για εμφάνιση λόγω κενών πεδίων δεδομένων ή/και συνδυασμού φίλτρων.";const noDataFBSMessage="π_Filter by selection is enabled. There are no selected features to display______________________________________Ω.";const noDataFBEMessage="π_Filter by extent is enabled. There are no features in the map extent to display_________________________________________Ω.";var common_t9n_el={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_el;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.el-ef4e2756-f423ddf8.js.map