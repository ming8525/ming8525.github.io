define(['exports'], (function (exports) { 'use strict';

	const defaultError="加载图表时出错。";const uniqueSeriesBarCountCannotExceedLimit="此图表共有 ${ elementCount } 个条柱。 具有一个系列的条形图仅限于 ${ totalLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const twoSeriesBarCountCannotExceedLimit="具有两个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const threePlusSeriesBarCountCannotExceedLimit="具有三个或更多个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const barSeriesCountCannotExceedLimit="柱状图被限制为 ${ seriesLimit } 个系列。 选择唯一值较少的分割字段";const defaultInvalidChart="创建图表时出错。";const negativeValueInDataForLogTransformation="无法向负值或零值应用对数变换。";const negativeValueInDataForSqrtTransformation="无法向负值应用平方根变换。";const layerLoadFailure="加载图层时出错。 URL = ${ url }。 门户项目 ID = ${ portalItemId }。";const duplicateSeriesID="${ dataPath } 必须唯一。 名为 ${ seriesName } 的系列具有一个 ID (${ seriesID })，此 ID 已被另一个系列使用。";const nonNumericAggregation="${ dataPath } 无法在非数值字段上执行非计数聚合。";const requiredProperty="${ dataPath } 缺少名为 ${ missingProperty } 的属性。";const minLength="${ dataPath } 不应短于 ${ limit } 个字符。";const minItems="${ dataPath } 包含的项目数量不应少于 ${ limit } 个。";const maxItems="${ dataPath } 包含的项目数量不应多于 ${ limit } 个。";const whiteSpacePattern="${ dataPath } 必须至少包含一个空白字符。";const additionalProperty="${ dataPath } 不能有 ${ additionalProperty }。";const enumValues="${ dataPath } 必须等于以下允许值之一：${ allowedValues }。";const anyOfValues="${ dataPath } 必须与下列各项之一的方案匹配：${ schemaOptions }。";const bubbleChartValidateMsg="包含比例符号的散点图不受支持。 已应用默认符号大小。";const queryError="无法读取输入数据。";const histogramEmptyField="直方图至少需要两个数字值。";const invalidSeriesType="索引 ${ seriesIndex } 处的预期系列类型是 '${ expectedType }'，但接受的是 '${ receivedType }'";const or="或";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="确保所选数值字段的总和返回所有正值或所有负值。";const pieChartSlicesCannotExceedLimit="此图表共有 ${ sliceCount } 个切片。 饼图的切片数限制为 ${ totalLimit }。 选择具有较少唯一值的“类别”字段，添加较少“数值”字段，或对数据应用过滤器。";const gaugeCannotExceedLimit="基于要素的仪表仅限于 ${ totalLimit } 个要素。 过滤数据。";const uniqueSeriesLineCountCannotExceedLimit="此图表中共有 ${ elementCount } 个标记。 具有一个系列的折线图仅限 ${ totalLimit } 个标记。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const twoSeriesLineCountCannotExceedLimit="具有两个系列的折线图仅限 ${ totalLimit } 个标记或每个系列限 ${ seriesLimit } 个标记。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const threePlusSeriesLineCountCannotExceedLimit="具有三个或更多系列的折线图仅限 ${ totalLimit } 个标记或每个系列限 ${ seriesLimit } 个标记。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const lineSeriesCountCannotExceedLimit="折线图被限制为 ${ seriesLimit } 个系列。 选择唯一值较少的分割字段";const uniqueSeriesBoxCountCannotExceedLimit="该图表中共有 ${ elementCount } 个方框。 具有一个系列的箱形图仅限 ${ totalLimit } 个箱形。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const twoSeriesBoxCountCannotExceedLimit="包含两个系列的箱线图仅限于 ${ totalLimit } 个箱形，或每个系列 ${ seriesLimit } 个箱形。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const threePlusBoxLineCountCannotExceedLimit="具有三个或更多个系列的箱形图仅限于 ${ totalLimit } 个箱形或每个系列 ${ seriesLimit } 个箱形。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。";const boxSeriesCountCannotExceedLimit="箱形图仅限 ${ seriesLimit } 个系列。 选择唯一值较少的分割字段";const boxSeriesOutlierCannotExceedLimit="箱形图最多只能显示 ${ totalLimit } 个离群点。 过滤数据。";var errors_t9n_zhCN={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_zhCN;
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
//# sourceMappingURL=errors.t9n.zh-CN-659fe2bd-af943aae.js.map
