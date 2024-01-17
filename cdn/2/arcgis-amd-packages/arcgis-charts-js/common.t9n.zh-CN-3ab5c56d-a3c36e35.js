define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"平均值",median:"中位数",sum:"总和",discretePercentitle:"离散百分比数",minimum:"最小值",maximum:"最大值",variance:"方差",count:"计数",aggregation:"第 ${ statistics } 页，共 ${ fieldName } 页",noAggregation:"无聚合"};const defaultTitle="图表";const countSeries="技术序列";const xAxis="X 轴";const notAvailable="不可用";const timeAggregationTypes={start:"捕捉到第一个数据点",end:"捕捉到最后一个数据点"};const noDataMessage="由于数据字段和/或过滤器组合为空，因此无法显示任何数据。";const noDataFBSMessage="试_Filter by selection is enabled. There are no selected features to display______________________________________验.";const noDataFBEMessage="试_Filter by extent is enabled. There are no features in the map extent to display_________________________________________验.";var common_t9n_zhCN={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_zhCN;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.zh-CN-3ab5c56d-a3c36e35.js.map