define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Среднее",median:"Медиана",sum:"Сумма",discretePercentitle:"Дискретный процентиль",minimum:"Минимум",maximum:"Максимум",variance:"Дисперсия",count:"Количество",aggregation:"${ statistics } из ${ fieldName }",noAggregation:"Без агрегирования"};const defaultTitle="Диаграмма";const countSeries="Серии чисел";const xAxis="Ось X";const notAvailable="Недоступно";const timeAggregationTypes={start:"Замкнуть на первую точку данных",end:"Замкнуть на последнюю точку данных"};const noDataMessage="Нет доступных для отображения данных, так как поля данных и/или комбинации фильтров пусты.";const noDataFBSMessage="Ж_Filter by selection is enabled. There are no selected features to display______________________________________Я.";const noDataFBEMessage="Ж_Filter by extent is enabled. There are no features in the map extent to display_________________________________________Я.";var common_t9n_ru={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_ru;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.ru-0b3c635b-34644b8a.js.map