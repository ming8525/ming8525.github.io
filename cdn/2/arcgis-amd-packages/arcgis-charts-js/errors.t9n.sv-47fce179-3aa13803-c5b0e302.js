define(['exports'], (function (exports) { 'use strict';

	const defaultError="Ett fel uppstod när diagrammet lästes in.";const uniqueSeriesBarCountCannotExceedLimit="Det finns totalt ${ elementCount } staplar i detta diagram. Stapeldiagram med en serie är begränsade till ${ totalLimit } staplar. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const twoSeriesBarCountCannotExceedLimit="Stapeldiagram med två serier är begränsade till ${ totalLimit } staplar eller ${ seriesLimit } staplar per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const threePlusSeriesBarCountCannotExceedLimit="Stapeldiagram med tre eller fler serier är begränsade till ${ totalLimit } staplar eller ${ seriesLimit } staplar per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const barSeriesCountCannotExceedLimit="Stapeldiagram är begränsade till ${ seriesLimit } serier. Välj ett dela efter-fält med färre unika värden";const defaultInvalidChart="Det uppstod ett fel när diagrammet skapades.";const negativeValueInDataForLogTransformation="Det går inte att tillämpa loggomvandling på negativa värden eller nollvärden.";const negativeValueInDataForSqrtTransformation="Det går inte att tillämpa kvadratrotomvandling på negativa värden.";const layerLoadFailure="Ett fel uppstod när lagret lästes in. URL = ${ url }. Portalobjekt-ID = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } måste vara unik. Serien som heter ${ seriesName } har ett ID (${ seriesID }) som redan används av en annan serie.";const nonNumericAggregation="${ dataPath } kan inte utföra icke-tidsmässig aggregering på ett icke-numeriskt fält.";const requiredProperty="${ dataPath } saknar egenskapen ${ missingProperty }.";const minLength="${ dataPath } får inte vara kortare än ${ limit } tecken.";const minItems="${ dataPath } får inte ha färre än ${ limit } objekt.";const maxItems="${ dataPath } får inte ha fler än ${ limit } objekt.";const whiteSpacePattern="${ dataPath } måste ha minst ett tecken som inte är ett blanksteg.";const additionalProperty="${ dataPath } får inte innehålla ${ additionalProperty }.";const enumValues="${ dataPath } måste vara lika med ett av dessa tillåtna värden: ${ allowedValues }.";const anyOfValues="${ dataPath } måste matcha schemat för någon av dessa: ${ schemaOptions }.";const bubbleChartValidateMsg="Punktdiagram med proportionerliga symboler stöds inte. Standardstorleken för symboler har tillämpats.";const queryError="Det gick inte att läsa indata.";const histogramEmptyField="Histogram kräver minst två numeriska värden.";const invalidSeriesType="Förväntad serietyp vid index ${ seriesIndex } är '${ expectedType }' men '${ receivedType }' togs emot istället";const or="eller";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Kontrollera att totalsumman av de valda numeriska fälten returnerar alla positiva värden eller alla negativa värden.";const pieChartSlicesCannotExceedLimit="Det finns totalt ${ sliceCount } bitar i detta diagram. Cirkeldiagram är begränsade till ${ totalLimit } bitar. Välj ett kategorifält med färre unika värden, lägg till färre numeriska fält eller använd ett filter i dina data.";const gaugeCannotExceedLimit="Geoobjektbaserade mätare är begränsade till ${ totalLimit } geoobjekt. Filtrera dina data.";const uniqueSeriesLineCountCannotExceedLimit="Det finns totalt ${ elementCount } punktsymboler i det här diagrammet. Linjediagram med en serie är begränsade till ${ totalLimit } punktsymboler. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const twoSeriesLineCountCannotExceedLimit="Linjediagram med två serier är begränsade till ${ totalLimit } punktsymboler eller ${ seriesLimit } punktsymboler per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const threePlusSeriesLineCountCannotExceedLimit="Linjediagram med tre eller fler serier är begränsade till ${ totalLimit } punktsymboler eller ${ seriesLimit } punktsymboler per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const lineSeriesCountCannotExceedLimit="Linjediagram är begränsade till ${ seriesLimit } serier. Välj ett dela efter-fält med färre unika värden";const uniqueSeriesBoxCountCannotExceedLimit="Det finns totalt ${ elementCount } lådor i det här diagrammet. Låddiagram med en serie är begränsade till ${ totalLimit } lådor. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const twoSeriesBoxCountCannotExceedLimit="Låddiagram med två serier är begränsade till ${ totalLimit } lådor eller ${ seriesLimit } lådor per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const threePlusBoxLineCountCannotExceedLimit="Låddiagram med tre eller fler serier är begränsade till ${ totalLimit } lådor eller ${ seriesLimit } lådor per serie. Välj ett kategorifält med färre unika värden eller använd ett filter i dina data.";const boxSeriesCountCannotExceedLimit="Låddiagram är begränsade till ${ seriesLimit } serier. Välj ett dela efter-fält med färre unika värden";const boxSeriesOutlierCannotExceedLimit="Låddiagram kan endast visa upp till ${ totalLimit } avvikelsepunkter. Filtrera dina data.";var errors_t9n_sv={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_sv;
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
//# sourceMappingURL=errors.t9n.sv-47fce179-3aa13803-c5b0e302.js.map
