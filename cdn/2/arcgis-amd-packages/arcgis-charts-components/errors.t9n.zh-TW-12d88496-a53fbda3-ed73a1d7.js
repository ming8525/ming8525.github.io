define(["exports"],(function(exports){"use strict";
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See LICENSE.md for details.
	 * v1.0.0-beta.703
	 */const defaultError="載入圖表時出錯。";const uniqueSeriesBarCountCannotExceedLimit="此圖表總計有 ${ elementCount } 軸。 含有一個數列的長條圖限於 ${ totalLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const twoSeriesBarCountCannotExceedLimit="含有兩個數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const threePlusSeriesBarCountCannotExceedLimit="含有三個或更多數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const barSeriesCountCannotExceedLimit="長條圖限為 ${ seriesLimit } 個數列。 選擇唯一值較少的分割依據欄位";const defaultInvalidChart="建立圖表時發生錯誤。";const negativeValueInDataForLogTransformation="無法將對數轉換套用於負值或零值。";const negativeValueInDataForSqrtTransformation="無法將平方根轉換套用於負值。";const layerLoadFailure="載入圖層時出錯。 URL = ${ url }。 入口網站項目 ID = ${ portalItemId }。";const duplicateSeriesID="${ dataPath } 必須唯一。 名為 ${ seriesName } 的數列具有其他數列已在使用的 ID (${ seriesID })。";const nonNumericAggregation="${ dataPath } 無法在非數值欄位上執行非計數匯聚。";const requiredProperty="${ dataPath } 缺少名為 ${ missingProperty } 的屬性。";const minLength="${ dataPath } 不應短於 ${ limit } 個字元。";const minItems="${ dataPath } 的項目數不應少於 ${ limit } 個。";const maxItems="${ dataPath } 的項目數不應多於 ${ limit } 個。";const whiteSpacePattern="${ dataPath } 至少必須有一個非空白字元。";const additionalProperty="${ dataPath } 不能有 ${ additionalProperty }。";const enumValues="${ dataPath } 必須等於下列其中一個允許值: ${ allowedValues }。";const anyOfValues="${ dataPath } 必須符合下列其中一項結構描述: ${ schemaOptions }。";const bubbleChartValidateMsg="不支援包含比例符號的散點圖。 已套用預設符號大小。";const queryError="無法讀取輸入資料。";const histogramEmptyField="直方圖至少需要兩個數值。";const invalidSeriesType="索引 ${ seriesIndex } 上預期的數列類型為 '${ expectedType }'，但改為接收 '${ receivedType }'";const or="或";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="確保所選數值欄位的總和全部傳回正值或全部傳回負值。";const pieChartSlicesCannotExceedLimit="此圖表總計有 ${ sliceCount } 個切片。 圓餅圖限制為 ${ totalLimit } 個切片。 選擇具有較少唯一值的「類別」欄位、新增較少的「數值」欄位，或將篩選器套用至您的資料。";const gaugeCannotExceedLimit="圖徵型儀錶限於 ${ totalLimit } 個圖徵。 篩選您的資料。";const uniqueSeriesLineCountCannotExceedLimit="此圖表總計有 ${ elementCount } 個標記。 含有一個數列的折線圖限於 ${ totalLimit } 個標記。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const twoSeriesLineCountCannotExceedLimit="含有兩個數列的折線圖限於 ${ totalLimit } 個標記或每個數列 ${ seriesLimit } 個標記。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const threePlusSeriesLineCountCannotExceedLimit="含有兩個或三個數列的折線圖限於 ${ totalLimit } 個標記或每個數列 ${ seriesLimit } 個標記。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const lineSeriesCountCannotExceedLimit="折線圖限為 ${ seriesLimit } 個數列。 選擇唯一值較少的分割依據欄位";const uniqueSeriesBoxCountCannotExceedLimit="此圖表總計有 ${ elementCount } 個方塊。 含有一個數列的盒狀圖限於 ${ totalLimit } 個方塊。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const twoSeriesBoxCountCannotExceedLimit="含有兩個數列的盒狀圖限於 ${ totalLimit } 個方塊或每個數列 ${ seriesLimit } 個方塊。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const threePlusBoxLineCountCannotExceedLimit="含有三個或更多數列的盒狀圖限於 ${ totalLimit } 個方塊或每個數列 ${ seriesLimit } 個方塊。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。";const boxSeriesCountCannotExceedLimit="盒狀圖限於 ${ seriesLimit } 個數列。 選擇唯一值較少的分割依據欄位";const boxSeriesOutlierCannotExceedLimit="盒狀圖最多只能顯示 ${ totalLimit } 個異常值點。 篩選您的資料。";var errors_t9n_zhTW={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};exports.additionalProperty=additionalProperty;exports.anyOfValues=anyOfValues;exports.barSeriesCountCannotExceedLimit=barSeriesCountCannotExceedLimit;exports.boxSeriesCountCannotExceedLimit=boxSeriesCountCannotExceedLimit;exports.boxSeriesOutlierCannotExceedLimit=boxSeriesOutlierCannotExceedLimit;exports.bubbleChartValidateMsg=bubbleChartValidateMsg;exports["default"]=errors_t9n_zhTW;exports.defaultError=defaultError;exports.defaultInvalidChart=defaultInvalidChart;exports.duplicateSeriesID=duplicateSeriesID;exports.enumValues=enumValues;exports.gaugeCannotExceedLimit=gaugeCannotExceedLimit;exports.histogramEmptyField=histogramEmptyField;exports.invalidSeriesType=invalidSeriesType;exports.layerLoadFailure=layerLoadFailure;exports.lineSeriesCountCannotExceedLimit=lineSeriesCountCannotExceedLimit;exports.maxItems=maxItems;exports.minItems=minItems;exports.minLength=minLength;exports.negativeValueInDataForLogTransformation=negativeValueInDataForLogTransformation;exports.negativeValueInDataForSqrtTransformation=negativeValueInDataForSqrtTransformation;exports.nonNumericAggregation=nonNumericAggregation;exports.or=or;exports.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=pieChartCannotHaveMixtureOfPositiveAndNegativeSlices;exports.pieChartSlicesCannotExceedLimit=pieChartSlicesCannotExceedLimit;exports.queryError=queryError;exports.requiredProperty=requiredProperty;exports.threePlusBoxLineCountCannotExceedLimit=threePlusBoxLineCountCannotExceedLimit;exports.threePlusSeriesBarCountCannotExceedLimit=threePlusSeriesBarCountCannotExceedLimit;exports.threePlusSeriesLineCountCannotExceedLimit=threePlusSeriesLineCountCannotExceedLimit;exports.twoSeriesBarCountCannotExceedLimit=twoSeriesBarCountCannotExceedLimit;exports.twoSeriesBoxCountCannotExceedLimit=twoSeriesBoxCountCannotExceedLimit;exports.twoSeriesLineCountCannotExceedLimit=twoSeriesLineCountCannotExceedLimit;exports.uniqueSeriesBarCountCannotExceedLimit=uniqueSeriesBarCountCannotExceedLimit;exports.uniqueSeriesBoxCountCannotExceedLimit=uniqueSeriesBoxCountCannotExceedLimit;exports.uniqueSeriesLineCountCannotExceedLimit=uniqueSeriesLineCountCannotExceedLimit;exports.whiteSpacePattern=whiteSpacePattern}));