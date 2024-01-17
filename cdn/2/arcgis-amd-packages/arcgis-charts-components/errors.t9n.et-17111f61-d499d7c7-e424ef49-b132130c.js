define(["exports"],(function(exports){"use strict";
/*!
	 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
	 * See LICENSE.md for details.
	 * v1.0.0-beta.703
	 */const defaultError="Diagrammi laadimisel ilmnes viga.";const uniqueSeriesBarCountCannotExceedLimit="Selles diagrammis on kokku ${ elementCount } tulpa. Ühe seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const twoSeriesBarCountCannotExceedLimit="Kahe seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang, või ${ seriesLimit } tulpa seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const threePlusSeriesBarCountCannotExceedLimit="Kolme või enama seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang, või ${ seriesLimit } tulpa seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const barSeriesCountCannotExceedLimit="Lintdiagrammide sarjade piirarv on ${ seriesLimit }. Valige vähem unikaalsete väärtustega katkestamine välja alusel";const defaultInvalidChart="Diagrammi loomisel ilmnes viga.";const negativeValueInDataForLogTransformation="Logi teisendamisel ei saa kasutada negatiivseid väärtusi ega nullväärtusi.";const negativeValueInDataForSqrtTransformation="Ruutjuure teisendamist ei saa rakendada negatiivsetele väärtustele.";const layerLoadFailure="Kihi laadimisel tekkis viga. URL = ${ url }. Portaaliüksuse ID = ${ portalItemId }.";const duplicateSeriesID="${ dataPath } peab olema kordumatu. Seerial nimega ${ seriesName } on ID (${ seriesID }), mida kasutatakse juba muudes seeriates.";const nonNumericAggregation="${ dataPath } ei tohi mittenumbrilisel väljal teha loendamisega mitteseotud agregeerimist.";const requiredProperty="Omadusel ${ dataPath } puudub omadus nimega ${ missingProperty }.";const minLength="${ dataPath } ei tohi olla lühem kui ${ limit } märki.";const minItems="Muutujal ${ dataPath } ei tohi olla vähem kui ${ limit } üksust.";const maxItems="Muutujal ${ dataPath } ei tohi olla rohkem kui ${ limit } üksust.";const whiteSpacePattern="${ dataPath } peab sisaldama vähemalt ühte märki, mis pole tühimärk.";const additionalProperty="Muutujal ${ dataPath } ei tohi olla: ${ additionalProperty }.";const enumValues="${ dataPath } peab võrduma ühega allpool nimetatud väärtustest: ${ allowedValues }.";const anyOfValues="${ dataPath } peab vastama ühele nendest skeemidest: ${ schemaOptions }.";const bubbleChartValidateMsg="Proportsionaalsete sümbolitega hajuvusdiagramme ei toetata. Rakendatud on sümboli vaikesuurus.";const queryError="Sisendandmete lugemine nurjus.";const histogramEmptyField="Histogrammid nõuavad vähemalt kaht numbrilist väärtust.";const invalidSeriesType="Eeldatud seeriatüüp indeksis ${ seriesIndex } on '${ expectedType }', kuid saadi hoopis '${ receivedType }'";const or="või";const pieChartCannotHaveMixtureOfPositiveAndNegativeSlices="Veenduge, et valitud numbriväljade kogusumma tagastaks kõik positiivsed väärtused või kõik negatiivsed väärtused.";const pieChartSlicesCannotExceedLimit="Selles diagrammis on kokku ${ sliceCount } sektorit. Sektordiagrammide lõikude piirarv on ${ totalLimit }. Valige vähem unikaalsete väärtustega kategooria väli, lisage vähem arvulisi välju või rakendage oma andmetele filter.";const gaugeCannotExceedLimit="Objektipõhised mõõdikud on piiratud ${ totalLimit } objektiga. Filtreerige oma andmeid.";const uniqueSeriesLineCountCannotExceedLimit="Selles diagrammis on kokku ${ elementCount } markerit. Ühe seeriaga joondiagrammidel on tulba piirang ${ totalLimit } markerit. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const twoSeriesLineCountCannotExceedLimit="Kahe seeriaga joondiagrammidel kehtib piirang ${ totalLimit } markerit või ${ seriesLimit } markerit seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const threePlusSeriesLineCountCannotExceedLimit="Kolme või enama seeriaga joondiagrammidel kehtib piirang ${ totalLimit } markerit või ${ seriesLimit } markerit seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const lineSeriesCountCannotExceedLimit="Joondiagrammide seeriate piirang on ${ seriesLimit }. Valige vähem unikaalsete väärtustega katkestamine välja alusel";const uniqueSeriesBoxCountCannotExceedLimit="Selles diagrammis on kokku ${ elementCount } karpi. Ühe seeriaga karpdiagrammidel kehtib piirang ${ totalLimit } karpi. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const twoSeriesBoxCountCannotExceedLimit="Kahe seeriaga karpdiagrammidel kehtib piirang ${ totalLimit } karpi või ${ seriesLimit } karpi seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const threePlusBoxLineCountCannotExceedLimit="Kolme või enama seeriaga karpdiagrammil kehtib piirang ${ totalLimit } karpi või${ seriesLimit } karpi seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.";const boxSeriesCountCannotExceedLimit="Karpdiagrammide seeriate piirarv on ${ seriesLimit }. Valige vähem unikaalsete väärtustega katkestamine välja alusel";const boxSeriesOutlierCannotExceedLimit="Karpdiagrammid saavad kuvada ainult kuni ${ totalLimit } võõrväärtusega punkti. Filtreeri andmed.";var errors_t9n_et={defaultError,uniqueSeriesBarCountCannotExceedLimit,twoSeriesBarCountCannotExceedLimit,threePlusSeriesBarCountCannotExceedLimit,barSeriesCountCannotExceedLimit,defaultInvalidChart,negativeValueInDataForLogTransformation,negativeValueInDataForSqrtTransformation,layerLoadFailure,duplicateSeriesID,nonNumericAggregation,requiredProperty,minLength,minItems,maxItems,whiteSpacePattern,additionalProperty,enumValues,anyOfValues,bubbleChartValidateMsg,queryError,histogramEmptyField,invalidSeriesType,or,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices,pieChartSlicesCannotExceedLimit,gaugeCannotExceedLimit,uniqueSeriesLineCountCannotExceedLimit,twoSeriesLineCountCannotExceedLimit,threePlusSeriesLineCountCannotExceedLimit,lineSeriesCountCannotExceedLimit,uniqueSeriesBoxCountCannotExceedLimit,twoSeriesBoxCountCannotExceedLimit,threePlusBoxLineCountCannotExceedLimit,boxSeriesCountCannotExceedLimit,boxSeriesOutlierCannotExceedLimit};exports.additionalProperty=additionalProperty;exports.anyOfValues=anyOfValues;exports.barSeriesCountCannotExceedLimit=barSeriesCountCannotExceedLimit;exports.boxSeriesCountCannotExceedLimit=boxSeriesCountCannotExceedLimit;exports.boxSeriesOutlierCannotExceedLimit=boxSeriesOutlierCannotExceedLimit;exports.bubbleChartValidateMsg=bubbleChartValidateMsg;exports["default"]=errors_t9n_et;exports.defaultError=defaultError;exports.defaultInvalidChart=defaultInvalidChart;exports.duplicateSeriesID=duplicateSeriesID;exports.enumValues=enumValues;exports.gaugeCannotExceedLimit=gaugeCannotExceedLimit;exports.histogramEmptyField=histogramEmptyField;exports.invalidSeriesType=invalidSeriesType;exports.layerLoadFailure=layerLoadFailure;exports.lineSeriesCountCannotExceedLimit=lineSeriesCountCannotExceedLimit;exports.maxItems=maxItems;exports.minItems=minItems;exports.minLength=minLength;exports.negativeValueInDataForLogTransformation=negativeValueInDataForLogTransformation;exports.negativeValueInDataForSqrtTransformation=negativeValueInDataForSqrtTransformation;exports.nonNumericAggregation=nonNumericAggregation;exports.or=or;exports.pieChartCannotHaveMixtureOfPositiveAndNegativeSlices=pieChartCannotHaveMixtureOfPositiveAndNegativeSlices;exports.pieChartSlicesCannotExceedLimit=pieChartSlicesCannotExceedLimit;exports.queryError=queryError;exports.requiredProperty=requiredProperty;exports.threePlusBoxLineCountCannotExceedLimit=threePlusBoxLineCountCannotExceedLimit;exports.threePlusSeriesBarCountCannotExceedLimit=threePlusSeriesBarCountCannotExceedLimit;exports.threePlusSeriesLineCountCannotExceedLimit=threePlusSeriesLineCountCannotExceedLimit;exports.twoSeriesBarCountCannotExceedLimit=twoSeriesBarCountCannotExceedLimit;exports.twoSeriesBoxCountCannotExceedLimit=twoSeriesBoxCountCannotExceedLimit;exports.twoSeriesLineCountCannotExceedLimit=twoSeriesLineCountCannotExceedLimit;exports.uniqueSeriesBarCountCannotExceedLimit=uniqueSeriesBarCountCannotExceedLimit;exports.uniqueSeriesBoxCountCannotExceedLimit=uniqueSeriesBoxCountCannotExceedLimit;exports.uniqueSeriesLineCountCannotExceedLimit=uniqueSeriesLineCountCannotExceedLimit;exports.whiteSpacePattern=whiteSpacePattern}));