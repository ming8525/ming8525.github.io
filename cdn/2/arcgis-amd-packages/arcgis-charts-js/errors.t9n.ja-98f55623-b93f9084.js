define(['exports'], (function (exports) { 'use strict';

	const defaultError="チャートの読み込み中にエラーが発生しました。";const uniqueSeriesBarCountCannotExceedLimit="このチャートには、合計 ${ elementCount } 個のバーがあります。 系列が 1 つのバー チャートは、${ totalLimit } バーに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const twoSeriesBarCountCannotExceedLimit="系列が 2 つのバー チャートは、${ totalLimit } バー、または系列あたり ${ seriesLimit } バーに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const threePlusSeriesBarCountCannotExceedLimit="系列が 3 つ以上のバー チャートは、${ totalLimit } バー、または系列あたり ${ seriesLimit } バーに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const barSeriesCountCannotExceedLimit="バー チャートの最大系列数は ${ seriesLimit } に制限されています。 個別値が少ない分割フィールドを選択してください";const defaultInvalidChart="チャートの作成中にエラーが発生しました。";const negativeValueInDataForLogTransformation="対数変換は負またはゼロの値に適用できません。";const negativeValueInDataForSqrtTransformation="平方根変換は負の値に適用できません。";const layerLoadFailure="レイヤーの読み込み中にエラーが発生しました。 URL = ${ url } ポータル アイテム ID = ${ portalItemId }";const duplicateSeriesID="${ dataPath } は一意である必要があります。 ${ seriesName } という系列の ID (${ seriesID }) は、別の系列ですでに使用されています。";const nonNumericAggregation="${ dataPath } は、数値以外のフィールドで、個数以外の集約を実行することはできません。";const requiredProperty="${ dataPath } に ${ missingProperty } というプロパティがありません。";const minLength="${ dataPath } は ${ limit } 文字以上である必要があります。";const minItems="${ dataPath } のアイテムは ${ limit } 以上にする必要があります。";const maxItems="${ dataPath } のアイテムは ${ limit } 以下にする必要があります。";const whiteSpacePattern="${ dataPath } には空白以外の文字が 1 つ以上含まれている必要があります。";const additionalProperty="${ dataPath } が ${ additionalProperty } を持つことはできません。";const enumValues="${ dataPath } は、次のいずれかの許可された値と等しい必要があります: ${ allowedValues }";const anyOfValues="${ dataPath } は、次のいずれかのスキーマと一致する必要があります: ${ schemaOptions }";const bubbleChartValidateMsg="比例シンボルを使用した散布図はサポートされていません。 デフォルトのシンボル サイズが適用されています。";const queryError="入力データを読み取れません。";const histogramEmptyField="ヒストグラムには、少なくとも 2 つの数値が必要です。";const invalidSeriesType="インデックス ${ seriesIndex } で必要な系列タイプは ${ expectedType } ですが、代わりに ${ receivedType } が指定されました";const or="または";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="選択された数値フィールドの合計値から返される値がすべて正の値であるか、すべて負の値であることを確認します。";const pieChartSlicesCannotExceedLimit="このチャートには合計 ${ sliceCount } 個のスライスがあります。 パイ チャートのスライス数は ${ totalLimit } に制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、追加する数値フィールドの数を減らすか、データにフィルターを適用してください。";const gaugeCannotExceedLimit="フィーチャ ベースのゲージは ${ totalLimit } 個のフィーチャに制限されています。 データをフィルター処理してください。";const uniqueSeriesLineCountCannotExceedLimit="このチャートには、合計 ${ elementCount } 個のマーカーがあります。 系列が 1 つのライン チャートは、${ totalLimit } マーカーに制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const twoSeriesLineCountCannotExceedLimit="系列が 2 つのライン チャートは、${ totalLimit } マーカー、または系列あたり ${ seriesLimit } マーカーに制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const threePlusSeriesLineCountCannotExceedLimit="系列が 3 つ以上のライン チャートは、${ totalLimit } マーカー、または系列あたり ${ seriesLimit } マーカーに制限されています。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const lineSeriesCountCannotExceedLimit="ライン チャートの最大系列数は ${ seriesLimit } に制限されています。 個別値が少ない分割フィールドを選択してください";const uniqueSeriesBoxCountCannotExceedLimit="このチャートには、合計 ${ elementCount } 個のボックスがあります。 系列が 1 つの箱ひげ図は、${ totalLimit } ボックスに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const twoSeriesBoxCountCannotExceedLimit="系列が 2 つの箱ひげ図は、${ totalLimit } ボックス、または系列あたり ${ seriesLimit } ボックスに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const threePlusBoxLineCountCannotExceedLimit="系列が 3 つ以上の箱ひげ図は、${ totalLimit } ボックス、または系列あたり ${ seriesLimit } ボックスに制限されます。 個別値の数が少ないカテゴリ フィールドを選択するか、データにフィルターを適用してください。";const boxSeriesCountCannotExceedLimit="箱ひげ図の最大系列数は ${ seriesLimit } に制限されています。 個別値が少ない分割フィールドを選択してください";const boxSeriesOutlierCannotExceedLimit="箱ひげ図が表示できる範囲外ポイントの最大数は ${ totalLimit } 個です。 データをフィルター処理してください。";var errors_t9n_ja={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_ja;
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
//# sourceMappingURL=errors.t9n.ja-98f55623-b93f9084.js.map
