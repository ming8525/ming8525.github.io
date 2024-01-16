define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"平均值",median:"中位數",sum:"總和",discretePercentitle:"離散百分位數",minimum:"最小值",maximum:"最大值",variance:"變異",count:"計數",aggregation:"${ statistics }/${ fieldName }",noAggregation:"無匯聚"};const defaultTitle="圖表";const countSeries="計數序列";const xAxis="X 軸";const notAvailable="無法取得";const timeAggregationTypes={start:"貼齊至第一個資料點",end:"對齊至最後的資料點"};const noDataMessage="由於資料欄位空白和/或篩選器組合，因此無法顯示任何資料。";const noDataFBSMessage="試_Filter by selection is enabled. There are no selected features to display______________________________________驗.";const noDataFBEMessage="試_Filter by extent is enabled. There are no features in the map extent to display_________________________________________驗.";var common_t9n_zhTW={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_zhTW;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.zh-TW-5f82b717-d4d41f45.js.map
