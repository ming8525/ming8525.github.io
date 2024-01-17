define(['exports'], (function (exports) { 'use strict';

	const defaultError="An error occurred while loading the chart.";const uniqueSeriesBarCountCannotExceedLimit="There are a total of ${ elementCount } bars in this chart. Bar charts with one series are limited to ${ totalLimit } bars. Choose a Category field with fewer unique values or apply a filter to your data.";const twoSeriesBarCountCannotExceedLimit="Bar charts with two series are limited to ${ totalLimit } bars, or ${ seriesLimit } bars per series. Choose a Category field with fewer unique values or apply a filter to your data.";const threePlusSeriesBarCountCannotExceedLimit="Bar charts with three or more series are limited to ${ totalLimit } bars, or ${ seriesLimit } bars per series. Choose a Category field with fewer unique values or apply a filter to your data.";const barSeriesCountCannotExceedLimit="Bar charts are limited to ${ seriesLimit } series. Choose a split-by field with fewer unique values";const defaultInvalidChart="There was an error creating the chart.";const negativeValueInDataForLogTransformation="Cannot apply a log transformation to negative or zero values.";const negativeValueInDataForSqrtTransformation="Cannot apply a square root transformation to negative values.";const layerLoadFailure="An error occurred while loading the layer. URL = ${ url }. Portal item ID = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } must be unique. The series named ${ seriesName } has an ID (${ seriesID }) that is already used by another series.";const nonNumericAggregation="${ dataPath } cannot perform non-count aggregation on non-numeric field.";const requiredProperty="${ dataPath } is missing a property named ${ missingProperty }.";const minLength="${ dataPath } must not be shorter than ${ limit } characters.";const minItems="${ dataPath } must not have fewer than ${ limit } items.";const maxItems="${ dataPath } must not have more than ${ limit } items.";const whiteSpacePattern="${ dataPath } must have at least one non-whitespace character.";const additionalProperty="${ dataPath } must not have ${ additionalProperty }.";const enumValues="${ dataPath } must be equal to one of these allowed values: ${ allowedValues }.";const anyOfValues="${ dataPath } must match the schema of one of these: ${ schemaOptions }.";const bubbleChartValidateMsg="Scatterplots with proportional symbols are not supported. Default symbol size has been applied.";const queryError="Failure to read input data.";const histogramEmptyField="Histograms require at least two numeric values.";const invalidSeriesType="The expected series type at index ${ seriesIndex } is '${ expectedType }' but '${ receivedType }' was received instead";const or="or";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Ensure the sum total of the chosen numeric field(s) returns all positive values or all negative values.";const pieChartSlicesCannotExceedLimit="There are a total of ${ sliceCount } slices in this chart. Pie charts are limited to ${ totalLimit } slices. Choose a Category field with fewer unique values, add fewer Numeric fields, or apply a filter to your data.";const gaugeCannotExceedLimit="Feature-based gauges are limited to ${ totalLimit } features. Filter your data.";const uniqueSeriesLineCountCannotExceedLimit="There are a total of ${ elementCount } markers in this chart. Line charts with one series are limited to ${ totalLimit } markers. Choose a Category field with fewer unique values or apply a filter to your data.";const twoSeriesLineCountCannotExceedLimit="Line charts with two series are limited to ${ totalLimit } markers, or ${ seriesLimit } markers per series. Choose a Category field with fewer unique values or apply a filter to your data.";const threePlusSeriesLineCountCannotExceedLimit="Line charts with three or more series are limited to ${ totalLimit } markers, or ${ seriesLimit } markers per series. Choose a Category field with fewer unique values or apply a filter to your data.";const lineSeriesCountCannotExceedLimit="Line charts are limited to ${ seriesLimit } series. Choose a split-by field with fewer unique values";const uniqueSeriesBoxCountCannotExceedLimit="There are a total of ${ elementCount } boxes in this chart. Box plots with one series are limited to ${ totalLimit } boxes. Choose a Category field with fewer unique values or apply a filter to your data.";const twoSeriesBoxCountCannotExceedLimit="Box plots with two series are limited to ${ totalLimit } boxes, or ${ seriesLimit } boxes per series. Choose a Category field with fewer unique values or apply a filter to your data.";const threePlusBoxLineCountCannotExceedLimit="Box plots with three or more series are limited to ${ totalLimit } boxes, or ${ seriesLimit } boxes per series. Choose a Category field with fewer unique values or apply a filter to your data.";const boxSeriesCountCannotExceedLimit="Box plots are limited to ${ seriesLimit } series. Choose a split-by field with fewer unique values";const boxSeriesOutlierCannotExceedLimit="Box plots can only display up to ${ totalLimit } outlier points. Filter you data.";var errors_t9n_enUS={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_enUS;
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
//# sourceMappingURL=errors.t9n.en-US-69d530ef-2a96ad71.js.map
