define(['exports'], (function (exports) { 'use strict';

	const defaultError="Đã xảy ra lỗi khi tải biểu đồ.";const uniqueSeriesBarCountCannotExceedLimit="Có tổng cộng ${ elementCount } cột trong biểu đồ này. Biểu đồ dạng thanh có một chuỗi giới hạn đến ${ totalLimit } thanh. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const twoSeriesBarCountCannotExceedLimit="Biểu đồ thanh có hai chuỗi giới hạn đến ${ totalLimit } thanh hoặc ${ seriesLimit } thanh mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const threePlusSeriesBarCountCannotExceedLimit="Biểu đồ thanh có ba chuỗi trở lên giới hạn đến ${ totalLimit } thanh hoặc ${ seriesLimit } thanh mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const barSeriesCountCannotExceedLimit="Biểu đồ thanh bị giới hạn ${ seriesLimit } chuỗi. Chọn trường chia theo có ít giá trị duy nhất hơn";const defaultInvalidChart="Đã xảy ra lỗi khi tạo biểu đồ.";const negativeValueInDataForLogTransformation="Không thể áp dụng phép biến đổi log lên giá trị âm hoặc bằng không.";const negativeValueInDataForSqrtTransformation="Không thể áp dụng phép biến đổi căn bậc hai lên giá trị âm.";const layerLoadFailure="Đã xảy ra lỗi khi tải lớp. URL = ${ url }. ID mục cổng thông tin = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } phải là duy nhất. Chuỗi có tên ${ seriesName } có một ID (${ seriesID }) đã được chuỗi khác sử dụng.";const nonNumericAggregation="${ dataPath } không thể thực hiện tổng hợp không đếm trên trường không phải là số.";const requiredProperty="${ dataPath } đang thiếu một tên phù hợp ${ missingProperty }.";const minLength="${ dataPath } không được ngắn hơn ${ limit } ký tự.";const minItems="${ dataPath } không được chứa dưới ${ limit } mục.";const maxItems="${ dataPath } không được chứa nhiều hơn ${ limit } mục.";const whiteSpacePattern="${ dataPath } phải chứa ít nhất một ký tự không phải khoảng trắng.";const additionalProperty="${ dataPath } không được chứa ${ additionalProperty }.";const enumValues="${ dataPath } phải bằng một trong những giá trị được phép này: ${ allowedValues }.";const anyOfValues="${ dataPath } phải khớp với lược đồ của một trong những thứ sau: ${ schemaOptions }.";const bubbleChartValidateMsg="Biểu đồ phân tán có ký hiệu tỷ lệ không được hỗ trợ. Đã áp dụng kích cỡ ký hiệu theo mặc định.";const queryError="Không thể đọc dữ liệu đầu vào.";const histogramEmptyField="Biểu đồ tần số yêu cầu ít nhất hai giá trị số khác nhau.";const invalidSeriesType="Loại chuỗi mong đợi tại chỉ mục ${ seriesIndex } là '${ expectedType }' nhưng thay vào đó lại nhận được '${ receivedType }'";const or="hoặc";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Đảm bảo tổng cộng của (các) trường dạng số đã chọn trả về tất cả các giá trị dương hoặc tất cả các giá trị âm.";const pieChartSlicesCannotExceedLimit="Có tổng cộng ${ sliceCount } lát cắt trong biểu đồ này. Biểu đồ hình tròn bị giới hạn ${ totalLimit } lát cắt. Chọn trường Danh mục có ít giá trị duy nhất hơn, thêm ít trường Số hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const gaugeCannotExceedLimit="Đồng hồ đo dựa trên đối tượng được giới hạn ở ${ totalLimit } đối tượng. Lọc dữ liệu của bạn.";const uniqueSeriesLineCountCannotExceedLimit="Có tổng cộng ${ elementCount } vạch trong biểu đồ này. Biểu đồ đường có một chuỗi giới hạn đến ${ totalLimit } vạch. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const twoSeriesLineCountCannotExceedLimit="Biểu đồ đường có hai chuỗi giới hạn đến ${ totalLimit } vạch hoặc ${ seriesLimit } vạch mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const threePlusSeriesLineCountCannotExceedLimit="Biểu đồ đường có ba chuỗi trở lên giới hạn đến ${ totalLimit } vạch hoặc ${ seriesLimit } vạch mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const lineSeriesCountCannotExceedLimit="Biểu đồ đường bị giới hạn ${ seriesLimit } chuỗi. Chọn trường chia theo có ít giá trị duy nhất hơn";const uniqueSeriesBoxCountCannotExceedLimit="Có tổng cộng ${ elementCount } hộp trong biểu đồ này. Biểu đồ hộp có một chuỗi được giới hạn đến ${ totalLimit } hộp. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const twoSeriesBoxCountCannotExceedLimit="Biểu đồ hộp có hai chuỗi giới hạn đến ${ totalLimit } hộp hoặc ${ seriesLimit } hộp mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const threePlusBoxLineCountCannotExceedLimit="Biểu đồ hộp có ba chuỗi giới hạn đến ${ totalLimit } hộp hoặc ${ seriesLimit } hộp mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.";const boxSeriesCountCannotExceedLimit="Biểu đồ hộp bị giới hạn đến ${ seriesLimit } chuỗi. Chọn trường chia theo có ít giá trị duy nhất hơn";const boxSeriesOutlierCannotExceedLimit="Biểu đồ hộp chỉ có thể hiển thị tối đa ${ totalLimit } điểm ngoại lệ. Lọc dữ liệu.";var errors_t9n_vi={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_vi;
	exports.defaultError = defaultError;
	exports.defaultInvalidChart = defaultInvalidChart;
	exports.duplicateSeriesID = duplicateSeriesID;
	exports.enumValues = enumValues;
	exports.gaugeCannotExceedLimit = gaugeCannotExceedLimit;
	exports.histogramEmptyField = histogramEmptyField;
	exports.invalidSeriesType = invalidSeriesType;
	exports.layerLoadFailure = layerLoadFailure;
	exports.lineSeriesCountCannotExceedLimit = lineSeriesCountCannotExceedLimit;
	exports.maxItems = maxItems;
	exports.minItems = minItems;
	exports.minLength = minLength;
	exports.negativeValueInDataForLogTransformation = negativeValueInDataForLogTransformation;
	exports.negativeValueInDataForSqrtTransformation = negativeValueInDataForSqrtTransformation;
	exports.nonNumericAggregation = nonNumericAggregation;
	exports.or = or;
	exports.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices = pieChartCannotHaveMixtureOfPositiveAndNegativeSlices;
	exports.pieChartSlicesCannotExceedLimit = pieChartSlicesCannotExceedLimit;
	exports.queryError = queryError;
	exports.requiredProperty = requiredProperty;
	exports.threePlusBoxLineCountCannotExceedLimit = threePlusBoxLineCountCannotExceedLimit;
	exports.threePlusSeriesBarCountCannotExceedLimit = threePlusSeriesBarCountCannotExceedLimit;
	exports.threePlusSeriesLineCountCannotExceedLimit = threePlusSeriesLineCountCannotExceedLimit;
	exports.twoSeriesBarCountCannotExceedLimit = twoSeriesBarCountCannotExceedLimit;
	exports.twoSeriesBoxCountCannotExceedLimit = twoSeriesBoxCountCannotExceedLimit;
	exports.twoSeriesLineCountCannotExceedLimit = twoSeriesLineCountCannotExceedLimit;
	exports.uniqueSeriesBarCountCannotExceedLimit = uniqueSeriesBarCountCannotExceedLimit;
	exports.uniqueSeriesBoxCountCannotExceedLimit = uniqueSeriesBoxCountCannotExceedLimit;
	exports.uniqueSeriesLineCountCannotExceedLimit = uniqueSeriesLineCountCannotExceedLimit;
	exports.whiteSpacePattern = whiteSpacePattern;

}));
//# sourceMappingURL=errors.t9n.vi-31be663f-ca9fb5bb-149db289.js.map
