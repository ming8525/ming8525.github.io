define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"평균",median:"중앙값",sum:"합계",discretePercentitle:"불연속 백분위수",minimum:"최소",maximum:"최대",variance:"변수",count:"개수",aggregation:"${ statistics }개 중 ${ fieldName }개",noAggregation:"집계 없음"};const defaultTitle="차트";const countSeries="시리즈 개수";const xAxis="X축";const notAvailable="사용할 수 없음";const timeAggregationTypes={start:"첫 번째 데이터 포인트로 스냅",end:"마지막 데이터 포인트로 스냅"};const noDataMessage="빈 데이터 필드 또는 필터 조합으로 인해 데이터를 표시할 수 없습니다.";const noDataFBSMessage="한_Filter by selection is enabled. There are no selected features to display______________________________________빠.";const noDataFBEMessage="한_Filter by extent is enabled. There are no features in the map extent to display_________________________________________빠.";var common_t9n_ko={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_ko;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.ko-4bf4db65-77a9c5d9.js.map
