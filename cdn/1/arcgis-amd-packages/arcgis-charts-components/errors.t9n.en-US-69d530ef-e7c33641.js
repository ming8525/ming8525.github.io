/*! For license information please see errors.t9n.en-US-69d530ef-e7c33641.js.LICENSE.txt */
define(["exports"],(function(e){"use strict";const t="An error occurred while loading the chart.",i="There are a total of ${ elementCount } bars in this chart. Bar charts with one series are limited to ${ totalLimit } bars. Choose a Category field with fewer unique values or apply a filter to your data.",a="Bar charts with two series are limited to ${ totalLimit } bars, or ${ seriesLimit } bars per series. Choose a Category field with fewer unique values or apply a filter to your data.",r="Bar charts with three or more series are limited to ${ totalLimit } bars, or ${ seriesLimit } bars per series. Choose a Category field with fewer unique values or apply a filter to your data.",o="Bar charts are limited to ${ seriesLimit } series. Choose a split-by field with fewer unique values",s="There was an error creating the chart.",n="Cannot apply a log transformation to negative or zero values.",l="Cannot apply a square root transformation to negative values.",u="An error occurred while loading the layer. URL = ${ url }. Portal item ID = ${ portalItemId }.",d="${ dataPath } must be unique. The series named ${ seriesName } has an ID (${ seriesID }) that is already used by another series.",m="${ dataPath } cannot perform non-count aggregation on non-numeric field.",h="${ dataPath } is missing a property named ${ missingProperty }.",C="${ dataPath } must not be shorter than ${ limit } characters.",c="${ dataPath } must not have fewer than ${ limit } items.",p="${ dataPath } must not have more than ${ limit } items.",L="${ dataPath } must have at least one non-whitespace character.",f="${ dataPath } must not have ${ additionalProperty }.",y="${ dataPath } must be equal to one of these allowed values: ${ allowedValues }.",x="${ dataPath } must match the schema of one of these: ${ schemaOptions }.",w="Scatterplots with proportional symbols are not supported. Default symbol size has been applied.",g="Failure to read input data.",$="Histograms require at least two numeric values.",v="The expected series type at index ${ seriesIndex } is '${ expectedType }' but '${ receivedType }' was received instead",E="Ensure the sum total of the chosen numeric field(s) returns all positive values or all negative values.",S="There are a total of ${ sliceCount } slices in this chart. Pie charts are limited to ${ totalLimit } slices. Choose a Category field with fewer unique values, add fewer Numeric fields, or apply a filter to your data.",b="Feature-based gauges are limited to ${ totalLimit } features. Filter your data.",q="There are a total of ${ elementCount } markers in this chart. Line charts with one series are limited to ${ totalLimit } markers. Choose a Category field with fewer unique values or apply a filter to your data.",P="Line charts with two series are limited to ${ totalLimit } markers, or ${ seriesLimit } markers per series. Choose a Category field with fewer unique values or apply a filter to your data.",B="Line charts with three or more series are limited to ${ totalLimit } markers, or ${ seriesLimit } markers per series. Choose a Category field with fewer unique values or apply a filter to your data.",I="Line charts are limited to ${ seriesLimit } series. Choose a split-by field with fewer unique values",T="There are a total of ${ elementCount } boxes in this chart. Box plots with one series are limited to ${ totalLimit } boxes. Choose a Category field with fewer unique values or apply a filter to your data.",F="Box plots with two series are limited to ${ totalLimit } boxes, or ${ seriesLimit } boxes per series. Choose a Category field with fewer unique values or apply a filter to your data.",V="Box plots with three or more series are limited to ${ totalLimit } boxes, or ${ seriesLimit } boxes per series. Choose a Category field with fewer unique values or apply a filter to your data.",D="Box plots are limited to ${ seriesLimit } series. Choose a split-by field with fewer unique values",O="Box plots can only display up to ${ totalLimit } outlier points. Filter you data.";var k={defaultError:t,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:r,barSeriesCountCannotExceedLimit:o,defaultInvalidChart:s,negativeValueInDataForLogTransformation:n,negativeValueInDataForSqrtTransformation:l,layerLoadFailure:u,duplicateSeriesID:d,nonNumericAggregation:m,requiredProperty:h,minLength:C,minItems:c,maxItems:p,whiteSpacePattern:L,additionalProperty:f,enumValues:y,anyOfValues:x,bubbleChartValidateMsg:w,queryError:g,histogramEmptyField:$,invalidSeriesType:v,or:"or",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:E,pieChartSlicesCannotExceedLimit:S,gaugeCannotExceedLimit:b,uniqueSeriesLineCountCannotExceedLimit:q,twoSeriesLineCountCannotExceedLimit:P,threePlusSeriesLineCountCannotExceedLimit:B,lineSeriesCountCannotExceedLimit:I,uniqueSeriesBoxCountCannotExceedLimit:T,twoSeriesBoxCountCannotExceedLimit:F,threePlusBoxLineCountCannotExceedLimit:V,boxSeriesCountCannotExceedLimit:D,boxSeriesOutlierCannotExceedLimit:O};e.additionalProperty=f,e.anyOfValues=x,e.barSeriesCountCannotExceedLimit=o,e.boxSeriesCountCannotExceedLimit=D,e.boxSeriesOutlierCannotExceedLimit=O,e.bubbleChartValidateMsg=w,e.default=k,e.defaultError=t,e.defaultInvalidChart=s,e.duplicateSeriesID=d,e.enumValues=y,e.gaugeCannotExceedLimit=b,e.histogramEmptyField=$,e.invalidSeriesType=v,e.layerLoadFailure=u,e.lineSeriesCountCannotExceedLimit=I,e.maxItems=p,e.minItems=c,e.minLength=C,e.negativeValueInDataForLogTransformation=n,e.negativeValueInDataForSqrtTransformation=l,e.nonNumericAggregation=m,e.or="or",e.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=E,e.pieChartSlicesCannotExceedLimit=S,e.queryError=g,e.requiredProperty=h,e.threePlusBoxLineCountCannotExceedLimit=V,e.threePlusSeriesBarCountCannotExceedLimit=r,e.threePlusSeriesLineCountCannotExceedLimit=B,e.twoSeriesBarCountCannotExceedLimit=a,e.twoSeriesBoxCountCannotExceedLimit=F,e.twoSeriesLineCountCannotExceedLimit=P,e.uniqueSeriesBarCountCannotExceedLimit=i,e.uniqueSeriesBoxCountCannotExceedLimit=T,e.uniqueSeriesLineCountCannotExceedLimit=q,e.whiteSpacePattern=L}));