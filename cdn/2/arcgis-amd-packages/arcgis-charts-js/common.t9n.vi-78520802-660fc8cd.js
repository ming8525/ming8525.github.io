define(['exports'], (function (exports) { 'use strict';

	const statistics={mean:"Trung bình",median:"Bình quân",sum:"Tổng",discretePercentitle:"Phân vị rời rạc",minimum:"Tối thiểu",maximum:"Tối đa",variance:"Phương sai",count:"Số lượng",aggregation:"${ statistics } / ${ fieldName }",noAggregation:"Không tổng hợp"};const defaultTitle="Biểu đồ";const countSeries="Đếm Số chuỗi";const xAxis="Trục X";const notAvailable="Không Khả dụng";const timeAggregationTypes={start:"Chuyển sang điểm dữ liệu đầu tiên",end:"Chuyển sang điểm dữ liệu cuối cùng"};const noDataMessage="Không có dữ liệu để hiển thị do (các) trường dữ liệu trống và/hoặc do sự kết hợp giữa các bộ lọc.";const noDataFBSMessage="Đ_Filter by selection is enabled. There are no selected features to display______________________________________ớ.";const noDataFBEMessage="Đ_Filter by extent is enabled. There are no features in the map extent to display_________________________________________ớ.";var common_t9n_vi={statistics,defaultTitle,countSeries,xAxis,notAvailable,timeAggregationTypes,noDataMessage,noDataFBSMessage,noDataFBEMessage};

	exports.countSeries = countSeries;
	exports["default"] = common_t9n_vi;
	exports.defaultTitle = defaultTitle;
	exports.noDataFBEMessage = noDataFBEMessage;
	exports.noDataFBSMessage = noDataFBSMessage;
	exports.noDataMessage = noDataMessage;
	exports.notAvailable = notAvailable;
	exports.statistics = statistics;
	exports.timeAggregationTypes = timeAggregationTypes;
	exports.xAxis = xAxis;

}));
//# sourceMappingURL=common.t9n.vi-78520802-660fc8cd.js.map