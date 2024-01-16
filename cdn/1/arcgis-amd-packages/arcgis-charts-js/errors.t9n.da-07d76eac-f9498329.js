define(['exports'], (function (exports) { 'use strict';

	const defaultError="Der opstod en fejl under indlæsning af diagrammet.";const uniqueSeriesBarCountCannotExceedLimit="Der er i alt ${ elementCount } bjælker i dette diagram. Søjlediagrammer med en serie er begrænset til ${ totalLimit } søjler. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const twoSeriesBarCountCannotExceedLimit="Søjlediagrammer med to serier er begrænset til ${ totalLimit } søjler eller ${ seriesLimit } søjler pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const threePlusSeriesBarCountCannotExceedLimit="Søjlediagrammer med tre eller flere serier er begrænset til ${ totalLimit } søjler eller ${ seriesLimit } søjler pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const barSeriesCountCannotExceedLimit="Søjlediagrammer er begrænset til ${ seriesLimit } serier. Vælg et opdel efter-felt med færre unikke værdier";const defaultInvalidChart="Der opstod en fejl under oprettelsen af diagrammet.";const negativeValueInDataForLogTransformation="Kan ikke anvende log-transformation på negative værdier eller nulværdier.";const negativeValueInDataForSqrtTransformation="Kan ikke anvende kvadratrod-transformation på negative værdier.";const layerLoadFailure="Der opstod en fejl under indlæsning af laget. URL = ${ url }. Portalelement-id = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } skal være entydig. Serien med navnet ${ seriesName } har et id (${ seriesID }), der allerede bruges i en anden serie.";const nonNumericAggregation="${ dataPath } kan ikke udføre ikke-antal-aggregering på ikke-numeriske felter.";const requiredProperty="${ dataPath } mangler en egenskab med navnet ${ missingProperty }.";const minLength="${ dataPath } skal ikke være kortere end ${ limit } tegn.";const minItems="${ dataPath } må ikke have færre end ${ limit } elementer.";const maxItems="${ dataPath } må ikke have flere end ${ limit } elementer.";const whiteSpacePattern="${ dataPath } skal have mindst et tegn, der ikke er et mellemrumstegn.";const additionalProperty="${ dataPath } må ikke have ${ additionalProperty }.";const enumValues="${ dataPath } skal være lig med en af disse tilladte værdier: ${ allowedValues }.";const anyOfValues="${ dataPath } skal matche skemaet fra en af disse: ${ schemaOptions }.";const bubbleChartValidateMsg="Punktdiagrammer med proportionale symboler understøttes ikke. Der er blevet anvendt standardstørrelse på symboler.";const queryError="Kunne ikke læse inputdata.";const histogramEmptyField="Histogrammer kræver mindst to numeriske værdier.";const invalidSeriesType="Den forventede serietype ved indekset ${ seriesIndex } er '${ expectedType }', men '${ receivedType }' blev modtaget i stedet for";const or="eller";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Sørg for, at den samlede sum af det eller de valgte numeriske felter returnerer alle positive værdier eller alle negative værdier.";const pieChartSlicesCannotExceedLimit="Der er i alt ${ sliceCount } udsnit i dette diagram. Cirkeldiagrammer er begrænset til ${ totalLimit } udsnit. Vælg et Kategorifelt med færre unikke værdier, tilføj færre numeriske felter eller brug et filter til dine data.";const gaugeCannotExceedLimit="Objektbaserede målere er begrænset til ${ totalLimit }-objekter. Filtrer dine data";const uniqueSeriesLineCountCannotExceedLimit="Der er i alt ${ elementCount } markører i dette diagram. Kurvediagrammer med en serie er begrænset til ${ totalLimit } markører. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const twoSeriesLineCountCannotExceedLimit="Kurvediagrammer med to serier er begrænset til ${ totalLimit } markører eller ${ seriesLimit } markører pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const threePlusSeriesLineCountCannotExceedLimit="Kurvediagrammer med tre eller flere serier er begrænset til ${ totalLimit } markører eller ${ seriesLimit } markører pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const lineSeriesCountCannotExceedLimit="Kurvediagrammer er begrænset til ${ seriesLimit } serier. Vælg et opdel efter-felt med færre unikke værdier";const uniqueSeriesBoxCountCannotExceedLimit="Der er i alt ${ elementCount } kasser i dette diagram. Kassediagrammer med en serie er begrænset til ${ totalLimit } kasser. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const twoSeriesBoxCountCannotExceedLimit="Kassediagrammer med to serier er begrænset til ${ totalLimit } kasser eller ${ seriesLimit } kasser pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const threePlusBoxLineCountCannotExceedLimit="Kassediagrammer med tre eller flere serier er begrænset til ${ totalLimit } kasser eller ${ seriesLimit } kasser pr. serie. Vælg et Kategorifelt med færre unikke værdier, eller brug et filter til dine data.";const boxSeriesCountCannotExceedLimit="Kassediagrammer er begrænset til ${ seriesLimit } serier. Vælg et opdel efter-felt med færre unikke værdier";const boxSeriesOutlierCannotExceedLimit="Kassediagrammer kan kun vise op til ${ totalLimit } afvigelsespunkter. Filtrér dine data.";var errors_t9n_da={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};

	exports.additionalProperty = additionalProperty;
	exports.anyOfValues = anyOfValues;
	exports.barSeriesCountCannotExceedLimit = barSeriesCountCannotExceedLimit;
	exports.boxSeriesCountCannotExceedLimit = boxSeriesCountCannotExceedLimit;
	exports.boxSeriesOutlierCannotExceedLimit = boxSeriesOutlierCannotExceedLimit;
	exports.bubbleChartValidateMsg = bubbleChartValidateMsg;
	exports["default"] = errors_t9n_da;
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
//# sourceMappingURL=errors.t9n.da-07d76eac-f9498329.js.map
