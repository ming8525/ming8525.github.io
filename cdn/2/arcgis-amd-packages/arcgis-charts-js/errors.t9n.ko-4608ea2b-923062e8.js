define(['exports'], (function (exports) { 'use strict';

	const defaultError="차트를 불러오는 동안 오류가 발생했습니다.";const uniqueSeriesBarCountCannotExceedLimit="해당 차트에는 총 ${ elementCount }개의 막대가 있습니다. 1개의 시리즈가 있는 막대형 차트가 ${ totalLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const twoSeriesBarCountCannotExceedLimit="2개의 계열이 있는 막대형 차트가 ${ totalLimit }개의 막대 또는 계열당 ${ seriesLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const threePlusSeriesBarCountCannotExceedLimit="3개 이상의 계열이 있는 막대형 차트가 ${ totalLimit }개의 막대 또는 계열당 ${ seriesLimit }개의 막대로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const barSeriesCountCannotExceedLimit="가로 차트의 시리즈는 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 분할 기준 필드 선택";const defaultInvalidChart="차트를 생성하는 동안 오류가 발생했습니다.";const negativeValueInDataForLogTransformation="로그 변환을 음수 값 또는 0 값에 적용할 수 없습니다.";const negativeValueInDataForSqrtTransformation="제곱근 변환을 음수 값에 적용할 수 없습니다.";const layerLoadFailure="레이어를 불러오는 동안 오류가 발생했습니다. URL = ${ url }. 포털 항목 ID = ${ portalItemId }.";const duplicateSeriesID="${ dataPath }은(는) 고유해야 합니다. ${ seriesName }(이)라는 계열에 다른 계열에서 이미 사용된 ID(${ seriesID })가 있습니다.";const nonNumericAggregation="${ dataPath }은(는) 숫자가 아닌 필드에서 불가산 집계를 수행할 수 없습니다.";const requiredProperty="${ dataPath }에 ${ missingProperty } 등록정보가 누락되었습니다.";const minLength="${ dataPath }은(는) ${ limit }자보다 짧으면 안 됩니다.";const minItems="${ dataPath }에는 ${ limit }개 이상의 항목이 있어야 합니다.";const maxItems="${ dataPath }에는 ${ limit }개 이하의 항목이 있어야 합니다.";const whiteSpacePattern="${ dataPath }은(는) 공백 이외의 문자를 1개 이상 포함해야 합니다.";const additionalProperty="${ dataPath }에는 ${ additionalProperty }이(가) 없어야 합니다.";const enumValues="${ dataPath }은(는) 허용된 값(${ allowedValues }) 중 하나와 같아야 합니다.";const anyOfValues="${ dataPath }은(는) ${ schemaOptions } 중 하나의 스키마와 일치해야 합니다.";const bubbleChartValidateMsg="비례 심볼이 있는 산점도는 지원되지 않습니다. 기본 심볼 크기가 적용되었습니다.";const queryError="입력 데이터를 읽지 못했습니다.";const histogramEmptyField="히스토그램에는 2개 이상의 숫자 값이 있어야 합니다.";const invalidSeriesType="인덱스 ${ seriesIndex }에 예상되는 시리즈 유형은 '${ expectedType }'인데 '${ receivedType }'이(가) 대신 수신되었습니다.";const or="또는";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="선택한 숫자 필드의 합계가 모든 양수 값 또는 모든 음수 값을 반환하는지 확인합니다.";const pieChartSlicesCannotExceedLimit="해당 차트에는 총 ${ sliceCount }개의 슬라이스가 있습니다. 파이 차트의 슬라이스는 ${ totalLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 숫자 필드를 더 적게 추가하거나 데이터에 필터를 적용합니다.";const gaugeCannotExceedLimit="피처 기반 게이지는 ${ totalLimit }개의 피처로 제한됩니다. 데이터를 필터링합니다.";const uniqueSeriesLineCountCannotExceedLimit="해당 차트에는 마커가 총 ${ elementCount }개 있습니다. 시리즈가 1개 있는 선형 차트의 마커는 ${ totalLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const twoSeriesLineCountCannotExceedLimit="시리즈가 2개 있는 선형 차트의 경우 마커 ${ totalLimit }개, 또는 시리즈당 마커 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const threePlusSeriesLineCountCannotExceedLimit="시리즈가 3개 이상 있는 선형 차트의 경우 마커 ${ totalLimit }개, 또는 시리즈당 마커 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const lineSeriesCountCannotExceedLimit="선형 차트의 시리즈는 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 분할 기준 필드 선택";const uniqueSeriesBoxCountCannotExceedLimit="해당 차트에는 박스가 총 ${ elementCount }개 있습니다. 시리즈가 1개 있는 박스 플롯은 박스 ${ totalLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const twoSeriesBoxCountCannotExceedLimit="시리즈가 2개 있는 박스 플롯의 경우 박스 ${ totalLimit }개, 또는 시리즈당 박스 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const threePlusBoxLineCountCannotExceedLimit="시리즈가 3개 이상 있는 박스 플롯의 경우 박스 ${ totalLimit }개, 또는 시리즈당 박스 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 범주 필드를 선택하거나 데이터에 필터를 적용합니다.";const boxSeriesCountCannotExceedLimit="박스 플롯의 시리즈는 ${ seriesLimit }개로 제한됩니다. 고유 값이 더 적은 분할 기준 필드 선택";const boxSeriesOutlierCannotExceedLimit="박스 플롯은 최대 ${ totalLimit }개의 이상치 포인트만 표시할 수 있습니다. 데이터를 필터링합니다.";var errors_t9n_ko={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_ko;
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
//# sourceMappingURL=errors.t9n.ko-4608ea2b-923062e8.js.map