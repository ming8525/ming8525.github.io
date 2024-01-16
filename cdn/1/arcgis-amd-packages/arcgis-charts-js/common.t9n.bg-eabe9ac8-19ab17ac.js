define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Осреднена стойност",median:"Медиана",sum:"Сума",discretePercentitle:"Дискретен перцентил",minimum:"Минимални",maximum:"Максимални",variance:"Отклонение",count:"Брой",aggregation:"${ statistics } от ${ fieldName }",noAggregation:"Няма агрегиране"};const defaultTitle="Диаграма";const countSeries="Серия за броене";const xAxis="Ос Х";const notAvailable="Няма налични";const timeAggregationTypes={start:"Притеглете до първата точка от данни",end:"Притеглете до последната точка от данни"};const noDataMessage="Няма налични данни за показване поради празно(и) поле(та) за данни и/или комбинация от филтри.";const noDataFBSMessage="й_Filter by selection is enabled. There are no selected features to display______________________________________й.";const noDataFBEMessage="й_Filter by extent is enabled. There are no features in the map extent to display_________________________________________й.";var common_t9n_bg={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_bg;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.bg-eabe9ac8-19ab17ac.js.map
