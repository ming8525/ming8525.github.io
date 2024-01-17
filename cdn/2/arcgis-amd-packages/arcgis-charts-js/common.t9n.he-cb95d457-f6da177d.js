define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"ממוצע",median:"חציון",sum:"סכום",discretePercentitle:"אחוזונים בנפרד",minimum:"מינימום",maximum:"מקסימום",variance:"שונות",count:"מונה",aggregation:"${ statistics } מתוך ${ fieldName }",noAggregation:"ללא צבירה"};const defaultTitle="תרשים";const countSeries="ספירה בסדרה";const xAxis="ציר X";const notAvailable="לא זמין";const timeAggregationTypes={start:"הצמד לנקודת נתונים ראשונה",end:"הצמד לנקודת נתונים אחרונה"};const noDataMessage="אין נתונים זמינים להצגה עקב שדה/ות נתונים ריקים ו/או שילוב של מסננים.";const noDataFBSMessage="כן_Filter by selection is enabled. There are no selected features to display______________________________________ש.";const noDataFBEMessage="כן_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ש.";var common_t9n_he={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_he;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.he-cb95d457-f6da177d.js.map